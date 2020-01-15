export const findNodeUpperByClasses = (ele, classes) => {
  let parentNode = ele.parentNode
  if (parentNode) {
    let classList = parentNode.classList
    if (classList && classes.every(className => classList.contains(className))) {
      return parentNode
    } else {
      return findNodeUpperByClasses(parentNode, classes)
    }
  }
}
// 时间格式化
export function dateFormate(d, pattern) {
  if (!d || d == "") return "";
  if (typeof (d) != 'object') {
    d = new Date(d);
  }
  pattern = pattern || "yyyy-mm-dd HH:MM:ss";
  let str = "";
  str = pattern.replace("yyyy", d.getFullYear());
  str = str.replace("mm", d.getMonth() < 9 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1);
  str = str.replace("dd", d.getDate() < 10 ? '0' + d.getDate() : d.getDate());
  str = str.replace("HH", d.getHours() < 10 ? '0' + d.getHours() : d.getHours());
  str = str.replace("MM", d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes());
  str = str.replace("ss", d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds());
  return str;
}

export function eventDelegate(parentSelector, targetSelector, events, foo) {
  // 触发执行的函数
  function triFunction(e) {
    // 兼容性处理
    var event = e || window.event;

    // 获取到目标阶段指向的元素
    var target = event.target || event.srcElement;

    // 获取到代理事件的函数
    var currentTarget = event.currentTarget;

    // 处理 matches 的兼容性
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) { }
          return i > -1;
        };
    }

    // 遍历外层并且匹配
    while (target !== currentTarget) {
      // 判断是否匹配到我们所需要的元素上
      if (target.matches(targetSelector)) {
        var sTarget = target;
        // 执行绑定的函数，注意 this
        foo.call(sTarget, Array.prototype.slice.call(arguments))
      }

      target = target.parentNode;
    }
  }

  // 如果有多个事件的话需要全部一一绑定事件
  events.split('.').forEach(function (evt) {
    // 多个父层元素的话也需要一一绑定
    Array.prototype.slice.call(document.querySelectorAll(parentSelector)).forEach(function ($p) {
      $p.addEventListener(evt, triFunction);
    });
  });
}
export function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var reg_rewrite = new RegExp("(^|/)" + name + "/([^/]*)(/|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  var q = window.location.pathname.substr(1).match(reg_rewrite);
  if (r != null) {
    return unescape(r[2]);
  } else if (q != null) {
    return unescape(q[2]);
  } else {
    return null;
  }
}