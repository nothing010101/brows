import {R as a, a as Xt, u as Wt, j as Kt, d as yt} from "./index-7qjuY_ZX.js";
function qt(r) {
    if (typeof document > "u")
        return;
    let s = document.head || document.getElementsByTagName("head")[0]
      , e = document.createElement("style");
    e.type = "text/css",
    s.appendChild(e),
    e.styleSheet ? e.styleSheet.cssText = r : e.appendChild(document.createTextNode(r))
}
const Gt = r => {
    switch (r) {
    case "success":
        return Zt;
    case "info":
        return ee;
    case "warning":
        return te;
    case "error":
        return ae;
    default:
        return null
    }
}
  , Qt = Array(12).fill(0)
  , Jt = ({visible: r, className: s}) => a.createElement("div", {
    className: ["sonner-loading-wrapper", s].filter(Boolean).join(" "),
    "data-visible": r
}, a.createElement("div", {
    className: "sonner-spinner"
}, Qt.map( (e, o) => a.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${o}`
}))))
  , Zt = a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, a.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , te = a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, a.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , ee = a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, a.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , ae = a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, a.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , se = a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, a.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), a.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , oe = () => {
    const [r,s] = a.useState(document.hidden);
    return a.useEffect( () => {
        const e = () => {
            s(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", e),
        () => window.removeEventListener("visibilitychange", e)
    }
    , []),
    r
}
;
let xt = 1;
class ne {
    constructor() {
        this.subscribe = s => (this.subscribers.push(s),
        () => {
            const e = this.subscribers.indexOf(s);
            this.subscribers.splice(e, 1)
        }
        ),
        this.publish = s => {
            this.subscribers.forEach(e => e(s))
        }
        ,
        this.addToast = s => {
            this.publish(s),
            this.toasts = [...this.toasts, s]
        }
        ,
        this.create = s => {
            var e;
            const {message: o, ...E} = s
              , d = typeof (s == null ? void 0 : s.id) == "number" || ((e = s.id) == null ? void 0 : e.length) > 0 ? s.id : xt++
              , g = this.toasts.find(b => b.id === d)
              , x = s.dismissible === void 0 ? !0 : s.dismissible;
            return this.dismissedToasts.has(d) && this.dismissedToasts.delete(d),
            g ? this.toasts = this.toasts.map(b => b.id === d ? (this.publish({
                ...b,
                ...s,
                id: d,
                title: o
            }),
            {
                ...b,
                ...s,
                id: d,
                dismissible: x,
                title: o
            }) : b) : this.addToast({
                title: o,
                ...E,
                dismissible: x,
                id: d
            }),
            d
        }
        ,
        this.dismiss = s => (s ? (this.dismissedToasts.add(s),
        requestAnimationFrame( () => this.subscribers.forEach(e => e({
            id: s,
            dismiss: !0
        })))) : this.toasts.forEach(e => {
            this.subscribers.forEach(o => o({
                id: e.id,
                dismiss: !0
            }))
        }
        ),
        s),
        this.message = (s, e) => this.create({
            ...e,
            message: s
        }),
        this.error = (s, e) => this.create({
            ...e,
            message: s,
            type: "error"
        }),
        this.success = (s, e) => this.create({
            ...e,
            type: "success",
            message: s
        }),
        this.info = (s, e) => this.create({
            ...e,
            type: "info",
            message: s
        }),
        this.warning = (s, e) => this.create({
            ...e,
            type: "warning",
            message: s
        }),
        this.loading = (s, e) => this.create({
            ...e,
            type: "loading",
            message: s
        }),
        this.promise = (s, e) => {
            if (!e)
                return;
            let o;
            e.loading !== void 0 && (o = this.create({
                ...e,
                promise: s,
                type: "loading",
                message: e.loading,
                description: typeof e.description != "function" ? e.description : void 0
            }));
            const E = Promise.resolve(s instanceof Function ? s() : s);
            let d = o !== void 0, g;
            const x = E.then(async i => {
                if (g = ["resolve", i],
                a.isValidElement(i))
                    d = !1,
                    this.create({
                        id: o,
                        type: "default",
                        message: i
                    });
                else if (ie(i) && !i.ok) {
                    d = !1;
                    const t = typeof e.error == "function" ? await e.error(`HTTP error! status: ${i.status}`) : e.error
                      , A = typeof e.description == "function" ? await e.description(`HTTP error! status: ${i.status}`) : e.description
                      , w = typeof t == "object" && !a.isValidElement(t) ? t : {
                        message: t
                    };
                    this.create({
                        id: o,
                        type: "error",
                        description: A,
                        ...w
                    })
                } else if (i instanceof Error) {
                    d = !1;
                    const t = typeof e.error == "function" ? await e.error(i) : e.error
                      , A = typeof e.description == "function" ? await e.description(i) : e.description
                      , w = typeof t == "object" && !a.isValidElement(t) ? t : {
                        message: t
                    };
                    this.create({
                        id: o,
                        type: "error",
                        description: A,
                        ...w
                    })
                } else if (e.success !== void 0) {
                    d = !1;
                    const t = typeof e.success == "function" ? await e.success(i) : e.success
                      , A = typeof e.description == "function" ? await e.description(i) : e.description
                      , w = typeof t == "object" && !a.isValidElement(t) ? t : {
                        message: t
                    };
                    this.create({
                        id: o,
                        type: "success",
                        description: A,
                        ...w
                    })
                }
            }
            ).catch(async i => {
                if (g = ["reject", i],
                e.error !== void 0) {
                    d = !1;
                    const T = typeof e.error == "function" ? await e.error(i) : e.error
                      , t = typeof e.description == "function" ? await e.description(i) : e.description
                      , z = typeof T == "object" && !a.isValidElement(T) ? T : {
                        message: T
                    };
                    this.create({
                        id: o,
                        type: "error",
                        description: t,
                        ...z
                    })
                }
            }
            ).finally( () => {
                d && (this.dismiss(o),
                o = void 0),
                e.finally == null || e.finally.call(e)
            }
            )
              , b = () => new Promise( (i, T) => x.then( () => g[0] === "reject" ? T(g[1]) : i(g[1])).catch(T));
            return typeof o != "string" && typeof o != "number" ? {
                unwrap: b
            } : Object.assign(o, {
                unwrap: b
            })
        }
        ,
        this.custom = (s, e) => {
            const o = (e == null ? void 0 : e.id) || xt++;
            return this.create({
                jsx: s(o),
                id: o,
                ...e
            }),
            o
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(s => !this.dismissedToasts.has(s.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
const S = new ne
  , re = (r, s) => {
    const e = (s == null ? void 0 : s.id) || xt++;
    return S.addToast({
        title: r,
        ...s,
        id: e
    }),
    e
}
  , ie = r => r && typeof r == "object" && "ok"in r && typeof r.ok == "boolean" && "status"in r && typeof r.status == "number"
  , le = re
  , de = () => S.toasts
  , ce = () => S.getActiveToasts();
Object.assign(le, {
    success: S.success,
    info: S.info,
    warning: S.warning,
    error: S.error,
    custom: S.custom,
    message: S.message,
    promise: S.promise,
    dismiss: S.dismiss,
    loading: S.loading
}, {
    getHistory: de,
    getToasts: ce
});
qt("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function ut(r) {
    return r.label !== void 0
}
const ue = 3
  , fe = "24px"
  , me = "16px"
  , Mt = 4e3
  , pe = 356
  , ge = 14
  , he = 45
  , be = 200;
function O(...r) {
    return r.filter(Boolean).join(" ")
}
function ve(r) {
    const [s,e] = r.split("-")
      , o = [];
    return s && o.push(s),
    e && o.push(e),
    o
}
const ye = r => {
    var s, e, o, E, d, g, x, b, i;
    const {invert: T, toast: t, unstyled: A, interacting: z, setHeights: w, visibleToasts: ft, heights: u, index: j, toasts: ot, expanded: Q, removeToast: nt, defaultRichColors: D, closeButton: U, style: mt, cancelButtonStyle: rt, actionButtonStyle: pt, className: it="", descriptionClassName: P="", duration: X, position: J, gap: gt, expandByDefault: H, classNames: l, icons: B, closeButtonAriaLabel: L="Close toast"} = r
      , [M,Z] = a.useState(null)
      , [c,m] = a.useState(null)
      , [f,_] = a.useState(!1)
      , [F,p] = a.useState(!1)
      , [tt,W] = a.useState(!1)
      , [et,at] = a.useState(!1)
      , [Ct,wt] = a.useState(!1)
      , [At,ht] = a.useState(0)
      , [Ht,Et] = a.useState(0)
      , st = a.useRef(t.duration || X || Mt)
      , Tt = a.useRef(null)
      , Y = a.useRef(null)
      , Ot = j === 0
      , zt = j + 1 <= ft
      , k = t.type
      , K = t.dismissible !== !1
      , jt = t.className || ""
      , Pt = t.descriptionClassName || ""
      , lt = a.useMemo( () => u.findIndex(n => n.toastId === t.id) || 0, [u, t.id])
      , Lt = a.useMemo( () => {
        var n;
        return (n = t.closeButton) != null ? n : U
    }
    , [t.closeButton, U])
      , St = a.useMemo( () => t.duration || X || Mt, [t.duration, X])
      , bt = a.useRef(0)
      , q = a.useRef(0)
      , kt = a.useRef(0)
      , G = a.useRef(null)
      , [Yt,$t] = J.split("-")
      , Nt = a.useMemo( () => u.reduce( (n, h, y) => y >= lt ? n : n + h.height, 0), [u, lt])
      , _t = oe()
      , Ft = t.invert || T
      , vt = k === "loading";
    q.current = a.useMemo( () => lt * gt + Nt, [lt, Nt]),
    a.useEffect( () => {
        st.current = St
    }
    , [St]),
    a.useEffect( () => {
        _(!0)
    }
    , []),
    a.useEffect( () => {
        const n = Y.current;
        if (n) {
            const h = n.getBoundingClientRect().height;
            return Et(h),
            w(y => [{
                toastId: t.id,
                height: h,
                position: t.position
            }, ...y]),
            () => w(y => y.filter(N => N.toastId !== t.id))
        }
    }
    , [w, t.id]),
    a.useLayoutEffect( () => {
        if (!f)
            return;
        const n = Y.current
          , h = n.style.height;
        n.style.height = "auto";
        const y = n.getBoundingClientRect().height;
        n.style.height = h,
        Et(y),
        w(N => N.find(v => v.toastId === t.id) ? N.map(v => v.toastId === t.id ? {
            ...v,
            height: y
        } : v) : [{
            toastId: t.id,
            height: y,
            position: t.position
        }, ...N])
    }
    , [f, t.title, t.description, w, t.id]);
    const $ = a.useCallback( () => {
        p(!0),
        ht(q.current),
        w(n => n.filter(h => h.toastId !== t.id)),
        setTimeout( () => {
            nt(t)
        }
        , be)
    }
    , [t, nt, w, q]);
    a.useEffect( () => {
        if (t.promise && k === "loading" || t.duration === 1 / 0 || t.type === "loading")
            return;
        let n;
        return Q || z || _t ? ( () => {
            if (kt.current < bt.current) {
                const N = new Date().getTime() - bt.current;
                st.current = st.current - N
            }
            kt.current = new Date().getTime()
        }
        )() : ( () => {
            st.current !== 1 / 0 && (bt.current = new Date().getTime(),
            n = setTimeout( () => {
                t.onAutoClose == null || t.onAutoClose.call(t, t),
                $()
            }
            , st.current))
        }
        )(),
        () => clearTimeout(n)
    }
    , [Q, z, t, k, _t, $]),
    a.useEffect( () => {
        t.delete && $()
    }
    , [$, t.delete]);
    function Vt() {
        var n;
        if (B != null && B.loading) {
            var h;
            return a.createElement("div", {
                className: O(l == null ? void 0 : l.loader, t == null || (h = t.classNames) == null ? void 0 : h.loader, "sonner-loader"),
                "data-visible": k === "loading"
            }, B.loading)
        }
        return a.createElement(Jt, {
            className: O(l == null ? void 0 : l.loader, t == null || (n = t.classNames) == null ? void 0 : n.loader),
            visible: k === "loading"
        })
    }
    const Ut = t.icon || (B == null ? void 0 : B[k]) || Gt(k);
    var Rt, Dt;
    return a.createElement("li", {
        tabIndex: 0,
        ref: Y,
        className: O(it, jt, l == null ? void 0 : l.toast, t == null || (s = t.classNames) == null ? void 0 : s.toast, l == null ? void 0 : l.default, l == null ? void 0 : l[k], t == null || (e = t.classNames) == null ? void 0 : e[k]),
        "data-sonner-toast": "",
        "data-rich-colors": (Rt = t.richColors) != null ? Rt : D,
        "data-styled": !(t.jsx || t.unstyled || A),
        "data-mounted": f,
        "data-promise": !!t.promise,
        "data-swiped": Ct,
        "data-removed": F,
        "data-visible": zt,
        "data-y-position": Yt,
        "data-x-position": $t,
        "data-index": j,
        "data-front": Ot,
        "data-swiping": tt,
        "data-dismissible": K,
        "data-type": k,
        "data-invert": Ft,
        "data-swipe-out": et,
        "data-swipe-direction": c,
        "data-expanded": !!(Q || H && f),
        style: {
            "--index": j,
            "--toasts-before": j,
            "--z-index": ot.length - j,
            "--offset": `${F ? At : q.current}px`,
            "--initial-height": H ? "auto" : `${Ht}px`,
            ...mt,
            ...t.style
        },
        onDragEnd: () => {
            W(!1),
            Z(null),
            G.current = null
        }
        ,
        onPointerDown: n => {
            vt || !K || (Tt.current = new Date,
            ht(q.current),
            n.target.setPointerCapture(n.pointerId),
            n.target.tagName !== "BUTTON" && (W(!0),
            G.current = {
                x: n.clientX,
                y: n.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var n, h, y;
            if (et || !K)
                return;
            G.current = null;
            const N = Number(((n = Y.current) == null ? void 0 : n.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , dt = Number(((h = Y.current) == null ? void 0 : h.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , v = new Date().getTime() - ((y = Tt.current) == null ? void 0 : y.getTime())
              , R = M === "x" ? N : dt
              , ct = Math.abs(R) / v;
            if (Math.abs(R) >= he || ct > .11) {
                ht(q.current),
                t.onDismiss == null || t.onDismiss.call(t, t),
                m(M === "x" ? N > 0 ? "right" : "left" : dt > 0 ? "down" : "up"),
                $(),
                at(!0);
                return
            } else {
                var I, C;
                (I = Y.current) == null || I.style.setProperty("--swipe-amount-x", "0px"),
                (C = Y.current) == null || C.style.setProperty("--swipe-amount-y", "0px")
            }
            wt(!1),
            W(!1),
            Z(null)
        }
        ,
        onPointerMove: n => {
            var h, y, N;
            if (!G.current || !K || ((h = window.getSelection()) == null ? void 0 : h.toString().length) > 0)
                return;
            const v = n.clientY - G.current.y
              , R = n.clientX - G.current.x;
            var ct;
            const I = (ct = r.swipeDirections) != null ? ct : ve(J);
            !M && (Math.abs(R) > 1 || Math.abs(v) > 1) && Z(Math.abs(R) > Math.abs(v) ? "x" : "y");
            let C = {
                x: 0,
                y: 0
            };
            const Bt = V => 1 / (1.5 + Math.abs(V) / 20);
            if (M === "y") {
                if (I.includes("top") || I.includes("bottom"))
                    if (I.includes("top") && v < 0 || I.includes("bottom") && v > 0)
                        C.y = v;
                    else {
                        const V = v * Bt(v);
                        C.y = Math.abs(V) < Math.abs(v) ? V : v
                    }
            } else if (M === "x" && (I.includes("left") || I.includes("right")))
                if (I.includes("left") && R < 0 || I.includes("right") && R > 0)
                    C.x = R;
                else {
                    const V = R * Bt(R);
                    C.x = Math.abs(V) < Math.abs(R) ? V : R
                }
            (Math.abs(C.x) > 0 || Math.abs(C.y) > 0) && wt(!0),
            (y = Y.current) == null || y.style.setProperty("--swipe-amount-x", `${C.x}px`),
            (N = Y.current) == null || N.style.setProperty("--swipe-amount-y", `${C.y}px`)
        }
    }, Lt && !t.jsx && k !== "loading" ? a.createElement("button", {
        "aria-label": L,
        "data-disabled": vt,
        "data-close-button": !0,
        onClick: vt || !K ? () => {}
        : () => {
            $(),
            t.onDismiss == null || t.onDismiss.call(t, t)
        }
        ,
        className: O(l == null ? void 0 : l.closeButton, t == null || (o = t.classNames) == null ? void 0 : o.closeButton)
    }, (Dt = B == null ? void 0 : B.close) != null ? Dt : se) : null, (k || t.icon || t.promise) && t.icon !== null && ((B == null ? void 0 : B[k]) !== null || t.icon) ? a.createElement("div", {
        "data-icon": "",
        className: O(l == null ? void 0 : l.icon, t == null || (E = t.classNames) == null ? void 0 : E.icon)
    }, t.promise || t.type === "loading" && !t.icon ? t.icon || Vt() : null, t.type !== "loading" ? Ut : null) : null, a.createElement("div", {
        "data-content": "",
        className: O(l == null ? void 0 : l.content, t == null || (d = t.classNames) == null ? void 0 : d.content)
    }, a.createElement("div", {
        "data-title": "",
        className: O(l == null ? void 0 : l.title, t == null || (g = t.classNames) == null ? void 0 : g.title)
    }, t.jsx ? t.jsx : typeof t.title == "function" ? t.title() : t.title), t.description ? a.createElement("div", {
        "data-description": "",
        className: O(P, Pt, l == null ? void 0 : l.description, t == null || (x = t.classNames) == null ? void 0 : x.description)
    }, typeof t.description == "function" ? t.description() : t.description) : null), a.isValidElement(t.cancel) ? t.cancel : t.cancel && ut(t.cancel) ? a.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: t.cancelButtonStyle || rt,
        onClick: n => {
            ut(t.cancel) && K && (t.cancel.onClick == null || t.cancel.onClick.call(t.cancel, n),
            $())
        }
        ,
        className: O(l == null ? void 0 : l.cancelButton, t == null || (b = t.classNames) == null ? void 0 : b.cancelButton)
    }, t.cancel.label) : null, a.isValidElement(t.action) ? t.action : t.action && ut(t.action) ? a.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: t.actionButtonStyle || pt,
        onClick: n => {
            ut(t.action) && (t.action.onClick == null || t.action.onClick.call(t.action, n),
            !n.defaultPrevented && $())
        }
        ,
        className: O(l == null ? void 0 : l.actionButton, t == null || (i = t.classNames) == null ? void 0 : i.actionButton)
    }, t.action.label) : null)
}
;
function It() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    const r = document.documentElement.getAttribute("dir");
    return r === "auto" || !r ? window.getComputedStyle(document.documentElement).direction : r
}
function xe(r, s) {
    const e = {};
    return [r, s].forEach( (o, E) => {
        const d = E === 1
          , g = d ? "--mobile-offset" : "--offset"
          , x = d ? me : fe;
        function b(i) {
            ["top", "right", "bottom", "left"].forEach(T => {
                e[`${g}-${T}`] = typeof i == "number" ? `${i}px` : i
            }
            )
        }
        typeof o == "number" || typeof o == "string" ? b(o) : typeof o == "object" ? ["top", "right", "bottom", "left"].forEach(i => {
            o[i] === void 0 ? e[`${g}-${i}`] = x : e[`${g}-${i}`] = typeof o[i] == "number" ? `${o[i]}px` : o[i]
        }
        ) : b(x)
    }
    ),
    e
}
const we = a.forwardRef(function(s, e) {
    const {invert: o, position: E="bottom-right", hotkey: d=["altKey", "KeyT"], expand: g, closeButton: x, className: b, offset: i, mobileOffset: T, theme: t="light", richColors: A, duration: z, style: w, visibleToasts: ft=ue, toastOptions: u, dir: j=It(), gap: ot=ge, icons: Q, containerAriaLabel: nt="Notifications"} = s
      , [D,U] = a.useState([])
      , mt = a.useMemo( () => Array.from(new Set([E].concat(D.filter(c => c.position).map(c => c.position)))), [D, E])
      , [rt,pt] = a.useState([])
      , [it,P] = a.useState(!1)
      , [X,J] = a.useState(!1)
      , [gt,H] = a.useState(t !== "system" ? t : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , l = a.useRef(null)
      , B = d.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , L = a.useRef(null)
      , M = a.useRef(!1)
      , Z = a.useCallback(c => {
        U(m => {
            var f;
            return (f = m.find(_ => _.id === c.id)) != null && f.delete || S.dismiss(c.id),
            m.filter( ({id: _}) => _ !== c.id)
        }
        )
    }
    , []);
    return a.useEffect( () => S.subscribe(c => {
        if (c.dismiss) {
            requestAnimationFrame( () => {
                U(m => m.map(f => f.id === c.id ? {
                    ...f,
                    delete: !0
                } : f))
            }
            );
            return
        }
        setTimeout( () => {
            Xt.flushSync( () => {
                U(m => {
                    const f = m.findIndex(_ => _.id === c.id);
                    return f !== -1 ? [...m.slice(0, f), {
                        ...m[f],
                        ...c
                    }, ...m.slice(f + 1)] : [c, ...m]
                }
                )
            }
            )
        }
        )
    }
    ), [D]),
    a.useEffect( () => {
        if (t !== "system") {
            H(t);
            return
        }
        if (t === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? H("dark") : H("light")),
        typeof window > "u")
            return;
        const c = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            c.addEventListener("change", ({matches: m}) => {
                H(m ? "dark" : "light")
            }
            )
        } catch {
            c.addListener( ({matches: f}) => {
                try {
                    H(f ? "dark" : "light")
                } catch (_) {
                    console.error(_)
                }
            }
            )
        }
    }
    , [t]),
    a.useEffect( () => {
        D.length <= 1 && P(!1)
    }
    , [D]),
    a.useEffect( () => {
        const c = m => {
            var f;
            if (d.every(p => m[p] || m.code === p)) {
                var F;
                P(!0),
                (F = l.current) == null || F.focus()
            }
            m.code === "Escape" && (document.activeElement === l.current || (f = l.current) != null && f.contains(document.activeElement)) && P(!1)
        }
        ;
        return document.addEventListener("keydown", c),
        () => document.removeEventListener("keydown", c)
    }
    , [d]),
    a.useEffect( () => {
        if (l.current)
            return () => {
                L.current && (L.current.focus({
                    preventScroll: !0
                }),
                L.current = null,
                M.current = !1)
            }
    }
    , [l.current]),
    a.createElement("section", {
        ref: e,
        "aria-label": `${nt} ${B}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, mt.map( (c, m) => {
        var f;
        const [_,F] = c.split("-");
        return D.length ? a.createElement("ol", {
            key: c,
            dir: j === "auto" ? It() : j,
            tabIndex: -1,
            ref: l,
            className: b,
            "data-sonner-toaster": !0,
            "data-sonner-theme": gt,
            "data-y-position": _,
            "data-lifted": it && D.length > 1 && !g,
            "data-x-position": F,
            style: {
                "--front-toast-height": `${((f = rt[0]) == null ? void 0 : f.height) || 0}px`,
                "--width": `${pe}px`,
                "--gap": `${ot}px`,
                ...w,
                ...xe(i, T)
            },
            onBlur: p => {
                M.current && !p.currentTarget.contains(p.relatedTarget) && (M.current = !1,
                L.current && (L.current.focus({
                    preventScroll: !0
                }),
                L.current = null))
            }
            ,
            onFocus: p => {
                p.target instanceof HTMLElement && p.target.dataset.dismissible === "false" || M.current || (M.current = !0,
                L.current = p.relatedTarget)
            }
            ,
            onMouseEnter: () => P(!0),
            onMouseMove: () => P(!0),
            onMouseLeave: () => {
                X || P(!1)
            }
            ,
            onDragEnd: () => P(!1),
            onPointerDown: p => {
                p.target instanceof HTMLElement && p.target.dataset.dismissible === "false" || J(!0)
            }
            ,
            onPointerUp: () => J(!1)
        }, D.filter(p => !p.position && m === 0 || p.position === c).map( (p, tt) => {
            var W, et;
            return a.createElement(ye, {
                key: p.id,
                icons: Q,
                index: tt,
                toast: p,
                defaultRichColors: A,
                duration: (W = u == null ? void 0 : u.duration) != null ? W : z,
                className: u == null ? void 0 : u.className,
                descriptionClassName: u == null ? void 0 : u.descriptionClassName,
                invert: o,
                visibleToasts: ft,
                closeButton: (et = u == null ? void 0 : u.closeButton) != null ? et : x,
                interacting: X,
                position: c,
                style: u == null ? void 0 : u.style,
                unstyled: u == null ? void 0 : u.unstyled,
                classNames: u == null ? void 0 : u.classNames,
                cancelButtonStyle: u == null ? void 0 : u.cancelButtonStyle,
                actionButtonStyle: u == null ? void 0 : u.actionButtonStyle,
                closeButtonAriaLabel: u == null ? void 0 : u.closeButtonAriaLabel,
                removeToast: Z,
                toasts: D.filter(at => at.position == p.position),
                heights: rt.filter(at => at.position == p.position),
                setHeights: pt,
                expandByDefault: g,
                gap: ot,
                expanded: it,
                swipeDirections: s.swipeDirections
            })
        }
        )) : null
    }
    ))
});
function Se() {
    var e, o, E, d, g, x;
    const {isDark: r, notification: s} = Wt();
    return Kt.jsx(we, {
        theme: r ? "dark" : "light",
        offset: "16px",
        position: (s == null ? void 0 : s.position) || ((o = (e = yt) == null ? void 0 : e.notification) == null ? void 0 : o.position),
        expand: (s == null ? void 0 : s.isExpanded) || ((d = (E = yt) == null ? void 0 : E.notification) == null ? void 0 : d.isExpanded),
        visibleToasts: (s == null ? void 0 : s.visibleToasts) || ((x = (g = yt) == null ? void 0 : g.notification) == null ? void 0 : x.visibleToasts),
        richColors: !0
    })
}
export {Se as default};
