
class EventUtil{
  static noScroll(e:Event) {
    const mo = function (e:Event) { e.preventDefault() }
    document.body.style.overflow = 'hidden'
    document.addEventListener('touchmove', mo, false)// 禁止页面滑动
  }

  static canScroll(e:Event) {
    const mo = function (e:Event) {
      e.preventDefault()
    }
    // 文档：[Intervention] Unable to preventDefa...
    // 链接：http://note.youdao.com/noteshare?id=f28914700d165bd09957b56f3a438e80&sub=4A1FD58AD19940238371A1BDB7564B1C
    document.body.style.overflow = ''
    // 出现滚动条
    document.removeEventListener('touchmove', mo, false)
  }
}


export default EventUtil
