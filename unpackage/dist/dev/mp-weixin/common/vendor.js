(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.then(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

var CALLBACK_API_RE = /^on/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name);
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name);
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
      /* eslint-disable no-extend-native */
      if (!Promise.prototype.finally) {
        Promise.prototype.finally = function (callback) {
          var promise = this.constructor;
          return this.then(
          function (value) {return promise.resolve(callback()).then(function () {return value;});},
          function (reason) {return promise.resolve(callback()).then(function () {
              throw reason;
            });});

        };
      }
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      return 1;
    } else {
      return 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };




var baseApi = /*#__PURE__*/Object.freeze({
  upx2px: upx2px,
  interceptors: interceptors,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor });


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var protocols = {
  previewImage: previewImage };

var todos = [
'vibrate'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      var returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  getProvider: getProvider });


var getEmitter = function () {
  if (typeof getUniEmitter === 'function') {
    /* eslint-disable no-undef */
    return getUniEmitter;
  }
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });




var api = /*#__PURE__*/Object.freeze({});



var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
    vueOptions = VueComponent.extendOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions['behaviors'];
  var vueExtends = vueOptions['extends'];
  var vueMixins = vueOptions['mixins'];

  var vueProps = vueOptions['props'];

  if (!vueProps) {
    vueOptions['props'] = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps['name'] = {
            type: String,
            default: '' };

          vueProps['value'] = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts['default'];
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor = dataPath ? vm.__get_value(dataPath, context) : context;

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (
          handlerCtx.$options.generic &&
          handlerCtx.$parent &&
          handlerCtx.$parent.$parent)
          {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = handlerCtx.$parent.$parent;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          ret.push(handler.apply(handlerCtx, processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName)));

        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属
  var parentVm = $children.find(function (childVm) {return childVm.$scope._$vueId === vuePid;});
  if (parentVm) {
    return parentVm;
  }
  // 反向递归查找
  for (var i = $children.length - 1; i >= 0; i--) {
    parentVm = findVmByVueId($children[i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = {
    multipleSlots: true,
    addGlobalClass: true };


  {
    // 微信multipleSlots  部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin']['options']) {
      Object.assign(options, vueOptions['mp-weixin']['options']);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };



  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (args) {
    this.$vm.$mp.query = args; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', args);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (target[name]) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 12:
/*!*********************************************************!*\
  !*** C:/Users/win 10/Desktop/mlgxlm/common/js/demao.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports = {

  domain: {
    //数据请求地址
    request: "https://mt.mlgxlm.com/",
    //图片地址
    picUrl: "https://mt.mlgxlm.com",
    //视频地址
    videoUrl: "http://video.mlgxlm.com/" },




  api: {

    weChat: "weChat", //微信登录
    usertime: "usertime", //判断是否为新人

    user_sign: "user_sign", //签到
    user_sign_add: "user_sign_add", //签到数据

    upload: "xcx_upload", //上传图片
    vidoes: "vidoes", //上传视频

    index: "index", //首页
    index_coupon: "index_coupon", //优惠券
    user_coupon: "user_coupon", //我的优惠券
    coupon_list_all: "coupon_list_all", //判断当前用户是否有该商品的优惠券    如果有,得到状态
    assemble: "assemble", //拼团
    limited_time: "limited_time", //限时抢

    type_lists: "type_lists", //更多分类
    couponadd: "couponadd", //领取优惠券


    goodsInfo: "goodsInfo", //商品详情
    shop_goods: "shop_goods", //店铺详情 

    add_cart: "add_cart", //加购   goods_id
    cartList: "cartList", //购物车列表

    nearby_shop: "nearby_shop", //附近店铺

    add_collection: "add_collection", //商品收藏  goods_id
    collection_list: "collection_list", //商品收藏列表
    shop_collection: "shop_collection", //店铺收藏  shop_id
    shop_collection_list: "shop_collection_list", //店铺收藏列表

    collectionaddd: "collectionaddd", //查询店铺是否被收藏
    collectionshop: "collectionshop", //查询商品是否被收藏
    shop_collection_dele: "shop_collection_dele", //取消店铺收藏
    collectiondele: "collectiondele", //取消商品收藏

    couponlist: "couponlist", //店铺优惠券列表
    caselist: "caselist", //请求案例数据

    user_Address_list: "user_Address_list", //用户地址列表
    user_Address: "user_Address", //添加地址		
    delete_address: "delete_address", //删除地址
    update_address: "update_address", //修改地址


    bankcard_list: "bankcard_list", //银行卡列表
    add_bankcard: "add_bankcard", //添加银行卡
    add_bankcard_delete: "add_bankcard_delete", //删除银行卡

    releaseadd: "releaseadd", //发布

    is_shop_settled: "is_shop_settled", //判断商家是否入驻

    add_order: "add_order", //普通下订单
    pt_add: "pt_add", //拼团下订单
    conput_add: "conput_add", //优惠券下订单
    pt_add_list: "pt_add_list", //拼团列表
    order_detail: "order_detail", //订单详情
    moneybuy: "moneybuy", //支付
    open_order_list: "open_order_list" //订单列表     0服务,1商品  
  } };

/***/ }),

/***/ 138:
/*!********************************************************************************!*\
  !*** C:/Users/win 10/Desktop/mlgxlm/pages/home/hairdressing/hairdressing.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 15:
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 153:
/*!******************************************************************************!*\
  !*** C:/Users/win 10/Desktop/mlgxlm/pages/home/shop-detial/shop-detial.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 16:
/*!***********************************************************!*\
  !*** C:/Users/win 10/Desktop/mlgxlm/common/js/request.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {var _demao = _interopRequireDefault(__webpack_require__(/*! ./demao.js */ 12));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
/**
                                                                                                                                                                       * 封装ajax的post请求
                                                                                                                                                                       * ajaxJson.path 请求地址
                                                                                                                                                                       * ajaxJson.data 请求json对象
                                                                                                                                                                       * ajaxJson.method 请求方式  默认post
                                                                                                                                                                       * ajaxJson.isLoading  true 显示loading
                                                                                                                                                                       * ajaxJson.success   请求成功执行方法  可不填,不填全局提示弹窗
                                                                                                                                                                       * ajaxJson.complete  始终会执行的方法   可不填
                                                                                                                                                                       * ajaxJson.globalJudge 返回状态判断  true：请求处判断逻辑
                                                                                                                                                                       */


var requestPost = function requestPost(ajaxJson) {

  if (ajaxJson.isLoading) {//为ture 显示loading
    if (ajaxJson.load == undefined) {
      uni.showLoading({
        title: '处理中' });

    } else {
      uni.showLoading({
        title: '' + ajaxJson.load });

    }

  }
  if (!ajaxJson.data) {
    ajaxJson.data = {};
  } else {
    ajaxJson.data = ajaxJson.data;
  }

  if (uni.getStorageSync("session")) {
    ajaxJson.data.openid = uni.getStorageSync("session").data.openid;
  }

  uni.request({
    url: _demao.default.domain.request + ajaxJson.url,
    data: ajaxJson.data,
    method: ajaxJson.method == undefined ? "POST" : ajaxJson.method,
    dataType: "json",
    header: {
      "Content-Type": 'application/x-www-form-urlencoded', // 默认值
      'X-TOKEN-PETMALL': ''
      // + uni.getStorageSync("token")
    },
    success: function success(result) {
      // console.log(result.data.data)
      if (result.data.data.code == 0) {//请求成功
        if (typeof ajaxJson.success === "function") {
          ajaxJson.success(result.data.data);
        } else {
          uni.showToast({
            "title": result.data.data.msg,
            "icon": "success" });

        }
      } else {//未知错误
        uni.showToast({
          "title": result.data.data.msg,
          "icon": "none" });

      }
    },
    complete: function complete(res) {

      if (ajaxJson.isLoading == true) {
        uni.hideLoading();
      }

      if (typeof ajaxJson.complete === "function") {
        ajaxJson.complete(res);
      }
    } });

};
module.exports = {
  post: requestPost };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 17:
/*!*********************************************************!*\
  !*** C:/Users/win 10/Desktop/mlgxlm/common/js/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) { // 修改标题栏文字
var sethead = function sethead(data) {
  uni.setNavigationBarTitle({
    title: data });

};
var showToast_my = function showToast_my(e) {
  uni.showToast({
    title: e,
    duration: 2000,
    icon: "none" });

  return false;
};



var jump = function jump(e, f) {
  switch (true) {
    case e == 1:
      {
        wx.navigateTo({
          url: f });

        break;
      };
    case e == 2:
      {
        uni.switchTab({
          url: f });

        break;
      };
    case e == 3:
      {
        uni.redirectTo({ //关闭当前页面打开新的页面
          url: f });

        break;
      };
    case e == 4:
      {
        uni.reLaunch({ //关闭所有页面打开新的页面
          url: f });

        break;
      };
    case e == 5:
      {
        uni.navigateBack({ //返回上个页面
          delta: 1 });

        break;
      };
      return true;}

};

var showModel_my = function showModel_my() {
  uni.showModal({
    title: '提示',
    content: '此功能需要您授权登录,是否前去登录',
    success: function success(res) {
      if (res.confirm) {
        uni.navigateTo({
          url: "/pages/login/login" });

      } else if (res.cancel) {
        console.log('用户点击取消');
      }
    } });

};

var c = function c(data) {
  console.log(data);
};

module.exports = {
  sethead: sethead,
  c: c,
  showToast_my: showToast_my,
  jump: jump,
  showModel_my: showModel_my };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 170:
/*!********************************************************************************!*\
  !*** C:/Users/win 10/Desktop/mlgxlm/pages/home/goods-detail/goods-detail.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 18:
/*!**********************************************************!*\
  !*** C:/Users/win 10/Desktop/mlgxlm/common/js/status.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var state = {
  login: 0 };

var indexData = {
  indexData: {} };

module.exports = {
  state: state, indexData: indexData };

/***/ }),

/***/ 19:
/*!*************************************************************!*\
  !*** C:/Users/win 10/Desktop/mlgxlm/common/js/card_info.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //cardType:DC->储蓄卡,CC->信用卡
function bankCardAttribution(bankCard) {
  var cardTypeMap = {
    DC: "储蓄卡",
    CC: "信用卡",
    SCC: "准贷记卡",
    PC: "预付费卡" };

  function extend(target, source) {
    var result = {};
    var key;
    target = target || {};
    source = source || {};
    for (key in target) {
      if (target.hasOwnProperty(key)) {
        result[key] = target[key];
      }
    }
    for (key in source) {
      if (source.hasOwnProperty(key)) {
        result[key] = source[key];
      }
    }
    return result;
  }
  function getCardTypeName(cardType) {
    if (cardTypeMap[cardType]) {
      return cardTypeMap[cardType];
    }
    return undefined;
  }
  var bankcardList = [{
    bankName: "中国邮政储蓄银行",
    bankCode: "PSBC",
    patterns: [{
      reg: /^(621096|621098|622150|622151|622181|622188|622199|955100|621095|620062|621285|621798|621799|621797|620529|621622|621599|621674|623218|623219)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(62215049|62215050|62215051|62218850|62218851|62218849)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(622812|622810|622811|628310|625919)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "中国工商银行",
    bankCode: "ICBC",
    patterns: [{
      reg: /^(620200|620302|620402|620403|620404|620406|620407|620409|620410|620411|620412|620502|620503|620405|620408|620512|620602|620604|620607|620611|620612|620704|620706|620707|620708|620709|620710|620609|620712|620713|620714|620802|620711|620904|620905|621001|620902|621103|621105|621106|621107|621102|621203|621204|621205|621206|621207|621208|621209|621210|621302|621303|621202|621305|621306|621307|621309|621311|621313|621211|621315|621304|621402|621404|621405|621406|621407|621408|621409|621410|621502|621317|621511|621602|621603|621604|621605|621608|621609|621610|621611|621612|621613|621614|621615|621616|621617|621607|621606|621804|621807|621813|621814|621817|621901|621904|621905|621906|621907|621908|621909|621910|621911|621912|621913|621915|622002|621903|622004|622005|622006|622007|622008|622010|622011|622012|621914|622015|622016|622003|622018|622019|622020|622102|622103|622104|622105|622013|622111|622114|622017|622110|622303|622304|622305|622306|622307|622308|622309|622314|622315|622317|622302|622402|622403|622404|622313|622504|622505|622509|622513|622517|622502|622604|622605|622606|622510|622703|622715|622806|622902|622903|622706|623002|623006|623008|623011|623012|622904|623015|623100|623202|623301|623400|623500|623602|623803|623901|623014|624100|624200|624301|624402|623700|624000)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(622200|622202|622203|622208|621225|620058|621281|900000|621558|621559|621722|621723|620086|621226|621618|620516|621227|621288|621721|900010|623062|621670|621720|621379|621240|621724|621762|621414|621375|622926|622927|622928|622929|622930|622931|621733|621732|621372|621369|621763)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(402791|427028|427038|548259|621376|621423|621428|621434|621761|621749|621300|621378|622944|622949|621371|621730|621734|621433|621370|621764|621464|621765|621750|621377|621367|621374|621731|621781)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(9558)\d{15}$/g,
      cardType: "DC" },
    {
      reg: /^(370246|370248|370249|370247|370267|374738|374739)\d{9}$/g,
      cardType: "CC" },
    {
      reg: /^(427010|427018|427019|427020|427029|427030|427039|438125|438126|451804|451810|451811|458071|489734|489735|489736|510529|427062|524091|427064|530970|530990|558360|524047|525498|622230|622231|622232|622233|622234|622235|622237|622239|622240|622245|622238|451804|451810|451811|458071|628288|628286|622206|526836|513685|543098|458441|622246|544210|548943|356879|356880|356881|356882|528856|625330|625331|625332|622236|524374|550213|625929|625927|625939|625987|625930|625114|622159|625021|625022|625932|622889|625900|625915|625916|622171|625931|625113|625928|625914|625986|625925|625921|625926|625942|622158|625917|625922|625934|625933|625920|625924|625017|625018|625019)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(45806|53098|45806|53098)\d{11}$/g,
      cardType: "CC" },
    {
      reg: /^(622210|622211|622212|622213|622214|622220|622223|622225|622229|622215|622224)\d{10}$/g,
      cardType: "SCC" },
    {
      reg: /^(620054|620142|620184|620030|620050|620143|620149|620124|620183|620094|620186|620148|620185)\d{10}$/g,
      cardType: "PC" },
    {
      reg: /^(620114|620187|620046)\d{13}$/g,
      cardType: "PC" }] },

  {
    bankName: "中国农业银行",
    bankCode: "ABC",
    patterns: [{
      reg: /^(622841|622824|622826|622848|620059|621282|622828|622823|621336|621619|622821|622822|622825|622827|622845|622849|623018|623206|621671|622840|622843|622844|622846|622847|620501)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(95595|95596|95597|95598|95599)\d{14}$/g,
      cardType: "DC" },
    {
      reg: /^(103)\d{16}$/g,
      cardType: "DC" },
    {
      reg: /^(403361|404117|404118|404119|404120|404121|463758|519412|519413|520082|520083|552599|558730|514027|622836|622837|628268|625996|625998|625997|622838|625336|625826|625827|544243|548478|628269)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(622820|622830)\d{10}$/g,
      cardType: "SCC" }] },

  {
    bankName: "中国银行",
    bankCode: "BOC",
    patterns: [{
      reg: /^(621660|621661|621662|621663|621665|621667|621668|621669|621666|456351|601382|621256|621212|621283|620061|621725|621330|621331|621332|621333|621297|621568|621569|621672|623208|621620|621756|621757|621758|621759|621785|621786|621787|621788|621789|621790|622273|622274|622771|622772|622770|621741|621041)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(621293|621294|621342|621343|621364|621394|621648|621248|621215|621249|621231|621638|621334|621395|623040|622348)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(625908|625910|625909|356833|356835|409665|409666|409668|409669|409670|409671|409672|512315|512316|512411|512412|514957|409667|438088|552742|553131|514958|622760|628388|518377|622788|628313|628312|622750|622751|625145|622479|622480|622789|625140|622346|622347)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(518378|518379|518474|518475|518476|524865|525745|525746|547766|558868|622752|622753|622755|524864|622757|622758|622759|622761|622762|622763|622756|622754|622764|622765|558869|625905|625906|625907|625333)\d{10}$/g,
      cardType: "SCC" },
    {
      reg: /^(53591|49102|377677)\d{11}$/g,
      cardType: "SCC" },
    {
      reg: /^(620514|620025|620026|620210|620211|620019|620035|620202|620203|620048|620515|920000)\d{10}$/g,
      cardType: "PC" },
    {
      reg: /^(620040|620531|620513|921000|620038)\d{13}$/g,
      cardType: "PC" }] },

  {
    bankName: "中国建设银行",
    bankCode: "CCB",
    patterns: [{
      reg: /^(621284|436742|589970|620060|621081|621467|621598|621621|621700|622280|622700|623211|623668)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(421349|434061|434062|524094|526410|552245|621080|621082|621466|621488|621499|622966|622988|622382|621487|621083|621084|620107)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(436742193|622280193)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(553242)\d{12}$/g,
      cardType: "CC" },
    {
      reg: /^(625362|625363|628316|628317|356896|356899|356895|436718|436738|436745|436748|489592|531693|532450|532458|544887|552801|557080|558895|559051|622166|622168|622708|625964|625965|625966|628266|628366|622381|622675|622676|622677)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(5453242|5491031|5544033)\d{11}$/g,
      cardType: "CC" },
    {
      reg: /^(622725|622728|436728|453242|491031|544033|622707|625955|625956)\d{10}$/g,
      cardType: "SCC" },
    {
      reg: /^(53242|53243)\d{11}$/g,
      cardType: "SCC" }] },

  {
    bankName: "中国交通银行",
    bankCode: "COMM",
    patterns: [{
      reg: /^(622261|622260|622262|621002|621069|621436|621335)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(620013)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(405512|601428|405512|601428|622258|622259|405512|601428)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(49104|53783)\d{11}$/g,
      cardType: "CC" },
    {
      reg: /^(434910|458123|458124|520169|522964|552853|622250|622251|521899|622253|622656|628216|622252|955590|955591|955592|955593|628218|625028|625029)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(622254|622255|622256|622257|622284)\d{10}$/g,
      cardType: "SCC" },
    {
      reg: /^(620021|620521)\d{13}$/g,
      cardType: "PC" }] },

  {
    bankName: "招商银行",
    bankCode: "CMB",
    patterns: [{
      reg: /^(402658|410062|468203|512425|524011|622580|622588|622598|622609|95555|621286|621483|621485|621486|621299)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(690755)\d{9}$/g,
      cardType: "DC" },
    {
      reg: /^(690755)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(356885|356886|356887|356888|356890|439188|439227|479228|479229|521302|356889|545620|545621|545947|545948|552534|552587|622575|622576|622577|622578|622579|545619|622581|622582|545623|628290|439225|518710|518718|628362|439226|628262|625802|625803)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(370285|370286|370287|370289)\d{9}$/g,
      cardType: "CC" },
    {
      reg: /^(620520)\d{13}$/g,
      cardType: "PC" }] },

  {
    bankName: "中国民生银行",
    bankCode: "CMBC",
    patterns: [{
      reg: /^(622615|622616|622618|622622|622617|622619|415599|421393|421865|427570|427571|472067|472068|622620)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(545392|545393|545431|545447|356859|356857|407405|421869|421870|421871|512466|356856|528948|552288|622600|622601|622602|517636|622621|628258|556610|622603|464580|464581|523952|545217|553161|356858|622623|625912|625913|625911)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(377155|377152|377153|377158)\d{9}$/g,
      cardType: "CC" }] },

  {
    bankName: "中国光大银行",
    bankCode: "CEB",
    patterns: [{
      reg: /^(303)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(90030)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(620535)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(620085|622660|622662|622663|622664|622665|622666|622667|622669|622670|622671|622672|622668|622661|622674|622673|620518|621489|621492)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(356837|356838|486497|622657|622685|622659|622687|625978|625980|625981|625979|356839|356840|406252|406254|425862|481699|524090|543159|622161|622570|622650|622655|622658|625975|625977|628201|628202|625339|625976)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "中信银行",
    bankCode: "CITIC",
    patterns: [{
      reg: /^(433670|433680|442729|442730|620082|622690|622691|622692|622696|622698|622998|622999|433671|968807|968808|968809|621771|621767|621768|621770|621772|621773|622453|622456)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622459)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(376968|376969|376966)\d{9}$/g,
      cardType: "CC" },
    {
      reg: /^(400360|403391|403392|404158|404159|404171|404172|404173|404174|404157|433667|433668|433669|514906|403393|520108|433666|558916|622678|622679|622680|622688|622689|628206|556617|628209|518212|628208|356390|356391|356392|622916|622918|622919)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "华夏银行",
    bankCode: "HXBANK",
    patterns: [{
      reg: /^(622630|622631|622632|622633|999999|621222|623020|623021|623022|623023)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(523959|528709|539867|539868|622637|622638|628318|528708|622636|625967|625968|625969)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "深发/平安银行",
    bankCode: "SPABANK",
    patterns: [{
      reg: /^(621626|623058)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(602907|622986|622989|622298|627069|627068|627066|627067|412963|415752|415753|622535|622536|622538|622539|998800|412962|622983)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(531659|622157|528020|622155|622156|526855|356869|356868|625360|625361|628296|435744|435745|483536|622525|622526|998801|998802)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(620010)\d{10}$/g,
      cardType: "PC" }] },

  {
    bankName: "兴业银行",
    bankCode: "CIB",
    patterns: [{
      reg: /^(438589)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(90592)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(966666|622909|438588|622908)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(461982|486493|486494|486861|523036|451289|527414|528057|622901|622902|622922|628212|451290|524070|625084|625085|625086|625087|548738|549633|552398|625082|625083|625960|625961|625962|625963)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(620010)\d{10}$/g,
      cardType: "PC" }] },

  {
    bankName: "上海银行",
    bankCode: "SHBANK",
    patterns: [{
      reg: /^(621050|622172|622985|622987|620522|622267|622278|622279|622468|622892|940021)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(438600)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(356827|356828|356830|402673|402674|486466|519498|520131|524031|548838|622148|622149|622268|356829|622300|628230|622269|625099|625953)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "浦东发展银行",
    bankCode: "SPDB",
    patterns: [{
      reg: /^(622516|622517|622518|622521|622522|622523|984301|984303|621352|621793|621795|621796|621351|621390|621792|621791)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(84301|84336|84373|84385|84390|87000|87010|87030|87040|84380|84361|87050|84342)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(356851|356852|404738|404739|456418|498451|515672|356850|517650|525998|622177|622277|628222|622500|628221|622176|622276|622228|625957|625958|625993|625831)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(622520|622519)\d{10}$/g,
      cardType: "SCC" },
    {
      reg: /^(620530)\d{13}$/g,
      cardType: "PC" }] },

  {
    bankName: "广发银行",
    bankCode: "GDB",
    patterns: [{
      reg: /^(622516|622517|622518|622521|622522|622523|984301|984303|621352|621793|621795|621796|621351|621390|621792|621791)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622568|6858001|6858009|621462)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(9111)\d{15}$/g,
      cardType: "DC" },
    {
      reg: /^(406365|406366|428911|436768|436769|436770|487013|491032|491033|491034|491035|491036|491037|491038|436771|518364|520152|520382|541709|541710|548844|552794|493427|622555|622556|622557|622558|622559|622560|528931|558894|625072|625071|628260|628259|625805|625806|625807|625808|625809|625810)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(685800|6858000)\d{13}$/g,
      cardType: "CC" }] },

  {
    bankName: "渤海银行",
    bankCode: "BOHAIB",
    patterns: [{
      reg: /^(621268|622684|622884|621453)\d{10}$/g,
      cardType: "DC" }] },

  {
    bankName: "广州银行",
    bankCode: "GCB",
    patterns: [{
      reg: /^(603445|622467|940016|621463)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "金华银行",
    bankCode: "JHBANK",
    patterns: [{
      reg: /^(622449|940051)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622450|628204)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "温州银行",
    bankCode: "WZCB",
    patterns: [{
      reg: /^(621977)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622868|622899|628255)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "徽商银行",
    bankCode: "HSBANK",
    patterns: [{
      reg: /^(622877|622879|621775|623203)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(603601|622137|622327|622340|622366)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(628251|622651|625828)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "江苏银行",
    bankCode: "JSBANK",
    patterns: [{
      reg: /^(621076|622173|622131|621579|622876)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(504923|622422|622447|940076)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(628210|622283|625902)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "南京银行",
    bankCode: "NJCB",
    patterns: [{
      reg: /^(621777|622305|621259)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622303|628242|622595|622596)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "宁波银行",
    bankCode: "NBBANK",
    patterns: [{
      reg: /^(621279|622281|622316|940022)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(621418)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(625903|622778|628207|512431|520194|622282|622318)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "北京银行",
    bankCode: "BJBANK",
    patterns: [{
      reg: /^(623111|421317|422161|602969|422160|621030|621420|621468)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(522001|622163|622853|628203|622851|622852)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "北京农村商业银行",
    bankCode: "BJRCB",
    patterns: [{
      reg: /^(620088|621068|622138|621066|621560)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(625526|625186|628336)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "汇丰银行",
    bankCode: "HSBC",
    patterns: [{
      reg: /^(622946)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622406|621442)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(622407|621443)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(622360|622361|625034|625096|625098)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "渣打银行",
    bankCode: "SCB",
    patterns: [{
      reg: /^(622948|621740|622942|622994)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622482|622483|622484)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "花旗银行",
    bankCode: "CITI",
    patterns: [{
      reg: /^(621062|621063)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(625076|625077|625074|625075|622371|625091)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "东亚银行",
    bankCode: "HKBEA",
    patterns: [{
      reg: /^(622933|622938|623031|622943|621411)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(622372|622471|622472|622265|622266|625972|625973)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(622365)\d{11}$/g,
      cardType: "CC" }] },

  {
    bankName: "广东华兴银行",
    bankCode: "GHB",
    patterns: [{
      reg: /^(621469|621625)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "深圳农村商业银行",
    bankCode: "SRCB",
    patterns: [{
      reg: /^(622128|622129|623035)\d{10}$/g,
      cardType: "DC" }] },

  {
    bankName: "广州农村商业银行股份有限公司",
    bankCode: "GZRCU",
    patterns: [{
      reg: /^(909810|940035|621522|622439)\d{12}$/g,
      cardType: "DC" }] },

  {
    bankName: "东莞农村商业银行",
    bankCode: "DRCBCL",
    patterns: [{
      reg: /^(622328|940062|623038)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(625288|625888)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "东莞市商业银行",
    bankCode: "BOD",
    patterns: [{
      reg: /^(622333|940050)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(621439|623010)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(622888)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "广东省农村信用社联合社",
    bankCode: "GDRCC",
    patterns: [{
      reg: /^(622302)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622477|622509|622510|622362|621018|621518)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "大新银行",
    bankCode: "DSB",
    patterns: [{
      reg: /^(622297|621277)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622375|622489)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(622293|622295|622296|622373|622451|622294|625940)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "永亨银行",
    bankCode: "WHB",
    patterns: [{
      reg: /^(622871|622958|622963|622957|622861|622932|622862|621298)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622798|625010|622775|622785)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "星展银行香港有限公司",
    bankCode: "DBS",
    patterns: [{
      reg: /^(621016|621015)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(622487|622490|622491|622492)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622487|622490|622491|622492|621744|621745|621746|621747)\d{11}$/g,
      cardType: "DC" }] },

  {
    bankName: "恒丰银行",
    bankCode: "EGBANK",
    patterns: [{
      reg: /^(623078)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(622384|940034)\d{11}$/g,
      cardType: "DC" }] },

  {
    bankName: "天津市商业银行",
    bankCode: "TCCB",
    patterns: [{
      reg: /^(940015|622331)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(6091201)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(622426|628205)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "浙商银行",
    bankCode: "CZBANK",
    patterns: [{
      reg: /^(621019|622309|621019)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(6223091100|6223092900|6223093310|6223093320|6223093330|6223093370|6223093380|6223096510|6223097910)\d{9}$/g,
      cardType: "DC" }] },

  {
    bankName: "南洋商业银行",
    bankCode: "NCB",
    patterns: [{
      reg: /^(621213|621289|621290|621291|621292|621042|621743)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(623041|622351)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(625046|625044|625058|622349|622350)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(620208|620209|625093|625095)\d{10}$/g,
      cardType: "PC" }] },

  {
    bankName: "厦门银行",
    bankCode: "XMBANK",
    patterns: [{
      reg: /^(622393|940023)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(6886592)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(623019|621600|)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "福建海峡银行",
    bankCode: "FJHXBC",
    patterns: [{
      reg: /^(622388)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(621267|623063)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(620043|)\d{12}$/g,
      cardType: "PC" }] },

  {
    bankName: "吉林银行",
    bankCode: "JLBANK",
    patterns: [{
      reg: /^(622865|623131)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(940012)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622178|622179|628358)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "汉口银行",
    bankCode: "HKB",
    patterns: [{
      reg: /^(990027)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(622325|623105|623029)\d{10}$/g,
      cardType: "DC" }] },

  {
    bankName: "盛京银行",
    bankCode: "SJBANK",
    patterns: [{
      reg: /^(566666)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(622455|940039)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(623108|623081)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622466|628285)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "大连银行",
    bankCode: "DLB",
    patterns: [{
      reg: /^(603708)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(622993|623069|623070|623172|623173)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(622383|622385|628299)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "河北银行",
    bankCode: "BHB",
    patterns: [{
      reg: /^(622498|622499|623000|940046)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(622921|628321)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "乌鲁木齐市商业银行",
    bankCode: "URMQCCB",
    patterns: [{
      reg: /^(621751|622143|940001|621754)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(622476|628278)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "绍兴银行",
    bankCode: "SXCB",
    patterns: [{
      reg: /^(622486)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(603602|623026|623086)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(628291)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "成都商业银行",
    bankCode: "CDCB",
    patterns: [{
      reg: /^(622152|622154|622996|622997|940027|622153|622135|621482|621532)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "抚顺银行",
    bankCode: "FSCB",
    patterns: [{
      reg: /^(622442)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(940053)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(622442|623099)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "郑州银行",
    bankCode: "ZZBANK",
    patterns: [{
      reg: /^(622421)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(940056)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(96828)\d{11}$/g,
      cardType: "DC" }] },

  {
    bankName: "宁夏银行",
    bankCode: "NXBANK",
    patterns: [{
      reg: /^(621529|622429|621417|623089|623200)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(628214|625529|622428)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "重庆银行",
    bankCode: "CQBANK",
    patterns: [{
      reg: /^(9896)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(622134|940018|623016)\d{10}$/g,
      cardType: "DC" }] },

  {
    bankName: "哈尔滨银行",
    bankCode: "HRBANK",
    patterns: [{
      reg: /^(621577|622425)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(940049)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(622425)\d{11}$/g,
      cardType: "DC" }] },

  {
    bankName: "兰州银行",
    bankCode: "LZYH",
    patterns: [{
      reg: /^(622139|940040|628263)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(621242|621538|621496)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "青岛银行",
    bankCode: "QDCCB",
    patterns: [{
      reg: /^(621252|622146|940061|628239)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(621419|623170)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "秦皇岛市商业银行",
    bankCode: "QHDCCB",
    patterns: [{
      reg: /^(62249802|94004602)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(621237|623003)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "青海银行",
    bankCode: "BOQH",
    patterns: [{
      reg: /^(622310|940068)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(622817|628287|625959)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(62536601)\d{8}$/g,
      cardType: "CC" }] },

  {
    bankName: "台州银行",
    bankCode: "TZCB",
    patterns: [{
      reg: /^(622427)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(940069)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(623039)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(622321|628273)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(625001)\d{10}$/g,
      cardType: "SCC" }] },

  {
    bankName: "长沙银行",
    bankCode: "CSCB",
    patterns: [{
      reg: /^(694301)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(940071|622368|621446)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(625901|622898|622900|628281|628282|622806|628283)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(620519)\d{13}$/g,
      cardType: "PC" }] },

  {
    bankName: "泉州银行",
    bankCode: "BOQZ",
    patterns: [{
      reg: /^(683970|940074)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(622370)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(621437)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(628319)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "包商银行",
    bankCode: "BSB",
    patterns: [{
      reg: /^(622336|621760)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(622165)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622315|625950|628295)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "龙江银行",
    bankCode: "DAQINGB",
    patterns: [{
      reg: /^(621037|621097|621588|622977)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(62321601)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(622860)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622644|628333)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "上海农商银行",
    bankCode: "SHRCB",
    patterns: [{
      reg: /^(622478|940013|621495)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(625500)\d{10}$/g,
      cardType: "SCC" },
    {
      reg: /^(622611|622722|628211|625989)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "浙江泰隆商业银行",
    bankCode: "ZJQL",
    patterns: [{
      reg: /^(622717)\d{10}$/g,
      cardType: "SCC" },
    {
      reg: /^(628275|622565|622287)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "内蒙古银行",
    bankCode: "H3CB",
    patterns: [{
      reg: /^(622147|621633)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(628252)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "广西北部湾银行",
    bankCode: "BGB",
    patterns: [{
      reg: /^(623001)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(628227)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "桂林银行",
    bankCode: "GLBANK",
    patterns: [{
      reg: /^(621456)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(621562)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(628219)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "龙江银行",
    bankCode: "DAQINGB",
    patterns: [{
      reg: /^(621037|621097|621588|622977)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(62321601)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(622475|622860)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(625588)\d{10}$/g,
      cardType: "SCC" },
    {
      reg: /^(622270|628368|625090|622644|628333)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "成都农村商业银行",
    bankCode: "CDRCB",
    patterns: [{
      reg: /^(623088)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(622829|628301|622808|628308)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "福建省农村信用社联合社",
    bankCode: "FJNX",
    patterns: [{
      reg: /^(622127|622184|621701|621251|621589|623036)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(628232|622802|622290)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "天津农村商业银行",
    bankCode: "TRCB",
    patterns: [{
      reg: /^(622531|622329)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(622829|628301)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "江苏省农村信用社联合社",
    bankCode: "JSRCU",
    patterns: [{
      reg: /^(621578|623066|622452|622324)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(622815|622816|628226)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "湖南农村信用社联合社",
    bankCode: "SLH",
    patterns: [{
      reg: /^(622906|628386|625519|625506)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "江西省农村信用社联合社",
    bankCode: "JXNCX",
    patterns: [{
      reg: /^(621592)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(628392)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "商丘市商业银行",
    bankCode: "SCBBANK",
    patterns: [{
      reg: /^(621748)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(628271)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "华融湘江银行",
    bankCode: "HRXJB",
    patterns: [{
      reg: /^(621366|621388)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(628328)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "衡水市商业银行",
    bankCode: "HSBK",
    patterns: [{
      reg: /^(621239|623068)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "重庆南川石银村镇银行",
    bankCode: "CQNCSYCZ",
    patterns: [{
      reg: /^(621653004)\d{10}$/g,
      cardType: "DC" }] },

  {
    bankName: "湖南省农村信用社联合社",
    bankCode: "HNRCC",
    patterns: [{
      reg: /^(622169|621519|621539|623090)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "邢台银行",
    bankCode: "XTB",
    patterns: [{
      reg: /^(621238|620528)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "临汾市尧都区农村信用合作联社",
    bankCode: "LPRDNCXYS",
    patterns: [{
      reg: /^(628382|625158)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "东营银行",
    bankCode: "DYCCB",
    patterns: [{
      reg: /^(621004)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(628217)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "上饶银行",
    bankCode: "SRBANK",
    patterns: [{
      reg: /^(621416)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(628217)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "德州银行",
    bankCode: "DZBANK",
    patterns: [{
      reg: /^(622937)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(628397)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "承德银行",
    bankCode: "CDB",
    patterns: [{
      reg: /^(628229)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "云南省农村信用社",
    bankCode: "YNRCC",
    patterns: [{
      reg: /^(622469|628307)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "柳州银行",
    bankCode: "LZCCB",
    patterns: [{
      reg: /^(622292|622291|621412)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(622880|622881)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(62829)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "威海市商业银行",
    bankCode: "WHSYBANK",
    patterns: [{
      reg: /^(623102)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(628234)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "湖州银行",
    bankCode: "HZBANK",
    patterns: [{
      reg: /^(628306)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "潍坊银行",
    bankCode: "BANKWF",
    patterns: [{
      reg: /^(622391|940072)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(628391)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "赣州银行",
    bankCode: "GZB",
    patterns: [{
      reg: /^(622967|940073)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(628233)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "日照银行",
    bankCode: "RZGWYBANK",
    patterns: [{
      reg: /^(628257)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "南昌银行",
    bankCode: "NCB",
    patterns: [{
      reg: /^(621269|622275)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(940006)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(628305)\d{11}$/g,
      cardType: "CC" }] },

  {
    bankName: "贵阳银行",
    bankCode: "GYCB",
    patterns: [{
      reg: /^(622133|621735)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(888)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(628213)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "锦州银行",
    bankCode: "BOJZ",
    patterns: [{
      reg: /^(622990|940003)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(628261)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "齐商银行",
    bankCode: "QSBANK",
    patterns: [{
      reg: /^(622311|940057)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(628311)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "珠海华润银行",
    bankCode: "RBOZ",
    patterns: [{
      reg: /^(622363|940048)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(628270)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "葫芦岛市商业银行",
    bankCode: "HLDCCB",
    patterns: [{
      reg: /^(622398|940054)\d{10}$/g,
      cardType: "DC" }] },

  {
    bankName: "宜昌市商业银行",
    bankCode: "HBC",
    patterns: [{
      reg: /^(940055)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(622397)\d{11}$/g,
      cardType: "CC" }] },

  {
    bankName: "杭州商业银行",
    bankCode: "HZCB",
    patterns: [{
      reg: /^(603367|622878)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(622397)\d{11}$/g,
      cardType: "CC" }] },

  {
    bankName: "苏州市商业银行",
    bankCode: "JSBANK",
    patterns: [{
      reg: /^(603506)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "辽阳银行",
    bankCode: "LYCB",
    patterns: [{
      reg: /^(622399|940043)\d{11}$/g,
      cardType: "DC" }] },

  {
    bankName: "洛阳银行",
    bankCode: "LYB",
    patterns: [{
      reg: /^(622420|940041)\d{11}$/g,
      cardType: "DC" }] },

  {
    bankName: "焦作市商业银行",
    bankCode: "JZCBANK",
    patterns: [{
      reg: /^(622338)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(940032)\d{10}$/g,
      cardType: "DC" }] },

  {
    bankName: "镇江市商业银行",
    bankCode: "ZJCCB",
    patterns: [{
      reg: /^(622394|940025)\d{10}$/g,
      cardType: "DC" }] },

  {
    bankName: "法国兴业银行",
    bankCode: "FGXYBANK",
    patterns: [{
      reg: /^(621245)\d{10}$/g,
      cardType: "DC" }] },

  {
    bankName: "大华银行",
    bankCode: "DYBANK",
    patterns: [{
      reg: /^(621328)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "企业银行",
    bankCode: "DIYEBANK",
    patterns: [{
      reg: /^(621651)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "华侨银行",
    bankCode: "HQBANK",
    patterns: [{
      reg: /^(621077)\d{10}$/g,
      cardType: "DC" }] },

  {
    bankName: "恒生银行",
    bankCode: "HSB",
    patterns: [{
      reg: /^(622409|621441)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(622410|621440)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(622950|622951)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(625026|625024|622376|622378|622377|625092)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "临沂商业银行",
    bankCode: "LSB",
    patterns: [{
      reg: /^(622359|940066)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "烟台商业银行",
    bankCode: "YTCB",
    patterns: [{
      reg: /^(622886)\d{10}$/g,
      cardType: "DC" }] },

  {
    bankName: "齐鲁银行",
    bankCode: "QLB",
    patterns: [{
      reg: /^(940008|622379)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(628379)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "BC卡公司",
    bankCode: "BCCC",
    patterns: [{
      reg: /^(620011|620027|620031|620039|620103|620106|620120|620123|620125|620220|620278|620812|621006|621011|621012|621020|621023|621025|621027|621031|620132|621039|621078|621220|621003)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(625003|625011|625012|625020|625023|625025|625027|625031|621032|625039|625078|625079|625103|625106|625006|625112|625120|625123|625125|625127|625131|625032|625139|625178|625179|625220|625320|625111|625132|625244)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "集友银行",
    bankCode: "CYB",
    patterns: [{
      reg: /^(622355|623042)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(621043|621742)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(622352|622353|625048|625053|625060)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(620206|620207)\d{10}$/g,
      cardType: "PC" }] },

  {
    bankName: "大丰银行",
    bankCode: "TFB",
    patterns: [{
      reg: /^(622547|622548|622546)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(625198|625196|625147)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(620072)\d{13}$/g,
      cardType: "PC" },
    {
      reg: /^(620204|620205)\d{10}$/g,
      cardType: "PC" }] },

  {
    bankName: "AEON信贷财务亚洲有限公司",
    bankCode: "AEON",
    patterns: [{
      reg: /^(621064|622941|622974)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622493)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "澳门BDA",
    bankCode: "MABDA",
    patterns: [{
      reg: /^(621274|621324)\d{13}$/g,
      cardType: "DC" }] }];


  function getBankNameByBankCode(bankcode) {
    for (var i = 0, len = bankcardList.length; i < len; i++) {
      var bankcard = bankcardList[i];
      if (bankcode == bankcard.bankCode) {
        return bankcard.bankName;
      }
    }
    return "";
  }
  function _getBankInfoByCardNo(cardNo) {
    for (var i = 0, len = bankcardList.length; i < len; i++) {
      var bankcard = bankcardList[i];
      var patterns = bankcard.patterns;
      for (var j = 0, jLen = patterns.length; j < jLen; j++) {
        var pattern = patterns[j];
        if (new RegExp(pattern.reg).test(cardNo)) {
          var info = extend(bankcard, pattern);
          delete info.patterns;
          delete info.reg;
          info['cardTypeName'] = getCardTypeName(info['cardType']);
          return info; //返回银行卡结果
        }
      }
    }
    return 'error';
  }
  return _getBankInfoByCardNo(bankCard);
}
// console.log( bankCardAttribution('6217001210024455220') )


//test url : https://ccdcapi.alipay.com/validateAndCacheCardInfo.json?cardNo=6222005865412565805&cardBinCheck=true
//cardType:DC->储蓄卡,CC->信用卡
function bankCardAttribution(bankCard) {
  var cardTypeMap = {
    DC: "储蓄卡",
    CC: "信用卡",
    SCC: "准贷记卡",
    PC: "预付费卡" };


  function extend(target, source) {
    var result = {};
    var key;
    target = target || {};
    source = source || {};
    for (key in target) {
      if (target.hasOwnProperty(key)) {
        result[key] = target[key];
      }
    }
    for (key in source) {
      if (source.hasOwnProperty(key)) {
        result[key] = source[key];
      }
    }
    return result;
  }

  function getCardTypeName(cardType) {
    if (cardTypeMap[cardType]) {
      return cardTypeMap[cardType];
    }
    return undefined;
  }
  var bankcardList = [{
    bankName: "中国邮政储蓄银行",
    bankCode: "PSBC",
    patterns: [{
      reg: /^(621096|621098|622150|622151|622181|622188|622199|955100|621095|620062|621285|621798|621799|621797|620529|621622|621599|621674|623218|623219)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(62215049|62215050|62215051|62218850|62218851|62218849)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(622812|622810|622811|628310|625919)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "中国工商银行",
    bankCode: "ICBC",
    patterns: [{
      reg: /^(620200|620302|620402|620403|620404|620406|620407|620409|620410|620411|620412|620502|620503|620405|620408|620512|620602|620604|620607|620611|620612|620704|620706|620707|620708|620709|620710|620609|620712|620713|620714|620802|620711|620904|620905|621001|620902|621103|621105|621106|621107|621102|621203|621204|621205|621206|621207|621208|621209|621210|621302|621303|621202|621305|621306|621307|621309|621311|621313|621211|621315|621304|621402|621404|621405|621406|621407|621408|621409|621410|621502|621317|621511|621602|621603|621604|621605|621608|621609|621610|621611|621612|621613|621614|621615|621616|621617|621607|621606|621804|621807|621813|621814|621817|621901|621904|621905|621906|621907|621908|621909|621910|621911|621912|621913|621915|622002|621903|622004|622005|622006|622007|622008|622010|622011|622012|621914|622015|622016|622003|622018|622019|622020|622102|622103|622104|622105|622013|622111|622114|622017|622110|622303|622304|622305|622306|622307|622308|622309|622314|622315|622317|622302|622402|622403|622404|622313|622504|622505|622509|622513|622517|622502|622604|622605|622606|622510|622703|622715|622806|622902|622903|622706|623002|623006|623008|623011|623012|622904|623015|623100|623202|623301|623400|623500|623602|623803|623901|623014|624100|624200|624301|624402|623700|624000)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(622200|622202|622203|622208|621225|620058|621281|900000|621558|621559|621722|621723|620086|621226|621618|620516|621227|621288|621721|900010|623062|621670|621720|621379|621240|621724|621762|621414|621375|622926|622927|622928|622929|622930|622931|621733|621732|621372|621369|621763)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(402791|427028|427038|548259|621376|621423|621428|621434|621761|621749|621300|621378|622944|622949|621371|621730|621734|621433|621370|621764|621464|621765|621750|621377|621367|621374|621731|621781)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(9558)\d{15}$/g,
      cardType: "DC" },
    {
      reg: /^(370246|370248|370249|370247|370267|374738|374739)\d{9}$/g,
      cardType: "CC" },
    {
      reg: /^(427010|427018|427019|427020|427029|427030|427039|438125|438126|451804|451810|451811|458071|489734|489735|489736|510529|427062|524091|427064|530970|530990|558360|524047|525498|622230|622231|622232|622233|622234|622235|622237|622239|622240|622245|622238|451804|451810|451811|458071|628288|628286|622206|526836|513685|543098|458441|622246|544210|548943|356879|356880|356881|356882|528856|625330|625331|625332|622236|524374|550213|625929|625927|625939|625987|625930|625114|622159|625021|625022|625932|622889|625900|625915|625916|622171|625931|625113|625928|625914|625986|625925|625921|625926|625942|622158|625917|625922|625934|625933|625920|625924|625017|625018|625019)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(45806|53098|45806|53098)\d{11}$/g,
      cardType: "CC" },
    {
      reg: /^(622210|622211|622212|622213|622214|622220|622223|622225|622229|622215|622224)\d{10}$/g,
      cardType: "SCC" },
    {
      reg: /^(620054|620142|620184|620030|620050|620143|620149|620124|620183|620094|620186|620148|620185)\d{10}$/g,
      cardType: "PC" },
    {
      reg: /^(620114|620187|620046)\d{13}$/g,
      cardType: "PC" }] },

  {
    bankName: "中国农业银行",
    bankCode: "ABC",
    patterns: [{
      reg: /^(622841|622824|622826|622848|620059|621282|622828|622823|621336|621619|622821|622822|622825|622827|622845|622849|623018|623206|621671|622840|622843|622844|622846|622847|620501)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(95595|95596|95597|95598|95599)\d{14}$/g,
      cardType: "DC" },
    {
      reg: /^(103)\d{16}$/g,
      cardType: "DC" },
    {
      reg: /^(403361|404117|404118|404119|404120|404121|463758|519412|519413|520082|520083|552599|558730|514027|622836|622837|628268|625996|625998|625997|622838|625336|625826|625827|544243|548478|628269)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(622820|622830)\d{10}$/g,
      cardType: "SCC" }] },

  {
    bankName: "中国银行",
    bankCode: "BOC",
    patterns: [{
      reg: /^(621660|621661|621662|621663|621665|621667|621668|621669|621666|456351|601382|621256|621212|621283|620061|621725|621330|621331|621332|621333|621297|621568|621569|621672|623208|621620|621756|621757|621758|621759|621785|621786|621787|621788|621789|621790|622273|622274|622771|622772|622770|621741|621041)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(621293|621294|621342|621343|621364|621394|621648|621248|621215|621249|621231|621638|621334|621395|623040|622348)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(625908|625910|625909|356833|356835|409665|409666|409668|409669|409670|409671|409672|512315|512316|512411|512412|514957|409667|438088|552742|553131|514958|622760|628388|518377|622788|628313|628312|622750|622751|625145|622479|622480|622789|625140|622346|622347)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(518378|518379|518474|518475|518476|524865|525745|525746|547766|558868|622752|622753|622755|524864|622757|622758|622759|622761|622762|622763|622756|622754|622764|622765|558869|625905|625906|625907|625333)\d{10}$/g,
      cardType: "SCC" },
    {
      reg: /^(53591|49102|377677)\d{11}$/g,
      cardType: "SCC" },
    {
      reg: /^(620514|620025|620026|620210|620211|620019|620035|620202|620203|620048|620515|920000)\d{10}$/g,
      cardType: "PC" },
    {
      reg: /^(620040|620531|620513|921000|620038)\d{13}$/g,
      cardType: "PC" }] },

  {
    bankName: "中国建设银行",
    bankCode: "CCB",
    patterns: [{
      reg: /^(621284|436742|589970|620060|621081|621467|621598|621621|621700|622280|622700|623211|623668)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(421349|434061|434062|524094|526410|552245|621080|621082|621466|621488|621499|622966|622988|622382|621487|621083|621084|620107)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(436742193|622280193)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(553242)\d{12}$/g,
      cardType: "CC" },
    {
      reg: /^(625362|625363|628316|628317|356896|356899|356895|436718|436738|436745|436748|489592|531693|532450|532458|544887|552801|557080|558895|559051|622166|622168|622708|625964|625965|625966|628266|628366|622381|622675|622676|622677)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(5453242|5491031|5544033)\d{11}$/g,
      cardType: "CC" },
    {
      reg: /^(622725|622728|436728|453242|491031|544033|622707|625955|625956)\d{10}$/g,
      cardType: "SCC" },
    {
      reg: /^(53242|53243)\d{11}$/g,
      cardType: "SCC" }] },

  {
    bankName: "中国交通银行",
    bankCode: "COMM",
    patterns: [{
      reg: /^(622261|622260|622262|621002|621069|621436|621335)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(620013)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(405512|601428|405512|601428|622258|622259|405512|601428)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(49104|53783)\d{11}$/g,
      cardType: "CC" },
    {
      reg: /^(434910|458123|458124|520169|522964|552853|622250|622251|521899|622253|622656|628216|622252|955590|955591|955592|955593|628218|625028|625029)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(622254|622255|622256|622257|622284)\d{10}$/g,
      cardType: "SCC" },
    {
      reg: /^(620021|620521)\d{13}$/g,
      cardType: "PC" }] },

  {
    bankName: "招商银行",
    bankCode: "CMB",
    patterns: [{
      reg: /^(402658|410062|468203|512425|524011|622580|622588|622598|622609|95555|621286|621483|621485|621486|621299)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(690755)\d{9}$/g,
      cardType: "DC" },
    {
      reg: /^(690755)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(356885|356886|356887|356888|356890|439188|439227|479228|479229|521302|356889|545620|545621|545947|545948|552534|552587|622575|622576|622577|622578|622579|545619|622581|622582|545623|628290|439225|518710|518718|628362|439226|628262|625802|625803)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(370285|370286|370287|370289)\d{9}$/g,
      cardType: "CC" },
    {
      reg: /^(620520)\d{13}$/g,
      cardType: "PC" }] },

  {
    bankName: "中国民生银行",
    bankCode: "CMBC",
    patterns: [{
      reg: /^(622615|622616|622618|622622|622617|622619|415599|421393|421865|427570|427571|472067|472068|622620)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(545392|545393|545431|545447|356859|356857|407405|421869|421870|421871|512466|356856|528948|552288|622600|622601|622602|517636|622621|628258|556610|622603|464580|464581|523952|545217|553161|356858|622623|625912|625913|625911)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(377155|377152|377153|377158)\d{9}$/g,
      cardType: "CC" }] },

  {
    bankName: "中国光大银行",
    bankCode: "CEB",
    patterns: [{
      reg: /^(303)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(90030)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(620535)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(620085|622660|622662|622663|622664|622665|622666|622667|622669|622670|622671|622672|622668|622661|622674|622673|620518|621489|621492)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(356837|356838|486497|622657|622685|622659|622687|625978|625980|625981|625979|356839|356840|406252|406254|425862|481699|524090|543159|622161|622570|622650|622655|622658|625975|625977|628201|628202|625339|625976)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "中信银行",
    bankCode: "CITIC",
    patterns: [{
      reg: /^(433670|433680|442729|442730|620082|622690|622691|622692|622696|622698|622998|622999|433671|968807|968808|968809|621771|621767|621768|621770|621772|621773|622453|622456)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622459)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(376968|376969|376966)\d{9}$/g,
      cardType: "CC" },
    {
      reg: /^(400360|403391|403392|404158|404159|404171|404172|404173|404174|404157|433667|433668|433669|514906|403393|520108|433666|558916|622678|622679|622680|622688|622689|628206|556617|628209|518212|628208|356390|356391|356392|622916|622918|622919)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "华夏银行",
    bankCode: "HXBANK",
    patterns: [{
      reg: /^(622630|622631|622632|622633|999999|621222|623020|623021|623022|623023)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(523959|528709|539867|539868|622637|622638|628318|528708|622636|625967|625968|625969)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "深发/平安银行",
    bankCode: "SPABANK",
    patterns: [{
      reg: /^(621626|623058)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(602907|622986|622989|622298|627069|627068|627066|627067|412963|415752|415753|622535|622536|622538|622539|998800|412962|622983)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(531659|622157|528020|622155|622156|526855|356869|356868|625360|625361|628296|435744|435745|483536|622525|622526|998801|998802)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(620010)\d{10}$/g,
      cardType: "PC" }] },

  {
    bankName: "兴业银行",
    bankCode: "CIB",
    patterns: [{
      reg: /^(438589)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(90592)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(966666|622909|438588|622908)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(461982|486493|486494|486861|523036|451289|527414|528057|622901|622902|622922|628212|451290|524070|625084|625085|625086|625087|548738|549633|552398|625082|625083|625960|625961|625962|625963)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(620010)\d{10}$/g,
      cardType: "PC" }] },

  {
    bankName: "上海银行",
    bankCode: "SHBANK",
    patterns: [{
      reg: /^(621050|622172|622985|622987|620522|622267|622278|622279|622468|622892|940021)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(438600)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(356827|356828|356830|402673|402674|486466|519498|520131|524031|548838|622148|622149|622268|356829|622300|628230|622269|625099|625953)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "浦东发展银行",
    bankCode: "SPDB",
    patterns: [{
      reg: /^(622516|622517|622518|622521|622522|622523|984301|984303|621352|621793|621795|621796|621351|621390|621792|621791)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(84301|84336|84373|84385|84390|87000|87010|87030|87040|84380|84361|87050|84342)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(356851|356852|404738|404739|456418|498451|515672|356850|517650|525998|622177|622277|628222|622500|628221|622176|622276|622228|625957|625958|625993|625831)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(622520|622519)\d{10}$/g,
      cardType: "SCC" },
    {
      reg: /^(620530)\d{13}$/g,
      cardType: "PC" }] },

  {
    bankName: "广发银行",
    bankCode: "GDB",
    patterns: [{
      reg: /^(622516|622517|622518|622521|622522|622523|984301|984303|621352|621793|621795|621796|621351|621390|621792|621791)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622568|6858001|6858009|621462)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(9111)\d{15}$/g,
      cardType: "DC" },
    {
      reg: /^(406365|406366|428911|436768|436769|436770|487013|491032|491033|491034|491035|491036|491037|491038|436771|518364|520152|520382|541709|541710|548844|552794|493427|622555|622556|622557|622558|622559|622560|528931|558894|625072|625071|628260|628259|625805|625806|625807|625808|625809|625810)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(685800|6858000)\d{13}$/g,
      cardType: "CC" }] },

  {
    bankName: "渤海银行",
    bankCode: "BOHAIB",
    patterns: [{
      reg: /^(621268|622684|622884|621453)\d{10}$/g,
      cardType: "DC" }] },

  {
    bankName: "广州银行",
    bankCode: "GCB",
    patterns: [{
      reg: /^(603445|622467|940016|621463)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "金华银行",
    bankCode: "JHBANK",
    patterns: [{
      reg: /^(622449|940051)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622450|628204)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "温州银行",
    bankCode: "WZCB",
    patterns: [{
      reg: /^(621977)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622868|622899|628255)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "徽商银行",
    bankCode: "HSBANK",
    patterns: [{
      reg: /^(622877|622879|621775|623203)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(603601|622137|622327|622340|622366)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(628251|622651|625828)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "江苏银行",
    bankCode: "JSBANK",
    patterns: [{
      reg: /^(621076|622173|622131|621579|622876)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(504923|622422|622447|940076)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(628210|622283|625902)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "南京银行",
    bankCode: "NJCB",
    patterns: [{
      reg: /^(621777|622305|621259)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622303|628242|622595|622596)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "宁波银行",
    bankCode: "NBBANK",
    patterns: [{
      reg: /^(621279|622281|622316|940022)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(621418)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(625903|622778|628207|512431|520194|622282|622318)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "北京银行",
    bankCode: "BJBANK",
    patterns: [{
      reg: /^(623111|421317|422161|602969|422160|621030|621420|621468)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(522001|622163|622853|628203|622851|622852)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "北京农村商业银行",
    bankCode: "BJRCB",
    patterns: [{
      reg: /^(620088|621068|622138|621066|621560)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(625526|625186|628336)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "汇丰银行",
    bankCode: "HSBC",
    patterns: [{
      reg: /^(622946)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622406|621442)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(622407|621443)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(622360|622361|625034|625096|625098)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "渣打银行",
    bankCode: "SCB",
    patterns: [{
      reg: /^(622948|621740|622942|622994)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622482|622483|622484)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "花旗银行",
    bankCode: "CITI",
    patterns: [{
      reg: /^(621062|621063)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(625076|625077|625074|625075|622371|625091)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "东亚银行",
    bankCode: "HKBEA",
    patterns: [{
      reg: /^(622933|622938|623031|622943|621411)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(622372|622471|622472|622265|622266|625972|625973)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(622365)\d{11}$/g,
      cardType: "CC" }] },

  {
    bankName: "广东华兴银行",
    bankCode: "GHB",
    patterns: [{
      reg: /^(621469|621625)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "深圳农村商业银行",
    bankCode: "SRCB",
    patterns: [{
      reg: /^(622128|622129|623035)\d{10}$/g,
      cardType: "DC" }] },

  {
    bankName: "广州农村商业银行股份有限公司",
    bankCode: "GZRCU",
    patterns: [{
      reg: /^(909810|940035|621522|622439)\d{12}$/g,
      cardType: "DC" }] },

  {
    bankName: "东莞农村商业银行",
    bankCode: "DRCBCL",
    patterns: [{
      reg: /^(622328|940062|623038)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(625288|625888)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "东莞市商业银行",
    bankCode: "BOD",
    patterns: [{
      reg: /^(622333|940050)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(621439|623010)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(622888)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "广东省农村信用社联合社",
    bankCode: "GDRCC",
    patterns: [{
      reg: /^(622302)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622477|622509|622510|622362|621018|621518)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "大新银行",
    bankCode: "DSB",
    patterns: [{
      reg: /^(622297|621277)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622375|622489)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(622293|622295|622296|622373|622451|622294|625940)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "永亨银行",
    bankCode: "WHB",
    patterns: [{
      reg: /^(622871|622958|622963|622957|622861|622932|622862|621298)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622798|625010|622775|622785)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "星展银行香港有限公司",
    bankCode: "DBS",
    patterns: [{
      reg: /^(621016|621015)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(622487|622490|622491|622492)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622487|622490|622491|622492|621744|621745|621746|621747)\d{11}$/g,
      cardType: "DC" }] },

  {
    bankName: "恒丰银行",
    bankCode: "EGBANK",
    patterns: [{
      reg: /^(623078)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(622384|940034)\d{11}$/g,
      cardType: "DC" }] },

  {
    bankName: "天津市商业银行",
    bankCode: "TCCB",
    patterns: [{
      reg: /^(940015|622331)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(6091201)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(622426|628205)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "浙商银行",
    bankCode: "CZBANK",
    patterns: [{
      reg: /^(621019|622309|621019)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(6223091100|6223092900|6223093310|6223093320|6223093330|6223093370|6223093380|6223096510|6223097910)\d{9}$/g,
      cardType: "DC" }] },

  {
    bankName: "南洋商业银行",
    bankCode: "NCB",
    patterns: [{
      reg: /^(621213|621289|621290|621291|621292|621042|621743)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(623041|622351)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(625046|625044|625058|622349|622350)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(620208|620209|625093|625095)\d{10}$/g,
      cardType: "PC" }] },

  {
    bankName: "厦门银行",
    bankCode: "XMBANK",
    patterns: [{
      reg: /^(622393|940023)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(6886592)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(623019|621600|)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "福建海峡银行",
    bankCode: "FJHXBC",
    patterns: [{
      reg: /^(622388)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(621267|623063)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(620043|)\d{12}$/g,
      cardType: "PC" }] },

  {
    bankName: "吉林银行",
    bankCode: "JLBANK",
    patterns: [{
      reg: /^(622865|623131)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(940012)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622178|622179|628358)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "汉口银行",
    bankCode: "HKB",
    patterns: [{
      reg: /^(990027)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(622325|623105|623029)\d{10}$/g,
      cardType: "DC" }] },

  {
    bankName: "盛京银行",
    bankCode: "SJBANK",
    patterns: [{
      reg: /^(566666)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(622455|940039)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(623108|623081)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622466|628285)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "大连银行",
    bankCode: "DLB",
    patterns: [{
      reg: /^(603708)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(622993|623069|623070|623172|623173)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(622383|622385|628299)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "河北银行",
    bankCode: "BHB",
    patterns: [{
      reg: /^(622498|622499|623000|940046)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(622921|628321)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "乌鲁木齐市商业银行",
    bankCode: "URMQCCB",
    patterns: [{
      reg: /^(621751|622143|940001|621754)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(622476|628278)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "绍兴银行",
    bankCode: "SXCB",
    patterns: [{
      reg: /^(622486)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(603602|623026|623086)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(628291)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "成都商业银行",
    bankCode: "CDCB",
    patterns: [{
      reg: /^(622152|622154|622996|622997|940027|622153|622135|621482|621532)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "抚顺银行",
    bankCode: "FSCB",
    patterns: [{
      reg: /^(622442)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(940053)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(622442|623099)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "郑州银行",
    bankCode: "ZZBANK",
    patterns: [{
      reg: /^(622421)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(940056)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(96828)\d{11}$/g,
      cardType: "DC" }] },

  {
    bankName: "宁夏银行",
    bankCode: "NXBANK",
    patterns: [{
      reg: /^(621529|622429|621417|623089|623200)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(628214|625529|622428)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "重庆银行",
    bankCode: "CQBANK",
    patterns: [{
      reg: /^(9896)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(622134|940018|623016)\d{10}$/g,
      cardType: "DC" }] },

  {
    bankName: "哈尔滨银行",
    bankCode: "HRBANK",
    patterns: [{
      reg: /^(621577|622425)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(940049)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(622425)\d{11}$/g,
      cardType: "DC" }] },

  {
    bankName: "兰州银行",
    bankCode: "LZYH",
    patterns: [{
      reg: /^(622139|940040|628263)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(621242|621538|621496)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "青岛银行",
    bankCode: "QDCCB",
    patterns: [{
      reg: /^(621252|622146|940061|628239)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(621419|623170)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "秦皇岛市商业银行",
    bankCode: "QHDCCB",
    patterns: [{
      reg: /^(62249802|94004602)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(621237|623003)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "青海银行",
    bankCode: "BOQH",
    patterns: [{
      reg: /^(622310|940068)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(622817|628287|625959)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(62536601)\d{8}$/g,
      cardType: "CC" }] },

  {
    bankName: "台州银行",
    bankCode: "TZCB",
    patterns: [{
      reg: /^(622427)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(940069)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(623039)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(622321|628273)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(625001)\d{10}$/g,
      cardType: "SCC" }] },

  {
    bankName: "长沙银行",
    bankCode: "CSCB",
    patterns: [{
      reg: /^(694301)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(940071|622368|621446)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(625901|622898|622900|628281|628282|622806|628283)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(620519)\d{13}$/g,
      cardType: "PC" }] },

  {
    bankName: "泉州银行",
    bankCode: "BOQZ",
    patterns: [{
      reg: /^(683970|940074)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(622370)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(621437)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(628319)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "包商银行",
    bankCode: "BSB",
    patterns: [{
      reg: /^(622336|621760)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(622165)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622315|625950|628295)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "龙江银行",
    bankCode: "DAQINGB",
    patterns: [{
      reg: /^(621037|621097|621588|622977)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(62321601)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(622860)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622644|628333)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "上海农商银行",
    bankCode: "SHRCB",
    patterns: [{
      reg: /^(622478|940013|621495)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(625500)\d{10}$/g,
      cardType: "SCC" },
    {
      reg: /^(622611|622722|628211|625989)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "浙江泰隆商业银行",
    bankCode: "ZJQL",
    patterns: [{
      reg: /^(622717)\d{10}$/g,
      cardType: "SCC" },
    {
      reg: /^(628275|622565|622287)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "内蒙古银行",
    bankCode: "H3CB",
    patterns: [{
      reg: /^(622147|621633)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(628252)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "广西北部湾银行",
    bankCode: "BGB",
    patterns: [{
      reg: /^(623001)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(628227)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "桂林银行",
    bankCode: "GLBANK",
    patterns: [{
      reg: /^(621456)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(621562)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(628219)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "龙江银行",
    bankCode: "DAQINGB",
    patterns: [{
      reg: /^(621037|621097|621588|622977)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(62321601)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(622475|622860)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(625588)\d{10}$/g,
      cardType: "SCC" },
    {
      reg: /^(622270|628368|625090|622644|628333)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "成都农村商业银行",
    bankCode: "CDRCB",
    patterns: [{
      reg: /^(623088)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(622829|628301|622808|628308)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "福建省农村信用社联合社",
    bankCode: "FJNX",
    patterns: [{
      reg: /^(622127|622184|621701|621251|621589|623036)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(628232|622802|622290)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "天津农村商业银行",
    bankCode: "TRCB",
    patterns: [{
      reg: /^(622531|622329)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(622829|628301)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "江苏省农村信用社联合社",
    bankCode: "JSRCU",
    patterns: [{
      reg: /^(621578|623066|622452|622324)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(622815|622816|628226)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "湖南农村信用社联合社",
    bankCode: "SLH",
    patterns: [{
      reg: /^(622906|628386|625519|625506)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "江西省农村信用社联合社",
    bankCode: "JXNCX",
    patterns: [{
      reg: /^(621592)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(628392)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "商丘市商业银行",
    bankCode: "SCBBANK",
    patterns: [{
      reg: /^(621748)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(628271)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "华融湘江银行",
    bankCode: "HRXJB",
    patterns: [{
      reg: /^(621366|621388)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(628328)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "衡水市商业银行",
    bankCode: "HSBK",
    patterns: [{
      reg: /^(621239|623068)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "重庆南川石银村镇银行",
    bankCode: "CQNCSYCZ",
    patterns: [{
      reg: /^(621653004)\d{10}$/g,
      cardType: "DC" }] },

  {
    bankName: "湖南省农村信用社联合社",
    bankCode: "HNRCC",
    patterns: [{
      reg: /^(622169|621519|621539|623090)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "邢台银行",
    bankCode: "XTB",
    patterns: [{
      reg: /^(621238|620528)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "临汾市尧都区农村信用合作联社",
    bankCode: "LPRDNCXYS",
    patterns: [{
      reg: /^(628382|625158)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "东营银行",
    bankCode: "DYCCB",
    patterns: [{
      reg: /^(621004)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(628217)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "上饶银行",
    bankCode: "SRBANK",
    patterns: [{
      reg: /^(621416)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(628217)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "德州银行",
    bankCode: "DZBANK",
    patterns: [{
      reg: /^(622937)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(628397)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "承德银行",
    bankCode: "CDB",
    patterns: [{
      reg: /^(628229)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "云南省农村信用社",
    bankCode: "YNRCC",
    patterns: [{
      reg: /^(622469|628307)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "柳州银行",
    bankCode: "LZCCB",
    patterns: [{
      reg: /^(622292|622291|621412)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(622880|622881)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(62829)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "威海市商业银行",
    bankCode: "WHSYBANK",
    patterns: [{
      reg: /^(623102)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(628234)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "湖州银行",
    bankCode: "HZBANK",
    patterns: [{
      reg: /^(628306)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "潍坊银行",
    bankCode: "BANKWF",
    patterns: [{
      reg: /^(622391|940072)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(628391)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "赣州银行",
    bankCode: "GZB",
    patterns: [{
      reg: /^(622967|940073)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(628233)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "日照银行",
    bankCode: "RZGWYBANK",
    patterns: [{
      reg: /^(628257)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "南昌银行",
    bankCode: "NCB",
    patterns: [{
      reg: /^(621269|622275)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(940006)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(628305)\d{11}$/g,
      cardType: "CC" }] },

  {
    bankName: "贵阳银行",
    bankCode: "GYCB",
    patterns: [{
      reg: /^(622133|621735)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(888)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(628213)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "锦州银行",
    bankCode: "BOJZ",
    patterns: [{
      reg: /^(622990|940003)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(628261)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "齐商银行",
    bankCode: "QSBANK",
    patterns: [{
      reg: /^(622311|940057)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(628311)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "珠海华润银行",
    bankCode: "RBOZ",
    patterns: [{
      reg: /^(622363|940048)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(628270)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "葫芦岛市商业银行",
    bankCode: "HLDCCB",
    patterns: [{
      reg: /^(622398|940054)\d{10}$/g,
      cardType: "DC" }] },

  {
    bankName: "宜昌市商业银行",
    bankCode: "HBC",
    patterns: [{
      reg: /^(940055)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(622397)\d{11}$/g,
      cardType: "CC" }] },

  {
    bankName: "杭州商业银行",
    bankCode: "HZCB",
    patterns: [{
      reg: /^(603367|622878)\d{12}$/g,
      cardType: "DC" },
    {
      reg: /^(622397)\d{11}$/g,
      cardType: "CC" }] },

  {
    bankName: "苏州市商业银行",
    bankCode: "JSBANK",
    patterns: [{
      reg: /^(603506)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "辽阳银行",
    bankCode: "LYCB",
    patterns: [{
      reg: /^(622399|940043)\d{11}$/g,
      cardType: "DC" }] },

  {
    bankName: "洛阳银行",
    bankCode: "LYB",
    patterns: [{
      reg: /^(622420|940041)\d{11}$/g,
      cardType: "DC" }] },

  {
    bankName: "焦作市商业银行",
    bankCode: "JZCBANK",
    patterns: [{
      reg: /^(622338)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(940032)\d{10}$/g,
      cardType: "DC" }] },

  {
    bankName: "镇江市商业银行",
    bankCode: "ZJCCB",
    patterns: [{
      reg: /^(622394|940025)\d{10}$/g,
      cardType: "DC" }] },

  {
    bankName: "法国兴业银行",
    bankCode: "FGXYBANK",
    patterns: [{
      reg: /^(621245)\d{10}$/g,
      cardType: "DC" }] },

  {
    bankName: "大华银行",
    bankCode: "DYBANK",
    patterns: [{
      reg: /^(621328)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "企业银行",
    bankCode: "DIYEBANK",
    patterns: [{
      reg: /^(621651)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "华侨银行",
    bankCode: "HQBANK",
    patterns: [{
      reg: /^(621077)\d{10}$/g,
      cardType: "DC" }] },

  {
    bankName: "恒生银行",
    bankCode: "HSB",
    patterns: [{
      reg: /^(622409|621441)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(622410|621440)\d{11}$/g,
      cardType: "DC" },
    {
      reg: /^(622950|622951)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(625026|625024|622376|622378|622377|625092)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "临沂商业银行",
    bankCode: "LSB",
    patterns: [{
      reg: /^(622359|940066)\d{13}$/g,
      cardType: "DC" }] },

  {
    bankName: "烟台商业银行",
    bankCode: "YTCB",
    patterns: [{
      reg: /^(622886)\d{10}$/g,
      cardType: "DC" }] },

  {
    bankName: "齐鲁银行",
    bankCode: "QLB",
    patterns: [{
      reg: /^(940008|622379)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(628379)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "BC卡公司",
    bankCode: "BCCC",
    patterns: [{
      reg: /^(620011|620027|620031|620039|620103|620106|620120|620123|620125|620220|620278|620812|621006|621011|621012|621020|621023|621025|621027|621031|620132|621039|621078|621220|621003)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(625003|625011|625012|625020|625023|625025|625027|625031|621032|625039|625078|625079|625103|625106|625006|625112|625120|625123|625125|625127|625131|625032|625139|625178|625179|625220|625320|625111|625132|625244)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "集友银行",
    bankCode: "CYB",
    patterns: [{
      reg: /^(622355|623042)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(621043|621742)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(622352|622353|625048|625053|625060)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(620206|620207)\d{10}$/g,
      cardType: "PC" }] },

  {
    bankName: "大丰银行",
    bankCode: "TFB",
    patterns: [{
      reg: /^(622547|622548|622546)\d{13}$/g,
      cardType: "DC" },
    {
      reg: /^(625198|625196|625147)\d{10}$/g,
      cardType: "CC" },
    {
      reg: /^(620072)\d{13}$/g,
      cardType: "PC" },
    {
      reg: /^(620204|620205)\d{10}$/g,
      cardType: "PC" }] },

  {
    bankName: "AEON信贷财务亚洲有限公司",
    bankCode: "AEON",
    patterns: [{
      reg: /^(621064|622941|622974)\d{10}$/g,
      cardType: "DC" },
    {
      reg: /^(622493)\d{10}$/g,
      cardType: "CC" }] },

  {
    bankName: "澳门BDA",
    bankCode: "MABDA",
    patterns: [{
      reg: /^(621274|621324)\d{13}$/g,
      cardType: "DC" }] }];



  function getBankNameByBankCode(bankcode) {
    for (var i = 0, len = bankcardList.length; i < len; i++) {
      var bankcard = bankcardList[i];
      if (bankcode == bankcard.bankCode) {
        return bankcard.bankName;
      }
    }
    return "";
  }

  function _getBankInfoByCardNo(cardNo) {
    for (var i = 0, len = bankcardList.length; i < len; i++) {
      var bankcard = bankcardList[i];
      var patterns = bankcard.patterns;
      for (var j = 0, jLen = patterns.length; j < jLen; j++) {
        var pattern = patterns[j];
        if (new RegExp(pattern.reg).test(cardNo)) {
          var info = extend(bankcard, pattern);
          delete info.patterns;
          delete info.reg;
          info['cardTypeName'] = getCardTypeName(info['cardType']);
          return info; //返回银行卡结果
        }
      }
    }
    return 'error';
  }

  return _getBankInfoByCardNo(bankCard);
}
module.exports = {
  bankCardAttribution: bankCardAttribution };

/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    {
      if(vm.$scope && vm.$scope.is){
        return vm.$scope.is
      }
    }
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = typeof SharedObject !== 'undefined' ? SharedObject : {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    vm.mpHost !== 'mp-toutiao' && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    vm.mpHost !== 'mp-toutiao' && initProvide(vm); // resolve provide after data/props
    vm.mpHost !== 'mp-toutiao' && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.10';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);
  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  vm.mpHost !== 'mp-toutiao' && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err) {
    console.error(err);
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope) {
        return this.$scope[method](args)
      }
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string,number
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onError',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!***********************************************************!*\
  !*** C:/Users/win 10/Desktop/mlgxlm/common/js/bmap-wx.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @file 微信小程序JSAPI
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @author 崔健 cuijian03@baidu.com 2017.01.10
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * @update 邓淑芳 623996689@qq.com 2019.07.03
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 百度地图微信小程序API类
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */var
BMapWX = /*#__PURE__*/function () {

  /**
                                    * 百度地图微信小程序API类
                                    *
                                    * @constructor
                                    */
  function BMapWX(param) {_classCallCheck(this, BMapWX);
    this.ak = param["ak"];
  }

  /**
     * 使用微信接口进行定位
     *
     * @param {string} type 坐标类型
     * @param {Function} success 成功执行
     * @param {Function} fail 失败执行
     * @param {Function} complete 完成后执行
     */_createClass(BMapWX, [{ key: "getWXLocation", value: function getWXLocation(
    type, success, fail, complete) {
      type = type || 'gcj02',
      success = success || function () {};
      fail = fail || function () {};
      complete = complete || function () {};
      uni.getLocation({
        type: type,
        success: success,
        fail: fail,
        complete: complete });

    }

    /**
       * POI周边检索
       *
       * @param {Object} param 检索配置
       * 参数对象结构可以参考
       * http://lbsyun.baidu.com/index.php?title=webapi/guide/webservice-placeapi
       */ }, { key: "search", value: function search(
    param) {
      var that = this;
      param = param || {};
      var searchparam = {
        query: param["query"] || '生活服务$美食&酒店',
        scope: param["scope"] || 1,
        filter: param["filter"] || '',
        coord_type: param["coord_type"] || 2,
        page_size: param["page_size"] || 10,
        page_num: param["page_num"] || 0,
        output: param["output"] || 'json',
        ak: that.ak,
        sn: param["sn"] || '',
        timestamp: param["timestamp"] || '',
        radius: param["radius"] || 2000,
        ret_coordtype: 'gcj02ll' };

      var otherparam = {
        iconPath: param["iconPath"],
        iconTapPath: param["iconTapPath"],
        width: param["width"],
        height: param["height"],
        alpha: param["alpha"] || 1,
        success: param["success"] || function () {},
        fail: param["fail"] || function () {} };

      var type = 'gcj02';
      var locationsuccess = function locationsuccess(result) {
        searchparam["location"] = result["latitude"] + ',' + result["longitude"];
        uni.request({
          url: 'https://api.map.baidu.com/place/v2/search',
          data: searchparam,
          header: {
            "content-type": "application/json" },

          method: 'GET',
          success: function success(data) {
            var res = data["data"];
            if (res["status"] === 0) {
              var poiArr = res["results"];
              // outputRes 包含两个对象，
              // originalData为百度接口返回的原始数据
              // wxMarkerData为小程序规范的marker格式
              var outputRes = {};
              outputRes["originalData"] = res;
              outputRes["wxMarkerData"] = [];
              for (var i = 0; i < poiArr.length; i++) {
                outputRes["wxMarkerData"][i] = {
                  id: i,
                  latitude: poiArr[i]["location"]["lat"],
                  longitude: poiArr[i]["location"]["lng"],
                  title: poiArr[i]["name"],
                  iconPath: otherparam["iconPath"],
                  iconTapPath: otherparam["iconTapPath"],
                  address: poiArr[i]["address"],
                  telephone: poiArr[i]["telephone"],
                  alpha: otherparam["alpha"],
                  width: otherparam["width"],
                  height: otherparam["height"] };

              }
              otherparam.success(outputRes);
            } else {
              otherparam.fail({
                errMsg: res["message"],
                statusCode: res["status"] });

            }
          },
          fail: function fail(data) {
            otherparam.fail(data);
          } });

      };
      var locationfail = function locationfail(result) {
        otherparam.fail(result);
      };
      var locationcomplete = function locationcomplete(result) {
      };
      if (!param["location"]) {
        that.getWXLocation(type, locationsuccess, locationfail, locationcomplete);
      } else {
        var longitude = param.location.split(',')[1];
        var latitude = param.location.split(',')[0];
        var errMsg = 'input location';
        var res = {
          errMsg: errMsg,
          latitude: latitude,
          longitude: longitude };

        locationsuccess(res);
      }
    }

    /**
       * sug模糊检索
       *
       * @param {Object} param 检索配置
       * 参数对象结构可以参考
       * http://lbsyun.baidu.com/index.php?title=webapi/place-suggestion-api
       */ }, { key: "suggestion", value: function suggestion(
    param) {
      var that = this;
      param = param || {};
      var suggestionparam = {
        query: param["query"] || '',
        region: param["region"] || '全国',
        city_limit: param["city_limit"] || false,
        output: param["output"] || 'json',
        ak: that.ak,
        sn: param["sn"] || '',
        timestamp: param["timestamp"] || '',
        ret_coordtype: 'gcj02ll' };

      var otherparam = {
        success: param["success"] || function () {},
        fail: param["fail"] || function () {} };

      uni.request({
        url: 'https://api.map.baidu.com/place/v2/suggestion',
        data: suggestionparam,
        header: {
          "content-type": "application/json" },

        method: 'GET',
        success: function success(data) {
          var res = data["data"];
          if (res["status"] === 0) {
            otherparam.success(res);
          } else {
            otherparam.fail({
              errMsg: res["message"],
              statusCode: res["status"] });

          }
        },
        fail: function fail(data) {
          otherparam.fail(data);
        } });

    }

    /**
       * rgc检索（逆地理编码：经纬度->地点描述）
       * 
       * @param {Object} param 检索配置
       * 参数对象结构可以参考
       * https://lbs.baidu.com/index.php?title=webapi/guide/webservice-geocoding-abroad
       * 
       */ }, { key: "regeocoding", value: function regeocoding(
    param) {
      var that = this;
      param = param || {};
      var regeocodingparam = {
        coordtype: param["coordtype"] || 'gcj02ll',
        ret_coordtype: 'gcj02ll',
        radius: param["radius"] || 1000,
        ak: that.ak,
        sn: param["sn"] || '',
        output: param["output"] || 'json',
        callback: param["callback"] || function () {},
        extensions_poi: param["extensions_poi"] || 1,
        extensions_road: param["extensions_road"] || false,
        extensions_town: param["extensions_town"] || false,
        language: param["language"] || 'zh-CN',
        language_auto: param["language_auto"] || 0 };

      var otherparam = {
        iconPath: param["iconPath"],
        iconTapPath: param["iconTapPath"],
        width: param["width"],
        height: param["height"],
        alpha: param["alpha"] || 1,
        success: param["success"] || function () {},
        fail: param["fail"] || function () {} };

      var type = 'gcj02';
      var locationsuccess = function locationsuccess(result) {
        regeocodingparam["location"] = result["latitude"] + ',' + result["longitude"];
        uni.request({
          url: 'https://api.map.baidu.com/reverse_geocoding/v3',
          data: regeocodingparam,
          header: {
            "content-type": "application/json" },

          method: 'GET',
          success: function success(data) {
            var res = data["data"];
            if (res["status"] === 0) {
              var poiObj = res["result"];
              // outputRes 包含两个对象：
              // originalData为百度接口返回的原始数据
              // wxMarkerData为小程序规范的marker格式
              var outputRes = {};
              outputRes["originalData"] = res;
              outputRes["wxMarkerData"] = [];
              outputRes["wxMarkerData"][0] = {
                id: 0,
                latitude: result["latitude"],
                longitude: result["longitude"],
                address: poiObj["formatted_address"],
                iconPath: otherparam["iconPath"],
                iconTapPath: otherparam["iconTapPath"],
                desc: poiObj["sematic_description"],
                business: poiObj["business"],
                alpha: otherparam["alpha"],
                width: otherparam["width"],
                height: otherparam["height"] };

              otherparam.success(outputRes);
            } else {
              otherparam.fail({
                errMsg: res["message"],
                statusCode: res["status"] });

            }
          },
          fail: function fail(data) {
            otherparam.fail(data);
          } });

      };
      var locationfail = function locationfail(result) {
        otherparam.fail(result);
      };
      var locationcomplete = function locationcomplete(result) {
      };
      if (!param["location"]) {
        that.getWXLocation(type, locationsuccess, locationfail, locationcomplete);
      } else {
        var longitude = param.location.split(',')[1];
        var latitude = param.location.split(',')[0];
        var errMsg = 'input location';
        var res = {
          errMsg: errMsg,
          latitude: latitude,
          longitude: longitude };

        locationsuccess(res);
      }
    }

    /**
       * gc检索（地理编码：地点->经纬度）
       *
       * @param {Object} param 检索配置
       * 参数对象结构可以参考
       * https://lbs.baidu.com/index.php?title=webapi/guide/webservice-geocoding
       * 
       */ }, { key: "geocoding", value: function geocoding(
    param) {
      var that = this;
      param = param || {};
      var geocodingparam = {
        address: param["address"] || '',
        city: param["city"] || '',
        ret_coordtype: param["coordtype"] || 'gcj02ll',
        ak: that.ak,
        sn: param["sn"] || '',
        output: param["output"] || 'json',
        callback: param["callback"] || function () {} };

      var otherparam = {
        iconPath: param["iconPath"],
        iconTapPath: param["iconTapPath"],
        width: param["width"],
        height: param["height"],
        alpha: param["alpha"] || 1,
        success: param["success"] || function () {},
        fail: param["fail"] || function () {} };

      if (param["address"]) {
        uni.request({
          url: 'https://api.map.baidu.com/geocoding/v3',
          data: geocodingparam,
          header: {
            "content-type": "application/json" },

          method: 'GET',
          success: function success(data) {
            var res = data["data"];
            if (res["status"] === 0) {
              var poiObj = res["result"];
              // outputRes 包含两个对象：
              // originalData为百度接口返回的原始数据
              // wxMarkerData为小程序规范的marker格式
              var outputRes = res;
              outputRes["originalData"] = res;
              outputRes["wxMarkerData"] = [];
              outputRes["wxMarkerData"][0] = {
                id: 0,
                latitude: poiObj["location"]["lat"],
                longitude: poiObj["location"]["lng"],
                iconPath: otherparam["iconPath"],
                iconTapPath: otherparam["iconTapPath"],
                alpha: otherparam["alpha"],
                width: otherparam["width"],
                height: otherparam["height"] };

              otherparam.success(outputRes);
            } else {
              otherparam.fail({
                errMsg: res["message"],
                statusCode: res["status"] });

            }
          },
          fail: function fail(data) {
            otherparam.fail(data);
          } });

      } else {
        var errMsg = 'input address!';
        var res = {
          errMsg: errMsg };

        otherparam.fail(res);
      }
    }

    /**
       * 天气检索
       *
       * @param {Object} param 检索配置
       */ }, { key: "weather", value: function weather(
    param) {
      var that = this;
      param = param || {};
      var weatherparam = {
        coord_type: param["coord_type"] || 'gcj02',
        output: param["output"] || 'json',
        ak: that.ak,
        sn: param["sn"] || '',
        timestamp: param["timestamp"] || '' };

      var otherparam = {
        success: param["success"] || function () {},
        fail: param["fail"] || function () {} };

      var type = 'gcj02';
      var locationsuccess = function locationsuccess(result) {
        weatherparam["location"] = result["longitude"] + ',' + result["latitude"];
        uni.request({
          url: 'https://api.map.baidu.com/telematics/v3/weather',
          data: weatherparam,
          header: {
            "content-type": "application/json" },

          method: 'GET',
          success: function success(data) {
            var res = data["data"];
            if (res["error"] === 0 && res["status"] === 'success') {
              var weatherArr = res["results"];
              // outputRes 包含两个对象，
              // originalData为百度接口返回的原始数据
              // wxMarkerData为小程序规范的marker格式
              var outputRes = {};
              outputRes["originalData"] = res;
              outputRes["currentWeather"] = [];
              outputRes["currentWeather"][0] = {
                currentCity: weatherArr[0]["currentCity"],
                pm25: weatherArr[0]["pm25"],
                date: weatherArr[0]["weather_data"][0]["date"],
                temperature: weatherArr[0]["weather_data"][0]["temperature"],
                weatherDesc: weatherArr[0]["weather_data"][0]["weather"],
                wind: weatherArr[0]["weather_data"][0]["wind"] };

              otherparam.success(outputRes);
            } else {
              otherparam.fail({
                errMsg: res["message"],
                statusCode: res["status"] });

            }
          },
          fail: function fail(data) {
            otherparam.fail(data);
          } });

      };
      var locationfail = function locationfail(result) {
        otherparam.fail(result);
      };
      var locationcomplete = function locationcomplete(result) {
      };
      if (!param["location"]) {
        that.getWXLocation(type, locationsuccess, locationfail, locationcomplete);
      } else {
        var longitude = param.location.split(',')[0];
        var latitude = param.location.split(',')[1];
        var errMsg = 'input location';
        var res = {
          errMsg: errMsg,
          latitude: latitude,
          longitude: longitude };

        locationsuccess(res);
      }
    } }]);return BMapWX;}();


module.exports.BMapWX = BMapWX;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 21:
/*!*********************************************************!*\
  !*** C:/Users/win 10/Desktop/mlgxlm/common/js/order.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _demao = _interopRequireDefault(__webpack_require__(/*! ./demao.js */ 12));
var _request = _interopRequireDefault(__webpack_require__(/*! ./request.js */ 16));
var _utils = _interopRequireDefault(__webpack_require__(/*! ./utils.js */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var promiseClick = function promiseClick(data, com) {

  var p = new Promise(function (resolve, reject) {

    data.goods_id = com.goods_id;
    data.shop_id = com.shop_id;
    data.buy_num = com.num;
    data.method_type = com.method_type;
    data.is_cart = com.is_cart; //0 没通过购物车  1 购物车购买


    _request.default.post({
      url: "order_insert",
      method: "GET",
      data: data,
      isLoading: true,
      success: function success(res) {
        // console.log("这是下订单")
        var a = '这是空';
        //接收 普通订单为1  拼团订单为2  优惠卷订单为3   限时抢订单为4
        if (com.method_type == 1) {
          a = '普通订单为';
        }
        if (com.method_type == 2) {
          a = '拼团订单为';
        }
        if (com.method_type == 3) {
          a = '优惠卷订单为';
        }
        if (com.method_type == 4) {
          a = '限时抢订单为';
        }

        console.log({
          mes: '这是' + a + '支付了',
          mu: res });

        _utils.default.showToast_my('' + res.msg);
        _utils.default.jump(1, "/pages/pay/pay?order_id=" + res.order_id);

        resolve(res);
      } });

    // //做一些异步操作
    // setTimeout(function() {
    // 	console.log('执行完成Promise');
    // 	resolve('要返回的数据可以任何数据例如接口返回数据');
    // }, 2000);
  });
  return p;
};
module.exports = {
  make_order: promiseClick };

/***/ }),

/***/ 22:
/*!*********************************************************!*\
  !*** C:/Users/win 10/Desktop/mlgxlm/common/js/login.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {var _demao = _interopRequireDefault(__webpack_require__(/*! ./demao.js */ 12));
var _request = _interopRequireDefault(__webpack_require__(/*! ./request.js */ 16));
var _utils = _interopRequireDefault(__webpack_require__(/*! ./utils.js */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
var login = function login() {

  var p = new Promise(function (resolve, reject) {
    if (uni.getStorageSync("session")) {
      resolve(true);
    } else {
      uni.showModal({
        title: '提示',
        content: '此功能需要登录哦，是否立即前去登录',
        success: function success(res) {
          if (res.confirm) {
            _utils.default.jump(1, "/pages/login/login");
          } else if (res.cancel) {
            resolve(false);
          }
        } });

    }
  });
  return p;
};
module.exports = {
  login_state: login };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 23:
/*!**********************************************************!*\
  !*** C:/Users/win 10/Desktop/mlgxlm/common/css/font.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 38:
/*!***************************************************************!*\
  !*** C:/Users/win 10/Desktop/mlgxlm/pages/member/member.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 4:
/*!*************************************************!*\
  !*** C:/Users/win 10/Desktop/mlgxlm/pages.json ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 5:
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {var _package = __webpack_require__(/*! ../package.json */ 6);function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;

var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["mp-weixin"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 7).default;
var statConfig = __webpack_require__(/*! uni-stat-config */ 8).default || __webpack_require__(/*! uni-stat-config */ 8);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$key = _ref.key,key = _ref$key === void 0 ? '' : _ref$key,_ref$value = _ref.value,value = _ref$value === void 0 ? "" : _ref$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      uni.request({
        url: STAT_URL,
        method: 'POST',
        // header: {
        //   'content-type': 'application/json' // 默认值
        // },
        data: optionsData,
        success: function success() {
          // if (process.env.NODE_ENV === 'development') {
          //   console.log('stat request success');
          // }
        },
        fail: function fail(e) {
          if (++_this5._retry < 3) {
            setTimeout(function () {
              _this5._sendRequest(optionsData);
            }, 1000);
          }
        } });

    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      var image = new Image();
      var options = getSgin(GetEncodeURIComponentOptions(data)).options;
      image.src = STAT_H5_URL + '?' + options;
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Stat).call(this));
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 6:
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@next","_id":"@dcloudio/uni-stat@2.0.0-24120191114002","_inBundle":false,"_integrity":"sha512-j68RqeewGyFPfdlzADBoxklEb+0FbzxgQG9/bg12RRX7ISDMEFP9FmNKkpL0CFOrqO1//GHiB5+oxbWhLFMjFw==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@next","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"next","saveSpec":null,"fetchSpec":"next"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-24120191114002.tgz","_shasum":"20467f84fc1c5a1d349dd4124f92b678d83dc0b8","_spec":"@dcloudio/uni-stat@next","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"8084e20c55d3df84c36375e5401113a217b62128","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-24120191114002"};

/***/ }),

/***/ 7:
/*!******************************************************************!*\
  !*** C:/Users/win 10/Desktop/mlgxlm/pages.json?{"type":"style"} ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "pages": { "pages/home/home": { "navigationBarTitleText": "美丽共享联盟" }, "pages/member/member": { "navigationBarTitleText": "会员中心" }, "pages/street/street": { "navigationBarTitleText": "发现", "enablePullDownRefresh": true, "onReachBottomDistance": 50 }, "pages/pay/pay": { "navigationBarTitleText": "在线支付" }, "pages/pay/pay_success": { "navigationBarTitleText": "在线支付" }, "pages/pay/refund": { "navigationBarTitleText": "申请退款" }, "pages/pay/refund_success": { "navigationBarTitleText": "申请成功" }, "pages/pay/order": { "navigationBarTitleText": "我的订单" }, "pages/pay/assess": { "navigationBarTitleText": "评价晒单" }, "pages/pay/order_detail": { "navigationBarTitleText": "订单详情" }, "pages/shopping/shopping": { "navigationBarTitleText": "购物车" }, "pages/login/login": {}, "pages/home/search/search": {}, "pages/home/hairdressing/hairdressing": {}, "pages/home/menu-details/menu-details": { "enablePullDownRefresh": true }, "pages/home/shop-detial/shop-detial": {}, "pages/home/shop-detial/case": {}, "pages/home/goods-detail/goods-detail": {}, "pages/home/coupon/coupon": { "navigationBarTitleText": "优惠券" }, "pages/home/flashSale/flashSale": { "navigationBarTitleText": "限时抢" }, "pages/member/tool/include/include": {}, "pages/home/nearby/nearby": { "navigationBarTitleText": "附近店铺", "onReachBottomDistance": 50 }, "pages/home/nearby/newStore": { "navigationBarTitleText": "本周新店" }, "pages/home/assemble/assemble": {}, "pages/home/assemble/assem_list": {}, "pages/member/signIn/signIn": {}, "pages/member/my-coupon/my-coupon": {}, "pages/member/tool/address/address": { "navigationBarTitleText": "地址管理" }, "pages/member/tool/address/add-address": {}, "pages/home/retail/retail": {}, "pages/home/retail/my_order": {}, "pages/home/retail/my_team": {}, "pages/home/retail/rank": {}, "pages/home/retail/retail_cash": {}, "pages/member/my-coupon/my-assets": {}, "pages/member/help/question": {}, "pages/member/tool/bankcard/bankcard": {}, "pages/member/tool/bankcard/addcard": {}, "pages/member/my-coupon/money/money": {}, "pages/member/my-coupon/money/cash": {}, "pages/member/my-coupon/money/cash_success": {}, "pages/member/my-coupon/money/invest": {}, "pages/member/my-coupon/money/invest_success": {}, "pages/member/my-coupon/money/cash_detail": {}, "pages/member/tool/evaluate/evaluate": {}, "pages/home/displace/displace": {}, "pages/member/help/aboutUs": {}, "pages/member/tool/tracks/tracks": {}, "pages/member/tool/storeCollect/storeCollect": {}, "pages/member/tool/wareCollect/wareCollect": {}, "pages/home/hongbao/share": {}, "pages/home/hongbao/newPeople": {}, "pages/home/retail_home/retail_home": {}, "pages/home/retail_home/shop_detail": {}, "pages/pay/appointment": { "navigationBarTitleText": "我要预约" }, "pages/pay/appointment_success": { "navigationBarTitleText": "预约成功" }, "pages/home/retail/threeBtn": { "navigationBarTitleText": "提交信息" }, "pages/home/retail_home/goods_detail": { "navigationBarTitleText": "分销商品详情" }, "pages/home/retail_home/make_order": { "navigationBarTitleText": "购买商品" }, "pages/member/my-coupon/integral/integral": { "navigationBarTitleText": "我的积分" }, "pages/member/my-coupon/integral/integral_store": { "navigationBarTitleText": "积分商城" }, "pages/member/my-coupon/integral/integral_order": { "navigationBarTitleText": "积分商城" }, "pages/member/my-coupon/integral/integral_exchange_list": { "navigationBarTitleText": "兑换记录" }, "pages/cate/cate": {}, "pages/street/publish": { "navigationBarTitleText": "发布" }, "pages/street/street_detail": {}, "pages/member/help/feedback": { "navigationBarTitleText": "意见反馈" }, "pages/member/help/feedback_success": { "navigationBarTitleText": "反馈成功" } }, "globalStyle": { "navigationBarTextStyle": "white", "navigationBarTitleText": "uni-app", "navigationBarBackgroundColor": "#Fe0000", "backgroundColor": "#FFFFFF" } };exports.default = _default;

/***/ }),

/***/ 8:
/*!*****************************************************************!*\
  !*** C:/Users/win 10/Desktop/mlgxlm/pages.json?{"type":"stat"} ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "__UNI__A5B6914" };exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map