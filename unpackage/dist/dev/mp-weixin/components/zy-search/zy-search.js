(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/zy-search/zy-search"],{

/***/ 709:
/*!*************************************************************************!*\
  !*** C:/Users/win 10/Desktop/mlgxlm/components/zy-search/zy-search.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _zy_search_vue_vue_type_template_id_78dfc031_scoped_true_name_zy_search___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zy-search.vue?vue&type=template&id=78dfc031&scoped=true&name=zy-search& */ 710);
/* harmony import */ var _zy_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zy-search.vue?vue&type=script&lang=js& */ 712);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _zy_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _zy_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _zy_search_vue_vue_type_style_index_0_id_78dfc031_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zy-search.vue?vue&type=style&index=0&id=78dfc031&lang=less&scoped=true& */ 714);
/* harmony import */ var _Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 15);






/* normalize component */

var component = Object(_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _zy_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _zy_search_vue_vue_type_template_id_78dfc031_scoped_true_name_zy_search___WEBPACK_IMPORTED_MODULE_0__["render"],
  _zy_search_vue_vue_type_template_id_78dfc031_scoped_true_name_zy_search___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "78dfc031",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Desktop/mlgxlm/components/zy-search/zy-search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 710:
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/win 10/Desktop/mlgxlm/components/zy-search/zy-search.vue?vue&type=template&id=78dfc031&scoped=true&name=zy-search& ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zy_search_vue_vue_type_template_id_78dfc031_scoped_true_name_zy_search___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./zy-search.vue?vue&type=template&id=78dfc031&scoped=true&name=zy-search& */ 711);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zy_search_vue_vue_type_template_id_78dfc031_scoped_true_name_zy_search___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zy_search_vue_vue_type_template_id_78dfc031_scoped_true_name_zy_search___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 711:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/win 10/Desktop/mlgxlm/components/zy-search/zy-search.vue?vue&type=template&id=78dfc031&scoped=true&name=zy-search& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 712:
/*!**************************************************************************************************!*\
  !*** C:/Users/win 10/Desktop/mlgxlm/components/zy-search/zy-search.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zy_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./zy-search.vue?vue&type=script&lang=js& */ 713);
/* harmony import */ var _Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zy_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zy_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zy_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zy_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zy_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 713:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/win 10/Desktop/mlgxlm/components/zy-search/zy-search.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var goodlist = function goodlist() {return Promise.all(/*! import() | components/mine/goods-row */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/mine/goods-row")]).then(__webpack_require__.bind(null, /*! @/components/mine/goods-row.vue */ 639));};var store = function store() {return Promise.all(/*! import() | components/mine/store */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/mine/store")]).then(__webpack_require__.bind(null, /*! @/components/mine/store.vue */ 800));};var _default =


































































































{
  components: {
    goodlist: goodlist,
    store: store },

  name: "zy-search",
  props: {
    isFocus: { //是否自动获取焦点
      type: Boolean,
      value: false },

    isBlock: { //选择块级显示还是圆形显示
      type: Boolean,
      value: true },

    showWant: { //是否展示推荐菜单
      type: Boolean,
      value: false } },



  data: function data() {
    return {
      searchText: '', //搜索关键词
      shoplists: [],
      mydiv: true,
      hList: [], //历史记录
      wantList: ['栏目1', '栏目2', '栏目3', '栏目4', '栏目4', '栏目4', '栏目4', '栏目4', '栏目4'], //初始化推荐列表
      is_open: false,
      cate: 1,
      list: {} };

  },
  methods: {
    searchtexts: function searchtexts(e) {var _this2 = this;
      var _this = this;
      _this.hList = uni.getStorageSync('search_cache');
      if (_this.searchText == '') {
        this.mydiv = true;
      } else {
        this.global.request.post({
          url: this.cate == 1 ? "search_goods" : "search_shop",
          method: "GET",
          data: {
            keyword: _this.searchText },

          success: function success(res) {
            console.log(res);
            // this.mydiv = false;
            if (res.salesInfo.length) {
              _this2.list = res;
              _this2.mydiv = false;
            } else {
              _this2.list = res;
            }
          } });

      }
      this.is_open = false;
    },
    searchStart: function searchStart() {var _this3 = this; //触发搜索
      this.is_open = false;
      var _this = this;
      if (_this.searchText == '') {

      } else {
        this.global.request.post({
          url: this.cate == 1 ? "search_goods" : "search_shop",
          method: "GET",
          data: {
            keyword: _this.searchText },

          success: function success(res) {
            console.log(res);
            // this.mydiv = false;
            if (res.salesInfo.length) {
              _this3.list = res;
              _this3.mydiv = false;
              var has_item = _this.hList.filter(function (v) {
                return v == _this.searchText.trim();
              });
              if (has_item.length) {} else {
                console.log(false);
                _this.hList.push(_this.searchText.trim());
                uni.setStorage({
                  key: 'search_cache',
                  data: _this.hList });

              }
            } else {
              _this3.list = res;
            }
          } });

      }

      this.mydiv = false;
    },
    keywordsClick: function keywordsClick(item) {//推荐搜索
      this.searchText = item;
      this.searchStart();
      this.is_open = false;
    },
    delhistory: function delhistory() {//清空历史记录
      this.hList = [];
      uni.setStorage({
        key: 'search_cache',
        data: [] });

      this.is_open = false;
    },
    open_cate: function open_cate() {
      this.is_open = true;
    },
    close_cate: function close_cate(e) {
      if (e) {
        if (e != this.cate) {
          this.cate = e;
          this.searchStart();
        } else {

        }
      }
      this.is_open = false;
    } },

  created: function created() {
    var _this = this;
    _this.hList = uni.getStorageSync('search_cache');
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 714:
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/win 10/Desktop/mlgxlm/components/zy-search/zy-search.vue?vue&type=style&index=0&id=78dfc031&lang=less&scoped=true& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zy_search_vue_vue_type_style_index_0_id_78dfc031_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--10-oneOf-1-2!../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./zy-search.vue?vue&type=style&index=0&id=78dfc031&lang=less&scoped=true& */ 715);
/* harmony import */ var _Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zy_search_vue_vue_type_style_index_0_id_78dfc031_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zy_search_vue_vue_type_style_index_0_id_78dfc031_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zy_search_vue_vue_type_style_index_0_id_78dfc031_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zy_search_vue_vue_type_style_index_0_id_78dfc031_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_10_oneOf_1_2_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_zy_search_vue_vue_type_style_index_0_id_78dfc031_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 715:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!./node_modules/css-loader??ref--10-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/win 10/Desktop/mlgxlm/components/zy-search/zy-search.vue?vue&type=style&index=0&id=78dfc031&lang=less&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/zy-search/zy-search.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/zy-search/zy-search-create-component',
    {
        'components/zy-search/zy-search-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(709))
        })
    },
    [['components/zy-search/zy-search-create-component']]
]);
