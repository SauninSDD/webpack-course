var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/*! For license information please see main.a48cdb0f0727e3082ed9.js.LICENSE.txt */
(function () {
    "use strict";
    var e, t, n, r, a = { 505: function (e, t, n) { n.d(t, { $e: function () { return A; }, Vt: function () { return N; }, WD: function () { return D; }, YI: function () { return L; }, mr: function () { return u; }, wA: function () { return O; } }); var r, a = n(294); var l = "undefined" != typeof process && "true" === (null === (r = process.env) || void 0 === r ? void 0 : r.REACT_APP_IDE_DEVMODE), o = "undefined" != typeof window && !0 === (null === window || void 0 === window ? void 0 : window.REACT_BUDDY_IDE_DEVMODE) || l, i = function (_b) {
            var e = _b.ComponentPreviews;
            return a.createElement(a.Suspense, { fallback: a.createElement("div", null, "Loading sources...") }, a.createElement(e, null));
        }, u = function (_b) {
            var e = _b.children, t = _b.ComponentPreviews, n = _b.useInitialHook, r = _b.devmode;
            var l = function (e) { return null != e ? e : o; }(r);
            return l ? n ? (function (e, t) { return function () { var n = e(); return n.loading ? a.createElement("div", null, " loading... ") : n.error ? a.createElement("div", null, "Unable to bootstrap dev mode. Probably you need to run backend or enable backend mocking mode.") : a.createElement(i, { ComponentPreviews: t }); }; })(n, t)({}) : a.createElement(i, { ComponentPreviews: t }) : a.createElement(a.Fragment, null, e);
        }; function s(e, t) { void 0 === t && (t = {}); var n = t.insertAt; if (e && "undefined" != typeof document) {
            var r = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
            a.type = "text/css", "top" === n && r.firstChild ? r.insertBefore(a, r.firstChild) : r.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e));
        } } s('.table-header {\n  border-color: #363636;\n  border-width: 1px 0;\n  border-style: solid;\n  font-weight: 800;\n  padding: 10px 20px 10px 10px;\n  display: flex;\n}\n.table-header:after {\n  content: "";\n}\n.table-header .table-header-item {\n  flex-basis: 22%;\n  color: #444;\n}\n.table-header .table-header-item-control {\n  flex-basis: 78%;\n  color: #444;\n}'); var c = function () { return a.createElement("div", { className: "table-header" }, a.createElement("div", { className: "table-header-item" }, "Property name"), a.createElement("div", { className: "table-header-item-control" }, "Edit")); }; var d; function f(e, t) { var n = {}; for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]); if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
                t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
        } return n; } !function (e) { e.Checkbox = "checkbox", e.Input = "input", e.Radio = "radio", e.Select = "select", e.Textarea = "textarea", e.JsonEditor = "jsonEditor"; }(d || (d = {})); var p = function (e) { var t = e.value, n = f(e, ["value"]); return a.createElement("input", Object.assign({}, n, { value: null != t ? t : "", type: "text" })); }, h = function (e) { var t = e.checked, n = e.className, r = f(e, ["checked", "className"]); return a.createElement("div", { className: n }, a.createElement("input", Object.assign({}, r, { checked: null != t && t, type: "checkbox" }))); }, m = function (e) { var t = e.optionsData, n = f(e, ["optionsData"]); return a.createElement("select", Object.assign({}, n), null == t ? void 0 : t.map((function (e) { return a.createElement("option", { value: e, key: e }, e); }))); }; s(".radio-control {\n  display: flex;\n  align-items: center;\n  margin-right: 15px;\n}\n.radio-control label {\n  margin-right: 5px;\n}"); var v = function (e) { var t = e.className, n = e.radioData, r = e.extValue, l = f(e, ["className", "radioData", "extValue"]); return n ? a.createElement("div", { className: t }, n.map((function (e) { return a.createElement("div", { key: e, className: "radio-control" }, a.createElement("label", { htmlFor: String(e) }, " ", e), a.createElement("input", Object.assign({}, l, { type: "radio", checked: r == e, id: String(e), value: e }))); }))) : null; }, g = function (e) { return a.createElement("textarea", Object.assign({}, e)); }; s(".json-editor {\n  flex-direction: column;\n}\n.json-editor .json-editor-textarea {\n  align-self: start;\n  width: 100%;\n  min-height: 100px;\n  margin: 0 0 10px 0;\n}\n.json-editor .json-editor-apply-button {\n  align-self: start;\n}"); var y = function (_b) {
            var e = _b.className, t = _b.propName, n = _b.propValue, r = _b.propUpdate;
            var _c = (0, a.useState)(), l = _c[0], o = _c[1], i = (0, a.useCallback)((function (e) { var t = e.currentTarget.value; o(t); }), []), u = (0, a.useMemo)((function () { return null == l; }), [l]), s = (0, a.useCallback)((function () { r(t, l), o(void 0); }), [t, l]);
            return a.createElement("div", { className: e + " json-editor" }, a.createElement(g, { className: "json-editor-textarea", onChange: i, id: t, value: null != l ? l : n }), a.createElement("button", { className: "json-editor-apply-button", disabled: u, onClick: s }, "Apply changes"));
        }, b = function (_b) {
            var e = _b.controlType, t = _b.data, n = _b.propName, r = _b.propValue, l = _b.onPropChange;
            switch (e) {
                case d.Input: return a.createElement(p, { className: "table-item-control", id: n, value: r, onChange: l });
                case d.Textarea: return a.createElement(g, { className: "table-item-control", id: n, value: r, onChange: l });
                case d.Select: return a.createElement(m, { className: "table-item-control", id: n, onChange: l, optionsData: t });
                case d.Checkbox: return a.createElement(h, { checked: r, id: n, onChange: l });
                case d.Radio: return a.createElement(v, { className: "table-item-control", extValue: r, name: n, onChange: l, radioData: t });
                case d.JsonEditor: return a.createElement(y, { className: "table-item-control", propValue: r, propName: n, propUpdate: l });
                default: return a.createElement(p, { className: "table-item-control", id: n, value: r, onChange: l });
            }
        }; s('.table-item-wrapper {\n  border-color: #363636;\n  border-width: 0 0 1px 0;\n  border-style: solid;\n  padding: 10px;\n  display: flex;\n}\n.table-item-wrapper:after {\n  content: "";\n}\n.table-item-wrapper .table-item,\n.table-item-wrapper .table-item-control {\n  display: flex;\n  align-items: center;\n  justify-content: start;\n}\n.table-item-wrapper .table-item {\n  flex-basis: 22%;\n}\n.table-item-wrapper .table-item-control {\n  flex-basis: 78%;\n}'); var w = function (_b) {
            var e = _b.propName, t = _b.propValue, n = _b.onPropChange, r = _b.controlType, l = _b.data;
            return a.createElement("div", { className: "table-item-wrapper" }, a.createElement("div", { className: "table-item" }, e), a.createElement(b, { data: l, controlType: r, propName: e, propValue: t, onPropChange: n }));
        }; s('.table-items {\n  background-color: whitesmoke;\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n}\n.table-items:after {\n  content: "";\n}'); var k = function (_b) {
            var e = _b.toolsPropsToEdit;
            var _c = Object.assign({}, e), _d = _c.props, t = _d === void 0 ? null : _d, _f = _c.initialProps, n = _f === void 0 ? null : _f, _g = _c.propsEditInfo, r = _g === void 0 ? null : _g, l = _c.updateProps;
            (0, a.useEffect)((function () { var e = {}; r && Object.entries(r).map((function (_b) {
                var _c;
                var t = _b[0], n = _b[1];
                var r = Array.isArray(n.data) ? n.data[0] : n.data;
                e = Object.assign(Object.assign({}, e), (_c = {}, _c[t] = r, _c));
            })), null == l || l(Object.assign(Object.assign({}, t), e)); }), [r]);
            var o = (0, a.useCallback)((function (e) {
                var _b;
                var _c = e.currentTarget, n = _c.value, r = _c.id, a = Object.assign(Object.assign({}, t), (_b = {}, _b[r] = n, _b));
                l(a);
            }), [t]), i = (0, a.useCallback)((function (e) {
                var _b;
                var _c = e.currentTarget, n = _c.checked, r = _c.id, a = Object.assign(Object.assign({}, t), (_b = {}, _b[r] = n, _b));
                l(a);
            }), [t]), u = (0, a.useCallback)((function (e) {
                var _b;
                var _c = e.currentTarget, n = _c.value, r = _c.id, a = Object.assign(Object.assign({}, t), (_b = {}, _b[r] = n, _b));
                l(a);
            }), [t]), s = (0, a.useCallback)((function (e) {
                var _b;
                var _c = e.currentTarget, n = _c.value, r = _c.name, a = Object.assign(Object.assign({}, t), (_b = {}, _b[r] = n, _b));
                l(a);
            }), [t]), c = (0, a.useCallback)((function (e) {
                var _b;
                var _c = e.currentTarget, n = _c.value, r = _c.id, a = Object.assign(Object.assign({}, t), (_b = {}, _b[r] = n, _b));
                l(a);
            }), [t]), f = (0, a.useCallback)((function (e, n) {
                var _b;
                var r;
                try {
                    r = JSON.parse(n);
                }
                catch (t) {
                    return void alert("Property ".concat(e, " has incorrect value to object parse"));
                }
                var a = Object.assign(Object.assign({}, t), (_b = {}, _b[e] = r, _b));
                l(a);
            }), [t]), p = (0, a.useCallback)((function (e) { switch (e) {
                case d.Input: return o;
                case d.Checkbox: return i;
                case d.Select: return u;
                case d.Radio: return s;
                case d.Textarea: return c;
                case d.JsonEditor: return f;
                default: return o;
            } }), [t]), h = (0, a.useCallback)((function () { var e = []; var l = t && Object.entries(t).filter((function (_b) {
                var e = _b[0];
                return !(null == r ? void 0 : r.hasOwnProperty(e));
            })).map((function (_b) {
                var e = _b[0], t = _b[1];
                return a.createElement(w, { key: e, propName: e, propValue: t, initialPropValue: null == n ? void 0 : n[e], onPropChange: p() });
            })); e = l ? __spreadArray(__spreadArray([], e, true), l, true) : e; var o = r && Object.entries(r).map((function (_b) {
                var e = _b[0], r = _b[1];
                return a.createElement(w, { key: e, data: r.data, controlType: r.controlType, propName: e, propValue: r.controlType === d.JsonEditor ? JSON.stringify(null == t ? void 0 : t[e], null, 2) : null == t ? void 0 : t[e], initialPropValue: null == n ? void 0 : n[e], onPropChange: p(r.controlType) });
            })); return e = o ? __spreadArray(__spreadArray([], e, true), o, true) : e, e; }), [t, r]);
            return a.createElement("div", { className: "table-items" }, h());
        }; s(".props-edit-table {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}"); var S = function (_b) {
            var e = _b.toolsPropsToEdit;
            return a.createElement("div", { className: "props-edit-table" }, a.createElement(c, null), a.createElement(k, { toolsPropsToEdit: e }));
        }; s(".tools-panel {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background-color: #eeeeee;\n}\n.tools-panel .empty-props-message {\n  color: red;\n}"); var E = function (_b) {
            var e = _b.toolsPropsToEdit;
            var _c = Object.assign({}, e), _d = _c.props, t = _d === void 0 ? null : _d, _f = _c.propsEditInfo, n = _f === void 0 ? null : _f, r = (0, a.useCallback)((function () { var r; return r = !!t && Object.keys(t).length > 0, r = r || !!n && Object.keys(n).length > 0, r ? a.createElement(S, { toolsPropsToEdit: e }) : a.createElement("div", { className: "empty-props-message" }, "This component has no properties to edit"); }), [t, n]);
            return a.createElement("div", { className: "tools-panel" }, r());
        }, x = "/REACT_BUDDY_PALETTE", C = "urlchange", _ = function (e, t) { var _b = (0, a.useState)(!1), n = _b[1], r = (0, a.useCallback)((function () { n((function (e) { return !e; })); }), []); return (0, a.useEffect)((function () { return (window.addEventListener(C, r), window.addEventListener("popstate", r), function () { window.removeEventListener(C, r), window.removeEventListener("popstate", r); }); }), []), function (e, t) {
            if (t === void 0) { t = !1; }
            var n = function () { var _b = window.location, e = _b.hash, t = _b.pathname; return e ? e.replace("#", "") : t; }(), r = new RegExp(function (e) { return encodeURI(e).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }(e)).exec(n);
            if (r) {
                var e_1 = r[0];
                return !t || n === e_1;
            }
            return !1;
        }(e, t); }; function P(e) { window.history.replaceState({}, "", e), function (e) { var t = new CustomEvent(C, { bubbles: !0, detail: e }); window.dispatchEvent(t); }(e); } s(".previews-module_previewsMain__31L3F {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.previews-module_previewsContent__1aMUf {\n  flex-basis: 100%;\n  flex-grow: 1;\n  overflow-y: auto;\n}\n\n.previews-module_previewsToolsPanel__30jjI {\n  flex-basis: 295px;\n  min-height: 100px;\n}"); var N = function (_b) {
            var e = _b.children, _c = _b.palette, t = _c === void 0 ? null : _c;
            var _d = (0, a.useState)(null), n = _d[0], r = _d[1], _f = (0, a.useState)((function () { var e; return null !== (e = window.__PROPERTIES_EDIT_PANEL_ENABLED__) && void 0 !== e && e; })), l = _f[0], o = _f[1], i = _(x), u = (0, a.useMemo)((function () { return e ? a.Children.map(e, (function (e) { return a.cloneElement(e, { setToolsPropsToEdit: r }); })) : null; }), [e]);
            return (0, a.useEffect)((function () { var e; window.enableComponentsPropsPanelEditor = function (e) { var t; null === (t = window.setPropertiesEditPanelStatus) || void 0 === t || t.call(window, e), o(e); }, window.reactBuddyHistoryPush = P, null === (e = window.cefQuery) || void 0 === e || e.call(window, { request: "event:react-toolbox-initialized" }); }), []), i ? t : a.createElement("div", { className: "previews-module_previewsMain__31L3F" }, a.createElement("div", { className: "previews-module_previewsContent__1aMUf" }, u), l && a.createElement("div", { className: "previews-module_previewsToolsPanel__30jjI" }, a.createElement(E, { toolsPropsToEdit: n })));
        }; s(".react-buddy-error-boundary-module_errorMessageContainer__1L848 {\n  width: 100%;\n  height: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n  background-color: #fff;\n}\n\n.react-buddy-error-boundary-module_errorMessageTitle__r4YnX {\n  color: #d32f2f;\n}\n\n.react-buddy-error-boundary-module_errorMessageStack__2XNRm {\n  color: #a9a9a9;\n  font-size: 0.8rem;\n  width: 100%;\n  overflow-x: scroll;\n}");
            var T = /** @class */ (function (_super) {
                __extends(T, _super);
                function T() {
                    var _this = this;
                    _this = _super.apply(this, arguments) || this, _this.state = { error: null };
                    return _this;
                }
                T.prototype.componentDidCatch = function (e) { console.error(e), this.setState({ error: e }); };
                T.prototype.componentDidUpdate = function (e, t) { null != t.error && this.setState({ error: null }); };
                T.prototype.render = function () { var e = this.state.error, _b = this.props, t = _b.componentName, n = _b.children; return null != e ? a.createElement("div", { className: "react-buddy-error-boundary-module_errorMessageContainer__1L848" }, a.createElement("h2", { className: "react-buddy-error-boundary-module_errorMessageTitle__r4YnX" }, t ? "Something went wrong while rendering ".concat(t, " component") : "Something went wrong"), a.createElement("p", null, e.message), a.createElement("pre", { className: "react-buddy-error-boundary-module_errorMessageStack__2XNRm" }, e.stack)) : n; };
                return T;
            }(a.Component)); var L = function (_b) {
            var e = _b.style, t = _b.className, n = _b.embeddable, r = _b.children;
            return n ? a.createElement(a.Fragment, null, r) : a.createElement("div", { style: e, className: t }, r);
        }, R = a.createContext({}), D = function (_b) {
            var e = _b.children, t = _b.name, n = _b.className, r = _b.style;
            return a.createElement(R.Provider, { value: { categoryClassName: n, categoryStyle: r } }, function (_b) {
                var e = _b.children, t = _b.categoryName;
                return a.Children.map(e, (function (e) { return a.cloneElement(e, { categoryName: t }); }));
            }({ children: e, categoryName: t }));
        }, z = a.createContext({}), O = function (_b) {
            var e = _b.children, t = _b.categoryName, n = _b.name, r = _b.className, l = _b.style;
            return a.createElement(z.Provider, { value: { componentClassName: r, componentStyle: l } }, function (_b) {
                var e = _b.children, t = _b.componentName, n = _b.categoryName;
                return a.Children.map(e, (function (e) { return a.cloneElement(e, { categoryName: n, componentName: t }); }));
            }({ children: e, componentName: n, categoryName: t }));
        }; function M() {
            var e = [];
            for (var _b = 0; _b < arguments.length; _b++) {
                e[_b] = arguments[_b];
            }
            var t = e.flatMap((function (e) { return e ? e.split(" ") : []; }));
            return __spreadArray([], new Set(t), true).join(" ");
        } var j = "variant-module_fullWindow__1DkCI"; s(".variant-module_fullWindow__1DkCI {\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.variant-module_variantRouteCenter__ce423 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: 100%;\n}"); var F = function (_b) {
            var e = _b.categoryName, t = _b.componentName, _c = _b.variantName, n = _c === void 0 ? "DEFAULT_VARIANT" : _c, _d = _b.previewLayout, r = _d === void 0 ? "center" : _d, l = _b.children;
            var _f = (0, a.useContext)(R), o = _f.categoryClassName, i = _f.categoryStyle, _g = (0, a.useContext)(z), u = _g.componentClassName, s = _g.componentStyle, _h = U(), c = _h.variantClassName, d = _h.variantStyle, f = (0, a.useMemo)((function () { return x + "/" + [e, t, n].filter((function (e) { return null != e; })).join("/"); }), [e, t, n]), p = _(f, !0), _j = (0, a.useState)(null), h = _j[0], m = _j[1];
            return (0, a.useLayoutEffect)((function () { return (null !== h && B(h), function () { null !== h && V(h); }); }), [h]), p ? a.createElement("div", { className: o, style: i }, a.createElement("div", { className: u, style: s, ref: m }, a.createElement("div", { className: "center" === r ? M("variant-module_variantRouteCenter__ce423", c) : c, style: d }, l))) : null;
        }, I = a.createContext({}), U = function () { return (0, a.useContext)(I); }, A = function (_b) {
            var e = _b.children, t = _b.categoryName, n = _b.componentName, r = _b.name, l = _b.previewLayout, o = _b.className, i = _b.style;
            return a.createElement(I.Provider, { value: { variantClassName: o, variantStyle: i } }, a.createElement(F, { previewLayout: l, variantName: r, categoryName: t, componentName: n }, a.createElement(T, { componentName: n }, e)));
        }; function B(e) { null !== e && e !== document && (e.className = M(j, e.className), B(e.parentElement)); } function V(e) { null !== e && e !== document && (e.classList.remove(j), V(e.parentElement)); } }, 448: function (e, t, n) { var r = n(294), a = n(840); function l(e) { for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
            t += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; } var o = new Set, i = {}; function u(e, t) { s(e, t), s(e + "Capture", t); } function s(e, t) { for (i[e] = t, e = 0; e < t.length; e++)
            o.add(t[e]); } var c = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement), d = Object.prototype.hasOwnProperty, f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, p = {}, h = {}; function m(e, t, n, r, a, l, o) { this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = o; } var v = {}; "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (e) { v[e] = new m(e, 0, !1, e, null, !1, !1); })), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function (e) { var t = e[0]; v[t] = new m(t, 1, !1, e[1], null, !1, !1); })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (e) { v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1); })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (e) { v[e] = new m(e, 2, !1, e, null, !1, !1); })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (e) { v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1); })), ["checked", "multiple", "muted", "selected"].forEach((function (e) { v[e] = new m(e, 3, !0, e, null, !1, !1); })), ["capture", "download"].forEach((function (e) { v[e] = new m(e, 4, !1, e, null, !1, !1); })), ["cols", "rows", "size", "span"].forEach((function (e) { v[e] = new m(e, 6, !1, e, null, !1, !1); })), ["rowSpan", "start"].forEach((function (e) { v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1); })); var g = /[\-:]([a-z])/g; function y(e) { return e[1].toUpperCase(); } function b(e, t, n, r) { var a = v.hasOwnProperty(t) ? v[t] : null; (null !== a ? 0 !== a.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function (e, t, n, r) { if (null == t || function (e, t, n, r) { if (null !== n && 0 === n.type)
            return !1; switch (typeof t) {
            case "function":
            case "symbol": return !0;
            case "boolean": return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
            default: return !1;
        } }(e, t, n, r))
            return !0; if (r)
            return !1; if (null !== n)
            switch (n.type) {
                case 3: return !t;
                case 4: return !1 === t;
                case 5: return isNaN(t);
                case 6: return isNaN(t) || 1 > t;
            } return !1; }(t, n, a, r) && (n = null), r || null === a ? function (e) { return !!d.call(h, e) || !d.call(p, e) && (f.test(e) ? h[e] = !0 : (p[e] = !0, !1)); }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "" : n : (t = a.attributeName, r = a.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n)))); } "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (e) { var t = e.replace(g, y); v[t] = new m(t, 1, !1, e, null, !1, !1); })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (e) { var t = e.replace(g, y); v[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1); })), ["xml:base", "xml:lang", "xml:space"].forEach((function (e) { var t = e.replace(g, y); v[t] = new m(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1); })), ["tabIndex", "crossOrigin"].forEach((function (e) { v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1); })), v.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function (e) { v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0); })); var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, k = Symbol.for("react.element"), S = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), P = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), D = Symbol.for("react.lazy"); Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode"); var z = Symbol.for("react.offscreen"); Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker"); var O = Symbol.iterator; function M(e) { return null === e || "object" != typeof e ? null : "function" == typeof (e = O && e[O] || e["@@iterator"]) ? e : null; } var j, F = Object.assign; function I(e) { if (void 0 === j)
            try {
                throw Error();
            }
            catch (e) {
                var t = e.stack.trim().match(/\n( *(at )?)/);
                j = t && t[1] || "";
            } return "\n" + j + e; } var U = !1; function A(e, t) { if (!e || U)
            return ""; U = !0; var n = Error.prepareStackTrace; Error.prepareStackTrace = void 0; try {
            if (t)
                if (t = function () { throw Error(); }, Object.defineProperty(t.prototype, "props", { set: function () { throw Error(); } }), "object" == typeof Reflect && Reflect.construct) {
                    try {
                        Reflect.construct(t, []);
                    }
                    catch (e) {
                        var r = e;
                    }
                    Reflect.construct(e, [], t);
                }
                else {
                    try {
                        t.call();
                    }
                    catch (e) {
                        r = e;
                    }
                    e.call(t.prototype);
                }
            else {
                try {
                    throw Error();
                }
                catch (e) {
                    r = e;
                }
                e();
            }
        }
        catch (t) {
            if (t && r && "string" == typeof t.stack) {
                for (var a = t.stack.split("\n"), l = r.stack.split("\n"), o = a.length - 1, i = l.length - 1; 1 <= o && 0 <= i && a[o] !== l[i];)
                    i--;
                for (; 1 <= o && 0 <= i; o--, i--)
                    if (a[o] !== l[i]) {
                        if (1 !== o || 1 !== i)
                            do {
                                if (o--, 0 > --i || a[o] !== l[i]) {
                                    var u = "\n" + a[o].replace(" at new ", " at ");
                                    return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
                                }
                            } while (1 <= o && 0 <= i);
                        break;
                    }
            }
        }
        finally {
            U = !1, Error.prepareStackTrace = n;
        } return (e = e ? e.displayName || e.name : "") ? I(e) : ""; } function B(e) { switch (e.tag) {
            case 5: return I(e.type);
            case 16: return I("Lazy");
            case 13: return I("Suspense");
            case 19: return I("SuspenseList");
            case 0:
            case 2:
            case 15: return A(e.type, !1);
            case 11: return A(e.type.render, !1);
            case 1: return A(e.type, !0);
            default: return "";
        } } function V(e) { if (null == e)
            return null; if ("function" == typeof e)
            return e.displayName || e.name || null; if ("string" == typeof e)
            return e; switch (e) {
            case E: return "Fragment";
            case S: return "Portal";
            case C: return "Profiler";
            case x: return "StrictMode";
            case T: return "Suspense";
            case L: return "SuspenseList";
        } if ("object" == typeof e)
            switch (e.$$typeof) {
                case P: return (e.displayName || "Context") + ".Consumer";
                case _: return (e._context.displayName || "Context") + ".Provider";
                case N:
                    var t = e.render;
                    return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case R: return null !== (t = e.displayName || null) ? t : V(e.type) || "Memo";
                case D:
                    t = e._payload, e = e._init;
                    try {
                        return V(e(t));
                    }
                    catch (e) { }
            } return null; } function $(e) { var t = e.type; switch (e.tag) {
            case 24: return "Cache";
            case 9: return (t.displayName || "Context") + ".Consumer";
            case 10: return (t._context.displayName || "Context") + ".Provider";
            case 18: return "DehydratedFragment";
            case 11: return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
            case 7: return "Fragment";
            case 5: return t;
            case 4: return "Portal";
            case 3: return "Root";
            case 6: return "Text";
            case 16: return V(t);
            case 8: return t === x ? "StrictMode" : "Mode";
            case 22: return "Offscreen";
            case 12: return "Profiler";
            case 21: return "Scope";
            case 13: return "Suspense";
            case 19: return "SuspenseList";
            case 25: return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if ("function" == typeof t)
                    return t.displayName || t.name || null;
                if ("string" == typeof t)
                    return t;
        } return null; } function H(e) { switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object": return e;
            default: return "";
        } } function W(e) { var t = e.type; return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t); } function Q(e) { e._valueTracker || (e._valueTracker = function (e) { var t = W(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t]; if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
            var a = n.get, l = n.set;
            return Object.defineProperty(e, t, { configurable: !0, get: function () { return a.call(this); }, set: function (e) { r = "" + e, l.call(this, e); } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function () { return r; }, setValue: function (e) { r = "" + e; }, stopTracking: function () { e._valueTracker = null, delete e[t]; } };
        } }(e)); } function q(e) { if (!e)
            return !1; var t = e._valueTracker; if (!t)
            return !0; var n = t.getValue(), r = ""; return e && (r = W(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0); } function Y(e) { if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0)))
            return null; try {
            return e.activeElement || e.body;
        }
        catch (t) {
            return e.body;
        } } function K(e, t) { var n = t.checked; return F({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != n ? n : e._wrapperState.initialChecked }); } function X(e, t) { var n = null == t.defaultValue ? "" : t.defaultValue, r = null != t.checked ? t.checked : t.defaultChecked; n = H(null != t.value ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value }; } function J(e, t) { null != (t = t.checked) && b(e, "checked", t, !1); } function G(e, t) { J(e, t); var n = H(t.value), r = t.type; if (null != n)
            "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value"); t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, H(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked); } function Z(e, t, n) { if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value))
                return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
        } "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n); } function ee(e, t, n) { "number" === t && Y(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n)); } var te = Array.isArray; function ne(e, t, n, r) { if (e = e.options, t) {
            t = {};
            for (var a = 0; a < n.length; a++)
                t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
                a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
        }
        else {
            for (n = "" + H(n), t = null, a = 0; a < e.length; a++) {
                if (e[a].value === n)
                    return e[a].selected = !0, void (r && (e[a].defaultSelected = !0));
                null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
        } } function re(e, t) { if (null != t.dangerouslySetInnerHTML)
            throw Error(l(91)); return F({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }); } function ae(e, t) { var n = t.value; if (null == n) {
            if (n = t.children, t = t.defaultValue, null != n) {
                if (null != t)
                    throw Error(l(92));
                if (te(n)) {
                    if (1 < n.length)
                        throw Error(l(93));
                    n = n[0];
                }
                t = n;
            }
            null == t && (t = ""), n = t;
        } e._wrapperState = { initialValue: H(n) }; } function le(e, t) { var n = H(t.value), r = H(t.defaultValue); null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r); } function oe(e) { var t = e.textContent; t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t); } function ie(e) { switch (e) {
            case "svg": return "http://www.w3.org/2000/svg";
            case "math": return "http://www.w3.org/1998/Math/MathML";
            default: return "http://www.w3.org/1999/xhtml";
        } } function ue(e, t) { return null == e || "http://www.w3.org/1999/xhtml" === e ? ie(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e; } var se, ce, de = (ce = function (e, t) { if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e)
            e.innerHTML = t;
        else {
            for ((se = se || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = se.firstChild; e.firstChild;)
                e.removeChild(e.firstChild);
            for (; t.firstChild;)
                e.appendChild(t.firstChild);
        } }, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function (e, t, n, r) { MSApp.execUnsafeLocalFunction((function () { return ce(e, t); })); } : ce); function fe(e, t) { if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
                return void (n.nodeValue = t);
        } e.textContent = t; } var pe = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, he = ["Webkit", "ms", "Moz", "O"]; function me(e, t, n) { return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || pe.hasOwnProperty(e) && pe[e] ? ("" + t).trim() : t + "px"; } function ve(e, t) { for (var n in e = e.style, t)
            if (t.hasOwnProperty(n)) {
                var r = 0 === n.indexOf("--"), a = me(n, t[n], r);
                "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
            } } Object.keys(pe).forEach((function (e) { he.forEach((function (t) { t = t + e.charAt(0).toUpperCase() + e.substring(1), pe[t] = pe[e]; })); })); var ge = F({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }); function ye(e, t) { if (t) {
            if (ge[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
                throw Error(l(137, e));
            if (null != t.dangerouslySetInnerHTML) {
                if (null != t.children)
                    throw Error(l(60));
                if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML))
                    throw Error(l(61));
            }
            if (null != t.style && "object" != typeof t.style)
                throw Error(l(62));
        } } function be(e, t) { if (-1 === e.indexOf("-"))
            return "string" == typeof t.is; switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph": return !1;
            default: return !0;
        } } var we = null; function ke(e) { return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e; } var Se = null, Ee = null, xe = null; function Ce(e) { if (e = ba(e)) {
            if ("function" != typeof Se)
                throw Error(l(280));
            var t = e.stateNode;
            t && (t = ka(t), Se(e.stateNode, e.type, t));
        } } function _e(e) { Ee ? xe ? xe.push(e) : xe = [e] : Ee = e; } function Pe() { if (Ee) {
            var e = Ee, t = xe;
            if (xe = Ee = null, Ce(e), t)
                for (e = 0; e < t.length; e++)
                    Ce(t[e]);
        } } function Ne(e, t) { return e(t); } function Te() { } var Le = !1; function Re(e, t, n) { if (Le)
            return e(t, n); Le = !0; try {
            return Ne(e, t, n);
        }
        finally {
            Le = !1, (null !== Ee || null !== xe) && (Te(), Pe());
        } } function De(e, t) { var n = e.stateNode; if (null === n)
            return null; var r = ka(n); if (null === r)
            return null; n = r[t]; e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                break e;
            default: e = !1;
        } if (e)
            return null; if (n && "function" != typeof n)
            throw Error(l(231, t, typeof n)); return n; } var ze = !1; if (c)
            try {
                var Oe = {};
                Object.defineProperty(Oe, "passive", { get: function () { ze = !0; } }), window.addEventListener("test", Oe, Oe), window.removeEventListener("test", Oe, Oe);
            }
            catch (ce) {
                ze = !1;
            } function Me(e, t, n, r, a, l, o, i, u) { var s = Array.prototype.slice.call(arguments, 3); try {
            t.apply(n, s);
        }
        catch (e) {
            this.onError(e);
        } } var je = !1, Fe = null, Ie = !1, Ue = null, Ae = { onError: function (e) { je = !0, Fe = e; } }; function Be(e, t, n, r, a, l, o, i, u) { je = !1, Fe = null, Me.apply(Ae, arguments); } function Ve(e) { var t = e, n = e; if (e.alternate)
            for (; t.return;)
                t = t.return;
        else {
            e = t;
            do {
                0 != (4098 & (t = e).flags) && (n = t.return), e = t.return;
            } while (e);
        } return 3 === t.tag ? n : null; } function $e(e) { if (13 === e.tag) {
            var t = e.memoizedState;
            if (null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)
                return t.dehydrated;
        } return null; } function He(e) { if (Ve(e) !== e)
            throw Error(l(188)); } function We(e) { return null !== (e = function (e) { var t = e.alternate; if (!t) {
            if (null === (t = Ve(e)))
                throw Error(l(188));
            return t !== e ? null : e;
        } for (var n = e, r = t;;) {
            var a = n.return;
            if (null === a)
                break;
            var o = a.alternate;
            if (null === o) {
                if (null !== (r = a.return)) {
                    n = r;
                    continue;
                }
                break;
            }
            if (a.child === o.child) {
                for (o = a.child; o;) {
                    if (o === n)
                        return He(a), e;
                    if (o === r)
                        return He(a), t;
                    o = o.sibling;
                }
                throw Error(l(188));
            }
            if (n.return !== r.return)
                n = a, r = o;
            else {
                for (var i = !1, u = a.child; u;) {
                    if (u === n) {
                        i = !0, n = a, r = o;
                        break;
                    }
                    if (u === r) {
                        i = !0, r = a, n = o;
                        break;
                    }
                    u = u.sibling;
                }
                if (!i) {
                    for (u = o.child; u;) {
                        if (u === n) {
                            i = !0, n = o, r = a;
                            break;
                        }
                        if (u === r) {
                            i = !0, r = o, n = a;
                            break;
                        }
                        u = u.sibling;
                    }
                    if (!i)
                        throw Error(l(189));
                }
            }
            if (n.alternate !== r)
                throw Error(l(190));
        } if (3 !== n.tag)
            throw Error(l(188)); return n.stateNode.current === n ? e : t; }(e)) ? Qe(e) : null; } function Qe(e) { if (5 === e.tag || 6 === e.tag)
            return e; for (e = e.child; null !== e;) {
            var t = Qe(e);
            if (null !== t)
                return t;
            e = e.sibling;
        } return null; } var qe = a.unstable_scheduleCallback, Ye = a.unstable_cancelCallback, Ke = a.unstable_shouldYield, Xe = a.unstable_requestPaint, Je = a.unstable_now, Ge = a.unstable_getCurrentPriorityLevel, Ze = a.unstable_ImmediatePriority, et = a.unstable_UserBlockingPriority, tt = a.unstable_NormalPriority, nt = a.unstable_LowPriority, rt = a.unstable_IdlePriority, at = null, lt = null, ot = Math.clz32 ? Math.clz32 : function (e) { return 0 === (e >>>= 0) ? 32 : 31 - (it(e) / ut | 0) | 0; }, it = Math.log, ut = Math.LN2, st = 64, ct = 4194304; function dt(e) { switch (e & -e) {
            case 1: return 1;
            case 2: return 2;
            case 4: return 4;
            case 8: return 8;
            case 16: return 16;
            case 32: return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152: return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864: return 130023424 & e;
            case 134217728: return 134217728;
            case 268435456: return 268435456;
            case 536870912: return 536870912;
            case 1073741824: return 1073741824;
            default: return e;
        } } function ft(e, t) { var n = e.pendingLanes; if (0 === n)
            return 0; var r = 0, a = e.suspendedLanes, l = e.pingedLanes, o = 268435455 & n; if (0 !== o) {
            var i = o & ~a;
            0 !== i ? r = dt(i) : 0 != (l &= o) && (r = dt(l));
        }
        else
            0 != (o = n & ~a) ? r = dt(o) : 0 !== l && (r = dt(l)); if (0 === r)
            return 0; if (0 !== t && t !== r && 0 == (t & a) && ((a = r & -r) >= (l = t & -t) || 16 === a && 0 != (4194240 & l)))
            return t; if (0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
            for (e = e.entanglements, t &= r; 0 < t;)
                a = 1 << (n = 31 - ot(t)), r |= e[n], t &= ~a; return r; } function pt(e, t) { switch (e) {
            case 1:
            case 2:
            case 4: return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152: return t + 5e3;
            default: return -1;
        } } function ht(e) { return 0 != (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0; } function mt() { var e = st; return 0 == (4194240 & (st <<= 1)) && (st = 64), e; } function vt(e) { for (var t = [], n = 0; 31 > n; n++)
            t.push(e); return t; } function gt(e, t, n) { e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - ot(t)] = n; } function yt(e, t) { var n = e.entangledLanes |= t; for (e = e.entanglements; n;) {
            var r = 31 - ot(n), a = 1 << r;
            a & t | e[r] & t && (e[r] |= t), n &= ~a;
        } } var bt = 0; function wt(e) { return 1 < (e &= -e) ? 4 < e ? 0 != (268435455 & e) ? 16 : 536870912 : 4 : 1; } var kt, St, Et, xt, Ct, _t = !1, Pt = [], Nt = null, Tt = null, Lt = null, Rt = new Map, Dt = new Map, zt = [], Ot = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" "); function Mt(e, t) { switch (e) {
            case "focusin":
            case "focusout":
                Nt = null;
                break;
            case "dragenter":
            case "dragleave":
                Tt = null;
                break;
            case "mouseover":
            case "mouseout":
                Lt = null;
                break;
            case "pointerover":
            case "pointerout":
                Rt.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture": Dt.delete(t.pointerId);
        } } function jt(e, t, n, r, a, l) { return null === e || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [a] }, null !== t && null !== (t = ba(t)) && St(t), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e); } function Ft(e) { var t = ya(e.target); if (null !== t) {
            var n = Ve(t);
            if (null !== n)
                if (13 === (t = n.tag)) {
                    if (null !== (t = $e(n)))
                        return e.blockedOn = t, void Ct(e.priority, (function () { Et(n); }));
                }
                else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
                    return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
        } e.blockedOn = null; } function It(e) { if (null !== e.blockedOn)
            return !1; for (var t = e.targetContainers; 0 < t.length;) {
            var n = Kt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
                return null !== (t = ba(n)) && St(t), e.blockedOn = n, !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            we = r, n.target.dispatchEvent(r), we = null, t.shift();
        } return !0; } function Ut(e, t, n) { It(e) && n.delete(t); } function At() { _t = !1, null !== Nt && It(Nt) && (Nt = null), null !== Tt && It(Tt) && (Tt = null), null !== Lt && It(Lt) && (Lt = null), Rt.forEach(Ut), Dt.forEach(Ut); } function Bt(e, t) { e.blockedOn === t && (e.blockedOn = null, _t || (_t = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, At))); } function Vt(e) { function t(t) { return Bt(t, e); } if (0 < Pt.length) {
            Bt(Pt[0], e);
            for (var n = 1; n < Pt.length; n++) {
                var r = Pt[n];
                r.blockedOn === e && (r.blockedOn = null);
            }
        } for (null !== Nt && Bt(Nt, e), null !== Tt && Bt(Tt, e), null !== Lt && Bt(Lt, e), Rt.forEach(t), Dt.forEach(t), n = 0; n < zt.length; n++)
            (r = zt[n]).blockedOn === e && (r.blockedOn = null); for (; 0 < zt.length && null === (n = zt[0]).blockedOn;)
            Ft(n), null === n.blockedOn && zt.shift(); } var $t = w.ReactCurrentBatchConfig, Ht = !0; function Wt(e, t, n, r) { var a = bt, l = $t.transition; $t.transition = null; try {
            bt = 1, qt(e, t, n, r);
        }
        finally {
            bt = a, $t.transition = l;
        } } function Qt(e, t, n, r) { var a = bt, l = $t.transition; $t.transition = null; try {
            bt = 4, qt(e, t, n, r);
        }
        finally {
            bt = a, $t.transition = l;
        } } function qt(e, t, n, r) { if (Ht) {
            var a = Kt(e, t, n, r);
            if (null === a)
                Hr(e, t, r, Yt, n), Mt(e, r);
            else if (function (e, t, n, r, a) { switch (t) {
                case "focusin": return Nt = jt(Nt, e, t, n, r, a), !0;
                case "dragenter": return Tt = jt(Tt, e, t, n, r, a), !0;
                case "mouseover": return Lt = jt(Lt, e, t, n, r, a), !0;
                case "pointerover":
                    var l = a.pointerId;
                    return Rt.set(l, jt(Rt.get(l) || null, e, t, n, r, a)), !0;
                case "gotpointercapture": return l = a.pointerId, Dt.set(l, jt(Dt.get(l) || null, e, t, n, r, a)), !0;
            } return !1; }(a, e, t, n, r))
                r.stopPropagation();
            else if (Mt(e, r), 4 & t && -1 < Ot.indexOf(e)) {
                for (; null !== a;) {
                    var l = ba(a);
                    if (null !== l && kt(l), null === (l = Kt(e, t, n, r)) && Hr(e, t, r, Yt, n), l === a)
                        break;
                    a = l;
                }
                null !== a && r.stopPropagation();
            }
            else
                Hr(e, t, r, null, n);
        } } var Yt = null; function Kt(e, t, n, r) { if (Yt = null, null !== (e = ya(e = ke(r))))
            if (null === (t = Ve(e)))
                e = null;
            else if (13 === (n = t.tag)) {
                if (null !== (e = $e(t)))
                    return e;
                e = null;
            }
            else if (3 === n) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return 3 === t.tag ? t.stateNode.containerInfo : null;
                e = null;
            }
            else
                t !== e && (e = null); return Yt = e, null; } function Xt(e) { switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart": return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave": return 4;
            case "message": switch (Ge()) {
                case Ze: return 1;
                case et: return 4;
                case tt:
                case nt: return 16;
                case rt: return 536870912;
                default: return 16;
            }
            default: return 16;
        } } var Jt = null, Gt = null, Zt = null; function en() { if (Zt)
            return Zt; var e, t, n = Gt, r = n.length, a = "value" in Jt ? Jt.value : Jt.textContent, l = a.length; for (e = 0; e < r && n[e] === a[e]; e++)
            ; var o = r - e; for (t = 1; t <= o && n[r - t] === a[l - t]; t++)
            ; return Zt = a.slice(e, 1 < t ? 1 - t : void 0); } function tn(e) { var t = e.keyCode; return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0; } function nn() { return !0; } function rn() { return !1; } function an(e) { function t(t, n, r, a, l) { for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = l, this.currentTarget = null, e)
            e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(a) : a[o]); return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? nn : rn, this.isPropagationStopped = rn, this; } return F(t.prototype, { preventDefault: function () { this.defaultPrevented = !0; var e = this.nativeEvent; e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn); }, stopPropagation: function () { var e = this.nativeEvent; e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn); }, persist: function () { }, isPersistent: nn }), t; } var ln, on, un, sn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, cn = an(sn), dn = F({}, sn, { view: 0, detail: 0 }), fn = an(dn), pn = F({}, dn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Cn, button: 0, buttons: 0, relatedTarget: function (e) { return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget; }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== un && (un && "mousemove" === e.type ? (ln = e.screenX - un.screenX, on = e.screenY - un.screenY) : on = ln = 0, un = e), ln); }, movementY: function (e) { return "movementY" in e ? e.movementY : on; } }), hn = an(pn), mn = an(F({}, pn, { dataTransfer: 0 })), vn = an(F({}, dn, { relatedTarget: 0 })), gn = an(F({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })), yn = F({}, sn, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData; } }), bn = an(yn), wn = an(F({}, sn, { data: 0 })), kn = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Sn = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, En = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" }; function xn(e) { var t = this.nativeEvent; return t.getModifierState ? t.getModifierState(e) : !!(e = En[e]) && !!t[e]; } function Cn() { return xn; } var _n = F({}, dn, { key: function (e) { if (e.key) {
                var t = kn[e.key] || e.key;
                if ("Unidentified" !== t)
                    return t;
            } return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Sn[e.keyCode] || "Unidentified" : ""; }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Cn, charCode: function (e) { return "keypress" === e.type ? tn(e) : 0; }, keyCode: function (e) { return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0; }, which: function (e) { return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0; } }), Pn = an(_n), Nn = an(F({}, pn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })), Tn = an(F({}, dn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Cn })), Ln = an(F({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })), Rn = F({}, pn, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0; }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 }), Dn = an(Rn), zn = [9, 13, 27, 32], On = c && "CompositionEvent" in window, Mn = null; c && "documentMode" in document && (Mn = document.documentMode); var jn = c && "TextEvent" in window && !Mn, Fn = c && (!On || Mn && 8 < Mn && 11 >= Mn), In = String.fromCharCode(32), Un = !1; function An(e, t) { switch (e) {
            case "keyup": return -1 !== zn.indexOf(t.keyCode);
            case "keydown": return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout": return !0;
            default: return !1;
        } } function Bn(e) { return "object" == typeof (e = e.detail) && "data" in e ? e.data : null; } var Vn = !1, $n = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 }; function Hn(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return "input" === t ? !!$n[e.type] : "textarea" === t; } function Wn(e, t, n, r) { _e(r), 0 < (t = Qr(t, "onChange")).length && (n = new cn("onChange", "change", null, n, r), e.push({ event: n, listeners: t })); } var Qn = null, qn = null; function Yn(e) { Ir(e, 0); } function Kn(e) { if (q(wa(e)))
            return e; } function Xn(e, t) { if ("change" === e)
            return t; } var Jn = !1; if (c) {
            var Gn;
            if (c) {
                var Zn = "oninput" in document;
                if (!Zn) {
                    var er = document.createElement("div");
                    er.setAttribute("oninput", "return;"), Zn = "function" == typeof er.oninput;
                }
                Gn = Zn;
            }
            else
                Gn = !1;
            Jn = Gn && (!document.documentMode || 9 < document.documentMode);
        } function tr() { Qn && (Qn.detachEvent("onpropertychange", nr), qn = Qn = null); } function nr(e) { if ("value" === e.propertyName && Kn(qn)) {
            var t = [];
            Wn(t, qn, e, ke(e)), Re(Yn, t);
        } } function rr(e, t, n) { "focusin" === e ? (tr(), qn = n, (Qn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr(); } function ar(e) { if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Kn(qn); } function lr(e, t) { if ("click" === e)
            return Kn(t); } function or(e, t) { if ("input" === e || "change" === e)
            return Kn(t); } var ir = "function" == typeof Object.is ? Object.is : function (e, t) { return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t; }; function ur(e, t) { if (ir(e, t))
            return !0; if ("object" != typeof e || null === e || "object" != typeof t || null === t)
            return !1; var n = Object.keys(e), r = Object.keys(t); if (n.length !== r.length)
            return !1; for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !ir(e[a], t[a]))
                return !1;
        } return !0; } function sr(e) { for (; e && e.firstChild;)
            e = e.firstChild; return e; } function cr(e, t) { var n, r = sr(e); for (e = 0; r;) {
            if (3 === r.nodeType) {
                if (n = e + r.textContent.length, e <= t && n >= t)
                    return { node: r, offset: t - e };
                e = n;
            }
            e: {
                for (; r;) {
                    if (r.nextSibling) {
                        r = r.nextSibling;
                        break e;
                    }
                    r = r.parentNode;
                }
                r = void 0;
            }
            r = sr(r);
        } } function dr(e, t) { return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? dr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))); } function fr() { for (var e = window, t = Y(); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = "string" == typeof t.contentWindow.location.href;
            }
            catch (e) {
                n = !1;
            }
            if (!n)
                break;
            t = Y((e = t.contentWindow).document);
        } return t; } function pr(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable); } function hr(e) { var t = fr(), n = e.focusedElem, r = e.selectionRange; if (t !== n && n && n.ownerDocument && dr(n.ownerDocument.documentElement, n)) {
            if (null !== r && pr(n))
                if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n)
                    n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                    e = e.getSelection();
                    var a = n.textContent.length, l = Math.min(r.start, a);
                    r = void 0 === r.end ? l : Math.min(r.end, a), !e.extend && l > r && (a = r, r = l, l = a), a = cr(n, l);
                    var o = cr(n, r);
                    a && o && (1 !== e.rangeCount || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && ((t = t.createRange()).setStart(a.node, a.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
                }
            for (t = [], e = n; e = e.parentNode;)
                1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++)
                (e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top;
        } } var mr = c && "documentMode" in document && 11 >= document.documentMode, vr = null, gr = null, yr = null, br = !1; function wr(e, t, n) { var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument; br || null == vr || vr !== Y(r) || (r = "selectionStart" in (r = vr) && pr(r) ? { start: r.selectionStart, end: r.selectionEnd } : { anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }, yr && ur(yr, r) || (yr = r, 0 < (r = Qr(gr, "onSelect")).length && (t = new cn("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = vr))); } function kr(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n; } var Sr = { animationend: kr("Animation", "AnimationEnd"), animationiteration: kr("Animation", "AnimationIteration"), animationstart: kr("Animation", "AnimationStart"), transitionend: kr("Transition", "TransitionEnd") }, Er = {}, xr = {}; function Cr(e) { if (Er[e])
            return Er[e]; if (!Sr[e])
            return e; var t, n = Sr[e]; for (t in n)
            if (n.hasOwnProperty(t) && t in xr)
                return Er[e] = n[t]; return e; } c && (xr = document.createElement("div").style, "AnimationEvent" in window || (delete Sr.animationend.animation, delete Sr.animationiteration.animation, delete Sr.animationstart.animation), "TransitionEvent" in window || delete Sr.transitionend.transition); var _r = Cr("animationend"), Pr = Cr("animationiteration"), Nr = Cr("animationstart"), Tr = Cr("transitionend"), Lr = new Map, Rr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" "); function Dr(e, t) { Lr.set(e, t), u(t, [e]); } for (var zr = 0; zr < Rr.length; zr++) {
            var Or = Rr[zr];
            Dr(Or.toLowerCase(), "on" + (Or[0].toUpperCase() + Or.slice(1)));
        } Dr(_r, "onAnimationEnd"), Dr(Pr, "onAnimationIteration"), Dr(Nr, "onAnimationStart"), Dr("dblclick", "onDoubleClick"), Dr("focusin", "onFocus"), Dr("focusout", "onBlur"), Dr(Tr, "onTransitionEnd"), s("onMouseEnter", ["mouseout", "mouseover"]), s("onMouseLeave", ["mouseout", "mouseover"]), s("onPointerEnter", ["pointerout", "pointerover"]), s("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" ")); var Mr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), jr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr)); function Fr(e, t, n) { var r = e.type || "unknown-event"; e.currentTarget = n, function (e, t, n, r, a, o, i, u, s) { if (Be.apply(this, arguments), je) {
            if (!je)
                throw Error(l(198));
            var c = Fe;
            je = !1, Fe = null, Ie || (Ie = !0, Ue = c);
        } }(r, t, void 0, e), e.currentTarget = null; } function Ir(e, t) { t = 0 != (4 & t); for (var n = 0; n < e.length; n++) {
            var r = e[n], a = r.event;
            r = r.listeners;
            e: {
                var l = void 0;
                if (t)
                    for (var o = r.length - 1; 0 <= o; o--) {
                        var i = r[o], u = i.instance, s = i.currentTarget;
                        if (i = i.listener, u !== l && a.isPropagationStopped())
                            break e;
                        Fr(a, i, s), l = u;
                    }
                else
                    for (o = 0; o < r.length; o++) {
                        if (u = (i = r[o]).instance, s = i.currentTarget, i = i.listener, u !== l && a.isPropagationStopped())
                            break e;
                        Fr(a, i, s), l = u;
                    }
            }
        } if (Ie)
            throw e = Ue, Ie = !1, Ue = null, e; } function Ur(e, t) { var n = t[ma]; void 0 === n && (n = t[ma] = new Set); var r = e + "__bubble"; n.has(r) || ($r(t, e, 2, !1), n.add(r)); } function Ar(e, t, n) { var r = 0; t && (r |= 4), $r(n, e, r, t); } var Br = "_reactListening" + Math.random().toString(36).slice(2); function Vr(e) { if (!e[Br]) {
            e[Br] = !0, o.forEach((function (t) { "selectionchange" !== t && (jr.has(t) || Ar(t, !1, e), Ar(t, !0, e)); }));
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || (t[Br] = !0, Ar("selectionchange", !1, t));
        } } function $r(e, t, n, r) { switch (Xt(t)) {
            case 1:
                var a = Wt;
                break;
            case 4:
                a = Qt;
                break;
            default: a = qt;
        } n = a.bind(null, t, n, e), a = void 0, !ze || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1); } function Hr(e, t, n, r, a) { var l = r; if (0 == (1 & t) && 0 == (2 & t) && null !== r)
            e: for (;;) {
                if (null === r)
                    return;
                var o = r.tag;
                if (3 === o || 4 === o) {
                    var i = r.stateNode.containerInfo;
                    if (i === a || 8 === i.nodeType && i.parentNode === a)
                        break;
                    if (4 === o)
                        for (o = r.return; null !== o;) {
                            var u = o.tag;
                            if ((3 === u || 4 === u) && ((u = o.stateNode.containerInfo) === a || 8 === u.nodeType && u.parentNode === a))
                                return;
                            o = o.return;
                        }
                    for (; null !== i;) {
                        if (null === (o = ya(i)))
                            return;
                        if (5 === (u = o.tag) || 6 === u) {
                            r = l = o;
                            continue e;
                        }
                        i = i.parentNode;
                    }
                }
                r = r.return;
            } Re((function () { var r = l, a = ke(n), o = []; e: {
            var i = Lr.get(e);
            if (void 0 !== i) {
                var u = cn, s = e;
                switch (e) {
                    case "keypress": if (0 === tn(n))
                        break e;
                    case "keydown":
                    case "keyup":
                        u = Pn;
                        break;
                    case "focusin":
                        s = "focus", u = vn;
                        break;
                    case "focusout":
                        s = "blur", u = vn;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        u = vn;
                        break;
                    case "click": if (2 === n.button)
                        break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        u = hn;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        u = mn;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        u = Tn;
                        break;
                    case _r:
                    case Pr:
                    case Nr:
                        u = gn;
                        break;
                    case Tr:
                        u = Ln;
                        break;
                    case "scroll":
                        u = fn;
                        break;
                    case "wheel":
                        u = Dn;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        u = bn;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup": u = Nn;
                }
                var c = 0 != (4 & t), d = !c && "scroll" === e, f = c ? null !== i ? i + "Capture" : null : i;
                c = [];
                for (var p, h = r; null !== h;) {
                    var m = (p = h).stateNode;
                    if (5 === p.tag && null !== m && (p = m, null !== f && null != (m = De(h, f)) && c.push(Wr(h, m, p))), d)
                        break;
                    h = h.return;
                }
                0 < c.length && (i = new u(i, s, null, n, a), o.push({ event: i, listeners: c }));
            }
        } if (0 == (7 & t)) {
            if (u = "mouseout" === e || "pointerout" === e, (!(i = "mouseover" === e || "pointerover" === e) || n === we || !(s = n.relatedTarget || n.fromElement) || !ya(s) && !s[ha]) && (u || i) && (i = a.window === a ? a : (i = a.ownerDocument) ? i.defaultView || i.parentWindow : window, u ? (u = r, null !== (s = (s = n.relatedTarget || n.toElement) ? ya(s) : null) && (s !== (d = Ve(s)) || 5 !== s.tag && 6 !== s.tag) && (s = null)) : (u = null, s = r), u !== s)) {
                if (c = hn, m = "onMouseLeave", f = "onMouseEnter", h = "mouse", "pointerout" !== e && "pointerover" !== e || (c = Nn, m = "onPointerLeave", f = "onPointerEnter", h = "pointer"), d = null == u ? i : wa(u), p = null == s ? i : wa(s), (i = new c(m, h + "leave", u, n, a)).target = d, i.relatedTarget = p, m = null, ya(a) === r && ((c = new c(f, h + "enter", s, n, a)).target = p, c.relatedTarget = d, m = c), d = m, u && s)
                    e: {
                        for (f = s, h = 0, p = c = u; p; p = qr(p))
                            h++;
                        for (p = 0, m = f; m; m = qr(m))
                            p++;
                        for (; 0 < h - p;)
                            c = qr(c), h--;
                        for (; 0 < p - h;)
                            f = qr(f), p--;
                        for (; h--;) {
                            if (c === f || null !== f && c === f.alternate)
                                break e;
                            c = qr(c), f = qr(f);
                        }
                        c = null;
                    }
                else
                    c = null;
                null !== u && Yr(o, i, u, c, !1), null !== s && null !== d && Yr(o, d, s, c, !0);
            }
            if ("select" === (u = (i = r ? wa(r) : window).nodeName && i.nodeName.toLowerCase()) || "input" === u && "file" === i.type)
                var v = Xn;
            else if (Hn(i))
                if (Jn)
                    v = or;
                else {
                    v = ar;
                    var g = rr;
                }
            else
                (u = i.nodeName) && "input" === u.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (v = lr);
            switch (v && (v = v(e, r)) ? Wn(o, v, n, a) : (g && g(e, i, r), "focusout" === e && (g = i._wrapperState) && g.controlled && "number" === i.type && ee(i, "number", i.value)), g = r ? wa(r) : window, e) {
                case "focusin":
                    (Hn(g) || "true" === g.contentEditable) && (vr = g, gr = r, yr = null);
                    break;
                case "focusout":
                    yr = gr = vr = null;
                    break;
                case "mousedown":
                    br = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    br = !1, wr(o, n, a);
                    break;
                case "selectionchange": if (mr)
                    break;
                case "keydown":
                case "keyup": wr(o, n, a);
            }
            var y;
            if (On)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var b = "onCompositionStart";
                            break e;
                        case "compositionend":
                            b = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            b = "onCompositionUpdate";
                            break e;
                    }
                    b = void 0;
                }
            else
                Vn ? An(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
            b && (Fn && "ko" !== n.locale && (Vn || "onCompositionStart" !== b ? "onCompositionEnd" === b && Vn && (y = en()) : (Gt = "value" in (Jt = a) ? Jt.value : Jt.textContent, Vn = !0)), 0 < (g = Qr(r, b)).length && (b = new wn(b, e, null, n, a), o.push({ event: b, listeners: g }), (y || null !== (y = Bn(n))) && (b.data = y))), (y = jn ? function (e, t) { switch (e) {
                case "compositionend": return Bn(t);
                case "keypress": return 32 !== t.which ? null : (Un = !0, In);
                case "textInput": return (e = t.data) === In && Un ? null : e;
                default: return null;
            } }(e, n) : function (e, t) { if (Vn)
                return "compositionend" === e || !On && An(e, t) ? (e = en(), Zt = Gt = Jt = null, Vn = !1, e) : null; switch (e) {
                case "paste":
                default: return null;
                case "keypress":
                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                        if (t.char && 1 < t.char.length)
                            return t.char;
                        if (t.which)
                            return String.fromCharCode(t.which);
                    }
                    return null;
                case "compositionend": return Fn && "ko" !== t.locale ? null : t.data;
            } }(e, n)) && 0 < (r = Qr(r, "onBeforeInput")).length && (a = new wn("onBeforeInput", "beforeinput", null, n, a), o.push({ event: a, listeners: r }), a.data = y);
        } Ir(o, t); })); } function Wr(e, t, n) { return { instance: e, listener: t, currentTarget: n }; } function Qr(e, t) { for (var n = t + "Capture", r = []; null !== e;) {
            var a = e, l = a.stateNode;
            5 === a.tag && null !== l && (a = l, null != (l = De(e, n)) && r.unshift(Wr(e, l, a)), null != (l = De(e, t)) && r.push(Wr(e, l, a))), e = e.return;
        } return r; } function qr(e) { if (null === e)
            return null; do {
            e = e.return;
        } while (e && 5 !== e.tag); return e || null; } function Yr(e, t, n, r, a) { for (var l = t._reactName, o = []; null !== n && n !== r;) {
            var i = n, u = i.alternate, s = i.stateNode;
            if (null !== u && u === r)
                break;
            5 === i.tag && null !== s && (i = s, a ? null != (u = De(n, l)) && o.unshift(Wr(n, u, i)) : a || null != (u = De(n, l)) && o.push(Wr(n, u, i))), n = n.return;
        } 0 !== o.length && e.push({ event: t, listeners: o }); } var Kr = /\r\n?/g, Xr = /\u0000|\uFFFD/g; function Jr(e) { return ("string" == typeof e ? e : "" + e).replace(Kr, "\n").replace(Xr, ""); } function Gr(e, t, n) { if (t = Jr(t), Jr(e) !== t && n)
            throw Error(l(425)); } function Zr() { } var ea = null, ta = null; function na(e, t) { return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html; } var ra = "function" == typeof setTimeout ? setTimeout : void 0, aa = "function" == typeof clearTimeout ? clearTimeout : void 0, la = "function" == typeof Promise ? Promise : void 0, oa = "function" == typeof queueMicrotask ? queueMicrotask : void 0 !== la ? function (e) { return la.resolve(null).then(e).catch(ia); } : ra; function ia(e) { setTimeout((function () { throw e; })); } function ua(e, t) { var n = t, r = 0; do {
            var a = n.nextSibling;
            if (e.removeChild(n), a && 8 === a.nodeType)
                if ("/$" === (n = a.data)) {
                    if (0 === r)
                        return e.removeChild(a), void Vt(t);
                    r--;
                }
                else
                    "$" !== n && "$?" !== n && "$!" !== n || r++;
            n = a;
        } while (n); Vt(t); } function sa(e) { for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t)
                break;
            if (8 === t) {
                if ("$" === (t = e.data) || "$!" === t || "$?" === t)
                    break;
                if ("/$" === t)
                    return null;
            }
        } return e; } function ca(e) { e = e.previousSibling; for (var t = 0; e;) {
            if (8 === e.nodeType) {
                var n = e.data;
                if ("$" === n || "$!" === n || "$?" === n) {
                    if (0 === t)
                        return e;
                    t--;
                }
                else
                    "/$" === n && t++;
            }
            e = e.previousSibling;
        } return null; } var da = Math.random().toString(36).slice(2), fa = "__reactFiber$" + da, pa = "__reactProps$" + da, ha = "__reactContainer$" + da, ma = "__reactEvents$" + da, va = "__reactListeners$" + da, ga = "__reactHandles$" + da; function ya(e) { var t = e[fa]; if (t)
            return t; for (var n = e.parentNode; n;) {
            if (t = n[ha] || n[fa]) {
                if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                    for (e = ca(e); null !== e;) {
                        if (n = e[fa])
                            return n;
                        e = ca(e);
                    }
                return t;
            }
            n = (e = n).parentNode;
        } return null; } function ba(e) { return !(e = e[fa] || e[ha]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e; } function wa(e) { if (5 === e.tag || 6 === e.tag)
            return e.stateNode; throw Error(l(33)); } function ka(e) { return e[pa] || null; } var Sa = [], Ea = -1; function xa(e) { return { current: e }; } function Ca(e) { 0 > Ea || (e.current = Sa[Ea], Sa[Ea] = null, Ea--); } function _a(e, t) { Ea++, Sa[Ea] = e.current, e.current = t; } var Pa = {}, Na = xa(Pa), Ta = xa(!1), La = Pa; function Ra(e, t) { var n = e.type.contextTypes; if (!n)
            return Pa; var r = e.stateNode; if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext; var a, l = {}; for (a in n)
            l[a] = t[a]; return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l; } function Da(e) { return null != e.childContextTypes; } function za() { Ca(Ta), Ca(Na); } function Oa(e, t, n) { if (Na.current !== Pa)
            throw Error(l(168)); _a(Na, t), _a(Ta, n); } function Ma(e, t, n) { var r = e.stateNode; if (t = t.childContextTypes, "function" != typeof r.getChildContext)
            return n; for (var a in r = r.getChildContext())
            if (!(a in t))
                throw Error(l(108, $(e) || "Unknown", a)); return F({}, n, r); } function ja(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Pa, La = Na.current, _a(Na, e), _a(Ta, Ta.current), !0; } function Fa(e, t, n) { var r = e.stateNode; if (!r)
            throw Error(l(169)); n ? (e = Ma(e, t, La), r.__reactInternalMemoizedMergedChildContext = e, Ca(Ta), Ca(Na), _a(Na, e)) : Ca(Ta), _a(Ta, n); } var Ia = null, Ua = !1, Aa = !1; function Ba(e) { null === Ia ? Ia = [e] : Ia.push(e); } function Va() { if (!Aa && null !== Ia) {
            Aa = !0;
            var e = 0, t = bt;
            try {
                var n = Ia;
                for (bt = 1; e < n.length; e++) {
                    var r = n[e];
                    do {
                        r = r(!0);
                    } while (null !== r);
                }
                Ia = null, Ua = !1;
            }
            catch (t) {
                throw null !== Ia && (Ia = Ia.slice(e + 1)), qe(Ze, Va), t;
            }
            finally {
                bt = t, Aa = !1;
            }
        } return null; } var $a = [], Ha = 0, Wa = null, Qa = 0, qa = [], Ya = 0, Ka = null, Xa = 1, Ja = ""; function Ga(e, t) { $a[Ha++] = Qa, $a[Ha++] = Wa, Wa = e, Qa = t; } function Za(e, t, n) { qa[Ya++] = Xa, qa[Ya++] = Ja, qa[Ya++] = Ka, Ka = e; var r = Xa; e = Ja; var a = 32 - ot(r) - 1; r &= ~(1 << a), n += 1; var l = 32 - ot(t) + a; if (30 < l) {
            var o = a - a % 5;
            l = (r & (1 << o) - 1).toString(32), r >>= o, a -= o, Xa = 1 << 32 - ot(t) + a | n << a | r, Ja = l + e;
        }
        else
            Xa = 1 << l | n << a | r, Ja = e; } function el(e) { null !== e.return && (Ga(e, 1), Za(e, 1, 0)); } function tl(e) { for (; e === Wa;)
            Wa = $a[--Ha], $a[Ha] = null, Qa = $a[--Ha], $a[Ha] = null; for (; e === Ka;)
            Ka = qa[--Ya], qa[Ya] = null, Ja = qa[--Ya], qa[Ya] = null, Xa = qa[--Ya], qa[Ya] = null; } var nl = null, rl = null, al = !1, ll = null; function ol(e, t) { var n = Ds(5, null, null, 0); n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n); } function il(e, t) { switch (e.tag) {
            case 5:
                var n = e.type;
                return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, nl = e, rl = sa(t.firstChild), !0);
            case 6: return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, nl = e, rl = null, !0);
            case 13: return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Ka ? { id: Xa, overflow: Ja } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, (n = Ds(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, nl = e, rl = null, !0);
            default: return !1;
        } } function ul(e) { return 0 != (1 & e.mode) && 0 == (128 & e.flags); } function sl(e) { if (al) {
            var t = rl;
            if (t) {
                var n = t;
                if (!il(e, t)) {
                    if (ul(e))
                        throw Error(l(418));
                    t = sa(n.nextSibling);
                    var r = nl;
                    t && il(e, t) ? ol(r, n) : (e.flags = -4097 & e.flags | 2, al = !1, nl = e);
                }
            }
            else {
                if (ul(e))
                    throw Error(l(418));
                e.flags = -4097 & e.flags | 2, al = !1, nl = e;
            }
        } } function cl(e) { for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;)
            e = e.return; nl = e; } function dl(e) { if (e !== nl)
            return !1; if (!al)
            return cl(e), al = !0, !1; var t; if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !na(e.type, e.memoizedProps)), t && (t = rl)) {
            if (ul(e))
                throw fl(), Error(l(418));
            for (; t;)
                ol(e, t), t = sa(t.nextSibling);
        } if (cl(e), 13 === e.tag) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                throw Error(l(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("/$" === n) {
                            if (0 === t) {
                                rl = sa(e.nextSibling);
                                break e;
                            }
                            t--;
                        }
                        else
                            "$" !== n && "$!" !== n && "$?" !== n || t++;
                    }
                    e = e.nextSibling;
                }
                rl = null;
            }
        }
        else
            rl = nl ? sa(e.stateNode.nextSibling) : null; return !0; } function fl() { for (var e = rl; e;)
            e = sa(e.nextSibling); } function pl() { rl = nl = null, al = !1; } function hl(e) { null === ll ? ll = [e] : ll.push(e); } var ml = w.ReactCurrentBatchConfig; function vl(e, t) { if (e && e.defaultProps) {
            for (var n in t = F({}, t), e = e.defaultProps)
                void 0 === t[n] && (t[n] = e[n]);
            return t;
        } return t; } var gl = xa(null), yl = null, bl = null, wl = null; function kl() { wl = bl = yl = null; } function Sl(e) { var t = gl.current; Ca(gl), e._currentValue = t; } function El(e, t, n) { for (; null !== e;) {
            var r = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
                break;
            e = e.return;
        } } function xl(e, t) { yl = e, wl = bl = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 != (e.lanes & t) && (wi = !0), e.firstContext = null); } function Cl(e) { var t = e._currentValue; if (wl !== e)
            if (e = { context: e, memoizedValue: t, next: null }, null === bl) {
                if (null === yl)
                    throw Error(l(308));
                bl = e, yl.dependencies = { lanes: 0, firstContext: e };
            }
            else
                bl = bl.next = e; return t; } var _l = null; function Pl(e) { null === _l ? _l = [e] : _l.push(e); } function Nl(e, t, n, r) { var a = t.interleaved; return null === a ? (n.next = n, Pl(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Tl(e, r); } function Tl(e, t) { e.lanes |= t; var n = e.alternate; for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;)
            e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return; return 3 === n.tag ? n.stateNode : null; } var Ll = !1; function Rl(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null }; } function Dl(e, t) { e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }); } function zl(e, t) { return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }; } function Ol(e, t, n) { var r = e.updateQueue; if (null === r)
            return null; if (r = r.shared, 0 != (2 & Tu)) {
            var a = r.pending;
            return null === a ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Tl(e, n);
        } return null === (a = r.interleaved) ? (t.next = t, Pl(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Tl(e, n); } function Ml(e, t, n) { if (null !== (t = t.updateQueue) && (t = t.shared, 0 != (4194240 & n))) {
            var r = t.lanes;
            n |= r &= e.pendingLanes, t.lanes = n, yt(e, n);
        } } function jl(e, t) { var n = e.updateQueue, r = e.alternate; if (null !== r && n === (r = r.updateQueue)) {
            var a = null, l = null;
            if (null !== (n = n.firstBaseUpdate)) {
                do {
                    var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
                    null === l ? a = l = o : l = l.next = o, n = n.next;
                } while (null !== n);
                null === l ? a = l = t : l = l.next = t;
            }
            else
                a = l = t;
            return n = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: l, shared: r.shared, effects: r.effects }, void (e.updateQueue = n);
        } null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t; } function Fl(e, t, n, r) { var a = e.updateQueue; Ll = !1; var l = a.firstBaseUpdate, o = a.lastBaseUpdate, i = a.shared.pending; if (null !== i) {
            a.shared.pending = null;
            var u = i, s = u.next;
            u.next = null, null === o ? l = s : o.next = s, o = u;
            var c = e.alternate;
            null !== c && (i = (c = c.updateQueue).lastBaseUpdate) !== o && (null === i ? c.firstBaseUpdate = s : i.next = s, c.lastBaseUpdate = u);
        } if (null !== l) {
            var d = a.baseState;
            for (o = 0, c = s = u = null, i = l;;) {
                var f = i.lane, p = i.eventTime;
                if ((r & f) === f) {
                    null !== c && (c = c.next = { eventTime: p, lane: 0, tag: i.tag, payload: i.payload, callback: i.callback, next: null });
                    e: {
                        var h = e, m = i;
                        switch (f = t, p = n, m.tag) {
                            case 1:
                                if ("function" == typeof (h = m.payload)) {
                                    d = h.call(p, d, f);
                                    break e;
                                }
                                d = h;
                                break e;
                            case 3: h.flags = -65537 & h.flags | 128;
                            case 0:
                                if (null == (f = "function" == typeof (h = m.payload) ? h.call(p, d, f) : h))
                                    break e;
                                d = F({}, d, f);
                                break e;
                            case 2: Ll = !0;
                        }
                    }
                    null !== i.callback && 0 !== i.lane && (e.flags |= 64, null === (f = a.effects) ? a.effects = [i] : f.push(i));
                }
                else
                    p = { eventTime: p, lane: f, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, null === c ? (s = c = p, u = d) : c = c.next = p, o |= f;
                if (null === (i = i.next)) {
                    if (null === (i = a.shared.pending))
                        break;
                    i = (f = i).next, f.next = null, a.lastBaseUpdate = f, a.shared.pending = null;
                }
            }
            if (null === c && (u = d), a.baseState = u, a.firstBaseUpdate = s, a.lastBaseUpdate = c, null !== (t = a.shared.interleaved)) {
                a = t;
                do {
                    o |= a.lane, a = a.next;
                } while (a !== t);
            }
            else
                null === l && (a.shared.lanes = 0);
            Fu |= o, e.lanes = o, e.memoizedState = d;
        } } function Il(e, t, n) { if (e = t.effects, t.effects = null, null !== e)
            for (t = 0; t < e.length; t++) {
                var r = e[t], a = r.callback;
                if (null !== a) {
                    if (r.callback = null, r = n, "function" != typeof a)
                        throw Error(l(191, a));
                    a.call(r);
                }
            } } var Ul = (new r.Component).refs; function Al(e, t, n, r) { n = null == (n = n(r, t = e.memoizedState)) ? t : F({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n); } var Bl = { isMounted: function (e) { return !!(e = e._reactInternals) && Ve(e) === e; }, enqueueSetState: function (e, t, n) { e = e._reactInternals; var r = ts(), a = ns(e), l = zl(r, a); l.payload = t, null != n && (l.callback = n), null !== (t = Ol(e, l, a)) && (rs(t, e, a, r), Ml(t, e, a)); }, enqueueReplaceState: function (e, t, n) { e = e._reactInternals; var r = ts(), a = ns(e), l = zl(r, a); l.tag = 1, l.payload = t, null != n && (l.callback = n), null !== (t = Ol(e, l, a)) && (rs(t, e, a, r), Ml(t, e, a)); }, enqueueForceUpdate: function (e, t) { e = e._reactInternals; var n = ts(), r = ns(e), a = zl(n, r); a.tag = 2, null != t && (a.callback = t), null !== (t = Ol(e, a, r)) && (rs(t, e, r, n), Ml(t, e, r)); } }; function Vl(e, t, n, r, a, l, o) { return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, l, o) : !(t.prototype && t.prototype.isPureReactComponent && ur(n, r) && ur(a, l)); } function $l(e, t, n) { var r = !1, a = Pa, l = t.contextType; return "object" == typeof l && null !== l ? l = Cl(l) : (a = Da(t) ? La : Na.current, l = (r = null != (r = t.contextTypes)) ? Ra(e, a) : Pa), t = new t(n, l), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Bl, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = l), t; } function Hl(e, t, n, r) { e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Bl.enqueueReplaceState(t, t.state, null); } function Wl(e, t, n, r) { var a = e.stateNode; a.props = n, a.state = e.memoizedState, a.refs = Ul, Rl(e); var l = t.contextType; "object" == typeof l && null !== l ? a.context = Cl(l) : (l = Da(t) ? La : Na.current, a.context = Ra(e, l)), a.state = e.memoizedState, "function" == typeof (l = t.getDerivedStateFromProps) && (Al(e, t, l, n), a.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof a.getSnapshotBeforeUpdate || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || (t = a.state, "function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), t !== a.state && Bl.enqueueReplaceState(a, a.state, null), Fl(e, n, a, r), a.state = e.memoizedState), "function" == typeof a.componentDidMount && (e.flags |= 4194308); } function Ql(e, t, n) { if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
            if (n._owner) {
                if (n = n._owner) {
                    if (1 !== n.tag)
                        throw Error(l(309));
                    var r = n.stateNode;
                }
                if (!r)
                    throw Error(l(147, e));
                var a = r, o = "" + e;
                return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === o ? t.ref : (t = function (e) { var t = a.refs; t === Ul && (t = a.refs = {}), null === e ? delete t[o] : t[o] = e; }, t._stringRef = o, t);
            }
            if ("string" != typeof e)
                throw Error(l(284));
            if (!n._owner)
                throw Error(l(290, e));
        } return e; } function ql(e, t) { throw e = Object.prototype.toString.call(t), Error(l(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)); } function Yl(e) { return (0, e._init)(e._payload); } function Kl(e) { function t(t, n) { if (e) {
            var r = t.deletions;
            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n);
        } } function n(n, r) { if (!e)
            return null; for (; null !== r;)
            t(n, r), r = r.sibling; return null; } function r(e, t) { for (e = new Map; null !== t;)
            null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling; return e; } function a(e, t) { return (e = Os(e, t)).index = 0, e.sibling = null, e; } function o(t, n, r) { return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n); } function i(t) { return e && null === t.alternate && (t.flags |= 2), t; } function u(e, t, n, r) { return null === t || 6 !== t.tag ? ((t = Is(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t); } function s(e, t, n, r) { var l = n.type; return l === E ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === l || "object" == typeof l && null !== l && l.$$typeof === D && Yl(l) === t.type) ? ((r = a(t, n.props)).ref = Ql(e, t, n), r.return = e, r) : ((r = Ms(n.type, n.key, n.props, null, e.mode, r)).ref = Ql(e, t, n), r.return = e, r); } function c(e, t, n, r) { return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Us(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t); } function d(e, t, n, r, l) { return null === t || 7 !== t.tag ? ((t = js(n, e.mode, r, l)).return = e, t) : ((t = a(t, n)).return = e, t); } function f(e, t, n) { if ("string" == typeof t && "" !== t || "number" == typeof t)
            return (t = Is("" + t, e.mode, n)).return = e, t; if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
                case k: return (n = Ms(t.type, t.key, t.props, null, e.mode, n)).ref = Ql(e, null, t), n.return = e, n;
                case S: return (t = Us(t, e.mode, n)).return = e, t;
                case D: return f(e, (0, t._init)(t._payload), n);
            }
            if (te(t) || M(t))
                return (t = js(t, e.mode, n, null)).return = e, t;
            ql(e, t);
        } return null; } function p(e, t, n, r) { var a = null !== t ? t.key : null; if ("string" == typeof n && "" !== n || "number" == typeof n)
            return null !== a ? null : u(e, t, "" + n, r); if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
                case k: return n.key === a ? s(e, t, n, r) : null;
                case S: return n.key === a ? c(e, t, n, r) : null;
                case D: return p(e, t, (a = n._init)(n._payload), r);
            }
            if (te(n) || M(n))
                return null !== a ? null : d(e, t, n, r, null);
            ql(e, n);
        } return null; } function h(e, t, n, r, a) { if ("string" == typeof r && "" !== r || "number" == typeof r)
            return u(t, e = e.get(n) || null, "" + r, a); if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
                case k: return s(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                case S: return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
                case D: return h(e, t, n, (0, r._init)(r._payload), a);
            }
            if (te(r) || M(r))
                return d(t, e = e.get(n) || null, r, a, null);
            ql(t, r);
        } return null; } function m(a, l, i, u) { for (var s = null, c = null, d = l, m = l = 0, v = null; null !== d && m < i.length; m++) {
            d.index > m ? (v = d, d = null) : v = d.sibling;
            var g = p(a, d, i[m], u);
            if (null === g) {
                null === d && (d = v);
                break;
            }
            e && d && null === g.alternate && t(a, d), l = o(g, l, m), null === c ? s = g : c.sibling = g, c = g, d = v;
        } if (m === i.length)
            return n(a, d), al && Ga(a, m), s; if (null === d) {
            for (; m < i.length; m++)
                null !== (d = f(a, i[m], u)) && (l = o(d, l, m), null === c ? s = d : c.sibling = d, c = d);
            return al && Ga(a, m), s;
        } for (d = r(a, d); m < i.length; m++)
            null !== (v = h(d, a, m, i[m], u)) && (e && null !== v.alternate && d.delete(null === v.key ? m : v.key), l = o(v, l, m), null === c ? s = v : c.sibling = v, c = v); return e && d.forEach((function (e) { return t(a, e); })), al && Ga(a, m), s; } function v(a, i, u, s) { var c = M(u); if ("function" != typeof c)
            throw Error(l(150)); if (null == (u = c.call(u)))
            throw Error(l(151)); for (var d = c = null, m = i, v = i = 0, g = null, y = u.next(); null !== m && !y.done; v++, y = u.next()) {
            m.index > v ? (g = m, m = null) : g = m.sibling;
            var b = p(a, m, y.value, s);
            if (null === b) {
                null === m && (m = g);
                break;
            }
            e && m && null === b.alternate && t(a, m), i = o(b, i, v), null === d ? c = b : d.sibling = b, d = b, m = g;
        } if (y.done)
            return n(a, m), al && Ga(a, v), c; if (null === m) {
            for (; !y.done; v++, y = u.next())
                null !== (y = f(a, y.value, s)) && (i = o(y, i, v), null === d ? c = y : d.sibling = y, d = y);
            return al && Ga(a, v), c;
        } for (m = r(a, m); !y.done; v++, y = u.next())
            null !== (y = h(m, a, v, y.value, s)) && (e && null !== y.alternate && m.delete(null === y.key ? v : y.key), i = o(y, i, v), null === d ? c = y : d.sibling = y, d = y); return e && m.forEach((function (e) { return t(a, e); })), al && Ga(a, v), c; } return function e(r, l, o, u) { if ("object" == typeof o && null !== o && o.type === E && null === o.key && (o = o.props.children), "object" == typeof o && null !== o) {
            switch (o.$$typeof) {
                case k:
                    e: {
                        for (var s = o.key, c = l; null !== c;) {
                            if (c.key === s) {
                                if ((s = o.type) === E) {
                                    if (7 === c.tag) {
                                        n(r, c.sibling), (l = a(c, o.props.children)).return = r, r = l;
                                        break e;
                                    }
                                }
                                else if (c.elementType === s || "object" == typeof s && null !== s && s.$$typeof === D && Yl(s) === c.type) {
                                    n(r, c.sibling), (l = a(c, o.props)).ref = Ql(r, c, o), l.return = r, r = l;
                                    break e;
                                }
                                n(r, c);
                                break;
                            }
                            t(r, c), c = c.sibling;
                        }
                        o.type === E ? ((l = js(o.props.children, r.mode, u, o.key)).return = r, r = l) : ((u = Ms(o.type, o.key, o.props, null, r.mode, u)).ref = Ql(r, l, o), u.return = r, r = u);
                    }
                    return i(r);
                case S:
                    e: {
                        for (c = o.key; null !== l;) {
                            if (l.key === c) {
                                if (4 === l.tag && l.stateNode.containerInfo === o.containerInfo && l.stateNode.implementation === o.implementation) {
                                    n(r, l.sibling), (l = a(l, o.children || [])).return = r, r = l;
                                    break e;
                                }
                                n(r, l);
                                break;
                            }
                            t(r, l), l = l.sibling;
                        }
                        (l = Us(o, r.mode, u)).return = r, r = l;
                    }
                    return i(r);
                case D: return e(r, l, (c = o._init)(o._payload), u);
            }
            if (te(o))
                return m(r, l, o, u);
            if (M(o))
                return v(r, l, o, u);
            ql(r, o);
        } return "string" == typeof o && "" !== o || "number" == typeof o ? (o = "" + o, null !== l && 6 === l.tag ? (n(r, l.sibling), (l = a(l, o)).return = r, r = l) : (n(r, l), (l = Is(o, r.mode, u)).return = r, r = l), i(r)) : n(r, l); }; } var Xl = Kl(!0), Jl = Kl(!1), Gl = {}, Zl = xa(Gl), eo = xa(Gl), to = xa(Gl); function no(e) { if (e === Gl)
            throw Error(l(174)); return e; } function ro(e, t) { switch (_a(to, t), _a(eo, e), _a(Zl, Gl), e = t.nodeType) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
                break;
            default: t = ue(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName);
        } Ca(Zl), _a(Zl, t); } function ao() { Ca(Zl), Ca(eo), Ca(to); } function lo(e) { no(to.current); var t = no(Zl.current), n = ue(t, e.type); t !== n && (_a(eo, e), _a(Zl, n)); } function oo(e) { eo.current === e && (Ca(Zl), Ca(eo)); } var io = xa(0); function uo(e) { for (var t = e; null !== t;) {
            if (13 === t.tag) {
                var n = t.memoizedState;
                if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data))
                    return t;
            }
            else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                if (0 != (128 & t.flags))
                    return t;
            }
            else if (null !== t.child) {
                t.child.return = t, t = t.child;
                continue;
            }
            if (t === e)
                break;
            for (; null === t.sibling;) {
                if (null === t.return || t.return === e)
                    return null;
                t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
        } return null; } var so = []; function co() { for (var e = 0; e < so.length; e++)
            so[e]._workInProgressVersionPrimary = null; so.length = 0; } var fo = w.ReactCurrentDispatcher, po = w.ReactCurrentBatchConfig, ho = 0, mo = null, vo = null, go = null, yo = !1, bo = !1, wo = 0, ko = 0; function So() { throw Error(l(321)); } function Eo(e, t) { if (null === t)
            return !1; for (var n = 0; n < t.length && n < e.length; n++)
            if (!ir(e[n], t[n]))
                return !1; return !0; } function xo(e, t, n, r, a, o) { if (ho = o, mo = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, fo.current = null === e || null === e.memoizedState ? ii : ui, e = n(r, a), bo) {
            o = 0;
            do {
                if (bo = !1, wo = 0, 25 <= o)
                    throw Error(l(301));
                o += 1, go = vo = null, t.updateQueue = null, fo.current = si, e = n(r, a);
            } while (bo);
        } if (fo.current = oi, t = null !== vo && null !== vo.next, ho = 0, go = vo = mo = null, yo = !1, t)
            throw Error(l(300)); return e; } function Co() { var e = 0 !== wo; return wo = 0, e; } function _o() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return null === go ? mo.memoizedState = go = e : go = go.next = e, go; } function Po() { if (null === vo) {
            var e = mo.alternate;
            e = null !== e ? e.memoizedState : null;
        }
        else
            e = vo.next; var t = null === go ? mo.memoizedState : go.next; if (null !== t)
            go = t, vo = e;
        else {
            if (null === e)
                throw Error(l(310));
            e = { memoizedState: (vo = e).memoizedState, baseState: vo.baseState, baseQueue: vo.baseQueue, queue: vo.queue, next: null }, null === go ? mo.memoizedState = go = e : go = go.next = e;
        } return go; } function No(e, t) { return "function" == typeof t ? t(e) : t; } function To(e) { var t = Po(), n = t.queue; if (null === n)
            throw Error(l(311)); n.lastRenderedReducer = e; var r = vo, a = r.baseQueue, o = n.pending; if (null !== o) {
            if (null !== a) {
                var i = a.next;
                a.next = o.next, o.next = i;
            }
            r.baseQueue = a = o, n.pending = null;
        } if (null !== a) {
            o = a.next, r = r.baseState;
            var u = i = null, s = null, c = o;
            do {
                var d = c.lane;
                if ((ho & d) === d)
                    null !== s && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
                else {
                    var f = { lane: d, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null };
                    null === s ? (u = s = f, i = r) : s = s.next = f, mo.lanes |= d, Fu |= d;
                }
                c = c.next;
            } while (null !== c && c !== o);
            null === s ? i = r : s.next = u, ir(r, t.memoizedState) || (wi = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
        } if (null !== (e = n.interleaved)) {
            a = e;
            do {
                o = a.lane, mo.lanes |= o, Fu |= o, a = a.next;
            } while (a !== e);
        }
        else
            null === a && (n.lanes = 0); return [t.memoizedState, n.dispatch]; } function Lo(e) { var t = Po(), n = t.queue; if (null === n)
            throw Error(l(311)); n.lastRenderedReducer = e; var r = n.dispatch, a = n.pending, o = t.memoizedState; if (null !== a) {
            n.pending = null;
            var i = a = a.next;
            do {
                o = e(o, i.action), i = i.next;
            } while (i !== a);
            ir(o, t.memoizedState) || (wi = !0), t.memoizedState = o, null === t.baseQueue && (t.baseState = o), n.lastRenderedState = o;
        } return [o, r]; } function Ro() { } function Do(e, t) { var n = mo, r = Po(), a = t(), o = !ir(r.memoizedState, a); if (o && (r.memoizedState = a, wi = !0), r = r.queue, Ho(Mo.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || null !== go && 1 & go.memoizedState.tag) {
            if (n.flags |= 2048, Uo(9, Oo.bind(null, n, r, a, t), void 0, null), null === Lu)
                throw Error(l(349));
            0 != (30 & ho) || zo(n, t, a);
        } return a; } function zo(e, t, n) { e.flags |= 16384, e = { getSnapshot: t, value: n }, null === (t = mo.updateQueue) ? (t = { lastEffect: null, stores: null }, mo.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e); } function Oo(e, t, n, r) { t.value = n, t.getSnapshot = r, jo(t) && Fo(e); } function Mo(e, t, n) { return n((function () { jo(t) && Fo(e); })); } function jo(e) { var t = e.getSnapshot; e = e.value; try {
            var n = t();
            return !ir(e, n);
        }
        catch (e) {
            return !0;
        } } function Fo(e) { var t = Tl(e, 1); null !== t && rs(t, e, 1, -1); } function Io(e) { var t = _o(); return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: No, lastRenderedState: e }, t.queue = e, e = e.dispatch = ni.bind(null, mo, e), [t.memoizedState, e]; } function Uo(e, t, n, r) { return e = { tag: e, create: t, destroy: n, deps: r, next: null }, null === (t = mo.updateQueue) ? (t = { lastEffect: null, stores: null }, mo.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e; } function Ao() { return Po().memoizedState; } function Bo(e, t, n, r) { var a = _o(); mo.flags |= e, a.memoizedState = Uo(1 | t, n, void 0, void 0 === r ? null : r); } function Vo(e, t, n, r) { var a = Po(); r = void 0 === r ? null : r; var l = void 0; if (null !== vo) {
            var o = vo.memoizedState;
            if (l = o.destroy, null !== r && Eo(r, o.deps))
                return void (a.memoizedState = Uo(t, n, l, r));
        } mo.flags |= e, a.memoizedState = Uo(1 | t, n, l, r); } function $o(e, t) { return Bo(8390656, 8, e, t); } function Ho(e, t) { return Vo(2048, 8, e, t); } function Wo(e, t) { return Vo(4, 2, e, t); } function Qo(e, t) { return Vo(4, 4, e, t); } function qo(e, t) { return "function" == typeof t ? (e = e(), t(e), function () { t(null); }) : null != t ? (e = e(), t.current = e, function () { t.current = null; }) : void 0; } function Yo(e, t, n) { return n = null != n ? n.concat([e]) : null, Vo(4, 4, qo.bind(null, t, e), n); } function Ko() { } function Xo(e, t) { var n = Po(); t = void 0 === t ? null : t; var r = n.memoizedState; return null !== r && null !== t && Eo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e); } function Jo(e, t) { var n = Po(); t = void 0 === t ? null : t; var r = n.memoizedState; return null !== r && null !== t && Eo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e); } function Go(e, t, n) { return 0 == (21 & ho) ? (e.baseState && (e.baseState = !1, wi = !0), e.memoizedState = n) : (ir(n, t) || (n = mt(), mo.lanes |= n, Fu |= n, e.baseState = !0), t); } function Zo(e, t) { var n = bt; bt = 0 !== n && 4 > n ? n : 4, e(!0); var r = po.transition; po.transition = {}; try {
            e(!1), t();
        }
        finally {
            bt = n, po.transition = r;
        } } function ei() { return Po().memoizedState; } function ti(e, t, n) { var r = ns(e); n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ri(e) ? ai(t, n) : null !== (n = Nl(e, t, n, r)) && (rs(n, e, r, ts()), li(n, t, r)); } function ni(e, t, n) { var r = ns(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }; if (ri(e))
            ai(t, a);
        else {
            var l = e.alternate;
            if (0 === e.lanes && (null === l || 0 === l.lanes) && null !== (l = t.lastRenderedReducer))
                try {
                    var o = t.lastRenderedState, i = l(o, n);
                    if (a.hasEagerState = !0, a.eagerState = i, ir(i, o)) {
                        var u = t.interleaved;
                        return null === u ? (a.next = a, Pl(t)) : (a.next = u.next, u.next = a), void (t.interleaved = a);
                    }
                }
                catch (e) { }
            null !== (n = Nl(e, t, a, r)) && (rs(n, e, r, a = ts()), li(n, t, r));
        } } function ri(e) { var t = e.alternate; return e === mo || null !== t && t === mo; } function ai(e, t) { bo = yo = !0; var n = e.pending; null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t; } function li(e, t, n) { if (0 != (4194240 & n)) {
            var r = t.lanes;
            n |= r &= e.pendingLanes, t.lanes = n, yt(e, n);
        } } var oi = { readContext: Cl, useCallback: So, useContext: So, useEffect: So, useImperativeHandle: So, useInsertionEffect: So, useLayoutEffect: So, useMemo: So, useReducer: So, useRef: So, useState: So, useDebugValue: So, useDeferredValue: So, useTransition: So, useMutableSource: So, useSyncExternalStore: So, useId: So, unstable_isNewReconciler: !1 }, ii = { readContext: Cl, useCallback: function (e, t) { return _o().memoizedState = [e, void 0 === t ? null : t], e; }, useContext: Cl, useEffect: $o, useImperativeHandle: function (e, t, n) { return n = null != n ? n.concat([e]) : null, Bo(4194308, 4, qo.bind(null, t, e), n); }, useLayoutEffect: function (e, t) { return Bo(4194308, 4, e, t); }, useInsertionEffect: function (e, t) { return Bo(4, 2, e, t); }, useMemo: function (e, t) { var n = _o(); return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e; }, useReducer: function (e, t, n) { var r = _o(); return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ti.bind(null, mo, e), [r.memoizedState, e]; }, useRef: function (e) { return e = { current: e }, _o().memoizedState = e; }, useState: Io, useDebugValue: Ko, useDeferredValue: function (e) { return _o().memoizedState = e; }, useTransition: function () { var e = Io(!1), t = e[0]; return e = Zo.bind(null, e[1]), _o().memoizedState = e, [t, e]; }, useMutableSource: function () { }, useSyncExternalStore: function (e, t, n) { var r = mo, a = _o(); if (al) {
                if (void 0 === n)
                    throw Error(l(407));
                n = n();
            }
            else {
                if (n = t(), null === Lu)
                    throw Error(l(349));
                0 != (30 & ho) || zo(r, t, n);
            } a.memoizedState = n; var o = { value: n, getSnapshot: t }; return a.queue = o, $o(Mo.bind(null, r, o, e), [e]), r.flags |= 2048, Uo(9, Oo.bind(null, r, o, n, t), void 0, null), n; }, useId: function () { var e = _o(), t = Lu.identifierPrefix; if (al) {
                var n = Ja;
                t = ":" + t + "R" + (n = (Xa & ~(1 << 32 - ot(Xa) - 1)).toString(32) + n), 0 < (n = wo++) && (t += "H" + n.toString(32)), t += ":";
            }
            else
                t = ":" + t + "r" + (n = ko++).toString(32) + ":"; return e.memoizedState = t; }, unstable_isNewReconciler: !1 }, ui = { readContext: Cl, useCallback: Xo, useContext: Cl, useEffect: Ho, useImperativeHandle: Yo, useInsertionEffect: Wo, useLayoutEffect: Qo, useMemo: Jo, useReducer: To, useRef: Ao, useState: function () { return To(No); }, useDebugValue: Ko, useDeferredValue: function (e) { return Go(Po(), vo.memoizedState, e); }, useTransition: function () { return [To(No)[0], Po().memoizedState]; }, useMutableSource: Ro, useSyncExternalStore: Do, useId: ei, unstable_isNewReconciler: !1 }, si = { readContext: Cl, useCallback: Xo, useContext: Cl, useEffect: Ho, useImperativeHandle: Yo, useInsertionEffect: Wo, useLayoutEffect: Qo, useMemo: Jo, useReducer: Lo, useRef: Ao, useState: function () { return Lo(No); }, useDebugValue: Ko, useDeferredValue: function (e) { var t = Po(); return null === vo ? t.memoizedState = e : Go(t, vo.memoizedState, e); }, useTransition: function () { return [Lo(No)[0], Po().memoizedState]; }, useMutableSource: Ro, useSyncExternalStore: Do, useId: ei, unstable_isNewReconciler: !1 }; function ci(e, t) { try {
            var n = "", r = t;
            do {
                n += B(r), r = r.return;
            } while (r);
            var a = n;
        }
        catch (e) {
            a = "\nError generating stack: " + e.message + "\n" + e.stack;
        } return { value: e, source: t, stack: a, digest: null }; } function di(e, t, n) { return { value: e, source: null, stack: null != n ? n : null, digest: null != t ? t : null }; } function fi(e, t) { try {
            console.error(t.value);
        }
        catch (e) {
            setTimeout((function () { throw e; }));
        } } var pi = "function" == typeof WeakMap ? WeakMap : Map; function hi(e, t, n) { (n = zl(-1, n)).tag = 3, n.payload = { element: null }; var r = t.value; return n.callback = function () { Wu || (Wu = !0, Qu = r), fi(0, t); }, n; } function mi(e, t, n) { (n = zl(-1, n)).tag = 3; var r = e.type.getDerivedStateFromError; if ("function" == typeof r) {
            var a = t.value;
            n.payload = function () { return r(a); }, n.callback = function () { fi(0, t); };
        } var l = e.stateNode; return null !== l && "function" == typeof l.componentDidCatch && (n.callback = function () { fi(0, t), "function" != typeof r && (null === qu ? qu = new Set([this]) : qu.add(this)); var e = t.stack; this.componentDidCatch(t.value, { componentStack: null !== e ? e : "" }); }), n; } function vi(e, t, n) { var r = e.pingCache; if (null === r) {
            r = e.pingCache = new pi;
            var a = new Set;
            r.set(t, a);
        }
        else
            void 0 === (a = r.get(t)) && (a = new Set, r.set(t, a)); a.has(n) || (a.add(n), e = _s.bind(null, e, t, n), t.then(e, e)); } function gi(e) { do {
            var t;
            if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t)
                return e;
            e = e.return;
        } while (null !== e); return null; } function yi(e, t, n, r, a) { return 0 == (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = zl(-1, 1)).tag = 2, Ol(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e); } var bi = w.ReactCurrentOwner, wi = !1; function ki(e, t, n, r) { t.child = null === e ? Jl(t, null, n, r) : Xl(t, e.child, n, r); } function Si(e, t, n, r, a) { n = n.render; var l = t.ref; return xl(t, a), r = xo(e, t, n, r, l, a), n = Co(), null === e || wi ? (al && n && el(t), t.flags |= 1, ki(e, t, r, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Wi(e, t, a)); } function Ei(e, t, n, r, a) { if (null === e) {
            var l = n.type;
            return "function" != typeof l || zs(l) || void 0 !== l.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Ms(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = l, xi(e, t, l, r, a));
        } if (l = e.child, 0 == (e.lanes & a)) {
            var o = l.memoizedProps;
            if ((n = null !== (n = n.compare) ? n : ur)(o, r) && e.ref === t.ref)
                return Wi(e, t, a);
        } return t.flags |= 1, (e = Os(l, r)).ref = t.ref, e.return = t, t.child = e; } function xi(e, t, n, r, a) { if (null !== e) {
            var l = e.memoizedProps;
            if (ur(l, r) && e.ref === t.ref) {
                if (wi = !1, t.pendingProps = r = l, 0 == (e.lanes & a))
                    return t.lanes = e.lanes, Wi(e, t, a);
                0 != (131072 & e.flags) && (wi = !0);
            }
        } return Pi(e, t, n, r, a); } function Ci(e, t, n) { var r = t.pendingProps, a = r.children, l = null !== e ? e.memoizedState : null; if ("hidden" === r.mode)
            if (0 == (1 & t.mode))
                t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, _a(Ou, zu), zu |= n;
            else {
                if (0 == (1073741824 & n))
                    return e = null !== l ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, _a(Ou, zu), zu |= e, null;
                t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = null !== l ? l.baseLanes : n, _a(Ou, zu), zu |= r;
            }
        else
            null !== l ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, _a(Ou, zu), zu |= r; return ki(e, t, a, n), t.child; } function _i(e, t) { var n = t.ref; (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152); } function Pi(e, t, n, r, a) { var l = Da(n) ? La : Na.current; return l = Ra(t, l), xl(t, a), n = xo(e, t, n, r, l, a), r = Co(), null === e || wi ? (al && r && el(t), t.flags |= 1, ki(e, t, n, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Wi(e, t, a)); } function Ni(e, t, n, r, a) { if (Da(n)) {
            var l = !0;
            ja(t);
        }
        else
            l = !1; if (xl(t, a), null === t.stateNode)
            Hi(e, t), $l(t, n, r), Wl(t, n, r, a), r = !0;
        else if (null === e) {
            var o = t.stateNode, i = t.memoizedProps;
            o.props = i;
            var u = o.context, s = n.contextType;
            s = "object" == typeof s && null !== s ? Cl(s) : Ra(t, s = Da(n) ? La : Na.current);
            var c = n.getDerivedStateFromProps, d = "function" == typeof c || "function" == typeof o.getSnapshotBeforeUpdate;
            d || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (i !== r || u !== s) && Hl(t, o, r, s), Ll = !1;
            var f = t.memoizedState;
            o.state = f, Fl(t, r, o, a), u = t.memoizedState, i !== r || f !== u || Ta.current || Ll ? ("function" == typeof c && (Al(t, n, c, r), u = t.memoizedState), (i = Ll || Vl(t, n, i, r, f, u, s)) ? (d || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || ("function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()), "function" == typeof o.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof o.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), o.props = r, o.state = u, o.context = s, r = i) : ("function" == typeof o.componentDidMount && (t.flags |= 4194308), r = !1);
        }
        else {
            o = t.stateNode, Dl(e, t), i = t.memoizedProps, s = t.type === t.elementType ? i : vl(t.type, i), o.props = s, d = t.pendingProps, f = o.context, u = "object" == typeof (u = n.contextType) && null !== u ? Cl(u) : Ra(t, u = Da(n) ? La : Na.current);
            var p = n.getDerivedStateFromProps;
            (c = "function" == typeof p || "function" == typeof o.getSnapshotBeforeUpdate) || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (i !== d || f !== u) && Hl(t, o, r, u), Ll = !1, f = t.memoizedState, o.state = f, Fl(t, r, o, a);
            var h = t.memoizedState;
            i !== d || f !== h || Ta.current || Ll ? ("function" == typeof p && (Al(t, n, p, r), h = t.memoizedState), (s = Ll || Vl(t, n, s, r, f, h, u) || !1) ? (c || "function" != typeof o.UNSAFE_componentWillUpdate && "function" != typeof o.componentWillUpdate || ("function" == typeof o.componentWillUpdate && o.componentWillUpdate(r, h, u), "function" == typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, h, u)), "function" == typeof o.componentDidUpdate && (t.flags |= 4), "function" == typeof o.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof o.componentDidUpdate || i === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof o.getSnapshotBeforeUpdate || i === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), o.props = r, o.state = h, o.context = u, r = s) : ("function" != typeof o.componentDidUpdate || i === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof o.getSnapshotBeforeUpdate || i === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
        } return Ti(e, t, n, r, l, a); } function Ti(e, t, n, r, a, l) { _i(e, t); var o = 0 != (128 & t.flags); if (!r && !o)
            return a && Fa(t, n, !1), Wi(e, t, l); r = t.stateNode, bi.current = t; var i = o && "function" != typeof n.getDerivedStateFromError ? null : r.render(); return t.flags |= 1, null !== e && o ? (t.child = Xl(t, e.child, null, l), t.child = Xl(t, null, i, l)) : ki(e, t, i, l), t.memoizedState = r.state, a && Fa(t, n, !0), t.child; } function Li(e) { var t = e.stateNode; t.pendingContext ? Oa(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Oa(0, t.context, !1), ro(e, t.containerInfo); } function Ri(e, t, n, r, a) { return pl(), hl(a), t.flags |= 256, ki(e, t, n, r), t.child; } var Di, zi, Oi, Mi, ji = { dehydrated: null, treeContext: null, retryLane: 0 }; function Fi(e) { return { baseLanes: e, cachePool: null, transitions: null }; } function Ii(e, t, n) { var r, a = t.pendingProps, o = io.current, i = !1, u = 0 != (128 & t.flags); if ((r = u) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & o)), r ? (i = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (o |= 1), _a(io, 1 & o), null === e)
            return sl(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 == (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (u = a.children, e = a.fallback, i ? (a = t.mode, i = t.child, u = { mode: "hidden", children: u }, 0 == (1 & a) && null !== i ? (i.childLanes = 0, i.pendingProps = u) : i = Fs(u, a, 0, null), e = js(e, a, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Fi(n), t.memoizedState = ji, e) : Ui(t, u)); if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return function (e, t, n, r, a, o, i) { if (n)
                return 256 & t.flags ? (t.flags &= -257, Ai(e, t, i, r = di(Error(l(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, a = t.mode, r = Fs({ mode: "visible", children: r.children }, a, 0, null), (o = js(o, a, i, null)).flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, 0 != (1 & t.mode) && Xl(t, e.child, null, i), t.child.memoizedState = Fi(i), t.memoizedState = ji, o); if (0 == (1 & t.mode))
                return Ai(e, t, i, null); if ("$!" === a.data) {
                if (r = a.nextSibling && a.nextSibling.dataset)
                    var u = r.dgst;
                return r = u, Ai(e, t, i, r = di(o = Error(l(419)), r, void 0));
            } if (u = 0 != (i & e.childLanes), wi || u) {
                if (null !== (r = Lu)) {
                    switch (i & -i) {
                        case 4:
                            a = 2;
                            break;
                        case 16:
                            a = 8;
                            break;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            a = 32;
                            break;
                        case 536870912:
                            a = 268435456;
                            break;
                        default: a = 0;
                    }
                    0 !== (a = 0 != (a & (r.suspendedLanes | i)) ? 0 : a) && a !== o.retryLane && (o.retryLane = a, Tl(e, a), rs(r, e, a, -1));
                }
                return vs(), Ai(e, t, i, r = di(Error(l(421))));
            } return "$?" === a.data ? (t.flags |= 128, t.child = e.child, t = Ns.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, rl = sa(a.nextSibling), nl = t, al = !0, ll = null, null !== e && (qa[Ya++] = Xa, qa[Ya++] = Ja, qa[Ya++] = Ka, Xa = e.id, Ja = e.overflow, Ka = t), (t = Ui(t, r.children)).flags |= 4096, t); }(e, t, u, a, r, o, n); if (i) {
            i = a.fallback, u = t.mode, r = (o = e.child).sibling;
            var s = { mode: "hidden", children: a.children };
            return 0 == (1 & u) && t.child !== o ? ((a = t.child).childLanes = 0, a.pendingProps = s, t.deletions = null) : (a = Os(o, s)).subtreeFlags = 14680064 & o.subtreeFlags, null !== r ? i = Os(r, i) : (i = js(i, u, n, null)).flags |= 2, i.return = t, a.return = t, a.sibling = i, t.child = a, a = i, i = t.child, u = null === (u = e.child.memoizedState) ? Fi(n) : { baseLanes: u.baseLanes | n, cachePool: null, transitions: u.transitions }, i.memoizedState = u, i.childLanes = e.childLanes & ~n, t.memoizedState = ji, a;
        } return e = (i = e.child).sibling, a = Os(i, { mode: "visible", children: a.children }), 0 == (1 & t.mode) && (a.lanes = n), a.return = t, a.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = a, t.memoizedState = null, a; } function Ui(e, t) { return (t = Fs({ mode: "visible", children: t }, e.mode, 0, null)).return = e, e.child = t; } function Ai(e, t, n, r) { return null !== r && hl(r), Xl(t, e.child, null, n), (e = Ui(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e; } function Bi(e, t, n) { e.lanes |= t; var r = e.alternate; null !== r && (r.lanes |= t), El(e.return, t, n); } function Vi(e, t, n, r, a) { var l = e.memoizedState; null === l ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = a); } function $i(e, t, n) { var r = t.pendingProps, a = r.revealOrder, l = r.tail; if (ki(e, t, r.children, n), 0 != (2 & (r = io.current)))
            r = 1 & r | 2, t.flags |= 128;
        else {
            if (null !== e && 0 != (128 & e.flags))
                e: for (e = t.child; null !== e;) {
                    if (13 === e.tag)
                        null !== e.memoizedState && Bi(e, n, t);
                    else if (19 === e.tag)
                        Bi(e, n, t);
                    else if (null !== e.child) {
                        e.child.return = e, e = e.child;
                        continue;
                    }
                    if (e === t)
                        break e;
                    for (; null === e.sibling;) {
                        if (null === e.return || e.return === t)
                            break e;
                        e = e.return;
                    }
                    e.sibling.return = e.return, e = e.sibling;
                }
            r &= 1;
        } if (_a(io, r), 0 == (1 & t.mode))
            t.memoizedState = null;
        else
            switch (a) {
                case "forwards":
                    for (n = t.child, a = null; null !== n;)
                        null !== (e = n.alternate) && null === uo(e) && (a = n), n = n.sibling;
                    null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Vi(t, !1, a, n, l);
                    break;
                case "backwards":
                    for (n = null, a = t.child, t.child = null; null !== a;) {
                        if (null !== (e = a.alternate) && null === uo(e)) {
                            t.child = a;
                            break;
                        }
                        e = a.sibling, a.sibling = n, n = a, a = e;
                    }
                    Vi(t, !0, n, null, l);
                    break;
                case "together":
                    Vi(t, !1, null, null, void 0);
                    break;
                default: t.memoizedState = null;
            } return t.child; } function Hi(e, t) { 0 == (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2); } function Wi(e, t, n) { if (null !== e && (t.dependencies = e.dependencies), Fu |= t.lanes, 0 == (n & t.childLanes))
            return null; if (null !== e && t.child !== e.child)
            throw Error(l(153)); if (null !== t.child) {
            for (n = Os(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;)
                e = e.sibling, (n = n.sibling = Os(e, e.pendingProps)).return = t;
            n.sibling = null;
        } return t.child; } function Qi(e, t) { if (!al)
            switch (e.tailMode) {
                case "hidden":
                    t = e.tail;
                    for (var n = null; null !== t;)
                        null !== t.alternate && (n = t), t = t.sibling;
                    null === n ? e.tail = null : n.sibling = null;
                    break;
                case "collapsed":
                    n = e.tail;
                    for (var r = null; null !== n;)
                        null !== n.alternate && (r = n), n = n.sibling;
                    null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null;
            } } function qi(e) { var t = null !== e.alternate && e.alternate.child === e.child, n = 0, r = 0; if (t)
            for (var a = e.child; null !== a;)
                n |= a.lanes | a.childLanes, r |= 14680064 & a.subtreeFlags, r |= 14680064 & a.flags, a.return = e, a = a.sibling;
        else
            for (a = e.child; null !== a;)
                n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling; return e.subtreeFlags |= r, e.childLanes = n, t; } function Yi(e, t, n) { var r = t.pendingProps; switch (tl(t), t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14: return qi(t), null;
            case 1:
            case 17: return Da(t.type) && za(), qi(t), null;
            case 3: return r = t.stateNode, ao(), Ca(Ta), Ca(Na), co(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (dl(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 == (256 & t.flags) || (t.flags |= 1024, null !== ll && (is(ll), ll = null))), zi(e, t), qi(t), null;
            case 5:
                oo(t);
                var a = no(to.current);
                if (n = t.type, null !== e && null != t.stateNode)
                    Oi(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                else {
                    if (!r) {
                        if (null === t.stateNode)
                            throw Error(l(166));
                        return qi(t), null;
                    }
                    if (e = no(Zl.current), dl(t)) {
                        r = t.stateNode, n = t.type;
                        var o = t.memoizedProps;
                        switch (r[fa] = t, r[pa] = o, e = 0 != (1 & t.mode), n) {
                            case "dialog":
                                Ur("cancel", r), Ur("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Ur("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (a = 0; a < Mr.length; a++)
                                    Ur(Mr[a], r);
                                break;
                            case "source":
                                Ur("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Ur("error", r), Ur("load", r);
                                break;
                            case "details":
                                Ur("toggle", r);
                                break;
                            case "input":
                                X(r, o), Ur("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = { wasMultiple: !!o.multiple }, Ur("invalid", r);
                                break;
                            case "textarea": ae(r, o), Ur("invalid", r);
                        }
                        for (var u in ye(n, o), a = null, o)
                            if (o.hasOwnProperty(u)) {
                                var s = o[u];
                                "children" === u ? "string" == typeof s ? r.textContent !== s && (!0 !== o.suppressHydrationWarning && Gr(r.textContent, s, e), a = ["children", s]) : "number" == typeof s && r.textContent !== "" + s && (!0 !== o.suppressHydrationWarning && Gr(r.textContent, s, e), a = ["children", "" + s]) : i.hasOwnProperty(u) && null != s && "onScroll" === u && Ur("scroll", r);
                            }
                        switch (n) {
                            case "input":
                                Q(r), Z(r, o, !0);
                                break;
                            case "textarea":
                                Q(r), oe(r);
                                break;
                            case "select":
                            case "option": break;
                            default: "function" == typeof o.onClick && (r.onclick = Zr);
                        }
                        r = a, t.updateQueue = r, null !== r && (t.flags |= 4);
                    }
                    else {
                        u = 9 === a.nodeType ? a : a.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = ie(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = u.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = u.createElement(n, { is: r.is }) : (e = u.createElement(n), "select" === n && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[fa] = t, e[pa] = r, Di(e, t, !1, !1), t.stateNode = e;
                        e: {
                            switch (u = be(n, r), n) {
                                case "dialog":
                                    Ur("cancel", e), Ur("close", e), a = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    Ur("load", e), a = r;
                                    break;
                                case "video":
                                case "audio":
                                    for (a = 0; a < Mr.length; a++)
                                        Ur(Mr[a], e);
                                    a = r;
                                    break;
                                case "source":
                                    Ur("error", e), a = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    Ur("error", e), Ur("load", e), a = r;
                                    break;
                                case "details":
                                    Ur("toggle", e), a = r;
                                    break;
                                case "input":
                                    X(e, r), a = K(e, r), Ur("invalid", e);
                                    break;
                                case "option":
                                default:
                                    a = r;
                                    break;
                                case "select":
                                    e._wrapperState = { wasMultiple: !!r.multiple }, a = F({}, r, { value: void 0 }), Ur("invalid", e);
                                    break;
                                case "textarea": ae(e, r), a = re(e, r), Ur("invalid", e);
                            }
                            for (o in ye(n, a), s = a)
                                if (s.hasOwnProperty(o)) {
                                    var c = s[o];
                                    "style" === o ? ve(e, c) : "dangerouslySetInnerHTML" === o ? null != (c = c ? c.__html : void 0) && de(e, c) : "children" === o ? "string" == typeof c ? ("textarea" !== n || "" !== c) && fe(e, c) : "number" == typeof c && fe(e, "" + c) : "suppressContentEditableWarning" !== o && "suppressHydrationWarning" !== o && "autoFocus" !== o && (i.hasOwnProperty(o) ? null != c && "onScroll" === o && Ur("scroll", e) : null != c && b(e, o, c, u));
                                }
                            switch (n) {
                                case "input":
                                    Q(e), Z(e, r, !1);
                                    break;
                                case "textarea":
                                    Q(e), oe(e);
                                    break;
                                case "option":
                                    null != r.value && e.setAttribute("value", "" + H(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, null != (o = r.value) ? ne(e, !!r.multiple, o, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default: "function" == typeof a.onClick && (e.onclick = Zr);
                            }
                            switch (n) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    r = !!r.autoFocus;
                                    break e;
                                case "img":
                                    r = !0;
                                    break e;
                                default: r = !1;
                            }
                        }
                        r && (t.flags |= 4);
                    }
                    null !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                }
                return qi(t), null;
            case 6:
                if (e && null != t.stateNode)
                    Mi(e, t, e.memoizedProps, r);
                else {
                    if ("string" != typeof r && null === t.stateNode)
                        throw Error(l(166));
                    if (n = no(to.current), no(Zl.current), dl(t)) {
                        if (r = t.stateNode, n = t.memoizedProps, r[fa] = t, (o = r.nodeValue !== n) && null !== (e = nl))
                            switch (e.tag) {
                                case 3:
                                    Gr(r.nodeValue, n, 0 != (1 & e.mode));
                                    break;
                                case 5: !0 !== e.memoizedProps.suppressHydrationWarning && Gr(r.nodeValue, n, 0 != (1 & e.mode));
                            }
                        o && (t.flags |= 4);
                    }
                    else
                        (r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[fa] = t, t.stateNode = r;
                }
                return qi(t), null;
            case 13:
                if (Ca(io), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                    if (al && null !== rl && 0 != (1 & t.mode) && 0 == (128 & t.flags))
                        fl(), pl(), t.flags |= 98560, o = !1;
                    else if (o = dl(t), null !== r && null !== r.dehydrated) {
                        if (null === e) {
                            if (!o)
                                throw Error(l(318));
                            if (!(o = null !== (o = t.memoizedState) ? o.dehydrated : null))
                                throw Error(l(317));
                            o[fa] = t;
                        }
                        else
                            pl(), 0 == (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                        qi(t), o = !1;
                    }
                    else
                        null !== ll && (is(ll), ll = null), o = !0;
                    if (!o)
                        return 65536 & t.flags ? t : null;
                }
                return 0 != (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) != (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 != (1 & t.mode) && (null === e || 0 != (1 & io.current) ? 0 === Mu && (Mu = 3) : vs())), null !== t.updateQueue && (t.flags |= 4), qi(t), null);
            case 4: return ao(), zi(e, t), null === e && Vr(t.stateNode.containerInfo), qi(t), null;
            case 10: return Sl(t.type._context), qi(t), null;
            case 19:
                if (Ca(io), null === (o = t.memoizedState))
                    return qi(t), null;
                if (r = 0 != (128 & t.flags), null === (u = o.rendering))
                    if (r)
                        Qi(o, !1);
                    else {
                        if (0 !== Mu || null !== e && 0 != (128 & e.flags))
                            for (e = t.child; null !== e;) {
                                if (null !== (u = uo(e))) {
                                    for (t.flags |= 128, Qi(o, !1), null !== (r = u.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;)
                                        e = r, (o = n).flags &= 14680066, null === (u = o.alternate) ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = u.childLanes, o.lanes = u.lanes, o.child = u.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = u.memoizedProps, o.memoizedState = u.memoizedState, o.updateQueue = u.updateQueue, o.type = u.type, e = u.dependencies, o.dependencies = null === e ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                                    return _a(io, 1 & io.current | 2), t.child;
                                }
                                e = e.sibling;
                            }
                        null !== o.tail && Je() > $u && (t.flags |= 128, r = !0, Qi(o, !1), t.lanes = 4194304);
                    }
                else {
                    if (!r)
                        if (null !== (e = uo(u))) {
                            if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Qi(o, !0), null === o.tail && "hidden" === o.tailMode && !u.alternate && !al)
                                return qi(t), null;
                        }
                        else
                            2 * Je() - o.renderingStartTime > $u && 1073741824 !== n && (t.flags |= 128, r = !0, Qi(o, !1), t.lanes = 4194304);
                    o.isBackwards ? (u.sibling = t.child, t.child = u) : (null !== (n = o.last) ? n.sibling = u : t.child = u, o.last = u);
                }
                return null !== o.tail ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Je(), t.sibling = null, n = io.current, _a(io, r ? 1 & n | 2 : 1 & n), t) : (qi(t), null);
            case 22:
            case 23: return fs(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 != (1 & t.mode) ? 0 != (1073741824 & zu) && (qi(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : qi(t), null;
            case 24:
            case 25: return null;
        } throw Error(l(156, t.tag)); } function Ki(e, t) { switch (tl(t), t.tag) {
            case 1: return Da(t.type) && za(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
            case 3: return ao(), Ca(Ta), Ca(Na), co(), 0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
            case 5: return oo(t), null;
            case 13:
                if (Ca(io), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                    if (null === t.alternate)
                        throw Error(l(340));
                    pl();
                }
                return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
            case 19: return Ca(io), null;
            case 4: return ao(), null;
            case 10: return Sl(t.type._context), null;
            case 22:
            case 23: return fs(), null;
            default: return null;
        } } Di = function (e, t) { for (var n = t.child; null !== n;) {
            if (5 === n.tag || 6 === n.tag)
                e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
                n.child.return = n, n = n.child;
                continue;
            }
            if (n === t)
                break;
            for (; null === n.sibling;) {
                if (null === n.return || n.return === t)
                    return;
                n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
        } }, zi = function () { }, Oi = function (e, t, n, r) { var a = e.memoizedProps; if (a !== r) {
            e = t.stateNode, no(Zl.current);
            var l, o = null;
            switch (n) {
                case "input":
                    a = K(e, a), r = K(e, r), o = [];
                    break;
                case "select":
                    a = F({}, a, { value: void 0 }), r = F({}, r, { value: void 0 }), o = [];
                    break;
                case "textarea":
                    a = re(e, a), r = re(e, r), o = [];
                    break;
                default: "function" != typeof a.onClick && "function" == typeof r.onClick && (e.onclick = Zr);
            }
            for (c in ye(n, r), n = null, a)
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                    if ("style" === c) {
                        var u = a[c];
                        for (l in u)
                            u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
                    }
                    else
                        "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (i.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
            for (c in r) {
                var s = r[c];
                if (u = null != a ? a[c] : void 0, r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                    if ("style" === c)
                        if (u) {
                            for (l in u)
                                !u.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
                            for (l in s)
                                s.hasOwnProperty(l) && u[l] !== s[l] && (n || (n = {}), n[l] = s[l]);
                        }
                        else
                            n || (o || (o = []), o.push(c, n)), n = s;
                    else
                        "dangerouslySetInnerHTML" === c ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, null != s && u !== s && (o = o || []).push(c, s)) : "children" === c ? "string" != typeof s && "number" != typeof s || (o = o || []).push(c, "" + s) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (i.hasOwnProperty(c) ? (null != s && "onScroll" === c && Ur("scroll", e), o || u === s || (o = [])) : (o = o || []).push(c, s));
            }
            n && (o = o || []).push("style", n);
            var c = o;
            (t.updateQueue = c) && (t.flags |= 4);
        } }, Mi = function (e, t, n, r) { n !== r && (t.flags |= 4); }; var Xi = !1, Ji = !1, Gi = "function" == typeof WeakSet ? WeakSet : Set, Zi = null; function eu(e, t) { var n = e.ref; if (null !== n)
            if ("function" == typeof n)
                try {
                    n(null);
                }
                catch (n) {
                    Cs(e, t, n);
                }
            else
                n.current = null; } function tu(e, t, n) { try {
            n();
        }
        catch (n) {
            Cs(e, t, n);
        } } var nu = !1; function ru(e, t, n) { var r = t.updateQueue; if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = r = r.next;
            do {
                if ((a.tag & e) === e) {
                    var l = a.destroy;
                    a.destroy = void 0, void 0 !== l && tu(t, n, l);
                }
                a = a.next;
            } while (a !== r);
        } } function au(e, t) { if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
            var n = t = t.next;
            do {
                if ((n.tag & e) === e) {
                    var r = n.create;
                    n.destroy = r();
                }
                n = n.next;
            } while (n !== t);
        } } function lu(e) { var t = e.ref; if (null !== t) {
            var n = e.stateNode;
            e.tag, e = n, "function" == typeof t ? t(e) : t.current = e;
        } } function ou(e) { var t = e.alternate; null !== t && (e.alternate = null, ou(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && null !== (t = e.stateNode) && (delete t[fa], delete t[pa], delete t[ma], delete t[va], delete t[ga]), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null; } function iu(e) { return 5 === e.tag || 3 === e.tag || 4 === e.tag; } function uu(e) { e: for (;;) {
            for (; null === e.sibling;) {
                if (null === e.return || iu(e.return))
                    return null;
                e = e.return;
            }
            for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                if (2 & e.flags)
                    continue e;
                if (null === e.child || 4 === e.tag)
                    continue e;
                e.child.return = e, e = e.child;
            }
            if (!(2 & e.flags))
                return e.stateNode;
        } } function su(e, t, n) { var r = e.tag; if (5 === r || 6 === r)
            e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Zr));
        else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e;)
                su(e, t, n), e = e.sibling; } function cu(e, t, n) { var r = e.tag; if (5 === r || 6 === r)
            e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && null !== (e = e.child))
            for (cu(e, t, n), e = e.sibling; null !== e;)
                cu(e, t, n), e = e.sibling; } var du = null, fu = !1; function pu(e, t, n) { for (n = n.child; null !== n;)
            hu(e, t, n), n = n.sibling; } function hu(e, t, n) { if (lt && "function" == typeof lt.onCommitFiberUnmount)
            try {
                lt.onCommitFiberUnmount(at, n);
            }
            catch (e) { } switch (n.tag) {
            case 5: Ji || eu(n, t);
            case 6:
                var r = du, a = fu;
                du = null, pu(e, t, n), fu = a, null !== (du = r) && (fu ? (e = du, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : du.removeChild(n.stateNode));
                break;
            case 18:
                null !== du && (fu ? (e = du, n = n.stateNode, 8 === e.nodeType ? ua(e.parentNode, n) : 1 === e.nodeType && ua(e, n), Vt(e)) : ua(du, n.stateNode));
                break;
            case 4:
                r = du, a = fu, du = n.stateNode.containerInfo, fu = !0, pu(e, t, n), du = r, fu = a;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!Ji && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
                    a = r = r.next;
                    do {
                        var l = a, o = l.destroy;
                        l = l.tag, void 0 !== o && (0 != (2 & l) || 0 != (4 & l)) && tu(n, t, o), a = a.next;
                    } while (a !== r);
                }
                pu(e, t, n);
                break;
            case 1:
                if (!Ji && (eu(n, t), "function" == typeof (r = n.stateNode).componentWillUnmount))
                    try {
                        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
                    }
                    catch (e) {
                        Cs(n, t, e);
                    }
                pu(e, t, n);
                break;
            case 21:
                pu(e, t, n);
                break;
            case 22:
                1 & n.mode ? (Ji = (r = Ji) || null !== n.memoizedState, pu(e, t, n), Ji = r) : pu(e, t, n);
                break;
            default: pu(e, t, n);
        } } function mu(e) { var t = e.updateQueue; if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Gi), t.forEach((function (t) { var r = Ts.bind(null, e, t); n.has(t) || (n.add(t), t.then(r, r)); }));
        } } function vu(e, t) { var n = t.deletions; if (null !== n)
            for (var r = 0; r < n.length; r++) {
                var a = n[r];
                try {
                    var o = e, i = t, u = i;
                    e: for (; null !== u;) {
                        switch (u.tag) {
                            case 5:
                                du = u.stateNode, fu = !1;
                                break e;
                            case 3:
                            case 4:
                                du = u.stateNode.containerInfo, fu = !0;
                                break e;
                        }
                        u = u.return;
                    }
                    if (null === du)
                        throw Error(l(160));
                    hu(o, i, a), du = null, fu = !1;
                    var s = a.alternate;
                    null !== s && (s.return = null), a.return = null;
                }
                catch (e) {
                    Cs(a, t, e);
                }
            } if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t;)
                gu(t, e), t = t.sibling; } function gu(e, t) { var n = e.alternate, r = e.flags; switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (vu(t, e), yu(e), 4 & r) {
                    try {
                        ru(3, e, e.return), au(3, e);
                    }
                    catch (t) {
                        Cs(e, e.return, t);
                    }
                    try {
                        ru(5, e, e.return);
                    }
                    catch (t) {
                        Cs(e, e.return, t);
                    }
                }
                break;
            case 1:
                vu(t, e), yu(e), 512 & r && null !== n && eu(n, n.return);
                break;
            case 5:
                if (vu(t, e), yu(e), 512 & r && null !== n && eu(n, n.return), 32 & e.flags) {
                    var a = e.stateNode;
                    try {
                        fe(a, "");
                    }
                    catch (t) {
                        Cs(e, e.return, t);
                    }
                }
                if (4 & r && null != (a = e.stateNode)) {
                    var o = e.memoizedProps, i = null !== n ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
                    if (e.updateQueue = null, null !== s)
                        try {
                            "input" === u && "radio" === o.type && null != o.name && J(a, o), be(u, i);
                            var c = be(u, o);
                            for (i = 0; i < s.length; i += 2) {
                                var d = s[i], f = s[i + 1];
                                "style" === d ? ve(a, f) : "dangerouslySetInnerHTML" === d ? de(a, f) : "children" === d ? fe(a, f) : b(a, d, f, c);
                            }
                            switch (u) {
                                case "input":
                                    G(a, o);
                                    break;
                                case "textarea":
                                    le(a, o);
                                    break;
                                case "select":
                                    var p = a._wrapperState.wasMultiple;
                                    a._wrapperState.wasMultiple = !!o.multiple;
                                    var h = o.value;
                                    null != h ? ne(a, !!o.multiple, h, !1) : p !== !!o.multiple && (null != o.defaultValue ? ne(a, !!o.multiple, o.defaultValue, !0) : ne(a, !!o.multiple, o.multiple ? [] : "", !1));
                            }
                            a[pa] = o;
                        }
                        catch (t) {
                            Cs(e, e.return, t);
                        }
                }
                break;
            case 6:
                if (vu(t, e), yu(e), 4 & r) {
                    if (null === e.stateNode)
                        throw Error(l(162));
                    a = e.stateNode, o = e.memoizedProps;
                    try {
                        a.nodeValue = o;
                    }
                    catch (t) {
                        Cs(e, e.return, t);
                    }
                }
                break;
            case 3:
                if (vu(t, e), yu(e), 4 & r && null !== n && n.memoizedState.isDehydrated)
                    try {
                        Vt(t.containerInfo);
                    }
                    catch (t) {
                        Cs(e, e.return, t);
                    }
                break;
            case 4:
            default:
                vu(t, e), yu(e);
                break;
            case 13:
                vu(t, e), yu(e), 8192 & (a = e.child).flags && (o = null !== a.memoizedState, a.stateNode.isHidden = o, !o || null !== a.alternate && null !== a.alternate.memoizedState || (Vu = Je())), 4 & r && mu(e);
                break;
            case 22:
                if (d = null !== n && null !== n.memoizedState, 1 & e.mode ? (Ji = (c = Ji) || d, vu(t, e), Ji = c) : vu(t, e), yu(e), 8192 & r) {
                    if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !d && 0 != (1 & e.mode))
                        for (Zi = e, d = e.child; null !== d;) {
                            for (f = Zi = d; null !== Zi;) {
                                switch (h = (p = Zi).child, p.tag) {
                                    case 0:
                                    case 11:
                                    case 14:
                                    case 15:
                                        ru(4, p, p.return);
                                        break;
                                    case 1:
                                        eu(p, p.return);
                                        var m = p.stateNode;
                                        if ("function" == typeof m.componentWillUnmount) {
                                            r = p, n = p.return;
                                            try {
                                                t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount();
                                            }
                                            catch (e) {
                                                Cs(r, n, e);
                                            }
                                        }
                                        break;
                                    case 5:
                                        eu(p, p.return);
                                        break;
                                    case 22: if (null !== p.memoizedState) {
                                        Su(f);
                                        continue;
                                    }
                                }
                                null !== h ? (h.return = p, Zi = h) : Su(f);
                            }
                            d = d.sibling;
                        }
                    e: for (d = null, f = e;;) {
                        if (5 === f.tag) {
                            if (null === d) {
                                d = f;
                                try {
                                    a = f.stateNode, c ? "function" == typeof (o = a.style).setProperty ? o.setProperty("display", "none", "important") : o.display = "none" : (u = f.stateNode, i = null != (s = f.memoizedProps.style) && s.hasOwnProperty("display") ? s.display : null, u.style.display = me("display", i));
                                }
                                catch (t) {
                                    Cs(e, e.return, t);
                                }
                            }
                        }
                        else if (6 === f.tag) {
                            if (null === d)
                                try {
                                    f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                                }
                                catch (t) {
                                    Cs(e, e.return, t);
                                }
                        }
                        else if ((22 !== f.tag && 23 !== f.tag || null === f.memoizedState || f === e) && null !== f.child) {
                            f.child.return = f, f = f.child;
                            continue;
                        }
                        if (f === e)
                            break e;
                        for (; null === f.sibling;) {
                            if (null === f.return || f.return === e)
                                break e;
                            d === f && (d = null), f = f.return;
                        }
                        d === f && (d = null), f.sibling.return = f.return, f = f.sibling;
                    }
                }
                break;
            case 19: vu(t, e), yu(e), 4 & r && mu(e);
            case 21:
        } } function yu(e) { var t = e.flags; if (2 & t) {
            try {
                e: {
                    for (var n = e.return; null !== n;) {
                        if (iu(n)) {
                            var r = n;
                            break e;
                        }
                        n = n.return;
                    }
                    throw Error(l(160));
                }
                switch (r.tag) {
                    case 5:
                        var a = r.stateNode;
                        32 & r.flags && (fe(a, ""), r.flags &= -33), cu(e, uu(e), a);
                        break;
                    case 3:
                    case 4:
                        var o = r.stateNode.containerInfo;
                        su(e, uu(e), o);
                        break;
                    default: throw Error(l(161));
                }
            }
            catch (t) {
                Cs(e, e.return, t);
            }
            e.flags &= -3;
        } 4096 & t && (e.flags &= -4097); } function bu(e, t, n) { Zi = e, wu(e, t, n); } function wu(e, t, n) { for (var r = 0 != (1 & e.mode); null !== Zi;) {
            var a = Zi, l = a.child;
            if (22 === a.tag && r) {
                var o = null !== a.memoizedState || Xi;
                if (!o) {
                    var i = a.alternate, u = null !== i && null !== i.memoizedState || Ji;
                    i = Xi;
                    var s = Ji;
                    if (Xi = o, (Ji = u) && !s)
                        for (Zi = a; null !== Zi;)
                            u = (o = Zi).child, 22 === o.tag && null !== o.memoizedState ? Eu(a) : null !== u ? (u.return = o, Zi = u) : Eu(a);
                    for (; null !== l;)
                        Zi = l, wu(l, t, n), l = l.sibling;
                    Zi = a, Xi = i, Ji = s;
                }
                ku(e);
            }
            else
                0 != (8772 & a.subtreeFlags) && null !== l ? (l.return = a, Zi = l) : ku(e);
        } } function ku(e) { for (; null !== Zi;) {
            var t = Zi;
            if (0 != (8772 & t.flags)) {
                var n = t.alternate;
                try {
                    if (0 != (8772 & t.flags))
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Ji || au(5, t);
                                break;
                            case 1:
                                var r = t.stateNode;
                                if (4 & t.flags && !Ji)
                                    if (null === n)
                                        r.componentDidMount();
                                    else {
                                        var a = t.elementType === t.type ? n.memoizedProps : vl(t.type, n.memoizedProps);
                                        r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                    }
                                var o = t.updateQueue;
                                null !== o && Il(t, o, r);
                                break;
                            case 3:
                                var i = t.updateQueue;
                                if (null !== i) {
                                    if (n = null, null !== t.child)
                                        switch (t.child.tag) {
                                            case 5:
                                            case 1: n = t.child.stateNode;
                                        }
                                    Il(t, i, n);
                                }
                                break;
                            case 5:
                                var u = t.stateNode;
                                if (null === n && 4 & t.flags) {
                                    n = u;
                                    var s = t.memoizedProps;
                                    switch (t.type) {
                                        case "button":
                                        case "input":
                                        case "select":
                                        case "textarea":
                                            s.autoFocus && n.focus();
                                            break;
                                        case "img": s.src && (n.src = s.src);
                                    }
                                }
                                break;
                            case 6:
                            case 4:
                            case 12:
                            case 19:
                            case 17:
                            case 21:
                            case 22:
                            case 23:
                            case 25: break;
                            case 13:
                                if (null === t.memoizedState) {
                                    var c = t.alternate;
                                    if (null !== c) {
                                        var d = c.memoizedState;
                                        if (null !== d) {
                                            var f = d.dehydrated;
                                            null !== f && Vt(f);
                                        }
                                    }
                                }
                                break;
                            default: throw Error(l(163));
                        }
                    Ji || 512 & t.flags && lu(t);
                }
                catch (e) {
                    Cs(t, t.return, e);
                }
            }
            if (t === e) {
                Zi = null;
                break;
            }
            if (null !== (n = t.sibling)) {
                n.return = t.return, Zi = n;
                break;
            }
            Zi = t.return;
        } } function Su(e) { for (; null !== Zi;) {
            var t = Zi;
            if (t === e) {
                Zi = null;
                break;
            }
            var n = t.sibling;
            if (null !== n) {
                n.return = t.return, Zi = n;
                break;
            }
            Zi = t.return;
        } } function Eu(e) { for (; null !== Zi;) {
            var t = Zi;
            try {
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        var n = t.return;
                        try {
                            au(4, t);
                        }
                        catch (e) {
                            Cs(t, n, e);
                        }
                        break;
                    case 1:
                        var r = t.stateNode;
                        if ("function" == typeof r.componentDidMount) {
                            var a = t.return;
                            try {
                                r.componentDidMount();
                            }
                            catch (e) {
                                Cs(t, a, e);
                            }
                        }
                        var l = t.return;
                        try {
                            lu(t);
                        }
                        catch (e) {
                            Cs(t, l, e);
                        }
                        break;
                    case 5:
                        var o = t.return;
                        try {
                            lu(t);
                        }
                        catch (e) {
                            Cs(t, o, e);
                        }
                }
            }
            catch (e) {
                Cs(t, t.return, e);
            }
            if (t === e) {
                Zi = null;
                break;
            }
            var i = t.sibling;
            if (null !== i) {
                i.return = t.return, Zi = i;
                break;
            }
            Zi = t.return;
        } } var xu, Cu = Math.ceil, _u = w.ReactCurrentDispatcher, Pu = w.ReactCurrentOwner, Nu = w.ReactCurrentBatchConfig, Tu = 0, Lu = null, Ru = null, Du = 0, zu = 0, Ou = xa(0), Mu = 0, ju = null, Fu = 0, Iu = 0, Uu = 0, Au = null, Bu = null, Vu = 0, $u = 1 / 0, Hu = null, Wu = !1, Qu = null, qu = null, Yu = !1, Ku = null, Xu = 0, Ju = 0, Gu = null, Zu = -1, es = 0; function ts() { return 0 != (6 & Tu) ? Je() : -1 !== Zu ? Zu : Zu = Je(); } function ns(e) { return 0 == (1 & e.mode) ? 1 : 0 != (2 & Tu) && 0 !== Du ? Du & -Du : null !== ml.transition ? (0 === es && (es = mt()), es) : 0 !== (e = bt) ? e : e = void 0 === (e = window.event) ? 16 : Xt(e.type); } function rs(e, t, n, r) { if (50 < Ju)
            throw Ju = 0, Gu = null, Error(l(185)); gt(e, n, r), 0 != (2 & Tu) && e === Lu || (e === Lu && (0 == (2 & Tu) && (Iu |= n), 4 === Mu && us(e, Du)), as(e, r), 1 === n && 0 === Tu && 0 == (1 & t.mode) && ($u = Je() + 500, Ua && Va())); } function as(e, t) { var n = e.callbackNode; !function (e, t) { for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, l = e.pendingLanes; 0 < l;) {
            var o = 31 - ot(l), i = 1 << o, u = a[o];
            -1 === u ? 0 != (i & n) && 0 == (i & r) || (a[o] = pt(i, t)) : u <= t && (e.expiredLanes |= i), l &= ~i;
        } }(e, t); var r = ft(e, e === Lu ? Du : 0); if (0 === r)
            null !== n && Ye(n), e.callbackNode = null, e.callbackPriority = 0;
        else if (t = r & -r, e.callbackPriority !== t) {
            if (null != n && Ye(n), 1 === t)
                0 === e.tag ? function (e) { Ua = !0, Ba(e); }(ss.bind(null, e)) : Ba(ss.bind(null, e)), oa((function () { 0 == (6 & Tu) && Va(); })), n = null;
            else {
                switch (wt(r)) {
                    case 1:
                        n = Ze;
                        break;
                    case 4:
                        n = et;
                        break;
                    case 16:
                    default:
                        n = tt;
                        break;
                    case 536870912: n = rt;
                }
                n = Ls(n, ls.bind(null, e));
            }
            e.callbackPriority = t, e.callbackNode = n;
        } } function ls(e, t) { if (Zu = -1, es = 0, 0 != (6 & Tu))
            throw Error(l(327)); var n = e.callbackNode; if (Es() && e.callbackNode !== n)
            return null; var r = ft(e, e === Lu ? Du : 0); if (0 === r)
            return null; if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t)
            t = gs(e, r);
        else {
            t = r;
            var a = Tu;
            Tu |= 2;
            var o = ms();
            for (Lu === e && Du === t || (Hu = null, $u = Je() + 500, ps(e, t));;)
                try {
                    bs();
                    break;
                }
                catch (t) {
                    hs(e, t);
                }
            kl(), _u.current = o, Tu = a, null !== Ru ? t = 0 : (Lu = null, Du = 0, t = Mu);
        } if (0 !== t) {
            if (2 === t && 0 !== (a = ht(e)) && (r = a, t = os(e, a)), 1 === t)
                throw n = ju, ps(e, 0), us(e, r), as(e, Je()), n;
            if (6 === t)
                us(e, r);
            else {
                if (a = e.current.alternate, 0 == (30 & r) && !function (e) { for (var t = e;;) {
                    if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                            for (var r = 0; r < n.length; r++) {
                                var a = n[r], l = a.getSnapshot;
                                a = a.value;
                                try {
                                    if (!ir(l(), a))
                                        return !1;
                                }
                                catch (e) {
                                    return !1;
                                }
                            }
                    }
                    if (n = t.child, 16384 & t.subtreeFlags && null !== n)
                        n.return = t, t = n;
                    else {
                        if (t === e)
                            break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e)
                                return !0;
                            t = t.return;
                        }
                        t.sibling.return = t.return, t = t.sibling;
                    }
                } return !0; }(a) && (2 === (t = gs(e, r)) && 0 !== (o = ht(e)) && (r = o, t = os(e, o)), 1 === t))
                    throw n = ju, ps(e, 0), us(e, r), as(e, Je()), n;
                switch (e.finishedWork = a, e.finishedLanes = r, t) {
                    case 0:
                    case 1: throw Error(l(345));
                    case 2:
                    case 5:
                        Ss(e, Bu, Hu);
                        break;
                    case 3:
                        if (us(e, r), (130023424 & r) === r && 10 < (t = Vu + 500 - Je())) {
                            if (0 !== ft(e, 0))
                                break;
                            if (((a = e.suspendedLanes) & r) !== r) {
                                ts(), e.pingedLanes |= e.suspendedLanes & a;
                                break;
                            }
                            e.timeoutHandle = ra(Ss.bind(null, e, Bu, Hu), t);
                            break;
                        }
                        Ss(e, Bu, Hu);
                        break;
                    case 4:
                        if (us(e, r), (4194240 & r) === r)
                            break;
                        for (t = e.eventTimes, a = -1; 0 < r;) {
                            var i = 31 - ot(r);
                            o = 1 << i, (i = t[i]) > a && (a = i), r &= ~o;
                        }
                        if (r = a, 10 < (r = (120 > (r = Je() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Cu(r / 1960)) - r)) {
                            e.timeoutHandle = ra(Ss.bind(null, e, Bu, Hu), r);
                            break;
                        }
                        Ss(e, Bu, Hu);
                        break;
                    default: throw Error(l(329));
                }
            }
        } return as(e, Je()), e.callbackNode === n ? ls.bind(null, e) : null; } function os(e, t) { var n = Au; return e.current.memoizedState.isDehydrated && (ps(e, t).flags |= 256), 2 !== (e = gs(e, t)) && (t = Bu, Bu = n, null !== t && is(t)), e; } function is(e) { null === Bu ? Bu = e : Bu.push.apply(Bu, e); } function us(e, t) { for (t &= ~Uu, t &= ~Iu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
            var n = 31 - ot(t), r = 1 << n;
            e[n] = -1, t &= ~r;
        } } function ss(e) { if (0 != (6 & Tu))
            throw Error(l(327)); Es(); var t = ft(e, 0); if (0 == (1 & t))
            return as(e, Je()), null; var n = gs(e, t); if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && (t = r, n = os(e, r));
        } if (1 === n)
            throw n = ju, ps(e, 0), us(e, t), as(e, Je()), n; if (6 === n)
            throw Error(l(345)); return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ss(e, Bu, Hu), as(e, Je()), null; } function cs(e, t) { var n = Tu; Tu |= 1; try {
            return e(t);
        }
        finally {
            0 === (Tu = n) && ($u = Je() + 500, Ua && Va());
        } } function ds(e) { null !== Ku && 0 === Ku.tag && 0 == (6 & Tu) && Es(); var t = Tu; Tu |= 1; var n = Nu.transition, r = bt; try {
            if (Nu.transition = null, bt = 1, e)
                return e();
        }
        finally {
            bt = r, Nu.transition = n, 0 == (6 & (Tu = t)) && Va();
        } } function fs() { zu = Ou.current, Ca(Ou); } function ps(e, t) { e.finishedWork = null, e.finishedLanes = 0; var n = e.timeoutHandle; if (-1 !== n && (e.timeoutHandle = -1, aa(n)), null !== Ru)
            for (n = Ru.return; null !== n;) {
                var r = n;
                switch (tl(r), r.tag) {
                    case 1:
                        null != (r = r.type.childContextTypes) && za();
                        break;
                    case 3:
                        ao(), Ca(Ta), Ca(Na), co();
                        break;
                    case 5:
                        oo(r);
                        break;
                    case 4:
                        ao();
                        break;
                    case 13:
                    case 19:
                        Ca(io);
                        break;
                    case 10:
                        Sl(r.type._context);
                        break;
                    case 22:
                    case 23: fs();
                }
                n = n.return;
            } if (Lu = e, Ru = e = Os(e.current, null), Du = zu = t, Mu = 0, ju = null, Uu = Iu = Fu = 0, Bu = Au = null, null !== _l) {
            for (t = 0; t < _l.length; t++)
                if (null !== (r = (n = _l[t]).interleaved)) {
                    n.interleaved = null;
                    var a = r.next, l = n.pending;
                    if (null !== l) {
                        var o = l.next;
                        l.next = a, r.next = o;
                    }
                    n.pending = r;
                }
            _l = null;
        } return e; } function hs(e, t) { for (;;) {
            var n = Ru;
            try {
                if (kl(), fo.current = oi, yo) {
                    for (var r = mo.memoizedState; null !== r;) {
                        var a = r.queue;
                        null !== a && (a.pending = null), r = r.next;
                    }
                    yo = !1;
                }
                if (ho = 0, go = vo = mo = null, bo = !1, wo = 0, Pu.current = null, null === n || null === n.return) {
                    Mu = 1, ju = t, Ru = null;
                    break;
                }
                e: {
                    var o = e, i = n.return, u = n, s = t;
                    if (t = Du, u.flags |= 32768, null !== s && "object" == typeof s && "function" == typeof s.then) {
                        var c = s, d = u, f = d.tag;
                        if (0 == (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                            var p = d.alternate;
                            p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null);
                        }
                        var h = gi(i);
                        if (null !== h) {
                            h.flags &= -257, yi(h, i, u, 0, t), 1 & h.mode && vi(o, c, t), s = c;
                            var m = (t = h).updateQueue;
                            if (null === m) {
                                var v = new Set;
                                v.add(s), t.updateQueue = v;
                            }
                            else
                                m.add(s);
                            break e;
                        }
                        if (0 == (1 & t)) {
                            vi(o, c, t), vs();
                            break e;
                        }
                        s = Error(l(426));
                    }
                    else if (al && 1 & u.mode) {
                        var g = gi(i);
                        if (null !== g) {
                            0 == (65536 & g.flags) && (g.flags |= 256), yi(g, i, u, 0, t), hl(ci(s, u));
                            break e;
                        }
                    }
                    o = s = ci(s, u), 4 !== Mu && (Mu = 2), null === Au ? Au = [o] : Au.push(o), o = i;
                    do {
                        switch (o.tag) {
                            case 3:
                                o.flags |= 65536, t &= -t, o.lanes |= t, jl(o, hi(0, s, t));
                                break e;
                            case 1:
                                u = s;
                                var y = o.type, b = o.stateNode;
                                if (0 == (128 & o.flags) && ("function" == typeof y.getDerivedStateFromError || null !== b && "function" == typeof b.componentDidCatch && (null === qu || !qu.has(b)))) {
                                    o.flags |= 65536, t &= -t, o.lanes |= t, jl(o, mi(o, u, t));
                                    break e;
                                }
                        }
                        o = o.return;
                    } while (null !== o);
                }
                ks(n);
            }
            catch (e) {
                t = e, Ru === n && null !== n && (Ru = n = n.return);
                continue;
            }
            break;
        } } function ms() { var e = _u.current; return _u.current = oi, null === e ? oi : e; } function vs() { 0 !== Mu && 3 !== Mu && 2 !== Mu || (Mu = 4), null === Lu || 0 == (268435455 & Fu) && 0 == (268435455 & Iu) || us(Lu, Du); } function gs(e, t) { var n = Tu; Tu |= 2; var r = ms(); for (Lu === e && Du === t || (Hu = null, ps(e, t));;)
            try {
                ys();
                break;
            }
            catch (t) {
                hs(e, t);
            } if (kl(), Tu = n, _u.current = r, null !== Ru)
            throw Error(l(261)); return Lu = null, Du = 0, Mu; } function ys() { for (; null !== Ru;)
            ws(Ru); } function bs() { for (; null !== Ru && !Ke();)
            ws(Ru); } function ws(e) { var t = xu(e.alternate, e, zu); e.memoizedProps = e.pendingProps, null === t ? ks(e) : Ru = t, Pu.current = null; } function ks(e) { var t = e; do {
            var n = t.alternate;
            if (e = t.return, 0 == (32768 & t.flags)) {
                if (null !== (n = Yi(n, t, zu)))
                    return void (Ru = n);
            }
            else {
                if (null !== (n = Ki(n, t)))
                    return n.flags &= 32767, void (Ru = n);
                if (null === e)
                    return Mu = 6, void (Ru = null);
                e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            }
            if (null !== (t = t.sibling))
                return void (Ru = t);
            Ru = t = e;
        } while (null !== t); 0 === Mu && (Mu = 5); } function Ss(e, t, n) { var r = bt, a = Nu.transition; try {
            Nu.transition = null, bt = 1, function (e, t, n, r) { do {
                Es();
            } while (null !== Ku); if (0 != (6 & Tu))
                throw Error(l(327)); n = e.finishedWork; var a = e.finishedLanes; if (null === n)
                return null; if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
                throw Error(l(177)); e.callbackNode = null, e.callbackPriority = 0; var o = n.lanes | n.childLanes; if (function (e, t) { var n = e.pendingLanes & ~t; e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements; var r = e.eventTimes; for (e = e.expirationTimes; 0 < n;) {
                var a = 31 - ot(n), l = 1 << a;
                t[a] = 0, r[a] = -1, e[a] = -1, n &= ~l;
            } }(e, o), e === Lu && (Ru = Lu = null, Du = 0), 0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags) || Yu || (Yu = !0, Ls(tt, (function () { return Es(), null; }))), o = 0 != (15990 & n.flags), 0 != (15990 & n.subtreeFlags) || o) {
                o = Nu.transition, Nu.transition = null;
                var i = bt;
                bt = 1;
                var u = Tu;
                Tu |= 4, Pu.current = null, function (e, t) { if (ea = Ht, pr(e = fr())) {
                    if ("selectionStart" in e)
                        var n = { start: e.selectionStart, end: e.selectionEnd };
                    else
                        e: {
                            var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                                n = r.anchorNode;
                                var a = r.anchorOffset, o = r.focusNode;
                                r = r.focusOffset;
                                try {
                                    n.nodeType, o.nodeType;
                                }
                                catch (e) {
                                    n = null;
                                    break e;
                                }
                                var i = 0, u = -1, s = -1, c = 0, d = 0, f = e, p = null;
                                t: for (;;) {
                                    for (var h; f !== n || 0 !== a && 3 !== f.nodeType || (u = i + a), f !== o || 0 !== r && 3 !== f.nodeType || (s = i + r), 3 === f.nodeType && (i += f.nodeValue.length), null !== (h = f.firstChild);)
                                        p = f, f = h;
                                    for (;;) {
                                        if (f === e)
                                            break t;
                                        if (p === n && ++c === a && (u = i), p === o && ++d === r && (s = i), null !== (h = f.nextSibling))
                                            break;
                                        p = (f = p).parentNode;
                                    }
                                    f = h;
                                }
                                n = -1 === u || -1 === s ? null : { start: u, end: s };
                            }
                            else
                                n = null;
                        }
                    n = n || { start: 0, end: 0 };
                }
                else
                    n = null; for (ta = { focusedElem: e, selectionRange: n }, Ht = !1, Zi = t; null !== Zi;)
                    if (e = (t = Zi).child, 0 != (1028 & t.subtreeFlags) && null !== e)
                        e.return = t, Zi = e;
                    else
                        for (; null !== Zi;) {
                            t = Zi;
                            try {
                                var m = t.alternate;
                                if (0 != (1024 & t.flags))
                                    switch (t.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                        case 5:
                                        case 6:
                                        case 4:
                                        case 17: break;
                                        case 1:
                                            if (null !== m) {
                                                var v = m.memoizedProps, g = m.memoizedState, y = t.stateNode, b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? v : vl(t.type, v), g);
                                                y.__reactInternalSnapshotBeforeUpdate = b;
                                            }
                                            break;
                                        case 3:
                                            var w = t.stateNode.containerInfo;
                                            1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
                                            break;
                                        default: throw Error(l(163));
                                    }
                            }
                            catch (e) {
                                Cs(t, t.return, e);
                            }
                            if (null !== (e = t.sibling)) {
                                e.return = t.return, Zi = e;
                                break;
                            }
                            Zi = t.return;
                        } m = nu, nu = !1; }(e, n), gu(n, e), hr(ta), Ht = !!ea, ta = ea = null, e.current = n, bu(n, e, a), Xe(), Tu = u, bt = i, Nu.transition = o;
            }
            else
                e.current = n; if (Yu && (Yu = !1, Ku = e, Xu = a), 0 === (o = e.pendingLanes) && (qu = null), function (e) { if (lt && "function" == typeof lt.onCommitFiberRoot)
                try {
                    lt.onCommitFiberRoot(at, e, void 0, 128 == (128 & e.current.flags));
                }
                catch (e) { } }(n.stateNode), as(e, Je()), null !== t)
                for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r((a = t[n]).value, { componentStack: a.stack, digest: a.digest }); if (Wu)
                throw Wu = !1, e = Qu, Qu = null, e; 0 != (1 & Xu) && 0 !== e.tag && Es(), 0 != (1 & (o = e.pendingLanes)) ? e === Gu ? Ju++ : (Ju = 0, Gu = e) : Ju = 0, Va(); }(e, t, n, r);
        }
        finally {
            Nu.transition = a, bt = r;
        } return null; } function Es() { if (null !== Ku) {
            var e = wt(Xu), t = Nu.transition, n = bt;
            try {
                if (Nu.transition = null, bt = 16 > e ? 16 : e, null === Ku)
                    var r = !1;
                else {
                    if (e = Ku, Ku = null, Xu = 0, 0 != (6 & Tu))
                        throw Error(l(331));
                    var a = Tu;
                    for (Tu |= 4, Zi = e.current; null !== Zi;) {
                        var o = Zi, i = o.child;
                        if (0 != (16 & Zi.flags)) {
                            var u = o.deletions;
                            if (null !== u) {
                                for (var s = 0; s < u.length; s++) {
                                    var c = u[s];
                                    for (Zi = c; null !== Zi;) {
                                        var d = Zi;
                                        switch (d.tag) {
                                            case 0:
                                            case 11:
                                            case 15: ru(8, d, o);
                                        }
                                        var f = d.child;
                                        if (null !== f)
                                            f.return = d, Zi = f;
                                        else
                                            for (; null !== Zi;) {
                                                var p = (d = Zi).sibling, h = d.return;
                                                if (ou(d), d === c) {
                                                    Zi = null;
                                                    break;
                                                }
                                                if (null !== p) {
                                                    p.return = h, Zi = p;
                                                    break;
                                                }
                                                Zi = h;
                                            }
                                    }
                                }
                                var m = o.alternate;
                                if (null !== m) {
                                    var v = m.child;
                                    if (null !== v) {
                                        m.child = null;
                                        do {
                                            var g = v.sibling;
                                            v.sibling = null, v = g;
                                        } while (null !== v);
                                    }
                                }
                                Zi = o;
                            }
                        }
                        if (0 != (2064 & o.subtreeFlags) && null !== i)
                            i.return = o, Zi = i;
                        else
                            e: for (; null !== Zi;) {
                                if (0 != (2048 & (o = Zi).flags))
                                    switch (o.tag) {
                                        case 0:
                                        case 11:
                                        case 15: ru(9, o, o.return);
                                    }
                                var y = o.sibling;
                                if (null !== y) {
                                    y.return = o.return, Zi = y;
                                    break e;
                                }
                                Zi = o.return;
                            }
                    }
                    var b = e.current;
                    for (Zi = b; null !== Zi;) {
                        var w = (i = Zi).child;
                        if (0 != (2064 & i.subtreeFlags) && null !== w)
                            w.return = i, Zi = w;
                        else
                            e: for (i = b; null !== Zi;) {
                                if (0 != (2048 & (u = Zi).flags))
                                    try {
                                        switch (u.tag) {
                                            case 0:
                                            case 11:
                                            case 15: au(9, u);
                                        }
                                    }
                                    catch (e) {
                                        Cs(u, u.return, e);
                                    }
                                if (u === i) {
                                    Zi = null;
                                    break e;
                                }
                                var k = u.sibling;
                                if (null !== k) {
                                    k.return = u.return, Zi = k;
                                    break e;
                                }
                                Zi = u.return;
                            }
                    }
                    if (Tu = a, Va(), lt && "function" == typeof lt.onPostCommitFiberRoot)
                        try {
                            lt.onPostCommitFiberRoot(at, e);
                        }
                        catch (e) { }
                    r = !0;
                }
                return r;
            }
            finally {
                bt = n, Nu.transition = t;
            }
        } return !1; } function xs(e, t, n) { e = Ol(e, t = hi(0, t = ci(n, t), 1), 1), t = ts(), null !== e && (gt(e, 1, t), as(e, t)); } function Cs(e, t, n) { if (3 === e.tag)
            xs(e, e, n);
        else
            for (; null !== t;) {
                if (3 === t.tag) {
                    xs(t, e, n);
                    break;
                }
                if (1 === t.tag) {
                    var r = t.stateNode;
                    if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === qu || !qu.has(r))) {
                        t = Ol(t, e = mi(t, e = ci(n, e), 1), 1), e = ts(), null !== t && (gt(t, 1, e), as(t, e));
                        break;
                    }
                }
                t = t.return;
            } } function _s(e, t, n) { var r = e.pingCache; null !== r && r.delete(t), t = ts(), e.pingedLanes |= e.suspendedLanes & n, Lu === e && (Du & n) === n && (4 === Mu || 3 === Mu && (130023424 & Du) === Du && 500 > Je() - Vu ? ps(e, 0) : Uu |= n), as(e, t); } function Ps(e, t) { 0 === t && (0 == (1 & e.mode) ? t = 1 : (t = ct, 0 == (130023424 & (ct <<= 1)) && (ct = 4194304))); var n = ts(); null !== (e = Tl(e, t)) && (gt(e, t, n), as(e, n)); } function Ns(e) { var t = e.memoizedState, n = 0; null !== t && (n = t.retryLane), Ps(e, n); } function Ts(e, t) { var n = 0; switch (e.tag) {
            case 13:
                var r = e.stateNode, a = e.memoizedState;
                null !== a && (n = a.retryLane);
                break;
            case 19:
                r = e.stateNode;
                break;
            default: throw Error(l(314));
        } null !== r && r.delete(t), Ps(e, n); } function Ls(e, t) { return qe(e, t); } function Rs(e, t, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null; } function Ds(e, t, n, r) { return new Rs(e, t, n, r); } function zs(e) { return !(!(e = e.prototype) || !e.isReactComponent); } function Os(e, t) { var n = e.alternate; return null === n ? ((n = Ds(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n; } function Ms(e, t, n, r, a, o) { var i = 2; if (r = e, "function" == typeof e)
            zs(e) && (i = 1);
        else if ("string" == typeof e)
            i = 5;
        else
            e: switch (e) {
                case E: return js(n.children, a, o, t);
                case x:
                    i = 8, a |= 8;
                    break;
                case C: return (e = Ds(12, n, t, 2 | a)).elementType = C, e.lanes = o, e;
                case T: return (e = Ds(13, n, t, a)).elementType = T, e.lanes = o, e;
                case L: return (e = Ds(19, n, t, a)).elementType = L, e.lanes = o, e;
                case z: return Fs(n, a, o, t);
                default:
                    if ("object" == typeof e && null !== e)
                        switch (e.$$typeof) {
                            case _:
                                i = 10;
                                break e;
                            case P:
                                i = 9;
                                break e;
                            case N:
                                i = 11;
                                break e;
                            case R:
                                i = 14;
                                break e;
                            case D:
                                i = 16, r = null;
                                break e;
                        }
                    throw Error(l(130, null == e ? e : typeof e, ""));
            } return (t = Ds(i, n, t, a)).elementType = e, t.type = r, t.lanes = o, t; } function js(e, t, n, r) { return (e = Ds(7, e, r, t)).lanes = n, e; } function Fs(e, t, n, r) { return (e = Ds(22, e, r, t)).elementType = z, e.lanes = n, e.stateNode = { isHidden: !1 }, e; } function Is(e, t, n) { return (e = Ds(6, e, null, t)).lanes = n, e; } function Us(e, t, n) { return (t = Ds(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t; } function As(e, t, n, r, a) { this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vt(0), this.expirationTimes = vt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vt(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null; } function Bs(e, t, n, r, a, l, o, i, u) { return e = new As(e, t, n, i, u), 1 === t ? (t = 1, !0 === l && (t |= 8)) : t = 0, l = Ds(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Rl(l), e; } function Vs(e) { if (!e)
            return Pa; e: {
            if (Ve(e = e._reactInternals) !== e || 1 !== e.tag)
                throw Error(l(170));
            var t = e;
            do {
                switch (t.tag) {
                    case 3:
                        t = t.stateNode.context;
                        break e;
                    case 1: if (Da(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
                }
                t = t.return;
            } while (null !== t);
            throw Error(l(171));
        } if (1 === e.tag) {
            var n = e.type;
            if (Da(n))
                return Ma(e, n, t);
        } return t; } function $s(e, t, n, r, a, l, o, i, u) { return (e = Bs(n, r, !0, e, 0, l, 0, i, u)).context = Vs(null), n = e.current, (l = zl(r = ts(), a = ns(n))).callback = null != t ? t : null, Ol(n, l, a), e.current.lanes = a, gt(e, a, r), as(e, r), e; } function Hs(e, t, n, r) { var a = t.current, l = ts(), o = ns(a); return n = Vs(n), null === t.context ? t.context = n : t.pendingContext = n, (t = zl(l, o)).payload = { element: e }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Ol(a, t, o)) && (rs(e, a, o, l), Ml(e, a, o)), o; } function Ws(e) { return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null; } function Qs(e, t) { if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
        } } function qs(e, t) { Qs(e, t), (e = e.alternate) && Qs(e, t); } xu = function (e, t, n) { if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ta.current)
                wi = !0;
            else {
                if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                    return wi = !1, function (e, t, n) { switch (t.tag) {
                        case 3:
                            Li(t), pl();
                            break;
                        case 5:
                            lo(t);
                            break;
                        case 1:
                            Da(t.type) && ja(t);
                            break;
                        case 4:
                            ro(t, t.stateNode.containerInfo);
                            break;
                        case 10:
                            var r = t.type._context, a = t.memoizedProps.value;
                            _a(gl, r._currentValue), r._currentValue = a;
                            break;
                        case 13:
                            if (null !== (r = t.memoizedState))
                                return null !== r.dehydrated ? (_a(io, 1 & io.current), t.flags |= 128, null) : 0 != (n & t.child.childLanes) ? Ii(e, t, n) : (_a(io, 1 & io.current), null !== (e = Wi(e, t, n)) ? e.sibling : null);
                            _a(io, 1 & io.current);
                            break;
                        case 19:
                            if (r = 0 != (n & t.childLanes), 0 != (128 & e.flags)) {
                                if (r)
                                    return $i(e, t, n);
                                t.flags |= 128;
                            }
                            if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), _a(io, io.current), r)
                                break;
                            return null;
                        case 22:
                        case 23: return t.lanes = 0, Ci(e, t, n);
                    } return Wi(e, t, n); }(e, t, n);
                wi = 0 != (131072 & e.flags);
            }
        else
            wi = !1, al && 0 != (1048576 & t.flags) && Za(t, Qa, t.index); switch (t.lanes = 0, t.tag) {
            case 2:
                var r = t.type;
                Hi(e, t), e = t.pendingProps;
                var a = Ra(t, Na.current);
                xl(t, n), a = xo(null, t, r, e, a, n);
                var o = Co();
                return t.flags |= 1, "object" == typeof a && null !== a && "function" == typeof a.render && void 0 === a.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Da(r) ? (o = !0, ja(t)) : o = !1, t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, Rl(t), a.updater = Bl, t.stateNode = a, a._reactInternals = t, Wl(t, r, e, n), t = Ti(null, t, r, !0, o, n)) : (t.tag = 0, al && o && el(t), ki(null, t, a, n), t = t.child), t;
            case 16:
                r = t.elementType;
                e: {
                    switch (Hi(e, t), e = t.pendingProps, r = (a = r._init)(r._payload), t.type = r, a = t.tag = function (e) { if ("function" == typeof e)
                        return zs(e) ? 1 : 0; if (null != e) {
                        if ((e = e.$$typeof) === N)
                            return 11;
                        if (e === R)
                            return 14;
                    } return 2; }(r), e = vl(r, e), a) {
                        case 0:
                            t = Pi(null, t, r, e, n);
                            break e;
                        case 1:
                            t = Ni(null, t, r, e, n);
                            break e;
                        case 11:
                            t = Si(null, t, r, e, n);
                            break e;
                        case 14:
                            t = Ei(null, t, r, vl(r.type, e), n);
                            break e;
                    }
                    throw Error(l(306, r, ""));
                }
                return t;
            case 0: return r = t.type, a = t.pendingProps, Pi(e, t, r, a = t.elementType === r ? a : vl(r, a), n);
            case 1: return r = t.type, a = t.pendingProps, Ni(e, t, r, a = t.elementType === r ? a : vl(r, a), n);
            case 3:
                e: {
                    if (Li(t), null === e)
                        throw Error(l(387));
                    r = t.pendingProps, a = (o = t.memoizedState).element, Dl(e, t), Fl(t, r, null, n);
                    var i = t.memoizedState;
                    if (r = i.element, o.isDehydrated) {
                        if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, 256 & t.flags) {
                            t = Ri(e, t, r, n, a = ci(Error(l(423)), t));
                            break e;
                        }
                        if (r !== a) {
                            t = Ri(e, t, r, n, a = ci(Error(l(424)), t));
                            break e;
                        }
                        for (rl = sa(t.stateNode.containerInfo.firstChild), nl = t, al = !0, ll = null, n = Jl(t, null, r, n), t.child = n; n;)
                            n.flags = -3 & n.flags | 4096, n = n.sibling;
                    }
                    else {
                        if (pl(), r === a) {
                            t = Wi(e, t, n);
                            break e;
                        }
                        ki(e, t, r, n);
                    }
                    t = t.child;
                }
                return t;
            case 5: return lo(t), null === e && sl(t), r = t.type, a = t.pendingProps, o = null !== e ? e.memoizedProps : null, i = a.children, na(r, a) ? i = null : null !== o && na(r, o) && (t.flags |= 32), _i(e, t), ki(e, t, i, n), t.child;
            case 6: return null === e && sl(t), null;
            case 13: return Ii(e, t, n);
            case 4: return ro(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Xl(t, null, r, n) : ki(e, t, r, n), t.child;
            case 11: return r = t.type, a = t.pendingProps, Si(e, t, r, a = t.elementType === r ? a : vl(r, a), n);
            case 7: return ki(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12: return ki(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, i = a.value, _a(gl, r._currentValue), r._currentValue = i, null !== o)
                        if (ir(o.value, i)) {
                            if (o.children === a.children && !Ta.current) {
                                t = Wi(e, t, n);
                                break e;
                            }
                        }
                        else
                            for (null !== (o = t.child) && (o.return = t); null !== o;) {
                                var u = o.dependencies;
                                if (null !== u) {
                                    i = o.child;
                                    for (var s = u.firstContext; null !== s;) {
                                        if (s.context === r) {
                                            if (1 === o.tag) {
                                                (s = zl(-1, n & -n)).tag = 2;
                                                var c = o.updateQueue;
                                                if (null !== c) {
                                                    var d = (c = c.shared).pending;
                                                    null === d ? s.next = s : (s.next = d.next, d.next = s), c.pending = s;
                                                }
                                            }
                                            o.lanes |= n, null !== (s = o.alternate) && (s.lanes |= n), El(o.return, n, t), u.lanes |= n;
                                            break;
                                        }
                                        s = s.next;
                                    }
                                }
                                else if (10 === o.tag)
                                    i = o.type === t.type ? null : o.child;
                                else if (18 === o.tag) {
                                    if (null === (i = o.return))
                                        throw Error(l(341));
                                    i.lanes |= n, null !== (u = i.alternate) && (u.lanes |= n), El(i, n, t), i = o.sibling;
                                }
                                else
                                    i = o.child;
                                if (null !== i)
                                    i.return = o;
                                else
                                    for (i = o; null !== i;) {
                                        if (i === t) {
                                            i = null;
                                            break;
                                        }
                                        if (null !== (o = i.sibling)) {
                                            o.return = i.return, i = o;
                                            break;
                                        }
                                        i = i.return;
                                    }
                                o = i;
                            }
                    ki(e, t, a.children, n), t = t.child;
                }
                return t;
            case 9: return a = t.type, r = t.pendingProps.children, xl(t, n), r = r(a = Cl(a)), t.flags |= 1, ki(e, t, r, n), t.child;
            case 14: return a = vl(r = t.type, t.pendingProps), Ei(e, t, r, a = vl(r.type, a), n);
            case 15: return xi(e, t, t.type, t.pendingProps, n);
            case 17: return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : vl(r, a), Hi(e, t), t.tag = 1, Da(r) ? (e = !0, ja(t)) : e = !1, xl(t, n), $l(t, r, a), Wl(t, r, a, n), Ti(null, t, r, !0, e, n);
            case 19: return $i(e, t, n);
            case 22: return Ci(e, t, n);
        } throw Error(l(156, t.tag)); }; var Ys = "function" == typeof reportError ? reportError : function (e) { console.error(e); }; function Ks(e) { this._internalRoot = e; } function Xs(e) { this._internalRoot = e; } function Js(e) { return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType); } function Gs(e) { return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue)); } function Zs() { } function ec(e, t, n, r, a) { var l = n._reactRootContainer; if (l) {
            var o = l;
            if ("function" == typeof a) {
                var i = a;
                a = function () { var e = Ws(o); i.call(e); };
            }
            Hs(t, o, e, a);
        }
        else
            o = function (e, t, n, r, a) { if (a) {
                if ("function" == typeof r) {
                    var l = r;
                    r = function () { var e = Ws(o); l.call(e); };
                }
                var o = $s(t, r, e, 0, null, !1, 0, "", Zs);
                return e._reactRootContainer = o, e[ha] = o.current, Vr(8 === e.nodeType ? e.parentNode : e), ds(), o;
            } for (; a = e.lastChild;)
                e.removeChild(a); if ("function" == typeof r) {
                var i = r;
                r = function () { var e = Ws(u); i.call(e); };
            } var u = Bs(e, 0, !1, null, 0, !1, 0, "", Zs); return e._reactRootContainer = u, e[ha] = u.current, Vr(8 === e.nodeType ? e.parentNode : e), ds((function () { Hs(t, u, n, r); })), u; }(n, t, e, a, r); return Ws(o); } Xs.prototype.render = Ks.prototype.render = function (e) { var t = this._internalRoot; if (null === t)
            throw Error(l(409)); Hs(e, t, null, null); }, Xs.prototype.unmount = Ks.prototype.unmount = function () { var e = this._internalRoot; if (null !== e) {
            this._internalRoot = null;
            var t = e.containerInfo;
            ds((function () { Hs(null, e, null, null); })), t[ha] = null;
        } }, Xs.prototype.unstable_scheduleHydration = function (e) { if (e) {
            var t = xt();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < zt.length && 0 !== t && t < zt[n].priority; n++)
                ;
            zt.splice(n, 0, e), 0 === n && Ft(e);
        } }, kt = function (e) { switch (e.tag) {
            case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                    var n = dt(t.pendingLanes);
                    0 !== n && (yt(t, 1 | n), as(t, Je()), 0 == (6 & Tu) && ($u = Je() + 500, Va()));
                }
                break;
            case 13: ds((function () { var t = Tl(e, 1); if (null !== t) {
                var n = ts();
                rs(t, e, 1, n);
            } })), qs(e, 1);
        } }, St = function (e) { if (13 === e.tag) {
            var t = Tl(e, 134217728);
            null !== t && rs(t, e, 134217728, ts()), qs(e, 134217728);
        } }, Et = function (e) { if (13 === e.tag) {
            var t = ns(e), n = Tl(e, t);
            null !== n && rs(n, e, t, ts()), qs(e, t);
        } }, xt = function () { return bt; }, Ct = function (e, t) { var n = bt; try {
            return bt = e, t();
        }
        finally {
            bt = n;
        } }, Se = function (e, t, n) { switch (t) {
            case "input":
                if (G(e, n), t = n.name, "radio" === n.type && null != t) {
                    for (n = e; n.parentNode;)
                        n = n.parentNode;
                    for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var a = ka(r);
                            if (!a)
                                throw Error(l(90));
                            q(r), G(r, a);
                        }
                    }
                }
                break;
            case "textarea":
                le(e, n);
                break;
            case "select": null != (t = n.value) && ne(e, !!n.multiple, t, !1);
        } }, Ne = cs, Te = ds; var tc = { usingClientEntryPoint: !1, Events: [ba, wa, ka, _e, Pe, cs] }, nc = { findFiberByHostInstance: ya, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, rc = { bundleType: nc.bundleType, version: nc.version, rendererPackageName: nc.rendererPackageName, rendererConfig: nc.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: w.ReactCurrentDispatcher, findHostInstanceByFiber: function (e) { return null === (e = We(e)) ? null : e.stateNode; }, findFiberByHostInstance: nc.findFiberByHostInstance || function () { return null; }, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" }; if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
            var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!ac.isDisabled && ac.supportsFiber)
                try {
                    at = ac.inject(rc), lt = ac;
                }
                catch (ce) { }
        } t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc, t.createPortal = function (e, t) { var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null; if (!Js(t))
            throw Error(l(200)); return function (e, t, n) { var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null; return { $$typeof: S, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n }; }(e, t, null, n); }, t.createRoot = function (e, t) { if (!Js(e))
            throw Error(l(299)); var n = !1, r = "", a = Ys; return null != t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (a = t.onRecoverableError)), t = Bs(e, 1, !1, null, 0, n, 0, r, a), e[ha] = t.current, Vr(8 === e.nodeType ? e.parentNode : e), new Ks(t); }, t.findDOMNode = function (e) { if (null == e)
            return null; if (1 === e.nodeType)
            return e; var t = e._reactInternals; if (void 0 === t) {
            if ("function" == typeof e.render)
                throw Error(l(188));
            throw e = Object.keys(e).join(","), Error(l(268, e));
        } return null === (e = We(t)) ? null : e.stateNode; }, t.flushSync = function (e) { return ds(e); }, t.hydrate = function (e, t, n) { if (!Gs(t))
            throw Error(l(200)); return ec(null, e, t, !0, n); }, t.hydrateRoot = function (e, t, n) { if (!Js(e))
            throw Error(l(405)); var r = null != n && n.hydratedSources || null, a = !1, o = "", i = Ys; if (null != n && (!0 === n.unstable_strictMode && (a = !0), void 0 !== n.identifierPrefix && (o = n.identifierPrefix), void 0 !== n.onRecoverableError && (i = n.onRecoverableError)), t = $s(t, null, e, 1, null != n ? n : null, a, 0, o, i), e[ha] = t.current, Vr(e), r)
            for (e = 0; e < r.length; e++)
                a = (a = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a); return new Xs(t); }, t.render = function (e, t, n) { if (!Gs(t))
            throw Error(l(200)); return ec(null, e, t, !1, n); }, t.unmountComponentAtNode = function (e) { if (!Gs(e))
            throw Error(l(40)); return !!e._reactRootContainer && (ds((function () { ec(null, null, e, !1, (function () { e._reactRootContainer = null, e[ha] = null; })); })), !0); }, t.unstable_batchedUpdates = cs, t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) { if (!Gs(n))
            throw Error(l(200)); if (null == e || void 0 === e._reactInternals)
            throw Error(l(38)); return ec(e, t, n, !1, r); }, t.version = "18.2.0-next-9e3b772b8-20220608"; }, 745: function (e, t, n) { var r = n(935); t.s = r.createRoot, r.hydrateRoot; }, 935: function (e, t, n) { !function e() { if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            }
            catch (e) {
                console.error(e);
            } }(), e.exports = n(448); }, 251: function (e, t, n) { var r = n(294), a = Symbol.for("react.element"), l = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty), o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 }; function u(e, t, n) { var r, u = {}, s = null, c = null; for (r in void 0 !== n && (s = "" + n), void 0 !== t.key && (s = "" + t.key), void 0 !== t.ref && (c = t.ref), t)
            l.call(t, r) && !i.hasOwnProperty(r) && (u[r] = t[r]); if (e && e.defaultProps)
            for (r in t = e.defaultProps)
                void 0 === u[r] && (u[r] = t[r]); return { $$typeof: a, type: e, key: s, ref: c, props: u, _owner: o.current }; } t.jsx = u, t.jsxs = u; }, 408: function (e, t) { var n = Symbol.for("react.element"), r = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), u = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.iterator, h = { isMounted: function () { return !1; }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, m = Object.assign, v = {}; function g(e, t, n) { this.props = e, this.context = t, this.refs = v, this.updater = n || h; } function y() { } function b(e, t, n) { this.props = e, this.context = t, this.refs = v, this.updater = n || h; } g.prototype.isReactComponent = {}, g.prototype.setState = function (e, t) { if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, e, t, "setState"); }, g.prototype.forceUpdate = function (e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate"); }, y.prototype = g.prototype; var w = b.prototype = new y; w.constructor = b, m(w, g.prototype), w.isPureReactComponent = !0; var k = Array.isArray, S = Object.prototype.hasOwnProperty, E = { current: null }, x = { key: !0, ref: !0, __self: !0, __source: !0 }; function C(e, t, r) { var a, l = {}, o = null, i = null; if (null != t)
            for (a in void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (o = "" + t.key), t)
                S.call(t, a) && !x.hasOwnProperty(a) && (l[a] = t[a]); var u = arguments.length - 2; if (1 === u)
            l.children = r;
        else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++)
                s[c] = arguments[c + 2];
            l.children = s;
        } if (e && e.defaultProps)
            for (a in u = e.defaultProps)
                void 0 === l[a] && (l[a] = u[a]); return { $$typeof: n, type: e, key: o, ref: i, props: l, _owner: E.current }; } function _(e) { return "object" == typeof e && null !== e && e.$$typeof === n; } var P = /\/+/g; function N(e, t) { return "object" == typeof e && null !== e && null != e.key ? function (e) { var t = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, (function (e) { return t[e]; })); }("" + e.key) : t.toString(36); } function T(e, t, a, l, o) { var i = typeof e; "undefined" !== i && "boolean" !== i || (e = null); var u = !1; if (null === e)
            u = !0;
        else
            switch (i) {
                case "string":
                case "number":
                    u = !0;
                    break;
                case "object": switch (e.$$typeof) {
                    case n:
                    case r: u = !0;
                }
            } if (u)
            return o = o(u = e), e = "" === l ? "." + N(u, 0) : l, k(o) ? (a = "", null != e && (a = e.replace(P, "$&/") + "/"), T(o, t, a, "", (function (e) { return e; }))) : null != o && (_(o) && (o = function (e, t) { return { $$typeof: n, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }; }(o, a + (!o.key || u && u.key === o.key ? "" : ("" + o.key).replace(P, "$&/") + "/") + e)), t.push(o)), 1; if (u = 0, l = "" === l ? "." : l + ":", k(e))
            for (var s = 0; s < e.length; s++) {
                var c = l + N(i = e[s], s);
                u += T(i, t, a, c, o);
            }
        else if (c = function (e) { return null === e || "object" != typeof e ? null : "function" == typeof (e = p && e[p] || e["@@iterator"]) ? e : null; }(e), "function" == typeof c)
            for (e = c.call(e), s = 0; !(i = e.next()).done;)
                u += T(i = i.value, t, a, c = l + N(i, s++), o);
        else if ("object" === i)
            throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."); return u; } function L(e, t, n) { if (null == e)
            return e; var r = [], a = 0; return T(e, r, "", "", (function (e) { return t.call(n, e, a++); })), r; } function R(e) { if (-1 === e._status) {
            var t = e._result;
            (t = t()).then((function (t) { 0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t); }), (function (t) { 0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t); })), -1 === e._status && (e._status = 0, e._result = t);
        } if (1 === e._status)
            return e._result.default; throw e._result; } var D = { current: null }, z = { transition: null }, O = { ReactCurrentDispatcher: D, ReactCurrentBatchConfig: z, ReactCurrentOwner: E }; t.Children = { map: L, forEach: function (e, t, n) { L(e, (function () { t.apply(this, arguments); }), n); }, count: function (e) { var t = 0; return L(e, (function () { t++; })), t; }, toArray: function (e) { return L(e, (function (e) { return e; })) || []; }, only: function (e) { if (!_(e))
                throw Error("React.Children.only expected to receive a single React element child."); return e; } }, t.Component = g, t.Fragment = a, t.Profiler = o, t.PureComponent = b, t.StrictMode = l, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O, t.cloneElement = function (e, t, r) { if (null == e)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + "."); var a = m({}, e.props), l = e.key, o = e.ref, i = e._owner; if (null != t) {
            if (void 0 !== t.ref && (o = t.ref, i = E.current), void 0 !== t.key && (l = "" + t.key), e.type && e.type.defaultProps)
                var u = e.type.defaultProps;
            for (s in t)
                S.call(t, s) && !x.hasOwnProperty(s) && (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
        } var s = arguments.length - 2; if (1 === s)
            a.children = r;
        else if (1 < s) {
            u = Array(s);
            for (var c = 0; c < s; c++)
                u[c] = arguments[c + 2];
            a.children = u;
        } return { $$typeof: n, type: e.type, key: l, ref: o, props: a, _owner: i }; }, t.createContext = function (e) { return (e = { $$typeof: u, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }).Provider = { $$typeof: i, _context: e }, e.Consumer = e; }, t.createElement = C, t.createFactory = function (e) { var t = C.bind(null, e); return t.type = e, t; }, t.createRef = function () { return { current: null }; }, t.forwardRef = function (e) { return { $$typeof: s, render: e }; }, t.isValidElement = _, t.lazy = function (e) { return { $$typeof: f, _payload: { _status: -1, _result: e }, _init: R }; }, t.memo = function (e, t) { return { $$typeof: d, type: e, compare: void 0 === t ? null : t }; }, t.startTransition = function (e) { var t = z.transition; z.transition = {}; try {
            e();
        }
        finally {
            z.transition = t;
        } }, t.unstable_act = function () { throw Error("act(...) is not supported in production builds of React."); }, t.useCallback = function (e, t) { return D.current.useCallback(e, t); }, t.useContext = function (e) { return D.current.useContext(e); }, t.useDebugValue = function () { }, t.useDeferredValue = function (e) { return D.current.useDeferredValue(e); }, t.useEffect = function (e, t) { return D.current.useEffect(e, t); }, t.useId = function () { return D.current.useId(); }, t.useImperativeHandle = function (e, t, n) { return D.current.useImperativeHandle(e, t, n); }, t.useInsertionEffect = function (e, t) { return D.current.useInsertionEffect(e, t); }, t.useLayoutEffect = function (e, t) { return D.current.useLayoutEffect(e, t); }, t.useMemo = function (e, t) { return D.current.useMemo(e, t); }, t.useReducer = function (e, t, n) { return D.current.useReducer(e, t, n); }, t.useRef = function (e) { return D.current.useRef(e); }, t.useState = function (e) { return D.current.useState(e); }, t.useSyncExternalStore = function (e, t, n) { return D.current.useSyncExternalStore(e, t, n); }, t.useTransition = function () { return D.current.useTransition(); }, t.version = "18.2.0"; }, 294: function (e, t, n) { e.exports = n(408); }, 893: function (e, t, n) { e.exports = n(251); }, 53: function (e, t) { function n(e, t) { var n = e.length; e.push(t); e: for (; 0 < n;) {
            var r = n - 1 >>> 1, a = e[r];
            if (!(0 < l(a, t)))
                break e;
            e[r] = t, e[n] = a, n = r;
        } } function r(e) { return 0 === e.length ? null : e[0]; } function a(e) { if (0 === e.length)
            return null; var t = e[0], n = e.pop(); if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
                var i = 2 * (r + 1) - 1, u = e[i], s = i + 1, c = e[s];
                if (0 > l(u, n))
                    s < a && 0 > l(c, u) ? (e[r] = c, e[s] = n, r = s) : (e[r] = u, e[i] = n, r = i);
                else {
                    if (!(s < a && 0 > l(c, n)))
                        break e;
                    e[r] = c, e[s] = n, r = s;
                }
            }
        } return t; } function l(e, t) { var n = e.sortIndex - t.sortIndex; return 0 !== n ? n : e.id - t.id; } if ("object" == typeof performance && "function" == typeof performance.now) {
            var o = performance;
            t.unstable_now = function () { return o.now(); };
        }
        else {
            var i = Date, u = i.now();
            t.unstable_now = function () { return i.now() - u; };
        } var s = [], c = [], d = 1, f = null, p = 3, h = !1, m = !1, v = !1, g = "function" == typeof setTimeout ? setTimeout : null, y = "function" == typeof clearTimeout ? clearTimeout : null, b = "undefined" != typeof setImmediate ? setImmediate : null; function w(e) { for (var t = r(c); null !== t;) {
            if (null === t.callback)
                a(c);
            else {
                if (!(t.startTime <= e))
                    break;
                a(c), t.sortIndex = t.expirationTime, n(s, t);
            }
            t = r(c);
        } } function k(e) { if (v = !1, w(e), !m)
            if (null !== r(s))
                m = !0, z(S);
            else {
                var t = r(c);
                null !== t && O(k, t.startTime - e);
            } } function S(e, n) { m = !1, v && (v = !1, y(_), _ = -1), h = !0; var l = p; try {
            for (w(n), f = r(s); null !== f && (!(f.expirationTime > n) || e && !T());) {
                var o = f.callback;
                if ("function" == typeof o) {
                    f.callback = null, p = f.priorityLevel;
                    var i = o(f.expirationTime <= n);
                    n = t.unstable_now(), "function" == typeof i ? f.callback = i : f === r(s) && a(s), w(n);
                }
                else
                    a(s);
                f = r(s);
            }
            if (null !== f)
                var u = !0;
            else {
                var d = r(c);
                null !== d && O(k, d.startTime - n), u = !1;
            }
            return u;
        }
        finally {
            f = null, p = l, h = !1;
        } } "undefined" != typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling); var E, x = !1, C = null, _ = -1, P = 5, N = -1; function T() { return !(t.unstable_now() - N < P); } function L() { if (null !== C) {
            var e = t.unstable_now();
            N = e;
            var n = !0;
            try {
                n = C(!0, e);
            }
            finally {
                n ? E() : (x = !1, C = null);
            }
        }
        else
            x = !1; } if ("function" == typeof b)
            E = function () { b(L); };
        else if ("undefined" != typeof MessageChannel) {
            var R = new MessageChannel, D = R.port2;
            R.port1.onmessage = L, E = function () { D.postMessage(null); };
        }
        else
            E = function () { g(L, 0); }; function z(e) { C = e, x || (x = !0, E()); } function O(e, n) { _ = g((function () { e(t.unstable_now()); }), n); } t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function (e) { e.callback = null; }, t.unstable_continueExecution = function () { m || h || (m = !0, z(S)); }, t.unstable_forceFrameRate = function (e) { 0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < e ? Math.floor(1e3 / e) : 5; }, t.unstable_getCurrentPriorityLevel = function () { return p; }, t.unstable_getFirstCallbackNode = function () { return r(s); }, t.unstable_next = function (e) { switch (p) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default: t = p;
        } var n = p; p = t; try {
            return e();
        }
        finally {
            p = n;
        } }, t.unstable_pauseExecution = function () { }, t.unstable_requestPaint = function () { }, t.unstable_runWithPriority = function (e, t) { switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: break;
            default: e = 3;
        } var n = p; p = e; try {
            return t();
        }
        finally {
            p = n;
        } }, t.unstable_scheduleCallback = function (e, a, l) { var o = t.unstable_now(); switch (l = "object" == typeof l && null !== l && "number" == typeof (l = l.delay) && 0 < l ? o + l : o, e) {
            case 1:
                var i = -1;
                break;
            case 2:
                i = 250;
                break;
            case 5:
                i = 1073741823;
                break;
            case 4:
                i = 1e4;
                break;
            default: i = 5e3;
        } return e = { id: d++, callback: a, priorityLevel: e, startTime: l, expirationTime: i = l + i, sortIndex: -1 }, l > o ? (e.sortIndex = l, n(c, e), null === r(s) && e === r(c) && (v ? (y(_), _ = -1) : v = !0, O(k, l - o))) : (e.sortIndex = i, n(s, e), m || h || (m = !0, z(S))), e; }, t.unstable_shouldYield = T, t.unstable_wrapCallback = function (e) { var t = p; return function () { var n = p; p = t; try {
            return e.apply(this, arguments);
        }
        finally {
            p = n;
        } }; }; }, 840: function (e, t, n) { e.exports = n(53); } }, l = {};
    function o(e) { var t = l[e]; if (void 0 !== t)
        return t.exports; var n = l[e] = { exports: {} }; return a[e](n, n.exports, o), n.exports; }
    o.m = a, t = Object.getPrototypeOf ? function (e) { return Object.getPrototypeOf(e); } : function (e) { return e.__proto__; }, o.t = function (n, r) { if (1 & r && (n = this(n)), 8 & r)
        return n; if ("object" == typeof n && n) {
        if (4 & r && n.__esModule)
            return n;
        if (16 & r && "function" == typeof n.then)
            return n;
    } var a = Object.create(null); o.r(a); var l = {}; e = e || [null, t({}), t([]), t(t)]; for (var i = 2 & r && n; "object" == typeof i && !~e.indexOf(i); i = t(i))
        Object.getOwnPropertyNames(i).forEach((function (e) { return l[e] = function () { return n[e]; }; })); return l.default = function () { return n; }, o.d(a, l), a; }, o.d = function (e, t) { for (var n in t)
        o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] }); }, o.f = {}, o.e = function (e) { return Promise.all(Object.keys(o.f).reduce((function (t, n) { return (o.f[n](e, t), t); }), [])); }, o.u = function (e) { return e + "." + { 155: "6d3e5b20325867639bad", 392: "cd1de58e66851114fcd2", 787: "1dbdf3c2cb4c183cbc90" }[e] + ".js"; }, o.miniCssF = function (e) { }, o.g = function () { if ("object" == typeof globalThis)
        return globalThis; try {
        return this || new Function("return this")();
    }
    catch (e) {
        if ("object" == typeof window)
            return window;
    } }(), o.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, n = {}, r = "webpack_course:", o.l = function (e, t, a, l) { if (n[e])
        n[e].push(t);
    else {
        var i, u;
        if (void 0 !== a)
            for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
                var d = s[c];
                if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == r + a) {
                    i = d;
                    break;
                }
            }
        i || (u = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, o.nc && i.setAttribute("nonce", o.nc), i.setAttribute("data-webpack", r + a), i.src = e), n[e] = [t];
        var f = function (t, r) { i.onerror = i.onload = null, clearTimeout(p); var a = n[e]; if (delete n[e], i.parentNode && i.parentNode.removeChild(i), a && a.forEach((function (e) { return e(r); })), t)
            return t(r); }, p = setTimeout(f.bind(null, void 0, { type: "timeout", target: i }), 12e4);
        i.onerror = f.bind(null, i.onerror), i.onload = f.bind(null, i.onload), u && document.head.appendChild(i);
    } }, o.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, (function () { var e; o.g.importScripts && (e = o.g.location + ""); var t = o.g.document; if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        if (n.length)
            for (var r = n.length - 1; r > -1 && !e;)
                e = n[r--].src;
    } if (!e)
        throw new Error("Automatic publicPath is not supported in this browser"); e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), o.p = e; })(), (function () { var e = { 179: 0 }; o.f.j = function (t, n) { var r = o.o(e, t) ? e[t] : void 0; if (0 !== r)
        if (r)
            n.push(r[2]);
        else {
            var a = new Promise((function (n, a) { return r = e[t] = [n, a]; }));
            n.push(r[2] = a);
            var l = o.p + o.u(t), i = new Error;
            o.l(l, (function (n) { if (o.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                var a = n && ("load" === n.type ? "missing" : n.type), l = n && n.target && n.target.src;
                i.message = "Loading chunk " + t + " failed.\n(" + a + ": " + l + ")", i.name = "ChunkLoadError", i.type = a, i.request = l, r[1](i);
            } }), "chunk-" + t, t);
        } }; var t = function (t, n) { var r, a, l = n[0], i = n[1], u = n[2], s = 0; if (l.some((function (t) { return 0 !== e[t]; }))) {
        for (r in i)
            o.o(i, r) && (o.m[r] = i[r]);
        u && u(o);
    } for (t && t(n); s < l.length; s++)
        a = l[s], o.o(e, a) && e[a] && e[a][0](), e[a] = 0; }, n = self.webpackChunkwebpack_course = self.webpackChunkwebpack_course || []; n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n)); })(), (function () { var e, t = o(893), n = o(745), r = o(294), a = o.t(r, 2), l = o(935), i = o.t(l, 2); function u() { return u = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, u.apply(this, arguments); } !function (e) { e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"; }(e || (e = {})); var s = "popstate"; function c(e, t) { if (!1 === e || null == e)
        throw new Error(t); } function d(e, t) { if (!e) {
        "undefined" != typeof console && console.warn(t);
        try {
            throw new Error(t);
        }
        catch (e) { }
    } } function f(e, t) { return { usr: e.state, key: e.key, idx: t }; } function p(e, t, n, r) { return void 0 === n && (n = null), u({ pathname: "string" == typeof e ? e : e.pathname, search: "", hash: "" }, "string" == typeof t ? m(t) : t, { state: n, key: t && t.key || r || Math.random().toString(36).substr(2, 8) }); } function h(e) { var _b = e.pathname, t = _b === void 0 ? "/" : _b, _c = e.search, n = _c === void 0 ? "" : _c, _d = e.hash, r = _d === void 0 ? "" : _d; return n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r), t; } function m(e) { var t = {}; if (e) {
        var n_1 = e.indexOf("#");
        n_1 >= 0 && (t.hash = e.substr(n_1), e = e.substr(0, n_1));
        var r_1 = e.indexOf("?");
        r_1 >= 0 && (t.search = e.substr(r_1), e = e.substr(0, r_1)), e && (t.pathname = e);
    } return t; } var v; !function (e) { e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"; }(v || (v = {})); var g = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]); function y(e, t, n, r) { return void 0 === n && (n = []), void 0 === r && (r = {}), e.map((function (e, a) { var l = __spreadArray(__spreadArray([], n, true), [a], false), o = "string" == typeof e.id ? e.id : l.join("-"); if (c(!0 !== e.index || !e.children, "Cannot specify children on an index route"), c(!r[o], 'Found a route id collision on id "' + o + "\".  Route id's must be globally unique within Data Router usages"), function (e) { return !0 === e.index; }(e)) {
        var n_2 = u({}, e, t(e), { id: o });
        return r[o] = n_2, n_2;
    } {
        var n_3 = u({}, e, t(e), { id: o, children: void 0 });
        return r[o] = n_3, e.children && (n_3.children = y(e.children, t, l, r)), n_3;
    } })); } function b(e, t, n) { void 0 === n && (n = "/"); var r = z(("string" == typeof t ? m(t) : t).pathname || "/", n); if (null == r)
        return null; var a = w(e); !function (e) { e.sort((function (e, t) { return e.score !== t.score ? t.score - e.score : function (e, t) { return e.length === t.length && e.slice(0, -1).every((function (e, n) { return e === t[n]; })) ? e[e.length - 1] - t[t.length - 1] : 0; }(e.routesMeta.map((function (e) { return e.childrenIndex; })), t.routesMeta.map((function (e) { return e.childrenIndex; }))); })); }(a); var l = null; for (var e_2 = 0; null == l && e_2 < a.length; ++e_2)
        l = L(a[e_2], D(r)); return l; } function w(e, t, n, r) { void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = ""); var a = function (e, a, l) { var o = { relativePath: void 0 === l ? e.path || "" : l, caseSensitive: !0 === e.caseSensitive, childrenIndex: a, route: e }; o.relativePath.startsWith("/") && (c(o.relativePath.startsWith(r), 'Absolute route path "' + o.relativePath + '" nested under path "' + r + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), o.relativePath = o.relativePath.slice(r.length)); var i = j([r, o.relativePath]), u = n.concat(o); e.children && e.children.length > 0 && (c(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + i + '".'), w(e.children, t, u, i)), (null != e.path || e.index) && t.push({ path: i, score: T(i, e.index), routesMeta: u }); }; return e.forEach((function (e, t) { var n; if ("" !== e.path && null != (n = e.path) && n.includes("?"))
        for (var _b = 0, _c = k(e.path); _b < _c.length; _b++) {
            var n_4 = _c[_b];
            a(e, t, n_4);
        }
    else
        a(e, t); })), t; } function k(e) { var t = e.split("/"); if (0 === t.length)
        return []; var n = t[0], r = t.slice(1), a = n.endsWith("?"), l = n.replace(/\?$/, ""); if (0 === r.length)
        return a ? [l, ""] : [l]; var o = k(r.join("/")), i = []; return i.push.apply(i, o.map((function (e) { return "" === e ? l : [l, e].join("/"); }))), a && i.push.apply(i, o), i.map((function (t) { return e.startsWith("/") && "" === t ? "/" : t; })); } var S = /^:[\w-]+$/, E = 3, x = 2, C = 1, _ = 10, P = -2, N = function (e) { return "*" === e; }; function T(e, t) { var n = e.split("/"), r = n.length; return n.some(N) && (r += P), t && (r += x), n.filter((function (e) { return !N(e); })).reduce((function (e, t) { return e + (S.test(t) ? E : "" === t ? C : _); }), r); } function L(e, t) { var n = e.routesMeta, r = {}, a = "/", l = []; for (var e_3 = 0; e_3 < n.length; ++e_3) {
        var o_1 = n[e_3], i_1 = e_3 === n.length - 1, u_1 = "/" === a ? t : t.slice(a.length) || "/", s_1 = R({ path: o_1.relativePath, caseSensitive: o_1.caseSensitive, end: i_1 }, u_1);
        if (!s_1)
            return null;
        Object.assign(r, s_1.params);
        var c_1 = o_1.route;
        l.push({ params: r, pathname: j([a, s_1.pathname]), pathnameBase: F(j([a, s_1.pathnameBase])), route: c_1 }), "/" !== s_1.pathnameBase && (a = j([a, s_1.pathnameBase]));
    } return l; } function R(e, t) { "string" == typeof e && (e = { path: e, caseSensitive: !1, end: !0 }); var _b = function (e, t, n) { void 0 === t && (t = !1), void 0 === n && (n = !0), d("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".'); var r = [], a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (function (e, t, n) { return (r.push({ paramName: t, isOptional: null != n }), n ? "/?([^\\/]+)?" : "/([^\\/]+)"); })); return e.endsWith("*") ? (r.push({ paramName: "*" }), a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? a += "\\/*$" : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), r]; }(e.path, e.caseSensitive, e.end), n = _b[0], r = _b[1], a = t.match(n); if (!a)
        return null; var l = a[0], o = l.replace(/(.)\/+$/, "$1"), i = a.slice(1); return { params: r.reduce((function (e, t, n) { var r = t.paramName, a = t.isOptional; if ("*" === r) {
            var e_4 = i[n] || "";
            o = l.slice(0, l.length - e_4.length).replace(/(.)\/+$/, "$1");
        } var u = i[n]; return e[r] = a && !u ? void 0 : function (e, t) { try {
            return decodeURIComponent(e);
        }
        catch (n) {
            return d(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + n + ")."), e;
        } }(u || "", r), e; }), {}), pathname: l, pathnameBase: o, pattern: e }; } function D(e) { try {
        return decodeURI(e);
    }
    catch (t) {
        return d(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e;
    } } function z(e, t) { if ("/" === t)
        return e; if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null; var n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n); return r && "/" !== r ? null : e.slice(n) || "/"; } function O(e, t, n, r) { return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the `to." + n + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'; } function M(e) { return e.filter((function (e, t) { return 0 === t || e.route.path && e.route.path.length > 0; })); } var j = function (e) { return e.join("/").replace(/\/\/+/g, "/"); }, F = function (e) { return e.replace(/\/+$/, "").replace(/^\/*/, "/"); }, I = function (e) { return e && "?" !== e ? e.startsWith("?") ? e : "?" + e : ""; }, U = function (e) { return e && "#" !== e ? e.startsWith("#") ? e : "#" + e : ""; }; Error;
        var A = /** @class */ (function () {
            function A(e, t, n, r) {
                void 0 === r && (r = !1), this.status = e, this.statusText = t || "", this.internal = r, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n;
            }
            return A;
        }()); function B(e) { return null != e && "number" == typeof e.status && "string" == typeof e.statusText && "boolean" == typeof e.internal && "data" in e; } var V = ["post", "put", "patch", "delete"], $ = new Set(V), H = __spreadArray(["get"], V, true), W = new Set(H), Q = new Set([301, 302, 303, 307, 308]), q = new Set([307, 308]), Y = { state: "idle", location: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 }, K = { state: "idle", data: void 0, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 }, X = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 }, J = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, G = function (e) { return ({ hasErrorBoundary: Boolean(e.hasErrorBoundary) }); }, Z = "remix-router-transitions"; function ee(e, t, n, r, a, l, o, i) { var s, d; if (o) {
        s = [];
        for (var _b = 0, t_1 = t; _b < t_1.length; _b++) {
            var e_5 = t_1[_b];
            if (s.push(e_5), e_5.route.id === o) {
                d = e_5;
                break;
            }
        }
    }
    else
        s = t, d = t[t.length - 1]; var f = function (e, t, n, r) { var a; void 0 === r && (r = !1), "string" == typeof e ? a = m(e) : (a = u({}, e), c(!a.pathname || !a.pathname.includes("?"), O("?", "pathname", "search", a)), c(!a.pathname || !a.pathname.includes("#"), O("#", "pathname", "hash", a)), c(!a.search || !a.search.includes("#"), O("#", "search", "hash", a))); var l, o = "" === e || "" === a.pathname, i = o ? "/" : a.pathname; if (null == i)
        l = n;
    else {
        var e_6 = t.length - 1;
        if (!r && i.startsWith("..")) {
            var t_2 = i.split("/");
            for (; ".." === t_2[0];)
                t_2.shift(), e_6 -= 1;
            a.pathname = t_2.join("/");
        }
        l = e_6 >= 0 ? t[e_6] : "/";
    } var s = function (e, t) { void 0 === t && (t = "/"); var _b = "string" == typeof e ? m(e) : e, n = _b.pathname, _c = _b.search, r = _c === void 0 ? "" : _c, _d = _b.hash, a = _d === void 0 ? "" : _d, l = n ? n.startsWith("/") ? n : function (e, t) { var n = t.replace(/\/+$/, "").split("/"); return e.split("/").forEach((function (e) { ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e); })), n.length > 1 ? n.join("/") : "/"; }(n, t) : t; return { pathname: l, search: I(r), hash: U(a) }; }(a, l), d = i && "/" !== i && i.endsWith("/"), f = (o || "." === i) && n.endsWith("/"); return s.pathname.endsWith("/") || !d && !f || (s.pathname += "/"), s; }(a || ".", function (e, t) { var n = M(e); return t ? n.map((function (t, n) { return n === e.length - 1 ? t.pathname : t.pathnameBase; })) : n.map((function (e) { return e.pathnameBase; })); }(s, l), z(e.pathname, n) || e.pathname, "path" === i); return null == a && (f.search = e.search, f.hash = e.hash), null != a && "" !== a && "." !== a || !d || !d.route.index || Ee(f.search) || (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), r && "/" !== n && (f.pathname = "/" === f.pathname ? n : j([n, f.pathname])), h(f); } function te(e, t, n, r) { if (!r || !function (e) { return null != e && ("formData" in e && null != e.formData || "body" in e && void 0 !== e.body); }(r))
        return { path: n }; if (r.formMethod && (a = r.formMethod, !W.has(a.toLowerCase())))
        return { path: n, error: he(405, { method: r.formMethod }) }; var a; var l, o, i = function () { return ({ path: n, error: he(400, { type: "invalid-body" }) }); }, u = r.formMethod || "get", s = e ? u.toUpperCase() : u.toLowerCase(), d = ve(n); if (void 0 !== r.body) {
        if ("text/plain" === r.formEncType) {
            if (!we(s))
                return i();
            var e_7 = "string" == typeof r.body ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? Array.from(r.body.entries()).reduce((function (e, t) { var n = t[0], r = t[1]; return "" + e + n + "=" + r + "\n"; }), "") : String(r.body);
            return { path: n, submission: { formMethod: s, formAction: d, formEncType: r.formEncType, formData: void 0, json: void 0, text: e_7 } };
        }
        if ("application/json" === r.formEncType) {
            if (!we(s))
                return i();
            try {
                var e_8 = "string" == typeof r.body ? JSON.parse(r.body) : r.body;
                return { path: n, submission: { formMethod: s, formAction: d, formEncType: r.formEncType, formData: void 0, json: e_8, text: void 0 } };
            }
            catch (e) {
                return i();
            }
        }
    } if (c("function" == typeof FormData, "FormData is not available in this environment"), r.formData)
        l = ue(r.formData), o = r.formData;
    else if (r.body instanceof FormData)
        l = ue(r.body), o = r.body;
    else if (r.body instanceof URLSearchParams)
        l = r.body, o = se(l);
    else if (null == r.body)
        l = new URLSearchParams, o = new FormData;
    else
        try {
            l = new URLSearchParams(r.body), o = se(l);
        }
        catch (e) {
            return i();
        } var f = { formMethod: s, formAction: d, formEncType: r && r.formEncType || "application/x-www-form-urlencoded", formData: o, json: void 0, text: void 0 }; if (we(f.formMethod))
        return { path: n, submission: f }; var p = m(n); return t && p.search && Ee(p.search) && l.append("index", ""), p.search = "?" + l, { path: h(p), submission: f }; } function ne(e, t, n, r, a, l, o, i, s, c, d, f, p, h, m, v) { var g = v ? Object.values(v)[0] : m ? Object.values(m)[0] : void 0, y = e.createURL(t.location), w = e.createURL(a), k = v ? Object.keys(v)[0] : void 0, S = function (e, t) { var n = e; if (t) {
        var r_2 = e.findIndex((function (e) { return e.route.id === t; }));
        r_2 >= 0 && (n = e.slice(0, r_2));
    } return n; }(n, k).filter((function (e, n) { var a = e.route; if (a.lazy)
        return !0; if (null == a.loader)
        return !1; if (l)
        return !!a.loader.hydrate || void 0 === t.loaderData[a.id] && (!t.errors || void 0 === t.errors[a.id]); if (function (e, t, n) { var r = !t || n.route.id !== t.route.id, a = void 0 === e[n.route.id]; return r || a; }(t.loaderData, t.matches[n], e) || i.some((function (t) { return t === e.route.id; })))
        return !0; var s = t.matches[n], c = e; return ae(e, u({ currentUrl: y, currentParams: s.params, nextUrl: w, nextParams: c.params }, r, { actionResult: g, defaultShouldRevalidate: o || y.pathname + y.search === w.pathname + w.search || y.search !== w.search || re(s, c) })); })), E = []; return d.forEach((function (e, a) { if (l || !n.some((function (t) { return t.route.id === e.routeId; })) || c.has(a))
        return; var i = b(p, e.path, h); if (!i)
        return void E.push({ key: a, routeId: e.routeId, path: e.path, matches: null, match: null, controller: null }); var d = t.fetchers.get(a), m = xe(i, e.path), v = !1; v = !f.has(a) && (!!s.includes(a) || (d && "idle" !== d.state && void 0 === d.data ? o : ae(m, u({ currentUrl: y, currentParams: t.matches[t.matches.length - 1].params, nextUrl: w, nextParams: n[n.length - 1].params }, r, { actionResult: g, defaultShouldRevalidate: o })))), v && E.push({ key: a, routeId: e.routeId, path: e.path, matches: i, match: m, controller: new AbortController }); })), [S, E]; } function re(e, t) { var n = e.route.path; return e.pathname !== t.pathname || null != n && n.endsWith("*") && e.params["*"] !== t.params["*"]; } function ae(e, t) { if (e.route.shouldRevalidate) {
        var n_5 = e.route.shouldRevalidate(t);
        if ("boolean" == typeof n_5)
            return n_5;
    } return t.defaultShouldRevalidate; } function le(e, t, n) {
        return __awaiter(this, void 0, void 0, function () { var r, a, l, e_9, t_3; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!e.lazy)
                        return [2 /*return*/];
                    return [4 /*yield*/, e.lazy()];
                case 1:
                    r = _b.sent();
                    if (!e.lazy)
                        return [2 /*return*/];
                    a = n[e.id];
                    c(a, "No route found in manifest");
                    l = {};
                    for (e_9 in r) {
                        t_3 = void 0 !== a[e_9] && "hasErrorBoundary" !== e_9;
                        d(!t_3, 'Route "' + a.id + '" has a static property "' + e_9 + '" defined but its lazy function is also returning a value for this property. The lazy route property "' + e_9 + '" will be ignored.'), t_3 || g.has(e_9) || (l[e_9] = r[e_9]);
                    }
                    Object.assign(a, l), Object.assign(a, u({}, t(a), { lazy: void 0 }));
                    return [2 /*return*/];
            }
        }); });
    } function oe(e, t, n, r, a, l, o, i, u) {
        return __awaiter(this, void 0, void 0, function () { var s, d, f, p, r_3, e_12, t_4, e_13, r_4, e_14, e_10, e_15, a_1, e_16, n_6, r_5, a_2, t_5, _b, _c, e_11, h, m, g; return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    void 0 === u && (u = {});
                    p = function (e) { var r, a = new Promise((function (e, t) { return r = t; })); return f = function () { return r(); }, t.signal.addEventListener("abort", f), Promise.race([e({ request: t, params: n.params, context: u.requestContext }), a]); };
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 10, 11, 12]);
                    r_3 = n.route[e];
                    if (!n.route.lazy) return [3 /*break*/, 7];
                    if (!r_3) return [3 /*break*/, 3];
                    return [4 /*yield*/, Promise.all([p(r_3).catch((function (t) { e_12 = t; })), le(n.route, l, a)])];
                case 2:
                    t_4 = _d.sent();
                    if (e_12)
                        throw e_12;
                    d = t_4[0];
                    return [3 /*break*/, 6];
                case 3: return [4 /*yield*/, le(n.route, l, a)];
                case 4:
                    if (_d.sent(), r_3 = n.route[e], !r_3) {
                        if ("action" === e) {
                            e_13 = new URL(t.url), r_4 = e_13.pathname + e_13.search;
                            throw he(405, { method: t.method, pathname: r_4, routeId: n.route.id });
                        }
                        return [2 /*return*/, { type: v.data, data: void 0 }];
                    }
                    return [4 /*yield*/, p(r_3)];
                case 5:
                    d = _d.sent();
                    _d.label = 6;
                case 6: return [3 /*break*/, 9];
                case 7:
                    if (!r_3) {
                        e_14 = new URL(t.url);
                        throw he(404, { pathname: e_14.pathname + e_14.search });
                    }
                    return [4 /*yield*/, p(r_3)];
                case 8:
                    d = _d.sent();
                    _d.label = 9;
                case 9:
                    c(void 0 !== d, "You defined " + ("action" === e ? "an action" : "a loader") + ' for route "' + n.route.id + "\" but didn't return anything from your `" + e + "` function. Please return a value or `null`.");
                    return [3 /*break*/, 12];
                case 10:
                    e_10 = _d.sent();
                    s = v.error, d = e_10;
                    return [3 /*break*/, 12];
                case 11:
                    f && t.signal.removeEventListener("abort", f);
                    return [7 /*endfinally*/];
                case 12:
                    if (!(null != (h = d) && "number" == typeof h.status && "string" == typeof h.statusText && "object" == typeof h.headers && void 0 !== h.body)) return [3 /*break*/, 22];
                    a_1 = d.status;
                    if (Q.has(a_1)) {
                        e_16 = d.headers.get("Location");
                        if (c(e_16, "Redirects returned/thrown from loaders/actions must have a Location header"), J.test(e_16)) {
                            if (!u.isStaticRequest) {
                                n_6 = new URL(t.url), r_5 = e_16.startsWith("//") ? new URL(n_6.protocol + e_16) : new URL(e_16), a_2 = null != z(r_5.pathname, o);
                                r_5.origin === n_6.origin && a_2 && (e_16 = r_5.pathname + r_5.search + r_5.hash);
                            }
                        }
                        else
                            e_16 = ee(new URL(t.url), r.slice(0, r.indexOf(n) + 1), o, !0, e_16, i);
                        if (u.isStaticRequest)
                            throw d.headers.set("Location", e_16), d;
                        return [2 /*return*/, { type: v.redirect, status: a_1, location: e_16, revalidate: null !== d.headers.get("X-Remix-Revalidate"), reloadDocument: null !== d.headers.get("X-Remix-Reload-Document") }];
                    }
                    if (u.isRouteRequest)
                        throw { type: s === v.error ? v.error : v.data, response: d };
                    _d.label = 13;
                case 13:
                    _d.trys.push([13, 20, , 21]);
                    t_5 = d.headers.get("Content-Type");
                    if (!(t_5 && /\bapplication\/json\b/.test(t_5))) return [3 /*break*/, 17];
                    if (!(null == d.body)) return [3 /*break*/, 14];
                    _c = null;
                    return [3 /*break*/, 16];
                case 14: return [4 /*yield*/, d.json()];
                case 15:
                    _c = _d.sent();
                    _d.label = 16;
                case 16:
                    _b = _c;
                    return [3 /*break*/, 19];
                case 17: return [4 /*yield*/, d.text()];
                case 18:
                    _b = _d.sent();
                    _d.label = 19;
                case 19:
                    e_15 = _b;
                    return [3 /*break*/, 21];
                case 20:
                    e_11 = _d.sent();
                    return [2 /*return*/, { type: v.error, error: e_11 }];
                case 21: return [2 /*return*/, s === v.error ? { type: s, error: new A(a_1, d.statusText, e_15), headers: d.headers } : { type: v.data, data: e_15, statusCode: d.status, headers: d.headers }];
                case 22: return [2 /*return*/, s === v.error ? { type: s, error: d } : function (e) { var t = e; return t && "object" == typeof t && "object" == typeof t.data && "function" == typeof t.subscribe && "function" == typeof t.cancel && "function" == typeof t.resolveData; }(d) ? { type: v.deferred, deferredData: d, statusCode: null == (m = d.init) ? void 0 : m.status, headers: (null == (g = d.init) ? void 0 : g.headers) && new Headers(d.init.headers) } : { type: v.data, data: d }];
            }
        }); });
    } function ie(e, t, n, r) { var a = e.createURL(ve(t)).toString(), l = { signal: n }; if (r && we(r.formMethod)) {
        var e_17 = r.formMethod, t_6 = r.formEncType;
        l.method = e_17.toUpperCase(), "application/json" === t_6 ? (l.headers = new Headers({ "Content-Type": t_6 }), l.body = JSON.stringify(r.json)) : "text/plain" === t_6 ? l.body = r.text : "application/x-www-form-urlencoded" === t_6 && r.formData ? l.body = ue(r.formData) : l.body = r.formData;
    } return new Request(a, l); } function ue(e) { var t = new URLSearchParams; for (var _b = 0, _c = e.entries(); _b < _c.length; _b++) {
        var _d = _c[_b], n_7 = _d[0], r_6 = _d[1];
        t.append(n_7, "string" == typeof r_6 ? r_6 : r_6.name);
    } return t; } function se(e) { var t = new FormData; for (var _b = 0, _c = e.entries(); _b < _c.length; _b++) {
        var _d = _c[_b], n_8 = _d[0], r_7 = _d[1];
        t.append(n_8, r_7);
    } return t; } function ce(e, t, n, r, a, l, o, i) {
        var _b;
        var _c = function (e, t, n, r, a) { var l, o = {}, i = null, u = !1, s = {}; return n.forEach((function (n, d) { var f = t[d].route.id; if (c(!be(n), "Cannot handle redirect results in processLoaderData"), ye(n)) {
            var t_7 = fe(e, f), a_3 = n.error;
            r && (a_3 = Object.values(r)[0], r = void 0), i = i || {}, null == i[t_7.route.id] && (i[t_7.route.id] = a_3), o[f] = void 0, u || (u = !0, l = B(n.error) ? n.error.status : 500), n.headers && (s[f] = n.headers);
        }
        else
            ge(n) ? (a.set(f, n.deferredData), o[f] = n.deferredData.data) : o[f] = n.data, null == n.statusCode || 200 === n.statusCode || u || (l = n.statusCode), n.headers && (s[f] = n.headers); })), r && (i = r, o[Object.keys(r)[0]] = void 0), { loaderData: o, errors: i, statusCode: l || 200, loaderHeaders: s }; }(t, n, r, a, i), s = _c.loaderData, d = _c.errors;
        for (var t_8 = 0; t_8 < l.length; t_8++) {
            var _d = l[t_8], n_9 = _d.key, r_8 = _d.match, a_4 = _d.controller;
            c(void 0 !== o && void 0 !== o[t_8], "Did not find corresponding fetcher result");
            var i_2 = o[t_8];
            if (!a_4 || !a_4.signal.aborted)
                if (ye(i_2)) {
                    var t_9 = fe(e.matches, null == r_8 ? void 0 : r_8.route.id);
                    d && d[t_9.route.id] || (d = u({}, d, (_b = {}, _b[t_9.route.id] = i_2.error, _b))), e.fetchers.delete(n_9);
                }
                else if (be(i_2))
                    c(!1, "Unhandled fetcher revalidation redirect");
                else if (ge(i_2))
                    c(!1, "Unhandled fetcher deferred data");
                else {
                    var t_10 = Ne(i_2.data);
                    e.fetchers.set(n_9, t_10);
                }
        }
        return { loaderData: s, errors: d };
    } function de(e, t, n, r) { var a = u({}, t); for (var _b = 0, n_10 = n; _b < n_10.length; _b++) {
        var l_1 = n_10[_b];
        var n_11 = l_1.route.id;
        if (t.hasOwnProperty(n_11) ? void 0 !== t[n_11] && (a[n_11] = t[n_11]) : void 0 !== e[n_11] && l_1.route.loader && (a[n_11] = e[n_11]), r && r.hasOwnProperty(n_11))
            break;
    } return a; } function fe(e, t) { return (t ? e.slice(0, e.findIndex((function (e) { return e.route.id === t; })) + 1) : __spreadArray([], e, true)).reverse().find((function (e) { return !0 === e.route.hasErrorBoundary; })) || e[0]; } function pe(e) { var t = 1 === e.length ? e[0] : e.find((function (e) { return e.index || !e.path || "/" === e.path; })) || { id: "__shim-error-route__" }; return { matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }], route: t }; } function he(e, t) { var _b = void 0 === t ? {} : t, n = _b.pathname, r = _b.routeId, a = _b.method, l = _b.type, o = "Unknown Server Error", i = "Unknown @remix-run/router error"; return 400 === e ? (o = "Bad Request", a && n && r ? i = "You made a " + a + ' request to "' + n + '" but did not provide a `loader` for route "' + r + '", so there is no way to handle the request.' : "defer-action" === l ? i = "defer() is not supported in actions" : "invalid-body" === l && (i = "Unable to encode submission body")) : 403 === e ? (o = "Forbidden", i = 'Route "' + r + '" does not match URL "' + n + '"') : 404 === e ? (o = "Not Found", i = 'No route matches URL "' + n + '"') : 405 === e && (o = "Method Not Allowed", a && n && r ? i = "You made a " + a.toUpperCase() + ' request to "' + n + '" but did not provide an `action` for route "' + r + '", so there is no way to handle the request.' : a && (i = 'Invalid request method "' + a.toUpperCase() + '"')), new A(e || 500, o, new Error(i), !0); } function me(e) { for (var t_11 = e.length - 1; t_11 >= 0; t_11--) {
        var n_12 = e[t_11];
        if (be(n_12))
            return { result: n_12, idx: t_11 };
    } } function ve(e) { return h(u({}, "string" == typeof e ? m(e) : e, { hash: "" })); } function ge(e) { return e.type === v.deferred; } function ye(e) { return e.type === v.error; } function be(e) { return (e && e.type) === v.redirect; } function we(e) { return $.has(e.toLowerCase()); } function ke(e, t, n, r, a, l) {
        return __awaiter(this, void 0, void 0, function () { var _loop_1, o_2; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _loop_1 = function (o_2) {
                        var i_3, u_2, s_2, d_1, e_18;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    i_3 = n[o_2], u_2 = t[o_2];
                                    if (!u_2)
                                        return [2 /*return*/, "continue"];
                                    s_2 = e.find((function (e) { return e.route.id === u_2.route.id; })), d_1 = null != s_2 && !re(s_2, u_2) && void 0 !== (l && l[u_2.route.id]);
                                    if (!(ge(i_3) && (a || d_1))) return [3 /*break*/, 2];
                                    e_18 = r[o_2];
                                    c(e_18, "Expected an AbortSignal for revalidating fetcher deferred result");
                                    return [4 /*yield*/, Se(i_3, e_18, a).then((function (e) { e && (n[o_2] = e || n[o_2]); }))];
                                case 1:
                                    _c.sent();
                                    _c.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    };
                    o_2 = 0;
                    _b.label = 1;
                case 1:
                    if (!(o_2 < n.length)) return [3 /*break*/, 4];
                    return [5 /*yield**/, _loop_1(o_2)];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    o_2++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        }); });
    } function Se(e, t, n) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    void 0 === n && (n = !1);
                    return [4 /*yield*/, e.deferredData.resolveData(t)];
                case 1:
                    if (!(_b.sent())) {
                        if (n)
                            try {
                                return [2 /*return*/, { type: v.data, data: e.deferredData.unwrappedData }];
                            }
                            catch (e) {
                                return [2 /*return*/, { type: v.error, error: e }];
                            }
                        return [2 /*return*/, { type: v.data, data: e.deferredData.data }];
                    }
                    return [2 /*return*/];
            }
        }); });
    } function Ee(e) { return new URLSearchParams(e).getAll("index").some((function (e) { return "" === e; })); } function xe(e, t) { var n = "string" == typeof t ? m(t).search : t.search; if (e[e.length - 1].route.index && Ee(n || ""))
        return e[e.length - 1]; var r = M(e); return r[r.length - 1]; } function Ce(e) { var t = e.formMethod, n = e.formAction, r = e.formEncType, a = e.text, l = e.formData, o = e.json; if (t && n && r)
        return null != a ? { formMethod: t, formAction: n, formEncType: r, formData: void 0, json: void 0, text: a } : null != l ? { formMethod: t, formAction: n, formEncType: r, formData: l, json: void 0, text: void 0 } : void 0 !== o ? { formMethod: t, formAction: n, formEncType: r, formData: void 0, json: o, text: void 0 } : void 0; } function _e(e, t) { return t ? { state: "loading", location: e, formMethod: t.formMethod, formAction: t.formAction, formEncType: t.formEncType, formData: t.formData, json: t.json, text: t.text } : { state: "loading", location: e, formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0 }; } function Pe(e, t) { return e ? { state: "loading", formMethod: e.formMethod, formAction: e.formAction, formEncType: e.formEncType, formData: e.formData, json: e.json, text: e.text, data: t } : { state: "loading", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: t }; } function Ne(e) { return { state: "idle", formMethod: void 0, formAction: void 0, formEncType: void 0, formData: void 0, json: void 0, text: void 0, data: e }; } function Te() { return Te = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, Te.apply(this, arguments); } Symbol("deferred"); var Le = r.createContext(null), Re = r.createContext(null), De = r.createContext(null), ze = r.createContext(null), Oe = r.createContext({ outlet: null, matches: [], isDataRoute: !1 }), Me = r.createContext(null); function je() { return null != r.useContext(ze); } function Fe(t, n, a, l) { je() || c(!1); var o = r.useContext(De).navigator, i = r.useContext(Oe).matches, u = i[i.length - 1], s = u ? u.params : {}, d = (u && u.pathname, u ? u.pathnameBase : "/"); u && u.route; var f, p = (je() || c(!1), r.useContext(ze).location); if (n) {
        var h;
        var e_19 = "string" == typeof n ? m(n) : n;
        "/" === d || (null == (h = e_19.pathname) ? void 0 : h.startsWith(d)) || c(!1), f = e_19;
    }
    else
        f = p; var v = f.pathname || "/", g = b(t, { pathname: "/" === d ? v : v.slice(d.length) || "/" }), y = function (e, t, n, a) { var l; if (void 0 === t && (t = []), void 0 === n && (n = null), void 0 === a && (a = null), null == e) {
        var o;
        if (null == (o = n) || !o.errors)
            return null;
        e = n.matches;
    } var i = e, u = null == (l = n) ? void 0 : l.errors; if (null != u) {
        var e_20 = i.findIndex((function (e) { return e.route.id && (null == u ? void 0 : u[e.route.id]); }));
        e_20 >= 0 || c(!1), i = i.slice(0, Math.min(i.length, e_20 + 1));
    } var s = !1, d = -1; if (n && a && a.v7_partialHydration)
        for (var e_21 = 0; e_21 < i.length; e_21++) {
            var t_12 = i[e_21];
            if ((t_12.route.HydrateFallback || t_12.route.hydrateFallbackElement) && (d = e_21), t_12.route.id) {
                var e_22 = n.loaderData, r_9 = n.errors, a_5 = t_12.route.loader && void 0 === e_22[t_12.route.id] && (!r_9 || void 0 === r_9[t_12.route.id]);
                if (t_12.route.lazy || a_5) {
                    s = !0, i = d >= 0 ? i.slice(0, d + 1) : [i[0]];
                    break;
                }
            }
        } return i.reduceRight((function (e, a, l) { var o, c = !1, f = null, p = null; var h; n && (o = u && a.route.id ? u[a.route.id] : void 0, f = a.route.errorElement || Ue, s && (d < 0 && 0 === l ? ($e[h = "route-fallback"] || ($e[h] = !0), c = !0, p = null) : d === l && (c = !0, p = a.route.hydrateFallbackElement || null))); var m = t.concat(i.slice(0, l + 1)), v = function () { var t; return t = o ? f : c ? p : a.route.Component ? r.createElement(a.route.Component, null) : a.route.element ? a.route.element : e, r.createElement(Be, { match: a, routeContext: { outlet: e, matches: m, isDataRoute: null != n }, children: t }); }; return n && (a.route.ErrorBoundary || a.route.errorElement || 0 === l) ? r.createElement(Ae, { location: n.location, revalidation: n.revalidation, component: f, error: o, children: v(), routeContext: { outlet: null, matches: m, isDataRoute: !0 } }) : v(); }), null); }(g && g.map((function (e) { return Object.assign({}, e, { params: Object.assign({}, s, e.params), pathname: j([d, o.encodeLocation ? o.encodeLocation(e.pathname).pathname : e.pathname]), pathnameBase: "/" === e.pathnameBase ? d : j([d, o.encodeLocation ? o.encodeLocation(e.pathnameBase).pathname : e.pathnameBase]) }); })), i, a, l); return n && y ? r.createElement(ze.Provider, { value: { location: Te({ pathname: "/", search: "", hash: "", state: null, key: "default" }, f), navigationType: e.Pop } }, y) : y; } function Ie() { var e = function () { var e; var t = r.useContext(Me), n = function (e) { var t = r.useContext(Re); return t || c(!1), t; }(Ve.UseRouteError), a = function (e) { var t = function (e) { var t = r.useContext(Oe); return t || c(!1), t; }(), n = t.matches[t.matches.length - 1]; return n.route.id || c(!1), n.route.id; }(Ve.UseRouteError); return void 0 !== t ? t : null == (e = n.errors) ? void 0 : e[a]; }(), t = B(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, a = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" }; return r.createElement(r.Fragment, null, r.createElement("h2", null, "Unexpected Application Error!"), r.createElement("h3", { style: { fontStyle: "italic" } }, t), n ? r.createElement("pre", { style: a }, n) : null, null); } var Ue = r.createElement(Ie, null);
        var Ae = /** @class */ (function (_super) {
            __extends(Ae, _super);
            function Ae(e) {
                var _this = this;
                _this = _super.call(this, e) || this, _this.state = { location: e.location, revalidation: e.revalidation, error: e.error };
                return _this;
            }
            Ae.getDerivedStateFromError = function (e) { return { error: e }; };
            Ae.getDerivedStateFromProps = function (e, t) { return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? { error: e.error, location: e.location, revalidation: e.revalidation } : { error: void 0 !== e.error ? e.error : t.error, location: t.location, revalidation: e.revalidation || t.revalidation }; };
            Ae.prototype.componentDidCatch = function (e, t) { console.error("React Router caught the following error during render", e, t); };
            Ae.prototype.render = function () { return void 0 !== this.state.error ? r.createElement(Oe.Provider, { value: this.props.routeContext }, r.createElement(Me.Provider, { value: this.state.error, children: this.props.component })) : this.props.children; };
            return Ae;
        }(r.Component)); function Be(e) { var t = e.routeContext, n = e.match, a = e.children, l = r.useContext(Le); return l && l.static && l.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = n.route.id), r.createElement(Oe.Provider, { value: t }, a); } var Ve = function (e) { return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e; }(Ve || {}); var $e = {}; function He(t) { var _b = t.basename, n = _b === void 0 ? "/" : _b, _c = t.children, a = _c === void 0 ? null : _c, l = t.location, _d = t.navigationType, o = _d === void 0 ? e.Pop : _d, i = t.navigator, _f = t.static, u = _f === void 0 ? !1 : _f, s = t.future; je() && c(!1); var d = n.replace(/^\/*/, "/"), f = r.useMemo((function () { return ({ basename: d, navigator: i, static: u, future: Te({ v7_relativeSplatPath: !1 }, s) }); }), [d, s, i, u]); "string" == typeof l && (l = m(l)); var _g = l.pathname, p = _g === void 0 ? "/" : _g, _h = l.search, h = _h === void 0 ? "" : _h, _j = l.hash, v = _j === void 0 ? "" : _j, _k = l.state, g = _k === void 0 ? null : _k, _m = l.key, y = _m === void 0 ? "default" : _m, b = r.useMemo((function () { var e = z(p, d); return null == e ? null : { location: { pathname: e, search: h, hash: v, state: g, key: y }, navigationType: o }; }), [d, p, h, v, g, y, o]); return null == b ? null : r.createElement(De.Provider, { value: f }, r.createElement(ze.Provider, { children: a, value: b })); } function We() { return We = Object.assign ? Object.assign.bind() : function (e) { for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    } return e; }, We.apply(this, arguments); } function Qe(e) { if (!e)
        return null; var t = Object.entries(e), n = {}; for (var _b = 0, t_13 = t; _b < t_13.length; _b++) {
        var _c = t_13[_b], e_23 = _c[0], r_10 = _c[1];
        if (r_10 && "RouteErrorResponse" === r_10.__type)
            n[e_23] = new A(r_10.status, r_10.statusText, r_10.data, !0 === r_10.internal);
        else if (r_10 && "Error" === r_10.__type) {
            if (r_10.__subType) {
                var t_14 = window[r_10.__subType];
                if ("function" == typeof t_14)
                    try {
                        var a_6 = new t_14(r_10.message);
                        a_6.stack = "", n[e_23] = a_6;
                    }
                    catch (e) { }
            }
            if (null == n[e_23]) {
                var t_15 = new Error(r_10.message);
                t_15.stack = "", n[e_23] = t_15;
            }
        }
        else
            n[e_23] = r_10;
    } return n; } a.startTransition, new Promise((function () { })), r.Component, new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]); var qe = r.createContext({ isTransitioning: !1 }), Ye = r.createContext(new Map), Ke = a.startTransition, Xe = i.flushSync; function Je(e) { Xe ? Xe(e) : e(); } a.useId;
        var Ge = /** @class */ (function () {
            function Ge() {
                var _this = this;
                this.status = "pending", this.promise = new Promise((function (e, t) { _this.resolve = function (t) { "pending" === _this.status && (_this.status = "resolved", e(t)); }, _this.reject = function (e) { "pending" === _this.status && (_this.status = "rejected", t(e)); }; }));
            }
            return Ge;
        }()); function Ze(e) { var t = e.routes, n = e.future, r = e.state; return Fe(t, void 0, r, n); } var et, tt, nt; "undefined" != typeof window && void 0 !== window.document && window.document.createElement, (nt = et || (et = {})).UseScrollRestoration = "useScrollRestoration", nt.UseSubmit = "useSubmit", nt.UseSubmitFetcher = "useSubmitFetcher", nt.UseFetcher = "useFetcher", nt.useViewTransitionState = "useViewTransitionState", function (e) { e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"; }(tt || (tt = {})), o.p, o.p; var rt = o(505), at = r.lazy((function () { return o.e(155).then(o.bind(o, 155)); })), lt = (0, r.lazy)((function () { return o.e(392).then(o.bind(o, 392)); })), ot = (0, r.lazy)((function () { return o.e(787).then(o.bind(o, 787)); })), it = document.getElementById("root"); if (!it)
        throw new Error("root not found"); var ut, st, ct = (0, n.s)(it), dt = (ut = [{ path: "/", element: (0, t.jsx)(rt.mr, { ComponentPreviews: at, useInitialHook: function () { var e = (0, r.useState)({ loading: !1, error: !1 }), t = e[0]; return e[1], t; }, children: (0, t.jsx)((function () { var e = (0, r.useState)(0), n = (e[0], e[1]); return (0, r.useCallback)((function (e) { n((function (e) { return e + 1; })); }), []), (0, t.jsx)("div", { children: "IS MOBILE PLATFORM" }); }), {}) }), children: [{ path: "/about", element: (0, t.jsxs)(r.Suspense, { fallback: "Loading...", children: [" ", (0, t.jsx)(lt, {}), " "] }) }, { path: "/shop", element: (0, t.jsxs)(r.Suspense, { fallback: "Loading", children: [" ", (0, t.jsx)(ot, {}), " "] }) }] }], function (t) {
        var _b;
        var n = t.window ? t.window : "undefined" != typeof window ? window : void 0, r = void 0 !== n && void 0 !== n.document && void 0 !== n.document.createElement, a = !r;
        var l;
        if (c(t.routes.length > 0, "You must provide a non-empty routes array to createRouter"), t.mapRouteProperties)
            l = t.mapRouteProperties;
        else if (t.detectErrorBoundary) {
            var e_24 = t.detectErrorBoundary;
            l = function (t) { return ({ hasErrorBoundary: e_24(t) }); };
        }
        else
            l = G;
        var o, i, s = {}, f = y(t.routes, l, void 0, s), h = t.basename || "/", m = u({ v7_fetcherPersist: !1, v7_normalizeFormMethod: !1, v7_partialHydration: !1, v7_prependBasename: !1, v7_relativeSplatPath: !1 }, t.future), g = null, w = new Set, k = null, S = null, E = null, x = null != t.hydrationData, C = b(f, t.history.location, h), _ = null;
        if (null == C) {
            var e_25 = he(404, { pathname: t.history.location.pathname }), _c = pe(f), n_13 = _c.matches, r_11 = _c.route;
            C = n_13, _ = (_b = {}, _b[r_11.id] = e_25, _b);
        }
        var P, N = C.some((function (e) { return e.route.lazy; })), T = C.some((function (e) { return e.route.loader; }));
        if (N)
            i = !1;
        else if (T)
            if (m.v7_partialHydration) {
                var e_26 = t.hydrationData ? t.hydrationData.loaderData : null, n_14 = t.hydrationData ? t.hydrationData.errors : null;
                i = C.every((function (t) { return t.route.loader && !0 !== t.route.loader.hydrate && (e_26 && void 0 !== e_26[t.route.id] || n_14 && void 0 !== n_14[t.route.id]); }));
            }
            else
                i = null != t.hydrationData;
        else
            i = !0;
        var L, R = { historyAction: t.history.action, location: t.history.location, matches: C, initialized: i, navigation: Y, restoreScrollPosition: null == t.hydrationData && null, preventScrollReset: !1, revalidation: "idle", loaderData: t.hydrationData && t.hydrationData.loaderData || {}, actionData: t.hydrationData && t.hydrationData.actionData || null, errors: t.hydrationData && t.hydrationData.errors || _, fetchers: new Map, blockers: new Map }, D = e.Pop, O = !1, M = !1, j = new Map, F = null, I = !1, U = !1, A = [], B = [], V = new Map, $ = 0, H = -1, W = new Map, Q = new Set, re = new Map, ae = new Map, le = new Set, ue = new Map, se = new Map, ve = !1;
        function Ee(e, t) { void 0 === t && (t = {}), R = u({}, R, e); var n = [], r = []; m.v7_fetcherPersist && R.fetchers.forEach((function (e, t) { "idle" === e.state && (le.has(t) ? r.push(t) : n.push(t)); })), __spreadArray([], w, true).forEach((function (e) { return e(R, { deletedFetchers: r, unstable_viewTransitionOpts: t.viewTransitionOpts, unstable_flushSync: !0 === t.flushSync }); })), m.v7_fetcherPersist && (n.forEach((function (e) { return R.fetchers.delete(e); })), r.forEach((function (e) { return Fe(e); }))); }
        function Te(n, r, a) { var l, i; var s, c = (void 0 === a ? {} : a).flushSync, d = null != R.actionData && null != R.navigation.formMethod && we(R.navigation.formMethod) && "loading" === R.navigation.state && !0 !== (null == (l = n.state) ? void 0 : l._isRedirect); s = r.actionData ? Object.keys(r.actionData).length > 0 ? r.actionData : null : d ? R.actionData : null; var p = r.loaderData ? de(R.loaderData, r.loaderData, r.matches || [], r.errors) : R.loaderData, h = R.blockers; h.size > 0 && (h = new Map(h), h.forEach((function (e, t) { return h.set(t, X); }))); var m, v = !0 === O || null != R.navigation.formMethod && we(R.navigation.formMethod) && !0 !== (null == (i = n.state) ? void 0 : i._isRedirect); if (o && (f = o, o = void 0), I || D === e.Pop || (D === e.Push ? t.history.push(n, n.state) : D === e.Replace && t.history.replace(n, n.state)), D === e.Pop) {
            var e_27 = j.get(R.location.pathname);
            e_27 && e_27.has(n.pathname) ? m = { currentLocation: R.location, nextLocation: n } : j.has(n.pathname) && (m = { currentLocation: n, nextLocation: R.location });
        }
        else if (M) {
            var e_28 = j.get(R.location.pathname);
            e_28 ? e_28.add(n.pathname) : (e_28 = new Set([n.pathname]), j.set(R.location.pathname, e_28)), m = { currentLocation: R.location, nextLocation: n };
        } Ee(u({}, r, { actionData: s, loaderData: p, historyAction: D, location: n, initialized: !0, navigation: Y, revalidation: "idle", restoreScrollPosition: qe(n, r.matches || R.matches), preventScrollReset: v, blockers: h }), { viewTransitionOpts: m, flushSync: !0 === c }), D = e.Pop, O = !1, M = !1, I = !1, U = !1, A = [], B = []; }
        function Le(n, r, a) {
            return __awaiter(this, void 0, void 0, function () {
                var i, c, d, p, e_29, _b, t_16, n_15, g, y, w, S, x, t_17, _c, C, _, P;
                var _d, _f;
                return __generator(this, function (_g) {
                    switch (_g.label) {
                        case 0:
                            L && L.abort(), L = null, D = n, I = !0 === (a && a.startUninterruptedRevalidation), function (e, t) { if (k && E) {
                                var n_16 = Qe(e, t);
                                k[n_16] = E();
                            } }(R.location, R.matches), O = !0 === (a && a.preventScrollReset), M = !0 === (a && a.enableViewTransition);
                            i = o || f, c = a && a.overrideNavigation, d = b(i, r, h), p = !0 === (a && a.flushSync);
                            if (!d) {
                                e_29 = he(404, { pathname: r.pathname }), _b = pe(i), t_16 = _b.matches, n_15 = _b.route;
                                return [2 /*return*/, (We(), void Te(r, { matches: t_16, loaderData: {}, errors: (_d = {}, _d[n_15.id] = e_29, _d) }, { flushSync: p }))];
                            }
                            if (R.initialized && !U && (g = R.location, y = r, g.pathname === y.pathname && g.search === y.search && ("" === g.hash ? "" !== y.hash : g.hash === y.hash || "" !== y.hash)) && !(a && a.submission && we(a.submission.formMethod)))
                                return [2 /*return*/, void Te(r, { matches: d }, { flushSync: p })];
                            L = new AbortController;
                            x = ie(t.history, r, L.signal, a && a.submission);
                            if (!(a && a.pendingError)) return [3 /*break*/, 1];
                            S = (_f = {}, _f[fe(d).route.id] = a.pendingError, _f);
                            return [3 /*break*/, 3];
                        case 1:
                            if (!(a && a.submission && we(a.submission.formMethod))) return [3 /*break*/, 3];
                            return [4 /*yield*/, function (t, n, r, a, o) {
                                    return __awaiter(this, void 0, void 0, function () {
                                        var i, u, c, e_30, t_18;
                                        var _b, _c;
                                        return __generator(this, function (_d) {
                                            switch (_d.label) {
                                                case 0:
                                                    void 0 === o && (o = {}), ze();
                                                    u = function (e, t) { return { state: "submitting", location: e, formMethod: t.formMethod, formAction: t.formAction, formEncType: t.formEncType, formData: t.formData, json: t.json, text: t.text }; }(n, r);
                                                    Ee({ navigation: u }, { flushSync: !0 === o.flushSync });
                                                    c = xe(a, n);
                                                    if (!(c.route.action || c.route.lazy)) return [3 /*break*/, 2];
                                                    return [4 /*yield*/, oe("action", t, c, a, s, l, h, m.v7_relativeSplatPath)];
                                                case 1:
                                                    if (i = _d.sent(), t.signal.aborted)
                                                        return [2 /*return*/, { shortCircuited: !0 }];
                                                    return [3 /*break*/, 3];
                                                case 2:
                                                    i = { type: v.error, error: he(405, { method: t.method, pathname: n.pathname, routeId: c.route.id }) };
                                                    _d.label = 3;
                                                case 3:
                                                    if (!be(i)) return [3 /*break*/, 5];
                                                    e_30 = o && null != o.replace ? o.replace : i.location === R.location.pathname + R.location.search;
                                                    return [4 /*yield*/, Re(R, i, { submission: r, replace: e_30 })];
                                                case 4: return [2 /*return*/, (_d.sent(), { shortCircuited: !0 })];
                                                case 5:
                                                    if (ye(i)) {
                                                        t_18 = fe(a, c.route.id);
                                                        return [2 /*return*/, (!0 !== (o && o.replace) && (D = e.Push), { pendingActionData: {}, pendingActionError: (_b = {}, _b[t_18.route.id] = i.error, _b) })];
                                                    }
                                                    if (ge(i))
                                                        throw he(400, { type: "defer-action" });
                                                    return [2 /*return*/, { pendingActionData: (_c = {}, _c[c.route.id] = i.data, _c) }];
                                            }
                                        });
                                    });
                                }(x, r, a.submission, d, { replace: a.replace, flushSync: p })];
                        case 2:
                            t_17 = _g.sent();
                            if (t_17.shortCircuited)
                                return [2 /*return*/];
                            w = t_17.pendingActionData, S = t_17.pendingActionError, c = _e(r, a.submission), p = !1, x = new Request(x.url, { signal: x.signal });
                            _g.label = 3;
                        case 3: return [4 /*yield*/, function (e, n, r, a, l, i, s, c, d, p, v) {
                                return __awaiter(this, void 0, void 0, function () { var g, y, b, _b, w, k, e_31, e_32, S, _c, E, x, C, _, e_33, _d, P, N, T, D; return __generator(this, function (_f) {
                                    switch (_f.label) {
                                        case 0:
                                            g = a || _e(n, l), y = l || i || Ce(g), b = o || f, _b = ne(t.history, R, r, y, n, m.v7_partialHydration && !0 === c, U, A, B, le, re, Q, b, h, p, v), w = _b[0], k = _b[1];
                                            if (We((function (e) { return !(r && r.some((function (t) { return t.route.id === e; }))) || w && w.some((function (t) { return t.route.id === e; })); })), H = ++$, 0 === w.length && 0 === k.length) {
                                                e_31 = Ae();
                                                return [2 /*return*/, (Te(n, u({ matches: r, loaderData: {}, errors: v || null }, p ? { actionData: p } : {}, e_31 ? { fetchers: new Map(R.fetchers) } : {}), { flushSync: d }), { shortCircuited: !0 })];
                                            }
                                            if (!(I || m.v7_partialHydration && c)) {
                                                k.forEach((function (e) { var t = R.fetchers.get(e.key), n = Pe(void 0, t ? t.data : void 0); R.fetchers.set(e.key, n); }));
                                                e_32 = p || R.actionData;
                                                Ee(u({ navigation: g }, e_32 ? 0 === Object.keys(e_32).length ? { actionData: null } : { actionData: e_32 } : {}, k.length > 0 ? { fetchers: new Map(R.fetchers) } : {}), { flushSync: d });
                                            }
                                            k.forEach((function (e) { V.has(e.key) && Ie(e.key), e.controller && V.set(e.key, e.controller); }));
                                            S = function () { return k.forEach((function (e) { return Ie(e.key); })); };
                                            L && L.signal.addEventListener("abort", S);
                                            return [4 /*yield*/, De(R.matches, r, w, k, e)];
                                        case 1:
                                            _c = _f.sent(), E = _c.results, x = _c.loaderResults, C = _c.fetcherResults;
                                            if (e.signal.aborted)
                                                return [2 /*return*/, { shortCircuited: !0 }];
                                            L && L.signal.removeEventListener("abort", S), k.forEach((function (e) { return V.delete(e.key); }));
                                            _ = me(E);
                                            if (!_) return [3 /*break*/, 3];
                                            if (_.idx >= w.length) {
                                                e_33 = k[_.idx - w.length].key;
                                                Q.add(e_33);
                                            }
                                            return [4 /*yield*/, Re(R, _.result, { replace: s })];
                                        case 2: return [2 /*return*/, (_f.sent(), { shortCircuited: !0 })];
                                        case 3:
                                            _d = ce(R, r, w, x, v, k, C, ue), P = _d.loaderData, N = _d.errors;
                                            ue.forEach((function (e, t) { e.subscribe((function (n) { (n || e.done) && ue.delete(t); })); }));
                                            T = Ae(), D = Be(H);
                                            return [2 /*return*/, u({ loaderData: P, errors: N }, T || D || k.length > 0 ? { fetchers: new Map(R.fetchers) } : {})];
                                    }
                                }); });
                            }(x, r, d, c, a && a.submission, a && a.fetcherSubmission, a && a.replace, a && !0 === a.initialHydration, p, w, S)];
                        case 4:
                            _c = _g.sent(), C = _c.shortCircuited, _ = _c.loaderData, P = _c.errors;
                            C || (L = null, Te(r, u({ matches: d }, w ? { actionData: w } : {}, { loaderData: _, errors: P })));
                            return [2 /*return*/];
                    }
                });
            });
        }
        function Re(a, l, o) {
            return __awaiter(this, void 0, void 0, function () { var _b, i, s, d, f, e_34, r_12, m, _c, v, g, y, b, e_35; return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = void 0 === o ? {} : o, i = _b.submission, s = _b.fetcherSubmission, d = _b.replace;
                        l.revalidate && (U = !0);
                        f = p(a.location, l.location, { _isRedirect: !0 });
                        if (c(f, "Expected a location on the redirect navigation"), r) {
                            e_34 = !1;
                            if (l.reloadDocument)
                                e_34 = !0;
                            else if (J.test(l.location)) {
                                r_12 = t.history.createURL(l.location);
                                e_34 = r_12.origin !== n.location.origin || null == z(r_12.pathname, h);
                            }
                            if (e_34)
                                return [2 /*return*/, void (d ? n.location.replace(l.location) : n.location.assign(l.location))];
                        }
                        L = null;
                        m = !0 === d ? e.Replace : e.Push, _c = a.navigation, v = _c.formMethod, g = _c.formAction, y = _c.formEncType;
                        !i && !s && v && g && y && (i = Ce(a.navigation));
                        b = i || s;
                        if (!(q.has(l.status) && b && we(b.formMethod))) return [3 /*break*/, 2];
                        return [4 /*yield*/, Le(m, f, { submission: u({}, b, { formAction: l.location }), preventScrollReset: O })];
                    case 1:
                        _d.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        e_35 = _e(f, i);
                        return [4 /*yield*/, Le(m, f, { overrideNavigation: e_35, fetcherSubmission: s, preventScrollReset: O })];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2 /*return*/];
                }
            }); });
        }
        function De(e, n, r, a, o) {
            return __awaiter(this, void 0, void 0, function () { var i, u, c; return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all(__spreadArray(__spreadArray([], r.map((function (e) { return oe("loader", o, e, n, s, l, h, m.v7_relativeSplatPath); })), true), a.map((function (e) { return e.matches && e.match && e.controller ? oe("loader", ie(t.history, e.path, e.controller.signal), e.match, e.matches, s, l, h, m.v7_relativeSplatPath) : { type: v.error, error: he(404, { pathname: e.path }) }; })), true))];
                    case 1:
                        i = _b.sent(), u = i.slice(0, r.length), c = i.slice(r.length);
                        return [4 /*yield*/, Promise.all([ke(e, r, u, u.map((function () { return o.signal; })), !1, R.loaderData), ke(e, a.map((function (e) { return e.match; })), c, a.map((function (e) { return e.controller ? e.controller.signal : null; })), !0)])];
                    case 2: return [2 /*return*/, (_b.sent(), { results: i, loaderResults: u, fetcherResults: c })];
                }
            }); });
        }
        function ze() { U = !0, A.push.apply(A, We()), re.forEach((function (e, t) { V.has(t) && (B.push(t), Ie(t)); })); }
        function Oe(e, t, n) { void 0 === n && (n = {}), R.fetchers.set(e, t), Ee({ fetchers: new Map(R.fetchers) }, { flushSync: !0 === (n && n.flushSync) }); }
        function Me(e, t, n, r) {
            var _b;
            void 0 === r && (r = {});
            var a = fe(R.matches, t);
            Fe(e), Ee({ errors: (_b = {}, _b[a.route.id] = n, _b), fetchers: new Map(R.fetchers) }, { flushSync: !0 === (r && r.flushSync) });
        }
        function je(e) { return m.v7_fetcherPersist && (ae.set(e, (ae.get(e) || 0) + 1), le.has(e) && le.delete(e)), R.fetchers.get(e) || K; }
        function Fe(e) { var t = R.fetchers.get(e); !V.has(e) || t && "loading" === t.state && W.has(e) || Ie(e), re.delete(e), W.delete(e), Q.delete(e), le.delete(e), R.fetchers.delete(e); }
        function Ie(e) { var t = V.get(e); c(t, "Expected fetch controller: " + e), t.abort(), V.delete(e); }
        function Ue(e) { for (var _b = 0, e_36 = e; _b < e_36.length; _b++) {
            var t_19 = e_36[_b];
            var e_37 = Ne(je(t_19).data);
            R.fetchers.set(t_19, e_37);
        } }
        function Ae() { var e = [], t = !1; for (var _b = 0, Q_1 = Q; _b < Q_1.length; _b++) {
            var n_17 = Q_1[_b];
            var r_13 = R.fetchers.get(n_17);
            c(r_13, "Expected fetcher: " + n_17), "loading" === r_13.state && (Q.delete(n_17), e.push(n_17), t = !0);
        } return Ue(e), t; }
        function Be(e) { var t = []; for (var _b = 0, W_1 = W; _b < W_1.length; _b++) {
            var _c = W_1[_b], n_18 = _c[0], r_14 = _c[1];
            if (r_14 < e) {
                var e_38 = R.fetchers.get(n_18);
                c(e_38, "Expected fetcher: " + n_18), "loading" === e_38.state && (Ie(n_18), W.delete(n_18), t.push(n_18));
            }
        } return Ue(t), t.length > 0; }
        function Ve(e) { R.blockers.delete(e), se.delete(e); }
        function $e(e, t) { var n = R.blockers.get(e) || X; c("unblocked" === n.state && "blocked" === t.state || "blocked" === n.state && "blocked" === t.state || "blocked" === n.state && "proceeding" === t.state || "blocked" === n.state && "unblocked" === t.state || "proceeding" === n.state && "unblocked" === t.state, "Invalid blocker state transition: " + n.state + " -> " + t.state); var r = new Map(R.blockers); r.set(e, t), Ee({ blockers: r }); }
        function He(e) { var t = e.currentLocation, n = e.nextLocation, r = e.historyAction; if (0 === se.size)
            return; se.size > 1 && d(!1, "A router only supports one blocker at a time"); var a = Array.from(se.entries()), _b = a[a.length - 1], l = _b[0], o = _b[1], i = R.blockers.get(l); return i && "proceeding" === i.state ? void 0 : o({ currentLocation: t, nextLocation: n, historyAction: r }) ? l : void 0; }
        function We(e) { var t = []; return ue.forEach((function (n, r) { e && !e(r) || (n.cancel(), t.push(r), ue.delete(r)); })), t; }
        function Qe(e, t) { return S && S(e, t.map((function (e) { return function (e, t) { var n = e.route, r = e.pathname, a = e.params; return { id: n.id, pathname: r, params: a, data: t[n.id], handle: n.handle }; }(e, R.loaderData); }))) || e.key; }
        function qe(e, t) { if (k) {
            var n_19 = Qe(e, t), r_15 = k[n_19];
            if ("number" == typeof r_15)
                return r_15;
        } return null; }
        return P = { get basename() { return h; }, get future() { return m; }, get state() { return R; }, get routes() { return f; }, get window() { return n; }, initialize: function () { if (g = t.history.listen((function (e) { var n = e.action, r = e.location, a = e.delta; if (ve)
                return void (ve = !1); d(0 === se.size || null != a, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."); var l = He({ currentLocation: R.location, nextLocation: r, historyAction: n }); return l && null != a ? (ve = !0, t.history.go(-1 * a), void $e(l, { state: "blocked", location: r, proceed: function () { $e(l, { state: "proceeding", proceed: void 0, reset: void 0, location: r }), t.history.go(a); }, reset: function () { var e = new Map(R.blockers); e.set(l, X), Ee({ blockers: e }); } })) : Le(n, r); })), r) {
                !function (e, t) { try {
                    var n_20 = e.sessionStorage.getItem(Z);
                    if (n_20) {
                        var e_39 = JSON.parse(n_20);
                        for (var _b = 0, _c = Object.entries(e_39 || {}); _b < _c.length; _b++) {
                            var _d = _c[_b], n_21 = _d[0], r_16 = _d[1];
                            r_16 && Array.isArray(r_16) && t.set(n_21, new Set(r_16 || []));
                        }
                    }
                }
                catch (e) { } }(n, j);
                var e_40 = function () { return function (e, t) { if (t.size > 0) {
                    var n_22 = {};
                    for (var _b = 0, t_20 = t; _b < t_20.length; _b++) {
                        var _c = t_20[_b], e_41 = _c[0], r_17 = _c[1];
                        n_22[e_41] = __spreadArray([], r_17, true);
                    }
                    try {
                        e.sessionStorage.setItem(Z, JSON.stringify(n_22));
                    }
                    catch (e) {
                        d(!1, "Failed to save applied view transitions in sessionStorage (" + e + ").");
                    }
                } }(n, j); };
                n.addEventListener("pagehide", e_40), F = function () { return n.removeEventListener("pagehide", e_40); };
            } return R.initialized || Le(e.Pop, R.location, { initialHydration: !0 }), P; }, subscribe: function (e) { return w.add(e), function () { return w.delete(e); }; }, enableScrollRestoration: function (e, t, n) { if (k = e, E = t, S = n || null, !x && R.navigation === Y) {
                x = !0;
                var e_42 = qe(R.location, R.matches);
                null != e_42 && Ee({ restoreScrollPosition: e_42 });
            } return function () { k = null, E = null, S = null; }; }, navigate: function n(r, a) {
                return __awaiter(this, void 0, void 0, function () { var l, _b, o, i, s, c, d, f, v, g, y, b; return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            if ("number" == typeof r)
                                return [2 /*return*/, void t.history.go(r)];
                            l = ee(R.location, R.matches, h, m.v7_prependBasename, r, m.v7_relativeSplatPath, null == a ? void 0 : a.fromRouteId, null == a ? void 0 : a.relative), _b = te(m.v7_normalizeFormMethod, !1, l, a), o = _b.path, i = _b.submission, s = _b.error, c = R.location, d = p(R.location, o, a && a.state);
                            d = u({}, d, t.history.encodeLocation(d));
                            f = a && null != a.replace ? a.replace : void 0, v = e.Push;
                            !0 === f ? v = e.Replace : !1 === f || null != i && we(i.formMethod) && i.formAction === R.location.pathname + R.location.search && (v = e.Replace);
                            g = a && "preventScrollReset" in a ? !0 === a.preventScrollReset : void 0, y = !0 === (a && a.unstable_flushSync), b = He({ currentLocation: c, nextLocation: d, historyAction: v });
                            if (!!b) return [3 /*break*/, 2];
                            return [4 /*yield*/, Le(v, d, { submission: i, pendingError: s, preventScrollReset: g, replace: a && a.replace, enableViewTransition: a && a.unstable_viewTransition, flushSync: y })];
                        case 1: return [2 /*return*/, _c.sent()];
                        case 2:
                            $e(b, { state: "blocked", location: d, proceed: function () { $e(b, { state: "proceeding", proceed: void 0, reset: void 0, location: d }), n(r, a); }, reset: function () { var e = new Map(R.blockers); e.set(b, X), Ee({ blockers: e }); } });
                            return [2 /*return*/];
                    }
                }); });
            }, fetch: function (e, n, r, i) { if (a)
                throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."); V.has(e) && Ie(e); var u = !0 === (i && i.unstable_flushSync), d = o || f, p = ee(R.location, R.matches, h, m.v7_prependBasename, r, m.v7_relativeSplatPath, n, null == i ? void 0 : i.relative), v = b(d, p, h); if (!v)
                return void Me(e, n, he(404, { pathname: p }), { flushSync: u }); var _b = te(m.v7_normalizeFormMethod, !0, p, i), g = _b.path, y = _b.submission, w = _b.error; if (w)
                return void Me(e, n, w, { flushSync: u }); var k = xe(v, g); O = !0 === (i && i.preventScrollReset), y && we(y.formMethod) ? function (e, n, r, a, i, u, d) {
                return __awaiter(this, void 0, void 0, function () {
                    var t_21, p, v, g, y, w, k, S, E, x, C, _, _b, P, N, T, _c, z, O, M, j, e_43, _d, F, I, t_22;
                    var _f;
                    return __generator(this, function (_g) {
                        switch (_g.label) {
                            case 0:
                                if (ze(), re.delete(e), !a.route.action && !a.route.lazy) {
                                    t_21 = he(405, { method: d.formMethod, pathname: r, routeId: n });
                                    return [2 /*return*/, void Me(e, n, t_21, { flushSync: u })];
                                }
                                p = R.fetchers.get(e);
                                Oe(e, function (e, t) { return { state: "submitting", formMethod: e.formMethod, formAction: e.formAction, formEncType: e.formEncType, formData: e.formData, json: e.json, text: e.text, data: t ? t.data : void 0 }; }(d, p), { flushSync: u });
                                v = new AbortController, g = ie(t.history, r, v.signal, d);
                                V.set(e, v);
                                y = $;
                                return [4 /*yield*/, oe("action", g, a, i, s, l, h, m.v7_relativeSplatPath)];
                            case 1:
                                w = _g.sent();
                                if (g.signal.aborted)
                                    return [2 /*return*/, void (V.get(e) === v && V.delete(e))];
                                if (m.v7_fetcherPersist && le.has(e)) {
                                    if (be(w) || ye(w))
                                        return [2 /*return*/, void Oe(e, Ne(void 0))];
                                }
                                else {
                                    if (be(w))
                                        return [2 /*return*/, (V.delete(e), H > y ? void Oe(e, Ne(void 0)) : (Q.add(e), Oe(e, Pe(d)), Re(R, w, { fetcherSubmission: d })))];
                                    if (ye(w))
                                        return [2 /*return*/, void Me(e, n, w.error)];
                                }
                                if (ge(w))
                                    throw he(400, { type: "defer-action" });
                                k = R.navigation.location || R.location, S = ie(t.history, k, v.signal), E = o || f, x = "idle" !== R.navigation.state ? b(E, R.navigation.location, h) : R.matches;
                                c(x, "Didn't find any matches after fetcher action");
                                C = ++$;
                                W.set(e, C);
                                _ = Pe(d, w.data);
                                R.fetchers.set(e, _);
                                _b = ne(t.history, R, x, d, k, !1, U, A, B, le, re, Q, E, h, (_f = {}, _f[a.route.id] = w.data, _f), void 0), P = _b[0], N = _b[1];
                                N.filter((function (t) { return t.key !== e; })).forEach((function (e) { var t = e.key, n = R.fetchers.get(t), r = Pe(void 0, n ? n.data : void 0); R.fetchers.set(t, r), V.has(t) && Ie(t), e.controller && V.set(t, e.controller); })), Ee({ fetchers: new Map(R.fetchers) });
                                T = function () { return N.forEach((function (e) { return Ie(e.key); })); };
                                v.signal.addEventListener("abort", T);
                                return [4 /*yield*/, De(R.matches, x, P, N, S)];
                            case 2:
                                _c = _g.sent(), z = _c.results, O = _c.loaderResults, M = _c.fetcherResults;
                                if (v.signal.aborted)
                                    return [2 /*return*/];
                                v.signal.removeEventListener("abort", T), W.delete(e), V.delete(e), N.forEach((function (e) { return V.delete(e.key); }));
                                j = me(z);
                                if (j) {
                                    if (j.idx >= P.length) {
                                        e_43 = N[j.idx - P.length].key;
                                        Q.add(e_43);
                                    }
                                    return [2 /*return*/, Re(R, j.result)];
                                }
                                _d = ce(R, R.matches, P, O, void 0, N, M, ue), F = _d.loaderData, I = _d.errors;
                                if (R.fetchers.has(e)) {
                                    t_22 = Ne(w.data);
                                    R.fetchers.set(e, t_22);
                                }
                                Be(C), "loading" === R.navigation.state && C > H ? (c(D, "Expected pending action"), L && L.abort(), Te(R.navigation.location, { matches: x, loaderData: F, errors: I, fetchers: new Map(R.fetchers) })) : (Ee({ errors: I, loaderData: de(R.loaderData, F, x, I), fetchers: new Map(R.fetchers) }), U = !1);
                                return [2 /*return*/];
                        }
                    });
                });
            }(e, n, g, k, v, u, y) : (re.set(e, { routeId: n, path: g }), function (e, n, r, a, o, i, u) {
                return __awaiter(this, void 0, void 0, function () { var d, f, p, v, g, _b, _c, _d; return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            d = R.fetchers.get(e);
                            Oe(e, Pe(u, d ? d.data : void 0), { flushSync: i });
                            f = new AbortController, p = ie(t.history, r, f.signal);
                            V.set(e, f);
                            v = $;
                            return [4 /*yield*/, oe("loader", p, a, o, s, l, h, m.v7_relativeSplatPath)];
                        case 1:
                            g = _f.sent();
                            _b = ge(g);
                            if (!_b) return [3 /*break*/, 3];
                            return [4 /*yield*/, Se(g, p.signal, !0)];
                        case 2:
                            _b = (g = (_f.sent()) || g);
                            _f.label = 3;
                        case 3:
                            if (!(_b, V.get(e) === f && V.delete(e), !p.signal.aborted)) return [3 /*break*/, 10];
                            if (!!le.has(e)) return [3 /*break*/, 9];
                            if (!be(g)) return [3 /*break*/, 7];
                            if (!(H > v)) return [3 /*break*/, 4];
                            _d = void Oe(e, Ne(void 0));
                            return [3 /*break*/, 6];
                        case 4:
                            Q.add(e);
                            return [4 /*yield*/, Re(R, g)];
                        case 5:
                            _d = (void (_f.sent()));
                            _f.label = 6;
                        case 6:
                            _c = _d;
                            return [3 /*break*/, 8];
                        case 7:
                            _c = void (ye(g) ? Me(e, n, g.error) : (c(!ge(g), "Unhandled fetcher deferred data"), Oe(e, Ne(g.data))));
                            _f.label = 8;
                        case 8: return [2 /*return*/, _c];
                        case 9:
                            Oe(e, Ne(void 0));
                            _f.label = 10;
                        case 10: return [2 /*return*/];
                    }
                }); });
            }(e, n, g, k, v, u, y)); }, revalidate: function () { ze(), Ee({ revalidation: "loading" }), "submitting" !== R.navigation.state && ("idle" !== R.navigation.state ? Le(D || R.historyAction, R.navigation.location, { overrideNavigation: R.navigation }) : Le(R.historyAction, R.location, { startUninterruptedRevalidation: !0 })); }, createHref: function (e) { return t.history.createHref(e); }, encodeLocation: function (e) { return t.history.encodeLocation(e); }, getFetcher: je, deleteFetcher: function (e) { if (m.v7_fetcherPersist) {
                var t_23 = (ae.get(e) || 0) - 1;
                t_23 <= 0 ? (ae.delete(e), le.add(e)) : ae.set(e, t_23);
            }
            else
                Fe(e); Ee({ fetchers: new Map(R.fetchers) }); }, dispose: function () { g && g(), F && F(), w.clear(), L && L.abort(), R.fetchers.forEach((function (e, t) { return Fe(t); })), R.blockers.forEach((function (e, t) { return Ve(t); })); }, getBlocker: function (e, t) { var n = R.blockers.get(e) || X; return se.get(e) !== t && se.set(e, t), n; }, deleteBlocker: Ve, _internalFetchControllers: V, _internalActiveDeferreds: ue, _internalSetRoutes: function (e) { s = {}, o = y(e, l, void 0, s); } }, P;
    }({ basename: void 0, future: We({}, void 0, { v7_prependBasename: !0 }), history: (st = { window: void 0 }, void 0 === st && (st = {}), function (t, n, r, a) { void 0 === a && (a = {}); var _b = a.window, l = _b === void 0 ? document.defaultView : _b, _c = a.v5Compat, o = _c === void 0 ? !1 : _c, i = l.history, d = e.Pop, m = null, v = g(); function g() { return (i.state || { idx: null }).idx; } function y() { d = e.Pop; var t = g(), n = null == t ? null : t - v; v = t, m && m({ action: d, location: w.location, delta: n }); } function b(e) { var t = "null" !== l.location.origin ? l.location.origin : l.location.href, n = "string" == typeof e ? e : h(e); return c(t, "No window.location.(origin|href) available to create URL for href: " + n), new URL(n, t); } null == v && (v = 0, i.replaceState(u({}, i.state, { idx: v }), "")); var w = { get action() { return d; }, get location() { return t(l, i); }, listen: function (e) { if (m)
                throw new Error("A history only accepts one active listener"); return l.addEventListener(s, y), m = e, function () { l.removeEventListener(s, y), m = null; }; }, createHref: function (e) { return n(l, e); }, createURL: b, encodeLocation: function (e) { var t = b(e); return { pathname: t.pathname, search: t.search, hash: t.hash }; }, push: function (t, n) { d = e.Push; var a = p(w.location, t, n); r && r(a, t), v = g() + 1; var u = f(a, v), s = w.createHref(a); try {
                i.pushState(u, "", s);
            }
            catch (e) {
                if (e instanceof DOMException && "DataCloneError" === e.name)
                    throw e;
                l.location.assign(s);
            } o && m && m({ action: d, location: w.location, delta: 1 }); }, replace: function (t, n) { d = e.Replace; var a = p(w.location, t, n); r && r(a, t), v = g(); var l = f(a, v), u = w.createHref(a); i.replaceState(l, "", u), o && m && m({ action: d, location: w.location, delta: 0 }); }, go: function (e) { return i.go(e); } }; return w; }((function (e, t) { var _b = e.location, n = _b.pathname, r = _b.search, a = _b.hash; return p("", { pathname: n, search: r, hash: a }, t.state && t.state.usr || null, t.state && t.state.key || "default"); }), (function (e, t) { return "string" == typeof t ? t : h(t); }), null, st)), hydrationData: function () { var e; var t = null == (e = window) ? void 0 : e.__staticRouterHydrationData; return t && t.errors && (t = We({}, t, { errors: Qe(t.errors) })), t; }(), routes: ut, mapRouteProperties: function (e) { var t = { hasErrorBoundary: null != e.ErrorBoundary || null != e.errorElement }; return e.Component && Object.assign(t, { element: r.createElement(e.Component), Component: void 0 }), e.HydrateFallback && Object.assign(t, { hydrateFallbackElement: r.createElement(e.HydrateFallback), HydrateFallback: void 0 }), e.ErrorBoundary && Object.assign(t, { errorElement: r.createElement(e.ErrorBoundary), ErrorBoundary: void 0 }), t; }, window: void 0 }).initialize()); ct.render((0, t.jsx)((function (e) {
        var _this = this;
        var t = e.fallbackElement, n = e.router, a = e.future, _b = r.useState(n.state), l = _b[0], o = _b[1], _c = r.useState(), i = _c[0], u = _c[1], _d = r.useState({ isTransitioning: !1 }), s = _d[0], c = _d[1], _f = r.useState(), d = _f[0], f = _f[1], _g = r.useState(), p = _g[0], h = _g[1], _h = r.useState(), m = _h[0], v = _h[1], g = r.useRef(new Map), y = (a || {}).v7_startTransition, b = r.useCallback((function (e) { y ? function (e) { Ke ? Ke(e) : e(); }(e) : e(); }), [y]), w = r.useCallback((function (e, t) { var r = t.deletedFetchers, a = t.unstable_flushSync, l = t.unstable_viewTransitionOpts; r.forEach((function (e) { return g.current.delete(e); })), e.fetchers.forEach((function (e, t) { void 0 !== e.data && g.current.set(t, e.data); })); var i = null == n.window || "function" != typeof n.window.document.startViewTransition; if (l && !i) {
            if (a) {
                Je((function () { p && (d && d.resolve(), p.skipTransition()), c({ isTransitioning: !0, flushSync: !0, currentLocation: l.currentLocation, nextLocation: l.nextLocation }); }));
                var t_24 = n.window.document.startViewTransition((function () { Je((function () { return o(e); })); }));
                return t_24.finished.finally((function () { Je((function () { f(void 0), h(void 0), u(void 0), c({ isTransitioning: !1 }); })); })), void Je((function () { return h(t_24); }));
            }
            p ? (d && d.resolve(), p.skipTransition(), v({ state: e, currentLocation: l.currentLocation, nextLocation: l.nextLocation })) : (u(e), c({ isTransitioning: !0, flushSync: !1, currentLocation: l.currentLocation, nextLocation: l.nextLocation }));
        }
        else
            a ? Je((function () { return o(e); })) : b((function () { return o(e); })); }), [n.window, p, d, g, b]);
        r.useLayoutEffect((function () { return n.subscribe(w); }), [n, w]), r.useEffect((function () { s.isTransitioning && !s.flushSync && f(new Ge); }), [s]), r.useEffect((function () { if (d && i && n.window) {
            var e_44 = i, t_25 = d.promise, r_18 = n.window.document.startViewTransition((function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        b((function () { return o(e_44); }));
                        return [4 /*yield*/, t_25];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            }); }); }));
            r_18.finished.finally((function () { f(void 0), h(void 0), u(void 0), c({ isTransitioning: !1 }); })), h(r_18);
        } }), [b, i, d, n.window]), r.useEffect((function () { d && i && l.location.key === i.location.key && d.resolve(); }), [d, p, l.location, i]), r.useEffect((function () { !s.isTransitioning && m && (u(m.state), c({ isTransitioning: !0, flushSync: !1, currentLocation: m.currentLocation, nextLocation: m.nextLocation }), v(void 0)); }), [s.isTransitioning, m]), r.useEffect((function () { }), []);
        var k = r.useMemo((function () { return ({ createHref: n.createHref, encodeLocation: n.encodeLocation, go: function (e) { return n.navigate(e); }, push: function (e, t, r) { return n.navigate(e, { state: t, preventScrollReset: null == r ? void 0 : r.preventScrollReset }); }, replace: function (e, t, r) { return n.navigate(e, { replace: !0, state: t, preventScrollReset: null == r ? void 0 : r.preventScrollReset }); } }); }), [n]), S = n.basename || "/", E = r.useMemo((function () { return ({ router: n, navigator: k, static: !1, basename: S }); }), [n, k, S]);
        return r.createElement(r.Fragment, null, r.createElement(Le.Provider, { value: E }, r.createElement(Re.Provider, { value: l }, r.createElement(Ye.Provider, { value: g.current }, r.createElement(qe.Provider, { value: s }, r.createElement(He, { basename: S, location: l.location, navigationType: l.historyAction, navigator: k, future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath } }, l.initialized || n.future.v7_partialHydration ? r.createElement(Ze, { routes: n.routes, future: n.future, state: l }) : t))))), null);
    }), { router: dt })); })();
})();
