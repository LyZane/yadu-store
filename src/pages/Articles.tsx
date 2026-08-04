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
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900 antialiased">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-14 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-sm">
            <Newspaper className="h-5 w-5" />
          </span>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">文章中心</h1>
            <p className="text-sm text-slate-500">市场调研、产品分析与营销文案，内部资料汇总</p>
          </div>
        </div>

        {/* 搜索 + 标签筛选 */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="搜索标题、摘要或标签…"
              className="w-full rounded-full border border-slate-200 bg-white py-2 pl-9 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100"
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
                    ? 'border-cyan-600 bg-cyan-600 text-white shadow-sm'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-cyan-300 hover:text-cyan-700',
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* 文章卡片 */}
        {filtered.length > 0 ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a) => (
              <a
                key={a.slug}
                href={`articles/${a.slug}.html`}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-md"
              >
                {a.cover ? (
                  <div className="flex h-44 items-center justify-center bg-white p-4">
                    <img
                      src={a.cover}
                      alt={a.title}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain transition group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="flex h-24 items-end bg-gradient-to-br from-cyan-500 to-blue-600 p-4">
                    <span className="rounded-md bg-white/15 px-2 py-0.5 text-xs font-semibold text-white">
                      {a.tag}
                    </span>
                  </div>
                )}
                <div className="flex flex-1 flex-col border-t border-slate-100 p-5">
                  <div className="flex items-center justify-between">
                    {a.cover ? (
                      <span className="rounded-md bg-cyan-50 px-2 py-0.5 text-xs font-semibold text-cyan-700">
                        {a.tag}
                      </span>
                    ) : (
                      <span />
                    )}
                    <span className="text-xs text-slate-400">{a.date}</span>
                  </div>
                  <h2 className="mt-3 text-base font-bold leading-snug text-slate-900 transition group-hover:text-cyan-700">
                    {a.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{a.summary}</p>
                  <span className="mt-4 flex items-center gap-1 text-sm font-medium text-cyan-600">
                    阅读全文
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="mt-16 flex flex-col items-center gap-3 text-slate-400">
            <SearchX className="h-10 w-10" />
            <p className="text-sm">没有找到匹配的文章，换个关键词或标签试试</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
