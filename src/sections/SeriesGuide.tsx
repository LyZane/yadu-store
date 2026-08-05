import type { SeriesGuide } from '@/data/products'
import { seriesThemes } from '@/data/products'
import { Check, X, Lightbulb } from 'lucide-react'

export default function SeriesGuideBlock({ guide }: { guide: SeriesGuide }) {
  const theme = seriesThemes[guide.id]

  return (
    <div className={`overflow-hidden rounded-3xl border shadow-sm ${theme?.wrap ?? 'border-border bg-white'}`}>
      <div className="p-6 sm:p-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">{guide.name}</h2>
        <p className={`mt-2 text-sm font-semibold sm:text-base ${theme?.oneLiner ?? 'text-primary'}`}>
          {guide.oneLiner}
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">{guide.what}</p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="text-sm font-bold text-emerald-600">这些情况，选它准没错</div>
            <ul className="mt-3 space-y-2">
              {guide.fits.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="text-sm font-bold text-rose-500">这些情况，建议再看看</div>
            <ul className="mt-3 space-y-2">
              {guide.notFits.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`mt-5 flex items-start gap-2.5 rounded-2xl border px-5 py-4 ${theme?.tip ?? 'border-primary/25 bg-primary-50'}`}>
          <Lightbulb className={`mt-0.5 h-4 w-4 shrink-0 ${theme?.tipIcon ?? 'text-primary'}`} />
          <p className="text-sm leading-relaxed text-foreground">{guide.pickTip}</p>
        </div>
      </div>
    </div>
  )
}
