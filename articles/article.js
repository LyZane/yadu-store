/* 文章页共享增强脚本：
   1. 依据正文 h2/h3 自动生成左侧目录面板（宽屏显示，滚动高亮当前小节）
   2. 右侧悬浮「回到顶部 / 回到底部」按钮
   所有文章页在 </body> 前以 <script src="article.js" defer></script> 引入 */
(function () {
  'use strict'

  document.addEventListener('DOMContentLoaded', function () {
    var main = document.querySelector('main.article') || document.querySelector('main')
    if (!main) return

    /* ---- 左侧目录面板 ---- */
    var headings = Array.prototype.slice.call(main.querySelectorAll('h2, h3'))
    if (headings.length >= 2) {
      var toc = document.createElement('aside')
      toc.className = 'toc-panel'
      toc.setAttribute('aria-label', '文章目录')

      var title = document.createElement('div')
      title.className = 'toc-title'
      title.textContent = '目录'
      toc.appendChild(title)

      var links = []
      headings.forEach(function (h, i) {
        if (!h.id) h.id = 'toc-' + i
        var a = document.createElement('a')
        a.href = '#' + h.id
        a.textContent = h.textContent.trim()
        a.className = h.tagName === 'H3' ? 'toc-link toc-h3' : 'toc-link'
        a.addEventListener('click', function (e) {
          e.preventDefault()
          h.scrollIntoView({ behavior: 'smooth', block: 'start' })
          history.replaceState(null, '', '#' + h.id)
        })
        toc.appendChild(a)
        links.push({ el: h, link: a })
      })
      document.body.appendChild(toc)

      // 滚动高亮当前小节
      var spy = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return
            links.forEach(function (item) {
              item.link.classList.toggle('active', item.el === entry.target)
            })
            var active = toc.querySelector('.toc-link.active')
            if (active) active.scrollIntoView({ block: 'nearest' })
          })
        },
        { rootMargin: '-72px 0px -65% 0px' }
      )
      headings.forEach(function (h) {
        spy.observe(h)
      })
    }

    /* ---- 右侧回到顶部 / 底部按钮 ---- */
    var btns = document.createElement('div')
    btns.className = 'page-nav-btns'

    function makeBtn(arrow, label, onClick) {
      var b = document.createElement('button')
      b.type = 'button'
      b.className = 'page-nav-btn'
      b.setAttribute('aria-label', label)
      b.title = label
      b.textContent = arrow
      b.addEventListener('click', onClick)
      return b
    }

    btns.appendChild(
      makeBtn('↑', '回到顶部', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      })
    )
    btns.appendChild(
      makeBtn('↓', '回到底部', function () {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
      })
    )
    document.body.appendChild(btns)
  })
})()
