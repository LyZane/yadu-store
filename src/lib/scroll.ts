/** 平滑滚动到页面内指定 id 的元素（用于替代 href="#id"，避免与 HashRouter 的 hash 路由冲突） */
export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
