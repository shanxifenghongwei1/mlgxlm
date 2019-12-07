(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/member/tool/address/add-address"],{

/***/ 253:
/*!*******************************************************************************************************!*\
  !*** C:/Users/win 10/Desktop/mlgxlm/main.js?{"page":"pages%2Fmember%2Ftool%2Faddress%2Fadd-address"} ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _addAddress = _interopRequireDefault(__webpack_require__(/*! ./pages/member/tool/address/add-address.vue */ 254));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_addAddress.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 254:
/*!********************************************************************************!*\
  !*** C:/Users/win 10/Desktop/mlgxlm/pages/member/tool/address/add-address.vue ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_address_vue_vue_type_template_id_75300bc3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-address.vue?vue&type=template&id=75300bc3& */ 255);
/* harmony import */ var _add_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-address.vue?vue&type=script&lang=js& */ 257);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _add_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _add_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _add_address_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-address.vue?vue&type=style&index=0&lang=scss& */ 259);
/* harmony import */ var _Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 15);






/* normalize component */

var component = Object(_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _add_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_address_vue_vue_type_template_id_75300bc3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_address_vue_vue_type_template_id_75300bc3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Desktop/mlgxlm/pages/member/tool/address/add-address.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 255:
/*!***************************************************************************************************************!*\
  !*** C:/Users/win 10/Desktop/mlgxlm/pages/member/tool/address/add-address.vue?vue&type=template&id=75300bc3& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_address_vue_vue_type_template_id_75300bc3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./add-address.vue?vue&type=template&id=75300bc3& */ 256);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_address_vue_vue_type_template_id_75300bc3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_address_vue_vue_type_template_id_75300bc3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 256:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/win 10/Desktop/mlgxlm/pages/member/tool/address/add-address.vue?vue&type=template&id=75300bc3& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 257:
/*!*********************************************************************************************************!*\
  !*** C:/Users/win 10/Desktop/mlgxlm/pages/member/tool/address/add-address.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./add-address.vue?vue&type=script&lang=js& */ 258);
/* harmony import */ var _Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 258:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/win 10/Desktop/mlgxlm/pages/member/tool/address/add-address.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =

{
  data: function data() {
    return {
      address_id: 0,

      store: {
        is_default: 1 },


      addresstext: '请选择地区'

      // select:false,
    };
  },
  methods: {


    //选择城市
    yearChange: function yearChange(e) {
      this.addresstext = e.detail.value;
      this.store.address_area = e.detail.value.toString();
    },

    //是否选择默认
    checkboxChange: function checkboxChange(e) {
      this.store.is_default == 1 ? this.store.is_default = 2 : this.store.is_default = 1;
    },

    showToast_my: function showToast_my(e) {
      uni.showToast({
        title: e,
        duration: 2000,
        icon: "none" });

      return false;
    },
    check: function check() {
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
      switch (true) {
        case !this.store.name:
          this.showToast_my("用户名不能为空");
          break;
        case !myreg.test(this.store.tel):
          this.showToast_my("请输入正确的手机号");
          break;
        case !this.store.address_area:
          this.showToast_my("请选择地区");
          break;
        case !this.store.address_detail:
          this.showToast_my("请填写详细信息");
          break;
        default:
          return true;}

    },

    //提交数据
    save: function save() {var _this = this;
      if (this.check()) {
        console.log(this.store);
        this.global.request.post({
          url: this.store.id ? this.global.demao.api.update_address : this.global.demao.api.user_Address,
          method: "GET",
          data: this.store,
          success: function success(res) {
            console.log("这是返回数据" + res);
            console.log(res.msg);
            _this.showToast_my(res.msg);
            setTimeout(function () {
              uni.navigateBack({
                delta: 1 });

            }, 2000);
          } });

      }
    } },

  onLoad: function onLoad(e) {
    var a = uni.getStorageSync("address_edit");
    if (a) {
      this.store.id = a.id;
      this.store.name = a.name;
      this.store.tel = a.tel;
      this.store.address_detail = a.address_detail;
      this.store.address_area = a.address_provice + "," + a.address_city + "," + a.address_area;
      this.store.is_default = a.is_default;


      this.addresstext = a.address_provice + "," + a.address_city + "," + a.address_area;
      this.global.utils.sethead("修改地址");
    } else {
      this.global.utils.sethead("添加地址");
    }
  },
  destroyed: function destroyed() {
    uni.removeStorageSync('address_edit');
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 259:
/*!******************************************************************************************************************!*\
  !*** C:/Users/win 10/Desktop/mlgxlm/pages/member/tool/address/add-address.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_address_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../Documents/Tencent Files/867795803/FileRecv/安装包/HBuilderX.2.3.2.20190921/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./add-address.vue?vue&type=style&index=0&lang=scss& */ 260);
/* harmony import */ var _Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_address_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_address_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_address_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_address_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_Documents_Tencent_Files_867795803_FileRecv_HBuilderX_2_3_2_20190921_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_address_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 260:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/win 10/Desktop/mlgxlm/pages/member/tool/address/add-address.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[253,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/member/tool/address/add-address.js.map