(function(sttc) {
    'use strict';
    var aa, ba = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ca(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var da = ca(this),
        ea = typeof Symbol === "function" && typeof Symbol("x") === "symbol",
        fa = {},
        ha = {};

    function ia(a, b, c) {
        if (!c || a != null) {
            c = ha[b];
            if (c == null) return a[b];
            c = a[c];
            return c !== void 0 ? c : a[b]
        }
    }

    function ja(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = d.length === 1;
            var e = d[0],
                f;!a && e in fa ? f = fa : f = da;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = ea && c === "es6" ? f[d] : null;b = b(c);b != null && (a ? ba(fa, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (ha[d] === void 0 && (a = Math.random() * 1E9 >>> 0, ha[d] = ea ? da.Symbol(d) : "$jscp$" + a + "$" + d), ba(f, ha[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    ja("Symbol.dispose", function(a) {
        return a ? a : Symbol("Symbol.dispose")
    }, "es_next");
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var p = this || self;

    function ka(a, b) {
        var c = la("CLOSURE_FLAGS");
        a = c && c[a];
        return a != null ? a : b
    }

    function la(a) {
        a = a.split(".");
        for (var b = p, c = 0; c < a.length; c++)
            if (b = b[a[c]], b == null) return null;
        return b
    }

    function ma(a) {
        var b = typeof a;
        return b == "object" && a != null || b == "function"
    }

    function na(a) {
        return Object.prototype.hasOwnProperty.call(a, oa) && a[oa] || (a[oa] = ++pa)
    }
    var oa = "closure_uid_" + (Math.random() * 1E9 >>> 0),
        pa = 0;

    function qa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ra(a, b, c) {
        if (!a) throw Error();
        if (arguments.length > 2) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function sa(a, b, c) {
        sa = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? qa : ra;
        return sa.apply(null, arguments)
    }

    function ta(a, b, c) {
        a = a.split(".");
        c = c || p;
        a[0] in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    };
    let ua = (new Date).getTime();

    function va(a) {
        p.setTimeout(() => {
            throw a;
        }, 0)
    };

    function wa(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function xa(a, b) {
        let c = 0;
        a = wa(String(a)).split(".");
        b = wa(String(b)).split(".");
        const d = Math.max(a.length, b.length);
        for (let g = 0; c == 0 && g < d; g++) {
            var e = a[g] || "",
                f = b[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (e[0].length == 0 && f[0].length == 0) break;
                c = ya(e[1].length == 0 ? 0 : parseInt(e[1], 10), f[1].length == 0 ? 0 : parseInt(f[1], 10)) || ya(e[2].length == 0, f[2].length == 0) || ya(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (c == 0)
        }
        return c
    }

    function ya(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var za = ka(610401301, !1),
        Aa = ka(653718497, ka(1, !0));

    function Ba() {
        var a = p.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Ca;
    const Da = p.navigator;
    Ca = Da ? Da.userAgentData || null : null;

    function Ea(a) {
        return za ? Ca ? Ca.brands.some(({
            brand: b
        }) => b && b.indexOf(a) != -1) : !1 : !1
    }

    function q(a) {
        return Ba().indexOf(a) != -1
    };

    function Fa() {
        return za ? !!Ca && Ca.brands.length > 0 : !1
    }

    function Ga() {
        return Fa() ? !1 : q("Trident") || q("MSIE")
    }

    function Ha() {
        return Fa() ? Ea("Microsoft Edge") : q("Edg/")
    }

    function Ia() {
        !q("Safari") || Ka() || (Fa() ? 0 : q("Coast")) || (Fa() ? 0 : q("Opera")) || (Fa() ? 0 : q("Edge")) || Ha() || Fa() && Ea("Opera")
    }

    function Ka() {
        return Fa() ? Ea("Chromium") : (q("Chrome") || q("CriOS")) && !(Fa() ? 0 : q("Edge")) || q("Silk")
    }

    function La(a) {
        const b = {};
        a.forEach(c => {
            b[c[0]] = c[1]
        });
        return c => b[c.find(d => d in b)] || ""
    }

    function Ma() {
        var a = Ba();
        if (Ga()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), c[1] == "7.0")
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        b = [];
        let d;
        for (; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
        a = La(b);
        return (Fa() ? 0 : q("Opera")) ? a(["Version",
            "Opera"
        ]) : (Fa() ? 0 : q("Edge")) ? a(["Edge"]) : Ha() ? a(["Edg"]) : q("Silk") ? a(["Silk"]) : Ka() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function Na(a, b) {
        if (typeof a === "string") return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Oa(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = typeof a === "string" ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Pa(a, b) {
        const c = a.length,
            d = Array(c),
            e = typeof a === "string" ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Qa(a, b) {
        const c = a.length,
            d = typeof a === "string" ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Ra(a, b) {
        a: {
            var c = a.length;
            const d = typeof a === "string" ? a.split("") : a;
            for (--c; c >= 0; c--)
                if (c in d && b.call(void 0, d[c], c, a)) {
                    b = c;
                    break a
                }
            b = -1
        }
        return b < 0 ? null : typeof a === "string" ? a.charAt(b) : a[b]
    }

    function Sa(a, b) {
        return Na(a, b) >= 0
    }

    function Ta(a) {
        const b = a.length;
        if (b > 0) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function Va(a) {
        Va[" "](a);
        return a
    }
    Va[" "] = function() {};
    var Wa = Ga();
    !q("Android") || Ka();
    Ka();
    Ia();
    var Xa = null;

    function Ya(a) {
        var b = [];
        Za(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Za(a, b) {
        function c(k) {
            for (; d < a.length;) {
                var l = a.charAt(d++),
                    m = Xa[l];
                if (m != null) return m;
                if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        $a();
        for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                g = c(64),
                h = c(64);
            if (h === 64 && e === -1) break;
            b(e << 2 | f >> 4);
            g != 64 && (b(f << 4 & 240 | g >> 2), h != 64 && b(g << 6 & 192 | h))
        }
    }

    function $a() {
        if (!Xa) {
            Xa = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; c < 5; c++)
                for (var d = a.concat(b[c].split("")), e = 0; e < d.length; e++) {
                    var f = d[e];
                    Xa[f] === void 0 && (Xa[f] = e)
                }
        }
    };

    function bb(a, b) {
        const c = cb;
        if (!b(a)) throw b = (typeof c === "function" ? c() : c) ? .concat("\n") ? ? "", Error(b + String(a));
    }

    function db(a) {
        a.fc = !0;
        return a
    }
    let cb = void 0;
    const eb = db(a => a !== null && a !== void 0);
    var fb = db(a => typeof a === "number"),
        gb = db(a => typeof a === "string"),
        hb = db(a => a === void 0);

    function ib(a) {
        if (gb(a)) {
            if (!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(a)) throw Error(String(a));
        } else if (fb(a) && !Number.isSafeInteger(a)) throw Error(String(a));
        return BigInt(a)
    }
    var mb = db(a => a >= jb && a <= kb);
    const jb = BigInt(Number.MIN_SAFE_INTEGER),
        kb = BigInt(Number.MAX_SAFE_INTEGER);
    let nb = 0,
        ob = 0;

    function pb(a) {
        const b = a >>> 0;
        nb = b;
        ob = (a - b) / 4294967296 >>> 0
    }

    function qb(a) {
        if (a < 0) {
            pb(-a);
            a = nb;
            var b = ob;
            b = ~b;
            a ? a = ~a + 1 : b += 1;
            const [c, d] = [a, b];
            nb = c >>> 0;
            ob = d >>> 0
        } else pb(a)
    }

    function rb() {
        var a = nb,
            b = ob;
        if (b & 2147483648) var c = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0));
        else b >>>= 0, a >>>= 0, b <= 2097151 ? c = "" + (4294967296 * b + a) : c = "" + (BigInt(b) << BigInt(32) | BigInt(a));
        return c
    };

    function sb(a) {
        return Array.prototype.slice.call(a)
    };
    var v = Symbol(),
        tb = Symbol(),
        ub = Symbol(),
        vb = Symbol(),
        wb = Symbol();

    function xb(a) {
        a[v] |= 32;
        return a
    }

    function yb(a, b) {
        b[v] = (a | 0) & -30975
    }

    function zb(a, b) {
        b[v] = (a | 34) & -30941
    };
    var Ab = {},
        Bb = {};

    function Cb(a) {
        return !(!a || typeof a !== "object" || a.g !== Bb)
    }

    function Db(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function Eb(a) {
        return !Array.isArray(a) || a.length ? !1 : (a[v] | 0) & 1 ? !0 : !1
    }
    var Fb;
    const Gb = [];
    Gb[v] = 55;
    Fb = Object.freeze(Gb);

    function Hb(a) {
        if (a & 2) throw Error();
    }
    var Ib = Object.freeze({}),
        Jb = Object.freeze({}),
        Kb = Object.freeze({});

    function Lb(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    let Mb, Nb;

    function Ob(a) {
        if (Nb) throw Error("");
        Nb = b => {
            p.setTimeout(() => {
                a(b)
            }, 0)
        }
    }

    function Pb(a) {
        if (Nb) try {
            Nb(a)
        } catch (b) {
            throw b.cause = a, b;
        }
    }

    function Qb() {
        const a = Error();
        Lb(a, "incident");
        Nb ? Pb(a) : va(a)
    }

    function Rb(a) {
        a = Error(a);
        Lb(a, "warning");
        Pb(a);
        return a
    };

    function Sb(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };

    function Tb(a) {
        if (a != null && typeof a !== "boolean") {
            var b = typeof a;
            throw Error(`Expected boolean but got ${b!="object"?b:a?Array.isArray(a)?"array":b:"null"}: ${a}`);
        }
        return a
    }
    const Ub = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function Vb(a) {
        const b = typeof a;
        switch (b) {
            case "bigint":
                return !0;
            case "number":
                return Number.isFinite(a)
        }
        return b !== "string" ? !1 : Ub.test(a)
    }

    function x(a) {
        if (a != null) {
            if (!Number.isFinite(a)) throw Rb("enum");
            a |= 0
        }
        return a
    }

    function Wb(a) {
        return a == null ? a : Number.isFinite(a) ? a | 0 : void 0
    }

    function Xb(a) {
        if (typeof a !== "number") throw Rb("int32");
        if (!Number.isFinite(a)) throw Rb("int32");
        return a | 0
    }

    function Yb(a) {
        return a == null ? a : Xb(a)
    }

    function Zb(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
    }

    function $b(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a >>> 0 : void 0
    }

    function bc(a) {
        if (a != null) a: {
            if (!Vb(a)) throw Rb("int64");
            switch (typeof a) {
                case "string":
                    a = cc(a);
                    break a;
                case "bigint":
                    a = ib(BigInt.asIntN(64, a));
                    break a;
                default:
                    a = dc(a)
            }
        }
        return a
    }

    function ec(a) {
        return a[0] === "-" ? a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 7)) > -922337 : a.length < 19 ? !0 : a.length === 19 && Number(a.substring(0, 6)) < 922337
    }

    function dc(a) {
        a = Math.trunc(a);
        if (!Number.isSafeInteger(a)) {
            qb(a);
            var b = nb,
                c = ob;
            if (a = c & 2147483648) b = ~b + 1 >>> 0, c = ~c >>> 0, b == 0 && (c = c + 1 >>> 0);
            b = c * 4294967296 + (b >>> 0);
            a = a ? -b : b
        }
        return a
    }

    function fc(a) {
        a = Math.trunc(a);
        if (Number.isSafeInteger(a)) a = String(a);
        else {
            {
                const b = String(a);
                ec(b) ? a = b : (qb(a), a = rb())
            }
        }
        return a
    }

    function cc(a) {
        var b = Math.trunc(Number(a));
        if (Number.isSafeInteger(b)) return String(b);
        b = a.indexOf(".");
        b !== -1 && (a = a.substring(0, b));
        ec(a) || (a.length < 16 ? qb(Number(a)) : (a = BigInt(a), nb = Number(a & BigInt(4294967295)) >>> 0, ob = Number(a >> BigInt(32) & BigInt(4294967295))), a = rb());
        return a
    }

    function gc(a) {
        var b = typeof a;
        if (a == null) return a;
        if (b === "bigint") return ib(BigInt.asIntN(64, a));
        if (Vb(a)) return b === "string" ? (b = Math.trunc(Number(a)), Number.isSafeInteger(b) ? a = ib(b) : (b = a.indexOf("."), b !== -1 && (a = a.substring(0, b)), a = ib(BigInt.asIntN(64, BigInt(a))))) : a = Number.isSafeInteger(a) ? ib(dc(a)) : ib(fc(a)), a
    }

    function hc(a) {
        if (typeof a !== "string") throw Error();
        return a
    }

    function y(a) {
        if (a != null && typeof a !== "string") throw Error();
        return a
    }

    function ic(a) {
        return a == null || typeof a === "string" ? a : void 0
    }

    function jc(a, b, c, d) {
        if (a != null && typeof a === "object" && a.na === Ab) return a;
        if (!Array.isArray(a)) return c ? d & 2 ? kc(b) : new b : void 0;
        let e = c = a[v] | 0;
        e === 0 && (e |= d & 32);
        e |= d & 2;
        e !== c && (a[v] = e);
        return new b(a)
    }

    function kc(a) {
        var b = a[tb];
        if (b) return b;
        b = new a;
        var c = b.B;
        c[v] |= 34;
        return a[tb] = b
    };

    function lc(a) {
        mc === void 0 && (mc = typeof Proxy === "function" ? nc(Proxy) : null);
        if (!mc || !oc()) return a;
        let b = pc ? .get(a);
        if (b) return b;
        if (Math.random() > .01) return a;
        qc(a);
        b = new mc(a, {
            set(c, d, e) {
                rc();
                c[d] = e;
                return !0
            }
        });
        sc(a, b);
        return b
    }

    function rc() {
        Qb()
    }
    let pc = void 0,
        tc = void 0;

    function sc(a, b) {
        (pc || (pc = new uc)).set(a, b);
        (tc || (tc = new uc)).set(b, a)
    }
    let mc = void 0,
        uc = void 0;

    function oc() {
        uc === void 0 && (uc = typeof WeakMap === "function" ? nc(WeakMap) : null);
        return uc
    }

    function nc(a) {
        try {
            return a.toString().indexOf("[native code]") !== -1 ? a : null
        } catch {
            return null
        }
    }
    let vc = void 0;

    function qc(a) {
        if (vc === void 0) {
            const b = new mc([], {});
            vc = Array.prototype.concat.call([], b).length === 1
        }
        vc && typeof Symbol === "function" && Symbol.isConcatSpreadable && (a[Symbol.isConcatSpreadable] = !0)
    }

    function wc(a, b, c) {
        if (oc()) {
            if (xc ? .get(b) ? .get(a)) {
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
            yc(a, c) ? (d = xc || (xc = new uc), e = d.get(b), e || (e = new uc, d.set(b, e)), e.set(a, c)) : (Qb(), zc(a, b))
        }
    }

    function Ac(a, b) {
        const c = xc ? .get(b) ? .get(a);
        c && !yc(a, c) && (Bc(), zc(a, b))
    }

    function yc(a, b) {
        if (a.length !== b.length) return !1;
        for (const e in b) {
            var c = Number(e),
                d;
            if (d = Object.prototype.hasOwnProperty.call(b, e) && Number.isInteger(c)) d = a[c], c = b[c], d = !(Number.isNaN(d) ? Number.isNaN(c) : d === c);
            if (d) return !1
        }
        return !0
    }

    function Cc(a) {
        if (a && xc ? .has(a)) {
            var b = a.B;
            if (b)
                for (let c = 0; c < b.length; c++) {
                    const d = b[c];
                    if (c === b.length - 1 && Db(d))
                        for (const e in d) {
                            if (!Object.prototype.hasOwnProperty.call(d, e)) continue;
                            const f = d[e];
                            Array.isArray(f) && Ac(f, a)
                        } else Array.isArray(d) && Ac(d, a)
                }
        }
    }

    function Bc() {
        Qb()
    }
    let xc = void 0;

    function zc(a, b) {
        xc ? .get(b) ? .delete(a)
    };
    let Dc;

    function Ec(a, b) {
        Dc = b;
        a = new a(b);
        Dc = void 0;
        return a
    };

    function Fc(a, b) {
        return Gc(b)
    }

    function Gc(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "bigint":
                return mb(a) ? Number(a) : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (Eb(a)) return
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

    function Hc(a, b, c) {
        a = sb(a);
        var d = a.length;
        const e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (const f in e) Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]))
        }
        return a
    }

    function Ic(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = Eb(a) ? void 0 : e && (a[v] | 0) & 2 ? a : Jc(a, b, c, d !== void 0, e);
            else if (Db(a)) {
                const f = {};
                for (let g in a) Object.prototype.hasOwnProperty.call(a, g) && (f[g] = Ic(a[g], b, c, d, e));
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function Jc(a, b, c, d, e) {
        const f = d || c ? a[v] | 0 : 0;
        d = d ? !!(f & 32) : void 0;
        a = sb(a);
        for (let g = 0; g < a.length; g++) a[g] = Ic(a[g], b, c, d, e);
        c && c(f, a);
        return a
    }

    function Kc(a) {
        return a.na === Ab ? a.toJSON() : a != null && a instanceof Uint8Array ? new Uint8Array(a) : a
    }

    function Lc(a) {
        return a.na === Ab ? a.toJSON() : Gc(a)
    }
    var Mc = typeof structuredClone != "undefined" ? structuredClone : a => Jc(a, Kc, void 0, void 0, !1);

    function Nc(a, b, c = zb) {
        if (a != null) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[v] | 0;
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[v] = (d | 34) & -12293, a) : Jc(a, Nc, d & 4 ? zb : c, !0, !0)
            }
            a.na === Ab && (c = a.B, d = c[v], a = d & 2 ? a : Oc(a, c, d, !0));
            return a
        }
    }

    function Oc(a, b, c, d) {
        Cc(a);
        return Ec(a.constructor, Pc(b, c, d))
    }

    function Pc(a, b, c) {
        const d = c || b & 2 ? zb : yb,
            e = !!(b & 32);
        a = Hc(a, b, f => Nc(f, e, d));
        a[v] = a[v] | 32 | (c ? 2 : 0);
        return a
    }

    function Qc(a) {
        const b = a.B,
            c = b[v];
        return c & 2 ? Oc(a, b, c, !1) : a
    };
    const Rc = ib(0);

    function Sc(a, b, c, d) {
        if (!(4 & b)) return !0;
        if (c == null) return !1;
        !d && c === 0 && (4096 & b || 8192 & b) && (a.constructor[wb] = (a.constructor[wb] | 0) + 1) < 5 && Qb();
        return c === 0 ? !1 : !(c & b)
    }

    function z(a, b) {
        a = a.B;
        return Tc(a, a[v], b)
    }

    function Uc(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }

    function Tc(a, b, c, d) {
        if (c === -1) return null;
        const e = b >> 15 & 1023 || 536870912;
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var f = a.length;
            return d && b & 256 && (d = a[f - 1][c], d != null) ? (Uc(a, b, e, c) && ub != null && (a = Mb ? ? (Mb = {}), b = a[ub] || 0, b >= 4 || (a[ub] = b + 1, Qb())), d) : Uc(a, b, e, c)
        }
    }

    function A(a, b, c) {
        const d = a.B;
        let e = d[v];
        Hb(e);
        B(d, e, b, c);
        return a
    }

    function B(a, b, c, d) {
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
            g !== b && (a[v] = g);
            return g
        }
        a[c + (+!!(b & 512) - 1)] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }

    function Vc(a, b, c) {
        return Wc(a, b, c, !1) !== void 0
    }

    function C(a) {
        return a === Ib ? 2 : 5
    }

    function Xc(a, b, c, d, e, f) {
        const g = a.B;
        let h = g[v];
        d = 2 & h ? 1 : d;
        f = !!f;
        e = Yc(g, h, b, e);
        var k = e[v] | 0,
            l = e;
        Ac(l, a);
        d !== 2 && d !== 1 || zc(l, a);
        if (Sc(a, k, void 0, f)) {
            4 & k && (e = sb(e), k = Zc(k, h), h = B(g, h, b, e));
            let u = l = 0;
            for (; l < e.length; l++) {
                const n = c(e[l]);
                n != null && (e[u++] = n)
            }
            u < l && (e.length = u);
            k = $c(k, h);
            k = (k | 20) & -4097;
            k &= -8193;
            e[v] = k;
            2 & k && Object.freeze(e)
        }
        let m;
        d === 1 || d === 4 && 32 & k ? ad(k) || (a = k, k |= 2, k !== a && (e[v] = k), Object.freeze(e)) : (c = d !== 5 ? !1 : !!(32 & k) || ad(k) || !!pc ? .get(e), (d === 2 || c) && ad(k) && (e = sb(e), k = Zc(k, h), k = bd(k, h, f), e[v] =
            k, h = B(g, h, b, e)), ad(k) || (b = k, k = bd(k, h, f), k !== b && (e[v] = k)), c ? (m = lc(e), wc(e, a, !0)) : d !== 2 || f || pc ? .delete(e));
        return m || e
    }

    function Yc(a, b, c, d) {
        a = Tc(a, b, c, d);
        return Array.isArray(a) ? a : Fb
    }

    function $c(a, b) {
        a === 0 && (a = Zc(a, b));
        return a | 1
    }

    function ad(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }

    function cd(a, b, c, d) {
        const e = a.B;
        let f = e[v];
        Hb(f);
        if (c == null) return B(e, f, b), a;
        c = tc ? .get(c) || c;
        let g = c[v] | 0,
            h = g;
        const k = !!(2 & g) || Object.isFrozen(c);
        var l;
        if (l = !k)(l = void 0 === Kb) || (l = (Aa || !1) && void 0 !== Jb);
        if (Sc(a, g)) {
            g = 21;
            k && (c = sb(c), h = 0, g = Zc(g, f), g = bd(g, f, !0));
            for (let m = 0; m < c.length; m++) c[m] = d(c[m])
        }
        l ? (c = sb(c), h = 0, g = Zc(g, f), g = bd(g, f, !0)) : k || wc(c, a);
        g !== h && (c[v] = g);
        B(e, f, b, c);
        return a
    }

    function E(a, b, c, d) {
        const e = a.B;
        let f = e[v];
        Hb(f);
        B(e, f, b, (d === "0" ? Number(c) === 0 : c === d) ? void 0 : c);
        return a
    }

    function dd(a, b, c, d) {
        const e = a.B;
        var f = e[v];
        Hb(f);
        if (d == null) {
            var g = fd(e);
            if (gd(g, e, f, c) === b) g.set(c, 0);
            else return a
        } else {
            g = fd(e);
            const h = gd(g, e, f, c);
            h !== b && (h && (f = B(e, f, h)), g.set(c, b))
        }
        B(e, f, b, d);
        return a
    }

    function hd(a, b, c) {
        return id(a, b) === c ? c : -1
    }

    function id(a, b) {
        a = a.B;
        return gd(fd(a), a, a[v], b)
    }

    function fd(a) {
        return a[vb] ? ? (a[vb] = new Map)
    }

    function gd(a, b, c, d) {
        let e = a.get(d);
        if (e != null) return e;
        e = 0;
        for (let f = 0; f < d.length; f++) {
            const g = d[f];
            Tc(b, c, g) != null && (e !== 0 && (c = B(b, c, e)), e = g)
        }
        a.set(d, e);
        return e
    }

    function jd(a, b, c) {
        a = a.B;
        let d = a[v];
        Hb(d);
        const e = Tc(a, d, c);
        b = Qc(jc(e, b, !0, d));
        e !== b && B(a, d, c, b);
        return b
    }

    function Wc(a, b, c, d) {
        a = a.B;
        let e = a[v];
        d = Tc(a, e, c, d);
        b = jc(d, b, !1, e);
        b !== d && b != null && B(a, e, c, b);
        return b
    }

    function kd(a, b, c) {
        return (a = Wc(a, b, c, !1)) ? a : kc(b)
    }

    function F(a, b, c) {
        b = Wc(a, b, c, !1);
        if (b == null) return b;
        a = a.B;
        let d = a[v];
        if (!(d & 2)) {
            const e = Qc(b);
            e !== b && (b = e, B(a, d, c, b))
        }
        return b
    }

    function ld(a, b, c, d, e, f, g) {
        const h = a.B;
        var k = !!(2 & b);
        e = k ? 1 : e;
        f = !!f;
        g && (g = !k);
        k = Yc(h, b, d);
        var l = k[v] | 0,
            m = k;
        Ac(m, a);
        e !== 2 && e !== 1 || zc(m, a);
        m = !!(4 & l);
        if (!m) {
            l = $c(l, b);
            var u = k,
                n = b;
            const t = !!(2 & l);
            t && (n |= 2);
            let w = !t,
                P = !0,
                D = 0,
                Ua = 0;
            for (; D < u.length; D++) {
                const Ja = jc(u[D], c, !1, n);
                if (Ja instanceof c) {
                    if (!t) {
                        const ac = !!((Ja.B[v] | 0) & 2);
                        w && (w = !ac);
                        P && (P = ac)
                    }
                    u[Ua++] = Ja
                }
            }
            Ua < D && (u.length = Ua);
            l |= 4;
            l = P ? l | 16 : l & -17;
            l = w ? l | 8 : l & -9;
            u[v] = l;
            t && Object.freeze(u)
        }
        if (g && !(8 & l || !k.length && (e === 1 || e === 4 && 32 & l))) {
            ad(l) ? (k = sb(k), l =
                Zc(l, b), b = B(h, b, d, k)) : zc(k, a);
            c = k;
            g = l;
            for (u = 0; u < c.length; u++) l = c[u], n = Qc(l), l !== n && (c[u] = n);
            g |= 8;
            g = c.length ? g & -17 : g | 16;
            l = c[v] = g
        }
        let r;
        e === 1 || e === 4 && 32 & l ? ad(l) || (a = l, l |= !k.length || 16 & l && (!m || 32 & l) ? 2 : 2048, l !== a && (k[v] = l), Object.freeze(k)) : (m = e !== 5 ? !1 : !!(32 & l) || ad(l) || !!pc ? .get(k), (e === 2 || m) && ad(l) && (k = sb(k), l = Zc(l, b), l = bd(l, b, f), k[v] = l, b = B(h, b, d, k)), ad(l) || (d = l, l = bd(l, b, f), l !== d && (k[v] = l)), m ? (r = lc(k), wc(k, a, !0)) : e !== 2 || f || pc ? .delete(k));
        return r || k
    }

    function G(a, b, c, d) {
        const e = a.B[v];
        return ld(a, e, b, c, d, !1, !(2 & e))
    }

    function md(a, b, c) {
        c == null && (c = void 0);
        return A(a, b, c)
    }

    function nd(a, b, c, d) {
        d == null && (d = void 0);
        return dd(a, b, c, d)
    }

    function od(a, b, c) {
        const d = a.B;
        let e = d[v];
        Hb(e);
        if (c == null) return B(d, e, b), a;
        c = tc ? .get(c) || c;
        let f = c[v] | 0,
            g = f;
        const h = !!(2 & f) || !!(2048 & f),
            k = h || Object.isFrozen(c),
            l = !k && (void 0 === Kb || (Aa || !1) && void 0 !== Jb);
        let m = !0,
            u = !0;
        for (let r = 0; r < c.length; r++) {
            var n = c[r];
            h || (n = !!((n.B[v] | 0) & 2), m && (m = !n), u && (u = n))
        }
        h || (f |= 5, f = m ? f | 8 : f & -9, f = u ? f | 16 : f & -17);
        l || k && f !== g ? (c = sb(c), g = 0, f = Zc(f, e), f = bd(f, e, !0)) : k || wc(c, a);
        f !== g && (c[v] = f);
        B(d, e, b, c);
        return a
    }

    function Zc(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    }

    function bd(a, b, c) {
        32 & b && c || (a &= -33);
        return a
    }

    function pd(a, b) {
        var c = qd;
        Hb(a.B[v]);
        a = c(a, 4, 2, void 0, !0);
        c = a[v] | 0;
        c = (4 & c ? 4096 & c ? 4096 : 8192 & c ? 8192 : 0 : void 0) ? ? 0;
        if (Array.isArray(b)) {
            b = tc ? .get(b) || b;
            var d = b.length;
            for (let e = 0; e < d; e++) a.push(hc(b[e], c))
        } else
            for (d of b) a.push(hc(d, c))
    }

    function rd(a, b) {
        a = z(a, b);
        a != null && (typeof a === "bigint" ? mb(a) ? a = Number(a) : (a = BigInt.asIntN(64, a), a = mb(a) ? Number(a) : String(a)) : a = Vb(a) ? typeof a === "number" ? dc(a) : cc(a) : void 0);
        return a
    }

    function sd(a, b) {
        return a ? ? b
    }

    function td(a, b) {
        a = z(a, b);
        return a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : void 0
    }

    function ud(a, b) {
        return Zb(z(a, b))
    }

    function H(a, b) {
        return ic(z(a, b))
    }

    function I(a, b) {
        return Wb(z(a, b))
    }

    function J(a, b, c = !1) {
        return sd(td(a, b), c)
    }

    function vd(a, b) {
        return sd(ud(a, b), 0)
    }

    function wd(a, b) {
        return sd(rd(a, b), 0)
    }

    function xd(a, b) {
        a = a.B;
        let c = a[v];
        const d = Tc(a, c, b);
        var e = d == null || typeof d === "number" ? d : d === "NaN" || d === "Infinity" || d === "-Infinity" ? Number(d) : void 0;
        e != null && e !== d && B(a, c, b, e);
        return e ? ? 0
    }

    function K(a, b) {
        return sd(H(a, b), "")
    }

    function L(a, b) {
        return sd(I(a, b), 0)
    }

    function qd(a, b, c, d, e) {
        return Xc(a, b, ic, c, d, e)
    }

    function yd(a, b, c) {
        return L(a, hd(a, c, b))
    }

    function zd(a, b, c, d) {
        return F(a, b, hd(a, d, c))
    }

    function Ad(a) {
        a = H(a, 4);
        return a == null ? void 0 : a
    }

    function Bd(a, b, c) {
        return E(a, b, bc(c), "0")
    }

    function Cd(a, b) {
        var c = performance.now();
        if (c != null && typeof c !== "number") throw Error(`Value of float/double field must be a number, found ${typeof c}: ${c}`);
        E(a, b, c, 0)
    };
    let Dd;

    function Ed(a) {
        try {
            return Dd = !0, JSON.stringify(Fd(a), Fc)
        } finally {
            Dd = !1
        }
    }
    var M = class {
        constructor(a) {
            a: {
                var b = b ? ? 0;a == null && (a = Dc);Dc = void 0;
                if (a == null) {
                    var c = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error("narr");
                    c = a[v] | 0;
                    if (c & 2048) throw Error("farr");
                    if (c & 64) break a;
                    b === 1 || b === 2 || (c |= 64);
                    b = a;
                    var d = b.length;
                    if (d && (--d, Db(b[d]))) {
                        c |= 256;
                        b = d - (+!!(c & 512) - 1);
                        if (b >= 1024) throw Error("pvtlmt");
                        c = c & -33521665 | (b & 1023) << 15
                    }
                }
                a[v] = c
            }
            this.B = a
        }
        toJSON() {
            return Fd(this)
        }
    };
    M.prototype.na = Ab;

    function Fd(a) {
        Cc(a);
        a = Dd ? a.B : Jc(a.B, Lc, void 0, void 0, !1); {
            var b = !Dd;
            let l = a.length;
            if (l) {
                var c = a[l - 1],
                    d = Db(c);
                d ? l-- : c = void 0;
                var e = a;
                if (d) {
                    b: {
                        var f = c;
                        var g;
                        var h = !1;
                        if (f)
                            for (let m in f) Object.prototype.hasOwnProperty.call(f, m) && (isNaN(+m) ? (g ? ? (g = {}))[m] = f[m] : (d = f[m], Array.isArray(d) && (Eb(d) || Cb(d) && d.size === 0) && (d = null), d == null && (h = !0), d != null && ((g ? ? (g = {}))[m] = d)));h || (g = f);
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
                    if (!(g == null || Eb(g) || Cb(g) && g.size ===
                            0)) break;
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
    }

    function Gd(a, b) {
        if (b == null) return new a;
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        b[v] |= 128;
        return Ec(a, xb(b))
    };

    function Hd(a) {
        return b => {
            if (b == null || b == "") b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b = Ec(a, xb(b))
            }
            return b
        }
    };
    var Id = class extends M {};
    var Jd = class extends M {
        getValue() {
            return K(this, 1)
        }
        getVersion() {
            return L(this, 5)
        }
    };
    var Kd = class extends M {
        removeCookies(a) {
            var b = this.B[v];
            Hb(b);
            b = ld(this, b, Jd, 4, 2, !0);
            a ? ? (a = b.length - 1);
            if (typeof a !== "number" || a < 0 || a >= b.length) throw Error();
            b.splice(a, 1);
            return this
        }
    };

    function Ld(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function Md(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Nd(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    };

    function Od(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function Pd(a, b, c) {
        return a.removeEventListener ? (a.removeEventListener(b, c, !1), !0) : !1
    };

    function Qd(a, b) {
        this.width = a;
        this.height = b
    }
    aa = Qd.prototype;
    aa.aspectRatio = function() {
        return this.width / this.height
    };
    aa.isEmpty = function() {
        return !(this.width * this.height)
    };
    aa.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    aa.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    aa.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    aa.scale = function(a, b) {
        this.width *= a;
        this.height *= typeof b === "number" ? b : a;
        return this
    };

    function Rd(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Sd(a, b) {
        for (const c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function Td(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function Ud(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    };
    /* 
     
     Copyright Google LLC 
     SPDX-License-Identifier: Apache-2.0 
    */
    let Vd = globalThis.trustedTypes,
        Wd;

    function Xd() {
        let a = null;
        if (!Vd) return a;
        try {
            const b = c => c;
            a = Vd.createPolicy("goog#html", {
                createHTML: b,
                createScript: b,
                createScriptURL: b
            })
        } catch (b) {}
        return a
    };
    var Yd = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g + ""
        }
    };

    function Zd(a) {
        Wd === void 0 && (Wd = Xd());
        var b = Wd;
        return new Yd(b ? b.createScriptURL(a) : a)
    }

    function $d(a) {
        if (a instanceof Yd) return a.g;
        throw Error("");
    };

    function ae(a = document) {
        a = ("document" in a ? a.document : a).querySelector ? .("script[nonce]");
        return a == null ? "" : a.nonce || a.getAttribute("nonce") || ""
    };

    function be(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };

    function ce(a, ...b) {
        if (b.length === 0) return Zd(a[0]);
        let c = a[0];
        for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return Zd(c)
    }

    function de(a, b) {
        a = $d(a).toString();
        const c = a.split(/[?#]/),
            d = /[?]/.test(a) ? "?" + c[1] : "";
        return ee(c[0], d, /[#]/.test(a) ? "#" + (d ? c[2] : c[1]) : "", b)
    }

    function ee(a, b, c, d) {
        function e(g, h) {
            g != null && (Array.isArray(g) ? g.forEach(k => e(k, h)) : (b += f + encodeURIComponent(h) + "=" + encodeURIComponent(g), f = "&"))
        }
        let f = b.length ? "&" : "?";
        d.constructor === Object && (d = Object.entries(d));
        Array.isArray(d) ? d.forEach(g => e(g[1], g[0])) : d.forEach(e);
        return Zd(a + b + c)
    };

    function fe(a, b) {
        b = String(b);
        a.contentType === "application/xhtml+xml" && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function ge(a) {
        this.g = a || p.document || document
    }
    ge.prototype.getChildren = function(a) {
        return a.children
    };
    ge.prototype.contains = function(a, b) {
        return a && b ? a == b || a.contains(b) : !1
    };

    function he() {
        return za && Ca ? Ca.mobile : !ie() && (q("iPod") || q("iPhone") || q("Android") || q("IEMobile"))
    }

    function ie() {
        return za && Ca ? !Ca.mobile && (q("iPad") || q("Android") || q("Silk")) : q("iPad") || q("Android") && !q("Mobile") || q("Silk")
    };
    var je = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        ke = /#|$/;

    function le(a, b) {
        var c = a.search(ke);
        a: {
            var d = 0;
            for (var e = b.length;
                (d = a.indexOf(b, d)) >= 0 && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (f == 38 || f == 63)
                    if (f = a.charCodeAt(d + e), !f || f == 61 || f == 38 || f == 35) break a;
                d += e + 1
            }
            d = -1
        }
        if (d < 0) return null;
        e = a.indexOf("&", d);
        if (e < 0 || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " "))
    };

    function me(a) {
        try {
            var b;
            if (b = !!a && a.location.href != null) a: {
                try {
                    Va(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch {
            return !1
        }
    }

    function ne(a) {
        return me(a.top) ? a.top : null
    }

    function oe(a, b) {
        const c = pe("SCRIPT", a);
        c.src = $d(b);
        (b = ae(c.ownerDocument && c.ownerDocument.defaultView || window)) && c.setAttribute("nonce", b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function qe(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function re() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function se(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function te(a) {
        const b = a.length;
        if (b == 0) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return c > 0 ? c : 4294967296 + c
    }
    var ve = /^([0-9.]+)px$/,
        we = /^(-?[0-9.]{1,30})$/;

    function xe(a) {
        if (!we.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function ye(a) {
        return (a = ve.exec(a)) ? +a[1] : null
    }
    var ze = Md(() => he() ? 2 : ie() ? 1 : 0),
        Ae = a => {
            se({
                display: "none"
            }, (b, c) => {
                a.style.setProperty(c, b, "important")
            })
        };
    let Be = [];
    const Ce = () => {
        const a = Be;
        Be = [];
        for (const b of a) try {
            b()
        } catch {}
    };

    function De() {
        var a = N(Ee).A(Fe.g, Fe.defaultValue),
            b = O.document;
        if (a.length && b.head)
            for (const c of a) c && b.head && (a = pe("META"), b.head.appendChild(a), a.httpEquiv = "origin-trial", a.content = c)
    }
    var Ge = () => {
            var a = Math.random;
            return Math.floor(a() * 2 ** 52)
        },
        He = a => {
            if (typeof a.goog_pvsid !== "number") try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: Ge(),
                    configurable: !1
                })
            } catch (b) {}
            return Number(a.goog_pvsid) || -1
        },
        Je = a => {
            var b = Ie;
            b.readyState === "complete" || b.readyState === "interactive" ? (Be.push(a), Be.length == 1 && (window.Promise ? Promise.resolve().then(Ce) : window.setImmediate ? setImmediate(Ce) : setTimeout(Ce, 0))) : b.addEventListener("DOMContentLoaded", a)
        };

    function pe(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    };

    function Ke(a, b, c = null, d = !1, e = !1) {
        Le(a, b, c, d, e)
    }

    function Le(a, b, c, d, e = !1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = pe("IMG", a.document);
        if (c || d) {
            const g = h => {
                c && c(h);
                if (d) {
                    h = a.google_image_requests;
                    const k = Na(h, f);
                    k >= 0 && Array.prototype.splice.call(h, k, 1)
                }
                Pd(f, "load", g);
                Pd(f, "error", g)
            };
            Od(f, "load", g);
            Od(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var Ne = (a, b) => {
            let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
            se(a, (d, e) => {
                if (d || d === 0) c += `&${e}=${encodeURIComponent(""+d)}`
            });
            Me(c)
        },
        Me = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : Ke(b, a, void 0, !1, !1)
        };
    var Ie = document,
        O = window;
    let Oe = null;
    var Pe = (a, b = []) => {
        let c = !1;
        p.google_logging_queue || (c = !0, p.google_logging_queue = []);
        p.google_logging_queue.push([a, b]);
        if (a = c) {
            if (Oe == null) {
                Oe = !1;
                try {
                    const d = ne(p);
                    d && d.location.hash.indexOf("google_logging") !== -1 && (Oe = !0)
                } catch (d) {}
            }
            a = Oe
        }
        a && oe(p.document, ce `https://pagead2.googlesyndication.com/pagead/js/logging_library.js`)
    };

    function Qe(a = p) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch {}
        return b ? .pageViewId && b ? .canonicalUrl ? b : null
    }

    function Re(a = Qe()) {
        return a ? me(a.master) ? a.master : null : null
    };
    var Se = a => {
            a = Re(Qe(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1;
            return a.google_unique_id
        },
        Te = a => {
            a = a.google_unique_id;
            return typeof a === "number" ? a : 0
        },
        Ue = a => {
            if (!a) return "";
            a = a.toLowerCase();
            a.substring(0, 3) != "ca-" && (a = "ca-" + a);
            return a
        };
    var Ve = class {
            constructor(a, b) {
                this.error = a;
                this.context = b.context;
                this.msg = b.message || "";
                this.id = b.id || "jserror";
                this.meta = {}
            }
        },
        We = a => !!(a.error && a.meta && a.id);

    function Xe(a) {
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
    const Ye = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var Ze = class {
            constructor(a, b) {
                this.g = a;
                this.i = b
            }
        },
        $e = class {
            constructor(a, b, c) {
                this.url = a;
                this.l = b;
                this.Ya = !!c;
                this.depth = null
            }
        };
    let af = null;

    function bf() {
        if (af === null) {
            af = "";
            try {
                let a = "";
                try {
                    a = p.top.location.hash
                } catch (b) {
                    a = p.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    af = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return af
    };

    function cf() {
        const a = p.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function df() {
        const a = p.performance;
        return a && a.now ? a.now() : null
    };
    var ef = class {
        constructor(a, b) {
            var c = df() || cf();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const ff = p.performance,
        gf = !!(ff && ff.mark && ff.measure && ff.clearMarks),
        hf = Md(() => {
            var a;
            if (a = gf) a = bf(), a = !!a.indexOf && a.indexOf("1337") >= 0;
            return a
        });

    function jf(a) {
        a && ff && hf() && (ff.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), ff.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class kf {
        constructor(a) {
            this.events = [];
            this.i = a || p;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.events = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = hf() || (b != null ? b : Math.random() < 1)
        }
        disable() {
            this.g = !1;
            if (this.events != this.i.google_js_reporting_queue) {
                if (hf()) {
                    var a = this.events;
                    const b = a.length;
                    a = typeof a === "string" ? a.split("") : a;
                    for (let c = 0; c < b; c++) c in a && jf.call(void 0, a[c])
                }
                this.events.length = 0
            }
        }
        start(a, b) {
            if (!this.g) return null;
            a = new ef(a,
                b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            ff && hf() && ff.mark(b);
            return a
        }
        end(a) {
            if (this.g && typeof a.value === "number") {
                a.duration = (df() || cf()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                ff && hf() && ff.mark(b);
                !this.g || this.events.length > 2048 || this.events.push(a)
            }
        }
    };

    function lf(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function mf(a, b, c, d, e) {
        const f = [];
        se(a, (g, h) => {
            (g = nf(g, b, c, d, e)) && f.push(`${h}=${g}`)
        });
        return f.join(b)
    }

    function nf(a, b, c, d, e) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        typeof c === "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d || (d = 0), d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(nf(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if (typeof a === "object") return e || (e = 0), e < 2 ? encodeURIComponent(mf(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function of (a) {
        let b = 1;
        for (const c in a.i) c.length > b && (b = c.length);
        return 3997 - b - a.j.length - 1
    }

    function pf(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = of (a) - b.length;
        if (d < 0) return "";
        a.g.sort((f, g) => f - g);
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f],
                h = a.i[g];
            for (let k = 0; k < h.length; k++) {
                if (!d) {
                    b = b == null ? g : b;
                    break
                }
                let l = mf(h[k], a.j, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.j;
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
    var qf = class {
        constructor() {
            this.j = "&";
            this.i = {};
            this.u = 0;
            this.g = []
        }
    };

    function rf(a, b) {
        a.g = b
    }
    var tf = class {
        constructor(a, b, c = null) {
            this.u = a;
            this.A = b;
            this.i = c;
            this.g = null;
            this.j = !1;
            this.Va = this.P
        }
        ea(a, b, c) {
            let d, e;
            try {
                this.i && this.i.g ? (e = this.i.start(a.toString(), 3), d = b(), this.i.end(e)) : d = b()
            } catch (f) {
                b = this.A;
                try {
                    jf(e), b = this.Va(a, new Ve(f, {
                        message: Xe(f)
                    }), void 0, c)
                } catch (g) {
                    this.P(217, g)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        pa(a, b) {
            return (...c) => this.ea(a, () => b.apply(void 0, c))
        }
        P(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const ab = new qf;
                var g = ab;
                g.g.push(1);
                g.i[1] = lf("context",
                    a);
                We(b) || (b = new Ve(b, {
                    message: Xe(b)
                }));
                if (b.msg) {
                    g = ab;
                    var h = b.msg.substring(0, 512);
                    g.g.push(2);
                    g.i[2] = lf("msg", h)
                }
                var k = b.meta || {};
                b = k;
                if (this.g) try {
                    this.g(b)
                } catch (lb) {}
                if (d) try {
                    d(b)
                } catch (lb) {}
                d = ab;
                k = [k];
                d.g.push(3);
                d.i[3] = k;
                d = p;
                k = [];
                b = null;
                do {
                    var l = d;
                    if (me(l)) {
                        var m = l.location.href;
                        b = l.document && l.document.referrer || null
                    } else m = b, b = null;
                    k.push(new $e(m || "", l));
                    try {
                        d = l.parent
                    } catch (lb) {
                        d = null
                    }
                } while (d && l != d);
                for (let lb = 0, Rg = k.length - 1; lb <= Rg; ++lb) k[lb].depth = Rg - lb;
                l = p;
                if (l.location && l.location.ancestorOrigins &&
                    l.location.ancestorOrigins.length == k.length - 1)
                    for (m = 1; m < k.length; ++m) {
                        var u = k[m];
                        u.url || (u.url = l.location.ancestorOrigins[m - 1] || "", u.Ya = !0)
                    }
                var n = k;
                let ed = new $e(p.location.href, p, !1);
                l = null;
                const ue = n.length - 1;
                for (u = ue; u >= 0; --u) {
                    var r = n[u];
                    !l && Ye.test(r.url) && (l = r);
                    if (r.url && !r.Ya) {
                        ed = r;
                        break
                    }
                }
                r = null;
                const Dk = n.length && n[ue].url;
                ed.depth != 0 && Dk && (r = n[ue]);
                f = new Ze(ed, r);
                if (f.i) {
                    n = ab;
                    var t = f.i.url || "";
                    n.g.push(4);
                    n.i[4] = lf("top", t)
                }
                var w = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    var P = f.g.url.match(je),
                        D = P[1],
                        Ua = P[3],
                        Ja = P[4];
                    t = "";
                    D && (t += D + ":");
                    Ua && (t += "//", t += Ua, Ja && (t += ":" + Ja));
                    var ac = t
                } else ac = "";
                D = ab;
                w = [w, {
                    url: ac
                }];
                D.g.push(5);
                D.i[5] = w;
                sf(this.u, e, ab, this.j, c)
            } catch (ab) {
                try {
                    sf(this.u, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Xe(ab),
                        url: f && f.g.url
                    }, this.j, c)
                } catch (ed) {}
            }
            return this.A
        }
        aa(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.P(a, c instanceof Error ? c : Error(c), void 0, this.g || void 0)
            })
        }
    };
    var uf = class extends M {
            constructor() {
                super()
            }
        },
        vf = [2, 3, 4];
    var wf = class extends M {},
        xf = [3, 4, 5],
        yf = [6, 7];
    var zf = class extends M {
            constructor() {
                super()
            }
        },
        Af = [4, 5];

    function Bf(a, b) {
        var c = G(a, wf, 2, C());
        if (!c.length) return Cf(a, b);
        a = L(a, 1);
        if (a === 1) return c = Bf(c[0], b), c.success ? {
            success: !0,
            value: !c.value
        } : c;
        c = Pa(c, d => Bf(d, b));
        switch (a) {
            case 2:
                return c.find(d => d.success && !d.value) ? ? c.find(d => !d.success) ? ? {
                    success: !0,
                    value: !0
                };
            case 3:
                return c.find(d => d.success && d.value) ? ? c.find(d => !d.success) ? ? {
                    success: !0,
                    value: !1
                };
            default:
                return {
                    success: !1,
                    errorType: 3
                }
        }
    }

    function Cf(a, b) {
        var c = id(a, xf);
        a: {
            switch (c) {
                case 3:
                    var d = yd(a, 3, xf);
                    break a;
                case 4:
                    d = yd(a, 4, xf);
                    break a;
                case 5:
                    d = yd(a, 5, xf);
                    break a
            }
            d = void 0
        }
        if (!d) return {
            success: !1,
            errorType: 2
        };
        b = (b = b[c]) && b[d];
        if (!b) return {
            success: !1,
            property: d,
            da: c,
            errorType: 1
        };
        let e;
        try {
            var f = qd(a, 8, C());
            e = b(...f)
        } catch (g) {
            return {
                success: !1,
                property: d,
                da: c,
                errorType: 2
            }
        }
        f = L(a, 1);
        if (f === 4) return {
            success: !0,
            value: !!e
        };
        if (f === 5) return {
            success: !0,
            value: e != null
        };
        if (f === 12) a = K(a, hd(a, yf, 7));
        else a: {
            switch (c) {
                case 4:
                    a = xd(a, hd(a, yf, 6));
                    break a;
                case 5:
                    a = K(a, hd(a, yf, 7));
                    break a
            }
            a = void 0
        }
        if (a == null) return {
            success: !1,
            property: d,
            da: c,
            errorType: 3
        };
        if (f === 6) return {
            success: !0,
            value: e === a
        };
        if (f === 9) return {
            success: !0,
            value: e != null && xa(String(e), a) === 0
        };
        if (e == null) return {
            success: !1,
            property: d,
            da: c,
            errorType: 4
        };
        switch (f) {
            case 7:
                c = e < a;
                break;
            case 8:
                c = e > a;
                break;
            case 12:
                c = gb(a) && gb(e) && (new RegExp(a)).test(e);
                break;
            case 10:
                c = e != null && xa(String(e), a) === -1;
                break;
            case 11:
                c = e != null && xa(String(e), a) === 1;
                break;
            default:
                return {
                    success: !1,
                    errorType: 3
                }
        }
        return {
            success: !0,
            value: c
        }
    }

    function Df(a, b) {
        return a ? b ? Bf(a, b) : {
            success: !1,
            errorType: 1
        } : {
            success: !0,
            value: !0
        }
    };
    var Ef = class extends M {};
    var Ff = class extends M {
        getValue() {
            return F(this, Ef, 2)
        }
    };
    var Gf = class extends M {},
        Hf = Hd(Gf),
        If = [1, 2, 3, 6, 7, 8];
    var Jf = class extends M {
        constructor() {
            super()
        }
    };

    function Kf(a, b) {
        try {
            const c = d => [{
                [d.Da]: d.Ba
            }];
            return JSON.stringify([a.filter(d => d.ma).map(c), Fd(b), a.filter(d => !d.ma).map(c)])
        } catch (c) {
            return Lf(c, b), ""
        }
    }

    function Lf(a, b) {
        try {
            Ne({
                m: Xe(a instanceof Error ? a : Error(String(a))),
                b: L(b, 1) || null,
                v: K(b, 2) || null
            }, "rcs_internal")
        } catch (c) {}
    }
    var Mf = class {
        constructor(a, b) {
            var c = new Jf;
            a = E(c, 1, x(a), 0);
            b = E(a, 2, y(b), "");
            a = b.B;
            c = a[v];
            this.j = c & 2 ? b : Oc(b, a, c, !0)
        }
    };
    var Nf = class extends M {
        constructor() {
            super()
        }
        getWidth() {
            return sd(gc(z(this, 1)), Rc)
        }
        getHeight() {
            return sd(gc(z(this, 2)), Rc)
        }
        setHeight(a) {
            return A(this, 2, bc(a))
        }
    };
    var Of = class extends M {
        constructor() {
            super()
        }
    };
    var Pf = class extends M {
        constructor() {
            super()
        }
        getValue() {
            return L(this, 1)
        }
    };
    var Qf = class extends M {
        constructor() {
            super()
        }
        setPage(a) {
            return md(this, 2, a)
        }
        getContentUrl() {
            return K(this, 4)
        }
    };
    var Rf = class extends M {};

    function Sf(a) {
        return jd(a, Rf, 3)
    }
    var Tf = class extends M {};
    var Uf = class extends M {
        constructor() {
            super()
        }
        getContentUrl() {
            return K(this, 1)
        }
    };
    var Vf = class extends M {};

    function Wf(a) {
        var b = new Xf;
        return E(b, 1, x(a), 0)
    }
    var Xf = class extends M {
        constructor() {
            super()
        }
    };
    var Yf = class extends M {
            constructor() {
                super()
            }
        },
        Zf = [4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    var $f = class extends M {
        constructor() {
            super()
        }
    };

    function ag(a, b) {
        return E(a, 1, x(b), 0)
    }

    function bg(a, b) {
        return E(a, 2, x(b), 0)
    }
    var cg = class extends M {
        constructor() {
            super()
        }
    };
    var dg = class extends M {
            constructor() {
                super()
            }
        },
        eg = [1, 2];

    function fg(a, b) {
        return md(a, 1, b)
    }

    function gg(a, b) {
        return od(a, 2, b)
    }

    function hg(a, b) {
        return cd(a, 4, b, Xb)
    }

    function ig(a, b) {
        return od(a, 5, b)
    }

    function jg(a, b) {
        return E(a, 6, x(b), 0)
    }
    var kg = class extends M {
        constructor() {
            super()
        }
    };
    var lg = class extends M {
            constructor() {
                super()
            }
        },
        mg = [1, 2, 3, 4, 6];
    var ng = class extends M {
        constructor() {
            super()
        }
    };

    function og(a) {
        var b = new pg;
        return nd(b, 4, qg, a)
    }
    var pg = class extends M {
            constructor() {
                super()
            }
            getTagSessionCorrelator() {
                return sd(gc(z(this, 2)), Rc)
            }
        },
        qg = [4, 5, 7, 8, 9];
    var rg = class extends M {
        constructor() {
            super()
        }
    };
    var sg = class extends M {
        constructor() {
            super()
        }
    };
    var tg = class extends M {
        constructor() {
            super()
        }
        getTagSessionCorrelator() {
            return sd(gc(z(this, 1)), Rc)
        }
    };
    var ug = class extends M {
            constructor() {
                super()
            }
        },
        vg = [1, 7],
        wg = [4, 6, 8];
    class xg extends Mf {
        constructor() {
            super(...arguments)
        }
    }

    function yg(a, ...b) {
        zg(a, ...b.map(c => ({
            ma: !0,
            Da: 3,
            Ba: Fd(c)
        })))
    }

    function Ag(a, ...b) {
        zg(a, ...b.map(c => ({
            ma: !0,
            Da: 4,
            Ba: Fd(c)
        })))
    }

    function Bg(a, ...b) {
        zg(a, ...b.map(c => ({
            ma: !0,
            Da: 7,
            Ba: Fd(c)
        })))
    }
    var Cg = class extends xg {};
    var Dg = (a, b) => {
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: b.length < 65536,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(() => {})
    };

    function zg(a, ...b) {
        try {
            a.D && Kf(a.g.concat(b), a.j).length >= 65536 && Eg(a), a.u && !a.A && (a.A = !0, Fg(a.u, () => {
                Eg(a)
            })), a.g.push(...b), a.g.length >= a.C && Eg(a), a.g.length && a.i === null && (a.i = setTimeout(() => {
                Eg(a)
            }, a.I))
        } catch (c) {
            Lf(c, a.j)
        }
    }

    function Eg(a) {
        a.i !== null && (clearTimeout(a.i), a.i = null);
        if (a.g.length) {
            var b = Kf(a.g, a.j);
            a.H("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.g = []
        }
    }
    var Gg = class extends Cg {
            constructor(a, b, c, d, e, f) {
                super(a, b);
                this.H = Dg;
                this.I = c;
                this.C = d;
                this.D = e;
                this.u = f;
                this.g = [];
                this.i = null;
                this.A = !1
            }
        },
        Hg = class extends Gg {
            constructor(a, b, c = 1E3, d = 100, e = !1, f) {
                super(a, b, c, d, e && !0, f)
            }
        };

    function Ig(a, b) {
        var c = Date.now();
        c = Number.isFinite(c) ? Math.round(c) : 0;
        b = Bd(b, 1, c);
        c = He(window);
        b = Bd(b, 2, c);
        return Bd(b, 6, a.A)
    }

    function Jg(a, b, c, d, e, f) {
        if (a.j) {
            var g = bg(ag(new cg, b), c);
            b = jg(gg(fg(ig(hg(new kg, d), e), g), a.g.slice()), f);
            b = og(b);
            Ag(a.i, Ig(a, b));
            if (f === 1 || f === 3 || f === 4 && !a.g.some(h => L(h, 1) === L(g, 1) && L(h, 2) === c)) a.g.push(g), a.g.length > 100 && a.g.shift()
        }
    }

    function Kg(a, b, c, d) {
        if (a.j) {
            var e = new $f;
            b = A(e, 1, Yb(b));
            c = A(b, 2, Yb(c));
            d = A(c, 3, x(d));
            c = new pg;
            d = nd(c, 8, qg, d);
            Ag(a.i, Ig(a, d))
        }
    }

    function Lg(a, b, c, d, e) {
        if (a.j) {
            var f = new zf;
            b = md(f, 1, b);
            c = A(b, 2, x(c));
            d = A(c, 3, Yb(d));
            if (e.da === void 0) dd(d, 4, Af, x(e.errorType));
            else switch (e.da) {
                case 3:
                    c = new uf;
                    c = dd(c, 2, vf, x(e.property));
                    e = A(c, 1, x(e.errorType));
                    nd(d, 5, Af, e);
                    break;
                case 4:
                    c = new uf;
                    c = dd(c, 3, vf, x(e.property));
                    e = A(c, 1, x(e.errorType));
                    nd(d, 5, Af, e);
                    break;
                case 5:
                    c = new uf, c = dd(c, 4, vf, x(e.property)), e = A(c, 1, x(e.errorType)), nd(d, 5, Af, e)
            }
            e = new pg;
            e = nd(e, 9, qg, d);
            Ag(a.i, Ig(a, e))
        }
    }
    var Mg = class {
        constructor(a, b, c, d = new Hg(6, "unknown", b)) {
            this.A = a;
            this.u = c;
            this.i = d;
            this.g = [];
            this.j = a > 0 && re() < 1 / a
        }
    };
    var N = a => {
        var b = "Aa";
        if (a.Aa && a.hasOwnProperty(b)) return a.Aa;
        b = new a;
        return a.Aa = b
    };
    var Ng = class {
        constructor() {
            this.M = {
                [3]: {},
                [4]: {},
                [5]: {}
            }
        }
    };
    var Og = /^true$/.test("false");

    function Pg(a, b) {
        switch (b) {
            case 1:
                return yd(a, 1, If);
            case 2:
                return yd(a, 2, If);
            case 3:
                return yd(a, 3, If);
            case 6:
                return yd(a, 6, If);
            case 8:
                return yd(a, 8, If);
            default:
                return null
        }
    }

    function Qg(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return J(a, 1);
            case 7:
                return K(a, 3);
            case 2:
                return xd(a, 2);
            case 3:
                return K(a, 3);
            case 6:
                return qd(a, 4, C());
            case 8:
                return qd(a, 4, C());
            default:
                return null
        }
    }
    const Sg = Md(() => {
        if (!Og) return {};
        try {
            var a = window;
            try {
                var b = a.sessionStorage.getItem("GGDFSSK")
            } catch {
                b = null
            }
            if (b) return JSON.parse(b)
        } catch {}
        return {}
    });

    function Tg(a, b, c, d = 0) {
        N(Ug).j[d] = N(Ug).j[d] ? .add(b) ? ? (new Set).add(b);
        const e = Sg();
        if (e[b] != null) return e[b];
        b = Vg(d)[b];
        if (!b) return c;
        b = Hf(JSON.stringify(b));
        b = Wg(b);
        a = Qg(b, a);
        return a != null ? a : c
    }

    function Wg(a) {
        const b = N(Ng).M;
        if (b && id(a, If) !== 8) {
            const c = Ra(G(a, Ff, 5, C()), d => {
                d = Df(F(d, wf, 1), b);
                return d.success && d.value
            });
            if (c) return c.getValue() ? ? null
        }
        return F(a, Ef, 4) ? ? null
    }
    class Ug {
        constructor() {
            this.i = {};
            this.u = [];
            this.j = {};
            this.g = new Map
        }
    }

    function Xg(a, b = !1, c) {
        return !!Tg(1, a, b, c)
    }

    function Yg(a, b = 0, c) {
        a = Number(Tg(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function Zg(a, b = "", c) {
        a = Tg(3, a, b, c);
        return typeof a === "string" ? a : b
    }

    function $g(a, b = [], c) {
        a = Tg(6, a, b, c);
        return Array.isArray(a) ? a : b
    }

    function ah(a, b = [], c) {
        a = Tg(8, a, b, c);
        return Array.isArray(a) ? a : b
    }

    function Vg(a) {
        return N(Ug).i[a] || (N(Ug).i[a] = {})
    }

    function bh(a, b) {
        const c = Vg(b);
        se(a, (d, e) => {
            if (c[e]) {
                const g = Hf(JSON.stringify(d));
                if (I(g, hd(g, If, 8)) != null) {
                    var f = Hf(JSON.stringify(c[e]));
                    d = jd(g, Ef, 4);
                    f = qd(kd(f, Ef, 4), 4, C());
                    pd(d, f)
                }
                c[e] = Fd(g)
            } else c[e] = d
        })
    }

    function ch(a, b, c, d, e = !1) {
        var f = [],
            g = [];
        for (const u of b) {
            b = Vg(u);
            for (const n of a) {
                var h = id(n, If);
                const r = Pg(n, h);
                if (r) {
                    a: {
                        var k = r;
                        var l = h,
                            m = N(Ug).g.get(u) ? .get(r) ? .slice(0) ? ? [];
                        const t = new lg;
                        switch (l) {
                            case 1:
                                dd(t, 1, mg, x(k));
                                break;
                            case 2:
                                dd(t, 2, mg, x(k));
                                break;
                            case 3:
                                dd(t, 3, mg, x(k));
                                break;
                            case 6:
                                dd(t, 4, mg, x(k));
                                break;
                            case 8:
                                dd(t, 6, mg, x(k));
                                break;
                            default:
                                k = void 0;
                                break a
                        }
                        cd(t, 5, m, Xb);k = t
                    }
                    k && N(Ug).j[u] ? .has(r) && f.push(k);h === 8 && b[r] ? (k = Hf(JSON.stringify(b[r])), h = jd(n, Ef, 4), k = qd(kd(k, Ef, 4), 4, C()), pd(h,
                        k)) : k && N(Ug).g.get(u) ? .has(r) && g.push(k);e || (h = r, k = u, l = d, m = N(Ug), m.g.has(k) || m.g.set(k, new Map), m.g.get(k).has(h) || m.g.get(k).set(h, []), l && m.g.get(k).get(h).push(l));b[r] = Fd(n)
                }
            }
        }
        if (f.length || g.length) a = d ? ? void 0, c.j && c.u && (d = new ng, f = od(d, 2, f), g = od(f, 3, g), a && E(g, 1, Yb(a), 0), f = new pg, g = nd(f, 7, qg, g), Ag(c.i, Ig(c, g)))
    }

    function dh(a, b) {
        b = Vg(b);
        for (const c of a) {
            a = Hf(JSON.stringify(c));
            const d = id(a, If);
            (a = Pg(a, d)) && (b[a] || (b[a] = c))
        }
    }

    function eh() {
        return Object.keys(N(Ug).i).map(a => Number(a))
    }

    function fh(a) {
        N(Ug).u.includes(a) || bh(Vg(4), a)
    };

    function Q(a, b, c) {
        c.hasOwnProperty(a) || Object.defineProperty(c, String(a), {
            value: b
        })
    }

    function gh(a, b, c) {
        return b[a] || c
    }

    function hh(a) {
        Q(5, Xg, a);
        Q(6, Yg, a);
        Q(7, Zg, a);
        Q(8, $g, a);
        Q(17, ah, a);
        Q(13, dh, a);
        Q(15, fh, a)
    }

    function ih(a) {
        Q(4, b => {
            N(Ng).M = b
        }, a);
        Q(9, (b, c) => {
            var d = N(Ng);
            d.M[3][b] == null && (d.M[3][b] = c)
        }, a);
        Q(10, (b, c) => {
            var d = N(Ng);
            d.M[4][b] == null && (d.M[4][b] = c)
        }, a);
        Q(11, (b, c) => {
            var d = N(Ng);
            d.M[5][b] == null && (d.M[5][b] = c)
        }, a);
        Q(14, b => {
            var c = N(Ng);
            for (const d of [3, 4, 5]) Object.assign(c.M[d], b[d])
        }, a)
    }

    function jh(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };

    function kh(a, b, c) {
        a.j = gh(1, b, () => {});
        a.u = (d, e) => gh(2, b, () => [])(d, c, e);
        a.g = () => gh(3, b, () => [])(c);
        a.i = d => {
            gh(16, b, () => {})(d, c)
        }
    }
    class lh {
        j() {}
        i() {}
        u() {
            return []
        }
        g() {
            return []
        }
    };

    function sf(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof qf ? f = c : (f = new qf, se(c, (h, k) => {
                var l = f;
                const m = l.u++;
                h = lf(k, h);
                l.g.push(m);
                l.i[m] = h
            }));
            const g = pf(f, "/pagead/gen_204?id=" + b + "&");
            g && Ke(p, g)
        } catch (f) {}
    }

    function mh(a, b) {
        b >= 0 && b <= 1 && (a.g = b)
    }
    class nh {
        constructor() {
            this.g = Math.random()
        }
    };
    let oh, ph;
    const qh = new kf(window);
    (a => {
        oh = a ? ? new nh;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        mh(oh, window.google_srt);
        ph = new tf(oh, !0, qh);
        rf(ph, () => {});
        ph.j = !0;
        window.document.readyState == "complete" ? window.google_measure_js_timing || qh.disable() : qh.g && Od(window, "load", () => {
            window.google_measure_js_timing || qh.disable()
        })
    })();
    var rh = {
        Pb: 0,
        Ob: 1,
        Lb: 2,
        Gb: 3,
        Mb: 4,
        Hb: 5,
        Nb: 6,
        Jb: 7,
        Kb: 8,
        Fb: 9,
        Ib: 10,
        Qb: 11
    };
    var sh = {
        Sb: 0,
        Tb: 1,
        Rb: 2
    };

    function th(a) {
        if (a.g != 0) throw Error("Already resolved/rejected.");
    }
    var wh = class {
        constructor() {
            this.i = new uh(this);
            this.g = 0
        }
        resolve(a) {
            th(this);
            this.g = 1;
            this.u = a;
            vh(this.i)
        }
        reject(a) {
            th(this);
            this.g = 2;
            this.j = a;
            vh(this.i)
        }
    };

    function vh(a) {
        switch (a.g.g) {
            case 0:
                break;
            case 1:
                a.i && a.i(a.g.u);
                break;
            case 2:
                a.j && a.j(a.g.j);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    }
    var uh = class {
        constructor(a) {
            this.g = a
        }
        then(a, b) {
            if (this.i) throw Error("Then functions already set.");
            this.i = a;
            this.j = b;
            vh(this)
        }
    };
    const xh = class {
        constructor(a) {
            this.g = a.slice(0)
        }
        forEach(a) {
            this.g.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new xh(Oa(this.g, a))
        }
        apply(a) {
            return new xh(a(this.g.slice(0)))
        }
        sort(a) {
            return new xh(this.g.slice(0).sort(a))
        }
        get(a) {
            return this.g[a]
        }
        add(a) {
            const b = this.g.slice(0);
            b.push(a);
            return new xh(b)
        }
    };

    function yh(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };
    const Ah = class {
        constructor() {
            this.g = {};
            this.i = {}
        }
        set(a, b) {
            const c = zh(a);
            this.g[c] = b;
            this.i[c] = a
        }
        remove(a) {
            a = zh(a);
            this.g[a] = void 0;
            this.i[a] = void 0
        }
        get(a, b) {
            a = zh(a);
            return this.g[a] !== void 0 ? this.g[a] : b
        }
        clear() {
            this.g = {};
            this.i = {}
        }
    };

    function zh(a) {
        return a instanceof Object ? String(na(a)) : a + ""
    };

    function Bh(a) {
        return new Ch({
            value: a
        }, null)
    }

    function Dh(a) {
        return new Ch(null, a)
    }

    function Eh(a) {
        try {
            return Bh(a())
        } catch (b) {
            return Dh(b)
        }
    }

    function Fh(a) {
        return a.g != null ? a.getValue() : null
    }

    function Gh(a, b) {
        a.g != null && b(a.getValue());
        return a
    }

    function Hh(a, b) {
        a.g != null || b(a.i);
        return a
    }
    class Ch {
        constructor(a, b) {
            this.g = a;
            this.i = b
        }
        getValue() {
            return this.g.value
        }
        isError() {
            return this.g == null
        }
        map(a) {
            return this.g != null ? (a = a(this.getValue()), a instanceof Ch ? a : Bh(a)) : this
        }
    };
    const Ih = class {
        constructor(a) {
            this.g = new Ah;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.g.set(a, !0)
        }
        remove(a) {
            this.g.remove(a)
        }
        removeAll() {
            this.g.clear()
        }
        contains(a) {
            return this.g.g[zh(a)] !== void 0
        }
    };
    class Jh {
        constructor() {
            this.g = new Ah
        }
        set(a, b) {
            let c = this.g.get(a);
            c || (c = new Ih, this.g.set(a, c));
            c.add(b)
        }
    };
    var R = class extends M {
        getId() {
            return H(this, 3)
        }
    };
    class Kh {
        constructor({
            kb: a,
            Ub: b,
            ec: c,
            xb: d
        }) {
            this.g = b;
            this.u = new xh(a || []);
            this.j = d;
            this.i = c
        }
    };
    const Mh = a => {
            const b = [],
                c = a.u;
            c && c.g.length && b.push({
                shortName: "a",
                ca: Lh(c)
            });
            a.g != null && b.push({
                shortName: "as",
                ca: a.g
            });
            a.i != null && b.push({
                shortName: "i",
                ca: String(a.i)
            });
            a.j != null && b.push({
                shortName: "rp",
                ca: String(a.j)
            });
            b.sort(function(d, e) {
                return d.shortName.localeCompare(e.shortName)
            });
            b.unshift({
                shortName: "t",
                ca: "aa"
            });
            return b
        },
        Lh = a => {
            a = a.g.slice(0).map(Nh);
            a = JSON.stringify(a);
            return te(a)
        },
        Nh = a => {
            const b = {};
            H(a, 7) != null && (b.q = H(a, 7));
            ud(a, 2) != null && (b.o = ud(a, 2));
            ud(a, 5) != null && (b.p = ud(a, 5));
            return b
        };
    var Oh = class extends M {
        setLocation(a) {
            return A(this, 1, x(a))
        }
    };

    function Ph(a) {
        const b = [].slice.call(arguments).filter(Ld(e => e === null));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.Ua || []);
            d = Object.assign(d, e.fb)
        });
        return new Qh(c, d)
    }

    function Rh(a) {
        switch (a) {
            case 1:
                return new Qh(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new Qh(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new Qh(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new Qh(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function Sh(a) {
        if (a == null) var b = null;
        else {
            var c = Mh(a);
            a = [];
            for (b of c) c = String(b.ca), a.push(b.shortName + "." + (c.length <= 20 ? c : c.slice(0, 19) + "_"));
            b = new Qh(null, {
                google_placement_id: a.join("~")
            })
        }
        return b
    }
    class Qh {
        constructor(a, b) {
            this.Ua = a;
            this.fb = b
        }
    };
    const Th = new Qh(["google-auto-placed"], {
        google_reactive_ad_format: 40,
        google_tag_origin: "qs"
    });
    var Uh = Hd(class extends M {});
    var Vh = class extends M {};
    var Wh = class extends M {};
    var Xh = class extends M {};
    var Yh = class extends M {};
    var Zh = class extends M {};

    function $h(a) {
        if (a.nodeType != 1) var b = !1;
        else if (b = a.tagName == "INS") a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    };

    function ai(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && d.nodeType == 8;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        $h(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    };
    var S = class {
            constructor(a, b = !1) {
                this.g = a;
                this.defaultValue = b
            }
        },
        bi = class {
            constructor(a, b = 0) {
                this.g = a;
                this.defaultValue = b
            }
        },
        ci = class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        };
    var di = new S(1333),
        ei = new bi(1359),
        fi = new bi(1358),
        gi = new S(1360),
        hi = new bi(1357),
        ii = new S(1345),
        ji = new S(1371, !0),
        ki = new S(1332),
        li = new bi(1130, 100),
        mi = new bi(1340, .2),
        ni = new bi(1338, .3),
        oi = new bi(1336, 1.2),
        pi = new bi(1339, .3),
        qi = new S(1337),
        ri = new class {
            constructor(a, b = "") {
                this.g = a;
                this.defaultValue = b
            }
        }(14),
        si = new S(1370, !0),
        ti = new S(1342),
        ui = new S(1344),
        vi = new bi(1343, 300),
        wi = new S(316),
        xi = new S(313),
        yi = new S(369),
        zi = new S(1318, !0),
        Ai = new S(13775),
        Bi = new S(626390500),
        Ci = new ci(627094447, "1 2 4 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 24 29 30 34".split(" ")),
        Di = new bi(643258048),
        Ei = new bi(643258049),
        Fi = new ci(641845510, ["33"]),
        Gi = new S(622128248),
        Hi = new S(676863674, !0),
        Ii = new ci(635821288, ["29_18", "30_19"]),
        Ji = new ci(636146137, ["29_5", "30_6"]),
        Ki = new ci(627094446, "1 2 4 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 24 29 30 34".split(" ")),
        Li = new S(626062008),
        Mi = new S(679043940),
        Ni = new ci(683929765),
        Oi = new S(643258050),
        Pi = new S(506914611),
        Qi = new S(626062007),
        Ri = new S(45650663),
        Si = new bi(684147711, -1),
        Ti = new bi(684147712, -1),
        Ui = new S(662101537),
        Vi = new S(10017, !0),
        Wi = new bi(1079, 5),
        Xi = new S(10013),
        Fe = new class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        }(1934, ["AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==", "Amm8/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==",
            "A9wSqI5i0iwGdf6L1CERNdmsTPgVu44ewj8QxTBYgsv1LCPUVF7YmWOvTappqB1139jAymxUW/RO8zmMqo4zlAAAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A+d7vJfYtay4OUbdtRPZA3y7bKQLsxaMEPmxgfhBGqKXNrdkCQeJlUwqa6EBbSfjwFtJWTrWIioXeMW+y8bWAgQAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"
        ]),
        Yi = new S(84);
    var Ee = class {
        constructor() {
            const a = {};
            this.i = (b, c) => a[b] != null ? a[b] : c;
            this.u = (b, c) => a[b] != null ? a[b] : c;
            this.g = (b, c) => a[b] != null ? a[b] : c;
            this.A = (b, c) => a[b] != null ? a[b] : c;
            this.j = (b, c) => a[b] != null ? c.concat(a[b]) : c;
            this.C = () => {}
        }
    };

    function T(a) {
        return N(Ee).i(a.g, a.defaultValue)
    }

    function U(a) {
        return N(Ee).u(a.g, a.defaultValue)
    }

    function Zi(a) {
        return N(Ee).j(a.g, a.defaultValue)
    };

    function $i(a, b) {
        const c = e => {
                e = aj(e);
                return e == null ? !1 : 0 < e
            },
            d = e => {
                e = aj(e);
                return e == null ? !1 : 0 > e
            };
        switch (b) {
            case 0:
                return {
                    init: bj(a.previousSibling, c),
                    ia: e => bj(e.previousSibling, c),
                    oa: 0
                };
            case 2:
                return {
                    init: bj(a.lastChild, c),
                    ia: e => bj(e.previousSibling, c),
                    oa: 0
                };
            case 3:
                return {
                    init: bj(a.nextSibling, d),
                    ia: e => bj(e.nextSibling, d),
                    oa: 3
                };
            case 1:
                return {
                    init: bj(a.firstChild, d),
                    ia: e => bj(e.nextSibling, d),
                    oa: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function aj(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function bj(a, b) {
        return a && b(a) ? a : null
    };
    var cj = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };
    var dj = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5,
        full_page: 6,
        side_rails: 7
    };

    function ej(a) {
        a = a.document;
        let b = {};
        a && (b = a.compatMode == "CSS1Compat" ? a.documentElement : a.body);
        return b || {}
    }

    function fj(a) {
        return ej(a).clientWidth ? ? void 0
    };

    function gj(a, b) {
        do {
            const c = qe(a, b);
            if (c && c.position == "fixed") return !1
        } while (a = a.parentElement);
        return !0
    };

    function hj(a, b) {
        var c = ["width", "height"];
        for (let e = 0; e < c.length; e++) {
            const f = "google_ad_" + c[e];
            if (!b.hasOwnProperty(f)) {
                var d = ye(a[c[e]]);
                d = d === null ? null : Math.round(d);
                d != null && (b[f] = d)
            }
        }
    }

    function ij(a, b) {
        return !((we.test(b.google_ad_width) || ve.test(a.style.width)) && (we.test(b.google_ad_height) || ve.test(a.style.height)))
    }

    function jj(a, b) {
        return (a = kj(a, b)) ? a.y : 0
    }

    function kj(a, b) {
        try {
            const c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (c) {
            return null
        }
    }

    function lj(a, b, c, d, e) {
        if (a !== a.top) return ne(a) ? 3 : 16;
        if (!(fj(a) < 488)) return 4;
        if (!(a.innerHeight >= a.innerWidth)) return 5;
        const f = fj(a);
        if (!f || (f - c) / f > d) a = 6;
        else {
            if (c = e.google_full_width_responsive !== "true") a: {
                c = b.parentElement;
                for (b = fj(a); c; c = c.parentElement)
                    if ((d = qe(c, a)) && (e = ye(d.width)) && !(e >= b) && d.overflow !== "visible") {
                        c = !0;
                        break a
                    }
                c = !1
            }
            a = c ? 7 : !0
        }
        return a
    }

    function mj(a, b, c, d) {
        const e = lj(b, c, a, U(pi), d);
        e !== !0 ? a = e : d.google_full_width_responsive === "true" || gj(c, b) ? (b = fj(b), a = b - a, a = b && a >= 0 ? !0 : b ? a < -10 ? 11 : a < 0 ? 14 : 12 : 10) : a = 9;
        return a
    }

    function nj(a, b, c) {
        a = a.style;
        b === "rtl" ? a.marginRight = c : a.marginLeft = c
    }

    function oj(a, b) {
        if (b.nodeType === 3) return /\S/.test(b.data);
        if (b.nodeType === 1) {
            if (/^(script|style)$/i.test(b.nodeName)) return !1;
            let c;
            try {
                c = qe(b, a)
            } catch (d) {}
            return !c || c.display !== "none" && !(c.position === "absolute" && (c.visibility === "hidden" || c.visibility === "collapse"))
        }
        return !1
    }

    function pj(a, b, c) {
        a = kj(b, a);
        return c === "rtl" ? -a.x : a.x
    }

    function qj(a, b) {
        var c;
        c = (c = b.parentElement) ? (c = qe(c, a)) ? c.direction : "" : "";
        if (c) {
            var d = b.style;
            d.border = d.borderStyle = d.outline = d.outlineStyle = d.transition = "none";
            d.borderSpacing = d.padding = "0";
            nj(b, c, "0px");
            d.width = `${fj(a)}px`;
            if (pj(a, b, c) !== 0) {
                nj(b, c, "0px");
                var e = pj(a, b, c);
                nj(b, c, `${-1*e}px`);
                a = pj(a, b, c);
                a !== 0 && a !== e && nj(b, c, `${e/(a-e)*e}px`)
            }
            d.zIndex = "30"
        }
    };
    var rj = class {
        constructor(a, b) {
            this.Y = a;
            this.j = b
        }
        height() {
            return this.j
        }
        g(a) {
            return a > U(vi) && this.j > 300 ? this.Y : Math.min(1200, Math.round(a))
        }
        i() {}
    };
    var sj = (a, b, c) => {
            let d;
            return a.style && !!a.style[c] && ye(a.style[c]) || (d = qe(a, b)) && !!d[c] && ye(d[c]) || null
        },
        tj = (a, b) => {
            let c;
            return a.style && a.style.zIndex || (c = qe(a, b)) && c.zIndex || null
        },
        uj = a => b => b.Y <= a,
        xj = (a, b, c, d) => {
            const e = a && vj(c, b),
                f = wj(b, d);
            return g => !(e && g.height() >= f)
        },
        yj = a => b => b.height() <= a,
        vj = (a, b) => jj(a, b) < ej(b).clientHeight - 100,
        zj = (a, b) => {
            var c = sj(b, a, "height");
            if (c) return c;
            var d = b.style.height;
            b.style.height = "inherit";
            c = sj(b, a, "height");
            b.style.height = d;
            if (c) return c;
            c = Infinity;
            do(d = b.style &&
                ye(b.style.height)) && (c = Math.min(c, d)), (d = sj(b, a, "maxHeight")) && (c = Math.min(c, d)); while (b.parentElement && (b = b.parentElement) && b.tagName !== "HTML");
            return c
        };
    const wj = (a, b) => {
        const c = Te(a) === 0;
        return b && c ? Math.max(250, 2 * ej(a).clientHeight / 3) : 250
    };
    var Aj = {
        google_ad_channel: !0,
        google_ad_client: !0,
        google_ad_host: !0,
        google_ad_host_channel: !0,
        google_adtest: !0,
        google_tag_for_child_directed_treatment: !0,
        google_tag_for_under_age_of_consent: !0,
        google_tag_partner: !0,
        google_restrict_data_processing: !0,
        google_page_url: !0,
        google_debug_params: !0,
        google_adbreak_test: !0,
        google_ad_frequency_hint: !0,
        google_admob_interstitial_slot: !0,
        google_admob_rewarded_slot: !0,
        google_admob_ads_only: !0,
        google_ad_start_delay_hint: !0,
        google_max_ad_content_rating: !0,
        google_traffic_source: !0,
        google_overlays: !0,
        google_privacy_treatments: !0,
        google_special_category_data: !0,
        google_ad_intent_query: !0,
        google_ad_intent_qetid: !0,
        google_ad_intent_eids: !0
    };
    const Bj = RegExp("(^| )adsbygoogle($| )");

    function Cj(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = be(d.property);
            a[e] = d.value
        }
    };
    var Dj = class extends M {
        g() {
            return td(this, 23)
        }
    };
    var Ej = class extends M {
        g() {
            return rd(this, 1)
        }
    };
    var Fj = class extends M {};
    var Gj = class extends M {};
    var Hj = class extends M {};
    var Ij = class extends M {};
    var Jj = class extends M {
            getName() {
                return H(this, 4)
            }
        },
        Kj = [1, 2, 3];
    var Lj = class extends M {};
    var Mj = class extends M {};
    var Oj = class extends M {
            g() {
                return zd(this, Mj, 2, Nj)
            }
        },
        Nj = [1, 2];
    var Pj = class extends M {
        g() {
            return F(this, Oj, 3)
        }
    };
    var Qj = class extends M {
            getMetadata() {
                return F(this, Zh, 6)
            }
        },
        Rj = Hd(Qj);

    function Sj(a) {
        var b = [];
        yh(a.getElementsByTagName("p"), function(c) {
            Tj(c) >= 100 && b.push(c)
        });
        return b
    }

    function Tj(a) {
        if (a.nodeType == 3) return a.length;
        if (a.nodeType != 1 || a.tagName == "SCRIPT") return 0;
        var b = 0;
        yh(a.childNodes, function(c) {
            b += Tj(c)
        });
        return b
    }

    function Uj(a) {
        return a.length == 0 || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function Vj(a, b) {
        if (a.g == null) return b;
        switch (a.g) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.g);
        }
    }
    const Wj = class {
        constructor(a, b, c, d) {
            this.u = a;
            this.i = b;
            this.j = c;
            this.g = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.u)
            } catch (f) {}
            if (!b.length) return [];
            a = Ta(b);
            a = Vj(this, a);
            typeof this.i === "number" && (b = this.i, b < 0 && (b += a.length), a = b >= 0 && b < a.length ? [a[b]] : []);
            if (typeof this.j === "number") {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = Sj(a[c]),
                        e = this.j;
                    e < 0 && (e += d.length);
                    e >= 0 && e < d.length && b.push(d[e])
                }
                a = b
            }
            return a
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.u,
                occurrenceIndex: this.i,
                paragraphIndex: this.j,
                ignoreMode: this.g
            })
        }
    };
    class Xj {
        constructor() {
            this.g = ce `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`
        }
        P(a, b, c = .01, d = "jserror") {
            if (Math.random() > c) return !1;
            We(b) || (b = new Ve(b, {
                context: a,
                id: d
            }));
            p.google_js_errors = p.google_js_errors || [];
            p.google_js_errors.push(b);
            p.error_rep_loaded || (oe(p.document, this.g), p.error_rep_loaded = !0);
            return !1
        }
        ea(a, b) {
            try {
                return b()
            } catch (c) {
                if (!this.P(a, c, .01, "jserror")) throw c;
            }
        }
        pa(a, b) {
            return (...c) => this.ea(a, () => b.apply(void 0, c))
        }
        aa(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.P(a, c instanceof Error ? c : Error(c), void 0)
            })
        }
    };
    const Yj = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        b.length < 2048 && b.push(a)
    };
    var Zj = (a, b, c, d, e = !1) => {
            const f = d || window,
                g = typeof queueMicrotask !== "undefined";
            return function() {
                e && g && queueMicrotask(() => {
                    f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                    f.google_rum_task_id_counter += 1
                });
                const h = df();
                let k, l = 3;
                try {
                    k = b.apply(this, arguments)
                } catch (m) {
                    l = 13;
                    if (!c) throw m;
                    c(a, m)
                } finally {
                    f.google_measure_js_timing && h && Yj({
                        label: a.toString(),
                        value: h,
                        duration: (df() || 0) - h,
                        type: l,
                        ...(e && g && {
                            taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                        })
                    }, f)
                }
                return k
            }
        },
        ak = (a, b) => Zj(a, b, (c, d) => {
            (new Xj).P(c, d)
        }, void 0, !1);

    function bk(a, b, c) {
        return Zj(a, b, void 0, c, !0).apply()
    }

    function ck(a) {
        if (!a) return null;
        var b = H(a, 7);
        if (H(a, 1) || a.getId() || qd(a, 4, C()).length > 0) {
            var c = H(a, 3),
                d = H(a, 1),
                e = qd(a, 4, C(Ib));
            b = ud(a, 2);
            var f = ud(a, 5);
            a = dk(I(a, 6));
            var g = "";
            d && (g += d);
            c && (g += "#" + Uj(c));
            if (e)
                for (c = 0; c < e.length; c++) g += "." + Uj(e[c]);
            b = (e = g) ? new Wj(e, b, f, a) : null
        } else b = b ? new Wj(b, ud(a, 2), ud(a, 5), dk(I(a, 6))) : null;
        return b
    }
    var ek = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function dk(a) {
        return a == null ? a : ek[a]
    }
    var fk = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function gk(a) {
        return a.google_ama_state = a.google_ama_state || {}
    }

    function hk(a) {
        a = gk(a);
        return a.optimization = a.optimization || {}
    };
    var ik = a => {
        switch (I(a, 8)) {
            case 1:
            case 2:
                if (a == null) var b = null;
                else b = F(a, R, 1), b == null ? b = null : (a = I(a, 2), b = a == null ? null : new Kh({
                    kb: [b],
                    xb: a
                }));
                return b != null ? Bh(b) : Dh(Error("Missing dimension when creating placement id"));
            case 3:
                return Dh(Error("Missing dimension when creating placement id"));
            default:
                return Dh(Error("Invalid type: " + I(a, 8)))
        }
    };
    var jk = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function kk(a, b) {
        const c = new Jh,
            d = new Ih;
        b.forEach(e => {
            if (zd(e, Hj, 1, Kj)) {
                e = zd(e, Hj, 1, Kj);
                if (F(e, Vh, 1) && F(F(e, Vh, 1), R, 1) && F(e, Vh, 2) && F(F(e, Vh, 2), R, 1)) {
                    const g = lk(a, F(F(e, Vh, 1), R, 1)),
                        h = lk(a, F(F(e, Vh, 2), R, 1));
                    if (g && h)
                        for (var f of jk({
                                anchor: g,
                                position: I(F(e, Vh, 1), 2)
                            }, {
                                anchor: h,
                                position: I(F(e, Vh, 2), 2)
                            })) c.set(na(f.anchor), f.position)
                }
                F(e, Vh, 3) && F(F(e, Vh, 3), R, 1) && (f = lk(a, F(F(e, Vh, 3), R, 1))) && c.set(na(f), I(F(e, Vh, 3), 2))
            } else zd(e, Ij, 2, Kj) ? mk(a, zd(e, Ij, 2, Kj), c) : zd(e, Gj, 3, Kj) && nk(a, zd(e, Gj, 3, Kj), d)
        });
        return new ok(c,
            d)
    }
    class ok {
        constructor(a, b) {
            this.i = a;
            this.g = b
        }
    }
    const mk = (a, b, c) => {
            F(b, Vh, 2) ? (b = F(b, Vh, 2), (a = lk(a, F(b, R, 1))) && c.set(na(a), I(b, 2))) : F(b, R, 1) && (a = pk(a, F(b, R, 1))) && a.forEach(d => {
                d = na(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        nk = (a, b, c) => {
            F(b, R, 1) && (a = pk(a, F(b, R, 1))) && a.forEach(d => {
                c.add(na(d))
            })
        },
        lk = (a, b) => (a = pk(a, b)) && a.length > 0 ? a[0] : null,
        pk = (a, b) => (b = ck(b)) ? b.query(a) : null;
    var V = class extends Error {
        constructor(a = "") {
            super();
            this.name = "TagError";
            this.message = a ? "adsbygoogle.push() error: " + a : "";
            Error.captureStackTrace ? Error.captureStackTrace(this, V) : this.stack = Error().stack || ""
        }
    };
    let qk, W;
    const rk = new kf(p);
    var sk = a => {
        a != null && (p.google_measure_js_timing = a);
        p.google_measure_js_timing || rk.disable()
    };
    ((a, b = !0) => {
        qk = a || new nh;
        typeof p.google_srt !== "number" && (p.google_srt = Math.random());
        mh(qk, p.google_srt);
        W = new tf(qk, b, rk);
        W.j = !0;
        p.document.readyState == "complete" ? sk() : rk.g && Od(p, "load", () => {
            sk()
        })
    })();
    var tk = (a, b, c) => W.ea(a, b, c),
        uk = (a, b, c) => {
            const d = N(lh).g();
            !b.eid && d.length && (b.eid = d.toString());
            sf(qk, a, b, !0, c)
        },
        vk = (a, b) => {
            W.aa(a, b)
        },
        wk = (a, b, c, d) => (We(b) ? b.msg || Xe(b.error) : Xe(b)).indexOf("TagError") === 0 ? ((We(b) ? b.error : b).pbr = !0, !1) : W.P(a, b, c, d);
    var xk = class {
        constructor() {
            this.g = Ge();
            this.i = 0
        }
    };

    function yk(a, b, c) {
        switch (c) {
            case 2:
            case 3:
                break;
            case 1:
            case 4:
                b = b.parentElement;
                break;
            default:
                throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (zk(b)) return !0;
            if (a.g.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.g.add(d));
        return !1
    }

    function Ak(a) {
        a = Bk(a);
        return a.has("all") || a.has("after")
    }

    function Ck(a) {
        a = Bk(a);
        return a.has("all") || a.has("before")
    }

    function Bk(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function zk(a) {
        const b = Bk(a);
        return a && (a.tagName === "AUTO-ADS-EXCLUSION-AREA" || b.has("inside") || b.has("all"))
    }
    var Ek = class {
        constructor() {
            this.g = new Set;
            this.i = new xk
        }
    };

    function Fk(a, b) {
        if (!a) return !1;
        a = qe(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return a == "left" || a == "right"
    }

    function Gk(a) {
        for (a = a.previousSibling; a && a.nodeType != 1;) a = a.previousSibling;
        return a ? a : null
    }

    function Hk(a) {
        return !!a.nextSibling || !!a.parentNode && Hk(a.parentNode)
    };

    function Ik(a = null) {
        ({
            googletag: a
        } = a ? ? window);
        return a ? .apiReady ? a : void 0
    };
    const Jk = a => {
        const b = Ik(a);
        return b ? Oa(Pa(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => c != null) : null
    };
    var Kk = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };

    function Lk(a, b) {
        if (a.u) return !0;
        a.u = !0;
        const c = G(a.j, Xh, 1, C());
        a.i = 0;
        const d = Mk(a.H);
        var e = a.g;
        var f;
        try {
            var g = (f = e.localStorage.getItem("google_ama_settings")) ? Uh(f) : null
        } catch (u) {
            g = null
        }
        f = g !== null && J(g, 2, !1);
        g = gk(e);
        f && (g.eatf = !0, Pe(7, [!0, 0, !1]));
        b: {
            var h = {
                    sb: !1,
                    tb: !1
                },
                k = Ta(e.document.querySelectorAll(".google-auto-placed"));
            const u = Ta(e.document.querySelectorAll("ins.adsbygoogle[data-anchor-status]")),
                n = Ta(e.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]"));
            var l = (Jk(e) ||
                Ta(e.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(Ta(e.document.querySelectorAll("iframe[id^=google_ads_iframe]")));
            const r = Ta(e.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")),
                t = Ta(e.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
                w = Ta(e.document.querySelectorAll("div.googlepublisherpluginad")),
                P = Ta(e.document.querySelectorAll("html > ins.adsbygoogle"));
            let D = [].concat(Ta(e.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), Ta(e.document.querySelectorAll("body ins.adsbygoogle")));f = [];
            for (const [Ua, Ja] of [
                    [h.Yb, k],
                    [h.sb, u],
                    [h.bc, n],
                    [h.Zb, l],
                    [h.dc, r],
                    [h.Xb, t],
                    [h.ac, w],
                    [h.tb, P]
                ]) Ua === !1 ? f = f.concat(Ja) : D = D.concat(Ja);h = Kk(D);f = Kk(f);
            h = h.slice(0);
            for (m of f)
                for (f = 0; f < h.length; f++)(m.contains(h[f]) || h[f].contains(m)) && h.splice(f, 1);
            var m = h;e = ej(e).clientHeight;
            for (f = 0; f < m.length; f++)
                if (!(m[f].getBoundingClientRect().top > e)) {
                    e = !0;
                    break b
                }
            e = !1
        }
        e = e ? g.eatfAbg = !0 : !1;
        if (e) return !0;
        e = new Ih([2]);
        for (g = 0; g < c.length; g++) {
            m = a;
            h = c[g];
            f = g;
            l = b;
            if (F(h, Oh, 4) && e.contains(I(F(h, Oh, 4), 1)) && I(h, 8) === 1 && Nk(h, d)) {
                m.i++;
                if (l = Ok(m, h, l, d)) k = gk(m.g), k.numAutoAdsPlaced || (k.numAutoAdsPlaced = 0), F(h, R, 1) && ud(F(h, R, 1), 5) != null && (k.numPostPlacementsPlaced ? k.numPostPlacementsPlaced++ :
                    k.numPostPlacementsPlaced = 1), k.placed == null && (k.placed = []), k.numAutoAdsPlaced++, k.placed.push({
                    index: f,
                    element: l.ga
                }), Pe(7, [!1, m.i, !0]);
                m = l
            } else m = null;
            if (m) return !0
        }
        Pe(7, [!1, a.i, !1]);
        return !1
    }

    function Ok(a, b, c, d) {
        if (!Nk(b, d) || I(b, 8) != 1) return null;
        d = F(b, R, 1);
        if (!d) return null;
        d = ck(d);
        if (!d) return null;
        d = d.query(a.g.document);
        if (d.length == 0) return null;
        d = d[0];
        var e = I(b, 2);
        e = fk[e];
        e = e === void 0 ? null : e;
        var f;
        if (!(f = e == null)) {
            a: {
                f = a.g;
                switch (e) {
                    case 0:
                        f = Fk(Gk(d), f);
                        break a;
                    case 3:
                        f = Fk(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = Fk(g ? g.nodeType == 1 ? g : Gk(g) : null, f);
                        break a
                }
                f = !1
            }
            if (c = !f && !(!c && e == 2 && !Hk(d))) c = e == 1 || e == 2 ? d : d.parentNode,
            c = !(c && !$h(c) && c.offsetWidth <= 0);f = !c
        }
        if (!(c = f)) {
            c = a.C;
            f = I(b, 2);
            g = c.i;
            var h = na(d);
            g = g.g.get(h);
            if (!(g = g ? g.contains(f) : !1)) a: {
                if (c.g.contains(na(d))) switch (f) {
                    case 2:
                    case 3:
                        g = !0;
                        break a;
                    default:
                        g = !1;
                        break a
                }
                for (f = d.parentElement; f;) {
                    if (c.g.contains(na(f))) {
                        g = !0;
                        break a
                    }
                    f = f.parentElement
                }
                g = !1
            }
            c = g
        }
        if (!c) {
            c = a.D;
            g = I(b, 2);
            a: switch (g) {
                case 1:
                    f = Ak(d.previousElementSibling) || Ck(d);
                    break a;
                case 4:
                    f = Ak(d) || Ck(d.nextElementSibling);
                    break a;
                case 2:
                    f = Ck(d.firstElementChild);
                    break a;
                case 3:
                    f = Ak(d.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + g);
            }
            g = yk(c, d, g);
            c = c.i;
            uk("ama_exclusion_zone", {
                typ: f ? g ? "siuex" : "siex" : g ? "suex" : "noex",
                cor: c.g,
                num: c.i++,
                dvc: ze()
            }, .1);
            c = f || g
        }
        if (c) return null;
        f = F(b, Wh, 3);
        c = {};
        f && (c.ib = H(f, 1), c.Sa = H(f, 2), c.ob = !!td(f, 3));
        f = F(b, Oh, 4) && I(F(b, Oh, 4), 2) ? I(F(b, Oh, 4), 2) : null;
        f = Rh(f);
        g = ud(b, 12) != null ? ud(b, 12) : null;
        g = g == null ? null : new Qh(null, {
            google_ml_rank: g
        });
        b = Pk(a, b);
        b = Ph(a.A, f, g, b);
        f = a.g;
        a = a.I;
        h = f.document;
        var k = c.ob || !1;
        g = fe((new ge(h)).g, "DIV");
        const l = g.style;
        l.width = "100%";
        l.height = "auto";
        l.clear = k ? "both" : "none";
        k = g.style;
        k.textAlign = "center";
        c.wb && Cj(k, c.wb);
        h = fe((new ge(h)).g, "INS");
        k = h.style;
        k.display = "block";
        k.margin = "auto";
        k.backgroundColor = "transparent";
        c.ib && (k.marginTop = c.ib);
        c.Sa && (k.marginBottom = c.Sa);
        c.jb && Cj(k, c.jb);
        g.appendChild(h);
        c = {
            ya: g,
            ga: h
        };
        c.ga.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.Ua) c.ya.className = h.join(" ");
        h = c.ga;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client", a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a: {
            try {
                var m = c.ya;
                if (T(xi)) {
                    {
                        const w = $i(d, e);
                        if (w.init) {
                            var u =
                                w.init;
                            for (d = u; d = w.ia(d);) u = d;
                            var n = {
                                anchor: u,
                                position: w.oa
                            }
                        } else n = {
                            anchor: d,
                            position: e
                        }
                    }
                    m["google-ama-order-assurance"] = 0;
                    ai(m, n.anchor, n.position)
                } else ai(m, d, e);
                b: {
                    var r = c.ga;r.dataset.adsbygoogleStatus = "reserved";r.className += " adsbygoogle-noablate";m = {
                        element: r
                    };
                    var t = b && b.fb;
                    if (r.hasAttribute("data-pub-vars")) {
                        try {
                            t = JSON.parse(r.getAttribute("data-pub-vars"))
                        } catch (w) {
                            break b
                        }
                        r.removeAttribute("data-pub-vars")
                    }
                    t && (m.params = t);
                    (f.adsbygoogle = f.adsbygoogle || []).push(m)
                }
            } catch (w) {
                (r = c.ya) && r.parentNode &&
                    (t = r.parentNode, t.removeChild(r), $h(t) && (t.style.display = t.getAttribute("data-init-display") || "none"));
                r = !1;
                break a
            }
            r = !0
        }
        return r ? c : null
    }

    function Pk(a, b) {
        return Fh(Hh(ik(b).map(Sh), c => {
            gk(a.g).exception = c
        }))
    }
    const Qk = class {
        constructor(a, b, c, d, e) {
            this.g = a;
            this.I = b;
            this.j = c;
            this.A = e || null;
            (this.H = d) ? (a = a.document, d = G(d, Jj, 5, C(Ib)), d = kk(a, d)) : d = kk(a.document, []);
            this.C = d;
            this.D = new Ek;
            this.i = 0;
            this.u = !1
        }
    };

    function Mk(a) {
        const b = {};
        a && Xc(a, 6, Wb, C()).forEach(c => {
            b[c] = !0
        });
        return b
    }

    function Nk(a, b) {
        return a && Vc(a, Oh, 4) && b[I(F(a, Oh, 4), 2)] ? !1 : !0
    };
    var Rk = Hd(class extends M {});

    function Sk(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? Eh(() => Rk(c)) : Bh(null)
    };

    function Tk() {
        if (Uk) return Uk;
        var a = Re() || window;
        const b = a.google_persistent_state_async;
        return b != null && typeof b == "object" && b.S != null && typeof b.S == "object" ? Uk = b : a.google_persistent_state_async = Uk = new Vk
    }

    function Wk(a) {
        return Xk[a] || `google_ps_${a}`
    }

    function Yk(a, b, c) {
        b = Wk(b);
        a = a.S;
        const d = a[b];
        return d === void 0 ? (a[b] = c(), a[b]) : d
    }

    function Zk(a, b, c) {
        return Yk(a, b, () => c)
    }
    var Vk = class {
            constructor() {
                this.S = {}
            }
        },
        Uk = null;
    const Xk = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function $k(a) {
        this.g = a || {
            cookie: ""
        }
    }
    aa = $k.prototype;
    aa.isEnabled = function() {
        if (!p.navigator.cookieEnabled) return !1;
        if (!this.isEmpty()) return !0;
        this.set("TESTCOOKIESENABLED", "1", {
            maxAge: 60
        });
        if (this.get("TESTCOOKIESENABLED") !== "1") return !1;
        this.remove("TESTCOOKIESENABLED");
        return !0
    };
    aa.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        typeof c === "object" && (h = c.sameSite, g = c.secure || !1, f = c.domain || void 0, e = c.path || void 0, d = c.maxAge);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        d === void 0 && (d = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (d < 0 ? "" : d == 0 ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + d * 1E3)).toUTCString()) + (g ? ";secure" : "") + (h != null ? ";samesite=" + h :
            "")
    };
    aa.get = function(a, b) {
        const c = a + "=",
            d = (this.g.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = wa(d[e]);
            if (f.lastIndexOf(c, 0) == 0) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    aa.remove = function(a, b, c) {
        const d = this.get(a) !== void 0;
        this.set(a, "", {
            maxAge: 0,
            path: b,
            domain: c
        });
        return d
    };
    aa.isEmpty = function() {
        return !this.g.cookie
    };
    aa.clear = function() {
        var a = (this.g.cookie || "").split(";");
        const b = [],
            c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = wa(a[f]), d = e.indexOf("="), d == -1 ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; a >= 0; a--) this.remove(b[a])
    };

    function al(a, b = window) {
        if (J(a, 5)) try {
            return b.localStorage
        } catch {}
        return null
    };

    function bl(a) {
        var b = new cl;
        return A(b, 5, Tb(a))
    }
    var cl = class extends M {
        constructor() {
            super()
        }
    };

    function dl() {
        this.A = this.A;
        this.i = this.i
    }
    dl.prototype.A = !1;
    dl.prototype.dispose = function() {
        this.A || (this.A = !0, this.D())
    };
    dl.prototype[ia(Symbol, "dispose")] = function() {
        this.dispose()
    };

    function el(a, b) {
        a.A ? b() : (a.i || (a.i = []), a.i.push(b))
    }
    dl.prototype.D = function() {
        if (this.i)
            for (; this.i.length;) this.i.shift()()
    };
    const fl = a => {
        a.addtlConsent !== void 0 && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
        a.gdprApplies !== void 0 && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
        return a.tcString !== void 0 && typeof a.tcString !== "string" || a.listenerId !== void 0 && typeof a.listenerId !== "number" ? 2 : a.cmpStatus && a.cmpStatus !== "error" ? 0 : 3
    };

    function gl(a) {
        if (a.gdprApplies === !1) return !0;
        a.internalErrorState === void 0 && (a.internalErrorState = fl(a));
        return a.cmpStatus === "error" || a.internalErrorState !== 0 ? a.internalBlockOnErrors ? (Ne({
            e: String(a.internalErrorState)
        }, "tcfe"), !1) : !0 : a.cmpStatus !== "loaded" || a.eventStatus !== "tcloaded" && a.eventStatus !== "useractioncomplete" ? !1 : !0
    }

    function hl(a) {
        if (a.g) return a.g;
        a: {
            let d = a.j;
            for (let e = 0; e < 50; ++e) {
                try {
                    var b = !(!d.frames || !d.frames.__tcfapiLocator)
                } catch {
                    b = !1
                }
                if (b) {
                    b = d;
                    break a
                }
                b: {
                    try {
                        const f = d.parent;
                        if (f && f != d) {
                            var c = f;
                            break b
                        }
                    } catch {}
                    c = null
                }
                if (!(d = c)) break
            }
            b = null
        }
        a.g = b;
        return a.g
    }

    function il(a, b, c, d) {
        c || (c = () => {});
        if (typeof a.j.__tcfapi === "function") a = a.j.__tcfapi, a(b, 2, c, d);
        else if (hl(a)) {
            jl(a);
            const e = ++a.V;
            a.C[e] = c;
            a.g && a.g.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function jl(a) {
        a.u || (a.u = b => {
            try {
                var c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.C[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, Od(a.j, "message", a.u))
    }
    class kl extends dl {
        constructor(a) {
            var b = {};
            super();
            this.j = a;
            this.g = null;
            this.C = {};
            this.V = 0;
            this.I = b.hb ? ? 500;
            this.H = b.Vb ? ? !1;
            this.u = null
        }
        D() {
            this.C = {};
            this.u && (Pd(this.j, "message", this.u), delete this.u);
            delete this.C;
            delete this.j;
            delete this.g;
            super.D()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.H
            };
            const c = Nd(() => a(b));
            let d = 0;
            this.I !== -1 && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.I));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = fl(b),
                    b.internalBlockOnErrors = this.H, g && b.internalErrorState === 0 || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                il(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && il(this, "removeEventListener", null, a.listenerId)
        }
    };
    var pl = ({
            l: a,
            W: b,
            hb: c,
            nb: d,
            ja: e = !1,
            ka: f = !1
        }) => {
            b = ll({
                l: a,
                W: b,
                ja: e,
                ka: f
            });
            b.isError() && b.i.message == "tcunav" ? ml(a, c).then(g => g.map(nl)).then(g => g.map(h => ol(a, h))).then(d) : d(b)
        },
        ll = ({
            l: a,
            W: b,
            ja: c = !1,
            ka: d = !1
        }) => {
            if (!ql({
                    l: a,
                    W: b,
                    ja: c,
                    ka: d
                })) return ol(a, bl(!0));
            b = Tk();
            return (b = Zk(b, 24)) ? ol(a, nl(b)) : Dh(Error("tcunav"))
        };

    function ql({
        l: a,
        W: b,
        ja: c,
        ka: d
    }) {
        if (d = !d) d = new kl(a), d = typeof d.j.__tcfapi === "function" || hl(d) != null;
        if (!d) {
            if (c = !c) {
                if (b) {
                    a = Sk(a);
                    if (a.isError()) W.P(806, a.i, void 0, void 0), a = !1;
                    else if ((a = a.getValue()) && I(a, 1) != null) b: switch (a = I(a, 1), a) {
                        case 1:
                            a = !0;
                            break b;
                        default:
                            throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                    } else a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function ml(a, b) {
        return Promise.race([rl(), sl(a, b)])
    }

    function rl() {
        return (new Promise(a => {
            var b = Tk();
            a = {
                resolve: a
            };
            const c = Zk(b, 25, []);
            c.push(a);
            b.S[Wk(25)] = c
        })).then(tl)
    }

    function sl(a, b) {
        return new Promise(c => {
            a.setTimeout(c, b, Dh(Error("tcto")))
        })
    }

    function tl(a) {
        return a ? Bh(a) : Dh(Error("tcnull"))
    }

    function nl(a) {
        var b = {};
        if (gl(a))
            if (a.gdprApplies === !1) a = !0;
            else if (a.tcString === "tcunavailable") a = !b.Xa;
        else if ((b.Xa || a.gdprApplies !== void 0 || b.Wb) && (b.Xa || typeof a.tcString === "string" && a.tcString.length)) {
            b: {
                if (a.publisher && a.publisher.restrictions && (b = a.publisher.restrictions["1"], b !== void 0)) {
                    b = b["755"];
                    break b
                }
                b = void 0
            }
            b === 0 ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (b = !(!b || !b["755"])) && a.purposeOneTreatment && a.publisherCC === "CH" ? a = !0 : (b && (a = a.purpose.consents, b = !(!a || !a["1"])), a = b)) : a = !0
        }
        else a = !0;
        else a = !1;
        return bl(a)
    }

    function ol(a, b) {
        return (a = al(b, a)) ? Bh(a) : Dh(Error("unav"))
    };

    function ul(a) {
        return G(a, Yh, 3, C())
    }
    var vl = class extends M {};
    var wl = class extends M {};
    var xl = class extends M {
        g() {
            return F(this, vl, 2)
        }
        i() {
            return F(this, wl, 3)
        }
    };
    const yl = class {
        constructor(a) {
            this.exception = a
        }
    };

    function zl(a, b) {
        try {
            var c = a.i,
                d = c.resolve,
                e = a.g;
            gk(e.g);
            G(e.j, Xh, 1, C());
            d.call(c, new yl(b))
        } catch (f) {
            a.i.reject(f)
        }
    }
    var Al = class {
        constructor(a, b, c) {
            this.j = a;
            this.g = b;
            this.i = c
        }
        start() {
            this.u()
        }
        u() {
            try {
                switch (this.j.document.readyState) {
                    case "complete":
                    case "interactive":
                        Lk(this.g, !0);
                        zl(this);
                        break;
                    default:
                        Lk(this.g, !1) ? zl(this) : this.j.setTimeout(sa(this.u, this), 100)
                }
            } catch (a) {
                zl(this, a)
            }
        }
    };
    var Bl = class extends M {
        constructor() {
            super()
        }
        getVersion() {
            return vd(this, 2)
        }
    };

    function Cl(a) {
        return Ya(a.length % 4 !== 0 ? a + "A" : a).map(b => b.toString(2).padStart(8, "0")).join("")
    }

    function Dl(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        return parseInt(a, 2)
    }

    function El(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        const b = [1, 2, 3, 5];
        let c = 0;
        for (let d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    };

    function Fl(a) {
        var b = Cl(a),
            c = Dl(b.slice(0, 6));
        a = Dl(b.slice(6, 12));
        var d = new Bl;
        c = E(d, 1, Yb(c), 0);
        a = E(c, 2, Yb(a), 0);
        b = b.slice(12);
        c = Dl(b.slice(0, 12));
        d = [];
        let e = b.slice(12).replace(/0+$/, "");
        for (let k = 0; k < c; k++) {
            if (e.length === 0) throw Error(`Found ${k} of ${c} sections [${d}] but reached end of input [${b}]`);
            var f = Dl(e[0]) === 0;
            e = e.slice(1);
            var g = Gl(e, b),
                h = d.length === 0 ? 0 : d[d.length - 1];
            h = El(g) + h;
            e = e.slice(g.length);
            if (f) d.push(h);
            else {
                f = Gl(e, b);
                g = El(f);
                for (let l = 0; l <= g; l++) d.push(h + l);
                e = e.slice(f.length)
            }
        }
        if (e.length >
            0) throw Error(`Found ${c} sections [${d}] but has remaining input [${e}], entire input [${b}]`);
        return cd(a, 3, d, Xb)
    }

    function Gl(a, b) {
        const c = a.indexOf("11");
        if (c === -1) throw Error(`Expected section bitstring but not found in [${a}] part of [${b}]`);
        return a.slice(0, c + 2)
    };
    var Hl = "a".charCodeAt(),
        Il = Td(rh),
        Jl = Td(sh);

    function Kl() {
        var a = new Ll;
        return Bd(a, 1, 0)
    }

    function Ml(a) {
        var b = Number; {
            var c = z(a, 1);
            const d = typeof c;
            c = c == null ? c : d === "bigint" ? String(BigInt.asIntN(64, c)) : Vb(c) ? d === "string" ? cc(c) : fc(c) : void 0
        }
        b = b(c ? ? "0");
        a = vd(a, 2);
        return new Date(b * 1E3 + a / 1E6)
    }
    var Ll = class extends M {};

    function Nl(a, b) {
        if (a.g + b > a.i.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.i.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    }

    function Ol(a) {
        let b = Nl(a, 12);
        const c = [];
        for (; b--;) {
            var d = !!Nl(a, 1) === !0,
                e = Nl(a, 16);
            if (d)
                for (d = Nl(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }

    function Pl(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (Nl(a, 1)) {
                const f = e + 1;
                if (c && c.indexOf(f) === -1) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function Ql(a) {
        const b = Nl(a, 16);
        return !!Nl(a, 1) === !0 ? (a = Ol(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : Pl(a, b)
    }
    class Rl {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.i = a;
            this.g = 0
        }
        skip(a) {
            this.g += a
        }
    };
    var Tl = a => {
        try {
            var b = Ya(a.split(".")[0]).map(d => d.toString(2).padStart(8, "0")).join("");
            const c = new Rl(b);
            b = {};
            b.tcString = a;
            b.gdprApplies = !0;
            c.skip(78);
            b.cmpId = Nl(c, 12);
            b.cmpVersion = Nl(c, 12);
            c.skip(30);
            b.tcfPolicyVersion = Nl(c, 6);
            b.isServiceSpecific = !!Nl(c, 1);
            b.useNonStandardStacks = !!Nl(c, 1);
            b.specialFeatureOptins = Sl(Pl(c, 12, Jl), Jl);
            b.purpose = {
                consents: Sl(Pl(c, 24, Il), Il),
                legitimateInterests: Sl(Pl(c, 24, Il), Il)
            };
            b.purposeOneTreatment = !!Nl(c, 1);
            b.publisherCC = String.fromCharCode(Hl + Nl(c, 6)) + String.fromCharCode(Hl +
                Nl(c, 6));
            b.vendor = {
                consents: Sl(Ql(c), null),
                legitimateInterests: Sl(Ql(c), null)
            };
            return b
        } catch (c) {
            return null
        }
    };
    const Sl = (a, b) => {
        const c = {};
        if (Array.isArray(b) && b.length !== 0)
            for (const d of b) c[d] = a.indexOf(d) !== -1;
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };

    function Ul() {
        return "m202410280101"
    };
    var Vl = class extends M {
        g() {
            return H(this, 2) != null
        }
    };
    var Wl = class extends M {
        g() {
            return H(this, 2) != null
        }
    };
    var Xl = class extends M {};
    var Yl = Hd(class extends M {});

    function Zl(a) {
        a = $l(a);
        try {
            var b = a ? Yl(a) : null
        } catch (c) {
            b = null
        }
        return b ? F(b, Xl, 4) || null : null
    }

    function $l(a) {
        a = (new $k(a)).get("FCCDCF", "");
        if (a)
            if (a.startsWith("%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                b = null
            } else b = a;
            else b = null;
        return b
    };
    Td(rh).map(a => Number(a));
    Td(sh).map(a => Number(a));

    function am(a) {
        a.__tcfapiPostMessageReady || bm(new cm(a))
    }

    function bm(a) {
        a.g = b => {
            const c = typeof b.data === "string";
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            e && (e.command === "ping" || e.command === "addEventListener" || e.command === "removeEventListener") && (0, a.l.__tcfapi)(e.command, e.version, (f, g) => {
                const h = {};
                h.__tcfapiReturn = e.command === "removeEventListener" ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && typeof b.source.postMessage === "function" && b.source.postMessage(f,
                    b.origin);
                return f
            }, e.parameter)
        };
        a.l.addEventListener("message", a.g);
        a.l.__tcfapiPostMessageReady = !0
    }
    var cm = class {
        constructor(a) {
            this.l = a
        }
    };

    function dm(a) {
        a.__uspapiPostMessageReady || em(new fm(a))
    }

    function em(a) {
        a.g = b => {
            const c = typeof b.data === "string";
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__uspapiCall;
            e && e.command === "getUSPData" && a.l.__uspapi(e.command, e.version, (f, g) => {
                const h = {};
                h.__uspapiReturn = {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && typeof b.source.postMessage === "function" && b.source.postMessage(f, b.origin);
                return f
            })
        };
        a.l.addEventListener("message", a.g);
        a.l.__uspapiPostMessageReady = !0
    }
    var fm = class {
        constructor(a) {
            this.l = a;
            this.g = null
        }
    };
    var gm = class extends M {};
    var hm = Hd(class extends M {
        g() {
            return H(this, 1) != null
        }
    });

    function im(a, b, c) {
        function d(n) {
            if (n.length < 10) return null;
            var r = k(n.slice(0, 4));
            r = l(r);
            n = k(n.slice(6, 10));
            n = m(n);
            return "1" + r + n + "N"
        }

        function e(n) {
            if (n.length < 10) return null;
            var r = k(n.slice(0, 6));
            r = l(r);
            n = k(n.slice(6, 10));
            n = m(n);
            return "1" + r + n + "N"
        }

        function f(n) {
            if (n.length < 12) return null;
            var r = k(n.slice(0, 6));
            r = l(r);
            n = k(n.slice(8, 12));
            n = m(n);
            return "1" + r + n + "N"
        }

        function g(n) {
            if (n.length < 18) return null;
            var r = k(n.slice(0, 8));
            r = l(r);
            n = k(n.slice(12, 18));
            n = m(n);
            return "1" + r + n + "N"
        }

        function h(n) {
            if (n.length <
                10) return null;
            var r = k(n.slice(0, 6));
            r = l(r);
            n = k(n.slice(6, 10));
            n = m(n);
            return "1" + r + n + "N"
        }

        function k(n) {
            const r = [];
            let t = 0;
            for (let w = 0; w < n.length / 2; w++) r.push(Dl(n.slice(t, t + 2))), t += 2;
            return r
        }

        function l(n) {
            return n.every(r => r === 1) ? "Y" : "N"
        }

        function m(n) {
            return n.some(r => r === 1) ? "Y" : "N"
        }
        if (a.length === 0) return null;
        a = a.split(".");
        if (a.length > 2) return null;
        a = Cl(a[0]);
        const u = Dl(a.slice(0, 6));
        a = a.slice(6);
        if (u !== 1) return null;
        switch (b) {
            case 8:
                return d(a);
            case 10:
            case 12:
            case 9:
                return e(a);
            case 11:
                return f(a);
            case 7:
                return g(a);
            case 13:
                return c ? h(a) : null;
            default:
                return null
        }
    };

    function jm(a, b) {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = pe("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };

    function km(a) {
        var b = T(ji),
            c = T(Ri);
        O !== O.top || O.__uspapi || O.frames.__uspapiLocator || (a = new lm(a, b, c), mm(a), nm(a))
    }

    function mm(a) {
        !a.u || a.l.__uspapi || a.l.frames.__uspapiLocator || (a.l.__uspapiManager = "fc", jm(a.l, "__uspapiLocator"), ta("__uspapi", (b, c, d) => {
            typeof d === "function" && b === "getUSPData" && (b = a.i && !J(a.j, 3), d({
                version: 1,
                uspString: b ? "1---" : a.u
            }, !0))
        }, a.l), dm(a.l))
    }

    function nm(a) {
        !a.tcString || a.l.__tcfapi || a.l.frames.__tcfapiLocator || (a.l.__tcfapiManager = "fc", jm(a.l, "__tcfapiLocator"), a.l.__tcfapiEventListeners = a.l.__tcfapiEventListeners || [], ta("__tcfapi", (b, c, d, e) => {
            if (typeof d === "function")
                if (c && (c > 2.2 || c <= 1)) d(null, !1);
                else switch (c = a.l.__tcfapiEventListeners, b) {
                    case "ping":
                        b = {
                            gdprApplies: !(a.i && !J(a.j, 1)),
                            cmpLoaded: !0,
                            cmpStatus: "loaded",
                            displayStatus: "disabled",
                            apiVersion: "2.2",
                            cmpVersion: 2,
                            cmpId: 300
                        };
                        d(b);
                        break;
                    case "addEventListener":
                        b = c.push(d) - 1;
                        a.tcString ?
                            (e = Tl(a.tcString), e.addtlConsent = a.g != null ? a.g : void 0, e.cmpStatus = "loaded", e.eventStatus = "tcloaded", b != null && (e.listenerId = b), b = e) : b = null;
                        d(b, !0);
                        break;
                    case "removeEventListener":
                        e !== void 0 && c[e] ? (c[e] = null, d(!0)) : d(!1);
                        break;
                    case "getInAppTCData":
                    case "getVendorList":
                        d(null, !1);
                        break;
                    case "getTCData":
                        d(null, !1)
                }
        }, a.l), am(a.l))
    }

    function om(a, b) {
        if (!b ? .g() || K(b, 1).length === 0 || G(b, gm, 2, C()).length === 0) return null;
        const c = K(b, 1);
        let d;
        try {
            var e = Fl(c.split("~")[0]);
            d = c.includes("~") ? c.split("~").slice(1) : []
        } catch (f) {
            return null
        }
        b = G(b, gm, 2, C()).reduce((f, g) => wd(pm(f), 1) > wd(pm(g), 1) ? f : g);
        e = Xc(e, 3, Zb, C()).indexOf(vd(b, 1));
        return e === -1 || e >= d.length ? null : {
            uspString: im(d[e], vd(b, 1), a.A),
            xa: Ml(pm(b))
        }
    }

    function qm(a) {
        a = a.find(b => b && L(b, 1) === 13);
        if (a ? .g()) try {
            return hm(K(a, 2))
        } catch (b) {}
        return null
    }

    function pm(a) {
        return Vc(a, Ll, 2) ? F(a, Ll, 2) : Kl()
    }
    var lm = class {
        constructor(a, b, c) {
            var d = O;
            this.l = d;
            this.j = a;
            this.A = b;
            this.i = c;
            a = $l(this.l.document);
            try {
                var e = a ? Yl(a) : null
            } catch (f) {
                e = null
            }(a = e) ? (e = F(a, Wl, 5) || null, a = G(a, Vl, 7, C()), a = qm(a ? ? []), e = {
                Ta: e,
                Wa: a
            }) : e = {
                Ta: null,
                Wa: null
            };
            a = e;
            e = om(this, a.Wa);
            a = a.Ta;
            a ? .g() && K(a, 2).length !== 0 ? (b = Vc(a, Ll, 1) ? F(a, Ll, 1) : Kl(), a = {
                uspString: K(a, 2),
                xa: Ml(b)
            }) : a = null;
            this.u = a && e ? e.xa > a.xa ? e.uspString : a.uspString : a ? a.uspString : e ? e.uspString : null;
            this.tcString = (e = Zl(d.document)) && H(e, 1) != null ? K(e, 1) : null;
            this.g = (d = Zl(d.document)) &&
                H(d, 2) != null ? K(d, 2) : null
        }
    };
    const rm = {
        google_ad_channel: !0,
        google_ad_host: !0
    };

    function sm(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        uk("ama", b, .01)
    }

    function tm(a) {
        const b = {};
        se(rm, (c, d) => {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function um(a) {
        const b = /[a-zA-Z0-9._~-]/,
            c = /%[89a-zA-Z]./;
        return a.replace(/(%[a-zA-Z0-9]{2})/g, d => {
            if (!d.match(c)) {
                const e = decodeURIComponent(d);
                if (e.match(b)) return e
            }
            return d.toUpperCase()
        })
    }

    function vm(a) {
        let b = "";
        const c = /[/%?&=]/;
        for (let d = 0; d < a.length; ++d) {
            const e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function wm(a) {
        a = Xc(a, 2, Wb, C());
        if (!a) return !1;
        for (let b = 0; b < a.length; b++)
            if (a[b] == 1) return !0;
        return !1
    }

    function xm(a, b) {
        a = vm(um(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        const c = te(a),
            d = ym(a);
        return b.find(e => {
            if (Vc(e, Fj, 7)) {
                var f = F(e, Fj, 7);
                f = $b(z(f, 1))
            } else f = $b(z(e, 1));
            e = Vc(e, Fj, 7) ? I(F(e, Fj, 7), 2) : 2;
            if (typeof f !== "number") return !1;
            switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1
            }
            return !1
        }) || null
    }

    function ym(a) {
        const b = {};
        for (;;) {
            b[te(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };
    var zm = class extends M {
        g() {
            return F(this, xl, 2)
        }
        i() {
            return J(this, 3)
        }
    };
    var Am = class extends M {
        g() {
            return qd(this, 1, C())
        }
        i() {
            return F(this, zm, 2)
        }
        j() {
            return K(this, 4)
        }
        u() {
            return L(this, 5)
        }
    };
    var Bm = class extends M {
        getId() {
            return vd(this, 1)
        }
    };

    function Cm(a) {
        return G(a, Bm, 2, C())
    }
    var Dm = class extends M {};
    var Em = class extends M {};
    var Fm = class extends M {
        g() {
            return wd(this, 2)
        }
        i() {
            return wd(this, 4)
        }
        j() {
            return J(this, 3)
        }
    };
    var Gm = class extends M {};
    var Hm = class extends M {};
    var Jm = class extends M {
            j() {
                return zd(this, zm, 13, Im)
            }
            u() {
                return Wc(this, zm, hd(this, Im, 13)) !== void 0
            }
            g() {
                return zd(this, Am, 14, Im)
            }
            i() {
                return Wc(this, Am, hd(this, Im, 14)) !== void 0
            }
        },
        Im = [13, 14];
    let Km = void 0;

    function X(a) {
        return a.google_ad_modifications = a.google_ad_modifications || {}
    }

    function Lm(a) {
        a = X(a);
        const b = a.space_collapsing || "none";
        return a.remove_ads_by_default ? {
            Ra: !0,
            Cb: b,
            va: a.ablation_viewport_offset
        } : null
    }

    function Mm(a) {
        a = X(a);
        a.had_ads_ablation = !0;
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = 1
    }

    function Nm(a) {
        X(O).allow_second_reactive_tag = a
    }

    function Om() {
        const a = X(window);
        a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
        return a.afg_slotcar_vars
    };

    function Pm(a) {
        return X(a) ? .head_tag_slot_vars ? .google_ad_host ? ? Qm(a)
    }

    function Qm(a) {
        return a.document ? .querySelector('meta[name="google-adsense-platform-account"]') ? .getAttribute("content") ? ? null
    };
    const Rm = [2, 7, 1];
    var Um = (a, b, c = "", d = null) => b === 1 && Sm(c, d) ? !0 : Tm(a, c, e => Qa(G(e, Id, 2, C()), f => I(f, 1) === b)),
        Sm = (a, b) => b ? b.u() ? J(b.j(), 1) : b.i() && a !== "" && b.g().j() === a || b.i() && a !== "" && b.g().g().length === 1 && b.g().g()[0] === a ? J(b.g().i(), 1) : !1 : !1,
        Wm = a => {
            const b = ne(O) || O;
            return Vm(b, a) ? !0 : Tm(O, "", c => Qa(Xc(c, 3, Wb, C()), d => d === a))
        };

    function Vm(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && Sa(a.split(","), b.toString())
    }

    function Tm(a, b, c) {
        a = ne(a) || a;
        const d = Xm(a);
        b && (b = Ue(String(b)));
        return Sd(d, (e, f) => Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e))
    }

    function Xm(a) {
        a = Ym(a);
        const b = {};
        se(a, (c, d) => {
            try {
                const e = new Kd(c);
                b[d] = e
            } catch (e) {}
        });
        return b
    }
    var Ym = a => {
        bb(Km, eb);
        a = ll({
            l: a,
            W: Km
        });
        return a.g != null ? Zm(a.getValue()) : {}
    };

    function Zm(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : Rd(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && typeof e === "string" && Array.isArray(d))
        } catch (b) {
            return {}
        }
    }

    function $m(a) {
        uk("atf_ad_settings_from_ppabg", {
            p_s: a
        }, .01)
    }
    var an = (a, b, c) => {
        if (c ? .u()) return (a = c ? .j() ? .g() ? .g()) && (G(a, Xh, 1, C()).length > 0 || ul(a).length > 0) ? ($m(!1), a) : null;
        if (c ? .i()) {
            var d = c ? .g() ? .i() ? .g() ? .g();
            if (c ? .g().j() === b && d && (G(d, Xh, 1, C()).length > 0 || ul(d).length > 0) && K(c, 17) === a.location.host) return $m(!0), d
        }
        if (c ? .i()) {
            d = c ? .g() ? .g();
            const e = c ? .g() ? .i() ? .g() ? .g();
            if (d && d.length === 1 && d[0] === b && e && (G(e, Xh, 1, C()).length > 0 || ul(e).length > 0) && K(c, 17) === a.location.host) return $m(!0), e
        }
        return null
    };
    const bn = (a, b) => {
        if (Pm(p)) return Rm;
        if (b ? .u()) {
            var c = K(b.j(), 9);
            b = b ? .j() ? .g() ? .i();
            return a && c == a && b ? Xc(b, 3, Wb, C(Ib)) : Rm
        }
        if (b ? .i()) {
            if (b ? .g() ? .j() === a && K(b, 17) == p.location.host) return (a = b ? .g() ? .i() ? .g() ? .i()) ? Xc(a, 3, Wb, C(Ib)) : Rm;
            c = b ? .g() ? .g();
            return c && c.length === 1 && a && c[0] === a && K(b, 17) == p.location.host ? (a = b ? .g() ? .i() ? .g() ? .i()) ? Xc(a, 3, Wb, C(Ib)) : Rm : Rm
        }
        return Rm
    };
    var cn = (a, b) => {
        const c = [];
        a = bn(a, b);
        a.includes(1) || c.push(1);
        a.includes(2) || c.push(2);
        a.includes(7) || c.push(7);
        return c
    };

    function dn(a, b, c, d) {
        en(new fn(a, b, c, d))
    }

    function en(a) {
        Hh(Gh(ll({
            l: a.l,
            W: J(a.g, 6)
        }), b => {
            gn(a, b, !0)
        }), () => {
            hn(a)
        })
    }

    function gn(a, b, c) {
        Hh(Gh(jn(b), d => {
            kn("ok");
            a.i(d, {
                fromLocalStorage: !0
            })
        }), () => {
            var d = a.l;
            try {
                b.removeItem("google_ama_config")
            } catch (e) {
                sm(d, {
                    lserr: 1
                })
            }
            c ? hn(a) : a.i(null, null)
        })
    }

    function hn(a) {
        Hh(Gh(ln(a), b => {
            a.i(b, {
                fromPABGSettings: !0
            })
        }), () => {
            mn(a)
        })
    }

    function jn(a) {
        if (T(wi)) var b = null;
        else try {
            b = a.getItem("google_ama_config")
        } catch (d) {
            b = null
        }
        try {
            var c = b ? Rj(b) : null
        } catch (d) {
            c = null
        }
        return (a = (a = c) ? (F(a, Ej, 3) ? .g() ? ? 0) > Date.now() ? a : null : null) ? Bh(a) : Dh(Error("invlocst"))
    }

    function ln(a) {
        if (Pm(a.l) && !J(a.g, 22)) return Dh(Error("invtag"));
        if (a = an(a.l, a.j, a.g)) {
            var b = new Qj;
            var c = G(a, Xh, 1, C());
            b = od(b, 1, c);
            c = G(a, Lj, 2, C());
            b = od(b, 7, c);
            ul(a).length > 0 && (c = new Zh, a = ul(a), a = od(c, 1, a), md(b, 6, a));
            a = Bh(b)
        } else a = Dh(Error("invtag"));
        return a
    }

    function mn(a) {
        pl({
            l: a.l,
            W: J(a.g, 6),
            hb: 50,
            nb: b => {
                nn(a, b)
            }
        })
    }

    function nn(a, b) {
        Hh(Gh(b, c => {
            gn(a, c, !1)
        }), c => {
            kn(c.message);
            a.i(null, null)
        })
    }

    function kn(a) {
        uk("abg::amalserr", {
            status: a,
            guarding: "true",
            timeout: 50,
            rate: .01
        }, .01)
    }
    class fn {
        constructor(a, b, c, d) {
            this.l = a;
            this.g = b;
            this.j = c;
            this.i = d
        }
    };
    var on = (a, b, c, d) => {
        try {
            const e = xm(a, G(c, Lj, 7, C()));
            if (e && wm(e)) {
                if (Ad(e)) {
                    const g = new Qh(null, {
                        google_package: Ad(e)
                    });
                    d = Ph(d, g)
                }
                const f = new Qk(a, b, c, e, d);
                bk(1E3, () => {
                    var g = new wh;
                    (new Al(a, f, g)).start();
                    return g.i
                }, a).then(() => {
                    sm(a, {
                        atf: 1
                    })
                }, g => {
                    (a.google_ama_state = a.google_ama_state || {}).exception = g;
                    sm(a, {
                        atf: 0
                    })
                })
            }
        } catch (e) {
            sm(a, {
                atf: -1
            })
        }
    };

    function pn(a) {
        return a.length ? a.join("~") : void 0
    };

    function qn(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (a.indexOf(b) != -1) return !0;
        b = rn(b);
        return b != "go" && a.indexOf(b) != -1 ? !0 : !1
    }

    function rn(a) {
        let b = "";
        se(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    };
    var sn = class extends M {
        g() {
            return K(this, 3)
        }
        i() {
            return td(this, 4) != null
        }
    };
    var tn = class extends M {
        constructor() {
            super()
        }
        g() {
            return kd(this, sn, 1)
        }
    };

    function un(a) {
        const b = new tn;
        var c = new sn;
        var d = vd(a, 1);
        c = A(c, 1, Yb(d));
        d = vd(a, 18);
        c = A(c, 2, Yb(d));
        d = K(a, 2);
        c = A(c, 3, y(d));
        d = J(a, 6);
        c = A(c, 4, Tb(d));
        d = J(a, 20);
        c = A(c, 5, Tb(d));
        d = J(a, 9);
        c = A(c, 6, Tb(d));
        d = J(a, 25);
        c = A(c, 7, Tb(d));
        d = K(a, 8);
        c = A(c, 8, y(d));
        a = K(a, 3);
        a = A(c, 9, y(a));
        md(b, 1, a);
        return b
    };
    Wa || Ia();

    function vn() {
        const a = {};
        N(Ee).g(ri.g, ri.defaultValue) && (a.bust = N(Ee).g(ri.g, ri.defaultValue));
        return a
    };
    class wn {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.reject = b
            })
        }
    };

    function xn() {
        const {
            promise: a,
            resolve: b
        } = new wn;
        return {
            promise: a,
            resolve: b
        }
    };

    function yn(a = () => {}) {
        p.google_llp || (p.google_llp = {});
        const b = p.google_llp;
        let c = b[7];
        if (c) return c;
        c = xn();
        b[7] = c;
        a();
        return c
    }

    function zn(a) {
        return yn(() => {
            oe(p.document, a)
        }).promise
    };

    function An(a) {
        a.google_reactive_ads_global_state ? (a.google_reactive_ads_global_state.sideRailProcessedFixedElements == null && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), a.google_reactive_ads_global_state.sideRailAvailableSpace == null && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map), a.google_reactive_ads_global_state.sideRailPlasParam == null && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map), a.google_reactive_ads_global_state.sideRailMutationCallbacks ==
            null && (a.google_reactive_ads_global_state.sideRailMutationCallbacks = [])) : a.google_reactive_ads_global_state = new Bn;
        return a.google_reactive_ads_global_state
    }
    class Bn {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new Cn;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map;
            this.sideRailPlasParam = new Map;
            this.sideRailMutationCallbacks = [];
            this.clickTriggeredInterstitialMayBeDisplayed = !1
        }
    }
    var Cn = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var Dn = a => {
        if (p.google_apltlad || a.google_ad_intent_query) return null;
        var b = a.google_loader_used !== "sd" && T(zi) && (p.top == p ? 0 : me(p.top) ? 1 : 2) === 1;
        if (p !== p.top && !b || !a.google_ad_client) return null;
        p.google_apltlad = !0;
        b = {
            enable_page_level_ads: {
                pltais: !0
            },
            google_ad_client: a.google_ad_client
        };
        const c = b.enable_page_level_ads;
        se(a, (d, e) => {
            Aj[e] && e !== "google_ad_client" && (c[e] = d)
        });
        c.google_pgb_reactive = 7;
        c.asro = T(Pi);
        c.aihb = T(Bi);
        c.ailel = pn(Zi(Ki));
        c.aiael = pn(Zi(Ci));
        c.aifxl = pn(Zi(Ii));
        c.aiixl = pn(Zi(Ji));
        T(Gi) ||
            (c.aiict = !0, c.aicel = pn(Zi(Fi)));
        T(Li) && (c.aipaq = !0);
        T(Qi) && (c.aigda = !0);
        U(Di) && (c.aiapm = U(Di));
        U(Ei) && (c.aiapmi = U(Ei));
        T(Oi) && (c.aiombap = !0);
        T(Hi) && (c.aief = !0);
        T(Mi) && (c.aiopts = !0);
        c.aiof = pn(Zi(Ni));
        if ("google_ad_section" in a || "google_ad_region" in a) c.google_ad_section = a.google_ad_section || a.google_ad_region;
        return b
    };

    function En(a, b) {
        X(O).ama_ran_on_page || bk(1001, () => {
            Fn(new Gn(a, b))
        }, p)
    }

    function Fn(a) {
        dn(a.l, a.i, a.g.google_ad_client || "", (b, c) => {
            var d = a.l,
                e = a.g;
            X(O).ama_ran_on_page || b && Hn(d, e, b, c)
        })
    }
    class Gn {
        constructor(a, b) {
            this.l = p;
            this.g = a;
            this.i = b
        }
    }

    function Hn(a, b, c, d) {
        d && (gk(a).configSourceInAbg = d);
        Vc(c, Pj, 24) && (d = hk(a), d.availableAbg = !0, d.ablationFromStorage = !!F(c, Pj, 24) ? .g() ? .g());
        if (ma(b.enable_page_level_ads) && b.enable_page_level_ads.google_pgb_reactive === 7) {
            if (!xm(a, G(c, Lj, 7, C()))) {
                uk("amaait", {
                    value: "true"
                });
                return
            }
            uk("amaait", {
                value: "false"
            })
        }
        X(O).ama_ran_on_page = !0;
        F(c, Dj, 15) ? .g() && (X(a).enable_overlap_observer = !0);
        F(c, Pj, 24) ? .g() ? .g() && (hk(a).ablatingThisPageview = !0, Mm(a));
        Pe(3, [Fd(c)]);
        const e = b.google_ad_client || "";
        b = tm(ma(b.enable_page_level_ads) ?
            b.enable_page_level_ads : {});
        const f = Ph(Th, new Qh(null, b));
        tk(782, () => {
            on(a, e, c, f)
        })
    };

    function In(a, b) {
        a = a.document;
        for (var c = void 0, d = 0; !c || a.getElementById(c + "_host");) c = "aswift_" + d++;
        a = c;
        c = Number(b.google_ad_width || 0);
        b = Number(b.google_ad_height || 0);
        d = document.createElement("div");
        d.id = a + "_host";
        const e = d.style;
        e.border = "none";
        e.height = `${b}px`;
        e.width = `${c}px`;
        e.margin = "0px";
        e.padding = "0px";
        e.position = "relative";
        e.visibility = "visible";
        e.backgroundColor = "transparent";
        e.display = "inline-block";
        return {
            rb: a,
            Eb: d
        }
    };

    function Jn({
        wa: a,
        Ca: b
    }) {
        return a || (b === "dev" ? "dev" : "")
    };

    function Kn(a) {
        return a.google_ad_client ? String(a.google_ad_client) : X(a).head_tag_slot_vars ? .google_ad_client ? ? a.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client") ? ? ""
    };
    var Ln = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function Mn(a, b) {
        if (b == 15) {
            if (a >= 728) return 728;
            if (a >= 468) return 468
        } else if (b == 90) {
            if (a >= 200) return 200;
            if (a >= 180) return 180;
            if (a >= 160) return 160;
            if (a >= 120) return 120
        }
        return null
    };
    var Nn = class extends M {
        constructor() {
            super()
        }
        getVersion() {
            return K(this, 2)
        }
    };

    function On(a, b) {
        return A(a, 2, y(b))
    }

    function Pn(a, b) {
        return A(a, 3, y(b))
    }

    function Qn(a, b) {
        return A(a, 4, y(b))
    }

    function Rn(a, b) {
        return A(a, 5, y(b))
    }

    function Sn(a, b) {
        return A(a, 9, y(b))
    }

    function Tn(a, b) {
        return od(a, 10, b)
    }

    function Un(a, b) {
        return A(a, 11, Tb(b))
    }

    function Vn(a, b) {
        return A(a, 1, y(b))
    }

    function Wn(a, b) {
        return A(a, 7, Tb(b))
    }
    var Xn = class extends M {
        constructor() {
            super()
        }
    };
    const Yn = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Zn() {
        var a = O;
        if (typeof a.navigator ? .userAgentData ? .getHighEntropyValues !== "function") return null;
        const b = a.google_tag_data ? ? (a.google_tag_data = {});
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(Yn).then(c => {
            b.uach ? ? (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function $n(a) {
        return Un(Tn(Rn(On(Vn(Qn(Wn(Sn(Pn(new Xn, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), a.fullVersionList ? .map(b => {
            var c = new Nn;
            c = A(c, 1, y(b.brand));
            return A(c, 2, y(b.version))
        }) || []), a.wow64 || !1)
    }

    function ao() {
        return Zn() ? .then(a => $n(a)) ? ? null
    };

    function bo(a, b) {
        b.google_ad_host || (a = Qm(a)) && (b.google_ad_host = a)
    }

    function co(a, b, c = "") {
        O.google_sa_queue || (O.google_sa_queue = [], O.google_process_slots = W.pa(215, () => {
            eo(O.google_sa_queue)
        }), a = fo(c, a, b), oe(O.document, a))
    }

    function eo(a) {
        const b = a.shift();
        typeof b === "function" && W.ea(216, b);
        a.length && p.setTimeout(W.pa(215, () => {
            eo(a)
        }), 0)
    }

    function go(a, b) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? b() : a.google_sa_queue.push(b)
    }

    function fo(a, b, c) {
        var d = O;
        b = J(c, 4) ? b.yb : b.zb;
        a: {
            if (J(c, 4)) {
                if (a = a || Kn(d)) {
                    a = Ue(a);
                    if (T(Ai)) b: {
                        try {
                            for (; d;) {
                                if (d.location ? .hostname) {
                                    var e = d.location.hostname;
                                    break b
                                }
                                d = d.parent
                            }
                        } catch (f) {}
                        e = ""
                    }
                    else e = d.location.hostname;
                    e = {
                        client: a,
                        plah: e
                    };
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            e = {}
        }
        e = { ...e,
            ...vn()
        };
        d = U(Si);
        !J(c, 4) && [0, 1].includes(d) && (e.osttc = `${d}`);
        return de(b, new Map(Object.entries(e)))
    }

    function ho(a, b, c, d) {
        const {
            rb: e,
            Eb: f
        } = In(a, b);
        c.appendChild(f);
        io(a, c, b);
        c = b.google_start_time ? ? ua;
        const g = (new Date).getTime();
        b.google_lrv = Jn({
            wa: Ul(),
            Ca: K(d, 2)
        });
        b.google_async_iframe_id = e;
        b.google_start_time = c;
        b.google_bpp = g > c ? g - c : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[e] = b;
        go(a, () => {
            var h = f;
            if (!h || !h.isConnected)
                if (h = a.document.getElementById(String(b.google_async_iframe_id) + "_host"), h == null) throw Error("no_div");
            (h = a.google_sa_impl({
                pubWin: a,
                vars: b,
                innerInsElement: h
            })) && W.aa(911,
                h)
        })
    }

    function io(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || d !== "html" && d != null || (e = `${f}x${g}`);
        T(Xi) && (c.google_reactive_ad_format === 10 ? e = "interstitial" : c.google_reactive_ad_format === 11 && (e = "rewarded"));
        d = !c.google_ad_slot || c.google_override_format || !Ln[c.google_ad_width + "x" + c.google_ad_height] && c.google_loader_used === "aa";
        e = e && d ? e.toLowerCase() : "";
        c.google_ad_format = e;
        if (typeof c.google_reactive_sra_index !== "number" || !c.google_ad_unit_key) {
            e = [c.google_ad_slot,
                c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width, c.google_orig_ad_height || c.google_ad_height
            ];
            d = [];
            f = 0;
            for (g = b; g && f < 25; g = g.parentNode, ++f) g.nodeType === 9 ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = te(e.join(":")).toString();
            e = [];
            for (d = 0; b && d < 25; ++d) {
                f = (f = b.nodeType !== 9 && b.id) ? "/" + f : "";
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        const h = b.parentElement.childNodes;
                        let k = 0;
                        for (let l = 0; l < h.length; ++l) {
                            const m =
                                h[l];
                            if (m.nodeName && m.nodeName.toString().toLowerCase() === g) {
                                if (b === m) {
                                    g = "." + k;
                                    break a
                                }++k
                            }
                        }
                    }
                    g = ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            b = e.join() + ":";
            e = [];
            if (a) try {
                let h = a.parent;
                for (d = 0; h && h !== a && d < 25; ++d) {
                    const k = h.frames;
                    for (f = 0; f < k.length; ++f)
                        if (a === k[f]) {
                            e.push(f);
                            break
                        }
                    a = h;
                    h = a.parent
                }
            } catch (h) {}
            c.google_ad_dom_fingerprint = te(b + e.join()).toString()
        }
    }

    function jo() {
        var a = ne(p);
        a && (a = An(a), a.tagSpecificState[1] || (a.tagSpecificState[1] = {
            debugCard: null,
            debugCardRequested: !1
        }))
    }

    function ko() {
        const a = ao();
        a != null && a.then(b => {
            O.google_user_agent_client_hint = Ed(b)
        });
        De()
    };

    function lo(a) {
        return b => !!(b.fa & a)
    }
    class Y extends rj {
        constructor(a, b, c, d = !1) {
            super(a, b);
            this.fa = c;
            this.u = d
        }
        qa() {
            return this.fa
        }
        i(a, b, c) {
            c.style.height = this.height() + "px";
            b.rpe = !0
        }
    };
    const mo = {
            image_stacked: 1 / 1.91,
            image_sidebyside: 1 / 3.82,
            mobile_banner_image_sidebyside: 1 / 3.82,
            pub_control_image_stacked: 1 / 1.91,
            pub_control_image_sidebyside: 1 / 3.82,
            pub_control_image_card_stacked: 1 / 1.91,
            pub_control_image_card_sidebyside: 1 / 3.74,
            pub_control_text: 0,
            pub_control_text_card: 0
        },
        no = {
            image_stacked: 80,
            image_sidebyside: 0,
            mobile_banner_image_sidebyside: 0,
            pub_control_image_stacked: 80,
            pub_control_image_sidebyside: 0,
            pub_control_image_card_stacked: 85,
            pub_control_image_card_sidebyside: 0,
            pub_control_text: 80,
            pub_control_text_card: 80
        },
        oo = {
            pub_control_image_stacked: 100,
            pub_control_image_sidebyside: 200,
            pub_control_image_card_stacked: 150,
            pub_control_image_card_sidebyside: 250,
            pub_control_text: 100,
            pub_control_text_card: 150
        };

    function po(a) {
        var b = 0;
        a.N && b++;
        a.J && b++;
        a.K && b++;
        if (b < 3) return {
            U: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.N.split(",");
        const c = a.K.split(",");
        a = a.J.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            U: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (b.length > 2) return {
            U: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + `you are providing ${b.length} parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`
        };
        const d = [],
            e = [];
        for (let g = 0; g <
            b.length; g++) {
            var f = Number(c[g]);
            if (Number.isNaN(f) || f === 0) return {
                U: `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`
            };
            d.push(f);
            f = Number(a[g]);
            if (Number.isNaN(f) || f === 0) return {
                U: `Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`
            };
            e.push(f)
        }
        return {
            K: d,
            J: e,
            ab: b
        }
    }

    function qo(a) {
        return a >= 1200 ? {
            width: 1200,
            height: 600
        } : a >= 850 ? {
            width: a,
            height: Math.floor(a * .5)
        } : a >= 550 ? {
            width: a,
            height: Math.floor(a * .6)
        } : a >= 468 ? {
            width: a,
            height: Math.floor(a * .7)
        } : {
            width: a,
            height: Math.floor(a * 3.44)
        }
    }

    function ro(a, b, c, d) {
        b = Math.floor(((a - 8 * b - 8) / b * mo[d] + no[d]) * c + 8 * c + 8);
        return a > 1500 ? {
            width: 0,
            height: 0,
            Ab: `Calculated slot width is too large: ${a}`
        } : b > 1500 ? {
            width: 0,
            height: 0,
            Ab: `Calculated slot height is too large: ${b}`
        } : {
            width: a,
            height: b
        }
    }

    function so(a, b) {
        const c = a - 8 - 8;
        --b;
        return {
            width: a,
            height: Math.floor(c / 1.91 + 70) + Math.floor((c * mo.mobile_banner_image_sidebyside + no.mobile_banner_image_sidebyside) * b + 8 * b + 8)
        }
    };
    const to = Va("script");
    class uo {
        constructor(a, b, c = null, d = null, e = null, f = null, g = null, h = null, k = null, l = null, m = null, u = null) {
            this.C = a;
            this.ba = b;
            this.fa = c;
            this.g = d;
            this.V = e;
            this.i = f;
            this.j = g;
            this.D = h;
            this.H = k;
            this.u = l;
            this.A = m;
            this.I = u
        }
        size() {
            return this.ba
        }
    };
    const vo = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];
    var wo = class extends rj {
        g(a) {
            return Math.min(1200, Math.max(this.Y, Math.round(a)))
        }
    };

    function xo(a, b) {
        yo(a, b);
        if (b.google_content_recommendation_ui_type === "pedestal") return new uo(9, new wo(a, Math.floor(a * b.google_phwr)));
        if (T(gi)) {
            var c = he();
            var d = U(hi);
            var e = U(fi),
                f = U(ei);
            a < 468 ? c ? (a = so(a, d), d = {
                T: a.width,
                R: a.height,
                J: 1,
                K: d,
                N: "mobile_banner_image_sidebyside"
            }) : (a = ro(a, 1, d, "image_sidebyside"), d = {
                T: a.width,
                R: a.height,
                J: 1,
                K: d,
                N: "image_sidebyside"
            }) : (d = qo(a), e === 1 && (d.height = Math.floor(d.height * .5)), d = {
                T: d.width,
                R: d.height,
                J: f,
                K: e,
                N: "image_stacked"
            })
        } else d = he(), a < 468 ? d ? (d = so(a, 12), d = {
            T: d.width,
            R: d.height,
            J: 1,
            K: 12,
            N: "mobile_banner_image_sidebyside"
        }) : (d = qo(a), d = {
            T: d.width,
            R: d.height,
            J: 1,
            K: 13,
            N: "image_sidebyside"
        }) : (d = qo(a), d = {
            T: d.width,
            R: d.height,
            J: 4,
            K: 2,
            N: "image_stacked"
        });
        zo(b, d);
        return new uo(9, new wo(d.T, d.R))
    }

    function Ao(a, b) {
        yo(a, b); {
            const f = po({
                K: b.google_content_recommendation_rows_num,
                J: b.google_content_recommendation_columns_num,
                N: b.google_content_recommendation_ui_type
            });
            if (f.U) a = {
                T: 0,
                R: 0,
                J: 0,
                K: 0,
                N: "image_stacked",
                U: f.U
            };
            else {
                var c = f.ab.length === 2 && a >= 468 ? 1 : 0;
                var d = f.ab[c];
                d = d.indexOf("pub_control_") === 0 ? d : "pub_control_" + d;
                var e = oo[d];
                let g = f.J[c];
                for (; a / g < e && g > 1;) g--;
                e = g;
                c = f.K[c];
                a = ro(a, e, c, d);
                a = {
                    T: a.width,
                    R: a.height,
                    J: e,
                    K: c,
                    N: d
                }
            }
        }
        if (a.U) throw new V(a.U);
        zo(b, a);
        return new uo(9, new wo(a.T, a.R))
    }

    function yo(a, b) {
        if (a <= 0) throw new V(`Invalid responsive width from Matched Content slot ${b.google_ad_slot}: ${a}. Please ensure to put this Matched Content slot into a non-zero width div container.`);
    }

    function zo(a, b) {
        a.google_content_recommendation_ui_type = b.N;
        a.google_content_recommendation_columns_num = b.J;
        a.google_content_recommendation_rows_num = b.K
    };
    var Bo = class extends rj {
        g() {
            return this.Y
        }
        i(a, b, c) {
            qj(a, c);
            c.style.height = `${this.height()}px`;
            b.rpe = !0
        }
    };
    const Co = {
        "image-top": a => a <= 600 ? 284 + (a - 250) * .414 : 429,
        "image-middle": a => a <= 500 ? 196 - (a - 250) * .13 : 164 + (a - 500) * .2,
        "image-side": a => a <= 500 ? 205 - (a - 250) * .28 : 134 + (a - 500) * .21,
        "text-only": a => a <= 500 ? 187 - .228 * (a - 250) : 130,
        "in-article": a => a <= 420 ? a / 1.2 : a <= 460 ? a / 1.91 + 130 : a <= 800 ? a / 4 : 200
    };
    var Do = class extends rj {
        g() {
            return Math.min(1200, this.Y)
        }
    };

    function Eo(a, b, c, d, e) {
        var f = e.google_ad_layout || "image-top";
        if (f === "in-article") {
            var g = a;
            if (e.google_full_width_responsive === "false") a = g;
            else if (a = lj(b, c, g, U(mi), e), a !== !0) e.gfwrnwer = a, a = g;
            else if (a = fj(b))
                if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
                    b: {
                        g = c;
                        for (let h = 0; h < 100 && g.parentElement; ++h) {
                            const k = g.parentElement.childNodes;
                            for (let l = 0; l < k.length; ++l) {
                                const m = k[l];
                                if (m !== g && oj(b, m)) break b
                            }
                            g = g.parentElement;
                            g.style.width = "100%";
                            g.style.height = "auto"
                        }
                    }
                    qj(b, c)
                }
            else a = g;
            else a =
                g
        }
        if (a < 250) throw new V("Fluid responsive ads must be at least 250px wide: " + `availableWidth=${a}`);
        a = Math.min(1200, Math.floor(a));
        if (d && f !== "in-article") {
            f = Math.ceil(d);
            if (f < 50) throw new V("Fluid responsive ads must be at least 50px tall: " + `height=${f}`);
            return new uo(11, new rj(a, f))
        }
        if (f !== "in-article" && (d = e.google_ad_layout_key)) {
            f = `${d}`;
            if (d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length)
                for (b = [], e = 0; e < d; e++) b.push(parseInt(c[e], 36) / 1E3);
            else b = null;
            if (!b) throw new V(`Invalid data-ad-layout-key value: ${f}`);
            f = (a + -725) / 1E3;
            c = 0;
            d = 1;
            e = b.length;
            for (g = 0; g < e; g++) c += b[g] * d, d *= f;
            f = Math.ceil(c * 1E3 - -725 + 10);
            if (isNaN(f)) throw new V(`Invalid height: height=${f}`);
            if (f < 50) throw new V("Fluid responsive ads must be at least 50px tall: " + `height=${f}`);
            if (f > 1200) throw new V("Fluid responsive ads must be at most 1200px tall: " + `height=${f}`);
            return new uo(11, new rj(a, f))
        }
        d = Co[f];
        if (!d) throw new V("Invalid data-ad-layout value: " + f);
        c = vj(c, b);
        b = fj(b);
        b = f !== "in-article" || c || a !== b ? Math.ceil(d(a)) : Math.ceil(d(a) * 1.25);
        return new uo(11, f === "in-article" ? new Do(a, b) : new rj(a, b))
    };

    function Fo(a) {
        return b => {
            for (let c = a.length - 1; c >= 0; --c)
                if (!a[c](b)) return !1;
            return !0
        }
    }

    function Go(a, b) {
        var c = Ho.slice(0);
        const d = c.length;
        let e = null;
        for (let f = 0; f < d; ++f) {
            const g = c[f];
            if (a(g)) {
                if (b == null || b(g)) return g;
                e === null && (e = g)
            }
        }
        return e
    };
    var Z = [new Y(970, 90, 2), new Y(728, 90, 2), new Y(468, 60, 2), new Y(336, 280, 1), new Y(320, 100, 2), new Y(320, 50, 2), new Y(300, 600, 4), new Y(300, 250, 1), new Y(250, 250, 1), new Y(234, 60, 2), new Y(200, 200, 1), new Y(180, 150, 1), new Y(160, 600, 4), new Y(125, 125, 1), new Y(120, 600, 4), new Y(120, 240, 4), new Y(120, 120, 1, !0)],
        Ho = [Z[6], Z[12], Z[3], Z[0], Z[7], Z[14], Z[1], Z[8], Z[10], Z[4], Z[15], Z[2], Z[11], Z[5], Z[13], Z[9], Z[16]];

    function Io(a, b, c, d, e) {
        e.google_full_width_responsive == "false" ? c = {
            F: a,
            G: 1
        } : b === "autorelaxed" && e.google_full_width_responsive || Jo(b) || e.google_ad_resize ? (b = mj(a, c, d, e), c = b !== !0 ? {
            F: a,
            G: b
        } : {
            F: fj(c) || a,
            G: !0
        }) : c = {
            F: a,
            G: 2
        };
        const {
            F: f,
            G: g
        } = c;
        return g !== !0 ? {
            F: a,
            G: g
        } : d.parentElement ? {
            F: f,
            G: g
        } : {
            F: a,
            G: g
        }
    }

    function Ko(a, b, c, d, e) {
        const {
            F: f,
            G: g
        } = tk(247, () => Io(a, b, c, d, e));
        var h = g === !0;
        const k = ye(d.style.width),
            l = ye(d.style.height),
            {
                Z: m,
                X: u,
                qa: n,
                Za: r
            } = Lo(f, b, c, d, e, h);
        h = Mo(b, n);
        var t;
        const w = (t = sj(d, c, "marginLeft")) ? `${t}px` : "",
            P = (t = sj(d, c, "marginRight")) ? `${t}px` : "";
        t = tj(d, c) || "";
        return new uo(h, m, n, null, r, g, u, w, P, l, k, t)
    }

    function Jo(a) {
        return a === "auto" || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    }

    function Lo(a, b, c, d, e, f) {
        b = No(c, a, b);
        let g;
        var h = !1;
        let k = !1;
        var l = fj(c) < 488;
        if (l) {
            g = gj(d, c);
            var m = vj(d, c);
            h = !m && g;
            k = m && g
        }
        m = [uj(a), lo(b)];
        T(ti) || m.push(xj(l, c, d, k));
        e.google_max_responsive_height != null && m.push(yj(e.google_max_responsive_height));
        l = [t => !t.u];
        if (h || k) h = zj(c, d), l.push(yj(h));
        const u = Go(Fo(m), Fo(l));
        if (!u) throw new V(`No slot size for availableWidth=${a}`);
        const {
            Z: n,
            X: r
        } = tk(248, () => {
            var t;
            a: if (f) {
                if (e.gfwrnh && (t = ye(e.gfwrnh))) {
                    t = {
                        Z: new Bo(a, t),
                        X: !0
                    };
                    break a
                }
                t = U(oi);
                t = t > 0 ? a / t : a / 1.2;
                if (e.google_resizing_allowed ||
                    e.google_full_width_responsive == "true") var w = Infinity;
                else {
                    w = d;
                    let D = Infinity;
                    do {
                        var P = sj(w, c, "height");
                        P && (D = Math.min(D, P));
                        (P = sj(w, c, "maxHeight")) && (D = Math.min(D, P))
                    } while (w.parentElement && (w = w.parentElement) && w.tagName !== "HTML");
                    w = D
                }!(T(qi) && w <= t * 2) && (w = Math.min(t, w), w < t * .5 || w < 100) && (w = t);
                t = {
                    Z: new Bo(a, Math.floor(w)),
                    X: w < t ? 102 : !0
                }
            } else t = {
                Z: u,
                X: 100
            };
            return t
        });
        return e.google_ad_layout === "in-article" && Oo(c) ? {
            Z: Po(a, c, d, n, e),
            X: !1,
            qa: b,
            Za: g
        } : {
            Z: n,
            X: r,
            qa: b,
            Za: g
        }
    }

    function Mo(a, b) {
        if (a === "auto") return 1;
        switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8;
            default:
                throw Error("bad mask");
        }
    }

    function No(a, b, c) {
        if (c === "auto") c = Math.min(1200, fj(a)), b = b / c <= .25 ? 4 : 3;
        else {
            b = 0;
            for (const d in cj) c.indexOf(d) !== -1 && (b |= cj[d])
        }
        return b
    }

    function Po(a, b, c, d, e) {
        const f = e.google_ad_height || sj(c, b, "height");
        b = Eo(a, b, c, f, e).size();
        return b.Y * b.height() > a * d.height() ? new Y(b.Y, b.height(), 1) : d
    }

    function Oo(a) {
        return T(di) || a.location && a.location.hash === "#hffwroe2etoq"
    };

    function Qo(a, b, c, d, e) {
        var f;
        (f = fj(b)) ? fj(b) < 488 ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, qj(b, c), f = {
            F: f,
            G: !0
        }) : f = {
            F: a,
            G: 5
        } : f = {
            F: a,
            G: 4
        }: f = {
            F: a,
            G: 10
        };
        const {
            F: g,
            G: h
        } = f;
        if (h !== !0 || a === g) return new uo(12, new rj(a, d), null, null, !0, h, 100);
        const {
            Z: k,
            X: l,
            qa: m
        } = Lo(g, "auto", b, c, e, !0);
        return new uo(1, k, m, 2, !0, h, l)
    };
    var So = (a, b) => {
            var c = b.google_ad_format;
            if (c === "autorelaxed") {
                a: {
                    if (b.google_content_recommendation_ui_type !== "pedestal")
                        for (const d of vo)
                            if (b[d] != null) {
                                a = !0;
                                break a
                            }
                    a = !1
                }
                return a ? 9 : 5
            }
            if (Jo(c)) return 1;
            if (c === "link") return 4;
            if (c === "fluid") {
                if (c = b.google_ad_layout === "in-article") c = T(ki) || a.location && (a.location.hash == "#hffwroe2etop" || a.location.hash == "#hffwroe2etoq");
                return c ? (Ro(b), 1) : 8
            }
            if (b.google_reactive_ad_format === 27) return Ro(b), 1
        },
        Uo = (a, b, c, d, e = !1) => {
            var f = b.offsetWidth || (c.google_ad_resize ||
                e) && sj(b, d, "width") || c.google_ad_width || 0;
            a === 4 && (c.google_ad_format = "auto", a = 1);
            e = (e = To(a, f, b, c, d)) ? e : Ko(f, c.google_ad_format, d, b, c);
            e.size().i(d, c, b);
            e.fa != null && (c.google_responsive_formats = e.fa);
            e.V != null && (c.google_safe_for_responsive_override = e.V);
            e.i != null && (e.i === !0 ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = e.i));
            e.j != null && e.j !== !0 && (c.gfwrnher = e.j);
            d = e.A || c.google_ad_width;
            d != null && (c.google_resizing_width = d);
            d = e.u || c.google_ad_height;
            d != null && (c.google_resizing_height = d);
            d = e.size().g(f);
            const g = e.size().height();
            c.google_ad_width = d;
            c.google_ad_height = g;
            var h = e.size();
            f = h.g(f) + "x" + h.height();
            c.google_ad_format = f;
            c.google_responsive_auto_format = e.C;
            e.g != null && (c.armr = e.g);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            e.i === !0 && (c.gfwrnh = e.size().height() + "px");
            e.D != null && (c.gfwroml = e.D);
            e.H != null && (c.gfwromr = e.H);
            e.u != null && (c.gfwroh = e.u);
            e.A != null && (c.gfwrow = e.A);
            e.I != null && (c.gfwroz = e.I);
            f = ne(window) || window;
            qn(f.location, "google_responsive_dummy_ad") && (Sa([1, 2, 3, 4, 5, 6, 7, 8], e.C) || e.g === 1) && e.g !== 2 && (f = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }), c.dash = `<${to}>window.top.postMessage('${f}', '*'); 
          </${to}> 
          <div id="dummyAd" style="width:${d}px;height:${g}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${d}x${g}</p> 
            <p>Rendered size:${d}x${g}</p> 
          </div>`);
            a != 1 && (a = e.size().height(), b.style.height = a + "px")
        };
    const To = (a, b, c, d, e) => {
            const f = d.google_ad_height || sj(c, e, "height");
            switch (a) {
                case 5:
                    const {
                        F: g,
                        G: h
                    } = tk(247, () => Io(b, d.google_ad_format, e, c, d));
                    h === !0 && b != g && qj(e, c);
                    h === !0 ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = h);
                    return xo(g, d);
                case 9:
                    return Ao(b, d);
                case 8:
                    return Eo(b, e, c, f, d);
                case 10:
                    return Qo(b, e, c, f, d)
            }
        },
        Ro = a => {
            a.google_ad_format = "auto";
            a.armr = 3
        };

    function Vo(a, b) {
        a.google_resizing_allowed = !0;
        a.ovlp = !0;
        a.google_ad_format = "auto";
        a.iaaso = !0;
        a.armr = b
    };

    function Wo(a, b) {
        var c = ne(b);
        if (c) {
            c = fj(c);
            const d = qe(a, b) || {},
                e = d.direction;
            if (d.width === "0px" && d.cssFloat !== "none") return -1;
            if (e === "ltr" && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if (e === "rtl" && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };

    function Xo(a, b) {
        switch (a) {
            case "google_reactive_ad_format":
                return a = parseInt(b, 10), isNaN(a) ? 0 : a;
            default:
                return b
        }
    }

    function Yo(a, b) {
        if (a.getAttribute("src")) {
            var c = a.getAttribute("src") || "",
                d = le(c, "client");
            d && (b.google_ad_client = Xo("google_ad_client", d));
            (c = le(c, "host")) && (b.google_ad_host = Xo("google_ad_host", c))
        }
        a = a.attributes;
        c = a.length;
        for (d = 0; d < c; d++) {
            var e = a[d];
            if (/data-/.test(e.name)) {
                const f = wa(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                b.hasOwnProperty(f) || (e = Xo(f, e.value), e !== null && (b[f] = e))
            }
        }
    }

    function Zo(a) {
        if (a = Qe(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return 12
    }

    function $o(a, b, c, d) {
        Yo(a, b);
        if (c.document && c.document.body && !So(c, b) && !b.google_reactive_ad_format && !b.google_ad_intent_query) {
            var e = parseInt(a.style.width, 10),
                f = Wo(a, c);
            if (f > 0 && e > f) {
                var g = parseInt(a.style.height, 10);
                e = !!Ln[e + "x" + g];
                let h = f;
                if (e) {
                    const k = Mn(f, g);
                    if (k) h = k, b.google_ad_format = k + "x" + g + "_0ads_al";
                    else throw new V("No slot size for availableWidth=" + f);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = h;
                e || (b.google_ad_format = null, b.google_override_format = !0);
                f = h;
                a.style.width = `${f}px`;
                Vo(b, 4)
            }
        }
        if (T(ii) ||
            fj(c) < 488) {
            f = ne(c) || c;
            g = a.offsetWidth || sj(a, c, "width") || b.google_ad_width || 0;
            e = b.google_ad_client;
            if (d = qn(f.location, "google_responsive_slot_preview") || Um(f, 1, e, d)) b: if (b.google_reactive_ad_format || b.google_ad_resize || So(c, b) || ij(a, b)) d = !1;
                else {
                    for (d = a; d; d = d.parentElement) {
                        f = qe(d, c);
                        if (!f) {
                            b.gfwrnwer = 18;
                            d = !1;
                            break b
                        }
                        if (!Sa(["static", "relative"], f.position)) {
                            b.gfwrnwer = 17;
                            d = !1;
                            break b
                        }
                    }
                    if (!T(ui) && (d = U(ni), d = lj(c, a, g, d, b), d !== !0)) {
                        b.gfwrnwer = d;
                        d = !1;
                        break b
                    }
                    d = c === c.top ? !0 : !1
                }
            d ? (Vo(b, 1), d = !0) : d = !1
        } else d = !1;
        if (g = So(c, b)) Uo(g, a, b, c, d);
        else {
            if (ij(a, b)) {
                if (d = qe(a, c)) a.style.width = d.width, a.style.height = d.height, hj(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = Zo(c)
            } else hj(a.style, b);
            c.location && c.location.hash === "#gfwmrp" || b.google_responsive_auto_format === 12 && b.google_full_width_responsive === "true" ? Uo(10, a, b, c, !1) : Math.random() < .01 && b.google_responsive_auto_format ===
                12 && (a = mj(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), a !== !0 ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    };

    function ap(a) {
        if (a === a.top) return 0;
        for (let b = a; b && b !== b.top && me(b); b = b.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };

    function Fg(a, b, c = 0) {
        a.g.size > 0 || bp(a);
        c = Math.min(Math.max(0, c), 9);
        const d = a.g.get(c);
        d ? d.push(b) : a.g.set(c, [b])
    }

    function cp(a, b, c, d) {
        Od(b, c, d);
        el(a, () => Pd(b, c, d))
    }

    function dp(a, b) {
        a.state !== 1 && (a.state = 1, a.g.size > 0 && ep(a, b))
    }

    function bp(a) {
        a.l.document.visibilityState ? cp(a, a.l.document, "visibilitychange", b => {
            a.l.document.visibilityState === "hidden" && dp(a, b);
            a.l.document.visibilityState === "visible" && (a.state = 0)
        }) : "onpagehide" in a.l ? (cp(a, a.l, "pagehide", b => {
            dp(a, b)
        }), cp(a, a.l, "pageshow", () => {
            a.state = 0
        })) : cp(a, a.l, "beforeunload", b => {
            dp(a, b)
        })
    }

    function ep(a, b) {
        for (let c = 9; c >= 0; c--) a.g.get(c) ? .forEach(d => {
            d(b)
        })
    }
    var fp = class extends dl {
        constructor(a) {
            super();
            this.l = a;
            this.state = 0;
            this.g = new Map
        }
    };
    async function gp(a, b) {
        var c = 10;
        return c <= 0 ? Promise.reject(Error(`wfc bad input ${c} ${200}`)) : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e(Error(`wfc timed out ${c}`)))
            }, 200)
        })
    };

    function hp(a) {
        const b = a.state.pc;
        return b !== null && b !== 0 ? b : a.state.pc = He(a.l)
    }

    function ip(a) {
        const b = a.state.wpc;
        return b !== null && b !== "" ? b : a.state.wpc = Kn(a.l)
    }

    function jp(a, b) {
        var c = new Yf;
        var d = hp(a);
        c = Bd(c, 1, d);
        d = ip(a);
        c = E(c, 2, y(d), "");
        c = Bd(c, 3, a.state.sd);
        return Bd(c, 7, Math.round(b || a.l.performance.now()))
    }
    async function kp(a) {
        await gp(a.l, () => !(!hp(a) || !ip(a)))
    }

    function lp(a) {
        var b = N(mp);
        if (b.i) {
            var c = b.u;
            a(c);
            b.state.psi = Fd(c)
        }
    }

    function np(a) {
        Fg(a.j, () => {
            var b = jp(a);
            b = nd(b, 12, Zf, a.A);
            a.i && !a.state.le.includes(3) && (a.state.le.push(3), Bg(a.g, b))
        }, 9)
    }

    function op(a) {
        const b = new Uf;
        Fg(a.j, () => {
            md(b, 2, a.u);
            Bd(b, 3, a.state.tar);
            var c = a.g;
            var d = jp(a);
            d = nd(d, 8, Zf, b);
            Bg(c, d)
        }, 9)
    }
    async function pp(a) {
        var b = N(mp);
        if (b.i && !b.state.le.includes(1)) {
            b.state.le.push(1);
            var c = b.l.performance.now();
            await kp(b);
            var d = new Qf;
            a = E(d, 5, Tb(a), !1);
            d = a.setPage;
            var e = new Nf;
            e = A(e, 1, bc(ej(b.l).scrollWidth));
            a = d.call(a, e.setHeight(ej(b.l).scrollHeight));
            d = new Nf;
            e = fj(b.l);
            d = A(d, 1, bc(e)).setHeight(ej(b.l).clientHeight);
            a = md(a, 1, d);
            for (e = d = b.l; d && d != d.parent;) d = d.parent, me(d) && (e = d);
            a = E(a, 4, y(e.location.href), "");
            d = ap(b.l);
            d !== 0 && (e = new Pf, d = A(e, 1, x(d)), md(a, 3, d));
            d = b.g;
            c = jp(b, c);
            c = nd(c, 4, Zf,
                a);
            Bg(d, c);
            np(b);
            op(b)
        }
    }
    async function qp(a, b, c) {
        if (a.i && c.length && !a.state.lgdp.includes(Number(b))) {
            a.state.lgdp.push(Number(b));
            var d = a.l.performance.now();
            await kp(a);
            var e = a.g;
            a = jp(a, d);
            d = new Of;
            b = E(d, 1, x(b), 0);
            c = cd(b, 2, c, Xb);
            c = nd(a, 9, Zf, c);
            Bg(e, c)
        }
    }
    async function rp(a, b) {
        await kp(a);
        var c = a.g;
        a = jp(a);
        a = Bd(a, 3, 1);
        b = nd(a, 10, Zf, b);
        Bg(c, b)
    }
    var mp = class {
        constructor(a, b) {
            this.l = Re() || window;
            this.j = b ? ? new fp(this.l);
            this.g = a ? ? new Hg(2, Ul(), 100, 100, !0, this.j);
            this.state = Yk(Tk(), 33, () => {
                const c = U(li);
                return {
                    sd: c,
                    ssp: c > 0 && re() < 1 / c,
                    pc: null,
                    wpc: null,
                    cu: null,
                    le: [],
                    lgdp: [],
                    psi: null,
                    tar: 0,
                    cc: null
                }
            })
        }
        get i() {
            return this.state.ssp
        }
        get u() {
            return tk(1178, () => Gd(Tf, Mc(this.state.psi || []))) || new Tf
        }
        get A() {
            return tk(1227, () => Gd(Vf, Mc(this.state.cc || []))) || new Vf
        }
    };

    function sp() {
        var a = window;
        return p.google_adtest === "on" || p.google_adbreak_test === "on" || a.location.host.endsWith("h5games.usercontent.goog") || a.location.host === "gamesnacks.com" ? a.document.querySelector('meta[name="h5-games-eids"]') ? .getAttribute("content") ? .split(",").map(b => Math.floor(Number(b))).filter(b => !isNaN(b) && b > 0) || [] : []
    };

    function tp(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    }

    function up(a) {
        var b = O.document;
        if (b.currentScript) return tp(b.currentScript, a);
        for (const c of b.scripts)
            if (tp(c, a) === 0) return 0;
        return 1
    };

    function vp(a, b) {
        return {
            [3]: {
                [55]: () => a === 0,
                [23]: c => Um(O, Number(c)),
                [24]: c => Wm(Number(c)),
                [61]: () => J(b, 6),
                [63]: () => J(b, 6) || K(b, 8) === ".google.ch"
            },
            [4]: {},
            [5]: {
                [6]: () => K(b, 15)
            }
        }
    };

    function wp(a = p) {
        return a.ggeac || (a.ggeac = {})
    };

    function xp(a, b = document) {
        return !!b.featurePolicy ? .features().includes(a)
    }

    function yp(a, b = document) {
        return !!b.featurePolicy ? .allowedFeatures().includes(a)
    }

    function zp(a, b = navigator) {
        try {
            return !!b.protectedAudience ? .queryFeatureSupport ? .(a)
        } catch (c) {
            return !1
        }
    };

    function Ap(a, b) {
        try {
            const d = a.split(".");
            a = p;
            let e = 0,
                f;
            for (; a != null && e < d.length; e++) f = a, a = a[d[e]], typeof a === "function" && (a = f[d[e]]());
            var c = a;
            if (typeof c === b) return c
        } catch {}
    }
    var Bp = {
        [3]: {
            [8]: a => {
                try {
                    return la(a) != null
                } catch {}
            },
            [9]: a => {
                try {
                    var b = la(a)
                } catch {
                    return
                }
                if (a = typeof b === "function") b = b && b.toString && b.toString(), a = typeof b === "string" && b.indexOf("[native code]") != -1;
                return a
            },
            [10]: () => window === window.top,
            [6]: a => Sa(N(lh).g(), Number(a)),
            [27]: a => {
                a = Ap(a, "boolean");
                return a !== void 0 ? a : void 0
            },
            [60]: a => {
                try {
                    return !!p.document.querySelector(a)
                } catch {}
            },
            [80]: a => {
                try {
                    return !!p.matchMedia(a).matches
                } catch {}
            },
            [69]: a => xp(a, p.document),
            [70]: a => yp(a, p.document),
            [79]: a => zp(a,
                p.navigator)
        },
        [4]: {
            [3]: () => ze(),
            [6]: a => {
                a = Ap(a, "number");
                return a !== void 0 ? a : void 0
            }
        },
        [5]: {
            [2]: () => window.location.href,
            [3]: () => {
                try {
                    return window.top.location.hash
                } catch {
                    return ""
                }
            },
            [4]: a => {
                a = Ap(a, "string");
                return a !== void 0 ? a : void 0
            },
            [12]: a => {
                try {
                    const b = Ap(a, "string");
                    if (b !== void 0) return atob(b)
                } catch (b) {}
            }
        }
    };

    function Cp(a, b) {
        const c = new Map;
        for (const [f, g] of a[1].entries()) {
            var d = f,
                e = g;
            const {
                gb: h,
                bb: k,
                eb: l
            } = e[e.length - 1];
            c.set(d, h + k * l)
        }
        for (const f of b)
            for (const g of G(f, Dm, 2, C()))
                if (Cm(g).length !== 0) {
                    b = sd($b(z(g, 8)), 0);
                    !L(g, 4) || L(g, 13) || L(g, 14) || (b = c.get(L(g, 4)) ? ? 0, d = sd($b(z(g, 1)), 0) * Cm(g).length, c.set(L(g, 4), b + d));
                    d = [];
                    for (e = 0; e < Cm(g).length; e++) {
                        const h = {
                            gb: b,
                            bb: sd($b(z(g, 1)), 0),
                            eb: Cm(g).length,
                            vb: e,
                            ha: L(f, 1),
                            ra: g,
                            O: Cm(g)[e]
                        };
                        d.push(h)
                    }
                    Dp(a[2], L(g, 10), d) || Dp(a[1], L(g, 4), d) || Dp(a[0], Cm(g)[0].getId(),
                        d)
                }
        return a
    }

    function Dp(a, b, c) {
        if (!b) return !1;
        a.has(b) || a.set(b, []);
        a.get(b).push(...c);
        return !0
    };

    function Ep(a = re()) {
        return b => te(`${b} + ${a}`) % 1E3
    };
    const Fp = [12, 13, 20];

    function Gp(a, b) {
        var c = N(Ng).M;
        const d = Df(F(b.ra, wf, 3), c);
        if (!d.success) return Lg(a.L, F(b.ra, wf, 3), b.ha, b.O.getId(), d), !1;
        if (!d.value) return !1;
        c = Df(F(b.O, wf, 3), c);
        return c.success ? c.value ? !0 : !1 : (Lg(a.L, F(b.O, wf, 3), b.ha, b.O.getId(), c), !1)
    }

    function Hp(a, b, c) {
        a.g[c] || (a.g[c] = []);
        a = a.g[c];
        a.includes(b) || a.push(b)
    }

    function Ip(a, b, c, d) {
        const e = [];
        var f;
        if (f = b !== 9) a.u[b] ? f = !0 : (a.u[b] = !0, f = !1);
        if (f) return Jg(a.L, b, c, e, [], 4), e;
        f = Fp.includes(b);
        const g = [],
            h = [];
        for (const u of [0, 1, 2])
            for (const [n, r] of a.la[u].entries()) {
                var k = n,
                    l = r;
                const t = new dg;
                var m = l.filter(w => w.ha === b && a.i[w.O.getId()] && Gp(a, w));
                if (m.length)
                    for (const w of m) h.push(w.O);
                else if (!a.za && (u === 2 ? (m = d[1], dd(t, 2, eg, x(k))) : m = d[0], k = m ? .(String(k)) ? ? (u === 2 && L(l[0].ra, 11) === 1 ? void 0 : d[0](String(k))), k !== void 0)) {
                    for (const w of l) {
                        if (w.ha !== b) continue;
                        l =
                            k - w.gb;
                        m = w.bb;
                        const P = w.eb,
                            D = w.vb;
                        l < 0 || l >= m * P || l % P !== D || !Gp(a, w) || (l = L(w.ra, 13), l !== 0 && l !== void 0 && (m = a.j[String(l)], m !== void 0 && m !== w.O.getId() ? Kg(a.L, a.j[String(l)], w.O.getId(), l) : a.j[String(l)] = w.O.getId()), h.push(w.O))
                    }
                    id(t, eg) !== 0 && (E(t, 3, Yb(k), 0), g.push(t))
                }
            }
        for (const u of h) d = u.getId(), e.push(d), Hp(a, d, f ? 4 : c), ch(G(u, Gf, 2, C()), f ? eh() : [c], a.L, d);
        Jg(a.L, b, c, e, g, 1);
        return e
    }

    function Jp(a, b) {
        b = b.map(c => new Em(c)).filter(c => !Fp.includes(L(c, 1)));
        a.la = Cp(a.la, b)
    }

    function Kp(a, b) {
        Q(1, c => {
            a.i[c] = !0
        }, b);
        Q(2, (c, d, e) => Ip(a, c, d, e), b);
        Q(3, c => (a.g[c] || []).concat(a.g[4]), b);
        Q(12, c => void Jp(a, c), b);
        Q(16, (c, d) => void Hp(a, c, d), b)
    }
    var Lp = class {
        constructor(a, b, c, {
            za: d = !1,
            hc: e = []
        } = {}) {
            this.la = a;
            this.L = c;
            this.u = {};
            this.za = d;
            this.g = {
                [b]: [],
                [4]: []
            };
            this.i = {};
            this.j = {};
            if (a = bf()) {
                a = a.split(",") || [];
                for (const f of a)(a = Number(f)) && (this.i[a] = !0)
            }
            for (const f of e) this.i[f] = !0
        }
    };

    function Mp(a, b) {
        a.g = gh(14, b, () => {})
    }
    class Np {
        constructor() {
            this.g = () => {}
        }
    }

    function Op(a) {
        N(Np).g(a)
    };

    function Pp({
        qb: a,
        M: b,
        config: c,
        lb: d = wp(),
        mb: e = 0,
        L: f = new Mg(F(a, Fm, 5) ? .g() ? ? 0, F(a, Fm, 5) ? .i() ? ? 0, F(a, Fm, 5) ? .j() ? ? !1),
        la: g = Cp({
            [0]: new Map,
            [1]: new Map,
            [2]: new Map
        }, G(a, Em, 2, C(Ib)))
    }) {
        d.hasOwnProperty("init-done") ? (gh(12, d, () => {})(G(a, Em, 2, C()).map(h => Fd(h))), gh(13, d, () => {})(G(a, Gf, 1, C()).map(h => Fd(h)), e), b && gh(14, d, () => {})(b), Qp(e, d)) : (Kp(new Lp(g, e, f, c), d), hh(d), ih(d), jh(d), Qp(e, d), ch(G(a, Gf, 1, C(Ib)), [e], f, void 0, !0), Og = Og || !(!c || !c.ub), Op(Bp), b && Op(b))
    }

    function Qp(a, b = wp()) {
        kh(N(lh), b, a);
        Rp(b, a);
        Mp(N(Np), b);
        N(Ee).C()
    }

    function Rp(a, b) {
        const c = N(Ee);
        c.i = (d, e) => gh(5, a, () => !1)(d, e, b);
        c.u = (d, e) => gh(6, a, () => 0)(d, e, b);
        c.g = (d, e) => gh(7, a, () => "")(d, e, b);
        c.A = (d, e) => gh(8, a, () => [])(d, e, b);
        c.j = (d, e) => gh(17, a, () => [])(d, e, b);
        c.C = () => {
            gh(15, a, () => {})(b)
        }
    };

    function Sp(a, b) {
        b = {
            [0]: Ep(He(b).toString())
        };
        b = N(lh).u(a, b);
        ph.aa(1085, qp(N(mp), a, b))
    }

    function Tp(a, b, c) {
        var d = X(a);
        if (d.plle) Qp(1, wp(a));
        else {
            d.plle = !0;
            d = F(b, Gm, 12);
            var e = J(b, 9);
            Pp({
                qb: d,
                M: vp(c, b),
                config: {
                    za: e && !!a.google_disable_experiments,
                    ub: e
                },
                lb: wp(a),
                mb: 1
            });
            if (c = K(b, 15)) c = Number(c), N(lh).j(c);
            for (const f of Xc(b, 19, Zb, C())) N(lh).i(f);
            Sp(12, a);
            Sp(10, a);
            a = ne(a) || a;
            qn(a.location, "google_mc_lab") && N(lh).i(44738307)
        }
    };

    function Up(a) {
        rf(W, b => {
            b.shv = String(a);
            b.mjsv = Jn({
                wa: Ul(),
                Ca: a
            });
            const c = N(lh).g(),
                d = sp();
            b.eid = c.concat(d).join(",")
        })
    }

    function Vp(a, b) {
        const c = b ? .g();
        b = c ? .g() || K(a, 2);
        a = c ? .i() ? J(c, 4) : J(a, 6);
        Up(b);
        bb(Km, hb);
        Km = a
    };
    var Wp = {
        google_pause_ad_requests: !0,
        google_user_agent_client_hint: !0
    };

    function Xp(a) {
        var b = W;
        try {
            return bb(a, gb), new Jm(JSON.parse(a))
        } catch (c) {
            b.P(838, c instanceof Error ? c : Error(String(c)))
        }
        return new Jm
    };

    function Yp(a, b) {
        if (J(b, 22)) return 7;
        if (J(b, 16)) return 6;
        var c = b.g() ? .j();
        const d = b.g() ? .u() ? ? 0;
        c = c === a;
        switch (d) {
            case 1:
                return c ? 9 : 8;
            case 2:
                return c ? 11 : 10;
            case 3:
                return c ? 13 : 12
        }
        b = b.g() ? .g() ? ? [];
        return b.length === 0 ? 1 : b.length === 1 ? a === b[0] ? 3 : 2 : b.includes(a) ? 5 : 4
    }

    function Zp(a, b, c) {
        b.google_loader_used !== "sd" && (b.abgtt = Yp(a, c))
    };
    var $p = a => {
        Od(window, "message", b => {
            let c;
            try {
                c = JSON.parse(b.data)
            } catch (d) {
                return
            }!c || c.googMsgType !== "sc-cnf" || a(c, b)
        })
    };

    function aq(a, b) {
        return b == null ? `&${a}=null` : `&${a}=${Math.floor(b)}`
    }

    function bq(a, b) {
        return `&${a}=${b.toFixed(3)}`
    }

    function cq() {
        const a = new Set,
            b = Ik();
        try {
            if (!b) return a;
            const c = b.pubads();
            for (const d of c.getSlots()) a.add(d.getSlotId().getDomId())
        } catch {}
        return a
    }

    function dq(a) {
        a = a.id;
        return a != null && (cq().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"))
    }

    function eq(a, b, c) {
        if (!a.sources) return !1;
        switch (fq(a)) {
            case 2:
                const d = gq(a);
                if (d) return c.some(f => hq(d, f));
                break;
            case 1:
                const e = iq(a);
                if (e) return b.some(f => hq(e, f))
        }
        return !1
    }

    function fq(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(b => b.previousRect && b.currentRect);
        if (a.length >= 1) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function iq(a) {
        return jq(a, b => b.currentRect)
    }

    function gq(a) {
        return jq(a, b => b.previousRect)
    }

    function jq(a, b) {
        return a.sources.reduce((c, d) => {
            d = b(d);
            return c ? d && d.width * d.height !== 0 ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function hq(a, b) {
        const c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return c <= 0 || a <= 0 ? !1 : c * a * 100 / ((b.right - b.left) * (b.bottom - b.top)) >= 50
    }

    function kq() {
        const a = Array.from(document.getElementsByTagName("iframe")).filter(dq),
            b = [...cq()].map(c => document.getElementById(c)).filter(c => c !== null);
        lq = window.scrollX;
        mq = window.scrollY;
        return nq = [...a, ...b].map(c => c.getBoundingClientRect())
    }

    function oq() {
        var a = new pq;
        if (T(Ui)) {
            var b = window;
            if (!b.google_plmetrics && window.PerformanceObserver) {
                b.google_plmetrics = !0;
                b = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
                a.options.pb && b.push("event");
                for (const c of b) b = {
                    type: c,
                    buffered: !0
                }, c === "event" && (b.durationThreshold = 40), qq(a).observe(b);
                rq(a)
            }
        }
    }

    function sq(a, b) {
        const c = lq !== window.scrollX || mq !== window.scrollY ? [] : nq,
            d = kq();
        for (const e of b.getEntries()) switch (b = e.entryType, b) {
            case "layout-shift":
                tq(a, e, c, d);
                break;
            case "largest-contentful-paint":
                b = e;
                a.Ja = Math.floor(b.renderTime || b.loadTime);
                a.Ia = b.size;
                break;
            case "first-input":
                b = e;
                a.Fa = Number((b.processingStart - b.startTime).toFixed(3));
                a.Ga = !0;
                a.g.some(f => f.entries.some(g => e.duration === g.duration && e.startTime === g.startTime)) || uq(a, e);
                break;
            case "longtask":
                b = Math.max(0, e.duration - 50);
                a.C +=
                    b;
                a.I = Math.max(a.I, b);
                a.ta += 1;
                break;
            case "event":
                uq(a, e);
                break;
            default:
                Sb(b, void 0)
        }
    }

    function qq(a) {
        a.L || (a.L = new PerformanceObserver(ak(640, b => {
            sq(a, b)
        })));
        return a.L
    }

    function rq(a) {
        const b = ak(641, () => {
                var d = document;
                (d.prerendering ? 3 : {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) === 2 && vq(a)
            }),
            c = ak(641, () => void vq(a));
        document.addEventListener("visibilitychange", b);
        document.addEventListener("pagehide", c);
        a.Ea = () => {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("pagehide", c);
            qq(a).disconnect()
        }
    }

    function vq(a) {
        if (!a.Ma) {
            a.Ma = !0;
            qq(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += bq("cls", a.D), b += bq("mls", a.V), b += aq("nls", a.sa), window.LayoutShiftAttribution && (b += bq("cas", a.A), b += aq("nas", a.La), b += bq("was", a.Qa)), b += bq("wls", a.ua), b += bq("tls", a.Pa));
            window.LargestContentfulPaint && (b += aq("lcp", a.Ja), b += aq("lcps", a.Ia));
            window.PerformanceEventTiming && a.Ga && (b += aq("fid", a.Fa));
            window.PerformanceLongTaskTiming && (b += aq("cbt", a.C),
                b += aq("mbt", a.I), b += aq("nlt", a.ta));
            let d = 0;
            for (var c of document.getElementsByTagName("iframe")) dq(c) && d++;
            b += aq("nif", d);
            b += aq("ifi", Te(window));
            c = N(lh).g();
            b += `&${"eid"}=${encodeURIComponent(c.join())}`;
            b += `&${"top"}=${p===p.top?1:0}`;
            b += a.Oa ? `&${"qqid"}=${encodeURIComponent(a.Oa)}` : aq("pvsid", He(p));
            window.googletag && (b += "&gpt=1");
            c = Math.min(a.g.length - 1, Math.floor((a.L ? a.Ha : performance.interactionCount || 0) / 50));
            c >= 0 && (c = a.g[c].latency, c >= 0 && (b += aq("inp", c)));
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.Ea()
        }
    }

    function tq(a, b, c, d) {
        if (!b.hadRecentInput) {
            a.D += Number(b.value);
            Number(b.value) > a.V && (a.V = Number(b.value));
            a.sa += 1;
            if (c = eq(b, c, d)) a.A += b.value, a.La++;
            if (b.startTime - a.Ka > 5E3 || b.startTime - a.Na > 1E3) a.Ka = b.startTime, a.i = 0, a.j = 0;
            a.Na = b.startTime;
            a.i += b.value;
            c && (a.j += b.value);
            a.i > a.ua && (a.ua = a.i, a.Qa = a.j, a.Pa = b.startTime + b.duration)
        }
    }

    function uq(a, b) {
        wq(a, b);
        const c = a.g[a.g.length - 1],
            d = a.H[b.interactionId];
        if (d || a.g.length < 10 || b.duration > c.latency) d ? (d.entries.push(b), d.latency = Math.max(d.latency, b.duration)) : (b = {
            id: b.interactionId,
            latency: b.duration,
            entries: [b]
        }, a.H[b.id] = b, a.g.push(b)), a.g.sort((e, f) => f.latency - e.latency), a.g.splice(10).forEach(e => {
            delete a.H[e.id]
        })
    }

    function wq(a, b) {
        b.interactionId && (a.ba = Math.min(a.ba, b.interactionId), a.u = Math.max(a.u, b.interactionId), a.Ha = a.u ? (a.u - a.ba) / 7 + 1 : 0)
    }
    var pq = class {
            constructor() {
                this.j = this.i = this.sa = this.V = this.D = 0;
                this.Na = this.Ka = Number.NEGATIVE_INFINITY;
                this.g = [];
                this.H = {};
                this.Ha = 0;
                this.ba = Infinity;
                this.Fa = this.Ia = this.Ja = this.La = this.Qa = this.A = this.Pa = this.ua = this.u = 0;
                this.Ga = !1;
                this.ta = this.I = this.C = 0;
                this.L = null;
                this.Ma = !1;
                this.Ea = () => {};
                const a = document.querySelector("[data-google-query-id]");
                this.Oa = a ? a.getAttribute("data-google-query-id") : null;
                this.options = {
                    pb: !0
                }
            }
        },
        lq, mq, nq = [];
    let xq = null;
    const yq = [],
        zq = new Map;
    let Aq = -1;

    function Bq(a) {
        return Bj.test(a.className) && a.dataset.adsbygoogleStatus !== "done"
    }

    function Cq(a, b, c) {
        a.dataset.adsbygoogleStatus = "done";
        Dq(a, b, c)
    }

    function Dq(a, b, c) {
        var d = window;
        d.google_spfd || (d.google_spfd = $o);
        var e = b.google_reactive_ads_config;
        e || $o(a, b, d, c);
        bo(d, b);
        if (!Eq(a, b, d)) {
            if (e) {
                e = e.page_level_pubvars || {};
                if (X(O).page_contains_reactive_tag && !X(O).allow_second_reactive_tag) {
                    if (e.pltais) {
                        Nm(!1);
                        return
                    }
                    throw new V("Only one 'enable_page_level_ads' allowed per page.");
                }
                X(O).page_contains_reactive_tag = !0;
                Nm(e.google_pgb_reactive === 7)
            }
            b.google_unique_id = Se(d);
            se(Wp, (f, g) => {
                b[g] = b[g] || d[g]
            });
            b.google_loader_used !== "sd" && (b.google_loader_used =
                "aa");
            b.google_reactive_tag_first = (X(O).first_tag_on_page || 0) === 1;
            tk(164, () => {
                ho(d, b, a, c)
            })
        }
    }

    function Eq(a, b, c) {
        var d = b.google_reactive_ads_config,
            e = typeof a.className === "string" && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
            f = Lm(c);
        if (f && f.Ra && b.google_adtest !== "on" && !e) {
            e = jj(a, c);
            const g = ej(c).clientHeight;
            e = g === 0 ? null : e / g;
            if (!f.va || f.va && (e || 0) >= f.va) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = na(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", String(d)), f.Cb === "slot" && (xe(a.getAttribute("width")) !==
                null && a.setAttribute("width", "0"), xe(a.getAttribute("height")) !== null && a.setAttribute("height", "0"), a.style.width = "0px", a.style.height = "0px"), !0
        }
        if ((f = qe(a, c)) && f.display === "none" && !(b.google_adtest === "on" || b.google_reactive_ad_format > 0 || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = b.google_pgb_reactive == null || b.google_pgb_reactive === 3;
        return b.google_reactive_ad_format !== 1 && b.google_reactive_ad_format !==
            8 || !a ? !1 : (p.console && p.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + String(b.google_reactive_ad_format) + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function Fq(a) {
        var b = document.getElementsByTagName("INS");
        for (let d = 0, e = b[d]; d < b.length; e = b[++d]) {
            var c = e;
            if (Bq(c) && c.dataset.adsbygoogleStatus !== "reserved" && (!a || e.id === a)) return e
        }
        return null
    }

    function Gq(a, b, c) {
        if (a && "shift" in a) {
            lp(e => {
                xd(Sf(e), 2) || (e = Sf(e), Cd(e, 2))
            });
            for (var d = 20; a.length > 0 && d > 0;) {
                try {
                    Hq(a.shift(), b, c)
                } catch (e) {
                    setTimeout(() => {
                        throw e;
                    })
                }--d
            }
        }
    }

    function Iq() {
        const a = pe("INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        Ae(a);
        return a
    }

    function Jq(a, b) {
        const c = {},
            d = cn(a.google_ad_client, b);
        se(dj, (g, h) => {
            a.enable_page_level_ads === !1 ? c[h] = !1 : a.hasOwnProperty(h) ? c[h] = a[h] : d.includes(g) && (c[h] = !1)
        });
        ma(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
        const e = Iq();
        Ie.body.appendChild(e);
        const f = {
            google_reactive_ads_config: c,
            google_ad_client: a.google_ad_client
        };
        f.google_pause_ad_requests = !!X(O).pause_ad_requests;
        Zp(Kq(a) || Kn(O), f, b);
        Cq(e, f, b);
        lp(g => {
            xd(Sf(g), 6) || (g = Sf(g), Cd(g, 6))
        })
    }

    function Lq(a, b) {
        An(p).wasPlaTagProcessed = !0;
        const c = () => {
                Jq(a, b)
            },
            d = p.document;
        if (d.body || d.readyState === "complete" || d.readyState === "interactive") Jq(a, b);
        else {
            const e = Nd(W.pa(191, c));
            Od(d, "DOMContentLoaded", e);
            p.MutationObserver != null && (new p.MutationObserver((f, g) => {
                d.body && (e(), g.disconnect())
            })).observe(d, {
                childList: !0,
                subtree: !0
            })
        }
    }

    function Hq(a, b, c) {
        const d = {};
        tk(165, () => {
            Mq(a, d, b, c)
        }, e => {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin
        })
    }

    function Nq(a) {
        delete a.google_checked_head;
        se(a, (b, c) => {
            Aj[c] || (delete a[c], b = c.replace("google", "data").replace(/_/g, "-"), p.console.warn(`AdSense head tag doesn't support ${b} attribute.`))
        })
    }

    function Oq(a, b) {
        var c = O.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || O.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = X(window);
            if (d.head_tag_slot_vars) Pq(c);
            else {
                lp(g => {
                    g = Sf(g);
                    E(g, 7, Tb(!0), !1)
                });
                var e = {};
                Yo(c, e);
                Nq(e);
                var f = Ud(e);
                d.head_tag_slot_vars = f;
                c = {
                    google_ad_client: e.google_ad_client,
                    enable_page_level_ads: e
                };
                e.google_ad_intent_query &&
                    (c.enable_ad_intent_display_ads = !0);
                e.google_overlays === "bottom" && (c.overlays = {
                    bottom: !0
                });
                delete e.google_overlays;
                O.adsbygoogle || (O.adsbygoogle = []);
                d = O.adsbygoogle;
                d.loaded ? d.push(c) : d.splice && d.splice(0, 0, c);
                e.google_adbreak_test || b.j() ? .i() ? Qq(f, a) : $p(() => {
                    Qq(f, a)
                })
            }
        }
    }

    function Pq(a) {
        const b = X(window).head_tag_slot_vars,
            c = a.getAttribute("src") || "";
        if ((a = le(c, "client") || a.getAttribute("data-ad-client") || "") && a !== b.google_ad_client) throw new V("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
    }

    function Rq(a) {
        if (typeof a === "object" && a != null) {
            if (typeof a.type === "string") return 2;
            if (typeof a.sound === "string" || typeof a.preloadAdBreaks === "string" || T(Vi) && typeof a.h5AdsConfig === "object") return 3
        }
        return 0
    }

    function Mq(a, b, c, d) {
        if (a == null) throw new V("push() called with no parameters.");
        lp(f => {
            xd(Sf(f), 3) || (f = Sf(f), Cd(f, 3))
        });
        d.i() && Sq(a, d.g().g(), K(d, 2));
        var e = Rq(a);
        if (e !== 0)
            if (d = Om(), d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = Date.now(), d.adsbygoogle_execution_start_time = ua), xq == null) Tq(a), yq.push(a);
            else if (e === 3) {
            const f = xq;
            tk(787, () => {
                f.handleAdConfig(a)
            })
        } else vk(730, xq.handleAdBreak(a));
        else {
            ua = (new Date).getTime();
            co(c, d, Kq(a));
            Uq();
            a: {
                if (!a.enable_ad_intent_display_ads &&
                    a.enable_page_level_ads != void 0) {
                    if (typeof a.google_ad_client === "string") {
                        e = !0;
                        break a
                    }
                    throw new V("'google_ad_client' is missing from the tag config.");
                }
                e = !1
            }
            if (e) lp(f => {
                xd(Sf(f), 4) || (f = Sf(f), Cd(f, 4))
            }), Vq(a, d);
            else if ((e = a.params) && se(e, (f, g) => {
                    b[g] = f
                }), b.google_ad_output === "js") console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                Zp(Kq(a) || Kn(O), b, d);
                e = Wq(b, a);
                Yo(e, b);
                c = X(p).head_tag_slot_vars || {};
                se(c, (f, g) => {
                    b.hasOwnProperty(g) || (b[g] = f)
                });
                if (e.hasAttribute("data-require-head") && !X(p).head_tag_slot_vars) throw new V("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                if (!b.google_ad_client) throw new V("Ad client is missing from the slot.");
                if (c = (X(O).first_tag_on_page || 0) === 0 && Dn(b)) lp(f => {
                    xd(Sf(f), 5) || (f = Sf(f), Cd(f, 5))
                }), Xq(c);
                (X(O).first_tag_on_page || 0) === 0 && (X(O).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!X(O).pause_ad_requests;
                Cq(e, b, d)
            }
        }
    }
    let Yq = !1;

    function Sq(a, b, c) {
        Yq || (Yq = !0, a = Kq(a) || Kn(O), uk("predictive_abg", {
            a_c: a,
            p_c: b.join(),
            b_v: c
        }, .01))
    }

    function Kq(a) {
        return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
    }

    function Uq() {
        if (T(yi)) {
            const a = Lm(O);
            a && a.Ra || Mm(O)
        }
    }

    function Xq(a) {
        Je(() => {
            An(p).wasPlaTagProcessed || p.adsbygoogle && p.adsbygoogle.push(a)
        })
    }

    function Vq(a, b) {
        (X(O).first_tag_on_page || 0) === 0 && (X(O).first_tag_on_page = 1);
        if (a.tag_partner) {
            var c = a.tag_partner;
            const d = X(p);
            d.tag_partners = d.tag_partners || [];
            d.tag_partners.push(c)
        }
        En(a, b);
        Lq(a, b)
    }

    function Wq(a, b) {
        if (T(si) && a.google_ad_format === "rewarded") {
            if (a.google_ad_slot == null) throw new V("Rewarded format does not have valid ad slot");
            if (a.google_ad_loaded_callback == null) throw new V("Rewarded format does not have ad loaded callback");
            a.google_reactive_ad_format = 11;
            a.google_wrap_fullscreen_ad = !0;
            a.google_video_play_muted = !1;
            a.google_acr = a.google_ad_loaded_callback;
            delete a.google_ad_loaded_callback;
            delete a.google_ad_format
        }
        var c = !!a.google_wrap_fullscreen_ad;
        if (c) b = Iq(), b.dataset.adsbygoogleStatus =
            "reserved", Ie.documentElement.appendChild(b);
        else if (b = b.element) {
            if (!Bq(b) && (b.id ? b = Fq(b.id) : b = null, !b)) throw new V("'element' has already been filled.");
            if (!("innerHTML" in b)) throw new V("'element' is not a good DOM element.");
        } else if (b = Fq(), !b) throw new V("All 'ins' elements in the DOM with class=adsbygoogle already have ads in them.");
        if (c) {
            c = O;
            try {
                var d = (c || window).document,
                    e = d.compatMode == "CSS1Compat" ? d.documentElement : d.body;
                var f = (new Qd(e.clientWidth, e.clientHeight)).round()
            } catch (g) {
                f =
                    new Qd(-12245933, -12245933)
            }
            a.google_ad_height = f.height;
            a.google_ad_width = f.width;
            a.fsapi = !0
        }
        return b
    }

    function Zq(a) {
        a = {
            value: `${J(a,16)}`,
            host_v: `${J(a,22)}`,
            frequency: .01
        };
        uk("new_abg_tag", a, .01)
    }

    function $q(a) {
        Tk().S[Wk(26)] = !!Number(a)
    }

    function ar(a) {
        Number(a) ? X(O).pause_ad_requests = !0 : (X(O).pause_ad_requests = !1, a = () => {
            if (!X(O).pause_ad_requests) {
                var b = {};
                let c;
                typeof window.CustomEvent === "function" ? c = new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", b) : (c = document.createEvent("CustomEvent"), c.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!b.bubbles, !!b.cancelable, b.detail));
                O.dispatchEvent(c)
            }
        }, p.setTimeout(a, 0), p.setTimeout(a, 1E3))
    }

    function br(a) {
        a && a.call && typeof a === "function" && window.setTimeout(a, 0)
    }

    function Qq(a, b) {
        const c = { ...vn()
            },
            d = U(Ti);
        [0, 1].includes(d) && (c.osttc = `${d}`);
        b = zn(de(b.Bb, new Map(Object.entries(c)))).then(e => {
            xq == null && (e.init(a), xq = e, cr(e))
        });
        W.aa(723, b);
        b.finally(() => {
            yq.length = 0;
            uk("slotcar", {
                event: "api_ld",
                time: Date.now() - ua,
                time_pr: Date.now() - Aq
            });
            rp(N(mp), Wf(23))
        })
    }

    function cr(a) {
        for (const [c, d] of zq) {
            var b = c;
            const e = d;
            e !== -1 && (p.clearTimeout(e), zq.delete(b))
        }
        for (b = 0; b < yq.length; b++) {
            if (zq.has(b)) continue;
            const c = yq[b],
                d = Rq(c);
            tk(723, () => {
                if (d === 3) a.handleAdConfig(c);
                else if (d === 2) {
                    var e = a.handleAdBreakBeforeReady(c);
                    W.aa(730, e)
                }
            })
        }
    }

    function Tq(a) {
        var b = yq.length;
        if (Rq(a) === 2 && a.type === "preroll" && a.adBreakDone != null) {
            var c = a.adBreakDone;
            Aq === -1 && (Aq = Date.now());
            var d = p.setTimeout(() => {
                try {
                    c({
                        breakType: "preroll",
                        breakName: a.name,
                        breakFormat: "preroll",
                        breakStatus: "timeout"
                    }), zq.set(b, -1), uk("slotcar", {
                        event: "pr_to",
                        source: "adsbygoogle"
                    }), rp(N(mp), Wf(22))
                } catch (e) {
                    console.error("[Ad Placement API] adBreakDone callback threw an error:", e instanceof Error ? e : Error(String(e)))
                }
            }, U(Wi) * 1E3);
            zq.set(b, d)
        }
    };
    (function(a, b, c, d = () => {}) {
        W.Va = wk;
        tk(166, () => {
            const e = new Hg(2, a);
            try {
                Ob(m => {
                    var u = new ug;
                    var n = new tg;
                    try {
                        var r = He(window);
                        Bd(n, 1, r)
                    } catch (D) {}
                    try {
                        var t = N(lh).g();
                        cd(n, 2, t, Xb)
                    } catch (D) {}
                    try {
                        E(n, 3, y(window.document.URL), "")
                    } catch (D) {}
                    u = md(u, 2, n);
                    n = new sg;
                    n = E(n, 1, x(1191), 0);
                    try {
                        var w = gb(m ? .name) ? m.name : "Unknown error";
                        E(n, 2, y(w), "")
                    } catch (D) {}
                    try {
                        var P = gb(m ? .message) ? m.message : `Caught ${m}`;
                        E(n, 3, y(P), "")
                    } catch (D) {}
                    try {
                        const D = gb(m ? .stack) ? m.stack : Error().stack;
                        D && cd(n, 4, D.split(/\n\s*/), hc)
                    } catch (D) {}
                    m =
                        nd(u, 1, vg, n);
                    w = new rg;
                    try {
                        E(w, 1, y(Ul()), "")
                    } catch {}
                    nd(m, 6, wg, w);
                    Bd(m, 5, 1);
                    yg(e, m)
                })
            } catch (m) {}
            const f = Xp(b);
            var g = un(f);
            Vp(f, g);
            d();
            Pe(16, [1, Fd(f)]);
            var h = Re(Qe(O)) || O,
                k = Jn({
                    wa: a,
                    Ca: K(f, 2)
                });
            const l = c(k, f);
            k = O.document.currentScript === null ? 1 : up(l.Db);
            Tp(h, f, k);
            lp(m => {
                var u = vd(m, 1) + 1;
                E(m, 1, Yb(u), 0);
                O.top === O && (u = vd(m, 2) + 1, E(m, 2, Yb(u), 0));
                xd(Sf(m), 1) || (m = Sf(m), Cd(m, 1))
            });
            vk(1086, pp(k === 0));
            if (!Ga() || xa(Ma(), 11) >= 0) {
                sk(T(Yi));
                ko();
                km(jd(f, Hm, 26));
                try {
                    oq()
                } catch {}
                jo();
                Oq(l, f);
                h = window;
                k = h.adsbygoogle;
                if (!k || !k.loaded) {
                    Zq(f);
                    g = {
                        push: m => {
                            Hq(m, l, f)
                        },
                        loaded: !0,
                        pageState: Ed(g)
                    };
                    try {
                        Object.defineProperty(g, "requestNonPersonalizedAds", {
                            set: $q
                        }), Object.defineProperty(g, "pauseAdRequests", {
                            set: ar
                        }), Object.defineProperty(g, "onload", {
                            set: br
                        })
                    } catch {}
                    if (k)
                        for (const m of ["requestNonPersonalizedAds", "pauseAdRequests"]) k[m] !== void 0 && (g[m] = k[m]);
                    Gq(k, l, f);
                    h.adsbygoogle = g;
                    k && (g.onload = k.onload)
                }
            }
        })
    })(Ul(), typeof sttc === "undefined" ? void 0 : sttc, function(a, b) {
        b = vd(b, 1) > 2012 ? `_fy${vd(b,1)}` : "";
        ce `data:text/javascript,//show_ads_impl_preview.js`;
        return {
            Bb: ce `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${b}.js`,
            zb: ce `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl${b}.js`,
            yb: ce `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl_with_ama${b}.js`,
            Db: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
        }
    });
}).call(this, "[2021,\"r20241030\",\"r20190131\",null,null,null,null,\".google.tn\",null,null,null,[[[684125059,null,null,[1]],[null,619278254,null,[null,10]],[677914771,null,null,[1]],[676894296,null,null,[1]],[1371,null,null,[1]],[null,1130,null,[null,100]],[null,1340,null,[null,0.2]],[null,1338,null,[null,0.3]],[null,1336,null,[null,1.2]],[null,1339,null,[null,0.3]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[1370,null,null,[1]],[null,1224,null,[null,0.01]],[654220660,null,null,[1]],[null,1346,null,[null,6]],[null,1347,null,[null,3]],[null,1343,null,[null,300]],[null,1263,null,[null,-1]],[null,1323,null,[null,-1]],[null,1265,null,[null,-1]],[null,1264,null,[null,-1]],[1267,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1241,null,null,[1]],[1300,null,null,[1]],[null,null,null,[null,null,null,[\"en\",\"de\",\"fr\",\"es\",\"ja\"]],null,1273],[null,null,null,[null,null,null,[\"44786015\",\"44786016\"]],null,1261],[1318,null,null,[1]],[1368,null,null,[1]],[null,1364,null,[null,300]],[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"7\",\"8\",\"9\",\"10\",\"11\",\"12\",\"13\",\"14\",\"15\",\"16\",\"17\",\"18\",\"19\",\"20\",\"21\",\"24\",\"29\",\"30\",\"34\"]],null,null,null,627094447],[null,null,622128249,[null,null,\"#FFFFFF\"]],[null,null,622128250,[null,null,\"#1A73E8\"]],[null,null,null,[null,null,null,[\"33\",\"38\"]],null,null,null,641845510],[686023322,null,null,[1]],[622128248,null,null,[]],[681379804,null,null,[1]],[676863674,null,null,[1]],[null,null,589752731,[null,null,\"#FFFFFF\"]],[null,null,589752730,[null,null,\"#1A73E8\"]],[null,null,null,[null,null,null,[\"29_18\",\"30_19\"]],null,null,null,635821288],[null,null,null,[null,null,null,[\"29_5\",\"30_6\"]],null,null,null,636146137],[636570127,null,null,[1]],[null,null,null,[null,null,null,[\"1\",\"2\",\"4\",\"6\",\"7\",\"8\",\"9\",\"10\",\"11\",\"12\",\"13\",\"14\",\"15\",\"16\",\"17\",\"18\",\"19\",\"20\",\"21\",\"24\",\"29\",\"30\",\"34\"]],null,null,null,627094446],[null,652486359,null,[null,1]],[null,626062006,null,[null,670]],[null,666400580,null,[null,22]],[679043940,null,null,[1]],[655991266,null,null,[1]],[686111728,null,null,[1]],[683976695,null,null,[1]],[686102333,null,null,[1]],[null,618163195,null,[null,15000]],[null,624950166,null,[null,15000]],[null,623405755,null,[null,300]],[null,508040914,null,[null,500]],[null,547455356,null,[null,49]],[null,650548030,null,[null,2]],[null,650548032,null,[null,300]],[null,650548031,null,[null,1]],[null,655966487,null,[null,300]],[null,655966486,null,[null,250]],[null,469675170,null,[null,60000]],[null,684147713,null,[null,-1]],[null,684147711,null,[null,-1]],[null,684147712,null,[null,-1]],[678806782,null,null,[1]],[570863962,null,null,[1]],[null,null,570879859,[null,null,\"control_1\\\\.\\\\d\"]],[null,570863961,null,[null,50]],[570879858,null,null,[1]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[10017,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[10005,null,null,[1]],[10015,null,null,[1]],[555237685,null,null,[1]],[45460956,null,null,[]],[45414947,null,null,[1]],[null,472785970,null,[null,500]],[null,550718588,null,[null,250]],[null,624290870,null,[null,50]],[null,null,null,[null,null,null,[\"AlK2UR5SkAlj8jjdEc9p3F3xuFYlF6LYjAML3EOqw1g26eCwWPjdmecULvBH5MVPoqKYrOfPhYVL71xAXI1IBQoAAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"Amm8\/NmvvQfhwCib6I7ZsmUxiSCfOxWxHayJwyU1r3gRIItzr7bNQid6O8ZYaE1GSQTa69WwhPC9flq\/oYkRBwsAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3NTgwNjcxOTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"A9wSqI5i0iwGdf6L1CERNdmsTPgVu44ewj8QxTBYgsv1LCPUVF7YmWOvTappqB1139jAymxUW\/RO8zmMqo4zlAAAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A+d7vJfYtay4OUbdtRPZA3y7bKQLsxaMEPmxgfhBGqKXNrdkCQeJlUwqa6EBbSfjwFtJWTrWIioXeMW+y8bWAgQAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MzY4MTI4MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\"]],null,1934],[485990406,null,null,[]]],[[12,[[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,59],[40,[[95340252],[95340253,[[662101537,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71,null,null,null,800,null,null,null,null,null,5],[40,[[95340254],[95340255,[[662101539,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71,null,null,null,800,null,null,null,null,null,5]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]]]],[10,[[50,[[31067422],[31067423,[[null,1032,null,[]]]]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[31083552],[44776368]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[31084127],[31084128]]],[50,[[31087700],[31087701,[[680702595,null,null,[1]]]]]],[10,[[31088038],[31088039,[[675298507,null,null,[1]]]]]],[50,[[31088128],[31088129,[[682658313,null,null,[1]]]]]],[200,[[31088481],[31088482,[[688113706,null,null,[1]]]]]],[10,[[31088483],[31088484,[[null,684147713,null,[]],[null,684147711,null,[]],[null,684147712,null,[]]]],[31088485,[[null,684147713,null,[null,1]],[null,684147711,null,[null,1]],[null,684147712,null,[null,1]]]]]],[1000,[[31088550,[[null,null,14,[null,null,\"31088550\"]]],[6,null,null,null,6,null,\"31088550\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31088551,[[null,null,14,[null,null,\"31088551\"]]],[6,null,null,null,6,null,\"31088551\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[50,[[31088580],[31088581,[[687716473,null,null,[1]]]]]],[1000,[[31088607,[[null,null,14,[null,null,\"31088607\"]]],[6,null,null,null,6,null,\"31088607\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31088608,[[null,null,14,[null,null,\"31088608\"]]],[6,null,null,null,6,null,\"31088608\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31088653,[[null,null,14,[null,null,\"31088653\"]]],[6,null,null,null,6,null,\"31088653\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31088654,[[null,null,14,[null,null,\"31088654\"]]],[6,null,null,null,6,null,\"31088654\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1,[[31088669],[31088670,[[687747818,null,null,[1]]]]]],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[50,[[42531705],[42531706]]],[1,[[42532242],[42532243,[[1256,null,null,[1]],[290,null,null,[1]]]]]],[50,[[42532523],[42532524,[[1300,null,null,[]]]]]],[null,[[42532525],[42532526]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[1,[[44801778],[44801779,[[506914611,null,null,[1]]]]],[4,null,55]],[10,[[95330276],[95330278,[[null,1336,null,[null,1]]]],[95330279,[[null,1336,null,[null,0.8]]]],[95332928,[[null,1336,null,[null,0.5]]]]]],[50,[[95331832],[95331833,[[1342,null,null,[1]]]]]],[10,[[95332584],[95332585,[[null,1343,null,[null,600]]]],[95332586,[[null,1343,null,[null,900]]]],[95332587,[[null,1343,null,[null,1200]]]]]],[10,[[95332589],[95332590,[[1344,null,null,[1]]]]]],[10,[[95332923],[95332924,[[null,1338,null,[null,0.8]]]],[95332925,[[null,1339,null,[null,0.8]]]],[95332926,[[null,1340,null,[null,0.8]]]],[95332927,[[null,1340,null,[null,0.8]],[null,1338,null,[null,0.8]],[null,1339,null,[null,0.8]]]]]],[10,[[95333409],[95333410,[[null,1346,null,[null,-1]],[null,1347,null,[null,-1]]]],[95333411,[[null,1346,null,[null,3]],[null,1347,null,[null,1]]]],[95333412,[[null,1346,null,[null,8]],[null,1347,null,[null,5]]]]]],[399,[[95334516,[[null,null,null,[null,null,null,[\"95334518\"]],null,null,null,630330362]]],[95334517,[[626390500,null,null,[1]],[null,null,null,[null,null,null,[\"95334519\"]],null,null,null,630330362]]]],[2,[[4,null,55],[12,null,null,null,2,null,\"bjsvp14\\\\.space\/|bjsvp15\\\\.space\/|buzzfun\\\\.me\/|buzzsight\\\\.co\/|diggfun\\\\.co\/|games2kings\\\\.com\/|indiaimagine\\\\.com\/|postfunny\\\\.com\/|testname\\\\.me\/|yashbharat\\\\.com\/\"]]]],[45,[[95335245,[[null,null,null,[null,null,null,[\"95335250\"]],null,null,null,630330362]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95335246,[[626062008,null,null,[1]],[null,null,null,[null,null,null,[\"95335251\"]],null,null,null,630330362]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95335247,[[626062008,null,null,[1]],[626062007,null,null,[1]],[null,null,null,[null,null,null,[\"95335252\"]],null,null,null,630330362],[null,null,null,[null,null,null,[\"95335247\",\"95335252\"]],null,null,null,631402549]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95345106,[[626062008,null,null,[1]],[626062007,null,null,[1]],[null,null,null,[null,null,null,[\"95345107\"]],null,null,null,630330362],[null,null,null,[null,null,null,[\"95345106\",\"95345107\"]],null,null,null,631402549]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]]],[4,null,55],123],[1,[[95335248,[[null,null,null,[null,null,null,[\"95335253\"]],null,null,null,630330362]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95335249,[[626062008,null,null,[1]],[626062007,null,null,[1]],[null,null,null,[null,null,null,[\"95335254\"]],null,null,null,630330362],[null,null,null,[null,null,null,[\"95335249\",\"95335254\"]],null,null,null,631402549]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95344244,[[626062008,null,null,[1]],[626062007,null,null,[1]],[null,null,null,[null,null,null,[\"95344245\"]],null,null,null,630330362],[null,null,null,[null,null,null,[\"95344244\",\"95344245\"]],null,null,null,631402549]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95346174,[[626062008,null,null,[1]],[626062007,null,null,[1]],[null,null,null,[null,null,null,[\"95346175\"]],null,null,null,630330362],[null,null,null,[null,null,null,[\"95346174\",\"95346175\"]],null,null,null,631402549]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95346189,[[626062008,null,null,[1]],[626062007,null,null,[1]],[null,null,null,[null,null,null,[\"95346190\"]],null,null,null,630330362],[null,null,null,[null,null,null,[\"95346189\",\"95346190\"]],null,null,null,631402549]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95346271,[[626062008,null,null,[1]],[626062007,null,null,[1]],[null,null,null,[null,null,null,[\"95346272\"]],null,null,null,630330362],[null,null,null,[null,null,null,[\"95346271\",\"95346272\"]],null,null,null,631402549]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]],[95346277,[[626062008,null,null,[1]],[626062007,null,null,[1]],[null,null,null,[null,null,null,[\"95346278\"]],null,null,null,630330362],[null,null,null,[null,null,null,[\"95346277\",\"95346278\"]],null,null,null,631402549]],[1,[[12,null,null,null,2,null,\"about\\\\:srcdoc\"]]]]],[4,null,55],123],[10,[[95337195],[95337196,[[1354,null,null,[1]]]]],null,126],[10,[[95337197,null,[12,null,null,null,2,null,\".+\\\\.h5games.usercontent.goog.*\"]],[95337198,[[1354,null,null,[1]]],[12,null,null,null,2,null,\".+\\\\.h5games.usercontent.goog.*\"]]],null,126],[null,[[95341243],[95341244,[[45650867,null,null,[1]]]]],null,130,null,null,null,null,null,null,null,null,null,7],[100,[[95343681],[95343682,[[1372,null,null,[1]]]]]],[250,[[95344187,[[null,null,null,[null,null,null,[\"95344191\"]],null,null,null,630330362]]],[95344188,[[643258050,null,null,[1]],[null,null,null,[null,null,null,[\"95344192\"]],null,null,null,630330362]]],[95344189,[[null,643258048,null,[null,0.20295]],[null,643258049,null,[null,0.24446]],[643258050,null,null,[1]],[null,null,null,[null,null,null,[\"95344193\"]],null,null,null,630330362]]],[95344190,[[null,643258048,null,[null,0.3221]],[null,643258049,null,[null,0.33938]],[643258050,null,null,[1]],[null,null,null,[null,null,null,[\"95344194\"]],null,null,null,630330362]]]],[4,null,55]],[50,[[95344787,[[null,null,null,[null,null,null,[\"95344792\"]],null,null,null,630330362]]],[95344788,[[566279275,null,null,[1]],[622128248,null,null,[1]],[null,null,null,[null,null,null,[\"95344793\"]],null,null,null,630330362]]],[95344789,[[622128248,null,null,[1]],[566279276,null,null,[1]],[null,null,null,[null,null,null,[\"95344794\"]],null,null,null,630330362]]],[95344790,[[566279275,null,null,[1]],[566279276,null,null,[1]],[null,null,null,[null,null,null,[\"95344795\"]],null,null,null,630330362]]],[95344791,[[566279275,null,null,[1]],[622128248,null,null,[1]],[566279276,null,null,[1]],[null,null,null,[null,null,null,[\"95344796\"]],null,null,null,630330362]]]],[4,null,55]],[1,[[95345037],[95345038,[[1377,null,null,[1]]]]],[4,null,55]],[1,[[95346591,[[null,null,null,[null,null,null,[\"95346593\"]],null,null,null,630330362]]],[95346592,[[null,null,null,[null,null,null,[\"3\"]],null,null,null,683929765],[null,null,null,[null,null,null,[\"95346594\"]],null,null,null,630330362]]]],[4,null,55]],[1,[[95346759,[[null,null,null,[null,null,null,[\"95346761\"]],null,null,null,630330362]]],[95346760,[[null,null,null,[null,null,null,[\"4\"]],null,null,null,683929765],[null,null,null,[null,null,null,[\"95346762\"]],null,null,null,630330362]]]],[4,null,55]]]],[17,[[10,[[31084487],[31084488]],null,null,null,null,32,null,null,142,1],[null,[[31088457],[31088458]],null,null,null,null,39,null,null,189,1],[200,[[95345471,[[null,null,null,[null,null,null,[\"95345473\"]],null,null,null,630330362]]],[95345472,[[682250248,null,null,[1]],[null,null,null,[null,null,null,[\"95345474\"]],null,null,null,630330362]]]],[4,null,55],null,null,null,null,null,null,187],[500,[[95345788,[[null,null,null,[null,null,null,[\"95345790\"]],null,null,null,630330362]]],[95345789,[[686013513,null,null,[1]],[null,null,null,[null,null,null,[\"95345791\"]],null,null,null,630330362]]]],[4,null,55],null,null,null,null,null,null,183],[500,[[95345962,[[null,null,null,[null,null,null,[\"95345964\"]],null,null,null,630330362]]],[95345963,[[13775,null,null,[1]],[null,null,null,[null,null,null,[\"95345965\"]],null,null,null,630330362],[null,null,null,[null,null,null,[\"95345963\",\"95345965\"]],null,null,null,631402549]]]],[4,null,55],null,null,null,null,null,null,185],[100,[[95345966,[[null,null,null,[null,null,null,[\"95345968\"]],null,null,null,630330362]]],[95345967,[[686891043,null,null,[1]],[null,null,null,[null,null,null,[\"95345969\"]],null,null,null,630330362]]]],[4,null,55],null,null,null,null,null,null,186],[10,[[95346211,[[null,null,null,[null,null,null,[\"95346215\"]],null,null,null,630330362]]],[95346212,[[null,652486359,null,[null,2]],[null,687270738,null,[null,200]],[null,null,null,[null,null,null,[\"95346216\"]],null,null,null,630330362]]],[95346213,[[null,652486359,null,[null,2]],[null,687270738,null,[null,500]],[null,null,null,[null,null,null,[\"95346217\"]],null,null,null,630330362]]],[95346214,[[null,652486359,null,[null,3]],[null,687270738,null,[null,500]],[null,null,null,[null,null,null,[\"95346218\"]],null,null,null,630330362]]]],[4,null,55],null,null,null,null,null,null,188,1]]],[11,[[1000,[[31087702,null,[4,null,6,null,null,null,null,[\"31087700\"]]]],[4,null,61],132,null,null,null,null,null,null,null,null,29],[1000,[[31087703,null,[4,null,6,null,null,null,null,[\"31087701\"]]]],[4,null,61],132,null,null,null,null,null,null,null,null,29],[50,[[31088249],[31088250]],null,122,null,null,null,null,null,null,null,null,null,4]]]],null,null,[null,1000,1,1000]],null,[null,[null,[null,[null,null,[[[null,0,null,null,null,null,\"DIV#content\\u003eDIV.post\\u003eDIV.postContent\\u003eDIV.postEntry\\u003eP\"],[]],[[null,0,null,null,null,null,\"DIV.morePosts\\u003eUL.simpleArchive\\u003eLI.post.type-post.status-publish.format-standard.hentry.category-coding-projects\"],[null,null,null,null,null,null,\"P\"],null,[null,null,null,null,null,null,\"H4,P\"]],[[null,1,null,null,null,null,\"DIV#content\\u003eDIV.post\\u003eDIV.postContent\\u003eDIV.postEntry\\u003eUL\\u003eLI\"],[]],[[null,null,null,null,null,null,\"DIV.morePosts\\u003eUL.simpleArchive\\u003eLI.post.type-post.status-publish.format-standard.hentry.category-coding-projects.category-uncategorized\"],[null,null,null,null,null,null,\"P\"],null,[null,null,null,null,null,null,\"H4,P\"]],[[null,0,null,null,null,null,\"DIV#content\\u003eDIV.post\\u003eDIV.postContent\\u003eDIV.postEntry\\u003eP\"],[],null,[null,null,null,null,null,null,\"IMG.alignleft\"]],[[null,1,null,null,null,null,\"DIV.morePosts\\u003eUL.simpleArchive\\u003eLI.post.type-post.status-publish.format-standard.hentry.category-coding-projects\"],[null,null,null,null,null,null,\"P\"],null,[null,null,null,null,null,null,\"H4,P\"]],[[null,null,null,null,null,null,\"DIV.postEntry\\u003eUL\"],[null,null,null,null,null,null,\"LI\"],null,[null,null,null,null,null,null,\"LI\"]],[[null,0,null,null,null,null,\"DIV#content\\u003eDIV.post\\u003eDIV.postContent\\u003eDIV.postEntry\\u003eUL\\u003eLI\"],[]],[[null,null,null,null,null,null,\"DIV.postEntry\"],[null,null,null,null,null,null,\"P\"],null,[null,null,null,null,null,null,\"H1,H3,LI,P\"]],[[null,2,null,null,null,null,\"DIV.morePosts\\u003eUL.simpleArchive\\u003eLI.post.type-post.status-publish.format-standard.hentry.category-coding-projects\"],[null,null,null,null,null,null,\"P\"],null,[null,null,null,null,null,null,\"H4,P\"]],[[null,2,null,null,null,null,\"DIV.postEntry\\u003eP\"],[]],[[null,1,null,null,null,null,\"DIV#content\\u003eDIV.post\\u003eDIV.postContent\\u003eDIV.postEntry\"],[null,null,null,null,null,null,\"P\"],null,[null,null,null,null,null,null,\"IMG,P\"]]]],[null,null,[1,2,7]]]],null,\"ca-pub-9548693535113558\",1],null,null,\"easycoding.tn\",413681044,[44759875,44759926],null,null,null,null,null,null,[0,0,0]]");