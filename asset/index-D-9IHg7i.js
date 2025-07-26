import {b as o, R as f, j as a, c as M, I as sr, F as ir, P as N, e as dr, B as Be, u as ur, S as cr, f as J} from "./index-7qjuY_ZX.js";
import {s as je, o as R, i as ke, f as mr, I as Ce, a as Y, n as fe, b as ye, c as we, d as Ge, t as ae, e as Ne, g as fr, K as H, y as X, l as He, h as de, u as ue, j as Q, T as L, p as pr, L as _, k as gr, m as G, q as Ue, r as _e, v as ce, H as We, F as me, w as qe, z as Ee, x as ie, A as hr, B as vr, C as xr, S as br, D as kr, E as yr, G as wr, J as $e, M as jr, N as Ie, O as Cr, P as Nr, Q as Oe, V as K, R as Er, U as Ye, W as $r, X as Fr, $ as Ke, Y as Ze, _ as Qe, Z as Rr, a0 as Xe, a1 as Sr, a2 as Tr, a3 as Pr, a4 as Dr, a5 as Je, a6 as Lr, a7 as Ir, a8 as Or, a9 as zr, aa as Mr} from "./listbox-DyEPdIwU.js";
import "./floating-ui.dom-nLN9p6gL.js";
function Ar({title: r, titleId: e, ...t}, n) {
    return o.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: n,
        "aria-labelledby": e
    }, t), r ? o.createElement("title", {
        id: e
    }, r) : null, o.createElement("path", {
        fillRule: "evenodd",
        d: "M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",
        clipRule: "evenodd"
    }))
}
const Br = o.forwardRef(Ar);
function be(r, e, t=1) {
    if (typeof e != "number" || typeof t != "number")
        throw new TypeError("Start, end, and step must be numbers.");
    const n = [];
    for (let l = r; t > 0 ? l <= e : l >= e; l += t)
        n.push(l);
    return n
}
let Gr = o.createContext( () => {}
);
function Hr({value: r, children: e}) {
    return f.createElement(Gr.Provider, {
        value: r
    }, e)
}
function Ve(r, e, t, n) {
    let l = je(t);
    o.useEffect( () => {
        r = r ?? window;
        function d(u) {
            l.current(u)
        }
        return r.addEventListener(e, d, n),
        () => r.removeEventListener(e, d, n)
    }
    , [r, e, n])
}
function Fe(r, e) {
    let t = o.useRef([])
      , n = R(r);
    o.useEffect( () => {
        let l = [...t.current];
        for (let[d,u] of e.entries())
            if (t.current[d] !== u) {
                let i = n(e, l);
                return t.current = e,
                i
            }
    }
    , [n, ...e])
}
function Ur(r) {
    function e() {
        document.readyState !== "loading" && (r(),
        document.removeEventListener("DOMContentLoaded", e))
    }
    typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", e),
    e())
}
let U = [];
Ur( () => {
    function r(e) {
        if (!ke(e.target) || e.target === document.body || U[0] === e.target)
            return;
        let t = e.target;
        t = t.closest(mr),
        U.unshift(t ?? e.target),
        U = U.filter(n => n != null && n.isConnected),
        U.splice(10)
    }
    window.addEventListener("click", r, {
        capture: !0
    }),
    window.addEventListener("mousedown", r, {
        capture: !0
    }),
    window.addEventListener("focus", r, {
        capture: !0
    }),
    document.body.addEventListener("click", r, {
        capture: !0
    }),
    document.body.addEventListener("mousedown", r, {
        capture: !0
    }),
    document.body.addEventListener("focus", r, {
        capture: !0
    })
}
);
function _r(r, e=typeof document < "u" ? document.defaultView : null, t) {
    let n = Ce(r, "escape");
    Ve(e, "keydown", l => {
        n && (l.defaultPrevented || l.key === Y.Escape && t(l))
    }
    )
}
function Wr() {
    var r;
    let[e] = o.useState( () => typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null)
      , [t,n] = o.useState((r = e == null ? void 0 : e.matches) != null ? r : !1);
    return fe( () => {
        if (!e)
            return;
        function l(d) {
            n(d.matches)
        }
        return e.addEventListener("change", l),
        () => e.removeEventListener("change", l)
    }
    , [e]),
    t
}
function qr({defaultContainers: r=[], portals: e, mainTreeNode: t}={}) {
    let n = Ne(t)
      , l = R( () => {
        var d, u;
        let i = [];
        for (let s of r)
            s !== null && (ae(s) ? i.push(s) : "current"in s && ae(s.current) && i.push(s.current));
        if (e != null && e.current)
            for (let s of e.current)
                i.push(s);
        for (let s of (d = n == null ? void 0 : n.querySelectorAll("html > *, body > *")) != null ? d : [])
            s !== document.body && s !== document.head && ae(s) && s.id !== "headlessui-portal-root" && (t && (s.contains(t) || s.contains((u = t == null ? void 0 : t.getRootNode()) == null ? void 0 : u.host)) || i.some(c => s.contains(c)) || i.push(s));
        return i
    }
    );
    return {
        resolveContainers: l,
        contains: R(d => l().some(u => u.contains(d)))
    }
}
let er = o.createContext(null);
function ze({children: r, node: e}) {
    let[t,n] = o.useState(null)
      , l = rr(e ?? t);
    return f.createElement(er.Provider, {
        value: l
    }, r, l === null && f.createElement(ye, {
        features: we.Hidden,
        ref: d => {
            var u, i;
            if (d) {
                for (let s of (i = (u = Ge(d)) == null ? void 0 : u.querySelectorAll("html > *, body > *")) != null ? i : [])
                    if (s !== document.body && s !== document.head && ae(s) && s != null && s.contains(d)) {
                        n(s);
                        break
                    }
            }
        }
    }))
}
function rr(r=null) {
    var e;
    return (e = o.useContext(er)) != null ? e : r
}
var re = (r => (r[r.Forwards = 0] = "Forwards",
r[r.Backwards = 1] = "Backwards",
r))(re || {});
function Yr() {
    let r = o.useRef(0);
    return fr(!0, "keydown", e => {
        e.key === "Tab" && (r.current = e.shiftKey ? 1 : 0)
    }
    , !0),
    r
}
function tr(r) {
    if (!r)
        return new Set;
    if (typeof r == "function")
        return new Set(r());
    let e = new Set;
    for (let t of r.current)
        ae(t.current) && e.add(t.current);
    return e
}
let Kr = "div";
var Z = (r => (r[r.None = 0] = "None",
r[r.InitialFocus = 1] = "InitialFocus",
r[r.TabLock = 2] = "TabLock",
r[r.FocusLock = 4] = "FocusLock",
r[r.RestoreFocus = 8] = "RestoreFocus",
r[r.AutoFocus = 16] = "AutoFocus",
r))(Z || {});
function Zr(r, e) {
    let t = o.useRef(null)
      , n = X(t, e)
      , {initialFocus: l, initialFocusFallback: d, containers: u, features: i=15, ...s} = r;
    He() || (i = 0);
    let c = Ne(t);
    Vr(i, {
        ownerDocument: c
    });
    let m = et(i, {
        ownerDocument: c,
        container: t,
        initialFocus: l,
        initialFocusFallback: d
    });
    rt(i, {
        ownerDocument: c,
        container: t,
        containers: u,
        previousActiveElement: m
    });
    let b = Yr()
      , E = R(k => {
        if (!de(t.current))
            return;
        let S = t.current;
        (y => y())( () => {
            ue(b.current, {
                [re.Forwards]: () => {
                    Q(S, L.First, {
                        skipElements: [k.relatedTarget, d]
                    })
                }
                ,
                [re.Backwards]: () => {
                    Q(S, L.Last, {
                        skipElements: [k.relatedTarget, d]
                    })
                }
            })
        }
        )
    }
    )
      , g = Ce(!!(i & 2), "focus-trap#tab-lock")
      , h = pr()
      , j = o.useRef(!1)
      , w = {
        ref: n,
        onKeyDown(k) {
            k.key == "Tab" && (j.current = !0,
            h.requestAnimationFrame( () => {
                j.current = !1
            }
            ))
        },
        onBlur(k) {
            if (!(i & 4))
                return;
            let S = tr(u);
            de(t.current) && S.add(t.current);
            let y = k.relatedTarget;
            ke(y) && y.dataset.headlessuiFocusGuard !== "true" && (ar(S, y) || (j.current ? Q(t.current, ue(b.current, {
                [re.Forwards]: () => L.Next,
                [re.Backwards]: () => L.Previous
            }) | L.WrapAround, {
                relativeTo: k.target
            }) : ke(k.target) && G(k.target)))
        }
    }
      , p = _();
    return f.createElement(f.Fragment, null, g && f.createElement(ye, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: E,
        features: we.Focusable
    }), p({
        ourProps: w,
        theirProps: s,
        defaultTag: Kr,
        name: "FocusTrap"
    }), g && f.createElement(ye, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: E,
        features: we.Focusable
    }))
}
let Qr = H(Zr)
  , Xr = Object.assign(Qr, {
    features: Z
});
function Jr(r=!0) {
    let e = o.useRef(U.slice());
    return Fe( ([t], [n]) => {
        n === !0 && t === !1 && _e( () => {
            e.current.splice(0)
        }
        ),
        n === !1 && t === !0 && (e.current = U.slice())
    }
    , [r, U, e]),
    R( () => {
        var t;
        return (t = e.current.find(n => n != null && n.isConnected)) != null ? t : null
    }
    )
}
function Vr(r, {ownerDocument: e}) {
    let t = !!(r & 8)
      , n = Jr(t);
    Fe( () => {
        t || (e == null ? void 0 : e.activeElement) === (e == null ? void 0 : e.body) && G(n())
    }
    , [t]),
    gr( () => {
        t && G(n())
    }
    )
}
function et(r, {ownerDocument: e, container: t, initialFocus: n, initialFocusFallback: l}) {
    let d = o.useRef(null)
      , u = Ce(!!(r & 1), "focus-trap#initial-focus")
      , i = Ue();
    return Fe( () => {
        if (r === 0)
            return;
        if (!u) {
            l != null && l.current && G(l.current);
            return
        }
        let s = t.current;
        s && _e( () => {
            if (!i.current)
                return;
            let c = e == null ? void 0 : e.activeElement;
            if (n != null && n.current) {
                if ((n == null ? void 0 : n.current) === c) {
                    d.current = c;
                    return
                }
            } else if (s.contains(c)) {
                d.current = c;
                return
            }
            if (n != null && n.current)
                G(n.current);
            else {
                if (r & 16) {
                    if (Q(s, L.First | L.AutoFocus) !== ce.Error)
                        return
                } else if (Q(s, L.First) !== ce.Error)
                    return;
                if (l != null && l.current && (G(l.current),
                (e == null ? void 0 : e.activeElement) === l.current))
                    return;
                console.warn("There are no focusable elements inside the <FocusTrap />")
            }
            d.current = e == null ? void 0 : e.activeElement
        }
        )
    }
    , [l, u, r]),
    d
}
function rt(r, {ownerDocument: e, container: t, containers: n, previousActiveElement: l}) {
    let d = Ue()
      , u = !!(r & 4);
    Ve(e == null ? void 0 : e.defaultView, "focus", i => {
        if (!u || !d.current)
            return;
        let s = tr(n);
        de(t.current) && s.add(t.current);
        let c = l.current;
        if (!c)
            return;
        let m = i.target;
        de(m) ? ar(s, m) ? (l.current = m,
        G(m)) : (i.preventDefault(),
        i.stopPropagation(),
        G(c)) : G(l.current)
    }
    , !0)
}
function ar(r, e) {
    for (let t of r)
        if (t.contains(e))
            return !0;
    return !1
}
var tt = (r => (r[r.Open = 0] = "Open",
r[r.Closed = 1] = "Closed",
r))(tt || {})
  , at = (r => (r[r.SetTitleId = 0] = "SetTitleId",
r))(at || {});
let nt = {
    0(r, e) {
        return r.titleId === e.id ? r : {
            ...r,
            titleId: e.id
        }
    }
}
  , Re = o.createContext(null);
Re.displayName = "DialogContext";
function pe(r) {
    let e = o.useContext(Re);
    if (e === null) {
        let t = new Error(`<${r} /> is missing a parent <Dialog /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(t, pe),
        t
    }
    return e
}
function lt(r, e) {
    return ue(e.type, nt, r, e)
}
let Me = H(function(r, e) {
    let t = o.useId()
      , {id: n=`headlessui-dialog-${t}`, open: l, onClose: d, initialFocus: u, role: i="dialog", autoFocus: s=!0, __demoMode: c=!1, unmount: m=!1, ...b} = r
      , E = o.useRef(!1);
    i = function() {
        return i === "dialog" || i === "alertdialog" ? i : (E.current || (E.current = !0,
        console.warn(`Invalid role [${i}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),
        "dialog")
    }();
    let g = qe();
    l === void 0 && g !== null && (l = (g & ie.Open) === ie.Open);
    let h = o.useRef(null)
      , j = X(h, e)
      , w = Ne(h)
      , p = l ? 0 : 1
      , [k,S] = o.useReducer(lt, {
        titleId: null,
        descriptionId: null,
        panelRef: o.createRef()
    })
      , y = R( () => d(!1))
      , A = R(v => S({
        type: 0,
        id: v
    }))
      , T = He() ? p === 0 : !1
      , [W,$] = hr()
      , F = {
        get current() {
            var v;
            return (v = k.panelRef.current) != null ? v : h.current
        }
    }
      , z = rr()
      , {resolveContainers: I} = qr({
        mainTreeNode: z,
        portals: W,
        defaultContainers: [F]
    })
      , O = g !== null ? (g & ie.Closing) === ie.Closing : !1;
    vr(c || O ? !1 : T, {
        allowed: R( () => {
            var v, P;
            return [(P = (v = h.current) == null ? void 0 : v.closest("[data-headlessui-portal]")) != null ? P : null]
        }
        ),
        disallowed: R( () => {
            var v;
            return [(v = z == null ? void 0 : z.closest("body > *:not(#headlessui-portal-root)")) != null ? v : null]
        }
        )
    });
    let C = xr.get(null);
    fe( () => {
        if (T)
            return C.actions.push(n),
            () => C.actions.pop(n)
    }
    , [C, n, T]);
    let ne = br(C, o.useCallback(v => C.selectors.isTop(v, n), [C, n]));
    kr(ne, I, v => {
        v.preventDefault(),
        y()
    }
    ),
    _r(ne, w == null ? void 0 : w.defaultView, v => {
        v.preventDefault(),
        v.stopPropagation(),
        document.activeElement && "blur"in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(),
        y()
    }
    ),
    yr(c || O ? !1 : T, w, I),
    wr(T, h, y);
    let[le,ge] = $e()
      , he = o.useMemo( () => [{
        dialogState: p,
        close: y,
        setTitleId: A,
        unmount: m
    }, k], [p, k, y, A, m])
      , oe = o.useMemo( () => ({
        open: p === 0
    }), [p])
      , ve = {
        ref: j,
        id: n,
        role: i,
        tabIndex: -1,
        "aria-modal": c ? void 0 : p === 0 ? !0 : void 0,
        "aria-labelledby": k.titleId,
        "aria-describedby": le,
        unmount: m
    }
      , xe = !Wr()
      , q = Z.None;
    T && !c && (q |= Z.RestoreFocus,
    q |= Z.TabLock,
    s && (q |= Z.AutoFocus),
    xe && (q |= Z.InitialFocus));
    let x = _();
    return f.createElement(jr, null, f.createElement(Ie, {
        force: !0
    }, f.createElement(Cr, null, f.createElement(Re.Provider, {
        value: he
    }, f.createElement(Nr, {
        target: h
    }, f.createElement(Ie, {
        force: !1
    }, f.createElement(ge, {
        slot: oe
    }, f.createElement($, null, f.createElement(Xr, {
        initialFocus: u,
        initialFocusFallback: h,
        containers: I,
        features: q
    }, f.createElement(Hr, {
        value: y
    }, x({
        ourProps: ve,
        theirProps: b,
        slot: oe,
        defaultTag: ot,
        features: st,
        visible: p === 0,
        name: "Dialog"
    })))))))))))
})
  , ot = "div"
  , st = Oe.RenderStrategy | Oe.Static;
function it(r, e) {
    let {transition: t=!1, open: n, ...l} = r
      , d = qe()
      , u = r.hasOwnProperty("open") || d !== null
      , i = r.hasOwnProperty("onClose");
    if (!u && !i)
        throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
    if (!u)
        throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
    if (!i)
        throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
    if (!d && typeof r.open != "boolean")
        throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${r.open}`);
    if (typeof r.onClose != "function")
        throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${r.onClose}`);
    return (n !== void 0 || t) && !l.static ? f.createElement(ze, null, f.createElement(Ee, {
        show: n,
        transition: t,
        unmount: l.unmount
    }, f.createElement(Me, {
        ref: e,
        ...l
    }))) : f.createElement(ze, null, f.createElement(Me, {
        ref: e,
        open: n,
        ...l
    }))
}
let dt = "div";
function ut(r, e) {
    let t = o.useId()
      , {id: n=`headlessui-dialog-panel-${t}`, transition: l=!1, ...d} = r
      , [{dialogState: u, unmount: i},s] = pe("Dialog.Panel")
      , c = X(e, s.panelRef)
      , m = o.useMemo( () => ({
        open: u === 0
    }), [u])
      , b = R(w => {
        w.stopPropagation()
    }
    )
      , E = {
        ref: c,
        id: n,
        onClick: b
    }
      , g = l ? me : o.Fragment
      , h = l ? {
        unmount: i
    } : {}
      , j = _();
    return f.createElement(g, {
        ...h
    }, j({
        ourProps: E,
        theirProps: d,
        slot: m,
        defaultTag: dt,
        name: "Dialog.Panel"
    }))
}
let ct = "div";
function mt(r, e) {
    let {transition: t=!1, ...n} = r
      , [{dialogState: l, unmount: d}] = pe("Dialog.Backdrop")
      , u = o.useMemo( () => ({
        open: l === 0
    }), [l])
      , i = {
        ref: e,
        "aria-hidden": !0
    }
      , s = t ? me : o.Fragment
      , c = t ? {
        unmount: d
    } : {}
      , m = _();
    return f.createElement(s, {
        ...c
    }, m({
        ourProps: i,
        theirProps: n,
        slot: u,
        defaultTag: ct,
        name: "Dialog.Backdrop"
    }))
}
let ft = "h2";
function pt(r, e) {
    let t = o.useId()
      , {id: n=`headlessui-dialog-title-${t}`, ...l} = r
      , [{dialogState: d, setTitleId: u}] = pe("Dialog.Title")
      , i = X(e);
    o.useEffect( () => (u(n),
    () => u(null)), [n, u]);
    let s = o.useMemo( () => ({
        open: d === 0
    }), [d])
      , c = {
        ref: i,
        id: n
    };
    return _()({
        ourProps: c,
        theirProps: l,
        slot: s,
        defaultTag: ft,
        name: "Dialog.Title"
    })
}
let gt = H(it)
  , nr = H(ut);
H(mt);
let ht = H(pt)
  , vt = Object.assign(gt, {
    Panel: nr,
    Title: ht,
    Description: We
});
var xt = (r => (r[r.RegisterOption = 0] = "RegisterOption",
r[r.UnregisterOption = 1] = "UnregisterOption",
r))(xt || {});
let bt = {
    0(r, e) {
        let t = [...r.options, {
            id: e.id,
            element: e.element,
            propsRef: e.propsRef
        }];
        return {
            ...r,
            options: Lr(t, n => n.element.current)
        }
    },
    1(r, e) {
        let t = r.options.slice()
          , n = r.options.findIndex(l => l.id === e.id);
        return n === -1 ? r : (t.splice(n, 1),
        {
            ...r,
            options: t
        })
    }
}
  , Se = o.createContext(null);
Se.displayName = "RadioGroupDataContext";
function Te(r) {
    let e = o.useContext(Se);
    if (e === null) {
        let t = new Error(`<${r} /> is missing a parent <RadioGroup /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(t, Te),
        t
    }
    return e
}
let Pe = o.createContext(null);
Pe.displayName = "RadioGroupActionsContext";
function De(r) {
    let e = o.useContext(Pe);
    if (e === null) {
        let t = new Error(`<${r} /> is missing a parent <RadioGroup /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(t, De),
        t
    }
    return e
}
function kt(r, e) {
    return ue(e.type, bt, r, e)
}
let yt = "div";
function wt(r, e) {
    let t = o.useId()
      , n = Ye()
      , {id: l=`headlessui-radiogroup-${t}`, value: d, form: u, name: i, onChange: s, by: c, disabled: m=n || !1, defaultValue: b, tabIndex: E=0, ...g} = r
      , h = Rr(c)
      , [j,w] = o.useReducer(kt, {
        options: []
    })
      , p = j.options
      , [k,S] = Xe()
      , [y,A] = $e()
      , T = o.useRef(null)
      , W = X(T, e)
      , $ = Sr(b)
      , [F,z] = Tr(d, s, $)
      , I = o.useMemo( () => p.find(x => !x.propsRef.current.disabled), [p])
      , O = o.useMemo( () => p.some(x => h(x.propsRef.current.value, F)), [p, F])
      , C = R(x => {
        var v;
        if (m || h(x, F))
            return !1;
        let P = (v = p.find(se => h(se.propsRef.current.value, x))) == null ? void 0 : v.propsRef.current;
        return P != null && P.disabled ? !1 : (z == null || z(x),
        !0)
    }
    )
      , ne = R(x => {
        let v = T.current;
        if (!v)
            return;
        let P = Ge(v)
          , se = p.filter(D => D.propsRef.current.disabled === !1).map(D => D.element.current);
        switch (x.key) {
        case Y.Enter:
            Pr(x.currentTarget);
            break;
        case Y.ArrowLeft:
        case Y.ArrowUp:
            if (x.preventDefault(),
            x.stopPropagation(),
            Q(se, L.Previous | L.WrapAround) === ce.Success) {
                let D = p.find(V => V.element.current === (P == null ? void 0 : P.activeElement));
                D && C(D.propsRef.current.value)
            }
            break;
        case Y.ArrowRight:
        case Y.ArrowDown:
            if (x.preventDefault(),
            x.stopPropagation(),
            Q(se, L.Next | L.WrapAround) === ce.Success) {
                let D = p.find(V => V.element.current === (P == null ? void 0 : P.activeElement));
                D && C(D.propsRef.current.value)
            }
            break;
        case Y.Space:
            {
                x.preventDefault(),
                x.stopPropagation();
                let D = p.find(V => V.element.current === (P == null ? void 0 : P.activeElement));
                D && C(D.propsRef.current.value)
            }
            break
        }
    }
    )
      , le = R(x => (w({
        type: 0,
        ...x
    }),
    () => w({
        type: 1,
        id: x.id
    })))
      , ge = o.useMemo( () => ({
        value: F,
        firstOption: I,
        containsCheckedOption: O,
        disabled: m,
        compare: h,
        tabIndex: E,
        ...j
    }), [F, I, O, m, h, E, j])
      , he = o.useMemo( () => ({
        registerOption: le,
        change: C
    }), [le, C])
      , oe = {
        ref: W,
        id: l,
        role: "radiogroup",
        "aria-labelledby": k,
        "aria-describedby": y,
        onKeyDown: ne
    }
      , ve = o.useMemo( () => ({
        value: F
    }), [F])
      , xe = o.useCallback( () => {
        if ($ !== void 0)
            return C($)
    }
    , [C, $])
      , q = _();
    return f.createElement(A, {
        name: "RadioGroup.Description"
    }, f.createElement(S, {
        name: "RadioGroup.Label"
    }, f.createElement(Pe.Provider, {
        value: he
    }, f.createElement(Se.Provider, {
        value: ge
    }, i != null && f.createElement(Dr, {
        disabled: m,
        data: {
            [i]: F || "on"
        },
        overrides: {
            type: "radio",
            checked: F != null
        },
        form: u,
        onReset: xe
    }), q({
        ourProps: oe,
        theirProps: g,
        slot: ve,
        defaultTag: yt,
        name: "RadioGroup"
    })))))
}
let jt = "div";
function Ct(r, e) {
    var t;
    let n = Te("RadioGroup.Option")
      , l = De("RadioGroup.Option")
      , d = o.useId()
      , {id: u=`headlessui-radiogroup-option-${d}`, value: i, disabled: s=n.disabled || !1, autoFocus: c=!1, ...m} = r
      , b = o.useRef(null)
      , E = X(b, e)
      , [g,h] = Xe()
      , [j,w] = $e()
      , p = je({
        value: i,
        disabled: s
    });
    fe( () => l.registerOption({
        id: u,
        element: b,
        propsRef: p
    }), [u, l, b, p]);
    let k = R(O => {
        var C;
        if (Je(O.currentTarget))
            return O.preventDefault();
        l.change(i) && ((C = b.current) == null || C.focus())
    }
    )
      , S = ((t = n.firstOption) == null ? void 0 : t.id) === u
      , {isFocusVisible: y, focusProps: A} = Ke({
        autoFocus: c
    })
      , {isHovered: T, hoverProps: W} = Ze({
        isDisabled: s
    })
      , $ = n.compare(n.value, i)
      , F = Qe({
        ref: E,
        id: u,
        role: "radio",
        "aria-checked": $ ? "true" : "false",
        "aria-labelledby": g,
        "aria-describedby": j,
        "aria-disabled": s ? !0 : void 0,
        tabIndex: s ? -1 : $ || !n.containsCheckedOption && S ? n.tabIndex : -1,
        onClick: s ? void 0 : k,
        autoFocus: c
    }, A, W)
      , z = o.useMemo( () => ({
        checked: $,
        disabled: s,
        active: y,
        hover: T,
        focus: y,
        autofocus: c
    }), [$, s, T, y, c])
      , I = _();
    return f.createElement(w, {
        name: "RadioGroup.Description"
    }, f.createElement(h, {
        name: "RadioGroup.Label"
    }, I({
        ourProps: F,
        theirProps: m,
        slot: z,
        defaultTag: jt,
        name: "RadioGroup.Option"
    })))
}
let Nt = "span";
function Et(r, e) {
    var t;
    let n = Te("Radio")
      , l = De("Radio")
      , d = o.useId()
      , u = Er()
      , i = Ye()
      , {id: s=u || `headlessui-radio-${d}`, value: c, disabled: m=n.disabled || i || !1, autoFocus: b=!1, ...E} = r
      , g = o.useRef(null)
      , h = X(g, e)
      , j = $r()
      , w = Fr()
      , p = je({
        value: c,
        disabled: m
    });
    fe( () => l.registerOption({
        id: s,
        element: g,
        propsRef: p
    }), [s, l, g, p]);
    let k = R(I => {
        var O;
        if (Je(I.currentTarget))
            return I.preventDefault();
        l.change(c) && ((O = g.current) == null || O.focus())
    }
    )
      , {isFocusVisible: S, focusProps: y} = Ke({
        autoFocus: b
    })
      , {isHovered: A, hoverProps: T} = Ze({
        isDisabled: m
    })
      , W = ((t = n.firstOption) == null ? void 0 : t.id) === s
      , $ = n.compare(n.value, c)
      , F = Qe({
        ref: h,
        id: s,
        role: "radio",
        "aria-checked": $ ? "true" : "false",
        "aria-labelledby": j,
        "aria-describedby": w,
        "aria-disabled": m ? !0 : void 0,
        tabIndex: m ? -1 : $ || !n.containsCheckedOption && W ? n.tabIndex : -1,
        autoFocus: b,
        onClick: m ? void 0 : k
    }, y, T)
      , z = o.useMemo( () => ({
        checked: $,
        disabled: m,
        hover: A,
        focus: S,
        autofocus: b
    }), [$, m, A, S, b]);
    return _()({
        ourProps: F,
        theirProps: E,
        slot: z,
        defaultTag: Nt,
        name: "Radio"
    })
}
let $t = H(wt)
  , Ft = H(Ct)
  , B = H(Et)
  , Rt = K
  , St = We
  , ee = Object.assign($t, {
    Option: Ft,
    Radio: B,
    Label: Rt,
    Description: St
});
function Tt({title: r, titleId: e, ...t}, n) {
    return o.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: n,
        "aria-labelledby": e
    }, t), r ? o.createElement("title", {
        id: e
    }, r) : null, o.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6 18 18 6M6 6l12 12"
    }))
}
const Pt = o.forwardRef(Tt)
  , lr = r => o.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...r
}, o.createElement("path", {
    fillOpacity: .3,
    fill: "currentColor",
    d: "M2 12.947v-1.771c0-1.047.85-1.913 1.899-1.913 1.81 0 2.549-1.288 1.64-2.868a1.919 1.919 0 0 1 .699-2.607l1.729-.996c.79-.474 1.81-.192 2.279.603l.11.192c.9 1.58 2.379 1.58 3.288 0l.11-.192c.47-.795 1.49-1.077 2.279-.603l1.73.996a1.92 1.92 0 0 1 .699 2.607c-.91 1.58-.17 2.868 1.639 2.868 1.04 0 1.899.856 1.899 1.912v1.772c0 1.047-.85 1.912-1.9 1.912-1.808 0-2.548 1.288-1.638 2.869.52.915.21 2.083-.7 2.606l-1.729.997c-.79.473-1.81.191-2.279-.604l-.11-.191c-.9-1.58-2.379-1.58-3.288 0l-.11.19c-.47.796-1.49 1.078-2.279.605l-1.73-.997a1.919 1.919 0 0 1-.699-2.606c.91-1.58.17-2.869-1.639-2.869A1.911 1.911 0 0 1 2 12.947Z"
}), o.createElement("path", {
    fill: "currentColor",
    d: "M11.995 15.332c1.794 0 3.248-1.464 3.248-3.27 0-1.807-1.454-3.272-3.248-3.272-1.794 0-3.248 1.465-3.248 3.271 0 1.807 1.454 3.271 3.248 3.271Z"
}))
  , Le = o.forwardRef( ({data: r, placeholder: e, label: t, displayField: n="label", error: l, multiple: d, inputProps: u, rootProps: i, className: s, classNames: c, ...m}, b) => a.jsx("div", {
    className: M("flex flex-col [&_.suffix]:pointer-events-none", c == null ? void 0 : c.root),
    ...i,
    children: a.jsx(Ir, {
        as: "div",
        multiple: d,
        className: c == null ? void 0 : c.listbox,
        ref: b,
        ...m,
        children: ({open: E, value: g}) => a.jsxs(a.Fragment, {
            children: [t && a.jsx(K, {
                children: t
            }), a.jsxs("div", {
                className: M("relative", t && "mt-1.5"),
                children: [a.jsx(Or, {
                    as: sr,
                    component: "button",
                    type: "button",
                    error: l,
                    suffix: a.jsx(ir, {
                        className: M("size-5 transition-transform", E && "rotate-180")
                    }),
                    ...u,
                    children: a.jsxs("span", {
                        className: "block truncate",
                        children: [a.jsx("span", {
                            className: "text-gray-600 dark:text-dark-200",
                            children: !(g != null && g[d ? "length" : n]) && e
                        }), a.jsx("span", {
                            children: d ? g.map(h => h[n]).join(", ") : g == null ? void 0 : g[n]
                        })]
                    })
                }), a.jsx(Ee, {
                    as: o.Fragment,
                    enter: "transition ease-out",
                    enterFrom: "opacity-0 translate-y-2",
                    enterTo: "opacity-100 translate-y-0",
                    leave: "transition ease-in",
                    leaveFrom: "opacity-100 translate-y-0",
                    leaveTo: "opacity-0 translate-y-2",
                    children: a.jsx(zr, {
                        anchor: {
                            to: "bottom end",
                            gap: 8
                        },
                        className: "absolute z-100 max-h-60 w-(--button-width) overflow-auto rounded-lg border border-gray-300 bg-white py-1 shadow-lg shadow-gray-200/50 outline-hidden focus-visible:outline-hidden dark:border-dark-500 dark:bg-dark-750 dark:shadow-none",
                        children: r.map( (h, j) => a.jsx(Mr, {
                            className: ({selected: w, focus: p}) => M("relative cursor-pointer select-none py-2 pl-4 pr-10 outline-hidden transition-colors rtl:pl-10 rtl:pr-4", p && !w && "bg-gray-100 dark:bg-dark-600", w ? "bg-primary-600 text-white dark:bg-primary-500" : "text-gray-800 dark:text-dark-100"),
                            value: h,
                            children: ({selected: w}) => a.jsxs(a.Fragment, {
                                children: [a.jsx("span", {
                                    className: "block truncate",
                                    children: h[n]
                                }), w ? a.jsx("span", {
                                    className: "absolute inset-y-0 flex items-center ltr:right-0 ltr:pr-3 rtl:left-0 rtl:pl-3",
                                    children: a.jsx(Br, {
                                        className: "size-5",
                                        "aria-hidden": "true"
                                    })
                                }) : null]
                            })
                        }, j))
                    })
                })]
            })]
        })
    })
}));
Le.displayName = "Listbox";
Le.propTypes = {
    data: N.array,
    placeholder: N.node,
    label: N.node,
    displayField: N.string,
    error: N.oneOfType([N.bool, N.node]),
    multiple: N.bool,
    inputProps: N.object,
    rootProps: N.object,
    classNames: N.object,
    className: N.string
};
const Dt = ["slate", "gray", "neutral"]
  , Lt = ["mint", "navy", "mirage", "cinder", "black"]
  , It = ["indigo", "blue", "green", "amber", "purple", "rose"]
  , Ae = [{
    value: "shadow-sm",
    label: "Shadow"
}, {
    value: "bordered",
    label: "Bordered"
}];
function At() {
    const [r,{open: e, close: t}] = dr();
    return a.jsxs(a.Fragment, {
        children: [a.jsx(Be, {
            onClick: e,
            color: "primary",
            isIcon: !0,
            className: "fixed top-1/2 z-50 size-9 rounded-full ltr:right-0 ltr:rounded-r-none rtl:left-0 rtl:rounded-l-none",
            children: a.jsx(lr, {
                className: "size-6 animate-spin",
                style: {
                    animationDuration: "2s"
                }
            })
        }), a.jsx(Ee, {
            show: r,
            children: a.jsxs(vt, {
                open: !0,
                onClose: t,
                static: !0,
                autoFocus: !0,
                children: [a.jsx(me, {
                    as: "div",
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    className: "fixed inset-0 z-60 bg-gray-900/50 transition-opacity dark:bg-black/40"
                }), a.jsx(me, {
                    as: nr,
                    enter: "ease-out transform-gpu transition-transform duration-200",
                    enterFrom: "translate-x-full",
                    enterTo: "translate-x-0",
                    leave: "ease-in transform-gpu transition-transform duration-200",
                    leaveFrom: "translate-x-0",
                    leaveTo: "translate-x-full",
                    className: "fixed inset-y-0 right-0 z-61 flex w-screen transform-gpu flex-col bg-white transition-transform duration-200 dark:bg-dark-750/80 backdrop-blur-sm sm:inset-y-2 sm:mx-2 sm:w-80 sm:rounded-xl",
                    children: a.jsx(or, {
                        close: t
                    })
                })]
            })
        })]
    })
}
function or({close: r}) {
    const e = ur();
    return a.jsxs(a.Fragment, {
        children: [a.jsxs("div", {
            className: "flex items-center justify-between px-3 py-2",
            children: [a.jsxs("div", {
                className: "flex shrink-0 items-center gap-1.5",
                children: [a.jsx(lr, {
                    className: "size-5"
                }), a.jsx("span", {
                    children: "Theme Customizer"
                })]
            }), a.jsx(Be, {
                onClick: r,
                variant: "flat",
                isIcon: !0,
                className: "size-6 rounded-full ltr:-mr-1 rtl:-ml-1",
                children: a.jsx(Pt, {
                    className: "size-4"
                })
            })]
        }), a.jsxs(cr, {
            size: 4,
            className: "custom-scrollbar h-auto overflow-y-auto overscroll-contain px-3 pb-5",
            children: [a.jsxs(ee, {
                value: e.themeMode,
                onChange: e.setThemeMode,
                className: "mt-1",
                children: [a.jsx(K, {
                    className: "font-medium text-gray-800 dark:text-dark-100",
                    children: "Theme Mode"
                }), a.jsxs("div", {
                    className: "mt-2.5 grid grid-cols-3 gap-2.5",
                    children: [a.jsx(B, {
                        value: "system",
                        className: "cursor-pointer outline-hidden",
                        children: ({checked: t}) => a.jsxs(a.Fragment, {
                            children: [a.jsxs("div", {
                                className: M("relative overflow-hidden rounded-lg border-2 bg-dark-900 dark:border-transparent", t && "ring-2 ring-primary-600 ring-offset-2 ring-offset-white transition-all dark:ring-primary-500 dark:ring-offset-dark-700"),
                                children: [a.jsxs("div", {
                                    style: {
                                        clipPath: "polygon(50% 50%, 100% 0, 0 0, 0% 100%)",
                                        backgroundColor: e.lightColorScheme[200]
                                    },
                                    className: "w-full space-y-2 p-1 ",
                                    children: [a.jsxs("div", {
                                        className: "w-full space-y-2 rounded-sm p-1 shadow-xs",
                                        style: {
                                            backgroundColor: "#fff"
                                        },
                                        children: [a.jsx("div", {
                                            className: "h-1 w-9/12 rounded-lg",
                                            style: {
                                                backgroundColor: e.lightColorScheme[400]
                                            }
                                        }), a.jsx("div", {
                                            className: "h-1 w-11/12 rounded-lg",
                                            style: {
                                                backgroundColor: e.lightColorScheme[400]
                                            }
                                        })]
                                    }), a.jsxs("div", {
                                        className: "flex items-center space-x-1.5 rounded-sm p-1 shadow-xs ",
                                        style: {
                                            backgroundColor: "#fff"
                                        },
                                        children: [a.jsx("div", {
                                            className: "size-3 shrink-0 rounded-full",
                                            style: {
                                                backgroundColor: e.lightColorScheme[400]
                                            }
                                        }), a.jsx("div", {
                                            className: "h-1 w-full rounded-lg",
                                            style: {
                                                backgroundColor: e.lightColorScheme[400]
                                            }
                                        })]
                                    })]
                                }), a.jsxs("div", {
                                    style: {
                                        clipPath: "polygon(50% 50%, 100% 0, 100% 100%, 0% 100%)",
                                        backgroundColor: e.darkColorScheme[900]
                                    },
                                    className: "absolute inset-0 w-full space-y-2 p-1 ",
                                    children: [a.jsxs("div", {
                                        className: "w-full space-y-2 rounded-sm p-1 shadow-xs",
                                        style: {
                                            backgroundColor: e.darkColorScheme[700]
                                        },
                                        children: [a.jsx("div", {
                                            className: "h-1 w-9/12 rounded-lg",
                                            style: {
                                                backgroundColor: e.darkColorScheme[400]
                                            }
                                        }), a.jsx("div", {
                                            className: "h-1 w-11/12 rounded-lg",
                                            style: {
                                                backgroundColor: e.darkColorScheme[400]
                                            }
                                        })]
                                    }), a.jsxs("div", {
                                        className: "flex items-center space-x-1.5 rounded-sm p-1 shadow-xs ",
                                        style: {
                                            backgroundColor: e.darkColorScheme[700]
                                        },
                                        children: [a.jsx("div", {
                                            className: "size-3 shrink-0 rounded-full",
                                            style: {
                                                backgroundColor: e.darkColorScheme[400]
                                            }
                                        }), a.jsx("div", {
                                            className: "h-1 w-full rounded-lg",
                                            style: {
                                                backgroundColor: e.darkColorScheme[400]
                                            }
                                        })]
                                    })]
                                })]
                            }), a.jsx("p", {
                                className: "mt-1.5 text-center text-xs-plus",
                                children: "System"
                            })]
                        })
                    }), a.jsx(B, {
                        value: "light",
                        className: "cursor-pointer outline-hidden",
                        children: ({checked: t}) => a.jsxs(a.Fragment, {
                            children: [a.jsx(te, {
                                checked: t,
                                bg: e.lightColorScheme[200],
                                card: "#fff",
                                content: e.lightColorScheme[400]
                            }), a.jsx("p", {
                                className: "mt-1.5 text-center",
                                children: "Light"
                            })]
                        })
                    }), a.jsx(B, {
                        value: "dark",
                        className: "cursor-pointer outline-hidden",
                        children: ({checked: t}) => a.jsxs(a.Fragment, {
                            children: [a.jsx(te, {
                                checked: t,
                                bg: e.darkColorScheme[900],
                                card: e.darkColorScheme[700],
                                content: e.darkColorScheme[400]
                            }), a.jsx("p", {
                                className: "mt-1.5 text-center text-xs-plus",
                                children: "Dark"
                            })]
                        })
                    })]
                })]
            }), a.jsxs(ee, {
                value: e.themeLayout,
                onChange: e.setThemeLayout,
                className: "mt-5",
                children: [a.jsx(K, {
                    className: "font-medium text-gray-800 dark:text-dark-100",
                    children: "Theme Layout"
                }), a.jsxs("div", {
                    className: "mt-2.5 grid grid-cols-2 gap-3",
                    children: [a.jsx(B, {
                        value: "main-layout",
                        className: "cursor-pointer outline-hidden",
                        children: ({checked: t}) => a.jsxs(a.Fragment, {
                            children: [a.jsxs("div", {
                                className: M("flex overflow-hidden rounded-sm bg-gray-100 dark:bg-dark-900", t && "ring-2 ring-primary-600 ring-offset-2 ring-offset-white transition-all dark:ring-primary-500 dark:ring-offset-dark-700"),
                                children: [a.jsxs("div", {
                                    className: "flex h-24 w-1/12 flex-col items-center justify-between border-r border-gray-300 bg-gray-200 py-1.5 dark:border-dark-600 dark:bg-dark-700",
                                    children: [a.jsx("div", {
                                        className: "flex flex-col space-y-1.5",
                                        children: be(1, 4).map(n => a.jsx("div", {
                                            className: "size-1.5 rounded-full bg-gray-400 dark:bg-dark-400"
                                        }, n))
                                    }), a.jsx("div", {
                                        className: "size-1.5 rounded-full bg-gray-400 dark:bg-dark-400"
                                    })]
                                }), a.jsxs("div", {
                                    className: "flex h-24 w-3/12 flex-col justify-between bg-gray-200 px-1 py-1.5 dark:bg-dark-700",
                                    children: [a.jsx("div", {
                                        className: "space-y-1",
                                        children: be(1, 5).map(n => a.jsx("div", {
                                            className: "h-0.5 rounded-full bg-gray-400 dark:bg-dark-400"
                                        }, n))
                                    }), a.jsx("div", {
                                        className: "h-1 rounded-full bg-gray-400 dark:bg-dark-400"
                                    })]
                                }), a.jsx("div", {
                                    className: "flex-1",
                                    children: a.jsxs("div", {
                                        className: "flex h-3 w-full items-center justify-end gap-1 border-l border-gray-300 bg-gray-200 px-1.5 dark:border-dark-600 dark:bg-dark-700",
                                        children: [a.jsx("div", {
                                            className: "size-1.5 rounded-full bg-gray-400 dark:bg-dark-400"
                                        }), a.jsx("div", {
                                            className: "size-1.5 rounded-full bg-gray-400 dark:bg-dark-400"
                                        })]
                                    })
                                })]
                            }), a.jsx("p", {
                                className: "mt-1.5 text-center text-xs-plus",
                                children: "Main Layout"
                            })]
                        })
                    }), a.jsx(B, {
                        value: "sideblock",
                        className: "cursor-pointer outline-hidden",
                        children: ({checked: t}) => a.jsxs(a.Fragment, {
                            children: [a.jsxs("div", {
                                className: M("flex overflow-hidden rounded-sm bg-gray-100 dark:bg-dark-900", t && "ring-2 ring-primary-600 ring-offset-2 ring-offset-white transition-all dark:ring-primary-500 dark:ring-offset-dark-700"),
                                children: [a.jsxs("div", {
                                    className: "flex bg-gray-200 h-24 w-[30%] flex-col justify-between px-1 py-1.5 dark:bg-dark-700",
                                    children: [a.jsxs("div", {
                                        className: "space-y-2",
                                        children: [a.jsx("div", {
                                            className: "h-1 rounded-full bg-gray-400 dark:bg-dark-400"
                                        }), a.jsx("div", {
                                            className: "space-y-1",
                                            children: be(1, 5).map(n => a.jsx("div", {
                                                className: "h-0.5 rounded-full bg-gray-400 dark:bg-dark-400"
                                            }, n))
                                        })]
                                    }), a.jsx("div", {
                                        className: "h-1 rounded-full bg-gray-400 dark:bg-dark-400"
                                    })]
                                }), a.jsx("div", {
                                    className: "flex-1",
                                    children: a.jsxs("div", {
                                        className: "flex bg-gray-200 h-3 w-full border-gray-300 items-center justify-end gap-1 border-l px-1.5 dark:border-dark-600 dark:bg-dark-700",
                                        children: [a.jsx("div", {
                                            className: "size-1.5 rounded-full bg-gray-400 dark:bg-dark-400"
                                        }), a.jsx("div", {
                                            className: "size-1.5 rounded-full bg-gray-400 dark:bg-dark-400"
                                        }), a.jsx("div", {
                                            className: "size-1.5 rounded-full bg-gray-400 dark:bg-dark-400"
                                        })]
                                    })
                                })]
                            }), a.jsx("p", {
                                className: "mt-1.5 text-center text-xs-plus",
                                children: "Sideblock"
                            })]
                        })
                    })]
                })]
            }), a.jsxs(ee, {
                value: e.primaryColorScheme.name,
                onChange: e.setPrimaryColorScheme,
                className: "mt-5",
                children: [a.jsx(K, {
                    className: "font-medium text-gray-800 dark:text-dark-100",
                    children: "Primary Colors"
                }), a.jsx("div", {
                    className: "mt-2 flex w-fit flex-wrap gap-3",
                    children: It.map(t => a.jsx(B, {
                        value: t,
                        className: ({checked: n}) => M("flex h-14 w-16 cursor-pointer items-center justify-center rounded-lg border outline-hidden", n ? "border-primary-500" : "border-gray-200 dark:border-dark-500"),
                        children: ({checked: n}) => a.jsx("div", {
                            className: M("mask is-diamond size-6 transition-all", n && "rotate-45 scale-110"),
                            style: {
                                backgroundColor: J[t][500]
                            }
                        })
                    }, t))
                })]
            }), a.jsx(Le, {
                label: "Card Skin:",
                classNames: {
                    root: "mt-5"
                },
                data: Ae,
                value: Ae.find(t => t.value === e.cardSkin),
                onChange: ({value: t}) => e.setCardSkin(t)
            }), a.jsxs(ee, {
                value: e.lightColorScheme.name,
                onChange: e.setLightColorScheme,
                className: "mt-5",
                children: [a.jsx(K, {
                    className: "font-medium text-gray-800 dark:text-dark-100",
                    children: "Light Colors"
                }), a.jsx("div", {
                    className: "mt-2.5 grid grid-cols-3 gap-2.5",
                    children: Dt.map(t => a.jsx(B, {
                        value: t,
                        className: "cursor-pointer outline-hidden",
                        children: ({checked: n}) => a.jsxs(a.Fragment, {
                            children: [a.jsx(te, {
                                checked: n,
                                bg: J[t][200],
                                card: "#fff",
                                content: J[t][400]
                            }), a.jsx("p", {
                                className: "mt-1.5 text-center text-xs-plus capitalize",
                                children: t
                            })]
                        })
                    }, t))
                })]
            }), a.jsxs(ee, {
                value: e.darkColorScheme.name,
                onChange: e.setDarkColorScheme,
                className: "mt-5",
                children: [a.jsx(K, {
                    className: "font-medium text-gray-800 dark:text-dark-100",
                    children: "Dark Colors"
                }), a.jsx("div", {
                    className: "mt-2.5 grid grid-cols-3 gap-2.5",
                    children: Lt.map(t => a.jsx(B, {
                        value: t,
                        className: "cursor-pointer outline-hidden",
                        children: ({checked: n}) => a.jsxs(a.Fragment, {
                            children: [a.jsx(te, {
                                bg: J[t][900],
                                card: J[t][700],
                                content: J[t][400],
                                checked: n
                            }), a.jsx("p", {
                                className: "mt-1.5 text-center text-xs-plus capitalize",
                                children: t
                            })]
                        })
                    }, t))
                })]
            })]
        })]
    })
}
function te({bg: r, card: e, content: t, checked: n}) {
    return a.jsx("div", {
        className: M("relative overflow-hidden rounded-lg border-2 dark:border-transparent", n && "ring-2 ring-primary-600 ring-offset-2 ring-offset-white transition-all dark:ring-primary-500 dark:ring-offset-dark-700"),
        children: a.jsxs("div", {
            className: "w-full space-y-2 p-1 ",
            style: {
                backgroundColor: r
            },
            children: [a.jsxs("div", {
                className: "w-full space-y-2 rounded-sm p-1 shadow-xs",
                style: {
                    backgroundColor: e
                },
                children: [a.jsx("div", {
                    className: "h-1 w-9/12 rounded-lg",
                    style: {
                        backgroundColor: t
                    }
                }), a.jsx("div", {
                    className: "h-1 w-11/12 rounded-lg",
                    style: {
                        backgroundColor: t
                    }
                })]
            }), a.jsxs("div", {
                className: "flex items-center space-x-1.5 rounded-sm p-1 shadow-xs ",
                style: {
                    backgroundColor: e
                },
                children: [a.jsx("div", {
                    className: "size-3 shrink-0 rounded-full",
                    style: {
                        backgroundColor: t
                    }
                }), a.jsx("div", {
                    className: "h-1 w-full rounded-lg",
                    style: {
                        backgroundColor: t
                    }
                })]
            })]
        })
    })
}
or.propTypes = {
    close: N.func
};
te.propTypes = {
    bg: N.string,
    card: N.string,
    content: N.string,
    checked: N.bool
};
export {At as default};
