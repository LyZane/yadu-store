import type { Product } from '@/data/products'
import { BadgeCheck } from 'lucide-react'

const badgeColor: Record<string, string> = {
  旗舰: 'bg-violet-100 text-violet-700',
  热卖: 'bg-orange-100 text-orange-700',
  新款: 'bg-emerald-100 text-emerald-700',
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span
            className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold ${badgeColor[product.badge] ?? 'bg-cyan-100 text-cyan-700'}`}
          >
            {product.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="text-[11px] font-medium uppercase tracking-wide text-slate-400">{product.model}</div>
        <h3 className="mt-1 line-clamp-2 text-base font-bold leading-snug text-slate-900" title={product.tmallTitle}>
          {product.tmallTitle}
        </h3>
        <p className="mt-1 text-xs text-slate-500">{product.name}</p>
        <p className="mt-0.5 text-xs font-medium text-cyan-600">{product.tagline}</p>

        <ul className="mt-3 space-y-1.5">
          {product.highlights.map((h) => (
            <li key={h} className="flex items-start gap-1.5 text-xs leading-relaxed text-slate-600">
              <BadgeCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-500" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-slate-100 pt-4">
          {product.specs.slice(0, 3).map((s) => (
            <div key={s.label} className="rounded-lg bg-slate-50 px-2 py-1.5 text-center">
              <div className="text-[10px] text-slate-400">{s.label}</div>
              <div className="text-xs font-bold text-slate-800">{s.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.variants.map((v) => (
            <span key={v} className="rounded-full border border-slate-200 px-2.5 py-0.5 text-[10px] text-slate-500">
              {v}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
