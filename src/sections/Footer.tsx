import { Droplets } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-10 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 text-center sm:px-6">
        <div className="flex items-center gap-2 text-white">
          <Droplets className="h-5 w-5 text-primary" />
          <span className="text-lg font-bold">亚都 YADU</span>
        </div>
        <p className="max-w-xl text-xs leading-relaxed">
          本页面所展示的产品卖点与规格参数均来自产品物料图标注，主图宣传值与详情参数表如存在差异，以产品铭牌及最新说明书为准。
        </p>
        <p className="text-xs">健康加湿 · 净润生活</p>
      </div>
    </footer>
  )
}
