export type Category = '无雾加湿器' | '超声波落地款' | '超声波桌面款' | '滤网配件'

export interface CompareInfo {
  rate: string
  tank: string
  area: string
  noise: string
  power: string
  bestFor: string
}

export interface Product {
  id: string
  name: string
  tmallTitle: string
  model: string
  category: Category
  image: string
  tagline: string
  highlights: string[]
  specs: { label: string; value: string }[]
  variants: string[]
  badge?: string
  compare: CompareInfo
}

// tmallTitle 按天猫规则控制在 60 字符（30 汉字）以内
export const products: Product[] = [
  {
    id: '120C',
    name: '亚都无雾加湿器 12L 旗舰款',
    tmallTitle: '亚都无雾加湿器家用静音卧室大容量孕妇婴儿冷蒸发式除菌空气净化',
    model: 'SC800-YXS120C',
    category: '无雾加湿器',
    image: '/images/120C.jpg',
    tagline: '无雾加湿器 舒享健康 净润全屋',
    highlights: [
      '1000ml/h 澎湃加湿量，80-100㎡ 大空间一台就够',
      '全链路五重净化除菌，除菌率 99.99%',
      '无雾冷蒸发式加湿，无粉尘水渍，呵护易敏人群',
      'APP 远程智控 + 语音控制"小亚"',
    ],
    specs: [
      { label: '加湿量', value: '1000ml/h' },
      { label: '水箱容量', value: '12L' },
      { label: '适用面积', value: '80-100㎡' },
      { label: '噪音', value: '≤38dB' },
      { label: '额定功率', value: '18W' },
    ],
    variants: ['白色', '灰色'],
    badge: '旗舰',
    compare: {
      rate: '1000ml/h',
      tank: '12L',
      area: '80-100㎡',
      noise: '≤38dB',
      power: '18W',
      bestFor: '大平层/全屋，母婴易敏家庭',
    },
  },
  {
    id: '80C',
    name: '亚都无雾加湿器 10L 智能除菌款',
    tmallTitle: '亚都无雾加湿器家用静音卧室孕妇婴儿大容量冷蒸发式除菌智能恒湿',
    model: 'SZ800-YXS80C',
    category: '无雾加湿器',
    image: '/images/80C.jpg',
    tagline: '七大核心升级 解锁净润新体验',
    highlights: [
      '1000ml/h 大加湿量（检测报告实测 1050ml/h）',
      '五重净化除菌，除菌率 99.99%（权威检测报告背书）',
      '不挑水质直加自来水，无水雾无白粉不打湿地板',
      '智能恒湿 30%-95%，红外遥控 + 1-12 小时定时',
    ],
    specs: [
      { label: '加湿量', value: '1000ml/h' },
      { label: '水箱容量', value: '10L' },
      { label: '适用面积', value: '20-60㎡' },
      { label: '除菌率', value: '99.99%' },
      { label: '额定功率', value: '18W' },
    ],
    variants: ['智能除菌款（银色）'],
    badge: '热卖',
    compare: {
      rate: '1000ml/h',
      tank: '10L',
      area: '20-60㎡',
      noise: '柔声低音',
      power: '18W',
      bestFor: '客厅主卧，看重除菌检测报告',
    },
  },
  {
    id: '50C',
    name: '亚都无雾加湿器 5L 母婴款',
    tmallTitle: '亚都无雾加湿器家用静音卧室孕妇婴儿小型冷蒸发式除菌母婴空调房',
    model: 'SZ400-YXS50C',
    category: '无雾加湿器',
    image: '/images/50C白.jpg',
    tagline: '无雾抗菌 母婴加湿',
    highlights: [
      '冷蒸发无雾加湿，无水雾无粉尘，呵护敏感人群',
      'UV-C 高效除菌 + 麦饭石深层净化水质',
      '5L 大容量 400ml/h，12.5 小时长效加湿',
      '一键智能恒湿 40-70%，红外遥控 + 实时显屏',
    ],
    specs: [
      { label: '加湿量', value: '400ml/h' },
      { label: '水箱容量', value: '5L' },
      { label: '适用面积', value: '20-40㎡' },
      { label: '加湿时长', value: '12.5h' },
      { label: '额定功率', value: '9W' },
    ],
    variants: ['白色', '黑色'],
    compare: {
      rate: '400ml/h',
      tank: '5L',
      area: '20-40㎡',
      noise: '柔声',
      power: '9W（超省电）',
      bestFor: '卧室/儿童房，无雾入门首选',
    },
  },
  {
    id: '130E',
    name: '亚都冷暖雾超声波加湿器 13L',
    tmallTitle: '亚都加湿器家用静音卧室大雾量冷暖雾孕妇婴儿除菌恒湿大容量客厅',
    model: 'SC550-YXS130E',
    category: '超声波落地款',
    image: '/images/130E.jpg',
    tagline: '创新冷暖雾加湿 冬暖夏凉 水润加倍',
    highlights: [
      '600ml/h 澎湃巨雾量，覆盖全屋（检测报告实测）',
      '创新冷&暖双雾一体，40℃ 辅热 + UV-C 双重除菌',
      '13L 充沛容量，活水循环 + 麦饭石过滤系统',
      'AI 智能恒湿，六档雾量，赠加长导雾管',
    ],
    specs: [
      { label: '加湿量', value: '最高602ml/h' },
      { label: '水箱容量', value: '13L' },
      { label: '暖雾辅热', value: '40℃' },
      { label: '雾量档位', value: '6档' },
      { label: '额定功率', value: '35W/835W' },
    ],
    variants: ['黑银配色（赠加长导雾管）'],
    badge: '旗舰',
    compare: {
      rate: '最高602ml/h',
      tank: '13L',
      area: '全屋覆盖',
      noise: '柔声',
      power: '冷雾35W / 暖雾835W',
      bestFor: '怕冷想要暖雾，旗舰体验',
    },
  },
  {
    id: '180',
    name: '亚都除菌净化加湿器 20L 大雾量',
    tmallTitle: '亚都加湿器家用静音大雾量大容量落地式别墅客厅除菌净化孕妇婴儿',
    model: 'SC500-QL180',
    category: '超声波落地款',
    image: '/images/180.jpg',
    tagline: '别墅级大雾量 全屋加湿',
    highlights: [
      '700ml/h 大雾量，双核驱动一台顶两台',
      'UV-C 杀菌 + 麦饭石滤芯活水循环系统',
      '20L 超大容量，万向脚轮满水也可移动',
      '专利主机提起防漏设计，抽水结构不漏水',
    ],
    specs: [
      { label: '加湿量', value: '700ml/h' },
      { label: '水箱容量', value: '20L' },
      { label: '雾化核心', value: '双核驱动' },
      { label: '定时', value: '1-14h' },
      { label: '额定功率', value: '55W' },
    ],
    variants: ['20L 白色', '18L 白色（600ml/h）'],
    compare: {
      rate: '700ml/h',
      tank: '20L',
      area: '大面积全屋',
      noise: '柔声',
      power: '55W',
      bestFor: '别墅/超大空间，双核大雾量',
    },
  },
  {
    id: '130D',
    name: '亚都智能除菌加湿器 13L 三重净化',
    tmallTitle: '亚都加湿器家用静音卧室大雾量孕妇婴儿除菌净化恒湿大容量落地式',
    model: 'SC400-YXS130D',
    category: '超声波落地款',
    image: '/images/130D.jpg',
    tagline: '过滤+除菌+净化 呼吸 0 风险',
    highlights: [
      '麦饭石过滤 + 负离子净化 + UV-C 光解除菌三重抑菌',
      '400ml/h 巨雾加湿，顷刻沁润整屋',
      '13L 充沛容量，32 小时长效续航',
      '智能变频恒湿，红外遥控 + 上置触控不弯腰',
    ],
    specs: [
      { label: '加湿量', value: '400ml/h' },
      { label: '水箱容量', value: '13L' },
      { label: '适用面积', value: '30-50㎡' },
      { label: '噪音', value: '≤38dB' },
      { label: '额定功率', value: '25W' },
    ],
    variants: ['白色', '金色'],
    compare: {
      rate: '400ml/h',
      tank: '13L',
      area: '30-50㎡',
      noise: '≤38dB',
      power: '25W',
      bestFor: '看重净化，三重抑菌加强版',
    },
  },
  {
    id: '130C',
    name: '亚都智能除菌加湿器 13L 经典款',
    tmallTitle: '亚都加湿器家用静音卧室大雾量大容量孕妇婴儿除菌恒湿客厅空调房',
    model: 'SC400-YXS130C',
    category: '超声波落地款',
    image: '/images/130C.jpg',
    tagline: '高效健康加湿 洁净水润呵护',
    highlights: [
      'UV-C 光解除菌技术，除菌率 99.9%',
      '400ml/h 巨雾加湿，顷刻沁润整屋',
      '活水循环系统，抽水结构不漏水',
      '一键智能恒湿 50-70%，13L 大容量',
    ],
    specs: [
      { label: '加湿量', value: '400ml/h' },
      { label: '水箱容量', value: '13L' },
      { label: '适用面积', value: '30-50㎡' },
      { label: '噪音', value: '≤38dB' },
      { label: '额定功率', value: '25W' },
    ],
    variants: ['白色', '深灰', '金色'],
    compare: {
      rate: '400ml/h',
      tank: '13L',
      area: '30-50㎡',
      noise: '≤38dB',
      power: '25W',
      bestFor: '客厅日常加湿，经典畅销',
    },
  },
  {
    id: '090P',
    name: '亚都落地式加湿器 9L 活水净润',
    tmallTitle: '亚都加湿器家用静音卧室大雾量落地式大容量除菌恒湿孕妇婴儿客厅',
    model: '090P 智能杀菌款 / 触控款',
    category: '超声波落地款',
    image: '/images/090P.jpg',
    tagline: '9L 活水净润 智能恒湿',
    highlights: [
      'UV-C 紫外线杀菌，除菌率高达 99.9%',
      '350ml/h 巨雾加湿，顷刻沁润满屋',
      '麦饭石活水循环净水，直加自来水',
      'AI 智能恒湿 40-70%，三档可调 ≤38dB 柔声',
    ],
    specs: [
      { label: '加湿量', value: '350ml/h' },
      { label: '水箱容量', value: '9L' },
      { label: '噪音', value: '≤38dB' },
      { label: '定时', value: '1-14h' },
      { label: '额定功率', value: '26W' },
    ],
    variants: ['智能杀菌款（数显+遥控）', '触控款'],
    badge: '新款',
    compare: {
      rate: '350ml/h',
      tank: '9L',
      area: '客厅大空间',
      noise: '≤38dB',
      power: '26W',
      bestFor: '新款，顶部触控/遥控不弯腰',
    },
  },
  {
    id: '050',
    name: '亚都除菌恒湿加湿器 5L 桌面款',
    tmallTitle: '亚都加湿器家用静音卧室小型大雾量除菌净化孕妇婴儿桌面上加水',
    model: '050 智能除菌净化款',
    category: '超声波桌面款',
    image: '/images/050.jpg',
    tagline: '大雾量加湿 除菌净化合一',
    highlights: [
      'UVC 杀菌 + 麦饭石水净化，母婴安心用',
      '280ml/h 大雾量，5L 大容量',
      'AI 智能恒湿，智能变频',
      '不挑水质直加自来水，360° 旋转出雾口',
    ],
    specs: [
      { label: '加湿量', value: '280ml/h' },
      { label: '水箱容量', value: '5L' },
      { label: '适用空间', value: '约20㎡' },
      { label: '加湿时长', value: '约17h' },
      { label: '额定功率', value: '26W' },
    ],
    variants: ['智能除菌净化款', '触控净化款', '机械净化款'],
    compare: {
      rate: '280ml/h',
      tank: '5L',
      area: '约20㎡',
      noise: '柔声',
      power: '26W',
      bestFor: '卧室桌面，要除菌的小空间',
    },
  },
  {
    id: '04A',
    name: '亚都七彩透明加湿器 4L 香薰款',
    tmallTitle: '亚都加湿器家用静音卧室小型香薰七彩氛围灯大雾量孕妇婴儿桌面',
    model: 'SC300-YXS04A',
    category: '超声波桌面款',
    image: '/images/04A.jpg',
    tagline: '光随雾动 加湿全屋',
    highlights: [
      '升级大雾量 400ml/h，99.9% 银离子抗菌水箱',
      '28dB 超轻音运行，深夜安睡不扰眠',
      '七色氛围灯一键开启，光随雾动',
      '4L 大口径全开放水箱，360° 无死角清洁',
    ],
    specs: [
      { label: '加湿量', value: '400ml/h' },
      { label: '水箱容量', value: '4L' },
      { label: '噪音', value: '28dB' },
      { label: '氛围灯', value: '7色' },
      { label: '额定功率', value: '17W' },
    ],
    variants: ['白色（香薰/净化两款文案）'],
    compare: {
      rate: '400ml/h',
      tank: '4L',
      area: '桌面小空间',
      noise: '28dB（全系最静）',
      power: '17W',
      bestFor: '床头氛围灯+香薰，颜控',
    },
  },
  {
    id: '35C',
    name: '亚都智能加湿器 3L 台面款',
    tmallTitle: '亚都加湿器家用静音卧室小型大雾量智能恒湿孕妇婴儿桌面上加水',
    model: 'SC300-YXS35C',
    category: '超声波桌面款',
    image: '/images/35C.jpg',
    tagline: '告别干燥 沁润四季',
    highlights: [
      '300ml/h 大雾量，高效快速缓解干燥',
      '智能变频恒湿，维持 65%RH 不湿不燥（智能款）',
      '3L 透明大水箱，剩余水量一目了然',
      '≤38dB 轻音不扰眠，抽屉式隐藏香薰盒',
    ],
    specs: [
      { label: '加湿量', value: '300ml/h' },
      { label: '水箱容量', value: '3L' },
      { label: '噪音', value: '≤38dB' },
      { label: '定时', value: '1-8h' },
      { label: '额定功率', value: '25W' },
    ],
    variants: ['智能款（触摸/遥控）', '旋钮款（SC300-YXS35A）'],
    compare: {
      rate: '300ml/h',
      tank: '3L',
      area: '台面小空间',
      noise: '≤38dB',
      power: '25W',
      bestFor: '入门首选，智能/旋钮双款',
    },
  },
  {
    id: 'filter-50C',
    name: '亚都无雾加湿器原装滤网（适配 50C）',
    tmallTitle: '亚都无雾加湿器滤网滤芯适配50C原装正品可水洗替换耗材配件',
    model: '适配 SZ400-YXS50C',
    category: '滤网配件',
    image: '/images/50C滤网.jpg',
    tagline: '吸附水垢 净化水质',
    highlights: [
      '亚都原装滤网，适配 SZ400-YXS50C',
      '深层过滤，吸附水垢、异味与杂质',
      '可水洗反复使用，更换便捷',
    ],
    specs: [
      { label: '适配型号', value: 'SZ400-YXS50C' },
      { label: '功能', value: '吸附水垢/净化水质' },
      { label: '清洁方式', value: '可水洗' },
    ],
    variants: ['单只装'],
    compare: {
      rate: '—',
      tank: '—',
      area: '—',
      noise: '—',
      power: '—',
      bestFor: '50C（SZ400-YXS50C）主机',
    },
  },
  {
    id: 'filter-80C',
    name: '亚都无雾加湿器原装滤网（适配 80C）',
    tmallTitle: '亚都无雾加湿器滤网滤芯适配80C原装正品可水洗替换耗材配件',
    model: '适配 SZ800-YXS80C',
    category: '滤网配件',
    image: '/images/80C滤网.jpg',
    tagline: '吸附水垢 净化水质',
    highlights: [
      '亚都原装滤网，适配 SZ800-YXS80C',
      '深层过滤，吸附水垢、异味与杂质',
      '可水洗反复使用，更换便捷',
    ],
    specs: [
      { label: '适配型号', value: 'SZ800-YXS80C' },
      { label: '功能', value: '吸附水垢/净化水质' },
      { label: '清洁方式', value: '可水洗' },
    ],
    variants: ['单只装'],
    compare: {
      rate: '—',
      tank: '—',
      area: '—',
      noise: '—',
      power: '—',
      bestFor: '80C（SZ800-YXS80C）主机',
    },
  },
]

export const categories: Category[] = ['无雾加湿器', '超声波落地款', '超声波桌面款', '滤网配件']

export interface SeriesGuide {
  id: string
  name: Category
  oneLiner: string
  what: string
  fits: string[]
  notFits: string[]
  pickTip: string
}

export const seriesGuides: SeriesGuide[] = [
  {
    id: 'mist-free',
    name: '无雾加湿器',
    oneLiner: '看不见水雾，却更安心——母婴与易敏家庭的首选',
    what:
      '无雾加湿器采用「冷蒸发式」原理：滤网吸水后由风机吹出看不见的水分子。没有白雾、不打湿桌面地板、不产生白粉，还不挑水质，自来水直接加。',
    fits: [
      '家里有孕妇、宝宝或老人',
      '鼻炎、呼吸道敏感人群',
      '木地板/家具怕水渍、怕白粉',
      '开空调睡觉，怕雾打湿地毯床品',
    ],
    notFits: ['喜欢肉眼可见的大雾量、追求立竿见影的加湿体感', '预算非常有限（无雾款需要定期清洗滤网）'],
    pickTip:
      '同系列怎么选：60㎡ 以上大空间选 120C 旗舰；20-60㎡ 客厅主卧选 80C（除菌有权威检测报告）；20-40㎡ 卧室/儿童房选 50C 最划算，9W 超省电。',
  },
  {
    id: 'ultrasonic',
    name: '超声波落地款',
    oneLiner: '从客厅到别墅，全屋大雾量一次到位',
    what:
      '超声波加湿器通过高频震荡把水打成肉眼可见的细腻水雾，出雾直观、加湿速度快。落地款水箱 9L-20L，专为客厅及以上的大空间设计；全系搭载 UV-C 除菌 / 活水循环净化，自来水也能放心加。',
    fits: [
      '客厅、大平层、别墅等 30㎡ 以上空间',
      '喜欢看得见的大雾量，想快速缓解干燥',
      '想要冷暖雾、遥控、大屏数显等进阶功能',
    ],
    notFits: [
      '卧室床头等小空间（往下看「超声波桌面款」更划算）',
      '出雾口避免直吹木质家具、电器与插座',
      '呼吸道极度敏感人群更建议选上方无雾系列',
    ],
    pickTip:
      '同系列怎么选：别墅超大空间选 180（700ml/h 双核 + 万向轮）；想要冬暖夏凉选 130E 冷暖雾旗舰；30-50㎡ 客厅日常选 130C 经典款；看重净化选 130D 三重抑菌；喜欢新款顶部触控/遥控选 090P。',
  },
  {
    id: 'desktop',
    name: '超声波桌面款',
    oneLiner: '卧室床头、办公桌——小空间即开即润',
    what:
      '同样是超声波大雾量，体积更小巧：3L-5L 水箱、28-38dB 轻音运行，放在床头柜、书桌、办公桌上都不占地；上加水设计，坐着就能补水，还有香薰、氛围灯等加分功能。',
    fits: [
      '卧室、儿童房、书房等小空间',
      '办公室桌面、宿舍床头',
      '预算有限，追求高性价比的入门买家',
    ],
    notFits: [
      '客厅及以上大空间（往上看「超声波落地款」）',
      '呼吸道极度敏感人群更建议选无雾系列',
    ],
    pickTip:
      '同系列怎么选：小空间也要除菌净化选 050（UVC + 麦饭石）；追求极致安静和氛围感选 04A（28dB 全系最静 + 七色氛围灯 + 香薰）；预算入门选 35C（智能款/旋钮款两种价位）。',
  },
  {
    id: 'filters',
    name: '滤网配件',
    oneLiner: '无雾加湿器的核心耗材，定期清洗更换，加湿效率如新',
    what:
      '滤网是无雾加湿器的"心脏"，负责吸附水垢、净化水质。亚都原装滤网可水洗反复使用，建议定期清洗保持加湿效率与水质洁净。',
    fits: ['已购买 50C / 80C 无雾加湿器的老客', '加湿效率下降、滤网发黄时需要更换'],
    notFits: ['超声波系列机型不使用滤网，请勿拍错'],
    pickTip: '按主机型号选购：50C 主机（SZ400-YXS50C）选 50C 滤网；80C 主机（SZ800-YXS80C）选 80C 滤网。',
  },
]

// 各分组的视觉主题色（Tailwind 类名，供导购板 / 对比表 / 选型卡共用）
export interface SeriesTheme {
  wrap: string
  oneLiner: string
  tip: string
  tipIcon: string
  tableHead: string
  quickIcon: string
  quickHover: string
}

export const seriesThemes: Record<string, SeriesTheme> = {
  'mist-free': {
    wrap: 'border-emerald-200 bg-gradient-to-br from-white to-emerald-50/60',
    oneLiner: 'text-emerald-600',
    tip: 'border-emerald-200 bg-emerald-50',
    tipIcon: 'text-emerald-600',
    tableHead: 'bg-emerald-50/70',
    quickIcon: 'bg-emerald-50 text-emerald-600',
    quickHover: 'hover:border-emerald-400',
  },
  ultrasonic: {
    wrap: 'border-blue-200 bg-gradient-to-br from-white to-blue-50/60',
    oneLiner: 'text-blue-600',
    tip: 'border-blue-200 bg-blue-50',
    tipIcon: 'text-blue-600',
    tableHead: 'bg-blue-50/70',
    quickIcon: 'bg-blue-50 text-blue-600',
    quickHover: 'hover:border-blue-400',
  },
  desktop: {
    wrap: 'border-amber-200 bg-gradient-to-br from-white to-amber-50/60',
    oneLiner: 'text-amber-600',
    tip: 'border-amber-200 bg-amber-50',
    tipIcon: 'text-amber-600',
    tableHead: 'bg-amber-50/70',
    quickIcon: 'bg-amber-50 text-amber-600',
    quickHover: 'hover:border-amber-400',
  },
  filters: {
    wrap: 'border-violet-200 bg-gradient-to-br from-white to-violet-50/60',
    oneLiner: 'text-violet-600',
    tip: 'border-violet-200 bg-violet-50',
    tipIcon: 'text-violet-600',
    tableHead: 'bg-violet-50/70',
    quickIcon: 'bg-violet-50 text-violet-600',
    quickHover: 'hover:border-violet-400',
  },
}
