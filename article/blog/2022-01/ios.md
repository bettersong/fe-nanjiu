## 前言

这里分享一些平常工作中可能会用到的开发技巧，希望能够或多或少给大家带来一点帮助～

**如果这篇文章有帮助到你，❤️关注+点赞❤️鼓励一下作者，文章公众号首发，关注 `前端南玖` 第一时间获取最新的文章～**

先来看看我最近遇到了一些比较恶心的软键盘问题，这个一般是在iOS上会出现问题，由于我们的社区项目一直是在安卓上迭代，近期产品想要在iOS也也接入社区，于是把我们H5的社区项目同步过去，这次同步遇到了各种各样的奇葩兼容性问题，没办法只能一个一个去兼容。

## iOS兼容问题

### iOS12H5的输入框获取焦点不灵敏，有时键盘弹不起来

这里是由于移动端项目使用 `fastclick.js`对`iOS12`的兼容性，我们可以在`FastClick`原型上进行修改

```js
const deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;
const deviceIsIOS =
  /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;
FastClick.prototype.needsClick = function(target) {
  switch (target?.nodeName.toLowerCase()) {
    case "button":
    case "select":
    case "textarea":
      if (target?.disabled) {
        return true;
      }
      break;
    case "input":
      if ((deviceIsIOS && target.type === "file") || target.disabled) {
        return true;
      }
      break;
    case "label":
    case "iframe":
    case "video":
      return true;
  }
  return /\bneedsclick\b/.test(target.className);
};

```

### iOS键盘弹起时遮挡H5的内容

这是由于安卓与iOS的`webview`对键盘弹起的处理有差异：

2015 年三月，iOS 发布了 8.2 版本。这在当时看来也许只是这个现代的操作系统的一次小更新，但在 Web 开发者眼里，有些微妙的问题产生了。这是一件在 Android 世界里想象不到的麻烦事儿。

在此之前 Web 开发者都非常清楚，在 `window` 全局对象上的 `innerWidth`/`innerHeight` 表示浏览器窗口中可以看到页面的区域的尺寸，而 `outerWidth`/`outerHeight` 表示浏览器窗口整体的尺寸。可以看到页面的区域又被称为「视口」（Viewport），在 CSS 的世界里，任何 `position: fixed` 的元素都会脱离文档流并以视口为基准进行定位，以便在页面滚动时让这些元素相对于窗口固定，例如桌面 Web 设计中常见的头部、侧边栏、「返回顶部」按钮等等。

可是从 iOS 8.2 开始，这些概念开始不那么灵了。

**iOS软键盘弹起表现**

在iOS上，输入框（input、textarea、富文本）获取焦点，键盘弹起，页面（webview）并没有被压缩，或者说高度没有改变，只是页面整体网上滚了，且最大滚动高度为软键盘高度。

**Android软键盘弹起表现**

同样，在Android上，输入框获取焦点，键盘弹起，但是页面（webview）高度会发生改变，一般来说，高度为可视区高度（也就是原有高度减去键盘高度），除了因为页面内容被撑开可以产生滚动，webview本身不能滚动。

这样一来两边的体验就完全不同了，安卓上的体验正是我们需要的，但iOS上由于web view没有被压缩，并且webview会发生滚动，这就让我们原本写的头部fixed内容与底部fixed内容都看不到了。