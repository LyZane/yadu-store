import { ShieldCheck, Waves, GaugeCircle, Wind } from 'lucide-react'

const techs = [
  { icon: Wind, title: '无雾冷蒸发', desc: '无水雾无白粉，母婴易敏人群安心用' },
  { icon: ShieldCheck, title: 'UV-C 除菌', desc: '紫外线光解除菌，除菌率高达 99.99%' },
  { icon: Waves, title: '活水循环净化', desc: '麦饭石过滤水质，直加自来水' },
  { icon: GaugeCircle, title: 'AI 智能恒湿', desc: '自动维持舒适湿度，不湿不燥' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-cyan-50 via-sky-50 to-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div>
          <span className="inline-flex items-center rounded-full border border-cyan-200 bg-white px-4 py-1.5 text-xs font-semibold text-cyan-700 shadow-sm">
            专注健康加湿 · 守护易敏人群
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            舒享健康
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"> 净润全屋</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            从无雾冷蒸发到冷暖双雾旗舰，亚都全系列加湿器搭载 UV-C 除菌、活水循环与 AI 智能恒湿，
            为孕妇、儿童、老人与易敏人群打造洁净水润的居家空气。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#products"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
            >
              选购加湿器
            </a>
            <a
              href="#tech"
              className="rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600"
            >
              了解核心技术
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
            {[
              ['99.99%', '最高除菌率'],
              ['1000ml/h', '最大加湿量'],
              ['≤38dB', '柔声运行'],
            ].map(([v, k]) => (
              <div key={k}>
                <div className="text-2xl font-extrabold text-slate-900">{v}</div>
                <div className="text-xs text-slate-500">{k}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-cyan-200/50 to-blue-200/40 blur-2xl" />
          <img
            src="/images/120C.jpg"
            alt="亚都无雾加湿器旗舰款"
            className="relative w-full rounded-[2rem] border border-white bg-white object-contain shadow-2xl"
          />
        </div>
      </div>

      <div id="tech" className="mx-auto max-w-7xl px-4 pb-14 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techs.map((t) => (
            <div
              key={t.title}
              className="flex items-start gap-3.5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                <t.icon className="h-5 w-5" />
              </span>
              <div>
                <div className="font-semibold text-slate-900">{t.title}</div>
                <div className="mt-1 text-xs leading-relaxed text-slate-500">{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
