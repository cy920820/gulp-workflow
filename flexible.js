// 移动端rem适配方案

(function(win, doc) {
  let docEl = doc.documentElement
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  function setRemUnit () {
    let vw = docEl.clientWidth
    docEl.style.fontSize = 100 * (vw / 750) + 'px'
  }

  setRemUnit()
  win.addEventListener(resizeEvt, setRemUnit, false)
  win.addEventListener('DOMContentLoaded', setRemUnit, false)

})(window, document)
    