import { Truck, ShieldCheck, RefreshCcw, FileCheck2 } from 'lucide-react'

const items = [
  { icon: RefreshCcw, title: '365 天只换不修', desc: '质量问题直接换新，售后无忧' },
  { icon: ShieldCheck, title: '两年保修', desc: '旗舰正品，假一罚十' },
  { icon: FileCheck2, title: 'EMC 国际检测合格', desc: '权威检测报告背书，母婴安心' },
  { icon: Truck, title: '多仓速发', desc: '当日 / 次日达，收藏加购优先发货' },
]

export default function ServiceBar() {
  return (
    <section id="service" className="border-t border-border bg-muted py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="flex items-start gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                <it.icon className="h-5 w-5" />
              </span>
              <div>
                <div className="font-bold text-foreground">{it.title}</div>
                <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{it.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
