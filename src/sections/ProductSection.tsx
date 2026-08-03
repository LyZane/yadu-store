import { products, seriesGuides, seriesThemes } from '@/data/products'
import { scrollToId } from '@/lib/scroll'
import ProductCard from './ProductCard'
import SeriesGuideBlock from './SeriesGuide'
import SeriesTable from './SeriesTable'
import { Baby, Wind, Monitor } from 'lucide-react'

// 选型卡标题悬停色（字面量类名，确保 Tailwind 编译时生成）
const titleHover: Record<string, string> = {
  'mist-free': 'group-hover:text-emerald-600',
  ultrasonic: 'group-hover:text-blue-600',
  desktop: 'group-hover:text-amber-600',
  filters: 'group-hover:text-violet-600',
}

const quickLinks = [
  {
    href: '#mist-free',
    icon: Baby,
    title: '有宝宝 / 易敏人群？',
    desc: '选无雾系列：没有白雾、不打湿地、无白粉，自来水直接加',
  },
  {
    href: '#ultrasonic',
    icon: Wind,
    title: '客厅 / 大户型？',
    desc: '选超声波落地款：9L-20L 大水箱，大雾量全屋覆盖',
  },
  {
    href: '#desktop',
    icon: Monitor,
    title: '卧室 / 办公桌小空间？',
    desc: '选超声波桌面款：3L-5L 小巧轻音，入门价更划算',
  },
]

export default function ProductSection() {
  return (
    <section id="products" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">按系列选购</h2>
          <p className="mt-3 text-sm text-slate-500">
            无雾 / 超声波落地 / 超声波桌面 / 滤网配件，几秒钟看完；每个系列都告诉你"适合谁、怎么选"
          </p>
        </div>

        {/* 30 秒选型 */}
        <div className="mx-auto mt-8 grid max-w-6xl gap-4 sm:grid-cols-3">
          {quickLinks.map((q) => {
            const theme = seriesThemes[q.href.slice(1)]
            return (
              <a
                key={q.href}
                href={q.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToId(q.href.slice(1))
                }}
                className={`group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md ${theme?.quickHover ?? ''}`}
              >
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${theme?.quickIcon ?? ''}`}>
                  <q.icon className="h-5 w-5" />
                </span>
                <span>
                  <span className={`block font-bold text-slate-900 ${titleHover[q.href.slice(1)] ?? ''}`}>
                    {q.title}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-slate-500">{q.desc}</span>
                </span>
              </a>
            )
          })}
        </div>

        {/* 系列分组 */}
        {seriesGuides.map((guide) => {
          const items = products.filter((p) => p.category === guide.name)
          const theme = seriesThemes[guide.id]
          return (
            <div key={guide.id} id={guide.id} className="mt-14 scroll-mt-24">
              <SeriesGuideBlock guide={guide} />
              <SeriesTable items={items} headClass={theme?.tableHead} />
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {items.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
