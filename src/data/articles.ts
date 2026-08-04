/** 文章中心的文章清单；文件放在 public/articles/ 下，以静态页形式分发 */
export interface Article {
  slug: string
  title: string
  summary: string
  date: string
  tag: string
}

export const articles: Article[] = [
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
  {
    slug: '090p-selling-points',
    title: '090P 产品卖点与销售建议',
    summary: '090P 单品的核心卖点排序、文案主张、证据链与渠道销售建议。',
    date: '2026-07',
    tag: '产品分析',
  },
]
