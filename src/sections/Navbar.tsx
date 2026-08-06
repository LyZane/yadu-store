import { Link, useLocation, useNavigate } from 'react-router'
import { Droplets } from 'lucide-react'
import { scrollToId, scrollToIdWhenReady } from '@/lib/scroll'

// 页内锚点用 onClick 滚动实现（href 仅作语义标注），避免改动 hash 与 HashRouter 路由冲突；
// 不在首页时先跳回首页，等渲染完成再滚动到目标锚点
function useAnchorScroll() {
  const navigate = useNavigate()
  const location = useLocation()
  return (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (location.pathname === '/') {
      scrollToId(id)
    } else {
      navigate('/')
      scrollToIdWhenReady(id)
    }
  }
}

export default function Navbar() {
  const anchorScroll = useAnchorScroll()
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" onClick={anchorScroll('top')} className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-sm">
            <Droplets className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-bold tracking-wide text-foreground">亚都 YADU</span>
            <span className="block text-[11px] text-muted-foreground">健康加湿 · 净润生活</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          <a href="#top" onClick={anchorScroll('top')} className="transition hover:text-primary">首页</a>
          <Link to="/matrix" className="transition hover:text-primary">产品矩阵</Link>
          <Link to="/articles" className="transition hover:text-primary">文章中心</Link>
        </nav>
        <a
          href="#products"
          onClick={anchorScroll('products')}
          className="rounded-full bg-brand-gradient px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
        >
          全部商品
        </a>
      </div>
    </header>
  )
}
