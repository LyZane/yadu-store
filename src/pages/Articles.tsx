import { useMemo, useState } from 'react'
import Navbar from '@/sections/Navbar'
import Footer from '@/sections/Footer'
import { articles } from '@/data/articles'
import { ArrowUpRight, Newspaper, Search, SearchX } from 'lucide-react'
import { cn } from '@/lib/utils'

const ALL_TAG = '全部'

export default function Articles() {
  const [query, setQuery] = useState('')
  const [activeTag, setActiveTag] = useState(ALL_TAG)

  // 从清单中提取全部标签（保持出现顺序）
  const tags = useMemo(() => [ALL_TAG, ...new Set(articles.map((a) => a.tag))], [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return articles.filter((a) => {
      if (activeTag !== ALL_TAG && a.tag !== activeTag) return false
      if (!q) return true
      return (
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.tag.toLowerCase().includes(q)
      )
    })
  }, [query, activeTag])

  return (
    <div className="flex min-h-screen flex-col bg-muted font-sans text-foreground antialiased">
      <Navbar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-12 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-sm">
            <Newspaper className="h-5 w-5" />
          </span>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">文章中心</h1>
            <p className="text-sm text-muted-foreground">市场调研、产品分析与营销文案，内部资料汇总</p>
          </div>
        </div>

        {/* 搜索 + 标签筛选 */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="搜索标题、摘要或标签…"
              className="w-full rounded-full border border-border bg-white py-2 pl-9 pr-4 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={cn(
                  'rounded-full border px-3.5 py-1.5 text-xs font-medium transition',
                  activeTag === tag
                    ? 'border-primary bg-primary text-white shadow-sm'
                    : 'border-border bg-white text-muted-foreground hover:border-primary/50 hover:text-primary-700',
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* 文章列表：一行一篇，提高信息密度 */}
        {filtered.length > 0 ? (
          <div className="mt-6 flex flex-col gap-2.5">
            {filtered.map((a) => (
              <a
                key={a.slug}
                href={`articles/${a.slug}.html`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-border bg-white px-4 py-3 shadow-sm transition hover:border-primary/50 hover:shadow-md"
              >
                {a.cover ? (
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-border bg-white p-1">
                    <img src={a.cover} alt="" loading="lazy" className="max-h-full max-w-full object-contain" />
                  </span>
                ) : (
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-brand-gradient text-white">
                    <Newspaper className="h-6 w-6" />
                  </span>
                )}
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2">
                    <span className="truncate text-[15px] font-bold text-foreground transition group-hover:text-primary-700">
                      {a.title}
                    </span>
                    <span className="hidden shrink-0 rounded bg-primary-50 px-1.5 py-0.5 text-[11px] font-semibold text-primary-700 sm:inline">
                      {a.tag}
                    </span>
                  </span>
                  <span className="mt-0.5 block truncate text-[13px] text-muted-foreground">{a.summary}</span>
                </span>
                <span className="hidden shrink-0 text-xs text-muted-foreground md:inline">{a.date}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>
            ))}
          </div>
        ) : (
          <div className="mt-16 flex flex-col items-center gap-3 text-muted-foreground">
            <SearchX className="h-10 w-10" />
            <p className="text-sm">没有找到匹配的文章，换个关键词或标签试试</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
