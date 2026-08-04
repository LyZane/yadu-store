/** 平滑滚动到页面内指定 id 的元素（用于替代 href="#id"，避免与 HashRouter 的 hash 路由冲突） */
export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

/** 等元素出现后滚动到它（用于从其他路由跳回首页再定位锚点的场景，最多重试约 1 秒） */
export function scrollToIdWhenReady(id: string, attempts = 20) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  } else if (attempts > 0) {
    setTimeout(() => scrollToIdWhenReady(id, attempts - 1), 50)
  }
}
