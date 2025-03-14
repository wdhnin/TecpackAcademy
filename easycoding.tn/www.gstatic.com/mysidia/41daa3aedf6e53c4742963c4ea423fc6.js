(function() {
    'use strict';
    var n, aa = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
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
    var q = this || self;

    function ea(a, b) {
        a = a.split(".");
        var c = q;
        a[0] in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function fa(a) {
        return Object.prototype.hasOwnProperty.call(a, ha) && a[ha] || (a[ha] = ++ia)
    }
    var ha = "closure_uid_" + (Math.random() * 1E9 >>> 0),
        ia = 0;

    function ja(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function r(a, b, c) {
        r = ja;
        return r.apply(null, arguments)
    }

    function ka(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Ea = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.ib = function(d, e, f) {
            for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
            return b.prototype[e].apply(d, h)
        }
    };

    function la(a) {
        q.setTimeout(() => {
            throw a;
        }, 0)
    };
    var ma, na;
    a: {
        for (var oa = ["CLOSURE_FLAGS"], pa = q, qa = 0; qa < oa.length; qa++)
            if (pa = pa[oa[qa]], pa == null) {
                na = null;
                break a
            }
        na = pa
    }
    var ra = na && na[610401301];
    ma = ra != null ? ra : !1;
    var t;
    const sa = q.navigator;
    t = sa ? sa.userAgentData || null : null;

    function ta(a) {
        return ma ? t ? t.brands.some(({
            brand: b
        }) => b && b.indexOf(a) != -1) : !1 : !1
    }

    function u(a) {
        var b;
        a: {
            if (b = q.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return b.indexOf(a) != -1
    };

    function v() {
        return ma ? !!t && t.brands.length > 0 : !1
    }

    function ua() {
        return v() ? ta("Chromium") : (u("Chrome") || u("CriOS")) && !(v() ? 0 : u("Edge")) || u("Silk")
    };

    function va(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    };
    !u("Android") || ua();
    ua();
    u("Safari") && (ua() || (v() ? 0 : u("Coast")) || (v() ? 0 : u("Opera")) || (v() ? 0 : u("Edge")) || (v() ? ta("Microsoft Edge") : u("Edg/")) || v() && ta("Opera"));

    function wa(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    let xa;

    function ya() {
        const a = Error();
        wa(a, "incident");
        la(a)
    };

    function w(a) {
        return Array.prototype.slice.call(a)
    };
    var x = Symbol(),
        za = Symbol(),
        Aa = Symbol();

    function y(a) {
        a[x] |= 34;
        return a
    }

    function Ba(a) {
        a[x] |= 32;
        return a
    }

    function Ca(a, b) {
        b[x] = (a | 0) & -30975
    }

    function Da(a, b) {
        b[x] = (a | 34) & -30941
    };
    var Ea = {},
        Fa = {};

    function Ga(a) {
        return !(!a || typeof a !== "object" || a.Ca !== Fa)
    }

    function Ha(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function Ia(a) {
        return !Array.isArray(a) || a.length ? !1 : (a[x] | 0) & 1 ? !0 : !1
    }
    var Ja;
    const Ka = [];
    Ka[x] = 55;
    Ja = Object.freeze(Ka);
    class La {
        constructor(a, b, c) {
            this.v = 0;
            this.g = a;
            this.l = b;
            this.A = c
        }
        next() {
            if (this.v < this.g.length) {
                const a = this.g[this.v++];
                return {
                    done: !1,
                    value: this.l ? this.l.call(this.A, a) : a
                }
            }
            return {
                done: !0,
                value: void 0
            }
        }[Symbol.iterator]() {
            return new La(this.g, this.l, this.A)
        }
    };
    var Ma = typeof q.BigInt === "function" && typeof q.BigInt(0) === "bigint";
    const Na = Number.MIN_SAFE_INTEGER.toString(),
        Oa = Ma ? BigInt(Number.MIN_SAFE_INTEGER) : void 0,
        Pa = Number.MAX_SAFE_INTEGER.toString(),
        Qa = Ma ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;

    function Ra(a, b) {
        if (a.length > b.length) return !1;
        if (a.length < b.length || a === b) return !0;
        for (let c = 0; c < a.length; c++) {
            const d = a[c],
                e = b[c];
            if (d > e) return !1;
            if (d < e) return !0
        }
    };

    function Sa(a) {
        if (!Number.isFinite(a)) throw a = Error("enum"), wa(a, "warning"), a;
        return a | 0
    }

    function Ta(a) {
        return a == null ? a : Number.isFinite(a) ? a | 0 : void 0
    }

    function Ua(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
    }

    function Va(a) {
        if (a != null && typeof a !== "string") throw Error();
        return a
    }

    function Wa(a) {
        return a == null || typeof a === "string" ? a : void 0
    }

    function Xa(a, b, c, d) {
        if (a != null && typeof a === "object" && a.Z === Ea) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? Ya(b) : new b : void 0;
        let e = c = a[x] | 0;
        e === 0 && (e |= d & 32);
        e |= d & 2;
        e !== c && (a[x] = e);
        return new b(a)
    }

    function Ya(a) {
        var b = a[za];
        if (b) return b;
        b = new a;
        y(b.G);
        return a[za] = b
    }

    function Za(a, b, c) {
        if (b) {
            if (typeof a !== "string") throw Error();
            return a
        }
        let d;
        return (d = Wa(a)) != null ? d : c ? "" : void 0
    };

    function $a(a) {
        z === void 0 && (z = typeof Proxy === "function" ? ab(Proxy) : null);
        if (!z || !bb()) return a;
        let b = cb(a);
        if (b) return b;
        if (Math.random() > .01) return a;
        db(a);
        b = new z(a, {
            set(c, d, e) {
                eb();
                c[d] = e;
                return !0
            }
        });
        fb(a, b);
        return b
    }

    function eb() {
        ya()
    }
    let gb = void 0,
        hb = void 0;

    function cb(a) {
        let b;
        return (b = gb) == null ? void 0 : b.get(a)
    }

    function fb(a, b) {
        (gb || (gb = new A)).set(a, b);
        (hb || (hb = new A)).set(b, a)
    }
    let z = void 0,
        A = void 0;

    function bb() {
        A === void 0 && (A = typeof WeakMap === "function" ? ab(WeakMap) : null);
        return A
    }

    function ab(a) {
        try {
            return a.toString().indexOf("[native code]") !== -1 ? a : null
        } catch (b) {
            return null
        }
    }
    let ib = void 0;

    function db(a) {
        if (ib === void 0) {
            const b = new z([], {});
            ib = Array.prototype.concat.call([], b).length === 1
        }
        ib && typeof Symbol === "function" && Symbol.isConcatSpreadable && (a[Symbol.isConcatSpreadable] = !0)
    }

    function jb(a, b) {
        const c = kb(a, b);
        c && !lb(a, c) && (mb(), nb(a, b))
    }

    function lb(a, b) {
        if (a.length !== b.length) return !1;
        for (const e in b) {
            var c = Number(e),
                d;
            if (d = Number.isInteger(c)) d = a[c], c = b[c], d = !(Number.isNaN(d) ? Number.isNaN(c) : d === c);
            if (d) return !1
        }
        return !0
    }

    function ob(a) {
        var b;
        if (a && (b = C) != null && b.has(a) && (b = a.G))
            for (let c = 0; c < b.length; c++) {
                const d = b[c];
                if (c === b.length - 1 && Ha(d))
                    for (const e in d) {
                        const f = d[e];
                        Array.isArray(f) && jb(f, a)
                    } else Array.isArray(d) && jb(d, a)
            }
    }

    function mb() {
        ya()
    }
    let C = void 0;

    function kb(a, b) {
        let c, d;
        return (c = C) == null ? void 0 : (d = c.get(b)) == null ? void 0 : d.get(a)
    }

    function nb(a, b) {
        let c, d;
        (c = C) == null || (d = c.get(b)) == null || d.delete(a)
    };
    let pb;

    function qb(a, b) {
        pb = b;
        a = new a(b);
        pb = void 0;
        return a
    };
    const rb = {},
        sb = (() => class extends Map {
            constructor() {
                super()
            }
        })();

    function tb(a) {
        return a
    }

    function ub(a) {
        if (a.O & 2) throw Error("Cannot mutate an immutable Map");
    }
    var D = class extends sb {
        constructor(a, b, c = tb, d = tb) {
            super();
            let e = a[x] | 0;
            e |= 64;
            this.O = a[x] = e;
            this.U = b;
            this.R = c;
            this.ba = this.U ? vb : d;
            for (let f = 0; f < a.length; f++) {
                const h = a[f],
                    k = c(h[0], !1, !0);
                let l = h[1];
                b ? l === void 0 && (l = null) : l = d(h[1], !1, !0, void 0, void 0, e);
                super.set(k, l)
            }
        }
        va(a = wb) {
            if (this.size !== 0) return this.aa(a)
        }
        aa(a = wb) {
            const b = [],
                c = super.entries();
            for (var d; !(d = c.next()).done;) d = d.value, d[0] = a(d[0]), d[1] = a(d[1]), b.push(d);
            return b
        }
        clear() {
            ub(this);
            super.clear()
        }
        delete(a) {
            ub(this);
            return super.delete(this.R(a, !0, !1))
        }
        entries() {
            var a = this.sa();
            return new La(a, xb, this)
        }
        keys() {
            return this.Ba()
        }
        values() {
            var a = this.sa();
            return new La(a, D.prototype.get, this)
        }
        forEach(a, b) {
            super.forEach((c, d) => {
                a.call(b, this.get(d), d, this)
            })
        }
        set(a, b) {
            ub(this);
            a = this.R(a, !0, !1);
            return a == null ? this : b == null ? (super.delete(a), this) : super.set(a, this.ba(b, !0, !0, this.U, !1, this.O))
        }
        has(a) {
            return super.has(this.R(a, !1, !1))
        }
        get(a) {
            a = this.R(a, !1, !1);
            const b = super.get(a);
            if (b !== void 0) {
                var c = this.U;
                return c ? (c = this.ba(b, !1, !0, c, this.za, this.O),
                    c !== b && super.set(a, c), c) : b
            }
        }
        sa() {
            return Array.from(super.keys())
        }
        Ba() {
            return super.keys()
        }[Symbol.iterator]() {
            return this.entries()
        }
    };
    D.prototype.toJSON = void 0;
    D.prototype.Ca = Fa;

    function vb(a, b, c, d, e, f) {
        a = Xa(a, d, c, f);
        e && (a = yb(a));
        return a
    }

    function wb(a) {
        return a
    }

    function xb(a) {
        return [a, this.get(a)]
    }
    let zb;

    function Ab() {
        return zb || (zb = new D(y([]), void 0, void 0, void 0, rb))
    };

    function Bb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "bigint":
                return (Ma ? a >= Oa && a <= Qa : a[0] === "-" ? Ra(a, Na) : Ra(a, Pa)) ? Number(a) : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (Ia(a)) return
                    } else {
                        if (a != null && a instanceof Uint8Array) {
                            let b = "",
                                c = 0;
                            const d = a.length - 10240;
                            for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                            b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                            return btoa(b)
                        }
                        if (a instanceof D) return a.va()
                    }
        }
        return a
    };

    function Cb(a, b, c) {
        a = w(a);
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

    function Db(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = Ia(a) ? void 0 : e && (a[x] | 0) & 2 ? a : Eb(a, b, c, d !== void 0, e);
            else if (Ha(a)) {
                const f = {};
                for (let h in a) f[h] = Db(a[h], b, c, d, e);
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function Eb(a, b, c, d, e) {
        const f = d || c ? a[x] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = w(a);
        for (let h = 0; h < a.length; h++) a[h] = Db(a[h], b, c, d, e);
        c && c(f, a);
        return a
    }

    function Fb(a) {
        return Db(a, Gb, void 0, void 0, !1)
    }

    function Gb(a) {
        return a.Z === Ea ? a.toJSON() : a instanceof D ? a.va(Fb) : Bb(a)
    };

    function Hb(a, b, c = Da) {
        if (a != null) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[x] | 0;
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[x] = (d | 34) & -12293, a) : Eb(a, Hb, d & 4 ? Da : c, !0, !0)
            }
            a.Z === Ea ? (c = a.G, d = c[x], a = d & 2 ? a : Ib(a, c, d, !0)) : a instanceof D && !(a.O & 2) && (c = y(a.aa(Hb)), a = new D(c, a.U, a.R, a.ba));
            return a
        }
    }

    function Ib(a, b, c, d) {
        ob(a);
        return qb(a.constructor, Jb(b, c, d))
    }

    function Jb(a, b, c) {
        const d = c || b & 2 ? Da : Ca,
            e = !!(b & 32);
        a = Cb(a, b, f => Hb(f, e, d));
        a[x] = a[x] | 32 | (c ? 2 : 0);
        return a
    }

    function yb(a) {
        const b = a.G,
            c = b[x];
        return c & 2 ? Ib(a, b, c, !1) : a
    };

    function E(a, b) {
        a = a.G;
        return F(a, a[x], b)
    }

    function Kb(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }

    function F(a, b, c, d) {
        if (c === -1) return null;
        const e = b >> 15 & 1023 || 536870912;
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            if (d && b & 256 && (d = a[f - 1][c], d != null)) {
                if (Kb(a, b, e, c) && Aa != null) {
                    var h;
                    a = (h = xa) != null ? h : xa = {};
                    h = a[Aa] || 0;
                    h >= 4 || (a[Aa] = h + 1, ya())
                }
                return d
            }
            return Kb(a, b, e, c)
        }
    }

    function Lb(a, b, c) {
        const d = a.G;
        let e = d[x];
        if (e & 2) throw Error();
        G(d, e, b, c);
        return a
    }

    function G(a, b, c, d) {
        const e = b >> 15 & 1023 || 536870912;
        if (c >= e) {
            let f, h = b;
            if (b & 256) f = a[a.length - 1];
            else {
                if (d == null) return h;
                f = a[e + (+!!(b & 512) - 1)] = {};
                h |= 256
            }
            f[c] = d;
            c < e && (a[c + (+!!(b & 512) - 1)] = void 0);
            h !== b && (a[x] = h);
            return h
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }

    function Mb(a) {
        a = a.G;
        let b = a[x];
        const c = F(a, b, 12);
        var d = c == null || typeof c === "number" ? c : c === "NaN" || c === "Infinity" || c === "-Infinity" ? Number(c) : void 0;
        d != null && d !== c && G(a, b, 12, d);
        return d
    }

    function Nb(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function Ob(a, b, c, d, e, f) {
        const h = b & 2;
        a: {
            var k = c,
                l = b & 2;c = !1;
            if (k == null) {
                if (l) {
                    a = Ab();
                    break a
                }
                k = []
            } else if (k.constructor === D) {
                if ((k.O & 2) == 0 || l) {
                    a = k;
                    break a
                }
                k = k.aa()
            } else Array.isArray(k) ? c = !!((k[x] | 0) & 2) : k = [];
            if (l) {
                if (!k.length) {
                    a = Ab();
                    break a
                }
                c || (c = !0, y(k))
            } else if (c) {
                c = !1;
                l = w(k);
                for (k = 0; k < l.length; k++) {
                    const m = l[k] = w(l[k]);
                    Array.isArray(m[1]) && (m[1] = y(m[1]))
                }
                k = l
            }
            c || ((k[x] | 0) & 64 ? k[x] &= -33 : 32 & b && Ba(k));f = new D(k, e, Za, f);G(a, b, d, f);a = f
        }!h && e && (a.za = !0);
        return a
    }

    function Pb(a) {
        a = a.G;
        const b = a[x];
        return Ob(a, b, F(a, b, 4), 4, void 0, Za)
    }

    function Qb(a, b, c) {
        a = a.G;
        let d = a[x];
        const e = F(a, d, c, !1);
        b = Xa(e, b, !1, d);
        b !== e && b != null && G(a, d, c, b);
        return b
    }

    function Rb(a, b, c) {
        return (a = Qb(a, b, c)) ? a : Ya(b)
    }

    function Sb(a, b) {
        a = 2 & b ? a | 2 : a & -3;
        return (a | 32) & -2049
    }

    function Tb(a, b) {
        32 & b || (a &= -33);
        return a
    }

    function H(a, b) {
        return a != null ? a : b
    }

    function I(a, b) {
        a = E(a, b);
        return H(a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : void 0, !1)
    }

    function J(a, b) {
        return H(Ua(E(a, b)), 0)
    }

    function K(a, b) {
        return H(Wa(E(a, b)), "")
    };
    let Ub;
    var L = class {
        constructor(a) {
            a: {
                var b = b != null ? b : 0;a == null && (a = pb);pb = void 0;
                if (a == null) {
                    var c = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error("narr");
                    c = a[x] | 0;
                    if (c & 2048) throw Error("farr");
                    if (c & 64) break a;
                    b === 1 || b === 2 || (c |= 64);
                    b = a;
                    var d = b.length;
                    if (d && (--d, Ha(b[d]))) {
                        c |= 256;
                        b = d - (+!!(c & 512) - 1);
                        if (b >= 1024) throw Error("pvtlmt");
                        c = c & -33521665 | (b & 1023) << 15
                    }
                }
                a[x] = c
            }
            this.G = a
        }
        toJSON() {
            return Vb(this)
        }
    };
    L.prototype.Z = Ea;
    L.prototype.toString = function() {
        try {
            return Ub = !0, Vb(this).toString()
        } finally {
            Ub = !1
        }
    };

    function Vb(a) {
        ob(a);
        a = Ub ? a.G : Eb(a.G, Gb, void 0, void 0, !1); {
            var b = !Ub;
            let m = a.length;
            if (m) {
                var c = a[m - 1],
                    d = Ha(c);
                d ? m-- : c = void 0;
                var e = a;
                if (d) {
                    b: {
                        var f = c;
                        var h;
                        var k = !1;
                        if (f)
                            for (let p in f)
                                if (isNaN(+p)) {
                                    let B;
                                    ((B = h) != null ? B : h = {})[p] = f[p]
                                } else if (d = f[p], Array.isArray(d) && (Ia(d) || Ga(d) && d.size === 0) && (d = null), d == null && (k = !0), d != null) {
                            let B;
                            ((B = h) != null ? B : h = {})[p] = d
                        }
                        k || (h = f);
                        if (h)
                            for (let p in h) {
                                k = h;
                                break b
                            }
                        k = null
                    }
                    f = k == null ? c != null : k !== c
                }
                for (; m > 0; m--) {
                    h = e[m - 1];
                    if (!(h == null || Ia(h) || Ga(h) && h.size === 0)) break;
                    var l = !0
                }
                if (e !== a || f || l) {
                    if (!b) e = Array.prototype.slice.call(e, 0, m);
                    else if (l || f || k) e.length = m;
                    k && e.push(k)
                }
                l = e
            } else l = a
        }
        return l
    };

    function Wb(a) {
        return b => {
            if (b == null || b == "") b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b = qb(a, Ba(b))
            }
            return b
        }
    };
    /*

     Copyright Google LLC
     SPDX-License-Identifier: Apache-2.0
    */
    var M = class {
            constructor(a) {
                this.g = a
            }
            toString() {
                return this.g
            }
        },
        Xb = new M("about:invalid#zClosurez");
    class Yb {
        constructor(a) {
            this.Aa = a
        }
    }

    function N(a) {
        return new Yb(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const Zb = new Yb(a => /^[^:]*([/?#]|$)/.test(a));
    var $b = N("tel"),
        ac = N("http"),
        bc = N("https"),
        cc = N("ftp"),
        dc = N("mailto"),
        ec = N("intent"),
        fc = N("market"),
        gc = N("itms"),
        hc = N("itms-appss");
    const ic = [N("data"), ac, bc, dc, cc, Zb];

    function jc(a, b = ic) {
        if (a instanceof M) return a;
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof Yb && d.Aa(a)) return new M(a)
        }
    }

    function kc(a, b = ic) {
        return jc(a, b) || Xb
    }
    var lc = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

    function mc(a) {
        if (a instanceof M)
            if (a instanceof M) a = a.g;
            else throw Error("");
        else a = lc.test(a) ? a : void 0;
        return a
    };

    function nc(a, b) {
        b = mc(b);
        b !== void 0 && (a.href = b)
    };

    function O(a) {
        return encodeURIComponent(String(a))
    };
    var oc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function pc(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("="),
                    e = null;
                if (d >= 0) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else f = a[c];
                b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
            }
        }
    }

    function qc(a, b) {
        if (!b) return a;
        var c = a.indexOf("#");
        c < 0 && (c = a.length);
        var d = a.indexOf("?");
        if (d < 0 || d > c) {
            d = c;
            var e = ""
        } else e = a.substring(d + 1, c);
        a = [a.slice(0, d), e, a.slice(c)];
        c = a[1];
        a[1] = b ? c ? c + "&" + b : b : c;
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    }

    function rc(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) rc(a, String(b[d]), c);
        else b != null && c.push(a + (b === "" ? "" : "=" + O(b)))
    }

    function sc(a, b) {
        var c = [];
        for (b = b || 0; b < a.length; b += 2) rc(a[b], a[b + 1], c);
        return c.join("&")
    }

    function P(a, b) {
        var c = arguments.length == 2 ? sc(arguments[1], 0) : sc(arguments, 1);
        return qc(a, c)
    }

    function tc(a, b, c) {
        c = c != null ? "=" + O(c) : "";
        return qc(a, b + c)
    }

    function uc(a, b, c, d) {
        for (var e = c.length;
            (b = a.indexOf(c, b)) >= 0 && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (f == 38 || f == 63)
                if (f = a.charCodeAt(b + e), !f || f == 61 || f == 38 || f == 35) return b;
            b += e + 1
        }
        return -1
    }
    var vc = /#|$/,
        wc = /[?&]($|#)/;
    var xc = class extends L {};
    var zc = class extends L {};
    var Ac = class extends L {};
    var Bc = Wb(class extends L {});
    var Cc = class extends L {
        constructor() {
            super()
        }
    };
    var Dc = class extends L {};
    var Ec = class extends L {};

    function Fc(a, b) {
        if (!a || /[?&]dsh=1(&|$)/.test(a)) return null;
        if (/[?&]ae=1(&|$)/.test(a)) {
            var c = /[?&]adurl=([^&]+)/.exec(a);
            if (!c) return null;
            b = b ? c.index : a.length;
            try {
                return {
                    na: a.slice(0, b) + "&act=1" + a.slice(b),
                    finalUrl: decodeURIComponent(c[1])
                }
            } catch (d) {
                return null
            }
        }
        if (/[?&]ae=2(&|$)/.test(a)) {
            c = a;
            let d = "";
            b && (b = a.indexOf("&adurl="), b > 0 && (c = a.slice(0, b), d = a.slice(b)));
            return {
                na: `${c}&act=1${d}`,
                finalUrl: `${c}&dct=1${d}`
            }
        }
        return null
    };

    function Gc(a) {
        var b = window;
        b.addEventListener && b.addEventListener("load", a, !1)
    };

    function Hc(a, b) {
        this.width = a;
        this.height = b
    }
    n = Hc.prototype;
    n.aspectRatio = function() {
        return this.width / this.height
    };
    n.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    n.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    n.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    n.scale = function(a, b) {
        this.width *= a;
        this.height *= typeof b === "number" ? b : a;
        return this
    };

    function Ic(a) {
        let b = 0;
        for (const c in a) b++
    };

    function Jc(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Kc(a = document) {
        return a.createElement("img")
    };

    function Lc(a, b) {
        a.google_image_requests || (a.google_image_requests = []);
        const c = Kc(a.document);
        c.src = b;
        a.google_image_requests.push(c)
    };
    var Mc = document,
        Q = window;
    let Nc = null;

    function Oc() {
        const a = q.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Pc() {
        const a = q.performance;
        return a && a.now ? a.now() : null
    };
    var Qc = class {
        constructor(a, b) {
            var c = Pc() || Oc();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const R = q.performance,
        Rc = !!(R && R.mark && R.measure && R.clearMarks),
        S = function(a) {
            let b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        }(() => {
            var a;
            if (a = Rc) {
                var b;
                if (Nc === null) {
                    Nc = "";
                    try {
                        a = "";
                        try {
                            a = q.top.location.hash
                        } catch (c) {
                            a = q.location.hash
                        }
                        a && (Nc = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Nc;
                a = !!b.indexOf && b.indexOf("1337") >= 0
            }
            return a
        });

    function Sc(a) {
        a && R && S() && (R.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), R.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class Tc {
        constructor() {
            var a = window;
            this.g = [];
            this.v = a || q;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.g = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.l = S() || (b != null ? b : Math.random() < 1)
        }
        start(a, b) {
            if (!this.l) return null;
            a = new Qc(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            R && S() && R.mark(b);
            return a
        }
        end(a) {
            if (this.l && typeof a.value === "number") {
                a.duration = (Pc() || Oc()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                R && S() && R.mark(b);
                !this.l || this.g.length >
                    2048 || this.g.push(a)
            }
        }
    };

    function Uc(a, b, c, d, e) {
        const f = [];
        Jc(a, (h, k) => {
            (h = Vc(h, b, c, d, e)) && f.push(`${k}=${h}`)
        });
        return f.join(b)
    }

    function Vc(a, b, c, d, e) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        typeof c === "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d || (d = 0), d < c.length) {
                const f = [];
                for (let h = 0; h < a.length; h++) f.push(Vc(a[h], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if (typeof a === "object") return e || (e = 0), e < 2 ? encodeURIComponent(Uc(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Wc(a) {
        let b = 1;
        for (const c in a.l) c.length > b && (b = c.length);
        return 3997 - b - a.v.length - 1
    }

    function Xc(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Wc(a) - b.length;
        if (d < 0) return "";
        a.g.sort((f, h) => f - h);
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const h = a.g[f],
                k = a.l[h];
            for (let l = 0; l < k.length; l++) {
                if (!d) {
                    b = b == null ? h : b;
                    break
                }
                let m = Uc(k[l], a.v, ",$");
                if (m) {
                    m = e + m;
                    if (d >= m.length) {
                        d -= m.length;
                        c += m;
                        e = a.v;
                        break
                    }
                    b = b == null ? h : b
                }
            }
        }
        a = "";
        b != null && (a = `${e}${"trn"}=${b}`);
        return c + a
    }
    var Yc = class {
        constructor() {
            this.v = "&";
            this.l = {};
            this.A = 0;
            this.g = []
        }
    };
    class Zc {};

    function $c() {
        var a = ad,
            b = window.google_srt;
        b >= 0 && b <= 1 && (a.g = b)
    }

    function bd(a, b, c) {
        if (ad.g < (c || .01)) try {
            let d;
            b instanceof Yc ? d = b : (d = new Yc, Jc(b, (f, h) => {
                var k = d;
                const l = k.A++,
                    m = {};
                m[h] = f;
                f = [m];
                k.g.push(l);
                k.l[l] = f
            }));
            const e = Xc(d, "/pagead/gen_204?id=" + a + "&");
            e && Lc(q, e)
        } catch (d) {}
    }
    class cd {
        constructor() {
            this.g = Math.random()
        }
    };
    const dd = [ac, bc, dc, cc, Zb, fc, gc, ec, hc];

    function ed(a, b, c) {
        if (a instanceof M) return a;
        c = kc(a, c);
        c === Xb && b(a);
        return c
    }

    function fd(a) {
        var b = `${Q.location.protocol==="http:"?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;
        return c => {
            c = {
                id: "unsafeurl",
                ctx: a,
                url: c
            };
            var d = [];
            for (e in c) rc(e, c[e], d);
            var e = qc(b, d.join("&"));
            navigator.sendBeacon && navigator.sendBeacon(e, "")
        }
    };
    let ad;
    const T = new Tc;
    var gd = () => {
        window.google_measure_js_timing || (T.l = !1, T.g != T.v.google_js_reporting_queue && (S() && Array.prototype.forEach.call(T.g, Sc, void 0), T.g.length = 0))
    };
    (a => {
        ad = a != null ? a : new cd;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        $c();
        window.document.readyState == "complete" ? gd() : T.l && Gc(() => {
            gd()
        })
    })();
    var hd = (a, b, c) => {
        var d = Zc;
        var e = "ra";
        d.ra && d.hasOwnProperty(e) || (e = new d, d.ra = e);
        d = [];
        !b.eid && d.length && (b.eid = d.toString());
        bd(a, b, c)
    };

    function id(a, b) {
        const c = a.search(/&adurl=/);
        return c < 0 ? a + b : a.slice(0, c) + b + a.slice(c)
    };
    Ic({
        Ra: 0,
        Qa: 1,
        Na: 2,
        Ia: 3,
        Oa: 4,
        Ja: 5,
        Pa: 6,
        La: 7,
        Ma: 8,
        Ha: 9,
        Ka: 10,
        Sa: 11
    });
    Ic({
        Ua: 0,
        Va: 1,
        Ta: 2
    });

    function jd(a) {
        var b = new kd;
        if (b.G[x] & 2) throw Error();
        var c = b.G,
            d = c[x],
            e = 2 & d ? 1 : 2,
            f = F(c, d, 1);
        f = Array.isArray(f) ? f : Ja;
        var h = f[x] | 0,
            k = f;
        jb(k, b);
        e !== 2 && e !== 1 || nb(k, b);
        k = 4 & h ? !1 : !0;
        if (k) {
            4 & h && (f = w(f), h = Sb(h, d), d = G(c, d, 1, f));
            for (var l = k = 0; k < f.length; k++) {
                const yc = Ta(f[k]);
                yc != null && (f[l++] = yc)
            }
            l < k && (f.length = l);
            h === 0 && (h = Sb(h, d));
            h |= 21;
            h &= -12289;
            f[x] = h;
            2 & h && Object.freeze(f)
        }
        if (e === 1 || e === 4 && 32 & h) Nb(h) || (b = h, h |= 2, h !== b && (f[x] = h), Object.freeze(f));
        else if (k = e !== 5 ? !1 : !!(32 & h) || Nb(h) || !!cb(f), (e === 2 || k) && Nb(h) &&
            (f = w(f), h = Sb(h, d), h = Tb(h, d), f[x] = h, d = G(c, d, 1, f)), Nb(h) || (c = h, h = Tb(h, d), h !== c && (f[x] = h)), k) {
            var m = $a(f);
            d = f;
            if (bb() && !(kb(d, b) || Math.random() > .01)) {
                e = d.length;
                c = {
                    length: e
                };
                for (h = 0; h < Math.min(e, 10); h++) e <= 10 ? k = h : (k = e / 10, l = Math.floor(h * k), k = l + Math.floor(Math.random() * (Math.floor((h + 1) * k) - l))), c[k] = d[k];
                lb(d, c) ? (e = C || (C = new A), h = e.get(b), h || (h = new A, e.set(b, h)), h.set(d, c)) : (ya(), nb(d, b))
            }
        }
        m = m || f;
        if (Array.isArray(a)) {
            var p = a,
                B;
            a = ((B = hb) == null ? void 0 : B.get(p)) || p;
            B = a.length;
            for (p = 0; p < B; p++) m.push(Sa(a[p]))
        } else
            for (p of a) m.push(Sa(p))
    }
    var kd = class extends L {
        constructor() {
            super()
        }
    };
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);

    function U() {
        this.g = this.g;
        this.l = this.l
    }
    U.prototype.g = !1;
    U.prototype.dispose = function() {
        this.g || (this.g = !0, this.W())
    };
    U.prototype[Symbol.dispose] = function() {
        this.dispose()
    };
    U.prototype.W = function() {
        if (this.l)
            for (; this.l.length;) this.l.shift()()
    };
    jd([1, 8, 9, 10, 11, 12, 2, 3, 4, 5, 15, 16, 19, 20, 21]);
    jd([1, 6, 7, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14, 18, 19, 20, 21]);
    jd([1, 6, 7, 9, 10, 11, 12, 22, 2, 3, 4, 5, 13, 14, 17, 18, 19, 20, 21]);
    new kd;

    function V(a) {
        this.v = this.D = this.A = "";
        this.F = null;
        this.C = this.l = "";
        this.B = !1;
        var b;
        a instanceof V ? (this.B = a.B, ld(this, a.A), this.D = a.D, this.v = a.v, md(this, a.F), this.l = a.l, nd(this, od(a.g)), this.C = a.C) : a && (b = String(a).match(oc)) ? (this.B = !1, ld(this, b[1] || "", !0), this.D = W(b[2] || ""), this.v = W(b[3] || "", !0), md(this, b[4]), this.l = W(b[5] || "", !0), nd(this, b[6] || "", !0), this.C = W(b[7] || "")) : (this.B = !1, this.g = new pd(null, this.B))
    }
    V.prototype.toString = function() {
        var a = [],
            b = this.A;
        b && a.push(qd(b, rd, !0), ":");
        var c = this.v;
        if (c || b == "file") a.push("//"), (b = this.D) && a.push(qd(b, rd, !0), "@"), a.push(O(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.F, c != null && a.push(":", String(c));
        if (c = this.l) this.v && c.charAt(0) != "/" && a.push("/"), a.push(qd(c, c.charAt(0) == "/" ? sd : td, !0));
        (c = this.g.toString()) && a.push("?", c);
        (c = this.C) && a.push("#", qd(c, ud));
        return a.join("")
    };
    V.prototype.resolve = function(a) {
        var b = new V(this),
            c = !!a.A;
        c ? ld(b, a.A) : c = !!a.D;
        c ? b.D = a.D : c = !!a.v;
        c ? b.v = a.v : c = a.F != null;
        var d = a.l;
        if (c) md(b, a.F);
        else if (c = !!a.l) {
            if (d.charAt(0) != "/")
                if (this.v && !this.l) d = "/" + d;
                else {
                    var e = b.l.lastIndexOf("/");
                    e != -1 && (d = b.l.slice(0, e + 1) + d)
                }
            e = d;
            if (e == ".." || e == ".") d = "";
            else if (e.indexOf("./") != -1 || e.indexOf("/.") != -1) {
                d = e.lastIndexOf("/", 0) == 0;
                e = e.split("/");
                for (var f = [], h = 0; h < e.length;) {
                    var k = e[h++];
                    k == "." ? d && h == e.length && f.push("") : k == ".." ? ((f.length > 1 || f.length == 1 && f[0] !=
                        "") && f.pop(), d && h == e.length && f.push("")) : (f.push(k), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? b.l = d : c = a.g.toString() !== "";
        c ? nd(b, od(a.g)) : c = !!a.C;
        c && (b.C = a.C);
        return b
    };

    function ld(a, b, c) {
        a.A = c ? W(b, !0) : b;
        a.A && (a.A = a.A.replace(/:$/, ""))
    }

    function md(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || b < 0) throw Error("Bad port number " + b);
            a.F = b
        } else a.F = null
    }

    function nd(a, b, c) {
        b instanceof pd ? (a.g = b, vd(a.g, a.B)) : (c || (b = qd(b, wd)), a.g = new pd(b, a.B))
    }

    function xd(a) {
        return a instanceof V ? new V(a) : new V(a)
    }

    function W(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }

    function qd(a, b, c) {
        return typeof a === "string" ? (a = encodeURI(a).replace(b, yd), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    }

    function yd(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
    var rd = /[#\/\?@]/g,
        td = /[#\?:]/g,
        sd = /[#\?]/g,
        wd = /[#\?@]/g,
        ud = /#/g;

    function pd(a, b) {
        this.l = this.g = null;
        this.v = a || null;
        this.A = !!b
    }

    function X(a) {
        a.g || (a.g = new Map, a.l = 0, a.v && pc(a.v, function(b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
        }))
    }
    n = pd.prototype;
    n.add = function(a, b) {
        X(this);
        this.v = null;
        a = Y(this, a);
        var c = this.g.get(a);
        c || this.g.set(a, c = []);
        c.push(b);
        this.l += 1;
        return this
    };
    n.remove = function(a) {
        X(this);
        a = Y(this, a);
        return this.g.has(a) ? (this.v = null, this.l -= this.g.get(a).length, this.g.delete(a)) : !1
    };
    n.clear = function() {
        this.g = this.v = null;
        this.l = 0
    };

    function zd(a, b) {
        X(a);
        b = Y(a, b);
        return a.g.has(b)
    }
    n.forEach = function(a, b) {
        X(this);
        this.g.forEach(function(c, d) {
            c.forEach(function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    };

    function Ad(a, b) {
        X(a);
        let c = [];
        if (typeof b === "string") zd(a, b) && (c = c.concat(a.g.get(Y(a, b))));
        else
            for (a = Array.from(a.g.values()), b = 0; b < a.length; b++) c = c.concat(a[b]);
        return c
    }
    n.set = function(a, b) {
        X(this);
        this.v = null;
        a = Y(this, a);
        zd(this, a) && (this.l -= this.g.get(a).length);
        this.g.set(a, [b]);
        this.l += 1;
        return this
    };
    n.get = function(a, b) {
        if (!a) return b;
        a = Ad(this, a);
        return a.length > 0 ? String(a[0]) : b
    };
    n.toString = function() {
        if (this.v) return this.v;
        if (!this.g) return "";
        const a = [],
            b = Array.from(this.g.keys());
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            const f = O(d),
                h = Ad(this, d);
            for (d = 0; d < h.length; d++) {
                var e = f;
                h[d] !== "" && (e += "=" + O(h[d]));
                a.push(e)
            }
        }
        return this.v = a.join("&")
    };

    function od(a) {
        var b = new pd;
        b.v = a.v;
        a.g && (b.g = new Map(a.g), b.l = a.l);
        return b
    }

    function Y(a, b) {
        b = String(b);
        a.A && (b = b.toLowerCase());
        return b
    }

    function vd(a, b) {
        b && !a.A && (X(a), a.v = null, a.g.forEach(function(c, d) {
            var e = d.toLowerCase();
            if (d != e && (this.remove(d), this.remove(e), c.length > 0)) {
                this.v = null;
                d = this.g;
                var f = d.set;
                e = Y(this, e);
                var h = c.length;
                if (h > 0) {
                    const k = Array(h);
                    for (let l = 0; l < h; l++) k[l] = c[l];
                    h = k
                } else h = [];
                f.call(d, e, h);
                this.l += c.length
            }
        }, a));
        a.A = b
    };
    var Bd = (a, b) => {
            b = K(a, 2) || b;
            if (!b) return "";
            if (I(a, 13)) return b;
            const c = /[?&]adurl=([^&]+)/.exec(b);
            if (!c) return b;
            const d = [b.slice(0, c.index + 1)];
            Pb(a).forEach((e, f) => {
                d.push(encodeURIComponent(f) + "=" + encodeURIComponent(e) + "&")
            });
            d.push(b.slice(c.index + 1));
            return d.join("")
        },
        Cd = (a, b = "") => {
            for (const m of a) {
                var c = m.data;
                a = b.length === 0 ? !1 : m.element.matches(b);
                if (m.element.tagName == "A" && !I(c, 1) && !a) {
                    var d = m.element,
                        e = void 0;
                    a = d;
                    d = Bd(c, d.href);
                    if (d.length !== 0) {
                        var f = d;
                        var h = f.search(vc),
                            k = uc(f, 0, "ase",
                                h);
                        if (k < 0) f = null;
                        else {
                            var l = f.indexOf("&", k);
                            if (l < 0 || l > h) l = h;
                            k += 4;
                            f = decodeURIComponent(f.slice(k, l !== -1 ? l : 0).replace(/\+/g, " "))
                        }
                        f === "2" && ((e = Mc.featurePolicy) != null && e.allowedFeatures().includes("attribution-reporting"), f = (4).toString(), e = O("nis"), f = O(f), d = d.replace("?", "?" + e + "=" + f + "&"), a.setAttribute("attributionsrc", ""));
                        Qb(c, xc, 24) !== void 0 && (f = c, e = Qb(f, xc, 24), e != null && (f = f.G, h = f[x], h & 2 || (k = yb(e), k !== e && (e = k, G(f, h, 24, e)))), a.setAttribute("attributionDestination", K(e, 2)), a.setAttribute("attributionSourceNonce",
                            K(e, 1)));
                        e = a;
                        d = ed(d, fd(609), dd);
                        d = mc(d);
                        d !== void 0 && (e.href = d);
                        a.target || (a.target = Wa(E(c, 11)) != null ? K(c, 11) : "_top")
                    }
                }
            }
        };
    const Dd = new WeakMap;

    function Ed(a) {
        var b = Fd;
        const c = fa(a),
            d = ([, ...f]) => b(c, f),
            e = ([f, ...h]) => a.apply(f, h);
        return function(...f) {
            var h = this || q,
                k = Dd.get(h);
            k || (k = {}, Dd.set(h, k));
            h = k;
            f = [this, ...f];
            k = d ? d(f) : f;
            return Object.prototype.hasOwnProperty.call(h, k) ? h[k] : h[k] = e(f)
        }
    }

    function Fd(a, b) {
        a = [a];
        for (let c = b.length - 1; c >= 0; --c) a.push(typeof b[c], b[c]);
        return a.join("\v")
    };

    function Gd(a, b, c) {
        if (!c && !b) return a;
        if (!c) {
            c = tc(a, "bg", b);
            if (c.length <= 6E4) return c;
            c = "9"
        }
        c != "8" && c != "9" || Hd(b);
        return tc(a, "bg", c)
    }
    var Hd = Ed(a => {
        hd("bg", {
            bg: a
        }, 1)
    });
    var Id = {
            Fa: "c",
            Ga: "d",
            Wa: "p",
            LOCATION: "l",
            hb: "t",
            bb: "l_m",
            ab: "l_l",
            cb: "l_s",
            Ya: "l_d",
            Xa: "l_c",
            eb: "l_t",
            Za: "l_i",
            gb: "q",
            fb: "opfc"
        },
        Jd = {
            d: 11,
            l: 41,
            q: 76,
            l_m: 77,
            l_l: 78,
            l_s: 79,
            l_d: 80,
            l_c: 81,
            l_t: 82,
            l_i: 83
        },
        Kd = {
            l_m: "location_format_map",
            l_l: "location_format_landing_page",
            l_s: "location_format_store_info",
            l_d: "location_format_directions",
            l_t: "location_format_text",
            l_i: "location_format_image"
        },
        Ld = {
            d: 34,
            l: 17,
            q: 17,
            l_m: 33,
            l_l: 8,
            l_s: 35,
            l_d: 34,
            l_c: 14,
            l_t: 0,
            l_i: 9,
            opfc: 12
        },
        Md = {
            label: "label",
            event_source: "es",
            event_data: "d"
        };
    const Z = Ed((a, b, c, d = {}) => {
        d.i = a.creativeId;
        d.t = a.templateId;
        d.c = b;
        d.m = c;
        d.lp = a.layoutPath;
        a.experimentId && (d.e = a.experimentId);
        a.qa && (d.gqi = a.qa);
        a.ua && (d.qqi = a.ua);
        a.Da(d)
    });

    function Nd(a) {
        return (b, c, d) => {
            const e = {};
            d && (e.jsl = d);
            c && (e.jsf = c);
            Z(a, "j", b, e)
        }
    }

    function Od(a, b) {
        try {
            b()
        } catch (d) {
            a = Nd(a);
            let e = d.toString();
            d.name && e.indexOf(d.name) == -1 && (e += ": " + d.name);
            d.message && e.indexOf(d.message) == -1 && (e += ": " + d.message);
            if (d.stack) a: {
                b = d.stack;
                var c = e;
                try {
                    b.indexOf(c) == -1 && (b = c + "\n" + b);
                    let f;
                    for (; b != f;) f = b, b = b.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                    e = b.replace(RegExp("\n *", "g"), "\n");
                    break a
                } catch (f) {
                    e = c;
                    break a
                }
                e = void 0
            }
            a(e, d.lineNumber, d.fileName)
        }
    }

    function Pd(a) {
        hd("html5-mon", a, 1)
    };
    const Qd = class {
        constructor() {
            this.g = new XMLHttpRequest
        }
        get(a, b) {
            if (this.g && (this.g.readyState == 0 || this.g.readyState == 4)) try {
                this.g.onreadystatechange = r(this.l, this, b), this.g.open("GET", a, !0), this.g.send(null)
            } catch (c) {
                b()
            }
        }
        l(a) {
            this.g.readyState == 4 && a()
        }
    };

    function Rd(a, b, c, d = !1) {
        c = c || function() {
            var f = window.top.location,
                h = kc(b, [$b]);
            nc(f, ed(h, fd(606)))
        };
        var e = new Qd;
        d ? (e.get(a, () => {}), setTimeout(c, 0)) : e.get(a, c)
    }

    function Sd(a) {
        a.D || (a.A || a.l ? a.v || Td(a) : (a.v && (a.v = !1, window.clearTimeout(a.L), a.L = void 0), Td(a)))
    }

    function Td(a) {
        if (!a.D) {
            a.D = !0;
            a.K = !0;
            var b = a.F == 0 ? 0 : a.F - a.ca,
                c = a.H == 0 ? 0 : a.H - a.ja,
                d = a.V == 0 ? 0 : a.V - a.ma,
                e = a.B && a.B.g ? a.B.g.status : "noreq",
                f = a.g ? a.g.status : "noreq",
                h = /&ctype=\d+/.exec(a.J);
            h = h ? h[0] : "";
            a.la++;
            a.da = ["//pagead2.googlesyndication.com/pagead/gen_204?id=ctc_metrics", h, "&dc=" + a.fa, "&ec=0", "&rc=" + a.la, "&ct=0", "&ctc_num=" + a.N, "&ctc_gvn=" + a.C, "&ctc_cs_time=" + b, "&ctc_gv_time=" + c, "&ctc_to_time=" + d, "&ctc_cs_status=" + e, "&ctc_gv_status=" + f].join("");
            (new Qd).get(a.da, r(a.ka, a));
            window.setTimeout(r(a.ka,
                a), 2E3)
        }
    }

    function Ud(a) {
        const b = () => {
            a.g && a.g.readyState == 4 && (a.l = !1, a.g.status == 200 && a.g.responseText && a.g.responseText.length > 0 && (a.C = "tel:" + a.g.responseText))
        };
        a.l || a.C != null || (a.l = !0, a.g = new XMLHttpRequest, a.g.onreadystatechange = b, a.g.open("GET", a.ea, !0), a.g.send(null));
        a.A || a.B != null || (a.A = !0, a.B = new Qd, a.B.get(a.J, () => {
            a.A = !1
        }));
        a.v || (a.C == null ? (a.v = !0, window.setTimeout(r(a.M, a), a.ha)) : a.M())
    }

    function Vd(a) {
        if (a.ha > 0) Ud(a);
        else {
            var b = Date.now();
            a.A || a.l || a.v ? a.fa++ : a.xa = b;
            var c = !1,
                d = !1,
                e = !1;
            a.A || (a.A = !0, a.D = !1, a.ca = b, a.F = b, d = !0);
            a.l || a.C != null || (a.l = !0, a.D = !1, a.ja = b, a.H = b, e = !0);
            a.v || (a.v = !0, a.D = !1, a.ma = b, c = !0);
            c && (a.L = window.setTimeout(r(a.ya, a), 2E3));
            d && (a.B = new Qd, a.B.get(a.J, r(a.wa, a)));
            if (e) try {
                a.g = new XMLHttpRequest, a.g.onreadystatechange = r(a.ia, a), a.g.open("GET", a.ea, !0), a.g.send(null)
            } catch (f) {
                a.ia()
            }
        }
    }
    var Wd = class {
        constructor(a, b, c, d, e = 0) {
            this.J = a;
            this.ea = b;
            this.da = null;
            this.N = c;
            this.ga = d;
            this.v = this.K = this.D = this.l = this.A = !1;
            this.L = void 0;
            this.g = this.B = this.C = null;
            this.fa = this.xa = this.la = this.H = this.F = this.V = this.ja = this.ca = this.ma = 0;
            this.ha = e
        }
        wa() {
            this.F = Date.now();
            this.A = !1;
            Sd(this)
        }
        ia() {
            try {
                this.g && this.g.readyState == 4 && this.l && (this.H = Date.now(), this.l = !1, this.g.responseText && this.g.responseText.length > 0 && (this.C = "tel:" + this.g.responseText))
            } finally {
                Sd(this)
            }
        }
        ya() {
            this.V = Date.now();
            this.v = !1;
            Sd(this)
        }
        M() {
            this.v = this.l = this.A = !1;
            if (this.ga != null) this.ga(this.C || this.N);
            else {
                var a = window.top.location,
                    b = kc(this.C || this.N, [$b]);
                nc(a, ed(b, fd(607)))
            }
        }
        ka() {
            this.K && (this.K = !1, this.M())
        }
    };

    function Xd(a, b, c, d = 0) {
        Vd(new Wd(a, b, c, null, d))
    }
    ea("ctc_bd", Rd);
    ea("init_gvc", function(a, b, c, d, e = 0) {
        return new Wd(a, b, c, d, e)
    });
    ea("ctc_bd_gv", function(a) {
        Vd(a)
    });

    function Yd(a, b, c) {
        U.call(this);
        this.v = a;
        this.C = b || 0;
        this.A = c;
        this.B = r(this.oa, this)
    }
    ka(Yd, U);
    n = Yd.prototype;
    n.P = 0;
    n.W = function() {
        Yd.Ea.W.call(this);
        Zd(this);
        delete this.v;
        delete this.A
    };
    n.start = function(a) {
        Zd(this);
        var b = this.B;
        a = a !== void 0 ? a : this.C;
        if (typeof b !== "function")
            if (b && typeof b.handleEvent == "function") b = r(b.handleEvent, b);
            else throw Error("Invalid listener argument");
        this.P = Number(a) > 2147483647 ? -1 : q.setTimeout(b, a || 0)
    };

    function Zd(a) {
        a.isActive() && q.clearTimeout(a.P);
        a.P = 0
    }
    n.isActive = function() {
        return this.P != 0
    };
    n.oa = function() {
        this.P = 0;
        this.v && this.v.call(this.A)
    };
    const $d = ["Custom_layout", "destinationUrl", "displayUrl"];

    function ae(a, b, c) {
        be(a, b.d);
        const d = ce(b.r);
        if (!b.o && (de(a, b.d) || d == "c")) {
            a.C = b.br || "";
            a.B = b.be || null;
            var e = () => {
                    ee(a, b.f, b.c, d, c)
                },
                f = window.window_focus_for_click;
            if (f) {
                const h = document.createEvent("MouseEvents");
                h.initMouseEvent("click", !0, !1, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
                f.handleClick(h)
            }
            a.g ? Od(a.g, e) : e()
        }
    }

    function fe(a) {
        const b = K(a.config, 17) || Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ Date.now()).toString(36);
        Q.addEventListener("message", r(function(c) {
            var d = c.data,
                e = typeof d;
            (e == "object" && d != null || e == "function") && c.data.n == b && c.data.er && (d = c.data.er, d.hasOwnProperty("f") ? ae(this, c.data.er, ua()) : d.hasOwnProperty("i") && I(this.config, 10) ? this.H(d.i) : d.hasOwnProperty("u") && I(this.config, 11) && this.J(d.u))
        }, a), !1);
        a.A.sendMessage("exit-pmcfg", b)
    }

    function be(a, b) {
        Array.isArray(b) && (a.v.push(b[b.length - 1]), de(a, b) ? (a = a.F, Zd(a), a.oa()) : a.F.isActive() || a.F.start())
    }

    function de(a, b) {
        var c;
        if (!(c = !Array.isArray(b)) && (c = a.K(b[b.length - 1]))) {
            var d = b[b.length - 1];
            b = a.l.google_width;
            c = a.l.google_height;
            a.D && (b = a.D.clientWidth, c = a.D.clientHeight);
            c = new Hc(b, c);
            b = d.t;
            var e = ge(a, d);
            d = e.x;
            e = e.y;
            const f = J(a.config, 6),
                h = J(a.config, 7),
                k = c.width - f - 1,
                l = c.height - h - 1,
                m = J(a.config, 1);
            c = I(a.config, 2) && (d <= m || c.width - d <= m) && e <= m;
            c = (b < 0 || b >= J(a.config, 8)) && d >= f && d <= k && e >= h && e <= l && !c
        }
        return c
    }

    function he(a, b) {
        if (!a.v || a.v.length == 0) return b;
        var c = a.v;
        a = ge(a, c[c.length - 1]);
        return P(b, "nx", Math.round(a.x), "ny", Math.round(a.y))
    }

    function ie(a, b, c, d) {
        if (b && $d.indexOf(b) != -1) throw a.g && Z(a.g, "be", "5"), Error();
        if (d) {
            var e = Ld[d];
            var f = Kd[d]
        }
        if (d = b) d = (d = je(a, "adData")) && d[0] && d[0][b];
        d || (f && I(a.config, 3) ? (c = f, (f = a.l.redirect_url) ? (c && (f = P(f, "label", c)), e != void 0 && (f = P(f, "nb", e)), c = f) : (a.g && Z(a.g, "be", "3"), c = "")) : (f = a.l.redirect_url) ? (c && f.indexOf("ctype=38") == -1 && (f = P(f, "ctype", c)), e != void 0 && (f = P(f, "nb", e)), c = f) : (a.g && Z(a.g, "be", "3"), c = ""), d = c);
        d = he(a, d);
        d = Gd(d, a.C, a.B);
        a.g && ke(d) && Z(a.g, "be", "1:" + (b || ""));
        return d
    }

    function le(a, b, c) {
        let d = b && Jd[b];
        b = b && Ld[b];
        const e = a.l.ctc_formatted_phone_number;
        let f = a.l.ctc_click_tracking_url;
        if (e && f) {
            var h = a.l.ctc_google_voice_url;
            h && (d = 51);
            d && (f = P(f, "ctype", d));
            b && (f = P(f, "nb", b));
            h ? Xd(f, h, e, J(a.config, 4)) : Rd(f, e, null, c)
        }
    }

    function me(a, b) {
        return (a = je(a, "locationData")) && a[0] && a[0][b]
    }

    function ne(a, b) {
        return b == "d" || b == "l_d" ? me(a, "exit_url_directions") : me(a, "exit_url_place")
    }

    function oe(a, b) {
        const c = Date.now();
        if (c - a.L > J(a.config, 14)) {
            const d = Fc(b, !0);
            b = d ? navigator.sendBeacon ? navigator.sendBeacon(id(d.na, "&ri=1"), "") ? {
                I: d.finalUrl,
                S: !0
            } : {
                I: id(b, "&ri=2"),
                S: !1
            } : {
                I: id(b, "&ri=16"),
                S: !1
            } : {
                I: b,
                S: !1
            };
            const {
                I: e,
                S: f
            } = b;
            f && (a.L = c);
            return {
                I: e,
                ta: !0
            }
        }
        return {
            I: b,
            ta: !1
        }
    }

    function pe(a, b) {
        var c = ne(a, b),
            d = Jd[b];
        const e = Ld[b];
        (b = Kd[b]) && I(a.config, 3) ? (d = xd(a.l.google_click_url || ""), b && d.g.set("label", b), e != void 0 && d.g.set("nb", e), c ? (d.g.remove("adurl"), d.g.toString() !== "" ? c = d.toString() + "&adurl=" + O(c) : (d.g.set("adurl", c), c = d.toString())) : c = d.toString()) : (b = xd(a.l.google_click_url || ""), d && b.g.get("ctype") != "38" && b.g.set("ctype", d), e != void 0 && b.g.set("nb", e), c ? (b.g.remove("adurl"), b.g.toString() !== "" ? c = b.toString() + "&adurl=" + O(c) : (b.g.set("adurl", c), c = b.toString())) : c =
            b.toString());
        c = he(a, c);
        c = Gd(c, a.C, a.B);
        a.g && ke(c) && Z(a.g, "be", "1:");
        return c
    }

    function ke(a) {
        a = (new V(a)).g.get("adurl");
        return a == void 0 || a == "" || a == "undefined"
    }

    function qe(a) {
        if ((a = a.l.google_td_ad_signals) && window.fence) {
            var b = new Cc;
            a = Lb(b, 1, Va(a));
            a = Lb(a, 9, Sa(4));
            a = Lb(a, 10, Va(Date.now().toString()));
            Lb(a, 9, Sa(7));
            let c;
            window == null || (c = window.fence) == null || c.setReportEventDataForAutomaticBeacons({
                eventType: "reserved.top_navigation_start",
                eventData: JSON.stringify(a),
                destination: ["buyer"],
                once: !0
            });
            let d;
            window == null || (d = window.fence) == null || d.reportEvent({
                eventType: "click",
                destination: ["component-seller"]
            })
        }
    }

    function je(a, b) {
        return (a = a.l.google_template_data || void 0) && a[b]
    }

    function ge(a, b) {
        a = H(Mb(a.config), 0) || 1;
        return {
            x: b.x * a,
            y: b.y * a
        }
    }
    var re = class {
        constructor(a, b, c) {
            this.A = a;
            this.l = b;
            this.config = c;
            (a = this.l.monitoring) && Pd && (this.g = {
                creativeId: a.creativeId || -1,
                templateId: a.templateId || -1,
                experimentId: a.experimentId,
                reportErrors: a.reportErrors || !1,
                reportPerf: a.reportPerf || !1,
                Da: Pd,
                layoutPath: a.layoutPath,
                qa: a.gqi,
                ua: a.qqi,
                rumUrl: a.rumUrl,
                kb: a.rumc,
                jb: a.navStart
            });
            this.D = K(c, 9) !== "" ? document.getElementById(K(c, 9)) : null;
            this.F = new Yd(this.N, 1E4, this);
            this.v = [];
            this.C = "";
            this.B = null;
            this.L = 0;
            this.A.registerApplicationHandler("exit",
                d => {
                    ae(this, d)
                });
            I(this.config, 16) || fe(this);
            I(c, 10) && this.A.registerApplicationHandler("interactions", r(this.H, this));
            I(c, 11) && this.A.registerApplicationHandler("url_update", r(this.J, this))
        }
        K(a) {
            return a != null && typeof a.x === "number" && typeof a.y === "number" && typeof a.t === "number" && typeof a.e === "number"
        }
        N() {
            if (Array.isArray(this.v) && this.g) {
                var a = va(Array.prototype.filter.call(this.v, this.K, void 0), function(b) {
                    const c = ge(this, b);
                    return [c.x.toFixed(), c.y.toFixed(), b.t, b.e].join("_")
                }.bind(this));
                a = (de(this,
                    this.v) ? "1!" : "0!") + a.length + "!" + (this.v.length - a.length) + "!" + a.join("~");
                Z(this.g, "cd", a);
                this.v = []
            }
        }
        H(a) {
            a = a.i;
            var b = this.l.google_ait_url || "";
            for (const m in Md)
                if (m in a) {
                    for (var c = Md[m], d = a[m], e = b, f = c, h = e.search(vc), k = 0, l = [];
                        (b = uc(e, k, f, h)) >= 0;) l.push(e.substring(k, b)), k = Math.min(e.indexOf("&", b) + 1 || h, h);
                    l.push(e.slice(k));
                    b = l.join("").replace(wc, "$1");
                    b = tc(b, c, d)
                }
            Lc(Q, b)
        }
        J(a) {
            const b = je(this, "adData");
            a = a.f;
            for (const c in a) b[0][c] = a[c]
        }
    };

    function ce(a) {
        a: {
            for (b in Id)
                if (Id[b] == a) {
                    var b = !0;
                    break a
                }
            b = !1
        }
        if (b && a != "opfc") return a
    };

    function se(a, b) {
        a.v && a.send({
            t: 2,
            s: a.C,
            n: b
        })
    }

    function te(a, b) {
        const c = ue(a, b);
        if (c.Y) {
            var d = c.T.length;
            for (let e = 0; e < d; e++) a.sendMessage(b, c.T[e]);
            c.T = []
        }
    }

    function ve(a, b) {
        const c = b.n;
        switch (b.t) {
            case 1:
                b = b.d;
                ue(a, c).X(b);
                break;
            case 2:
                ue(a, c).Y = !0, te(a, c)
        }
    }

    function ue(a, b) {
        a.l[b] || (a.l[b] = {
            Y: !1,
            T: [],
            X: null
        });
        return a.l[b]
    }
    class we {
        constructor(a, b) {
            this.F = a;
            this.C = b;
            this.l = {};
            this.v = !1
        }
        registerApplicationHandler(a, b) {
            ue(this, a).X = b;
            se(this, a)
        }
        sendMessage(a, b) {
            const c = ue(this, a);
            this.v && c.Y ? this.send({
                t: 1,
                s: this.C,
                n: a,
                d: b
            }) : c.T.push(b)
        }
        isInitialized() {
            return this.v
        }
    };

    function ee(a, b, c, d, e) {
        qe(a);
        if (d == "l_c" || d == "t") le(a, d, I(a.config, 5));
        else if (d != "c") {
            c = c || d && Jd[d];
            if (d == "l_m" || d == "l_s" || d == "l_d" || d == "l" || d == "d") {
                var f = pe(a, d);
                Lc(Q, f);
                f = ne(a, d)
            } else f = d == "l_t" || d == "l_i" || d == "l_l" ? ie(a, b, c, d) : ie(a, b, c);
            if (a.M && typeof q.g == "function" && d != "opfc") f = document.createEvent("MouseEvents"), f.initMouseEvent("click", !0, !1, window, 1), q.g(f, void 0, k => {
                k.preventDefault();
                ee(a, b, c, "opfc", e)
            });
            else {
                if (d = K(a.config, 18).length > 0) {
                    var h;
                    const k = ((h = Mc.featurePolicy) == null ? 0 : h.allowsFeature("attribution-reporting")) ?
                        3 : 2;
                    f = P(f, "nis", k)
                }
                if (f != null && f.indexOf("dbm/clk") === -1 && Fc(f) !== null && I(a.config, 13)) {
                    const {
                        I: k,
                        ta: l
                    } = oe(a, f);
                    if (!l) return;
                    f = k
                }
                h = d ? [`attributionsourceeventid=${K(a.config,18)}`, `attributiondestination=${K(a.config,19)}`, `attributionreportto=${K(a.config,20)}`, `attributionexpiry=${K(a.config,21)}`].join() : void 0;
                Q.open(f, "_blank", h) || (a.g && Z(a.g, "be", "4"), nc(Q.top.location, ed(f, fd(604))))
            }
        }
    }
    class xe extends re {
        constructor(a, b, c) {
            super(a, b, c);
            this.M = I(c, 22)
        }
    };

    function ye(a, b) {
        if (a.D) {
            a.g = b.ports && b.ports[0];
            if (!a.g) return !1;
            a.g.addEventListener("message", r(function(c) {
                ve(this, c.data)
            }, a), !1);
            a.g.start()
        } else a.A = b;
        return !0
    }
    class ze extends we {
        constructor(a, b) {
            super(a, b);
            this.D = !!window.MessageChannel;
            this.A = this.g = null;
            window.addEventListener && (this.B = c => {
                const d = c.data;
                if (d.s === this.C && (this.D ? c.source === this.F : c.source.parent === this.F))
                    if (d.t === 0) {
                        if (ye(this, c)) {
                            this.v = !0;
                            for (let e in this.l) this.l[e].X && se(this, e), te(this, e)
                        }
                    } else this.A = c, ve(this, d)
            }, window.addEventListener("message", this.B, !1))
        }
        send(a) {
            this.D ? this.g && this.g.postMessage(a) : this.A.source.parent.postMessage(a, "*")
        }
        dispose() {
            window.removeEventListener("message",
                this.B, !1);
            delete this.B;
            delete this.g;
            delete this.A
        }
    };

    function Ae(a, b) {
        a = a.getElementsByTagName("META");
        for (let c = 0; c < a.length; ++c)
            if (a[c].getAttribute("name") === b) return a[c].getAttribute("content") || "";
        return ""
    };

    function Be(a) {
        if (!(a.g.length > 0)) {
            var b = Ae(a.body, "environment");
            for (const c of b.split("|")) c && a.g.push(c)
        }
    }
    var Ce = class {
        constructor(a) {
            this.body = a;
            this.g = [];
            Ae(a, "sampling_mod");
            var b = Ae(a, "namespace");
            if (!b) {
                b = "ns-" + (0, Math.random)().toString(36).substr(2, 5);
                a: {
                    var c = a.getElementsByTagName("META");
                    for (let d = 0; d < c.length; ++d)
                        if (c[d].getAttribute("name") === "namespace" && c[d].getAttribute("index") === (0).toString()) {
                            c[d].setAttribute("content", b);
                            break a
                        }
                    c = a.querySelector("#mys-meta");c || (c = document.createElement("div"), c.id = "mys-meta", c.style.position = "absolute", c.style.display = "none", a.appendChild(c));a =
                    document.createElement("META");a.setAttribute("name", "namespace");a.setAttribute("content", b);a.setAttribute("index", (0).toString());c.appendChild(a)
                }
            }
            Be(this)
        }
    };
    var De = Wb(class extends L {});
    let Ee;
    var Fe = class {
        pa() {}
        setAttribute() {}
        setData() {}
        send() {}
        tick() {}
    };
    var Ge = class {
        constructor(a) {
            this.context = a;
            this.pingback = Ee || new Fe;
            this.runtime = {};
            this.pingback.pa(1)
        }
        g() {}
    };
    var He = class {
        constructor() {
            this.g = !(!window.mys || !window.mys.pingback);
            this.l = 0
        }
        pa(a) {
            this.l = a;
            this.g && this.setData(43, Date.now() - window.mys.pingback.getBaseTime())
        }
        setAttribute(a, b) {
            this.g && window.mys.pingback.setAttribute(a, b)
        }
        setData(a, b) {
            this.g && window.mys.pingback.setData(a, b, this.l)
        }
        send(a) {
            this.g && window.mys.pingback.send(a)
        }
        tick(a, b) {
            this.g && (this.setData(a, Date.now() - window.mys.pingback.getBaseTime()), this.send(b))
        }
    };

    function Ie(a, b, c, d) {
        a = new ze(a.contentWindow, c);
        a.sendMessage("adData", b);
        a.registerApplicationHandler("exit", d);
        return a
    };

    function Je(a, b, c) {
        var d = Q.location.origin !== "null" ? Q.location.origin : Q.location.protocol.startsWith("http") ? Q.location.protocol + "//" + Q.location.host : "*";
        b = b + "#t=" + encodeURIComponent(String(a.runtime.secureChannelToken)) + "&p=" + encodeURIComponent(d);
        a = jc(b);
        if (!a) throw Error("URL not recognized as safe: " + b);
        c.removeAttribute("srcdoc");
        b = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");
        c.setAttribute("sandbox",
            "");
        for (d = 0; d < b.length; d++) c.sandbox.supports && !c.sandbox.supports(b[d]) || c.sandbox.add(b[d]);
        a = mc(a);
        a !== void 0 && (c.src = a)
    }

    function Ke(a, b, c) {
        const d = {};
        a = b && b !== 1 ? {
            width: a.width / b,
            height: a.height / b
        } : a;
        Object.assign(d, {
            width: `${a.width}px`,
            height: `${a.height}px`
        });
        b && b !== 1 && Object.assign(d, {
            transform: `scale(${b},${b})`,
            "transform-origin": `top ${c?"right":"left"}`
        });
        return d
    }

    function Le(a, b) {
        if (b !== "") {
            if (a.A.has(b)) return;
            a.pingback.setData("l", b);
            a.A.add(b)
        }
        a.pingback.setData("t", Date.now() - a.B);
        a.pingback.send()
    }

    function Me(a, b) {
        if (b) {
            var c = b.querySelector(".advertiser-provided-media-bundle-responsive");
            if (c) {
                var d = a.runtime.root_element_selector || "#mys-content",
                    e = a.runtime.slot_size,
                    f = Bc(a.runtime.exit_config || ""),
                    h = a.runtime.creative_id,
                    k = document.createElement("iframe");
                k.style.position = c.style.position;
                k.style.top = c.style.top;
                k.style.border = "0";
                k.title = "Advertisement";
                k.style.overflow = "hidden";
                k.width = k.height = "100%";
                k.id = "google_ad_" + (h || "");
                (b = b.querySelector(d)) && Object.assign(b.style, Ke(e, H(Mb(f),
                    0) || 1, getComputedStyle(b).direction === "rtl"));
                for (k.scrolling = "no"; c.firstChild;) c.removeChild(c.firstChild);
                c.appendChild(k);
                e = String(c.getAttribute("data-bundle-url"));
                c = a.runtime.adData;
                a.l = Ie(k, c, String(a.runtime.secureChannelToken), l => {
                    a.v && !l.o && (l = l.d) && l.length !== 0 && (l = l[l.length - 1]) && typeof l.x === "number" && typeof l.y === "number" && (l = new MouseEvent("click", {
                        clientX: l.x,
                        clientY: l.y,
                        cancelable: !0
                    }), a.v.dispatchEvent(l))
                });
                a.l ? (new xe(a.l, c, f), Je(a, e, k)) : Le(a, "ERROR_noSecureChannel")
            } else Le(a,
                "WARNING_noMediaBundleHolder")
        }
    }
    var Ne = class extends Ge {
        constructor(a) {
            super(a);
            this.A = new Set;
            this.B = Date.now()
        }
        g(a) {
            if (a && (this.v = a.querySelector("#html5-display-area-och-anchor") || void 0, Me(this, a), a = a.querySelector("meta[data-asoch-meta]")) && (a = new Ac(JSON.parse(a.getAttribute("data-asoch-meta"))), I(a, 3))) {
                var b = [];
                if (b.length > 0) var c = b;
                else try {
                    c = Mc.querySelectorAll("*[data-asoch-targets]")
                } catch (m) {
                    c = []
                }
                b = a.G;
                var d = b[x];
                b = Ob(b, d, F(b, d, 1), 1, zc);
                d = [];
                for (let m = 0; m < c.length; ++m) {
                    var e = c[m].getAttribute("data-asoch-targets"),
                        f =
                        e.split(","),
                        h = !0;
                    for (let p of f)
                        if (!b.has(p)) {
                            h = !1;
                            break
                        }
                    if (h) {
                        h = b.get(f[0]);
                        for (e = 1; e < f.length; ++e) {
                            var k = h;
                            h = b.get(f[e]);
                            var l = k.G;
                            k = Ib(k, l, l[x], !1);
                            k = Vb(k);
                            h = Vb(h);
                            l = Math.max(k.length, h.length);
                            for (let p = 0; p < l; ++p) k[p] == null && (k[p] = h[p]);
                            h = new zc(k)
                        }
                        f = Pb(h);
                        Ta(E(h, 5)) != null && f.set("nb", H(Ta(E(h, 5)), 0).toString());
                        d.push({
                            element: c[m],
                            data: h
                        })
                    } else hd("gdn-asoch", {
                        type: 1,
                        data: e
                    })
                }
                Cd(d, K(a, 10))
            }
        }
    };
    (function(a) {
        Ee = new He;
        const b = document.getElementById("mys-content");
        if (b) {
            var c = new Ce(b),
                d = new a(c);
            if (a = Ae(b, "runtime_data")) a = JSON.parse(a), Object.assign(d.runtime, a);
            a = De(Ae(c.body, "render_config") || "[]");
            Be(c);
            c.g.indexOf("amp") >= 0 || I(Rb(Rb(a, Ec, 1), Dc, 10), 16) || (a = mys.engine ? mys.engine.stage() : 0, (a & 1) === 0 && c.body.addEventListener("overallStart", () => {}), (a & 4) !== 0 && d.g(b), c.body.addEventListener("browserStart", () => {}), c.body.addEventListener("browserReady", () => {
                d.g(b)
            }), c.body.addEventListener("browserQuiet",
                () => {}))
        }
    })(class extends Ne {});
}).call(this);