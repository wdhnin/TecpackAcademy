(function() {
    'use strict';
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var h = this || self;

    function k(a, b) {
        a = a.split(".");
        var c = h;
        a[0] in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    };

    function aa(a) {
        h.setTimeout(() => {
            throw a;
        }, 0)
    };
    var l, p;
    a: {
        for (var q = ["CLOSURE_FLAGS"], r = h, u = 0; u < q.length; u++)
            if (r = r[q[u]], r == null) {
                p = null;
                break a
            }
        p = r
    }
    var v = p && p[610401301];
    l = v != null ? v : !1;
    var y;
    const z = h.navigator;
    y = z ? z.userAgentData || null : null;

    function A(a) {
        return l ? y ? y.brands.some(({
            brand: b
        }) => b && b.indexOf(a) != -1) : !1 : !1
    }

    function B(a) {
        var b;
        a: {
            if (b = h.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return b.indexOf(a) != -1
    };

    function C() {
        return l ? !!y && y.brands.length > 0 : !1
    }

    function D() {
        return C() ? A("Chromium") : (B("Chrome") || B("CriOS")) && !(C() ? 0 : B("Edge")) || B("Silk")
    };
    !B("Android") || D();
    D();
    B("Safari") && (D() || (C() ? 0 : B("Coast")) || (C() ? 0 : B("Opera")) || (C() ? 0 : B("Edge")) || (C() ? A("Microsoft Edge") : B("Edg/")) || C() && A("Opera"));
    var E = Symbol(),
        F = Symbol();

    function ba(a, b) {
        b[E] = (a | 0) & -30975
    }

    function G(a, b) {
        b[E] = (a | 34) & -30941
    };
    var H = {},
        ca = {};

    function I(a) {
        return !(!a || typeof a !== "object" || a.g !== ca)
    }

    function J(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function K(a) {
        return !Array.isArray(a) || a.length ? !1 : (a[E] | 0) & 1 ? !0 : !1
    };
    var L = typeof h.BigInt === "function" && typeof h.BigInt(0) === "bigint";
    const da = Number.MIN_SAFE_INTEGER.toString(),
        ea = L ? BigInt(Number.MIN_SAFE_INTEGER) : void 0,
        fa = Number.MAX_SAFE_INTEGER.toString(),
        ha = L ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;

    function M(a, b) {
        if (a.length > b.length) return !1;
        if (a.length < b.length || a === b) return !0;
        for (let c = 0; c < a.length; c++) {
            const d = a[c],
                e = b[c];
            if (d > e) return !1;
            if (d < e) return !0
        }
    };

    function N(a, b) {
        var c, d, e;
        if (d = c = (d = O) == null ? void 0 : (e = d.get(b)) == null ? void 0 : e.get(a)) {
            a: if (a.length !== c.length) c = !1;
                else {
                    for (const f in c) {
                        e = Number(f);
                        if (d = Number.isInteger(e)) d = a[e], e = c[e], d = !(Number.isNaN(d) ? Number.isNaN(e) : d === e);
                        if (d) {
                            c = !1;
                            break a
                        }
                    }
                    c = !0
                }d = !c
        }
        if (d) {
            ia();
            let f, g;
            (f = O) == null || (g = f.get(b)) == null || g.delete(a)
        }
    }

    function P(a) {
        var b;
        if (a && (b = O) != null && b.has(a) && (b = a.m))
            for (let c = 0; c < b.length; c++) {
                const d = b[c];
                if (c === b.length - 1 && J(d))
                    for (const e in d) {
                        const f = d[e];
                        Array.isArray(f) && N(f, a)
                    } else Array.isArray(d) && N(d, a)
            }
    }

    function ia() {
        const a = Error();
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = "incident";
        aa(a)
    }
    let O = void 0;
    let Q;

    function R(a, b) {
        Q = b;
        a = new a(b);
        Q = void 0;
        return a
    };

    function ja(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "bigint":
                return (L ? a >= ea && a <= ha : a[0] === "-" ? M(a, da) : M(a, fa)) ? Number(a) : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (K(a)) return
                    } else if (a != null && a instanceof Uint8Array) {
                    let b = "",
                        c = 0;
                    const d = a.length - 10240;
                    for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                    b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                    return btoa(b)
                }
        }
        return a
    };

    function ka(a, b, c) {
        a = Array.prototype.slice.call(a);
        var d = a.length;
        const e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (const f in e) b[f] = c(e[f])
        }
        return a
    }

    function la(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = K(a) ? void 0 : e && (a[E] | 0) & 2 ? a : S(a, b, c, d !== void 0, e);
            else if (J(a)) {
                const f = {};
                for (let g in a) f[g] = la(a[g], b, c, d, e);
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function S(a, b, c, d, e) {
        const f = d || c ? a[E] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = Array.prototype.slice.call(a);
        for (let g = 0; g < a.length; g++) a[g] = la(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }

    function ma(a) {
        return a.o === H ? a.toJSON() : ja(a)
    };

    function na(a, b, c = G) {
        if (a != null) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[E] | 0;
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[E] = (d | 34) & -12293, a) : S(a, na, d & 4 ? G : c, !0, !0)
            }
            a.o === H && (c = a.m, d = c[E], d & 2 || (P(a), a = R(a.constructor, oa(c, d, !0))));
            return a
        }
    }

    function oa(a, b, c) {
        const d = c || b & 2 ? G : ba,
            e = !!(b & 32);
        a = ka(a, b, f => na(f, e, d));
        a[E] = a[E] | 32 | (c ? 2 : 0);
        return a
    };

    function T(a, b, c) {
        a = a.m;
        let d = a[E];
        if (d & 2) throw Error();
        if (c === -1) var e = null;
        else if (e = d >> 15 & 1023 || 536870912, c >= e) e = d & 256 ? a[a.length - 1][c] : void 0;
        else {
            var f = c + (+!!(d & 512) - 1);
            e = f < 0 || f >= a.length || f >= e ? void 0 : a[f]
        }
        if (e != null && typeof e === "object" && e.o === H) b = e;
        else if (Array.isArray(e)) {
            var g = f = e[E] | 0;
            g === 0 && (g |= d & 32);
            g |= d & 2;
            g !== f && (e[E] = g);
            b = new b(e)
        } else d & 2 ? (f = b[F]) ? b = f : (f = new b, g = f.m, g[E] |= 34, b = b[F] = f) : b = new b;
        f = b.m;
        g = f[E];
        g & 2 && (P(b), b = R(b.constructor, oa(f, g, !1)));
        if (e !== b) a: if (e = d >> 15 & 1023 || 536870912,
            c >= e) {
            g = d;
            if (d & 256) f = a[a.length - 1];
            else {
                if (b == null) break a;
                f = a[e + (+!!(d & 512) - 1)] = {};
                g |= 256
            }
            f[c] = b;
            c < e && (a[c + (+!!(d & 512) - 1)] = void 0);
            g !== d && (a[E] = g)
        } else a[c + (+!!(d & 512) - 1)] = b, d & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    };
    let U;
    var V = class {
        constructor(a) {
            a: {
                var b = b != null ? b : 0;a == null && (a = Q);Q = void 0;
                if (a == null) {
                    var c = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error("narr");
                    c = a[E] | 0;
                    if (c & 2048) throw Error("farr");
                    if (c & 64) break a;
                    b === 1 || b === 2 || (c |= 64);
                    b = a;
                    var d = b.length;
                    if (d && (--d, J(b[d]))) {
                        c |= 256;
                        b = d - (+!!(c & 512) - 1);
                        if (b >= 1024) throw Error("pvtlmt");
                        c = c & -33521665 | (b & 1023) << 15
                    }
                }
                a[E] = c
            }
            this.m = a
        }
        toJSON() {
            return pa(this)
        }
    };
    V.prototype.o = H;
    V.prototype.toString = function() {
        try {
            return U = !0, pa(this).toString()
        } finally {
            U = !1
        }
    };

    function pa(a) {
        P(a);
        a = U ? a.m : S(a.m, ma, void 0, void 0, !1); {
            var b = !U;
            let n = a.length;
            if (n) {
                var c = a[n - 1],
                    d = J(c);
                d ? n-- : c = void 0;
                var e = a;
                if (d) {
                    b: {
                        var f = c;
                        var g;
                        var m = !1;
                        if (f)
                            for (let t in f)
                                if (isNaN(+t)) {
                                    let w;
                                    ((w = g) != null ? w : g = {})[t] = f[t]
                                } else if (d = f[t], Array.isArray(d) && (K(d) || I(d) && d.size === 0) && (d = null), d == null && (m = !0), d != null) {
                            let w;
                            ((w = g) != null ? w : g = {})[t] = d
                        }
                        m || (g = f);
                        if (g)
                            for (let t in g) {
                                m = g;
                                break b
                            }
                        m = null
                    }
                    f = m == null ? c != null : m !== c
                }
                for (; n > 0; n--) {
                    g = e[n - 1];
                    if (!(g == null || K(g) || I(g) && g.size === 0)) break;
                    var x = !0
                }
                if (e !== a || f || x) {
                    if (!b) e = Array.prototype.slice.call(e, 0, n);
                    else if (x || f || m) e.length = n;
                    m && e.push(m)
                }
                x = e
            } else x = a
        }
        return x
    };

    function qa(a) {
        return b => {
            if (b == null || b == "") b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b[E] |= 32;
                b = R(a, b)
            }
            return b
        }
    };
    var ra = class extends V {};
    var sa = class extends V {};
    var ta = class extends V {};
    var ua = qa(class extends V {});

    function W(a, b) {
        a = a.getElementsByTagName("META");
        for (let c = 0; c < a.length; ++c)
            if (a[c].getAttribute("name") === b) return a[c].getAttribute("content") || "";
        return ""
    };

    function X(a, b) {
        a.body.dispatchEvent(new CustomEvent(b, {
            detail: void 0
        }))
    }
    var va = class {
        constructor(a) {
            this.body = a;
            this.g = [];
            W(a, "sampling_mod");
            var b = W(a, "namespace");
            if (!b) {
                b = "ns-" + (0, Math.random)().toString(36).substr(2, 5);
                a: {
                    var c = a.getElementsByTagName("META");
                    for (let d = 0; d < c.length; ++d)
                        if (c[d].getAttribute("name") === "namespace" && c[d].getAttribute("index") === (0).toString()) {
                            c[d].setAttribute("content", b);
                            break a
                        }
                    c = a.querySelector("#mys-meta");c || (c = document.createElement("div"), c.id = "mys-meta", c.style.position = "absolute", c.style.display = "none", a.appendChild(c));a = document.createElement("META");
                    a.setAttribute("name", "namespace");a.setAttribute("content", b);a.setAttribute("index", (0).toString());c.appendChild(a)
                }
            }
            if (!(this.g.length > 0)) {
                a = W(this.body, "environment");
                for (const d of a.split("|")) d && this.g.push(d)
            }
        }
    };
    var wa = qa(class extends V {});

    function xa(a) {
        if (a.i.offsetWidth <= 1 || a.i.offsetHeight <= 1) return !1;
        a.g.remove();
        X(a.l, "spanReady");
        return !0
    }
    var ya = class {
        constructor(a) {
            this.l = a;
            this.config = {
                B: !1,
                v: 100
            };
            this.i = document.createElement("span");
            this.g = document.createElement("div");
            this.i.style.fontSize = "6px";
            this.i.textContent = "go";
            this.g.style.position = "absolute";
            this.g.style.top = "100%";
            this.g.style.left = "100%";
            this.g.style.width = "1px";
            this.g.style.height = "0";
            this.g.style.overflow = "hidden";
            this.g.style.visibility = "hidden";
            this.g.appendChild(this.i)
        }
        wait() {
            if (!this.config.B && (X(this.l, "spanStart"), this.l.body.appendChild(this.g), !xa(this))) return new Promise(a => {
                const b = setInterval(() => {
                    xa(this) && (clearInterval(b), a())
                }, this.config.v)
            })
        }
    };
    var za = class {
        constructor(a) {
            this.config = a;
            this.g = T(a, sa, 1);
            T(a, ta, 12);
            T(this.g, ra, 10)
        }
    };

    function Aa(a) {
        a.l.length = 0;
        a.i = !0
    }

    function Ba(a, b) {
        a.g = !0;
        const c = () => {
            a.i = !1;
            const d = a.l.shift();
            return d === void 0 ? (a.g = !1, Promise.resolve()) : Ba(a, d())
        };
        return b ? b.then(c, () => {
            if (a.i) return c();
            a.g = !1;
            return Promise.reject()
        }) : c()
    }

    function Ca(a, b) {
        for (const c of b) a.l.push(c);
        if (!a.g) return Ba(a)
    }
    var Da = class {
        constructor() {
            this.i = this.g = !1;
            this.l = []
        }
    };

    function Ea(a) {
        Aa(a.s);
        return Ca(a.s, [() => {
            if (!a.u) {
                var b = W(a.i.body, "render_config") || "[]";
                b = wa(b);
                b = new za(b);
                a.u = b
            }
            b = (new ya(a.i)).wait();
            X(a.i, "browserStart");
            X(a.i, "browserStartEnd");
            a.g &= -31;
            a.g |= 2;
            return b
        }, () => {
            X(a.i, "browserReady");
            X(a.i, "browserReadyEnd");
            a.g |= 4;
            X(a.i, "overallReady")
        }, () => {
            X(a.i, "browserQuiet");
            X(a.i, "browserQuietEnd");
            a.g |= 8
        }])
    }

    function Fa(a) {
        ua(W(a.i.body, "engine_msg") || "[]");
        return Ea(a) || Promise.resolve()
    }
    var Y = class {
        constructor(a, b) {
            this.s = new Da;
            this.g = 0;
            this.i = new va(b)
        }
        A() {
            return this.g
        }
        l() {
            this.g &= -31;
            this.g |= 1;
            let a = 0;
            const b = this.i.body;
            b.addEventListener("browserRender", () => {
                ++a;
                if (a === 1) X(this.i, "overallStart"), Fa(this).then(() => {
                    X(this.i, "overallQuiet")
                });
                else {
                    var c = b.clientHeight;
                    b.clientWidth && c && Fa(this)
                }
            })
        }
    };
    let Z;
    k("mys.engine.init", (a, b) => {
        Z = new Y(a, b);
        Z.l()
    });
    k("mys.engine.stage", () => {
        let a;
        return ((a = Z) == null ? void 0 : a.g) || 0
    });
    k("mys.Engine", Y);
    k("mys.Engine.prototype.i", Y.prototype.l);
    k("mys.Engine.prototype.s", Y.prototype.A);
}).call(this);