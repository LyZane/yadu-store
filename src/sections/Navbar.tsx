import { Link } from 'react-router'
import { Droplets } from 'lucide-react'
import { scrollToId } from '@/lib/scroll'

// 页内锚点用 onClick 滚动实现（href 仅作语义标注），避免改动 hash 与 HashRouter 路由冲突
function anchorScroll(id: string) {
  return (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    scrollToId(id)
  }
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" onClick={anchorScroll('top')} className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-sm">
            <Droplets className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-bold tracking-wide text-slate-900">亚都 YADU</span>
            <span className="block text-[11px] text-slate-500">健康加湿 · 净润生活</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          <a href="#mist-free" onClick={anchorScroll('mist-free')} className="transition hover:text-cyan-600">无雾加湿器</a>
          <a href="#ultrasonic" onClick={anchorScroll('ultrasonic')} className="transition hover:text-cyan-600">超声波加湿器</a>
          <a href="#filters" onClick={anchorScroll('filters')} className="transition hover:text-cyan-600">滤网配件</a>
          <a href="#service" onClick={anchorScroll('service')} className="transition hover:text-cyan-600">服务保障</a>
          <Link to="/matrix" className="transition hover:text-cyan-600">产品矩阵</Link>
          <a href="marketing-brief.html" target="_blank" rel="noreferrer" className="transition hover:text-cyan-600">营销简报</a>
        </nav>
        <a
          href="#products"
          onClick={anchorScroll('products')}
          className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
        >
          全部商品
        </a>
      </div>
    </header>
  )
}
