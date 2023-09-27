/*! For license information please see main.75e58054.js.LICENSE.txt */
!function() {
    var e = {
        110: function(e, t, n) {
            "use strict";
            var r = n(441)
              , o = {
                childContextTypes: !0,
                contextType: !0,
                contextTypes: !0,
                defaultProps: !0,
                displayName: !0,
                getDefaultProps: !0,
                getDerivedStateFromError: !0,
                getDerivedStateFromProps: !0,
                mixins: !0,
                propTypes: !0,
                type: !0
            }
              , i = {
                name: !0,
                length: !0,
                prototype: !0,
                caller: !0,
                callee: !0,
                arguments: !0,
                arity: !0
            }
              , a = {
                $$typeof: !0,
                compare: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0,
                type: !0
            }
              , u = {};
            function l(e) {
                return r.isMemo(e) ? a : u[e.$$typeof] || o
            }
            u[r.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            },
            u[r.Memo] = a;
            var s = Object.defineProperty
              , c = Object.getOwnPropertyNames
              , f = Object.getOwnPropertySymbols
              , d = Object.getOwnPropertyDescriptor
              , p = Object.getPrototypeOf
              , v = Object.prototype;
            e.exports = function e(t, n, r) {
                if ("string" !== typeof n) {
                    if (v) {
                        var o = p(n);
                        o && o !== v && e(t, o, r)
                    }
                    var a = c(n);
                    f && (a = a.concat(f(n)));
                    for (var u = l(t), h = l(n), m = 0; m < a.length; ++m) {
                        var y = a[m];
                        if (!i[y] && (!r || !r[y]) && (!h || !h[y]) && (!u || !u[y])) {
                            var g = d(n, y);
                            try {
                                s(t, y, g)
                            } catch (b) {}
                        }
                    }
                }
                return t
            }
        },
        725: function(e) {
            "use strict";
            var t = Object.getOwnPropertySymbols
              , n = Object.prototype.hasOwnProperty
              , r = Object.prototype.propertyIsEnumerable;
            function o(e) {
                if (null === e || void 0 === e)
                    throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }
            e.exports = function() {
                try {
                    if (!Object.assign)
                        return !1;
                    var e = new String("abc");
                    if (e[5] = "de",
                    "5" === Object.getOwnPropertyNames(e)[0])
                        return !1;
                    for (var t = {}, n = 0; n < 10; n++)
                        t["_" + String.fromCharCode(n)] = n;
                    if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                        return t[e]
                    }
                    )).join(""))
                        return !1;
                    var r = {};
                    return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                        r[e] = e
                    }
                    )),
                    "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                } catch (o) {
                    return !1
                }
            }() ? Object.assign : function(e, i) {
                for (var a, u, l = o(e), s = 1; s < arguments.length; s++) {
                    for (var c in a = Object(arguments[s]))
                        n.call(a, c) && (l[c] = a[c]);
                    if (t) {
                        u = t(a);
                        for (var f = 0; f < u.length; f++)
                            r.call(a, u[f]) && (l[u[f]] = a[u[f]])
                    }
                }
                return l
            }
        },
        888: function(e, t, n) {
            "use strict";
            var r = n(47);
            function o() {}
            function i() {}
            i.resetWarningCache = o,
            e.exports = function() {
                function e(e, t, n, o, i, a) {
                    if (a !== r) {
                        var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw u.name = "Invariant Violation",
                        u
                    }
                }
                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: i,
                    resetWarningCache: o
                };
                return n.PropTypes = n,
                n
            }
        },
        7: function(e, t, n) {
            e.exports = n(888)()
        },
        47: function(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        463: function(e, t, n) {
            "use strict";
            var r = n(791)
              , o = n(725)
              , i = n(296);
            function a(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
                    t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            if (!r)
                throw Error(a(227));
            var u = new Set
              , l = {};
            function s(e, t) {
                c(e, t),
                c(e + "Capture", t)
            }
            function c(e, t) {
                for (l[e] = t,
                e = 0; e < t.length; e++)
                    u.add(t[e])
            }
            var f = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement)
              , d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
              , p = Object.prototype.hasOwnProperty
              , v = {}
              , h = {};
            function m(e, t, n, r, o, i, a) {
                this.acceptsBooleans = 2 === t || 3 === t || 4 === t,
                this.attributeName = r,
                this.attributeNamespace = o,
                this.mustUseProperty = n,
                this.propertyName = e,
                this.type = t,
                this.sanitizeURL = i,
                this.removeEmptyString = a
            }
            var y = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                y[e] = new m(e,0,!1,e,null,!1,!1)
            }
            )),
            [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function(e) {
                var t = e[0];
                y[t] = new m(t,1,!1,e[1],null,!1,!1)
            }
            )),
            ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                y[e] = new m(e,2,!1,e.toLowerCase(),null,!1,!1)
            }
            )),
            ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                y[e] = new m(e,2,!1,e,null,!1,!1)
            }
            )),
            "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                y[e] = new m(e,3,!1,e.toLowerCase(),null,!1,!1)
            }
            )),
            ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                y[e] = new m(e,3,!0,e,null,!1,!1)
            }
            )),
            ["capture", "download"].forEach((function(e) {
                y[e] = new m(e,4,!1,e,null,!1,!1)
            }
            )),
            ["cols", "rows", "size", "span"].forEach((function(e) {
                y[e] = new m(e,6,!1,e,null,!1,!1)
            }
            )),
            ["rowSpan", "start"].forEach((function(e) {
                y[e] = new m(e,5,!1,e.toLowerCase(),null,!1,!1)
            }
            ));
            var g = /[\-:]([a-z])/g;
            function b(e) {
                return e[1].toUpperCase()
            }
            function w(e, t, n, r) {
                var o = y.hasOwnProperty(t) ? y[t] : null;
                (null !== o ? 0 === o.type : !r && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function(e, t, n, r) {
                    if (null === t || "undefined" === typeof t || function(e, t, n, r) {
                        if (null !== n && 0 === n.type)
                            return !1;
                        switch (typeof t) {
                        case "function":
                        case "symbol":
                            return !0;
                        case "boolean":
                            return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                        default:
                            return !1
                        }
                    }(e, t, n, r))
                        return !0;
                    if (r)
                        return !1;
                    if (null !== n)
                        switch (n.type) {
                        case 3:
                            return !t;
                        case 4:
                            return !1 === t;
                        case 5:
                            return isNaN(t);
                        case 6:
                            return isNaN(t) || 1 > t
                        }
                    return !1
                }(t, n, o, r) && (n = null),
                r || null === o ? function(e) {
                    return !!p.call(h, e) || !p.call(v, e) && (d.test(e) ? h[e] = !0 : (v[e] = !0,
                    !1))
                }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = null === n ? 3 !== o.type && "" : n : (t = o.attributeName,
                r = o.attributeNamespace,
                null === n ? e.removeAttribute(t) : (n = 3 === (o = o.type) || 4 === o && !0 === n ? "" : "" + n,
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                var t = e.replace(g, b);
                y[t] = new m(t,1,!1,e,null,!1,!1)
            }
            )),
            "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                var t = e.replace(g, b);
                y[t] = new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
            }
            )),
            ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                var t = e.replace(g, b);
                y[t] = new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
            }
            )),
            ["tabIndex", "crossOrigin"].forEach((function(e) {
                y[e] = new m(e,1,!1,e.toLowerCase(),null,!1,!1)
            }
            )),
            y.xlinkHref = new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
            ["src", "href", "action", "formAction"].forEach((function(e) {
                y[e] = new m(e,1,!1,e.toLowerCase(),null,!0,!0)
            }
            ));
            var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              , S = 60103
              , E = 60106
              , k = 60107
              , P = 60108
              , C = 60114
              , O = 60109
              , _ = 60110
              , T = 60112
              , A = 60113
              , M = 60120
              , N = 60115
              , R = 60116
              , j = 60121
              , L = 60128
              , D = 60129
              , I = 60130
              , V = 60131;
            if ("function" === typeof Symbol && Symbol.for) {
                var F = Symbol.for;
                S = F("react.element"),
                E = F("react.portal"),
                k = F("react.fragment"),
                P = F("react.strict_mode"),
                C = F("react.profiler"),
                O = F("react.provider"),
                _ = F("react.context"),
                T = F("react.forward_ref"),
                A = F("react.suspense"),
                M = F("react.suspense_list"),
                N = F("react.memo"),
                R = F("react.lazy"),
                j = F("react.block"),
                F("react.scope"),
                L = F("react.opaque.id"),
                D = F("react.debug_trace_mode"),
                I = F("react.offscreen"),
                V = F("react.legacy_hidden")
            }
            var z, U = "function" === typeof Symbol && Symbol.iterator;
            function B(e) {
                return null === e || "object" !== typeof e ? null : "function" === typeof (e = U && e[U] || e["@@iterator"]) ? e : null
            }
            function $(e) {
                if (void 0 === z)
                    try {
                        throw Error()
                    } catch (n) {
                        var t = n.stack.trim().match(/\n( *(at )?)/);
                        z = t && t[1] || ""
                    }
                return "\n" + z + e
            }
            var W = !1;
            function H(e, t) {
                if (!e || W)
                    return "";
                W = !0;
                var n = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    if (t)
                        if (t = function() {
                            throw Error()
                        }
                        ,
                        Object.defineProperty(t.prototype, "props", {
                            set: function() {
                                throw Error()
                            }
                        }),
                        "object" === typeof Reflect && Reflect.construct) {
                            try {
                                Reflect.construct(t, [])
                            } catch (l) {
                                var r = l
                            }
                            Reflect.construct(e, [], t)
                        } else {
                            try {
                                t.call()
                            } catch (l) {
                                r = l
                            }
                            e.call(t.prototype)
                        }
                    else {
                        try {
                            throw Error()
                        } catch (l) {
                            r = l
                        }
                        e()
                    }
                } catch (l) {
                    if (l && r && "string" === typeof l.stack) {
                        for (var o = l.stack.split("\n"), i = r.stack.split("\n"), a = o.length - 1, u = i.length - 1; 1 <= a && 0 <= u && o[a] !== i[u]; )
                            u--;
                        for (; 1 <= a && 0 <= u; a--,
                        u--)
                            if (o[a] !== i[u]) {
                                if (1 !== a || 1 !== u)
                                    do {
                                        if (a--,
                                        0 > --u || o[a] !== i[u])
                                            return "\n" + o[a].replace(" at new ", " at ")
                                    } while (1 <= a && 0 <= u);
                                break
                            }
                    }
                } finally {
                    W = !1,
                    Error.prepareStackTrace = n
                }
                return (e = e ? e.displayName || e.name : "") ? $(e) : ""
            }
            function K(e) {
                switch (e.tag) {
                case 5:
                    return $(e.type);
                case 16:
                    return $("Lazy");
                case 13:
                    return $("Suspense");
                case 19:
                    return $("SuspenseList");
                case 0:
                case 2:
                case 15:
                    return e = H(e.type, !1);
                case 11:
                    return e = H(e.type.render, !1);
                case 22:
                    return e = H(e.type._render, !1);
                case 1:
                    return e = H(e.type, !0);
                default:
                    return ""
                }
            }
            function Q(e) {
                if (null == e)
                    return null;
                if ("function" === typeof e)
                    return e.displayName || e.name || null;
                if ("string" === typeof e)
                    return e;
                switch (e) {
                case k:
                    return "Fragment";
                case E:
                    return "Portal";
                case C:
                    return "Profiler";
                case P:
                    return "StrictMode";
                case A:
                    return "Suspense";
                case M:
                    return "SuspenseList"
                }
                if ("object" === typeof e)
                    switch (e.$$typeof) {
                    case _:
                        return (e.displayName || "Context") + ".Consumer";
                    case O:
                        return (e._context.displayName || "Context") + ".Provider";
                    case T:
                        var t = e.render;
                        return t = t.displayName || t.name || "",
                        e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
                    case N:
                        return Q(e.type);
                    case j:
                        return Q(e._render);
                    case R:
                        t = e._payload,
                        e = e._init;
                        try {
                            return Q(e(t))
                        } catch (n) {}
                    }
                return null
            }
            function q(e) {
                switch (typeof e) {
                case "boolean":
                case "number":
                case "object":
                case "string":
                case "undefined":
                    return e;
                default:
                    return ""
                }
            }
            function Y(e) {
                var t = e.type;
                return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
            }
            function X(e) {
                e._valueTracker || (e._valueTracker = function(e) {
                    var t = Y(e) ? "checked" : "value"
                      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
                      , r = "" + e[t];
                    if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                        var o = n.get
                          , i = n.set;
                        return Object.defineProperty(e, t, {
                            configurable: !0,
                            get: function() {
                                return o.call(this)
                            },
                            set: function(e) {
                                r = "" + e,
                                i.call(this, e)
                            }
                        }),
                        Object.defineProperty(e, t, {
                            enumerable: n.enumerable
                        }),
                        {
                            getValue: function() {
                                return r
                            },
                            setValue: function(e) {
                                r = "" + e
                            },
                            stopTracking: function() {
                                e._valueTracker = null,
                                delete e[t]
                            }
                        }
                    }
                }(e))
            }
            function G(e) {
                if (!e)
                    return !1;
                var t = e._valueTracker;
                if (!t)
                    return !0;
                var n = t.getValue()
                  , r = "";
                return e && (r = Y(e) ? e.checked ? "true" : "false" : e.value),
                (e = r) !== n && (t.setValue(e),
                !0)
            }
            function Z(e) {
                if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0)))
                    return null;
                try {
                    return e.activeElement || e.body
                } catch (t) {
                    return e.body
                }
            }
            function J(e, t) {
                var n = t.checked;
                return o({}, t, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: void 0,
                    checked: null != n ? n : e._wrapperState.initialChecked
                })
            }
            function ee(e, t) {
                var n = null == t.defaultValue ? "" : t.defaultValue
                  , r = null != t.checked ? t.checked : t.defaultChecked;
                n = q(null != t.value ? t.value : n),
                e._wrapperState = {
                    initialChecked: r,
                    initialValue: n,
                    controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                }
            }
            function te(e, t) {
                null != (t = t.checked) && w(e, "checked", t, !1)
            }
            function ne(e, t) {
                te(e, t);
                var n = q(t.value)
                  , r = t.type;
                if (null != n)
                    "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                else if ("submit" === r || "reset" === r)
                    return void e.removeAttribute("value");
                t.hasOwnProperty("value") ? oe(e, t.type, n) : t.hasOwnProperty("defaultValue") && oe(e, t.type, q(t.defaultValue)),
                null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
            }
            function re(e, t, n) {
                if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                    var r = t.type;
                    if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value))
                        return;
                    t = "" + e._wrapperState.initialValue,
                    n || t === e.value || (e.value = t),
                    e.defaultValue = t
                }
                "" !== (n = e.name) && (e.name = ""),
                e.defaultChecked = !!e._wrapperState.initialChecked,
                "" !== n && (e.name = n)
            }
            function oe(e, t, n) {
                "number" === t && Z(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
            }
            function ie(e, t) {
                return e = o({
                    children: void 0
                }, t),
                (t = function(e) {
                    var t = "";
                    return r.Children.forEach(e, (function(e) {
                        null != e && (t += e)
                    }
                    )),
                    t
                }(t.children)) && (e.children = t),
                e
            }
            function ae(e, t, n, r) {
                if (e = e.options,
                t) {
                    t = {};
                    for (var o = 0; o < n.length; o++)
                        t["$" + n[o]] = !0;
                    for (n = 0; n < e.length; n++)
                        o = t.hasOwnProperty("$" + e[n].value),
                        e[n].selected !== o && (e[n].selected = o),
                        o && r && (e[n].defaultSelected = !0)
                } else {
                    for (n = "" + q(n),
                    t = null,
                    o = 0; o < e.length; o++) {
                        if (e[o].value === n)
                            return e[o].selected = !0,
                            void (r && (e[o].defaultSelected = !0));
                        null !== t || e[o].disabled || (t = e[o])
                    }
                    null !== t && (t.selected = !0)
                }
            }
            function ue(e, t) {
                if (null != t.dangerouslySetInnerHTML)
                    throw Error(a(91));
                return o({}, t, {
                    value: void 0,
                    defaultValue: void 0,
                    children: "" + e._wrapperState.initialValue
                })
            }
            function le(e, t) {
                var n = t.value;
                if (null == n) {
                    if (n = t.children,
                    t = t.defaultValue,
                    null != n) {
                        if (null != t)
                            throw Error(a(92));
                        if (Array.isArray(n)) {
                            if (!(1 >= n.length))
                                throw Error(a(93));
                            n = n[0]
                        }
                        t = n
                    }
                    null == t && (t = ""),
                    n = t
                }
                e._wrapperState = {
                    initialValue: q(n)
                }
            }
            function se(e, t) {
                var n = q(t.value)
                  , r = q(t.defaultValue);
                null != n && ((n = "" + n) !== e.value && (e.value = n),
                null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
                null != r && (e.defaultValue = "" + r)
            }
            function ce(e) {
                var t = e.textContent;
                t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
            }
            var fe = "http://www.w3.org/1999/xhtml"
              , de = "http://www.w3.org/2000/svg";
            function pe(e) {
                switch (e) {
                case "svg":
                    return "http://www.w3.org/2000/svg";
                case "math":
                    return "http://www.w3.org/1998/Math/MathML";
                default:
                    return "http://www.w3.org/1999/xhtml"
                }
            }
            function ve(e, t) {
                return null == e || "http://www.w3.org/1999/xhtml" === e ? pe(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
            }
            var he, me, ye = (me = function(e, t) {
                if (e.namespaceURI !== de || "innerHTML"in e)
                    e.innerHTML = t;
                else {
                    for ((he = he || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = he.firstChild; e.firstChild; )
                        e.removeChild(e.firstChild);
                    for (; t.firstChild; )
                        e.appendChild(t.firstChild)
                }
            }
            ,
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
                MSApp.execUnsafeLocalFunction((function() {
                    return me(e, t)
                }
                ))
            }
            : me);
            function ge(e, t) {
                if (t) {
                    var n = e.firstChild;
                    if (n && n === e.lastChild && 3 === n.nodeType)
                        return void (n.nodeValue = t)
                }
                e.textContent = t
            }
            var be = {
                animationIterationCount: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            }
              , we = ["Webkit", "ms", "Moz", "O"];
            function xe(e, t, n) {
                return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || be.hasOwnProperty(e) && be[e] ? ("" + t).trim() : t + "px"
            }
            function Se(e, t) {
                for (var n in e = e.style,
                t)
                    if (t.hasOwnProperty(n)) {
                        var r = 0 === n.indexOf("--")
                          , o = xe(n, t[n], r);
                        "float" === n && (n = "cssFloat"),
                        r ? e.setProperty(n, o) : e[n] = o
                    }
            }
            Object.keys(be).forEach((function(e) {
                we.forEach((function(t) {
                    t = t + e.charAt(0).toUpperCase() + e.substring(1),
                    be[t] = be[e]
                }
                ))
            }
            ));
            var Ee = o({
                menuitem: !0
            }, {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            });
            function ke(e, t) {
                if (t) {
                    if (Ee[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
                        throw Error(a(137, e));
                    if (null != t.dangerouslySetInnerHTML) {
                        if (null != t.children)
                            throw Error(a(60));
                        if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html"in t.dangerouslySetInnerHTML))
                            throw Error(a(61))
                    }
                    if (null != t.style && "object" !== typeof t.style)
                        throw Error(a(62))
                }
            }
            function Pe(e, t) {
                if (-1 === e.indexOf("-"))
                    return "string" === typeof t.is;
                switch (e) {
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    return !1;
                default:
                    return !0
                }
            }
            function Ce(e) {
                return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
                3 === e.nodeType ? e.parentNode : e
            }
            var Oe = null
              , _e = null
              , Te = null;
            function Ae(e) {
                if (e = ro(e)) {
                    if ("function" !== typeof Oe)
                        throw Error(a(280));
                    var t = e.stateNode;
                    t && (t = io(t),
                    Oe(e.stateNode, e.type, t))
                }
            }
            function Me(e) {
                _e ? Te ? Te.push(e) : Te = [e] : _e = e
            }
            function Ne() {
                if (_e) {
                    var e = _e
                      , t = Te;
                    if (Te = _e = null,
                    Ae(e),
                    t)
                        for (e = 0; e < t.length; e++)
                            Ae(t[e])
                }
            }
            function Re(e, t) {
                return e(t)
            }
            function je(e, t, n, r, o) {
                return e(t, n, r, o)
            }
            function Le() {}
            var De = Re
              , Ie = !1
              , Ve = !1;
            function Fe() {
                null === _e && null === Te || (Le(),
                Ne())
            }
            function ze(e, t) {
                var n = e.stateNode;
                if (null === n)
                    return null;
                var r = io(n);
                if (null === r)
                    return null;
                n = r[t];
                e: switch (t) {
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
                    (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)),
                    e = !r;
                    break e;
                default:
                    e = !1
                }
                if (e)
                    return null;
                if (n && "function" !== typeof n)
                    throw Error(a(231, t, typeof n));
                return n
            }
            var Ue = !1;
            if (f)
                try {
                    var Be = {};
                    Object.defineProperty(Be, "passive", {
                        get: function() {
                            Ue = !0
                        }
                    }),
                    window.addEventListener("test", Be, Be),
                    window.removeEventListener("test", Be, Be)
                } catch (me) {
                    Ue = !1
                }
            function $e(e, t, n, r, o, i, a, u, l) {
                var s = Array.prototype.slice.call(arguments, 3);
                try {
                    t.apply(n, s)
                } catch (c) {
                    this.onError(c)
                }
            }
            var We = !1
              , He = null
              , Ke = !1
              , Qe = null
              , qe = {
                onError: function(e) {
                    We = !0,
                    He = e
                }
            };
            function Ye(e, t, n, r, o, i, a, u, l) {
                We = !1,
                He = null,
                $e.apply(qe, arguments)
            }
            function Xe(e) {
                var t = e
                  , n = e;
                if (e.alternate)
                    for (; t.return; )
                        t = t.return;
                else {
                    e = t;
                    do {
                        0 !== (1026 & (t = e).flags) && (n = t.return),
                        e = t.return
                    } while (e)
                }
                return 3 === t.tag ? n : null
            }
            function Ge(e) {
                if (13 === e.tag) {
                    var t = e.memoizedState;
                    if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)),
                    null !== t)
                        return t.dehydrated
                }
                return null
            }
            function Ze(e) {
                if (Xe(e) !== e)
                    throw Error(a(188))
            }
            function Je(e) {
                if (e = function(e) {
                    var t = e.alternate;
                    if (!t) {
                        if (null === (t = Xe(e)))
                            throw Error(a(188));
                        return t !== e ? null : e
                    }
                    for (var n = e, r = t; ; ) {
                        var o = n.return;
                        if (null === o)
                            break;
                        var i = o.alternate;
                        if (null === i) {
                            if (null !== (r = o.return)) {
                                n = r;
                                continue
                            }
                            break
                        }
                        if (o.child === i.child) {
                            for (i = o.child; i; ) {
                                if (i === n)
                                    return Ze(o),
                                    e;
                                if (i === r)
                                    return Ze(o),
                                    t;
                                i = i.sibling
                            }
                            throw Error(a(188))
                        }
                        if (n.return !== r.return)
                            n = o,
                            r = i;
                        else {
                            for (var u = !1, l = o.child; l; ) {
                                if (l === n) {
                                    u = !0,
                                    n = o,
                                    r = i;
                                    break
                                }
                                if (l === r) {
                                    u = !0,
                                    r = o,
                                    n = i;
                                    break
                                }
                                l = l.sibling
                            }
                            if (!u) {
                                for (l = i.child; l; ) {
                                    if (l === n) {
                                        u = !0,
                                        n = i,
                                        r = o;
                                        break
                                    }
                                    if (l === r) {
                                        u = !0,
                                        r = i,
                                        n = o;
                                        break
                                    }
                                    l = l.sibling
                                }
                                if (!u)
                                    throw Error(a(189))
                            }
                        }
                        if (n.alternate !== r)
                            throw Error(a(190))
                    }
                    if (3 !== n.tag)
                        throw Error(a(188));
                    return n.stateNode.current === n ? e : t
                }(e),
                !e)
                    return null;
                for (var t = e; ; ) {
                    if (5 === t.tag || 6 === t.tag)
                        return t;
                    if (t.child)
                        t.child.return = t,
                        t = t.child;
                    else {
                        if (t === e)
                            break;
                        for (; !t.sibling; ) {
                            if (!t.return || t.return === e)
                                return null;
                            t = t.return
                        }
                        t.sibling.return = t.return,
                        t = t.sibling
                    }
                }
                return null
            }
            function et(e, t) {
                for (var n = e.alternate; null !== t; ) {
                    if (t === e || t === n)
                        return !0;
                    t = t.return
                }
                return !1
            }
            var tt, nt, rt, ot, it = !1, at = [], ut = null, lt = null, st = null, ct = new Map, ft = new Map, dt = [], pt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
            function vt(e, t, n, r, o) {
                return {
                    blockedOn: e,
                    domEventName: t,
                    eventSystemFlags: 16 | n,
                    nativeEvent: o,
                    targetContainers: [r]
                }
            }
            function ht(e, t) {
                switch (e) {
                case "focusin":
                case "focusout":
                    ut = null;
                    break;
                case "dragenter":
                case "dragleave":
                    lt = null;
                    break;
                case "mouseover":
                case "mouseout":
                    st = null;
                    break;
                case "pointerover":
                case "pointerout":
                    ct.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    ft.delete(t.pointerId)
                }
            }
            function mt(e, t, n, r, o, i) {
                return null === e || e.nativeEvent !== i ? (e = vt(t, n, r, o, i),
                null !== t && (null !== (t = ro(t)) && nt(t)),
                e) : (e.eventSystemFlags |= r,
                t = e.targetContainers,
                null !== o && -1 === t.indexOf(o) && t.push(o),
                e)
            }
            function yt(e) {
                var t = no(e.target);
                if (null !== t) {
                    var n = Xe(t);
                    if (null !== n)
                        if (13 === (t = n.tag)) {
                            if (null !== (t = Ge(n)))
                                return e.blockedOn = t,
                                void ot(e.lanePriority, (function() {
                                    i.unstable_runWithPriority(e.priority, (function() {
                                        rt(n)
                                    }
                                    ))
                                }
                                ))
                        } else if (3 === t && n.stateNode.hydrate)
                            return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                }
                e.blockedOn = null
            }
            function gt(e) {
                if (null !== e.blockedOn)
                    return !1;
                for (var t = e.targetContainers; 0 < t.length; ) {
                    var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                    if (null !== n)
                        return null !== (t = ro(n)) && nt(t),
                        e.blockedOn = n,
                        !1;
                    t.shift()
                }
                return !0
            }
            function bt(e, t, n) {
                gt(e) && n.delete(t)
            }
            function wt() {
                for (it = !1; 0 < at.length; ) {
                    var e = at[0];
                    if (null !== e.blockedOn) {
                        null !== (e = ro(e.blockedOn)) && tt(e);
                        break
                    }
                    for (var t = e.targetContainers; 0 < t.length; ) {
                        var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                        if (null !== n) {
                            e.blockedOn = n;
                            break
                        }
                        t.shift()
                    }
                    null === e.blockedOn && at.shift()
                }
                null !== ut && gt(ut) && (ut = null),
                null !== lt && gt(lt) && (lt = null),
                null !== st && gt(st) && (st = null),
                ct.forEach(bt),
                ft.forEach(bt)
            }
            function xt(e, t) {
                e.blockedOn === t && (e.blockedOn = null,
                it || (it = !0,
                i.unstable_scheduleCallback(i.unstable_NormalPriority, wt)))
            }
            function St(e) {
                function t(t) {
                    return xt(t, e)
                }
                if (0 < at.length) {
                    xt(at[0], e);
                    for (var n = 1; n < at.length; n++) {
                        var r = at[n];
                        r.blockedOn === e && (r.blockedOn = null)
                    }
                }
                for (null !== ut && xt(ut, e),
                null !== lt && xt(lt, e),
                null !== st && xt(st, e),
                ct.forEach(t),
                ft.forEach(t),
                n = 0; n < dt.length; n++)
                    (r = dt[n]).blockedOn === e && (r.blockedOn = null);
                for (; 0 < dt.length && null === (n = dt[0]).blockedOn; )
                    yt(n),
                    null === n.blockedOn && dt.shift()
            }
            function Et(e, t) {
                var n = {};
                return n[e.toLowerCase()] = t.toLowerCase(),
                n["Webkit" + e] = "webkit" + t,
                n["Moz" + e] = "moz" + t,
                n
            }
            var kt = {
                animationend: Et("Animation", "AnimationEnd"),
                animationiteration: Et("Animation", "AnimationIteration"),
                animationstart: Et("Animation", "AnimationStart"),
                transitionend: Et("Transition", "TransitionEnd")
            }
              , Pt = {}
              , Ct = {};
            function Ot(e) {
                if (Pt[e])
                    return Pt[e];
                if (!kt[e])
                    return e;
                var t, n = kt[e];
                for (t in n)
                    if (n.hasOwnProperty(t) && t in Ct)
                        return Pt[e] = n[t];
                return e
            }
            f && (Ct = document.createElement("div").style,
            "AnimationEvent"in window || (delete kt.animationend.animation,
            delete kt.animationiteration.animation,
            delete kt.animationstart.animation),
            "TransitionEvent"in window || delete kt.transitionend.transition);
            var _t = Ot("animationend")
              , Tt = Ot("animationiteration")
              , At = Ot("animationstart")
              , Mt = Ot("transitionend")
              , Nt = new Map
              , Rt = new Map
              , jt = ["abort", "abort", _t, "animationEnd", Tt, "animationIteration", At, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Mt, "transitionEnd", "waiting", "waiting"];
            function Lt(e, t) {
                for (var n = 0; n < e.length; n += 2) {
                    var r = e[n]
                      , o = e[n + 1];
                    o = "on" + (o[0].toUpperCase() + o.slice(1)),
                    Rt.set(r, t),
                    Nt.set(r, o),
                    s(o, [r])
                }
            }
            (0,
            i.unstable_now)();
            var Dt = 8;
            function It(e) {
                if (0 !== (1 & e))
                    return Dt = 15,
                    1;
                if (0 !== (2 & e))
                    return Dt = 14,
                    2;
                if (0 !== (4 & e))
                    return Dt = 13,
                    4;
                var t = 24 & e;
                return 0 !== t ? (Dt = 12,
                t) : 0 !== (32 & e) ? (Dt = 11,
                32) : 0 !== (t = 192 & e) ? (Dt = 10,
                t) : 0 !== (256 & e) ? (Dt = 9,
                256) : 0 !== (t = 3584 & e) ? (Dt = 8,
                t) : 0 !== (4096 & e) ? (Dt = 7,
                4096) : 0 !== (t = 4186112 & e) ? (Dt = 6,
                t) : 0 !== (t = 62914560 & e) ? (Dt = 5,
                t) : 67108864 & e ? (Dt = 4,
                67108864) : 0 !== (134217728 & e) ? (Dt = 3,
                134217728) : 0 !== (t = 805306368 & e) ? (Dt = 2,
                t) : 0 !== (1073741824 & e) ? (Dt = 1,
                1073741824) : (Dt = 8,
                e)
            }
            function Vt(e, t) {
                var n = e.pendingLanes;
                if (0 === n)
                    return Dt = 0;
                var r = 0
                  , o = 0
                  , i = e.expiredLanes
                  , a = e.suspendedLanes
                  , u = e.pingedLanes;
                if (0 !== i)
                    r = i,
                    o = Dt = 15;
                else if (0 !== (i = 134217727 & n)) {
                    var l = i & ~a;
                    0 !== l ? (r = It(l),
                    o = Dt) : 0 !== (u &= i) && (r = It(u),
                    o = Dt)
                } else
                    0 !== (i = n & ~a) ? (r = It(i),
                    o = Dt) : 0 !== u && (r = It(u),
                    o = Dt);
                if (0 === r)
                    return 0;
                if (r = n & ((0 > (r = 31 - Wt(r)) ? 0 : 1 << r) << 1) - 1,
                0 !== t && t !== r && 0 === (t & a)) {
                    if (It(t),
                    o <= Dt)
                        return t;
                    Dt = o
                }
                if (0 !== (t = e.entangledLanes))
                    for (e = e.entanglements,
                    t &= r; 0 < t; )
                        o = 1 << (n = 31 - Wt(t)),
                        r |= e[n],
                        t &= ~o;
                return r
            }
            function Ft(e) {
                return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
            }
            function zt(e, t) {
                switch (e) {
                case 15:
                    return 1;
                case 14:
                    return 2;
                case 12:
                    return 0 === (e = Ut(24 & ~t)) ? zt(10, t) : e;
                case 10:
                    return 0 === (e = Ut(192 & ~t)) ? zt(8, t) : e;
                case 8:
                    return 0 === (e = Ut(3584 & ~t)) && (0 === (e = Ut(4186112 & ~t)) && (e = 512)),
                    e;
                case 2:
                    return 0 === (t = Ut(805306368 & ~t)) && (t = 268435456),
                    t
                }
                throw Error(a(358, e))
            }
            function Ut(e) {
                return e & -e
            }
            function Bt(e) {
                for (var t = [], n = 0; 31 > n; n++)
                    t.push(e);
                return t
            }
            function $t(e, t, n) {
                e.pendingLanes |= t;
                var r = t - 1;
                e.suspendedLanes &= r,
                e.pingedLanes &= r,
                (e = e.eventTimes)[t = 31 - Wt(t)] = n
            }
            var Wt = Math.clz32 ? Math.clz32 : function(e) {
                return 0 === e ? 32 : 31 - (Ht(e) / Kt | 0) | 0
            }
              , Ht = Math.log
              , Kt = Math.LN2;
            var Qt = i.unstable_UserBlockingPriority
              , qt = i.unstable_runWithPriority
              , Yt = !0;
            function Xt(e, t, n, r) {
                Ie || Le();
                var o = Zt
                  , i = Ie;
                Ie = !0;
                try {
                    je(o, e, t, n, r)
                } finally {
                    (Ie = i) || Fe()
                }
            }
            function Gt(e, t, n, r) {
                qt(Qt, Zt.bind(null, e, t, n, r))
            }
            function Zt(e, t, n, r) {
                var o;
                if (Yt)
                    if ((o = 0 === (4 & t)) && 0 < at.length && -1 < pt.indexOf(e))
                        e = vt(null, e, t, n, r),
                        at.push(e);
                    else {
                        var i = Jt(e, t, n, r);
                        if (null === i)
                            o && ht(e, r);
                        else {
                            if (o) {
                                if (-1 < pt.indexOf(e))
                                    return e = vt(i, e, t, n, r),
                                    void at.push(e);
                                if (function(e, t, n, r, o) {
                                    switch (t) {
                                    case "focusin":
                                        return ut = mt(ut, e, t, n, r, o),
                                        !0;
                                    case "dragenter":
                                        return lt = mt(lt, e, t, n, r, o),
                                        !0;
                                    case "mouseover":
                                        return st = mt(st, e, t, n, r, o),
                                        !0;
                                    case "pointerover":
                                        var i = o.pointerId;
                                        return ct.set(i, mt(ct.get(i) || null, e, t, n, r, o)),
                                        !0;
                                    case "gotpointercapture":
                                        return i = o.pointerId,
                                        ft.set(i, mt(ft.get(i) || null, e, t, n, r, o)),
                                        !0
                                    }
                                    return !1
                                }(i, e, t, n, r))
                                    return;
                                ht(e, r)
                            }
                            Lr(e, t, r, null, n)
                        }
                    }
            }
            function Jt(e, t, n, r) {
                var o = Ce(r);
                if (null !== (o = no(o))) {
                    var i = Xe(o);
                    if (null === i)
                        o = null;
                    else {
                        var a = i.tag;
                        if (13 === a) {
                            if (null !== (o = Ge(i)))
                                return o;
                            o = null
                        } else if (3 === a) {
                            if (i.stateNode.hydrate)
                                return 3 === i.tag ? i.stateNode.containerInfo : null;
                            o = null
                        } else
                            i !== o && (o = null)
                    }
                }
                return Lr(e, t, r, o, n),
                null
            }
            var en = null
              , tn = null
              , nn = null;
            function rn() {
                if (nn)
                    return nn;
                var e, t, n = tn, r = n.length, o = "value"in en ? en.value : en.textContent, i = o.length;
                for (e = 0; e < r && n[e] === o[e]; e++)
                    ;
                var a = r - e;
                for (t = 1; t <= a && n[r - t] === o[i - t]; t++)
                    ;
                return nn = o.slice(e, 1 < t ? 1 - t : void 0)
            }
            function on(e) {
                var t = e.keyCode;
                return "charCode"in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t,
                10 === e && (e = 13),
                32 <= e || 13 === e ? e : 0
            }
            function an() {
                return !0
            }
            function un() {
                return !1
            }
            function ln(e) {
                function t(t, n, r, o, i) {
                    for (var a in this._reactName = t,
                    this._targetInst = r,
                    this.type = n,
                    this.nativeEvent = o,
                    this.target = i,
                    this.currentTarget = null,
                    e)
                        e.hasOwnProperty(a) && (t = e[a],
                        this[a] = t ? t(o) : o[a]);
                    return this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue) ? an : un,
                    this.isPropagationStopped = un,
                    this
                }
                return o(t.prototype, {
                    preventDefault: function() {
                        this.defaultPrevented = !0;
                        var e = this.nativeEvent;
                        e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1),
                        this.isDefaultPrevented = an)
                    },
                    stopPropagation: function() {
                        var e = this.nativeEvent;
                        e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0),
                        this.isPropagationStopped = an)
                    },
                    persist: function() {},
                    isPersistent: an
                }),
                t
            }
            var sn, cn, fn, dn = {
                eventPhase: 0,
                bubbles: 0,
                cancelable: 0,
                timeStamp: function(e) {
                    return e.timeStamp || Date.now()
                },
                defaultPrevented: 0,
                isTrusted: 0
            }, pn = ln(dn), vn = o({}, dn, {
                view: 0,
                detail: 0
            }), hn = ln(vn), mn = o({}, vn, {
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                getModifierState: _n,
                button: 0,
                buttons: 0,
                relatedTarget: function(e) {
                    return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                },
                movementX: function(e) {
                    return "movementX"in e ? e.movementX : (e !== fn && (fn && "mousemove" === e.type ? (sn = e.screenX - fn.screenX,
                    cn = e.screenY - fn.screenY) : cn = sn = 0,
                    fn = e),
                    sn)
                },
                movementY: function(e) {
                    return "movementY"in e ? e.movementY : cn
                }
            }), yn = ln(mn), gn = ln(o({}, mn, {
                dataTransfer: 0
            })), bn = ln(o({}, vn, {
                relatedTarget: 0
            })), wn = ln(o({}, dn, {
                animationName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            })), xn = o({}, dn, {
                clipboardData: function(e) {
                    return "clipboardData"in e ? e.clipboardData : window.clipboardData
                }
            }), Sn = ln(xn), En = ln(o({}, dn, {
                data: 0
            })), kn = {
                Esc: "Escape",
                Spacebar: " ",
                Left: "ArrowLeft",
                Up: "ArrowUp",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Del: "Delete",
                Win: "OS",
                Menu: "ContextMenu",
                Apps: "ContextMenu",
                Scroll: "ScrollLock",
                MozPrintableKey: "Unidentified"
            }, Pn = {
                8: "Backspace",
                9: "Tab",
                12: "Clear",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                224: "Meta"
            }, Cn = {
                Alt: "altKey",
                Control: "ctrlKey",
                Meta: "metaKey",
                Shift: "shiftKey"
            };
            function On(e) {
                var t = this.nativeEvent;
                return t.getModifierState ? t.getModifierState(e) : !!(e = Cn[e]) && !!t[e]
            }
            function _n() {
                return On
            }
            var Tn = o({}, vn, {
                key: function(e) {
                    if (e.key) {
                        var t = kn[e.key] || e.key;
                        if ("Unidentified" !== t)
                            return t
                    }
                    return "keypress" === e.type ? 13 === (e = on(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Pn[e.keyCode] || "Unidentified" : ""
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: _n,
                charCode: function(e) {
                    return "keypress" === e.type ? on(e) : 0
                },
                keyCode: function(e) {
                    return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                },
                which: function(e) {
                    return "keypress" === e.type ? on(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                }
            })
              , An = ln(Tn)
              , Mn = ln(o({}, mn, {
                pointerId: 0,
                width: 0,
                height: 0,
                pressure: 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: 0,
                pointerType: 0,
                isPrimary: 0
            }))
              , Nn = ln(o({}, vn, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: _n
            }))
              , Rn = ln(o({}, dn, {
                propertyName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            }))
              , jn = o({}, mn, {
                deltaX: function(e) {
                    return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
                },
                deltaY: function(e) {
                    return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
                },
                deltaZ: 0,
                deltaMode: 0
            })
              , Ln = ln(jn)
              , Dn = [9, 13, 27, 32]
              , In = f && "CompositionEvent"in window
              , Vn = null;
            f && "documentMode"in document && (Vn = document.documentMode);
            var Fn = f && "TextEvent"in window && !Vn
              , zn = f && (!In || Vn && 8 < Vn && 11 >= Vn)
              , Un = String.fromCharCode(32)
              , Bn = !1;
            function $n(e, t) {
                switch (e) {
                case "keyup":
                    return -1 !== Dn.indexOf(t.keyCode);
                case "keydown":
                    return 229 !== t.keyCode;
                case "keypress":
                case "mousedown":
                case "focusout":
                    return !0;
                default:
                    return !1
                }
            }
            function Wn(e) {
                return "object" === typeof (e = e.detail) && "data"in e ? e.data : null
            }
            var Hn = !1;
            var Kn = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0
            };
            function Qn(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return "input" === t ? !!Kn[e.type] : "textarea" === t
            }
            function qn(e, t, n, r) {
                Me(r),
                0 < (t = Ir(t, "onChange")).length && (n = new pn("onChange","change",null,n,r),
                e.push({
                    event: n,
                    listeners: t
                }))
            }
            var Yn = null
              , Xn = null;
            function Gn(e) {
                Tr(e, 0)
            }
            function Zn(e) {
                if (G(oo(e)))
                    return e
            }
            function Jn(e, t) {
                if ("change" === e)
                    return t
            }
            var er = !1;
            if (f) {
                var tr;
                if (f) {
                    var nr = "oninput"in document;
                    if (!nr) {
                        var rr = document.createElement("div");
                        rr.setAttribute("oninput", "return;"),
                        nr = "function" === typeof rr.oninput
                    }
                    tr = nr
                } else
                    tr = !1;
                er = tr && (!document.documentMode || 9 < document.documentMode)
            }
            function or() {
                Yn && (Yn.detachEvent("onpropertychange", ir),
                Xn = Yn = null)
            }
            function ir(e) {
                if ("value" === e.propertyName && Zn(Xn)) {
                    var t = [];
                    if (qn(t, Xn, e, Ce(e)),
                    e = Gn,
                    Ie)
                        e(t);
                    else {
                        Ie = !0;
                        try {
                            Re(e, t)
                        } finally {
                            Ie = !1,
                            Fe()
                        }
                    }
                }
            }
            function ar(e, t, n) {
                "focusin" === e ? (or(),
                Xn = n,
                (Yn = t).attachEvent("onpropertychange", ir)) : "focusout" === e && or()
            }
            function ur(e) {
                if ("selectionchange" === e || "keyup" === e || "keydown" === e)
                    return Zn(Xn)
            }
            function lr(e, t) {
                if ("click" === e)
                    return Zn(t)
            }
            function sr(e, t) {
                if ("input" === e || "change" === e)
                    return Zn(t)
            }
            var cr = "function" === typeof Object.is ? Object.is : function(e, t) {
                return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
            }
              , fr = Object.prototype.hasOwnProperty;
            function dr(e, t) {
                if (cr(e, t))
                    return !0;
                if ("object" !== typeof e || null === e || "object" !== typeof t || null === t)
                    return !1;
                var n = Object.keys(e)
                  , r = Object.keys(t);
                if (n.length !== r.length)
                    return !1;
                for (r = 0; r < n.length; r++)
                    if (!fr.call(t, n[r]) || !cr(e[n[r]], t[n[r]]))
                        return !1;
                return !0
            }
            function pr(e) {
                for (; e && e.firstChild; )
                    e = e.firstChild;
                return e
            }
            function vr(e, t) {
                var n, r = pr(e);
                for (e = 0; r; ) {
                    if (3 === r.nodeType) {
                        if (n = e + r.textContent.length,
                        e <= t && n >= t)
                            return {
                                node: r,
                                offset: t - e
                            };
                        e = n
                    }
                    e: {
                        for (; r; ) {
                            if (r.nextSibling) {
                                r = r.nextSibling;
                                break e
                            }
                            r = r.parentNode
                        }
                        r = void 0
                    }
                    r = pr(r)
                }
            }
            function hr(e, t) {
                return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? hr(e, t.parentNode) : "contains"in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
            }
            function mr() {
                for (var e = window, t = Z(); t instanceof e.HTMLIFrameElement; ) {
                    try {
                        var n = "string" === typeof t.contentWindow.location.href
                    } catch (r) {
                        n = !1
                    }
                    if (!n)
                        break;
                    t = Z((e = t.contentWindow).document)
                }
                return t
            }
            function yr(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
            }
            var gr = f && "documentMode"in document && 11 >= document.documentMode
              , br = null
              , wr = null
              , xr = null
              , Sr = !1;
            function Er(e, t, n) {
                var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                Sr || null == br || br !== Z(r) || ("selectionStart"in (r = br) && yr(r) ? r = {
                    start: r.selectionStart,
                    end: r.selectionEnd
                } : r = {
                    anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset
                },
                xr && dr(xr, r) || (xr = r,
                0 < (r = Ir(wr, "onSelect")).length && (t = new pn("onSelect","select",null,t,n),
                e.push({
                    event: t,
                    listeners: r
                }),
                t.target = br)))
            }
            Lt("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0),
            Lt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1),
            Lt(jt, 2);
            for (var kr = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Pr = 0; Pr < kr.length; Pr++)
                Rt.set(kr[Pr], 0);
            c("onMouseEnter", ["mouseout", "mouseover"]),
            c("onMouseLeave", ["mouseout", "mouseover"]),
            c("onPointerEnter", ["pointerout", "pointerover"]),
            c("onPointerLeave", ["pointerout", "pointerover"]),
            s("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
            s("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
            s("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
            s("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
            s("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
            s("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var Cr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
              , Or = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));
            function _r(e, t, n) {
                var r = e.type || "unknown-event";
                e.currentTarget = n,
                function(e, t, n, r, o, i, u, l, s) {
                    if (Ye.apply(this, arguments),
                    We) {
                        if (!We)
                            throw Error(a(198));
                        var c = He;
                        We = !1,
                        He = null,
                        Ke || (Ke = !0,
                        Qe = c)
                    }
                }(r, t, void 0, e),
                e.currentTarget = null
            }
            function Tr(e, t) {
                t = 0 !== (4 & t);
                for (var n = 0; n < e.length; n++) {
                    var r = e[n]
                      , o = r.event;
                    r = r.listeners;
                    e: {
                        var i = void 0;
                        if (t)
                            for (var a = r.length - 1; 0 <= a; a--) {
                                var u = r[a]
                                  , l = u.instance
                                  , s = u.currentTarget;
                                if (u = u.listener,
                                l !== i && o.isPropagationStopped())
                                    break e;
                                _r(o, u, s),
                                i = l
                            }
                        else
                            for (a = 0; a < r.length; a++) {
                                if (l = (u = r[a]).instance,
                                s = u.currentTarget,
                                u = u.listener,
                                l !== i && o.isPropagationStopped())
                                    break e;
                                _r(o, u, s),
                                i = l
                            }
                    }
                }
                if (Ke)
                    throw e = Qe,
                    Ke = !1,
                    Qe = null,
                    e
            }
            function Ar(e, t) {
                var n = ao(t)
                  , r = e + "__bubble";
                n.has(r) || (jr(t, e, 2, !1),
                n.add(r))
            }
            var Mr = "_reactListening" + Math.random().toString(36).slice(2);
            function Nr(e) {
                e[Mr] || (e[Mr] = !0,
                u.forEach((function(t) {
                    Or.has(t) || Rr(t, !1, e, null),
                    Rr(t, !0, e, null)
                }
                )))
            }
            function Rr(e, t, n, r) {
                var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0
                  , i = n;
                if ("selectionchange" === e && 9 !== n.nodeType && (i = n.ownerDocument),
                null !== r && !t && Or.has(e)) {
                    if ("scroll" !== e)
                        return;
                    o |= 2,
                    i = r
                }
                var a = ao(i)
                  , u = e + "__" + (t ? "capture" : "bubble");
                a.has(u) || (t && (o |= 4),
                jr(i, e, o, t),
                a.add(u))
            }
            function jr(e, t, n, r) {
                var o = Rt.get(t);
                switch (void 0 === o ? 2 : o) {
                case 0:
                    o = Xt;
                    break;
                case 1:
                    o = Gt;
                    break;
                default:
                    o = Zt
                }
                n = o.bind(null, t, n, e),
                o = void 0,
                !Ue || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (o = !0),
                r ? void 0 !== o ? e.addEventListener(t, n, {
                    capture: !0,
                    passive: o
                }) : e.addEventListener(t, n, !0) : void 0 !== o ? e.addEventListener(t, n, {
                    passive: o
                }) : e.addEventListener(t, n, !1)
            }
            function Lr(e, t, n, r, o) {
                var i = r;
                if (0 === (1 & t) && 0 === (2 & t) && null !== r)
                    e: for (; ; ) {
                        if (null === r)
                            return;
                        var a = r.tag;
                        if (3 === a || 4 === a) {
                            var u = r.stateNode.containerInfo;
                            if (u === o || 8 === u.nodeType && u.parentNode === o)
                                break;
                            if (4 === a)
                                for (a = r.return; null !== a; ) {
                                    var l = a.tag;
                                    if ((3 === l || 4 === l) && ((l = a.stateNode.containerInfo) === o || 8 === l.nodeType && l.parentNode === o))
                                        return;
                                    a = a.return
                                }
                            for (; null !== u; ) {
                                if (null === (a = no(u)))
                                    return;
                                if (5 === (l = a.tag) || 6 === l) {
                                    r = i = a;
                                    continue e
                                }
                                u = u.parentNode
                            }
                        }
                        r = r.return
                    }
                !function(e, t, n) {
                    if (Ve)
                        return e(t, n);
                    Ve = !0;
                    try {
                        De(e, t, n)
                    } finally {
                        Ve = !1,
                        Fe()
                    }
                }((function() {
                    var r = i
                      , o = Ce(n)
                      , a = [];
                    e: {
                        var u = Nt.get(e);
                        if (void 0 !== u) {
                            var l = pn
                              , s = e;
                            switch (e) {
                            case "keypress":
                                if (0 === on(n))
                                    break e;
                            case "keydown":
                            case "keyup":
                                l = An;
                                break;
                            case "focusin":
                                s = "focus",
                                l = bn;
                                break;
                            case "focusout":
                                s = "blur",
                                l = bn;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                l = bn;
                                break;
                            case "click":
                                if (2 === n.button)
                                    break e;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                l = yn;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                l = gn;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                l = Nn;
                                break;
                            case _t:
                            case Tt:
                            case At:
                                l = wn;
                                break;
                            case Mt:
                                l = Rn;
                                break;
                            case "scroll":
                                l = hn;
                                break;
                            case "wheel":
                                l = Ln;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                l = Sn;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                l = Mn
                            }
                            var c = 0 !== (4 & t)
                              , f = !c && "scroll" === e
                              , d = c ? null !== u ? u + "Capture" : null : u;
                            c = [];
                            for (var p, v = r; null !== v; ) {
                                var h = (p = v).stateNode;
                                if (5 === p.tag && null !== h && (p = h,
                                null !== d && (null != (h = ze(v, d)) && c.push(Dr(v, h, p)))),
                                f)
                                    break;
                                v = v.return
                            }
                            0 < c.length && (u = new l(u,s,null,n,o),
                            a.push({
                                event: u,
                                listeners: c
                            }))
                        }
                    }
                    if (0 === (7 & t)) {
                        if (l = "mouseout" === e || "pointerout" === e,
                        (!(u = "mouseover" === e || "pointerover" === e) || 0 !== (16 & t) || !(s = n.relatedTarget || n.fromElement) || !no(s) && !s[eo]) && (l || u) && (u = o.window === o ? o : (u = o.ownerDocument) ? u.defaultView || u.parentWindow : window,
                        l ? (l = r,
                        null !== (s = (s = n.relatedTarget || n.toElement) ? no(s) : null) && (s !== (f = Xe(s)) || 5 !== s.tag && 6 !== s.tag) && (s = null)) : (l = null,
                        s = r),
                        l !== s)) {
                            if (c = yn,
                            h = "onMouseLeave",
                            d = "onMouseEnter",
                            v = "mouse",
                            "pointerout" !== e && "pointerover" !== e || (c = Mn,
                            h = "onPointerLeave",
                            d = "onPointerEnter",
                            v = "pointer"),
                            f = null == l ? u : oo(l),
                            p = null == s ? u : oo(s),
                            (u = new c(h,v + "leave",l,n,o)).target = f,
                            u.relatedTarget = p,
                            h = null,
                            no(o) === r && ((c = new c(d,v + "enter",s,n,o)).target = p,
                            c.relatedTarget = f,
                            h = c),
                            f = h,
                            l && s)
                                e: {
                                    for (d = s,
                                    v = 0,
                                    p = c = l; p; p = Vr(p))
                                        v++;
                                    for (p = 0,
                                    h = d; h; h = Vr(h))
                                        p++;
                                    for (; 0 < v - p; )
                                        c = Vr(c),
                                        v--;
                                    for (; 0 < p - v; )
                                        d = Vr(d),
                                        p--;
                                    for (; v--; ) {
                                        if (c === d || null !== d && c === d.alternate)
                                            break e;
                                        c = Vr(c),
                                        d = Vr(d)
                                    }
                                    c = null
                                }
                            else
                                c = null;
                            null !== l && Fr(a, u, l, c, !1),
                            null !== s && null !== f && Fr(a, f, s, c, !0)
                        }
                        if ("select" === (l = (u = r ? oo(r) : window).nodeName && u.nodeName.toLowerCase()) || "input" === l && "file" === u.type)
                            var m = Jn;
                        else if (Qn(u))
                            if (er)
                                m = sr;
                            else {
                                m = ur;
                                var y = ar
                            }
                        else
                            (l = u.nodeName) && "input" === l.toLowerCase() && ("checkbox" === u.type || "radio" === u.type) && (m = lr);
                        switch (m && (m = m(e, r)) ? qn(a, m, n, o) : (y && y(e, u, r),
                        "focusout" === e && (y = u._wrapperState) && y.controlled && "number" === u.type && oe(u, "number", u.value)),
                        y = r ? oo(r) : window,
                        e) {
                        case "focusin":
                            (Qn(y) || "true" === y.contentEditable) && (br = y,
                            wr = r,
                            xr = null);
                            break;
                        case "focusout":
                            xr = wr = br = null;
                            break;
                        case "mousedown":
                            Sr = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            Sr = !1,
                            Er(a, n, o);
                            break;
                        case "selectionchange":
                            if (gr)
                                break;
                        case "keydown":
                        case "keyup":
                            Er(a, n, o)
                        }
                        var g;
                        if (In)
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
                                    break e
                                }
                                b = void 0
                            }
                        else
                            Hn ? $n(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
                        b && (zn && "ko" !== n.locale && (Hn || "onCompositionStart" !== b ? "onCompositionEnd" === b && Hn && (g = rn()) : (tn = "value"in (en = o) ? en.value : en.textContent,
                        Hn = !0)),
                        0 < (y = Ir(r, b)).length && (b = new En(b,e,null,n,o),
                        a.push({
                            event: b,
                            listeners: y
                        }),
                        g ? b.data = g : null !== (g = Wn(n)) && (b.data = g))),
                        (g = Fn ? function(e, t) {
                            switch (e) {
                            case "compositionend":
                                return Wn(t);
                            case "keypress":
                                return 32 !== t.which ? null : (Bn = !0,
                                Un);
                            case "textInput":
                                return (e = t.data) === Un && Bn ? null : e;
                            default:
                                return null
                            }
                        }(e, n) : function(e, t) {
                            if (Hn)
                                return "compositionend" === e || !In && $n(e, t) ? (e = rn(),
                                nn = tn = en = null,
                                Hn = !1,
                                e) : null;
                            switch (e) {
                            case "paste":
                            default:
                                return null;
                            case "keypress":
                                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                    if (t.char && 1 < t.char.length)
                                        return t.char;
                                    if (t.which)
                                        return String.fromCharCode(t.which)
                                }
                                return null;
                            case "compositionend":
                                return zn && "ko" !== t.locale ? null : t.data
                            }
                        }(e, n)) && (0 < (r = Ir(r, "onBeforeInput")).length && (o = new En("onBeforeInput","beforeinput",null,n,o),
                        a.push({
                            event: o,
                            listeners: r
                        }),
                        o.data = g))
                    }
                    Tr(a, t)
                }
                ))
            }
            function Dr(e, t, n) {
                return {
                    instance: e,
                    listener: t,
                    currentTarget: n
                }
            }
            function Ir(e, t) {
                for (var n = t + "Capture", r = []; null !== e; ) {
                    var o = e
                      , i = o.stateNode;
                    5 === o.tag && null !== i && (o = i,
                    null != (i = ze(e, n)) && r.unshift(Dr(e, i, o)),
                    null != (i = ze(e, t)) && r.push(Dr(e, i, o))),
                    e = e.return
                }
                return r
            }
            function Vr(e) {
                if (null === e)
                    return null;
                do {
                    e = e.return
                } while (e && 5 !== e.tag);
                return e || null
            }
            function Fr(e, t, n, r, o) {
                for (var i = t._reactName, a = []; null !== n && n !== r; ) {
                    var u = n
                      , l = u.alternate
                      , s = u.stateNode;
                    if (null !== l && l === r)
                        break;
                    5 === u.tag && null !== s && (u = s,
                    o ? null != (l = ze(n, i)) && a.unshift(Dr(n, l, u)) : o || null != (l = ze(n, i)) && a.push(Dr(n, l, u))),
                    n = n.return
                }
                0 !== a.length && e.push({
                    event: t,
                    listeners: a
                })
            }
            function zr() {}
            var Ur = null
              , Br = null;
            function $r(e, t) {
                switch (e) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    return !!t.autoFocus
                }
                return !1
            }
            function Wr(e, t) {
                return "textarea" === e || "option" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
            }
            var Hr = "function" === typeof setTimeout ? setTimeout : void 0
              , Kr = "function" === typeof clearTimeout ? clearTimeout : void 0;
            function Qr(e) {
                1 === e.nodeType ? e.textContent = "" : 9 === e.nodeType && (null != (e = e.body) && (e.textContent = ""))
            }
            function qr(e) {
                for (; null != e; e = e.nextSibling) {
                    var t = e.nodeType;
                    if (1 === t || 3 === t)
                        break
                }
                return e
            }
            function Yr(e) {
                e = e.previousSibling;
                for (var t = 0; e; ) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if ("$" === n || "$!" === n || "$?" === n) {
                            if (0 === t)
                                return e;
                            t--
                        } else
                            "/$" === n && t++
                    }
                    e = e.previousSibling
                }
                return null
            }
            var Xr = 0;
            var Gr = Math.random().toString(36).slice(2)
              , Zr = "__reactFiber$" + Gr
              , Jr = "__reactProps$" + Gr
              , eo = "__reactContainer$" + Gr
              , to = "__reactEvents$" + Gr;
            function no(e) {
                var t = e[Zr];
                if (t)
                    return t;
                for (var n = e.parentNode; n; ) {
                    if (t = n[eo] || n[Zr]) {
                        if (n = t.alternate,
                        null !== t.child || null !== n && null !== n.child)
                            for (e = Yr(e); null !== e; ) {
                                if (n = e[Zr])
                                    return n;
                                e = Yr(e)
                            }
                        return t
                    }
                    n = (e = n).parentNode
                }
                return null
            }
            function ro(e) {
                return !(e = e[Zr] || e[eo]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
            }
            function oo(e) {
                if (5 === e.tag || 6 === e.tag)
                    return e.stateNode;
                throw Error(a(33))
            }
            function io(e) {
                return e[Jr] || null
            }
            function ao(e) {
                var t = e[to];
                return void 0 === t && (t = e[to] = new Set),
                t
            }
            var uo = []
              , lo = -1;
            function so(e) {
                return {
                    current: e
                }
            }
            function co(e) {
                0 > lo || (e.current = uo[lo],
                uo[lo] = null,
                lo--)
            }
            function fo(e, t) {
                lo++,
                uo[lo] = e.current,
                e.current = t
            }
            var po = {}
              , vo = so(po)
              , ho = so(!1)
              , mo = po;
            function yo(e, t) {
                var n = e.type.contextTypes;
                if (!n)
                    return po;
                var r = e.stateNode;
                if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
                    return r.__reactInternalMemoizedMaskedChildContext;
                var o, i = {};
                for (o in n)
                    i[o] = t[o];
                return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t,
                e.__reactInternalMemoizedMaskedChildContext = i),
                i
            }
            function go(e) {
                return null !== (e = e.childContextTypes) && void 0 !== e
            }
            function bo() {
                co(ho),
                co(vo)
            }
            function wo(e, t, n) {
                if (vo.current !== po)
                    throw Error(a(168));
                fo(vo, t),
                fo(ho, n)
            }
            function xo(e, t, n) {
                var r = e.stateNode;
                if (e = t.childContextTypes,
                "function" !== typeof r.getChildContext)
                    return n;
                for (var i in r = r.getChildContext())
                    if (!(i in e))
                        throw Error(a(108, Q(t) || "Unknown", i));
                return o({}, n, r)
            }
            function So(e) {
                return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || po,
                mo = vo.current,
                fo(vo, e),
                fo(ho, ho.current),
                !0
            }
            function Eo(e, t, n) {
                var r = e.stateNode;
                if (!r)
                    throw Error(a(169));
                n ? (e = xo(e, t, mo),
                r.__reactInternalMemoizedMergedChildContext = e,
                co(ho),
                co(vo),
                fo(vo, e)) : co(ho),
                fo(ho, n)
            }
            var ko = null
              , Po = null
              , Co = i.unstable_runWithPriority
              , Oo = i.unstable_scheduleCallback
              , _o = i.unstable_cancelCallback
              , To = i.unstable_shouldYield
              , Ao = i.unstable_requestPaint
              , Mo = i.unstable_now
              , No = i.unstable_getCurrentPriorityLevel
              , Ro = i.unstable_ImmediatePriority
              , jo = i.unstable_UserBlockingPriority
              , Lo = i.unstable_NormalPriority
              , Do = i.unstable_LowPriority
              , Io = i.unstable_IdlePriority
              , Vo = {}
              , Fo = void 0 !== Ao ? Ao : function() {}
              , zo = null
              , Uo = null
              , Bo = !1
              , $o = Mo()
              , Wo = 1e4 > $o ? Mo : function() {
                return Mo() - $o
            }
            ;
            function Ho() {
                switch (No()) {
                case Ro:
                    return 99;
                case jo:
                    return 98;
                case Lo:
                    return 97;
                case Do:
                    return 96;
                case Io:
                    return 95;
                default:
                    throw Error(a(332))
                }
            }
            function Ko(e) {
                switch (e) {
                case 99:
                    return Ro;
                case 98:
                    return jo;
                case 97:
                    return Lo;
                case 96:
                    return Do;
                case 95:
                    return Io;
                default:
                    throw Error(a(332))
                }
            }
            function Qo(e, t) {
                return e = Ko(e),
                Co(e, t)
            }
            function qo(e, t, n) {
                return e = Ko(e),
                Oo(e, t, n)
            }
            function Yo() {
                if (null !== Uo) {
                    var e = Uo;
                    Uo = null,
                    _o(e)
                }
                Xo()
            }
            function Xo() {
                if (!Bo && null !== zo) {
                    Bo = !0;
                    var e = 0;
                    try {
                        var t = zo;
                        Qo(99, (function() {
                            for (; e < t.length; e++) {
                                var n = t[e];
                                do {
                                    n = n(!0)
                                } while (null !== n)
                            }
                        }
                        )),
                        zo = null
                    } catch (n) {
                        throw null !== zo && (zo = zo.slice(e + 1)),
                        Oo(Ro, Yo),
                        n
                    } finally {
                        Bo = !1
                    }
                }
            }
            var Go = x.ReactCurrentBatchConfig;
            function Zo(e, t) {
                if (e && e.defaultProps) {
                    for (var n in t = o({}, t),
                    e = e.defaultProps)
                        void 0 === t[n] && (t[n] = e[n]);
                    return t
                }
                return t
            }
            var Jo = so(null)
              , ei = null
              , ti = null
              , ni = null;
            function ri() {
                ni = ti = ei = null
            }
            function oi(e) {
                var t = Jo.current;
                co(Jo),
                e.type._context._currentValue = t
            }
            function ii(e, t) {
                for (; null !== e; ) {
                    var n = e.alternate;
                    if ((e.childLanes & t) === t) {
                        if (null === n || (n.childLanes & t) === t)
                            break;
                        n.childLanes |= t
                    } else
                        e.childLanes |= t,
                        null !== n && (n.childLanes |= t);
                    e = e.return
                }
            }
            function ai(e, t) {
                ei = e,
                ni = ti = null,
                null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (Ia = !0),
                e.firstContext = null)
            }
            function ui(e, t) {
                if (ni !== e && !1 !== t && 0 !== t)
                    if ("number" === typeof t && 1073741823 !== t || (ni = e,
                    t = 1073741823),
                    t = {
                        context: e,
                        observedBits: t,
                        next: null
                    },
                    null === ti) {
                        if (null === ei)
                            throw Error(a(308));
                        ti = t,
                        ei.dependencies = {
                            lanes: 0,
                            firstContext: t,
                            responders: null
                        }
                    } else
                        ti = ti.next = t;
                return e._currentValue
            }
            var li = !1;
            function si(e) {
                e.updateQueue = {
                    baseState: e.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {
                        pending: null
                    },
                    effects: null
                }
            }
            function ci(e, t) {
                e = e.updateQueue,
                t.updateQueue === e && (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    effects: e.effects
                })
            }
            function fi(e, t) {
                return {
                    eventTime: e,
                    lane: t,
                    tag: 0,
                    payload: null,
                    callback: null,
                    next: null
                }
            }
            function di(e, t) {
                if (null !== (e = e.updateQueue)) {
                    var n = (e = e.shared).pending;
                    null === n ? t.next = t : (t.next = n.next,
                    n.next = t),
                    e.pending = t
                }
            }
            function pi(e, t) {
                var n = e.updateQueue
                  , r = e.alternate;
                if (null !== r && n === (r = r.updateQueue)) {
                    var o = null
                      , i = null;
                    if (null !== (n = n.firstBaseUpdate)) {
                        do {
                            var a = {
                                eventTime: n.eventTime,
                                lane: n.lane,
                                tag: n.tag,
                                payload: n.payload,
                                callback: n.callback,
                                next: null
                            };
                            null === i ? o = i = a : i = i.next = a,
                            n = n.next
                        } while (null !== n);
                        null === i ? o = i = t : i = i.next = t
                    } else
                        o = i = t;
                    return n = {
                        baseState: r.baseState,
                        firstBaseUpdate: o,
                        lastBaseUpdate: i,
                        shared: r.shared,
                        effects: r.effects
                    },
                    void (e.updateQueue = n)
                }
                null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t,
                n.lastBaseUpdate = t
            }
            function vi(e, t, n, r) {
                var i = e.updateQueue;
                li = !1;
                var a = i.firstBaseUpdate
                  , u = i.lastBaseUpdate
                  , l = i.shared.pending;
                if (null !== l) {
                    i.shared.pending = null;
                    var s = l
                      , c = s.next;
                    s.next = null,
                    null === u ? a = c : u.next = c,
                    u = s;
                    var f = e.alternate;
                    if (null !== f) {
                        var d = (f = f.updateQueue).lastBaseUpdate;
                        d !== u && (null === d ? f.firstBaseUpdate = c : d.next = c,
                        f.lastBaseUpdate = s)
                    }
                }
                if (null !== a) {
                    for (d = i.baseState,
                    u = 0,
                    f = c = s = null; ; ) {
                        l = a.lane;
                        var p = a.eventTime;
                        if ((r & l) === l) {
                            null !== f && (f = f.next = {
                                eventTime: p,
                                lane: 0,
                                tag: a.tag,
                                payload: a.payload,
                                callback: a.callback,
                                next: null
                            });
                            e: {
                                var v = e
                                  , h = a;
                                switch (l = t,
                                p = n,
                                h.tag) {
                                case 1:
                                    if ("function" === typeof (v = h.payload)) {
                                        d = v.call(p, d, l);
                                        break e
                                    }
                                    d = v;
                                    break e;
                                case 3:
                                    v.flags = -4097 & v.flags | 64;
                                case 0:
                                    if (null === (l = "function" === typeof (v = h.payload) ? v.call(p, d, l) : v) || void 0 === l)
                                        break e;
                                    d = o({}, d, l);
                                    break e;
                                case 2:
                                    li = !0
                                }
                            }
                            null !== a.callback && (e.flags |= 32,
                            null === (l = i.effects) ? i.effects = [a] : l.push(a))
                        } else
                            p = {
                                eventTime: p,
                                lane: l,
                                tag: a.tag,
                                payload: a.payload,
                                callback: a.callback,
                                next: null
                            },
                            null === f ? (c = f = p,
                            s = d) : f = f.next = p,
                            u |= l;
                        if (null === (a = a.next)) {
                            if (null === (l = i.shared.pending))
                                break;
                            a = l.next,
                            l.next = null,
                            i.lastBaseUpdate = l,
                            i.shared.pending = null
                        }
                    }
                    null === f && (s = d),
                    i.baseState = s,
                    i.firstBaseUpdate = c,
                    i.lastBaseUpdate = f,
                    Uu |= u,
                    e.lanes = u,
                    e.memoizedState = d
                }
            }
            function hi(e, t, n) {
                if (e = t.effects,
                t.effects = null,
                null !== e)
                    for (t = 0; t < e.length; t++) {
                        var r = e[t]
                          , o = r.callback;
                        if (null !== o) {
                            if (r.callback = null,
                            r = n,
                            "function" !== typeof o)
                                throw Error(a(191, o));
                            o.call(r)
                        }
                    }
            }
            var mi = (new r.Component).refs;
            function yi(e, t, n, r) {
                n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : o({}, t, n),
                e.memoizedState = n,
                0 === e.lanes && (e.updateQueue.baseState = n)
            }
            var gi = {
                isMounted: function(e) {
                    return !!(e = e._reactInternals) && Xe(e) === e
                },
                enqueueSetState: function(e, t, n) {
                    e = e._reactInternals;
                    var r = dl()
                      , o = pl(e)
                      , i = fi(r, o);
                    i.payload = t,
                    void 0 !== n && null !== n && (i.callback = n),
                    di(e, i),
                    vl(e, o, r)
                },
                enqueueReplaceState: function(e, t, n) {
                    e = e._reactInternals;
                    var r = dl()
                      , o = pl(e)
                      , i = fi(r, o);
                    i.tag = 1,
                    i.payload = t,
                    void 0 !== n && null !== n && (i.callback = n),
                    di(e, i),
                    vl(e, o, r)
                },
                enqueueForceUpdate: function(e, t) {
                    e = e._reactInternals;
                    var n = dl()
                      , r = pl(e)
                      , o = fi(n, r);
                    o.tag = 2,
                    void 0 !== t && null !== t && (o.callback = t),
                    di(e, o),
                    vl(e, r, n)
                }
            };
            function bi(e, t, n, r, o, i, a) {
                return "function" === typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, i, a) : !t.prototype || !t.prototype.isPureReactComponent || (!dr(n, r) || !dr(o, i))
            }
            function wi(e, t, n) {
                var r = !1
                  , o = po
                  , i = t.contextType;
                return "object" === typeof i && null !== i ? i = ui(i) : (o = go(t) ? mo : vo.current,
                i = (r = null !== (r = t.contextTypes) && void 0 !== r) ? yo(e, o) : po),
                t = new t(n,i),
                e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null,
                t.updater = gi,
                e.stateNode = t,
                t._reactInternals = e,
                r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o,
                e.__reactInternalMemoizedMaskedChildContext = i),
                t
            }
            function xi(e, t, n, r) {
                e = t.state,
                "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
                "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
                t.state !== e && gi.enqueueReplaceState(t, t.state, null)
            }
            function Si(e, t, n, r) {
                var o = e.stateNode;
                o.props = n,
                o.state = e.memoizedState,
                o.refs = mi,
                si(e);
                var i = t.contextType;
                "object" === typeof i && null !== i ? o.context = ui(i) : (i = go(t) ? mo : vo.current,
                o.context = yo(e, i)),
                vi(e, n, o, r),
                o.state = e.memoizedState,
                "function" === typeof (i = t.getDerivedStateFromProps) && (yi(e, t, i, n),
                o.state = e.memoizedState),
                "function" === typeof t.getDerivedStateFromProps || "function" === typeof o.getSnapshotBeforeUpdate || "function" !== typeof o.UNSAFE_componentWillMount && "function" !== typeof o.componentWillMount || (t = o.state,
                "function" === typeof o.componentWillMount && o.componentWillMount(),
                "function" === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(),
                t !== o.state && gi.enqueueReplaceState(o, o.state, null),
                vi(e, n, o, r),
                o.state = e.memoizedState),
                "function" === typeof o.componentDidMount && (e.flags |= 4)
            }
            var Ei = Array.isArray;
            function ki(e, t, n) {
                if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
                    if (n._owner) {
                        if (n = n._owner) {
                            if (1 !== n.tag)
                                throw Error(a(309));
                            var r = n.stateNode
                        }
                        if (!r)
                            throw Error(a(147, e));
                        var o = "" + e;
                        return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === o ? t.ref : (t = function(e) {
                            var t = r.refs;
                            t === mi && (t = r.refs = {}),
                            null === e ? delete t[o] : t[o] = e
                        }
                        ,
                        t._stringRef = o,
                        t)
                    }
                    if ("string" !== typeof e)
                        throw Error(a(284));
                    if (!n._owner)
                        throw Error(a(290, e))
                }
                return e
            }
            function Pi(e, t) {
                if ("textarea" !== e.type)
                    throw Error(a(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t))
            }
            function Ci(e) {
                function t(t, n) {
                    if (e) {
                        var r = t.lastEffect;
                        null !== r ? (r.nextEffect = n,
                        t.lastEffect = n) : t.firstEffect = t.lastEffect = n,
                        n.nextEffect = null,
                        n.flags = 8
                    }
                }
                function n(n, r) {
                    if (!e)
                        return null;
                    for (; null !== r; )
                        t(n, r),
                        r = r.sibling;
                    return null
                }
                function r(e, t) {
                    for (e = new Map; null !== t; )
                        null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                        t = t.sibling;
                    return e
                }
                function o(e, t) {
                    return (e = Kl(e, t)).index = 0,
                    e.sibling = null,
                    e
                }
                function i(t, n, r) {
                    return t.index = r,
                    e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags = 2,
                    n) : r : (t.flags = 2,
                    n) : n
                }
                function u(t) {
                    return e && null === t.alternate && (t.flags = 2),
                    t
                }
                function l(e, t, n, r) {
                    return null === t || 6 !== t.tag ? ((t = Xl(n, e.mode, r)).return = e,
                    t) : ((t = o(t, n)).return = e,
                    t)
                }
                function s(e, t, n, r) {
                    return null !== t && t.elementType === n.type ? ((r = o(t, n.props)).ref = ki(e, t, n),
                    r.return = e,
                    r) : ((r = Ql(n.type, n.key, n.props, null, e.mode, r)).ref = ki(e, t, n),
                    r.return = e,
                    r)
                }
                function c(e, t, n, r) {
                    return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Gl(n, e.mode, r)).return = e,
                    t) : ((t = o(t, n.children || [])).return = e,
                    t)
                }
                function f(e, t, n, r, i) {
                    return null === t || 7 !== t.tag ? ((t = ql(n, e.mode, r, i)).return = e,
                    t) : ((t = o(t, n)).return = e,
                    t)
                }
                function d(e, t, n) {
                    if ("string" === typeof t || "number" === typeof t)
                        return (t = Xl("" + t, e.mode, n)).return = e,
                        t;
                    if ("object" === typeof t && null !== t) {
                        switch (t.$$typeof) {
                        case S:
                            return (n = Ql(t.type, t.key, t.props, null, e.mode, n)).ref = ki(e, null, t),
                            n.return = e,
                            n;
                        case E:
                            return (t = Gl(t, e.mode, n)).return = e,
                            t
                        }
                        if (Ei(t) || B(t))
                            return (t = ql(t, e.mode, n, null)).return = e,
                            t;
                        Pi(e, t)
                    }
                    return null
                }
                function p(e, t, n, r) {
                    var o = null !== t ? t.key : null;
                    if ("string" === typeof n || "number" === typeof n)
                        return null !== o ? null : l(e, t, "" + n, r);
                    if ("object" === typeof n && null !== n) {
                        switch (n.$$typeof) {
                        case S:
                            return n.key === o ? n.type === k ? f(e, t, n.props.children, r, o) : s(e, t, n, r) : null;
                        case E:
                            return n.key === o ? c(e, t, n, r) : null
                        }
                        if (Ei(n) || B(n))
                            return null !== o ? null : f(e, t, n, r, null);
                        Pi(e, n)
                    }
                    return null
                }
                function v(e, t, n, r, o) {
                    if ("string" === typeof r || "number" === typeof r)
                        return l(t, e = e.get(n) || null, "" + r, o);
                    if ("object" === typeof r && null !== r) {
                        switch (r.$$typeof) {
                        case S:
                            return e = e.get(null === r.key ? n : r.key) || null,
                            r.type === k ? f(t, e, r.props.children, o, r.key) : s(t, e, r, o);
                        case E:
                            return c(t, e = e.get(null === r.key ? n : r.key) || null, r, o)
                        }
                        if (Ei(r) || B(r))
                            return f(t, e = e.get(n) || null, r, o, null);
                        Pi(t, r)
                    }
                    return null
                }
                function h(o, a, u, l) {
                    for (var s = null, c = null, f = a, h = a = 0, m = null; null !== f && h < u.length; h++) {
                        f.index > h ? (m = f,
                        f = null) : m = f.sibling;
                        var y = p(o, f, u[h], l);
                        if (null === y) {
                            null === f && (f = m);
                            break
                        }
                        e && f && null === y.alternate && t(o, f),
                        a = i(y, a, h),
                        null === c ? s = y : c.sibling = y,
                        c = y,
                        f = m
                    }
                    if (h === u.length)
                        return n(o, f),
                        s;
                    if (null === f) {
                        for (; h < u.length; h++)
                            null !== (f = d(o, u[h], l)) && (a = i(f, a, h),
                            null === c ? s = f : c.sibling = f,
                            c = f);
                        return s
                    }
                    for (f = r(o, f); h < u.length; h++)
                        null !== (m = v(f, o, h, u[h], l)) && (e && null !== m.alternate && f.delete(null === m.key ? h : m.key),
                        a = i(m, a, h),
                        null === c ? s = m : c.sibling = m,
                        c = m);
                    return e && f.forEach((function(e) {
                        return t(o, e)
                    }
                    )),
                    s
                }
                function m(o, u, l, s) {
                    var c = B(l);
                    if ("function" !== typeof c)
                        throw Error(a(150));
                    if (null == (l = c.call(l)))
                        throw Error(a(151));
                    for (var f = c = null, h = u, m = u = 0, y = null, g = l.next(); null !== h && !g.done; m++,
                    g = l.next()) {
                        h.index > m ? (y = h,
                        h = null) : y = h.sibling;
                        var b = p(o, h, g.value, s);
                        if (null === b) {
                            null === h && (h = y);
                            break
                        }
                        e && h && null === b.alternate && t(o, h),
                        u = i(b, u, m),
                        null === f ? c = b : f.sibling = b,
                        f = b,
                        h = y
                    }
                    if (g.done)
                        return n(o, h),
                        c;
                    if (null === h) {
                        for (; !g.done; m++,
                        g = l.next())
                            null !== (g = d(o, g.value, s)) && (u = i(g, u, m),
                            null === f ? c = g : f.sibling = g,
                            f = g);
                        return c
                    }
                    for (h = r(o, h); !g.done; m++,
                    g = l.next())
                        null !== (g = v(h, o, m, g.value, s)) && (e && null !== g.alternate && h.delete(null === g.key ? m : g.key),
                        u = i(g, u, m),
                        null === f ? c = g : f.sibling = g,
                        f = g);
                    return e && h.forEach((function(e) {
                        return t(o, e)
                    }
                    )),
                    c
                }
                return function(e, r, i, l) {
                    var s = "object" === typeof i && null !== i && i.type === k && null === i.key;
                    s && (i = i.props.children);
                    var c = "object" === typeof i && null !== i;
                    if (c)
                        switch (i.$$typeof) {
                        case S:
                            e: {
                                for (c = i.key,
                                s = r; null !== s; ) {
                                    if (s.key === c) {
                                        if (7 === s.tag) {
                                            if (i.type === k) {
                                                n(e, s.sibling),
                                                (r = o(s, i.props.children)).return = e,
                                                e = r;
                                                break e
                                            }
                                        } else if (s.elementType === i.type) {
                                            n(e, s.sibling),
                                            (r = o(s, i.props)).ref = ki(e, s, i),
                                            r.return = e,
                                            e = r;
                                            break e
                                        }
                                        n(e, s);
                                        break
                                    }
                                    t(e, s),
                                    s = s.sibling
                                }
                                i.type === k ? ((r = ql(i.props.children, e.mode, l, i.key)).return = e,
                                e = r) : ((l = Ql(i.type, i.key, i.props, null, e.mode, l)).ref = ki(e, r, i),
                                l.return = e,
                                e = l)
                            }
                            return u(e);
                        case E:
                            e: {
                                for (s = i.key; null !== r; ) {
                                    if (r.key === s) {
                                        if (4 === r.tag && r.stateNode.containerInfo === i.containerInfo && r.stateNode.implementation === i.implementation) {
                                            n(e, r.sibling),
                                            (r = o(r, i.children || [])).return = e,
                                            e = r;
                                            break e
                                        }
                                        n(e, r);
                                        break
                                    }
                                    t(e, r),
                                    r = r.sibling
                                }
                                (r = Gl(i, e.mode, l)).return = e,
                                e = r
                            }
                            return u(e)
                        }
                    if ("string" === typeof i || "number" === typeof i)
                        return i = "" + i,
                        null !== r && 6 === r.tag ? (n(e, r.sibling),
                        (r = o(r, i)).return = e,
                        e = r) : (n(e, r),
                        (r = Xl(i, e.mode, l)).return = e,
                        e = r),
                        u(e);
                    if (Ei(i))
                        return h(e, r, i, l);
                    if (B(i))
                        return m(e, r, i, l);
                    if (c && Pi(e, i),
                    "undefined" === typeof i && !s)
                        switch (e.tag) {
                        case 1:
                        case 22:
                        case 0:
                        case 11:
                        case 15:
                            throw Error(a(152, Q(e.type) || "Component"))
                        }
                    return n(e, r)
                }
            }
            var Oi = Ci(!0)
              , _i = Ci(!1)
              , Ti = {}
              , Ai = so(Ti)
              , Mi = so(Ti)
              , Ni = so(Ti);
            function Ri(e) {
                if (e === Ti)
                    throw Error(a(174));
                return e
            }
            function ji(e, t) {
                switch (fo(Ni, t),
                fo(Mi, e),
                fo(Ai, Ti),
                e = t.nodeType) {
                case 9:
                case 11:
                    t = (t = t.documentElement) ? t.namespaceURI : ve(null, "");
                    break;
                default:
                    t = ve(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                }
                co(Ai),
                fo(Ai, t)
            }
            function Li() {
                co(Ai),
                co(Mi),
                co(Ni)
            }
            function Di(e) {
                Ri(Ni.current);
                var t = Ri(Ai.current)
                  , n = ve(t, e.type);
                t !== n && (fo(Mi, e),
                fo(Ai, n))
            }
            function Ii(e) {
                Mi.current === e && (co(Ai),
                co(Mi))
            }
            var Vi = so(0);
            function Fi(e) {
                for (var t = e; null !== t; ) {
                    if (13 === t.tag) {
                        var n = t.memoizedState;
                        if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data))
                            return t
                    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                        if (0 !== (64 & t.flags))
                            return t
                    } else if (null !== t.child) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break;
                    for (; null === t.sibling; ) {
                        if (null === t.return || t.return === e)
                            return null;
                        t = t.return
                    }
                    t.sibling.return = t.return,
                    t = t.sibling
                }
                return null
            }
            var zi = null
              , Ui = null
              , Bi = !1;
            function $i(e, t) {
                var n = Wl(5, null, null, 0);
                n.elementType = "DELETED",
                n.type = "DELETED",
                n.stateNode = t,
                n.return = e,
                n.flags = 8,
                null !== e.lastEffect ? (e.lastEffect.nextEffect = n,
                e.lastEffect = n) : e.firstEffect = e.lastEffect = n
            }
            function Wi(e, t) {
                switch (e.tag) {
                case 5:
                    var n = e.type;
                    return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t,
                    !0);
                case 6:
                    return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t,
                    !0);
                default:
                    return !1
                }
            }
            function Hi(e) {
                if (Bi) {
                    var t = Ui;
                    if (t) {
                        var n = t;
                        if (!Wi(e, t)) {
                            if (!(t = qr(n.nextSibling)) || !Wi(e, t))
                                return e.flags = -1025 & e.flags | 2,
                                Bi = !1,
                                void (zi = e);
                            $i(zi, n)
                        }
                        zi = e,
                        Ui = qr(t.firstChild)
                    } else
                        e.flags = -1025 & e.flags | 2,
                        Bi = !1,
                        zi = e
                }
            }
            function Ki(e) {
                for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
                    e = e.return;
                zi = e
            }
            function Qi(e) {
                if (e !== zi)
                    return !1;
                if (!Bi)
                    return Ki(e),
                    Bi = !0,
                    !1;
                var t = e.type;
                if (5 !== e.tag || "head" !== t && "body" !== t && !Wr(t, e.memoizedProps))
                    for (t = Ui; t; )
                        $i(e, t),
                        t = qr(t.nextSibling);
                if (Ki(e),
                13 === e.tag) {
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                        throw Error(a(317));
                    e: {
                        for (e = e.nextSibling,
                        t = 0; e; ) {
                            if (8 === e.nodeType) {
                                var n = e.data;
                                if ("/$" === n) {
                                    if (0 === t) {
                                        Ui = qr(e.nextSibling);
                                        break e
                                    }
                                    t--
                                } else
                                    "$" !== n && "$!" !== n && "$?" !== n || t++
                            }
                            e = e.nextSibling
                        }
                        Ui = null
                    }
                } else
                    Ui = zi ? qr(e.stateNode.nextSibling) : null;
                return !0
            }
            function qi() {
                Ui = zi = null,
                Bi = !1
            }
            var Yi = [];
            function Xi() {
                for (var e = 0; e < Yi.length; e++)
                    Yi[e]._workInProgressVersionPrimary = null;
                Yi.length = 0
            }
            var Gi = x.ReactCurrentDispatcher
              , Zi = x.ReactCurrentBatchConfig
              , Ji = 0
              , ea = null
              , ta = null
              , na = null
              , ra = !1
              , oa = !1;
            function ia() {
                throw Error(a(321))
            }
            function aa(e, t) {
                if (null === t)
                    return !1;
                for (var n = 0; n < t.length && n < e.length; n++)
                    if (!cr(e[n], t[n]))
                        return !1;
                return !0
            }
            function ua(e, t, n, r, o, i) {
                if (Ji = i,
                ea = t,
                t.memoizedState = null,
                t.updateQueue = null,
                t.lanes = 0,
                Gi.current = null === e || null === e.memoizedState ? Ra : ja,
                e = n(r, o),
                oa) {
                    i = 0;
                    do {
                        if (oa = !1,
                        !(25 > i))
                            throw Error(a(301));
                        i += 1,
                        na = ta = null,
                        t.updateQueue = null,
                        Gi.current = La,
                        e = n(r, o)
                    } while (oa)
                }
                if (Gi.current = Na,
                t = null !== ta && null !== ta.next,
                Ji = 0,
                na = ta = ea = null,
                ra = !1,
                t)
                    throw Error(a(300));
                return e
            }
            function la() {
                var e = {
                    memoizedState: null,
                    baseState: null,
                    baseQueue: null,
                    queue: null,
                    next: null
                };
                return null === na ? ea.memoizedState = na = e : na = na.next = e,
                na
            }
            function sa() {
                if (null === ta) {
                    var e = ea.alternate;
                    e = null !== e ? e.memoizedState : null
                } else
                    e = ta.next;
                var t = null === na ? ea.memoizedState : na.next;
                if (null !== t)
                    na = t,
                    ta = e;
                else {
                    if (null === e)
                        throw Error(a(310));
                    e = {
                        memoizedState: (ta = e).memoizedState,
                        baseState: ta.baseState,
                        baseQueue: ta.baseQueue,
                        queue: ta.queue,
                        next: null
                    },
                    null === na ? ea.memoizedState = na = e : na = na.next = e
                }
                return na
            }
            function ca(e, t) {
                return "function" === typeof t ? t(e) : t
            }
            function fa(e) {
                var t = sa()
                  , n = t.queue;
                if (null === n)
                    throw Error(a(311));
                n.lastRenderedReducer = e;
                var r = ta
                  , o = r.baseQueue
                  , i = n.pending;
                if (null !== i) {
                    if (null !== o) {
                        var u = o.next;
                        o.next = i.next,
                        i.next = u
                    }
                    r.baseQueue = o = i,
                    n.pending = null
                }
                if (null !== o) {
                    o = o.next,
                    r = r.baseState;
                    var l = u = i = null
                      , s = o;
                    do {
                        var c = s.lane;
                        if ((Ji & c) === c)
                            null !== l && (l = l.next = {
                                lane: 0,
                                action: s.action,
                                eagerReducer: s.eagerReducer,
                                eagerState: s.eagerState,
                                next: null
                            }),
                            r = s.eagerReducer === e ? s.eagerState : e(r, s.action);
                        else {
                            var f = {
                                lane: c,
                                action: s.action,
                                eagerReducer: s.eagerReducer,
                                eagerState: s.eagerState,
                                next: null
                            };
                            null === l ? (u = l = f,
                            i = r) : l = l.next = f,
                            ea.lanes |= c,
                            Uu |= c
                        }
                        s = s.next
                    } while (null !== s && s !== o);
                    null === l ? i = r : l.next = u,
                    cr(r, t.memoizedState) || (Ia = !0),
                    t.memoizedState = r,
                    t.baseState = i,
                    t.baseQueue = l,
                    n.lastRenderedState = r
                }
                return [t.memoizedState, n.dispatch]
            }
            function da(e) {
                var t = sa()
                  , n = t.queue;
                if (null === n)
                    throw Error(a(311));
                n.lastRenderedReducer = e;
                var r = n.dispatch
                  , o = n.pending
                  , i = t.memoizedState;
                if (null !== o) {
                    n.pending = null;
                    var u = o = o.next;
                    do {
                        i = e(i, u.action),
                        u = u.next
                    } while (u !== o);
                    cr(i, t.memoizedState) || (Ia = !0),
                    t.memoizedState = i,
                    null === t.baseQueue && (t.baseState = i),
                    n.lastRenderedState = i
                }
                return [i, r]
            }
            function pa(e, t, n) {
                var r = t._getVersion;
                r = r(t._source);
                var o = t._workInProgressVersionPrimary;
                if (null !== o ? e = o === r : (e = e.mutableReadLanes,
                (e = (Ji & e) === e) && (t._workInProgressVersionPrimary = r,
                Yi.push(t))),
                e)
                    return n(t._source);
                throw Yi.push(t),
                Error(a(350))
            }
            function va(e, t, n, r) {
                var o = Ru;
                if (null === o)
                    throw Error(a(349));
                var i = t._getVersion
                  , u = i(t._source)
                  , l = Gi.current
                  , s = l.useState((function() {
                    return pa(o, t, n)
                }
                ))
                  , c = s[1]
                  , f = s[0];
                s = na;
                var d = e.memoizedState
                  , p = d.refs
                  , v = p.getSnapshot
                  , h = d.source;
                d = d.subscribe;
                var m = ea;
                return e.memoizedState = {
                    refs: p,
                    source: t,
                    subscribe: r
                },
                l.useEffect((function() {
                    p.getSnapshot = n,
                    p.setSnapshot = c;
                    var e = i(t._source);
                    if (!cr(u, e)) {
                        e = n(t._source),
                        cr(f, e) || (c(e),
                        e = pl(m),
                        o.mutableReadLanes |= e & o.pendingLanes),
                        e = o.mutableReadLanes,
                        o.entangledLanes |= e;
                        for (var r = o.entanglements, a = e; 0 < a; ) {
                            var l = 31 - Wt(a)
                              , s = 1 << l;
                            r[l] |= e,
                            a &= ~s
                        }
                    }
                }
                ), [n, t, r]),
                l.useEffect((function() {
                    return r(t._source, (function() {
                        var e = p.getSnapshot
                          , n = p.setSnapshot;
                        try {
                            n(e(t._source));
                            var r = pl(m);
                            o.mutableReadLanes |= r & o.pendingLanes
                        } catch (i) {
                            n((function() {
                                throw i
                            }
                            ))
                        }
                    }
                    ))
                }
                ), [t, r]),
                cr(v, n) && cr(h, t) && cr(d, r) || ((e = {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: ca,
                    lastRenderedState: f
                }).dispatch = c = Ma.bind(null, ea, e),
                s.queue = e,
                s.baseQueue = null,
                f = pa(o, t, n),
                s.memoizedState = s.baseState = f),
                f
            }
            function ha(e, t, n) {
                return va(sa(), e, t, n)
            }
            function ma(e) {
                var t = la();
                return "function" === typeof e && (e = e()),
                t.memoizedState = t.baseState = e,
                e = (e = t.queue = {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: ca,
                    lastRenderedState: e
                }).dispatch = Ma.bind(null, ea, e),
                [t.memoizedState, e]
            }
            function ya(e, t, n, r) {
                return e = {
                    tag: e,
                    create: t,
                    destroy: n,
                    deps: r,
                    next: null
                },
                null === (t = ea.updateQueue) ? (t = {
                    lastEffect: null
                },
                ea.updateQueue = t,
                t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next,
                n.next = e,
                e.next = r,
                t.lastEffect = e),
                e
            }
            function ga(e) {
                return e = {
                    current: e
                },
                la().memoizedState = e
            }
            function ba() {
                return sa().memoizedState
            }
            function wa(e, t, n, r) {
                var o = la();
                ea.flags |= e,
                o.memoizedState = ya(1 | t, n, void 0, void 0 === r ? null : r)
            }
            function xa(e, t, n, r) {
                var o = sa();
                r = void 0 === r ? null : r;
                var i = void 0;
                if (null !== ta) {
                    var a = ta.memoizedState;
                    if (i = a.destroy,
                    null !== r && aa(r, a.deps))
                        return void ya(t, n, i, r)
                }
                ea.flags |= e,
                o.memoizedState = ya(1 | t, n, i, r)
            }
            function Sa(e, t) {
                return wa(516, 4, e, t)
            }
            function Ea(e, t) {
                return xa(516, 4, e, t)
            }
            function ka(e, t) {
                return xa(4, 2, e, t)
            }
            function Pa(e, t) {
                return "function" === typeof t ? (e = e(),
                t(e),
                function() {
                    t(null)
                }
                ) : null !== t && void 0 !== t ? (e = e(),
                t.current = e,
                function() {
                    t.current = null
                }
                ) : void 0
            }
            function Ca(e, t, n) {
                return n = null !== n && void 0 !== n ? n.concat([e]) : null,
                xa(4, 2, Pa.bind(null, t, e), n)
            }
            function Oa() {}
            function _a(e, t) {
                var n = sa();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && aa(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
                e)
            }
            function Ta(e, t) {
                var n = sa();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && aa(t, r[1]) ? r[0] : (e = e(),
                n.memoizedState = [e, t],
                e)
            }
            function Aa(e, t) {
                var n = Ho();
                Qo(98 > n ? 98 : n, (function() {
                    e(!0)
                }
                )),
                Qo(97 < n ? 97 : n, (function() {
                    var n = Zi.transition;
                    Zi.transition = 1;
                    try {
                        e(!1),
                        t()
                    } finally {
                        Zi.transition = n
                    }
                }
                ))
            }
            function Ma(e, t, n) {
                var r = dl()
                  , o = pl(e)
                  , i = {
                    lane: o,
                    action: n,
                    eagerReducer: null,
                    eagerState: null,
                    next: null
                }
                  , a = t.pending;
                if (null === a ? i.next = i : (i.next = a.next,
                a.next = i),
                t.pending = i,
                a = e.alternate,
                e === ea || null !== a && a === ea)
                    oa = ra = !0;
                else {
                    if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer))
                        try {
                            var u = t.lastRenderedState
                              , l = a(u, n);
                            if (i.eagerReducer = a,
                            i.eagerState = l,
                            cr(l, u))
                                return
                        } catch (s) {}
                    vl(e, o, r)
                }
            }
            var Na = {
                readContext: ui,
                useCallback: ia,
                useContext: ia,
                useEffect: ia,
                useImperativeHandle: ia,
                useLayoutEffect: ia,
                useMemo: ia,
                useReducer: ia,
                useRef: ia,
                useState: ia,
                useDebugValue: ia,
                useDeferredValue: ia,
                useTransition: ia,
                useMutableSource: ia,
                useOpaqueIdentifier: ia,
                unstable_isNewReconciler: !1
            }
              , Ra = {
                readContext: ui,
                useCallback: function(e, t) {
                    return la().memoizedState = [e, void 0 === t ? null : t],
                    e
                },
                useContext: ui,
                useEffect: Sa,
                useImperativeHandle: function(e, t, n) {
                    return n = null !== n && void 0 !== n ? n.concat([e]) : null,
                    wa(4, 2, Pa.bind(null, t, e), n)
                },
                useLayoutEffect: function(e, t) {
                    return wa(4, 2, e, t)
                },
                useMemo: function(e, t) {
                    var n = la();
                    return t = void 0 === t ? null : t,
                    e = e(),
                    n.memoizedState = [e, t],
                    e
                },
                useReducer: function(e, t, n) {
                    var r = la();
                    return t = void 0 !== n ? n(t) : t,
                    r.memoizedState = r.baseState = t,
                    e = (e = r.queue = {
                        pending: null,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t
                    }).dispatch = Ma.bind(null, ea, e),
                    [r.memoizedState, e]
                },
                useRef: ga,
                useState: ma,
                useDebugValue: Oa,
                useDeferredValue: function(e) {
                    var t = ma(e)
                      , n = t[0]
                      , r = t[1];
                    return Sa((function() {
                        var t = Zi.transition;
                        Zi.transition = 1;
                        try {
                            r(e)
                        } finally {
                            Zi.transition = t
                        }
                    }
                    ), [e]),
                    n
                },
                useTransition: function() {
                    var e = ma(!1)
                      , t = e[0];
                    return ga(e = Aa.bind(null, e[1])),
                    [e, t]
                },
                useMutableSource: function(e, t, n) {
                    var r = la();
                    return r.memoizedState = {
                        refs: {
                            getSnapshot: t,
                            setSnapshot: null
                        },
                        source: e,
                        subscribe: n
                    },
                    va(r, e, t, n)
                },
                useOpaqueIdentifier: function() {
                    if (Bi) {
                        var e = !1
                          , t = function(e) {
                            return {
                                $$typeof: L,
                                toString: e,
                                valueOf: e
                            }
                        }((function() {
                            throw e || (e = !0,
                            n("r:" + (Xr++).toString(36))),
                            Error(a(355))
                        }
                        ))
                          , n = ma(t)[1];
                        return 0 === (2 & ea.mode) && (ea.flags |= 516,
                        ya(5, (function() {
                            n("r:" + (Xr++).toString(36))
                        }
                        ), void 0, null)),
                        t
                    }
                    return ma(t = "r:" + (Xr++).toString(36)),
                    t
                },
                unstable_isNewReconciler: !1
            }
              , ja = {
                readContext: ui,
                useCallback: _a,
                useContext: ui,
                useEffect: Ea,
                useImperativeHandle: Ca,
                useLayoutEffect: ka,
                useMemo: Ta,
                useReducer: fa,
                useRef: ba,
                useState: function() {
                    return fa(ca)
                },
                useDebugValue: Oa,
                useDeferredValue: function(e) {
                    var t = fa(ca)
                      , n = t[0]
                      , r = t[1];
                    return Ea((function() {
                        var t = Zi.transition;
                        Zi.transition = 1;
                        try {
                            r(e)
                        } finally {
                            Zi.transition = t
                        }
                    }
                    ), [e]),
                    n
                },
                useTransition: function() {
                    var e = fa(ca)[0];
                    return [ba().current, e]
                },
                useMutableSource: ha,
                useOpaqueIdentifier: function() {
                    return fa(ca)[0]
                },
                unstable_isNewReconciler: !1
            }
              , La = {
                readContext: ui,
                useCallback: _a,
                useContext: ui,
                useEffect: Ea,
                useImperativeHandle: Ca,
                useLayoutEffect: ka,
                useMemo: Ta,
                useReducer: da,
                useRef: ba,
                useState: function() {
                    return da(ca)
                },
                useDebugValue: Oa,
                useDeferredValue: function(e) {
                    var t = da(ca)
                      , n = t[0]
                      , r = t[1];
                    return Ea((function() {
                        var t = Zi.transition;
                        Zi.transition = 1;
                        try {
                            r(e)
                        } finally {
                            Zi.transition = t
                        }
                    }
                    ), [e]),
                    n
                },
                useTransition: function() {
                    var e = da(ca)[0];
                    return [ba().current, e]
                },
                useMutableSource: ha,
                useOpaqueIdentifier: function() {
                    return da(ca)[0]
                },
                unstable_isNewReconciler: !1
            }
              , Da = x.ReactCurrentOwner
              , Ia = !1;
            function Va(e, t, n, r) {
                t.child = null === e ? _i(t, null, n, r) : Oi(t, e.child, n, r)
            }
            function Fa(e, t, n, r, o) {
                n = n.render;
                var i = t.ref;
                return ai(t, o),
                r = ua(e, t, n, r, i, o),
                null === e || Ia ? (t.flags |= 1,
                Va(e, t, r, o),
                t.child) : (t.updateQueue = e.updateQueue,
                t.flags &= -517,
                e.lanes &= ~o,
                iu(e, t, o))
            }
            function za(e, t, n, r, o, i) {
                if (null === e) {
                    var a = n.type;
                    return "function" !== typeof a || Hl(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Ql(n.type, null, r, t, t.mode, i)).ref = t.ref,
                    e.return = t,
                    t.child = e) : (t.tag = 15,
                    t.type = a,
                    Ua(e, t, a, r, o, i))
                }
                return a = e.child,
                0 === (o & i) && (o = a.memoizedProps,
                (n = null !== (n = n.compare) ? n : dr)(o, r) && e.ref === t.ref) ? iu(e, t, i) : (t.flags |= 1,
                (e = Kl(a, r)).ref = t.ref,
                e.return = t,
                t.child = e)
            }
            function Ua(e, t, n, r, o, i) {
                if (null !== e && dr(e.memoizedProps, r) && e.ref === t.ref) {
                    if (Ia = !1,
                    0 === (i & o))
                        return t.lanes = e.lanes,
                        iu(e, t, i);
                    0 !== (16384 & e.flags) && (Ia = !0)
                }
                return Wa(e, t, n, r, i)
            }
            function Ba(e, t, n) {
                var r = t.pendingProps
                  , o = r.children
                  , i = null !== e ? e.memoizedState : null;
                if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
                    if (0 === (4 & t.mode))
                        t.memoizedState = {
                            baseLanes: 0
                        },
                        Sl(t, n);
                    else {
                        if (0 === (1073741824 & n))
                            return e = null !== i ? i.baseLanes | n : n,
                            t.lanes = t.childLanes = 1073741824,
                            t.memoizedState = {
                                baseLanes: e
                            },
                            Sl(t, e),
                            null;
                        t.memoizedState = {
                            baseLanes: 0
                        },
                        Sl(t, null !== i ? i.baseLanes : n)
                    }
                else
                    null !== i ? (r = i.baseLanes | n,
                    t.memoizedState = null) : r = n,
                    Sl(t, r);
                return Va(e, t, o, n),
                t.child
            }
            function $a(e, t) {
                var n = t.ref;
                (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 128)
            }
            function Wa(e, t, n, r, o) {
                var i = go(n) ? mo : vo.current;
                return i = yo(t, i),
                ai(t, o),
                n = ua(e, t, n, r, i, o),
                null === e || Ia ? (t.flags |= 1,
                Va(e, t, n, o),
                t.child) : (t.updateQueue = e.updateQueue,
                t.flags &= -517,
                e.lanes &= ~o,
                iu(e, t, o))
            }
            function Ha(e, t, n, r, o) {
                if (go(n)) {
                    var i = !0;
                    So(t)
                } else
                    i = !1;
                if (ai(t, o),
                null === t.stateNode)
                    null !== e && (e.alternate = null,
                    t.alternate = null,
                    t.flags |= 2),
                    wi(t, n, r),
                    Si(t, n, r, o),
                    r = !0;
                else if (null === e) {
                    var a = t.stateNode
                      , u = t.memoizedProps;
                    a.props = u;
                    var l = a.context
                      , s = n.contextType;
                    "object" === typeof s && null !== s ? s = ui(s) : s = yo(t, s = go(n) ? mo : vo.current);
                    var c = n.getDerivedStateFromProps
                      , f = "function" === typeof c || "function" === typeof a.getSnapshotBeforeUpdate;
                    f || "function" !== typeof a.UNSAFE_componentWillReceiveProps && "function" !== typeof a.componentWillReceiveProps || (u !== r || l !== s) && xi(t, a, r, s),
                    li = !1;
                    var d = t.memoizedState;
                    a.state = d,
                    vi(t, r, a, o),
                    l = t.memoizedState,
                    u !== r || d !== l || ho.current || li ? ("function" === typeof c && (yi(t, n, c, r),
                    l = t.memoizedState),
                    (u = li || bi(t, n, u, r, d, l, s)) ? (f || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || ("function" === typeof a.componentWillMount && a.componentWillMount(),
                    "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()),
                    "function" === typeof a.componentDidMount && (t.flags |= 4)) : ("function" === typeof a.componentDidMount && (t.flags |= 4),
                    t.memoizedProps = r,
                    t.memoizedState = l),
                    a.props = r,
                    a.state = l,
                    a.context = s,
                    r = u) : ("function" === typeof a.componentDidMount && (t.flags |= 4),
                    r = !1)
                } else {
                    a = t.stateNode,
                    ci(e, t),
                    u = t.memoizedProps,
                    s = t.type === t.elementType ? u : Zo(t.type, u),
                    a.props = s,
                    f = t.pendingProps,
                    d = a.context,
                    "object" === typeof (l = n.contextType) && null !== l ? l = ui(l) : l = yo(t, l = go(n) ? mo : vo.current);
                    var p = n.getDerivedStateFromProps;
                    (c = "function" === typeof p || "function" === typeof a.getSnapshotBeforeUpdate) || "function" !== typeof a.UNSAFE_componentWillReceiveProps && "function" !== typeof a.componentWillReceiveProps || (u !== f || d !== l) && xi(t, a, r, l),
                    li = !1,
                    d = t.memoizedState,
                    a.state = d,
                    vi(t, r, a, o);
                    var v = t.memoizedState;
                    u !== f || d !== v || ho.current || li ? ("function" === typeof p && (yi(t, n, p, r),
                    v = t.memoizedState),
                    (s = li || bi(t, n, s, r, d, v, l)) ? (c || "function" !== typeof a.UNSAFE_componentWillUpdate && "function" !== typeof a.componentWillUpdate || ("function" === typeof a.componentWillUpdate && a.componentWillUpdate(r, v, l),
                    "function" === typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, v, l)),
                    "function" === typeof a.componentDidUpdate && (t.flags |= 4),
                    "function" === typeof a.getSnapshotBeforeUpdate && (t.flags |= 256)) : ("function" !== typeof a.componentDidUpdate || u === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
                    "function" !== typeof a.getSnapshotBeforeUpdate || u === e.memoizedProps && d === e.memoizedState || (t.flags |= 256),
                    t.memoizedProps = r,
                    t.memoizedState = v),
                    a.props = r,
                    a.state = v,
                    a.context = l,
                    r = s) : ("function" !== typeof a.componentDidUpdate || u === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
                    "function" !== typeof a.getSnapshotBeforeUpdate || u === e.memoizedProps && d === e.memoizedState || (t.flags |= 256),
                    r = !1)
                }
                return Ka(e, t, n, r, i, o)
            }
            function Ka(e, t, n, r, o, i) {
                $a(e, t);
                var a = 0 !== (64 & t.flags);
                if (!r && !a)
                    return o && Eo(t, n, !1),
                    iu(e, t, i);
                r = t.stateNode,
                Da.current = t;
                var u = a && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
                return t.flags |= 1,
                null !== e && a ? (t.child = Oi(t, e.child, null, i),
                t.child = Oi(t, null, u, i)) : Va(e, t, u, i),
                t.memoizedState = r.state,
                o && Eo(t, n, !0),
                t.child
            }
            function Qa(e) {
                var t = e.stateNode;
                t.pendingContext ? wo(0, t.pendingContext, t.pendingContext !== t.context) : t.context && wo(0, t.context, !1),
                ji(e, t.containerInfo)
            }
            var qa, Ya, Xa, Ga = {
                dehydrated: null,
                retryLane: 0
            };
            function Za(e, t, n) {
                var r, o = t.pendingProps, i = Vi.current, a = !1;
                return (r = 0 !== (64 & t.flags)) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
                r ? (a = !0,
                t.flags &= -65) : null !== e && null === e.memoizedState || void 0 === o.fallback || !0 === o.unstable_avoidThisFallback || (i |= 1),
                fo(Vi, 1 & i),
                null === e ? (void 0 !== o.fallback && Hi(t),
                e = o.children,
                i = o.fallback,
                a ? (e = Ja(t, e, i, n),
                t.child.memoizedState = {
                    baseLanes: n
                },
                t.memoizedState = Ga,
                e) : "number" === typeof o.unstable_expectedLoadTime ? (e = Ja(t, e, i, n),
                t.child.memoizedState = {
                    baseLanes: n
                },
                t.memoizedState = Ga,
                t.lanes = 33554432,
                e) : ((n = Yl({
                    mode: "visible",
                    children: e
                }, t.mode, n, null)).return = t,
                t.child = n)) : (e.memoizedState,
                a ? (o = tu(e, t, o.children, o.fallback, n),
                a = t.child,
                i = e.child.memoizedState,
                a.memoizedState = null === i ? {
                    baseLanes: n
                } : {
                    baseLanes: i.baseLanes | n
                },
                a.childLanes = e.childLanes & ~n,
                t.memoizedState = Ga,
                o) : (n = eu(e, t, o.children, n),
                t.memoizedState = null,
                n))
            }
            function Ja(e, t, n, r) {
                var o = e.mode
                  , i = e.child;
                return t = {
                    mode: "hidden",
                    children: t
                },
                0 === (2 & o) && null !== i ? (i.childLanes = 0,
                i.pendingProps = t) : i = Yl(t, o, 0, null),
                n = ql(n, o, r, null),
                i.return = e,
                n.return = e,
                i.sibling = n,
                e.child = i,
                n
            }
            function eu(e, t, n, r) {
                var o = e.child;
                return e = o.sibling,
                n = Kl(o, {
                    mode: "visible",
                    children: n
                }),
                0 === (2 & t.mode) && (n.lanes = r),
                n.return = t,
                n.sibling = null,
                null !== e && (e.nextEffect = null,
                e.flags = 8,
                t.firstEffect = t.lastEffect = e),
                t.child = n
            }
            function tu(e, t, n, r, o) {
                var i = t.mode
                  , a = e.child;
                e = a.sibling;
                var u = {
                    mode: "hidden",
                    children: n
                };
                return 0 === (2 & i) && t.child !== a ? ((n = t.child).childLanes = 0,
                n.pendingProps = u,
                null !== (a = n.lastEffect) ? (t.firstEffect = n.firstEffect,
                t.lastEffect = a,
                a.nextEffect = null) : t.firstEffect = t.lastEffect = null) : n = Kl(a, u),
                null !== e ? r = Kl(e, r) : (r = ql(r, i, o, null)).flags |= 2,
                r.return = t,
                n.return = t,
                n.sibling = r,
                t.child = n,
                r
            }
            function nu(e, t) {
                e.lanes |= t;
                var n = e.alternate;
                null !== n && (n.lanes |= t),
                ii(e.return, t)
            }
            function ru(e, t, n, r, o, i) {
                var a = e.memoizedState;
                null === a ? e.memoizedState = {
                    isBackwards: t,
                    rendering: null,
                    renderingStartTime: 0,
                    last: r,
                    tail: n,
                    tailMode: o,
                    lastEffect: i
                } : (a.isBackwards = t,
                a.rendering = null,
                a.renderingStartTime = 0,
                a.last = r,
                a.tail = n,
                a.tailMode = o,
                a.lastEffect = i)
            }
            function ou(e, t, n) {
                var r = t.pendingProps
                  , o = r.revealOrder
                  , i = r.tail;
                if (Va(e, t, r.children, n),
                0 !== (2 & (r = Vi.current)))
                    r = 1 & r | 2,
                    t.flags |= 64;
                else {
                    if (null !== e && 0 !== (64 & e.flags))
                        e: for (e = t.child; null !== e; ) {
                            if (13 === e.tag)
                                null !== e.memoizedState && nu(e, n);
                            else if (19 === e.tag)
                                nu(e, n);
                            else if (null !== e.child) {
                                e.child.return = e,
                                e = e.child;
                                continue
                            }
                            if (e === t)
                                break e;
                            for (; null === e.sibling; ) {
                                if (null === e.return || e.return === t)
                                    break e;
                                e = e.return
                            }
                            e.sibling.return = e.return,
                            e = e.sibling
                        }
                    r &= 1
                }
                if (fo(Vi, r),
                0 === (2 & t.mode))
                    t.memoizedState = null;
                else
                    switch (o) {
                    case "forwards":
                        for (n = t.child,
                        o = null; null !== n; )
                            null !== (e = n.alternate) && null === Fi(e) && (o = n),
                            n = n.sibling;
                        null === (n = o) ? (o = t.child,
                        t.child = null) : (o = n.sibling,
                        n.sibling = null),
                        ru(t, !1, o, n, i, t.lastEffect);
                        break;
                    case "backwards":
                        for (n = null,
                        o = t.child,
                        t.child = null; null !== o; ) {
                            if (null !== (e = o.alternate) && null === Fi(e)) {
                                t.child = o;
                                break
                            }
                            e = o.sibling,
                            o.sibling = n,
                            n = o,
                            o = e
                        }
                        ru(t, !0, n, null, i, t.lastEffect);
                        break;
                    case "together":
                        ru(t, !1, null, null, void 0, t.lastEffect);
                        break;
                    default:
                        t.memoizedState = null
                    }
                return t.child
            }
            function iu(e, t, n) {
                if (null !== e && (t.dependencies = e.dependencies),
                Uu |= t.lanes,
                0 !== (n & t.childLanes)) {
                    if (null !== e && t.child !== e.child)
                        throw Error(a(153));
                    if (null !== t.child) {
                        for (n = Kl(e = t.child, e.pendingProps),
                        t.child = n,
                        n.return = t; null !== e.sibling; )
                            e = e.sibling,
                            (n = n.sibling = Kl(e, e.pendingProps)).return = t;
                        n.sibling = null
                    }
                    return t.child
                }
                return null
            }
            function au(e, t) {
                if (!Bi)
                    switch (e.tailMode) {
                    case "hidden":
                        t = e.tail;
                        for (var n = null; null !== t; )
                            null !== t.alternate && (n = t),
                            t = t.sibling;
                        null === n ? e.tail = null : n.sibling = null;
                        break;
                    case "collapsed":
                        n = e.tail;
                        for (var r = null; null !== n; )
                            null !== n.alternate && (r = n),
                            n = n.sibling;
                        null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
            }
            function uu(e, t, n) {
                var r = t.pendingProps;
                switch (t.tag) {
                case 2:
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                    return null;
                case 1:
                case 17:
                    return go(t.type) && bo(),
                    null;
                case 3:
                    return Li(),
                    co(ho),
                    co(vo),
                    Xi(),
                    (r = t.stateNode).pendingContext && (r.context = r.pendingContext,
                    r.pendingContext = null),
                    null !== e && null !== e.child || (Qi(t) ? t.flags |= 4 : r.hydrate || (t.flags |= 256)),
                    null;
                case 5:
                    Ii(t);
                    var i = Ri(Ni.current);
                    if (n = t.type,
                    null !== e && null != t.stateNode)
                        Ya(e, t, n, r),
                        e.ref !== t.ref && (t.flags |= 128);
                    else {
                        if (!r) {
                            if (null === t.stateNode)
                                throw Error(a(166));
                            return null
                        }
                        if (e = Ri(Ai.current),
                        Qi(t)) {
                            r = t.stateNode,
                            n = t.type;
                            var u = t.memoizedProps;
                            switch (r[Zr] = t,
                            r[Jr] = u,
                            n) {
                            case "dialog":
                                Ar("cancel", r),
                                Ar("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Ar("load", r);
                                break;
                            case "video":
                            case "audio":
                                for (e = 0; e < Cr.length; e++)
                                    Ar(Cr[e], r);
                                break;
                            case "source":
                                Ar("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Ar("error", r),
                                Ar("load", r);
                                break;
                            case "details":
                                Ar("toggle", r);
                                break;
                            case "input":
                                ee(r, u),
                                Ar("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!u.multiple
                                },
                                Ar("invalid", r);
                                break;
                            case "textarea":
                                le(r, u),
                                Ar("invalid", r)
                            }
                            for (var s in ke(n, u),
                            e = null,
                            u)
                                u.hasOwnProperty(s) && (i = u[s],
                                "children" === s ? "string" === typeof i ? r.textContent !== i && (e = ["children", i]) : "number" === typeof i && r.textContent !== "" + i && (e = ["children", "" + i]) : l.hasOwnProperty(s) && null != i && "onScroll" === s && Ar("scroll", r));
                            switch (n) {
                            case "input":
                                X(r),
                                re(r, u, !0);
                                break;
                            case "textarea":
                                X(r),
                                ce(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                "function" === typeof u.onClick && (r.onclick = zr)
                            }
                            r = e,
                            t.updateQueue = r,
                            null !== r && (t.flags |= 4)
                        } else {
                            switch (s = 9 === i.nodeType ? i : i.ownerDocument,
                            e === fe && (e = pe(n)),
                            e === fe ? "script" === n ? ((e = s.createElement("div")).innerHTML = "<script><\/script>",
                            e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = s.createElement(n, {
                                is: r.is
                            }) : (e = s.createElement(n),
                            "select" === n && (s = e,
                            r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n),
                            e[Zr] = t,
                            e[Jr] = r,
                            qa(e, t),
                            t.stateNode = e,
                            s = Pe(n, r),
                            n) {
                            case "dialog":
                                Ar("cancel", e),
                                Ar("close", e),
                                i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Ar("load", e),
                                i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < Cr.length; i++)
                                    Ar(Cr[i], e);
                                i = r;
                                break;
                            case "source":
                                Ar("error", e),
                                i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Ar("error", e),
                                Ar("load", e),
                                i = r;
                                break;
                            case "details":
                                Ar("toggle", e),
                                i = r;
                                break;
                            case "input":
                                ee(e, r),
                                i = J(e, r),
                                Ar("invalid", e);
                                break;
                            case "option":
                                i = ie(e, r);
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                },
                                i = o({}, r, {
                                    value: void 0
                                }),
                                Ar("invalid", e);
                                break;
                            case "textarea":
                                le(e, r),
                                i = ue(e, r),
                                Ar("invalid", e);
                                break;
                            default:
                                i = r
                            }
                            ke(n, i);
                            var c = i;
                            for (u in c)
                                if (c.hasOwnProperty(u)) {
                                    var f = c[u];
                                    "style" === u ? Se(e, f) : "dangerouslySetInnerHTML" === u ? null != (f = f ? f.__html : void 0) && ye(e, f) : "children" === u ? "string" === typeof f ? ("textarea" !== n || "" !== f) && ge(e, f) : "number" === typeof f && ge(e, "" + f) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (l.hasOwnProperty(u) ? null != f && "onScroll" === u && Ar("scroll", e) : null != f && w(e, u, f, s))
                                }
                            switch (n) {
                            case "input":
                                X(e),
                                re(e, r, !1);
                                break;
                            case "textarea":
                                X(e),
                                ce(e);
                                break;
                            case "option":
                                null != r.value && e.setAttribute("value", "" + q(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple,
                                null != (u = r.value) ? ae(e, !!r.multiple, u, !1) : null != r.defaultValue && ae(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                "function" === typeof i.onClick && (e.onclick = zr)
                            }
                            $r(n, r) && (t.flags |= 4)
                        }
                        null !== t.ref && (t.flags |= 128)
                    }
                    return null;
                case 6:
                    if (e && null != t.stateNode)
                        Xa(0, t, e.memoizedProps, r);
                    else {
                        if ("string" !== typeof r && null === t.stateNode)
                            throw Error(a(166));
                        n = Ri(Ni.current),
                        Ri(Ai.current),
                        Qi(t) ? (r = t.stateNode,
                        n = t.memoizedProps,
                        r[Zr] = t,
                        r.nodeValue !== n && (t.flags |= 4)) : ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Zr] = t,
                        t.stateNode = r)
                    }
                    return null;
                case 13:
                    return co(Vi),
                    r = t.memoizedState,
                    0 !== (64 & t.flags) ? (t.lanes = n,
                    t) : (r = null !== r,
                    n = !1,
                    null === e ? void 0 !== t.memoizedProps.fallback && Qi(t) : n = null !== e.memoizedState,
                    r && !n && 0 !== (2 & t.mode) && (null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 !== (1 & Vi.current) ? 0 === Vu && (Vu = 3) : (0 !== Vu && 3 !== Vu || (Vu = 4),
                    null === Ru || 0 === (134217727 & Uu) && 0 === (134217727 & Bu) || gl(Ru, Lu))),
                    (r || n) && (t.flags |= 4),
                    null);
                case 4:
                    return Li(),
                    null === e && Nr(t.stateNode.containerInfo),
                    null;
                case 10:
                    return oi(t),
                    null;
                case 19:
                    if (co(Vi),
                    null === (r = t.memoizedState))
                        return null;
                    if (u = 0 !== (64 & t.flags),
                    null === (s = r.rendering))
                        if (u)
                            au(r, !1);
                        else {
                            if (0 !== Vu || null !== e && 0 !== (64 & e.flags))
                                for (e = t.child; null !== e; ) {
                                    if (null !== (s = Fi(e))) {
                                        for (t.flags |= 64,
                                        au(r, !1),
                                        null !== (u = s.updateQueue) && (t.updateQueue = u,
                                        t.flags |= 4),
                                        null === r.lastEffect && (t.firstEffect = null),
                                        t.lastEffect = r.lastEffect,
                                        r = n,
                                        n = t.child; null !== n; )
                                            e = r,
                                            (u = n).flags &= 2,
                                            u.nextEffect = null,
                                            u.firstEffect = null,
                                            u.lastEffect = null,
                                            null === (s = u.alternate) ? (u.childLanes = 0,
                                            u.lanes = e,
                                            u.child = null,
                                            u.memoizedProps = null,
                                            u.memoizedState = null,
                                            u.updateQueue = null,
                                            u.dependencies = null,
                                            u.stateNode = null) : (u.childLanes = s.childLanes,
                                            u.lanes = s.lanes,
                                            u.child = s.child,
                                            u.memoizedProps = s.memoizedProps,
                                            u.memoizedState = s.memoizedState,
                                            u.updateQueue = s.updateQueue,
                                            u.type = s.type,
                                            e = s.dependencies,
                                            u.dependencies = null === e ? null : {
                                                lanes: e.lanes,
                                                firstContext: e.firstContext
                                            }),
                                            n = n.sibling;
                                        return fo(Vi, 1 & Vi.current | 2),
                                        t.child
                                    }
                                    e = e.sibling
                                }
                            null !== r.tail && Wo() > Ku && (t.flags |= 64,
                            u = !0,
                            au(r, !1),
                            t.lanes = 33554432)
                        }
                    else {
                        if (!u)
                            if (null !== (e = Fi(s))) {
                                if (t.flags |= 64,
                                u = !0,
                                null !== (n = e.updateQueue) && (t.updateQueue = n,
                                t.flags |= 4),
                                au(r, !0),
                                null === r.tail && "hidden" === r.tailMode && !s.alternate && !Bi)
                                    return null !== (t = t.lastEffect = r.lastEffect) && (t.nextEffect = null),
                                    null
                            } else
                                2 * Wo() - r.renderingStartTime > Ku && 1073741824 !== n && (t.flags |= 64,
                                u = !0,
                                au(r, !1),
                                t.lanes = 33554432);
                        r.isBackwards ? (s.sibling = t.child,
                        t.child = s) : (null !== (n = r.last) ? n.sibling = s : t.child = s,
                        r.last = s)
                    }
                    return null !== r.tail ? (n = r.tail,
                    r.rendering = n,
                    r.tail = n.sibling,
                    r.lastEffect = t.lastEffect,
                    r.renderingStartTime = Wo(),
                    n.sibling = null,
                    t = Vi.current,
                    fo(Vi, u ? 1 & t | 2 : 1 & t),
                    n) : null;
                case 23:
                case 24:
                    return El(),
                    null !== e && null !== e.memoizedState !== (null !== t.memoizedState) && "unstable-defer-without-hiding" !== r.mode && (t.flags |= 4),
                    null
                }
                throw Error(a(156, t.tag))
            }
            function lu(e) {
                switch (e.tag) {
                case 1:
                    go(e.type) && bo();
                    var t = e.flags;
                    return 4096 & t ? (e.flags = -4097 & t | 64,
                    e) : null;
                case 3:
                    if (Li(),
                    co(ho),
                    co(vo),
                    Xi(),
                    0 !== (64 & (t = e.flags)))
                        throw Error(a(285));
                    return e.flags = -4097 & t | 64,
                    e;
                case 5:
                    return Ii(e),
                    null;
                case 13:
                    return co(Vi),
                    4096 & (t = e.flags) ? (e.flags = -4097 & t | 64,
                    e) : null;
                case 19:
                    return co(Vi),
                    null;
                case 4:
                    return Li(),
                    null;
                case 10:
                    return oi(e),
                    null;
                case 23:
                case 24:
                    return El(),
                    null;
                default:
                    return null
                }
            }
            function su(e, t) {
                try {
                    var n = ""
                      , r = t;
                    do {
                        n += K(r),
                        r = r.return
                    } while (r);
                    var o = n
                } catch (i) {
                    o = "\nError generating stack: " + i.message + "\n" + i.stack
                }
                return {
                    value: e,
                    source: t,
                    stack: o
                }
            }
            function cu(e, t) {
                try {
                    console.error(t.value)
                } catch (n) {
                    setTimeout((function() {
                        throw n
                    }
                    ))
                }
            }
            qa = function(e, t) {
                for (var n = t.child; null !== n; ) {
                    if (5 === n.tag || 6 === n.tag)
                        e.appendChild(n.stateNode);
                    else if (4 !== n.tag && null !== n.child) {
                        n.child.return = n,
                        n = n.child;
                        continue
                    }
                    if (n === t)
                        break;
                    for (; null === n.sibling; ) {
                        if (null === n.return || n.return === t)
                            return;
                        n = n.return
                    }
                    n.sibling.return = n.return,
                    n = n.sibling
                }
            }
            ,
            Ya = function(e, t, n, r) {
                var i = e.memoizedProps;
                if (i !== r) {
                    e = t.stateNode,
                    Ri(Ai.current);
                    var a, u = null;
                    switch (n) {
                    case "input":
                        i = J(e, i),
                        r = J(e, r),
                        u = [];
                        break;
                    case "option":
                        i = ie(e, i),
                        r = ie(e, r),
                        u = [];
                        break;
                    case "select":
                        i = o({}, i, {
                            value: void 0
                        }),
                        r = o({}, r, {
                            value: void 0
                        }),
                        u = [];
                        break;
                    case "textarea":
                        i = ue(e, i),
                        r = ue(e, r),
                        u = [];
                        break;
                    default:
                        "function" !== typeof i.onClick && "function" === typeof r.onClick && (e.onclick = zr)
                    }
                    for (f in ke(n, r),
                    n = null,
                    i)
                        if (!r.hasOwnProperty(f) && i.hasOwnProperty(f) && null != i[f])
                            if ("style" === f) {
                                var s = i[f];
                                for (a in s)
                                    s.hasOwnProperty(a) && (n || (n = {}),
                                    n[a] = "")
                            } else
                                "dangerouslySetInnerHTML" !== f && "children" !== f && "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (l.hasOwnProperty(f) ? u || (u = []) : (u = u || []).push(f, null));
                    for (f in r) {
                        var c = r[f];
                        if (s = null != i ? i[f] : void 0,
                        r.hasOwnProperty(f) && c !== s && (null != c || null != s))
                            if ("style" === f)
                                if (s) {
                                    for (a in s)
                                        !s.hasOwnProperty(a) || c && c.hasOwnProperty(a) || (n || (n = {}),
                                        n[a] = "");
                                    for (a in c)
                                        c.hasOwnProperty(a) && s[a] !== c[a] && (n || (n = {}),
                                        n[a] = c[a])
                                } else
                                    n || (u || (u = []),
                                    u.push(f, n)),
                                    n = c;
                            else
                                "dangerouslySetInnerHTML" === f ? (c = c ? c.__html : void 0,
                                s = s ? s.__html : void 0,
                                null != c && s !== c && (u = u || []).push(f, c)) : "children" === f ? "string" !== typeof c && "number" !== typeof c || (u = u || []).push(f, "" + c) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && (l.hasOwnProperty(f) ? (null != c && "onScroll" === f && Ar("scroll", e),
                                u || s === c || (u = [])) : "object" === typeof c && null !== c && c.$$typeof === L ? c.toString() : (u = u || []).push(f, c))
                    }
                    n && (u = u || []).push("style", n);
                    var f = u;
                    (t.updateQueue = f) && (t.flags |= 4)
                }
            }
            ,
            Xa = function(e, t, n, r) {
                n !== r && (t.flags |= 4)
            }
            ;
            var fu = "function" === typeof WeakMap ? WeakMap : Map;
            function du(e, t, n) {
                (n = fi(-1, n)).tag = 3,
                n.payload = {
                    element: null
                };
                var r = t.value;
                return n.callback = function() {
                    Xu || (Xu = !0,
                    Gu = r),
                    cu(0, t)
                }
                ,
                n
            }
            function pu(e, t, n) {
                (n = fi(-1, n)).tag = 3;
                var r = e.type.getDerivedStateFromError;
                if ("function" === typeof r) {
                    var o = t.value;
                    n.payload = function() {
                        return cu(0, t),
                        r(o)
                    }
                }
                var i = e.stateNode;
                return null !== i && "function" === typeof i.componentDidCatch && (n.callback = function() {
                    "function" !== typeof r && (null === Zu ? Zu = new Set([this]) : Zu.add(this),
                    cu(0, t));
                    var e = t.stack;
                    this.componentDidCatch(t.value, {
                        componentStack: null !== e ? e : ""
                    })
                }
                ),
                n
            }
            var vu = "function" === typeof WeakSet ? WeakSet : Set;
            function hu(e) {
                var t = e.ref;
                if (null !== t)
                    if ("function" === typeof t)
                        try {
                            t(null)
                        } catch (n) {
                            zl(e, n)
                        }
                    else
                        t.current = null
            }
            function mu(e, t) {
                switch (t.tag) {
                case 0:
                case 11:
                case 15:
                case 22:
                case 5:
                case 6:
                case 4:
                case 17:
                    return;
                case 1:
                    if (256 & t.flags && null !== e) {
                        var n = e.memoizedProps
                          , r = e.memoizedState;
                        t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : Zo(t.type, n), r),
                        e.__reactInternalSnapshotBeforeUpdate = t
                    }
                    return;
                case 3:
                    return void (256 & t.flags && Qr(t.stateNode.containerInfo))
                }
                throw Error(a(163))
            }
            function yu(e, t, n) {
                switch (n.tag) {
                case 0:
                case 11:
                case 15:
                case 22:
                    if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                        e = t = t.next;
                        do {
                            if (3 === (3 & e.tag)) {
                                var r = e.create;
                                e.destroy = r()
                            }
                            e = e.next
                        } while (e !== t)
                    }
                    if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                        e = t = t.next;
                        do {
                            var o = e;
                            r = o.next,
                            0 !== (4 & (o = o.tag)) && 0 !== (1 & o) && (Il(n, e),
                            Dl(n, e)),
                            e = r
                        } while (e !== t)
                    }
                    return;
                case 1:
                    return e = n.stateNode,
                    4 & n.flags && (null === t ? e.componentDidMount() : (r = n.elementType === n.type ? t.memoizedProps : Zo(n.type, t.memoizedProps),
                    e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))),
                    void (null !== (t = n.updateQueue) && hi(n, t, e));
                case 3:
                    if (null !== (t = n.updateQueue)) {
                        if (e = null,
                        null !== n.child)
                            switch (n.child.tag) {
                            case 5:
                            case 1:
                                e = n.child.stateNode
                            }
                        hi(n, t, e)
                    }
                    return;
                case 5:
                    return e = n.stateNode,
                    void (null === t && 4 & n.flags && $r(n.type, n.memoizedProps) && e.focus());
                case 6:
                case 4:
                case 12:
                case 19:
                case 17:
                case 20:
                case 21:
                case 23:
                case 24:
                    return;
                case 13:
                    return void (null === n.memoizedState && (n = n.alternate,
                    null !== n && (n = n.memoizedState,
                    null !== n && (n = n.dehydrated,
                    null !== n && St(n)))))
                }
                throw Error(a(163))
            }
            function gu(e, t) {
                for (var n = e; ; ) {
                    if (5 === n.tag) {
                        var r = n.stateNode;
                        if (t)
                            "function" === typeof (r = r.style).setProperty ? r.setProperty("display", "none", "important") : r.display = "none";
                        else {
                            r = n.stateNode;
                            var o = n.memoizedProps.style;
                            o = void 0 !== o && null !== o && o.hasOwnProperty("display") ? o.display : null,
                            r.style.display = xe("display", o)
                        }
                    } else if (6 === n.tag)
                        n.stateNode.nodeValue = t ? "" : n.memoizedProps;
                    else if ((23 !== n.tag && 24 !== n.tag || null === n.memoizedState || n === e) && null !== n.child) {
                        n.child.return = n,
                        n = n.child;
                        continue
                    }
                    if (n === e)
                        break;
                    for (; null === n.sibling; ) {
                        if (null === n.return || n.return === e)
                            return;
                        n = n.return
                    }
                    n.sibling.return = n.return,
                    n = n.sibling
                }
            }
            function bu(e, t) {
                if (Po && "function" === typeof Po.onCommitFiberUnmount)
                    try {
                        Po.onCommitFiberUnmount(ko, t)
                    } catch (i) {}
                switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                case 22:
                    if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                        var n = e = e.next;
                        do {
                            var r = n
                              , o = r.destroy;
                            if (r = r.tag,
                            void 0 !== o)
                                if (0 !== (4 & r))
                                    Il(t, n);
                                else {
                                    r = t;
                                    try {
                                        o()
                                    } catch (i) {
                                        zl(r, i)
                                    }
                                }
                            n = n.next
                        } while (n !== e)
                    }
                    break;
                case 1:
                    if (hu(t),
                    "function" === typeof (e = t.stateNode).componentWillUnmount)
                        try {
                            e.props = t.memoizedProps,
                            e.state = t.memoizedState,
                            e.componentWillUnmount()
                        } catch (i) {
                            zl(t, i)
                        }
                    break;
                case 5:
                    hu(t);
                    break;
                case 4:
                    Pu(e, t)
                }
            }
            function wu(e) {
                e.alternate = null,
                e.child = null,
                e.dependencies = null,
                e.firstEffect = null,
                e.lastEffect = null,
                e.memoizedProps = null,
                e.memoizedState = null,
                e.pendingProps = null,
                e.return = null,
                e.updateQueue = null
            }
            function xu(e) {
                return 5 === e.tag || 3 === e.tag || 4 === e.tag
            }
            function Su(e) {
                e: {
                    for (var t = e.return; null !== t; ) {
                        if (xu(t))
                            break e;
                        t = t.return
                    }
                    throw Error(a(160))
                }
                var n = t;
                switch (t = n.stateNode,
                n.tag) {
                case 5:
                    var r = !1;
                    break;
                case 3:
                case 4:
                    t = t.containerInfo,
                    r = !0;
                    break;
                default:
                    throw Error(a(161))
                }
                16 & n.flags && (ge(t, ""),
                n.flags &= -17);
                e: t: for (n = e; ; ) {
                    for (; null === n.sibling; ) {
                        if (null === n.return || xu(n.return)) {
                            n = null;
                            break e
                        }
                        n = n.return
                    }
                    for (n.sibling.return = n.return,
                    n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag; ) {
                        if (2 & n.flags)
                            continue t;
                        if (null === n.child || 4 === n.tag)
                            continue t;
                        n.child.return = n,
                        n = n.child
                    }
                    if (!(2 & n.flags)) {
                        n = n.stateNode;
                        break e
                    }
                }
                r ? Eu(e, n, t) : ku(e, n, t)
            }
            function Eu(e, t, n) {
                var r = e.tag
                  , o = 5 === r || 6 === r;
                if (o)
                    e = o ? e.stateNode : e.stateNode.instance,
                    t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                    null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = zr));
                else if (4 !== r && null !== (e = e.child))
                    for (Eu(e, t, n),
                    e = e.sibling; null !== e; )
                        Eu(e, t, n),
                        e = e.sibling
            }
            function ku(e, t, n) {
                var r = e.tag
                  , o = 5 === r || 6 === r;
                if (o)
                    e = o ? e.stateNode : e.stateNode.instance,
                    t ? n.insertBefore(e, t) : n.appendChild(e);
                else if (4 !== r && null !== (e = e.child))
                    for (ku(e, t, n),
                    e = e.sibling; null !== e; )
                        ku(e, t, n),
                        e = e.sibling
            }
            function Pu(e, t) {
                for (var n, r, o = t, i = !1; ; ) {
                    if (!i) {
                        i = o.return;
                        e: for (; ; ) {
                            if (null === i)
                                throw Error(a(160));
                            switch (n = i.stateNode,
                            i.tag) {
                            case 5:
                                r = !1;
                                break e;
                            case 3:
                            case 4:
                                n = n.containerInfo,
                                r = !0;
                                break e
                            }
                            i = i.return
                        }
                        i = !0
                    }
                    if (5 === o.tag || 6 === o.tag) {
                        e: for (var u = e, l = o, s = l; ; )
                            if (bu(u, s),
                            null !== s.child && 4 !== s.tag)
                                s.child.return = s,
                                s = s.child;
                            else {
                                if (s === l)
                                    break e;
                                for (; null === s.sibling; ) {
                                    if (null === s.return || s.return === l)
                                        break e;
                                    s = s.return
                                }
                                s.sibling.return = s.return,
                                s = s.sibling
                            }
                        r ? (u = n,
                        l = o.stateNode,
                        8 === u.nodeType ? u.parentNode.removeChild(l) : u.removeChild(l)) : n.removeChild(o.stateNode)
                    } else if (4 === o.tag) {
                        if (null !== o.child) {
                            n = o.stateNode.containerInfo,
                            r = !0,
                            o.child.return = o,
                            o = o.child;
                            continue
                        }
                    } else if (bu(e, o),
                    null !== o.child) {
                        o.child.return = o,
                        o = o.child;
                        continue
                    }
                    if (o === t)
                        break;
                    for (; null === o.sibling; ) {
                        if (null === o.return || o.return === t)
                            return;
                        4 === (o = o.return).tag && (i = !1)
                    }
                    o.sibling.return = o.return,
                    o = o.sibling
                }
            }
            function Cu(e, t) {
                switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                case 22:
                    var n = t.updateQueue;
                    if (null !== (n = null !== n ? n.lastEffect : null)) {
                        var r = n = n.next;
                        do {
                            3 === (3 & r.tag) && (e = r.destroy,
                            r.destroy = void 0,
                            void 0 !== e && e()),
                            r = r.next
                        } while (r !== n)
                    }
                    return;
                case 1:
                case 12:
                case 17:
                    return;
                case 5:
                    if (null != (n = t.stateNode)) {
                        r = t.memoizedProps;
                        var o = null !== e ? e.memoizedProps : r;
                        e = t.type;
                        var i = t.updateQueue;
                        if (t.updateQueue = null,
                        null !== i) {
                            for (n[Jr] = r,
                            "input" === e && "radio" === r.type && null != r.name && te(n, r),
                            Pe(e, o),
                            t = Pe(e, r),
                            o = 0; o < i.length; o += 2) {
                                var u = i[o]
                                  , l = i[o + 1];
                                "style" === u ? Se(n, l) : "dangerouslySetInnerHTML" === u ? ye(n, l) : "children" === u ? ge(n, l) : w(n, u, l, t)
                            }
                            switch (e) {
                            case "input":
                                ne(n, r);
                                break;
                            case "textarea":
                                se(n, r);
                                break;
                            case "select":
                                e = n._wrapperState.wasMultiple,
                                n._wrapperState.wasMultiple = !!r.multiple,
                                null != (i = r.value) ? ae(n, !!r.multiple, i, !1) : e !== !!r.multiple && (null != r.defaultValue ? ae(n, !!r.multiple, r.defaultValue, !0) : ae(n, !!r.multiple, r.multiple ? [] : "", !1))
                            }
                        }
                    }
                    return;
                case 6:
                    if (null === t.stateNode)
                        throw Error(a(162));
                    return void (t.stateNode.nodeValue = t.memoizedProps);
                case 3:
                    return void ((n = t.stateNode).hydrate && (n.hydrate = !1,
                    St(n.containerInfo)));
                case 13:
                    return null !== t.memoizedState && (Hu = Wo(),
                    gu(t.child, !0)),
                    void Ou(t);
                case 19:
                    return void Ou(t);
                case 23:
                case 24:
                    return void gu(t, null !== t.memoizedState)
                }
                throw Error(a(163))
            }
            function Ou(e) {
                var t = e.updateQueue;
                if (null !== t) {
                    e.updateQueue = null;
                    var n = e.stateNode;
                    null === n && (n = e.stateNode = new vu),
                    t.forEach((function(t) {
                        var r = Bl.bind(null, e, t);
                        n.has(t) || (n.add(t),
                        t.then(r, r))
                    }
                    ))
                }
            }
            function _u(e, t) {
                return null !== e && (null === (e = e.memoizedState) || null !== e.dehydrated) && (null !== (t = t.memoizedState) && null === t.dehydrated)
            }
            var Tu = Math.ceil
              , Au = x.ReactCurrentDispatcher
              , Mu = x.ReactCurrentOwner
              , Nu = 0
              , Ru = null
              , ju = null
              , Lu = 0
              , Du = 0
              , Iu = so(0)
              , Vu = 0
              , Fu = null
              , zu = 0
              , Uu = 0
              , Bu = 0
              , $u = 0
              , Wu = null
              , Hu = 0
              , Ku = 1 / 0;
            function Qu() {
                Ku = Wo() + 500
            }
            var qu, Yu = null, Xu = !1, Gu = null, Zu = null, Ju = !1, el = null, tl = 90, nl = [], rl = [], ol = null, il = 0, al = null, ul = -1, ll = 0, sl = 0, cl = null, fl = !1;
            function dl() {
                return 0 !== (48 & Nu) ? Wo() : -1 !== ul ? ul : ul = Wo()
            }
            function pl(e) {
                if (0 === (2 & (e = e.mode)))
                    return 1;
                if (0 === (4 & e))
                    return 99 === Ho() ? 1 : 2;
                if (0 === ll && (ll = zu),
                0 !== Go.transition) {
                    0 !== sl && (sl = null !== Wu ? Wu.pendingLanes : 0),
                    e = ll;
                    var t = 4186112 & ~sl;
                    return 0 === (t &= -t) && (0 === (t = (e = 4186112 & ~e) & -e) && (t = 8192)),
                    t
                }
                return e = Ho(),
                0 !== (4 & Nu) && 98 === e ? e = zt(12, ll) : e = zt(e = function(e) {
                    switch (e) {
                    case 99:
                        return 15;
                    case 98:
                        return 10;
                    case 97:
                    case 96:
                        return 8;
                    case 95:
                        return 2;
                    default:
                        return 0
                    }
                }(e), ll),
                e
            }
            function vl(e, t, n) {
                if (50 < il)
                    throw il = 0,
                    al = null,
                    Error(a(185));
                if (null === (e = hl(e, t)))
                    return null;
                $t(e, t, n),
                e === Ru && (Bu |= t,
                4 === Vu && gl(e, Lu));
                var r = Ho();
                1 === t ? 0 !== (8 & Nu) && 0 === (48 & Nu) ? bl(e) : (ml(e, n),
                0 === Nu && (Qu(),
                Yo())) : (0 === (4 & Nu) || 98 !== r && 99 !== r || (null === ol ? ol = new Set([e]) : ol.add(e)),
                ml(e, n)),
                Wu = e
            }
            function hl(e, t) {
                e.lanes |= t;
                var n = e.alternate;
                for (null !== n && (n.lanes |= t),
                n = e,
                e = e.return; null !== e; )
                    e.childLanes |= t,
                    null !== (n = e.alternate) && (n.childLanes |= t),
                    n = e,
                    e = e.return;
                return 3 === n.tag ? n.stateNode : null
            }
            function ml(e, t) {
                for (var n = e.callbackNode, r = e.suspendedLanes, o = e.pingedLanes, i = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
                    var l = 31 - Wt(u)
                      , s = 1 << l
                      , c = i[l];
                    if (-1 === c) {
                        if (0 === (s & r) || 0 !== (s & o)) {
                            c = t,
                            It(s);
                            var f = Dt;
                            i[l] = 10 <= f ? c + 250 : 6 <= f ? c + 5e3 : -1
                        }
                    } else
                        c <= t && (e.expiredLanes |= s);
                    u &= ~s
                }
                if (r = Vt(e, e === Ru ? Lu : 0),
                t = Dt,
                0 === r)
                    null !== n && (n !== Vo && _o(n),
                    e.callbackNode = null,
                    e.callbackPriority = 0);
                else {
                    if (null !== n) {
                        if (e.callbackPriority === t)
                            return;
                        n !== Vo && _o(n)
                    }
                    15 === t ? (n = bl.bind(null, e),
                    null === zo ? (zo = [n],
                    Uo = Oo(Ro, Xo)) : zo.push(n),
                    n = Vo) : 14 === t ? n = qo(99, bl.bind(null, e)) : (n = function(e) {
                        switch (e) {
                        case 15:
                        case 14:
                            return 99;
                        case 13:
                        case 12:
                        case 11:
                        case 10:
                            return 98;
                        case 9:
                        case 8:
                        case 7:
                        case 6:
                        case 4:
                        case 5:
                            return 97;
                        case 3:
                        case 2:
                        case 1:
                            return 95;
                        case 0:
                            return 90;
                        default:
                            throw Error(a(358, e))
                        }
                    }(t),
                    n = qo(n, yl.bind(null, e))),
                    e.callbackPriority = t,
                    e.callbackNode = n
                }
            }
            function yl(e) {
                if (ul = -1,
                sl = ll = 0,
                0 !== (48 & Nu))
                    throw Error(a(327));
                var t = e.callbackNode;
                if (Ll() && e.callbackNode !== t)
                    return null;
                var n = Vt(e, e === Ru ? Lu : 0);
                if (0 === n)
                    return null;
                var r = n
                  , o = Nu;
                Nu |= 16;
                var i = Cl();
                for (Ru === e && Lu === r || (Qu(),
                kl(e, r)); ; )
                    try {
                        Tl();
                        break
                    } catch (l) {
                        Pl(e, l)
                    }
                if (ri(),
                Au.current = i,
                Nu = o,
                null !== ju ? r = 0 : (Ru = null,
                Lu = 0,
                r = Vu),
                0 !== (zu & Bu))
                    kl(e, 0);
                else if (0 !== r) {
                    if (2 === r && (Nu |= 64,
                    e.hydrate && (e.hydrate = !1,
                    Qr(e.containerInfo)),
                    0 !== (n = Ft(e)) && (r = Ol(e, n))),
                    1 === r)
                        throw t = Fu,
                        kl(e, 0),
                        gl(e, n),
                        ml(e, Wo()),
                        t;
                    switch (e.finishedWork = e.current.alternate,
                    e.finishedLanes = n,
                    r) {
                    case 0:
                    case 1:
                        throw Error(a(345));
                    case 2:
                    case 5:
                        Nl(e);
                        break;
                    case 3:
                        if (gl(e, n),
                        (62914560 & n) === n && 10 < (r = Hu + 500 - Wo())) {
                            if (0 !== Vt(e, 0))
                                break;
                            if (((o = e.suspendedLanes) & n) !== n) {
                                dl(),
                                e.pingedLanes |= e.suspendedLanes & o;
                                break
                            }
                            e.timeoutHandle = Hr(Nl.bind(null, e), r);
                            break
                        }
                        Nl(e);
                        break;
                    case 4:
                        if (gl(e, n),
                        (4186112 & n) === n)
                            break;
                        for (r = e.eventTimes,
                        o = -1; 0 < n; ) {
                            var u = 31 - Wt(n);
                            i = 1 << u,
                            (u = r[u]) > o && (o = u),
                            n &= ~i
                        }
                        if (n = o,
                        10 < (n = (120 > (n = Wo() - n) ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Tu(n / 1960)) - n)) {
                            e.timeoutHandle = Hr(Nl.bind(null, e), n);
                            break
                        }
                        Nl(e);
                        break;
                    default:
                        throw Error(a(329))
                    }
                }
                return ml(e, Wo()),
                e.callbackNode === t ? yl.bind(null, e) : null
            }
            function gl(e, t) {
                for (t &= ~$u,
                t &= ~Bu,
                e.suspendedLanes |= t,
                e.pingedLanes &= ~t,
                e = e.expirationTimes; 0 < t; ) {
                    var n = 31 - Wt(t)
                      , r = 1 << n;
                    e[n] = -1,
                    t &= ~r
                }
            }
            function bl(e) {
                if (0 !== (48 & Nu))
                    throw Error(a(327));
                if (Ll(),
                e === Ru && 0 !== (e.expiredLanes & Lu)) {
                    var t = Lu
                      , n = Ol(e, t);
                    0 !== (zu & Bu) && (n = Ol(e, t = Vt(e, t)))
                } else
                    n = Ol(e, t = Vt(e, 0));
                if (0 !== e.tag && 2 === n && (Nu |= 64,
                e.hydrate && (e.hydrate = !1,
                Qr(e.containerInfo)),
                0 !== (t = Ft(e)) && (n = Ol(e, t))),
                1 === n)
                    throw n = Fu,
                    kl(e, 0),
                    gl(e, t),
                    ml(e, Wo()),
                    n;
                return e.finishedWork = e.current.alternate,
                e.finishedLanes = t,
                Nl(e),
                ml(e, Wo()),
                null
            }
            function wl(e, t) {
                var n = Nu;
                Nu |= 1;
                try {
                    return e(t)
                } finally {
                    0 === (Nu = n) && (Qu(),
                    Yo())
                }
            }
            function xl(e, t) {
                var n = Nu;
                Nu &= -2,
                Nu |= 8;
                try {
                    return e(t)
                } finally {
                    0 === (Nu = n) && (Qu(),
                    Yo())
                }
            }
            function Sl(e, t) {
                fo(Iu, Du),
                Du |= t,
                zu |= t
            }
            function El() {
                Du = Iu.current,
                co(Iu)
            }
            function kl(e, t) {
                e.finishedWork = null,
                e.finishedLanes = 0;
                var n = e.timeoutHandle;
                if (-1 !== n && (e.timeoutHandle = -1,
                Kr(n)),
                null !== ju)
                    for (n = ju.return; null !== n; ) {
                        var r = n;
                        switch (r.tag) {
                        case 1:
                            null !== (r = r.type.childContextTypes) && void 0 !== r && bo();
                            break;
                        case 3:
                            Li(),
                            co(ho),
                            co(vo),
                            Xi();
                            break;
                        case 5:
                            Ii(r);
                            break;
                        case 4:
                            Li();
                            break;
                        case 13:
                        case 19:
                            co(Vi);
                            break;
                        case 10:
                            oi(r);
                            break;
                        case 23:
                        case 24:
                            El()
                        }
                        n = n.return
                    }
                Ru = e,
                ju = Kl(e.current, null),
                Lu = Du = zu = t,
                Vu = 0,
                Fu = null,
                $u = Bu = Uu = 0
            }
            function Pl(e, t) {
                for (; ; ) {
                    var n = ju;
                    try {
                        if (ri(),
                        Gi.current = Na,
                        ra) {
                            for (var r = ea.memoizedState; null !== r; ) {
                                var o = r.queue;
                                null !== o && (o.pending = null),
                                r = r.next
                            }
                            ra = !1
                        }
                        if (Ji = 0,
                        na = ta = ea = null,
                        oa = !1,
                        Mu.current = null,
                        null === n || null === n.return) {
                            Vu = 1,
                            Fu = t,
                            ju = null;
                            break
                        }
                        e: {
                            var i = e
                              , a = n.return
                              , u = n
                              , l = t;
                            if (t = Lu,
                            u.flags |= 2048,
                            u.firstEffect = u.lastEffect = null,
                            null !== l && "object" === typeof l && "function" === typeof l.then) {
                                var s = l;
                                if (0 === (2 & u.mode)) {
                                    var c = u.alternate;
                                    c ? (u.updateQueue = c.updateQueue,
                                    u.memoizedState = c.memoizedState,
                                    u.lanes = c.lanes) : (u.updateQueue = null,
                                    u.memoizedState = null)
                                }
                                var f = 0 !== (1 & Vi.current)
                                  , d = a;
                                do {
                                    var p;
                                    if (p = 13 === d.tag) {
                                        var v = d.memoizedState;
                                        if (null !== v)
                                            p = null !== v.dehydrated;
                                        else {
                                            var h = d.memoizedProps;
                                            p = void 0 !== h.fallback && (!0 !== h.unstable_avoidThisFallback || !f)
                                        }
                                    }
                                    if (p) {
                                        var m = d.updateQueue;
                                        if (null === m) {
                                            var y = new Set;
                                            y.add(s),
                                            d.updateQueue = y
                                        } else
                                            m.add(s);
                                        if (0 === (2 & d.mode)) {
                                            if (d.flags |= 64,
                                            u.flags |= 16384,
                                            u.flags &= -2981,
                                            1 === u.tag)
                                                if (null === u.alternate)
                                                    u.tag = 17;
                                                else {
                                                    var g = fi(-1, 1);
                                                    g.tag = 2,
                                                    di(u, g)
                                                }
                                            u.lanes |= 1;
                                            break e
                                        }
                                        l = void 0,
                                        u = t;
                                        var b = i.pingCache;
                                        if (null === b ? (b = i.pingCache = new fu,
                                        l = new Set,
                                        b.set(s, l)) : void 0 === (l = b.get(s)) && (l = new Set,
                                        b.set(s, l)),
                                        !l.has(u)) {
                                            l.add(u);
                                            var w = Ul.bind(null, i, s, u);
                                            s.then(w, w)
                                        }
                                        d.flags |= 4096,
                                        d.lanes = t;
                                        break e
                                    }
                                    d = d.return
                                } while (null !== d);
                                l = Error((Q(u.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")
                            }
                            5 !== Vu && (Vu = 2),
                            l = su(l, u),
                            d = a;
                            do {
                                switch (d.tag) {
                                case 3:
                                    i = l,
                                    d.flags |= 4096,
                                    t &= -t,
                                    d.lanes |= t,
                                    pi(d, du(0, i, t));
                                    break e;
                                case 1:
                                    i = l;
                                    var x = d.type
                                      , S = d.stateNode;
                                    if (0 === (64 & d.flags) && ("function" === typeof x.getDerivedStateFromError || null !== S && "function" === typeof S.componentDidCatch && (null === Zu || !Zu.has(S)))) {
                                        d.flags |= 4096,
                                        t &= -t,
                                        d.lanes |= t,
                                        pi(d, pu(d, i, t));
                                        break e
                                    }
                                }
                                d = d.return
                            } while (null !== d)
                        }
                        Ml(n)
                    } catch (E) {
                        t = E,
                        ju === n && null !== n && (ju = n = n.return);
                        continue
                    }
                    break
                }
            }
            function Cl() {
                var e = Au.current;
                return Au.current = Na,
                null === e ? Na : e
            }
            function Ol(e, t) {
                var n = Nu;
                Nu |= 16;
                var r = Cl();
                for (Ru === e && Lu === t || kl(e, t); ; )
                    try {
                        _l();
                        break
                    } catch (o) {
                        Pl(e, o)
                    }
                if (ri(),
                Nu = n,
                Au.current = r,
                null !== ju)
                    throw Error(a(261));
                return Ru = null,
                Lu = 0,
                Vu
            }
            function _l() {
                for (; null !== ju; )
                    Al(ju)
            }
            function Tl() {
                for (; null !== ju && !To(); )
                    Al(ju)
            }
            function Al(e) {
                var t = qu(e.alternate, e, Du);
                e.memoizedProps = e.pendingProps,
                null === t ? Ml(e) : ju = t,
                Mu.current = null
            }
            function Ml(e) {
                var t = e;
                do {
                    var n = t.alternate;
                    if (e = t.return,
                    0 === (2048 & t.flags)) {
                        if (null !== (n = uu(n, t, Du)))
                            return void (ju = n);
                        if (24 !== (n = t).tag && 23 !== n.tag || null === n.memoizedState || 0 !== (1073741824 & Du) || 0 === (4 & n.mode)) {
                            for (var r = 0, o = n.child; null !== o; )
                                r |= o.lanes | o.childLanes,
                                o = o.sibling;
                            n.childLanes = r
                        }
                        null !== e && 0 === (2048 & e.flags) && (null === e.firstEffect && (e.firstEffect = t.firstEffect),
                        null !== t.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = t.firstEffect),
                        e.lastEffect = t.lastEffect),
                        1 < t.flags && (null !== e.lastEffect ? e.lastEffect.nextEffect = t : e.firstEffect = t,
                        e.lastEffect = t))
                    } else {
                        if (null !== (n = lu(t)))
                            return n.flags &= 2047,
                            void (ju = n);
                        null !== e && (e.firstEffect = e.lastEffect = null,
                        e.flags |= 2048)
                    }
                    if (null !== (t = t.sibling))
                        return void (ju = t);
                    ju = t = e
                } while (null !== t);
                0 === Vu && (Vu = 5)
            }
            function Nl(e) {
                var t = Ho();
                return Qo(99, Rl.bind(null, e, t)),
                null
            }
            function Rl(e, t) {
                do {
                    Ll()
                } while (null !== el);
                if (0 !== (48 & Nu))
                    throw Error(a(327));
                var n = e.finishedWork;
                if (null === n)
                    return null;
                if (e.finishedWork = null,
                e.finishedLanes = 0,
                n === e.current)
                    throw Error(a(177));
                e.callbackNode = null;
                var r = n.lanes | n.childLanes
                  , o = r
                  , i = e.pendingLanes & ~o;
                e.pendingLanes = o,
                e.suspendedLanes = 0,
                e.pingedLanes = 0,
                e.expiredLanes &= o,
                e.mutableReadLanes &= o,
                e.entangledLanes &= o,
                o = e.entanglements;
                for (var u = e.eventTimes, l = e.expirationTimes; 0 < i; ) {
                    var s = 31 - Wt(i)
                      , c = 1 << s;
                    o[s] = 0,
                    u[s] = -1,
                    l[s] = -1,
                    i &= ~c
                }
                if (null !== ol && 0 === (24 & r) && ol.has(e) && ol.delete(e),
                e === Ru && (ju = Ru = null,
                Lu = 0),
                1 < n.flags ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n,
                r = n.firstEffect) : r = n : r = n.firstEffect,
                null !== r) {
                    if (o = Nu,
                    Nu |= 32,
                    Mu.current = null,
                    Ur = Yt,
                    yr(u = mr())) {
                        if ("selectionStart"in u)
                            l = {
                                start: u.selectionStart,
                                end: u.selectionEnd
                            };
                        else
                            e: if (l = (l = u.ownerDocument) && l.defaultView || window,
                            (c = l.getSelection && l.getSelection()) && 0 !== c.rangeCount) {
                                l = c.anchorNode,
                                i = c.anchorOffset,
                                s = c.focusNode,
                                c = c.focusOffset;
                                try {
                                    l.nodeType,
                                    s.nodeType
                                } catch (C) {
                                    l = null;
                                    break e
                                }
                                var f = 0
                                  , d = -1
                                  , p = -1
                                  , v = 0
                                  , h = 0
                                  , m = u
                                  , y = null;
                                t: for (; ; ) {
                                    for (var g; m !== l || 0 !== i && 3 !== m.nodeType || (d = f + i),
                                    m !== s || 0 !== c && 3 !== m.nodeType || (p = f + c),
                                    3 === m.nodeType && (f += m.nodeValue.length),
                                    null !== (g = m.firstChild); )
                                        y = m,
                                        m = g;
                                    for (; ; ) {
                                        if (m === u)
                                            break t;
                                        if (y === l && ++v === i && (d = f),
                                        y === s && ++h === c && (p = f),
                                        null !== (g = m.nextSibling))
                                            break;
                                        y = (m = y).parentNode
                                    }
                                    m = g
                                }
                                l = -1 === d || -1 === p ? null : {
                                    start: d,
                                    end: p
                                }
                            } else
                                l = null;
                        l = l || {
                            start: 0,
                            end: 0
                        }
                    } else
                        l = null;
                    Br = {
                        focusedElem: u,
                        selectionRange: l
                    },
                    Yt = !1,
                    cl = null,
                    fl = !1,
                    Yu = r;
                    do {
                        try {
                            jl()
                        } catch (C) {
                            if (null === Yu)
                                throw Error(a(330));
                            zl(Yu, C),
                            Yu = Yu.nextEffect
                        }
                    } while (null !== Yu);
                    cl = null,
                    Yu = r;
                    do {
                        try {
                            for (u = e; null !== Yu; ) {
                                var b = Yu.flags;
                                if (16 & b && ge(Yu.stateNode, ""),
                                128 & b) {
                                    var w = Yu.alternate;
                                    if (null !== w) {
                                        var x = w.ref;
                                        null !== x && ("function" === typeof x ? x(null) : x.current = null)
                                    }
                                }
                                switch (1038 & b) {
                                case 2:
                                    Su(Yu),
                                    Yu.flags &= -3;
                                    break;
                                case 6:
                                    Su(Yu),
                                    Yu.flags &= -3,
                                    Cu(Yu.alternate, Yu);
                                    break;
                                case 1024:
                                    Yu.flags &= -1025;
                                    break;
                                case 1028:
                                    Yu.flags &= -1025,
                                    Cu(Yu.alternate, Yu);
                                    break;
                                case 4:
                                    Cu(Yu.alternate, Yu);
                                    break;
                                case 8:
                                    Pu(u, l = Yu);
                                    var S = l.alternate;
                                    wu(l),
                                    null !== S && wu(S)
                                }
                                Yu = Yu.nextEffect
                            }
                        } catch (C) {
                            if (null === Yu)
                                throw Error(a(330));
                            zl(Yu, C),
                            Yu = Yu.nextEffect
                        }
                    } while (null !== Yu);
                    if (x = Br,
                    w = mr(),
                    b = x.focusedElem,
                    u = x.selectionRange,
                    w !== b && b && b.ownerDocument && hr(b.ownerDocument.documentElement, b)) {
                        null !== u && yr(b) && (w = u.start,
                        void 0 === (x = u.end) && (x = w),
                        "selectionStart"in b ? (b.selectionStart = w,
                        b.selectionEnd = Math.min(x, b.value.length)) : (x = (w = b.ownerDocument || document) && w.defaultView || window).getSelection && (x = x.getSelection(),
                        l = b.textContent.length,
                        S = Math.min(u.start, l),
                        u = void 0 === u.end ? S : Math.min(u.end, l),
                        !x.extend && S > u && (l = u,
                        u = S,
                        S = l),
                        l = vr(b, S),
                        i = vr(b, u),
                        l && i && (1 !== x.rangeCount || x.anchorNode !== l.node || x.anchorOffset !== l.offset || x.focusNode !== i.node || x.focusOffset !== i.offset) && ((w = w.createRange()).setStart(l.node, l.offset),
                        x.removeAllRanges(),
                        S > u ? (x.addRange(w),
                        x.extend(i.node, i.offset)) : (w.setEnd(i.node, i.offset),
                        x.addRange(w))))),
                        w = [];
                        for (x = b; x = x.parentNode; )
                            1 === x.nodeType && w.push({
                                element: x,
                                left: x.scrollLeft,
                                top: x.scrollTop
                            });
                        for ("function" === typeof b.focus && b.focus(),
                        b = 0; b < w.length; b++)
                            (x = w[b]).element.scrollLeft = x.left,
                            x.element.scrollTop = x.top
                    }
                    Yt = !!Ur,
                    Br = Ur = null,
                    e.current = n,
                    Yu = r;
                    do {
                        try {
                            for (b = e; null !== Yu; ) {
                                var E = Yu.flags;
                                if (36 & E && yu(b, Yu.alternate, Yu),
                                128 & E) {
                                    w = void 0;
                                    var k = Yu.ref;
                                    if (null !== k) {
                                        var P = Yu.stateNode;
                                        Yu.tag,
                                        w = P,
                                        "function" === typeof k ? k(w) : k.current = w
                                    }
                                }
                                Yu = Yu.nextEffect
                            }
                        } catch (C) {
                            if (null === Yu)
                                throw Error(a(330));
                            zl(Yu, C),
                            Yu = Yu.nextEffect
                        }
                    } while (null !== Yu);
                    Yu = null,
                    Fo(),
                    Nu = o
                } else
                    e.current = n;
                if (Ju)
                    Ju = !1,
                    el = e,
                    tl = t;
                else
                    for (Yu = r; null !== Yu; )
                        t = Yu.nextEffect,
                        Yu.nextEffect = null,
                        8 & Yu.flags && ((E = Yu).sibling = null,
                        E.stateNode = null),
                        Yu = t;
                if (0 === (r = e.pendingLanes) && (Zu = null),
                1 === r ? e === al ? il++ : (il = 0,
                al = e) : il = 0,
                n = n.stateNode,
                Po && "function" === typeof Po.onCommitFiberRoot)
                    try {
                        Po.onCommitFiberRoot(ko, n, void 0, 64 === (64 & n.current.flags))
                    } catch (C) {}
                if (ml(e, Wo()),
                Xu)
                    throw Xu = !1,
                    e = Gu,
                    Gu = null,
                    e;
                return 0 !== (8 & Nu) || Yo(),
                null
            }
            function jl() {
                for (; null !== Yu; ) {
                    var e = Yu.alternate;
                    fl || null === cl || (0 !== (8 & Yu.flags) ? et(Yu, cl) && (fl = !0) : 13 === Yu.tag && _u(e, Yu) && et(Yu, cl) && (fl = !0));
                    var t = Yu.flags;
                    0 !== (256 & t) && mu(e, Yu),
                    0 === (512 & t) || Ju || (Ju = !0,
                    qo(97, (function() {
                        return Ll(),
                        null
                    }
                    ))),
                    Yu = Yu.nextEffect
                }
            }
            function Ll() {
                if (90 !== tl) {
                    var e = 97 < tl ? 97 : tl;
                    return tl = 90,
                    Qo(e, Vl)
                }
                return !1
            }
            function Dl(e, t) {
                nl.push(t, e),
                Ju || (Ju = !0,
                qo(97, (function() {
                    return Ll(),
                    null
                }
                )))
            }
            function Il(e, t) {
                rl.push(t, e),
                Ju || (Ju = !0,
                qo(97, (function() {
                    return Ll(),
                    null
                }
                )))
            }
            function Vl() {
                if (null === el)
                    return !1;
                var e = el;
                if (el = null,
                0 !== (48 & Nu))
                    throw Error(a(331));
                var t = Nu;
                Nu |= 32;
                var n = rl;
                rl = [];
                for (var r = 0; r < n.length; r += 2) {
                    var o = n[r]
                      , i = n[r + 1]
                      , u = o.destroy;
                    if (o.destroy = void 0,
                    "function" === typeof u)
                        try {
                            u()
                        } catch (s) {
                            if (null === i)
                                throw Error(a(330));
                            zl(i, s)
                        }
                }
                for (n = nl,
                nl = [],
                r = 0; r < n.length; r += 2) {
                    o = n[r],
                    i = n[r + 1];
                    try {
                        var l = o.create;
                        o.destroy = l()
                    } catch (s) {
                        if (null === i)
                            throw Error(a(330));
                        zl(i, s)
                    }
                }
                for (l = e.current.firstEffect; null !== l; )
                    e = l.nextEffect,
                    l.nextEffect = null,
                    8 & l.flags && (l.sibling = null,
                    l.stateNode = null),
                    l = e;
                return Nu = t,
                Yo(),
                !0
            }
            function Fl(e, t, n) {
                di(e, t = du(0, t = su(n, t), 1)),
                t = dl(),
                null !== (e = hl(e, 1)) && ($t(e, 1, t),
                ml(e, t))
            }
            function zl(e, t) {
                if (3 === e.tag)
                    Fl(e, e, t);
                else
                    for (var n = e.return; null !== n; ) {
                        if (3 === n.tag) {
                            Fl(n, e, t);
                            break
                        }
                        if (1 === n.tag) {
                            var r = n.stateNode;
                            if ("function" === typeof n.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Zu || !Zu.has(r))) {
                                var o = pu(n, e = su(t, e), 1);
                                if (di(n, o),
                                o = dl(),
                                null !== (n = hl(n, 1)))
                                    $t(n, 1, o),
                                    ml(n, o);
                                else if ("function" === typeof r.componentDidCatch && (null === Zu || !Zu.has(r)))
                                    try {
                                        r.componentDidCatch(t, e)
                                    } catch (i) {}
                                break
                            }
                        }
                        n = n.return
                    }
            }
            function Ul(e, t, n) {
                var r = e.pingCache;
                null !== r && r.delete(t),
                t = dl(),
                e.pingedLanes |= e.suspendedLanes & n,
                Ru === e && (Lu & n) === n && (4 === Vu || 3 === Vu && (62914560 & Lu) === Lu && 500 > Wo() - Hu ? kl(e, 0) : $u |= n),
                ml(e, t)
            }
            function Bl(e, t) {
                var n = e.stateNode;
                null !== n && n.delete(t),
                0 === (t = 0) && (0 === (2 & (t = e.mode)) ? t = 1 : 0 === (4 & t) ? t = 99 === Ho() ? 1 : 2 : (0 === ll && (ll = zu),
                0 === (t = Ut(62914560 & ~ll)) && (t = 4194304))),
                n = dl(),
                null !== (e = hl(e, t)) && ($t(e, t, n),
                ml(e, n))
            }
            function $l(e, t, n, r) {
                this.tag = e,
                this.key = n,
                this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
                this.index = 0,
                this.ref = null,
                this.pendingProps = t,
                this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
                this.mode = r,
                this.flags = 0,
                this.lastEffect = this.firstEffect = this.nextEffect = null,
                this.childLanes = this.lanes = 0,
                this.alternate = null
            }
            function Wl(e, t, n, r) {
                return new $l(e,t,n,r)
            }
            function Hl(e) {
                return !(!(e = e.prototype) || !e.isReactComponent)
            }
            function Kl(e, t) {
                var n = e.alternate;
                return null === n ? ((n = Wl(e.tag, t, e.key, e.mode)).elementType = e.elementType,
                n.type = e.type,
                n.stateNode = e.stateNode,
                n.alternate = e,
                e.alternate = n) : (n.pendingProps = t,
                n.type = e.type,
                n.flags = 0,
                n.nextEffect = null,
                n.firstEffect = null,
                n.lastEffect = null),
                n.childLanes = e.childLanes,
                n.lanes = e.lanes,
                n.child = e.child,
                n.memoizedProps = e.memoizedProps,
                n.memoizedState = e.memoizedState,
                n.updateQueue = e.updateQueue,
                t = e.dependencies,
                n.dependencies = null === t ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                },
                n.sibling = e.sibling,
                n.index = e.index,
                n.ref = e.ref,
                n
            }
            function Ql(e, t, n, r, o, i) {
                var u = 2;
                if (r = e,
                "function" === typeof e)
                    Hl(e) && (u = 1);
                else if ("string" === typeof e)
                    u = 5;
                else
                    e: switch (e) {
                    case k:
                        return ql(n.children, o, i, t);
                    case D:
                        u = 8,
                        o |= 16;
                        break;
                    case P:
                        u = 8,
                        o |= 1;
                        break;
                    case C:
                        return (e = Wl(12, n, t, 8 | o)).elementType = C,
                        e.type = C,
                        e.lanes = i,
                        e;
                    case A:
                        return (e = Wl(13, n, t, o)).type = A,
                        e.elementType = A,
                        e.lanes = i,
                        e;
                    case M:
                        return (e = Wl(19, n, t, o)).elementType = M,
                        e.lanes = i,
                        e;
                    case I:
                        return Yl(n, o, i, t);
                    case V:
                        return (e = Wl(24, n, t, o)).elementType = V,
                        e.lanes = i,
                        e;
                    default:
                        if ("object" === typeof e && null !== e)
                            switch (e.$$typeof) {
                            case O:
                                u = 10;
                                break e;
                            case _:
                                u = 9;
                                break e;
                            case T:
                                u = 11;
                                break e;
                            case N:
                                u = 14;
                                break e;
                            case R:
                                u = 16,
                                r = null;
                                break e;
                            case j:
                                u = 22;
                                break e
                            }
                        throw Error(a(130, null == e ? e : typeof e, ""))
                    }
                return (t = Wl(u, n, t, o)).elementType = e,
                t.type = r,
                t.lanes = i,
                t
            }
            function ql(e, t, n, r) {
                return (e = Wl(7, e, r, t)).lanes = n,
                e
            }
            function Yl(e, t, n, r) {
                return (e = Wl(23, e, r, t)).elementType = I,
                e.lanes = n,
                e
            }
            function Xl(e, t, n) {
                return (e = Wl(6, e, null, t)).lanes = n,
                e
            }
            function Gl(e, t, n) {
                return (t = Wl(4, null !== e.children ? e.children : [], e.key, t)).lanes = n,
                t.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation
                },
                t
            }
            function Zl(e, t, n) {
                this.tag = t,
                this.containerInfo = e,
                this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
                this.timeoutHandle = -1,
                this.pendingContext = this.context = null,
                this.hydrate = n,
                this.callbackNode = null,
                this.callbackPriority = 0,
                this.eventTimes = Bt(0),
                this.expirationTimes = Bt(-1),
                this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
                this.entanglements = Bt(0),
                this.mutableSourceEagerHydrationData = null
            }
            function Jl(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    $$typeof: E,
                    key: null == r ? null : "" + r,
                    children: e,
                    containerInfo: t,
                    implementation: n
                }
            }
            function es(e, t, n, r) {
                var o = t.current
                  , i = dl()
                  , u = pl(o);
                e: if (n) {
                    t: {
                        if (Xe(n = n._reactInternals) !== n || 1 !== n.tag)
                            throw Error(a(170));
                        var l = n;
                        do {
                            switch (l.tag) {
                            case 3:
                                l = l.stateNode.context;
                                break t;
                            case 1:
                                if (go(l.type)) {
                                    l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                                    break t
                                }
                            }
                            l = l.return
                        } while (null !== l);
                        throw Error(a(171))
                    }
                    if (1 === n.tag) {
                        var s = n.type;
                        if (go(s)) {
                            n = xo(n, s, l);
                            break e
                        }
                    }
                    n = l
                } else
                    n = po;
                return null === t.context ? t.context = n : t.pendingContext = n,
                (t = fi(i, u)).payload = {
                    element: e
                },
                null !== (r = void 0 === r ? null : r) && (t.callback = r),
                di(o, t),
                vl(o, u, i),
                u
            }
            function ts(e) {
                return (e = e.current).child ? (e.child.tag,
                e.child.stateNode) : null
            }
            function ns(e, t) {
                if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                    var n = e.retryLane;
                    e.retryLane = 0 !== n && n < t ? n : t
                }
            }
            function rs(e, t) {
                ns(e, t),
                (e = e.alternate) && ns(e, t)
            }
            function os(e, t, n) {
                var r = null != n && null != n.hydrationOptions && n.hydrationOptions.mutableSources || null;
                if (n = new Zl(e,t,null != n && !0 === n.hydrate),
                t = Wl(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0),
                n.current = t,
                t.stateNode = n,
                si(t),
                e[eo] = n.current,
                Nr(8 === e.nodeType ? e.parentNode : e),
                r)
                    for (e = 0; e < r.length; e++) {
                        var o = (t = r[e])._getVersion;
                        o = o(t._source),
                        null == n.mutableSourceEagerHydrationData ? n.mutableSourceEagerHydrationData = [t, o] : n.mutableSourceEagerHydrationData.push(t, o)
                    }
                this._internalRoot = n
            }
            function is(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
            }
            function as(e, t, n, r, o) {
                var i = n._reactRootContainer;
                if (i) {
                    var a = i._internalRoot;
                    if ("function" === typeof o) {
                        var u = o;
                        o = function() {
                            var e = ts(a);
                            u.call(e)
                        }
                    }
                    es(t, a, e, o)
                } else {
                    if (i = n._reactRootContainer = function(e, t) {
                        if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))),
                        !t)
                            for (var n; n = e.lastChild; )
                                e.removeChild(n);
                        return new os(e,0,t ? {
                            hydrate: !0
                        } : void 0)
                    }(n, r),
                    a = i._internalRoot,
                    "function" === typeof o) {
                        var l = o;
                        o = function() {
                            var e = ts(a);
                            l.call(e)
                        }
                    }
                    xl((function() {
                        es(t, a, e, o)
                    }
                    ))
                }
                return ts(a)
            }
            function us(e, t) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!is(t))
                    throw Error(a(200));
                return Jl(e, t, null, n)
            }
            qu = function(e, t, n) {
                var r = t.lanes;
                if (null !== e)
                    if (e.memoizedProps !== t.pendingProps || ho.current)
                        Ia = !0;
                    else {
                        if (0 === (n & r)) {
                            switch (Ia = !1,
                            t.tag) {
                            case 3:
                                Qa(t),
                                qi();
                                break;
                            case 5:
                                Di(t);
                                break;
                            case 1:
                                go(t.type) && So(t);
                                break;
                            case 4:
                                ji(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                r = t.memoizedProps.value;
                                var o = t.type._context;
                                fo(Jo, o._currentValue),
                                o._currentValue = r;
                                break;
                            case 13:
                                if (null !== t.memoizedState)
                                    return 0 !== (n & t.child.childLanes) ? Za(e, t, n) : (fo(Vi, 1 & Vi.current),
                                    null !== (t = iu(e, t, n)) ? t.sibling : null);
                                fo(Vi, 1 & Vi.current);
                                break;
                            case 19:
                                if (r = 0 !== (n & t.childLanes),
                                0 !== (64 & e.flags)) {
                                    if (r)
                                        return ou(e, t, n);
                                    t.flags |= 64
                                }
                                if (null !== (o = t.memoizedState) && (o.rendering = null,
                                o.tail = null,
                                o.lastEffect = null),
                                fo(Vi, Vi.current),
                                r)
                                    break;
                                return null;
                            case 23:
                            case 24:
                                return t.lanes = 0,
                                Ba(e, t, n)
                            }
                            return iu(e, t, n)
                        }
                        Ia = 0 !== (16384 & e.flags)
                    }
                else
                    Ia = !1;
                switch (t.lanes = 0,
                t.tag) {
                case 2:
                    if (r = t.type,
                    null !== e && (e.alternate = null,
                    t.alternate = null,
                    t.flags |= 2),
                    e = t.pendingProps,
                    o = yo(t, vo.current),
                    ai(t, n),
                    o = ua(null, t, r, e, o, n),
                    t.flags |= 1,
                    "object" === typeof o && null !== o && "function" === typeof o.render && void 0 === o.$$typeof) {
                        if (t.tag = 1,
                        t.memoizedState = null,
                        t.updateQueue = null,
                        go(r)) {
                            var i = !0;
                            So(t)
                        } else
                            i = !1;
                        t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null,
                        si(t);
                        var u = r.getDerivedStateFromProps;
                        "function" === typeof u && yi(t, r, u, e),
                        o.updater = gi,
                        t.stateNode = o,
                        o._reactInternals = t,
                        Si(t, r, e, n),
                        t = Ka(null, t, r, !0, i, n)
                    } else
                        t.tag = 0,
                        Va(null, t, o, n),
                        t = t.child;
                    return t;
                case 16:
                    o = t.elementType;
                    e: {
                        switch (null !== e && (e.alternate = null,
                        t.alternate = null,
                        t.flags |= 2),
                        e = t.pendingProps,
                        o = (i = o._init)(o._payload),
                        t.type = o,
                        i = t.tag = function(e) {
                            if ("function" === typeof e)
                                return Hl(e) ? 1 : 0;
                            if (void 0 !== e && null !== e) {
                                if ((e = e.$$typeof) === T)
                                    return 11;
                                if (e === N)
                                    return 14
                            }
                            return 2
                        }(o),
                        e = Zo(o, e),
                        i) {
                        case 0:
                            t = Wa(null, t, o, e, n);
                            break e;
                        case 1:
                            t = Ha(null, t, o, e, n);
                            break e;
                        case 11:
                            t = Fa(null, t, o, e, n);
                            break e;
                        case 14:
                            t = za(null, t, o, Zo(o.type, e), r, n);
                            break e
                        }
                        throw Error(a(306, o, ""))
                    }
                    return t;
                case 0:
                    return r = t.type,
                    o = t.pendingProps,
                    Wa(e, t, r, o = t.elementType === r ? o : Zo(r, o), n);
                case 1:
                    return r = t.type,
                    o = t.pendingProps,
                    Ha(e, t, r, o = t.elementType === r ? o : Zo(r, o), n);
                case 3:
                    if (Qa(t),
                    r = t.updateQueue,
                    null === e || null === r)
                        throw Error(a(282));
                    if (r = t.pendingProps,
                    o = null !== (o = t.memoizedState) ? o.element : null,
                    ci(e, t),
                    vi(t, r, null, n),
                    (r = t.memoizedState.element) === o)
                        qi(),
                        t = iu(e, t, n);
                    else {
                        if ((i = (o = t.stateNode).hydrate) && (Ui = qr(t.stateNode.containerInfo.firstChild),
                        zi = t,
                        i = Bi = !0),
                        i) {
                            if (null != (e = o.mutableSourceEagerHydrationData))
                                for (o = 0; o < e.length; o += 2)
                                    (i = e[o])._workInProgressVersionPrimary = e[o + 1],
                                    Yi.push(i);
                            for (n = _i(t, null, r, n),
                            t.child = n; n; )
                                n.flags = -3 & n.flags | 1024,
                                n = n.sibling
                        } else
                            Va(e, t, r, n),
                            qi();
                        t = t.child
                    }
                    return t;
                case 5:
                    return Di(t),
                    null === e && Hi(t),
                    r = t.type,
                    o = t.pendingProps,
                    i = null !== e ? e.memoizedProps : null,
                    u = o.children,
                    Wr(r, o) ? u = null : null !== i && Wr(r, i) && (t.flags |= 16),
                    $a(e, t),
                    Va(e, t, u, n),
                    t.child;
                case 6:
                    return null === e && Hi(t),
                    null;
                case 13:
                    return Za(e, t, n);
                case 4:
                    return ji(t, t.stateNode.containerInfo),
                    r = t.pendingProps,
                    null === e ? t.child = Oi(t, null, r, n) : Va(e, t, r, n),
                    t.child;
                case 11:
                    return r = t.type,
                    o = t.pendingProps,
                    Fa(e, t, r, o = t.elementType === r ? o : Zo(r, o), n);
                case 7:
                    return Va(e, t, t.pendingProps, n),
                    t.child;
                case 8:
                case 12:
                    return Va(e, t, t.pendingProps.children, n),
                    t.child;
                case 10:
                    e: {
                        r = t.type._context,
                        o = t.pendingProps,
                        u = t.memoizedProps,
                        i = o.value;
                        var l = t.type._context;
                        if (fo(Jo, l._currentValue),
                        l._currentValue = i,
                        null !== u)
                            if (l = u.value,
                            0 === (i = cr(l, i) ? 0 : 0 | ("function" === typeof r._calculateChangedBits ? r._calculateChangedBits(l, i) : 1073741823))) {
                                if (u.children === o.children && !ho.current) {
                                    t = iu(e, t, n);
                                    break e
                                }
                            } else
                                for (null !== (l = t.child) && (l.return = t); null !== l; ) {
                                    var s = l.dependencies;
                                    if (null !== s) {
                                        u = l.child;
                                        for (var c = s.firstContext; null !== c; ) {
                                            if (c.context === r && 0 !== (c.observedBits & i)) {
                                                1 === l.tag && ((c = fi(-1, n & -n)).tag = 2,
                                                di(l, c)),
                                                l.lanes |= n,
                                                null !== (c = l.alternate) && (c.lanes |= n),
                                                ii(l.return, n),
                                                s.lanes |= n;
                                                break
                                            }
                                            c = c.next
                                        }
                                    } else
                                        u = 10 === l.tag && l.type === t.type ? null : l.child;
                                    if (null !== u)
                                        u.return = l;
                                    else
                                        for (u = l; null !== u; ) {
                                            if (u === t) {
                                                u = null;
                                                break
                                            }
                                            if (null !== (l = u.sibling)) {
                                                l.return = u.return,
                                                u = l;
                                                break
                                            }
                                            u = u.return
                                        }
                                    l = u
                                }
                        Va(e, t, o.children, n),
                        t = t.child
                    }
                    return t;
                case 9:
                    return o = t.type,
                    r = (i = t.pendingProps).children,
                    ai(t, n),
                    r = r(o = ui(o, i.unstable_observedBits)),
                    t.flags |= 1,
                    Va(e, t, r, n),
                    t.child;
                case 14:
                    return i = Zo(o = t.type, t.pendingProps),
                    za(e, t, o, i = Zo(o.type, i), r, n);
                case 15:
                    return Ua(e, t, t.type, t.pendingProps, r, n);
                case 17:
                    return r = t.type,
                    o = t.pendingProps,
                    o = t.elementType === r ? o : Zo(r, o),
                    null !== e && (e.alternate = null,
                    t.alternate = null,
                    t.flags |= 2),
                    t.tag = 1,
                    go(r) ? (e = !0,
                    So(t)) : e = !1,
                    ai(t, n),
                    wi(t, r, o),
                    Si(t, r, o, n),
                    Ka(null, t, r, !0, e, n);
                case 19:
                    return ou(e, t, n);
                case 23:
                case 24:
                    return Ba(e, t, n)
                }
                throw Error(a(156, t.tag))
            }
            ,
            os.prototype.render = function(e) {
                es(e, this._internalRoot, null, null)
            }
            ,
            os.prototype.unmount = function() {
                var e = this._internalRoot
                  , t = e.containerInfo;
                es(null, e, null, (function() {
                    t[eo] = null
                }
                ))
            }
            ,
            tt = function(e) {
                13 === e.tag && (vl(e, 4, dl()),
                rs(e, 4))
            }
            ,
            nt = function(e) {
                13 === e.tag && (vl(e, 67108864, dl()),
                rs(e, 67108864))
            }
            ,
            rt = function(e) {
                if (13 === e.tag) {
                    var t = dl()
                      , n = pl(e);
                    vl(e, n, t),
                    rs(e, n)
                }
            }
            ,
            ot = function(e, t) {
                return t()
            }
            ,
            Oe = function(e, t, n) {
                switch (t) {
                case "input":
                    if (ne(e, n),
                    t = n.name,
                    "radio" === n.type && null != t) {
                        for (n = e; n.parentNode; )
                            n = n.parentNode;
                        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                        t = 0; t < n.length; t++) {
                            var r = n[t];
                            if (r !== e && r.form === e.form) {
                                var o = io(r);
                                if (!o)
                                    throw Error(a(90));
                                G(r),
                                ne(r, o)
                            }
                        }
                    }
                    break;
                case "textarea":
                    se(e, n);
                    break;
                case "select":
                    null != (t = n.value) && ae(e, !!n.multiple, t, !1)
                }
            }
            ,
            Re = wl,
            je = function(e, t, n, r, o) {
                var i = Nu;
                Nu |= 4;
                try {
                    return Qo(98, e.bind(null, t, n, r, o))
                } finally {
                    0 === (Nu = i) && (Qu(),
                    Yo())
                }
            }
            ,
            Le = function() {
                0 === (49 & Nu) && (function() {
                    if (null !== ol) {
                        var e = ol;
                        ol = null,
                        e.forEach((function(e) {
                            e.expiredLanes |= 24 & e.pendingLanes,
                            ml(e, Wo())
                        }
                        ))
                    }
                    Yo()
                }(),
                Ll())
            }
            ,
            De = function(e, t) {
                var n = Nu;
                Nu |= 2;
                try {
                    return e(t)
                } finally {
                    0 === (Nu = n) && (Qu(),
                    Yo())
                }
            }
            ;
            var ls = {
                Events: [ro, oo, io, Me, Ne, Ll, {
                    current: !1
                }]
            }
              , ss = {
                findFiberByHostInstance: no,
                bundleType: 0,
                version: "17.0.2",
                rendererPackageName: "react-dom"
            }
              , cs = {
                bundleType: ss.bundleType,
                version: ss.version,
                rendererPackageName: ss.rendererPackageName,
                rendererConfig: ss.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: x.ReactCurrentDispatcher,
                findHostInstanceByFiber: function(e) {
                    return null === (e = Je(e)) ? null : e.stateNode
                },
                findFiberByHostInstance: ss.findFiberByHostInstance || function() {
                    return null
                }
                ,
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null
            };
            if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var fs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!fs.isDisabled && fs.supportsFiber)
                    try {
                        ko = fs.inject(cs),
                        Po = fs
                    } catch (me) {}
            }
            t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ls,
            t.createPortal = us,
            t.findDOMNode = function(e) {
                if (null == e)
                    return null;
                if (1 === e.nodeType)
                    return e;
                var t = e._reactInternals;
                if (void 0 === t) {
                    if ("function" === typeof e.render)
                        throw Error(a(188));
                    throw Error(a(268, Object.keys(e)))
                }
                return e = null === (e = Je(t)) ? null : e.stateNode
            }
            ,
            t.flushSync = function(e, t) {
                var n = Nu;
                if (0 !== (48 & n))
                    return e(t);
                Nu |= 1;
                try {
                    if (e)
                        return Qo(99, e.bind(null, t))
                } finally {
                    Nu = n,
                    Yo()
                }
            }
            ,
            t.hydrate = function(e, t, n) {
                if (!is(t))
                    throw Error(a(200));
                return as(null, e, t, !0, n)
            }
            ,
            t.render = function(e, t, n) {
                if (!is(t))
                    throw Error(a(200));
                return as(null, e, t, !1, n)
            }
            ,
            t.unmountComponentAtNode = function(e) {
                if (!is(e))
                    throw Error(a(40));
                return !!e._reactRootContainer && (xl((function() {
                    as(null, null, e, !1, (function() {
                        e._reactRootContainer = null,
                        e[eo] = null
                    }
                    ))
                }
                )),
                !0)
            }
            ,
            t.unstable_batchedUpdates = wl,
            t.unstable_createPortal = function(e, t) {
                return us(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
            }
            ,
            t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
                if (!is(n))
                    throw Error(a(200));
                if (null == e || void 0 === e._reactInternals)
                    throw Error(a(38));
                return as(e, t, n, !1, r)
            }
            ,
            t.version = "17.0.2"
        },
        164: function(e, t, n) {
            "use strict";
            !function e() {
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
                    try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (t) {
                        console.error(t)
                    }
            }(),
            e.exports = n(463)
        },
        372: function(e, t) {
            "use strict";
            var n = "function" === typeof Symbol && Symbol.for
              , r = n ? Symbol.for("react.element") : 60103
              , o = n ? Symbol.for("react.portal") : 60106
              , i = n ? Symbol.for("react.fragment") : 60107
              , a = n ? Symbol.for("react.strict_mode") : 60108
              , u = n ? Symbol.for("react.profiler") : 60114
              , l = n ? Symbol.for("react.provider") : 60109
              , s = n ? Symbol.for("react.context") : 60110
              , c = n ? Symbol.for("react.async_mode") : 60111
              , f = n ? Symbol.for("react.concurrent_mode") : 60111
              , d = n ? Symbol.for("react.forward_ref") : 60112
              , p = n ? Symbol.for("react.suspense") : 60113
              , v = n ? Symbol.for("react.suspense_list") : 60120
              , h = n ? Symbol.for("react.memo") : 60115
              , m = n ? Symbol.for("react.lazy") : 60116
              , y = n ? Symbol.for("react.block") : 60121
              , g = n ? Symbol.for("react.fundamental") : 60117
              , b = n ? Symbol.for("react.responder") : 60118
              , w = n ? Symbol.for("react.scope") : 60119;
            function x(e) {
                if ("object" === typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                    case r:
                        switch (e = e.type) {
                        case c:
                        case f:
                        case i:
                        case u:
                        case a:
                        case p:
                            return e;
                        default:
                            switch (e = e && e.$$typeof) {
                            case s:
                            case d:
                            case m:
                            case h:
                            case l:
                                return e;
                            default:
                                return t
                            }
                        }
                    case o:
                        return t
                    }
                }
            }
            function S(e) {
                return x(e) === f
            }
            t.AsyncMode = c,
            t.ConcurrentMode = f,
            t.ContextConsumer = s,
            t.ContextProvider = l,
            t.Element = r,
            t.ForwardRef = d,
            t.Fragment = i,
            t.Lazy = m,
            t.Memo = h,
            t.Portal = o,
            t.Profiler = u,
            t.StrictMode = a,
            t.Suspense = p,
            t.isAsyncMode = function(e) {
                return S(e) || x(e) === c
            }
            ,
            t.isConcurrentMode = S,
            t.isContextConsumer = function(e) {
                return x(e) === s
            }
            ,
            t.isContextProvider = function(e) {
                return x(e) === l
            }
            ,
            t.isElement = function(e) {
                return "object" === typeof e && null !== e && e.$$typeof === r
            }
            ,
            t.isForwardRef = function(e) {
                return x(e) === d
            }
            ,
            t.isFragment = function(e) {
                return x(e) === i
            }
            ,
            t.isLazy = function(e) {
                return x(e) === m
            }
            ,
            t.isMemo = function(e) {
                return x(e) === h
            }
            ,
            t.isPortal = function(e) {
                return x(e) === o
            }
            ,
            t.isProfiler = function(e) {
                return x(e) === u
            }
            ,
            t.isStrictMode = function(e) {
                return x(e) === a
            }
            ,
            t.isSuspense = function(e) {
                return x(e) === p
            }
            ,
            t.isValidElementType = function(e) {
                return "string" === typeof e || "function" === typeof e || e === i || e === f || e === u || e === a || e === p || e === v || "object" === typeof e && null !== e && (e.$$typeof === m || e.$$typeof === h || e.$$typeof === l || e.$$typeof === s || e.$$typeof === d || e.$$typeof === g || e.$$typeof === b || e.$$typeof === w || e.$$typeof === y)
            }
            ,
            t.typeOf = x
        },
        441: function(e, t, n) {
            "use strict";
            e.exports = n(372)
        },
        459: function(e, t) {
            "use strict";
            var n = 60103
              , r = 60106
              , o = 60107
              , i = 60108
              , a = 60114
              , u = 60109
              , l = 60110
              , s = 60112
              , c = 60113
              , f = 60120
              , d = 60115
              , p = 60116
              , v = 60121
              , h = 60122
              , m = 60117
              , y = 60129
              , g = 60131;
            if ("function" === typeof Symbol && Symbol.for) {
                var b = Symbol.for;
                n = b("react.element"),
                r = b("react.portal"),
                o = b("react.fragment"),
                i = b("react.strict_mode"),
                a = b("react.profiler"),
                u = b("react.provider"),
                l = b("react.context"),
                s = b("react.forward_ref"),
                c = b("react.suspense"),
                f = b("react.suspense_list"),
                d = b("react.memo"),
                p = b("react.lazy"),
                v = b("react.block"),
                h = b("react.server.block"),
                m = b("react.fundamental"),
                y = b("react.debug_trace_mode"),
                g = b("react.legacy_hidden")
            }
            function w(e) {
                if ("object" === typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                    case n:
                        switch (e = e.type) {
                        case o:
                        case a:
                        case i:
                        case c:
                        case f:
                            return e;
                        default:
                            switch (e = e && e.$$typeof) {
                            case l:
                            case s:
                            case p:
                            case d:
                            case u:
                                return e;
                            default:
                                return t
                            }
                        }
                    case r:
                        return t
                    }
                }
            }
        },
        900: function(e, t, n) {
            "use strict";
            n(459)
        },
        374: function(e, t, n) {
            "use strict";
            n(725);
            var r = n(791)
              , o = 60103;
            if (t.Fragment = 60107,
            "function" === typeof Symbol && Symbol.for) {
                var i = Symbol.for;
                o = i("react.element"),
                t.Fragment = i("react.fragment")
            }
            var a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
              , u = Object.prototype.hasOwnProperty
              , l = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };
            function s(e, t, n) {
                var r, i = {}, s = null, c = null;
                for (r in void 0 !== n && (s = "" + n),
                void 0 !== t.key && (s = "" + t.key),
                void 0 !== t.ref && (c = t.ref),
                t)
                    u.call(t, r) && !l.hasOwnProperty(r) && (i[r] = t[r]);
                if (e && e.defaultProps)
                    for (r in t = e.defaultProps)
                        void 0 === i[r] && (i[r] = t[r]);
                return {
                    $$typeof: o,
                    type: e,
                    key: s,
                    ref: c,
                    props: i,
                    _owner: a.current
                }
            }
            t.jsx = s,
            t.jsxs = s
        },
        117: function(e, t, n) {
            "use strict";
            var r = n(725)
              , o = 60103
              , i = 60106;
            t.Fragment = 60107,
            t.StrictMode = 60108,
            t.Profiler = 60114;
            var a = 60109
              , u = 60110
              , l = 60112;
            t.Suspense = 60113;
            var s = 60115
              , c = 60116;
            if ("function" === typeof Symbol && Symbol.for) {
                var f = Symbol.for;
                o = f("react.element"),
                i = f("react.portal"),
                t.Fragment = f("react.fragment"),
                t.StrictMode = f("react.strict_mode"),
                t.Profiler = f("react.profiler"),
                a = f("react.provider"),
                u = f("react.context"),
                l = f("react.forward_ref"),
                t.Suspense = f("react.suspense"),
                s = f("react.memo"),
                c = f("react.lazy")
            }
            var d = "function" === typeof Symbol && Symbol.iterator;
            function p(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
                    t += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            var v = {
                isMounted: function() {
                    return !1
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            }
              , h = {};
            function m(e, t, n) {
                this.props = e,
                this.context = t,
                this.refs = h,
                this.updater = n || v
            }
            function y() {}
            function g(e, t, n) {
                this.props = e,
                this.context = t,
                this.refs = h,
                this.updater = n || v
            }
            m.prototype.isReactComponent = {},
            m.prototype.setState = function(e, t) {
                if ("object" !== typeof e && "function" !== typeof e && null != e)
                    throw Error(p(85));
                this.updater.enqueueSetState(this, e, t, "setState")
            }
            ,
            m.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }
            ,
            y.prototype = m.prototype;
            var b = g.prototype = new y;
            b.constructor = g,
            r(b, m.prototype),
            b.isPureReactComponent = !0;
            var w = {
                current: null
            }
              , x = Object.prototype.hasOwnProperty
              , S = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };
            function E(e, t, n) {
                var r, i = {}, a = null, u = null;
                if (null != t)
                    for (r in void 0 !== t.ref && (u = t.ref),
                    void 0 !== t.key && (a = "" + t.key),
                    t)
                        x.call(t, r) && !S.hasOwnProperty(r) && (i[r] = t[r]);
                var l = arguments.length - 2;
                if (1 === l)
                    i.children = n;
                else if (1 < l) {
                    for (var s = Array(l), c = 0; c < l; c++)
                        s[c] = arguments[c + 2];
                    i.children = s
                }
                if (e && e.defaultProps)
                    for (r in l = e.defaultProps)
                        void 0 === i[r] && (i[r] = l[r]);
                return {
                    $$typeof: o,
                    type: e,
                    key: a,
                    ref: u,
                    props: i,
                    _owner: w.current
                }
            }
            function k(e) {
                return "object" === typeof e && null !== e && e.$$typeof === o
            }
            var P = /\/+/g;
            function C(e, t) {
                return "object" === typeof e && null !== e && null != e.key ? function(e) {
                    var t = {
                        "=": "=0",
                        ":": "=2"
                    };
                    return "$" + e.replace(/[=:]/g, (function(e) {
                        return t[e]
                    }
                    ))
                }("" + e.key) : t.toString(36)
            }
            function O(e, t, n, r, a) {
                var u = typeof e;
                "undefined" !== u && "boolean" !== u || (e = null);
                var l = !1;
                if (null === e)
                    l = !0;
                else
                    switch (u) {
                    case "string":
                    case "number":
                        l = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                        case o:
                        case i:
                            l = !0
                        }
                    }
                if (l)
                    return a = a(l = e),
                    e = "" === r ? "." + C(l, 0) : r,
                    Array.isArray(a) ? (n = "",
                    null != e && (n = e.replace(P, "$&/") + "/"),
                    O(a, t, n, "", (function(e) {
                        return e
                    }
                    ))) : null != a && (k(a) && (a = function(e, t) {
                        return {
                            $$typeof: o,
                            type: e.type,
                            key: t,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }
                    }(a, n + (!a.key || l && l.key === a.key ? "" : ("" + a.key).replace(P, "$&/") + "/") + e)),
                    t.push(a)),
                    1;
                if (l = 0,
                r = "" === r ? "." : r + ":",
                Array.isArray(e))
                    for (var s = 0; s < e.length; s++) {
                        var c = r + C(u = e[s], s);
                        l += O(u, t, n, c, a)
                    }
                else if (c = function(e) {
                    return null === e || "object" !== typeof e ? null : "function" === typeof (e = d && e[d] || e["@@iterator"]) ? e : null
                }(e),
                "function" === typeof c)
                    for (e = c.call(e),
                    s = 0; !(u = e.next()).done; )
                        l += O(u = u.value, t, n, c = r + C(u, s++), a);
                else if ("object" === u)
                    throw t = "" + e,
                    Error(p(31, "[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
                return l
            }
            function _(e, t, n) {
                if (null == e)
                    return e;
                var r = []
                  , o = 0;
                return O(e, r, "", "", (function(e) {
                    return t.call(n, e, o++)
                }
                )),
                r
            }
            function T(e) {
                if (-1 === e._status) {
                    var t = e._result;
                    t = t(),
                    e._status = 0,
                    e._result = t,
                    t.then((function(t) {
                        0 === e._status && (t = t.default,
                        e._status = 1,
                        e._result = t)
                    }
                    ), (function(t) {
                        0 === e._status && (e._status = 2,
                        e._result = t)
                    }
                    ))
                }
                if (1 === e._status)
                    return e._result;
                throw e._result
            }
            var A = {
                current: null
            };
            function M() {
                var e = A.current;
                if (null === e)
                    throw Error(p(321));
                return e
            }
            var N = {
                ReactCurrentDispatcher: A,
                ReactCurrentBatchConfig: {
                    transition: 0
                },
                ReactCurrentOwner: w,
                IsSomeRendererActing: {
                    current: !1
                },
                assign: r
            };
            t.Children = {
                map: _,
                forEach: function(e, t, n) {
                    _(e, (function() {
                        t.apply(this, arguments)
                    }
                    ), n)
                },
                count: function(e) {
                    var t = 0;
                    return _(e, (function() {
                        t++
                    }
                    )),
                    t
                },
                toArray: function(e) {
                    return _(e, (function(e) {
                        return e
                    }
                    )) || []
                },
                only: function(e) {
                    if (!k(e))
                        throw Error(p(143));
                    return e
                }
            },
            t.Component = m,
            t.PureComponent = g,
            t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N,
            t.cloneElement = function(e, t, n) {
                if (null === e || void 0 === e)
                    throw Error(p(267, e));
                var i = r({}, e.props)
                  , a = e.key
                  , u = e.ref
                  , l = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (u = t.ref,
                    l = w.current),
                    void 0 !== t.key && (a = "" + t.key),
                    e.type && e.type.defaultProps)
                        var s = e.type.defaultProps;
                    for (c in t)
                        x.call(t, c) && !S.hasOwnProperty(c) && (i[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c])
                }
                var c = arguments.length - 2;
                if (1 === c)
                    i.children = n;
                else if (1 < c) {
                    s = Array(c);
                    for (var f = 0; f < c; f++)
                        s[f] = arguments[f + 2];
                    i.children = s
                }
                return {
                    $$typeof: o,
                    type: e.type,
                    key: a,
                    ref: u,
                    props: i,
                    _owner: l
                }
            }
            ,
            t.createContext = function(e, t) {
                return void 0 === t && (t = null),
                (e = {
                    $$typeof: u,
                    _calculateChangedBits: t,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = {
                    $$typeof: a,
                    _context: e
                },
                e.Consumer = e
            }
            ,
            t.createElement = E,
            t.createFactory = function(e) {
                var t = E.bind(null, e);
                return t.type = e,
                t
            }
            ,
            t.createRef = function() {
                return {
                    current: null
                }
            }
            ,
            t.forwardRef = function(e) {
                return {
                    $$typeof: l,
                    render: e
                }
            }
            ,
            t.isValidElement = k,
            t.lazy = function(e) {
                return {
                    $$typeof: c,
                    _payload: {
                        _status: -1,
                        _result: e
                    },
                    _init: T
                }
            }
            ,
            t.memo = function(e, t) {
                return {
                    $$typeof: s,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            }
            ,
            t.useCallback = function(e, t) {
                return M().useCallback(e, t)
            }
            ,
            t.useContext = function(e, t) {
                return M().useContext(e, t)
            }
            ,
            t.useDebugValue = function() {}
            ,
            t.useEffect = function(e, t) {
                return M().useEffect(e, t)
            }
            ,
            t.useImperativeHandle = function(e, t, n) {
                return M().useImperativeHandle(e, t, n)
            }
            ,
            t.useLayoutEffect = function(e, t) {
                return M().useLayoutEffect(e, t)
            }
            ,
            t.useMemo = function(e, t) {
                return M().useMemo(e, t)
            }
            ,
            t.useReducer = function(e, t, n) {
                return M().useReducer(e, t, n)
            }
            ,
            t.useRef = function(e) {
                return M().useRef(e)
            }
            ,
            t.useState = function(e) {
                return M().useState(e)
            }
            ,
            t.version = "17.0.2"
        },
        791: function(e, t, n) {
            "use strict";
            e.exports = n(117)
        },
        184: function(e, t, n) {
            "use strict";
            e.exports = n(374)
        },
        813: function(e, t) {
            "use strict";
            var n, r, o, i;
            if ("object" === typeof performance && "function" === typeof performance.now) {
                var a = performance;
                t.unstable_now = function() {
                    return a.now()
                }
            } else {
                var u = Date
                  , l = u.now();
                t.unstable_now = function() {
                    return u.now() - l
                }
            }
            if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
                var s = null
                  , c = null
                  , f = function e() {
                    if (null !== s)
                        try {
                            var n = t.unstable_now();
                            s(!0, n),
                            s = null
                        } catch (r) {
                            throw setTimeout(e, 0),
                            r
                        }
                };
                n = function(e) {
                    null !== s ? setTimeout(n, 0, e) : (s = e,
                    setTimeout(f, 0))
                }
                ,
                r = function(e, t) {
                    c = setTimeout(e, t)
                }
                ,
                o = function() {
                    clearTimeout(c)
                }
                ,
                t.unstable_shouldYield = function() {
                    return !1
                }
                ,
                i = t.unstable_forceFrameRate = function() {}
            } else {
                var d = window.setTimeout
                  , p = window.clearTimeout;
                if ("undefined" !== typeof console) {
                    var v = window.cancelAnimationFrame;
                    "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),
                    "function" !== typeof v && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")
                }
                var h = !1
                  , m = null
                  , y = -1
                  , g = 5
                  , b = 0;
                t.unstable_shouldYield = function() {
                    return t.unstable_now() >= b
                }
                ,
                i = function() {}
                ,
                t.unstable_forceFrameRate = function(e) {
                    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : g = 0 < e ? Math.floor(1e3 / e) : 5
                }
                ;
                var w = new MessageChannel
                  , x = w.port2;
                w.port1.onmessage = function() {
                    if (null !== m) {
                        var e = t.unstable_now();
                        b = e + g;
                        try {
                            m(!0, e) ? x.postMessage(null) : (h = !1,
                            m = null)
                        } catch (n) {
                            throw x.postMessage(null),
                            n
                        }
                    } else
                        h = !1
                }
                ,
                n = function(e) {
                    m = e,
                    h || (h = !0,
                    x.postMessage(null))
                }
                ,
                r = function(e, n) {
                    y = d((function() {
                        e(t.unstable_now())
                    }
                    ), n)
                }
                ,
                o = function() {
                    p(y),
                    y = -1
                }
            }
            function S(e, t) {
                var n = e.length;
                e.push(t);
                e: for (; ; ) {
                    var r = n - 1 >>> 1
                      , o = e[r];
                    if (!(void 0 !== o && 0 < P(o, t)))
                        break e;
                    e[r] = t,
                    e[n] = o,
                    n = r
                }
            }
            function E(e) {
                return void 0 === (e = e[0]) ? null : e
            }
            function k(e) {
                var t = e[0];
                if (void 0 !== t) {
                    var n = e.pop();
                    if (n !== t) {
                        e[0] = n;
                        e: for (var r = 0, o = e.length; r < o; ) {
                            var i = 2 * (r + 1) - 1
                              , a = e[i]
                              , u = i + 1
                              , l = e[u];
                            if (void 0 !== a && 0 > P(a, n))
                                void 0 !== l && 0 > P(l, a) ? (e[r] = l,
                                e[u] = n,
                                r = u) : (e[r] = a,
                                e[i] = n,
                                r = i);
                            else {
                                if (!(void 0 !== l && 0 > P(l, n)))
                                    break e;
                                e[r] = l,
                                e[u] = n,
                                r = u
                            }
                        }
                    }
                    return t
                }
                return null
            }
            function P(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id
            }
            var C = []
              , O = []
              , _ = 1
              , T = null
              , A = 3
              , M = !1
              , N = !1
              , R = !1;
            function j(e) {
                for (var t = E(O); null !== t; ) {
                    if (null === t.callback)
                        k(O);
                    else {
                        if (!(t.startTime <= e))
                            break;
                        k(O),
                        t.sortIndex = t.expirationTime,
                        S(C, t)
                    }
                    t = E(O)
                }
            }
            function L(e) {
                if (R = !1,
                j(e),
                !N)
                    if (null !== E(C))
                        N = !0,
                        n(D);
                    else {
                        var t = E(O);
                        null !== t && r(L, t.startTime - e)
                    }
            }
            function D(e, n) {
                N = !1,
                R && (R = !1,
                o()),
                M = !0;
                var i = A;
                try {
                    for (j(n),
                    T = E(C); null !== T && (!(T.expirationTime > n) || e && !t.unstable_shouldYield()); ) {
                        var a = T.callback;
                        if ("function" === typeof a) {
                            T.callback = null,
                            A = T.priorityLevel;
                            var u = a(T.expirationTime <= n);
                            n = t.unstable_now(),
                            "function" === typeof u ? T.callback = u : T === E(C) && k(C),
                            j(n)
                        } else
                            k(C);
                        T = E(C)
                    }
                    if (null !== T)
                        var l = !0;
                    else {
                        var s = E(O);
                        null !== s && r(L, s.startTime - n),
                        l = !1
                    }
                    return l
                } finally {
                    T = null,
                    A = i,
                    M = !1
                }
            }
            var I = i;
            t.unstable_IdlePriority = 5,
            t.unstable_ImmediatePriority = 1,
            t.unstable_LowPriority = 4,
            t.unstable_NormalPriority = 3,
            t.unstable_Profiling = null,
            t.unstable_UserBlockingPriority = 2,
            t.unstable_cancelCallback = function(e) {
                e.callback = null
            }
            ,
            t.unstable_continueExecution = function() {
                N || M || (N = !0,
                n(D))
            }
            ,
            t.unstable_getCurrentPriorityLevel = function() {
                return A
            }
            ,
            t.unstable_getFirstCallbackNode = function() {
                return E(C)
            }
            ,
            t.unstable_next = function(e) {
                switch (A) {
                case 1:
                case 2:
                case 3:
                    var t = 3;
                    break;
                default:
                    t = A
                }
                var n = A;
                A = t;
                try {
                    return e()
                } finally {
                    A = n
                }
            }
            ,
            t.unstable_pauseExecution = function() {}
            ,
            t.unstable_requestPaint = I,
            t.unstable_runWithPriority = function(e, t) {
                switch (e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    e = 3
                }
                var n = A;
                A = e;
                try {
                    return t()
                } finally {
                    A = n
                }
            }
            ,
            t.unstable_scheduleCallback = function(e, i, a) {
                var u = t.unstable_now();
                switch ("object" === typeof a && null !== a ? a = "number" === typeof (a = a.delay) && 0 < a ? u + a : u : a = u,
                e) {
                case 1:
                    var l = -1;
                    break;
                case 2:
                    l = 250;
                    break;
                case 5:
                    l = 1073741823;
                    break;
                case 4:
                    l = 1e4;
                    break;
                default:
                    l = 5e3
                }
                return e = {
                    id: _++,
                    callback: i,
                    priorityLevel: e,
                    startTime: a,
                    expirationTime: l = a + l,
                    sortIndex: -1
                },
                a > u ? (e.sortIndex = a,
                S(O, e),
                null === E(C) && e === E(O) && (R ? o() : R = !0,
                r(L, a - u))) : (e.sortIndex = l,
                S(C, e),
                N || M || (N = !0,
                n(D))),
                e
            }
            ,
            t.unstable_wrapCallback = function(e) {
                var t = A;
                return function() {
                    var n = A;
                    A = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        A = n
                    }
                }
            }
        },
        296: function(e, t, n) {
            "use strict";
            e.exports = n(813)
        }
    }
      , t = {};
    function n(r) {
        var o = t[r];
        if (void 0 !== o)
            return o.exports;
        var i = t[r] = {
            exports: {}
        };
        return e[r](i, i.exports, n),
        i.exports
    }
    n.p = "/",
    function() {
        "use strict";
        var e = n(791)
          , t = n(164);
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach((function(t) {
                    r(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var a = "Button_button__O+4gT"
          , u = "Button_buttonPrimary__TMRcH"
          , l = "Button_buttonSecondary__IfaUy"
          , s = "Button_buttonActive__KZt0+"
          , c = "Button_buttonNotification__LgT-0"
          , f = "Button_buttonArrow__m938A"
          , d = n(184)
          , p = function(e) {
            var t = e.children
              , n = e.primary
              , r = e.secondary
              , o = e.notification
              , p = e.type
              , v = e.active
              , h = e.arrow
              , m = e.onClick;
            return (0,
            d.jsx)("button", i(i({
                className: "".concat(a, " ").concat(n ? u : "", " ").concat(r ? l : "", " ").concat(v ? s : "", " ").concat(o ? c : "", " ").concat(h ? f : ""),
                type: p || "button"
            }, m ? {
                onClick: m
            } : ""), {}, {
                children: t
            }))
        };
        var v = n.p + "static/media/logo.7479961e8a1563f1f8124a7cff89bef2.svg"
          , h = "Logo_logo__vDBPO"
          , m = function() {
            return (0,
            d.jsx)("img", {
                className: h,
                src: v,
                alt: "pomodoro logo"
            })
        }
          , y = {
            POMODORO: {
                NAME: "pomodoro",
                MINUTES: 25
            },
            SHORT_BREAK: {
                NAME: "short break",
                MINUTES: 5
            },
            LONG_BREAK: {
                NAME: "long break",
                MINUTES: 15
            }
        }
          , g = "counting"
          , b = "paused"
          , w = "finished"
          , x = "start"
          , S = "pause"
          , E = "restart"
          , k = {
            ORANGE_RED: "#f87070",
            TEAL: "#70F3F8",
            PURPLE: "#d881f8"
        }
          , P = {
            KUMBH_SANS: "Kumbh Sans",
            ROBOTO_SLAB: "Roboto Slab",
            SPACE_MONO: "Space Mono"
        }
          , C = (n(7),
        e.createContext(null));
        var O = function(e) {
            e()
        }
          , _ = function() {
            return O
        };
        var T = {
            notify: function() {},
            get: function() {
                return []
            }
        };
        function A(e, t) {
            var n, r = T;
            function o() {
                a.onStateChange && a.onStateChange()
            }
            function i() {
                n || (n = t ? t.addNestedSub(o) : e.subscribe(o),
                r = function() {
                    var e = _()
                      , t = null
                      , n = null;
                    return {
                        clear: function() {
                            t = null,
                            n = null
                        },
                        notify: function() {
                            e((function() {
                                for (var e = t; e; )
                                    e.callback(),
                                    e = e.next
                            }
                            ))
                        },
                        get: function() {
                            for (var e = [], n = t; n; )
                                e.push(n),
                                n = n.next;
                            return e
                        },
                        subscribe: function(e) {
                            var r = !0
                              , o = n = {
                                callback: e,
                                next: null,
                                prev: n
                            };
                            return o.prev ? o.prev.next = o : t = o,
                            function() {
                                r && null !== t && (r = !1,
                                o.next ? o.next.prev = o.prev : n = o.prev,
                                o.prev ? o.prev.next = o.next : t = o.next)
                            }
                        }
                    }
                }())
            }
            var a = {
                addNestedSub: function(e) {
                    return i(),
                    r.subscribe(e)
                },
                notifyNestedSubs: function() {
                    r.notify()
                },
                handleChangeWrapper: o,
                isSubscribed: function() {
                    return Boolean(n)
                },
                trySubscribe: i,
                tryUnsubscribe: function() {
                    n && (n(),
                    n = void 0,
                    r.clear(),
                    r = T)
                },
                getListeners: function() {
                    return r
                }
            };
            return a
        }
        var M = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement ? e.useLayoutEffect : e.useEffect;
        var N = function(t) {
            var n = t.store
              , r = t.context
              , o = t.children
              , i = (0,
            e.useMemo)((function() {
                var e = A(n);
                return e.onStateChange = e.notifyNestedSubs,
                {
                    store: n,
                    subscription: e
                }
            }
            ), [n])
              , a = (0,
            e.useMemo)((function() {
                return n.getState()
            }
            ), [n]);
            M((function() {
                var e = i.subscription;
                return e.trySubscribe(),
                a !== n.getState() && e.notifyNestedSubs(),
                function() {
                    e.tryUnsubscribe(),
                    e.onStateChange = null
                }
            }
            ), [i, a]);
            var u = r || C;
            return e.createElement(u.Provider, {
                value: i
            }, o)
        };
        n(110),
        n(900);
        function R() {
            return (0,
            e.useContext)(C)
        }
        function j(t) {
            void 0 === t && (t = C);
            var n = t === C ? R : function() {
                return (0,
                e.useContext)(t)
            }
            ;
            return function() {
                return n().store
            }
        }
        var L = j();
        function D(e) {
            void 0 === e && (e = C);
            var t = e === C ? L : j(e);
            return function() {
                return t().dispatch
            }
        }
        var I = D()
          , V = function(e, t) {
            return e === t
        };
        function F(t) {
            void 0 === t && (t = C);
            var n = t === C ? R : function() {
                return (0,
                e.useContext)(t)
            }
            ;
            return function(t, r) {
                void 0 === r && (r = V);
                var o = n()
                  , i = function(t, n, r, o) {
                    var i, a = (0,
                    e.useReducer)((function(e) {
                        return e + 1
                    }
                    ), 0), u = a[1], l = (0,
                    e.useMemo)((function() {
                        return A(r, o)
                    }
                    ), [r, o]), s = (0,
                    e.useRef)(), c = (0,
                    e.useRef)(), f = (0,
                    e.useRef)(), d = (0,
                    e.useRef)(), p = r.getState();
                    try {
                        if (t !== c.current || p !== f.current || s.current) {
                            var v = t(p);
                            i = void 0 !== d.current && n(v, d.current) ? d.current : v
                        } else
                            i = d.current
                    } catch (h) {
                        throw s.current && (h.message += "\nThe error may be correlated with this previous error:\n" + s.current.stack + "\n\n"),
                        h
                    }
                    return M((function() {
                        c.current = t,
                        f.current = p,
                        d.current = i,
                        s.current = void 0
                    }
                    )),
                    M((function() {
                        function e() {
                            try {
                                var e = r.getState();
                                if (e === f.current)
                                    return;
                                var t = c.current(e);
                                if (n(t, d.current))
                                    return;
                                d.current = t,
                                f.current = e
                            } catch (h) {
                                s.current = h
                            }
                            u()
                        }
                        return l.onStateChange = e,
                        l.trySubscribe(),
                        e(),
                        function() {
                            return l.tryUnsubscribe()
                        }
                    }
                    ), [r, l]),
                    i
                }(t, r, o.store, o.subscription);
                return (0,
                e.useDebugValue)(i),
                i
            }
        }
        var z, U = F();
        z = t.unstable_batchedUpdates,
        O = z;
        var B = function() {
            return I()
        }
          , $ = U;
        function W(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
            throw Error("[Immer] minified error nr: " + e + (n.length ? " " + n.map((function(e) {
                return "'" + e + "'"
            }
            )).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
        }
        function H(e) {
            return !!e && !!e[je]
        }
        function K(e) {
            return !!e && (function(e) {
                if (!e || "object" != typeof e)
                    return !1;
                var t = Object.getPrototypeOf(e);
                if (null === t)
                    return !0;
                var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
                return n === Object || "function" == typeof n && Function.toString.call(n) === Le
            }(e) || Array.isArray(e) || !!e[Re] || !!e.constructor[Re] || J(e) || ee(e))
        }
        function Q(e, t, n) {
            void 0 === n && (n = !1),
            0 === q(e) ? (n ? Object.keys : De)(e).forEach((function(r) {
                n && "symbol" == typeof r || t(r, e[r], e)
            }
            )) : e.forEach((function(n, r) {
                return t(r, n, e)
            }
            ))
        }
        function q(e) {
            var t = e[je];
            return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : J(e) ? 2 : ee(e) ? 3 : 0
        }
        function Y(e, t) {
            return 2 === q(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
        }
        function X(e, t) {
            return 2 === q(e) ? e.get(t) : e[t]
        }
        function G(e, t, n) {
            var r = q(e);
            2 === r ? e.set(t, n) : 3 === r ? (e.delete(t),
            e.add(n)) : e[t] = n
        }
        function Z(e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
        }
        function J(e) {
            return Te && e instanceof Map
        }
        function ee(e) {
            return Ae && e instanceof Set
        }
        function te(e) {
            return e.o || e.t
        }
        function ne(e) {
            if (Array.isArray(e))
                return Array.prototype.slice.call(e);
            var t = Ie(e);
            delete t[je];
            for (var n = De(t), r = 0; r < n.length; r++) {
                var o = n[r]
                  , i = t[o];
                !1 === i.writable && (i.writable = !0,
                i.configurable = !0),
                (i.get || i.set) && (t[o] = {
                    configurable: !0,
                    writable: !0,
                    enumerable: i.enumerable,
                    value: e[o]
                })
            }
            return Object.create(Object.getPrototypeOf(e), t)
        }
        function re(e, t) {
            return void 0 === t && (t = !1),
            ie(e) || H(e) || !K(e) || (q(e) > 1 && (e.set = e.add = e.clear = e.delete = oe),
            Object.freeze(e),
            t && Q(e, (function(e, t) {
                return re(t, !0)
            }
            ), !0)),
            e
        }
        function oe() {
            W(2)
        }
        function ie(e) {
            return null == e || "object" != typeof e || Object.isFrozen(e)
        }
        function ae(e) {
            var t = Ve[e];
            return t || W(18, e),
            t
        }
        function ue(e, t) {
            Ve[e] || (Ve[e] = t)
        }
        function le() {
            return Oe
        }
        function se(e, t) {
            t && (ae("Patches"),
            e.u = [],
            e.s = [],
            e.v = t)
        }
        function ce(e) {
            fe(e),
            e.p.forEach(pe),
            e.p = null
        }
        function fe(e) {
            e === Oe && (Oe = e.l)
        }
        function de(e) {
            return Oe = {
                p: [],
                l: Oe,
                h: e,
                m: !0,
                _: 0
            }
        }
        function pe(e) {
            var t = e[je];
            0 === t.i || 1 === t.i ? t.j() : t.O = !0
        }
        function ve(e, t) {
            t._ = t.p.length;
            var n = t.p[0]
              , r = void 0 !== e && e !== n;
            return t.h.g || ae("ES5").S(t, e, r),
            r ? (n[je].P && (ce(t),
            W(4)),
            K(e) && (e = he(t, e),
            t.l || ye(t, e)),
            t.u && ae("Patches").M(n[je], e, t.u, t.s)) : e = he(t, n, []),
            ce(t),
            t.u && t.v(t.u, t.s),
            e !== Ne ? e : void 0
        }
        function he(e, t, n) {
            if (ie(t))
                return t;
            var r = t[je];
            if (!r)
                return Q(t, (function(o, i) {
                    return me(e, r, t, o, i, n)
                }
                ), !0),
                t;
            if (r.A !== e)
                return t;
            if (!r.P)
                return ye(e, r.t, !0),
                r.t;
            if (!r.I) {
                r.I = !0,
                r.A._--;
                var o = 4 === r.i || 5 === r.i ? r.o = ne(r.k) : r.o;
                Q(3 === r.i ? new Set(o) : o, (function(t, i) {
                    return me(e, r, o, t, i, n)
                }
                )),
                ye(e, o, !1),
                n && e.u && ae("Patches").R(r, n, e.u, e.s)
            }
            return r.o
        }
        function me(e, t, n, r, o, i) {
            if (H(o)) {
                var a = he(e, o, i && t && 3 !== t.i && !Y(t.D, r) ? i.concat(r) : void 0);
                if (G(n, r, a),
                !H(a))
                    return;
                e.m = !1
            }
            if (K(o) && !ie(o)) {
                if (!e.h.F && e._ < 1)
                    return;
                he(e, o),
                t && t.A.l || ye(e, o)
            }
        }
        function ye(e, t, n) {
            void 0 === n && (n = !1),
            e.h.F && e.m && re(t, n)
        }
        function ge(e, t) {
            var n = e[je];
            return (n ? te(n) : e)[t]
        }
        function be(e, t) {
            if (t in e)
                for (var n = Object.getPrototypeOf(e); n; ) {
                    var r = Object.getOwnPropertyDescriptor(n, t);
                    if (r)
                        return r;
                    n = Object.getPrototypeOf(n)
                }
        }
        function we(e) {
            e.P || (e.P = !0,
            e.l && we(e.l))
        }
        function xe(e) {
            e.o || (e.o = ne(e.t))
        }
        function Se(e, t, n) {
            var r = J(t) ? ae("MapSet").N(t, n) : ee(t) ? ae("MapSet").T(t, n) : e.g ? function(e, t) {
                var n = Array.isArray(e)
                  , r = {
                    i: n ? 1 : 0,
                    A: t ? t.A : le(),
                    P: !1,
                    I: !1,
                    D: {},
                    l: t,
                    t: e,
                    k: null,
                    o: null,
                    j: null,
                    C: !1
                }
                  , o = r
                  , i = Fe;
                n && (o = [r],
                i = ze);
                var a = Proxy.revocable(o, i)
                  , u = a.revoke
                  , l = a.proxy;
                return r.k = l,
                r.j = u,
                l
            }(t, n) : ae("ES5").J(t, n);
            return (n ? n.A : le()).p.push(r),
            r
        }
        function Ee(e) {
            return H(e) || W(22, e),
            function e(t) {
                if (!K(t))
                    return t;
                var n, r = t[je], o = q(t);
                if (r) {
                    if (!r.P && (r.i < 4 || !ae("ES5").K(r)))
                        return r.t;
                    r.I = !0,
                    n = ke(t, o),
                    r.I = !1
                } else
                    n = ke(t, o);
                return Q(n, (function(t, o) {
                    r && X(r.t, t) === o || G(n, t, e(o))
                }
                )),
                3 === o ? new Set(n) : n
            }(e)
        }
        function ke(e, t) {
            switch (t) {
            case 2:
                return new Map(e);
            case 3:
                return Array.from(e)
            }
            return ne(e)
        }
        function Pe() {
            function e(e, t) {
                var n = o[e];
                return n ? n.enumerable = t : o[e] = n = {
                    configurable: !0,
                    enumerable: t,
                    get: function() {
                        var t = this[je];
                        return Fe.get(t, e)
                    },
                    set: function(t) {
                        var n = this[je];
                        Fe.set(n, e, t)
                    }
                },
                n
            }
            function t(e) {
                for (var t = e.length - 1; t >= 0; t--) {
                    var o = e[t][je];
                    if (!o.P)
                        switch (o.i) {
                        case 5:
                            r(o) && we(o);
                            break;
                        case 4:
                            n(o) && we(o)
                        }
                }
            }
            function n(e) {
                for (var t = e.t, n = e.k, r = De(n), o = r.length - 1; o >= 0; o--) {
                    var i = r[o];
                    if (i !== je) {
                        var a = t[i];
                        if (void 0 === a && !Y(t, i))
                            return !0;
                        var u = n[i]
                          , l = u && u[je];
                        if (l ? l.t !== a : !Z(u, a))
                            return !0
                    }
                }
                var s = !!t[je];
                return r.length !== De(t).length + (s ? 0 : 1)
            }
            function r(e) {
                var t = e.k;
                if (t.length !== e.t.length)
                    return !0;
                var n = Object.getOwnPropertyDescriptor(t, t.length - 1);
                return !(!n || n.get)
            }
            var o = {};
            ue("ES5", {
                J: function(t, n) {
                    var r = Array.isArray(t)
                      , o = function(t, n) {
                        if (t) {
                            for (var r = Array(n.length), o = 0; o < n.length; o++)
                                Object.defineProperty(r, "" + o, e(o, !0));
                            return r
                        }
                        var i = Ie(n);
                        delete i[je];
                        for (var a = De(i), u = 0; u < a.length; u++) {
                            var l = a[u];
                            i[l] = e(l, t || !!i[l].enumerable)
                        }
                        return Object.create(Object.getPrototypeOf(n), i)
                    }(r, t)
                      , i = {
                        i: r ? 5 : 4,
                        A: n ? n.A : le(),
                        P: !1,
                        I: !1,
                        D: {},
                        l: n,
                        t: t,
                        k: o,
                        o: null,
                        O: !1,
                        C: !1
                    };
                    return Object.defineProperty(o, je, {
                        value: i,
                        writable: !0
                    }),
                    o
                },
                S: function(e, n, o) {
                    o ? H(n) && n[je].A === e && t(e.p) : (e.u && function e(t) {
                        if (t && "object" == typeof t) {
                            var n = t[je];
                            if (n) {
                                var o = n.t
                                  , i = n.k
                                  , a = n.D
                                  , u = n.i;
                                if (4 === u)
                                    Q(i, (function(t) {
                                        t !== je && (void 0 !== o[t] || Y(o, t) ? a[t] || e(i[t]) : (a[t] = !0,
                                        we(n)))
                                    }
                                    )),
                                    Q(o, (function(e) {
                                        void 0 !== i[e] || Y(i, e) || (a[e] = !1,
                                        we(n))
                                    }
                                    ));
                                else if (5 === u) {
                                    if (r(n) && (we(n),
                                    a.length = !0),
                                    i.length < o.length)
                                        for (var l = i.length; l < o.length; l++)
                                            a[l] = !1;
                                    else
                                        for (var s = o.length; s < i.length; s++)
                                            a[s] = !0;
                                    for (var c = Math.min(i.length, o.length), f = 0; f < c; f++)
                                        void 0 === a[f] && e(i[f])
                                }
                            }
                        }
                    }(e.p[0]),
                    t(e.p))
                },
                K: function(e) {
                    return 4 === e.i ? n(e) : r(e)
                }
            })
        }
        var Ce, Oe, _e = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"), Te = "undefined" != typeof Map, Ae = "undefined" != typeof Set, Me = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect, Ne = _e ? Symbol.for("immer-nothing") : ((Ce = {})["immer-nothing"] = !0,
        Ce), Re = _e ? Symbol.for("immer-draftable") : "__$immer_draftable", je = _e ? Symbol.for("immer-state") : "__$immer_state", Le = ("undefined" != typeof Symbol && Symbol.iterator,
        "" + Object.prototype.constructor), De = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        }
        : Object.getOwnPropertyNames, Ie = Object.getOwnPropertyDescriptors || function(e) {
            var t = {};
            return De(e).forEach((function(n) {
                t[n] = Object.getOwnPropertyDescriptor(e, n)
            }
            )),
            t
        }
        , Ve = {}, Fe = {
            get: function(e, t) {
                if (t === je)
                    return e;
                var n = te(e);
                if (!Y(n, t))
                    return function(e, t, n) {
                        var r, o = be(t, n);
                        return o ? "value"in o ? o.value : null === (r = o.get) || void 0 === r ? void 0 : r.call(e.k) : void 0
                    }(e, n, t);
                var r = n[t];
                return e.I || !K(r) ? r : r === ge(e.t, t) ? (xe(e),
                e.o[t] = Se(e.A.h, r, e)) : r
            },
            has: function(e, t) {
                return t in te(e)
            },
            ownKeys: function(e) {
                return Reflect.ownKeys(te(e))
            },
            set: function(e, t, n) {
                var r = be(te(e), t);
                if (null == r ? void 0 : r.set)
                    return r.set.call(e.k, n),
                    !0;
                if (!e.P) {
                    var o = ge(te(e), t)
                      , i = null == o ? void 0 : o[je];
                    if (i && i.t === n)
                        return e.o[t] = n,
                        e.D[t] = !1,
                        !0;
                    if (Z(n, o) && (void 0 !== n || Y(e.t, t)))
                        return !0;
                    xe(e),
                    we(e)
                }
                return e.o[t] === n && "number" != typeof n && (void 0 !== n || t in e.o) || (e.o[t] = n,
                e.D[t] = !0,
                !0)
            },
            deleteProperty: function(e, t) {
                return void 0 !== ge(e.t, t) || t in e.t ? (e.D[t] = !1,
                xe(e),
                we(e)) : delete e.D[t],
                e.o && delete e.o[t],
                !0
            },
            getOwnPropertyDescriptor: function(e, t) {
                var n = te(e)
                  , r = Reflect.getOwnPropertyDescriptor(n, t);
                return r ? {
                    writable: !0,
                    configurable: 1 !== e.i || "length" !== t,
                    enumerable: r.enumerable,
                    value: n[t]
                } : r
            },
            defineProperty: function() {
                W(11)
            },
            getPrototypeOf: function(e) {
                return Object.getPrototypeOf(e.t)
            },
            setPrototypeOf: function() {
                W(12)
            }
        }, ze = {};
        Q(Fe, (function(e, t) {
            ze[e] = function() {
                return arguments[0] = arguments[0][0],
                t.apply(this, arguments)
            }
        }
        )),
        ze.deleteProperty = function(e, t) {
            return Fe.deleteProperty.call(this, e[0], t)
        }
        ,
        ze.set = function(e, t, n) {
            return Fe.set.call(this, e[0], t, n, e[0])
        }
        ;
        var Ue = function() {
            function e(e) {
                var t = this;
                this.g = Me,
                this.F = !0,
                this.produce = function(e, n, r) {
                    if ("function" == typeof e && "function" != typeof n) {
                        var o = n;
                        n = e;
                        var i = t;
                        return function(e) {
                            var t = this;
                            void 0 === e && (e = o);
                            for (var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
                                a[u - 1] = arguments[u];
                            return i.produce(e, (function(e) {
                                var r;
                                return (r = n).call.apply(r, [t, e].concat(a))
                            }
                            ))
                        }
                    }
                    var a;
                    if ("function" != typeof n && W(6),
                    void 0 !== r && "function" != typeof r && W(7),
                    K(e)) {
                        var u = de(t)
                          , l = Se(t, e, void 0)
                          , s = !0;
                        try {
                            a = n(l),
                            s = !1
                        } finally {
                            s ? ce(u) : fe(u)
                        }
                        return "undefined" != typeof Promise && a instanceof Promise ? a.then((function(e) {
                            return se(u, r),
                            ve(e, u)
                        }
                        ), (function(e) {
                            throw ce(u),
                            e
                        }
                        )) : (se(u, r),
                        ve(a, u))
                    }
                    if (!e || "object" != typeof e) {
                        if ((a = n(e)) === Ne)
                            return;
                        return void 0 === a && (a = e),
                        t.F && re(a, !0),
                        a
                    }
                    W(21, e)
                }
                ,
                this.produceWithPatches = function(e, n) {
                    return "function" == typeof e ? function(n) {
                        for (var r = arguments.length, o = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
                            o[i - 1] = arguments[i];
                        return t.produceWithPatches(n, (function(t) {
                            return e.apply(void 0, [t].concat(o))
                        }
                        ))
                    }
                    : [t.produce(e, n, (function(e, t) {
                        r = e,
                        o = t
                    }
                    )), r, o];
                    var r, o
                }
                ,
                "boolean" == typeof (null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies),
                "boolean" == typeof (null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze)
            }
            var t = e.prototype;
            return t.createDraft = function(e) {
                K(e) || W(8),
                H(e) && (e = Ee(e));
                var t = de(this)
                  , n = Se(this, e, void 0);
                return n[je].C = !0,
                fe(t),
                n
            }
            ,
            t.finishDraft = function(e, t) {
                var n = (e && e[je]).A;
                return se(n, t),
                ve(void 0, n)
            }
            ,
            t.setAutoFreeze = function(e) {
                this.F = e
            }
            ,
            t.setUseProxies = function(e) {
                e && !Me && W(20),
                this.g = e
            }
            ,
            t.applyPatches = function(e, t) {
                var n;
                for (n = t.length - 1; n >= 0; n--) {
                    var r = t[n];
                    if (0 === r.path.length && "replace" === r.op) {
                        e = r.value;
                        break
                    }
                }
                n > -1 && (t = t.slice(n + 1));
                var o = ae("Patches").$;
                return H(e) ? o(e, t) : this.produce(e, (function(e) {
                    return o(e, t)
                }
                ))
            }
            ,
            e
        }()
          , Be = new Ue
          , $e = Be.produce
          , We = (Be.produceWithPatches.bind(Be),
        Be.setAutoFreeze.bind(Be),
        Be.setUseProxies.bind(Be),
        Be.applyPatches.bind(Be),
        Be.createDraft.bind(Be),
        Be.finishDraft.bind(Be),
        $e);
        function He(e) {
            return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
        }
        var Ke = "function" === typeof Symbol && Symbol.observable || "@@observable"
          , Qe = function() {
            return Math.random().toString(36).substring(7).split("").join(".")
        }
          , qe = {
            INIT: "@@redux/INIT" + Qe(),
            REPLACE: "@@redux/REPLACE" + Qe(),
            PROBE_UNKNOWN_ACTION: function() {
                return "@@redux/PROBE_UNKNOWN_ACTION" + Qe()
            }
        };
        function Ye(e) {
            if ("object" !== typeof e || null === e)
                return !1;
            for (var t = e; null !== Object.getPrototypeOf(t); )
                t = Object.getPrototypeOf(t);
            return Object.getPrototypeOf(e) === t
        }
        function Xe(e, t, n) {
            var r;
            if ("function" === typeof t && "function" === typeof n || "function" === typeof n && "function" === typeof arguments[3])
                throw new Error(He(0));
            if ("function" === typeof t && "undefined" === typeof n && (n = t,
            t = void 0),
            "undefined" !== typeof n) {
                if ("function" !== typeof n)
                    throw new Error(He(1));
                return n(Xe)(e, t)
            }
            if ("function" !== typeof e)
                throw new Error(He(2));
            var o = e
              , i = t
              , a = []
              , u = a
              , l = !1;
            function s() {
                u === a && (u = a.slice())
            }
            function c() {
                if (l)
                    throw new Error(He(3));
                return i
            }
            function f(e) {
                if ("function" !== typeof e)
                    throw new Error(He(4));
                if (l)
                    throw new Error(He(5));
                var t = !0;
                return s(),
                u.push(e),
                function() {
                    if (t) {
                        if (l)
                            throw new Error(He(6));
                        t = !1,
                        s();
                        var n = u.indexOf(e);
                        u.splice(n, 1),
                        a = null
                    }
                }
            }
            function d(e) {
                if (!Ye(e))
                    throw new Error(He(7));
                if ("undefined" === typeof e.type)
                    throw new Error(He(8));
                if (l)
                    throw new Error(He(9));
                try {
                    l = !0,
                    i = o(i, e)
                } finally {
                    l = !1
                }
                for (var t = a = u, n = 0; n < t.length; n++) {
                    (0,
                    t[n])()
                }
                return e
            }
            function p(e) {
                if ("function" !== typeof e)
                    throw new Error(He(10));
                o = e,
                d({
                    type: qe.REPLACE
                })
            }
            function v() {
                var e, t = f;
                return (e = {
                    subscribe: function(e) {
                        if ("object" !== typeof e || null === e)
                            throw new Error(He(11));
                        function n() {
                            e.next && e.next(c())
                        }
                        return n(),
                        {
                            unsubscribe: t(n)
                        }
                    }
                })[Ke] = function() {
                    return this
                }
                ,
                e
            }
            return d({
                type: qe.INIT
            }),
            (r = {
                dispatch: d,
                subscribe: f,
                getState: c,
                replaceReducer: p
            })[Ke] = v,
            r
        }
        function Ge(e) {
            for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                var o = t[r];
                0,
                "function" === typeof e[o] && (n[o] = e[o])
            }
            var i, a = Object.keys(n);
            try {
                !function(e) {
                    Object.keys(e).forEach((function(t) {
                        var n = e[t];
                        if ("undefined" === typeof n(void 0, {
                            type: qe.INIT
                        }))
                            throw new Error(He(12));
                        if ("undefined" === typeof n(void 0, {
                            type: qe.PROBE_UNKNOWN_ACTION()
                        }))
                            throw new Error(He(13))
                    }
                    ))
                }(n)
            } catch (u) {
                i = u
            }
            return function(e, t) {
                if (void 0 === e && (e = {}),
                i)
                    throw i;
                for (var r = !1, o = {}, u = 0; u < a.length; u++) {
                    var l = a[u]
                      , s = n[l]
                      , c = e[l]
                      , f = s(c, t);
                    if ("undefined" === typeof f) {
                        t && t.type;
                        throw new Error(He(14))
                    }
                    o[l] = f,
                    r = r || f !== c
                }
                return (r = r || a.length !== Object.keys(e).length) ? o : e
            }
        }
        function Ze() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return 0 === t.length ? function(e) {
                return e
            }
            : 1 === t.length ? t[0] : t.reduce((function(e, t) {
                return function() {
                    return e(t.apply(void 0, arguments))
                }
            }
            ))
        }
        function Je() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return function(e) {
                return function() {
                    var n = e.apply(void 0, arguments)
                      , r = function() {
                        throw new Error(He(15))
                    }
                      , o = {
                        getState: n.getState,
                        dispatch: function() {
                            return r.apply(void 0, arguments)
                        }
                    }
                      , a = t.map((function(e) {
                        return e(o)
                    }
                    ));
                    return r = Ze.apply(void 0, a)(n.dispatch),
                    i(i({}, n), {}, {
                        dispatch: r
                    })
                }
            }
        }
        function et(e) {
            return function(t) {
                var n = t.dispatch
                  , r = t.getState;
                return function(t) {
                    return function(o) {
                        return "function" === typeof o ? o(n, r, e) : t(o)
                    }
                }
            }
        }
        var tt = et();
        tt.withExtraArgument = et;
        var nt = tt
          , rt = function() {
            var e = function(t, n) {
                return e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, t) {
                    e.__proto__ = t
                }
                || function(e, t) {
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                ,
                e(t, n)
            };
            return function(t, n) {
                if ("function" !== typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function r() {
                    this.constructor = t
                }
                e(t, n),
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype,
                new r)
            }
        }()
          , ot = function(e, t) {
            for (var n = 0, r = t.length, o = e.length; n < r; n++,
            o++)
                e[o] = t[n];
            return e
        }
          , it = Object.defineProperty
          , at = (Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols)
          , ut = Object.prototype.hasOwnProperty
          , lt = Object.prototype.propertyIsEnumerable
          , st = function(e, t, n) {
            return t in e ? it(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[t] = n
        }
          , ct = function(e, t) {
            for (var n in t || (t = {}))
                ut.call(t, n) && st(e, n, t[n]);
            if (at)
                for (var r = 0, o = at(t); r < o.length; r++) {
                    n = o[r];
                    lt.call(t, n) && st(e, n, t[n])
                }
            return e
        }
          , ft = "undefined" !== typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
            if (0 !== arguments.length)
                return "object" === typeof arguments[0] ? Ze : Ze.apply(null, arguments)
        }
        ;
        "undefined" !== typeof window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;
        function dt(e) {
            if ("object" !== typeof e || null === e)
                return !1;
            var t = Object.getPrototypeOf(e);
            if (null === t)
                return !0;
            for (var n = t; null !== Object.getPrototypeOf(n); )
                n = Object.getPrototypeOf(n);
            return t === n
        }
        var pt = function(e) {
            function t() {
                for (var n = [], r = 0; r < arguments.length; r++)
                    n[r] = arguments[r];
                var o = e.apply(this, n) || this;
                return Object.setPrototypeOf(o, t.prototype),
                o
            }
            return rt(t, e),
            Object.defineProperty(t, Symbol.species, {
                get: function() {
                    return t
                },
                enumerable: !1,
                configurable: !0
            }),
            t.prototype.concat = function() {
                for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                return e.prototype.concat.apply(this, t)
            }
            ,
            t.prototype.prepend = function() {
                for (var e = [], n = 0; n < arguments.length; n++)
                    e[n] = arguments[n];
                return 1 === e.length && Array.isArray(e[0]) ? new (t.bind.apply(t, ot([void 0], e[0].concat(this)))) : new (t.bind.apply(t, ot([void 0], e.concat(this))))
            }
            ,
            t
        }(Array);
        function vt() {
            return function(e) {
                return function(e) {
                    void 0 === e && (e = {});
                    var t = e.thunk
                      , n = void 0 === t || t
                      , r = (e.immutableCheck,
                    e.serializableCheck,
                    new pt);
                    n && (!function(e) {
                        return "boolean" === typeof e
                    }(n) ? r.push(nt.withExtraArgument(n.extraArgument)) : r.push(nt));
                    0;
                    return r
                }(e)
            }
        }
        function ht(e, t) {
            function n() {
                for (var n = [], r = 0; r < arguments.length; r++)
                    n[r] = arguments[r];
                if (t) {
                    var o = t.apply(void 0, n);
                    if (!o)
                        throw new Error("prepareAction did not return an object");
                    return ct(ct({
                        type: e,
                        payload: o.payload
                    }, "meta"in o && {
                        meta: o.meta
                    }), "error"in o && {
                        error: o.error
                    })
                }
                return {
                    type: e,
                    payload: n[0]
                }
            }
            return n.toString = function() {
                return "" + e
            }
            ,
            n.type = e,
            n.match = function(t) {
                return t.type === e
            }
            ,
            n
        }
        function mt(e) {
            var t, n = {}, r = [], o = {
                addCase: function(e, t) {
                    var r = "string" === typeof e ? e : e.type;
                    if (r in n)
                        throw new Error("addCase cannot be called with two reducers for the same action type");
                    return n[r] = t,
                    o
                },
                addMatcher: function(e, t) {
                    return r.push({
                        matcher: e,
                        reducer: t
                    }),
                    o
                },
                addDefaultCase: function(e) {
                    return t = e,
                    o
                }
            };
            return e(o),
            [n, r, t]
        }
        function yt(e) {
            var t = e.name;
            if (!t)
                throw new Error("`name` is a required option for createSlice");
            var n, r = "function" == typeof e.initialState ? e.initialState : We(e.initialState, (function() {}
            )), o = e.reducers || {}, i = Object.keys(o), a = {}, u = {}, l = {};
            function s() {
                var t = "function" === typeof e.extraReducers ? mt(e.extraReducers) : [e.extraReducers]
                  , n = t[0]
                  , o = void 0 === n ? {} : n
                  , i = t[1]
                  , a = void 0 === i ? [] : i
                  , l = t[2]
                  , s = void 0 === l ? void 0 : l
                  , c = ct(ct({}, o), u);
                return function(e, t, n, r) {
                    void 0 === n && (n = []);
                    var o, i = "function" === typeof t ? mt(t) : [t, n, r], a = i[0], u = i[1], l = i[2];
                    if (function(e) {
                        return "function" === typeof e
                    }(e))
                        o = function() {
                            return We(e(), (function() {}
                            ))
                        }
                        ;
                    else {
                        var s = We(e, (function() {}
                        ));
                        o = function() {
                            return s
                        }
                    }
                    function c(e, t) {
                        void 0 === e && (e = o());
                        var n = ot([a[t.type]], u.filter((function(e) {
                            return (0,
                            e.matcher)(t)
                        }
                        )).map((function(e) {
                            return e.reducer
                        }
                        )));
                        return 0 === n.filter((function(e) {
                            return !!e
                        }
                        )).length && (n = [l]),
                        n.reduce((function(e, n) {
                            if (n) {
                                var r;
                                if (H(e))
                                    return "undefined" === typeof (r = n(e, t)) ? e : r;
                                if (K(e))
                                    return We(e, (function(e) {
                                        return n(e, t)
                                    }
                                    ));
                                if ("undefined" === typeof (r = n(e, t))) {
                                    if (null === e)
                                        return e;
                                    throw Error("A case reducer on a non-draftable value must not return undefined")
                                }
                                return r
                            }
                            return e
                        }
                        ), e)
                    }
                    return c.getInitialState = o,
                    c
                }(r, c, a, s)
            }
            return i.forEach((function(e) {
                var n, r, i = o[e], s = t + "/" + e;
                "reducer"in i ? (n = i.reducer,
                r = i.prepare) : n = i,
                a[e] = n,
                u[s] = n,
                l[e] = r ? ht(s, r) : ht(s)
            }
            )),
            {
                name: t,
                reducer: function(e, t) {
                    return n || (n = s()),
                    n(e, t)
                },
                actions: l,
                caseReducers: a,
                getInitialState: function() {
                    return n || (n = s()),
                    n.getInitialState()
                }
            }
        }
        Pe();
        var gt = yt({
            name: "timer",
            initialState: {
                activeTimer: y.POMODORO.NAME,
                timerMinutes: y.POMODORO.MINUTES,
                timerSeconds: 0,
                isTimerNotificationVisible: !1,
                pomodoroMinutes: y.POMODORO.MINUTES,
                shortBreakMinutes: y.SHORT_BREAK.MINUTES,
                longBreakMinutes: y.LONG_BREAK.MINUTES,
                totalMinutesActiveTimer: y.POMODORO.MINUTES,
                timerStatus: b,
                selectedFont: P.KUMBH_SANS,
                selectedColor: k.ORANGE_RED
            },
            reducers: {
                changeTimerValues: function(e) {
                    0 === e.timerSeconds && (e.timerMinutes -= 1),
                    e.timerSeconds = 0 === e.timerSeconds ? 59 : e.timerSeconds - 1
                },
                changeActiveTimer: function(e, t) {
                    var n = t.payload;
                    e.timerStatus !== g ? (e.activeTimer = n,
                    e.timerStatus = b) : e.isTimerNotificationVisible = !0
                },
                updateActiveTimerTotalMinutes: function(e) {
                    if (e.timerStatus !== g) {
                        var t = 0;
                        e.activeTimer === y.POMODORO.NAME && (t = e.pomodoroMinutes),
                        e.activeTimer === y.SHORT_BREAK.NAME && (t = e.shortBreakMinutes),
                        e.activeTimer === y.LONG_BREAK.NAME && (t = e.longBreakMinutes),
                        e.totalMinutesActiveTimer = e.timerMinutes = t,
                        e.timerSeconds = 0,
                        e.timerStatus = b
                    }
                },
                changeTimerStatus: function(e, t) {
                    var n = t.payload;
                    e.timerStatus = n
                },
                resetTimerNotificationVisibility: function(e) {
                    e.isTimerNotificationVisible = !1
                },
                updateSettings: function(e, t) {
                    var n = t.payload
                      , r = n.newPomodoroMinutes
                      , o = n.newShortBreakMinutes
                      , i = n.newLongBreakMinutes
                      , a = n.newSelectedFont
                      , u = n.newSelectedColor;
                    e.pomodoroMinutes = r,
                    e.shortBreakMinutes = o,
                    e.longBreakMinutes = i,
                    e.selectedFont = a,
                    e.selectedColor = u
                }
            }
        })
          , bt = gt.actions
          , wt = bt.changeTimerValues
          , xt = bt.changeActiveTimer
          , St = bt.changeTimerStatus
          , Et = bt.resetTimerNotificationVisibility
          , kt = bt.updateActiveTimerTotalMinutes
          , Pt = bt.updateSettings
          , Ct = gt.reducer
          , Ot = "ProgressBar_progressBar__032i-"
          , _t = function(e) {
            var t = e.percentage;
            return (0,
            d.jsx)("svg", {
                className: Ot,
                children: (0,
                d.jsx)("circle", {
                    cx: "50%",
                    cy: "50%",
                    r: "45%",
                    fill: "none",
                    style: {
                        strokeDashoffset: "calc(var(--dash-array) - (var(--dash-array) * ".concat(t, ") / -100)")
                    }
                })
            })
        }
          , Tt = "Timer_timerContainer__BQjJG"
          , At = "Timer_timer__R8a2O"
          , Mt = "Timer_timerValue__1-+Ex"
          , Nt = function() {
            var t = $((function(e) {
                return e.timer
            }
            ))
              , n = t.timerMinutes
              , r = t.timerSeconds
              , o = t.timerStatus
              , i = t.totalMinutesActiveTimer
              , a = B()
              , u = (0,
            e.useCallback)((function() {
                return o === b ? x : o === g ? S : o === w ? E : void 0
            }
            ), [o]);
            (0,
            e.useEffect)((function() {
                if (o === g) {
                    if (0 === n && 0 === r)
                        return void a(St(w));
                    var e = setInterval((function() {
                        a(wt())
                    }
                    ), 1e3);
                    return function() {
                        clearInterval(e)
                    }
                }
            }
            ), [n, r, o, a]);
            var l = (60 * n + r) / (60 * i) * 100;
            return (0,
            d.jsx)("div", {
                className: Tt,
                children: (0,
                d.jsxs)("div", {
                    className: At,
                    children: [(0,
                    d.jsx)(_t, {
                        percentage: 0 === l ? 100 : l
                    }), (0,
                    d.jsxs)("h1", {
                        className: Mt,
                        children: [n.toString().padStart(2, "0"), ":", r.toString().padStart(2, "0")]
                    }), (0,
                    d.jsx)(p, {
                        onClick: function() {
                            o === g && a(St(b)),
                            o === b && a(St(g)),
                            o === w && (a(kt()),
                            a(St(g)))
                        }
                        .bind(null),
                        children: (0,
                        d.jsx)("h3", {
                            children: u()
                        })
                    })]
                })
            })
        };
        function Rt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function jt(e, t) {
            if (e) {
                if ("string" === typeof e)
                    return Rt(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Rt(e, t) : void 0
            }
        }
        function Lt(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, o, i = [], a = !0, u = !1;
                    try {
                        for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value),
                        !t || i.length !== t); a = !0)
                            ;
                    } catch (l) {
                        u = !0,
                        o = l
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (u)
                                throw o
                        }
                    }
                    return i
                }
            }(e, t) || jt(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var Dt = "TimerSwitch_timerSwitch__v8ORr"
          , It = "TimerSwitch_timerSwitchActiveBackground__LKtgF"
          , Vt = function() {
            var e = $((function(e) {
                return e.timer
            }
            )).activeTimer
              , t = B()
              , n = Object.entries(y)
              , r = n.findIndex((function(t) {
                var n = Lt(t, 2);
                n[0];
                return n[1].NAME === e
            }
            ))
              , o = function(e) {
                t(xt(e)),
                t(kt())
            };
            return (0,
            d.jsxs)("nav", {
                className: Dt,
                children: [(0,
                d.jsx)("div", {
                    className: It,
                    style: {
                        width: "calc(100% / ".concat(n.length, ")"),
                        transform: "translate(calc(100% * ".concat(r, "), -50%)")
                    }
                }), n.map((function(t) {
                    var n = Lt(t, 2)
                      , r = n[0]
                      , i = n[1];
                    return (0,
                    d.jsx)(p, {
                        active: i.NAME === e,
                        secondary: !0,
                        onClick: o.bind(null, i.NAME),
                        children: i.NAME
                    }, r)
                }
                ))]
            })
        }
          , Ft = function(e, t) {
            return Ft = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }
            ,
            Ft(e, t)
        };
        function zt(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function n() {
                this.constructor = e
            }
            Ft(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        var Ut = function() {
            return Ut = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ,
            Ut.apply(this, arguments)
        };
        function Bt(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        }
        Object.create;
        function $t(e) {
            var t = "function" === typeof Symbol && Symbol.iterator
              , n = t && e[t]
              , r = 0;
            if (n)
                return n.call(e);
            if (e && "number" === typeof e.length)
                return {
                    next: function() {
                        return e && r >= e.length && (e = void 0),
                        {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
        function Wt(e, t) {
            var n = "function" === typeof Symbol && e[Symbol.iterator];
            if (!n)
                return e;
            var r, o, i = n.call(e), a = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
                    a.push(r.value)
            } catch (u) {
                o = {
                    error: u
                }
            } finally {
                try {
                    r && !r.done && (n = i.return) && n.call(i)
                } finally {
                    if (o)
                        throw o.error
                }
            }
            return a
        }
        function Ht(e, t, n) {
            if (n || 2 === arguments.length)
                for (var r, o = 0, i = t.length; o < i; o++)
                    !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)),
                    r[o] = t[o]);
            return e.concat(r || Array.prototype.slice.call(t))
        }
        Object.create;
        var Kt = function(e) {
            return {
                isEnabled: function(t) {
                    return e.some((function(e) {
                        return !!t[e]
                    }
                    ))
                }
            }
        }
          , Qt = {
            measureLayout: Kt(["layout", "layoutId", "drag"]),
            animation: Kt(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
            exit: Kt(["exit"]),
            drag: Kt(["drag", "dragControls"]),
            focus: Kt(["whileFocus"]),
            hover: Kt(["whileHover", "onHoverStart", "onHoverEnd"]),
            tap: Kt(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
            pan: Kt(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
            inView: Kt(["whileInView", "onViewportEnter", "onViewportLeave"])
        };
        var qt = (0,
        e.createContext)({
            strict: !1
        })
          , Yt = Object.keys(Qt)
          , Xt = Yt.length;
        var Gt = (0,
        e.createContext)({
            transformPagePoint: function(e) {
                return e
            },
            isStatic: !1
        })
          , Zt = (0,
        e.createContext)({});
        var Jt = (0,
        e.createContext)(null)
          , en = "undefined" !== typeof window
          , tn = en ? e.useLayoutEffect : e.useEffect;
        function nn(t, n, r, o) {
            var i = (0,
            e.useContext)(qt)
              , a = (0,
            e.useContext)(Zt).visualElement
              , u = (0,
            e.useContext)(Jt)
              , l = (0,
            e.useRef)(void 0);
            o || (o = i.renderer),
            !l.current && o && (l.current = o(t, {
                visualState: n,
                parent: a,
                props: r,
                presenceId: null === u || void 0 === u ? void 0 : u.id,
                blockInitialAnimation: !1 === (null === u || void 0 === u ? void 0 : u.initial)
            }));
            var s = l.current;
            return tn((function() {
                null === s || void 0 === s || s.syncRender()
            }
            )),
            (0,
            e.useEffect)((function() {
                var e;
                null === (e = null === s || void 0 === s ? void 0 : s.animationState) || void 0 === e || e.animateChanges()
            }
            )),
            tn((function() {
                return function() {
                    return null === s || void 0 === s ? void 0 : s.notifyUnmount()
                }
            }
            ), []),
            s
        }
        function rn(e) {
            return "object" === typeof e && Object.prototype.hasOwnProperty.call(e, "current")
        }
        function on(e) {
            return Array.isArray(e)
        }
        function an(e) {
            return "string" === typeof e || on(e)
        }
        function un(e, t, n, r, o) {
            var i;
            return void 0 === r && (r = {}),
            void 0 === o && (o = {}),
            "function" === typeof t && (t = t(null !== n && void 0 !== n ? n : e.custom, r, o)),
            "string" === typeof t && (t = null === (i = e.variants) || void 0 === i ? void 0 : i[t]),
            "function" === typeof t && (t = t(null !== n && void 0 !== n ? n : e.custom, r, o)),
            t
        }
        function ln(e, t, n) {
            var r = e.getProps();
            return un(r, t, null !== n && void 0 !== n ? n : r.custom, function(e) {
                var t = {};
                return e.forEachValue((function(e, n) {
                    return t[n] = e.get()
                }
                )),
                t
            }(e), function(e) {
                var t = {};
                return e.forEachValue((function(e, n) {
                    return t[n] = e.getVelocity()
                }
                )),
                t
            }(e))
        }
        function sn(e) {
            var t;
            return "function" === typeof (null === (t = e.animate) || void 0 === t ? void 0 : t.start) || an(e.initial) || an(e.animate) || an(e.whileHover) || an(e.whileDrag) || an(e.whileTap) || an(e.whileFocus) || an(e.exit)
        }
        function cn(e) {
            return Boolean(sn(e) || e.variants)
        }
        function fn(t) {
            var n = function(e, t) {
                if (sn(e)) {
                    var n = e.initial
                      , r = e.animate;
                    return {
                        initial: !1 === n || an(n) ? n : void 0,
                        animate: an(r) ? r : void 0
                    }
                }
                return !1 !== e.inherit ? t : {}
            }(t, (0,
            e.useContext)(Zt))
              , r = n.initial
              , o = n.animate;
            return (0,
            e.useMemo)((function() {
                return {
                    initial: r,
                    animate: o
                }
            }
            ), [dn(r), dn(o)])
        }
        function dn(e) {
            return Array.isArray(e) ? e.join(" ") : e
        }
        function pn(t) {
            var n = (0,
            e.useRef)(null);
            return null === n.current && (n.current = t()),
            n.current
        }
        var vn = 1 / 60 * 1e3
          , hn = "undefined" !== typeof performance ? function() {
            return performance.now()
        }
        : function() {
            return Date.now()
        }
          , mn = "undefined" !== typeof window ? function(e) {
            return window.requestAnimationFrame(e)
        }
        : function(e) {
            return setTimeout((function() {
                return e(hn())
            }
            ), vn)
        }
        ;
        var yn = !0
          , gn = !1
          , bn = !1
          , wn = {
            delta: 0,
            timestamp: 0
        }
          , xn = ["read", "update", "preRender", "render", "postRender"]
          , Sn = xn.reduce((function(e, t) {
            return e[t] = function(e) {
                var t = []
                  , n = []
                  , r = 0
                  , o = !1
                  , i = !1
                  , a = new WeakSet
                  , u = {
                    schedule: function(e) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && o
                          , u = i ? t : n;
                        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && a.add(e),
                        -1 === u.indexOf(e) && (u.push(e),
                        i && o && (r = t.length)),
                        e
                    },
                    cancel: function(e) {
                        var t = n.indexOf(e);
                        -1 !== t && n.splice(t, 1),
                        a.delete(e)
                    },
                    process: function(l) {
                        if (o)
                            i = !0;
                        else {
                            o = !0;
                            var s = [n, t];
                            if (t = s[0],
                            (n = s[1]).length = 0,
                            r = t.length)
                                for (var c = 0; c < r; c++) {
                                    var f = t[c];
                                    f(l),
                                    a.has(f) && (u.schedule(f),
                                    e())
                                }
                            o = !1,
                            i && (i = !1,
                            u.process(l))
                        }
                    }
                };
                return u
            }((function() {
                return gn = !0
            }
            )),
            e
        }
        ), {})
          , En = xn.reduce((function(e, t) {
            var n = Sn[t];
            return e[t] = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return gn || _n(),
                n.schedule(e, t, r)
            }
            ,
            e
        }
        ), {})
          , kn = xn.reduce((function(e, t) {
            return e[t] = Sn[t].cancel,
            e
        }
        ), {})
          , Pn = xn.reduce((function(e, t) {
            return e[t] = function() {
                return Sn[t].process(wn)
            }
            ,
            e
        }
        ), {})
          , Cn = function(e) {
            return Sn[e].process(wn)
        }
          , On = function e(t) {
            gn = !1,
            wn.delta = yn ? vn : Math.max(Math.min(t - wn.timestamp, 40), 1),
            wn.timestamp = t,
            bn = !0,
            xn.forEach(Cn),
            bn = !1,
            gn && (yn = !1,
            mn(e))
        }
          , _n = function() {
            gn = !0,
            yn = !0,
            bn || mn(On)
        }
          , Tn = function() {
            return wn
        }
          , An = En
          , Mn = function(e, t, n) {
            return -n * e + n * t + e
        };
        function Nn(e, t) {
            return t ? e * (1e3 / t) : 0
        }
        function Rn(e, t) {
            -1 === e.indexOf(t) && e.push(t)
        }
        function jn(e, t) {
            var n = e.indexOf(t);
            n > -1 && e.splice(n, 1)
        }
        var Ln = function() {
            function e() {
                this.subscriptions = []
            }
            return e.prototype.add = function(e) {
                var t = this;
                return Rn(this.subscriptions, e),
                function() {
                    return jn(t.subscriptions, e)
                }
            }
            ,
            e.prototype.notify = function(e, t, n) {
                var r = this.subscriptions.length;
                if (r)
                    if (1 === r)
                        this.subscriptions[0](e, t, n);
                    else
                        for (var o = 0; o < r; o++) {
                            var i = this.subscriptions[o];
                            i && i(e, t, n)
                        }
            }
            ,
            e.prototype.getSize = function() {
                return this.subscriptions.length
            }
            ,
            e.prototype.clear = function() {
                this.subscriptions.length = 0
            }
            ,
            e
        }()
          , Dn = function() {
            function e(e) {
                var t, n = this;
                this.timeDelta = 0,
                this.lastUpdated = 0,
                this.updateSubscribers = new Ln,
                this.velocityUpdateSubscribers = new Ln,
                this.renderSubscribers = new Ln,
                this.canTrackVelocity = !1,
                this.updateAndNotify = function(e, t) {
                    void 0 === t && (t = !0),
                    n.prev = n.current,
                    n.current = e;
                    var r = Tn()
                      , o = r.delta
                      , i = r.timestamp;
                    n.lastUpdated !== i && (n.timeDelta = o,
                    n.lastUpdated = i,
                    An.postRender(n.scheduleVelocityCheck)),
                    n.prev !== n.current && n.updateSubscribers.notify(n.current),
                    n.velocityUpdateSubscribers.getSize() && n.velocityUpdateSubscribers.notify(n.getVelocity()),
                    t && n.renderSubscribers.notify(n.current)
                }
                ,
                this.scheduleVelocityCheck = function() {
                    return An.postRender(n.velocityCheck)
                }
                ,
                this.velocityCheck = function(e) {
                    e.timestamp !== n.lastUpdated && (n.prev = n.current,
                    n.velocityUpdateSubscribers.notify(n.getVelocity()))
                }
                ,
                this.hasAnimated = !1,
                this.prev = this.current = e,
                this.canTrackVelocity = (t = this.current,
                !isNaN(parseFloat(t)))
            }
            return e.prototype.onChange = function(e) {
                return this.updateSubscribers.add(e)
            }
            ,
            e.prototype.clearListeners = function() {
                this.updateSubscribers.clear()
            }
            ,
            e.prototype.onRenderRequest = function(e) {
                return e(this.get()),
                this.renderSubscribers.add(e)
            }
            ,
            e.prototype.attach = function(e) {
                this.passiveEffect = e
            }
            ,
            e.prototype.set = function(e, t) {
                void 0 === t && (t = !0),
                t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t)
            }
            ,
            e.prototype.get = function() {
                return this.current
            }
            ,
            e.prototype.getPrevious = function() {
                return this.prev
            }
            ,
            e.prototype.getVelocity = function() {
                return this.canTrackVelocity ? Nn(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
            }
            ,
            e.prototype.start = function(e) {
                var t = this;
                return this.stop(),
                new Promise((function(n) {
                    t.hasAnimated = !0,
                    t.stopAnimation = e(n)
                }
                )).then((function() {
                    return t.clearAnimation()
                }
                ))
            }
            ,
            e.prototype.stop = function() {
                this.stopAnimation && this.stopAnimation(),
                this.clearAnimation()
            }
            ,
            e.prototype.isAnimating = function() {
                return !!this.stopAnimation
            }
            ,
            e.prototype.clearAnimation = function() {
                this.stopAnimation = null
            }
            ,
            e.prototype.destroy = function() {
                this.updateSubscribers.clear(),
                this.renderSubscribers.clear(),
                this.stop()
            }
            ,
            e
        }();
        function In(e) {
            return new Dn(e)
        }
        var Vn = function(e) {
            return Boolean(null !== e && "object" === typeof e && e.getVelocity)
        };
        function Fn(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
            }
            return n
        }
        Object.create;
        Object.create;
        var zn = function(e, t, n) {
            return Math.min(Math.max(n, e), t)
        }
          , Un = .001;
        function Bn(e) {
            var t, n, r = e.duration, o = void 0 === r ? 800 : r, i = e.bounce, a = void 0 === i ? .25 : i, u = e.velocity, l = void 0 === u ? 0 : u, s = e.mass, c = void 0 === s ? 1 : s, f = 1 - a;
            f = zn(.05, 1, f),
            o = zn(.01, 10, o / 1e3),
            f < 1 ? (t = function(e) {
                var t = e * f
                  , n = t * o
                  , r = t - l
                  , i = $n(e, f)
                  , a = Math.exp(-n);
                return Un - r / i * a
            }
            ,
            n = function(e) {
                var n = e * f * o
                  , r = n * l + l
                  , i = Math.pow(f, 2) * Math.pow(e, 2) * o
                  , a = Math.exp(-n)
                  , u = $n(Math.pow(e, 2), f);
                return (-t(e) + Un > 0 ? -1 : 1) * ((r - i) * a) / u
            }
            ) : (t = function(e) {
                return Math.exp(-e * o) * ((e - l) * o + 1) - .001
            }
            ,
            n = function(e) {
                return Math.exp(-e * o) * (o * o * (l - e))
            }
            );
            var d = function(e, t, n) {
                for (var r = n, o = 1; o < 12; o++)
                    r -= e(r) / t(r);
                return r
            }(t, n, 5 / o);
            if (o *= 1e3,
            isNaN(d))
                return {
                    stiffness: 100,
                    damping: 10,
                    duration: o
                };
            var p = Math.pow(d, 2) * c;
            return {
                stiffness: p,
                damping: 2 * f * Math.sqrt(c * p),
                duration: o
            }
        }
        function $n(e, t) {
            return e * Math.sqrt(1 - t * t)
        }
        var Wn = ["duration", "bounce"]
          , Hn = ["stiffness", "damping", "mass"];
        function Kn(e, t) {
            return t.some((function(t) {
                return void 0 !== e[t]
            }
            ))
        }
        function Qn(e) {
            var t = e.from
              , n = void 0 === t ? 0 : t
              , r = e.to
              , o = void 0 === r ? 1 : r
              , i = e.restSpeed
              , a = void 0 === i ? 2 : i
              , u = e.restDelta
              , l = Fn(e, ["from", "to", "restSpeed", "restDelta"])
              , s = {
                done: !1,
                value: n
            }
              , c = function(e) {
                var t = Object.assign({
                    velocity: 0,
                    stiffness: 100,
                    damping: 10,
                    mass: 1,
                    isResolvedFromDuration: !1
                }, e);
                if (!Kn(e, Hn) && Kn(e, Wn)) {
                    var n = Bn(e);
                    (t = Object.assign(Object.assign(Object.assign({}, t), n), {
                        velocity: 0,
                        mass: 1
                    })).isResolvedFromDuration = !0
                }
                return t
            }(l)
              , f = c.stiffness
              , d = c.damping
              , p = c.mass
              , v = c.velocity
              , h = c.duration
              , m = c.isResolvedFromDuration
              , y = qn
              , g = qn;
            function b() {
                var e = v ? -v / 1e3 : 0
                  , t = o - n
                  , r = d / (2 * Math.sqrt(f * p))
                  , i = Math.sqrt(f / p) / 1e3;
                if (void 0 === u && (u = Math.min(Math.abs(o - n) / 100, .4)),
                r < 1) {
                    var a = $n(i, r);
                    y = function(n) {
                        var u = Math.exp(-r * i * n);
                        return o - u * ((e + r * i * t) / a * Math.sin(a * n) + t * Math.cos(a * n))
                    }
                    ,
                    g = function(n) {
                        var o = Math.exp(-r * i * n);
                        return r * i * o * (Math.sin(a * n) * (e + r * i * t) / a + t * Math.cos(a * n)) - o * (Math.cos(a * n) * (e + r * i * t) - a * t * Math.sin(a * n))
                    }
                } else if (1 === r)
                    y = function(n) {
                        return o - Math.exp(-i * n) * (t + (e + i * t) * n)
                    }
                    ;
                else {
                    var l = i * Math.sqrt(r * r - 1);
                    y = function(n) {
                        var a = Math.exp(-r * i * n)
                          , u = Math.min(l * n, 300);
                        return o - a * ((e + r * i * t) * Math.sinh(u) + l * t * Math.cosh(u)) / l
                    }
                }
            }
            return b(),
            {
                next: function(e) {
                    var t = y(e);
                    if (m)
                        s.done = e >= h;
                    else {
                        var n = 1e3 * g(e)
                          , r = Math.abs(n) <= a
                          , i = Math.abs(o - t) <= u;
                        s.done = r && i
                    }
                    return s.value = s.done ? o : t,
                    s
                },
                flipTarget: function() {
                    v = -v;
                    var e = [o, n];
                    n = e[0],
                    o = e[1],
                    b()
                }
            }
        }
        Qn.needsInterpolation = function(e, t) {
            return "string" === typeof e || "string" === typeof t
        }
        ;
        var qn = function(e) {
            return 0
        }
          , Yn = function(e, t, n) {
            var r = t - e;
            return 0 === r ? 1 : (n - e) / r
        }
          , Xn = function(e, t) {
            return function(n) {
                return Math.max(Math.min(n, t), e)
            }
        }
          , Gn = function(e) {
            return e % 1 ? Number(e.toFixed(5)) : e
        }
          , Zn = /(-)?([\d]*\.?[\d])+/g
          , Jn = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi
          , er = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
        function tr(e) {
            return "string" === typeof e
        }
        var nr = {
            test: function(e) {
                return "number" === typeof e
            },
            parse: parseFloat,
            transform: function(e) {
                return e
            }
        }
          , rr = Object.assign(Object.assign({}, nr), {
            transform: Xn(0, 1)
        })
          , or = Object.assign(Object.assign({}, nr), {
            default: 1
        })
          , ir = function(e, t) {
            return function(n) {
                return Boolean(tr(n) && er.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
            }
        }
          , ar = function(e, t, n) {
            return function(o) {
                var i;
                if (!tr(o))
                    return o;
                var a = Lt(o.match(Zn), 4)
                  , u = a[0]
                  , l = a[1]
                  , s = a[2]
                  , c = a[3];
                return r(i = {}, e, parseFloat(u)),
                r(i, t, parseFloat(l)),
                r(i, n, parseFloat(s)),
                r(i, "alpha", void 0 !== c ? parseFloat(c) : 1),
                i
            }
        }
          , ur = Xn(0, 255)
          , lr = Object.assign(Object.assign({}, nr), {
            transform: function(e) {
                return Math.round(ur(e))
            }
        })
          , sr = {
            test: ir("rgb", "red"),
            parse: ar("red", "green", "blue"),
            transform: function(e) {
                var t = e.red
                  , n = e.green
                  , r = e.blue
                  , o = e.alpha
                  , i = void 0 === o ? 1 : o;
                return "rgba(" + lr.transform(t) + ", " + lr.transform(n) + ", " + lr.transform(r) + ", " + Gn(rr.transform(i)) + ")"
            }
        };
        var cr = {
            test: ir("#"),
            parse: function(e) {
                var t = ""
                  , n = ""
                  , r = ""
                  , o = "";
                return e.length > 5 ? (t = e.substr(1, 2),
                n = e.substr(3, 2),
                r = e.substr(5, 2),
                o = e.substr(7, 2)) : (t = e.substr(1, 1),
                n = e.substr(2, 1),
                r = e.substr(3, 1),
                o = e.substr(4, 1),
                t += t,
                n += n,
                r += r,
                o += o),
                {
                    red: parseInt(t, 16),
                    green: parseInt(n, 16),
                    blue: parseInt(r, 16),
                    alpha: o ? parseInt(o, 16) / 255 : 1
                }
            },
            transform: sr.transform
        }
          , fr = function(e) {
            return {
                test: function(t) {
                    return tr(t) && t.endsWith(e) && 1 === t.split(" ").length
                },
                parse: parseFloat,
                transform: function(t) {
                    return "".concat(t).concat(e)
                }
            }
        }
          , dr = fr("deg")
          , pr = fr("%")
          , vr = fr("px")
          , hr = fr("vh")
          , mr = fr("vw")
          , yr = Object.assign(Object.assign({}, pr), {
            parse: function(e) {
                return pr.parse(e) / 100
            },
            transform: function(e) {
                return pr.transform(100 * e)
            }
        })
          , gr = {
            test: ir("hsl", "hue"),
            parse: ar("hue", "saturation", "lightness"),
            transform: function(e) {
                var t = e.hue
                  , n = e.saturation
                  , r = e.lightness
                  , o = e.alpha
                  , i = void 0 === o ? 1 : o;
                return "hsla(" + Math.round(t) + ", " + pr.transform(Gn(n)) + ", " + pr.transform(Gn(r)) + ", " + Gn(rr.transform(i)) + ")"
            }
        };
        function br(e, t, n) {
            return n < 0 && (n += 1),
            n > 1 && (n -= 1),
            n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
        }
        function wr(e) {
            var t = e.hue
              , n = e.saturation
              , r = e.lightness
              , o = e.alpha;
            t /= 360,
            r /= 100;
            var i = 0
              , a = 0
              , u = 0;
            if (n /= 100) {
                var l = r < .5 ? r * (1 + n) : r + n - r * n
                  , s = 2 * r - l;
                i = br(s, l, t + 1 / 3),
                a = br(s, l, t),
                u = br(s, l, t - 1 / 3)
            } else
                i = a = u = r;
            return {
                red: Math.round(255 * i),
                green: Math.round(255 * a),
                blue: Math.round(255 * u),
                alpha: o
            }
        }
        var xr = function(e, t, n) {
            var r = e * e
              , o = t * t;
            return Math.sqrt(Math.max(0, n * (o - r) + r))
        }
          , Sr = [cr, sr, gr]
          , Er = function(e) {
            return Sr.find((function(t) {
                return t.test(e)
            }
            ))
        }
          , kr = function(e) {
            return "'".concat(e, "' is not an animatable color. Use the equivalent color code instead.")
        }
          , Pr = function(e, t) {
            var n = Er(e)
              , r = Er(t);
            kr(e),
            kr(t);
            var o = n.parse(e)
              , i = r.parse(t);
            n === gr && (o = wr(o),
            n = sr),
            r === gr && (i = wr(i),
            r = sr);
            var a = Object.assign({}, o);
            return function(e) {
                for (var t in a)
                    "alpha" !== t && (a[t] = xr(o[t], i[t], e));
                return a.alpha = Mn(o.alpha, i.alpha, e),
                n.transform(a)
            }
        };
        function Cr(e) {
            return function(e) {
                if (Array.isArray(e))
                    return Rt(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || jt(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var Or = {
            test: function(e) {
                return sr.test(e) || cr.test(e) || gr.test(e)
            },
            parse: function(e) {
                return sr.test(e) ? sr.parse(e) : gr.test(e) ? gr.parse(e) : cr.parse(e)
            },
            transform: function(e) {
                return tr(e) ? e : e.hasOwnProperty("red") ? sr.transform(e) : gr.transform(e)
            }
        }
          , _r = "${c}"
          , Tr = "${n}";
        function Ar(e) {
            "number" === typeof e && (e = "".concat(e));
            var t = []
              , n = 0
              , r = e.match(Jn);
            r && (n = r.length,
            e = e.replace(Jn, _r),
            t.push.apply(t, Cr(r.map(Or.parse))));
            var o = e.match(Zn);
            return o && (e = e.replace(Zn, Tr),
            t.push.apply(t, Cr(o.map(nr.parse)))),
            {
                values: t,
                numColors: n,
                tokenised: e
            }
        }
        function Mr(e) {
            return Ar(e).values
        }
        function Nr(e) {
            var t = Ar(e)
              , n = t.values
              , r = t.numColors
              , o = t.tokenised
              , i = n.length;
            return function(e) {
                for (var t = o, n = 0; n < i; n++)
                    t = t.replace(n < r ? _r : Tr, n < r ? Or.transform(e[n]) : Gn(e[n]));
                return t
            }
        }
        var Rr = function(e) {
            return "number" === typeof e ? 0 : e
        };
        var jr = {
            test: function(e) {
                var t, n, r, o;
                return isNaN(e) && tr(e) && (null !== (n = null === (t = e.match(Zn)) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0) + (null !== (o = null === (r = e.match(Jn)) || void 0 === r ? void 0 : r.length) && void 0 !== o ? o : 0) > 0
            },
            parse: Mr,
            createTransformer: Nr,
            getAnimatableNone: function(e) {
                var t = Mr(e);
                return Nr(e)(t.map(Rr))
            }
        }
          , Lr = function(e) {
            return "number" === typeof e
        }
          , Dr = function(e, t) {
            return function(n) {
                return t(e(n))
            }
        }
          , Ir = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return t.reduce(Dr)
        };
        function Vr(e, t) {
            return Lr(e) ? function(n) {
                return Mn(e, t, n)
            }
            : Or.test(e) ? Pr(e, t) : Br(e, t)
        }
        var Fr = function(e, t) {
            var n = Cr(e)
              , r = n.length
              , o = e.map((function(e, n) {
                return Vr(e, t[n])
            }
            ));
            return function(e) {
                for (var t = 0; t < r; t++)
                    n[t] = o[t](e);
                return n
            }
        }
          , zr = function(e, t) {
            var n = Object.assign(Object.assign({}, e), t)
              , r = {};
            for (var o in n)
                void 0 !== e[o] && void 0 !== t[o] && (r[o] = Vr(e[o], t[o]));
            return function(e) {
                for (var t in r)
                    n[t] = r[t](e);
                return n
            }
        };
        function Ur(e) {
            for (var t = jr.parse(e), n = t.length, r = 0, o = 0, i = 0, a = 0; a < n; a++)
                r || "number" === typeof t[a] ? r++ : void 0 !== t[a].hue ? i++ : o++;
            return {
                parsed: t,
                numNumbers: r,
                numRGB: o,
                numHSL: i
            }
        }
        var Br = function(e, t) {
            var n = jr.createTransformer(t)
              , r = Ur(e)
              , o = Ur(t);
            return r.numHSL === o.numHSL && r.numRGB === o.numRGB && r.numNumbers >= o.numNumbers ? Ir(Fr(r.parsed, o.parsed), n) : ("Complex values '".concat(e, "' and '").concat(t, "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."),
            function(n) {
                return "".concat(n > 0 ? t : e)
            }
            )
        }
          , $r = function(e, t) {
            return function(n) {
                return Mn(e, t, n)
            }
        };
        function Wr(e, t, n) {
            for (var r = [], o = n || function(e) {
                return "number" === typeof e ? $r : "string" === typeof e ? Or.test(e) ? Pr : Br : Array.isArray(e) ? Fr : "object" === typeof e ? zr : void 0
            }(e[0]), i = e.length - 1, a = 0; a < i; a++) {
                var u = o(e[a], e[a + 1]);
                if (t) {
                    var l = Array.isArray(t) ? t[a] : t;
                    u = Ir(l, u)
                }
                r.push(u)
            }
            return r
        }
        function Hr(e, t) {
            var n = Lt(e, 2)
              , r = n[0]
              , o = n[1]
              , i = Lt(t, 1)[0];
            return function(e) {
                return i(Yn(r, o, e))
            }
        }
        function Kr(e, t) {
            var n = e.length
              , r = n - 1;
            return function(o) {
                var i = 0
                  , a = !1;
                if (o <= e[0] ? a = !0 : o >= e[r] && (i = r - 1,
                a = !0),
                !a) {
                    for (var u = 1; u < n && !(e[u] > o || u === r); u++)
                        ;
                    i = u - 1
                }
                var l = Yn(e[i], e[i + 1], o);
                return t[i](l)
            }
        }
        function Qr(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , r = n.clamp
              , o = void 0 === r || r
              , i = n.ease
              , a = n.mixer
              , u = e.length;
            t.length,
            !i || !Array.isArray(i) || i.length,
            e[0] > e[u - 1] && (e = [].concat(e),
            t = [].concat(t),
            e.reverse(),
            t.reverse());
            var l = Wr(t, i, a)
              , s = 2 === u ? Hr(e, l) : Kr(e, l);
            return o ? function(t) {
                return s(zn(e[0], e[u - 1], t))
            }
            : s
        }
        var qr, Yr = function(e) {
            return function(t) {
                return 1 - e(1 - t)
            }
        }, Xr = function(e) {
            return function(t) {
                return t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
            }
        }, Gr = function(e) {
            return function(t) {
                return t * t * ((e + 1) * t - e)
            }
        }, Zr = function(e) {
            return e
        }, Jr = (qr = 2,
        function(e) {
            return Math.pow(e, qr)
        }
        ), eo = Yr(Jr), to = Xr(Jr), no = function(e) {
            return 1 - Math.sin(Math.acos(e))
        }, ro = Yr(no), oo = Xr(ro), io = Gr(1.525), ao = Yr(io), uo = Xr(io), lo = function(e) {
            var t = Gr(e);
            return function(e) {
                return (e *= 2) < 1 ? .5 * t(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
            }
        }(1.525), so = function(e) {
            if (1 === e || 0 === e)
                return e;
            var t = e * e;
            return e < .36363636363636365 ? 7.5625 * t : e < .7272727272727273 ? 9.075 * t - 9.9 * e + 3.4 : e < .9 ? 12.066481994459833 * t - 19.63545706371191 * e + 8.898060941828255 : 10.8 * e * e - 20.52 * e + 10.72
        }, co = Yr(so);
        function fo(e, t) {
            return e.map((function() {
                return t || to
            }
            )).splice(0, e.length - 1)
        }
        function po(e) {
            var t = e.from
              , n = void 0 === t ? 0 : t
              , r = e.to
              , o = void 0 === r ? 1 : r
              , i = e.ease
              , a = e.offset
              , u = e.duration
              , l = void 0 === u ? 300 : u
              , s = {
                done: !1,
                value: n
            }
              , c = Array.isArray(o) ? o : [n, o]
              , f = function(e, t) {
                return e.map((function(e) {
                    return e * t
                }
                ))
            }(a && a.length === c.length ? a : function(e) {
                var t = e.length;
                return e.map((function(e, n) {
                    return 0 !== n ? n / (t - 1) : 0
                }
                ))
            }(c), l);
            function d() {
                return Qr(f, c, {
                    ease: Array.isArray(i) ? i : fo(c, i)
                })
            }
            var p = d();
            return {
                next: function(e) {
                    return s.value = p(e),
                    s.done = e >= l,
                    s
                },
                flipTarget: function() {
                    c.reverse(),
                    p = d()
                }
            }
        }
        var vo = {
            keyframes: po,
            spring: Qn,
            decay: function(e) {
                var t = e.velocity
                  , n = void 0 === t ? 0 : t
                  , r = e.from
                  , o = void 0 === r ? 0 : r
                  , i = e.power
                  , a = void 0 === i ? .8 : i
                  , u = e.timeConstant
                  , l = void 0 === u ? 350 : u
                  , s = e.restDelta
                  , c = void 0 === s ? .5 : s
                  , f = e.modifyTarget
                  , d = {
                    done: !1,
                    value: o
                }
                  , p = a * n
                  , v = o + p
                  , h = void 0 === f ? v : f(v);
                return h !== v && (p = h - o),
                {
                    next: function(e) {
                        var t = -p * Math.exp(-e / l);
                        return d.done = !(t > c || t < -c),
                        d.value = d.done ? h : h + t,
                        d
                    },
                    flipTarget: function() {}
                }
            }
        };
        function ho(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
            return e - t - n
        }
        var mo = function(e) {
            var t = function(t) {
                var n = t.delta;
                return e(n)
            };
            return {
                start: function() {
                    return An.update(t, !0)
                },
                stop: function() {
                    return kn.update(t)
                }
            }
        };
        function yo(e) {
            var t, n, r, o, i, a = e.from, u = e.autoplay, l = void 0 === u || u, s = e.driver, c = void 0 === s ? mo : s, f = e.elapsed, d = void 0 === f ? 0 : f, p = e.repeat, v = void 0 === p ? 0 : p, h = e.repeatType, m = void 0 === h ? "loop" : h, y = e.repeatDelay, g = void 0 === y ? 0 : y, b = e.onPlay, w = e.onStop, x = e.onComplete, S = e.onRepeat, E = e.onUpdate, k = Fn(e, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]), P = k.to, C = 0, O = k.duration, _ = !1, T = !0, A = function(e) {
                if (Array.isArray(e.to))
                    return po;
                if (vo[e.type])
                    return vo[e.type];
                var t = new Set(Object.keys(e));
                return t.has("ease") || t.has("duration") && !t.has("dampingRatio") ? po : t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta") ? Qn : po
            }(k);
            (null === (n = (t = A).needsInterpolation) || void 0 === n ? void 0 : n.call(t, a, P)) && (i = Qr([0, 100], [a, P], {
                clamp: !1
            }),
            a = 0,
            P = 100);
            var M = A(Object.assign(Object.assign({}, k), {
                from: a,
                to: P
            }));
            function N() {
                C++,
                "reverse" === m ? d = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    return arguments.length > 3 && void 0 !== arguments[3] && !arguments[3] ? t - (e - t) + n : ho(t + -e, t, n)
                }(d, O, g, T = C % 2 === 0) : (d = ho(d, O, g),
                "mirror" === m && M.flipTarget()),
                _ = !1,
                S && S()
            }
            function R(e) {
                if (T || (e = -e),
                d += e,
                !_) {
                    var t = M.next(Math.max(0, d));
                    o = t.value,
                    i && (o = i(o)),
                    _ = T ? t.done : d <= 0
                }
                null === E || void 0 === E || E(o),
                _ && (0 === C && (null !== O && void 0 !== O || (O = d)),
                C < v ? function(e, t, n, r) {
                    return r ? e >= t + n : e <= -n
                }(d, O, g, T) && N() : (r.stop(),
                x && x()))
            }
            return l && (null === b || void 0 === b || b(),
            (r = c(R)).start()),
            {
                stop: function() {
                    null === w || void 0 === w || w(),
                    r.stop()
                }
            }
        }
        var go = function(e) {
            return 1e3 * e
        }
          , bo = function(e, t) {
            return 1 - 3 * t + 3 * e
        }
          , wo = function(e, t) {
            return 3 * t - 6 * e
        }
          , xo = function(e) {
            return 3 * e
        }
          , So = function(e, t, n) {
            return ((bo(t, n) * e + wo(t, n)) * e + xo(t)) * e
        }
          , Eo = function(e, t, n) {
            return 3 * bo(t, n) * e * e + 2 * wo(t, n) * e + xo(t)
        };
        var ko = .1;
        function Po(e, t, n, r) {
            if (e === t && n === r)
                return Zr;
            for (var o = new Float32Array(11), i = 0; i < 11; ++i)
                o[i] = So(i * ko, e, n);
            function a(t) {
                for (var r = 0, i = 1; 10 !== i && o[i] <= t; ++i)
                    r += ko;
                --i;
                var a = r + (t - o[i]) / (o[i + 1] - o[i]) * ko
                  , u = Eo(a, e, n);
                return u >= .001 ? function(e, t, n, r) {
                    for (var o = 0; o < 8; ++o) {
                        var i = Eo(t, n, r);
                        if (0 === i)
                            return t;
                        t -= (So(t, n, r) - e) / i
                    }
                    return t
                }(t, a, e, n) : 0 === u ? a : function(e, t, n, r, o) {
                    var i, a, u = 0;
                    do {
                        (i = So(a = t + (n - t) / 2, r, o) - e) > 0 ? n = a : t = a
                    } while (Math.abs(i) > 1e-7 && ++u < 10);
                    return a
                }(t, r, r + ko, e, n)
            }
            return function(e) {
                return 0 === e || 1 === e ? e : So(a(e), t, r)
            }
        }
        var Co = {
            linear: Zr,
            easeIn: Jr,
            easeInOut: to,
            easeOut: eo,
            circIn: no,
            circInOut: oo,
            circOut: ro,
            backIn: io,
            backInOut: uo,
            backOut: ao,
            anticipate: lo,
            bounceIn: co,
            bounceInOut: function(e) {
                return e < .5 ? .5 * (1 - so(1 - 2 * e)) : .5 * so(2 * e - 1) + .5
            },
            bounceOut: so
        }
          , Oo = function(e) {
            if (Array.isArray(e)) {
                e.length;
                var t = Wt(e, 4);
                return Po(t[0], t[1], t[2], t[3])
            }
            return "string" === typeof e ? ("Invalid easing type '".concat(e, "'"),
            Co[e]) : e
        }
          , _o = function(e, t) {
            return "zIndex" !== e && (!("number" !== typeof t && !Array.isArray(t)) || !("string" !== typeof t || !jr.test(t) || t.startsWith("url(")))
        }
          , To = function(e) {
            return Array.isArray(e)
        }
          , Ao = function() {
            return {
                type: "spring",
                stiffness: 500,
                damping: 25,
                restSpeed: 10
            }
        }
          , Mo = function(e) {
            return {
                type: "spring",
                stiffness: 550,
                damping: 0 === e ? 2 * Math.sqrt(550) : 30,
                restSpeed: 10
            }
        }
          , No = function() {
            return {
                type: "keyframes",
                ease: "linear",
                duration: .3
            }
        }
          , Ro = function(e) {
            return {
                type: "keyframes",
                duration: .8,
                values: e
            }
        }
          , jo = {
            x: Ao,
            y: Ao,
            z: Ao,
            rotate: Ao,
            rotateX: Ao,
            rotateY: Ao,
            rotateZ: Ao,
            scaleX: Mo,
            scaleY: Mo,
            scale: Mo,
            opacity: No,
            backgroundColor: No,
            color: No,
            default: Mo
        }
          , Lo = new Set(["brightness", "contrast", "saturate", "opacity"]);
        function Do(e) {
            var t = Lt(e.slice(0, -1).split("("), 2)
              , n = t[0]
              , r = t[1];
            if ("drop-shadow" === n)
                return e;
            var o = Lt(r.match(Zn) || [], 1)[0];
            if (!o)
                return e;
            var i = r.replace(o, "")
              , a = Lo.has(n) ? 1 : 0;
            return o !== r && (a *= 100),
            n + "(" + a + i + ")"
        }
        var Io = /([a-z-]*)\(.*?\)/g
          , Vo = Object.assign(Object.assign({}, jr), {
            getAnimatableNone: function(e) {
                var t = e.match(Io);
                return t ? t.map(Do).join(" ") : e
            }
        })
          , Fo = Ut(Ut({}, nr), {
            transform: Math.round
        })
          , zo = {
            borderWidth: vr,
            borderTopWidth: vr,
            borderRightWidth: vr,
            borderBottomWidth: vr,
            borderLeftWidth: vr,
            borderRadius: vr,
            radius: vr,
            borderTopLeftRadius: vr,
            borderTopRightRadius: vr,
            borderBottomRightRadius: vr,
            borderBottomLeftRadius: vr,
            width: vr,
            maxWidth: vr,
            height: vr,
            maxHeight: vr,
            size: vr,
            top: vr,
            right: vr,
            bottom: vr,
            left: vr,
            padding: vr,
            paddingTop: vr,
            paddingRight: vr,
            paddingBottom: vr,
            paddingLeft: vr,
            margin: vr,
            marginTop: vr,
            marginRight: vr,
            marginBottom: vr,
            marginLeft: vr,
            rotate: dr,
            rotateX: dr,
            rotateY: dr,
            rotateZ: dr,
            scale: or,
            scaleX: or,
            scaleY: or,
            scaleZ: or,
            skew: dr,
            skewX: dr,
            skewY: dr,
            distance: vr,
            translateX: vr,
            translateY: vr,
            translateZ: vr,
            x: vr,
            y: vr,
            z: vr,
            perspective: vr,
            transformPerspective: vr,
            opacity: rr,
            originX: yr,
            originY: yr,
            originZ: vr,
            zIndex: Fo,
            fillOpacity: rr,
            strokeOpacity: rr,
            numOctaves: Fo
        }
          , Uo = Ut(Ut({}, zo), {
            color: Or,
            backgroundColor: Or,
            outlineColor: Or,
            fill: Or,
            stroke: Or,
            borderColor: Or,
            borderTopColor: Or,
            borderRightColor: Or,
            borderBottomColor: Or,
            borderLeftColor: Or,
            filter: Vo,
            WebkitFilter: Vo
        })
          , Bo = function(e) {
            return Uo[e]
        };
        function $o(e, t) {
            var n, r = Bo(e);
            return r !== Vo && (r = jr),
            null === (n = r.getAnimatableNone) || void 0 === n ? void 0 : n.call(r, t)
        }
        var Wo = !1
          , Ho = function(e) {
            return To(e) ? e[e.length - 1] || 0 : e
        };
        function Ko(e) {
            var t = e.ease
              , n = e.times
              , r = e.yoyo
              , o = e.flip
              , i = e.loop
              , a = Bt(e, ["ease", "times", "yoyo", "flip", "loop"])
              , u = Ut({}, a);
            return n && (u.offset = n),
            a.duration && (u.duration = go(a.duration)),
            a.repeatDelay && (u.repeatDelay = go(a.repeatDelay)),
            t && (u.ease = function(e) {
                return Array.isArray(e) && "number" !== typeof e[0]
            }(t) ? t.map(Oo) : Oo(t)),
            "tween" === a.type && (u.type = "keyframes"),
            (r || i || o) && (!0,
            r ? u.repeatType = "reverse" : i ? u.repeatType = "loop" : o && (u.repeatType = "mirror"),
            u.repeat = i || r || o || a.repeat),
            "spring" !== a.type && (u.type = "keyframes"),
            u
        }
        function Qo(e, t, n) {
            var r;
            return Array.isArray(t.to) && (null !== (r = e.duration) && void 0 !== r || (e.duration = .8)),
            function(e) {
                Array.isArray(e.to) && null === e.to[0] && (e.to = Ht([], Wt(e.to), !1),
                e.to[0] = e.from)
            }(t),
            function(e) {
                e.when,
                e.delay,
                e.delayChildren,
                e.staggerChildren,
                e.staggerDirection,
                e.repeat,
                e.repeatType,
                e.repeatDelay,
                e.from;
                var t = Bt(e, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
                return !!Object.keys(t).length
            }(e) || (e = Ut(Ut({}, e), function(e, t) {
                var n;
                return n = To(t) ? Ro : jo[e] || jo.default,
                Ut({
                    to: t
                }, n(t))
            }(n, t.to))),
            Ut(Ut({}, t), Ko(e))
        }
        function qo(e, t, n, r, o) {
            var i, a = Go(r, e), u = null !== (i = a.from) && void 0 !== i ? i : t.get(), l = _o(e, n);
            "none" === u && l && "string" === typeof n ? u = $o(e, n) : Yo(u) && "string" === typeof n ? u = Xo(n) : !Array.isArray(n) && Yo(n) && "string" === typeof u && (n = Xo(u));
            var s = _o(e, u);
            return "You are trying to animate ".concat(e, ' from "').concat(u, '" to "').concat(n, '". ').concat(u, " is not an animatable value - to enable this animation set ").concat(u, " to a value animatable to ").concat(n, " via the `style` property."),
            s && l && !1 !== a.type ? function() {
                var r = {
                    from: u,
                    to: n,
                    velocity: t.getVelocity(),
                    onComplete: o,
                    onUpdate: function(e) {
                        return t.set(e)
                    }
                };
                return "inertia" === a.type || "decay" === a.type ? function(e) {
                    var t, n = e.from, r = void 0 === n ? 0 : n, o = e.velocity, i = void 0 === o ? 0 : o, a = e.min, u = e.max, l = e.power, s = void 0 === l ? .8 : l, c = e.timeConstant, f = void 0 === c ? 750 : c, d = e.bounceStiffness, p = void 0 === d ? 500 : d, v = e.bounceDamping, h = void 0 === v ? 10 : v, m = e.restDelta, y = void 0 === m ? 1 : m, g = e.modifyTarget, b = e.driver, w = e.onUpdate, x = e.onComplete, S = e.onStop;
                    function E(e) {
                        return void 0 !== a && e < a || void 0 !== u && e > u
                    }
                    function k(e) {
                        return void 0 === a ? u : void 0 === u || Math.abs(a - e) < Math.abs(u - e) ? a : u
                    }
                    function P(e) {
                        null === t || void 0 === t || t.stop(),
                        t = yo(Object.assign(Object.assign({}, e), {
                            driver: b,
                            onUpdate: function(t) {
                                var n;
                                null === w || void 0 === w || w(t),
                                null === (n = e.onUpdate) || void 0 === n || n.call(e, t)
                            },
                            onComplete: x,
                            onStop: S
                        }))
                    }
                    function C(e) {
                        P(Object.assign({
                            type: "spring",
                            stiffness: p,
                            damping: h,
                            restDelta: y
                        }, e))
                    }
                    if (E(r))
                        C({
                            from: r,
                            velocity: i,
                            to: k(r)
                        });
                    else {
                        var O = s * i + r;
                        "undefined" !== typeof g && (O = g(O));
                        var _, T, A = k(O), M = A === a ? -1 : 1;
                        P({
                            type: "decay",
                            from: r,
                            velocity: i,
                            timeConstant: f,
                            power: s,
                            restDelta: y,
                            modifyTarget: g,
                            onUpdate: E(O) ? function(e) {
                                _ = T,
                                T = e,
                                i = Nn(e - _, Tn().delta),
                                (1 === M && e > A || -1 === M && e < A) && C({
                                    from: e,
                                    to: A,
                                    velocity: i
                                })
                            }
                            : void 0
                        })
                    }
                    return {
                        stop: function() {
                            return null === t || void 0 === t ? void 0 : t.stop()
                        }
                    }
                }(Ut(Ut({}, r), a)) : yo(Ut(Ut({}, Qo(a, r, e)), {
                    onUpdate: function(e) {
                        var t;
                        r.onUpdate(e),
                        null === (t = a.onUpdate) || void 0 === t || t.call(a, e)
                    },
                    onComplete: function() {
                        var e;
                        r.onComplete(),
                        null === (e = a.onComplete) || void 0 === e || e.call(a)
                    }
                }))
            }
            : function() {
                var e, r, i = Ho(n);
                return t.set(i),
                o(),
                null === (e = null === a || void 0 === a ? void 0 : a.onUpdate) || void 0 === e || e.call(a, i),
                null === (r = null === a || void 0 === a ? void 0 : a.onComplete) || void 0 === r || r.call(a),
                {
                    stop: function() {}
                }
            }
        }
        function Yo(e) {
            return 0 === e || "string" === typeof e && 0 === parseFloat(e) && -1 === e.indexOf(" ")
        }
        function Xo(e) {
            return "number" === typeof e ? 0 : $o("", e)
        }
        function Go(e, t) {
            return e[t] || e.default || e
        }
        function Zo(e, t, n, r) {
            return void 0 === r && (r = {}),
            Wo && (r = {
                type: !1
            }),
            t.start((function(o) {
                var i, a, u = qo(e, t, n, r, o), l = function(e, t) {
                    var n, r;
                    return null !== (r = null !== (n = (Go(e, t) || {}).delay) && void 0 !== n ? n : e.delay) && void 0 !== r ? r : 0
                }(r, e), s = function() {
                    return a = u()
                };
                return l ? i = setTimeout(s, go(l)) : s(),
                function() {
                    clearTimeout(i),
                    null === a || void 0 === a || a.stop()
                }
            }
            ))
        }
        var Jo = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
          , ei = Jo.length;
        function ti(e, t) {
            var n;
            return null !== (n = e[t]) && void 0 !== n ? n : e.borderRadius
        }
        var ni = oi(0, .5, ro)
          , ri = oi(.5, .95, Zr);
        function oi(e, t, n) {
            return function(r) {
                return r < e ? 0 : r > t ? 1 : n(Yn(e, t, r))
            }
        }
        function ii(e, t) {
            e.min = t.min,
            e.max = t.max
        }
        function ai(e, t) {
            ii(e.x, t.x),
            ii(e.y, t.y)
        }
        function ui(e) {
            return void 0 === e || 1 === e
        }
        function li(e) {
            var t = e.scale
              , n = e.scaleX
              , r = e.scaleY;
            return !ui(t) || !ui(n) || !ui(r)
        }
        function si(e) {
            return li(e) || ci(e.x) || ci(e.y) || e.z || e.rotate || e.rotateX || e.rotateY
        }
        function ci(e) {
            return e && "0%" !== e
        }
        function fi(e, t, n) {
            return n + t * (e - n)
        }
        function di(e, t, n, r, o) {
            return void 0 !== o && (e = fi(e, o, r)),
            fi(e, n, r) + t
        }
        function pi(e, t, n, r, o) {
            void 0 === t && (t = 0),
            void 0 === n && (n = 1),
            e.min = di(e.min, t, n, r, o),
            e.max = di(e.max, t, n, r, o)
        }
        function vi(e, t) {
            var n = t.x
              , r = t.y;
            pi(e.x, n.translate, n.scale, n.originPoint),
            pi(e.y, r.translate, r.scale, r.originPoint)
        }
        function hi(e, t) {
            e.min = e.min + t,
            e.max = e.max + t
        }
        function mi(e, t, n) {
            var r = Wt(n, 3)
              , o = r[0]
              , i = r[1]
              , a = r[2]
              , u = void 0 !== t[a] ? t[a] : .5
              , l = Mn(e.min, e.max, u);
            pi(e, t[o], t[i], l, t.scale)
        }
        var yi = ["x", "scaleX", "originX"]
          , gi = ["y", "scaleY", "originY"];
        function bi(e, t) {
            mi(e.x, t, yi),
            mi(e.y, t, gi)
        }
        var wi = function(e) {
            return e.hasOwnProperty("x") && e.hasOwnProperty("y")
        }
          , xi = function(e) {
            return wi(e) && e.hasOwnProperty("z")
        }
          , Si = function(e, t) {
            return Math.abs(e - t)
        };
        function Ei(e, t) {
            if (Lr(e) && Lr(t))
                return Si(e, t);
            if (wi(e) && wi(t)) {
                var n = Si(e.x, t.x)
                  , r = Si(e.y, t.y)
                  , o = xi(e) && xi(t) ? Si(e.z, t.z) : 0;
                return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(o, 2))
            }
        }
        function ki(e) {
            return e.max - e.min
        }
        function Pi(e, t, n) {
            return void 0 === t && (t = 0),
            void 0 === n && (n = .01),
            Ei(e, t) < n
        }
        function Ci(e, t, n, r) {
            void 0 === r && (r = .5),
            e.origin = r,
            e.originPoint = Mn(t.min, t.max, e.origin),
            e.scale = ki(n) / ki(t),
            (Pi(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
            e.translate = Mn(n.min, n.max, e.origin) - e.originPoint,
            (Pi(e.translate) || isNaN(e.translate)) && (e.translate = 0)
        }
        function Oi(e, t, n, r) {
            Ci(e.x, t.x, n.x, null === r || void 0 === r ? void 0 : r.originX),
            Ci(e.y, t.y, n.y, null === r || void 0 === r ? void 0 : r.originY)
        }
        function _i(e, t, n) {
            e.min = n.min + t.min,
            e.max = e.min + ki(t)
        }
        function Ti(e, t, n) {
            e.min = t.min - n.min,
            e.max = e.min + ki(t)
        }
        function Ai(e, t, n) {
            Ti(e.x, t.x, n.x),
            Ti(e.y, t.y, n.y)
        }
        function Mi(e, t, n, r, o) {
            return e = fi(e -= t, 1 / n, r),
            void 0 !== o && (e = fi(e, 1 / o, r)),
            e
        }
        function Ni(e, t, n, r, o) {
            var i = Wt(n, 3)
              , a = i[0]
              , u = i[1]
              , l = i[2];
            !function(e, t, n, r, o, i, a) {
                if (void 0 === t && (t = 0),
                void 0 === n && (n = 1),
                void 0 === r && (r = .5),
                void 0 === i && (i = e),
                void 0 === a && (a = e),
                pr.test(t) && (t = parseFloat(t),
                t = Mn(a.min, a.max, t / 100) - a.min),
                "number" === typeof t) {
                    var u = Mn(i.min, i.max, r);
                    e === i && (u -= t),
                    e.min = Mi(e.min, t, n, u, o),
                    e.max = Mi(e.max, t, n, u, o)
                }
            }(e, t[a], t[u], t[l], t.scale, r, o)
        }
        var Ri = ["x", "scaleX", "originX"]
          , ji = ["y", "scaleY", "originY"];
        function Li(e, t, n, r) {
            Ni(e.x, t, Ri, null === n || void 0 === n ? void 0 : n.x, null === r || void 0 === r ? void 0 : r.x),
            Ni(e.y, t, ji, null === n || void 0 === n ? void 0 : n.y, null === r || void 0 === r ? void 0 : r.y)
        }
        function Di(e) {
            return 0 === e.translate && 1 === e.scale
        }
        function Ii(e) {
            return Di(e.x) && Di(e.y)
        }
        function Vi(e, t) {
            return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
        }
        var Fi = function() {
            function e() {
                this.members = []
            }
            return e.prototype.add = function(e) {
                Rn(this.members, e),
                e.scheduleRender()
            }
            ,
            e.prototype.remove = function(e) {
                if (jn(this.members, e),
                e === this.prevLead && (this.prevLead = void 0),
                e === this.lead) {
                    var t = this.members[this.members.length - 1];
                    t && this.promote(t)
                }
            }
            ,
            e.prototype.relegate = function(e) {
                var t, n = this.members.findIndex((function(t) {
                    return e === t
                }
                ));
                if (0 === n)
                    return !1;
                for (var r = n; r >= 0; r--) {
                    var o = this.members[r];
                    if (!1 !== o.isPresent) {
                        t = o;
                        break
                    }
                }
                return !!t && (this.promote(t),
                !0)
            }
            ,
            e.prototype.promote = function(e, t) {
                var n, r = this.lead;
                e !== r && (this.prevLead = r,
                this.lead = e,
                e.show(),
                r && (r.instance && r.scheduleRender(),
                e.scheduleRender(),
                e.resumeFrom = r,
                t && (e.resumeFrom.preserveOpacity = !0),
                r.snapshot && (e.snapshot = r.snapshot,
                e.snapshot.latestValues = r.animationValues || r.latestValues,
                e.snapshot.isShared = !0),
                (null === (n = e.root) || void 0 === n ? void 0 : n.isUpdating) && (e.isLayoutDirty = !0),
                !1 === e.options.crossfade && r.hide()))
            }
            ,
            e.prototype.exitAnimationComplete = function() {
                this.members.forEach((function(e) {
                    var t, n, r, o, i;
                    null === (n = (t = e.options).onExitComplete) || void 0 === n || n.call(t),
                    null === (i = null === (r = e.resumingFrom) || void 0 === r ? void 0 : (o = r.options).onExitComplete) || void 0 === i || i.call(o)
                }
                ))
            }
            ,
            e.prototype.scheduleRender = function() {
                this.members.forEach((function(e) {
                    e.instance && e.scheduleRender(!1)
                }
                ))
            }
            ,
            e.prototype.removeLeadSnapshot = function() {
                this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
            }
            ,
            e
        }()
          , zi = {};
        function Ui(e, t, n) {
            var r = e.x.translate / t.x
              , o = e.y.translate / t.y
              , i = "translate3d(".concat(r, "px, ").concat(o, "px, 0) ");
            if (n) {
                var a = n.rotate
                  , u = n.rotateX
                  , l = n.rotateY;
                a && (i += "rotate(".concat(a, "deg) ")),
                u && (i += "rotateX(".concat(u, "deg) ")),
                l && (i += "rotateY(".concat(l, "deg) "))
            }
            return "translate3d(0px, 0px, 0) scale(1, 1)" === (i += "scale(".concat(e.x.scale, ", ").concat(e.y.scale, ")")) ? "none" : i
        }
        function Bi(e) {
            return [e("x"), e("y")]
        }
        var $i = ["", "X", "Y", "Z"]
          , Wi = ["transformPerspective", "x", "y", "z"];
        function Hi(e, t) {
            return Wi.indexOf(e) - Wi.indexOf(t)
        }
        ["translate", "scale", "rotate", "skew"].forEach((function(e) {
            return $i.forEach((function(t) {
                return Wi.push(e + t)
            }
            ))
        }
        ));
        var Ki = new Set(Wi);
        function Qi(e) {
            return Ki.has(e)
        }
        var qi = new Set(["originX", "originY", "originZ"]);
        function Yi(e) {
            return qi.has(e)
        }
        var Xi = function(e, t) {
            return e.depth - t.depth
        }
          , Gi = function() {
            function e() {
                this.children = [],
                this.isDirty = !1
            }
            return e.prototype.add = function(e) {
                Rn(this.children, e),
                this.isDirty = !0
            }
            ,
            e.prototype.remove = function(e) {
                jn(this.children, e),
                this.isDirty = !0
            }
            ,
            e.prototype.forEach = function(e) {
                this.isDirty && this.children.sort(Xi),
                this.isDirty = !1,
                this.children.forEach(e)
            }
            ,
            e
        }();
        function Zi(e) {
            var t = Vn(e) ? e.get() : e;
            return function(e) {
                return Boolean(e && "object" === typeof e && e.mix && e.toValue)
            }(t) ? t.toValue() : t
        }
        var Ji = {
            hasAnimatedSinceResize: !0,
            hasEverUpdated: !1
        };
        function ea(e) {
            var t = e.attachResizeListener
              , n = e.defaultParent
              , r = e.measureScroll
              , o = e.resetTransform;
            return function() {
                function e(e, t, r) {
                    var o = this;
                    void 0 === t && (t = {}),
                    void 0 === r && (r = null === n || void 0 === n ? void 0 : n()),
                    this.children = new Set,
                    this.options = {},
                    this.isTreeAnimating = !1,
                    this.isAnimationBlocked = !1,
                    this.isLayoutDirty = !1,
                    this.updateManuallyBlocked = !1,
                    this.updateBlockedByResize = !1,
                    this.isUpdating = !1,
                    this.isSVG = !1,
                    this.needsReset = !1,
                    this.shouldResetTransform = !1,
                    this.treeScale = {
                        x: 1,
                        y: 1
                    },
                    this.eventHandlers = new Map,
                    this.potentialNodes = new Map,
                    this.checkUpdateFailed = function() {
                        o.isUpdating && (o.isUpdating = !1,
                        o.clearAllSnapshots())
                    }
                    ,
                    this.updateProjection = function() {
                        o.nodes.forEach(ua),
                        o.nodes.forEach(la)
                    }
                    ,
                    this.hasProjected = !1,
                    this.isVisible = !0,
                    this.animationProgress = 0,
                    this.sharedNodes = new Map,
                    this.id = e,
                    this.latestValues = t,
                    this.root = r ? r.root || r : this,
                    this.path = r ? Ht(Ht([], Wt(r.path), !1), [r], !1) : [],
                    this.parent = r,
                    this.depth = r ? r.depth + 1 : 0,
                    e && this.root.registerPotentialNode(e, this);
                    for (var i = 0; i < this.path.length; i++)
                        this.path[i].shouldResetTransform = !0;
                    this.root === this && (this.nodes = new Gi)
                }
                return e.prototype.addEventListener = function(e, t) {
                    return this.eventHandlers.has(e) || this.eventHandlers.set(e, new Ln),
                    this.eventHandlers.get(e).add(t)
                }
                ,
                e.prototype.notifyListeners = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++)
                        t[n - 1] = arguments[n];
                    var r = this.eventHandlers.get(e);
                    null === r || void 0 === r || r.notify.apply(r, Ht([], Wt(t), !1))
                }
                ,
                e.prototype.hasListeners = function(e) {
                    return this.eventHandlers.has(e)
                }
                ,
                e.prototype.registerPotentialNode = function(e, t) {
                    this.potentialNodes.set(e, t)
                }
                ,
                e.prototype.mount = function(e, n) {
                    var r, o = this;
                    if (void 0 === n && (n = !1),
                    !this.instance) {
                        this.isSVG = e instanceof SVGElement && "svg" !== e.tagName,
                        this.instance = e;
                        var i = this.options
                          , a = i.layoutId
                          , u = i.layout
                          , l = i.visualElement;
                        if (l && !l.getInstance() && l.mount(e),
                        this.root.nodes.add(this),
                        null === (r = this.parent) || void 0 === r || r.children.add(this),
                        this.id && this.root.potentialNodes.delete(this.id),
                        n && (u || a) && (this.isLayoutDirty = !0),
                        t) {
                            var s, c = function() {
                                return o.root.updateBlockedByResize = !1
                            };
                            t(e, (function() {
                                o.root.updateBlockedByResize = !0,
                                clearTimeout(s),
                                s = setTimeout(c, 250),
                                Ji.hasAnimatedSinceResize && (Ji.hasAnimatedSinceResize = !1,
                                o.nodes.forEach(aa))
                            }
                            ))
                        }
                        a && this.root.registerSharedNode(a, this),
                        !1 !== this.options.animate && l && (a || u) && this.addEventListener("didUpdate", (function(e) {
                            var t, n, r, i, a, u = e.delta, s = e.hasLayoutChanged, c = e.hasRelativeTargetChanged, f = e.layout;
                            if (o.isTreeAnimationBlocked())
                                return o.target = void 0,
                                void (o.relativeTarget = void 0);
                            var d = null !== (n = null !== (t = o.options.transition) && void 0 !== t ? t : l.getDefaultTransition()) && void 0 !== n ? n : va
                              , p = l.getProps().onLayoutAnimationComplete
                              , v = !o.targetLayout || !Vi(o.targetLayout, f) || c
                              , h = !s && c;
                            (null === (r = o.resumeFrom) || void 0 === r ? void 0 : r.instance) || h || s && (v || !o.currentAnimation) ? (o.resumeFrom && (o.resumingFrom = o.resumeFrom,
                            o.resumingFrom.resumingFrom = void 0),
                            o.setAnimationOrigin(u, h),
                            o.startAnimation(Ut(Ut({}, Go(d, "layout")), {
                                onComplete: p
                            }))) : o.isLead() && (null === (a = (i = o.options).onExitComplete) || void 0 === a || a.call(i)),
                            o.targetLayout = f
                        }
                        ))
                    }
                }
                ,
                e.prototype.unmount = function() {
                    var e, t;
                    this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this),
                    null === (e = this.getStack()) || void 0 === e || e.remove(this),
                    null === (t = this.parent) || void 0 === t || t.children.delete(this),
                    this.instance = void 0,
                    kn.preRender(this.updateProjection)
                }
                ,
                e.prototype.blockUpdate = function() {
                    this.updateManuallyBlocked = !0
                }
                ,
                e.prototype.unblockUpdate = function() {
                    this.updateManuallyBlocked = !1
                }
                ,
                e.prototype.isUpdateBlocked = function() {
                    return this.updateManuallyBlocked || this.updateBlockedByResize
                }
                ,
                e.prototype.isTreeAnimationBlocked = function() {
                    var e;
                    return this.isAnimationBlocked || (null === (e = this.parent) || void 0 === e ? void 0 : e.isTreeAnimationBlocked()) || !1
                }
                ,
                e.prototype.startUpdate = function() {
                    var e;
                    this.isUpdateBlocked() || (this.isUpdating = !0,
                    null === (e = this.nodes) || void 0 === e || e.forEach(sa))
                }
                ,
                e.prototype.willUpdate = function(e) {
                    var t, n, r;
                    if (void 0 === e && (e = !0),
                    this.root.isUpdateBlocked())
                        null === (n = (t = this.options).onExitComplete) || void 0 === n || n.call(t);
                    else if (!this.root.isUpdating && this.root.startUpdate(),
                    !this.isLayoutDirty) {
                        this.isLayoutDirty = !0;
                        for (var o = 0; o < this.path.length; o++) {
                            var i = this.path[o];
                            i.shouldResetTransform = !0,
                            i.updateScroll()
                        }
                        var a = this.options
                          , u = a.layoutId
                          , l = a.layout;
                        if (void 0 !== u || l) {
                            var s = null === (r = this.options.visualElement) || void 0 === r ? void 0 : r.getProps().transformTemplate;
                            this.prevTransformTemplateValue = null === s || void 0 === s ? void 0 : s(this.latestValues, ""),
                            this.updateSnapshot(),
                            e && this.notifyListeners("willUpdate")
                        }
                    }
                }
                ,
                e.prototype.didUpdate = function() {
                    if (this.isUpdateBlocked())
                        return this.unblockUpdate(),
                        this.clearAllSnapshots(),
                        void this.nodes.forEach(oa);
                    this.isUpdating && (this.isUpdating = !1,
                    this.potentialNodes.size && (this.potentialNodes.forEach(ha),
                    this.potentialNodes.clear()),
                    this.nodes.forEach(ia),
                    this.nodes.forEach(ta),
                    this.nodes.forEach(na),
                    this.clearAllSnapshots(),
                    Pn.update(),
                    Pn.preRender(),
                    Pn.render())
                }
                ,
                e.prototype.clearAllSnapshots = function() {
                    this.nodes.forEach(ra),
                    this.sharedNodes.forEach(ca)
                }
                ,
                e.prototype.scheduleUpdateProjection = function() {
                    An.preRender(this.updateProjection, !1, !0)
                }
                ,
                e.prototype.scheduleCheckAfterUnmount = function() {
                    var e = this;
                    An.postRender((function() {
                        e.isLayoutDirty ? e.root.didUpdate() : e.root.checkUpdateFailed()
                    }
                    ))
                }
                ,
                e.prototype.updateSnapshot = function() {
                    if (!this.snapshot && this.instance) {
                        var e = this.measure()
                          , t = this.removeTransform(this.removeElementScroll(e));
                        ya(t),
                        this.snapshot = {
                            measured: e,
                            layout: t,
                            latestValues: {}
                        }
                    }
                }
                ,
                e.prototype.updateLayout = function() {
                    var e;
                    if (this.instance && (this.updateScroll(),
                    this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) {
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (var t = 0; t < this.path.length; t++) {
                                this.path[t].updateScroll()
                            }
                        var n = this.measure();
                        ya(n);
                        var r = this.layout;
                        this.layout = {
                            measured: n,
                            actual: this.removeElementScroll(n)
                        },
                        this.layoutCorrected = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        },
                        this.isLayoutDirty = !1,
                        this.projectionDelta = void 0,
                        this.notifyListeners("measure", this.layout.actual),
                        null === (e = this.options.visualElement) || void 0 === e || e.notifyLayoutMeasure(this.layout.actual, null === r || void 0 === r ? void 0 : r.actual)
                    }
                }
                ,
                e.prototype.updateScroll = function() {
                    this.options.layoutScroll && this.instance && (this.scroll = r(this.instance))
                }
                ,
                e.prototype.resetTransform = function() {
                    var e;
                    if (o) {
                        var t = this.isLayoutDirty || this.shouldResetTransform
                          , n = this.projectionDelta && !Ii(this.projectionDelta)
                          , r = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate
                          , i = null === r || void 0 === r ? void 0 : r(this.latestValues, "")
                          , a = i !== this.prevTransformTemplateValue;
                        t && (n || si(this.latestValues) || a) && (o(this.instance, i),
                        this.shouldResetTransform = !1,
                        this.scheduleRender())
                    }
                }
                ,
                e.prototype.measure = function() {
                    var e = this.options.visualElement;
                    if (!e)
                        return {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                    var t = e.measureViewportBox()
                      , n = this.root.scroll;
                    return n && (hi(t.x, n.x),
                    hi(t.y, n.y)),
                    t
                }
                ,
                e.prototype.removeElementScroll = function(e) {
                    var t = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    };
                    ai(t, e);
                    for (var n = 0; n < this.path.length; n++) {
                        var r = this.path[n]
                          , o = r.scroll
                          , i = r.options;
                        r !== this.root && o && i.layoutScroll && (hi(t.x, o.x),
                        hi(t.y, o.y))
                    }
                    return t
                }
                ,
                e.prototype.applyTransform = function(e, t) {
                    void 0 === t && (t = !1);
                    var n = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    };
                    ai(n, e);
                    for (var r = 0; r < this.path.length; r++) {
                        var o = this.path[r];
                        !t && o.options.layoutScroll && o.scroll && o !== o.root && bi(n, {
                            x: -o.scroll.x,
                            y: -o.scroll.y
                        }),
                        si(o.latestValues) && bi(n, o.latestValues)
                    }
                    return si(this.latestValues) && bi(n, this.latestValues),
                    n
                }
                ,
                e.prototype.removeTransform = function(e) {
                    var t, n = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    };
                    ai(n, e);
                    for (var r = 0; r < this.path.length; r++) {
                        var o = this.path[r];
                        if (o.instance && si(o.latestValues)) {
                            li(o.latestValues) && o.updateSnapshot();
                            var i = {
                                x: {
                                    min: 0,
                                    max: 0
                                },
                                y: {
                                    min: 0,
                                    max: 0
                                }
                            };
                            ai(i, o.measure()),
                            Li(n, o.latestValues, null === (t = o.snapshot) || void 0 === t ? void 0 : t.layout, i)
                        }
                    }
                    return si(this.latestValues) && Li(n, this.latestValues),
                    n
                }
                ,
                e.prototype.setTargetDelta = function(e) {
                    this.targetDelta = e,
                    this.root.scheduleUpdateProjection()
                }
                ,
                e.prototype.setOptions = function(e) {
                    var t;
                    this.options = Ut(Ut(Ut({}, this.options), e), {
                        crossfade: null === (t = e.crossfade) || void 0 === t || t
                    })
                }
                ,
                e.prototype.clearMeasurements = function() {
                    this.scroll = void 0,
                    this.layout = void 0,
                    this.snapshot = void 0,
                    this.prevTransformTemplateValue = void 0,
                    this.targetDelta = void 0,
                    this.target = void 0,
                    this.isLayoutDirty = !1
                }
                ,
                e.prototype.resolveTargetDelta = function() {
                    var e, t, n, r, o = this.options, i = o.layout, a = o.layoutId;
                    this.layout && (i || a) && (this.targetDelta || this.relativeTarget || (this.relativeParent = this.getClosestProjectingParent(),
                    this.relativeParent && this.relativeParent.layout && (this.relativeTarget = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    },
                    this.relativeTargetOrigin = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    },
                    Ai(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual),
                    ai(this.relativeTarget, this.relativeTargetOrigin))),
                    (this.relativeTarget || this.targetDelta) && (this.target || (this.target = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    },
                    this.targetWithTransforms = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    }),
                    this.relativeTarget && this.relativeTargetOrigin && (null === (e = this.relativeParent) || void 0 === e ? void 0 : e.target) ? (t = this.target,
                    n = this.relativeTarget,
                    r = this.relativeParent.target,
                    _i(t.x, n.x, r.x),
                    _i(t.y, n.y, r.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.actual) : ai(this.target, this.layout.actual),
                    vi(this.target, this.targetDelta)) : ai(this.target, this.layout.actual),
                    this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1,
                    this.relativeParent = this.getClosestProjectingParent(),
                    this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target && (this.relativeTarget = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    },
                    this.relativeTargetOrigin = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    },
                    Ai(this.relativeTargetOrigin, this.target, this.relativeParent.target),
                    ai(this.relativeTarget, this.relativeTargetOrigin)))))
                }
                ,
                e.prototype.getClosestProjectingParent = function() {
                    if (this.parent && !si(this.parent.latestValues))
                        return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
                }
                ,
                e.prototype.calcProjection = function() {
                    var e, t = this.options, n = t.layout, r = t.layoutId;
                    if (this.isTreeAnimating = Boolean((null === (e = this.parent) || void 0 === e ? void 0 : e.isTreeAnimating) || this.currentAnimation || this.pendingAnimation),
                    this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                    this.layout && (n || r)) {
                        var o = this.getLead();
                        ai(this.layoutCorrected, this.layout.actual),
                        function(e, t, n, r) {
                            var o, i;
                            void 0 === r && (r = !1);
                            var a = n.length;
                            if (a) {
                                var u, l;
                                t.x = t.y = 1;
                                for (var s = 0; s < a; s++)
                                    l = (u = n[s]).projectionDelta,
                                    "contents" !== (null === (i = null === (o = u.instance) || void 0 === o ? void 0 : o.style) || void 0 === i ? void 0 : i.display) && (r && u.options.layoutScroll && u.scroll && u !== u.root && bi(e, {
                                        x: -u.scroll.x,
                                        y: -u.scroll.y
                                    }),
                                    l && (t.x *= l.x.scale,
                                    t.y *= l.y.scale,
                                    vi(e, l)),
                                    r && si(u.latestValues) && bi(e, u.latestValues))
                            }
                        }(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== o);
                        var i = o.target;
                        if (i) {
                            this.projectionDelta || (this.projectionDelta = {
                                x: {
                                    translate: 0,
                                    scale: 1,
                                    origin: 0,
                                    originPoint: 0
                                },
                                y: {
                                    translate: 0,
                                    scale: 1,
                                    origin: 0,
                                    originPoint: 0
                                }
                            },
                            this.projectionDeltaWithTransform = {
                                x: {
                                    translate: 0,
                                    scale: 1,
                                    origin: 0,
                                    originPoint: 0
                                },
                                y: {
                                    translate: 0,
                                    scale: 1,
                                    origin: 0,
                                    originPoint: 0
                                }
                            });
                            var a = this.treeScale.x
                              , u = this.treeScale.y
                              , l = this.projectionTransform;
                            Oi(this.projectionDelta, this.layoutCorrected, i, this.latestValues),
                            this.projectionTransform = Ui(this.projectionDelta, this.treeScale),
                            this.projectionTransform === l && this.treeScale.x === a && this.treeScale.y === u || (this.hasProjected = !0,
                            this.scheduleRender(),
                            this.notifyListeners("projectionUpdate", i))
                        }
                    }
                }
                ,
                e.prototype.hide = function() {
                    this.isVisible = !1
                }
                ,
                e.prototype.show = function() {
                    this.isVisible = !0
                }
                ,
                e.prototype.scheduleRender = function(e) {
                    var t, n, r;
                    void 0 === e && (e = !0),
                    null === (n = (t = this.options).scheduleRender) || void 0 === n || n.call(t),
                    e && (null === (r = this.getStack()) || void 0 === r || r.scheduleRender()),
                    this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                }
                ,
                e.prototype.setAnimationOrigin = function(e, t) {
                    var n, r = this;
                    void 0 === t && (t = !1);
                    var o = this.snapshot
                      , i = (null === o || void 0 === o ? void 0 : o.latestValues) || {}
                      , a = Ut({}, this.latestValues)
                      , u = {
                        x: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                        },
                        y: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                        }
                    };
                    this.relativeTarget = this.relativeTargetOrigin = void 0,
                    this.attemptToResolveRelativeTarget = !t;
                    var l = {
                        x: {
                            min: 0,
                            max: 0
                        },
                        y: {
                            min: 0,
                            max: 0
                        }
                    }
                      , s = null === o || void 0 === o ? void 0 : o.isShared
                      , c = ((null === (n = this.getStack()) || void 0 === n ? void 0 : n.members.length) || 0) <= 1
                      , f = Boolean(s && !c && !0 === this.options.crossfade && !this.path.some(pa));
                    this.mixTargetDelta = function(t) {
                        var n, o = t / 1e3;
                        fa(u.x, e.x, o),
                        fa(u.y, e.y, o),
                        r.setTargetDelta(u),
                        r.relativeTarget && r.relativeTargetOrigin && r.layout && (null === (n = r.relativeParent) || void 0 === n ? void 0 : n.layout) && (Ai(l, r.layout.actual, r.relativeParent.layout.actual),
                        function(e, t, n, r) {
                            da(e.x, t.x, n.x, r),
                            da(e.y, t.y, n.y, r)
                        }(r.relativeTarget, r.relativeTargetOrigin, l, o)),
                        s && (r.animationValues = a,
                        function(e, t, n, r, o, i) {
                            var a, u, l, s;
                            o ? (e.opacity = Mn(0, null !== (a = n.opacity) && void 0 !== a ? a : 1, ni(r)),
                            e.opacityExit = Mn(null !== (u = t.opacity) && void 0 !== u ? u : 1, 0, ri(r))) : i && (e.opacity = Mn(null !== (l = t.opacity) && void 0 !== l ? l : 1, null !== (s = n.opacity) && void 0 !== s ? s : 1, r));
                            for (var c = 0; c < ei; c++) {
                                var f = "border".concat(Jo[c], "Radius")
                                  , d = ti(t, f)
                                  , p = ti(n, f);
                                if ((void 0 !== d || void 0 !== p) && (d || (d = 0),
                                p || (p = 0),
                                "number" === typeof d && "number" === typeof p)) {
                                    var v = Math.max(Mn(d, p, r), 0);
                                    e[f] = v
                                }
                            }
                            (t.rotate || n.rotate) && (e.rotate = Mn(t.rotate || 0, n.rotate || 0, r))
                        }(a, i, r.latestValues, o, f, c)),
                        r.root.scheduleUpdateProjection(),
                        r.scheduleRender()
                    }
                    ,
                    this.mixTargetDelta(0)
                }
                ,
                e.prototype.startAnimation = function(e) {
                    var t, n, r = this;
                    null === (t = this.currentAnimation) || void 0 === t || t.stop(),
                    this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()),
                    this.pendingAnimation && (kn.update(this.pendingAnimation),
                    this.pendingAnimation = void 0),
                    this.pendingAnimation = An.update((function() {
                        Ji.hasAnimatedSinceResize = !0,
                        r.currentAnimation = function(e, t, n) {
                            void 0 === n && (n = {});
                            var r = Vn(e) ? e : In(e);
                            return Zo("", r, t, n),
                            {
                                stop: function() {
                                    return r.stop()
                                },
                                isAnimating: function() {
                                    return r.isAnimating()
                                }
                            }
                        }(0, 1e3, Ut(Ut({}, e), {
                            onUpdate: function(t) {
                                var n;
                                r.mixTargetDelta(t),
                                null === (n = e.onUpdate) || void 0 === n || n.call(e, t)
                            },
                            onComplete: function() {
                                var t;
                                null === (t = e.onComplete) || void 0 === t || t.call(e),
                                r.completeAnimation()
                            }
                        })),
                        r.resumingFrom && (r.resumingFrom.currentAnimation = r.currentAnimation),
                        r.pendingAnimation = void 0
                    }
                    ))
                }
                ,
                e.prototype.completeAnimation = function() {
                    var e;
                    this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                    this.resumingFrom.preserveOpacity = void 0),
                    null === (e = this.getStack()) || void 0 === e || e.exitAnimationComplete(),
                    this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                    this.notifyListeners("animationComplete")
                }
                ,
                e.prototype.finishAnimation = function() {
                    var e;
                    this.currentAnimation && (null === (e = this.mixTargetDelta) || void 0 === e || e.call(this, 1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation()
                }
                ,
                e.prototype.applyTransformsToTarget = function() {
                    var e = this.getLead()
                      , t = e.targetWithTransforms
                      , n = e.target
                      , r = e.layout
                      , o = e.latestValues;
                    t && n && r && (ai(t, n),
                    bi(t, o),
                    Oi(this.projectionDeltaWithTransform, this.layoutCorrected, t, o))
                }
                ,
                e.prototype.registerSharedNode = function(e, t) {
                    var n, r, o;
                    this.sharedNodes.has(e) || this.sharedNodes.set(e, new Fi),
                    this.sharedNodes.get(e).add(t),
                    t.promote({
                        transition: null === (n = t.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
                        preserveFollowOpacity: null === (o = null === (r = t.options.initialPromotionConfig) || void 0 === r ? void 0 : r.shouldPreserveFollowOpacity) || void 0 === o ? void 0 : o.call(r, t)
                    })
                }
                ,
                e.prototype.isLead = function() {
                    var e = this.getStack();
                    return !e || e.lead === this
                }
                ,
                e.prototype.getLead = function() {
                    var e;
                    return this.options.layoutId && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead) || this
                }
                ,
                e.prototype.getPrevLead = function() {
                    var e;
                    return this.options.layoutId ? null === (e = this.getStack()) || void 0 === e ? void 0 : e.prevLead : void 0
                }
                ,
                e.prototype.getStack = function() {
                    var e = this.options.layoutId;
                    if (e)
                        return this.root.sharedNodes.get(e)
                }
                ,
                e.prototype.promote = function(e) {
                    var t = void 0 === e ? {} : e
                      , n = t.needsReset
                      , r = t.transition
                      , o = t.preserveFollowOpacity
                      , i = this.getStack();
                    i && i.promote(this, o),
                    n && (this.projectionDelta = void 0,
                    this.needsReset = !0),
                    r && this.setOptions({
                        transition: r
                    })
                }
                ,
                e.prototype.relegate = function() {
                    var e = this.getStack();
                    return !!e && e.relegate(this)
                }
                ,
                e.prototype.resetRotation = function() {
                    var e = this.options.visualElement;
                    if (e) {
                        for (var t = !1, n = {}, r = 0; r < $i.length; r++) {
                            var o = "rotate" + $i[r];
                            e.getStaticValue(o) && (t = !0,
                            n[o] = e.getStaticValue(o),
                            e.setStaticValue(o, 0))
                        }
                        if (t) {
                            for (var o in null === e || void 0 === e || e.syncRender(),
                            n)
                                e.setStaticValue(o, n[o]);
                            e.scheduleRender()
                        }
                    }
                }
                ,
                e.prototype.getProjectionStyles = function(e) {
                    var t, n, r, o, i, a;
                    void 0 === e && (e = {});
                    var u = {};
                    if (!this.instance || this.isSVG)
                        return u;
                    if (!this.isVisible)
                        return {
                            visibility: "hidden"
                        };
                    u.visibility = "";
                    var l = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate;
                    if (this.needsReset)
                        return this.needsReset = !1,
                        u.opacity = "",
                        u.pointerEvents = Zi(e.pointerEvents) || "",
                        u.transform = l ? l(this.latestValues, "") : "none",
                        u;
                    var s = this.getLead();
                    if (!this.projectionDelta || !this.layout || !s.target) {
                        var c = {};
                        return this.options.layoutId && (c.opacity = null !== (n = this.latestValues.opacity) && void 0 !== n ? n : 1,
                        c.pointerEvents = Zi(e.pointerEvents) || ""),
                        this.hasProjected && !si(this.latestValues) && (c.transform = l ? l({}, "") : "none",
                        this.hasProjected = !1),
                        c
                    }
                    var f = s.animationValues || s.latestValues;
                    this.applyTransformsToTarget(),
                    u.transform = Ui(this.projectionDeltaWithTransform, this.treeScale, f),
                    l && (u.transform = l(f, u.transform));
                    var d = this.projectionDelta
                      , p = d.x
                      , v = d.y;
                    for (var h in u.transformOrigin = "".concat(100 * p.origin, "% ").concat(100 * v.origin, "% 0"),
                    s.animationValues ? u.opacity = s === this ? null !== (o = null !== (r = f.opacity) && void 0 !== r ? r : this.latestValues.opacity) && void 0 !== o ? o : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = s === this ? null !== (i = f.opacity) && void 0 !== i ? i : "" : null !== (a = f.opacityExit) && void 0 !== a ? a : 0,
                    zi)
                        if (void 0 !== f[h]) {
                            var m = zi[h]
                              , y = m.correct
                              , g = m.applyTo
                              , b = y(f[h], s);
                            if (g)
                                for (var w = g.length, x = 0; x < w; x++)
                                    u[g[x]] = b;
                            else
                                u[h] = b
                        }
                    return this.options.layoutId && (u.pointerEvents = s === this ? Zi(e.pointerEvents) || "" : "none"),
                    u
                }
                ,
                e.prototype.clearSnapshot = function() {
                    this.resumeFrom = this.snapshot = void 0
                }
                ,
                e.prototype.resetTree = function() {
                    this.root.nodes.forEach((function(e) {
                        var t;
                        return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop()
                    }
                    )),
                    this.root.nodes.forEach(oa),
                    this.root.sharedNodes.clear()
                }
                ,
                e
            }()
        }
        function ta(e) {
            e.updateLayout()
        }
        function na(e) {
            var t, n, r, o, i = null !== (n = null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) && void 0 !== n ? n : e.snapshot;
            if (e.isLead() && e.layout && i && e.hasListeners("didUpdate")) {
                var a = e.layout
                  , u = a.actual
                  , l = a.measured;
                "size" === e.options.animationType ? Bi((function(e) {
                    var t = i.isShared ? i.measured[e] : i.layout[e]
                      , n = ki(t);
                    t.min = u[e].min,
                    t.max = t.min + n
                }
                )) : "position" === e.options.animationType && Bi((function(e) {
                    var t = i.isShared ? i.measured[e] : i.layout[e]
                      , n = ki(u[e]);
                    t.max = t.min + n
                }
                ));
                var s = {
                    x: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                    },
                    y: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                    }
                };
                Oi(s, u, i.layout);
                var c = {
                    x: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                    },
                    y: {
                        translate: 0,
                        scale: 1,
                        origin: 0,
                        originPoint: 0
                    }
                };
                i.isShared ? Oi(c, e.applyTransform(l, !0), i.measured) : Oi(c, u, i.layout);
                var f = !Ii(s)
                  , d = !1;
                if (!e.resumeFrom && (e.relativeParent = e.getClosestProjectingParent(),
                e.relativeParent && !e.relativeParent.resumeFrom)) {
                    var p = e.relativeParent
                      , v = p.snapshot
                      , h = p.layout;
                    if (v && h) {
                        var m = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        Ai(m, i.layout, v.layout);
                        var y = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        Ai(y, u, h.actual),
                        Vi(m, y) || (d = !0)
                    }
                }
                e.notifyListeners("didUpdate", {
                    layout: u,
                    snapshot: i,
                    delta: c,
                    layoutDelta: s,
                    hasLayoutChanged: f,
                    hasRelativeTargetChanged: d
                })
            } else
                e.isLead() && (null === (o = (r = e.options).onExitComplete) || void 0 === o || o.call(r));
            e.options.transition = void 0
        }
        function ra(e) {
            e.clearSnapshot()
        }
        function oa(e) {
            e.clearMeasurements()
        }
        function ia(e) {
            e.resetTransform()
        }
        function aa(e) {
            e.finishAnimation(),
            e.targetDelta = e.relativeTarget = e.target = void 0
        }
        function ua(e) {
            e.resolveTargetDelta()
        }
        function la(e) {
            e.calcProjection()
        }
        function sa(e) {
            e.resetRotation()
        }
        function ca(e) {
            e.removeLeadSnapshot()
        }
        function fa(e, t, n) {
            e.translate = Mn(t.translate, 0, n),
            e.scale = Mn(t.scale, 1, n),
            e.origin = t.origin,
            e.originPoint = t.originPoint
        }
        function da(e, t, n, r) {
            e.min = Mn(t.min, n.min, r),
            e.max = Mn(t.max, n.max, r)
        }
        function pa(e) {
            return e.animationValues && void 0 !== e.animationValues.opacityExit
        }
        var va = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        };
        function ha(e, t) {
            for (var n = e.root, r = e.path.length - 1; r >= 0; r--)
                if (Boolean(e.path[r].instance)) {
                    n = e.path[r];
                    break
                }
            var o = (n && n !== e.root ? n.instance : document).querySelector('[data-projection-id="'.concat(t, '"]'));
            o && e.mount(o, !0)
        }
        function ma(e) {
            e.min = Math.round(e.min),
            e.max = Math.round(e.max)
        }
        function ya(e) {
            ma(e.x),
            ma(e.y)
        }
        var ga = 1;
        var ba = (0,
        e.createContext)({})
          , wa = (0,
        e.createContext)({});
        var xa = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return zt(t, e),
            t.prototype.getSnapshotBeforeUpdate = function() {
                return this.updateProps(),
                null
            }
            ,
            t.prototype.componentDidUpdate = function() {}
            ,
            t.prototype.updateProps = function() {
                var e = this.props
                  , t = e.visualElement
                  , n = e.props;
                t && t.setProps(n)
            }
            ,
            t.prototype.render = function() {
                return this.props.children
            }
            ,
            t
        }(e.Component);
        function Sa(t) {
            var n = t.preloadedFeatures
              , r = t.createVisualElement
              , o = t.projectionNodeConstructor
              , i = t.useRender
              , a = t.useVisualState
              , u = t.Component;
            return n && function(e) {
                for (var t in e)
                    null !== e[t] && ("projectionNodeConstructor" === t ? Qt.projectionNodeConstructor = e[t] : Qt[t].Component = e[t])
            }(n),
            (0,
            e.forwardRef)((function(t, n) {
                var l = function(t) {
                    var n, r = t.layoutId, o = null === (n = (0,
                    e.useContext)(ba)) || void 0 === n ? void 0 : n.id;
                    return o && void 0 !== r ? o + "-" + r : r
                }(t);
                t = Ut(Ut({}, t), {
                    layoutId: l
                });
                var s = (0,
                e.useContext)(Gt)
                  , c = null
                  , f = fn(t)
                  , d = s.isStatic ? void 0 : pn((function() {
                    if (Ji.hasEverUpdated)
                        return ga++
                }
                ))
                  , p = a(t, s.isStatic);
                return !s.isStatic && en && (f.visualElement = nn(u, p, Ut(Ut({}, s), t), r),
                function(t, n, r, o) {
                    var i, a = n.layoutId, u = n.layout, l = n.drag, s = n.dragConstraints, c = n.layoutScroll, f = (0,
                    e.useContext)(wa);
                    o && r && !(null === r || void 0 === r ? void 0 : r.projection) && (r.projection = new o(t,r.getLatestValues(),null === (i = r.parent) || void 0 === i ? void 0 : i.projection),
                    r.projection.setOptions({
                        layoutId: a,
                        layout: u,
                        alwaysMeasureLayout: Boolean(l) || s && rn(s),
                        visualElement: r,
                        scheduleRender: function() {
                            return r.scheduleRender()
                        },
                        animationType: "string" === typeof u ? u : "both",
                        initialPromotionConfig: f,
                        layoutScroll: c
                    }))
                }(d, t, f.visualElement, o || Qt.projectionNodeConstructor),
                c = function(t, n, r) {
                    var o = [];
                    if ((0,
                    e.useContext)(qt),
                    !n)
                        return null;
                    for (var i = 0; i < Xt; i++) {
                        var a = Yt[i]
                          , u = Qt[a]
                          , l = u.isEnabled
                          , s = u.Component;
                        l(t) && s && o.push(e.createElement(s, Ut({
                            key: a
                        }, t, {
                            visualElement: n
                        })))
                    }
                    return o
                }(t, f.visualElement)),
                e.createElement(xa, {
                    visualElement: f.visualElement,
                    props: Ut(Ut({}, s), t)
                }, c, e.createElement(Zt.Provider, {
                    value: f
                }, i(u, t, d, function(t, n, r) {
                    return (0,
                    e.useCallback)((function(e) {
                        var o;
                        e && (null === (o = t.mount) || void 0 === o || o.call(t, e)),
                        n && (e ? n.mount(e) : n.unmount()),
                        r && ("function" === typeof r ? r(e) : rn(r) && (r.current = e))
                    }
                    ), [n])
                }(p, f.visualElement, n), p, s.isStatic, f.visualElement)))
            }
            ))
        }
        function Ea(e) {
            function t(t, n) {
                return void 0 === n && (n = {}),
                Sa(e(t, n))
            }
            if ("undefined" === typeof Proxy)
                return t;
            var n = new Map;
            return new Proxy(t,{
                get: function(e, r) {
                    return n.has(r) || n.set(r, t(r)),
                    n.get(r)
                }
            })
        }
        var ka = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view"];
        function Pa(e) {
            return "string" === typeof e && !e.includes("-") && !!(ka.indexOf(e) > -1 || /[A-Z]/.test(e))
        }
        function Ca(e, t) {
            var n = t.layout
              , r = t.layoutId;
            return Qi(e) || Yi(e) || (n || void 0 !== r) && (!!zi[e] || "opacity" === e)
        }
        var Oa = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        };
        function _a(e) {
            return e.startsWith("--")
        }
        var Ta = function(e, t) {
            return t && "number" === typeof e ? t.transform(e) : e
        };
        function Aa(e, t, n, r) {
            var o, i = e.style, a = e.vars, u = e.transform, l = e.transformKeys, s = e.transformOrigin;
            l.length = 0;
            var c = !1
              , f = !1
              , d = !0;
            for (var p in t) {
                var v = t[p];
                if (_a(p))
                    a[p] = v;
                else {
                    var h = zo[p]
                      , m = Ta(v, h);
                    if (Qi(p)) {
                        if (c = !0,
                        u[p] = m,
                        l.push(p),
                        !d)
                            continue;
                        v !== (null !== (o = h.default) && void 0 !== o ? o : 0) && (d = !1)
                    } else
                        Yi(p) ? (s[p] = m,
                        f = !0) : i[p] = m
                }
            }
            c ? i.transform = function(e, t, n, r) {
                var o = e.transform
                  , i = e.transformKeys
                  , a = t.enableHardwareAcceleration
                  , u = void 0 === a || a
                  , l = t.allowTransformNone
                  , s = void 0 === l || l
                  , c = "";
                i.sort(Hi);
                for (var f = !1, d = i.length, p = 0; p < d; p++) {
                    var v = i[p];
                    c += "".concat(Oa[v] || v, "(").concat(o[v], ") "),
                    "z" === v && (f = !0)
                }
                return !f && u ? c += "translateZ(0)" : c = c.trim(),
                r ? c = r(o, n ? "" : c) : s && n && (c = "none"),
                c
            }(e, n, d, r) : r && (i.transform = r({}, "")),
            f && (i.transformOrigin = function(e) {
                var t = e.originX
                  , n = void 0 === t ? "50%" : t
                  , r = e.originY
                  , o = void 0 === r ? "50%" : r
                  , i = e.originZ
                  , a = void 0 === i ? 0 : i;
                return "".concat(n, " ").concat(o, " ").concat(a)
            }(s))
        }
        var Ma = function() {
            return {
                style: {},
                transform: {},
                transformKeys: [],
                transformOrigin: {},
                vars: {}
            }
        };
        function Na(e, t, n) {
            for (var r in t)
                Vn(t[r]) || Ca(r, n) || (e[r] = t[r])
        }
        function Ra(t, n, r) {
            var o = {};
            return Na(o, t.style || {}, t),
            Object.assign(o, function(t, n, r) {
                var o = t.transformTemplate;
                return (0,
                e.useMemo)((function() {
                    var e = {
                        style: {},
                        transform: {},
                        transformKeys: [],
                        transformOrigin: {},
                        vars: {}
                    };
                    Aa(e, n, {
                        enableHardwareAcceleration: !r
                    }, o);
                    var t = e.style;
                    return Ut(Ut({}, e.vars), t)
                }
                ), [n])
            }(t, n, r)),
            t.transformValues && (o = t.transformValues(o)),
            o
        }
        function ja(e, t, n) {
            var r = {}
              , o = Ra(e, t, n);
            return Boolean(e.drag) && !1 !== e.dragListener && (r.draggable = !1,
            o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none",
            o.touchAction = !0 === e.drag ? "none" : "pan-".concat("x" === e.drag ? "y" : "x")),
            r.style = o,
            r
        }
        var La = new Set(["initial", "animate", "exit", "style", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "whileDrag", "onPan", "onPanStart", "onPanEnd", "onPanSessionStart", "onTap", "onTapStart", "onTapCancel", "onHoverStart", "onHoverEnd", "whileFocus", "whileTap", "whileHover", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "layoutScroll"]);
        function Da(e) {
            return La.has(e)
        }
        var Ia = function(e) {
            return !Da(e)
        };
        try {
            var Va = require("@emotion/is-prop-valid").default;
            Ia = function(e) {
                return e.startsWith("on") ? !Da(e) : Va(e)
            }
        } catch (Js) {}
        function Fa(e, t, n) {
            return "string" === typeof e ? e : vr.transform(t + n * e)
        }
        var za = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        }
          , Ua = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        };
        function Ba(e, t, n, r) {
            var o = t.attrX
              , i = t.attrY
              , a = t.originX
              , u = t.originY
              , l = t.pathLength
              , s = t.pathSpacing
              , c = void 0 === s ? 1 : s
              , f = t.pathOffset
              , d = void 0 === f ? 0 : f;
            Aa(e, Bt(t, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]), n, r),
            e.attrs = e.style,
            e.style = {};
            var p = e.attrs
              , v = e.style
              , h = e.dimensions;
            p.transform && (h && (v.transform = p.transform),
            delete p.transform),
            h && (void 0 !== a || void 0 !== u || v.transform) && (v.transformOrigin = function(e, t, n) {
                var r = Fa(t, e.x, e.width)
                  , o = Fa(n, e.y, e.height);
                return "".concat(r, " ").concat(o)
            }(h, void 0 !== a ? a : .5, void 0 !== u ? u : .5)),
            void 0 !== o && (p.x = o),
            void 0 !== i && (p.y = i),
            void 0 !== l && function(e, t, n, r, o) {
                void 0 === n && (n = 1),
                void 0 === r && (r = 0),
                void 0 === o && (o = !0),
                e.pathLength = 1;
                var i = o ? za : Ua;
                e[i.offset] = vr.transform(-r);
                var a = vr.transform(t)
                  , u = vr.transform(n);
                e[i.array] = "".concat(a, " ").concat(u)
            }(p, l, c, d, !1)
        }
        var $a = function() {
            return Ut(Ut({}, {
                style: {},
                transform: {},
                transformKeys: [],
                transformOrigin: {},
                vars: {}
            }), {
                attrs: {}
            })
        };
        function Wa(t, n) {
            var r = (0,
            e.useMemo)((function() {
                var e = $a();
                return Ba(e, n, {
                    enableHardwareAcceleration: !1
                }, t.transformTemplate),
                Ut(Ut({}, e.attrs), {
                    style: Ut({}, e.style)
                })
            }
            ), [n]);
            if (t.style) {
                var o = {};
                Na(o, t.style, t),
                r.style = Ut(Ut({}, o), r.style)
            }
            return r
        }
        function Ha(t) {
            void 0 === t && (t = !1);
            return function(n, r, o, i, a, u) {
                var l = a.latestValues
                  , s = (Pa(n) ? Wa : ja)(r, l, u)
                  , c = function(e, t, n) {
                    var r = {};
                    for (var o in e)
                        (Ia(o) || !0 === n && Da(o) || !t && !Da(o) || e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
                    return r
                }(r, "string" === typeof n, t)
                  , f = Ut(Ut(Ut({}, c), s), {
                    ref: i
                });
                return o && (f["data-projection-id"] = o),
                (0,
                e.createElement)(n, f)
            }
        }
        var Ka = /([a-z])([A-Z])/g
          , Qa = function(e) {
            return e.replace(Ka, "$1-$2").toLowerCase()
        };
        function qa(e, t, n, r) {
            var o = t.style
              , i = t.vars;
            for (var a in Object.assign(e.style, o, r && r.getProjectionStyles(n)),
            i)
                e.style.setProperty(a, i[a])
        }
        var Ya = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength"]);
        function Xa(e, t) {
            for (var n in qa(e, t),
            t.attrs)
                e.setAttribute(Ya.has(n) ? n : Qa(n), t.attrs[n])
        }
        function Ga(e) {
            var t = e.style
              , n = {};
            for (var r in t)
                (Vn(t[r]) || Ca(r, e)) && (n[r] = t[r]);
            return n
        }
        function Za(e) {
            var t = Ga(e);
            for (var n in e) {
                if (Vn(e[n]))
                    t["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = e[n]
            }
            return t
        }
        function Ja(e) {
            return "object" === typeof e && "function" === typeof e.start
        }
        function eu(e, t, n, r) {
            var o = e.scrapeMotionValuesFromProps
              , i = e.createRenderState
              , a = e.onMount
              , u = {
                latestValues: nu(t, n, r, o),
                renderState: i()
            };
            return a && (u.mount = function(e) {
                return a(t, e, u)
            }
            ),
            u
        }
        var tu = function(t) {
            return function(n, r) {
                var o = (0,
                e.useContext)(Zt)
                  , i = (0,
                e.useContext)(Jt);
                return r ? eu(t, n, o, i) : pn((function() {
                    return eu(t, n, o, i)
                }
                ))
            }
        };
        function nu(e, t, n, r) {
            var o = {}
              , i = !1 === (null === n || void 0 === n ? void 0 : n.initial)
              , a = r(e);
            for (var u in a)
                o[u] = Zi(a[u]);
            var l = e.initial
              , s = e.animate
              , c = sn(e)
              , f = cn(e);
            t && f && !c && !1 !== e.inherit && (null !== l && void 0 !== l || (l = t.initial),
            null !== s && void 0 !== s || (s = t.animate));
            var d = i || !1 === l
              , p = d ? s : l;
            p && "boolean" !== typeof p && !Ja(p) && (Array.isArray(p) ? p : [p]).forEach((function(t) {
                var n = un(e, t);
                if (n) {
                    var r = n.transitionEnd;
                    n.transition;
                    var i = Bt(n, ["transitionEnd", "transition"]);
                    for (var a in i) {
                        var u = i[a];
                        if (Array.isArray(u))
                            u = u[d ? u.length - 1 : 0];
                        null !== u && (o[a] = u)
                    }
                    for (var a in r)
                        o[a] = r[a]
                }
            }
            ));
            return o
        }
        var ru, ou = {
            useVisualState: tu({
                scrapeMotionValuesFromProps: Za,
                createRenderState: $a,
                onMount: function(e, t, n) {
                    var r = n.renderState
                      , o = n.latestValues;
                    try {
                        r.dimensions = "function" === typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
                    } catch (i) {
                        r.dimensions = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }
                    }
                    Ba(r, o, {
                        enableHardwareAcceleration: !1
                    }, e.transformTemplate),
                    Xa(t, r)
                }
            })
        }, iu = {
            useVisualState: tu({
                scrapeMotionValuesFromProps: Ga,
                createRenderState: Ma
            })
        };
        function au(e, t, n, r) {
            return e.addEventListener(t, n, r),
            function() {
                return e.removeEventListener(t, n, r)
            }
        }
        function uu(t, n, r, o) {
            (0,
            e.useEffect)((function() {
                var e = t.current;
                if (r && e)
                    return au(e, n, r, o)
            }
            ), [t, n, r, o])
        }
        function lu(e) {
            return "undefined" !== typeof PointerEvent && e instanceof PointerEvent ? !("mouse" !== e.pointerType) : e instanceof MouseEvent
        }
        function su(e) {
            return !!e.touches
        }
        !function(e) {
            e.Animate = "animate",
            e.Hover = "whileHover",
            e.Tap = "whileTap",
            e.Drag = "whileDrag",
            e.Focus = "whileFocus",
            e.InView = "whileInView",
            e.Exit = "exit"
        }(ru || (ru = {}));
        var cu = {
            pageX: 0,
            pageY: 0
        };
        function fu(e, t) {
            void 0 === t && (t = "page");
            var n = e.touches[0] || e.changedTouches[0] || cu;
            return {
                x: n[t + "X"],
                y: n[t + "Y"]
            }
        }
        function du(e, t) {
            return void 0 === t && (t = "page"),
            {
                x: e[t + "X"],
                y: e[t + "Y"]
            }
        }
        function pu(e, t) {
            return void 0 === t && (t = "page"),
            {
                point: su(e) ? fu(e, t) : du(e, t)
            }
        }
        var vu = function(e, t) {
            void 0 === t && (t = !1);
            var n, r = function(t) {
                return e(t, pu(t))
            };
            return t ? (n = r,
            function(e) {
                var t = e instanceof MouseEvent;
                (!t || t && 0 === e.button) && n(e)
            }
            ) : r
        }
          , hu = {
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointercancel: "mousecancel",
            pointerover: "mouseover",
            pointerout: "mouseout",
            pointerenter: "mouseenter",
            pointerleave: "mouseleave"
        }
          , mu = {
            pointerdown: "touchstart",
            pointermove: "touchmove",
            pointerup: "touchend",
            pointercancel: "touchcancel"
        };
        function yu(e) {
            return en && null === window.onpointerdown ? e : en && null === window.ontouchstart ? mu[e] : en && null === window.onmousedown ? hu[e] : e
        }
        function gu(e, t, n, r) {
            return au(e, yu(t), vu(n, "pointerdown" === t), r)
        }
        function bu(e, t, n, r) {
            return uu(e, yu(t), n && vu(n, "pointerdown" === t), r)
        }
        function wu(e) {
            var t = null;
            return function() {
                return null === t && (t = e,
                function() {
                    t = null
                }
                )
            }
        }
        var xu = wu("dragHorizontal")
          , Su = wu("dragVertical");
        function Eu(e) {
            var t = !1;
            if ("y" === e)
                t = Su();
            else if ("x" === e)
                t = xu();
            else {
                var n = xu()
                  , r = Su();
                n && r ? t = function() {
                    n(),
                    r()
                }
                : (n && n(),
                r && r())
            }
            return t
        }
        function ku() {
            var e = Eu(!0);
            return !e || (e(),
            !1)
        }
        function Pu(e, t, n) {
            return function(r, o) {
                var i;
                lu(r) && !ku() && (null === (i = e.animationState) || void 0 === i || i.setActive(ru.Hover, t),
                null === n || void 0 === n || n(r, o))
            }
        }
        var Cu = function e(t, n) {
            return !!n && (t === n || e(t, n.parentElement))
        };
        function Ou(t) {
            return (0,
            e.useEffect)((function() {
                return function() {
                    return t()
                }
            }
            ), [])
        }
        var _u = new WeakMap
          , Tu = new WeakMap
          , Au = function(e) {
            var t;
            null === (t = _u.get(e.target)) || void 0 === t || t(e)
        }
          , Mu = function(e) {
            e.forEach(Au)
        };
        function Nu(e, t, n) {
            var r = function(e) {
                var t = e.root
                  , n = Bt(e, ["root"])
                  , r = t || document;
                Tu.has(r) || Tu.set(r, {});
                var o = Tu.get(r)
                  , i = JSON.stringify(n);
                return o[i] || (o[i] = new IntersectionObserver(Mu,Ut({
                    root: t
                }, n))),
                o[i]
            }(t);
            return _u.set(e, n),
            r.observe(e),
            function() {
                _u.delete(e),
                r.unobserve(e)
            }
        }
        var Ru = {
            some: 0,
            all: 1
        };
        function ju(t, n, r, o) {
            var i = o.root
              , a = o.margin
              , u = o.amount
              , l = void 0 === u ? "some" : u
              , s = o.once;
            (0,
            e.useEffect)((function() {
                if (t) {
                    var e = {
                        root: null === i || void 0 === i ? void 0 : i.current,
                        rootMargin: a,
                        threshold: "number" === typeof l ? l : Ru[l]
                    };
                    return Nu(r.getInstance(), e, (function(e) {
                        var t, o = e.isIntersecting;
                        if (n.isInView !== o && (n.isInView = o,
                        !s || o || !n.hasEnteredView)) {
                            o && (n.hasEnteredView = !0),
                            null === (t = r.animationState) || void 0 === t || t.setActive(ru.InView, o);
                            var i = r.getProps()
                              , a = o ? i.onViewportEnter : i.onViewportLeave;
                            null === a || void 0 === a || a(e)
                        }
                    }
                    ))
                }
            }
            ), [t, i, a, l])
        }
        function Lu(t, n, r) {
            (0,
            e.useEffect)((function() {
                t && requestAnimationFrame((function() {
                    var e;
                    n.hasEnteredView = !0;
                    var t = r.getProps().onViewportEnter;
                    null === t || void 0 === t || t(null),
                    null === (e = r.animationState) || void 0 === e || e.setActive(ru.InView, !0)
                }
                ))
            }
            ), [t])
        }
        var Du = function(e) {
            return function(t) {
                return e(t),
                null
            }
        }
          , Iu = {
            inView: Du((function(t) {
                var n = t.visualElement
                  , r = t.whileInView
                  , o = t.onViewportEnter
                  , i = t.onViewportLeave
                  , a = t.viewport
                  , u = void 0 === a ? {} : a
                  , l = (0,
                e.useRef)({
                    hasEnteredView: !1,
                    isInView: !1
                })
                  , s = Boolean(r || o || i);
                u.once && l.current.hasEnteredView && (s = !1),
                ("undefined" === typeof IntersectionObserver ? Lu : ju)(s, l.current, n, u)
            }
            )),
            tap: Du((function(t) {
                var n = t.onTap
                  , r = t.onTapStart
                  , o = t.onTapCancel
                  , i = t.whileTap
                  , a = t.visualElement
                  , u = n || r || o || i
                  , l = (0,
                e.useRef)(!1)
                  , s = (0,
                e.useRef)(null);
                function c() {
                    var e;
                    null === (e = s.current) || void 0 === e || e.call(s),
                    s.current = null
                }
                function f() {
                    var e;
                    return c(),
                    l.current = !1,
                    null === (e = a.animationState) || void 0 === e || e.setActive(ru.Tap, !1),
                    !ku()
                }
                function d(e, t) {
                    f() && (Cu(a.getInstance(), e.target) ? null === n || void 0 === n || n(e, t) : null === o || void 0 === o || o(e, t))
                }
                function p(e, t) {
                    f() && (null === o || void 0 === o || o(e, t))
                }
                bu(a, "pointerdown", u ? function(e, t) {
                    var n;
                    c(),
                    l.current || (l.current = !0,
                    s.current = Ir(gu(window, "pointerup", d), gu(window, "pointercancel", p)),
                    null === (n = a.animationState) || void 0 === n || n.setActive(ru.Tap, !0),
                    null === r || void 0 === r || r(e, t))
                }
                : void 0),
                Ou(c)
            }
            )),
            focus: Du((function(e) {
                var t = e.whileFocus
                  , n = e.visualElement;
                uu(n, "focus", t ? function() {
                    var e;
                    null === (e = n.animationState) || void 0 === e || e.setActive(ru.Focus, !0)
                }
                : void 0),
                uu(n, "blur", t ? function() {
                    var e;
                    null === (e = n.animationState) || void 0 === e || e.setActive(ru.Focus, !1)
                }
                : void 0)
            }
            )),
            hover: Du((function(e) {
                var t = e.onHoverStart
                  , n = e.onHoverEnd
                  , r = e.whileHover
                  , o = e.visualElement;
                bu(o, "pointerenter", t || r ? Pu(o, !0, t) : void 0),
                bu(o, "pointerleave", n || r ? Pu(o, !1, n) : void 0)
            }
            ))
        };
        function Vu() {
            var t = (0,
            e.useContext)(Jt);
            if (null === t)
                return [!0, null];
            var n = t.isPresent
              , r = t.onExitComplete
              , o = t.register
              , i = Uu();
            (0,
            e.useEffect)((function() {
                return o(i)
            }
            ), []);
            return !n && r ? [!1, function() {
                return null === r || void 0 === r ? void 0 : r(i)
            }
            ] : [!0]
        }
        var Fu = 0
          , zu = function() {
            return Fu++
        }
          , Uu = function() {
            return pn(zu)
        };
        function Bu(e, t) {
            if (!Array.isArray(t))
                return !1;
            var n = t.length;
            if (n !== e.length)
                return !1;
            for (var r = 0; r < n; r++)
                if (t[r] !== e[r])
                    return !1;
            return !0
        }
        var $u = function(e) {
            return /^\-?\d*\.?\d+$/.test(e)
        }
          , Wu = function(e) {
            return /^0[^.\s]+$/.test(e)
        }
          , Hu = function(e) {
            return function(t) {
                return t.test(e)
            }
        }
          , Ku = [nr, vr, pr, dr, mr, hr, {
            test: function(e) {
                return "auto" === e
            },
            parse: function(e) {
                return e
            }
        }]
          , Qu = function(e) {
            return Ku.find(Hu(e))
        }
          , qu = Ht(Ht([], Wt(Ku), !1), [Or, jr], !1)
          , Yu = function(e) {
            return qu.find(Hu(e))
        };
        function Xu(e, t, n) {
            e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, In(n))
        }
        function Gu(e, t) {
            var n = ln(e, t)
              , r = n ? e.makeTargetAnimatable(n, !1) : {}
              , o = r.transitionEnd
              , i = void 0 === o ? {} : o;
            r.transition;
            var a = Bt(r, ["transitionEnd", "transition"]);
            for (var u in a = Ut(Ut({}, a), i)) {
                Xu(e, u, Ho(a[u]))
            }
        }
        function Zu(e, t) {
            if (t)
                return (t[e] || t.default || t).from
        }
        function Ju(e, t, n) {
            var r;
            void 0 === n && (n = {});
            var o = ln(e, t, n.custom)
              , i = (o || {}).transition
              , a = void 0 === i ? e.getDefaultTransition() || {} : i;
            n.transitionOverride && (a = n.transitionOverride);
            var u = o ? function() {
                return el(e, o, n)
            }
            : function() {
                return Promise.resolve()
            }
              , l = (null === (r = e.variantChildren) || void 0 === r ? void 0 : r.size) ? function(r) {
                void 0 === r && (r = 0);
                var o = a.delayChildren
                  , i = void 0 === o ? 0 : o
                  , u = a.staggerChildren
                  , l = a.staggerDirection;
                return function(e, t, n, r, o, i) {
                    void 0 === n && (n = 0);
                    void 0 === r && (r = 0);
                    void 0 === o && (o = 1);
                    var a = []
                      , u = (e.variantChildren.size - 1) * r
                      , l = 1 === o ? function(e) {
                        return void 0 === e && (e = 0),
                        e * r
                    }
                    : function(e) {
                        return void 0 === e && (e = 0),
                        u - e * r
                    }
                    ;
                    return Array.from(e.variantChildren).sort(tl).forEach((function(e, r) {
                        a.push(Ju(e, t, Ut(Ut({}, i), {
                            delay: n + l(r)
                        })).then((function() {
                            return e.notifyAnimationComplete(t)
                        }
                        )))
                    }
                    )),
                    Promise.all(a)
                }(e, t, i + r, u, l, n)
            }
            : function() {
                return Promise.resolve()
            }
              , s = a.when;
            if (s) {
                var c = Wt("beforeChildren" === s ? [u, l] : [l, u], 2)
                  , f = c[0]
                  , d = c[1];
                return f().then(d)
            }
            return Promise.all([u(), l(n.delay)])
        }
        function el(e, t, n) {
            var r, o = void 0 === n ? {} : n, i = o.delay, a = void 0 === i ? 0 : i, u = o.transitionOverride, l = o.type, s = e.makeTargetAnimatable(t), c = s.transition, f = void 0 === c ? e.getDefaultTransition() : c, d = s.transitionEnd, p = Bt(s, ["transition", "transitionEnd"]);
            u && (f = u);
            var v = []
              , h = l && (null === (r = e.animationState) || void 0 === r ? void 0 : r.getState()[l]);
            for (var m in p) {
                var y = e.getValue(m)
                  , g = p[m];
                if (!(!y || void 0 === g || h && nl(h, m))) {
                    var b = Zo(m, y, g, Ut({
                        delay: a
                    }, f));
                    v.push(b)
                }
            }
            return Promise.all(v).then((function() {
                d && Gu(e, d)
            }
            ))
        }
        function tl(e, t) {
            return e.sortNodePosition(t)
        }
        function nl(e, t) {
            var n = e.protectedKeys
              , r = e.needsAnimating
              , o = n.hasOwnProperty(t) && !0 !== r[t];
            return r[t] = !1,
            o
        }
        var rl = [ru.Animate, ru.InView, ru.Focus, ru.Hover, ru.Tap, ru.Drag, ru.Exit]
          , ol = Ht([], Wt(rl), !1).reverse()
          , il = rl.length;
        function al(e) {
            return function(t) {
                return Promise.all(t.map((function(t) {
                    var n = t.animation
                      , r = t.options;
                    return function(e, t, n) {
                        var r;
                        if (void 0 === n && (n = {}),
                        e.notifyAnimationStart(t),
                        Array.isArray(t)) {
                            var o = t.map((function(t) {
                                return Ju(e, t, n)
                            }
                            ));
                            r = Promise.all(o)
                        } else if ("string" === typeof t)
                            r = Ju(e, t, n);
                        else {
                            var i = "function" === typeof t ? ln(e, t, n.custom) : t;
                            r = el(e, i, n)
                        }
                        return r.then((function() {
                            return e.notifyAnimationComplete(t)
                        }
                        ))
                    }(e, n, r)
                }
                )))
            }
        }
        function ul(e) {
            var t = al(e)
              , n = function() {
                var e;
                return (e = {})[ru.Animate] = ll(!0),
                e[ru.InView] = ll(),
                e[ru.Hover] = ll(),
                e[ru.Tap] = ll(),
                e[ru.Drag] = ll(),
                e[ru.Focus] = ll(),
                e[ru.Exit] = ll(),
                e
            }()
              , r = {}
              , o = !0
              , i = function(t, n) {
                var r = ln(e, n);
                if (r) {
                    r.transition;
                    var o = r.transitionEnd
                      , i = Bt(r, ["transition", "transitionEnd"]);
                    t = Ut(Ut(Ut({}, t), i), o)
                }
                return t
            };
            function a(a, u) {
                for (var l, s = e.getProps(), c = e.getVariantContext(!0) || {}, f = [], d = new Set, p = {}, v = 1 / 0, h = function(t) {
                    var r = ol[t]
                      , h = n[r]
                      , m = null !== (l = s[r]) && void 0 !== l ? l : c[r]
                      , y = an(m)
                      , g = r === u ? h.isActive : null;
                    !1 === g && (v = t);
                    var b = m === c[r] && m !== s[r] && y;
                    if (b && o && e.manuallyAnimateOnMount && (b = !1),
                    h.protectedKeys = Ut({}, p),
                    !h.isActive && null === g || !m && !h.prevProp || Ja(m) || "boolean" === typeof m)
                        return "continue";
                    var w = function(e, t) {
                        if ("string" === typeof t)
                            return t !== e;
                        if (on(t))
                            return !Bu(t, e);
                        return !1
                    }(h.prevProp, m)
                      , x = w || r === u && h.isActive && !b && y || t > v && y
                      , S = Array.isArray(m) ? m : [m]
                      , E = S.reduce(i, {});
                    !1 === g && (E = {});
                    var k = h.prevResolvedValues
                      , P = void 0 === k ? {} : k
                      , C = Ut(Ut({}, P), E)
                      , O = function(e) {
                        x = !0,
                        d.delete(e),
                        h.needsAnimating[e] = !0
                    };
                    for (var _ in C) {
                        var T = E[_]
                          , A = P[_];
                        p.hasOwnProperty(_) || (T !== A ? To(T) && To(A) ? !Bu(T, A) || w ? O(_) : h.protectedKeys[_] = !0 : void 0 !== T ? O(_) : d.add(_) : void 0 !== T && d.has(_) ? O(_) : h.protectedKeys[_] = !0)
                    }
                    h.prevProp = m,
                    h.prevResolvedValues = E,
                    h.isActive && (p = Ut(Ut({}, p), E)),
                    o && e.blockInitialAnimation && (x = !1),
                    x && !b && f.push.apply(f, Ht([], Wt(S.map((function(e) {
                        return {
                            animation: e,
                            options: Ut({
                                type: r
                            }, a)
                        }
                    }
                    ))), !1))
                }, m = 0; m < il; m++)
                    h(m);
                if (r = Ut({}, p),
                d.size) {
                    var y = {};
                    d.forEach((function(t) {
                        var n = e.getBaseTarget(t);
                        void 0 !== n && (y[t] = n)
                    }
                    )),
                    f.push({
                        animation: y
                    })
                }
                var g = Boolean(f.length);
                return o && !1 === s.initial && !e.manuallyAnimateOnMount && (g = !1),
                o = !1,
                g ? t(f) : Promise.resolve()
            }
            return {
                isAnimated: function(e) {
                    return void 0 !== r[e]
                },
                animateChanges: a,
                setActive: function(t, r, o) {
                    var i;
                    return n[t].isActive === r ? Promise.resolve() : (null === (i = e.variantChildren) || void 0 === i || i.forEach((function(e) {
                        var n;
                        return null === (n = e.animationState) || void 0 === n ? void 0 : n.setActive(t, r)
                    }
                    )),
                    n[t].isActive = r,
                    a(o, t))
                },
                setAnimateFunction: function(n) {
                    t = n(e)
                },
                getState: function() {
                    return n
                }
            }
        }
        function ll(e) {
            return void 0 === e && (e = !1),
            {
                isActive: e,
                protectedKeys: {},
                needsAnimating: {},
                prevResolvedValues: {}
            }
        }
        var sl = {
            animation: Du((function(t) {
                var n = t.visualElement
                  , r = t.animate;
                n.animationState || (n.animationState = ul(n)),
                Ja(r) && (0,
                e.useEffect)((function() {
                    return r.subscribe(n)
                }
                ), [r])
            }
            )),
            exit: Du((function(t) {
                var n = t.custom
                  , r = t.visualElement
                  , o = Wt(Vu(), 2)
                  , i = o[0]
                  , a = o[1]
                  , u = (0,
                e.useContext)(Jt);
                (0,
                e.useEffect)((function() {
                    var e, t;
                    r.isPresent = i;
                    var o = null === (e = r.animationState) || void 0 === e ? void 0 : e.setActive(ru.Exit, !i, {
                        custom: null !== (t = null === u || void 0 === u ? void 0 : u.custom) && void 0 !== t ? t : n
                    });
                    !i && (null === o || void 0 === o || o.then(a))
                }
                ), [i])
            }
            ))
        }
          , cl = function() {
            function e(e, t, n) {
                var r = this
                  , o = (void 0 === n ? {} : n).transformPagePoint;
                if (this.startEvent = null,
                this.lastMoveEvent = null,
                this.lastMoveEventInfo = null,
                this.handlers = {},
                this.updatePoint = function() {
                    if (r.lastMoveEvent && r.lastMoveEventInfo) {
                        var e = pl(r.lastMoveEventInfo, r.history)
                          , t = null !== r.startEvent
                          , n = Ei(e.offset, {
                            x: 0,
                            y: 0
                        }) >= 3;
                        if (t || n) {
                            var o = e.point
                              , i = Tn().timestamp;
                            r.history.push(Ut(Ut({}, o), {
                                timestamp: i
                            }));
                            var a = r.handlers
                              , u = a.onStart
                              , l = a.onMove;
                            t || (u && u(r.lastMoveEvent, e),
                            r.startEvent = r.lastMoveEvent),
                            l && l(r.lastMoveEvent, e)
                        }
                    }
                }
                ,
                this.handlePointerMove = function(e, t) {
                    r.lastMoveEvent = e,
                    r.lastMoveEventInfo = fl(t, r.transformPagePoint),
                    lu(e) && 0 === e.buttons ? r.handlePointerUp(e, t) : An.update(r.updatePoint, !0)
                }
                ,
                this.handlePointerUp = function(e, t) {
                    r.end();
                    var n = r.handlers
                      , o = n.onEnd
                      , i = n.onSessionEnd
                      , a = pl(fl(t, r.transformPagePoint), r.history);
                    r.startEvent && o && o(e, a),
                    i && i(e, a)
                }
                ,
                !(su(e) && e.touches.length > 1)) {
                    this.handlers = t,
                    this.transformPagePoint = o;
                    var i = fl(pu(e), this.transformPagePoint)
                      , a = i.point
                      , u = Tn().timestamp;
                    this.history = [Ut(Ut({}, a), {
                        timestamp: u
                    })];
                    var l = t.onSessionStart;
                    l && l(e, pl(i, this.history)),
                    this.removeListeners = Ir(gu(window, "pointermove", this.handlePointerMove), gu(window, "pointerup", this.handlePointerUp), gu(window, "pointercancel", this.handlePointerUp))
                }
            }
            return e.prototype.updateHandlers = function(e) {
                this.handlers = e
            }
            ,
            e.prototype.end = function() {
                this.removeListeners && this.removeListeners(),
                kn.update(this.updatePoint)
            }
            ,
            e
        }();
        function fl(e, t) {
            return t ? {
                point: t(e.point)
            } : e
        }
        function dl(e, t) {
            return {
                x: e.x - t.x,
                y: e.y - t.y
            }
        }
        function pl(e, t) {
            var n = e.point;
            return {
                point: n,
                delta: dl(n, hl(t)),
                offset: dl(n, vl(t)),
                velocity: ml(t, .1)
            }
        }
        function vl(e) {
            return e[0]
        }
        function hl(e) {
            return e[e.length - 1]
        }
        function ml(e, t) {
            if (e.length < 2)
                return {
                    x: 0,
                    y: 0
                };
            for (var n = e.length - 1, r = null, o = hl(e); n >= 0 && (r = e[n],
            !(o.timestamp - r.timestamp > go(t))); )
                n--;
            if (!r)
                return {
                    x: 0,
                    y: 0
                };
            var i = (o.timestamp - r.timestamp) / 1e3;
            if (0 === i)
                return {
                    x: 0,
                    y: 0
                };
            var a = {
                x: (o.x - r.x) / i,
                y: (o.y - r.y) / i
            };
            return a.x === 1 / 0 && (a.x = 0),
            a.y === 1 / 0 && (a.y = 0),
            a
        }
        function yl(e, t, n) {
            return {
                min: void 0 !== t ? e.min + t : void 0,
                max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0
            }
        }
        function gl(e, t) {
            var n, r = t.min - e.min, o = t.max - e.max;
            return t.max - t.min < e.max - e.min && (r = (n = Wt([o, r], 2))[0],
            o = n[1]),
            {
                min: r,
                max: o
            }
        }
        var bl = .35;
        function wl(e, t, n) {
            return {
                min: xl(e, t),
                max: xl(e, n)
            }
        }
        function xl(e, t) {
            var n;
            return "number" === typeof e ? e : null !== (n = e[t]) && void 0 !== n ? n : 0
        }
        function Sl(e) {
            var t = e.top;
            return {
                x: {
                    min: e.left,
                    max: e.right
                },
                y: {
                    min: t,
                    max: e.bottom
                }
            }
        }
        function El(e, t) {
            return Sl(function(e, t) {
                if (!t)
                    return e;
                var n = t({
                    x: e.left,
                    y: e.top
                })
                  , r = t({
                    x: e.right,
                    y: e.bottom
                });
                return {
                    top: n.y,
                    left: n.x,
                    bottom: r.y,
                    right: r.x
                }
            }(e.getBoundingClientRect(), t))
        }
        var kl = new WeakMap
          , Pl = function() {
            function e(e) {
                this.openGlobalLock = null,
                this.isDragging = !1,
                this.currentDirection = null,
                this.originPoint = {
                    x: 0,
                    y: 0
                },
                this.constraints = !1,
                this.hasMutatedConstraints = !1,
                this.elastic = {
                    x: {
                        min: 0,
                        max: 0
                    },
                    y: {
                        min: 0,
                        max: 0
                    }
                },
                this.visualElement = e
            }
            return e.prototype.start = function(e, t) {
                var n = this
                  , r = (void 0 === t ? {} : t).snapToCursor
                  , o = void 0 !== r && r;
                if (!1 !== this.visualElement.isPresent) {
                    this.panSession = new cl(e,{
                        onSessionStart: function(e) {
                            n.stopAnimation(),
                            o && n.snapToCursor(pu(e, "page").point)
                        },
                        onStart: function(e, t) {
                            var r, o = n.getProps(), i = o.drag, a = o.dragPropagation, u = o.onDragStart;
                            (!i || a || (n.openGlobalLock && n.openGlobalLock(),
                            n.openGlobalLock = Eu(i),
                            n.openGlobalLock)) && (n.isDragging = !0,
                            n.currentDirection = null,
                            n.resolveConstraints(),
                            n.visualElement.projection && (n.visualElement.projection.isAnimationBlocked = !0,
                            n.visualElement.projection.target = void 0),
                            Bi((function(e) {
                                var t, r, o = n.getAxisMotionValue(e).get() || 0;
                                if (pr.test(o)) {
                                    var i = null === (r = null === (t = n.visualElement.projection) || void 0 === t ? void 0 : t.layout) || void 0 === r ? void 0 : r.actual[e];
                                    if (i)
                                        o = ki(i) * (parseFloat(o) / 100)
                                }
                                n.originPoint[e] = o
                            }
                            )),
                            null === u || void 0 === u || u(e, t),
                            null === (r = n.visualElement.animationState) || void 0 === r || r.setActive(ru.Drag, !0))
                        },
                        onMove: function(e, t) {
                            var r = n.getProps()
                              , o = r.dragPropagation
                              , i = r.dragDirectionLock
                              , a = r.onDirectionLock
                              , u = r.onDrag;
                            if (o || n.openGlobalLock) {
                                var l = t.offset;
                                if (i && null === n.currentDirection)
                                    return n.currentDirection = function(e, t) {
                                        void 0 === t && (t = 10);
                                        var n = null;
                                        Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x");
                                        return n
                                    }(l),
                                    void (null !== n.currentDirection && (null === a || void 0 === a || a(n.currentDirection)));
                                n.updateAxis("x", t.point, l),
                                n.updateAxis("y", t.point, l),
                                n.visualElement.syncRender(),
                                null === u || void 0 === u || u(e, t)
                            }
                        },
                        onSessionEnd: function(e, t) {
                            return n.stop(e, t)
                        }
                    },{
                        transformPagePoint: this.visualElement.getTransformPagePoint()
                    })
                }
            }
            ,
            e.prototype.stop = function(e, t) {
                var n = this.isDragging;
                if (this.cancel(),
                n) {
                    var r = t.velocity;
                    this.startAnimation(r);
                    var o = this.getProps().onDragEnd;
                    null === o || void 0 === o || o(e, t)
                }
            }
            ,
            e.prototype.cancel = function() {
                var e, t;
                this.isDragging = !1,
                this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1),
                null === (e = this.panSession) || void 0 === e || e.end(),
                this.panSession = void 0,
                !this.getProps().dragPropagation && this.openGlobalLock && (this.openGlobalLock(),
                this.openGlobalLock = null),
                null === (t = this.visualElement.animationState) || void 0 === t || t.setActive(ru.Drag, !1)
            }
            ,
            e.prototype.updateAxis = function(e, t, n) {
                var r = this.getProps().drag;
                if (n && Cl(e, r, this.currentDirection)) {
                    var o = this.getAxisMotionValue(e)
                      , i = this.originPoint[e] + n[e];
                    this.constraints && this.constraints[e] && (i = function(e, t, n) {
                        var r = t.min
                          , o = t.max;
                        return void 0 !== r && e < r ? e = n ? Mn(r, e, n.min) : Math.max(e, r) : void 0 !== o && e > o && (e = n ? Mn(o, e, n.max) : Math.min(e, o)),
                        e
                    }(i, this.constraints[e], this.elastic[e])),
                    o.set(i)
                }
            }
            ,
            e.prototype.resolveConstraints = function() {
                var e = this
                  , t = this.getProps()
                  , n = t.dragConstraints
                  , r = t.dragElastic
                  , o = (this.visualElement.projection || {}).layout
                  , i = this.constraints;
                n && rn(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!n || !o) && function(e, t) {
                    var n = t.top
                      , r = t.left
                      , o = t.bottom
                      , i = t.right;
                    return {
                        x: yl(e.x, r, i),
                        y: yl(e.y, n, o)
                    }
                }(o.actual, n),
                this.elastic = function(e) {
                    return void 0 === e && (e = bl),
                    !1 === e ? e = 0 : !0 === e && (e = bl),
                    {
                        x: wl(e, "left", "right"),
                        y: wl(e, "top", "bottom")
                    }
                }(r),
                i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && Bi((function(t) {
                    e.getAxisMotionValue(t) && (e.constraints[t] = function(e, t) {
                        var n = {};
                        return void 0 !== t.min && (n.min = t.min - e.min),
                        void 0 !== t.max && (n.max = t.max - e.min),
                        n
                    }(o.actual[t], e.constraints[t]))
                }
                ))
            }
            ,
            e.prototype.resolveRefConstraints = function() {
                var e = this.getProps()
                  , t = e.dragConstraints
                  , n = e.onMeasureDragConstraints;
                if (!t || !rn(t))
                    return !1;
                var r = t.current
                  , o = this.visualElement.projection;
                if (!o || !o.layout)
                    return !1;
                var i = function(e, t, n) {
                    var r = El(e, n)
                      , o = t.scroll;
                    return o && (hi(r.x, o.x),
                    hi(r.y, o.y)),
                    r
                }(r, o.root, this.visualElement.getTransformPagePoint())
                  , a = function(e, t) {
                    return {
                        x: gl(e.x, t.x),
                        y: gl(e.y, t.y)
                    }
                }(o.layout.actual, i);
                if (n) {
                    var u = n(function(e) {
                        var t = e.x
                          , n = e.y;
                        return {
                            top: n.min,
                            right: t.max,
                            bottom: n.max,
                            left: t.min
                        }
                    }(a));
                    this.hasMutatedConstraints = !!u,
                    u && (a = Sl(u))
                }
                return a
            }
            ,
            e.prototype.startAnimation = function(e) {
                var t = this
                  , n = this.getProps()
                  , r = n.drag
                  , o = n.dragMomentum
                  , i = n.dragElastic
                  , a = n.dragTransition
                  , u = n.dragSnapToOrigin
                  , l = n.onDragTransitionEnd
                  , s = this.constraints || {}
                  , c = Bi((function(n) {
                    var l;
                    if (Cl(n, r, t.currentDirection)) {
                        var c = null !== (l = null === s || void 0 === s ? void 0 : s[n]) && void 0 !== l ? l : {};
                        u && (c = {
                            min: 0,
                            max: 0
                        });
                        var f = i ? 200 : 1e6
                          , d = i ? 40 : 1e7
                          , p = Ut(Ut({
                            type: "inertia",
                            velocity: o ? e[n] : 0,
                            bounceStiffness: f,
                            bounceDamping: d,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10
                        }, a), c);
                        return t.startAxisValueAnimation(n, p)
                    }
                }
                ));
                return Promise.all(c).then(l)
            }
            ,
            e.prototype.startAxisValueAnimation = function(e, t) {
                return Zo(e, this.getAxisMotionValue(e), 0, t)
            }
            ,
            e.prototype.stopAnimation = function() {
                var e = this;
                Bi((function(t) {
                    return e.getAxisMotionValue(t).stop()
                }
                ))
            }
            ,
            e.prototype.getAxisMotionValue = function(e) {
                var t, n, r = "_drag" + e.toUpperCase(), o = this.visualElement.getProps()[r];
                return o || this.visualElement.getValue(e, null !== (n = null === (t = this.visualElement.getProps().initial) || void 0 === t ? void 0 : t[e]) && void 0 !== n ? n : 0)
            }
            ,
            e.prototype.snapToCursor = function(e) {
                var t = this;
                Bi((function(n) {
                    if (Cl(n, t.getProps().drag, t.currentDirection)) {
                        var r = t.visualElement.projection
                          , o = t.getAxisMotionValue(n);
                        if (r && r.layout) {
                            var i = r.layout.actual[n]
                              , a = i.min
                              , u = i.max;
                            o.set(e[n] - Mn(a, u, .5))
                        }
                    }
                }
                ))
            }
            ,
            e.prototype.scalePositionWithinConstraints = function() {
                var e, t = this, n = this.getProps(), r = n.drag, o = n.dragConstraints, i = this.visualElement.projection;
                if (rn(o) && i && this.constraints) {
                    this.stopAnimation();
                    var a = {
                        x: 0,
                        y: 0
                    };
                    Bi((function(e) {
                        var n = t.getAxisMotionValue(e);
                        if (n) {
                            var r = n.get();
                            a[e] = function(e, t) {
                                var n = .5
                                  , r = ki(e)
                                  , o = ki(t);
                                return o > r ? n = Yn(t.min, t.max - r, e.min) : r > o && (n = Yn(e.min, e.max - o, t.min)),
                                zn(0, 1, n)
                            }({
                                min: r,
                                max: r
                            }, t.constraints[e])
                        }
                    }
                    ));
                    var u = this.visualElement.getProps().transformTemplate;
                    this.visualElement.getInstance().style.transform = u ? u({}, "") : "none",
                    null === (e = i.root) || void 0 === e || e.updateScroll(),
                    i.updateLayout(),
                    this.resolveConstraints(),
                    Bi((function(e) {
                        if (Cl(e, r, null)) {
                            var n = t.getAxisMotionValue(e)
                              , o = t.constraints[e]
                              , i = o.min
                              , u = o.max;
                            n.set(Mn(i, u, a[e]))
                        }
                    }
                    ))
                }
            }
            ,
            e.prototype.addListeners = function() {
                var e, t = this;
                kl.set(this.visualElement, this);
                var n = gu(this.visualElement.getInstance(), "pointerdown", (function(e) {
                    var n = t.getProps()
                      , r = n.drag
                      , o = n.dragListener;
                    r && (void 0 === o || o) && t.start(e)
                }
                ))
                  , r = function() {
                    rn(t.getProps().dragConstraints) && (t.constraints = t.resolveRefConstraints())
                }
                  , o = this.visualElement.projection
                  , i = o.addEventListener("measure", r);
                o && !o.layout && (null === (e = o.root) || void 0 === e || e.updateScroll(),
                o.updateLayout()),
                r();
                var a = au(window, "resize", (function() {
                    t.scalePositionWithinConstraints()
                }
                ));
                return o.addEventListener("didUpdate", (function(e) {
                    var n = e.delta
                      , r = e.hasLayoutChanged;
                    t.isDragging && r && (Bi((function(e) {
                        var r = t.getAxisMotionValue(e);
                        r && (t.originPoint[e] += n[e].translate,
                        r.set(r.get() + n[e].translate))
                    }
                    )),
                    t.visualElement.syncRender())
                }
                )),
                function() {
                    a(),
                    n(),
                    i()
                }
            }
            ,
            e.prototype.getProps = function() {
                var e = this.visualElement.getProps()
                  , t = e.drag
                  , n = void 0 !== t && t
                  , r = e.dragDirectionLock
                  , o = void 0 !== r && r
                  , i = e.dragPropagation
                  , a = void 0 !== i && i
                  , u = e.dragConstraints
                  , l = void 0 !== u && u
                  , s = e.dragElastic
                  , c = void 0 === s ? bl : s
                  , f = e.dragMomentum
                  , d = void 0 === f || f;
                return Ut(Ut({}, e), {
                    drag: n,
                    dragDirectionLock: o,
                    dragPropagation: a,
                    dragConstraints: l,
                    dragElastic: c,
                    dragMomentum: d
                })
            }
            ,
            e
        }();
        function Cl(e, t, n) {
            return (!0 === t || t === e) && (null === n || n === e)
        }
        var Ol = {
            pan: Du((function(t) {
                var n = t.onPan
                  , r = t.onPanStart
                  , o = t.onPanEnd
                  , i = t.onPanSessionStart
                  , a = t.visualElement
                  , u = n || r || o || i
                  , l = (0,
                e.useRef)(null)
                  , s = (0,
                e.useContext)(Gt).transformPagePoint
                  , c = {
                    onSessionStart: i,
                    onStart: r,
                    onMove: n,
                    onEnd: function(e, t) {
                        l.current = null,
                        o && o(e, t)
                    }
                };
                (0,
                e.useEffect)((function() {
                    null !== l.current && l.current.updateHandlers(c)
                }
                )),
                bu(a, "pointerdown", u && function(e) {
                    l.current = new cl(e,c,{
                        transformPagePoint: s
                    })
                }
                ),
                Ou((function() {
                    return l.current && l.current.end()
                }
                ))
            }
            )),
            drag: Du((function(t) {
                var n = t.dragControls
                  , r = t.visualElement
                  , o = pn((function() {
                    return new Pl(r)
                }
                ));
                (0,
                e.useEffect)((function() {
                    return n && n.subscribe(o)
                }
                ), [o, n]),
                (0,
                e.useEffect)((function() {
                    return o.addListeners()
                }
                ), [o])
            }
            ))
        }
          , _l = ["LayoutMeasure", "BeforeLayoutMeasure", "LayoutUpdate", "ViewportBoxUpdate", "Update", "Render", "AnimationComplete", "LayoutAnimationComplete", "AnimationStart", "SetAxisTarget", "Unmount"];
        var Tl = function(e) {
            var t = e.treeType
              , n = void 0 === t ? "" : t
              , r = e.build
              , o = e.getBaseTarget
              , i = e.makeTargetAnimatable
              , a = e.measureViewportBox
              , u = e.render
              , l = e.readValueFromInstance
              , s = e.removeValueFromRenderState
              , c = e.sortNodePosition
              , f = e.scrapeMotionValuesFromProps;
            return function(e, t) {
                var d = e.parent
                  , p = e.props
                  , v = e.presenceId
                  , h = e.blockInitialAnimation
                  , m = e.visualState;
                void 0 === t && (t = {});
                var y, g, b = !1, w = m.latestValues, x = m.renderState, S = function() {
                    var e = _l.map((function() {
                        return new Ln
                    }
                    ))
                      , t = {}
                      , n = {
                        clearAllListeners: function() {
                            return e.forEach((function(e) {
                                return e.clear()
                            }
                            ))
                        },
                        updatePropListeners: function(e) {
                            _l.forEach((function(r) {
                                var o, i = "on" + r, a = e[i];
                                null === (o = t[r]) || void 0 === o || o.call(t),
                                a && (t[r] = n[i](a))
                            }
                            ))
                        }
                    };
                    return e.forEach((function(e, t) {
                        n["on" + _l[t]] = function(t) {
                            return e.add(t)
                        }
                        ,
                        n["notify" + _l[t]] = function() {
                            for (var t = [], n = 0; n < arguments.length; n++)
                                t[n] = arguments[n];
                            e.notify.apply(e, Ht([], Wt(t), !1))
                        }
                    }
                    )),
                    n
                }(), E = new Map, k = new Map, P = {}, C = Ut({}, w);
                function O() {
                    y && b && (_(),
                    u(y, x, p.style, L.projection))
                }
                function _() {
                    r(L, x, w, t, p)
                }
                function T() {
                    S.notifyUpdate(w)
                }
                var A = f(p);
                for (var M in A) {
                    var N = A[M];
                    void 0 !== w[M] && Vn(N) && N.set(w[M], !1)
                }
                var R = sn(p)
                  , j = cn(p)
                  , L = Ut(Ut({
                    treeType: n,
                    current: null,
                    depth: d ? d.depth + 1 : 0,
                    parent: d,
                    children: new Set,
                    presenceId: v,
                    variantChildren: j ? new Set : void 0,
                    isVisible: void 0,
                    manuallyAnimateOnMount: Boolean(null === d || void 0 === d ? void 0 : d.isMounted()),
                    blockInitialAnimation: h,
                    isMounted: function() {
                        return Boolean(y)
                    },
                    mount: function(e) {
                        b = !0,
                        y = L.current = e,
                        L.projection && L.projection.mount(e),
                        j && d && !R && (g = null === d || void 0 === d ? void 0 : d.addVariantChild(L)),
                        null === d || void 0 === d || d.children.add(L),
                        L.setProps(p)
                    },
                    unmount: function() {
                        var e;
                        null === (e = L.projection) || void 0 === e || e.unmount(),
                        kn.update(T),
                        kn.render(O),
                        k.forEach((function(e) {
                            return e()
                        }
                        )),
                        null === g || void 0 === g || g(),
                        null === d || void 0 === d || d.children.delete(L),
                        S.clearAllListeners(),
                        y = void 0,
                        b = !1
                    },
                    addVariantChild: function(e) {
                        var t, n = L.getClosestVariantNode();
                        if (n)
                            return null === (t = n.variantChildren) || void 0 === t || t.add(e),
                            function() {
                                return n.variantChildren.delete(e)
                            }
                    },
                    sortNodePosition: function(e) {
                        return c && n === e.treeType ? c(L.getInstance(), e.getInstance()) : 0
                    },
                    getClosestVariantNode: function() {
                        return j ? L : null === d || void 0 === d ? void 0 : d.getClosestVariantNode()
                    },
                    getLayoutId: function() {
                        return p.layoutId
                    },
                    getInstance: function() {
                        return y
                    },
                    getStaticValue: function(e) {
                        return w[e]
                    },
                    setStaticValue: function(e, t) {
                        return w[e] = t
                    },
                    getLatestValues: function() {
                        return w
                    },
                    setVisibility: function(e) {
                        L.isVisible !== e && (L.isVisible = e,
                        L.scheduleRender())
                    },
                    makeTargetAnimatable: function(e, t) {
                        return void 0 === t && (t = !0),
                        i(L, e, p, t)
                    },
                    measureViewportBox: function() {
                        return a(y, p)
                    },
                    addValue: function(e, t) {
                        L.hasValue(e) && L.removeValue(e),
                        E.set(e, t),
                        w[e] = t.get(),
                        function(e, t) {
                            var n = t.onChange((function(t) {
                                w[e] = t,
                                p.onUpdate && An.update(T, !1, !0)
                            }
                            ))
                              , r = t.onRenderRequest(L.scheduleRender);
                            k.set(e, (function() {
                                n(),
                                r()
                            }
                            ))
                        }(e, t)
                    },
                    removeValue: function(e) {
                        var t;
                        E.delete(e),
                        null === (t = k.get(e)) || void 0 === t || t(),
                        k.delete(e),
                        delete w[e],
                        s(e, x)
                    },
                    hasValue: function(e) {
                        return E.has(e)
                    },
                    getValue: function(e, t) {
                        var n = E.get(e);
                        return void 0 === n && void 0 !== t && (n = In(t),
                        L.addValue(e, n)),
                        n
                    },
                    forEachValue: function(e) {
                        return E.forEach(e)
                    },
                    readValue: function(e) {
                        var n;
                        return null !== (n = w[e]) && void 0 !== n ? n : l(y, e, t)
                    },
                    setBaseTarget: function(e, t) {
                        C[e] = t
                    },
                    getBaseTarget: function(e) {
                        if (o) {
                            var t = o(p, e);
                            if (void 0 !== t && !Vn(t))
                                return t
                        }
                        return C[e]
                    }
                }, S), {
                    build: function() {
                        return _(),
                        x
                    },
                    scheduleRender: function() {
                        An.render(O, !1, !0)
                    },
                    syncRender: O,
                    setProps: function(e) {
                        p = e,
                        S.updatePropListeners(e),
                        P = function(e, t, n) {
                            var r;
                            for (var o in t) {
                                var i = t[o]
                                  , a = n[o];
                                if (Vn(i))
                                    e.addValue(o, i);
                                else if (Vn(a))
                                    e.addValue(o, In(i));
                                else if (a !== i)
                                    if (e.hasValue(o)) {
                                        var u = e.getValue(o);
                                        !u.hasAnimated && u.set(i)
                                    } else
                                        e.addValue(o, In(null !== (r = e.getStaticValue(o)) && void 0 !== r ? r : i))
                            }
                            for (var o in n)
                                void 0 === t[o] && e.removeValue(o);
                            return t
                        }(L, f(p), P)
                    },
                    getProps: function() {
                        return p
                    },
                    getVariant: function(e) {
                        var t;
                        return null === (t = p.variants) || void 0 === t ? void 0 : t[e]
                    },
                    getDefaultTransition: function() {
                        return p.transition
                    },
                    getTransformPagePoint: function() {
                        return p.transformPagePoint
                    },
                    getVariantContext: function(e) {
                        if (void 0 === e && (e = !1),
                        e)
                            return null === d || void 0 === d ? void 0 : d.getVariantContext();
                        if (!R) {
                            var t = (null === d || void 0 === d ? void 0 : d.getVariantContext()) || {};
                            return void 0 !== p.initial && (t.initial = p.initial),
                            t
                        }
                        for (var n = {}, r = 0; r < Ml; r++) {
                            var o = Al[r]
                              , i = p[o];
                            (an(i) || !1 === i) && (n[o] = i)
                        }
                        return n
                    }
                });
                return L
            }
        }
          , Al = Ht(["initial"], Wt(rl), !1)
          , Ml = Al.length;
        function Nl(e) {
            return "string" === typeof e && e.startsWith("var(--")
        }
        var Rl = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
        function jl(e, t, n) {
            void 0 === n && (n = 1),
            'Max CSS variable fallback depth detected in property "'.concat(e, '". This may indicate a circular fallback dependency.');
            var r = Wt(function(e) {
                var t = Rl.exec(e);
                if (!t)
                    return [, ];
                var n = Wt(t, 3);
                return [n[1], n[2]]
            }(e), 2)
              , o = r[0]
              , i = r[1];
            if (o) {
                var a = window.getComputedStyle(t).getPropertyValue(o);
                return a ? a.trim() : Nl(i) ? jl(i, t, n + 1) : i
            }
        }
        var Ll, Dl = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]), Il = function(e) {
            return Dl.has(e)
        }, Vl = function(e, t) {
            e.set(t, !1),
            e.set(t)
        }, Fl = function(e) {
            return e === nr || e === vr
        };
        !function(e) {
            e.width = "width",
            e.height = "height",
            e.left = "left",
            e.right = "right",
            e.top = "top",
            e.bottom = "bottom"
        }(Ll || (Ll = {}));
        var zl = function(e, t) {
            return parseFloat(e.split(", ")[t])
        }
          , Ul = function(e, t) {
            return function(n, r) {
                var o = r.transform;
                if ("none" === o || !o)
                    return 0;
                var i = o.match(/^matrix3d\((.+)\)$/);
                if (i)
                    return zl(i[1], t);
                var a = o.match(/^matrix\((.+)\)$/);
                return a ? zl(a[1], e) : 0
            }
        }
          , Bl = new Set(["x", "y", "z"])
          , $l = Wi.filter((function(e) {
            return !Bl.has(e)
        }
        ));
        var Wl = {
            width: function(e, t) {
                var n = e.x
                  , r = t.paddingLeft
                  , o = void 0 === r ? "0" : r
                  , i = t.paddingRight
                  , a = void 0 === i ? "0" : i;
                return n.max - n.min - parseFloat(o) - parseFloat(a)
            },
            height: function(e, t) {
                var n = e.y
                  , r = t.paddingTop
                  , o = void 0 === r ? "0" : r
                  , i = t.paddingBottom
                  , a = void 0 === i ? "0" : i;
                return n.max - n.min - parseFloat(o) - parseFloat(a)
            },
            top: function(e, t) {
                var n = t.top;
                return parseFloat(n)
            },
            left: function(e, t) {
                var n = t.left;
                return parseFloat(n)
            },
            bottom: function(e, t) {
                var n = e.y
                  , r = t.top;
                return parseFloat(r) + (n.max - n.min)
            },
            right: function(e, t) {
                var n = e.x
                  , r = t.left;
                return parseFloat(r) + (n.max - n.min)
            },
            x: Ul(4, 13),
            y: Ul(5, 14)
        }
          , Hl = function(e, t, n, r) {
            void 0 === n && (n = {}),
            void 0 === r && (r = {}),
            t = Ut({}, t),
            r = Ut({}, r);
            var o = Object.keys(t).filter(Il)
              , i = []
              , a = !1
              , u = [];
            if (o.forEach((function(o) {
                var l = e.getValue(o);
                if (e.hasValue(o)) {
                    var s, c = n[o], f = Qu(c), d = t[o];
                    if (To(d)) {
                        var p = d.length
                          , v = null === d[0] ? 1 : 0;
                        c = d[v],
                        f = Qu(c);
                        for (var h = v; h < p; h++)
                            s ? Qu(d[h]) : (s = Qu(d[h])) === f || Fl(f) && Fl(s)
                    } else
                        s = Qu(d);
                    if (f !== s)
                        if (Fl(f) && Fl(s)) {
                            var m = l.get();
                            "string" === typeof m && l.set(parseFloat(m)),
                            "string" === typeof d ? t[o] = parseFloat(d) : Array.isArray(d) && s === vr && (t[o] = d.map(parseFloat))
                        } else
                            (null === f || void 0 === f ? void 0 : f.transform) && (null === s || void 0 === s ? void 0 : s.transform) && (0 === c || 0 === d) ? 0 === c ? l.set(s.transform(c)) : t[o] = f.transform(d) : (a || (i = function(e) {
                                var t = [];
                                return $l.forEach((function(n) {
                                    var r = e.getValue(n);
                                    void 0 !== r && (t.push([n, r.get()]),
                                    r.set(n.startsWith("scale") ? 1 : 0))
                                }
                                )),
                                t.length && e.syncRender(),
                                t
                            }(e),
                            a = !0),
                            u.push(o),
                            r[o] = void 0 !== r[o] ? r[o] : t[o],
                            Vl(l, d))
                }
            }
            )),
            u.length) {
                var l = function(e, t, n) {
                    var r = t.measureViewportBox()
                      , o = t.getInstance()
                      , i = getComputedStyle(o)
                      , a = i.display
                      , u = {};
                    "none" === a && t.setStaticValue("display", e.display || "block"),
                    n.forEach((function(e) {
                        u[e] = Wl[e](r, i)
                    }
                    )),
                    t.syncRender();
                    var l = t.measureViewportBox();
                    return n.forEach((function(n) {
                        var r = t.getValue(n);
                        Vl(r, u[n]),
                        e[n] = Wl[n](l, i)
                    }
                    )),
                    e
                }(t, e, u);
                return i.length && i.forEach((function(t) {
                    var n = Wt(t, 2)
                      , r = n[0]
                      , o = n[1];
                    e.getValue(r).set(o)
                }
                )),
                e.syncRender(),
                {
                    target: l,
                    transitionEnd: r
                }
            }
            return {
                target: t,
                transitionEnd: r
            }
        };
        function Kl(e, t, n, r) {
            return function(e) {
                return Object.keys(e).some(Il)
            }(t) ? Hl(e, t, n, r) : {
                target: t,
                transitionEnd: r
            }
        }
        var Ql = function(e, t, n, r) {
            var o = function(e, t, n) {
                var r, o = Bt(t, []), i = e.getInstance();
                if (!(i instanceof Element))
                    return {
                        target: o,
                        transitionEnd: n
                    };
                for (var a in n && (n = Ut({}, n)),
                e.forEachValue((function(e) {
                    var t = e.get();
                    if (Nl(t)) {
                        var n = jl(t, i);
                        n && e.set(n)
                    }
                }
                )),
                o) {
                    var u = o[a];
                    if (Nl(u)) {
                        var l = jl(u, i);
                        l && (o[a] = l,
                        n && (null !== (r = n[a]) && void 0 !== r || (n[a] = u)))
                    }
                }
                return {
                    target: o,
                    transitionEnd: n
                }
            }(e, t, r);
            return Kl(e, t = o.target, n, r = o.transitionEnd)
        };
        var ql = {
            treeType: "dom",
            readValueFromInstance: function(e, t) {
                if (Qi(t)) {
                    var n = Bo(t);
                    return n && n.default || 0
                }
                var r, o = (r = e,
                window.getComputedStyle(r));
                return (_a(t) ? o.getPropertyValue(t) : o[t]) || 0
            },
            sortNodePosition: function(e, t) {
                return 2 & e.compareDocumentPosition(t) ? 1 : -1
            },
            getBaseTarget: function(e, t) {
                var n;
                return null === (n = e.style) || void 0 === n ? void 0 : n[t]
            },
            measureViewportBox: function(e, t) {
                return El(e, t.transformPagePoint)
            },
            resetTransform: function(e, t, n) {
                var r = n.transformTemplate;
                t.style.transform = r ? r({}, "") : "none",
                e.scheduleRender()
            },
            restoreTransform: function(e, t) {
                e.style.transform = t.style.transform
            },
            removeValueFromRenderState: function(e, t) {
                var n = t.vars
                  , r = t.style;
                delete n[e],
                delete r[e]
            },
            makeTargetAnimatable: function(e, t, n, r) {
                var o = n.transformValues;
                void 0 === r && (r = !0);
                var i = t.transition
                  , a = t.transitionEnd
                  , u = Bt(t, ["transition", "transitionEnd"])
                  , l = function(e, t, n) {
                    var r, o, i = {};
                    for (var a in e)
                        i[a] = null !== (r = Zu(a, t)) && void 0 !== r ? r : null === (o = n.getValue(a)) || void 0 === o ? void 0 : o.get();
                    return i
                }(u, i || {}, e);
                if (o && (a && (a = o(a)),
                u && (u = o(u)),
                l && (l = o(l))),
                r) {
                    !function(e, t, n) {
                        var r, o, i, a, u = Object.keys(t).filter((function(t) {
                            return !e.hasValue(t)
                        }
                        )), l = u.length;
                        if (l)
                            for (var s = 0; s < l; s++) {
                                var c = u[s]
                                  , f = t[c]
                                  , d = null;
                                Array.isArray(f) && (d = f[0]),
                                null === d && (d = null !== (o = null !== (r = n[c]) && void 0 !== r ? r : e.readValue(c)) && void 0 !== o ? o : t[c]),
                                void 0 !== d && null !== d && ("string" === typeof d && ($u(d) || Wu(d)) ? d = parseFloat(d) : !Yu(d) && jr.test(f) && (d = $o(c, f)),
                                e.addValue(c, In(d)),
                                null !== (i = (a = n)[c]) && void 0 !== i || (a[c] = d),
                                e.setBaseTarget(c, d))
                            }
                    }(e, u, l);
                    var s = Ql(e, u, l, a);
                    a = s.transitionEnd,
                    u = s.target
                }
                return Ut({
                    transition: i,
                    transitionEnd: a
                }, u)
            },
            scrapeMotionValuesFromProps: Ga,
            build: function(e, t, n, r, o) {
                void 0 !== e.isVisible && (t.style.visibility = e.isVisible ? "visible" : "hidden"),
                Aa(t, n, r, o.transformTemplate)
            },
            render: qa
        }
          , Yl = Tl(ql)
          , Xl = Tl(Ut(Ut({}, ql), {
            getBaseTarget: function(e, t) {
                return e[t]
            },
            readValueFromInstance: function(e, t) {
                var n;
                return Qi(t) ? (null === (n = Bo(t)) || void 0 === n ? void 0 : n.default) || 0 : (t = Ya.has(t) ? t : Qa(t),
                e.getAttribute(t))
            },
            scrapeMotionValuesFromProps: Za,
            build: function(e, t, n, r, o) {
                Ba(t, n, r, o.transformTemplate)
            },
            render: Xa
        }))
          , Gl = function(e, t) {
            return Pa(e) ? Xl(t, {
                enableHardwareAcceleration: !1
            }) : Yl(t, {
                enableHardwareAcceleration: !0
            })
        };
        function Zl(e, t) {
            return t.max === t.min ? 0 : e / (t.max - t.min) * 100
        }
        var Jl = {
            correct: function(e, t) {
                if (!t.target)
                    return e;
                if ("string" === typeof e) {
                    if (!vr.test(e))
                        return e;
                    e = parseFloat(e)
                }
                var n = Zl(e, t.target.x)
                  , r = Zl(e, t.target.y);
                return "".concat(n, "% ").concat(r, "%")
            }
        }
          , es = "_$css"
          , ts = {
            correct: function(e, t) {
                var n = t.treeScale
                  , r = t.projectionDelta
                  , o = e
                  , i = e.includes("var(")
                  , a = [];
                i && (e = e.replace(Rl, (function(e) {
                    return a.push(e),
                    es
                }
                )));
                var u = jr.parse(e);
                if (u.length > 5)
                    return o;
                var l = jr.createTransformer(e)
                  , s = "number" !== typeof u[0] ? 1 : 0
                  , c = r.x.scale * n.x
                  , f = r.y.scale * n.y;
                u[0 + s] /= c,
                u[1 + s] /= f;
                var d = Mn(c, f, .5);
                "number" === typeof u[2 + s] && (u[2 + s] /= d),
                "number" === typeof u[3 + s] && (u[3 + s] /= d);
                var p = l(u);
                if (i) {
                    var v = 0;
                    p = p.replace(es, (function() {
                        var e = a[v];
                        return v++,
                        e
                    }
                    ))
                }
                return p
            }
        }
          , ns = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return zt(t, e),
            t.prototype.componentDidMount = function() {
                var e, t = this, n = this.props, r = n.visualElement, o = n.layoutGroup, i = n.switchLayoutGroup, a = n.layoutId, u = r.projection;
                e = rs,
                Object.assign(zi, e),
                u && ((null === o || void 0 === o ? void 0 : o.group) && o.group.add(u),
                (null === i || void 0 === i ? void 0 : i.register) && a && i.register(u),
                u.root.didUpdate(),
                u.addEventListener("animationComplete", (function() {
                    t.safeToRemove()
                }
                )),
                u.setOptions(Ut(Ut({}, u.options), {
                    onExitComplete: function() {
                        return t.safeToRemove()
                    }
                }))),
                Ji.hasEverUpdated = !0
            }
            ,
            t.prototype.getSnapshotBeforeUpdate = function(e) {
                var t = this
                  , n = this.props
                  , r = n.layoutDependency
                  , o = n.visualElement
                  , i = n.drag
                  , a = n.isPresent
                  , u = o.projection;
                return u ? (u.isPresent = a,
                i || e.layoutDependency !== r || void 0 === r ? u.willUpdate() : this.safeToRemove(),
                e.isPresent !== a && (a ? u.promote() : u.relegate() || An.postRender((function() {
                    var e;
                    (null === (e = u.getStack()) || void 0 === e ? void 0 : e.members.length) || t.safeToRemove()
                }
                ))),
                null) : null
            }
            ,
            t.prototype.componentDidUpdate = function() {
                var e = this.props.visualElement.projection;
                e && (e.root.didUpdate(),
                !e.currentAnimation && e.isLead() && this.safeToRemove())
            }
            ,
            t.prototype.componentWillUnmount = function() {
                var e = this.props
                  , t = e.visualElement
                  , n = e.layoutGroup
                  , r = e.switchLayoutGroup
                  , o = t.projection;
                o && (o.scheduleCheckAfterUnmount(),
                (null === n || void 0 === n ? void 0 : n.group) && n.group.remove(o),
                (null === r || void 0 === r ? void 0 : r.deregister) && r.deregister(o))
            }
            ,
            t.prototype.safeToRemove = function() {
                var e = this.props.safeToRemove;
                null === e || void 0 === e || e()
            }
            ,
            t.prototype.render = function() {
                return null
            }
            ,
            t
        }(e.Component);
        var rs = {
            borderRadius: Ut(Ut({}, Jl), {
                applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
            }),
            borderTopLeftRadius: Jl,
            borderTopRightRadius: Jl,
            borderBottomLeftRadius: Jl,
            borderBottomRightRadius: Jl,
            boxShadow: ts
        }
          , os = {
            measureLayout: function(t) {
                var n = Wt(Vu(), 2)
                  , r = n[0]
                  , o = n[1]
                  , i = (0,
                e.useContext)(ba);
                return e.createElement(ns, Ut({}, t, {
                    layoutGroup: i,
                    switchLayoutGroup: (0,
                    e.useContext)(wa),
                    isPresent: r,
                    safeToRemove: o
                }))
            }
        }
          , is = ea({
            attachResizeListener: function(e, t) {
                return e.addEventListener("resize", t, {
                    passive: !0
                }),
                function() {
                    return e.removeEventListener("resize", t)
                }
            },
            measureScroll: function() {
                return {
                    x: document.documentElement.scrollLeft || document.body.scrollLeft,
                    y: document.documentElement.scrollTop || document.body.scrollTop
                }
            }
        })
          , as = {
            current: void 0
        }
          , us = ea({
            measureScroll: function(e) {
                return {
                    x: e.scrollLeft,
                    y: e.scrollTop
                }
            },
            defaultParent: function() {
                if (!as.current) {
                    var e = new is(0,{});
                    e.mount(window),
                    e.setOptions({
                        layoutScroll: !0
                    }),
                    as.current = e
                }
                return as.current
            },
            resetTransform: function(e, t) {
                e.style.transform = null !== t && void 0 !== t ? t : "none"
            }
        })
          , ls = Ut(Ut(Ut(Ut({}, sl), Iu), Ol), os)
          , ss = Ea((function(e, t) {
            return function(e, t, n, r, o) {
                var i = t.forwardMotionProps
                  , a = void 0 !== i && i
                  , u = Pa(e) ? ou : iu;
                return Ut(Ut({}, u), {
                    preloadedFeatures: n,
                    useRender: Ha(a),
                    createVisualElement: r,
                    projectionNodeConstructor: o,
                    Component: e
                })
            }(e, t, ls, Gl, us)
        }
        ));
        var cs = "Backdrop_backdrop__-H7Dr"
          , fs = function() {
            return (0,
            d.jsx)(ss.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: .5
                },
                exit: {
                    opacity: 0
                },
                className: cs
            })
        }
          , ds = yt({
            name: "modal",
            initialState: {
                isSettingsModalOpen: !1
            },
            reducers: {
                changeSettingsModalState: function(e) {
                    e.isSettingsModalOpen = !e.isSettingsModalOpen
                }
            }
        })
          , ps = ds.actions.changeSettingsModalState
          , vs = ds.reducer
          , hs = "Icon_settingsIcon__wb6Na"
          , ms = "Icon_arrowIcon__4ZD-J"
          , ys = "Icon_closeIcon__qlTJF"
          , gs = function(e) {
            var t = e.settingsIcon
              , n = e.closeIcon
              , r = e.arrowUpIcon
              , o = e.arrowDownIcon;
            return (0,
            d.jsxs)(d.Fragment, {
                children: [t && (0,
                d.jsx)("svg", {
                    className: hs,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "28",
                    height: "28",
                    children: (0,
                    d.jsx)("path", {
                        opacity: ".5",
                        fill: "#D7E0FF",
                        d: "M26.965 17.682l-2.927-2.317c.055-.448.097-.903.097-1.365 0-.462-.042-.917-.097-1.365l2.934-2.317a.702.702 0 00.167-.896l-2.775-4.851a.683.683 0 00-.847-.301l-3.454 1.407a10.506 10.506 0 00-2.345-1.379l-.52-3.71A.716.716 0 0016.503 0h-5.55a.703.703 0 00-.687.588l-.52 3.71c-.847.357-1.63.819-2.345 1.379L3.947 4.27a.691.691 0 00-.847.301L.325 9.422a.705.705 0 00.167.896l2.927 2.317c-.055.448-.097.903-.097 1.365 0 .462.042.917.097 1.365L.492 17.682a.702.702 0 00-.167.896L3.1 23.429a.683.683 0 00.847.301L7.4 22.323a10.506 10.506 0 002.345 1.379l.52 3.71c.056.329.34.588.687.588h5.55a.703.703 0 00.687-.588l.52-3.71c.847-.357 1.631-.819 2.346-1.379l3.454 1.407c.313.119.673 0 .847-.301l2.775-4.851a.705.705 0 00-.167-.896zM13.73 18.9c-2.685 0-4.857-2.191-4.857-4.9 0-2.709 2.172-4.9 4.857-4.9 2.684 0 4.856 2.191 4.856 4.9 0 2.71-2.172 4.9-4.856 4.9z"
                    })
                }), n && (0,
                d.jsx)("svg", {
                    className: ys,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "14",
                    height: "14",
                    children: (0,
                    d.jsx)("path", {
                        fill: "#1E213F",
                        fillRule: "evenodd",
                        d: "M11.95.636l1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95z",
                        opacity: ".5"
                    })
                }), r && (0,
                d.jsx)("svg", {
                    className: ms,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "14",
                    height: "7",
                    children: (0,
                    d.jsx)("path", {
                        fill: "none",
                        stroke: "#1E213F",
                        strokeOpacity: ".25",
                        strokeWidth: "2",
                        d: "M1 6l6-4 6 4"
                    })
                }), o && (0,
                d.jsx)("svg", {
                    className: ms,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "14",
                    height: "7",
                    children: (0,
                    d.jsx)("path", {
                        fill: "none",
                        stroke: "#1E213F",
                        strokeOpacity: ".25",
                        strokeWidth: "2",
                        d: "M1 1l6 4 6-4"
                    })
                })]
            })
        }
          , bs = "InputNumber_inputNumberLabel__mISjp"
          , ws = "InputNumber_inputNumberContainer__IY5tS"
          , xs = "InputNumber_inputNumber__rLiee"
          , Ss = "InputNumber_inputNumberArrows__I4rMm"
          , Es = function(e, t) {
            switch (t.type) {
            case "increment":
                return {
                    value: e.value + 1
                };
            case "decrement":
                return {
                    value: e.value - 1
                };
            default:
                return e
            }
        }
          , ks = (0,
        e.forwardRef)((function(t, n) {
            var r = t.id
              , o = t.label
              , i = t.value
              , a = t.disabled
              , u = Lt((0,
            e.useReducer)(Es, {
                value: i
            }), 2)
              , l = u[0]
              , s = u[1];
            return (0,
            d.jsxs)("div", {
                children: [(0,
                d.jsx)("label", {
                    htmlFor: r,
                    className: bs,
                    children: o
                }), (0,
                d.jsxs)("div", {
                    className: ws,
                    children: [(0,
                    d.jsx)("input", {
                        id: r,
                        className: xs,
                        type: "number",
                        name: o,
                        step: 1,
                        value: l.value,
                        ref: n,
                        readOnly: !0
                    }), (0,
                    d.jsxs)("div", {
                        className: Ss,
                        children: [(0,
                        d.jsx)(p, {
                            onClick: function() {
                                a || s({
                                    type: "increment"
                                })
                            },
                            arrow: !0,
                            children: (0,
                            d.jsx)(gs, {
                                arrowUpIcon: !0
                            })
                        }), (0,
                        d.jsx)(p, {
                            onClick: function() {
                                !a && l.value > 1 && s({
                                    type: "decrement"
                                })
                            },
                            arrow: !0,
                            children: (0,
                            d.jsx)(gs, {
                                arrowDownIcon: !0
                            })
                        })]
                    })]
                })]
            })
        }
        ))
          , Ps = ks
          , Cs = "InputRadio_inputRadioContainer__5H46c"
          , Os = "InputRadio_inputRadio__ZgAa3"
          , _s = "InputRadio_inputRadioCustom__Wp1kD"
          , Ts = "InputRadio_inputRadioFont__DieV3"
          , As = "InputRadio_inputRadioColor__XRPRh"
          , Ms = (0,
        e.forwardRef)((function(e, t) {
            var n = e.id
              , r = e.name
              , o = e.colorRadio
              , i = e.fontRadio
              , a = e.fontFamily
              , u = e.colorHex
              , l = e.checked
              , s = e.onChangeChecked;
            return (0,
            d.jsxs)("label", {
                htmlFor: n,
                className: Cs,
                children: [(0,
                d.jsx)("input", {
                    id: n,
                    name: r,
                    className: Os,
                    type: "radio",
                    checked: l,
                    onChange: s,
                    ref: l ? t : void 0
                }), (0,
                d.jsx)("span", {
                    className: "".concat(_s, " ").concat(o ? As : "", " ").concat(i ? Ts : ""),
                    style: {
                        fontFamily: a || "",
                        backgroundColor: u || ""
                    }
                })]
            })
        }
        ))
          , Ns = Ms
          , Rs = "SettingsForm_settingsForm__1KciY"
          , js = "SettingsForm_settingsFormAlert__3aGJh"
          , Ls = "SettingsForm_settingsFormInputsTitle__KFTib"
          , Ds = "SettingsForm_settingsFormInputsContainer__dr+KX"
          , Is = function() {
            var t = $((function(e) {
                return e.timer
            }
            ))
              , n = t.pomodoroMinutes
              , r = t.shortBreakMinutes
              , o = t.longBreakMinutes
              , i = t.selectedFont
              , a = t.selectedColor
              , u = t.activeTimer
              , l = t.timerStatus
              , s = B()
              , c = Lt((0,
            e.useState)(i), 2)
              , f = c[0]
              , v = c[1]
              , h = Lt((0,
            e.useState)(a), 2)
              , m = h[0]
              , b = h[1]
              , w = (0,
            e.useRef)(null)
              , x = (0,
            e.useRef)(null)
              , S = (0,
            e.useRef)(null)
              , E = (0,
            e.useCallback)((function(e) {
                var t = 0;
                return e === y.POMODORO.NAME && (t = n),
                e === y.SHORT_BREAK.NAME && (t = r),
                e === y.LONG_BREAK.NAME && (t = o),
                t
            }
            ), [n, r, o])
              , C = function(e) {
                v(e)
            }
              , O = function(e) {
                b(e)
            };
            return (0,
            d.jsxs)("form", {
                onSubmit: function(e) {
                    e.preventDefault();
                    var t = w.current.value
                      , n = x.current.value
                      , r = S.current.value
                      , o = f
                      , i = m;
                    s(Pt({
                        newPomodoroMinutes: parseInt(t),
                        newShortBreakMinutes: parseInt(n),
                        newLongBreakMinutes: parseInt(r),
                        newSelectedFont: o,
                        newSelectedColor: i
                    })),
                    s(kt()),
                    s(ps())
                },
                className: Rs,
                children: [(0,
                d.jsxs)("div", {
                    children: [(0,
                    d.jsx)("h4", {
                        className: Ls,
                        children: "Time (minutes)"
                    }), (0,
                    d.jsx)("div", {
                        className: Ds,
                        children: Object.entries(y).map((function(e) {
                            var t, n = Lt(e, 2), r = n[0], o = n[1], i = !1;
                            return "pomodoro" === o.NAME && (t = w),
                            "short break" === o.NAME && (t = x),
                            "long break" === o.NAME && (t = S),
                            l === g && u === o.NAME && (i = !0),
                            (0,
                            d.jsx)(Ps, {
                                id: r,
                                label: o.NAME,
                                value: E(o.NAME),
                                ref: t,
                                disabled: i
                            }, r)
                        }
                        ))
                    }), l === g && (0,
                    d.jsxs)("p", {
                        className: js,
                        children: ["The ", u, " timer is running. You cannot change its value"]
                    })]
                }), (0,
                d.jsxs)("div", {
                    children: [(0,
                    d.jsx)("h4", {
                        className: Ls,
                        children: " Font"
                    }), (0,
                    d.jsx)("div", {
                        className: Ds,
                        children: Object.entries(P).map((function(e) {
                            var t = Lt(e, 2)
                              , n = t[0]
                              , r = t[1];
                            return (0,
                            d.jsx)(Ns, {
                                fontRadio: !0,
                                id: n,
                                name: "fonts",
                                fontFamily: r,
                                checked: r === f,
                                onChangeChecked: C.bind(null, r)
                            }, n)
                        }
                        ))
                    })]
                }), (0,
                d.jsxs)("div", {
                    children: [(0,
                    d.jsx)("h4", {
                        className: Ls,
                        children: "Color"
                    }), (0,
                    d.jsx)("div", {
                        className: Ds,
                        children: Object.entries(k).map((function(e) {
                            var t = Lt(e, 2)
                              , n = t[0]
                              , r = t[1];
                            return (0,
                            d.jsx)(Ns, {
                                colorRadio: !0,
                                name: "colors",
                                id: n,
                                colorHex: r,
                                checked: r === m,
                                onChangeChecked: O.bind(null, r)
                            }, n)
                        }
                        ))
                    })]
                }), (0,
                d.jsx)(p, {
                    type: "submit",
                    primary: !0,
                    children: "Apply"
                })]
            })
        }
          , Vs = "SettingsWindow_settingsWindow__vd4hn"
          , Fs = "SettingsWindow_settingsWindowHeader__xLDIV"
          , zs = function() {
            var e = B();
            return (0,
            d.jsxs)(ss.section, {
                initial: {
                    x: "-50%",
                    y: "calc(100vh - 50%)"
                },
                animate: {
                    x: "-50%",
                    y: "-50%"
                },
                exit: {
                    x: "-50%",
                    y: "calc(100vh - 50%)"
                },
                transition: {
                    type: "tween",
                    duration: .7,
                    ease: "backOut"
                },
                className: Vs,
                children: [(0,
                d.jsxs)("header", {
                    className: Fs,
                    children: [(0,
                    d.jsx)("h2", {
                        children: "Settings"
                    }), (0,
                    d.jsx)(p, {
                        onClick: function() {
                            e(ps())
                        },
                        children: (0,
                        d.jsx)(gs, {
                            closeIcon: !0
                        })
                    })]
                }), (0,
                d.jsx)(Is, {})]
            })
        }
          , Us = "Modal_modal__DJDMv"
          , Bs = function() {
            return (0,
            t.createPortal)((0,
            d.jsxs)("div", {
                className: Us,
                children: [(0,
                d.jsx)(fs, {}), (0,
                d.jsx)(zs, {})]
            }), document.getElementById("root"))
        }
          , $s = "Notification_notification__SfISU"
          , Ws = function() {
            return (0,
            d.jsx)(ss.div, {
                initial: {
                    x: "-50%",
                    y: "100%"
                },
                animate: {
                    x: "-50%",
                    y: "-50%"
                },
                exit: {
                    x: "-50%",
                    y: "100%"
                },
                transition: {
                    type: "tween",
                    duration: .7,
                    ease: "backOut"
                },
                className: $s,
                children: (0,
                d.jsx)("p", {
                    children: "A timer is running. Pause it to change mode"
                })
            })
        };
        var Hs = 0;
        function Ks() {
            var e = Hs;
            return Hs++,
            e
        }
        var Qs = function(t) {
            var n = t.children
              , r = t.initial
              , o = t.isPresent
              , i = t.onExitComplete
              , a = t.custom
              , u = t.presenceAffectsLayout
              , l = pn(qs)
              , s = pn(Ks)
              , c = (0,
            e.useMemo)((function() {
                return {
                    id: s,
                    initial: r,
                    isPresent: o,
                    custom: a,
                    onExitComplete: function(e) {
                        var t, n;
                        l.set(e, !0);
                        try {
                            for (var r = $t(l.values()), o = r.next(); !o.done; o = r.next()) {
                                if (!o.value)
                                    return
                            }
                        } catch (a) {
                            t = {
                                error: a
                            }
                        } finally {
                            try {
                                o && !o.done && (n = r.return) && n.call(r)
                            } finally {
                                if (t)
                                    throw t.error
                            }
                        }
                        null === i || void 0 === i || i()
                    },
                    register: function(e) {
                        return l.set(e, !1),
                        function() {
                            return l.delete(e)
                        }
                    }
                }
            }
            ), u ? void 0 : [o]);
            return (0,
            e.useMemo)((function() {
                l.forEach((function(e, t) {
                    return l.set(t, !1)
                }
                ))
            }
            ), [o]),
            e.useEffect((function() {
                !o && !l.size && (null === i || void 0 === i || i())
            }
            ), [o]),
            e.createElement(Jt.Provider, {
                value: c
            }, n)
        };
        function qs() {
            return new Map
        }
        function Ys(e) {
            return e.key || ""
        }
        var Xs = function(t) {
            var n = t.children
              , r = t.custom
              , o = t.initial
              , i = void 0 === o || o
              , a = t.onExitComplete
              , u = t.exitBeforeEnter
              , l = t.presenceAffectsLayout
              , s = void 0 === l || l
              , c = Wt(function() {
                var t = (0,
                e.useRef)(!1)
                  , n = Wt((0,
                e.useState)(0), 2)
                  , r = n[0]
                  , o = n[1];
                Ou((function() {
                    return t.current = !0
                }
                ));
                var i = (0,
                e.useCallback)((function() {
                    !t.current && o(r + 1)
                }
                ), [r]);
                return [(0,
                e.useCallback)((function() {
                    return An.postRender(i)
                }
                ), [i]), r]
            }(), 1)
              , f = c[0]
              , d = (0,
            e.useContext)(ba).forceRender;
            d && (f = d);
            var p = (0,
            e.useRef)(!0)
              , v = (0,
            e.useRef)(!0);
            (0,
            e.useEffect)((function() {
                return function() {
                    v.current = !1
                }
            }
            ), []);
            var h = function(t) {
                var n = [];
                return e.Children.forEach(t, (function(t) {
                    (0,
                    e.isValidElement)(t) && n.push(t)
                }
                )),
                n
            }(n)
              , m = (0,
            e.useRef)(h)
              , y = (0,
            e.useRef)(new Map).current
              , g = (0,
            e.useRef)(new Set).current;
            if (function(e, t) {
                e.forEach((function(e) {
                    var n = Ys(e);
                    t.set(n, e)
                }
                ))
            }(h, y),
            p.current)
                return p.current = !1,
                e.createElement(e.Fragment, null, h.map((function(t) {
                    return e.createElement(Qs, {
                        key: Ys(t),
                        isPresent: !0,
                        initial: !!i && void 0,
                        presenceAffectsLayout: s
                    }, t)
                }
                )));
            for (var b = Ht([], Wt(h), !1), w = m.current.map(Ys), x = h.map(Ys), S = w.length, E = 0; E < S; E++) {
                var k = w[E];
                -1 === x.indexOf(k) ? g.add(k) : g.delete(k)
            }
            return u && g.size && (b = []),
            g.forEach((function(t) {
                if (-1 === x.indexOf(t)) {
                    var n = y.get(t);
                    if (n) {
                        var o = w.indexOf(t);
                        b.splice(o, 0, e.createElement(Qs, {
                            key: Ys(n),
                            isPresent: !1,
                            onExitComplete: function() {
                                y.delete(t),
                                g.delete(t);
                                var e = m.current.findIndex((function(e) {
                                    return e.key === t
                                }
                                ));
                                if (m.current.splice(e, 1),
                                !g.size) {
                                    if (m.current = h,
                                    !1 === v.current)
                                        return;
                                    f(),
                                    a && a()
                                }
                            },
                            custom: r,
                            presenceAffectsLayout: s
                        }, n))
                    }
                }
            }
            )),
            b = b.map((function(t) {
                var n = t.key;
                return g.has(n) ? t : e.createElement(Qs, {
                    key: Ys(t),
                    isPresent: !0,
                    presenceAffectsLayout: s
                }, t)
            }
            )),
            m.current = b,
            e.createElement(e.Fragment, null, g.size ? b : b.map((function(t) {
                return (0,
                e.cloneElement)(t)
            }
            )))
        }
          , Gs = function() {
            var t = $((function(e) {
                return e.timer
            }
            ))
              , n = t.selectedFont
              , r = t.selectedColor
              , o = t.isTimerNotificationVisible
              , i = $((function(e) {
                return e.modal
            }
            )).isSettingsModalOpen
              , a = B();
            document.documentElement.style.setProperty("--font-selected", "'".concat(n, "', sans-serif")),
            document.documentElement.style.setProperty("--color-selected", r);
            return (0,
            e.useEffect)((function() {
                if (o) {
                    var e = setTimeout((function() {
                        a(Et())
                    }
                    ), 3e3);
                    return function() {
                        clearTimeout(e)
                    }
                }
            }
            ), [o, a]),
            (0,
            d.jsxs)("main", {
                children: [(0,
                d.jsx)(m, {}), (0,
                d.jsx)(Vt, {}), (0,
                d.jsx)(Nt, {}), (0,
                d.jsx)(p, {
                    onClick: function() {
                        a(ps())
                    },
                    children: (0,
                    d.jsx)(gs, {
                        settingsIcon: !0
                    })
                }), (0,
                d.jsxs)(Xs, {
                    children: [o && (0,
                    d.jsx)(Ws, {}), i && (0,
                    d.jsx)(Bs, {})]
                })]
            })
        }
          , Zs = function(e) {
            var t, n = vt(), r = e || {}, o = r.reducer, i = void 0 === o ? void 0 : o, a = r.middleware, u = void 0 === a ? n() : a, l = r.devTools, s = void 0 === l || l, c = r.preloadedState, f = void 0 === c ? void 0 : c, d = r.enhancers, p = void 0 === d ? void 0 : d;
            if ("function" === typeof i)
                t = i;
            else {
                if (!dt(i))
                    throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
                t = Ge(i)
            }
            var v = u;
            "function" === typeof v && (v = v(n));
            var h = Je.apply(void 0, v)
              , m = Ze;
            s && (m = ft(ct({
                trace: !1
            }, "object" === typeof s && s)));
            var y = [h];
            return Array.isArray(p) ? y = ot([h], p) : "function" === typeof p && (y = p(y)),
            Xe(t, f, m.apply(void 0, y))
        }({
            reducer: {
                timer: Ct,
                modal: vs
            }
        });
        t.render((0,
        d.jsx)(e.StrictMode, {
            children: (0,
            d.jsx)(N, {
                store: Zs,
                children: (0,
                d.jsx)(Gs, {})
            })
        }), document.getElementById("root"))
    }()
}();
//# sourceMappingURL=main.75e58054.js.map
