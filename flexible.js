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

  // 0.5px hairlines
  if (win.devicePixelRatio && win.devicePixelRatio >= 2) {
    const fakebody = doc.createElement('body')
    const testdiv = doc.createElement('div')
    testdiv.style.border = '0.5px solid transparent'
    fakebody.appendChild(testdiv)
    docEl.appendChild(fakebody)
    if (testdiv.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakebody)
  }

})(document, window)
    