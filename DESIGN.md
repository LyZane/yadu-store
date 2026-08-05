# 亚都官方商城 — DESIGN.md 设计系统

> 本文件面向设计 Agent，定义项目应呈现的视觉风格。与 `AGENTS.md`（构建指南）互补。AI Agent 生成或修改 UI 时，必须严格遵循本文档中的色彩、字体、组件、布局规范。

---

## 1. 视觉主题与氛围（Visual Theme & Atmosphere）

基于亚都（YADU）品牌调性分析（1987 年创立、30+ 年空气品质专业沉淀、品牌主色蓝、目标人群为母婴/敏感人群/中产家庭、竞品差异介于米家极简与戴森工业之间），确立五大设计原则：

| 原则 | 含义 | 落地手段 |
|------|------|---------|
| 洁净呼吸（Clean Breath） | 传达空气、水、洁净的通透感 | 大量留白；浅色背景带极淡 cyan/sky 色相；微妙渐变与外发光模拟空气流动 |
| 专业可信赖（Professional Trust） | 30+ 年技术沉淀与权威背书 | 稳健信息层级；结构化参数表；数据可视化突出除菌率/CADR 等硬指标 |
| 母婴温和（Maternal Care） | 避免冷硬工业感 | 柔和圆角（0.75rem 基准）；温暖辅助色点缀（emerald/amber）；亲切文案语气 |
| 科技轻智能（Light Smart-Tech） | 智能作为加分项而非核心 | 克制微交互；简洁线性图标；适度数据可视化，不堆仪表盘 |
| 居家美学（Home Aesthetic） | 产品即艺术品 | 大尺寸产品图；沉浸式 Hero；场景化生活摄影；家居杂志式排版 |

整体基调：浅色为主、品牌蓝贯穿、温暖辅助色点缀、圆角柔和、阴影轻盈带色相。

---

## 2. 色彩体系（Color Palette & Roles）

所有颜色以 HSL 三元组定义在 `src/index.css` 的 `:root` / `.dark` 中，Tailwind 通过 `hsl(var(--xxx))` 消费。禁止在组件中直接书写 `cyan-600` 等字面量类名，必须走 CSS 变量。

### 2.1 主色（Primary）— 品牌蓝

品牌主色为偏青的蓝（sky 系），介于纯蓝与青之间，传达"空气/水/洁净"而非冷硬工业蓝。

| Token | HSL | HEX 等效 | 用途 |
|-------|-----|---------|------|
| `--primary` | `199 89% 48%` | #0284c7 | CTA 主按钮、Logo 图标底、强调文字、进度条 |
| `--primary-foreground` | `0 0% 100%` | #ffffff | 主色上的文字 |
| `--primary-50` | `199 100% 97%` | #f0f9ff | 极浅底色（hover、tag 底） |
| `--primary-100` | `200 95% 93%` | #e0f2fe | 浅底色（badge、卡片点缀） |
| `--primary-600` | `199 89% 48%` | #0284c7 | 等同 primary，用于显式语义 |
| `--primary-700` | `198 80% 35%` | #0369a1 | 深悬停态、Active |

### 2.2 品牌渐变（Brand Gradient）

替代项目中散落的 `from-cyan-500 to-blue-600`，统一为一个渐变变量。

```css
--brand-gradient: linear-gradient(135deg, hsl(199 89% 48%), hsl(217 91% 60%));
--brand-gradient-soft: linear-gradient(135deg, hsl(199 100% 97%), hsl(204 80% 95%));
```

用途：Navbar Logo 图标、Hero 标题文字、主 CTA 按钮、Hero 背景渐变。

### 2.3 中性色（Slate → Sky-tinted Neutral）

为呼吸感，中性色统一为**偏蓝的 slate**（sky 色相 199-222°），而非纯灰。

| Token | HSL | HEX 等效 | 用途 |
|-------|-----|---------|------|
| `--background` | `0 0% 100%` | #ffffff | 页面底色 |
| `--foreground` | `222 47% 11%` | #0f172a | 主文字 |
| `--card` | `0 0% 100%` | #ffffff | 卡片底 |
| `--card-foreground` | `222 47% 11%` | #0f172a | 卡片文字 |
| `--muted` | `210 40% 96%` | #f1f5f9 | 次要底色、斑马纹 |
| `--muted-foreground` | `215 16% 47%` | #64748b | 次要文字 |
| `--border` | `214 32% 91%` | #e2e8f0 | 分隔线、卡片边框 |
| `--input` | `214 32% 91%` | #e2e8f0 | 输入框边框 |
| `--ring` | `199 89% 48%` | #0284c7 | 聚焦环（品牌蓝） |

### 2.4 辅色与点缀（Secondary / Accent）

| Token | HSL | HEX 等效 | 用途 |
|-------|-----|---------|------|
| `--secondary` | `210 40% 96%` | #f1f5f9 | 次要按钮底 |
| `--secondary-foreground` | `200 50% 22%` | #1e3a5f | 次要按钮文字 |
| `--accent` | `199 90% 96%` | #e0f7ff | hover 底、高亮区 |
| `--accent-foreground` | `199 89% 30%` | #0369a1 | hover 文字 |

### 2.5 语义色

| Token | HSL | HEX 等效 | 用途 |
|-------|-----|---------|------|
| `--destructive` | `0 84% 60%` | #ef4444 | 错误、危险操作 |
| `--success` | `160 84% 39%` | #059669 | 成功、达标 |
| `--warning` | `38 92% 50%` | #f59e0b | 警示、注意 |

### 2.6 产品系列主题色（Series Themes）

保留现有四系列色，与 `src/data/products.ts` 的 `seriesThemes` 一致，不改动。

| 系列 | 主题色 | HSL | HEX | 语义 |
|------|--------|-----|-----|------|
| 无雾加湿（mist-free） | emerald | `160 84% 39%` | #059669 | 健康、自然、蒸发 |
| 超声波落地（ultrasonic） | blue | `217 91% 60%` | #2563eb | 科技、大雾量 |
| 桌面（desktop） | amber | `38 92% 50%` | #f59e0b | 温暖、便携 |
| 滤网配件（filters） | violet | `262 83% 58%` | #7c3aed | 专业、耗材 |

### 2.7 暗色模式（.dark）

不作为主推模式，但保留兼容（Footer 等深色区块仍用 `.dark` 变量或直接 slate-900）。

| Token | HSL | 用途 |
|-------|-----|------|
| `--background` | `222 47% 11%` | 深底 |
| `--foreground` | `0 0% 98%` | 文字 |
| `--primary` | `199 89% 58%` | 暗色下品牌蓝提亮 |
| `--border` | `217 33% 20%` | 深色分隔线 |

---

## 3. 字体规则（Typography Rules）

### 3.1 字体族

项目当前使用系统默认 sans-serif，缺少中文优化。引入 Web 字体：

```html
<!-- index.html <head> 中引入 -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet">
```

```ts
// tailwind.config.js theme.extend.fontFamily
sans: ['Inter', '"Noto Sans SC"', '"PingFang SC"', '"Microsoft YaHei"', 'system-ui', 'sans-serif'],
```

### 3.2 字号层级（基于 Tailwind 默认）

| Token | rem / px | 用途 |
|-------|----------|------|
| `text-xs` | 0.75 / 12 | 辅助说明、标签 |
| `text-sm` | 0.875 / 14 | 次要正文、表格 |
| `text-base` | 1 / 16 | 正文 |
| `text-lg` | 1.125 / 18 | 强调正文 |
| `text-xl` | 1.25 / 20 | 副标题 |
| `text-2xl` | 1.5 / 24 | 卡片标题 |
| `text-3xl` | 1.875 / 30 | 区块标题 |
| `text-4xl` | 2.25 / 36 | 页面标题 |
| `text-5xl` | 3 / 48 | Hero 标题 |
| `text-6xl` | 3.75 / 60 | 大屏 Hero 标题 |

### 3.3 字重与行高

- 标题：`font-semibold`（600）或 `font-bold`（700），`leading-tight`（1.2-1.3）
- 正文：`font-normal`（400），`leading-relaxed`（1.625）
- 数字：`font-semibold tabular-nums`（参数对比表、价格、除菌率等）
- 中文正文最小字号 14px，禁止 12px 中文正文（可读性）

---

## 4. 组件样式（Component Stylings）

### 4.1 按钮（Button）

统一 `rounded-full`（胶囊形），传达柔和现代感。

| 变体 | 样式 |
|------|------|
| primary | `bg-primary text-primary-foreground rounded-full shadow-md hover:bg-primary-700 hover:shadow-lg transition-all` |
| gradient | `bg-gradient-to-r from-primary to-blue-600 text-white rounded-full shadow-md hover:shadow-lg` |
| secondary | `bg-secondary text-secondary-foreground rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition` |
| ghost | `rounded-full hover:bg-accent hover:text-accent-foreground` |
| outline | `rounded-full border border-primary text-primary bg-transparent hover:bg-primary-50` |

尺寸：sm `px-4 py-2 text-sm`；md `px-6 py-3`；lg `px-8 py-4 text-lg`。

### 4.2 卡片（Card）

```ts
// 基础
"rounded-2xl border border-border bg-card shadow-sm transition-all"
// 可交互卡片 hover
"hover:shadow-lg hover:-translate-y-1"
// Hero 大图容器
"rounded-[2rem] shadow-2xl ring-1 ring-border/50"
```

### 4.3 输入框（Input）

`rounded-lg border border-input bg-background px-4 py-2.5 text-base focus:border-primary focus:ring-2 focus:ring-ring/30`

### 4.4 标签（Badge）

`rounded-full px-2.5 py-0.5 text-xs font-medium`

| 变体 | 样式 |
|------|------|
| primary | `bg-primary/10 text-primary` |
| success | `bg-emerald-100 text-emerald-700` |
| warning | `bg-amber-100 text-amber-700` |
| danger | `bg-rose-100 text-rose-700` |
| neutral | `bg-muted text-muted-foreground` |

### 4.5 导航栏（Navbar）

- `sticky top-0 z-50 h-16 bg-white/80 backdrop-blur-md border-b border-border/70`
- Logo 图标：`rounded-xl bg-gradient-to-br from-primary to-blue-600 text-white shadow-sm`
- 导航文字：`text-muted-foreground hover:text-primary transition-colors`
- 主 CTA：用 primary gradient 变体按钮

### 4.6 页脚（Footer）

- `bg-slate-900 text-slate-400`
- Logo 图标：`text-primary`（品牌蓝点缀深色背景）
- 链接：`hover:text-white transition`

### 4.7 Hero 区

- 背景：`bg-gradient-to-b from-primary-50 via-blue-50 to-white`（极浅品牌渐变）
- 标题渐变文字：`bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent`
- 产品图外发光：`bg-gradient-to-tr from-primary/20 to-blue-300/20 blur-3xl`

### 4.8 参数对比表（SeriesTable）

- 表头：`bg-muted/70` 或系列主题色浅底
- 斑马纹：偶数 `bg-white`，奇数 `bg-muted/60`
- 数字单元格：`font-semibold tabular-nums`
- 缩略图：`h-16 w-16 rounded-xl object-cover ring-1 ring-border`

---

## 5. 布局原则（Layout Principles）

| 维度 | 规范 |
|------|------|
| 容器宽度 | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` |
| 区块垂直间距 | `py-16 md:py-20`（移动端 64px，桌面 80px） |
| 卡片网格 | `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` |
| 产品图比例 | 列表 `aspect-square`，Hero `aspect-[4/3]` 或自由 |
| 元素内间距 | 卡片 `p-6`（紧凑）/ `p-8`（宽松）；按钮 `px-6 py-3` |
| 最小留白 | 相邻元素 ≥ 16px；相邻区块 ≥ 64px |
| 最大内容宽度 | 文字段 `max-w-3xl`（保证可读性） |

---

## 6. 阴影与层级（Depth & Elevation）

阴影统一带品牌蓝极淡色相（避免纯黑冷硬感）：

| Token | 值 | 用途 |
|-------|----|----|
| `shadow-xs` | `0 1px 2px 0 rgb(15 23 42 / 0.05)` | 细分隔 |
| `shadow-sm` | `0 1px 3px 0 rgb(15 23 42 / 0.08), 0 1px 2px -1px rgb(15 23 42 / 0.05)` | 卡片常态 |
| `shadow-md` | `0 4px 6px -1px rgb(15 23 42 / 0.08), 0 2px 4px -2px rgb(15 23 42 / 0.05)` | hover、悬浮 |
| `shadow-lg` | `0 10px 15px -3px rgb(15 23 42 / 0.10), 0 4px 6px -4px rgb(15 23 42 / 0.05)` | dropdown、modal |
| `shadow-xl` | `0 20px 25px -5px rgb(15 23 42 / 0.12), 0 8px 10px -6px rgb(15 23 42 / 0.05)` | 大卡片 |
| `shadow-2xl` | `0 25px 50px -12px rgb(15 23 42 / 0.25)` | Hero 主图 |
| `shadow-glow` | `0 0 24px rgb(2 132 199 / 0.25)` | 品牌蓝发光（Hero、聚焦元素） |

阴影基色用 `rgb(15 23 42)`（slate-900，偏蓝），替代纯黑，保持色温一致。

---

## 7. 圆角体系（Border Radius）

| Token | 值 | 用途 |
|-------|----|----|
| `--radius` | `0.75rem`（12px） | 基准（从 0.625rem 提升，更柔和） |
| `rounded-sm` | `calc(var(--radius) - 6px)` = 6px | 小元素 |
| `rounded-md` | `calc(var(--radius) - 4px)` = 8px | 输入框、小卡片 |
| `rounded-lg` | `var(--radius)` = 12px | 中型卡片 |
| `rounded-xl` | `calc(var(--radius) + 4px)` = 16px | 大卡片、缩略图 |
| `rounded-2xl` | `calc(var(--radius) + 8px)` = 20px | 主卡片、Hero 内元素 |
| `rounded-[2rem]` | 32px | Hero 主图 |
| `rounded-full` | 9999px | 按钮、标签、徽章 |

---

## 8. Do's and Don'ts

### Do

- 使用品牌蓝渐变（`from-primary to-blue-600`）作为 CTA 和强调元素
- 大量留白，传达呼吸感，区块间距 ≥ 64px
- 卡片圆角统一 `rounded-2xl`，按钮统一 `rounded-full`
- 数字用 `font-semibold tabular-nums`，突出参数对比
- 阴影使用 `shadow-sm`/`shadow-md`/`shadow-lg` 层级，基色偏蓝
- 系列主题色（emerald/blue/amber/violet）保持一致，不擅自更换
- 中文正文最小 14px

### Don't

- 不要使用 `cyan-600`、`sky-500` 等字面量类名，必须走 CSS 变量
- 不要使用过深的灰背景（> `slate-800`），会失去洁净感（Footer 除外）
- 不要用红色作为强调，仅用于 `destructive`/错误
- 不要满屏渐变，渐变只用于 Hero、Logo、CTA
- 不要引入未定义的圆角值（如 `rounded-3xl` 除非本文档定义）
- 不要使用纯黑（`#000`）阴影，统一用 `slate-900` 基色
- 不要在中文段落使用 12px 字号
- 不要使用冷硬工业风阴影（高对比度黑色硬阴影）

---

## 9. 响应式（Responsive Behavior）

| 断点 | 宽度 | 布局调整 |
|------|------|---------|
| 默认（mobile） | < 640px | 单列；导航折叠为汉堡；字号降一档；卡片 `rounded-xl` |
| `sm` | ≥ 640px | 双列开始出现；按钮尺寸恢复正常 |
| `md` | ≥ 768px | 双列网格；导航展开；区块间距 `py-16` |
| `lg` | ≥ 1024px | 三列网格；Hero 双栏（文+图）；`max-w-7xl` 容器 |
| `xl` | ≥ 1280px | 大屏留白增加；Hero 字号可到 `text-6xl` |

移动端要点：导航折叠为汉堡菜单；Hero 改为单列（文字在上，图在下）；参数表横向滚动（`overflow-x-auto`）；卡片圆角降一档。

---

## 10. Agent Prompt Guide（快速参考）

**即用 Prompt**：生成亚都官方商城 UI 时，使用以下设计 token：

- 主色 HEX：`#0284c7`（品牌蓝，sky-600）
- 品牌渐变：`linear-gradient(135deg, #0284c7, #2563eb)`（sky→blue）
- 背景：`#ffffff`
- 次要底：`#f1f5f9`（slate-100 偏蓝）
- 边框：`#e2e8f0`（slate-200）
- 文字主色：`#0f172a`（slate-900）
- 次要文字：`#64748b`（slate-500）
- 圆角基准：`0.75rem`（12px）；卡片 `rounded-2xl`；按钮 `rounded-full`
- 字体：`Inter, "Noto Sans SC", "PingFang SC", sans-serif`
- 阴影基色：`rgb(15 23 42)`（slate-900，非纯黑）
- 阴影层级：`shadow-sm` → `shadow-md` → `shadow-lg` → `shadow-2xl`
- 系列色：emerald `#059669` / blue `#2563eb` / amber `#f59e0b` / violet `#7c3aed`

生成时必须：使用 CSS 变量（`hsl(var(--xxx))`）而非字面量类名；中文最小 14px；按钮胶囊形；卡片 `rounded-2xl` + `shadow-sm` + `hover:shadow-lg`。

---

## 改动落地清单（Implementation Checklist）

确认本文档后，代码改动将覆盖以下范围：

1. `src/index.css` — 重写 `:root` 和 `.dark` 的全部 CSS 变量，新增 `--primary-50/100/700`、`--brand-gradient`、`--success`、`--warning` 等扩展 token
2. `tailwind.config.js` — 扩展 `fontFamily.sans`、新增 `backgroundImage`（brand-gradient）、扩展 `boxShadow`（glow）、调整 `borderRadius` 基准为 `0.75rem`
3. `index.html` — 引入 Inter + Noto Sans SC Web 字体
4. `src/sections/Navbar.tsx` — 将 `from-cyan-500 to-blue-600` 等字面量替换为 CSS 变量驱动
5. `src/sections/Hero.tsx` — 同上，背景渐变、标题渐变、外发光改用 token
6. `src/sections/ProductSection.tsx` / `ProductCard.tsx` — badge 颜色、图标底色统一走 token
7. `src/sections/ServiceBar.tsx` / `Footer.tsx` — 图标色、链接色走 token
8. `src/sections/SeriesGuide.tsx` / `SeriesTable.tsx` — 系列主题色保留，但底色统一 token

回滚方式：`git revert <commit-hash>` 即可完整回退本次设计系统改动。
