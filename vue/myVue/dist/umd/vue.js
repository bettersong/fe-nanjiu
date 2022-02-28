(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
})(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function isObject(data) {
    return !(_typeof(data) !== 'object' && data !== null);
  }
  function def(data, key, value) {
    Object.defineProperty(data, key, {
      enumerable: false,
      configurable: false,
      value: value
    });
  }

  // 重写数组的7个方法： push,pop,shift,unshift,reverse,sort,splice会导致数组本身改变
  var oldArrayMethods = Array.prototype; // value.__proto__ = arrayMethods 
  // arrayMethods.__proto__ = oldArrayMethods

  var arrayMethods = Object.create(oldArrayMethods);
  var methods = ['push', 'pop', 'shift', 'unshift', 'reverse', 'sort', 'splice'];
  methods.forEach(function (method) {
    arrayMethods[method] = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      console.log('用户调用了：' + method, args);
      var res = oldArrayMethods[method].apply(this, args); // 调用原生数组方法
      // 添加的元素可能还是一个对象

      var inserted = args; //当前插入的元素
      //数组新插入的元素需要重新进行observe才能响应式

      var ob = this.__ob__;

      switch (method) {
        case 'push':
        case 'unshift':
          inserted = args;
          break;

        case 'splice':
          inserted = args.slice(2);
          break;
      }

      if (inserted) {
        ob.observerArray(inserted); //将新增属性继续
      }

      console.log('数组更新了：' + JSON.stringify(inserted)); //通知所有注册的观察者进行响应式处理

      ob.dep.notify();
      return res;
    };
  });

  var uid = 0;

  var Dep = /*#__PURE__*/function () {
    function Dep() {
      _classCallCheck(this, Dep);

      this.id = uid++;
      this.subs = []; // subscribes订阅者，存储订阅者，这里放的是Watcher的实例
    } //收集观察者


    _createClass(Dep, [{
      key: "addSub",
      value: function addSub(watcher) {
        this.subs.push(watcher);
      } // 添加依赖

    }, {
      key: "depend",
      value: function depend() {
        // 自己指定的全局位置，全局唯一,实例化Watcher时会赋值Dep.target = Watcher实例
        if (Dep.target) {
          this.addSub(Dep.target);
        }
      } //通知观察者去更新

    }, {
      key: "notify",
      value: function notify() {
        console.log('通知观察者更新～');
        var subs = this.subs.slice(); // 复制一份

        subs.forEach(function (w) {
          return w.update();
        });
      }
    }]);

    return Dep;
  }();

  function observe(data) {
    // console.log(data,'observe')
    var isObj = isObject(data);
    if (!isObj) return;
    return new Observer(data); // 观测数据
  }

  var Observer = /*#__PURE__*/function () {
    function Observer(v) {
      _classCallCheck(this, Observer);

      // 每一个Observer实例身上都有一个Dep实例
      this.dep = new Dep(); // 如果数据层次过多，需要递归去解析对象中的属性，依次增加set和get方法

      def(v, '__ob__', this); //给数据挂上__ob__属性，表明已观测

      if (Array.isArray(v)) {
        // 把重写的数组方法重新挂在数组原型上
        v.__proto__ = arrayMethods; // 如果数组里放的是对象，再进行监测

        this.observerArray(v);
      } else {
        // 非数组就直接调用defineReactive将数据定义成响应式对象
        this.walk(v);
      }
    }

    _createClass(Observer, [{
      key: "observerArray",
      value: function observerArray(value) {
        for (var i = 0; i < value.length; i++) {
          observe(value[i]);
        }
      }
    }, {
      key: "walk",
      value: function walk(data) {
        var keys = Object.keys(data); //获取对象key

        keys.forEach(function (key) {
          defineReactive(data, key, data[key]); // 定义响应式对象
        });
      }
    }]);

    return Observer;
  }();

  function defineReactive(data, key, value) {
    var dep = new Dep(); //实例化dep,用于收集依赖，通知订阅者更新

    observe(value); // 递归实现深度监测，注意性能

    Object.defineProperty(data, key, {
      configurable: true,
      enumerable: true,
      get: function get() {
        //获取值
        // 如果现在处于依赖的手机阶段
        if (Dep.target) {
          dep.depend();
        } //  依赖收集


        return value;
      },
      set: function set(newV) {
        //设置值
        if (newV === value) return;
        observe(newV); //继续劫持newV,用户有可能设置的新值还是一个对象

        value = newV;
        console.log('值变化了:', value); // 发布订阅模式，通知

        dep.notify(); // cb() //订阅者收到消息回调
      }
    });
  }

  function proxy(target, sourceKey, key) {
    // target: 想要代理到的目标对象，sourceKey：想要代理的对象
    var _that = this;

    Object.defineProperty(target, key, {
      enumerable: true,
      configurable: true,
      get: function get() {
        return _that[sourceKey][key];
      },
      set: function set(v) {
        _that[sourceKey][key] = v;
      }
    });
  }
  function initState(vm) {
    var opts = vm.$options; // vue的数据来源 属性 方法 数据 计算属性 watch
    // console.log(opts)

    if (opts.props) ;

    if (opts.methods) ;

    if (opts.data) {
      initData(vm);
    }

    if (opts.computed) ;

    if (opts.watch) ;
  }

  function initData(vm) {
    // console.log('初始化数据',vm.$options.data)
    // 数据初始化
    var data = vm.$options.data;
    data = vm._data = typeof data === 'function' ? data.call(this) : data; // 对象劫持，用户改变了数据 ==》 刷新页面
    // MVVM模式 数据驱动视图

    Object.keys(data).forEach(function (i) {
      proxy.call(vm, vm, '_data', i);
    }); // Object.definePropety() 给属性增加get和set方法

    observe(data); //响应式原理
  }

  // ast语法数，用对象来描述原生语法
  function compileToFunction(template) {
    return function render() {};
  }

  function initMixin(Vue) {
    // 初始化流程
    Vue.prototype._init = function (options) {
      // console.log(options)
      // 数据劫持
      var vm = this; // vue中使用this.$options

      vm.$options = options; // 初始化状态

      initState(vm); //如果页面传入了el,需要将页面渲染出来
      //如果传入了el，就要实现挂载流程

      if (vm.$options.el) {
        vm.$mount(vm.$options.el);
      }
    };

    Vue.prototype.$mount = function (el) {
      var vm = this;
      var options = vm.$options;
      el = document.querySelector(el); // 默认会先查找render方法，没有render会采用template，template也没有就会使用el中的内容

      if (!options.render) {
        // 对模版进行编译
        options.template;
        //我们需要将template 转化成render方法 


        var render = compileToFunction();
        options.render = render;
      }
    };
  }

  function Vue(options) {
    // 进行Vue的初始化操作
    this._init(options);
  }

  initMixin(Vue); // 给Vue原型上添加_init方法

  return Vue;

}));
//# sourceMappingURL=vue.js.map
