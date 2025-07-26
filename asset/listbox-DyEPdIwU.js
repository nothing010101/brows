import {R as O, b as i, n as re, J as fr, K as at} from "./index-7qjuY_ZX.js";
import {o as dr, s as pr, f as vr, d as mr, c as gr, i as Fe, e as hr, g as Ye, m as ze, r as br, h as Er, a as $r} from "./floating-ui.dom-nLN9p6gL.js";
const sn = typeof document < "u" ? O.useLayoutEffect : () => {}
;
function yr(e) {
    const t = i.useRef(null);
    return sn( () => {
        t.current = e
    }
    , [e]),
    i.useCallback( (...n) => {
        const r = t.current;
        return r == null ? void 0 : r(...n)
    }
    , [])
}
const ce = e => {
    var t;
    return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document
}
  , de = e => e && "window"in e && e.window === e ? e : ce(e).defaultView || window;
function wr(e) {
    return e !== null && typeof e == "object" && "nodeType"in e && typeof e.nodeType == "number"
}
function xr(e) {
    return wr(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host"in e
}
let Sr = !1;
function wt() {
    return Sr
}
function un(e, t) {
    if (!wt())
        return t && e ? e.contains(t) : !1;
    if (!e || !t)
        return !1;
    let n = t;
    for (; n !== null; ) {
        if (n === e)
            return !0;
        n.tagName === "SLOT" && n.assignedSlot ? n = n.assignedSlot.parentNode : xr(n) ? n = n.host : n = n.parentNode
    }
    return !1
}
const st = (e=document) => {
    var t;
    if (!wt())
        return e.activeElement;
    let n = e.activeElement;
    for (; n && "shadowRoot"in n && (!((t = n.shadowRoot) === null || t === void 0) && t.activeElement); )
        n = n.shadowRoot.activeElement;
    return n
}
;
function cn(e) {
    return wt() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target
}
function Or(e) {
    var t;
    return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some(n => e.test(n.brand))) || e.test(window.navigator.userAgent)
}
function Cr(e) {
    var t;
    return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1
}
function fn(e) {
    let t = null;
    return () => (t == null && (t = e()),
    t)
}
const Rr = fn(function() {
    return Cr(/^Mac/i)
})
  , Tr = fn(function() {
    return Or(/Android/i)
});
function dn() {
    let e = i.useRef(new Map)
      , t = i.useCallback( (o, l, s, a) => {
        let u = a != null && a.once ? (...c) => {
            e.current.delete(s),
            s(...c)
        }
        : s;
        e.current.set(s, {
            type: l,
            eventTarget: o,
            fn: u,
            options: a
        }),
        o.addEventListener(l, u, a)
    }
    , [])
      , n = i.useCallback( (o, l, s, a) => {
        var u;
        let c = ((u = e.current.get(s)) === null || u === void 0 ? void 0 : u.fn) || s;
        o.removeEventListener(l, c, a),
        e.current.delete(s)
    }
    , [])
      , r = i.useCallback( () => {
        e.current.forEach( (o, l) => {
            n(o.eventTarget, o.type, l, o.options)
        }
        )
    }
    , [n]);
    return i.useEffect( () => r, [r]),
    {
        addGlobalListener: t,
        removeGlobalListener: n,
        removeAllGlobalListeners: r
    }
}
function Fr(e) {
    return e.mozInputSource === 0 && e.isTrusted ? !0 : Tr() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType
}
function pn(e) {
    let t = e;
    return t.nativeEvent = e,
    t.isDefaultPrevented = () => t.defaultPrevented,
    t.isPropagationStopped = () => t.cancelBubble,
    t.persist = () => {}
    ,
    t
}
function Pr(e, t) {
    Object.defineProperty(e, "target", {
        value: t
    }),
    Object.defineProperty(e, "currentTarget", {
        value: t
    })
}
function vn(e) {
    let t = i.useRef({
        isFocused: !1,
        observer: null
    });
    sn( () => {
        const r = t.current;
        return () => {
            r.observer && (r.observer.disconnect(),
            r.observer = null)
        }
    }
    , []);
    let n = yr(r => {
        e == null || e(r)
    }
    );
    return i.useCallback(r => {
        if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let o = r.target
              , l = s => {
                if (t.current.isFocused = !1,
                o.disabled) {
                    let a = pn(s);
                    n(a)
                }
                t.current.observer && (t.current.observer.disconnect(),
                t.current.observer = null)
            }
            ;
            o.addEventListener("focusout", l, {
                once: !0
            }),
            t.current.observer = new MutationObserver( () => {
                if (t.current.isFocused && o.disabled) {
                    var s;
                    (s = t.current.observer) === null || s === void 0 || s.disconnect();
                    let a = o === document.activeElement ? null : document.activeElement;
                    o.dispatchEvent(new FocusEvent("blur",{
                        relatedTarget: a
                    })),
                    o.dispatchEvent(new FocusEvent("focusout",{
                        bubbles: !0,
                        relatedTarget: a
                    }))
                }
            }
            ),
            t.current.observer.observe(o, {
                attributes: !0,
                attributeFilter: ["disabled"]
            })
        }
    }
    , [n])
}
let Lr = !1
  , Re = null
  , ut = new Set
  , Oe = new Map
  , ge = !1
  , ct = !1;
const Mr = {
    Tab: !0,
    Escape: !0
};
function xt(e, t) {
    for (let n of ut)
        n(e, t)
}
function Ir(e) {
    return !(e.metaKey || !Rr() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta")
}
function Ae(e) {
    ge = !0,
    Ir(e) && (Re = "keyboard",
    xt("keyboard", e))
}
function Ee(e) {
    Re = "pointer",
    (e.type === "mousedown" || e.type === "pointerdown") && (ge = !0,
    xt("pointer", e))
}
function mn(e) {
    Fr(e) && (ge = !0,
    Re = "virtual")
}
function gn(e) {
    e.target === window || e.target === document || Lr || !e.isTrusted || (!ge && !ct && (Re = "virtual",
    xt("virtual", e)),
    ge = !1,
    ct = !1)
}
function hn() {
    ge = !1,
    ct = !0
}
function ft(e) {
    if (typeof window > "u" || Oe.get(de(e)))
        return;
    const t = de(e)
      , n = ce(e);
    let r = t.HTMLElement.prototype.focus;
    t.HTMLElement.prototype.focus = function() {
        ge = !0,
        r.apply(this, arguments)
    }
    ,
    n.addEventListener("keydown", Ae, !0),
    n.addEventListener("keyup", Ae, !0),
    n.addEventListener("click", mn, !0),
    t.addEventListener("focus", gn, !0),
    t.addEventListener("blur", hn, !1),
    typeof PointerEvent < "u" && (n.addEventListener("pointerdown", Ee, !0),
    n.addEventListener("pointermove", Ee, !0),
    n.addEventListener("pointerup", Ee, !0)),
    t.addEventListener("beforeunload", () => {
        bn(e)
    }
    , {
        once: !0
    }),
    Oe.set(t, {
        focus: r
    })
}
const bn = (e, t) => {
    const n = de(e)
      , r = ce(e);
    t && r.removeEventListener("DOMContentLoaded", t),
    Oe.has(n) && (n.HTMLElement.prototype.focus = Oe.get(n).focus,
    r.removeEventListener("keydown", Ae, !0),
    r.removeEventListener("keyup", Ae, !0),
    r.removeEventListener("click", mn, !0),
    n.removeEventListener("focus", gn, !0),
    n.removeEventListener("blur", hn, !1),
    typeof PointerEvent < "u" && (r.removeEventListener("pointerdown", Ee, !0),
    r.removeEventListener("pointermove", Ee, !0),
    r.removeEventListener("pointerup", Ee, !0)),
    Oe.delete(n))
}
;
function Ar(e) {
    const t = ce(e);
    let n;
    return t.readyState !== "loading" ? ft(e) : (n = () => {
        ft(e)
    }
    ,
    t.addEventListener("DOMContentLoaded", n)),
    () => bn(e, n)
}
typeof document < "u" && Ar();
function En() {
    return Re !== "pointer"
}
const kr = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
function Dr(e, t, n) {
    let r = ce(n == null ? void 0 : n.target);
    const o = typeof window < "u" ? de(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement
      , l = typeof window < "u" ? de(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement
      , s = typeof window < "u" ? de(n == null ? void 0 : n.target).HTMLElement : HTMLElement
      , a = typeof window < "u" ? de(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
    return e = e || r.activeElement instanceof o && !kr.has(r.activeElement.type) || r.activeElement instanceof l || r.activeElement instanceof s && r.activeElement.isContentEditable,
    !(e && t === "keyboard" && n instanceof a && !Mr[n.key])
}
function Nr(e, t, n) {
    ft(),
    i.useEffect( () => {
        let r = (o, l) => {
            Dr(!!(n != null && n.isTextInput), o, l) && e(En())
        }
        ;
        return ut.add(r),
        () => {
            ut.delete(r)
        }
    }
    , t)
}
function Hr(e) {
    let {isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o} = e;
    const l = i.useCallback(u => {
        if (u.target === u.currentTarget)
            return r && r(u),
            o && o(!1),
            !0
    }
    , [r, o])
      , s = vn(l)
      , a = i.useCallback(u => {
        const c = ce(u.target)
          , d = c ? st(c) : st();
        u.target === u.currentTarget && d === cn(u.nativeEvent) && (n && n(u),
        o && o(!0),
        s(u))
    }
    , [o, n, s]);
    return {
        focusProps: {
            onFocus: !t && (n || o || r) ? a : void 0,
            onBlur: !t && (r || o) ? l : void 0
        }
    }
}
function jr(e) {
    let {isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: o} = e
      , l = i.useRef({
        isFocusWithin: !1
    })
      , {addGlobalListener: s, removeAllGlobalListeners: a} = dn()
      , u = i.useCallback(m => {
        m.currentTarget.contains(m.target) && l.current.isFocusWithin && !m.currentTarget.contains(m.relatedTarget) && (l.current.isFocusWithin = !1,
        a(),
        n && n(m),
        o && o(!1))
    }
    , [n, o, l, a])
      , c = vn(u)
      , d = i.useCallback(m => {
        if (!m.currentTarget.contains(m.target))
            return;
        const v = ce(m.target)
          , f = st(v);
        if (!l.current.isFocusWithin && f === cn(m.nativeEvent)) {
            r && r(m),
            o && o(!0),
            l.current.isFocusWithin = !0,
            c(m);
            let p = m.currentTarget;
            s(v, "focus", g => {
                if (l.current.isFocusWithin && !un(p, g.target)) {
                    let h = new v.defaultView.FocusEvent("blur",{
                        relatedTarget: g.target
                    });
                    Pr(h, p);
                    let $ = pn(h);
                    u($)
                }
            }
            , {
                capture: !0
            })
        }
    }
    , [r, o, c, s, u]);
    return t ? {
        focusWithinProps: {
            onFocus: void 0,
            onBlur: void 0
        }
    } : {
        focusWithinProps: {
            onFocus: d,
            onBlur: u
        }
    }
}
let dt = !1
  , Xe = 0;
function _r() {
    dt = !0,
    setTimeout( () => {
        dt = !1
    }
    , 50)
}
function kt(e) {
    e.pointerType === "touch" && _r()
}
function Br() {
    if (!(typeof document > "u"))
        return typeof PointerEvent < "u" && document.addEventListener("pointerup", kt),
        Xe++,
        () => {
            Xe--,
            !(Xe > 0) && typeof PointerEvent < "u" && document.removeEventListener("pointerup", kt)
        }
}
function Wr(e) {
    let {onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o} = e
      , [l,s] = i.useState(!1)
      , a = i.useRef({
        isHovered: !1,
        ignoreEmulatedMouseEvents: !1,
        pointerType: "",
        target: null
    }).current;
    i.useEffect(Br, []);
    let {addGlobalListener: u, removeAllGlobalListeners: c} = dn()
      , {hoverProps: d, triggerHoverEnd: m} = i.useMemo( () => {
        let v = (g, h) => {
            if (a.pointerType = h,
            o || h === "touch" || a.isHovered || !g.currentTarget.contains(g.target))
                return;
            a.isHovered = !0;
            let $ = g.currentTarget;
            a.target = $,
            u(ce(g.target), "pointerover", E => {
                a.isHovered && a.target && !un(a.target, E.target) && f(E, E.pointerType)
            }
            , {
                capture: !0
            }),
            t && t({
                type: "hoverstart",
                target: $,
                pointerType: h
            }),
            n && n(!0),
            s(!0)
        }
          , f = (g, h) => {
            let $ = a.target;
            a.pointerType = "",
            a.target = null,
            !(h === "touch" || !a.isHovered || !$) && (a.isHovered = !1,
            c(),
            r && r({
                type: "hoverend",
                target: $,
                pointerType: h
            }),
            n && n(!1),
            s(!1))
        }
          , p = {};
        return typeof PointerEvent < "u" && (p.onPointerEnter = g => {
            dt && g.pointerType === "mouse" || v(g, g.pointerType)
        }
        ,
        p.onPointerLeave = g => {
            !o && g.currentTarget.contains(g.target) && f(g, g.pointerType)
        }
        ),
        {
            hoverProps: p,
            triggerHoverEnd: f
        }
    }
    , [t, n, r, o, a, u, c]);
    return i.useEffect( () => {
        o && m({
            currentTarget: a.target
        }, a.pointerType)
    }
    , [o]),
    {
        hoverProps: d,
        isHovered: l
    }
}
function Ur(e={}) {
    let {autoFocus: t=!1, isTextInput: n, within: r} = e
      , o = i.useRef({
        isFocused: !1,
        isFocusVisible: t || En()
    })
      , [l,s] = i.useState(!1)
      , [a,u] = i.useState( () => o.current.isFocused && o.current.isFocusVisible)
      , c = i.useCallback( () => u(o.current.isFocused && o.current.isFocusVisible), [])
      , d = i.useCallback(f => {
        o.current.isFocused = f,
        s(f),
        c()
    }
    , [c]);
    Nr(f => {
        o.current.isFocusVisible = f,
        c()
    }
    , [], {
        isTextInput: n
    });
    let {focusProps: m} = Hr({
        isDisabled: r,
        onFocusChange: d
    })
      , {focusWithinProps: v} = jr({
        isDisabled: !r,
        onFocusWithinChange: d
    });
    return {
        isFocused: l,
        isFocusVisible: a,
        focusProps: r ? v : m
    }
}
var Vr = Object.defineProperty
  , Gr = (e, t, n) => t in e ? Vr(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , Qe = (e, t, n) => (Gr(e, typeof t != "symbol" ? t + "" : t, n),
n);
let Kr = class {
    constructor() {
        Qe(this, "current", this.detect()),
        Qe(this, "handoffState", "pending"),
        Qe(this, "currentId", 0)
    }
    set(t) {
        this.current !== t && (this.handoffState = "pending",
        this.currentId = 0,
        this.current = t)
    }
    reset() {
        this.set(this.detect())
    }
    nextId() {
        return ++this.currentId
    }
    get isServer() {
        return this.current === "server"
    }
    get isClient() {
        return this.current === "client"
    }
    detect() {
        return typeof window > "u" || typeof document > "u" ? "server" : "client"
    }
    handoff() {
        this.handoffState === "pending" && (this.handoffState = "complete")
    }
    get isHandoffComplete() {
        return this.handoffState === "complete"
    }
}
  , me = new Kr;
function $e(e) {
    var t, n;
    return me.isServer ? null : e ? "ownerDocument"in e ? e.ownerDocument : "current"in e ? (n = (t = e.current) == null ? void 0 : t.ownerDocument) != null ? n : document : null : document
}
function $n(e) {
    typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch(t => setTimeout( () => {
        throw t
    }
    ))
}
function ee() {
    let e = []
      , t = {
        addEventListener(n, r, o, l) {
            return n.addEventListener(r, o, l),
            t.add( () => n.removeEventListener(r, o, l))
        },
        requestAnimationFrame(...n) {
            let r = requestAnimationFrame(...n);
            return t.add( () => cancelAnimationFrame(r))
        },
        nextFrame(...n) {
            return t.requestAnimationFrame( () => t.requestAnimationFrame(...n))
        },
        setTimeout(...n) {
            let r = setTimeout(...n);
            return t.add( () => clearTimeout(r))
        },
        microTask(...n) {
            let r = {
                current: !0
            };
            return $n( () => {
                r.current && n[0]()
            }
            ),
            t.add( () => {
                r.current = !1
            }
            )
        },
        style(n, r, o) {
            let l = n.style.getPropertyValue(r);
            return Object.assign(n.style, {
                [r]: o
            }),
            this.add( () => {
                Object.assign(n.style, {
                    [r]: l
                })
            }
            )
        },
        group(n) {
            let r = ee();
            return n(r),
            this.add( () => r.dispose())
        },
        add(n) {
            return e.includes(n) || e.push(n),
            () => {
                let r = e.indexOf(n);
                if (r >= 0)
                    for (let o of e.splice(r, 1))
                        o()
            }
        },
        dispose() {
            for (let n of e.splice(0))
                n()
        }
    };
    return t
}
function ye() {
    let[e] = i.useState(ee);
    return i.useEffect( () => () => e.dispose(), [e]),
    e
}
let A = (e, t) => {
    me.isServer ? i.useEffect(e, t) : i.useLayoutEffect(e, t)
}
;
function he(e) {
    let t = i.useRef(e);
    return A( () => {
        t.current = e
    }
    , [e]),
    t
}
let R = function(e) {
    let t = he(e);
    return O.useCallback( (...n) => t.current(...n), [t])
};
function qr(e) {
    let t = e.width / 2
      , n = e.height / 2;
    return {
        top: e.clientY - n,
        right: e.clientX + t,
        bottom: e.clientY + n,
        left: e.clientX - t
    }
}
function Yr(e, t) {
    return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom)
}
function zr({disabled: e=!1}={}) {
    let t = i.useRef(null)
      , [n,r] = i.useState(!1)
      , o = ye()
      , l = R( () => {
        t.current = null,
        r(!1),
        o.dispose()
    }
    )
      , s = R(a => {
        if (o.dispose(),
        t.current === null) {
            t.current = a.currentTarget,
            r(!0);
            {
                let u = $e(a.currentTarget);
                o.addEventListener(u, "pointerup", l, !1),
                o.addEventListener(u, "pointermove", c => {
                    if (t.current) {
                        let d = qr(c);
                        r(Yr(d, t.current.getBoundingClientRect()))
                    }
                }
                , !1),
                o.addEventListener(u, "pointercancel", l, !1)
            }
        }
    }
    );
    return {
        pressed: n,
        pressProps: e ? {} : {
            onPointerDown: s,
            onPointerUp: l,
            onClick: l
        }
    }
}
let Xr = i.createContext(void 0);
function St() {
    return i.useContext(Xr)
}
function pt(...e) {
    return Array.from(new Set(e.flatMap(t => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ")
}
function Z(e, t, ...n) {
    if (e in t) {
        let o = t[e];
        return typeof o == "function" ? o(...n) : o
    }
    let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o => `"${o}"`).join(", ")}.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Z),
    r
}
var ke = (e => (e[e.None = 0] = "None",
e[e.RenderStrategy = 1] = "RenderStrategy",
e[e.Static = 2] = "Static",
e))(ke || {})
  , ue = (e => (e[e.Unmount = 0] = "Unmount",
e[e.Hidden = 1] = "Hidden",
e))(ue || {});
function Y() {
    let e = Jr();
    return i.useCallback(t => Qr({
        mergeRefs: e,
        ...t
    }), [e])
}
function Qr({ourProps: e, theirProps: t, slot: n, defaultTag: r, features: o, visible: l=!0, name: s, mergeRefs: a}) {
    a = a ?? Zr;
    let u = yn(t, e);
    if (l)
        return Pe(u, n, r, s, a);
    let c = o ?? 0;
    if (c & 2) {
        let {static: d=!1, ...m} = u;
        if (d)
            return Pe(m, n, r, s, a)
    }
    if (c & 1) {
        let {unmount: d=!0, ...m} = u;
        return Z(d ? 0 : 1, {
            0() {
                return null
            },
            1() {
                return Pe({
                    ...m,
                    hidden: !0,
                    style: {
                        display: "none"
                    }
                }, n, r, s, a)
            }
        })
    }
    return Pe(u, n, r, s, a)
}
function Pe(e, t={}, n, r, o) {
    let {as: l=n, children: s, refName: a="ref", ...u} = Je(e, ["unmount", "static"])
      , c = e.ref !== void 0 ? {
        [a]: e.ref
    } : {}
      , d = typeof s == "function" ? s(t) : s;
    "className"in u && u.className && typeof u.className == "function" && (u.className = u.className(t)),
    u["aria-labelledby"] && u["aria-labelledby"] === u.id && (u["aria-labelledby"] = void 0);
    let m = {};
    if (t) {
        let v = !1
          , f = [];
        for (let[p,g] of Object.entries(t))
            typeof g == "boolean" && (v = !0),
            g === !0 && f.push(p.replace(/([A-Z])/g, h => `-${h.toLowerCase()}`));
        if (v) {
            m["data-headlessui-state"] = f.join(" ");
            for (let p of f)
                m[`data-${p}`] = ""
        }
    }
    if (l === i.Fragment && (Object.keys(se(u)).length > 0 || Object.keys(se(m)).length > 0))
        if (!i.isValidElement(d) || Array.isArray(d) && d.length > 1) {
            if (Object.keys(se(u)).length > 0)
                throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(se(u)).concat(Object.keys(se(m))).map(v => `  - ${v}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(v => `  - ${v}`).join(`
`)].join(`
`))
        } else {
            let v = d.props
              , f = v == null ? void 0 : v.className
              , p = typeof f == "function" ? (...$) => pt(f(...$), u.className) : pt(f, u.className)
              , g = p ? {
                className: p
            } : {}
              , h = yn(d.props, se(Je(u, ["ref"])));
            for (let $ in m)
                $ in h && delete m[$];
            return i.cloneElement(d, Object.assign({}, h, m, c, {
                ref: o(eo(d), c.ref)
            }, g))
        }
    return i.createElement(l, Object.assign({}, Je(u, ["ref"]), l !== i.Fragment && c, l !== i.Fragment && m), d)
}
function Jr() {
    let e = i.useRef([])
      , t = i.useCallback(n => {
        for (let r of e.current)
            r != null && (typeof r == "function" ? r(n) : r.current = n)
    }
    , []);
    return (...n) => {
        if (!n.every(r => r == null))
            return e.current = n,
            t
    }
}
function Zr(...e) {
    return e.every(t => t == null) ? void 0 : t => {
        for (let n of e)
            n != null && (typeof n == "function" ? n(t) : n.current = t)
    }
}
function yn(...e) {
    if (e.length === 0)
        return {};
    if (e.length === 1)
        return e[0];
    let t = {}
      , n = {};
    for (let r of e)
        for (let o in r)
            o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []),
            n[o].push(r[o])) : t[o] = r[o];
    if (t.disabled || t["aria-disabled"])
        for (let r in n)
            /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r) && (n[r] = [o => {
                var l;
                return (l = o == null ? void 0 : o.preventDefault) == null ? void 0 : l.call(o)
            }
            ]);
    for (let r in n)
        Object.assign(t, {
            [r](o, ...l) {
                let s = n[r];
                for (let a of s) {
                    if ((o instanceof Event || (o == null ? void 0 : o.nativeEvent)instanceof Event) && o.defaultPrevented)
                        return;
                    a(o, ...l)
                }
            }
        });
    return t
}
function wn(...e) {
    if (e.length === 0)
        return {};
    if (e.length === 1)
        return e[0];
    let t = {}
      , n = {};
    for (let r of e)
        for (let o in r)
            o.startsWith("on") && typeof r[o] == "function" ? (n[o] != null || (n[o] = []),
            n[o].push(r[o])) : t[o] = r[o];
    for (let r in n)
        Object.assign(t, {
            [r](...o) {
                let l = n[r];
                for (let s of l)
                    s == null || s(...o)
            }
        });
    return t
}
function q(e) {
    var t;
    return Object.assign(i.forwardRef(e), {
        displayName: (t = e.displayName) != null ? t : e.name
    })
}
function se(e) {
    let t = Object.assign({}, e);
    for (let n in t)
        t[n] === void 0 && delete t[n];
    return t
}
function Je(e, t=[]) {
    let n = Object.assign({}, e);
    for (let r of t)
        r in n && delete n[r];
    return n
}
function eo(e) {
    return O.version.split(".")[0] >= "19" ? e.props.ref : e.ref
}
function to(e, t, n) {
    let[r,o] = i.useState(n)
      , l = e !== void 0
      , s = i.useRef(l)
      , a = i.useRef(!1)
      , u = i.useRef(!1);
    return l && !s.current && !a.current ? (a.current = !0,
    s.current = l,
    console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !l && s.current && !u.current && (u.current = !0,
    s.current = l,
    console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),
    [l ? e : r, R(c => (l || o(c),
    t == null ? void 0 : t(c)))]
}
function no(e) {
    let[t] = i.useState(e);
    return t
}
function xn(e={}, t=null, n=[]) {
    for (let[r,o] of Object.entries(e))
        On(n, Sn(t, r), o);
    return n
}
function Sn(e, t) {
    return e ? e + "[" + t + "]" : t
}
function On(e, t, n) {
    if (Array.isArray(n))
        for (let[r,o] of n.entries())
            On(e, Sn(t, r.toString()), o);
    else
        n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : xn(n, t, e)
}
function ro(e) {
    var t, n;
    let r = (t = e == null ? void 0 : e.form) != null ? t : e.closest("form");
    if (r) {
        for (let o of r.elements)
            if (o !== e && (o.tagName === "INPUT" && o.type === "submit" || o.tagName === "BUTTON" && o.type === "submit" || o.nodeName === "INPUT" && o.type === "image")) {
                o.click();
                return
            }
        (n = r.requestSubmit) == null || n.call(r)
    }
}
let oo = "span";
var Ot = (e => (e[e.None = 1] = "None",
e[e.Focusable = 2] = "Focusable",
e[e.Hidden = 4] = "Hidden",
e))(Ot || {});
function lo(e, t) {
    var n;
    let {features: r=1, ...o} = e
      , l = {
        ref: t,
        "aria-hidden": (r & 2) === 2 ? !0 : (n = o["aria-hidden"]) != null ? n : void 0,
        hidden: (r & 4) === 4 ? !0 : void 0,
        style: {
            position: "fixed",
            top: 1,
            left: 1,
            width: 1,
            height: 0,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: "0",
            ...(r & 4) === 4 && (r & 2) !== 2 && {
                display: "none"
            }
        }
    };
    return Y()({
        ourProps: l,
        theirProps: o,
        slot: {},
        defaultTag: oo,
        name: "Hidden"
    })
}
let Cn = q(lo)
  , io = i.createContext(null);
function ao({children: e}) {
    let t = i.useContext(io);
    if (!t)
        return O.createElement(O.Fragment, null, e);
    let {target: n} = t;
    return n ? re.createPortal(O.createElement(O.Fragment, null, e), n) : null
}
function so({data: e, form: t, disabled: n, onReset: r, overrides: o}) {
    let[l,s] = i.useState(null)
      , a = ye();
    return i.useEffect( () => {
        if (r && l)
            return a.addEventListener(l, "reset", r)
    }
    , [l, t, r]),
    O.createElement(ao, null, O.createElement(uo, {
        setForm: s,
        formId: t
    }), xn(e).map( ([u,c]) => O.createElement(Cn, {
        features: Ot.Hidden,
        ...se({
            key: u,
            as: "input",
            type: "hidden",
            hidden: !0,
            readOnly: !0,
            form: t,
            disabled: n,
            name: u,
            value: c,
            ...o
        })
    })))
}
function uo({setForm: e, formId: t}) {
    return i.useEffect( () => {
        if (t) {
            let n = document.getElementById(t);
            n && e(n)
        }
    }
    , [e, t]),
    t ? null : O.createElement(Cn, {
        features: Ot.Hidden,
        as: "input",
        type: "hidden",
        hidden: !0,
        readOnly: !0,
        ref: n => {
            if (!n)
                return;
            let r = n.closest("form");
            r && e(r)
        }
    })
}
let co = i.createContext(void 0);
function Rn() {
    return i.useContext(co)
}
function Ct(e) {
    return typeof e != "object" || e === null ? !1 : "nodeType"in e
}
function Ne(e) {
    return Ct(e) && "tagName"in e
}
function ae(e) {
    return Ne(e) && "accessKey"in e
}
function pe(e) {
    return Ne(e) && "tabIndex"in e
}
function fo(e) {
    return Ne(e) && "style"in e
}
function po(e) {
    return ae(e) && e.nodeName === "IFRAME"
}
function Tn(e) {
    return ae(e) && e.nodeName === "INPUT"
}
function Dt(e) {
    return ae(e) && e.nodeName === "LABEL"
}
function vo(e) {
    return ae(e) && e.nodeName === "FIELDSET"
}
function Fn(e) {
    return ae(e) && e.nodeName === "LEGEND"
}
function mo(e) {
    return Ne(e) ? e.matches('a[href],audio[controls],button,details,embed,iframe,img[usemap],input:not([type="hidden"]),label,select,textarea,video[controls]') : !1
}
function go(e) {
    let t = e.parentElement
      , n = null;
    for (; t && !vo(t); )
        Fn(t) && (n = t),
        t = t.parentElement;
    let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
    return r && ho(n) ? !1 : r
}
function ho(e) {
    if (!e)
        return !1;
    let t = e.previousElementSibling;
    for (; t !== null; ) {
        if (Fn(t))
            return !1;
        t = t.previousElementSibling
    }
    return !0
}
let Pn = Symbol();
function bo(e, t=!0) {
    return Object.assign(e, {
        [Pn]: t
    })
}
function te(...e) {
    let t = i.useRef(e);
    i.useEffect( () => {
        t.current = e
    }
    , [e]);
    let n = R(r => {
        for (let o of t.current)
            o != null && (typeof o == "function" ? o(r) : o.current = r)
    }
    );
    return e.every(r => r == null || (r == null ? void 0 : r[Pn])) ? void 0 : n
}
let He = i.createContext(null);
He.displayName = "DescriptionContext";
function Ln() {
    let e = i.useContext(He);
    if (e === null) {
        let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
        throw Error.captureStackTrace && Error.captureStackTrace(t, Ln),
        t
    }
    return e
}
function Eo() {
    var e, t;
    return (t = (e = i.useContext(He)) == null ? void 0 : e.value) != null ? t : void 0
}
function Gi() {
    let[e,t] = i.useState([]);
    return [e.length > 0 ? e.join(" ") : void 0, i.useMemo( () => function(n) {
        let r = R(l => (t(s => [...s, l]),
        () => t(s => {
            let a = s.slice()
              , u = a.indexOf(l);
            return u !== -1 && a.splice(u, 1),
            a
        }
        )))
          , o = i.useMemo( () => ({
            register: r,
            slot: n.slot,
            name: n.name,
            props: n.props,
            value: n.value
        }), [r, n.slot, n.name, n.props, n.value]);
        return O.createElement(He.Provider, {
            value: o
        }, n.children)
    }
    , [t])]
}
let $o = "p";
function yo(e, t) {
    let n = i.useId()
      , r = St()
      , {id: o=`headlessui-description-${n}`, ...l} = e
      , s = Ln()
      , a = te(t);
    A( () => s.register(o), [o, s.register]);
    let u = r || !1
      , c = i.useMemo( () => ({
        ...s.slot,
        disabled: u
    }), [s.slot, u])
      , d = {
        ref: a,
        ...s.props,
        id: o
    };
    return Y()({
        ourProps: d,
        theirProps: l,
        slot: c,
        defaultTag: $o,
        name: s.name || "Description"
    })
}
let wo = q(yo)
  , Ki = Object.assign(wo, {});
var V = (e => (e.Space = " ",
e.Enter = "Enter",
e.Escape = "Escape",
e.Backspace = "Backspace",
e.Delete = "Delete",
e.ArrowLeft = "ArrowLeft",
e.ArrowUp = "ArrowUp",
e.ArrowRight = "ArrowRight",
e.ArrowDown = "ArrowDown",
e.Home = "Home",
e.End = "End",
e.PageUp = "PageUp",
e.PageDown = "PageDown",
e.Tab = "Tab",
e))(V || {});
let je = i.createContext(null);
je.displayName = "LabelContext";
function Mn() {
    let e = i.useContext(je);
    if (e === null) {
        let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
        throw Error.captureStackTrace && Error.captureStackTrace(t, Mn),
        t
    }
    return e
}
function In(e) {
    var t, n, r;
    let o = (n = (t = i.useContext(je)) == null ? void 0 : t.value) != null ? n : void 0;
    return ((r = e == null ? void 0 : e.length) != null ? r : 0) > 0 ? [o, ...e].filter(Boolean).join(" ") : o
}
function xo({inherit: e=!1}={}) {
    let t = In()
      , [n,r] = i.useState([])
      , o = e ? [t, ...n].filter(Boolean) : n;
    return [o.length > 0 ? o.join(" ") : void 0, i.useMemo( () => function(l) {
        let s = R(u => (r(c => [...c, u]),
        () => r(c => {
            let d = c.slice()
              , m = d.indexOf(u);
            return m !== -1 && d.splice(m, 1),
            d
        }
        )))
          , a = i.useMemo( () => ({
            register: s,
            slot: l.slot,
            name: l.name,
            props: l.props,
            value: l.value
        }), [s, l.slot, l.name, l.props, l.value]);
        return O.createElement(je.Provider, {
            value: a
        }, l.children)
    }
    , [r])]
}
let So = "label";
function Oo(e, t) {
    var n;
    let r = i.useId()
      , o = Mn()
      , l = Rn()
      , s = St()
      , {id: a=`headlessui-label-${r}`, htmlFor: u=l ?? ((n = o.props) == null ? void 0 : n.htmlFor), passive: c=!1, ...d} = e
      , m = te(t);
    A( () => o.register(a), [a, o.register]);
    let v = R(h => {
        let $ = h.currentTarget;
        if (!(h.target !== h.currentTarget && mo(h.target)) && (Dt($) && h.preventDefault(),
        o.props && "onClick"in o.props && typeof o.props.onClick == "function" && o.props.onClick(h),
        Dt($))) {
            let E = document.getElementById($.htmlFor);
            if (E) {
                let b = E.getAttribute("disabled");
                if (b === "true" || b === "")
                    return;
                let y = E.getAttribute("aria-disabled");
                if (y === "true" || y === "")
                    return;
                (Tn(E) && (E.type === "file" || E.type === "radio" || E.type === "checkbox") || E.role === "radio" || E.role === "checkbox" || E.role === "switch") && E.click(),
                E.focus({
                    preventScroll: !0
                })
            }
        }
    }
    )
      , f = s || !1
      , p = i.useMemo( () => ({
        ...o.slot,
        disabled: f
    }), [o.slot, f])
      , g = {
        ref: m,
        ...o.props,
        id: a,
        htmlFor: u,
        onClick: v
    };
    return c && ("onClick"in g && (delete g.htmlFor,
    delete g.onClick),
    "onClick"in d && delete d.onClick),
    Y()({
        ourProps: g,
        theirProps: d,
        slot: p,
        defaultTag: u ? So : "div",
        name: o.name || "Label"
    })
}
let Co = q(Oo)
  , Ro = Object.assign(Co, {});
function To(e, t) {
    return e !== null && t !== null && typeof e == "object" && typeof t == "object" && "id"in e && "id"in t ? e.id === t.id : e === t
}
function Fo(e=To) {
    return i.useCallback( (t, n) => {
        if (typeof e == "string") {
            let r = e;
            return (t == null ? void 0 : t[r]) === (n == null ? void 0 : n[r])
        }
        return e(t, n)
    }
    , [e])
}
function Po(e) {
    if (e === null)
        return {
            width: 0,
            height: 0
        };
    let {width: t, height: n} = e.getBoundingClientRect();
    return {
        width: t,
        height: n
    }
}
function Lo(e, t=!1) {
    let[n,r] = i.useReducer( () => ({}), {})
      , o = i.useMemo( () => Po(e), [e, n]);
    return A( () => {
        if (!e)
            return;
        let l = new ResizeObserver(r);
        return l.observe(e),
        () => {
            l.disconnect()
        }
    }
    , [e]),
    t ? {
        width: `${o.width}px`,
        height: `${o.height}px`
    } : o
}
let An = class extends Map {
    constructor(t) {
        super(),
        this.factory = t
    }
    get(t) {
        let n = super.get(t);
        return n === void 0 && (n = this.factory(t),
        this.set(t, n)),
        n
    }
}
;
var Mo = Object.defineProperty, Io = (e, t, n) => t in e ? Mo(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n, Ao = (e, t, n) => (Io(e, t + "", n),
n), kn = (e, t, n) => {
    if (!t.has(e))
        throw TypeError("Cannot " + n)
}
, Q = (e, t, n) => (kn(e, t, "read from private field"),
n ? n.call(e) : t.get(e)), Ze = (e, t, n) => {
    if (t.has(e))
        throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, n)
}
, Nt = (e, t, n, r) => (kn(e, t, "write to private field"),
t.set(e, n),
n), oe, xe, Se;
let Dn = class {
    constructor(t) {
        Ze(this, oe, {}),
        Ze(this, xe, new An( () => new Set)),
        Ze(this, Se, new Set),
        Ao(this, "disposables", ee()),
        Nt(this, oe, t)
    }
    dispose() {
        this.disposables.dispose()
    }
    get state() {
        return Q(this, oe)
    }
    subscribe(t, n) {
        let r = {
            selector: t,
            callback: n,
            current: t(Q(this, oe))
        };
        return Q(this, Se).add(r),
        this.disposables.add( () => {
            Q(this, Se).delete(r)
        }
        )
    }
    on(t, n) {
        return Q(this, xe).get(t).add(n),
        this.disposables.add( () => {
            Q(this, xe).get(t).delete(n)
        }
        )
    }
    send(t) {
        let n = this.reduce(Q(this, oe), t);
        if (n !== Q(this, oe)) {
            Nt(this, oe, n);
            for (let r of Q(this, Se)) {
                let o = r.selector(Q(this, oe));
                Nn(r.current, o) || (r.current = o,
                r.callback(o))
            }
            for (let r of Q(this, xe).get(t.type))
                r(Q(this, oe), t)
        }
    }
}
;
oe = new WeakMap,
xe = new WeakMap,
Se = new WeakMap;
function Nn(e, t) {
    return Object.is(e, t) ? !0 : typeof e != "object" || e === null || typeof t != "object" || t === null ? !1 : Array.isArray(e) && Array.isArray(t) ? e.length !== t.length ? !1 : et(e[Symbol.iterator](), t[Symbol.iterator]()) : e instanceof Map && t instanceof Map || e instanceof Set && t instanceof Set ? e.size !== t.size ? !1 : et(e.entries(), t.entries()) : Ht(e) && Ht(t) ? et(Object.entries(e)[Symbol.iterator](), Object.entries(t)[Symbol.iterator]()) : !1
}
function et(e, t) {
    do {
        let n = e.next()
          , r = t.next();
        if (n.done && r.done)
            return !0;
        if (n.done || r.done || !Object.is(n.value, r.value))
            return !1
    } while (!0)
}
function Ht(e) {
    if (Object.prototype.toString.call(e) !== "[object Object]")
        return !1;
    let t = Object.getPrototypeOf(e);
    return t === null || Object.getPrototypeOf(t) === null
}
function tt(e) {
    let[t,n] = e()
      , r = ee();
    return (...o) => {
        t(...o),
        r.dispose(),
        r.microTask(n)
    }
}
var ko = Object.defineProperty
  , Do = (e, t, n) => t in e ? ko(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , jt = (e, t, n) => (Do(e, typeof t != "symbol" ? t + "" : t, n),
n)
  , Hn = (e => (e[e.Push = 0] = "Push",
e[e.Pop = 1] = "Pop",
e))(Hn || {});
let No = {
    0(e, t) {
        let n = t.id
          , r = e.stack
          , o = e.stack.indexOf(n);
        if (o !== -1) {
            let l = e.stack.slice();
            return l.splice(o, 1),
            l.push(n),
            r = l,
            {
                ...e,
                stack: r
            }
        }
        return {
            ...e,
            stack: [...e.stack, n]
        }
    },
    1(e, t) {
        let n = t.id
          , r = e.stack.indexOf(n);
        if (r === -1)
            return e;
        let o = e.stack.slice();
        return o.splice(r, 1),
        {
            ...e,
            stack: o
        }
    }
}
  , Ho = class jn extends Dn {
    constructor() {
        super(...arguments),
        jt(this, "actions", {
            push: t => this.send({
                type: 0,
                id: t
            }),
            pop: t => this.send({
                type: 1,
                id: t
            })
        }),
        jt(this, "selectors", {
            isTop: (t, n) => t.stack[t.stack.length - 1] === n,
            inStack: (t, n) => t.stack.includes(n)
        })
    }
    static new() {
        return new jn({
            stack: []
        })
    }
    reduce(t, n) {
        return Z(n.type, No, t, n)
    }
}
;
const Rt = new An( () => Ho.new());
var nt = {
    exports: {}
}
  , rt = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _t;
function jo() {
    if (_t)
        return rt;
    _t = 1;
    var e = fr();
    function t(u, c) {
        return u === c && (u !== 0 || 1 / u === 1 / c) || u !== u && c !== c
    }
    var n = typeof Object.is == "function" ? Object.is : t
      , r = e.useSyncExternalStore
      , o = e.useRef
      , l = e.useEffect
      , s = e.useMemo
      , a = e.useDebugValue;
    return rt.useSyncExternalStoreWithSelector = function(u, c, d, m, v) {
        var f = o(null);
        if (f.current === null) {
            var p = {
                hasValue: !1,
                value: null
            };
            f.current = p
        } else
            p = f.current;
        f = s(function() {
            function h(w) {
                if (!$) {
                    if ($ = !0,
                    E = w,
                    w = m(w),
                    v !== void 0 && p.hasValue) {
                        var T = p.value;
                        if (v(T, w))
                            return b = T
                    }
                    return b = w
                }
                if (T = b,
                n(E, w))
                    return T;
                var F = m(w);
                return v !== void 0 && v(T, F) ? (E = w,
                T) : (E = w,
                b = F)
            }
            var $ = !1, E, b, y = d === void 0 ? null : d;
            return [function() {
                return h(c())
            }
            , y === null ? void 0 : function() {
                return h(y())
            }
            ]
        }, [c, d, m, v]);
        var g = r(u, f[0], f[1]);
        return l(function() {
            p.hasValue = !0,
            p.value = g
        }, [g]),
        a(g),
        g
    }
    ,
    rt
}
var Bt;
function _o() {
    return Bt || (Bt = 1,
    nt.exports = jo()),
    nt.exports
}
var Bo = _o();
function J(e, t, n=Nn) {
    return Bo.useSyncExternalStoreWithSelector(R(r => e.subscribe(Wo, r)), R( () => e.state), R( () => e.state), R(t), n)
}
function Wo(e) {
    return e
}
function _n(e, t) {
    let n = i.useId()
      , r = Rt.get(t)
      , [o,l] = J(r, i.useCallback(s => [r.selectors.isTop(s, n), r.selectors.inStack(s, n)], [r, n]));
    return A( () => {
        if (e)
            return r.actions.push(n),
            () => r.actions.pop(n)
    }
    , [r, e, n]),
    e ? l ? o : !0 : !1
}
let vt = new Map
  , Ce = new Map;
function Wt(e) {
    var t;
    let n = (t = Ce.get(e)) != null ? t : 0;
    return Ce.set(e, n + 1),
    n !== 0 ? () => Ut(e) : (vt.set(e, {
        "aria-hidden": e.getAttribute("aria-hidden"),
        inert: e.inert
    }),
    e.setAttribute("aria-hidden", "true"),
    e.inert = !0,
    () => Ut(e))
}
function Ut(e) {
    var t;
    let n = (t = Ce.get(e)) != null ? t : 1;
    if (n === 1 ? Ce.delete(e) : Ce.set(e, n - 1),
    n !== 1)
        return;
    let r = vt.get(e);
    r && (r["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]),
    e.inert = r.inert,
    vt.delete(e))
}
function Uo(e, {allowed: t, disallowed: n}={}) {
    let r = _n(e, "inert-others");
    A( () => {
        var o, l;
        if (!r)
            return;
        let s = ee();
        for (let u of (o = n == null ? void 0 : n()) != null ? o : [])
            u && s.add(Wt(u));
        let a = (l = t == null ? void 0 : t()) != null ? l : [];
        for (let u of a) {
            if (!u)
                continue;
            let c = $e(u);
            if (!c)
                continue;
            let d = u.parentElement;
            for (; d && d !== c.body; ) {
                for (let m of d.children)
                    a.some(v => m.contains(v)) || s.add(Wt(m));
                d = d.parentElement
            }
        }
        return s.dispose
    }
    , [r, t, n])
}
function Vo(e, t, n) {
    let r = he(o => {
        let l = o.getBoundingClientRect();
        l.x === 0 && l.y === 0 && l.width === 0 && l.height === 0 && n()
    }
    );
    i.useEffect( () => {
        if (!e)
            return;
        let o = t === null ? null : ae(t) ? t : t.current;
        if (!o)
            return;
        let l = ee();
        if (typeof ResizeObserver < "u") {
            let s = new ResizeObserver( () => r.current(o));
            s.observe(o),
            l.add( () => s.disconnect())
        }
        if (typeof IntersectionObserver < "u") {
            let s = new IntersectionObserver( () => r.current(o));
            s.observe(o),
            l.add( () => s.disconnect())
        }
        return () => l.dispose()
    }
    , [t, r, e])
}
let mt = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(",")
  , Go = ["[data-autofocus]"].map(e => `${e}:not([tabindex='-1'])`).join(",");
var gt = (e => (e[e.First = 1] = "First",
e[e.Previous = 2] = "Previous",
e[e.Next = 4] = "Next",
e[e.Last = 8] = "Last",
e[e.WrapAround = 16] = "WrapAround",
e[e.NoScroll = 32] = "NoScroll",
e[e.AutoFocus = 64] = "AutoFocus",
e))(gt || {})
  , Ko = (e => (e[e.Error = 0] = "Error",
e[e.Overflow = 1] = "Overflow",
e[e.Success = 2] = "Success",
e[e.Underflow = 3] = "Underflow",
e))(Ko || {})
  , qo = (e => (e[e.Previous = -1] = "Previous",
e[e.Next = 1] = "Next",
e))(qo || {});
function Bn(e=document.body) {
    return e == null ? [] : Array.from(e.querySelectorAll(mt)).sort( (t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)))
}
function Yo(e=document.body) {
    return e == null ? [] : Array.from(e.querySelectorAll(Go)).sort( (t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)))
}
var Tt = (e => (e[e.Strict = 0] = "Strict",
e[e.Loose = 1] = "Loose",
e))(Tt || {});
function Ft(e, t=0) {
    var n;
    return e === ((n = $e(e)) == null ? void 0 : n.body) ? !1 : Z(t, {
        0() {
            return e.matches(mt)
        },
        1() {
            let r = e;
            for (; r !== null; ) {
                if (r.matches(mt))
                    return !0;
                r = r.parentElement
            }
            return !1
        }
    })
}
function zi(e) {
    let t = $e(e);
    ee().nextFrame( () => {
        t && pe(t.activeElement) && !Ft(t.activeElement, 0) && Xo(e)
    }
    )
}
var zo = (e => (e[e.Keyboard = 0] = "Keyboard",
e[e.Mouse = 1] = "Mouse",
e))(zo || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", e => {
    e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
}
, !0),
document.addEventListener("click", e => {
    e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "")
}
, !0));
function Xo(e) {
    e == null || e.focus({
        preventScroll: !0
    })
}
let Qo = ["textarea", "input"].join(",");
function Jo(e) {
    var t, n;
    return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Qo)) != null ? n : !1
}
function Wn(e, t=n => n) {
    return e.slice().sort( (n, r) => {
        let o = t(n)
          , l = t(r);
        if (o === null || l === null)
            return 0;
        let s = o.compareDocumentPosition(l);
        return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
    }
    )
}
function Zo(e, t) {
    return el(Bn(), t, {
        relativeTo: e
    })
}
function el(e, t, {sorted: n=!0, relativeTo: r=null, skipElements: o=[]}={}) {
    let l = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument
      , s = Array.isArray(e) ? n ? Wn(e) : e : t & 64 ? Yo(e) : Bn(e);
    o.length > 0 && s.length > 1 && (s = s.filter(f => !o.some(p => p != null && "current"in p ? (p == null ? void 0 : p.current) === f : p === f))),
    r = r ?? l.activeElement;
    let a = ( () => {
        if (t & 5)
            return 1;
        if (t & 10)
            return -1;
        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
    }
    )(), u = ( () => {
        if (t & 1)
            return 0;
        if (t & 2)
            return Math.max(0, s.indexOf(r)) - 1;
        if (t & 4)
            return Math.max(0, s.indexOf(r)) + 1;
        if (t & 8)
            return s.length - 1;
        throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
    }
    )(), c = t & 32 ? {
        preventScroll: !0
    } : {}, d = 0, m = s.length, v;
    do {
        if (d >= m || d + m <= 0)
            return 0;
        let f = u + d;
        if (t & 16)
            f = (f + m) % m;
        else {
            if (f < 0)
                return 3;
            if (f >= m)
                return 1
        }
        v = s[f],
        v == null || v.focus(c),
        d += a
    } while (v !== l.activeElement);
    return t & 6 && Jo(v) && v.select(),
    2
}
function Un() {
    return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
}
function tl() {
    return /Android/gi.test(window.navigator.userAgent)
}
function Vt() {
    return Un() || tl()
}
function be(e, t, n, r) {
    let o = he(n);
    i.useEffect( () => {
        if (!e)
            return;
        function l(s) {
            o.current(s)
        }
        return document.addEventListener(t, l, r),
        () => document.removeEventListener(t, l, r)
    }
    , [e, t, r])
}
function nl(e, t, n, r) {
    let o = he(n);
    i.useEffect( () => {
        if (!e)
            return;
        function l(s) {
            o.current(s)
        }
        return window.addEventListener(t, l, r),
        () => window.removeEventListener(t, l, r)
    }
    , [e, t, r])
}
const Gt = 30;
function rl(e, t, n) {
    let r = he(n)
      , o = i.useCallback(function(a, u) {
        if (a.defaultPrevented)
            return;
        let c = u(a);
        if (c === null || !c.getRootNode().contains(c) || !c.isConnected)
            return;
        let d = function m(v) {
            return typeof v == "function" ? m(v()) : Array.isArray(v) || v instanceof Set ? v : [v]
        }(t);
        for (let m of d)
            if (m !== null && (m.contains(c) || a.composed && a.composedPath().includes(m)))
                return;
        return !Ft(c, Tt.Loose) && c.tabIndex !== -1 && a.preventDefault(),
        r.current(a, c)
    }, [r, t])
      , l = i.useRef(null);
    be(e, "pointerdown", a => {
        var u, c;
        Vt() || (l.current = ((c = (u = a.composedPath) == null ? void 0 : u.call(a)) == null ? void 0 : c[0]) || a.target)
    }
    , !0),
    be(e, "pointerup", a => {
        if (Vt() || !l.current)
            return;
        let u = l.current;
        return l.current = null,
        o(a, () => u)
    }
    , !0);
    let s = i.useRef({
        x: 0,
        y: 0
    });
    be(e, "touchstart", a => {
        s.current.x = a.touches[0].clientX,
        s.current.y = a.touches[0].clientY
    }
    , !0),
    be(e, "touchend", a => {
        let u = {
            x: a.changedTouches[0].clientX,
            y: a.changedTouches[0].clientY
        };
        if (!(Math.abs(u.x - s.current.x) >= Gt || Math.abs(u.y - s.current.y) >= Gt))
            return o(a, () => pe(a.target) ? a.target : null)
    }
    , !0),
    nl(e, "blur", a => o(a, () => po(window.document.activeElement) ? window.document.activeElement : null), !0)
}
function ht(...e) {
    return i.useMemo( () => $e(...e), [...e])
}
var ol = (e => (e[e.Ignore = 0] = "Ignore",
e[e.Select = 1] = "Select",
e[e.Close = 2] = "Close",
e))(ol || {});
const Le = {
    Ignore: {
        kind: 0
    },
    Select: e => ({
        kind: 1,
        target: e
    }),
    Close: {
        kind: 2
    }
}
  , ll = 200;
function il(e, {trigger: t, action: n, close: r, select: o}) {
    let l = i.useRef(null);
    be(e && t !== null, "pointerdown", s => {
        Ct(s == null ? void 0 : s.target) && t != null && t.contains(s.target) && (l.current = new Date)
    }
    ),
    be(e && t !== null, "pointerup", s => {
        if (l.current === null || !pe(s.target))
            return;
        let a = n(s)
          , u = new Date().getTime() - l.current.getTime();
        switch (l.current = null,
        a.kind) {
        case 0:
            return;
        case 1:
            {
                u > ll && (o(a.target),
                r());
                break
            }
        case 2:
            {
                r();
                break
            }
        }
    }
    , {
        capture: !0
    })
}
function al(e, t) {
    return i.useMemo( () => {
        var n;
        if (e.type)
            return e.type;
        let r = (n = e.as) != null ? n : "button";
        if (typeof r == "string" && r.toLowerCase() === "button" || (t == null ? void 0 : t.tagName) === "BUTTON" && !t.hasAttribute("type"))
            return "button"
    }
    , [e.type, e.as, t])
}
function sl(e) {
    return i.useSyncExternalStore(e.subscribe, e.getSnapshot, e.getSnapshot)
}
function ul(e, t) {
    let n = e()
      , r = new Set;
    return {
        getSnapshot() {
            return n
        },
        subscribe(o) {
            return r.add(o),
            () => r.delete(o)
        },
        dispatch(o, ...l) {
            let s = t[o].call(n, ...l);
            s && (n = s,
            r.forEach(a => a()))
        }
    }
}
function cl() {
    let e;
    return {
        before({doc: t}) {
            var n;
            let r = t.documentElement
              , o = (n = t.defaultView) != null ? n : window;
            e = Math.max(0, o.innerWidth - r.clientWidth)
        },
        after({doc: t, d: n}) {
            let r = t.documentElement
              , o = Math.max(0, r.clientWidth - r.offsetWidth)
              , l = Math.max(0, e - o);
            n.style(r, "paddingRight", `${l}px`)
        }
    }
}
function fl() {
    return Un() ? {
        before({doc: e, d: t, meta: n}) {
            function r(o) {
                return n.containers.flatMap(l => l()).some(l => l.contains(o))
            }
            t.microTask( () => {
                var o;
                if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
                    let a = ee();
                    a.style(e.documentElement, "scrollBehavior", "auto"),
                    t.add( () => t.microTask( () => a.dispose()))
                }
                let l = (o = window.scrollY) != null ? o : window.pageYOffset
                  , s = null;
                t.addEventListener(e, "click", a => {
                    if (pe(a.target))
                        try {
                            let u = a.target.closest("a");
                            if (!u)
                                return;
                            let {hash: c} = new URL(u.href)
                              , d = e.querySelector(c);
                            pe(d) && !r(d) && (s = d)
                        } catch {}
                }
                , !0),
                t.addEventListener(e, "touchstart", a => {
                    if (pe(a.target) && fo(a.target))
                        if (r(a.target)) {
                            let u = a.target;
                            for (; u.parentElement && r(u.parentElement); )
                                u = u.parentElement;
                            t.style(u, "overscrollBehavior", "contain")
                        } else
                            t.style(a.target, "touchAction", "none")
                }
                ),
                t.addEventListener(e, "touchmove", a => {
                    if (pe(a.target)) {
                        if (Tn(a.target))
                            return;
                        if (r(a.target)) {
                            let u = a.target;
                            for (; u.parentElement && u.dataset.headlessuiPortal !== "" && !(u.scrollHeight > u.clientHeight || u.scrollWidth > u.clientWidth); )
                                u = u.parentElement;
                            u.dataset.headlessuiPortal === "" && a.preventDefault()
                        } else
                            a.preventDefault()
                    }
                }
                , {
                    passive: !1
                }),
                t.add( () => {
                    var a;
                    let u = (a = window.scrollY) != null ? a : window.pageYOffset;
                    l !== u && window.scrollTo(0, l),
                    s && s.isConnected && (s.scrollIntoView({
                        block: "nearest"
                    }),
                    s = null)
                }
                )
            }
            )
        }
    } : {}
}
function dl() {
    return {
        before({doc: e, d: t}) {
            t.style(e.documentElement, "overflow", "hidden")
        }
    }
}
function pl(e) {
    let t = {};
    for (let n of e)
        Object.assign(t, n(t));
    return t
}
let ve = ul( () => new Map, {
    PUSH(e, t) {
        var n;
        let r = (n = this.get(e)) != null ? n : {
            doc: e,
            count: 0,
            d: ee(),
            meta: new Set
        };
        return r.count++,
        r.meta.add(t),
        this.set(e, r),
        this
    },
    POP(e, t) {
        let n = this.get(e);
        return n && (n.count--,
        n.meta.delete(t)),
        this
    },
    SCROLL_PREVENT({doc: e, d: t, meta: n}) {
        let r = {
            doc: e,
            d: t,
            meta: pl(n)
        }
          , o = [fl(), cl(), dl()];
        o.forEach( ({before: l}) => l == null ? void 0 : l(r)),
        o.forEach( ({after: l}) => l == null ? void 0 : l(r))
    },
    SCROLL_ALLOW({d: e}) {
        e.dispose()
    },
    TEARDOWN({doc: e}) {
        this.delete(e)
    }
});
ve.subscribe( () => {
    let e = ve.getSnapshot()
      , t = new Map;
    for (let[n] of e)
        t.set(n, n.documentElement.style.overflow);
    for (let n of e.values()) {
        let r = t.get(n.doc) === "hidden"
          , o = n.count !== 0;
        (o && !r || !o && r) && ve.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n),
        n.count === 0 && ve.dispatch("TEARDOWN", n)
    }
}
);
function vl(e, t, n= () => ({
    containers: []
})) {
    let r = sl(ve)
      , o = t ? r.get(t) : void 0
      , l = o ? o.count > 0 : !1;
    return A( () => {
        if (!(!t || !e))
            return ve.dispatch("PUSH", t, n),
            () => ve.dispatch("POP", t, n)
    }
    , [e, t]),
    l
}
function ml(e, t, n= () => [document.body]) {
    let r = _n(e, "scroll-lock");
    vl(r, t, o => {
        var l;
        return {
            containers: [...(l = o.containers) != null ? l : [], n]
        }
    }
    )
}
function Kt(e) {
    return [e.screenX, e.screenY]
}
function gl() {
    let e = i.useRef([-1, -1]);
    return {
        wasMoved(t) {
            let n = Kt(t);
            return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n,
            !0)
        },
        update(t) {
            e.current = Kt(t)
        }
    }
}
function hl(e=0) {
    let[t,n] = i.useState(e)
      , r = i.useCallback(u => n(u), [t])
      , o = i.useCallback(u => n(c => c | u), [t])
      , l = i.useCallback(u => (t & u) === u, [t])
      , s = i.useCallback(u => n(c => c & ~u), [n])
      , a = i.useCallback(u => n(c => c ^ u), [n]);
    return {
        flags: t,
        setFlag: r,
        addFlag: o,
        hasFlag: l,
        removeFlag: s,
        toggleFlag: a
    }
}
var bl = {}, qt, Yt;
typeof process < "u" && typeof globalThis < "u" && typeof Element < "u" && ((qt = process == null ? void 0 : bl) == null ? void 0 : qt.NODE_ENV) === "test" && typeof ((Yt = Element == null ? void 0 : Element.prototype) == null ? void 0 : Yt.getAnimations) > "u" && (Element.prototype.getAnimations = function() {
    return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)),
    []
}
);
var El = (e => (e[e.None = 0] = "None",
e[e.Closed = 1] = "Closed",
e[e.Enter = 2] = "Enter",
e[e.Leave = 4] = "Leave",
e))(El || {});
function Vn(e) {
    let t = {};
    for (let n in e)
        e[n] === !0 && (t[`data-${n}`] = "");
    return t
}
function Gn(e, t, n, r) {
    let[o,l] = i.useState(n)
      , {hasFlag: s, addFlag: a, removeFlag: u} = hl(e && o ? 3 : 0)
      , c = i.useRef(!1)
      , d = i.useRef(!1)
      , m = ye();
    return A( () => {
        var v;
        if (e) {
            if (n && l(!0),
            !t) {
                n && a(3);
                return
            }
            return (v = r == null ? void 0 : r.start) == null || v.call(r, n),
            $l(t, {
                inFlight: c,
                prepare() {
                    d.current ? d.current = !1 : d.current = c.current,
                    c.current = !0,
                    !d.current && (n ? (a(3),
                    u(4)) : (a(4),
                    u(2)))
                },
                run() {
                    d.current ? n ? (u(3),
                    a(4)) : (u(4),
                    a(3)) : n ? u(1) : a(1)
                },
                done() {
                    var f;
                    d.current && typeof t.getAnimations == "function" && t.getAnimations().length > 0 || (c.current = !1,
                    u(7),
                    n || l(!1),
                    (f = r == null ? void 0 : r.end) == null || f.call(r, n))
                }
            })
        }
    }
    , [e, n, t, m]),
    e ? [o, {
        closed: s(1),
        enter: s(2),
        leave: s(4),
        transition: s(2) || s(4)
    }] : [n, {
        closed: void 0,
        enter: void 0,
        leave: void 0,
        transition: void 0
    }]
}
function $l(e, {prepare: t, run: n, done: r, inFlight: o}) {
    let l = ee();
    return wl(e, {
        prepare: t,
        inFlight: o
    }),
    l.nextFrame( () => {
        n(),
        l.requestAnimationFrame( () => {
            l.add(yl(e, r))
        }
        )
    }
    ),
    l.dispose
}
function yl(e, t) {
    var n, r;
    let o = ee();
    if (!e)
        return o.dispose;
    let l = !1;
    o.add( () => {
        l = !0
    }
    );
    let s = (r = (n = e.getAnimations) == null ? void 0 : n.call(e).filter(a => a instanceof CSSTransition)) != null ? r : [];
    return s.length === 0 ? (t(),
    o.dispose) : (Promise.allSettled(s.map(a => a.finished)).then( () => {
        l || t()
    }
    ),
    o.dispose)
}
function wl(e, {inFlight: t, prepare: n}) {
    if (t != null && t.current) {
        n();
        return
    }
    let r = e.style.transition;
    e.style.transition = "none",
    n(),
    e.offsetHeight,
    e.style.transition = r
}
function xl() {
    const e = navigator.userAgentData;
    return e && Array.isArray(e.brands) ? e.brands.map(t => {
        let {brand: n, version: r} = t;
        return n + "/" + r
    }
    ).join(" ") : navigator.userAgent
}
var Ie = typeof document < "u" ? i.useLayoutEffect : i.useEffect;
function De(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!De(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const l = o[r];
            if (!(l === "_owner" && e.$$typeof) && !De(e[l], t[l]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function Kn(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function zt(e, t) {
    const n = Kn(e);
    return Math.round(t * n) / n
}
function ot(e) {
    const t = i.useRef(e);
    return Ie( () => {
        t.current = e
    }
    ),
    t
}
function Sl(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: l, floating: s}={}, transform: a=!0, whileElementsMounted: u, open: c} = e
      , [d,m] = i.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [v,f] = i.useState(r);
    De(v, r) || f(r);
    const [p,g] = i.useState(null)
      , [h,$] = i.useState(null)
      , E = i.useCallback(L => {
        L !== T.current && (T.current = L,
        g(L))
    }
    , [])
      , b = i.useCallback(L => {
        L !== F.current && (F.current = L,
        $(L))
    }
    , [])
      , y = l || p
      , w = s || h
      , T = i.useRef(null)
      , F = i.useRef(null)
      , N = i.useRef(d)
      , K = u != null
      , x = ot(u)
      , P = ot(o)
      , U = ot(c)
      , k = i.useCallback( () => {
        if (!T.current || !F.current)
            return;
        const L = {
            placement: t,
            strategy: n,
            middleware: v
        };
        P.current && (L.platform = P.current),
        gr(T.current, F.current, L).then(H => {
            const j = {
                ...H,
                isPositioned: U.current !== !1
            };
            M.current && !De(N.current, j) && (N.current = j,
            re.flushSync( () => {
                m(j)
            }
            ))
        }
        )
    }
    , [v, t, n, P, U]);
    Ie( () => {
        c === !1 && N.current.isPositioned && (N.current.isPositioned = !1,
        m(L => ({
            ...L,
            isPositioned: !1
        })))
    }
    , [c]);
    const M = i.useRef(!1);
    Ie( () => (M.current = !0,
    () => {
        M.current = !1
    }
    ), []),
    Ie( () => {
        if (y && (T.current = y),
        w && (F.current = w),
        y && w) {
            if (x.current)
                return x.current(y, w, k);
            k()
        }
    }
    , [y, w, k, x, K]);
    const C = i.useMemo( () => ({
        reference: T,
        floating: F,
        setReference: E,
        setFloating: b
    }), [E, b])
      , D = i.useMemo( () => ({
        reference: y,
        floating: w
    }), [y, w])
      , z = i.useMemo( () => {
        const L = {
            position: n,
            left: 0,
            top: 0
        };
        if (!D.floating)
            return L;
        const H = zt(D.floating, d.x)
          , j = zt(D.floating, d.y);
        return a ? {
            ...L,
            transform: "translate(" + H + "px, " + j + "px)",
            ...Kn(D.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: H,
            top: j
        }
    }
    , [n, a, D.floating, d.x, d.y]);
    return i.useMemo( () => ({
        ...d,
        update: k,
        refs: C,
        elements: D,
        floatingStyles: z
    }), [d, k, C, D, z])
}
const qn = (e, t) => ({
    ...dr(e),
    options: [e, t]
})
  , Ol = (e, t) => ({
    ...pr(e),
    options: [e, t]
})
  , Cl = (e, t) => ({
    ...vr(e),
    options: [e, t]
})
  , Rl = (e, t) => ({
    ...mr(e),
    options: [e, t]
})
  , Yn = {
    ...at
}
  , Tl = Yn.useInsertionEffect
  , Fl = Tl || (e => e());
function zn(e) {
    const t = i.useRef( () => {}
    );
    return Fl( () => {
        t.current = e
    }
    ),
    i.useCallback(function() {
        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
        return t.current == null ? void 0 : t.current(...r)
    }, [])
}
var bt = typeof document < "u" ? i.useLayoutEffect : i.useEffect;
let Xt = !1
  , Pl = 0;
const Qt = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + Pl++;
function Ll() {
    const [e,t] = i.useState( () => Xt ? Qt() : void 0);
    return bt( () => {
        e == null && t(Qt())
    }
    , []),
    i.useEffect( () => {
        Xt = !0
    }
    , []),
    e
}
const Ml = Yn.useId
  , Il = Ml || Ll;
function Al() {
    const e = new Map;
    return {
        emit(t, n) {
            var r;
            (r = e.get(t)) == null || r.forEach(o => o(n))
        },
        on(t, n) {
            e.set(t, [...e.get(t) || [], n])
        },
        off(t, n) {
            var r;
            e.set(t, ((r = e.get(t)) == null ? void 0 : r.filter(o => o !== n)) || [])
        }
    }
}
const kl = i.createContext(null)
  , Dl = i.createContext(null)
  , Nl = () => {
    var e;
    return ((e = i.useContext(kl)) == null ? void 0 : e.id) || null
}
  , Hl = () => i.useContext(Dl)
  , jl = "data-floating-ui-focusable";
function _l(e) {
    const {open: t=!1, onOpenChange: n, elements: r} = e
      , o = Il()
      , l = i.useRef({})
      , [s] = i.useState( () => Al())
      , a = Nl() != null
      , [u,c] = i.useState(r.reference)
      , d = zn( (f, p, g) => {
        l.current.openEvent = f ? p : void 0,
        s.emit("openchange", {
            open: f,
            event: p,
            reason: g,
            nested: a
        }),
        n == null || n(f, p, g)
    }
    )
      , m = i.useMemo( () => ({
        setPositionReference: c
    }), [])
      , v = i.useMemo( () => ({
        reference: u || r.reference || null,
        floating: r.floating || null,
        domReference: r.reference
    }), [u, r.reference, r.floating]);
    return i.useMemo( () => ({
        dataRef: l,
        open: t,
        onOpenChange: d,
        elements: v,
        events: s,
        floatingId: o,
        refs: m
    }), [t, d, v, s, o, m])
}
function Bl(e) {
    e === void 0 && (e = {});
    const {nodeId: t} = e
      , n = _l({
        ...e,
        elements: {
            reference: null,
            floating: null,
            ...e.elements
        }
    })
      , r = e.rootContext || n
      , o = r.elements
      , [l,s] = i.useState(null)
      , [a,u] = i.useState(null)
      , d = (o == null ? void 0 : o.domReference) || l
      , m = i.useRef(null)
      , v = Hl();
    bt( () => {
        d && (m.current = d)
    }
    , [d]);
    const f = Sl({
        ...e,
        elements: {
            ...o,
            ...a && {
                reference: a
            }
        }
    })
      , p = i.useCallback(b => {
        const y = Fe(b) ? {
            getBoundingClientRect: () => b.getBoundingClientRect(),
            contextElement: b
        } : b;
        u(y),
        f.refs.setReference(y)
    }
    , [f.refs])
      , g = i.useCallback(b => {
        (Fe(b) || b === null) && (m.current = b,
        s(b)),
        (Fe(f.refs.reference.current) || f.refs.reference.current === null || b !== null && !Fe(b)) && f.refs.setReference(b)
    }
    , [f.refs])
      , h = i.useMemo( () => ({
        ...f.refs,
        setReference: g,
        setPositionReference: p,
        domReference: m
    }), [f.refs, g, p])
      , $ = i.useMemo( () => ({
        ...f.elements,
        domReference: d
    }), [f.elements, d])
      , E = i.useMemo( () => ({
        ...f,
        ...r,
        refs: h,
        elements: $,
        nodeId: t
    }), [f, h, $, t, r]);
    return bt( () => {
        r.dataRef.current.floatingContext = E;
        const b = v == null ? void 0 : v.nodesRef.current.find(y => y.id === t);
        b && (b.context = E)
    }
    ),
    i.useMemo( () => ({
        ...f,
        context: E,
        refs: h,
        elements: $
    }), [f, h, $, E])
}
const Jt = "active"
  , Zt = "selected";
function lt(e, t, n) {
    const r = new Map
      , o = n === "item";
    let l = e;
    if (o && e) {
        const {[Jt]: s, [Zt]: a, ...u} = e;
        l = u
    }
    return {
        ...n === "floating" && {
            tabIndex: -1,
            [jl]: ""
        },
        ...l,
        ...t.map(s => {
            const a = s ? s[n] : null;
            return typeof a == "function" ? e ? a(e) : null : a
        }
        ).concat(e).reduce( (s, a) => (a && Object.entries(a).forEach(u => {
            let[c,d] = u;
            if (!(o && [Jt, Zt].includes(c)))
                if (c.indexOf("on") === 0) {
                    if (r.has(c) || r.set(c, []),
                    typeof d == "function") {
                        var m;
                        (m = r.get(c)) == null || m.push(d),
                        s[c] = function() {
                            for (var v, f = arguments.length, p = new Array(f), g = 0; g < f; g++)
                                p[g] = arguments[g];
                            return (v = r.get(c)) == null ? void 0 : v.map(h => h(...p)).find(h => h !== void 0)
                        }
                    }
                } else
                    s[c] = d
        }
        ),
        s), {})
    }
}
function Wl(e) {
    e === void 0 && (e = []);
    const t = e.map(a => a == null ? void 0 : a.reference)
      , n = e.map(a => a == null ? void 0 : a.floating)
      , r = e.map(a => a == null ? void 0 : a.item)
      , o = i.useCallback(a => lt(a, e, "reference"), t)
      , l = i.useCallback(a => lt(a, e, "floating"), n)
      , s = i.useCallback(a => lt(a, e, "item"), r);
    return i.useMemo( () => ({
        getReferenceProps: o,
        getFloatingProps: l,
        getItemProps: s
    }), [o, l, s])
}
function en(e, t) {
    return {
        ...e,
        rects: {
            ...e.rects,
            floating: {
                ...e.rects.floating,
                height: t
            }
        }
    }
}
const Ul = e => ({
    name: "inner",
    options: e,
    async fn(t) {
        const {listRef: n, overflowRef: r, onFallbackChange: o, offset: l=0, index: s=0, minItemsVisible: a=4, referenceOverflowThreshold: u=0, scrollRef: c, ...d} = hr(e, t)
          , {rects: m, elements: {floating: v}} = t
          , f = n.current[s]
          , p = (c == null ? void 0 : c.current) || v
          , g = v.clientTop || p.clientTop
          , h = v.clientTop !== 0
          , $ = p.clientTop !== 0
          , E = v === p;
        if (!f)
            return {};
        const b = {
            ...t,
            ...await qn(-f.offsetTop - v.clientTop - m.reference.height / 2 - f.offsetHeight / 2 - l).fn(t)
        }
          , y = await Ye(en(b, p.scrollHeight + g + v.clientTop), d)
          , w = await Ye(b, {
            ...d,
            elementContext: "reference"
        })
          , T = ze(0, y.top)
          , F = b.y + T
          , x = (p.scrollHeight > p.clientHeight ? P => P : br)(ze(0, p.scrollHeight + (h && E || $ ? g * 2 : 0) - T - ze(0, y.bottom)));
        if (p.style.maxHeight = x + "px",
        p.scrollTop = T,
        o) {
            const P = p.offsetHeight < f.offsetHeight * Er(a, n.current.length) - 1 || w.top >= -u || w.bottom >= -u;
            re.flushSync( () => o(P))
        }
        return r && (r.current = await Ye(en({
            ...b,
            y: F
        }, p.offsetHeight + g + v.clientTop), d)),
        {
            y: F
        }
    }
});
function Vl(e, t) {
    const {open: n, elements: r} = e
      , {enabled: o=!0, overflowRef: l, scrollRef: s, onChange: a} = t
      , u = zn(a)
      , c = i.useRef(!1)
      , d = i.useRef(null)
      , m = i.useRef(null);
    i.useEffect( () => {
        if (!o)
            return;
        function f(g) {
            if (g.ctrlKey || !p || l.current == null)
                return;
            const h = g.deltaY
              , $ = l.current.top >= -.5
              , E = l.current.bottom >= -.5
              , b = p.scrollHeight - p.clientHeight
              , y = h < 0 ? -1 : 1
              , w = h < 0 ? "max" : "min";
            p.scrollHeight <= p.clientHeight || (!$ && h > 0 || !E && h < 0 ? (g.preventDefault(),
            re.flushSync( () => {
                u(T => T + Math[w](h, b * y))
            }
            )) : /firefox/i.test(xl()) && (p.scrollTop += h))
        }
        const p = (s == null ? void 0 : s.current) || r.floating;
        if (n && p)
            return p.addEventListener("wheel", f),
            requestAnimationFrame( () => {
                d.current = p.scrollTop,
                l.current != null && (m.current = {
                    ...l.current
                })
            }
            ),
            () => {
                d.current = null,
                m.current = null,
                p.removeEventListener("wheel", f)
            }
    }
    , [o, n, r.floating, l, s, u]);
    const v = i.useMemo( () => ({
        onKeyDown() {
            c.current = !0
        },
        onWheel() {
            c.current = !1
        },
        onPointerMove() {
            c.current = !1
        },
        onScroll() {
            const f = (s == null ? void 0 : s.current) || r.floating;
            if (!(!l.current || !f || !c.current)) {
                if (d.current !== null) {
                    const p = f.scrollTop - d.current;
                    (l.current.bottom < -.5 && p < -1 || l.current.top < -.5 && p > 1) && re.flushSync( () => u(g => g + p))
                }
                requestAnimationFrame( () => {
                    d.current = f.scrollTop
                }
                )
            }
        }
    }), [r.floating, u, l, s]);
    return i.useMemo( () => o ? {
        floating: v
    } : {}, [o, v])
}
let we = i.createContext({
    styles: void 0,
    setReference: () => {}
    ,
    setFloating: () => {}
    ,
    getReferenceProps: () => ({}),
    getFloatingProps: () => ({}),
    slot: {}
});
we.displayName = "FloatingContext";
let Pt = i.createContext(null);
Pt.displayName = "PlacementContext";
function Gl(e) {
    return i.useMemo( () => e ? typeof e == "string" ? {
        to: e
    } : e : null, [e])
}
function Kl() {
    return i.useContext(we).setReference
}
function ql() {
    return i.useContext(we).getReferenceProps
}
function Yl() {
    let {getFloatingProps: e, slot: t} = i.useContext(we);
    return i.useCallback( (...n) => Object.assign({}, e(...n), {
        "data-anchor": t.anchor
    }), [e, t])
}
function zl(e=null) {
    e === !1 && (e = null),
    typeof e == "string" && (e = {
        to: e
    });
    let t = i.useContext(Pt)
      , n = i.useMemo( () => e, [JSON.stringify(e, (o, l) => {
        var s;
        return (s = l == null ? void 0 : l.outerHTML) != null ? s : l
    }
    )]);
    A( () => {
        t == null || t(n ?? null)
    }
    , [t, n]);
    let r = i.useContext(we);
    return i.useMemo( () => [r.setFloating, e ? r.styles : {}], [r.setFloating, e, r.styles])
}
let tn = 4;
function Xl({children: e, enabled: t=!0}) {
    let[n,r] = i.useState(null)
      , [o,l] = i.useState(0)
      , s = i.useRef(null)
      , [a,u] = i.useState(null);
    Ql(a);
    let c = t && n !== null && a !== null
      , {to: d="bottom", gap: m=0, offset: v=0, padding: f=0, inner: p} = Jl(n, a)
      , [g,h="center"] = d.split(" ");
    A( () => {
        c && l(0)
    }
    , [c]);
    let {refs: $, floatingStyles: E, context: b} = Bl({
        open: c,
        placement: g === "selection" ? h === "center" ? "bottom" : `bottom-${h}` : h === "center" ? `${g}` : `${g}-${h}`,
        strategy: "absolute",
        transform: !1,
        middleware: [qn({
            mainAxis: g === "selection" ? 0 : m,
            crossAxis: v
        }), Ol({
            padding: f
        }), g !== "selection" && Cl({
            padding: f
        }), g === "selection" && p ? Ul({
            ...p,
            padding: f,
            overflowRef: s,
            offset: o,
            minItemsVisible: tn,
            referenceOverflowThreshold: f,
            onFallbackChange(P) {
                var U, k;
                if (!P)
                    return;
                let M = b.elements.floating;
                if (!M)
                    return;
                let C = parseFloat(getComputedStyle(M).scrollPaddingBottom) || 0
                  , D = Math.min(tn, M.childElementCount)
                  , z = 0
                  , L = 0;
                for (let H of (k = (U = b.elements.floating) == null ? void 0 : U.childNodes) != null ? k : [])
                    if (ae(H)) {
                        let j = H.offsetTop
                          , ie = j + H.clientHeight + C
                          , B = M.scrollTop
                          , _ = B + M.clientHeight;
                        if (j >= B && ie <= _)
                            D--;
                        else {
                            L = Math.max(0, Math.min(ie, _) - Math.max(j, B)),
                            z = H.clientHeight;
                            break
                        }
                    }
                D >= 1 && l(H => {
                    let j = z * D - L + C;
                    return H >= j ? H : j
                }
                )
            }
        }) : null, Rl({
            padding: f,
            apply({availableWidth: P, availableHeight: U, elements: k}) {
                Object.assign(k.floating.style, {
                    overflow: "auto",
                    maxWidth: `${P}px`,
                    maxHeight: `min(var(--anchor-max-height, 100vh), ${U}px)`
                })
            }
        })].filter(Boolean),
        whileElementsMounted: $r
    })
      , [y=g,w=h] = b.placement.split("-");
    g === "selection" && (y = "selection");
    let T = i.useMemo( () => ({
        anchor: [y, w].filter(Boolean).join(" ")
    }), [y, w])
      , F = Vl(b, {
        overflowRef: s,
        onChange: l
    })
      , {getReferenceProps: N, getFloatingProps: K} = Wl([F])
      , x = R(P => {
        u(P),
        $.setFloating(P)
    }
    );
    return i.createElement(Pt.Provider, {
        value: r
    }, i.createElement(we.Provider, {
        value: {
            setFloating: x,
            setReference: $.setReference,
            styles: E,
            getReferenceProps: N,
            getFloatingProps: K,
            slot: T
        }
    }, e))
}
function Ql(e) {
    A( () => {
        if (!e)
            return;
        let t = new MutationObserver( () => {
            let n = window.getComputedStyle(e).maxHeight
              , r = parseFloat(n);
            if (isNaN(r))
                return;
            let o = parseInt(n);
            isNaN(o) || r !== o && (e.style.maxHeight = `${Math.ceil(r)}px`)
        }
        );
        return t.observe(e, {
            attributes: !0,
            attributeFilter: ["style"]
        }),
        () => {
            t.disconnect()
        }
    }
    , [e])
}
function Jl(e, t) {
    var n, r, o;
    let l = it((n = e == null ? void 0 : e.gap) != null ? n : "var(--anchor-gap, 0)", t)
      , s = it((r = e == null ? void 0 : e.offset) != null ? r : "var(--anchor-offset, 0)", t)
      , a = it((o = e == null ? void 0 : e.padding) != null ? o : "var(--anchor-padding, 0)", t);
    return {
        ...e,
        gap: l,
        offset: s,
        padding: a
    }
}
function it(e, t, n=void 0) {
    let r = ye()
      , o = R( (u, c) => {
        if (u == null)
            return [n, null];
        if (typeof u == "number")
            return [u, null];
        if (typeof u == "string") {
            if (!c)
                return [n, null];
            let d = nn(u, c);
            return [d, m => {
                let v = Xn(u);
                {
                    let f = v.map(p => window.getComputedStyle(c).getPropertyValue(p));
                    r.requestAnimationFrame(function p() {
                        r.nextFrame(p);
                        let g = !1;
                        for (let[$,E] of v.entries()) {
                            let b = window.getComputedStyle(c).getPropertyValue(E);
                            if (f[$] !== b) {
                                f[$] = b,
                                g = !0;
                                break
                            }
                        }
                        if (!g)
                            return;
                        let h = nn(u, c);
                        d !== h && (m(h),
                        d = h)
                    })
                }
                return r.dispose
            }
            ]
        }
        return [n, null]
    }
    )
      , l = i.useMemo( () => o(e, t)[0], [e, t])
      , [s=l,a] = i.useState();
    return A( () => {
        let[u,c] = o(e, t);
        if (a(u),
        !!c)
            return c(a)
    }
    , [e, t]),
    s
}
function Xn(e) {
    let t = /var\((.*)\)/.exec(e);
    if (t) {
        let n = t[1].indexOf(",");
        if (n === -1)
            return [t[1]];
        let r = t[1].slice(0, n).trim()
          , o = t[1].slice(n + 1).trim();
        return o ? [r, ...Xn(o)] : [r]
    }
    return []
}
function nn(e, t) {
    let n = document.createElement("div");
    t.appendChild(n),
    n.style.setProperty("margin-top", "0px", "important"),
    n.style.setProperty("margin-top", e, "important");
    let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
    return t.removeChild(n),
    r
}
function Zl(e, t) {
    let[n,r] = i.useState(t);
    return !e && n !== t && r(t),
    e ? n : t
}
let _e = i.createContext(null);
_e.displayName = "OpenClosedContext";
var ne = (e => (e[e.Open = 1] = "Open",
e[e.Closed = 2] = "Closed",
e[e.Closing = 4] = "Closing",
e[e.Opening = 8] = "Opening",
e))(ne || {});
function Lt() {
    return i.useContext(_e)
}
function Qn({value: e, children: t}) {
    return O.createElement(_e.Provider, {
        value: e
    }, t)
}
function Xi({children: e}) {
    return O.createElement(_e.Provider, {
        value: null
    }, e)
}
function ei(e) {
    throw new Error("Unexpected object: " + e)
}
var I = (e => (e[e.First = 0] = "First",
e[e.Previous = 1] = "Previous",
e[e.Next = 2] = "Next",
e[e.Last = 3] = "Last",
e[e.Specific = 4] = "Specific",
e[e.Nothing = 5] = "Nothing",
e))(I || {});
function Me(e, t) {
    let n = t.resolveItems();
    if (n.length <= 0)
        return null;
    let r = t.resolveActiveIndex()
      , o = r ?? -1;
    switch (e.focus) {
    case 0:
        {
            for (let l = 0; l < n.length; ++l)
                if (!t.resolveDisabled(n[l], l, n))
                    return l;
            return r
        }
    case 1:
        {
            o === -1 && (o = n.length);
            for (let l = o - 1; l >= 0; --l)
                if (!t.resolveDisabled(n[l], l, n))
                    return l;
            return r
        }
    case 2:
        {
            for (let l = o + 1; l < n.length; ++l)
                if (!t.resolveDisabled(n[l], l, n))
                    return l;
            return r
        }
    case 3:
        {
            for (let l = n.length - 1; l >= 0; --l)
                if (!t.resolveDisabled(n[l], l, n))
                    return l;
            return r
        }
    case 4:
        {
            for (let l = 0; l < n.length; ++l)
                if (t.resolveId(n[l], l, n) === e.id)
                    return l;
            return r
        }
    case 5:
        return null;
    default:
        ei(e)
    }
}
function Jn(e) {
    let t = R(e)
      , n = i.useRef(!1);
    i.useEffect( () => (n.current = !1,
    () => {
        n.current = !0,
        $n( () => {
            n.current && t()
        }
        )
    }
    ), [t])
}
function ti() {
    let e = typeof document > "u";
    return "useSyncExternalStore"in at ? (t => t.useSyncExternalStore)(at)( () => () => {}
    , () => !1, () => !e) : !1
}
function Mt() {
    let e = ti()
      , [t,n] = i.useState(me.isHandoffComplete);
    return t && me.isHandoffComplete === !1 && n(!1),
    i.useEffect( () => {
        t !== !0 && n(!0)
    }
    , [t]),
    i.useEffect( () => me.handoff(), []),
    e ? !1 : t
}
let Zn = i.createContext(!1);
function ni() {
    return i.useContext(Zn)
}
function Qi(e) {
    return O.createElement(Zn.Provider, {
        value: e.force
    }, e.children)
}
function ri(e) {
    let t = ni()
      , n = i.useContext(tr)
      , [r,o] = i.useState( () => {
        var l;
        if (!t && n !== null)
            return (l = n.current) != null ? l : null;
        if (me.isServer)
            return null;
        let s = e == null ? void 0 : e.getElementById("headlessui-portal-root");
        if (s)
            return s;
        if (e === null)
            return null;
        let a = e.createElement("div");
        return a.setAttribute("id", "headlessui-portal-root"),
        e.body.appendChild(a)
    }
    );
    return i.useEffect( () => {
        r !== null && (e != null && e.body.contains(r) || e == null || e.body.appendChild(r))
    }
    , [r, e]),
    i.useEffect( () => {
        t || n !== null && o(n.current)
    }
    , [n, o, t]),
    r
}
let er = i.Fragment
  , oi = q(function(e, t) {
    let {ownerDocument: n=null, ...r} = e
      , o = i.useRef(null)
      , l = te(bo(f => {
        o.current = f
    }
    ), t)
      , s = ht(o)
      , a = n ?? s
      , u = ri(a)
      , [c] = i.useState( () => {
        var f;
        return me.isServer ? null : (f = a == null ? void 0 : a.createElement("div")) != null ? f : null
    }
    )
      , d = i.useContext(Et)
      , m = Mt();
    A( () => {
        !u || !c || u.contains(c) || (c.setAttribute("data-headlessui-portal", ""),
        u.appendChild(c))
    }
    , [u, c]),
    A( () => {
        if (c && d)
            return d.register(c)
    }
    , [d, c]),
    Jn( () => {
        var f;
        !u || !c || (Ct(c) && u.contains(c) && u.removeChild(c),
        u.childNodes.length <= 0 && ((f = u.parentElement) == null || f.removeChild(u)))
    }
    );
    let v = Y();
    return m ? !u || !c ? null : re.createPortal(v({
        ourProps: {
            ref: l
        },
        theirProps: r,
        slot: {},
        defaultTag: er,
        name: "Portal"
    }), c) : null
});
function li(e, t) {
    let n = te(t)
      , {enabled: r=!0, ownerDocument: o, ...l} = e
      , s = Y();
    return r ? O.createElement(oi, {
        ...l,
        ownerDocument: o,
        ref: n
    }) : s({
        ourProps: {
            ref: n
        },
        theirProps: l,
        slot: {},
        defaultTag: er,
        name: "Portal"
    })
}
let ii = i.Fragment
  , tr = i.createContext(null);
function ai(e, t) {
    let {target: n, ...r} = e
      , o = {
        ref: te(t)
    }
      , l = Y();
    return O.createElement(tr.Provider, {
        value: n
    }, l({
        ourProps: o,
        theirProps: r,
        defaultTag: ii,
        name: "Popover.Group"
    }))
}
let Et = i.createContext(null);
function Ji() {
    let e = i.useContext(Et)
      , t = i.useRef([])
      , n = R(l => (t.current.push(l),
    e && e.register(l),
    () => r(l)))
      , r = R(l => {
        let s = t.current.indexOf(l);
        s !== -1 && t.current.splice(s, 1),
        e && e.unregister(l)
    }
    )
      , o = i.useMemo( () => ({
        register: n,
        unregister: r,
        portals: t
    }), [n, r, t]);
    return [t, i.useMemo( () => function({children: l}) {
        return O.createElement(Et.Provider, {
            value: o
        }, l)
    }
    , [o])]
}
let si = q(li)
  , ui = q(ai)
  , ci = Object.assign(si, {
    Group: ui
});
function fi() {
    let e = i.useRef(!1);
    return A( () => (e.current = !0,
    () => {
        e.current = !1
    }
    ), []),
    e
}
function nr(e) {
    var t;
    return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || ((t = e.as) != null ? t : or) !== i.Fragment || O.Children.count(e.children) === 1
}
let Be = i.createContext(null);
Be.displayName = "TransitionContext";
var di = (e => (e.Visible = "visible",
e.Hidden = "hidden",
e))(di || {});
function pi() {
    let e = i.useContext(Be);
    if (e === null)
        throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    return e
}
function vi() {
    let e = i.useContext(We);
    if (e === null)
        throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    return e
}
let We = i.createContext(null);
We.displayName = "NestingContext";
function Ue(e) {
    return "children"in e ? Ue(e.children) : e.current.filter( ({el: t}) => t.current !== null).filter( ({state: t}) => t === "visible").length > 0
}
function rr(e, t) {
    let n = he(e)
      , r = i.useRef([])
      , o = fi()
      , l = ye()
      , s = R( (f, p=ue.Hidden) => {
        let g = r.current.findIndex( ({el: h}) => h === f);
        g !== -1 && (Z(p, {
            [ue.Unmount]() {
                r.current.splice(g, 1)
            },
            [ue.Hidden]() {
                r.current[g].state = "hidden"
            }
        }),
        l.microTask( () => {
            var h;
            !Ue(r) && o.current && ((h = n.current) == null || h.call(n))
        }
        ))
    }
    )
      , a = R(f => {
        let p = r.current.find( ({el: g}) => g === f);
        return p ? p.state !== "visible" && (p.state = "visible") : r.current.push({
            el: f,
            state: "visible"
        }),
        () => s(f, ue.Unmount)
    }
    )
      , u = i.useRef([])
      , c = i.useRef(Promise.resolve())
      , d = i.useRef({
        enter: [],
        leave: []
    })
      , m = R( (f, p, g) => {
        u.current.splice(0),
        t && (t.chains.current[p] = t.chains.current[p].filter( ([h]) => h !== f)),
        t == null || t.chains.current[p].push([f, new Promise(h => {
            u.current.push(h)
        }
        )]),
        t == null || t.chains.current[p].push([f, new Promise(h => {
            Promise.all(d.current[p].map( ([$,E]) => E)).then( () => h())
        }
        )]),
        p === "enter" ? c.current = c.current.then( () => t == null ? void 0 : t.wait.current).then( () => g(p)) : g(p)
    }
    )
      , v = R( (f, p, g) => {
        Promise.all(d.current[p].splice(0).map( ([h,$]) => $)).then( () => {
            var h;
            (h = u.current.shift()) == null || h()
        }
        ).then( () => g(p))
    }
    );
    return i.useMemo( () => ({
        children: r,
        register: a,
        unregister: s,
        onStart: m,
        onStop: v,
        wait: c,
        chains: d
    }), [a, s, r, m, v, d, c])
}
let or = i.Fragment
  , lr = ke.RenderStrategy;
function mi(e, t) {
    var n, r;
    let {transition: o=!0, beforeEnter: l, afterEnter: s, beforeLeave: a, afterLeave: u, enter: c, enterFrom: d, enterTo: m, entered: v, leave: f, leaveFrom: p, leaveTo: g, ...h} = e
      , [$,E] = i.useState(null)
      , b = i.useRef(null)
      , y = nr(e)
      , w = te(...y ? [b, t, E] : t === null ? [] : [t])
      , T = (n = h.unmount) == null || n ? ue.Unmount : ue.Hidden
      , {show: F, appear: N, initial: K} = pi()
      , [x,P] = i.useState(F ? "visible" : "hidden")
      , U = vi()
      , {register: k, unregister: M} = U;
    A( () => k(b), [k, b]),
    A( () => {
        if (T === ue.Hidden && b.current) {
            if (F && x !== "visible") {
                P("visible");
                return
            }
            return Z(x, {
                hidden: () => M(b),
                visible: () => k(b)
            })
        }
    }
    , [x, b, k, M, F, T]);
    let C = Mt();
    A( () => {
        if (y && C && x === "visible" && b.current === null)
            throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
    }
    , [b, x, C, y]);
    let D = K && !N
      , z = N && F && K
      , L = i.useRef(!1)
      , H = rr( () => {
        L.current || (P("hidden"),
        M(b))
    }
    , U)
      , j = R(S => {
        L.current = !0;
        let W = S ? "enter" : "leave";
        H.onStart(b, W, X => {
            X === "enter" ? l == null || l() : X === "leave" && (a == null || a())
        }
        )
    }
    )
      , ie = R(S => {
        let W = S ? "enter" : "leave";
        L.current = !1,
        H.onStop(b, W, X => {
            X === "enter" ? s == null || s() : X === "leave" && (u == null || u())
        }
        ),
        W === "leave" && !Ue(H) && (P("hidden"),
        M(b))
    }
    );
    i.useEffect( () => {
        y && o || (j(F),
        ie(F))
    }
    , [F, y, o]);
    let B = !(!o || !y || !C || D)
      , [,_] = Gn(B, $, F, {
        start: j,
        end: ie
    })
      , Ge = se({
        ref: w,
        className: ((r = pt(h.className, z && c, z && d, _.enter && c, _.enter && _.closed && d, _.enter && !_.closed && m, _.leave && f, _.leave && !_.closed && p, _.leave && _.closed && g, !_.transition && F && v)) == null ? void 0 : r.trim()) || void 0,
        ...Vn(_)
    })
      , fe = 0;
    x === "visible" && (fe |= ne.Open),
    x === "hidden" && (fe |= ne.Closed),
    F && x === "hidden" && (fe |= ne.Opening),
    !F && x === "visible" && (fe |= ne.Closing);
    let Ke = Y();
    return O.createElement(We.Provider, {
        value: H
    }, O.createElement(Qn, {
        value: fe
    }, Ke({
        ourProps: Ge,
        theirProps: h,
        defaultTag: or,
        features: lr,
        visible: x === "visible",
        name: "Transition.Child"
    })))
}
function gi(e, t) {
    let {show: n, appear: r=!1, unmount: o=!0, ...l} = e
      , s = i.useRef(null)
      , a = nr(e)
      , u = te(...a ? [s, t] : t === null ? [] : [t]);
    Mt();
    let c = Lt();
    if (n === void 0 && c !== null && (n = (c & ne.Open) === ne.Open),
    n === void 0)
        throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
    let[d,m] = i.useState(n ? "visible" : "hidden")
      , v = rr( () => {
        n || m("hidden")
    }
    )
      , [f,p] = i.useState(!0)
      , g = i.useRef([n]);
    A( () => {
        f !== !1 && g.current[g.current.length - 1] !== n && (g.current.push(n),
        p(!1))
    }
    , [g, n]);
    let h = i.useMemo( () => ({
        show: n,
        appear: r,
        initial: f
    }), [n, r, f]);
    A( () => {
        n ? m("visible") : !Ue(v) && s.current !== null && m("hidden")
    }
    , [n, v]);
    let $ = {
        unmount: o
    }
      , E = R( () => {
        var w;
        f && p(!1),
        (w = e.beforeEnter) == null || w.call(e)
    }
    )
      , b = R( () => {
        var w;
        f && p(!1),
        (w = e.beforeLeave) == null || w.call(e)
    }
    )
      , y = Y();
    return O.createElement(We.Provider, {
        value: v
    }, O.createElement(Be.Provider, {
        value: h
    }, y({
        ourProps: {
            ...$,
            as: i.Fragment,
            children: O.createElement(ir, {
                ref: u,
                ...$,
                ...l,
                beforeEnter: E,
                beforeLeave: b
            })
        },
        theirProps: {},
        defaultTag: i.Fragment,
        features: lr,
        visible: d === "visible",
        name: "Transition"
    })))
}
function hi(e, t) {
    let n = i.useContext(Be) !== null
      , r = Lt() !== null;
    return O.createElement(O.Fragment, null, !n && r ? O.createElement($t, {
        ref: t,
        ...e
    }) : O.createElement(ir, {
        ref: t,
        ...e
    }))
}
let $t = q(gi)
  , ir = q(mi)
  , bi = q(hi)
  , Zi = Object.assign($t, {
    Child: bi,
    Root: $t
});
function Ei(e, t) {
    let n = i.useRef({
        left: 0,
        top: 0
    });
    if (A( () => {
        if (!t)
            return;
        let o = t.getBoundingClientRect();
        o && (n.current = o)
    }
    , [e, t]),
    t == null || !e || t === document.activeElement)
        return !1;
    let r = t.getBoundingClientRect();
    return r.top !== n.current.top || r.left !== n.current.left
}
let rn = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function on(e) {
    var t, n;
    let r = (t = e.innerText) != null ? t : ""
      , o = e.cloneNode(!0);
    if (!ae(o))
        return r;
    let l = !1;
    for (let a of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
        a.remove(),
        l = !0;
    let s = l ? (n = o.innerText) != null ? n : "" : r;
    return rn.test(s) && (s = s.replace(rn, "")),
    s
}
function $i(e) {
    let t = e.getAttribute("aria-label");
    if (typeof t == "string")
        return t.trim();
    let n = e.getAttribute("aria-labelledby");
    if (n) {
        let r = n.split(" ").map(o => {
            let l = document.getElementById(o);
            if (l) {
                let s = l.getAttribute("aria-label");
                return typeof s == "string" ? s.trim() : on(l).trim()
            }
            return null
        }
        ).filter(Boolean);
        if (r.length > 0)
            return r.join(", ")
    }
    return on(e).trim()
}
function yi(e) {
    let t = i.useRef("")
      , n = i.useRef("");
    return R( () => {
        let r = e.current;
        if (!r)
            return "";
        let o = r.innerText;
        if (t.current === o)
            return n.current;
        let l = $i(r).trim().toLowerCase();
        return t.current = o,
        n.current = l,
        l
    }
    )
}
var wi = Object.defineProperty
  , xi = (e, t, n) => t in e ? wi(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n
  , ln = (e, t, n) => (xi(e, typeof t != "symbol" ? t + "" : t, n),
n)
  , G = (e => (e[e.Open = 0] = "Open",
e[e.Closed = 1] = "Closed",
e))(G || {})
  , le = (e => (e[e.Single = 0] = "Single",
e[e.Multi = 1] = "Multi",
e))(le || {})
  , yt = (e => (e[e.Pointer = 0] = "Pointer",
e[e.Other = 1] = "Other",
e))(yt || {})
  , ar = (e => (e[e.OpenListbox = 0] = "OpenListbox",
e[e.CloseListbox = 1] = "CloseListbox",
e[e.GoToOption = 2] = "GoToOption",
e[e.Search = 3] = "Search",
e[e.ClearSearch = 4] = "ClearSearch",
e[e.RegisterOptions = 5] = "RegisterOptions",
e[e.UnregisterOptions = 6] = "UnregisterOptions",
e[e.SetButtonElement = 7] = "SetButtonElement",
e[e.SetOptionsElement = 8] = "SetOptionsElement",
e[e.SortOptions = 9] = "SortOptions",
e))(ar || {});
function an(e, t=n => n) {
    let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null
      , r = Wn(t(e.options.slice()), l => l.dataRef.current.domRef.current)
      , o = n ? r.indexOf(n) : null;
    return o === -1 && (o = null),
    {
        options: r,
        activeOptionIndex: o
    }
}
let Si = {
    1(e) {
        return e.dataRef.current.disabled || e.listboxState === 1 ? e : {
            ...e,
            activeOptionIndex: null,
            pendingFocus: {
                focus: I.Nothing
            },
            listboxState: 1,
            __demoMode: !1
        }
    },
    0(e, t) {
        if (e.dataRef.current.disabled || e.listboxState === 0)
            return e;
        let n = e.activeOptionIndex
          , {isSelected: r} = e.dataRef.current
          , o = e.options.findIndex(l => r(l.dataRef.current.value));
        return o !== -1 && (n = o),
        {
            ...e,
            pendingFocus: t.focus,
            listboxState: 0,
            activeOptionIndex: n,
            __demoMode: !1
        }
    },
    2(e, t) {
        var n, r, o, l, s;
        if (e.dataRef.current.disabled || e.listboxState === 1)
            return e;
        let a = {
            ...e,
            searchQuery: "",
            activationTrigger: (n = t.trigger) != null ? n : 1,
            __demoMode: !1
        };
        if (t.focus === I.Nothing)
            return {
                ...a,
                activeOptionIndex: null
            };
        if (t.focus === I.Specific)
            return {
                ...a,
                activeOptionIndex: e.options.findIndex(d => d.id === t.id)
            };
        if (t.focus === I.Previous) {
            let d = e.activeOptionIndex;
            if (d !== null) {
                let m = e.options[d].dataRef.current.domRef
                  , v = Me(t, {
                    resolveItems: () => e.options,
                    resolveActiveIndex: () => e.activeOptionIndex,
                    resolveId: f => f.id,
                    resolveDisabled: f => f.dataRef.current.disabled
                });
                if (v !== null) {
                    let f = e.options[v].dataRef.current.domRef;
                    if (((r = m.current) == null ? void 0 : r.previousElementSibling) === f.current || ((o = f.current) == null ? void 0 : o.previousElementSibling) === null)
                        return {
                            ...a,
                            activeOptionIndex: v
                        }
                }
            }
        } else if (t.focus === I.Next) {
            let d = e.activeOptionIndex;
            if (d !== null) {
                let m = e.options[d].dataRef.current.domRef
                  , v = Me(t, {
                    resolveItems: () => e.options,
                    resolveActiveIndex: () => e.activeOptionIndex,
                    resolveId: f => f.id,
                    resolveDisabled: f => f.dataRef.current.disabled
                });
                if (v !== null) {
                    let f = e.options[v].dataRef.current.domRef;
                    if (((l = m.current) == null ? void 0 : l.nextElementSibling) === f.current || ((s = f.current) == null ? void 0 : s.nextElementSibling) === null)
                        return {
                            ...a,
                            activeOptionIndex: v
                        }
                }
            }
        }
        let u = an(e)
          , c = Me(t, {
            resolveItems: () => u.options,
            resolveActiveIndex: () => u.activeOptionIndex,
            resolveId: d => d.id,
            resolveDisabled: d => d.dataRef.current.disabled
        });
        return {
            ...a,
            ...u,
            activeOptionIndex: c
        }
    },
    3: (e, t) => {
        if (e.dataRef.current.disabled || e.listboxState === 1)
            return e;
        let n = e.searchQuery !== "" ? 0 : 1
          , r = e.searchQuery + t.value.toLowerCase()
          , o = (e.activeOptionIndex !== null ? e.options.slice(e.activeOptionIndex + n).concat(e.options.slice(0, e.activeOptionIndex + n)) : e.options).find(s => {
            var a;
            return !s.dataRef.current.disabled && ((a = s.dataRef.current.textValue) == null ? void 0 : a.startsWith(r))
        }
        )
          , l = o ? e.options.indexOf(o) : -1;
        return l === -1 || l === e.activeOptionIndex ? {
            ...e,
            searchQuery: r
        } : {
            ...e,
            searchQuery: r,
            activeOptionIndex: l,
            activationTrigger: 1
        }
    }
    ,
    4(e) {
        return e.dataRef.current.disabled || e.listboxState === 1 || e.searchQuery === "" ? e : {
            ...e,
            searchQuery: ""
        }
    },
    5: (e, t) => {
        let n = e.options.concat(t.options)
          , r = e.activeOptionIndex;
        if (e.pendingFocus.focus !== I.Nothing && (r = Me(e.pendingFocus, {
            resolveItems: () => n,
            resolveActiveIndex: () => e.activeOptionIndex,
            resolveId: o => o.id,
            resolveDisabled: o => o.dataRef.current.disabled
        })),
        e.activeOptionIndex === null) {
            let {isSelected: o} = e.dataRef.current;
            if (o) {
                let l = n.findIndex(s => o == null ? void 0 : o(s.dataRef.current.value));
                l !== -1 && (r = l)
            }
        }
        return {
            ...e,
            options: n,
            activeOptionIndex: r,
            pendingFocus: {
                focus: I.Nothing
            },
            pendingShouldSort: !0
        }
    }
    ,
    6: (e, t) => {
        let n = e.options
          , r = []
          , o = new Set(t.options);
        for (let[l,s] of n.entries())
            if (o.has(s.id) && (r.push(l),
            o.delete(s.id),
            o.size === 0))
                break;
        if (r.length > 0) {
            n = n.slice();
            for (let l of r.reverse())
                n.splice(l, 1)
        }
        return {
            ...e,
            options: n,
            activationTrigger: 1
        }
    }
    ,
    7: (e, t) => e.buttonElement === t.element ? e : {
        ...e,
        buttonElement: t.element
    },
    8: (e, t) => e.optionsElement === t.element ? e : {
        ...e,
        optionsElement: t.element
    },
    9: e => e.pendingShouldSort ? {
        ...e,
        ...an(e),
        pendingShouldSort: !1
    } : e
};
class It extends Dn {
    constructor(t) {
        super(t),
        ln(this, "actions", {
            onChange: n => {
                let {onChange: r, compare: o, mode: l, value: s} = this.state.dataRef.current;
                return Z(l, {
                    0: () => r == null ? void 0 : r(n),
                    1: () => {
                        let a = s.slice()
                          , u = a.findIndex(c => o(c, n));
                        return u === -1 ? a.push(n) : a.splice(u, 1),
                        r == null ? void 0 : r(a)
                    }
                })
            }
            ,
            registerOption: tt( () => {
                let n = []
                  , r = new Set;
                return [ (o, l) => {
                    r.has(l) || (r.add(l),
                    n.push({
                        id: o,
                        dataRef: l
                    }))
                }
                , () => (r.clear(),
                this.send({
                    type: 5,
                    options: n.splice(0)
                }))]
            }
            ),
            unregisterOption: tt( () => {
                let n = [];
                return [r => n.push(r), () => {
                    this.send({
                        type: 6,
                        options: n.splice(0)
                    })
                }
                ]
            }
            ),
            goToOption: tt( () => {
                let n = null;
                return [ (r, o) => {
                    n = {
                        type: 2,
                        ...r,
                        trigger: o
                    }
                }
                , () => n && this.send(n)]
            }
            ),
            closeListbox: () => {
                this.send({
                    type: 1
                })
            }
            ,
            openListbox: n => {
                this.send({
                    type: 0,
                    focus: n
                })
            }
            ,
            selectActiveOption: () => {
                if (this.state.activeOptionIndex !== null) {
                    let {dataRef: n, id: r} = this.state.options[this.state.activeOptionIndex];
                    this.actions.onChange(n.current.value),
                    this.send({
                        type: 2,
                        focus: I.Specific,
                        id: r
                    })
                }
            }
            ,
            selectOption: n => {
                let r = this.state.options.find(o => o.id === n);
                r && this.actions.onChange(r.dataRef.current.value)
            }
            ,
            search: n => {
                this.send({
                    type: 3,
                    value: n
                })
            }
            ,
            clearSearch: () => {
                this.send({
                    type: 4
                })
            }
            ,
            setButtonElement: n => {
                this.send({
                    type: 7,
                    element: n
                })
            }
            ,
            setOptionsElement: n => {
                this.send({
                    type: 8,
                    element: n
                })
            }
        }),
        ln(this, "selectors", {
            activeDescendantId(n) {
                var r;
                let o = n.activeOptionIndex
                  , l = n.options;
                return o === null || (r = l[o]) == null ? void 0 : r.id
            },
            isActive(n, r) {
                var o;
                let l = n.activeOptionIndex
                  , s = n.options;
                return l !== null ? ((o = s[l]) == null ? void 0 : o.id) === r : !1
            },
            shouldScrollIntoView(n, r) {
                return n.__demoMode || n.listboxState !== 0 || n.activationTrigger === 0 ? !1 : this.isActive(n, r)
            }
        }),
        this.on(5, () => {
            requestAnimationFrame( () => {
                this.send({
                    type: 9
                })
            }
            )
        }
        );
        {
            let n = this.state.id
              , r = Rt.get(null);
            this.disposables.add(r.on(Hn.Push, o => {
                !r.selectors.isTop(o, n) && this.state.listboxState === 0 && this.actions.closeListbox()
            }
            )),
            this.on(0, () => r.actions.push(n)),
            this.on(1, () => r.actions.pop(n))
        }
    }
    static new({id: t, __demoMode: n=!1}) {
        return new It({
            id: t,
            dataRef: {
                current: {}
            },
            listboxState: n ? 0 : 1,
            options: [],
            searchQuery: "",
            activeOptionIndex: null,
            activationTrigger: 1,
            buttonElement: null,
            optionsElement: null,
            pendingShouldSort: !1,
            pendingFocus: {
                focus: I.Nothing
            },
            __demoMode: n
        })
    }
    reduce(t, n) {
        return Z(n.type, Si, t, n)
    }
}
const sr = i.createContext(null);
function At(e) {
    let t = i.useContext(sr);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, ur),
        n
    }
    return t
}
function ur({id: e, __demoMode: t=!1}) {
    let n = i.useMemo( () => It.new({
        id: e,
        __demoMode: t
    }), []);
    return Jn( () => n.dispose()),
    n
}
let Ve = i.createContext(null);
Ve.displayName = "ListboxDataContext";
function Te(e) {
    let t = i.useContext(Ve);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, Te),
        n
    }
    return t
}
let Oi = i.Fragment;
function Ci(e, t) {
    let n = i.useId()
      , r = St()
      , {value: o, defaultValue: l, form: s, name: a, onChange: u, by: c, invalid: d=!1, disabled: m=r || !1, horizontal: v=!1, multiple: f=!1, __demoMode: p=!1, ...g} = e;
    const h = v ? "horizontal" : "vertical";
    let $ = te(t)
      , E = no(l)
      , [b=f ? [] : void 0,y] = to(o, u, E)
      , w = ur({
        id: n,
        __demoMode: p
    })
      , T = i.useRef({
        static: !1,
        hold: !1
    })
      , F = i.useRef(new Map)
      , N = Fo(c)
      , K = i.useCallback(B => Z(x.mode, {
        [le.Multi]: () => b.some(_ => N(_, B)),
        [le.Single]: () => N(b, B)
    }), [b])
      , x = i.useMemo( () => ({
        value: b,
        disabled: m,
        invalid: d,
        mode: f ? le.Multi : le.Single,
        orientation: h,
        onChange: y,
        compare: N,
        isSelected: K,
        optionsPropsRef: T,
        listRef: F
    }), [b, m, d, f, h, y, N, K, T, F]);
    A( () => {
        w.state.dataRef.current = x
    }
    , [x]);
    let P = J(w, B => B.listboxState)
      , U = Rt.get(null)
      , k = J(U, i.useCallback(B => U.selectors.isTop(B, n), [U, n]))
      , [M,C] = J(w, B => [B.buttonElement, B.optionsElement]);
    rl(k, [M, C], (B, _) => {
        w.send({
            type: ar.CloseListbox
        }),
        Ft(_, Tt.Loose) || (B.preventDefault(),
        M == null || M.focus())
    }
    );
    let D = i.useMemo( () => ({
        open: P === G.Open,
        disabled: m,
        invalid: d,
        value: b
    }), [P, m, d, b])
      , [z,L] = xo({
        inherit: !0
    })
      , H = {
        ref: $
    }
      , j = i.useCallback( () => {
        if (E !== void 0)
            return y == null ? void 0 : y(E)
    }
    , [y, E])
      , ie = Y();
    return O.createElement(L, {
        value: z,
        props: {
            htmlFor: M == null ? void 0 : M.id
        },
        slot: {
            open: P === G.Open,
            disabled: m
        }
    }, O.createElement(Xl, null, O.createElement(sr.Provider, {
        value: w
    }, O.createElement(Ve.Provider, {
        value: x
    }, O.createElement(Qn, {
        value: Z(P, {
            [G.Open]: ne.Open,
            [G.Closed]: ne.Closed
        })
    }, a != null && b != null && O.createElement(so, {
        disabled: m,
        data: {
            [a]: b
        },
        form: s,
        onReset: j
    }), ie({
        ourProps: H,
        theirProps: g,
        slot: D,
        defaultTag: Oi,
        name: "Listbox"
    }))))))
}
let Ri = "button";
function Ti(e, t) {
    let n = i.useId()
      , r = Rn()
      , o = Te("Listbox.Button")
      , l = At("Listbox.Button")
      , {id: s=r || `headlessui-listbox-button-${n}`, disabled: a=o.disabled || !1, autoFocus: u=!1, ...c} = e
      , d = te(t, Kl(), l.actions.setButtonElement)
      , m = ql()
      , [v,f,p] = J(l, C => [C.listboxState, C.buttonElement, C.optionsElement])
      , g = v === G.Open;
    il(g, {
        trigger: f,
        action: i.useCallback(C => {
            if (f != null && f.contains(C.target))
                return Le.Ignore;
            let D = C.target.closest('[role="option"]:not([data-disabled])');
            return ae(D) ? Le.Select(D) : p != null && p.contains(C.target) ? Le.Ignore : Le.Close
        }
        , [f, p]),
        close: l.actions.closeListbox,
        select: l.actions.selectActiveOption
    });
    let h = R(C => {
        switch (C.key) {
        case V.Enter:
            ro(C.currentTarget);
            break;
        case V.Space:
        case V.ArrowDown:
            C.preventDefault(),
            l.actions.openListbox({
                focus: o.value ? I.Nothing : I.First
            });
            break;
        case V.ArrowUp:
            C.preventDefault(),
            l.actions.openListbox({
                focus: o.value ? I.Nothing : I.Last
            });
            break
        }
    }
    )
      , $ = R(C => {
        switch (C.key) {
        case V.Space:
            C.preventDefault();
            break
        }
    }
    )
      , E = R(C => {
        var D;
        if (C.button === 0) {
            if (go(C.currentTarget))
                return C.preventDefault();
            l.state.listboxState === G.Open ? (re.flushSync( () => l.actions.closeListbox()),
            (D = l.state.buttonElement) == null || D.focus({
                preventScroll: !0
            })) : (C.preventDefault(),
            l.actions.openListbox({
                focus: I.Nothing
            }))
        }
    }
    )
      , b = R(C => C.preventDefault())
      , y = In([s])
      , w = Eo()
      , {isFocusVisible: T, focusProps: F} = Ur({
        autoFocus: u
    })
      , {isHovered: N, hoverProps: K} = Wr({
        isDisabled: a
    })
      , {pressed: x, pressProps: P} = zr({
        disabled: a
    })
      , U = i.useMemo( () => ({
        open: v === G.Open,
        active: x || v === G.Open,
        disabled: a,
        invalid: o.invalid,
        value: o.value,
        hover: N,
        focus: T,
        autofocus: u
    }), [v, o.value, a, N, T, x, o.invalid, u])
      , k = J(l, C => C.listboxState === G.Open)
      , M = wn(m(), {
        ref: d,
        id: s,
        type: al(e, f),
        "aria-haspopup": "listbox",
        "aria-controls": p == null ? void 0 : p.id,
        "aria-expanded": k,
        "aria-labelledby": y,
        "aria-describedby": w,
        disabled: a || void 0,
        autoFocus: u,
        onKeyDown: h,
        onKeyUp: $,
        onKeyPress: b,
        onPointerDown: E
    }, F, K, P);
    return Y()({
        ourProps: M,
        theirProps: c,
        slot: U,
        defaultTag: Ri,
        name: "Listbox.Button"
    })
}
let cr = i.createContext(!1)
  , Fi = "div"
  , Pi = ke.RenderStrategy | ke.Static;
function Li(e, t) {
    let n = i.useId()
      , {id: r=`headlessui-listbox-options-${n}`, anchor: o, portal: l=!1, modal: s=!0, transition: a=!1, ...u} = e
      , c = Gl(o)
      , [d,m] = i.useState(null);
    c && (l = !0);
    let v = Te("Listbox.Options")
      , f = At("Listbox.Options")
      , [p,g,h,$] = J(f, S => [S.listboxState, S.buttonElement, S.optionsElement, S.__demoMode])
      , E = ht(g)
      , b = ht(h)
      , y = Lt()
      , [w,T] = Gn(a, d, y !== null ? (y & ne.Open) === ne.Open : p === G.Open);
    Vo(w, g, f.actions.closeListbox);
    let F = $ ? !1 : s && p === G.Open;
    ml(F, b);
    let N = $ ? !1 : s && p === G.Open;
    Uo(N, {
        allowed: i.useCallback( () => [g, h], [g, h])
    });
    let K = p !== G.Open
      , x = Ei(K, g) ? !1 : w
      , P = w && p === G.Closed
      , U = Zl(P, v.value)
      , k = R(S => v.compare(U, S))
      , M = J(f, S => {
        var W;
        if (c == null || !((W = c == null ? void 0 : c.to) != null && W.includes("selection")))
            return null;
        let X = S.options.findIndex(qe => k(qe.dataRef.current.value));
        return X === -1 && (X = 0),
        X
    }
    )
      , C = ( () => {
        if (c == null)
            return;
        if (M === null)
            return {
                ...c,
                inner: void 0
            };
        let S = Array.from(v.listRef.current.values());
        return {
            ...c,
            inner: {
                listRef: {
                    current: S
                },
                index: M
            }
        }
    }
    )()
      , [D,z] = zl(C)
      , L = Yl()
      , H = te(t, c ? D : null, f.actions.setOptionsElement, m)
      , j = ye();
    i.useEffect( () => {
        var S;
        let W = h;
        W && p === G.Open && W !== ((S = $e(W)) == null ? void 0 : S.activeElement) && (W == null || W.focus({
            preventScroll: !0
        }))
    }
    , [p, h]);
    let ie = R(S => {
        var W, X;
        switch (j.dispose(),
        S.key) {
        case V.Space:
            if (f.state.searchQuery !== "")
                return S.preventDefault(),
                S.stopPropagation(),
                f.actions.search(S.key);
        case V.Enter:
            if (S.preventDefault(),
            S.stopPropagation(),
            f.state.activeOptionIndex !== null) {
                let {dataRef: qe} = f.state.options[f.state.activeOptionIndex];
                f.actions.onChange(qe.current.value)
            }
            v.mode === le.Single && (re.flushSync( () => f.actions.closeListbox()),
            (W = f.state.buttonElement) == null || W.focus({
                preventScroll: !0
            }));
            break;
        case Z(v.orientation, {
            vertical: V.ArrowDown,
            horizontal: V.ArrowRight
        }):
            return S.preventDefault(),
            S.stopPropagation(),
            f.actions.goToOption({
                focus: I.Next
            });
        case Z(v.orientation, {
            vertical: V.ArrowUp,
            horizontal: V.ArrowLeft
        }):
            return S.preventDefault(),
            S.stopPropagation(),
            f.actions.goToOption({
                focus: I.Previous
            });
        case V.Home:
        case V.PageUp:
            return S.preventDefault(),
            S.stopPropagation(),
            f.actions.goToOption({
                focus: I.First
            });
        case V.End:
        case V.PageDown:
            return S.preventDefault(),
            S.stopPropagation(),
            f.actions.goToOption({
                focus: I.Last
            });
        case V.Escape:
            S.preventDefault(),
            S.stopPropagation(),
            re.flushSync( () => f.actions.closeListbox()),
            (X = f.state.buttonElement) == null || X.focus({
                preventScroll: !0
            });
            return;
        case V.Tab:
            S.preventDefault(),
            S.stopPropagation(),
            re.flushSync( () => f.actions.closeListbox()),
            Zo(f.state.buttonElement, S.shiftKey ? gt.Previous : gt.Next);
            break;
        default:
            S.key.length === 1 && (f.actions.search(S.key),
            j.setTimeout( () => f.actions.clearSearch(), 350));
            break
        }
    }
    )
      , B = J(f, S => {
        var W;
        return (W = S.buttonElement) == null ? void 0 : W.id
    }
    )
      , _ = i.useMemo( () => ({
        open: p === G.Open
    }), [p])
      , Ge = wn(c ? L() : {}, {
        id: r,
        ref: H,
        "aria-activedescendant": J(f, f.selectors.activeDescendantId),
        "aria-multiselectable": v.mode === le.Multi ? !0 : void 0,
        "aria-labelledby": B,
        "aria-orientation": v.orientation,
        onKeyDown: ie,
        role: "listbox",
        tabIndex: p === G.Open ? 0 : void 0,
        style: {
            ...u.style,
            ...z,
            "--button-width": Lo(g, !0).width
        },
        ...Vn(T)
    })
      , fe = Y()
      , Ke = i.useMemo( () => v.mode === le.Multi ? v : {
        ...v,
        isSelected: k
    }, [v, k]);
    return O.createElement(ci, {
        enabled: l ? e.static || w : !1,
        ownerDocument: E
    }, O.createElement(Ve.Provider, {
        value: Ke
    }, fe({
        ourProps: Ge,
        theirProps: u,
        slot: _,
        defaultTag: Fi,
        features: Pi,
        visible: x,
        name: "Listbox.Options"
    })))
}
let Mi = "div";
function Ii(e, t) {
    let n = i.useId()
      , {id: r=`headlessui-listbox-option-${n}`, disabled: o=!1, value: l, ...s} = e
      , a = i.useContext(cr) === !0
      , u = Te("Listbox.Option")
      , c = At("Listbox.Option")
      , d = J(c, x => c.selectors.isActive(x, r))
      , m = u.isSelected(l)
      , v = i.useRef(null)
      , f = yi(v)
      , p = he({
        disabled: o,
        value: l,
        domRef: v,
        get textValue() {
            return f()
        }
    })
      , g = te(t, v, x => {
        x ? u.listRef.current.set(r, x) : u.listRef.current.delete(r)
    }
    )
      , h = J(c, x => c.selectors.shouldScrollIntoView(x, r));
    A( () => {
        if (h)
            return ee().requestAnimationFrame( () => {
                var x, P;
                (P = (x = v.current) == null ? void 0 : x.scrollIntoView) == null || P.call(x, {
                    block: "nearest"
                })
            }
            )
    }
    , [h, v]),
    A( () => {
        if (!a)
            return c.actions.registerOption(r, p),
            () => c.actions.unregisterOption(r)
    }
    , [p, r, a]);
    let $ = R(x => {
        var P;
        if (o)
            return x.preventDefault();
        c.actions.onChange(l),
        u.mode === le.Single && (re.flushSync( () => c.actions.closeListbox()),
        (P = c.state.buttonElement) == null || P.focus({
            preventScroll: !0
        }))
    }
    )
      , E = R( () => {
        if (o)
            return c.actions.goToOption({
                focus: I.Nothing
            });
        c.actions.goToOption({
            focus: I.Specific,
            id: r
        })
    }
    )
      , b = gl()
      , y = R(x => {
        b.update(x),
        !o && (d || c.actions.goToOption({
            focus: I.Specific,
            id: r
        }, yt.Pointer))
    }
    )
      , w = R(x => {
        b.wasMoved(x) && (o || d || c.actions.goToOption({
            focus: I.Specific,
            id: r
        }, yt.Pointer))
    }
    )
      , T = R(x => {
        b.wasMoved(x) && (o || d && c.actions.goToOption({
            focus: I.Nothing
        }))
    }
    )
      , F = i.useMemo( () => ({
        active: d,
        focus: d,
        selected: m,
        disabled: o,
        selectedOption: m && a
    }), [d, m, o, a])
      , N = a ? {} : {
        id: r,
        ref: g,
        role: "option",
        tabIndex: o === !0 ? void 0 : -1,
        "aria-disabled": o === !0 ? !0 : void 0,
        "aria-selected": m,
        disabled: void 0,
        onClick: $,
        onFocus: E,
        onPointerEnter: y,
        onMouseEnter: y,
        onPointerMove: w,
        onMouseMove: w,
        onPointerLeave: T,
        onMouseLeave: T
    }
      , K = Y();
    return !m && a ? null : K({
        ourProps: N,
        theirProps: s,
        slot: F,
        defaultTag: Mi,
        name: "Listbox.Option"
    })
}
let Ai = i.Fragment;
function ki(e, t) {
    let {options: n, placeholder: r, ...o} = e
      , l = {
        ref: te(t)
    }
      , s = Te("ListboxSelectedOption")
      , a = i.useMemo( () => ({}), [])
      , u = s.value === void 0 || s.value === null || s.mode === le.Multi && Array.isArray(s.value) && s.value.length === 0
      , c = Y();
    return O.createElement(cr.Provider, {
        value: !0
    }, c({
        ourProps: l,
        theirProps: {
            ...o,
            children: O.createElement(O.Fragment, null, r && u ? r : n)
        },
        slot: a,
        defaultTag: Ai,
        name: "ListboxSelectedOption"
    }))
}
let Di = q(Ci)
  , Ni = q(Ti)
  , Hi = Ro
  , ji = q(Li)
  , _i = q(Ii)
  , Bi = q(ki)
  , ea = Object.assign(Di, {
    Button: Ni,
    Label: Hi,
    Options: ji,
    Option: _i,
    SelectedOption: Bi
});
export {Ur as $, Ji as A, Uo as B, Rt as C, rl as D, ml as E, bi as F, Vo as G, Ki as H, _n as I, Gi as J, q as K, Y as L, Xi as M, Qi as N, ci as O, ui as P, ke as Q, Rn as R, J as S, gt as T, St as U, Ro as V, In as W, Eo as X, Wr as Y, Fo as Z, wn as _, V as a, xo as a0, no as a1, to as a2, ro as a3, so as a4, go as a5, Wn as a6, ea as a7, Ni as a8, ji as a9, Xl as aA, Qn as aB, Mn as aC, _i as aa, Dn as ab, tt as ac, Hn as ad, I as ae, Me as af, ql as ag, Kl as ah, il as ai, Le as aj, zr as ak, al, Gl as am, zl as an, Yl as ao, Gn as ap, Ei as aq, Zo as ar, zi as as, Vn as at, Lo as au, ee as av, yi as aw, gl as ax, Ft as ay, Tt as az, Cn as b, Ot as c, $e as d, ht as e, mt as f, nl as g, ae as h, pe as i, el as j, Jn as k, Mt as l, Xo as m, A as n, R as o, ye as p, fi as q, $n as r, he as s, Ne as t, Z as u, Ko as v, Lt as w, ne as x, te as y, Zi as z};
