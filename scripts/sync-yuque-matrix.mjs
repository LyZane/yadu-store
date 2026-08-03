#!/usr/bin/env node
/**
 * 语雀「产品矩阵」表格同步脚本
 *
 * 数据源：https://www.yuque.com/zane.luo/ome6o0/gpe29230v3z0wvz4 （公开文档，无需 Token）
 * 原理：语雀前端通过 /api/docs/{slug} 拉取文档，body 中的 sheet 字段是
 *       zlib 压缩后以 latin-1 编码的 lakesheet 工作簿 JSON，解压后解析单元格。
 *
 * 用法：npm run sync:matrix
 * 输出：src/data/matrix.ts（自动生成，请勿手改）
 */
import { inflateSync } from 'node:zlib'
import { writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const BOOK_ID = 81131622
const DOC_SLUG = 'gpe29230v3z0wvz4'
const DOC_URL = `https://www.yuque.com/zane.luo/ome6o0/${DOC_SLUG}`
const API_URL = `https://www.yuque.com/api/docs/${DOC_SLUG}?include_contributors=false&include_like=false&include_hits=false&merge_dynamic_data=false&book_id=${BOOK_ID}`
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUT_FILE = join(ROOT, 'src/data/matrix.ts')
// 语雀 CDN 有防盗链（带 Referer 即 403），图片必须下载到本地随站点分发
const IMG_DIR = join(ROOT, 'public/images/matrix')

const MIME_EXT = { 'image/png': '.png', 'image/jpeg': '.jpg', 'image/webp': '.webp', 'image/gif': '.gif' }

/** 下载语雀图片到 public/images/matrix/，返回站内相对路径；已存在则跳过 */
async function localizeImage(url) {
  const name = url.split('/').pop().split('?')[0]
  const base = name.replace(/\.[a-z]+$/i, '')
  const match = name.match(/\.([a-z]+)$/i)
  let file = `${base}${match ? '.' + match[1].toLowerCase() : '.png'}`
  const path = join(IMG_DIR, file)
  if (!existsSync(path)) {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (yadu-store sync script)' } })
    if (!res.ok) throw new Error(`图片下载失败：HTTP ${res.status} ${url}`)
    const ext = MIME_EXT[res.headers.get('content-type')]
    if (ext && !file.endsWith(ext)) file = `${base}${ext}`
    writeFileSync(join(IMG_DIR, file), Buffer.from(await res.arrayBuffer()))
    console.log(`  下载图片 ${file}`)
  }
  return `images/matrix/${file}`
}

/** 提取单元格展示值：优先 m（格式化文本），回退 v（原始值）；富文本单元格识别图片与链接 */
async function cellValue(cell) {
  const v = cell.m ?? cell.v
  if (v === null || v === undefined || v === '') return null
  if (typeof v === 'object') {
    if (v.class === 'image' && v.src) return { image: await localizeImage(v.src) }
    if (v.class === 'link' && (v.text || v.url)) {
      return { link: { text: v.text ?? v.url, url: v.url ?? '' } }
    }
    return v.text ? String(v.text) : null
  }
  return typeof v === 'number' ? v : String(v)
}

async function main() {
  console.log(`拉取语雀文档：${DOC_URL}`)
  const res = await fetch(API_URL, {
    headers: { 'User-Agent': 'Mozilla/5.0 (yadu-store sync script)' },
  })
  if (!res.ok) throw new Error(`语雀接口请求失败：HTTP ${res.status}`)
  const json = await res.json()
  const doc = json?.data
  if (!doc?.body) throw new Error('接口返回中缺少文档内容（data.body），文档可能已转为非公开')

  const body = JSON.parse(doc.body)
  if (body.format !== 'lakesheet' || !body.sheet) {
    throw new Error(`不支持的文档格式：${body.format}（期望 lakesheet 电子表格）`)
  }

  // sheet 字段每个字符的码点即一个压缩字节
  const compressed = Buffer.from(body.sheet, 'latin1')
  for (let i = 0; i < body.sheet.length; i++) {
    if (body.sheet.charCodeAt(i) > 255) throw new Error('sheet 字段编码异常，解压中止')
  }
  const workbook = JSON.parse(inflateSync(compressed).toString('utf-8'))
  const sheet = workbook[0]
  console.log(`工作簿解析成功，工作表：${sheet.name}`)

  // 还原为二维网格，并裁剪掉尾部空行空列
  mkdirSync(IMG_DIR, { recursive: true })
  const data = sheet.data ?? {}
  const grid = new Map() // "r:c" -> value
  let maxRow = -1
  let maxCol = -1
  for (const [r, row] of Object.entries(data)) {
    for (const [c, cell] of Object.entries(row)) {
      const value = await cellValue(cell)
      if (value === null) continue
      const ri = Number(r)
      const ci = Number(c)
      grid.set(`${ri}:${ci}`, value)
      if (ri > maxRow) maxRow = ri
      if (ci > maxCol) maxCol = ci
    }
  }
  if (maxRow < 0 || maxCol < 0) throw new Error('表格为空，未提取到任何单元格')

  const rows = []
  for (let r = 0; r <= maxRow; r++) {
    const row = []
    for (let c = 0; c <= maxCol; c++) row.push(grid.get(`${r}:${c}`) ?? null)
    rows.push(row)
  }

  const merges = Object.values(sheet.mergeCells ?? {})
    .filter((m) => m.row <= maxRow && m.col <= maxCol)
    .map((m) => ({ row: m.row, col: m.col, rowCount: m.rowCount, colCount: m.colCount }))

  const matrix = {
    source: DOC_URL,
    docTitle: doc.title ?? '产品矩阵',
    sheetName: sheet.name ?? 'Sheet1',
    syncedAt: new Date().toISOString(),
    merges,
    rows,
  }

  const ts = `// 本文件由 scripts/sync-yuque-matrix.mjs 自动生成，请勿手动修改
// 重新生成：npm run sync:matrix
export type MatrixCell = null | string | number | { image: string } | { link: { text: string; url: string } }

export interface MatrixMerge {
  row: number
  col: number
  rowCount: number
  colCount: number
}

export interface MatrixData {
  source: string
  docTitle: string
  sheetName: string
  syncedAt: string
  merges: MatrixMerge[]
  rows: MatrixCell[][]
}

export const matrix: MatrixData = ${JSON.stringify(matrix, null, 2)}
`
  writeFileSync(OUT_FILE, ts)
  console.log(`已写入 ${OUT_FILE}：${rows.length} 行 × ${rows[0].length} 列，${merges.length} 个合并单元格`)
}

main().catch((err) => {
  console.error(`同步失败：${err.message}`)
  process.exit(1)
})
