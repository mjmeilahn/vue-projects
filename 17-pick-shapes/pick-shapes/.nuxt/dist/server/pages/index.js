exports.ids = [1];
exports.modules = {

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("2fcae43a", content, true, context)
};

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("7402aada", content, true, context)
};

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("ae80abde", content, true, context)
};

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Results.vue?vue&type=template&id=d8312d4a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"results"},[_vm._ssrNode((_vm._ssrList((_vm.shapes),function(s,shapeIndex){return ("<div class=\"shape-container\" data-v-d8312d4a><div class=\"shape\" data-v-d8312d4a>"+((s.shape === 'triangle')?("<div"+(_vm._ssrClass(null,s.shape))+(_vm._ssrStyle(null,{'border-bottom-color': s.color}, null))+" data-v-d8312d4a></div>"):("<div"+(_vm._ssrClass(null,s.shape))+(_vm._ssrStyle(null,{'background': s.color}, null))+" data-v-d8312d4a></div>"))+" <div class=\"shape-text\" data-v-d8312d4a>"+_vm._ssrEscape(_vm._s(s.text))+"</div></div> <button data-v-d8312d4a>Delete</button></div>")})))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Results.vue?vue&type=template&id=d8312d4a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Results.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Resultsvue_type_script_lang_js_ = ({
  name: 'Results.Component',
  props: {
    shapes: Array
  },
  methods: {
    deleteShape(index) {
      this.$emit('deleteShape', index);
    }

  }
});
// CONCATENATED MODULE: ./components/Results.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Resultsvue_type_script_lang_js_ = (Resultsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Results.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(30)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Resultsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d8312d4a",
  "f253403a"
  
)

/* harmony default export */ var Results = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MainForm.vue?vue&type=template&id=6310e7f8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"form-container"},[_vm._ssrNode("<form data-v-6310e7f8>","</form>",[(_vm.view === 'default')?_vm._ssrNode("<div data-v-6310e7f8>","</div>",[_vm._ssrNode("<button data-v-6310e7f8>"+_vm._ssrEscape("\n        "+_vm._s(_vm.currentShape.shape)+"\n      ")+"</button> <button data-v-6310e7f8>"+_vm._ssrEscape("\n        "+_vm._s(_vm.currentShape.color)+"\n      ")+"</button> <input type=\"text\" placeholder=\"Text Input\""+(_vm._ssrAttr("value",(_vm.currentShape.text)))+" data-v-6310e7f8> <button type=\"submit\" data-v-6310e7f8>Add</button> "+((_vm.error)?("<div class=\"error-message\" data-v-6310e7f8>Please complete all fields and try again</div>"):"<!---->"))],2):(_vm.view === 'shapes')?_vm._ssrNode(("<div data-v-6310e7f8>"+(_vm._ssrList((_vm.shapes),function(shape,shapeIndex){return ("<div data-v-6310e7f8><button data-v-6310e7f8>"+_vm._ssrEscape(_vm._s(shape))+"</button></div>")}))+"</div>")):(_vm.view === 'colors')?_vm._ssrNode("<div data-v-6310e7f8>","</div>",[_vm._ssrNode("<section class=\"color-picker\" data-v-6310e7f8>","</section>",[_c('chrome-picker',{model:{value:(_vm.colors),callback:function ($$v) {_vm.colors=$$v},expression:"colors"}})],1),_vm._ssrNode(" <div class=\"confirm\" data-v-6310e7f8>Confirm</div>")],2):_vm._e()])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MainForm.vue?vue&type=template&id=6310e7f8&scoped=true&

// EXTERNAL MODULE: external "vue-color"
var external_vue_color_ = __webpack_require__(22);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MainForm.vue?vue&type=script&lang=js&
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

const initial = {
  shape: 'Choose Shape',
  text: '',
  color: 'Choose Color'
};
const defaultColor = '#4885ed';
/* harmony default export */ var MainFormvue_type_script_lang_js_ = ({
  name: 'MainForm.Component',

  data() {
    return {
      colors: defaultColor,
      currentShape: {
        shape: initial.shape,
        text: initial.text,
        color: initial.color
      },
      error: false,
      shapes: ['Circle', 'Rectangle', 'Square', 'Triangle'],
      view: 'default'
    };
  },

  methods: {
    validate() {
      this.error = false; // VALIDATE SHAPE

      if (!this.shapes.includes(this.currentShape.shape)) {
        console.error('No Shape Selected');
        this.error = true;
      } // VALIDATE COLOR


      if (this.currentShape.color === initial.color) {
        console.error('No Color Selected');
        this.error = true;
      } // VALIDATE TEXT


      if (this.currentShape.text === initial.text) {
        console.error('No Text Selected');
        this.error = true;
      } // DO NOT CONTINUE IF WE HAVE ERRORS


      if (this.error) return; // IF WE HAVE CLEARED VALIDATION,
      // SEND DATA TO PARENT COMPONENT

      this.$emit('createShape', this.currentShape); // RESET INITIAL STATE

      this.currentShape = {
        shape: initial.shape,
        text: initial.text,
        color: initial.color
      };
    },

    addShape(shape) {
      this.currentShape.shape = shape; // RETURN TO DEFAULT VIEW

      this.view = 'default';
    },

    addColor() {
      if (this.colors === defaultColor) {
        this.currentShape.color = defaultColor;
      } else {
        this.currentShape.color = this.colors.hex;
      } // RETURN TO DEFAULT VIEW


      this.view = 'default';
    }

  },
  components: {
    'chrome-picker': external_vue_color_["Chrome"]
  }
});
// CONCATENATED MODULE: ./components/MainForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MainFormvue_type_script_lang_js_ = (MainFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/MainForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(28)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MainFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6310e7f8",
  "6238e700"
  
)

/* harmony default export */ var MainForm = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainForm_vue_vue_type_style_index_0_id_6310e7f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainForm_vue_vue_type_style_index_0_id_6310e7f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainForm_vue_vue_type_style_index_0_id_6310e7f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainForm_vue_vue_type_style_index_0_id_6310e7f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainForm_vue_vue_type_style_index_0_id_6310e7f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainForm_vue_vue_type_style_index_0_id_6310e7f8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "button[data-v-6310e7f8],input[data-v-6310e7f8]{display:block;font-size:16px;max-width:200px;width:100%}button[data-v-6310e7f8],form[data-v-6310e7f8],input[data-v-6310e7f8]{border:2px solid #000}.confirm[data-v-6310e7f8],button[data-v-6310e7f8]{background-color:#fff;cursor:pointer;margin:auto auto 30px;padding:15px;text-align:center;transition:all .3s ease-in}.confirm[data-v-6310e7f8]:hover,button[data-v-6310e7f8]:hover{background-color:#d9e9fb;border:2px solid #9baab3;font-weight:700}.confirm[data-v-6310e7f8],button[type=submit][data-v-6310e7f8]{background-color:#d5e8d2;border:2px solid #a7be9e;border-radius:8px;font-weight:700;margin:auto;max-width:120px}.confirm[data-v-6310e7f8]:hover,button[type=submit][data-v-6310e7f8]:hover{background-color:#d5e8d2}form[data-v-6310e7f8]{max-width:500px;padding:30px}form[data-v-6310e7f8],input[data-v-6310e7f8]{margin:auto auto 30px}input[data-v-6310e7f8]{padding:15px 30px;text-align:center}input[data-v-6310e7f8]::-moz-placeholder{color:#000}input[data-v-6310e7f8]:-ms-input-placeholder{color:#000}input[data-v-6310e7f8]::placeholder{color:#000}.vc-chrome[data-v-6310e7f8]{margin:auto auto 30px;width:236px!important}.error-message[data-v-6310e7f8]{color:red;margin:15px 15px 0;text-align:center}@media only screen and (min-width:768px){input[data-v-6310e7f8]{margin-bottom:120px}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_style_index_0_id_d8312d4a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_style_index_0_id_d8312d4a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_style_index_0_id_d8312d4a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_style_index_0_id_d8312d4a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_style_index_0_id_d8312d4a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_style_index_0_id_d8312d4a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".results[data-v-d8312d4a]{align-items:center;display:flex;flex-wrap:wrap;justify-content:center}.shape-container[data-v-d8312d4a]{margin-bottom:30px;width:100%}.shape[data-v-d8312d4a]{align-items:center;display:flex;font-weight:700;justify-content:center;margin-bottom:30px;position:relative}.shape-text[data-v-d8312d4a]{position:absolute;text-align:center;width:100%}.circle[data-v-d8312d4a]{background:red;border-radius:50%;height:150px;width:150px}.rectangle[data-v-d8312d4a]{background:red;height:125px;width:250px}.rectangle[data-v-d8312d4a],.rectangle+.shape-text[data-v-d8312d4a]{font-weight:400}.square[data-v-d8312d4a]{background:red;height:150px;width:150px}.triangle[data-v-d8312d4a]{border-bottom:150px solid red;border-left:100px solid transparent;border-right:100px solid transparent;height:0;width:0}.triangle+.shape-text[data-v-d8312d4a]{bottom:50px}button[data-v-d8312d4a]{background-color:#fff;border:2px solid #000;cursor:pointer;display:block;font-size:16px;margin:auto;max-width:100px;padding:15px;text-align:center;transition:all .3s ease-in;width:100%}button[data-v-d8312d4a]:hover{background-color:#d9e9fb;border:2px solid #9baab3;font-weight:700}@media only screen and (min-width:768px){.shape-container[data-v-d8312d4a]{margin:15px;width:auto}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_79eb4dd2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_79eb4dd2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_79eb4dd2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_79eb4dd2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_79eb4dd2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_79eb4dd2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container[data-v-79eb4dd2]{padding:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=79eb4dd2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"container"},[_c('MainForm',{on:{"createShape":function($event){return _vm.createShape($event)}}}),_vm._ssrNode(" "),_c('Results',{attrs:{"shapes":_vm.shapes},on:{"deleteShape":function($event){return _vm.deleteShape($event)}}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=79eb4dd2&scoped=true&

// EXTERNAL MODULE: ./components/MainForm.vue + 4 modules
var MainForm = __webpack_require__(27);

// EXTERNAL MODULE: ./components/Results.vue + 4 modules
var Results = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//


/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: 'Index.Page',

  data() {
    return {
      shapes: []
    };
  },

  methods: {
    createShape(obj) {
      // ADJUST DATA BEFORE WE PASS TO PROPS
      const shape = {
        shape: obj.shape.toLowerCase(),
        text: obj.text,
        color: obj.color
      };
      this.shapes.push(shape);
    },

    deleteShape(index) {
      this.shapes.splice(index, 1);
    }

  },
  components: {
    MainForm: MainForm["default"],
    Results: Results["default"]
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(32)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "79eb4dd2",
  "1f7bdbb1"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MainForm: __webpack_require__(27).default,Results: __webpack_require__(26).default})


/***/ })

};;
//# sourceMappingURL=index.js.map