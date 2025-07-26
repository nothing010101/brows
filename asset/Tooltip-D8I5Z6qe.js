import {g as Et, R as se, b as t, m as gt, i as At, h as kt, j as xt} from "./index-7qjuY_ZX.js";
import {a as Ot, c as at, o as Rt, f as Tt, s as Lt, b as Ct} from "./floating-ui.dom-nLN9p6gL.js";
var Ze = {
    exports: {}
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var ct;
function Nt() {
    return ct || (ct = 1,
    function(o) {
        (function() {
            var n = {}.hasOwnProperty;
            function d() {
                for (var a = "", p = 0; p < arguments.length; p++) {
                    var f = arguments[p];
                    f && (a = m(a, u(f)))
                }
                return a
            }
            function u(a) {
                if (typeof a == "string" || typeof a == "number")
                    return a;
                if (typeof a != "object")
                    return "";
                if (Array.isArray(a))
                    return d.apply(null, a);
                if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
                    return a.toString();
                var p = "";
                for (var f in a)
                    n.call(a, f) && a[f] && (p = m(p, f));
                return p
            }
            function m(a, p) {
                return p ? a ? a + " " + p : a + p : a
            }
            o.exports ? (d.default = d,
            o.exports = d) : window.classNames = d
        }
        )()
    }(Ze)),
    Ze.exports
}
var jt = Nt();
const et = Et(jt);
var it = {};
const $t = "react-tooltip-core-styles"
  , It = "react-tooltip-base-styles"
  , ut = {
    core: !1,
    base: !1
};
function dt({css: o, id: n=It, type: d="base", ref: u}) {
    var m, a;
    if (!o || typeof document > "u" || ut[d] || d === "core" && typeof process < "u" && (!((m = process == null ? void 0 : it) === null || m === void 0) && m.REACT_TOOLTIP_DISABLE_CORE_STYLES) || d !== "base" && typeof process < "u" && (!((a = process == null ? void 0 : it) === null || a === void 0) && a.REACT_TOOLTIP_DISABLE_BASE_STYLES))
        return;
    d === "core" && (n = $t),
    u || (u = {});
    const {insertAt: p} = u;
    if (document.getElementById(n))
        return;
    const f = document.head || document.getElementsByTagName("head")[0]
      , h = document.createElement("style");
    h.id = n,
    h.type = "text/css",
    p === "top" && f.firstChild ? f.insertBefore(h, f.firstChild) : f.appendChild(h),
    h.styleSheet ? h.styleSheet.cssText = o : h.appendChild(document.createTextNode(o)),
    ut[d] = !0
}
const ft = async ({elementReference: o=null, tooltipReference: n=null, tooltipArrowReference: d=null, place: u="top", offset: m=10, strategy: a="absolute", middlewares: p=[Rt(Number(m)), Tt({
    fallbackAxisSideDirection: "start"
}), Lt({
    padding: 5
})], border: f}) => {
    if (!o)
        return {
            tooltipStyles: {},
            tooltipArrowStyles: {},
            place: u
        };
    if (n === null)
        return {
            tooltipStyles: {},
            tooltipArrowStyles: {},
            place: u
        };
    const h = p;
    return d ? (h.push(Ct({
        element: d,
        padding: 5
    })),
    at(o, n, {
        placement: u,
        strategy: a,
        middleware: h
    }).then( ({x: D, y: q, placement: O, middlewareData: ae}) => {
        var P, N;
        const j = {
            left: `${D}px`,
            top: `${q}px`,
            border: f
        }
          , {x: F, y: z} = (P = ae.arrow) !== null && P !== void 0 ? P : {
            x: 0,
            y: 0
        }
          , J = (N = {
            top: "bottom",
            right: "left",
            bottom: "top",
            left: "right"
        }[O.split("-")[0]]) !== null && N !== void 0 ? N : "bottom"
          , K = f && {
            borderBottom: f,
            borderRight: f
        };
        let V = 0;
        if (f) {
            const Z = `${f}`.match(/(\d+)px/);
            V = Z != null && Z[1] ? Number(Z[1]) : 1
        }
        return {
            tooltipStyles: j,
            tooltipArrowStyles: {
                left: F != null ? `${F}px` : "",
                top: z != null ? `${z}px` : "",
                right: "",
                bottom: "",
                ...K,
                [J]: `-${4 + V}px`
            },
            place: O
        }
    }
    )) : at(o, n, {
        placement: "bottom",
        strategy: a,
        middleware: h
    }).then( ({x: D, y: q, placement: O}) => ({
        tooltipStyles: {
            left: `${D}px`,
            top: `${q}px`
        },
        tooltipArrowStyles: {},
        place: O
    }))
}
  , pt = (o, n) => !("CSS"in window && "supports"in window.CSS) || window.CSS.supports(o, n)
  , vt = (o, n, d) => {
    let u = null;
    const m = function(...a) {
        const p = () => {
            u = null
        }
        ;
        !u && (o.apply(this, a),
        u = setTimeout(p, n))
    };
    return m.cancel = () => {
        u && (clearTimeout(u),
        u = null)
    }
    ,
    m
}
  , mt = o => o !== null && !Array.isArray(o) && typeof o == "object"
  , tt = (o, n) => {
    if (o === n)
        return !0;
    if (Array.isArray(o) && Array.isArray(n))
        return o.length === n.length && o.every( (m, a) => tt(m, n[a]));
    if (Array.isArray(o) !== Array.isArray(n))
        return !1;
    if (!mt(o) || !mt(n))
        return o === n;
    const d = Object.keys(o)
      , u = Object.keys(n);
    return d.length === u.length && d.every(m => tt(o[m], n[m]))
}
  , Bt = o => {
    if (!(o instanceof HTMLElement || o instanceof SVGElement))
        return !1;
    const n = getComputedStyle(o);
    return ["overflow", "overflow-x", "overflow-y"].some(d => {
        const u = n.getPropertyValue(d);
        return u === "auto" || u === "scroll"
    }
    )
}
  , yt = o => {
    if (!o)
        return null;
    let n = o.parentElement;
    for (; n; ) {
        if (Bt(n))
            return n;
        n = n.parentElement
    }
    return document.scrollingElement || document.documentElement
}
  , Dt = typeof window < "u" ? t.useLayoutEffect : t.useEffect
  , C = o => {
    o.current && (clearTimeout(o.current),
    o.current = null)
}
  , qt = "DEFAULT_TOOLTIP_ID"
  , zt = {
    anchorRefs: new Set,
    activeAnchor: {
        current: null
    },
    attach: () => {}
    ,
    detach: () => {}
    ,
    setActiveAnchor: () => {}
}
  , Kt = t.createContext({
    getTooltipData: () => zt
});
function ht(o=qt) {
    return t.useContext(Kt).getTooltipData(o)
}
var Se = {
    tooltip: "core-styles-module_tooltip__3vRRp",
    fixed: "core-styles-module_fixed__pcSol",
    arrow: "core-styles-module_arrow__cvMwQ",
    noArrow: "core-styles-module_noArrow__xock6",
    clickable: "core-styles-module_clickable__ZuTTB",
    show: "core-styles-module_show__Nt9eE",
    closing: "core-styles-module_closing__sGnxF"
}
  , Ge = {
    tooltip: "styles-module_tooltip__mnnfp",
    arrow: "styles-module_arrow__K0L3T",
    dark: "styles-module_dark__xNqje",
    light: "styles-module_light__Z6W-X",
    success: "styles-module_success__A2AKt",
    warning: "styles-module_warning__SCK0X",
    error: "styles-module_error__JvumD",
    info: "styles-module_info__BWdHW"
};
const Mt = ({forwardRef: o, id: n, className: d, classNameArrow: u, variant: m="dark", anchorId: a, anchorSelect: p, place: f="top", offset: h=10, events: D=["hover"], openOnClick: q=!1, positionStrategy: O="absolute", middlewares: ae, wrapper: P, delayShow: N=0, delayHide: j=0, float: F=!1, hidden: z=!1, noArrow: J=!1, clickable: K=!1, closeOnEsc: V=!1, closeOnScroll: Z=!1, closeOnResize: Ve=!1, openEvents: R, closeEvents: ce, globalCloseEvents: Ee, imperativeModeOnly: Xe, style: Ie, position: Be, afterShow: De, afterHide: M, disableTooltip: ie, content: ge, contentWrapperRef: G, isOpen: $, defaultIsOpen: ue=!1, setIsOpen: ee, activeAnchor: _, setActiveAnchor: de, border: qe, opacity: ze, arrowColor: Ke, role: Fe="tooltip"}) => {
    var Ae;
    const g = t.useRef(null)
      , fe = t.useRef(null)
      , I = t.useRef(null)
      , Q = t.useRef(null)
      , ke = t.useRef(null)
      , [U,Je] = t.useState({
        tooltipStyles: {},
        tooltipArrowStyles: {},
        place: f
    })
      , [k,Me] = t.useState(!1)
      , [te,oe] = t.useState(!1)
      , [y,xe] = t.useState(null)
      , Oe = t.useRef(!1)
      , Re = t.useRef(null)
      , {anchorRefs: Te, setActiveAnchor: We} = ht(n)
      , pe = t.useRef(!1)
      , [Y,Le] = t.useState([])
      , re = t.useRef(!1)
      , ve = q || D.includes("click")
      , Qe = ve || (R == null ? void 0 : R.click) || (R == null ? void 0 : R.dblclick) || (R == null ? void 0 : R.mousedown)
      , me = R ? {
        ...R
    } : {
        mouseover: !0,
        focus: !0,
        mouseenter: !1,
        click: !1,
        dblclick: !1,
        mousedown: !1
    };
    !R && ve && Object.assign(me, {
        mouseenter: !1,
        focus: !1,
        mouseover: !1,
        click: !0
    });
    const le = ce ? {
        ...ce
    } : {
        mouseout: !0,
        blur: !0,
        mouseleave: !1,
        click: !1,
        dblclick: !1,
        mouseup: !1
    };
    !ce && ve && Object.assign(le, {
        mouseleave: !1,
        blur: !1,
        mouseout: !1
    });
    const B = Ee ? {
        ...Ee
    } : {
        escape: V || !1,
        scroll: Z || !1,
        resize: Ve || !1,
        clickOutsideAnchor: Qe || !1
    };
    Xe && (Object.assign(me, {
        mouseover: !1,
        focus: !1,
        mouseenter: !1,
        click: !1,
        dblclick: !1,
        mousedown: !1
    }),
    Object.assign(le, {
        mouseout: !1,
        blur: !1,
        mouseleave: !1,
        click: !1,
        dblclick: !1,
        mouseup: !1
    }),
    Object.assign(B, {
        escape: !1,
        scroll: !1,
        resize: !1,
        clickOutsideAnchor: !1
    })),
    Dt( () => (re.current = !0,
    () => {
        re.current = !1
    }
    ), []);
    const w = e => {
        re.current && (e && oe(!0),
        setTimeout( () => {
            re.current && (ee == null || ee(e),
            $ === void 0 && Me(e))
        }
        , 10))
    }
    ;
    t.useEffect( () => {
        if ($ === void 0)
            return () => null;
        $ && oe(!0);
        const e = setTimeout( () => {
            Me($)
        }
        , 10);
        return () => {
            clearTimeout(e)
        }
    }
    , [$]),
    t.useEffect( () => {
        if (k !== Oe.current)
            if (C(ke),
            Oe.current = k,
            k)
                De == null || De();
            else {
                const e = (l => {
                    const s = l.match(/^([\d.]+)(ms|s)$/);
                    if (!s)
                        return 0;
                    const [,b,E] = s;
                    return Number(b) * (E === "ms" ? 1 : 1e3)
                }
                )(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay"));
                ke.current = setTimeout( () => {
                    oe(!1),
                    xe(null),
                    M == null || M()
                }
                , e + 25)
            }
    }
    , [k]);
    const He = e => {
        Je(l => tt(l, e) ? l : e)
    }
      , Ce = (e=N) => {
        C(I),
        te ? w(!0) : I.current = setTimeout( () => {
            w(!0)
        }
        , e)
    }
      , ye = (e=j) => {
        C(Q),
        Q.current = setTimeout( () => {
            pe.current || w(!1)
        }
        , e)
    }
      , Ne = e => {
        var l;
        if (!e)
            return;
        const s = (l = e.currentTarget) !== null && l !== void 0 ? l : e.target;
        if (!(s != null && s.isConnected))
            return de(null),
            void We({
                current: null
            });
        N ? Ce() : w(!0),
        de(s),
        We({
            current: s
        }),
        C(Q)
    }
      , he = () => {
        K ? ye(j || 100) : j ? ye() : w(!1),
        C(I)
    }
      , we = ({x: e, y: l}) => {
        var s;
        const b = {
            getBoundingClientRect: () => ({
                x: e,
                y: l,
                width: 0,
                height: 0,
                top: l,
                left: e,
                right: e,
                bottom: l
            })
        };
        ft({
            place: (s = y == null ? void 0 : y.place) !== null && s !== void 0 ? s : f,
            offset: h,
            elementReference: b,
            tooltipReference: g.current,
            tooltipArrowReference: fe.current,
            strategy: O,
            middlewares: ae,
            border: qe
        }).then(E => {
            He(E)
        }
        )
    }
      , _e = e => {
        if (!e)
            return;
        const l = e
          , s = {
            x: l.clientX,
            y: l.clientY
        };
        we(s),
        Re.current = s
    }
      , je = e => {
        var l;
        if (!k)
            return;
        const s = e.target;
        s.isConnected && (!((l = g.current) === null || l === void 0) && l.contains(s) || [document.querySelector(`[id='${a}']`), ...Y].some(b => b == null ? void 0 : b.contains(s)) || (w(!1),
        C(I)))
    }
      , Pe = vt(Ne, 50)
      , S = vt(he, 50)
      , T = e => {
        S.cancel(),
        Pe(e)
    }
      , r = () => {
        Pe.cancel(),
        S()
    }
      , c = t.useCallback( () => {
        var e, l;
        const s = (e = y == null ? void 0 : y.position) !== null && e !== void 0 ? e : Be;
        s ? we(s) : F ? Re.current && we(Re.current) : _ != null && _.isConnected && ft({
            place: (l = y == null ? void 0 : y.place) !== null && l !== void 0 ? l : f,
            offset: h,
            elementReference: _,
            tooltipReference: g.current,
            tooltipArrowReference: fe.current,
            strategy: O,
            middlewares: ae,
            border: qe
        }).then(b => {
            re.current && He(b)
        }
        )
    }
    , [k, _, ge, Ie, f, y == null ? void 0 : y.place, h, O, Be, y == null ? void 0 : y.position, F]);
    t.useEffect( () => {
        var e, l;
        const s = new Set(Te);
        Y.forEach(i => {
            ie != null && ie(i) || s.add({
                current: i
            })
        }
        );
        const b = document.querySelector(`[id='${a}']`);
        b && !(ie != null && ie(b)) && s.add({
            current: b
        });
        const E = () => {
            w(!1)
        }
          , W = yt(_)
          , H = yt(g.current);
        B.scroll && (window.addEventListener("scroll", E),
        W == null || W.addEventListener("scroll", E),
        H == null || H.addEventListener("scroll", E));
        let A = null;
        B.resize ? window.addEventListener("resize", E) : _ && g.current && (A = Ot(_, g.current, c, {
            ancestorResize: !0,
            elementResize: !0,
            layoutShift: !0
        }));
        const L = i => {
            i.key === "Escape" && w(!1)
        }
        ;
        B.escape && window.addEventListener("keydown", L),
        B.clickOutsideAnchor && window.addEventListener("click", je);
        const v = []
          , be = i => !!(i != null && i.target && (_ != null && _.contains(i.target)))
          , _t = i => {
            k && be(i) || Ne(i)
        }
          , bt = i => {
            k && be(i) && he()
        }
          , ot = ["mouseover", "mouseout", "mouseenter", "mouseleave", "focus", "blur"]
          , rt = ["click", "dblclick", "mousedown", "mouseup"];
        Object.entries(me).forEach( ([i,X]) => {
            X && (ot.includes(i) ? v.push({
                event: i,
                listener: T
            }) : rt.includes(i) && v.push({
                event: i,
                listener: _t
            }))
        }
        ),
        Object.entries(le).forEach( ([i,X]) => {
            X && (ot.includes(i) ? v.push({
                event: i,
                listener: r
            }) : rt.includes(i) && v.push({
                event: i,
                listener: bt
            }))
        }
        ),
        F && v.push({
            event: "pointermove",
            listener: _e
        });
        const lt = () => {
            pe.current = !0
        }
          , nt = () => {
            pe.current = !1,
            he()
        }
          , st = K && (le.mouseout || le.mouseleave);
        return st && ((e = g.current) === null || e === void 0 || e.addEventListener("mouseover", lt),
        (l = g.current) === null || l === void 0 || l.addEventListener("mouseout", nt)),
        v.forEach( ({event: i, listener: X}) => {
            s.forEach(Ue => {
                var $e;
                ($e = Ue.current) === null || $e === void 0 || $e.addEventListener(i, X)
            }
            )
        }
        ),
        () => {
            var i, X;
            B.scroll && (window.removeEventListener("scroll", E),
            W == null || W.removeEventListener("scroll", E),
            H == null || H.removeEventListener("scroll", E)),
            B.resize ? window.removeEventListener("resize", E) : A == null || A(),
            B.clickOutsideAnchor && window.removeEventListener("click", je),
            B.escape && window.removeEventListener("keydown", L),
            st && ((i = g.current) === null || i === void 0 || i.removeEventListener("mouseover", lt),
            (X = g.current) === null || X === void 0 || X.removeEventListener("mouseout", nt)),
            v.forEach( ({event: Ue, listener: $e}) => {
                s.forEach(St => {
                    var Ye;
                    (Ye = St.current) === null || Ye === void 0 || Ye.removeEventListener(Ue, $e)
                }
                )
            }
            )
        }
    }
    , [_, c, te, Te, Y, R, ce, Ee, ve, N, j]),
    t.useEffect( () => {
        var e, l;
        let s = (l = (e = y == null ? void 0 : y.anchorSelect) !== null && e !== void 0 ? e : p) !== null && l !== void 0 ? l : "";
        !s && n && (s = `[data-tooltip-id='${n.replace(/'/g, "\\'")}']`);
        const b = new MutationObserver(E => {
            const W = []
              , H = [];
            E.forEach(A => {
                if (A.type === "attributes" && A.attributeName === "data-tooltip-id" && (A.target.getAttribute("data-tooltip-id") === n ? W.push(A.target) : A.oldValue === n && H.push(A.target)),
                A.type === "childList") {
                    if (_) {
                        const L = [...A.removedNodes].filter(v => v.nodeType === 1);
                        if (s)
                            try {
                                H.push(...L.filter(v => v.matches(s))),
                                H.push(...L.flatMap(v => [...v.querySelectorAll(s)]))
                            } catch {}
                        L.some(v => {
                            var be;
                            return !!(!((be = v == null ? void 0 : v.contains) === null || be === void 0) && be.call(v, _)) && (oe(!1),
                            w(!1),
                            de(null),
                            C(I),
                            C(Q),
                            !0)
                        }
                        )
                    }
                    if (s)
                        try {
                            const L = [...A.addedNodes].filter(v => v.nodeType === 1);
                            W.push(...L.filter(v => v.matches(s))),
                            W.push(...L.flatMap(v => [...v.querySelectorAll(s)]))
                        } catch {}
                }
            }
            ),
            (W.length || H.length) && Le(A => [...A.filter(L => !H.includes(L)), ...W])
        }
        );
        return b.observe(document.body, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["data-tooltip-id"],
            attributeOldValue: !0
        }),
        () => {
            b.disconnect()
        }
    }
    , [n, p, y == null ? void 0 : y.anchorSelect, _]),
    t.useEffect( () => {
        c()
    }
    , [c]),
    t.useEffect( () => {
        if (!(G != null && G.current))
            return () => null;
        const e = new ResizeObserver( () => {
            setTimeout( () => c())
        }
        );
        return e.observe(G.current),
        () => {
            e.disconnect()
        }
    }
    , [ge, G == null ? void 0 : G.current]),
    t.useEffect( () => {
        var e;
        const l = document.querySelector(`[id='${a}']`)
          , s = [...Y, l];
        _ && s.includes(_) || de((e = Y[0]) !== null && e !== void 0 ? e : l)
    }
    , [a, Y, _]),
    t.useEffect( () => (ue && w(!0),
    () => {
        C(I),
        C(Q)
    }
    ), []),
    t.useEffect( () => {
        var e;
        let l = (e = y == null ? void 0 : y.anchorSelect) !== null && e !== void 0 ? e : p;
        if (!l && n && (l = `[data-tooltip-id='${n.replace(/'/g, "\\'")}']`),
        l)
            try {
                const s = Array.from(document.querySelectorAll(l));
                Le(s)
            } catch {
                Le([])
            }
    }
    , [n, p, y == null ? void 0 : y.anchorSelect]),
    t.useEffect( () => {
        I.current && (C(I),
        Ce(N))
    }
    , [N]);
    const x = (Ae = y == null ? void 0 : y.content) !== null && Ae !== void 0 ? Ae : ge
      , ne = k && Object.keys(U.tooltipStyles).length > 0;
    return t.useImperativeHandle(o, () => ({
        open: e => {
            if (e != null && e.anchorSelect)
                try {
                    document.querySelector(e.anchorSelect)
                } catch {
                    return void console.warn(`[react-tooltip] "${e.anchorSelect}" is not a valid CSS selector`)
                }
            xe(e ?? null),
            e != null && e.delay ? Ce(e.delay) : w(!0)
        }
        ,
        close: e => {
            e != null && e.delay ? ye(e.delay) : w(!1)
        }
        ,
        activeAnchor: _,
        place: U.place,
        isOpen: !!(te && !z && x && ne)
    })),
    te && !z && x ? se.createElement(P, {
        id: n,
        role: Fe,
        className: et("react-tooltip", Se.tooltip, Ge.tooltip, Ge[m], d, `react-tooltip__place-${U.place}`, Se[ne ? "show" : "closing"], ne ? "react-tooltip__show" : "react-tooltip__closing", O === "fixed" && Se.fixed, K && Se.clickable),
        onTransitionEnd: e => {
            C(ke),
            k || e.propertyName !== "opacity" || (oe(!1),
            xe(null),
            M == null || M())
        }
        ,
        style: {
            ...Ie,
            ...U.tooltipStyles,
            opacity: ze !== void 0 && ne ? ze : void 0
        },
        ref: g
    }, x, se.createElement(P, {
        className: et("react-tooltip-arrow", Se.arrow, Ge.arrow, u, J && Se.noArrow),
        style: {
            ...U.tooltipArrowStyles,
            background: Ke ? `linear-gradient(to right bottom, transparent 50%, ${Ke} 50%)` : void 0
        },
        ref: fe
    })) : null
}
  , Wt = ({content: o}) => se.createElement("span", {
    dangerouslySetInnerHTML: {
        __html: o
    }
})
  , Ht = se.forwardRef( ({id: o, anchorId: n, anchorSelect: d, content: u, html: m, render: a, className: p, classNameArrow: f, variant: h="dark", place: D="top", offset: q=10, wrapper: O="div", children: ae=null, events: P=["hover"], openOnClick: N=!1, positionStrategy: j="absolute", middlewares: F, delayShow: z=0, delayHide: J=0, float: K=!1, hidden: V=!1, noArrow: Z=!1, clickable: Ve=!1, closeOnEsc: R=!1, closeOnScroll: ce=!1, closeOnResize: Ee=!1, openEvents: Xe, closeEvents: Ie, globalCloseEvents: Be, imperativeModeOnly: De=!1, style: M, position: ie, isOpen: ge, defaultIsOpen: G=!1, disableStyleInjection: $=!1, border: ue, opacity: ee, arrowColor: _, setIsOpen: de, afterShow: qe, afterHide: ze, disableTooltip: Ke, role: Fe="tooltip"}, Ae) => {
    const [g,fe] = t.useState(u)
      , [I,Q] = t.useState(m)
      , [ke,U] = t.useState(D)
      , [Je,k] = t.useState(h)
      , [Me,te] = t.useState(q)
      , [oe,y] = t.useState(z)
      , [xe,Oe] = t.useState(J)
      , [Re,Te] = t.useState(K)
      , [We,pe] = t.useState(V)
      , [Y,Le] = t.useState(O)
      , [re,ve] = t.useState(P)
      , [Qe,me] = t.useState(j)
      , [le,B] = t.useState(null)
      , [w,He] = t.useState(null)
      , Ce = t.useRef($)
      , {anchorRefs: ye, activeAnchor: Ne} = ht(o)
      , he = S => S == null ? void 0 : S.getAttributeNames().reduce( (T, r) => {
        var c;
        return r.startsWith("data-tooltip-") && (T[r.replace(/^data-tooltip-/, "")] = (c = S == null ? void 0 : S.getAttribute(r)) !== null && c !== void 0 ? c : null),
        T
    }
    , {})
      , we = S => {
        const T = {
            place: r => {
                var c;
                U((c = r) !== null && c !== void 0 ? c : D)
            }
            ,
            content: r => {
                fe(r ?? u)
            }
            ,
            html: r => {
                Q(r ?? m)
            }
            ,
            variant: r => {
                var c;
                k((c = r) !== null && c !== void 0 ? c : h)
            }
            ,
            offset: r => {
                te(r === null ? q : Number(r))
            }
            ,
            wrapper: r => {
                var c;
                Le((c = r) !== null && c !== void 0 ? c : O)
            }
            ,
            events: r => {
                const c = r == null ? void 0 : r.split(" ");
                ve(c ?? P)
            }
            ,
            "position-strategy": r => {
                var c;
                me((c = r) !== null && c !== void 0 ? c : j)
            }
            ,
            "delay-show": r => {
                y(r === null ? z : Number(r))
            }
            ,
            "delay-hide": r => {
                Oe(r === null ? J : Number(r))
            }
            ,
            float: r => {
                Te(r === null ? K : r === "true")
            }
            ,
            hidden: r => {
                pe(r === null ? V : r === "true")
            }
            ,
            "class-name": r => {
                B(r)
            }
        };
        Object.values(T).forEach(r => r(null)),
        Object.entries(S).forEach( ([r,c]) => {
            var x;
            (x = T[r]) === null || x === void 0 || x.call(T, c)
        }
        )
    }
    ;
    t.useEffect( () => {
        fe(u)
    }
    , [u]),
    t.useEffect( () => {
        Q(m)
    }
    , [m]),
    t.useEffect( () => {
        U(D)
    }
    , [D]),
    t.useEffect( () => {
        k(h)
    }
    , [h]),
    t.useEffect( () => {
        te(q)
    }
    , [q]),
    t.useEffect( () => {
        y(z)
    }
    , [z]),
    t.useEffect( () => {
        Oe(J)
    }
    , [J]),
    t.useEffect( () => {
        Te(K)
    }
    , [K]),
    t.useEffect( () => {
        pe(V)
    }
    , [V]),
    t.useEffect( () => {
        me(j)
    }
    , [j]),
    t.useEffect( () => {
        Ce.current !== $ && console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.")
    }
    , [$]),
    t.useEffect( () => {
        typeof window < "u" && window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles",{
            detail: {
                disableCore: $ === "core",
                disableBase: $
            }
        }))
    }
    , []),
    t.useEffect( () => {
        var S;
        const T = new Set(ye);
        let r = d;
        if (!r && o && (r = `[data-tooltip-id='${o.replace(/'/g, "\\'")}']`),
        r)
            try {
                document.querySelectorAll(r).forEach(l => {
                    T.add({
                        current: l
                    })
                }
                )
            } catch {
                console.warn(`[react-tooltip] "${r}" is not a valid CSS selector`)
            }
        const c = document.querySelector(`[id='${n}']`);
        if (c && T.add({
            current: c
        }),
        !T.size)
            return () => null;
        const x = (S = w ?? c) !== null && S !== void 0 ? S : Ne.current
          , ne = new MutationObserver(l => {
            l.forEach(s => {
                var b;
                if (!x || s.type !== "attributes" || !(!((b = s.attributeName) === null || b === void 0) && b.startsWith("data-tooltip-")))
                    return;
                const E = he(x);
                we(E)
            }
            )
        }
        )
          , e = {
            attributes: !0,
            childList: !1,
            subtree: !1
        };
        if (x) {
            const l = he(x);
            we(l),
            ne.observe(x, e)
        }
        return () => {
            ne.disconnect()
        }
    }
    , [ye, Ne, w, n, d]),
    t.useEffect( () => {
        M != null && M.border && console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."),
        ue && !pt("border", `${ue}`) && console.warn(`[react-tooltip] "${ue}" is not a valid \`border\`.`),
        M != null && M.opacity && console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."),
        ee && !pt("opacity", `${ee}`) && console.warn(`[react-tooltip] "${ee}" is not a valid \`opacity\`.`)
    }
    , []);
    let _e = ae;
    const je = t.useRef(null);
    if (a) {
        const S = a({
            content: (w == null ? void 0 : w.getAttribute("data-tooltip-content")) || g || null,
            activeAnchor: w
        });
        _e = S ? se.createElement("div", {
            ref: je,
            className: "react-tooltip-content-wrapper"
        }, S) : null
    } else
        g && (_e = g);
    I && (_e = se.createElement(Wt, {
        content: I
    }));
    const Pe = {
        forwardRef: Ae,
        id: o,
        anchorId: n,
        anchorSelect: d,
        className: et(p, le),
        classNameArrow: f,
        content: _e,
        contentWrapperRef: je,
        place: ke,
        variant: Je,
        offset: Me,
        wrapper: Y,
        events: re,
        openOnClick: N,
        positionStrategy: Qe,
        middlewares: F,
        delayShow: oe,
        delayHide: xe,
        float: Re,
        hidden: We,
        noArrow: Z,
        clickable: Ve,
        closeOnEsc: R,
        closeOnScroll: ce,
        closeOnResize: Ee,
        openEvents: Xe,
        closeEvents: Ie,
        globalCloseEvents: Be,
        imperativeModeOnly: De,
        style: M,
        position: ie,
        isOpen: ge,
        defaultIsOpen: G,
        border: ue,
        opacity: ee,
        arrowColor: _,
        setIsOpen: de,
        afterShow: qe,
        afterHide: ze,
        disableTooltip: Ke,
        activeAnchor: w,
        setActiveAnchor: S => He(S),
        role: Fe
    };
    return se.createElement(Mt, {
        ...Pe
    })
}
);
typeof window < "u" && window.addEventListener("react-tooltip-inject-styles", o => {
    o.detail.disableCore || dt({
        css: ":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}",
        type: "core"
    }),
    o.detail.disableBase || dt({
        css: `
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`,
        type: "base"
    })
}
);
const Pt = `
:root {
  --rt-color-white: #fff;
  --rt-color-dark: var(--color-gray-800) !important;
  --rt-color-success: var(--color-success-darker) !important;
  --rt-color-error: var(--color-error-darker) !important;
  --rt-color-warning: var(--color-warning-darker) !important;
  --rt-color-info: var(--color-info-darker) !important;
  --rt-opacity: 1;
  --rt-transition-show-delay: 0.15s;
  --rt-transition-closing-delay: 0.15s;
}

:root.dark {
  --rt-color-white: var(--color-dark-50) !important;
  --rt-color-dark: var(--color-dark-500) !important;
}`
  , wt = gt();
At(wt, Pt);
kt(wt);
function Ft() {
    return xt.jsx(Ht, {
        anchorSelect: "[data-tooltip]",
        opacity: 1,
        style: {
            padding: "0.3rem 0.75rem",
            borderRadius: "0.5rem",
            zIndex: 1e3
        }
    })
}
export {Ft as default};
