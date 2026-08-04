import Navbar from '@/sections/Navbar'
import Footer from '@/sections/Footer'
import { articles } from '@/data/articles'
import { ArrowUpRight, Newspaper } from 'lucide-react'

export default function Articles() {
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

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <a
              key={a.slug}
              href={`articles/${a.slug}.html`}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-cyan-50 px-2 py-0.5 text-xs font-semibold text-cyan-700">
                  {a.tag}
                </span>
                <span className="text-xs text-slate-400">{a.date}</span>
              </div>
              <h2 className="mt-4 text-base font-bold leading-snug text-slate-900 transition group-hover:text-cyan-700">
                {a.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{a.summary}</p>
              <span className="mt-4 flex items-center gap-1 text-sm font-medium text-cyan-600">
                阅读全文
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
