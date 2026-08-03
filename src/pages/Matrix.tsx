import { Link } from 'react-router'
import { ArrowLeft, Droplets, ExternalLink } from 'lucide-react'
import { matrix } from '@/data/matrix'
import type { MatrixCell } from '@/data/matrix'
import { cn } from '@/lib/utils'

/** 合并单元格索引：锚点单元格 -> 跨度，被覆盖单元格集合 */
function useMergeMaps() {
  const anchor = new Map<string, { rowSpan: number; colSpan: number }>()
  const covered = new Set<string>()
  for (const m of matrix.merges) {
    anchor.set(`${m.row}:${m.col}`, { rowSpan: m.rowCount, colSpan: m.colCount })
    for (let r = m.row; r < m.row + m.rowCount; r++) {
      for (let c = m.col; c < m.col + m.colCount; c++) {
        if (r !== m.row || c !== m.col) covered.add(`${r}:${c}`)
      }
    }
  }
  return { anchor, covered }
}

function CellContent({ cell }: { cell: MatrixCell }) {
  if (cell === null) return null
  if (typeof cell === 'object') {
    if ('image' in cell) {
      return (
        <img
          src={cell.image}
          alt=""
          loading="lazy"
          className="mx-auto h-24 w-24 object-contain"
        />
      )
    }
    return (
      <a
        href={cell.link.url}
        target="_blank"
        rel="noreferrer"
        className="font-medium text-cyan-600 hover:underline"
      >
        {cell.link.text}
      </a>
    )
  }
  return <span className="whitespace-pre-line">{String(cell)}</span>
}

export default function Matrix() {
  const { anchor, covered } = useMergeMaps()
  const syncedAt = new Date(matrix.syncedAt).toLocaleString('zh-CN', { hour12: false })

  return (
    <div className="flex h-screen flex-col bg-white">
      <header className="flex h-14 shrink-0 items-center justify-between border-b border-slate-200 px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm text-slate-500 transition hover:text-cyan-600"
          >
            <ArrowLeft className="h-4 w-4" />
            返回首页
          </Link>
          <span className="hidden items-center gap-2 sm:flex">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
              <Droplets className="h-4 w-4" />
            </span>
            <span className="text-base font-bold text-slate-900">{matrix.docTitle}</span>
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <span className="hidden md:inline">数据同步于 {syncedAt}</span>
          <a
            href={matrix.source}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 transition hover:text-cyan-600"
          >
            语雀源表
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      <div className="flex-1 overflow-auto">
        <table className="border-separate border-spacing-0 text-sm">
          <tbody>
            {matrix.rows.map((row, r) => (
              <tr key={r} className="group">
                {row.map((cell, c) => {
                  const key = `${r}:${c}`
                  if (covered.has(key)) return null
                  const span = anchor.get(key)
                  const isFirstCol = c === 0
                  const isFirstRow = r === 0
                  return (
                    <td
                      key={c}
                      rowSpan={span?.rowSpan}
                      colSpan={span?.colSpan}
                      className={cn(
                        'border-b border-r border-slate-200 px-3 py-2 align-middle text-slate-700',
                        isFirstCol &&
                          'sticky left-0 z-10 min-w-28 bg-slate-50 font-medium whitespace-nowrap text-slate-900',
                        isFirstRow &&
                          'sticky top-0 z-20 bg-slate-900 text-center font-semibold text-white',
                        isFirstCol && isFirstRow && 'z-30 bg-slate-900',
                        !isFirstCol && !isFirstRow && 'min-w-28 text-center group-hover:bg-cyan-50/40',
                      )}
                    >
                      <CellContent cell={cell} />
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
