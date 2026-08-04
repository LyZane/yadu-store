/** 文章中心的文章清单；文件放在 public/articles/ 下，以静态页形式分发 */
export interface Article {
  slug: string
  title: string
  summary: string
  date: string
  tag: string
  /** 封面图（相对路径，放在 public/images/articles/ 下）；无封面时卡片显示渐变占位 */
  cover?: string
}

export const articles: Article[] = [
  {
    slug: 'tmall-image-playbook',
    title: '电商主图与详情页视觉设计方法论',
    summary: '五张主图叙事结构、「环境融合 + 卖点提炼 + 视觉冲击」三原则、词图一致性与 AI 生图六段式提示词。',
    date: '2026-08',
    tag: '视觉方法论',
  },
  {
    slug: '120c',
    title: '120C 产品卖点与销售建议',
    summary: '无雾冷蒸发旗舰（12L / 1000ml/h），版本对照、卖点排序、「润擎柱」文案与主图详情页设计。',
    date: '2026-08',
    tag: '产品分析',
    cover: 'images/articles/120c.jpg',
  },
  {
    slug: '80c',
    title: '80C 产品卖点与销售建议',
    summary: '无雾冷蒸发（10L / 实测 1050ml/h），卖点排序、「无雾净润塔」文案与主图详情页设计。',
    date: '2026-08',
    tag: '产品分析',
    cover: 'images/articles/80c.png',
  },
  {
    slug: '50c',
    title: '50C 产品卖点与销售建议',
    summary: '无雾入门款（白 / 黑 / 语音版），版本对照、「加湿小圆舱」文案与主图详情页设计。',
    date: '2026-08',
    tag: '产品分析',
    cover: 'images/articles/50c.png',
  },
  {
    slug: '130e',
    title: '130E 产品卖点与销售建议',
    summary: '冷热雾双模旗舰（13L / 实测 602ml/h），「双雾塔」文案与主图详情页设计。',
    date: '2026-08',
    tag: '产品分析',
    cover: 'images/articles/130e.png',
  },
  {
    slug: '180',
    title: '180 产品卖点与销售建议',
    summary: '20L 双核大雾量落地款，别墅大空间首选，「双擎润塔」文案与主图详情页设计。',
    date: '2026-08',
    tag: '产品分析',
    cover: 'images/articles/180.png',
  },
  {
    slug: '130c',
    title: '130C 产品卖点与销售建议',
    summary: '13L 经典畅销款（灰 / 金 / 白 / WiFi 版），版本对照、「亚都水塔」文案与主图详情页设计。',
    date: '2026-08',
    tag: '产品分析',
    cover: 'images/articles/130c.png',
  },
  {
    slug: '130d',
    title: '130D 产品卖点与销售建议',
    summary: '130C 净化加强版（白 / 金 / 金色 WiFi），三重抑菌，「净雾灯塔」文案与主图详情页设计。',
    date: '2026-08',
    tag: '产品分析',
    cover: 'images/articles/130d.png',
  },
  {
    slug: '090p-selling-points',
    title: '090P 产品卖点与销售建议',
    summary: '顶部触控落地款，卖点排序、文案主张、证据链，含天猫主图与详情页设计方案。',
    date: '2026-07',
    tag: '产品分析',
    cover: 'images/articles/090p-selling-points.png',
  },
  {
    slug: '050',
    title: '050 产品卖点与销售建议',
    summary: '超声波桌面款（机械 / 触摸 / 智能三版本），「小灯柱」文案与主图详情页设计。',
    date: '2026-08',
    tag: '产品分析',
    cover: 'images/articles/050.png',
  },
  {
    slug: '35c',
    title: '35C 产品卖点与销售建议',
    summary: '3L 透明台面款（旋钮 / 触摸 / 智能三版本），「小泉灯」文案与主图详情页设计。',
    date: '2026-08',
    tag: '产品分析',
    cover: 'images/articles/35c.png',
  },
  {
    slug: '04a',
    title: '04A 产品卖点与销售建议',
    summary: '桌面入门款（4L / 28dB 全系最静 / 七色灯），「小光罐」文案与主图详情页设计。',
    date: '2026-08',
    tag: '产品分析',
    cover: 'images/articles/04a.jpg',
  },
  {
    slug: 'xiaohongshu-research',
    title: '小红书加湿器市场调研报告',
    summary: '小红书平台加湿器内容热度、无雾品类趋势、品牌竞争格局与消费者痛点洞察。',
    date: '2026-08',
    tag: '市场调研',
  },
  {
    slug: 'marketing-brief',
    title: '营销简报：卖点 × 人群 × 话术 × 商品图文案',
    summary: '核心策略定位、五类人群沟通话术，以及三层卖点结构的主图 / 详情页文案。',
    date: '2026-07',
    tag: '营销简报',
  },
  {
    slug: 'decision-model-research',
    title: '加湿器产品决策模型研究',
    summary: '消费者五步决策路径、决策因素权重与人群差异，含可交互的权重切换图表。',
    date: '2026-07',
    tag: '决策研究',
  },
  {
    slug: 'consumer-decision-report',
    title: '加湿器消费决策模型调研报告',
    summary: '决策因素排序、五类人群画像与无雾品类趋势，营销简报的策略依据。',
    date: '2026-07',
    tag: '调研报告',
  },
]
