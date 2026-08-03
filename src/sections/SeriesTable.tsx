import type { Product } from '@/data/products'

const machineRows: { label: string; get: (p: Product) => string }[] = [
  { label: '加湿量', get: (p) => p.compare.rate },
  { label: '水箱容量', get: (p) => p.compare.tank },
  { label: '适用面积', get: (p) => p.compare.area },
  { label: '噪音', get: (p) => p.compare.noise },
  { label: '额定功率', get: (p) => p.compare.power },
  { label: '适合谁', get: (p) => p.compare.bestFor },
]

const filterRows: { label: string; get: (p: Product) => string }[] = [
  { label: '适配主机', get: (p) => p.compare.bestFor },
  { label: '功能', get: () => '吸附水垢 / 净化水质' },
  { label: '清洁方式', get: () => '可水洗反复使用' },
]

export default function SeriesTable({ items, headClass = 'bg-slate-50' }: { items: Product[]; headClass?: string }) {
  const isFilter = items[0]?.category === '滤网配件'
  const rows = isFilter ? filterRows : machineRows

  return (
    <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full min-w-[640px] border-collapse text-sm">
        <thead>
          <tr className={headClass}>
            <th className="w-28 px-4 py-3 text-left text-xs font-semibold text-slate-400">快速对比</th>
            {items.map((p) => (
              <th key={p.id} className="min-w-[150px] px-4 py-3 text-center align-bottom">
                <img src={p.image} alt={p.name} className="mx-auto h-16 w-16 rounded-xl object-cover" />
                <div className="mt-2 line-clamp-2 text-xs font-bold leading-snug text-slate-800">{p.name}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
              <td className="px-4 py-2.5 text-xs font-semibold text-slate-400">{row.label}</td>
              {items.map((p) => (
                <td key={p.id} className="px-4 py-2.5 text-center text-xs font-medium text-slate-700">
                  {row.get(p)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
