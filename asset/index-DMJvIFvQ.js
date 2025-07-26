import {b as f, k as qs, l as Hs, n as It, R as Z, o as gt, j as a, c as ge, p as Ws, u as Mt, B as W, q as Hr, s as Zs, t as Wr, v as Gs, P as ie, S as Vt, L as Ks, N as Zr, A as At, w as Qs, x as Be, y as G, C as me, z as rr, D as Ys, g as Js, I as Xs, E as ea, G as ta, H as ra} from "./index-7qjuY_ZX.js";
import {P as sa} from "./Page-5Ivi3rtR.js";
import {n as Ke, d as aa, ab as na, ac as sr, C as Gr, ad as ia, ae as J, u as Kr, af as Xe, a6 as oa, k as la, K as Le, ag as ca, y as yt, o as fe, ah as da, a as ne, S as Fe, ai as ua, aj as et, h as fa, a5 as ha, $ as ma, Y as pa, ak as xa, _ as Qr, al as ga, L as Me, am as ya, an as ba, ao as va, e as ar, w as wa, ap as ka, x as lt, G as ja, E as Na, B as Ea, aq as Sa, p as _a, ar as Fa, T as nr, as as Yr, at as Ca, au as Ta, O as Ia, av as Aa, aw as Oa, ax as $a, a0 as Jr, J as Da, D as Ra, ay as La, az as Ma, aA as Va, aB as Pa, aC as za, Q as ir, a7 as Ua, a8 as Ba, z as Xr, a9 as qa, aa as Ha} from "./listbox-DyEPdIwU.js";
import "./floating-ui.dom-nLN9p6gL.js";
const Wa = (e, t, r, s) => {
    var i, o, c, u;
    const n = [r, {
        code: t,
        ...s || {}
    }];
    if ((o = (i = e == null ? void 0 : e.services) == null ? void 0 : i.logger) != null && o.forward)
        return e.services.logger.forward(n, "warn", "react-i18next::", !0);
    De(n[0]) && (n[0] = `react-i18next:: ${n[0]}`),
    (u = (c = e == null ? void 0 : e.services) == null ? void 0 : c.logger) != null && u.warn ? e.services.logger.warn(...n) : console != null && console.warn && console.warn(...n)
}
  , or = {}
  , Ot = (e, t, r, s) => {
    De(r) && or[r] || (De(r) && (or[r] = new Date),
    Wa(e, t, r, s))
}
  , es = (e, t) => () => {
    if (e.isInitialized)
        t();
    else {
        const r = () => {
            setTimeout( () => {
                e.off("initialized", r)
            }
            , 0),
            t()
        }
        ;
        e.on("initialized", r)
    }
}
  , $t = (e, t, r) => {
    e.loadNamespaces(t, es(e, r))
}
  , lr = (e, t, r, s) => {
    if (De(r) && (r = [r]),
    e.options.preload && e.options.preload.indexOf(t) > -1)
        return $t(e, r, s);
    r.forEach(n => {
        e.options.ns.indexOf(n) < 0 && e.options.ns.push(n)
    }
    ),
    e.loadLanguages(t, es(e, s))
}
  , Za = (e, t, r={}) => !t.languages || !t.languages.length ? (Ot(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
    languages: t.languages
}),
!0) : t.hasLoadedNamespace(e, {
    lng: r.lng,
    precheck: (s, n) => {
        var i;
        if (((i = r.bindI18n) == null ? void 0 : i.indexOf("languageChanging")) > -1 && s.services.backendConnector.backend && s.isLanguageChangingTo && !n(s.isLanguageChangingTo, e))
            return !1
    }
})
  , De = e => typeof e == "string"
  , Ga = e => typeof e == "object" && e !== null
  , Ka = f.createContext();
class Qa {
    constructor() {
        this.usedNamespaces = {}
    }
    addUsedNamespaces(t) {
        t.forEach(r => {
            this.usedNamespaces[r] || (this.usedNamespaces[r] = !0)
        }
        )
    }
    getUsedNamespaces() {
        return Object.keys(this.usedNamespaces)
    }
}
const Ya = (e, t) => {
    const r = f.useRef();
    return f.useEffect( () => {
        r.current = e
    }
    , [e, t]),
    r.current
}
  , ts = (e, t, r, s) => e.getFixedT(t, r, s)
  , Ja = (e, t, r, s) => f.useCallback(ts(e, t, r, s), [e, t, r, s])
  , Xa = (e, t={}) => {
    var z, L, P, $;
    const {i18n: r} = t
      , {i18n: s, defaultNS: n} = f.useContext(Ka) || {}
      , i = r || s || qs();
    if (i && !i.reportNamespaces && (i.reportNamespaces = new Qa),
    !i) {
        Ot(i, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
        const D = (w, N) => De(N) ? N : Ga(N) && De(N.defaultValue) ? N.defaultValue : Array.isArray(w) ? w[w.length - 1] : w
          , A = [D, {}, !1];
        return A.t = D,
        A.i18n = {},
        A.ready = !1,
        A
    }
    (z = i.options.react) != null && z.wait && Ot(i, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
    const o = {
        ...Hs(),
        ...i.options.react,
        ...t
    }
      , {useSuspense: c, keyPrefix: u} = o;
    let p = n || ((L = i.options) == null ? void 0 : L.defaultNS);
    p = De(p) ? [p] : p || ["translation"],
    ($ = (P = i.reportNamespaces).addUsedNamespaces) == null || $.call(P, p);
    const l = (i.isInitialized || i.initializedStoreOnce) && p.every(D => Za(D, i, o))
      , m = Ja(i, t.lng || null, o.nsMode === "fallback" ? p : p[0], u)
      , x = () => m
      , v = () => ts(i, t.lng || null, o.nsMode === "fallback" ? p : p[0], u)
      , [O,F] = f.useState(x);
    let k = p.join();
    t.lng && (k = `${t.lng}${k}`);
    const y = Ya(k)
      , b = f.useRef(!0);
    f.useEffect( () => {
        const {bindI18n: D, bindI18nStore: A} = o;
        b.current = !0,
        !l && !c && (t.lng ? lr(i, t.lng, p, () => {
            b.current && F(v)
        }
        ) : $t(i, p, () => {
            b.current && F(v)
        }
        )),
        l && y && y !== k && b.current && F(v);
        const w = () => {
            b.current && F(v)
        }
        ;
        return D && (i == null || i.on(D, w)),
        A && (i == null || i.store.on(A, w)),
        () => {
            b.current = !1,
            i && (D == null || D.split(" ").forEach(N => i.off(N, w))),
            A && i && A.split(" ").forEach(N => i.store.off(N, w))
        }
    }
    , [i, k]),
    f.useEffect( () => {
        b.current && l && F(x)
    }
    , [i, u, l]);
    const R = [O, i, l];
    if (R.t = O,
    R.i18n = i,
    R.ready = l,
    l || !l && !c)
        return R;
    throw new Promise(D => {
        t.lng ? lr(i, t.lng, p, () => D()) : $t(i, p, () => D())
    }
    )
}
;
function en({title: e, titleId: t, ...r}, s) {
    return f.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": t
    }, r), e ? f.createElement("title", {
        id: t
    }, e) : null, f.createElement("path", {
        fillRule: "evenodd",
        d: "M4.606 12.97a.75.75 0 0 1-.134 1.051 2.494 2.494 0 0 0-.93 2.437 2.494 2.494 0 0 0 2.437-.93.75.75 0 1 1 1.186.918 3.995 3.995 0 0 1-4.482 1.332.75.75 0 0 1-.461-.461 3.994 3.994 0 0 1 1.332-4.482.75.75 0 0 1 1.052.134Z",
        clipRule: "evenodd"
    }), f.createElement("path", {
        fillRule: "evenodd",
        d: "M5.752 12A13.07 13.07 0 0 0 8 14.248v4.002c0 .414.336.75.75.75a5 5 0 0 0 4.797-6.414 12.984 12.984 0 0 0 5.45-10.848.75.75 0 0 0-.735-.735 12.984 12.984 0 0 0-10.849 5.45A5 5 0 0 0 1 11.25c.001.414.337.75.751.75h4.002ZM13 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
        clipRule: "evenodd"
    }))
}
const tn = f.forwardRef(en);
function rn(e, {container: t, accept: r, walk: s}) {
    let n = f.useRef(r)
      , i = f.useRef(s);
    f.useEffect( () => {
        n.current = r,
        i.current = s
    }
    , [r, s]),
    Ke( () => {
        if (!t || !e)
            return;
        let o = aa(t);
        if (!o)
            return;
        let c = n.current
          , u = i.current
          , p = Object.assign(m => c(m), {
            acceptNode: c
        })
          , l = o.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, p, !1);
        for (; l.nextNode(); )
            u(l.currentNode)
    }
    , [t, e, n, i])
}
var sn = Object.defineProperty
  , an = (e, t, r) => t in e ? sn(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r
  , cr = (e, t, r) => (an(e, typeof t != "symbol" ? t + "" : t, r),
r)
  , re = (e => (e[e.Open = 0] = "Open",
e[e.Closed = 1] = "Closed",
e))(re || {})
  , ct = (e => (e[e.Pointer = 0] = "Pointer",
e[e.Other = 1] = "Other",
e))(ct || {})
  , H = (e => (e[e.OpenMenu = 0] = "OpenMenu",
e[e.CloseMenu = 1] = "CloseMenu",
e[e.GoToItem = 2] = "GoToItem",
e[e.Search = 3] = "Search",
e[e.ClearSearch = 4] = "ClearSearch",
e[e.RegisterItems = 5] = "RegisterItems",
e[e.UnregisterItems = 6] = "UnregisterItems",
e[e.SetButtonElement = 7] = "SetButtonElement",
e[e.SetItemsElement = 8] = "SetItemsElement",
e[e.SortItems = 9] = "SortItems",
e))(H || {});
function dr(e, t=r => r) {
    let r = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null
      , s = oa(t(e.items.slice()), i => i.dataRef.current.domRef.current)
      , n = r ? s.indexOf(r) : null;
    return n === -1 && (n = null),
    {
        items: s,
        activeItemIndex: n
    }
}
let nn = {
    1(e) {
        return e.menuState === 1 ? e : {
            ...e,
            activeItemIndex: null,
            pendingFocus: {
                focus: J.Nothing
            },
            menuState: 1
        }
    },
    0(e, t) {
        return e.menuState === 0 ? e : {
            ...e,
            __demoMode: !1,
            pendingFocus: t.focus,
            menuState: 0
        }
    },
    2: (e, t) => {
        var r, s, n, i, o;
        if (e.menuState === 1)
            return e;
        let c = {
            ...e,
            searchQuery: "",
            activationTrigger: (r = t.trigger) != null ? r : 1,
            __demoMode: !1
        };
        if (t.focus === J.Nothing)
            return {
                ...c,
                activeItemIndex: null
            };
        if (t.focus === J.Specific)
            return {
                ...c,
                activeItemIndex: e.items.findIndex(l => l.id === t.id)
            };
        if (t.focus === J.Previous) {
            let l = e.activeItemIndex;
            if (l !== null) {
                let m = e.items[l].dataRef.current.domRef
                  , x = Xe(t, {
                    resolveItems: () => e.items,
                    resolveActiveIndex: () => e.activeItemIndex,
                    resolveId: v => v.id,
                    resolveDisabled: v => v.dataRef.current.disabled
                });
                if (x !== null) {
                    let v = e.items[x].dataRef.current.domRef;
                    if (((s = m.current) == null ? void 0 : s.previousElementSibling) === v.current || ((n = v.current) == null ? void 0 : n.previousElementSibling) === null)
                        return {
                            ...c,
                            activeItemIndex: x
                        }
                }
            }
        } else if (t.focus === J.Next) {
            let l = e.activeItemIndex;
            if (l !== null) {
                let m = e.items[l].dataRef.current.domRef
                  , x = Xe(t, {
                    resolveItems: () => e.items,
                    resolveActiveIndex: () => e.activeItemIndex,
                    resolveId: v => v.id,
                    resolveDisabled: v => v.dataRef.current.disabled
                });
                if (x !== null) {
                    let v = e.items[x].dataRef.current.domRef;
                    if (((i = m.current) == null ? void 0 : i.nextElementSibling) === v.current || ((o = v.current) == null ? void 0 : o.nextElementSibling) === null)
                        return {
                            ...c,
                            activeItemIndex: x
                        }
                }
            }
        }
        let u = dr(e)
          , p = Xe(t, {
            resolveItems: () => u.items,
            resolveActiveIndex: () => u.activeItemIndex,
            resolveId: l => l.id,
            resolveDisabled: l => l.dataRef.current.disabled
        });
        return {
            ...c,
            ...u,
            activeItemIndex: p
        }
    }
    ,
    3: (e, t) => {
        let r = e.searchQuery !== "" ? 0 : 1
          , s = e.searchQuery + t.value.toLowerCase()
          , n = (e.activeItemIndex !== null ? e.items.slice(e.activeItemIndex + r).concat(e.items.slice(0, e.activeItemIndex + r)) : e.items).find(o => {
            var c;
            return ((c = o.dataRef.current.textValue) == null ? void 0 : c.startsWith(s)) && !o.dataRef.current.disabled
        }
        )
          , i = n ? e.items.indexOf(n) : -1;
        return i === -1 || i === e.activeItemIndex ? {
            ...e,
            searchQuery: s
        } : {
            ...e,
            searchQuery: s,
            activeItemIndex: i,
            activationTrigger: 1
        }
    }
    ,
    4(e) {
        return e.searchQuery === "" ? e : {
            ...e,
            searchQuery: "",
            searchActiveItemIndex: null
        }
    },
    5: (e, t) => {
        let r = e.items.concat(t.items.map(n => n))
          , s = e.activeItemIndex;
        return e.pendingFocus.focus !== J.Nothing && (s = Xe(e.pendingFocus, {
            resolveItems: () => r,
            resolveActiveIndex: () => e.activeItemIndex,
            resolveId: n => n.id,
            resolveDisabled: n => n.dataRef.current.disabled
        })),
        {
            ...e,
            items: r,
            activeItemIndex: s,
            pendingFocus: {
                focus: J.Nothing
            },
            pendingShouldSort: !0
        }
    }
    ,
    6: (e, t) => {
        let r = e.items
          , s = []
          , n = new Set(t.items);
        for (let[i,o] of r.entries())
            if (n.has(o.id) && (s.push(i),
            n.delete(o.id),
            n.size === 0))
                break;
        if (s.length > 0) {
            r = r.slice();
            for (let i of s.reverse())
                r.splice(i, 1)
        }
        return {
            ...e,
            items: r,
            activationTrigger: 1
        }
    }
    ,
    7: (e, t) => e.buttonElement === t.element ? e : {
        ...e,
        buttonElement: t.element
    },
    8: (e, t) => e.itemsElement === t.element ? e : {
        ...e,
        itemsElement: t.element
    },
    9: e => e.pendingShouldSort ? {
        ...e,
        ...dr(e),
        pendingShouldSort: !1
    } : e
};
class Pt extends na {
    constructor(t) {
        super(t),
        cr(this, "actions", {
            registerItem: sr( () => {
                let r = []
                  , s = new Set;
                return [ (n, i) => {
                    s.has(i) || (s.add(i),
                    r.push({
                        id: n,
                        dataRef: i
                    }))
                }
                , () => (s.clear(),
                this.send({
                    type: 5,
                    items: r.splice(0)
                }))]
            }
            ),
            unregisterItem: sr( () => {
                let r = [];
                return [s => r.push(s), () => this.send({
                    type: 6,
                    items: r.splice(0)
                })]
            }
            )
        }),
        cr(this, "selectors", {
            activeDescendantId(r) {
                var s;
                let n = r.activeItemIndex
                  , i = r.items;
                return n === null || (s = i[n]) == null ? void 0 : s.id
            },
            isActive(r, s) {
                var n;
                let i = r.activeItemIndex
                  , o = r.items;
                return i !== null ? ((n = o[i]) == null ? void 0 : n.id) === s : !1
            },
            shouldScrollIntoView(r, s) {
                return r.__demoMode || r.menuState !== 0 || r.activationTrigger === 0 ? !1 : this.isActive(r, s)
            }
        }),
        this.on(5, () => {
            this.disposables.requestAnimationFrame( () => {
                this.send({
                    type: 9
                })
            }
            )
        }
        );
        {
            let r = this.state.id
              , s = Gr.get(null);
            this.disposables.add(s.on(ia.Push, n => {
                !s.selectors.isTop(n, r) && this.state.menuState === 0 && this.send({
                    type: 1
                })
            }
            )),
            this.on(0, () => s.actions.push(r)),
            this.on(1, () => s.actions.pop(r))
        }
    }
    static new({id: t, __demoMode: r=!1}) {
        return new Pt({
            id: t,
            __demoMode: r,
            menuState: r ? 0 : 1,
            buttonElement: null,
            itemsElement: null,
            items: [],
            searchQuery: "",
            activeItemIndex: null,
            activationTrigger: 1,
            pendingShouldSort: !1,
            pendingFocus: {
                focus: J.Nothing
            }
        })
    }
    reduce(t, r) {
        return Kr(r.type, nn, t, r)
    }
}
const rs = f.createContext(null);
function zt(e) {
    let t = f.useContext(rs);
    if (t === null) {
        let r = new Error(`<${e} /> is missing a parent <Menu /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(r, ss),
        r
    }
    return t
}
function ss({id: e, __demoMode: t=!1}) {
    let r = f.useMemo( () => Pt.new({
        id: e,
        __demoMode: t
    }), []);
    return la( () => r.dispose()),
    r
}
let on = f.Fragment;
function ln(e, t) {
    let r = f.useId()
      , {__demoMode: s=!1, ...n} = e
      , i = ss({
        id: r,
        __demoMode: s
    })
      , [o,c,u] = Fe(i, k => [k.menuState, k.itemsElement, k.buttonElement])
      , p = yt(t)
      , l = Gr.get(null)
      , m = Fe(l, f.useCallback(k => l.selectors.isTop(k, r), [l, r]));
    Ra(m, [u, c], (k, y) => {
        var b;
        i.send({
            type: H.CloseMenu
        }),
        La(y, Ma.Loose) || (k.preventDefault(),
        (b = i.state.buttonElement) == null || b.focus())
    }
    );
    let x = fe( () => {
        i.send({
            type: H.CloseMenu
        })
    }
    )
      , v = f.useMemo( () => ({
        open: o === re.Open,
        close: x
    }), [o, x])
      , O = {
        ref: p
    }
      , F = Me();
    return Z.createElement(Va, null, Z.createElement(rs.Provider, {
        value: i
    }, Z.createElement(Pa, {
        value: Kr(o, {
            [re.Open]: lt.Open,
            [re.Closed]: lt.Closed
        })
    }, F({
        ourProps: O,
        theirProps: n,
        slot: v,
        defaultTag: on,
        name: "Menu"
    }))))
}
let cn = "button";
function dn(e, t) {
    let r = zt("Menu.Button")
      , s = f.useId()
      , {id: n=`headlessui-menu-button-${s}`, disabled: i=!1, autoFocus: o=!1, ...c} = e
      , u = f.useRef(null)
      , p = ca()
      , l = yt(t, u, da(), fe(w => r.send({
        type: H.SetButtonElement,
        element: w
    })))
      , m = fe(w => {
        switch (w.key) {
        case ne.Space:
        case ne.Enter:
        case ne.ArrowDown:
            w.preventDefault(),
            w.stopPropagation(),
            r.send({
                type: H.OpenMenu,
                focus: {
                    focus: J.First
                }
            });
            break;
        case ne.ArrowUp:
            w.preventDefault(),
            w.stopPropagation(),
            r.send({
                type: H.OpenMenu,
                focus: {
                    focus: J.Last
                }
            });
            break
        }
    }
    )
      , x = fe(w => {
        switch (w.key) {
        case ne.Space:
            w.preventDefault();
            break
        }
    }
    )
      , [v,O,F] = Fe(r, w => [w.menuState, w.buttonElement, w.itemsElement])
      , k = v === re.Open;
    ua(k, {
        trigger: O,
        action: f.useCallback(w => {
            if (O != null && O.contains(w.target))
                return et.Ignore;
            let N = w.target.closest('[role="menuitem"]:not([data-disabled])');
            return fa(N) ? et.Select(N) : F != null && F.contains(w.target) ? et.Ignore : et.Close
        }
        , [O, F]),
        close: f.useCallback( () => r.send({
            type: H.CloseMenu
        }), []),
        select: f.useCallback(w => w.click(), [])
    });
    let y = fe(w => {
        var N;
        if (w.button === 0) {
            if (ha(w.currentTarget))
                return w.preventDefault();
            i || (v === re.Open ? (It.flushSync( () => r.send({
                type: H.CloseMenu
            })),
            (N = u.current) == null || N.focus({
                preventScroll: !0
            })) : (w.preventDefault(),
            r.send({
                type: H.OpenMenu,
                focus: {
                    focus: J.Nothing
                },
                trigger: ct.Pointer
            })))
        }
    }
    )
      , {isFocusVisible: b, focusProps: R} = ma({
        autoFocus: o
    })
      , {isHovered: z, hoverProps: L} = pa({
        isDisabled: i
    })
      , {pressed: P, pressProps: $} = xa({
        disabled: i
    })
      , D = f.useMemo( () => ({
        open: v === re.Open,
        active: P || v === re.Open,
        disabled: i,
        hover: z,
        focus: b,
        autofocus: o
    }), [v, z, b, P, i, o])
      , A = Qr(p(), {
        ref: l,
        id: n,
        type: ga(e, u.current),
        "aria-haspopup": "menu",
        "aria-controls": F == null ? void 0 : F.id,
        "aria-expanded": v === re.Open,
        disabled: i || void 0,
        autoFocus: o,
        onKeyDown: m,
        onKeyUp: x,
        onPointerDown: y
    }, R, L, $);
    return Me()({
        ourProps: A,
        theirProps: c,
        slot: D,
        defaultTag: cn,
        name: "Menu.Button"
    })
}
let un = "div"
  , fn = ir.RenderStrategy | ir.Static;
function hn(e, t) {
    let r = f.useId()
      , {id: s=`headlessui-menu-items-${r}`, anchor: n, portal: i=!1, modal: o=!0, transition: c=!1, ...u} = e
      , p = ya(n)
      , l = zt("Menu.Items")
      , [m,x] = ba(p)
      , v = va()
      , [O,F] = f.useState(null)
      , k = yt(t, p ? m : null, fe(M => l.send({
        type: H.SetItemsElement,
        element: M
    })), F)
      , [y,b] = Fe(l, M => [M.menuState, M.buttonElement])
      , R = ar(b)
      , z = ar(O);
    p && (i = !0);
    let L = wa()
      , [P,$] = ka(c, O, L !== null ? (L & lt.Open) === lt.Open : y === re.Open);
    ja(P, b, () => {
        l.send({
            type: H.CloseMenu
        })
    }
    );
    let D = Fe(l, M => M.__demoMode)
      , A = D ? !1 : o && y === re.Open;
    Na(A, z);
    let w = D ? !1 : o && y === re.Open;
    Ea(w, {
        allowed: f.useCallback( () => [b, O], [b, O])
    });
    let N = y !== re.Open
      , S = Sa(N, b) ? !1 : P;
    f.useEffect( () => {
        let M = O;
        M && y === re.Open && M !== (z == null ? void 0 : z.activeElement) && M.focus({
            preventScroll: !0
        })
    }
    , [y, O, z]),
    rn(y === re.Open, {
        container: O,
        accept(M) {
            return M.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : M.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        },
        walk(M) {
            M.setAttribute("role", "none")
        }
    });
    let j = _a()
      , V = fe(M => {
        var xe, Ee, de;
        switch (j.dispose(),
        M.key) {
        case ne.Space:
            if (l.state.searchQuery !== "")
                return M.preventDefault(),
                M.stopPropagation(),
                l.send({
                    type: H.Search,
                    value: M.key
                });
        case ne.Enter:
            if (M.preventDefault(),
            M.stopPropagation(),
            l.state.activeItemIndex !== null) {
                let {dataRef: ve} = l.state.items[l.state.activeItemIndex];
                (Ee = (xe = ve.current) == null ? void 0 : xe.domRef.current) == null || Ee.click()
            }
            l.send({
                type: H.CloseMenu
            }),
            Yr(l.state.buttonElement);
            break;
        case ne.ArrowDown:
            return M.preventDefault(),
            M.stopPropagation(),
            l.send({
                type: H.GoToItem,
                focus: J.Next
            });
        case ne.ArrowUp:
            return M.preventDefault(),
            M.stopPropagation(),
            l.send({
                type: H.GoToItem,
                focus: J.Previous
            });
        case ne.Home:
        case ne.PageUp:
            return M.preventDefault(),
            M.stopPropagation(),
            l.send({
                type: H.GoToItem,
                focus: J.First
            });
        case ne.End:
        case ne.PageDown:
            return M.preventDefault(),
            M.stopPropagation(),
            l.send({
                type: H.GoToItem,
                focus: J.Last
            });
        case ne.Escape:
            M.preventDefault(),
            M.stopPropagation(),
            It.flushSync( () => l.send({
                type: H.CloseMenu
            })),
            (de = l.state.buttonElement) == null || de.focus({
                preventScroll: !0
            });
            break;
        case ne.Tab:
            M.preventDefault(),
            M.stopPropagation(),
            It.flushSync( () => l.send({
                type: H.CloseMenu
            })),
            Fa(l.state.buttonElement, M.shiftKey ? nr.Previous : nr.Next);
            break;
        default:
            M.key.length === 1 && (l.send({
                type: H.Search,
                value: M.key
            }),
            j.setTimeout( () => l.send({
                type: H.ClearSearch
            }), 350));
            break
        }
    }
    )
      , B = fe(M => {
        switch (M.key) {
        case ne.Space:
            M.preventDefault();
            break
        }
    }
    )
      , ee = f.useMemo( () => ({
        open: y === re.Open
    }), [y])
      , oe = Qr(p ? v() : {}, {
        "aria-activedescendant": Fe(l, l.selectors.activeDescendantId),
        "aria-labelledby": Fe(l, M => {
            var xe;
            return (xe = M.buttonElement) == null ? void 0 : xe.id
        }
        ),
        id: s,
        onKeyDown: V,
        onKeyUp: B,
        role: "menu",
        tabIndex: y === re.Open ? 0 : void 0,
        ref: k,
        style: {
            ...u.style,
            ...x,
            "--button-width": Ta(b, !0).width
        },
        ...Ca($)
    })
      , pe = Me();
    return Z.createElement(Ia, {
        enabled: i ? e.static || P : !1,
        ownerDocument: R
    }, pe({
        ourProps: oe,
        theirProps: u,
        slot: ee,
        defaultTag: un,
        features: fn,
        visible: S,
        name: "Menu.Items"
    }))
}
let mn = f.Fragment;
function pn(e, t) {
    let r = f.useId()
      , {id: s=`headlessui-menu-item-${r}`, disabled: n=!1, ...i} = e
      , o = zt("Menu.Item")
      , c = Fe(o, N => o.selectors.isActive(N, s))
      , u = f.useRef(null)
      , p = yt(t, u)
      , l = Fe(o, N => o.selectors.shouldScrollIntoView(N, s));
    Ke( () => {
        if (l)
            return Aa().requestAnimationFrame( () => {
                var N, S;
                (S = (N = u.current) == null ? void 0 : N.scrollIntoView) == null || S.call(N, {
                    block: "nearest"
                })
            }
            )
    }
    , [l, u]);
    let m = Oa(u)
      , x = f.useRef({
        disabled: n,
        domRef: u,
        get textValue() {
            return m()
        }
    });
    Ke( () => {
        x.current.disabled = n
    }
    , [x, n]),
    Ke( () => (o.actions.registerItem(s, x),
    () => o.actions.unregisterItem(s)), [x, s]);
    let v = fe( () => {
        o.send({
            type: H.CloseMenu
        })
    }
    )
      , O = fe(N => {
        if (n)
            return N.preventDefault();
        o.send({
            type: H.CloseMenu
        }),
        Yr(o.state.buttonElement)
    }
    )
      , F = fe( () => {
        if (n)
            return o.send({
                type: H.GoToItem,
                focus: J.Nothing
            });
        o.send({
            type: H.GoToItem,
            focus: J.Specific,
            id: s
        })
    }
    )
      , k = $a()
      , y = fe(N => {
        k.update(N),
        !n && (c || o.send({
            type: H.GoToItem,
            focus: J.Specific,
            id: s,
            trigger: ct.Pointer
        }))
    }
    )
      , b = fe(N => {
        k.wasMoved(N) && (n || c || o.send({
            type: H.GoToItem,
            focus: J.Specific,
            id: s,
            trigger: ct.Pointer
        }))
    }
    )
      , R = fe(N => {
        k.wasMoved(N) && (n || c && o.send({
            type: H.GoToItem,
            focus: J.Nothing
        }))
    }
    )
      , [z,L] = Jr()
      , [P,$] = Da()
      , D = f.useMemo( () => ({
        active: c,
        focus: c,
        disabled: n,
        close: v
    }), [c, n, v])
      , A = {
        id: s,
        ref: p,
        role: "menuitem",
        tabIndex: n === !0 ? void 0 : -1,
        "aria-disabled": n === !0 ? !0 : void 0,
        "aria-labelledby": z,
        "aria-describedby": P,
        disabled: void 0,
        onClick: O,
        onFocus: F,
        onPointerEnter: y,
        onMouseEnter: y,
        onPointerMove: b,
        onMouseMove: b,
        onPointerLeave: R,
        onMouseLeave: R
    }
      , w = Me();
    return Z.createElement(L, null, Z.createElement($, null, w({
        ourProps: A,
        theirProps: i,
        slot: D,
        defaultTag: mn,
        name: "Menu.Item"
    })))
}
let xn = "div";
function gn(e, t) {
    let[r,s] = Jr()
      , n = e
      , i = {
        ref: t,
        "aria-labelledby": r,
        role: "group"
    }
      , o = Me();
    return Z.createElement(s, null, o({
        ourProps: i,
        theirProps: n,
        slot: {},
        defaultTag: xn,
        name: "Menu.Section"
    }))
}
let yn = "header";
function bn(e, t) {
    let r = f.useId()
      , {id: s=`headlessui-menu-heading-${r}`, ...n} = e
      , i = za();
    Ke( () => i.register(s), [s, i.register]);
    let o = {
        id: s,
        ref: t,
        role: "presentation",
        ...i.props
    };
    return Me()({
        ourProps: o,
        theirProps: n,
        slot: {},
        defaultTag: yn,
        name: "Menu.Heading"
    })
}
let vn = "div";
function wn(e, t) {
    let r = e
      , s = {
        ref: t,
        role: "separator"
    };
    return Me()({
        ourProps: s,
        theirProps: r,
        slot: {},
        defaultTag: vn,
        name: "Menu.Separator"
    })
}
let kn = Le(ln)
  , as = Le(dn)
  , ns = Le(hn)
  , at = Le(pn)
  , jn = Le(gn)
  , Nn = Le(bn)
  , En = Le(wn)
  , Sn = Object.assign(kn, {
    Button: as,
    Items: ns,
    Item: at,
    Section: jn,
    Heading: Nn,
    Separator: En
});
function _n({title: e, titleId: t, ...r}, s) {
    return f.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": t
    }, r), e ? f.createElement("title", {
        id: t
    }, e) : null, f.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
    }))
}
const Fn = f.forwardRef(_n);
function Cn({title: e, titleId: t, ...r}, s) {
    return f.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": t
    }, r), e ? f.createElement("title", {
        id: t
    }, e) : null, f.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
    }))
}
const Et = f.forwardRef(Cn);
function Tn({title: e, titleId: t, ...r}, s) {
    return f.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": t
    }, r), e ? f.createElement("title", {
        id: t
    }, e) : null, f.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
    }))
}
const In = f.forwardRef(Tn);
function An({title: e, titleId: t, ...r}, s) {
    return f.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": t
    }, r), e ? f.createElement("title", {
        id: t
    }, e) : null, f.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
    }))
}
const On = f.forwardRef(An);
function $n({title: e, titleId: t, ...r}, s) {
    return f.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": t
    }, r), e ? f.createElement("title", {
        id: t
    }, e) : null, f.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
    }))
}
const ur = f.forwardRef($n);
function Dn({title: e, titleId: t, ...r}, s) {
    return f.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": t
    }, r), e ? f.createElement("title", {
        id: t
    }, e) : null, f.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
    }))
}
const is = f.forwardRef(Dn);
function Rn({title: e, titleId: t, ...r}, s) {
    return f.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": t
    }, r), e ? f.createElement("title", {
        id: t
    }, e) : null, f.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    }))
}
const Ln = f.forwardRef(Rn);
function Mn({title: e, titleId: t, ...r}, s) {
    return f.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": t
    }, r), e ? f.createElement("title", {
        id: t
    }, e) : null, f.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m4.5 12.75 6 6 9-13.5"
    }))
}
const Vn = f.forwardRef(Mn);
function Pn({title: e, titleId: t, ...r}, s) {
    return f.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": t
    }, r), e ? f.createElement("title", {
        id: t
    }, e) : null, f.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m19.5 8.25-7.5 7.5-7.5-7.5"
    }))
}
const zn = f.forwardRef(Pn);
function Un({title: e, titleId: t, ...r}, s) {
    return f.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": t
    }, r), e ? f.createElement("title", {
        id: t
    }, e) : null, f.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
    }), f.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    }))
}
const Bn = f.forwardRef(Un);
function qn({title: e, titleId: t, ...r}, s) {
    return f.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": t
    }, r), e ? f.createElement("title", {
        id: t
    }, e) : null, f.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
    }))
}
const Hn = f.forwardRef(qn);
function Wn({title: e, titleId: t, ...r}, s) {
    return f.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": t
    }, r), e ? f.createElement("title", {
        id: t
    }, e) : null, f.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
    }))
}
const Zn = f.forwardRef(Wn);
function Gn({title: e, titleId: t, ...r}, s) {
    return f.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": t
    }, r), e ? f.createElement("title", {
        id: t
    }, e) : null, f.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
    }))
}
const Kn = f.forwardRef(Gn);
function Qn({title: e, titleId: t, ...r}, s) {
    return f.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": t
    }, r), e ? f.createElement("title", {
        id: t
    }, e) : null, f.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
    }))
}
const Yn = f.forwardRef(Qn);
function Jn({title: e, titleId: t, ...r}, s) {
    return f.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": t
    }, r), e ? f.createElement("title", {
        id: t
    }, e) : null, f.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
    }))
}
const Xn = f.forwardRef(Jn);
function ei({title: e, titleId: t, ...r}, s) {
    return f.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": t
    }, r), e ? f.createElement("title", {
        id: t
    }, e) : null, f.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
    }))
}
const ti = f.forwardRef(ei);
function ri({title: e, titleId: t, ...r}, s) {
    return f.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": t
    }, r), e ? f.createElement("title", {
        id: t
    }, e) : null, f.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
    }))
}
const fr = f.forwardRef(ri);
function si({title: e, titleId: t, ...r}, s) {
    return f.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": t
    }, r), e ? f.createElement("title", {
        id: t
    }, e) : null, f.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    }))
}
const ai = f.forwardRef(si);
function ni({title: e, titleId: t, ...r}, s) {
    return f.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": t
    }, r), e ? f.createElement("title", {
        id: t
    }, e) : null, f.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
    }))
}
const ii = f.forwardRef(ni);
function oi({title: e, titleId: t, ...r}, s) {
    return f.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": t
    }, r), e ? f.createElement("title", {
        id: t
    }, e) : null, f.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
    }))
}
const li = f.forwardRef(oi);
function ci({title: e, titleId: t, ...r}, s) {
    return f.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": t
    }, r), e ? f.createElement("title", {
        id: t
    }, e) : null, f.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
    }))
}
const di = f.forwardRef(ci);
function ui({title: e, titleId: t, ...r}, s) {
    return f.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": t
    }, r), e ? f.createElement("title", {
        id: t
    }, e) : null, f.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
    }))
}
const fi = f.forwardRef(ui);
function hi({title: e, titleId: t, ...r}, s) {
    return f.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": t
    }, r), e ? f.createElement("title", {
        id: t
    }, e) : null, f.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 4.5v15m7.5-7.5h-15"
    }))
}
const mi = f.forwardRef(hi);
function pi({title: e, titleId: t, ...r}, s) {
    return f.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": t
    }, r), e ? f.createElement("title", {
        id: t
    }, e) : null, f.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
    }))
}
const xi = f.forwardRef(pi);
function gi({title: e, titleId: t, ...r}, s) {
    return f.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": t
    }, r), e ? f.createElement("title", {
        id: t
    }, e) : null, f.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
    }))
}
const yi = f.forwardRef(gi);
function bi({title: e, titleId: t, ...r}, s) {
    return f.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": t
    }, r), e ? f.createElement("title", {
        id: t
    }, e) : null, f.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
    }))
}
const vi = f.forwardRef(bi);
function wi({title: e, titleId: t, ...r}, s) {
    return f.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": t
    }, r), e ? f.createElement("title", {
        id: t
    }, e) : null, f.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
    }))
}
const ki = f.forwardRef(wi);
function ji({title: e, titleId: t, ...r}, s) {
    return f.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: s,
        "aria-labelledby": t
    }, r), e ? f.createElement("title", {
        id: t
    }, e) : null, f.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    }))
}
const hr = f.forwardRef(ji);
function Ni() {
    const {toggle: e, isExpanded: t} = gt();
    return a.jsxs("button", {
        onClick: e,
        className: ge(t && "active", "sidebar-toggle-btn cursor-pointer flex size-7 flex-col justify-center space-y-1.5 text-primary-600 outline-hidden focus:outline-hidden dark:text-primary-400 ltr:ml-0.5 rtl:mr-0.5"),
        children: [a.jsx("span", {}), a.jsx("span", {}), a.jsx("span", {})]
    })
}
const [Ei,Ve] = Ws("useChatContext must be used within ChatProvider")
  , os = [{
    id: "browsr-1",
    name: "browsr-1"
}]
  , Si = os[0];
function _i() {
    const {cardSkin: e} = Mt()
      , {selectedEngine: t, setSelectedEngine: r} = Ve();
    return a.jsxs("header", {
        className: ge(e === "bordered" ? "dark:bg-dark-900" : "dark:bg-dark-750", "transition-content relative z-10 flex h-[65px] w-full shrink-0 items-center justify-between border-b border-gray-150 bg-white px-[calc(var(--margin-x)-.5rem)] shadow-xs dark:border-dark-600"),
        children: [a.jsxs("div", {
            className: "flex min-w-0 items-center gap-1",
            children: [a.jsx("div", {
                className: "size-7 ltr:ml-1 rtl:mr-1",
                children: a.jsx(Ni, {})
            }), a.jsx(Fi, {
                engines: os,
                selectedEngine: t,
                onChange: r
            })]
        }), a.jsx("div", {
            className: "flex gap-2",
            children: a.jsx(W, {
                unstyled: !0,
                className: "gap-2 rounded-lg bg-linear-to-r from-green-400 to-blue-600 px-5 py-2 text-xs-plus text-white duration-100 ease-out [contain:paint] hover:opacity-[.85] focus:opacity-[.85] active:translate-y-px",
                children: a.jsx(tn, {
                    className: "size-4"
                })
            })
        })]
    })
}
function Fi({engines: e, selectedEngine: t, onChange: r}) {
    return a.jsx(Ua, {
        as: "div",
        value: t,
        onChange: r,
        children: ({open: s, value: n}) => a.jsxs("div", {
            className: "relative",
            children: [a.jsxs(Ba, {
                as: W,
                variant: "flat",
                className: "gap-2",
                children: [a.jsx("span", {
                    className: "truncate",
                    children: n.name
                }), a.jsx(zn, {
                    className: ge("size-5 text-gray-400 transition-transform dark:text-dark-300", s && "rotate-180"),
                    "aria-hidden": "true"
                })]
            }), a.jsx(Xr, {
                as: qa,
                enter: "transition ease-out",
                enterFrom: "opacity-0 translate-y-2",
                enterTo: "opacity-100 translate-y-0",
                leave: "transition ease-in",
                leaveFrom: "opacity-100 translate-y-0",
                leaveTo: "opacity-0 translate-y-2",
                className: "absolute z-10 mt-1 max-h-60 w-max overflow-auto rounded-lg border border-gray-300 bg-white py-1 shadow-lg shadow-gray-200/50 outline-hidden focus-visible:outline-hidden dark:border-dark-500 dark:bg-dark-750 dark:shadow-none",
                children: e.map(i => a.jsx(Ha, {
                    className: ({selected: o, focus: c}) => ge("relative w-full cursor-pointer select-none py-2 pl-10 pr-4 transition-colors rtl:pl-4 rtl:pr-10", c && !o && "bg-gray-100 dark:bg-dark-600", o ? "bg-primary-600 text-white dark:bg-primary-500" : "text-gray-800 dark:text-dark-100"),
                    value: i,
                    children: ({focus: o}) => a.jsxs(a.Fragment, {
                        children: [a.jsx("span", {
                            className: "block",
                            children: i.name
                        }), o ? a.jsx("span", {
                            className: "absolute inset-y-0 flex items-center ltr:left-0 ltr:pl-3 rtl:right-0 rtl:pr-3",
                            children: a.jsx(Vn, {
                                className: "size-5",
                                "aria-hidden": "true"
                            })
                        }) : null]
                    })
                }, i.id))
            })]
        })
    })
}
function ls({id: e, title: t, isActive: r, Icon: s, component: n, onKeyDown: i, ...o}) {
    var l, m;
    const c = n || "button"
      , {lgAndUp: u} = Hr()
      , p = (m = (l = Zs("root")) == null ? void 0 : l[e]) == null ? void 0 : m.info;
    return a.jsxs(c, {
        "data-root-menu-item": !0,
        "data-tooltip": u ? !0 : void 0,
        "data-tooltip-content": t,
        "data-tooltip-place": "right",
        className: ge("relative flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-lg outline-hidden transition-colors duration-200", r ? "bg-primary-600/10 text-primary-600 dark:bg-primary-400/15 dark:text-primary-400" : "hover:bg-primary-600/20 focus:bg-primary-600/20 active:bg-primary-600/25 dark:text-dark-200 dark:hover:bg-dark-300/20 dark:focus:bg-dark-300/20 dark:active:bg-dark-300/25 text-gray-500"),
        onKeyDown: Wr({
            siblingSelector: "[data-root-menu-item]",
            parentSelector: "[data-root-menu]",
            activateOnFocus: !1,
            loop: !0,
            orientation: "vertical",
            onKeyDown: i
        }),
        ...o,
        children: [s && a.jsx(s, {
            className: "size-7"
        }), p && p.val && a.jsx(Gs, {
            color: p.color,
            className: "text-tiny-plus dark:ring-dark-800 absolute top-0 right-0 -m-1 h-4 min-w-[1rem] rounded-full px-1 py-0 ring-1 ring-white",
            children: a.jsxs("span", {
                children: [" ", p.val]
            })
        })]
    })
}
ls.propTypes = {
    id: ie.string.isRequired,
    title: ie.string.isRequired,
    isActive: ie.bool,
    Icon: ie.elementType.isRequired,
    component: ie.elementType,
    onKeyDown: ie.func
};
function cs({nav: e, setActiveSegment: t, activeSegment: r}) {
    const {t: s} = Xa()
      , {isExpanded: n, open: i} = gt()
      , o = u => {
        t(u),
        n || i()
    }
      , c = ({path: u, type: p, title: l, transKey: m, linkProps: x}) => {
        const v = p === Zr;
        return {
            component: v ? Ks : "button",
            ...v && {
                to: u,
                ...x
            },
            onClick: v ? null : () => o(u),
            isActive: u === r,
            title: s(m) || l,
            path: u
        }
    }
    ;
    return a.jsx(Vt, {
        "data-root-menu": !0,
        className: "hide-scrollbar flex w-full grow flex-col items-center space-y-4 overflow-y-auto pt-5 lg:space-y-3 xl:pt-5 2xl:space-y-4",
        children: e.map( ({id: u, Icon: p, path: l, type: m, title: x, transKey: v, linkProps: O}) => a.jsx(ls, {
            ...c({
                path: l,
                type: m,
                title: x,
                transKey: v,
                linkProps: O
            }),
            id: u,
            Icon: p
        }, l))
    })
}
cs.propTypes = {
    nav: ie.array,
    activeSegment: ie.string,
    setActiveSegment: ie.func
};
function ds({nav: e, setActiveSegment: t, activeSegment: r}) {
    const {cardSkin: s} = Mt();
    return a.jsx("div", {
        className: "main-panel",
        children: a.jsx("div", {
            className: ge("flex h-full w-full flex-col items-center border-gray-150 bg-white dark:border-dark-600/80 ltr:border-r rtl:border-l", s === "shadow-sm" ? "dark:bg-dark-750" : "dark:bg-dark-900"),
            children: a.jsx(cs, {
                nav: e,
                activeSegment: r,
                setActiveSegment: t
            })
        })
    })
}
ds.propTypes = {
    nav: ie.array,
    setActiveSegment: ie.func,
    activeSegment: ie.string
};
const Ci = e => f.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...e
}, f.createElement("path", {
    d: "M5 8H19V16C19 17.8856 19 18.8284 18.4142 19.4142C17.8284 20 16.8856 20 15 20H9C7.11438 20 6.17157 20 5.58579 19.4142C5 18.8284 5 17.8856 5 16V8Z",
    fill: "currentColor",
    fillOpacity: .3
}), f.createElement("path", {
    d: "M12 8L11.7608 5.84709C11.6123 4.51089 10.4672 3.5 9.12282 3.5V3.5C7.68381 3.5 6.5 4.66655 6.5 6.10555V6.10555C6.5 6.97673 6.93539 7.79026 7.66025 8.2735L9.5 9.5",
    stroke: "currentColor",
    strokeLinecap: "round"
}), f.createElement("path", {
    d: "M12 8L12.2392 5.84709C12.3877 4.51089 13.5328 3.5 14.8772 3.5V3.5C16.3162 3.5 17.5 4.66655 17.5 6.10555V6.10555C17.5 6.97673 17.0646 7.79026 16.3397 8.2735L14.5 9.5",
    stroke: "currentColor",
    strokeLinecap: "round"
}), f.createElement("rect", {
    x: 4,
    y: 8,
    width: 16,
    height: 3,
    rx: 1,
    fill: "currentColor"
}), f.createElement("path", {
    d: "M12 11V15",
    stroke: "currentColor",
    strokeLinecap: "round"
}))
  , Ti = [{
    id: "ai-chat",
    type: Zr,
    path: "/",
    title: "AI Chat",
    transKey: "nav.apps.ai_chat",
    Icon: Ci
}];
var us = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
}
  , mr = Z.createContext && Z.createContext(us)
  , Ii = ["attr", "size", "title"];
function Ai(e, t) {
    if (e == null)
        return {};
    var r = Oi(e, t), s, n;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++)
            s = i[n],
            !(t.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (r[s] = e[s])
    }
    return r
}
function Oi(e, t) {
    if (e == null)
        return {};
    var r = {};
    for (var s in e)
        if (Object.prototype.hasOwnProperty.call(e, s)) {
            if (t.indexOf(s) >= 0)
                continue;
            r[s] = e[s]
        }
    return r
}
function dt() {
    return dt = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var s in r)
                Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
        }
        return e
    }
    ,
    dt.apply(this, arguments)
}
function pr(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        t && (s = s.filter(function(n) {
            return Object.getOwnPropertyDescriptor(e, n).enumerable
        })),
        r.push.apply(r, s)
    }
    return r
}
function ut(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? pr(Object(r), !0).forEach(function(s) {
            $i(e, s, r[s])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pr(Object(r)).forEach(function(s) {
            Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(r, s))
        })
    }
    return e
}
function $i(e, t, r) {
    return t = Di(t),
    t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function Di(e) {
    var t = Ri(e, "string");
    return typeof t == "symbol" ? t : t + ""
}
function Ri(e, t) {
    if (typeof e != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var s = r.call(e, t);
        if (typeof s != "object")
            return s;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function fs(e) {
    return e && e.map( (t, r) => Z.createElement(t.tag, ut({
        key: r
    }, t.attr), fs(t.child)))
}
function hs(e) {
    return t => Z.createElement(Li, dt({
        attr: ut({}, e.attr)
    }, t), fs(e.child))
}
function Li(e) {
    var t = r => {
        var {attr: s, size: n, title: i} = e, o = Ai(e, Ii), c = n || r.size || "1em", u;
        return r.className && (u = r.className),
        e.className && (u = (u ? u + " " : "") + e.className),
        Z.createElement("svg", dt({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, r.attr, s, o, {
            className: u,
            style: ut(ut({
                color: e.color || r.color
            }, r.style), e.style),
            height: c,
            width: c,
            xmlns: "http://www.w3.org/2000/svg"
        }), i && Z.createElement("title", null, i), e.children)
    }
    ;
    return mr !== void 0 ? Z.createElement(mr.Consumer, null, r => t(r)) : t(us)
}
function ms(e) {
    return hs({
        attr: {
            viewBox: "0 0 24 24",
            fill: "currentColor"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M13.5 2C13.5 2.44425 13.3069 2.84339 13 3.11805V5H18C19.6569 5 21 6.34315 21 8V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V8C3 6.34315 4.34315 5 6 5H11V3.11805C10.6931 2.84339 10.5 2.44425 10.5 2C10.5 1.17157 11.1716 0.5 12 0.5C12.8284 0.5 13.5 1.17157 13.5 2ZM6 7C5.44772 7 5 7.44772 5 8V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V8C19 7.44772 18.5523 7 18 7H13H11H6ZM2 10H0V16H2V10ZM22 10H24V16H22V10ZM9 14.5C9.82843 14.5 10.5 13.8284 10.5 13C10.5 12.1716 9.82843 11.5 9 11.5C8.17157 11.5 7.5 12.1716 7.5 13C7.5 13.8284 8.17157 14.5 9 14.5ZM15 14.5C15.8284 14.5 16.5 13.8284 16.5 13C16.5 12.1716 15.8284 11.5 15 11.5C14.1716 11.5 13.5 12.1716 13.5 13C13.5 13.8284 14.1716 14.5 15 14.5Z"
            },
            child: []
        }]
    })(e)
}
function Mi() {
    const {close: e} = gt();
    return a.jsxs("div", {
        className: "relative flex h-18 w-full shrink-0 items-center justify-between pl-4 pr-1 rtl:pl-1 rtl:pr-4",
        children: [a.jsxs("div", {
            className: "flex items-center gap-3",
            children: [a.jsx(At, {
                size: 9,
                initialColor: "info",
                initialVariant: "soft",
                children: a.jsx(ms, {
                    className: "size-4.5"
                })
            }), a.jsx("p", {
                className: "truncate text-base tracking-wider text-gray-800 dark:text-dark-100",
                children: "BROWSR"
            })]
        }), a.jsx(W, {
            onClick: e,
            isIcon: !0,
            variant: "flat",
            className: "size-7 rounded-full xl:hidden",
            children: a.jsx(Qs, {
                className: "size-6 rtl:rotate-180"
            })
        })]
    })
}
function Vi() {
    const {setActiveChatId: e, activeChatId: t} = Ve()
      , r = () => {
        console.log("New Chat:", t),
        e(null),
        console.log("Set activeChatId to null"),
        setTimeout( () => {
            console.log("After timeout, activeChatId should be null")
        }
        , 100)
    }
    ;
    return a.jsx("div", {
        children: a.jsx("div", {
            className: "px-4 pt-2",
            children: a.jsxs(W, {
                onClick: r,
                variant: "outlined",
                className: "w-full gap-2 rounded-full",
                children: [a.jsx(mi, {
                    className: "size-4"
                }), a.jsx("span", {
                    children: "New Chat"
                })]
            })
        })
    })
}
function Pi() {
    return a.jsxs("footer", {
        className: "flex h-10 shrink-0 justify-between border-t border-gray-150 px-1.5 py-1 dark:border-dark-600",
        children: [a.jsx(W, {
            "data-tooltip": !0,
            "data-tooltip-content": "Setting",
            variant: "flat",
            isIcon: !0,
            className: "size-8 rounded-full",
            children: a.jsx(Bn, {
                className: "size-4.5"
            })
        }), a.jsxs("div", {
            className: "flex",
            children: [a.jsx(W, {
                "data-tooltip": !0,
                "data-tooltip-content": "Feedback",
                variant: "flat",
                isIcon: !0,
                className: "size-8 rounded-full",
                children: a.jsx(is, {
                    className: "size-4.5"
                })
            }), a.jsx(W, {
                "data-tooltip": !0,
                "data-tooltip-content": "Help",
                variant: "flat",
                isIcon: !0,
                className: "size-8 rounded-full",
                children: a.jsx(xi, {
                    className: "size-4.5"
                })
            })]
        })]
    })
}
function zi(e) {
    return hs({
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M9 4v6l-2 4v2h10v-2l-2 -4v-6"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M12 16l0 5"
            },
            child: []
        }, {
            tag: "path",
            attr: {
                d: "M8 4l8 0"
            },
            child: []
        }]
    })(e)
}
function Ui() {
    const {chats: e, setActiveChatId: t, deleteChat: r, isLoading: s} = Ve()
      , {close: n} = gt()
      , {lgAndDown: i} = Hr()
      , [o,c] = f.useState("")
      , u = l => {
        t(l),
        i && n()
    }
      , p = o ? e.filter(l => {
        const m = l.title && l.title.toLowerCase().includes(o.toLowerCase())
          , x = l.messages && l.messages.some(v => v.q.toLowerCase().includes(o.toLowerCase()) || v.a && v.a.toLowerCase().includes(o.toLowerCase()));
        return m || x
    }
    ) : e;
    return a.jsxs("div", {
        className: "flex grow flex-col overflow-hidden",
        children: [a.jsxs("div", {
            className: "flex min-w-0 items-center justify-between px-4",
            children: [a.jsx("span", {
                className: "truncate text-tiny-plus font-medium uppercase",
                children: "Recent Chats"
            }), a.jsxs("div", {
                className: "relative",
                children: [a.jsx(W, {
                    variant: "flat",
                    isIcon: !0,
                    className: "size-6 rounded-full ltr:-mr-1.5 rtl:-ml-1.5",
                    onClick: () => document.getElementById("chat-search").focus(),
                    children: a.jsx(ai, {
                        className: "size-3.5"
                    })
                }), a.jsx("input", {
                    id: "chat-search",
                    type: "text",
                    placeholder: "Search chats...",
                    className: "absolute right-6 top-0 h-6 w-0 border-none bg-transparent p-0 text-xs outline-none transition-all focus:w-36 focus:ring-0",
                    value: o,
                    onChange: l => c(l.target.value)
                })]
            })]
        }), a.jsx(Vt, {
            className: "hide-scrollbar min-w-0 px-2 pt-1",
            children: s && e.length === 0 ? a.jsx("ul", {
                className: "space-y-1",
                children: [1, 2, 3, 4].map(l => a.jsx("li", {
                    className: "p-2",
                    children: a.jsxs("div", {
                        className: "flex gap-2",
                        children: [a.jsx(Be, {
                            className: "h-4.5 w-4.5 rounded-full"
                        }), a.jsxs("div", {
                            className: "w-full",
                            children: [a.jsx(Be, {
                                className: "h-4 w-3/4 rounded-sm"
                            }), a.jsx(Be, {
                                className: "mt-1 h-3 w-full rounded-sm"
                            })]
                        })]
                    })
                }, l))
            }) : p.length === 0 ? a.jsx("div", {
                className: "py-4 text-center text-sm text-gray-400 dark:text-dark-300",
                children: o ? "No chats match your search" : "No conversations yet"
            }) : a.jsx("ul", {
                "data-chat-wrapper": !0,
                children: p.map(l => a.jsx("li", {
                    children: a.jsxs(W, {
                        component: "div",
                        role: "button",
                        "data-chat-item": !0,
                        variant: "flat",
                        className: "group w-full min-w-0 items-start justify-start gap-2 p-2 text-xs-plus",
                        onClick: () => u(l.id),
                        onKeyDown: Wr({
                            siblingSelector: "[data-chat-item]",
                            parentSelector: "[data-chat-wrapper]",
                            activateOnFocus: !1,
                            loop: !1,
                            orientation: "vertical"
                        }),
                        children: [a.jsx(is, {
                            className: "size-4.5 shrink-0 text-gray-400 transition-colors group-hover:text-gray-500 group-focus:text-gray-500 dark:text-dark-300 dark:group-hover:text-dark-200 dark:group-focus:text-dark-200"
                        }), a.jsxs("div", {
                            className: "-mt-0.5 flex min-w-0 flex-1 items-center justify-between gap-2 text-start",
                            children: [a.jsxs("div", {
                                className: "min-w-0 flex-1",
                                children: [a.jsx("p", {
                                    className: "truncate text-gray-800 dark:text-dark-100",
                                    children: l.title || (l.messages && l.messages.length > 0 ? l.messages[0].q : "New conversation")
                                }), a.jsx("div", {
                                    className: "mt-1 truncate text-xs text-gray-400 dark:text-dark-300",
                                    children: !l.messages || l.messages.length === 0 ? a.jsx(Be, {
                                        className: "mt-1 h-3 w-full rounded-sm"
                                    }) : l.messages[l.messages.length - 1].a || "Waiting for response..."
                                })]
                            }), a.jsx(Bi, {
                                chatId: l.id,
                                onDelete: r
                            })]
                        })]
                    })
                }, l.id))
            })
        })]
    })
}
function Bi({chatId: e, onDelete: t}) {
    return a.jsxs(Sn, {
        as: "div",
        className: "relative inline-block text-end",
        children: [a.jsx(as, {
            as: W,
            variant: "flat",
            isIcon: !0,
            className: ({open: r}) => ge(r ? "opacity-100" : "opacity-0", "size-5 rounded-full group-hover:opacity-100 group-focus:opacity-100 ltr:-mr-1 rtl:-ml-1"),
            children: a.jsx(Zn, {
                className: "size-4 stroke-2"
            })
        }), a.jsxs(Xr, {
            as: ns,
            enter: "transition ease-out",
            enterFrom: "opacity-0 translate-y-2",
            enterTo: "opacity-100 translate-y-0",
            leave: "transition ease-in",
            leaveFrom: "opacity-100 translate-y-0",
            leaveTo: "opacity-0 translate-y-2",
            className: "absolute z-100 mt-1.5 min-w-[10rem] rounded-lg border border-gray-300 bg-white py-1 shadow-soft shadow-gray-200/50 outline-hidden focus-visible:outline-hidden dark:border-dark-500 dark:bg-dark-700 dark:shadow-none ltr:right-0 rtl:left-0",
            children: [a.jsx(at, {
                children: ({focus: r}) => a.jsxs("button", {
                    className: ge("flex h-9 w-full items-center space-x-3 px-3 tracking-wide outline-hidden transition-colors ", r && "bg-gray-100 text-gray-800 dark:bg-dark-600 dark:text-dark-100"),
                    children: [a.jsx(zi, {
                        className: "size-4.5"
                    }), a.jsx("span", {
                        children: "Pin Chat"
                    })]
                })
            }), a.jsx(at, {
                children: ({focus: r}) => a.jsxs("button", {
                    className: ge("flex h-9 w-full items-center space-x-3 px-3 tracking-wide outline-hidden transition-colors ", r && "bg-gray-100 text-gray-800 dark:bg-dark-600 dark:text-dark-100"),
                    children: [a.jsx(di, {
                        className: "size-4.5"
                    }), a.jsx("span", {
                        children: "Edit"
                    })]
                })
            }), a.jsx(at, {
                children: ({focus: r}) => a.jsxs("button", {
                    onClick: () => t(e),
                    className: ge("flex h-9 w-full items-center space-x-3 px-3 tracking-wide outline-hidden transition-colors ", r && "bg-gray-100 text-gray-800 dark:bg-dark-600 dark:text-dark-100"),
                    children: [a.jsx(ki, {
                        className: "size-4.5"
                    }), a.jsx("span", {
                        children: "Delete"
                    })]
                })
            })]
        })]
    })
}
function qi() {
    const {cardSkin: e} = Mt();
    return a.jsx("div", {
        className: ge("prime-panel flex flex-col", e === "shadow-sm" ? "shadow-soft dark:shadow-dark-900/60" : "border-gray-200 dark:border-dark-600/80 ltr:border-r rtl:border-l"),
        children: a.jsxs("div", {
            className: ge("flex h-full grow flex-col bg-white ltr:pl-(--main-panel-width) rtl:pr-(--main-panel-width)", e === "shadow-sm" ? "dark:bg-dark-750" : "dark:bg-dark-900"),
            children: [a.jsx(Mi, {}), a.jsx(Vi, {}), a.jsx("div", {
                className: "mx-4 my-3 h-px shrink-0 bg-gray-200 dark:bg-dark-500"
            }), a.jsx(Ui, {}), a.jsx(Pi, {})]
        })
    })
}
function Hi() {
    return a.jsxs(a.Fragment, {
        children: [a.jsx(ds, {
            nav: Ti,
            activeSegment: "/apps"
        }), a.jsx(qi, {})]
    })
}
G(),
G(),
G(),
G(),
G(),
G(),
G(),
G(),
G(),
G(),
G(),
G(),
G(),
G(),
G(),
G(),
G(),
G(),
G(),
G();
const xr = {
    name: "Alfredo Elliott",
    avatar: null
};
function Wi({holdersData: e}) {
    const [t,r] = f.useState("rank")
      , [s,n] = f.useState("asc");
    if (!e || !e.data || !e.data.attributes || !e.data.attributes.holders)
        return a.jsx("div", {
            children: "No holder data available"
        });
    const {holders: i} = e.data.attributes
      , o = u => {
        u === t ? n(s === "asc" ? "desc" : "asc") : (r(u),
        n("asc"))
    }
      , c = [...i].sort( (u, p) => {
        let l = u[t]
          , m = p[t];
        return (t === "amount" || t === "percentage" || t === "value" || t === "rank") && (l = parseFloat(l),
        m = parseFloat(m)),
        s === "asc" ? l > m ? 1 : -1 : l < m ? 1 : -1
    }
    );
    return a.jsxs(me, {
        className: "overflow-hidden border-gray-200 dark:border-dark-600",
        children: [a.jsxs("div", {
            className: "p-4 bg-gray-50 dark:bg-dark-800",
            children: [a.jsx("h3", {
                className: "text-lg font-medium",
                children: "Top Token Holders"
            }), a.jsxs("p", {
                className: "text-sm text-gray-500 dark:text-dark-300",
                children: ["Last updated: ", new Date(e.data.attributes.last_updated_at).toLocaleString()]
            })]
        }), a.jsx("div", {
            className: "max-h-96 overflow-auto",
            children: a.jsxs("table", {
                className: "min-w-full divide-y divide-gray-200 dark:divide-dark-600",
                children: [a.jsx("thead", {
                    className: "bg-gray-100 dark:bg-dark-700 sticky top-0 z-10",
                    children: a.jsx("tr", {
                        children: [{
                            id: "rank",
                            label: "Rank"
                        }, {
                            id: "address",
                            label: "Address"
                        }, {
                            id: "label",
                            label: "Label"
                        }, {
                            id: "percentage",
                            label: "Percentage"
                        }, {
                            id: "amount",
                            label: "Amount"
                        }, {
                            id: "value",
                            label: "Value (USD)"
                        }].map(u => a.jsx("th", {
                            className: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-dark-300 uppercase tracking-wider cursor-pointer",
                            onClick: () => o(u.id),
                            children: a.jsxs("div", {
                                className: "flex items-center",
                                children: [u.label, t === u.id && a.jsx("span", {
                                    className: "ml-1",
                                    children: s === "asc" ? "↑" : "↓"
                                })]
                            })
                        }, u.id))
                    })
                }), a.jsx("tbody", {
                    className: "bg-white dark:bg-dark-750 divide-y divide-gray-200 dark:divide-dark-600",
                    children: c.map(u => a.jsxs("tr", {
                        className: "hover:bg-gray-50 dark:hover:bg-dark-700",
                        children: [a.jsx("td", {
                            className: "px-4 py-3 whitespace-nowrap text-sm",
                            children: u.rank
                        }), a.jsxs("td", {
                            className: "px-4 py-3 whitespace-nowrap text-sm font-mono",
                            children: [u.address.substring(0, 6), "...", u.address.substring(38)]
                        }), a.jsx("td", {
                            className: "px-4 py-3 whitespace-nowrap text-sm",
                            children: u.label || "-"
                        }), a.jsxs("td", {
                            className: "px-4 py-3 whitespace-nowrap text-sm",
                            children: [parseFloat(u.percentage).toFixed(2), "%"]
                        }), a.jsx("td", {
                            className: "px-4 py-3 whitespace-nowrap text-sm",
                            children: parseFloat(u.amount).toLocaleString()
                        }), a.jsxs("td", {
                            className: "px-4 py-3 whitespace-nowrap text-sm",
                            children: ["$", parseFloat(u.value).toLocaleString()]
                        })]
                    }, u.address))
                })]
            })
        })]
    })
}
function Zi({poolsData: e}) {
    const [t,r] = f.useState("liquidity_usd")
      , [s,n] = f.useState("desc");
    if (!e || !e.data || !e.data.length)
        return a.jsx("div", {
            children: "No pool data available"
        });
    const i = e.data
      , o = u => {
        u === t ? n(s === "asc" ? "desc" : "asc") : (r(u),
        n("desc"))
    }
      , c = [...i].sort( (u, p) => {
        var x, v;
        let l = (x = u.attributes) == null ? void 0 : x[t]
          , m = (v = p.attributes) == null ? void 0 : v[t];
        return l === void 0 && (l = 0),
        m === void 0 && (m = 0),
        typeof l == "string" && !isNaN(parseFloat(l)) && (l = parseFloat(l)),
        typeof m == "string" && !isNaN(parseFloat(m)) && (m = parseFloat(m)),
        s === "asc" ? l > m ? 1 : -1 : l < m ? 1 : -1
    }
    );
    return a.jsxs(me, {
        className: "overflow-hidden border-gray-200 dark:border-dark-600",
        children: [a.jsx("div", {
            className: "p-4 bg-gray-50 dark:bg-dark-800",
            children: a.jsx("h3", {
                className: "text-lg font-medium",
                children: "Liquidity Pools"
            })
        }), a.jsx("div", {
            className: "max-h-96 overflow-auto",
            children: a.jsxs("table", {
                className: "min-w-full divide-y divide-gray-200 dark:divide-dark-600",
                children: [a.jsx("thead", {
                    className: "bg-gray-100 dark:bg-dark-700 sticky top-0 z-10",
                    children: a.jsx("tr", {
                        children: [{
                            id: "name",
                            label: "Pool"
                        }, {
                            id: "exchange",
                            label: "Exchange"
                        }, {
                            id: "liquidity_usd",
                            label: "Liquidity (USD)"
                        }, {
                            id: "volume_24h",
                            label: "24h Volume"
                        }, {
                            id: "fee",
                            label: "Fee"
                        }].map(u => a.jsx("th", {
                            className: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-dark-300 uppercase tracking-wider cursor-pointer",
                            onClick: () => o(u.id),
                            children: a.jsxs("div", {
                                className: "flex items-center",
                                children: [u.label, t === u.id && a.jsx("span", {
                                    className: "ml-1",
                                    children: s === "asc" ? "↑" : "↓"
                                })]
                            })
                        }, u.id))
                    })
                }), a.jsx("tbody", {
                    className: "bg-white dark:bg-dark-750 divide-y divide-gray-200 dark:divide-dark-600",
                    children: c.map(u => {
                        var p, l, m, x, v;
                        return a.jsxs("tr", {
                            className: "hover:bg-gray-50 dark:hover:bg-dark-700",
                            children: [a.jsx("td", {
                                className: "px-4 py-3 whitespace-nowrap text-sm",
                                children: ((p = u.attributes) == null ? void 0 : p.name) || "-"
                            }), a.jsx("td", {
                                className: "px-4 py-3 whitespace-nowrap text-sm",
                                children: ((l = u.attributes) == null ? void 0 : l.exchange) || "-"
                            }), a.jsxs("td", {
                                className: "px-4 py-3 whitespace-nowrap text-sm",
                                children: ["$", parseFloat(((m = u.attributes) == null ? void 0 : m.liquidity_usd) || 0).toLocaleString()]
                            }), a.jsxs("td", {
                                className: "px-4 py-3 whitespace-nowrap text-sm",
                                children: ["$", parseFloat(((x = u.attributes) == null ? void 0 : x.volume_24h) || 0).toLocaleString()]
                            }), a.jsxs("td", {
                                className: "px-4 py-3 whitespace-nowrap text-sm",
                                children: [parseFloat(((v = u.attributes) == null ? void 0 : v.fee) || 0).toFixed(2), "%"]
                            })]
                        }, u.id)
                    }
                    )
                })]
            })
        })]
    })
}
function Gi({tradesData: e}) {
    const [t,r] = f.useState("block_timestamp")
      , [s,n] = f.useState("desc");
    if (!e || !e.data || !e.data.length)
        return a.jsx("div", {
            children: "No trades data available"
        });
    const i = e.data
      , o = l => {
        l === t ? n(s === "asc" ? "desc" : "asc") : (r(l),
        n("desc"))
    }
      , c = l => l ? `${l.substring(0, 6)}...${l.substring(l.length - 4)}` : "-"
      , u = l => {
        try {
            return new Date(l).toLocaleString()
        } catch {
            return l
        }
    }
      , p = [...i].sort( (l, m) => {
        var O, F;
        let x = (O = l.attributes) == null ? void 0 : O[t]
          , v = (F = m.attributes) == null ? void 0 : F[t];
        return x === void 0 && (x = 0),
        v === void 0 && (v = 0),
        t === "block_timestamp" ? (x = new Date(x).getTime(),
        v = new Date(v).getTime()) : typeof x == "string" && !isNaN(parseFloat(x)) && (x = parseFloat(x)),
        typeof v == "string" && !isNaN(parseFloat(v)) && (v = parseFloat(v)),
        s === "asc" ? x > v ? 1 : -1 : x < v ? 1 : -1
    }
    );
    return a.jsxs(me, {
        className: "overflow-hidden border-gray-200 dark:border-dark-600",
        children: [a.jsx("div", {
            className: "p-4 bg-gray-50 dark:bg-dark-800",
            children: a.jsx("h3", {
                className: "text-lg font-medium",
                children: "Recent Trades"
            })
        }), a.jsx("div", {
            className: "max-h-96 overflow-auto",
            children: a.jsxs("table", {
                className: "min-w-full divide-y divide-gray-200 dark:divide-dark-600",
                children: [a.jsx("thead", {
                    className: "bg-gray-100 dark:bg-dark-700 sticky top-0 z-10",
                    children: a.jsx("tr", {
                        children: [{
                            id: "block_timestamp",
                            label: "Time"
                        }, {
                            id: "kind",
                            label: "Type"
                        }, {
                            id: "price_to_in_usd",
                            label: "Price (USD)"
                        }, {
                            id: "from_token_amount",
                            label: "From Amount"
                        }, {
                            id: "to_token_amount",
                            label: "To Amount"
                        }, {
                            id: "volume_in_usd",
                            label: "Volume (USD)"
                        }, {
                            id: "tx_from_address",
                            label: "Trader"
                        }].map(l => a.jsx("th", {
                            className: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-dark-300 uppercase tracking-wider cursor-pointer",
                            onClick: () => o(l.id),
                            children: a.jsxs("div", {
                                className: "flex items-center",
                                children: [l.label, t === l.id && a.jsx("span", {
                                    className: "ml-1",
                                    children: s === "asc" ? "↑" : "↓"
                                })]
                            })
                        }, l.id))
                    })
                }), a.jsx("tbody", {
                    className: "bg-white dark:bg-dark-750 divide-y divide-gray-200 dark:divide-dark-600",
                    children: p.map(l => {
                        var m, x, v, O, F, k, y, b, R;
                        return a.jsxs("tr", {
                            className: "hover:bg-gray-50 dark:hover:bg-dark-700",
                            children: [a.jsx("td", {
                                className: "px-4 py-3 whitespace-nowrap text-sm",
                                children: u((m = l.attributes) == null ? void 0 : m.block_timestamp)
                            }), a.jsx("td", {
                                className: "px-4 py-3 whitespace-nowrap text-sm",
                                children: a.jsx("span", {
                                    className: `inline-flex rounded-full px-2 py-1 text-xs font-semibold ${((x = l.attributes) == null ? void 0 : x.kind) === "buy" ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400" : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"}`,
                                    children: ((O = (v = l.attributes) == null ? void 0 : v.kind) == null ? void 0 : O.toUpperCase()) || "-"
                                })
                            }), a.jsxs("td", {
                                className: "px-4 py-3 whitespace-nowrap text-sm",
                                children: ["$", parseFloat(((F = l.attributes) == null ? void 0 : F.price_to_in_usd) || 0).toFixed(6)]
                            }), a.jsx("td", {
                                className: "px-4 py-3 whitespace-nowrap text-sm",
                                children: parseFloat(((k = l.attributes) == null ? void 0 : k.from_token_amount) || 0).toLocaleString(void 0, {
                                    maximumFractionDigits: 6
                                })
                            }), a.jsx("td", {
                                className: "px-4 py-3 whitespace-nowrap text-sm",
                                children: parseFloat(((y = l.attributes) == null ? void 0 : y.to_token_amount) || 0).toLocaleString(void 0, {
                                    maximumFractionDigits: 6
                                })
                            }), a.jsxs("td", {
                                className: "px-4 py-3 whitespace-nowrap text-sm",
                                children: ["$", parseFloat(((b = l.attributes) == null ? void 0 : b.volume_in_usd) || 0).toLocaleString(void 0, {
                                    maximumFractionDigits: 2
                                })]
                            }), a.jsx("td", {
                                className: "px-4 py-3 whitespace-nowrap text-sm font-mono",
                                children: c((R = l.attributes) == null ? void 0 : R.tx_from_address)
                            })]
                        }, l.id)
                    }
                    )
                })]
            })
        })]
    })
}
function Ki({trendingData: e}) {
    if (!e || !e.coins || !e.coins.length)
        return a.jsx("div", {
            children: "No trending coins data available"
        });
    const t = e.coins;
    return a.jsxs(me, {
        className: "overflow-hidden border-gray-200 dark:border-dark-600",
        children: [a.jsx("div", {
            className: "p-4 bg-gray-50 dark:bg-dark-800",
            children: a.jsx("h3", {
                className: "text-lg font-medium",
                children: "Trending Coins"
            })
        }), a.jsx("div", {
            className: "max-h-96 overflow-auto",
            children: a.jsxs("table", {
                className: "min-w-full divide-y divide-gray-200 dark:divide-dark-600",
                children: [a.jsx("thead", {
                    className: "bg-gray-100 dark:bg-dark-700 sticky top-0 z-10",
                    children: a.jsxs("tr", {
                        children: [a.jsx("th", {
                            className: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-dark-300 uppercase tracking-wider",
                            children: "Rank"
                        }), a.jsx("th", {
                            className: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-dark-300 uppercase tracking-wider",
                            children: "Coin"
                        }), a.jsx("th", {
                            className: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-dark-300 uppercase tracking-wider",
                            children: "Symbol"
                        }), a.jsx("th", {
                            className: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-dark-300 uppercase tracking-wider",
                            children: "Price (USD)"
                        }), a.jsx("th", {
                            className: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-dark-300 uppercase tracking-wider",
                            children: "24h Change"
                        }), a.jsx("th", {
                            className: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-dark-300 uppercase tracking-wider",
                            children: "Market Cap"
                        })]
                    })
                }), a.jsx("tbody", {
                    className: "bg-white dark:bg-dark-750 divide-y divide-gray-200 dark:divide-dark-600",
                    children: t.map( (r, s) => {
                        var n, i, o, c;
                        return a.jsxs("tr", {
                            className: "hover:bg-gray-50 dark:hover:bg-dark-700",
                            children: [a.jsx("td", {
                                className: "px-4 py-3 whitespace-nowrap text-sm",
                                children: s + 1
                            }), a.jsx("td", {
                                className: "px-4 py-3 whitespace-nowrap",
                                children: a.jsxs("div", {
                                    className: "flex items-center",
                                    children: [r.item.thumb && a.jsx("img", {
                                        src: r.item.thumb,
                                        alt: r.item.name,
                                        className: "h-6 w-6 mr-2 rounded-full"
                                    }), a.jsx("span", {
                                        className: "text-sm font-medium",
                                        children: r.item.name
                                    })]
                                })
                            }), a.jsx("td", {
                                className: "px-4 py-3 whitespace-nowrap text-sm",
                                children: r.item.symbol
                            }), a.jsxs("td", {
                                className: "px-4 py-3 whitespace-nowrap text-sm",
                                children: ["$", (n = r.item.data) != null && n.price ? parseFloat(r.item.data.price).toFixed(6) : "N/A"]
                            }), a.jsx("td", {
                                className: "px-4 py-3 whitespace-nowrap text-sm",
                                children: ((o = (i = r.item.data) == null ? void 0 : i.price_change_percentage_24h) == null ? void 0 : o.usd) !== void 0 ? a.jsxs("span", {
                                    className: `inline-flex rounded-full px-2 py-1 text-xs font-semibold ${parseFloat(r.item.data.price_change_percentage_24h.usd) >= 0 ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400" : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"}`,
                                    children: [parseFloat(r.item.data.price_change_percentage_24h.usd).toFixed(2), "%"]
                                }) : "N/A"
                            }), a.jsx("td", {
                                className: "px-4 py-3 whitespace-nowrap text-sm",
                                children: ((c = r.item.data) == null ? void 0 : c.market_cap) || "N/A"
                            })]
                        }, r.item.id)
                    }
                    )
                })]
            })
        })]
    })
}
function Qi({gainersLosersData: e}) {
    const [t,r] = f.useState("gainers");
    if (!e || !e.top_gainers && !e.top_losers)
        return a.jsx("div", {
            children: "No gainers/losers data available"
        });
    const s = e.top_gainers || []
      , n = e.top_losers || []
      , i = o => a.jsx("div", {
        className: "max-h-96 overflow-auto",
        children: a.jsxs("table", {
            className: "min-w-full divide-y divide-gray-200 dark:divide-dark-600",
            children: [a.jsx("thead", {
                className: "bg-gray-100 dark:bg-dark-700 sticky top-0 z-10",
                children: a.jsxs("tr", {
                    children: [a.jsx("th", {
                        className: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-dark-300 uppercase tracking-wider",
                        children: "Rank"
                    }), a.jsx("th", {
                        className: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-dark-300 uppercase tracking-wider",
                        children: "Coin"
                    }), a.jsx("th", {
                        className: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-dark-300 uppercase tracking-wider",
                        children: "Symbol"
                    }), a.jsx("th", {
                        className: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-dark-300 uppercase tracking-wider",
                        children: "Price"
                    }), a.jsx("th", {
                        className: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-dark-300 uppercase tracking-wider",
                        children: "24h Volume"
                    }), a.jsx("th", {
                        className: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-dark-300 uppercase tracking-wider",
                        children: "Change"
                    })]
                })
            }), a.jsx("tbody", {
                className: "bg-white dark:bg-dark-750 divide-y divide-gray-200 dark:divide-dark-600",
                children: o.map( (c, u) => a.jsxs("tr", {
                    className: "hover:bg-gray-50 dark:hover:bg-dark-700",
                    children: [a.jsx("td", {
                        className: "px-4 py-3 whitespace-nowrap text-sm",
                        children: u + 1
                    }), a.jsx("td", {
                        className: "px-4 py-3 whitespace-nowrap",
                        children: a.jsxs("div", {
                            className: "flex items-center",
                            children: [c.image && a.jsx("img", {
                                src: c.image,
                                alt: c.name,
                                className: "h-6 w-6 mr-2 rounded-full"
                            }), a.jsx("span", {
                                className: "text-sm font-medium",
                                children: c.name
                            })]
                        })
                    }), a.jsx("td", {
                        className: "px-4 py-3 whitespace-nowrap text-sm",
                        children: c.symbol
                    }), a.jsxs("td", {
                        className: "px-4 py-3 whitespace-nowrap text-sm",
                        children: ["$", parseFloat(c.usd).toLocaleString(void 0, {
                            maximumFractionDigits: 6
                        })]
                    }), a.jsxs("td", {
                        className: "px-4 py-3 whitespace-nowrap text-sm",
                        children: ["$", parseFloat(c.usd_24h_vol).toLocaleString(void 0, {
                            maximumFractionDigits: 0
                        })]
                    }), a.jsx("td", {
                        className: "px-4 py-3 whitespace-nowrap text-sm",
                        children: a.jsxs("span", {
                            className: `inline-flex rounded-full px-2 py-1 text-xs font-semibold ${c.usd_24h_change >= 0 ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400" : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"}`,
                            children: [c.usd_24h_change.toFixed(2), "%"]
                        })
                    })]
                }, c.id))
            })]
        })
    });
    return a.jsxs(me, {
        className: "overflow-hidden border-gray-200 dark:border-dark-600",
        children: [a.jsx("div", {
            className: "p-4 bg-gray-50 dark:bg-dark-800",
            children: a.jsx("h3", {
                className: "text-lg font-medium",
                children: "Gainers & Losers"
            })
        }), a.jsxs("div", {
            className: "p-4",
            children: [a.jsxs("div", {
                className: "flex space-x-2 mb-4",
                children: [a.jsx(W, {
                    variant: t === "gainers" ? "filled" : "outlined",
                    onClick: () => r("gainers"),
                    className: "rounded-lg",
                    children: "Top Gainers"
                }), a.jsx(W, {
                    variant: t === "losers" ? "filled" : "outlined",
                    onClick: () => r("losers"),
                    className: "rounded-lg",
                    children: "Top Losers"
                })]
            }), t === "gainers" && i(s), t === "losers" && i(n)]
        })]
    })
}
function Yi({newCoinsData: e}) {
    if (!e || !e.length)
        return a.jsx("div", {
            children: "No recently added coins data available"
        });
    const t = r => {
        try {
            return new Date(r * 1e3).toLocaleString()
        } catch {
            return "Unknown date"
        }
    }
    ;
    return a.jsxs(me, {
        className: "overflow-hidden border-gray-200 dark:border-dark-600",
        children: [a.jsx("div", {
            className: "p-4 bg-gray-50 dark:bg-dark-800",
            children: a.jsx("h3", {
                className: "text-lg font-medium",
                children: "Recently Added Coins"
            })
        }), a.jsx("div", {
            className: "max-h-96 overflow-auto",
            children: a.jsxs("table", {
                className: "min-w-full divide-y divide-gray-200 dark:divide-dark-600",
                children: [a.jsx("thead", {
                    className: "bg-gray-100 dark:bg-dark-700 sticky top-0 z-10",
                    children: a.jsxs("tr", {
                        children: [a.jsx("th", {
                            className: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-dark-300 uppercase tracking-wider",
                            children: "Name"
                        }), a.jsx("th", {
                            className: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-dark-300 uppercase tracking-wider",
                            children: "Symbol"
                        }), a.jsx("th", {
                            className: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-dark-300 uppercase tracking-wider",
                            children: "Added"
                        })]
                    })
                }), a.jsx("tbody", {
                    className: "bg-white dark:bg-dark-750 divide-y divide-gray-200 dark:divide-dark-600",
                    children: e.map(r => a.jsxs("tr", {
                        className: "hover:bg-gray-50 dark:hover:bg-dark-700",
                        children: [a.jsx("td", {
                            className: "px-4 py-3 whitespace-nowrap",
                            children: a.jsx("span", {
                                className: "text-sm font-medium",
                                children: r.name
                            })
                        }), a.jsx("td", {
                            className: "px-4 py-3 whitespace-nowrap text-sm",
                            children: r.symbol.toUpperCase()
                        }), a.jsx("td", {
                            className: "px-4 py-3 whitespace-nowrap text-sm",
                            children: t(r.activated_at)
                        })]
                    }, r.id))
                })]
            })
        })]
    })
}
function Ji({leakData: e}) {
    const [t,r] = f.useState({});
    if (console.log("LeakSearchResults render:", {
        hasData: !!e,
        dataIsArray: Array.isArray(e),
        dataLength: (e == null ? void 0 : e.length) || 0,
        firstItem: e == null ? void 0 : e[0]
    }),
    !e || !Array.isArray(e) || e.length === 0)
        return a.jsx(me, {
            className: "p-4 border border-gray-200 dark:border-dark-600",
            children: a.jsx("div", {
                className: "text-center text-gray-500",
                children: "No database leak information available"
            })
        });
    const s = n => {
        r(i => ({
            ...i,
            [n]: !i[n]
        }))
    }
    ;
    return a.jsxs(me, {
        className: "border border-gray-200 dark:border-dark-600 overflow-hidden",
        children: [a.jsxs("div", {
            className: "p-4 bg-gray-50 dark:bg-dark-800 flex justify-between items-center",
            children: [a.jsx("h3", {
                className: "text-lg font-medium",
                children: "Database Leak Results"
            }), a.jsxs("span", {
                className: "text-sm text-gray-500",
                children: ["Found ", e.length, " results"]
            })]
        }), a.jsx("div", {
            className: "divide-y divide-gray-200 dark:divide-dark-600 max-h-96 overflow-auto",
            children: e.map( (n, i) => a.jsxs("div", {
                className: "border-0",
                children: [a.jsxs("div", {
                    className: "p-4 bg-gray-100 dark:bg-dark-700 flex justify-between items-center cursor-pointer",
                    onClick: () => s(i),
                    children: [a.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [a.jsx("span", {
                            className: "font-medium",
                            children: n.database
                        }), n.category && a.jsx("span", {
                            className: "px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
                            children: n.category
                        })]
                    }), a.jsx("div", {
                        children: t[i] ? a.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: a.jsx("path", {
                                fillRule: "evenodd",
                                d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
                                clipRule: "evenodd"
                            })
                        }) : a.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: a.jsx("path", {
                                fillRule: "evenodd",
                                d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                clipRule: "evenodd"
                            })
                        })
                    })]
                }), t[i] && n.data && a.jsx("div", {
                    className: "bg-white dark:bg-dark-800 p-4",
                    children: a.jsx("table", {
                        className: "min-w-full divide-y divide-gray-200 dark:divide-dark-600",
                        children: a.jsx("tbody", {
                            children: Object.entries(n.data).map( ([o,c]) => a.jsxs("tr", {
                                className: "border-b border-gray-100 dark:border-dark-700 last:border-b-0",
                                children: [a.jsx("td", {
                                    className: "py-2 px-4 text-sm font-medium text-gray-500 dark:text-dark-300 w-1/3",
                                    children: o
                                }), a.jsx("td", {
                                    className: "py-2 px-4 text-sm break-all",
                                    children: c
                                })]
                            }, o))
                        })
                    })
                })]
            }, i))
        })]
    })
}
const gr = {
    eth: {
        name: "Ethereum",
        symbol: "ETH",
        explorerUrl: "https://etherscan.io",
        decimals: 18
    },
    bsc: {
        name: "BSC",
        symbol: "BNB",
        explorerUrl: "https://bscscan.com",
        decimals: 18
    },
    polygon: {
        name: "Polygon",
        symbol: "MATIC",
        explorerUrl: "https://polygonscan.com",
        decimals: 18
    }
}
  , yr = (e, t=18) => {
    if (!e || e === "0")
        return "0";
    const r = Math.pow(10, t)
      , s = parseFloat(e) / r;
    return s < 1e-6 ? "<0.000001" : s.toFixed(6)
}
  , tt = e => e ? `${e.slice(0, 6)}...${e.slice(-4)}` : ""
  , Xi = e => e ? `${e.slice(0, 10)}...${e.slice(-8)}` : ""
  , eo = e => e ? new Date(parseInt(e) * 1e3).toLocaleString() : "-"
  , to = (e, t) => {
    if (!e || !t)
        return "0";
    const r = BigInt(e) * BigInt(t);
    return (parseFloat(r.toString()) / 1e18).toFixed(6)
}
;
function ro({walletData: e, walletSummary: t, tokenHoldings: r, walletError: s}) {
    var F;
    const [n,i] = f.useState("timeStamp")
      , [o,c] = f.useState("desc")
      , [u,p] = f.useState(!1)
      , l = (e == null ? void 0 : e.network) || "eth"
      , m = gr[l] || gr.eth
      , x = f.useMemo( () => {
        if (!e || !e.normalTransactions && !e.tokenTransactions)
            return [];
        const k = [];
        return e != null && e.normalTransactions && e.normalTransactions.forEach(y => {
            k.push({
                ...y,
                type: "native",
                displayAmount: yr(y.value, m.decimals),
                symbol: m.symbol,
                direction: y.from.toLowerCase() === e.address.toLowerCase() ? "OUT" : "IN"
            })
        }
        ),
        e != null && e.tokenTransactions && e.tokenTransactions.forEach(y => {
            k.push({
                ...y,
                type: "token",
                displayAmount: yr(y.value, parseInt(y.tokenDecimal || 18)),
                symbol: y.tokenSymbol || "TOKEN",
                direction: y.from.toLowerCase() === e.address.toLowerCase() ? "OUT" : "IN"
            })
        }
        ),
        k
    }
    , [e, m])
      , v = f.useMemo( () => [...x].sort( (k, y) => {
        let b = k[n]
          , R = y[n];
        return n === "timeStamp" ? (b = parseInt(b || 0),
        R = parseInt(R || 0)) : n === "displayAmount" && (b = parseFloat(b || 0),
        R = parseFloat(R || 0)),
        o === "asc" ? b > R ? 1 : -1 : b < R ? 1 : -1
    }
    ), [x, n, o])
      , O = k => {
        k === n ? c(o === "asc" ? "desc" : "asc") : (i(k),
        c("desc"))
    }
    ;
    return s ? a.jsx(me, {
        className: "overflow-hidden border-gray-200 dark:border-dark-600",
        children: a.jsxs("div", {
            className: "p-6 text-center",
            children: [a.jsx(hr, {
                className: "w-12 h-12 mx-auto mb-4 text-red-500"
            }), a.jsx("p", {
                className: "text-gray-600 dark:text-gray-400 mb-4",
                children: s
            }), (t == null ? void 0 : t.explorerUrl) && a.jsxs("a", {
                href: t.explorerUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center gap-2 text-blue-500 hover:text-blue-600",
                children: ["View on Explorer ", a.jsx(Et, {
                    className: "w-4 h-4"
                })]
            })]
        })
    }) : !e || !e.normalTransactions && !e.tokenTransactions ? a.jsx("div", {
        children: "No wallet data available"
    }) : a.jsxs("div", {
        className: "space-y-4",
        children: [a.jsxs(me, {
            className: "overflow-hidden border-gray-200 dark:border-dark-600",
            children: [a.jsx("div", {
                className: "p-4 bg-gray-50 dark:bg-dark-800",
                children: a.jsx("h3", {
                    className: "text-lg font-medium",
                    children: "Wallet Overview"
                })
            }), a.jsxs("div", {
                className: "p-4",
                children: [a.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: [a.jsxs("div", {
                        children: [a.jsx("p", {
                            className: "text-sm text-gray-500 dark:text-gray-400",
                            children: "Address"
                        }), a.jsx("p", {
                            className: "font-mono text-sm",
                            children: tt(e.address)
                        })]
                    }), a.jsxs("div", {
                        children: [a.jsx("p", {
                            className: "text-sm text-gray-500 dark:text-gray-400",
                            children: "Network"
                        }), a.jsx("p", {
                            className: "text-sm",
                            children: m.name
                        })]
                    }), a.jsxs("div", {
                        children: [a.jsx("p", {
                            className: "text-sm text-gray-500 dark:text-gray-400",
                            children: "Balance"
                        }), a.jsxs("p", {
                            className: "text-sm font-medium",
                            children: [((F = e.balance) == null ? void 0 : F.formatted) || "0", " ", m.symbol]
                        })]
                    }), a.jsxs("div", {
                        children: [a.jsx("p", {
                            className: "text-sm text-gray-500 dark:text-gray-400",
                            children: "Total Transactions"
                        }), a.jsx("p", {
                            className: "text-sm font-medium",
                            children: e.totalTransactions || x.length
                        })]
                    })]
                }), a.jsxs("div", {
                    className: "mt-4 flex gap-2",
                    children: [a.jsxs("a", {
                        href: `${m.explorerUrl}/address/${e.address}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-center gap-2 text-sm text-blue-500 hover:text-blue-600",
                        children: ["View on Explorer ", a.jsx(Et, {
                            className: "w-4 h-4"
                        })]
                    }), r && r.length > 0 && a.jsxs(W, {
                        size: "sm",
                        variant: "outline",
                        onClick: () => p(!u),
                        children: [u ? "Hide" : "Show", " Token Holdings (", r.length, ")"]
                    })]
                })]
            })]
        }), u && r && r.length > 0 && a.jsxs(me, {
            className: "overflow-hidden border-gray-200 dark:border-dark-600",
            children: [a.jsx("div", {
                className: "p-4 bg-gray-50 dark:bg-dark-800",
                children: a.jsx("h3", {
                    className: "text-lg font-medium",
                    children: "Token Holdings"
                })
            }), a.jsx("div", {
                className: "max-h-64 overflow-auto",
                children: a.jsxs("table", {
                    className: "min-w-full divide-y divide-gray-200 dark:divide-dark-600",
                    children: [a.jsx("thead", {
                        className: "bg-gray-100 dark:bg-dark-700 sticky top-0 z-10",
                        children: a.jsxs("tr", {
                            children: [a.jsx("th", {
                                className: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-dark-300 uppercase tracking-wider",
                                children: "Token"
                            }), a.jsx("th", {
                                className: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-dark-300 uppercase tracking-wider",
                                children: "Balance"
                            }), a.jsx("th", {
                                className: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-dark-300 uppercase tracking-wider",
                                children: "Contract"
                            })]
                        })
                    }), a.jsx("tbody", {
                        className: "bg-white dark:bg-dark-750 divide-y divide-gray-200 dark:divide-dark-600",
                        children: r.map( (k, y) => a.jsxs("tr", {
                            className: "hover:bg-gray-50 dark:hover:bg-dark-700",
                            children: [a.jsx("td", {
                                className: "px-4 py-3 whitespace-nowrap text-sm",
                                children: a.jsxs("div", {
                                    children: [a.jsx("p", {
                                        className: "font-medium",
                                        children: k.name
                                    }), a.jsx("p", {
                                        className: "text-xs text-gray-500",
                                        children: k.symbol
                                    })]
                                })
                            }), a.jsx("td", {
                                className: "px-4 py-3 whitespace-nowrap text-sm",
                                children: k.formattedBalance
                            }), a.jsx("td", {
                                className: "px-4 py-3 whitespace-nowrap text-sm",
                                children: a.jsx("a", {
                                    href: `${m.explorerUrl}/token/${k.contractAddress}`,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-blue-500 hover:text-blue-600 font-mono",
                                    children: tt(k.contractAddress)
                                })
                            })]
                        }, y))
                    })]
                })
            })]
        }), a.jsxs(me, {
            className: "overflow-hidden border-gray-200 dark:border-dark-600",
            children: [a.jsx("div", {
                className: "p-4 bg-gray-50 dark:bg-dark-800",
                children: a.jsx("h3", {
                    className: "text-lg font-medium",
                    children: "Transaction History"
                })
            }), a.jsx("div", {
                className: "max-h-96 overflow-auto",
                children: a.jsxs("table", {
                    className: "min-w-full divide-y divide-gray-200 dark:divide-dark-600",
                    children: [a.jsx("thead", {
                        className: "bg-gray-100 dark:bg-dark-700 sticky top-0 z-10",
                        children: a.jsx("tr", {
                            children: [{
                                id: "timeStamp",
                                label: "Date/Time"
                            }, {
                                id: "direction",
                                label: "Direction"
                            }, {
                                id: "type",
                                label: "Type"
                            }, {
                                id: "displayAmount",
                                label: "Amount"
                            }, {
                                id: "symbol",
                                label: "Token"
                            }, {
                                id: "from",
                                label: "From/To"
                            }, {
                                id: "gasUsed",
                                label: "Gas Fee"
                            }, {
                                id: "isError",
                                label: "Status"
                            }, {
                                id: "hash",
                                label: "Tx Hash"
                            }].map(k => a.jsx("th", {
                                className: "px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-dark-300 uppercase tracking-wider cursor-pointer",
                                onClick: () => k.id !== "from" && k.id !== "hash" && k.id !== "isError" && O(k.id),
                                children: a.jsxs("div", {
                                    className: "flex items-center",
                                    children: [k.label, n === k.id && a.jsx("span", {
                                        className: "ml-1",
                                        children: o === "asc" ? "↑" : "↓"
                                    })]
                                })
                            }, k.id))
                        })
                    }), a.jsx("tbody", {
                        className: "bg-white dark:bg-dark-750 divide-y divide-gray-200 dark:divide-dark-600",
                        children: v.map( (k, y) => a.jsxs("tr", {
                            className: "hover:bg-gray-50 dark:hover:bg-dark-700",
                            children: [a.jsx("td", {
                                className: "px-4 py-3 whitespace-nowrap text-sm",
                                children: eo(k.timeStamp)
                            }), a.jsx("td", {
                                className: "px-4 py-3 whitespace-nowrap text-sm",
                                children: a.jsxs("span", {
                                    className: `inline-flex items-center gap-1 ${k.direction === "IN" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`,
                                    children: [k.direction === "IN" ? a.jsx(Fn, {
                                        className: "w-4 h-4"
                                    }) : a.jsx(On, {
                                        className: "w-4 h-4"
                                    }), k.direction]
                                })
                            }), a.jsx("td", {
                                className: "px-4 py-3 whitespace-nowrap text-sm",
                                children: a.jsx("span", {
                                    className: `inline-flex rounded-full px-2 py-1 text-xs font-semibold ${k.type === "native" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400" : "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400"}`,
                                    children: k.type === "native" ? "Transfer" : "Token"
                                })
                            }), a.jsx("td", {
                                className: "px-4 py-3 whitespace-nowrap text-sm font-medium",
                                children: k.displayAmount
                            }), a.jsx("td", {
                                className: "px-4 py-3 whitespace-nowrap text-sm",
                                children: k.symbol
                            }), a.jsx("td", {
                                className: "px-4 py-3 whitespace-nowrap text-sm font-mono",
                                children: k.direction === "IN" ? tt(k.from) : tt(k.to)
                            }), a.jsxs("td", {
                                className: "px-4 py-3 whitespace-nowrap text-sm",
                                children: [to(k.gasUsed, k.gasPrice), " ", m.symbol]
                            }), a.jsx("td", {
                                className: "px-4 py-3 whitespace-nowrap text-sm",
                                children: k.isError === "0" || k.txreceipt_status === "1" ? a.jsx(Ln, {
                                    className: "w-5 h-5 text-green-500"
                                }) : a.jsx(hr, {
                                    className: "w-5 h-5 text-red-500"
                                })
                            }), a.jsx("td", {
                                className: "px-4 py-3 whitespace-nowrap text-sm",
                                children: a.jsxs("a", {
                                    href: `${m.explorerUrl}/tx/${k.hash}`,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-blue-500 hover:text-blue-600 font-mono flex items-center gap-1",
                                    children: [Xi(k.hash), a.jsx(Et, {
                                        className: "w-3 h-3"
                                    })]
                                })
                            })]
                        }, y))
                    })]
                })
            })]
        })]
    })
}
function ps({id: e, q: t, a: r}) {
    var L, P, $, D, A, w, N, S, j, V, B, ee, oe, pe, M, xe, Ee;
    const {currentChat: s} = Ve()
      , [n,i] = f.useState(!1)
      , [o,c] = f.useState(!0)
      , u = (s == null ? void 0 : s.lastAnalyzedToken) && ((L = s == null ? void 0 : s.messages) == null ? void 0 : L.find(de => de.id === e && de.a.includes(s.lastAnalyzedToken)))
      , p = (de, ve=[]) => {
        if (!s || !s[de])
            return !1;
        for (const He of ve) {
            let Ae = s[de];
            const vt = He.split(".");
            for (const We of vt) {
                if (!Ae || !Ae[We])
                    return !1;
                Ae = Ae[We]
            }
        }
        return !0
    }
      , l = de => {
        if (!t)
            return !1;
        const ve = t.toLowerCase();
        return de.some(He => ve.includes(He))
    }
      , m = (s == null ? void 0 : s.leakResults) && Array.isArray(s.leakResults) && s.leakResults.length > 0 && s.leakResultsMessageId === e;
    f.useEffect( () => {
        m && console.log(`Message ${e} should display leak results (${s.leakResults.length} items)`)
    }
    , [e, m, (P = s == null ? void 0 : s.leakResults) == null ? void 0 : P.length]);
    const x = p("holders", ["data", "data.attributes", "data.attributes.holders"]) && l(["holder", "top holder", "holding", "ownership"])
      , v = p("pools", ["data"]) && l(["pool", "liquidity", "dex", "swap"])
      , O = p("trades", ["data"]) && l(["trade", "transaction", "recent activity", "volume"])
      , F = p("trending", ["coins"]) && l(["trending", "popular", "hot"])
      , k = p("gainersLosers", ["top_gainers"]) && l(["gainer", "loser", "performing", "best", "worst"])
      , y = p("newCoins", []) && l(["new", "recent", "added", "latest", "listing"])
      , b = (s == null ? void 0 : s.walletData) && (s == null ? void 0 : s.walletDataMessageId) === e
      , R = () => {
        navigator.clipboard.writeText(r)
    }
      , z = x || v || O || F || k || y || m || b;
    return a.jsxs("div", {
        className: "data-conversation-panel space-y-4",
        children: [a.jsxs("div", {
            className: "flex items-end justify-end gap-2.5 ltr:ml-4 sm:ltr:ml-10 rtl:mr-4 sm:rtl:mr-10",
            children: [a.jsx(rr, {
                className: "max-w-lg rounded-2xl bg-gray-150 p-3 dark:bg-dark-700",
                children: t
            }), a.jsx("div", {
                className: "size-10 max-sm:hidden",
                children: a.jsx(At, {
                    size: 10,
                    initialColor: "auto",
                    src: xr.avatar,
                    name: xr.name
                })
            })]
        }), a.jsxs("div", {
            className: "flex flex-col items-end justify-start gap-2.5 sm:gap-5 ltr:mr-4 sm:ltr:mr-10 rtl:ml-4 sm:rtl:ml-10",
            children: [a.jsxs("div", {
                className: "flex w-full items-end justify-start gap-2.5 sm:gap-5",
                children: [a.jsx("div", {
                    className: "size-10 max-sm:hidden",
                    children: a.jsx(At, {
                        size: 10,
                        initialColor: "info",
                        children: a.jsx(ms, {
                            className: "size-5"
                        })
                    })
                }), a.jsxs(rr, {
                    className: "w-full max-w-lg rounded-2xl border border-gray-200 p-3 dark:border-dark-600",
                    children: [a.jsx("div", {
                        className: "text-sm-plus",
                        children: r === "" ? a.jsxs("div", {
                            className: "flex flex-1 flex-col justify-between space-y-2 py-2",
                            children: [Array(3).fill().map( (de, ve) => a.jsx(Be, {
                                className: "h-3 w-full rounded-sm"
                            }, ve)), a.jsx(Be, {
                                className: "h-3 w-1/3 rounded-sm"
                            })]
                        }) : r
                    }), o && a.jsxs("div", {
                        className: "mt-4",
                        children: [m && a.jsx("div", {
                            className: "mb-4",
                            children: a.jsx(Ji, {
                                leakData: s.leakResults
                            })
                        }), x && a.jsx("div", {
                            className: "mb-4",
                            children: a.jsx(Wi, {
                                holdersData: s.holders
                            })
                        }), v && a.jsx("div", {
                            className: "mb-4",
                            children: a.jsx(Zi, {
                                poolsData: s.pools
                            })
                        }), O && a.jsx("div", {
                            className: "mb-4",
                            children: a.jsx(Gi, {
                                tradesData: s.trades
                            })
                        }), F && a.jsx("div", {
                            className: "mb-4",
                            children: a.jsx(Ki, {
                                trendingData: s.trending
                            })
                        }), k && a.jsx("div", {
                            className: "mb-4",
                            children: a.jsx(Qi, {
                                gainersLosersData: s.gainersLosers
                            })
                        }), y && a.jsx("div", {
                            className: "mb-4",
                            children: a.jsx(Yi, {
                                newCoinsData: s.newCoins
                            })
                        }), b && a.jsx("div", {
                            className: "mb-4",
                            children: a.jsx(ro, {
                                walletData: s.walletData,
                                walletSummary: s.walletSummary,
                                tokenHoldings: s.tokenHoldings,
                                walletError: s.walletError
                            })
                        })]
                    }), a.jsxs("div", {
                        className: "-mx-1 flex justify-between pt-8",
                        children: [a.jsxs("div", {
                            className: "flex gap-1",
                            children: [a.jsx(W, {
                                "data-tooltip": !0,
                                "data-tooltip-content": "Copy",
                                variant: "flat",
                                isIcon: !0,
                                className: "size-8 rounded-full",
                                onClick: R,
                                children: a.jsx(Hn, {
                                    className: "size-5"
                                })
                            }), a.jsx(W, {
                                "data-tooltip": !0,
                                "data-tooltip-content": "Share",
                                variant: "flat",
                                isIcon: !0,
                                className: "size-8 rounded-full",
                                children: a.jsx(yi, {
                                    className: "size-5"
                                })
                            }), u && a.jsx(W, {
                                "data-tooltip": !0,
                                "data-tooltip-content": "Token Data",
                                variant: "flat",
                                isIcon: !0,
                                className: "size-8 rounded-full",
                                onClick: () => i(!n),
                                children: a.jsx(ur, {
                                    className: "size-5"
                                })
                            }), z && a.jsx(W, {
                                "data-tooltip": !0,
                                "data-tooltip-content": o ? "Hide Data" : "Show Data",
                                variant: "flat",
                                isIcon: !0,
                                className: "size-8 rounded-full",
                                onClick: () => c(!o),
                                children: a.jsx(ur, {
                                    className: "size-5"
                                })
                            }), a.jsx(W, {
                                "data-tooltip": !0,
                                "data-tooltip-content": "Report Issue",
                                variant: "flat",
                                isIcon: !0,
                                className: "size-8 rounded-full",
                                children: a.jsx(Yn, {
                                    className: "size-5"
                                })
                            })]
                        }), a.jsxs("div", {
                            className: "flex",
                            children: [a.jsx(W, {
                                "data-tooltip": !0,
                                "data-tooltip-content": "Bad Response",
                                variant: "flat",
                                isIcon: !0,
                                className: "size-8 rounded-full",
                                children: a.jsx(Xn, {
                                    className: "size-5"
                                })
                            }), a.jsx(W, {
                                "data-tooltip": !0,
                                "data-tooltip-content": "Good Response",
                                variant: "flat",
                                isIcon: !0,
                                className: "size-8 rounded-full",
                                children: a.jsx(ti, {
                                    className: "size-5"
                                })
                            })]
                        })]
                    })]
                })]
            }), n && (s == null ? void 0 : s.tokenData) && a.jsx("div", {
                className: "w-full max-w-lg pl-10 sm:pl-14",
                children: a.jsxs(me, {
                    className: "w-full border-gray-200 p-4 dark:border-dark-600",
                    children: [a.jsxs("h3", {
                        className: "mb-3 font-medium",
                        children: [s.tokenData.name, " (", s.tokenData.symbol, ")"]
                    }), a.jsxs("div", {
                        className: "mb-4",
                        children: [a.jsxs("div", {
                            className: "flex justify-between",
                            children: [a.jsx("span", {
                                className: "text-gray-500 dark:text-dark-300",
                                children: "Price"
                            }), a.jsxs("span", {
                                className: "font-medium",
                                children: ["$", ((D = ($ = s.tokenData.market_data) == null ? void 0 : $.current_price) == null ? void 0 : D.usd.toLocaleString()) || "N/A"]
                            })]
                        }), a.jsxs("div", {
                            className: "flex justify-between",
                            children: [a.jsx("span", {
                                className: "text-gray-500 dark:text-dark-300",
                                children: "24h Change"
                            }), a.jsxs("span", {
                                className: `font-medium ${(((A = s.tokenData.market_data) == null ? void 0 : A.price_change_percentage_24h) || 0) >= 0 ? "text-green-500" : "text-red-500"}`,
                                children: [((N = (w = s.tokenData.market_data) == null ? void 0 : w.price_change_percentage_24h) == null ? void 0 : N.toFixed(2)) || "0.00", "%"]
                            })]
                        }), a.jsxs("div", {
                            className: "flex justify-between",
                            children: [a.jsx("span", {
                                className: "text-gray-500 dark:text-dark-300",
                                children: "Market Cap"
                            }), a.jsxs("span", {
                                className: "font-medium",
                                children: ["$", ((V = (j = (S = s.tokenData.market_data) == null ? void 0 : S.market_cap) == null ? void 0 : j.usd) == null ? void 0 : V.toLocaleString()) || "N/A"]
                            })]
                        })]
                    }), a.jsxs("div", {
                        className: "mb-2",
                        children: [a.jsx("h4", {
                            className: "mb-2 text-sm font-medium",
                            children: "Security"
                        }), a.jsxs("div", {
                            className: "flex flex-wrap gap-2",
                            children: [((B = s.securityData) == null ? void 0 : B.taxes) && a.jsxs("div", {
                                className: `flex items-center gap-1 rounded-full px-2 py-0.5 text-xs ${parseFloat(s.securityData.taxes.taxBuy) + parseFloat(s.securityData.taxes.taxSell) > 10 ? "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400" : "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"}`,
                                children: [a.jsx(fr, {
                                    className: "size-3.5"
                                }), a.jsxs("span", {
                                    children: ["Tax: ", s.securityData.taxes.taxBuy, "% / ", s.securityData.taxes.taxSell, "%"]
                                })]
                            }), ((ee = s.securityData) == null ? void 0 : ee.security) && a.jsx("div", {
                                className: `flex items-center gap-1 rounded-full px-2 py-0.5 text-xs ${s.securityData.security.IsHoneypot === "true" ? "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400" : "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"}`,
                                children: s.securityData.security.IsHoneypot === "true" ? a.jsxs(a.Fragment, {
                                    children: [a.jsx(Kn, {
                                        className: "size-3.5"
                                    }), a.jsx("span", {
                                        children: "Honeypot Risk"
                                    })]
                                }) : a.jsxs(a.Fragment, {
                                    children: [a.jsx(vi, {
                                        className: "size-3.5"
                                    }), a.jsx("span", {
                                        children: "Not Honeypot"
                                    })]
                                })
                            }), ((oe = s.securityData) == null ? void 0 : oe.lock) && a.jsxs("div", {
                                className: `flex items-center gap-1 rounded-full px-2 py-0.5 text-xs ${s.securityData.lock.lockPct === "100" ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400" : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"}`,
                                children: [a.jsx(fr, {
                                    className: "size-3.5"
                                }), a.jsxs("span", {
                                    children: ["Lock: ", s.securityData.lock.lockPct, "% for ", s.securityData.lock.lockduration]
                                })]
                            })]
                        })]
                    }), a.jsxs("div", {
                        className: "mt-4 flex gap-2",
                        children: [((M = (pe = s.tokenData.links) == null ? void 0 : pe.blockchain_site) == null ? void 0 : M.filter(Boolean)[0]) && a.jsx(W, {
                            variant: "outlined",
                            size: "xs",
                            className: "rounded-lg",
                            onClick: () => window.open(s.tokenData.links.blockchain_site[0], "_blank"),
                            children: "Explorer"
                        }), ((Ee = (xe = s.tokenData.links) == null ? void 0 : xe.homepage) == null ? void 0 : Ee.filter(Boolean)[0]) && a.jsx(W, {
                            variant: "outlined",
                            size: "xs",
                            className: "rounded-lg",
                            onClick: () => window.open(s.tokenData.links.homepage[0], "_blank"),
                            children: "Website"
                        }), s.lastContractAddress && a.jsx(W, {
                            variant: "outlined",
                            size: "xs",
                            className: "rounded-lg",
                            onClick: () => navigator.clipboard.writeText(s.lastContractAddress),
                            children: "Copy Address"
                        })]
                    })]
                })
            })]
        })]
    })
}
ps.propTypes = {
    id: ie.string,
    q: ie.string,
    a: ie.string
};
function so() {
    const {newMessage: e, trendingCoins: t, gainersLosers: r, isLoading: s} = Ve()
      , [n,i] = f.useState([]);
    f.useEffect( () => () => {}
    , []),
    f.useEffect( () => {
        const c = [];
        t && t.length > 0 && t.forEach(p => {
            c.push({
                id: `trending-${p.item.id}`,
                content: `Tell me about ${p.item.name} (${p.item.symbol})`,
                type: "trending"
            })
        }
        ),
        r && r.top_gainers && r.top_gainers.length > 0 && r.top_gainers.slice(0, 2).forEach(p => {
            c.push({
                id: `gainer-${p.id}`,
                content: `Why is ${p.name} (${p.symbol}) up ${p.usd_24h_change.toFixed(2)}% today?`,
                type: "gainer"
            })
        }
        ),
        c.push({
            id: "general-1",
            content: "What are the trending cryptocurrencies right now?",
            type: "general"
        }, {
            id: "general-2",
            content: "Show me the top crypto gainers and losers today",
            type: "general"
        }, {
            id: "general-2",
            content: "Show me all the information about this username Exampleusername",
            type: "general"
        }, {
            id: "general-4",
            content: "What's the current price of Bitcoin?",
            type: "price"
        });
        const u = c.sort( () => .5 - Math.random());
        i(u.slice(0, 4))
    }
    , [t, r]);
    const o = c => {
        (!c.content || c.content.trim() === "") && (c.content = "Tell me about cryptocurrency"),
        e(null, {
            content: c.content
        })
    }
    ;
    return a.jsx("div", {
        className: "mx-auto flex w-full max-w-4xl grow flex-col overflow-y-auto pb-3 pt-[clamp(2.5rem,10vh,20vh)]",
        children: s ? a.jsxs("div", {
            className: "px-4 text-center",
            children: [a.jsx("div", {
                className: "mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-dark-700",
                children: a.jsx("div", {
                    className: "h-5 w-5 animate-spin rounded-full border-2 border-primary-600 border-t-transparent"
                })
            }), a.jsx("p", {
                className: "text-lg text-gray-400 dark:text-dark-300",
                children: "Loading cryptocurrency data..."
            })]
        }) : a.jsxs(a.Fragment, {
            children: [a.jsxs("div", {
                className: "px-4 text-[clamp(2.2rem,3.75vw,3.75rem)] font-medium leading-[1.1] tracking-tight",
                children: [a.jsx("span", {
                    style: {
                        animationDuration: "5s",
                        backgroundSize: "200% 100%"
                    },
                    className: "block animate-shimmer bg-linear-to-r from-violet-400 via-red-400 to-fuchsia-400 bg-clip-text font-semibold text-transparent",
                    children: "BROWSR BETA"
                }), a.jsx("span", {
                    className: "block text-gray-400 dark:text-dark-300",
                    children: "Ask me about cryptocurrencies, market trends and leaked data."
                })]
            }), a.jsx("div", {
                className: "flex w-full shrink-0 gap-4 px-4 pt-16 max-lg:overflow-x-auto lg:grid lg:grid-cols-4",
                children: n.map( (c, u) => a.jsxs(me, {
                    onClick: () => o(c),
                    className: ge("group flex shrink-0 flex-col p-3 max-lg:w-48", (u % 2 === 0,
                    ""), c.type === "trending" ? "border-blue-300" : c.type === "gainer" ? "border-green-300" : c.type === "security" ? "border-red-300" : "border-gray-200"),
                    children: [a.jsx("div", {
                        className: "grow",
                        children: a.jsx("h3", {
                            children: c.content
                        })
                    }), a.jsx("div", {
                        className: "flex justify-end pt-6",
                        children: a.jsx(W, {
                            component: "div",
                            isIcon: !0,
                            className: "size-8 rounded-full",
                            children: a.jsx(In, {
                                className: "size-4"
                            })
                        })
                    }), a.jsx("div", {
                        className: "absolute inset-0 cursor-pointer rounded-lg bg-black/10 opacity-0 transition-colors group-hover:opacity-100"
                    })]
                }, c.id))
            })]
        })
    })
}
function ao() {
    const {currentChat: e, isLoading: t, activeChatId: r} = Ve();
    return f.useEffect( () => {
        const s = document.querySelector("[data-conversation-panel]");
        s == null || s.scrollTo({
            top: s.scrollHeight
        })
    }
    , [r, e]),
    !e || !e.messages || e.messages.length === 0 ? a.jsx(so, {}) : a.jsxs(Vt, {
        "data-conversation-panel": !0,
        className: "mx-auto flex w-full max-w-4xl grow flex-col space-y-8 overflow-y-auto px-4 py-4",
        children: [e.messages.map(s => a.jsx(ps, {
            ...s
        }, s.id)), t && e && a.jsx("div", {
            className: "flex justify-center py-2",
            children: a.jsx("div", {
                className: "loader h-6 w-6 animate-spin rounded-full border-2 border-t-transparent border-primary-600"
            })
        })]
    })
}
const te = [];
for (let e = 0; e < 256; ++e)
    te.push((e + 256).toString(16).slice(1));
function no(e, t=0) {
    return (te[e[t + 0]] + te[e[t + 1]] + te[e[t + 2]] + te[e[t + 3]] + "-" + te[e[t + 4]] + te[e[t + 5]] + "-" + te[e[t + 6]] + te[e[t + 7]] + "-" + te[e[t + 8]] + te[e[t + 9]] + "-" + te[e[t + 10]] + te[e[t + 11]] + te[e[t + 12]] + te[e[t + 13]] + te[e[t + 14]] + te[e[t + 15]]).toLowerCase()
}
let St;
const io = new Uint8Array(16);
function oo() {
    if (!St) {
        if (typeof crypto > "u" || !crypto.getRandomValues)
            throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        St = crypto.getRandomValues.bind(crypto)
    }
    return St(io)
}
const lo = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
  , br = {
    randomUUID: lo
};
function vr(e, t, r) {
    var n;
    if (br.randomUUID && !e)
        return br.randomUUID();
    e = e || {};
    const s = e.random ?? ((n = e.rng) == null ? void 0 : n.call(e)) ?? oo();
    if (s.length < 16)
        throw new Error("Random bytes length must be >= 16");
    return s[6] = s[6] & 15 | 64,
    s[8] = s[8] & 63 | 128,
    no(s)
}
const co = "https://browsr.ai/api"
  , Te = Ys.create({
    baseURL: co,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: !0
})
  , wr = {
    sendMessage: async (e, t) => {
        try {
            return (await Te.post("/crypto/analyze", {
                conversationId: e,
                message: t
            })).data
        } catch (r) {
            throw console.error("Error sending message:", r),
            r
        }
    }
    ,
    getConversationHistory: async e => {
        try {
            return (await Te.get(`/crypto/history?conversationId=${e}`)).data
        } catch (t) {
            throw console.error("Error fetching conversation history:", t),
            t
        }
    }
    ,
    getAllConversations: async () => {
        try {
            return (await Te.get("/crypto/conversations")).data.conversations
        } catch (e) {
            throw console.error("Error fetching conversations:", e),
            e
        }
    }
    ,
    clearConversation: async e => {
        try {
            return (await Te.post("/crypto/clear", {
                conversationId: e
            })).data
        } catch (t) {
            throw console.error("Error clearing conversation:", t),
            t
        }
    }
}
  , kr = {
    searchToken: async e => {
        try {
            return (await Te.get(`/search?query=${encodeURIComponent(e)}`)).data
        } catch (t) {
            throw console.error("Error searching token:", t),
            t
        }
    }
    ,
    getTrendingCoins: async () => {
        try {
            return (await Te.get("/search/trending")).data
        } catch (e) {
            throw console.error("Error fetching trending coins:", e),
            e
        }
    }
    ,
    getNewCoins: async () => {
        try {
            return (await Te.get("/coins/new")).data
        } catch (e) {
            throw console.error("Error fetching new coins:", e),
            e
        }
    }
    ,
    getTopGainersLosers: async (e="USD", t="24h") => {
        try {
            return (await Te.get(`/coins/top_gainers_losers?vs_currency=${e}&duration=${t}`)).data
        } catch (r) {
            throw console.error("Error fetching top gainers/losers:", r),
            r
        }
    }
};
function xs({children: e}) {
    const [t,r] = f.useState([])
      , [s,n] = f.useState(null)
      , [i,o] = f.useState(!0)
      , [c,u] = f.useState(!1)
      , [p,l] = f.useState(Si)
      , [m,x] = f.useState([])
      , [v,O] = f.useState(null)
      , [F,k] = f.useState("")
      , y = s ? t.find($ => $.id === s) : null;
    f.useEffect( () => {
        const D = ( () => {
            let j = localStorage.getItem("crypto_user_id");
            return j || (j = vr(),
            localStorage.setItem("crypto_user_id", j)),
            j
        }
        )();
        k(D);
        const A = () => {
            try {
                const j = localStorage.getItem(`crypto_chats_${D}`);
                if (j)
                    return JSON.parse(j)
            } catch (j) {
                console.error("Error loading chats from localStorage:", j)
            }
            return []
        }
          , w = () => {
            try {
                return localStorage.getItem(`crypto_active_chat_${D}`)
            } catch (j) {
                console.error("Error loading active chat from localStorage:", j)
            }
            return null
        }
          , N = A()
          , S = w();
        N.length > 0 && (r(N),
        S && N.some(j => j.id === S) ? n(S) : N.length > 0 && n(N[0].id),
        u(!0)),
        o(!1)
    }
    , []),
    f.useEffect( () => {
        if (F && t.length > 0)
            try {
                localStorage.setItem(`crypto_chats_${F}`, JSON.stringify(t))
            } catch ($) {
                console.error("Error saving chats to localStorage:", $)
            }
    }
    , [t, F]),
    f.useEffect( () => {
        if (window.initialSearchQuery) {
            console.log("Initial search query detected:", window.initialSearchQuery);
            const $ = window.initialSearchQuery;
            window.initialSearchQuery = null,
            z(null, {
                content: $
            })
        }
    }
    , []),
    f.useEffect( () => {
        if (F && s)
            try {
                localStorage.setItem(`crypto_active_chat_${F}`, s)
            } catch ($) {
                console.error("Error saving active chat to localStorage:", $)
            }
    }
    , [s, F]),
    f.useEffect( () => {
        if (!c) {
            let $ = !0;
            return (async () => {
                try {
                    $ && o(!0);
                    try {
                        const A = await kr.getTrendingCoins();
                        $ && A && A.coins && x(A.coins.slice(0, 5));
                        const w = await kr.getTopGainersLosers();
                        $ && O(w)
                    } catch (A) {
                        console.error("Error fetching market data:", A)
                    }
                    u(!0),
                    $ && o(!1)
                } catch (A) {
                    console.error("Error fetching initial data:", A),
                    $ && (u(!0),
                    o(!1))
                }
            }
            )(),
            () => {
                $ = !1
            }
        }
    }
    , [c]);
    const b = $ => {
        n($),
        $ === null && o(!1)
    }
      , R = async ($, D, A) => {
        try {
            o(!0),
            (!A || A.trim() === "") && (A = "Hello!");
            const w = await wr.sendMessage($, A);
            r(N => {
                const S = [...N]
                  , j = S.findIndex(V => V.id === $);
                if (j !== -1) {
                    const V = S[j].messages.findIndex(B => B.id === D);
                    V !== -1 && (S[j].messages[V].a = w.response,
                    w.tokenData && (S[j].lastAnalyzedToken = w.tokenData.name,
                    S[j].lastContractAddress = w.contractAddress,
                    S[j].tokenData = w.tokenData),
                    w.leakResults && Array.isArray(w.leakResults) && w.leakResults.length > 0 && (S[j].leakResults = w.leakResults,
                    S[j].leakResultsMessageId = D),
                    w.intent && w.intent.intent_type === "wallet_transactions" && (w.walletData && (S[j].walletData = w.walletData,
                    S[j].walletDataMessageId = D),
                    w.walletSummary && (S[j].walletSummary = w.walletSummary),
                    w.tokenHoldings && (S[j].tokenHoldings = w.tokenHoldings),
                    w.walletError && (S[j].walletError = w.walletError)),
                    w.holders && (S[j].holders = w.holders),
                    w.pools && (S[j].pools = w.pools),
                    w.trades && (S[j].trades = w.trades),
                    w.trending && (S[j].trending = w.trending),
                    w.gainersLosers && (S[j].gainersLosers = w.gainersLosers),
                    w.newCoins && (S[j].newCoins = w.newCoins))
                }
                return S
            }
            ),
            o(!1)
        } catch (w) {
            console.error("Error fetching AI response:", w),
            r(N => {
                const S = [...N]
                  , j = S.findIndex(V => V.id === $);
                if (j !== -1) {
                    const V = S[j].messages.findIndex(B => B.id === D);
                    V !== -1 && (S[j].messages[V].a = "Sorry, I encountered an error while processing your request. Please try again.")
                }
                return S
            }
            ),
            o(!1)
        }
    }
      , z = ($, D) => {
        const A = new Date
          , w = G();
        let N = [...t], S;
        (!D.content || D.content.trim() === "") && (D.content = "Hello!");
        const j = D.content;
        if (!$)
            S = vr(),
            N = [{
                id: S,
                messages: [{
                    id: w,
                    q: j,
                    a: "",
                    createdAt: A
                }],
                createdAt: A,
                title: j.substring(0, 30) + (j.length > 30 ? "..." : "")
            }, ...N],
            r(N),
            n(S),
            setTimeout( () => {
                R(S, w, j)
            }
            , 100);
        else {
            S = $;
            const V = N.findIndex(B => B.id === $);
            if (V !== -1) {
                const B = {
                    ...N[V]
                };
                B.messages.push({
                    id: w,
                    q: j,
                    a: "",
                    createdAt: A
                }),
                N.splice(V, 1),
                N = [B, ...N],
                r(N),
                R(S, w, j)
            } else
                z(null, {
                    content: j
                })
        }
    }
      , P = {
        chats: t,
        currentChat: y,
        activeChatId: s,
        isLoading: i,
        trendingCoins: m,
        gainersLosers: v,
        selectedEngine: p,
        newMessage: z,
        setActiveChatId: b,
        deleteChat: async $ => {
            try {
                if (o(!0),
                await wr.clearConversation($),
                r(D => D.filter(A => A.id !== $)),
                s === $) {
                    const D = t.filter(A => A.id !== $);
                    n(D.length > 0 ? D[0].id : null)
                }
                o(!1)
            } catch (D) {
                console.error("Error deleting chat:", D),
                o(!1)
            }
        }
        ,
        setSelectedEngine: l
    };
    return a.jsx(Ei, {
        value: P,
        children: e
    })
}
xs.propTypes = {
    children: ie.node
};
var _t, jr;
function uo() {
    if (jr)
        return _t;
    jr = 1;
    function e(y) {
        this._maxSize = y,
        this.clear()
    }
    e.prototype.clear = function() {
        this._size = 0,
        this._values = Object.create(null)
    }
    ,
    e.prototype.get = function(y) {
        return this._values[y]
    }
    ,
    e.prototype.set = function(y, b) {
        return this._size >= this._maxSize && this.clear(),
        y in this._values || this._size++,
        this._values[y] = b
    }
    ;
    var t = /[^.^\]^[]+|(?=\[\]|\.\.)/g
      , r = /^\d+$/
      , s = /^\d/
      , n = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g
      , i = /^\s*(['"]?)(.*?)(\1)\s*$/
      , o = 512
      , c = new e(o)
      , u = new e(o)
      , p = new e(o);
    _t = {
        Cache: e,
        split: m,
        normalizePath: l,
        setter: function(y) {
            var b = l(y);
            return u.get(y) || u.set(y, function(z, L) {
                for (var P = 0, $ = b.length, D = z; P < $ - 1; ) {
                    var A = b[P];
                    if (A === "__proto__" || A === "constructor" || A === "prototype")
                        return z;
                    D = D[b[P++]]
                }
                D[b[P]] = L
            })
        },
        getter: function(y, b) {
            var R = l(y);
            return p.get(y) || p.set(y, function(L) {
                for (var P = 0, $ = R.length; P < $; )
                    if (L != null || !b)
                        L = L[R[P++]];
                    else
                        return;
                return L
            })
        },
        join: function(y) {
            return y.reduce(function(b, R) {
                return b + (v(R) || r.test(R) ? "[" + R + "]" : (b ? "." : "") + R)
            }, "")
        },
        forEach: function(y, b, R) {
            x(Array.isArray(y) ? y : m(y), b, R)
        }
    };
    function l(y) {
        return c.get(y) || c.set(y, m(y).map(function(b) {
            return b.replace(i, "$2")
        }))
    }
    function m(y) {
        return y.match(t) || [""]
    }
    function x(y, b, R) {
        var z = y.length, L, P, $, D;
        for (P = 0; P < z; P++)
            L = y[P],
            L && (k(L) && (L = '"' + L + '"'),
            D = v(L),
            $ = !D && /^\d+$/.test(L),
            b.call(R, L, D, $, P, y))
    }
    function v(y) {
        return typeof y == "string" && y && ["'", '"'].indexOf(y.charAt(0)) !== -1
    }
    function O(y) {
        return y.match(s) && !y.match(r)
    }
    function F(y) {
        return n.test(y)
    }
    function k(y) {
        return !v(y) && (O(y) || F(y))
    }
    return _t
}
var Re = uo(), Ft, Nr;
function fo() {
    if (Nr)
        return Ft;
    Nr = 1;
    const e = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g
      , t = l => l.match(e) || []
      , r = l => l[0].toUpperCase() + l.slice(1)
      , s = (l, m) => t(l).join(m).toLowerCase()
      , n = l => t(l).reduce( (m, x) => `${m}${m ? x[0].toUpperCase() + x.slice(1).toLowerCase() : x.toLowerCase()}`, "");
    return Ft = {
        words: t,
        upperFirst: r,
        camelCase: n,
        pascalCase: l => r(n(l)),
        snakeCase: l => s(l, "_"),
        kebabCase: l => s(l, "-"),
        sentenceCase: l => r(s(l, " ")),
        titleCase: l => t(l).map(r).join(" ")
    },
    Ft
}
var Ct = fo(), rt = {
    exports: {}
}, Er;
function ho() {
    if (Er)
        return rt.exports;
    Er = 1,
    rt.exports = function(n) {
        return e(t(n), n)
    }
    ,
    rt.exports.array = e;
    function e(n, i) {
        var o = n.length
          , c = new Array(o)
          , u = {}
          , p = o
          , l = r(i)
          , m = s(n);
        for (i.forEach(function(v) {
            if (!m.has(v[0]) || !m.has(v[1]))
                throw new Error("Unknown node. There is an unknown node in the supplied edges.")
        }); p--; )
            u[p] || x(n[p], p, new Set);
        return c;
        function x(v, O, F) {
            if (F.has(v)) {
                var k;
                try {
                    k = ", node was:" + JSON.stringify(v)
                } catch {
                    k = ""
                }
                throw new Error("Cyclic dependency" + k)
            }
            if (!m.has(v))
                throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(v));
            if (!u[O]) {
                u[O] = !0;
                var y = l.get(v) || new Set;
                if (y = Array.from(y),
                O = y.length) {
                    F.add(v);
                    do {
                        var b = y[--O];
                        x(b, m.get(b), F)
                    } while (O);
                    F.delete(v)
                }
                c[--o] = v
            }
        }
    }
    function t(n) {
        for (var i = new Set, o = 0, c = n.length; o < c; o++) {
            var u = n[o];
            i.add(u[0]),
            i.add(u[1])
        }
        return Array.from(i)
    }
    function r(n) {
        for (var i = new Map, o = 0, c = n.length; o < c; o++) {
            var u = n[o];
            i.has(u[0]) || i.set(u[0], new Set),
            i.has(u[1]) || i.set(u[1], new Set),
            i.get(u[0]).add(u[1])
        }
        return i
    }
    function s(n) {
        for (var i = new Map, o = 0, c = n.length; o < c; o++)
            i.set(n[o], o);
        return i
    }
    return rt.exports
}
var mo = ho();
const po = Js(mo)
  , xo = Object.prototype.toString
  , go = Error.prototype.toString
  , yo = RegExp.prototype.toString
  , bo = typeof Symbol < "u" ? Symbol.prototype.toString : () => ""
  , vo = /^Symbol\((.*)\)(.*)$/;
function wo(e) {
    return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e
}
function Sr(e, t=!1) {
    if (e == null || e === !0 || e === !1)
        return "" + e;
    const r = typeof e;
    if (r === "number")
        return wo(e);
    if (r === "string")
        return t ? `"${e}"` : e;
    if (r === "function")
        return "[Function " + (e.name || "anonymous") + "]";
    if (r === "symbol")
        return bo.call(e).replace(vo, "Symbol($1)");
    const s = xo.call(e).slice(8, -1);
    return s === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : s === "Error" || e instanceof Error ? "[" + go.call(e) + "]" : s === "RegExp" ? yo.call(e) : null
}
function Ie(e, t) {
    let r = Sr(e, t);
    return r !== null ? r : JSON.stringify(e, function(s, n) {
        let i = Sr(this[s], t);
        return i !== null ? i : n
    }, 2)
}
function gs(e) {
    return e == null ? [] : [].concat(e)
}
let ys, bs, vs, ko = /\$\{\s*(\w+)\s*\}/g;
ys = Symbol.toStringTag;
class _r {
    constructor(t, r, s, n) {
        this.name = void 0,
        this.message = void 0,
        this.value = void 0,
        this.path = void 0,
        this.type = void 0,
        this.params = void 0,
        this.errors = void 0,
        this.inner = void 0,
        this[ys] = "Error",
        this.name = "ValidationError",
        this.value = r,
        this.path = s,
        this.type = n,
        this.errors = [],
        this.inner = [],
        gs(t).forEach(i => {
            if (he.isError(i)) {
                this.errors.push(...i.errors);
                const o = i.inner.length ? i.inner : [i];
                this.inner.push(...o)
            } else
                this.errors.push(i)
        }
        ),
        this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0]
    }
}
bs = Symbol.hasInstance;
vs = Symbol.toStringTag;
class he extends Error {
    static formatError(t, r) {
        const s = r.label || r.path || "this";
        return r = Object.assign({}, r, {
            path: s,
            originalPath: r.path
        }),
        typeof t == "string" ? t.replace(ko, (n, i) => Ie(r[i])) : typeof t == "function" ? t(r) : t
    }
    static isError(t) {
        return t && t.name === "ValidationError"
    }
    constructor(t, r, s, n, i) {
        const o = new _r(t,r,s,n);
        if (i)
            return o;
        super(),
        this.value = void 0,
        this.path = void 0,
        this.type = void 0,
        this.params = void 0,
        this.errors = [],
        this.inner = [],
        this[vs] = "Error",
        this.name = o.name,
        this.message = o.message,
        this.type = o.type,
        this.value = o.value,
        this.path = o.path,
        this.errors = o.errors,
        this.inner = o.inner,
        Error.captureStackTrace && Error.captureStackTrace(this, he)
    }
    static[bs](t) {
        return _r[Symbol.hasInstance](t) || super[Symbol.hasInstance](t)
    }
}
let we = {
    default: "${path} is invalid",
    required: "${path} is a required field",
    defined: "${path} must be defined",
    notNull: "${path} cannot be null",
    oneOf: "${path} must be one of the following values: ${values}",
    notOneOf: "${path} must not be one of the following values: ${values}",
    notType: ({path: e, type: t, value: r, originalValue: s}) => {
        const n = s != null && s !== r ? ` (cast from the value \`${Ie(s, !0)}\`).` : ".";
        return t !== "mixed" ? `${e} must be a \`${t}\` type, but the final value was: \`${Ie(r, !0)}\`` + n : `${e} must match the configured type. The validated value was: \`${Ie(r, !0)}\`` + n
    }
}
  , ue = {
    length: "${path} must be exactly ${length} characters",
    min: "${path} must be at least ${min} characters",
    max: "${path} must be at most ${max} characters",
    matches: '${path} must match the following: "${regex}"',
    email: "${path} must be a valid email",
    url: "${path} must be a valid URL",
    uuid: "${path} must be a valid UUID",
    datetime: "${path} must be a valid ISO date-time",
    datetime_precision: "${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",
    datetime_offset: '${path} must be a valid ISO date-time with UTC "Z" timezone',
    trim: "${path} must be a trimmed string",
    lowercase: "${path} must be a lowercase string",
    uppercase: "${path} must be a upper case string"
}
  , jo = {
    min: "${path} must be greater than or equal to ${min}",
    max: "${path} must be less than or equal to ${max}",
    lessThan: "${path} must be less than ${less}",
    moreThan: "${path} must be greater than ${more}",
    positive: "${path} must be a positive number",
    negative: "${path} must be a negative number",
    integer: "${path} must be an integer"
}
  , Dt = {
    min: "${path} field must be later than ${min}",
    max: "${path} field must be at earlier than ${max}"
}
  , No = {
    isValue: "${path} field must be ${value}"
}
  , nt = {
    noUnknown: "${path} field has unspecified keys: ${unknown}",
    exact: "${path} object contains unknown properties: ${properties}"
}
  , Eo = {
    min: "${path} field must have at least ${min} items",
    max: "${path} field must have less than or equal to ${max} items",
    length: "${path} must have ${length} items"
}
  , So = {
    notType: e => {
        const {path: t, value: r, spec: s} = e
          , n = s.types.length;
        if (Array.isArray(r)) {
            if (r.length < n)
                return `${t} tuple value has too few items, expected a length of ${n} but got ${r.length} for value: \`${Ie(r, !0)}\``;
            if (r.length > n)
                return `${t} tuple value has too many items, expected a length of ${n} but got ${r.length} for value: \`${Ie(r, !0)}\``
        }
        return he.formatError(we.notType, e)
    }
};
Object.assign(Object.create(null), {
    mixed: we,
    string: ue,
    number: jo,
    date: Dt,
    object: nt,
    array: Eo,
    boolean: No,
    tuple: So
});
const Ut = e => e && e.__isYupSchema__;
class ft {
    static fromOptions(t, r) {
        if (!r.then && !r.otherwise)
            throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
        let {is: s, then: n, otherwise: i} = r
          , o = typeof s == "function" ? s : (...c) => c.every(u => u === s);
        return new ft(t, (c, u) => {
            var p;
            let l = o(...c) ? n : i;
            return (p = l == null ? void 0 : l(u)) != null ? p : u
        }
        )
    }
    constructor(t, r) {
        this.fn = void 0,
        this.refs = t,
        this.refs = t,
        this.fn = r
    }
    resolve(t, r) {
        let s = this.refs.map(i => i.getValue(r == null ? void 0 : r.value, r == null ? void 0 : r.parent, r == null ? void 0 : r.context))
          , n = this.fn(s, t, r);
        if (n === void 0 || n === t)
            return t;
        if (!Ut(n))
            throw new TypeError("conditions must return a schema object");
        return n.resolve(r)
    }
}
const st = {
    context: "$",
    value: "."
};
class Pe {
    constructor(t, r={}) {
        if (this.key = void 0,
        this.isContext = void 0,
        this.isValue = void 0,
        this.isSibling = void 0,
        this.path = void 0,
        this.getter = void 0,
        this.map = void 0,
        typeof t != "string")
            throw new TypeError("ref must be a string, got: " + t);
        if (this.key = t.trim(),
        t === "")
            throw new TypeError("ref must be a non-empty string");
        this.isContext = this.key[0] === st.context,
        this.isValue = this.key[0] === st.value,
        this.isSibling = !this.isContext && !this.isValue;
        let s = this.isContext ? st.context : this.isValue ? st.value : "";
        this.path = this.key.slice(s.length),
        this.getter = this.path && Re.getter(this.path, !0),
        this.map = r.map
    }
    getValue(t, r, s) {
        let n = this.isContext ? s : this.isValue ? t : r;
        return this.getter && (n = this.getter(n || {})),
        this.map && (n = this.map(n)),
        n
    }
    cast(t, r) {
        return this.getValue(t, r == null ? void 0 : r.parent, r == null ? void 0 : r.context)
    }
    resolve() {
        return this
    }
    describe() {
        return {
            type: "ref",
            key: this.key
        }
    }
    toString() {
        return `Ref(${this.key})`
    }
    static isRef(t) {
        return t && t.__isYupRef
    }
}
Pe.prototype.__isYupRef = !0;
const Oe = e => e == null;
function ze(e) {
    function t({value: r, path: s="", options: n, originalValue: i, schema: o}, c, u) {
        const {name: p, test: l, params: m, message: x, skipAbsent: v} = e;
        let {parent: O, context: F, abortEarly: k=o.spec.abortEarly, disableStackTrace: y=o.spec.disableStackTrace} = n;
        function b(N) {
            return Pe.isRef(N) ? N.getValue(r, O, F) : N
        }
        function R(N={}) {
            const S = Object.assign({
                value: r,
                originalValue: i,
                label: o.spec.label,
                path: N.path || s,
                spec: o.spec,
                disableStackTrace: N.disableStackTrace || y
            }, m, N.params);
            for (const V of Object.keys(S))
                S[V] = b(S[V]);
            const j = new he(he.formatError(N.message || x, S),r,S.path,N.type || p,S.disableStackTrace);
            return j.params = S,
            j
        }
        const z = k ? c : u;
        let L = {
            path: s,
            parent: O,
            type: p,
            from: n.from,
            createError: R,
            resolve: b,
            options: n,
            originalValue: i,
            schema: o
        };
        const P = N => {
            he.isError(N) ? z(N) : N ? u(null) : z(R())
        }
          , $ = N => {
            he.isError(N) ? z(N) : c(N)
        }
        ;
        if (v && Oe(r))
            return P(!0);
        let A;
        try {
            var w;
            if (A = l.call(L, r, L),
            typeof ((w = A) == null ? void 0 : w.then) == "function") {
                if (n.sync)
                    throw new Error(`Validation test of type: "${L.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
                return Promise.resolve(A).then(P, $)
            }
        } catch (N) {
            $(N);
            return
        }
        P(A)
    }
    return t.OPTIONS = e,
    t
}
function _o(e, t, r, s=r) {
    let n, i, o;
    return t ? (Re.forEach(t, (c, u, p) => {
        let l = u ? c.slice(1, c.length - 1) : c;
        e = e.resolve({
            context: s,
            parent: n,
            value: r
        });
        let m = e.type === "tuple"
          , x = p ? parseInt(l, 10) : 0;
        if (e.innerType || m) {
            if (m && !p)
                throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);
            if (r && x >= r.length)
                throw new Error(`Yup.reach cannot resolve an array item at index: ${c}, in the path: ${t}. because there is no value at that index. `);
            n = r,
            r = r && r[x],
            e = m ? e.spec.types[x] : e.innerType
        }
        if (!p) {
            if (!e.fields || !e.fields[l])
                throw new Error(`The schema does not contain the path: ${t}. (failed at: ${o} which is a type: "${e.type}")`);
            n = r,
            r = r && r[l],
            e = e.fields[l]
        }
        i = l,
        o = u ? "[" + c + "]" : "." + c
    }
    ),
    {
        schema: e,
        parent: n,
        parentPath: i
    }) : {
        parent: n,
        parentPath: t,
        schema: e
    }
}
class ht extends Set {
    describe() {
        const t = [];
        for (const r of this.values())
            t.push(Pe.isRef(r) ? r.describe() : r);
        return t
    }
    resolveAll(t) {
        let r = [];
        for (const s of this.values())
            r.push(t(s));
        return r
    }
    clone() {
        return new ht(this.values())
    }
    merge(t, r) {
        const s = this.clone();
        return t.forEach(n => s.add(n)),
        r.forEach(n => s.delete(n)),
        s
    }
}
function qe(e, t=new Map) {
    if (Ut(e) || !e || typeof e != "object")
        return e;
    if (t.has(e))
        return t.get(e);
    let r;
    if (e instanceof Date)
        r = new Date(e.getTime()),
        t.set(e, r);
    else if (e instanceof RegExp)
        r = new RegExp(e),
        t.set(e, r);
    else if (Array.isArray(e)) {
        r = new Array(e.length),
        t.set(e, r);
        for (let s = 0; s < e.length; s++)
            r[s] = qe(e[s], t)
    } else if (e instanceof Map) {
        r = new Map,
        t.set(e, r);
        for (const [s,n] of e.entries())
            r.set(s, qe(n, t))
    } else if (e instanceof Set) {
        r = new Set,
        t.set(e, r);
        for (const s of e)
            r.add(qe(s, t))
    } else if (e instanceof Object) {
        r = {},
        t.set(e, r);
        for (const [s,n] of Object.entries(e))
            r[s] = qe(n, t)
    } else
        throw Error(`Unable to clone ${e}`);
    return r
}
class Ne {
    constructor(t) {
        this.type = void 0,
        this.deps = [],
        this.tests = void 0,
        this.transforms = void 0,
        this.conditions = [],
        this._mutate = void 0,
        this.internalTests = {},
        this._whitelist = new ht,
        this._blacklist = new ht,
        this.exclusiveTests = Object.create(null),
        this._typeCheck = void 0,
        this.spec = void 0,
        this.tests = [],
        this.transforms = [],
        this.withMutation( () => {
            this.typeError(we.notType)
        }
        ),
        this.type = t.type,
        this._typeCheck = t.check,
        this.spec = Object.assign({
            strip: !1,
            strict: !1,
            abortEarly: !0,
            recursive: !0,
            disableStackTrace: !1,
            nullable: !1,
            optional: !0,
            coerce: !0
        }, t == null ? void 0 : t.spec),
        this.withMutation(r => {
            r.nonNullable()
        }
        )
    }
    get _type() {
        return this.type
    }
    clone(t) {
        if (this._mutate)
            return t && Object.assign(this.spec, t),
            this;
        const r = Object.create(Object.getPrototypeOf(this));
        return r.type = this.type,
        r._typeCheck = this._typeCheck,
        r._whitelist = this._whitelist.clone(),
        r._blacklist = this._blacklist.clone(),
        r.internalTests = Object.assign({}, this.internalTests),
        r.exclusiveTests = Object.assign({}, this.exclusiveTests),
        r.deps = [...this.deps],
        r.conditions = [...this.conditions],
        r.tests = [...this.tests],
        r.transforms = [...this.transforms],
        r.spec = qe(Object.assign({}, this.spec, t)),
        r
    }
    label(t) {
        let r = this.clone();
        return r.spec.label = t,
        r
    }
    meta(...t) {
        if (t.length === 0)
            return this.spec.meta;
        let r = this.clone();
        return r.spec.meta = Object.assign(r.spec.meta || {}, t[0]),
        r
    }
    withMutation(t) {
        let r = this._mutate;
        this._mutate = !0;
        let s = t(this);
        return this._mutate = r,
        s
    }
    concat(t) {
        if (!t || t === this)
            return this;
        if (t.type !== this.type && this.type !== "mixed")
            throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);
        let r = this
          , s = t.clone();
        const n = Object.assign({}, r.spec, s.spec);
        return s.spec = n,
        s.internalTests = Object.assign({}, r.internalTests, s.internalTests),
        s._whitelist = r._whitelist.merge(t._whitelist, t._blacklist),
        s._blacklist = r._blacklist.merge(t._blacklist, t._whitelist),
        s.tests = r.tests,
        s.exclusiveTests = r.exclusiveTests,
        s.withMutation(i => {
            t.tests.forEach(o => {
                i.test(o.OPTIONS)
            }
            )
        }
        ),
        s.transforms = [...r.transforms, ...s.transforms],
        s
    }
    isType(t) {
        return t == null ? !!(this.spec.nullable && t === null || this.spec.optional && t === void 0) : this._typeCheck(t)
    }
    resolve(t) {
        let r = this;
        if (r.conditions.length) {
            let s = r.conditions;
            r = r.clone(),
            r.conditions = [],
            r = s.reduce( (n, i) => i.resolve(n, t), r),
            r = r.resolve(t)
        }
        return r
    }
    resolveOptions(t) {
        var r, s, n, i;
        return Object.assign({}, t, {
            from: t.from || [],
            strict: (r = t.strict) != null ? r : this.spec.strict,
            abortEarly: (s = t.abortEarly) != null ? s : this.spec.abortEarly,
            recursive: (n = t.recursive) != null ? n : this.spec.recursive,
            disableStackTrace: (i = t.disableStackTrace) != null ? i : this.spec.disableStackTrace
        })
    }
    cast(t, r={}) {
        let s = this.resolve(Object.assign({
            value: t
        }, r))
          , n = r.assert === "ignore-optionality"
          , i = s._cast(t, r);
        if (r.assert !== !1 && !s.isType(i)) {
            if (n && Oe(i))
                return i;
            let o = Ie(t)
              , c = Ie(i);
            throw new TypeError(`The value of ${r.path || "field"} could not be cast to a value that satisfies the schema type: "${s.type}". 

attempted value: ${o} 
` + (c !== o ? `result of cast: ${c}` : ""))
        }
        return i
    }
    _cast(t, r) {
        let s = t === void 0 ? t : this.transforms.reduce( (n, i) => i.call(this, n, t, this), t);
        return s === void 0 && (s = this.getDefault(r)),
        s
    }
    _validate(t, r={}, s, n) {
        let {path: i, originalValue: o=t, strict: c=this.spec.strict} = r
          , u = t;
        c || (u = this._cast(u, Object.assign({
            assert: !1
        }, r)));
        let p = [];
        for (let l of Object.values(this.internalTests))
            l && p.push(l);
        this.runTests({
            path: i,
            value: u,
            originalValue: o,
            options: r,
            tests: p
        }, s, l => {
            if (l.length)
                return n(l, u);
            this.runTests({
                path: i,
                value: u,
                originalValue: o,
                options: r,
                tests: this.tests
            }, s, n)
        }
        )
    }
    runTests(t, r, s) {
        let n = !1
          , {tests: i, value: o, originalValue: c, path: u, options: p} = t
          , l = F => {
            n || (n = !0,
            r(F, o))
        }
          , m = F => {
            n || (n = !0,
            s(F, o))
        }
          , x = i.length
          , v = [];
        if (!x)
            return m([]);
        let O = {
            value: o,
            originalValue: c,
            path: u,
            options: p,
            schema: this
        };
        for (let F = 0; F < i.length; F++) {
            const k = i[F];
            k(O, l, function(b) {
                b && (Array.isArray(b) ? v.push(...b) : v.push(b)),
                --x <= 0 && m(v)
            })
        }
    }
    asNestedTest({key: t, index: r, parent: s, parentPath: n, originalParent: i, options: o}) {
        const c = t ?? r;
        if (c == null)
            throw TypeError("Must include `key` or `index` for nested validations");
        const u = typeof c == "number";
        let p = s[c];
        const l = Object.assign({}, o, {
            strict: !0,
            parent: s,
            value: p,
            originalValue: i[c],
            key: void 0,
            [u ? "index" : "key"]: c,
            path: u || c.includes(".") ? `${n || ""}[${u ? c : `"${c}"`}]` : (n ? `${n}.` : "") + t
        });
        return (m, x, v) => this.resolve(l)._validate(p, l, x, v)
    }
    validate(t, r) {
        var s;
        let n = this.resolve(Object.assign({}, r, {
            value: t
        }))
          , i = (s = r == null ? void 0 : r.disableStackTrace) != null ? s : n.spec.disableStackTrace;
        return new Promise( (o, c) => n._validate(t, r, (u, p) => {
            he.isError(u) && (u.value = p),
            c(u)
        }
        , (u, p) => {
            u.length ? c(new he(u,p,void 0,void 0,i)) : o(p)
        }
        ))
    }
    validateSync(t, r) {
        var s;
        let n = this.resolve(Object.assign({}, r, {
            value: t
        })), i, o = (s = r == null ? void 0 : r.disableStackTrace) != null ? s : n.spec.disableStackTrace;
        return n._validate(t, Object.assign({}, r, {
            sync: !0
        }), (c, u) => {
            throw he.isError(c) && (c.value = u),
            c
        }
        , (c, u) => {
            if (c.length)
                throw new he(c,t,void 0,void 0,o);
            i = u
        }
        ),
        i
    }
    isValid(t, r) {
        return this.validate(t, r).then( () => !0, s => {
            if (he.isError(s))
                return !1;
            throw s
        }
        )
    }
    isValidSync(t, r) {
        try {
            return this.validateSync(t, r),
            !0
        } catch (s) {
            if (he.isError(s))
                return !1;
            throw s
        }
    }
    _getDefault(t) {
        let r = this.spec.default;
        return r == null ? r : typeof r == "function" ? r.call(this, t) : qe(r)
    }
    getDefault(t) {
        return this.resolve(t || {})._getDefault(t)
    }
    default(t) {
        return arguments.length === 0 ? this._getDefault() : this.clone({
            default: t
        })
    }
    strict(t=!0) {
        return this.clone({
            strict: t
        })
    }
    nullability(t, r) {
        const s = this.clone({
            nullable: t
        });
        return s.internalTests.nullable = ze({
            message: r,
            name: "nullable",
            test(n) {
                return n === null ? this.schema.spec.nullable : !0
            }
        }),
        s
    }
    optionality(t, r) {
        const s = this.clone({
            optional: t
        });
        return s.internalTests.optionality = ze({
            message: r,
            name: "optionality",
            test(n) {
                return n === void 0 ? this.schema.spec.optional : !0
            }
        }),
        s
    }
    optional() {
        return this.optionality(!0)
    }
    defined(t=we.defined) {
        return this.optionality(!1, t)
    }
    nullable() {
        return this.nullability(!0)
    }
    nonNullable(t=we.notNull) {
        return this.nullability(!1, t)
    }
    required(t=we.required) {
        return this.clone().withMutation(r => r.nonNullable(t).defined(t))
    }
    notRequired() {
        return this.clone().withMutation(t => t.nullable().optional())
    }
    transform(t) {
        let r = this.clone();
        return r.transforms.push(t),
        r
    }
    test(...t) {
        let r;
        if (t.length === 1 ? typeof t[0] == "function" ? r = {
            test: t[0]
        } : r = t[0] : t.length === 2 ? r = {
            name: t[0],
            test: t[1]
        } : r = {
            name: t[0],
            message: t[1],
            test: t[2]
        },
        r.message === void 0 && (r.message = we.default),
        typeof r.test != "function")
            throw new TypeError("`test` is a required parameters");
        let s = this.clone()
          , n = ze(r)
          , i = r.exclusive || r.name && s.exclusiveTests[r.name] === !0;
        if (r.exclusive && !r.name)
            throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
        return r.name && (s.exclusiveTests[r.name] = !!r.exclusive),
        s.tests = s.tests.filter(o => !(o.OPTIONS.name === r.name && (i || o.OPTIONS.test === n.OPTIONS.test))),
        s.tests.push(n),
        s
    }
    when(t, r) {
        !Array.isArray(t) && typeof t != "string" && (r = t,
        t = ".");
        let s = this.clone()
          , n = gs(t).map(i => new Pe(i));
        return n.forEach(i => {
            i.isSibling && s.deps.push(i.key)
        }
        ),
        s.conditions.push(typeof r == "function" ? new ft(n,r) : ft.fromOptions(n, r)),
        s
    }
    typeError(t) {
        let r = this.clone();
        return r.internalTests.typeError = ze({
            message: t,
            name: "typeError",
            skipAbsent: !0,
            test(s) {
                return this.schema._typeCheck(s) ? !0 : this.createError({
                    params: {
                        type: this.schema.type
                    }
                })
            }
        }),
        r
    }
    oneOf(t, r=we.oneOf) {
        let s = this.clone();
        return t.forEach(n => {
            s._whitelist.add(n),
            s._blacklist.delete(n)
        }
        ),
        s.internalTests.whiteList = ze({
            message: r,
            name: "oneOf",
            skipAbsent: !0,
            test(n) {
                let i = this.schema._whitelist
                  , o = i.resolveAll(this.resolve);
                return o.includes(n) ? !0 : this.createError({
                    params: {
                        values: Array.from(i).join(", "),
                        resolved: o
                    }
                })
            }
        }),
        s
    }
    notOneOf(t, r=we.notOneOf) {
        let s = this.clone();
        return t.forEach(n => {
            s._blacklist.add(n),
            s._whitelist.delete(n)
        }
        ),
        s.internalTests.blacklist = ze({
            message: r,
            name: "notOneOf",
            test(n) {
                let i = this.schema._blacklist
                  , o = i.resolveAll(this.resolve);
                return o.includes(n) ? this.createError({
                    params: {
                        values: Array.from(i).join(", "),
                        resolved: o
                    }
                }) : !0
            }
        }),
        s
    }
    strip(t=!0) {
        let r = this.clone();
        return r.spec.strip = t,
        r
    }
    describe(t) {
        const r = (t ? this.resolve(t) : this).clone()
          , {label: s, meta: n, optional: i, nullable: o} = r.spec;
        return {
            meta: n,
            label: s,
            optional: i,
            nullable: o,
            default: r.getDefault(t),
            type: r.type,
            oneOf: r._whitelist.describe(),
            notOneOf: r._blacklist.describe(),
            tests: r.tests.map(u => ({
                name: u.OPTIONS.name,
                params: u.OPTIONS.params
            })).filter( (u, p, l) => l.findIndex(m => m.name === u.name) === p)
        }
    }
}
Ne.prototype.__isYupSchema__ = !0;
for (const e of ["validate", "validateSync"])
    Ne.prototype[`${e}At`] = function(t, r, s={}) {
        const {parent: n, parentPath: i, schema: o} = _o(this, t, r, s.context);
        return o[e](n && n[i], Object.assign({}, s, {
            parent: n,
            path: t
        }))
    }
    ;
for (const e of ["equals", "is"])
    Ne.prototype[e] = Ne.prototype.oneOf;
for (const e of ["not", "nope"])
    Ne.prototype[e] = Ne.prototype.notOneOf;
const Fo = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function Co(e) {
    const t = Rt(e);
    if (!t)
        return Date.parse ? Date.parse(e) : Number.NaN;
    if (t.z === void 0 && t.plusMinus === void 0)
        return new Date(t.year,t.month,t.day,t.hour,t.minute,t.second,t.millisecond).valueOf();
    let r = 0;
    return t.z !== "Z" && t.plusMinus !== void 0 && (r = t.hourOffset * 60 + t.minuteOffset,
    t.plusMinus === "+" && (r = 0 - r)),
    Date.UTC(t.year, t.month, t.day, t.hour, t.minute + r, t.second, t.millisecond)
}
function Rt(e) {
    var t, r;
    const s = Fo.exec(e);
    return s ? {
        year: Se(s[1]),
        month: Se(s[2], 1) - 1,
        day: Se(s[3], 1),
        hour: Se(s[4]),
        minute: Se(s[5]),
        second: Se(s[6]),
        millisecond: s[7] ? Se(s[7].substring(0, 3)) : 0,
        precision: (t = (r = s[7]) == null ? void 0 : r.length) != null ? t : void 0,
        z: s[8] || void 0,
        plusMinus: s[9] || void 0,
        hourOffset: Se(s[10]),
        minuteOffset: Se(s[11])
    } : null
}
function Se(e, t=0) {
    return Number(e) || t
}
let To = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  , Io = /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
  , Ao = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i
  , Oo = "^\\d{4}-\\d{2}-\\d{2}"
  , $o = "\\d{2}:\\d{2}:\\d{2}"
  , Do = "(([+-]\\d{2}(:?\\d{2})?)|Z)"
  , Ro = new RegExp(`${Oo}T${$o}(\\.\\d+)?${Do}$`)
  , Lo = e => Oe(e) || e === e.trim()
  , Mo = {}.toString();
function ws() {
    return new ks
}
class ks extends Ne {
    constructor() {
        super({
            type: "string",
            check(t) {
                return t instanceof String && (t = t.valueOf()),
                typeof t == "string"
            }
        }),
        this.withMutation( () => {
            this.transform( (t, r, s) => {
                if (!s.spec.coerce || s.isType(t) || Array.isArray(t))
                    return t;
                const n = t != null && t.toString ? t.toString() : t;
                return n === Mo ? t : n
            }
            )
        }
        )
    }
    required(t) {
        return super.required(t).withMutation(r => r.test({
            message: t || we.required,
            name: "required",
            skipAbsent: !0,
            test: s => !!s.length
        }))
    }
    notRequired() {
        return super.notRequired().withMutation(t => (t.tests = t.tests.filter(r => r.OPTIONS.name !== "required"),
        t))
    }
    length(t, r=ue.length) {
        return this.test({
            message: r,
            name: "length",
            exclusive: !0,
            params: {
                length: t
            },
            skipAbsent: !0,
            test(s) {
                return s.length === this.resolve(t)
            }
        })
    }
    min(t, r=ue.min) {
        return this.test({
            message: r,
            name: "min",
            exclusive: !0,
            params: {
                min: t
            },
            skipAbsent: !0,
            test(s) {
                return s.length >= this.resolve(t)
            }
        })
    }
    max(t, r=ue.max) {
        return this.test({
            name: "max",
            exclusive: !0,
            message: r,
            params: {
                max: t
            },
            skipAbsent: !0,
            test(s) {
                return s.length <= this.resolve(t)
            }
        })
    }
    matches(t, r) {
        let s = !1, n, i;
        return r && (typeof r == "object" ? {excludeEmptyString: s=!1, message: n, name: i} = r : n = r),
        this.test({
            name: i || "matches",
            message: n || ue.matches,
            params: {
                regex: t
            },
            skipAbsent: !0,
            test: o => o === "" && s || o.search(t) !== -1
        })
    }
    email(t=ue.email) {
        return this.matches(To, {
            name: "email",
            message: t,
            excludeEmptyString: !0
        })
    }
    url(t=ue.url) {
        return this.matches(Io, {
            name: "url",
            message: t,
            excludeEmptyString: !0
        })
    }
    uuid(t=ue.uuid) {
        return this.matches(Ao, {
            name: "uuid",
            message: t,
            excludeEmptyString: !1
        })
    }
    datetime(t) {
        let r = "", s, n;
        return t && (typeof t == "object" ? {message: r="", allowOffset: s=!1, precision: n=void 0} = t : r = t),
        this.matches(Ro, {
            name: "datetime",
            message: r || ue.datetime,
            excludeEmptyString: !0
        }).test({
            name: "datetime_offset",
            message: r || ue.datetime_offset,
            params: {
                allowOffset: s
            },
            skipAbsent: !0,
            test: i => {
                if (!i || s)
                    return !0;
                const o = Rt(i);
                return o ? !!o.z : !1
            }
        }).test({
            name: "datetime_precision",
            message: r || ue.datetime_precision,
            params: {
                precision: n
            },
            skipAbsent: !0,
            test: i => {
                if (!i || n == null)
                    return !0;
                const o = Rt(i);
                return o ? o.precision === n : !1
            }
        })
    }
    ensure() {
        return this.default("").transform(t => t === null ? "" : t)
    }
    trim(t=ue.trim) {
        return this.transform(r => r != null ? r.trim() : r).test({
            message: t,
            name: "trim",
            test: Lo
        })
    }
    lowercase(t=ue.lowercase) {
        return this.transform(r => Oe(r) ? r : r.toLowerCase()).test({
            message: t,
            name: "string_case",
            exclusive: !0,
            skipAbsent: !0,
            test: r => Oe(r) || r === r.toLowerCase()
        })
    }
    uppercase(t=ue.uppercase) {
        return this.transform(r => Oe(r) ? r : r.toUpperCase()).test({
            message: t,
            name: "string_case",
            exclusive: !0,
            skipAbsent: !0,
            test: r => Oe(r) || r === r.toUpperCase()
        })
    }
}
ws.prototype = ks.prototype;
let Vo = new Date("")
  , Po = e => Object.prototype.toString.call(e) === "[object Date]";
class Bt extends Ne {
    constructor() {
        super({
            type: "date",
            check(t) {
                return Po(t) && !isNaN(t.getTime())
            }
        }),
        this.withMutation( () => {
            this.transform( (t, r, s) => !s.spec.coerce || s.isType(t) || t === null ? t : (t = Co(t),
            isNaN(t) ? Bt.INVALID_DATE : new Date(t)))
        }
        )
    }
    prepareParam(t, r) {
        let s;
        if (Pe.isRef(t))
            s = t;
        else {
            let n = this.cast(t);
            if (!this._typeCheck(n))
                throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);
            s = n
        }
        return s
    }
    min(t, r=Dt.min) {
        let s = this.prepareParam(t, "min");
        return this.test({
            message: r,
            name: "min",
            exclusive: !0,
            params: {
                min: t
            },
            skipAbsent: !0,
            test(n) {
                return n >= this.resolve(s)
            }
        })
    }
    max(t, r=Dt.max) {
        let s = this.prepareParam(t, "max");
        return this.test({
            message: r,
            name: "max",
            exclusive: !0,
            params: {
                max: t
            },
            skipAbsent: !0,
            test(n) {
                return n <= this.resolve(s)
            }
        })
    }
}
Bt.INVALID_DATE = Vo;
function zo(e, t=[]) {
    let r = []
      , s = new Set
      , n = new Set(t.map( ([o,c]) => `${o}-${c}`));
    function i(o, c) {
        let u = Re.split(o)[0];
        s.add(u),
        n.has(`${c}-${u}`) || r.push([c, u])
    }
    for (const o of Object.keys(e)) {
        let c = e[o];
        s.add(o),
        Pe.isRef(c) && c.isSibling ? i(c.path, o) : Ut(c) && "deps"in c && c.deps.forEach(u => i(u, o))
    }
    return po.array(Array.from(s), r).reverse()
}
function Fr(e, t) {
    let r = 1 / 0;
    return e.some( (s, n) => {
        var i;
        if ((i = t.path) != null && i.includes(s))
            return r = n,
            !0
    }
    ),
    r
}
function js(e) {
    return (t, r) => Fr(e, t) - Fr(e, r)
}
const Uo = (e, t, r) => {
    if (typeof e != "string")
        return e;
    let s = e;
    try {
        s = JSON.parse(e)
    } catch {}
    return r.isType(s) ? s : e
}
;
function it(e) {
    if ("fields"in e) {
        const t = {};
        for (const [r,s] of Object.entries(e.fields))
            t[r] = it(s);
        return e.setFields(t)
    }
    if (e.type === "array") {
        const t = e.optional();
        return t.innerType && (t.innerType = it(t.innerType)),
        t
    }
    return e.type === "tuple" ? e.optional().clone({
        types: e.spec.types.map(it)
    }) : "optional"in e ? e.optional() : e
}
const Bo = (e, t) => {
    const r = [...Re.normalizePath(t)];
    if (r.length === 1)
        return r[0]in e;
    let s = r.pop()
      , n = Re.getter(Re.join(r), !0)(e);
    return !!(n && s in n)
}
;
let Cr = e => Object.prototype.toString.call(e) === "[object Object]";
function Tr(e, t) {
    let r = Object.keys(e.fields);
    return Object.keys(t).filter(s => r.indexOf(s) === -1)
}
const qo = js([]);
function Ns(e) {
    return new Es(e)
}
class Es extends Ne {
    constructor(t) {
        super({
            type: "object",
            check(r) {
                return Cr(r) || typeof r == "function"
            }
        }),
        this.fields = Object.create(null),
        this._sortErrors = qo,
        this._nodes = [],
        this._excludedEdges = [],
        this.withMutation( () => {
            t && this.shape(t)
        }
        )
    }
    _cast(t, r={}) {
        var s;
        let n = super._cast(t, r);
        if (n === void 0)
            return this.getDefault(r);
        if (!this._typeCheck(n))
            return n;
        let i = this.fields
          , o = (s = r.stripUnknown) != null ? s : this.spec.noUnknown
          , c = [].concat(this._nodes, Object.keys(n).filter(m => !this._nodes.includes(m)))
          , u = {}
          , p = Object.assign({}, r, {
            parent: u,
            __validating: r.__validating || !1
        })
          , l = !1;
        for (const m of c) {
            let x = i[m]
              , v = m in n;
            if (x) {
                let O, F = n[m];
                p.path = (r.path ? `${r.path}.` : "") + m,
                x = x.resolve({
                    value: F,
                    context: r.context,
                    parent: u
                });
                let k = x instanceof Ne ? x.spec : void 0
                  , y = k == null ? void 0 : k.strict;
                if (k != null && k.strip) {
                    l = l || m in n;
                    continue
                }
                O = !r.__validating || !y ? x.cast(n[m], p) : n[m],
                O !== void 0 && (u[m] = O)
            } else
                v && !o && (u[m] = n[m]);
            (v !== m in u || u[m] !== n[m]) && (l = !0)
        }
        return l ? u : n
    }
    _validate(t, r={}, s, n) {
        let {from: i=[], originalValue: o=t, recursive: c=this.spec.recursive} = r;
        r.from = [{
            schema: this,
            value: o
        }, ...i],
        r.__validating = !0,
        r.originalValue = o,
        super._validate(t, r, s, (u, p) => {
            if (!c || !Cr(p)) {
                n(u, p);
                return
            }
            o = o || p;
            let l = [];
            for (let m of this._nodes) {
                let x = this.fields[m];
                !x || Pe.isRef(x) || l.push(x.asNestedTest({
                    options: r,
                    key: m,
                    parent: p,
                    parentPath: r.path,
                    originalParent: o
                }))
            }
            this.runTests({
                tests: l,
                value: p,
                originalValue: o,
                options: r
            }, s, m => {
                n(m.sort(this._sortErrors).concat(u), p)
            }
            )
        }
        )
    }
    clone(t) {
        const r = super.clone(t);
        return r.fields = Object.assign({}, this.fields),
        r._nodes = this._nodes,
        r._excludedEdges = this._excludedEdges,
        r._sortErrors = this._sortErrors,
        r
    }
    concat(t) {
        let r = super.concat(t)
          , s = r.fields;
        for (let[n,i] of Object.entries(this.fields)) {
            const o = s[n];
            s[n] = o === void 0 ? i : o
        }
        return r.withMutation(n => n.setFields(s, [...this._excludedEdges, ...t._excludedEdges]))
    }
    _getDefault(t) {
        if ("default"in this.spec)
            return super._getDefault(t);
        if (!this._nodes.length)
            return;
        let r = {};
        return this._nodes.forEach(s => {
            var n;
            const i = this.fields[s];
            let o = t;
            (n = o) != null && n.value && (o = Object.assign({}, o, {
                parent: o.value,
                value: o.value[s]
            })),
            r[s] = i && "getDefault"in i ? i.getDefault(o) : void 0
        }
        ),
        r
    }
    setFields(t, r) {
        let s = this.clone();
        return s.fields = t,
        s._nodes = zo(t, r),
        s._sortErrors = js(Object.keys(t)),
        r && (s._excludedEdges = r),
        s
    }
    shape(t, r=[]) {
        return this.clone().withMutation(s => {
            let n = s._excludedEdges;
            return r.length && (Array.isArray(r[0]) || (r = [r]),
            n = [...s._excludedEdges, ...r]),
            s.setFields(Object.assign(s.fields, t), n)
        }
        )
    }
    partial() {
        const t = {};
        for (const [r,s] of Object.entries(this.fields))
            t[r] = "optional"in s && s.optional instanceof Function ? s.optional() : s;
        return this.setFields(t)
    }
    deepPartial() {
        return it(this)
    }
    pick(t) {
        const r = {};
        for (const s of t)
            this.fields[s] && (r[s] = this.fields[s]);
        return this.setFields(r, this._excludedEdges.filter( ([s,n]) => t.includes(s) && t.includes(n)))
    }
    omit(t) {
        const r = [];
        for (const s of Object.keys(this.fields))
            t.includes(s) || r.push(s);
        return this.pick(r)
    }
    from(t, r, s) {
        let n = Re.getter(t, !0);
        return this.transform(i => {
            if (!i)
                return i;
            let o = i;
            return Bo(i, t) && (o = Object.assign({}, i),
            s || delete o[t],
            o[r] = n(i)),
            o
        }
        )
    }
    json() {
        return this.transform(Uo)
    }
    exact(t) {
        return this.test({
            name: "exact",
            exclusive: !0,
            message: t || nt.exact,
            test(r) {
                if (r == null)
                    return !0;
                const s = Tr(this.schema, r);
                return s.length === 0 || this.createError({
                    params: {
                        properties: s.join(", ")
                    }
                })
            }
        })
    }
    stripUnknown() {
        return this.clone({
            noUnknown: !0
        })
    }
    noUnknown(t=!0, r=nt.noUnknown) {
        typeof t != "boolean" && (r = t,
        t = !0);
        let s = this.test({
            name: "noUnknown",
            exclusive: !0,
            message: r,
            test(n) {
                if (n == null)
                    return !0;
                const i = Tr(this.schema, n);
                return !t || i.length === 0 || this.createError({
                    params: {
                        unknown: i.join(", ")
                    }
                })
            }
        });
        return s.spec.noUnknown = t,
        s
    }
    unknown(t=!0, r=nt.noUnknown) {
        return this.noUnknown(!t, r)
    }
    transformKeys(t) {
        return this.transform(r => {
            if (!r)
                return r;
            const s = {};
            for (const n of Object.keys(r))
                s[t(n)] = r[n];
            return s
        }
        )
    }
    camelCase() {
        return this.transformKeys(Ct.camelCase)
    }
    snakeCase() {
        return this.transformKeys(Ct.snakeCase)
    }
    constantCase() {
        return this.transformKeys(t => Ct.snakeCase(t).toUpperCase())
    }
    describe(t) {
        const r = (t ? this.resolve(t) : this).clone()
          , s = super.describe(t);
        s.fields = {};
        for (const [i,o] of Object.entries(r.fields)) {
            var n;
            let c = t;
            (n = c) != null && n.value && (c = Object.assign({}, c, {
                parent: c.value,
                value: c.value[i]
            })),
            s.fields[i] = o.describe(c)
        }
        return s
    }
}
Ns.prototype = Es.prototype;
var Je = e => e.type === "checkbox"
  , $e = e => e instanceof Date
  , ce = e => e == null;
const Ss = e => typeof e == "object";
var K = e => !ce(e) && !Array.isArray(e) && Ss(e) && !$e(e)
  , Ho = e => K(e) && e.target ? Je(e.target) ? e.target.checked : e.target.value : e
  , Wo = e => e.substring(0, e.search(/\.\d+(\.|$)/)) || e
  , Zo = (e, t) => e.has(Wo(t))
  , Go = e => {
    const t = e.constructor && e.constructor.prototype;
    return K(t) && t.hasOwnProperty("isPrototypeOf")
}
  , qt = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function ae(e) {
    let t;
    const r = Array.isArray(e)
      , s = typeof FileList < "u" ? e instanceof FileList : !1;
    if (e instanceof Date)
        t = new Date(e);
    else if (e instanceof Set)
        t = new Set(e);
    else if (!(qt && (e instanceof Blob || s)) && (r || K(e)))
        if (t = r ? [] : {},
        !r && !Go(e))
            t = e;
        else
            for (const n in e)
                e.hasOwnProperty(n) && (t[n] = ae(e[n]));
    else
        return e;
    return t
}
var bt = e => Array.isArray(e) ? e.filter(Boolean) : []
  , Y = e => e === void 0
  , T = (e, t, r) => {
    if (!t || !K(e))
        return r;
    const s = bt(t.split(/[,[\].]+?/)).reduce( (n, i) => ce(n) ? n : n[i], e);
    return Y(s) || s === e ? Y(e[t]) ? r : e[t] : s
}
  , ke = e => typeof e == "boolean"
  , Ht = e => /^\w*$/.test(e)
  , _s = e => bt(e.replace(/["|']|\]/g, "").split(/\.|\[/))
  , q = (e, t, r) => {
    let s = -1;
    const n = Ht(t) ? [t] : _s(t)
      , i = n.length
      , o = i - 1;
    for (; ++s < i; ) {
        const c = n[s];
        let u = r;
        if (s !== o) {
            const p = e[c];
            u = K(p) || Array.isArray(p) ? p : isNaN(+n[s + 1]) ? {} : []
        }
        if (c === "__proto__" || c === "constructor" || c === "prototype")
            return;
        e[c] = u,
        e = e[c]
    }
}
;
const Ir = {
    BLUR: "blur",
    FOCUS_OUT: "focusout"
}
  , ye = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all"
}
  , _e = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate"
};
Z.createContext(null);
var Ko = (e, t, r, s=!0) => {
    const n = {
        defaultValues: t._defaultValues
    };
    for (const i in e)
        Object.defineProperty(n, i, {
            get: () => {
                const o = i;
                return t._proxyFormState[o] !== ye.all && (t._proxyFormState[o] = !s || ye.all),
                e[o]
            }
        });
    return n
}
;
const Qo = typeof window < "u" ? f.useLayoutEffect : f.useEffect;
var je = e => typeof e == "string"
  , Yo = (e, t, r, s, n) => je(e) ? (s && t.watch.add(e),
T(r, e, n)) : Array.isArray(e) ? e.map(i => (s && t.watch.add(i),
T(r, i))) : (s && (t.watchAll = !0),
r)
  , Fs = (e, t, r, s, n) => t ? {
    ...r[e],
    types: {
        ...r[e] && r[e].types ? r[e].types : {},
        [s]: n || !0
    }
} : {}
  , Qe = e => Array.isArray(e) ? e : [e]
  , Ar = () => {
    let e = [];
    return {
        get observers() {
            return e
        },
        next: n => {
            for (const i of e)
                i.next && i.next(n)
        }
        ,
        subscribe: n => (e.push(n),
        {
            unsubscribe: () => {
                e = e.filter(i => i !== n)
            }
        }),
        unsubscribe: () => {
            e = []
        }
    }
}
  , Lt = e => ce(e) || !Ss(e);
function Ce(e, t) {
    if (Lt(e) || Lt(t))
        return e === t;
    if ($e(e) && $e(t))
        return e.getTime() === t.getTime();
    const r = Object.keys(e)
      , s = Object.keys(t);
    if (r.length !== s.length)
        return !1;
    for (const n of r) {
        const i = e[n];
        if (!s.includes(n))
            return !1;
        if (n !== "ref") {
            const o = t[n];
            if ($e(i) && $e(o) || K(i) && K(o) || Array.isArray(i) && Array.isArray(o) ? !Ce(i, o) : i !== o)
                return !1
        }
    }
    return !0
}
var le = e => K(e) && !Object.keys(e).length
  , Wt = e => e.type === "file"
  , be = e => typeof e == "function"
  , mt = e => {
    if (!qt)
        return !1;
    const t = e ? e.ownerDocument : 0;
    return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
}
  , Cs = e => e.type === "select-multiple"
  , Zt = e => e.type === "radio"
  , Jo = e => Zt(e) || Je(e)
  , Tt = e => mt(e) && e.isConnected;
function Xo(e, t) {
    const r = t.slice(0, -1).length;
    let s = 0;
    for (; s < r; )
        e = Y(e) ? s++ : e[t[s++]];
    return e
}
function el(e) {
    for (const t in e)
        if (e.hasOwnProperty(t) && !Y(e[t]))
            return !1;
    return !0
}
function X(e, t) {
    const r = Array.isArray(t) ? t : Ht(t) ? [t] : _s(t)
      , s = r.length === 1 ? e : Xo(e, r)
      , n = r.length - 1
      , i = r[n];
    return s && delete s[i],
    n !== 0 && (K(s) && le(s) || Array.isArray(s) && el(s)) && X(e, r.slice(0, -1)),
    e
}
var Ts = e => {
    for (const t in e)
        if (be(e[t]))
            return !0;
    return !1
}
;
function pt(e, t={}) {
    const r = Array.isArray(e);
    if (K(e) || r)
        for (const s in e)
            Array.isArray(e[s]) || K(e[s]) && !Ts(e[s]) ? (t[s] = Array.isArray(e[s]) ? [] : {},
            pt(e[s], t[s])) : ce(e[s]) || (t[s] = !0);
    return t
}
function Is(e, t, r) {
    const s = Array.isArray(e);
    if (K(e) || s)
        for (const n in e)
            Array.isArray(e[n]) || K(e[n]) && !Ts(e[n]) ? Y(t) || Lt(r[n]) ? r[n] = Array.isArray(e[n]) ? pt(e[n], []) : {
                ...pt(e[n])
            } : Is(e[n], ce(t) ? {} : t[n], r[n]) : r[n] = !Ce(e[n], t[n]);
    return r
}
var Ze = (e, t) => Is(e, t, pt(t));
const Or = {
    value: !1,
    isValid: !1
}
  , $r = {
    value: !0,
    isValid: !0
};
var As = e => {
    if (Array.isArray(e)) {
        if (e.length > 1) {
            const t = e.filter(r => r && r.checked && !r.disabled).map(r => r.value);
            return {
                value: t,
                isValid: !!t.length
            }
        }
        return e[0].checked && !e[0].disabled ? e[0].attributes && !Y(e[0].attributes.value) ? Y(e[0].value) || e[0].value === "" ? $r : {
            value: e[0].value,
            isValid: !0
        } : $r : Or
    }
    return Or
}
  , Os = (e, {valueAsNumber: t, valueAsDate: r, setValueAs: s}) => Y(e) ? e : t ? e === "" ? NaN : e && +e : r && je(e) ? new Date(e) : s ? s(e) : e;
const Dr = {
    isValid: !1,
    value: null
};
var $s = e => Array.isArray(e) ? e.reduce( (t, r) => r && r.checked && !r.disabled ? {
    isValid: !0,
    value: r.value
} : t, Dr) : Dr;
function Rr(e) {
    const t = e.ref;
    return Wt(t) ? t.files : Zt(t) ? $s(e.refs).value : Cs(t) ? [...t.selectedOptions].map( ({value: r}) => r) : Je(t) ? As(e.refs).value : Os(Y(t.value) ? e.ref.value : t.value, e)
}
var tl = (e, t, r, s) => {
    const n = {};
    for (const i of e) {
        const o = T(t, i);
        o && q(n, i, o._f)
    }
    return {
        criteriaMode: r,
        names: [...e],
        fields: n,
        shouldUseNativeValidation: s
    }
}
  , xt = e => e instanceof RegExp
  , Ge = e => Y(e) ? e : xt(e) ? e.source : K(e) ? xt(e.value) ? e.value.source : e.value : e
  , Lr = e => ({
    isOnSubmit: !e || e === ye.onSubmit,
    isOnBlur: e === ye.onBlur,
    isOnChange: e === ye.onChange,
    isOnAll: e === ye.all,
    isOnTouch: e === ye.onTouched
});
const Mr = "AsyncFunction";
var rl = e => !!e && !!e.validate && !!(be(e.validate) && e.validate.constructor.name === Mr || K(e.validate) && Object.values(e.validate).find(t => t.constructor.name === Mr))
  , sl = e => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate)
  , Vr = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some(s => e.startsWith(s) && /^\.\w+/.test(e.slice(s.length))));
const Ye = (e, t, r, s) => {
    for (const n of r || Object.keys(e)) {
        const i = T(e, n);
        if (i) {
            const {_f: o, ...c} = i;
            if (o) {
                if (o.refs && o.refs[0] && t(o.refs[0], n) && !s)
                    return !0;
                if (o.ref && t(o.ref, o.name) && !s)
                    return !0;
                if (Ye(c, t))
                    break
            } else if (K(c) && Ye(c, t))
                break
        }
    }
}
;
function Pr(e, t, r) {
    const s = T(e, r);
    if (s || Ht(r))
        return {
            error: s,
            name: r
        };
    const n = r.split(".");
    for (; n.length; ) {
        const i = n.join(".")
          , o = T(t, i)
          , c = T(e, i);
        if (o && !Array.isArray(o) && r !== i)
            return {
                name: r
            };
        if (c && c.type)
            return {
                name: i,
                error: c
            };
        n.pop()
    }
    return {
        name: r
    }
}
var al = (e, t, r, s) => {
    r(e);
    const {name: n, ...i} = e;
    return le(i) || Object.keys(i).length >= Object.keys(t).length || Object.keys(i).find(o => t[o] === (!s || ye.all))
}
  , nl = (e, t, r) => !e || !t || e === t || Qe(e).some(s => s && (r ? s === t : s.startsWith(t) || t.startsWith(s)))
  , il = (e, t, r, s, n) => n.isOnAll ? !1 : !r && n.isOnTouch ? !(t || e) : (r ? s.isOnBlur : n.isOnBlur) ? !e : (r ? s.isOnChange : n.isOnChange) ? e : !0
  , ol = (e, t) => !bt(T(e, t)).length && X(e, t)
  , ll = (e, t, r) => {
    const s = Qe(T(e, r));
    return q(s, "root", t[r]),
    q(e, r, s),
    e
}
  , ot = e => je(e);
function zr(e, t, r="validate") {
    if (ot(e) || Array.isArray(e) && e.every(ot) || ke(e) && !e)
        return {
            type: r,
            message: ot(e) ? e : "",
            ref: t
        }
}
var Ue = e => K(e) && !xt(e) ? e : {
    value: e,
    message: ""
}
  , Ur = async (e, t, r, s, n, i) => {
    const {ref: o, refs: c, required: u, maxLength: p, minLength: l, min: m, max: x, pattern: v, validate: O, name: F, valueAsNumber: k, mount: y} = e._f
      , b = T(r, F);
    if (!y || t.has(F))
        return {};
    const R = c ? c[0] : o
      , z = S => {
        n && R.reportValidity && (R.setCustomValidity(ke(S) ? "" : S || ""),
        R.reportValidity())
    }
      , L = {}
      , P = Zt(o)
      , $ = Je(o)
      , D = P || $
      , A = (k || Wt(o)) && Y(o.value) && Y(b) || mt(o) && o.value === "" || b === "" || Array.isArray(b) && !b.length
      , w = Fs.bind(null, F, s, L)
      , N = (S, j, V, B=_e.maxLength, ee=_e.minLength) => {
        const oe = S ? j : V;
        L[F] = {
            type: S ? B : ee,
            message: oe,
            ref: o,
            ...w(S ? B : ee, oe)
        }
    }
    ;
    if (i ? !Array.isArray(b) || !b.length : u && (!D && (A || ce(b)) || ke(b) && !b || $ && !As(c).isValid || P && !$s(c).isValid)) {
        const {value: S, message: j} = ot(u) ? {
            value: !!u,
            message: u
        } : Ue(u);
        if (S && (L[F] = {
            type: _e.required,
            message: j,
            ref: R,
            ...w(_e.required, j)
        },
        !s))
            return z(j),
            L
    }
    if (!A && (!ce(m) || !ce(x))) {
        let S, j;
        const V = Ue(x)
          , B = Ue(m);
        if (!ce(b) && !isNaN(b)) {
            const ee = o.valueAsNumber || b && +b;
            ce(V.value) || (S = ee > V.value),
            ce(B.value) || (j = ee < B.value)
        } else {
            const ee = o.valueAsDate || new Date(b)
              , oe = xe => new Date(new Date().toDateString() + " " + xe)
              , pe = o.type == "time"
              , M = o.type == "week";
            je(V.value) && b && (S = pe ? oe(b) > oe(V.value) : M ? b > V.value : ee > new Date(V.value)),
            je(B.value) && b && (j = pe ? oe(b) < oe(B.value) : M ? b < B.value : ee < new Date(B.value))
        }
        if ((S || j) && (N(!!S, V.message, B.message, _e.max, _e.min),
        !s))
            return z(L[F].message),
            L
    }
    if ((p || l) && !A && (je(b) || i && Array.isArray(b))) {
        const S = Ue(p)
          , j = Ue(l)
          , V = !ce(S.value) && b.length > +S.value
          , B = !ce(j.value) && b.length < +j.value;
        if ((V || B) && (N(V, S.message, j.message),
        !s))
            return z(L[F].message),
            L
    }
    if (v && !A && je(b)) {
        const {value: S, message: j} = Ue(v);
        if (xt(S) && !b.match(S) && (L[F] = {
            type: _e.pattern,
            message: j,
            ref: o,
            ...w(_e.pattern, j)
        },
        !s))
            return z(j),
            L
    }
    if (O) {
        if (be(O)) {
            const S = await O(b, r)
              , j = zr(S, R);
            if (j && (L[F] = {
                ...j,
                ...w(_e.validate, j.message)
            },
            !s))
                return z(j.message),
                L
        } else if (K(O)) {
            let S = {};
            for (const j in O) {
                if (!le(S) && !s)
                    break;
                const V = zr(await O[j](b, r), R, j);
                V && (S = {
                    ...V,
                    ...w(j, V.message)
                },
                z(V.message),
                s && (L[F] = S))
            }
            if (!le(S) && (L[F] = {
                ref: R,
                ...S
            },
            !s))
                return L
        }
    }
    return z(!0),
    L
}
;
const cl = {
    mode: ye.onSubmit,
    reValidateMode: ye.onChange,
    shouldFocusError: !0
};
function dl(e={}) {
    let t = {
        ...cl,
        ...e
    }
      , r = {
        submitCount: 0,
        isDirty: !1,
        isReady: !1,
        isLoading: be(t.defaultValues),
        isValidating: !1,
        isSubmitted: !1,
        isSubmitting: !1,
        isSubmitSuccessful: !1,
        isValid: !1,
        touchedFields: {},
        dirtyFields: {},
        validatingFields: {},
        errors: t.errors || {},
        disabled: t.disabled || !1
    };
    const s = {};
    let n = K(t.defaultValues) || K(t.values) ? ae(t.defaultValues || t.values) || {} : {}, i = t.shouldUnregister ? {} : ae(n), o = {
        action: !1,
        mount: !1,
        watch: !1
    }, c = {
        mount: new Set,
        disabled: new Set,
        unMount: new Set,
        array: new Set,
        watch: new Set
    }, u, p = 0;
    const l = {
        isDirty: !1,
        dirtyFields: !1,
        validatingFields: !1,
        touchedFields: !1,
        isValidating: !1,
        isValid: !1,
        errors: !1
    };
    let m = {
        ...l
    };
    const x = {
        array: Ar(),
        state: Ar()
    }
      , v = Lr(t.mode)
      , O = Lr(t.reValidateMode)
      , F = t.criteriaMode === ye.all
      , k = d => h => {
        clearTimeout(p),
        p = setTimeout(d, h)
    }
      , y = async d => {
        if (!t.disabled && (l.isValid || m.isValid || d)) {
            const h = t.resolver ? le((await A()).errors) : await N(s, !0);
            h !== r.isValid && x.state.next({
                isValid: h
            })
        }
    }
      , b = (d, h) => {
        !t.disabled && (l.isValidating || l.validatingFields || m.isValidating || m.validatingFields) && ((d || Array.from(c.mount)).forEach(g => {
            g && (h ? q(r.validatingFields, g, h) : X(r.validatingFields, g))
        }
        ),
        x.state.next({
            validatingFields: r.validatingFields,
            isValidating: !le(r.validatingFields)
        }))
    }
      , R = (d, h=[], g, C, _=!0, E=!0) => {
        if (C && g && !t.disabled) {
            if (o.action = !0,
            E && Array.isArray(T(s, d))) {
                const I = g(T(s, d), C.argA, C.argB);
                _ && q(s, d, I)
            }
            if (E && Array.isArray(T(r.errors, d))) {
                const I = g(T(r.errors, d), C.argA, C.argB);
                _ && q(r.errors, d, I),
                ol(r.errors, d)
            }
            if ((l.touchedFields || m.touchedFields) && E && Array.isArray(T(r.touchedFields, d))) {
                const I = g(T(r.touchedFields, d), C.argA, C.argB);
                _ && q(r.touchedFields, d, I)
            }
            (l.dirtyFields || m.dirtyFields) && (r.dirtyFields = Ze(n, i)),
            x.state.next({
                name: d,
                isDirty: j(d, h),
                dirtyFields: r.dirtyFields,
                errors: r.errors,
                isValid: r.isValid
            })
        } else
            q(i, d, h)
    }
      , z = (d, h) => {
        q(r.errors, d, h),
        x.state.next({
            errors: r.errors
        })
    }
      , L = d => {
        r.errors = d,
        x.state.next({
            errors: r.errors,
            isValid: !1
        })
    }
      , P = (d, h, g, C) => {
        const _ = T(s, d);
        if (_) {
            const E = T(i, d, Y(g) ? T(n, d) : g);
            Y(E) || C && C.defaultChecked || h ? q(i, d, h ? E : Rr(_._f)) : ee(d, E),
            o.mount && y()
        }
    }
      , $ = (d, h, g, C, _) => {
        let E = !1
          , I = !1;
        const U = {
            name: d
        };
        if (!t.disabled) {
            if (!g || C) {
                (l.isDirty || m.isDirty) && (I = r.isDirty,
                r.isDirty = U.isDirty = j(),
                E = I !== U.isDirty);
                const Q = Ce(T(n, d), h);
                I = !!T(r.dirtyFields, d),
                Q ? X(r.dirtyFields, d) : q(r.dirtyFields, d, !0),
                U.dirtyFields = r.dirtyFields,
                E = E || (l.dirtyFields || m.dirtyFields) && I !== !Q
            }
            if (g) {
                const Q = T(r.touchedFields, d);
                Q || (q(r.touchedFields, d, g),
                U.touchedFields = r.touchedFields,
                E = E || (l.touchedFields || m.touchedFields) && Q !== g)
            }
            E && _ && x.state.next(U)
        }
        return E ? U : {}
    }
      , D = (d, h, g, C) => {
        const _ = T(r.errors, d)
          , E = (l.isValid || m.isValid) && ke(h) && r.isValid !== h;
        if (t.delayError && g ? (u = k( () => z(d, g)),
        u(t.delayError)) : (clearTimeout(p),
        u = null,
        g ? q(r.errors, d, g) : X(r.errors, d)),
        (g ? !Ce(_, g) : _) || !le(C) || E) {
            const I = {
                ...C,
                ...E && ke(h) ? {
                    isValid: h
                } : {},
                errors: r.errors,
                name: d
            };
            r = {
                ...r,
                ...I
            },
            x.state.next(I)
        }
    }
      , A = async d => {
        b(d, !0);
        const h = await t.resolver(i, t.context, tl(d || c.mount, s, t.criteriaMode, t.shouldUseNativeValidation));
        return b(d),
        h
    }
      , w = async d => {
        const {errors: h} = await A(d);
        if (d)
            for (const g of d) {
                const C = T(h, g);
                C ? q(r.errors, g, C) : X(r.errors, g)
            }
        else
            r.errors = h;
        return h
    }
      , N = async (d, h, g={
        valid: !0
    }) => {
        for (const C in d) {
            const _ = d[C];
            if (_) {
                const {_f: E, ...I} = _;
                if (E) {
                    const U = c.array.has(E.name)
                      , Q = _._f && rl(_._f);
                    Q && l.validatingFields && b([C], !0);
                    const se = await Ur(_, c.disabled, i, F, t.shouldUseNativeValidation && !h, U);
                    if (Q && l.validatingFields && b([C]),
                    se[E.name] && (g.valid = !1,
                    h))
                        break;
                    !h && (T(se, E.name) ? U ? ll(r.errors, se, E.name) : q(r.errors, E.name, se[E.name]) : X(r.errors, E.name))
                }
                !le(I) && await N(I, h, g)
            }
        }
        return g.valid
    }
      , S = () => {
        for (const d of c.unMount) {
            const h = T(s, d);
            h && (h._f.refs ? h._f.refs.every(g => !Tt(g)) : !Tt(h._f.ref)) && wt(d)
        }
        c.unMount = new Set
    }
      , j = (d, h) => !t.disabled && (d && h && q(i, d, h),
    !Ce(de(), n))
      , V = (d, h, g) => Yo(d, c, {
        ...o.mount ? i : Y(h) ? n : je(d) ? {
            [d]: h
        } : h
    }, g, h)
      , B = d => bt(T(o.mount ? i : n, d, t.shouldUnregister ? T(n, d, []) : []))
      , ee = (d, h, g={}) => {
        const C = T(s, d);
        let _ = h;
        if (C) {
            const E = C._f;
            E && (!E.disabled && q(i, d, Os(h, E)),
            _ = mt(E.ref) && ce(h) ? "" : h,
            Cs(E.ref) ? [...E.ref.options].forEach(I => I.selected = _.includes(I.value)) : E.refs ? Je(E.ref) ? E.refs.length > 1 ? E.refs.forEach(I => (!I.defaultChecked || !I.disabled) && (I.checked = Array.isArray(_) ? !!_.find(U => U === I.value) : _ === I.value)) : E.refs[0] && (E.refs[0].checked = !!_) : E.refs.forEach(I => I.checked = I.value === _) : Wt(E.ref) ? E.ref.value = "" : (E.ref.value = _,
            E.ref.type || x.state.next({
                name: d,
                values: ae(i)
            })))
        }
        (g.shouldDirty || g.shouldTouch) && $(d, _, g.shouldTouch, g.shouldDirty, !0),
        g.shouldValidate && Ee(d)
    }
      , oe = (d, h, g) => {
        for (const C in h) {
            const _ = h[C]
              , E = `${d}.${C}`
              , I = T(s, E);
            (c.array.has(d) || K(_) || I && !I._f) && !$e(_) ? oe(E, _, g) : ee(E, _, g)
        }
    }
      , pe = (d, h, g={}) => {
        const C = T(s, d)
          , _ = c.array.has(d)
          , E = ae(h);
        q(i, d, E),
        _ ? (x.array.next({
            name: d,
            values: ae(i)
        }),
        (l.isDirty || l.dirtyFields || m.isDirty || m.dirtyFields) && g.shouldDirty && x.state.next({
            name: d,
            dirtyFields: Ze(n, i),
            isDirty: j(d, E)
        })) : C && !C._f && !ce(E) ? oe(d, E, g) : ee(d, E, g),
        Vr(d, c) && x.state.next({
            ...r
        }),
        x.state.next({
            name: o.mount ? d : void 0,
            values: ae(i)
        })
    }
      , M = async d => {
        o.mount = !0;
        const h = d.target;
        let g = h.name
          , C = !0;
        const _ = T(s, g)
          , E = I => {
            C = Number.isNaN(I) || $e(I) && isNaN(I.getTime()) || Ce(I, T(i, g, I))
        }
        ;
        if (_) {
            let I, U;
            const Q = h.type ? Rr(_._f) : Ho(d)
              , se = d.type === Ir.BLUR || d.type === Ir.FOCUS_OUT
              , zs = !sl(_._f) && !t.resolver && !T(r.errors, g) && !_._f.deps || il(se, T(r.touchedFields, g), r.isSubmitted, O, v)
              , jt = Vr(g, c, se);
            q(i, g, Q),
            se ? (_._f.onBlur && _._f.onBlur(d),
            u && u(0)) : _._f.onChange && _._f.onChange(d);
            const Nt = $(g, Q, se)
              , Us = !le(Nt) || jt;
            if (!se && x.state.next({
                name: g,
                type: d.type,
                values: ae(i)
            }),
            zs)
                return (l.isValid || m.isValid) && (t.mode === "onBlur" ? se && y() : se || y()),
                Us && x.state.next({
                    name: g,
                    ...jt ? {} : Nt
                });
            if (!se && jt && x.state.next({
                ...r
            }),
            t.resolver) {
                const {errors: er} = await A([g]);
                if (E(Q),
                C) {
                    const Bs = Pr(r.errors, s, g)
                      , tr = Pr(er, s, Bs.name || g);
                    I = tr.error,
                    g = tr.name,
                    U = le(er)
                }
            } else
                b([g], !0),
                I = (await Ur(_, c.disabled, i, F, t.shouldUseNativeValidation))[g],
                b([g]),
                E(Q),
                C && (I ? U = !1 : (l.isValid || m.isValid) && (U = await N(s, !0)));
            C && (_._f.deps && Ee(_._f.deps),
            D(g, U, I, Nt))
        }
    }
      , xe = (d, h) => {
        if (T(r.errors, h) && d.focus)
            return d.focus(),
            1
    }
      , Ee = async (d, h={}) => {
        let g, C;
        const _ = Qe(d);
        if (t.resolver) {
            const E = await w(Y(d) ? d : _);
            g = le(E),
            C = d ? !_.some(I => T(E, I)) : g
        } else
            d ? (C = (await Promise.all(_.map(async E => {
                const I = T(s, E);
                return await N(I && I._f ? {
                    [E]: I
                } : I)
            }
            ))).every(Boolean),
            !(!C && !r.isValid) && y()) : C = g = await N(s);
        return x.state.next({
            ...!je(d) || (l.isValid || m.isValid) && g !== r.isValid ? {} : {
                name: d
            },
            ...t.resolver || !d ? {
                isValid: g
            } : {},
            errors: r.errors
        }),
        h.shouldFocus && !C && Ye(s, xe, d ? _ : c.mount),
        C
    }
      , de = d => {
        const h = {
            ...o.mount ? i : n
        };
        return Y(d) ? h : je(d) ? T(h, d) : d.map(g => T(h, g))
    }
      , ve = (d, h) => ({
        invalid: !!T((h || r).errors, d),
        isDirty: !!T((h || r).dirtyFields, d),
        error: T((h || r).errors, d),
        isValidating: !!T(r.validatingFields, d),
        isTouched: !!T((h || r).touchedFields, d)
    })
      , He = d => {
        d && Qe(d).forEach(h => X(r.errors, h)),
        x.state.next({
            errors: d ? r.errors : {}
        })
    }
      , Ae = (d, h, g) => {
        const C = (T(s, d, {
            _f: {}
        })._f || {}).ref
          , _ = T(r.errors, d) || {}
          , {ref: E, message: I, type: U, ...Q} = _;
        q(r.errors, d, {
            ...Q,
            ...h,
            ref: C
        }),
        x.state.next({
            name: d,
            errors: r.errors,
            isValid: !1
        }),
        g && g.shouldFocus && C && C.focus && C.focus()
    }
      , vt = (d, h) => be(d) ? x.state.subscribe({
        next: g => d(V(void 0, h), g)
    }) : V(d, h, !0)
      , We = d => x.state.subscribe({
        next: h => {
            nl(d.name, h.name, d.exact) && al(h, d.formState || l, Ps, d.reRenderRoot) && d.callback({
                values: {
                    ...i
                },
                ...r,
                ...h
            })
        }
    }).unsubscribe
      , Rs = d => (o.mount = !0,
    m = {
        ...m,
        ...d.formState
    },
    We({
        ...d,
        formState: m
    }))
      , wt = (d, h={}) => {
        for (const g of d ? Qe(d) : c.mount)
            c.mount.delete(g),
            c.array.delete(g),
            h.keepValue || (X(s, g),
            X(i, g)),
            !h.keepError && X(r.errors, g),
            !h.keepDirty && X(r.dirtyFields, g),
            !h.keepTouched && X(r.touchedFields, g),
            !h.keepIsValidating && X(r.validatingFields, g),
            !t.shouldUnregister && !h.keepDefaultValue && X(n, g);
        x.state.next({
            values: ae(i)
        }),
        x.state.next({
            ...r,
            ...h.keepDirty ? {
                isDirty: j()
            } : {}
        }),
        !h.keepIsValid && y()
    }
      , Gt = ({disabled: d, name: h}) => {
        (ke(d) && o.mount || d || c.disabled.has(h)) && (d ? c.disabled.add(h) : c.disabled.delete(h))
    }
      , kt = (d, h={}) => {
        let g = T(s, d);
        const C = ke(h.disabled) || ke(t.disabled);
        return q(s, d, {
            ...g || {},
            _f: {
                ...g && g._f ? g._f : {
                    ref: {
                        name: d
                    }
                },
                name: d,
                mount: !0,
                ...h
            }
        }),
        c.mount.add(d),
        g ? Gt({
            disabled: ke(h.disabled) ? h.disabled : t.disabled,
            name: d
        }) : P(d, !0, h.value),
        {
            ...C ? {
                disabled: h.disabled || t.disabled
            } : {},
            ...t.progressive ? {
                required: !!h.required,
                min: Ge(h.min),
                max: Ge(h.max),
                minLength: Ge(h.minLength),
                maxLength: Ge(h.maxLength),
                pattern: Ge(h.pattern)
            } : {},
            name: d,
            onChange: M,
            onBlur: M,
            ref: _ => {
                if (_) {
                    kt(d, h),
                    g = T(s, d);
                    const E = Y(_.value) && _.querySelectorAll && _.querySelectorAll("input,select,textarea")[0] || _
                      , I = Jo(E)
                      , U = g._f.refs || [];
                    if (I ? U.find(Q => Q === E) : E === g._f.ref)
                        return;
                    q(s, d, {
                        _f: {
                            ...g._f,
                            ...I ? {
                                refs: [...U.filter(Tt), E, ...Array.isArray(T(n, d)) ? [{}] : []],
                                ref: {
                                    type: E.type,
                                    name: d
                                }
                            } : {
                                ref: E
                            }
                        }
                    }),
                    P(d, !1, void 0, E)
                } else
                    g = T(s, d, {}),
                    g._f && (g._f.mount = !1),
                    (t.shouldUnregister || h.shouldUnregister) && !(Zo(c.array, d) && o.action) && c.unMount.add(d)
            }
        }
    }
      , Kt = () => t.shouldFocusError && Ye(s, xe, c.mount)
      , Ls = d => {
        ke(d) && (x.state.next({
            disabled: d
        }),
        Ye(s, (h, g) => {
            const C = T(s, g);
            C && (h.disabled = C._f.disabled || d,
            Array.isArray(C._f.refs) && C._f.refs.forEach(_ => {
                _.disabled = C._f.disabled || d
            }
            ))
        }
        , 0, !1))
    }
      , Qt = (d, h) => async g => {
        let C;
        g && (g.preventDefault && g.preventDefault(),
        g.persist && g.persist());
        let _ = ae(i);
        if (x.state.next({
            isSubmitting: !0
        }),
        t.resolver) {
            const {errors: E, values: I} = await A();
            r.errors = E,
            _ = I
        } else
            await N(s);
        if (c.disabled.size)
            for (const E of c.disabled)
                q(_, E, void 0);
        if (X(r.errors, "root"),
        le(r.errors)) {
            x.state.next({
                errors: {}
            });
            try {
                await d(_, g)
            } catch (E) {
                C = E
            }
        } else
            h && await h({
                ...r.errors
            }, g),
            Kt(),
            setTimeout(Kt);
        if (x.state.next({
            isSubmitted: !0,
            isSubmitting: !1,
            isSubmitSuccessful: le(r.errors) && !C,
            submitCount: r.submitCount + 1,
            errors: r.errors
        }),
        C)
            throw C
    }
      , Ms = (d, h={}) => {
        T(s, d) && (Y(h.defaultValue) ? pe(d, ae(T(n, d))) : (pe(d, h.defaultValue),
        q(n, d, ae(h.defaultValue))),
        h.keepTouched || X(r.touchedFields, d),
        h.keepDirty || (X(r.dirtyFields, d),
        r.isDirty = h.defaultValue ? j(d, ae(T(n, d))) : j()),
        h.keepError || (X(r.errors, d),
        l.isValid && y()),
        x.state.next({
            ...r
        }))
    }
      , Yt = (d, h={}) => {
        const g = d ? ae(d) : n
          , C = ae(g)
          , _ = le(d)
          , E = _ ? n : C;
        if (h.keepDefaultValues || (n = g),
        !h.keepValues) {
            if (h.keepDirtyValues) {
                const I = new Set([...c.mount, ...Object.keys(Ze(n, i))]);
                for (const U of Array.from(I))
                    T(r.dirtyFields, U) ? q(E, U, T(i, U)) : pe(U, T(E, U))
            } else {
                if (qt && Y(d))
                    for (const I of c.mount) {
                        const U = T(s, I);
                        if (U && U._f) {
                            const Q = Array.isArray(U._f.refs) ? U._f.refs[0] : U._f.ref;
                            if (mt(Q)) {
                                const se = Q.closest("form");
                                if (se) {
                                    se.reset();
                                    break
                                }
                            }
                        }
                    }
                for (const I of c.mount)
                    pe(I, T(E, I))
            }
            i = ae(E),
            x.array.next({
                values: {
                    ...E
                }
            }),
            x.state.next({
                values: {
                    ...E
                }
            })
        }
        c = {
            mount: h.keepDirtyValues ? c.mount : new Set,
            unMount: new Set,
            array: new Set,
            disabled: new Set,
            watch: new Set,
            watchAll: !1,
            focus: ""
        },
        o.mount = !l.isValid || !!h.keepIsValid || !!h.keepDirtyValues,
        o.watch = !!t.shouldUnregister,
        x.state.next({
            submitCount: h.keepSubmitCount ? r.submitCount : 0,
            isDirty: _ ? !1 : h.keepDirty ? r.isDirty : !!(h.keepDefaultValues && !Ce(d, n)),
            isSubmitted: h.keepIsSubmitted ? r.isSubmitted : !1,
            dirtyFields: _ ? {} : h.keepDirtyValues ? h.keepDefaultValues && i ? Ze(n, i) : r.dirtyFields : h.keepDefaultValues && d ? Ze(n, d) : h.keepDirty ? r.dirtyFields : {},
            touchedFields: h.keepTouched ? r.touchedFields : {},
            errors: h.keepErrors ? r.errors : {},
            isSubmitSuccessful: h.keepIsSubmitSuccessful ? r.isSubmitSuccessful : !1,
            isSubmitting: !1
        })
    }
      , Jt = (d, h) => Yt(be(d) ? d(i) : d, h)
      , Vs = (d, h={}) => {
        const g = T(s, d)
          , C = g && g._f;
        if (C) {
            const _ = C.refs ? C.refs[0] : C.ref;
            _.focus && (_.focus(),
            h.shouldSelect && be(_.select) && _.select())
        }
    }
      , Ps = d => {
        r = {
            ...r,
            ...d
        }
    }
      , Xt = {
        control: {
            register: kt,
            unregister: wt,
            getFieldState: ve,
            handleSubmit: Qt,
            setError: Ae,
            _subscribe: We,
            _runSchema: A,
            _getWatch: V,
            _getDirty: j,
            _setValid: y,
            _setFieldArray: R,
            _setDisabledField: Gt,
            _setErrors: L,
            _getFieldArray: B,
            _reset: Yt,
            _resetDefaultValues: () => be(t.defaultValues) && t.defaultValues().then(d => {
                Jt(d, t.resetOptions),
                x.state.next({
                    isLoading: !1
                })
            }
            ),
            _removeUnmounted: S,
            _disableForm: Ls,
            _subjects: x,
            _proxyFormState: l,
            get _fields() {
                return s
            },
            get _formValues() {
                return i
            },
            get _state() {
                return o
            },
            set _state(d) {
                o = d
            },
            get _defaultValues() {
                return n
            },
            get _names() {
                return c
            },
            set _names(d) {
                c = d
            },
            get _formState() {
                return r
            },
            get _options() {
                return t
            },
            set _options(d) {
                t = {
                    ...t,
                    ...d
                }
            }
        },
        subscribe: Rs,
        trigger: Ee,
        register: kt,
        handleSubmit: Qt,
        watch: vt,
        setValue: pe,
        getValues: de,
        reset: Jt,
        resetField: Ms,
        clearErrors: He,
        unregister: wt,
        setError: Ae,
        setFocus: Vs,
        getFieldState: ve
    };
    return {
        ...Xt,
        formControl: Xt
    }
}
function ul(e={}) {
    const t = Z.useRef(void 0)
      , r = Z.useRef(void 0)
      , [s,n] = Z.useState({
        isDirty: !1,
        isValidating: !1,
        isLoading: be(e.defaultValues),
        isSubmitted: !1,
        isSubmitting: !1,
        isSubmitSuccessful: !1,
        isValid: !1,
        submitCount: 0,
        dirtyFields: {},
        touchedFields: {},
        validatingFields: {},
        errors: e.errors || {},
        disabled: e.disabled || !1,
        isReady: !1,
        defaultValues: be(e.defaultValues) ? void 0 : e.defaultValues
    });
    t.current || (t.current = {
        ...e.formControl ? e.formControl : dl(e),
        formState: s
    },
    e.formControl && e.defaultValues && !be(e.defaultValues) && e.formControl.reset(e.defaultValues, e.resetOptions));
    const i = t.current.control;
    return i._options = e,
    Qo( () => {
        const o = i._subscribe({
            formState: i._proxyFormState,
            callback: () => n({
                ...i._formState
            }),
            reRenderRoot: !0
        });
        return n(c => ({
            ...c,
            isReady: !0
        })),
        i._formState.isReady = !0,
        o
    }
    , [i]),
    Z.useEffect( () => i._disableForm(e.disabled), [i, e.disabled]),
    Z.useEffect( () => {
        e.mode && (i._options.mode = e.mode),
        e.reValidateMode && (i._options.reValidateMode = e.reValidateMode),
        e.errors && !le(e.errors) && i._setErrors(e.errors)
    }
    , [i, e.errors, e.mode, e.reValidateMode]),
    Z.useEffect( () => {
        e.shouldUnregister && i._subjects.state.next({
            values: i._getWatch()
        })
    }
    , [i, e.shouldUnregister]),
    Z.useEffect( () => {
        if (i._proxyFormState.isDirty) {
            const o = i._getDirty();
            o !== s.isDirty && i._subjects.state.next({
                isDirty: o
            })
        }
    }
    , [i, s.isDirty]),
    Z.useEffect( () => {
        e.values && !Ce(e.values, r.current) ? (i._reset(e.values, i._options.resetOptions),
        r.current = e.values,
        n(o => ({
            ...o
        }))) : i._resetDefaultValues()
    }
    , [i, e.values]),
    Z.useEffect( () => {
        i._state.mount || (i._setValid(),
        i._state.mount = !0),
        i._state.watch && (i._state.watch = !1,
        i._subjects.state.next({
            ...i._formState
        })),
        i._removeUnmounted()
    }
    ),
    t.current.formState = Ko(s, i),
    t.current
}
const Br = (e, t, r) => {
    if (e && "reportValidity"in e) {
        const s = T(r, t);
        e.setCustomValidity(s && s.message || ""),
        e.reportValidity()
    }
}
  , Ds = (e, t) => {
    for (const r in t.fields) {
        const s = t.fields[r];
        s && s.ref && "reportValidity"in s.ref ? Br(s.ref, r, e) : s && s.refs && s.refs.forEach(n => Br(n, r, e))
    }
}
  , fl = (e, t) => {
    t.shouldUseNativeValidation && Ds(e, t);
    const r = {};
    for (const s in e) {
        const n = T(t.fields, s)
          , i = Object.assign(e[s] || {}, {
            ref: n && n.ref
        });
        if (hl(t.names || Object.keys(e), s)) {
            const o = Object.assign({}, T(r, s));
            q(o, "root", i),
            q(r, s, o)
        } else
            q(r, s, i)
    }
    return r
}
  , hl = (e, t) => {
    const r = qr(t);
    return e.some(s => qr(s).match(`^${r}\\.\\d+`))
}
;
function qr(e) {
    return e.replace(/\]|\[/g, "")
}
function ml(e, t, r) {
    return t === void 0 && (t = {}),
    r === void 0 && (r = {}),
    function(s, n, i) {
        try {
            return Promise.resolve(function(o, c) {
                try {
                    var u = (t.context,
                    Promise.resolve(e[r.mode === "sync" ? "validateSync" : "validate"](s, Object.assign({
                        abortEarly: !1
                    }, t, {
                        context: n
                    }))).then(function(p) {
                        return i.shouldUseNativeValidation && Ds({}, i),
                        {
                            values: r.raw ? Object.assign({}, s) : p,
                            errors: {}
                        }
                    }))
                } catch (p) {
                    return c(p)
                }
                return u && u.then ? u.then(void 0, c) : u
            }(0, function(o) {
                if (!o.inner)
                    throw o;
                return {
                    values: {},
                    errors: fl((c = o,
                    u = !i.shouldUseNativeValidation && i.criteriaMode === "all",
                    (c.inner || []).reduce(function(p, l) {
                        if (p[l.path] || (p[l.path] = {
                            message: l.message,
                            type: l.type
                        }),
                        u) {
                            var m = p[l.path].types
                              , x = m && m[l.type];
                            p[l.path] = Fs(l.path, u, p, l.type, x ? [].concat(x, l.message) : l.message)
                        }
                        return p
                    }, {})), i)
                };
                var c, u
            }))
        } catch (o) {
            return Promise.reject(o)
        }
    }
}
const pl = Ns().shape({
    content: ws().required("Please enter the message")
});
function xl() {
    const {newMessage: e, currentChat: t, activeChatId: r} = Ve()
      , {register: s, handleSubmit: n, formState: {isSubmitSuccessful: i}, setFocus: o, reset: c, watch: u} = ul({
        resolver: ml(pl),
        defaultValues: {
            content: ""
        }
    });
    f.useEffect( () => {
        i && c()
    }
    , [i, c]),
    f.useEffect( () => {
        c(),
        setTimeout( () => o("content"))
    }
    , [t == null ? void 0 : t.id, c, o]);
    const p = u("content")
      , l = m => {
        console.log("Submitting message:", {
            chatId: t == null ? void 0 : t.id,
            activeChatId: r,
            content: m.content
        });
        const x = (t == null ? void 0 : t.id) || null;
        (!m.content || m.content.trim() === "") && (console.warn("Empty message content - adding default value"),
        m.content = "Hello"),
        e(x, m)
    }
    ;
    return a.jsx("form", {
        onSubmit: n(l),
        autoComplete: "off",
        className: "mx-auto w-full max-w-4xl px-4 pb-4",
        children: a.jsxs("div", {
            className: "flex h-14 items-center justify-between rounded-full bg-gray-150 px-4 dark:bg-dark-700 lg:px-6",
            children: [a.jsx(Xs, {
                unstyled: !0,
                ...s("content"),
                classNames: {
                    root: "w-full",
                    input: "placeholder:text-gray-400 dark:placeholder:text-dark-300"
                },
                placeholder: "Ask me anything...",
                className: "placeholder:text-gray-400 dark:placeholder:text-dark-300"
            }), a.jsxs("div", {
                className: "flex",
                children: [a.jsx(W, {
                    variant: "flat",
                    isIcon: !0,
                    className: "size-9 rounded-full",
                    children: a.jsx(fi, {
                        className: "size-5"
                    })
                }), a.jsxs(ea, {
                    value: p === "" ? "off" : "on",
                    children: [a.jsx(ta, {
                        component: W,
                        variant: "flat",
                        type: "submit",
                        isIcon: !0,
                        className: "size-9 rounded-full",
                        children: a.jsx(li, {
                            className: "size-5 rtl:rotate-180"
                        })
                    }), a.jsx(ra, {
                        component: W,
                        variant: "flat",
                        isIcon: !0,
                        className: "size-9 rounded-full",
                        children: a.jsx(ii, {
                            className: "size-5"
                        })
                    })]
                })]
            })]
        })
    })
}
function kl() {
    return a.jsx(sa, {
        title: "Ai Chat",
        children: a.jsxs(xs, {
            children: [a.jsx(Hi, {}), a.jsxs("main", {
                className: "main-content transition-content flex h-screen min-w-0 flex-col supports-[height:1dvh]:h-dvh",
                children: [a.jsx(_i, {}), a.jsx(ao, {}), a.jsx(xl, {})]
            })]
        })
    })
}
export {kl as default};
