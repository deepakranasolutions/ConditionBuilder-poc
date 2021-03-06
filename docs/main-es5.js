function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--app-create-condition></app-create-condition-->\r\n<p>\r\n    Notes: This page is still in development. <br/>\r\n    - Refresh of page is not working. If you clicked bychance, close the page and reopen the page.<br/>\r\n    - To reset the condition, click on 'View Condition' link and then again click on 'Create Condition' link <br/>\r\n\r\n</p>\r\n<nav>\r\n    <a routerLink=\"/createCondition\">Create New Condition</a><br>\r\n    <a routerLink=\"/viewConditionList\">View Conditions</a>\r\n</nav>\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/condition-list/condition-list.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/condition-list/condition-list.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConditionListConditionListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table>\n    <tr>\n        <td>\n            <table>\n                <tr>\n                    <td>\n                        Condition Name\n                    </td>\n                    <td>\n                        Action\n                    </td>\n                </tr>\n            </table>\n        </td>\n    </tr>\n</table>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/condition-navigation/condition-navigation.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/condition-navigation/condition-navigation.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConditionNavigationConditionNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table>\n    <tr>\n        <td>\n            <a routerLink=\"createCondition\" >Create New Condition</a>\n        </td>\n        <td>\n            <a routerLink=\"viewConditionList\" >View Conditions</a>\n        </td>\n    </tr>\n</table>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/condition-view/condition-view.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/condition-view/condition-view.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConditionViewConditionViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table>\n    <tr>\n        <td>\n            <!--Condition part-->\n            <ng-container *ngTemplateOutlet=\"ntConditionViewBox;context:{box: condition.masterBox}\"></ng-container>\n        </td>\n        <td style=\"border-left: 1px solid;\">\n            <!--Action part-->\n            <ng-container *ngTemplateOutlet=\"conditionActionView;context:{condition: condition}\"></ng-container>\n        </td>\n        <td style=\"border-left: 1px solid;\">\n            <!--Result part-->\n            <ng-container *ngTemplateOutlet=\"conditionResultView;context:{condition: condition}\"></ng-container>\n        </td>\n    </tr>\n</table>\n\n<ng-template #ntConditionViewBox let-box=\"box\">\n  <table class=\"border\" [ngClass]=\"{'theme-odd':!box.depth%2==0, 'theme-even':box.depth%2==0}\">\n    <tr>\n      <td  style=\"border: 1px solid red;\">\n        <i>Group {{box.displayId}}</i><br>\n        {{box.join}}<br>\n      </td>\n      <td style=\"border: 1px solid green;\">\n        <table style=\"border: none;\">\n          <tr>\n            <td>\n              <span *ngIf=\"!box.isLeafBox()\">\n                <div *ngFor=\"let subBox of box.getBoxes()\" style=\"margin: 5px\">\n                  <ng-container *ngTemplateOutlet=\"ntConditionViewBox;context:{box: subBox}\"></ng-container>\n                </div>\n              </span>\n              <span *ngIf=\"box.isLeafBox()\">\n                <ng-container *ngTemplateOutlet=\"ntLeafViewBox; context:{box: box}\"></ng-container>\n              </span>\n            </td>\n          </tr>\n        </table>\n      </td>\n    </tr>\n  </table>\n</ng-template>\n\n<ng-template #ntLeafViewBox let-box=\"box\">\n  <table style=\"border: none;\">\n    <tr>\n      <td class=\"noborder\">\n        <table>\n          <tr *ngFor=\"let subCondition of box.getSubConditions()\">\n            <ng-container *ngTemplateOutlet=\"conditionOptions;context:{box: box, subCondition: subCondition, listLenght: box.getSubConditions().length}\"></ng-container>\n          </tr>\n        </table>\n      </td>\n    </tr>\n  </table>\n</ng-template>\n\n<ng-template #conditionGroup let-box=\"box\" let-subCondition=\"subCondition\" let-listLenght=\"listLenght\">\n    <ng-container *ngTemplateOutlet=\"conditionOptions;context:{box: box, subCondition:subCondition, listLenght: listLenght}\"></ng-container>\n</ng-template>\n\n<!--First part of the conditons-->\n<ng-template #conditionOptions let-box=\"box\" let-subCondition=\"subCondition\" let-listLenght=\"listLenght\">\n  <!--td>\n    {{box.id}}\n  </td-->\n    <span *ngIf=\"subCondition.conditionObject; else elseBlock\">\n        <td>\n            {{subCondition.conditionObject}}\n        </td>\n        <td>\n            {{subCondition.conditionOperator}}\n        </td>\n        <td>\n            {{subCondition.conditionValue}}\n        </td>\n    </span>\n    <ng-template #elseBlock>Condition not yet setup.</ng-template>\n</ng-template>\n\n<!--Second part of the conditons-->\n<ng-template #conditionActionView let-condition=\"condition\">\n    <td>\n        <span *ngIf=\"condition.conditionAction; else elseBlock\">\n            {{condition.conditionAction}}\n        </span>\n        <ng-template #elseBlock>Action not yet setup</ng-template>\n    </td>\n</ng-template>\n<ng-template #conditionResultView let-condition=\"condition\">\n    <td>\n        <span *ngIf=\"condition.conditionResult; else elseBlock\">\n            {{condition.conditionResult}}\n        </span>\n        <ng-template #elseBlock>Result not yet setup</ng-template>\n    </td>\n</ng-template>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/create-condition/condition-selection/condition-selection.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-condition/condition-selection/condition-selection.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCreateConditionConditionSelectionConditionSelectionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<tr>\n    <td>\n        <select (change) = \"onChangeObject($event.target.value)\">\n            <option>-Select-</option>\n            <option *ngFor=\"let item of conditionObjectList$ | async\">\n                {{item.name}}\n            </option>\n        </select>\n    </td>\n    <td>\n        <select (change) = \"onChangeOperator($event.target.value)\">\n            <option>-Select-</option>\n            <option *ngFor=\"let item of conditionOperatorList$ | async\">\n                {{item}}\n            </option>\n        </select>\n    </td>\n    <td>\n        <select (change) = \"onChangeValue($event.target.value)\">\n            <option>-Select-</option>\n            <option *ngFor=\"let item of conditionValueList$ | async\">\n                {{item}}\n            </option>\n        </select>\n    </td>\n    <td>\n        <select (change) = \"onChangeJoin($event.target.value)\">\n            <option>-Select-</option>\n            <option *ngFor=\"let item of conditionJoinList$ | async\">\n                {{item}}\n            </option>\n        </select>\n    </td>\n    <td>\n        <select *ngIf=\"showActionAndResult\" (change) = \"onChangeAction($event.target.value)\">\n            <option>-Select-</option>\n            <option *ngFor=\"let item of conditionActionList$ | async\">\n                {{item}}\n            </option>\n        </select>\n    </td>\n    <td>\n        <select *ngIf=\"showActionAndResult\" (change) = \"onChangeResult($event.target.value)\">\n            <option>-Select-</option>\n            <option *ngFor=\"let item of conditionResultList$ | async\">\n                {{item}}\n            </option>\n        </select>\n    </td>\n</tr>\n    \n    \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/create-condition/create-condition.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-condition/create-condition.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCreateConditionCreateConditionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "full len - {{condition.masterBox.getBoxes().length}}<br>\nmaster box id - {{condition.masterBox.id}}<br>\ncon id - {{condition.id}}<br><br>\n{{condition.masterBox | json}}\n<!--{{condition.masterBox | json}}<br><br>\n<button (click)=\"saveCondition($event, condition.masterBox)\">Save Condition</button><br><br>-->\n\n<ng-container *ngTemplateOutlet=\"ntConditionPreview; context:{box: condition.masterBox}\"></ng-container>\n\n\n<ng-template #ntConditionPreview let-box=\"box\">\n  (\n  <span *ngIf=\"!box.isLeafBox()\">\n    <span *ngFor=\"let subBox of box.getBoxes(); last as isLast\">\n      <ng-container *ngTemplateOutlet=\"ntConditionPreview;context:{box: subBox}\"></ng-container>\n      <span *ngIf=\"!isLast\"> {{box.join}} </span>\n    </span>\n  </span>\n  <span *ngIf=\"box.isLeafBox()\">\n    <span *ngFor=\"let sc of box.getSubConditions(); last as isLast\">\n      {{sc.id}} <span *ngIf=\"!isLast\"> {{box.join}} </span>\n    </span>\n  </span>\n  )\n</ng-template>\n\n<ng-container *ngTemplateOutlet=\"ntConditionView; context:{box: condition.masterBox}\"></ng-container>\n<app-condition-view [condition] = \"condition\"></app-condition-view>\n\n\n<table>\n  <tr>\n    <td>\n      <table>\n        <tr>\n          <td>\n            <!--Condition creation part-->\n              <ng-container *ngTemplateOutlet=\"ntConditionBox;context:{box: condition.masterBox}\"></ng-container>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <button (click)=\"addOuterGroup($event)\">Add Outer Group</button>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <button (click)=\"saveCondition($event, condition)\">Save Condition</button>\n          </td>\n        </tr>\n      </table>\n    </td>\n    <td style=\"border-left: 1px solid;\">\n      <!--Result part-->\n      <ng-container *ngTemplateOutlet=\"conditionAction;context:{box: condition.masterBox}\"></ng-container>\n    </td>\n    <td style=\"border-left: 1px solid;\">\n      <!--Result part-->\n      <ng-container *ngTemplateOutlet=\"conditionResult;context:{box: condition.masterBox}\"></ng-container>\n    </td>\n  </tr>\n</table>\n\n\n\n<ng-template #ntConditionBox let-box=\"box\">\n  <table class=\"border\" [ngClass]=\"{'theme-odd':!box.depth%2==0, 'theme-even':box.depth%2==0}\">\n    <tr>\n      <td  style=\"border: 1px solid red;\">\n        <i>Group {{box.displayId}}</i><br>\n        {{box.id}} <br>\n        {{box.depth}}<br>\n        <input type=\"radio\" name=\"{{box.id}}\" id=\"AND:{{box.id}}\" (click)=\"onClickJoin(box, 'AND')\">AND<br/>\n        <input type=\"radio\" name=\"{{box.id}}\" id=\"OR:{{box.id}}\" (click)=\"onClickJoin(box, 'OR')\">OR\n      </td>\n      <td style=\"border: 1px solid green;\">\n        <table style=\"border: none;\">\n          <tr>\n            <td>\n              <span *ngIf=\"!box.isLeafBox()\">\n                <div *ngFor=\"let subBox of box.getBoxes()\" style=\"margin: 5px\">\n                  <ng-container *ngTemplateOutlet=\"ntConditionBox;context:{box: subBox}\"></ng-container>\n                </div>\n              </span>\n              <span *ngIf=\"box.isLeafBox()\">\n                <ng-container *ngTemplateOutlet=\"ntLeafBox; context:{box: box}\"></ng-container>\n              </span>\n            </td>\n          </tr>\n          <tr *ngIf=\"!box.isLeafBox()\">\n            <td>\n              <button (click)=\"onAddGroup($event, box)\">Add sibling {{box.id}}</button>\n            </td>\n          </tr>\n        </table>\n      </td>\n    </tr>\n  </table>\n</ng-template>\n\n<ng-template #ntLeafBox let-box=\"box\">\n  <table style=\"border: none;\">\n    <tr>\n      <!--td class=\"border\">\n        {{box.id}} <br>\n        AND/OR <br>\n      </td-->\n      <td class=\"noborder\">\n        <table>\n          <tr *ngFor=\"let subCondition of box.getSubConditions()\">\n            <ng-container *ngTemplateOutlet=\"conditionOptions;context:{box: box, subCondition: subCondition, listLenght: box.getSubConditions().length}\"></ng-container>\n          </tr>\n          <tr>\n            <td>\n              <button (click)=\"onAddRowInGroup($event, box)\">Add Condition Row</button>\n            </td>\n          </tr>\n        </table>\n      </td>\n    </tr>\n  </table>\n</ng-template>\n\n<ng-template #conditionGroup let-box=\"box\" let-subCondition=\"subCondition\" let-listLenght=\"listLenght\">\n    <ng-container *ngTemplateOutlet=\"conditionOptions;context:{box: box, subCondition:subCondition, listLenght: listLenght}\"></ng-container>\n</ng-template>\n\n<!--First part of the conditons-->\n<ng-template #conditionOptions let-box=\"box\" let-subCondition=\"subCondition\" let-listLenght=\"listLenght\">\n  <!--td>\n    {{box.id}}\n  </td-->\n    <td>\n        <select (change) = \"onChangeObject($event.target.value, subCondition)\">\n            <option>-Select-</option>\n            <option *ngFor=\"let item of conditionObjectList$ | async\">\n                {{item.name}}\n            </option>\n        </select>\n    </td>\n    <td>\n        <select (change) = \"onChangeOperator($event.target.value, subCondition)\">\n            <option>-Select-</option>\n            <option *ngFor=\"let item of conditionOperatorList$ | async\">\n                {{item}}\n            </option>\n        </select>\n    </td>\n    <td>\n        <select (change) = \"onChangeValue($event.target.value, subCondition)\">\n            <option>-Select-</option>\n            <option *ngFor=\"let item of conditionValueList$ | async\">\n                {{item}}\n            </option>\n        </select>\n    </td>\n    <!--td>\n        <select (change) = \"onChangeJoin($event.target.value, subCondition)\">\n            <option>-Select-</option>\n            <option *ngFor=\"let item of conditionJoinList$ | async\">\n                {{item}}\n            </option>\n        </select>\n    </td-->\n    <td>\n        <button (click)=\"onRemoveRow($event, box, subCondition)\">Remove</button>\n    </td>\n</ng-template>\n\n<!--Second part of the conditons-->\n<ng-template #conditionAction>\n    <td>\n        <select *ngIf=\"showActionAndResult\" (change) = \"onChangeAction($event.target.value)\">\n            <option>-Select-</option>\n            <option *ngFor=\"let item of conditionActionList$ | async\">\n                {{item}}\n            </option>\n        </select>\n    </td>\n</ng-template>\n<ng-template #conditionResult>\n    <td>\n        <select *ngIf=\"showActionAndResult\" (change) = \"onChangeResult($event.target.value)\">\n            <option>-Select-</option>\n            <option *ngFor=\"let item of conditionResultList$ | async\">\n                {{item}}\n            </option>\n        </select>\n    </td>\n</ng-template>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/ad-component-host.directive.ts":
  /*!************************************************!*\
    !*** ./src/app/ad-component-host.directive.ts ***!
    \************************************************/

  /*! exports provided: AdComponentHostDirective */

  /***/
  function srcAppAdComponentHostDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdComponentHostDirective", function () {
      return AdComponentHostDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdComponentHostDirective = function AdComponentHostDirective(viewContainerRef) {
      _classCallCheck(this, AdComponentHostDirective);

      this.viewContainerRef = viewContainerRef;
    };

    AdComponentHostDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }];
    };

    AdComponentHostDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[ad-component-host]'
    })], AdComponentHostDirective);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _create_condition_create_condition_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./create-condition/create-condition.component */
    "./src/app/create-condition/create-condition.component.ts");
    /* harmony import */


    var _condition_list_condition_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./condition-list/condition-list.component */
    "./src/app/condition-list/condition-list.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/createCondition',
      pathMatch: 'full'
    }, {
      path: 'ConditionBuilder-poc',
      redirectTo: '/createCondition',
      pathMatch: 'prefix'
    }, {
      path: 'createCondition',
      component: _create_condition_create_condition_component__WEBPACK_IMPORTED_MODULE_4__["CreateConditionComponent"]
    }, {
      path: 'viewConditionList',
      component: _condition_list_condition_list_component__WEBPACK_IMPORTED_MODULE_5__["ConditionListComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'ConditionBuilderApp';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-in-memory-web-api */
    "./node_modules/angular-in-memory-web-api/index.js");
    /* harmony import */


    var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./in-memory-data.service */
    "./src/app/in-memory-data.service.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _create_condition_create_condition_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./create-condition/create-condition.component */
    "./src/app/create-condition/create-condition.component.ts");
    /* harmony import */


    var _create_condition_condition_selection_condition_selection_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./create-condition/condition-selection/condition-selection.component */
    "./src/app/create-condition/condition-selection/condition-selection.component.ts");
    /* harmony import */


    var _ad_component_host_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./ad-component-host.directive */
    "./src/app/ad-component-host.directive.ts");
    /* harmony import */


    var _condition_view_condition_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./condition-view/condition-view.component */
    "./src/app/condition-view/condition-view.component.ts");
    /* harmony import */


    var _condition_list_condition_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./condition-list/condition-list.component */
    "./src/app/condition-list/condition-list.component.ts");
    /* harmony import */


    var _condition_navigation_condition_navigation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./condition-navigation/condition-navigation.component */
    "./src/app/condition-navigation/condition-navigation.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _create_condition_create_condition_component__WEBPACK_IMPORTED_MODULE_9__["CreateConditionComponent"], _create_condition_condition_selection_condition_selection_component__WEBPACK_IMPORTED_MODULE_10__["ConditionSelectionComponent"], _ad_component_host_directive__WEBPACK_IMPORTED_MODULE_11__["AdComponentHostDirective"], _condition_view_condition_view_component__WEBPACK_IMPORTED_MODULE_12__["ConditionViewComponent"], _condition_list_condition_list_component__WEBPACK_IMPORTED_MODULE_13__["ConditionListComponent"], _condition_navigation_condition_navigation_component__WEBPACK_IMPORTED_MODULE_14__["ConditionNavigationComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["HttpClientInMemoryWebApiModule"].forRoot( //deepaktodo - remove it later when actual backend is used
      _in_memory_data_service__WEBPACK_IMPORTED_MODULE_6__["InMemoryDataService"], {
        dataEncapsulation: false
      })],
      entryComponents: [_create_condition_condition_selection_condition_selection_component__WEBPACK_IMPORTED_MODULE_10__["ConditionSelectionComponent"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/condition-list/condition-list.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/condition-list/condition-list.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConditionListConditionListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmRpdGlvbi1saXN0L2NvbmRpdGlvbi1saXN0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/condition-list/condition-list.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/condition-list/condition-list.component.ts ***!
    \************************************************************/

  /*! exports provided: ConditionListComponent */

  /***/
  function srcAppConditionListConditionListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConditionListComponent", function () {
      return ConditionListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConditionListComponent = /*#__PURE__*/function () {
      function ConditionListComponent() {
        _classCallCheck(this, ConditionListComponent);
      }

      _createClass(ConditionListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConditionListComponent;
    }();

    ConditionListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-condition-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./condition-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/condition-list/condition-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./condition-list.component.css */
      "./src/app/condition-list/condition-list.component.css"))["default"]]
    })], ConditionListComponent);
    /***/
  },

  /***/
  "./src/app/condition-navigation/condition-navigation.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/condition-navigation/condition-navigation.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConditionNavigationConditionNavigationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmRpdGlvbi1uYXZpZ2F0aW9uL2NvbmRpdGlvbi1uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/condition-navigation/condition-navigation.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/condition-navigation/condition-navigation.component.ts ***!
    \************************************************************************/

  /*! exports provided: ConditionNavigationComponent */

  /***/
  function srcAppConditionNavigationConditionNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConditionNavigationComponent", function () {
      return ConditionNavigationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConditionNavigationComponent = /*#__PURE__*/function () {
      function ConditionNavigationComponent() {
        _classCallCheck(this, ConditionNavigationComponent);
      }

      _createClass(ConditionNavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConditionNavigationComponent;
    }();

    ConditionNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-condition-navigation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./condition-navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/condition-navigation/condition-navigation.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./condition-navigation.component.css */
      "./src/app/condition-navigation/condition-navigation.component.css"))["default"]]
    })], ConditionNavigationComponent);
    /***/
  },

  /***/
  "./src/app/condition-view/condition-view.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/condition-view/condition-view.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConditionViewConditionViewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".border table, td {\n  border: 1px solid black;\n  border-collapse: collapse;\n  border-spacing: 0px;\n}\n\ntd {\n  padding: 5px;\n}\n\n.noborder table, td {\n  border: 0px dotted;\n}\n\n.theme-odd {\n  background-color: #d4ebf2;\n}\n\n.theme-even {\n  background-color: #fff3f5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZGl0aW9uLXZpZXcvQzpcXEFuZ3VsYXIgV29ya3NwYWNlXFxDb25kaXRpb25CdWlsZGVyQXBwL3NyY1xcYXBwXFxjb25kaXRpb24tdmlld1xcY29uZGl0aW9uLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbmRpdGlvbi12aWV3L2NvbmRpdGlvbi12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FESUE7RUFDSSxZQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtBQ0RKOztBRE1JO0VBQ0kseUJBQUE7QUNIUjs7QURFSTtFQUNJLHlCQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9jb25kaXRpb24tdmlldy9jb25kaXRpb24tdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYm9yZGVyIHRhYmxlLCB0ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3JkZXItc3BhY2luZzogMHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbnRkIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLm5vYm9yZGVyIHRhYmxlLCB0ZCB7XHJcbiAgICBib3JkZXI6IDBweCBkb3R0ZWQ7XHJcbiAgICBcclxufVxyXG5cclxuQG1peGluIGJveEZpbGxUaGVtZU1peGluICgkbmFtZSwgJGNvbG9yKXtcclxuICAgIC4jeyRuYW1lfXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRjb2xvciwgMTAlKTtcclxuICAgIH1cclxufVxyXG5cclxuQGluY2x1ZGUgYm94RmlsbFRoZW1lTWl4aW4odGhlbWUtb2RkLCBsaWdodGJsdWUpO1xyXG5AaW5jbHVkZSBib3hGaWxsVGhlbWVNaXhpbih0aGVtZS1ldmVuLCBwaW5rKTsiLCIuYm9yZGVyIHRhYmxlLCB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMHB4O1xufVxuXG50ZCB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLm5vYm9yZGVyIHRhYmxlLCB0ZCB7XG4gIGJvcmRlcjogMHB4IGRvdHRlZDtcbn1cblxuLnRoZW1lLW9kZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGViZjI7XG59XG5cbi50aGVtZS1ldmVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjNmNTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/condition-view/condition-view.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/condition-view/condition-view.component.ts ***!
    \************************************************************/

  /*! exports provided: ConditionViewComponent */

  /***/
  function srcAppConditionViewConditionViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConditionViewComponent", function () {
      return ConditionViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ConditionViewComponent = /*#__PURE__*/function () {
      function ConditionViewComponent() {
        _classCallCheck(this, ConditionViewComponent);
      }

      _createClass(ConditionViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConditionViewComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ConditionViewComponent.prototype, "condition", void 0);
    ConditionViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-condition-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./condition-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/condition-view/condition-view.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./condition-view.component.scss */
      "./src/app/condition-view/condition-view.component.scss"))["default"]]
    })], ConditionViewComponent);
    /***/
  },

  /***/
  "./src/app/conditional-routing.service.ts":
  /*!************************************************!*\
    !*** ./src/app/conditional-routing.service.ts ***!
    \************************************************/

  /*! exports provided: ConditionalRoutingService */

  /***/
  function srcAppConditionalRoutingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConditionalRoutingService", function () {
      return ConditionalRoutingService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ConditionalRoutingService = /*#__PURE__*/function () {
      function ConditionalRoutingService(http) {
        _classCallCheck(this, ConditionalRoutingService);

        this.http = http;
        this.urlGetConditionObjectList = 'api/conditionObjectList';
        this.urlGetConditionOperatorList = 'api/conditionOperatorList';
        this.urlGetConditionValueList = 'api/conditionValueList';
        this.urlGetConditionJoinList = 'api/conditionJoinList';
        this.urlGetConditionActionList = 'api/conditionActionList';
        this.urlGetConditionResultList = 'api/conditionResultList';
      }

      _createClass(ConditionalRoutingService, [{
        key: "getConditionObjects",
        value: function getConditionObjects() {
          return this.http.get(this.urlGetConditionObjectList);
        }
      }, {
        key: "getConditionOperators",
        value: function getConditionOperators() {
          return this.http.get(this.urlGetConditionOperatorList);
        }
      }, {
        key: "getConditionValues",
        value: function getConditionValues() {
          return this.http.get(this.urlGetConditionValueList);
        }
      }, {
        key: "getConditionJoins",
        value: function getConditionJoins() {
          return this.http.get(this.urlGetConditionJoinList);
        }
      }, {
        key: "getConditionActions",
        value: function getConditionActions() {
          return this.http.get(this.urlGetConditionActionList);
        }
      }, {
        key: "getConditionResults",
        value: function getConditionResults() {
          return this.http.get(this.urlGetConditionResultList);
        }
      }]);

      return ConditionalRoutingService;
    }();

    ConditionalRoutingService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ConditionalRoutingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ConditionalRoutingService);
    /***/
  },

  /***/
  "./src/app/create-condition/condition-selection/condition-selection.component.css":
  /*!****************************************************************************************!*\
    !*** ./src/app/create-condition/condition-selection/condition-selection.component.css ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCreateConditionConditionSelectionConditionSelectionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1jb25kaXRpb24vY29uZGl0aW9uLXNlbGVjdGlvbi9jb25kaXRpb24tc2VsZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/create-condition/condition-selection/condition-selection.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/create-condition/condition-selection/condition-selection.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: ConditionSelectionComponent */

  /***/
  function srcAppCreateConditionConditionSelectionConditionSelectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConditionSelectionComponent", function () {
      return ConditionSelectionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _conditional_routing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../conditional-routing.service */
    "./src/app/conditional-routing.service.ts");

    var ConditionSelectionComponent = /*#__PURE__*/function () {
      function ConditionSelectionComponent(conditionalRoutingService, hostElement) {
        _classCallCheck(this, ConditionSelectionComponent);

        this.conditionalRoutingService = conditionalRoutingService;
        this.hostElement = hostElement;
        this.conditionObjectList$ = this.conditionalRoutingService.getConditionObjects();
        this.conditionOperatorList$ = this.conditionalRoutingService.getConditionOperators();
        this.conditionValueList$ = this.conditionalRoutingService.getConditionValues();
        this.conditionJoinList$ = this.conditionalRoutingService.getConditionJoins();
        this.conditionActionList$ = this.conditionalRoutingService.getConditionActions();
        this.conditionResultList$ = this.conditionalRoutingService.getConditionResults();
        this.showActionAndResult = true;
        console.log("dee ele ref - " + this.hostElement.nativeElement.outerHTML);
      }

      _createClass(ConditionSelectionComponent, [{
        key: "onChangeObject",
        value: function onChangeObject(value) {
          console.log(value);
          console.log(this.subCondition);
          this.subCondition.conditionObject = value;
        }
      }, {
        key: "onChangeOperator",
        value: function onChangeOperator(value) {
          this.subCondition.conditionOperator = value;
        }
      }, {
        key: "onChangeValue",
        value: function onChangeValue(value) {
          this.subCondition.conditionValue = value;
        }
      }, {
        key: "onChangeJoin",
        value: function onChangeJoin(value) {
          if (value != 'None') {
            this.showActionAndResult = false;
          } else {
            this.showActionAndResult = true;
          }
        }
      }, {
        key: "onChangeAction",
        value: function onChangeAction(value) {
          this.condition.conditionAction = value;
        }
      }, {
        key: "onChangeResult",
        value: function onChangeResult(value) {
          this.condition.conditionResult = value;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.condition = this.data.condition;
          this.subCondition = this.data.subCondition;
        }
      }]);

      return ConditionSelectionComponent;
    }();

    ConditionSelectionComponent.ctorParameters = function () {
      return [{
        type: _conditional_routing_service__WEBPACK_IMPORTED_MODULE_2__["ConditionalRoutingService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ConditionSelectionComponent.prototype, "data", void 0);
    ConditionSelectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: '[condition-selection]',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./condition-selection.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/create-condition/condition-selection/condition-selection.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./condition-selection.component.css */
      "./src/app/create-condition/condition-selection/condition-selection.component.css"))["default"]]
    })], ConditionSelectionComponent);
    /***/
  },

  /***/
  "./src/app/create-condition/create-condition.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/create-condition/create-condition.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCreateConditionCreateConditionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".border table, td {\n  border: 1px solid black;\n  border-collapse: collapse;\n  border-spacing: 0px;\n}\n\ntd {\n  padding: 5px;\n}\n\n.noborder table, td {\n  border: 0px dotted;\n}\n\n.theme-odd {\n  background-color: #d4ebf2;\n}\n\n.theme-even {\n  background-color: #fff3f5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWNvbmRpdGlvbi9DOlxcQW5ndWxhciBXb3Jrc3BhY2VcXENvbmRpdGlvbkJ1aWxkZXJBcHAvc3JjXFxhcHBcXGNyZWF0ZS1jb25kaXRpb25cXGNyZWF0ZS1jb25kaXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NyZWF0ZS1jb25kaXRpb24vY3JlYXRlLWNvbmRpdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0FKOztBRElBO0VBQ0ksWUFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7QUNESjs7QURNSTtFQUNJLHlCQUFBO0FDSFI7O0FERUk7RUFDSSx5QkFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLWNvbmRpdGlvbi9jcmVhdGUtY29uZGl0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5ib3JkZXIgdGFibGUsIHRkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICBcclxufVxyXG5cclxudGQge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ubm9ib3JkZXIgdGFibGUsIHRkIHtcclxuICAgIGJvcmRlcjogMHB4IGRvdHRlZDtcclxuICAgIFxyXG59XHJcblxyXG5AbWl4aW4gYm94RmlsbFRoZW1lTWl4aW4gKCRuYW1lLCAkY29sb3Ipe1xyXG4gICAgLiN7JG5hbWV9e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGNvbG9yLCAxMCUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBib3hGaWxsVGhlbWVNaXhpbih0aGVtZS1vZGQsIGxpZ2h0Ymx1ZSk7XHJcbkBpbmNsdWRlIGJveEZpbGxUaGVtZU1peGluKHRoZW1lLWV2ZW4sIHBpbmspOyIsIi5ib3JkZXIgdGFibGUsIHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwcHg7XG59XG5cbnRkIHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ubm9ib3JkZXIgdGFibGUsIHRkIHtcbiAgYm9yZGVyOiAwcHggZG90dGVkO1xufVxuXG4udGhlbWUtb2RkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZWJmMjtcbn1cblxuLnRoZW1lLWV2ZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmM2Y1O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/create-condition/create-condition.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/create-condition/create-condition.component.ts ***!
    \****************************************************************/

  /*! exports provided: CreateConditionComponent */

  /***/
  function srcAppCreateConditionCreateConditionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateConditionComponent", function () {
      return CreateConditionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _conditional_routing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../conditional-routing.service */
    "./src/app/conditional-routing.service.ts");
    /* harmony import */


    var _model_Condition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../model/Condition */
    "./src/app/model/Condition.ts");
    /* harmony import */


    var src_app_ad_component_host_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/ad-component-host.directive */
    "./src/app/ad-component-host.directive.ts");

    var CreateConditionComponent = /*#__PURE__*/function () {
      /*
        onPrintHello(): void {
          this.printCounter.push(new Condition());
        }*/
      function CreateConditionComponent(componentFactoryResolver, conditionalRoutingService) {
        _classCallCheck(this, CreateConditionComponent);

        this.componentFactoryResolver = componentFactoryResolver;
        this.conditionalRoutingService = conditionalRoutingService;
        this.conditionObjectList$ = this.conditionalRoutingService.getConditionObjects();
        this.conditionOperatorList$ = this.conditionalRoutingService.getConditionOperators();
        this.conditionValueList$ = this.conditionalRoutingService.getConditionValues();
        this.conditionJoinList$ = this.conditionalRoutingService.getConditionJoins();
        this.conditionActionList$ = this.conditionalRoutingService.getConditionActions();
        this.conditionResultList$ = this.conditionalRoutingService.getConditionResults();
        this.condition = new _model_Condition__WEBPACK_IMPORTED_MODULE_3__["Condition"](); //subConditionList: Array<Array<SubCondition>> = this.condition.subConditionList;

        this.showActionAndResult = true;
        this.printCounter = new Array();
      }
      /*
        getSubConditionList(): SubCondition[] {
          return this.subConditionList = this.condition.subConditionList;
        }*/


      _createClass(CreateConditionComponent, [{
        key: "addOuterGroup",
        value: function addOuterGroup(event) {
          this.condition.addOuterGroup();
        }
      }, {
        key: "onAddGroup",
        value: function onAddGroup(event, parentBox) {
          var box = new _model_Condition__WEBPACK_IMPORTED_MODULE_3__["SubConditionLeafBox"]();
          var newSubCondition = new _model_Condition__WEBPACK_IMPORTED_MODULE_3__["SubCondition"]();
          box.addSubCondition(newSubCondition);
          this.condition.addNewBox(parentBox, box);
        }
      }, {
        key: "onAddRowInGroup",
        value: function onAddRowInGroup(event, subConditionBox) {
          var subCondition = new _model_Condition__WEBPACK_IMPORTED_MODULE_3__["SubCondition"]();
          console.log(subConditionBox.id);
          this.condition.addSubCondition(subCondition, subConditionBox);
        }
      }, {
        key: "onRemoveRow",
        value: function onRemoveRow(event, subConditionBox, subCondition) {
          console.log('trying to remove - ' + subCondition.id);
          this.condition.removeSubCondition(subConditionBox, subCondition);
        }
      }, {
        key: "saveCondition",
        value: function saveCondition(event, condition) {
          var storage = localStorage;
          alert(JSON.stringify(condition));
          storage.setItem(condition.id, JSON.stringify(condition));
        }
      }, {
        key: "onChangeObject",
        value: function onChangeObject(value, subCondition) {
          console.log(value);
          console.log(subCondition); //this.selectedSubCondition = subConditionOption;
          //selectedSubCondition.conditionObject = value;

          subCondition.conditionObject = value;
        }
      }, {
        key: "onChangeOperator",
        value: function onChangeOperator(value, subCondition) {
          subCondition.conditionOperator = value;
        }
      }, {
        key: "onChangeValue",
        value: function onChangeValue(value, subCondition) {
          subCondition.conditionValue = value;
        }
      }, {
        key: "onChangeJoin",
        value: function onChangeJoin(value, subCondition) {//subCondition.conditionValue = value;
        }
      }, {
        key: "onChangeAction",
        value: function onChangeAction(value) {
          this.condition.conditionAction = value;
        }
      }, {
        key: "onChangeResult",
        value: function onChangeResult(value) {
          this.condition.conditionResult = value;
        }
      }, {
        key: "onClickJoin",
        value: function onClickJoin(box, value) {
          box.setJoin(value);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          /*
          //adding one condition-selection row on page load
          let newSubCondition11: SubCondition = new SubCondition();
          let newSubCondition12: SubCondition = new SubCondition();
          let sclb: SubConditionLeafBox = new SubConditionLeafBox();
          sclb.addSubCondition(newSubCondition11);
          //sclb.addSubCondition(newSubCondition12);
          this.condition.masterBox = sclb;
          */

          /*
              let newSubCondition21: SubCondition = new SubCondition();
              let sclb2: SubConditionLeafBox = new SubConditionLeafBox();
              sclb2.addSubCondition(newSubCondition21);
              this.condition.masterBox.addChildBox(sclb2);
            */
        }
      }]);

      return CreateConditionComponent;
    }();

    CreateConditionComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }, {
        type: _conditional_routing_service__WEBPACK_IMPORTED_MODULE_2__["ConditionalRoutingService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_ad_component_host_directive__WEBPACK_IMPORTED_MODULE_4__["AdComponentHostDirective"], {
      "static": true
    })], CreateConditionComponent.prototype, "adComponentHostDirective", void 0);
    CreateConditionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-condition',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-condition.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/create-condition/create-condition.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-condition.component.scss */
      "./src/app/create-condition/create-condition.component.scss"))["default"]]
    })], CreateConditionComponent);
    /***/
  },

  /***/
  "./src/app/in-memory-data.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/in-memory-data.service.ts ***!
    \*******************************************/

  /*! exports provided: InMemoryDataService */

  /***/
  function srcAppInMemoryDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function () {
      return InMemoryDataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var InMemoryDataService = /*#__PURE__*/function () {
      function InMemoryDataService() {
        _classCallCheck(this, InMemoryDataService);
      }

      _createClass(InMemoryDataService, [{
        key: "createDb",
        value: function createDb() {
          var conditionObjectList = [{
            name: "Questionnaire Level Tasks"
          }, {
            name: "Answer Level Tasks"
          }, {
            name: "Role"
          }, {
            name: "Group"
          }, {
            name: "Rep Attribute"
          }, {
            name: "Group Attribute"
          }, {
            name: "Contact Attribute"
          }, {
            name: "Organization Attribute"
          }, {
            name: "GGC Amount"
          }, {
            name: "GGC Category"
          }, {
            name: "Submitter"
          }, {
            name: "Date of Event"
          }];
          var conditionOperatorList = ["Equals To", "Not Equals To", "Contains"];
          var conditionValueList = ["Value1", "Value2", "Value3"];
          var conditionJoinList = ["None", "AND", "OR"];
          var conditionActionList = ["Route to Stage", "Change Flag"];
          var conditionResultList = ["Result1", "Result2", "Result3"];
          return {
            conditionObjectList: conditionObjectList,
            conditionOperatorList: conditionOperatorList,
            conditionValueList: conditionValueList,
            conditionJoinList: conditionJoinList,
            conditionActionList: conditionActionList,
            conditionResultList: conditionResultList
          };
        }
      }]);

      return InMemoryDataService;
    }();

    InMemoryDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], InMemoryDataService);
    /***/
  },

  /***/
  "./src/app/model/Condition.ts":
  /*!************************************!*\
    !*** ./src/app/model/Condition.ts ***!
    \************************************/

  /*! exports provided: Condition, SubConditionBox, SubConditionGroupBox, SubConditionLeafBox, SubCondition */

  /***/
  function srcAppModelConditionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Condition", function () {
      return Condition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubConditionBox", function () {
      return SubConditionBox;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubConditionGroupBox", function () {
      return SubConditionGroupBox;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubConditionLeafBox", function () {
      return SubConditionLeafBox;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubCondition", function () {
      return SubCondition;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Condition = /*#__PURE__*/function () {
      function Condition() {
        _classCallCheck(this, Condition);

        this.masterBox = new SubConditionGroupBox();
        this.id = 'Con:' + IdGenerator.getNewId(); //initialize condition

        var sc = new SubCondition();
        var leafBox = new SubConditionLeafBox();
        leafBox.addSubCondition(sc);
        this.masterBox.addChildBox(leafBox);
      }

      _createClass(Condition, [{
        key: "getBoxes",
        value: function getBoxes() {
          return this.masterBox.getBoxes();
        }
      }, {
        key: "addOuterGroup",
        value: function addOuterGroup() {
          var newMasterBox = this.buildNewGroupBoxWithoutLeafBox();
          var newSubBox = this.buildNewGroupBoxWithLeafBox();
          newMasterBox.addChildBox(this.masterBox);
          newMasterBox.addChildBox(newSubBox);
          this.masterBox = newMasterBox;
        }
      }, {
        key: "addSubCondition",
        value: function addSubCondition(sc, box) {
          box.addSubCondition(sc);
        }
      }, {
        key: "removeSubCondition",
        value: function removeSubCondition(box, subCondition) {
          //let leafBox = <SubConditionLeafBox>this.findBox(box.id, this.masterBox);
          box.removeSubCondition(subCondition);
          this.removeBoxIfEmpty(box);
        }
      }, {
        key: "addNewBox",
        value: function addNewBox(parentBox, box) {
          console.log('adding child ' + box.id + ' to parent ' + parentBox.id);
          parentBox.addChildBox(box);
        }
      }, {
        key: "buildNewGroupBoxWithLeafBox",
        value: function buildNewGroupBoxWithLeafBox() {
          var groupBox = new SubConditionGroupBox(); //group box must have aleast one leaf box

          groupBox.addChildBox(this.buildNewLeafBox());
          return groupBox;
        }
      }, {
        key: "buildNewGroupBoxWithoutLeafBox",
        value: function buildNewGroupBoxWithoutLeafBox() {
          var groupBox = new SubConditionGroupBox();
          return groupBox;
        }
      }, {
        key: "buildNewLeafBox",
        value: function buildNewLeafBox() {
          var leafBox = new SubConditionLeafBox(); //leaf box must have atleast one subcondition

          var sc = new SubCondition();
          leafBox.addSubCondition(sc);
          return leafBox;
        }
      }, {
        key: "removeBoxIfEmpty",
        value: function removeBoxIfEmpty(box) {
          var parent = box.parent;
          console.log('box - ' + box.id + ' || parent - ' + parent.id); //if there is no sub conditions in this box, remove this box

          if (box.isLeafBox()) {
            if (box.getSubConditions().length == 0) {
              console.log('removing child from parent - ' + parent.id);
              parent.removeChildBox(box);
            }
          } else {
            if (box.getBoxes().length == 0) {
              console.log('removing child from parent - ' + parent.id);
              parent.removeChildBox(box);
            }
          }

          this.removeBoxIfEmpty(parent);
        }
      }, {
        key: "findBox",
        value: function findBox(findId, inBox) {
          console.log('looking [ ' + findId + ' ] into box - ' + inBox.id);

          if (inBox.isLeafBox()) {
            if (findId === inBox.id) {
              console.log('found and returing leaf box...');
              return inBox;
            }
          } else {
            //for(var i = 0; i < inBox.getBoxes().length; i++ ){
            var _iterator = _createForOfIteratorHelper(inBox.getBoxes()),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var box = _step.value;

                //let box = inBox.getBoxes()[i];
                if (findId === box.id) {
                  console.log('found and returing group box...');
                  return box;
                }

                console.log('calling myself again for box - ' + box.id);
                this.findBox(findId, box);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }

          console.log('not able to find box - ' + findId + '. In parent box -' + inBox.id);
        }
      }]);

      return Condition;
    }();

    var SubConditionBox = /*#__PURE__*/function () {
      function SubConditionBox() {
        _classCallCheck(this, SubConditionBox);

        var id = IdGenerator.getNewId();
        this.id = 'Box:' + id;
        this.displayId = '' + id;
        this.depth = 0;
      }

      _createClass(SubConditionBox, [{
        key: "isLeafBox",
        value: function isLeafBox() {
          return false;
        }
      }, {
        key: "setJoin",
        value: function setJoin(value) {
          console.log('for box [' + this.id + '] setting join to - ' + value);
          this.join = value;
        }
      }, {
        key: "cascadeChanges",
        value: function cascadeChanges(box) {
          var _iterator2 = _createForOfIteratorHelper(box.getBoxes()),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var childBox = _step2.value;
              childBox.depth = box.depth + 1;
              this.cascadeChanges(childBox);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }]);

      return SubConditionBox;
    }();

    var SubConditionGroupBox = /*#__PURE__*/function (_SubConditionBox) {
      _inherits(SubConditionGroupBox, _SubConditionBox);

      var _super = _createSuper(SubConditionGroupBox);

      function SubConditionGroupBox() {
        var _this;

        _classCallCheck(this, SubConditionGroupBox);

        _this = _super.call(this);
        _this.boxList = new Array();
        _this.id = _this.id + '-GB';
        return _this;
      }

      _createClass(SubConditionGroupBox, [{
        key: "getBoxes",
        value: function getBoxes() {
          //console.log('G.getBoxes() called.Id-' + this.id + ' Len - ' + this.boxList.length);
          return this.boxList;
        }
      }, {
        key: "addChildBox",
        value: function addChildBox(scgb) {
          this.boxList.push(scgb);
          scgb.parent = this;
          this.cascadeChanges(this);
        }
      }, {
        key: "removeChildBox",
        value: function removeChildBox(scgb) {
          for (var i = 0; i < this.boxList.length; i++) {
            if (scgb.id === this.boxList[i].id) {
              this.boxList.splice(i, 1);
            }
          }
        }
      }, {
        key: "getChildrenCount",
        value: function getChildrenCount() {
          return this.getBoxes().length;
        }
      }]);

      return SubConditionGroupBox;
    }(SubConditionBox);

    var SubConditionLeafBox = /*#__PURE__*/function (_SubConditionBox2) {
      _inherits(SubConditionLeafBox, _SubConditionBox2);

      var _super2 = _createSuper(SubConditionLeafBox);

      function SubConditionLeafBox() {
        var _this2;

        _classCallCheck(this, SubConditionLeafBox);

        _this2 = _super2.call(this);
        _this2.boxList = new Array();
        _this2.subConditionList = new Array();
        _this2.id = _this2.id + '-LB';
        return _this2;
      }

      _createClass(SubConditionLeafBox, [{
        key: "getBoxes",
        value: function getBoxes() {
          //console.log('L.getBoxes() called.Id-' + this.id + ' Len - ' + this.boxList.length);
          return this.boxList;
        }
      }, {
        key: "getSubConditions",
        value: function getSubConditions() {
          return this.subConditionList;
        }
      }, {
        key: "addChildBox",
        value: function addChildBox(scgb) {//do nothing
        }
      }, {
        key: "addSubCondition",
        value: function addSubCondition(sc) {
          this.subConditionList.push(sc);
        }
      }, {
        key: "removeChildBox",
        value: function removeChildBox(scgb) {
          for (var i = 0; i < this.boxList.length; i++) {
            if (scgb.id === this.boxList[i].id) {
              this.boxList.splice(i, 1);
            }
          }
        }
      }, {
        key: "removeSubCondition",
        value: function removeSubCondition(sc) {
          for (var i = 0; i < this.subConditionList.length; i++) {
            if (sc.id === this.subConditionList[i].id) {
              this.subConditionList.splice(i, 1);
            }
          }
        }
      }, {
        key: "getChildrenCount",
        value: function getChildrenCount() {
          return this.getSubConditions().length;
        }
      }, {
        key: "isLeafBox",
        value: function isLeafBox() {
          return true;
        }
      }]);

      return SubConditionLeafBox;
    }(SubConditionBox);

    var SubCondition = function SubCondition() {
      _classCallCheck(this, SubCondition);

      this.id = 'SC:' + IdGenerator.getNewId();
    };

    var IdGenerator = /*#__PURE__*/function () {
      function IdGenerator() {
        _classCallCheck(this, IdGenerator);
      }

      _createClass(IdGenerator, null, [{
        key: "getNewId",
        value: function getNewId() {
          this.idCounter = this.idCounter + 1;
          return this.idCounter;
        }
      }]);

      return IdGenerator;
    }();

    IdGenerator.idCounter = 0;
    /*
    import { ConditionObject } from './ConditionObject';
    
    export class Condition {
        name: String;
        conditionAction: any;
        conditionResult: any;
        subConditionList: Array<Array<SubCondition>> = new Array<Array<SubCondition>>();
    
        addSubConditionGroup(scg: Array<SubCondition>): void {
            this.subConditionList.push(scg);
        }
    
        addSubCondition(scg: Array<SubCondition>, sc: SubCondition){
            scg.push(sc);
        }
    
        removeSubCondition(sc: SubCondition){
            for(var i = 0; i < this.subConditionList.length; i++){
                for(var j = 0; j < this.subConditionList[i].length; j++){
                    if(sc.id === this.subConditionList[i][j].id){
                        this.subConditionList[i].splice(j, 1); //remove subCondition Object
                    }
                    if(this.subConditionList[i].length == 0){
                        this.subConditionList.splice(i, 1); //remove empty array
                    }
                }
            }
        }
    
    }
    
    export class SubCondition {
        id: number;
        conditionObject: any;
        conditionOperator: any;
        conditionValue: any;
    
        constructor(){
            this.id = Date.now();
        }
        
    }
    */

    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Angular Workspace\ConditionBuilderApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map