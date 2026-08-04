# AGENTS.md

本文件面向 AI 编程代理，介绍本项目的架构、约定与常用命令。阅读本文件的代理应假定自己对项目一无所知。

## 项目概览

**亚都官方商城**（`yadu-store`）：亚都（YADU）品牌加湿器产品的官方商城展示站点，是一个**纯前端单页应用（SPA）**，无后端、无数据库。

- 页面语言为中文（`index.html` 中 `lang="zh-CN"`），代码中的文案、注释、产品数据均为中文。
- 路由使用 `HashRouter`（GitHub Pages 子路径部署下 `BrowserRouter` 无法匹配 `/yadu-store/`）。共三个 SPA 页面：`/`（首页，由多个 section 组件拼装：导航栏、Hero 轮播、产品区、服务条、页脚）、`/matrix`（产品矩阵全屏页）和 `/articles`（文章中心列表页，文章本体是 `public/articles/` 下的独立静态页）。
- **页内锚点不要用 `href="#id"`**：会改变 hash 导致 HashRouter 匹配失败白屏。统一用 `src/lib/scroll.ts` 的 `scrollToId()` 加 `onClick` 实现（参考 `Navbar.tsx` 的 `useAnchorScroll`；非首页时先 `navigate('/')` 再用 `scrollToIdWhenReady()` 等渲染后滚动）。
- 所有产品数据（型号、规格、卖点、对比参数）硬编码在 `src/data/products.ts` 中，不经过任何接口请求。其中 `tmallTitle` 需按天猫规则控制在 60 字符（30 汉字）以内。
- 产品图片为静态资源，放在 `public/images/` 下，代码中以**相对路径** `images/xxx.jpg` 引用（不带前导 `/`，保证部署到子路径如 GitHub Pages 时可用）。

## 技术栈

- **构建工具**：Vite 7（`vite.config.ts`），插件为 `@vitejs/plugin-react` 和 `kimi-plugin-inspect-react`（`inspectAttr()`，开发辅助）
- **框架**：React 19 + TypeScript 5.9
- **路由**：react-router 7（`HashRouter`，在 `src/main.tsx` 中挂载）
- **样式**：Tailwind CSS 3.4 + tailwindcss-animate，主题使用 shadcn 风格的 CSS 变量（定义在 `src/index.css` 的 `:root` / `.dark` 中，`tailwind.config.js` 通过 `hsl(var(--xxx))` 引用）
- **组件库**：shadcn/ui（"new-york" 风格，baseColor 为 slate），40+ 个组件位于 `src/components/ui/`，底层为 Radix UI 原语；图标用 `lucide-react`
- **表单/校验**：react-hook-form + zod + @hookform/resolvers（依赖已装，当前页面暂未使用）
- **Node 版本**：Node.js 20

## 常用命令

```bash
npm install        # 安装依赖
npm run dev        # 启动开发服务器（端口 3000，见 vite.config.ts）
npm run build      # 生产构建：先 tsc -b 做类型检查，再 vite build 输出到 dist/
npm run lint       # ESLint 检查全部文件
npm run preview    # 预览构建产物
npm run sync:matrix  # 从语雀同步「产品矩阵」表格数据（见下文「语雀数据同步」）
```

注意：`build` 会先跑 `tsc -b`，类型错误会导致构建失败。

## 目录结构

```
index.html             # HTML 入口
vite.config.ts         # Vite 配置（base: './'，端口 3000，@ 别名）
tailwind.config.js     # Tailwind 主题（CSS 变量驱动）、动画、插件
postcss.config.js      # PostCSS（tailwindcss + autoprefixer）
components.json        # shadcn/ui 配置与别名
src/
  main.tsx             # 渲染入口，挂载 HashRouter + StrictMode
  App.tsx              # 路由定义（/ -> Home，/matrix -> Matrix）
  App.css              # Webapp 专属样式
  index.css            # 全局样式：Tailwind 指令 + shadcn CSS 变量
  pages/               # 页面级组件（Home.tsx、Matrix.tsx 产品矩阵全屏页）
  sections/            # 页面区块：Navbar、Hero、ProductSection、ProductCard、
                       # SeriesGuide、SeriesTable、ServiceBar、Footer
  components/ui/       # shadcn/ui 组件（一般不要手改，用 CLI 重新生成）
  data/products.ts     # 全部产品数据 + Product/Category/CompareInfo 等类型
  data/matrix.ts       # 产品矩阵数据（sync:matrix 自动生成，勿手改）
  hooks/               # 自定义 hooks（use-mobile.ts）
  lib/utils.ts         # cn() 工具函数（clsx + tailwind-merge）
  lib/scroll.ts        # scrollToId() 页内平滑滚动（替代 href="#id"）
  types/               # 类型定义目录（当前为空）
scripts/
  sync-yuque-matrix.mjs  # 语雀「产品矩阵」表格同步脚本（node 直接运行）
public/images/         # 产品图片等静态资源
public/images/matrix/  # 产品矩阵页图片（sync:matrix 自动下载）
public/articles/       # 文章中心静态页：article.css 为共享样式（站点 cyan/slate 色系），
                       # article.js 为共享增强脚本（自动生成左侧目录面板、右侧回顶/回底按钮，
                       # 新文章页需在 </body> 前引入 <script src="article.js" defer>），
                       # 每篇文章一个独立 HTML（统一文章壳 + 页内 <style> 放该文专属组件样式），
                       # 清单登记在 src/data/articles.ts
```

## 语雀数据同步

「产品矩阵」页（`/matrix`）的数据来自语雀公开文档 <https://www.yuque.com/zane.luo/ome6o0/gpe29230v3z0wvz4>（电子表格，无需 Token）。同步流程：

1. 运行 `npm run sync:matrix`：脚本 `scripts/sync-yuque-matrix.mjs` 调用语雀前端同源接口 `/api/docs/{slug}` 拉取文档，`body.sheet` 是 zlib 压缩、latin-1 编码的 lakesheet 工作簿 JSON，解压后提取单元格（文本、数字、图片、链接）与合并单元格信息，生成 `src/data/matrix.ts`。
2. 语雀 CDN（cdn.nlark.com）有防盗链（带 Referer 即 403），脚本会把表格中的图片下载到 `public/images/matrix/` 并改写为站内相对路径；文件名取自语雀 URL，已存在则跳过。
3. `npm run build` 后按部署流程推送（见「部署」）。若语雀文档改为非公开或格式变更，脚本会以非零码退出并给出原因。

## 代码约定

- **路径别名**：`@` 指向 `src/`（在 `vite.config.ts` 和 `tsconfig.app.json` 中均已配置），导入统一使用 `@/sections/...`、`@/components/ui/...` 等形式。
- **导入 UI 组件**：`import { Button } from '@/components/ui/button'`；合并类名用 `@/lib/utils` 的 `cn()`。
- **Tailwind 动态类名**：不要使用运行时拼接的类名（Tailwind 编译期扫描不到）。项目中已有的做法是把完整字面量类名写进映射表（见 `src/sections/ProductSection.tsx` 中的注释与 `titleHover` 写法）。
- **TypeScript 严格模式**：`strict`、`noUnusedLocals`、`noUnusedParameters`、`verbatimModuleSyntax` 均已开启；类型导入需用 `import type`。
- **注释与文案**：使用中文，与现有代码保持一致。
- **ESLint**：flat config（`eslint.config.js`），启用 eslint 推荐规则、typescript-eslint recommended、react-hooks 和 react-refresh（vite）规则；`dist/` 已忽略。

## 测试

项目目前**没有任何测试框架和测试文件**（无 Vitest/Jest/Playwright 等）。验证改动的方式是：

1. `npm run lint` 无错误；
2. `npm run build` 类型检查与构建通过；
3. `npm run dev` 启动后在浏览器中人工确认页面表现。

## 部署

- `vite.config.ts` 中 `base: './'`（相对路径），构建产物 `dist/` 为纯静态文件，可部署到任意静态托管/子路径。
- 项目无 CI/CD 配置（无 `.github` 目录），无 Dockerfile。

## 安全注意事项

- 纯静态前端，无密钥、无后端接口、无环境变量文件；不要引入真实用户数据的收集逻辑。
- 修改 `src/components/ui/` 下的 shadcn 组件需谨慎，这些文件由 shadcn CLI 生成，手改可能与后续重新生成冲突。
