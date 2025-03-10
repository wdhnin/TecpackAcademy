(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var n = function(a) {
            var c = 0;
            return function() {
                return c < a.length ? {
                    done: !1,
                    value: a[c++]
                } : {
                    done: !0
                }
            }
        },
        q = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, c, d) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[c] = d.value;
            return a
        },
        t = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var c = 0; c < a.length; ++c) {
                var d = a[c];
                if (d && d.Math == Math) return d
            }
            throw Error("Cannot find global object");
        },
        x = t(this),
        y = function(a, c) {
            if (c) a: {
                var d = x;a = a.split(".");
                for (var g = 0; g < a.length - 1; g++) {
                    var f = a[g];
                    if (!(f in d)) break a;
                    d = d[f]
                }
                a = a[a.length - 1];g = d[a];c = c(g);c != g && null != c && q(d, a, {
                    configurable: !0,
                    writable: !0,
                    value: c
                })
            }
        },
        z = function(a) {
            var c = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return c ? c.call(a) : {
                next: n(a)
            }
        };
    y("Promise", function(a) {
        function c() {
            this.g = null
        }

        function d(b) {
            return b instanceof f ? b : new f(function(e) {
                e(b)
            })
        }
        if (a) return a;
        c.prototype.v = function(b) {
            if (null == this.g) {
                this.g = [];
                var e = this;
                this.A(function() {
                    e.I()
                })
            }
            this.g.push(b)
        };
        var g = x.setTimeout;
        c.prototype.A = function(b) {
            g(b, 0)
        };
        c.prototype.I = function() {
            for (; this.g && this.g.length;) {
                var b = this.g;
                this.g = [];
                for (var e = 0; e < b.length; ++e) {
                    var h = b[e];
                    b[e] = null;
                    try {
                        h()
                    } catch (k) {
                        this.H(k)
                    }
                }
            }
            this.g = null
        };
        c.prototype.H = function(b) {
            this.A(function() {
                throw b;
            })
        };
        var f = function(b) {
            this.i = 0;
            this.j = void 0;
            this.h = [];
            this.C = !1;
            var e = this.s();
            try {
                b(e.resolve, e.reject)
            } catch (h) {
                e.reject(h)
            }
        };
        f.prototype.s = function() {
            function b(k) {
                return function(l) {
                    h || (h = !0, k.call(e, l))
                }
            }
            var e = this,
                h = !1;
            return {
                resolve: b(this.M),
                reject: b(this.u)
            }
        };
        f.prototype.M = function(b) {
            if (b === this) this.u(new TypeError("A Promise cannot resolve to itself"));
            else if (b instanceof f) this.O(b);
            else {
                a: switch (typeof b) {
                    case "object":
                        var e = null != b;
                        break a;
                    case "function":
                        e = !0;
                        break a;
                    default:
                        e = !1
                }
                e ?
                this.L(b) : this.B(b)
            }
        };
        f.prototype.L = function(b) {
            var e = void 0;
            try {
                e = b.then
            } catch (h) {
                this.u(h);
                return
            }
            "function" == typeof e ? this.P(e, b) : this.B(b)
        };
        f.prototype.u = function(b) {
            this.F(2, b)
        };
        f.prototype.B = function(b) {
            this.F(1, b)
        };
        f.prototype.F = function(b, e) {
            if (0 != this.i) throw Error("Cannot settle(" + b + ", " + e + "): Promise already settled in state" + this.i);
            this.i = b;
            this.j = e;
            2 === this.i && this.N();
            this.J()
        };
        f.prototype.N = function() {
            var b = this;
            g(function() {
                    if (b.K()) {
                        var e = x.console;
                        "undefined" !== typeof e && e.error(b.j)
                    }
                },
                1)
        };
        f.prototype.K = function() {
            if (this.C) return !1;
            var b = x.CustomEvent,
                e = x.Event,
                h = x.dispatchEvent;
            if ("undefined" === typeof h) return !0;
            "function" === typeof b ? b = new b("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof e ? b = new e("unhandledrejection", {
                cancelable: !0
            }) : (b = x.document.createEvent("CustomEvent"), b.initCustomEvent("unhandledrejection", !1, !0, b));
            b.promise = this;
            b.reason = this.j;
            return h(b)
        };
        f.prototype.J = function() {
            if (null != this.h) {
                for (var b = 0; b < this.h.length; ++b) r.v(this.h[b]);
                this.h = null
            }
        };
        var r = new c;
        f.prototype.O = function(b) {
            var e = this.s();
            b.l(e.resolve, e.reject)
        };
        f.prototype.P = function(b, e) {
            var h = this.s();
            try {
                b.call(e, h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        f.prototype.then = function(b, e) {
            function h(m, p) {
                return "function" == typeof m ? function(u) {
                    try {
                        k(m(u))
                    } catch (v) {
                        l(v)
                    }
                } : p
            }
            var k, l, w = new f(function(m, p) {
                k = m;
                l = p
            });
            this.l(h(b, k), h(e, l));
            return w
        };
        f.prototype.catch = function(b) {
            return this.then(void 0, b)
        };
        f.prototype.l = function(b, e) {
            function h() {
                switch (k.i) {
                    case 1:
                        b(k.j);
                        break;
                    case 2:
                        e(k.j);
                        break;
                    default:
                        throw Error("Unexpected state: " + k.i);
                }
            }
            var k = this;
            null == this.h ? r.v(h) : this.h.push(h);
            this.C = !0
        };
        f.resolve = d;
        f.reject = function(b) {
            return new f(function(e, h) {
                h(b)
            })
        };
        f.race = function(b) {
            return new f(function(e, h) {
                for (var k = z(b), l = k.next(); !l.done; l = k.next()) d(l.value).l(e, h)
            })
        };
        f.all = function(b) {
            var e = z(b),
                h = e.next();
            return h.done ? d([]) : new f(function(k, l) {
                function w(u) {
                    return function(v) {
                        m[u] = v;
                        p--;
                        0 == p && k(m)
                    }
                }
                var m = [],
                    p = 0;
                do m.push(void 0), p++, d(h.value).l(w(m.length - 1), l), h = e.next();
                while (!h.done)
            })
        };
        return f
    });
    var A = this || self,
        B = function(a) {
            var c = typeof a;
            return "object" != c ? c : a ? Array.isArray(a) ? "array" : c : "null"
        },
        C = function(a, c) {
            a = a.split(".");
            var d = A;
            a[0] in d || "undefined" == typeof d.execScript || d.execScript("var " + a[0]);
            for (var g; a.length && (g = a.shift());) a.length || void 0 === c ? d = d[g] && d[g] !== Object.prototype[g] ? d[g] : d[g] = {} : d[g] = c
        },
        D = function(a, c) {
            function d() {}
            d.prototype = c.prototype;
            a.S = c.prototype;
            a.prototype = new d;
            a.prototype.constructor = a;
            a.R = function(g, f, r) {
                for (var b = Array(arguments.length - 2), e = 2; e < arguments.length; e++) b[e -
                    2] = arguments[e];
                return c.prototype[f].apply(g, b)
            }
        };

    function E(a, c) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, E);
        else {
            var d = Error().stack;
            d && (this.stack = d)
        }
        a && (this.message = String(a));
        void 0 !== c && (this.cause = c)
    }
    D(E, Error);
    E.prototype.name = "CustomError";

    function F(a, c) {
        a = a.split("%s");
        for (var d = "", g = a.length - 1, f = 0; f < g; f++) d += a[f] + (f < c.length ? c[f] : "%s");
        E.call(this, d + a[g])
    }
    D(F, E);
    F.prototype.name = "AssertionError";
    var G = function(a, c, d) {
        if ("string" !== typeof a) {
            var g = [B(a), a],
                f = "Assertion failed";
            c ? (f += ": " + c, g = Array.prototype.slice.call(arguments, 2)) : f += ": Expected string but got %s: %s.";
            throw new F("" + f, g || []);
        }
        return a
    };

    function H(a, c) {
        var d, g = B(c);
        g = (d = "array" == g || "object" == g && "number" == typeof c.length) ? c : arguments;
        for (d = d ? 0 : 1; d < g.length; d++) {
            if (null == a) return;
            a = a[g[d]]
        }
        return a
    };
    var I = function() {
        var a = this;
        this.m = this.o = null;
        this.D = function() {};
        this.G = new Promise(function(c) {
            a.D = c
        })
    };
    I.prototype.exit = function(a) {
        if (null != this.m)
            if (a && "string" === typeof a && !/^[\s\xa0]*$/.test(a)) {
                var c = this.m,
                    d = c.exit;
                var g = this.o;
                g = g && H(g, "google_template_data", "adData", 0, "exit_label_map");
                g = null == g ? "" : String(g);
                if (/^[\s\xa0]*$/.test(g)) var f = a;
                else try {
                    var r = JSON.parse(g);
                    f = G(r && r[a] || a)
                } catch (b) {
                    f = a
                }
                d.call(c, f)
            } else this.m.exit()
    };
    I.prototype.close = function() {
        this.G.then(function(a) {
            a.exit(void 0, "c")
        })
    };
    var J = function(a, c) {
            a.G.then(function(d) {
                d.configureCloseButton(c)
            })
        },
        K = function(a, c, d) {
            a.o = c;
            a.m = d;
            a.D(d);
            1 != a.o.exit_strategy && C("window.open", function() {
                return a.exit()
            })
        };
    (function() {
        var a = new I;
        C("ExitApi.exit", function(c) {
            return a.exit(c)
        });
        C("ExitApi.close", function() {
            return a.close()
        });
        C("ExitApi.delayCloseButton", function(c) {
            return J(a, c)
        });
        C("onAdData", function(c, d) {
            return K(a, c, d)
        });
        C("FbPlayableAd.onCTAClick", function() {
            return a.exit()
        });
        C("playableSDK.openAppStore", function() {
            return a.exit()
        })
    })();
}).call(this);