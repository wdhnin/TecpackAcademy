(function() {
    'use strict';
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var q = this || self;

    function aa(a) {
        q.setTimeout(() => {
            throw a;
        }, 0)
    };
    var ba, ca;
    a: {
        for (var da = ["CLOSURE_FLAGS"], ea = q, fa = 0; fa < da.length; fa++)
            if (ea = ea[da[fa]], ea == null) {
                ca = null;
                break a
            }
        ca = ea
    }
    var ha = ca && ca[610401301];
    ba = ha != null ? ha : !1;
    var r;
    const ia = q.navigator;
    r = ia ? ia.userAgentData || null : null;

    function ka(a) {
        return ba ? r ? r.brands.some(({
            brand: b
        }) => b && b.indexOf(a) != -1) : !1 : !1
    }

    function y(a) {
        var b;
        a: {
            if (b = q.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return b.indexOf(a) != -1
    };

    function A() {
        return ba ? !!r && r.brands.length > 0 : !1
    }

    function la() {
        return A() ? ka("Chromium") : (y("Chrome") || y("CriOS")) && !(A() ? 0 : y("Edge")) || y("Silk")
    };

    function ma(a) {
        ma[" "](a);
        return a
    }
    ma[" "] = function() {};
    !y("Android") || la();
    la();
    y("Safari") && (la() || (A() ? 0 : y("Coast")) || (A() ? 0 : y("Opera")) || (A() ? 0 : y("Edge")) || (A() ? ka("Microsoft Edge") : y("Edg/")) || A() && ka("Opera"));
    let na;

    function pa() {
        const a = Error();
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = "incident";
        aa(a)
    };

    function B(a) {
        return Array.prototype.slice.call(a)
    };
    var C = Symbol(),
        qa = Symbol();

    function ra(a, b) {
        b[C] = (a | 0) & -30975
    }

    function sa(a, b) {
        b[C] = (a | 34) & -30941
    };
    var ta = {},
        ua = {};

    function va(a) {
        return !(!a || typeof a !== "object" || a.g !== ua)
    }

    function wa(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function xa(a) {
        return !Array.isArray(a) || a.length ? !1 : (a[C] | 0) & 1 ? !0 : !1
    }
    var ya;
    const za = [];
    za[C] = 55;
    ya = Object.freeze(za);
    var Aa = Object.freeze({});
    var Ba = typeof q.BigInt === "function" && typeof q.BigInt(0) === "bigint";
    const Ca = Number.MIN_SAFE_INTEGER.toString(),
        Da = Ba ? BigInt(Number.MIN_SAFE_INTEGER) : void 0,
        Ea = Number.MAX_SAFE_INTEGER.toString(),
        Fa = Ba ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;

    function Ga(a, b) {
        if (a.length > b.length) return !1;
        if (a.length < b.length || a === b) return !0;
        for (let c = 0; c < a.length; c++) {
            const d = a[c],
                e = b[c];
            if (d > e) return !1;
            if (d < e) return !0
        }
    };

    function Ha(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a >>> 0 : void 0
    }

    function Ia(a) {
        if (a != null && typeof a !== "string") throw Error();
        return a
    }

    function Ja(a, b, c) {
        if (a != null && typeof a === "object" && a.s === ta) return a;
        if (Array.isArray(a)) {
            var d = a[C] | 0,
                e = d;
            e === 0 && (e |= c & 32);
            e |= c & 2;
            e !== d && (a[C] = e);
            return new b(a)
        }
    };

    function Ka(a) {
        D === void 0 && (D = typeof Proxy === "function" ? La(Proxy) : null);
        if (!D || !Ma()) return a;
        let b = Na(a);
        if (b) return b;
        if (Math.random() > .01) return a;
        Oa(a);
        b = new D(a, {
            set(c, d, e) {
                Pa();
                c[d] = e;
                return !0
            }
        });
        Sa(a, b);
        return b
    }

    function Pa() {
        pa()
    }
    let E = void 0,
        Ta = void 0;

    function Na(a) {
        let b;
        return (b = E) == null ? void 0 : b.get(a)
    }

    function Sa(a, b) {
        (E || (E = new F)).set(a, b);
        (Ta || (Ta = new F)).set(b, a)
    }
    let D = void 0,
        F = void 0;

    function Ma() {
        F === void 0 && (F = typeof WeakMap === "function" ? La(WeakMap) : null);
        return F
    }

    function La(a) {
        try {
            return a.toString().indexOf("[native code]") !== -1 ? a : null
        } catch (b) {
            return null
        }
    }
    let Ua = void 0;

    function Oa(a) {
        if (Ua === void 0) {
            const b = new D([], {});
            Ua = Array.prototype.concat.call([], b).length === 1
        }
        Ua && typeof Symbol === "function" && Symbol.isConcatSpreadable && (a[Symbol.isConcatSpreadable] = !0)
    }

    function Va(a, b) {
        if (Ma() && !(Wa(a, b) || Math.random() > .01)) {
            var c = a.length,
                d = {
                    length: c
                };
            for (var e = 0; e < Math.min(c, 10); e++) {
                if (c <= 10) var h = e;
                else {
                    h = c / 10;
                    const f = Math.floor(e * h);
                    h = f + Math.floor(Math.random() * (Math.floor((e + 1) * h) - f))
                }
                d[h] = a[h]
            }
            Xa(a, d) ? (c = H || (H = new F), e = c.get(b), e || (e = new F, c.set(b, e)), e.set(a, d)) : (pa(), I(a, b))
        }
    }

    function Ya(a, b) {
        const c = Wa(a, b);
        c && !Xa(a, c) && (Za(), I(a, b))
    }

    function Xa(a, b) {
        if (a.length !== b.length) return !1;
        for (const e in b) {
            var c = Number(e),
                d;
            if (d = Number.isInteger(c)) d = a[c], c = b[c], d = !(Number.isNaN(d) ? Number.isNaN(c) : d === c);
            if (d) return !1
        }
        return !0
    }

    function $a(a) {
        var b;
        if (a && (b = H) != null && b.has(a) && (b = a.i))
            for (let c = 0; c < b.length; c++) {
                const d = b[c];
                if (c === b.length - 1 && wa(d))
                    for (const e in d) {
                        const h = d[e];
                        Array.isArray(h) && Ya(h, a)
                    } else Array.isArray(d) && Ya(d, a)
            }
    }

    function Za() {
        pa()
    }
    let H = void 0;

    function Wa(a, b) {
        let c, d;
        return (c = H) == null ? void 0 : (d = c.get(b)) == null ? void 0 : d.get(a)
    }

    function I(a, b) {
        let c, d;
        (c = H) == null || (d = c.get(b)) == null || d.delete(a)
    };
    let ab;

    function bb(a, b) {
        ab = b;
        a = new a(b);
        ab = void 0;
        return a
    };

    function cb(a, b) {
        return db(b)
    }

    function db(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "bigint":
                return (Ba ? a >= Da && a <= Fa : a[0] === "-" ? Ga(a, Ca) : Ga(a, Ea)) ? Number(a) : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (xa(a)) return
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

    function eb(a, b, c) {
        a = B(a);
        var d = a.length;
        const e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (const h in e) b[h] = c(e[h])
        }
        return a
    }

    function fb(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = xa(a) ? void 0 : e && (a[C] | 0) & 2 ? a : gb(a, b, c, d !== void 0, e);
            else if (wa(a)) {
                const h = {};
                for (let f in a) h[f] = fb(a[f], b, c, d, e);
                a = h
            } else a = b(a, d);
            return a
        }
    }

    function gb(a, b, c, d, e) {
        const h = d || c ? a[C] | 0 : 0;
        d = d ? !!(h & 32) : void 0;
        a = B(a);
        for (let f = 0; f < a.length; f++) a[f] = fb(a[f], b, c, d, e);
        c && c(h, a);
        return a
    }

    function ib(a) {
        return a.s === ta ? a.toJSON() : db(a)
    };

    function jb(a, b, c = sa) {
        if (a != null) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[C] | 0;
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[C] = (d | 34) & -12293, a) : gb(a, jb, d & 4 ? sa : c, !0, !0)
            }
            a.s === ta && (c = a.i, d = c[C], d & 2 || ($a(a), a = bb(a.constructor, kb(c, d, !0))));
            return a
        }
    }

    function kb(a, b, c) {
        const d = c || b & 2 ? sa : ra,
            e = !!(b & 32);
        a = eb(a, b, h => jb(h, e, d));
        a[C] = a[C] | 32 | (c ? 2 : 0);
        return a
    }

    function lb(a) {
        const b = a.i,
            c = b[C];
        c & 2 && ($a(a), a = bb(a.constructor, kb(b, c, !1)));
        return a
    };

    function nb(a, b) {
        a = a.i;
        return ob(a, a[C], b)
    }

    function pb(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }

    function ob(a, b, c, d) {
        if (c === -1) return null;
        const e = b >> 15 & 1023 || 536870912;
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var h = a.length;
            if (d && b & 256 && (d = a[h - 1][c], d != null)) {
                if (pb(a, b, e, c) && qa != null) {
                    var f;
                    a = (f = na) != null ? f : na = {};
                    f = a[qa] || 0;
                    f >= 4 || (a[qa] = f + 1, pa())
                }
                return d
            }
            return pb(a, b, e, c)
        }
    }

    function J(a, b, c, d) {
        const e = b >> 15 & 1023 || 536870912;
        if (c >= e) {
            let h, f = b;
            if (b & 256) h = a[a.length - 1];
            else {
                if (d == null) return f;
                h = a[e + (+!!(b & 512) - 1)] = {};
                f |= 256
            }
            h[c] = d;
            c < e && (a[c + (+!!(b & 512) - 1)] = void 0);
            f !== b && (a[C] = f);
            return f
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }

    function qb(a, b, c) {
        a = ob(a, b, c);
        return Array.isArray(a) ? a : ya
    }

    function rb(a, b) {
        a === 0 && (a = K(a, b));
        return a | 1
    }

    function M(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function sb(a, b) {
        a = a.i;
        let c = a[C];
        if (c & 2) throw Error();
        J(a, c, 2, b === "" ? void 0 : b)
    }

    function tb(a, b, c) {
        var d = a.i,
            e = d[C],
            h = ob(d, e, c, !1);
        b = Ja(h, b, e);
        b !== h && b != null && J(d, e, c, b);
        d = b;
        if (d == null) return d;
        a = a.i;
        e = a[C];
        e & 2 || (h = lb(d), h !== d && (d = h, J(a, e, c, d)));
        return d
    }

    function ub(a, b, c) {
        var d = void 0 === Aa ? 2 : 4,
            e = a.i[C],
            h = e,
            f = !(2 & e);
        e = a.i;
        var l = !!(2 & h);
        d = l ? 1 : d;
        f && (f = !l);
        l = qb(e, h, c);
        var k = l[C] | 0,
            m = l;
        Ya(m, a);
        d !== 2 && d !== 1 || I(m, a);
        m = !!(4 & k);
        if (!m) {
            k = rb(k, h);
            var p = l,
                n = h;
            const w = !!(2 & k);
            w && (n |= 2);
            let u = !w,
                t = !0,
                x = 0,
                N = 0;
            for (; x < p.length; x++) {
                const O = Ja(p[x], b, n);
                if (O instanceof b) {
                    if (!w) {
                        const z = !!((O.i[C] | 0) & 2);
                        u && (u = !z);
                        t && (t = z)
                    }
                    p[N++] = O
                }
            }
            N < x && (p.length = N);
            k |= 4;
            k = t ? k | 16 : k & -17;
            k = u ? k | 8 : k & -9;
            p[C] = k;
            w && Object.freeze(p)
        }
        if (f && !(8 & k || !l.length && (d === 1 || d === 4 && 32 & k))) {
            M(k) ? (l =
                B(l), k = K(k, h), h = J(e, h, c, l)) : I(l, a);
            b = l;
            f = k;
            for (p = 0; p < b.length; p++) k = b[p], n = lb(k), k !== n && (b[p] = n);
            f |= 8;
            f = b.length ? f & -17 : f | 16;
            k = b[C] = f
        }
        let v;
        if (d === 1 || d === 4 && 32 & k) M(k) || (a = k, k |= !l.length || 16 & k && (!m || 32 & k) ? 2 : 2048, k !== a && (l[C] = k), Object.freeze(l));
        else if (m = d !== 5 ? !1 : !!(32 & k) || M(k) || !!Na(l), (d === 2 || m) && M(k) && (l = B(l), k = K(k, h), k = vb(k, h, !1), l[C] = k, h = J(e, h, c, l)), M(k) || (c = k, k = vb(k, h, !1), k !== c && (l[C] = k)), m) v = Ka(l), Va(l, a);
        else if (d === 2) {
            let w;
            (w = E) == null || w.delete(l)
        }
        return v || l
    }

    function K(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    }

    function vb(a, b, c) {
        32 & b && c || (a &= -33);
        return a
    }

    function P(a, b) {
        a = nb(a, b);
        a = a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : void 0;
        return a != null ? a : !1
    }

    function Q(a, b) {
        a = nb(a, b);
        a = a == null || typeof a === "string" ? a : void 0;
        return a != null ? a : ""
    };
    let R;
    var S = class {
        constructor(a) {
            a: {
                var b = b != null ? b : 0;a == null && (a = ab);ab = void 0;
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
                    if (d && (--d, wa(b[d]))) {
                        c |= 256;
                        b = d - (+!!(c & 512) - 1);
                        if (b >= 1024) throw Error("pvtlmt");
                        c = c & -33521665 | (b & 1023) << 15
                    }
                }
                a[C] = c
            }
            this.i = a
        }
        toJSON() {
            return wb(this)
        }
    };
    S.prototype.s = ta;
    S.prototype.toString = function() {
        try {
            return R = !0, wb(this).toString()
        } finally {
            R = !1
        }
    };

    function wb(a) {
        $a(a);
        a = R ? a.i : gb(a.i, ib, void 0, void 0, !1); {
            var b = !R;
            let m = a.length;
            if (m) {
                var c = a[m - 1],
                    d = wa(c);
                d ? m-- : c = void 0;
                var e = a;
                if (d) {
                    b: {
                        var h = c;
                        var f;
                        var l = !1;
                        if (h)
                            for (let p in h)
                                if (isNaN(+p)) {
                                    let n;
                                    ((n = f) != null ? n : f = {})[p] = h[p]
                                } else if (d = h[p], Array.isArray(d) && (xa(d) || va(d) && d.size === 0) && (d = null), d == null && (l = !0), d != null) {
                            let n;
                            ((n = f) != null ? n : f = {})[p] = d
                        }
                        l || (f = h);
                        if (f)
                            for (let p in f) {
                                l = f;
                                break b
                            }
                        l = null
                    }
                    h = l == null ? c != null : l !== c
                }
                for (; m > 0; m--) {
                    f = e[m - 1];
                    if (!(f == null || xa(f) || va(f) && f.size === 0)) break;
                    var k = !0
                }
                if (e !== a || h || k) {
                    if (!b) e = Array.prototype.slice.call(e, 0, m);
                    else if (k || h || l) e.length = m;
                    l && e.push(l)
                }
                k = e
            } else k = a
        }
        return k
    };
    var xb = class extends S {};

    function yb(a, b) {
        if (!a || /[?&]dsh=1(&|$)/.test(a)) return null;
        if (/[?&]ae=1(&|$)/.test(a)) {
            var c = /[?&]adurl=([^&]+)/.exec(a);
            if (!c) return null;
            b = b ? c.index : a.length;
            try {
                return {
                    u: a.slice(0, b) + "&act=1" + a.slice(b),
                    v: decodeURIComponent(c[1])
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
                u: `${c}&act=1${d}`,
                v: `${c}&dct=1${d}`
            }
        }
        return null
    };

    function zb(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };
    /*

     Copyright Google LLC
     SPDX-License-Identifier: Apache-2.0
    */
    var T = class {
            constructor(a) {
                this.g = a
            }
            toString() {
                return this.g
            }
        },
        Ab = new T("about:invalid#zClosurez");
    class Bb {
        constructor(a) {
            this.B = a
        }
    }

    function U(a) {
        return new Bb(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const Cb = new Bb(a => /^[^:]*([/?#]|$)/.test(a));
    var Db = U("http"),
        Eb = U("https"),
        Fb = U("ftp"),
        Gb = U("mailto"),
        Hb = U("intent"),
        Ib = U("market"),
        Jb = U("itms"),
        Kb = U("itms-appss");
    const Lb = [U("data"), Db, Eb, Gb, Fb, Cb];

    function Mb(a, b = Lb) {
        if (a instanceof T) return a;
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof Bb && d.B(a)) return new T(a)
        }
    }

    function Nb(a, b = Lb) {
        return Mb(a, b) || Ab
    }
    var Ob = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

    function V(a, b) {
        if (b instanceof T)
            if (b instanceof T) b = b.g;
            else throw Error("");
        else b = Ob.test(b) ? b : void 0;
        b !== void 0 && (a.href = b)
    };
    var Pb = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Qb(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) Qb(a, String(b[d]), c);
        else b != null && c.push(a + (b === "" ? "" : "=" + encodeURIComponent(String(b))))
    }

    function Rb(a, b) {
        var c = [];
        for (d in b) Qb(d, b[d], c);
        b = c.join("&");
        if (b) {
            c = a.indexOf("#");
            c < 0 && (c = a.length);
            var d = a.indexOf("?");
            if (d < 0 || d > c) {
                d = c;
                var e = ""
            } else e = a.substring(d + 1, c);
            a = [a.slice(0, d), e, a.slice(c)];
            c = a[1];
            a[1] = b ? c ? c + "&" + b : b : c;
            a = a[0] + (a[1] ? "?" + a[1] : "") + a[2]
        }
        return a
    };

    function Sb(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Tb(a = document) {
        return a.createElement("img")
    };

    function Ub(a, b, c = null, d = !1) {
        Vb(a, b, c, d)
    }

    function Vb(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const e = Tb(a.document);
        if (c || d) {
            const h = f => {
                c && c(f);
                if (d) {
                    f = a.google_image_requests;
                    const l = Array.prototype.indexOf.call(f, e, void 0);
                    l >= 0 && Array.prototype.splice.call(f, l, 1)
                }
                e.removeEventListener && e.removeEventListener("load", h, !1);
                e.removeEventListener && e.removeEventListener("error", h, !1)
            };
            zb(e, "load", h);
            zb(e, "error", h)
        }
        e.src = b;
        a.google_image_requests.push(e)
    }

    function Wb(a) {
        var b;
        if (b = q.navigator) b = q.navigator.userAgent, b = /Chrome/.test(b) && !/Edge/.test(b) ? !0 : !1;
        b && q.navigator.sendBeacon ? q.navigator.sendBeacon(a) : Ub(q, a, void 0, !1)
    };
    var Xb = window;
    var Yb = class {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };

    function $b(a) {
        let b = a.toString();
        a.name && b.indexOf(a.name) == -1 && (b += ": " + a.name);
        a.message && b.indexOf(a.message) == -1 && (b += ": " + a.message);
        if (a.stack) a: {
            a = a.stack;
            var c = b;
            try {
                a.indexOf(c) == -1 && (a = c + "\n" + a);
                let d;
                for (; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n");
                break a
            } catch (d) {
                b = c;
                break a
            }
            b = void 0
        }
        return b
    };
    const ac = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var bc = class {
            constructor(a, b) {
                this.g = a;
                this.h = b
            }
        },
        cc = class {
            constructor(a, b) {
                this.url = a;
                this.A = !!b;
                this.depth = null
            }
        };
    let dc = null;

    function ec() {
        const a = q.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function fc() {
        const a = q.performance;
        return a && a.now ? a.now() : null
    };
    var gc = class {
        constructor(a, b) {
            var c = fc() || ec();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const W = q.performance,
        hc = !!(W && W.mark && W.measure && W.clearMarks),
        X = function(a) {
            let b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        }(() => {
            var a;
            if (a = hc) {
                var b;
                if (dc === null) {
                    dc = "";
                    try {
                        a = "";
                        try {
                            a = q.top.location.hash
                        } catch (c) {
                            a = q.location.hash
                        }
                        a && (dc = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = dc;
                a = !!b.indexOf && b.indexOf("1337") >= 0
            }
            return a
        });

    function ic(a) {
        a && W && X() && (W.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), W.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class jc {
        constructor() {
            var a = window;
            this.g = [];
            this.j = a || q;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.g = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.h = X() || (b != null ? b : Math.random() < 1)
        }
        start(a, b) {
            if (!this.h) return null;
            a = new gc(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            W && X() && W.mark(b);
            return a
        }
        end(a) {
            if (this.h && typeof a.value === "number") {
                a.duration = (fc() || ec()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                W && X() && W.mark(b);
                !this.h || this.g.length >
                    2048 || this.g.push(a)
            }
        }
    };

    function kc(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function lc(a, b, c, d, e) {
        const h = [];
        Sb(a, (f, l) => {
            (f = mc(f, b, c, d, e)) && h.push(`${l}=${f}`)
        });
        return h.join(b)
    }

    function mc(a, b, c, d, e) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        typeof c === "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d || (d = 0), d < c.length) {
                const h = [];
                for (let f = 0; f < a.length; f++) h.push(mc(a[f], b, c, d + 1, e));
                return h.join(c[d])
            }
        } else if (typeof a === "object") return e || (e = 0), e < 2 ? encodeURIComponent(lc(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function nc(a) {
        let b = 1;
        for (const c in a.h) c.length > b && (b = c.length);
        return 3997 - b - a.j.length - 1
    }

    function oc(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = nc(a) - b.length;
        if (d < 0) return "";
        a.g.sort((h, f) => h - f);
        b = null;
        let e = "";
        for (let h = 0; h < a.g.length; h++) {
            const f = a.g[h],
                l = a.h[f];
            for (let k = 0; k < l.length; k++) {
                if (!d) {
                    b = b == null ? f : b;
                    break
                }
                let m = lc(l[k], a.j, ",$");
                if (m) {
                    m = e + m;
                    if (d >= m.length) {
                        d -= m.length;
                        c += m;
                        e = a.j;
                        break
                    }
                    b = b == null ? f : b
                }
            }
        }
        a = "";
        b != null && (a = `${e}${"trn"}=${b}`);
        return c + a
    }
    var pc = class {
        constructor() {
            this.j = "&";
            this.h = {};
            this.l = 0;
            this.g = []
        }
    };
    var rc = class {
        constructor() {
            this.g = new qc("/pagead/gen_204", 1, !0)
        }
    };

    function sc(a) {
        var b = tc.g;
        if (Math.random() < b.h) try {
            let c;
            a instanceof pc ? c = a : (c = new pc, Sb(a, (e, h) => {
                var f = c;
                const l = f.l++;
                e = kc(h, e);
                f.g.push(l);
                f.h[l] = e
            }));
            const d = oc(c, b.j + "unsafeurl&");
            d && (b.g ? Wb(d) : Ub(q, d))
        } catch (c) {}
    }

    function uc() {
        var a = vc,
            b = window.google_srt;
        b >= 0 && b <= 1 && (a.l = b)
    }
    class qc {
        constructor(a, b, c = !1) {
            this.j = a;
            this.h = b;
            this.g = c;
            this.l = Math.random()
        }
    };
    const wc = [Db, Eb, Gb, Fb, Cb, Ib, Jb, Hb, Kb];

    function xc(a, b) {
        if (a instanceof T) return a;
        const c = Nb(a, wc);
        c === Ab && b(a);
        return c
    }

    function yc() {
        var a = `${Xb.location.protocol==="http:"?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;
        return b => {
            b = Rb(a, {
                id: "unsafeurl",
                ctx: 599,
                url: b
            });
            navigator.sendBeacon && navigator.sendBeacon(b, "")
        }
    };
    let vc;
    const Y = new jc;
    var zc = () => {
        window.google_measure_js_timing || (Y.h = !1, Y.g != Y.j.google_js_reporting_queue && (X() && Array.prototype.forEach.call(Y.g, ic, void 0), Y.g.length = 0))
    };
    (a => {
        vc = a != null ? a : new qc("/pagead/gen_204?id=", .01);
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        uc();
        window.document.readyState == "complete" ? zc() : Y.h && zb(window, "load", () => {
            zc()
        })
    })();

    function Ac(a) {
        const {
            o: b,
            m: c
        } = Bc(a.href);
        V(a, xc(b, yc()));
        return c
    }

    function Cc(a, b, c = -1) {
        if (b)
            if (Date.now() - c < 300) a = !1;
            else if (b = a.getAttribute("data-orig-async-clicktrack-url")) {
            const {
                o: d,
                m: e
            } = Bc(b);
            V(a, xc(d, yc()));
            a = e
        } else a.setAttribute("data-orig-async-clicktrack-url", a.href), a = Ac(a);
        else a = Ac(a);
        return a
    }

    function Bc(a) {
        const b = yb(a, !0);
        return b ? navigator.sendBeacon ? navigator.sendBeacon(Dc(b.u, "&ri=1"), "") ? {
            o: b.v,
            m: !0
        } : {
            o: Dc(a, "&ri=2"),
            m: !1
        } : {
            o: Dc(a, "&ri=16"),
            m: !1
        } : {
            o: a,
            m: !1
        }
    }

    function Dc(a, b) {
        const c = a.search(/&adurl=/);
        return c < 0 ? a + b : a.slice(0, c) + b + a.slice(c)
    }

    function Ec(a) {
        return a != null && a.indexOf("dbm/clk") === -1 && yb(a) !== null
    };

    function Fc(a, b = !1) {
        var c = Z;
        if (!isNaN(a) && a > 0) {
            var d = c.dataset.onReadyTs;
            d = d ? parseInt(d, 10) : NaN;
            !b && !isNaN(d) && d > 0 || (c.dataset.onReadyTs = String(a))
        }
    };
    var Gc = class extends S {};
    var Hc = class extends S {};
    var Ic = class extends S {};
    var Jc = class extends S {};

    function Kc(a, b) {
        (a = Q(a, 5)) && Ub(Xb, a + "&label=" + b)
    }

    function Lc(a, b) {
        !isNaN(b) && b > 0 && (isNaN(a.g) || a.g < b) && (a.g = b)
    }
    class Mc {
        constructor() {
            this.g = NaN
        }
        filter(a, b) {
            const c = tb(a, Ic, 4);
            if (!c) return !0;
            for (var d of ub(c, Hc, 1)) {
                var e = d,
                    h = b,
                    f = h.currentTarget.getBoundingClientRect(),
                    l = void 0,
                    k = e;
                e = void 0 === Aa ? 2 : 4;
                var m = void 0,
                    p = k.i;
                let t = p[C];
                const x = 2 & t ? 1 : e;
                m = !!m;
                e = qb(p, t, 1);
                var n = e[C] | 0,
                    v = e,
                    w = k,
                    u = x;
                Ya(v, w);
                u !== 2 && u !== 1 || I(v, w);
                if (!(4 & n)) {
                    4 & n && (e = B(e), n = K(n, t), t = J(p, t, 1, e));
                    for (w = v = 0; v < e.length; v++) u = e[v], u = u == null || typeof u === "number" ? u : u === "NaN" || u === "Infinity" || u === "-Infinity" ? Number(u) : void 0, u != null && (e[w++] = u);
                    w <
                        v && (e.length = w);
                    n = rb(n, t);
                    n |= 20;
                    n &= -4097;
                    n &= -8193;
                    e[C] = n;
                    2 & n && Object.freeze(e)
                }
                x === 1 || x === 4 && 32 & n ? M(n) || (k = n, n |= 2, n !== k && (e[C] = n), Object.freeze(e)) : (v = x !== 5 ? !1 : !!(32 & n) || M(n) || !!Na(e), (x === 2 || v) && M(n) && (e = B(e), n = K(n, t), n = vb(n, t, m), e[C] = n, t = J(p, t, 1, e)), M(n) || (p = n, n = vb(n, t, m), n !== p && (e[C] = n)), v ? (l = Ka(e), Va(e, k)) : x !== 2 || m || (k = void 0, (k = E) == null || k.delete(e)));
                l = l || e;
                e = h.clientX;
                h = h.clientY;
                if (!(e < f.left || e > f.right || h < f.top || h > f.bottom) && (h - l[0] < f.top || e + l[1] > f.right || h + l[2] > f.bottom || e - l[3] < f.left)) return Kc(a,
                    "blocked_border_click"), !1
            }
            for (const t of ub(c, Gc, 2))
                if (d = b.currentTarget, f = d.dataset.onReadyTs, Lc(this, f ? parseInt(f, 10) : NaN), d = d.dataset.onShowTs, Lc(this, d ? parseInt(d, 10) : NaN), d = this.g, (d = isNaN(d) || !(d > 0)) || (d = Date.now(), f = this.g, h = Ha(nb(t, 1)), d = d < f + (h != null ? h : 0)), d) return Kc(a, "blocked_fast_click"), !1;
            return P(c, 3) && typeof q.g == "function" ? (q.g(b), Kc(a, "onepointfiveclick_first_click"), !1) : !0
        }
    };
    var tc = new rc;

    function Nc() {
        return a => {
            a = Rb("https://pagead2.googlesyndication.com/pagead/gen_204", {
                id: "unsafeurl",
                ctx: 620,
                url: a
            });
            navigator.sendBeacon && navigator.sendBeacon(a, "")
        }
    };

    function Oc(a, b) {
        const c = Nb(a, Pc);
        if (c === Ab) {
            a = Error("URL not recognized as safe: " + a);
            let z;
            try {
                const G = new pc;
                var d = G;
                d.g.push(1);
                d.h[1] = kc("context", b);
                a.error && a.meta && a.id || (a = new Yb(a, {
                    message: $b(a)
                }));
                if (a.msg) {
                    d = G;
                    var e = a.msg.substring(0, 512);
                    d.g.push(2);
                    d.h[2] = kc("msg", e)
                }
                e = G;
                var h = [a.meta || {}];
                e.g.push(3);
                e.h[3] = h;
                a = q;
                h = [];
                let oa;
                e = null;
                do {
                    var f = a;
                    try {
                        var l;
                        if (l = !!f && f.location.href != null) b: {
                            try {
                                ma(f.foo);
                                l = !0;
                                break b
                            } catch (L) {}
                            l = !1
                        }
                        var k = l
                    } catch (L) {
                        k = !1
                    }
                    k ? (oa = f.location.href, e = f.document &&
                        f.document.referrer || null) : (oa = e, e = null);
                    h.push(new cc(oa || ""));
                    try {
                        a = f.parent
                    } catch (L) {
                        a = null
                    }
                } while (a && f != a);
                for (let L = 0, Zb = h.length - 1; L <= Zb; ++L) h[L].depth = Zb - L;
                f = q;
                if (f.location && f.location.ancestorOrigins && f.location.ancestorOrigins.length == h.length - 1)
                    for (k = 1; k < h.length; ++k) {
                        var m = h[k];
                        m.url || (m.url = f.location.ancestorOrigins[k - 1] || "", m.A = !0)
                    }
                var p = h;
                let Qa = new cc(q.location.href, !1);
                f = null;
                const Ra = p.length - 1;
                for (m = Ra; m >= 0; --m) {
                    var n = p[m];
                    !f && ac.test(n.url) && (f = n);
                    if (n.url && !n.A) {
                        Qa = n;
                        break
                    }
                }
                n =
                    null;
                const Tc = p.length && p[Ra].url;
                Qa.depth != 0 && Tc && (n = p[Ra]);
                z = new bc(Qa, n);
                if (z.h) {
                    p = G;
                    var v = z.h.url || "";
                    p.g.push(4);
                    p.h[4] = kc("top", v)
                }
                var w = {
                    url: z.g.url || ""
                };
                if (z.g.url) {
                    var u = z.g.url.match(Pb),
                        t = u[1],
                        x = u[3],
                        N = u[4];
                    v = "";
                    t && (v += t + ":");
                    x && (v += "//", v += x, N && (v += ":" + N));
                    var O = v
                } else O = "";
                t = G;
                w = [w, {
                    url: O
                }];
                t.g.push(5);
                t.h[5] = w;
                sc(G)
            } catch (G) {
                try {
                    sc({
                        context: "ecmserr",
                        rctx: b,
                        msg: $b(G),
                        url: z && z.g.url
                    })
                } catch (oa) {}
            }
        }
        return c
    }
    var Pc = [Eb, Hb, Ib, Jb, Kb];

    function Qc(a, b) {
        a.dispatchEvent(new CustomEvent("customError", {
            detail: {
                message: b
            }
        }))
    }

    function Rc(a) {
        const b = a.currentTarget;
        let c = a.type;
        a.clientX != null && a.clientY != null && (c += ` [${a.clientX},${a.clientY}]`);
        a = a.target;
        let d = !1,
            e = !1,
            h = !1;
        for (; a !== b;) {
            var f = a.attributes;
            for (var l = 0; l < f.length; ++l) {
                var k = f[l];
                !d && k.name.match(/^x-.+-l$/) ? (c = "[l=" + k.value + "]" + c, d = !0) : !e && k.name.match(/^x-.+-v$/) ? (c = "[v=" + k.value + "]" + c, e = !0) : !h && k.name.match(/^x-.+-e$/) && (c = "[e=" + k.value + "]" + c, h = !0)
            }
            f = a.parentElement || b;
            if (!h)
                for (l = f.children, k = 0; k < l.length; k++)
                    if (l[k] === a) {
                        c = `>${k}` + c;
                        break
                    }
            a = f
        }
        return c
    };

    function Sc(a, b) {
        a.g = b
    }

    function Uc(a) {
        for (; !a.id;) {
            const b = "goog-js-util-" + Math.random().toString(36).substr(2, 5);
            if (!document.getElementById(b)) {
                a.id = b;
                break
            }
        }
        return a.id
    }
    var Vc = class {
        constructor() {
            this.g = !1
        }
    };
    var Wc = function(a) {
        return b => {
            if (b == null || b == "") b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b[C] |= 32;
                b = bb(a, b)
            }
            return b
        }
    }(class extends S {});

    function Xc(a, b) {
        var c = Z;
        Sc(a.l, P(b, 2));
        if (Q(b, 5))
            for (a = c.querySelectorAll(Q(b, 5)), b = 0; b < a.length; ++b) a[b].addEventListener("click", () => {})
    }

    function Yc(a) {
        var b = Z;
        let c = null,
            d = null;
        b.addEventListener("mousedown", e => {
            for (var h = e.currentTarget, f = e.target; f !== null && f !== h.parentElement && f.tagName !== "A";) f = f.parentElement;
            c = f === h.parentElement ? null : f;
            a: {
                if (a.g != null) {
                    h = e.currentTarget;
                    f = e.target;
                    if (P(a.g, 2) && f.children.length == 1 && f.children[0].tagName == "SPAN") {
                        var l = f.children[0],
                            k = l.getBoundingClientRect();
                        k.left <= e.clientX && e.clientX <= k.right && k.top <= e.clientY && e.clientY <= k.bottom && (f = l)
                    }
                    for (l = ub(a.g, Jc, 1); f != h.parentElement;) {
                        f.matches =
                            f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.msMatchesSelector || f.oMatchesSelector;
                        for (k = 0; k < l.length; ++k) {
                            const p = l[k];
                            if (f.matches(Q(p, 1))) {
                                d = p;
                                break a
                            }
                        }
                        f = f.parentElement
                    }
                }
                d = null
            }
            if (c && d && Q(d, 2)) {
                f = d;
                h = c;
                if (l = Q(f, 2)) V(h, Oc(l, 618)), h.target = Q(f, 3) || "_top";
                delete h.dataset.u2FinalUrl;
                delete h.dataset.u2TrackingUrl;
                (l = Q(f, 6)) && (h.dataset.u2FinalUrl = l);
                (l = Q(f, 7)) && (h.dataset.u2TrackingUrl = l);
                delete h.dataset.appClickInfo;
                if (f = tb(f, xb, 9)) {
                    h = h.dataset;
                    try {
                        R = !0;
                        var m = JSON.stringify(wb(f),
                            cb)
                    } finally {
                        R = !1
                    }
                    h.appClickInfo = m
                }
                m = e.currentTarget;
                typeof window.st === "function" ? window.st(Uc(c)) : Qc(m, `js-util: st() missing: ${Rc(e)}`);
                P(a.g, 6) && c.dispatchEvent(new CustomEvent("CUSTOM_MOUSE_DOWN", {
                    bubbles: !0
                }))
            }
        });
        b.addEventListener("click", e => {
            if (c && d && Q(d, 2) && a.C.filter(d, e) && !e.defaultPrevented) {
                var h = c,
                    f = e.currentTarget;
                a: {
                    var l = e.currentTarget;
                    var k = e.target;
                    if (a.l.g && k.children.length == 1 && k.children[0].tagName == "SPAN") {
                        var m = k.children[0];
                        const p = m.getBoundingClientRect();
                        p.left <= e.clientX &&
                            e.clientX <= p.right && p.top <= e.clientY && e.clientY <= p.bottom && (k = m)
                    }
                    for (; k != l;) {
                        m = k.getAttribute("x-code");
                        if (m != null) {
                            l = parseInt(m, 10);
                            break a
                        }
                        k = k.parentElement
                    }
                    l = 17
                }
                typeof window.ja === "function" ? window.ja(Uc(h), l) : Qc(f, `js-util: ja() missing: ${Rc(e)}`);
                k = l;
                f = e.currentTarget;
                (l = h.href) ? (m = [], /&nb=[^&]+/i.test(l) == 0 && m.push("&nb=" + k), /&nx=[^&]+/i.test(l) == 0 && m.push("&nx=" + Math.round(e.clientX - f.offsetLeft)), /&ny=[^&]+/i.test(l) == 0 && m.push("&ny=" + Math.round(e.clientY - f.offsetTop)), m.length > 0 && (k = m.join(""),
                    m = l.indexOf("&adurl="), l = m < 0 ? l + k : l.substring(0, m) + k + l.substring(m), V(h, xc(l, Nc())), Qc(f, `js-util: ja() filling: ${k} ${Rc(e)}`))) : Qc(f, `js-util: href is empty: ${Rc(e)}`);
                h = c;
                f = Q(d, 2);
                l = f.indexOf("&adurl=");
                l < 0 || (f = f.slice(l), l = h.href || "", k = l.indexOf(f), k < 0 || (m = l.slice(k + f.length)) && V(h, Oc(l.slice(0, k) + m + f, 619)));
                P(a.g, 6) ? (c.dispatchEvent(new CustomEvent("CUSTOM_CLICK", {
                    bubbles: !0
                })), e.stopImmediatePropagation(), e.preventDefault()) : (e = c, (Ec(e.href) || e.getAttribute("data-orig-async-clicktrack-url") &&
                    Ec(e.getAttribute("data-orig-async-clicktrack-url"))) && P(d, 8) && Cc(c, P(d, 10), a.j) && (a.j = Date.now()))
            } else e.stopImmediatePropagation(), e.preventDefault()
        })
    }

    function Zc(a, b) {
        if (b instanceof CustomEvent)
            for (const c of b.detail.changeConfigs) b = ub(a.g, Jc, 1).find(d => Q(d, 1) === c.selector), b !== void 0 && sb(b, Ia(c.href))
    }
    var $c = class {
        constructor() {
            this.g = null;
            this.C = new Mc;
            this.l = new Vc;
            this.h = !1;
            this.j = -1
        }
    };
    const Z = document.getElementById("mys-content");
    if (Z) {
        const a = new $c;
        Z.addEventListener("browserReady", () => {
            a: {
                var b = Z.getElementsByTagName("META");
                for (let c = 0; c < b.length; ++c)
                    if (b[c].getAttribute("name") === "exit") {
                        b = b[c].getAttribute("content") || "";
                        break a
                    }
                b = ""
            }
            b = b ? Wc(b) : null;a.g = b;a.g && (Fc(Date.now(), P(a.g, 7)), Xc(a, a.g), a.h || (a.h = !0, Yc(a)))
        });
        Z.addEventListener("changeExitConfig", b => void Zc(a, b))
    };
}).call(this);