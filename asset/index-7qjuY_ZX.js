const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/index-D-9IHg7i.js", "assets/listbox-DyEPdIwU.js", "assets/floating-ui.dom-nLN9p6gL.js", "assets/Tooltip-D8I5Z6qe.js", "assets/401-D-u3Aum7.js", "assets/authorize-8gJdan8J.js", "assets/Page-5Ivi3rtR.js", "assets/404-DdjC9tTJ.js", "assets/error-404-magnify-BPSwKiF-.js", "assets/useHover-d2-DByol.js", "assets/429-gS3bXv3a.js", "assets/window-crash-BW1azaQ_.js", "assets/500-Cl7_J8lS.js", "assets/repair-server-CWU3-7yk.js", "assets/index-DMJvIFvQ.js", "assets/v1-DJtbwrZ9.js", "assets/v2-CKR_heBl.js", "assets/v3-DA2islz6.js", "assets/401-DQVvkjRm.js", "assets/429-Dco1yMXa.js", "assets/500-D1_Tk7r0.js"]))) => i.map(i => d[i]);
function Hb(a, r) {
    for (var l = 0; l < r.length; l++) {
        const o = r[l];
        if (typeof o != "string" && !Array.isArray(o)) {
            for (const u in o)
                if (u !== "default" && !(u in a)) {
                    const c = Object.getOwnPropertyDescriptor(o, u);
                    c && Object.defineProperty(a, u, c.get ? c : {
                        enumerable: !0,
                        get: () => o[u]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload"))
        return;
    for (const u of document.querySelectorAll('link[rel="modulepreload"]'))
        o(u);
    new MutationObserver(u => {
        for (const c of u)
            if (c.type === "childList")
                for (const f of c.addedNodes)
                    f.tagName === "LINK" && f.rel === "modulepreload" && o(f)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function l(u) {
        const c = {};
        return u.integrity && (c.integrity = u.integrity),
        u.referrerPolicy && (c.referrerPolicy = u.referrerPolicy),
        u.crossOrigin === "use-credentials" ? c.credentials = "include" : u.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin",
        c
    }
    function o(u) {
        if (u.ep)
            return;
        u.ep = !0;
        const c = l(u);
        fetch(u.href, c)
    }
}
)();
var Yo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function na(a) {
    return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a
}
var $c = {
    exports: {}
}
  , ii = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qm;
function Bb() {
    if (qm)
        return ii;
    qm = 1;
    var a = Symbol.for("react.transitional.element")
      , r = Symbol.for("react.fragment");
    function l(o, u, c) {
        var f = null;
        if (c !== void 0 && (f = "" + c),
        u.key !== void 0 && (f = "" + u.key),
        "key"in u) {
            c = {};
            for (var m in u)
                m !== "key" && (c[m] = u[m])
        } else
            c = u;
        return u = c.ref,
        {
            $$typeof: a,
            type: o,
            key: f,
            ref: u !== void 0 ? u : null,
            props: c
        }
    }
    return ii.Fragment = r,
    ii.jsx = l,
    ii.jsxs = l,
    ii
}
var $m;
function qb() {
    return $m || ($m = 1,
    $c.exports = Bb()),
    $c.exports
}
var Q = qb()
  , Vc = {
    exports: {}
}
  , ke = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vm;
function $b() {
    if (Vm)
        return ke;
    Vm = 1;
    var a = Symbol.for("react.transitional.element")
      , r = Symbol.for("react.portal")
      , l = Symbol.for("react.fragment")
      , o = Symbol.for("react.strict_mode")
      , u = Symbol.for("react.profiler")
      , c = Symbol.for("react.consumer")
      , f = Symbol.for("react.context")
      , m = Symbol.for("react.forward_ref")
      , h = Symbol.for("react.suspense")
      , g = Symbol.for("react.memo")
      , p = Symbol.for("react.lazy")
      , v = Symbol.iterator;
    function b(T) {
        return T === null || typeof T != "object" ? null : (T = v && T[v] || T["@@iterator"],
        typeof T == "function" ? T : null)
    }
    var R = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , S = Object.assign
      , D = {};
    function O(T, V, ae) {
        this.props = T,
        this.context = V,
        this.refs = D,
        this.updater = ae || R
    }
    O.prototype.isReactComponent = {},
    O.prototype.setState = function(T, V) {
        if (typeof T != "object" && typeof T != "function" && T != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, T, V, "setState")
    }
    ,
    O.prototype.forceUpdate = function(T) {
        this.updater.enqueueForceUpdate(this, T, "forceUpdate")
    }
    ;
    function z() {}
    z.prototype = O.prototype;
    function G(T, V, ae) {
        this.props = T,
        this.context = V,
        this.refs = D,
        this.updater = ae || R
    }
    var $ = G.prototype = new z;
    $.constructor = G,
    S($, O.prototype),
    $.isPureReactComponent = !0;
    var ee = Array.isArray
      , L = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null
    }
      , _ = Object.prototype.hasOwnProperty;
    function ne(T, V, ae, te, ue, Te) {
        return ae = Te.ref,
        {
            $$typeof: a,
            type: T,
            key: V,
            ref: ae !== void 0 ? ae : null,
            props: Te
        }
    }
    function oe(T, V) {
        return ne(T.type, V, void 0, void 0, void 0, T.props)
    }
    function ce(T) {
        return typeof T == "object" && T !== null && T.$$typeof === a
    }
    function he(T) {
        var V = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + T.replace(/[=:]/g, function(ae) {
            return V[ae]
        })
    }
    var se = /\/+/g;
    function xe(T, V) {
        return typeof T == "object" && T !== null && T.key != null ? he("" + T.key) : V.toString(36)
    }
    function ge() {}
    function le(T) {
        switch (T.status) {
        case "fulfilled":
            return T.value;
        case "rejected":
            throw T.reason;
        default:
            switch (typeof T.status == "string" ? T.then(ge, ge) : (T.status = "pending",
            T.then(function(V) {
                T.status === "pending" && (T.status = "fulfilled",
                T.value = V)
            }, function(V) {
                T.status === "pending" && (T.status = "rejected",
                T.reason = V)
            })),
            T.status) {
            case "fulfilled":
                return T.value;
            case "rejected":
                throw T.reason
            }
        }
        throw T
    }
    function J(T, V, ae, te, ue) {
        var Te = typeof T;
        (Te === "undefined" || Te === "boolean") && (T = null);
        var pe = !1;
        if (T === null)
            pe = !0;
        else
            switch (Te) {
            case "bigint":
            case "string":
            case "number":
                pe = !0;
                break;
            case "object":
                switch (T.$$typeof) {
                case a:
                case r:
                    pe = !0;
                    break;
                case p:
                    return pe = T._init,
                    J(pe(T._payload), V, ae, te, ue)
                }
            }
        if (pe)
            return ue = ue(T),
            pe = te === "" ? "." + xe(T, 0) : te,
            ee(ue) ? (ae = "",
            pe != null && (ae = pe.replace(se, "$&/") + "/"),
            J(ue, V, ae, "", function(xt) {
                return xt
            })) : ue != null && (ce(ue) && (ue = oe(ue, ae + (ue.key == null || T && T.key === ue.key ? "" : ("" + ue.key).replace(se, "$&/") + "/") + pe)),
            V.push(ue)),
            1;
        pe = 0;
        var lt = te === "" ? "." : te + ":";
        if (ee(T))
            for (var Ye = 0; Ye < T.length; Ye++)
                te = T[Ye],
                Te = lt + xe(te, Ye),
                pe += J(te, V, ae, Te, ue);
        else if (Ye = b(T),
        typeof Ye == "function")
            for (T = Ye.call(T),
            Ye = 0; !(te = T.next()).done; )
                te = te.value,
                Te = lt + xe(te, Ye++),
                pe += J(te, V, ae, Te, ue);
        else if (Te === "object") {
            if (typeof T.then == "function")
                return J(le(T), V, ae, te, ue);
            throw V = String(T),
            Error("Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead.")
        }
        return pe
    }
    function A(T, V, ae) {
        if (T == null)
            return T;
        var te = []
          , ue = 0;
        return J(T, te, "", "", function(Te) {
            return V.call(ae, Te, ue++)
        }),
        te
    }
    function P(T) {
        if (T._status === -1) {
            var V = T._result;
            V = V(),
            V.then(function(ae) {
                (T._status === 0 || T._status === -1) && (T._status = 1,
                T._result = ae)
            }, function(ae) {
                (T._status === 0 || T._status === -1) && (T._status = 2,
                T._result = ae)
            }),
            T._status === -1 && (T._status = 0,
            T._result = V)
        }
        if (T._status === 1)
            return T._result.default;
        throw T._result
    }
    var Z = typeof reportError == "function" ? reportError : function(T) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var V = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof T == "object" && T !== null && typeof T.message == "string" ? String(T.message) : String(T),
                error: T
            });
            if (!window.dispatchEvent(V))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", T);
            return
        }
        console.error(T)
    }
    ;
    function re() {}
    return ke.Children = {
        map: A,
        forEach: function(T, V, ae) {
            A(T, function() {
                V.apply(this, arguments)
            }, ae)
        },
        count: function(T) {
            var V = 0;
            return A(T, function() {
                V++
            }),
            V
        },
        toArray: function(T) {
            return A(T, function(V) {
                return V
            }) || []
        },
        only: function(T) {
            if (!ce(T))
                throw Error("React.Children.only expected to receive a single React element child.");
            return T
        }
    },
    ke.Component = O,
    ke.Fragment = l,
    ke.Profiler = u,
    ke.PureComponent = G,
    ke.StrictMode = o,
    ke.Suspense = h,
    ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = L,
    ke.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(T) {
            return L.H.useMemoCache(T)
        }
    },
    ke.cache = function(T) {
        return function() {
            return T.apply(null, arguments)
        }
    }
    ,
    ke.cloneElement = function(T, V, ae) {
        if (T == null)
            throw Error("The argument must be a React element, but you passed " + T + ".");
        var te = S({}, T.props)
          , ue = T.key
          , Te = void 0;
        if (V != null)
            for (pe in V.ref !== void 0 && (Te = void 0),
            V.key !== void 0 && (ue = "" + V.key),
            V)
                !_.call(V, pe) || pe === "key" || pe === "__self" || pe === "__source" || pe === "ref" && V.ref === void 0 || (te[pe] = V[pe]);
        var pe = arguments.length - 2;
        if (pe === 1)
            te.children = ae;
        else if (1 < pe) {
            for (var lt = Array(pe), Ye = 0; Ye < pe; Ye++)
                lt[Ye] = arguments[Ye + 2];
            te.children = lt
        }
        return ne(T.type, ue, void 0, void 0, Te, te)
    }
    ,
    ke.createContext = function(T) {
        return T = {
            $$typeof: f,
            _currentValue: T,
            _currentValue2: T,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        T.Provider = T,
        T.Consumer = {
            $$typeof: c,
            _context: T
        },
        T
    }
    ,
    ke.createElement = function(T, V, ae) {
        var te, ue = {}, Te = null;
        if (V != null)
            for (te in V.key !== void 0 && (Te = "" + V.key),
            V)
                _.call(V, te) && te !== "key" && te !== "__self" && te !== "__source" && (ue[te] = V[te]);
        var pe = arguments.length - 2;
        if (pe === 1)
            ue.children = ae;
        else if (1 < pe) {
            for (var lt = Array(pe), Ye = 0; Ye < pe; Ye++)
                lt[Ye] = arguments[Ye + 2];
            ue.children = lt
        }
        if (T && T.defaultProps)
            for (te in pe = T.defaultProps,
            pe)
                ue[te] === void 0 && (ue[te] = pe[te]);
        return ne(T, Te, void 0, void 0, null, ue)
    }
    ,
    ke.createRef = function() {
        return {
            current: null
        }
    }
    ,
    ke.forwardRef = function(T) {
        return {
            $$typeof: m,
            render: T
        }
    }
    ,
    ke.isValidElement = ce,
    ke.lazy = function(T) {
        return {
            $$typeof: p,
            _payload: {
                _status: -1,
                _result: T
            },
            _init: P
        }
    }
    ,
    ke.memo = function(T, V) {
        return {
            $$typeof: g,
            type: T,
            compare: V === void 0 ? null : V
        }
    }
    ,
    ke.startTransition = function(T) {
        var V = L.T
          , ae = {};
        L.T = ae;
        try {
            var te = T()
              , ue = L.S;
            ue !== null && ue(ae, te),
            typeof te == "object" && te !== null && typeof te.then == "function" && te.then(re, Z)
        } catch (Te) {
            Z(Te)
        } finally {
            L.T = V
        }
    }
    ,
    ke.unstable_useCacheRefresh = function() {
        return L.H.useCacheRefresh()
    }
    ,
    ke.use = function(T) {
        return L.H.use(T)
    }
    ,
    ke.useActionState = function(T, V, ae) {
        return L.H.useActionState(T, V, ae)
    }
    ,
    ke.useCallback = function(T, V) {
        return L.H.useCallback(T, V)
    }
    ,
    ke.useContext = function(T) {
        return L.H.useContext(T)
    }
    ,
    ke.useDebugValue = function() {}
    ,
    ke.useDeferredValue = function(T, V) {
        return L.H.useDeferredValue(T, V)
    }
    ,
    ke.useEffect = function(T, V, ae) {
        var te = L.H;
        if (typeof ae == "function")
            throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return te.useEffect(T, V)
    }
    ,
    ke.useId = function() {
        return L.H.useId()
    }
    ,
    ke.useImperativeHandle = function(T, V, ae) {
        return L.H.useImperativeHandle(T, V, ae)
    }
    ,
    ke.useInsertionEffect = function(T, V) {
        return L.H.useInsertionEffect(T, V)
    }
    ,
    ke.useLayoutEffect = function(T, V) {
        return L.H.useLayoutEffect(T, V)
    }
    ,
    ke.useMemo = function(T, V) {
        return L.H.useMemo(T, V)
    }
    ,
    ke.useOptimistic = function(T, V) {
        return L.H.useOptimistic(T, V)
    }
    ,
    ke.useReducer = function(T, V, ae) {
        return L.H.useReducer(T, V, ae)
    }
    ,
    ke.useRef = function(T) {
        return L.H.useRef(T)
    }
    ,
    ke.useState = function(T) {
        return L.H.useState(T)
    }
    ,
    ke.useSyncExternalStore = function(T, V, ae) {
        return L.H.useSyncExternalStore(T, V, ae)
    }
    ,
    ke.useTransition = function() {
        return L.H.useTransition()
    }
    ,
    ke.version = "19.1.0",
    ke
}
var Ym;
function Vf() {
    return Ym || (Ym = 1,
    Vc.exports = $b()),
    Vc.exports
}
var w = Vf();
const _p = na(w)
  , Tx = Hb({
    __proto__: null,
    default: _p
}, [w]);
var Yc = {
    exports: {}
}
  , oi = {}
  , Gc = {
    exports: {}
}
  , Pc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gm;
function Vb() {
    return Gm || (Gm = 1,
    function(a) {
        function r(A, P) {
            var Z = A.length;
            A.push(P);
            e: for (; 0 < Z; ) {
                var re = Z - 1 >>> 1
                  , T = A[re];
                if (0 < u(T, P))
                    A[re] = P,
                    A[Z] = T,
                    Z = re;
                else
                    break e
            }
        }
        function l(A) {
            return A.length === 0 ? null : A[0]
        }
        function o(A) {
            if (A.length === 0)
                return null;
            var P = A[0]
              , Z = A.pop();
            if (Z !== P) {
                A[0] = Z;
                e: for (var re = 0, T = A.length, V = T >>> 1; re < V; ) {
                    var ae = 2 * (re + 1) - 1
                      , te = A[ae]
                      , ue = ae + 1
                      , Te = A[ue];
                    if (0 > u(te, Z))
                        ue < T && 0 > u(Te, te) ? (A[re] = Te,
                        A[ue] = Z,
                        re = ue) : (A[re] = te,
                        A[ae] = Z,
                        re = ae);
                    else if (ue < T && 0 > u(Te, Z))
                        A[re] = Te,
                        A[ue] = Z,
                        re = ue;
                    else
                        break e
                }
            }
            return P
        }
        function u(A, P) {
            var Z = A.sortIndex - P.sortIndex;
            return Z !== 0 ? Z : A.id - P.id
        }
        if (a.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var c = performance;
            a.unstable_now = function() {
                return c.now()
            }
        } else {
            var f = Date
              , m = f.now();
            a.unstable_now = function() {
                return f.now() - m
            }
        }
        var h = []
          , g = []
          , p = 1
          , v = null
          , b = 3
          , R = !1
          , S = !1
          , D = !1
          , O = !1
          , z = typeof setTimeout == "function" ? setTimeout : null
          , G = typeof clearTimeout == "function" ? clearTimeout : null
          , $ = typeof setImmediate < "u" ? setImmediate : null;
        function ee(A) {
            for (var P = l(g); P !== null; ) {
                if (P.callback === null)
                    o(g);
                else if (P.startTime <= A)
                    o(g),
                    P.sortIndex = P.expirationTime,
                    r(h, P);
                else
                    break;
                P = l(g)
            }
        }
        function L(A) {
            if (D = !1,
            ee(A),
            !S)
                if (l(h) !== null)
                    S = !0,
                    _ || (_ = !0,
                    xe());
                else {
                    var P = l(g);
                    P !== null && J(L, P.startTime - A)
                }
        }
        var _ = !1
          , ne = -1
          , oe = 5
          , ce = -1;
        function he() {
            return O ? !0 : !(a.unstable_now() - ce < oe)
        }
        function se() {
            if (O = !1,
            _) {
                var A = a.unstable_now();
                ce = A;
                var P = !0;
                try {
                    e: {
                        S = !1,
                        D && (D = !1,
                        G(ne),
                        ne = -1),
                        R = !0;
                        var Z = b;
                        try {
                            t: {
                                for (ee(A),
                                v = l(h); v !== null && !(v.expirationTime > A && he()); ) {
                                    var re = v.callback;
                                    if (typeof re == "function") {
                                        v.callback = null,
                                        b = v.priorityLevel;
                                        var T = re(v.expirationTime <= A);
                                        if (A = a.unstable_now(),
                                        typeof T == "function") {
                                            v.callback = T,
                                            ee(A),
                                            P = !0;
                                            break t
                                        }
                                        v === l(h) && o(h),
                                        ee(A)
                                    } else
                                        o(h);
                                    v = l(h)
                                }
                                if (v !== null)
                                    P = !0;
                                else {
                                    var V = l(g);
                                    V !== null && J(L, V.startTime - A),
                                    P = !1
                                }
                            }
                            break e
                        } finally {
                            v = null,
                            b = Z,
                            R = !1
                        }
                        P = void 0
                    }
                } finally {
                    P ? xe() : _ = !1
                }
            }
        }
        var xe;
        if (typeof $ == "function")
            xe = function() {
                $(se)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var ge = new MessageChannel
              , le = ge.port2;
            ge.port1.onmessage = se,
            xe = function() {
                le.postMessage(null)
            }
        } else
            xe = function() {
                z(se, 0)
            }
            ;
        function J(A, P) {
            ne = z(function() {
                A(a.unstable_now())
            }, P)
        }
        a.unstable_IdlePriority = 5,
        a.unstable_ImmediatePriority = 1,
        a.unstable_LowPriority = 4,
        a.unstable_NormalPriority = 3,
        a.unstable_Profiling = null,
        a.unstable_UserBlockingPriority = 2,
        a.unstable_cancelCallback = function(A) {
            A.callback = null
        }
        ,
        a.unstable_forceFrameRate = function(A) {
            0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : oe = 0 < A ? Math.floor(1e3 / A) : 5
        }
        ,
        a.unstable_getCurrentPriorityLevel = function() {
            return b
        }
        ,
        a.unstable_next = function(A) {
            switch (b) {
            case 1:
            case 2:
            case 3:
                var P = 3;
                break;
            default:
                P = b
            }
            var Z = b;
            b = P;
            try {
                return A()
            } finally {
                b = Z
            }
        }
        ,
        a.unstable_requestPaint = function() {
            O = !0
        }
        ,
        a.unstable_runWithPriority = function(A, P) {
            switch (A) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                A = 3
            }
            var Z = b;
            b = A;
            try {
                return P()
            } finally {
                b = Z
            }
        }
        ,
        a.unstable_scheduleCallback = function(A, P, Z) {
            var re = a.unstable_now();
            switch (typeof Z == "object" && Z !== null ? (Z = Z.delay,
            Z = typeof Z == "number" && 0 < Z ? re + Z : re) : Z = re,
            A) {
            case 1:
                var T = -1;
                break;
            case 2:
                T = 250;
                break;
            case 5:
                T = 1073741823;
                break;
            case 4:
                T = 1e4;
                break;
            default:
                T = 5e3
            }
            return T = Z + T,
            A = {
                id: p++,
                callback: P,
                priorityLevel: A,
                startTime: Z,
                expirationTime: T,
                sortIndex: -1
            },
            Z > re ? (A.sortIndex = Z,
            r(g, A),
            l(h) === null && A === l(g) && (D ? (G(ne),
            ne = -1) : D = !0,
            J(L, Z - re))) : (A.sortIndex = T,
            r(h, A),
            S || R || (S = !0,
            _ || (_ = !0,
            xe()))),
            A
        }
        ,
        a.unstable_shouldYield = he,
        a.unstable_wrapCallback = function(A) {
            var P = b;
            return function() {
                var Z = b;
                b = P;
                try {
                    return A.apply(this, arguments)
                } finally {
                    b = Z
                }
            }
        }
    }(Pc)),
    Pc
}
var Pm;
function Yb() {
    return Pm || (Pm = 1,
    Gc.exports = Vb()),
    Gc.exports
}
var Xc = {
    exports: {}
}
  , Lt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xm;
function Gb() {
    if (Xm)
        return Lt;
    Xm = 1;
    var a = Vf();
    function r(h) {
        var g = "https://react.dev/errors/" + h;
        if (1 < arguments.length) {
            g += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var p = 2; p < arguments.length; p++)
                g += "&args[]=" + encodeURIComponent(arguments[p])
        }
        return "Minified React error #" + h + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function l() {}
    var o = {
        d: {
            f: l,
            r: function() {
                throw Error(r(522))
            },
            D: l,
            C: l,
            L: l,
            m: l,
            X: l,
            S: l,
            M: l
        },
        p: 0,
        findDOMNode: null
    }
      , u = Symbol.for("react.portal");
    function c(h, g, p) {
        var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: u,
            key: v == null ? null : "" + v,
            children: h,
            containerInfo: g,
            implementation: p
        }
    }
    var f = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function m(h, g) {
        if (h === "font")
            return "";
        if (typeof g == "string")
            return g === "use-credentials" ? g : ""
    }
    return Lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o,
    Lt.createPortal = function(h, g) {
        var p = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
            throw Error(r(299));
        return c(h, g, null, p)
    }
    ,
    Lt.flushSync = function(h) {
        var g = f.T
          , p = o.p;
        try {
            if (f.T = null,
            o.p = 2,
            h)
                return h()
        } finally {
            f.T = g,
            o.p = p,
            o.d.f()
        }
    }
    ,
    Lt.preconnect = function(h, g) {
        typeof h == "string" && (g ? (g = g.crossOrigin,
        g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null,
        o.d.C(h, g))
    }
    ,
    Lt.prefetchDNS = function(h) {
        typeof h == "string" && o.d.D(h)
    }
    ,
    Lt.preinit = function(h, g) {
        if (typeof h == "string" && g && typeof g.as == "string") {
            var p = g.as
              , v = m(p, g.crossOrigin)
              , b = typeof g.integrity == "string" ? g.integrity : void 0
              , R = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
            p === "style" ? o.d.S(h, typeof g.precedence == "string" ? g.precedence : void 0, {
                crossOrigin: v,
                integrity: b,
                fetchPriority: R
            }) : p === "script" && o.d.X(h, {
                crossOrigin: v,
                integrity: b,
                fetchPriority: R,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0
            })
        }
    }
    ,
    Lt.preinitModule = function(h, g) {
        if (typeof h == "string")
            if (typeof g == "object" && g !== null) {
                if (g.as == null || g.as === "script") {
                    var p = m(g.as, g.crossOrigin);
                    o.d.M(h, {
                        crossOrigin: p,
                        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                        nonce: typeof g.nonce == "string" ? g.nonce : void 0
                    })
                }
            } else
                g == null && o.d.M(h)
    }
    ,
    Lt.preload = function(h, g) {
        if (typeof h == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
            var p = g.as
              , v = m(p, g.crossOrigin);
            o.d.L(h, p, {
                crossOrigin: v,
                integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0,
                type: typeof g.type == "string" ? g.type : void 0,
                fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
                referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
                imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
                imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
                media: typeof g.media == "string" ? g.media : void 0
            })
        }
    }
    ,
    Lt.preloadModule = function(h, g) {
        if (typeof h == "string")
            if (g) {
                var p = m(g.as, g.crossOrigin);
                o.d.m(h, {
                    as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
                    crossOrigin: p,
                    integrity: typeof g.integrity == "string" ? g.integrity : void 0
                })
            } else
                o.d.m(h)
    }
    ,
    Lt.requestFormReset = function(h) {
        o.d.r(h)
    }
    ,
    Lt.unstable_batchedUpdates = function(h, g) {
        return h(g)
    }
    ,
    Lt.useFormState = function(h, g, p) {
        return f.H.useFormState(h, g, p)
    }
    ,
    Lt.useFormStatus = function() {
        return f.H.useHostTransitionStatus()
    }
    ,
    Lt.version = "19.1.0",
    Lt
}
var Qm;
function Mp() {
    if (Qm)
        return Xc.exports;
    Qm = 1;
    function a() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)
            } catch (r) {
                console.error(r)
            }
    }
    return a(),
    Xc.exports = Gb(),
    Xc.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zm;
function Pb() {
    if (Zm)
        return oi;
    Zm = 1;
    var a = Yb()
      , r = Vf()
      , l = Mp();
    function o(e) {
        var t = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
                t += "&args[]=" + encodeURIComponent(arguments[n])
        }
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function u(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function c(e) {
        var t = e
          , n = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                (t.flags & 4098) !== 0 && (n = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? n : null
    }
    function f(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function m(e) {
        if (c(e) !== e)
            throw Error(o(188))
    }
    function h(e) {
        var t = e.alternate;
        if (!t) {
            if (t = c(e),
            t === null)
                throw Error(o(188));
            return t !== e ? null : e
        }
        for (var n = e, i = t; ; ) {
            var s = n.return;
            if (s === null)
                break;
            var d = s.alternate;
            if (d === null) {
                if (i = s.return,
                i !== null) {
                    n = i;
                    continue
                }
                break
            }
            if (s.child === d.child) {
                for (d = s.child; d; ) {
                    if (d === n)
                        return m(s),
                        e;
                    if (d === i)
                        return m(s),
                        t;
                    d = d.sibling
                }
                throw Error(o(188))
            }
            if (n.return !== i.return)
                n = s,
                i = d;
            else {
                for (var y = !1, E = s.child; E; ) {
                    if (E === n) {
                        y = !0,
                        n = s,
                        i = d;
                        break
                    }
                    if (E === i) {
                        y = !0,
                        i = s,
                        n = d;
                        break
                    }
                    E = E.sibling
                }
                if (!y) {
                    for (E = d.child; E; ) {
                        if (E === n) {
                            y = !0,
                            n = d,
                            i = s;
                            break
                        }
                        if (E === i) {
                            y = !0,
                            i = d,
                            n = s;
                            break
                        }
                        E = E.sibling
                    }
                    if (!y)
                        throw Error(o(189))
                }
            }
            if (n.alternate !== i)
                throw Error(o(190))
        }
        if (n.tag !== 3)
            throw Error(o(188));
        return n.stateNode.current === n ? e : t
    }
    function g(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e;
        for (e = e.child; e !== null; ) {
            if (t = g(e),
            t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var p = Object.assign
      , v = Symbol.for("react.element")
      , b = Symbol.for("react.transitional.element")
      , R = Symbol.for("react.portal")
      , S = Symbol.for("react.fragment")
      , D = Symbol.for("react.strict_mode")
      , O = Symbol.for("react.profiler")
      , z = Symbol.for("react.provider")
      , G = Symbol.for("react.consumer")
      , $ = Symbol.for("react.context")
      , ee = Symbol.for("react.forward_ref")
      , L = Symbol.for("react.suspense")
      , _ = Symbol.for("react.suspense_list")
      , ne = Symbol.for("react.memo")
      , oe = Symbol.for("react.lazy")
      , ce = Symbol.for("react.activity")
      , he = Symbol.for("react.memo_cache_sentinel")
      , se = Symbol.iterator;
    function xe(e) {
        return e === null || typeof e != "object" ? null : (e = se && e[se] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var ge = Symbol.for("react.client.reference");
    function le(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.$$typeof === ge ? null : e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case S:
            return "Fragment";
        case O:
            return "Profiler";
        case D:
            return "StrictMode";
        case L:
            return "Suspense";
        case _:
            return "SuspenseList";
        case ce:
            return "Activity"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case R:
                return "Portal";
            case $:
                return (e.displayName || "Context") + ".Provider";
            case G:
                return (e._context.displayName || "Context") + ".Consumer";
            case ee:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case ne:
                return t = e.displayName || null,
                t !== null ? t : le(e.type) || "Memo";
            case oe:
                t = e._payload,
                e = e._init;
                try {
                    return le(e(t))
                } catch {}
            }
        return null
    }
    var J = Array.isArray
      , A = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , P = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , Z = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , re = []
      , T = -1;
    function V(e) {
        return {
            current: e
        }
    }
    function ae(e) {
        0 > T || (e.current = re[T],
        re[T] = null,
        T--)
    }
    function te(e, t) {
        T++,
        re[T] = e.current,
        e.current = t
    }
    var ue = V(null)
      , Te = V(null)
      , pe = V(null)
      , lt = V(null);
    function Ye(e, t) {
        switch (te(pe, t),
        te(Te, e),
        te(ue, null),
        t.nodeType) {
        case 9:
        case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? mm(e) : 0;
            break;
        default:
            if (e = t.tagName,
            t = t.namespaceURI)
                t = mm(t),
                e = gm(t, e);
            else
                switch (e) {
                case "svg":
                    e = 1;
                    break;
                case "math":
                    e = 2;
                    break;
                default:
                    e = 0
                }
        }
        ae(ue),
        te(ue, e)
    }
    function xt() {
        ae(ue),
        ae(Te),
        ae(pe)
    }
    function qe(e) {
        e.memoizedState !== null && te(lt, e);
        var t = ue.current
          , n = gm(t, e.type);
        t !== n && (te(Te, e),
        te(ue, n))
    }
    function pt(e) {
        Te.current === e && (ae(ue),
        ae(Te)),
        lt.current === e && (ae(lt),
        ti._currentValue = Z)
    }
    var ln = Object.prototype.hasOwnProperty
      , Cn = a.unstable_scheduleCallback
      , bn = a.unstable_cancelCallback
      , Nu = a.unstable_shouldYield
      , zu = a.unstable_requestPaint
      , Zt = a.unstable_now
      , ju = a.unstable_getCurrentPriorityLevel
      , Ci = a.unstable_ImmediatePriority
      , Ai = a.unstable_UserBlockingPriority
      , mr = a.unstable_NormalPriority
      , Bn = a.unstable_LowPriority
      , ia = a.unstable_IdlePriority
      , Di = a.log
      , sl = a.unstable_setDisableYieldValue
      , Ht = null
      , it = null;
    function Sn(e) {
        if (typeof Di == "function" && sl(e),
        it && typeof it.setStrictMode == "function")
            try {
                it.setStrictMode(Ht, e)
            } catch {}
    }
    var Ot = Math.clz32 ? Math.clz32 : _i
      , Uu = Math.log
      , An = Math.LN2;
    function _i(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (Uu(e) / An | 0) | 0
    }
    var Ha = 256
      , Ba = 4194304;
    function qn(e) {
        var t = e & 42;
        if (t !== 0)
            return t;
        switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
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
            return e & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return e & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return e
        }
    }
    function qa(e, t, n) {
        var i = e.pendingLanes;
        if (i === 0)
            return 0;
        var s = 0
          , d = e.suspendedLanes
          , y = e.pingedLanes;
        e = e.warmLanes;
        var E = i & 134217727;
        return E !== 0 ? (i = E & ~d,
        i !== 0 ? s = qn(i) : (y &= E,
        y !== 0 ? s = qn(y) : n || (n = E & ~e,
        n !== 0 && (s = qn(n))))) : (E = i & ~d,
        E !== 0 ? s = qn(E) : y !== 0 ? s = qn(y) : n || (n = i & ~e,
        n !== 0 && (s = qn(n)))),
        s === 0 ? 0 : t !== 0 && t !== s && (t & d) === 0 && (d = s & -s,
        n = t & -t,
        d >= n || d === 32 && (n & 4194048) !== 0) ? t : s
    }
    function Dn(e, t) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
    }
    function Mi(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
        case 16:
        case 32:
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
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function gr() {
        var e = Ha;
        return Ha <<= 1,
        (Ha & 4194048) === 0 && (Ha = 256),
        e
    }
    function ki() {
        var e = Ba;
        return Ba <<= 1,
        (Ba & 62914560) === 0 && (Ba = 4194304),
        e
    }
    function pr(e) {
        for (var t = [], n = 0; 31 > n; n++)
            t.push(e);
        return t
    }
    function $a(e, t) {
        e.pendingLanes |= t,
        t !== 268435456 && (e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0)
    }
    function Li(e, t, n, i, s, d) {
        var y = e.pendingLanes;
        e.pendingLanes = n,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0,
        e.expiredLanes &= n,
        e.entangledLanes &= n,
        e.errorRecoveryDisabledLanes &= n,
        e.shellSuspendCounter = 0;
        var E = e.entanglements
          , C = e.expirationTimes
          , H = e.hiddenUpdates;
        for (n = y & ~n; 0 < n; ) {
            var F = 31 - Ot(n)
              , I = 1 << F;
            E[F] = 0,
            C[F] = -1;
            var B = H[F];
            if (B !== null)
                for (H[F] = null,
                F = 0; F < B.length; F++) {
                    var q = B[F];
                    q !== null && (q.lane &= -536870913)
                }
            n &= ~I
        }
        i !== 0 && Va(e, i, 0),
        d !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= d & ~(y & ~t))
    }
    function Va(e, t, n) {
        e.pendingLanes |= t,
        e.suspendedLanes &= ~t;
        var i = 31 - Ot(t);
        e.entangledLanes |= t,
        e.entanglements[i] = e.entanglements[i] | 1073741824 | n & 4194090
    }
    function Ya(e, t) {
        var n = e.entangledLanes |= t;
        for (e = e.entanglements; n; ) {
            var i = 31 - Ot(n)
              , s = 1 << i;
            s & t | e[i] & t && (e[i] |= t),
            n &= ~s
        }
    }
    function cl(e) {
        switch (e) {
        case 2:
            e = 1;
            break;
        case 8:
            e = 4;
            break;
        case 32:
            e = 16;
            break;
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
            e = 128;
            break;
        case 268435456:
            e = 134217728;
            break;
        default:
            e = 0
        }
        return e
    }
    function fl(e) {
        return e &= -e,
        2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function M() {
        var e = P.p;
        return e !== 0 ? e : (e = window.event,
        e === void 0 ? 32 : Nm(e.type))
    }
    function j(e, t) {
        var n = P.p;
        try {
            return P.p = e,
            t()
        } finally {
            P.p = n
        }
    }
    var Y = Math.random().toString(36).slice(2)
      , W = "__reactFiber$" + Y
      , ie = "__reactProps$" + Y
      , me = "__reactContainer$" + Y
      , we = "__reactEvents$" + Y
      , fe = "__reactListeners$" + Y
      , Se = "__reactHandles$" + Y
      , Ee = "__reactResources$" + Y
      , Ce = "__reactMarker$" + Y;
    function ve(e) {
        delete e[W],
        delete e[ie],
        delete e[we],
        delete e[fe],
        delete e[Se]
    }
    function De(e) {
        var t = e[W];
        if (t)
            return t;
        for (var n = e.parentNode; n; ) {
            if (t = n[me] || n[W]) {
                if (n = t.alternate,
                t.child !== null || n !== null && n.child !== null)
                    for (e = bm(e); e !== null; ) {
                        if (n = e[W])
                            return n;
                        e = bm(e)
                    }
                return t
            }
            e = n,
            n = e.parentNode
        }
        return null
    }
    function Ve(e) {
        if (e = e[W] || e[me]) {
            var t = e.tag;
            if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
                return e
        }
        return null
    }
    function tt(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return e.stateNode;
        throw Error(o(33))
    }
    function ot(e) {
        var t = e[Ee];
        return t || (t = e[Ee] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        t
    }
    function Ge(e) {
        e[Ce] = !0
    }
    var Be = new Set
      , oa = {};
    function jt(e, t) {
        on(e, t),
        on(e + "Capture", t)
    }
    function on(e, t) {
        for (oa[e] = t,
        e = 0; e < t.length; e++)
            Be.add(t[e])
    }
    var Bt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , ua = {}
      , sa = {};
    function dl(e) {
        return ln.call(sa, e) ? !0 : ln.call(ua, e) ? !1 : Bt.test(e) ? sa[e] = !0 : (ua[e] = !0,
        !1)
    }
    function un(e, t, n) {
        if (dl(t))
            if (n === null)
                e.removeAttribute(t);
            else {
                switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                    e.removeAttribute(t);
                    return;
                case "boolean":
                    var i = t.toLowerCase().slice(0, 5);
                    if (i !== "data-" && i !== "aria-") {
                        e.removeAttribute(t);
                        return
                    }
                }
                e.setAttribute(t, "" + n)
            }
    }
    function $n(e, t, n) {
        if (n === null)
            e.removeAttribute(t);
        else {
            switch (typeof n) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(t);
                return
            }
            e.setAttribute(t, "" + n)
        }
    }
    function Ne(e, t, n, i) {
        if (i === null)
            e.removeAttribute(n);
        else {
            switch (typeof i) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(n);
                return
            }
            e.setAttributeNS(t, n, "" + i)
        }
    }
    var Mt, En;
    function xn(e) {
        if (Mt === void 0)
            try {
                throw Error()
            } catch (n) {
                var t = n.stack.trim().match(/\n( *(at )?)/);
                Mt = t && t[1] || "",
                En = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + Mt + e + En
    }
    var Ga = !1;
    function at(e, t) {
        if (!e || Ga)
            return "";
        Ga = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var i = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var I = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(I.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(I, [])
                                } catch (q) {
                                    var B = q
                                }
                                Reflect.construct(e, [], I)
                            } else {
                                try {
                                    I.call()
                                } catch (q) {
                                    B = q
                                }
                                e.call(I.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (q) {
                                B = q
                            }
                            (I = e()) && typeof I.catch == "function" && I.catch(function() {})
                        }
                    } catch (q) {
                        if (q && B && typeof q.stack == "string")
                            return [q.stack, B.stack]
                    }
                    return [null, null]
                }
            };
            i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var s = Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot, "name");
            s && s.configurable && Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var d = i.DetermineComponentFrameRoot()
              , y = d[0]
              , E = d[1];
            if (y && E) {
                var C = y.split(`
`)
                  , H = E.split(`
`);
                for (s = i = 0; i < C.length && !C[i].includes("DetermineComponentFrameRoot"); )
                    i++;
                for (; s < H.length && !H[s].includes("DetermineComponentFrameRoot"); )
                    s++;
                if (i === C.length || s === H.length)
                    for (i = C.length - 1,
                    s = H.length - 1; 1 <= i && 0 <= s && C[i] !== H[s]; )
                        s--;
                for (; 1 <= i && 0 <= s; i--,
                s--)
                    if (C[i] !== H[s]) {
                        if (i !== 1 || s !== 1)
                            do
                                if (i--,
                                s--,
                                0 > s || C[i] !== H[s]) {
                                    var F = `
` + C[i].replace(" at new ", " at ");
                                    return e.displayName && F.includes("<anonymous>") && (F = F.replace("<anonymous>", e.displayName)),
                                    F
                                }
                            while (1 <= i && 0 <= s);
                        break
                    }
            }
        } finally {
            Ga = !1,
            Error.prepareStackTrace = n
        }
        return (n = e ? e.displayName || e.name : "") ? xn(n) : ""
    }
    function ca(e) {
        switch (e.tag) {
        case 26:
        case 27:
        case 5:
            return xn(e.type);
        case 16:
            return xn("Lazy");
        case 13:
            return xn("Suspense");
        case 19:
            return xn("SuspenseList");
        case 0:
        case 15:
            return at(e.type, !1);
        case 11:
            return at(e.type.render, !1);
        case 1:
            return at(e.type, !0);
        case 31:
            return xn("Activity");
        default:
            return ""
        }
    }
    function hl(e) {
        try {
            var t = "";
            do
                t += ca(e),
                e = e.return;
            while (e);
            return t
        } catch (n) {
            return `
Error generating stack: ` + n.message + `
` + n.stack
        }
    }
    function qt(e) {
        switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
        }
    }
    function sd(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function L1(e) {
        var t = sd(e) ? "checked" : "value"
          , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
          , i = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
            var s = n.get
              , d = n.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return s.call(this)
                },
                set: function(y) {
                    i = "" + y,
                    d.call(this, y)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: n.enumerable
            }),
            {
                getValue: function() {
                    return i
                },
                setValue: function(y) {
                    i = "" + y
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function Ni(e) {
        e._valueTracker || (e._valueTracker = L1(e))
    }
    function cd(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var n = t.getValue()
          , i = "";
        return e && (i = sd(e) ? e.checked ? "true" : "false" : e.value),
        e = i,
        e !== n ? (t.setValue(e),
        !0) : !1
    }
    function zi(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var N1 = /[\n"\\]/g;
    function sn(e) {
        return e.replace(N1, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function Hu(e, t, n, i, s, d, y, E) {
        e.name = "",
        y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.type = y : e.removeAttribute("type"),
        t != null ? y === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + qt(t)) : e.value !== "" + qt(t) && (e.value = "" + qt(t)) : y !== "submit" && y !== "reset" || e.removeAttribute("value"),
        t != null ? Bu(e, y, qt(t)) : n != null ? Bu(e, y, qt(n)) : i != null && e.removeAttribute("value"),
        s == null && d != null && (e.defaultChecked = !!d),
        s != null && (e.checked = s && typeof s != "function" && typeof s != "symbol"),
        E != null && typeof E != "function" && typeof E != "symbol" && typeof E != "boolean" ? e.name = "" + qt(E) : e.removeAttribute("name")
    }
    function fd(e, t, n, i, s, d, y, E) {
        if (d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.type = d),
        t != null || n != null) {
            if (!(d !== "submit" && d !== "reset" || t != null))
                return;
            n = n != null ? "" + qt(n) : "",
            t = t != null ? "" + qt(t) : n,
            E || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        i = i ?? s,
        i = typeof i != "function" && typeof i != "symbol" && !!i,
        e.checked = E ? e.checked : !!i,
        e.defaultChecked = !!i,
        y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (e.name = y)
    }
    function Bu(e, t, n) {
        t === "number" && zi(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n)
    }
    function yr(e, t, n, i) {
        if (e = e.options,
        t) {
            t = {};
            for (var s = 0; s < n.length; s++)
                t["$" + n[s]] = !0;
            for (n = 0; n < e.length; n++)
                s = t.hasOwnProperty("$" + e[n].value),
                e[n].selected !== s && (e[n].selected = s),
                s && i && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + qt(n),
            t = null,
            s = 0; s < e.length; s++) {
                if (e[s].value === n) {
                    e[s].selected = !0,
                    i && (e[s].defaultSelected = !0);
                    return
                }
                t !== null || e[s].disabled || (t = e[s])
            }
            t !== null && (t.selected = !0)
        }
    }
    function dd(e, t, n) {
        if (t != null && (t = "" + qt(t),
        t !== e.value && (e.value = t),
        n == null)) {
            e.defaultValue !== t && (e.defaultValue = t);
            return
        }
        e.defaultValue = n != null ? "" + qt(n) : ""
    }
    function hd(e, t, n, i) {
        if (t == null) {
            if (i != null) {
                if (n != null)
                    throw Error(o(92));
                if (J(i)) {
                    if (1 < i.length)
                        throw Error(o(93));
                    i = i[0]
                }
                n = i
            }
            n == null && (n = ""),
            t = n
        }
        n = qt(t),
        e.defaultValue = n,
        i = e.textContent,
        i === n && i !== "" && i !== null && (e.value = i)
    }
    function vr(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && n.nodeType === 3) {
                n.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var z1 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function md(e, t, n) {
        var i = t.indexOf("--") === 0;
        n == null || typeof n == "boolean" || n === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, n) : typeof n != "number" || n === 0 || z1.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px"
    }
    function gd(e, t, n) {
        if (t != null && typeof t != "object")
            throw Error(o(62));
        if (e = e.style,
        n != null) {
            for (var i in n)
                !n.hasOwnProperty(i) || t != null && t.hasOwnProperty(i) || (i.indexOf("--") === 0 ? e.setProperty(i, "") : i === "float" ? e.cssFloat = "" : e[i] = "");
            for (var s in t)
                i = t[s],
                t.hasOwnProperty(s) && n[s] !== i && md(e, s, i)
        } else
            for (var d in t)
                t.hasOwnProperty(d) && md(e, d, t[d])
    }
    function qu(e) {
        if (e.indexOf("-") === -1)
            return !1;
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
    var j1 = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , U1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function ji(e) {
        return U1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    var $u = null;
    function Vu(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var br = null
      , Sr = null;
    function pd(e) {
        var t = Ve(e);
        if (t && (e = t.stateNode)) {
            var n = e[ie] || null;
            e: switch (e = t.stateNode,
            t.type) {
            case "input":
                if (Hu(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
                t = n.name,
                n.type === "radio" && t != null) {
                    for (n = e; n.parentNode; )
                        n = n.parentNode;
                    for (n = n.querySelectorAll('input[name="' + sn("" + t) + '"][type="radio"]'),
                    t = 0; t < n.length; t++) {
                        var i = n[t];
                        if (i !== e && i.form === e.form) {
                            var s = i[ie] || null;
                            if (!s)
                                throw Error(o(90));
                            Hu(i, s.value, s.defaultValue, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name)
                        }
                    }
                    for (t = 0; t < n.length; t++)
                        i = n[t],
                        i.form === e.form && cd(i)
                }
                break e;
            case "textarea":
                dd(e, n.value, n.defaultValue);
                break e;
            case "select":
                t = n.value,
                t != null && yr(e, !!n.multiple, t, !1)
            }
        }
    }
    var Yu = !1;
    function yd(e, t, n) {
        if (Yu)
            return e(t, n);
        Yu = !0;
        try {
            var i = e(t);
            return i
        } finally {
            if (Yu = !1,
            (br !== null || Sr !== null) && (xo(),
            br && (t = br,
            e = Sr,
            Sr = br = null,
            pd(t),
            e)))
                for (t = 0; t < e.length; t++)
                    pd(e[t])
        }
    }
    function ml(e, t) {
        var n = e.stateNode;
        if (n === null)
            return null;
        var i = n[ie] || null;
        if (i === null)
            return null;
        n = i[t];
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
            (i = !i.disabled) || (e = e.type,
            i = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !i;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (n && typeof n != "function")
            throw Error(o(231, t, typeof n));
        return n
    }
    var Vn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , Gu = !1;
    if (Vn)
        try {
            var gl = {};
            Object.defineProperty(gl, "passive", {
                get: function() {
                    Gu = !0
                }
            }),
            window.addEventListener("test", gl, gl),
            window.removeEventListener("test", gl, gl)
        } catch {
            Gu = !1
        }
    var fa = null
      , Pu = null
      , Ui = null;
    function vd() {
        if (Ui)
            return Ui;
        var e, t = Pu, n = t.length, i, s = "value"in fa ? fa.value : fa.textContent, d = s.length;
        for (e = 0; e < n && t[e] === s[e]; e++)
            ;
        var y = n - e;
        for (i = 1; i <= y && t[n - i] === s[d - i]; i++)
            ;
        return Ui = s.slice(e, 1 < i ? 1 - i : void 0)
    }
    function Hi(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function Bi() {
        return !0
    }
    function bd() {
        return !1
    }
    function $t(e) {
        function t(n, i, s, d, y) {
            this._reactName = n,
            this._targetInst = s,
            this.type = i,
            this.nativeEvent = d,
            this.target = y,
            this.currentTarget = null;
            for (var E in e)
                e.hasOwnProperty(E) && (n = e[E],
                this[E] = n ? n(d) : d[E]);
            return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Bi : bd,
            this.isPropagationStopped = bd,
            this
        }
        return p(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                this.isDefaultPrevented = Bi)
            },
            stopPropagation: function() {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                this.isPropagationStopped = Bi)
            },
            persist: function() {},
            isPersistent: Bi
        }),
        t
    }
    var Pa = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, qi = $t(Pa), pl = p({}, Pa, {
        view: 0,
        detail: 0
    }), H1 = $t(pl), Xu, Qu, yl, $i = p({}, pl, {
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
        getModifierState: Fu,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== yl && (yl && e.type === "mousemove" ? (Xu = e.screenX - yl.screenX,
            Qu = e.screenY - yl.screenY) : Qu = Xu = 0,
            yl = e),
            Xu)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : Qu
        }
    }), Sd = $t($i), B1 = p({}, $i, {
        dataTransfer: 0
    }), q1 = $t(B1), $1 = p({}, pl, {
        relatedTarget: 0
    }), Zu = $t($1), V1 = p({}, Pa, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), Y1 = $t(V1), G1 = p({}, Pa, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), P1 = $t(G1), X1 = p({}, Pa, {
        data: 0
    }), Ed = $t(X1), Q1 = {
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
    }, Z1 = {
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
    }, F1 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function K1(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = F1[e]) ? !!t[e] : !1
    }
    function Fu() {
        return K1
    }
    var J1 = p({}, pl, {
        key: function(e) {
            if (e.key) {
                var t = Q1[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = Hi(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Z1[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Fu,
        charCode: function(e) {
            return e.type === "keypress" ? Hi(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Hi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , I1 = $t(J1)
      , W1 = p({}, $i, {
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
    })
      , xd = $t(W1)
      , ev = p({}, pl, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Fu
    })
      , tv = $t(ev)
      , nv = p({}, Pa, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , av = $t(nv)
      , rv = p({}, $i, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , lv = $t(rv)
      , iv = p({}, Pa, {
        newState: 0,
        oldState: 0
    })
      , ov = $t(iv)
      , uv = [9, 13, 27, 32]
      , Ku = Vn && "CompositionEvent"in window
      , vl = null;
    Vn && "documentMode"in document && (vl = document.documentMode);
    var sv = Vn && "TextEvent"in window && !vl
      , wd = Vn && (!Ku || vl && 8 < vl && 11 >= vl)
      , Rd = " "
      , Td = !1;
    function Od(e, t) {
        switch (e) {
        case "keyup":
            return uv.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Cd(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var Er = !1;
    function cv(e, t) {
        switch (e) {
        case "compositionend":
            return Cd(t);
        case "keypress":
            return t.which !== 32 ? null : (Td = !0,
            Rd);
        case "textInput":
            return e = t.data,
            e === Rd && Td ? null : e;
        default:
            return null
        }
    }
    function fv(e, t) {
        if (Er)
            return e === "compositionend" || !Ku && Od(e, t) ? (e = vd(),
            Ui = Pu = fa = null,
            Er = !1,
            e) : null;
        switch (e) {
        case "paste":
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
            return wd && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var dv = {
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
    function Ad(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!dv[e.type] : t === "textarea"
    }
    function Dd(e, t, n, i) {
        br ? Sr ? Sr.push(i) : Sr = [i] : br = i,
        t = Ao(t, "onChange"),
        0 < t.length && (n = new qi("onChange","change",null,n,i),
        e.push({
            event: n,
            listeners: t
        }))
    }
    var bl = null
      , Sl = null;
    function hv(e) {
        sm(e, 0)
    }
    function Vi(e) {
        var t = tt(e);
        if (cd(t))
            return e
    }
    function _d(e, t) {
        if (e === "change")
            return t
    }
    var Md = !1;
    if (Vn) {
        var Ju;
        if (Vn) {
            var Iu = "oninput"in document;
            if (!Iu) {
                var kd = document.createElement("div");
                kd.setAttribute("oninput", "return;"),
                Iu = typeof kd.oninput == "function"
            }
            Ju = Iu
        } else
            Ju = !1;
        Md = Ju && (!document.documentMode || 9 < document.documentMode)
    }
    function Ld() {
        bl && (bl.detachEvent("onpropertychange", Nd),
        Sl = bl = null)
    }
    function Nd(e) {
        if (e.propertyName === "value" && Vi(Sl)) {
            var t = [];
            Dd(t, Sl, e, Vu(e)),
            yd(hv, t)
        }
    }
    function mv(e, t, n) {
        e === "focusin" ? (Ld(),
        bl = t,
        Sl = n,
        bl.attachEvent("onpropertychange", Nd)) : e === "focusout" && Ld()
    }
    function gv(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return Vi(Sl)
    }
    function pv(e, t) {
        if (e === "click")
            return Vi(t)
    }
    function yv(e, t) {
        if (e === "input" || e === "change")
            return Vi(t)
    }
    function vv(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var Ft = typeof Object.is == "function" ? Object.is : vv;
    function El(e, t) {
        if (Ft(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var n = Object.keys(e)
          , i = Object.keys(t);
        if (n.length !== i.length)
            return !1;
        for (i = 0; i < n.length; i++) {
            var s = n[i];
            if (!ln.call(t, s) || !Ft(e[s], t[s]))
                return !1
        }
        return !0
    }
    function zd(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function jd(e, t) {
        var n = zd(e);
        e = 0;
        for (var i; n; ) {
            if (n.nodeType === 3) {
                if (i = e + n.textContent.length,
                e <= t && i >= t)
                    return {
                        node: n,
                        offset: t - e
                    };
                e = i
            }
            e: {
                for (; n; ) {
                    if (n.nextSibling) {
                        n = n.nextSibling;
                        break e
                    }
                    n = n.parentNode
                }
                n = void 0
            }
            n = zd(n)
        }
    }
    function Ud(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ud(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function Hd(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var t = zi(e.document); t instanceof e.HTMLIFrameElement; ) {
            try {
                var n = typeof t.contentWindow.location.href == "string"
            } catch {
                n = !1
            }
            if (n)
                e = t.contentWindow;
            else
                break;
            t = zi(e.document)
        }
        return t
    }
    function Wu(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    var bv = Vn && "documentMode"in document && 11 >= document.documentMode
      , xr = null
      , es = null
      , xl = null
      , ts = !1;
    function Bd(e, t, n) {
        var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        ts || xr == null || xr !== zi(i) || (i = xr,
        "selectionStart"in i && Wu(i) ? i = {
            start: i.selectionStart,
            end: i.selectionEnd
        } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(),
        i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset
        }),
        xl && El(xl, i) || (xl = i,
        i = Ao(es, "onSelect"),
        0 < i.length && (t = new qi("onSelect","select",null,t,n),
        e.push({
            event: t,
            listeners: i
        }),
        t.target = xr)))
    }
    function Xa(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(),
        n["Webkit" + e] = "webkit" + t,
        n["Moz" + e] = "moz" + t,
        n
    }
    var wr = {
        animationend: Xa("Animation", "AnimationEnd"),
        animationiteration: Xa("Animation", "AnimationIteration"),
        animationstart: Xa("Animation", "AnimationStart"),
        transitionrun: Xa("Transition", "TransitionRun"),
        transitionstart: Xa("Transition", "TransitionStart"),
        transitioncancel: Xa("Transition", "TransitionCancel"),
        transitionend: Xa("Transition", "TransitionEnd")
    }
      , ns = {}
      , qd = {};
    Vn && (qd = document.createElement("div").style,
    "AnimationEvent"in window || (delete wr.animationend.animation,
    delete wr.animationiteration.animation,
    delete wr.animationstart.animation),
    "TransitionEvent"in window || delete wr.transitionend.transition);
    function Qa(e) {
        if (ns[e])
            return ns[e];
        if (!wr[e])
            return e;
        var t = wr[e], n;
        for (n in t)
            if (t.hasOwnProperty(n) && n in qd)
                return ns[e] = t[n];
        return e
    }
    var $d = Qa("animationend")
      , Vd = Qa("animationiteration")
      , Yd = Qa("animationstart")
      , Sv = Qa("transitionrun")
      , Ev = Qa("transitionstart")
      , xv = Qa("transitioncancel")
      , Gd = Qa("transitionend")
      , Pd = new Map
      , as = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    as.push("scrollEnd");
    function wn(e, t) {
        Pd.set(e, t),
        jt(t, [e])
    }
    var Xd = new WeakMap;
    function cn(e, t) {
        if (typeof e == "object" && e !== null) {
            var n = Xd.get(e);
            return n !== void 0 ? n : (t = {
                value: e,
                source: t,
                stack: hl(t)
            },
            Xd.set(e, t),
            t)
        }
        return {
            value: e,
            source: t,
            stack: hl(t)
        }
    }
    var fn = []
      , Rr = 0
      , rs = 0;
    function Yi() {
        for (var e = Rr, t = rs = Rr = 0; t < e; ) {
            var n = fn[t];
            fn[t++] = null;
            var i = fn[t];
            fn[t++] = null;
            var s = fn[t];
            fn[t++] = null;
            var d = fn[t];
            if (fn[t++] = null,
            i !== null && s !== null) {
                var y = i.pending;
                y === null ? s.next = s : (s.next = y.next,
                y.next = s),
                i.pending = s
            }
            d !== 0 && Qd(n, s, d)
        }
    }
    function Gi(e, t, n, i) {
        fn[Rr++] = e,
        fn[Rr++] = t,
        fn[Rr++] = n,
        fn[Rr++] = i,
        rs |= i,
        e.lanes |= i,
        e = e.alternate,
        e !== null && (e.lanes |= i)
    }
    function ls(e, t, n, i) {
        return Gi(e, t, n, i),
        Pi(e)
    }
    function Tr(e, t) {
        return Gi(e, null, null, t),
        Pi(e)
    }
    function Qd(e, t, n) {
        e.lanes |= n;
        var i = e.alternate;
        i !== null && (i.lanes |= n);
        for (var s = !1, d = e.return; d !== null; )
            d.childLanes |= n,
            i = d.alternate,
            i !== null && (i.childLanes |= n),
            d.tag === 22 && (e = d.stateNode,
            e === null || e._visibility & 1 || (s = !0)),
            e = d,
            d = d.return;
        return e.tag === 3 ? (d = e.stateNode,
        s && t !== null && (s = 31 - Ot(n),
        e = d.hiddenUpdates,
        i = e[s],
        i === null ? e[s] = [t] : i.push(t),
        t.lane = n | 536870912),
        d) : null
    }
    function Pi(e) {
        if (50 < Ql)
            throw Ql = 0,
            fc = null,
            Error(o(185));
        for (var t = e.return; t !== null; )
            e = t,
            t = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var Or = {};
    function wv(e, t, n, i) {
        this.tag = e,
        this.key = n,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = i,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function Kt(e, t, n, i) {
        return new wv(e,t,n,i)
    }
    function is(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function Yn(e, t) {
        var n = e.alternate;
        return n === null ? (n = Kt(e.tag, t, e.key, e.mode),
        n.elementType = e.elementType,
        n.type = e.type,
        n.stateNode = e.stateNode,
        n.alternate = e,
        e.alternate = n) : (n.pendingProps = t,
        n.type = e.type,
        n.flags = 0,
        n.subtreeFlags = 0,
        n.deletions = null),
        n.flags = e.flags & 65011712,
        n.childLanes = e.childLanes,
        n.lanes = e.lanes,
        n.child = e.child,
        n.memoizedProps = e.memoizedProps,
        n.memoizedState = e.memoizedState,
        n.updateQueue = e.updateQueue,
        t = e.dependencies,
        n.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        n.sibling = e.sibling,
        n.index = e.index,
        n.ref = e.ref,
        n.refCleanup = e.refCleanup,
        n
    }
    function Zd(e, t) {
        e.flags &= 65011714;
        var n = e.alternate;
        return n === null ? (e.childLanes = 0,
        e.lanes = t,
        e.child = null,
        e.subtreeFlags = 0,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.updateQueue = null,
        e.dependencies = null,
        e.stateNode = null) : (e.childLanes = n.childLanes,
        e.lanes = n.lanes,
        e.child = n.child,
        e.subtreeFlags = 0,
        e.deletions = null,
        e.memoizedProps = n.memoizedProps,
        e.memoizedState = n.memoizedState,
        e.updateQueue = n.updateQueue,
        e.type = n.type,
        t = n.dependencies,
        e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }),
        e
    }
    function Xi(e, t, n, i, s, d) {
        var y = 0;
        if (i = e,
        typeof e == "function")
            is(e) && (y = 1);
        else if (typeof e == "string")
            y = Tb(e, n, ue.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else
            e: switch (e) {
            case ce:
                return e = Kt(31, n, t, s),
                e.elementType = ce,
                e.lanes = d,
                e;
            case S:
                return Za(n.children, s, d, t);
            case D:
                y = 8,
                s |= 24;
                break;
            case O:
                return e = Kt(12, n, t, s | 2),
                e.elementType = O,
                e.lanes = d,
                e;
            case L:
                return e = Kt(13, n, t, s),
                e.elementType = L,
                e.lanes = d,
                e;
            case _:
                return e = Kt(19, n, t, s),
                e.elementType = _,
                e.lanes = d,
                e;
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case z:
                    case $:
                        y = 10;
                        break e;
                    case G:
                        y = 9;
                        break e;
                    case ee:
                        y = 11;
                        break e;
                    case ne:
                        y = 14;
                        break e;
                    case oe:
                        y = 16,
                        i = null;
                        break e
                    }
                y = 29,
                n = Error(o(130, e === null ? "null" : typeof e, "")),
                i = null
            }
        return t = Kt(y, n, t, s),
        t.elementType = e,
        t.type = i,
        t.lanes = d,
        t
    }
    function Za(e, t, n, i) {
        return e = Kt(7, e, i, t),
        e.lanes = n,
        e
    }
    function os(e, t, n) {
        return e = Kt(6, e, null, t),
        e.lanes = n,
        e
    }
    function us(e, t, n) {
        return t = Kt(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = n,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    var Cr = []
      , Ar = 0
      , Qi = null
      , Zi = 0
      , dn = []
      , hn = 0
      , Fa = null
      , Gn = 1
      , Pn = "";
    function Ka(e, t) {
        Cr[Ar++] = Zi,
        Cr[Ar++] = Qi,
        Qi = e,
        Zi = t
    }
    function Fd(e, t, n) {
        dn[hn++] = Gn,
        dn[hn++] = Pn,
        dn[hn++] = Fa,
        Fa = e;
        var i = Gn;
        e = Pn;
        var s = 32 - Ot(i) - 1;
        i &= ~(1 << s),
        n += 1;
        var d = 32 - Ot(t) + s;
        if (30 < d) {
            var y = s - s % 5;
            d = (i & (1 << y) - 1).toString(32),
            i >>= y,
            s -= y,
            Gn = 1 << 32 - Ot(t) + s | n << s | i,
            Pn = d + e
        } else
            Gn = 1 << d | n << s | i,
            Pn = e
    }
    function ss(e) {
        e.return !== null && (Ka(e, 1),
        Fd(e, 1, 0))
    }
    function cs(e) {
        for (; e === Qi; )
            Qi = Cr[--Ar],
            Cr[Ar] = null,
            Zi = Cr[--Ar],
            Cr[Ar] = null;
        for (; e === Fa; )
            Fa = dn[--hn],
            dn[hn] = null,
            Pn = dn[--hn],
            dn[hn] = null,
            Gn = dn[--hn],
            dn[hn] = null
    }
    var Ut = null
      , st = null
      , Xe = !1
      , Ja = null
      , _n = !1
      , fs = Error(o(519));
    function Ia(e) {
        var t = Error(o(418, ""));
        throw Tl(cn(t, e)),
        fs
    }
    function Kd(e) {
        var t = e.stateNode
          , n = e.type
          , i = e.memoizedProps;
        switch (t[W] = e,
        t[ie] = i,
        n) {
        case "dialog":
            He("cancel", t),
            He("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            He("load", t);
            break;
        case "video":
        case "audio":
            for (n = 0; n < Fl.length; n++)
                He(Fl[n], t);
            break;
        case "source":
            He("error", t);
            break;
        case "img":
        case "image":
        case "link":
            He("error", t),
            He("load", t);
            break;
        case "details":
            He("toggle", t);
            break;
        case "input":
            He("invalid", t),
            fd(t, i.value, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name, !0),
            Ni(t);
            break;
        case "select":
            He("invalid", t);
            break;
        case "textarea":
            He("invalid", t),
            hd(t, i.value, i.defaultValue, i.children),
            Ni(t)
        }
        n = i.children,
        typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || i.suppressHydrationWarning === !0 || hm(t.textContent, n) ? (i.popover != null && (He("beforetoggle", t),
        He("toggle", t)),
        i.onScroll != null && He("scroll", t),
        i.onScrollEnd != null && He("scrollend", t),
        i.onClick != null && (t.onclick = Do),
        t = !0) : t = !1,
        t || Ia(e)
    }
    function Jd(e) {
        for (Ut = e.return; Ut; )
            switch (Ut.tag) {
            case 5:
            case 13:
                _n = !1;
                return;
            case 27:
            case 3:
                _n = !0;
                return;
            default:
                Ut = Ut.return
            }
    }
    function wl(e) {
        if (e !== Ut)
            return !1;
        if (!Xe)
            return Jd(e),
            Xe = !0,
            !1;
        var t = e.tag, n;
        if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type,
        n = !(n !== "form" && n !== "button") || Cc(e.type, e.memoizedProps)),
        n = !n),
        n && st && Ia(e),
        Jd(e),
        t === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(o(317));
            e: {
                for (e = e.nextSibling,
                t = 0; e; ) {
                    if (e.nodeType === 8)
                        if (n = e.data,
                        n === "/$") {
                            if (t === 0) {
                                st = Tn(e.nextSibling);
                                break e
                            }
                            t--
                        } else
                            n !== "$" && n !== "$!" && n !== "$?" || t++;
                    e = e.nextSibling
                }
                st = null
            }
        } else
            t === 27 ? (t = st,
            Ca(e.type) ? (e = Mc,
            Mc = null,
            st = e) : st = t) : st = Ut ? Tn(e.stateNode.nextSibling) : null;
        return !0
    }
    function Rl() {
        st = Ut = null,
        Xe = !1
    }
    function Id() {
        var e = Ja;
        return e !== null && (Gt === null ? Gt = e : Gt.push.apply(Gt, e),
        Ja = null),
        e
    }
    function Tl(e) {
        Ja === null ? Ja = [e] : Ja.push(e)
    }
    var ds = V(null)
      , Wa = null
      , Xn = null;
    function da(e, t, n) {
        te(ds, t._currentValue),
        t._currentValue = n
    }
    function Qn(e) {
        e._currentValue = ds.current,
        ae(ds)
    }
    function hs(e, t, n) {
        for (; e !== null; ) {
            var i = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
            e === n)
                break;
            e = e.return
        }
    }
    function ms(e, t, n, i) {
        var s = e.child;
        for (s !== null && (s.return = e); s !== null; ) {
            var d = s.dependencies;
            if (d !== null) {
                var y = s.child;
                d = d.firstContext;
                e: for (; d !== null; ) {
                    var E = d;
                    d = s;
                    for (var C = 0; C < t.length; C++)
                        if (E.context === t[C]) {
                            d.lanes |= n,
                            E = d.alternate,
                            E !== null && (E.lanes |= n),
                            hs(d.return, n, e),
                            i || (y = null);
                            break e
                        }
                    d = E.next
                }
            } else if (s.tag === 18) {
                if (y = s.return,
                y === null)
                    throw Error(o(341));
                y.lanes |= n,
                d = y.alternate,
                d !== null && (d.lanes |= n),
                hs(y, n, e),
                y = null
            } else
                y = s.child;
            if (y !== null)
                y.return = s;
            else
                for (y = s; y !== null; ) {
                    if (y === e) {
                        y = null;
                        break
                    }
                    if (s = y.sibling,
                    s !== null) {
                        s.return = y.return,
                        y = s;
                        break
                    }
                    y = y.return
                }
            s = y
        }
    }
    function Ol(e, t, n, i) {
        e = null;
        for (var s = t, d = !1; s !== null; ) {
            if (!d) {
                if ((s.flags & 524288) !== 0)
                    d = !0;
                else if ((s.flags & 262144) !== 0)
                    break
            }
            if (s.tag === 10) {
                var y = s.alternate;
                if (y === null)
                    throw Error(o(387));
                if (y = y.memoizedProps,
                y !== null) {
                    var E = s.type;
                    Ft(s.pendingProps.value, y.value) || (e !== null ? e.push(E) : e = [E])
                }
            } else if (s === lt.current) {
                if (y = s.alternate,
                y === null)
                    throw Error(o(387));
                y.memoizedState.memoizedState !== s.memoizedState.memoizedState && (e !== null ? e.push(ti) : e = [ti])
            }
            s = s.return
        }
        e !== null && ms(t, e, n, i),
        t.flags |= 262144
    }
    function Fi(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!Ft(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next
        }
        return !1
    }
    function er(e) {
        Wa = e,
        Xn = null,
        e = e.dependencies,
        e !== null && (e.firstContext = null)
    }
    function kt(e) {
        return Wd(Wa, e)
    }
    function Ki(e, t) {
        return Wa === null && er(e),
        Wd(e, t)
    }
    function Wd(e, t) {
        var n = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: n,
            next: null
        },
        Xn === null) {
            if (e === null)
                throw Error(o(308));
            Xn = t,
            e.dependencies = {
                lanes: 0,
                firstContext: t
            },
            e.flags |= 524288
        } else
            Xn = Xn.next = t;
        return n
    }
    var Rv = typeof AbortController < "u" ? AbortController : function() {
        var e = []
          , t = this.signal = {
            aborted: !1,
            addEventListener: function(n, i) {
                e.push(i)
            }
        };
        this.abort = function() {
            t.aborted = !0,
            e.forEach(function(n) {
                return n()
            })
        }
    }
      , Tv = a.unstable_scheduleCallback
      , Ov = a.unstable_NormalPriority
      , bt = {
        $$typeof: $,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function gs() {
        return {
            controller: new Rv,
            data: new Map,
            refCount: 0
        }
    }
    function Cl(e) {
        e.refCount--,
        e.refCount === 0 && Tv(Ov, function() {
            e.controller.abort()
        })
    }
    var Al = null
      , ps = 0
      , Dr = 0
      , _r = null;
    function Cv(e, t) {
        if (Al === null) {
            var n = Al = [];
            ps = 0,
            Dr = vc(),
            _r = {
                status: "pending",
                value: void 0,
                then: function(i) {
                    n.push(i)
                }
            }
        }
        return ps++,
        t.then(eh, eh),
        t
    }
    function eh() {
        if (--ps === 0 && Al !== null) {
            _r !== null && (_r.status = "fulfilled");
            var e = Al;
            Al = null,
            Dr = 0,
            _r = null;
            for (var t = 0; t < e.length; t++)
                (0,
                e[t])()
        }
    }
    function Av(e, t) {
        var n = []
          , i = {
            status: "pending",
            value: null,
            reason: null,
            then: function(s) {
                n.push(s)
            }
        };
        return e.then(function() {
            i.status = "fulfilled",
            i.value = t;
            for (var s = 0; s < n.length; s++)
                (0,
                n[s])(t)
        }, function(s) {
            for (i.status = "rejected",
            i.reason = s,
            s = 0; s < n.length; s++)
                (0,
                n[s])(void 0)
        }),
        i
    }
    var th = A.S;
    A.S = function(e, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && Cv(e, t),
        th !== null && th(e, t)
    }
    ;
    var tr = V(null);
    function ys() {
        var e = tr.current;
        return e !== null ? e : et.pooledCache
    }
    function Ji(e, t) {
        t === null ? te(tr, tr.current) : te(tr, t.pool)
    }
    function nh() {
        var e = ys();
        return e === null ? null : {
            parent: bt._currentValue,
            pool: e
        }
    }
    var Dl = Error(o(460))
      , ah = Error(o(474))
      , Ii = Error(o(542))
      , vs = {
        then: function() {}
    };
    function rh(e) {
        return e = e.status,
        e === "fulfilled" || e === "rejected"
    }
    function Wi() {}
    function lh(e, t, n) {
        switch (n = e[n],
        n === void 0 ? e.push(t) : n !== t && (t.then(Wi, Wi),
        t = n),
        t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw e = t.reason,
            oh(e),
            e;
        default:
            if (typeof t.status == "string")
                t.then(Wi, Wi);
            else {
                if (e = et,
                e !== null && 100 < e.shellSuspendCounter)
                    throw Error(o(482));
                e = t,
                e.status = "pending",
                e.then(function(i) {
                    if (t.status === "pending") {
                        var s = t;
                        s.status = "fulfilled",
                        s.value = i
                    }
                }, function(i) {
                    if (t.status === "pending") {
                        var s = t;
                        s.status = "rejected",
                        s.reason = i
                    }
                })
            }
            switch (t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason,
                oh(e),
                e
            }
            throw _l = t,
            Dl
        }
    }
    var _l = null;
    function ih() {
        if (_l === null)
            throw Error(o(459));
        var e = _l;
        return _l = null,
        e
    }
    function oh(e) {
        if (e === Dl || e === Ii)
            throw Error(o(483))
    }
    var ha = !1;
    function bs(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function Ss(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }
    function ma(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function ga(e, t, n) {
        var i = e.updateQueue;
        if (i === null)
            return null;
        if (i = i.shared,
        (Ze & 2) !== 0) {
            var s = i.pending;
            return s === null ? t.next = t : (t.next = s.next,
            s.next = t),
            i.pending = t,
            t = Pi(e),
            Qd(e, null, n),
            t
        }
        return Gi(e, i, t, n),
        Pi(e)
    }
    function Ml(e, t, n) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (n & 4194048) !== 0)) {
            var i = t.lanes;
            i &= e.pendingLanes,
            n |= i,
            t.lanes = n,
            Ya(e, n)
        }
    }
    function Es(e, t) {
        var n = e.updateQueue
          , i = e.alternate;
        if (i !== null && (i = i.updateQueue,
        n === i)) {
            var s = null
              , d = null;
            if (n = n.firstBaseUpdate,
            n !== null) {
                do {
                    var y = {
                        lane: n.lane,
                        tag: n.tag,
                        payload: n.payload,
                        callback: null,
                        next: null
                    };
                    d === null ? s = d = y : d = d.next = y,
                    n = n.next
                } while (n !== null);
                d === null ? s = d = t : d = d.next = t
            } else
                s = d = t;
            n = {
                baseState: i.baseState,
                firstBaseUpdate: s,
                lastBaseUpdate: d,
                shared: i.shared,
                callbacks: i.callbacks
            },
            e.updateQueue = n;
            return
        }
        e = n.lastBaseUpdate,
        e === null ? n.firstBaseUpdate = t : e.next = t,
        n.lastBaseUpdate = t
    }
    var xs = !1;
    function kl() {
        if (xs) {
            var e = _r;
            if (e !== null)
                throw e
        }
    }
    function Ll(e, t, n, i) {
        xs = !1;
        var s = e.updateQueue;
        ha = !1;
        var d = s.firstBaseUpdate
          , y = s.lastBaseUpdate
          , E = s.shared.pending;
        if (E !== null) {
            s.shared.pending = null;
            var C = E
              , H = C.next;
            C.next = null,
            y === null ? d = H : y.next = H,
            y = C;
            var F = e.alternate;
            F !== null && (F = F.updateQueue,
            E = F.lastBaseUpdate,
            E !== y && (E === null ? F.firstBaseUpdate = H : E.next = H,
            F.lastBaseUpdate = C))
        }
        if (d !== null) {
            var I = s.baseState;
            y = 0,
            F = H = C = null,
            E = d;
            do {
                var B = E.lane & -536870913
                  , q = B !== E.lane;
                if (q ? ($e & B) === B : (i & B) === B) {
                    B !== 0 && B === Dr && (xs = !0),
                    F !== null && (F = F.next = {
                        lane: 0,
                        tag: E.tag,
                        payload: E.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var Ae = e
                          , Re = E;
                        B = t;
                        var Ie = n;
                        switch (Re.tag) {
                        case 1:
                            if (Ae = Re.payload,
                            typeof Ae == "function") {
                                I = Ae.call(Ie, I, B);
                                break e
                            }
                            I = Ae;
                            break e;
                        case 3:
                            Ae.flags = Ae.flags & -65537 | 128;
                        case 0:
                            if (Ae = Re.payload,
                            B = typeof Ae == "function" ? Ae.call(Ie, I, B) : Ae,
                            B == null)
                                break e;
                            I = p({}, I, B);
                            break e;
                        case 2:
                            ha = !0
                        }
                    }
                    B = E.callback,
                    B !== null && (e.flags |= 64,
                    q && (e.flags |= 8192),
                    q = s.callbacks,
                    q === null ? s.callbacks = [B] : q.push(B))
                } else
                    q = {
                        lane: B,
                        tag: E.tag,
                        payload: E.payload,
                        callback: E.callback,
                        next: null
                    },
                    F === null ? (H = F = q,
                    C = I) : F = F.next = q,
                    y |= B;
                if (E = E.next,
                E === null) {
                    if (E = s.shared.pending,
                    E === null)
                        break;
                    q = E,
                    E = q.next,
                    q.next = null,
                    s.lastBaseUpdate = q,
                    s.shared.pending = null
                }
            } while (!0);
            F === null && (C = I),
            s.baseState = C,
            s.firstBaseUpdate = H,
            s.lastBaseUpdate = F,
            d === null && (s.shared.lanes = 0),
            wa |= y,
            e.lanes = y,
            e.memoizedState = I
        }
    }
    function uh(e, t) {
        if (typeof e != "function")
            throw Error(o(191, e));
        e.call(t)
    }
    function sh(e, t) {
        var n = e.callbacks;
        if (n !== null)
            for (e.callbacks = null,
            e = 0; e < n.length; e++)
                uh(n[e], t)
    }
    var Mr = V(null)
      , eo = V(0);
    function ch(e, t) {
        e = ea,
        te(eo, e),
        te(Mr, t),
        ea = e | t.baseLanes
    }
    function ws() {
        te(eo, ea),
        te(Mr, Mr.current)
    }
    function Rs() {
        ea = eo.current,
        ae(Mr),
        ae(eo)
    }
    var pa = 0
      , Le = null
      , Ke = null
      , yt = null
      , to = !1
      , kr = !1
      , nr = !1
      , no = 0
      , Nl = 0
      , Lr = null
      , Dv = 0;
    function ft() {
        throw Error(o(321))
    }
    function Ts(e, t) {
        if (t === null)
            return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!Ft(e[n], t[n]))
                return !1;
        return !0
    }
    function Os(e, t, n, i, s, d) {
        return pa = d,
        Le = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        A.H = e === null || e.memoizedState === null ? Qh : Zh,
        nr = !1,
        d = n(i, s),
        nr = !1,
        kr && (d = dh(t, n, i, s)),
        fh(e),
        d
    }
    function fh(e) {
        A.H = uo;
        var t = Ke !== null && Ke.next !== null;
        if (pa = 0,
        yt = Ke = Le = null,
        to = !1,
        Nl = 0,
        Lr = null,
        t)
            throw Error(o(300));
        e === null || wt || (e = e.dependencies,
        e !== null && Fi(e) && (wt = !0))
    }
    function dh(e, t, n, i) {
        Le = e;
        var s = 0;
        do {
            if (kr && (Lr = null),
            Nl = 0,
            kr = !1,
            25 <= s)
                throw Error(o(301));
            if (s += 1,
            yt = Ke = null,
            e.updateQueue != null) {
                var d = e.updateQueue;
                d.lastEffect = null,
                d.events = null,
                d.stores = null,
                d.memoCache != null && (d.memoCache.index = 0)
            }
            A.H = jv,
            d = t(n, i)
        } while (kr);
        return d
    }
    function _v() {
        var e = A.H
          , t = e.useState()[0];
        return t = typeof t.then == "function" ? zl(t) : t,
        e = e.useState()[0],
        (Ke !== null ? Ke.memoizedState : null) !== e && (Le.flags |= 1024),
        t
    }
    function Cs() {
        var e = no !== 0;
        return no = 0,
        e
    }
    function As(e, t, n) {
        t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~n
    }
    function Ds(e) {
        if (to) {
            for (e = e.memoizedState; e !== null; ) {
                var t = e.queue;
                t !== null && (t.pending = null),
                e = e.next
            }
            to = !1
        }
        pa = 0,
        yt = Ke = Le = null,
        kr = !1,
        Nl = no = 0,
        Lr = null
    }
    function Vt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return yt === null ? Le.memoizedState = yt = e : yt = yt.next = e,
        yt
    }
    function vt() {
        if (Ke === null) {
            var e = Le.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = Ke.next;
        var t = yt === null ? Le.memoizedState : yt.next;
        if (t !== null)
            yt = t,
            Ke = e;
        else {
            if (e === null)
                throw Le.alternate === null ? Error(o(467)) : Error(o(310));
            Ke = e,
            e = {
                memoizedState: Ke.memoizedState,
                baseState: Ke.baseState,
                baseQueue: Ke.baseQueue,
                queue: Ke.queue,
                next: null
            },
            yt === null ? Le.memoizedState = yt = e : yt = yt.next = e
        }
        return yt
    }
    function _s() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function zl(e) {
        var t = Nl;
        return Nl += 1,
        Lr === null && (Lr = []),
        e = lh(Lr, e, t),
        t = Le,
        (yt === null ? t.memoizedState : yt.next) === null && (t = t.alternate,
        A.H = t === null || t.memoizedState === null ? Qh : Zh),
        e
    }
    function ao(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
                return zl(e);
            if (e.$$typeof === $)
                return kt(e)
        }
        throw Error(o(438, String(e)))
    }
    function Ms(e) {
        var t = null
          , n = Le.updateQueue;
        if (n !== null && (t = n.memoCache),
        t == null) {
            var i = Le.alternate;
            i !== null && (i = i.updateQueue,
            i !== null && (i = i.memoCache,
            i != null && (t = {
                data: i.data.map(function(s) {
                    return s.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }),
        n === null && (n = _s(),
        Le.updateQueue = n),
        n.memoCache = t,
        n = t.data[t.index],
        n === void 0)
            for (n = t.data[t.index] = Array(e),
            i = 0; i < e; i++)
                n[i] = he;
        return t.index++,
        n
    }
    function Zn(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function ro(e) {
        var t = vt();
        return ks(t, Ke, e)
    }
    function ks(e, t, n) {
        var i = e.queue;
        if (i === null)
            throw Error(o(311));
        i.lastRenderedReducer = n;
        var s = e.baseQueue
          , d = i.pending;
        if (d !== null) {
            if (s !== null) {
                var y = s.next;
                s.next = d.next,
                d.next = y
            }
            t.baseQueue = s = d,
            i.pending = null
        }
        if (d = e.baseState,
        s === null)
            e.memoizedState = d;
        else {
            t = s.next;
            var E = y = null
              , C = null
              , H = t
              , F = !1;
            do {
                var I = H.lane & -536870913;
                if (I !== H.lane ? ($e & I) === I : (pa & I) === I) {
                    var B = H.revertLane;
                    if (B === 0)
                        C !== null && (C = C.next = {
                            lane: 0,
                            revertLane: 0,
                            action: H.action,
                            hasEagerState: H.hasEagerState,
                            eagerState: H.eagerState,
                            next: null
                        }),
                        I === Dr && (F = !0);
                    else if ((pa & B) === B) {
                        H = H.next,
                        B === Dr && (F = !0);
                        continue
                    } else
                        I = {
                            lane: 0,
                            revertLane: H.revertLane,
                            action: H.action,
                            hasEagerState: H.hasEagerState,
                            eagerState: H.eagerState,
                            next: null
                        },
                        C === null ? (E = C = I,
                        y = d) : C = C.next = I,
                        Le.lanes |= B,
                        wa |= B;
                    I = H.action,
                    nr && n(d, I),
                    d = H.hasEagerState ? H.eagerState : n(d, I)
                } else
                    B = {
                        lane: I,
                        revertLane: H.revertLane,
                        action: H.action,
                        hasEagerState: H.hasEagerState,
                        eagerState: H.eagerState,
                        next: null
                    },
                    C === null ? (E = C = B,
                    y = d) : C = C.next = B,
                    Le.lanes |= I,
                    wa |= I;
                H = H.next
            } while (H !== null && H !== t);
            if (C === null ? y = d : C.next = E,
            !Ft(d, e.memoizedState) && (wt = !0,
            F && (n = _r,
            n !== null)))
                throw n;
            e.memoizedState = d,
            e.baseState = y,
            e.baseQueue = C,
            i.lastRenderedState = d
        }
        return s === null && (i.lanes = 0),
        [e.memoizedState, i.dispatch]
    }
    function Ls(e) {
        var t = vt()
          , n = t.queue;
        if (n === null)
            throw Error(o(311));
        n.lastRenderedReducer = e;
        var i = n.dispatch
          , s = n.pending
          , d = t.memoizedState;
        if (s !== null) {
            n.pending = null;
            var y = s = s.next;
            do
                d = e(d, y.action),
                y = y.next;
            while (y !== s);
            Ft(d, t.memoizedState) || (wt = !0),
            t.memoizedState = d,
            t.baseQueue === null && (t.baseState = d),
            n.lastRenderedState = d
        }
        return [d, i]
    }
    function hh(e, t, n) {
        var i = Le
          , s = vt()
          , d = Xe;
        if (d) {
            if (n === void 0)
                throw Error(o(407));
            n = n()
        } else
            n = t();
        var y = !Ft((Ke || s).memoizedState, n);
        y && (s.memoizedState = n,
        wt = !0),
        s = s.queue;
        var E = ph.bind(null, i, s, e);
        if (jl(2048, 8, E, [e]),
        s.getSnapshot !== t || y || yt !== null && yt.memoizedState.tag & 1) {
            if (i.flags |= 2048,
            Nr(9, lo(), gh.bind(null, i, s, n, t), null),
            et === null)
                throw Error(o(349));
            d || (pa & 124) !== 0 || mh(i, t, n)
        }
        return n
    }
    function mh(e, t, n) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: n
        },
        t = Le.updateQueue,
        t === null ? (t = _s(),
        Le.updateQueue = t,
        t.stores = [e]) : (n = t.stores,
        n === null ? t.stores = [e] : n.push(e))
    }
    function gh(e, t, n, i) {
        t.value = n,
        t.getSnapshot = i,
        yh(t) && vh(e)
    }
    function ph(e, t, n) {
        return n(function() {
            yh(t) && vh(e)
        })
    }
    function yh(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var n = t();
            return !Ft(e, n)
        } catch {
            return !0
        }
    }
    function vh(e) {
        var t = Tr(e, 2);
        t !== null && tn(t, e, 2)
    }
    function Ns(e) {
        var t = Vt();
        if (typeof e == "function") {
            var n = e;
            if (e = n(),
            nr) {
                Sn(!0);
                try {
                    n()
                } finally {
                    Sn(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = e,
        t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Zn,
            lastRenderedState: e
        },
        t
    }
    function bh(e, t, n, i) {
        return e.baseState = n,
        ks(e, Ke, typeof i == "function" ? i : Zn)
    }
    function Mv(e, t, n, i, s) {
        if (oo(e))
            throw Error(o(485));
        if (e = t.action,
        e !== null) {
            var d = {
                payload: s,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(y) {
                    d.listeners.push(y)
                }
            };
            A.T !== null ? n(!0) : d.isTransition = !1,
            i(d),
            n = t.pending,
            n === null ? (d.next = t.pending = d,
            Sh(t, d)) : (d.next = n.next,
            t.pending = n.next = d)
        }
    }
    function Sh(e, t) {
        var n = t.action
          , i = t.payload
          , s = e.state;
        if (t.isTransition) {
            var d = A.T
              , y = {};
            A.T = y;
            try {
                var E = n(s, i)
                  , C = A.S;
                C !== null && C(y, E),
                Eh(e, t, E)
            } catch (H) {
                zs(e, t, H)
            } finally {
                A.T = d
            }
        } else
            try {
                d = n(s, i),
                Eh(e, t, d)
            } catch (H) {
                zs(e, t, H)
            }
    }
    function Eh(e, t, n) {
        n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function(i) {
            xh(e, t, i)
        }, function(i) {
            return zs(e, t, i)
        }) : xh(e, t, n)
    }
    function xh(e, t, n) {
        t.status = "fulfilled",
        t.value = n,
        wh(t),
        e.state = n,
        t = e.pending,
        t !== null && (n = t.next,
        n === t ? e.pending = null : (n = n.next,
        t.next = n,
        Sh(e, n)))
    }
    function zs(e, t, n) {
        var i = e.pending;
        if (e.pending = null,
        i !== null) {
            i = i.next;
            do
                t.status = "rejected",
                t.reason = n,
                wh(t),
                t = t.next;
            while (t !== i)
        }
        e.action = null
    }
    function wh(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++)
            (0,
            e[t])()
    }
    function Rh(e, t) {
        return t
    }
    function Th(e, t) {
        if (Xe) {
            var n = et.formState;
            if (n !== null) {
                e: {
                    var i = Le;
                    if (Xe) {
                        if (st) {
                            t: {
                                for (var s = st, d = _n; s.nodeType !== 8; ) {
                                    if (!d) {
                                        s = null;
                                        break t
                                    }
                                    if (s = Tn(s.nextSibling),
                                    s === null) {
                                        s = null;
                                        break t
                                    }
                                }
                                d = s.data,
                                s = d === "F!" || d === "F" ? s : null
                            }
                            if (s) {
                                st = Tn(s.nextSibling),
                                i = s.data === "F!";
                                break e
                            }
                        }
                        Ia(i)
                    }
                    i = !1
                }
                i && (t = n[0])
            }
        }
        return n = Vt(),
        n.memoizedState = n.baseState = t,
        i = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Rh,
            lastRenderedState: t
        },
        n.queue = i,
        n = Gh.bind(null, Le, i),
        i.dispatch = n,
        i = Ns(!1),
        d = qs.bind(null, Le, !1, i.queue),
        i = Vt(),
        s = {
            state: t,
            dispatch: null,
            action: e,
            pending: null
        },
        i.queue = s,
        n = Mv.bind(null, Le, s, d, n),
        s.dispatch = n,
        i.memoizedState = e,
        [t, n, !1]
    }
    function Oh(e) {
        var t = vt();
        return Ch(t, Ke, e)
    }
    function Ch(e, t, n) {
        if (t = ks(e, t, Rh)[0],
        e = ro(Zn)[0],
        typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var i = zl(t)
            } catch (y) {
                throw y === Dl ? Ii : y
            }
        else
            i = t;
        t = vt();
        var s = t.queue
          , d = s.dispatch;
        return n !== t.memoizedState && (Le.flags |= 2048,
        Nr(9, lo(), kv.bind(null, s, n), null)),
        [i, d, e]
    }
    function kv(e, t) {
        e.action = t
    }
    function Ah(e) {
        var t = vt()
          , n = Ke;
        if (n !== null)
            return Ch(t, n, e);
        vt(),
        t = t.memoizedState,
        n = vt();
        var i = n.queue.dispatch;
        return n.memoizedState = e,
        [t, i, !1]
    }
    function Nr(e, t, n, i) {
        return e = {
            tag: e,
            create: n,
            deps: i,
            inst: t,
            next: null
        },
        t = Le.updateQueue,
        t === null && (t = _s(),
        Le.updateQueue = t),
        n = t.lastEffect,
        n === null ? t.lastEffect = e.next = e : (i = n.next,
        n.next = e,
        e.next = i,
        t.lastEffect = e),
        e
    }
    function lo() {
        return {
            destroy: void 0,
            resource: void 0
        }
    }
    function Dh() {
        return vt().memoizedState
    }
    function io(e, t, n, i) {
        var s = Vt();
        i = i === void 0 ? null : i,
        Le.flags |= e,
        s.memoizedState = Nr(1 | t, lo(), n, i)
    }
    function jl(e, t, n, i) {
        var s = vt();
        i = i === void 0 ? null : i;
        var d = s.memoizedState.inst;
        Ke !== null && i !== null && Ts(i, Ke.memoizedState.deps) ? s.memoizedState = Nr(t, d, n, i) : (Le.flags |= e,
        s.memoizedState = Nr(1 | t, d, n, i))
    }
    function _h(e, t) {
        io(8390656, 8, e, t)
    }
    function Mh(e, t) {
        jl(2048, 8, e, t)
    }
    function kh(e, t) {
        return jl(4, 2, e, t)
    }
    function Lh(e, t) {
        return jl(4, 4, e, t)
    }
    function Nh(e, t) {
        if (typeof t == "function") {
            e = e();
            var n = t(e);
            return function() {
                typeof n == "function" ? n() : t(null)
            }
        }
        if (t != null)
            return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
    }
    function zh(e, t, n) {
        n = n != null ? n.concat([e]) : null,
        jl(4, 4, Nh.bind(null, t, e), n)
    }
    function js() {}
    function jh(e, t) {
        var n = vt();
        t = t === void 0 ? null : t;
        var i = n.memoizedState;
        return t !== null && Ts(t, i[1]) ? i[0] : (n.memoizedState = [e, t],
        e)
    }
    function Uh(e, t) {
        var n = vt();
        t = t === void 0 ? null : t;
        var i = n.memoizedState;
        if (t !== null && Ts(t, i[1]))
            return i[0];
        if (i = e(),
        nr) {
            Sn(!0);
            try {
                e()
            } finally {
                Sn(!1)
            }
        }
        return n.memoizedState = [i, t],
        i
    }
    function Us(e, t, n) {
        return n === void 0 || (pa & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = n,
        e = q0(),
        Le.lanes |= e,
        wa |= e,
        n)
    }
    function Hh(e, t, n, i) {
        return Ft(n, t) ? n : Mr.current !== null ? (e = Us(e, n, i),
        Ft(e, t) || (wt = !0),
        e) : (pa & 42) === 0 ? (wt = !0,
        e.memoizedState = n) : (e = q0(),
        Le.lanes |= e,
        wa |= e,
        t)
    }
    function Bh(e, t, n, i, s) {
        var d = P.p;
        P.p = d !== 0 && 8 > d ? d : 8;
        var y = A.T
          , E = {};
        A.T = E,
        qs(e, !1, t, n);
        try {
            var C = s()
              , H = A.S;
            if (H !== null && H(E, C),
            C !== null && typeof C == "object" && typeof C.then == "function") {
                var F = Av(C, i);
                Ul(e, t, F, en(e))
            } else
                Ul(e, t, i, en(e))
        } catch (I) {
            Ul(e, t, {
                then: function() {},
                status: "rejected",
                reason: I
            }, en())
        } finally {
            P.p = d,
            A.T = y
        }
    }
    function Lv() {}
    function Hs(e, t, n, i) {
        if (e.tag !== 5)
            throw Error(o(476));
        var s = qh(e).queue;
        Bh(e, s, t, Z, n === null ? Lv : function() {
            return $h(e),
            n(i)
        }
        )
    }
    function qh(e) {
        var t = e.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: Z,
            baseState: Z,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Zn,
                lastRenderedState: Z
            },
            next: null
        };
        var n = {};
        return t.next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Zn,
                lastRenderedState: n
            },
            next: null
        },
        e.memoizedState = t,
        e = e.alternate,
        e !== null && (e.memoizedState = t),
        t
    }
    function $h(e) {
        var t = qh(e).next.queue;
        Ul(e, t, {}, en())
    }
    function Bs() {
        return kt(ti)
    }
    function Vh() {
        return vt().memoizedState
    }
    function Yh() {
        return vt().memoizedState
    }
    function Nv(e) {
        for (var t = e.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var n = en();
                e = ma(n);
                var i = ga(t, e, n);
                i !== null && (tn(i, t, n),
                Ml(i, t, n)),
                t = {
                    cache: gs()
                },
                e.payload = t;
                return
            }
            t = t.return
        }
    }
    function zv(e, t, n) {
        var i = en();
        n = {
            lane: i,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        oo(e) ? Ph(t, n) : (n = ls(e, t, n, i),
        n !== null && (tn(n, e, i),
        Xh(n, t, i)))
    }
    function Gh(e, t, n) {
        var i = en();
        Ul(e, t, n, i)
    }
    function Ul(e, t, n, i) {
        var s = {
            lane: i,
            revertLane: 0,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (oo(e))
            Ph(t, s);
        else {
            var d = e.alternate;
            if (e.lanes === 0 && (d === null || d.lanes === 0) && (d = t.lastRenderedReducer,
            d !== null))
                try {
                    var y = t.lastRenderedState
                      , E = d(y, n);
                    if (s.hasEagerState = !0,
                    s.eagerState = E,
                    Ft(E, y))
                        return Gi(e, t, s, 0),
                        et === null && Yi(),
                        !1
                } catch {} finally {}
            if (n = ls(e, t, s, i),
            n !== null)
                return tn(n, e, i),
                Xh(n, t, i),
                !0
        }
        return !1
    }
    function qs(e, t, n, i) {
        if (i = {
            lane: 2,
            revertLane: vc(),
            action: i,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        oo(e)) {
            if (t)
                throw Error(o(479))
        } else
            t = ls(e, n, i, 2),
            t !== null && tn(t, e, 2)
    }
    function oo(e) {
        var t = e.alternate;
        return e === Le || t !== null && t === Le
    }
    function Ph(e, t) {
        kr = to = !0;
        var n = e.pending;
        n === null ? t.next = t : (t.next = n.next,
        n.next = t),
        e.pending = t
    }
    function Xh(e, t, n) {
        if ((n & 4194048) !== 0) {
            var i = t.lanes;
            i &= e.pendingLanes,
            n |= i,
            t.lanes = n,
            Ya(e, n)
        }
    }
    var uo = {
        readContext: kt,
        use: ao,
        useCallback: ft,
        useContext: ft,
        useEffect: ft,
        useImperativeHandle: ft,
        useLayoutEffect: ft,
        useInsertionEffect: ft,
        useMemo: ft,
        useReducer: ft,
        useRef: ft,
        useState: ft,
        useDebugValue: ft,
        useDeferredValue: ft,
        useTransition: ft,
        useSyncExternalStore: ft,
        useId: ft,
        useHostTransitionStatus: ft,
        useFormState: ft,
        useActionState: ft,
        useOptimistic: ft,
        useMemoCache: ft,
        useCacheRefresh: ft
    }
      , Qh = {
        readContext: kt,
        use: ao,
        useCallback: function(e, t) {
            return Vt().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: kt,
        useEffect: _h,
        useImperativeHandle: function(e, t, n) {
            n = n != null ? n.concat([e]) : null,
            io(4194308, 4, Nh.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return io(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            io(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Vt();
            t = t === void 0 ? null : t;
            var i = e();
            if (nr) {
                Sn(!0);
                try {
                    e()
                } finally {
                    Sn(!1)
                }
            }
            return n.memoizedState = [i, t],
            i
        },
        useReducer: function(e, t, n) {
            var i = Vt();
            if (n !== void 0) {
                var s = n(t);
                if (nr) {
                    Sn(!0);
                    try {
                        n(t)
                    } finally {
                        Sn(!1)
                    }
                }
            } else
                s = t;
            return i.memoizedState = i.baseState = s,
            e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: s
            },
            i.queue = e,
            e = e.dispatch = zv.bind(null, Le, e),
            [i.memoizedState, e]
        },
        useRef: function(e) {
            var t = Vt();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: function(e) {
            e = Ns(e);
            var t = e.queue
              , n = Gh.bind(null, Le, t);
            return t.dispatch = n,
            [e.memoizedState, n]
        },
        useDebugValue: js,
        useDeferredValue: function(e, t) {
            var n = Vt();
            return Us(n, e, t)
        },
        useTransition: function() {
            var e = Ns(!1);
            return e = Bh.bind(null, Le, e.queue, !0, !1),
            Vt().memoizedState = e,
            [!1, e]
        },
        useSyncExternalStore: function(e, t, n) {
            var i = Le
              , s = Vt();
            if (Xe) {
                if (n === void 0)
                    throw Error(o(407));
                n = n()
            } else {
                if (n = t(),
                et === null)
                    throw Error(o(349));
                ($e & 124) !== 0 || mh(i, t, n)
            }
            s.memoizedState = n;
            var d = {
                value: n,
                getSnapshot: t
            };
            return s.queue = d,
            _h(ph.bind(null, i, d, e), [e]),
            i.flags |= 2048,
            Nr(9, lo(), gh.bind(null, i, d, n, t), null),
            n
        },
        useId: function() {
            var e = Vt()
              , t = et.identifierPrefix;
            if (Xe) {
                var n = Pn
                  , i = Gn;
                n = (i & ~(1 << 32 - Ot(i) - 1)).toString(32) + n,
                t = "«" + t + "R" + n,
                n = no++,
                0 < n && (t += "H" + n.toString(32)),
                t += "»"
            } else
                n = Dv++,
                t = "«" + t + "r" + n.toString(32) + "»";
            return e.memoizedState = t
        },
        useHostTransitionStatus: Bs,
        useFormState: Th,
        useActionState: Th,
        useOptimistic: function(e) {
            var t = Vt();
            t.memoizedState = t.baseState = e;
            var n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = n,
            t = qs.bind(null, Le, !0, n),
            n.dispatch = t,
            [e, t]
        },
        useMemoCache: Ms,
        useCacheRefresh: function() {
            return Vt().memoizedState = Nv.bind(null, Le)
        }
    }
      , Zh = {
        readContext: kt,
        use: ao,
        useCallback: jh,
        useContext: kt,
        useEffect: Mh,
        useImperativeHandle: zh,
        useInsertionEffect: kh,
        useLayoutEffect: Lh,
        useMemo: Uh,
        useReducer: ro,
        useRef: Dh,
        useState: function() {
            return ro(Zn)
        },
        useDebugValue: js,
        useDeferredValue: function(e, t) {
            var n = vt();
            return Hh(n, Ke.memoizedState, e, t)
        },
        useTransition: function() {
            var e = ro(Zn)[0]
              , t = vt().memoizedState;
            return [typeof e == "boolean" ? e : zl(e), t]
        },
        useSyncExternalStore: hh,
        useId: Vh,
        useHostTransitionStatus: Bs,
        useFormState: Oh,
        useActionState: Oh,
        useOptimistic: function(e, t) {
            var n = vt();
            return bh(n, Ke, e, t)
        },
        useMemoCache: Ms,
        useCacheRefresh: Yh
    }
      , jv = {
        readContext: kt,
        use: ao,
        useCallback: jh,
        useContext: kt,
        useEffect: Mh,
        useImperativeHandle: zh,
        useInsertionEffect: kh,
        useLayoutEffect: Lh,
        useMemo: Uh,
        useReducer: Ls,
        useRef: Dh,
        useState: function() {
            return Ls(Zn)
        },
        useDebugValue: js,
        useDeferredValue: function(e, t) {
            var n = vt();
            return Ke === null ? Us(n, e, t) : Hh(n, Ke.memoizedState, e, t)
        },
        useTransition: function() {
            var e = Ls(Zn)[0]
              , t = vt().memoizedState;
            return [typeof e == "boolean" ? e : zl(e), t]
        },
        useSyncExternalStore: hh,
        useId: Vh,
        useHostTransitionStatus: Bs,
        useFormState: Ah,
        useActionState: Ah,
        useOptimistic: function(e, t) {
            var n = vt();
            return Ke !== null ? bh(n, Ke, e, t) : (n.baseState = e,
            [e, n.queue.dispatch])
        },
        useMemoCache: Ms,
        useCacheRefresh: Yh
    }
      , zr = null
      , Hl = 0;
    function so(e) {
        var t = Hl;
        return Hl += 1,
        zr === null && (zr = []),
        lh(zr, e, t)
    }
    function Bl(e, t) {
        t = t.props.ref,
        e.ref = t !== void 0 ? t : null
    }
    function co(e, t) {
        throw t.$$typeof === v ? Error(o(525)) : (e = Object.prototype.toString.call(t),
        Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    }
    function Fh(e) {
        var t = e._init;
        return t(e._payload)
    }
    function Kh(e) {
        function t(N, k) {
            if (e) {
                var U = N.deletions;
                U === null ? (N.deletions = [k],
                N.flags |= 16) : U.push(k)
            }
        }
        function n(N, k) {
            if (!e)
                return null;
            for (; k !== null; )
                t(N, k),
                k = k.sibling;
            return null
        }
        function i(N) {
            for (var k = new Map; N !== null; )
                N.key !== null ? k.set(N.key, N) : k.set(N.index, N),
                N = N.sibling;
            return k
        }
        function s(N, k) {
            return N = Yn(N, k),
            N.index = 0,
            N.sibling = null,
            N
        }
        function d(N, k, U) {
            return N.index = U,
            e ? (U = N.alternate,
            U !== null ? (U = U.index,
            U < k ? (N.flags |= 67108866,
            k) : U) : (N.flags |= 67108866,
            k)) : (N.flags |= 1048576,
            k)
        }
        function y(N) {
            return e && N.alternate === null && (N.flags |= 67108866),
            N
        }
        function E(N, k, U, K) {
            return k === null || k.tag !== 6 ? (k = os(U, N.mode, K),
            k.return = N,
            k) : (k = s(k, U),
            k.return = N,
            k)
        }
        function C(N, k, U, K) {
            var de = U.type;
            return de === S ? F(N, k, U.props.children, K, U.key) : k !== null && (k.elementType === de || typeof de == "object" && de !== null && de.$$typeof === oe && Fh(de) === k.type) ? (k = s(k, U.props),
            Bl(k, U),
            k.return = N,
            k) : (k = Xi(U.type, U.key, U.props, null, N.mode, K),
            Bl(k, U),
            k.return = N,
            k)
        }
        function H(N, k, U, K) {
            return k === null || k.tag !== 4 || k.stateNode.containerInfo !== U.containerInfo || k.stateNode.implementation !== U.implementation ? (k = us(U, N.mode, K),
            k.return = N,
            k) : (k = s(k, U.children || []),
            k.return = N,
            k)
        }
        function F(N, k, U, K, de) {
            return k === null || k.tag !== 7 ? (k = Za(U, N.mode, K, de),
            k.return = N,
            k) : (k = s(k, U),
            k.return = N,
            k)
        }
        function I(N, k, U) {
            if (typeof k == "string" && k !== "" || typeof k == "number" || typeof k == "bigint")
                return k = os("" + k, N.mode, U),
                k.return = N,
                k;
            if (typeof k == "object" && k !== null) {
                switch (k.$$typeof) {
                case b:
                    return U = Xi(k.type, k.key, k.props, null, N.mode, U),
                    Bl(U, k),
                    U.return = N,
                    U;
                case R:
                    return k = us(k, N.mode, U),
                    k.return = N,
                    k;
                case oe:
                    var K = k._init;
                    return k = K(k._payload),
                    I(N, k, U)
                }
                if (J(k) || xe(k))
                    return k = Za(k, N.mode, U, null),
                    k.return = N,
                    k;
                if (typeof k.then == "function")
                    return I(N, so(k), U);
                if (k.$$typeof === $)
                    return I(N, Ki(N, k), U);
                co(N, k)
            }
            return null
        }
        function B(N, k, U, K) {
            var de = k !== null ? k.key : null;
            if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
                return de !== null ? null : E(N, k, "" + U, K);
            if (typeof U == "object" && U !== null) {
                switch (U.$$typeof) {
                case b:
                    return U.key === de ? C(N, k, U, K) : null;
                case R:
                    return U.key === de ? H(N, k, U, K) : null;
                case oe:
                    return de = U._init,
                    U = de(U._payload),
                    B(N, k, U, K)
                }
                if (J(U) || xe(U))
                    return de !== null ? null : F(N, k, U, K, null);
                if (typeof U.then == "function")
                    return B(N, k, so(U), K);
                if (U.$$typeof === $)
                    return B(N, k, Ki(N, U), K);
                co(N, U)
            }
            return null
        }
        function q(N, k, U, K, de) {
            if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
                return N = N.get(U) || null,
                E(k, N, "" + K, de);
            if (typeof K == "object" && K !== null) {
                switch (K.$$typeof) {
                case b:
                    return N = N.get(K.key === null ? U : K.key) || null,
                    C(k, N, K, de);
                case R:
                    return N = N.get(K.key === null ? U : K.key) || null,
                    H(k, N, K, de);
                case oe:
                    var ze = K._init;
                    return K = ze(K._payload),
                    q(N, k, U, K, de)
                }
                if (J(K) || xe(K))
                    return N = N.get(U) || null,
                    F(k, N, K, de, null);
                if (typeof K.then == "function")
                    return q(N, k, U, so(K), de);
                if (K.$$typeof === $)
                    return q(N, k, U, Ki(k, K), de);
                co(k, K)
            }
            return null
        }
        function Ae(N, k, U, K) {
            for (var de = null, ze = null, be = k, Oe = k = 0, Tt = null; be !== null && Oe < U.length; Oe++) {
                be.index > Oe ? (Tt = be,
                be = null) : Tt = be.sibling;
                var Pe = B(N, be, U[Oe], K);
                if (Pe === null) {
                    be === null && (be = Tt);
                    break
                }
                e && be && Pe.alternate === null && t(N, be),
                k = d(Pe, k, Oe),
                ze === null ? de = Pe : ze.sibling = Pe,
                ze = Pe,
                be = Tt
            }
            if (Oe === U.length)
                return n(N, be),
                Xe && Ka(N, Oe),
                de;
            if (be === null) {
                for (; Oe < U.length; Oe++)
                    be = I(N, U[Oe], K),
                    be !== null && (k = d(be, k, Oe),
                    ze === null ? de = be : ze.sibling = be,
                    ze = be);
                return Xe && Ka(N, Oe),
                de
            }
            for (be = i(be); Oe < U.length; Oe++)
                Tt = q(be, N, Oe, U[Oe], K),
                Tt !== null && (e && Tt.alternate !== null && be.delete(Tt.key === null ? Oe : Tt.key),
                k = d(Tt, k, Oe),
                ze === null ? de = Tt : ze.sibling = Tt,
                ze = Tt);
            return e && be.forEach(function(ka) {
                return t(N, ka)
            }),
            Xe && Ka(N, Oe),
            de
        }
        function Re(N, k, U, K) {
            if (U == null)
                throw Error(o(151));
            for (var de = null, ze = null, be = k, Oe = k = 0, Tt = null, Pe = U.next(); be !== null && !Pe.done; Oe++,
            Pe = U.next()) {
                be.index > Oe ? (Tt = be,
                be = null) : Tt = be.sibling;
                var ka = B(N, be, Pe.value, K);
                if (ka === null) {
                    be === null && (be = Tt);
                    break
                }
                e && be && ka.alternate === null && t(N, be),
                k = d(ka, k, Oe),
                ze === null ? de = ka : ze.sibling = ka,
                ze = ka,
                be = Tt
            }
            if (Pe.done)
                return n(N, be),
                Xe && Ka(N, Oe),
                de;
            if (be === null) {
                for (; !Pe.done; Oe++,
                Pe = U.next())
                    Pe = I(N, Pe.value, K),
                    Pe !== null && (k = d(Pe, k, Oe),
                    ze === null ? de = Pe : ze.sibling = Pe,
                    ze = Pe);
                return Xe && Ka(N, Oe),
                de
            }
            for (be = i(be); !Pe.done; Oe++,
            Pe = U.next())
                Pe = q(be, N, Oe, Pe.value, K),
                Pe !== null && (e && Pe.alternate !== null && be.delete(Pe.key === null ? Oe : Pe.key),
                k = d(Pe, k, Oe),
                ze === null ? de = Pe : ze.sibling = Pe,
                ze = Pe);
            return e && be.forEach(function(Ub) {
                return t(N, Ub)
            }),
            Xe && Ka(N, Oe),
            de
        }
        function Ie(N, k, U, K) {
            if (typeof U == "object" && U !== null && U.type === S && U.key === null && (U = U.props.children),
            typeof U == "object" && U !== null) {
                switch (U.$$typeof) {
                case b:
                    e: {
                        for (var de = U.key; k !== null; ) {
                            if (k.key === de) {
                                if (de = U.type,
                                de === S) {
                                    if (k.tag === 7) {
                                        n(N, k.sibling),
                                        K = s(k, U.props.children),
                                        K.return = N,
                                        N = K;
                                        break e
                                    }
                                } else if (k.elementType === de || typeof de == "object" && de !== null && de.$$typeof === oe && Fh(de) === k.type) {
                                    n(N, k.sibling),
                                    K = s(k, U.props),
                                    Bl(K, U),
                                    K.return = N,
                                    N = K;
                                    break e
                                }
                                n(N, k);
                                break
                            } else
                                t(N, k);
                            k = k.sibling
                        }
                        U.type === S ? (K = Za(U.props.children, N.mode, K, U.key),
                        K.return = N,
                        N = K) : (K = Xi(U.type, U.key, U.props, null, N.mode, K),
                        Bl(K, U),
                        K.return = N,
                        N = K)
                    }
                    return y(N);
                case R:
                    e: {
                        for (de = U.key; k !== null; ) {
                            if (k.key === de)
                                if (k.tag === 4 && k.stateNode.containerInfo === U.containerInfo && k.stateNode.implementation === U.implementation) {
                                    n(N, k.sibling),
                                    K = s(k, U.children || []),
                                    K.return = N,
                                    N = K;
                                    break e
                                } else {
                                    n(N, k);
                                    break
                                }
                            else
                                t(N, k);
                            k = k.sibling
                        }
                        K = us(U, N.mode, K),
                        K.return = N,
                        N = K
                    }
                    return y(N);
                case oe:
                    return de = U._init,
                    U = de(U._payload),
                    Ie(N, k, U, K)
                }
                if (J(U))
                    return Ae(N, k, U, K);
                if (xe(U)) {
                    if (de = xe(U),
                    typeof de != "function")
                        throw Error(o(150));
                    return U = de.call(U),
                    Re(N, k, U, K)
                }
                if (typeof U.then == "function")
                    return Ie(N, k, so(U), K);
                if (U.$$typeof === $)
                    return Ie(N, k, Ki(N, U), K);
                co(N, U)
            }
            return typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint" ? (U = "" + U,
            k !== null && k.tag === 6 ? (n(N, k.sibling),
            K = s(k, U),
            K.return = N,
            N = K) : (n(N, k),
            K = os(U, N.mode, K),
            K.return = N,
            N = K),
            y(N)) : n(N, k)
        }
        return function(N, k, U, K) {
            try {
                Hl = 0;
                var de = Ie(N, k, U, K);
                return zr = null,
                de
            } catch (be) {
                if (be === Dl || be === Ii)
                    throw be;
                var ze = Kt(29, be, null, N.mode);
                return ze.lanes = K,
                ze.return = N,
                ze
            } finally {}
        }
    }
    var jr = Kh(!0)
      , Jh = Kh(!1)
      , mn = V(null)
      , Mn = null;
    function ya(e) {
        var t = e.alternate;
        te(St, St.current & 1),
        te(mn, e),
        Mn === null && (t === null || Mr.current !== null || t.memoizedState !== null) && (Mn = e)
    }
    function Ih(e) {
        if (e.tag === 22) {
            if (te(St, St.current),
            te(mn, e),
            Mn === null) {
                var t = e.alternate;
                t !== null && t.memoizedState !== null && (Mn = e)
            }
        } else
            va()
    }
    function va() {
        te(St, St.current),
        te(mn, mn.current)
    }
    function Fn(e) {
        ae(mn),
        Mn === e && (Mn = null),
        ae(St)
    }
    var St = V(0);
    function fo(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var n = t.memoizedState;
                if (n !== null && (n = n.dehydrated,
                n === null || n.data === "$?" || _c(n)))
                    return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    function $s(e, t, n, i) {
        t = e.memoizedState,
        n = n(i, t),
        n = n == null ? t : p({}, t, n),
        e.memoizedState = n,
        e.lanes === 0 && (e.updateQueue.baseState = n)
    }
    var Vs = {
        enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var i = en()
              , s = ma(i);
            s.payload = t,
            n != null && (s.callback = n),
            t = ga(e, s, i),
            t !== null && (tn(t, e, i),
            Ml(t, e, i))
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var i = en()
              , s = ma(i);
            s.tag = 1,
            s.payload = t,
            n != null && (s.callback = n),
            t = ga(e, s, i),
            t !== null && (tn(t, e, i),
            Ml(t, e, i))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = en()
              , i = ma(n);
            i.tag = 2,
            t != null && (i.callback = t),
            t = ga(e, i, n),
            t !== null && (tn(t, e, n),
            Ml(t, e, n))
        }
    };
    function Wh(e, t, n, i, s, d, y) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, d, y) : t.prototype && t.prototype.isPureReactComponent ? !El(n, i) || !El(s, d) : !0
    }
    function e0(e, t, n, i) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i),
        t.state !== e && Vs.enqueueReplaceState(t, t.state, null)
    }
    function ar(e, t) {
        var n = t;
        if ("ref"in t) {
            n = {};
            for (var i in t)
                i !== "ref" && (n[i] = t[i])
        }
        if (e = e.defaultProps) {
            n === t && (n = p({}, n));
            for (var s in e)
                n[s] === void 0 && (n[s] = e[s])
        }
        return n
    }
    var ho = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    }
    ;
    function t0(e) {
        ho(e)
    }
    function n0(e) {
        console.error(e)
    }
    function a0(e) {
        ho(e)
    }
    function mo(e, t) {
        try {
            var n = e.onUncaughtError;
            n(t.value, {
                componentStack: t.stack
            })
        } catch (i) {
            setTimeout(function() {
                throw i
            })
        }
    }
    function r0(e, t, n) {
        try {
            var i = e.onCaughtError;
            i(n.value, {
                componentStack: n.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (s) {
            setTimeout(function() {
                throw s
            })
        }
    }
    function Ys(e, t, n) {
        return n = ma(n),
        n.tag = 3,
        n.payload = {
            element: null
        },
        n.callback = function() {
            mo(e, t)
        }
        ,
        n
    }
    function l0(e) {
        return e = ma(e),
        e.tag = 3,
        e
    }
    function i0(e, t, n, i) {
        var s = n.type.getDerivedStateFromError;
        if (typeof s == "function") {
            var d = i.value;
            e.payload = function() {
                return s(d)
            }
            ,
            e.callback = function() {
                r0(t, n, i)
            }
        }
        var y = n.stateNode;
        y !== null && typeof y.componentDidCatch == "function" && (e.callback = function() {
            r0(t, n, i),
            typeof s != "function" && (Ra === null ? Ra = new Set([this]) : Ra.add(this));
            var E = i.stack;
            this.componentDidCatch(i.value, {
                componentStack: E !== null ? E : ""
            })
        }
        )
    }
    function Uv(e, t, n, i, s) {
        if (n.flags |= 32768,
        i !== null && typeof i == "object" && typeof i.then == "function") {
            if (t = n.alternate,
            t !== null && Ol(t, n, s, !0),
            n = mn.current,
            n !== null) {
                switch (n.tag) {
                case 13:
                    return Mn === null ? hc() : n.alternate === null && ct === 0 && (ct = 3),
                    n.flags &= -257,
                    n.flags |= 65536,
                    n.lanes = s,
                    i === vs ? n.flags |= 16384 : (t = n.updateQueue,
                    t === null ? n.updateQueue = new Set([i]) : t.add(i),
                    gc(e, i, s)),
                    !1;
                case 22:
                    return n.flags |= 65536,
                    i === vs ? n.flags |= 16384 : (t = n.updateQueue,
                    t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i])
                    },
                    n.updateQueue = t) : (n = t.retryQueue,
                    n === null ? t.retryQueue = new Set([i]) : n.add(i)),
                    gc(e, i, s)),
                    !1
                }
                throw Error(o(435, n.tag))
            }
            return gc(e, i, s),
            hc(),
            !1
        }
        if (Xe)
            return t = mn.current,
            t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = s,
            i !== fs && (e = Error(o(422), {
                cause: i
            }),
            Tl(cn(e, n)))) : (i !== fs && (t = Error(o(423), {
                cause: i
            }),
            Tl(cn(t, n))),
            e = e.current.alternate,
            e.flags |= 65536,
            s &= -s,
            e.lanes |= s,
            i = cn(i, n),
            s = Ys(e.stateNode, i, s),
            Es(e, s),
            ct !== 4 && (ct = 2)),
            !1;
        var d = Error(o(520), {
            cause: i
        });
        if (d = cn(d, n),
        Xl === null ? Xl = [d] : Xl.push(d),
        ct !== 4 && (ct = 2),
        t === null)
            return !0;
        i = cn(i, n),
        n = t;
        do {
            switch (n.tag) {
            case 3:
                return n.flags |= 65536,
                e = s & -s,
                n.lanes |= e,
                e = Ys(n.stateNode, i, e),
                Es(n, e),
                !1;
            case 1:
                if (t = n.type,
                d = n.stateNode,
                (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Ra === null || !Ra.has(d))))
                    return n.flags |= 65536,
                    s &= -s,
                    n.lanes |= s,
                    s = l0(s),
                    i0(s, e, n, i),
                    Es(n, s),
                    !1
            }
            n = n.return
        } while (n !== null);
        return !1
    }
    var o0 = Error(o(461))
      , wt = !1;
    function Ct(e, t, n, i) {
        t.child = e === null ? Jh(t, null, n, i) : jr(t, e.child, n, i)
    }
    function u0(e, t, n, i, s) {
        n = n.render;
        var d = t.ref;
        if ("ref"in i) {
            var y = {};
            for (var E in i)
                E !== "ref" && (y[E] = i[E])
        } else
            y = i;
        return er(t),
        i = Os(e, t, n, y, d, s),
        E = Cs(),
        e !== null && !wt ? (As(e, t, s),
        Kn(e, t, s)) : (Xe && E && ss(t),
        t.flags |= 1,
        Ct(e, t, i, s),
        t.child)
    }
    function s0(e, t, n, i, s) {
        if (e === null) {
            var d = n.type;
            return typeof d == "function" && !is(d) && d.defaultProps === void 0 && n.compare === null ? (t.tag = 15,
            t.type = d,
            c0(e, t, d, i, s)) : (e = Xi(n.type, null, i, t, t.mode, s),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (d = e.child,
        !Js(e, s)) {
            var y = d.memoizedProps;
            if (n = n.compare,
            n = n !== null ? n : El,
            n(y, i) && e.ref === t.ref)
                return Kn(e, t, s)
        }
        return t.flags |= 1,
        e = Yn(d, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function c0(e, t, n, i, s) {
        if (e !== null) {
            var d = e.memoizedProps;
            if (El(d, i) && e.ref === t.ref)
                if (wt = !1,
                t.pendingProps = i = d,
                Js(e, s))
                    (e.flags & 131072) !== 0 && (wt = !0);
                else
                    return t.lanes = e.lanes,
                    Kn(e, t, s)
        }
        return Gs(e, t, n, i, s)
    }
    function f0(e, t, n) {
        var i = t.pendingProps
          , s = i.children
          , d = e !== null ? e.memoizedState : null;
        if (i.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (i = d !== null ? d.baseLanes | n : n,
                e !== null) {
                    for (s = t.child = e.child,
                    d = 0; s !== null; )
                        d = d | s.lanes | s.childLanes,
                        s = s.sibling;
                    t.childLanes = d & ~i
                } else
                    t.childLanes = 0,
                    t.child = null;
                return d0(e, t, i, n)
            }
            if ((n & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                e !== null && Ji(t, d !== null ? d.cachePool : null),
                d !== null ? ch(t, d) : ws(),
                Ih(t);
            else
                return t.lanes = t.childLanes = 536870912,
                d0(e, t, d !== null ? d.baseLanes | n : n, n)
        } else
            d !== null ? (Ji(t, d.cachePool),
            ch(t, d),
            va(),
            t.memoizedState = null) : (e !== null && Ji(t, null),
            ws(),
            va());
        return Ct(e, t, s, n),
        t.child
    }
    function d0(e, t, n, i) {
        var s = ys();
        return s = s === null ? null : {
            parent: bt._currentValue,
            pool: s
        },
        t.memoizedState = {
            baseLanes: n,
            cachePool: s
        },
        e !== null && Ji(t, null),
        ws(),
        Ih(t),
        e !== null && Ol(e, t, i, !0),
        null
    }
    function go(e, t) {
        var n = t.ref;
        if (n === null)
            e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof n != "function" && typeof n != "object")
                throw Error(o(284));
            (e === null || e.ref !== n) && (t.flags |= 4194816)
        }
    }
    function Gs(e, t, n, i, s) {
        return er(t),
        n = Os(e, t, n, i, void 0, s),
        i = Cs(),
        e !== null && !wt ? (As(e, t, s),
        Kn(e, t, s)) : (Xe && i && ss(t),
        t.flags |= 1,
        Ct(e, t, n, s),
        t.child)
    }
    function h0(e, t, n, i, s, d) {
        return er(t),
        t.updateQueue = null,
        n = dh(t, i, n, s),
        fh(e),
        i = Cs(),
        e !== null && !wt ? (As(e, t, d),
        Kn(e, t, d)) : (Xe && i && ss(t),
        t.flags |= 1,
        Ct(e, t, n, d),
        t.child)
    }
    function m0(e, t, n, i, s) {
        if (er(t),
        t.stateNode === null) {
            var d = Or
              , y = n.contextType;
            typeof y == "object" && y !== null && (d = kt(y)),
            d = new n(i,d),
            t.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null,
            d.updater = Vs,
            t.stateNode = d,
            d._reactInternals = t,
            d = t.stateNode,
            d.props = i,
            d.state = t.memoizedState,
            d.refs = {},
            bs(t),
            y = n.contextType,
            d.context = typeof y == "object" && y !== null ? kt(y) : Or,
            d.state = t.memoizedState,
            y = n.getDerivedStateFromProps,
            typeof y == "function" && ($s(t, n, y, i),
            d.state = t.memoizedState),
            typeof n.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (y = d.state,
            typeof d.componentWillMount == "function" && d.componentWillMount(),
            typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(),
            y !== d.state && Vs.enqueueReplaceState(d, d.state, null),
            Ll(t, i, d, s),
            kl(),
            d.state = t.memoizedState),
            typeof d.componentDidMount == "function" && (t.flags |= 4194308),
            i = !0
        } else if (e === null) {
            d = t.stateNode;
            var E = t.memoizedProps
              , C = ar(n, E);
            d.props = C;
            var H = d.context
              , F = n.contextType;
            y = Or,
            typeof F == "object" && F !== null && (y = kt(F));
            var I = n.getDerivedStateFromProps;
            F = typeof I == "function" || typeof d.getSnapshotBeforeUpdate == "function",
            E = t.pendingProps !== E,
            F || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (E || H !== y) && e0(t, d, i, y),
            ha = !1;
            var B = t.memoizedState;
            d.state = B,
            Ll(t, i, d, s),
            kl(),
            H = t.memoizedState,
            E || B !== H || ha ? (typeof I == "function" && ($s(t, n, I, i),
            H = t.memoizedState),
            (C = ha || Wh(t, n, C, i, B, H, y)) ? (F || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(),
            typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()),
            typeof d.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = i,
            t.memoizedState = H),
            d.props = i,
            d.state = H,
            d.context = y,
            i = C) : (typeof d.componentDidMount == "function" && (t.flags |= 4194308),
            i = !1)
        } else {
            d = t.stateNode,
            Ss(e, t),
            y = t.memoizedProps,
            F = ar(n, y),
            d.props = F,
            I = t.pendingProps,
            B = d.context,
            H = n.contextType,
            C = Or,
            typeof H == "object" && H !== null && (C = kt(H)),
            E = n.getDerivedStateFromProps,
            (H = typeof E == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (y !== I || B !== C) && e0(t, d, i, C),
            ha = !1,
            B = t.memoizedState,
            d.state = B,
            Ll(t, i, d, s),
            kl();
            var q = t.memoizedState;
            y !== I || B !== q || ha || e !== null && e.dependencies !== null && Fi(e.dependencies) ? (typeof E == "function" && ($s(t, n, E, i),
            q = t.memoizedState),
            (F = ha || Wh(t, n, F, i, B, q, C) || e !== null && e.dependencies !== null && Fi(e.dependencies)) ? (H || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(i, q, C),
            typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(i, q, C)),
            typeof d.componentDidUpdate == "function" && (t.flags |= 4),
            typeof d.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || y === e.memoizedProps && B === e.memoizedState || (t.flags |= 4),
            typeof d.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && B === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = i,
            t.memoizedState = q),
            d.props = i,
            d.state = q,
            d.context = C,
            i = F) : (typeof d.componentDidUpdate != "function" || y === e.memoizedProps && B === e.memoizedState || (t.flags |= 4),
            typeof d.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && B === e.memoizedState || (t.flags |= 1024),
            i = !1)
        }
        return d = i,
        go(e, t),
        i = (t.flags & 128) !== 0,
        d || i ? (d = t.stateNode,
        n = i && typeof n.getDerivedStateFromError != "function" ? null : d.render(),
        t.flags |= 1,
        e !== null && i ? (t.child = jr(t, e.child, null, s),
        t.child = jr(t, null, n, s)) : Ct(e, t, n, s),
        t.memoizedState = d.state,
        e = t.child) : e = Kn(e, t, s),
        e
    }
    function g0(e, t, n, i) {
        return Rl(),
        t.flags |= 256,
        Ct(e, t, n, i),
        t.child
    }
    var Ps = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function Xs(e) {
        return {
            baseLanes: e,
            cachePool: nh()
        }
    }
    function Qs(e, t, n) {
        return e = e !== null ? e.childLanes & ~n : 0,
        t && (e |= gn),
        e
    }
    function p0(e, t, n) {
        var i = t.pendingProps, s = !1, d = (t.flags & 128) !== 0, y;
        if ((y = d) || (y = e !== null && e.memoizedState === null ? !1 : (St.current & 2) !== 0),
        y && (s = !0,
        t.flags &= -129),
        y = (t.flags & 32) !== 0,
        t.flags &= -33,
        e === null) {
            if (Xe) {
                if (s ? ya(t) : va(),
                Xe) {
                    var E = st, C;
                    if (C = E) {
                        e: {
                            for (C = E,
                            E = _n; C.nodeType !== 8; ) {
                                if (!E) {
                                    E = null;
                                    break e
                                }
                                if (C = Tn(C.nextSibling),
                                C === null) {
                                    E = null;
                                    break e
                                }
                            }
                            E = C
                        }
                        E !== null ? (t.memoizedState = {
                            dehydrated: E,
                            treeContext: Fa !== null ? {
                                id: Gn,
                                overflow: Pn
                            } : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        },
                        C = Kt(18, null, null, 0),
                        C.stateNode = E,
                        C.return = t,
                        t.child = C,
                        Ut = t,
                        st = null,
                        C = !0) : C = !1
                    }
                    C || Ia(t)
                }
                if (E = t.memoizedState,
                E !== null && (E = E.dehydrated,
                E !== null))
                    return _c(E) ? t.lanes = 32 : t.lanes = 536870912,
                    null;
                Fn(t)
            }
            return E = i.children,
            i = i.fallback,
            s ? (va(),
            s = t.mode,
            E = po({
                mode: "hidden",
                children: E
            }, s),
            i = Za(i, s, n, null),
            E.return = t,
            i.return = t,
            E.sibling = i,
            t.child = E,
            s = t.child,
            s.memoizedState = Xs(n),
            s.childLanes = Qs(e, y, n),
            t.memoizedState = Ps,
            i) : (ya(t),
            Zs(t, E))
        }
        if (C = e.memoizedState,
        C !== null && (E = C.dehydrated,
        E !== null)) {
            if (d)
                t.flags & 256 ? (ya(t),
                t.flags &= -257,
                t = Fs(e, t, n)) : t.memoizedState !== null ? (va(),
                t.child = e.child,
                t.flags |= 128,
                t = null) : (va(),
                s = i.fallback,
                E = t.mode,
                i = po({
                    mode: "visible",
                    children: i.children
                }, E),
                s = Za(s, E, n, null),
                s.flags |= 2,
                i.return = t,
                s.return = t,
                i.sibling = s,
                t.child = i,
                jr(t, e.child, null, n),
                i = t.child,
                i.memoizedState = Xs(n),
                i.childLanes = Qs(e, y, n),
                t.memoizedState = Ps,
                t = s);
            else if (ya(t),
            _c(E)) {
                if (y = E.nextSibling && E.nextSibling.dataset,
                y)
                    var H = y.dgst;
                y = H,
                i = Error(o(419)),
                i.stack = "",
                i.digest = y,
                Tl({
                    value: i,
                    source: null,
                    stack: null
                }),
                t = Fs(e, t, n)
            } else if (wt || Ol(e, t, n, !1),
            y = (n & e.childLanes) !== 0,
            wt || y) {
                if (y = et,
                y !== null && (i = n & -n,
                i = (i & 42) !== 0 ? 1 : cl(i),
                i = (i & (y.suspendedLanes | n)) !== 0 ? 0 : i,
                i !== 0 && i !== C.retryLane))
                    throw C.retryLane = i,
                    Tr(e, i),
                    tn(y, e, i),
                    o0;
                E.data === "$?" || hc(),
                t = Fs(e, t, n)
            } else
                E.data === "$?" ? (t.flags |= 192,
                t.child = e.child,
                t = null) : (e = C.treeContext,
                st = Tn(E.nextSibling),
                Ut = t,
                Xe = !0,
                Ja = null,
                _n = !1,
                e !== null && (dn[hn++] = Gn,
                dn[hn++] = Pn,
                dn[hn++] = Fa,
                Gn = e.id,
                Pn = e.overflow,
                Fa = t),
                t = Zs(t, i.children),
                t.flags |= 4096);
            return t
        }
        return s ? (va(),
        s = i.fallback,
        E = t.mode,
        C = e.child,
        H = C.sibling,
        i = Yn(C, {
            mode: "hidden",
            children: i.children
        }),
        i.subtreeFlags = C.subtreeFlags & 65011712,
        H !== null ? s = Yn(H, s) : (s = Za(s, E, n, null),
        s.flags |= 2),
        s.return = t,
        i.return = t,
        i.sibling = s,
        t.child = i,
        i = s,
        s = t.child,
        E = e.child.memoizedState,
        E === null ? E = Xs(n) : (C = E.cachePool,
        C !== null ? (H = bt._currentValue,
        C = C.parent !== H ? {
            parent: H,
            pool: H
        } : C) : C = nh(),
        E = {
            baseLanes: E.baseLanes | n,
            cachePool: C
        }),
        s.memoizedState = E,
        s.childLanes = Qs(e, y, n),
        t.memoizedState = Ps,
        i) : (ya(t),
        n = e.child,
        e = n.sibling,
        n = Yn(n, {
            mode: "visible",
            children: i.children
        }),
        n.return = t,
        n.sibling = null,
        e !== null && (y = t.deletions,
        y === null ? (t.deletions = [e],
        t.flags |= 16) : y.push(e)),
        t.child = n,
        t.memoizedState = null,
        n)
    }
    function Zs(e, t) {
        return t = po({
            mode: "visible",
            children: t
        }, e.mode),
        t.return = e,
        e.child = t
    }
    function po(e, t) {
        return e = Kt(22, e, null, t),
        e.lanes = 0,
        e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        },
        e
    }
    function Fs(e, t, n) {
        return jr(t, e.child, null, n),
        e = Zs(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function y0(e, t, n) {
        e.lanes |= t;
        var i = e.alternate;
        i !== null && (i.lanes |= t),
        hs(e.return, t, n)
    }
    function Ks(e, t, n, i, s) {
        var d = e.memoizedState;
        d === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: i,
            tail: n,
            tailMode: s
        } : (d.isBackwards = t,
        d.rendering = null,
        d.renderingStartTime = 0,
        d.last = i,
        d.tail = n,
        d.tailMode = s)
    }
    function v0(e, t, n) {
        var i = t.pendingProps
          , s = i.revealOrder
          , d = i.tail;
        if (Ct(e, t, i.children, n),
        i = St.current,
        (i & 2) !== 0)
            i = i & 1 | 2,
            t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0)
                e: for (e = t.child; e !== null; ) {
                    if (e.tag === 13)
                        e.memoizedState !== null && y0(e, n, t);
                    else if (e.tag === 19)
                        y0(e, n, t);
                    else if (e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break e;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break e;
                        e = e.return
                    }
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            i &= 1
        }
        switch (te(St, i),
        s) {
        case "forwards":
            for (n = t.child,
            s = null; n !== null; )
                e = n.alternate,
                e !== null && fo(e) === null && (s = n),
                n = n.sibling;
            n = s,
            n === null ? (s = t.child,
            t.child = null) : (s = n.sibling,
            n.sibling = null),
            Ks(t, !1, s, n, d);
            break;
        case "backwards":
            for (n = null,
            s = t.child,
            t.child = null; s !== null; ) {
                if (e = s.alternate,
                e !== null && fo(e) === null) {
                    t.child = s;
                    break
                }
                e = s.sibling,
                s.sibling = n,
                n = s,
                s = e
            }
            Ks(t, !0, n, null, d);
            break;
        case "together":
            Ks(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function Kn(e, t, n) {
        if (e !== null && (t.dependencies = e.dependencies),
        wa |= t.lanes,
        (n & t.childLanes) === 0)
            if (e !== null) {
                if (Ol(e, t, n, !1),
                (n & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (e !== null && t.child !== e.child)
            throw Error(o(153));
        if (t.child !== null) {
            for (e = t.child,
            n = Yn(e, e.pendingProps),
            t.child = n,
            n.return = t; e.sibling !== null; )
                e = e.sibling,
                n = n.sibling = Yn(e, e.pendingProps),
                n.return = t;
            n.sibling = null
        }
        return t.child
    }
    function Js(e, t) {
        return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies,
        !!(e !== null && Fi(e)))
    }
    function Hv(e, t, n) {
        switch (t.tag) {
        case 3:
            Ye(t, t.stateNode.containerInfo),
            da(t, bt, e.memoizedState.cache),
            Rl();
            break;
        case 27:
        case 5:
            qe(t);
            break;
        case 4:
            Ye(t, t.stateNode.containerInfo);
            break;
        case 10:
            da(t, t.type, t.memoizedProps.value);
            break;
        case 13:
            var i = t.memoizedState;
            if (i !== null)
                return i.dehydrated !== null ? (ya(t),
                t.flags |= 128,
                null) : (n & t.child.childLanes) !== 0 ? p0(e, t, n) : (ya(t),
                e = Kn(e, t, n),
                e !== null ? e.sibling : null);
            ya(t);
            break;
        case 19:
            var s = (e.flags & 128) !== 0;
            if (i = (n & t.childLanes) !== 0,
            i || (Ol(e, t, n, !1),
            i = (n & t.childLanes) !== 0),
            s) {
                if (i)
                    return v0(e, t, n);
                t.flags |= 128
            }
            if (s = t.memoizedState,
            s !== null && (s.rendering = null,
            s.tail = null,
            s.lastEffect = null),
            te(St, St.current),
            i)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
            f0(e, t, n);
        case 24:
            da(t, bt, e.memoizedState.cache)
        }
        return Kn(e, t, n)
    }
    function b0(e, t, n) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps)
                wt = !0;
            else {
                if (!Js(e, n) && (t.flags & 128) === 0)
                    return wt = !1,
                    Hv(e, t, n);
                wt = (e.flags & 131072) !== 0
            }
        else
            wt = !1,
            Xe && (t.flags & 1048576) !== 0 && Fd(t, Zi, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 16:
            e: {
                e = t.pendingProps;
                var i = t.elementType
                  , s = i._init;
                if (i = s(i._payload),
                t.type = i,
                typeof i == "function")
                    is(i) ? (e = ar(i, e),
                    t.tag = 1,
                    t = m0(null, t, i, e, n)) : (t.tag = 0,
                    t = Gs(null, t, i, e, n));
                else {
                    if (i != null) {
                        if (s = i.$$typeof,
                        s === ee) {
                            t.tag = 11,
                            t = u0(null, t, i, e, n);
                            break e
                        } else if (s === ne) {
                            t.tag = 14,
                            t = s0(null, t, i, e, n);
                            break e
                        }
                    }
                    throw t = le(i) || i,
                    Error(o(306, t, ""))
                }
            }
            return t;
        case 0:
            return Gs(e, t, t.type, t.pendingProps, n);
        case 1:
            return i = t.type,
            s = ar(i, t.pendingProps),
            m0(e, t, i, s, n);
        case 3:
            e: {
                if (Ye(t, t.stateNode.containerInfo),
                e === null)
                    throw Error(o(387));
                i = t.pendingProps;
                var d = t.memoizedState;
                s = d.element,
                Ss(e, t),
                Ll(t, i, null, n);
                var y = t.memoizedState;
                if (i = y.cache,
                da(t, bt, i),
                i !== d.cache && ms(t, [bt], n, !0),
                kl(),
                i = y.element,
                d.isDehydrated)
                    if (d = {
                        element: i,
                        isDehydrated: !1,
                        cache: y.cache
                    },
                    t.updateQueue.baseState = d,
                    t.memoizedState = d,
                    t.flags & 256) {
                        t = g0(e, t, i, n);
                        break e
                    } else if (i !== s) {
                        s = cn(Error(o(424)), t),
                        Tl(s),
                        t = g0(e, t, i, n);
                        break e
                    } else {
                        switch (e = t.stateNode.containerInfo,
                        e.nodeType) {
                        case 9:
                            e = e.body;
                            break;
                        default:
                            e = e.nodeName === "HTML" ? e.ownerDocument.body : e
                        }
                        for (st = Tn(e.firstChild),
                        Ut = t,
                        Xe = !0,
                        Ja = null,
                        _n = !0,
                        n = Jh(t, null, i, n),
                        t.child = n; n; )
                            n.flags = n.flags & -3 | 4096,
                            n = n.sibling
                    }
                else {
                    if (Rl(),
                    i === s) {
                        t = Kn(e, t, n);
                        break e
                    }
                    Ct(e, t, i, n)
                }
                t = t.child
            }
            return t;
        case 26:
            return go(e, t),
            e === null ? (n = wm(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : Xe || (n = t.type,
            e = t.pendingProps,
            i = _o(pe.current).createElement(n),
            i[W] = t,
            i[ie] = e,
            Dt(i, n, e),
            Ge(i),
            t.stateNode = i) : t.memoizedState = wm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
            null;
        case 27:
            return qe(t),
            e === null && Xe && (i = t.stateNode = Sm(t.type, t.pendingProps, pe.current),
            Ut = t,
            _n = !0,
            s = st,
            Ca(t.type) ? (Mc = s,
            st = Tn(i.firstChild)) : st = s),
            Ct(e, t, t.pendingProps.children, n),
            go(e, t),
            e === null && (t.flags |= 4194304),
            t.child;
        case 5:
            return e === null && Xe && ((s = i = st) && (i = db(i, t.type, t.pendingProps, _n),
            i !== null ? (t.stateNode = i,
            Ut = t,
            st = Tn(i.firstChild),
            _n = !1,
            s = !0) : s = !1),
            s || Ia(t)),
            qe(t),
            s = t.type,
            d = t.pendingProps,
            y = e !== null ? e.memoizedProps : null,
            i = d.children,
            Cc(s, d) ? i = null : y !== null && Cc(s, y) && (t.flags |= 32),
            t.memoizedState !== null && (s = Os(e, t, _v, null, null, n),
            ti._currentValue = s),
            go(e, t),
            Ct(e, t, i, n),
            t.child;
        case 6:
            return e === null && Xe && ((e = n = st) && (n = hb(n, t.pendingProps, _n),
            n !== null ? (t.stateNode = n,
            Ut = t,
            st = null,
            e = !0) : e = !1),
            e || Ia(t)),
            null;
        case 13:
            return p0(e, t, n);
        case 4:
            return Ye(t, t.stateNode.containerInfo),
            i = t.pendingProps,
            e === null ? t.child = jr(t, null, i, n) : Ct(e, t, i, n),
            t.child;
        case 11:
            return u0(e, t, t.type, t.pendingProps, n);
        case 7:
            return Ct(e, t, t.pendingProps, n),
            t.child;
        case 8:
            return Ct(e, t, t.pendingProps.children, n),
            t.child;
        case 12:
            return Ct(e, t, t.pendingProps.children, n),
            t.child;
        case 10:
            return i = t.pendingProps,
            da(t, t.type, i.value),
            Ct(e, t, i.children, n),
            t.child;
        case 9:
            return s = t.type._context,
            i = t.pendingProps.children,
            er(t),
            s = kt(s),
            i = i(s),
            t.flags |= 1,
            Ct(e, t, i, n),
            t.child;
        case 14:
            return s0(e, t, t.type, t.pendingProps, n);
        case 15:
            return c0(e, t, t.type, t.pendingProps, n);
        case 19:
            return v0(e, t, n);
        case 31:
            return i = t.pendingProps,
            n = t.mode,
            i = {
                mode: i.mode,
                children: i.children
            },
            e === null ? (n = po(i, n),
            n.ref = t.ref,
            t.child = n,
            n.return = t,
            t = n) : (n = Yn(e.child, i),
            n.ref = t.ref,
            t.child = n,
            n.return = t,
            t = n),
            t;
        case 22:
            return f0(e, t, n);
        case 24:
            return er(t),
            i = kt(bt),
            e === null ? (s = ys(),
            s === null && (s = et,
            d = gs(),
            s.pooledCache = d,
            d.refCount++,
            d !== null && (s.pooledCacheLanes |= n),
            s = d),
            t.memoizedState = {
                parent: i,
                cache: s
            },
            bs(t),
            da(t, bt, s)) : ((e.lanes & n) !== 0 && (Ss(e, t),
            Ll(t, null, null, n),
            kl()),
            s = e.memoizedState,
            d = t.memoizedState,
            s.parent !== i ? (s = {
                parent: i,
                cache: i
            },
            t.memoizedState = s,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = s),
            da(t, bt, i)) : (i = d.cache,
            da(t, bt, i),
            i !== s.cache && ms(t, [bt], n, !0))),
            Ct(e, t, t.pendingProps.children, n),
            t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(o(156, t.tag))
    }
    function Jn(e) {
        e.flags |= 4
    }
    function S0(e, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            e.flags &= -16777217;
        else if (e.flags |= 16777216,
        !Am(t)) {
            if (t = mn.current,
            t !== null && (($e & 4194048) === $e ? Mn !== null : ($e & 62914560) !== $e && ($e & 536870912) === 0 || t !== Mn))
                throw _l = vs,
                ah;
            e.flags |= 8192
        }
    }
    function yo(e, t) {
        t !== null && (e.flags |= 4),
        e.flags & 16384 && (t = e.tag !== 22 ? ki() : 536870912,
        e.lanes |= t,
        qr |= t)
    }
    function ql(e, t) {
        if (!Xe)
            switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t),
                    t = t.sibling;
                n === null ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var i = null; n !== null; )
                    n.alternate !== null && (i = n),
                    n = n.sibling;
                i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null
            }
    }
    function ut(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , n = 0
          , i = 0;
        if (t)
            for (var s = e.child; s !== null; )
                n |= s.lanes | s.childLanes,
                i |= s.subtreeFlags & 65011712,
                i |= s.flags & 65011712,
                s.return = e,
                s = s.sibling;
        else
            for (s = e.child; s !== null; )
                n |= s.lanes | s.childLanes,
                i |= s.subtreeFlags,
                i |= s.flags,
                s.return = e,
                s = s.sibling;
        return e.subtreeFlags |= i,
        e.childLanes = n,
        t
    }
    function Bv(e, t, n) {
        var i = t.pendingProps;
        switch (cs(t),
        t.tag) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return ut(t),
            null;
        case 1:
            return ut(t),
            null;
        case 3:
            return n = t.stateNode,
            i = null,
            e !== null && (i = e.memoizedState.cache),
            t.memoizedState.cache !== i && (t.flags |= 2048),
            Qn(bt),
            xt(),
            n.pendingContext && (n.context = n.pendingContext,
            n.pendingContext = null),
            (e === null || e.child === null) && (wl(t) ? Jn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            Id())),
            ut(t),
            null;
        case 26:
            return n = t.memoizedState,
            e === null ? (Jn(t),
            n !== null ? (ut(t),
            S0(t, n)) : (ut(t),
            t.flags &= -16777217)) : n ? n !== e.memoizedState ? (Jn(t),
            ut(t),
            S0(t, n)) : (ut(t),
            t.flags &= -16777217) : (e.memoizedProps !== i && Jn(t),
            ut(t),
            t.flags &= -16777217),
            null;
        case 27:
            pt(t),
            n = pe.current;
            var s = t.type;
            if (e !== null && t.stateNode != null)
                e.memoizedProps !== i && Jn(t);
            else {
                if (!i) {
                    if (t.stateNode === null)
                        throw Error(o(166));
                    return ut(t),
                    null
                }
                e = ue.current,
                wl(t) ? Kd(t) : (e = Sm(s, i, n),
                t.stateNode = e,
                Jn(t))
            }
            return ut(t),
            null;
        case 5:
            if (pt(t),
            n = t.type,
            e !== null && t.stateNode != null)
                e.memoizedProps !== i && Jn(t);
            else {
                if (!i) {
                    if (t.stateNode === null)
                        throw Error(o(166));
                    return ut(t),
                    null
                }
                if (e = ue.current,
                wl(t))
                    Kd(t);
                else {
                    switch (s = _o(pe.current),
                    e) {
                    case 1:
                        e = s.createElementNS("http://www.w3.org/2000/svg", n);
                        break;
                    case 2:
                        e = s.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                        break;
                    default:
                        switch (n) {
                        case "svg":
                            e = s.createElementNS("http://www.w3.org/2000/svg", n);
                            break;
                        case "math":
                            e = s.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                            break;
                        case "script":
                            e = s.createElement("div"),
                            e.innerHTML = "<script><\/script>",
                            e = e.removeChild(e.firstChild);
                            break;
                        case "select":
                            e = typeof i.is == "string" ? s.createElement("select", {
                                is: i.is
                            }) : s.createElement("select"),
                            i.multiple ? e.multiple = !0 : i.size && (e.size = i.size);
                            break;
                        default:
                            e = typeof i.is == "string" ? s.createElement(n, {
                                is: i.is
                            }) : s.createElement(n)
                        }
                    }
                    e[W] = t,
                    e[ie] = i;
                    e: for (s = t.child; s !== null; ) {
                        if (s.tag === 5 || s.tag === 6)
                            e.appendChild(s.stateNode);
                        else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                            s.child.return = s,
                            s = s.child;
                            continue
                        }
                        if (s === t)
                            break e;
                        for (; s.sibling === null; ) {
                            if (s.return === null || s.return === t)
                                break e;
                            s = s.return
                        }
                        s.sibling.return = s.return,
                        s = s.sibling
                    }
                    t.stateNode = e;
                    e: switch (Dt(e, n, i),
                    n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        e = !!i.autoFocus;
                        break e;
                    case "img":
                        e = !0;
                        break e;
                    default:
                        e = !1
                    }
                    e && Jn(t)
                }
            }
            return ut(t),
            t.flags &= -16777217,
            null;
        case 6:
            if (e && t.stateNode != null)
                e.memoizedProps !== i && Jn(t);
            else {
                if (typeof i != "string" && t.stateNode === null)
                    throw Error(o(166));
                if (e = pe.current,
                wl(t)) {
                    if (e = t.stateNode,
                    n = t.memoizedProps,
                    i = null,
                    s = Ut,
                    s !== null)
                        switch (s.tag) {
                        case 27:
                        case 5:
                            i = s.memoizedProps
                        }
                    e[W] = t,
                    e = !!(e.nodeValue === n || i !== null && i.suppressHydrationWarning === !0 || hm(e.nodeValue, n)),
                    e || Ia(t)
                } else
                    e = _o(e).createTextNode(i),
                    e[W] = t,
                    t.stateNode = e
            }
            return ut(t),
            null;
        case 13:
            if (i = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (s = wl(t),
                i !== null && i.dehydrated !== null) {
                    if (e === null) {
                        if (!s)
                            throw Error(o(318));
                        if (s = t.memoizedState,
                        s = s !== null ? s.dehydrated : null,
                        !s)
                            throw Error(o(317));
                        s[W] = t
                    } else
                        Rl(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    ut(t),
                    s = !1
                } else
                    s = Id(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = s),
                    s = !0;
                if (!s)
                    return t.flags & 256 ? (Fn(t),
                    t) : (Fn(t),
                    null)
            }
            if (Fn(t),
            (t.flags & 128) !== 0)
                return t.lanes = n,
                t;
            if (n = i !== null,
            e = e !== null && e.memoizedState !== null,
            n) {
                i = t.child,
                s = null,
                i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (s = i.alternate.memoizedState.cachePool.pool);
                var d = null;
                i.memoizedState !== null && i.memoizedState.cachePool !== null && (d = i.memoizedState.cachePool.pool),
                d !== s && (i.flags |= 2048)
            }
            return n !== e && n && (t.child.flags |= 8192),
            yo(t, t.updateQueue),
            ut(t),
            null;
        case 4:
            return xt(),
            e === null && xc(t.stateNode.containerInfo),
            ut(t),
            null;
        case 10:
            return Qn(t.type),
            ut(t),
            null;
        case 19:
            if (ae(St),
            s = t.memoizedState,
            s === null)
                return ut(t),
                null;
            if (i = (t.flags & 128) !== 0,
            d = s.rendering,
            d === null)
                if (i)
                    ql(s, !1);
                else {
                    if (ct !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (d = fo(e),
                            d !== null) {
                                for (t.flags |= 128,
                                ql(s, !1),
                                e = d.updateQueue,
                                t.updateQueue = e,
                                yo(t, e),
                                t.subtreeFlags = 0,
                                e = n,
                                n = t.child; n !== null; )
                                    Zd(n, e),
                                    n = n.sibling;
                                return te(St, St.current & 1 | 2),
                                t.child
                            }
                            e = e.sibling
                        }
                    s.tail !== null && Zt() > So && (t.flags |= 128,
                    i = !0,
                    ql(s, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!i)
                    if (e = fo(d),
                    e !== null) {
                        if (t.flags |= 128,
                        i = !0,
                        e = e.updateQueue,
                        t.updateQueue = e,
                        yo(t, e),
                        ql(s, !0),
                        s.tail === null && s.tailMode === "hidden" && !d.alternate && !Xe)
                            return ut(t),
                            null
                    } else
                        2 * Zt() - s.renderingStartTime > So && n !== 536870912 && (t.flags |= 128,
                        i = !0,
                        ql(s, !1),
                        t.lanes = 4194304);
                s.isBackwards ? (d.sibling = t.child,
                t.child = d) : (e = s.last,
                e !== null ? e.sibling = d : t.child = d,
                s.last = d)
            }
            return s.tail !== null ? (t = s.tail,
            s.rendering = t,
            s.tail = t.sibling,
            s.renderingStartTime = Zt(),
            t.sibling = null,
            e = St.current,
            te(St, i ? e & 1 | 2 : e & 1),
            t) : (ut(t),
            null);
        case 22:
        case 23:
            return Fn(t),
            Rs(),
            i = t.memoizedState !== null,
            e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192),
            i ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (ut(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : ut(t),
            n = t.updateQueue,
            n !== null && yo(t, n.retryQueue),
            n = null,
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool),
            i = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool),
            i !== n && (t.flags |= 2048),
            e !== null && ae(tr),
            null;
        case 24:
            return n = null,
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            Qn(bt),
            ut(t),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(o(156, t.tag))
    }
    function qv(e, t) {
        switch (cs(t),
        t.tag) {
        case 1:
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return Qn(bt),
            xt(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return pt(t),
            null;
        case 13:
            if (Fn(t),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(o(340));
                Rl()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return ae(St),
            null;
        case 4:
            return xt(),
            null;
        case 10:
            return Qn(t.type),
            null;
        case 22:
        case 23:
            return Fn(t),
            Rs(),
            e !== null && ae(tr),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 24:
            return Qn(bt),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function E0(e, t) {
        switch (cs(t),
        t.tag) {
        case 3:
            Qn(bt),
            xt();
            break;
        case 26:
        case 27:
        case 5:
            pt(t);
            break;
        case 4:
            xt();
            break;
        case 13:
            Fn(t);
            break;
        case 19:
            ae(St);
            break;
        case 10:
            Qn(t.type);
            break;
        case 22:
        case 23:
            Fn(t),
            Rs(),
            e !== null && ae(tr);
            break;
        case 24:
            Qn(bt)
        }
    }
    function $l(e, t) {
        try {
            var n = t.updateQueue
              , i = n !== null ? n.lastEffect : null;
            if (i !== null) {
                var s = i.next;
                n = s;
                do {
                    if ((n.tag & e) === e) {
                        i = void 0;
                        var d = n.create
                          , y = n.inst;
                        i = d(),
                        y.destroy = i
                    }
                    n = n.next
                } while (n !== s)
            }
        } catch (E) {
            We(t, t.return, E)
        }
    }
    function ba(e, t, n) {
        try {
            var i = t.updateQueue
              , s = i !== null ? i.lastEffect : null;
            if (s !== null) {
                var d = s.next;
                i = d;
                do {
                    if ((i.tag & e) === e) {
                        var y = i.inst
                          , E = y.destroy;
                        if (E !== void 0) {
                            y.destroy = void 0,
                            s = t;
                            var C = n
                              , H = E;
                            try {
                                H()
                            } catch (F) {
                                We(s, C, F)
                            }
                        }
                    }
                    i = i.next
                } while (i !== d)
            }
        } catch (F) {
            We(t, t.return, F)
        }
    }
    function x0(e) {
        var t = e.updateQueue;
        if (t !== null) {
            var n = e.stateNode;
            try {
                sh(t, n)
            } catch (i) {
                We(e, e.return, i)
            }
        }
    }
    function w0(e, t, n) {
        n.props = ar(e.type, e.memoizedProps),
        n.state = e.memoizedState;
        try {
            n.componentWillUnmount()
        } catch (i) {
            We(e, t, i)
        }
    }
    function Vl(e, t) {
        try {
            var n = e.ref;
            if (n !== null) {
                switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    var i = e.stateNode;
                    break;
                case 30:
                    i = e.stateNode;
                    break;
                default:
                    i = e.stateNode
                }
                typeof n == "function" ? e.refCleanup = n(i) : n.current = i
            }
        } catch (s) {
            We(e, t, s)
        }
    }
    function kn(e, t) {
        var n = e.ref
          , i = e.refCleanup;
        if (n !== null)
            if (typeof i == "function")
                try {
                    i()
                } catch (s) {
                    We(e, t, s)
                } finally {
                    e.refCleanup = null,
                    e = e.alternate,
                    e != null && (e.refCleanup = null)
                }
            else if (typeof n == "function")
                try {
                    n(null)
                } catch (s) {
                    We(e, t, s)
                }
            else
                n.current = null
    }
    function R0(e) {
        var t = e.type
          , n = e.memoizedProps
          , i = e.stateNode;
        try {
            e: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                n.autoFocus && i.focus();
                break e;
            case "img":
                n.src ? i.src = n.src : n.srcSet && (i.srcset = n.srcSet)
            }
        } catch (s) {
            We(e, e.return, s)
        }
    }
    function Is(e, t, n) {
        try {
            var i = e.stateNode;
            ob(i, e.type, n, t),
            i[ie] = t
        } catch (s) {
            We(e, e.return, s)
        }
    }
    function T0(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ca(e.type) || e.tag === 4
    }
    function Ws(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || T0(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.tag === 27 && Ca(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function ec(e, t, n) {
        var i = e.tag;
        if (i === 5 || i === 6)
            e = e.stateNode,
            t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n,
            t.appendChild(e),
            n = n._reactRootContainer,
            n != null || t.onclick !== null || (t.onclick = Do));
        else if (i !== 4 && (i === 27 && Ca(e.type) && (n = e.stateNode,
        t = null),
        e = e.child,
        e !== null))
            for (ec(e, t, n),
            e = e.sibling; e !== null; )
                ec(e, t, n),
                e = e.sibling
    }
    function vo(e, t, n) {
        var i = e.tag;
        if (i === 5 || i === 6)
            e = e.stateNode,
            t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (i !== 4 && (i === 27 && Ca(e.type) && (n = e.stateNode),
        e = e.child,
        e !== null))
            for (vo(e, t, n),
            e = e.sibling; e !== null; )
                vo(e, t, n),
                e = e.sibling
    }
    function O0(e) {
        var t = e.stateNode
          , n = e.memoizedProps;
        try {
            for (var i = e.type, s = t.attributes; s.length; )
                t.removeAttributeNode(s[0]);
            Dt(t, i, n),
            t[W] = e,
            t[ie] = n
        } catch (d) {
            We(e, e.return, d)
        }
    }
    var In = !1
      , dt = !1
      , tc = !1
      , C0 = typeof WeakSet == "function" ? WeakSet : Set
      , Rt = null;
    function $v(e, t) {
        if (e = e.containerInfo,
        Tc = jo,
        e = Hd(e),
        Wu(e)) {
            if ("selectionStart"in e)
                var n = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    n = (n = e.ownerDocument) && n.defaultView || window;
                    var i = n.getSelection && n.getSelection();
                    if (i && i.rangeCount !== 0) {
                        n = i.anchorNode;
                        var s = i.anchorOffset
                          , d = i.focusNode;
                        i = i.focusOffset;
                        try {
                            n.nodeType,
                            d.nodeType
                        } catch {
                            n = null;
                            break e
                        }
                        var y = 0
                          , E = -1
                          , C = -1
                          , H = 0
                          , F = 0
                          , I = e
                          , B = null;
                        t: for (; ; ) {
                            for (var q; I !== n || s !== 0 && I.nodeType !== 3 || (E = y + s),
                            I !== d || i !== 0 && I.nodeType !== 3 || (C = y + i),
                            I.nodeType === 3 && (y += I.nodeValue.length),
                            (q = I.firstChild) !== null; )
                                B = I,
                                I = q;
                            for (; ; ) {
                                if (I === e)
                                    break t;
                                if (B === n && ++H === s && (E = y),
                                B === d && ++F === i && (C = y),
                                (q = I.nextSibling) !== null)
                                    break;
                                I = B,
                                B = I.parentNode
                            }
                            I = q
                        }
                        n = E === -1 || C === -1 ? null : {
                            start: E,
                            end: C
                        }
                    } else
                        n = null
                }
            n = n || {
                start: 0,
                end: 0
            }
        } else
            n = null;
        for (Oc = {
            focusedElem: e,
            selectionRange: n
        },
        jo = !1,
        Rt = t; Rt !== null; )
            if (t = Rt,
            e = t.child,
            (t.subtreeFlags & 1024) !== 0 && e !== null)
                e.return = t,
                Rt = e;
            else
                for (; Rt !== null; ) {
                    switch (t = Rt,
                    d = t.alternate,
                    e = t.flags,
                    t.tag) {
                    case 0:
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((e & 1024) !== 0 && d !== null) {
                            e = void 0,
                            n = t,
                            s = d.memoizedProps,
                            d = d.memoizedState,
                            i = n.stateNode;
                            try {
                                var Ae = ar(n.type, s, n.elementType === n.type);
                                e = i.getSnapshotBeforeUpdate(Ae, d),
                                i.__reactInternalSnapshotBeforeUpdate = e
                            } catch (Re) {
                                We(n, n.return, Re)
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo,
                            n = e.nodeType,
                            n === 9)
                                Dc(e);
                            else if (n === 1)
                                switch (e.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    Dc(e);
                                    break;
                                default:
                                    e.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((e & 1024) !== 0)
                            throw Error(o(163))
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        Rt = e;
                        break
                    }
                    Rt = t.return
                }
    }
    function A0(e, t, n) {
        var i = n.flags;
        switch (n.tag) {
        case 0:
        case 11:
        case 15:
            Sa(e, n),
            i & 4 && $l(5, n);
            break;
        case 1:
            if (Sa(e, n),
            i & 4)
                if (e = n.stateNode,
                t === null)
                    try {
                        e.componentDidMount()
                    } catch (y) {
                        We(n, n.return, y)
                    }
                else {
                    var s = ar(n.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        e.componentDidUpdate(s, t, e.__reactInternalSnapshotBeforeUpdate)
                    } catch (y) {
                        We(n, n.return, y)
                    }
                }
            i & 64 && x0(n),
            i & 512 && Vl(n, n.return);
            break;
        case 3:
            if (Sa(e, n),
            i & 64 && (e = n.updateQueue,
            e !== null)) {
                if (t = null,
                n.child !== null)
                    switch (n.child.tag) {
                    case 27:
                    case 5:
                        t = n.child.stateNode;
                        break;
                    case 1:
                        t = n.child.stateNode
                    }
                try {
                    sh(e, t)
                } catch (y) {
                    We(n, n.return, y)
                }
            }
            break;
        case 27:
            t === null && i & 4 && O0(n);
        case 26:
        case 5:
            Sa(e, n),
            t === null && i & 4 && R0(n),
            i & 512 && Vl(n, n.return);
            break;
        case 12:
            Sa(e, n);
            break;
        case 13:
            Sa(e, n),
            i & 4 && M0(e, n),
            i & 64 && (e = n.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null && (n = Kv.bind(null, n),
            mb(e, n))));
            break;
        case 22:
            if (i = n.memoizedState !== null || In,
            !i) {
                t = t !== null && t.memoizedState !== null || dt,
                s = In;
                var d = dt;
                In = i,
                (dt = t) && !d ? Ea(e, n, (n.subtreeFlags & 8772) !== 0) : Sa(e, n),
                In = s,
                dt = d
            }
            break;
        case 30:
            break;
        default:
            Sa(e, n)
        }
    }
    function D0(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        D0(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && ve(t)),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    var rt = null
      , Yt = !1;
    function Wn(e, t, n) {
        for (n = n.child; n !== null; )
            _0(e, t, n),
            n = n.sibling
    }
    function _0(e, t, n) {
        if (it && typeof it.onCommitFiberUnmount == "function")
            try {
                it.onCommitFiberUnmount(Ht, n)
            } catch {}
        switch (n.tag) {
        case 26:
            dt || kn(n, t),
            Wn(e, t, n),
            n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode,
            n.parentNode.removeChild(n));
            break;
        case 27:
            dt || kn(n, t);
            var i = rt
              , s = Yt;
            Ca(n.type) && (rt = n.stateNode,
            Yt = !1),
            Wn(e, t, n),
            Jl(n.stateNode),
            rt = i,
            Yt = s;
            break;
        case 5:
            dt || kn(n, t);
        case 6:
            if (i = rt,
            s = Yt,
            rt = null,
            Wn(e, t, n),
            rt = i,
            Yt = s,
            rt !== null)
                if (Yt)
                    try {
                        (rt.nodeType === 9 ? rt.body : rt.nodeName === "HTML" ? rt.ownerDocument.body : rt).removeChild(n.stateNode)
                    } catch (d) {
                        We(n, t, d)
                    }
                else
                    try {
                        rt.removeChild(n.stateNode)
                    } catch (d) {
                        We(n, t, d)
                    }
            break;
        case 18:
            rt !== null && (Yt ? (e = rt,
            vm(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode),
            li(e)) : vm(rt, n.stateNode));
            break;
        case 4:
            i = rt,
            s = Yt,
            rt = n.stateNode.containerInfo,
            Yt = !0,
            Wn(e, t, n),
            rt = i,
            Yt = s;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            dt || ba(2, n, t),
            dt || ba(4, n, t),
            Wn(e, t, n);
            break;
        case 1:
            dt || (kn(n, t),
            i = n.stateNode,
            typeof i.componentWillUnmount == "function" && w0(n, t, i)),
            Wn(e, t, n);
            break;
        case 21:
            Wn(e, t, n);
            break;
        case 22:
            dt = (i = dt) || n.memoizedState !== null,
            Wn(e, t, n),
            dt = i;
            break;
        default:
            Wn(e, t, n)
        }
    }
    function M0(e, t) {
        if (t.memoizedState === null && (e = t.alternate,
        e !== null && (e = e.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null))))
            try {
                li(e)
            } catch (n) {
                We(t, t.return, n)
            }
    }
    function Vv(e) {
        switch (e.tag) {
        case 13:
        case 19:
            var t = e.stateNode;
            return t === null && (t = e.stateNode = new C0),
            t;
        case 22:
            return e = e.stateNode,
            t = e._retryCache,
            t === null && (t = e._retryCache = new C0),
            t;
        default:
            throw Error(o(435, e.tag))
        }
    }
    function nc(e, t) {
        var n = Vv(e);
        t.forEach(function(i) {
            var s = Jv.bind(null, e, i);
            n.has(i) || (n.add(i),
            i.then(s, s))
        })
    }
    function Jt(e, t) {
        var n = t.deletions;
        if (n !== null)
            for (var i = 0; i < n.length; i++) {
                var s = n[i]
                  , d = e
                  , y = t
                  , E = y;
                e: for (; E !== null; ) {
                    switch (E.tag) {
                    case 27:
                        if (Ca(E.type)) {
                            rt = E.stateNode,
                            Yt = !1;
                            break e
                        }
                        break;
                    case 5:
                        rt = E.stateNode,
                        Yt = !1;
                        break e;
                    case 3:
                    case 4:
                        rt = E.stateNode.containerInfo,
                        Yt = !0;
                        break e
                    }
                    E = E.return
                }
                if (rt === null)
                    throw Error(o(160));
                _0(d, y, s),
                rt = null,
                Yt = !1,
                d = s.alternate,
                d !== null && (d.return = null),
                s.return = null
            }
        if (t.subtreeFlags & 13878)
            for (t = t.child; t !== null; )
                k0(t, e),
                t = t.sibling
    }
    var Rn = null;
    function k0(e, t) {
        var n = e.alternate
          , i = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            Jt(t, e),
            It(e),
            i & 4 && (ba(3, e, e.return),
            $l(3, e),
            ba(5, e, e.return));
            break;
        case 1:
            Jt(t, e),
            It(e),
            i & 512 && (dt || n === null || kn(n, n.return)),
            i & 64 && In && (e = e.updateQueue,
            e !== null && (i = e.callbacks,
            i !== null && (n = e.shared.hiddenCallbacks,
            e.shared.hiddenCallbacks = n === null ? i : n.concat(i))));
            break;
        case 26:
            var s = Rn;
            if (Jt(t, e),
            It(e),
            i & 512 && (dt || n === null || kn(n, n.return)),
            i & 4) {
                var d = n !== null ? n.memoizedState : null;
                if (i = e.memoizedState,
                n === null)
                    if (i === null)
                        if (e.stateNode === null) {
                            e: {
                                i = e.type,
                                n = e.memoizedProps,
                                s = s.ownerDocument || s;
                                t: switch (i) {
                                case "title":
                                    d = s.getElementsByTagName("title")[0],
                                    (!d || d[Ce] || d[W] || d.namespaceURI === "http://www.w3.org/2000/svg" || d.hasAttribute("itemprop")) && (d = s.createElement(i),
                                    s.head.insertBefore(d, s.querySelector("head > title"))),
                                    Dt(d, i, n),
                                    d[W] = e,
                                    Ge(d),
                                    i = d;
                                    break e;
                                case "link":
                                    var y = Om("link", "href", s).get(i + (n.href || ""));
                                    if (y) {
                                        for (var E = 0; E < y.length; E++)
                                            if (d = y[E],
                                            d.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && d.getAttribute("rel") === (n.rel == null ? null : n.rel) && d.getAttribute("title") === (n.title == null ? null : n.title) && d.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                                                y.splice(E, 1);
                                                break t
                                            }
                                    }
                                    d = s.createElement(i),
                                    Dt(d, i, n),
                                    s.head.appendChild(d);
                                    break;
                                case "meta":
                                    if (y = Om("meta", "content", s).get(i + (n.content || ""))) {
                                        for (E = 0; E < y.length; E++)
                                            if (d = y[E],
                                            d.getAttribute("content") === (n.content == null ? null : "" + n.content) && d.getAttribute("name") === (n.name == null ? null : n.name) && d.getAttribute("property") === (n.property == null ? null : n.property) && d.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && d.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                                                y.splice(E, 1);
                                                break t
                                            }
                                    }
                                    d = s.createElement(i),
                                    Dt(d, i, n),
                                    s.head.appendChild(d);
                                    break;
                                default:
                                    throw Error(o(468, i))
                                }
                                d[W] = e,
                                Ge(d),
                                i = d
                            }
                            e.stateNode = i
                        } else
                            Cm(s, e.type, e.stateNode);
                    else
                        e.stateNode = Tm(s, i, e.memoizedProps);
                else
                    d !== i ? (d === null ? n.stateNode !== null && (n = n.stateNode,
                    n.parentNode.removeChild(n)) : d.count--,
                    i === null ? Cm(s, e.type, e.stateNode) : Tm(s, i, e.memoizedProps)) : i === null && e.stateNode !== null && Is(e, e.memoizedProps, n.memoizedProps)
            }
            break;
        case 27:
            Jt(t, e),
            It(e),
            i & 512 && (dt || n === null || kn(n, n.return)),
            n !== null && i & 4 && Is(e, e.memoizedProps, n.memoizedProps);
            break;
        case 5:
            if (Jt(t, e),
            It(e),
            i & 512 && (dt || n === null || kn(n, n.return)),
            e.flags & 32) {
                s = e.stateNode;
                try {
                    vr(s, "")
                } catch (q) {
                    We(e, e.return, q)
                }
            }
            i & 4 && e.stateNode != null && (s = e.memoizedProps,
            Is(e, s, n !== null ? n.memoizedProps : s)),
            i & 1024 && (tc = !0);
            break;
        case 6:
            if (Jt(t, e),
            It(e),
            i & 4) {
                if (e.stateNode === null)
                    throw Error(o(162));
                i = e.memoizedProps,
                n = e.stateNode;
                try {
                    n.nodeValue = i
                } catch (q) {
                    We(e, e.return, q)
                }
            }
            break;
        case 3:
            if (Lo = null,
            s = Rn,
            Rn = Mo(t.containerInfo),
            Jt(t, e),
            Rn = s,
            It(e),
            i & 4 && n !== null && n.memoizedState.isDehydrated)
                try {
                    li(t.containerInfo)
                } catch (q) {
                    We(e, e.return, q)
                }
            tc && (tc = !1,
            L0(e));
            break;
        case 4:
            i = Rn,
            Rn = Mo(e.stateNode.containerInfo),
            Jt(t, e),
            It(e),
            Rn = i;
            break;
        case 12:
            Jt(t, e),
            It(e);
            break;
        case 13:
            Jt(t, e),
            It(e),
            e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (uc = Zt()),
            i & 4 && (i = e.updateQueue,
            i !== null && (e.updateQueue = null,
            nc(e, i)));
            break;
        case 22:
            s = e.memoizedState !== null;
            var C = n !== null && n.memoizedState !== null
              , H = In
              , F = dt;
            if (In = H || s,
            dt = F || C,
            Jt(t, e),
            dt = F,
            In = H,
            It(e),
            i & 8192)
                e: for (t = e.stateNode,
                t._visibility = s ? t._visibility & -2 : t._visibility | 1,
                s && (n === null || C || In || dt || rr(e)),
                n = null,
                t = e; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (n === null) {
                            C = n = t;
                            try {
                                if (d = C.stateNode,
                                s)
                                    y = d.style,
                                    typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                                else {
                                    E = C.stateNode;
                                    var I = C.memoizedProps.style
                                      , B = I != null && I.hasOwnProperty("display") ? I.display : null;
                                    E.style.display = B == null || typeof B == "boolean" ? "" : ("" + B).trim()
                                }
                            } catch (q) {
                                We(C, C.return, q)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (n === null) {
                            C = t;
                            try {
                                C.stateNode.nodeValue = s ? "" : C.memoizedProps
                            } catch (q) {
                                We(C, C.return, q)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break e;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e)
                            break e;
                        n === t && (n = null),
                        t = t.return
                    }
                    n === t && (n = null),
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            i & 4 && (i = e.updateQueue,
            i !== null && (n = i.retryQueue,
            n !== null && (i.retryQueue = null,
            nc(e, n))));
            break;
        case 19:
            Jt(t, e),
            It(e),
            i & 4 && (i = e.updateQueue,
            i !== null && (e.updateQueue = null,
            nc(e, i)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            Jt(t, e),
            It(e)
        }
    }
    function It(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                for (var n, i = e.return; i !== null; ) {
                    if (T0(i)) {
                        n = i;
                        break
                    }
                    i = i.return
                }
                if (n == null)
                    throw Error(o(160));
                switch (n.tag) {
                case 27:
                    var s = n.stateNode
                      , d = Ws(e);
                    vo(e, d, s);
                    break;
                case 5:
                    var y = n.stateNode;
                    n.flags & 32 && (vr(y, ""),
                    n.flags &= -33);
                    var E = Ws(e);
                    vo(e, E, y);
                    break;
                case 3:
                case 4:
                    var C = n.stateNode.containerInfo
                      , H = Ws(e);
                    ec(e, H, C);
                    break;
                default:
                    throw Error(o(161))
                }
            } catch (F) {
                We(e, e.return, F)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function L0(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
                var t = e;
                L0(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                e = e.sibling
            }
    }
    function Sa(e, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                A0(e, t.alternate, t),
                t = t.sibling
    }
    function rr(e) {
        for (e = e.child; e !== null; ) {
            var t = e;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                ba(4, t, t.return),
                rr(t);
                break;
            case 1:
                kn(t, t.return);
                var n = t.stateNode;
                typeof n.componentWillUnmount == "function" && w0(t, t.return, n),
                rr(t);
                break;
            case 27:
                Jl(t.stateNode);
            case 26:
            case 5:
                kn(t, t.return),
                rr(t);
                break;
            case 22:
                t.memoizedState === null && rr(t);
                break;
            case 30:
                rr(t);
                break;
            default:
                rr(t)
            }
            e = e.sibling
        }
    }
    function Ea(e, t, n) {
        for (n = n && (t.subtreeFlags & 8772) !== 0,
        t = t.child; t !== null; ) {
            var i = t.alternate
              , s = e
              , d = t
              , y = d.flags;
            switch (d.tag) {
            case 0:
            case 11:
            case 15:
                Ea(s, d, n),
                $l(4, d);
                break;
            case 1:
                if (Ea(s, d, n),
                i = d,
                s = i.stateNode,
                typeof s.componentDidMount == "function")
                    try {
                        s.componentDidMount()
                    } catch (H) {
                        We(i, i.return, H)
                    }
                if (i = d,
                s = i.updateQueue,
                s !== null) {
                    var E = i.stateNode;
                    try {
                        var C = s.shared.hiddenCallbacks;
                        if (C !== null)
                            for (s.shared.hiddenCallbacks = null,
                            s = 0; s < C.length; s++)
                                uh(C[s], E)
                    } catch (H) {
                        We(i, i.return, H)
                    }
                }
                n && y & 64 && x0(d),
                Vl(d, d.return);
                break;
            case 27:
                O0(d);
            case 26:
            case 5:
                Ea(s, d, n),
                n && i === null && y & 4 && R0(d),
                Vl(d, d.return);
                break;
            case 12:
                Ea(s, d, n);
                break;
            case 13:
                Ea(s, d, n),
                n && y & 4 && M0(s, d);
                break;
            case 22:
                d.memoizedState === null && Ea(s, d, n),
                Vl(d, d.return);
                break;
            case 30:
                break;
            default:
                Ea(s, d, n)
            }
            t = t.sibling
        }
    }
    function ac(e, t) {
        var n = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool),
        e = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++,
        n != null && Cl(n))
    }
    function rc(e, t) {
        e = null,
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== e && (t.refCount++,
        e != null && Cl(e))
    }
    function Ln(e, t, n, i) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                N0(e, t, n, i),
                t = t.sibling
    }
    function N0(e, t, n, i) {
        var s = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            Ln(e, t, n, i),
            s & 2048 && $l(9, t);
            break;
        case 1:
            Ln(e, t, n, i);
            break;
        case 3:
            Ln(e, t, n, i),
            s & 2048 && (e = null,
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== e && (t.refCount++,
            e != null && Cl(e)));
            break;
        case 12:
            if (s & 2048) {
                Ln(e, t, n, i),
                e = t.stateNode;
                try {
                    var d = t.memoizedProps
                      , y = d.id
                      , E = d.onPostCommit;
                    typeof E == "function" && E(y, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                } catch (C) {
                    We(t, t.return, C)
                }
            } else
                Ln(e, t, n, i);
            break;
        case 13:
            Ln(e, t, n, i);
            break;
        case 23:
            break;
        case 22:
            d = t.stateNode,
            y = t.alternate,
            t.memoizedState !== null ? d._visibility & 2 ? Ln(e, t, n, i) : Yl(e, t) : d._visibility & 2 ? Ln(e, t, n, i) : (d._visibility |= 2,
            Ur(e, t, n, i, (t.subtreeFlags & 10256) !== 0)),
            s & 2048 && ac(y, t);
            break;
        case 24:
            Ln(e, t, n, i),
            s & 2048 && rc(t.alternate, t);
            break;
        default:
            Ln(e, t, n, i)
        }
    }
    function Ur(e, t, n, i, s) {
        for (s = s && (t.subtreeFlags & 10256) !== 0,
        t = t.child; t !== null; ) {
            var d = e
              , y = t
              , E = n
              , C = i
              , H = y.flags;
            switch (y.tag) {
            case 0:
            case 11:
            case 15:
                Ur(d, y, E, C, s),
                $l(8, y);
                break;
            case 23:
                break;
            case 22:
                var F = y.stateNode;
                y.memoizedState !== null ? F._visibility & 2 ? Ur(d, y, E, C, s) : Yl(d, y) : (F._visibility |= 2,
                Ur(d, y, E, C, s)),
                s && H & 2048 && ac(y.alternate, y);
                break;
            case 24:
                Ur(d, y, E, C, s),
                s && H & 2048 && rc(y.alternate, y);
                break;
            default:
                Ur(d, y, E, C, s)
            }
            t = t.sibling
        }
    }
    function Yl(e, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var n = e
                  , i = t
                  , s = i.flags;
                switch (i.tag) {
                case 22:
                    Yl(n, i),
                    s & 2048 && ac(i.alternate, i);
                    break;
                case 24:
                    Yl(n, i),
                    s & 2048 && rc(i.alternate, i);
                    break;
                default:
                    Yl(n, i)
                }
                t = t.sibling
            }
    }
    var Gl = 8192;
    function Hr(e) {
        if (e.subtreeFlags & Gl)
            for (e = e.child; e !== null; )
                z0(e),
                e = e.sibling
    }
    function z0(e) {
        switch (e.tag) {
        case 26:
            Hr(e),
            e.flags & Gl && e.memoizedState !== null && Cb(Rn, e.memoizedState, e.memoizedProps);
            break;
        case 5:
            Hr(e);
            break;
        case 3:
        case 4:
            var t = Rn;
            Rn = Mo(e.stateNode.containerInfo),
            Hr(e),
            Rn = t;
            break;
        case 22:
            e.memoizedState === null && (t = e.alternate,
            t !== null && t.memoizedState !== null ? (t = Gl,
            Gl = 16777216,
            Hr(e),
            Gl = t) : Hr(e));
            break;
        default:
            Hr(e)
        }
    }
    function j0(e) {
        var t = e.alternate;
        if (t !== null && (e = t.child,
        e !== null)) {
            t.child = null;
            do
                t = e.sibling,
                e.sibling = null,
                e = t;
            while (e !== null)
        }
    }
    function Pl(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    Rt = i,
                    H0(i, e)
                }
            j0(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                U0(e),
                e = e.sibling
    }
    function U0(e) {
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Pl(e),
            e.flags & 2048 && ba(9, e, e.return);
            break;
        case 3:
            Pl(e);
            break;
        case 12:
            Pl(e);
            break;
        case 22:
            var t = e.stateNode;
            e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3,
            bo(e)) : Pl(e);
            break;
        default:
            Pl(e)
        }
    }
    function bo(e) {
        var t = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (t !== null)
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    Rt = i,
                    H0(i, e)
                }
            j0(e)
        }
        for (e = e.child; e !== null; ) {
            switch (t = e,
            t.tag) {
            case 0:
            case 11:
            case 15:
                ba(8, t, t.return),
                bo(t);
                break;
            case 22:
                n = t.stateNode,
                n._visibility & 2 && (n._visibility &= -3,
                bo(t));
                break;
            default:
                bo(t)
            }
            e = e.sibling
        }
    }
    function H0(e, t) {
        for (; Rt !== null; ) {
            var n = Rt;
            switch (n.tag) {
            case 0:
            case 11:
            case 15:
                ba(8, n, t);
                break;
            case 23:
            case 22:
                if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
                    var i = n.memoizedState.cachePool.pool;
                    i != null && i.refCount++
                }
                break;
            case 24:
                Cl(n.memoizedState.cache)
            }
            if (i = n.child,
            i !== null)
                i.return = n,
                Rt = i;
            else
                e: for (n = e; Rt !== null; ) {
                    i = Rt;
                    var s = i.sibling
                      , d = i.return;
                    if (D0(i),
                    i === n) {
                        Rt = null;
                        break e
                    }
                    if (s !== null) {
                        s.return = d,
                        Rt = s;
                        break e
                    }
                    Rt = d
                }
        }
    }
    var Yv = {
        getCacheForType: function(e) {
            var t = kt(bt)
              , n = t.data.get(e);
            return n === void 0 && (n = e(),
            t.data.set(e, n)),
            n
        }
    }
      , Gv = typeof WeakMap == "function" ? WeakMap : Map
      , Ze = 0
      , et = null
      , Ue = null
      , $e = 0
      , Fe = 0
      , Wt = null
      , xa = !1
      , Br = !1
      , lc = !1
      , ea = 0
      , ct = 0
      , wa = 0
      , lr = 0
      , ic = 0
      , gn = 0
      , qr = 0
      , Xl = null
      , Gt = null
      , oc = !1
      , uc = 0
      , So = 1 / 0
      , Eo = null
      , Ra = null
      , At = 0
      , Ta = null
      , $r = null
      , Vr = 0
      , sc = 0
      , cc = null
      , B0 = null
      , Ql = 0
      , fc = null;
    function en() {
        if ((Ze & 2) !== 0 && $e !== 0)
            return $e & -$e;
        if (A.T !== null) {
            var e = Dr;
            return e !== 0 ? e : vc()
        }
        return M()
    }
    function q0() {
        gn === 0 && (gn = ($e & 536870912) === 0 || Xe ? gr() : 536870912);
        var e = mn.current;
        return e !== null && (e.flags |= 32),
        gn
    }
    function tn(e, t, n) {
        (e === et && (Fe === 2 || Fe === 9) || e.cancelPendingCommit !== null) && (Yr(e, 0),
        Oa(e, $e, gn, !1)),
        $a(e, n),
        ((Ze & 2) === 0 || e !== et) && (e === et && ((Ze & 2) === 0 && (lr |= n),
        ct === 4 && Oa(e, $e, gn, !1)),
        Nn(e))
    }
    function $0(e, t, n) {
        if ((Ze & 6) !== 0)
            throw Error(o(327));
        var i = !n && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Dn(e, t)
          , s = i ? Qv(e, t) : mc(e, t, !0)
          , d = i;
        do {
            if (s === 0) {
                Br && !i && Oa(e, t, 0, !1);
                break
            } else {
                if (n = e.current.alternate,
                d && !Pv(n)) {
                    s = mc(e, t, !1),
                    d = !1;
                    continue
                }
                if (s === 2) {
                    if (d = t,
                    e.errorRecoveryDisabledLanes & d)
                        var y = 0;
                    else
                        y = e.pendingLanes & -536870913,
                        y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
                    if (y !== 0) {
                        t = y;
                        e: {
                            var E = e;
                            s = Xl;
                            var C = E.current.memoizedState.isDehydrated;
                            if (C && (Yr(E, y).flags |= 256),
                            y = mc(E, y, !1),
                            y !== 2) {
                                if (lc && !C) {
                                    E.errorRecoveryDisabledLanes |= d,
                                    lr |= d,
                                    s = 4;
                                    break e
                                }
                                d = Gt,
                                Gt = s,
                                d !== null && (Gt === null ? Gt = d : Gt.push.apply(Gt, d))
                            }
                            s = y
                        }
                        if (d = !1,
                        s !== 2)
                            continue
                    }
                }
                if (s === 1) {
                    Yr(e, 0),
                    Oa(e, t, 0, !0);
                    break
                }
                e: {
                    switch (i = e,
                    d = s,
                    d) {
                    case 0:
                    case 1:
                        throw Error(o(345));
                    case 4:
                        if ((t & 4194048) !== t)
                            break;
                    case 6:
                        Oa(i, t, gn, !xa);
                        break e;
                    case 2:
                        Gt = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(o(329))
                    }
                    if ((t & 62914560) === t && (s = uc + 300 - Zt(),
                    10 < s)) {
                        if (Oa(i, t, gn, !xa),
                        qa(i, 0, !0) !== 0)
                            break e;
                        i.timeoutHandle = pm(V0.bind(null, i, n, Gt, Eo, oc, t, gn, lr, qr, xa, d, 2, -0, 0), s);
                        break e
                    }
                    V0(i, n, Gt, Eo, oc, t, gn, lr, qr, xa, d, 0, -0, 0)
                }
            }
            break
        } while (!0);
        Nn(e)
    }
    function V0(e, t, n, i, s, d, y, E, C, H, F, I, B, q) {
        if (e.timeoutHandle = -1,
        I = t.subtreeFlags,
        (I & 8192 || (I & 16785408) === 16785408) && (ei = {
            stylesheets: null,
            count: 0,
            unsuspend: Ob
        },
        z0(t),
        I = Ab(),
        I !== null)) {
            e.cancelPendingCommit = I(F0.bind(null, e, t, d, n, i, s, y, E, C, F, 1, B, q)),
            Oa(e, d, y, !H);
            return
        }
        F0(e, t, d, n, i, s, y, E, C)
    }
    function Pv(e) {
        for (var t = e; ; ) {
            var n = t.tag;
            if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue,
            n !== null && (n = n.stores,
            n !== null)))
                for (var i = 0; i < n.length; i++) {
                    var s = n[i]
                      , d = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!Ft(d(), s))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (n = t.child,
            t.subtreeFlags & 16384 && n !== null)
                n.return = t,
                t = n;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function Oa(e, t, n, i) {
        t &= ~ic,
        t &= ~lr,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        i && (e.warmLanes |= t),
        i = e.expirationTimes;
        for (var s = t; 0 < s; ) {
            var d = 31 - Ot(s)
              , y = 1 << d;
            i[d] = -1,
            s &= ~y
        }
        n !== 0 && Va(e, n, t)
    }
    function xo() {
        return (Ze & 6) === 0 ? (Zl(0),
        !1) : !0
    }
    function dc() {
        if (Ue !== null) {
            if (Fe === 0)
                var e = Ue.return;
            else
                e = Ue,
                Xn = Wa = null,
                Ds(e),
                zr = null,
                Hl = 0,
                e = Ue;
            for (; e !== null; )
                E0(e.alternate, e),
                e = e.return;
            Ue = null
        }
    }
    function Yr(e, t) {
        var n = e.timeoutHandle;
        n !== -1 && (e.timeoutHandle = -1,
        sb(n)),
        n = e.cancelPendingCommit,
        n !== null && (e.cancelPendingCommit = null,
        n()),
        dc(),
        et = e,
        Ue = n = Yn(e.current, null),
        $e = t,
        Fe = 0,
        Wt = null,
        xa = !1,
        Br = Dn(e, t),
        lc = !1,
        qr = gn = ic = lr = wa = ct = 0,
        Gt = Xl = null,
        oc = !1,
        (t & 8) !== 0 && (t |= t & 32);
        var i = e.entangledLanes;
        if (i !== 0)
            for (e = e.entanglements,
            i &= t; 0 < i; ) {
                var s = 31 - Ot(i)
                  , d = 1 << s;
                t |= e[s],
                i &= ~d
            }
        return ea = t,
        Yi(),
        n
    }
    function Y0(e, t) {
        Le = null,
        A.H = uo,
        t === Dl || t === Ii ? (t = ih(),
        Fe = 3) : t === ah ? (t = ih(),
        Fe = 4) : Fe = t === o0 ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
        Wt = t,
        Ue === null && (ct = 1,
        mo(e, cn(t, e.current)))
    }
    function G0() {
        var e = A.H;
        return A.H = uo,
        e === null ? uo : e
    }
    function P0() {
        var e = A.A;
        return A.A = Yv,
        e
    }
    function hc() {
        ct = 4,
        xa || ($e & 4194048) !== $e && mn.current !== null || (Br = !0),
        (wa & 134217727) === 0 && (lr & 134217727) === 0 || et === null || Oa(et, $e, gn, !1)
    }
    function mc(e, t, n) {
        var i = Ze;
        Ze |= 2;
        var s = G0()
          , d = P0();
        (et !== e || $e !== t) && (Eo = null,
        Yr(e, t)),
        t = !1;
        var y = ct;
        e: do
            try {
                if (Fe !== 0 && Ue !== null) {
                    var E = Ue
                      , C = Wt;
                    switch (Fe) {
                    case 8:
                        dc(),
                        y = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        mn.current === null && (t = !0);
                        var H = Fe;
                        if (Fe = 0,
                        Wt = null,
                        Gr(e, E, C, H),
                        n && Br) {
                            y = 0;
                            break e
                        }
                        break;
                    default:
                        H = Fe,
                        Fe = 0,
                        Wt = null,
                        Gr(e, E, C, H)
                    }
                }
                Xv(),
                y = ct;
                break
            } catch (F) {
                Y0(e, F)
            }
        while (!0);
        return t && e.shellSuspendCounter++,
        Xn = Wa = null,
        Ze = i,
        A.H = s,
        A.A = d,
        Ue === null && (et = null,
        $e = 0,
        Yi()),
        y
    }
    function Xv() {
        for (; Ue !== null; )
            X0(Ue)
    }
    function Qv(e, t) {
        var n = Ze;
        Ze |= 2;
        var i = G0()
          , s = P0();
        et !== e || $e !== t ? (Eo = null,
        So = Zt() + 500,
        Yr(e, t)) : Br = Dn(e, t);
        e: do
            try {
                if (Fe !== 0 && Ue !== null) {
                    t = Ue;
                    var d = Wt;
                    t: switch (Fe) {
                    case 1:
                        Fe = 0,
                        Wt = null,
                        Gr(e, t, d, 1);
                        break;
                    case 2:
                    case 9:
                        if (rh(d)) {
                            Fe = 0,
                            Wt = null,
                            Q0(t);
                            break
                        }
                        t = function() {
                            Fe !== 2 && Fe !== 9 || et !== e || (Fe = 7),
                            Nn(e)
                        }
                        ,
                        d.then(t, t);
                        break e;
                    case 3:
                        Fe = 7;
                        break e;
                    case 4:
                        Fe = 5;
                        break e;
                    case 7:
                        rh(d) ? (Fe = 0,
                        Wt = null,
                        Q0(t)) : (Fe = 0,
                        Wt = null,
                        Gr(e, t, d, 7));
                        break;
                    case 5:
                        var y = null;
                        switch (Ue.tag) {
                        case 26:
                            y = Ue.memoizedState;
                        case 5:
                        case 27:
                            var E = Ue;
                            if (!y || Am(y)) {
                                Fe = 0,
                                Wt = null;
                                var C = E.sibling;
                                if (C !== null)
                                    Ue = C;
                                else {
                                    var H = E.return;
                                    H !== null ? (Ue = H,
                                    wo(H)) : Ue = null
                                }
                                break t
                            }
                        }
                        Fe = 0,
                        Wt = null,
                        Gr(e, t, d, 5);
                        break;
                    case 6:
                        Fe = 0,
                        Wt = null,
                        Gr(e, t, d, 6);
                        break;
                    case 8:
                        dc(),
                        ct = 6;
                        break e;
                    default:
                        throw Error(o(462))
                    }
                }
                Zv();
                break
            } catch (F) {
                Y0(e, F)
            }
        while (!0);
        return Xn = Wa = null,
        A.H = i,
        A.A = s,
        Ze = n,
        Ue !== null ? 0 : (et = null,
        $e = 0,
        Yi(),
        ct)
    }
    function Zv() {
        for (; Ue !== null && !Nu(); )
            X0(Ue)
    }
    function X0(e) {
        var t = b0(e.alternate, e, ea);
        e.memoizedProps = e.pendingProps,
        t === null ? wo(e) : Ue = t
    }
    function Q0(e) {
        var t = e
          , n = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = h0(n, t, t.pendingProps, t.type, void 0, $e);
            break;
        case 11:
            t = h0(n, t, t.pendingProps, t.type.render, t.ref, $e);
            break;
        case 5:
            Ds(t);
        default:
            E0(n, t),
            t = Ue = Zd(t, ea),
            t = b0(n, t, ea)
        }
        e.memoizedProps = e.pendingProps,
        t === null ? wo(e) : Ue = t
    }
    function Gr(e, t, n, i) {
        Xn = Wa = null,
        Ds(t),
        zr = null,
        Hl = 0;
        var s = t.return;
        try {
            if (Uv(e, s, t, n, $e)) {
                ct = 1,
                mo(e, cn(n, e.current)),
                Ue = null;
                return
            }
        } catch (d) {
            if (s !== null)
                throw Ue = s,
                d;
            ct = 1,
            mo(e, cn(n, e.current)),
            Ue = null;
            return
        }
        t.flags & 32768 ? (Xe || i === 1 ? e = !0 : Br || ($e & 536870912) !== 0 ? e = !1 : (xa = e = !0,
        (i === 2 || i === 9 || i === 3 || i === 6) && (i = mn.current,
        i !== null && i.tag === 13 && (i.flags |= 16384))),
        Z0(t, e)) : wo(t)
    }
    function wo(e) {
        var t = e;
        do {
            if ((t.flags & 32768) !== 0) {
                Z0(t, xa);
                return
            }
            e = t.return;
            var n = Bv(t.alternate, t, ea);
            if (n !== null) {
                Ue = n;
                return
            }
            if (t = t.sibling,
            t !== null) {
                Ue = t;
                return
            }
            Ue = t = e
        } while (t !== null);
        ct === 0 && (ct = 5)
    }
    function Z0(e, t) {
        do {
            var n = qv(e.alternate, e);
            if (n !== null) {
                n.flags &= 32767,
                Ue = n;
                return
            }
            if (n = e.return,
            n !== null && (n.flags |= 32768,
            n.subtreeFlags = 0,
            n.deletions = null),
            !t && (e = e.sibling,
            e !== null)) {
                Ue = e;
                return
            }
            Ue = e = n
        } while (e !== null);
        ct = 6,
        Ue = null
    }
    function F0(e, t, n, i, s, d, y, E, C) {
        e.cancelPendingCommit = null;
        do
            Ro();
        while (At !== 0);
        if ((Ze & 6) !== 0)
            throw Error(o(327));
        if (t !== null) {
            if (t === e.current)
                throw Error(o(177));
            if (d = t.lanes | t.childLanes,
            d |= rs,
            Li(e, n, d, y, E, C),
            e === et && (Ue = et = null,
            $e = 0),
            $r = t,
            Ta = e,
            Vr = n,
            sc = d,
            cc = s,
            B0 = i,
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null,
            e.callbackPriority = 0,
            Iv(mr, function() {
                return em(),
                null
            })) : (e.callbackNode = null,
            e.callbackPriority = 0),
            i = (t.flags & 13878) !== 0,
            (t.subtreeFlags & 13878) !== 0 || i) {
                i = A.T,
                A.T = null,
                s = P.p,
                P.p = 2,
                y = Ze,
                Ze |= 4;
                try {
                    $v(e, t, n)
                } finally {
                    Ze = y,
                    P.p = s,
                    A.T = i
                }
            }
            At = 1,
            K0(),
            J0(),
            I0()
        }
    }
    function K0() {
        if (At === 1) {
            At = 0;
            var e = Ta
              , t = $r
              , n = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || n) {
                n = A.T,
                A.T = null;
                var i = P.p;
                P.p = 2;
                var s = Ze;
                Ze |= 4;
                try {
                    k0(t, e);
                    var d = Oc
                      , y = Hd(e.containerInfo)
                      , E = d.focusedElem
                      , C = d.selectionRange;
                    if (y !== E && E && E.ownerDocument && Ud(E.ownerDocument.documentElement, E)) {
                        if (C !== null && Wu(E)) {
                            var H = C.start
                              , F = C.end;
                            if (F === void 0 && (F = H),
                            "selectionStart"in E)
                                E.selectionStart = H,
                                E.selectionEnd = Math.min(F, E.value.length);
                            else {
                                var I = E.ownerDocument || document
                                  , B = I && I.defaultView || window;
                                if (B.getSelection) {
                                    var q = B.getSelection()
                                      , Ae = E.textContent.length
                                      , Re = Math.min(C.start, Ae)
                                      , Ie = C.end === void 0 ? Re : Math.min(C.end, Ae);
                                    !q.extend && Re > Ie && (y = Ie,
                                    Ie = Re,
                                    Re = y);
                                    var N = jd(E, Re)
                                      , k = jd(E, Ie);
                                    if (N && k && (q.rangeCount !== 1 || q.anchorNode !== N.node || q.anchorOffset !== N.offset || q.focusNode !== k.node || q.focusOffset !== k.offset)) {
                                        var U = I.createRange();
                                        U.setStart(N.node, N.offset),
                                        q.removeAllRanges(),
                                        Re > Ie ? (q.addRange(U),
                                        q.extend(k.node, k.offset)) : (U.setEnd(k.node, k.offset),
                                        q.addRange(U))
                                    }
                                }
                            }
                        }
                        for (I = [],
                        q = E; q = q.parentNode; )
                            q.nodeType === 1 && I.push({
                                element: q,
                                left: q.scrollLeft,
                                top: q.scrollTop
                            });
                        for (typeof E.focus == "function" && E.focus(),
                        E = 0; E < I.length; E++) {
                            var K = I[E];
                            K.element.scrollLeft = K.left,
                            K.element.scrollTop = K.top
                        }
                    }
                    jo = !!Tc,
                    Oc = Tc = null
                } finally {
                    Ze = s,
                    P.p = i,
                    A.T = n
                }
            }
            e.current = t,
            At = 2
        }
    }
    function J0() {
        if (At === 2) {
            At = 0;
            var e = Ta
              , t = $r
              , n = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || n) {
                n = A.T,
                A.T = null;
                var i = P.p;
                P.p = 2;
                var s = Ze;
                Ze |= 4;
                try {
                    A0(e, t.alternate, t)
                } finally {
                    Ze = s,
                    P.p = i,
                    A.T = n
                }
            }
            At = 3
        }
    }
    function I0() {
        if (At === 4 || At === 3) {
            At = 0,
            zu();
            var e = Ta
              , t = $r
              , n = Vr
              , i = B0;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? At = 5 : (At = 0,
            $r = Ta = null,
            W0(e, e.pendingLanes));
            var s = e.pendingLanes;
            if (s === 0 && (Ra = null),
            fl(n),
            t = t.stateNode,
            it && typeof it.onCommitFiberRoot == "function")
                try {
                    it.onCommitFiberRoot(Ht, t, void 0, (t.current.flags & 128) === 128)
                } catch {}
            if (i !== null) {
                t = A.T,
                s = P.p,
                P.p = 2,
                A.T = null;
                try {
                    for (var d = e.onRecoverableError, y = 0; y < i.length; y++) {
                        var E = i[y];
                        d(E.value, {
                            componentStack: E.stack
                        })
                    }
                } finally {
                    A.T = t,
                    P.p = s
                }
            }
            (Vr & 3) !== 0 && Ro(),
            Nn(e),
            s = e.pendingLanes,
            (n & 4194090) !== 0 && (s & 42) !== 0 ? e === fc ? Ql++ : (Ql = 0,
            fc = e) : Ql = 0,
            Zl(0)
        }
    }
    function W0(e, t) {
        (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache,
        t != null && (e.pooledCache = null,
        Cl(t)))
    }
    function Ro(e) {
        return K0(),
        J0(),
        I0(),
        em()
    }
    function em() {
        if (At !== 5)
            return !1;
        var e = Ta
          , t = sc;
        sc = 0;
        var n = fl(Vr)
          , i = A.T
          , s = P.p;
        try {
            P.p = 32 > n ? 32 : n,
            A.T = null,
            n = cc,
            cc = null;
            var d = Ta
              , y = Vr;
            if (At = 0,
            $r = Ta = null,
            Vr = 0,
            (Ze & 6) !== 0)
                throw Error(o(331));
            var E = Ze;
            if (Ze |= 4,
            U0(d.current),
            N0(d, d.current, y, n),
            Ze = E,
            Zl(0, !1),
            it && typeof it.onPostCommitFiberRoot == "function")
                try {
                    it.onPostCommitFiberRoot(Ht, d)
                } catch {}
            return !0
        } finally {
            P.p = s,
            A.T = i,
            W0(e, t)
        }
    }
    function tm(e, t, n) {
        t = cn(n, t),
        t = Ys(e.stateNode, t, 2),
        e = ga(e, t, 2),
        e !== null && ($a(e, 2),
        Nn(e))
    }
    function We(e, t, n) {
        if (e.tag === 3)
            tm(e, e, n);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    tm(t, e, n);
                    break
                } else if (t.tag === 1) {
                    var i = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Ra === null || !Ra.has(i))) {
                        e = cn(n, e),
                        n = l0(2),
                        i = ga(t, n, 2),
                        i !== null && (i0(n, i, t, e),
                        $a(i, 2),
                        Nn(i));
                        break
                    }
                }
                t = t.return
            }
    }
    function gc(e, t, n) {
        var i = e.pingCache;
        if (i === null) {
            i = e.pingCache = new Gv;
            var s = new Set;
            i.set(t, s)
        } else
            s = i.get(t),
            s === void 0 && (s = new Set,
            i.set(t, s));
        s.has(n) || (lc = !0,
        s.add(n),
        e = Fv.bind(null, e, t, n),
        t.then(e, e))
    }
    function Fv(e, t, n) {
        var i = e.pingCache;
        i !== null && i.delete(t),
        e.pingedLanes |= e.suspendedLanes & n,
        e.warmLanes &= ~n,
        et === e && ($e & n) === n && (ct === 4 || ct === 3 && ($e & 62914560) === $e && 300 > Zt() - uc ? (Ze & 2) === 0 && Yr(e, 0) : ic |= n,
        qr === $e && (qr = 0)),
        Nn(e)
    }
    function nm(e, t) {
        t === 0 && (t = ki()),
        e = Tr(e, t),
        e !== null && ($a(e, t),
        Nn(e))
    }
    function Kv(e) {
        var t = e.memoizedState
          , n = 0;
        t !== null && (n = t.retryLane),
        nm(e, n)
    }
    function Jv(e, t) {
        var n = 0;
        switch (e.tag) {
        case 13:
            var i = e.stateNode
              , s = e.memoizedState;
            s !== null && (n = s.retryLane);
            break;
        case 19:
            i = e.stateNode;
            break;
        case 22:
            i = e.stateNode._retryCache;
            break;
        default:
            throw Error(o(314))
        }
        i !== null && i.delete(t),
        nm(e, n)
    }
    function Iv(e, t) {
        return Cn(e, t)
    }
    var To = null
      , Pr = null
      , pc = !1
      , Oo = !1
      , yc = !1
      , ir = 0;
    function Nn(e) {
        e !== Pr && e.next === null && (Pr === null ? To = Pr = e : Pr = Pr.next = e),
        Oo = !0,
        pc || (pc = !0,
        eb())
    }
    function Zl(e, t) {
        if (!yc && Oo) {
            yc = !0;
            do
                for (var n = !1, i = To; i !== null; ) {
                    if (e !== 0) {
                        var s = i.pendingLanes;
                        if (s === 0)
                            var d = 0;
                        else {
                            var y = i.suspendedLanes
                              , E = i.pingedLanes;
                            d = (1 << 31 - Ot(42 | e) + 1) - 1,
                            d &= s & ~(y & ~E),
                            d = d & 201326741 ? d & 201326741 | 1 : d ? d | 2 : 0
                        }
                        d !== 0 && (n = !0,
                        im(i, d))
                    } else
                        d = $e,
                        d = qa(i, i === et ? d : 0, i.cancelPendingCommit !== null || i.timeoutHandle !== -1),
                        (d & 3) === 0 || Dn(i, d) || (n = !0,
                        im(i, d));
                    i = i.next
                }
            while (n);
            yc = !1
        }
    }
    function Wv() {
        am()
    }
    function am() {
        Oo = pc = !1;
        var e = 0;
        ir !== 0 && (ub() && (e = ir),
        ir = 0);
        for (var t = Zt(), n = null, i = To; i !== null; ) {
            var s = i.next
              , d = rm(i, t);
            d === 0 ? (i.next = null,
            n === null ? To = s : n.next = s,
            s === null && (Pr = n)) : (n = i,
            (e !== 0 || (d & 3) !== 0) && (Oo = !0)),
            i = s
        }
        Zl(e)
    }
    function rm(e, t) {
        for (var n = e.suspendedLanes, i = e.pingedLanes, s = e.expirationTimes, d = e.pendingLanes & -62914561; 0 < d; ) {
            var y = 31 - Ot(d)
              , E = 1 << y
              , C = s[y];
            C === -1 ? ((E & n) === 0 || (E & i) !== 0) && (s[y] = Mi(E, t)) : C <= t && (e.expiredLanes |= E),
            d &= ~E
        }
        if (t = et,
        n = $e,
        n = qa(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        i = e.callbackNode,
        n === 0 || e === t && (Fe === 2 || Fe === 9) || e.cancelPendingCommit !== null)
            return i !== null && i !== null && bn(i),
            e.callbackNode = null,
            e.callbackPriority = 0;
        if ((n & 3) === 0 || Dn(e, n)) {
            if (t = n & -n,
            t === e.callbackPriority)
                return t;
            switch (i !== null && bn(i),
            fl(n)) {
            case 2:
            case 8:
                n = Ai;
                break;
            case 32:
                n = mr;
                break;
            case 268435456:
                n = ia;
                break;
            default:
                n = mr
            }
            return i = lm.bind(null, e),
            n = Cn(n, i),
            e.callbackPriority = t,
            e.callbackNode = n,
            t
        }
        return i !== null && i !== null && bn(i),
        e.callbackPriority = 2,
        e.callbackNode = null,
        2
    }
    function lm(e, t) {
        if (At !== 0 && At !== 5)
            return e.callbackNode = null,
            e.callbackPriority = 0,
            null;
        var n = e.callbackNode;
        if (Ro() && e.callbackNode !== n)
            return null;
        var i = $e;
        return i = qa(e, e === et ? i : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        i === 0 ? null : ($0(e, i, t),
        rm(e, Zt()),
        e.callbackNode != null && e.callbackNode === n ? lm.bind(null, e) : null)
    }
    function im(e, t) {
        if (Ro())
            return null;
        $0(e, t, !0)
    }
    function eb() {
        cb(function() {
            (Ze & 6) !== 0 ? Cn(Ci, Wv) : am()
        })
    }
    function vc() {
        return ir === 0 && (ir = gr()),
        ir
    }
    function om(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : ji("" + e)
    }
    function um(e, t) {
        var n = t.ownerDocument.createElement("input");
        return n.name = t.name,
        n.value = t.value,
        e.id && n.setAttribute("form", e.id),
        t.parentNode.insertBefore(n, t),
        e = new FormData(e),
        n.parentNode.removeChild(n),
        e
    }
    function tb(e, t, n, i, s) {
        if (t === "submit" && n && n.stateNode === s) {
            var d = om((s[ie] || null).action)
              , y = i.submitter;
            y && (t = (t = y[ie] || null) ? om(t.formAction) : y.getAttribute("formAction"),
            t !== null && (d = t,
            y = null));
            var E = new qi("action","action",null,i,s);
            e.push({
                event: E,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (i.defaultPrevented) {
                            if (ir !== 0) {
                                var C = y ? um(s, y) : new FormData(s);
                                Hs(n, {
                                    pending: !0,
                                    data: C,
                                    method: s.method,
                                    action: d
                                }, null, C)
                            }
                        } else
                            typeof d == "function" && (E.preventDefault(),
                            C = y ? um(s, y) : new FormData(s),
                            Hs(n, {
                                pending: !0,
                                data: C,
                                method: s.method,
                                action: d
                            }, d, C))
                    },
                    currentTarget: s
                }]
            })
        }
    }
    for (var bc = 0; bc < as.length; bc++) {
        var Sc = as[bc]
          , nb = Sc.toLowerCase()
          , ab = Sc[0].toUpperCase() + Sc.slice(1);
        wn(nb, "on" + ab)
    }
    wn($d, "onAnimationEnd"),
    wn(Vd, "onAnimationIteration"),
    wn(Yd, "onAnimationStart"),
    wn("dblclick", "onDoubleClick"),
    wn("focusin", "onFocus"),
    wn("focusout", "onBlur"),
    wn(Sv, "onTransitionRun"),
    wn(Ev, "onTransitionStart"),
    wn(xv, "onTransitionCancel"),
    wn(Gd, "onTransitionEnd"),
    on("onMouseEnter", ["mouseout", "mouseover"]),
    on("onMouseLeave", ["mouseout", "mouseover"]),
    on("onPointerEnter", ["pointerout", "pointerover"]),
    on("onPointerLeave", ["pointerout", "pointerover"]),
    jt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    jt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    jt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    jt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    jt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    jt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Fl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , rb = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fl));
    function sm(e, t) {
        t = (t & 4) !== 0;
        for (var n = 0; n < e.length; n++) {
            var i = e[n]
              , s = i.event;
            i = i.listeners;
            e: {
                var d = void 0;
                if (t)
                    for (var y = i.length - 1; 0 <= y; y--) {
                        var E = i[y]
                          , C = E.instance
                          , H = E.currentTarget;
                        if (E = E.listener,
                        C !== d && s.isPropagationStopped())
                            break e;
                        d = E,
                        s.currentTarget = H;
                        try {
                            d(s)
                        } catch (F) {
                            ho(F)
                        }
                        s.currentTarget = null,
                        d = C
                    }
                else
                    for (y = 0; y < i.length; y++) {
                        if (E = i[y],
                        C = E.instance,
                        H = E.currentTarget,
                        E = E.listener,
                        C !== d && s.isPropagationStopped())
                            break e;
                        d = E,
                        s.currentTarget = H;
                        try {
                            d(s)
                        } catch (F) {
                            ho(F)
                        }
                        s.currentTarget = null,
                        d = C
                    }
            }
        }
    }
    function He(e, t) {
        var n = t[we];
        n === void 0 && (n = t[we] = new Set);
        var i = e + "__bubble";
        n.has(i) || (cm(t, e, 2, !1),
        n.add(i))
    }
    function Ec(e, t, n) {
        var i = 0;
        t && (i |= 4),
        cm(n, e, i, t)
    }
    var Co = "_reactListening" + Math.random().toString(36).slice(2);
    function xc(e) {
        if (!e[Co]) {
            e[Co] = !0,
            Be.forEach(function(n) {
                n !== "selectionchange" && (rb.has(n) || Ec(n, !1, e),
                Ec(n, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[Co] || (t[Co] = !0,
            Ec("selectionchange", !1, t))
        }
    }
    function cm(e, t, n, i) {
        switch (Nm(t)) {
        case 2:
            var s = Mb;
            break;
        case 8:
            s = kb;
            break;
        default:
            s = jc
        }
        n = s.bind(null, t, n, e),
        s = void 0,
        !Gu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0),
        i ? s !== void 0 ? e.addEventListener(t, n, {
            capture: !0,
            passive: s
        }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, {
            passive: s
        }) : e.addEventListener(t, n, !1)
    }
    function wc(e, t, n, i, s) {
        var d = i;
        if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
            e: for (; ; ) {
                if (i === null)
                    return;
                var y = i.tag;
                if (y === 3 || y === 4) {
                    var E = i.stateNode.containerInfo;
                    if (E === s)
                        break;
                    if (y === 4)
                        for (y = i.return; y !== null; ) {
                            var C = y.tag;
                            if ((C === 3 || C === 4) && y.stateNode.containerInfo === s)
                                return;
                            y = y.return
                        }
                    for (; E !== null; ) {
                        if (y = De(E),
                        y === null)
                            return;
                        if (C = y.tag,
                        C === 5 || C === 6 || C === 26 || C === 27) {
                            i = d = y;
                            continue e
                        }
                        E = E.parentNode
                    }
                }
                i = i.return
            }
        yd(function() {
            var H = d
              , F = Vu(n)
              , I = [];
            e: {
                var B = Pd.get(e);
                if (B !== void 0) {
                    var q = qi
                      , Ae = e;
                    switch (e) {
                    case "keypress":
                        if (Hi(n) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        q = I1;
                        break;
                    case "focusin":
                        Ae = "focus",
                        q = Zu;
                        break;
                    case "focusout":
                        Ae = "blur",
                        q = Zu;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        q = Zu;
                        break;
                    case "click":
                        if (n.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        q = Sd;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        q = q1;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        q = tv;
                        break;
                    case $d:
                    case Vd:
                    case Yd:
                        q = Y1;
                        break;
                    case Gd:
                        q = av;
                        break;
                    case "scroll":
                    case "scrollend":
                        q = H1;
                        break;
                    case "wheel":
                        q = lv;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        q = P1;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        q = xd;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        q = ov
                    }
                    var Re = (t & 4) !== 0
                      , Ie = !Re && (e === "scroll" || e === "scrollend")
                      , N = Re ? B !== null ? B + "Capture" : null : B;
                    Re = [];
                    for (var k = H, U; k !== null; ) {
                        var K = k;
                        if (U = K.stateNode,
                        K = K.tag,
                        K !== 5 && K !== 26 && K !== 27 || U === null || N === null || (K = ml(k, N),
                        K != null && Re.push(Kl(k, K, U))),
                        Ie)
                            break;
                        k = k.return
                    }
                    0 < Re.length && (B = new q(B,Ae,null,n,F),
                    I.push({
                        event: B,
                        listeners: Re
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if (B = e === "mouseover" || e === "pointerover",
                    q = e === "mouseout" || e === "pointerout",
                    B && n !== $u && (Ae = n.relatedTarget || n.fromElement) && (De(Ae) || Ae[me]))
                        break e;
                    if ((q || B) && (B = F.window === F ? F : (B = F.ownerDocument) ? B.defaultView || B.parentWindow : window,
                    q ? (Ae = n.relatedTarget || n.toElement,
                    q = H,
                    Ae = Ae ? De(Ae) : null,
                    Ae !== null && (Ie = c(Ae),
                    Re = Ae.tag,
                    Ae !== Ie || Re !== 5 && Re !== 27 && Re !== 6) && (Ae = null)) : (q = null,
                    Ae = H),
                    q !== Ae)) {
                        if (Re = Sd,
                        K = "onMouseLeave",
                        N = "onMouseEnter",
                        k = "mouse",
                        (e === "pointerout" || e === "pointerover") && (Re = xd,
                        K = "onPointerLeave",
                        N = "onPointerEnter",
                        k = "pointer"),
                        Ie = q == null ? B : tt(q),
                        U = Ae == null ? B : tt(Ae),
                        B = new Re(K,k + "leave",q,n,F),
                        B.target = Ie,
                        B.relatedTarget = U,
                        K = null,
                        De(F) === H && (Re = new Re(N,k + "enter",Ae,n,F),
                        Re.target = U,
                        Re.relatedTarget = Ie,
                        K = Re),
                        Ie = K,
                        q && Ae)
                            t: {
                                for (Re = q,
                                N = Ae,
                                k = 0,
                                U = Re; U; U = Xr(U))
                                    k++;
                                for (U = 0,
                                K = N; K; K = Xr(K))
                                    U++;
                                for (; 0 < k - U; )
                                    Re = Xr(Re),
                                    k--;
                                for (; 0 < U - k; )
                                    N = Xr(N),
                                    U--;
                                for (; k--; ) {
                                    if (Re === N || N !== null && Re === N.alternate)
                                        break t;
                                    Re = Xr(Re),
                                    N = Xr(N)
                                }
                                Re = null
                            }
                        else
                            Re = null;
                        q !== null && fm(I, B, q, Re, !1),
                        Ae !== null && Ie !== null && fm(I, Ie, Ae, Re, !0)
                    }
                }
                e: {
                    if (B = H ? tt(H) : window,
                    q = B.nodeName && B.nodeName.toLowerCase(),
                    q === "select" || q === "input" && B.type === "file")
                        var de = _d;
                    else if (Ad(B))
                        if (Md)
                            de = yv;
                        else {
                            de = gv;
                            var ze = mv
                        }
                    else
                        q = B.nodeName,
                        !q || q.toLowerCase() !== "input" || B.type !== "checkbox" && B.type !== "radio" ? H && qu(H.elementType) && (de = _d) : de = pv;
                    if (de && (de = de(e, H))) {
                        Dd(I, de, n, F);
                        break e
                    }
                    ze && ze(e, B, H),
                    e === "focusout" && H && B.type === "number" && H.memoizedProps.value != null && Bu(B, "number", B.value)
                }
                switch (ze = H ? tt(H) : window,
                e) {
                case "focusin":
                    (Ad(ze) || ze.contentEditable === "true") && (xr = ze,
                    es = H,
                    xl = null);
                    break;
                case "focusout":
                    xl = es = xr = null;
                    break;
                case "mousedown":
                    ts = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    ts = !1,
                    Bd(I, n, F);
                    break;
                case "selectionchange":
                    if (bv)
                        break;
                case "keydown":
                case "keyup":
                    Bd(I, n, F)
                }
                var be;
                if (Ku)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var Oe = "onCompositionStart";
                            break e;
                        case "compositionend":
                            Oe = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            Oe = "onCompositionUpdate";
                            break e
                        }
                        Oe = void 0
                    }
                else
                    Er ? Od(e, n) && (Oe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Oe = "onCompositionStart");
                Oe && (wd && n.locale !== "ko" && (Er || Oe !== "onCompositionStart" ? Oe === "onCompositionEnd" && Er && (be = vd()) : (fa = F,
                Pu = "value"in fa ? fa.value : fa.textContent,
                Er = !0)),
                ze = Ao(H, Oe),
                0 < ze.length && (Oe = new Ed(Oe,e,null,n,F),
                I.push({
                    event: Oe,
                    listeners: ze
                }),
                be ? Oe.data = be : (be = Cd(n),
                be !== null && (Oe.data = be)))),
                (be = sv ? cv(e, n) : fv(e, n)) && (Oe = Ao(H, "onBeforeInput"),
                0 < Oe.length && (ze = new Ed("onBeforeInput","beforeinput",null,n,F),
                I.push({
                    event: ze,
                    listeners: Oe
                }),
                ze.data = be)),
                tb(I, e, H, n, F)
            }
            sm(I, t)
        })
    }
    function Kl(e, t, n) {
        return {
            instance: e,
            listener: t,
            currentTarget: n
        }
    }
    function Ao(e, t) {
        for (var n = t + "Capture", i = []; e !== null; ) {
            var s = e
              , d = s.stateNode;
            if (s = s.tag,
            s !== 5 && s !== 26 && s !== 27 || d === null || (s = ml(e, n),
            s != null && i.unshift(Kl(e, s, d)),
            s = ml(e, t),
            s != null && i.push(Kl(e, s, d))),
            e.tag === 3)
                return i;
            e = e.return
        }
        return []
    }
    function Xr(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }
    function fm(e, t, n, i, s) {
        for (var d = t._reactName, y = []; n !== null && n !== i; ) {
            var E = n
              , C = E.alternate
              , H = E.stateNode;
            if (E = E.tag,
            C !== null && C === i)
                break;
            E !== 5 && E !== 26 && E !== 27 || H === null || (C = H,
            s ? (H = ml(n, d),
            H != null && y.unshift(Kl(n, H, C))) : s || (H = ml(n, d),
            H != null && y.push(Kl(n, H, C)))),
            n = n.return
        }
        y.length !== 0 && e.push({
            event: t,
            listeners: y
        })
    }
    var lb = /\r\n?/g
      , ib = /\u0000|\uFFFD/g;
    function dm(e) {
        return (typeof e == "string" ? e : "" + e).replace(lb, `
`).replace(ib, "")
    }
    function hm(e, t) {
        return t = dm(t),
        dm(e) === t
    }
    function Do() {}
    function Je(e, t, n, i, s, d) {
        switch (n) {
        case "children":
            typeof i == "string" ? t === "body" || t === "textarea" && i === "" || vr(e, i) : (typeof i == "number" || typeof i == "bigint") && t !== "body" && vr(e, "" + i);
            break;
        case "className":
            $n(e, "class", i);
            break;
        case "tabIndex":
            $n(e, "tabindex", i);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            $n(e, n, i);
            break;
        case "style":
            gd(e, i, d);
            break;
        case "data":
            if (t !== "object") {
                $n(e, "data", i);
                break
            }
        case "src":
        case "href":
            if (i === "" && (t !== "a" || n !== "href")) {
                e.removeAttribute(n);
                break
            }
            if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
                e.removeAttribute(n);
                break
            }
            i = ji("" + i),
            e.setAttribute(n, i);
            break;
        case "action":
        case "formAction":
            if (typeof i == "function") {
                e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof d == "function" && (n === "formAction" ? (t !== "input" && Je(e, t, "name", s.name, s, null),
                Je(e, t, "formEncType", s.formEncType, s, null),
                Je(e, t, "formMethod", s.formMethod, s, null),
                Je(e, t, "formTarget", s.formTarget, s, null)) : (Je(e, t, "encType", s.encType, s, null),
                Je(e, t, "method", s.method, s, null),
                Je(e, t, "target", s.target, s, null)));
            if (i == null || typeof i == "symbol" || typeof i == "boolean") {
                e.removeAttribute(n);
                break
            }
            i = ji("" + i),
            e.setAttribute(n, i);
            break;
        case "onClick":
            i != null && (e.onclick = Do);
            break;
        case "onScroll":
            i != null && He("scroll", e);
            break;
        case "onScrollEnd":
            i != null && He("scrollend", e);
            break;
        case "dangerouslySetInnerHTML":
            if (i != null) {
                if (typeof i != "object" || !("__html"in i))
                    throw Error(o(61));
                if (n = i.__html,
                n != null) {
                    if (s.children != null)
                        throw Error(o(60));
                    e.innerHTML = n
                }
            }
            break;
        case "multiple":
            e.multiple = i && typeof i != "function" && typeof i != "symbol";
            break;
        case "muted":
            e.muted = i && typeof i != "function" && typeof i != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
                e.removeAttribute("xlink:href");
                break
            }
            n = ji("" + i),
            e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            i != null && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(n, "" + i) : e.removeAttribute(n);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
            break;
        case "capture":
        case "download":
            i === !0 ? e.setAttribute(n, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(n, i) : e.removeAttribute(n);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? e.setAttribute(n, i) : e.removeAttribute(n);
            break;
        case "rowSpan":
        case "start":
            i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(n) : e.setAttribute(n, i);
            break;
        case "popover":
            He("beforetoggle", e),
            He("toggle", e),
            un(e, "popover", i);
            break;
        case "xlinkActuate":
            Ne(e, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
            break;
        case "xlinkArcrole":
            Ne(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
            break;
        case "xlinkRole":
            Ne(e, "http://www.w3.org/1999/xlink", "xlink:role", i);
            break;
        case "xlinkShow":
            Ne(e, "http://www.w3.org/1999/xlink", "xlink:show", i);
            break;
        case "xlinkTitle":
            Ne(e, "http://www.w3.org/1999/xlink", "xlink:title", i);
            break;
        case "xlinkType":
            Ne(e, "http://www.w3.org/1999/xlink", "xlink:type", i);
            break;
        case "xmlBase":
            Ne(e, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
            break;
        case "xmlLang":
            Ne(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
            break;
        case "xmlSpace":
            Ne(e, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
            break;
        case "is":
            un(e, "is", i);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = j1.get(n) || n,
            un(e, n, i))
        }
    }
    function Rc(e, t, n, i, s, d) {
        switch (n) {
        case "style":
            gd(e, i, d);
            break;
        case "dangerouslySetInnerHTML":
            if (i != null) {
                if (typeof i != "object" || !("__html"in i))
                    throw Error(o(61));
                if (n = i.__html,
                n != null) {
                    if (s.children != null)
                        throw Error(o(60));
                    e.innerHTML = n
                }
            }
            break;
        case "children":
            typeof i == "string" ? vr(e, i) : (typeof i == "number" || typeof i == "bigint") && vr(e, "" + i);
            break;
        case "onScroll":
            i != null && He("scroll", e);
            break;
        case "onScrollEnd":
            i != null && He("scrollend", e);
            break;
        case "onClick":
            i != null && (e.onclick = Do);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!oa.hasOwnProperty(n))
                e: {
                    if (n[0] === "o" && n[1] === "n" && (s = n.endsWith("Capture"),
                    t = n.slice(2, s ? n.length - 7 : void 0),
                    d = e[ie] || null,
                    d = d != null ? d[n] : null,
                    typeof d == "function" && e.removeEventListener(t, d, s),
                    typeof i == "function")) {
                        typeof d != "function" && d !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)),
                        e.addEventListener(t, i, s);
                        break e
                    }
                    n in e ? e[n] = i : i === !0 ? e.setAttribute(n, "") : un(e, n, i)
                }
        }
    }
    function Dt(e, t, n) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            He("error", e),
            He("load", e);
            var i = !1, s = !1, d;
            for (d in n)
                if (n.hasOwnProperty(d)) {
                    var y = n[d];
                    if (y != null)
                        switch (d) {
                        case "src":
                            i = !0;
                            break;
                        case "srcSet":
                            s = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(o(137, t));
                        default:
                            Je(e, t, d, y, n, null)
                        }
                }
            s && Je(e, t, "srcSet", n.srcSet, n, null),
            i && Je(e, t, "src", n.src, n, null);
            return;
        case "input":
            He("invalid", e);
            var E = d = y = s = null
              , C = null
              , H = null;
            for (i in n)
                if (n.hasOwnProperty(i)) {
                    var F = n[i];
                    if (F != null)
                        switch (i) {
                        case "name":
                            s = F;
                            break;
                        case "type":
                            y = F;
                            break;
                        case "checked":
                            C = F;
                            break;
                        case "defaultChecked":
                            H = F;
                            break;
                        case "value":
                            d = F;
                            break;
                        case "defaultValue":
                            E = F;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (F != null)
                                throw Error(o(137, t));
                            break;
                        default:
                            Je(e, t, i, F, n, null)
                        }
                }
            fd(e, d, E, C, H, y, s, !1),
            Ni(e);
            return;
        case "select":
            He("invalid", e),
            i = y = d = null;
            for (s in n)
                if (n.hasOwnProperty(s) && (E = n[s],
                E != null))
                    switch (s) {
                    case "value":
                        d = E;
                        break;
                    case "defaultValue":
                        y = E;
                        break;
                    case "multiple":
                        i = E;
                    default:
                        Je(e, t, s, E, n, null)
                    }
            t = d,
            n = y,
            e.multiple = !!i,
            t != null ? yr(e, !!i, t, !1) : n != null && yr(e, !!i, n, !0);
            return;
        case "textarea":
            He("invalid", e),
            d = s = i = null;
            for (y in n)
                if (n.hasOwnProperty(y) && (E = n[y],
                E != null))
                    switch (y) {
                    case "value":
                        i = E;
                        break;
                    case "defaultValue":
                        s = E;
                        break;
                    case "children":
                        d = E;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (E != null)
                            throw Error(o(91));
                        break;
                    default:
                        Je(e, t, y, E, n, null)
                    }
            hd(e, i, s, d),
            Ni(e);
            return;
        case "option":
            for (C in n)
                if (n.hasOwnProperty(C) && (i = n[C],
                i != null))
                    switch (C) {
                    case "selected":
                        e.selected = i && typeof i != "function" && typeof i != "symbol";
                        break;
                    default:
                        Je(e, t, C, i, n, null)
                    }
            return;
        case "dialog":
            He("beforetoggle", e),
            He("toggle", e),
            He("cancel", e),
            He("close", e);
            break;
        case "iframe":
        case "object":
            He("load", e);
            break;
        case "video":
        case "audio":
            for (i = 0; i < Fl.length; i++)
                He(Fl[i], e);
            break;
        case "image":
            He("error", e),
            He("load", e);
            break;
        case "details":
            He("toggle", e);
            break;
        case "embed":
        case "source":
        case "link":
            He("error", e),
            He("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (H in n)
                if (n.hasOwnProperty(H) && (i = n[H],
                i != null))
                    switch (H) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(o(137, t));
                    default:
                        Je(e, t, H, i, n, null)
                    }
            return;
        default:
            if (qu(t)) {
                for (F in n)
                    n.hasOwnProperty(F) && (i = n[F],
                    i !== void 0 && Rc(e, t, F, i, n, void 0));
                return
            }
        }
        for (E in n)
            n.hasOwnProperty(E) && (i = n[E],
            i != null && Je(e, t, E, i, n, null))
    }
    function ob(e, t, n, i) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var s = null
              , d = null
              , y = null
              , E = null
              , C = null
              , H = null
              , F = null;
            for (q in n) {
                var I = n[q];
                if (n.hasOwnProperty(q) && I != null)
                    switch (q) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        C = I;
                    default:
                        i.hasOwnProperty(q) || Je(e, t, q, null, i, I)
                    }
            }
            for (var B in i) {
                var q = i[B];
                if (I = n[B],
                i.hasOwnProperty(B) && (q != null || I != null))
                    switch (B) {
                    case "type":
                        d = q;
                        break;
                    case "name":
                        s = q;
                        break;
                    case "checked":
                        H = q;
                        break;
                    case "defaultChecked":
                        F = q;
                        break;
                    case "value":
                        y = q;
                        break;
                    case "defaultValue":
                        E = q;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (q != null)
                            throw Error(o(137, t));
                        break;
                    default:
                        q !== I && Je(e, t, B, q, i, I)
                    }
            }
            Hu(e, y, E, C, H, F, d, s);
            return;
        case "select":
            q = y = E = B = null;
            for (d in n)
                if (C = n[d],
                n.hasOwnProperty(d) && C != null)
                    switch (d) {
                    case "value":
                        break;
                    case "multiple":
                        q = C;
                    default:
                        i.hasOwnProperty(d) || Je(e, t, d, null, i, C)
                    }
            for (s in i)
                if (d = i[s],
                C = n[s],
                i.hasOwnProperty(s) && (d != null || C != null))
                    switch (s) {
                    case "value":
                        B = d;
                        break;
                    case "defaultValue":
                        E = d;
                        break;
                    case "multiple":
                        y = d;
                    default:
                        d !== C && Je(e, t, s, d, i, C)
                    }
            t = E,
            n = y,
            i = q,
            B != null ? yr(e, !!n, B, !1) : !!i != !!n && (t != null ? yr(e, !!n, t, !0) : yr(e, !!n, n ? [] : "", !1));
            return;
        case "textarea":
            q = B = null;
            for (E in n)
                if (s = n[E],
                n.hasOwnProperty(E) && s != null && !i.hasOwnProperty(E))
                    switch (E) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        Je(e, t, E, null, i, s)
                    }
            for (y in i)
                if (s = i[y],
                d = n[y],
                i.hasOwnProperty(y) && (s != null || d != null))
                    switch (y) {
                    case "value":
                        B = s;
                        break;
                    case "defaultValue":
                        q = s;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (s != null)
                            throw Error(o(91));
                        break;
                    default:
                        s !== d && Je(e, t, y, s, i, d)
                    }
            dd(e, B, q);
            return;
        case "option":
            for (var Ae in n)
                if (B = n[Ae],
                n.hasOwnProperty(Ae) && B != null && !i.hasOwnProperty(Ae))
                    switch (Ae) {
                    case "selected":
                        e.selected = !1;
                        break;
                    default:
                        Je(e, t, Ae, null, i, B)
                    }
            for (C in i)
                if (B = i[C],
                q = n[C],
                i.hasOwnProperty(C) && B !== q && (B != null || q != null))
                    switch (C) {
                    case "selected":
                        e.selected = B && typeof B != "function" && typeof B != "symbol";
                        break;
                    default:
                        Je(e, t, C, B, i, q)
                    }
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var Re in n)
                B = n[Re],
                n.hasOwnProperty(Re) && B != null && !i.hasOwnProperty(Re) && Je(e, t, Re, null, i, B);
            for (H in i)
                if (B = i[H],
                q = n[H],
                i.hasOwnProperty(H) && B !== q && (B != null || q != null))
                    switch (H) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (B != null)
                            throw Error(o(137, t));
                        break;
                    default:
                        Je(e, t, H, B, i, q)
                    }
            return;
        default:
            if (qu(t)) {
                for (var Ie in n)
                    B = n[Ie],
                    n.hasOwnProperty(Ie) && B !== void 0 && !i.hasOwnProperty(Ie) && Rc(e, t, Ie, void 0, i, B);
                for (F in i)
                    B = i[F],
                    q = n[F],
                    !i.hasOwnProperty(F) || B === q || B === void 0 && q === void 0 || Rc(e, t, F, B, i, q);
                return
            }
        }
        for (var N in n)
            B = n[N],
            n.hasOwnProperty(N) && B != null && !i.hasOwnProperty(N) && Je(e, t, N, null, i, B);
        for (I in i)
            B = i[I],
            q = n[I],
            !i.hasOwnProperty(I) || B === q || B == null && q == null || Je(e, t, I, B, i, q)
    }
    var Tc = null
      , Oc = null;
    function _o(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }
    function mm(e) {
        switch (e) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function gm(e, t) {
        if (e === 0)
            switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return e === 1 && t === "foreignObject" ? 0 : e
    }
    function Cc(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Ac = null;
    function ub() {
        var e = window.event;
        return e && e.type === "popstate" ? e === Ac ? !1 : (Ac = e,
        !0) : (Ac = null,
        !1)
    }
    var pm = typeof setTimeout == "function" ? setTimeout : void 0
      , sb = typeof clearTimeout == "function" ? clearTimeout : void 0
      , ym = typeof Promise == "function" ? Promise : void 0
      , cb = typeof queueMicrotask == "function" ? queueMicrotask : typeof ym < "u" ? function(e) {
        return ym.resolve(null).then(e).catch(fb)
    }
    : pm;
    function fb(e) {
        setTimeout(function() {
            throw e
        })
    }
    function Ca(e) {
        return e === "head"
    }
    function vm(e, t) {
        var n = t
          , i = 0
          , s = 0;
        do {
            var d = n.nextSibling;
            if (e.removeChild(n),
            d && d.nodeType === 8)
                if (n = d.data,
                n === "/$") {
                    if (0 < i && 8 > i) {
                        n = i;
                        var y = e.ownerDocument;
                        if (n & 1 && Jl(y.documentElement),
                        n & 2 && Jl(y.body),
                        n & 4)
                            for (n = y.head,
                            Jl(n),
                            y = n.firstChild; y; ) {
                                var E = y.nextSibling
                                  , C = y.nodeName;
                                y[Ce] || C === "SCRIPT" || C === "STYLE" || C === "LINK" && y.rel.toLowerCase() === "stylesheet" || n.removeChild(y),
                                y = E
                            }
                    }
                    if (s === 0) {
                        e.removeChild(d),
                        li(t);
                        return
                    }
                    s--
                } else
                    n === "$" || n === "$?" || n === "$!" ? s++ : i = n.charCodeAt(0) - 48;
            else
                i = 0;
            n = d
        } while (n);
        li(t)
    }
    function Dc(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var n = t;
            switch (t = t.nextSibling,
            n.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                Dc(n),
                ve(n);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (n.rel.toLowerCase() === "stylesheet")
                    continue
            }
            e.removeChild(n)
        }
    }
    function db(e, t, n, i) {
        for (; e.nodeType === 1; ) {
            var s = n;
            if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                    break
            } else if (i) {
                if (!e[Ce])
                    switch (t) {
                    case "meta":
                        if (!e.hasAttribute("itemprop"))
                            break;
                        return e;
                    case "link":
                        if (d = e.getAttribute("rel"),
                        d === "stylesheet" && e.hasAttribute("data-precedence"))
                            break;
                        if (d !== s.rel || e.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || e.getAttribute("title") !== (s.title == null ? null : s.title))
                            break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence"))
                            break;
                        return e;
                    case "script":
                        if (d = e.getAttribute("src"),
                        (d !== (s.src == null ? null : s.src) || e.getAttribute("type") !== (s.type == null ? null : s.type) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && d && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                            break;
                        return e;
                    default:
                        return e
                    }
            } else if (t === "input" && e.type === "hidden") {
                var d = s.name == null ? null : "" + s.name;
                if (s.type === "hidden" && e.getAttribute("name") === d)
                    return e
            } else
                return e;
            if (e = Tn(e.nextSibling),
            e === null)
                break
        }
        return null
    }
    function hb(e, t, n) {
        if (t === "")
            return null;
        for (; e.nodeType !== 3; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Tn(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function _c(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete"
    }
    function mb(e, t) {
        var n = e.ownerDocument;
        if (e.data !== "$?" || n.readyState === "complete")
            t();
        else {
            var i = function() {
                t(),
                n.removeEventListener("DOMContentLoaded", i)
            };
            n.addEventListener("DOMContentLoaded", i),
            e._reactRetry = i
        }
    }
    function Tn(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
                    break;
                if (t === "/$")
                    return null
            }
        }
        return e
    }
    var Mc = null;
    function bm(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "$" || n === "$!" || n === "$?") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    n === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    function Sm(e, t, n) {
        switch (t = _o(n),
        e) {
        case "html":
            if (e = t.documentElement,
            !e)
                throw Error(o(452));
            return e;
        case "head":
            if (e = t.head,
            !e)
                throw Error(o(453));
            return e;
        case "body":
            if (e = t.body,
            !e)
                throw Error(o(454));
            return e;
        default:
            throw Error(o(451))
        }
    }
    function Jl(e) {
        for (var t = e.attributes; t.length; )
            e.removeAttributeNode(t[0]);
        ve(e)
    }
    var pn = new Map
      , Em = new Set;
    function Mo(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var ta = P.d;
    P.d = {
        f: gb,
        r: pb,
        D: yb,
        C: vb,
        L: bb,
        m: Sb,
        X: xb,
        S: Eb,
        M: wb
    };
    function gb() {
        var e = ta.f()
          , t = xo();
        return e || t
    }
    function pb(e) {
        var t = Ve(e);
        t !== null && t.tag === 5 && t.type === "form" ? $h(t) : ta.r(e)
    }
    var Qr = typeof document > "u" ? null : document;
    function xm(e, t, n) {
        var i = Qr;
        if (i && typeof t == "string" && t) {
            var s = sn(t);
            s = 'link[rel="' + e + '"][href="' + s + '"]',
            typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
            Em.has(s) || (Em.add(s),
            e = {
                rel: e,
                crossOrigin: n,
                href: t
            },
            i.querySelector(s) === null && (t = i.createElement("link"),
            Dt(t, "link", e),
            Ge(t),
            i.head.appendChild(t)))
        }
    }
    function yb(e) {
        ta.D(e),
        xm("dns-prefetch", e, null)
    }
    function vb(e, t) {
        ta.C(e, t),
        xm("preconnect", e, t)
    }
    function bb(e, t, n) {
        ta.L(e, t, n);
        var i = Qr;
        if (i && e && t) {
            var s = 'link[rel="preload"][as="' + sn(t) + '"]';
            t === "image" && n && n.imageSrcSet ? (s += '[imagesrcset="' + sn(n.imageSrcSet) + '"]',
            typeof n.imageSizes == "string" && (s += '[imagesizes="' + sn(n.imageSizes) + '"]')) : s += '[href="' + sn(e) + '"]';
            var d = s;
            switch (t) {
            case "style":
                d = Zr(e);
                break;
            case "script":
                d = Fr(e)
            }
            pn.has(d) || (e = p({
                rel: "preload",
                href: t === "image" && n && n.imageSrcSet ? void 0 : e,
                as: t
            }, n),
            pn.set(d, e),
            i.querySelector(s) !== null || t === "style" && i.querySelector(Il(d)) || t === "script" && i.querySelector(Wl(d)) || (t = i.createElement("link"),
            Dt(t, "link", e),
            Ge(t),
            i.head.appendChild(t)))
        }
    }
    function Sb(e, t) {
        ta.m(e, t);
        var n = Qr;
        if (n && e) {
            var i = t && typeof t.as == "string" ? t.as : "script"
              , s = 'link[rel="modulepreload"][as="' + sn(i) + '"][href="' + sn(e) + '"]'
              , d = s;
            switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                d = Fr(e)
            }
            if (!pn.has(d) && (e = p({
                rel: "modulepreload",
                href: e
            }, t),
            pn.set(d, e),
            n.querySelector(s) === null)) {
                switch (i) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (n.querySelector(Wl(d)))
                        return
                }
                i = n.createElement("link"),
                Dt(i, "link", e),
                Ge(i),
                n.head.appendChild(i)
            }
        }
    }
    function Eb(e, t, n) {
        ta.S(e, t, n);
        var i = Qr;
        if (i && e) {
            var s = ot(i).hoistableStyles
              , d = Zr(e);
            t = t || "default";
            var y = s.get(d);
            if (!y) {
                var E = {
                    loading: 0,
                    preload: null
                };
                if (y = i.querySelector(Il(d)))
                    E.loading = 5;
                else {
                    e = p({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": t
                    }, n),
                    (n = pn.get(d)) && kc(e, n);
                    var C = y = i.createElement("link");
                    Ge(C),
                    Dt(C, "link", e),
                    C._p = new Promise(function(H, F) {
                        C.onload = H,
                        C.onerror = F
                    }
                    ),
                    C.addEventListener("load", function() {
                        E.loading |= 1
                    }),
                    C.addEventListener("error", function() {
                        E.loading |= 2
                    }),
                    E.loading |= 4,
                    ko(y, t, i)
                }
                y = {
                    type: "stylesheet",
                    instance: y,
                    count: 1,
                    state: E
                },
                s.set(d, y)
            }
        }
    }
    function xb(e, t) {
        ta.X(e, t);
        var n = Qr;
        if (n && e) {
            var i = ot(n).hoistableScripts
              , s = Fr(e)
              , d = i.get(s);
            d || (d = n.querySelector(Wl(s)),
            d || (e = p({
                src: e,
                async: !0
            }, t),
            (t = pn.get(s)) && Lc(e, t),
            d = n.createElement("script"),
            Ge(d),
            Dt(d, "link", e),
            n.head.appendChild(d)),
            d = {
                type: "script",
                instance: d,
                count: 1,
                state: null
            },
            i.set(s, d))
        }
    }
    function wb(e, t) {
        ta.M(e, t);
        var n = Qr;
        if (n && e) {
            var i = ot(n).hoistableScripts
              , s = Fr(e)
              , d = i.get(s);
            d || (d = n.querySelector(Wl(s)),
            d || (e = p({
                src: e,
                async: !0,
                type: "module"
            }, t),
            (t = pn.get(s)) && Lc(e, t),
            d = n.createElement("script"),
            Ge(d),
            Dt(d, "link", e),
            n.head.appendChild(d)),
            d = {
                type: "script",
                instance: d,
                count: 1,
                state: null
            },
            i.set(s, d))
        }
    }
    function wm(e, t, n, i) {
        var s = (s = pe.current) ? Mo(s) : null;
        if (!s)
            throw Error(o(446));
        switch (e) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Zr(n.href),
            n = ot(s).hoistableStyles,
            i = n.get(t),
            i || (i = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            n.set(t, i)),
            i) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
                e = Zr(n.href);
                var d = ot(s).hoistableStyles
                  , y = d.get(e);
                if (y || (s = s.ownerDocument || s,
                y = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                d.set(e, y),
                (d = s.querySelector(Il(e))) && !d._p && (y.instance = d,
                y.state.loading = 5),
                pn.has(e) || (n = {
                    rel: "preload",
                    as: "style",
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy
                },
                pn.set(e, n),
                d || Rb(s, e, n, y.state))),
                t && i === null)
                    throw Error(o(528, ""));
                return y
            }
            if (t && i !== null)
                throw Error(o(529, ""));
            return null;
        case "script":
            return t = n.async,
            n = n.src,
            typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Fr(n),
            n = ot(s).hoistableScripts,
            i = n.get(t),
            i || (i = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            n.set(t, i)),
            i) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(o(444, e))
        }
    }
    function Zr(e) {
        return 'href="' + sn(e) + '"'
    }
    function Il(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }
    function Rm(e) {
        return p({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }
    function Rb(e, t, n, i) {
        e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? i.loading = 1 : (t = e.createElement("link"),
        i.preload = t,
        t.addEventListener("load", function() {
            return i.loading |= 1
        }),
        t.addEventListener("error", function() {
            return i.loading |= 2
        }),
        Dt(t, "link", n),
        Ge(t),
        e.head.appendChild(t))
    }
    function Fr(e) {
        return '[src="' + sn(e) + '"]'
    }
    function Wl(e) {
        return "script[async]" + e
    }
    function Tm(e, t, n) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case "style":
                var i = e.querySelector('style[data-href~="' + sn(n.href) + '"]');
                if (i)
                    return t.instance = i,
                    Ge(i),
                    i;
                var s = p({}, n, {
                    "data-href": n.href,
                    "data-precedence": n.precedence,
                    href: null,
                    precedence: null
                });
                return i = (e.ownerDocument || e).createElement("style"),
                Ge(i),
                Dt(i, "style", s),
                ko(i, n.precedence, e),
                t.instance = i;
            case "stylesheet":
                s = Zr(n.href);
                var d = e.querySelector(Il(s));
                if (d)
                    return t.state.loading |= 4,
                    t.instance = d,
                    Ge(d),
                    d;
                i = Rm(n),
                (s = pn.get(s)) && kc(i, s),
                d = (e.ownerDocument || e).createElement("link"),
                Ge(d);
                var y = d;
                return y._p = new Promise(function(E, C) {
                    y.onload = E,
                    y.onerror = C
                }
                ),
                Dt(d, "link", i),
                t.state.loading |= 4,
                ko(d, n.precedence, e),
                t.instance = d;
            case "script":
                return d = Fr(n.src),
                (s = e.querySelector(Wl(d))) ? (t.instance = s,
                Ge(s),
                s) : (i = n,
                (s = pn.get(d)) && (i = p({}, n),
                Lc(i, s)),
                e = e.ownerDocument || e,
                s = e.createElement("script"),
                Ge(s),
                Dt(s, "link", i),
                e.head.appendChild(s),
                t.instance = s);
            case "void":
                return null;
            default:
                throw Error(o(443, t.type))
            }
        else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (i = t.instance,
            t.state.loading |= 4,
            ko(i, n.precedence, e));
        return t.instance
    }
    function ko(e, t, n) {
        for (var i = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), s = i.length ? i[i.length - 1] : null, d = s, y = 0; y < i.length; y++) {
            var E = i[y];
            if (E.dataset.precedence === t)
                d = E;
            else if (d !== s)
                break
        }
        d ? d.parentNode.insertBefore(e, d.nextSibling) : (t = n.nodeType === 9 ? n.head : n,
        t.insertBefore(e, t.firstChild))
    }
    function kc(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.title == null && (e.title = t.title)
    }
    function Lc(e, t) {
        e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.integrity == null && (e.integrity = t.integrity)
    }
    var Lo = null;
    function Om(e, t, n) {
        if (Lo === null) {
            var i = new Map
              , s = Lo = new Map;
            s.set(n, i)
        } else
            s = Lo,
            i = s.get(n),
            i || (i = new Map,
            s.set(n, i));
        if (i.has(e))
            return i;
        for (i.set(e, null),
        n = n.getElementsByTagName(e),
        s = 0; s < n.length; s++) {
            var d = n[s];
            if (!(d[Ce] || d[W] || e === "link" && d.getAttribute("rel") === "stylesheet") && d.namespaceURI !== "http://www.w3.org/2000/svg") {
                var y = d.getAttribute(t) || "";
                y = e + y;
                var E = i.get(y);
                E ? E.push(d) : i.set(y, [d])
            }
        }
        return i
    }
    function Cm(e, t, n) {
        e = e.ownerDocument || e,
        e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null)
    }
    function Tb(e, t, n) {
        if (n === 1 || t.itemProp != null)
            return !1;
        switch (e) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                break;
            return !0;
        case "link":
            if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                break;
            switch (t.rel) {
            case "stylesheet":
                return e = t.disabled,
                typeof t.precedence == "string" && e == null;
            default:
                return !0
            }
        case "script":
            if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
                return !0
        }
        return !1
    }
    function Am(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    var ei = null;
    function Ob() {}
    function Cb(e, t, n) {
        if (ei === null)
            throw Error(o(475));
        var i = ei;
        if (t.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (t.state.loading & 4) === 0) {
            if (t.instance === null) {
                var s = Zr(n.href)
                  , d = e.querySelector(Il(s));
                if (d) {
                    e = d._p,
                    e !== null && typeof e == "object" && typeof e.then == "function" && (i.count++,
                    i = No.bind(i),
                    e.then(i, i)),
                    t.state.loading |= 4,
                    t.instance = d,
                    Ge(d);
                    return
                }
                d = e.ownerDocument || e,
                n = Rm(n),
                (s = pn.get(s)) && kc(n, s),
                d = d.createElement("link"),
                Ge(d);
                var y = d;
                y._p = new Promise(function(E, C) {
                    y.onload = E,
                    y.onerror = C
                }
                ),
                Dt(d, "link", n),
                t.instance = d
            }
            i.stylesheets === null && (i.stylesheets = new Map),
            i.stylesheets.set(t, e),
            (e = t.state.preload) && (t.state.loading & 3) === 0 && (i.count++,
            t = No.bind(i),
            e.addEventListener("load", t),
            e.addEventListener("error", t))
        }
    }
    function Ab() {
        if (ei === null)
            throw Error(o(475));
        var e = ei;
        return e.stylesheets && e.count === 0 && Nc(e, e.stylesheets),
        0 < e.count ? function(t) {
            var n = setTimeout(function() {
                if (e.stylesheets && Nc(e, e.stylesheets),
                e.unsuspend) {
                    var i = e.unsuspend;
                    e.unsuspend = null,
                    i()
                }
            }, 6e4);
            return e.unsuspend = t,
            function() {
                e.unsuspend = null,
                clearTimeout(n)
            }
        }
        : null
    }
    function No() {
        if (this.count--,
        this.count === 0) {
            if (this.stylesheets)
                Nc(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null,
                e()
            }
        }
    }
    var zo = null;
    function Nc(e, t) {
        e.stylesheets = null,
        e.unsuspend !== null && (e.count++,
        zo = new Map,
        t.forEach(Db, e),
        zo = null,
        No.call(e))
    }
    function Db(e, t) {
        if (!(t.state.loading & 4)) {
            var n = zo.get(e);
            if (n)
                var i = n.get(null);
            else {
                n = new Map,
                zo.set(e, n);
                for (var s = e.querySelectorAll("link[data-precedence],style[data-precedence]"), d = 0; d < s.length; d++) {
                    var y = s[d];
                    (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (n.set(y.dataset.precedence, y),
                    i = y)
                }
                i && n.set(null, i)
            }
            s = t.instance,
            y = s.getAttribute("data-precedence"),
            d = n.get(y) || i,
            d === i && n.set(null, s),
            n.set(y, s),
            this.count++,
            i = No.bind(this),
            s.addEventListener("load", i),
            s.addEventListener("error", i),
            d ? d.parentNode.insertBefore(s, d.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
            e.insertBefore(s, e.firstChild)),
            t.state.loading |= 4
        }
    }
    var ti = {
        $$typeof: $,
        Provider: null,
        Consumer: null,
        _currentValue: Z,
        _currentValue2: Z,
        _threadCount: 0
    };
    function _b(e, t, n, i, s, d, y, E) {
        this.tag = 1,
        this.containerInfo = e,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = pr(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = pr(0),
        this.hiddenUpdates = pr(null),
        this.identifierPrefix = i,
        this.onUncaughtError = s,
        this.onCaughtError = d,
        this.onRecoverableError = y,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = E,
        this.incompleteTransitions = new Map
    }
    function Dm(e, t, n, i, s, d, y, E, C, H, F, I) {
        return e = new _b(e,t,n,y,E,C,H,I),
        t = 1,
        d === !0 && (t |= 24),
        d = Kt(3, null, null, t),
        e.current = d,
        d.stateNode = e,
        t = gs(),
        t.refCount++,
        e.pooledCache = t,
        t.refCount++,
        d.memoizedState = {
            element: i,
            isDehydrated: n,
            cache: t
        },
        bs(d),
        e
    }
    function _m(e) {
        return e ? (e = Or,
        e) : Or
    }
    function Mm(e, t, n, i, s, d) {
        s = _m(s),
        i.context === null ? i.context = s : i.pendingContext = s,
        i = ma(t),
        i.payload = {
            element: n
        },
        d = d === void 0 ? null : d,
        d !== null && (i.callback = d),
        n = ga(e, i, t),
        n !== null && (tn(n, e, t),
        Ml(n, e, t))
    }
    function km(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var n = e.retryLane;
            e.retryLane = n !== 0 && n < t ? n : t
        }
    }
    function zc(e, t) {
        km(e, t),
        (e = e.alternate) && km(e, t)
    }
    function Lm(e) {
        if (e.tag === 13) {
            var t = Tr(e, 67108864);
            t !== null && tn(t, e, 67108864),
            zc(e, 67108864)
        }
    }
    var jo = !0;
    function Mb(e, t, n, i) {
        var s = A.T;
        A.T = null;
        var d = P.p;
        try {
            P.p = 2,
            jc(e, t, n, i)
        } finally {
            P.p = d,
            A.T = s
        }
    }
    function kb(e, t, n, i) {
        var s = A.T;
        A.T = null;
        var d = P.p;
        try {
            P.p = 8,
            jc(e, t, n, i)
        } finally {
            P.p = d,
            A.T = s
        }
    }
    function jc(e, t, n, i) {
        if (jo) {
            var s = Uc(i);
            if (s === null)
                wc(e, t, i, Uo, n),
                zm(e, i);
            else if (Nb(s, e, t, n, i))
                i.stopPropagation();
            else if (zm(e, i),
            t & 4 && -1 < Lb.indexOf(e)) {
                for (; s !== null; ) {
                    var d = Ve(s);
                    if (d !== null)
                        switch (d.tag) {
                        case 3:
                            if (d = d.stateNode,
                            d.current.memoizedState.isDehydrated) {
                                var y = qn(d.pendingLanes);
                                if (y !== 0) {
                                    var E = d;
                                    for (E.pendingLanes |= 2,
                                    E.entangledLanes |= 2; y; ) {
                                        var C = 1 << 31 - Ot(y);
                                        E.entanglements[1] |= C,
                                        y &= ~C
                                    }
                                    Nn(d),
                                    (Ze & 6) === 0 && (So = Zt() + 500,
                                    Zl(0))
                                }
                            }
                            break;
                        case 13:
                            E = Tr(d, 2),
                            E !== null && tn(E, d, 2),
                            xo(),
                            zc(d, 2)
                        }
                    if (d = Uc(i),
                    d === null && wc(e, t, i, Uo, n),
                    d === s)
                        break;
                    s = d
                }
                s !== null && i.stopPropagation()
            } else
                wc(e, t, i, null, n)
        }
    }
    function Uc(e) {
        return e = Vu(e),
        Hc(e)
    }
    var Uo = null;
    function Hc(e) {
        if (Uo = null,
        e = De(e),
        e !== null) {
            var t = c(e);
            if (t === null)
                e = null;
            else {
                var n = t.tag;
                if (n === 13) {
                    if (e = f(t),
                    e !== null)
                        return e;
                    e = null
                } else if (n === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    e = null
                } else
                    t !== e && (e = null)
            }
        }
        return Uo = e,
        null
    }
    function Nm(e) {
        switch (e) {
        case "beforetoggle":
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
        case "toggle":
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
        case "selectstart":
            return 2;
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
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (ju()) {
            case Ci:
                return 2;
            case Ai:
                return 8;
            case mr:
            case Bn:
                return 32;
            case ia:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var Bc = !1
      , Aa = null
      , Da = null
      , _a = null
      , ni = new Map
      , ai = new Map
      , Ma = []
      , Lb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function zm(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            Aa = null;
            break;
        case "dragenter":
        case "dragleave":
            Da = null;
            break;
        case "mouseover":
        case "mouseout":
            _a = null;
            break;
        case "pointerover":
        case "pointerout":
            ni.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            ai.delete(t.pointerId)
        }
    }
    function ri(e, t, n, i, s, d) {
        return e === null || e.nativeEvent !== d ? (e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: i,
            nativeEvent: d,
            targetContainers: [s]
        },
        t !== null && (t = Ve(t),
        t !== null && Lm(t)),
        e) : (e.eventSystemFlags |= i,
        t = e.targetContainers,
        s !== null && t.indexOf(s) === -1 && t.push(s),
        e)
    }
    function Nb(e, t, n, i, s) {
        switch (t) {
        case "focusin":
            return Aa = ri(Aa, e, t, n, i, s),
            !0;
        case "dragenter":
            return Da = ri(Da, e, t, n, i, s),
            !0;
        case "mouseover":
            return _a = ri(_a, e, t, n, i, s),
            !0;
        case "pointerover":
            var d = s.pointerId;
            return ni.set(d, ri(ni.get(d) || null, e, t, n, i, s)),
            !0;
        case "gotpointercapture":
            return d = s.pointerId,
            ai.set(d, ri(ai.get(d) || null, e, t, n, i, s)),
            !0
        }
        return !1
    }
    function jm(e) {
        var t = De(e.target);
        if (t !== null) {
            var n = c(t);
            if (n !== null) {
                if (t = n.tag,
                t === 13) {
                    if (t = f(n),
                    t !== null) {
                        e.blockedOn = t,
                        j(e.priority, function() {
                            if (n.tag === 13) {
                                var i = en();
                                i = cl(i);
                                var s = Tr(n, i);
                                s !== null && tn(s, n, i),
                                zc(n, i)
                            }
                        });
                        return
                    }
                } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function Ho(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Uc(e.nativeEvent);
            if (n === null) {
                n = e.nativeEvent;
                var i = new n.constructor(n.type,n);
                $u = i,
                n.target.dispatchEvent(i),
                $u = null
            } else
                return t = Ve(n),
                t !== null && Lm(t),
                e.blockedOn = n,
                !1;
            t.shift()
        }
        return !0
    }
    function Um(e, t, n) {
        Ho(e) && n.delete(t)
    }
    function zb() {
        Bc = !1,
        Aa !== null && Ho(Aa) && (Aa = null),
        Da !== null && Ho(Da) && (Da = null),
        _a !== null && Ho(_a) && (_a = null),
        ni.forEach(Um),
        ai.forEach(Um)
    }
    function Bo(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        Bc || (Bc = !0,
        a.unstable_scheduleCallback(a.unstable_NormalPriority, zb)))
    }
    var qo = null;
    function Hm(e) {
        qo !== e && (qo = e,
        a.unstable_scheduleCallback(a.unstable_NormalPriority, function() {
            qo === e && (qo = null);
            for (var t = 0; t < e.length; t += 3) {
                var n = e[t]
                  , i = e[t + 1]
                  , s = e[t + 2];
                if (typeof i != "function") {
                    if (Hc(i || n) === null)
                        continue;
                    break
                }
                var d = Ve(n);
                d !== null && (e.splice(t, 3),
                t -= 3,
                Hs(d, {
                    pending: !0,
                    data: s,
                    method: n.method,
                    action: i
                }, i, s))
            }
        }))
    }
    function li(e) {
        function t(C) {
            return Bo(C, e)
        }
        Aa !== null && Bo(Aa, e),
        Da !== null && Bo(Da, e),
        _a !== null && Bo(_a, e),
        ni.forEach(t),
        ai.forEach(t);
        for (var n = 0; n < Ma.length; n++) {
            var i = Ma[n];
            i.blockedOn === e && (i.blockedOn = null)
        }
        for (; 0 < Ma.length && (n = Ma[0],
        n.blockedOn === null); )
            jm(n),
            n.blockedOn === null && Ma.shift();
        if (n = (e.ownerDocument || e).$$reactFormReplay,
        n != null)
            for (i = 0; i < n.length; i += 3) {
                var s = n[i]
                  , d = n[i + 1]
                  , y = s[ie] || null;
                if (typeof d == "function")
                    y || Hm(n);
                else if (y) {
                    var E = null;
                    if (d && d.hasAttribute("formAction")) {
                        if (s = d,
                        y = d[ie] || null)
                            E = y.formAction;
                        else if (Hc(s) !== null)
                            continue
                    } else
                        E = y.action;
                    typeof E == "function" ? n[i + 1] = E : (n.splice(i, 3),
                    i -= 3),
                    Hm(n)
                }
            }
    }
    function qc(e) {
        this._internalRoot = e
    }
    $o.prototype.render = qc.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(o(409));
        var n = t.current
          , i = en();
        Mm(n, i, e, t, null, null)
    }
    ,
    $o.prototype.unmount = qc.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            Mm(e.current, 2, null, e, null, null),
            xo(),
            t[me] = null
        }
    }
    ;
    function $o(e) {
        this._internalRoot = e
    }
    $o.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = M();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var n = 0; n < Ma.length && t !== 0 && t < Ma[n].priority; n++)
                ;
            Ma.splice(n, 0, e),
            n === 0 && jm(e)
        }
    }
    ;
    var Bm = r.version;
    if (Bm !== "19.1.0")
        throw Error(o(527, Bm, "19.1.0"));
    P.findDOMNode = function(e) {
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","),
            Error(o(268, e)));
        return e = h(t),
        e = e !== null ? g(e) : null,
        e = e === null ? null : e.stateNode,
        e
    }
    ;
    var jb = {
        bundleType: 0,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: A,
        reconcilerVersion: "19.1.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Vo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Vo.isDisabled && Vo.supportsFiber)
            try {
                Ht = Vo.inject(jb),
                it = Vo
            } catch {}
    }
    return oi.createRoot = function(e, t) {
        if (!u(e))
            throw Error(o(299));
        var n = !1
          , i = ""
          , s = t0
          , d = n0
          , y = a0
          , E = null;
        return t != null && (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (s = t.onUncaughtError),
        t.onCaughtError !== void 0 && (d = t.onCaughtError),
        t.onRecoverableError !== void 0 && (y = t.onRecoverableError),
        t.unstable_transitionCallbacks !== void 0 && (E = t.unstable_transitionCallbacks)),
        t = Dm(e, 1, !1, null, null, n, i, s, d, y, E, null),
        e[me] = t.current,
        xc(e),
        new qc(t)
    }
    ,
    oi.hydrateRoot = function(e, t, n) {
        if (!u(e))
            throw Error(o(299));
        var i = !1
          , s = ""
          , d = t0
          , y = n0
          , E = a0
          , C = null
          , H = null;
        return n != null && (n.unstable_strictMode === !0 && (i = !0),
        n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
        n.onUncaughtError !== void 0 && (d = n.onUncaughtError),
        n.onCaughtError !== void 0 && (y = n.onCaughtError),
        n.onRecoverableError !== void 0 && (E = n.onRecoverableError),
        n.unstable_transitionCallbacks !== void 0 && (C = n.unstable_transitionCallbacks),
        n.formState !== void 0 && (H = n.formState)),
        t = Dm(e, 1, !0, t, n ?? null, i, s, d, y, E, C, H),
        t.context = _m(null),
        n = t.current,
        i = en(),
        i = cl(i),
        s = ma(i),
        s.callback = null,
        ga(n, s, i),
        n = i,
        t.current.lanes = n,
        $a(t, n),
        Nn(t),
        e[me] = t.current,
        xc(e),
        new $o(t)
    }
    ,
    oi.version = "19.1.0",
    oi
}
var Fm;
function Xb() {
    if (Fm)
        return Yc.exports;
    Fm = 1;
    function a() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)
            } catch (r) {
                console.error(r)
            }
    }
    return a(),
    Yc.exports = Pb(),
    Yc.exports
}
var Qb = Xb();
const Zb = na(Qb);
var ui = {}, Km;
function Fb() {
    if (Km)
        return ui;
    Km = 1,
    Object.defineProperty(ui, "__esModule", {
        value: !0
    }),
    ui.parse = f,
    ui.serialize = g;
    const a = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/
      , r = /^[\u0021-\u003A\u003C-\u007E]*$/
      , l = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i
      , o = /^[\u0020-\u003A\u003D-\u007E]*$/
      , u = Object.prototype.toString
      , c = ( () => {
        const b = function() {};
        return b.prototype = Object.create(null),
        b
    }
    )();
    function f(b, R) {
        const S = new c
          , D = b.length;
        if (D < 2)
            return S;
        const O = (R == null ? void 0 : R.decode) || p;
        let z = 0;
        do {
            const G = b.indexOf("=", z);
            if (G === -1)
                break;
            const $ = b.indexOf(";", z)
              , ee = $ === -1 ? D : $;
            if (G > ee) {
                z = b.lastIndexOf(";", G - 1) + 1;
                continue
            }
            const L = m(b, z, G)
              , _ = h(b, G, L)
              , ne = b.slice(L, _);
            if (S[ne] === void 0) {
                let oe = m(b, G + 1, ee)
                  , ce = h(b, ee, oe);
                const he = O(b.slice(oe, ce));
                S[ne] = he
            }
            z = ee + 1
        } while (z < D);
        return S
    }
    function m(b, R, S) {
        do {
            const D = b.charCodeAt(R);
            if (D !== 32 && D !== 9)
                return R
        } while (++R < S);
        return S
    }
    function h(b, R, S) {
        for (; R > S; ) {
            const D = b.charCodeAt(--R);
            if (D !== 32 && D !== 9)
                return R + 1
        }
        return S
    }
    function g(b, R, S) {
        const D = (S == null ? void 0 : S.encode) || encodeURIComponent;
        if (!a.test(b))
            throw new TypeError(`argument name is invalid: ${b}`);
        const O = D(R);
        if (!r.test(O))
            throw new TypeError(`argument val is invalid: ${R}`);
        let z = b + "=" + O;
        if (!S)
            return z;
        if (S.maxAge !== void 0) {
            if (!Number.isInteger(S.maxAge))
                throw new TypeError(`option maxAge is invalid: ${S.maxAge}`);
            z += "; Max-Age=" + S.maxAge
        }
        if (S.domain) {
            if (!l.test(S.domain))
                throw new TypeError(`option domain is invalid: ${S.domain}`);
            z += "; Domain=" + S.domain
        }
        if (S.path) {
            if (!o.test(S.path))
                throw new TypeError(`option path is invalid: ${S.path}`);
            z += "; Path=" + S.path
        }
        if (S.expires) {
            if (!v(S.expires) || !Number.isFinite(S.expires.valueOf()))
                throw new TypeError(`option expires is invalid: ${S.expires}`);
            z += "; Expires=" + S.expires.toUTCString()
        }
        if (S.httpOnly && (z += "; HttpOnly"),
        S.secure && (z += "; Secure"),
        S.partitioned && (z += "; Partitioned"),
        S.priority)
            switch (typeof S.priority == "string" ? S.priority.toLowerCase() : void 0) {
            case "low":
                z += "; Priority=Low";
                break;
            case "medium":
                z += "; Priority=Medium";
                break;
            case "high":
                z += "; Priority=High";
                break;
            default:
                throw new TypeError(`option priority is invalid: ${S.priority}`)
            }
        if (S.sameSite)
            switch (typeof S.sameSite == "string" ? S.sameSite.toLowerCase() : S.sameSite) {
            case !0:
            case "strict":
                z += "; SameSite=Strict";
                break;
            case "lax":
                z += "; SameSite=Lax";
                break;
            case "none":
                z += "; SameSite=None";
                break;
            default:
                throw new TypeError(`option sameSite is invalid: ${S.sameSite}`)
            }
        return z
    }
    function p(b) {
        if (b.indexOf("%") === -1)
            return b;
        try {
            return decodeURIComponent(b)
        } catch {
            return b
        }
    }
    function v(b) {
        return u.call(b) === "[object Date]"
    }
    return ui
}
Fb();
/**
 * react-router v7.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var kp = a => {
    throw TypeError(a)
}
  , Kb = (a, r, l) => r.has(a) || kp("Cannot " + l)
  , Qc = (a, r, l) => (Kb(a, r, "read from private field"),
l ? l.call(a) : r.get(a))
  , Jb = (a, r, l) => r.has(a) ? kp("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(a) : r.set(a, l)
  , Jm = "popstate";
function Ib(a={}) {
    function r(o, u) {
        let {pathname: c, search: f, hash: m} = o.location;
        return vi("", {
            pathname: c,
            search: f,
            hash: m
        }, u.state && u.state.usr || null, u.state && u.state.key || "default")
    }
    function l(o, u) {
        return typeof u == "string" ? u : ja(u)
    }
    return e2(r, l, null, a)
}
function je(a, r) {
    if (a === !1 || a === null || typeof a > "u")
        throw new Error(r)
}
function mt(a, r) {
    if (!a) {
        typeof console < "u" && console.warn(r);
        try {
            throw new Error(r)
        } catch {}
    }
}
function Wb() {
    return Math.random().toString(36).substring(2, 10)
}
function Im(a, r) {
    return {
        usr: a.state,
        key: a.key,
        idx: r
    }
}
function vi(a, r, l=null, o) {
    return {
        pathname: typeof a == "string" ? a : a.pathname,
        search: "",
        hash: "",
        ...typeof r == "string" ? Ua(r) : r,
        state: l,
        key: r && r.key || o || Wb()
    }
}
function ja({pathname: a="/", search: r="", hash: l=""}) {
    return r && r !== "?" && (a += r.charAt(0) === "?" ? r : "?" + r),
    l && l !== "#" && (a += l.charAt(0) === "#" ? l : "#" + l),
    a
}
function Ua(a) {
    let r = {};
    if (a) {
        let l = a.indexOf("#");
        l >= 0 && (r.hash = a.substring(l),
        a = a.substring(0, l));
        let o = a.indexOf("?");
        o >= 0 && (r.search = a.substring(o),
        a = a.substring(0, o)),
        a && (r.pathname = a)
    }
    return r
}
function e2(a, r, l, o={}) {
    let {window: u=document.defaultView, v5Compat: c=!1} = o
      , f = u.history
      , m = "POP"
      , h = null
      , g = p();
    g == null && (g = 0,
    f.replaceState({
        ...f.state,
        idx: g
    }, ""));
    function p() {
        return (f.state || {
            idx: null
        }).idx
    }
    function v() {
        m = "POP";
        let O = p()
          , z = O == null ? null : O - g;
        g = O,
        h && h({
            action: m,
            location: D.location,
            delta: z
        })
    }
    function b(O, z) {
        m = "PUSH";
        let G = vi(D.location, O, z);
        g = p() + 1;
        let $ = Im(G, g)
          , ee = D.createHref(G);
        try {
            f.pushState($, "", ee)
        } catch (L) {
            if (L instanceof DOMException && L.name === "DataCloneError")
                throw L;
            u.location.assign(ee)
        }
        c && h && h({
            action: m,
            location: D.location,
            delta: 1
        })
    }
    function R(O, z) {
        m = "REPLACE";
        let G = vi(D.location, O, z);
        g = p();
        let $ = Im(G, g)
          , ee = D.createHref(G);
        f.replaceState($, "", ee),
        c && h && h({
            action: m,
            location: D.location,
            delta: 0
        })
    }
    function S(O) {
        return Lp(O)
    }
    let D = {
        get action() {
            return m
        },
        get location() {
            return a(u, f)
        },
        listen(O) {
            if (h)
                throw new Error("A history only accepts one active listener");
            return u.addEventListener(Jm, v),
            h = O,
            () => {
                u.removeEventListener(Jm, v),
                h = null
            }
        },
        createHref(O) {
            return r(u, O)
        },
        createURL: S,
        encodeLocation(O) {
            let z = S(O);
            return {
                pathname: z.pathname,
                search: z.search,
                hash: z.hash
            }
        },
        push: b,
        replace: R,
        go(O) {
            return f.go(O)
        }
    };
    return D
}
function Lp(a, r=!1) {
    let l = "http://localhost";
    typeof window < "u" && (l = window.location.origin !== "null" ? window.location.origin : window.location.href),
    je(l, "No window.location.(origin|href) available to create URL");
    let o = typeof a == "string" ? a : ja(a);
    return o = o.replace(/ $/, "%20"),
    !r && o.startsWith("//") && (o = l + o),
    new URL(o,l)
}
var mi, Wm = class {
    constructor(a) {
        if (Jb(this, mi, new Map),
        a)
            for (let[r,l] of a)
                this.set(r, l)
    }
    get(a) {
        if (Qc(this, mi).has(a))
            return Qc(this, mi).get(a);
        if (a.defaultValue !== void 0)
            return a.defaultValue;
        throw new Error("No value found for context")
    }
    set(a, r) {
        Qc(this, mi).set(a, r)
    }
}
;
mi = new WeakMap;
var t2 = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function n2(a) {
    return t2.has(a)
}
var a2 = new Set(["lazy", "caseSensitive", "path", "id", "index", "unstable_middleware", "children"]);
function r2(a) {
    return a2.has(a)
}
function l2(a) {
    return a.index === !0
}
function au(a, r, l=[], o={}) {
    return a.map( (u, c) => {
        let f = [...l, String(c)]
          , m = typeof u.id == "string" ? u.id : f.join("-");
        if (je(u.index !== !0 || !u.children, "Cannot specify children on an index route"),
        je(!o[m], `Found a route id collision on id "${m}".  Route id's must be globally unique within Data Router usages`),
        l2(u)) {
            let h = {
                ...u,
                ...r(u),
                id: m
            };
            return o[m] = h,
            h
        } else {
            let h = {
                ...u,
                ...r(u),
                id: m,
                children: void 0
            };
            return o[m] = h,
            u.children && (h.children = au(u.children, r, f, o)),
            h
        }
    }
    )
}
function za(a, r, l="/") {
    return Fo(a, r, l, !1)
}
function Fo(a, r, l, o) {
    let u = typeof r == "string" ? Ua(r) : r
      , c = rn(u.pathname || "/", l);
    if (c == null)
        return null;
    let f = zp(a);
    i2(f);
    let m = null;
    for (let h = 0; m == null && h < f.length; ++h) {
        let g = y2(c);
        m = g2(f[h], g, o)
    }
    return m
}
function Np(a, r) {
    let {route: l, pathname: o, params: u} = a;
    return {
        id: l.id,
        pathname: o,
        params: u,
        data: r[l.id],
        handle: l.handle
    }
}
function zp(a, r=[], l=[], o="") {
    let u = (c, f, m) => {
        let h = {
            relativePath: m === void 0 ? c.path || "" : m,
            caseSensitive: c.caseSensitive === !0,
            childrenIndex: f,
            route: c
        };
        h.relativePath.startsWith("/") && (je(h.relativePath.startsWith(o), `Absolute route path "${h.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),
        h.relativePath = h.relativePath.slice(o.length));
        let g = Un([o, h.relativePath])
          , p = l.concat(h);
        c.children && c.children.length > 0 && (je(c.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${g}".`),
        zp(c.children, r, p, g)),
        !(c.path == null && !c.index) && r.push({
            path: g,
            score: h2(g, c.index),
            routesMeta: p
        })
    }
    ;
    return a.forEach( (c, f) => {
        var m;
        if (c.path === "" || !((m = c.path) != null && m.includes("?")))
            u(c, f);
        else
            for (let h of jp(c.path))
                u(c, f, h)
    }
    ),
    r
}
function jp(a) {
    let r = a.split("/");
    if (r.length === 0)
        return [];
    let[l,...o] = r
      , u = l.endsWith("?")
      , c = l.replace(/\?$/, "");
    if (o.length === 0)
        return u ? [c, ""] : [c];
    let f = jp(o.join("/"))
      , m = [];
    return m.push(...f.map(h => h === "" ? c : [c, h].join("/"))),
    u && m.push(...f),
    m.map(h => a.startsWith("/") && h === "" ? "/" : h)
}
function i2(a) {
    a.sort( (r, l) => r.score !== l.score ? l.score - r.score : m2(r.routesMeta.map(o => o.childrenIndex), l.routesMeta.map(o => o.childrenIndex)))
}
var o2 = /^:[\w-]+$/
  , u2 = 3
  , s2 = 2
  , c2 = 1
  , f2 = 10
  , d2 = -2
  , eg = a => a === "*";
function h2(a, r) {
    let l = a.split("/")
      , o = l.length;
    return l.some(eg) && (o += d2),
    r && (o += s2),
    l.filter(u => !eg(u)).reduce( (u, c) => u + (o2.test(c) ? u2 : c === "" ? c2 : f2), o)
}
function m2(a, r) {
    return a.length === r.length && a.slice(0, -1).every( (o, u) => o === r[u]) ? a[a.length - 1] - r[r.length - 1] : 0
}
function g2(a, r, l=!1) {
    let {routesMeta: o} = a
      , u = {}
      , c = "/"
      , f = [];
    for (let m = 0; m < o.length; ++m) {
        let h = o[m]
          , g = m === o.length - 1
          , p = c === "/" ? r : r.slice(c.length) || "/"
          , v = ru({
            path: h.relativePath,
            caseSensitive: h.caseSensitive,
            end: g
        }, p)
          , b = h.route;
        if (!v && g && l && !o[o.length - 1].route.index && (v = ru({
            path: h.relativePath,
            caseSensitive: h.caseSensitive,
            end: !1
        }, p)),
        !v)
            return null;
        Object.assign(u, v.params),
        f.push({
            params: u,
            pathname: Un([c, v.pathname]),
            pathnameBase: S2(Un([c, v.pathnameBase])),
            route: b
        }),
        v.pathnameBase !== "/" && (c = Un([c, v.pathnameBase]))
    }
    return f
}
function ru(a, r) {
    typeof a == "string" && (a = {
        path: a,
        caseSensitive: !1,
        end: !0
    });
    let[l,o] = p2(a.path, a.caseSensitive, a.end)
      , u = r.match(l);
    if (!u)
        return null;
    let c = u[0]
      , f = c.replace(/(.)\/+$/, "$1")
      , m = u.slice(1);
    return {
        params: o.reduce( (g, {paramName: p, isOptional: v}, b) => {
            if (p === "*") {
                let S = m[b] || "";
                f = c.slice(0, c.length - S.length).replace(/(.)\/+$/, "$1")
            }
            const R = m[b];
            return v && !R ? g[p] = void 0 : g[p] = (R || "").replace(/%2F/g, "/"),
            g
        }
        , {}),
        pathname: c,
        pathnameBase: f,
        pattern: a
    }
}
function p2(a, r=!1, l=!0) {
    mt(a === "*" || !a.endsWith("*") || a.endsWith("/*"), `Route path "${a}" will be treated as if it were "${a.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/, "/*")}".`);
    let o = []
      , u = "^" + a.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (f, m, h) => (o.push({
        paramName: m,
        isOptional: h != null
    }),
    h ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return a.endsWith("*") ? (o.push({
        paramName: "*"
    }),
    u += a === "*" || a === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : l ? u += "\\/*$" : a !== "" && a !== "/" && (u += "(?:(?=\\/|$))"),
    [new RegExp(u,r ? void 0 : "i"), o]
}
function y2(a) {
    try {
        return a.split("/").map(r => decodeURIComponent(r).replace(/\//g, "%2F")).join("/")
    } catch (r) {
        return mt(!1, `The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),
        a
    }
}
function rn(a, r) {
    if (r === "/")
        return a;
    if (!a.toLowerCase().startsWith(r.toLowerCase()))
        return null;
    let l = r.endsWith("/") ? r.length - 1 : r.length
      , o = a.charAt(l);
    return o && o !== "/" ? null : a.slice(l) || "/"
}
function v2(a, r="/") {
    let {pathname: l, search: o="", hash: u=""} = typeof a == "string" ? Ua(a) : a;
    return {
        pathname: l ? l.startsWith("/") ? l : b2(l, r) : r,
        search: E2(o),
        hash: x2(u)
    }
}
function b2(a, r) {
    let l = r.replace(/\/+$/, "").split("/");
    return a.split("/").forEach(u => {
        u === ".." ? l.length > 1 && l.pop() : u !== "." && l.push(u)
    }
    ),
    l.length > 1 ? l.join("/") : "/"
}
function Zc(a, r, l, o) {
    return `Cannot include a '${a}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function Up(a) {
    return a.filter( (r, l) => l === 0 || r.route.path && r.route.path.length > 0)
}
function Yf(a) {
    let r = Up(a);
    return r.map( (l, o) => o === r.length - 1 ? l.pathname : l.pathnameBase)
}
function Gf(a, r, l, o=!1) {
    let u;
    typeof a == "string" ? u = Ua(a) : (u = {
        ...a
    },
    je(!u.pathname || !u.pathname.includes("?"), Zc("?", "pathname", "search", u)),
    je(!u.pathname || !u.pathname.includes("#"), Zc("#", "pathname", "hash", u)),
    je(!u.search || !u.search.includes("#"), Zc("#", "search", "hash", u)));
    let c = a === "" || u.pathname === "", f = c ? "/" : u.pathname, m;
    if (f == null)
        m = l;
    else {
        let v = r.length - 1;
        if (!o && f.startsWith("..")) {
            let b = f.split("/");
            for (; b[0] === ".."; )
                b.shift(),
                v -= 1;
            u.pathname = b.join("/")
        }
        m = v >= 0 ? r[v] : "/"
    }
    let h = v2(u, m)
      , g = f && f !== "/" && f.endsWith("/")
      , p = (c || f === ".") && l.endsWith("/");
    return !h.pathname.endsWith("/") && (g || p) && (h.pathname += "/"),
    h
}
var Un = a => a.join("/").replace(/\/\/+/g, "/")
  , S2 = a => a.replace(/\/+$/, "").replace(/^\/*/, "/")
  , E2 = a => !a || a === "?" ? "" : a.startsWith("?") ? a : "?" + a
  , x2 = a => !a || a === "#" ? "" : a.startsWith("#") ? a : "#" + a
  , lu = class {
    constructor(a, r, l, o=!1) {
        this.status = a,
        this.statusText = r || "",
        this.internal = o,
        l instanceof Error ? (this.data = l.toString(),
        this.error = l) : this.data = l
    }
}
;
function rl(a) {
    return a != null && typeof a.status == "number" && typeof a.statusText == "string" && typeof a.internal == "boolean" && "data"in a
}
var Hp = ["POST", "PUT", "PATCH", "DELETE"]
  , w2 = new Set(Hp)
  , R2 = ["GET", ...Hp]
  , T2 = new Set(R2)
  , O2 = new Set([301, 302, 303, 307, 308])
  , C2 = new Set([307, 308])
  , Fc = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
}
  , A2 = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
}
  , si = {
    state: "unblocked",
    proceed: void 0,
    reset: void 0,
    location: void 0
}
  , Pf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , D2 = a => ({
    hasErrorBoundary: !!a.hasErrorBoundary
})
  , Bp = "remix-router-transitions"
  , qp = Symbol("ResetLoaderData");
function _2(a) {
    const r = a.window ? a.window : typeof window < "u" ? window : void 0
      , l = typeof r < "u" && typeof r.document < "u" && typeof r.document.createElement < "u";
    je(a.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let o = a.hydrationRouteProperties || [], u = a.mapRouteProperties || D2, c = {}, f = au(a.routes, u, void 0, c), m, h = a.basename || "/", g = a.dataStrategy || z2, p = {
        unstable_middleware: !1,
        ...a.future
    }, v = null, b = new Set, R = null, S = null, D = null, O = a.hydrationData != null, z = za(f, a.history.location, h), G = !1, $ = null, ee;
    if (z == null && !a.patchRoutesOnNavigation) {
        let M = yn(404, {
            pathname: a.history.location.pathname
        })
          , {matches: j, route: Y} = dg(f);
        ee = !0,
        z = j,
        $ = {
            [Y.id]: M
        }
    } else if (z && !a.hydrationData && Va(z, f, a.history.location.pathname).active && (z = null),
    z)
        if (z.some(M => M.route.lazy))
            ee = !1;
        else if (!z.some(M => M.route.loader))
            ee = !0;
        else {
            let M = a.hydrationData ? a.hydrationData.loaderData : null
              , j = a.hydrationData ? a.hydrationData.errors : null;
            if (j) {
                let Y = z.findIndex(W => j[W.route.id] !== void 0);
                ee = z.slice(0, Y + 1).every(W => !Af(W.route, M, j))
            } else
                ee = z.every(Y => !Af(Y.route, M, j))
        }
    else {
        ee = !1,
        z = [];
        let M = Va(null, f, a.history.location.pathname);
        M.active && M.matches && (G = !0,
        z = M.matches)
    }
    let L, _ = {
        historyAction: a.history.action,
        location: a.history.location,
        matches: z,
        initialized: ee,
        navigation: Fc,
        restoreScrollPosition: a.hydrationData != null ? !1 : null,
        preventScrollReset: !1,
        revalidation: "idle",
        loaderData: a.hydrationData && a.hydrationData.loaderData || {},
        actionData: a.hydrationData && a.hydrationData.actionData || null,
        errors: a.hydrationData && a.hydrationData.errors || $,
        fetchers: new Map,
        blockers: new Map
    }, ne = "POP", oe = !1, ce, he = !1, se = new Map, xe = null, ge = !1, le = !1, J = new Set, A = new Map, P = 0, Z = -1, re = new Map, T = new Set, V = new Map, ae = new Map, te = new Set, ue = new Map, Te, pe = null;
    function lt() {
        if (v = a.history.listen( ({action: M, location: j, delta: Y}) => {
            if (Te) {
                Te(),
                Te = void 0;
                return
            }
            mt(ue.size === 0 || Y != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
            let W = Mi({
                currentLocation: _.location,
                nextLocation: j,
                historyAction: M
            });
            if (W && Y != null) {
                let ie = new Promise(me => {
                    Te = me
                }
                );
                a.history.go(Y * -1),
                Dn(W, {
                    state: "blocked",
                    location: j,
                    proceed() {
                        Dn(W, {
                            state: "proceeding",
                            proceed: void 0,
                            reset: void 0,
                            location: j
                        }),
                        ie.then( () => a.history.go(Y))
                    },
                    reset() {
                        let me = new Map(_.blockers);
                        me.set(W, si),
                        qe({
                            blockers: me
                        })
                    }
                });
                return
            }
            return bn(M, j)
        }
        ),
        l) {
            X2(r, se);
            let M = () => Q2(r, se);
            r.addEventListener("pagehide", M),
            xe = () => r.removeEventListener("pagehide", M)
        }
        return _.initialized || bn("POP", _.location, {
            initialHydration: !0
        }),
        L
    }
    function Ye() {
        v && v(),
        xe && xe(),
        b.clear(),
        ce && ce.abort(),
        _.fetchers.forEach( (M, j) => Ot(j)),
        _.blockers.forEach( (M, j) => qa(j))
    }
    function xt(M) {
        return b.add(M),
        () => b.delete(M)
    }
    function qe(M, j={}) {
        _ = {
            ..._,
            ...M
        };
        let Y = []
          , W = [];
        _.fetchers.forEach( (ie, me) => {
            ie.state === "idle" && (te.has(me) ? Y.push(me) : W.push(me))
        }
        ),
        te.forEach(ie => {
            !_.fetchers.has(ie) && !A.has(ie) && Y.push(ie)
        }
        ),
        [...b].forEach(ie => ie(_, {
            deletedFetchers: Y,
            viewTransitionOpts: j.viewTransitionOpts,
            flushSync: j.flushSync === !0
        })),
        Y.forEach(ie => Ot(ie)),
        W.forEach(ie => _.fetchers.delete(ie))
    }
    function pt(M, j, {flushSync: Y}={}) {
        var Ee, Ce;
        let W = _.actionData != null && _.navigation.formMethod != null && an(_.navigation.formMethod) && _.navigation.state === "loading" && ((Ee = M.state) == null ? void 0 : Ee._isRedirect) !== !0, ie;
        j.actionData ? Object.keys(j.actionData).length > 0 ? ie = j.actionData : ie = null : W ? ie = _.actionData : ie = null;
        let me = j.loaderData ? cg(_.loaderData, j.loaderData, j.matches || [], j.errors) : _.loaderData
          , we = _.blockers;
        we.size > 0 && (we = new Map(we),
        we.forEach( (ve, De) => we.set(De, si)));
        let fe = oe === !0 || _.navigation.formMethod != null && an(_.navigation.formMethod) && ((Ce = M.state) == null ? void 0 : Ce._isRedirect) !== !0;
        m && (f = m,
        m = void 0),
        ge || ne === "POP" || (ne === "PUSH" ? a.history.push(M, M.state) : ne === "REPLACE" && a.history.replace(M, M.state));
        let Se;
        if (ne === "POP") {
            let ve = se.get(_.location.pathname);
            ve && ve.has(M.pathname) ? Se = {
                currentLocation: _.location,
                nextLocation: M
            } : se.has(M.pathname) && (Se = {
                currentLocation: M,
                nextLocation: _.location
            })
        } else if (he) {
            let ve = se.get(_.location.pathname);
            ve ? ve.add(M.pathname) : (ve = new Set([M.pathname]),
            se.set(_.location.pathname, ve)),
            Se = {
                currentLocation: _.location,
                nextLocation: M
            }
        }
        qe({
            ...j,
            actionData: ie,
            loaderData: me,
            historyAction: ne,
            location: M,
            initialized: !0,
            navigation: Fc,
            revalidation: "idle",
            restoreScrollPosition: Li(M, j.matches || _.matches),
            preventScrollReset: fe,
            blockers: we
        }, {
            viewTransitionOpts: Se,
            flushSync: Y === !0
        }),
        ne = "POP",
        oe = !1,
        he = !1,
        ge = !1,
        le = !1,
        pe == null || pe.resolve(),
        pe = null
    }
    async function ln(M, j) {
        if (typeof M == "number") {
            a.history.go(M);
            return
        }
        let Y = Cf(_.location, _.matches, h, M, j == null ? void 0 : j.fromRouteId, j == null ? void 0 : j.relative)
          , {path: W, submission: ie, error: me} = tg(!1, Y, j)
          , we = _.location
          , fe = vi(_.location, W, j && j.state);
        fe = {
            ...fe,
            ...a.history.encodeLocation(fe)
        };
        let Se = j && j.replace != null ? j.replace : void 0
          , Ee = "PUSH";
        Se === !0 ? Ee = "REPLACE" : Se === !1 || ie != null && an(ie.formMethod) && ie.formAction === _.location.pathname + _.location.search && (Ee = "REPLACE");
        let Ce = j && "preventScrollReset"in j ? j.preventScrollReset === !0 : void 0
          , ve = (j && j.flushSync) === !0
          , De = Mi({
            currentLocation: we,
            nextLocation: fe,
            historyAction: Ee
        });
        if (De) {
            Dn(De, {
                state: "blocked",
                location: fe,
                proceed() {
                    Dn(De, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: fe
                    }),
                    ln(M, j)
                },
                reset() {
                    let Ve = new Map(_.blockers);
                    Ve.set(De, si),
                    qe({
                        blockers: Ve
                    })
                }
            });
            return
        }
        await bn(Ee, fe, {
            submission: ie,
            pendingError: me,
            preventScrollReset: Ce,
            replace: j && j.replace,
            enableViewTransition: j && j.viewTransition,
            flushSync: ve
        })
    }
    function Cn() {
        pe || (pe = Z2()),
        sl(),
        qe({
            revalidation: "loading"
        });
        let M = pe.promise;
        return _.navigation.state === "submitting" ? M : _.navigation.state === "idle" ? (bn(_.historyAction, _.location, {
            startUninterruptedRevalidation: !0
        }),
        M) : (bn(ne || _.historyAction, _.navigation.location, {
            overrideNavigation: _.navigation,
            enableViewTransition: he === !0
        }),
        M)
    }
    async function bn(M, j, Y) {
        ce && ce.abort(),
        ce = null,
        ne = M,
        ge = (Y && Y.startUninterruptedRevalidation) === !0,
        $a(_.location, _.matches),
        oe = (Y && Y.preventScrollReset) === !0,
        he = (Y && Y.enableViewTransition) === !0;
        let W = m || f
          , ie = Y && Y.overrideNavigation
          , me = Y != null && Y.initialHydration && _.matches && _.matches.length > 0 && !G ? _.matches : za(W, j, h)
          , we = (Y && Y.flushSync) === !0;
        if (me && _.initialized && !le && $2(_.location, j) && !(Y && Y.submission && an(Y.submission.formMethod))) {
            pt(j, {
                matches: me
            }, {
                flushSync: we
            });
            return
        }
        let fe = Va(me, W, j.pathname);
        if (fe.active && fe.matches && (me = fe.matches),
        !me) {
            let {error: ot, notFoundMatches: Ge, route: Be} = gr(j.pathname);
            pt(j, {
                matches: Ge,
                loaderData: {},
                errors: {
                    [Be.id]: ot
                }
            }, {
                flushSync: we
            });
            return
        }
        ce = new AbortController;
        let Se = tl(a.history, j, ce.signal, Y && Y.submission), Ee = new Wm(a.unstable_getContext ? await a.unstable_getContext() : void 0), Ce;
        if (Y && Y.pendingError)
            Ce = [or(me).route.id, {
                type: "error",
                error: Y.pendingError
            }];
        else if (Y && Y.submission && an(Y.submission.formMethod)) {
            let ot = await Nu(Se, j, Y.submission, me, Ee, fe.active, Y && Y.initialHydration === !0, {
                replace: Y.replace,
                flushSync: we
            });
            if (ot.shortCircuited)
                return;
            if (ot.pendingActionResult) {
                let[Ge,Be] = ot.pendingActionResult;
                if (nn(Be) && rl(Be.error) && Be.error.status === 404) {
                    ce = null,
                    pt(j, {
                        matches: ot.matches,
                        loaderData: {},
                        errors: {
                            [Ge]: Be.error
                        }
                    });
                    return
                }
            }
            me = ot.matches || me,
            Ce = ot.pendingActionResult,
            ie = Kc(j, Y.submission),
            we = !1,
            fe.active = !1,
            Se = tl(a.history, Se.url, Se.signal)
        }
        let {shortCircuited: ve, matches: De, loaderData: Ve, errors: tt} = await zu(Se, j, me, Ee, fe.active, ie, Y && Y.submission, Y && Y.fetcherSubmission, Y && Y.replace, Y && Y.initialHydration === !0, we, Ce);
        ve || (ce = null,
        pt(j, {
            matches: De || me,
            ...fg(Ce),
            loaderData: Ve,
            errors: tt
        }))
    }
    async function Nu(M, j, Y, W, ie, me, we, fe={}) {
        sl();
        let Se = G2(j, Y);
        if (qe({
            navigation: Se
        }, {
            flushSync: fe.flushSync === !0
        }),
        me) {
            let ve = await Ya(W, j.pathname, M.signal);
            if (ve.type === "aborted")
                return {
                    shortCircuited: !0
                };
            if (ve.type === "error") {
                let De = or(ve.partialMatches).route.id;
                return {
                    matches: ve.partialMatches,
                    pendingActionResult: [De, {
                        type: "error",
                        error: ve.error
                    }]
                }
            } else if (ve.matches)
                W = ve.matches;
            else {
                let {notFoundMatches: De, error: Ve, route: tt} = gr(j.pathname);
                return {
                    matches: De,
                    pendingActionResult: [tt.id, {
                        type: "error",
                        error: Ve
                    }]
                }
            }
        }
        let Ee, Ce = gi(W, j);
        if (!Ce.route.action && !Ce.route.lazy)
            Ee = {
                type: "error",
                error: yn(405, {
                    method: M.method,
                    pathname: j.pathname,
                    routeId: Ce.route.id
                })
            };
        else {
            let ve = nl(u, c, M, W, Ce, we ? [] : o, ie)
              , De = await ia(M, ve, ie, null);
            if (Ee = De[Ce.route.id],
            !Ee) {
                for (let Ve of W)
                    if (De[Ve.route.id]) {
                        Ee = De[Ve.route.id];
                        break
                    }
            }
            if (M.signal.aborted)
                return {
                    shortCircuited: !0
                }
        }
        if (ur(Ee)) {
            let ve;
            return fe && fe.replace != null ? ve = fe.replace : ve = og(Ee.response.headers.get("Location"), new URL(M.url), h) === _.location.pathname + _.location.search,
            await Bn(M, Ee, !0, {
                submission: Y,
                replace: ve
            }),
            {
                shortCircuited: !0
            }
        }
        if (nn(Ee)) {
            let ve = or(W, Ce.route.id);
            return (fe && fe.replace) !== !0 && (ne = "PUSH"),
            {
                matches: W,
                pendingActionResult: [ve.route.id, Ee, Ce.route.id]
            }
        }
        return {
            matches: W,
            pendingActionResult: [Ce.route.id, Ee]
        }
    }
    async function zu(M, j, Y, W, ie, me, we, fe, Se, Ee, Ce, ve) {
        let De = me || Kc(j, we)
          , Ve = we || fe || mg(De)
          , tt = !ge && !Ee;
        if (ie) {
            if (tt) {
                let Mt = Zt(ve);
                qe({
                    navigation: De,
                    ...Mt !== void 0 ? {
                        actionData: Mt
                    } : {}
                }, {
                    flushSync: Ce
                })
            }
            let Ne = await Ya(Y, j.pathname, M.signal);
            if (Ne.type === "aborted")
                return {
                    shortCircuited: !0
                };
            if (Ne.type === "error") {
                let Mt = or(Ne.partialMatches).route.id;
                return {
                    matches: Ne.partialMatches,
                    loaderData: {},
                    errors: {
                        [Mt]: Ne.error
                    }
                }
            } else if (Ne.matches)
                Y = Ne.matches;
            else {
                let {error: Mt, notFoundMatches: En, route: xn} = gr(j.pathname);
                return {
                    matches: En,
                    loaderData: {},
                    errors: {
                        [xn.id]: Mt
                    }
                }
            }
        }
        let ot = m || f
          , {dsMatches: Ge, revalidatingFetchers: Be} = ng(M, W, u, c, a.history, _, Y, Ve, j, Ee ? [] : o, Ee === !0, le, J, te, V, T, ot, h, ve);
        if (Z = ++P,
        !a.dataStrategy && !Ge.some(Ne => Ne.shouldLoad) && Be.length === 0) {
            let Ne = Ha();
            return pt(j, {
                matches: Y,
                loaderData: {},
                errors: ve && nn(ve[1]) ? {
                    [ve[0]]: ve[1].error
                } : null,
                ...fg(ve),
                ...Ne ? {
                    fetchers: new Map(_.fetchers)
                } : {}
            }, {
                flushSync: Ce
            }),
            {
                shortCircuited: !0
            }
        }
        if (tt) {
            let Ne = {};
            if (!ie) {
                Ne.navigation = De;
                let Mt = Zt(ve);
                Mt !== void 0 && (Ne.actionData = Mt)
            }
            Be.length > 0 && (Ne.fetchers = ju(Be)),
            qe(Ne, {
                flushSync: Ce
            })
        }
        Be.forEach(Ne => {
            An(Ne.key),
            Ne.controller && A.set(Ne.key, Ne.controller)
        }
        );
        let oa = () => Be.forEach(Ne => An(Ne.key));
        ce && ce.signal.addEventListener("abort", oa);
        let {loaderResults: jt, fetcherResults: on} = await Di(Ge, Be, M, W);
        if (M.signal.aborted)
            return {
                shortCircuited: !0
            };
        ce && ce.signal.removeEventListener("abort", oa),
        Be.forEach(Ne => A.delete(Ne.key));
        let Bt = Go(jt);
        if (Bt)
            return await Bn(M, Bt.result, !0, {
                replace: Se
            }),
            {
                shortCircuited: !0
            };
        if (Bt = Go(on),
        Bt)
            return T.add(Bt.key),
            await Bn(M, Bt.result, !0, {
                replace: Se
            }),
            {
                shortCircuited: !0
            };
        let {loaderData: ua, errors: sa} = sg(_, Y, jt, ve, Be, on);
        Ee && _.errors && (sa = {
            ..._.errors,
            ...sa
        });
        let dl = Ha()
          , un = Ba(Z)
          , $n = dl || un || Be.length > 0;
        return {
            matches: Y,
            loaderData: ua,
            errors: sa,
            ...$n ? {
                fetchers: new Map(_.fetchers)
            } : {}
        }
    }
    function Zt(M) {
        if (M && !nn(M[1]))
            return {
                [M[0]]: M[1].data
            };
        if (_.actionData)
            return Object.keys(_.actionData).length === 0 ? null : _.actionData
    }
    function ju(M) {
        return M.forEach(j => {
            let Y = _.fetchers.get(j.key)
              , W = ci(void 0, Y ? Y.data : void 0);
            _.fetchers.set(j.key, W)
        }
        ),
        new Map(_.fetchers)
    }
    async function Ci(M, j, Y, W) {
        An(M);
        let ie = (W && W.flushSync) === !0
          , me = m || f
          , we = Cf(_.location, _.matches, h, Y, j, W == null ? void 0 : W.relative)
          , fe = za(me, we, h)
          , Se = Va(fe, me, we);
        if (Se.active && Se.matches && (fe = Se.matches),
        !fe) {
            it(M, j, yn(404, {
                pathname: we
            }), {
                flushSync: ie
            });
            return
        }
        let {path: Ee, submission: Ce, error: ve} = tg(!0, we, W);
        if (ve) {
            it(M, j, ve, {
                flushSync: ie
            });
            return
        }
        let De = gi(fe, Ee)
          , Ve = new Wm(a.unstable_getContext ? await a.unstable_getContext() : void 0)
          , tt = (W && W.preventScrollReset) === !0;
        if (Ce && an(Ce.formMethod)) {
            await Ai(M, j, Ee, De, fe, Ve, Se.active, ie, tt, Ce);
            return
        }
        V.set(M, {
            routeId: j,
            path: Ee
        }),
        await mr(M, j, Ee, De, fe, Ve, Se.active, ie, tt, Ce)
    }
    async function Ai(M, j, Y, W, ie, me, we, fe, Se, Ee) {
        sl(),
        V.delete(M);
        function Ce(at) {
            if (!at.route.action && !at.route.lazy) {
                let ca = yn(405, {
                    method: Ee.formMethod,
                    pathname: Y,
                    routeId: j
                });
                return it(M, j, ca, {
                    flushSync: fe
                }),
                !0
            }
            return !1
        }
        if (!we && Ce(W))
            return;
        let ve = _.fetchers.get(M);
        Ht(M, P2(Ee, ve), {
            flushSync: fe
        });
        let De = new AbortController
          , Ve = tl(a.history, Y, De.signal, Ee);
        if (we) {
            let at = await Ya(ie, Y, Ve.signal, M);
            if (at.type === "aborted")
                return;
            if (at.type === "error") {
                it(M, j, at.error, {
                    flushSync: fe
                });
                return
            } else if (at.matches) {
                if (ie = at.matches,
                W = gi(ie, Y),
                Ce(W))
                    return
            } else {
                it(M, j, yn(404, {
                    pathname: Y
                }), {
                    flushSync: fe
                });
                return
            }
        }
        A.set(M, De);
        let tt = P
          , ot = nl(u, c, Ve, ie, W, o, me)
          , Be = (await ia(Ve, ot, me, M))[W.route.id];
        if (Ve.signal.aborted) {
            A.get(M) === De && A.delete(M);
            return
        }
        if (te.has(M)) {
            if (ur(Be) || nn(Be)) {
                Ht(M, Na(void 0));
                return
            }
        } else {
            if (ur(Be))
                if (A.delete(M),
                Z > tt) {
                    Ht(M, Na(void 0));
                    return
                } else
                    return T.add(M),
                    Ht(M, ci(Ee)),
                    Bn(Ve, Be, !1, {
                        fetcherSubmission: Ee,
                        preventScrollReset: Se
                    });
            if (nn(Be)) {
                it(M, j, Be.error);
                return
            }
        }
        let oa = _.navigation.location || _.location
          , jt = tl(a.history, oa, De.signal)
          , on = m || f
          , Bt = _.navigation.state !== "idle" ? za(on, _.navigation.location, h) : _.matches;
        je(Bt, "Didn't find any matches after fetcher action");
        let ua = ++P;
        re.set(M, ua);
        let sa = ci(Ee, Be.data);
        _.fetchers.set(M, sa);
        let {dsMatches: dl, revalidatingFetchers: un} = ng(jt, me, u, c, a.history, _, Bt, Ee, oa, o, !1, le, J, te, V, T, on, h, [W.route.id, Be]);
        un.filter(at => at.key !== M).forEach(at => {
            let ca = at.key
              , hl = _.fetchers.get(ca)
              , qt = ci(void 0, hl ? hl.data : void 0);
            _.fetchers.set(ca, qt),
            An(ca),
            at.controller && A.set(ca, at.controller)
        }
        ),
        qe({
            fetchers: new Map(_.fetchers)
        });
        let $n = () => un.forEach(at => An(at.key));
        De.signal.addEventListener("abort", $n);
        let {loaderResults: Ne, fetcherResults: Mt} = await Di(dl, un, jt, me);
        if (De.signal.aborted)
            return;
        if (De.signal.removeEventListener("abort", $n),
        re.delete(M),
        A.delete(M),
        un.forEach(at => A.delete(at.key)),
        _.fetchers.has(M)) {
            let at = Na(Be.data);
            _.fetchers.set(M, at)
        }
        let En = Go(Ne);
        if (En)
            return Bn(jt, En.result, !1, {
                preventScrollReset: Se
            });
        if (En = Go(Mt),
        En)
            return T.add(En.key),
            Bn(jt, En.result, !1, {
                preventScrollReset: Se
            });
        let {loaderData: xn, errors: Ga} = sg(_, Bt, Ne, void 0, un, Mt);
        Ba(ua),
        _.navigation.state === "loading" && ua > Z ? (je(ne, "Expected pending action"),
        ce && ce.abort(),
        pt(_.navigation.location, {
            matches: Bt,
            loaderData: xn,
            errors: Ga,
            fetchers: new Map(_.fetchers)
        })) : (qe({
            errors: Ga,
            loaderData: cg(_.loaderData, xn, Bt, Ga),
            fetchers: new Map(_.fetchers)
        }),
        le = !1)
    }
    async function mr(M, j, Y, W, ie, me, we, fe, Se, Ee) {
        let Ce = _.fetchers.get(M);
        Ht(M, ci(Ee, Ce ? Ce.data : void 0), {
            flushSync: fe
        });
        let ve = new AbortController
          , De = tl(a.history, Y, ve.signal);
        if (we) {
            let Be = await Ya(ie, Y, De.signal, M);
            if (Be.type === "aborted")
                return;
            if (Be.type === "error") {
                it(M, j, Be.error, {
                    flushSync: fe
                });
                return
            } else if (Be.matches)
                ie = Be.matches,
                W = gi(ie, Y);
            else {
                it(M, j, yn(404, {
                    pathname: Y
                }), {
                    flushSync: fe
                });
                return
            }
        }
        A.set(M, ve);
        let Ve = P
          , tt = nl(u, c, De, ie, W, o, me)
          , Ge = (await ia(De, tt, me, M))[W.route.id];
        if (A.get(M) === ve && A.delete(M),
        !De.signal.aborted) {
            if (te.has(M)) {
                Ht(M, Na(void 0));
                return
            }
            if (ur(Ge))
                if (Z > Ve) {
                    Ht(M, Na(void 0));
                    return
                } else {
                    T.add(M),
                    await Bn(De, Ge, !1, {
                        preventScrollReset: Se
                    });
                    return
                }
            if (nn(Ge)) {
                it(M, j, Ge.error);
                return
            }
            Ht(M, Na(Ge.data))
        }
    }
    async function Bn(M, j, Y, {submission: W, fetcherSubmission: ie, preventScrollReset: me, replace: we}={}) {
        j.response.headers.has("X-Remix-Revalidate") && (le = !0);
        let fe = j.response.headers.get("Location");
        je(fe, "Expected a Location header on the redirect Response"),
        fe = og(fe, new URL(M.url), h);
        let Se = vi(_.location, fe, {
            _isRedirect: !0
        });
        if (l) {
            let tt = !1;
            if (j.response.headers.has("X-Remix-Reload-Document"))
                tt = !0;
            else if (Pf.test(fe)) {
                const ot = Lp(fe, !0);
                tt = ot.origin !== r.location.origin || rn(ot.pathname, h) == null
            }
            if (tt) {
                we ? r.location.replace(fe) : r.location.assign(fe);
                return
            }
        }
        ce = null;
        let Ee = we === !0 || j.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH"
          , {formMethod: Ce, formAction: ve, formEncType: De} = _.navigation;
        !W && !ie && Ce && ve && De && (W = mg(_.navigation));
        let Ve = W || ie;
        if (C2.has(j.response.status) && Ve && an(Ve.formMethod))
            await bn(Ee, Se, {
                submission: {
                    ...Ve,
                    formAction: fe
                },
                preventScrollReset: me || oe,
                enableViewTransition: Y ? he : void 0
            });
        else {
            let tt = Kc(Se, W);
            await bn(Ee, Se, {
                overrideNavigation: tt,
                fetcherSubmission: ie,
                preventScrollReset: me || oe,
                enableViewTransition: Y ? he : void 0
            })
        }
    }
    async function ia(M, j, Y, W) {
        let ie, me = {};
        try {
            ie = await j2(g, M, j, W, Y, !1)
        } catch (we) {
            return j.filter(fe => fe.shouldLoad).forEach(fe => {
                me[fe.route.id] = {
                    type: "error",
                    error: we
                }
            }
            ),
            me
        }
        if (M.signal.aborted)
            return me;
        for (let[we,fe] of Object.entries(ie))
            if (V2(fe)) {
                let Se = fe.result;
                me[we] = {
                    type: "redirect",
                    response: B2(Se, M, we, j, h)
                }
            } else
                me[we] = await H2(fe);
        return me
    }
    async function Di(M, j, Y, W) {
        let ie = ia(Y, M, W, null)
          , me = Promise.all(j.map(async Se => {
            if (Se.matches && Se.match && Se.request && Se.controller) {
                let Ce = (await ia(Se.request, Se.matches, W, Se.key))[Se.match.route.id];
                return {
                    [Se.key]: Ce
                }
            } else
                return Promise.resolve({
                    [Se.key]: {
                        type: "error",
                        error: yn(404, {
                            pathname: Se.path
                        })
                    }
                })
        }
        ))
          , we = await ie
          , fe = (await me).reduce( (Se, Ee) => Object.assign(Se, Ee), {});
        return {
            loaderResults: we,
            fetcherResults: fe
        }
    }
    function sl() {
        le = !0,
        V.forEach( (M, j) => {
            A.has(j) && J.add(j),
            An(j)
        }
        )
    }
    function Ht(M, j, Y={}) {
        _.fetchers.set(M, j),
        qe({
            fetchers: new Map(_.fetchers)
        }, {
            flushSync: (Y && Y.flushSync) === !0
        })
    }
    function it(M, j, Y, W={}) {
        let ie = or(_.matches, j);
        Ot(M),
        qe({
            errors: {
                [ie.route.id]: Y
            },
            fetchers: new Map(_.fetchers)
        }, {
            flushSync: (W && W.flushSync) === !0
        })
    }
    function Sn(M) {
        return ae.set(M, (ae.get(M) || 0) + 1),
        te.has(M) && te.delete(M),
        _.fetchers.get(M) || A2
    }
    function Ot(M) {
        let j = _.fetchers.get(M);
        A.has(M) && !(j && j.state === "loading" && re.has(M)) && An(M),
        V.delete(M),
        re.delete(M),
        T.delete(M),
        te.delete(M),
        J.delete(M),
        _.fetchers.delete(M)
    }
    function Uu(M) {
        let j = (ae.get(M) || 0) - 1;
        j <= 0 ? (ae.delete(M),
        te.add(M)) : ae.set(M, j),
        qe({
            fetchers: new Map(_.fetchers)
        })
    }
    function An(M) {
        let j = A.get(M);
        j && (j.abort(),
        A.delete(M))
    }
    function _i(M) {
        for (let j of M) {
            let Y = Sn(j)
              , W = Na(Y.data);
            _.fetchers.set(j, W)
        }
    }
    function Ha() {
        let M = []
          , j = !1;
        for (let Y of T) {
            let W = _.fetchers.get(Y);
            je(W, `Expected fetcher: ${Y}`),
            W.state === "loading" && (T.delete(Y),
            M.push(Y),
            j = !0)
        }
        return _i(M),
        j
    }
    function Ba(M) {
        let j = [];
        for (let[Y,W] of re)
            if (W < M) {
                let ie = _.fetchers.get(Y);
                je(ie, `Expected fetcher: ${Y}`),
                ie.state === "loading" && (An(Y),
                re.delete(Y),
                j.push(Y))
            }
        return _i(j),
        j.length > 0
    }
    function qn(M, j) {
        let Y = _.blockers.get(M) || si;
        return ue.get(M) !== j && ue.set(M, j),
        Y
    }
    function qa(M) {
        _.blockers.delete(M),
        ue.delete(M)
    }
    function Dn(M, j) {
        let Y = _.blockers.get(M) || si;
        je(Y.state === "unblocked" && j.state === "blocked" || Y.state === "blocked" && j.state === "blocked" || Y.state === "blocked" && j.state === "proceeding" || Y.state === "blocked" && j.state === "unblocked" || Y.state === "proceeding" && j.state === "unblocked", `Invalid blocker state transition: ${Y.state} -> ${j.state}`);
        let W = new Map(_.blockers);
        W.set(M, j),
        qe({
            blockers: W
        })
    }
    function Mi({currentLocation: M, nextLocation: j, historyAction: Y}) {
        if (ue.size === 0)
            return;
        ue.size > 1 && mt(!1, "A router only supports one blocker at a time");
        let W = Array.from(ue.entries())
          , [ie,me] = W[W.length - 1]
          , we = _.blockers.get(ie);
        if (!(we && we.state === "proceeding") && me({
            currentLocation: M,
            nextLocation: j,
            historyAction: Y
        }))
            return ie
    }
    function gr(M) {
        let j = yn(404, {
            pathname: M
        })
          , Y = m || f
          , {matches: W, route: ie} = dg(Y);
        return {
            notFoundMatches: W,
            route: ie,
            error: j
        }
    }
    function ki(M, j, Y) {
        if (R = M,
        D = j,
        S = Y || null,
        !O && _.navigation === Fc) {
            O = !0;
            let W = Li(_.location, _.matches);
            W != null && qe({
                restoreScrollPosition: W
            })
        }
        return () => {
            R = null,
            D = null,
            S = null
        }
    }
    function pr(M, j) {
        return S && S(M, j.map(W => Np(W, _.loaderData))) || M.key
    }
    function $a(M, j) {
        if (R && D) {
            let Y = pr(M, j);
            R[Y] = D()
        }
    }
    function Li(M, j) {
        if (R) {
            let Y = pr(M, j)
              , W = R[Y];
            if (typeof W == "number")
                return W
        }
        return null
    }
    function Va(M, j, Y) {
        if (a.patchRoutesOnNavigation)
            if (M) {
                if (Object.keys(M[0].params).length > 0)
                    return {
                        active: !0,
                        matches: Fo(j, Y, h, !0)
                    }
            } else
                return {
                    active: !0,
                    matches: Fo(j, Y, h, !0) || []
                };
        return {
            active: !1,
            matches: null
        }
    }
    async function Ya(M, j, Y, W) {
        if (!a.patchRoutesOnNavigation)
            return {
                type: "success",
                matches: M
            };
        let ie = M;
        for (; ; ) {
            let me = m == null
              , we = m || f
              , fe = c;
            try {
                await a.patchRoutesOnNavigation({
                    signal: Y,
                    path: j,
                    matches: ie,
                    fetcherKey: W,
                    patch: (Ce, ve) => {
                        Y.aborted || ag(Ce, ve, we, fe, u)
                    }
                })
            } catch (Ce) {
                return {
                    type: "error",
                    error: Ce,
                    partialMatches: ie
                }
            } finally {
                me && !Y.aborted && (f = [...f])
            }
            if (Y.aborted)
                return {
                    type: "aborted"
                };
            let Se = za(we, j, h);
            if (Se)
                return {
                    type: "success",
                    matches: Se
                };
            let Ee = Fo(we, j, h, !0);
            if (!Ee || ie.length === Ee.length && ie.every( (Ce, ve) => Ce.route.id === Ee[ve].route.id))
                return {
                    type: "success",
                    matches: null
                };
            ie = Ee
        }
    }
    function cl(M) {
        c = {},
        m = au(M, u, void 0, c)
    }
    function fl(M, j) {
        let Y = m == null;
        ag(M, j, m || f, c, u),
        Y && (f = [...f],
        qe({}))
    }
    return L = {
        get basename() {
            return h
        },
        get future() {
            return p
        },
        get state() {
            return _
        },
        get routes() {
            return f
        },
        get window() {
            return r
        },
        initialize: lt,
        subscribe: xt,
        enableScrollRestoration: ki,
        navigate: ln,
        fetch: Ci,
        revalidate: Cn,
        createHref: M => a.history.createHref(M),
        encodeLocation: M => a.history.encodeLocation(M),
        getFetcher: Sn,
        deleteFetcher: Uu,
        dispose: Ye,
        getBlocker: qn,
        deleteBlocker: qa,
        patchRoutes: fl,
        _internalFetchControllers: A,
        _internalSetRoutes: cl
    },
    L
}
function M2(a) {
    return a != null && ("formData"in a && a.formData != null || "body"in a && a.body !== void 0)
}
function Cf(a, r, l, o, u, c) {
    let f, m;
    if (u) {
        f = [];
        for (let g of r)
            if (f.push(g),
            g.route.id === u) {
                m = g;
                break
            }
    } else
        f = r,
        m = r[r.length - 1];
    let h = Gf(o || ".", Yf(f), rn(a.pathname, l) || a.pathname, c === "path");
    if (o == null && (h.search = a.search,
    h.hash = a.hash),
    (o == null || o === "" || o === ".") && m) {
        let g = Xf(h.search);
        if (m.route.index && !g)
            h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index";
        else if (!m.route.index && g) {
            let p = new URLSearchParams(h.search)
              , v = p.getAll("index");
            p.delete("index"),
            v.filter(R => R).forEach(R => p.append("index", R));
            let b = p.toString();
            h.search = b ? `?${b}` : ""
        }
    }
    return l !== "/" && (h.pathname = h.pathname === "/" ? l : Un([l, h.pathname])),
    ja(h)
}
function tg(a, r, l) {
    if (!l || !M2(l))
        return {
            path: r
        };
    if (l.formMethod && !Y2(l.formMethod))
        return {
            path: r,
            error: yn(405, {
                method: l.formMethod
            })
        };
    let o = () => ({
        path: r,
        error: yn(400, {
            type: "invalid-body"
        })
    })
      , c = (l.formMethod || "get").toUpperCase()
      , f = Xp(r);
    if (l.body !== void 0) {
        if (l.formEncType === "text/plain") {
            if (!an(c))
                return o();
            let v = typeof l.body == "string" ? l.body : l.body instanceof FormData || l.body instanceof URLSearchParams ? Array.from(l.body.entries()).reduce( (b, [R,S]) => `${b}${R}=${S}
`, "") : String(l.body);
            return {
                path: r,
                submission: {
                    formMethod: c,
                    formAction: f,
                    formEncType: l.formEncType,
                    formData: void 0,
                    json: void 0,
                    text: v
                }
            }
        } else if (l.formEncType === "application/json") {
            if (!an(c))
                return o();
            try {
                let v = typeof l.body == "string" ? JSON.parse(l.body) : l.body;
                return {
                    path: r,
                    submission: {
                        formMethod: c,
                        formAction: f,
                        formEncType: l.formEncType,
                        formData: void 0,
                        json: v,
                        text: void 0
                    }
                }
            } catch {
                return o()
            }
        }
    }
    je(typeof FormData == "function", "FormData is not available in this environment");
    let m, h;
    if (l.formData)
        m = _f(l.formData),
        h = l.formData;
    else if (l.body instanceof FormData)
        m = _f(l.body),
        h = l.body;
    else if (l.body instanceof URLSearchParams)
        m = l.body,
        h = ug(m);
    else if (l.body == null)
        m = new URLSearchParams,
        h = new FormData;
    else
        try {
            m = new URLSearchParams(l.body),
            h = ug(m)
        } catch {
            return o()
        }
    let g = {
        formMethod: c,
        formAction: f,
        formEncType: l && l.formEncType || "application/x-www-form-urlencoded",
        formData: h,
        json: void 0,
        text: void 0
    };
    if (an(g.formMethod))
        return {
            path: r,
            submission: g
        };
    let p = Ua(r);
    return a && p.search && Xf(p.search) && m.append("index", ""),
    p.search = `?${m}`,
    {
        path: ja(p),
        submission: g
    }
}
function ng(a, r, l, o, u, c, f, m, h, g, p, v, b, R, S, D, O, z, G) {
    var xe;
    let $ = G ? nn(G[1]) ? G[1].error : G[1].data : void 0, ee = u.createURL(c.location), L = u.createURL(h), _;
    if (p && c.errors) {
        let ge = Object.keys(c.errors)[0];
        _ = f.findIndex(le => le.route.id === ge)
    } else if (G && nn(G[1])) {
        let ge = G[0];
        _ = f.findIndex(le => le.route.id === ge) - 1
    }
    let ne = G ? G[1].statusCode : void 0
      , oe = ne && ne >= 400
      , ce = {
        currentUrl: ee,
        currentParams: ((xe = c.matches[0]) == null ? void 0 : xe.params) || {},
        nextUrl: L,
        nextParams: f[0].params,
        ...m,
        actionResult: $,
        actionStatus: ne
    }
      , he = f.map( (ge, le) => {
        let {route: J} = ge
          , A = null;
        if (_ != null && le > _ ? A = !1 : J.lazy ? A = !0 : J.loader == null ? A = !1 : p ? A = Af(J, c.loaderData, c.errors) : k2(c.loaderData, c.matches[le], ge) && (A = !0),
        A !== null)
            return Df(l, o, a, ge, g, r, A);
        let P = oe ? !1 : v || ee.pathname + ee.search === L.pathname + L.search || ee.search !== L.search || L2(c.matches[le], ge)
          , Z = {
            ...ce,
            defaultShouldRevalidate: P
        }
          , re = iu(ge, Z);
        return Df(l, o, a, ge, g, r, re, Z)
    }
    )
      , se = [];
    return S.forEach( (ge, le) => {
        if (p || !f.some(V => V.route.id === ge.routeId) || R.has(le))
            return;
        let J = za(O, ge.path, z);
        if (!J) {
            se.push({
                key: le,
                routeId: ge.routeId,
                path: ge.path,
                matches: null,
                match: null,
                request: null,
                controller: null
            });
            return
        }
        if (D.has(le))
            return;
        let A = c.fetchers.get(le)
          , P = gi(J, ge.path)
          , Z = new AbortController
          , re = tl(u, ge.path, Z.signal)
          , T = null;
        if (b.has(le))
            b.delete(le),
            T = nl(l, o, re, J, P, g, r);
        else if (A && A.state !== "idle" && A.data === void 0)
            v && (T = nl(l, o, re, J, P, g, r));
        else {
            let V = {
                ...ce,
                defaultShouldRevalidate: oe ? !1 : v
            };
            iu(P, V) && (T = nl(l, o, re, J, P, g, r, V))
        }
        T && se.push({
            key: le,
            routeId: ge.routeId,
            path: ge.path,
            matches: T,
            match: P,
            request: re,
            controller: Z
        })
    }
    ),
    {
        dsMatches: he,
        revalidatingFetchers: se
    }
}
function Af(a, r, l) {
    if (a.lazy)
        return !0;
    if (!a.loader)
        return !1;
    let o = r != null && a.id in r
      , u = l != null && l[a.id] !== void 0;
    return !o && u ? !1 : typeof a.loader == "function" && a.loader.hydrate === !0 ? !0 : !o && !u
}
function k2(a, r, l) {
    let o = !r || l.route.id !== r.route.id
      , u = !a.hasOwnProperty(l.route.id);
    return o || u
}
function L2(a, r) {
    let l = a.route.path;
    return a.pathname !== r.pathname || l != null && l.endsWith("*") && a.params["*"] !== r.params["*"]
}
function iu(a, r) {
    if (a.route.shouldRevalidate) {
        let l = a.route.shouldRevalidate(r);
        if (typeof l == "boolean")
            return l
    }
    return r.defaultShouldRevalidate
}
function ag(a, r, l, o, u) {
    let c;
    if (a) {
        let h = o[a];
        je(h, `No route found to patch children into: routeId = ${a}`),
        h.children || (h.children = []),
        c = h.children
    } else
        c = l;
    let f = r.filter(h => !c.some(g => $p(h, g)))
      , m = au(f, u, [a || "_", "patch", String((c == null ? void 0 : c.length) || "0")], o);
    c.push(...m)
}
function $p(a, r) {
    return "id"in a && "id"in r && a.id === r.id ? !0 : a.index === r.index && a.path === r.path && a.caseSensitive === r.caseSensitive ? (!a.children || a.children.length === 0) && (!r.children || r.children.length === 0) ? !0 : a.children.every( (l, o) => {
        var u;
        return (u = r.children) == null ? void 0 : u.some(c => $p(l, c))
    }
    ) : !1
}
var rg = new WeakMap
  , Vp = ({key: a, route: r, manifest: l, mapRouteProperties: o}) => {
    let u = l[r.id];
    if (je(u, "No route found in manifest"),
    !u.lazy || typeof u.lazy != "object")
        return;
    let c = u.lazy[a];
    if (!c)
        return;
    let f = rg.get(u);
    f || (f = {},
    rg.set(u, f));
    let m = f[a];
    if (m)
        return m;
    let h = (async () => {
        let g = n2(a)
          , v = u[a] !== void 0 && a !== "hasErrorBoundary";
        if (g)
            mt(!g, "Route property " + a + " is not a supported lazy route property. This property will be ignored."),
            f[a] = Promise.resolve();
        else if (v)
            mt(!1, `Route "${u.id}" has a static property "${a}" defined. The lazy property will be ignored.`);
        else {
            let b = await c();
            b != null && (Object.assign(u, {
                [a]: b
            }),
            Object.assign(u, o(u)))
        }
        typeof u.lazy == "object" && (u.lazy[a] = void 0,
        Object.values(u.lazy).every(b => b === void 0) && (u.lazy = void 0))
    }
    )();
    return f[a] = h,
    h
}
  , lg = new WeakMap;
function N2(a, r, l, o, u) {
    let c = l[a.id];
    if (je(c, "No route found in manifest"),
    !a.lazy)
        return {
            lazyRoutePromise: void 0,
            lazyHandlerPromise: void 0
        };
    if (typeof a.lazy == "function") {
        let p = lg.get(c);
        if (p)
            return {
                lazyRoutePromise: p,
                lazyHandlerPromise: p
            };
        let v = (async () => {
            je(typeof a.lazy == "function", "No lazy route function found");
            let b = await a.lazy()
              , R = {};
            for (let S in b) {
                let D = b[S];
                if (D === void 0)
                    continue;
                let O = r2(S)
                  , G = c[S] !== void 0 && S !== "hasErrorBoundary";
                O ? mt(!O, "Route property " + S + " is not a supported property to be returned from a lazy route function. This property will be ignored.") : G ? mt(!G, `Route "${c.id}" has a static property "${S}" defined but its lazy function is also returning a value for this property. The lazy route property "${S}" will be ignored.`) : R[S] = D
            }
            Object.assign(c, R),
            Object.assign(c, {
                ...o(c),
                lazy: void 0
            })
        }
        )();
        return lg.set(c, v),
        v.catch( () => {}
        ),
        {
            lazyRoutePromise: v,
            lazyHandlerPromise: v
        }
    }
    let f = Object.keys(a.lazy), m = [], h;
    for (let p of f) {
        if (u && u.includes(p))
            continue;
        let v = Vp({
            key: p,
            route: a,
            manifest: l,
            mapRouteProperties: o
        });
        v && (m.push(v),
        p === r && (h = v))
    }
    let g = m.length > 0 ? Promise.all(m).then( () => {}
    ) : void 0;
    return g == null || g.catch( () => {}
    ),
    h == null || h.catch( () => {}
    ),
    {
        lazyRoutePromise: g,
        lazyHandlerPromise: h
    }
}
async function ig(a) {
    let r = a.matches.filter(u => u.shouldLoad)
      , l = {};
    return (await Promise.all(r.map(u => u.resolve()))).forEach( (u, c) => {
        l[r[c].route.id] = u
    }
    ),
    l
}
async function z2(a) {
    return a.matches.some(r => r.route.unstable_middleware) ? Yp(a, !1, () => ig(a), (r, l) => ({
        [l]: {
            type: "error",
            result: r
        }
    })) : ig(a)
}
async function Yp(a, r, l, o) {
    let {matches: u, request: c, params: f, context: m} = a
      , h = {
        handlerResult: void 0
    };
    try {
        let g = u.flatMap(v => v.route.unstable_middleware ? v.route.unstable_middleware.map(b => [v.route.id, b]) : [])
          , p = await Gp({
            request: c,
            params: f,
            context: m
        }, g, r, h, l);
        return r ? p : h.handlerResult
    } catch (g) {
        if (!h.middlewareError)
            throw g;
        let p = await o(h.middlewareError.error, h.middlewareError.routeId);
        return h.handlerResult ? Object.assign(h.handlerResult, p) : p
    }
}
async function Gp(a, r, l, o, u, c=0) {
    let {request: f} = a;
    if (f.signal.aborted)
        throw f.signal.reason ? f.signal.reason : new Error(`Request aborted without an \`AbortSignal.reason\`: ${f.method} ${f.url}`);
    let m = r[c];
    if (!m)
        return o.handlerResult = await u(),
        o.handlerResult;
    let[h,g] = m, p = !1, v, b = async () => {
        if (p)
            throw new Error("You may only call `next()` once per middleware");
        p = !0,
        await Gp(a, r, l, o, u, c + 1)
    }
    ;
    try {
        let R = await g({
            request: a.request,
            params: a.params,
            context: a.context
        }, b);
        return p ? R === void 0 ? v : R : b()
    } catch (R) {
        throw o.middlewareError ? o.middlewareError.error !== R && (o.middlewareError = {
            routeId: h,
            error: R
        }) : o.middlewareError = {
            routeId: h,
            error: R
        },
        R
    }
}
function Pp(a, r, l, o, u) {
    let c = Vp({
        key: "unstable_middleware",
        route: o.route,
        manifest: r,
        mapRouteProperties: a
    })
      , f = N2(o.route, an(l.method) ? "action" : "loader", r, a, u);
    return {
        middleware: c,
        route: f.lazyRoutePromise,
        handler: f.lazyHandlerPromise
    }
}
function Df(a, r, l, o, u, c, f, m=null) {
    let h = !1
      , g = Pp(a, r, l, o, u);
    return {
        ...o,
        _lazyPromises: g,
        shouldLoad: f,
        unstable_shouldRevalidateArgs: m,
        unstable_shouldCallHandler(p) {
            return h = !0,
            m ? typeof p == "boolean" ? iu(o, {
                ...m,
                defaultShouldRevalidate: p
            }) : iu(o, m) : f
        },
        resolve(p) {
            return h || f || p && l.method === "GET" && (o.route.lazy || o.route.loader) ? U2({
                request: l,
                match: o,
                lazyHandlerPromise: g == null ? void 0 : g.handler,
                lazyRoutePromise: g == null ? void 0 : g.route,
                handlerOverride: p,
                scopedContext: c
            }) : Promise.resolve({
                type: "data",
                result: void 0
            })
        }
    }
}
function nl(a, r, l, o, u, c, f, m=null) {
    return o.map(h => h.route.id !== u.route.id ? {
        ...h,
        shouldLoad: !1,
        unstable_shouldRevalidateArgs: m,
        unstable_shouldCallHandler: () => !1,
        _lazyPromises: Pp(a, r, l, h, c),
        resolve: () => Promise.resolve({
            type: "data",
            result: void 0
        })
    } : Df(a, r, l, h, c, f, !0, m))
}
async function j2(a, r, l, o, u, c) {
    l.some(g => {
        var p;
        return (p = g._lazyPromises) == null ? void 0 : p.middleware
    }
    ) && await Promise.all(l.map(g => {
        var p;
        return (p = g._lazyPromises) == null ? void 0 : p.middleware
    }
    ));
    let f = {
        request: r,
        params: l[0].params,
        context: u,
        matches: l
    }
      , h = await a({
        ...f,
        fetcherKey: o,
        unstable_runClientMiddleware: g => {
            let p = f;
            return Yp(p, !1, () => g({
                ...p,
                fetcherKey: o,
                unstable_runClientMiddleware: () => {
                    throw new Error("Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler")
                }
            }), (v, b) => ({
                [b]: {
                    type: "error",
                    result: v
                }
            }))
        }
    });
    try {
        await Promise.all(l.flatMap(g => {
            var p, v;
            return [(p = g._lazyPromises) == null ? void 0 : p.handler, (v = g._lazyPromises) == null ? void 0 : v.route]
        }
        ))
    } catch {}
    return h
}
async function U2({request: a, match: r, lazyHandlerPromise: l, lazyRoutePromise: o, handlerOverride: u, scopedContext: c}) {
    let f, m, h = an(a.method), g = h ? "action" : "loader", p = v => {
        let b, R = new Promise( (O, z) => b = z);
        m = () => b(),
        a.signal.addEventListener("abort", m);
        let S = O => typeof v != "function" ? Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${g}" [routeId: ${r.route.id}]`)) : v({
            request: a,
            params: r.params,
            context: c
        }, ...O !== void 0 ? [O] : [])
          , D = (async () => {
            try {
                return {
                    type: "data",
                    result: await (u ? u(z => S(z)) : S())
                }
            } catch (O) {
                return {
                    type: "error",
                    result: O
                }
            }
        }
        )();
        return Promise.race([D, R])
    }
    ;
    try {
        let v = h ? r.route.action : r.route.loader;
        if (l || o)
            if (v) {
                let b, [R] = await Promise.all([p(v).catch(S => {
                    b = S
                }
                ), l, o]);
                if (b !== void 0)
                    throw b;
                f = R
            } else {
                await l;
                let b = h ? r.route.action : r.route.loader;
                if (b)
                    [f] = await Promise.all([p(b), o]);
                else if (g === "action") {
                    let R = new URL(a.url)
                      , S = R.pathname + R.search;
                    throw yn(405, {
                        method: a.method,
                        pathname: S,
                        routeId: r.route.id
                    })
                } else
                    return {
                        type: "data",
                        result: void 0
                    }
            }
        else if (v)
            f = await p(v);
        else {
            let b = new URL(a.url)
              , R = b.pathname + b.search;
            throw yn(404, {
                pathname: R
            })
        }
    } catch (v) {
        return {
            type: "error",
            result: v
        }
    } finally {
        m && a.signal.removeEventListener("abort", m)
    }
    return f
}
async function H2(a) {
    var o, u, c, f, m, h;
    let {result: r, type: l} = a;
    if (Qp(r)) {
        let g;
        try {
            let p = r.headers.get("Content-Type");
            p && /\bapplication\/json\b/.test(p) ? r.body == null ? g = null : g = await r.json() : g = await r.text()
        } catch (p) {
            return {
                type: "error",
                error: p
            }
        }
        return l === "error" ? {
            type: "error",
            error: new lu(r.status,r.statusText,g),
            statusCode: r.status,
            headers: r.headers
        } : {
            type: "data",
            data: g,
            statusCode: r.status,
            headers: r.headers
        }
    }
    return l === "error" ? hg(r) ? r.data instanceof Error ? {
        type: "error",
        error: r.data,
        statusCode: (o = r.init) == null ? void 0 : o.status,
        headers: (u = r.init) != null && u.headers ? new Headers(r.init.headers) : void 0
    } : {
        type: "error",
        error: new lu(((c = r.init) == null ? void 0 : c.status) || 500,void 0,r.data),
        statusCode: rl(r) ? r.status : void 0,
        headers: (f = r.init) != null && f.headers ? new Headers(r.init.headers) : void 0
    } : {
        type: "error",
        error: r,
        statusCode: rl(r) ? r.status : void 0
    } : hg(r) ? {
        type: "data",
        data: r.data,
        statusCode: (m = r.init) == null ? void 0 : m.status,
        headers: (h = r.init) != null && h.headers ? new Headers(r.init.headers) : void 0
    } : {
        type: "data",
        data: r
    }
}
function B2(a, r, l, o, u) {
    let c = a.headers.get("Location");
    if (je(c, "Redirects returned/thrown from loaders/actions must have a Location header"),
    !Pf.test(c)) {
        let f = o.slice(0, o.findIndex(m => m.route.id === l) + 1);
        c = Cf(new URL(r.url), f, u, c),
        a.headers.set("Location", c)
    }
    return a
}
function og(a, r, l) {
    if (Pf.test(a)) {
        let o = a
          , u = o.startsWith("//") ? new URL(r.protocol + o) : new URL(o)
          , c = rn(u.pathname, l) != null;
        if (u.origin === r.origin && c)
            return u.pathname + u.search + u.hash
    }
    return a
}
function tl(a, r, l, o) {
    let u = a.createURL(Xp(r)).toString()
      , c = {
        signal: l
    };
    if (o && an(o.formMethod)) {
        let {formMethod: f, formEncType: m} = o;
        c.method = f.toUpperCase(),
        m === "application/json" ? (c.headers = new Headers({
            "Content-Type": m
        }),
        c.body = JSON.stringify(o.json)) : m === "text/plain" ? c.body = o.text : m === "application/x-www-form-urlencoded" && o.formData ? c.body = _f(o.formData) : c.body = o.formData
    }
    return new Request(u,c)
}
function _f(a) {
    let r = new URLSearchParams;
    for (let[l,o] of a.entries())
        r.append(l, typeof o == "string" ? o : o.name);
    return r
}
function ug(a) {
    let r = new FormData;
    for (let[l,o] of a.entries())
        r.append(l, o);
    return r
}
function q2(a, r, l, o=!1, u=!1) {
    let c = {}, f = null, m, h = !1, g = {}, p = l && nn(l[1]) ? l[1].error : void 0;
    return a.forEach(v => {
        if (!(v.route.id in r))
            return;
        let b = v.route.id
          , R = r[b];
        if (je(!ur(R), "Cannot handle redirect results in processLoaderData"),
        nn(R)) {
            let S = R.error;
            if (p !== void 0 && (S = p,
            p = void 0),
            f = f || {},
            u)
                f[b] = S;
            else {
                let D = or(a, b);
                f[D.route.id] == null && (f[D.route.id] = S)
            }
            o || (c[b] = qp),
            h || (h = !0,
            m = rl(R.error) ? R.error.status : 500),
            R.headers && (g[b] = R.headers)
        } else
            c[b] = R.data,
            R.statusCode && R.statusCode !== 200 && !h && (m = R.statusCode),
            R.headers && (g[b] = R.headers)
    }
    ),
    p !== void 0 && l && (f = {
        [l[0]]: p
    },
    l[2] && (c[l[2]] = void 0)),
    {
        loaderData: c,
        errors: f,
        statusCode: m || 200,
        loaderHeaders: g
    }
}
function sg(a, r, l, o, u, c) {
    let {loaderData: f, errors: m} = q2(r, l, o);
    return u.filter(h => !h.matches || h.matches.some(g => g.shouldLoad)).forEach(h => {
        let {key: g, match: p, controller: v} = h
          , b = c[g];
        if (je(b, "Did not find corresponding fetcher result"),
        !(v && v.signal.aborted))
            if (nn(b)) {
                let R = or(a.matches, p == null ? void 0 : p.route.id);
                m && m[R.route.id] || (m = {
                    ...m,
                    [R.route.id]: b.error
                }),
                a.fetchers.delete(g)
            } else if (ur(b))
                je(!1, "Unhandled fetcher revalidation redirect");
            else {
                let R = Na(b.data);
                a.fetchers.set(g, R)
            }
    }
    ),
    {
        loaderData: f,
        errors: m
    }
}
function cg(a, r, l, o) {
    let u = Object.entries(r).filter( ([,c]) => c !== qp).reduce( (c, [f,m]) => (c[f] = m,
    c), {});
    for (let c of l) {
        let f = c.route.id;
        if (!r.hasOwnProperty(f) && a.hasOwnProperty(f) && c.route.loader && (u[f] = a[f]),
        o && o.hasOwnProperty(f))
            break
    }
    return u
}
function fg(a) {
    return a ? nn(a[1]) ? {
        actionData: {}
    } : {
        actionData: {
            [a[0]]: a[1].data
        }
    } : {}
}
function or(a, r) {
    return (r ? a.slice(0, a.findIndex(o => o.route.id === r) + 1) : [...a]).reverse().find(o => o.route.hasErrorBoundary === !0) || a[0]
}
function dg(a) {
    let r = a.length === 1 ? a[0] : a.find(l => l.index || !l.path || l.path === "/") || {
        id: "__shim-error-route__"
    };
    return {
        matches: [{
            params: {},
            pathname: "",
            pathnameBase: "",
            route: r
        }],
        route: r
    }
}
function yn(a, {pathname: r, routeId: l, method: o, type: u, message: c}={}) {
    let f = "Unknown Server Error"
      , m = "Unknown @remix-run/router error";
    return a === 400 ? (f = "Bad Request",
    o && r && l ? m = `You made a ${o} request to "${r}" but did not provide a \`loader\` for route "${l}", so there is no way to handle the request.` : u === "invalid-body" && (m = "Unable to encode submission body")) : a === 403 ? (f = "Forbidden",
    m = `Route "${l}" does not match URL "${r}"`) : a === 404 ? (f = "Not Found",
    m = `No route matches URL "${r}"`) : a === 405 && (f = "Method Not Allowed",
    o && r && l ? m = `You made a ${o.toUpperCase()} request to "${r}" but did not provide an \`action\` for route "${l}", so there is no way to handle the request.` : o && (m = `Invalid request method "${o.toUpperCase()}"`)),
    new lu(a || 500,f,new Error(m),!0)
}
function Go(a) {
    let r = Object.entries(a);
    for (let l = r.length - 1; l >= 0; l--) {
        let[o,u] = r[l];
        if (ur(u))
            return {
                key: o,
                result: u
            }
    }
}
function Xp(a) {
    let r = typeof a == "string" ? Ua(a) : a;
    return ja({
        ...r,
        hash: ""
    })
}
function $2(a, r) {
    return a.pathname !== r.pathname || a.search !== r.search ? !1 : a.hash === "" ? r.hash !== "" : a.hash === r.hash ? !0 : r.hash !== ""
}
function V2(a) {
    return Qp(a.result) && O2.has(a.result.status)
}
function nn(a) {
    return a.type === "error"
}
function ur(a) {
    return (a && a.type) === "redirect"
}
function hg(a) {
    return typeof a == "object" && a != null && "type"in a && "data"in a && "init"in a && a.type === "DataWithResponseInit"
}
function Qp(a) {
    return a != null && typeof a.status == "number" && typeof a.statusText == "string" && typeof a.headers == "object" && typeof a.body < "u"
}
function Y2(a) {
    return T2.has(a.toUpperCase())
}
function an(a) {
    return w2.has(a.toUpperCase())
}
function Xf(a) {
    return new URLSearchParams(a).getAll("index").some(r => r === "")
}
function gi(a, r) {
    let l = typeof r == "string" ? Ua(r).search : r.search;
    if (a[a.length - 1].route.index && Xf(l || ""))
        return a[a.length - 1];
    let o = Up(a);
    return o[o.length - 1]
}
function mg(a) {
    let {formMethod: r, formAction: l, formEncType: o, text: u, formData: c, json: f} = a;
    if (!(!r || !l || !o)) {
        if (u != null)
            return {
                formMethod: r,
                formAction: l,
                formEncType: o,
                formData: void 0,
                json: void 0,
                text: u
            };
        if (c != null)
            return {
                formMethod: r,
                formAction: l,
                formEncType: o,
                formData: c,
                json: void 0,
                text: void 0
            };
        if (f !== void 0)
            return {
                formMethod: r,
                formAction: l,
                formEncType: o,
                formData: void 0,
                json: f,
                text: void 0
            }
    }
}
function Kc(a, r) {
    return r ? {
        state: "loading",
        location: a,
        formMethod: r.formMethod,
        formAction: r.formAction,
        formEncType: r.formEncType,
        formData: r.formData,
        json: r.json,
        text: r.text
    } : {
        state: "loading",
        location: a,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    }
}
function G2(a, r) {
    return {
        state: "submitting",
        location: a,
        formMethod: r.formMethod,
        formAction: r.formAction,
        formEncType: r.formEncType,
        formData: r.formData,
        json: r.json,
        text: r.text
    }
}
function ci(a, r) {
    return a ? {
        state: "loading",
        formMethod: a.formMethod,
        formAction: a.formAction,
        formEncType: a.formEncType,
        formData: a.formData,
        json: a.json,
        text: a.text,
        data: r
    } : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: r
    }
}
function P2(a, r) {
    return {
        state: "submitting",
        formMethod: a.formMethod,
        formAction: a.formAction,
        formEncType: a.formEncType,
        formData: a.formData,
        json: a.json,
        text: a.text,
        data: r ? r.data : void 0
    }
}
function Na(a) {
    return {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: a
    }
}
function X2(a, r) {
    try {
        let l = a.sessionStorage.getItem(Bp);
        if (l) {
            let o = JSON.parse(l);
            for (let[u,c] of Object.entries(o || {}))
                c && Array.isArray(c) && r.set(u, new Set(c || []))
        }
    } catch {}
}
function Q2(a, r) {
    if (r.size > 0) {
        let l = {};
        for (let[o,u] of r)
            l[o] = [...u];
        try {
            a.sessionStorage.setItem(Bp, JSON.stringify(l))
        } catch (o) {
            mt(!1, `Failed to save applied view transitions in sessionStorage (${o}).`)
        }
    }
}
function Z2() {
    let a, r, l = new Promise( (o, u) => {
        a = async c => {
            o(c);
            try {
                await l
            } catch {}
        }
        ,
        r = async c => {
            u(c);
            try {
                await l
            } catch {}
        }
    }
    );
    return {
        promise: l,
        resolve: a,
        reject: r
    }
}
var hr = w.createContext(null);
hr.displayName = "DataRouter";
var ll = w.createContext(null);
ll.displayName = "DataRouterState";
var Qf = w.createContext({
    isTransitioning: !1
});
Qf.displayName = "ViewTransition";
var Zp = w.createContext(new Map);
Zp.displayName = "Fetchers";
var F2 = w.createContext(null);
F2.displayName = "Await";
var vn = w.createContext(null);
vn.displayName = "Navigation";
var gu = w.createContext(null);
gu.displayName = "Location";
var Hn = w.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
Hn.displayName = "Route";
var Zf = w.createContext(null);
Zf.displayName = "RouteError";
function K2(a, {relative: r}={}) {
    je(xi(), "useHref() may be used only in the context of a <Router> component.");
    let {basename: l, navigator: o} = w.useContext(vn)
      , {hash: u, pathname: c, search: f} = wi(a, {
        relative: r
    })
      , m = c;
    return l !== "/" && (m = c === "/" ? l : Un([l, c])),
    o.createHref({
        pathname: m,
        search: f,
        hash: u
    })
}
function xi() {
    return w.useContext(gu) != null
}
function aa() {
    return je(xi(), "useLocation() may be used only in the context of a <Router> component."),
    w.useContext(gu).location
}
var Fp = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Kp(a) {
    w.useContext(vn).static || w.useLayoutEffect(a)
}
function J2() {
    let {isDataRoute: a} = w.useContext(Hn);
    return a ? cS() : I2()
}
function I2() {
    je(xi(), "useNavigate() may be used only in the context of a <Router> component.");
    let a = w.useContext(hr)
      , {basename: r, navigator: l} = w.useContext(vn)
      , {matches: o} = w.useContext(Hn)
      , {pathname: u} = aa()
      , c = JSON.stringify(Yf(o))
      , f = w.useRef(!1);
    return Kp( () => {
        f.current = !0
    }
    ),
    w.useCallback( (h, g={}) => {
        if (mt(f.current, Fp),
        !f.current)
            return;
        if (typeof h == "number") {
            l.go(h);
            return
        }
        let p = Gf(h, JSON.parse(c), u, g.relative === "path");
        a == null && r !== "/" && (p.pathname = p.pathname === "/" ? r : Un([r, p.pathname])),
        (g.replace ? l.replace : l.push)(p, g.state, g)
    }
    , [r, l, c, u, a])
}
var W2 = w.createContext(null);
function eS(a) {
    let r = w.useContext(Hn).outlet;
    return r && w.createElement(W2.Provider, {
        value: a
    }, r)
}
function wi(a, {relative: r}={}) {
    let {matches: l} = w.useContext(Hn)
      , {pathname: o} = aa()
      , u = JSON.stringify(Yf(l));
    return w.useMemo( () => Gf(a, JSON.parse(u), o, r === "path"), [a, u, o, r])
}
function tS(a, r, l, o) {
    je(xi(), "useRoutes() may be used only in the context of a <Router> component.");
    let {navigator: u, static: c} = w.useContext(vn)
      , {matches: f} = w.useContext(Hn)
      , m = f[f.length - 1]
      , h = m ? m.params : {}
      , g = m ? m.pathname : "/"
      , p = m ? m.pathnameBase : "/"
      , v = m && m.route;
    {
        let G = v && v.path || "";
        ey(g, !v || G.endsWith("*") || G.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G === "/" ? "*" : `${G}/*`}">.`)
    }
    let b = aa(), R;
    R = b;
    let S = R.pathname || "/"
      , D = S;
    if (p !== "/") {
        let G = p.replace(/^\//, "").split("/");
        D = "/" + S.replace(/^\//, "").split("/").slice(G.length).join("/")
    }
    let O = !c && l && l.matches && l.matches.length > 0 ? l.matches : za(a, {
        pathname: D
    });
    return mt(v || O != null, `No routes matched location "${R.pathname}${R.search}${R.hash}" `),
    mt(O == null || O[O.length - 1].route.element !== void 0 || O[O.length - 1].route.Component !== void 0 || O[O.length - 1].route.lazy !== void 0, `Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),
    iS(O && O.map(G => Object.assign({}, G, {
        params: Object.assign({}, h, G.params),
        pathname: Un([p, u.encodeLocation ? u.encodeLocation(G.pathname).pathname : G.pathname]),
        pathnameBase: G.pathnameBase === "/" ? p : Un([p, u.encodeLocation ? u.encodeLocation(G.pathnameBase).pathname : G.pathnameBase])
    })), f, l, o)
}
function nS() {
    let a = Wp()
      , r = rl(a) ? `${a.status} ${a.statusText}` : a instanceof Error ? a.message : JSON.stringify(a)
      , l = a instanceof Error ? a.stack : null
      , o = "rgba(200,200,200, 0.5)"
      , u = {
        padding: "0.5rem",
        backgroundColor: o
    }
      , c = {
        padding: "2px 4px",
        backgroundColor: o
    }
      , f = null;
    return console.error("Error handled by React Router default ErrorBoundary:", a),
    f = w.createElement(w.Fragment, null, w.createElement("p", null, "💿 Hey developer 👋"), w.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", w.createElement("code", {
        style: c
    }, "ErrorBoundary"), " or", " ", w.createElement("code", {
        style: c
    }, "errorElement"), " prop on your route.")),
    w.createElement(w.Fragment, null, w.createElement("h2", null, "Unexpected Application Error!"), w.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, r), l ? w.createElement("pre", {
        style: u
    }, l) : null, f)
}
var aS = w.createElement(nS, null)
  , rS = class extends w.Component {
    constructor(a) {
        super(a),
        this.state = {
            location: a.location,
            revalidation: a.revalidation,
            error: a.error
        }
    }
    static getDerivedStateFromError(a) {
        return {
            error: a
        }
    }
    static getDerivedStateFromProps(a, r) {
        return r.location !== a.location || r.revalidation !== "idle" && a.revalidation === "idle" ? {
            error: a.error,
            location: a.location,
            revalidation: a.revalidation
        } : {
            error: a.error !== void 0 ? a.error : r.error,
            location: r.location,
            revalidation: a.revalidation || r.revalidation
        }
    }
    componentDidCatch(a, r) {
        console.error("React Router caught the following error during render", a, r)
    }
    render() {
        return this.state.error !== void 0 ? w.createElement(Hn.Provider, {
            value: this.props.routeContext
        }, w.createElement(Zf.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
;
function lS({routeContext: a, match: r, children: l}) {
    let o = w.useContext(hr);
    return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id),
    w.createElement(Hn.Provider, {
        value: a
    }, l)
}
function iS(a, r=[], l=null, o=null) {
    if (a == null) {
        if (!l)
            return null;
        if (l.errors)
            a = l.matches;
        else if (r.length === 0 && !l.initialized && l.matches.length > 0)
            a = l.matches;
        else
            return null
    }
    let u = a
      , c = l == null ? void 0 : l.errors;
    if (c != null) {
        let h = u.findIndex(g => g.route.id && (c == null ? void 0 : c[g.route.id]) !== void 0);
        je(h >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),
        u = u.slice(0, Math.min(u.length, h + 1))
    }
    let f = !1
      , m = -1;
    if (l)
        for (let h = 0; h < u.length; h++) {
            let g = u[h];
            if ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (m = h),
            g.route.id) {
                let {loaderData: p, errors: v} = l
                  , b = g.route.loader && !p.hasOwnProperty(g.route.id) && (!v || v[g.route.id] === void 0);
                if (g.route.lazy || b) {
                    f = !0,
                    m >= 0 ? u = u.slice(0, m + 1) : u = [u[0]];
                    break
                }
            }
        }
    return u.reduceRight( (h, g, p) => {
        let v, b = !1, R = null, S = null;
        l && (v = c && g.route.id ? c[g.route.id] : void 0,
        R = g.route.errorElement || aS,
        f && (m < 0 && p === 0 ? (ey("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"),
        b = !0,
        S = null) : m === p && (b = !0,
        S = g.route.hydrateFallbackElement || null)));
        let D = r.concat(u.slice(0, p + 1))
          , O = () => {
            let z;
            return v ? z = R : b ? z = S : g.route.Component ? z = w.createElement(g.route.Component, null) : g.route.element ? z = g.route.element : z = h,
            w.createElement(lS, {
                match: g,
                routeContext: {
                    outlet: h,
                    matches: D,
                    isDataRoute: l != null
                },
                children: z
            })
        }
        ;
        return l && (g.route.ErrorBoundary || g.route.errorElement || p === 0) ? w.createElement(rS, {
            location: l.location,
            revalidation: l.revalidation,
            component: R,
            error: v,
            children: O(),
            routeContext: {
                outlet: null,
                matches: D,
                isDataRoute: !0
            }
        }) : O()
    }
    , null)
}
function Ff(a) {
    return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function oS(a) {
    let r = w.useContext(hr);
    return je(r, Ff(a)),
    r
}
function pu(a) {
    let r = w.useContext(ll);
    return je(r, Ff(a)),
    r
}
function uS(a) {
    let r = w.useContext(Hn);
    return je(r, Ff(a)),
    r
}
function Kf(a) {
    let r = uS(a)
      , l = r.matches[r.matches.length - 1];
    return je(l.route.id, `${a} can only be used on routes that contain a unique "id"`),
    l.route.id
}
function sS() {
    return Kf("useRouteId")
}
function Jp() {
    return pu("useNavigation").navigation
}
function Ip() {
    let {matches: a, loaderData: r} = pu("useMatches");
    return w.useMemo( () => a.map(l => Np(l, r)), [a, r])
}
function Ox(a) {
    return pu("useRouteLoaderData").loaderData[a]
}
function Wp() {
    var o;
    let a = w.useContext(Zf)
      , r = pu("useRouteError")
      , l = Kf("useRouteError");
    return a !== void 0 ? a : (o = r.errors) == null ? void 0 : o[l]
}
function cS() {
    let {router: a} = oS("useNavigate")
      , r = Kf("useNavigate")
      , l = w.useRef(!1);
    return Kp( () => {
        l.current = !0
    }
    ),
    w.useCallback(async (u, c={}) => {
        mt(l.current, Fp),
        l.current && (typeof u == "number" ? a.navigate(u) : await a.navigate(u, {
            fromRouteId: r,
            ...c
        }))
    }
    , [a, r])
}
var gg = {};
function ey(a, r, l) {
    !r && !gg[a] && (gg[a] = !0,
    mt(!1, l))
}
var pg = {};
function yg(a, r) {
    !a && !pg[r] && (pg[r] = !0,
    console.warn(r))
}
function fS(a) {
    let r = {
        hasErrorBoundary: a.hasErrorBoundary || a.ErrorBoundary != null || a.errorElement != null
    };
    return a.Component && (a.element && mt(!1, "You should not include both `Component` and `element` on your route - `Component` will be used."),
    Object.assign(r, {
        element: w.createElement(a.Component),
        Component: void 0
    })),
    a.HydrateFallback && (a.hydrateFallbackElement && mt(!1, "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),
    Object.assign(r, {
        hydrateFallbackElement: w.createElement(a.HydrateFallback),
        HydrateFallback: void 0
    })),
    a.ErrorBoundary && (a.errorElement && mt(!1, "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),
    Object.assign(r, {
        errorElement: w.createElement(a.ErrorBoundary),
        ErrorBoundary: void 0
    })),
    r
}
var dS = ["HydrateFallback", "hydrateFallbackElement"]
  , hS = class {
    constructor() {
        this.status = "pending",
        this.promise = new Promise( (a, r) => {
            this.resolve = l => {
                this.status === "pending" && (this.status = "resolved",
                a(l))
            }
            ,
            this.reject = l => {
                this.status === "pending" && (this.status = "rejected",
                r(l))
            }
        }
        )
    }
}
;
function mS({router: a, flushSync: r}) {
    let[l,o] = w.useState(a.state)
      , [u,c] = w.useState()
      , [f,m] = w.useState({
        isTransitioning: !1
    })
      , [h,g] = w.useState()
      , [p,v] = w.useState()
      , [b,R] = w.useState()
      , S = w.useRef(new Map)
      , D = w.useCallback( ($, {deletedFetchers: ee, flushSync: L, viewTransitionOpts: _}) => {
        $.fetchers.forEach( (oe, ce) => {
            oe.data !== void 0 && S.current.set(ce, oe.data)
        }
        ),
        ee.forEach(oe => S.current.delete(oe)),
        yg(L === !1 || r != null, 'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');
        let ne = a.window != null && a.window.document != null && typeof a.window.document.startViewTransition == "function";
        if (yg(_ == null || ne, "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),
        !_ || !ne) {
            r && L ? r( () => o($)) : w.startTransition( () => o($));
            return
        }
        if (r && L) {
            r( () => {
                p && (h && h.resolve(),
                p.skipTransition()),
                m({
                    isTransitioning: !0,
                    flushSync: !0,
                    currentLocation: _.currentLocation,
                    nextLocation: _.nextLocation
                })
            }
            );
            let oe = a.window.document.startViewTransition( () => {
                r( () => o($))
            }
            );
            oe.finished.finally( () => {
                r( () => {
                    g(void 0),
                    v(void 0),
                    c(void 0),
                    m({
                        isTransitioning: !1
                    })
                }
                )
            }
            ),
            r( () => v(oe));
            return
        }
        p ? (h && h.resolve(),
        p.skipTransition(),
        R({
            state: $,
            currentLocation: _.currentLocation,
            nextLocation: _.nextLocation
        })) : (c($),
        m({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: _.currentLocation,
            nextLocation: _.nextLocation
        }))
    }
    , [a.window, r, p, h]);
    w.useLayoutEffect( () => a.subscribe(D), [a, D]),
    w.useEffect( () => {
        f.isTransitioning && !f.flushSync && g(new hS)
    }
    , [f]),
    w.useEffect( () => {
        if (h && u && a.window) {
            let $ = u
              , ee = h.promise
              , L = a.window.document.startViewTransition(async () => {
                w.startTransition( () => o($)),
                await ee
            }
            );
            L.finished.finally( () => {
                g(void 0),
                v(void 0),
                c(void 0),
                m({
                    isTransitioning: !1
                })
            }
            ),
            v(L)
        }
    }
    , [u, h, a.window]),
    w.useEffect( () => {
        h && u && l.location.key === u.location.key && h.resolve()
    }
    , [h, p, l.location, u]),
    w.useEffect( () => {
        !f.isTransitioning && b && (c(b.state),
        m({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: b.currentLocation,
            nextLocation: b.nextLocation
        }),
        R(void 0))
    }
    , [f.isTransitioning, b]);
    let O = w.useMemo( () => ({
        createHref: a.createHref,
        encodeLocation: a.encodeLocation,
        go: $ => a.navigate($),
        push: ($, ee, L) => a.navigate($, {
            state: ee,
            preventScrollReset: L == null ? void 0 : L.preventScrollReset
        }),
        replace: ($, ee, L) => a.navigate($, {
            replace: !0,
            state: ee,
            preventScrollReset: L == null ? void 0 : L.preventScrollReset
        })
    }), [a])
      , z = a.basename || "/"
      , G = w.useMemo( () => ({
        router: a,
        navigator: O,
        static: !1,
        basename: z
    }), [a, O, z]);
    return w.createElement(w.Fragment, null, w.createElement(hr.Provider, {
        value: G
    }, w.createElement(ll.Provider, {
        value: l
    }, w.createElement(Zp.Provider, {
        value: S.current
    }, w.createElement(Qf.Provider, {
        value: f
    }, w.createElement(vS, {
        basename: z,
        location: l.location,
        navigationType: l.historyAction,
        navigator: O
    }, w.createElement(gS, {
        routes: a.routes,
        future: a.future,
        state: l
    })))))), null)
}
var gS = w.memo(pS);
function pS({routes: a, future: r, state: l}) {
    return tS(a, void 0, l, r)
}
function yS(a) {
    return eS(a.context)
}
function vS({basename: a="/", children: r=null, location: l, navigationType: o="POP", navigator: u, static: c=!1}) {
    je(!xi(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let f = a.replace(/^\/*/, "/")
      , m = w.useMemo( () => ({
        basename: f,
        navigator: u,
        static: c,
        future: {}
    }), [f, u, c]);
    typeof l == "string" && (l = Ua(l));
    let {pathname: h="/", search: g="", hash: p="", state: v=null, key: b="default"} = l
      , R = w.useMemo( () => {
        let S = rn(h, f);
        return S == null ? null : {
            location: {
                pathname: S,
                search: g,
                hash: p,
                state: v,
                key: b
            },
            navigationType: o
        }
    }
    , [f, h, g, p, v, b, o]);
    return mt(R != null, `<Router basename="${f}"> is not able to match the URL "${h}${g}${p}" because it does not start with the basename, so the <Router> won't render anything.`),
    R == null ? null : w.createElement(vn.Provider, {
        value: m
    }, w.createElement(gu.Provider, {
        children: r,
        value: R
    }))
}
var Ko = "get"
  , Jo = "application/x-www-form-urlencoded";
function yu(a) {
    return a != null && typeof a.tagName == "string"
}
function bS(a) {
    return yu(a) && a.tagName.toLowerCase() === "button"
}
function SS(a) {
    return yu(a) && a.tagName.toLowerCase() === "form"
}
function ES(a) {
    return yu(a) && a.tagName.toLowerCase() === "input"
}
function xS(a) {
    return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey)
}
function wS(a, r) {
    return a.button === 0 && (!r || r === "_self") && !xS(a)
}
var Po = null;
function RS() {
    if (Po === null)
        try {
            new FormData(document.createElement("form"),0),
            Po = !1
        } catch {
            Po = !0
        }
    return Po
}
var TS = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function Jc(a) {
    return a != null && !TS.has(a) ? (mt(!1, `"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Jo}"`),
    null) : a
}
function OS(a, r) {
    let l, o, u, c, f;
    if (SS(a)) {
        let m = a.getAttribute("action");
        o = m ? rn(m, r) : null,
        l = a.getAttribute("method") || Ko,
        u = Jc(a.getAttribute("enctype")) || Jo,
        c = new FormData(a)
    } else if (bS(a) || ES(a) && (a.type === "submit" || a.type === "image")) {
        let m = a.form;
        if (m == null)
            throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let h = a.getAttribute("formaction") || m.getAttribute("action");
        if (o = h ? rn(h, r) : null,
        l = a.getAttribute("formmethod") || m.getAttribute("method") || Ko,
        u = Jc(a.getAttribute("formenctype")) || Jc(m.getAttribute("enctype")) || Jo,
        c = new FormData(m,a),
        !RS()) {
            let {name: g, type: p, value: v} = a;
            if (p === "image") {
                let b = g ? `${g}.` : "";
                c.append(`${b}x`, "0"),
                c.append(`${b}y`, "0")
            } else
                g && c.append(g, v)
        }
    } else {
        if (yu(a))
            throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        l = Ko,
        o = null,
        u = Jo,
        f = a
    }
    return c && u === "text/plain" && (f = c,
    c = void 0),
    {
        action: o,
        method: l.toLowerCase(),
        encType: u,
        formData: c,
        body: f
    }
}
function Jf(a, r) {
    if (a === !1 || a === null || typeof a > "u")
        throw new Error(r)
}
async function CS(a, r) {
    if (a.id in r)
        return r[a.id];
    try {
        let l = await import(a.module);
        return r[a.id] = l,
        l
    } catch (l) {
        return console.error(`Error loading route module \`${a.module}\`, reloading page...`),
        console.error(l),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise( () => {}
        )
    }
}
function AS(a) {
    return a == null ? !1 : a.href == null ? a.rel === "preload" && typeof a.imageSrcSet == "string" && typeof a.imageSizes == "string" : typeof a.rel == "string" && typeof a.href == "string"
}
async function DS(a, r, l) {
    let o = await Promise.all(a.map(async u => {
        let c = r.routes[u.route.id];
        if (c) {
            let f = await CS(c, l);
            return f.links ? f.links() : []
        }
        return []
    }
    ));
    return LS(o.flat(1).filter(AS).filter(u => u.rel === "stylesheet" || u.rel === "preload").map(u => u.rel === "stylesheet" ? {
        ...u,
        rel: "prefetch",
        as: "style"
    } : {
        ...u,
        rel: "prefetch"
    }))
}
function vg(a, r, l, o, u, c) {
    let f = (h, g) => l[g] ? h.route.id !== l[g].route.id : !0
      , m = (h, g) => {
        var p;
        return l[g].pathname !== h.pathname || ((p = l[g].route.path) == null ? void 0 : p.endsWith("*")) && l[g].params["*"] !== h.params["*"]
    }
    ;
    return c === "assets" ? r.filter( (h, g) => f(h, g) || m(h, g)) : c === "data" ? r.filter( (h, g) => {
        var v;
        let p = o.routes[h.route.id];
        if (!p || !p.hasLoader)
            return !1;
        if (f(h, g) || m(h, g))
            return !0;
        if (h.route.shouldRevalidate) {
            let b = h.route.shouldRevalidate({
                currentUrl: new URL(u.pathname + u.search + u.hash,window.origin),
                currentParams: ((v = l[0]) == null ? void 0 : v.params) || {},
                nextUrl: new URL(a,window.origin),
                nextParams: h.params,
                defaultShouldRevalidate: !0
            });
            if (typeof b == "boolean")
                return b
        }
        return !0
    }
    ) : []
}
function _S(a, r, {includeHydrateFallback: l}={}) {
    return MS(a.map(o => {
        let u = r.routes[o.route.id];
        if (!u)
            return [];
        let c = [u.module];
        return u.clientActionModule && (c = c.concat(u.clientActionModule)),
        u.clientLoaderModule && (c = c.concat(u.clientLoaderModule)),
        l && u.hydrateFallbackModule && (c = c.concat(u.hydrateFallbackModule)),
        u.imports && (c = c.concat(u.imports)),
        c
    }
    ).flat(1))
}
function MS(a) {
    return [...new Set(a)]
}
function kS(a) {
    let r = {}
      , l = Object.keys(a).sort();
    for (let o of l)
        r[o] = a[o];
    return r
}
function LS(a, r) {
    let l = new Set;
    return new Set(r),
    a.reduce( (o, u) => {
        let c = JSON.stringify(kS(u));
        return l.has(c) || (l.add(c),
        o.push({
            key: c,
            link: u
        })),
        o
    }
    , [])
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var NS = new Set([100, 101, 204, 205]);
function zS(a, r) {
    let l = typeof a == "string" ? new URL(a,typeof window > "u" ? "server://singlefetch/" : window.location.origin) : a;
    return l.pathname === "/" ? l.pathname = "_root.data" : r && rn(l.pathname, r) === "/" ? l.pathname = `${r.replace(/\/$/, "")}/_root.data` : l.pathname = `${l.pathname.replace(/\/$/, "")}.data`,
    l
}
function ty() {
    let a = w.useContext(hr);
    return Jf(a, "You must render this element inside a <DataRouterContext.Provider> element"),
    a
}
function jS() {
    let a = w.useContext(ll);
    return Jf(a, "You must render this element inside a <DataRouterStateContext.Provider> element"),
    a
}
var vu = w.createContext(void 0);
vu.displayName = "FrameworkContext";
function ny() {
    let a = w.useContext(vu);
    return Jf(a, "You must render this element inside a <HydratedRouter> element"),
    a
}
function US(a, r) {
    let l = w.useContext(vu)
      , [o,u] = w.useState(!1)
      , [c,f] = w.useState(!1)
      , {onFocus: m, onBlur: h, onMouseEnter: g, onMouseLeave: p, onTouchStart: v} = r
      , b = w.useRef(null);
    w.useEffect( () => {
        if (a === "render" && f(!0),
        a === "viewport") {
            let D = z => {
                z.forEach(G => {
                    f(G.isIntersecting)
                }
                )
            }
              , O = new IntersectionObserver(D,{
                threshold: .5
            });
            return b.current && O.observe(b.current),
            () => {
                O.disconnect()
            }
        }
    }
    , [a]),
    w.useEffect( () => {
        if (o) {
            let D = setTimeout( () => {
                f(!0)
            }
            , 100);
            return () => {
                clearTimeout(D)
            }
        }
    }
    , [o]);
    let R = () => {
        u(!0)
    }
      , S = () => {
        u(!1),
        f(!1)
    }
    ;
    return l ? a !== "intent" ? [c, b, {}] : [c, b, {
        onFocus: fi(m, R),
        onBlur: fi(h, S),
        onMouseEnter: fi(g, R),
        onMouseLeave: fi(p, S),
        onTouchStart: fi(v, R)
    }] : [!1, b, {}]
}
function fi(a, r) {
    return l => {
        a && a(l),
        l.defaultPrevented || r(l)
    }
}
function HS({page: a, ...r}) {
    let {router: l} = ty()
      , o = w.useMemo( () => za(l.routes, a, l.basename), [l.routes, a, l.basename]);
    return o ? w.createElement(qS, {
        page: a,
        matches: o,
        ...r
    }) : null
}
function BS(a) {
    let {manifest: r, routeModules: l} = ny()
      , [o,u] = w.useState([]);
    return w.useEffect( () => {
        let c = !1;
        return DS(a, r, l).then(f => {
            c || u(f)
        }
        ),
        () => {
            c = !0
        }
    }
    , [a, r, l]),
    o
}
function qS({page: a, matches: r, ...l}) {
    let o = aa()
      , {manifest: u, routeModules: c} = ny()
      , {basename: f} = ty()
      , {loaderData: m, matches: h} = jS()
      , g = w.useMemo( () => vg(a, r, h, u, o, "data"), [a, r, h, u, o])
      , p = w.useMemo( () => vg(a, r, h, u, o, "assets"), [a, r, h, u, o])
      , v = w.useMemo( () => {
        if (a === o.pathname + o.search + o.hash)
            return [];
        let S = new Set
          , D = !1;
        if (r.forEach(z => {
            var $;
            let G = u.routes[z.route.id];
            !G || !G.hasLoader || (!g.some(ee => ee.route.id === z.route.id) && z.route.id in m && (($ = c[z.route.id]) != null && $.shouldRevalidate) || G.hasClientLoader ? D = !0 : S.add(z.route.id))
        }
        ),
        S.size === 0)
            return [];
        let O = zS(a, f);
        return D && S.size > 0 && O.searchParams.set("_routes", r.filter(z => S.has(z.route.id)).map(z => z.route.id).join(",")),
        [O.pathname + O.search]
    }
    , [f, m, o, u, g, r, a, c])
      , b = w.useMemo( () => _S(p, u), [p, u])
      , R = BS(p);
    return w.createElement(w.Fragment, null, v.map(S => w.createElement("link", {
        key: S,
        rel: "prefetch",
        as: "fetch",
        href: S,
        ...l
    })), b.map(S => w.createElement("link", {
        key: S,
        rel: "modulepreload",
        href: S,
        ...l
    })), R.map( ({key: S, link: D}) => w.createElement("link", {
        key: S,
        ...D
    })))
}
function $S(...a) {
    return r => {
        a.forEach(l => {
            typeof l == "function" ? l(r) : l != null && (l.current = r)
        }
        )
    }
}
var ay = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    ay && (window.__reactRouterVersion = "7.6.0")
} catch {}
function VS(a, r) {
    return _2({
        basename: r == null ? void 0 : r.basename,
        unstable_getContext: r == null ? void 0 : r.unstable_getContext,
        future: r == null ? void 0 : r.future,
        history: Ib({
            window: r == null ? void 0 : r.window
        }),
        hydrationData: (r == null ? void 0 : r.hydrationData) || YS(),
        routes: a,
        mapRouteProperties: fS,
        hydrationRouteProperties: dS,
        dataStrategy: r == null ? void 0 : r.dataStrategy,
        patchRoutesOnNavigation: r == null ? void 0 : r.patchRoutesOnNavigation,
        window: r == null ? void 0 : r.window
    }).initialize()
}
function YS() {
    let a = window == null ? void 0 : window.__staticRouterHydrationData;
    return a && a.errors && (a = {
        ...a,
        errors: GS(a.errors)
    }),
    a
}
function GS(a) {
    if (!a)
        return null;
    let r = Object.entries(a)
      , l = {};
    for (let[o,u] of r)
        if (u && u.__type === "RouteErrorResponse")
            l[o] = new lu(u.status,u.statusText,u.data,u.internal === !0);
        else if (u && u.__type === "Error") {
            if (u.__subType) {
                let c = window[u.__subType];
                if (typeof c == "function")
                    try {
                        let f = new c(u.message);
                        f.stack = "",
                        l[o] = f
                    } catch {}
            }
            if (l[o] == null) {
                let c = new Error(u.message);
                c.stack = "",
                l[o] = c
            }
        } else
            l[o] = u;
    return l
}
var ry = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , ly = w.forwardRef(function({onClick: r, discover: l="render", prefetch: o="none", relative: u, reloadDocument: c, replace: f, state: m, target: h, to: g, preventScrollReset: p, viewTransition: v, ...b}, R) {
    let {basename: S} = w.useContext(vn), D = typeof g == "string" && ry.test(g), O, z = !1;
    if (typeof g == "string" && D && (O = g,
    ay))
        try {
            let ce = new URL(window.location.href)
              , he = g.startsWith("//") ? new URL(ce.protocol + g) : new URL(g)
              , se = rn(he.pathname, S);
            he.origin === ce.origin && se != null ? g = se + he.search + he.hash : z = !0
        } catch {
            mt(!1, `<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
    let G = K2(g, {
        relative: u
    })
      , [$,ee,L] = US(o, b)
      , _ = ZS(g, {
        replace: f,
        state: m,
        target: h,
        preventScrollReset: p,
        relative: u,
        viewTransition: v
    });
    function ne(ce) {
        r && r(ce),
        ce.defaultPrevented || _(ce)
    }
    let oe = w.createElement("a", {
        ...b,
        ...L,
        href: O || G,
        onClick: z || c ? r : ne,
        ref: $S(R, ee),
        target: h,
        "data-discover": !D && l === "render" ? "true" : void 0
    });
    return $ && !D ? w.createElement(w.Fragment, null, oe, w.createElement(HS, {
        page: G
    })) : oe
});
ly.displayName = "Link";
var PS = w.forwardRef(function({"aria-current": r="page", caseSensitive: l=!1, className: o="", end: u=!1, style: c, to: f, viewTransition: m, children: h, ...g}, p) {
    let v = wi(f, {
        relative: g.relative
    })
      , b = aa()
      , R = w.useContext(ll)
      , {navigator: S, basename: D} = w.useContext(vn)
      , O = R != null && t5(v) && m === !0
      , z = S.encodeLocation ? S.encodeLocation(v).pathname : v.pathname
      , G = b.pathname
      , $ = R && R.navigation && R.navigation.location ? R.navigation.location.pathname : null;
    l || (G = G.toLowerCase(),
    $ = $ ? $.toLowerCase() : null,
    z = z.toLowerCase()),
    $ && D && ($ = rn($, D) || $);
    const ee = z !== "/" && z.endsWith("/") ? z.length - 1 : z.length;
    let L = G === z || !u && G.startsWith(z) && G.charAt(ee) === "/", _ = $ != null && ($ === z || !u && $.startsWith(z) && $.charAt(z.length) === "/"), ne = {
        isActive: L,
        isPending: _,
        isTransitioning: O
    }, oe = L ? r : void 0, ce;
    typeof o == "function" ? ce = o(ne) : ce = [o, L ? "active" : null, _ ? "pending" : null, O ? "transitioning" : null].filter(Boolean).join(" ");
    let he = typeof c == "function" ? c(ne) : c;
    return w.createElement(ly, {
        ...g,
        "aria-current": oe,
        className: ce,
        ref: p,
        style: he,
        to: f,
        viewTransition: m
    }, typeof h == "function" ? h(ne) : h)
});
PS.displayName = "NavLink";
var XS = w.forwardRef( ({discover: a="render", fetcherKey: r, navigate: l, reloadDocument: o, replace: u, state: c, method: f=Ko, action: m, onSubmit: h, relative: g, preventScrollReset: p, viewTransition: v, ...b}, R) => {
    let S = JS()
      , D = IS(m, {
        relative: g
    })
      , O = f.toLowerCase() === "get" ? "get" : "post"
      , z = typeof m == "string" && ry.test(m)
      , G = $ => {
        if (h && h($),
        $.defaultPrevented)
            return;
        $.preventDefault();
        let ee = $.nativeEvent.submitter
          , L = (ee == null ? void 0 : ee.getAttribute("formmethod")) || f;
        S(ee || $.currentTarget, {
            fetcherKey: r,
            method: L,
            navigate: l,
            replace: u,
            state: c,
            relative: g,
            preventScrollReset: p,
            viewTransition: v
        })
    }
    ;
    return w.createElement("form", {
        ref: R,
        method: O,
        action: D,
        onSubmit: o ? h : G,
        ...b,
        "data-discover": !z && a === "render" ? "true" : void 0
    })
}
);
XS.displayName = "Form";
function iy({getKey: a, storageKey: r, ...l}) {
    let o = w.useContext(vu)
      , {basename: u} = w.useContext(vn)
      , c = aa()
      , f = Ip();
    WS({
        getKey: a,
        storageKey: r
    });
    let m = w.useMemo( () => {
        if (!o || !a)
            return null;
        let g = kf(c, f, u, a);
        return g !== c.key ? g : null
    }
    , []);
    if (!o || o.isSpaMode)
        return null;
    let h = ( (g, p) => {
        if (!window.history.state || !window.history.state.key) {
            let v = Math.random().toString(32).slice(2);
            window.history.replaceState({
                key: v
            }, "")
        }
        try {
            let b = JSON.parse(sessionStorage.getItem(g) || "{}")[p || window.history.state.key];
            typeof b == "number" && window.scrollTo(0, b)
        } catch (v) {
            console.error(v),
            sessionStorage.removeItem(g)
        }
    }
    ).toString();
    return w.createElement("script", {
        ...l,
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: {
            __html: `(${h})(${JSON.stringify(r || Mf)}, ${JSON.stringify(m)})`
        }
    })
}
iy.displayName = "ScrollRestoration";
function oy(a) {
    return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function If(a) {
    let r = w.useContext(hr);
    return je(r, oy(a)),
    r
}
function QS(a) {
    let r = w.useContext(ll);
    return je(r, oy(a)),
    r
}
function ZS(a, {target: r, replace: l, state: o, preventScrollReset: u, relative: c, viewTransition: f}={}) {
    let m = J2()
      , h = aa()
      , g = wi(a, {
        relative: c
    });
    return w.useCallback(p => {
        if (wS(p, r)) {
            p.preventDefault();
            let v = l !== void 0 ? l : ja(h) === ja(g);
            m(a, {
                replace: v,
                state: o,
                preventScrollReset: u,
                relative: c,
                viewTransition: f
            })
        }
    }
    , [h, m, g, l, o, r, a, u, c, f])
}
var FS = 0
  , KS = () => `__${String(++FS)}__`;
function JS() {
    let {router: a} = If("useSubmit")
      , {basename: r} = w.useContext(vn)
      , l = sS();
    return w.useCallback(async (o, u={}) => {
        let {action: c, method: f, encType: m, formData: h, body: g} = OS(o, r);
        if (u.navigate === !1) {
            let p = u.fetcherKey || KS();
            await a.fetch(p, l, u.action || c, {
                preventScrollReset: u.preventScrollReset,
                formData: h,
                body: g,
                formMethod: u.method || f,
                formEncType: u.encType || m,
                flushSync: u.flushSync
            })
        } else
            await a.navigate(u.action || c, {
                preventScrollReset: u.preventScrollReset,
                formData: h,
                body: g,
                formMethod: u.method || f,
                formEncType: u.encType || m,
                replace: u.replace,
                state: u.state,
                fromRouteId: l,
                flushSync: u.flushSync,
                viewTransition: u.viewTransition
            })
    }
    , [a, r, l])
}
function IS(a, {relative: r}={}) {
    let {basename: l} = w.useContext(vn)
      , o = w.useContext(Hn);
    je(o, "useFormAction must be used inside a RouteContext");
    let[u] = o.matches.slice(-1)
      , c = {
        ...wi(a || ".", {
            relative: r
        })
    }
      , f = aa();
    if (a == null) {
        c.search = f.search;
        let m = new URLSearchParams(c.search)
          , h = m.getAll("index");
        if (h.some(p => p === "")) {
            m.delete("index"),
            h.filter(v => v).forEach(v => m.append("index", v));
            let p = m.toString();
            c.search = p ? `?${p}` : ""
        }
    }
    return (!a || a === ".") && u.route.index && (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    l !== "/" && (c.pathname = c.pathname === "/" ? l : Un([l, c.pathname])),
    ja(c)
}
var Mf = "react-router-scroll-positions"
  , Xo = {};
function kf(a, r, l, o) {
    let u = null;
    return o && (l !== "/" ? u = o({
        ...a,
        pathname: rn(a.pathname, l) || a.pathname
    }, r) : u = o(a, r)),
    u == null && (u = a.key),
    u
}
function WS({getKey: a, storageKey: r}={}) {
    let {router: l} = If("useScrollRestoration")
      , {restoreScrollPosition: o, preventScrollReset: u} = QS("useScrollRestoration")
      , {basename: c} = w.useContext(vn)
      , f = aa()
      , m = Ip()
      , h = Jp();
    w.useEffect( () => (window.history.scrollRestoration = "manual",
    () => {
        window.history.scrollRestoration = "auto"
    }
    ), []),
    e5(w.useCallback( () => {
        if (h.state === "idle") {
            let g = kf(f, m, c, a);
            Xo[g] = window.scrollY
        }
        try {
            sessionStorage.setItem(r || Mf, JSON.stringify(Xo))
        } catch (g) {
            mt(!1, `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${g}).`)
        }
        window.history.scrollRestoration = "auto"
    }
    , [h.state, a, c, f, m, r])),
    typeof document < "u" && (w.useLayoutEffect( () => {
        try {
            let g = sessionStorage.getItem(r || Mf);
            g && (Xo = JSON.parse(g))
        } catch {}
    }
    , [r]),
    w.useLayoutEffect( () => {
        let g = l == null ? void 0 : l.enableScrollRestoration(Xo, () => window.scrollY, a ? (p, v) => kf(p, v, c, a) : void 0);
        return () => g && g()
    }
    , [l, c, a]),
    w.useLayoutEffect( () => {
        if (o !== !1) {
            if (typeof o == "number") {
                window.scrollTo(0, o);
                return
            }
            if (f.hash) {
                let g = document.getElementById(decodeURIComponent(f.hash.slice(1)));
                if (g) {
                    g.scrollIntoView();
                    return
                }
            }
            u !== !0 && window.scrollTo(0, 0)
        }
    }
    , [f, o, u]))
}
function e5(a, r) {
    let {capture: l} = {};
    w.useEffect( () => {
        let o = l != null ? {
            capture: l
        } : void 0;
        return window.addEventListener("pagehide", a, o),
        () => {
            window.removeEventListener("pagehide", a, o)
        }
    }
    , [a, l])
}
function t5(a, r={}) {
    let l = w.useContext(Qf);
    je(l != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {basename: o} = If("useViewTransitionState")
      , u = wi(a, {
        relative: r.relative
    });
    if (!l.isTransitioning)
        return !1;
    let c = rn(l.currentLocation.pathname, o) || l.currentLocation.pathname
      , f = rn(l.nextLocation.pathname, o) || l.nextLocation.pathname;
    return ru(u.pathname, f) != null || ru(u.pathname, c) != null
}
[...NS];
var Ic, bg;
function Wf() {
    if (bg)
        return Ic;
    bg = 1;
    function a(r) {
        var l = typeof r;
        return r != null && (l == "object" || l == "function")
    }
    return Ic = a,
    Ic
}
var n5 = Wf();
const a5 = na(n5);
var Wc = {
    exports: {}
}, ef, Sg;
function r5() {
    if (Sg)
        return ef;
    Sg = 1;
    var a = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    return ef = a,
    ef
}
var tf, Eg;
function l5() {
    if (Eg)
        return tf;
    Eg = 1;
    var a = r5();
    function r() {}
    function l() {}
    return l.resetWarningCache = r,
    tf = function() {
        function o(f, m, h, g, p, v) {
            if (v !== a) {
                var b = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw b.name = "Invariant Violation",
                b
            }
        }
        o.isRequired = o;
        function u() {
            return o
        }
        var c = {
            array: o,
            bigint: o,
            bool: o,
            func: o,
            number: o,
            object: o,
            string: o,
            symbol: o,
            any: o,
            arrayOf: u,
            element: o,
            elementType: o,
            instanceOf: u,
            node: o,
            objectOf: u,
            oneOf: u,
            oneOfType: u,
            shape: u,
            exact: u,
            checkPropTypes: l,
            resetWarningCache: r
        };
        return c.PropTypes = c,
        c
    }
    ,
    tf
}
var xg;
function i5() {
    return xg || (xg = 1,
    Wc.exports = l5()()),
    Wc.exports
}
var o5 = i5();
const x = na(o5);
var nf, wg;
function u5() {
    if (wg)
        return nf;
    wg = 1;
    var a = typeof Yo == "object" && Yo && Yo.Object === Object && Yo;
    return nf = a,
    nf
}
var af, Rg;
function uy() {
    if (Rg)
        return af;
    Rg = 1;
    var a = u5()
      , r = typeof self == "object" && self && self.Object === Object && self
      , l = a || r || Function("return this")();
    return af = l,
    af
}
var rf, Tg;
function sy() {
    if (Tg)
        return rf;
    Tg = 1;
    var a = uy()
      , r = a.Symbol;
    return rf = r,
    rf
}
var lf, Og;
function s5() {
    if (Og)
        return lf;
    Og = 1;
    var a = sy()
      , r = Object.prototype
      , l = r.hasOwnProperty
      , o = r.toString
      , u = a ? a.toStringTag : void 0;
    function c(f) {
        var m = l.call(f, u)
          , h = f[u];
        try {
            f[u] = void 0;
            var g = !0
        } catch {}
        var p = o.call(f);
        return g && (m ? f[u] = h : delete f[u]),
        p
    }
    return lf = c,
    lf
}
var of, Cg;
function c5() {
    if (Cg)
        return of;
    Cg = 1;
    var a = Object.prototype
      , r = a.toString;
    function l(o) {
        return r.call(o)
    }
    return of = l,
    of
}
var uf, Ag;
function cy() {
    if (Ag)
        return uf;
    Ag = 1;
    var a = sy()
      , r = s5()
      , l = c5()
      , o = "[object Null]"
      , u = "[object Undefined]"
      , c = a ? a.toStringTag : void 0;
    function f(m) {
        return m == null ? m === void 0 ? u : o : c && c in Object(m) ? r(m) : l(m)
    }
    return uf = f,
    uf
}
var sf, Dg;
function f5() {
    if (Dg)
        return sf;
    Dg = 1;
    var a = Array.isArray;
    return sf = a,
    sf
}
var cf, _g;
function fy() {
    if (_g)
        return cf;
    _g = 1;
    function a(r) {
        return r != null && typeof r == "object"
    }
    return cf = a,
    cf
}
var ff, Mg;
function d5() {
    if (Mg)
        return ff;
    Mg = 1;
    var a = cy()
      , r = f5()
      , l = fy()
      , o = "[object String]";
    function u(c) {
        return typeof c == "string" || !r(c) && l(c) && a(c) == o
    }
    return ff = u,
    ff
}
var h5 = d5();
const dy = na(h5);
function hy(a, r) {
    return function() {
        return a.apply(r, arguments)
    }
}
const {toString: m5} = Object.prototype
  , {getPrototypeOf: ed} = Object
  , {iterator: bu, toStringTag: my} = Symbol
  , Su = (a => r => {
    const l = m5.call(r);
    return a[l] || (a[l] = l.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , On = a => (a = a.toLowerCase(),
r => Su(r) === a)
  , Eu = a => r => typeof r === a
  , {isArray: il} = Array
  , bi = Eu("undefined");
function g5(a) {
    return a !== null && !bi(a) && a.constructor !== null && !bi(a.constructor) && Xt(a.constructor.isBuffer) && a.constructor.isBuffer(a)
}
const gy = On("ArrayBuffer");
function p5(a) {
    let r;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(a) : r = a && a.buffer && gy(a.buffer),
    r
}
const y5 = Eu("string")
  , Xt = Eu("function")
  , py = Eu("number")
  , xu = a => a !== null && typeof a == "object"
  , v5 = a => a === !0 || a === !1
  , Io = a => {
    if (Su(a) !== "object")
        return !1;
    const r = ed(a);
    return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(my in a) && !(bu in a)
}
  , b5 = On("Date")
  , S5 = On("File")
  , E5 = On("Blob")
  , x5 = On("FileList")
  , w5 = a => xu(a) && Xt(a.pipe)
  , R5 = a => {
    let r;
    return a && (typeof FormData == "function" && a instanceof FormData || Xt(a.append) && ((r = Su(a)) === "formdata" || r === "object" && Xt(a.toString) && a.toString() === "[object FormData]"))
}
  , T5 = On("URLSearchParams")
  , [O5,C5,A5,D5] = ["ReadableStream", "Request", "Response", "Headers"].map(On)
  , _5 = a => a.trim ? a.trim() : a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ri(a, r, {allOwnKeys: l=!1}={}) {
    if (a === null || typeof a > "u")
        return;
    let o, u;
    if (typeof a != "object" && (a = [a]),
    il(a))
        for (o = 0,
        u = a.length; o < u; o++)
            r.call(null, a[o], o, a);
    else {
        const c = l ? Object.getOwnPropertyNames(a) : Object.keys(a)
          , f = c.length;
        let m;
        for (o = 0; o < f; o++)
            m = c[o],
            r.call(null, a[m], m, a)
    }
}
function yy(a, r) {
    r = r.toLowerCase();
    const l = Object.keys(a);
    let o = l.length, u;
    for (; o-- > 0; )
        if (u = l[o],
        r === u.toLowerCase())
            return u;
    return null
}
const sr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , vy = a => !bi(a) && a !== sr;
function Lf() {
    const {caseless: a} = vy(this) && this || {}
      , r = {}
      , l = (o, u) => {
        const c = a && yy(r, u) || u;
        Io(r[c]) && Io(o) ? r[c] = Lf(r[c], o) : Io(o) ? r[c] = Lf({}, o) : il(o) ? r[c] = o.slice() : r[c] = o
    }
    ;
    for (let o = 0, u = arguments.length; o < u; o++)
        arguments[o] && Ri(arguments[o], l);
    return r
}
const M5 = (a, r, l, {allOwnKeys: o}={}) => (Ri(r, (u, c) => {
    l && Xt(u) ? a[c] = hy(u, l) : a[c] = u
}
, {
    allOwnKeys: o
}),
a)
  , k5 = a => (a.charCodeAt(0) === 65279 && (a = a.slice(1)),
a)
  , L5 = (a, r, l, o) => {
    a.prototype = Object.create(r.prototype, o),
    a.prototype.constructor = a,
    Object.defineProperty(a, "super", {
        value: r.prototype
    }),
    l && Object.assign(a.prototype, l)
}
  , N5 = (a, r, l, o) => {
    let u, c, f;
    const m = {};
    if (r = r || {},
    a == null)
        return r;
    do {
        for (u = Object.getOwnPropertyNames(a),
        c = u.length; c-- > 0; )
            f = u[c],
            (!o || o(f, a, r)) && !m[f] && (r[f] = a[f],
            m[f] = !0);
        a = l !== !1 && ed(a)
    } while (a && (!l || l(a, r)) && a !== Object.prototype);
    return r
}
  , z5 = (a, r, l) => {
    a = String(a),
    (l === void 0 || l > a.length) && (l = a.length),
    l -= r.length;
    const o = a.indexOf(r, l);
    return o !== -1 && o === l
}
  , j5 = a => {
    if (!a)
        return null;
    if (il(a))
        return a;
    let r = a.length;
    if (!py(r))
        return null;
    const l = new Array(r);
    for (; r-- > 0; )
        l[r] = a[r];
    return l
}
  , U5 = (a => r => a && r instanceof a)(typeof Uint8Array < "u" && ed(Uint8Array))
  , H5 = (a, r) => {
    const o = (a && a[bu]).call(a);
    let u;
    for (; (u = o.next()) && !u.done; ) {
        const c = u.value;
        r.call(a, c[0], c[1])
    }
}
  , B5 = (a, r) => {
    let l;
    const o = [];
    for (; (l = a.exec(r)) !== null; )
        o.push(l);
    return o
}
  , q5 = On("HTMLFormElement")
  , $5 = a => a.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(l, o, u) {
    return o.toUpperCase() + u
})
  , kg = ( ({hasOwnProperty: a}) => (r, l) => a.call(r, l))(Object.prototype)
  , V5 = On("RegExp")
  , by = (a, r) => {
    const l = Object.getOwnPropertyDescriptors(a)
      , o = {};
    Ri(l, (u, c) => {
        let f;
        (f = r(u, c, a)) !== !1 && (o[c] = f || u)
    }
    ),
    Object.defineProperties(a, o)
}
  , Y5 = a => {
    by(a, (r, l) => {
        if (Xt(a) && ["arguments", "caller", "callee"].indexOf(l) !== -1)
            return !1;
        const o = a[l];
        if (Xt(o)) {
            if (r.enumerable = !1,
            "writable"in r) {
                r.writable = !1;
                return
            }
            r.set || (r.set = () => {
                throw Error("Can not rewrite read-only method '" + l + "'")
            }
            )
        }
    }
    )
}
  , G5 = (a, r) => {
    const l = {}
      , o = u => {
        u.forEach(c => {
            l[c] = !0
        }
        )
    }
    ;
    return il(a) ? o(a) : o(String(a).split(r)),
    l
}
  , P5 = () => {}
  , X5 = (a, r) => a != null && Number.isFinite(a = +a) ? a : r;
function Q5(a) {
    return !!(a && Xt(a.append) && a[my] === "FormData" && a[bu])
}
const Z5 = a => {
    const r = new Array(10)
      , l = (o, u) => {
        if (xu(o)) {
            if (r.indexOf(o) >= 0)
                return;
            if (!("toJSON"in o)) {
                r[u] = o;
                const c = il(o) ? [] : {};
                return Ri(o, (f, m) => {
                    const h = l(f, u + 1);
                    !bi(h) && (c[m] = h)
                }
                ),
                r[u] = void 0,
                c
            }
        }
        return o
    }
    ;
    return l(a, 0)
}
  , F5 = On("AsyncFunction")
  , K5 = a => a && (xu(a) || Xt(a)) && Xt(a.then) && Xt(a.catch)
  , Sy = ( (a, r) => a ? setImmediate : r ? ( (l, o) => (sr.addEventListener("message", ({source: u, data: c}) => {
    u === sr && c === l && o.length && o.shift()()
}
, !1),
u => {
    o.push(u),
    sr.postMessage(l, "*")
}
))(`axios@${Math.random()}`, []) : l => setTimeout(l))(typeof setImmediate == "function", Xt(sr.postMessage))
  , J5 = typeof queueMicrotask < "u" ? queueMicrotask.bind(sr) : typeof process < "u" && process.nextTick || Sy
  , I5 = a => a != null && Xt(a[bu])
  , X = {
    isArray: il,
    isArrayBuffer: gy,
    isBuffer: g5,
    isFormData: R5,
    isArrayBufferView: p5,
    isString: y5,
    isNumber: py,
    isBoolean: v5,
    isObject: xu,
    isPlainObject: Io,
    isReadableStream: O5,
    isRequest: C5,
    isResponse: A5,
    isHeaders: D5,
    isUndefined: bi,
    isDate: b5,
    isFile: S5,
    isBlob: E5,
    isRegExp: V5,
    isFunction: Xt,
    isStream: w5,
    isURLSearchParams: T5,
    isTypedArray: U5,
    isFileList: x5,
    forEach: Ri,
    merge: Lf,
    extend: M5,
    trim: _5,
    stripBOM: k5,
    inherits: L5,
    toFlatObject: N5,
    kindOf: Su,
    kindOfTest: On,
    endsWith: z5,
    toArray: j5,
    forEachEntry: H5,
    matchAll: B5,
    isHTMLForm: q5,
    hasOwnProperty: kg,
    hasOwnProp: kg,
    reduceDescriptors: by,
    freezeMethods: Y5,
    toObjectSet: G5,
    toCamelCase: $5,
    noop: P5,
    toFiniteNumber: X5,
    findKey: yy,
    global: sr,
    isContextDefined: vy,
    isSpecCompliantForm: Q5,
    toJSONObject: Z5,
    isAsyncFn: F5,
    isThenable: K5,
    setImmediate: Sy,
    asap: J5,
    isIterable: I5
};
function Me(a, r, l, o, u) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = a,
    this.name = "AxiosError",
    r && (this.code = r),
    l && (this.config = l),
    o && (this.request = o),
    u && (this.response = u,
    this.status = u.status ? u.status : null)
}
X.inherits(Me, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: X.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const Ey = Me.prototype
  , xy = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(a => {
    xy[a] = {
        value: a
    }
}
);
Object.defineProperties(Me, xy);
Object.defineProperty(Ey, "isAxiosError", {
    value: !0
});
Me.from = (a, r, l, o, u, c) => {
    const f = Object.create(Ey);
    return X.toFlatObject(a, f, function(h) {
        return h !== Error.prototype
    }, m => m !== "isAxiosError"),
    Me.call(f, a.message, r, l, o, u),
    f.cause = a,
    f.name = a.name,
    c && Object.assign(f, c),
    f
}
;
const W5 = null;
function Nf(a) {
    return X.isPlainObject(a) || X.isArray(a)
}
function wy(a) {
    return X.endsWith(a, "[]") ? a.slice(0, -2) : a
}
function Lg(a, r, l) {
    return a ? a.concat(r).map(function(u, c) {
        return u = wy(u),
        !l && c ? "[" + u + "]" : u
    }).join(l ? "." : "") : r
}
function e3(a) {
    return X.isArray(a) && !a.some(Nf)
}
const t3 = X.toFlatObject(X, {}, null, function(r) {
    return /^is[A-Z]/.test(r)
});
function wu(a, r, l) {
    if (!X.isObject(a))
        throw new TypeError("target must be an object");
    r = r || new FormData,
    l = X.toFlatObject(l, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(D, O) {
        return !X.isUndefined(O[D])
    });
    const o = l.metaTokens
      , u = l.visitor || p
      , c = l.dots
      , f = l.indexes
      , h = (l.Blob || typeof Blob < "u" && Blob) && X.isSpecCompliantForm(r);
    if (!X.isFunction(u))
        throw new TypeError("visitor must be a function");
    function g(S) {
        if (S === null)
            return "";
        if (X.isDate(S))
            return S.toISOString();
        if (!h && X.isBlob(S))
            throw new Me("Blob is not supported. Use a Buffer instead.");
        return X.isArrayBuffer(S) || X.isTypedArray(S) ? h && typeof Blob == "function" ? new Blob([S]) : Buffer.from(S) : S
    }
    function p(S, D, O) {
        let z = S;
        if (S && !O && typeof S == "object") {
            if (X.endsWith(D, "{}"))
                D = o ? D : D.slice(0, -2),
                S = JSON.stringify(S);
            else if (X.isArray(S) && e3(S) || (X.isFileList(S) || X.endsWith(D, "[]")) && (z = X.toArray(S)))
                return D = wy(D),
                z.forEach(function($, ee) {
                    !(X.isUndefined($) || $ === null) && r.append(f === !0 ? Lg([D], ee, c) : f === null ? D : D + "[]", g($))
                }),
                !1
        }
        return Nf(S) ? !0 : (r.append(Lg(O, D, c), g(S)),
        !1)
    }
    const v = []
      , b = Object.assign(t3, {
        defaultVisitor: p,
        convertValue: g,
        isVisitable: Nf
    });
    function R(S, D) {
        if (!X.isUndefined(S)) {
            if (v.indexOf(S) !== -1)
                throw Error("Circular reference detected in " + D.join("."));
            v.push(S),
            X.forEach(S, function(z, G) {
                (!(X.isUndefined(z) || z === null) && u.call(r, z, X.isString(G) ? G.trim() : G, D, b)) === !0 && R(z, D ? D.concat(G) : [G])
            }),
            v.pop()
        }
    }
    if (!X.isObject(a))
        throw new TypeError("data must be an object");
    return R(a),
    r
}
function Ng(a) {
    const r = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g, function(o) {
        return r[o]
    })
}
function td(a, r) {
    this._pairs = [],
    a && wu(a, this, r)
}
const Ry = td.prototype;
Ry.append = function(r, l) {
    this._pairs.push([r, l])
}
;
Ry.toString = function(r) {
    const l = r ? function(o) {
        return r.call(this, o, Ng)
    }
    : Ng;
    return this._pairs.map(function(u) {
        return l(u[0]) + "=" + l(u[1])
    }, "").join("&")
}
;
function n3(a) {
    return encodeURIComponent(a).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function Ty(a, r, l) {
    if (!r)
        return a;
    const o = l && l.encode || n3;
    X.isFunction(l) && (l = {
        serialize: l
    });
    const u = l && l.serialize;
    let c;
    if (u ? c = u(r, l) : c = X.isURLSearchParams(r) ? r.toString() : new td(r,l).toString(o),
    c) {
        const f = a.indexOf("#");
        f !== -1 && (a = a.slice(0, f)),
        a += (a.indexOf("?") === -1 ? "?" : "&") + c
    }
    return a
}
class zg {
    constructor() {
        this.handlers = []
    }
    use(r, l, o) {
        return this.handlers.push({
            fulfilled: r,
            rejected: l,
            synchronous: o ? o.synchronous : !1,
            runWhen: o ? o.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(r) {
        this.handlers[r] && (this.handlers[r] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(r) {
        X.forEach(this.handlers, function(o) {
            o !== null && r(o)
        })
    }
}
const Oy = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , a3 = typeof URLSearchParams < "u" ? URLSearchParams : td
  , r3 = typeof FormData < "u" ? FormData : null
  , l3 = typeof Blob < "u" ? Blob : null
  , i3 = {
    isBrowser: !0,
    classes: {
        URLSearchParams: a3,
        FormData: r3,
        Blob: l3
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , nd = typeof window < "u" && typeof document < "u"
  , zf = typeof navigator == "object" && navigator || void 0
  , o3 = nd && (!zf || ["ReactNative", "NativeScript", "NS"].indexOf(zf.product) < 0)
  , u3 = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , s3 = nd && window.location.href || "http://localhost"
  , c3 = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: nd,
    hasStandardBrowserEnv: o3,
    hasStandardBrowserWebWorkerEnv: u3,
    navigator: zf,
    origin: s3
}, Symbol.toStringTag, {
    value: "Module"
}))
  , zt = {
    ...c3,
    ...i3
};
function f3(a, r) {
    return wu(a, new zt.classes.URLSearchParams, Object.assign({
        visitor: function(l, o, u, c) {
            return zt.isNode && X.isBuffer(l) ? (this.append(o, l.toString("base64")),
            !1) : c.defaultVisitor.apply(this, arguments)
        }
    }, r))
}
function d3(a) {
    return X.matchAll(/\w+|\[(\w*)]/g, a).map(r => r[0] === "[]" ? "" : r[1] || r[0])
}
function h3(a) {
    const r = {}
      , l = Object.keys(a);
    let o;
    const u = l.length;
    let c;
    for (o = 0; o < u; o++)
        c = l[o],
        r[c] = a[c];
    return r
}
function Cy(a) {
    function r(l, o, u, c) {
        let f = l[c++];
        if (f === "__proto__")
            return !0;
        const m = Number.isFinite(+f)
          , h = c >= l.length;
        return f = !f && X.isArray(u) ? u.length : f,
        h ? (X.hasOwnProp(u, f) ? u[f] = [u[f], o] : u[f] = o,
        !m) : ((!u[f] || !X.isObject(u[f])) && (u[f] = []),
        r(l, o, u[f], c) && X.isArray(u[f]) && (u[f] = h3(u[f])),
        !m)
    }
    if (X.isFormData(a) && X.isFunction(a.entries)) {
        const l = {};
        return X.forEachEntry(a, (o, u) => {
            r(d3(o), u, l, 0)
        }
        ),
        l
    }
    return null
}
function m3(a, r, l) {
    if (X.isString(a))
        try {
            return (r || JSON.parse)(a),
            X.trim(a)
        } catch (o) {
            if (o.name !== "SyntaxError")
                throw o
        }
    return (l || JSON.stringify)(a)
}
const Ti = {
    transitional: Oy,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(r, l) {
        const o = l.getContentType() || ""
          , u = o.indexOf("application/json") > -1
          , c = X.isObject(r);
        if (c && X.isHTMLForm(r) && (r = new FormData(r)),
        X.isFormData(r))
            return u ? JSON.stringify(Cy(r)) : r;
        if (X.isArrayBuffer(r) || X.isBuffer(r) || X.isStream(r) || X.isFile(r) || X.isBlob(r) || X.isReadableStream(r))
            return r;
        if (X.isArrayBufferView(r))
            return r.buffer;
        if (X.isURLSearchParams(r))
            return l.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            r.toString();
        let m;
        if (c) {
            if (o.indexOf("application/x-www-form-urlencoded") > -1)
                return f3(r, this.formSerializer).toString();
            if ((m = X.isFileList(r)) || o.indexOf("multipart/form-data") > -1) {
                const h = this.env && this.env.FormData;
                return wu(m ? {
                    "files[]": r
                } : r, h && new h, this.formSerializer)
            }
        }
        return c || u ? (l.setContentType("application/json", !1),
        m3(r)) : r
    }
    ],
    transformResponse: [function(r) {
        const l = this.transitional || Ti.transitional
          , o = l && l.forcedJSONParsing
          , u = this.responseType === "json";
        if (X.isResponse(r) || X.isReadableStream(r))
            return r;
        if (r && X.isString(r) && (o && !this.responseType || u)) {
            const f = !(l && l.silentJSONParsing) && u;
            try {
                return JSON.parse(r)
            } catch (m) {
                if (f)
                    throw m.name === "SyntaxError" ? Me.from(m, Me.ERR_BAD_RESPONSE, this, null, this.response) : m
            }
        }
        return r
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: zt.classes.FormData,
        Blob: zt.classes.Blob
    },
    validateStatus: function(r) {
        return r >= 200 && r < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
X.forEach(["delete", "get", "head", "post", "put", "patch"], a => {
    Ti.headers[a] = {}
}
);
const g3 = X.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , p3 = a => {
    const r = {};
    let l, o, u;
    return a && a.split(`
`).forEach(function(f) {
        u = f.indexOf(":"),
        l = f.substring(0, u).trim().toLowerCase(),
        o = f.substring(u + 1).trim(),
        !(!l || r[l] && g3[l]) && (l === "set-cookie" ? r[l] ? r[l].push(o) : r[l] = [o] : r[l] = r[l] ? r[l] + ", " + o : o)
    }),
    r
}
  , jg = Symbol("internals");
function di(a) {
    return a && String(a).trim().toLowerCase()
}
function Wo(a) {
    return a === !1 || a == null ? a : X.isArray(a) ? a.map(Wo) : String(a)
}
function y3(a) {
    const r = Object.create(null)
      , l = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let o;
    for (; o = l.exec(a); )
        r[o[1]] = o[2];
    return r
}
const v3 = a => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());
function df(a, r, l, o, u) {
    if (X.isFunction(o))
        return o.call(this, r, l);
    if (u && (r = l),
    !!X.isString(r)) {
        if (X.isString(o))
            return r.indexOf(o) !== -1;
        if (X.isRegExp(o))
            return o.test(r)
    }
}
function b3(a) {
    return a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, l, o) => l.toUpperCase() + o)
}
function S3(a, r) {
    const l = X.toCamelCase(" " + r);
    ["get", "set", "has"].forEach(o => {
        Object.defineProperty(a, o + l, {
            value: function(u, c, f) {
                return this[o].call(this, r, u, c, f)
            },
            configurable: !0
        })
    }
    )
}
let Qt = class {
    constructor(r) {
        r && this.set(r)
    }
    set(r, l, o) {
        const u = this;
        function c(m, h, g) {
            const p = di(h);
            if (!p)
                throw new Error("header name must be a non-empty string");
            const v = X.findKey(u, p);
            (!v || u[v] === void 0 || g === !0 || g === void 0 && u[v] !== !1) && (u[v || h] = Wo(m))
        }
        const f = (m, h) => X.forEach(m, (g, p) => c(g, p, h));
        if (X.isPlainObject(r) || r instanceof this.constructor)
            f(r, l);
        else if (X.isString(r) && (r = r.trim()) && !v3(r))
            f(p3(r), l);
        else if (X.isObject(r) && X.isIterable(r)) {
            let m = {}, h, g;
            for (const p of r) {
                if (!X.isArray(p))
                    throw TypeError("Object iterator must return a key-value pair");
                m[g = p[0]] = (h = m[g]) ? X.isArray(h) ? [...h, p[1]] : [h, p[1]] : p[1]
            }
            f(m, l)
        } else
            r != null && c(l, r, o);
        return this
    }
    get(r, l) {
        if (r = di(r),
        r) {
            const o = X.findKey(this, r);
            if (o) {
                const u = this[o];
                if (!l)
                    return u;
                if (l === !0)
                    return y3(u);
                if (X.isFunction(l))
                    return l.call(this, u, o);
                if (X.isRegExp(l))
                    return l.exec(u);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(r, l) {
        if (r = di(r),
        r) {
            const o = X.findKey(this, r);
            return !!(o && this[o] !== void 0 && (!l || df(this, this[o], o, l)))
        }
        return !1
    }
    delete(r, l) {
        const o = this;
        let u = !1;
        function c(f) {
            if (f = di(f),
            f) {
                const m = X.findKey(o, f);
                m && (!l || df(o, o[m], m, l)) && (delete o[m],
                u = !0)
            }
        }
        return X.isArray(r) ? r.forEach(c) : c(r),
        u
    }
    clear(r) {
        const l = Object.keys(this);
        let o = l.length
          , u = !1;
        for (; o--; ) {
            const c = l[o];
            (!r || df(this, this[c], c, r, !0)) && (delete this[c],
            u = !0)
        }
        return u
    }
    normalize(r) {
        const l = this
          , o = {};
        return X.forEach(this, (u, c) => {
            const f = X.findKey(o, c);
            if (f) {
                l[f] = Wo(u),
                delete l[c];
                return
            }
            const m = r ? b3(c) : String(c).trim();
            m !== c && delete l[c],
            l[m] = Wo(u),
            o[m] = !0
        }
        ),
        this
    }
    concat(...r) {
        return this.constructor.concat(this, ...r)
    }
    toJSON(r) {
        const l = Object.create(null);
        return X.forEach(this, (o, u) => {
            o != null && o !== !1 && (l[u] = r && X.isArray(o) ? o.join(", ") : o)
        }
        ),
        l
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([r,l]) => r + ": " + l).join(`
`)
    }
    getSetCookie() {
        return this.get("set-cookie") || []
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(r) {
        return r instanceof this ? r : new this(r)
    }
    static concat(r, ...l) {
        const o = new this(r);
        return l.forEach(u => o.set(u)),
        o
    }
    static accessor(r) {
        const o = (this[jg] = this[jg] = {
            accessors: {}
        }).accessors
          , u = this.prototype;
        function c(f) {
            const m = di(f);
            o[m] || (S3(u, f),
            o[m] = !0)
        }
        return X.isArray(r) ? r.forEach(c) : c(r),
        this
    }
}
;
Qt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
X.reduceDescriptors(Qt.prototype, ({value: a}, r) => {
    let l = r[0].toUpperCase() + r.slice(1);
    return {
        get: () => a,
        set(o) {
            this[l] = o
        }
    }
}
);
X.freezeMethods(Qt);
function hf(a, r) {
    const l = this || Ti
      , o = r || l
      , u = Qt.from(o.headers);
    let c = o.data;
    return X.forEach(a, function(m) {
        c = m.call(l, c, u.normalize(), r ? r.status : void 0)
    }),
    u.normalize(),
    c
}
function Ay(a) {
    return !!(a && a.__CANCEL__)
}
function ol(a, r, l) {
    Me.call(this, a ?? "canceled", Me.ERR_CANCELED, r, l),
    this.name = "CanceledError"
}
X.inherits(ol, Me, {
    __CANCEL__: !0
});
function Dy(a, r, l) {
    const o = l.config.validateStatus;
    !l.status || !o || o(l.status) ? a(l) : r(new Me("Request failed with status code " + l.status,[Me.ERR_BAD_REQUEST, Me.ERR_BAD_RESPONSE][Math.floor(l.status / 100) - 4],l.config,l.request,l))
}
function E3(a) {
    const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(a);
    return r && r[1] || ""
}
function x3(a, r) {
    a = a || 10;
    const l = new Array(a)
      , o = new Array(a);
    let u = 0, c = 0, f;
    return r = r !== void 0 ? r : 1e3,
    function(h) {
        const g = Date.now()
          , p = o[c];
        f || (f = g),
        l[u] = h,
        o[u] = g;
        let v = c
          , b = 0;
        for (; v !== u; )
            b += l[v++],
            v = v % a;
        if (u = (u + 1) % a,
        u === c && (c = (c + 1) % a),
        g - f < r)
            return;
        const R = p && g - p;
        return R ? Math.round(b * 1e3 / R) : void 0
    }
}
function w3(a, r) {
    let l = 0, o = 1e3 / r, u, c;
    const f = (g, p=Date.now()) => {
        l = p,
        u = null,
        c && (clearTimeout(c),
        c = null),
        a.apply(null, g)
    }
    ;
    return [ (...g) => {
        const p = Date.now()
          , v = p - l;
        v >= o ? f(g, p) : (u = g,
        c || (c = setTimeout( () => {
            c = null,
            f(u)
        }
        , o - v)))
    }
    , () => u && f(u)]
}
const ou = (a, r, l=3) => {
    let o = 0;
    const u = x3(50, 250);
    return w3(c => {
        const f = c.loaded
          , m = c.lengthComputable ? c.total : void 0
          , h = f - o
          , g = u(h)
          , p = f <= m;
        o = f;
        const v = {
            loaded: f,
            total: m,
            progress: m ? f / m : void 0,
            bytes: h,
            rate: g || void 0,
            estimated: g && m && p ? (m - f) / g : void 0,
            event: c,
            lengthComputable: m != null,
            [r ? "download" : "upload"]: !0
        };
        a(v)
    }
    , l)
}
  , Ug = (a, r) => {
    const l = a != null;
    return [o => r[0]({
        lengthComputable: l,
        total: a,
        loaded: o
    }), r[1]]
}
  , Hg = a => (...r) => X.asap( () => a(...r))
  , R3 = zt.hasStandardBrowserEnv ? ( (a, r) => l => (l = new URL(l,zt.origin),
a.protocol === l.protocol && a.host === l.host && (r || a.port === l.port)))(new URL(zt.origin), zt.navigator && /(msie|trident)/i.test(zt.navigator.userAgent)) : () => !0
  , T3 = zt.hasStandardBrowserEnv ? {
    write(a, r, l, o, u, c) {
        const f = [a + "=" + encodeURIComponent(r)];
        X.isNumber(l) && f.push("expires=" + new Date(l).toGMTString()),
        X.isString(o) && f.push("path=" + o),
        X.isString(u) && f.push("domain=" + u),
        c === !0 && f.push("secure"),
        document.cookie = f.join("; ")
    },
    read(a) {
        const r = document.cookie.match(new RegExp("(^|;\\s*)(" + a + ")=([^;]*)"));
        return r ? decodeURIComponent(r[3]) : null
    },
    remove(a) {
        this.write(a, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function O3(a) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)
}
function C3(a, r) {
    return r ? a.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : a
}
function _y(a, r, l) {
    let o = !O3(r);
    return a && (o || l == !1) ? C3(a, r) : r
}
const Bg = a => a instanceof Qt ? {
    ...a
} : a;
function fr(a, r) {
    r = r || {};
    const l = {};
    function o(g, p, v, b) {
        return X.isPlainObject(g) && X.isPlainObject(p) ? X.merge.call({
            caseless: b
        }, g, p) : X.isPlainObject(p) ? X.merge({}, p) : X.isArray(p) ? p.slice() : p
    }
    function u(g, p, v, b) {
        if (X.isUndefined(p)) {
            if (!X.isUndefined(g))
                return o(void 0, g, v, b)
        } else
            return o(g, p, v, b)
    }
    function c(g, p) {
        if (!X.isUndefined(p))
            return o(void 0, p)
    }
    function f(g, p) {
        if (X.isUndefined(p)) {
            if (!X.isUndefined(g))
                return o(void 0, g)
        } else
            return o(void 0, p)
    }
    function m(g, p, v) {
        if (v in r)
            return o(g, p);
        if (v in a)
            return o(void 0, g)
    }
    const h = {
        url: c,
        method: c,
        data: c,
        baseURL: f,
        transformRequest: f,
        transformResponse: f,
        paramsSerializer: f,
        timeout: f,
        timeoutMessage: f,
        withCredentials: f,
        withXSRFToken: f,
        adapter: f,
        responseType: f,
        xsrfCookieName: f,
        xsrfHeaderName: f,
        onUploadProgress: f,
        onDownloadProgress: f,
        decompress: f,
        maxContentLength: f,
        maxBodyLength: f,
        beforeRedirect: f,
        transport: f,
        httpAgent: f,
        httpsAgent: f,
        cancelToken: f,
        socketPath: f,
        responseEncoding: f,
        validateStatus: m,
        headers: (g, p, v) => u(Bg(g), Bg(p), v, !0)
    };
    return X.forEach(Object.keys(Object.assign({}, a, r)), function(p) {
        const v = h[p] || u
          , b = v(a[p], r[p], p);
        X.isUndefined(b) && v !== m || (l[p] = b)
    }),
    l
}
const My = a => {
    const r = fr({}, a);
    let {data: l, withXSRFToken: o, xsrfHeaderName: u, xsrfCookieName: c, headers: f, auth: m} = r;
    r.headers = f = Qt.from(f),
    r.url = Ty(_y(r.baseURL, r.url, r.allowAbsoluteUrls), a.params, a.paramsSerializer),
    m && f.set("Authorization", "Basic " + btoa((m.username || "") + ":" + (m.password ? unescape(encodeURIComponent(m.password)) : "")));
    let h;
    if (X.isFormData(l)) {
        if (zt.hasStandardBrowserEnv || zt.hasStandardBrowserWebWorkerEnv)
            f.setContentType(void 0);
        else if ((h = f.getContentType()) !== !1) {
            const [g,...p] = h ? h.split(";").map(v => v.trim()).filter(Boolean) : [];
            f.setContentType([g || "multipart/form-data", ...p].join("; "))
        }
    }
    if (zt.hasStandardBrowserEnv && (o && X.isFunction(o) && (o = o(r)),
    o || o !== !1 && R3(r.url))) {
        const g = u && c && T3.read(c);
        g && f.set(u, g)
    }
    return r
}
  , A3 = typeof XMLHttpRequest < "u"
  , D3 = A3 && function(a) {
    return new Promise(function(l, o) {
        const u = My(a);
        let c = u.data;
        const f = Qt.from(u.headers).normalize();
        let {responseType: m, onUploadProgress: h, onDownloadProgress: g} = u, p, v, b, R, S;
        function D() {
            R && R(),
            S && S(),
            u.cancelToken && u.cancelToken.unsubscribe(p),
            u.signal && u.signal.removeEventListener("abort", p)
        }
        let O = new XMLHttpRequest;
        O.open(u.method.toUpperCase(), u.url, !0),
        O.timeout = u.timeout;
        function z() {
            if (!O)
                return;
            const $ = Qt.from("getAllResponseHeaders"in O && O.getAllResponseHeaders())
              , L = {
                data: !m || m === "text" || m === "json" ? O.responseText : O.response,
                status: O.status,
                statusText: O.statusText,
                headers: $,
                config: a,
                request: O
            };
            Dy(function(ne) {
                l(ne),
                D()
            }, function(ne) {
                o(ne),
                D()
            }, L),
            O = null
        }
        "onloadend"in O ? O.onloadend = z : O.onreadystatechange = function() {
            !O || O.readyState !== 4 || O.status === 0 && !(O.responseURL && O.responseURL.indexOf("file:") === 0) || setTimeout(z)
        }
        ,
        O.onabort = function() {
            O && (o(new Me("Request aborted",Me.ECONNABORTED,a,O)),
            O = null)
        }
        ,
        O.onerror = function() {
            o(new Me("Network Error",Me.ERR_NETWORK,a,O)),
            O = null
        }
        ,
        O.ontimeout = function() {
            let ee = u.timeout ? "timeout of " + u.timeout + "ms exceeded" : "timeout exceeded";
            const L = u.transitional || Oy;
            u.timeoutErrorMessage && (ee = u.timeoutErrorMessage),
            o(new Me(ee,L.clarifyTimeoutError ? Me.ETIMEDOUT : Me.ECONNABORTED,a,O)),
            O = null
        }
        ,
        c === void 0 && f.setContentType(null),
        "setRequestHeader"in O && X.forEach(f.toJSON(), function(ee, L) {
            O.setRequestHeader(L, ee)
        }),
        X.isUndefined(u.withCredentials) || (O.withCredentials = !!u.withCredentials),
        m && m !== "json" && (O.responseType = u.responseType),
        g && ([b,S] = ou(g, !0),
        O.addEventListener("progress", b)),
        h && O.upload && ([v,R] = ou(h),
        O.upload.addEventListener("progress", v),
        O.upload.addEventListener("loadend", R)),
        (u.cancelToken || u.signal) && (p = $ => {
            O && (o(!$ || $.type ? new ol(null,a,O) : $),
            O.abort(),
            O = null)
        }
        ,
        u.cancelToken && u.cancelToken.subscribe(p),
        u.signal && (u.signal.aborted ? p() : u.signal.addEventListener("abort", p)));
        const G = E3(u.url);
        if (G && zt.protocols.indexOf(G) === -1) {
            o(new Me("Unsupported protocol " + G + ":",Me.ERR_BAD_REQUEST,a));
            return
        }
        O.send(c || null)
    }
    )
}
  , _3 = (a, r) => {
    const {length: l} = a = a ? a.filter(Boolean) : [];
    if (r || l) {
        let o = new AbortController, u;
        const c = function(g) {
            if (!u) {
                u = !0,
                m();
                const p = g instanceof Error ? g : this.reason;
                o.abort(p instanceof Me ? p : new ol(p instanceof Error ? p.message : p))
            }
        };
        let f = r && setTimeout( () => {
            f = null,
            c(new Me(`timeout ${r} of ms exceeded`,Me.ETIMEDOUT))
        }
        , r);
        const m = () => {
            a && (f && clearTimeout(f),
            f = null,
            a.forEach(g => {
                g.unsubscribe ? g.unsubscribe(c) : g.removeEventListener("abort", c)
            }
            ),
            a = null)
        }
        ;
        a.forEach(g => g.addEventListener("abort", c));
        const {signal: h} = o;
        return h.unsubscribe = () => X.asap(m),
        h
    }
}
  , M3 = function*(a, r) {
    let l = a.byteLength;
    if (l < r) {
        yield a;
        return
    }
    let o = 0, u;
    for (; o < l; )
        u = o + r,
        yield a.slice(o, u),
        o = u
}
  , k3 = async function*(a, r) {
    for await(const l of L3(a))
        yield*M3(l, r)
}
  , L3 = async function*(a) {
    if (a[Symbol.asyncIterator]) {
        yield*a;
        return
    }
    const r = a.getReader();
    try {
        for (; ; ) {
            const {done: l, value: o} = await r.read();
            if (l)
                break;
            yield o
        }
    } finally {
        await r.cancel()
    }
}
  , qg = (a, r, l, o) => {
    const u = k3(a, r);
    let c = 0, f, m = h => {
        f || (f = !0,
        o && o(h))
    }
    ;
    return new ReadableStream({
        async pull(h) {
            try {
                const {done: g, value: p} = await u.next();
                if (g) {
                    m(),
                    h.close();
                    return
                }
                let v = p.byteLength;
                if (l) {
                    let b = c += v;
                    l(b)
                }
                h.enqueue(new Uint8Array(p))
            } catch (g) {
                throw m(g),
                g
            }
        },
        cancel(h) {
            return m(h),
            u.return()
        }
    },{
        highWaterMark: 2
    })
}
  , Ru = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function"
  , ky = Ru && typeof ReadableStream == "function"
  , N3 = Ru && (typeof TextEncoder == "function" ? (a => r => a.encode(r))(new TextEncoder) : async a => new Uint8Array(await new Response(a).arrayBuffer()))
  , Ly = (a, ...r) => {
    try {
        return !!a(...r)
    } catch {
        return !1
    }
}
  , z3 = ky && Ly( () => {
    let a = !1;
    const r = new Request(zt.origin,{
        body: new ReadableStream,
        method: "POST",
        get duplex() {
            return a = !0,
            "half"
        }
    }).headers.has("Content-Type");
    return a && !r
}
)
  , $g = 64 * 1024
  , jf = ky && Ly( () => X.isReadableStream(new Response("").body))
  , uu = {
    stream: jf && (a => a.body)
};
Ru && (a => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(r => {
        !uu[r] && (uu[r] = X.isFunction(a[r]) ? l => l[r]() : (l, o) => {
            throw new Me(`Response type '${r}' is not supported`,Me.ERR_NOT_SUPPORT,o)
        }
        )
    }
    )
}
)(new Response);
const j3 = async a => {
    if (a == null)
        return 0;
    if (X.isBlob(a))
        return a.size;
    if (X.isSpecCompliantForm(a))
        return (await new Request(zt.origin,{
            method: "POST",
            body: a
        }).arrayBuffer()).byteLength;
    if (X.isArrayBufferView(a) || X.isArrayBuffer(a))
        return a.byteLength;
    if (X.isURLSearchParams(a) && (a = a + ""),
    X.isString(a))
        return (await N3(a)).byteLength
}
  , U3 = async (a, r) => {
    const l = X.toFiniteNumber(a.getContentLength());
    return l ?? j3(r)
}
  , H3 = Ru && (async a => {
    let {url: r, method: l, data: o, signal: u, cancelToken: c, timeout: f, onDownloadProgress: m, onUploadProgress: h, responseType: g, headers: p, withCredentials: v="same-origin", fetchOptions: b} = My(a);
    g = g ? (g + "").toLowerCase() : "text";
    let R = _3([u, c && c.toAbortSignal()], f), S;
    const D = R && R.unsubscribe && ( () => {
        R.unsubscribe()
    }
    );
    let O;
    try {
        if (h && z3 && l !== "get" && l !== "head" && (O = await U3(p, o)) !== 0) {
            let L = new Request(r,{
                method: "POST",
                body: o,
                duplex: "half"
            }), _;
            if (X.isFormData(o) && (_ = L.headers.get("content-type")) && p.setContentType(_),
            L.body) {
                const [ne,oe] = Ug(O, ou(Hg(h)));
                o = qg(L.body, $g, ne, oe)
            }
        }
        X.isString(v) || (v = v ? "include" : "omit");
        const z = "credentials"in Request.prototype;
        S = new Request(r,{
            ...b,
            signal: R,
            method: l.toUpperCase(),
            headers: p.normalize().toJSON(),
            body: o,
            duplex: "half",
            credentials: z ? v : void 0
        });
        let G = await fetch(S);
        const $ = jf && (g === "stream" || g === "response");
        if (jf && (m || $ && D)) {
            const L = {};
            ["status", "statusText", "headers"].forEach(ce => {
                L[ce] = G[ce]
            }
            );
            const _ = X.toFiniteNumber(G.headers.get("content-length"))
              , [ne,oe] = m && Ug(_, ou(Hg(m), !0)) || [];
            G = new Response(qg(G.body, $g, ne, () => {
                oe && oe(),
                D && D()
            }
            ),L)
        }
        g = g || "text";
        let ee = await uu[X.findKey(uu, g) || "text"](G, a);
        return !$ && D && D(),
        await new Promise( (L, _) => {
            Dy(L, _, {
                data: ee,
                headers: Qt.from(G.headers),
                status: G.status,
                statusText: G.statusText,
                config: a,
                request: S
            })
        }
        )
    } catch (z) {
        throw D && D(),
        z && z.name === "TypeError" && /Load failed|fetch/i.test(z.message) ? Object.assign(new Me("Network Error",Me.ERR_NETWORK,a,S), {
            cause: z.cause || z
        }) : Me.from(z, z && z.code, a, S)
    }
}
)
  , Uf = {
    http: W5,
    xhr: D3,
    fetch: H3
};
X.forEach(Uf, (a, r) => {
    if (a) {
        try {
            Object.defineProperty(a, "name", {
                value: r
            })
        } catch {}
        Object.defineProperty(a, "adapterName", {
            value: r
        })
    }
}
);
const Vg = a => `- ${a}`
  , B3 = a => X.isFunction(a) || a === null || a === !1
  , Ny = {
    getAdapter: a => {
        a = X.isArray(a) ? a : [a];
        const {length: r} = a;
        let l, o;
        const u = {};
        for (let c = 0; c < r; c++) {
            l = a[c];
            let f;
            if (o = l,
            !B3(l) && (o = Uf[(f = String(l)).toLowerCase()],
            o === void 0))
                throw new Me(`Unknown adapter '${f}'`);
            if (o)
                break;
            u[f || "#" + c] = o
        }
        if (!o) {
            const c = Object.entries(u).map( ([m,h]) => `adapter ${m} ` + (h === !1 ? "is not supported by the environment" : "is not available in the build"));
            let f = r ? c.length > 1 ? `since :
` + c.map(Vg).join(`
`) : " " + Vg(c[0]) : "as no adapter specified";
            throw new Me("There is no suitable adapter to dispatch the request " + f,"ERR_NOT_SUPPORT")
        }
        return o
    }
    ,
    adapters: Uf
};
function mf(a) {
    if (a.cancelToken && a.cancelToken.throwIfRequested(),
    a.signal && a.signal.aborted)
        throw new ol(null,a)
}
function Yg(a) {
    return mf(a),
    a.headers = Qt.from(a.headers),
    a.data = hf.call(a, a.transformRequest),
    ["post", "put", "patch"].indexOf(a.method) !== -1 && a.headers.setContentType("application/x-www-form-urlencoded", !1),
    Ny.getAdapter(a.adapter || Ti.adapter)(a).then(function(o) {
        return mf(a),
        o.data = hf.call(a, a.transformResponse, o),
        o.headers = Qt.from(o.headers),
        o
    }, function(o) {
        return Ay(o) || (mf(a),
        o && o.response && (o.response.data = hf.call(a, a.transformResponse, o.response),
        o.response.headers = Qt.from(o.response.headers))),
        Promise.reject(o)
    })
}
const zy = "1.9.0"
  , Tu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (a, r) => {
    Tu[a] = function(o) {
        return typeof o === a || "a" + (r < 1 ? "n " : " ") + a
    }
}
);
const Gg = {};
Tu.transitional = function(r, l, o) {
    function u(c, f) {
        return "[Axios v" + zy + "] Transitional option '" + c + "'" + f + (o ? ". " + o : "")
    }
    return (c, f, m) => {
        if (r === !1)
            throw new Me(u(f, " has been removed" + (l ? " in " + l : "")),Me.ERR_DEPRECATED);
        return l && !Gg[f] && (Gg[f] = !0,
        console.warn(u(f, " has been deprecated since v" + l + " and will be removed in the near future"))),
        r ? r(c, f, m) : !0
    }
}
;
Tu.spelling = function(r) {
    return (l, o) => (console.warn(`${o} is likely a misspelling of ${r}`),
    !0)
}
;
function q3(a, r, l) {
    if (typeof a != "object")
        throw new Me("options must be an object",Me.ERR_BAD_OPTION_VALUE);
    const o = Object.keys(a);
    let u = o.length;
    for (; u-- > 0; ) {
        const c = o[u]
          , f = r[c];
        if (f) {
            const m = a[c]
              , h = m === void 0 || f(m, c, a);
            if (h !== !0)
                throw new Me("option " + c + " must be " + h,Me.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (l !== !0)
            throw new Me("Unknown option " + c,Me.ERR_BAD_OPTION)
    }
}
const eu = {
    assertOptions: q3,
    validators: Tu
}
  , zn = eu.validators;
let cr = class {
    constructor(r) {
        this.defaults = r || {},
        this.interceptors = {
            request: new zg,
            response: new zg
        }
    }
    async request(r, l) {
        try {
            return await this._request(r, l)
        } catch (o) {
            if (o instanceof Error) {
                let u = {};
                Error.captureStackTrace ? Error.captureStackTrace(u) : u = new Error;
                const c = u.stack ? u.stack.replace(/^.+\n/, "") : "";
                try {
                    o.stack ? c && !String(o.stack).endsWith(c.replace(/^.+\n.+\n/, "")) && (o.stack += `
` + c) : o.stack = c
                } catch {}
            }
            throw o
        }
    }
    _request(r, l) {
        typeof r == "string" ? (l = l || {},
        l.url = r) : l = r || {},
        l = fr(this.defaults, l);
        const {transitional: o, paramsSerializer: u, headers: c} = l;
        o !== void 0 && eu.assertOptions(o, {
            silentJSONParsing: zn.transitional(zn.boolean),
            forcedJSONParsing: zn.transitional(zn.boolean),
            clarifyTimeoutError: zn.transitional(zn.boolean)
        }, !1),
        u != null && (X.isFunction(u) ? l.paramsSerializer = {
            serialize: u
        } : eu.assertOptions(u, {
            encode: zn.function,
            serialize: zn.function
        }, !0)),
        l.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? l.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : l.allowAbsoluteUrls = !0),
        eu.assertOptions(l, {
            baseUrl: zn.spelling("baseURL"),
            withXsrfToken: zn.spelling("withXSRFToken")
        }, !0),
        l.method = (l.method || this.defaults.method || "get").toLowerCase();
        let f = c && X.merge(c.common, c[l.method]);
        c && X.forEach(["delete", "get", "head", "post", "put", "patch", "common"], S => {
            delete c[S]
        }
        ),
        l.headers = Qt.concat(f, c);
        const m = [];
        let h = !0;
        this.interceptors.request.forEach(function(D) {
            typeof D.runWhen == "function" && D.runWhen(l) === !1 || (h = h && D.synchronous,
            m.unshift(D.fulfilled, D.rejected))
        });
        const g = [];
        this.interceptors.response.forEach(function(D) {
            g.push(D.fulfilled, D.rejected)
        });
        let p, v = 0, b;
        if (!h) {
            const S = [Yg.bind(this), void 0];
            for (S.unshift.apply(S, m),
            S.push.apply(S, g),
            b = S.length,
            p = Promise.resolve(l); v < b; )
                p = p.then(S[v++], S[v++]);
            return p
        }
        b = m.length;
        let R = l;
        for (v = 0; v < b; ) {
            const S = m[v++]
              , D = m[v++];
            try {
                R = S(R)
            } catch (O) {
                D.call(this, O);
                break
            }
        }
        try {
            p = Yg.call(this, R)
        } catch (S) {
            return Promise.reject(S)
        }
        for (v = 0,
        b = g.length; v < b; )
            p = p.then(g[v++], g[v++]);
        return p
    }
    getUri(r) {
        r = fr(this.defaults, r);
        const l = _y(r.baseURL, r.url, r.allowAbsoluteUrls);
        return Ty(l, r.params, r.paramsSerializer)
    }
}
;
X.forEach(["delete", "get", "head", "options"], function(r) {
    cr.prototype[r] = function(l, o) {
        return this.request(fr(o || {}, {
            method: r,
            url: l,
            data: (o || {}).data
        }))
    }
});
X.forEach(["post", "put", "patch"], function(r) {
    function l(o) {
        return function(c, f, m) {
            return this.request(fr(m || {}, {
                method: r,
                headers: o ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: c,
                data: f
            }))
        }
    }
    cr.prototype[r] = l(),
    cr.prototype[r + "Form"] = l(!0)
});
let $3 = class jy {
    constructor(r) {
        if (typeof r != "function")
            throw new TypeError("executor must be a function.");
        let l;
        this.promise = new Promise(function(c) {
            l = c
        }
        );
        const o = this;
        this.promise.then(u => {
            if (!o._listeners)
                return;
            let c = o._listeners.length;
            for (; c-- > 0; )
                o._listeners[c](u);
            o._listeners = null
        }
        ),
        this.promise.then = u => {
            let c;
            const f = new Promise(m => {
                o.subscribe(m),
                c = m
            }
            ).then(u);
            return f.cancel = function() {
                o.unsubscribe(c)
            }
            ,
            f
        }
        ,
        r(function(c, f, m) {
            o.reason || (o.reason = new ol(c,f,m),
            l(o.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(r) {
        if (this.reason) {
            r(this.reason);
            return
        }
        this._listeners ? this._listeners.push(r) : this._listeners = [r]
    }
    unsubscribe(r) {
        if (!this._listeners)
            return;
        const l = this._listeners.indexOf(r);
        l !== -1 && this._listeners.splice(l, 1)
    }
    toAbortSignal() {
        const r = new AbortController
          , l = o => {
            r.abort(o)
        }
        ;
        return this.subscribe(l),
        r.signal.unsubscribe = () => this.unsubscribe(l),
        r.signal
    }
    static source() {
        let r;
        return {
            token: new jy(function(u) {
                r = u
            }
            ),
            cancel: r
        }
    }
}
;
function V3(a) {
    return function(l) {
        return a.apply(null, l)
    }
}
function Y3(a) {
    return X.isObject(a) && a.isAxiosError === !0
}
const Hf = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(Hf).forEach( ([a,r]) => {
    Hf[r] = a
}
);
function Uy(a) {
    const r = new cr(a)
      , l = hy(cr.prototype.request, r);
    return X.extend(l, cr.prototype, r, {
        allOwnKeys: !0
    }),
    X.extend(l, r, null, {
        allOwnKeys: !0
    }),
    l.create = function(u) {
        return Uy(fr(a, u))
    }
    ,
    l
}
const gt = Uy(Ti);
gt.Axios = cr;
gt.CanceledError = ol;
gt.CancelToken = $3;
gt.isCancel = Ay;
gt.VERSION = zy;
gt.toFormData = wu;
gt.AxiosError = Me;
gt.Cancel = gt.CanceledError;
gt.all = function(r) {
    return Promise.all(r)
}
;
gt.spread = V3;
gt.isAxiosError = Y3;
gt.mergeConfig = fr;
gt.AxiosHeaders = Qt;
gt.formToJSON = a => Cy(X.isHTMLForm(a) ? new FormData(a) : a);
gt.getAdapter = Ny.getAdapter;
gt.HttpStatusCode = Hf;
gt.default = gt;
const {Axios: Dx, AxiosError: _x, CanceledError: Mx, isCancel: kx, CancelToken: Lx, VERSION: Nx, all: zx, Cancel: jx, isAxiosError: Ux, spread: Hx, toFormData: Bx, AxiosHeaders: qx, HttpStatusCode: $x, formToJSON: Vx, getAdapter: Yx, mergeConfig: Gx} = gt
  , G3 = "https://jwt-api-node.vercel.app"
  , Si = gt.create({
    baseURL: G3
});
Si.interceptors.response.use(a => a, a => Promise.reject(a.response && a.response.data || "Something went wrong"));
class pi extends Error {
}
pi.prototype.name = "InvalidTokenError";
function P3(a) {
    return decodeURIComponent(atob(a).replace(/(.)/g, (r, l) => {
        let o = l.charCodeAt(0).toString(16).toUpperCase();
        return o.length < 2 && (o = "0" + o),
        "%" + o
    }
    ))
}
function X3(a) {
    let r = a.replace(/-/g, "+").replace(/_/g, "/");
    switch (r.length % 4) {
    case 0:
        break;
    case 2:
        r += "==";
        break;
    case 3:
        r += "=";
        break;
    default:
        throw new Error("base64 string is not of the correct length")
    }
    try {
        return P3(r)
    } catch {
        return atob(r)
    }
}
function Q3(a, r) {
    if (typeof a != "string")
        throw new pi("Invalid token specified: must be a string");
    r || (r = {});
    const l = r.header === !0 ? 0 : 1
      , o = a.split(".")[l];
    if (typeof o != "string")
        throw new pi(`Invalid token specified: missing part #${l + 1}`);
    let u;
    try {
        u = X3(o)
    } catch (c) {
        throw new pi(`Invalid token specified: invalid base64 for part #${l + 1} (${c.message})`)
    }
    try {
        return JSON.parse(u)
    } catch (c) {
        throw new pi(`Invalid token specified: invalid json for part #${l + 1} (${c.message})`)
    }
}
const Z3 = a => {
    if (typeof a != "string")
        return console.error("Invalid token format."),
        !1;
    try {
        const r = Q3(a)
          , l = Date.now() / 1e3;
        return r.exp > l
    } catch (r) {
        return console.error("Failed to decode token:", r),
        !1
    }
}
  , gf = a => {
    typeof a == "string" && a.trim() !== "" ? (localStorage.setItem("authToken", a),
    Si.defaults.headers.common.Authorization = `Bearer ${a}`) : (localStorage.removeItem("authToken"),
    delete Si.defaults.headers.common.Authorization)
}
;
function ra(a) {
    const r = w.createContext(null);
    return [ ({children: u, value: c}) => Q.jsx(r.Provider, {
        value: c,
        children: u
    }), () => {
        const u = w.useContext(r);
        if (u === null)
            throw new Error(a);
        return u
    }
    ]
}
const [F3,K3] = ra("useAuthContext must be used within AuthProvider")
  , J3 = {
    isAuthenticated: !1,
    isLoading: !1,
    isInitialized: !1,
    errorMessage: null,
    user: null
}
  , I3 = {
    INITIALIZE: (a, r) => {
        const {isAuthenticated: l, user: o} = r.payload;
        return {
            ...a,
            isAuthenticated: l,
            isInitialized: !0,
            user: o
        }
    }
    ,
    LOGIN_REQUEST: a => ({
        ...a,
        isLoading: !0
    }),
    LOGIN_SUCCESS: (a, r) => {
        const {user: l} = r.payload;
        return {
            ...a,
            isAuthenticated: !0,
            isLoading: !1,
            user: l
        }
    }
    ,
    LOGIN_ERROR: (a, r) => {
        const {errorMessage: l} = r.payload;
        return {
            ...a,
            errorMessage: l,
            isLoading: !1
        }
    }
    ,
    LOGOUT: a => ({
        ...a,
        isAuthenticated: !1,
        user: null
    })
}
  , W3 = (a, r) => {
    const l = I3[r.type];
    return l ? l(a, r) : a
}
;
function Hy({children: a}) {
    const [r,l] = w.useReducer(W3, J3);
    w.useEffect( () => {
        (async () => {
            try {
                const f = window.localStorage.getItem("authToken");
                if (f && Z3(f)) {
                    gf(f);
                    const m = await Si.get("/user/profile")
                      , {user: h} = m.data;
                    l({
                        type: "INITIALIZE",
                        payload: {
                            isAuthenticated: !0,
                            user: h
                        }
                    })
                } else
                    l({
                        type: "INITIALIZE",
                        payload: {
                            isAuthenticated: !1,
                            user: null
                        }
                    })
            } catch (f) {
                console.error(f),
                l({
                    type: "INITIALIZE",
                    payload: {
                        isAuthenticated: !1,
                        user: null
                    }
                })
            }
        }
        )()
    }
    , []);
    const o = async ({username: c, password: f}) => {
        l({
            type: "LOGIN_REQUEST"
        });
        try {
            const m = await Si.post("/login", {
                username: c,
                password: f
            })
              , {authToken: h, user: g} = m.data;
            if (!dy(h) && !a5(g))
                throw new Error("Response is not vallid");
            gf(h),
            l({
                type: "LOGIN_SUCCESS",
                payload: {
                    user: g
                }
            })
        } catch (m) {
            l({
                type: "LOGIN_ERROR",
                payload: {
                    errorMessage: m
                }
            })
        }
    }
      , u = async () => {
        gf(null),
        l({
            type: "LOGOUT"
        })
    }
    ;
    return a ? Q.jsx(F3, {
        value: {
            ...r,
            login: o,
            logout: u
        },
        children: a
    }) : null
}
Hy.propTypes = {
    children: x.node
};
const La = {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    "2XL": 1536
}
  , Ou = typeof window > "u" || typeof document > "u"
  , [eE,tE] = ra("useBreakpointsContext must be used within BreakpointsContext")
  , nE = {
    ...qy()
};
function By({children: a}) {
    const [r,l] = w.useState(nE)
      , o = w.useRef(null);
    return w.useEffect( () => {
        const u = () => {
            const c = qy();
            c.name !== r.name && l({
                ...c
            })
        }
        ;
        return Ou || (o.current = new ResizeObserver(u),
        o.current.observe(document.documentElement)),
        () => {
            o.current && o.current.disconnect()
        }
    }
    , [r.name]),
    a ? Q.jsx(eE, {
        value: r,
        children: a
    }) : null
}
function qy() {
    if (Ou)
        return {
            name: "",
            isXs: !1,
            isSm: !1,
            isMd: !1,
            isLg: !1,
            isXl: !1,
            is2xl: !1,
            smAndDown: !1,
            smAndUp: !1,
            mdAndDown: !1,
            mdAndUp: !1,
            lgAndDown: !1,
            lgAndUp: !1,
            xlAndDown: !1,
            xlAndUp: !1,
            ...La
        };
    const a = window.innerWidth;
    let r = "";
    const l = a < La.SM
      , o = a < La.MD && !l
      , u = a < La.LG && !(o || l)
      , c = a < La.XL && !(u || o || l)
      , f = a < La["2XL"] && !(c || u || o || l)
      , m = a >= La["2XL"];
    return l && (r = "xs"),
    o && (r = "sm"),
    u && (r = "md"),
    c && (r = "lg"),
    f && (r = "xl"),
    m && (r = "2xl"),
    {
        name: r,
        isXs: l,
        isSm: o,
        isMd: u,
        isLg: c,
        isXl: f,
        is2xl: m,
        smAndDown: (l || o) && !(u || c || f || m),
        smAndUp: !l && (o || u || c || f || m),
        mdAndDown: (l || o || u) && !(c || f || m),
        mdAndUp: !(l || o) && (u || c || f || m),
        lgAndDown: (l || o || u || c) && !(f || m),
        lgAndUp: !(l || o || u) && (c || f || m),
        xlAndDown: (l || o || u || c || f) && !m,
        xlAndUp: !(l || o || u || c) && (f || m),
        ...La
    }
}
By.propTypes = {
    children: x.node
};
var tu = {
    exports: {}
}, aE = tu.exports, Pg;
function rE() {
    return Pg || (Pg = 1,
    function(a, r) {
        (function(l, o) {
            a.exports = o()
        }
        )(aE, function() {
            var l = 1e3
              , o = 6e4
              , u = 36e5
              , c = "millisecond"
              , f = "second"
              , m = "minute"
              , h = "hour"
              , g = "day"
              , p = "week"
              , v = "month"
              , b = "quarter"
              , R = "year"
              , S = "date"
              , D = "Invalid Date"
              , O = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
              , z = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
              , G = {
                name: "en",
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                ordinal: function(le) {
                    var J = ["th", "st", "nd", "rd"]
                      , A = le % 100;
                    return "[" + le + (J[(A - 20) % 10] || J[A] || J[0]) + "]"
                }
            }
              , $ = function(le, J, A) {
                var P = String(le);
                return !P || P.length >= J ? le : "" + Array(J + 1 - P.length).join(A) + le
            }
              , ee = {
                s: $,
                z: function(le) {
                    var J = -le.utcOffset()
                      , A = Math.abs(J)
                      , P = Math.floor(A / 60)
                      , Z = A % 60;
                    return (J <= 0 ? "+" : "-") + $(P, 2, "0") + ":" + $(Z, 2, "0")
                },
                m: function le(J, A) {
                    if (J.date() < A.date())
                        return -le(A, J);
                    var P = 12 * (A.year() - J.year()) + (A.month() - J.month())
                      , Z = J.clone().add(P, v)
                      , re = A - Z < 0
                      , T = J.clone().add(P + (re ? -1 : 1), v);
                    return +(-(P + (A - Z) / (re ? Z - T : T - Z)) || 0)
                },
                a: function(le) {
                    return le < 0 ? Math.ceil(le) || 0 : Math.floor(le)
                },
                p: function(le) {
                    return {
                        M: v,
                        y: R,
                        w: p,
                        d: g,
                        D: S,
                        h,
                        m,
                        s: f,
                        ms: c,
                        Q: b
                    }[le] || String(le || "").toLowerCase().replace(/s$/, "")
                },
                u: function(le) {
                    return le === void 0
                }
            }
              , L = "en"
              , _ = {};
            _[L] = G;
            var ne = "$isDayjsObject"
              , oe = function(le) {
                return le instanceof xe || !(!le || !le[ne])
            }
              , ce = function le(J, A, P) {
                var Z;
                if (!J)
                    return L;
                if (typeof J == "string") {
                    var re = J.toLowerCase();
                    _[re] && (Z = re),
                    A && (_[re] = A,
                    Z = re);
                    var T = J.split("-");
                    if (!Z && T.length > 1)
                        return le(T[0])
                } else {
                    var V = J.name;
                    _[V] = J,
                    Z = V
                }
                return !P && Z && (L = Z),
                Z || !P && L
            }
              , he = function(le, J) {
                if (oe(le))
                    return le.clone();
                var A = typeof J == "object" ? J : {};
                return A.date = le,
                A.args = arguments,
                new xe(A)
            }
              , se = ee;
            se.l = ce,
            se.i = oe,
            se.w = function(le, J) {
                return he(le, {
                    locale: J.$L,
                    utc: J.$u,
                    x: J.$x,
                    $offset: J.$offset
                })
            }
            ;
            var xe = function() {
                function le(A) {
                    this.$L = ce(A.locale, null, !0),
                    this.parse(A),
                    this.$x = this.$x || A.x || {},
                    this[ne] = !0
                }
                var J = le.prototype;
                return J.parse = function(A) {
                    this.$d = function(P) {
                        var Z = P.date
                          , re = P.utc;
                        if (Z === null)
                            return new Date(NaN);
                        if (se.u(Z))
                            return new Date;
                        if (Z instanceof Date)
                            return new Date(Z);
                        if (typeof Z == "string" && !/Z$/i.test(Z)) {
                            var T = Z.match(O);
                            if (T) {
                                var V = T[2] - 1 || 0
                                  , ae = (T[7] || "0").substring(0, 3);
                                return re ? new Date(Date.UTC(T[1], V, T[3] || 1, T[4] || 0, T[5] || 0, T[6] || 0, ae)) : new Date(T[1],V,T[3] || 1,T[4] || 0,T[5] || 0,T[6] || 0,ae)
                            }
                        }
                        return new Date(Z)
                    }(A),
                    this.init()
                }
                ,
                J.init = function() {
                    var A = this.$d;
                    this.$y = A.getFullYear(),
                    this.$M = A.getMonth(),
                    this.$D = A.getDate(),
                    this.$W = A.getDay(),
                    this.$H = A.getHours(),
                    this.$m = A.getMinutes(),
                    this.$s = A.getSeconds(),
                    this.$ms = A.getMilliseconds()
                }
                ,
                J.$utils = function() {
                    return se
                }
                ,
                J.isValid = function() {
                    return this.$d.toString() !== D
                }
                ,
                J.isSame = function(A, P) {
                    var Z = he(A);
                    return this.startOf(P) <= Z && Z <= this.endOf(P)
                }
                ,
                J.isAfter = function(A, P) {
                    return he(A) < this.startOf(P)
                }
                ,
                J.isBefore = function(A, P) {
                    return this.endOf(P) < he(A)
                }
                ,
                J.$g = function(A, P, Z) {
                    return se.u(A) ? this[P] : this.set(Z, A)
                }
                ,
                J.unix = function() {
                    return Math.floor(this.valueOf() / 1e3)
                }
                ,
                J.valueOf = function() {
                    return this.$d.getTime()
                }
                ,
                J.startOf = function(A, P) {
                    var Z = this
                      , re = !!se.u(P) || P
                      , T = se.p(A)
                      , V = function(xt, qe) {
                        var pt = se.w(Z.$u ? Date.UTC(Z.$y, qe, xt) : new Date(Z.$y,qe,xt), Z);
                        return re ? pt : pt.endOf(g)
                    }
                      , ae = function(xt, qe) {
                        return se.w(Z.toDate()[xt].apply(Z.toDate("s"), (re ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(qe)), Z)
                    }
                      , te = this.$W
                      , ue = this.$M
                      , Te = this.$D
                      , pe = "set" + (this.$u ? "UTC" : "");
                    switch (T) {
                    case R:
                        return re ? V(1, 0) : V(31, 11);
                    case v:
                        return re ? V(1, ue) : V(0, ue + 1);
                    case p:
                        var lt = this.$locale().weekStart || 0
                          , Ye = (te < lt ? te + 7 : te) - lt;
                        return V(re ? Te - Ye : Te + (6 - Ye), ue);
                    case g:
                    case S:
                        return ae(pe + "Hours", 0);
                    case h:
                        return ae(pe + "Minutes", 1);
                    case m:
                        return ae(pe + "Seconds", 2);
                    case f:
                        return ae(pe + "Milliseconds", 3);
                    default:
                        return this.clone()
                    }
                }
                ,
                J.endOf = function(A) {
                    return this.startOf(A, !1)
                }
                ,
                J.$set = function(A, P) {
                    var Z, re = se.p(A), T = "set" + (this.$u ? "UTC" : ""), V = (Z = {},
                    Z[g] = T + "Date",
                    Z[S] = T + "Date",
                    Z[v] = T + "Month",
                    Z[R] = T + "FullYear",
                    Z[h] = T + "Hours",
                    Z[m] = T + "Minutes",
                    Z[f] = T + "Seconds",
                    Z[c] = T + "Milliseconds",
                    Z)[re], ae = re === g ? this.$D + (P - this.$W) : P;
                    if (re === v || re === R) {
                        var te = this.clone().set(S, 1);
                        te.$d[V](ae),
                        te.init(),
                        this.$d = te.set(S, Math.min(this.$D, te.daysInMonth())).$d
                    } else
                        V && this.$d[V](ae);
                    return this.init(),
                    this
                }
                ,
                J.set = function(A, P) {
                    return this.clone().$set(A, P)
                }
                ,
                J.get = function(A) {
                    return this[se.p(A)]()
                }
                ,
                J.add = function(A, P) {
                    var Z, re = this;
                    A = Number(A);
                    var T = se.p(P)
                      , V = function(ue) {
                        var Te = he(re);
                        return se.w(Te.date(Te.date() + Math.round(ue * A)), re)
                    };
                    if (T === v)
                        return this.set(v, this.$M + A);
                    if (T === R)
                        return this.set(R, this.$y + A);
                    if (T === g)
                        return V(1);
                    if (T === p)
                        return V(7);
                    var ae = (Z = {},
                    Z[m] = o,
                    Z[h] = u,
                    Z[f] = l,
                    Z)[T] || 1
                      , te = this.$d.getTime() + A * ae;
                    return se.w(te, this)
                }
                ,
                J.subtract = function(A, P) {
                    return this.add(-1 * A, P)
                }
                ,
                J.format = function(A) {
                    var P = this
                      , Z = this.$locale();
                    if (!this.isValid())
                        return Z.invalidDate || D;
                    var re = A || "YYYY-MM-DDTHH:mm:ssZ"
                      , T = se.z(this)
                      , V = this.$H
                      , ae = this.$m
                      , te = this.$M
                      , ue = Z.weekdays
                      , Te = Z.months
                      , pe = Z.meridiem
                      , lt = function(qe, pt, ln, Cn) {
                        return qe && (qe[pt] || qe(P, re)) || ln[pt].slice(0, Cn)
                    }
                      , Ye = function(qe) {
                        return se.s(V % 12 || 12, qe, "0")
                    }
                      , xt = pe || function(qe, pt, ln) {
                        var Cn = qe < 12 ? "AM" : "PM";
                        return ln ? Cn.toLowerCase() : Cn
                    }
                    ;
                    return re.replace(z, function(qe, pt) {
                        return pt || function(ln) {
                            switch (ln) {
                            case "YY":
                                return String(P.$y).slice(-2);
                            case "YYYY":
                                return se.s(P.$y, 4, "0");
                            case "M":
                                return te + 1;
                            case "MM":
                                return se.s(te + 1, 2, "0");
                            case "MMM":
                                return lt(Z.monthsShort, te, Te, 3);
                            case "MMMM":
                                return lt(Te, te);
                            case "D":
                                return P.$D;
                            case "DD":
                                return se.s(P.$D, 2, "0");
                            case "d":
                                return String(P.$W);
                            case "dd":
                                return lt(Z.weekdaysMin, P.$W, ue, 2);
                            case "ddd":
                                return lt(Z.weekdaysShort, P.$W, ue, 3);
                            case "dddd":
                                return ue[P.$W];
                            case "H":
                                return String(V);
                            case "HH":
                                return se.s(V, 2, "0");
                            case "h":
                                return Ye(1);
                            case "hh":
                                return Ye(2);
                            case "a":
                                return xt(V, ae, !0);
                            case "A":
                                return xt(V, ae, !1);
                            case "m":
                                return String(ae);
                            case "mm":
                                return se.s(ae, 2, "0");
                            case "s":
                                return String(P.$s);
                            case "ss":
                                return se.s(P.$s, 2, "0");
                            case "SSS":
                                return se.s(P.$ms, 3, "0");
                            case "Z":
                                return T
                            }
                            return null
                        }(qe) || T.replace(":", "")
                    })
                }
                ,
                J.utcOffset = function() {
                    return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                }
                ,
                J.diff = function(A, P, Z) {
                    var re, T = this, V = se.p(P), ae = he(A), te = (ae.utcOffset() - this.utcOffset()) * o, ue = this - ae, Te = function() {
                        return se.m(T, ae)
                    };
                    switch (V) {
                    case R:
                        re = Te() / 12;
                        break;
                    case v:
                        re = Te();
                        break;
                    case b:
                        re = Te() / 3;
                        break;
                    case p:
                        re = (ue - te) / 6048e5;
                        break;
                    case g:
                        re = (ue - te) / 864e5;
                        break;
                    case h:
                        re = ue / u;
                        break;
                    case m:
                        re = ue / o;
                        break;
                    case f:
                        re = ue / l;
                        break;
                    default:
                        re = ue
                    }
                    return Z ? re : se.a(re)
                }
                ,
                J.daysInMonth = function() {
                    return this.endOf(v).$D
                }
                ,
                J.$locale = function() {
                    return _[this.$L]
                }
                ,
                J.locale = function(A, P) {
                    if (!A)
                        return this.$L;
                    var Z = this.clone()
                      , re = ce(A, P, !0);
                    return re && (Z.$L = re),
                    Z
                }
                ,
                J.clone = function() {
                    return se.w(this.$d, this)
                }
                ,
                J.toDate = function() {
                    return new Date(this.valueOf())
                }
                ,
                J.toJSON = function() {
                    return this.isValid() ? this.toISOString() : null
                }
                ,
                J.toISOString = function() {
                    return this.$d.toISOString()
                }
                ,
                J.toString = function() {
                    return this.$d.toUTCString()
                }
                ,
                le
            }()
              , ge = xe.prototype;
            return he.prototype = ge,
            [["$ms", c], ["$s", f], ["$m", m], ["$H", h], ["$W", g], ["$M", v], ["$y", R], ["$D", S]].forEach(function(le) {
                ge[le[1]] = function(J) {
                    return this.$g(J, le[0], le[1])
                }
            }),
            he.extend = function(le, J) {
                return le.$i || (le(J, xe, he),
                le.$i = !0),
                he
            }
            ,
            he.locale = ce,
            he.isDayjs = oe,
            he.unix = function(le) {
                return he(1e3 * le)
            }
            ,
            he.en = _[L],
            he.Ls = _,
            he.p = {},
            he
        })
    }(tu)),
    tu.exports
}
var lE = rE();
const $y = na(lE)
  , Pt = Ou ? w.useEffect : w.useLayoutEffect;
function iE(a=!1, {onOpen: r, onClose: l}={}) {
    const [o,u] = w.useState(a)
      , c = w.useCallback( () => {
        u(h => h || (r == null || r(),
        !0))
    }
    , [r])
      , f = w.useCallback( () => {
        u(h => h && (l == null || l(),
        !1))
    }
    , [l])
      , m = w.useCallback( () => {
        o ? f() : c()
    }
    , [f, c, o]);
    return [o, {
        open: c,
        close: f,
        toggle: m
    }]
}
function Cu(a, r="") {
    const l = `tl-${w.useId()}-${r}`;
    return typeof a == "string" ? a : l
}
function Vy({value: a, defaultValue: r, finalValue: l, onChange: o= () => {}
}) {
    const [u,c] = w.useState(r !== void 0 ? r : l)
      , f = m => {
        c(m),
        o == null || o(m)
    }
    ;
    return a !== void 0 ? [a, o, !0] : [u, f, !1]
}
var Yy = Mp();
const Px = na(Yy);
function oE(a) {
    if (!a || typeof a == "string")
        return 0;
    const r = a / 36;
    return Math.round((4 + 15 * r ** .25 + r / 5) * 10)
}
function pf(a) {
    return a != null && a.current ? a.current.scrollHeight : "auto"
}
const Qo = typeof window < "u" && window.requestAnimationFrame;
function uE({transitionDuration: a, transitionTimingFunction: r="cubic-bezier(0.4, 0.0, 0.2, 1)", onTransitionEnd: l= () => {}
, opened: o, min: u="0px"}) {
    const c = w.useRef(null)
      , f = u
      , m = {
        display: u === "0px" ? "none" : null,
        height: f,
        overflow: "hidden"
    }
      , [h,g] = w.useState(o ? {} : m)
      , p = D => {
        Yy.flushSync( () => g(D))
    }
      , v = D => {
        p(O => ({
            ...O,
            ...D
        }))
    }
    ;
    function b(D) {
        return {
            transition: `height ${a || Math.min(oE(D), 500)}ms ${r}`
        }
    }
    Gy( () => {
        Qo(o ? () => {
            v({
                willChange: "height",
                display: "block",
                overflow: "hidden"
            }),
            Qo( () => {
                const D = pf(c);
                v({
                    ...b(D),
                    height: D
                })
            }
            )
        }
        : () => {
            const D = pf(c);
            v({
                ...b(D),
                willChange: "height",
                height: D
            }),
            Qo( () => v({
                height: f,
                overflow: "hidden"
            }))
        }
        )
    }
    , [o]);
    const R = D => {
        if (!(D.target !== c.current || D.propertyName !== "height"))
            if (o) {
                const O = pf(c);
                O === h.height ? p({}) : v({
                    height: O
                }),
                l()
            } else
                h.height === f && (p(m),
                l())
    }
    ;
    function S({style: D={}, refKey: O="ref", ...z}={}) {
        const G = z[O];
        return {
            "aria-hidden": !o,
            ...z,
            [O]: Oi(c, G),
            onTransitionEnd: R,
            style: {
                boxSizing: "border-box",
                ...D,
                ...h
            }
        }
    }
    return S
}
function sE(a, r) {
    typeof a == "function" ? a(r) : typeof a == "object" && a !== null && "current"in a && (a.current = r)
}
function Oi(...a) {
    return r => {
        a.forEach(l => sE(l, r))
    }
}
function cE(...a) {
    return w.useCallback(Oi(...a), a)
}
const fE = document.head || document.getElementsByTagName("head")[0];
function Xx(a) {
    fE.appendChild(a)
}
function Qx(a, r) {
    a.styleSheet ? a.styleSheet.cssText = r : a.appendChild(document.createTextNode(r))
}
function Zx() {
    const a = document.createElement("style");
    return a.type = "text/css",
    a
}
function Xg(a, r, l, o) {
    const u = w.useRef(r);
    Pt( () => {
        u.current = r
    }
    , [r]),
    w.useEffect( () => {
        const c = (l == null ? void 0 : l.current) ?? window;
        if (!(c && c.addEventListener))
            return;
        const f = m => {
            u.current(m)
        }
        ;
        return c.addEventListener(a, f, o),
        () => {
            c.removeEventListener(a, f, o)
        }
    }
    , [a, l, o])
}
var yf, Qg;
function dE() {
    if (Qg)
        return yf;
    Qg = 1;
    var a = uy()
      , r = function() {
        return a.Date.now()
    };
    return yf = r,
    yf
}
var vf, Zg;
function hE() {
    if (Zg)
        return vf;
    Zg = 1;
    var a = /\s/;
    function r(l) {
        for (var o = l.length; o-- && a.test(l.charAt(o)); )
            ;
        return o
    }
    return vf = r,
    vf
}
var bf, Fg;
function mE() {
    if (Fg)
        return bf;
    Fg = 1;
    var a = hE()
      , r = /^\s+/;
    function l(o) {
        return o && o.slice(0, a(o) + 1).replace(r, "")
    }
    return bf = l,
    bf
}
var Sf, Kg;
function gE() {
    if (Kg)
        return Sf;
    Kg = 1;
    var a = cy()
      , r = fy()
      , l = "[object Symbol]";
    function o(u) {
        return typeof u == "symbol" || r(u) && a(u) == l
    }
    return Sf = o,
    Sf
}
var Ef, Jg;
function pE() {
    if (Jg)
        return Ef;
    Jg = 1;
    var a = mE()
      , r = Wf()
      , l = gE()
      , o = NaN
      , u = /^[-+]0x[0-9a-f]+$/i
      , c = /^0b[01]+$/i
      , f = /^0o[0-7]+$/i
      , m = parseInt;
    function h(g) {
        if (typeof g == "number")
            return g;
        if (l(g))
            return o;
        if (r(g)) {
            var p = typeof g.valueOf == "function" ? g.valueOf() : g;
            g = r(p) ? p + "" : p
        }
        if (typeof g != "string")
            return g === 0 ? g : +g;
        g = a(g);
        var v = c.test(g);
        return v || f.test(g) ? m(g.slice(2), v ? 2 : 8) : u.test(g) ? o : +g
    }
    return Ef = h,
    Ef
}
var xf, Ig;
function yE() {
    if (Ig)
        return xf;
    Ig = 1;
    var a = Wf()
      , r = dE()
      , l = pE()
      , o = "Expected a function"
      , u = Math.max
      , c = Math.min;
    function f(m, h, g) {
        var p, v, b, R, S, D, O = 0, z = !1, G = !1, $ = !0;
        if (typeof m != "function")
            throw new TypeError(o);
        h = l(h) || 0,
        a(g) && (z = !!g.leading,
        G = "maxWait"in g,
        b = G ? u(l(g.maxWait) || 0, h) : b,
        $ = "trailing"in g ? !!g.trailing : $);
        function ee(ge) {
            var le = p
              , J = v;
            return p = v = void 0,
            O = ge,
            R = m.apply(J, le),
            R
        }
        function L(ge) {
            return O = ge,
            S = setTimeout(oe, h),
            z ? ee(ge) : R
        }
        function _(ge) {
            var le = ge - D
              , J = ge - O
              , A = h - le;
            return G ? c(A, b - J) : A
        }
        function ne(ge) {
            var le = ge - D
              , J = ge - O;
            return D === void 0 || le >= h || le < 0 || G && J >= b
        }
        function oe() {
            var ge = r();
            if (ne(ge))
                return ce(ge);
            S = setTimeout(oe, _(ge))
        }
        function ce(ge) {
            return S = void 0,
            $ && p ? ee(ge) : (p = v = void 0,
            R)
        }
        function he() {
            S !== void 0 && clearTimeout(S),
            O = 0,
            p = D = v = S = void 0
        }
        function se() {
            return S === void 0 ? R : ce(r())
        }
        function xe() {
            var ge = r()
              , le = ne(ge);
            if (p = arguments,
            v = this,
            D = ge,
            le) {
                if (S === void 0)
                    return L(D);
                if (G)
                    return clearTimeout(S),
                    S = setTimeout(oe, h),
                    ee(D)
            }
            return S === void 0 && (S = setTimeout(oe, h)),
            R
        }
        return xe.cancel = he,
        xe.flush = se,
        xe
    }
    return xf = f,
    xf
}
var vE = yE();
const bE = na(vE);
function SE(a={}) {
    const {isEnabled: r=!0, overflowCheck: l="vertical", offset: o=0} = a
      , [u,c] = w.useState({})
      , f = w.useCallback( () => c({}), [])
      , m = w.useRef();
    return w.useEffect( () => {
        const h = m == null ? void 0 : m.current
          , g = () => {
            if (h) {
                if (l === "vertical" || l === "both") {
                    const R = h.scrollTop > o
                      , S = h.scrollTop + h.clientHeight + o < h.scrollHeight;
                    R && S ? (h.dataset.topBottomScroll = "true",
                    h.removeAttribute("data-top-scroll"),
                    h.removeAttribute("data-bottom-scroll")) : (h.dataset.topScroll = R.toString(),
                    h.dataset.bottomScroll = S.toString(),
                    h.removeAttribute("data-top-bottom-scroll"))
                }
                if (l === "horizontal" || l === "both") {
                    const R = h.scrollLeft > o
                      , S = h.scrollLeft + h.clientWidth + o < h.scrollWidth;
                    R && S ? (h.dataset.leftRightScroll = "true",
                    h.removeAttribute("data-left-scroll"),
                    h.removeAttribute("data-right-scroll")) : (h.dataset.leftScroll = R.toString(),
                    h.dataset.rightScroll = S.toString(),
                    h.removeAttribute("data-left-right-scroll"))
                }
            }
        }
          , p = () => {
            h && (h.removeAttribute("data-top-scroll"),
            h.removeAttribute("data-bottom-scroll"),
            h.removeAttribute("data-top-bottom-scroll"),
            h.removeAttribute("data-left-scroll"),
            h.removeAttribute("data-right-scroll"),
            h.removeAttribute("data-left-right-scroll"))
        }
          , v = bE(g, 100)
          , b = new ResizeObserver(v);
        return r ? (g(),
        h && (b.observe(h),
        h.addEventListener("scroll", g))) : p(),
        () => {
            h == null || h.removeEventListener("scroll", g),
            b.disconnect(),
            p()
        }
    }
    , [r, l, o, m, u]),
    {
        ref: m,
        recalculate: f
    }
}
function Gy(a, r) {
    const l = w.useRef(!1);
    w.useEffect( () => () => {
        l.current = !1
    }
    , []),
    w.useEffect( () => {
        if (l.current)
            return a();
        l.current = !0
    }
    , r)
}
function Wg(a) {
    const r = w.useRef( () => {
        throw new Error("Cannot call an event handler while rendering.")
    }
    );
    return Pt( () => {
        r.current = a
    }
    , [a]),
    w.useCallback( (...l) => {
        var o;
        return (o = r.current) == null ? void 0 : o.call(r, ...l)
    }
    , [r])
}
const wf = typeof window > "u";
function EE(a, r, l={}) {
    const {initializeWithValue: o=!0} = l
      , u = w.useCallback(b => l.serializer ? l.serializer(b) : JSON.stringify(b), [l])
      , c = w.useCallback(b => {
        if (l.deserializer)
            return l.deserializer(b);
        if (b === "undefined")
            return;
        const R = r instanceof Function ? r() : r;
        let S;
        try {
            S = JSON.parse(b)
        } catch (D) {
            return console.error("Error parsing JSON:", D),
            R
        }
        return S
    }
    , [l, r])
      , f = w.useCallback( () => {
        const b = r instanceof Function ? r() : r;
        if (wf)
            return b;
        try {
            const R = window.localStorage.getItem(a);
            return R ? c(R) : b
        } catch (R) {
            return console.warn(`Error reading localStorage key “${a}”:`, R),
            b
        }
    }
    , [r, a, c])
      , [m,h] = w.useState( () => o ? f() : r instanceof Function ? r() : r)
      , g = Wg(b => {
        wf && console.warn(`Tried setting localStorage key “${a}” even though environment is not a client`);
        try {
            const R = b instanceof Function ? b(f()) : b;
            window.localStorage.setItem(a, u(R)),
            h(R),
            window.dispatchEvent(new StorageEvent("local-storage",{
                key: a
            }))
        } catch (R) {
            console.warn(`Error setting localStorage key “${a}”:`, R)
        }
    }
    )
      , p = Wg( () => {
        wf && console.warn(`Tried removing localStorage key “${a}” even though environment is not a client`);
        const b = r instanceof Function ? r() : r;
        window.localStorage.removeItem(a),
        h(b),
        window.dispatchEvent(new StorageEvent("local-storage",{
            key: a
        }))
    }
    );
    w.useEffect( () => {
        h(f())
    }
    , [a]);
    const v = w.useCallback(b => {
        b.key && b.key !== a || h(f())
    }
    , [a, f]);
    return Xg("storage", v),
    Xg("local-storage", v),
    [m, g, p]
}
function xE(a, {defaultValue: r=!1, initializeWithValue: l=!0}={}) {
    const o = m => Ou ? r : window.matchMedia(m).matches
      , [u,c] = w.useState( () => l ? o(a) : r);
    function f() {
        c(o(a))
    }
    return Pt( () => {
        const m = window.matchMedia(a);
        return f(),
        m.addListener ? m.addListener(f) : m.addEventListener("change", f),
        () => {
            m.removeListener ? m.removeListener(f) : m.removeEventListener("change", f)
        }
    }
    , [a]),
    u
}
var _t = {
    slate: {
        50: "oklch(98.4% 0.003 247.858)",
        100: "oklch(96.8% 0.007 247.896)",
        200: "oklch(92.9% 0.013 255.508)",
        300: "oklch(86.9% 0.022 252.894)",
        400: "oklch(70.4% 0.04 256.788)",
        500: "oklch(55.4% 0.046 257.417)",
        600: "oklch(44.6% 0.043 257.281)",
        700: "oklch(37.2% 0.044 257.287)",
        800: "oklch(27.9% 0.041 260.031)",
        900: "oklch(20.8% 0.042 265.755)",
        950: "oklch(12.9% 0.042 264.695)"
    },
    gray: {
        50: "oklch(98.5% 0.002 247.839)",
        100: "oklch(96.7% 0.003 264.542)",
        200: "oklch(92.8% 0.006 264.531)",
        300: "oklch(87.2% 0.01 258.338)",
        400: "oklch(70.7% 0.022 261.325)",
        500: "oklch(55.1% 0.027 264.364)",
        600: "oklch(44.6% 0.03 256.802)",
        700: "oklch(37.3% 0.034 259.733)",
        800: "oklch(27.8% 0.033 256.848)",
        900: "oklch(21% 0.034 264.665)",
        950: "oklch(13% 0.028 261.692)"
    },
    neutral: {
        50: "oklch(98.5% 0 0)",
        100: "oklch(97% 0 0)",
        200: "oklch(92.2% 0 0)",
        300: "oklch(87% 0 0)",
        400: "oklch(70.8% 0 0)",
        500: "oklch(55.6% 0 0)",
        600: "oklch(43.9% 0 0)",
        700: "oklch(37.1% 0 0)",
        800: "oklch(26.9% 0 0)",
        900: "oklch(20.5% 0 0)",
        950: "oklch(14.5% 0 0)"
    },
    amber: {
        50: "oklch(98.7% 0.022 95.277)",
        100: "oklch(96.2% 0.059 95.617)",
        200: "oklch(92.4% 0.12 95.746)",
        300: "oklch(87.9% 0.169 91.605)",
        400: "oklch(82.8% 0.189 84.429)",
        500: "oklch(76.9% 0.188 70.08)",
        600: "oklch(66.6% 0.179 58.318)",
        700: "oklch(55.5% 0.163 48.998)",
        800: "oklch(47.3% 0.137 46.201)",
        900: "oklch(41.4% 0.112 45.904)",
        950: "oklch(27.9% 0.077 45.635)"
    },
    green: {
        50: "oklch(98.2% 0.018 155.826)",
        100: "oklch(96.2% 0.044 156.743)",
        200: "oklch(92.5% 0.084 155.995)",
        300: "oklch(87.1% 0.15 154.449)",
        400: "oklch(79.2% 0.209 151.711)",
        500: "oklch(72.3% 0.219 149.579)",
        600: "oklch(62.7% 0.194 149.214)",
        700: "oklch(52.7% 0.154 150.069)",
        800: "oklch(44.8% 0.119 151.328)",
        900: "oklch(39.3% 0.095 152.535)",
        950: "oklch(26.6% 0.065 152.934)"
    },
    emerald: {
        400: "oklch(76.5% 0.177 163.223)",
        500: "oklch(69.6% 0.17 162.48)",
        600: "oklch(59.6% 0.145 163.225)",
        700: "oklch(50.8% 0.118 165.612)"
    },
    sky: {
        400: "oklch(74.6% 0.16 232.661)",
        500: "oklch(68.5% 0.169 237.323)",
        600: "oklch(58.8% 0.158 241.966)",
        700: "oklch(50% 0.134 242.749)"
    },
    blue: {
        50: "oklch(97% 0.014 254.604)",
        100: "oklch(93.2% 0.032 255.585)",
        200: "oklch(88.2% 0.059 254.128)",
        300: "oklch(80.9% 0.105 251.813)",
        400: "oklch(70.7% 0.165 254.624)",
        500: "oklch(62.3% 0.214 259.815)",
        600: "oklch(54.6% 0.245 262.881)",
        700: "oklch(48.8% 0.243 264.376)",
        800: "oklch(42.4% 0.199 265.638)",
        900: "oklch(37.9% 0.146 265.522)",
        950: "oklch(28.2% 0.091 267.935)"
    },
    indigo: {
        50: "oklch(96.2% 0.018 272.314)",
        100: "oklch(93% 0.034 272.788)",
        200: "oklch(87% 0.065 274.039)",
        300: "oklch(78.5% 0.115 274.713)",
        400: "oklch(67.3% 0.182 276.935)",
        500: "oklch(58.5% 0.233 277.117)",
        600: "oklch(51.1% 0.262 276.966)",
        700: "oklch(45.7% 0.24 277.023)",
        800: "oklch(39.8% 0.195 277.366)",
        900: "oklch(35.9% 0.144 278.697)",
        950: "oklch(25.7% 0.09 281.288)"
    },
    purple: {
        50: "oklch(97.7% 0.014 308.299)",
        100: "oklch(94.6% 0.033 307.174)",
        200: "oklch(90.2% 0.063 306.703)",
        300: "oklch(82.7% 0.119 306.383)",
        400: "oklch(71.4% 0.203 305.504)",
        500: "oklch(62.7% 0.265 303.9)",
        600: "oklch(55.8% 0.288 302.321)",
        700: "oklch(49.6% 0.265 301.924)",
        800: "oklch(43.8% 0.218 303.724)",
        900: "oklch(38.1% 0.176 304.987)",
        950: "oklch(29.1% 0.149 302.717)"
    },
    rose: {
        50: "oklch(96.9% 0.015 12.422)",
        100: "oklch(94.1% 0.03 12.58)",
        200: "oklch(89.2% 0.058 10.001)",
        300: "oklch(81% 0.117 11.638)",
        400: "oklch(71.2% 0.194 13.428)",
        500: "oklch(64.5% 0.246 16.439)",
        600: "oklch(58.6% 0.253 17.585)",
        700: "oklch(51.4% 0.222 16.935)",
        800: "oklch(45.5% 0.188 13.697)",
        900: "oklch(41% 0.159 10.272)",
        950: "oklch(27.1% 0.105 12.094)"
    }
};
const al = {
    gray: {
        ..._t.gray,
        150: "#EBEDF0"
    },
    slate: {
        ..._t.slate,
        150: "#E9EEF5"
    },
    neutral: {
        ..._t.neutral,
        150: "#EDEDED"
    },
    navy: {
        50: "#E7E9EF",
        100: "#C2C9D6",
        200: "#A5AFC4",
        300: "#6D7EA1",
        400: "#5C6B8A",
        450: "#465675",
        500: "#384766",
        600: "#313E59",
        700: "#24314A",
        750: "#222E45",
        800: "#202B40",
        900: "#182030"
    },
    mirage: {
        50: "#DDE5F5",
        100: "#B4BFD9",
        200: "#9EAAC4",
        300: "#6C7C9E",
        400: "#3D4E70",
        450: "#293859",
        500: "#1E2B47",
        600: "#1A2640",
        700: "#101A2E",
        750: "#0F1729",
        800: "#0C1221",
        900: "#050A16"
    },
    black: {
        50: "#EBEBED",
        100: "#D9D9DE",
        200: "#C5C5CC",
        300: "#93939C",
        400: "#4A4A4F",
        450: "#333338",
        500: "#242428",
        600: "#1F1F21",
        700: "#131314",
        750: "#0C0C0D",
        800: "#080809",
        900: "#000000"
    },
    mint: {
        50: "#E1E5EA",
        100: "#C5CCD3",
        200: "#A0ABB6",
        300: "#70838F",
        400: "#506877",
        450: "#384954",
        500: "#2A3942",
        600: "#242F38",
        700: "#152129",
        750: "#111B22",
        800: "#0D161C",
        900: "#0A1014"
    },
    cinder: {
        50: "#E6E7EB",
        100: "#D0D2DB",
        200: "#B7BAC4",
        300: "#838794",
        400: "#4C4F57",
        450: "#383A41",
        500: "#2A2C32",
        600: "#232429",
        700: "#1C1D21",
        750: "#1A1B1F",
        800: "#15161A",
        900: "#0E0F11"
    },
    indigo: _t.indigo,
    blue: _t.blue,
    green: _t.green,
    amber: _t.amber,
    purple: _t.purple,
    rose: _t.rose,
    variants: {
        "secondary-lighter": "#FF75DF",
        "secondary-light": "#FF2ECF",
        secondary: "#E000AD",
        "secondary-darker": "#B8008C",
        "info-lighter": _t.sky[400],
        "info-light": _t.sky[500],
        info: _t.sky[600],
        "info-darker": _t.sky[700],
        "success-lighter": _t.emerald[400],
        "success-light": _t.emerald[500],
        success: _t.emerald[600],
        "success-darker": _t.emerald[700],
        "warning-lighter": "#FFBA42",
        "warning-light": "#FFA71A",
        warning: "#F59200",
        "warning-darker": "#DB7C00",
        "error-lighter": "#FF8A5C",
        "error-light": "#FF6933",
        error: "#FF4F1A",
        "error-darker": "#E52E00"
    }
}
  , ep = "cinder"
  , tp = "slate"
  , np = "blue"
  , su = {
    themeMode: "system",
    isMonochrome: !1,
    themeLayout: "main-layout",
    cardSkin: "bordered",
    darkColorScheme: {
        name: ep,
        ...al[ep]
    },
    lightColorScheme: {
        name: tp,
        ...al[tp]
    },
    primaryColorScheme: {
        name: np,
        ...al[np]
    },
    defaultLang: "en",
    fallbackLang: "en",
    notification: {
        isExpanded: !1,
        position: "bottom-right",
        visibleToasts: 4
    }
}
  , _e = a => typeof a == "string"
  , hi = () => {
    let a, r;
    const l = new Promise( (o, u) => {
        a = o,
        r = u
    }
    );
    return l.resolve = a,
    l.reject = r,
    l
}
  , ap = a => a == null ? "" : "" + a
  , wE = (a, r, l) => {
    a.forEach(o => {
        r[o] && (l[o] = r[o])
    }
    )
}
  , RE = /###/g
  , rp = a => a && a.indexOf("###") > -1 ? a.replace(RE, ".") : a
  , lp = a => !a || _e(a)
  , yi = (a, r, l) => {
    const o = _e(r) ? r.split(".") : r;
    let u = 0;
    for (; u < o.length - 1; ) {
        if (lp(a))
            return {};
        const c = rp(o[u]);
        !a[c] && l && (a[c] = new l),
        Object.prototype.hasOwnProperty.call(a, c) ? a = a[c] : a = {},
        ++u
    }
    return lp(a) ? {} : {
        obj: a,
        k: rp(o[u])
    }
}
  , ip = (a, r, l) => {
    const {obj: o, k: u} = yi(a, r, Object);
    if (o !== void 0 || r.length === 1) {
        o[u] = l;
        return
    }
    let c = r[r.length - 1]
      , f = r.slice(0, r.length - 1)
      , m = yi(a, f, Object);
    for (; m.obj === void 0 && f.length; )
        c = `${f[f.length - 1]}.${c}`,
        f = f.slice(0, f.length - 1),
        m = yi(a, f, Object),
        m != null && m.obj && typeof m.obj[`${m.k}.${c}`] < "u" && (m.obj = void 0);
    m.obj[`${m.k}.${c}`] = l
}
  , TE = (a, r, l, o) => {
    const {obj: u, k: c} = yi(a, r, Object);
    u[c] = u[c] || [],
    u[c].push(l)
}
  , cu = (a, r) => {
    const {obj: l, k: o} = yi(a, r);
    if (l && Object.prototype.hasOwnProperty.call(l, o))
        return l[o]
}
  , OE = (a, r, l) => {
    const o = cu(a, l);
    return o !== void 0 ? o : cu(r, l)
}
  , Py = (a, r, l) => {
    for (const o in r)
        o !== "__proto__" && o !== "constructor" && (o in a ? _e(a[o]) || a[o]instanceof String || _e(r[o]) || r[o]instanceof String ? l && (a[o] = r[o]) : Py(a[o], r[o], l) : a[o] = r[o]);
    return a
}
  , Kr = a => a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var CE = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
};
const AE = a => _e(a) ? a.replace(/[&<>"'\/]/g, r => CE[r]) : a;
class DE {
    constructor(r) {
        this.capacity = r,
        this.regExpMap = new Map,
        this.regExpQueue = []
    }
    getRegExp(r) {
        const l = this.regExpMap.get(r);
        if (l !== void 0)
            return l;
        const o = new RegExp(r);
        return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()),
        this.regExpMap.set(r, o),
        this.regExpQueue.push(r),
        o
    }
}
const _E = [" ", ",", "?", "!", ";"]
  , ME = new DE(20)
  , kE = (a, r, l) => {
    r = r || "",
    l = l || "";
    const o = _E.filter(f => r.indexOf(f) < 0 && l.indexOf(f) < 0);
    if (o.length === 0)
        return !0;
    const u = ME.getRegExp(`(${o.map(f => f === "?" ? "\\?" : f).join("|")})`);
    let c = !u.test(a);
    if (!c) {
        const f = a.indexOf(l);
        f > 0 && !u.test(a.substring(0, f)) && (c = !0)
    }
    return c
}
  , Bf = function(a, r) {
    let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
    if (!a)
        return;
    if (a[r])
        return Object.prototype.hasOwnProperty.call(a, r) ? a[r] : void 0;
    const o = r.split(l);
    let u = a;
    for (let c = 0; c < o.length; ) {
        if (!u || typeof u != "object")
            return;
        let f, m = "";
        for (let h = c; h < o.length; ++h)
            if (h !== c && (m += l),
            m += o[h],
            f = u[m],
            f !== void 0) {
                if (["string", "number", "boolean"].indexOf(typeof f) > -1 && h < o.length - 1)
                    continue;
                c += h - c + 1;
                break
            }
        u = f
    }
    return u
}
  , fu = a => a == null ? void 0 : a.replace("_", "-")
  , LE = {
    type: "logger",
    log(a) {
        this.output("log", a)
    },
    warn(a) {
        this.output("warn", a)
    },
    error(a) {
        this.output("error", a)
    },
    output(a, r) {
        var l, o;
        (o = (l = console == null ? void 0 : console[a]) == null ? void 0 : l.apply) == null || o.call(l, console, r)
    }
};
class du {
    constructor(r) {
        let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.init(r, l)
    }
    init(r) {
        let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.prefix = l.prefix || "i18next:",
        this.logger = r || LE,
        this.options = l,
        this.debug = l.debug
    }
    log() {
        for (var r = arguments.length, l = new Array(r), o = 0; o < r; o++)
            l[o] = arguments[o];
        return this.forward(l, "log", "", !0)
    }
    warn() {
        for (var r = arguments.length, l = new Array(r), o = 0; o < r; o++)
            l[o] = arguments[o];
        return this.forward(l, "warn", "", !0)
    }
    error() {
        for (var r = arguments.length, l = new Array(r), o = 0; o < r; o++)
            l[o] = arguments[o];
        return this.forward(l, "error", "")
    }
    deprecate() {
        for (var r = arguments.length, l = new Array(r), o = 0; o < r; o++)
            l[o] = arguments[o];
        return this.forward(l, "warn", "WARNING DEPRECATED: ", !0)
    }
    forward(r, l, o, u) {
        return u && !this.debug ? null : (_e(r[0]) && (r[0] = `${o}${this.prefix} ${r[0]}`),
        this.logger[l](r))
    }
    create(r) {
        return new du(this.logger,{
            prefix: `${this.prefix}:${r}:`,
            ...this.options
        })
    }
    clone(r) {
        return r = r || this.options,
        r.prefix = r.prefix || this.prefix,
        new du(this.logger,r)
    }
}
var jn = new du;
class Au {
    constructor() {
        this.observers = {}
    }
    on(r, l) {
        return r.split(" ").forEach(o => {
            this.observers[o] || (this.observers[o] = new Map);
            const u = this.observers[o].get(l) || 0;
            this.observers[o].set(l, u + 1)
        }
        ),
        this
    }
    off(r, l) {
        if (this.observers[r]) {
            if (!l) {
                delete this.observers[r];
                return
            }
            this.observers[r].delete(l)
        }
    }
    emit(r) {
        for (var l = arguments.length, o = new Array(l > 1 ? l - 1 : 0), u = 1; u < l; u++)
            o[u - 1] = arguments[u];
        this.observers[r] && Array.from(this.observers[r].entries()).forEach(f => {
            let[m,h] = f;
            for (let g = 0; g < h; g++)
                m(...o)
        }
        ),
        this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(f => {
            let[m,h] = f;
            for (let g = 0; g < h; g++)
                m.apply(m, [r, ...o])
        }
        )
    }
}
class op extends Au {
    constructor(r) {
        let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            ns: ["translation"],
            defaultNS: "translation"
        };
        super(),
        this.data = r || {},
        this.options = l,
        this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
        this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0)
    }
    addNamespaces(r) {
        this.options.ns.indexOf(r) < 0 && this.options.ns.push(r)
    }
    removeNamespaces(r) {
        const l = this.options.ns.indexOf(r);
        l > -1 && this.options.ns.splice(l, 1)
    }
    getResource(r, l, o) {
        var g, p;
        let u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        const c = u.keySeparator !== void 0 ? u.keySeparator : this.options.keySeparator
          , f = u.ignoreJSONStructure !== void 0 ? u.ignoreJSONStructure : this.options.ignoreJSONStructure;
        let m;
        r.indexOf(".") > -1 ? m = r.split(".") : (m = [r, l],
        o && (Array.isArray(o) ? m.push(...o) : _e(o) && c ? m.push(...o.split(c)) : m.push(o)));
        const h = cu(this.data, m);
        return !h && !l && !o && r.indexOf(".") > -1 && (r = m[0],
        l = m[1],
        o = m.slice(2).join(".")),
        h || !f || !_e(o) ? h : Bf((p = (g = this.data) == null ? void 0 : g[r]) == null ? void 0 : p[l], o, c)
    }
    addResource(r, l, o, u) {
        let c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
            silent: !1
        };
        const f = c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator;
        let m = [r, l];
        o && (m = m.concat(f ? o.split(f) : o)),
        r.indexOf(".") > -1 && (m = r.split("."),
        u = l,
        l = m[1]),
        this.addNamespaces(l),
        ip(this.data, m, u),
        c.silent || this.emit("added", r, l, o, u)
    }
    addResources(r, l, o) {
        let u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
            silent: !1
        };
        for (const c in o)
            (_e(o[c]) || Array.isArray(o[c])) && this.addResource(r, l, c, o[c], {
                silent: !0
            });
        u.silent || this.emit("added", r, l, o)
    }
    addResourceBundle(r, l, o, u, c) {
        let f = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
            silent: !1,
            skipCopy: !1
        }
          , m = [r, l];
        r.indexOf(".") > -1 && (m = r.split("."),
        u = o,
        o = l,
        l = m[1]),
        this.addNamespaces(l);
        let h = cu(this.data, m) || {};
        f.skipCopy || (o = JSON.parse(JSON.stringify(o))),
        u ? Py(h, o, c) : h = {
            ...h,
            ...o
        },
        ip(this.data, m, h),
        f.silent || this.emit("added", r, l, o)
    }
    removeResourceBundle(r, l) {
        this.hasResourceBundle(r, l) && delete this.data[r][l],
        this.removeNamespaces(l),
        this.emit("removed", r, l)
    }
    hasResourceBundle(r, l) {
        return this.getResource(r, l) !== void 0
    }
    getResourceBundle(r, l) {
        return l || (l = this.options.defaultNS),
        this.getResource(r, l)
    }
    getDataByLanguage(r) {
        return this.data[r]
    }
    hasLanguageSomeTranslations(r) {
        const l = this.getDataByLanguage(r);
        return !!(l && Object.keys(l) || []).find(u => l[u] && Object.keys(l[u]).length > 0)
    }
    toJSON() {
        return this.data
    }
}
var Xy = {
    processors: {},
    addPostProcessor(a) {
        this.processors[a.name] = a
    },
    handle(a, r, l, o, u) {
        return a.forEach(c => {
            var f;
            r = ((f = this.processors[c]) == null ? void 0 : f.process(r, l, o, u)) ?? r
        }
        ),
        r
    }
};
const up = {}
  , sp = a => !_e(a) && typeof a != "boolean" && typeof a != "number";
class hu extends Au {
    constructor(r) {
        let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        super(),
        wE(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], r, this),
        this.options = l,
        this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
        this.logger = jn.create("translator")
    }
    changeLanguage(r) {
        r && (this.language = r)
    }
    exists(r) {
        let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            interpolation: {}
        };
        if (r == null)
            return !1;
        const o = this.resolve(r, l);
        return (o == null ? void 0 : o.res) !== void 0
    }
    extractFromKey(r, l) {
        let o = l.nsSeparator !== void 0 ? l.nsSeparator : this.options.nsSeparator;
        o === void 0 && (o = ":");
        const u = l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator;
        let c = l.ns || this.options.defaultNS || [];
        const f = o && r.indexOf(o) > -1
          , m = !this.options.userDefinedKeySeparator && !l.keySeparator && !this.options.userDefinedNsSeparator && !l.nsSeparator && !kE(r, o, u);
        if (f && !m) {
            const h = r.match(this.interpolator.nestingRegexp);
            if (h && h.length > 0)
                return {
                    key: r,
                    namespaces: _e(c) ? [c] : c
                };
            const g = r.split(o);
            (o !== u || o === u && this.options.ns.indexOf(g[0]) > -1) && (c = g.shift()),
            r = g.join(u)
        }
        return {
            key: r,
            namespaces: _e(c) ? [c] : c
        }
    }
    translate(r, l, o) {
        if (typeof l != "object" && this.options.overloadTranslationOptionHandler && (l = this.options.overloadTranslationOptionHandler(arguments)),
        typeof l == "object" && (l = {
            ...l
        }),
        l || (l = {}),
        r == null)
            return "";
        Array.isArray(r) || (r = [String(r)]);
        const u = l.returnDetails !== void 0 ? l.returnDetails : this.options.returnDetails
          , c = l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator
          , {key: f, namespaces: m} = this.extractFromKey(r[r.length - 1], l)
          , h = m[m.length - 1]
          , g = l.lng || this.language
          , p = l.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
        if ((g == null ? void 0 : g.toLowerCase()) === "cimode") {
            if (p) {
                const se = l.nsSeparator || this.options.nsSeparator;
                return u ? {
                    res: `${h}${se}${f}`,
                    usedKey: f,
                    exactUsedKey: f,
                    usedLng: g,
                    usedNS: h,
                    usedParams: this.getUsedParamsDetails(l)
                } : `${h}${se}${f}`
            }
            return u ? {
                res: f,
                usedKey: f,
                exactUsedKey: f,
                usedLng: g,
                usedNS: h,
                usedParams: this.getUsedParamsDetails(l)
            } : f
        }
        const v = this.resolve(r, l);
        let b = v == null ? void 0 : v.res;
        const R = (v == null ? void 0 : v.usedKey) || f
          , S = (v == null ? void 0 : v.exactUsedKey) || f
          , D = ["[object Number]", "[object Function]", "[object RegExp]"]
          , O = l.joinArrays !== void 0 ? l.joinArrays : this.options.joinArrays
          , z = !this.i18nFormat || this.i18nFormat.handleAsObject
          , G = l.count !== void 0 && !_e(l.count)
          , $ = hu.hasDefaultValue(l)
          , ee = G ? this.pluralResolver.getSuffix(g, l.count, l) : ""
          , L = l.ordinal && G ? this.pluralResolver.getSuffix(g, l.count, {
            ordinal: !1
        }) : ""
          , _ = G && !l.ordinal && l.count === 0
          , ne = _ && l[`defaultValue${this.options.pluralSeparator}zero`] || l[`defaultValue${ee}`] || l[`defaultValue${L}`] || l.defaultValue;
        let oe = b;
        z && !b && $ && (oe = ne);
        const ce = sp(oe)
          , he = Object.prototype.toString.apply(oe);
        if (z && oe && ce && D.indexOf(he) < 0 && !(_e(O) && Array.isArray(oe))) {
            if (!l.returnObjects && !this.options.returnObjects) {
                this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                const se = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(R, oe, {
                    ...l,
                    ns: m
                }) : `key '${f} (${this.language})' returned an object instead of string.`;
                return u ? (v.res = se,
                v.usedParams = this.getUsedParamsDetails(l),
                v) : se
            }
            if (c) {
                const se = Array.isArray(oe)
                  , xe = se ? [] : {}
                  , ge = se ? S : R;
                for (const le in oe)
                    if (Object.prototype.hasOwnProperty.call(oe, le)) {
                        const J = `${ge}${c}${le}`;
                        $ && !b ? xe[le] = this.translate(J, {
                            ...l,
                            defaultValue: sp(ne) ? ne[le] : void 0,
                            joinArrays: !1,
                            ns: m
                        }) : xe[le] = this.translate(J, {
                            ...l,
                            joinArrays: !1,
                            ns: m
                        }),
                        xe[le] === J && (xe[le] = oe[le])
                    }
                b = xe
            }
        } else if (z && _e(O) && Array.isArray(b))
            b = b.join(O),
            b && (b = this.extendTranslation(b, r, l, o));
        else {
            let se = !1
              , xe = !1;
            !this.isValidLookup(b) && $ && (se = !0,
            b = ne),
            this.isValidLookup(b) || (xe = !0,
            b = f);
            const le = (l.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && xe ? void 0 : b
              , J = $ && ne !== b && this.options.updateMissing;
            if (xe || se || J) {
                if (this.logger.log(J ? "updateKey" : "missingKey", g, h, f, J ? ne : b),
                c) {
                    const re = this.resolve(f, {
                        ...l,
                        keySeparator: !1
                    });
                    re && re.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                }
                let A = [];
                const P = this.languageUtils.getFallbackCodes(this.options.fallbackLng, l.lng || this.language);
                if (this.options.saveMissingTo === "fallback" && P && P[0])
                    for (let re = 0; re < P.length; re++)
                        A.push(P[re]);
                else
                    this.options.saveMissingTo === "all" ? A = this.languageUtils.toResolveHierarchy(l.lng || this.language) : A.push(l.lng || this.language);
                const Z = (re, T, V) => {
                    var te;
                    const ae = $ && V !== b ? V : le;
                    this.options.missingKeyHandler ? this.options.missingKeyHandler(re, h, T, ae, J, l) : (te = this.backendConnector) != null && te.saveMissing && this.backendConnector.saveMissing(re, h, T, ae, J, l),
                    this.emit("missingKey", re, h, T, b)
                }
                ;
                this.options.saveMissing && (this.options.saveMissingPlurals && G ? A.forEach(re => {
                    const T = this.pluralResolver.getSuffixes(re, l);
                    _ && l[`defaultValue${this.options.pluralSeparator}zero`] && T.indexOf(`${this.options.pluralSeparator}zero`) < 0 && T.push(`${this.options.pluralSeparator}zero`),
                    T.forEach(V => {
                        Z([re], f + V, l[`defaultValue${V}`] || ne)
                    }
                    )
                }
                ) : Z(A, f, ne))
            }
            b = this.extendTranslation(b, r, l, v, o),
            xe && b === f && this.options.appendNamespaceToMissingKey && (b = `${h}:${f}`),
            (xe || se) && this.options.parseMissingKeyHandler && (b = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${h}:${f}` : f, se ? b : void 0))
        }
        return u ? (v.res = b,
        v.usedParams = this.getUsedParamsDetails(l),
        v) : b
    }
    extendTranslation(r, l, o, u, c) {
        var g, p;
        var f = this;
        if ((g = this.i18nFormat) != null && g.parse)
            r = this.i18nFormat.parse(r, {
                ...this.options.interpolation.defaultVariables,
                ...o
            }, o.lng || this.language || u.usedLng, u.usedNS, u.usedKey, {
                resolved: u
            });
        else if (!o.skipInterpolation) {
            o.interpolation && this.interpolator.init({
                ...o,
                interpolation: {
                    ...this.options.interpolation,
                    ...o.interpolation
                }
            });
            const v = _e(r) && (((p = o == null ? void 0 : o.interpolation) == null ? void 0 : p.skipOnVariables) !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
            let b;
            if (v) {
                const S = r.match(this.interpolator.nestingRegexp);
                b = S && S.length
            }
            let R = o.replace && !_e(o.replace) ? o.replace : o;
            if (this.options.interpolation.defaultVariables && (R = {
                ...this.options.interpolation.defaultVariables,
                ...R
            }),
            r = this.interpolator.interpolate(r, R, o.lng || this.language || u.usedLng, o),
            v) {
                const S = r.match(this.interpolator.nestingRegexp)
                  , D = S && S.length;
                b < D && (o.nest = !1)
            }
            !o.lng && u && u.res && (o.lng = this.language || u.usedLng),
            o.nest !== !1 && (r = this.interpolator.nest(r, function() {
                for (var S = arguments.length, D = new Array(S), O = 0; O < S; O++)
                    D[O] = arguments[O];
                return (c == null ? void 0 : c[0]) === D[0] && !o.context ? (f.logger.warn(`It seems you are nesting recursively key: ${D[0]} in key: ${l[0]}`),
                null) : f.translate(...D, l)
            }, o)),
            o.interpolation && this.interpolator.reset()
        }
        const m = o.postProcess || this.options.postProcess
          , h = _e(m) ? [m] : m;
        return r != null && (h != null && h.length) && o.applyPostProcessor !== !1 && (r = Xy.handle(h, r, l, this.options && this.options.postProcessPassResolved ? {
            i18nResolved: {
                ...u,
                usedParams: this.getUsedParamsDetails(o)
            },
            ...o
        } : o, this)),
        r
    }
    resolve(r) {
        let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o, u, c, f, m;
        return _e(r) && (r = [r]),
        r.forEach(h => {
            if (this.isValidLookup(o))
                return;
            const g = this.extractFromKey(h, l)
              , p = g.key;
            u = p;
            let v = g.namespaces;
            this.options.fallbackNS && (v = v.concat(this.options.fallbackNS));
            const b = l.count !== void 0 && !_e(l.count)
              , R = b && !l.ordinal && l.count === 0
              , S = l.context !== void 0 && (_e(l.context) || typeof l.context == "number") && l.context !== ""
              , D = l.lngs ? l.lngs : this.languageUtils.toResolveHierarchy(l.lng || this.language, l.fallbackLng);
            v.forEach(O => {
                var z, G;
                this.isValidLookup(o) || (m = O,
                !up[`${D[0]}-${O}`] && ((z = this.utils) != null && z.hasLoadedNamespace) && !((G = this.utils) != null && G.hasLoadedNamespace(m)) && (up[`${D[0]}-${O}`] = !0,
                this.logger.warn(`key "${u}" for languages "${D.join(", ")}" won't get resolved as namespace "${m}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),
                D.forEach($ => {
                    var _;
                    if (this.isValidLookup(o))
                        return;
                    f = $;
                    const ee = [p];
                    if ((_ = this.i18nFormat) != null && _.addLookupKeys)
                        this.i18nFormat.addLookupKeys(ee, p, $, O, l);
                    else {
                        let ne;
                        b && (ne = this.pluralResolver.getSuffix($, l.count, l));
                        const oe = `${this.options.pluralSeparator}zero`
                          , ce = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                        if (b && (ee.push(p + ne),
                        l.ordinal && ne.indexOf(ce) === 0 && ee.push(p + ne.replace(ce, this.options.pluralSeparator)),
                        R && ee.push(p + oe)),
                        S) {
                            const he = `${p}${this.options.contextSeparator}${l.context}`;
                            ee.push(he),
                            b && (ee.push(he + ne),
                            l.ordinal && ne.indexOf(ce) === 0 && ee.push(he + ne.replace(ce, this.options.pluralSeparator)),
                            R && ee.push(he + oe))
                        }
                    }
                    let L;
                    for (; L = ee.pop(); )
                        this.isValidLookup(o) || (c = L,
                        o = this.getResource($, O, L, l))
                }
                ))
            }
            )
        }
        ),
        {
            res: o,
            usedKey: u,
            exactUsedKey: c,
            usedLng: f,
            usedNS: m
        }
    }
    isValidLookup(r) {
        return r !== void 0 && !(!this.options.returnNull && r === null) && !(!this.options.returnEmptyString && r === "")
    }
    getResource(r, l, o) {
        var c;
        let u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        return (c = this.i18nFormat) != null && c.getResource ? this.i18nFormat.getResource(r, l, o, u) : this.resourceStore.getResource(r, l, o, u)
    }
    getUsedParamsDetails() {
        let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const l = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"]
          , o = r.replace && !_e(r.replace);
        let u = o ? r.replace : r;
        if (o && typeof r.count < "u" && (u.count = r.count),
        this.options.interpolation.defaultVariables && (u = {
            ...this.options.interpolation.defaultVariables,
            ...u
        }),
        !o) {
            u = {
                ...u
            };
            for (const c of l)
                delete u[c]
        }
        return u
    }
    static hasDefaultValue(r) {
        const l = "defaultValue";
        for (const o in r)
            if (Object.prototype.hasOwnProperty.call(r, o) && l === o.substring(0, l.length) && r[o] !== void 0)
                return !0;
        return !1
    }
}
class cp {
    constructor(r) {
        this.options = r,
        this.supportedLngs = this.options.supportedLngs || !1,
        this.logger = jn.create("languageUtils")
    }
    getScriptPartFromCode(r) {
        if (r = fu(r),
        !r || r.indexOf("-") < 0)
            return null;
        const l = r.split("-");
        return l.length === 2 || (l.pop(),
        l[l.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(l.join("-"))
    }
    getLanguagePartFromCode(r) {
        if (r = fu(r),
        !r || r.indexOf("-") < 0)
            return r;
        const l = r.split("-");
        return this.formatLanguageCode(l[0])
    }
    formatLanguageCode(r) {
        if (_e(r) && r.indexOf("-") > -1) {
            let l;
            try {
                l = Intl.getCanonicalLocales(r)[0]
            } catch {}
            return l && this.options.lowerCaseLng && (l = l.toLowerCase()),
            l || (this.options.lowerCaseLng ? r.toLowerCase() : r)
        }
        return this.options.cleanCode || this.options.lowerCaseLng ? r.toLowerCase() : r
    }
    isSupportedCode(r) {
        return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (r = this.getLanguagePartFromCode(r)),
        !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(r) > -1
    }
    getBestMatchFromCodes(r) {
        if (!r)
            return null;
        let l;
        return r.forEach(o => {
            if (l)
                return;
            const u = this.formatLanguageCode(o);
            (!this.options.supportedLngs || this.isSupportedCode(u)) && (l = u)
        }
        ),
        !l && this.options.supportedLngs && r.forEach(o => {
            if (l)
                return;
            const u = this.getLanguagePartFromCode(o);
            if (this.isSupportedCode(u))
                return l = u;
            l = this.options.supportedLngs.find(c => {
                if (c === u)
                    return c;
                if (!(c.indexOf("-") < 0 && u.indexOf("-") < 0) && (c.indexOf("-") > 0 && u.indexOf("-") < 0 && c.substring(0, c.indexOf("-")) === u || c.indexOf(u) === 0 && u.length > 1))
                    return c
            }
            )
        }
        ),
        l || (l = this.getFallbackCodes(this.options.fallbackLng)[0]),
        l
    }
    getFallbackCodes(r, l) {
        if (!r)
            return [];
        if (typeof r == "function" && (r = r(l)),
        _e(r) && (r = [r]),
        Array.isArray(r))
            return r;
        if (!l)
            return r.default || [];
        let o = r[l];
        return o || (o = r[this.getScriptPartFromCode(l)]),
        o || (o = r[this.formatLanguageCode(l)]),
        o || (o = r[this.getLanguagePartFromCode(l)]),
        o || (o = r.default),
        o || []
    }
    toResolveHierarchy(r, l) {
        const o = this.getFallbackCodes(l || this.options.fallbackLng || [], r)
          , u = []
          , c = f => {
            f && (this.isSupportedCode(f) ? u.push(f) : this.logger.warn(`rejecting language code not found in supportedLngs: ${f}`))
        }
        ;
        return _e(r) && (r.indexOf("-") > -1 || r.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && c(this.formatLanguageCode(r)),
        this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && c(this.getScriptPartFromCode(r)),
        this.options.load !== "currentOnly" && c(this.getLanguagePartFromCode(r))) : _e(r) && c(this.formatLanguageCode(r)),
        o.forEach(f => {
            u.indexOf(f) < 0 && c(this.formatLanguageCode(f))
        }
        ),
        u
    }
}
const fp = {
    zero: 0,
    one: 1,
    two: 2,
    few: 3,
    many: 4,
    other: 5
}
  , dp = {
    select: a => a === 1 ? "one" : "other",
    resolvedOptions: () => ({
        pluralCategories: ["one", "other"]
    })
};
class NE {
    constructor(r) {
        let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.languageUtils = r,
        this.options = l,
        this.logger = jn.create("pluralResolver"),
        this.pluralRulesCache = {}
    }
    addRule(r, l) {
        this.rules[r] = l
    }
    clearCache() {
        this.pluralRulesCache = {}
    }
    getRule(r) {
        let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const o = fu(r === "dev" ? "en" : r)
          , u = l.ordinal ? "ordinal" : "cardinal"
          , c = JSON.stringify({
            cleanedCode: o,
            type: u
        });
        if (c in this.pluralRulesCache)
            return this.pluralRulesCache[c];
        let f;
        try {
            f = new Intl.PluralRules(o,{
                type: u
            })
        } catch {
            if (!Intl)
                return this.logger.error("No Intl support, please use an Intl polyfill!"),
                dp;
            if (!r.match(/-|_/))
                return dp;
            const h = this.languageUtils.getLanguagePartFromCode(r);
            f = this.getRule(h, l)
        }
        return this.pluralRulesCache[c] = f,
        f
    }
    needsPlural(r) {
        let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          , o = this.getRule(r, l);
        return o || (o = this.getRule("dev", l)),
        (o == null ? void 0 : o.resolvedOptions().pluralCategories.length) > 1
    }
    getPluralFormsOfKey(r, l) {
        let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return this.getSuffixes(r, o).map(u => `${l}${u}`)
    }
    getSuffixes(r) {
        let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          , o = this.getRule(r, l);
        return o || (o = this.getRule("dev", l)),
        o ? o.resolvedOptions().pluralCategories.sort( (u, c) => fp[u] - fp[c]).map(u => `${this.options.prepend}${l.ordinal ? `ordinal${this.options.prepend}` : ""}${u}`) : []
    }
    getSuffix(r, l) {
        let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        const u = this.getRule(r, o);
        return u ? `${this.options.prepend}${o.ordinal ? `ordinal${this.options.prepend}` : ""}${u.select(l)}` : (this.logger.warn(`no plural rule found for: ${r}`),
        this.getSuffix("dev", l, o))
    }
}
const hp = function(a, r, l) {
    let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "."
      , u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0
      , c = OE(a, r, l);
    return !c && u && _e(l) && (c = Bf(a, l, o),
    c === void 0 && (c = Bf(r, l, o))),
    c
}
  , Rf = a => a.replace(/\$/g, "$$$$");
class zE {
    constructor() {
        var l;
        let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        this.logger = jn.create("interpolator"),
        this.options = r,
        this.format = ((l = r == null ? void 0 : r.interpolation) == null ? void 0 : l.format) || (o => o),
        this.init(r)
    }
    init() {
        let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        r.interpolation || (r.interpolation = {
            escapeValue: !0
        });
        const {escape: l, escapeValue: o, useRawValueToEscape: u, prefix: c, prefixEscaped: f, suffix: m, suffixEscaped: h, formatSeparator: g, unescapeSuffix: p, unescapePrefix: v, nestingPrefix: b, nestingPrefixEscaped: R, nestingSuffix: S, nestingSuffixEscaped: D, nestingOptionsSeparator: O, maxReplaces: z, alwaysFormat: G} = r.interpolation;
        this.escape = l !== void 0 ? l : AE,
        this.escapeValue = o !== void 0 ? o : !0,
        this.useRawValueToEscape = u !== void 0 ? u : !1,
        this.prefix = c ? Kr(c) : f || "{{",
        this.suffix = m ? Kr(m) : h || "}}",
        this.formatSeparator = g || ",",
        this.unescapePrefix = p ? "" : v || "-",
        this.unescapeSuffix = this.unescapePrefix ? "" : p || "",
        this.nestingPrefix = b ? Kr(b) : R || Kr("$t("),
        this.nestingSuffix = S ? Kr(S) : D || Kr(")"),
        this.nestingOptionsSeparator = O || ",",
        this.maxReplaces = z || 1e3,
        this.alwaysFormat = G !== void 0 ? G : !1,
        this.resetRegExp()
    }
    reset() {
        this.options && this.init(this.options)
    }
    resetRegExp() {
        const r = (l, o) => (l == null ? void 0 : l.source) === o ? (l.lastIndex = 0,
        l) : new RegExp(o,"g");
        this.regexp = r(this.regexp, `${this.prefix}(.+?)${this.suffix}`),
        this.regexpUnescape = r(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),
        this.nestingRegexp = r(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`)
    }
    interpolate(r, l, o, u) {
        var R;
        let c, f, m;
        const h = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}
          , g = S => {
            if (S.indexOf(this.formatSeparator) < 0) {
                const G = hp(l, h, S, this.options.keySeparator, this.options.ignoreJSONStructure);
                return this.alwaysFormat ? this.format(G, void 0, o, {
                    ...u,
                    ...l,
                    interpolationkey: S
                }) : G
            }
            const D = S.split(this.formatSeparator)
              , O = D.shift().trim()
              , z = D.join(this.formatSeparator).trim();
            return this.format(hp(l, h, O, this.options.keySeparator, this.options.ignoreJSONStructure), z, o, {
                ...u,
                ...l,
                interpolationkey: O
            })
        }
        ;
        this.resetRegExp();
        const p = (u == null ? void 0 : u.missingInterpolationHandler) || this.options.missingInterpolationHandler
          , v = ((R = u == null ? void 0 : u.interpolation) == null ? void 0 : R.skipOnVariables) !== void 0 ? u.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
        return [{
            regex: this.regexpUnescape,
            safeValue: S => Rf(S)
        }, {
            regex: this.regexp,
            safeValue: S => this.escapeValue ? Rf(this.escape(S)) : Rf(S)
        }].forEach(S => {
            for (m = 0; c = S.regex.exec(r); ) {
                const D = c[1].trim();
                if (f = g(D),
                f === void 0)
                    if (typeof p == "function") {
                        const z = p(r, c, u);
                        f = _e(z) ? z : ""
                    } else if (u && Object.prototype.hasOwnProperty.call(u, D))
                        f = "";
                    else if (v) {
                        f = c[0];
                        continue
                    } else
                        this.logger.warn(`missed to pass in variable ${D} for interpolating ${r}`),
                        f = "";
                else
                    !_e(f) && !this.useRawValueToEscape && (f = ap(f));
                const O = S.safeValue(f);
                if (r = r.replace(c[0], O),
                v ? (S.regex.lastIndex += f.length,
                S.regex.lastIndex -= c[0].length) : S.regex.lastIndex = 0,
                m++,
                m >= this.maxReplaces)
                    break
            }
        }
        ),
        r
    }
    nest(r, l) {
        let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, u, c, f;
        const m = (h, g) => {
            const p = this.nestingOptionsSeparator;
            if (h.indexOf(p) < 0)
                return h;
            const v = h.split(new RegExp(`${p}[ ]*{`));
            let b = `{${v[1]}`;
            h = v[0],
            b = this.interpolate(b, f);
            const R = b.match(/'/g)
              , S = b.match(/"/g);
            (((R == null ? void 0 : R.length) ?? 0) % 2 === 0 && !S || S.length % 2 !== 0) && (b = b.replace(/'/g, '"'));
            try {
                f = JSON.parse(b),
                g && (f = {
                    ...g,
                    ...f
                })
            } catch (D) {
                return this.logger.warn(`failed parsing options string in nesting for key ${h}`, D),
                `${h}${p}${b}`
            }
            return f.defaultValue && f.defaultValue.indexOf(this.prefix) > -1 && delete f.defaultValue,
            h
        }
        ;
        for (; u = this.nestingRegexp.exec(r); ) {
            let h = [];
            f = {
                ...o
            },
            f = f.replace && !_e(f.replace) ? f.replace : f,
            f.applyPostProcessor = !1,
            delete f.defaultValue;
            let g = !1;
            if (u[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(u[1])) {
                const p = u[1].split(this.formatSeparator).map(v => v.trim());
                u[1] = p.shift(),
                h = p,
                g = !0
            }
            if (c = l(m.call(this, u[1].trim(), f), f),
            c && u[0] === r && !_e(c))
                return c;
            _e(c) || (c = ap(c)),
            c || (this.logger.warn(`missed to resolve ${u[1]} for nesting ${r}`),
            c = ""),
            g && (c = h.reduce( (p, v) => this.format(p, v, o.lng, {
                ...o,
                interpolationkey: u[1].trim()
            }), c.trim())),
            r = r.replace(u[0], c),
            this.regexp.lastIndex = 0
        }
        return r
    }
}
const jE = a => {
    let r = a.toLowerCase().trim();
    const l = {};
    if (a.indexOf("(") > -1) {
        const o = a.split("(");
        r = o[0].toLowerCase().trim();
        const u = o[1].substring(0, o[1].length - 1);
        r === "currency" && u.indexOf(":") < 0 ? l.currency || (l.currency = u.trim()) : r === "relativetime" && u.indexOf(":") < 0 ? l.range || (l.range = u.trim()) : u.split(";").forEach(f => {
            if (f) {
                const [m,...h] = f.split(":")
                  , g = h.join(":").trim().replace(/^'+|'+$/g, "")
                  , p = m.trim();
                l[p] || (l[p] = g),
                g === "false" && (l[p] = !1),
                g === "true" && (l[p] = !0),
                isNaN(g) || (l[p] = parseInt(g, 10))
            }
        }
        )
    }
    return {
        formatName: r,
        formatOptions: l
    }
}
  , Jr = a => {
    const r = {};
    return (l, o, u) => {
        let c = u;
        u && u.interpolationkey && u.formatParams && u.formatParams[u.interpolationkey] && u[u.interpolationkey] && (c = {
            ...c,
            [u.interpolationkey]: void 0
        });
        const f = o + JSON.stringify(c);
        let m = r[f];
        return m || (m = a(fu(o), u),
        r[f] = m),
        m(l)
    }
}
;
class UE {
    constructor() {
        let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        this.logger = jn.create("formatter"),
        this.options = r,
        this.formats = {
            number: Jr( (l, o) => {
                const u = new Intl.NumberFormat(l,{
                    ...o
                });
                return c => u.format(c)
            }
            ),
            currency: Jr( (l, o) => {
                const u = new Intl.NumberFormat(l,{
                    ...o,
                    style: "currency"
                });
                return c => u.format(c)
            }
            ),
            datetime: Jr( (l, o) => {
                const u = new Intl.DateTimeFormat(l,{
                    ...o
                });
                return c => u.format(c)
            }
            ),
            relativetime: Jr( (l, o) => {
                const u = new Intl.RelativeTimeFormat(l,{
                    ...o
                });
                return c => u.format(c, o.range || "day")
            }
            ),
            list: Jr( (l, o) => {
                const u = new Intl.ListFormat(l,{
                    ...o
                });
                return c => u.format(c)
            }
            )
        },
        this.init(r)
    }
    init(r) {
        let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            interpolation: {}
        };
        this.formatSeparator = l.interpolation.formatSeparator || ","
    }
    add(r, l) {
        this.formats[r.toLowerCase().trim()] = l
    }
    addCached(r, l) {
        this.formats[r.toLowerCase().trim()] = Jr(l)
    }
    format(r, l, o) {
        let u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        const c = l.split(this.formatSeparator);
        if (c.length > 1 && c[0].indexOf("(") > 1 && c[0].indexOf(")") < 0 && c.find(m => m.indexOf(")") > -1)) {
            const m = c.findIndex(h => h.indexOf(")") > -1);
            c[0] = [c[0], ...c.splice(1, m)].join(this.formatSeparator)
        }
        return c.reduce( (m, h) => {
            var v;
            const {formatName: g, formatOptions: p} = jE(h);
            if (this.formats[g]) {
                let b = m;
                try {
                    const R = ((v = u == null ? void 0 : u.formatParams) == null ? void 0 : v[u.interpolationkey]) || {}
                      , S = R.locale || R.lng || u.locale || u.lng || o;
                    b = this.formats[g](m, S, {
                        ...p,
                        ...u,
                        ...R
                    })
                } catch (R) {
                    this.logger.warn(R)
                }
                return b
            } else
                this.logger.warn(`there was no format function for ${g}`);
            return m
        }
        , r)
    }
}
const HE = (a, r) => {
    a.pending[r] !== void 0 && (delete a.pending[r],
    a.pendingCount--)
}
;
class BE extends Au {
    constructor(r, l, o) {
        var c, f;
        let u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        super(),
        this.backend = r,
        this.store = l,
        this.services = o,
        this.languageUtils = o.languageUtils,
        this.options = u,
        this.logger = jn.create("backendConnector"),
        this.waitingReads = [],
        this.maxParallelReads = u.maxParallelReads || 10,
        this.readingCalls = 0,
        this.maxRetries = u.maxRetries >= 0 ? u.maxRetries : 5,
        this.retryTimeout = u.retryTimeout >= 1 ? u.retryTimeout : 350,
        this.state = {},
        this.queue = [],
        (f = (c = this.backend) == null ? void 0 : c.init) == null || f.call(c, o, u.backend, u)
    }
    queueLoad(r, l, o, u) {
        const c = {}
          , f = {}
          , m = {}
          , h = {};
        return r.forEach(g => {
            let p = !0;
            l.forEach(v => {
                const b = `${g}|${v}`;
                !o.reload && this.store.hasResourceBundle(g, v) ? this.state[b] = 2 : this.state[b] < 0 || (this.state[b] === 1 ? f[b] === void 0 && (f[b] = !0) : (this.state[b] = 1,
                p = !1,
                f[b] === void 0 && (f[b] = !0),
                c[b] === void 0 && (c[b] = !0),
                h[v] === void 0 && (h[v] = !0)))
            }
            ),
            p || (m[g] = !0)
        }
        ),
        (Object.keys(c).length || Object.keys(f).length) && this.queue.push({
            pending: f,
            pendingCount: Object.keys(f).length,
            loaded: {},
            errors: [],
            callback: u
        }),
        {
            toLoad: Object.keys(c),
            pending: Object.keys(f),
            toLoadLanguages: Object.keys(m),
            toLoadNamespaces: Object.keys(h)
        }
    }
    loaded(r, l, o) {
        const u = r.split("|")
          , c = u[0]
          , f = u[1];
        l && this.emit("failedLoading", c, f, l),
        !l && o && this.store.addResourceBundle(c, f, o, void 0, void 0, {
            skipCopy: !0
        }),
        this.state[r] = l ? -1 : 2,
        l && o && (this.state[r] = 0);
        const m = {};
        this.queue.forEach(h => {
            TE(h.loaded, [c], f),
            HE(h, r),
            l && h.errors.push(l),
            h.pendingCount === 0 && !h.done && (Object.keys(h.loaded).forEach(g => {
                m[g] || (m[g] = {});
                const p = h.loaded[g];
                p.length && p.forEach(v => {
                    m[g][v] === void 0 && (m[g][v] = !0)
                }
                )
            }
            ),
            h.done = !0,
            h.errors.length ? h.callback(h.errors) : h.callback())
        }
        ),
        this.emit("loaded", m),
        this.queue = this.queue.filter(h => !h.done)
    }
    read(r, l, o) {
        let u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0
          , c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout
          , f = arguments.length > 5 ? arguments[5] : void 0;
        if (!r.length)
            return f(null, {});
        if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
                lng: r,
                ns: l,
                fcName: o,
                tried: u,
                wait: c,
                callback: f
            });
            return
        }
        this.readingCalls++;
        const m = (g, p) => {
            if (this.readingCalls--,
            this.waitingReads.length > 0) {
                const v = this.waitingReads.shift();
                this.read(v.lng, v.ns, v.fcName, v.tried, v.wait, v.callback)
            }
            if (g && p && u < this.maxRetries) {
                setTimeout( () => {
                    this.read.call(this, r, l, o, u + 1, c * 2, f)
                }
                , c);
                return
            }
            f(g, p)
        }
          , h = this.backend[o].bind(this.backend);
        if (h.length === 2) {
            try {
                const g = h(r, l);
                g && typeof g.then == "function" ? g.then(p => m(null, p)).catch(m) : m(null, g)
            } catch (g) {
                m(g)
            }
            return
        }
        return h(r, l, m)
    }
    prepareLoading(r, l) {
        let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
          , u = arguments.length > 3 ? arguments[3] : void 0;
        if (!this.backend)
            return this.logger.warn("No backend was added via i18next.use. Will not load resources."),
            u && u();
        _e(r) && (r = this.languageUtils.toResolveHierarchy(r)),
        _e(l) && (l = [l]);
        const c = this.queueLoad(r, l, o, u);
        if (!c.toLoad.length)
            return c.pending.length || u(),
            null;
        c.toLoad.forEach(f => {
            this.loadOne(f)
        }
        )
    }
    load(r, l, o) {
        this.prepareLoading(r, l, {}, o)
    }
    reload(r, l, o) {
        this.prepareLoading(r, l, {
            reload: !0
        }, o)
    }
    loadOne(r) {
        let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        const o = r.split("|")
          , u = o[0]
          , c = o[1];
        this.read(u, c, "read", void 0, void 0, (f, m) => {
            f && this.logger.warn(`${l}loading namespace ${c} for language ${u} failed`, f),
            !f && m && this.logger.log(`${l}loaded namespace ${c} for language ${u}`, m),
            this.loaded(r, f, m)
        }
        )
    }
    saveMissing(r, l, o, u, c) {
        var h, g, p, v, b;
        let f = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}
          , m = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {}
        ;
        if ((g = (h = this.services) == null ? void 0 : h.utils) != null && g.hasLoadedNamespace && !((v = (p = this.services) == null ? void 0 : p.utils) != null && v.hasLoadedNamespace(l))) {
            this.logger.warn(`did not save key "${o}" as the namespace "${l}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            return
        }
        if (!(o == null || o === "")) {
            if ((b = this.backend) != null && b.create) {
                const R = {
                    ...f,
                    isUpdate: c
                }
                  , S = this.backend.create.bind(this.backend);
                if (S.length < 6)
                    try {
                        let D;
                        S.length === 5 ? D = S(r, l, o, u, R) : D = S(r, l, o, u),
                        D && typeof D.then == "function" ? D.then(O => m(null, O)).catch(m) : m(null, D)
                    } catch (D) {
                        m(D)
                    }
                else
                    S(r, l, o, u, m, R)
            }
            !r || !r[0] || this.store.addResource(r[0], l, o, u)
        }
    }
}
const mp = () => ({
    debug: !1,
    initAsync: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: a => {
        let r = {};
        if (typeof a[1] == "object" && (r = a[1]),
        _e(a[1]) && (r.defaultValue = a[1]),
        _e(a[2]) && (r.tDescription = a[2]),
        typeof a[2] == "object" || typeof a[3] == "object") {
            const l = a[3] || a[2];
            Object.keys(l).forEach(o => {
                r[o] = l[o]
            }
            )
        }
        return r
    }
    ,
    interpolation: {
        escapeValue: !0,
        format: a => a,
        prefix: "{{",
        suffix: "}}",
        formatSeparator: ",",
        unescapePrefix: "-",
        nestingPrefix: "$t(",
        nestingSuffix: ")",
        nestingOptionsSeparator: ",",
        maxReplaces: 1e3,
        skipOnVariables: !0
    }
})
  , gp = a => {
    var r, l;
    return _e(a.ns) && (a.ns = [a.ns]),
    _e(a.fallbackLng) && (a.fallbackLng = [a.fallbackLng]),
    _e(a.fallbackNS) && (a.fallbackNS = [a.fallbackNS]),
    ((l = (r = a.supportedLngs) == null ? void 0 : r.indexOf) == null ? void 0 : l.call(r, "cimode")) < 0 && (a.supportedLngs = a.supportedLngs.concat(["cimode"])),
    typeof a.initImmediate == "boolean" && (a.initAsync = a.initImmediate),
    a
}
  , Zo = () => {}
  , qE = a => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(a)).forEach(l => {
        typeof a[l] == "function" && (a[l] = a[l].bind(a))
    }
    )
}
;
class Ei extends Au {
    constructor() {
        let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , l = arguments.length > 1 ? arguments[1] : void 0;
        if (super(),
        this.options = gp(r),
        this.services = {},
        this.logger = jn,
        this.modules = {
            external: []
        },
        qE(this),
        l && !this.isInitialized && !r.isClone) {
            if (!this.options.initAsync)
                return this.init(r, l),
                this;
            setTimeout( () => {
                this.init(r, l)
            }
            , 0)
        }
    }
    init() {
        var r = this;
        let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , o = arguments.length > 1 ? arguments[1] : void 0;
        this.isInitializing = !0,
        typeof l == "function" && (o = l,
        l = {}),
        l.defaultNS == null && l.ns && (_e(l.ns) ? l.defaultNS = l.ns : l.ns.indexOf("translation") < 0 && (l.defaultNS = l.ns[0]));
        const u = mp();
        this.options = {
            ...u,
            ...this.options,
            ...gp(l)
        },
        this.options.interpolation = {
            ...u.interpolation,
            ...this.options.interpolation
        },
        l.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = l.keySeparator),
        l.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = l.nsSeparator);
        const c = p => p ? typeof p == "function" ? new p : p : null;
        if (!this.options.isClone) {
            this.modules.logger ? jn.init(c(this.modules.logger), this.options) : jn.init(null, this.options);
            let p;
            this.modules.formatter ? p = this.modules.formatter : p = UE;
            const v = new cp(this.options);
            this.store = new op(this.options.resources,this.options);
            const b = this.services;
            b.logger = jn,
            b.resourceStore = this.store,
            b.languageUtils = v,
            b.pluralResolver = new NE(v,{
                prepend: this.options.pluralSeparator,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix
            }),
            p && (!this.options.interpolation.format || this.options.interpolation.format === u.interpolation.format) && (b.formatter = c(p),
            b.formatter.init(b, this.options),
            this.options.interpolation.format = b.formatter.format.bind(b.formatter)),
            b.interpolator = new zE(this.options),
            b.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
            },
            b.backendConnector = new BE(c(this.modules.backend),b.resourceStore,b,this.options),
            b.backendConnector.on("*", function(R) {
                for (var S = arguments.length, D = new Array(S > 1 ? S - 1 : 0), O = 1; O < S; O++)
                    D[O - 1] = arguments[O];
                r.emit(R, ...D)
            }),
            this.modules.languageDetector && (b.languageDetector = c(this.modules.languageDetector),
            b.languageDetector.init && b.languageDetector.init(b, this.options.detection, this.options)),
            this.modules.i18nFormat && (b.i18nFormat = c(this.modules.i18nFormat),
            b.i18nFormat.init && b.i18nFormat.init(this)),
            this.translator = new hu(this.services,this.options),
            this.translator.on("*", function(R) {
                for (var S = arguments.length, D = new Array(S > 1 ? S - 1 : 0), O = 1; O < S; O++)
                    D[O - 1] = arguments[O];
                r.emit(R, ...D)
            }),
            this.modules.external.forEach(R => {
                R.init && R.init(this)
            }
            )
        }
        if (this.format = this.options.interpolation.format,
        o || (o = Zo),
        this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
            const p = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            p.length > 0 && p[0] !== "dev" && (this.options.lng = p[0])
        }
        !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"),
        ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(p => {
            this[p] = function() {
                return r.store[p](...arguments)
            }
        }
        ),
        ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(p => {
            this[p] = function() {
                return r.store[p](...arguments),
                r
            }
        }
        );
        const h = hi()
          , g = () => {
            const p = (v, b) => {
                this.isInitializing = !1,
                this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"),
                this.isInitialized = !0,
                this.options.isClone || this.logger.log("initialized", this.options),
                this.emit("initialized", this.options),
                h.resolve(b),
                o(v, b)
            }
            ;
            if (this.languages && !this.isInitialized)
                return p(null, this.t.bind(this));
            this.changeLanguage(this.options.lng, p)
        }
        ;
        return this.options.resources || !this.options.initAsync ? g() : setTimeout(g, 0),
        h
    }
    loadResources(r) {
        var c, f;
        let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Zo;
        const u = _e(r) ? r : this.language;
        if (typeof r == "function" && (o = r),
        !this.options.resources || this.options.partialBundledLanguages) {
            if ((u == null ? void 0 : u.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0))
                return o();
            const m = []
              , h = g => {
                if (!g || g === "cimode")
                    return;
                this.services.languageUtils.toResolveHierarchy(g).forEach(v => {
                    v !== "cimode" && m.indexOf(v) < 0 && m.push(v)
                }
                )
            }
            ;
            u ? h(u) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(p => h(p)),
            (f = (c = this.options.preload) == null ? void 0 : c.forEach) == null || f.call(c, g => h(g)),
            this.services.backendConnector.load(m, this.options.ns, g => {
                !g && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language),
                o(g)
            }
            )
        } else
            o(null)
    }
    reloadResources(r, l, o) {
        const u = hi();
        return typeof r == "function" && (o = r,
        r = void 0),
        typeof l == "function" && (o = l,
        l = void 0),
        r || (r = this.languages),
        l || (l = this.options.ns),
        o || (o = Zo),
        this.services.backendConnector.reload(r, l, c => {
            u.resolve(),
            o(c)
        }
        ),
        u
    }
    use(r) {
        if (!r)
            throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
        if (!r.type)
            throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
        return r.type === "backend" && (this.modules.backend = r),
        (r.type === "logger" || r.log && r.warn && r.error) && (this.modules.logger = r),
        r.type === "languageDetector" && (this.modules.languageDetector = r),
        r.type === "i18nFormat" && (this.modules.i18nFormat = r),
        r.type === "postProcessor" && Xy.addPostProcessor(r),
        r.type === "formatter" && (this.modules.formatter = r),
        r.type === "3rdParty" && this.modules.external.push(r),
        this
    }
    setResolvedLanguage(r) {
        if (!(!r || !this.languages) && !(["cimode", "dev"].indexOf(r) > -1))
            for (let l = 0; l < this.languages.length; l++) {
                const o = this.languages[l];
                if (!(["cimode", "dev"].indexOf(o) > -1) && this.store.hasLanguageSomeTranslations(o)) {
                    this.resolvedLanguage = o;
                    break
                }
            }
    }
    changeLanguage(r, l) {
        var o = this;
        this.isLanguageChangingTo = r;
        const u = hi();
        this.emit("languageChanging", r);
        const c = h => {
            this.language = h,
            this.languages = this.services.languageUtils.toResolveHierarchy(h),
            this.resolvedLanguage = void 0,
            this.setResolvedLanguage(h)
        }
          , f = (h, g) => {
            g ? (c(g),
            this.translator.changeLanguage(g),
            this.isLanguageChangingTo = void 0,
            this.emit("languageChanged", g),
            this.logger.log("languageChanged", g)) : this.isLanguageChangingTo = void 0,
            u.resolve(function() {
                return o.t(...arguments)
            }),
            l && l(h, function() {
                return o.t(...arguments)
            })
        }
          , m = h => {
            var p, v;
            !r && !h && this.services.languageDetector && (h = []);
            const g = _e(h) ? h : this.services.languageUtils.getBestMatchFromCodes(h);
            g && (this.language || c(g),
            this.translator.language || this.translator.changeLanguage(g),
            (v = (p = this.services.languageDetector) == null ? void 0 : p.cacheUserLanguage) == null || v.call(p, g)),
            this.loadResources(g, b => {
                f(b, g)
            }
            )
        }
        ;
        return !r && this.services.languageDetector && !this.services.languageDetector.async ? m(this.services.languageDetector.detect()) : !r && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(m) : this.services.languageDetector.detect(m) : m(r),
        u
    }
    getFixedT(r, l, o) {
        var u = this;
        const c = function(f, m) {
            let h;
            if (typeof m != "object") {
                for (var g = arguments.length, p = new Array(g > 2 ? g - 2 : 0), v = 2; v < g; v++)
                    p[v - 2] = arguments[v];
                h = u.options.overloadTranslationOptionHandler([f, m].concat(p))
            } else
                h = {
                    ...m
                };
            h.lng = h.lng || c.lng,
            h.lngs = h.lngs || c.lngs,
            h.ns = h.ns || c.ns,
            h.keyPrefix !== "" && (h.keyPrefix = h.keyPrefix || o || c.keyPrefix);
            const b = u.options.keySeparator || ".";
            let R;
            return h.keyPrefix && Array.isArray(f) ? R = f.map(S => `${h.keyPrefix}${b}${S}`) : R = h.keyPrefix ? `${h.keyPrefix}${b}${f}` : f,
            u.t(R, h)
        };
        return _e(r) ? c.lng = r : c.lngs = r,
        c.ns = l,
        c.keyPrefix = o,
        c
    }
    t() {
        var u;
        for (var r = arguments.length, l = new Array(r), o = 0; o < r; o++)
            l[o] = arguments[o];
        return (u = this.translator) == null ? void 0 : u.translate(...l)
    }
    exists() {
        var u;
        for (var r = arguments.length, l = new Array(r), o = 0; o < r; o++)
            l[o] = arguments[o];
        return (u = this.translator) == null ? void 0 : u.exists(...l)
    }
    setDefaultNamespace(r) {
        this.options.defaultNS = r
    }
    hasLoadedNamespace(r) {
        let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!this.isInitialized)
            return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages),
            !1;
        if (!this.languages || !this.languages.length)
            return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages),
            !1;
        const o = l.lng || this.resolvedLanguage || this.languages[0]
          , u = this.options ? this.options.fallbackLng : !1
          , c = this.languages[this.languages.length - 1];
        if (o.toLowerCase() === "cimode")
            return !0;
        const f = (m, h) => {
            const g = this.services.backendConnector.state[`${m}|${h}`];
            return g === -1 || g === 0 || g === 2
        }
        ;
        if (l.precheck) {
            const m = l.precheck(this, f);
            if (m !== void 0)
                return m
        }
        return !!(this.hasResourceBundle(o, r) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || f(o, r) && (!u || f(c, r)))
    }
    loadNamespaces(r, l) {
        const o = hi();
        return this.options.ns ? (_e(r) && (r = [r]),
        r.forEach(u => {
            this.options.ns.indexOf(u) < 0 && this.options.ns.push(u)
        }
        ),
        this.loadResources(u => {
            o.resolve(),
            l && l(u)
        }
        ),
        o) : (l && l(),
        Promise.resolve())
    }
    loadLanguages(r, l) {
        const o = hi();
        _e(r) && (r = [r]);
        const u = this.options.preload || []
          , c = r.filter(f => u.indexOf(f) < 0 && this.services.languageUtils.isSupportedCode(f));
        return c.length ? (this.options.preload = u.concat(c),
        this.loadResources(f => {
            o.resolve(),
            l && l(f)
        }
        ),
        o) : (l && l(),
        Promise.resolve())
    }
    dir(r) {
        var u, c;
        if (r || (r = this.resolvedLanguage || (((u = this.languages) == null ? void 0 : u.length) > 0 ? this.languages[0] : this.language)),
        !r)
            return "rtl";
        const l = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"]
          , o = ((c = this.services) == null ? void 0 : c.languageUtils) || new cp(mp());
        return l.indexOf(o.getLanguagePartFromCode(r)) > -1 || r.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
    }
    static createInstance() {
        let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , l = arguments.length > 1 ? arguments[1] : void 0;
        return new Ei(r,l)
    }
    cloneInstance() {
        let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Zo;
        const o = r.forkResourceStore;
        o && delete r.forkResourceStore;
        const u = {
            ...this.options,
            ...r,
            isClone: !0
        }
          , c = new Ei(u);
        if ((r.debug !== void 0 || r.prefix !== void 0) && (c.logger = c.logger.clone(r)),
        ["store", "services", "language"].forEach(m => {
            c[m] = this[m]
        }
        ),
        c.services = {
            ...this.services
        },
        c.services.utils = {
            hasLoadedNamespace: c.hasLoadedNamespace.bind(c)
        },
        o) {
            const m = Object.keys(this.store.data).reduce( (h, g) => (h[g] = {
                ...this.store.data[g]
            },
            Object.keys(h[g]).reduce( (p, v) => (p[v] = {
                ...h[g][v]
            },
            p), {})), {});
            c.store = new op(m,u),
            c.services.resourceStore = c.store
        }
        return c.translator = new hu(c.services,u),
        c.translator.on("*", function(m) {
            for (var h = arguments.length, g = new Array(h > 1 ? h - 1 : 0), p = 1; p < h; p++)
                g[p - 1] = arguments[p];
            c.emit(m, ...g)
        }),
        c.init(u, l),
        c.translator.options = u,
        c.translator.backendConnector.services.utils = {
            hasLoadedNamespace: c.hasLoadedNamespace.bind(c)
        },
        c
    }
    toJSON() {
        return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage
        }
    }
}
const ht = Ei.createInstance();
ht.createInstance = Ei.createInstance;
ht.createInstance;
ht.dir;
ht.init;
ht.loadResources;
ht.reloadResources;
ht.use;
ht.changeLanguage;
ht.getFixedT;
ht.t;
ht.exists;
ht.setDefaultNamespace;
ht.hasLoadedNamespace;
ht.loadNamespaces;
ht.loadLanguages;
const $E = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g
  , VE = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/"
}
  , YE = a => VE[a]
  , GE = a => a.replace($E, YE);
let qf = {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: !0,
    transWrapTextNodes: "",
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
    useSuspense: !0,
    unescape: GE
};
const PE = (a={}) => {
    qf = {
        ...qf,
        ...a
    }
}
  , Fx = () => qf;
let Qy;
const XE = a => {
    Qy = a
}
  , Kx = () => Qy
  , QE = {
    type: "3rdParty",
    init(a) {
        PE(a.options.react),
        XE(a)
    }
}
  , {slice: ZE, forEach: FE} = [];
function KE(a) {
    return FE.call(ZE.call(arguments, 1), r => {
        if (r)
            for (const l in r)
                a[l] === void 0 && (a[l] = r[l])
    }
    ),
    a
}
function JE(a) {
    return typeof a != "string" ? !1 : [/<\s*script.*?>/i, /<\s*\/\s*script\s*>/i, /<\s*img.*?on\w+\s*=/i, /<\s*\w+\s*on\w+\s*=.*?>/i, /javascript\s*:/i, /vbscript\s*:/i, /expression\s*\(/i, /eval\s*\(/i, /alert\s*\(/i, /document\.cookie/i, /document\.write\s*\(/i, /window\.location/i, /innerHTML/i].some(l => l.test(a))
}
const pp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
  , IE = function(a, r) {
    const o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        path: "/"
    }
      , u = encodeURIComponent(r);
    let c = `${a}=${u}`;
    if (o.maxAge > 0) {
        const f = o.maxAge - 0;
        if (Number.isNaN(f))
            throw new Error("maxAge should be a Number");
        c += `; Max-Age=${Math.floor(f)}`
    }
    if (o.domain) {
        if (!pp.test(o.domain))
            throw new TypeError("option domain is invalid");
        c += `; Domain=${o.domain}`
    }
    if (o.path) {
        if (!pp.test(o.path))
            throw new TypeError("option path is invalid");
        c += `; Path=${o.path}`
    }
    if (o.expires) {
        if (typeof o.expires.toUTCString != "function")
            throw new TypeError("option expires is invalid");
        c += `; Expires=${o.expires.toUTCString()}`
    }
    if (o.httpOnly && (c += "; HttpOnly"),
    o.secure && (c += "; Secure"),
    o.sameSite)
        switch (typeof o.sameSite == "string" ? o.sameSite.toLowerCase() : o.sameSite) {
        case !0:
            c += "; SameSite=Strict";
            break;
        case "lax":
            c += "; SameSite=Lax";
            break;
        case "strict":
            c += "; SameSite=Strict";
            break;
        case "none":
            c += "; SameSite=None";
            break;
        default:
            throw new TypeError("option sameSite is invalid")
        }
    return o.partitioned && (c += "; Partitioned"),
    c
}
  , yp = {
    create(a, r, l, o) {
        let u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
            path: "/",
            sameSite: "strict"
        };
        l && (u.expires = new Date,
        u.expires.setTime(u.expires.getTime() + l * 60 * 1e3)),
        o && (u.domain = o),
        document.cookie = IE(a, encodeURIComponent(r), u)
    },
    read(a) {
        const r = `${a}=`
          , l = document.cookie.split(";");
        for (let o = 0; o < l.length; o++) {
            let u = l[o];
            for (; u.charAt(0) === " "; )
                u = u.substring(1, u.length);
            if (u.indexOf(r) === 0)
                return u.substring(r.length, u.length)
        }
        return null
    },
    remove(a) {
        this.create(a, "", -1)
    }
};
var WE = {
    name: "cookie",
    lookup(a) {
        let {lookupCookie: r} = a;
        if (r && typeof document < "u")
            return yp.read(r) || void 0
    },
    cacheUserLanguage(a, r) {
        let {lookupCookie: l, cookieMinutes: o, cookieDomain: u, cookieOptions: c} = r;
        l && typeof document < "u" && yp.create(l, a, o, u, c)
    }
}
  , e4 = {
    name: "querystring",
    lookup(a) {
        var o;
        let {lookupQuerystring: r} = a, l;
        if (typeof window < "u") {
            let {search: u} = window.location;
            !window.location.search && ((o = window.location.hash) == null ? void 0 : o.indexOf("?")) > -1 && (u = window.location.hash.substring(window.location.hash.indexOf("?")));
            const f = u.substring(1).split("&");
            for (let m = 0; m < f.length; m++) {
                const h = f[m].indexOf("=");
                h > 0 && f[m].substring(0, h) === r && (l = f[m].substring(h + 1))
            }
        }
        return l
    }
};
let Ir = null;
const vp = () => {
    if (Ir !== null)
        return Ir;
    try {
        if (Ir = typeof window < "u" && window.localStorage !== null,
        !Ir)
            return !1;
        const a = "i18next.translate.boo";
        window.localStorage.setItem(a, "foo"),
        window.localStorage.removeItem(a)
    } catch {
        Ir = !1
    }
    return Ir
}
;
var t4 = {
    name: "localStorage",
    lookup(a) {
        let {lookupLocalStorage: r} = a;
        if (r && vp())
            return window.localStorage.getItem(r) || void 0
    },
    cacheUserLanguage(a, r) {
        let {lookupLocalStorage: l} = r;
        l && vp() && window.localStorage.setItem(l, a)
    }
};
let Wr = null;
const bp = () => {
    if (Wr !== null)
        return Wr;
    try {
        if (Wr = typeof window < "u" && window.sessionStorage !== null,
        !Wr)
            return !1;
        const a = "i18next.translate.boo";
        window.sessionStorage.setItem(a, "foo"),
        window.sessionStorage.removeItem(a)
    } catch {
        Wr = !1
    }
    return Wr
}
;
var n4 = {
    name: "sessionStorage",
    lookup(a) {
        let {lookupSessionStorage: r} = a;
        if (r && bp())
            return window.sessionStorage.getItem(r) || void 0
    },
    cacheUserLanguage(a, r) {
        let {lookupSessionStorage: l} = r;
        l && bp() && window.sessionStorage.setItem(l, a)
    }
}
  , a4 = {
    name: "navigator",
    lookup(a) {
        const r = [];
        if (typeof navigator < "u") {
            const {languages: l, userLanguage: o, language: u} = navigator;
            if (l)
                for (let c = 0; c < l.length; c++)
                    r.push(l[c]);
            o && r.push(o),
            u && r.push(u)
        }
        return r.length > 0 ? r : void 0
    }
}
  , r4 = {
    name: "htmlTag",
    lookup(a) {
        let {htmlTag: r} = a, l;
        const o = r || (typeof document < "u" ? document.documentElement : null);
        return o && typeof o.getAttribute == "function" && (l = o.getAttribute("lang")),
        l
    }
}
  , l4 = {
    name: "path",
    lookup(a) {
        var u;
        let {lookupFromPathIndex: r} = a;
        if (typeof window > "u")
            return;
        const l = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
        return Array.isArray(l) ? (u = l[typeof r == "number" ? r : 0]) == null ? void 0 : u.replace("/", "") : void 0
    }
}
  , i4 = {
    name: "subdomain",
    lookup(a) {
        var u, c;
        let {lookupFromSubdomainIndex: r} = a;
        const l = typeof r == "number" ? r + 1 : 1
          , o = typeof window < "u" && ((c = (u = window.location) == null ? void 0 : u.hostname) == null ? void 0 : c.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
        if (o)
            return o[l]
    }
};
let Zy = !1;
try {
    document.cookie,
    Zy = !0
} catch {}
const Fy = ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"];
Zy || Fy.splice(1, 1);
const o4 = () => ({
    order: Fy,
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
    convertDetectedLanguage: a => a
});
class Ky {
    constructor(r) {
        let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.type = "languageDetector",
        this.detectors = {},
        this.init(r, l)
    }
    init() {
        let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
            languageUtils: {}
        }
          , l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          , o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        this.services = r,
        this.options = KE(l, this.options || {}, o4()),
        typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = u => u.replace("-", "_")),
        this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
        this.i18nOptions = o,
        this.addDetector(WE),
        this.addDetector(e4),
        this.addDetector(t4),
        this.addDetector(n4),
        this.addDetector(a4),
        this.addDetector(r4),
        this.addDetector(l4),
        this.addDetector(i4)
    }
    addDetector(r) {
        return this.detectors[r.name] = r,
        this
    }
    detect() {
        let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.order
          , l = [];
        return r.forEach(o => {
            if (this.detectors[o]) {
                let u = this.detectors[o].lookup(this.options);
                u && typeof u == "string" && (u = [u]),
                u && (l = l.concat(u))
            }
        }
        ),
        l = l.filter(o => o != null && !JE(o)).map(o => this.options.convertDetectedLanguage(o)),
        this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes ? l : l.length > 0 ? l[0] : null
    }
    cacheUserLanguage(r) {
        let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.options.caches;
        l && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(r) > -1 || l.forEach(o => {
            this.detectors[o] && this.detectors[o].cacheUserLanguage(r, this.options)
        }
        ))
    }
}
Ky.type = "languageDetector";
ht.use(Ky).use(QE).init({
    detection: {
        order: ["localStorage", "navigator"],
        lookupLocalStorage: "i18nextLng",
        lookupSessionStorage: "i18nextLng"
    },
    fallbackLng: su.fallbackLang,
    lng: localStorage.getItem("i18nextLng") || su.defaultLang,
    supportedLngs: ["en", "es", "ar", "zh-cn"],
    ns: ["translations"],
    defaultNS: "translations",
    interpolation: {
        escapeValue: !1
    },
    lowerCaseLng: !0,
    debug: !1
}).languages = ["en", "es", "ar", "zh-cn"];
const [u4,Jx] = ra("useLocaleContext must be used within LocaleProvider")
  , s4 = "modulepreload"
  , c4 = function(a) {
    return "/chat/" + a
}
  , Sp = {}
  , nt = function(r, l, o) {
    let u = Promise.resolve();
    if (l && l.length > 0) {
        let f = function(g) {
            return Promise.all(g.map(p => Promise.resolve(p).then(v => ({
                status: "fulfilled",
                value: v
            }), v => ({
                status: "rejected",
                reason: v
            }))))
        };
        document.getElementsByTagName("link");
        const m = document.querySelector("meta[property=csp-nonce]")
          , h = (m == null ? void 0 : m.nonce) || (m == null ? void 0 : m.getAttribute("nonce"));
        u = f(l.map(g => {
            if (g = c4(g),
            g in Sp)
                return;
            Sp[g] = !0;
            const p = g.endsWith(".css")
              , v = p ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${g}"]${v}`))
                return;
            const b = document.createElement("link");
            if (b.rel = p ? "stylesheet" : s4,
            p || (b.as = "script"),
            b.crossOrigin = "",
            b.href = g,
            h && b.setAttribute("nonce", h),
            document.head.appendChild(b),
            p)
                return new Promise( (R, S) => {
                    b.addEventListener("load", R),
                    b.addEventListener("error", () => S(new Error(`Unable to preload CSS for ${g}`)))
                }
                )
        }
        ))
    }
    function c(f) {
        const m = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (m.payload = f,
        window.dispatchEvent(m),
        !m.defaultPrevented)
            throw f
    }
    return u.then(f => {
        for (const m of f || [])
            m.status === "rejected" && c(m.reason);
        return r().catch(c)
    }
    )
}
  , Ep = {
    en: {
        label: "English",
        dayjs: () => nt( () => import("./en-BPEo43yx.js").then(a => a.e), []),
        flatpickr: null,
        i18n: () => nt( () => import("./translations-BYfzXbN3.js"), []),
        flag: "united-kingdom"
    },
    ar: {
        label: "Arabic",
        dayjs: () => nt( () => import("./ar-Cf_706nZ.js").then(a => a.a), []),
        flatpickr: () => nt( () => import("./ar-CjLc6TgM.js").then(a => a.a), []).then(a => a.Arabic),
        i18n: () => nt( () => import("./translations-S8ZkEHIB.js"), []),
        flag: "saudi"
    },
    es: {
        label: "Spanish",
        dayjs: () => nt( () => import("./es-X3RTg-Ko.js").then(a => a.e), []),
        flatpickr: () => nt( () => import("./es-CMs8wo_Z.js").then(a => a.e), []).then(a => a.Spanish),
        i18n: () => nt( () => import("./translations-BTMURsez.js"), []),
        flag: "spain"
    },
    "zh-cn": {
        label: "Chinese",
        dayjs: () => nt( () => import("./zh-cn-uCQJAebu.js").then(a => a.z), []),
        flatpickr: () => nt( () => import("./zh-B6F8HOHd.js").then(a => a.z), []).then(a => a.Mandarin),
        i18n: () => nt( () => import("./translations-QDadMPxM.js"), []),
        flag: "china"
    }
}
  , Jy = localStorage.getItem("i18nextLng") || su.defaultLang
  , f4 = ht.dir(Jy);
function Iy({children: a}) {
    const [r,l] = w.useState(Jy)
      , [o,u] = w.useState(f4)
      , c = w.useCallback(async f => {
        try {
            await Ep[f].dayjs(),
            $y.locale(f);
            const m = await Ep[f].i18n();
            ht.addResourceBundle(f, "translations", m),
            ht.changeLanguage(f),
            l(f)
        } catch (m) {
            console.error("Failed to update locale:", m),
            ht.changeLanguage(f),
            l(f)
        }
    }
    , []);
    return Pt( () => {
        r && c(r)
    }
    , []),
    Pt( () => {
        const f = ht.dir(r);
        f !== o && u(f)
    }
    , [r]),
    Pt( () => {
        document.documentElement.dir = o
    }
    , [o]),
    Q.jsx(u4, {
        value: {
            locale: r,
            updateLocale: c,
            direction: o,
            setDirection: u,
            isRtl: o === "rtl"
        },
        children: a
    })
}
Iy.propTypes = {
    children: x.node.isRequired
};
const [d4,Ix] = ra("useSidebarContext must be used within SidebarProvider");
function Wy({children: a}) {
    const {xlAndUp: r, lgAndDown: l, name: o} = tE()
      , [u,{open: c, close: f, toggle: m}] = iE(r);
    if (Gy( () => {
        l && f()
    }
    , [o]),
    Pt( () => {
        const h = document == null ? void 0 : document.body;
        h && (u ? h.classList.add("is-sidebar-open") : h.classList.remove("is-sidebar-open"))
    }
    , [u]),
    !!a)
        return Q.jsx(d4, {
            value: {
                isExpanded: u,
                toggle: m,
                open: c,
                close: f
            },
            children: a
        })
}
Wy.propTypes = {
    children: x.node
};
const [h4,Du] = ra("useThemeContext must be used within ThemeProvider")
  , Nt = {
    ...su
}
  , m4 = "(prefers-color-scheme: dark)"
  , el = document == null ? void 0 : document.documentElement;
function e1({children: a}) {
    const r = xE(m4)
      , [l,o] = EE("settings", {
        themeMode: Nt.themeMode,
        themeLayout: Nt.themeLayout,
        cardSkin: Nt.cardSkin,
        isMonochrome: Nt.isMonochrome,
        darkColorScheme: Nt.darkColorScheme,
        lightColorScheme: Nt.lightColorScheme,
        primaryColorScheme: Nt.primaryColorScheme,
        notification: {
            ...Nt.notification
        }
    })
      , u = l.themeMode === "system" && r || l.themeMode === "dark"
      , c = O => {
        o(z => ({
            ...z,
            themeMode: O
        }))
    }
      , f = O => {
        o({
            ...l,
            themeLayout: O
        })
    }
      , m = O => {
        o({
            ...l,
            isMonochrome: O
        })
    }
      , h = O => {
        o({
            ...l,
            darkColorScheme: {
                name: O,
                ...al[O]
            }
        })
    }
      , g = O => {
        o({
            ...l,
            lightColorScheme: {
                name: O,
                ...al[O]
            }
        })
    }
      , p = O => {
        o(z => ({
            ...z,
            primaryColorScheme: {
                name: O,
                ...al[O]
            }
        }))
    }
      , v = O => {
        o({
            ...l,
            notification: {
                ...l.notification,
                position: O
            }
        })
    }
      , b = O => {
        o({
            ...l,
            notification: {
                ...l.notification,
                isExpanded: O
            }
        })
    }
      , R = O => {
        o({
            ...l,
            notification: {
                ...l.notification,
                visibleToasts: O
            }
        })
    }
      , S = O => {
        o(z => ({
            ...z,
            cardSkin: O
        }))
    }
      , D = () => {
        o({
            themeMode: Nt.themeMode,
            themeLayout: Nt.themeLayout,
            isMonochrome: Nt.isMonochrome,
            darkColorScheme: Nt.darkColorScheme,
            lightColorScheme: Nt.lightColorScheme,
            primaryColorScheme: Nt.primaryColorScheme,
            cardSkin: Nt.cardSkin,
            notification: {
                ...Nt.notification
            }
        })
    }
    ;
    return Pt( () => {
        u ? el.classList.add("dark") : el.classList.remove("dark")
    }
    , [u]),
    Pt( () => {
        l.isMonochrome ? document.body.classList.add("is-monochrome") : document.body.classList.remove("is-monochrome")
    }
    , [l.isMonochrome]),
    Pt( () => {
        el.dataset.themeLight = l.lightColorScheme.name
    }
    , [l.lightColorScheme]),
    Pt( () => {
        el.dataset.themeDark = l.darkColorScheme.name
    }
    , [l.darkColorScheme]),
    Pt( () => {
        el.dataset.themePrimary = l.primaryColorScheme.name
    }
    , [l.primaryColorScheme]),
    Pt( () => {
        el.dataset.cardSkin = l.cardSkin
    }
    , [l.cardSkin]),
    Pt( () => {
        document && (document.body.dataset.layout = l.themeLayout)
    }
    , [l.themeLayout]),
    a ? Q.jsx(h4, {
        value: {
            ...l,
            isDark: u,
            setMonochromeMode: m,
            setThemeMode: c,
            setThemeLayout: f,
            setLightColorScheme: g,
            setDarkColorScheme: h,
            setPrimaryColorScheme: p,
            setNotificationPosition: v,
            setNotificationExpand: b,
            setNotificationMaxCount: R,
            setCardSkin: S,
            setSettings: o,
            resetTheme: D
        },
        children: a
    }) : null
}
e1.propTypes = {
    children: x.node
};
const g4 = a => w.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "5523px",
    height: "1386px",
    style: {
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        imageRendering: "optimizeQuality",
        fillRule: "evenodd",
        clipRule: "evenodd"
    },
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    ...a
}, w.createElement("g", null, w.createElement("path", {
    style: {
        opacity: .995
    },
    fill: "#bdfc00",
    d: "M 681.5,-0.5 C 690.167,-0.5 698.833,-0.5 707.5,-0.5C 924.81,8.0732 1101.98,96.0732 1239,263.5C 1351.7,410.992 1399.7,577.658 1383,763.5C 1361.62,947.119 1281.79,1099.29 1143.5,1220C 1022.45,1321.15 882.786,1376.32 724.5,1385.5C 703.167,1385.5 681.833,1385.5 660.5,1385.5C 529.846,1378.34 410.346,1338.34 302,1265.5C 267.373,1299.13 233.04,1333.13 199,1367.5C 129.313,1316.65 69.1465,1256.31 18.5,1186.5C 52.3196,1152.18 86.3196,1118.01 120.5,1084C 45.694,973.748 5.36069,851.914 -0.5,718.5C -0.5,701.167 -0.5,683.833 -0.5,666.5C 9.45288,478.464 81.7862,319.297 216.5,189C 347.591,68.4946 502.591,5.32797 681.5,-0.5 Z M 663.5,206.5 C 827.817,200.773 963.317,259.773 1070,383.5C 1162.65,501.077 1196.65,634.077 1172,782.5C 1149.12,895.968 1094.12,990.301 1007,1065.5C 1026.15,898.812 1045.82,732.146 1066,565.5C 1071.86,467.373 1032.7,393.54 948.5,344C 908.945,323.489 866.945,315.156 822.5,319C 659.153,336.057 495.82,353.224 332.5,370.5C 331.5,370.167 330.5,369.833 329.5,369.5C 419.067,271.386 530.401,217.053 663.5,206.5 Z M 325.5,373.5 C 382.917,429.416 439.917,485.916 496.5,543C 556.536,538.3 616.536,533.3 676.5,528C 541,663.5 405.5,799 270,934.5C 203.59,813.883 188.923,687.217 226,554.5C 246.765,486.94 279.931,426.606 325.5,373.5 Z M 852.5,713.5 C 853.147,714.274 853.48,715.274 853.5,716.5C 846.404,777.53 839.571,838.53 833,899.5C 889.5,956 946,1012.5 1002.5,1069C 891.278,1158.15 764.611,1193.48 622.5,1175C 562.258,1165.75 505.591,1146.25 452.5,1116.5C 451.479,1116 451.312,1115.33 452,1114.5C 585.701,980.965 719.201,847.299 852.5,713.5 Z M 269.5,936.5 C 313.593,1011.76 373.26,1071.59 448.5,1116C 399.653,1165.01 350.653,1213.85 301.5,1262.5C 230.543,1214.54 170.876,1155.21 122.5,1084.5C 171.521,1035.15 220.521,985.812 269.5,936.5 Z"
})), w.createElement("g", null, w.createElement("path", {
    style: {
        opacity: .992
    },
    fill: "#bdfc00",
    d: "M 4555.5,357.5 C 4666.69,351.704 4759.19,390.038 4833,472.5C 4842.79,483.457 4851.63,495.124 4859.5,507.5C 4825.63,528.936 4791.29,549.603 4756.5,569.5C 4752.77,568.486 4749.11,567.319 4745.5,566C 4681.73,488.303 4601.73,464.303 4505.5,494C 4425.93,527.59 4381.43,587.424 4372,673.5C 4369.8,719.015 4379.13,762.015 4400,802.5C 4433.6,856.751 4482.1,889.251 4545.5,900C 4603.05,909.029 4655.39,896.695 4702.5,863C 4718.6,849.567 4732.6,834.234 4744.5,817C 4750.67,816.107 4756.67,816.773 4762.5,819C 4768.29,821.394 4773.95,824.06 4779.5,827C 4800.67,839.749 4821.67,852.749 4842.5,866C 4847.9,869.258 4853.56,871.758 4859.5,873.5C 4816.24,945.523 4753.9,993.023 4672.5,1016C 4566.94,1042.13 4469.27,1024.8 4379.5,964C 4308.52,910.938 4265.35,840.438 4250,752.5C 4236.2,676.784 4246.2,604.451 4280,535.5C 4330.53,445.429 4406.36,388.596 4507.5,365C 4523.54,361.782 4539.54,359.282 4555.5,357.5 Z"
})), w.createElement("g", null, w.createElement("path", {
    style: {
        opacity: .992
    },
    fill: "#bdfc00",
    d: "M 1905.5,359.5 C 1970.03,356.375 2028.37,373.541 2080.5,411C 2110.32,434.469 2131.99,463.969 2145.5,499.5C 2145.17,500.167 2144.83,500.833 2144.5,501.5C 2111.5,520.833 2078.5,540.167 2045.5,559.5C 2041.71,558.019 2038.05,556.353 2034.5,554.5C 1994.39,487.737 1937.39,467.237 1863.5,493C 1836.21,508.745 1826.38,531.912 1834,562.5C 1838.08,574.243 1844.91,584.077 1854.5,592C 1869.29,602.729 1885.29,611.396 1902.5,618C 1946.09,633.531 1989.76,648.864 2033.5,664C 2064.28,675.049 2092.28,690.715 2117.5,711C 2154.8,749.554 2170.63,795.721 2165,849.5C 2155.05,925.273 2114.89,977.773 2044.5,1007C 1969.8,1034.96 1894.8,1035.62 1819.5,1009C 1778.37,994.176 1743.54,970.343 1715,937.5C 1699.02,918.216 1687.19,896.549 1679.5,872.5C 1679.93,867.558 1682.26,863.725 1686.5,861C 1714,841.214 1743.66,825.214 1775.5,813C 1781.72,810.544 1787.56,811.044 1793,814.5C 1804.55,832.719 1816.89,850.386 1830,867.5C 1848.16,885.33 1870,895.83 1895.5,899C 1930.35,905.273 1964.35,902.273 1997.5,890C 2036.72,871.359 2047.22,842.192 2029,802.5C 2021.47,791.322 2011.64,782.822 1999.5,777C 1992.83,774 1986.17,771 1979.5,768C 1940.67,754.874 1901.67,742.207 1862.5,730C 1825.32,718.081 1791.32,700.414 1760.5,677C 1729.41,650.676 1710.91,617.176 1705,576.5C 1692.37,485.521 1727.54,420.687 1810.5,382C 1841.01,369.07 1872.67,361.57 1905.5,359.5 Z"
})), w.createElement("g", null, w.createElement("path", {
    style: {
        opacity: .994
    },
    fill: "#bdfc00",
    d: "M 3806.5,364.5 C 3837.24,363.946 3867.9,365.112 3898.5,368C 3972.11,376.711 4028.94,411.877 4069,473.5C 4105.02,537.904 4108.35,603.904 4079,671.5C 4064.41,701.095 4044.24,726.262 4018.5,747C 4005.51,756.495 3992.18,765.495 3978.5,774C 4023.96,853.752 4069.29,933.585 4114.5,1013.5C 4068.5,1014.67 4022.5,1014.83 3976.5,1014C 3935.96,939.753 3895.29,865.586 3854.5,791.5C 3820.51,790.5 3786.51,790.167 3752.5,790.5C 3752.5,865.167 3752.5,939.833 3752.5,1014.5C 3711.17,1014.5 3669.83,1014.5 3628.5,1014.5C 3628.5,798.833 3628.5,583.167 3628.5,367.5C 3688.03,369.26 3747.37,368.26 3806.5,364.5 Z M 3752.5,490.5 C 3804.89,490.013 3857.23,490.513 3909.5,492C 3927.99,501.991 3943.82,515.157 3957,531.5C 3971.5,558.563 3974.5,586.896 3966,616.5C 3961.12,632.687 3952.29,646.187 3939.5,657C 3927.59,666.458 3914.59,674.125 3900.5,680C 3851.17,680.5 3801.83,680.667 3752.5,680.5C 3752.5,617.167 3752.5,553.833 3752.5,490.5 Z"
})), w.createElement("g", null, w.createElement("path", {
    style: {
        opacity: .993
    },
    fill: "#bdfc00",
    d: "M 3098.5,366.5 C 3148.47,369.237 3198.47,371.737 3248.5,374C 3249.43,374.388 3250.09,375.055 3250.5,376C 3324.62,588.721 3398.28,801.555 3471.5,1014.5C 3425.83,1014.67 3380.17,1014.5 3334.5,1014C 3321.13,975.727 3308.46,937.227 3296.5,898.5C 3212.83,898.855 3129.16,899.521 3045.5,900.5C 3028.93,938.302 3012.93,976.302 2997.5,1014.5C 2952.5,1014.83 2907.5,1014.5 2862.5,1013.5C 2941.18,797.805 3019.84,582.138 3098.5,366.5 Z M 3164.5,525.5 C 3170.05,526.544 3173.55,529.877 3175,535.5C 3206.12,609.871 3231.46,686.205 3251,764.5C 3252.16,770.445 3252.66,776.445 3252.5,782.5C 3195.83,782.667 3139.17,782.5 3082.5,782C 3109.94,696.525 3137.27,611.025 3164.5,525.5 Z"
})), w.createElement("g", null, w.createElement("path", {
    style: {
        opacity: .995
    },
    fill: "#bdfc00",
    d: "M 2338.5,367.5 C 2467.83,367.5 2597.17,367.5 2726.5,367.5C 2726.5,408.5 2726.5,449.5 2726.5,490.5C 2637.83,490.5 2549.17,490.5 2460.5,490.5C 2460.5,535.5 2460.5,580.5 2460.5,625.5C 2539.17,625.333 2617.83,625.5 2696.5,626C 2699.67,629.167 2702.83,632.333 2706,635.5C 2706.5,673.499 2706.67,711.499 2706.5,749.5C 2624.5,749.5 2542.5,749.5 2460.5,749.5C 2460.5,796.833 2460.5,844.167 2460.5,891.5C 2551.5,891.5 2642.5,891.5 2733.5,891.5C 2733.5,932.5 2733.5,973.5 2733.5,1014.5C 2598.83,1014.5 2464.17,1014.5 2329.5,1014.5C 2329.33,801.833 2329.5,589.166 2330,376.5C 2333.04,373.631 2335.87,370.631 2338.5,367.5 Z"
})), w.createElement("g", null, w.createElement("path", {
    style: {
        opacity: .993
    },
    fill: "#bdfc00",
    d: "M 5522.5,367.5 C 5522.5,583.167 5522.5,798.833 5522.5,1014.5C 5478.83,1014.5 5435.17,1014.5 5391.5,1014.5C 5391.5,926.167 5391.5,837.833 5391.5,749.5C 5312.17,749.5 5232.83,749.5 5153.5,749.5C 5153.5,837.833 5153.5,926.167 5153.5,1014.5C 5112.17,1014.5 5070.83,1014.5 5029.5,1014.5C 5029.5,798.833 5029.5,583.167 5029.5,367.5C 5070.83,367.5 5112.17,367.5 5153.5,367.5C 5153.5,453.5 5153.5,539.5 5153.5,625.5C 5232.83,625.5 5312.17,625.5 5391.5,625.5C 5391.33,542.833 5391.5,460.166 5392,377.5C 5395.17,374.333 5398.33,371.167 5401.5,368C 5441.83,367.5 5482.17,367.333 5522.5,367.5 Z"
})));
function t1(a) {
    var r, l, o = "";
    if (typeof a == "string" || typeof a == "number")
        o += a;
    else if (typeof a == "object")
        if (Array.isArray(a)) {
            var u = a.length;
            for (r = 0; r < u; r++)
                a[r] && (l = t1(a[r])) && (o && (o += " "),
                o += l)
        } else
            for (l in a)
                a[l] && (o && (o += " "),
                o += l);
    return o
}
function ye() {
    for (var a, r, l = 0, o = "", u = arguments.length; l < u; l++)
        (a = arguments[l]) && (r = t1(a)) && (o && (o += " "),
        o += r);
    return o
}
const p4 = {
    0: "neutral",
    1: "primary",
    2: "secondary",
    3: "info",
    4: "success",
    5: "warning",
    6: "error",
    7: "secondary",
    8: "primary",
    9: "info"
};
function y4(a) {
    if (!dy(a))
        throw new TypeError("Input must be a string.");
    if (a.length === 0)
        throw new Error("Input string must not be empty.");
    const l = a.toLowerCase().charCodeAt(0) % 10;
    return p4[l]
}
const v4 = {
    primary: "this:primary",
    secondary: "this:secondary",
    info: "this:info",
    success: "this:success",
    warning: "this:warning",
    error: "this:error"
};
function Et(a) {
    const r = v4[a];
    if (!r)
        throw new Error(`Color "${a}" not found in the color map.`);
    return r
}
const b4 = {
    filled: "bg-this text-white",
    soft: "text-this-darker bg-this-darker/10 dark:text-this-lighter dark:bg-this-lighter/10"
}
  , S4 = {
    filled: "bg-gray-200 text-gray-700 dark:bg-surface-2 dark:text-dark-100",
    soft: "bg-gray-200/30 text-gray-700 dark:bg-surface-2/30 dark:text-dark-100"
}
  , n1 = w.forwardRef( (a, r) => {
    const {component: l, imgComponent: o, alt: u, loading: c="lazy", imgProps: f, src: m, srcSet: h, name: g, initialColor: p="neutral", initialVariant: v="filled", initialProps: b, className: R, classNames: S={}, children: D, size: O=12, style: z, indicator: G, ...$} = a
      , ee = l || "div"
      , L = o || "img";
    let _ = p, ne;
    return g && (ne = g.match(/\b(\w)/g).slice(0, 2).join(""),
    p === "auto" && (_ = y4(ne))),
    Q.jsxs(ee, {
        className: ye("avatar relative inline-flex shrink-0", R, S == null ? void 0 : S.root),
        ref: r,
        style: {
            height: `${O / 4}rem`,
            width: `${O / 4}rem`,
            ...z
        },
        ...$,
        children: [m || h ? Q.jsx(L, {
            className: ye("avatar-image avatar-display relative h-full w-full before:absolute before:inset-0 before:rounded-[inherit] before:bg-gray-150 dark:before:bg-dark-600", S == null ? void 0 : S.display, S == null ? void 0 : S.image),
            src: m,
            srcSet: h,
            alt: u || g || "avatar",
            loading: c,
            ...f
        }) : Q.jsx("div", {
            className: ye("avatar-initial avatar-display flex h-full w-full select-none items-center justify-center font-medium uppercase", _ !== "neutral" ? [Et(_), b4[v]] : S4[v], S == null ? void 0 : S.display, S == null ? void 0 : S.initial),
            ...b,
            children: g ? ne : D
        }), G]
    })
}
);
n1.displayName = "Avatar";
n1.propTypes = {
    component: x.elementType,
    imgComponent: x.elementType,
    alt: x.string,
    loading: x.oneOf(["auto", "lazy", "eager"]),
    imgProps: x.object,
    src: x.string,
    srcSet: x.string,
    name: x.string,
    initialColor: x.string,
    initialVariant: x.string,
    initialProps: x.object,
    className: x.string,
    classNames: x.object,
    children: x.node,
    size: x.number,
    style: x.object,
    indicator: x.node
};
const Wx = "Search"
  , ew = "item"
  , la = ["neutral", "primary", "secondary", "info", "success", "warning", "error"]
  , a1 = w.forwardRef( (a, r) => {
    const {color: l="neutral", isPing: o, className: u, children: c, ...f} = a;
    return Q.jsxs("div", {
        className: ye("avatar-dot absolute rounded-full", l === "neutral" ? "bg-gray-300 dark:bg-dark-200" : [Et(l), "bg-this dark:bg-this-light"], u),
        ...f,
        ref: r,
        children: [o && Q.jsx("span", {
            className: "absolute inset-0 inline-flex h-full w-full animate-ping rounded-full bg-inherit opacity-80"
        }), c]
    })
}
);
a1.displayName = "AvatarDot";
a1.propTypes = {
    className: x.string,
    color: x.oneOf(la),
    isPing: x.bool,
    children: x.node
};
const E4 = {
    filled: "bg-this text-white hover:bg-this-darker focus:bg-this-darker active:bg-this-darker/90 disabled:bg-this-light dark:disabled:bg-this-darker",
    soft: "text-this-darker bg-this-darker/[.08] hover:bg-this-darker/[.15] focus:bg-this-darker/[.15] active:focus:bg-this-darker/20 dark:bg-this-lighter/10 dark:text-this-lighter dark:hover:bg-this-lighter/20 dark:focus:bg-this-lighter/20 dark:active:bg-this-lighter/25",
    outlined: "text-this-darker border border-this-darker hover:bg-this-darker/[.05] focus:bg-this-darker/[.05] active:bg-this-darker/10 dark:border-this-lighter dark:text-this-lighter dark:hover:bg-this-lighter/[.05] dark:focus:bg-this-lighter/[.05] dark:active:bg-this-lighter/10",
    flat: "text-this-darker hover:bg-this-darker/[.08] focus:bg-this-darker/[.08] active:bg-this-darker/[.15] dark:text-this-lighter dark:hover:bg-this-lighter/10 dark:focus:bg-this-lighter/10 dark:active:bg-this-lighter/[.15]"
}
  , x4 = {
    filled: "bg-gray-150 text-gray-900 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-200/80 dark:bg-surface-2 dark:text-dark-50 dark:hover:bg-surface-1 dark:focus:bg-surface-1 dark:active:bg-surface-1/90",
    soft: "bg-gray-150/30 text-gray-900 hover:bg-gray-200/[.15] focus:bg-gray-200/[.15] active:bg-gray-200/20 dark:bg-dark-500/30 dark:text-dark-50 dark:hover:bg-dark-450/[.15] dark:focus:bg-dark-450/[.15] dark:active:bg-dark-450/20",
    outlined: "border border-gray-300 hover:bg-gray-300/20 focus:bg-gray-300/20 text-gray-900 active:bg-gray-300/25 dark:text-dark-50 dark:hover:bg-dark-300/20 dark:focus:bg-dark-300/20 dark:active:bg-dark-300/25 dark:border-dark-450",
    flat: "hover:bg-gray-300/20 focus:bg-gray-300/20 text-gray-700 active:bg-gray-300/25 dark:text-dark-200 dark:hover:bg-dark-300/10 dark:focus:bg-dark-300/10 dark:active:bg-dark-300/20"
}
  , r1 = w.forwardRef( (a, r) => {
    const {component: l, className: o, children: u, color: c, isIcon: f, variant: m="filled", unstyled: h, type: g="button", isGlow: p, disabled: v, onClick: b, ...R} = a
      , S = l || "button"
      , D = c || "neutral";
    return Q.jsx(S, {
        className: ye("btn-base", h ? c && c !== "neutral" && Et(c) : ["btn", f && "shrink-0 p-0", D === "neutral" ? [x4[m], p && "shadow-lg shadow-gray-200/50 dark:shadow-dark-450/5"] : [Et(D), E4[m], p && "shadow-soft shadow-this/50 dark:shadow-lg dark:shadow-this/50"]], o),
        type: g,
        ref: r,
        disabled: v,
        "data-disabled": v,
        onClick: b,
        ...R,
        children: u
    })
}
);
r1.displayName = "Button";
r1.propTypes = {
    children: x.node,
    component: x.elementType,
    className: x.string,
    type: x.string,
    isIcon: x.bool,
    disabled: x.bool,
    onClick: x.func,
    color: x.oneOf(la),
    variant: x.oneOf(["filled", "outlined", "soft", "flat"]),
    unstyled: x.bool,
    isGlow: x.bool
};
const w4 = {
    filled: "text-white bg-this",
    outlined: "border border-this/30 text-this dark:border-this-lighter/30 dark:text-this-lighter",
    soft: "text-this-darker bg-this-darker/[0.07] dark:text-this-lighter dark:bg-this-lighter/10"
}
  , R4 = {
    filled: "bg-gray-200 text-gray-900 dark:bg-surface-2 dark:text-dark-50",
    outlined: "border border-gray-300 text-gray-900 dark:border-surface-1 dark:text-dark-50",
    soft: "bg-gray-200/30 text-gray-900 dark:bg-dark-500/30 dark:text-dark-50"
}
  , l1 = w.forwardRef( (a, r) => {
    const {component: l, className: o, unstyled: u, variant: c="filled", color: f, isGlow: m, children: h, ...g} = a
      , p = l || "div"
      , v = f || "neutral";
    return Q.jsx(p, {
        className: ye("badge-base", u ? f && f !== "neutral" && Et(f) : ["badge", v === "neutral" ? [R4[c], m && "shadow-lg shadow-gray-200/50 dark:shadow-dark-450/50"] : [Et(v), w4[c], m && "shadow-lg shadow-this/50 dark:shadow-this-light/50"]], o),
        ref: r,
        ...g,
        children: h
    })
}
);
l1.displayName = "Badge";
l1.propTypes = {
    children: x.node,
    className: x.string,
    component: x.elementType,
    variant: x.oneOf(["filled", "outlined", "soft"]),
    color: x.oneOf(la),
    unstyled: x.bool,
    isGlow: x.bool
};
const T4 = {
    filled: "bg-this text-white hover:bg-this-darker focus:bg-this-darker active:bg-this-darker/90 disabled:bg-this-light dark:disabled:bg-this-darker",
    outlined: "border border-gray-300 dark:border-dark-450 text-this hover:border-this focus:border-this dark:border-this-lighter/30 dark:text-this-lighter dark:hover:border-this-lighter dark:focus:border-this-lighter",
    soft: "text-this-darker bg-this-darker/[0.07] hover:text-white hover:bg-this-darker focus:text-white focus:bg-this-darker dark:text-this-lighter dark:bg-this-lighter/[.13] dark:hover:bg-this dark:hover:text-white dark:focus:bg-this dark:focus:text-white"
}
  , O4 = {
    filled: "bg-gray-150 text-gray-900 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-200/80 dark:bg-surface-2 dark:text-dark-100 dark:hover:bg-surface-1 dark:focus:bg-surface-1 dark:active:bg-surface-1/90",
    outlined: "border border-gray-300 text-gray-800 hover:border-gray-800 focus:border-gray-800 dark:border-surface-2 dark:text-dark-100 dark:hover:border-dark-100 dark:focus:border-dark-100",
    soft: "text-this-darker bg-gray-150/10 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-150 focus:bg-gray-150 active:bg-gray-150/80 dark:text-dark-100 dark:bg-dark-500/10 dark:hover:bg-dark-500 dark:focus:bg-dark-500 dark:active:bg-dark-500/80"
}
  , i1 = w.forwardRef( (a, r) => {
    const {component: l, className: o, unstyled: u, variant: c="filled", color: f, isGlow: m, children: h, ...g} = a
      , p = l || "a"
      , v = f || "neutral";
    return Q.jsx(p, {
        className: ye("tag-base", u ? f && f !== "neutral" && Et(f) : ["tag", v === "neutral" ? [O4[c], m && "shadow-lg shadow-gray-200/50 dark:shadow-dark-450/50"] : [Et(v), T4[c], m && "shadow-soft shadow-this/50 dark:shadow-this-light/50"]], o),
        ref: r,
        ...g,
        children: h
    })
}
);
i1.displayName = "Tag";
i1.propTypes = {
    className: x.string,
    component: x.elementType,
    children: x.node,
    variant: x.oneOf(["filled", "outlined", "soft"]),
    color: x.oneOf(la),
    unstyled: x.bool,
    isGlow: x.bool
};
const dr = w.forwardRef( ({component: a, className: r, ...l}, o) => {
    const u = a || "div";
    return Q.jsx(u, {
        ref: o,
        className: ye("relative break-words print:border", r),
        ...l
    })
}
);
dr.propTypes = {
    component: x.elementType,
    className: x.string
};
dr.displayName = "Box";
const o1 = w.forwardRef( (a, r) => {
    const {cardSkin: l} = Du()
      , {skin: o=l, children: u, className: c, ...f} = a;
    return Q.jsx(dr, {
        ref: r,
        className: ye("card rounded-lg", o && o !== "none" && [o === "bordered" && "border border-gray-200 dark:border-dark-600 print:border-0", o === "shadow-sm" && "bg-white shadow-soft dark:bg-dark-700 dark:shadow-none print:shadow-none"], c),
        ...f,
        children: u
    })
}
);
o1.displayName = "Card";
o1.propTypes = {
    children: x.node,
    className: x.string,
    skin: x.oneOf(["none", "bordered", "shadow-sm"])
};
const u1 = w.forwardRef( (a, r) => {
    const {animate: l=!0, className: o, ...u} = a;
    return Q.jsx("div", {
        className: ye("skeleton relative overflow-hidden", l && "animate-wave before:absolute before:inset-0", o),
        ref: r,
        ...u
    })
}
);
u1.propTypes = {
    animate: x.bool,
    className: x.string
};
u1.displayName = "Skeleton";
const s1 = w.forwardRef( (a, r) => {
    const {variant: l="default", className: o, ...u} = a;
    return Q.jsx(ad, {
        unstyled: !0,
        className: ye("ghost-spinner", {
            "border-white border-r-transparent": l === "default",
            "border-white/30 border-r-white": l === "soft",
            "text-white": l === "innerDot"
        }, o),
        variant: l,
        ...u,
        ref: r
    })
}
);
s1.displayName = "GhostSpinner";
s1.propTypes = {
    animate: x.bool,
    isElastic: x.bool,
    disabled: x.bool,
    className: x.string,
    variant: x.oneOf(["default", "soft", "innerDot"])
};
const ad = w.forwardRef( (a, r) => {
    const {className: l, animate: o=!0, isElastic: u, disabled: c, variant: f="default", color: m="neutral", unstyled: h, ...g} = a;
    return f === "default" || f === "soft" ? Q.jsx("div", {
        ref: r,
        className: ye("spinner spinner-base rounded-full", u && "is-elastic", o && !c && "animate-spin", c && "opacity-50", !h && [f === "default" ? [m === "neutral" ? "border-gray-500 dark:border-dark-400" : [Et(m), "border-this dark:border-this-light"], "border-r-transparent dark:border-r-transparent"] : [m === "neutral" ? "border-gray-150 border-r-gray-500 dark:border-dark-500 dark:border-r-dark-400" : [Et(m), "border-this/30 border-r-this dark:border-this-light/30 dark:border-r-this-light"]]], l),
        disabled: c,
        ...g
    }) : Q.jsx("div", {
        ref: r,
        className: ye("spinner-base", u && "is-elastic", o && !c && "animate-spin", c && "opacity-50", !h && [m === "neutral" ? "text-gray-500 dark:text-dark-400" : [Et(m), "text-this dark:text-this-light"]], l),
        disabled: c,
        ...g,
        children: Q.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            className: "h-full w-full",
            viewBox: "0 0 28 28",
            children: Q.jsx("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2.764.005c0 6.185-5.014 11.2-11.2 11.2-6.185 0-11.2-5.015-11.2-11.2 0-6.186 5.015-11.2 11.2-11.2 6.186 0 11.2 5.014 11.2 11.2zM8.4 16.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z",
                clipRule: "evenodd"
            })
        })
    })
}
);
ad.displayName = "Spinner";
ad.propTypes = {
    animate: x.bool,
    isElastic: x.bool,
    disabled: x.bool,
    className: x.string,
    color: x.oneOf(la),
    unstyled: x.bool,
    variant: x.oneOf(["default", "soft", "innerDot"])
};
const rd = w.forwardRef( (a, r) => {
    const {children: l, value: o=0, showRail: u=!0, isActive: c=!1, isIndeterminate: f=!1, unstyled: m=!1, color: h="neutral", variant: g="default", className: p, classNames: v, animationDuration: b, style: R={}, rootProps: S={}, ...D} = a;
    return Q.jsx("div", {
        ...S,
        className: ye("progress-rail", u && !m && [h === "neutral" || g !== "soft" ? "bg-gray-150 dark:bg-dark-500" : [Et(h), "bg-this/[.15] dark:bg-this-light/25"]], p, v == null ? void 0 : v.root),
        children: Q.jsx("div", {
            ...D,
            ref: r,
            className: ye("progress relative rounded-full transition-[width] ease-out", !m && [h === "neutral" ? "bg-gray-500 dark:bg-dark-400" : [Et(h), "bg-this dark:bg-this-light"]], c && "is-active", f ? "is-indeterminate" : "flex items-center justify-end leading-none", v == null ? void 0 : v.bar),
            style: {
                width: f ? "100%" : `${o}%`,
                animationDuration: b,
                ...R
            },
            children: l
        })
    })
}
);
rd.propTypes = {
    children: x.node,
    value: x.number,
    showRail: x.bool,
    isActive: x.bool,
    isIndeterminate: x.bool,
    unstyled: x.bool,
    color: x.oneOf(la),
    variant: x.oneOf(["default", "soft"]),
    className: x.string,
    classNames: x.object,
    animationDuration: x.string,
    style: x.object,
    rootStyle: x.object,
    rootProps: x.object
};
rd.displayName = "Progress";
function xp(a, r, l, o) {
    const g = 50 + o / 2
      , p = `M ${g},${g} m 0,50
      a 50,50 0 1 1 0,-100
      a 50,50 0 1 1 0,100`
      , v = Math.PI * 2 * 50
      , b = {
        strokeDasharray: `${a / 100 * (v - l)}px ${100 * 8}px`,
        strokeDashoffset: `-${l / 2}px`,
        transformOrigin: r ? "center" : void 0,
        transform: r ? `rotate(${r}deg)` : void 0
    };
    return {
        pathString: p,
        pathStyle: b
    }
}
function C4() {
    return `tl-${Math.random().toString(36).substr(2, 9)}-${Date.now().toString(36).substr(-4)}`
}
const c1 = w.forwardRef( (a, r) => {
    const {value: l=0, isIndeterminate: o=!1, offsetDegree: u, gapDegree: c=0, gapOffsetDegree: f=0, strokeWidth: m=6, strokeLinecap: h="round", isActive: g=!1, size: p=24, showRail: v=!0, children: b, color: R="neutral", variant: S="default", contentProps: D={}, rootProps: O={}, wrapperProps: z={}, className: G, classNames: $={}, gradient: ee, ...L} = a
      , _ = `gradient-${C4()}`
      , ne = 100 + m
      , {pathString: oe, pathStyle: ce} = w.useMemo( () => xp(100, 0, c, m), [c, m])
      , {pathString: he, pathStyle: se} = w.useMemo( () => xp(l, u, c, m), [c, u, m, l])
      , {cardSkin: xe} = Du()
      , ge = [S === "gradient" ? "" : R === "neutral" ? "stroke-gray-500 dark:stroke-dark-450" : [Et(R), "stroke-this dark:stroke-this-light"]];
    return Q.jsx("div", {
        className: ye("max-w-full", $ == null ? void 0 : $.root),
        ...O,
        children: Q.jsxs("div", {
            ...z,
            className: ye("circlebar-wrapper relative inline-block", $.wrapper),
            style: {
                width: `${p / 4}rem`,
                height: `${p / 4}rem`
            },
            children: [Q.jsxs("svg", {
                style: {
                    transform: f ? `rotate(${f}deg)` : void 0
                },
                ref: r,
                viewBox: `0 0 ${ne} ${ne}`,
                className: ye("circlebar-svg", o && "circlebar-indeterminate-wrapper", G, $ == null ? void 0 : $.svg),
                ...L,
                children: [v && Q.jsx("path", {
                    d: oe,
                    strokeWidth: m,
                    strokeLinecap: h,
                    fill: "none",
                    style: ce,
                    className: ye("circlebar-rail-path", [R === "neutral" || S !== "soft" ? ["stroke-gray-150", xe === "shadow-sm" ? "dark:stroke-dark-900" : "dark:stroke-dark-700"] : [Et(R), "stroke-this/[.15] dark:stroke-this-light/20"]])
                }), o ? Q.jsx("circle", {
                    cx: ne / 2,
                    cy: ne / 2,
                    r: "50",
                    fill: "none",
                    strokeWidth: m,
                    className: ye("circlebar-indeterminate", ge),
                    stroke: S === "gradient" ? `url(#${_})` : void 0
                }) : Q.jsxs(Q.Fragment, {
                    children: [Q.jsx("path", {
                        d: he,
                        strokeWidth: m,
                        strokeLinecap: h,
                        fill: "none",
                        style: {
                            ...se,
                            transitionProperty: "stroke-dasharray",
                            transitionDuration: "200ms"
                        },
                        className: ye("circlebar-inner-path ease-out", ge),
                        stroke: S === "gradient" ? `url(#${_})` : void 0
                    }), g && Q.jsx("path", {
                        d: he,
                        strokeWidth: m,
                        strokeLinecap: h,
                        fill: "none",
                        style: {
                            ...se,
                            "--dashoffset": `${l / 100 * (Math.PI * 100 - c)}px`,
                            transformOrigin: "center",
                            transform: `rotate(${c / 2 * 1.15}deg)`
                        },
                        className: "circlebar-active-path stroke-white"
                    })]
                }), S === "gradient" && Q.jsx("defs", {
                    children: Q.jsxs("linearGradient", {
                        id: _,
                        x1: "0%",
                        y1: "0%",
                        x2: "100%",
                        y2: "0%",
                        children: [Q.jsx("stop", {
                            offset: "0%",
                            style: {
                                stopColor: ee == null ? void 0 : ee.start,
                                stopOpacity: 1
                            }
                        }), Q.jsx("stop", {
                            offset: "100%",
                            style: {
                                stopColor: ee == null ? void 0 : ee.end,
                                stopOpacity: 1
                            }
                        })]
                    })
                })]
            }), w.Children.count(b) > 0 && Q.jsx("div", {
                className: ye("absolute inset-0 flex items-center justify-center", $ == null ? void 0 : $.content),
                ...D,
                children: b
            })]
        })
    })
}
);
c1.displayName = "Circlebar";
c1.propTypes = {
    value: x.number,
    children: x.node,
    isIndeterminate: x.bool,
    offsetDegree: x.number,
    gapDegree: x.number,
    gapOffsetDegree: x.number,
    strokeWidth: x.number,
    strokeLinecap: x.string,
    isActive: x.bool,
    size: x.number,
    showRail: x.bool,
    color: x.oneOf(la),
    variant: x.oneOf(["default", "soft", "gradient"]),
    contentProps: x.object,
    rootProps: x.object,
    wrapperProps: x.object,
    className: x.string,
    classNames: x.object
};
function _u({when: a, children: r, className: l}) {
    return a ? Q.jsx("span", {
        className: ye("input-text-error mt-1 text-xs text-error dark:text-error-lighter", l),
        children: r
    }) : null
}
_u.propTypes = {
    when: x.any,
    children: x.any,
    className: x.string
};
const f1 = w.forwardRef( (a, r) => {
    const {component: l, label: o, prefix: u, suffix: c, description: f, className: m, classNames: h, error: g, unstyled: p, disabled: v, type: b="text", rootProps: R, labelProps: S, id: D, ...O} = a
      , z = l || "input"
      , G = Cu(D, "input")
      , $ = ye("absolute top-0 flex h-full w-9 items-center justify-center transition-colors", g ? "text-error dark:text-error-light" : "text-gray-400 peer-focus:text-primary-600 dark:text-dark-300 dark:peer-focus:text-primary-500");
    return Q.jsxs("div", {
        className: ye("input-root", h == null ? void 0 : h.root),
        ...R,
        children: [o && Q.jsx("label", {
            htmlFor: G,
            className: ye("input-label", h == null ? void 0 : h.label),
            ...S,
            children: Q.jsx("span", {
                className: ye("input-label", h == null ? void 0 : h.labelText),
                children: o
            })
        }), Q.jsxs("div", {
            className: ye("input-wrapper relative", o && "mt-1.5", h == null ? void 0 : h.wrapper),
            children: [Q.jsx(z, {
                className: ye("form-input-base", c && "ltr:pr-9 rtl:pl-9", u && "ltr:pl-9 rtl:pr-9", !p && ["form-input", g ? "border-error dark:border-error-lighter" : [v ? "cursor-not-allowed border-gray-300 bg-gray-150 opacity-60 dark:border-dark-500 dark:bg-dark-600" : "peer border-gray-300 hover:border-gray-400 focus:border-primary-600 dark:border-dark-450 dark:hover:border-dark-400 dark:focus:border-primary-500"]], m, h == null ? void 0 : h.input),
                type: b,
                id: G,
                ref: r,
                disabled: v,
                ...O
            }), u && Q.jsx("div", {
                className: ye("prefix ltr:left-0 rtl:right-0", $, h == null ? void 0 : h.prefix),
                children: u
            }), c && Q.jsx("div", {
                className: ye("suffix ltr:right-0 rtl:left-0", $, h == null ? void 0 : h.suffix),
                children: c
            })]
        }), Q.jsx(_u, {
            when: g && typeof g != "boolean",
            className: h == null ? void 0 : h.error,
            children: g
        }), f && Q.jsx("span", {
            className: ye("input-description mt-1 text-xs text-gray-400 dark:text-dark-300", h == null ? void 0 : h.description),
            children: f
        })]
    })
}
);
f1.displayName = "Input";
f1.propTypes = {
    component: x.elementType,
    label: x.node,
    prefix: x.node,
    suffix: x.node,
    description: x.string,
    className: x.string,
    classNames: x.object,
    error: x.oneOfType([x.bool, x.node]),
    unstyled: x.bool,
    disabled: x.bool,
    type: x.string,
    rootProps: x.object,
    labelProps: x.object,
    id: x.string
};
function A4({title: a, titleId: r, ...l}, o) {
    return w.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: o,
        "aria-labelledby": r
    }, l), a ? w.createElement("title", {
        id: r
    }, a) : null, w.createElement("path", {
        fillRule: "evenodd",
        d: "M4.72 9.47a.75.75 0 0 0 0 1.06l4.25 4.25a.75.75 0 1 0 1.06-1.06L6.31 10l3.72-3.72a.75.75 0 1 0-1.06-1.06L4.72 9.47Zm9.25-4.25L9.72 9.47a.75.75 0 0 0 0 1.06l4.25 4.25a.75.75 0 1 0 1.06-1.06L11.31 10l3.72-3.72a.75.75 0 0 0-1.06-1.06Z",
        clipRule: "evenodd"
    }))
}
const D4 = w.forwardRef(A4);
function _4({title: a, titleId: r, ...l}, o) {
    return w.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: o,
        "aria-labelledby": r
    }, l), a ? w.createElement("title", {
        id: r
    }, a) : null, w.createElement("path", {
        fillRule: "evenodd",
        d: "M15.28 9.47a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L13.69 10 9.97 6.28a.75.75 0 0 1 1.06-1.06l4.25 4.25ZM6.03 5.22l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L8.69 10 4.97 6.28a.75.75 0 0 1 1.06-1.06Z",
        clipRule: "evenodd"
    }))
}
const M4 = w.forwardRef(_4);
function k4({title: a, titleId: r, ...l}, o) {
    return w.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: o,
        "aria-labelledby": r
    }, l), a ? w.createElement("title", {
        id: r
    }, a) : null, w.createElement("path", {
        fillRule: "evenodd",
        d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
        clipRule: "evenodd"
    }))
}
const L4 = w.forwardRef(k4);
function N4({title: a, titleId: r, ...l}, o) {
    return w.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: o,
        "aria-labelledby": r
    }, l), a ? w.createElement("title", {
        id: r
    }, a) : null, w.createElement("path", {
        fillRule: "evenodd",
        d: "M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z",
        clipRule: "evenodd"
    }))
}
const z4 = w.forwardRef(N4);
function j4({title: a, titleId: r, ...l}, o) {
    return w.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: o,
        "aria-labelledby": r
    }, l), a ? w.createElement("title", {
        id: r
    }, a) : null, w.createElement("path", {
        fillRule: "evenodd",
        d: "M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z",
        clipRule: "evenodd"
    }))
}
const U4 = w.forwardRef(j4);
var H4 = "Invariant failed";
function B4(a, r) {
    if (!a)
        throw new Error(H4)
}
function q4(a) {
    if (!(a instanceof HTMLElement))
        throw new TypeError("The input must be an HTMLElement.");
    let r = a.parentElement;
    for (; r && r !== document.documentElement; ) {
        const l = window.getComputedStyle(r).backgroundColor;
        if (l && l !== "rgba(0, 0, 0, 0)" && l !== "transparent")
            return l;
        r = r.parentElement
    }
    return null
}
const d1 = w.forwardRef( (a, r) => {
    const {label: l, prefix: o, suffix: u=Q.jsx(L4, {
        className: "w-2/3"
    }), description: c, classNames: f, className: m, error: h, multiple: g, unstyled: p, disabled: v, rootProps: b, labelProps: R, id: S, data: D=[], children: O, ...z} = a
      , G = Cu(S, "select")
      , $ = w.useRef(null)
      , ee = Du()
      , L = w.useMemo( () => D.map(ne => {
        const oe = typeof ne != "object" ? {
            label: ne,
            value: ne
        } : ne;
        return Q.jsx("option", {
            value: oe.value,
            disabled: oe.disabled,
            children: oe.label
        }, oe.value)
    }
    ), [D])
      , _ = ye("pointer-events-none absolute top-0 flex h-full w-9 items-center justify-center transition-colors", h ? "text-error dark:text-error-light" : "text-gray-400 peer-focus:text-primary-600 dark:text-dark-300 dark:peer-focus:text-primary-500");
    return w.useEffect( () => {
        const ne = $.current;
        B4(ne);
        const oe = q4(ne);
        ne.style.setProperty("--bg-color", oe)
    }
    , [ee]),
    Q.jsxs("div", {
        className: `input-root ${f == null ? void 0 : f.root}`,
        ...b,
        children: [l && Q.jsx("label", {
            htmlFor: G,
            className: `input-label ${f == null ? void 0 : f.label}`,
            ...R,
            children: Q.jsx("span", {
                className: `input-label ${f == null ? void 0 : f.labelText}`,
                children: l
            })
        }), Q.jsxs("div", {
            className: ye("input-wrapper relative", l && "mt-1.5", f == null ? void 0 : f.wrapper),
            children: [Q.jsx("select", {
                className: ye(g ? "form-multiselect" : "form-select-base", !p && [!g && "form-select", u && "ltr:pr-9 rtl:pl-9", o && "ltr:pl-9 rtl:pr-9", h ? "border-error dark:border-error-lighter" : [v ? "cursor-not-allowed border-gray-300 bg-gray-150 opacity-60 dark:border-dark-500 dark:bg-dark-600" : "peer border-gray-300 hover:border-gray-400 focus:border-primary-600 dark:border-dark-450 dark:hover:border-dark-400 dark:focus:border-primary-500"]], m, f == null ? void 0 : f.select),
                id: S,
                ref: Oi(r, $),
                disabled: v,
                "data-disabled": v,
                multiple: g,
                ...z,
                children: O || L
            }), !g && !p && o && Q.jsx("div", {
                className: ye("prefix ltr:left-0 rtl:right-0", _, f == null ? void 0 : f.prefix),
                children: o
            }), !g && !p && Q.jsx("div", {
                className: ye("suffix ltr:right-0 rtl:left-0", _, f == null ? void 0 : f.suffix),
                children: u
            })]
        }), Q.jsx(_u, {
            when: h && typeof h != "boolean",
            className: f == null ? void 0 : f.error,
            children: h
        }), c && Q.jsx("span", {
            className: ye("input-description mt-1 text-xs text-gray-400 dark:text-dark-300", f == null ? void 0 : f.description),
            children: c
        })]
    })
}
);
d1.displayName = "Select";
d1.propTypes = {
    component: x.elementType,
    label: x.node,
    prefix: x.node,
    suffix: x.node,
    description: x.string,
    children: x.node,
    className: x.string,
    classNames: x.object,
    error: x.oneOfType([x.bool, x.node]),
    unstyled: x.bool,
    disabled: x.bool,
    type: x.string,
    rootProps: x.object,
    labelProps: x.object,
    id: x.string,
    multiple: x.bool,
    data: x.array
};
const h1 = w.forwardRef( ({component: a, label: r, description: l, className: o, classNames: u, error: c, unstyled: f, disabled: m, rootProps: h, labelProps: g, id: p, ...v}, b) => {
    const R = a || "textarea"
      , S = Cu(p, "textarea");
    return Q.jsxs("div", {
        className: `input-root ${u == null ? void 0 : u.root}`,
        ...h,
        children: [r && Q.jsx("label", {
            htmlFor: S,
            className: `input-label ${u == null ? void 0 : u.label}`,
            ...g,
            children: Q.jsx("span", {
                className: `input-label ${u == null ? void 0 : u.labelText}`,
                children: r
            })
        }), Q.jsx("div", {
            className: ye("input-wrapper relative", r && "mt-1.5", u == null ? void 0 : u.wrapper),
            children: Q.jsx(R, {
                className: ye("form-textarea-base", !f && ["form-textarea", c ? "border-error dark:border-error-lighter" : [m ? "cursor-not-allowed border-gray-300 bg-gray-150 opacity-60 dark:border-dark-500 dark:bg-dark-600" : "peer border-gray-300 hover:border-gray-400 focus:border-primary-600 dark:border-dark-450 dark:hover:border-dark-400 dark:focus:border-primary-500"]], o, u == null ? void 0 : u.input),
                id: S,
                ref: b,
                disabled: m,
                ...v
            })
        }), Q.jsx(_u, {
            when: c && typeof c != "boolean",
            className: u == null ? void 0 : u.error,
            children: c
        }), l && Q.jsx("span", {
            className: ye("input-description mt-1 text-xs text-gray-400 dark:text-dark-300", u == null ? void 0 : u.description),
            children: l
        })]
    })
}
);
h1.displayName = "Textarea";
h1.propTypes = {
    component: x.elementType,
    label: x.node,
    description: x.oneOfType([x.string, x.node]),
    className: x.string,
    classNames: x.object,
    error: x.oneOfType([x.bool, x.node]),
    unstyled: x.bool,
    disabled: x.bool,
    rootProps: x.object,
    labelProps: x.object,
    id: x.string
};
const m1 = w.forwardRef( (a, r) => {
    const {className: l, color: o="neutral", thumbSize: u, trackSize: c, style: f, ...m} = a;
    return Q.jsx("input", {
        type: "range",
        className: ye("form-range", o === "neutral" ? "text-gray-500 dark:text-dark-300" : [Et(o), "text-this dark:text-this-light"], l),
        ref: r,
        style: {
            "--thumb-size": u,
            "--track-h:": c,
            ...f
        },
        ...m
    })
}
);
m1.displayName = "Range";
m1.propTypes = {
    className: x.string,
    color: x.oneOf(la),
    thumbSize: x.string,
    trackSize: x.string,
    style: x.object
};
function Mu({when: a, wrapper: r, children: l}) {
    return a ? r(l) : Q.jsx(Q.Fragment, {
        children: l
    })
}
Mu.propTypes = {
    when: x.bool,
    wrapper: x.func,
    children: x.node
};
const $4 = "before:[mask-image:var(--tw-thumb)] before:bg-gray-400 border-gray-150 bg-gray-150 pointer-events-none select-none opacity-70 dark:bg-dark-450 dark:border-dark-450 dark:before:bg-dark-800 dark:opacity-60"
  , V4 = {
    basic: "border-gray-400/70 bg-origin-border before:bg-center before:bg-no-repeat before:[background-size:100%_100%] before:[background-image:var(--tw-thumb)] checked:border-this checked:bg-this indeterminate:border-this indeterminate:bg-this hover:border-this focus:border-this dark:border-dark-400 dark:checked:border-this-light dark:checked:bg-this-light dark:indeterminate:border-this-light dark:indeterminate:bg-this-light dark:hover:border-this-light dark:focus:border-this-light",
    outlined: "border-gray-400/70 before:bg-this before:[mask-image:var(--tw-thumb)] checked:border-this hover:border-this focus:border-this dark:border-dark-400 dark:hover:border-this-light dark:focus:border-this-light dark:before:bg-this-light dark:checked:border-this-light"
}
  , g1 = w.forwardRef( (a, r) => {
    const {variant: l="basic", unstyled: o, color: u="primary", type: c="checkbox", className: f, classNames: m={}, label: h, disabled: g, indeterminate: p, labelProps: v, ...b} = a
      , R = w.useRef();
    return w.useEffect( () => {
        R.current && (R.current.indeterminate = p)
    }
    , [p]),
    Q.jsx(Mu, {
        when: !!h,
        wrapper: S => Q.jsxs("label", {
            className: ye("input-label inline-flex items-center gap-2", m == null ? void 0 : m.label),
            ...v,
            children: [S, Q.jsx("span", {
                className: ye("label", m == null ? void 0 : m.labelText),
                children: h
            })]
        }),
        children: Q.jsx("input", {
            className: ye("form-checkbox", !o && [Et(u), g ? $4 : V4[l]], f, m == null ? void 0 : m.input),
            disabled: g,
            "data-disabled": g,
            "data-indeterminate": p,
            ref: Oi(R, r),
            type: c,
            ...b
        })
    })
}
);
g1.displayName = "Checkbox";
g1.propTypes = {
    variant: x.oneOf(["outlined", "basic"]),
    unstyled: x.bool,
    color: x.oneOf(["primary", "secondary", "info", "success", "warning", "error"]),
    type: x.string,
    className: x.string,
    classNames: x.object,
    label: x.node,
    disabled: x.bool,
    indeterminate: x.bool,
    labelProps: x.object
};
const Y4 = "before:[mask-image:var(--tw-thumb)] before:bg-gray-400 border-gray-150 bg-gray-150 pointer-events-none select-none opacity-70 dark:bg-dark-450 dark:border-dark-450 dark:before:bg-dark-800 dark:opacity-60"
  , G4 = {
    basic: "border-gray-400/70 bg-origin-border before:bg-center before:bg-no-repeat before:[background-size:100%_100%] before:[background-image:var(--tw-thumb)] checked:border-this checked:bg-this hover:border-this focus:border-this dark:border-dark-400 dark:checked:border-this-light dark:checked:bg-this-light dark:hover:border-this-light dark:focus:border-this-light",
    outlined: "border-gray-400/70 before:bg-this before:[mask-image:var(--tw-thumb)] checked:border-this hover:border-this focus:border-this dark:border-dark-400 dark:hover:border-this-light dark:focus:border-this-light dark:before:bg-this-light dark:checked:border-this-light"
}
  , p1 = w.forwardRef( (a, r) => {
    const {variant: l="basic", unstyled: o, color: u="primary", className: c, classNames: f={}, type: m="radio", label: h, disabled: g, labelProps: p, ...v} = a;
    return Q.jsx(Mu, {
        when: !!h,
        wrapper: b => Q.jsxs("label", {
            className: ye("input-label inline-flex items-center gap-2", f == null ? void 0 : f.label),
            ...p,
            children: [b, Q.jsx("span", {
                className: ye("label", f == null ? void 0 : f.labelText),
                children: h
            })]
        }),
        children: Q.jsx("input", {
            className: ye("form-radio", !o && [Et(u), g ? Y4 : G4[l]], c, f == null ? void 0 : f.input),
            disabled: g,
            "data-disabled": g,
            type: m,
            ref: r,
            ...v
        })
    })
}
);
p1.displayName = "Radio";
p1.propTypes = {
    variant: x.oneOf(["outlined", "basic"]),
    unstyled: x.bool,
    color: x.oneOf(["primary", "secondary", "info", "success", "warning", "error"]),
    className: x.string,
    classNames: x.object,
    type: x.string,
    label: x.node,
    disabled: x.bool,
    labelProps: x.object
};
const P4 = "before:bg-gray-400 bg-gray-150 border border-gray-200 pointer-events-none select-none opacity-70 dark:bg-dark-450 dark:border-dark-450 dark:before:bg-dark-800 dark:opacity-60"
  , X4 = {
    basic: "bg-gray-300 before:bg-gray-50 checked:bg-this checked:before:bg-white dark:bg-surface-1 dark:before:bg-dark-50 dark:checked:bg-this-light dark:checked:before:bg-white focus-visible:ring-3 focus-visible:ring-this/50 dark:focus-visible:ring-this-light/50",
    outlined: "is-outline border-gray-400/70 border before:bg-gray-300 checked:border-this checked:before:bg-this dark:border-dark-400 dark:before:bg-dark-300 dark:checked:border-this-light dark:checked:before:bg-this-light focus-visible:ring-3 focus-visible:ring-this/50 dark:focus-visible:ring-this-light/50"
}
  , y1 = w.forwardRef( (a, r) => {
    const {variant: l="basic", unstyled: o, color: u="primary", className: c, classNames: f={}, label: m, role: h="switch", disabled: g, labelProps: p, ...v} = a;
    return Q.jsx(Mu, {
        when: !!m,
        wrapper: b => Q.jsxs("label", {
            className: ye("input-label inline-flex items-center gap-2", f == null ? void 0 : f.label),
            ...p,
            children: [b, Q.jsx("span", {
                className: ye("label", f.labelText),
                children: m
            })]
        }),
        children: Q.jsx("input", {
            className: ye("form-switch", !o && [Et(u), g ? P4 : X4[l]], c, f == null ? void 0 : f.input),
            disabled: g,
            type: "checkbox",
            role: h,
            ref: r,
            ...v
        })
    })
}
);
y1.displayName = "Switch";
y1.propTypes = {
    variant: x.oneOf(["outlined", "basic"]),
    unstyled: x.bool,
    color: x.oneOf(["primary", "secondary", "info", "success", "warning", "error"]),
    className: x.string,
    classNames: x.object,
    role: x.string,
    label: x.node,
    disabled: x.bool,
    labelProps: x.object
};
const v1 = w.forwardRef( (a, r) => {
    const {onChange: l= () => {}
    , children: o, multiple: u, accept: c, name: f, form: m, disabled: h, capture: g, inputProps: p, ...v} = a
      , b = w.useRef()
      , R = () => {
        !h && b.current.click()
    }
      , S = D => {
        l(u ? Array.from(D.currentTarget.files) : D.currentTarget.files[0] || null)
    }
    ;
    return Q.jsxs(Q.Fragment, {
        children: [o({
            onClick: R,
            disabled: h,
            ...v
        }), Q.jsx("input", {
            hidden: !0,
            type: "file",
            accept: c,
            multiple: u,
            onChange: S,
            ref: cE(r, b),
            name: f,
            form: m,
            capture: g,
            ...p
        })]
    })
}
);
v1.displayName = "Upload";
v1.propTypes = {
    onChange: x.func,
    children: x.func.isRequired,
    accept: x.string,
    multiple: x.bool,
    disabled: x.bool,
    capture: x.string,
    name: x.string,
    form: x.string,
    inputProps: x.object
};
function b1({currentVal: a}) {
    const r = w.forwardRef( (l, o) => {
        const {children: u, className: c, component: f, ...m} = l
          , h = f || "div";
        return Q.jsx(h, {
            [`data-swap-${a}`]: !0,
            ref: o,
            className: ye("z-10 col-start-1 row-start-1 fill-current transition-[transform,opacity] duration-300 ease-out", `swap-${a}`, c),
            ...m,
            children: u
        })
    }
    );
    return r.displayName = "Swap" + a,
    r.propTypes = {
        children: x.node,
        className: x.string,
        component: x.elementType
    },
    r
}
const tw = b1({
    currentVal: "on"
})
  , nw = b1({
    currentVal: "off"
})
  , S1 = w.forwardRef( (a, r) => {
    const {children: l, component: o, effect: u="fade", value: c, className: f, defaultValue: m, onChange: h, disabled: g, onClick: p, ...v} = a
      , b = o || "div"
      , [R,S] = Vy({
        value: c,
        defaultValue: m,
        finalValue: "on",
        onChange: h
    });
    return Q.jsx(b, {
        "data-swap-value": R,
        ref: r,
        disabled: g,
        "data-disabled": !0,
        "data-swap-effect": u,
        className: ye("swap relative inline-grid select-none place-content-center", u === "flip" && "swap-flip", u === "rotate" && "swap-rotate", R === "on" ? "swap-active **:data-swap-on:z-11" : "**:data-swap-off:z-11", g ? "cursor-not-allowed opacity-60" : "cursor-pointer", f),
        onClick: D => {
            !g && S(R === "on" ? "off" : "on"),
            p == null || p(D)
        }
        ,
        ...v,
        children: l
    })
}
);
S1.displayName = "Swap";
S1.propTypes = {
    value: x.oneOf(["on", "off"]),
    defaultValue: x.oneOf(["on", "off"]),
    onChange: x.func,
    disabled: x.bool,
    effect: x.oneOf(["fade", "flip", "rotate"]),
    children: x.node,
    onClick: x.func,
    className: x.string,
    component: x.elementType
};
const [Q4,E1] = ra("useAccordionItemContext must be used within AccordionItemProvider")
  , [Z4,ld] = ra("useAccordionContext must be used within AccordionProvider")
  , x1 = w.forwardRef( (a, r) => {
    const {children: l, className: o, value: u, ...c} = a
      , m = ld().isItemActive(u);
    return Q.jsx(Q4, {
        value: {
            value: u
        },
        children: Q.jsx(dr, {
            ref: r,
            "data-state": m ? "open" : null,
            className: typeof o == "function" ? o({
                open: m
            }) : o,
            ...c,
            children: typeof l == "function" ? l({
                open: m
            }) : l
        })
    })
}
);
x1.displayName = "AccordionItem";
x1.propTypes = {
    children: x.any,
    className: x.any,
    value: x.string
};
const w1 = w.forwardRef( (a, r) => {
    const {children: l, className: o, collapseProps: u, ...c} = a
      , f = ld()
      , {value: m} = E1()
      , h = f.isItemActive(m);
    return Q.jsx(od, {
        ...u,
        ref: r,
        in: f.isItemActive(m),
        transitionDuration: f.transitionDuration,
        role: "panel",
        id: `${f.panelId}-${m}`,
        "aria-labelledby": `${f.buttonId}-${m}`,
        children: Q.jsx("div", {
            className: typeof o == "function" ? o({
                open: h
            }) : o,
            ...c,
            children: typeof l == "function" ? l({
                open: h
            }) : l
        })
    })
}
);
w1.displayName = "AccordionPanel";
w1.propTypes = {
    children: x.node,
    className: x.string,
    collapseProps: x.object
};
function F4(a, r, l) {
    for (let o = a - 1; o >= 0; o -= 1)
        if (!r[o].disabled)
            return o;
    if (l) {
        for (let o = r.length - 1; o > -1; o -= 1)
            if (!r[o].disabled)
                return o
    }
    return a
}
function K4(a, r, l) {
    for (let o = a + 1; o < r.length; o += 1)
        if (!r[o].disabled)
            return o;
    if (l) {
        for (let o = 0; o < r.length; o += 1)
            if (!r[o].disabled)
                return o
    }
    return a
}
function $f(a, r) {
    let l = a;
    for (; (l = l.parentElement) && !l.matches(r); )
        ;
    return l
}
function J4(a, r, l) {
    return $f(a, l) === $f(r, l)
}
function I4({parentSelector: a, siblingSelector: r, onKeyDown: l, loop: o=!0, activateOnFocus: u=!1, dir: c=document.documentElement.dir, orientation: f}) {
    return m => {
        var b;
        l == null || l(m);
        const h = Array.from(((b = $f(m.currentTarget, a)) == null ? void 0 : b.querySelectorAll(r)) || []).filter(R => J4(m.currentTarget, R, a))
          , g = h.findIndex(R => m.currentTarget === R)
          , p = K4(g, h, o)
          , v = F4(g, h, o);
        switch (m.key) {
        case "ArrowRight":
            break;
        case "ArrowLeft":
            break;
        case "ArrowUp":
            {
                m.stopPropagation(),
                m.preventDefault(),
                h[v].focus(),
                u && h[v].click();
                break
            }
        case "ArrowDown":
            {
                m.stopPropagation(),
                m.preventDefault(),
                h[p].focus(),
                u && h[p].click();
                break
            }
        case "Home":
            {
                m.stopPropagation(),
                m.preventDefault(),
                !h[0].disabled && h[0].focus();
                break
            }
        case "End":
            {
                m.stopPropagation(),
                m.preventDefault();
                const R = h.length - 1;
                !h[R].disabled && h[R].focus();
                break
            }
        }
    }
}
const R1 = w.forwardRef( (a, r) => {
    const {children: l, disabled: o, onKeyDown: u, component: c, onClick: f, className: m, ...h} = a
      , g = c || "button"
      , p = ld()
      , {value: v} = E1()
      , b = p.isItemActive(v);
    return Q.jsx(g, {
        ...h,
        ref: r,
        "data-accordion-control": !0,
        disabled: o,
        className: typeof m == "function" ? m({
            open: b
        }) : m,
        onClick: R => {
            f == null || f(R),
            p.onChange(v)
        }
        ,
        type: "button",
        "aria-expanded": b,
        "aria-controls": `${p.panelId}-${v}`,
        id: `${p.buttonId}-${v}`,
        onKeyDown: I4({
            siblingSelector: "[data-accordion-control]",
            parentSelector: "[data-accordion]",
            activateOnFocus: !1,
            loop: p.loop,
            orientation: "vertical",
            onKeyDown: u
        }),
        children: typeof l == "function" ? l({
            open: b
        }) : l
    })
}
);
R1.displayName = "AccordionButton";
R1.propTypes = {
    className: x.any,
    children: x.any,
    disabled: x.bool,
    onKeyDown: x.func,
    component: x.elementType,
    onClick: x.func
};
const T1 = a => {
    const {children: r, multiple: l, value: o, defaultValue: u, onChange: c, id: f, transitionDuration: m, loop: h} = a
      , g = Cu(f, "accordion")
      , [p,v] = Vy({
        value: o,
        defaultValue: u,
        finalValue: l ? [] : null,
        onChange: c
    })
      , b = S => Array.isArray(p) ? p.includes(S) : S === p
      , R = S => {
        const D = Array.isArray(p) ? p.includes(S) ? p.filter(O => O !== S) : [...p, S] : S === p ? null : S;
        v(D)
    }
    ;
    return Q.jsx(Z4, {
        value: {
            isItemActive: b,
            onChange: R,
            buttonId: `${g}-control`,
            panelId: `${g}-panel`,
            transitionDuration: m,
            loop: h
        },
        children: r
    })
}
;
T1.propTypes = {
    children: x.node,
    multiple: x.bool,
    value: x.any,
    defaultValue: x.any,
    onChange: x.func,
    id: x.string,
    transitionDuration: x.number,
    loop: x.bool
};
const O1 = w.forwardRef( (a, r) => {
    const {id: l, children: o, multiple: u=!1, value: c, defaultValue: f, onChange: m, transitionDuration: h, loop: g, ...p} = a;
    return Q.jsx(T1, {
        id: l,
        multiple: u,
        value: c,
        defaultValue: f,
        onChange: m,
        transitionDuration: h,
        loop: g,
        children: Q.jsx(dr, {
            ...p,
            "data-accordion": !0,
            ref: r,
            children: o
        })
    })
}
);
O1.propTypes = {
    id: x.string,
    children: x.node,
    multiple: x.bool,
    value: x.any,
    defaultValue: x.any,
    onChange: x.func,
    transitionDuration: x.number,
    loop: x.bool,
    className: x.string
};
O1.displayName = "Accordion";
var nu = {
    exports: {}
}, W4 = nu.exports, wp;
function ex() {
    return wp || (wp = 1,
    function(a, r) {
        (function(l, o) {
            a.exports = o()
        }
        )(W4, function() {
            return function(l, o, u) {
                l = l || {};
                var c = o.prototype
                  , f = {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                };
                function m(g, p, v, b) {
                    return c.fromToBase(g, p, v, b)
                }
                u.en.relativeTime = f,
                c.fromToBase = function(g, p, v, b, R) {
                    for (var S, D, O, z = v.$locale().relativeTime || f, G = l.thresholds || [{
                        l: "s",
                        r: 44,
                        d: "second"
                    }, {
                        l: "m",
                        r: 89
                    }, {
                        l: "mm",
                        r: 44,
                        d: "minute"
                    }, {
                        l: "h",
                        r: 89
                    }, {
                        l: "hh",
                        r: 21,
                        d: "hour"
                    }, {
                        l: "d",
                        r: 35
                    }, {
                        l: "dd",
                        r: 25,
                        d: "day"
                    }, {
                        l: "M",
                        r: 45
                    }, {
                        l: "MM",
                        r: 10,
                        d: "month"
                    }, {
                        l: "y",
                        r: 17
                    }, {
                        l: "yy",
                        d: "year"
                    }], $ = G.length, ee = 0; ee < $; ee += 1) {
                        var L = G[ee];
                        L.d && (S = b ? u(g).diff(v, L.d, !0) : v.diff(g, L.d, !0));
                        var _ = (l.rounding || Math.round)(Math.abs(S));
                        if (O = S > 0,
                        _ <= L.r || !L.r) {
                            _ <= 1 && ee > 0 && (L = G[ee - 1]);
                            var ne = z[L.l];
                            R && (_ = R("" + _)),
                            D = typeof ne == "string" ? ne.replace("%d", _) : ne(_, p, L.l, O);
                            break
                        }
                    }
                    if (p)
                        return D;
                    var oe = O ? z.future : z.past;
                    return typeof oe == "function" ? oe(D) : oe.replace("%s", D)
                }
                ,
                c.to = function(g, p) {
                    return m(g, p, this, !0)
                }
                ,
                c.from = function(g, p) {
                    return m(g, p, this)
                }
                ;
                var h = function(g) {
                    return g.$u ? u.utc() : u()
                };
                c.toNow = function(g) {
                    return this.to(h(this), g)
                }
                ,
                c.fromNow = function(g) {
                    return this.from(h(this), g)
                }
            }
        })
    }(nu)),
    nu.exports
}
var tx = ex();
const nx = na(tx);
ra("useTimelineContext must be used within TimelineProvider");
$y.extend(nx);
x.node,
x.string,
x.oneOfType([x.string, x.number]),
x.node,
x.oneOf(la),
x.oneOf(["filled", "outlined"]),
x.string,
x.object,
x.bool;
x.string,
x.string,
x.string,
x.object,
x.string,
x.node,
x.oneOf(["filled", "outlined"]);
const [aw,C1] = ra("Pagination component was not found in tree");
x.number,
x.number,
x.number,
x.func,
x.bool,
x.func,
x.string,
x.object,
x.number,
x.number,
x.node,
x.func,
x.func,
x.func,
x.func;
const id = w.forwardRef( (a, r) => {
    var p;
    const l = C1()
      , {component: o, active: u, className: c, disabled: f, children: m, ...h} = a
      , g = o || "button";
    return Q.jsx(g, {
        ...h,
        disabled: f,
        "data-active": u || void 0,
        "data-disabled": f || void 0,
        ref: r,
        className: ye("pagination-control cursor-pointer", [u ? "active this:primary bg-this text-white disabled:cursor-not-allowed disabled:bg-this-light disabled:opacity-60 dark:bg-this-light dark:disabled:bg-this-darker" : [f ? "disabled:cursor-not-allowed disabled:opacity-60" : "hover:bg-gray-300 focus-visible:bg-gray-300 active:bg-gray-300/80 dark:hover:bg-surface-1 dark:focus-visible:bg-surface-1 dark:active:bg-surface-1/90"]], (p = l.classNames) == null ? void 0 : p.control, c),
        children: m
    })
}
);
id.propTypes = {
    component: x.elementType,
    active: x.bool,
    disabled: x.bool,
    className: x.string,
    children: x.node
};
id.displayName = "PaginationControl";
function ku({icon: a, type: r, action: l}) {
    const o = w.forwardRef( ({Icon: u=a, ...c}, f) => {
        var g, p;
        const m = C1()
          , h = r === "next" ? m.active === m.total : m.active === 1;
        return Q.jsx(id, {
            disabled: m.disabled || h,
            ref: f,
            onClick: m[l],
            className: ye("pagination-control-icon", (g = m.classNames) == null ? void 0 : g.controlIcon),
            ...c,
            children: Q.jsx(u, {
                className: ye("pagination-icon rtl:rotate-180", (p = m.classNames) == null ? void 0 : p.icon)
            })
        })
    }
    );
    return o.displayName = "Pagination" + r,
    o.propTypes = {
        Icon: x.elementType
    },
    o
}
ku({
    icon: U4,
    type: "next",
    action: "onNext"
});
ku({
    icon: z4,
    type: "previous",
    action: "onPrevious"
});
ku({
    icon: D4,
    type: "previous",
    action: "onFirst"
});
ku({
    icon: M4,
    type: "next",
    action: "onLast"
});
x.elementType;
const A1 = w.forwardRef( (a, r) => {
    const {children: l, component: o, className: u, hoverable: c, zebra: f, dense: m, sticky: h, ...g} = a
      , p = o || "table";
    return Q.jsx(p, {
        className: ye("table", c && "is-hoverable", f && "is-zebra", m && "is-dense", h && "is-sticky", u),
        ref: r,
        ...g,
        children: l
    })
}
);
A1.displayName = "Table";
A1.propTypes = {
    component: x.elementType,
    children: x.node,
    className: x.string,
    hoverable: x.bool,
    zebra: x.bool,
    dense: x.bool,
    sticky: x.bool
};
function ul({className: a, component: r}) {
    const l = w.forwardRef( (o, u) => {
        const {component: c, className: f, children: m, ...h} = o
          , g = c || r;
        return Q.jsx(g, {
            className: ye(a, f),
            ref: u,
            ...h,
            children: m
        })
    }
    );
    return l.displayName = r,
    l.propTypes = {
        component: x.elementType,
        className: x.string,
        children: x.node
    },
    l
}
ul({
    className: "table-tbody group/tbody",
    component: "tbody"
});
ul({
    className: "table-thead group/thead",
    component: "thead"
});
ul({
    className: "table-tfoot group/tfoot",
    component: "tfoot"
});
ul({
    className: "table-tr group/tr",
    component: "tr"
});
ul({
    className: "table-th group/th",
    component: "th"
});
ul({
    className: "table-td group/td",
    component: "td"
});
const od = w.forwardRef( (a, r) => {
    const {children: l, in: o, transitionDuration: u, transitionTimingFunction: c, min: f, style: m, onTransitionEnd: h, ...g} = a
      , p = uE({
        opened: o,
        transitionDuration: u,
        transitionTimingFunction: c,
        min: f,
        onTransitionEnd: h
    });
    return u === 0 ? o ? Q.jsx(dr, {
        ...g,
        children: l
    }) : null : Q.jsx(dr, {
        ...p({
            style: m,
            ref: r,
            ...g
        }),
        children: l
    })
}
);
od.displayName = "Collapse";
od.propTypes = {
    children: x.node,
    in: x.bool,
    transitionDuration: x.number,
    transitionTimingFunction: x.string,
    style: x.object,
    onTransitionEnd: x.func,
    min: x.string
};
x.func.isRequired,
x.string.isRequired,
x.number;
const D1 = w.forwardRef( (a, r) => {
    const {component: l, children: o, className: u, size: c=10, offset: f=0, isEnabled: m=!0, orientation: h="vertical", style: g, ...p} = a
      , v = l || "div"
      , {ref: b} = SE({
        offset: f,
        isEnabled: m,
        overflowCheck: h
    });
    return Q.jsx(v, {
        ref: Oi(b, r),
        "data-orientation": h,
        className: ye(h === "vertical" && "overflow-y-auto", h === "horizontal" && "overflow-x-auto", h === "both" && "overflow-auto", u),
        style: {
            "--scroll-shadow-size": `${c / 4}rem`,
            ...g
        },
        ...p,
        children: o
    })
}
);
D1.propTypes = {
    component: x.elementType,
    children: x.node,
    className: x.string,
    size: x.number,
    offset: x.number,
    isEnabled: x.bool,
    orientation: x.oneOf(["vertical", "horizontal", "both"]),
    style: x.object
};
D1.displayName = "ScrollShadow";
function _1() {
    return Q.jsx(Q.Fragment, {
        children: Q.jsxs("div", {
            className: "fixed grid h-full w-full place-content-center",
            children: [Q.jsx(g4, {
                className: "size-28"
            }), Q.jsx(rd, {
                color: "primary",
                isIndeterminate: !0,
                animationDuration: "1s",
                className: "mt-2 h-1"
            })]
        })
    })
}
function mu() {
    return mu = Object.assign ? Object.assign.bind() : function(a) {
        for (var r = 1; r < arguments.length; r++) {
            var l = arguments[r];
            for (var o in l)
                ({}).hasOwnProperty.call(l, o) && (a[o] = l[o])
        }
        return a
    }
    ,
    mu.apply(null, arguments)
}
var Tf = {
    exports: {}
}
  , Qe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rp;
function ax() {
    if (Rp)
        return Qe;
    Rp = 1;
    var a = typeof Symbol == "function" && Symbol.for
      , r = a ? Symbol.for("react.element") : 60103
      , l = a ? Symbol.for("react.portal") : 60106
      , o = a ? Symbol.for("react.fragment") : 60107
      , u = a ? Symbol.for("react.strict_mode") : 60108
      , c = a ? Symbol.for("react.profiler") : 60114
      , f = a ? Symbol.for("react.provider") : 60109
      , m = a ? Symbol.for("react.context") : 60110
      , h = a ? Symbol.for("react.async_mode") : 60111
      , g = a ? Symbol.for("react.concurrent_mode") : 60111
      , p = a ? Symbol.for("react.forward_ref") : 60112
      , v = a ? Symbol.for("react.suspense") : 60113
      , b = a ? Symbol.for("react.suspense_list") : 60120
      , R = a ? Symbol.for("react.memo") : 60115
      , S = a ? Symbol.for("react.lazy") : 60116
      , D = a ? Symbol.for("react.block") : 60121
      , O = a ? Symbol.for("react.fundamental") : 60117
      , z = a ? Symbol.for("react.responder") : 60118
      , G = a ? Symbol.for("react.scope") : 60119;
    function $(L) {
        if (typeof L == "object" && L !== null) {
            var _ = L.$$typeof;
            switch (_) {
            case r:
                switch (L = L.type,
                L) {
                case h:
                case g:
                case o:
                case c:
                case u:
                case v:
                    return L;
                default:
                    switch (L = L && L.$$typeof,
                    L) {
                    case m:
                    case p:
                    case S:
                    case R:
                    case f:
                        return L;
                    default:
                        return _
                    }
                }
            case l:
                return _
            }
        }
    }
    function ee(L) {
        return $(L) === g
    }
    return Qe.AsyncMode = h,
    Qe.ConcurrentMode = g,
    Qe.ContextConsumer = m,
    Qe.ContextProvider = f,
    Qe.Element = r,
    Qe.ForwardRef = p,
    Qe.Fragment = o,
    Qe.Lazy = S,
    Qe.Memo = R,
    Qe.Portal = l,
    Qe.Profiler = c,
    Qe.StrictMode = u,
    Qe.Suspense = v,
    Qe.isAsyncMode = function(L) {
        return ee(L) || $(L) === h
    }
    ,
    Qe.isConcurrentMode = ee,
    Qe.isContextConsumer = function(L) {
        return $(L) === m
    }
    ,
    Qe.isContextProvider = function(L) {
        return $(L) === f
    }
    ,
    Qe.isElement = function(L) {
        return typeof L == "object" && L !== null && L.$$typeof === r
    }
    ,
    Qe.isForwardRef = function(L) {
        return $(L) === p
    }
    ,
    Qe.isFragment = function(L) {
        return $(L) === o
    }
    ,
    Qe.isLazy = function(L) {
        return $(L) === S
    }
    ,
    Qe.isMemo = function(L) {
        return $(L) === R
    }
    ,
    Qe.isPortal = function(L) {
        return $(L) === l
    }
    ,
    Qe.isProfiler = function(L) {
        return $(L) === c
    }
    ,
    Qe.isStrictMode = function(L) {
        return $(L) === u
    }
    ,
    Qe.isSuspense = function(L) {
        return $(L) === v
    }
    ,
    Qe.isValidElementType = function(L) {
        return typeof L == "string" || typeof L == "function" || L === o || L === g || L === c || L === u || L === v || L === b || typeof L == "object" && L !== null && (L.$$typeof === S || L.$$typeof === R || L.$$typeof === f || L.$$typeof === m || L.$$typeof === p || L.$$typeof === O || L.$$typeof === z || L.$$typeof === G || L.$$typeof === D)
    }
    ,
    Qe.typeOf = $,
    Qe
}
var Tp;
function rx() {
    return Tp || (Tp = 1,
    Tf.exports = ax()),
    Tf.exports
}
var Of, Op;
function lx() {
    if (Op)
        return Of;
    Op = 1;
    var a = rx()
      , r = {
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
      , l = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0
    }
      , o = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
    }
      , u = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0
    }
      , c = {};
    c[a.ForwardRef] = o,
    c[a.Memo] = u;
    function f(S) {
        return a.isMemo(S) ? u : c[S.$$typeof] || r
    }
    var m = Object.defineProperty
      , h = Object.getOwnPropertyNames
      , g = Object.getOwnPropertySymbols
      , p = Object.getOwnPropertyDescriptor
      , v = Object.getPrototypeOf
      , b = Object.prototype;
    function R(S, D, O) {
        if (typeof D != "string") {
            if (b) {
                var z = v(D);
                z && z !== b && R(S, z, O)
            }
            var G = h(D);
            g && (G = G.concat(g(D)));
            for (var $ = f(S), ee = f(D), L = 0; L < G.length; ++L) {
                var _ = G[L];
                if (!l[_] && !(O && O[_]) && !(ee && ee[_]) && !($ && $[_])) {
                    var ne = p(D, _);
                    try {
                        m(S, _, ne)
                    } catch {}
                }
            }
        }
        return S
    }
    return Of = R,
    Of
}
lx();
var M1 = function(r, l, o) {
    return r = r <= o ? r : o,
    r = r >= l ? r : l,
    r
}
  , ix = function() {
    var r = !1
      , l = []
      , o = function() {
        r = !0;
        var m = l.shift();
        if (m)
            return m(o);
        r = !1
    }
      , u = function() {
        r = !1,
        l = []
    }
      , c = function(m) {
        l.push(m),
        !r && l.length === 1 && o()
    };
    return {
        clear: u,
        enqueue: c
    }
}
  , ox = function() {
    var r, l = function() {
        r && window.cancelAnimationFrame(r)
    }, o = function(c, f) {
        var m, h, g = function(v) {
            if (h = h || v,
            m = v - h,
            m > f) {
                c();
                return
            }
            r = window.requestAnimationFrame(g)
        };
        r = window.requestAnimationFrame(g)
    };
    return {
        cancel: l,
        schedule: o
    }
}
  , ux = function(r) {
    var l = 0;
    return r >= 0 && r < .2 ? l = .1 : r >= .2 && r < .5 ? l = .04 : r >= .5 && r < .8 ? l = .02 : r >= .8 && r < .99 && (l = .005),
    M1(r + l, 0, .994)
}
  , Cp = function(r) {
    w.useEffect(r, [])
}
  , sx = function(r) {
    return ++r % 1e6
}
  , cx = function() {
    var r = w.useState(0)
      , l = r[1];
    return w.useCallback(function() {
        return l(sx)
    }, [])
}
  , fx = function(r) {
    r === void 0 && (r = {});
    var l = cx()
      , o = w.useRef(mu({}, r))
      , u = w.useCallback(function() {
        return o.current
    }, [])
      , c = w.useCallback(function(f) {
        f && (Object.assign(o.current, f),
        l())
    }, []);
    return [u, c]
}
  , dx = function() {
    var r = w.useRef(!0);
    return r.current ? (r.current = !1,
    !0) : r.current
}
  , Ap = function(r, l) {
    var o = dx();
    w.useEffect(function() {
        if (!o)
            return r()
    }, l)
}
  , k1 = function() {}
  , Dp = {
    isFinished: !0,
    progress: 0,
    sideEffect: k1
}
  , hx = function(r) {
    var l = r === void 0 ? {} : r
      , o = l.animationDuration
      , u = o === void 0 ? 200 : o
      , c = l.incrementDuration
      , f = c === void 0 ? 800 : c
      , m = l.isAnimating
      , h = m === void 0 ? !1 : m
      , g = l.minimum
      , p = g === void 0 ? .08 : g
      , v = fx(Dp)
      , b = v[0]
      , R = v[1]
      , S = w.useRef(null)
      , D = w.useRef(null);
    Cp(function() {
        S.current = ix(),
        D.current = ox()
    });
    var O = w.useCallback(function() {
        var _, ne;
        (_ = D.current) == null || _.cancel(),
        (ne = S.current) == null || ne.clear()
    }, [])
      , z = w.useCallback(function(_) {
        var ne;
        if (_ = M1(_, p, 1),
        _ === 1) {
            var oe, ce;
            O(),
            (oe = S.current) == null || oe.enqueue(function(he) {
                R({
                    progress: _,
                    sideEffect: function() {
                        var xe;
                        return (xe = D.current) == null ? void 0 : xe.schedule(he, u)
                    }
                })
            }),
            (ce = S.current) == null || ce.enqueue(function() {
                R({
                    isFinished: !0,
                    sideEffect: O
                })
            });
            return
        }
        (ne = S.current) == null || ne.enqueue(function(he) {
            R({
                isFinished: !1,
                progress: _,
                sideEffect: function() {
                    var xe;
                    return (xe = D.current) == null ? void 0 : xe.schedule(he, u)
                }
            })
        })
    }, [u, O, p, S, R, D])
      , G = w.useCallback(function() {
        z(ux(b().progress))
    }, [b, z])
      , $ = w.useCallback(function() {
        var _ = function() {
            var oe;
            G(),
            (oe = S.current) == null || oe.enqueue(function(ce) {
                var he;
                (he = D.current) == null || he.schedule(function() {
                    _(),
                    ce()
                }, f)
            })
        };
        _()
    }, [f, S, D, G])
      , ee = w.useRef(k1)
      , L = b().sideEffect;
    return w.useEffect(function() {
        ee.current = G
    }),
    Cp(function() {
        return h && $(),
        O
    }),
    Ap(function() {
        b().sideEffect()
    }, [b, L]),
    Ap(function() {
        h ? R(mu({}, Dp, {
            sideEffect: $
        })) : z(1)
    }, [h, z, R, $]),
    {
        animationDuration: u,
        isFinished: b().isFinished,
        progress: b().progress
    }
};
function ud({isAnimating: a}) {
    const {primaryColorScheme: r, isDark: l} = Du()
      , {animationDuration: o, isFinished: u, progress: c} = hx({
        isAnimating: a
    });
    return Q.jsx("div", {
        className: "pointer-events-none fixed left-0 top-0 h-0.5 w-full",
        style: {
            zIndex: 9999
        },
        children: !u && Q.jsx("div", {
            className: "relative h-full",
            style: {
                backgroundColor: l ? r[500] : r[600],
                width: `${c * 100}%`,
                transition: `width ${o}ms ease-out`
            },
            children: Q.jsx("div", {
                className: "absolute right-0 h-full opacity-100",
                style: {
                    boxShadow: `0 0 10px ${l ? r[500] : r[600]}, 0 0 5px ${l ? r[500] : r[600]}`,
                    transform: "rotate(3deg) translate(0px, -4px)",
                    width: 100
                }
            })
        })
    })
}
ud.displayName = "NProgress";
ud.propTypes = {
    isAnimating: x.bool
};
function mx() {
    const a = Jp()
      , r = a.state === "loading" && a.formData == null && !!a.location.pathname;
    return Q.jsx(ud, {
        isAnimating: r
    })
}
const Lu = (a, r) => l => Q.jsx(w.Suspense, {
    fallback: r,
    children: Q.jsx(a, {
        ...l
    })
})
  , gx = Lu(w.lazy( () => nt( () => import("./Toaster-VELc-NX0.js"), [])))
  , px = Lu(w.lazy( () => nt( () => import("./index-D-9IHg7i.js"), __vite__mapDeps([0, 1, 2]))))
  , yx = Lu(w.lazy( () => nt( () => import("./Tooltip-D8I5Z6qe.js"), __vite__mapDeps([3, 2]))));
function vx() {
    const {isInitialized: a} = K3();
    return a ? Q.jsxs(Q.Fragment, {
        children: [Q.jsx(mx, {}), Q.jsx(iy, {}), Q.jsx(yS, {}), Q.jsx(yx, {}), Q.jsx(gx, {}), Q.jsx(px, {})]
    }) : Q.jsx(_1, {})
}
const bx = {
    401: w.lazy( () => nt( () => import("./401-D-u3Aum7.js"), __vite__mapDeps([4, 5, 6]))),
    404: w.lazy( () => nt( () => import("./404-DdjC9tTJ.js"), __vite__mapDeps([7, 8, 6, 9]))),
    429: w.lazy( () => nt( () => import("./429-gS3bXv3a.js"), __vite__mapDeps([10, 11, 6]))),
    500: w.lazy( () => nt( () => import("./500-Cl7_J8lS.js"), __vite__mapDeps([12, 13, 6])))
};
function Sx() {
    const a = Wp();
    if (rl(a)) {
        const r = Lu(bx[a.status]);
        return Q.jsx(r, {})
    }
    return Q.jsx("div", {
        children: "Something went wrong"
    })
}
const Ex = {
    path: "/",
    lazy: async () => ({
        Component: (await nt(async () => {
            const {default: a} = await import("./index-DMJvIFvQ.js");
            return {
                default: a
            }
        }
        , __vite__mapDeps([14, 6, 1, 2]))).default
    })
}
  , xx = {
    id: "public",
    children: [{
        path: "prototypes",
        children: [{
            path: "errors",
            children: [{
                path: "404-v1",
                lazy: async () => ({
                    Component: (await nt(async () => {
                        const {default: a} = await import("./v1-DJtbwrZ9.js");
                        return {
                            default: a
                        }
                    }
                    , __vite__mapDeps([15, 6, 9]))).default
                })
            }, {
                path: "404-v2",
                lazy: async () => ({
                    Component: (await nt(async () => {
                        const {default: a} = await import("./v2-CKR_heBl.js");
                        return {
                            default: a
                        }
                    }
                    , __vite__mapDeps([16, 6, 9]))).default
                })
            }, {
                path: "404-v3",
                lazy: async () => ({
                    Component: (await nt(async () => {
                        const {default: a} = await import("./v3-DA2islz6.js");
                        return {
                            default: a
                        }
                    }
                    , __vite__mapDeps([17, 8, 6, 9]))).default
                })
            }, {
                path: "401",
                lazy: async () => ({
                    Component: (await nt(async () => {
                        const {default: a} = await import("./401-DQVvkjRm.js");
                        return {
                            default: a
                        }
                    }
                    , __vite__mapDeps([18, 5, 6]))).default
                })
            }, {
                path: "429",
                lazy: async () => ({
                    Component: (await nt(async () => {
                        const {default: a} = await import("./429-Dco1yMXa.js");
                        return {
                            default: a
                        }
                    }
                    , __vite__mapDeps([19, 11, 6]))).default
                })
            }, {
                path: "500",
                lazy: async () => ({
                    Component: (await nt(async () => {
                        const {default: a} = await import("./500-D1_Tk7r0.js");
                        return {
                            default: a
                        }
                    }
                    , __vite__mapDeps([20, 13, 6]))).default
                })
            }]
        }]
    }]
}
  , wx = VS([{
    id: "root",
    Component: vx,
    hydrateFallbackElement: Q.jsx(_1, {}),
    ErrorBoundary: Sx,
    children: [Ex, xx]
}], {
    basename: "/chat"
});
function Rx() {
    return Q.jsx(Hy, {
        children: Q.jsx(e1, {
            children: Q.jsx(Iy, {
                children: Q.jsx(By, {
                    children: Q.jsx(Wy, {
                        children: Q.jsx(mS, {
                            router: wx
                        })
                    })
                })
            })
        })
    })
}
Zb.createRoot(document.getElementById("root")).render(Q.jsx(_p.StrictMode, {
    children: Q.jsx(Rx, {})
}));
export {n1 as A, r1 as B, o1 as C, gt as D, S1 as E, L4 as F, tw as G, nw as H, f1 as I, Vf as J, Tx as K, ly as L, Xg as M, ew as N, Pt as O, x as P, Wx as Q, _p as R, D1 as S, Px as a, w as b, ye as c, su as d, iE as e, al as f, na as g, Xx as h, Qx as i, Q as j, Kx as k, Fx as l, Zx as m, Yy as n, Ix as o, ra as p, tE as q, rE as r, Ox as s, I4 as t, Du as u, l1 as v, z4 as w, u1 as x, C4 as y, dr as z};
