(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var m = this || self;
    const aa = (new Date("2024-01-01T00:00:00Z")).getTime();

    function ba(a) {
        a = a.s;
        const b = encodeURIComponent;
        let c = "";
        a.platform && (c += "&uap=" + b(a.platform));
        a.platformVersion && (c += "&uapv=" + b(a.platformVersion));
        a.uaFullVersion && (c += "&uafv=" + b(a.uaFullVersion));
        a.architecture && (c += "&uaa=" + b(a.architecture));
        a.model && (c += "&uam=" + b(a.model));
        a.bitness && (c += "&uab=" + b(a.bitness));
        a.fullVersionList && (c += "&uafvl=" + b(a.fullVersionList.map(d => b(d.brand) + ";" + b(d.version)).join("|")));
        typeof a.wow64 !== "undefined" && (c += "&uaw=" + Number(a.wow64));
        return c
    }

    function ca(a, b) {
        return a.g ? a.m.slice(0, a.g.index) + b + a.m.slice(a.g.index) : a.m + b
    }

    function da(a, b = 0) {
        let c = "&act=1";
        b === 0 ? c += "&ri=1" : b === 1 ? c += "&ri=24" : b === 2 && (c += "&ri=25");
        a.l && a.s && (c += ba(a));
        a.h && (c += "&suid=" + a.o);
        return ca(a, c)
    }

    function ea(a, b) {
        if (a.l && a.i) {
            if (b == 1) return a.i || ""
        } else if (a.h) {
            if (b == 1) return ca(a, "&dct=1&suid=" + a.o);
            if (b == 3) return ca(a, "&dct=1&suid=" + a.o + "&ri=26")
        } else return a.m;
        return b == 2 ? ca(a, "&ri=2") : ca(a, "&ri=16")
    }
    var fa = class {
        constructor({
            url: a,
            Y: b
        }) {
            this.m = a;
            this.s = b;
            b = /[?&]dsh=1(&|$)/.test(a);
            this.l = !b && /[?&]ae=1(&|$)/.test(a);
            this.h = !b && /[?&]ae=2(&|$)/.test(a);
            this.g = /[?&]adurl=([^&]*)/.exec(a);
            this.B = !b && /[?&]aspm=1(&|$)/.test(a);
            if (this.g && this.g[1]) {
                let c;
                try {
                    c = decodeURIComponent(this.g[1])
                } catch (d) {
                    c = null
                }
                this.i = c
            }
            this.o = (new Date).getTime() - aa
        }
    };
    /*

     Copyright Google LLC
     SPDX-License-Identifier: Apache-2.0
    */
    var r = class {
            constructor(a) {
                this.g = a
            }
            toString() {
                return this.g
            }
        },
        ha = new r("about:invalid#zClosurez");
    class ia {
        constructor(a) {
            this.fa = a
        }
    }

    function t(a) {
        return new ia(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const ka = new ia(a => /^[^:]*([/?#]|$)/.test(a));
    var la = t("http"),
        ma = t("https"),
        na = t("ftp"),
        oa = t("mailto"),
        pa = t("intent"),
        qa = t("market"),
        ra = t("itms"),
        sa = t("itms-appss");
    const ta = [t("data"), la, ma, oa, na, ka];

    function ua(a, b = ta) {
        if (a instanceof r) return a;
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof ia && d.fa(a)) return new r(a)
        }
    }

    function wa(a, b = ta) {
        return ua(a, b) || ha
    }
    var xa = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

    function ya(a, b) {
        if (b instanceof r)
            if (b instanceof r) b = b.g;
            else throw Error("");
        else b = xa.test(b) ? b : void 0;
        b !== void 0 && (a.href = b)
    };

    function za(a, b) {
        a: {
            const c = a.length,
                d = typeof a === "string" ? a.split("") : a;
            for (let e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return b < 0 ? null : typeof a === "string" ? a.charAt(b) : a[b]
    };

    function Aa(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    var Ba = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Ca(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) Ca(a, String(b[d]), c);
        else b != null && c.push(a + (b === "" ? "" : "=" + encodeURIComponent(String(b))))
    }

    function Da(a, b, c, d) {
        for (var e = c.length;
            (b = a.indexOf(c, b)) >= 0 && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (f == 38 || f == 63)
                if (f = a.charCodeAt(b + e), !f || f == 61 || f == 38 || f == 35) return b;
            b += e + 1
        }
        return -1
    }
    var Ea = /#|$/;

    function Fa(a, b) {
        var c = a.search(Ea),
            d = Da(a, 0, b, c);
        if (d < 0) return null;
        var e = a.indexOf("&", d);
        if (e < 0 || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " "))
    }
    var Ga = /[?&]($|#)/;

    function Ha(a) {
        m.setTimeout(() => {
            throw a;
        }, 0)
    };
    var Ia, Ja;
    a: {
        for (var Ka = ["CLOSURE_FLAGS"], La = m, Ma = 0; Ma < Ka.length; Ma++)
            if (La = La[Ka[Ma]], La == null) {
                Ja = null;
                break a
            }
        Ja = La
    }
    var Na = Ja && Ja[610401301];
    Ia = Na != null ? Na : !1;
    var Oa;
    const Pa = m.navigator;
    Oa = Pa ? Pa.userAgentData || null : null;

    function Qa(a) {
        return Ia ? Oa ? Oa.brands.some(({
            brand: b
        }) => b && b.indexOf(a) != -1) : !1 : !1
    }

    function u(a) {
        var b;
        a: {
            if (b = m.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return b.indexOf(a) != -1
    };

    function v() {
        return Ia ? !!Oa && Oa.brands.length > 0 : !1
    }

    function Ra() {
        return v() ? Qa("Chromium") : (u("Chrome") || u("CriOS")) && !(v() ? 0 : u("Edge")) || u("Silk")
    };

    function Sa() {
        return u("iPhone") && !u("iPod") && !u("iPad")
    };

    function Ta(a) {
        Ta[" "](a);
        return a
    }
    Ta[" "] = function() {};
    var Ua = Sa(),
        Wa = u("iPad");
    var Xa = Sa() || u("iPod"),
        Ya = u("iPad");
    !u("Android") || Ra();
    Ra();
    u("Safari") && (Ra() || (v() ? 0 : u("Coast")) || (v() ? 0 : u("Opera")) || (v() ? 0 : u("Edge")) || (v() ? Qa("Microsoft Edge") : u("Edg/")) || v() && Qa("Opera"));
    var Za = {},
        $a = null;
    let ab;

    function bb() {
        const a = Error();
        Aa(a, "incident");
        Ha(a)
    }

    function cb(a) {
        a = Error(a);
        Aa(a, "warning");
        return a
    };

    function w(a) {
        return Array.prototype.slice.call(a)
    };
    var x = Symbol(),
        db = Symbol(),
        eb = Symbol();

    function fb(a) {
        a[x] |= 34;
        return a
    }

    function gb(a, b) {
        b[x] = (a | 0) & -30975
    }

    function ib(a, b) {
        b[x] = (a | 34) & -30941
    };
    var jb = {},
        kb = {};

    function lb(a) {
        return !(!a || typeof a !== "object" || a.ha !== kb)
    }

    function nb(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function ob(a) {
        return !Array.isArray(a) || a.length ? !1 : (a[x] | 0) & 1 ? !0 : !1
    }
    var pb;
    const qb = [];
    qb[x] = 55;
    pb = Object.freeze(qb);

    function rb(a) {
        if (a & 2) throw Error();
    }
    class sb {
        constructor(a, b, c) {
            this.i = 0;
            this.g = a;
            this.h = b;
            this.l = c
        }
        next() {
            if (this.i < this.g.length) {
                const a = this.g[this.i++];
                return {
                    done: !1,
                    value: this.h ? this.h.call(this.l, a) : a
                }
            }
            return {
                done: !0,
                value: void 0
            }
        }[Symbol.iterator]() {
            return new sb(this.g, this.h, this.l)
        }
    }
    var tb = Object.freeze({}),
        ub = Object.freeze({}),
        vb = Object.freeze({});
    var wb = typeof m.BigInt === "function" && typeof m.BigInt(0) === "bigint";
    const xb = Number.MIN_SAFE_INTEGER.toString(),
        yb = wb ? BigInt(Number.MIN_SAFE_INTEGER) : void 0,
        zb = Number.MAX_SAFE_INTEGER.toString(),
        Ab = wb ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;

    function Bb(a, b) {
        if (a.length > b.length) return !1;
        if (a.length < b.length || a === b) return !0;
        for (let c = 0; c < a.length; c++) {
            const d = a[c],
                e = b[c];
            if (d > e) return !1;
            if (d < e) return !0
        }
    };

    function Cb(a) {
        if (!Number.isFinite(a)) throw cb("enum");
        return a | 0
    }

    function Db(a) {
        return a == null ? a : Number.isFinite(a) ? a | 0 : void 0
    }

    function Eb(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
    }

    function y(a) {
        return a == null || typeof a === "string" ? a : void 0
    }

    function Fb(a, b, c, d) {
        if (a != null && typeof a === "object" && a.F === jb) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? (a = b[db]) ? b = a : (a = new b, fb(a.j), b = b[db] = a) : b = new b : b = void 0, b;
        let e = c = a[x] | 0;
        e === 0 && (e |= d & 32);
        e |= d & 2;
        e !== c && (a[x] = e);
        return new b(a)
    }

    function Ib(a, b, c) {
        if (b) {
            if (typeof a !== "string") throw Error();
            return a
        }
        let d;
        return (d = y(a)) != null ? d : c ? "" : void 0
    };

    function Jb(a) {
        Kb === void 0 && (Kb = typeof Proxy === "function" ? Lb(Proxy) : null);
        if (!Kb || !Mb()) return a;
        let b = Nb(a);
        if (b) return b;
        if (Math.random() > .01) return a;
        Ob(a);
        b = new Kb(a, {
            set(c, d, e) {
                Pb();
                c[d] = e;
                return !0
            }
        });
        Qb(a, b);
        return b
    }

    function Pb() {
        bb()
    }
    let Rb = void 0,
        Sb = void 0;

    function Nb(a) {
        let b;
        return (b = Rb) == null ? void 0 : b.get(a)
    }

    function Tb(a) {
        let b;
        return ((b = Sb) == null ? void 0 : b.get(a)) || a
    }

    function Qb(a, b) {
        (Rb || (Rb = new B)).set(a, b);
        (Sb || (Sb = new B)).set(b, a)
    }
    let Kb = void 0,
        B = void 0;

    function Mb() {
        B === void 0 && (B = typeof WeakMap === "function" ? Lb(WeakMap) : null);
        return B
    }

    function Lb(a) {
        try {
            return a.toString().indexOf("[native code]") !== -1 ? a : null
        } catch (b) {
            return null
        }
    }
    let Ub = void 0;

    function Ob(a) {
        if (Ub === void 0) {
            const b = new Kb([], {});
            Ub = Array.prototype.concat.call([], b).length === 1
        }
        Ub && typeof Symbol === "function" && Symbol.isConcatSpreadable && (a[Symbol.isConcatSpreadable] = !0)
    }

    function Vb(a, b, c) {
        if (Mb()) {
            if (Wb(a, b)) {
                if (c) return
            } else if (Math.random() > .01) return;
            var d = a.length;
            c = {
                length: d
            };
            for (var e = 0; e < Math.min(d, 10); e++) {
                if (d <= 10) var f = e;
                else {
                    f = d / 10;
                    const g = Math.floor(e * f);
                    f = g + Math.floor(Math.random() * (Math.floor((e + 1) * f) - g))
                }
                c[f] = a[f]
            }
            Xb(a, c) ? (d = Yb || (Yb = new B), e = d.get(b), e || (e = new B, d.set(b, e)), e.set(a, c)) : (bb(), Zb(a, b))
        }
    }

    function $b(a, b) {
        const c = Wb(a, b);
        c && !Xb(a, c) && (ac(), Zb(a, b))
    }

    function Xb(a, b) {
        if (a.length !== b.length) return !1;
        for (const e in b) {
            var c = Number(e),
                d;
            if (d = Number.isInteger(c)) d = a[c], c = b[c], d = !(Number.isNaN(d) ? Number.isNaN(c) : d === c);
            if (d) return !1
        }
        return !0
    }

    function bc(a) {
        var b;
        if (a && (b = Yb) != null && b.has(a) && (b = a.j))
            for (let c = 0; c < b.length; c++) {
                const d = b[c];
                if (c === b.length - 1 && nb(d))
                    for (const e in d) {
                        const f = d[e];
                        Array.isArray(f) && $b(f, a)
                    } else Array.isArray(d) && $b(d, a)
            }
    }

    function ac() {
        bb()
    }
    let Yb = void 0;

    function Wb(a, b) {
        let c, d;
        return (c = Yb) == null ? void 0 : (d = c.get(b)) == null ? void 0 : d.get(a)
    }

    function Zb(a, b) {
        let c, d;
        (c = Yb) == null || (d = c.get(b)) == null || d.delete(a)
    };
    let cc;
    const dc = {},
        ec = (() => class extends Map {
            constructor() {
                super()
            }
        })();

    function fc(a) {
        return a
    }

    function gc(a) {
        if (a.u & 2) throw Error("Cannot mutate an immutable Map");
    }
    var D = class extends ec {
        constructor(a, b, c = fc, d = fc) {
            super();
            let e = a[x] | 0;
            e |= 64;
            this.u = a[x] = e;
            this.C = b;
            this.A = c;
            this.J = this.C ? hc : d;
            for (let f = 0; f < a.length; f++) {
                const g = a[f],
                    h = c(g[0], !1, !0);
                let k = g[1];
                b ? k === void 0 && (k = null) : k = d(g[1], !1, !0, void 0, void 0, e);
                super.set(h, k)
            }
        }
        X(a = ic) {
            if (this.size !== 0) return this.G(a)
        }
        G(a = ic) {
            const b = [],
                c = super.entries();
            for (var d; !(d = c.next()).done;) d = d.value, d[0] = a(d[0]), d[1] = a(d[1]), b.push(d);
            return b
        }
        clear() {
            gc(this);
            super.clear()
        }
        delete(a) {
            gc(this);
            return super.delete(this.A(a, !0, !1))
        }
        entries() {
            var a = this.V();
            return new sb(a, jc, this)
        }
        keys() {
            return this.ga()
        }
        values() {
            var a = this.V();
            return new sb(a, D.prototype.get, this)
        }
        forEach(a, b) {
            super.forEach((c, d) => {
                a.call(b, this.get(d), d, this)
            })
        }
        set(a, b) {
            gc(this);
            a = this.A(a, !0, !1);
            return a == null ? this : b == null ? (super.delete(a), this) : super.set(a, this.J(b, !0, !0, this.C, !1, this.u))
        }
        has(a) {
            return super.has(this.A(a, !1, !1))
        }
        get(a) {
            a = this.A(a, !1, !1);
            const b = super.get(a);
            if (b !== void 0) {
                var c = this.C;
                return c ? (c = this.J(b, !1, !0, c, this.ea, this.u),
                    c !== b && super.set(a, c), c) : b
            }
        }
        V() {
            return Array.from(super.keys())
        }
        ga() {
            return super.keys()
        }[Symbol.iterator]() {
            return this.entries()
        }
    };
    D.prototype.toJSON = void 0;
    D.prototype.ha = kb;

    function hc(a, b, c, d, e, f) {
        a = Fb(a, d, c, f);
        e && (a = kc(a));
        return a
    }

    function ic(a) {
        return a
    }

    function jc(a) {
        return [a, this.get(a)]
    }
    let lc;

    function mc() {
        return lc || (lc = new D(fb([]), void 0, void 0, void 0, dc))
    };

    function nc(a, b) {
        return oc(b)
    }

    function oc(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "bigint":
                return (wb ? a >= yb && a <= Ab : a[0] === "-" ? Bb(a, xb) : Bb(a, zb)) ? Number(a) : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (ob(a)) return
                    } else {
                        if (a != null && a instanceof Uint8Array) {
                            let b = "",
                                c = 0;
                            const d = a.length - 10240;
                            for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                            b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                            return btoa(b)
                        }
                        if (a instanceof D) return a.X()
                    }
        }
        return a
    };

    function pc(a, b, c) {
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

    function qc(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = ob(a) ? void 0 : e && (a[x] | 0) & 2 ? a : rc(a, b, c, d !== void 0, e);
            else if (nb(a)) {
                const f = {};
                for (let g in a) f[g] = qc(a[g], b, c, d, e);
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function rc(a, b, c, d, e) {
        const f = d || c ? a[x] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = w(a);
        for (let g = 0; g < a.length; g++) a[g] = qc(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }

    function sc(a) {
        return qc(a, tc, void 0, void 0, !1)
    }

    function tc(a) {
        return a.F === jb ? a.toJSON() : a instanceof D ? a.X(sc) : oc(a)
    };

    function uc(a, b, c = ib) {
        if (a != null) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[x] | 0;
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[x] = (d | 34) & -12293, a) : rc(a, uc, d & 4 ? ib : c, !0, !0)
            }
            a.F === jb ? (c = a.j, d = c[x], a = d & 2 ? a : vc(a, c, d, !0)) : a instanceof D && !(a.u & 2) && (c = fb(a.G(uc)), a = new D(c, a.C, a.A, a.J));
            return a
        }
    }

    function wc(a) {
        const b = a.j;
        return vc(a, b, b[x], !1)
    }

    function vc(a, b, c, d) {
        bc(a);
        a = a.constructor;
        cc = b = xc(b, c, d);
        b = new a(b);
        cc = void 0;
        return b
    }

    function xc(a, b, c) {
        const d = c || b & 2 ? ib : gb,
            e = !!(b & 32);
        a = pc(a, b, f => uc(f, e, d));
        a[x] = a[x] | 32 | (c ? 2 : 0);
        return a
    }

    function kc(a) {
        const b = a.j,
            c = b[x];
        return c & 2 ? vc(a, b, c, !1) : a
    };

    function E(a, b) {
        a = a.j;
        return yc(a, a[x], b)
    }

    function zc(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }

    function yc(a, b, c, d) {
        if (c === -1) return null;
        const e = b >> 15 & 1023 || 536870912;
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            if (d && b & 256 && (d = a[f - 1][c], d != null)) {
                if (zc(a, b, e, c) && eb != null) {
                    var g;
                    a = (g = ab) != null ? g : ab = {};
                    g = a[eb] || 0;
                    g >= 4 || (a[eb] = g + 1, bb())
                }
                return d
            }
            return zc(a, b, e, c)
        }
    }

    function Ac(a, b, c) {
        const d = a.j;
        let e = d[x];
        rb(e);
        F(d, e, b, c);
        return a
    }

    function F(a, b, c, d) {
        const e = b >> 15 & 1023 || 536870912;
        if (c >= e) {
            let f, g = b;
            if (b & 256) f = a[a.length - 1];
            else {
                if (d == null) return g;
                f = a[e + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            f[c] = d;
            c < e && (a[c + (+!!(b & 512) - 1)] = void 0);
            g !== b && (a[x] = g);
            return g
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }

    function G(a, b, c) {
        return Bc(a, b, c) !== void 0
    }

    function Cc(a, b, c, d, e, f) {
        const g = a.j;
        let h = g[x];
        d = 2 & h ? 1 : d;
        f = !!f;
        e = Dc(g, h, b, e);
        var k = e[x] | 0,
            l = e;
        $b(l, a);
        d !== 2 && d !== 1 || Zb(l, a);
        if (!(4 & k)) {
            4 & k && (e = w(e), k = H(k, h), h = F(g, h, b, e));
            let p = l = 0;
            for (; l < e.length; l++) {
                const q = c(e[l]);
                q != null && (e[p++] = q)
            }
            p < l && (e.length = p);
            k = Ec(k, h);
            k = (k | 20) & -4097;
            k &= -8193;
            e[x] = k;
            2 & k && Object.freeze(e)
        }
        let n;
        if (d === 1 || d === 4 && 32 & k) I(k) || (a = k, k |= 2, k !== a && (e[x] = k), Object.freeze(e));
        else if (c = d !== 5 ? !1 : !!(32 & k) || I(k) || !!Nb(e), (d === 2 || c) && I(k) && (e = w(e), k = H(k, h), k = Fc(k, h, f), e[x] = k, h = F(g,
                h, b, e)), I(k) || (b = k, k = Fc(k, h, f), k !== b && (e[x] = k)), c) n = Jb(e), Vb(e, a, !0);
        else if (d === 2 && !f) {
            let p;
            (p = Rb) == null || p.delete(e)
        }
        return n || e
    }

    function Dc(a, b, c, d) {
        a = yc(a, b, c, d);
        return Array.isArray(a) ? a : pb
    }

    function Ec(a, b) {
        a === 0 && (a = H(a, b));
        return a | 1
    }

    function I(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function Gc(a, b, c, d, e, f) {
        const g = b & 2;
        a: {
            var h = c,
                k = b & 2;c = !1;
            if (h == null) {
                if (k) {
                    a = mc();
                    break a
                }
                h = []
            } else if (h.constructor === D) {
                if ((h.u & 2) == 0 || k) {
                    a = h;
                    break a
                }
                h = h.G()
            } else Array.isArray(h) ? c = !!((h[x] | 0) & 2) : h = [];
            if (k) {
                if (!h.length) {
                    a = mc();
                    break a
                }
                c || (c = !0, fb(h))
            } else if (c) {
                c = !1;
                k = w(h);
                for (h = 0; h < k.length; h++) {
                    const l = k[h] = w(k[h]);
                    Array.isArray(l[1]) && (l[1] = fb(l[1]))
                }
                h = k
            }
            c || ((h[x] | 0) & 64 ? h[x] &= -33 : 32 & b && (h[x] |= 32));f = new D(h, e, Ib, f);F(a, b, d, f);a = f
        }!g && e && (a.ea = !0);
        return a
    }

    function Hc(a, b) {
        a = a.j;
        const c = a[x];
        return Gc(a, c, yc(a, c, b), b, void 0, Ib)
    }

    function Ic(a) {
        var b = Jc;
        a = a.j;
        const c = a[x];
        return Gc(a, c, yc(a, c, 1), 1, b)
    }

    function Bc(a, b, c) {
        a = a.j;
        let d = a[x];
        const e = yc(a, d, c, !1);
        b = Fb(e, b, !1, d);
        b !== e && b != null && F(a, d, c, b);
        return b
    }

    function J(a, b, c) {
        b = Bc(a, b, c);
        if (b == null) return b;
        a = a.j;
        let d = a[x];
        if (!(d & 2)) {
            const e = kc(b);
            e !== b && (b = e, F(a, d, c, b))
        }
        return b
    }

    function H(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    }

    function Fc(a, b, c) {
        32 & b && c || (a &= -33);
        return a
    }

    function K(a, b) {
        return a != null ? a : b
    }

    function N(a, b, c = !1) {
        a = E(a, b);
        return K(a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : void 0, c)
    }

    function O(a, b) {
        return K(y(E(a, b)), "")
    }

    function Q(a, b, c = 0) {
        return K(Db(E(a, b)), c)
    }

    function Kc(a, b, c) {
        if (c != null && typeof c !== "boolean") throw a = typeof c, Error(`Expected boolean but got ${a!="object"?a:c?Array.isArray(c)?"array":a:"null"}: ${c}`);
        return Ac(a, b, c)
    }

    function Lc(a, b, c) {
        if (c != null) {
            if (typeof c !== "number") throw cb("int32");
            if (!Number.isFinite(c)) throw cb("int32");
            c |= 0
        }
        Ac(a, b, c)
    }

    function R(a, b, c) {
        if (c != null && typeof c !== "string") throw Error();
        return Ac(a, b, c)
    }

    function Mc(a, b, c) {
        Ac(a, b, c == null ? c : Cb(c))
    };
    let S;

    function Nc(a) {
        try {
            return S = !0, JSON.stringify(Oc(a), nc)
        } finally {
            S = !1
        }
    }
    var T = class {
        constructor(a) {
            a: {
                var b = b != null ? b : 0;a == null && (a = cc);cc = void 0;
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
                    if (d && (--d, nb(b[d]))) {
                        c |= 256;
                        b = d - (+!!(c & 512) - 1);
                        if (b >= 1024) throw Error("pvtlmt");
                        c = c & -33521665 | (b & 1023) << 15
                    }
                }
                a[x] = c
            }
            this.j = a
        }
        toJSON() {
            return Oc(this)
        }
    };
    T.prototype.F = jb;
    T.prototype.toString = function() {
        try {
            return S = !0, Oc(this).toString()
        } finally {
            S = !1
        }
    };

    function Oc(a) {
        bc(a);
        a = S ? a.j : rc(a.j, tc, void 0, void 0, !1); {
            var b = !S;
            let l = a.length;
            if (l) {
                var c = a[l - 1],
                    d = nb(c);
                d ? l-- : c = void 0;
                var e = a;
                if (d) {
                    b: {
                        var f = c;
                        var g;
                        var h = !1;
                        if (f)
                            for (let n in f)
                                if (isNaN(+n)) {
                                    let p;
                                    ((p = g) != null ? p : g = {})[n] = f[n]
                                } else if (d = f[n], Array.isArray(d) && (ob(d) || lb(d) && d.size === 0) && (d = null), d == null && (h = !0), d != null) {
                            let p;
                            ((p = g) != null ? p : g = {})[n] = d
                        }
                        h || (g = f);
                        if (g)
                            for (let n in g) {
                                h = g;
                                break b
                            }
                        h = null
                    }
                    f = h == null ? c != null : h !== c
                }
                for (; l > 0; l--) {
                    g = e[l - 1];
                    if (!(g == null || ob(g) || lb(g) && g.size === 0)) break;
                    var k = !0
                }
                if (e !== a || f || k) {
                    if (!b) e = Array.prototype.slice.call(e, 0, l);
                    else if (k || f || h) e.length = l;
                    h && e.push(h)
                }
                k = e
            } else k = a
        }
        return k
    };
    var Pc = class extends T {};
    var Qc = class extends T {
        constructor() {
            super()
        }
    };
    var Rc = class extends T {};
    var Sc = class extends T {};
    var Tc = class extends T {};
    var Uc = class extends T {
        v() {
            return O(this, 3)
        }
        W(a) {
            Kc(this, 5, a)
        }
    };
    var U = class extends T {
        v() {
            return O(this, 1)
        }
        W(a) {
            Kc(this, 2, a)
        }
    };
    var Vc = class extends T {};

    function Wc(a) {
        var b = a.j[x],
            c = b,
            d = !(2 & b),
            e = void 0 === tb ? 2 : 4;
        b = a.j;
        var f = !!(2 & c);
        e = f ? 1 : e;
        d && (d = !f);
        f = Dc(b, c, 7);
        var g = f[x] | 0,
            h = f;
        $b(h, a);
        e !== 2 && e !== 1 || Zb(h, a);
        h = !!(4 & g);
        if (!h) {
            g = Ec(g, c);
            var k = f,
                l = c,
                n = !!(2 & g);
            n && (l |= 2);
            let q = !n,
                A = !0,
                z = 0,
                C = 0;
            for (; z < k.length; z++) {
                const P = Fb(k[z], Uc, !1, l);
                if (P instanceof Uc) {
                    if (!n) {
                        const Y = !!((P.j[x] | 0) & 2);
                        q && (q = !Y);
                        A && (A = Y)
                    }
                    k[C++] = P
                }
            }
            C < z && (k.length = C);
            g |= 4;
            g = A ? g | 16 : g & -17;
            g = q ? g | 8 : g & -9;
            k[x] = g;
            n && Object.freeze(k)
        }
        if (d && !(8 & g || !f.length && (e === 1 || e === 4 && 32 & g))) {
            I(g) ? (f = w(f),
                g = H(g, c), c = F(b, c, 7, f)) : Zb(f, a);
            d = f;
            k = g;
            for (g = 0; g < d.length; g++) l = d[g], n = kc(l), l !== n && (d[g] = n);
            k |= 8;
            k = d.length ? k & -17 : k | 16;
            g = d[x] = k
        }
        let p;
        if (e === 1 || e === 4 && 32 & g) I(g) || (a = g, g |= !f.length || 16 & g && (!h || 32 & g) ? 2 : 2048, g !== a && (f[x] = g), Object.freeze(f));
        else if (h = e !== 5 ? !1 : !!(32 & g) || I(g) || !!Nb(f), (e === 2 || h) && I(g) && (f = w(f), g = H(g, c), g = Fc(g, c, !1), f[x] = g, c = F(b, c, 7, f)), I(g) || (b = g, g = Fc(g, c, !1), g !== b && (f[x] = g)), h) p = Jb(f), Vb(f, a, !0);
        else if (e === 2) {
            let q;
            (q = Rb) == null || q.delete(f)
        }
        return p || f
    }
    var Jc = class extends T {};
    var Xc = class extends T {};
    var Yc = class extends T {
        constructor() {
            super()
        }
    };

    function Zc(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var $c = {
            capture: !0
        },
        ad = {
            passive: !0
        },
        bd = Zc(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                m.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function gd(a) {
        return a ? a.passive && bd() ? a : a.capture || !1 : !1
    }

    function V(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, gd(d))
    };

    function hd(a) {
        let b = 0;
        for (const c in a) b++
    };

    function id(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    var jd = a => {
        a.preventDefault ? a.preventDefault() : a.returnValue = !1
    };
    let kd = [];
    const ld = () => {
        const a = kd;
        kd = [];
        for (const b of a) try {
            b()
        } catch (c) {}
    };
    var md = a => {
            kd.push(a);
            kd.length == 1 && (window.Promise ? Promise.resolve().then(ld) : window.setImmediate ? setImmediate(ld) : setTimeout(ld, 0))
        },
        nd = a => {
            var b = W;
            b.readyState === "complete" || b.readyState === "interactive" ? md(a) : b.addEventListener("DOMContentLoaded", a)
        },
        od = a => {
            var b = window;
            b.document.readyState === "complete" ? md(a) : b.addEventListener("load", a)
        };

    function pd(a = document) {
        return a.createElement("img")
    };

    function qd(a, b, c = null, d = !1) {
        rd(a, b, c, d)
    }

    function rd(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const e = pd(a.document);
        if (c || d) {
            const f = g => {
                c && c(g);
                if (d) {
                    g = a.google_image_requests;
                    const h = Array.prototype.indexOf.call(g, e, void 0);
                    h >= 0 && Array.prototype.splice.call(g, h, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, gd());
                e.removeEventListener && e.removeEventListener("error", f, gd())
            };
            V(e, "load", f);
            V(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    };
    let sd = 0;

    function td() {
        const a = ud(sd, document.currentScript);
        a && (a.dataset.initialized = "true")
    }

    function vd(a) {
        return (a = ud(a, document.currentScript)) && a.getAttribute("data-jc-version") || "unknown"
    }

    function ud(a, b = null) {
        return b && b.getAttribute("data-jc") === String(a) ? b : document.querySelector(`[${"data-jc"}="${a}"]`)
    }

    function wd(a) {
        if (!(Math.random() > .01)) {
            var b = ud(a, document.currentScript);
            a = `https://${b&&b.getAttribute("data-jc-rcd")==="true"?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${a}&version=${vd(a)}&sample=${.01}`;
            b = window;
            var c;
            if (c = b.navigator) c = b.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
            c && b.navigator.sendBeacon ? b.navigator.sendBeacon(a) : qd(b, a, void 0, !1)
        }
    };
    var W = document,
        xd = window;
    var yd = a => {
        var b = W;
        try {
            return b.querySelectorAll("*[" + a + "]")
        } catch (c) {
            return []
        }
    };
    var zd = class {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };

    function Ad(a) {
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
    const Bd = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var Cd = class {
            constructor(a, b) {
                this.g = a;
                this.h = b
            }
        },
        Dd = class {
            constructor(a, b) {
                this.url = a;
                this.U = !!b;
                this.depth = null
            }
        };
    let Ed = null;

    function Fd() {
        const a = m.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Gd() {
        const a = m.performance;
        return a && a.now ? a.now() : null
    };
    var Hd = class {
        constructor(a, b) {
            var c = Gd() || Fd();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const X = m.performance,
        Id = !!(X && X.mark && X.measure && X.clearMarks),
        Jd = Zc(() => {
            var a;
            if (a = Id) {
                var b;
                if (Ed === null) {
                    Ed = "";
                    try {
                        a = "";
                        try {
                            a = m.top.location.hash
                        } catch (c) {
                            a = m.location.hash
                        }
                        a && (Ed = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Ed;
                a = !!b.indexOf && b.indexOf("1337") >= 0
            }
            return a
        });

    function Kd(a) {
        a && X && Jd() && (X.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), X.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class Ld {
        constructor() {
            var a = window;
            this.h = [];
            this.i = a || m;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = Jd() || (b != null ? b : Math.random() < 1)
        }
        start(a, b) {
            if (!this.g) return null;
            a = new Hd(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            X && Jd() && X.mark(b);
            return a
        }
        end(a) {
            if (this.g && typeof a.value === "number") {
                a.duration = (Gd() || Fd()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                X && Jd() && X.mark(b);
                !this.g ||
                    this.h.length > 2048 || this.h.push(a)
            }
        }
    };

    function Md(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Nd(a, b, c, d, e) {
        const f = [];
        id(a, (g, h) => {
            (g = Od(g, b, c, d, e)) && f.push(`${h}=${g}`)
        });
        return f.join(b)
    }

    function Od(a, b, c, d, e) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        typeof c === "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d || (d = 0), d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Od(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if (typeof a === "object") return e || (e = 0), e < 2 ? encodeURIComponent(Nd(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Pd(a) {
        let b = 1;
        for (const c in a.h) c.length > b && (b = c.length);
        return 3997 - b - a.i.length - 1
    }

    function Qd(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Pd(a) - b.length;
        if (d < 0) return "";
        a.g.sort((f, g) => f - g);
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f],
                h = a.h[g];
            for (let k = 0; k < h.length; k++) {
                if (!d) {
                    b = b == null ? g : b;
                    break
                }
                let l = Nd(h[k], a.i, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.i;
                        break
                    }
                    b = b == null ? g : b
                }
            }
        }
        a = "";
        b != null && (a = `${e}${"trn"}=${b}`);
        return c + a
    }
    var Rd = class {
        constructor() {
            this.i = "&";
            this.h = {};
            this.l = 0;
            this.g = []
        }
    };

    function Sd(a, b, c) {
        let d, e;
        try {
            a.g && a.g.g ? (e = a.g.start(b.toString(), 3), d = c(), a.g.end(e)) : d = c()
        } catch (f) {
            c = !0;
            try {
                Kd(e), c = a.m(b, new zd(f, {
                    message: Ad(f)
                }), void 0, void 0)
            } catch (g) {
                a.l(217, g)
            }
            if (c) {
                let g, h;
                (g = window.console) == null || (h = g.error) == null || h.call(g, f)
            } else throw f;
        }
        return d
    }

    function Td(a, b) {
        var c = Ud;
        return (...d) => Sd(c, a, () => b.apply(void 0, d))
    }
    var Xd = class {
        constructor(a = null) {
            this.pinger = Vd;
            this.g = a;
            this.h = null;
            this.i = !1;
            this.m = this.l
        }
        l(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const M = new Rd;
                var g = M;
                g.g.push(1);
                g.h[1] = Md("context", a);
                b.error && b.meta && b.id || (b = new zd(b, {
                    message: Ad(b)
                }));
                if (b.msg) {
                    g = M;
                    var h = b.msg.substring(0, 512);
                    g.g.push(2);
                    g.h[2] = Md("msg", h)
                }
                var k = b.meta || {};
                b = k;
                if (this.h) try {
                    this.h(b)
                } catch (L) {}
                if (d) try {
                    d(b)
                } catch (L) {}
                d = M;
                k = [k];
                d.g.push(3);
                d.h[3] = k;
                d = m;
                k = [];
                let Va;
                b = null;
                do {
                    var l = d;
                    try {
                        var n;
                        if (n = !!l && l.location.href != null) b: {
                            try {
                                Ta(l.foo);
                                n = !0;
                                break b
                            } catch (L) {}
                            n = !1
                        }
                        var p = n
                    } catch (L) {
                        p = !1
                    }
                    p ? (Va = l.location.href, b = l.document && l.document.referrer || null) : (Va = b, b = null);
                    k.push(new Dd(Va || ""));
                    try {
                        d = l.parent
                    } catch (L) {
                        d = null
                    }
                } while (d && l != d);
                for (let L = 0, cd = k.length - 1; L <= cd; ++L) k[L].depth = cd - L;
                l = m;
                if (l.location && l.location.ancestorOrigins && l.location.ancestorOrigins.length == k.length - 1)
                    for (p = 1; p < k.length; ++p) {
                        var q = k[p];
                        q.url || (q.url = l.location.ancestorOrigins[p - 1] || "", q.U = !0)
                    }
                var A = k;
                let Gb = new Dd(m.location.href, !1);
                l = null;
                const Hb = A.length -
                    1;
                for (q = Hb; q >= 0; --q) {
                    var z = A[q];
                    !l && Bd.test(z.url) && (l = z);
                    if (z.url && !z.U) {
                        Gb = z;
                        break
                    }
                }
                z = null;
                const we = A.length && A[Hb].url;
                Gb.depth != 0 && we && (z = A[Hb]);
                f = new Cd(Gb, z);
                if (f.h) {
                    A = M;
                    var C = f.h.url || "";
                    A.g.push(4);
                    A.h[4] = Md("top", C)
                }
                var P = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    var Y = f.g.url.match(Ba),
                        va = Y[1],
                        dd = Y[3],
                        ed = Y[4];
                    C = "";
                    va && (C += va + ":");
                    dd && (C += "//", C += dd, ed && (C += ":" + ed));
                    var fd = C
                } else fd = "";
                va = M;
                P = [P, {
                    url: fd
                }];
                va.g.push(5);
                va.h[5] = P;
                Wd(this.pinger, e, M, this.i, c)
            } catch (M) {
                try {
                    Wd(this.pinger, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Ad(M),
                        url: f && f.g.url
                    }, this.i, c)
                } catch (Va) {}
            }
            return !0
        }
    };
    class Yd {};

    function Wd(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Rd ? f = c : (f = new Rd, id(c, (h, k) => {
                var l = f;
                const n = l.l++;
                h = Md(k, h);
                l.g.push(n);
                l.h[n] = h
            }));
            const g = Qd(f, "/pagead/gen_204?id=" + b + "&");
            g && qd(m, g)
        } catch (f) {}
    }

    function Zd() {
        var a = Vd,
            b = window.google_srt;
        b >= 0 && b <= 1 && (a.g = b)
    }
    class $d {
        constructor() {
            this.g = Math.random()
        }
    };
    const ae = [la, ma, oa, na, ka, qa, ra, pa, sa];

    function be(a, b) {
        if (a instanceof r) return a;
        const c = wa(a, ae);
        c === ha && b(a);
        return c
    }

    function ce(a) {
        var b = `${xd.location.protocol==="http:"?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;
        return c => {
            c = {
                id: "unsafeurl",
                ctx: a,
                url: c
            };
            var d = [];
            for (e in c) Ca(e, c[e], d);
            var e = d.join("&");
            if (e) {
                c = b.indexOf("#");
                c < 0 && (c = b.length);
                d = b.indexOf("?");
                if (d < 0 || d > c) {
                    d = c;
                    var f = ""
                } else f = b.substring(d + 1, c);
                c = [b.slice(0, d), f, b.slice(c)];
                d = c[1];
                c[1] = e ? d ? d + "&" + e : e : d;
                e = c[0] + (c[1] ? "?" + c[1] : "") + c[2]
            } else e = b;
            navigator.sendBeacon && navigator.sendBeacon(e, "")
        }
    };
    let Vd, Ud;
    const Z = new Ld;
    var de = () => {
        window.google_measure_js_timing || (Z.g = !1, Z.h != Z.i.google_js_reporting_queue && (Jd() && Array.prototype.forEach.call(Z.h, Kd, void 0), Z.h.length = 0))
    };
    (a => {
        Vd = a != null ? a : new $d;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        Zd();
        Ud = new Xd(Z);
        Ud.h = b => {
            const c = sd;
            c !== 0 && (b.jc = String(c), b.shv = vd(c))
        };
        Ud.i = !0;
        window.document.readyState == "complete" ? de() : Z.g && V(window, "load", () => {
            de()
        })
    })();
    var ee = (a, b) => Td(a, b),
        fe = (a, b) => {
            var c = Yd;
            var d = "T";
            c.T && c.hasOwnProperty(d) || (d = new c, c.T = d);
            c = [];
            !b.eid && c.length && (b.eid = c.toString());
            Wd(Vd, a, b, !0)
        };

    function ge(a = window) {
        return a
    };
    hd({
        ta: 0,
        sa: 1,
        pa: 2,
        ka: 3,
        qa: 4,
        la: 5,
        ra: 6,
        na: 7,
        oa: 8,
        ia: 9,
        ma: 10,
        ua: 11
    });
    hd({
        wa: 0,
        xa: 1,
        va: 2
    });

    function he(a) {
        var b = new ie;
        rb(b.j[x]);
        b = Cc(b, 1, Db, 2, void 0, !0);
        if (Array.isArray(a)) {
            a = Tb(a);
            var c = a.length;
            for (let d = 0; d < c; d++) b.push(Cb(a[d]))
        } else
            for (c of a) b.push(Cb(c))
    }
    var ie = class extends T {
        constructor() {
            super()
        }
    };
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    he([1, 8, 9, 10, 11, 12, 2, 3, 4, 5, 15, 16, 19, 20, 21]);
    he([1, 6, 7, 9, 10, 11, 12, 2, 3, 4, 5, 13, 14, 18, 19, 20, 21]);
    he([1, 6, 7, 9, 10, 11, 12, 22, 2, 3, 4, 5, 13, 14, 17, 18, 19, 20, 21]);
    new ie;
    var je = (a, b) => {
            b = O(a, 2) || b;
            if (!b) return "";
            if (N(a, 13)) return b;
            const c = /[?&]adurl=([^&]+)/.exec(b);
            if (!c) return b;
            const d = [b.slice(0, c.index + 1)];
            Hc(a, 4).forEach((e, f) => {
                d.push(encodeURIComponent(f) + "=" + encodeURIComponent(e) + "&")
            });
            d.push(b.slice(c.index + 1));
            return d.join("")
        },
        ke = (a, b = []) => {
            b = b.length > 0 ? b : yd("data-asoch-targets");
            a = Ic(a);
            const c = [];
            for (let h = 0; h < b.length; ++h) {
                var d = b[h].getAttribute("data-asoch-targets"),
                    e = d.split(","),
                    f = !0;
                for (let k of e)
                    if (!a.has(k)) {
                        f = !1;
                        break
                    }
                if (f) {
                    f = a.get(e[0]);
                    for (d = 1; d < e.length; ++d) {
                        var g = a.get(e[d]);
                        f = Oc(wc(f));
                        g = Oc(g);
                        const k = Math.max(f.length, g.length);
                        for (let l = 0; l < k; ++l) f[l] == null && (f[l] = g[l]);
                        f = new Jc(f)
                    }
                    e = Hc(f, 4);
                    Db(E(f, 5)) != null && e.set("nb", Q(f, 5, 0).toString());
                    c.push({
                        element: b[h],
                        data: f
                    })
                } else fe("gdn-asoch", {
                    type: 1,
                    data: d
                })
            }
            return c
        },
        ne = (a, b, c, d) => {
            c = je(b, c);
            if (c.length !== 0) {
                var e = d === 609;
                if (Fa(c, "ase") === "2" && d !== 1087) {
                    var f;
                    const g = !((f = W.featurePolicy) == null || !f.allowedFeatures().includes("attribution-reporting"));
                    f = e ? 4 : g ? 6 : 5;
                    let h = "";
                    e ||
                        g && !le(c) ? (c = me(c, "nis", f.toString()), a.setAttribute("attributionsrc", h)) : g && le(c) && (h = me(da(new fa({
                            url: c
                        })), "nis", f.toString()), a.setAttribute("attributionsrc", h))
                }
                e && G(b, Pc, 24) && (e = J(b, Pc, 24), a.setAttribute("attributionDestination", O(e, 2)), a.setAttribute("attributionSourceNonce", O(e, 1)));
                ya(a, be(c, ce(d)));
                a.target || (a.target = y(E(b, 11)) != null ? O(b, 11) : "_top")
            }
        },
        oe = a => {
            for (const b of a)
                if (a = b.data, b.element.tagName == "A" && !N(a, 1)) {
                    const c = b.element;
                    ne(c, a, c.href, 609)
                }
        },
        pe = (a, b, c) => {
            b = encodeURIComponent(b);
            const d = encodeURIComponent(c);
            c = new RegExp("[?&]" + b + "=([^&]+)");
            const e = c.exec(a);
            b = b + "=" + d;
            return e ? a.replace(c, e[0].charAt(0) + b) : a.replace("?", "?" + b + "&")
        },
        le = a => !/[?&]dsh=1(&|$)/.test(a) && /[?&]ae=1(&|$)/.test(a),
        qe = a => {
            const b = m.oneAfmaInstance;
            if (b)
                for (const c of a)
                    if ((a = c.data) && G(a, Vc, 8)) {
                        const d = O(J(a, Vc, 8), 4);
                        if (d) {
                            b.fetchAppStoreOverlay(d, void 0, O(J(a, Vc, 8), 6));
                            break
                        }
                    }
        },
        re = (a, b = 500) => {
            const c = [],
                d = [];
            for (var e of a)(a = e.data) && G(a, U, 12) && (d.push(J(a, U, 12)), c.push(J(a, U, 12).v()));
            e = (f, g) => {
                if (g)
                    for (const h of d) g[h.v()] && h.W(!0)
            };
            a = m.oneAfmaInstance;
            for (const f of c) {
                let g;
                (g = a) == null || g.canOpenAndroidApp(f, e, () => {}, b)
            }
        },
        te = (a, b, c, d) => {
            if (!b || !G(b, Vc, 8)) return !1;
            const e = J(b, Vc, 8);
            let f = O(e, 2);
            Hc(b, 10).forEach((h, k) => {
                f = pe(f, k, h)
            });
            se(b) && N(b, 15) && !/[?&]label=/.test(c) && (c = me(c, "label", "deep_link_fallback"));
            const g = h => d.openStoreOverlay(h, void 0, O(e, 6));
            return d.redirectForStoreU2({
                clickUrl: c,
                trackingUrl: O(e, 3),
                finalUrl: f,
                pingFunc: N(b, 13) ? d.httpTrack : d.click,
                openFunc: (a == null ? 0 : N(a,
                    1)) ? g : d.openIntentOrNativeApp,
                isExternalClickUrl: N(b, 13)
            })
        },
        ue = (a, b, c, d) => {
            c && c.startsWith("intent:") ? d.openIntentOrNativeApp(c) : a ? b ? d.openBrowser(c) : d.openChromeCustomTab(c) : d.openSystemBrowser(c, {
                useFirstPackage: !0,
                useRunningProcess: !0
            })
        },
        xe = (a, b, c, d, e, f, g, h = !1, k = !1) => {
            const l = N(e, 15);
            if (!k && l && y(E(e, 22)) != null) ue(c, d, O(e, 22), g);
            else {
                var n = le(f);
                if (a && b && (!l || !n && !k) && (f = ve(f, g.click, !0), h && (e == null ? 0 : N(e, 21, !1)))) return;
                ue(c, d, f, g)
            }
        },
        ve = (a, b = null, c = !1) => {
            if (b !== null) {
                const e = new fa({
                    url: a
                });
                if (e.l &&
                    e.i || e.h) {
                    if (e.h && c) {
                        a = da(e);
                        var d = encodeURIComponent("ase");
                        c = encodeURIComponent("3");
                        d = new RegExp("[?&]" + d + "=([^&]+)", "g");
                        let f = 0;
                        const g = [];
                        for (let h = d.exec(a); h !== null;) {
                            if (h[1] == c) {
                                let k = h[0].charAt(0) == "?" ? 1 : 0;
                                g.push(a.slice(f, h.index + k));
                                f = h.index + h[0].length + k
                            }
                            h = d.exec(a)
                        }
                        g.push(a.slice(f));
                        b(g.join(""))
                    } else b(da(e));
                    return ea(e, 1)
                }
            } else return {
                    Y: b
                } = {}, b = new fa({
                    url: a,
                    Y: b
                }), b.l && b.i || b.h ? b.B ? (fetch(da(b, 1), {
                    method: "GET",
                    keepalive: !0,
                    mode: "no-cors",
                    redirect: "follow"
                }), b = ea(b, 1)) : b = navigator.sendBeacon ?
                navigator.sendBeacon(da(b, 0), "") ? ea(b, 1) : ea(b, 2) : ea(b, 0) : b = a, b;
            return a
        },
        ye = (a, b = !0) => {
            b && xd.fetch ? xd.fetch(a, {
                method: "GET",
                keepalive: !0,
                mode: "no-cors"
            }).then(c => {
                c.ok || qd(xd, a)
            }) : qd(xd, a)
        },
        me = (a, b, c) => {
            b = encodeURIComponent(String(b));
            c = encodeURIComponent(String(c));
            return a.replace("?", "?" + b + "=" + c + "&")
        },
        se = a => {
            for (const b of Wc(a))
                if (Q(b, 1, 0) === 3 && O(b, 2)) return !0;
            return !1
        };
    var ze = (a, b) => a && (a = a.match(b + "=([^&]+)")) && a.length == 2 ? a[1] : "";
    var Ae = class extends T {
        constructor() {
            super()
        }
    };

    function Be(a, b) {
        return R(a, 2, b)
    }

    function Ce(a, b) {
        return R(a, 3, b)
    }

    function De(a, b) {
        return R(a, 4, b)
    }

    function Ee(a, b) {
        return R(a, 5, b)
    }

    function Fe(a, b) {
        return R(a, 9, b)
    }

    function Ge(a, b) {
        {
            const n = a.j;
            let p = n[x];
            rb(p);
            if (b == null) F(n, p, 10);
            else {
                b = Tb(b);
                var c = b[x] | 0,
                    d = c,
                    e = !!(2 & c) || !!(2048 & c),
                    f = e || Object.isFrozen(b),
                    g;
                if (g = !f)(g = void 0 === vb) || (g = void 0 !== ub);
                var h = !0,
                    k = !0;
                for (let q = 0; q < b.length; q++) {
                    var l = b[q];
                    e || (l = !!((l.j[x] | 0) & 2), h && (h = !l), k && (k = l))
                }
                e || (c |= 5, c = h ? c | 8 : c & -9, c = k ? c | 16 : c & -17);
                g || f && c !== d ? (b = w(b), d = 0, c = H(c, p), c = Fc(c, p, !0)) : f || Vb(b, a);
                c !== d && (b[x] = c);
                F(n, p, 10, b)
            }
        }
        return a
    }

    function He(a, b) {
        return Kc(a, 11, b)
    }

    function Ie(a, b) {
        return R(a, 1, b)
    }

    function Je(a, b) {
        return Kc(a, 7, b)
    }
    var Ke = class extends T {
        constructor() {
            super()
        }
    };
    const Le = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Me(a) {
        let b;
        return (b = a.google_tag_data) != null ? b : a.google_tag_data = {}
    }

    function Ne(a) {
        let b, c;
        return typeof((b = a.navigator) == null ? void 0 : (c = b.userAgentData) == null ? void 0 : c.getHighEntropyValues) === "function"
    }

    function Oe() {
        var a = window;
        if (!Ne(a)) return null;
        const b = Me(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(Le).then(c => {
            b.uach != null || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function Pe(a) {
        let b;
        return He(Ge(Ee(Be(Ie(De(Je(Fe(Ce(new Ke, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), ((b = a.fullVersionList) == null ? void 0 : b.map(c => {
            var d = new Ae;
            d = R(d, 1, c.brand);
            return R(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function Qe() {
        let a, b;
        return (b = (a = Oe()) == null ? void 0 : a.then(c => Pe(c))) != null ? b : null
    };

    function Re(a) {
        for (const b of a)
            if (b.element.tagName == "A") {
                a = b.element;
                const c = b.data;
                y(E(c, 2)) == null && R(c, 2, a.href)
            }
    }

    function Se(a, b) {
        return za(a, c => c.element === b)
    }

    function Te(a) {
        nd(ee(556, () => {
            new Ue(a || {})
        }))
    }

    function Ve(a, b) {
        if (!b.defaultPrevented || a.H === b) {
            for (var c, d, e = b.target;
                (!c || !d) && e;) {
                d || e.tagName != "A" || (d = e);
                var f = e.hasAttribute("data-asoch-targets"),
                    g = e.hasAttribute("data-asoch-fixed-value");
                if (!c)
                    if (g) c = new Jc(JSON.parse(e.getAttribute("data-asoch-fixed-value")) || []);
                    else if (e.tagName == "A" || f)
                    if (f = f && e.getAttribute("data-asoch-is-dynamic") === "true" ? ke(a.h, [e]) : a.g, f = Se(f, e)) c = f.data;
                e = e.parentElement
            }
            e = c && !N(c, 1);
            if (a.D && a.l && b.defaultPrevented) We(a, b, d, e ? c : a.l);
            else {
                if (e) {
                    if (!a.D && b.defaultPrevented) {
                        We(a,
                            b, d, c);
                        return
                    }
                    f = c;
                    for (var h of Cc(f, 6, y, void 0 === tb ? 2 : 4)) ye(h)
                }
                a.K && e && N(c, 21, !1) && (jd(b), (h = c) && O(h, 2) && (f = pe(O(h, 2), "ae", "1"), R(h, 2, f)));
                if (d && e) {
                    c = e ? c : null;
                    (h = Se(a.g, d)) ? h = h.data: (h = new Jc, R(h, 2, d.href), R(h, 11, d.target || "_top"), a.g.push({
                        element: d,
                        data: h
                    }));
                    ne(d, c || h, O(h, 2), 557);
                    Xe(a, b, d, c);
                    for (var k of Cc(a.h, 17, y, void 0 === tb ? 2 : 4)) h = W.body, e = {}, typeof window.CustomEvent === "function" ? f = new CustomEvent(k, e) : (f = document.createEvent("CustomEvent"), f.initCustomEvent(k, !!e.bubbles, !!e.cancelable, e.detail)),
                        h.dispatchEvent(f);
                    if (c == null ? 0 : y(E(c, 19)) != null) {
                        k = new Qc;
                        Db(E(c, 5)) != null ? (h = k, e = Q(c, 5, 0), Mc(h, 1, e)) : (h = ze(d.href, "nb"), h != "" && Mc(k, 1, +h));
                        h = ze(d.href, "nx");
                        h != "" && Lc(k, 2, +h);
                        h = ze(d.href, "ny");
                        h != "" && Lc(k, 3, +h);
                        h = ze(d.href, "bg");
                        h != "" && R(k, 4, h);
                        h = ze(d.href, "nm");
                        h != "" && Lc(k, 5, +h);
                        h = ze(d.href, "mb");
                        h != "" && Lc(k, 6, +h);
                        h = d.href;
                        e = h.search(Ea);
                        f = 0;
                        for (var l = [];
                            (g = Da(h, f, "bg", e)) >= 0;) l.push(h.substring(f, g)), f = Math.min(h.indexOf("&", g) + 1 || e, e);
                        l.push(h.slice(f));
                        h = l.join("").replace(Ga, "$1");
                        ya(d, be(h,
                            ce(1211)));
                        f = O(c, 19);
                        h = Eb(E(c, 20)) != null ? K(Eb(E(c, 20)), 0) : null;
                        g = Nc(k);
                        k = a.o;
                        e = ge(m);
                        l = new Yc;
                        f = R(l, 1, f);
                        f = R(f, 4, g);
                        f = R(f, 10, Date.now().toString());
                        h !== null && Lc(f, 2, h);
                        k !== null && R(f, 3, k);
                        Mc(f, 9, 7);
                        var n;
                        e == null || (n = e.fence) == null || n.setReportEventDataForAutomaticBeacons({
                            eventType: "reserved.top_navigation_start",
                            eventData: JSON.stringify(f),
                            destination: ["buyer"],
                            once: !0
                        });
                        var p;
                        e == null || (p = e.fence) == null || p.reportEvent({
                            eventType: "click",
                            destination: ["component-seller"]
                        })
                    }
                    N(a.h, 16) || a.N ? Ye(a, b, d, c) :
                        (n = "", (p = m.oneAfmaInstance) && (n = p.appendClickSignals(d.href)), Ze(a, b, d, c, n))
                }
            }
        }
    }

    function We(a, b, c, d) {
        if (a.H === b && a.I) {
            const f = new Sc(a.I),
                g = O(d, 9);
            var e = "";
            switch (Q(f, 4, 1)) {
                case 2:
                    if (K(Eb(E(f, 2)), 0)) e = "blocked_fast_click";
                    else if (O(f, 1) || O(f, 7)) e = "blocked_border_click";
                    break;
                case 3:
                    e = W;
                    e = e.getElementById ? e.getElementById("common_15click_anchor") : null;
                    const h = window;
                    if (typeof h.copfcChm === "function" && e) {
                        d = wc(d);
                        Mc(d, 5, 12);
                        Hc(d, 4).set("nb", (12).toString());
                        const k = Se(a.g, e);
                        k ? k.data = d : a.g.push({
                            element: e,
                            data: d
                        });
                        !a.S && c && (Xe(a, b, c, d), R(d, 2, c.href));
                        h.copfcChm(b, je(d, e.href), null,
                            G(f, Rc, 10) ? Nc(J(f, Rc, 10)) : null);
                        a.S && Xe(a, b, e, d)
                    }
                    e = "onepointfiveclick_first_click"
            }
            g && e && (c = g + "&label=" + e, e === "onepointfiveclick_first_click" && (c += "&ccx=" + b.clientX + "&ccy=" + b.clientY), ye(c, !1));
            wd(a.O)
        }
    }

    function Xe(a, b, c, d) {
        if (!N(d, 13)) {
            var e = c.href;
            var f = /[?&]adurl=([^&]+)/.exec(e);
            e = f ? [e.slice(0, f.index), e.slice(f.index)] : [e, ""];
            for (ya(c, be(e[0], ce(557))); !c.id;)
                if (f = "asoch-id-" + (Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ Date.now()).toString(36)), !W.getElementById(f)) {
                    c.id = f;
                    break
                }
            f = c.id;
            typeof window.xy === "function" && window.xy(b, c, W.body);
            typeof window.mb === "function" && window.mb(c);
            typeof window.bgz === "function" && window.bgz(f);
            typeof window.ja ===
                "function" && window.ja(f, d ? Q(d, 5, 0) : 0);
            typeof window.vti === "function" && window.vti(c);
            a.i && typeof window.ss === "function" && (a.R ? window.ss(f, 1, a.i) : window.ss(a.i, 1));
            e.length > 0 && (a = a.o.length > 0 && (d == null || y(E(d, 19)) == null) ? c.href + "&uach=" + encodeURIComponent(a.o) + e[1] : c.href + e[1], ya(c, be(a, ce(557))))
        }
    }
    async function Ye(a, b, c, d) {
        let e = "";
        var f = m.oneAfmaInstance;
        if (f && (b.preventDefault(), e = await f.appendClickSignalsAsync(c.href) || "", a.N)) {
            if (a.aa) return;
            if (f = await f.getNativeClickMeta()) {
                if (f.customClickGestureEligible) return;
                e = me(e, "nas", f.encodedNas)
            }
        }
        Ze(a, b, c, d, e)
    }

    function Ze(a, b, c, d, e) {
        a.M++;
        a.s < 0 && (a.s = Date.now());
        const f = N(a.h, 2),
            g = f && Date.now() - a.P > 300,
            h = m.oneAfmaInstance;
        h ? (jd(b), (() => {
            var k = N(d, 13) ? e : h.logScionEventAndAddParam(e);
            if (!a.B && d && G(d, U, 12)) {
                var l = J(d, U, 12).v();
                var n = "";
                if (Wc(d).length > 0)
                    for (const p of Wc(d)) n += O(p, 2) + " " + p.v() + " ";
                N(J(d, U, 12), 2) ? (h.click(k), h.openAndroidApp(l), l = !0) : l = !1
            } else l = !1;
            l || te(a.m, d, k, h) || xe(f, g, a.ca, a.B, d, k, h, a.K, a.ba)
        })()) : (b = window, a.Z && b.pawsig && typeof b.pawsig.clk === "function" ? (fe("paw_sigs", {
            msg: "click",
            count: a.M.toString(),
            elapsed: (Date.now() - a.s).toString()
        }), b.pawsig.clk(c)) : g && (b = c.getAttribute("attributionsrc") != null && Fa(c.getAttribute("attributionsrc"), "nis") === "6" ? ve(c.href, () => {}) : ve(c.href), b !== c.href && ya(c, be(b, ce(599)))));
        g && (a.P = Date.now());
        wd(a.O)
    }
    var Ue = class {
        constructor(a) {
            this.B = Xa || Ua || Ya || Wa;
            var b = yd("data-asoch-meta");
            if (b.length !== 1) fe("gdn-asoch", {
                type: 2,
                data: b.length
            });
            else {
                this.O = 70;
                this.h = new Xc(JSON.parse(b[0].getAttribute("data-asoch-meta")) || []);
                this.L = a["extra-meta"] ? new Xc(JSON.parse(a["extra-meta"])) : null;
                this.N = a["is-fsn"] === "true";
                this.aa = a["is-tap-disabled-for-fsn"] === "true";
                this.m = a["ios-store-overlay-config"] ? new Tc(JSON.parse(a["ios-store-overlay-config"])) : null;
                this.ca = a["use-cct-over-browser"] === "true";
                this.S = a["correct-redirect-url-for-och-15-click"] ===
                    "true";
                this.ba = a["spitzer-use-click-url-for-fallback"] === "true";
                this.D = a["default-msg-in-och"] === "true";
                this.Z = a["enable-paw"] === "true";
                this.K = a["allow-redirection-muted-in-och"] === "true";
                this.o = "";
                b = Qe();
                b != null && b.then(d => {
                    var e = Nc(d);
                    d = [];
                    var f = 0;
                    for (var g = 0; g < e.length; g++) {
                        var h = e.charCodeAt(g);
                        h > 255 && (d[f++] = h & 255, h >>= 8);
                        d[f++] = h
                    }
                    e = 3;
                    e === void 0 && (e = 0);
                    if (!$a)
                        for ($a = {}, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), g = ["+/=", "+/", "-_=", "-_.", "-_"], h = 0; h < 5; h++) {
                            var k =
                                f.concat(g[h].split(""));
                            Za[h] = k;
                            for (var l = 0; l < k.length; l++) {
                                var n = k[l];
                                $a[n] === void 0 && ($a[n] = l)
                            }
                        }
                    e = Za[e];
                    f = Array(Math.floor(d.length / 3));
                    g = e[64] || "";
                    for (h = k = 0; k < d.length - 2; k += 3) {
                        var p = d[k],
                            q = d[k + 1];
                        n = d[k + 2];
                        l = e[p >> 2];
                        p = e[(p & 3) << 4 | q >> 4];
                        q = e[(q & 15) << 2 | n >> 6];
                        n = e[n & 63];
                        f[h++] = l + p + q + n
                    }
                    l = 0;
                    n = g;
                    switch (d.length - k) {
                        case 2:
                            l = d[k + 1], n = e[(l & 15) << 2] || g;
                        case 1:
                            d = d[k], f[h] = e[d >> 2] + e[(d & 3) << 4 | l >> 4] + n + g
                    }
                    this.o = f.join("")
                });
                this.g = ke(this.h);
                this.D && (this.l = null, Ic(this.h).forEach(d => {
                    this.l != null || y(E(d, 2)) == null ||
                        y(E(d, 9)) == null || N(d, 13) || (this.l = d)
                }));
                this.da = Number(a["deeplink-and-android-app-validation-timeout"]) || 500;
                this.P = -Infinity;
                this.s = this.M = 0;
                this.i = O(this.h, 5) || "";
                this.R = N(this.h, 11);
                this.L && (this.R = N(this.L, 11));
                this.I = this.H = null;
                N(this.h, 3) || (oe(this.g), Kc(this.h, 3, !0));
                Re(this.g);
                a = m.oneAfmaInstance;
                !this.B && a && re(this.g, this.da);
                var c;
                if (a && ((c = this.m) == null ? 0 : N(c, 2))) switch (c = () => {
                    const d = K(Eb(E(this.m, 4)), 0);
                    d > 0 ? m.setTimeout(() => {
                        qe(this.g)
                    }, d) : qe(this.g)
                }, Q(this.m, 3, 0)) {
                    case 1:
                        a.runOnOnShowEvent(c);
                        break;
                    case 2:
                        od(c);
                        break;
                    default:
                        qe(this.g)
                }
                V(W, "click", ee(557, d => {
                    Ve(this, d)
                }), $c);
                V(W, "auxclick", ee(557, d => {
                    d.button === 1 && Ve(this, d)
                }), $c);
                this.i && typeof window.ss === "function" && V(W.body, "mouseover", ee(626, () => {
                    window.ss(this.i, 0)
                }), ad);
                typeof window.ivti === "function" && window.ivti(W.body);
                c = window;
                c.googqscp && typeof c.googqscp.registerCallback === "function" && c.googqscp.registerCallback((d, e) => {
                    this.H = d;
                    this.I = e
                });
                td()
            }
        }
    };
    var $e = ee(555, a => Te(a));
    sd = 70;
    const af = ud(70, document.currentScript);
    if (af == null) throw Error("JSC not found 70");
    const bf = {},
        cf = af.attributes;
    for (let a = cf.length - 1; a >= 0; a--) {
        const b = cf[a].name;
        b.indexOf("data-jcp-") === 0 && (bf[b.substring(9)] = cf[a].value)
    }
    $e(bf);
}).call(this);