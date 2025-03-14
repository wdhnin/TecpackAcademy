(function() {
    'use strict';
    var aa = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ba(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ca = ba(this);

    function da(a, b) {
        if (b) a: {
            var c = ca;a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e]
            }
            a = a[a.length - 1];d = c[a];b = b(d);b != d && b != null && aa(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    da("Symbol.dispose", function(a) {
        return a ? a : Symbol("Symbol.dispose")
    });
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var n = this || self;

    function ea(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function p(a, b, c) {
        p = ea;
        return p.apply(null, arguments)
    }

    function fa(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.N = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.O = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    };

    function ha(a) {
        n.setTimeout(() => {
            throw a;
        }, 0)
    };
    var ja, r;
    a: {
        for (var ka = ["CLOSURE_FLAGS"], t = n, la = 0; la < ka.length; la++)
            if (t = t[ka[la]], t == null) {
                r = null;
                break a
            }
        r = t
    }
    var ma = r && r[610401301];
    ja = ma != null ? ma : !1;
    var v;
    const ra = n.navigator;
    v = ra ? ra.userAgentData || null : null;

    function sa(a) {
        return ja ? v ? v.brands.some(({
            brand: b
        }) => b && b.indexOf(a) != -1) : !1 : !1
    }

    function x(a) {
        var b;
        a: {
            if (b = n.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return b.indexOf(a) != -1
    };

    function y() {
        return ja ? !!v && v.brands.length > 0 : !1
    }

    function ta() {
        return y() ? sa("Chromium") : (x("Chrome") || x("CriOS")) && !(y() ? 0 : x("Edge")) || x("Silk")
    };

    function A(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    };
    !x("Android") || ta();
    ta();
    x("Safari") && (ta() || (y() ? 0 : x("Coast")) || (y() ? 0 : x("Opera")) || (y() ? 0 : x("Edge")) || (y() ? sa("Microsoft Edge") : x("Edg/")) || y() && sa("Opera"));
    let ua;

    function B() {
        const a = Error();
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = "incident";
        ha(a)
    };
    var C = Symbol(),
        va = Symbol();

    function wa(a, b) {
        b[C] = (a | 0) & -30975
    }

    function xa(a, b) {
        b[C] = (a | 34) & -30941
    };
    var ya = {},
        za = {};

    function Aa(a) {
        return !(!a || typeof a !== "object" || a.g !== za)
    }

    function Ba(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function Ca(a) {
        return !Array.isArray(a) || a.length ? !1 : (a[C] | 0) & 1 ? !0 : !1
    }
    var Da;
    const Ea = [];
    Ea[C] = 55;
    Da = Object.freeze(Ea);
    var Fa = Object.freeze({});
    const Ga = BigInt(Number.MIN_SAFE_INTEGER),
        Ha = BigInt(Number.MAX_SAFE_INTEGER);

    function Ia(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
    }

    function La(a, b, c) {
        if (a != null && typeof a === "object" && a.G === ya) return a;
        if (Array.isArray(a)) {
            var d = a[C] | 0,
                e = d;
            e === 0 && (e |= c & 32);
            e |= c & 2;
            e !== d && (a[C] = e);
            return new b(a)
        }
    };

    function Ma(a) {
        D === void 0 && (D = typeof Proxy === "function" ? Na(Proxy) : null);
        if (!D || !Oa()) return a;
        let b = E ? .get(a);
        if (b) return b;
        if (Math.random() > .01) return a;
        Pa(a);
        b = new D(a, {
            set(c, d, e) {
                Qa();
                c[d] = e;
                return !0
            }
        });
        Ra(a, b);
        return b
    }

    function Qa() {
        B()
    }
    let E = void 0,
        Sa = void 0;

    function Ra(a, b) {
        (E || (E = new F)).set(a, b);
        (Sa || (Sa = new F)).set(b, a)
    }
    let D = void 0,
        F = void 0;

    function Oa() {
        F === void 0 && (F = typeof WeakMap === "function" ? Na(WeakMap) : null);
        return F
    }

    function Na(a) {
        try {
            return a.toString().indexOf("[native code]") !== -1 ? a : null
        } catch {
            return null
        }
    }
    let Ta = void 0;

    function Pa(a) {
        if (Ta === void 0) {
            const b = new D([], {});
            Ta = Array.prototype.concat.call([], b).length === 1
        }
        Ta && typeof Symbol === "function" && Symbol.isConcatSpreadable && (a[Symbol.isConcatSpreadable] = !0)
    }

    function Ua(a, b) {
        const c = G ? .get(b) ? .get(a);
        c && !Va(a, c) && (Wa(), G ? .get(b) ? .delete(a))
    }

    function Va(a, b) {
        if (a.length !== b.length) return !1;
        for (const e in b) {
            var c = Number(e),
                d;
            if (d = Number.isInteger(c)) d = a[c], c = b[c], d = !(Number.isNaN(d) ? Number.isNaN(c) : d === c);
            if (d) return !1
        }
        return !0
    }

    function Xa(a) {
        if (a && G ? .has(a)) {
            var b = a.l;
            if (b)
                for (let c = 0; c < b.length; c++) {
                    const d = b[c];
                    if (c === b.length - 1 && Ba(d))
                        for (const e in d) {
                            const f = d[e];
                            Array.isArray(f) && Ua(f, a)
                        } else Array.isArray(d) && Ua(d, a)
                }
        }
    }

    function Wa() {
        B()
    }
    let G = void 0;
    let Ya;

    function Za(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "bigint":
                return a >= Ga && a <= Ha ? Number(a) : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (Ca(a)) return
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

    function $a(a, b, c) {
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

    function ab(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = Ca(a) ? void 0 : e && (a[C] | 0) & 2 ? a : bb(a, b, c, d !== void 0, e);
            else if (Ba(a)) {
                const f = {};
                for (let g in a) f[g] = ab(a[g], b, c, d, e);
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function bb(a, b, c, d, e) {
        const f = d || c ? a[C] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = Array.prototype.slice.call(a);
        for (let g = 0; g < a.length; g++) a[g] = ab(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }

    function cb(a) {
        return a.G === ya ? a.toJSON() : Za(a)
    };

    function db(a, b, c = xa) {
        if (a != null) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[C] | 0;
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[C] = (d | 34) & -12293, a) : bb(a, db, d & 4 ? xa : c, !0, !0)
            }
            a.G === ya && (c = a.l, d = c[C], a = d & 2 ? a : eb(a, c, d, !0));
            return a
        }
    }

    function eb(a, b, c, d) {
        Xa(a);
        a = a.constructor;
        Ya = b = fb(b, c, d);
        b = new a(b);
        Ya = void 0;
        return b
    }

    function fb(a, b, c) {
        const d = c || b & 2 ? xa : wa,
            e = !!(b & 32);
        a = $a(a, b, f => db(f, e, d));
        a[C] = a[C] | 32 | (c ? 2 : 0);
        return a
    }

    function gb(a) {
        const b = a.l,
            c = b[C];
        return c & 2 ? eb(a, b, c, !1) : a
    };

    function hb(a, b) {
        a = a.l;
        return ib(a, a[C], b)
    }

    function jb(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }

    function ib(a, b, c, d) {
        if (c === -1) return null;
        const e = b >> 15 & 1023 || 536870912;
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            return d && b & 256 && (d = a[f - 1][c], d != null) ? (jb(a, b, e, c) && va != null && (a = ua ? ? (ua = {}), b = a[va] || 0, b >= 4 || (a[va] = b + 1, B())), d) : jb(a, b, e, c)
        }
    }

    function kb(a, b, c) {
        const d = b >> 15 & 1023 || 536870912;
        if (1 >= d) {
            let e, f = b;
            if (b & 256) e = a[a.length - 1];
            else {
                if (c == null) return f;
                e = a[d + (+!!(b & 512) - 1)] = {};
                f |= 256
            }
            e[1] = c;
            1 < d && (a[1 + (+!!(b & 512) - 1)] = void 0);
            f !== b && (a[C] = f);
            return f
        }
        a[1 + (+!!(b & 512) - 1)] = c;
        b & 256 && (a = a[a.length - 1], 1 in a && delete a[1]);
        return b
    }

    function H(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function lb(a) {
        var b = mb,
            c = a.l,
            d = c[C],
            e = ib(c, d, 1, !1);
        b = La(e, b, d);
        b !== e && b != null && kb(c, d, b);
        c = b;
        if (c == null) return c;
        a = a.l;
        d = a[C];
        d & 2 || (e = gb(c), e !== c && (c = e, kb(a, d, c)));
        return c
    }

    function nb(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    }

    function J(a, b) {
        a = hb(a, b);
        return (a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : void 0) ? ? !1
    }

    function L(a, b) {
        return Ia(hb(a, b)) ? ? 0
    }

    function M(a) {
        a = hb(a, 1);
        return (a == null || typeof a === "string" ? a : void 0) ? ? ""
    }

    function N(a, b) {
        a = hb(a, b);
        return (a == null ? a : Number.isFinite(a) ? a | 0 : void 0) ? ? 1
    };
    let ob;
    var O = class {
        constructor(a) {
            a: {
                var b = b ? ? 0;a == null && (a = Ya);Ya = void 0;
                if (a == null) {
                    var c = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error("narr");
                    c = a[C] | 0;
                    if (c & 2048) throw Error("farr");
                    if (c & 64) break a;
                    b === 1 || b === 2 || (c |= 64);
                    b = a;
                    var d = b.length;
                    if (d && (--d, Ba(b[d]))) {
                        c |= 256;
                        b = d - (+!!(c & 512) - 1);
                        if (b >= 1024) throw Error("pvtlmt");
                        c = c & -33521665 | (b & 1023) << 15
                    }
                }
                a[C] = c
            }
            this.l = a
        }
        toJSON() {
            return pb(this)
        }
    };
    O.prototype.G = ya;
    O.prototype.toString = function() {
        try {
            return ob = !0, pb(this).toString()
        } finally {
            ob = !1
        }
    };

    function pb(a) {
        Xa(a);
        a = ob ? a.l : bb(a.l, cb, void 0, void 0, !1); {
            var b = !ob;
            let l = a.length;
            if (l) {
                var c = a[l - 1],
                    d = Ba(c);
                d ? l-- : c = void 0;
                var e = a;
                if (d) {
                    b: {
                        var f = c;
                        var g;
                        var h = !1;
                        if (f)
                            for (let m in f) isNaN(+m) ? (g ? ? (g = {}))[m] = f[m] : (d = f[m], Array.isArray(d) && (Ca(d) || Aa(d) && d.size === 0) && (d = null), d == null && (h = !0), d != null && ((g ? ? (g = {}))[m] = d));h || (g = f);
                        if (g)
                            for (let m in g) {
                                h = g;
                                break b
                            }
                        h = null
                    }
                    f = h == null ? c != null : h !== c
                }
                for (; l > 0; l--) {
                    g = e[l - 1];
                    if (!(g == null || Ca(g) || Aa(g) && g.size === 0)) break;
                    var k = !0
                }
                if (e !== a || f || k) {
                    if (!b) e = Array.prototype.slice.call(e,
                        0, l);
                    else if (k || f || h) e.length = l;
                    h && e.push(h)
                }
                k = e
            } else k = a
        }
        return k
    };
    var qb = class extends O {};

    function rb(a) {
        var b;
        void 0 === Fa ? b = 2 : b = 5;
        var c = a.l[C],
            d = c,
            e = !(2 & c),
            f = a.l,
            g = !!(2 & d);
        c = g ? 1 : b;
        e && (e = !g);
        b = ib(f, d, 1);
        b = Array.isArray(b) ? b : Da;
        var h = b[C] | 0;
        g = b;
        Ua(g, a);
        c !== 2 && c !== 1 || G ? .get(a) ? .delete(g);
        g = !!(4 & h);
        if (!g) {
            var k = h;
            k === 0 && (k = nb(k, d));
            h = b;
            k |= 1;
            var l = d,
                m = !!(2 & k);
            m && (l |= 2);
            let w = !m,
                K = !0,
                u = 0,
                I = 0;
            for (; u < h.length; u++) {
                const z = La(h[u], qb, l);
                if (z instanceof qb) {
                    if (!m) {
                        const ia = !!((z.l[C] | 0) & 2);
                        w && (w = !ia);
                        K && (K = ia)
                    }
                    h[I++] = z
                }
            }
            I < u && (h.length = I);
            k |= 4;
            k = K ? k | 16 : k & -17;
            k = w ? k | 8 : k & -9;
            h[C] = k;
            m && Object.freeze(h);
            h = k
        }
        if (e && !(8 & h || !b.length && (c === 1 || c === 4 && 32 & h))) {
            H(h) ? (b = Array.prototype.slice.call(b), h = nb(h, d), d = kb(f, d, b)) : G ? .get(a) ? .delete(b);
            e = b;
            for (k = 0; k < e.length; k++) l = e[k], m = gb(l), l !== m && (e[k] = m);
            h |= 8;
            h = e.length ? h & -17 : h | 16;
            e[C] = h
        }
        let q;
        if (c === 1 || c === 4 && 32 & h) H(h) || (a = h, d = !!(32 & h), h |= !b.length || 16 & h && (!g || d) ? 2 : 2048, h !== a && (b[C] = h), Object.freeze(b));
        else if (g = c !== 5 ? !1 : !!(32 & h) || H(h) || !!E ? .get(b), (c === 2 || g) && H(h) && (b = Array.prototype.slice.call(b), e = h = nb(h, d), h = e &= -33, b[C] = h, d = kb(f, d, b)), H(h) || (f = d = h, h = f &=
                -33, h !== d && (b[C] = h)), g) {
            if (q = Ma(b), d = b, Oa() && !(G ? .get(a) ? .get(d) || Math.random() > .01)) {
                f = d.length;
                c = {
                    length: f
                };
                for (g = 0; g < Math.min(f, 10); g++) f <= 10 ? e = g : (e = f / 10, h = Math.floor(g * e), e = h + Math.floor(Math.random() * (Math.floor((g + 1) * e) - h))), c[e] = d[e];
                Va(d, c) ? (f = G || (G = new F), g = f.get(a), g || (g = new F, f.set(a, g)), g.set(d, c)) : (B(), G ? .get(a) ? .delete(d))
            }
        } else c !== 2 || E ? .delete(b);
        return q || b
    }
    var mb = class extends O {};
    var sb = class extends O {};

    function tb() {}

    function ub(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var vb = {
            capture: !0
        },
        wb = {
            passive: !0
        },
        xb = ub(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                n.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function yb(a) {
        return a ? a.passive && xb() ? a : a.capture || !1 : !1
    }

    function P(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, yb(d))
    };
    /* 
     
     Copyright Google LLC 
     SPDX-License-Identifier: Apache-2.0 
    */
    var zb = class {
            constructor(a) {
                this.g = a
            }
            toString() {
                return this.g
            }
        },
        Ab = new zb("about:invalid#zClosurez");
    class Bb {
        constructor(a) {
            this.M = a
        }
    }

    function Q(a) {
        return new Bb(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const Cb = new Bb(a => /^[^:]*([/?#]|$)/.test(a));
    var Db = Q("http"),
        Eb = Q("https"),
        Fb = Q("ftp"),
        Gb = Q("mailto");
    const Hb = [Q("data"), Db, Eb, Gb, Fb, Cb];

    function Ib(a = Hb) {
        for (let b = 0; b < a.length; ++b) {
            const c = a[b];
            if (c instanceof Bb && c.M("#")) return new zb("#")
        }
    }

    function Jb(a = Hb) {
        return Ib(a) || Ab
    }
    var Kb = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

    function Lb(a, b, c) {
        if (Array.isArray(b))
            for (let d = 0; d < b.length; d++) Lb(a, String(b[d]), c);
        else b != null && c.push(a + (b === "" ? "" : "=" + encodeURIComponent(String(b))))
    };

    function Mb(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    let Nb = [];
    const Ob = () => {
        const a = Nb;
        Nb = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var Pb = a => {
        var b = R;
        b.readyState === "complete" || b.readyState === "interactive" ? (Nb.push(a), Nb.length == 1 && (window.Promise ? Promise.resolve().then(Ob) : window.setImmediate ? setImmediate(Ob) : setTimeout(Ob, 0))) : b.addEventListener("DOMContentLoaded", a)
    };

    function Qb(a = document) {
        return a.createElement("img")
    };

    function Rb(a, b, c = null, d = !1) {
        Sb(a, b, c, d)
    }

    function Sb(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const e = Qb(a.document);
        if (c || d) {
            const f = g => {
                c && c(g);
                if (d) {
                    g = a.google_image_requests;
                    var h = Array.prototype.indexOf.call(g, e, void 0);
                    h >= 0 && Array.prototype.splice.call(g, h, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, yb());
                e.removeEventListener && e.removeEventListener("error", f, yb())
            };
            P(e, "load", f);
            P(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    };

    function Tb(a = null) {
        return a && a.getAttribute("data-jc") === "23" ? a : document.querySelector('[data-jc="23"]')
    }

    function Ub() {
        if (!(Math.random() > .01)) {
            var a = Tb(document.currentScript);
            a = a && a.getAttribute("data-jc-rcd") === "true" ? "pagead2.googlesyndication-cn.com" : "pagead2.googlesyndication.com";
            var b = (b = Tb(document.currentScript)) && b.getAttribute("data-jc-version") || "unknown";
            a = `https://${a}/pagead/gen_204?id=jca&jc=${23}&version=${b}&sample=${.01}`;
            b = window;
            var c;
            if (c = b.navigator) c = b.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
            c && b.navigator.sendBeacon ? b.navigator.sendBeacon(a) : Rb(b, a, void 0, !1)
        }
    };
    var R = document,
        S = window;
    var Vb = (a = []) => {
        n.google_logging_queue || (n.google_logging_queue = []);
        n.google_logging_queue.push([12, a])
    };
    var Wb = () => {
            var a = R;
            try {
                return a.querySelectorAll("*[data-ifc]")
            } catch (b) {
                return []
            }
        },
        Xb = (a, b) => {
            a && Mb(b, (c, d) => {
                a.style[d] = c
            })
        },
        Yb = a => {
            var b = R.body;
            const c = document.createDocumentFragment(),
                d = a.length;
            for (let e = 0; e < d; ++e) c.appendChild(a[e]);
            b.appendChild(c)
        };
    let Zb = null;

    function $b() {
        const a = n.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function ac() {
        const a = n.performance;
        return a && a.now ? a.now() : null
    };
    var bc = class {
        constructor(a, b) {
            var c = ac() || $b();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const T = n.performance,
        cc = !!(T && T.mark && T.measure && T.clearMarks),
        U = ub(() => {
            var a;
            if (a = cc) {
                var b;
                if (Zb === null) {
                    Zb = "";
                    try {
                        a = "";
                        try {
                            a = n.top.location.hash
                        } catch (c) {
                            a = n.location.hash
                        }
                        a && (Zb = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Zb;
                a = !!b.indexOf && b.indexOf("1337") >= 0
            }
            return a
        });

    function dc(a) {
        a && T && U() && (T.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), T.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class ec {
        constructor() {
            var a = window;
            this.g = [];
            this.i = a || n;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.g = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.h = U() || (b != null ? b : Math.random() < 1)
        }
        start(a, b) {
            if (!this.h) return null;
            a = new bc(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            T && U() && T.mark(b);
            return a
        }
        end(a) {
            if (this.h && typeof a.value === "number") {
                a.duration = (ac() || $b()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                T && U() && T.mark(b);
                !this.h || this.g.length >
                    2048 || this.g.push(a)
            }
        }
    };

    function fc(a, b, c, d, e) {
        const f = [];
        Mb(a, (g, h) => {
            (g = gc(g, b, c, d, e)) && f.push(`${h}=${g}`)
        });
        return f.join(b)
    }

    function gc(a, b, c, d, e) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        typeof c === "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d || (d = 0), d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(gc(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if (typeof a === "object") return e || (e = 0), e < 2 ? encodeURIComponent(fc(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function hc(a) {
        let b = 1;
        for (const c in a.h) c.length > b && (b = c.length);
        return 3997 - b - a.i.length - 1
    }

    function ic(a) {
        let b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=fccs&",
            c = hc(a) - 24;
        if (c < 0) return "";
        a.g.sort((f, g) => f - g);
        let d = null,
            e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f],
                h = a.h[g];
            for (let k = 0; k < h.length; k++) {
                if (!c) {
                    d = d == null ? g : d;
                    break
                }
                let l = fc(h[k], a.i, ",$");
                if (l) {
                    l = e + l;
                    if (c >= l.length) {
                        c -= l.length;
                        b += l;
                        e = a.i;
                        break
                    }
                    d = d == null ? g : d
                }
            }
        }
        a = "";
        d != null && (a = `${e}${"trn"}=${d}`);
        return b + a
    }
    var jc = class {
        constructor() {
            this.i = "&";
            this.h = {};
            this.m = 0;
            this.g = []
        }
    };
    class kc {};

    function lc() {
        var a = mc,
            b = window.google_srt;
        b >= 0 && b <= 1 && (a.g = b)
    }

    function nc(a) {
        if (mc.g < 1) try {
            let b;
            a instanceof jc ? b = a : (b = new jc, Mb(a, (d, e) => {
                var f = b;
                const g = f.m++,
                    h = {};
                h[e] = d;
                d = [h];
                f.g.push(g);
                f.h[g] = d
            }));
            const c = ic(b);
            c && Rb(n, c)
        } catch (b) {}
    }
    class oc {
        constructor() {
            this.g = Math.random()
        }
    };
    const pc = [Db, Eb, Gb, Fb, Cb, Q("market"), Q("itms"), Q("intent"), Q("itms-appss")];

    function qc() {
        var a = `${S.location.protocol==="http:"?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;
        return b => {
            b = {
                id: "unsafeurl",
                ctx: 625,
                url: b
            };
            var c = [];
            for (d in b) Lb(d, b[d], c);
            var d = c.join("&");
            if (d) {
                b = a.indexOf("#");
                b < 0 && (b = a.length);
                c = a.indexOf("?");
                let e;
                c < 0 || c > b ? (c = b, e = "") : e = a.substring(c + 1, b);
                b = [a.slice(0, c), e, a.slice(b)];
                c = b[1];
                b[1] = d ? c ? c + "&" + d : d : c;
                d = b[0] + (b[1] ? "?" + b[1] : "") + b[2]
            } else d = a;
            navigator.sendBeacon && navigator.sendBeacon(d, "")
        }
    };
    let mc;
    const V = new ec;
    var rc = () => {
        window.google_measure_js_timing || (V.h = !1, V.g != V.i.google_js_reporting_queue && (U() && A(V.g, dc), V.g.length = 0))
    };
    (a => {
        mc = a ? ? new oc;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        lc();
        window.document.readyState == "complete" ? rc() : V.h && P(window, "load", () => {
            rc()
        })
    })();
    var sc = a => {
        P(S, "message", b => {
            let c;
            try {
                c = JSON.parse(b.data)
            } catch (d) {
                return
            }!c || c.googMsgType !== "ig" || a(c, b)
        })
    };

    function W() {
        this.h = this.h;
        this.i = this.i
    }
    W.prototype.h = !1;
    W.prototype.dispose = function() {
        this.h || (this.h = !0, this.m())
    };
    W.prototype[Symbol.dispose] = function() {
        this.dispose()
    };
    W.prototype.m = function() {
        if (this.i)
            for (; this.i.length;) this.i.shift()()
    };

    function X(a, b, c) {
        W.call(this);
        this.o = a;
        this.C = b || 0;
        this.s = c;
        this.v = p(this.A, this)
    }
    fa(X, W);
    X.prototype.g = 0;
    X.prototype.m = function() {
        X.N.m.call(this);
        this.isActive() && n.clearTimeout(this.g);
        this.g = 0;
        delete this.o;
        delete this.s
    };
    X.prototype.start = function(a) {
        this.isActive() && n.clearTimeout(this.g);
        this.g = 0;
        var b = this.v;
        a = a !== void 0 ? a : this.C;
        if (typeof b !== "function")
            if (b && typeof b.handleEvent == "function") b = p(b.handleEvent, b);
            else throw Error("Invalid listener argument");
        this.g = Number(a) > 2147483647 ? -1 : n.setTimeout(b, a || 0)
    };
    X.prototype.isActive = function() {
        return this.g != 0
    };
    X.prototype.A = function() {
        this.g = 0;
        this.o && this.o.call(this.s)
    };
    const tc = {
            display: "inline-block",
            position: "absolute"
        },
        uc = {
            display: "none",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0"
        },
        Y = (a, b) => {
            a && (a.style.display = b ? "inline-block" : "none")
        };

    function vc(a = "") {
        const b = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
        a && (a = a.split(","), a.length === 4 && a.reduce((c, d) => c && !isNaN(+d), !0) && ([b.top, b.right, b.bottom, b.left] = a.map(c => +c)));
        return b
    }

    function wc(a, b, c = 2147483647) {
        const d = R.createElement("div");
        Xb(d, { ...tc,
            "z-index": String(c),
            ...b
        });
        J(a.data, 10) && P(d, "click", tb);
        if (J(a.data, 11)) {
            a = R.createElement("a");
            b = qc();
            c = Jb(pc);
            c === Ab && b("#");
            b = c;
            if (b instanceof zb)
                if (b instanceof zb) b = b.g;
                else throw Error("");
            else b = Kb.test(b) ? b : void 0;
            b !== void 0 && (a.href = b);
            a.appendChild(d);
            return a
        }
        return d
    }

    function xc(a, b) {
        switch (N(b.j, 5)) {
            case 2:
                S.AFMA_Communicator ? .addEventListener ? .("onshow", () => {
                    Z(a, b)
                });
                break;
            case 10:
                P(S, "i-creative-view", () => {
                    Z(a, b)
                });
                break;
            case 4:
                P(R, "DOMContentLoaded", () => {
                    Z(a, b)
                });
                break;
            case 8:
                sc(c => {
                    c.rr && Z(a, b)
                });
                break;
            case 9:
                if ("IntersectionObserver" in S) {
                    const c = new IntersectionObserver(d => {
                        for (const e of d)
                            if (e.intersectionRatio > 0) {
                                Z(a, b);
                                break
                            }
                    });
                    c.observe(R.body);
                    a.L.push(c)
                }
                break;
            case 11:
                S.AFMA_Communicator ? .addEventListener ? .("onAdVisibilityChanged", () => {
                    Z(a, b)
                })
        }
    }

    function yc(a, b) {
        b = vc(b);
        const c = L(a.data, 9);
        a.m = [{
            width: "100%",
            height: b.top + c + "px",
            top: -c + "px",
            left: "0"
        }, {
            width: b.right + c + "px",
            height: "100%",
            top: "0",
            right: -c + "px"
        }, {
            width: "100%",
            height: b.bottom + c + "px",
            bottom: -c + "px",
            left: "0"
        }, {
            width: b.left + c + "px",
            height: "100%",
            top: "0",
            left: -c + "px"
        }].map(d => wc(a, d, 9019))
    }

    function zc(a) {
        var b = 0;
        for (const d of a.K) {
            const e = d.j,
                f = a.A[N(e, 5)];
            d.u || f === void 0 || (b = Math.max(b, f + L(e, 2)))
        }
        a.o && a.o.dispose();
        b -= Date.now();
        const c = a.h;
        b > 0 ? (Y(c, !0), a.o = new X(() => {
            Y(c, !1)
        }, b), a.o.start()) : Y(c, !1)
    }

    function Z(a, b) {
        if (!b.u) {
            var c = N(b.j, 5);
            a.A[c] = Date.now();
            J(b.j, 9) && (a.K.push(b), zc(a))
        }
    }

    function Ac(a, b, c) {
        if (!a.g || !a.v || b.timeStamp - a.g.timeStamp >= 300) return !1;
        const d = new Map;
        A(a.v.changedTouches, e => {
            d.set(e.identifier, {
                x: e.clientX,
                y: e.clientY
            })
        });
        b = L(c.j, 11) || 10;
        for (const e of a.g.changedTouches)
            if (a = d.get(e.identifier), !a || Math.abs(a.x - e.clientX) > b || Math.abs(a.y - e.clientY) > b) return !0;
        return !1
    }
    var Cc = class {
        constructor() {
            var a = Bc;
            this.m = [];
            this.o = this.h = null;
            this.K = [];
            this.data = null;
            this.C = [];
            this.i = [];
            this.s = [];
            this.A = {};
            this.L = [];
            this.v = this.g = null;
            this.H = "";
            this.I = a["send-fccs"] === "true";
            this.H = a.qid || ""
        }
        init(a) {
            Vb([a]);
            this.data = new sb(a);
            a = lb(this.data);
            A(rb(a), f => {
                this.s.push({
                    D: 0,
                    u: !1,
                    F: 0,
                    j: f,
                    B: -1
                })
            });
            this.i = Wb();
            let b = !1;
            a = this.i.length;
            for (let f = 0; f < a; ++f) {
                var c = new mb(JSON.parse(this.i[f].getAttribute("data-ifc") || "[]"));
                A(rb(c), g => {
                    this.s.push({
                        D: 0,
                        u: !1,
                        F: 0,
                        j: g,
                        B: f
                    });
                    N(g, 4) ===
                        1 && (b = !0)
                })
            }
            c = a = !1;
            let d = J(this.data, 12);
            for (var e of this.s) {
                const f = e.j;
                L(f, 2) > 0 && N(f, 5) > 0 ? (!this.h && J(f, 9) && (this.h = wc(this, uc)), xc(this, e)) : M(f) && J(f, 9) && yc(this, M(f));
                M(f) && (a = !0);
                L(f, 11) > 0 && (c = !0);
                J(f, 12) && (d = !0)
            }
            e = [];
            this.h && e.push(this.h);
            !b && e.push(...this.m);
            R.body && Yb(e);
            J(this.data, 13) && Pb(() => {
                const f = R.body.querySelectorAll(".amp-fcp, .amp-bcp");
                for (let h = 0; h < f.length; ++h) {
                    var g = (g = f[h]) ? S.getComputedStyle(g).getPropertyValue("position") : void 0;
                    g === "absolute" && Y(f[h], !1)
                }
            });
            P(R, "click",
                f => {
                    if (this.I) {
                        var g = {
                            cx: f.clientX,
                            cy: f.clientY,
                            et: Date.now(),
                            qid: this.H
                        };
                        var h = kc;
                        var k = "J";
                        h.J && h.hasOwnProperty(k) || (k = new h, h.J = k);
                        h = [];
                        !g.eid && h.length && (g.eid = h.toString());
                        nc(g);
                        this.I = !1
                    }
                    if (f.isTrusted === !1 && J(this.data, 15)) f.preventDefault ? f.preventDefault() : f.returnValue = !1, f.stopImmediatePropagation(), Ub();
                    else {
                        g = -1;
                        h = [];
                        for (var l of this.s) {
                            k = l.B;
                            var m = k !== -1;
                            if (!(L(l.j, 3) <= g || l.u || m && h[k] === !1)) {
                                var q = !m || h[k] || this.i[k].contains(f.target);
                                m && q && (h[k] = !0);
                                if (k = q)
                                    if (k = f, m = l.j, L(m, 2) > 0 &&
                                        N(m, 5) > 0) k = this.A[N(m, 5)], k = k !== void 0 && Date.now() < k + L(m, 2);
                                    else if (M(m)) {
                                    {
                                        m = (l.B >= 0 ? this.i[l.B] : R.body).getBoundingClientRect();
                                        q = Number;
                                        var w = (w = R.body) ? S.getComputedStyle(w).getPropertyValue("zoom") : void 0;
                                        const z = q(w || "1"),
                                            [ia, Gc] = [k.clientX, k.clientY],
                                            [na, oa, Ja, Ka] = [ia / z - m.left, Gc / z - m.top, m.width, m.height];
                                        if (!(Ja > 0 && Ka > 0) || isNaN(na) || isNaN(oa) || na < 0 || oa < 0) k = !1;
                                        else {
                                            q = vc(M(l.j));
                                            w = !(na >= q.left && Ja - na > q.right && oa >= q.top && Ka - oa > q.bottom);
                                            var K = J(l.j, 12);
                                            if (this.g && (J(this.data, 12) || K) && k.timeStamp -
                                                this.g.timeStamp < 300) {
                                                k = this.g.changedTouches[0];
                                                const [pa, qa] = [k.clientX / z - m.left, k.clientY / z - m.top];
                                                !isNaN(pa) && !isNaN(qa) && pa >= 0 && qa >= 0 && (w = (w = J(this.data, 16) || K ? w : !1) || !(pa >= q.left && Ja - pa > q.right && qa >= q.top && Ka - qa > q.bottom))
                                            }
                                            k = w
                                        }
                                    }
                                } else k = L(m, 11) > 0 ? Ac(this, k, l) : !0;
                                if (k) {
                                    var u = l;
                                    g = L(l.j, 3)
                                }
                            }
                        }
                        if (u) switch (l = u.j, N(l, 4)) {
                            case 2:
                            case 3:
                                f.preventDefault ? f.preventDefault() : f.returnValue = !1;
                                g = Date.now();
                                g - u.F > 500 && (u.F = g, ++u.D);
                                g = u.j;
                                if (L(g, 8) && u.D >= L(g, 8))
                                    if (u.u = !0, this.h && L(g, 2) > 0) zc(this);
                                    else if (this.m.length >
                                    0 && M(g))
                                    for (var I of this.m) Y(I, !1);
                                Ub();
                                I = pb(l);
                                for (const z of this.C) z(f, I)
                        }
                    }
                }, vb);
            c && P(R, "touchstart", f => {
                this.v = f
            }, wb);
            (a && d || c) && P(R, "touchend", f => {
                this.g = f
            }, wb)
        }
        registerCallback(a) {
            this.C.push(a)
        }
    };
    const Dc = Tb(document.currentScript);
    if (Dc == null) throw Error("JSC not found 23");
    var Bc;
    const Ec = {},
        Fc = Dc.attributes;
    for (let a = Fc.length - 1; a >= 0; a--) {
        const b = Fc[a].name;
        b.indexOf("data-jcp-") === 0 && (Ec[b.substring(9)] = Fc[a].value)
    }
    Bc = Ec;
    const Hc = window;
    Hc.googqscp = new Cc;
    Bc["init-data"] && Hc.googqscp.init(JSON.parse(Bc["init-data"]));
}).call(this);