(function() {
    var p, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ca = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        da = ca(this),
        q = function(a, b) {
            if (b) a: {
                var c = da;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        },
        r = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if ("number" == typeof a.length) return {
                next: aa(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        ea = function(a) {
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            return c
        },
        fa = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ha;
    if ("function" == typeof Object.setPrototypeOf) ha = Object.setPrototypeOf;
    else {
        var ia;
        a: {
            var ja = {
                    a: !0
                },
                ka = {};
            try {
                ka.__proto__ = ja;
                ia = ka.a;
                break a
            } catch (a) {}
            ia = !1
        }
        ha = ia ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var la = ha,
        t = function(a, b) {
            a.prototype = fa(b.prototype);
            a.prototype.constructor = a;
            if (la) la(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Qa = b.prototype
        },
        ma = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
            return b
        },
        u = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        };
    q("WeakMap", function(a) {
        function b() {
            if (!a || !Object.seal) return !1;
            try {
                var k = Object.seal({}),
                    m = Object.seal({}),
                    n = new a([
                        [k, 2],
                        [m, 3]
                    ]);
                if (2 != n.get(k) || 3 != n.get(m)) return !1;
                n.delete(k);
                n.set(m, 4);
                return !n.has(k) && 4 == n.get(m)
            } catch (H) {
                return !1
            }
        }

        function c() {}

        function d(k) {
            var m = typeof k;
            return "object" === m && null !== k || "function" === m
        }

        function e(k) {
            if (!u(k, g)) {
                var m = new c;
                ba(k, g, {
                    value: m
                })
            }
        }

        function f(k) {
            var m = Object[k];
            m && (Object[k] = function(n) {
                if (n instanceof c) return n;
                Object.isExtensible(n) && e(n);
                return m(n)
            })
        }
        if (b()) return a;
        var g = "$jscomp_hidden_" + Math.random();
        f("freeze");
        f("preventExtensions");
        f("seal");
        var h = 0,
            l = function(k) {
                this.H = (h += Math.random() + 1).toString();
                if (k) {
                    k = r(k);
                    for (var m; !(m = k.next()).done;) m = m.value, this.set(m[0], m[1])
                }
            };
        l.prototype.set = function(k, m) {
            if (!d(k)) throw Error("Invalid WeakMap key");
            e(k);
            if (!u(k, g)) throw Error("WeakMap key fail: " + k);
            k[g][this.H] = m;
            return this
        };
        l.prototype.get = function(k) {
            return d(k) && u(k, g) ? k[g][this.H] : void 0
        };
        l.prototype.has = function(k) {
            return d(k) && u(k,
                g) && u(k[g], this.H)
        };
        l.prototype.delete = function(k) {
            return d(k) && u(k, g) && u(k[g], this.H) ? delete k[g][this.H] : !1
        };
        return l
    });
    q("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    });
    q("Number.isFinite", function(a) {
        return a ? a : a = function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    });
    q("Number.isInteger", function(a) {
        return a ? a : a = function(b) {
            return Number.isFinite(b) ? b === Math.floor(b) : !1
        }
    });
    q("Number.isSafeInteger", function(a) {
        return a ? a : a = function(b) {
            return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER
        }
    });
    q("Math.trunc", function(a) {
        return a ? a : a = function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    });
    q("Object.is", function(a) {
        return a ? a : a = function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    q("Array.prototype.includes", function(a) {
        return a ? a : a = function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    q("String.prototype.includes", function(a) {
        return a ? a : a = function(b, c) {
            if (null == this) throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
            var d = this + "";
            return -1 !== d.indexOf(b, c || 0)
        }
    });
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var v = this || self,
        na = function(a) {
            var b = typeof a;
            b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        oa = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        ra = function(a) {
            return Object.prototype.hasOwnProperty.call(a, pa) && a[pa] || (a[pa] = ++qa)
        },
        pa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        qa = 0,
        sa = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        ta = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments,
                    2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        w = function(a, b, c) {
            w = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? sa : ta;
            return w.apply(null, arguments)
        },
        ua = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var d = c.slice();
                d.push.apply(d, arguments);
                return a.apply(this, d)
            }
        },
        va = function(a) {
            return a
        };
    var wa;

    function xa(a) {
        v.setTimeout(function() {
            throw a;
        }, 0)
    };
    var ya = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    };
    var za, x;
    a: {
        for (var Aa, Ba = ["CLOSURE_FLAGS"], y = Aa || v, Ca = 0; Ca < Ba.length; Ca++)
            if (y = y[Ba[Ca]], null == y) {
                x = null;
                break a
            }
        x = y
    }
    var Da = x && x[610401301],
        Ea = za = null != Da ? Da : !1;
    var Fa = !1;
    var Ga = null,
        Ha, Ia = v.navigator;
    Ha = Ia ? Ia.userAgentData || null : null;

    function Ja(a) {
        if (!Ea && !Fa) return !1;
        var b = Ha;
        return b ? b.brands.some(function(c) {
            return (c = c.brand) && -1 != c.indexOf(a)
        }) : !1
    }

    function z(a) {
        var b;
        if (null == Ga) a: {
            if (b = v.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        else b = Ga;
        return -1 != b.indexOf(a)
    };

    function A() {
        var a = void 0 === a ? !1 : a;
        if (!a && !Ea && !Fa) return !1;
        a = Ha;
        return !!a && 0 < a.brands.length
    }

    function Ka() {
        return A() ? Ja("Chromium") : (z("Chrome") || z("CriOS")) && !(A() ? 0 : z("Edge")) || z("Silk")
    };
    var La = Array.prototype.indexOf ? function(a, b) {
            var c;
            return Array.prototype.indexOf.call(a, b, c)
        } : function(a, b) {
            var c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, c);
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Ma = Array.prototype.forEach ? function(a, b) {
            var c;
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b) {
            for (var c, d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Na = Array.prototype.some ?
        function(a, b) {
            var c;
            return Array.prototype.some.call(a, b, c)
        } : function(a, b) {
            for (var c, d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return !0;
            return !1
        };

    function Oa(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    var Pa = A() ? !1 : z("Trident") || z("MSIE");
    !z("Android") || Ka();
    Ka();
    z("Safari") && (Ka() || (A() ? 0 : z("Coast")) || (A() ? 0 : z("Opera")) || (A() ? 0 : z("Edge")) || (A() ? Ja("Microsoft Edge") : z("Edg/")) || A() && Ja("Opera"));
    var Qa = {},
        B = null;
    var Ra = "undefined" !== typeof Uint8Array,
        Sa = !Pa && "function" === typeof btoa;

    function Ta() {
        return "function" === typeof BigInt
    }
    var C = !0,
        Ua = !0,
        Va = 2;
    var D = 0,
        E = 0;

    function Wa(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        b && (c = r(Xa(c, a)), b = c.next().value, a = c = c.next().value, c = b);
        D = c >>> 0;
        E = a >>> 0
    }

    function Ya(a, b) {
        b >>>= 0;
        a >>>= 0;
        if (2097151 >= b) var c = "" + (4294967296 * b + a);
        else Ta() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = a & 16777215, a = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, c = c + 6777216 * a + 6710656 * b, a += 8147497 * b, b *= 2, 1E7 <= c && (a += Math.floor(c / 1E7), c %= 1E7), 1E7 <= a && (b += Math.floor(a / 1E7), a %= 1E7), c = b + Za(a) + Za(c));
        return c
    }

    function Za(a) {
        a = String(a);
        return "0000000".slice(a.length) + a
    }

    function $a() {
        var a = D,
            b = E,
            c = b & 2147483648;
        c ? Ta() ? b = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (a = r(Xa(a, b)), b = a.next().value, c = a.next().value, a = b, b = c, b = "-" + Ya(a, b)) : b = Ya(a, b);
        return b
    }

    function Xa(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };
    var ab, bb, F = ab = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : bb;
    var cb = F ? function(a, b) {
            a[F] |= b
        } : function(a, b) {
            var c = a;
            void 0 !== c.j ? c.j |= b : Object.defineProperties(a, {
                j: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        },
        G = F ? function(a) {
            return a[F] | 0
        } : function(a) {
            return a.j | 0
        },
        I = F ? function(a) {
            return a = a[F]
        } : function(a) {
            return a = a.j
        },
        J = F ? function(a, b) {
            a[F] = b;
            return a
        } : function(a, b) {
            var c = a;
            void 0 !== c.j ? c.j = b : Object.defineProperties(a, {
                j: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            });
            return a
        };

    function db(a, b) {
        J(b, (a | 0) & -14591)
    }

    function eb(a, b) {
        J(b, (a | 34) & -14557)
    }

    function fb(a) {
        a = a >> 14 & 1023;
        return 0 === a ? 536870912 : a
    };
    var gb = {};

    function hb(a) {
        return a = a.Aa === gb
    }
    var ib = {};

    function jb(a) {
        return a = !(!a || "object" !== typeof a || a.Oa !== ib)
    }

    function kb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var lb;

    function K(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        var d = G(a);
        if (d & 1) return !0;
        c = !!b && (Array.isArray(b) ? b.includes(c) : b.has(c));
        if (!c) return !1;
        J(a, d | 1);
        return !0
    }
    var mb;

    function nb(a, b) {
        (b = mb ? b[mb] : void 0) && (a[mb] = Array.prototype.slice.call(b))
    }
    var ob = function() {},
        pb = function() {},
        qb = Object.freeze(new ob);
    Object.freeze(new pb);
    var rb = function(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    var sb;

    function tb(a) {
        if (sb) try {
            sb(a)
        } catch (b) {
            throw b.cause = a, b;
        }
    }

    function ub() {
        var a = vb();
        sb ? v.setTimeout(function() {
            tb(a)
        }, 0) : xa(a)
    }

    function wb(a) {
        a = Error(a);
        rb(a, "warning");
        tb(a);
        return a
    }

    function vb() {
        var a = Error();
        rb(a, "incident");
        return a
    };
    var xb = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function yb(a) {
        if (null == a) var b = a;
        else if ((b = !!b) || C) {
            var c = a;
            if (b || C) {
                var d = typeof c;
                c = "number" === d ? Number.isFinite(c) : "string" !== d ? !1 : xb.test(c)
            } else c = "number" === typeof c && Number.isFinite(c) || !!c && "string" === typeof c && isFinite(c);
            if (!c) throw wb("int64");
            if ("string" === typeof a)
                if (c = Math.trunc(Number(a)), Number.isSafeInteger(c)) b = String(c);
                else if (c = a.indexOf("."), -1 !== c && (a = a.substring(0, c)), b || C)
                if (zb(a)) b = a;
                else {
                    b = a;
                    if (16 > b.length) Wa(Number(b));
                    else if (Ta()) b = BigInt(b), D = Number(b & BigInt(4294967295)) >>>
                        0, E = Number(b >> BigInt(32) & BigInt(4294967295));
                    else {
                        a = +("-" === b[0]);
                        E = D = 0;
                        c = b.length;
                        var e = 0 + a;
                        for (d = (c - a) % 6 + a; d <= c; e = d, d += 6) e = Number(b.slice(e, d)), E *= 1E6, D = 1E6 * D + e, 4294967296 <= D && (E += Math.trunc(D / 4294967296), E >>>= 0, D >>>= 0);
                        a && (a = r(Xa(D, E)), b = a.next().value, a = a.next().value, D = b, E = a)
                    }
                    b = $a()
                }
            else b = a;
            else if (b) a = Math.trunc(a), !b && !C || Number.isSafeInteger(a) ? b = String(a) : (b = String(a), zb(b) || (Wa(a), b = $a()));
            else if (b = a, b = Math.trunc(b), C && !Number.isSafeInteger(b)) {
                Wa(b);
                a = D;
                c = E;
                if (b = c & 2147483648) a = ~a + 1 >>>
                    0, c = ~c >>> 0, 0 == a && (c = c + 1 >>> 0);
                a = 4294967296 * c + (a >>> 0);
                b = b ? -a : a
            }
        } else b = a;
        return b
    }

    function zb(a) {
        return "-" === a[0] ? 20 > a.length ? !0 : 20 === a.length && -922337 < Number(a.substring(0, 7)) : 19 > a.length ? !0 : 19 === a.length && 922337 > Number(a.substring(0, 6))
    }

    function Ab(a) {
        if (Ua && null != a && "string" !== typeof a) throw Error();
        return a
    };
    var L;

    function Bb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (K(a, void 0, 0)) return
                    } else if (Ra && null != a && a instanceof Uint8Array) {
                    if (Sa) {
                        for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                        a = btoa(b)
                    } else {
                        void 0 === b && (b = 0);
                        if (!B) {
                            B = {};
                            c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
                            d = ["+/=",
                                "+/", "-_=", "-_.", "-_"
                            ];
                            for (var e = 0; 5 > e; e++) {
                                var f = c.concat(d[e].split(""));
                                Qa[e] = f;
                                for (var g = 0; g < f.length; g++) {
                                    var h = f[g],
                                        l = B[h];
                                    void 0 === l && (B[h] = g)
                                }
                            }
                        }
                        e = Qa[b];
                        b = Array(Math.floor(a.length / 3));
                        c = e[64] || "";
                        for (d = f = 0; f < a.length - 2; f += 3) {
                            l = a[f];
                            var k = a[f + 1];
                            h = a[f + 2];
                            g = e[l >> 2];
                            l = e[(l & 3) << 4 | k >> 4];
                            k = e[(k & 15) << 2 | h >> 6];
                            h = e[h & 63];
                            b[d++] = "" + g + l + k + h
                        }
                        h = 0;
                        g = c;
                        switch (a.length - f) {
                            case 2:
                                h = a[f + 1], g = e[(h & 15) << 2] || c;
                            case 1:
                                f = a[f], a = e[f >> 2], e = e[(f & 3) << 4 | h >> 4], b[d] = "" + a + e + g + c
                        }
                        a = b.join("")
                    }
                    return a
                }
        }
        return a
    };

    function Cb(a, b, c) {
        var d = Array.prototype.slice.call(a),
            e = d.length,
            f = b & 256 ? d[e - 1] : void 0;
        e += f ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < e; b++) d[b] = c(d[b]);
        if (f) {
            b = d[b] = {};
            for (var g in f) b[g] = c(f[g])
        }
        nb(d, a);
        return d
    }

    function Db(a, b, c, d, e) {
        if (null != a) {
            if (Array.isArray(a)) var f = K(a, void 0, 0) ? void 0 : e && G(a) & 2 ? a : Eb(a, b, c, void 0 !== d, e);
            else if (kb(a)) {
                var g = {};
                for (f in a) g[f] = Db(a[f], b, c, d, e);
                f = g
            } else f = b(a, d);
            return f
        }
    }

    function Eb(a, b, c, d, e) {
        var f = d || c ? G(a) : 0;
        d = d ? !!(f & 32) : void 0;
        for (var g = Array.prototype.slice.call(a), h = 0; h < g.length; h++) g[h] = Db(g[h], b, c, d, e);
        c && (nb(g, a), c(f, g));
        return g
    }

    function Fb(a) {
        return hb(a) ? a.toJSON() : Bb(a)
    };

    function Gb(a, b, c) {
        c = void 0 === c ? eb : c;
        if (null != a) {
            if (Ra && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = G(a);
                if (d & 2) return a;
                if (b) {
                    b = 0 === d;
                    var e = !!(d & 32),
                        f = !!(d & 64) || !(d & 16);
                    b = b || e && !f
                }
                return b ? J(a, (d | 34) & -12293) : Eb(a, Gb, d & 4 ? eb : c, !0, !0)
            }
            hb(a) && (c = a.g, d = I(c), a = d & 2 ? a : Hb(a, c, d, !0));
            return a
        }
    }

    function Hb(a, b, c, d) {
        a = a.constructor;
        L = b = Ib(b, c, d);
        b = new a(b);
        L = void 0;
        return b
    }

    function Ib(a, b, c) {
        var d = c || b & 2 ? eb : db,
            e = !!(b & 32);
        a = Cb(a, b, function(f) {
            return Gb(f, e, d)
        });
        cb(a, 32 | (c ? 2 : 0));
        return a
    };
    var Jb = function(a, b, c, d) {
        if (-1 === c) return null;
        var e = fb(b);
        if (c >= e) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            e = a.length;
            if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
            b = c + (+!!(b & 512) - 1);
            if (b < e) return a[b]
        }
    };

    function Kb(a, b, c, d, e) {
        var f = fb(b);
        if (c >= f || e) {
            var g = b;
            if (b & 256) e = a[a.length - 1];
            else {
                if (null == d) return;
                e = a[f + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            e[c] = d;
            c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
            g !== b && J(a, g)
        } else a[c + (+!!(b & 512) - 1)] = d, b & 256 && (a = a[a.length - 1], c in a && delete a[c])
    }

    function M(a, b, c, d) {
        var e = a;
        e = e.g;
        var f = I(e);
        if (f & 2) throw Error();
        d = "0" === d ? 0 === Number(c) : c === d;
        Kb(e, f, b, d ? void 0 : c);
        return a
    }

    function Lb(a, b, c, d) {
        a = a.g;
        var e = I(a),
            f = Jb(a, e, c, d);
        var g = f;
        var h = e;
        if (null == g || "object" !== typeof g || !hb(g))
            if (Array.isArray(g)) {
                var l = G(g),
                    k = l;
                0 === k && (k |= h & 32);
                k |= h & 2;
                k !== l && J(g, k);
                g = new b(g)
            } else g = void 0;
        (f = g !== f && null != g) && Kb(a, e, c, g, d);
        return g
    }
    var Mb = function(a, b, c) {
        var d;
        null == c && (c = void 0);
        var e = a.g,
            f = I(e);
        if (f & 2) throw Error();
        Kb(e, f, b, c, d);
        return a
    };
    var Nb = !1;
    if (Nb && "undefined" !== typeof Proxy) {
        var N = Ob;
        new Proxy({}, {
            getPrototypeOf: N,
            setPrototypeOf: N,
            isExtensible: N,
            preventExtensions: N,
            getOwnPropertyDescriptor: N,
            defineProperty: N,
            has: N,
            get: N,
            set: N,
            deleteProperty: N,
            apply: N,
            construct: N
        })
    }

    function Ob() {
        throw Error();
    };
    var Pb = function(a, b, c) {
        a: {
            var d = c;null == a && (a = L);L = void 0;
            if (null == a) c = 96,
            d ? (a = [d], c |= 512) : a = [],
            b && (c = c & -16760833 | (b & 1023) << 14);
            else {
                if (!Array.isArray(a)) throw Error();
                c = G(a);
                if (c & 64) break a;
                c |= 64;
                if (d && (c |= 512, d !== a[0])) throw Error();
                b: {
                    var e = a;
                    if (d = e.length) {
                        var f = d - 1;
                        e = e[f];
                        if (kb(e)) {
                            c |= 256;
                            b = +!!(c & 512) - 1;
                            b = f - b;
                            if (1024 <= b) throw Error();
                            c = c & -16760833 | (b & 1023) << 14;
                            break b
                        }
                    }
                    if (b) {
                        f = +!!(c & 512) - 1;
                        b = Math.max(b, d - f);
                        if (1024 < b) throw Error();
                        c = c & -16760833 | (b & 1023) << 14
                    }
                }
            }
            J(a, c)
        }
        this.g = a
    };
    p = Pb.prototype;
    p.toJSON = function() {
        if (lb) return Qb(this, this.g, !1);
        var a = Qb(this, Eb(this.g, Fb, void 0, void 0, !1), !0);
        return a
    };
    p.getExtension = function(a) {
        var b = this;
        b = a.A ? a.ya ? a.G(b, a.A, a.C, void 0 !== qb ? 1 : 2, !0) : a.G(b, a.A, a.C, !0) : a.ya ? a.G(b, a.C, void 0 !== qb ? 1 : 2, !0) : a.G(b, a.C, a.defaultValue, !0);
        return a.Na && null == b ? a.defaultValue : b
    };
    p.hasExtension = function(a) {
        if (a.A) {
            var b = !0;
            b = void 0 === b ? !1 : b;
            a = void 0 !== Lb(this, a.A, a.C, b)
        } else b = this, a = a.A ? a.G(b, a.A, a.C, !0) : a.G(b, a.C, null, !0), a = null === a ? void 0 : a, a = void 0 !== a;
        return a
    };
    p.clone = function() {
        var a = this,
            b = a.g;
        return a = Hb(a, b, I(b), !1)
    };
    p.Aa = gb;
    p.toString = function() {
        return Qb(this, this.g, !1).toString()
    };

    function Qb(a, b, c) {
        var d = a.constructor.Ka,
            e = I(c ? a.g : b);
        a = b.length;
        if (!a) return b;
        var f;
        if (kb(c = b[a - 1])) {
            a: {
                var g = c;
                var h = {},
                    l = !1,
                    k;
                for (k in g) {
                    var m = g[k];
                    if (Array.isArray(m)) {
                        var n = m;
                        if (K(m, d, +k) || jb(m) && 0 === m.size) m = null;
                        m != n && (l = !0)
                    }
                    null != m ? h[k] = m : l = !0
                }
                if (l) {
                    for (var H in h) {
                        g = h;
                        break a
                    }
                    g = null
                }
            }
            g != c && (f = !0);a--
        }
        for (k = +!!(e & 512) - 1; 0 < a; a--) {
            H = a - 1;
            c = b[H];
            H -= k;
            if (!(null == c || K(c, d, H) || jb(c) && 0 === c.size)) break;
            var Yc = !0
        }
        if (!f && !Yc) return b;
        b = Array.prototype.slice.call(b, 0, a);
        g && b.push(g);
        return b
    };
    var O = Pb;
    var Rb = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var Sb = Rb(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            v.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });

    function Tb(a) {
        return a ? a.passive && Sb() ? a : a.capture || !1 : !1
    }
    var Ub = function(a, b, c) {
            var d;
            a.addEventListener && a.addEventListener(b, c, Tb(d))
        },
        Vb = function(a, b, c) {
            var d;
            a.removeEventListener && a.removeEventListener(b, c, Tb(d))
        };
    try {
        (new self.OffscreenCanvas(0, 0)).getContext("2d")
    } catch (a) {};

    function Wb(a, b) {
        var c, d;
        for (d in a) b.call(c, a[d], d, a)
    }

    function Xb(a, b) {
        var c, d = {},
            e;
        for (e in a) b.call(c, a[e], e, a) && (d[e] = a[e]);
        return d
    }

    function Yb(a, b) {
        var c, d;
        for (d in a)
            if (b.call(c, a[d], d, a)) return d
    };
    var Zb, $b = function() {
        if (void 0 === Zb) {
            var a = null,
                b = v.trustedTypes;
            if (b && b.createPolicy) try {
                a = b.createPolicy("goog#html", {
                    createHTML: va,
                    createScript: va,
                    createScriptURL: va
                })
            } catch (c) {
                v.console && v.console.error(c.message)
            }
            Zb = a
        }
        return Zb
    };
    var ac = function(a) {
        this.ka = a
    };
    ac.prototype.toString = function() {
        return this.ka + ""
    };
    var bc = {};
    var cc = function(a) {
        this.Ga = a
    };
    cc.prototype.toString = function() {
        return this.Ga.toString()
    };
    new cc("about:invalid#zClosurez");
    new cc("about:blank");
    var dc = function() {
        this.Fa = ""
    };
    dc.prototype.toString = function() {
        return this.Fa.toString()
    };
    new dc;
    var ec = function() {
        this.Ea = ""
    };
    ec.prototype.toString = function() {
        return this.Ea.toString()
    };
    new ec;
    var fc = {},
        P = function(a) {
            this.ja = a
        };
    P.prototype.toString = function() {
        return this.ja.toString()
    };
    var gc = function(a) {
        var b = $b();
        a = b ? b.createHTML(a) : a;
        return new P(a, fc)
    };
    new P(v.trustedTypes && v.trustedTypes.emptyHTML || "", fc);
    var hc = function(a, b, c) {
            function d(h) {
                h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
            }
            for (var e = 1; e < c.length; e++) {
                var f = c[e];
                if (!na(f) || oa(f) && 0 < f.nodeType) d(f);
                else {
                    a: {
                        if (f && "number" == typeof f.length) {
                            if (oa(f)) {
                                var g = "function" == typeof f.item || "string" == typeof f.item;
                                break a
                            }
                            if ("function" === typeof f) {
                                g = "function" == typeof f.item;
                                break a
                            }
                        }
                        g = !1
                    }
                    Ma(g ? Oa(f) : f, d)
                }
            }
        },
        ic = function(a, b) {
            b = String(b);
            "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
            return a.createElement(b)
        },
        jc = function(a) {
            if (1 !=
                a.nodeType) return !1;
            switch (a.tagName) {
                case "APPLET":
                case "AREA":
                case "BASE":
                case "BR":
                case "COL":
                case "COMMAND":
                case "EMBED":
                case "FRAME":
                case "HR":
                case "IMG":
                case "INPUT":
                case "IFRAME":
                case "ISINDEX":
                case "KEYGEN":
                case "LINK":
                case "NOFRAMES":
                case "NOSCRIPT":
                case "META":
                case "OBJECT":
                case "PARAM":
                case "SCRIPT":
                case "SOURCE":
                case "STYLE":
                case "TRACK":
                case "WBR":
                    return !1
            }
            return !0
        },
        kc = function(a, b) {
            a.appendChild(b)
        },
        lc = function(a, b) {
            hc(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments)
        },
        mc = function(a) {
            return a &&
                a.parentNode ? a.parentNode.removeChild(a) : null
        },
        nc = function(a, b) {
            if (!a || !b) return !1;
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        },
        oc = function(a) {
            this.U = a || v.document || document
        };
    p = oc.prototype;
    p.getElementsByTagName = function(a, b) {
        b = b || this.U;
        return b.getElementsByTagName(String(a))
    };
    p.createElement = function(a) {
        return ic(this.U, a)
    };
    p.createTextNode = function(a) {
        return this.U.createTextNode(String(a))
    };
    p.appendChild = kc;
    p.append = lc;
    p.canHaveChildren = jc;
    p.removeNode = mc;
    p.contains = nc;
    var pc = function(a, b, c, d) {
            var e = "";
            a && (e += a + ":");
            c && (e += "//", b && (e += b + "@"), e += c, d && (e += ":" + d));
            return e
        },
        qc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        rc = null,
        sc = function(a) {
            var b = a.match(qc);
            rc && 0 <= ["http", "https", "ws", "wss", "ftp"].indexOf(b[1]) && rc(a);
            return b
        },
        tc = function(a) {
            return a ? decodeURI(a) : a
        };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function uc(a, b) {
        var c;
        a.src = b instanceof ac && b.constructor === ac ? b.ka : "type_error:TrustedResourceUrl";
        var d;
        if (null == (d = c) || !d.Pa) {
            b = a.ownerDocument && a.ownerDocument.defaultView;
            var e;
            b = (b || window).document;
            var f;
            (e = (b = null == (f = (e = b).querySelector) ? void 0 : f.call(e, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", e)
        }
    };
    var vc = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        },
        wc = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };
    var yc = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? !1 : d;
        var e = void 0 === e ? !1 : e;
        xc(a, b, c, d, e)
    };

    function xc(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        a.google_image_requests || (a.google_image_requests = []);
        var f = wc("IMG", a.document);
        if (c || d) {
            var g = function(h) {
                c && c(h);
                if (d) {
                    h = a.google_image_requests;
                    var l = La(h, f);
                    0 <= l && Array.prototype.splice.call(h, l, 1)
                }
                Vb(f, "load", g);
                Vb(f, "error", g)
            };
            Ub(f, "load", g);
            Ub(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }

    function zc(a) {
        var b = v;
        var c = void 0 === c ? !1 : c;
        var d;
        if (d = b.navigator) d = b.navigator.userAgent, d = /Chrome/.test(d) && !/Edge/.test(d) ? !0 : !1;
        d && b.navigator.sendBeacon ? b.navigator.sendBeacon(a) : yc(b, a, void 0, c)
    };
    var Ac = ["googleads.g.doubleclick.net", "adclick.g.doubleclick.net", "www.googleadservices.com", "adclick.googleadservices.com"];

    function Bc(a) {
        a = null === a ? "null" : void 0 === a ? "undefined" : a;
        var b = $b();
        a = b ? b.createScriptURL(a) : a;
        return a = new ac(a, bc)
    };
    var Cc = function(a, b) {
        var c;
        var d = void 0 === d ? document : d;
        var e = (d ? new oc(9 == d.nodeType ? d : d.ownerDocument || d.document) : wa || (wa = new oc)).createElement("SCRIPT");
        e.type = "text/javascript";
        b && (void 0 !== e.onreadystatechange ? e.onreadystatechange = function() {
            if ("complete" == e.readyState || "loaded" == e.readyState) try {
                b && b()
            } catch (g) {}
        } : e.onload = b);
        c && (e.id = c);
        uc(e, Bc(a));
        var f = d.getElementsByTagName("head")[0];
        if (f) try {
            v.setTimeout(function() {
                f.appendChild(e)
            }, 0)
        } catch (g) {}
    };
    var Dc = function(a, b) {
            var c = this;
            this.sa = b;
            this.ca = null;
            this.I = "";
            this.h = "1";
            Cc(a, function() {
                c.h = null;
                if (window.botguard)
                    if (window.botguard.bg) try {
                        c.ca = new window.botguard.bg(c.sa)
                    } catch (d) {
                        c.h = "5"
                    } else c.h = "3";
                    else c.h = "2"
            })
        },
        Ec = function(a) {
            if (a.h) return "";
            if (!a.ca.invoke) return a.h = "4", "";
            try {
                var b = a.ca.invoke()
            } catch (c) {
                return a.h = "6", ""
            }
            return b && b.length ? b : (a.h = "6", "")
        };
    Dc.prototype.getError = function() {
        return this.h ? this.h : this.I.length ? 3 > this.I.length ? "7" : 2550 < this.I.length ? "8" : null : null
    };
    var Fc = window;
    var Q = function(a, b) {
            this.Ma = a;
            this.S = b;
            this.D = {};
            this.M = !1
        },
        Ic = function(a) {
            a.M = !0;
            for (var b in a.D) a.D[b].X && Gc(a, b), Hc(a, b)
        },
        Jc = function(a, b) {
            var c = b.n;
            switch (b.t) {
                case 1:
                    b = b.d;
                    c = R(a, c);
                    c.X(b);
                    break;
                case 2:
                    b = a, a = R(b, c), a.Y = !0, Hc(b, c)
            }
        },
        R = function(a, b) {
            a.D[b] || (a.D[b] = {
                Y: !1,
                O: [],
                X: null
            });
            return a.D[b]
        },
        Hc = function(a, b) {
            var c = R(a, b);
            if (c.Y) {
                for (var d = c.O.length, e = 0; e < d; e++) a.sendMessage(b, c.O[e]);
                c.O = []
            }
        },
        Gc = function(a, b) {
            if (a.M) {
                var c = {};
                b = (c.t = 2, c.s = a.S, c.n = b, c);
                a.send(b)
            }
        };
    Q.prototype.registerApplicationHandler = function(a, b) {
        var c = R(this, a);
        c.X = b;
        Gc(this, a)
    };
    Q.prototype.sendMessage = function(a, b) {
        var c = R(this, a);
        this.M && c.Y ? (c = {}, a = (c.t = 1, c.s = this.S, c.n = a, c.d = b, c), this.send(a)) : c.O.push(b)
    };
    Q.prototype.isInitialized = function() {
        return this.M
    };

    function Kc(a) {
        var b = a;
        if (b.changedTouches && 0 < b.changedTouches.length) {
            var c = b.changedTouches[0].clientX;
            a = b.changedTouches[0].clientY
        } else c = a.clientX, a = a.clientY;
        return {
            x: Math.round(c),
            y: Math.round(a)
        }
    }
    var T = function(a) {
            var b = S,
                c = "ExitApi.exit();" == document.body.getAttribute("onClick") || "Enabler.exit('ad');" == document.body.getAttribute("onClick");
            c = void 0 === c ? !1 : c;
            this.v = b;
            this.ha = Fc.parent;
            this.J = a;
            this.V = c;
            this.da = [];
            this.Z = Infinity;
            this.P = this.L = null;
            this.ea = 0;
            if (a = this.J.bg) this.L = new Dc(a.u, a.c);
            this.v.registerApplicationHandler("event", w(this.wa, this));
            window.addEventListener("click", w(this.Ca, this), !0);
            if ("function" == typeof TouchEvent) {
                var d = [];
                TouchEvent.prototype.preventDefault = function() {
                    var f =
                        Date.now() + 1500;
                    this instanceof Event ? d.push({
                        position: Kc(this),
                        na: f
                    }) : d.push({
                        position: void 0,
                        na: f
                    })
                };
                a = function(f) {
                    for (var g = -1, h = Kc(f), l = Date.now(), k = 0; k < d.length; ++k) {
                        var m = d[k];
                        if (l > m.na) g == k - 1 && (g = k);
                        else if (null == m.position || m.position.x == h.x && m.position.y == h.y) {
                            f.stopPropagation();
                            break
                        }
                    } - 1 != g && d.splice(0, g - 1)
                };
                window.addEventListener("mousemove", a, !0);
                window.addEventListener("mousedown", a, !0);
                window.addEventListener("mouseup", a, !0);
                window.addEventListener("click", a, !0);
                var e = function() {};
                window.addEventListener("touchend", function(f) {
                    f.target && f.target.addEventListener("click", e)
                }, !0)
            }
            window.addEventListener("touchstart", w(this.Ia, this), !0);
            Lc(this);
            this.exit = this.exit;
            this.exitNonCharging = this.exitNonCharging;
            this.reportInteraction_ = this.reportInteraction_;
            this.updateUrls_ = this.updateUrls_;
            this.configureCloseButton = this.configureCloseButton
        },
        Lc = function(a) {
            var b = a;
            a.v.registerApplicationHandler("exit-pmcfg", function(c) {
                b.ia = c
            })
        };
    p = T.prototype;
    p.exit = function(a, b) {
        this.V || Mc(this, a, void 0, b)
    };
    p.exitNonCharging = function(a) {
        this.V || Mc(this, a, 38)
    };
    p.reportInteraction_ = function(a) {
        var b = {};
        b.i = a;
        a = {
            i: b
        };
        Nc(this, a) || this.v.sendMessage("interactions", b)
    };
    p.updateUrls_ = function(a) {
        var b = {};
        b.f = a;
        a = {
            u: b
        };
        Nc(this, a) || this.v.sendMessage("url_update", b)
    };
    p.configureCloseButton = function(a) {
        var b = {};
        b.t = a;
        this.v.sendMessage("mb_close_btn", b)
    };
    var Oc = function(a) {
            var b = Date.now();
            a.Z = b
        },
        Mc = function(a, b, c, d) {
            var e = Date.now();
            e < a.ea ? Pc(a, b, c, d) : a.P = {
                pa: b,
                ta: c,
                Ja: d,
                va: e + 1500
            }
        },
        Pc = function(a, b, c, d) {
            if (1 != a.J.exit_strategy || d) var e = !1;
            else {
                if (e = b) e = (e = (e = a.J.google_template_data) && e.adData) && e[0] && e[0][b];
                e = e || a.J.redirect_url;
                var f = "string" === typeof e && (sc(e)[1] || null);
                e = "string" === typeof f && 0 == f.toLowerCase().indexOf("http") ? null != Fc.open(e, "_blank") : !1
            }
            f = e;
            e = {};
            e.f = b;
            e.c = c;
            e.r = d;
            e.d = a.da;
            e.o = f;
            a.L && (b = a.L, b.I = Ec(b), b = b.I, e.br = b, e.be = a.L.getError());
            Nc(a, e) || a.v.sendMessage("exit", e)
        },
        Nc = function(a, b) {
            if (a.ia && a.ha.postMessage) {
                var c = {};
                c.n = a.ia;
                c.er = b;
                a.ha.postMessage(c, "*");
                return !0
            }
            return !1
        },
        Qc = function(a, b, c) {
            var d = b;
            b = d.x;
            d = d.y;
            var e = {};
            e.x = b;
            e.y = d;
            e.e = c;
            e.t = Date.now() - a.Z;
            e.ts = Date.now();
            a.da.push(e)
        };
    T.prototype.Ca = function(a) {
        this.V && Mc(this);
        Qc(this, Kc(a), 0);
        a = Date.now();
        if (this.P) {
            var b = this.P;
            a < b.va && Pc(this, b.pa, b.ta, b.Ja)
        }
        this.P = null;
        this.ea = a + 200
    };
    T.prototype.Ia = function(a) {
        a.changedTouches && 0 < a.changedTouches.length && Qc(this, Kc(a), 1)
    };
    T.prototype.wa = function(a) {
        switch (a.e) {
            case "onshow":
                this.Z = Date.now()
        }
    };
    var Rc = function(a) {
        O.call(this, a)
    };
    t(Rc, O);
    Rc.Ka = [15];
    var Sc = function(a) {
        O.call(this, a)
    };
    t(Sc, O);
    Sc.prototype.getContext = function() {
        var a = 0;
        a = void 0 === a ? 0 : a;
        var b = this.g;
        var c = Jb(b, I(b), 2, c);
        c = null == c ? c : 2 === Va ? Number.isFinite(c) ? c | 0 : void 0 : c;
        var d;
        return c = null != (d = c) ? d : a
    };
    var Tc = function(a) {
        O.call(this, a)
    };
    t(Tc, O);
    Tc.prototype.getParameters = function() {
        var a = Sc;
        var b = void 0 === b ? !1 : b;
        a = Lb(this, a, 1, b);
        if (null != a) {
            var c = this.g,
                d = I(c);
            if (!(d & 2)) {
                var e = a;
                var f = e.g,
                    g = I(f);
                e = g & 2 ? Hb(e, f, g, !1) : e;
                e !== a && (a = e, Kb(c, d, 1, a, b))
            }
        }
        b = a;
        return b
    };
    Tc.prototype.setParameters = function(a) {
        return Mb(this, 1, a)
    };
    var Uc = null;

    function Vc() {
        var a = void 0 === a ? v : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Wc() {
        var a = void 0 === a ? v : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    var Xc = function(a, b, c) {
        var d, e;
        var f = void 0 === f ? 0 : f;
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = f;
        this.slotId = d;
        this.taskId = e;
        this.uniqueId = Math.random()
    };
    var U = v.performance,
        Zc = !!(U && U.mark && U.measure && U.clearMarks),
        V = Rb(function() {
            var a;
            if (a = Zc) {
                var b;
                if (null === Uc) {
                    Uc = "";
                    try {
                        a = "";
                        try {
                            a = v.top.location.hash
                        } catch (c) {
                            a = v.location.hash
                        }
                        a && (Uc = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Uc;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        }),
        $c = function() {
            var a = window;
            this.B = [];
            this.xa = a || v;
            var b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.B = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.F = V() || (null != b ?
                b : 1 > Math.random())
        };
    $c.prototype.disable = function() {
        this.F = !1;
        this.B != this.xa.google_js_reporting_queue && (V() && Ma(this.B, ad), this.B.length = 0)
    };
    var ad = function(a) {
        a && U && V() && (U.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), U.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    $c.prototype.start = function(a, b) {
        if (!this.F) return null;
        var c = Wc() || Vc();
        a = new Xc(a, b, c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        U && V() && U.mark(b);
        return a
    };
    $c.prototype.end = function(a) {
        if (this.F && "number" === typeof a.value) {
            var b = Wc() || Vc();
            a.duration = b - a.value;
            b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            U && V() && U.mark(b);
            !this.F || 2048 < this.B.length || this.B.push(a)
        }
    };
    var bd = function() {
            var a = void 0 === a ? 4E3 : a;
            var b = void 0 === b ? "&" : b;
            this.za = a;
            this.aa = b;
            this.T = {};
            this.Ba = 0;
            this.K = []
        },
        dd = function(a, b, c, d, e) {
            var f = [];
            vc(a, function(g, h) {
                (g = cd(g, b, c, d, e)) && f.push(h + "=" + g)
            });
            return f.join(b)
        },
        cd = function(a, b, c, d, e) {
            if (null == a) return "";
            b = b || "&";
            c = c || ",$";
            "string" == typeof c && (c = c.split(""));
            if (a instanceof Array) {
                if (d = d || 0, d < c.length) {
                    for (var f = [], g = 0; g < a.length; g++) f.push(cd(a[g], b, c, d + 1, e));
                    return f.join(c[d])
                }
            } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(dd(a,
                b, c, d, e + 1)) : "...";
            return encodeURIComponent(String(a))
        },
        fd = function(a, b, c, d) {
            b = b + "//" + c + d;
            var e = ed(a) - d.length;
            if (0 > e) return "";
            a.K.sort(function(m, n) {
                return m - n
            });
            d = null;
            c = "";
            for (var f = 0; f < a.K.length; f++)
                for (var g = a.K[f], h = a.T[g], l = 0; l < h.length; l++) {
                    if (!e) {
                        d = null == d ? g : d;
                        break
                    }
                    var k = dd(h[l], a.aa, ",$");
                    if (k) {
                        k = c + k;
                        if (e >= k.length) {
                            e -= k.length;
                            b += k;
                            c = a.aa;
                            break
                        }
                        d = null == d ? g : d
                    }
                }
            a = "";
            null != d && (a = c + "trn=" + d);
            return b + a
        },
        ed = function(a) {
            var b = 1,
                c;
            for (c in a.T) b = c.length > b ? c.length : b;
            return a.za - 3 - b - a.aa.length -
                1
        };
    var gd = function() {};
    var hd = function() {
            var a = void 0 === a ? !1 : a;
            this.ua = "pagead2.googlesyndication.com";
            this.Da = "/pagead/gen_204?id=";
            this.qa = a;
            this.Ha = "https:";
            this.ma = Math.random()
        },
        jd = function() {
            var a = id,
                b = window.google_srt;
            0 <= b && 1 >= b && (a.ma = b)
        },
        ld = function(a, b) {
            var c = id,
                d = !0;
            d = void 0 === d ? !1 : d;
            if (kd(c, d)) try {
                if (a instanceof bd) var e = a;
                else e = new bd, vc(a, function(g, h) {
                    var l = e,
                        k = g;
                    g = l.Ba++;
                    var m = {};
                    m[h] = k;
                    h = [m];
                    l.K.push(g);
                    l.T[g] = h
                });
                var f = fd(e, c.Ha, c.ua, c.Da + "html5-mon&");
                f && ("undefined" !== typeof b ? yc(v, f, b) : c.qa ? zc(f) :
                    yc(v, f))
            } catch (g) {}
        },
        kd = function(a, b) {
            a = b ? a.ma : Math.random();
            return 1 > a
        };
    var id, md = new $c,
        nd = function() {
            var a, b = window;
            null != a && (b.google_measure_js_timing = a);
            b.google_measure_js_timing || md.disable()
        },
        od = function() {
            var a, b;
            id = null != (b = a) ? b : new hd;
            "number" !== typeof window.google_srt && (window.google_srt = Math.random());
            jd();
            "complete" == window.document.readyState ? nd() : md.F && Ub(window, "load", function() {
                nd()
            })
        };
    od();
    var pd = new WeakMap;

    function qd(a) {
        var b = void 0 === b ? rd : b;
        var c = ra(a),
            d = function(f) {
                f = r(f);
                f.next();
                f = ea(f);
                return b(c, f)
            },
            e = function() {
                var f = ma.apply(0, arguments),
                    g = this || v,
                    h = pd.get(g);
                h || (h = {}, pd.set(g, h));
                g = h;
                h = [this].concat(f instanceof Array ? f : ea(r(f)));
                f = d ? d(h) : h;
                if (Object.prototype.hasOwnProperty.call(g, f)) f = g[f];
                else {
                    var l = r(h);
                    h = l.next().value;
                    l = ea(l);
                    h = a.apply(h, l);
                    f = g[f] = h
                }
                return f
            };
        return e
    }
    var rd = function(a, b) {
        a = [a];
        for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
        return a.join("\v")
    };
    var sd = ["destinationUrl", "displayUrl"],
        td = "googlesyndication.com googleadservices.com googleusercontent.com doubleclick.net youtube.com googleapis.com gstatic.com google-analytics.com".split(" "),
        ud = qd(function(a, b, c, d) {
            d = void 0 === d ? {} : d;
            d.i = a.creativeId;
            d.t = a.templateId;
            d.c = b;
            d.m = c;
            d.lp = a.layoutPath;
            a.experimentId && (d.e = a.experimentId);
            a.W && (d.gqi = a.W);
            a.ba && (d.qqi = a.ba);
            a.La(d)
        });

    function vd(a, b) {
        return function(c, d, e) {
            var f = {};
            e && (f.jsl = e);
            d && (f.jsf = d);
            ud(a, "j", c, f);
            b && b(c, d, e)
        }
    }

    function wd(a) {
        var b = sc(a),
            c = function(d) {
                return ya(b[3], d)
            };
        return Na(td, c) ? a : pc(b[1], b[2], b[3], b[4])
    }

    function xd(a, b, c) {
        var d = {},
            e = 0,
            f = function(g, h, l, k) {
                d["a" + e] = g;
                null != h && (d["f" + e] = h);
                null != l && null != k && (d["s" + e] = l, d["d" + e] = k);
                e++
            };
        0 != b && f("layout", "layout", 0, b.toFixed(4));
        if (b = window.performance && window.performance.timing) b = b.responseEnd - b.navigationStart, f("http" + ("http:" === window.location.protocol ? "" : "s"), "layout_html", 0, b.toFixed(4));
        window.performance && window.performance.getEntries && (Ma(window.performance.getEntries(), function(g) {
            var h = Yb(c, function(m) {
                return g.name && ya(g.name, m)
            });
            h && h in
                c && delete c[h];
            if (yd(g.name) && a.reportPerf) {
                var l = 0 < g.startTime ? g.startTime.toFixed(4) : null,
                    k = 0 < g.responseEnd ? (g.responseEnd - g.startTime).toFixed(4) : null;
                f(wd(g.name), h, l, k)
            }
        }), (a.reportPerf || a.reportErrors) && Wb(c, function(g, h) {
            f(g, h, -1, -1)
        }));
        0 < e && ud(a, "p", "", d)
    }

    function zd(a) {
        return Xb(a, function(b, c) {
            return "string" === typeof b && yd(b) && !(0 <= La(sd, c))
        })
    }

    function yd(a) {
        var b;
        if (b = /^(https?:)?\/\//.test(a))(b = a) ? (a = tc(sc(b)[5] || null)) ? (b = b ? (b = tc(sc(b)[3] || null)) ? 0 <= La(Ac, b) : !1 : !1, a = b && -1 != a.indexOf("/aclk")) : a = !1 : a = !1, b = !a;
        return b
    }

    function Ad(a, b, c, d, e) {
        var f = w(Function.prototype.apply, b, c, Array.prototype.slice.call(arguments, 3));
        if (d && d.monitoring) {
            var g = d.monitoring;
            g = {
                creativeId: g.creativeId || -1,
                templateId: g.templateId || -1,
                experimentId: g.experimentId,
                reportErrors: g.reportErrors || !1,
                reportPerf: g.reportPerf || !1,
                La: a,
                layoutPath: g.layoutPath,
                W: g.gqi,
                ba: g.qqi,
                rumUrl: g.rumUrl,
                la: g.rumc,
                ga: g.navStart
            };
            var h = d.monitoring.loadTime ? Date.now() - d.monitoring.loadTime : 0,
                l = d.google_template_data.adData[0];
            l = zd(l);
            h = ua(xd, g, h, l);
            window.setTimeout(h,
                1E4);
            if (g.rumUrl) {
                h = new Tc;
                l = new Sc;
                g.la && M(l, 1, yb(g.la), "0");
                g.ga && M(l, 6, yb(g.ga), "0");
                if (!Number.isFinite(3)) switch (Va) {
                    case 2:
                        throw wb("enum");
                    case 1:
                        ub()
                }
                var k = 3;
                k = M(l, 2, k, 0);
                k = M(k, 4, Ab(g.ba), "");
                M(k, 3, Ab(g.W), "");
                h.setParameters(l);
                l = new Rc;
                l = M(l, 7, !0, !1);
                Mb(h, 2, l);
                l = window;
                l.google_rum_config = h.toJSON();
                l = Bc(g.rumUrl);
                k = document;
                h = wc("SCRIPT", k);
                uc(h, l);
                (l = k.getElementsByTagName("script")[0]) && l.parentNode && l.parentNode.insertBefore(h, l)
            }
            if (g.reportErrors) {
                h = window.onerror;
                window.onerror = vd(g,
                    h);
                try {
                    f()
                } catch (n) {
                    f = vd(g, h);
                    g = n.toString();
                    n.name && -1 == g.indexOf(n.name) && (g += ": " + n.name);
                    n.message && -1 == g.indexOf(n.message) && (g += ": " + n.message);
                    if (n.stack) {
                        h = n.stack;
                        l = g;
                        try {
                            for (-1 == h.indexOf(l) && (h = l + "\n" + h); h != m;) {
                                var m = h;
                                h = h.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1")
                            }
                            g = h.replace(RegExp("\n *", "g"), "\n")
                        } catch (H) {
                            g = l
                        }
                    }
                    m = g;
                    f(m, n.lineNumber, n.fileName)
                }
            } else f()
        } else f()
    }

    function Bd(a) {
        var b, c = gd;
        var d = c;
        var e = "fa";
        d.fa && d.hasOwnProperty(e) || (c = new c, d.fa = c);
        d = [];
        !a.eid && d.length && (a.eid = d.toString());
        ld(a, b)
    };

    function Cd() {
        for (var a = window.AudioBufferSourceNode.prototype.start, b = window.AudioBufferSourceNode.prototype.stop, c = ["touchstart", "click"], d = function() {
                window.AudioBufferSourceNode.prototype.start = a;
                window.AudioBufferSourceNode.prototype.stop = b;
                for (var g = r(c), h = g.next(); !h.done; h = g.next()) h = h.value, window.removeEventListener(h, d, !0)
            }, e = r(c), f = e.next(); !f.done; f = e.next()) f = f.value, window.addEventListener(f, d, !0);
        window.AudioBufferSourceNode.prototype.start = function() {};
        window.AudioBufferSourceNode.prototype.stop =
            function() {}
    };
    var Ed = function(a, b, c, d, e, f) {
        Q.call(this, a, d);
        var g = this;
        try {
            var h = !!document.cookie
        } catch (l) {
            h = !1
        }
        if (h && (a = window.location.origin || window.location.protocol + "//" + window.location.host, !0 !== window.secureChannel_allowAnyParent && b !== a && -1 === c.indexOf(a))) throw Error();
        this.oa = e && !!window.MessageChannel;
        this.R = b;
        this.l = this.N = null;
        this.ra = function(l) {
            var k = l.data;
            k.s !== g.S || l.source !== window.parent || "*" !== g.R && l.origin !== g.R || Jc(g, k);
            return l = void 0
        };
        window.addEventListener("message", this.ra, !1);
        f || "complete" ==
            v.document.readyState ? Dd(this) : window.addEventListener("load", function() {
                Dd(g)
            }, !1)
    };
    t(Ed, Q);
    Ed.prototype.send = function(a) {
        this.oa ? this.N && this.N.postMessage(a) : this.l.contentWindow.postMessage(a, "*")
    };
    var Dd = function(a) {
        var b = a,
            c = {
                t: 0
            };
        c.s = a.S;
        if (a.oa) {
            var d = new MessageChannel;
            a.N = d.port1;
            a.N.onmessage = function(g) {
                Jc(b, g.data)
            };
            a.Ma.postMessage(c, a.R, [d.port2]);
            Ic(a)
        } else {
            a.l = ic(document, "IFRAME");
            a.l.style.display = "none";
            d = '<!doctype html><html><head><script>window.addEventListener("message",function(e){e.source.parent.postMessage(e.data,' + JSON.stringify(a.R) + ");},false);\x3c/script></head><body></body></html>";
            var e = a.l;
            var f = gc(d);
            e.srcdoc = f instanceof P && f.constructor === P ? f.ja : "type_error:SafeHtml";
            a.l.src = "javascript:'" + encodeURI(d) + "'";
            a.l.onload = function() {
                b.send(c);
                Ic(b)
            };
            document.body.appendChild(a.l)
        }
    };
    for (var Fd, Gd = window.location.hash.substring(1), Hd = {}, Id = Gd.split("&"), Jd = 0; Jd < Id.length; Jd++) {
        var Kd = Id[Jd].split("=");
        Hd[Kd[0]] = decodeURIComponent(Kd[1])
    }
    var W = Fd = Hd,
        Ld = W.p && 0 == W.p.indexOf("http") ? W.p : "*",
        Md = W.t ? W.t : "",
        Nd;
    var Od = window.parent,
        Pd = Ld,
        Qd = ["http://pagead2.googlesyndication.com", "https://pagead2.googlesyndication.com", "http://tpc.googlesyndication.com", "https://tpc.googlesyndication.com", "https://adwords-displayads.googleusercontent.com"],
        Rd = Md,
        Sd, Td;
    Sd = void 0 === Sd ? !0 : Sd;
    Td = void 0 === Td ? !1 : Td;
    try {
        Nd = new Ed(Od, Pd, Qd, Rd, Sd, Td)
    } catch (a) {
        Nd = null
    }
    var S = Nd;
    if (S) {
        S.registerApplicationHandler("adData", function(a) {
            if (window.onAdData) {
                var b = new T(a);
                Oc(b);
                Ad(Bd, window.onAdData, window, a, b)
            }
            "true" === a.evc_touch && document.addEventListener("touchstart", function() {
                S.sendMessage("touch", {})
            }, {
                capture: !0
            })
        });
        S.registerApplicationHandler("inactivity", function(a) {
            0 < a.report_inactivity_ms && S && Ud(a.report_inactivity_ms, a.id)
        });
        var Vd = S,
            Wd, Xd = Wd = void 0 === Wd ? "secureChannel" : Wd,
            Yd = Vd,
            Zd, $d = Xd,
            ae = Yd,
            be = Zd,
            X = $d.split("."),
            Y = be || v;
        X[0] in Y || "undefined" == typeof Y.execScript ||
            Y.execScript("var " + X[0]);
        for (var Z; X.length && (Z = X.shift());) X.length || void 0 === ae ? Y = Y[Z] && Y[Z] !== Object.prototype[Z] ? Y[Z] : Y[Z] = {} : Y[Z] = ae
    }
    Cd();

    function Ud(a, b) {
        var c = S;
        b = void 0 === b ? 0 : b;
        var d = setTimeout(function() {
            c.sendMessage("inactivity", {
                id: b
            })
        }, a);
        document.addEventListener("touchstart", function() {
            clearTimeout(d)
        }, {
            capture: !0
        });
        document.addEventListener("touchend", function(e) {
            clearTimeout(d);
            0 === e.touches.length && (d = setTimeout(function() {
                c.sendMessage("inactivity", {
                    id: b
                })
            }, a))
        }, {
            capture: !0
        })
    };
}).call(this);