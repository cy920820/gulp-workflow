// 移动端rem适配方案
(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth
      console.log(clientWidth , '<<<')
      docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
    }
  recalc()
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  win.addEventListener("DOMContentLoaded", recalc, false)
})(document, window)
    