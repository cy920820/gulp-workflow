// 移动端rem适配方案

(function(doc, win) {
  let docEl = doc.documentElement
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  function setRemUnit () {
    let vw = docEl.clientWidth
    if (!vw) return
    docEl.style.fontSize = 100 * (vw / 750) + 'px'
    if (vw > 750) {
      docEl.style.fontSize = 50 + 'px'
    }
  }

  setRemUnit()
  if (!doc.addEventListener) return 
  win.addEventListener(resizeEvt, setRemUnit, false)
  doc.addEventListener('DOMContentLoaded', setRemUnit, false)

})(document, window)
    