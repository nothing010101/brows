function rt() {
    return typeof window < "u"
}
function J(t) {
    return Rt(t) ? (t.nodeName || "").toLowerCase() : "#document"
}
function R(t) {
    var e;
    return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window
}
function B(t) {
    var e;
    return (e = (Rt(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement
}
function Rt(t) {
    return rt() ? t instanceof Node || t instanceof R(t).Node : !1
}
function E(t) {
    return rt() ? t instanceof Element || t instanceof R(t).Element : !1
}
function W(t) {
    return rt() ? t instanceof HTMLElement || t instanceof R(t).HTMLElement : !1
}
function vt(t) {
    return !rt() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof R(t).ShadowRoot
}
function et(t) {
    const {overflow: e, overflowX: o, overflowY: n, display: i} = D(t);
    return /auto|scroll|overlay|hidden|clip/.test(e + n + o) && !["inline", "contents"].includes(i)
}
function Wt(t) {
    return ["table", "td", "th"].includes(J(t))
}
function ct(t) {
    return [":popover-open", ":modal"].some(e => {
        try {
            return t.matches(e)
        } catch {
            return !1
        }
    }
    )
}
function ht(t) {
    const e = gt()
      , o = E(t) ? D(t) : t;
    return ["transform", "translate", "scale", "rotate", "perspective"].some(n => o[n] ? o[n] !== "none" : !1) || (o.containerType ? o.containerType !== "normal" : !1) || !e && (o.backdropFilter ? o.backdropFilter !== "none" : !1) || !e && (o.filter ? o.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(n => (o.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some(n => (o.contain || "").includes(n))
}
function Bt(t) {
    let e = j(t);
    for (; W(e) && !G(e); ) {
        if (ht(e))
            return e;
        if (ct(e))
            return null;
        e = j(e)
    }
    return null
}
function gt() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function G(t) {
    return ["html", "body", "#document"].includes(J(t))
}
function D(t) {
    return R(t).getComputedStyle(t)
}
function lt(t) {
    return E(t) ? {
        scrollLeft: t.scrollLeft,
        scrollTop: t.scrollTop
    } : {
        scrollLeft: t.scrollX,
        scrollTop: t.scrollY
    }
}
function j(t) {
    if (J(t) === "html")
        return t;
    const e = t.assignedSlot || t.parentNode || vt(t) && t.host || B(t);
    return vt(e) ? e.host : e
}
function Ct(t) {
    const e = j(t);
    return G(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : W(e) && et(e) ? e : Ct(e)
}
function tt(t, e, o) {
    var n;
    e === void 0 && (e = []),
    o === void 0 && (o = !0);
    const i = Ct(t)
      , r = i === ((n = t.ownerDocument) == null ? void 0 : n.body)
      , s = R(i);
    if (r) {
        const c = ut(s);
        return e.concat(s, s.visualViewport || [], et(i) ? i : [], c && o ? tt(c) : [])
    }
    return e.concat(i, tt(i, [], o))
}
function ut(t) {
    return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
}
const Y = Math.min
  , O = Math.max
  , ot = Math.round
  , nt = Math.floor
  , M = t => ({
    x: t,
    y: t
})
  , Nt = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , Vt = {
    start: "end",
    end: "start"
};
function dt(t, e, o) {
    return O(t, Y(e, o))
}
function Q(t, e) {
    return typeof t == "function" ? t(e) : t
}
function q(t) {
    return t.split("-")[0]
}
function Z(t) {
    return t.split("-")[1]
}
function Tt(t) {
    return t === "x" ? "y" : "x"
}
function pt(t) {
    return t === "y" ? "height" : "width"
}
function I(t) {
    return ["top", "bottom"].includes(q(t)) ? "y" : "x"
}
function wt(t) {
    return Tt(I(t))
}
function Ht(t, e, o) {
    o === void 0 && (o = !1);
    const n = Z(t)
      , i = wt(t)
      , r = pt(i);
    let s = i === "x" ? n === (o ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
    return e.reference[r] > e.floating[r] && (s = it(s)),
    [s, it(s)]
}
function $t(t) {
    const e = it(t);
    return [mt(t), e, mt(e)]
}
function mt(t) {
    return t.replace(/start|end/g, e => Vt[e])
}
function zt(t, e, o) {
    const n = ["left", "right"]
      , i = ["right", "left"]
      , r = ["top", "bottom"]
      , s = ["bottom", "top"];
    switch (t) {
    case "top":
    case "bottom":
        return o ? e ? i : n : e ? n : i;
    case "left":
    case "right":
        return e ? r : s;
    default:
        return []
    }
}
function _t(t, e, o, n) {
    const i = Z(t);
    let r = zt(q(t), o === "start", n);
    return i && (r = r.map(s => s + "-" + i),
    e && (r = r.concat(r.map(mt)))),
    r
}
function it(t) {
    return t.replace(/left|right|bottom|top/g, e => Nt[e])
}
function It(t) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...t
    }
}
function Lt(t) {
    return typeof t != "number" ? It(t) : {
        top: t,
        right: t,
        bottom: t,
        left: t
    }
}
function st(t) {
    const {x: e, y: o, width: n, height: i} = t;
    return {
        width: n,
        height: i,
        top: o,
        left: e,
        right: e + n,
        bottom: o + i,
        x: e,
        y: o
    }
}
function bt(t, e, o) {
    let {reference: n, floating: i} = t;
    const r = I(e)
      , s = wt(e)
      , c = pt(s)
      , l = q(e)
      , f = r === "y"
      , u = n.x + n.width / 2 - i.width / 2
      , d = n.y + n.height / 2 - i.height / 2
      , h = n[c] / 2 - i[c] / 2;
    let a;
    switch (l) {
    case "top":
        a = {
            x: u,
            y: n.y - i.height
        };
        break;
    case "bottom":
        a = {
            x: u,
            y: n.y + n.height
        };
        break;
    case "right":
        a = {
            x: n.x + n.width,
            y: d
        };
        break;
    case "left":
        a = {
            x: n.x - i.width,
            y: d
        };
        break;
    default:
        a = {
            x: n.x,
            y: n.y
        }
    }
    switch (Z(e)) {
    case "start":
        a[s] -= h * (o && f ? -1 : 1);
        break;
    case "end":
        a[s] += h * (o && f ? -1 : 1);
        break
    }
    return a
}
const jt = async (t, e, o) => {
    const {placement: n="bottom", strategy: i="absolute", middleware: r=[], platform: s} = o
      , c = r.filter(Boolean)
      , l = await (s.isRTL == null ? void 0 : s.isRTL(e));
    let f = await s.getElementRects({
        reference: t,
        floating: e,
        strategy: i
    })
      , {x: u, y: d} = bt(f, n, l)
      , h = n
      , a = {}
      , m = 0;
    for (let g = 0; g < c.length; g++) {
        const {name: w, fn: p} = c[g]
          , {x, y, data: b, reset: v} = await p({
            x: u,
            y: d,
            initialPlacement: n,
            placement: h,
            strategy: i,
            middlewareData: a,
            rects: f,
            platform: s,
            elements: {
                reference: t,
                floating: e
            }
        });
        u = x ?? u,
        d = y ?? d,
        a = {
            ...a,
            [w]: {
                ...a[w],
                ...b
            }
        },
        v && m <= 50 && (m++,
        typeof v == "object" && (v.placement && (h = v.placement),
        v.rects && (f = v.rects === !0 ? await s.getElementRects({
            reference: t,
            floating: e,
            strategy: i
        }) : v.rects),
        {x: u, y: d} = bt(f, h, l)),
        g = -1)
    }
    return {
        x: u,
        y: d,
        placement: h,
        strategy: i,
        middlewareData: a
    }
}
;
async function ft(t, e) {
    var o;
    e === void 0 && (e = {});
    const {x: n, y: i, platform: r, rects: s, elements: c, strategy: l} = t
      , {boundary: f="clippingAncestors", rootBoundary: u="viewport", elementContext: d="floating", altBoundary: h=!1, padding: a=0} = Q(e, t)
      , m = Lt(a)
      , w = c[h ? d === "floating" ? "reference" : "floating" : d]
      , p = st(await r.getClippingRect({
        element: (o = await (r.isElement == null ? void 0 : r.isElement(w))) == null || o ? w : w.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(c.floating)),
        boundary: f,
        rootBoundary: u,
        strategy: l
    }))
      , x = d === "floating" ? {
        x: n,
        y: i,
        width: s.floating.width,
        height: s.floating.height
    } : s.reference
      , y = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(c.floating))
      , b = await (r.isElement == null ? void 0 : r.isElement(y)) ? await (r.getScale == null ? void 0 : r.getScale(y)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , v = st(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: c,
        rect: x,
        offsetParent: y,
        strategy: l
    }) : x);
    return {
        top: (p.top - v.top + m.top) / b.y,
        bottom: (v.bottom - p.bottom + m.bottom) / b.y,
        left: (p.left - v.left + m.left) / b.x,
        right: (v.right - p.right + m.right) / b.x
    }
}
const Yt = t => ({
    name: "arrow",
    options: t,
    async fn(e) {
        const {x: o, y: n, placement: i, rects: r, platform: s, elements: c, middlewareData: l} = e
          , {element: f, padding: u=0} = Q(t, e) || {};
        if (f == null)
            return {};
        const d = Lt(u)
          , h = {
            x: o,
            y: n
        }
          , a = wt(i)
          , m = pt(a)
          , g = await s.getDimensions(f)
          , w = a === "y"
          , p = w ? "top" : "left"
          , x = w ? "bottom" : "right"
          , y = w ? "clientHeight" : "clientWidth"
          , b = r.reference[m] + r.reference[a] - h[a] - r.floating[m]
          , v = h[a] - r.reference[a]
          , T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(f));
        let A = T ? T[y] : 0;
        (!A || !await (s.isElement == null ? void 0 : s.isElement(T))) && (A = c.floating[y] || r.floating[m]);
        const N = b / 2 - v / 2
          , S = A / 2 - g[m] / 2 - 1
          , C = Y(d[p], S)
          , H = Y(d[x], S)
          , P = C
          , $ = A - g[m] - H
          , F = A / 2 - g[m] / 2 + N
          , L = dt(P, F, $)
          , X = !l.arrow && Z(i) != null && F !== L && r.reference[m] / 2 - (F < P ? C : H) - g[m] / 2 < 0
          , V = X ? F < P ? F - P : F - $ : 0;
        return {
            [a]: h[a] + V,
            data: {
                [a]: L,
                centerOffset: F - L - V,
                ...X && {
                    alignmentOffset: V
                }
            },
            reset: X
        }
    }
})
  , qt = function(t) {
    return t === void 0 && (t = {}),
    {
        name: "flip",
        options: t,
        async fn(e) {
            var o, n;
            const {placement: i, middlewareData: r, rects: s, initialPlacement: c, platform: l, elements: f} = e
              , {mainAxis: u=!0, crossAxis: d=!0, fallbackPlacements: h, fallbackStrategy: a="bestFit", fallbackAxisSideDirection: m="none", flipAlignment: g=!0, ...w} = Q(t, e);
            if ((o = r.arrow) != null && o.alignmentOffset)
                return {};
            const p = q(i)
              , x = I(c)
              , y = q(c) === c
              , b = await (l.isRTL == null ? void 0 : l.isRTL(f.floating))
              , v = h || (y || !g ? [it(c)] : $t(c))
              , T = m !== "none";
            !h && T && v.push(..._t(c, g, m, b));
            const A = [c, ...v]
              , N = await ft(e, w)
              , S = [];
            let C = ((n = r.flip) == null ? void 0 : n.overflows) || [];
            if (u && S.push(N[p]),
            d) {
                const L = Ht(i, s, b);
                S.push(N[L[0]], N[L[1]])
            }
            if (C = [...C, {
                placement: i,
                overflows: S
            }],
            !S.every(L => L <= 0)) {
                var H, P;
                const L = (((H = r.flip) == null ? void 0 : H.index) || 0) + 1
                  , X = A[L];
                if (X) {
                    var $;
                    const z = d === "alignment" ? x !== I(X) : !1
                      , k = (($ = C[0]) == null ? void 0 : $.overflows[0]) > 0;
                    if (!z || k)
                        return {
                            data: {
                                index: L,
                                overflows: C
                            },
                            reset: {
                                placement: X
                            }
                        }
                }
                let V = (P = C.filter(z => z.overflows[0] <= 0).sort( (z, k) => z.overflows[1] - k.overflows[1])[0]) == null ? void 0 : P.placement;
                if (!V)
                    switch (a) {
                    case "bestFit":
                        {
                            var F;
                            const z = (F = C.filter(k => {
                                if (T) {
                                    const _ = I(k.placement);
                                    return _ === x || _ === "y"
                                }
                                return !0
                            }
                            ).map(k => [k.placement, k.overflows.filter(_ => _ > 0).reduce( (_, Mt) => _ + Mt, 0)]).sort( (k, _) => k[1] - _[1])[0]) == null ? void 0 : F[0];
                            z && (V = z);
                            break
                        }
                    case "initialPlacement":
                        V = c;
                        break
                    }
                if (i !== V)
                    return {
                        reset: {
                            placement: V
                        }
                    }
            }
            return {}
        }
    }
};
async function Xt(t, e) {
    const {placement: o, platform: n, elements: i} = t
      , r = await (n.isRTL == null ? void 0 : n.isRTL(i.floating))
      , s = q(o)
      , c = Z(o)
      , l = I(o) === "y"
      , f = ["left", "top"].includes(s) ? -1 : 1
      , u = r && l ? -1 : 1
      , d = Q(e, t);
    let {mainAxis: h, crossAxis: a, alignmentAxis: m} = typeof d == "number" ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis
    };
    return c && typeof m == "number" && (a = c === "end" ? m * -1 : m),
    l ? {
        x: a * u,
        y: h * f
    } : {
        x: h * f,
        y: a * u
    }
}
const Ut = function(t) {
    return t === void 0 && (t = 0),
    {
        name: "offset",
        options: t,
        async fn(e) {
            var o, n;
            const {x: i, y: r, placement: s, middlewareData: c} = e
              , l = await Xt(e, t);
            return s === ((o = c.offset) == null ? void 0 : o.placement) && (n = c.arrow) != null && n.alignmentOffset ? {} : {
                x: i + l.x,
                y: r + l.y,
                data: {
                    ...l,
                    placement: s
                }
            }
        }
    }
}
  , Kt = function(t) {
    return t === void 0 && (t = {}),
    {
        name: "shift",
        options: t,
        async fn(e) {
            const {x: o, y: n, placement: i} = e
              , {mainAxis: r=!0, crossAxis: s=!1, limiter: c={
                fn: w => {
                    let {x: p, y: x} = w;
                    return {
                        x: p,
                        y: x
                    }
                }
            }, ...l} = Q(t, e)
              , f = {
                x: o,
                y: n
            }
              , u = await ft(e, l)
              , d = I(q(i))
              , h = Tt(d);
            let a = f[h]
              , m = f[d];
            if (r) {
                const w = h === "y" ? "top" : "left"
                  , p = h === "y" ? "bottom" : "right"
                  , x = a + u[w]
                  , y = a - u[p];
                a = dt(x, a, y)
            }
            if (s) {
                const w = d === "y" ? "top" : "left"
                  , p = d === "y" ? "bottom" : "right"
                  , x = m + u[w]
                  , y = m - u[p];
                m = dt(x, m, y)
            }
            const g = c.fn({
                ...e,
                [h]: a,
                [d]: m
            });
            return {
                ...g,
                data: {
                    x: g.x - o,
                    y: g.y - n,
                    enabled: {
                        [h]: r,
                        [d]: s
                    }
                }
            }
        }
    }
}
  , Gt = function(t) {
    return t === void 0 && (t = {}),
    {
        name: "size",
        options: t,
        async fn(e) {
            var o, n;
            const {placement: i, rects: r, platform: s, elements: c} = e
              , {apply: l= () => {}
            , ...f} = Q(t, e)
              , u = await ft(e, f)
              , d = q(i)
              , h = Z(i)
              , a = I(i) === "y"
              , {width: m, height: g} = r.floating;
            let w, p;
            d === "top" || d === "bottom" ? (w = d,
            p = h === (await (s.isRTL == null ? void 0 : s.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (p = d,
            w = h === "end" ? "top" : "bottom");
            const x = g - u.top - u.bottom
              , y = m - u.left - u.right
              , b = Y(g - u[w], x)
              , v = Y(m - u[p], y)
              , T = !e.middlewareData.shift;
            let A = b
              , N = v;
            if ((o = e.middlewareData.shift) != null && o.enabled.x && (N = y),
            (n = e.middlewareData.shift) != null && n.enabled.y && (A = x),
            T && !h) {
                const C = O(u.left, 0)
                  , H = O(u.right, 0)
                  , P = O(u.top, 0)
                  , $ = O(u.bottom, 0);
                a ? N = m - 2 * (C !== 0 || H !== 0 ? C + H : O(u.left, u.right)) : A = g - 2 * (P !== 0 || $ !== 0 ? P + $ : O(u.top, u.bottom))
            }
            await l({
                ...e,
                availableWidth: N,
                availableHeight: A
            });
            const S = await s.getDimensions(c.floating);
            return m !== S.width || g !== S.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Et(t) {
    const e = D(t);
    let o = parseFloat(e.width) || 0
      , n = parseFloat(e.height) || 0;
    const i = W(t)
      , r = i ? t.offsetWidth : o
      , s = i ? t.offsetHeight : n
      , c = ot(o) !== r || ot(n) !== s;
    return c && (o = r,
    n = s),
    {
        width: o,
        height: n,
        $: c
    }
}
function xt(t) {
    return E(t) ? t : t.contextElement
}
function K(t) {
    const e = xt(t);
    if (!W(e))
        return M(1);
    const o = e.getBoundingClientRect()
      , {width: n, height: i, $: r} = Et(e);
    let s = (r ? ot(o.width) : o.width) / n
      , c = (r ? ot(o.height) : o.height) / i;
    return (!s || !Number.isFinite(s)) && (s = 1),
    (!c || !Number.isFinite(c)) && (c = 1),
    {
        x: s,
        y: c
    }
}
const Jt = M(0);
function Dt(t) {
    const e = R(t);
    return !gt() || !e.visualViewport ? Jt : {
        x: e.visualViewport.offsetLeft,
        y: e.visualViewport.offsetTop
    }
}
function Qt(t, e, o) {
    return e === void 0 && (e = !1),
    !o || e && o !== R(t) ? !1 : e
}
function U(t, e, o, n) {
    e === void 0 && (e = !1),
    o === void 0 && (o = !1);
    const i = t.getBoundingClientRect()
      , r = xt(t);
    let s = M(1);
    e && (n ? E(n) && (s = K(n)) : s = K(t));
    const c = Qt(r, o, n) ? Dt(r) : M(0);
    let l = (i.left + c.x) / s.x
      , f = (i.top + c.y) / s.y
      , u = i.width / s.x
      , d = i.height / s.y;
    if (r) {
        const h = R(r)
          , a = n && E(n) ? R(n) : n;
        let m = h
          , g = ut(m);
        for (; g && n && a !== m; ) {
            const w = K(g)
              , p = g.getBoundingClientRect()
              , x = D(g)
              , y = p.left + (g.clientLeft + parseFloat(x.paddingLeft)) * w.x
              , b = p.top + (g.clientTop + parseFloat(x.paddingTop)) * w.y;
            l *= w.x,
            f *= w.y,
            u *= w.x,
            d *= w.y,
            l += y,
            f += b,
            m = R(g),
            g = ut(m)
        }
    }
    return st({
        width: u,
        height: d,
        x: l,
        y: f
    })
}
function yt(t, e) {
    const o = lt(t).scrollLeft;
    return e ? e.left + o : U(B(t)).left + o
}
function St(t, e, o) {
    o === void 0 && (o = !1);
    const n = t.getBoundingClientRect()
      , i = n.left + e.scrollLeft - (o ? 0 : yt(t, n))
      , r = n.top + e.scrollTop;
    return {
        x: i,
        y: r
    }
}
function Zt(t) {
    let {elements: e, rect: o, offsetParent: n, strategy: i} = t;
    const r = i === "fixed"
      , s = B(n)
      , c = e ? ct(e.floating) : !1;
    if (n === s || c && r)
        return o;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , f = M(1);
    const u = M(0)
      , d = W(n);
    if ((d || !d && !r) && ((J(n) !== "body" || et(s)) && (l = lt(n)),
    W(n))) {
        const a = U(n);
        f = K(n),
        u.x = a.x + n.clientLeft,
        u.y = a.y + n.clientTop
    }
    const h = s && !d && !r ? St(s, l, !0) : M(0);
    return {
        width: o.width * f.x,
        height: o.height * f.y,
        x: o.x * f.x - l.scrollLeft * f.x + u.x + h.x,
        y: o.y * f.y - l.scrollTop * f.y + u.y + h.y
    }
}
function te(t) {
    return Array.from(t.getClientRects())
}
function ee(t) {
    const e = B(t)
      , o = lt(t)
      , n = t.ownerDocument.body
      , i = O(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth)
      , r = O(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
    let s = -o.scrollLeft + yt(t);
    const c = -o.scrollTop;
    return D(n).direction === "rtl" && (s += O(e.clientWidth, n.clientWidth) - i),
    {
        width: i,
        height: r,
        x: s,
        y: c
    }
}
function ne(t, e) {
    const o = R(t)
      , n = B(t)
      , i = o.visualViewport;
    let r = n.clientWidth
      , s = n.clientHeight
      , c = 0
      , l = 0;
    if (i) {
        r = i.width,
        s = i.height;
        const f = gt();
        (!f || f && e === "fixed") && (c = i.offsetLeft,
        l = i.offsetTop)
    }
    return {
        width: r,
        height: s,
        x: c,
        y: l
    }
}
function oe(t, e) {
    const o = U(t, !0, e === "fixed")
      , n = o.top + t.clientTop
      , i = o.left + t.clientLeft
      , r = W(t) ? K(t) : M(1)
      , s = t.clientWidth * r.x
      , c = t.clientHeight * r.y
      , l = i * r.x
      , f = n * r.y;
    return {
        width: s,
        height: c,
        x: l,
        y: f
    }
}
function At(t, e, o) {
    let n;
    if (e === "viewport")
        n = ne(t, o);
    else if (e === "document")
        n = ee(B(t));
    else if (E(e))
        n = oe(e, o);
    else {
        const i = Dt(t);
        n = {
            x: e.x - i.x,
            y: e.y - i.y,
            width: e.width,
            height: e.height
        }
    }
    return st(n)
}
function Pt(t, e) {
    const o = j(t);
    return o === e || !E(o) || G(o) ? !1 : D(o).position === "fixed" || Pt(o, e)
}
function ie(t, e) {
    const o = e.get(t);
    if (o)
        return o;
    let n = tt(t, [], !1).filter(c => E(c) && J(c) !== "body")
      , i = null;
    const r = D(t).position === "fixed";
    let s = r ? j(t) : t;
    for (; E(s) && !G(s); ) {
        const c = D(s)
          , l = ht(s);
        !l && c.position === "fixed" && (i = null),
        (r ? !l && !i : !l && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || et(s) && !l && Pt(t, s)) ? n = n.filter(u => u !== s) : i = c,
        s = j(s)
    }
    return e.set(t, n),
    n
}
function se(t) {
    let {element: e, boundary: o, rootBoundary: n, strategy: i} = t;
    const s = [...o === "clippingAncestors" ? ct(e) ? [] : ie(e, this._c) : [].concat(o), n]
      , c = s[0]
      , l = s.reduce( (f, u) => {
        const d = At(e, u, i);
        return f.top = O(d.top, f.top),
        f.right = Y(d.right, f.right),
        f.bottom = Y(d.bottom, f.bottom),
        f.left = O(d.left, f.left),
        f
    }
    , At(e, c, i));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function re(t) {
    const {width: e, height: o} = Et(t);
    return {
        width: e,
        height: o
    }
}
function ce(t, e, o) {
    const n = W(e)
      , i = B(e)
      , r = o === "fixed"
      , s = U(t, !0, r, e);
    let c = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = M(0);
    function f() {
        l.x = yt(i)
    }
    if (n || !n && !r)
        if ((J(e) !== "body" || et(i)) && (c = lt(e)),
        n) {
            const a = U(e, !0, r, e);
            l.x = a.x + e.clientLeft,
            l.y = a.y + e.clientTop
        } else
            i && f();
    r && !n && i && f();
    const u = i && !n && !r ? St(i, c) : M(0)
      , d = s.left + c.scrollLeft - l.x - u.x
      , h = s.top + c.scrollTop - l.y - u.y;
    return {
        x: d,
        y: h,
        width: s.width,
        height: s.height
    }
}
function at(t) {
    return D(t).position === "static"
}
function Ot(t, e) {
    if (!W(t) || D(t).position === "fixed")
        return null;
    if (e)
        return e(t);
    let o = t.offsetParent;
    return B(t) === o && (o = o.ownerDocument.body),
    o
}
function Ft(t, e) {
    const o = R(t);
    if (ct(t))
        return o;
    if (!W(t)) {
        let i = j(t);
        for (; i && !G(i); ) {
            if (E(i) && !at(i))
                return i;
            i = j(i)
        }
        return o
    }
    let n = Ot(t, e);
    for (; n && Wt(n) && at(n); )
        n = Ot(n, e);
    return n && G(n) && at(n) && !ht(n) ? o : n || Bt(t) || o
}
const le = async function(t) {
    const e = this.getOffsetParent || Ft
      , o = this.getDimensions
      , n = await o(t.floating);
    return {
        reference: ce(t.reference, await e(t.floating), t.strategy),
        floating: {
            x: 0,
            y: 0,
            width: n.width,
            height: n.height
        }
    }
};
function fe(t) {
    return D(t).direction === "rtl"
}
const ae = {
    convertOffsetParentRelativeRectToViewportRelativeRect: Zt,
    getDocumentElement: B,
    getClippingRect: se,
    getOffsetParent: Ft,
    getElementRects: le,
    getClientRects: te,
    getDimensions: re,
    getScale: K,
    isElement: E,
    isRTL: fe
};
function kt(t, e) {
    return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
}
function ue(t, e) {
    let o = null, n;
    const i = B(t);
    function r() {
        var c;
        clearTimeout(n),
        (c = o) == null || c.disconnect(),
        o = null
    }
    function s(c, l) {
        c === void 0 && (c = !1),
        l === void 0 && (l = 1),
        r();
        const f = t.getBoundingClientRect()
          , {left: u, top: d, width: h, height: a} = f;
        if (c || e(),
        !h || !a)
            return;
        const m = nt(d)
          , g = nt(i.clientWidth - (u + h))
          , w = nt(i.clientHeight - (d + a))
          , p = nt(u)
          , y = {
            rootMargin: -m + "px " + -g + "px " + -w + "px " + -p + "px",
            threshold: O(0, Y(1, l)) || 1
        };
        let b = !0;
        function v(T) {
            const A = T[0].intersectionRatio;
            if (A !== l) {
                if (!b)
                    return s();
                A ? s(!1, A) : n = setTimeout( () => {
                    s(!1, 1e-7)
                }
                , 1e3)
            }
            A === 1 && !kt(f, t.getBoundingClientRect()) && s(),
            b = !1
        }
        try {
            o = new IntersectionObserver(v,{
                ...y,
                root: i.ownerDocument
            })
        } catch {
            o = new IntersectionObserver(v,y)
        }
        o.observe(t)
    }
    return s(!0),
    r
}
function de(t, e, o, n) {
    n === void 0 && (n = {});
    const {ancestorScroll: i=!0, ancestorResize: r=!0, elementResize: s=typeof ResizeObserver == "function", layoutShift: c=typeof IntersectionObserver == "function", animationFrame: l=!1} = n
      , f = xt(t)
      , u = i || r ? [...f ? tt(f) : [], ...tt(e)] : [];
    u.forEach(p => {
        i && p.addEventListener("scroll", o, {
            passive: !0
        }),
        r && p.addEventListener("resize", o)
    }
    );
    const d = f && c ? ue(f, o) : null;
    let h = -1
      , a = null;
    s && (a = new ResizeObserver(p => {
        let[x] = p;
        x && x.target === f && a && (a.unobserve(e),
        cancelAnimationFrame(h),
        h = requestAnimationFrame( () => {
            var y;
            (y = a) == null || y.observe(e)
        }
        )),
        o()
    }
    ),
    f && !l && a.observe(f),
    a.observe(e));
    let m, g = l ? U(t) : null;
    l && w();
    function w() {
        const p = U(t);
        g && !kt(g, p) && o(),
        g = p,
        m = requestAnimationFrame(w)
    }
    return o(),
    () => {
        var p;
        u.forEach(x => {
            i && x.removeEventListener("scroll", o),
            r && x.removeEventListener("resize", o)
        }
        ),
        d == null || d(),
        (p = a) == null || p.disconnect(),
        a = null,
        l && cancelAnimationFrame(m)
    }
}
const me = ft
  , he = Ut
  , ge = Kt
  , pe = qt
  , we = Gt
  , xe = Yt
  , ye = (t, e, o) => {
    const n = new Map
      , i = {
        platform: ae,
        ...o
    }
      , r = {
        ...i.platform,
        _c: n
    };
    return jt(t, e, {
        ...i,
        platform: r
    })
}
;
export {de as a, xe as b, ye as c, we as d, Q as e, pe as f, me as g, Y as h, E as i, O as m, he as o, ot as r, ge as s};
