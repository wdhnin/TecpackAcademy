(function() {
    var n, aa = function(a) {
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
        ba = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
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
            throw Error("a");
        },
        da =
        ca(this),
        p = function(a, b) {
            if (b) a: {
                var c = da;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && b != null && ba(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    p("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.Jg = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.Jg
        };
        var c = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("b");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    });
    p("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            typeof d === "function" && typeof d.prototype[a] != "function" && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ea(aa(this))
                }
            })
        }
        return a
    });
    p("Symbol.asyncIterator", function(a) {
        return a ? a : Symbol("Symbol.asyncIterator")
    });
    var ea = function(a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function() {
                return this
            };
            return a
        },
        ia = function(a) {
            return ha(a, a)
        },
        ha = function(a, b) {
            a.raw = b;
            Object.freeze && (Object.freeze(a), Object.freeze(b));
            return a
        },
        u = function(a) {
            var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if (typeof a.length == "number") return {
                next: aa(a)
            };
            throw Error("c`" + String(a));
        },
        x = function(a) {
            if (!(a instanceof Array)) {
                a = u(a);
                for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                a = c
            }
            return a
        },
        ja = function(a,
            b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        ka = typeof Object.assign == "function" ? Object.assign : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) ja(d, e) && (a[e] = d[e])
            }
            return a
        };
    p("Object.assign", function(a) {
        return a || ka
    });
    var la = typeof Object.create == "function" ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ma;
    if (typeof Object.setPrototypeOf == "function") ma = Object.setPrototypeOf;
    else {
        var na;
        a: {
            var oa = {
                    a: !0
                },
                pa = {};
            try {
                pa.__proto__ = oa;
                na = pa.a;
                break a
            } catch (a) {}
            na = !1
        }
        ma = na ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError("d`" + a);
            return a
        } : null
    }
    var qa = ma,
        A = function(a, b) {
            a.prototype = la(b.prototype);
            a.prototype.constructor = a;
            if (qa) qa(a, b);
            else
                for (var c in b)
                    if (c != "prototype")
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Fi = b.prototype
        },
        ra = function() {
            this.pc = !1;
            this.cb = null;
            this.ca = void 0;
            this.s = 1;
            this.Fa = this.va = 0;
            this.Zd = this.ga = null
        };
    ra.prototype.Oa = function() {
        if (this.pc) throw new TypeError("f");
        this.pc = !0
    };
    ra.prototype.wc = function(a) {
        this.ca = a
    };
    ra.prototype.Hc = function(a) {
        this.ga = {
            vf: a,
            Tf: !0
        };
        this.s = this.va || this.Fa
    };
    ra.prototype.return = function(a) {
        this.ga = {
            return: a
        };
        this.s = this.Fa
    };
    var sa = function(a, b, c) {
        a.s = c;
        return {
            value: b
        }
    };
    ra.prototype.Ja = function(a) {
        this.s = a
    };
    var ta = function(a, b, c) {
            a.va = b;
            c != void 0 && (a.Fa = c)
        },
        ua = function(a) {
            a.va = 0;
            var b = a.ga.vf;
            a.ga = null;
            return b
        },
        va = function(a, b, c, d) {
            d ? a.Zd[d] = a.ga : a.Zd = [a.ga];
            a.va = b || 0;
            a.Fa = c || 0
        },
        wa = function(a, b, c) {
            c = a.Zd.splice(c || 0)[0];
            (c = a.ga = a.ga || c) ? c.Tf ? a.s = a.va || a.Fa : c.Ja != void 0 && a.Fa < c.Ja ? (a.s = c.Ja, a.ga = null) : a.s = a.Fa: a.s = b
        };
    ra.prototype.forIn = function(a) {
        return new xa(a)
    };
    var xa = function(a) {
            this.hg = [];
            for (var b in a) this.hg.push(b);
            this.hg.reverse()
        },
        ya = function(a) {
            this.o = new ra;
            this.ii = a
        };
    ya.prototype.wc = function(a) {
        this.o.Oa();
        if (this.o.cb) return za(this, this.o.cb.next, a, this.o.wc);
        this.o.wc(a);
        return Aa(this)
    };
    var Ba = function(a, b) {
        a.o.Oa();
        var c = a.o.cb;
        if (c) return za(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.o.return);
        a.o.return(b);
        return Aa(a)
    };
    ya.prototype.Hc = function(a) {
        this.o.Oa();
        if (this.o.cb) return za(this, this.o.cb["throw"], a, this.o.wc);
        this.o.Hc(a);
        return Aa(this)
    };
    var za = function(a, b, c, d) {
            try {
                var e = b.call(a.o.cb, c);
                if (!(e instanceof Object)) throw new TypeError("e`" + e);
                if (!e.done) return a.o.pc = !1, e;
                var f = e.value
            } catch (g) {
                return a.o.cb = null, a.o.Hc(g), Aa(a)
            }
            a.o.cb = null;
            d.call(a.o, f);
            return Aa(a)
        },
        Aa = function(a) {
            for (; a.o.s;) try {
                var b = a.ii(a.o);
                if (b) return a.o.pc = !1, {
                    value: b.value,
                    done: !1
                }
            } catch (c) {
                a.o.ca = void 0, a.o.Hc(c)
            }
            a.o.pc = !1;
            if (a.o.ga) {
                b = a.o.ga;
                a.o.ga = null;
                if (b.Tf) throw b.vf;
                return {
                    value: b.return,
                    done: !0
                }
            }
            return {
                value: void 0,
                done: !0
            }
        },
        Ca = function(a) {
            this.next =
                function(b) {
                    return a.wc(b)
                };
            this.throw = function(b) {
                return a.Hc(b)
            };
            this.return = function(b) {
                return Ba(a, b)
            };
            this[Symbol.iterator] = function() {
                return this
            }
        },
        Da = function(a) {
            function b(d) {
                return a.next(d)
            }

            function c(d) {
                return a.throw(d)
            }
            return new Promise(function(d, e) {
                function f(g) {
                    g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
                }
                f(a.next())
            })
        },
        Fa = function(a) {
            return Da(new Ca(new ya(a)))
        },
        Ga = function(a) {
            this[Symbol.asyncIterator] = function() {
                return this
            };
            this[Symbol.iterator] = function() {
                return a
            };
            this.next = function(b) {
                return Promise.resolve(a.next(b))
            };
            this["throw"] = function(b) {
                return new Promise(function(c, d) {
                    var e = a["throw"];
                    e !== void 0 ? c(e.call(a, b)) : (c = a["return"], c !== void 0 && c.call(a), d(new TypeError("g")))
                })
            };
            a["return"] !== void 0 && (this["return"] = function(b) {
                return Promise.resolve(a["return"](b))
            })
        },
        C = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
            return b
        };
    p("Reflect.setPrototypeOf", function(a) {
        return a ? a : qa ? function(b, c) {
            try {
                return qa(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    });
    p("Promise", function(a) {
        function b() {
            this.Qa = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.ef = function(g) {
            if (this.Qa == null) {
                this.Qa = [];
                var h = this;
                this.ff(function() {
                    h.kh()
                })
            }
            this.Qa.push(g)
        };
        var d = da.setTimeout;
        b.prototype.ff = function(g) {
            d(g, 0)
        };
        b.prototype.kh = function() {
            for (; this.Qa && this.Qa.length;) {
                var g = this.Qa;
                this.Qa = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.Rg(l)
                    }
                }
            }
            this.Qa = null
        };
        b.prototype.Rg = function(g) {
            this.ff(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.Vb = 0;
            this.Dc = void 0;
            this.Ob = [];
            this.Xf = !1;
            var h = this.Td();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.Td = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.vi),
                reject: g(this.Ce)
            }
        };
        e.prototype.vi = function(g) {
            if (g === this) this.Ce(new TypeError("h"));
            else if (g instanceof e) this.zi(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = g != null;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.ui(g) : this.Af(g)
            }
        };
        e.prototype.ui = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.Ce(k);
                return
            }
            typeof h == "function" ? this.Ai(h, g) : this.Af(g)
        };
        e.prototype.Ce = function(g) {
            this.pg(2, g)
        };
        e.prototype.Af = function(g) {
            this.pg(1, g)
        };
        e.prototype.pg = function(g, h) {
            if (this.Vb != 0) throw Error("i`" + g + "`" + h + "`" + this.Vb);
            this.Vb = g;
            this.Dc = h;
            this.Vb === 2 && this.wi();
            this.lh()
        };
        e.prototype.wi = function() {
            var g = this;
            d(function() {
                if (g.Zh()) {
                    var h = da.console;
                    typeof h !== "undefined" && h.error(g.Dc)
                }
            }, 1)
        };
        e.prototype.Zh = function() {
            if (this.Xf) return !1;
            var g = da.CustomEvent,
                h = da.Event,
                k = da.dispatchEvent;
            if (typeof k === "undefined") return !0;
            typeof g === "function" ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : typeof h === "function" ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = da.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.Dc;
            return k(g)
        };
        e.prototype.lh = function() {
            if (this.Ob != null) {
                for (var g = 0; g < this.Ob.length; ++g) f.ef(this.Ob[g]);
                this.Ob = null
            }
        };
        var f = new b;
        e.prototype.zi = function(g) {
            var h =
                this.Td();
            g.Sc(h.resolve, h.reject)
        };
        e.prototype.Ai = function(g, h) {
            var k = this.Td();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        e.prototype.then = function(g, h) {
            function k(q, r) {
                return typeof q == "function" ? function(w) {
                    try {
                        l(q(w))
                    } catch (v) {
                        m(v)
                    }
                } : r
            }
            var l, m, t = new e(function(q, r) {
                l = q;
                m = r
            });
            this.Sc(k(g, l), k(h, m));
            return t
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.Sc = function(g, h) {
            function k() {
                switch (l.Vb) {
                    case 1:
                        g(l.Dc);
                        break;
                    case 2:
                        h(l.Dc);
                        break;
                    default:
                        throw Error("j`" +
                            l.Vb);
                }
            }
            var l = this;
            this.Ob == null ? f.ef(k) : this.Ob.push(k);
            this.Xf = !0
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, k) {
                k(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, k) {
                for (var l = u(g), m = l.next(); !m.done; m = l.next()) c(m.value).Sc(h, k)
            })
        };
        e.all = function(g) {
            var h = u(g),
                k = h.next();
            return k.done ? c([]) : new e(function(l, m) {
                function t(w) {
                    return function(v) {
                        q[w] = v;
                        r--;
                        r == 0 && l(q)
                    }
                }
                var q = [],
                    r = 0;
                do q.push(void 0), r++, c(k.value).Sc(t(q.length - 1), m), k = h.next(); while (!k.done)
            })
        };
        return e
    });
    p("Object.setPrototypeOf", function(a) {
        return a || qa
    });
    p("Symbol.dispose", function(a) {
        return a ? a : Symbol("Symbol.dispose")
    });
    p("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ja(b, d) && c.push(b[d]);
            return c
        }
    });
    var Ha = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    };
    p("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Ha(this, function(b) {
                return b
            })
        }
    });
    p("globalThis", function(a) {
        return a || da
    });
    p("WeakMap", function(a) {
        function b() {}

        function c(k) {
            var l = typeof k;
            return l === "object" && k !== null || l === "function"
        }

        function d(k) {
            if (!ja(k, f)) {
                var l = new b;
                ba(k, f, {
                    value: l
                })
            }
        }

        function e(k) {
            var l = Object[k];
            l && (Object[k] = function(m) {
                if (m instanceof b) return m;
                Object.isExtensible(m) && d(m);
                return l(m)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var k = Object.seal({}),
                        l = Object.seal({}),
                        m = new a([
                            [k, 2],
                            [l, 3]
                        ]);
                    if (m.get(k) != 2 || m.get(l) != 3) return !1;
                    m.delete(k);
                    m.set(l, 4);
                    return !m.has(k) && m.get(l) == 4
                } catch (t) {
                    return !1
                }
            }()) return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var g = 0,
            h = function(k) {
                this.lc = (g += Math.random() + 1).toString();
                if (k) {
                    k = u(k);
                    for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
                }
            };
        h.prototype.set = function(k, l) {
            if (!c(k)) throw Error("k");
            d(k);
            if (!ja(k, f)) throw Error("l`" + k);
            k[f][this.lc] = l;
            return this
        };
        h.prototype.get = function(k) {
            return c(k) && ja(k, f) ? k[f][this.lc] : void 0
        };
        h.prototype.has = function(k) {
            return c(k) && ja(k, f) && ja(k[f], this.lc)
        };
        h.prototype.delete = function(k) {
            return c(k) &&
                ja(k, f) && ja(k[f], this.lc) ? delete k[f][this.lc] : !1
        };
        return h
    });
    p("Map", function(a) {
        if (function() {
                if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function") return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(u([
                            [h, "s"]
                        ]));
                    if (k.get(h) != "s" || k.size != 1 || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || k.size != 2) return !1;
                    var l = k.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != h || m.value[1] != "s") return !1;
                    m = l.next();
                    return m.done || m.value[0].x != 4 || m.value[1] != "t" || !l.next().done ? !1 : !0
                } catch (t) {
                    return !1
                }
            }()) return a;
        var b = new WeakMap,
            c = function(h) {
                this[0] = {};
                this[1] =
                    f();
                this.size = 0;
                if (h) {
                    h = u(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = h === 0 ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this[0][l.id] = []);
            l.U ? l.U.value = k : (l.U = {
                next: this[1],
                Ma: this[1].Ma,
                head: this[1],
                key: h,
                value: k
            }, l.list.push(l.U), this[1].Ma.next = l.U, this[1].Ma = l.U, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.U && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.U.Ma.next = h.U.next, h.U.next.Ma = h.U.Ma,
                h.U.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].Ma = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).U
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).U) && h.value
        };
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        };
        c.prototype.forEach = function(h, k) {
            for (var l = this.entries(),
                    m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
        };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(h, k) {
                var l = k && typeof k;
                l == "object" || l == "function" ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
                var m = h[0][l];
                if (m && ja(h[0], l))
                    for (h = 0; h < m.length; h++) {
                        var t = m[h];
                        if (k !== k && t.key !== t.key || k === t.key) return {
                            id: l,
                            list: m,
                            index: h,
                            U: t
                        }
                    }
                return {
                    id: l,
                    list: m,
                    index: -1,
                    U: void 0
                }
            },
            e = function(h, k) {
                var l = h[1];
                return ea(function() {
                    if (l) {
                        for (; l.head != h[1];) l = l.Ma;
                        for (; l.next != l.head;) return l =
                            l.next, {
                                done: !1,
                                value: k(l)
                            };
                        l = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var h = {};
                return h.Ma = h.next = h.head = h
            },
            g = 0;
        return c
    });
    p("Set", function(a) {
        if (function() {
                if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function") return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(u([c]));
                    if (!d.has(c) || d.size != 1 || d.add(c) != d || d.size != 1 || d.add({
                            x: 4
                        }) != d || d.size != 2) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || f.value[0].x != 4 || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.xa = new Map;
            if (c) {
                c =
                    u(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.xa.size
        };
        b.prototype.add = function(c) {
            c = c === 0 ? 0 : c;
            this.xa.set(c, c);
            this.size = this.xa.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.xa.delete(c);
            this.size = this.xa.size;
            return c
        };
        b.prototype.clear = function() {
            this.xa.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.xa.has(c)
        };
        b.prototype.entries = function() {
            return this.xa.entries()
        };
        b.prototype.values = function() {
            return this.xa.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.xa.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    });
    p("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Ha(this, function(b, c) {
                return [b, c]
            })
        }
    });
    var Ia = function(a, b, c) {
        if (a == null) throw new TypeError("m`" + c);
        if (b instanceof RegExp) throw new TypeError("n`" + c);
        return a + ""
    };
    p("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Ia(this, b, "startsWith");
            b += "";
            var e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    });
    p("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return typeof b !== "number" ? !1 : !isNaN(b) && b !== Infinity && b !== -Infinity
        }
    });
    p("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = Ia(this, null, "repeat");
            if (b < 0 || b > 1342177279) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    });
    p("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    p("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (c < 0 && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    p("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return Ia(this, b, "includes").indexOf(b, c || 0) !== -1
        }
    });
    p("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ja(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    p("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    p("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    });
    p("Number.MIN_SAFE_INTEGER", function() {
        return -9007199254740991
    });
    p("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = c != null ? c : function(h) {
                return h
            };
            var e = [],
                f = typeof Symbol != "undefined" && Symbol.iterator && b[Symbol.iterator];
            if (typeof f == "function") {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    });
    p("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return Number.isFinite(b) ? b === Math.floor(b) : !1
        }
    });
    p("Number.isSafeInteger", function(a) {
        return a ? a : function(b) {
            return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER
        }
    });
    p("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || b === Infinity || b === -Infinity || b === 0) return b;
            var c = Math.floor(Math.abs(b));
            return b < 0 ? -c : c
        }
    });
    p("Math.log2", function(a) {
        return a ? a : function(b) {
            return Math.log(b) / Math.LN2
        }
    });
    p("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return typeof b === "number" && isNaN(b)
        }
    });
    p("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Ha(this, function(b, c) {
                return c
            })
        }
    });
    p("Array.prototype.fill", function(a) {
        return a ? a : function(b, c, d) {
            var e = this.length || 0;
            c < 0 && (c = Math.max(0, e + c));
            if (d == null || d > e) d = e;
            d = Number(d);
            d < 0 && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++) this[c] = b;
            return this
        }
    });
    var Ja = function(a) {
        return a ? a : Array.prototype.fill
    };
    p("Int8Array.prototype.fill", Ja);
    p("Uint8Array.prototype.fill", Ja);
    p("Uint8ClampedArray.prototype.fill", Ja);
    p("Int16Array.prototype.fill", Ja);
    p("Uint16Array.prototype.fill", Ja);
    p("Int32Array.prototype.fill", Ja);
    p("Uint32Array.prototype.fill", Ja);
    p("Float32Array.prototype.fill", Ja);
    p("Float64Array.prototype.fill", Ja);
    p("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = Ia(this, null, "padStart");
            b -= d.length;
            c = c !== void 0 ? String(c) : " ";
            return (b > 0 && c ? c.repeat(Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    });
    p("Array.prototype.flat", function(a) {
        return a ? a : function(b) {
            b = b === void 0 ? 1 : b;
            var c = [];
            Array.prototype.forEach.call(this, function(d) {
                Array.isArray(d) && b > 0 ? (d = Array.prototype.flat.call(d, b - 1), c.push.apply(c, d)) : c.push(d)
            });
            return c
        }
    });
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var Ka = this || self,
        La = function(a, b) {
            a: {
                var c = ["CLOSURE_FLAGS"];
                for (var d = Ka, e = 0; e < c.length; e++)
                    if (d = d[c[e]], d == null) {
                        c = null;
                        break a
                    }
                c = d
            }
            a = c && c[a];
            return a != null ? a : b
        },
        Ma = function(a) {
            var b = typeof a;
            return b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null"
        },
        Na = function(a) {
            var b = Ma(a);
            return b == "array" || b == "object" && typeof a.length == "number"
        },
        Oa = function(a) {
            var b = typeof a;
            return b == "object" && a != null || b == "function"
        },
        Pa = function(a) {
            return a
        },
        Qa = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.Fi = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.xj = function(d, e, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
                return b.prototype[e].apply(d, g)
            }
        };
    var Ra = function() {
        this.xg = 0
    };
    Ra.prototype.Wb = function(a, b) {
        var c = this;
        return function() {
            var d = C.apply(0, arguments);
            c.xg = a;
            return b.apply(null, x(d))
        }
    };
    var Ua = function() {
            var a = {};
            this.ya = (a[3] = [], a[2] = [], a[1] = [], a);
            this.qe = !1
        },
        Wa = function(a, b, c) {
            var d = Va(a, c);
            a.ya[c].push(b);
            d && a.ya[c].length === 1 && a.flush()
        },
        Va = function(a, b) {
            return Object.keys(a.ya).map(function(c) {
                return Number(c)
            }).filter(function(c) {
                return !isNaN(c) && c > b
            }).every(function(c) {
                return a.ya[c].length === 0
            })
        };
    Ua.prototype.flush = function() {
        if (!this.qe) {
            this.qe = !0;
            try {
                for (; Object.values(this.ya).some(function(a) {
                        return a.length > 0
                    });) Xa(this, 3), Xa(this, 2), Xa(this, 1)
            } catch (a) {
                throw Object.values(this.ya).forEach(function(b) {
                    return void b.splice(0, b.length)
                }), a;
            } finally {
                this.qe = !1
            }
        }
    };
    var Xa = function(a, b) {
        for (; Va(a, b) && a.ya[b].length > 0;) a.ya[b][0](), a.ya[b].shift()
    };
    da.Object.defineProperties(Ua.prototype, {
        jg: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return Object.values(this.ya).some(function(a) {
                    return a.length > 0
                })
            }
        }
    });
    var Ya = function(a, b) {
        return a.toLowerCase().indexOf(b.toLowerCase()) != -1
    };
    /*

     Copyright Google LLC
     SPDX-License-Identifier: Apache-2.0
    */
    var Za = {};
    var $a = globalThis.trustedTypes,
        ab;

    function bb() {
        var a = null;
        if (!$a) return a;
        try {
            var b = function(c) {
                return c
            };
            a = $a.createPolicy("goog#html", {
                createHTML: b,
                createScript: b,
                createScriptURL: b
            })
        } catch (c) {
            throw c;
        }
        return a
    };
    var cb = function(a) {
        if (Za !== Za) throw Error("o");
        this.gg = a
    };
    cb.prototype.toString = function() {
        return this.gg + ""
    };

    function db(a) {
        ab === void 0 && (ab = bb());
        var b = ab;
        return new cb(b ? b.createScriptURL(a) : a)
    };
    var gb = ia([""]),
        hb = ha(["\x00"], ["\\0"]),
        ib = ha(["\n"], ["\\n"]),
        jb = ha(["\x00"], ["\\u0000"]),
        kb = ia([""]),
        lb = ha(["\x00"], ["\\0"]),
        mb = ha(["\n"], ["\\n"]),
        nb = ha(["\x00"], ["\\u0000"]);

    function ob(a) {
        return Object.isFrozen(a) && Object.isFrozen(a.raw)
    }

    function pb(a) {
        return a.toString().indexOf("`") === -1
    }
    var qb = pb(function(a) {
            return a(gb)
        }) || pb(function(a) {
            return a(hb)
        }) || pb(function(a) {
            return a(ib)
        }) || pb(function(a) {
            return a(jb)
        }),
        rb = ob(kb) && ob(lb) && ob(mb) && ob(nb);
    var sb = function(a) {
        if (Za !== Za) throw Error("o");
        this.hi = a
    };
    sb.prototype.toString = function() {
        return this.hi
    };
    new sb("about:blank");
    new sb("about:invalid#zClosurez");
    var tb = [],
        ub = function(a) {
            console.warn("q`" + a)
        };
    tb.indexOf(ub) === -1 && tb.push(ub);

    function xb(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, xb);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        b !== void 0 && (this.cause = b)
    }
    Qa(xb, Error);
    xb.prototype.name = "CustomError";
    var yb;

    function zb(a, b) {
        var c = xb.call;
        a = a.split("%s");
        for (var d = "", e = a.length - 1, f = 0; f < e; f++) d += a[f] + (f < b.length ? b[f] : "%s");
        c.call(xb, this, d + a[e])
    }
    Qa(zb, xb);
    zb.prototype.name = "AssertionError";

    function Ab(a, b, c, d) {
        var e = "Assertion failed";
        if (c) {
            e += ": " + c;
            var f = d
        } else a && (e += ": " + a, f = b);
        throw new zb("" + e, f || []);
    }
    var E = function(a, b, c) {
            a || Ab("", null, b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        Bb = function(a, b, c) {
            a == null && Ab("Expected to exist: %s.", [a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        Cb = function(a, b) {
            throw new zb("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
        },
        Db = function(a, b, c) {
            typeof a !== "number" && Ab("Expected number but got %s: %s.", [Ma(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        Eb = function(a, b, c) {
            typeof a !== "string" && Ab("Expected string but got %s: %s.", [Ma(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        Fb = function(a, b, c) {
            typeof a !== "function" && Ab("Expected function but got %s: %s.", [Ma(a), a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        Gb = function(a, b, c) {
            Oa(a) || Ab("Expected object but got %s: %s.", [Ma(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        Hb = function(a, b, c) {
            Array.isArray(a) || Ab("Expected array but got %s: %s.", [Ma(a), a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        Jb = function(a, b, c, d) {
            a instanceof b || Ab("Expected instanceof %s but got %s.", [Ib(b), Ib(a)], c, Array.prototype.slice.call(arguments, 3));
            return a
        };

    function Ib(a) {
        return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : a === null ? "null" : typeof a
    };
    var Kb = Array.prototype.forEach ? function(a, b) {
            E(a.length != null);
            Array.prototype.forEach.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
        },
        Lb = Array.prototype.map ? function(a, b) {
            E(a.length != null);
            return Array.prototype.map.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = Array(c), e = typeof a === "string" ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        },
        Mb = Array.prototype.some ? function(a, b) {
            E(a.length !=
                null);
            return Array.prototype.some.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        };

    function Nb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Ob(a) {
        var b = a.length;
        if (b > 0) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Pb(a, b, c) {
        if (!Na(a) || !Na(b) || a.length != b.length) return !1;
        var d = a.length;
        c = c || Qb;
        for (var e = 0; e < d; e++)
            if (!c(a[e], b[e])) return !1;
        return !0
    }

    function Qb(a, b) {
        return a === b
    }

    function Rb(a, b) {
        return Nb.apply([], Lb(a, b))
    };
    var Sb = function(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    var Tb = function(a, b) {
        this.name = a;
        this.value = b
    };
    Tb.prototype.toString = function() {
        return this.name
    };
    var Ub = new Tb("OFF", Infinity),
        Vb = new Tb("WARNING", 900),
        Wb = new Tb("INFO", 800),
        Xb = new Tb("CONFIG", 700),
        Yb = function() {
            this.Tc = 0;
            this.clear()
        },
        Zb;
    Yb.prototype.clear = function() {
        this.H = Array(this.Tc);
        this.nf = -1;
        this.Uf = !1
    };
    var $b = function(a, b, c) {
        this.reset(a || Ub, b, c, void 0, void 0)
    };
    $b.prototype.reset = function(a, b, c, d) {
        d || Date.now();
        this.Yh = b
    };
    $b.prototype.getMessage = function() {
        return this.Yh
    };
    var ac = function(a, b) {
            this.level = null;
            this.th = [];
            this.parent = (b === void 0 ? null : b) || null;
            this.children = [];
            this.Ph = {
                Ga: function() {
                    return a
                }
            }
        },
        bc = function(a) {
            if (a.level) return a.level;
            if (a.parent) return bc(a.parent);
            Cb("Root logger has no level set.");
            return Ub
        },
        cc = function(a, b) {
            for (; a;) a.th.forEach(function(c) {
                c(b)
            }), a = a.parent
        },
        ec = function() {
            this.entries = {};
            var a = new ac("");
            a.level = Xb;
            this.entries[""] = a
        },
        fc, gc = function(a, b, c) {
            var d = a.entries[b];
            if (d) return c !== void 0 && (d.level = c), d;
            d = b.lastIndexOf(".");
            d = b.slice(0, Math.max(d, 0));
            d = gc(a, d);
            var e = new ac(b, d);
            a.entries[b] = e;
            d.children.push(e);
            c !== void 0 && (e.level = c);
            return e
        },
        hc = function() {
            fc || (fc = new ec);
            return fc
        },
        jc = function(a) {
            var b = ic;
            if (b) {
                var c = a,
                    d = Vb;
                if (a = b)
                    if (a = b && d) {
                        a = d.value;
                        var e = b ? bc(gc(hc(), b.Ga())) : Ub;
                        a = a >= e.value
                    }
                if (a) {
                    d = d || Ub;
                    a = gc(hc(), b.Ga());
                    typeof c === "function" && (c = c());
                    Zb || (Zb = new Yb);
                    e = Zb;
                    b = b.Ga();
                    if (e.Tc > 0) {
                        var f = (e.nf + 1) % e.Tc;
                        e.nf = f;
                        e.Uf ? (e = e.H[f], e.reset(d, c, b), b = e) : (e.Uf = f == e.Tc - 1, b = e.H[f] = new $b(d, c, b))
                    } else b = new $b(d,
                        c, b);
                    cc(a, b)
                }
            }
        };
    var kc = function() {
        this.names = new Map
    };
    kc.prototype.Ga = function(a) {
        var b = this.names.get(a);
        if (b) return b;
        var c;
        b = (c = a.description) != null ? c : Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ Date.now()).toString(36);
        this.names.set(a, b);
        return b
    };
    /*


     Copyright (c) 2015-2018 Google, Inc., Netflix, Inc., Microsoft Corp. and contributors
     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at
         http://www.apache.org/licenses/LICENSE-2.0
     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
    function lc(a) {
        a = a(function(b) {
            b.stack = Error().stack
        });
        a.prototype = Object.create(Error.prototype);
        return a.prototype.constructor = a
    };
    var mc = lc(function(a) {
        return function(b) {
            a(this);
            this.message = b ? b.length + " errors occurred during unsubscription:\n" + b.map(function(c, d) {
                return d + 1 + ") " + c.toString()
            }).join("\n  ") : "";
            this.name = "UnsubscriptionError";
            this.errors = b
        }
    });

    function nc(a, b) {
        a && (b = a.indexOf(b), 0 <= b && a.splice(b, 1))
    };

    function G(a) {
        return typeof a === "function"
    };
    var oc = function(a) {
        this.zh = a;
        this.closed = !1;
        this.Yb = this.Ab = null
    };
    n = oc.prototype;
    n.unsubscribe = function() {
        if (!this.closed) {
            this.closed = !0;
            var a = this.Ab;
            if (Array.isArray(a))
                for (var b = u(a), c = b.next(); !c.done; c = b.next()) c.value.remove(this);
            else a == null || a.remove(this);
            b = this.zh;
            if (G(b)) try {
                b()
            } catch (f) {
                var d = f instanceof mc ? f.errors : [f]
            }
            var e = this.Yb;
            if (e)
                for (this.Yb = null, b = u(e), c = b.next(); !c.done; c = b.next()) {
                    c = c.value;
                    try {
                        G(c) ? c() : c.unsubscribe()
                    } catch (f) {
                        c = void 0, d = (c = d) != null ? c : [], f instanceof mc ? d = [].concat(x(d), x(f.errors)) : d.push(f)
                    }
                }
            if (d) throw new mc(d);
        }
    };
    n.add = function(a) {
        if (a && a !== this)
            if (this.closed) G(a) ? a() : a.unsubscribe();
            else {
                if (a instanceof oc) {
                    if (a.closed || a.Lg(this)) return;
                    a.Kg(this)
                }
                var b;
                (this.Yb = (b = this.Yb) != null ? b : []).push(a)
            }
    };
    n.Lg = function(a) {
        var b = this.Ab;
        return b === a || Array.isArray(b) && b.includes(a)
    };
    n.Kg = function(a) {
        var b = this.Ab;
        this.Ab = Array.isArray(b) ? (b.push(a), b) : b ? [b, a] : a
    };
    n.Mg = function(a) {
        var b = this.Ab;
        b === a ? this.Ab = null : Array.isArray(b) && nc(b, a)
    };
    n.remove = function(a) {
        var b = this.Yb;
        b && nc(b, a);
        a instanceof oc && a.Mg(this)
    };
    var pc = new oc;
    pc.closed = !0;
    oc.EMPTY = pc;

    function qc(a) {
        return a instanceof oc || a && "closed" in a && G(a.remove) && G(a.add) && G(a.unsubscribe)
    };
    var rc = function() {
        setTimeout.apply(null, x(C.apply(0, arguments)))
    };

    function sc() {};

    function tc(a) {
        rc(function() {
            throw a;
        })
    };
    var uc = function(a) {
        oc.call(this);
        this.P = !1;
        this.destination = a instanceof uc ? a : new vc(!a || G(a) ? {
            next: a != null ? a : void 0
        } : a);
        qc(a) && a.add(this)
    };
    A(uc, oc);
    uc.EMPTY = oc.EMPTY;
    uc.create = function(a, b, c) {
        return new wc(a, b, c)
    };
    n = uc.prototype;
    n.next = function(a) {
        this.P || this.Fd(a)
    };
    n.error = function(a) {
        this.P || (this.P = !0, this.Ye(a))
    };
    n.complete = function() {
        this.P || (this.P = !0, this.Mc())
    };
    n.unsubscribe = function() {
        this.closed || (this.P = !0, oc.prototype.unsubscribe.call(this))
    };
    n.Fd = function(a) {
        this.destination.next(a)
    };
    n.Ye = function(a) {
        this.destination.error(a);
        this.unsubscribe()
    };
    n.Mc = function() {
        this.destination.complete();
        this.unsubscribe()
    };
    var vc = function(a) {
        this.xe = a
    };
    vc.prototype.next = function(a) {
        var b = this.xe;
        if (b.next) try {
            b.next(a)
        } catch (c) {
            tc(c)
        }
    };
    vc.prototype.error = function(a) {
        var b = this.xe;
        if (b.error) try {
            b.error(a)
        } catch (c) {
            tc(c)
        } else tc(a)
    };
    vc.prototype.complete = function() {
        var a = this.xe;
        if (a.complete) try {
            a.complete()
        } catch (b) {
            tc(b)
        }
    };
    var wc = function(a, b, c) {
        uc.call(this);
        this.destination = new vc(G(a) || !a ? {
            next: a != null ? a : void 0,
            error: b != null ? b : void 0,
            complete: c != null ? c : void 0
        } : a)
    };
    A(wc, uc);
    wc.EMPTY = uc.EMPTY;
    wc.create = uc.create;
    var xc = typeof Symbol === "function" && Symbol.observable || "@@observable";

    function yc(a) {
        return a
    };

    function H() {
        return zc(C.apply(0, arguments))
    }

    function zc(a) {
        return a.length === 0 ? yc : a.length === 1 ? a[0] : function(b) {
            return a.reduce(function(c, d) {
                return d(c)
            }, b)
        }
    };
    var I = function(a) {
        a && (this.Aa = a)
    };
    n = I.prototype;
    n.qb = function(a) {
        var b = new I;
        b.source = this;
        b.operator = a;
        return b
    };
    n.subscribe = function(a, b, c) {
        a = a && a instanceof uc || a && G(a.next) && G(a.error) && G(a.complete) && qc(a) ? a : new wc(a, b, c);
        b = this.operator;
        c = this.source;
        a.add(b ? b.call(a, c) : c ? this.Aa(a) : this.Hd(a));
        return a
    };
    n.Hd = function(a) {
        try {
            return this.Aa(a)
        } catch (b) {
            a.error(b)
        }
    };
    n.forEach = function(a, b) {
        var c = this;
        b = Ac(b);
        return new b(function(d, e) {
            var f = c.subscribe(function(g) {
                try {
                    a(g)
                } catch (h) {
                    e(h), f == null || f.unsubscribe()
                }
            }, e, d)
        })
    };
    n.Aa = function(a) {
        var b;
        return (b = this.source) == null ? void 0 : b.subscribe(a)
    };
    I.prototype[xc] = function() {
        return this
    };
    I.prototype.g = function() {
        var a = C.apply(0, arguments);
        return a.length ? zc(a)(this) : this
    };
    I.create = function(a) {
        return new I(a)
    };

    function Ac(a) {
        var b;
        return (b = a != null ? a : void 0) != null ? b : Promise
    };
    var Bc = lc(function(a) {
        return function() {
            a(this);
            this.name = "ObjectUnsubscribedError";
            this.message = "object unsubscribed"
        }
    });
    var J = function() {
        this.Nb = [];
        this.dd = this.P = this.closed = !1;
        this.Je = null
    };
    A(J, I);
    n = J.prototype;
    n.qb = function(a) {
        var b = new Ec(this, this);
        b.operator = a;
        return b
    };
    n.eb = function() {
        if (this.closed) throw new Bc;
    };
    n.next = function(a) {
        this.eb();
        if (!this.P) {
            var b = this.Nb.slice();
            b = u(b);
            for (var c = b.next(); !c.done; c = b.next()) c.value.next(a)
        }
    };
    n.error = function(a) {
        this.eb();
        if (!this.P) {
            this.dd = this.P = !0;
            this.Je = a;
            for (var b = this.Nb; b.length;) b.shift().error(a)
        }
    };
    n.complete = function() {
        this.eb();
        if (!this.P) {
            this.P = !0;
            for (var a = this.Nb; a.length;) a.shift().complete()
        }
    };
    n.unsubscribe = function() {
        this.P = this.closed = !0;
        this.Nb = null
    };
    n.Hd = function(a) {
        this.eb();
        return I.prototype.Hd.call(this, a)
    };
    n.Aa = function(a) {
        this.eb();
        this.Xe(a);
        return this.af(a)
    };
    n.af = function(a) {
        var b = this,
            c = this.P,
            d = this.Nb;
        return this.dd || c ? oc.EMPTY : (d.push(a), new oc(function() {
            return nc(b.Nb, a)
        }))
    };
    n.Xe = function(a) {
        var b = this.Je,
            c = this.P;
        this.dd ? a.error(b) : c && a.complete()
    };
    n.S = function() {
        var a = new I;
        a.source = this;
        return a
    };
    J.create = function(a, b) {
        return new Ec(a, b)
    };
    var Ec = function(a, b) {
        J.call(this);
        this.destination = a;
        this.source = b
    };
    A(Ec, J);
    Ec.create = J.create;
    Ec.prototype.next = function(a) {
        var b, c;
        (b = this.destination) == null || (c = b.next) == null || c.call(b, a)
    };
    Ec.prototype.error = function(a) {
        var b, c;
        (b = this.destination) == null || (c = b.error) == null || c.call(b, a)
    };
    Ec.prototype.complete = function() {
        var a, b;
        (a = this.destination) == null || (b = a.complete) == null || b.call(a)
    };
    Ec.prototype.Aa = function(a) {
        var b, c;
        return (c = (b = this.source) == null ? void 0 : b.subscribe(a)) != null ? c : oc.EMPTY
    };
    var Fc = function(a) {
        J.call(this);
        this.Id = a
    };
    A(Fc, J);
    Fc.create = J.create;
    Fc.prototype.Aa = function(a) {
        var b = J.prototype.Aa.call(this, a);
        !b.closed && a.next(this.Id);
        return b
    };
    Fc.prototype.getValue = function() {
        var a = this.Je,
            b = this.Id;
        if (this.dd) throw a;
        this.eb();
        return b
    };
    Fc.prototype.next = function(a) {
        J.prototype.next.call(this, this.Id = a)
    };
    da.Object.defineProperties(Fc.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.getValue()
            }
        }
    });
    var Gc = new I(function(a) {
        return a.complete()
    });

    function Hc(a, b) {
        return new I(function(c) {
            var d = 0;
            return b.D(function() {
                d === a.length ? c.complete() : (c.next(a[d++]), c.closed || this.D())
            })
        })
    };

    function Ic(a, b) {
        if (!a) throw Error("r");
        return new I(function(c) {
            var d = new oc;
            d.add(b.D(function() {
                var e = a[Symbol.asyncIterator]();
                d.add(b.D(function() {
                    var f = this;
                    e.next().then(function(g) {
                        g.done ? c.complete() : (c.next(g.value), f.D())
                    })
                }))
            }));
            return d
        })
    };
    var Jc = typeof Symbol === "function" && Symbol.iterator ? Symbol.iterator : "@@iterator";

    function Kc(a, b, c) {
        b = b.D(function() {
            try {
                c.call(this)
            } catch (d) {
                a.error(d)
            }
        }, 0);
        a.add(b)
    };

    function Lc(a, b) {
        return new I(function(c) {
            var d;
            c.add(b.D(function() {
                d = a[Jc]();
                Kc(c, b, function() {
                    var e = d.next(),
                        f = e.value;
                    e.done ? c.complete() : (c.next(f), this.D())
                })
            }));
            return function() {
                var e;
                return G((e = d) == null ? void 0 : e.return) && d.return()
            }
        })
    };

    function Mc(a, b) {
        return new I(function(c) {
            var d = new oc;
            d.add(b.D(function() {
                var e = a[xc]();
                d.add(e.subscribe({
                    next: function(f) {
                        d.add(b.D(function() {
                            return c.next(f)
                        }))
                    },
                    error: function(f) {
                        d.add(b.D(function() {
                            return c.error(f)
                        }))
                    },
                    complete: function() {
                        d.add(b.D(function() {
                            return c.complete()
                        }))
                    }
                }))
            }));
            return d
        })
    };

    function Nc(a, b) {
        return new I(function(c) {
            return b.D(function() {
                return a.then(function(d) {
                    c.add(b.D(function() {
                        c.next(d);
                        c.add(b.D(function() {
                            return c.complete()
                        }))
                    }))
                }, function(d) {
                    c.add(b.D(function() {
                        return c.error(d)
                    }))
                })
            })
        })
    };
    var Oc = function(a) {
        return a && typeof a.length === "number" && typeof a !== "function"
    };

    function Pc(a) {
        return new TypeError("s`" + (a !== null && typeof a === "object" ? "an invalid object" : "'" + a + "'"))
    };

    function Qc(a, b) {
        if (a != null) {
            if (G(a[xc])) return Mc(a, b);
            if (Oc(a)) return Hc(a, b);
            if (G(a == null ? void 0 : a.then)) return Nc(a, b);
            if (Symbol.asyncIterator && G(a == null ? void 0 : a[Symbol.asyncIterator])) return Ic(a, b);
            if (G(a == null ? void 0 : a[Jc])) return Lc(a, b)
        }
        throw Pc(a);
    };

    function Rc(a, b) {
        return b ? Qc(a, b) : Sc(a)
    }

    function Sc(a) {
        if (a instanceof I) return a;
        if (a != null) {
            if (G(a[xc])) return Tc(a);
            if (Oc(a)) return Uc(a);
            if (G(a == null ? void 0 : a.then)) return Vc(a);
            if (Symbol.asyncIterator && G(a == null ? void 0 : a[Symbol.asyncIterator])) return Wc(a);
            if (G(a == null ? void 0 : a[Jc])) return Xc(a)
        }
        throw Pc(a);
    }

    function Tc(a) {
        return new I(function(b) {
            var c = a[xc]();
            if (G(c.subscribe)) return c.subscribe(b);
            throw new TypeError("t");
        })
    }

    function Uc(a) {
        return new I(function(b) {
            for (var c = 0; c < a.length && !b.closed; c++) b.next(a[c]);
            b.complete()
        })
    }

    function Vc(a) {
        return new I(function(b) {
            a.then(function(c) {
                b.closed || (b.next(c), b.complete())
            }, function(c) {
                return b.error(c)
            }).then(null, tc)
        })
    }

    function Xc(a) {
        return new I(function(b) {
            for (var c = a[Jc](); !b.closed;) {
                var d = c.next(),
                    e = d.value;
                d.done ? b.complete() : b.next(e)
            }
            return function() {
                return G(c == null ? void 0 : c.return) && c.return()
            }
        })
    }

    function Wc(a) {
        return new I(function(b) {
            Yc(a, b).catch(function(c) {
                return b.error(c)
            })
        })
    }

    function Yc(a, b) {
        var c, d, e, f, g, h;
        return Fa(function(k) {
            switch (k.s) {
                case 1:
                    ta(k, 2, 3);
                    var l = a[Symbol.asyncIterator];
                    f = l !== void 0 ? l.call(a) : new Ga(u(a));
                case 5:
                    return sa(k, f.next(), 8);
                case 8:
                    d = k.ca;
                    if (d.done) {
                        k.Ja(3);
                        break
                    }
                    g = d.value;
                    b.next(g);
                    k.Ja(5);
                    break;
                case 3:
                    va(k);
                    k.va = 0;
                    k.Fa = 9;
                    if (!d || d.done || !(e = f.return)) {
                        k.Ja(9);
                        break
                    }
                    return sa(k, e.call(f), 9);
                case 9:
                    va(k, 0, 0, 1);
                    if (c) throw c.error;
                    wa(k, 10, 1);
                    break;
                case 10:
                    wa(k, 4);
                    break;
                case 2:
                    h = ua(k);
                    c = {
                        error: h
                    };
                    k.Ja(3);
                    break;
                case 4:
                    b.complete(), k.s = 0
            }
        })
    };

    function Zc(a, b) {
        return b ? Hc(a, b) : Uc(a)
    };

    function $c(a) {
        return G(a[a.length - 1]) ? a.pop() : void 0
    }

    function ad(a) {
        var b = a[a.length - 1];
        return b && G(b.D) ? a.pop() : void 0
    };

    function K() {
        var a = C.apply(0, arguments),
            b = ad(a);
        return b ? Hc(a, b) : Zc(a)
    };

    function bd(a) {
        var b = G(a) ? a : function() {
            return a
        };
        return new I(function(c) {
            return c.error(b())
        })
    };
    var cd = {
        now: function() {
            return (cd.eh || Date).now()
        },
        eh: void 0
    };
    var dd = function(a, b, c) {
        a = a === void 0 ? Infinity : a;
        b = b === void 0 ? Infinity : b;
        c = c === void 0 ? cd : c;
        J.call(this);
        this.bufferSize = a;
        this.Eg = b;
        this.yg = c;
        this.buffer = [];
        this.je = b === Infinity;
        this.bufferSize = Math.max(1, a);
        this.Eg = Math.max(1, b)
    };
    A(dd, J);
    dd.create = J.create;
    dd.prototype.next = function(a) {
        var b = this.buffer,
            c = this.je,
            d = this.yg,
            e = this.Eg;
        this.P || (b.push(a), !c && b.push(d.now() + e));
        ed(this);
        J.prototype.next.call(this, a)
    };
    dd.prototype.Aa = function(a) {
        this.eb();
        ed(this);
        for (var b = this.af(a), c = this.je, d = this.buffer.slice(), e = 0; e < d.length && !a.closed; e += c ? 1 : 2) a.next(d[e]);
        this.Xe(a);
        return b
    };
    var ed = function(a) {
        var b = a.bufferSize,
            c = a.yg,
            d = a.buffer;
        a = a.je;
        var e = (a ? 1 : 2) * b;
        b < Infinity && e < d.length && d.splice(0, d.length - e);
        if (!a) {
            b = c.now();
            c = 0;
            for (a = 1; a < d.length && d[a] <= b; a += 2) c = a;
            c && d.splice(0, c + 1)
        }
    };
    var gd = function(a, b) {
        b = b === void 0 ? fd : b;
        this.xi = a;
        this.now = b
    };
    gd.prototype.D = function(a, b, c) {
        b = b === void 0 ? 0 : b;
        return (new this.xi(this, a)).D(c, b)
    };
    var fd = cd.now;
    var hd = lc(function(a) {
        return function() {
            a(this);
            this.name = "EmptyError";
            this.message = "no elements in sequence"
        }
    });

    function id(a) {
        return new Promise(function(b, c) {
            var d = new wc({
                next: function(e) {
                    b(e);
                    d.unsubscribe()
                },
                error: c,
                complete: function() {
                    c(new hd)
                }
            });
            a.subscribe(d)
        })
    };
    var L = function(a, b, c, d, e) {
        uc.call(this, a);
        this.ei = e;
        b && (this.Fd = function(f) {
            try {
                b(f)
            } catch (g) {
                this.destination.error(g)
            }
        });
        c && (this.Ye = function(f) {
            try {
                c(f)
            } catch (g) {
                this.destination.error(g)
            }
            this.unsubscribe()
        });
        d && (this.Mc = function() {
            try {
                d()
            } catch (f) {
                this.destination.error(f)
            }
            this.unsubscribe()
        })
    };
    A(L, uc);
    L.EMPTY = uc.EMPTY;
    L.create = uc.create;
    L.prototype.unsubscribe = function() {
        var a;
        this.closed || (a = this.ei) != null && a.call(this);
        uc.prototype.unsubscribe.call(this)
    };

    function jd(a) {
        return function(b) {
            if (G(b == null ? void 0 : b.qb)) return b.qb(function(c) {
                try {
                    return a(c, this)
                } catch (d) {
                    this.error(d)
                }
            });
            throw new TypeError("u");
        }
    };

    function kd() {
        return jd(function(a, b) {
            var c = null;
            a.Nc++;
            var d = new L(b, void 0, void 0, void 0, function() {
                if (!a || a.Nc <= 0 || 0 < --a.Nc) c = null;
                else {
                    var e = a.zb,
                        f = c;
                    c = null;
                    !e || f && e !== f || e.unsubscribe();
                    b.unsubscribe()
                }
            });
            a.subscribe(d);
            d.closed || (c = a.connect())
        })
    };
    var md = function(a, b) {
        this.source = a;
        this.sg = b;
        this.Oc = null;
        this.Nc = 0;
        this.zb = null
    };
    A(md, I);
    md.create = I.create;
    md.prototype.Aa = function(a) {
        return nd(this).subscribe(a)
    };
    var nd = function(a) {
        var b = a.Oc;
        if (!b || b.P) a.Oc = a.sg();
        return a.Oc
    };
    md.prototype.Gd = function() {
        this.Nc = 0;
        var a = this.zb;
        this.Oc = this.zb = null;
        a == null || a.unsubscribe()
    };
    md.prototype.connect = function() {
        var a = this,
            b = this.zb;
        if (!b) {
            b = this.zb = new oc;
            var c = nd(this);
            b.add(this.source.subscribe(new L(c, void 0, function(d) {
                a.Gd();
                c.error(d)
            }, function() {
                a.Gd();
                c.complete()
            }, function() {
                return a.Gd()
            })));
            b.closed && (this.zb = null, b = oc.EMPTY)
        }
        return b
    };

    function od() {
        var a = pd;
        var b = b === void 0 ? 0 : b;
        return jd(function(c, d) {
            d.add(a.D(function() {
                return c.subscribe(d)
            }, b))
        })
    };

    function M(a) {
        return jd(function(b, c) {
            var d = 0;
            b.subscribe(new L(c, function(e) {
                c.next(a.call(void 0, e, d++))
            }))
        })
    };
    var qd = Array.isArray;

    function rd(a) {
        return M(function(b) {
            return qd(b) ? a.apply(null, x(b)) : a(b)
        })
    };
    var sd = Array.isArray,
        td = Object,
        ud = td.getPrototypeOf,
        vd = td.prototype,
        wd = td.keys;

    function xd(a) {
        if (a.length === 1) {
            var b = a[0];
            if (sd(b)) return {
                args: b,
                keys: null
            };
            if (b && typeof b === "object" && ud(b) === vd) return a = wd(b), {
                args: a.map(function(c) {
                    return b[c]
                }),
                keys: a
            }
        }
        return {
            args: a,
            keys: null
        }
    };

    function O() {
        var a = C.apply(0, arguments),
            b = ad(a),
            c = $c(a);
        a = xd(a);
        var d = a.args,
            e = a.keys;
        if (d.length === 0) return Rc([], b);
        b = new I(yd(d, b, e ? function(f) {
            for (var g = {}, h = 0; h < f.length; h++) g[e[h]] = f[h];
            return g
        } : yc));
        return c ? b.g(rd(c)) : b
    }
    var zd = function(a, b, c) {
        uc.call(this, a);
        this.Fd = b;
        this.Ci = c
    };
    A(zd, uc);
    zd.EMPTY = uc.EMPTY;
    zd.create = uc.create;
    zd.prototype.Mc = function() {
        this.Ci() ? uc.prototype.Mc.call(this) : this.unsubscribe()
    };

    function yd(a, b, c) {
        c = c === void 0 ? yc : c;
        return function(d) {
            Ad(b, function() {
                for (var e = a.length, f = Array(e), g = e, h = a.map(function() {
                        return !1
                    }), k = !0, l = {
                        lb: 0
                    }; l.lb < e; l = {
                        lb: l.lb
                    }, l.lb++) Ad(b, function(m) {
                    return function() {
                        Rc(a[m.lb], b).subscribe(new zd(d, function(t) {
                            f[m.lb] = t;
                            k && (h[m.lb] = !0, k = !h.every(yc));
                            k || d.next(c(f.slice()))
                        }, function() {
                            return --g === 0
                        }))
                    }
                }(l), d)
            }, d)
        }
    }

    function Ad(a, b, c) {
        a ? c.add(a.D(b)) : b()
    };

    function Bd(a, b, c, d) {
        var e = [],
            f = 0,
            g = 0,
            h = !1,
            k = function(l) {
                f++;
                Sc(c(l, g++)).subscribe(new L(b, function(m) {
                    b.next(m)
                }, void 0, function() {
                    f--;
                    for (var m = {}; e.length && f < d; m = {
                            hf: void 0
                        }) m.hf = e.shift(), k(m.hf);
                    !h || e.length || f || b.complete()
                }))
            };
        a.subscribe(new L(b, function(l) {
            return f < d ? k(l) : e.push(l)
        }, void 0, function() {
            h = !0;
            !h || e.length || f || b.complete()
        }));
        return function() {
            e = null
        }
    };

    function Cd(a, b) {
        var c = c === void 0 ? Infinity : c;
        if (G(b)) return Cd(function(d, e) {
            return M(function(f, g) {
                return b(d, f, e, g)
            })(Sc(a(d, e)))
        }, c);
        typeof b === "number" && (c = b);
        return jd(function(d, e) {
            return Bd(d, e, a, c)
        })
    };

    function Dd(a) {
        a = a === void 0 ? Infinity : a;
        return Cd(yc, a)
    };

    function Ed() {
        var a = C.apply(0, arguments);
        return Dd(1)(Zc(a, ad(a)))
    };

    function Fd(a) {
        return new I(function(b) {
            Sc(a()).subscribe(b)
        })
    };
    var Gd = ["addListener", "removeListener"],
        Hd = ["addEventListener", "removeEventListener"],
        Id = ["on", "off"];

    function Jd(a, b, c) {
        if (G(c)) {
            var d = c;
            c = void 0
        }
        if (d) return Jd(a, b, c).g(rd(d));
        d = u(G(a.addEventListener) && G(a.removeEventListener) ? Hd.map(function(g) {
            return function(h) {
                return a[g](b, h, c)
            }
        }) : G(a.addListener) && G(a.removeListener) ? Gd.map(Kd(a, b)) : G(a.Sj) && G(a.Fj) ? Id.map(Kd(a, b)) : []);
        var e = d.next().value,
            f = d.next().value;
        return !e && Oc(a) ? Cd(function(g) {
            return Jd(g, b, c)
        })(Zc(a)) : new I(function(g) {
            if (!e) throw new TypeError("v");
            var h = function() {
                var k = C.apply(0, arguments);
                return g.next(1 < k.length ? k : k[0])
            };
            e(h);
            return function() {
                return f(h)
            }
        })
    }

    function Kd(a, b) {
        return function(c) {
            return function(d) {
                return a[c](b, d)
            }
        }
    };
    var Ld = function() {
        oc.call(this)
    };
    A(Ld, oc);
    Ld.EMPTY = oc.EMPTY;
    Ld.prototype.D = function() {
        return this
    };
    var Md = function(a, b) {
        return setInterval.apply(null, [a, b].concat(x(C.apply(2, arguments))))
    };
    var Nd = function(a, b) {
        oc.call(this);
        this.scheduler = a;
        this.Re = b;
        this.pending = !1
    };
    A(Nd, Ld);
    Nd.EMPTY = Ld.EMPTY;
    Nd.prototype.D = function(a, b) {
        b = b === void 0 ? 0 : b;
        if (this.closed) return this;
        this.state = a;
        a = this.id;
        var c = this.scheduler;
        a != null && (this.id = Od(this, a, b));
        this.pending = !0;
        this.delay = b;
        this.id = this.id || this.Ee(c, this.id, b);
        return this
    };
    Nd.prototype.Ee = function(a, b, c) {
        c = c === void 0 ? 0 : c;
        return Md(a.flush.bind(a, this), c)
    };
    var Od = function(a, b, c) {
        c = c === void 0 ? 0 : c;
        if (c != null && a.delay === c && a.pending === !1) return b;
        clearInterval(b)
    };
    Nd.prototype.execute = function(a, b) {
        if (this.closed) return Error("w");
        this.pending = !1;
        if (a = this.Ze(a, b)) return a;
        this.pending === !1 && this.id != null && (this.id = Od(this, this.id, null))
    };
    Nd.prototype.Ze = function(a) {
        var b = !1;
        try {
            this.Re(a)
        } catch (d) {
            b = !0;
            var c = !!d && d || Error(d)
        }
        if (b) return this.unsubscribe(), c
    };
    Nd.prototype.unsubscribe = function() {
        if (!this.closed) {
            var a = this.id,
                b = this.scheduler.actions;
            this.Re = this.state = this.scheduler = null;
            this.pending = !1;
            nc(b, this);
            a != null && (this.id = Od(this, a, null));
            this.delay = null;
            Ld.prototype.unsubscribe.call(this)
        }
    };
    var Pd = function(a, b) {
        b = b === void 0 ? fd : b;
        gd.call(this, a, b);
        this.actions = [];
        this.active = !1
    };
    A(Pd, gd);
    Pd.prototype.flush = function(a) {
        var b = this.actions;
        if (this.active) b.push(a);
        else {
            var c;
            this.active = !0;
            do
                if (c = a.execute(a.state, a.delay)) break; while (a = b.shift());
            this.active = !1;
            if (c) {
                for (; a = b.shift();) a.unsubscribe();
                throw c;
            }
        }
    };

    function Qd() {
        var a = C.apply(0, arguments),
            b = ad(a);
        var c = typeof a[a.length - 1] === "number" ? a.pop() : Infinity;
        return a.length ? a.length === 1 ? Sc(a[0]) : Dd(c)(Zc(a, b)) : Gc
    };
    var Rd = new I(sc);
    var Sd = Array.isArray;

    function Td(a) {
        return a.length === 1 && Sd(a[0]) ? a[0] : a
    };

    function Ud() {
        var a = Td(C.apply(0, arguments));
        return jd(function(b, c) {
            var d = [b].concat(x(a)),
                e = function() {
                    if (!c.closed)
                        if (d.length > 0) {
                            try {
                                var f = Sc(d.shift())
                            } catch (h) {
                                e();
                                return
                            }
                            var g = new L(c, void 0, sc, sc);
                            c.add(f.subscribe(g));
                            g.add(e)
                        } else c.complete()
                };
            e()
        })
    };

    function P(a) {
        return jd(function(b, c) {
            var d = 0;
            b.subscribe(new L(c, function(e) {
                return a.call(void 0, e, d++) && c.next(e)
            }))
        })
    };

    function Vd() {
        var a = C.apply(0, arguments);
        a = Td(a);
        return a.length === 1 ? Sc(a[0]) : new I(Wd(a))
    }

    function Wd(a) {
        return function(b) {
            for (var c = [], d = {
                    Eb: 0
                }; c && !b.closed && d.Eb < a.length; d = {
                    Eb: d.Eb
                }, d.Eb++) c.push(Sc(a[d.Eb]).subscribe(new L(b, function(e) {
                return function(f) {
                    if (c) {
                        for (var g = 0; g < c.length; g++) g !== e.Eb && c[g].unsubscribe();
                        c = null
                    }
                    b.next(f)
                }
            }(d))))
        }
    };

    function Xd() {
        var a = C.apply(0, arguments),
            b = $c(a),
            c = Td(a);
        return c.length ? new I(function(d) {
            var e = c.map(function() {
                    return []
                }),
                f = c.map(function() {
                    return !1
                });
            d.add(function() {
                e = f = null
            });
            for (var g = {
                    ab: 0
                }; !d.closed && g.ab < c.length; g = {
                    ab: g.ab
                }, g.ab++) Sc(c[g.ab]).subscribe(new L(d, function(h) {
                    return function(k) {
                        e[h.ab].push(k);
                        e.every(function(l) {
                            return l.length
                        }) && (k = e.map(function(l) {
                            return l.shift()
                        }), d.next(b ? b.apply(null, x(k)) : k), e.some(function(l, m) {
                            return !l.length && f[m]
                        }) && d.complete())
                    }
                }(g), void 0,
                function(h) {
                    return function() {
                        f[h.ab] = !0;
                        !e[h.ab].length && d.complete()
                    }
                }(g)));
            return function() {
                e = f = null
            }
        }) : Gc
    };
    lc(function(a) {
        return function(b) {
            b = b === void 0 ? null : b;
            a(this);
            this.message = "Timeout has occurred";
            this.name = "TimeoutError";
            this.info = b
        }
    });
    var Yd = function(a, b) {
        Nd.call(this, a, b);
        this.scheduler = a;
        this.Re = b
    };
    A(Yd, Nd);
    Yd.EMPTY = Nd.EMPTY;
    Yd.prototype.D = function(a, b) {
        b = b === void 0 ? 0 : b;
        if (b > 0) return Nd.prototype.D.call(this, a, b);
        this.delay = b;
        this.state = a;
        this.scheduler.flush(this);
        return this
    };
    Yd.prototype.execute = function(a, b) {
        return b > 0 || this.closed ? Nd.prototype.execute.call(this, a, b) : this.Ze(a, b)
    };
    Yd.prototype.Ee = function(a, b, c) {
        c = c === void 0 ? 0 : c;
        return c != null && c > 0 || c == null && this.delay > 0 ? Nd.prototype.Ee.call(this, a, b, c) : a.flush(this)
    };
    var Zd = function() {
        Pd.apply(this, arguments)
    };
    A(Zd, Pd);
    var pd = new Zd(Yd);
    lc(function(a) {
        return function() {
            a(this);
            this.name = "ArgumentOutOfRangeError";
            this.message = "argument out of range"
        }
    });
    lc(function(a) {
        return function(b) {
            a(this);
            this.name = "NotFoundError";
            this.message = b
        }
    });
    lc(function(a) {
        return function(b) {
            a(this);
            this.name = "SequenceError";
            this.message = b
        }
    });
    var $d = function() {
        this.F = new Ra;
        this.h = new Ua;
        this.Dh = Symbol();
        this.ic = new kc
    };
    $d.prototype.ce = function() {
        return Rd
    };
    var ae = function(a, b) {
            a.Da !== null && a.Da.next(b)
        },
        be = function(a) {
            if ((typeof a === "bigint" || typeof a === "number" || typeof a === "string") && typeof BigInt === "function") return BigInt(a)
        };
    da.Object.defineProperties($d.prototype, {
        vb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Dh
            }
        }
    });
    var ce = function(a, b) {
        b = Error.call(this, b ? a + ": " + b : String(a));
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.code = a;
        this.__proto__ = ce.prototype;
        this.name = String(a)
    };
    A(ce, Error);
    var de = function(a) {
        ce.call(this, 1E3, 'sfr:"' + a + '"');
        this.Th = a;
        this.__proto__ = de.prototype
    };
    A(de, ce);
    var ee = function() {
        ce.call(this, 1003);
        this.__proto__ = ee.prototype
    };
    A(ee, ce);
    var fe = function() {
        ce.call(this, 1009);
        this.__proto__ = fe.prototype
    };
    A(fe, ce);
    var ge = function() {
        ce.call(this, 1011);
        this.__proto__ = ge.prototype
    };
    A(ge, ce);
    var he = function() {
        ce.call(this, 1007);
        this.__proto__ = ee.prototype
    };
    A(he, ce);
    var ie = function() {
        ce.call(this, 1008);
        this.__proto__ = ee.prototype
    };
    A(ie, ce);
    var je = function() {
        ce.call(this, 1001);
        this.__proto__ = je.prototype
    };
    A(je, ce);
    var ke = function(a) {
        ce.call(this, 1004, String(a));
        this.Ah = a;
        this.__proto__ = ke.prototype
    };
    A(ke, ce);
    var me = function(a) {
        ce.call(this, 1010, a);
        this.__proto__ = le.prototype
    };
    A(me, ce);
    var le = function(a) {
        ce.call(this, 1005, a);
        this.__proto__ = le.prototype
    };
    A(le, ce);
    var ne = function(a) {
        var b = C.apply(1, arguments),
            c = this;
        this.Pb = [];
        this.Pb.push(a);
        b.forEach(function(d) {
            c.Pb.push(d)
        })
    };
    ne.prototype.K = function(a) {
        return this.Pb.some(function(b) {
            return b.K(a)
        })
    };
    ne.prototype.I = function(a, b) {
        for (var c = 0; c < this.Pb.length; c++)
            if (this.Pb[c].K(b)) return this.Pb[c].I(a, b);
        throw new fe;
    };

    function oe(a) {
        var b, c, d;
        return !!a && typeof a.active === "boolean" && typeof((b = a.clock) == null ? void 0 : b.now) === "function" && ((c = a.clock) == null ? void 0 : c.timeline) !== void 0 && !((d = a.C) == null || !d.timestamp) && typeof a.Y === "function" && typeof a.ia === "function" && typeof a.pa === "function" && typeof a.map === "function" && typeof a.sa === "function"
    };
    var pe = Symbol("time-origin"),
        qe = Symbol("date"),
        re = function(a, b) {
            this.value = a;
            this.timeline = b
        },
        se = function(a, b) {
            if (b.timeline !== a.timeline) throw new he;
        },
        te = function(a, b) {
            se(a, b);
            return a.value - b.value
        };
    n = re.prototype;
    n.equals = function(a) {
        return te(this, a) === 0
    };
    n.maximum = function(a) {
        se(this, a);
        return this.value >= a.value ? this : a
    };
    n.round = function() {
        return new re(Math.round(this.value), this.timeline)
    };
    n.add = function(a) {
        return new re(this.value + a, this.timeline)
    };
    n.toString = function() {
        return String(this.value)
    };

    function ue(a) {
        function b(c) {
            return typeof c === "boolean" || typeof c === "string" || typeof c === "number" || c === void 0 || c === null
        }
        return b(a) ? !0 : Array.isArray(a) ? a.every(b) : typeof a === "object" ? Object.keys(a).every(function(c) {
            return typeof c === "string"
        }) && Object.values(a).every(function(c) {
            return Array.isArray(c) ? c.every(b) : b(c)
        }) : !1
    }

    function ve(a) {
        if (ue(a)) return a;
        if (oe(a)) return {
            C: {
                value: ve(a.C.value),
                timestamp: te(a.C.timestamp, new re(0, a.C.timestamp.timeline))
            },
            active: a.active
        };
        try {
            return JSON.parse(JSON.stringify(a))
        } catch (b) {}
        return String(a)
    };
    var we = {
        Ti: "app",
        tj: "web"
    };
    var xe = ["sessionStart", "sessionError", "sessionFinish"],
        Ae = function(a, b) {
            this.ea = a;
            this.Bd = b;
            this.ready = !1;
            this.rb = [];
            this.lg = function() {};
            this.Cg = function() {};
            this.Bf = function() {};
            this.Lf = function() {};
            this.sd = function() {}
        },
        Be = function(a, b) {
            a.lg = b
        },
        Ce = function(a, b) {
            a.Cg = b
        },
        De = function(a, b) {
            a.Bf = b
        },
        Ee = function(a, b) {
            a.Lf = b
        },
        Fe = function(a, b) {
            a.sd = b;
            a.sd(a.rb.length)
        },
        Ke = function(a) {
            for (var b = u("geometryChange impression loaded start firstQuartile midpoint thirdQuartile complete pause resume bufferStart bufferFinish skipped volumeChange playerStateChange adUserInteraction".split(" ")),
                    c = b.next(); !c.done; c = b.next()) a.ea.addEventListener(c.value, function(d) {
                Ge(a, d)
            });
            He(a.ea, function(d) {
                d.type !== "sessionStart" && Ge(a, d)
            }, a.Bd);
            He(a.ea, function(d) {
                d.type === "sessionStart" && (Ge(a, d), Ie(a), Je(a))
            }, a.Bd)
        },
        Ge = function(a, b) {
            a.rb.push(b);
            a.sd(a.rb.length);
            Je(a)
        },
        Je = function(a) {
            if (a.ready)
                for (; a.rb.length > 0;) {
                    var b = a.rb.pop();
                    b !== void 0 && (b.type === "geometryChange" ? a.Bf(b) : b.type === "impression" ? a.Lf(b) : xe.includes(b.type) ? a.lg(b) : a.Cg(b));
                    a.sd(a.rb.length)
                }
        },
        Ie = function(a) {
            a.ready || (a.ready = !0, a.rb.sort(function(b, c) {
                return c.timestamp - b.timestamp
            }))
        };

    function Le(a) {
        return jd(function(b, c) {
            var d = null,
                e = !1,
                f;
            d = b.subscribe(new L(c, void 0, function(g) {
                f = Sc(a(g, Le(a)(b)));
                d ? (d.unsubscribe(), d = null, f.subscribe(c)) : e = !0
            }));
            e && (d.unsubscribe(), d = null, f.subscribe(c))
        })
    };

    function Me(a, b, c) {
        return function(d, e) {
            var f = c,
                g = b,
                h = 0;
            d.subscribe(new L(e, function(k) {
                var l = h++;
                g = f ? a(g, k, l) : (f = !0, k);
                e.next(g)
            }, void 0, void 0))
        }
    };

    function Ne() {
        var a = C.apply(0, arguments),
            b = $c(a);
        return b ? H(Ne.apply(null, x(a)), rd(b)) : jd(function(c, d) {
            yd([c].concat(x(Td(a))))(d)
        })
    }

    function Oe() {
        return Ne.apply(null, x(C.apply(0, arguments)))
    };

    function Pe(a) {
        a = a === void 0 ? null : a;
        return jd(function(b, c) {
            var d = !1;
            b.subscribe(new L(c, function(e) {
                d = !0;
                c.next(e)
            }, void 0, function() {
                d || c.next(a);
                c.complete()
            }))
        })
    };

    function Qe() {
        return jd(function(a, b) {
            a.subscribe(new L(b, sc))
        })
    };

    function Re(a) {
        return jd(function(b, c) {
            b.subscribe(new L(c, function() {
                return c.next(a)
            }))
        })
    };

    function Se(a) {
        return a <= 0 ? function() {
            return Gc
        } : jd(function(b, c) {
            var d = 0;
            b.subscribe(new L(c, function(e) {
                ++d <= a && (c.next(e), a <= d && c.complete())
            }))
        })
    };

    function Te(a) {
        return Cd(function(b, c) {
            return a(b, c).g(Se(1), Re(b))
        })
    };

    function Ue(a) {
        return jd(function(b, c) {
            var d = new Set;
            b.subscribe(new L(c, function(e) {
                var f = a ? a(e) : e;
                d.has(f) || (d.add(f), c.next(e))
            }))
        })
    };

    function R(a) {
        var b = b === void 0 ? yc : b;
        var c;
        a = (c = a) != null ? c : Ve;
        return jd(function(d, e) {
            var f, g = !0;
            d.subscribe(new L(e, function(h) {
                var k = b(h);
                if (g || !a(f, k)) g = !1, f = k, e.next(h)
            }))
        })
    }

    function Ve(a, b) {
        return a === b
    };

    function We(a) {
        a = a === void 0 ? Xe : a;
        return jd(function(b, c) {
            var d = !1;
            b.subscribe(new L(c, function(e) {
                d = !0;
                c.next(e)
            }, void 0, function() {
                return d ? c.complete() : c.error(a())
            }))
        })
    }

    function Xe() {
        return new hd
    };

    function Ye() {
        var a = C.apply(0, arguments);
        return function(b) {
            return Ed(b, K.apply(null, x(a)))
        }
    };

    function Ze(a) {
        return jd(function(b, c) {
            var d = 0;
            b.subscribe(new L(c, function(e) {
                a.call(void 0, e, d++, b) || (c.next(!1), c.complete())
            }, void 0, function() {
                c.next(!0);
                c.complete()
            }))
        })
    };

    function $e() {
        return jd(function(a, b) {
            var c = [];
            a.subscribe(new L(b, function(d) {
                c.push(d);
                1 < c.length && c.shift()
            }, void 0, function() {
                for (var d = u(c), e = d.next(); !e.done; e = d.next()) b.next(e.value);
                b.complete()
            }, function() {
                c = null
            }))
        })
    };

    function af(a, b) {
        var c = arguments.length >= 2;
        return function(d) {
            return d.g(a ? P(function(e, f) {
                return a(e, f, d)
            }) : yc, $e(), c ? Pe(b) : We(function() {
                return new hd
            }))
        }
    };

    function bf(a) {
        var b = G(a) ? a : function() {
            return a
        };
        return G() ? jd(function(c, d) {
            var e = b();
            (void 0)(e).subscribe(d).add(c.subscribe(e))
        }) : function(c) {
            var d = new md(c, b);
            G(c == null ? void 0 : c.qb) && (d.qb = c.qb);
            d.source = c;
            d.sg = b;
            return d
        }
    };

    function cf(a) {
        var b = new dd(a, void 0, void 0);
        return function(c) {
            return bf(function() {
                return b
            })(c)
        }
    };

    function df() {
        var a = a === void 0 ? Infinity : a;
        return a <= 0 ? function() {
            return Gc
        } : jd(function(b, c) {
            var d = 0,
                e, f = function() {
                    var g = !1;
                    e = b.subscribe(new L(c, void 0, void 0, function() {
                        ++d < a ? e ? (e.unsubscribe(), e = null, f()) : g = !0 : c.complete()
                    }));
                    g && (e.unsubscribe(), e = null, f())
                };
            f()
        })
    };

    function ef(a, b) {
        return jd(Me(a, b, arguments.length >= 2))
    };

    function ff() {
        var a = a || {};
        var b = a.Xg === void 0 ? function() {
                return new J
            } : a.Xg,
            c = a.pi === void 0 ? !0 : a.pi,
            d = a.ri === void 0 ? !0 : a.ri,
            e = a.si === void 0 ? !0 : a.si;
        return function(f) {
            var g = null,
                h = null,
                k = 0,
                l = !1,
                m = !1,
                t = function() {
                    g = h = null;
                    l = m = !1
                };
            return jd(function(q, r) {
                k++;
                var w;
                h = (w = h) != null ? w : b();
                r.add(function() {
                    k--;
                    if (e && !k && !m && !l) {
                        var v = g;
                        t();
                        v == null || v.unsubscribe()
                    }
                });
                h.subscribe(r);
                !g && k > 0 && (g = new wc({
                    next: function(v) {
                        return h.next(v)
                    },
                    error: function(v) {
                        m = !0;
                        var z = h;
                        d && t();
                        z.error(v)
                    },
                    complete: function() {
                        l = !0;
                        var v = h;
                        c && t();
                        v.complete()
                    }
                }), Rc(q).subscribe(g))
            })(f)
        }
    };

    function S() {
        var a = C.apply(0, arguments),
            b = ad(a);
        return jd(function(c, d) {
            (b ? Ed(a, c, b) : Ed(a, c)).subscribe(d)
        })
    };

    function T(a) {
        return jd(function(b, c) {
            var d = null,
                e = 0,
                f = !1;
            b.subscribe(new L(c, function(g) {
                var h;
                (h = d) == null || h.unsubscribe();
                h = e++;
                Sc(a(g, h)).subscribe(d = new L(c, function(k) {
                    return c.next(k)
                }, void 0, function() {
                    d = null;
                    f && !d && c.complete()
                }))
            }, void 0, function() {
                (f = !0, !d) && c.complete()
            }))
        })
    };

    function gf(a, b) {
        b = b === void 0 ? !1 : b;
        return jd(function(c, d) {
            var e = 0;
            c.subscribe(new L(d, function(f) {
                var g = a(f, e++);
                (g || b) && d.next(f);
                !g && d.complete()
            }))
        })
    };

    function hf(a, b, c) {
        var d = G(a) || b || c ? {
            next: a,
            error: b,
            complete: c
        } : a;
        return d ? jd(function(e, f) {
            e.subscribe(new L(f, function(g) {
                var h;
                (h = d.next) == null || h.call(d, g);
                f.next(g)
            }, function(g) {
                var h;
                (h = d.error) == null || h.call(d, g);
                f.error(g)
            }, function() {
                var g;
                (g = d.complete) == null || g.call(d);
                f.complete()
            }))
        }) : yc
    };

    function jf() {
        var a = C.apply(0, arguments),
            b = $c(a);
        return jd(function(c, d) {
            for (var e = a.length, f = Array(e), g = a.map(function() {
                    return !1
                }), h = !1, k = {
                    Wa: 0
                }; k.Wa < e; k = {
                    Wa: k.Wa
                }, k.Wa++) Sc(a[k.Wa]).subscribe(new L(d, function(l) {
                return function(m) {
                    f[l.Wa] = m;
                    h || g[l.Wa] || (g[l.Wa] = !0, (h = g.every(yc)) && (g = null))
                }
            }(k), void 0, sc));
            c.subscribe(new L(d, function(l) {
                h && (l = [l].concat(x(f)), d.next(b ? b.apply(null, x(l)) : l))
            }))
        })
    };
    var kf = function(a) {
        this.ea = a
    };
    kf.prototype.K = function(a) {
        return (a == null ? 0 : a.Zb) ? !0 : (a == null ? void 0 : a.na) === "POST" || (a == null ? 0 : a.ib) || (a == null ? 0 : a.Yc) ? !1 : this.ea.K()
    };
    kf.prototype.ping = function() {
        var a = this,
            b = K.apply(null, x(C.apply(0, arguments))).g(Cd(function(c) {
                return lf(a, c)
            }), Ze(function(c) {
                return c
            }), cf(1));
        b.connect();
        return b
    };
    var lf = function(a, b) {
        var c = new dd(1);
        mf(a.ea, b, function() {
            c.next(!0);
            c.complete()
        }, function() {
            c.next(!1);
            c.complete()
        });
        return c
    };
    kf.prototype.rd = function(a, b, c) {
        this.ping.apply(this, x(C.apply(3, arguments)))
    };

    function nf(a, b) {
        var c = !1;
        return new I(function(d) {
            var e = a.setTimeout(function() {
                c = !0;
                d.next(!0);
                d.complete()
            }, b);
            return function() {
                c || a.clearTimeout(e)
            }
        })
    };
    var of = function(a) {
        this.ea = a;
        this.timeline = qe
    };
    n = of .prototype;
    n.setTimeout = function(a, b) {
        return Number(this.ea.setTimeout(function() {
            return a()
        }, b))
    };
    n.clearTimeout = function(a) {
        this.ea.clearTimeout(a)
    };
    n.now = function() {
        return new re(Date.now(), this.timeline)
    };
    n.interval = function(a, b) {
        var c = this.Ia(a).subscribe(b);
        return function() {
            return void c.unsubscribe()
        }
    };
    n.Ia = function(a) {
        return nf(this, a).g(df(), ef(function(b) {
            return b + 1
        }, -1))
    };
    n.ha = function() {
        return !0
    };
    var pf = function(a, b) {
        this.context = a;
        this.Qb = b
    };
    pf.prototype.K = function(a) {
        return this.Qb.K(a)
    };
    pf.prototype.I = function(a, b) {
        if (!this.K(b)) throw new fe;
        return new qf(this.context, this.Qb, b != null ? b : void 0, a)
    };
    var qf = function(a, b, c, d) {
        var e = this;
        this.Qb = b;
        this.properties = c;
        this.url = d;
        this.hd = !0;
        this.ib = new Map;
        this.body = void 0;
        var f;
        this.method = (f = c == null ? void 0 : c.na) != null ? f : "GET";
        this.Sg = a.ce().subscribe(function() {
            e.sendNow()
        })
    };
    qf.prototype.deactivate = function() {
        this.hd = !1
    };
    qf.prototype.sendNow = function() {
        if (this.hd)
            if (this.Sg.unsubscribe(), this.Qb.K(this.properties)) try {
                if (this.ib.size > 0 || this.body !== void 0) {
                    var a, b;
                    this.Qb.rd((a = this.properties) != null ? a : {}, this.ib, (b = this.body) != null ? b : "", this.url)
                } else this.Qb.ping(this.url);
                this.hd = !1
            } catch (c) {} else this.hd = !1
    };
    var sf = function(a, b, c, d, e, f) {
            this.mode = a;
            this.j = b;
            this.setTime = c;
            this.Cc = d;
            this.Ii = e;
            this.Wg = f;
            this.Ba = !1;
            this.id = this.mode === 0 ? rf(this) : 0
        },
        rf = function(a) {
            return a.j.setTimeout(function() {
                tf(a)
            }, a.Cc)
        },
        uf = function(a, b) {
            var c = te(b, a.setTime);
            c >= a.Cc ? tf(a) : (a.setTime = b, a.Cc -= c)
        },
        tf = function(a) {
            try {
                a.Ii(a.setTime.add(a.Cc))
            } finally {
                a.Ba = !0, a.Wg()
            }
        };
    sf.prototype.Ne = function(a, b) {
        this.Ba || (this.mode === 1 && a === 1 ? uf(this, b) : this.mode === 1 && a === 0 ? (this.mode = a, uf(this, this.j.now()), this.Ba || (this.id = rf(this))) : this.mode === 0 && a === 1 && (this.mode = a, this.clear(), uf(this, b)))
    };
    sf.prototype.clear = function() {
        this.Ba || this.j.clearTimeout(this.id)
    };
    var vf = function(a) {
        this.Zc = a;
        this.Bh = this.mode = 0;
        this.Jb = {};
        this.timeline = a.timeline;
        this.pb = a.now()
    };
    n = vf.prototype;
    n.Ne = function(a, b) {
        this.mode = a;
        se(this.pb, b);
        this.pb = b;
        Object.values(this.Jb).forEach(function(c) {
            return void c.Ne(a, b)
        })
    };
    n.now = function() {
        return this.mode === 1 ? this.pb : this.Zc.now()
    };
    n.setTimeout = function(a, b) {
        var c = this,
            d = ++this.Bh,
            e = this.mode === 1 ? this.pb : this.Zc.now();
        this.Jb[d] = new sf(this.mode, this.Zc, e, b, function(f) {
            var g = c.pb;
            c.mode === 1 && (c.pb = f);
            a();
            c.pb = g
        }, function() {
            delete c.Jb[d]
        });
        return d
    };
    n.clearTimeout = function(a) {
        this.Jb[a] && (this.Jb[a].clear(), delete this.Jb[a])
    };
    n.interval = function() {
        throw Error("x");
    };
    n.Ia = function() {
        throw Error("y");
    };
    n.ha = function() {
        return this.Zc.ha()
    };

    function wf(a, b) {
        var c = new vf(a);
        a = b.subscribe(function(d) {
            c.Ne(d.value ? 1 : 0, d.timestamp)
        });
        return {
            j: c,
            Ej: a
        }
    };

    function xf(a) {
        var b = Object.assign({}, a);
        delete b.timestamp;
        return {
            timestamp: new re(a.timestamp, qe),
            value: b
        }
    };

    function yf(a) {
        return a !== void 0 && typeof a.x === "number" && typeof a.y === "number" && typeof a.width === "number" && typeof a.height === "number"
    };
    "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
        "INPUT"
    ]);

    function zf(a) {
        var b = C.apply(1, arguments),
            c = b.length;
        if (!Array.isArray(a) || !Array.isArray(a.raw) || a.length !== a.raw.length || !qb && a === a.raw || !(qb && !rb || ob(a)) || c + 1 !== a.length) throw new TypeError("p");
        if (b.length === 0) return db(a[0]);
        c = a[0].toLowerCase();
        if (/^data:/.test(c)) throw Error("F");
        if (/^https:\/\//.test(c) || /^\/\//.test(c)) {
            var d = c.indexOf("//") + 2;
            var e = c.indexOf("/", d);
            if (e <= d) throw Error("z");
            d = c.substring(d, e);
            if (!/^[0-9a-z.:-]+$/i.test(d)) throw Error("A");
            if (!/^[^:]*(:[0-9]+)?$/i.test(d)) throw Error("B");
            if (!/(^|\.)[a-z][^.]*$/i.test(d)) throw Error("C");
            d = !0
        } else d = !1;
        if (!d)
            if (/^\//.test(c))
                if (c === "/" || c.length > 1 && c[1] !== "/" && c[1] !== "\\") d = !0;
                else throw Error("E");
        else d = !1;
        if (!(d = d || RegExp("^[^:\\s\\\\/]+/").test(c)))
            if (/^about:blank/.test(c)) {
                if (c !== "about:blank" && !/^about:blank#/.test(c)) throw Error("D");
                d = !0
            } else d = !1;
        if (!d) throw Error("G");
        c = a[0];
        for (d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return db(c)
    };
    var Af = ia(["https://www.googleadservices.com/pagead/managed/js/activeview/", "/reach_worklet.html"]),
        Bf = ia(["./reach_worklet.js"]),
        Cf = ia(["./reach_worklet.js"]),
        Df = ia(["./reach_worklet.html"]),
        Ef = ia(["./reach_worklet.js"]),
        Ff = ia(["./reach_worklet.js"]);

    function Gf(a) {
        var b = {};
        return b[0] = zf(Af, a), b[1] = zf(Bf), b[2] = zf(Cf), b
    }
    zf(Df);
    zf(Ef);
    zf(Ff);
    var If = function(a, b, c, d) {
        c = c === void 0 ? null : c;
        d = d === void 0 ? Gf("current") : d;
        $d.call(this);
        this.ea = a;
        this.Bd = b;
        this.Da = c;
        this.rg = d;
        this.Ya = null;
        this.Ge = new dd(3);
        this.Ge.g(P(function(e) {
            return e.value.type === "sessionStart"
        }));
        this.yi = this.Ge.g(P(function(e) {
            return e.value.type === "sessionFinish"
        }));
        this.Mf = new dd(1);
        this.Mi = new dd;
        this.Cf = new dd(10);
        this.G = new pf(this, new kf(a));
        this.Kh = this.ea.K();
        this.j = Hf(this, new of (this.ea))
    };
    A(If, $d);
    var Jf = function(a) {
        a.Ya !== null && Ke(a.Ya)
    };
    If.prototype.validate = function() {
        return this.Kh
    };
    var Hf = function(a, b) {
        a.Ya = new Ae(a.ea, a.Bd);
        var c = new dd;
        Be(a.Ya, function(f) {
            f = xf(f);
            c.next({
                timestamp: f.timestamp,
                value: !0
            });
            a.Ge.next(f)
        });
        De(a.Ya, function(f) {
            if (f === void 0) var g = !1;
            else {
                g = f.data;
                var h;
                (h = g === void 0) || (h = g.viewport, h = h === void 0 || h !== void 0 && typeof h.width === "number" && typeof h.height === "number");
                h ? (g = g.adView, g = g !== void 0 && typeof g.percentageInView === "number" && (g.geometry === void 0 || yf(g.geometry)) && (g.onScreenGeometry === void 0 || yf(g.onScreenGeometry))) : g = !1
            }
            g ? (f = xf(f), c.next({
                timestamp: f.timestamp,
                value: !0
            }), a.Cf.next(f)) : .01 >= Math.random() && (f = "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=error&name=invalid_geo&context=1092&msg=" + JSON.stringify(f), a.G.I(f).sendNow())
        });
        Ce(a.Ya, function(f) {
            f = xf(f);
            c.next({
                timestamp: f.timestamp,
                value: !0
            });
            a.Mi.next(f)
        });
        Ee(a.Ya, function(f) {
            f = xf(f);
            c.next({
                timestamp: f.timestamp,
                value: !0
            });
            a.Mf.next(f)
        });
        var d = 0;
        Fe(a.Ya, function(f) {
            d += f;
            d > 0 && f === 0 && c.next({
                timestamp: a.j.now(),
                value: !1
            })
        });
        var e = c.g(gf(function(f) {
            return f.value
        }, !0));
        return wf(b,
            e).j
    };
    da.Object.defineProperties(If.prototype, {
        global: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return Kf
            }
        }
    });
    var Kf = {};

    function Lf(a, b) {
        if (!b) throw Error("H`" + a);
        if (typeof b !== "string" && !(b instanceof String)) throw Error("I`" + a);
        if (b.trim() === "") throw Error("J`" + a);
    }

    function Mf(a) {
        if (!a) throw Error("M`functionToExecute");
    }

    function Nf(a, b) {
        if (b == null) throw Error("K`" + a);
        if (typeof b !== "number" || isNaN(b)) throw Error("L`" + a);
        if (b < 0) throw Error("N`" + a);
    };

    function Of() {
        return /\d+\.\d+\.\d+(-.*)?/.test("1.5.2-google_20241009")
    }

    function Pf() {
        for (var a = ["1", "5", "2"], b = ["1", "0", "3"], c = 0; c < 3; c++) {
            var d = parseInt(a[c], 10),
                e = parseInt(b[c], 10);
            if (d > e) break;
            else if (d < e) return !1
        }
        return !0
    };
    var Qf = function(a, b, c, d) {
            this.Kf = a;
            this.method = b;
            this.version = c;
            this.args = d
        },
        Rf = function(a) {
            return !!a && a.omid_message_guid !== void 0 && a.omid_message_method !== void 0 && a.omid_message_version !== void 0 && typeof a.omid_message_guid === "string" && typeof a.omid_message_method === "string" && typeof a.omid_message_version === "string" && (a.omid_message_args === void 0 || a.omid_message_args !== void 0)
        },
        Sf = function(a) {
            return new Qf(a.omid_message_guid, a.omid_message_method, a.omid_message_version, a.omid_message_args)
        };
    Qf.prototype.Za = function() {
        var a = {};
        a = (a.omid_message_guid = this.Kf, a.omid_message_method = this.method, a.omid_message_version = this.version, a);
        this.args !== void 0 && (a.omid_message_args = this.args);
        return a
    };
    var Tf = function(a) {
        this.wd = a
    };
    Tf.prototype.Za = function() {
        return JSON.stringify(void 0)
    };

    function Uf(a, b) {
        try {
            return a.frames && !!a.frames[b]
        } catch (c) {
            return !1
        }
    }
    var Vf = function(a) {
            return ["omid_v1_present", "omid_v1_present_web", "omid_v1_present_app"].some(function(b) {
                return Uf(a, b)
            })
        },
        Wf = function(a) {
            for (var b = u(Object.values(we)), c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = {};
                d = (d.app = "omid_v1_present_app", d.web = "omid_v1_present_web", d)[c];
                if (Uf(a, d)) return c
            }
            return null
        };

    function Xf(a, b) {
        return a && (a[b] || (a[b] = {}))
    };

    function Yf() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = Math.random() * 16 | 0;
            return a === "y" ? (b & 3 | 8).toString(16) : b.toString(16)
        })
    };

    function Zf() {
        var a = C.apply(0, arguments);
        $f(function() {
            throw new(Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat(x(a))));
        }, function() {
            return console.error.apply(console, x(a))
        })
    }

    function $f(a, b) {
        typeof jasmine !== "undefined" && jasmine ? a() : typeof console !== "undefined" && console && console.error && b()
    };
    var ag = function() {
        if (typeof omidGlobal !== "undefined" && omidGlobal) return omidGlobal;
        if (typeof global !== "undefined" && global) return global;
        if (typeof window !== "undefined" && window) return window;
        if (typeof globalThis !== "undefined" && globalThis) return globalThis;
        var a = Function("return this")();
        if (a) return a;
        throw Error("O");
    }();
    var bg = function(a) {
        this.wd = a;
        this.handleExportedMessage = bg.prototype.rh.bind(this)
    };
    A(bg, Tf);
    bg.prototype.sendMessage = function(a, b) {
        b = b === void 0 ? this.wd : b;
        if (!b) throw Error("P");
        b.handleExportedMessage(a.Za(), this)
    };
    bg.prototype.rh = function(a, b) {
        if (Rf(a) && this.onMessage) this.onMessage(Sf(a), b)
    };

    function cg(a) {
        return a != null && typeof a.top !== "undefined" && a.top != null
    }

    function dg(a) {
        if (a === ag) return !1;
        try {
            if (typeof a.location.hostname === "undefined") return !0
        } catch (b) {
            return !0
        }
        return !1
    }

    function eg() {
        var a;
        typeof a === "undefined" && typeof window !== "undefined" && window && (a = window);
        return cg(a) ? a : ag
    };
    var fg = function(a, b) {
        this.wd = b = b === void 0 ? ag : b;
        var c = this;
        a.addEventListener("message", function(d) {
            if (typeof d.data === "object") {
                var e = d.data;
                if (Rf(e) && d.source && c.onMessage) c.onMessage(Sf(e), d.source)
            }
        })
    };
    A(fg, Tf);
    fg.prototype.sendMessage = function(a, b) {
        b = b === void 0 ? this.wd : b;
        if (!b) throw Error("P");
        b.postMessage(a.Za(), "*")
    };
    var gg = ["omid", "v1_VerificationServiceCommunication"],
        ig = ["omidVerificationProperties", "serviceWindow"];

    function jg(a, b) {
        return b.reduce(function(c, d) {
            return c && c[d]
        }, a)
    };
    var kg = function(a) {
        if (!a) {
            a = eg();
            var b = b === void 0 ? Vf : b;
            var c = [],
                d = jg(a, ig);
            d && c.push(d);
            c.push(cg(a) ? a.top : ag);
            a: {
                c = u(c);
                for (var e = c.next(); !e.done; e = c.next()) {
                    b: {
                        d = a;e = e.value;
                        var f = b;
                        if (!dg(e)) try {
                            var g = jg(e, gg);
                            if (g) {
                                var h = new bg(g);
                                break b
                            }
                        } catch (k) {}
                        h = f(e) ? new fg(d, e) : null
                    }
                    if (d = h) {
                        a = d;
                        break a
                    }
                }
                a = null
            }
        }
        if (this.dc = a) this.dc.onMessage = this.sh.bind(this);
        else if (b = (b = ag.omid3p) && typeof b.registerSessionObserver === "function" && typeof b.addEventListener === "function" ? b : null) this.xc = b;
        this.mi = this.ni =
            0;
        this.Nd = {};
        this.ge = [];
        this.oc = (b = ag.omidVerificationProperties) ? b.injectionId : void 0
    };
    kg.prototype.K = function() {
        var a = eg();
        var b = (b = ag.omidVerificationProperties) && b.injectionSource ? b.injectionSource : void 0;
        return (b || Wf(a) || Wf(cg(a) ? a.top : ag)) !== "web" || this.oc ? !(!this.dc && !this.xc) : !1
    };
    var He = function(a, b, c) {
        Mf(b);
        a.xc ? a.xc.registerSessionObserver(b, c, a.oc) : a.Tb("addSessionListener", b, c, a.oc)
    };
    kg.prototype.addEventListener = function(a, b) {
        Lf("eventType", a);
        Mf(b);
        this.xc ? this.xc.addEventListener(a, b, this.oc) : this.Tb("addEventListener", b, a, this.oc)
    };
    var mf = function(a, b, c, d) {
            Lf("url", b);
            ag.document && ag.document.createElement ? lg(a, b, c, d) : a.Tb("sendUrl", function(e) {
                e && c ? c() : !e && d && d()
            }, b)
        },
        lg = function(a, b, c, d) {
            var e = ag.document.createElement("img");
            a.ge.push(e);
            var f = function(g) {
                var h = a.ge.indexOf(e);
                h >= 0 && a.ge.splice(h, 1);
                g && g()
            };
            e.addEventListener("load", f.bind(a, c));
            e.addEventListener("error", f.bind(a, d));
            e.src = b
        };
    kg.prototype.setTimeout = function(a, b) {
        Mf(a);
        Nf("timeInMillis", b);
        if (mg()) return ag.setTimeout(a, b);
        var c = this.ni++;
        this.Tb("setTimeout", a, c, b);
        return c
    };
    kg.prototype.clearTimeout = function(a) {
        Nf("timeoutId", a);
        mg() ? ag.clearTimeout(a) : this.kg("clearTimeout", a)
    };
    kg.prototype.setInterval = function(a, b) {
        Mf(a);
        Nf("timeInMillis", b);
        if (ng()) return ag.setInterval(a, b);
        var c = this.mi++;
        this.Tb("setInterval", a, c, b);
        return c
    };
    kg.prototype.clearInterval = function(a) {
        Nf("intervalId", a);
        ng() ? ag.clearInterval(a) : this.kg("clearInterval", a)
    };
    var mg = function() {
            return typeof ag.setTimeout === "function" && typeof ag.clearTimeout === "function"
        },
        ng = function() {
            return typeof ag.setInterval === "function" && typeof ag.clearInterval === "function"
        };
    kg.prototype.sh = function(a) {
        var b = a.method,
            c = a.Kf;
        a = a.args;
        if (b === "response" && this.Nd[c]) {
            var d = Of() && Pf() ? a ? a : [] : a && typeof a === "string" ? JSON.parse(a) : [];
            this.Nd[c].apply(this, d)
        }
        b === "error" && window.console && Zf(a)
    };
    kg.prototype.kg = function(a) {
        this.Tb.apply(this, [a, null].concat(x(C.apply(1, arguments))))
    };
    kg.prototype.Tb = function(a, b) {
        var c = C.apply(2, arguments);
        if (this.dc) {
            var d = Yf();
            b && (this.Nd[d] = b);
            var e = "VerificationService." + a;
            c = Of() && Pf() ? c : JSON.stringify(c);
            this.dc.sendMessage(new Qf(d, e, "1.5.2-google_20241009", c))
        }
    };
    var og = void 0;
    if (og = og === void 0 ? typeof omidExports === "undefined" ? null : omidExports : og) {
        var pg = ["OmidVerificationClient"];
        pg.slice(0, pg.length - 1).reduce(Xf, og)[pg[pg.length - 1]] = kg
    };

    function qg(a, b) {
        return function(c) {
            return new I(function(d) {
                return c.subscribe(function(e) {
                    a.Wb(b, function() {
                        d.next(e)
                    })()
                }, function(e) {
                    a.Wb(b, function() {
                        d.error(e)
                    })()
                }, function() {
                    a.Wb(b, function() {
                        d.complete()
                    })()
                })
            })
        }
    };
    var sg = function() {
        for (var a = u(C.apply(0, arguments)), b = a.next(); !b.done; b = a.next())
            if (b = b.value, b.ha()) {
                this.j = b;
                return
            }
        this.j = new rg
    };
    n = sg.prototype;
    n.ha = function() {
        return this.j.ha()
    };
    n.now = function() {
        return this.j.now()
    };
    n.setTimeout = function(a, b) {
        return this.j.setTimeout(a, b)
    };
    n.clearTimeout = function(a) {
        this.j.clearTimeout(a)
    };
    n.interval = function(a, b) {
        var c = this.Ia(a).subscribe(b);
        return function() {
            return void c.unsubscribe()
        }
    };
    n.Ia = function(a) {
        return this.j.Ia(a)
    };
    da.Object.defineProperties(sg.prototype, {
        timeline: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.j.timeline
            }
        }
    });
    var rg = function() {
        this.timeline = Symbol()
    };
    n = rg.prototype;
    n.ha = function() {
        return !1
    };
    n.now = function() {
        return new re(0, this.timeline)
    };
    n.setTimeout = function() {
        return 0
    };
    n.clearTimeout = function() {};
    n.interval = function() {
        return function() {}
    };
    n.Ia = function() {
        return Rd
    };
    var tg = function(a, b) {
        this.L = a;
        this.F = b
    };
    n = tg.prototype;
    n.setTimeout = function(a, b) {
        return this.L.setTimeout(this.F.Wb(734, a), b)
    };
    n.clearTimeout = function(a) {
        this.L.clearTimeout(a)
    };
    n.interval = function(a, b) {
        var c = this.Ia(a).subscribe(b);
        return function() {
            return void c.unsubscribe()
        }
    };
    n.Ia = function(a) {
        var b = this;
        return new I(function(c) {
            var d = 0,
                e = b.L.setInterval(function() {
                    c.next(d++)
                }, a);
            return function() {
                b.L.clearInterval(e)
            }
        })
    };
    n.ha = function() {
        return !!this.L.clearTimeout && "setTimeout" in this.L && "setInterval" in this.L && !!this.L.clearInterval
    };
    var ug = function(a, b) {
        tg.call(this, a, b);
        this.timeline = qe
    };
    A(ug, tg);
    ug.prototype.now = function() {
        return new re(this.L.Date.now(), this.timeline)
    };
    ug.prototype.ha = function() {
        return !!this.L.Date && !!this.L.Date.now && tg.prototype.ha.call(this)
    };
    var vg = function(a, b) {
        tg.call(this, a, b);
        this.timeline = pe
    };
    A(vg, tg);
    vg.prototype.now = function() {
        return new re(this.L.performance.now(), this.timeline)
    };
    vg.prototype.ha = function() {
        return !!this.L.performance && !!this.L.performance.now && tg.prototype.ha.call(this)
    };

    function wg(a) {
        a = a.global;
        if (a.fetchLater) return a.fetchLater.bind(a)
    }

    function xg(a) {
        var b, c, d = (b = a.global) == null ? void 0 : (c = b.document) == null ? void 0 : c.createElement("meta");
        if (d) try {
            return d.httpEquiv = "origin-trial", d.content = "AxjhRadLCARYRJawRjMjq4U8V8okQvSnrBIJWdMajuEkN3/DfVAcLcFhMVrUWnOXagwlI8dQD84FwJDGj9ohqAYAAABveyJvcmlnaW4iOiJodHRwczovL2dvb2dsZWFkc2VydmljZXMuY29tOjQ0MyIsImZlYXR1cmUiOiJGZXRjaExhdGVyQVBJIiwiZXhwaXJ5IjoxNzI1NDA3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9", a.global.document.head.append(d), d
        } catch (e) {}
    }
    var zg = function(a) {
            this.context = a;
            yg === void 0 && (yg = xg(a))
        },
        yg;
    zg.prototype.K = function(a) {
        return wg(this.context) !== void 0 && !(a == null || !a.rf) && !Ag(this.context) && !(a == null ? 0 : a.Zb) && !(a == null ? 0 : a.ib) && !(a == null ? 0 : a.Yc)
    };
    zg.prototype.I = function(a, b) {
        if (!this.K(b)) throw new fe;
        return new Bg(this.context, a, b)
    };
    var Bg = function(a, b, c) {
            this.context = a;
            this.properties = c;
            this.yb = b;
            var d;
            this.na = (d = c == null ? void 0 : c.na) != null ? d : "GET";
            a = wg(this.context);
            if (a === void 0) throw Error();
            this.fetchLater = a;
            Cg(this, this.sc())
        },
        Cg = function(a, b) {
            a.Ra && a.Ra.activated || (a.ac = new AbortController, a.Ra = a.fetchLater(b, {
                method: a.na,
                cache: "no-cache",
                mode: "no-cors",
                signal: a.ac.signal,
                activateAfter: 96E4
            }))
        };
    Bg.prototype.sc = function() {
        var a = this.yb;
        return (a.slice(-1)[0] === "&" ? a : a + "&") + "flapi=1"
    };
    Bg.prototype.deactivate = function() {
        this.Ra && !this.Ra.activated && this.ac && (this.ac.abort(), this.Ra = void 0)
    };
    Bg.prototype.sendNow = function() {};
    da.Object.defineProperties(Bg.prototype, {
        url: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.yb
            },
            set: function(a) {
                this.yb = a;
                a = this.sc();
                this.Ra && this.Ra.activated || !this.ac || (this.ac.abort(), this.Ra = void 0);
                Cg(this, a)
            }
        },
        method: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.na
            }
        }
    });
    var Dg = function(a) {
        this.context = a
    };
    Dg.prototype.K = function() {
        return !Ag(this.context) && !!this.context.global.fetch
    };
    Dg.prototype.ping = function() {
        var a = this;
        return Qd.apply(null, x(C.apply(0, arguments).map(function(b) {
            return Rc(a.context.global.fetch(b, {
                method: "GET",
                cache: "no-cache",
                keepalive: !0,
                mode: "no-cors"
            })).g(M(function(c) {
                return c.status === 200
            }))
        }))).g(Ze(function(b) {
            return b
        }), af())
    };
    Dg.prototype.rd = function(a, b, c) {
        for (var d = C.apply(3, arguments), e = this, f = new Headers, g = u(b.entries()), h = g.next(); !h.done; h = g.next()) {
            var k = u(h.value);
            h = k.next().value;
            k = k.next().value;
            f.set(h, k)
        }
        var l, m = (l = a.keepAlive) != null ? l : !1;
        Qd.apply(null, x(d.map(function(t) {
            return Rc(e.context.global.fetch(t, Object.assign({}, {
                method: String(a.na),
                cache: "no-cache"
            }, m ? {
                keepalive: !0
            } : {}, {
                mode: "no-cors",
                headers: f,
                body: c
            }))).g(M(function(q) {
                return q.status === 200
            }))
        }))).g(Ze(function(t) {
            return t
        }), af())
    };
    var Eg = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };
    var Fg = La(1, !0),
        Gg = La(610401301, !1);
    La(899588437, !1);
    La(188588736, !0);
    La(676937399, !0);
    La(651175828, !0);
    La(653718497, Fg);
    La(660014094, Fg);
    La(2147483644, !1);
    La(2147483645, !0);
    La(2147483646, Fg);
    La(2147483647, !0);

    function Hg() {
        var a = Ka.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Ig, Jg = Ka.navigator;
    Ig = Jg ? Jg.userAgentData || null : null;

    function Kg(a) {
        return Gg ? Ig ? Ig.brands.some(function(b) {
            return (b = b.brand) && b.indexOf(a) != -1
        }) : !1 : !1
    }

    function U(a) {
        return Hg().indexOf(a) != -1
    };

    function Lg() {
        return Gg ? !!Ig && Ig.brands.length > 0 : !1
    }

    function Mg() {
        return Lg() ? !1 : U("Opera")
    }

    function Ng() {
        return Lg() ? !1 : U("Trident") || U("MSIE")
    }

    function Og() {
        return U("Firefox") || U("FxiOS")
    }

    function Pg() {
        return U("Safari") && !(Qg() || (Lg() ? 0 : U("Coast")) || Mg() || (Lg() ? 0 : U("Edge")) || (Lg() ? Kg("Microsoft Edge") : U("Edg/")) || (Lg() ? Kg("Opera") : U("OPR")) || Og() || U("Silk") || U("Android"))
    }

    function Qg() {
        return Lg() ? Kg("Chromium") : (U("Chrome") || U("CriOS")) && !(Lg() ? 0 : U("Edge")) || U("Silk")
    }

    function Rg() {
        return U("Android") && !(Qg() || Og() || Mg() || U("Silk"))
    }

    function Sg() {
        var a = Hg();
        if (Ng()) {
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
        } else a = "";
        return a
    }

    function Tg() {
        if (Lg()) {
            var a = Ig.brands.find(function(b) {
                return b.brand === "Internet Explorer"
            });
            if (!a || !a.version) return NaN;
            a = a.version.split(".")
        } else {
            a = Sg();
            if (a === "") return NaN;
            a = a.split(".")
        }
        return a.length === 0 ? NaN : Number(a[0])
    };
    var Vg = function() {
            return Gg && Ig ? Ig.mobile : !Ug() && (U("iPod") || U("iPhone") || U("Android") || U("IEMobile"))
        },
        Ug = function() {
            return Gg && Ig ? !Ig.mobile && (U("iPad") || U("Android") || U("Silk")) : U("iPad") || U("Android") && !U("Mobile") || U("Silk")
        };
    var Wg = function(a) {
        Wg[" "](a);
        return a
    };
    Wg[" "] = function() {};
    var Xg = function(a, b) {
        try {
            return Wg(a[b]), !0
        } catch (c) {}
        return !1
    };

    function Yg() {
        return Gg ? !!Ig && !!Ig.platform : !1
    }

    function Zg() {
        return U("iPhone") && !U("iPod") && !U("iPad")
    }

    function $g() {
        Zg() || U("iPad") || U("iPod")
    };
    Mg();
    var ah = Ng();
    U("Edge");
    var bh = U("Gecko") && !(Ya(Hg(), "WebKit") && !U("Edge")) && !(U("Trident") || U("MSIE")) && !U("Edge"),
        ch = Ya(Hg(), "WebKit") && !U("Edge");
    ch && U("Mobile");
    Yg() || U("Macintosh");
    Yg() || U("Windows");
    (Yg() ? Ig.platform === "Linux" : U("Linux")) || Yg() || U("CrOS");
    Yg() || U("Android");
    Zg();
    U("iPad");
    U("iPod");
    $g();
    Ya(Hg(), "KaiOS");
    var dh = function(a) {
        try {
            return !!a && a.location.href != null && Xg(a, "foo")
        } catch (b) {
            return !1
        }
    };
    var eh = function(a) {
        this.context = a
    };
    eh.prototype.K = function(a) {
        return (a == null ? 0 : a.Zb) || (a == null ? void 0 : a.na) === "POST" || (a == null ? 0 : a.ib) || (a == null ? 0 : a.Yc) || (a == null ? 0 : a.keepAlive) ? !1 : !Ag(this.context)
    };
    eh.prototype.ping = function() {
        var a = this;
        return K(C.apply(0, arguments).map(function(b) {
            try {
                var c = a.context.global;
                c.google_image_requests || (c.google_image_requests = []);
                var d = c.document;
                d = d === void 0 ? document : d;
                var e = d.createElement("img");
                e.src = b;
                c.google_image_requests.push(e);
                return !0
            } catch (f) {
                return !1
            }
        }).every(function(b) {
            return b
        }))
    };
    eh.prototype.rd = function(a, b, c) {
        this.ping.apply(this, x(C.apply(3, arguments)))
    };

    function fh(a) {
        a = a.global;
        if (a.PendingGetBeacon) return a.PendingGetBeacon
    }
    var gh = function(a) {
        this.context = a
    };
    gh.prototype.K = function(a) {
        return hh && !Ag(this.context) && fh(this.context) !== void 0 && !(a == null ? 0 : a.Zb) && (a == null ? void 0 : a.na) !== "POST" && !(a == null ? 0 : a.ib) && !(a == null ? 0 : a.Yc)
    };
    gh.prototype.I = function(a, b) {
        if (!this.K(b)) throw new fe;
        return new ih(this.context, a)
    };
    var hh = !1,
        ih = function(a, b) {
            this.context = a;
            this.yb = b;
            a = fh(this.context);
            if (a === void 0) throw Error();
            this.Se = new a(this.sc(), {})
        };
    ih.prototype.sc = function() {
        var a = this.yb;
        return (a.slice(-1)[0] === "&" ? a : a + "&") + "pbapi=1"
    };
    ih.prototype.deactivate = function() {
        this.Se.deactivate()
    };
    ih.prototype.sendNow = function() {
        this.Se.sendNow()
    };
    da.Object.defineProperties(ih.prototype, {
        url: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.yb
            },
            set: function(a) {
                this.yb = a;
                this.Se.setURL(this.sc())
            }
        },
        method: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return "GET"
            },
            set: function(a) {
                if (a !== "GET") throw new fe;
            }
        }
    });
    var jh = function(a) {
        this.context = a
    };
    jh.prototype.K = function(a) {
        if ((a == null ? 0 : a.Zb) || (a == null ? void 0 : a.na) === "GET" || (a == null ? 0 : a.ib) || (a == null ? 0 : a.Yc) || (a == null ? 0 : a.keepAlive)) return !1;
        var b;
        return !Ag(this.context) && ((b = this.context.global.navigator) == null ? void 0 : b.sendBeacon) !== void 0
    };
    jh.prototype.ping = function() {
        var a = this;
        return K(C.apply(0, arguments).map(function(b) {
            var c;
            return (c = a.context.global.navigator) == null ? void 0 : c.sendBeacon(b)
        }).every(function(b) {
            return b
        }))
    };
    jh.prototype.rd = function(a, b, c) {
        this.ping.apply(this, x(C.apply(3, arguments)))
    };

    function kh(a) {
        return function(b) {
            return b.g(lh(a, bf(new J)))
        }
    }

    function V(a, b) {
        return function(c) {
            return c.g(lh(a, cf(b)))
        }
    }

    function lh(a, b) {
        function c(d) {
            return new I(function(e) {
                return d.subscribe(function(f) {
                    Wa(a, function() {
                        return void e.next(f)
                    }, 3)
                }, function(f) {
                    Wa(a, function() {
                        return void e.error(f)
                    }, 3)
                }, function() {
                    Wa(a, function() {
                        return void e.complete()
                    }, 3)
                })
            })
        }
        return H(c, od(), b, kd(), c)
    };
    var W = function(a) {
        this.value = a
    };
    W.prototype.S = function(a) {
        return K(this.value).g(V(a, 1))
    };
    var mh = new W(!1);

    function nh(a) {
        Ka.setTimeout(function() {
            throw a;
        }, 0)
    };
    Og();
    Zg() || U("iPod");
    U("iPad");
    Rg();
    Qg();
    Pg() && $g();
    var oh = {},
        ph = null,
        qh = bh || ch || typeof Ka.btoa == "function",
        sh = function(a) {
            var b;
            E(Na(a), "encodeByteArray takes an array as a parameter");
            b === void 0 && (b = 0);
            rh();
            b = oh[b];
            for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                var g = a[e],
                    h = a[e + 1],
                    k = a[e + 2],
                    l = b[g >> 2];
                g = b[(g & 3) << 4 | h >> 4];
                h = b[(h & 15) << 2 | k >> 6];
                k = b[k & 63];
                c[f++] = "" + l + g + h + k
            }
            l = 0;
            k = d;
            switch (a.length - e) {
                case 2:
                    l = a[e + 1], k = b[(l & 15) << 2] || d;
                case 1:
                    a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
            }
            return c.join("")
        },
        uh = function(a) {
            var b =
                a.length,
                c = b * 3 / 4;
            c % 3 ? c = Math.floor(c) : "=.".indexOf(a[b - 1]) != -1 && (c = "=.".indexOf(a[b - 2]) != -1 ? c - 2 : c - 1);
            var d = new Uint8Array(c),
                e = 0;
            th(a, function(f) {
                d[e++] = f
            });
            return e !== c ? d.subarray(0, e) : d
        },
        th = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        m = ph[l];
                    if (m != null) return m;
                    if (!/^[\s\xa0]*$/.test(l)) throw Error("R`" + l);
                }
                return k
            }
            rh();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    h = c(64);
                if (h === 64 && e === -1) break;
                b(e << 2 | f >> 4);
                g != 64 && (b(f << 4 & 240 | g >> 2), h != 64 && b(g << 6 & 192 | h))
            }
        },
        rh = function() {
            if (!ph) {
                ph = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; c < 5; c++) {
                    var d = a.concat(b[c].split(""));
                    oh[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e],
                            g = ph[f];
                        g === void 0 ? ph[f] = e : E(g === e)
                    }
                }
            }
        };

    function vh(a) {
        var b = wh(a);
        return b === null ? new W(null) : b.g(M(function(c) {
            c = c.Za();
            if (qh) c = Ka.btoa(c);
            else {
                for (var d = [], e = 0, f = 0; f < c.length; f++) {
                    var g = c.charCodeAt(f);
                    if (g > 255) throw Error("Q");
                    d[e++] = g
                }
                c = sh(d)
            }
            return c
        }), Se(1), V(a.h, 1))
    };

    function xh(a) {
        var b = b === void 0 ? {} : b;
        if (typeof Event === "function") return new Event(a, b);
        if (typeof document !== "undefined") {
            var c = document.createEvent("CustomEvent");
            c.initCustomEvent(a, b.bubbles || !1, b.cancelable || !1, b.detail);
            return c
        }
        throw Error();
    };
    var yh = function(a) {
        this.value = a;
        this.De = new J
    };
    yh.prototype.release = function() {
        this.De.next();
        this.De.complete();
        this.value = void 0
    };
    da.Object.defineProperties(yh.prototype, {
        i: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.value
            }
        },
        released: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.De
            }
        }
    });
    var zh = ["FRAME", "IMG", "IFRAME"],
        Ah = /^[01](px)?$/,
        Bh = function() {
            this.Mh = this.cf = this.fg = this.mf = !1
        },
        Ch = function() {
            var a = new Bh;
            a.mf = !0;
            a.fg = !0;
            return a
        };

    function Dh(a) {
        return typeof a === "string" ? document.getElementById(a) : a
    }

    function Eh(a, b) {
        b = b === void 0 ? !1 : b;
        if (a.tagName === "IMG") {
            if (a.complete && (!a.naturalWidth || !a.naturalHeight)) return !0;
            var c;
            if (b && ((c = a.style) == null ? void 0 : c.display) === "none") return !0
        }
        var d, e;
        return Ah.test((d = a.getAttribute("width")) != null ? d : "") && Ah.test((e = a.getAttribute("height")) != null ? e : "")
    }

    function Fh(a, b) {
        if (a.tagName === "IMG") return a.naturalWidth && a.naturalHeight ? !0 : !1;
        try {
            if (a.readyState) var c = a.readyState;
            else {
                var d, e;
                c = (d = a.contentWindow) == null ? void 0 : (e = d.document) == null ? void 0 : e.readyState
            }
            return c === "complete"
        } catch (f) {
            return b === void 0 ? !1 : b
        }
    }

    function Gh(a) {
        a || (a = function(b, c, d) {
            b.addEventListener(c, d)
        });
        return a
    }

    function Hh(a, b) {
        var c = Ch();
        c = c === void 0 ? new Bh : c;
        if (a = Dh(a)) {
            var d = Gh(d);
            for (var e = !1, f = function(z) {
                    e || (e = !0, b(z))
                }, g, h = 2, k = 0; k < zh.length; ++k)
                if (zh[k] === a.tagName) {
                    h = 3;
                    g = [a];
                    break
                }
            g || (g = a.querySelectorAll(zh.join(",")));
            var l = 0,
                m = 0,
                t = !c.cf,
                q = a = !1;
            k = {};
            for (var r = 0; r < g.length; k = {
                    jd: void 0
                }, r++) {
                var w = g[r];
                if (!Eh(w, c.cf))
                    if (k.jd = w.tagName === "IMG", Fh(w, c.mf)) a = !0, k.jd && (t = !0);
                    else {
                        l++;
                        var v = function(z) {
                            return function(y) {
                                l--;
                                !l && t && f(h);
                                z.jd && (y = y && y.type === "error", m--, y || (t = !0), !m && q && t && f(h))
                            }
                        }(k);
                        d(w, "load", v);
                        k.jd && (m++, d(w, "error", v))
                    }
            }
            m === 0 && (t = !0);
            g = null;
            g = Ka.document.readyState === "complete";
            if (c.Mh && g) {
                if (m > 0) {
                    q = !0;
                    return
                }
                h = 5
            } else if (l === 0 && !a && g) h = 5;
            else if (l || !a) {
                d(Ka, "load", function() {
                    !c.fg || !m && t ? f(4) : q = !0
                });
                return
            }
            f(h)
        }
    };

    function Ih(a, b, c) {
        if (a)
            for (var d = 0; a != null && d < 500 && !c(a); ++d) a = b(a)
    }

    function Jh(a, b) {
        Ih(a, function(c) {
            try {
                return c === c.parent ? null : c.parent
            } catch (d) {}
            return null
        }, b)
    }

    function Kh(a, b) {
        if (a.tagName == "IFRAME") b(a);
        else {
            a = a.querySelectorAll("IFRAME");
            for (var c = 0; c < a.length && !b(a[c]); ++c);
        }
    }

    function Lh(a) {
        return (a = a.ownerDocument) && (a.parentWindow || a.defaultView) || null
    }

    function Mh(a, b, c) {
        try {
            var d = JSON.parse(c.data)
        } catch (g) {}
        if (typeof d === "object" && d && d.type === "creativeLoad") {
            var e = Lh(a);
            if (c.source && e) {
                var f;
                Jh(c.source, function(g) {
                    try {
                        if (g.parent === e) return f = g, !0
                    } catch (h) {}
                });
                f && Kh(a, function(g) {
                    if (g.contentWindow === f) return b(d), !0
                })
            }
        }
    }

    function Nh(a) {
        return typeof a === "string" ? document.getElementById(a) : a
    }
    var Oh = function(a, b) {
        var c = Nh(a);
        if (c)
            if (c.onCreativeLoad) c.onCreativeLoad(b);
            else {
                var d = b ? [b] : [],
                    e = function(f) {
                        for (var g = 0; g < d.length; ++g) try {
                            d[g](1, f)
                        } catch (h) {}
                        d = {
                            push: function(h) {
                                h(1, f)
                            }
                        }
                    };
                c.onCreativeLoad = function(f) {
                    d.push(f)
                };
                c.setAttribute("data-creative-load-listener", "");
                c.addEventListener("creativeLoad", function(f) {
                    e(f.detail)
                });
                Ka.addEventListener("message", function(f) {
                    Mh(c, e, f)
                })
            }
    };
    var Ph = function(a, b) {
            var c = this;
            this.global = a;
            this.qd = b;
            this.fi = this.document ? Qd(K(!0), Jd(this.document, "visibilitychange")).g(qg(this.qd.F, 748), M(function() {
                return c.document ? c.document.visibilityState : "visible"
            }), R()) : K("visible");
            this.ci = this.document ? Jd(this.document, "DOMContentLoaded").g(qg(this.qd.F, 739), Se(1)) : K(xh("DOMContentLoaded"))
        },
        Qh = function(a) {
            return a.document ? a.document.readyState : "complete"
        },
        Rh = function(a) {
            return a.document !== null && a.document.visibilityState !== void 0
        };
    Ph.prototype.querySelector = function(a) {
        return this.document ? this.document.querySelector(a) : null
    };
    Ph.prototype.querySelectorAll = function(a) {
        return this.document ? Ob(this.document.querySelectorAll(a)) : []
    };
    var Sh = function(a) {
        return a.document !== null && typeof a.document.elementFromPoint === "function"
    };
    Ph.prototype.elementFromPoint = function(a, b) {
        if (!this.document || !Sh(this)) return null;
        a = this.document.elementFromPoint(a, b);
        return a === null ? null : new yh(a)
    };
    var Th = function(a, b, c) {
            c = c === void 0 ? !1 : c;
            if (b.i === void 0 || !a.document) return K(b).g(qg(a.qd.F, 749));
            var d = new dd(1),
                e = function() {
                    d.next(b)
                };
            c || Oh(b.i, e);
            Hh(b.i, e);
            return d.g(qg(a.qd.F, 749), Se(1))
        },
        Uh = function(a, b) {
            a = a.document;
            if (!a) return K(!1);
            var c = Qd(K(null), Jd(a, "DOMContentLoaded", {
                    once: !0
                }), Jd(a, "load", {
                    once: !0
                })),
                d = new yh({
                    document: a,
                    element: b
                });
            return c.g(M(function() {
                if (!d.i) return !1;
                var e = d.i,
                    f = e.document;
                e = e.element;
                var g, h, k = (h = (g = f.body) != null ? g : f.children[0]) != null ? h : f;
                try {
                    k.appendChild(e),
                        d.release()
                } catch (l) {}
                return !d.i
            }), P(function(e) {
                return e
            }), Se(1), Pe(!1), hf({
                complete: function() {
                    return void d.release()
                }
            }))
        },
        Vh = function(a, b, c) {
            var d, e, f;
            return Fa(function(g) {
                if (g.s == 1) {
                    d = a.global.document.createElement("iframe");
                    e = new Promise(function(k) {
                        d.onload = k;
                        d.onerror = k
                    });
                    if (b instanceof cb) var h = b.gg;
                    else throw Error("Unexpected type when unwrapping TrustedResourceUrl");
                    d.src = h.toString();
                    return sa(g, id(Uh(a, d)), 2)
                }
                if (g.s != 3) {
                    if (!g.ca) return g.return();
                    d.style.display = "none";
                    return sa(g,
                        e, 3)
                }
                f = d.contentWindow;
                if (!f) return g.return();
                f.postMessage(c, "*");
                return g.return(d)
            })
        };
    da.Object.defineProperties(Ph.prototype, {
        document: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return Xg(this.global, "document") ? this.global.document || null : null
            }
        }
    });
    var Wh = {
        left: 0,
        top: 0,
        width: 0,
        height: 0
    };

    function Xh(a, b) {
        return a.left === b.left && a.top === b.top && a.width === b.width && a.height === b.height
    }

    function Yh(a, b) {
        return {
            left: Math.max(a.left, b.left),
            top: Math.max(a.top, b.top),
            width: Math.max(0, Math.min(a.left + a.width, b.left + b.width) - Math.max(a.left, b.left)),
            height: Math.max(0, Math.min(a.top + a.height, b.top + b.height) - Math.max(a.top, b.top))
        }
    }

    function Zh(a, b) {
        return {
            left: Math.round(a.left + b.x),
            top: Math.round(a.top + b.y),
            width: a.width,
            height: a.height
        }
    };
    var $h = function(a, b) {
        this.x = a !== void 0 ? a : 0;
        this.y = b !== void 0 ? b : 0
    };
    n = $h.prototype;
    n.clone = function() {
        return new $h(this.x, this.y)
    };
    n.toString = function() {
        return "(" + this.x + ", " + this.y + ")"
    };
    n.equals = function(a) {
        return a instanceof $h && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    };
    n.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    n.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    n.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    n.translate = function(a, b) {
        a instanceof $h ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), typeof b === "number" && (this.y += b));
        return this
    };
    n.scale = function(a, b) {
        this.x *= a;
        this.y *= typeof b === "number" ? b : a;
        return this
    };
    var ai = function(a, b) {
        this.width = a;
        this.height = b
    };
    n = ai.prototype;
    n.clone = function() {
        return new ai(this.width, this.height)
    };
    n.toString = function() {
        return "(" + this.width + " x " + this.height + ")"
    };
    n.aspectRatio = function() {
        return this.width / this.height
    };
    n.isEmpty = function() {
        return !(this.width * this.height)
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
    var di = function(a) {
            return a ? new bi(ci(a)) : yb || (yb = new bi)
        },
        ei = function(a) {
            var b = a.scrollingElement ? a.scrollingElement : ch || a.compatMode != "CSS1Compat" ? a.body || a.documentElement : a.documentElement;
            a = a.defaultView;
            return new $h(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        },
        fi = function(a, b, c) {
            function d(h) {
                h && b.appendChild(typeof h === "string" ? a.createTextNode(h) : h)
            }
            for (var e = 1; e < c.length; e++) {
                var f = c[e];
                if (!Na(f) || Oa(f) && f.nodeType > 0) d(f);
                else {
                    a: {
                        if (f && typeof f.length == "number") {
                            if (Oa(f)) {
                                var g =
                                    typeof f.item == "function" || typeof f.item == "string";
                                break a
                            }
                            if (typeof f === "function") {
                                g = typeof f.item == "function";
                                break a
                            }
                        }
                        g = !1
                    }
                    Kb(g ? Ob(f) : f, d)
                }
            }
        },
        ci = function(a) {
            E(a, "Node cannot be null or undefined.");
            return a.nodeType == 9 ? a : a.ownerDocument || a.document
        },
        gi = function(a, b) {
            a && (a = a.parentNode);
            for (var c = 0; a;) {
                E(a.name != "parentNode");
                if (b(a)) return a;
                a = a.parentNode;
                c++
            }
            return null
        },
        bi = function(a) {
            this.jc = a || Ka.document || document
        };
    n = bi.prototype;
    n.getElementsByTagName = function(a, b) {
        return (b || this.jc).getElementsByTagName(String(a))
    };
    n.createElement = function(a) {
        var b = this.jc;
        a = String(a);
        b.contentType === "application/xhtml+xml" && (a = a.toLowerCase());
        return b.createElement(a)
    };
    n.createTextNode = function(a) {
        return this.jc.createTextNode(String(a))
    };
    n.appendChild = function(a, b) {
        E(a != null && b != null, "goog.dom.appendChild expects non-null arguments");
        a.appendChild(b)
    };
    n.append = function(a, b) {
        fi(ci(a), a, arguments)
    };
    n.canHaveChildren = function(a) {
        if (a.nodeType != 1) return !1;
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
    };
    n.removeNode = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    n.isElement = function(a) {
        return Oa(a) && a.nodeType == 1
    };
    n.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && b.nodeType == 1) return a == b || a.contains(b);
        if (typeof a.compareDocumentPosition != "undefined") return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    var hi = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    n = hi.prototype;
    n.de = function() {
        return this.right - this.left
    };
    n.be = function() {
        return this.bottom - this.top
    };
    n.clone = function() {
        return new hi(this.top, this.right, this.bottom, this.left)
    };
    n.toString = function() {
        return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
    };
    n.contains = function(a) {
        return this && a ? a instanceof hi ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    n.expand = function(a, b, c, d) {
        Oa(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
        return this
    };
    n.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    n.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    n.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    n.translate = function(a, b) {
        a instanceof $h ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (Db(a), this.left += a, this.right += a, typeof b === "number" && (this.top += b, this.bottom += b));
        return this
    };
    n.scale = function(a, b) {
        b = typeof b === "number" ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };

    function ii(a, b) {
        if (a) throw Error("S");
        b.push(65533)
    }

    function ji(a, b) {
        b = String.fromCharCode.apply(null, b);
        return a == null ? b : a + b
    }
    var ki = void 0,
        li, mi, ni = typeof TextDecoder !== "undefined",
        oi, pi = typeof String.prototype.isWellFormed === "function",
        qi = typeof TextEncoder !== "undefined";
    var ri = typeof Uint8Array !== "undefined",
        si = !ah && typeof btoa === "function";

    function ti(a) {
        if (!si) return sh(a);
        for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
        return btoa(b)
    }
    var ui = /[-_.]/g,
        vi = {
            "-": "+",
            _: "/",
            ".": "="
        };

    function wi(a) {
        return vi[a] || ""
    }

    function xi(a) {
        if (!si) return uh(a);
        var b = a;
        ui.test(b) && (b = b.replace(ui, wi));
        try {
            var c = atob(b)
        } catch (d) {
            throw Error("U`" + a + "`" + d);
        }
        a = new Uint8Array(c.length);
        for (b = 0; b < c.length; b++) a[b] = c.charCodeAt(b);
        return a
    }
    var yi = {};
    var Ai = function(a, b) {
        if (b !== yi) throw Error("W");
        this.Kc = a;
        if (a != null && a.length === 0) throw Error("V");
        this.dontPassByteStringToStructuredClone = zi
    };
    Ai.prototype.isEmpty = function() {
        return this.Kc == null
    };
    var Bi;

    function zi() {};

    function Ci(a) {
        Jb(a, Ai);
        if (yi !== yi) throw Error("W");
        var b = a.Kc;
        b == null || ri && b != null && b instanceof Uint8Array || (typeof b === "string" ? b = xi(b) : (Cb("Cannot coerce to Uint8Array: " + Ma(b)), b = null));
        return (b == null ? b : a.Kc = b) || new Uint8Array(0)
    };

    function Di(a) {
        if (typeof a === "string") return {
            buffer: xi(a),
            nb: !1
        };
        if (Array.isArray(a)) return {
            buffer: new Uint8Array(a),
            nb: !1
        };
        if (a.constructor === Uint8Array) return {
            buffer: a,
            nb: !1
        };
        if (a.constructor === ArrayBuffer) return {
            buffer: new Uint8Array(a),
            nb: !1
        };
        if (a.constructor === Ai) return {
            buffer: Ci(a),
            nb: !0
        };
        if (a instanceof Uint8Array) return {
            buffer: new Uint8Array(a.buffer, a.byteOffset, a.byteLength),
            nb: !1
        };
        throw Error("ea");
    };

    function Gi() {
        return typeof BigInt === "function"
    };

    function Hi(a, b) {
        b = b === void 0 ? new Set : b;
        if (b.has(a)) return "(Recursive reference)";
        switch (typeof a) {
            case "object":
                if (a) {
                    var c = Object.getPrototypeOf(a);
                    switch (c) {
                        case Map.prototype:
                        case Set.prototype:
                        case Array.prototype:
                            b.add(a);
                            var d = "[" + Array.from(a, function(e) {
                                return Hi(e, b)
                            }).join(", ") + "]";
                            b.delete(a);
                            c !== Array.prototype && (d = Ii(c.constructor) + "(" + d + ")");
                            return d;
                        case Object.prototype:
                            return b.add(a), c = "{" + Object.entries(a).map(function(e) {
                                var f = u(e);
                                e = f.next().value;
                                f = f.next().value;
                                return e +
                                    ": " + Hi(f, b)
                            }).join(", ") + "}", b.delete(a), c;
                        default:
                            return d = "Object", c && c.constructor && (d = Ii(c.constructor)), typeof a.toString === "function" && a.toString !== Object.prototype.toString ? d + "(" + String(a) + ")" : "(object " + d + ")"
                    }
                }
                break;
            case "function":
                return "function " + Ii(a);
            case "number":
                if (!Number.isFinite(a)) return String(a);
                break;
            case "bigint":
                return a.toString(10) + "n";
            case "symbol":
                return a.toString()
        }
        return JSON.stringify(a)
    }

    function Ii(a) {
        var b = a.displayName;
        return b && typeof b === "string" || (b = a.name) && typeof b === "string" ? b : (a = /function\s+([^\(]+)/m.exec(String(a))) ? a[1] : "(Anonymous)"
    };

    function Ji(a, b) {
        var c = Ki,
            d = [];
        Li(b, a, d) || Mi.apply(null, [void 0, c, "Guard " + b.Jf().trim() + " failed:"].concat(x(d.reverse())))
    }

    function Ni(a, b) {
        a.Aj = !0;
        a.Jf = typeof b === "function" ? b : function() {
            return b
        };
        return a
    }

    function Li(a, b, c) {
        var d = a(b, c);
        d || Oi(c, function() {
            var e = "";
            e.length > 0 && (e += ": ");
            return e + "Expected " + a.Jf().trim() + ", got " + Hi(b)
        });
        return d
    }

    function Oi(a, b) {
        a == null || a.push((typeof b === "function" ? b() : b).trim())
    }
    var Ki = void 0;

    function Pi(a) {
        return typeof a === "function" ? a() : a
    }

    function Mi() {
        throw Error(C.apply(0, arguments).map(Pi).filter(Boolean).join("\n").trim().replace(/:$/, ""));
    };
    var Qi = Ni(function(a) {
            return typeof a === "string"
        }, "string"),
        Ri = Ni(function(a) {
            return typeof a === "bigint"
        }, "bigint");

    function Si() {
        var a = Error;
        return Ni(function(b) {
            return b instanceof a
        }, function() {
            return Ii(a)
        })
    };
    var Ti = typeof Ka.BigInt === "function" && typeof Ka.BigInt(0) === "bigint";
    var Zi = Ni(function(a) {
            if (Ti) return Ji(Ui, Ri), Ji(Vi, Ri), a = BigInt(a), a >= Ui && a <= Vi;
            Ji(a, Qi);
            return a[0] === "-" ? Wi(a, Xi) : Wi(a, Yi)
        }, "isSafeInt52"),
        Xi = Number.MIN_SAFE_INTEGER.toString(),
        Ui = Ti ? BigInt(Number.MIN_SAFE_INTEGER) : void 0,
        Yi = Number.MAX_SAFE_INTEGER.toString(),
        Vi = Ti ? BigInt(Number.MAX_SAFE_INTEGER) : void 0;

    function Wi(a, b) {
        if (a.length > b.length) return !1;
        if (a.length < b.length || a === b) return !0;
        for (var c = 0; c < a.length; c++) {
            var d = a[c],
                e = b[c];
            if (d > e) return !1;
            if (d < e) return !0
        }
        c = Ki;
        Mi("Assertion fail:", "isInRange weird case. Value was: " + a + ". Boundary was: " + b + "." || c)
    };
    var $i = typeof Uint8Array.prototype.slice === "function",
        Y = 0,
        aj = 0,
        bj;

    function cj(a) {
        var b = a >>> 0;
        Y = b;
        aj = (a - b) / 4294967296 >>> 0
    }

    function dj(a) {
        if (a < 0) {
            cj(0 - a);
            var b = u(ej(Y, aj));
            a = b.next().value;
            b = b.next().value;
            Y = a >>> 0;
            aj = b >>> 0
        } else cj(a)
    }

    function fj(a) {
        E(a <= 8);
        return bj || (bj = new DataView(new ArrayBuffer(8)))
    }

    function gj(a, b) {
        return b * 4294967296 + (a >>> 0)
    }

    function hj(a, b) {
        var c = b & 2147483648;
        c && (a = ~a + 1 >>> 0, b = ~b >>> 0, a == 0 && (b = b + 1 >>> 0));
        a = gj(a, b);
        return c ? -a : a
    }

    function ij(a, b) {
        b >>>= 0;
        a >>>= 0;
        if (b <= 2097151) var c = "" + (4294967296 * b + a);
        else Gi() ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + c * 6777216 + b * 6710656, c += b * 8147497, b *= 2, a >= 1E7 && (c += a / 1E7 >>> 0, a %= 1E7), c >= 1E7 && (b += c / 1E7 >>> 0, c %= 1E7), E(b), c = b + jj(c) + jj(a));
        return c
    }

    function jj(a) {
        a = String(a);
        return "0000000".slice(a.length) + a
    }

    function kj(a) {
        E(a.length > 0);
        if (a.length < 16) dj(Number(a));
        else if (Gi()) a = BigInt(a), Y = Number(a & BigInt(4294967295)) >>> 0, aj = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            E(a.length > 0);
            var b = +(a[0] === "-");
            aj = Y = 0;
            for (var c = a.length, d = 0 + b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), aj *= 1E6, Y = Y * 1E6 + d, Y >= 4294967296 && (aj += Math.trunc(Y / 4294967296), aj >>>= 0, Y >>>= 0);
            b && (b = u(ej(Y, aj)), a = b.next().value, b = b.next().value, Y = a, aj = b)
        }
    }

    function ej(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };
    var lj = function(a, b) {
        this.ua = null;
        this.Md = !1;
        this.O = this.Ea = this.Oa = 0;
        this.nc(a, void 0, void 0, b)
    };
    n = lj.prototype;
    n.nc = function(a, b, c, d) {
        d = d === void 0 ? {} : d;
        this.Rc = d.Rc === void 0 ? !1 : d.Rc;
        a && (a = Di(a), this.ua = a.buffer, this.Md = a.nb, this.Oa = b || 0, this.Ea = c !== void 0 ? this.Oa + c : this.ua.length, this.O = this.Oa)
    };
    n.zf = function() {
        this.clear();
        mj.length < 100 && mj.push(this)
    };
    n.clear = function() {
        this.ua = null;
        this.Md = !1;
        this.O = this.Ea = this.Oa = 0;
        this.Rc = !1
    };
    n.setEnd = function(a) {
        this.Ea = a
    };
    n.reset = function() {
        this.O = this.Oa
    };
    n.Z = function() {
        return this.O
    };
    n.advance = function(a) {
        nj(this, this.O + a)
    };
    var oj = function(a, b) {
            var c = 0,
                d = 0,
                e = 0,
                f = a.ua,
                g = a.O;
            do {
                var h = f[g++];
                c |= (h & 127) << e;
                e += 7
            } while (e < 32 && h & 128);
            e > 32 && (d |= (h & 127) >> 4);
            for (e = 3; e < 32 && h & 128; e += 7) h = f[g++], d |= (h & 127) << e;
            nj(a, g);
            if (h < 128) return b(c >>> 0, d >>> 0);
            throw Error("ba");
        },
        nj = function(a, b) {
            a.O = b;
            if (b > a.Ea) throw Error("ca`" + b + "`" + a.Ea);
        },
        pj = function(a) {
            var b = a.ua,
                c = a.O,
                d = b[c++],
                e = d & 127;
            if (d & 128 && (d = b[c++], e |= (d & 127) << 7, d & 128 && (d = b[c++], e |= (d & 127) << 14, d & 128 && (d = b[c++], e |= (d & 127) << 21, d & 128 && (d = b[c++], e |= d << 28, d & 128 && b[c++] & 128 && b[c++] & 128 &&
                    b[c++] & 128 && b[c++] & 128 && b[c++] & 128))))) throw Error("ba");
            nj(a, c);
            return e
        },
        qj = function(a) {
            return pj(a) >>> 0
        },
        rj = function(a) {
            return oj(a, gj)
        },
        sj = function(a) {
            var b = a.ua,
                c = a.O,
                d = b[c + 0],
                e = b[c + 1],
                f = b[c + 2];
            b = b[c + 3];
            a.advance(4);
            return (d << 0 | e << 8 | f << 16 | b << 24) >>> 0
        },
        tj = function(a) {
            for (var b = 0, c = a.O, d = c + 10, e = a.ua; c < d;) {
                var f = e[c++];
                b |= f;
                if ((f & 128) === 0) return nj(a, c), !!(b & 127)
            }
            throw Error("ba");
        },
        uj = function(a) {
            return pj(a)
        },
        vj = function(a, b) {
            if (b < 0) throw Error("da`" + b);
            var c = a.O,
                d = c + b;
            if (d > a.Ea) throw Error("ca`" +
                (a.Ea - c) + "`" + b);
            a.O = d;
            return c
        };
    lj.prototype.ig = function(a, b) {
        var c = vj(this, a),
            d = E(this.ua);
        if (ni) {
            var e;
            b ? (e = li) || (e = li = new TextDecoder("utf-8", {
                fatal: !0
            })) : (e = mi) || (e = mi = new TextDecoder("utf-8", {
                fatal: !1
            }));
            var f = c + a;
            d = c === 0 && f === d.length ? d : d.subarray(c, f);
            try {
                var g = e.decode(d)
            } catch (m) {
                if (b) {
                    if (ki === void 0) {
                        try {
                            e.decode(new Uint8Array([128]))
                        } catch (t) {}
                        try {
                            e.decode(new Uint8Array([97])), ki = !0
                        } catch (t) {
                            ki = !1
                        }
                    }
                    b = !ki
                }
                b && (li = void 0);
                throw m;
            }
        } else {
            a = c + a;
            g = [];
            for (var h = null, k, l; c < a;) k = d[c++], k < 128 ? g.push(k) : k < 224 ? c >= a ? ii(b, g) : (l =
                d[c++], k < 194 || (l & 192) !== 128 ? (c--, ii(b, g)) : (k = (k & 31) << 6 | l & 63, E(k >= 128 && k <= 2047), g.push(k))) : k < 240 ? c >= a - 1 ? ii(b, g) : (l = d[c++], (l & 192) !== 128 || k === 224 && l < 160 || k === 237 && l >= 160 || ((e = d[c++]) & 192) !== 128 ? (c--, ii(b, g)) : (k = (k & 15) << 12 | (l & 63) << 6 | e & 63, E(k >= 2048 && k <= 65535), E(k < 55296 || k > 57343), g.push(k))) : k <= 244 ? c >= a - 2 ? ii(b, g) : (l = d[c++], (l & 192) !== 128 || (k << 28) + (l - 144) >> 30 !== 0 || ((e = d[c++]) & 192) !== 128 || ((f = d[c++]) & 192) !== 128 ? (c--, ii(b, g)) : (k = (k & 7) << 18 | (l & 63) << 12 | (e & 63) << 6 | f & 63, E(k >= 65536 && k <= 1114111), k -= 65536, g.push((k >>
                10 & 1023) + 55296, (k & 1023) + 56320))) : ii(b, g), g.length >= 8192 && (h = ji(h, g), g.length = 0);
            E(c === a, "expected " + c + " === " + a);
            g = ji(h, g)
        }
        return g
    };
    lj.prototype.Be = function(a) {
        if (a == 0) return Bi || (Bi = new Ai(null, yi));
        var b = vj(this, a);
        if (this.Rc && this.Md) b = this.ua.subarray(b, b + a);
        else {
            var c = E(this.ua);
            a = b + a;
            b = b === a ? new Uint8Array(0) : $i ? c.slice(b, a) : new Uint8Array(c.subarray(b, a))
        }
        Jb(b, Uint8Array);
        return b.length == 0 ? Bi || (Bi = new Ai(null, yi)) : new Ai(b, yi)
    };
    var mj = [];
    E(!0);
    var xj = function(a, b) {
            if (mj.length) {
                var c = mj.pop();
                c.nc(a, void 0, void 0, b);
                a = c
            } else a = new lj(a, b);
            this.m = a;
            this.jb = this.m.Z();
            this.l = this.pd = this.Mb = -1;
            wj(this, b)
        },
        wj = function(a, b) {
            b = b === void 0 ? {} : b;
            a.Wd = b.Wd === void 0 ? !1 : b.Wd
        };
    xj.prototype.zf = function() {
        this.m.clear();
        this.l = this.Mb = this.pd = -1;
        yj.length < 100 && yj.push(this)
    };
    xj.prototype.Z = function() {
        return this.m.Z()
    };
    xj.prototype.reset = function() {
        this.m.reset();
        this.jb = this.m.Z();
        this.l = this.Mb = this.pd = -1
    };
    xj.prototype.advance = function(a) {
        this.m.advance(a)
    };
    var zj = function(a) {
            var b = a.m;
            if (b.O == b.Ea) return !1;
            a.pd !== -1 && (b = a.m.Z(), a.m.O = a.jb, qj(a.m), a.l === 4 || a.l === 3 ? E(b === a.m.Z(), "Expected to not advance the cursor.  Group tags do not have values.") : E(b > a.m.Z(), "Expected to read the field, did you forget to call a read or skip method?"), a.m.O = b);
            a.jb = a.m.Z();
            b = qj(a.m);
            var c = b >>> 3,
                d = b & 7;
            if (!(d >= 0 && d <= 5)) throw Error("Y`" + d + "`" + a.jb);
            if (c < 1) throw Error("Z`" + c + "`" + a.jb);
            a.pd = b;
            a.Mb = c;
            a.l = d;
            return !0
        },
        Aj = function(a) {
            switch (a.l) {
                case 0:
                    a.l != 0 ? (Cb("Invalid wire type for skipVarintField"),
                        Aj(a)) : tj(a.m);
                    break;
                case 1:
                    E(a.l === 1);
                    a.m.advance(8);
                    break;
                case 2:
                    if (a.l != 2) Cb("Invalid wire type for skipDelimitedField"), Aj(a);
                    else {
                        var b = qj(a.m);
                        a.m.advance(b)
                    }
                    break;
                case 5:
                    E(a.l === 5);
                    a.m.advance(4);
                    break;
                case 3:
                    b = a.Mb;
                    do {
                        if (!zj(a)) throw Error("$");
                        if (a.l == 4) {
                            if (a.Mb != b) throw Error("aa");
                            break
                        }
                        Aj(a)
                    } while (1);
                    break;
                default:
                    throw Error("Y`" + a.l + "`" + a.jb);
            }
        },
        Bj = function(a, b, c) {
            E(a.l == 2);
            var d = a.m.Ea,
                e = qj(a.m),
                f = a.m.Z() + e,
                g = f - d;
            g <= 0 && (a.m.setEnd(f), c(b, a, void 0, void 0, void 0), g = f - a.m.Z());
            if (g) throw Error("X`" +
                e + "`" + (e - g));
            a.m.O = f;
            a.m.setEnd(d)
        },
        Cj = function(a) {
            E(a.l == 0);
            return pj(a.m)
        },
        Dj = function(a) {
            E(a.l == 0);
            return qj(a.m)
        },
        Ej = function(a) {
            E(a.l == 0);
            return rj(a.m)
        },
        Fj = function(a) {
            E(a.l == 0);
            return pj(a.m)
        };
    xj.prototype.ig = function() {
        return Gj(this)
    };
    var Gj = function(a) {
        E(a.l == 2);
        var b = qj(a.m);
        return a.m.ig(b, !0)
    };
    xj.prototype.Be = function() {
        E(this.l == 2);
        var a = qj(this.m);
        return this.m.Be(a)
    };
    var Hj = function(a, b, c) {
            E(a.l == 2);
            var d = qj(a.m);
            for (d = a.m.Z() + d; a.m.Z() < d;) c.push(b(a.m))
        },
        yj = [];

    function Ij(a) {
        return Array.prototype.slice.call(a)
    };
    var Jj = typeof Symbol === "function" && typeof Symbol() === "symbol";

    function Kj(a, b) {
        return typeof Symbol === "function" && typeof Symbol() === "symbol" ? Symbol(a) : b
    }
    var Lj = Kj("INTERNAL_ARRAY_STATE"),
        Mj = Kj("defaultInstance", "0di");
    E(Math.round(Math.log2(Math.max.apply(Math, x(Object.values({
        kj: 1,
        ij: 2,
        hj: 4,
        oj: 8,
        nj: 16,
        mj: 32,
        Ui: 64,
        rj: 128,
        gj: 256,
        fj: 512,
        jj: 1024,
        Zi: 2048,
        qj: 4096,
        aj: 8192,
        Xi: 16384
    }))))) === 14);

    function Nj(a) {
        E((a & 33554431) == a)
    }
    var Oj = Jj ? function(a, b) {
            Nj(b);
            Hb(a, "state is only maintained on arrays.");
            a[Lj] |= b
        } : function(a, b) {
            Nj(b);
            Hb(a, "state is only maintained on arrays.");
            a.ra !== void 0 ? a.ra |= b : Object.defineProperties(a, {
                ra: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        },
        Pj = Jj ? function(a, b) {
            Nj(b);
            Hb(a, "state is only maintained on arrays.");
            a[Lj] &= ~b
        } : function(a, b) {
            Nj(b);
            Hb(a, "state is only maintained on arrays.");
            a.ra !== void 0 && (a.ra &= ~b)
        },
        Qj = Object.getOwnPropertyDescriptor(Array.prototype, "Lh");
    Object.defineProperties(Array.prototype, {
        Lh: {
            get: function() {
                function a(e, f) {
                    e & b && c.push(f)
                }
                var b = Rj(this),
                    c = [];
                a(1, "IS_REPEATED_FIELD");
                a(2, "IS_IMMUTABLE_ARRAY");
                a(4, "IS_API_FORMATTED");
                a(4096, "STRING_FORMATTED");
                a(8192, "GBIGINT_FORMATTED");
                a(8192, "BINARY");
                a(8, "ONLY_MUTABLE_VALUES");
                a(32, "MUTABLE_REFERENCES_ARE_OWNED");
                a(64, "CONSTRUCTED");
                a(128, "TRANSFERRED");
                a(256, "HAS_SPARSE_OBJECT");
                a(512, "HAS_MESSAGE_ID");
                a(2048, "FROZEN_ARRAY");
                a(16384, "DESERIALIZED_FROM_BINARY");
                var d = b >> 15 & 1023 || 536870912;
                d !== 536870912 && c.push("pivot: " + d);
                d = c.join(",");
                return Qj ? Qj.get.call(this) + "|" + d : d
            },
            configurable: !0,
            enumerable: !1
        }
    });
    var Rj = Jj ? function(a) {
        Hb(a, "state is only maintained on arrays.");
        return a[Lj] | 0
    } : function(a) {
        Hb(a, "state is only maintained on arrays.");
        return a.ra | 0
    };

    function Sj(a, b, c) {
        (c === void 0 ? 0 : c) || E(b & 64, "state for messages must be constructed");
        E((b & 5) === 0, "state for messages should not contain repeated field state");
        c = b >> 15 & 1023 || 536870912;
        var d = a.length;
        E(c + Tj(b) >= d - 1, "pivot %s is pointing at an index earlier than the last index of the array, length: %s", c, d);
        b & 512 && E(typeof a[0] === "string", "arrays with a message_id bit must have a string in the first position, got: %s", a[0]);
        a = d ? a[d - 1] : void 0;
        E((a != null && typeof a === "object" && a.constructor === Object) ===
            !!(b & 256), "arraystate and array disagree on sparseObject presence")
    }
    var Uj = Jj ? function(a, b) {
            b = b === void 0 ? !1 : b;
            Hb(a, "state is only maintained on arrays.");
            var c = a[Lj];
            Sj(a, c, b);
            return c
        } : function(a, b) {
            b = b === void 0 ? !1 : b;
            Hb(a, "state is only maintained on arrays.");
            var c = a.ra;
            Sj(a, c, b);
            return c
        },
        Vj = Jj ? function(a, b) {
            Hb(a, "state is only maintained on arrays.");
            Nj(b);
            a[Lj] = b
        } : function(a, b) {
            Hb(a, "state is only maintained on arrays.");
            Nj(b);
            a.ra !== void 0 ? a.ra = b : Object.defineProperties(a, {
                ra: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        };

    function Wj(a) {
        return !!(Rj(a) & 2)
    }

    function Xj(a, b) {
        Vj(b, (a | 0) & -30975)
    }

    function Yj(a, b) {
        Vj(b, (a | 34) & -30941)
    }

    function Zj(a, b) {
        Db(b);
        E(b > 0 && b <= 1023 || 536870912 === b);
        return a & -33521665 | (b & 1023) << 15
    }

    function Tj(a) {
        return +!!(a & 512) - 1
    };
    var ak, bk = {};

    function ck(a) {
        var b = a.Vh === bk;
        E(!ak || b === a instanceof ak);
        return b
    }
    var dk = {};

    function ek(a) {
        var b = !(!a || typeof a !== "object" || a.Bj !== dk);
        E(b === a instanceof Map);
        return b && Jb(a, Map).size === 0
    }

    function fk(a, b) {
        Db(a);
        E(a > 0);
        E(b === 0 || b === -1);
        return a + b
    }

    function gk(a, b) {
        Db(a);
        E(a >= 0);
        E(b === 0 || b === -1);
        return a - b
    }

    function hk(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function ik(a) {
        return !Array.isArray(a) || a.length ? !1 : Rj(a) & 1 ? !0 : !1
    }
    var jk, kk = [];
    Vj(kk, 55);
    jk = Object.freeze(kk);

    function lk(a) {
        if (a & 2) throw Error("ma");
    }

    function mk() {}
    var nk;

    function ok(a, b) {
        Hb(a);
        Hb(b);
        (b = nk ? Hb(b)[nk] : void 0) && (a[nk] = Ij(b))
    }

    function pk(a, b) {
        var c = Rj(Hb(a));
        b || E(!(c & 2 && c & 4 || c & 2048) || Object.isFrozen(a));
        b = !!(c & 8);
        c = !!(c & 16 && c & 32);
        if (b || c) {
            var d, e, f;
            a.forEach(function(g) {
                Array.isArray(g) ? f = !0 : g && ck(g) && (Wj(g.A) ? e = !0 : d = !0)
            });
            f && E(!e && !d);
            c && E(!f && !d);
            b && E(!f && !e)
        }
        qk(a)
    }

    function qk(a) {
        var b = Rj(a),
            c = b & 4,
            d = (4096 & b ? 1 : 0) + (8192 & b ? 1 : 0);
        E(c && d <= 1 || !c && d === 0, "Expected at most 1 type-specific formatting bit, but got " + d + " with state: " + b);
        if (4096 & Rj(a))
            for (b = 0; b < a.length; b++) typeof a[b] !== "string" && Cb("Unexpected element of type " + typeof a[b] + " in string formatted repeated 64-bit int field")
    }
    var rk = Object.freeze({}),
        sk = Object.freeze({}),
        tk = Object.freeze({}),
        uk = Symbol("debugExtensions");

    function vk(a) {
        a = Error(a);
        Sb(a, "incident");
        nh(a)
    }

    function wk(a) {
        a = Error(a);
        Sb(a, "warning");
        return a
    };

    function xk(a) {
        if (a == null || typeof a === "number") return a;
        if (a === "NaN" || a === "Infinity" || a === "-Infinity") return Number(a)
    }

    function yk(a) {
        return a.displayName || a.name || "unknown type name"
    }

    function zk(a) {
        if (a == null || typeof a === "boolean") return a;
        if (typeof a === "number") return !!a
    }
    var Ak = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function Bk(a) {
        var b = typeof a;
        switch (b) {
            case "bigint":
                return !0;
            case "number":
                return Number.isFinite(a)
        }
        return b !== "string" ? !1 : Ak.test(a)
    }

    function Ck(a) {
        if (!Number.isFinite(a)) throw a = "Expected enum as finite number but got " + Ma(a) + ": " + a, wk(a);
        return a | 0
    }

    function Dk(a) {
        return a == null ? a : Number.isFinite(a) ? a | 0 : void 0
    }

    function Ek(a) {
        return "Expected int32 as finite number but got " + Ma(a) + ": " + a
    }

    function Fk(a) {
        if (typeof a !== "number") throw wk(Ek(a));
        if (!Number.isFinite(a)) throw wk(Ek(a));
        return a | 0
    }

    function Gk(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
    }

    function Hk(a) {
        return "Expected uint32 as finite number but got " + Ma(a) + ": " + a
    }

    function Ik(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a >>> 0 : void 0
    }

    function Jk(a) {
        return a[0] === "-" ? !1 : a.length < 20 ? !0 : a.length === 20 && Number(a.substring(0, 6)) < 184467
    }

    function Kk(a) {
        E(a < 0 || !(0 < a && a < Number.MAX_SAFE_INTEGER));
        E(Number.isInteger(a));
        if (a < 0) {
            dj(a);
            var b = ij(Y, aj);
            a = Number(b);
            return Number.isSafeInteger(a) ? a : b
        }
        if (Jk(String(a))) return a;
        dj(a);
        return gj(Y, aj)
    }

    function Lk(a) {
        if (a == null) return a;
        var b = typeof a;
        if (b === "bigint") return String(BigInt.asIntN(64, a));
        if (Bk(a)) {
            if (b === "string") return E(Bk(a)), E(!0), b = Math.trunc(Number(a)), Number.isSafeInteger(b) ? a = String(b) : (b = a.indexOf("."), b !== -1 && (a = a.substring(0, b)), E(a.indexOf(".") === -1), (a[0] === "-" ? a.length < 20 || a.length === 20 && Number(a.substring(0, 7)) > -922337 : a.length < 19 || a.length === 19 && Number(a.substring(0, 6)) < 922337) || (kj(a), a = Y, b = aj, b & 2147483648 ? Gi() ? a = "" + (BigInt(b | 0) << BigInt(32) | BigInt(a >>> 0)) : (b = u(ej(a,
                b)), a = b.next().value, b = b.next().value, a = "-" + ij(a, b)) : a = ij(a, b))), a;
            if (b === "number") return E(Bk(a)), E(!0), a = Math.trunc(a), Number.isSafeInteger(a) || (E(!Number.isSafeInteger(a)), E(Number.isInteger(a)), dj(a), a = hj(Y, aj)), a
        }
    }

    function Mk(a) {
        if (a == null) return a;
        var b = typeof a;
        if (b === "bigint") return String(BigInt.asUintN(64, a));
        if (Bk(a)) {
            if (b === "string") return E(Bk(a)), E(!0), b = Math.trunc(Number(a)), Number.isSafeInteger(b) && b >= 0 ? a = String(b) : (b = a.indexOf("."), b !== -1 && (a = a.substring(0, b)), E(a.indexOf(".") === -1), Jk(a) || (kj(a), a = ij(Y, aj))), a;
            if (b === "number") return E(Bk(a)), E(!0), a = Math.trunc(a), a >= 0 && Number.isSafeInteger(a) ? a : Kk(a)
        }
    }

    function Nk(a) {
        return a == null || typeof a === "string" ? a : void 0
    }

    function Ok(a, b) {
        if (!(a instanceof b)) throw Error("qa`" + yk(b) + "`" + (a && yk(a.constructor)));
    }

    function Pk(a, b, c) {
        if (a != null && typeof a === "object" && ck(a)) return a;
        if (Array.isArray(a)) {
            var d = Rj(a),
                e = d;
            e === 0 && (e |= c & 32);
            e |= c & 2;
            e !== d && Vj(a, e);
            return new b(a)
        }
    };
    var Xk = function(a) {
        Qk === void 0 && (Qk = typeof Proxy === "function" ? Rk(Proxy) : null);
        if (!Qk || !Sk()) return a;
        var b = Tk(a);
        if (b) return b;
        var c = Error().stack;
        Uk(a);
        b = new Qk(a, {
            set: function(d, e, f) {
                Vk(c);
                d[e] = f;
                return !0
            }
        });
        Wk(a, b);
        return b
    };

    function Vk(a) {
        vk("Warning: Forbidden array mutation. This will be a hard error in the future, please fix. See go/jspb-api-gotchas#readonly-repeated-fields.\nArray origin at " + a + "\nMutation at " + Error().stack + "\n...")
    }
    var Yk = void 0,
        Zk = void 0,
        Tk = function(a) {
            var b;
            return (b = Yk) == null ? void 0 : b.get(a)
        },
        $k = function(a) {
            var b;
            return ((b = Zk) == null ? void 0 : b.get(a)) || a
        };

    function Wk(a, b) {
        (Yk || (Yk = new al)).set(a, b);
        (Zk || (Zk = new al)).set(b, a)
    }
    var Qk = void 0,
        al = void 0;

    function Sk() {
        al === void 0 && (al = typeof WeakMap === "function" ? Rk(WeakMap) : null);
        return al
    }

    function Rk(a) {
        try {
            return a.toString().indexOf("[native code]") !== -1 ? a : null
        } catch (b) {
            return null
        }
    }
    var bl = void 0;

    function Uk(a) {
        if (bl === void 0) {
            var b = new Qk([], {});
            bl = Array.prototype.concat.call([], b).length === 1
        }
        bl && typeof Symbol === "function" && Symbol.isConcatSpreadable && (a[Symbol.isConcatSpreadable] = !0)
    }
    var il = function(a, b, c) {
            if (Sk() && (!cl(a, b) || !c)) {
                c = a.length;
                for (var d = {
                        length: c
                    }, e = 0; e < Math.min(c, 10); e++) {
                    if (c <= 10) var f = e;
                    else {
                        f = c / 10;
                        var g = Math.floor(e * f);
                        f = g + Math.floor(Math.random() * (Math.floor((e + 1) * f) - g))
                    }
                    d[f] = a[f]
                }
                dl(a, d) ? (el(fl || (fl = new al), b, a, d), el(gl || (gl = new al), b, a, Error().stack)) : (vk(), hl(a, b))
            }
        },
        kl = function(a, b) {
            var c = cl(a, b);
            c && !dl(a, c) && (jl(a, b), hl(a, b))
        };

    function dl(a, b) {
        if (a.length !== b.length) return !1;
        for (var c in b) {
            var d = Number(c),
                e;
            if (e = Number.isInteger(d)) e = a[d], d = b[d], e = !(Number.isNaN(e) ? Number.isNaN(d) : e === d);
            if (e) return !1
        }
        return !0
    }
    var ll = function(a) {
        var b;
        if (a && (b = fl) != null && b.has(a) && (b = a.A))
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                if (c === b.length - 1 && hk(d))
                    for (var e in d) {
                        var f = d[e];
                        Array.isArray(f) && kl(f, a)
                    } else Array.isArray(d) && kl(d, a)
            }
    };

    function jl(a, b) {
        var c, d;
        var e = (c = gl) == null ? void 0 : (d = c.get(b)) == null ? void 0 : d.get(a);
        vk("Warning: Array transferred to proto has been mutated. This mutation will be ignored in the future, please fix. See go/jspb-api-gotchas#readonly-repeated-fields.\nArray transferred at " + e + "\nMutation prior to " + Error().stack + "\n...")
    }
    var fl = void 0,
        gl = void 0;

    function el(a, b, c, d) {
        var e = a.get(b);
        e || (e = new al, a.set(b, e));
        e.set(c, d)
    }

    function cl(a, b) {
        var c, d;
        return (c = fl) == null ? void 0 : (d = c.get(b)) == null ? void 0 : d.get(a)
    }
    var hl = function(a, b) {
        var c, d;
        (c = fl) == null || (d = c.get(b)) == null || d.delete(a);
        var e, f;
        (e = gl) == null || (f = e.get(b)) == null || f.delete(a)
    };
    var ml;

    function nl(a, b) {
        E(!!(Rj(b) & 32));
        ml = b;
        a = new a(b);
        ml = void 0;
        return a
    }
    var ol, pl;

    function ql(a) {
        switch (typeof a) {
            case "boolean":
                return ol || (ol = [0, void 0, !0]);
            case "number":
                return a > 0 ? void 0 : a === 0 ? pl || (pl = [0, void 0]) : [-a, void 0];
            case "string":
                return [0, a];
            case "object":
                return Hb(a), E(a.length === 2 || a.length === 3 && a[2] === !0), E(a[0] == null || typeof a[0] === "number" && a[0] >= 0), E(a[1] == null || typeof a[1] === "string"), a
        }
    }

    function rl(a, b, c) {
        Hb(b);
        a = sl(a, b[0], b[1], c ? 1 : 2);
        b !== ol && c && Oj(a, 16384);
        return a
    }

    function sl(a, b, c, d) {
        var e;
        d = (e = d) != null ? e : 0;
        a == null && (a = ml);
        ml = void 0;
        if (a != null)
            for (e = 0; e < a.length; e++) {
                var f = a[e];
                Array.isArray(f) && pk(f)
            }
        if (a == null) f = 96, c ? (a = [c], f |= 512) : a = [], b && (f = Zj(f, b));
        else {
            if (!Array.isArray(a)) throw Error("ra`" + JSON.stringify(a) + "`" + Ma(a));
            f = Rj(a);
            if (Object.isFrozen(a) || !Object.isExtensible(a) || Object.isSealed(a)) throw Error("ua");
            if (f & 2048) throw Error("va");
            if (f & 64) return Sj(a, f), d !== 1 && f & 16384 && E(f & 2, "state from binary must be immutable"), a;
            d === 1 || d === 2 || (f |= 64);
            if (c &&
                (f |= 512, c !== a[0])) throw Error("wa`" + c + "`" + JSON.stringify(a[0]) + "`" + Ma(a[0]));
            a: {
                e = a;c = f;
                if (f = e.length) {
                    var g = f - 1;
                    if (hk(e[g])) {
                        c |= 256;
                        b = gk(g, Tj(c));
                        if (b >= 1024) throw Error("xa`" + b);
                        f = Zj(c, b);
                        break a
                    }
                }
                if (b) {
                    b = Math.max(b, gk(f, Tj(c)));
                    if (b > 1024) throw Error("ya`" + f);
                    f = Zj(c, b)
                } else f = c
            }
        }
        Vj(a, f);
        d === 1 || d === 2 || E(f & 64);
        return a
    };
    var tl = function() {
        throw Error("za");
    };
    if (typeof Symbol != "undefined" && typeof Symbol.hasInstance != "undefined") {
        var ul = function() {
                throw Error("Aa");
            },
            vl = {};
        Object.defineProperties(tl, (vl[Symbol.hasInstance] = {
            value: ul,
            configurable: !1,
            writable: !1,
            enumerable: !1
        }, vl));
        E(tl[Symbol.hasInstance] === ul, "defineProperties did not work: was it monkey-patched?")
    };

    function wl(a, b) {
        return xl(b)
    }

    function xl(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "bigint":
                return Zi(a) ? Number(a) : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (ik(a)) return
                    } else {
                        if (ri && a != null && a instanceof Uint8Array) return ti(a);
                        if (a instanceof Ai) {
                            var b = a.Kc;
                            return b == null ? "" : typeof b === "string" ? b : a.Kc = ti(b)
                        }
                    }
        }
        return a
    };

    function yl(a, b, c) {
        var d = Ij(a),
            e = d.length,
            f = b & 256 ? d[e - 1] : void 0;
        e += f ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < e; b++) d[b] = c(d[b]);
        if (f) {
            b = d[b] = {};
            for (var g in f) E(!isNaN(g), "should not have non-numeric keys in sparse objects after a constructor is called."), b[g] = c(f[g])
        }
        ok(d, a);
        return d
    }

    function zl(a, b, c, d, e) {
        if (a != null) {
            if (Array.isArray(a)) a = ik(a) ? void 0 : e && Rj(a) & 2 ? a : Al(a, b, c, d !== void 0, e);
            else if (hk(a)) {
                var f = {},
                    g;
                for (g in a) f[g] = zl(a[g], b, c, d, e);
                a = f
            } else a = b(a, d);
            return a
        }
    }

    function Al(a, b, c, d, e) {
        var f = d || c ? Rj(a) : 0;
        d = d ? !!(f & 32) : void 0;
        for (var g = Ij(a), h = 0; h < g.length; h++) g[h] = zl(g[h], b, c, d, e);
        c && (ok(g, a), c(f, g));
        return g
    }

    function Bl(a) {
        return ck(a) ? a.toJSON() : xl(a)
    };

    function Cl(a, b, c) {
        c = c === void 0 ? Yj : c;
        if (a != null) {
            if (ri && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = Rj(a);
                if (d & 2) return a;
                pk(a);
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (Vj(a, (d | 34) & -12293), a) : Al(a, Cl, d & 4 ? Yj : c, !0, !0)
            }
            ck(a) && (E(ck(a)), c = a.A, d = Uj(c), a = d & 2 ? a : Dl(a, c, d, !0));
            return a
        }
    }

    function Dl(a, b, c, d) {
        ll(a);
        return nl(a.constructor, El(b, c, d))
    }

    function El(a, b, c) {
        var d = c || b & 2 ? Yj : Xj,
            e = !!(b & 32);
        a = yl(a, b, function(f) {
            return Cl(f, e, d)
        });
        Oj(a, 32 | (c ? 2 : 0));
        return a
    }

    function Fl(a) {
        var b = a.A,
            c = Uj(b);
        return c & 2 ? Dl(a, b, c, !1) : a
    };
    var Hl = function(a, b) {
        a = a.A;
        return Gl(a, Uj(a), b)
    };

    function Il(a, b, c, d) {
        b = fk(d, Tj(b));
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }
    var Gl = function(a, b, c, d) {
            if (c === -1) return null;
            var e = b >> 15 & 1023 || 536870912;
            if (c >= e) {
                if (b & 256) return a[a.length - 1][c]
            } else {
                var f = a.length;
                if (d && b & 256 && (d = a[f - 1][c], d != null)) {
                    if (Il(a, b, e, c)) throw Error("Ba`" + c);
                    return d
                }
                return Il(a, b, e, c)
            }
        },
        Kl = function(a, b, c) {
            var d = a.A,
                e = Uj(d);
            lk(e);
            Jl(d, e, b, c);
            return a
        };

    function Jl(a, b, c, d) {
        E(!hk(d), "Invalid object passed to a setter");
        var e = b >> 15 & 1023 || 536870912;
        if (c >= e) {
            E(e !== 536870912);
            var f = b;
            if (b & 256) var g = a[a.length - 1];
            else {
                if (d == null) return f;
                g = fk(e, Tj(b));
                E(g >= a.length && Number.isInteger(g) && g < 4294967295, "Expected sparseObjectIndex (%s) to be >= %s and a valid array index", g, a.length);
                g = a[g] = {};
                f |= 256
            }
            g[c] = d;
            c < e && (a[fk(c, Tj(b))] = void 0);
            f !== b && Vj(a, f);
            return f
        }
        a[fk(c, Tj(b))] = d;
        b & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    }
    var Ml = function(a, b, c, d) {
        return Ll(a, b, c, d === void 0 ? !1 : d) !== void 0
    };

    function Nl(a, b) {
        if (!a) return a;
        E(Wj(b) ? Wj(a.A) : !0);
        return a
    }

    function Ol(a, b, c, d) {
        c = c === void 0 ? !1 : c;
        d = d === void 0 ? !1 : d;
        pk(a, c);
        E(!!(Rj(a) & 1));
        var e = Rj(a);
        e & 16384 && E(e & 2, "state from binary must be immutable");
        c || (d || E(Object.isFrozen(a) || !(Rj(a) & 32)), E(Wj(b) ? Object.isFrozen(a) : !0));
        return a
    }

    function Pl(a, b, c, d, e) {
        E((d & 3) === d);
        var f = b & 2;
        e = Gl(a, b, c, e);
        Array.isArray(e) || (e = jk);
        var g = !(d & 2);
        d = !(d & 1);
        var h = !!(b & 32),
            k = Rj(e);
        k !== 0 || !h || f || g ? k & 1 || (k |= 1, Vj(e, k)) : (k |= 33, Vj(e, k));
        f ? (a = !1, k & 2 || (Oj(e, 34), a = !!(4 & k)), (d || a) && Object.freeze(e)) : (f = !!(2 & k) || !!(2048 & k), d && f ? (e = Ij(e), f = 1, h && !g && (f |= 32), Vj(e, f), Jl(a, b, c, e)) : g && k & 32 && !f && Pj(e, 32));
        return e
    }
    var Ql = function(a, b) {
        var c = c === void 0 ? !1 : c;
        return Ol(Pl(a, Uj(a, !0), b, 2, c), a, !1, !0)
    };

    function Rl(a, b, c, d, e, f) {
        var g = a.A,
            h = Uj(g);
        d = 2 & h ? 1 : d;
        f = !!f;
        e = Sl(g, h, b, e);
        var k = Rj(e),
            l = e;
        kl(l, a);
        d !== 2 && d !== 1 || hl(l, a);
        qk(e);
        if (!(4 & k)) {
            4 & k && (e = Ij(e), k = Tl(k, h), h = Jl(g, h, b, e));
            for (var m = l = 0; l < e.length; l++) {
                var t = c(e[l]);
                t != null && (e[m++] = t)
            }
            m < l && (e.length = m);
            k = Ul(k, h);
            k = (k | 20) & -4097;
            k &= -8193;
            Vj(e, k);
            2 & k && Object.freeze(e)
        }
        if (d === 1 || d === 4 && 32 & k) Vl(k) || (a = k, k |= 2, k !== a && Vj(e, k), Object.freeze(e));
        else if (c = d !== 5 ? !1 : !!(32 & k) || Vl(k) || !!Tk(e), (d === 2 || c) && Vl(k) && (e = Ij(e), k = Tl(k, h), k = Wl(k, h, f), Vj(e, k), h = Jl(g,
                h, b, e)), Vl(k) || (b = k, k = Wl(k, h, f), k !== b && Vj(e, k)), c) {
            var q = Xk(e);
            il(e, a, !0)
        } else if (d === 2 && !f) {
            var r;
            (r = Yk) == null || r.delete(e)
        }
        qk(e);
        f || Ol(e, g, !1, f);
        return q || e
    }

    function Sl(a, b, c, d) {
        a = Gl(a, b, c, d);
        return Array.isArray(a) ? a : jk
    }

    function Ul(a, b) {
        a === 0 && (a = Tl(a, b));
        return a | 1
    }

    function Vl(a) {
        return !!(2 & a) && !!(4 & a) || !!(2048 & a)
    }
    var Xl = function(a, b, c, d) {
        var e = Uj(a, !0);
        d = Gl(a, e, c, d);
        if (d != null && ck(d)) return b = Fl(d), b !== d && Jl(a, e, c, b), b.A;
        if (Array.isArray(d)) {
            var f = Rj(d);
            var g = f & 2 ? rl(El(d, f, !1), b, !0) : f & 64 ? d : rl(g, b, !0)
        } else g = rl(void 0, b, !0);
        g !== d && Jl(a, e, c, g);
        return g
    };

    function Ll(a, b, c, d) {
        a = a.A;
        var e = Uj(a);
        d = Gl(a, e, c, d);
        b = Pk(d, b, e);
        b !== d && b != null && Jl(a, e, c, b);
        return Nl(b, a)
    }
    var Zl = function(a) {
            var b = Yl;
            (a = Ll(a, b, 2, !1)) ? b = a: (a = b[Mj]) ? b = a : (a = new b, Oj(a.A, 34), b = b[Mj] = a);
            return b
        },
        $l = function(a, b, c, d) {
            b = Ll(a, b, c, d === void 0 ? !1 : d);
            if (b == null) return b;
            a = a.A;
            d = Uj(a);
            if (!(d & 2)) {
                var e = Fl(b);
                e !== b && (b = e, Jl(a, d, c, b))
            }
            return Nl(b, a)
        },
        bm = function(a) {
            var b = am,
                c = Uj(a.A),
                d, e = a.A;
            var f = !!f;
            d && (d = !(2 & c));
            var g = Sl(e, c, 10),
                h = Rj(g),
                k = g;
            kl(k, a);
            hl(k, a);
            k = !!(4 & h);
            if (!k) {
                h = Ul(h, c);
                var l = g,
                    m = c,
                    t;
                (t = !!(2 & h)) && (m |= 2);
                for (var q = !t, r = !0, w = 0, v = 0; w < l.length; w++) {
                    var z = Pk(l[w], b, m);
                    if (z instanceof b) {
                        if (!t) {
                            var y =
                                Wj(z.A);
                            q && (q = !y);
                            r && (r = y)
                        }
                        l[v++] = z
                    }
                }
                v < w && (l.length = v);
                h |= 4;
                h = r ? h | 16 : h & -17;
                h = q ? h | 8 : h & -9;
                Vj(l, h);
                t && Object.freeze(l)
            }
            if (d && !(8 & h) && g.length) {
                Vl(h) ? (g = Ij(g), h = Tl(h, c), Jl(e, c, 10, g)) : hl(g, a);
                a = g;
                b = h;
                for (c = 0; c < a.length; c++) d = a[c], l = Fl(d), d !== l && (a[c] = l);
                b |= 8;
                b = a.length ? b & -17 : b | 16;
                Vj(a, b);
                h = b
            }
            Vl(h) || (a = h, h |= !g.length || 16 & h && (!k || 32 & h) ? 2 : 2048, h !== a && Vj(g, h), Object.freeze(g));
            if (!f) {
                f = g;
                k = !1;
                k = k === void 0 ? !1 : k;
                a = Wj(e);
                b = Wj(f);
                c = Object.isFrozen(f) && b;
                Ol(f, e, k);
                if (a || b) k ? E(b) : E(c);
                E(!!(Rj(f) & 4));
                if (b && f.length)
                    for (k =
                        0; k < 1; k++) Nl(f[k], e)
            }
            return g
        },
        cm = function(a, b, c, d) {
            d != null ? Ok(d, Bb(b)) : d = void 0;
            return Kl(a, c, d)
        };

    function Tl(a, b) {
        a = (2 & b ? a | 2 : a & -3) | 32;
        return a &= -2049
    }

    function Wl(a, b, c) {
        32 & b && c || (a &= -33);
        return a
    }

    function dm(a, b, c) {
        var d = em,
            e = Uj(a.A);
        lk(e);
        b = d(a, b, 2, void 0, !0);
        Rj(b);
        if (Array.isArray(c))
            for (c = $k(c), d = c.length, e = 0; e < d; e++) b.push(Ck(c[e]));
        else
            for (c = u(c), d = c.next(); !d.done; d = c.next()) b.push(Ck(d.value));
        qk(b);
        return a
    }

    function fm(a, b) {
        return a != null ? a : b
    }
    var gm = function(a, b, c) {
            c = c === void 0 ? !1 : c;
            return fm(zk(Hl(a, b)), c)
        },
        hm = function(a, b) {
            var c = c === void 0 ? 0 : c;
            return fm(Gk(Hl(a, b)), c)
        },
        im = function(a, b) {
            var c = c === void 0 ? "" : c;
            return fm(Nk(Hl(a, b)), c)
        },
        em = function(a, b, c, d, e) {
            return Rl(a, b, Dk, c, d, e)
        },
        jm = function(a) {
            a = zk(Hl(a, 5));
            return a == null ? void 0 : a
        },
        km = function(a, b) {
            a = Nk(Hl(a, b));
            return a == null ? void 0 : a
        },
        lm = function(a, b, c) {
            if (c != null && typeof c !== "boolean") throw Error("oa`" + Ma(c) + "`" + c);
            return Kl(a, b, c)
        },
        mm = function(a, b, c) {
            if (c != null) {
                if (typeof c !== "number") throw wk(Hk(c));
                if (!Number.isFinite(c)) throw wk(Hk(c));
                c >>>= 0
            }
            return Kl(a, b, c)
        },
        nm = function(a, b, c) {
            if (c != null && typeof c !== "string") throw Error("pa`" + c + "`" + Ma(c));
            return Kl(a, b, c)
        },
        om = function(a, b, c) {
            return Kl(a, b, c == null ? c : Ck(c))
        };
    if (typeof Proxy !== "undefined") {
        var qm = pm;
        new Proxy({}, {
            getPrototypeOf: qm,
            setPrototypeOf: qm,
            isExtensible: qm,
            preventExtensions: qm,
            getOwnPropertyDescriptor: qm,
            defineProperty: qm,
            has: qm,
            get: qm,
            set: qm,
            deleteProperty: qm,
            apply: qm,
            construct: qm
        })
    }

    function pm() {
        throw Error("Ca");
    };
    var rm, sm = function(a, b, c) {
        Jb(this, sm, "The message constructor should only be used by subclasses");
        E(this.constructor !== sm, "Message is an abstract class and cannot be directly constructed");
        this.A = sl(a, b, c);
        this.preventPassingToStructuredClone = mk
    };
    n = sm.prototype;
    n.toJSON = function() {
        return tm(this)
    };
    n.Za = function() {
        E(!0);
        try {
            return rm = !0, E(rm && !0), JSON.stringify(tm(this), wl)
        } finally {
            rm = !1
        }
    };
    n.getExtension = function(a) {
        Jb(this, a.wf);
        var b = Jb(this, sm);
        b = a.hb ? a.kd ? a.Cb(b, a.hb, a.kb, void 0 === rk ? 2 : 4, !0) : a.Cb(b, a.hb, a.kb, !0) : a.kd ? a.Cb(b, a.kb, void 0 === rk ? 2 : 4, !0) : a.Cb(b, a.kb, a.defaultValue, !0);
        return a.Gh && b == null ? a.defaultValue : b
    };
    n.hasExtension = function(a) {
        E(!a.kd, "repeated extensions don't support hasExtension");
        if (a.hb) a = Ml(this, a.hb, a.kb, !0);
        else {
            E(!a.kd, "repeated extensions don't support getExtensionOrUndefined");
            Jb(this, a.wf);
            var b = Jb(this, sm);
            a = a.hb ? a.Cb(b, a.hb, a.kb, !0) : a.Cb(b, a.kb, null, !0);
            a = (a === null ? void 0 : a) !== void 0
        }
        return a
    };
    n.clone = function() {
        var a = Jb(this, sm);
        E(ck(a));
        var b = a.A;
        return Dl(a, b, Uj(b), !1)
    };
    n.nb = function() {
        return Wj(this.A)
    };
    ak = sm;
    sm.prototype.Vh = bk;
    sm.prototype.toString = function() {
        try {
            return rm = !0, tm(this).toString()
        } finally {
            rm = !1
        }
    };

    function tm(a) {
        ll(a);
        if (rm) var b = a.A;
        else b = a.A, Hb(b), b = Al(b, Bl, void 0, void 0, !1);
        var c = !rm,
            d = Uj(c ? a.A : b);
        if (a = b.length) {
            var e = b[a - 1],
                f = hk(e);
            f ? a-- : e = void 0;
            var g = Tj(d),
                h = gk(a, g),
                k = (d = !(d & 512) && h !== h) ? Array.prototype.slice.call(b, 0, a) : b;
            if (f || d) {
                b: {
                    var l = k;
                    var m = e;
                    var t;f = !1;
                    if (d)
                        for (var q = Math.max(0, h + g); q < l.length; q++) {
                            var r = l[q],
                                w = gk(q, g);
                            r == null || ik(r) || ek(r) || (f = l[q] = void 0, ((f = t) != null ? f : t = {})[w] = r, f = !0)
                        }
                    if (m)
                        for (var v in m)
                            if (q = +v, isNaN(q)) q = void 0, ((q = t) != null ? q : t = {})[v] = m[v];
                            else if (r = m[v],
                        Array.isArray(r) && (ik(r) || ek(r)) && (r = null), r == null && (f = !0), d && q < h) {
                        f = !0;
                        r = fk(q, g);
                        for (w = l.length; w <= r; w++) l.push(void 0);
                        l[r] = m[q]
                    } else r != null && (q = void 0, ((q = t) != null ? q : t = {})[v] = r);f || (t = m);
                    if (t)
                        for (var z in t) {
                            m = t;
                            break b
                        }
                    m = null
                }
                l = m == null ? e != null : m !== e
            }
            d && (a = k.length);
            for (; a > 0; a--) {
                t = a - 1;
                v = k[t];
                gk(t, g);
                if (v != null && !ik(v) && !ek(v)) break;
                var y = !0
            }
            if (k !== b || l || y) {
                if (!d && !c) k = Array.prototype.slice.call(k, 0, a);
                else if (y || l || m) k.length = a;
                m && k.push(m)
            }
            y = k
        } else y = b;
        return y
    };
    var um = function(a, b) {
            this.qc = a >>> 0;
            this.kc = b >>> 0
        },
        wm = function(a) {
            if (!a) return vm || (vm = new um(0, 0));
            if (!/^\d+$/.test(a)) return null;
            kj(a);
            return new um(Y, aj)
        },
        vm, xm = function(a, b) {
            this.qc = a >>> 0;
            this.kc = b >>> 0
        },
        zm = function(a) {
            if (!a) return ym || (ym = new xm(0, 0));
            if (!/^-?\d+$/.test(a)) return null;
            kj(a);
            return new xm(Y, aj)
        },
        ym;
    var Am = function() {
        this.H = []
    };
    Am.prototype.length = function() {
        return this.H.length
    };
    Am.prototype.end = function() {
        var a = this.H;
        this.H = [];
        return a
    };
    Am.prototype.bb = function(a, b) {
        E(a == Math.floor(a));
        E(b == Math.floor(b));
        E(a >= 0 && a < 4294967296);
        for (E(b >= 0 && b < 4294967296); b > 0 || a > 127;) this.H.push(a & 127 | 128), a = (a >>> 7 | b << 25) >>> 0, b >>>= 7;
        this.H.push(a)
    };
    Am.prototype.We = function(a, b) {
        E(a == Math.floor(a));
        E(b == Math.floor(b));
        E(a >= 0 && a < 4294967296);
        E(b >= 0 && b < 4294967296);
        this.za(a);
        this.za(b)
    };
    var Bm = function(a, b) {
            E(b == Math.floor(b));
            for (E(b >= 0 && b < 4294967296); b > 127;) a.H.push(b & 127 | 128), b >>>= 7;
            a.H.push(b)
        },
        Cm = function(a, b) {
            E(b == Math.floor(b));
            E(b >= -2147483648 && b < 2147483648);
            if (b >= 0) Bm(a, b);
            else {
                for (var c = 0; c < 9; c++) a.H.push(b & 127 | 128), b >>= 7;
                a.H.push(1)
            }
        };
    n = Am.prototype;
    n.za = function(a) {
        E(a == Math.floor(a));
        E(a >= 0 && a < 4294967296);
        this.H.push(a >>> 0 & 255);
        this.H.push(a >>> 8 & 255);
        this.H.push(a >>> 16 & 255);
        this.H.push(a >>> 24 & 255)
    };
    n.Hg = function(a) {
        E(a == Math.floor(a));
        E(a >= 0 && a < 1.8446744073709552E19);
        cj(a);
        this.za(Y);
        this.za(aj)
    };
    n.Fg = function(a) {
        E(a == Math.floor(a));
        E(a >= -2147483648 && a < 2147483648);
        this.H.push(a >>> 0 & 255);
        this.H.push(a >>> 8 & 255);
        this.H.push(a >>> 16 & 255);
        this.H.push(a >>> 24 & 255)
    };
    n.Gg = function(a) {
        E(a == Math.floor(a));
        E(a >= -0x7fffffffffffffff && a < 0x7fffffffffffffff);
        dj(a);
        this.We(Y, aj)
    };
    n.Ve = function(a) {
        E(a == Infinity || a == -Infinity || isNaN(a) || typeof a === "number" && a >= -3.4028234663852886E38 && a <= 3.4028234663852886E38);
        var b = fj(4);
        b.setFloat32(0, +a, !0);
        aj = 0;
        Y = b.getUint32(0, !0);
        this.za(Y)
    };
    n.Ue = function(a) {
        E(typeof a === "number" || a === "Infinity" || a === "-Infinity" || a === "NaN");
        var b = fj(8);
        b.setFloat64(0, +a, !0);
        Y = b.getUint32(0, !0);
        aj = b.getUint32(4, !0);
        this.za(Y);
        this.za(aj)
    };
    n.Te = function(a) {
        E(typeof a === "boolean" || typeof a === "number");
        this.H.push(a ? 1 : 0)
    };
    n.Cd = function(a) {
        E(a == Math.floor(a));
        E(a >= -2147483648 && a < 2147483648);
        Cm(this, a)
    };
    var Dm = function() {
            this.Ld = [];
            this.wb = 0;
            this.B = new Am
        },
        Em = function(a, b) {
            b.length !== 0 && (a.Ld.push(b), a.wb += b.length)
        },
        Gm = function(a, b) {
            Fm(a, b, 2);
            b = a.B.end();
            Em(a, b);
            b.push(a.wb);
            return b
        },
        Hm = function(a, b) {
            var c = b.pop();
            c = a.wb + a.B.length() - c;
            for (E(c >= 0); c > 127;) b.push(c & 127 | 128), c >>>= 7, a.wb++;
            b.push(c);
            a.wb++
        },
        Fm = function(a, b, c) {
            E(b >= 1 && b == Math.floor(b));
            Bm(a.B, b * 8 + c)
        },
        Im = function(a, b, c) {
            if (c != null) switch (Fm(a, b, 0), typeof c) {
                case "number":
                    a = a.B;
                    E(c == Math.floor(c));
                    E(c >= 0 && c < 1.8446744073709552E19);
                    dj(c);
                    a.bb(Y, aj);
                    break;
                case "bigint":
                    c = BigInt.asUintN(64, c);
                    c = new um(Number(c & BigInt(4294967295)), Number(c >> BigInt(32)));
                    a.B.bb(c.qc, c.kc);
                    break;
                default:
                    c = wm(c), a.B.bb(c.qc, c.kc)
            }
        };
    n = Dm.prototype;
    n.Fg = function(a, b) {
        b != null && (Jm(a, b, b >= -2147483648 && b < 2147483648), b != null && (Km(a, b), Fm(this, a, 0), Cm(this.B, b)))
    };
    n.Gg = function(a, b) {
        if (b != null) {
            switch (typeof b) {
                case "string":
                    Jm(a, b, zm(b));
                    break;
                case "number":
                    Jm(a, b, b >= -0x7fffffffffffffff && b < 0x7fffffffffffffff);
                    break;
                default:
                    Jm(a, b, b >= BigInt(-0x7fffffffffffffff) && b < BigInt(0x7fffffffffffffff))
            }
            if (b != null) switch (Fm(this, a, 0), typeof b) {
                case "number":
                    a = this.B;
                    E(b == Math.floor(b));
                    E(b >= -0x7fffffffffffffff && b < 0x7fffffffffffffff);
                    dj(b);
                    a.bb(Y, aj);
                    break;
                case "bigint":
                    b = BigInt.asUintN(64, b);
                    b = new xm(Number(b & BigInt(4294967295)), Number(b >> BigInt(32)));
                    this.B.bb(b.qc, b.kc);
                    break;
                default:
                    b = zm(b), this.B.bb(b.qc, b.kc)
            }
        }
    };
    n.za = function(a, b) {
        b != null && (Jm(a, b, b >= 0 && b < 4294967296), b != null && (Fm(this, a, 0), Bm(this.B, b)))
    };
    n.Hg = function(a, b) {
        if (b != null) {
            switch (typeof b) {
                case "string":
                    Jm(a, b, wm(b));
                    break;
                case "number":
                    Jm(a, b, b >= 0 && b < 1.8446744073709552E19);
                    break;
                default:
                    Jm(a, b, b >= BigInt(0) && b < BigInt(1.8446744073709552E19))
            }
            Im(this, a, b)
        }
    };
    n.Ve = function(a, b) {
        b != null && (Fm(this, a, 5), this.B.Ve(b))
    };
    n.Ue = function(a, b) {
        b != null && (Fm(this, a, 1), this.B.Ue(b))
    };
    n.Te = function(a, b) {
        b != null && (Jm(a, b, typeof b === "boolean" || typeof b === "number"), Fm(this, a, 0), this.B.Te(b))
    };
    n.Cd = function(a, b) {
        b != null && (b = parseInt(b, 10), Km(a, b), Fm(this, a, 0), Cm(this.B, b))
    };
    n.We = function(a, b) {
        Fm(this, a, 1);
        this.B.We(b)
    };
    n.bb = function(a, b) {
        Fm(this, a, 0);
        this.B.bb(b)
    };

    function Km(a, b) {
        Jm(a, b, b === Math.floor(b));
        Jm(a, b, b >= -2147483648 && b < 2147483648)
    }

    function Jm(a, b, c) {
        c || Cb("for [" + b + "] at [" + a + "]")
    };

    function Lm() {
        var a = function() {
            throw Error("Ea");
        };
        Object.setPrototypeOf(a, a.prototype);
        return a
    }
    var Mm = Lm(),
        Nm = Lm(),
        Om = Lm(),
        Pm = Lm(),
        Qm = Lm(),
        Rm = Lm();
    var Sm = function(a, b, c, d) {
        this.Dd = a;
        this.Ed = b;
        a = Pa(Nm);
        this.Ig = !!a && d === a || !1
    };

    function Tm(a) {
        var b = Um;
        var c = c === void 0 ? Nm : c;
        return new Sm(a, b, !1, c)
    }

    function Um(a, b, c, d, e) {
        b = Vm(b, d);
        b != null && (c = Gm(a, c), e(b, a), Hm(a, c))
    }
    var Wm = Tm(function(a, b, c, d, e) {
            if (a.l !== 2) return !1;
            Bj(a, Xl(b, d, c), e);
            return !0
        }),
        Xm = Tm(function(a, b, c, d, e) {
            if (a.l !== 2) return !1;
            Bj(a, Xl(b, d, c, !0), e);
            return !0
        }),
        Ym = Symbol(),
        Zm = Symbol(),
        $m = Symbol(),
        an = Symbol(),
        bn, cn;

    function dn(a, b, c, d) {
        var e = d[a];
        if (e) return e;
        e = {};
        e.od = E(ql(d[0]));
        var f = d[1],
            g = 1;
        f && f.constructor === Object && (e.xf = f, f = d[++g], typeof f === "function" && (bn != null && (E(bn === f), E(cn === d[1 + g])), e.Wf = !0, bn != null || (bn = f), cn != null || (cn = Fb(d[g + 1])), f = d[g += 2]));
        for (var h = {}; f && en(f);) {
            for (var k = 0; k < f.length; k++) h[f[k]] = f;
            f = d[++g]
        }
        for (k = 1; f !== void 0;) {
            typeof f === "number" && (E(f > 0), k += f, f = d[++g]);
            var l = void 0;
            if (f instanceof Sm) var m = f;
            else m = Wm, g--;
            f = void 0;
            if ((f = m) == null ? 0 : f.Ig) {
                f = d[++g];
                l = d;
                var t = g;
                typeof f ===
                    "function" && (E(f.length === 0), f = f(), l[t] = f);
                kn(f);
                l = f
            }
            f = d[++g];
            t = k + 1;
            typeof f === "number" && f < 0 && (t -= f, f = d[++g]);
            for (; k < t; k++) {
                var q = h[k];
                l ? c(e, k, E(m), l, q) : b(e, k, E(m), q)
            }
        }
        return d[a] = e
    }

    function en(a) {
        return Array.isArray(a) && !!a.length && typeof a[0] === "number" && a[0] > 0
    }

    function kn(a) {
        if (Array.isArray(a) && a.length) {
            var b = a[0];
            var c = ql(b);
            c != null && c !== b && (a[0] = c);
            b = c != null
        } else b = !1;
        E(b);
        return a
    }

    function ln(a) {
        return Array.isArray(a) ? a[0] instanceof Sm ? (E(a.length === 2), kn(a[1]), a) : [Xm, kn(a)] : [Jb(a, Sm), void 0]
    }

    function Vm(a, b) {
        if (a instanceof sm) return ll(a), a.A;
        if (Array.isArray(a)) return rl(a, b, !1)
    };

    function mn(a, b, c, d) {
        var e = c.Dd;
        a[b] = d ? function(f, g, h) {
            return e(f, g, h, d)
        } : e
    }

    function nn(a, b, c, d, e) {
        var f = c.Dd,
            g, h;
        a[b] = function(k, l, m) {
            return f(k, l, m, h || (h = dn(Zm, mn, nn, d).od), g || (g = on(d)), e)
        }
    }

    function on(a) {
        var b = a[$m];
        if (b != null) return b;
        var c = dn(Zm, mn, nn, a);
        b = c.Wf ? function(d, e) {
            return E(bn)(d, e, c)
        } : function(d, e) {
            var f = Uj(d, !0);
            for (E(!(f & 2)); zj(e) && e.l != 4;) {
                var g = e.Mb,
                    h = c[g];
                if (h == null) {
                    var k = c.xf;
                    k && (k = k[g]) && (k = pn(k), k != null && (h = c[g] = k))
                }
                if (h == null || !h(e, d, g)) {
                    h = e;
                    g = h.jb;
                    Aj(h);
                    if (h.Wd) h = void 0;
                    else {
                        k = h.m.Z();
                        var l = k - g;
                        h.m.O = g;
                        g = h.m.Be(l);
                        E(k == h.m.Z());
                        h = g
                    }
                    g = d;
                    Hb(g);
                    h && (nk || (nk = Symbol("unknownBinaryFields")), (k = g[nk]) ? k.push(h) : g[nk] = [h])
                }
            }
            f & 16384 && Oj(d, 34);
            return !0
        };
        return a[$m] = b
    }

    function pn(a) {
        a = ln(a);
        var b = Jb(a[0], Sm).Dd;
        if (a = a[1]) {
            var c = on(kn(a)),
                d = dn(Zm, mn, nn, kn(a)).od;
            return function(e, f, g) {
                return b(e, f, g, d, c)
            }
        }
        return b
    };

    function qn(a, b, c) {
        a[b] = c.Ed
    }

    function rn(a, b, c, d) {
        var e, f, g = c.Ed;
        a[b] = function(h, k, l) {
            return g(h, k, l, f || (f = dn(Ym, qn, rn, d).od), e || (e = sn(d)))
        }
    }

    function sn(a) {
        var b = a[an];
        if (!b) {
            var c = dn(Ym, qn, rn, a);
            b = function(d, e) {
                return tn(d, e, c)
            };
            a[an] = b
        }
        return b
    }

    function tn(a, b, c) {
        for (var d = Rj(a), e = Tj(d), f = a.length, g = f + (d & 256 ? -1 : 0), h = d & 512 ? 1 : 0; h < g; h++) {
            var k = a[h];
            if (k != null) {
                var l = gk(h, e),
                    m = un(c, l);
                m && m(b, k, l)
            }
        }
        if (d & 256) {
            d = a[f - 1];
            E(hk(d));
            for (var t in d) e = +t, Number.isNaN(e) || (f = d[e], f != null && (g = un(c, e)) && g(b, f, e))
        }
        if (a = nk ? Hb(a)[nk] : void 0)
            for (Em(b, b.B.end()), c = 0; c < a.length; c++) Em(b, Ci(a[c]))
    }

    function un(a, b) {
        var c = a[b];
        if (c) return c;
        if (c = a.xf)
            if (c = c[b]) {
                c = ln(c);
                var d = Jb(c[0], Sm).Ed;
                if (c = c[1]) {
                    c = kn(c);
                    var e = sn(c),
                        f = dn(Ym, qn, rn, c).od;
                    c = a.Wf ? E(cn)(f, e) : function(g, h, k) {
                        return d(g, h, k, f, e)
                    }
                } else c = d;
                return a[b] = c
            }
    };

    function vn(a, b, c) {
        if (Array.isArray(b)) {
            var d = Rj(b);
            if (d & 4) return b;
            for (var e = 0, f = 0; e < b.length; e++) {
                var g = a(b[e]);
                g != null && (b[f++] = g)
            }
            f < e && (b.length = f);
            c && (Vj(b, (d | 5) & -12289), d & 2 && Object.freeze(b));
            return b
        }
    }

    function wn(a, b, c) {
        return new Sm(a, b, !1, c)
    }

    function xn(a, b, c) {
        return new Sm(a, b, Mm, c)
    }

    function yn(a, b, c) {
        Jl(a, Uj(a, !0), b, c)
    }

    function zn(a, b, c) {
        if (a.l !== 0 && a.l !== 2) return !1;
        b = Ql(b, c);
        a.l == 2 ? Hj(a, uj, b) : b.push(Fj(a));
        return !0
    }
    var An = wn(function(a, b, c) {
            if (a.l !== 1) return !1;
            E(a.l == 1);
            var d = a.m;
            a = sj(d);
            var e = sj(d);
            d = (e >> 31) * 2 + 1;
            var f = e >>> 20 & 2047;
            a = 4294967296 * (e & 1048575) + a;
            yn(b, c, f == 2047 ? a ? NaN : d * Infinity : f == 0 ? d * 4.9E-324 * a : d * Math.pow(2, f - 1075) * (a + 4503599627370496));
            return !0
        }, function(a, b, c) {
            a.Ue(c, xk(b))
        }, Lm()),
        Bn = wn(function(a, b, c) {
            if (a.l !== 5) return !1;
            E(a.l == 5);
            var d = sj(a.m);
            a = (d >> 31) * 2 + 1;
            var e = d >>> 23 & 255;
            d &= 8388607;
            yn(b, c, e == 255 ? d ? NaN : a * Infinity : e == 0 ? a * 1.401298464324817E-45 * d : a * Math.pow(2, e - 150) * (d + 8388608));
            return !0
        }, function(a,
            b, c) {
            a.Ve(c, xk(b))
        }, Lm()),
        Cn = wn(function(a, b, c) {
            if (a.l !== 0) return !1;
            E(a.l == 0);
            a = oj(a.m, hj);
            yn(b, c, a);
            return !0
        }, function(a, b, c) {
            a.Gg(c, Lk(b))
        }, Lm()),
        Dn = wn(function(a, b, c) {
            if (a.l !== 0) return !1;
            yn(b, c, Ej(a));
            return !0
        }, function(a, b, c) {
            a.Hg(c, Mk(b))
        }, Qm),
        En = xn(function(a, b, c) {
            if (a.l !== 0 && a.l !== 2) return !1;
            b = Ql(b, c);
            a.l == 2 ? Hj(a, rj, b) : b.push(Ej(a));
            return !0
        }, function(a, b, c) {
            b = vn(Mk, b, !1);
            if (b != null)
                for (var d = 0; d < b.length; d++) Im(a, c, b[d])
        }, Qm),
        Fn = wn(function(a, b, c) {
                if (a.l !== 0) return !1;
                yn(b, c, Cj(a));
                return !0
            },
            function(a, b, c) {
                a.Fg(c, Gk(b))
            }, Om),
        Gn = xn(function(a, b, c) {
            if (a.l !== 0 && a.l !== 2) return !1;
            b = Ql(b, c);
            a.l == 2 ? Hj(a, pj, b) : b.push(Cj(a));
            return !0
        }, function(a, b, c) {
            b = vn(Gk, b, !0);
            if (b != null)
                for (var d = 0; d < b.length; d++) {
                    var e = a,
                        f = c,
                        g = b[d];
                    g != null && (Km(f, g), Fm(e, f, 0), Cm(e.B, g))
                }
        }, Om),
        Hn = wn(function(a, b, c) {
            if (a.l !== 5) return !1;
            E(a.l == 5);
            a = sj(a.m);
            yn(b, c, a);
            return !0
        }, function(a, b, c) {
            b = Ik(b);
            b != null && (Jm(c, b, b >= 0 && b < 4294967296), Fm(a, c, 5), a.B.za(b))
        }, Lm()),
        In = wn(function(a, b, c) {
            if (a.l !== 0) return !1;
            E(a.l == 0);
            a = tj(a.m);
            yn(b, c, a);
            return !0
        }, function(a, b, c) {
            a.Te(c, zk(b))
        }, Lm()),
        Jn = wn(function(a, b, c) {
            if (a.l !== 2) return !1;
            yn(b, c, Gj(a));
            return !0
        }, function(a, b, c) {
            b = Nk(b);
            if (b != null) {
                var d = !0;
                d = d === void 0 ? !1 : d;
                Eb(b);
                if (qi) {
                    if (d && (pi ? !b.isWellFormed() : /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(b))) throw Error("T");
                    b = (oi || (oi = new TextEncoder)).encode(b)
                } else {
                    for (var e = 0, f = new Uint8Array(3 * b.length), g = 0; g < b.length; g++) {
                        var h = b.charCodeAt(g);
                        if (h < 128) f[e++] = h;
                        else {
                            if (h < 2048) f[e++] = h >> 6 | 192;
                            else {
                                E(h < 65536);
                                if (h >= 55296 && h <= 57343) {
                                    if (h <= 56319 && g < b.length) {
                                        var k = b.charCodeAt(++g);
                                        if (k >= 56320 && k <= 57343) {
                                            h = (h - 55296) * 1024 + k - 56320 + 65536;
                                            f[e++] = h >> 18 | 240;
                                            f[e++] = h >> 12 & 63 | 128;
                                            f[e++] = h >> 6 & 63 | 128;
                                            f[e++] = h & 63 | 128;
                                            continue
                                        } else g--
                                    }
                                    if (d) throw Error("T");
                                    h = 65533
                                }
                                f[e++] = h >> 12 | 224;
                                f[e++] = h >> 6 & 63 | 128
                            }
                            f[e++] = h & 63 | 128
                        }
                    }
                    b = e === f.length ? f : f.subarray(0, e)
                }
                Fm(a, c, 2);
                Bm(a.B, b.length);
                Em(a, a.B.end());
                Em(a, b)
            }
        }, Lm()),
        Kn, Ln = void 0;
    Ln = Ln === void 0 ? Nm : Ln;
    Kn = new Sm(function(a, b, c, d, e) {
        if (a.l !== 2) return !1;
        d = rl(void 0, d, !0);
        var f = Uj(b, !0);
        lk(f);
        var g = Pl(b, f, c, 3);
        f = Uj(b, !0);
        if (Rj(g) & 4) {
            g = Ij(g);
            var h = Rj(g);
            Vj(g, (h | 1) & -2079);
            Jl(b, f, c, g)
        }
        g.push(d);
        Bj(a, d, e);
        return !0
    }, function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) {
                var g = a,
                    h = c,
                    k = e,
                    l = Vm(b[f], d);
                l != null && (h = Gm(g, h), k(l, g), Hm(g, h))
            }
    }, Mm, Ln);
    var Mn = wn(function(a, b, c) {
            if (a.l !== 0) return !1;
            yn(b, c, Dj(a));
            return !0
        }, function(a, b, c) {
            a.za(c, Ik(b))
        }, Pm),
        Nn = xn(function(a, b, c) {
            if (a.l !== 0 && a.l !== 2) return !1;
            b = Ql(b, c);
            a.l == 2 ? Hj(a, qj, b) : b.push(Dj(a));
            return !0
        }, function(a, b, c) {
            b = vn(Ik, b, !0);
            if (b != null && b.length) {
                c = Gm(a, c);
                for (var d = 0; d < b.length; d++) Bm(a.B, b[d]);
                Hm(a, c)
            }
        }, Pm),
        On = wn(function(a, b, c) {
            if (a.l !== 0) return !1;
            yn(b, c, Fj(a));
            return !0
        }, function(a, b, c) {
            a.Cd(c, Gk(b))
        }, Rm),
        Pn = xn(zn, function(a, b, c) {
            b = vn(Gk, b, !0);
            if (b != null)
                for (var d = 0; d < b.length; d++) a.Cd(c,
                    b[d])
        }, Rm),
        Qn = xn(zn, function(a, b, c) {
            b = vn(Gk, b, !0);
            if (b != null && b.length) {
                c = Gm(a, c);
                for (var d = 0; d < b.length; d++) a.B.Cd(b[d]);
                Hm(a, c)
            }
        }, Rm);

    function Rn(a) {
        if (a instanceof sm) return a.constructor.V
    };
    (function() {
        var a = Ka.jspbGetTypeName;
        Ka.jspbGetTypeName = a ? function(b) {
            return a(b) || Rn(b)
        } : Rn
    })();
    var Z = sm;

    function Sn(a, b) {
        return function(c, d) {
            if (yj.length) {
                var e = yj.pop();
                wj(e, d);
                e.m.nc(c, void 0, void 0, d);
                c = e
            } else c = new xj(c, d);
            try {
                var f = new a,
                    g = f.A;
                on(b)(g, c);
                var h = f
            } finally {
                c.zf()
            }
            return h
        }
    }

    function Tn(a) {
        return function() {
            ll(this);
            var b = new Dm;
            tn(Jb(this, sm).A, b, dn(Ym, qn, rn, a));
            Em(b, b.B.end());
            for (var c = new Uint8Array(b.wb), d = b.Ld, e = d.length, f = 0, g = 0; g < e; g++) {
                var h = d[g];
                c.set(h, f);
                f += h.length
            }
            E(f == c.length);
            b.Ld = [c];
            return c
        }
    }

    function Un(a) {
        return function(b) {
            Fb(a);
            if (b == null || b == "") b = Jb(new a, sm);
            else {
                Eb(b);
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("Da`" + Ma(b) + "`" + b);
                Oj(b, 32);
                b = nl(a, b)
            }
            return b
        }
    };
    var am = function(a) {
        Z.call(this, a)
    };
    A(am, Z);
    am.prototype.If = function() {
        return im(this, 2)
    };
    am.V = "wireless.mdl.UserAgentClientHints.BrandAndVersion";
    var Vn = [0, Jn, -1];
    am.prototype.M = Tn(Vn);
    var Wn = function(a) {
        Z.call(this, a)
    };
    A(Wn, Z);
    var Xn = function(a, b) {
            return nm(a, 2, b)
        },
        Yn = function(a, b) {
            return nm(a, 3, b)
        },
        Zn = function(a, b) {
            return nm(a, 4, b)
        },
        $n = function(a, b) {
            return nm(a, 5, b)
        },
        ao = function(a, b) {
            return nm(a, 9, b)
        },
        bo = function(a, b) {
            var c = am,
                d = a.A,
                e = Uj(d);
            lk(e);
            if (b == null) Jl(d, e, 10);
            else {
                var f = b = $k(b);
                if (!Array.isArray(f)) throw a = "Expected array but got " + Ma(f) + ": " + f, wk(a);
                var g = f = Rj(b),
                    h = !!(2 & f) || !!(2048 & f);
                E(!h || Object.isFrozen(b));
                var k = h || Object.isFrozen(b),
                    l;
                if (l = !k) l = void 0 === tk || void 0 !== sk;
                for (var m = !0, t = !0, q = 0; q < b.length; q++) {
                    var r =
                        b[q];
                    Ok(r, Bb(c));
                    h || (r = Wj(r.A), m && (m = !r), t && (t = r))
                }
                h || (f |= 5, f = m ? f | 8 : f & -9, f = t ? f | 16 : f & -17);
                l || k && f !== g ? (b = Ij(b), g = 0, f = Tl(f, e), f = Wl(f, e, !0)) : k || il(b, a);
                f !== g && Vj(b, f);
                pk(b);
                Jl(d, e, 10, b)
            }
            return a
        },
        co = function(a, b) {
            return lm(a, 11, b)
        },
        eo = function(a, b) {
            return nm(a, 1, b)
        },
        fo = function(a, b) {
            return lm(a, 7, b)
        };
    Wn.V = "wireless.mdl.UserAgentClientHints";
    Wn.prototype.M = Tn([0, Jn, -4, Kn, Vn, In, On, Jn, Kn, Vn, In]);
    var go = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function ho(a) {
        var b;
        return (b = a.google_tag_data) != null ? b : a.google_tag_data = {}
    }

    function io(a) {
        var b, c;
        return typeof((b = a.navigator) == null ? void 0 : (c = b.userAgentData) == null ? void 0 : c.getHighEntropyValues) === "function"
    }

    function jo(a) {
        if (!io(a)) return null;
        var b = ho(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(go).then(function(c) {
            b.uach != null || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function ko(a) {
        var b;
        return co(bo($n(Xn(eo(Zn(fo(ao(Yn(new Wn, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), ((b = a.fullVersionList) == null ? void 0 : b.map(function(c) {
            var d = new am;
            d = nm(d, 1, c.brand);
            return nm(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function lo(a) {
        var b, c;
        return (c = (b = jo(a)) == null ? void 0 : b.then(function(d) {
            return ko(d)
        })) != null ? c : null
    };
    var mo = function(a, b, c, d) {
        a = a === void 0 ? window : a;
        b = b === void 0 ? null : b;
        c = c === void 0 ? new Ra : c;
        d = d === void 0 ? Gf("current") : d;
        $d.call(this);
        var e = this;
        this.global = a;
        this.Da = b;
        this.F = c;
        this.rg = d;
        this.eg = Fd(function() {
            return Jd(e.global, "pagehide")
        }).g(qg(this.F, 941));
        this.dg = Fd(function() {
            return Jd(e.global, "load")
        }).g(qg(this.F, 738), Se(1));
        this.di = Fd(function() {
            return Jd(e.global, "resize")
        }).g(qg(this.F, 741));
        this.onMessage = Fd(function() {
            return Jd(e.global, "message")
        }).g(qg(this.F, 740));
        this.document = new Ph(this.global,
            this);
        this.j = new sg(new vg(this.L, this.F), new ug(this.L, this.F));
        this.G = new ne(new zg(this), new gh(this), new pf(this, new Dg(this)), new pf(this, new jh(this)), new pf(this, new eh(this)))
    };
    A(mo, $d);
    var no = function(a) {
            try {
                return !!a.global.sharedStorage
            } catch (b) {
                return b
            }
        },
        Ag = function(a) {
            var b = a.global;
            return !!a.global.HTMLFencedFrameElement && !!b.fence && typeof b.fence.reportEvent === "function"
        };
    mo.prototype.Rb = function(a) {
        Ag(this) && this.global.fence.reportEvent(a)
    };
    mo.prototype.ce = function() {
        return this.eg.g(qg(this.F, 942), V(this.h, 1), M(function() {}))
    };
    var oo = function(a) {
            var b = new mo(a.global.top, a.Da);
            b.G = a.G;
            return b
        },
        po = function(a, b) {
            b.start();
            return Jd(b, "message").g(qg(a.F, 740))
        };
    mo.prototype.postMessage = function(a, b, c) {
        c = c === void 0 ? [] : c;
        this.global.postMessage(a, b, c)
    };
    mo.prototype.de = function() {
        return dh(this.global) ? this.global.width : 0
    };
    mo.prototype.be = function() {
        return dh(this.global) ? this.global.height : 0
    };
    var qo = function(a, b) {
        try {
            a: {
                var c = a.global,
                    d = Ug() || Vg();
                try {
                    b && (c = c.top);
                    a = c;
                    b && a !== null && a != a.top && (a = a.top);
                    try {
                        if (d === void 0 ? 0 : d) var e = (new ai(a.innerWidth, a.innerHeight)).round();
                        else {
                            var f = (a || window).document,
                                g = f.compatMode == "CSS1Compat" ? f.documentElement : f.body;
                            e = (new ai(g.clientWidth, g.clientHeight)).round()
                        }
                        var h = e
                    } catch (w) {
                        h = new ai(-12245933, -12245933)
                    }
                    b = h;
                    var k = b.height,
                        l = b.width;
                    if (l === -12245933) {
                        var m = new hi(l, l, l, l);
                        break a
                    }
                    var t = ei(di(c.document).jc),
                        q = t.x,
                        r = t.y;
                    m = new hi(r, q + l, r + k,
                        q);
                    break a
                } catch (w) {
                    m = new hi(-12245933, -12245933, -12245933, -12245933);
                    break a
                }
                m = void 0
            }
            return {
                left: m.left,
                top: m.top,
                width: m.de(),
                height: m.be()
            }
        }
        catch (w) {
            return Wh
        }
    };
    mo.prototype.validate = function() {
        var a = this.G.K() || Ag(this);
        return this.global && this.j.ha() && a
    };
    var wh = function(a) {
        return (a = lo(a.global)) ? Rc(a) : null
    };
    da.Object.defineProperties(mo.prototype, {
        sharedStorage: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                try {
                    return this.global.sharedStorage
                } catch (a) {}
            }
        },
        L: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return window
            }
        },
        Hb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !dh(this.global.top)
            }
        },
        ie: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Hb || this.global.top !== this.global
            }
        },
        scrollY: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.global.scrollY
            }
        },
        MutationObserver: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.L.MutationObserver
            }
        },
        ResizeObserver: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.L.ResizeObserver
            }
        },
        Ih: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                E(!0, "Major version must be an integer");
                return Tg() >= 8
            }
        },
        Ug: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return "vu" in this.global || "vv" in this.global
            }
        }
    });
    var ro = !ah && !Pg(),
        so = function(a, b) {
            if (/-[a-z]/.test(b)) return null;
            if (ro && a.dataset) {
                if (Rg() && !(b in a.dataset)) return null;
                a = a.dataset[b];
                return a === void 0 ? null : a
            }
            return a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase())
        };
    var to = {},
        uo = (to["data-google-av-cxn"] = "_avicxn_", to["data-google-av-cpmav"] = "_cvu_", to["data-google-av-metadata"] = "_avm_", to["data-google-av-adk"] = "_adk_", to["data-google-av-btr"] = void 0, to["data-google-av-override"] = void 0, to["data-google-av-dm"] = void 0, to["data-google-av-immediate"] = void 0, to["data-google-av-aid"] = void 0, to["data-google-av-naid"] = void 0, to["data-google-av-inapp"] = void 0, to["data-google-av-slift"] = void 0, to["data-google-av-itpl"] = void 0, to["data-google-av-ext-cxn"] = void 0, to["data-google-av-rs"] =
            void 0, to["data-google-av-flags"] = void 0, to["data-google-av-turtlex"] = void 0, to["data-google-av-ufs-integrator-metadata"] = void 0, to["data-google-av-vattr"] = void 0, to["data-google-av-vrus"] = void 0, to),
        vo = {},
        wo = (vo["data-google-av-adk"] = "googleAvAdk", vo["data-google-av-btr"] = "googleAvBtr", vo["data-google-av-cpmav"] = "googleAvCpmav", vo["data-google-av-dm"] = "googleAvDm", vo["data-google-av-ext-cxn"] = "googleAvExtCxn", vo["data-google-av-immediate"] = "googleAvImmediate", vo["data-google-av-inapp"] = "googleAvInapp",
            vo["data-google-av-itpl"] = "googleAvItpl", vo["data-google-av-metadata"] = "googleAvMetadata", vo["data-google-av-naid"] = "googleAvNaid", vo["data-google-av-override"] = "googleAvOverride", vo["data-google-av-rs"] = "googleAvRs", vo["data-google-av-slift"] = "googleAvSlift", vo["data-google-av-cxn"] = "googleAvCxn", vo["data-google-av-aid"] = void 0, vo["data-google-av-flags"] = "googleAvFlags", vo["data-google-av-turtlex"] = "googleAvTurtlex", vo["data-google-av-ufs-integrator-metadata"] = "googleAvUfsIntegratorMetadata", vo["data-google-av-vattr"] =
            "googleAvVattr", vo["data-google-av-vrus"] = "googleAvVurs", vo);

    function xo(a, b) {
        if (a.i === void 0) return null;
        try {
            var c;
            var d = (c = a.i.getAttribute(b)) != null ? c : null;
            if (d !== null) return d
        } catch (g) {}
        try {
            var e = uo[b];
            if (e && (d = a.i[e], d !== void 0)) return d
        } catch (g) {}
        try {
            var f = wo[b];
            if (f) return so(a.i, f)
        } catch (g) {}
        return null
    }

    function yo(a) {
        return M(function(b) {
            return xo(b, a)
        })
    };
    var zo = H(function(a) {
        return M(function(b) {
            return a.map(function(c) {
                return xo(b, c)
            })
        })
    }(["data-google-av-cxn", "data-google-av-turtlex"]), M(function(a) {
        var b = u(a);
        a = b.next().value;
        b = b.next().value;
        if (!a) {
            if (b !== null) return [];
            throw new je;
        }
        return a.split("|")
    }));
    var Ao = function() {
        return H(Cd(function(a) {
            return a.element.g(zo, Le(function() {
                return K([""])
            })).g(M(function(b) {
                return {
                    ma: b,
                    Wc: a
                }
            }))
        }), Ue(function(a) {
            return a.ma.sort().join(";")
        }), M(function(a) {
            return a.Wc
        }))
    };
    var Co = function() {
            return Cd(function(a) {
                return Rc(Bo(a)).g(kh(a.h))
            })
        },
        Bo = function(a) {
            return a.document.querySelectorAll(".GoogleActiveViewElement,.GoogleActiveViewClass").map(function(b) {
                return new yh(b)
            })
        };

    function Do(a) {
        var b = a.dg,
            c = a.document.ci;
        return Qd(K({}), c, b).g(M(function() {
            return a
        }))
    };
    var Fo = M(Eo);

    function Eo(a) {
        var b = Number(xo(a, "data-google-av-rs"));
        if (!isNaN(b) && b !== 0) return b;
        var c;
        return (a = (c = a.i) == null ? void 0 : c.id) ? a.startsWith("DfaVisibilityIdentifier") ? 6 : a.startsWith("YtKevlarVisibilityIdentifier") ? 15 : a.startsWith("YtSparklesVisibilityIdentifier") ? 17 : a.startsWith("YtKabukiVisibilityIdentifier") ? 18 : 0 : 0
    };

    function Go() {
        return H(P(function(a) {
            return a !== void 0
        }), M(function(a) {
            return a
        }))
    };

    function Ho() {
        return function(a) {
            var b = [];
            return a.g(P(function(c) {
                if (c.i === void 0 || b.some(function(d) {
                        return d.i === c.i
                    })) return !1;
                b.push(c);
                return !0
            }))
        }
    };

    function Io(a, b) {
        b = b === void 0 ? Gc : b;
        return Qd(Do(a), b).g(Co(), Ho(), Go(), V(a.h, 1))
    };

    function Jo(a, b) {
        return new I(function(c) {
            var d = !1,
                e = Array(b.length);
            e.fill(void 0);
            var f = new Set,
                g = new Set,
                h = function(t, q) {
                    a.jg ? (e[q] = t, f.add(q), d || (d = !0, Wa(a, function() {
                        d = !1;
                        c.next(Ob(e))
                    }, 1))) : c.error(new ke(q))
                },
                k = function(t, q) {
                    g.add(q);
                    f.add(q);
                    Wa(a, function() {
                        c.error(t)
                    }, 1)
                },
                l = function(t) {
                    g.add(t);
                    Wa(a, function() {
                        g.size === b.length && c.complete()
                    }, 1)
                },
                m = b.map(function(t, q) {
                    return t.subscribe(function(r) {
                        return void h(r, q)
                    }, function(r) {
                        return void k(r, q)
                    }, function() {
                        return void l(q)
                    })
                });
            return function() {
                m.forEach(function(t) {
                    return void t.unsubscribe()
                })
            }
        })
    };

    function Ko(a, b, c) {
        function d() {
            if (b.Da) {
                var z = b.Da,
                    y = z.next;
                var N = {
                    creativeId: b.ic.Ga(c),
                    requiredSignals: e,
                    signals: Object.assign({}, f),
                    hasPrematurelyCompleted: g,
                    errorMessage: h,
                    erroredSignalKey: k
                };
                N = {
                    specMajor: 2,
                    specMinor: 0,
                    specPatch: 0,
                    timestamp: te(b.j.now(), new re(0, b.j.timeline)),
                    instanceId: b.ic.Ga(b.vb),
                    creativeState: N
                };
                y.call(z, N)
            }
        }
        for (var e = Object.keys(a), f = {}, g = !1, h = null, k = null, l = {}, m = new Set, t = [], q = [], r = u(e), w = r.next(), v = {}; !w.done; v = {
                ja: void 0
            }, w = r.next()) v.ja = w.value, w = a[v.ja], w instanceof
        W ? (l[v.ja] = w.value, m.add(v.ja), b.Da && (f[String(v.ja)] = ve(w.value))) : (w = w.g(R(function(z, y) {
                return oe(z) || oe(y) ? !1 : z === y
            }), M(function(z) {
                return function(y) {
                    b.Da && (f[String(z.ja)] = ve(y), d());
                    var N = {};
                    return N[z.ja] = y, N
                }
            }(v)), Le(function(z) {
                return function(y) {
                    if (y instanceof ke) throw new me(String(z.ja));
                    throw y;
                }
            }(v)), hf(function(z) {
                return function() {
                    m.add(z.ja)
                }
            }(v), function(z) {
                return function(y) {
                    k = String(z.ja);
                    h = String(y);
                    d()
                }
            }(v), function(z) {
                return function() {
                    m.has(z.ja) || (g = !0, d())
                }
            }(v))), q.push(v.ja),
            t.push(w));
        (a = Object.keys(f).length > 0) && d();
        r = Jo(b.h, t).g(Le(function(z) {
            if (z instanceof ke) throw new le(String(q[z.Ah]));
            throw z;
        }), M(function(z) {
            return Object.freeze(Object.assign.apply(Object, [{}, l].concat(x(z))))
        }));
        return (t = t.length > 0) && a ? Qd(K(Object.freeze(l)), r) : t ? r : K(Object.freeze(l))
    };

    function Lo(a, b, c, d) {
        var e = Mo(No(Oo(), Po), Qo, Ro);
        return a.F.Wb.bind(a.F)(733, function() {
            var f = {};
            try {
                return b.g(Le(function(g) {
                    d(Object.assign({}, f, {
                        error: g
                    }));
                    return Gc
                }), Cd(function(g) {
                    try {
                        var h = c(a, g)
                    } catch (l) {
                        return d(Object.assign({}, f, {
                            error: l instanceof Error ? l : String(l)
                        })), Gc
                    }
                    var k = {};
                    return Ko(h, a, g.vb).g(hf(function(l) {
                        k = l
                    }), cf(1), kd()).g(e, Le(function(l) {
                        d(Object.assign({}, k, {
                            error: l
                        }));
                        return Gc
                    }), Ye(void 0), M(function() {
                        return !0
                    }))
                })).g(ef(function(g) {
                    return g + 1
                }, 0), Le(function(g) {
                    d(Object.assign({},
                        f, {
                            error: g
                        }));
                    return Gc
                }))
            } catch (g) {
                return d(Object.assign({}, f, {
                    error: g
                })), Gc
            }
        })()
    };

    function So(a, b) {
        return H(T(function(c) {
            var d = a(c),
                e = b(c),
                f = {};
            return d && e && f ? new I(function(g) {
                e(d, f, function(h) {
                    g.next(Object.assign({}, c, {
                        fb: h
                    }));
                    g.complete()
                });
                return function() {}
            }) : Rd
        }), P(function(c) {
            return c.fb
        }))
    };
    var Qo = H(P(function(a) {
        var b = a.G;
        var c = a.cc;
        var d = a.Xb;
        var e = a.Rb;
        var f = a.ob;
        var g = a.Ua;
        a = a.bc;
        return g !== void 0 && a !== void 0 && b !== void 0 && c !== void 0 && d !== void 0 && (!f || e !== void 0)
    }), gf(function(a) {
        return !(a.Sf === !1 && a.sf !== void 0)
    }, !1), P(function(a) {
        var b = a.Sf;
        var c = a.ed;
        var d = a.Oi;
        a = a.cc;
        return d ? !!c && a !== void 0 && (a == null ? void 0 : a.length) > 0 : !!b
    }), So(function(a) {
        return a.bc
    }, function(a) {
        return a.Ua
    }), M(function(a) {
        a.ob || a.Xb(a.cc, a).forEach(function(b) {
            a.G.I(b).sendNow()
        })
    }), Se(1), Qe());

    function To(a) {
        var b = new Map;
        if (typeof a !== "object" || a === null) return b;
        Object.values(a).forEach(function(c) {
            c && typeof c.ia === "function" && (b.has(c.clock.timeline) || b.set(c.clock.timeline, c.clock.now()))
        });
        return b
    };

    function Uo(a, b, c) {
        var d = Vo,
            e = Wo;
        c = c === void 0 ? .01 : c;
        return function(f) {
            c > 0 && Math.random() <= c && (a.global.HTMLFencedFrameElement && a.global.fence && typeof a.global.fence.reportEvent === "function" && a.global.fence.reportEvent({
                eventType: "active-view-error",
                eventData: "",
                destination: ["buyer"]
            }), f = Object.assign({}, f, {
                errorMessage: f.error instanceof Error && f.error.message ? f.error.message : String(f.error),
                tf: f.error instanceof Error && f.error.stack ? String(f.error.stack) : null,
                hh: f.error instanceof Error && f.error.name ?
                    String(f.error.name) : null,
                fh: String(a.F.xg),
                gh: f.escapedQueryId
            }), d(Object.assign({}, f, {
                X: function() {
                    return function(g) {
                        try {
                            return e(Object.assign({}, g))
                        } catch (h) {
                            return {}
                        }
                    }
                }(),
                ma: [b]
            }), To(f)).forEach(function(g) {
                a.G.I(g).sendNow()
            }))
        }
    };
    var Ro = H(M(function(a) {
        var b = a.G;
        var c = a.nh;
        if (b === void 0 || c === void 0) return !1;
        if (a.sf !== void 0) return !0;
        if (c === null) return !1;
        for (a = 0; a < c; a++) b.I("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=extra&rnd=" + Math.floor(Math.random() * 1E7)).sendNow();
        return !0
    }), gf(function(a) {
        return !a
    }), Qe());
    var Xo = H(P(function(a) {
        return !!a.ed
    }), P(function(a) {
        var b = a.shouldSendExplicitDisplayMeasurablePing;
        a = a.mb;
        var c, d;
        return (d = b && ((c = a == null ? void 0 : a.length) != null ? c : 0) > 0) != null ? d : !1
    }), P(function(a) {
        return a.X !== void 0 && a.mb !== void 0 && a.xb !== void 0 && a.Ib !== void 0 && a.G !== void 0
    }), M(function(a) {
        return Object.assign({}, a, {
            vd: To(a)
        })
    }), M(function(a) {
        a.xb(Object.assign({}, a, {
            ma: a.mb,
            X: a.X,
            zc: a.Ib,
            Lc: 3,
            Bc: "m"
        }), a.vd).forEach(function(b) {
            a.G.I(b).sendNow()
        });
        return !0
    }), gf(function(a) {
        return !a
    }), Qe());
    var Wo = function(a) {
        return {
            id: a.zc,
            mcvt: a.uc,
            p: a.Xc,
            asp: a.uj,
            tm: a.xd,
            tu: a.yd,
            mtos: a.vc,
            tos: a.Ic,
            v: a.Tg,
            bin: a.Kd,
            avms: a.bg,
            bs: a.gf,
            mc: a.Zf,
            "if": a.ah,
            vu: a.dh,
            app: a.Xa,
            mse: a.ve,
            mtop: a.we,
            itpl: a.ke,
            adk: a.Jd,
            exk: a.wj,
            rs: a.Na,
            la: a.Vf,
            cr: a.pe,
            uach: a.Jc,
            vs: a.Lc,
            r: a.Bc,
            pay: a.uh,
            co: a.Vg,
            rst: a.Og,
            rpt: a.Ng,
            isd: a.yh,
            lsd: a.Oh,
            context: a.fh,
            msg: a.errorMessage,
            stack: a.tf,
            name: a.hh,
            ec: a.vh,
            sfr: a.Ie,
            met: a.fc,
            wmsd: a.Qe,
            pv: a.Tj,
            epv: a.yj,
            pbe: a.Qf,
            fle: a.wh,
            vae: a.xh,
            spb: a.ug,
            sfl: a.tg,
            ffslot: a.Hh,
            reach: a.Bi,
            io2: a.Ad,
            rxdbg: a.Xj,
            omida: a.Hj,
            omidp: a.Oj,
            omidpv: a.Pj,
            omidor: a.Nj,
            omidv: a.Rj,
            omids: a.Qj,
            omidam: a.Gj,
            omidct: a.Ij,
            omidia: a.Lj,
            omiddc: a.Jj,
            omidlat: a.Mj,
            omiddit: a.Kj,
            qid: a.gh
        }
    };

    function Mo() {
        var a = C.apply(0, arguments);
        return function(b) {
            var c = b.g(cf(1), kd());
            b = a.map(function(d) {
                return c.g(d, Ye(!0))
            });
            return O(b).g(Se(1), Qe())
        }
    };

    function No() {
        var a = C.apply(0, arguments);
        return function(b) {
            var c = b.g(cf(1), kd());
            b = a.map(function(d) {
                return c.g(d, Ye(!0))
            });
            return Qd.apply(null, x(b)).g(Se(1), Qe())
        }
    };

    function Oo() {
        var a = Mo(Xo, Yo),
            b = Zo;
        return function(c) {
            var d = c.g(cf(1), kd());
            c = d.g(a, Ye(!0));
            d = d.g(H(b, cf(), kd()), Ye(!0));
            c = O([c, d]);
            return Vd(c, d).g(Se(1), Qe())
        }
    };
    var Zo = function(a) {
        var b = [];
        return a.g(M(function(c) {
            var d = c.G,
                e = c.oh,
                f = c.Ic,
                g = c.Hi,
                h = c.X,
                k = c.Gi,
                l = c.vg,
                m = c.xb,
                t = c.Oe,
                q = c.ed,
                r = c.Qf,
                w = c.ug,
                v = c.tg,
                z = c.Me;
            if (!c.Df || !q || c.vc === void 0 || f === void 0 || g === void 0 || h === void 0 || k === void 0 || m === void 0 || d === void 0) return !1;
            if (c.ob) {
                if (l === void 0) return !1;
                g = c.Rb;
                if (!g) return !1;
                g({
                    eventType: "active-view-time-on-screen",
                    eventData: z != null ? z : "",
                    destination: ["buyer"]
                });
                return !0
            }
            if (!(r || v || l)) return !1;
            z = To(c);
            var y;
            t = (y = t == null ? void 0 : t.qa(z).value) != null ? y : !1;
            y = m(Object.assign({},
                c, {
                    zc: k,
                    Lc: t ? 4 : 3,
                    Bc: l != null ? l : "u",
                    X: h,
                    ma: g
                }), z);
            if (r) {
                for (; b.length > g.length;) c = void 0, (c = b.shift()) == null || c.deactivate();
                y.forEach(function(Q, fa) {
                    fa >= b.length ? b.push(d.I(Q)) : b[fa].url = Q
                });
                return w && e && l !== void 0 ? (y.forEach(function(Q) {
                    e.I(Q).sendNow()
                }), !0) : l !== void 0
            }
            if (w && e && l !== void 0) return y.forEach(function(Q) {
                e.I(Q).sendNow()
            }), !0;
            if (v && e) {
                for (; b.length > g.length;) w = void 0, (w = b.shift()) == null || w.deactivate();
                var N = m(Object.assign({}, c, {
                        zc: k,
                        Lc: t ? 4 : 3,
                        Bc: l != null ? l : "u",
                        X: h,
                        ma: ["https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=fetch&later&lidartos"]
                    }),
                    z)[0];
                y.forEach(function(Q, fa) {
                    fa >= b.length ? b.push(d.I(N, {
                        rf: !0
                    })) : b[fa].url = N
                });
                return l !== void 0 ? (y.forEach(function(Q) {
                    e.I(Q).sendNow()
                }), !0) : l !== void 0
            }
            return l !== void 0 ? (y.forEach(function(Q) {
                d.I(Q).sendNow()
            }), !0) : !1
        }), gf(function(c) {
            return !c
        }), Qe())
    };

    function $o(a) {
        return function(b) {
            return b.g(M(function(c) {
                a.jg || Cb("Assertion on queued Observable output failed");
                return c
            }))
        }
    };

    function ap(a) {
        return function(b) {
            return new I(function(c) {
                var d = !1,
                    e = b.g($o(a)).subscribe(function(f) {
                        d = !0;
                        c.next(f)
                    }, c.error.bind(c), c.complete.bind(c));
                Wa(a, function() {
                    d || c.next(null)
                }, 3);
                return e
            })
        }
    };

    function bp(a, b) {
        return function(c) {
            return c.g(T(function(d) {
                return new I(function(e) {
                    function f() {
                        h.disconnect();
                        k.unsubscribe()
                    }
                    var g = a.MutationObserver;
                    if (g && d.i !== void 0) {
                        var h = new g(function(l) {
                            e.next(l)
                        });
                        h.observe(d.i, b);
                        var k = d.released.subscribe(f);
                        return f
                    }
                })
            }))
        }
    };
    var cp = {
        sj: 0,
        Vi: 1,
        Yi: 2,
        Wi: 3,
        0: "UNKNOWN",
        1: "DEFER_MEASUREMENT",
        2: "DO_NOT_DEFER_MEASUREMENT",
        3: "DEFER_MEASUREMENT_AND_PING"
    };

    function dp(a, b) {
        var c = b.g(bp(a, {
            attributes: !0
        }), V(a.h, 1));
        return O([b, c.g(V(a.h, 1), ap(a.h))]).g(M(function(d) {
            return u(d).next().value
        }), yo("data-google-av-dm"), M(ep))
    }

    function ep(a) {
        return a && a in cp ? Number(a) : 2
    };

    function fp(a) {
        if (a.Sh === 3) return null;
        if (a.vg !== void 0) {
            var b = a.Zg === !1 ? "n" : null;
            if (b !== null) return b
        }
        return a.bd instanceof de ? "msf" : a.Qd instanceof ee ? "c" : a.Yg === !1 ? "pv" : a.bd || a.Qd ? "x" : null
    }
    var Po = H(P(function(a) {
        return a.mb !== void 0 && a.X !== void 0 && a.xb !== void 0 && a.Ib !== void 0 && a.G !== void 0
    }), P(function(a) {
        return fp(a) !== null
    }), So(function(a) {
        return a.Pc
    }, function(a) {
        return a.Ua
    }), M(function(a) {
        if (a.ob) {
            var b = a.Rb;
            if (b) {
                var c;
                b({
                    eventType: "active-view-unmeasurable",
                    eventData: (c = a.Me) != null ? c : "",
                    destination: ["buyer"]
                })
            }
        } else {
            c = void 0;
            var d = fp(a);
            if (d === "x") {
                var e, f = (e = a.bd) != null ? e : a.Qd;
                f && (b = f.stack, c = f.message)
            }
            a.xb(Object.assign({}, a, {
                ma: a.mb,
                X: a.X,
                zc: a.Ib,
                Lc: 2,
                Bc: d,
                errorMessage: c,
                tf: b
            }), To(a)).forEach(function(g) {
                a.G.I(g).sendNow()
            })
        }
    }), Se(1), Qe());
    var gp = function() {
            this.startTime = Math.floor(Date.now() / 1E3 - 1704067200);
            this.Fe = 0
        },
        hp = function(a) {
            var b = a.Fe.toString(10).padStart(2, "0");
            b = "" + a.startTime + b;
            a.Fe < 99 && a.Fe++;
            return b
        };

    function ip(a, b) {
        return typeof a === "string" ? encodeURIComponent(a) : typeof a === "number" ? String(a) : Array.isArray(a) ? a.map(function(c) {
            return ip(c, b)
        }).join(",") : a instanceof re ? a.toString() : a && typeof a.ia === "function" ? ip(a.qa(b).value, b) : a === !0 ? "1" : a === !1 ? "0" : a === void 0 || a === null ? null : a instanceof gp ? hp(a) : [a.top, a.left, a.top + a.height, a.left + a.width].join()
    }

    function jp(a, b) {
        a = Object.entries(a).map(function(c) {
            var d = u(c);
            c = d.next().value;
            d = d.next().value;
            d = ip(d, b);
            return d === null ? "" : c + "=" + d
        }).filter(function(c) {
            return c !== ""
        });
        return a.length ? a.join("&") : ""
    };
    var kp = /(?:\[|%5B)([a-zA-Z0-9_]+)(?:\]|%5D)/g,
        ic = gc(hc(), "google3.javascript.ads.common.url_macros_substitutor", Wb).Ph;

    function lp(a, b) {
        return a.replace(kp, function(c, d) {
            try {
                var e = b !== null && d in b ? b[d] : void 0;
                if (e == null) return jc("No value supplied for unsupported macro: " + d), c;
                if (e.toString() == null) return jc("The toString method of value returns null for macro: " + d), c;
                e = e.toString();
                if (e == "" || !/^[\s\xa0]*$/.test(e == null ? "" : String(e))) return encodeURIComponent(e).replace(/%2C/g, ",");
                jc("Null value supplied for macro: " + d)
            } catch (f) {
                jc("Failed to set macro: " + d)
            }
            return c
        })
    };

    function mp(a, b) {
        var c = Object.assign({}, a),
            d = a.Jc;
        c = (delete c.Jc, c);
        c = a.X(c);
        var e = jp(c, b);
        return Lb(a.ma, function(f) {
            var g = "";
            typeof d === "string" && (g = "&" + jp({
                uach: d
            }, b));
            var h = {};
            return lp(f, (h.VIEWABILITY = e, h)) + g
        })
    };

    function Vo(a, b) {
        var c = a.X(a),
            d = jp(c, b);
        return d ? Lb(a.ma, function(e) {
            e = e.indexOf("?") >= 0 ? e : e + "?";
            e = "?&".indexOf(e.slice(-1)) >= 0 ? e : e + "&";
            return e + d
        }) : a.ma
    };

    function np(a, b) {
        return Lb(a, function(c) {
            if (typeof b.Jc === "string") {
                var d = "&" + jp({
                    uach: b.Jc
                }, new Map);
                return c.substring(c.length - 7) == "&adurl=" ? c.substring(0, c.length - 7) + d + "&adurl=" : c + d
            }
            return c
        })
    };
    var Yo = H(P(function(a) {
        return a.X !== void 0 && a.mb !== void 0 && a.xb !== void 0 && a.Ib !== void 0 && a.G !== void 0
    }), M(function(a) {
        return Object.assign({}, a, {
            vd: To(a)
        })
    }), P(function(a) {
        var b = a.Oe;
        var c = a.ed;
        a = a.vd;
        var d;
        return !!c && ((d = b == null ? void 0 : b.qa(a).value) != null ? d : !1)
    }), So(function(a) {
        return a.Qc
    }, function(a) {
        return a.Ua
    }), M(function(a) {
        var b = a.G,
            c = a.Me;
        if (a.ob) {
            var d = a.Rb;
            if (!d) return !1;
            d({
                eventType: "active-view-viewable",
                eventData: c != null ? c : "",
                destination: ["buyer"]
            });
            return !0
        }
        c = a.xb(Object.assign({},
            a, {
                ma: a.mb,
                X: a.X,
                zc: a.Ib,
                Lc: 4,
                Bc: "v"
            }), a.vd);
        (d = a.Sd) && d.length > 0 && a.Xb && a.Xb(d, a).forEach(function(e) {
            b.I(e).sendNow()
        });
        (d = a.Pe) && d.length > 0 && a.Xb && a.Xb(d, a).forEach(function(e) {
            b.I(e).sendNow()
        });
        c.forEach(function(e) {
            b.I(e, {
                Zb: a.se
            }).sendNow()
        });
        return !0
    }), gf(function(a) {
        return !a
    }), Qe());

    function op(a, b, c, d) {
        var e = Object.keys(c).map(function(h) {
                return h
            }),
            f = e.filter(function(h) {
                var k = c[h];
                h = d[h];
                return k instanceof W && h instanceof W && k.value === h.value
            }),
            g = f.reduce(function(h, k) {
                var l = {};
                return Object.assign({}, h, (l[k] = c[k], l))
            }, {});
        return e.reduce(function(h, k) {
            if (f.indexOf(k) >= 0) return h;
            var l = {};
            return Object.assign({}, h, (l[k] = b.g(T(function(m) {
                return (m = m ? c[k] : d[k]) && (m instanceof I || G(m.qb) && G(m.subscribe)) ? m : m.S(a)
            })), l))
        }, g)
    };

    function pp(a) {
        return H(M(function() {
            return !0
        }), S(!1), V(a, 1))
    };

    function qp(a) {
        return a.length <= 0 ? Gc : O(a.map(function(b) {
            var c = 0;
            return b.g(M(function(d) {
                return {
                    index: c++,
                    value: d
                }
            }))
        })).g(P(function(b) {
            return b.every(function(c) {
                return c.index === b[0].index
            })
        }), M(function(b) {
            return b.map(function(c) {
                return c.value
            })
        }))
    };

    function rp(a, b) {
        a.Ca && (a.sb = a.Ca);
        a.Ca = b;
        a.sb && a.sb.value ? (b = Math.max(0, te(b.timestamp, a.sb.timestamp)), a.totalTime += b, a.oa += b) : a.oa = 0;
        return a
    }

    function sp() {
        return H(ef(rp, {
            totalTime: 0,
            oa: 0
        }), M(function(a) {
            return a.totalTime
        }))
    }

    function tp() {
        return H(ef(rp, {
            totalTime: 0,
            oa: 0
        }), M(function(a) {
            return a.oa
        }))
    };

    function up(a, b) {
        return H(yo("data-google-av-metadata"), M(function(c) {
            if (c === null) return b(void 0);
            c = c.split("&").map(function(d) {
                return d.split("=")
            }).filter(function(d) {
                return d[0] === a
            });
            if (c.length === 0) return b(void 0);
            c = c[0].slice(1).join("=");
            return b(c)
        }))
    };
    var vp = {
        Ri: "asmreq",
        Si: "asmres"
    };
    var wp = function(a) {
        Z.call(this, a)
    };
    A(wp, Z);
    wp.prototype.mg = function(a) {
        mm(this, 1, a)
    };
    wp.V = "tagging.common.osd.AdSpeedMetricsRequest";
    wp.prototype.M = Tn([0, Mn]);
    var xp = function(a) {
        Z.call(this, a)
    };
    A(xp, Z);
    xp.V = "tagging.common.osd.AdSpeedMetricsResponse.Box";
    var yp = [0, Fn, -3];
    xp.prototype.M = Tn(yp);
    var zp = function(a) {
        Z.call(this, a)
    };
    A(zp, Z);
    zp.prototype.mg = function(a) {
        mm(this, 1, a)
    };
    var Ap = Un(zp);
    zp.V = "tagging.common.osd.AdSpeedMetricsResponse";
    zp.prototype.M = Tn([0, Mn, In, yp, Fn, -1]);

    function Bp(a, b) {
        var c = c === void 0 ? oo(a) : c;
        var d = new MessageChannel;
        b = b.g(M(function(f) {
            return Number(f)
        }), P(function(f) {
            return !isNaN(f) && f !== 0
        }), hf(function(f) {
            var g = new wp;
            g.mg(f);
            f = {
                type: "asmreq",
                payload: g.Za()
            };
            c.postMessage(f, "*", [d.port2])
        }), Se(1));
        var e = po(a, d.port1).g(P(function(f) {
                return typeof f.data === "object"
            }), M(function(f) {
                var g = f.data,
                    h = Object.values(vp).includes(g.type);
                g = typeof g.payload === "string";
                if (!h || !g || f.data.type !== "asmres") return null;
                try {
                    return Ap(f.data.payload)
                } catch (k) {
                    return null
                }
            }),
            P(function(f) {
                return f !== null
            }), M(function(f) {
                return f
            }));
        return b.g(T(function(f) {
            return K(f).g(Oe(e))
        }), P(function(f) {
            var g = u(f);
            f = g.next().value;
            g = g.next().value;
            if (Ik(Hl(g, 1)) != null) {
                var h = h === void 0 ? 0 : h;
                h = fm(Ik(Hl(g, 1)), h) === f
            } else h = !1;
            return h
        }), M(function(f) {
            f = u(f);
            f.next();
            return f.next().value
        }), kh(a.h))
    };

    function Cp(a, b, c) {
        var d = b.rc.g(Se(1), T(function() {
            return Bp(a, c)
        }), P(function(f) {
            return gm(f, 2) && Ml(f, xp, 3) && Gk(Hl(f, 4)) != null && Gk(Hl(f, 5)) != null
        }), Se(1), kh(a.h));
        b = d.g(M(function(f) {
            return {
                x: hm($l(f, xp, 3), 2),
                y: hm($l(f, xp, 3), 1)
            }
        }), R(function(f, g) {
            return f.x === g.x && f.y === g.y
        }), V(a.h, 1));
        var e = d.g(M(function(f) {
            return hm(f, 4)
        }), V(a.h, 1));
        d = d.g(M(function(f) {
            return hm(f, 5)
        }), V(a.h, 1));
        return {
            yh: e,
            Qg: b,
            Oh: d
        }
    };

    function Dp(a, b) {
        return b.rc.g(Se(1), M(function() {
            return a.j.now().round()
        }))
    };
    var Ep = M(function(a) {
        return [a.value.R.width, a.value.R.height]
    });

    function Fp(a, b) {
        return function(c) {
            return qp(b.map(function(d) {
                return c.g(a(d))
            }))
        }
    };

    function Gp() {
        var a;
        return H(hf(function(b) {
            return void(a = b.timestamp)
        }), tp(), M(function(b) {
            return {
                timestamp: a,
                value: Math.round(b)
            }
        }))
    };
    var Hp = function(a, b) {
            this.jf = a;
            this.options = b;
            this.me = this.le = null
        },
        Ip = function(a, b) {
            b ? a.me || (b = Object.assign({}, a.options, {
                delay: 100,
                trackVisibility: !0
            }), a.me = new IntersectionObserver(a.jf, b)) : a.le || (a.le = new IntersectionObserver(a.jf, a.options))
        },
        Jp = function(a, b) {
            a = b ? a.me : a.le;
            if (!a) throw new ge;
            return a
        };
    Hp.prototype.observe = function(a, b) {
        Jp(this, a).observe(b)
    };
    Hp.prototype.unobserve = function(a, b) {
        Jp(this, a).unobserve(b)
    };
    Hp.prototype.disconnect = function(a) {
        Jp(this, a).disconnect()
    };
    Hp.prototype.takeRecords = function(a) {
        return Jp(this, a).takeRecords()
    };
    var Kp = {
        ba: "ns",
        da: Wh,
        R: Wh,
        aa: new J,
        T: "ns",
        J: Wh,
        W: Wh,
        fa: {
            x: 0,
            y: 0
        }
    };

    function Lp(a, b) {
        return Xh(a.R, b.R) && Xh(a.J, b.J) && Xh(a.da, b.da) && Xh(a.W, b.W) && a.T === b.T && a.aa === b.aa && a.ba === b.ba && a.fa.x === b.fa.x && a.fa.y === b.fa.y
    };
    var Mp = function(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    };

    function Np(a, b) {
        return function(c) {
            return function(d) {
                var e = d.g(bf(new J), kd());
                d = c.element.g(R());
                e = e.g(M(function(f) {
                    return f.value
                }));
                return O([d, e, b]).g(M(function(f) {
                    var g = u(f);
                    f = g.next().value;
                    var h = g.next().value;
                    g = g.next().value;
                    if (f.i === void 0) var k = {
                        top: 0,
                        left: 0,
                        width: 0,
                        height: 0
                    };
                    else {
                        k = f.i.getBoundingClientRect();
                        var l = f.i,
                            m = a.global,
                            t = new $h(0, 0);
                        var q = (q = ci(l)) ? q.defaultView : window;
                        if (Xg(q, "parent")) {
                            do {
                                if (q == m) {
                                    var r = l,
                                        w = ci(r);
                                    Gb(r, "Parameter is required");
                                    var v = new $h(0, 0);
                                    var z = (w ?
                                        ci(w) : document).documentElement;
                                    r != z && (r = Mp(r), w = ei(di(w).jc), v.x = r.left + w.x, v.y = r.top + w.y)
                                } else v = E(l), v = Mp(v), v = new $h(v.left, v.top);
                                t.x += v.x;
                                t.y += v.y
                            } while (q && q != m && q != q.parent && (l = q.frameElement) && (q = q.parent))
                        }
                        k = {
                            top: t.y,
                            left: t.x,
                            width: k.width,
                            height: k.height
                        }
                    }
                    k = Zh(k, h.fa);
                    m = Yh(k, h.da);
                    t = a.j.now();
                    q = Object;
                    l = q.assign;
                    if (g !== 2 || a.Hb || m.width <= 0 || m.height <= 0) var y = !1;
                    else try {
                        var N = a.document.elementFromPoint(m.left + m.width / 2, m.top + m.height / 2);
                        y = N ? !Op(N, f) : !1
                    } catch (Q) {
                        y = !1
                    }
                    return {
                        timestamp: t,
                        value: l.call(q, {}, h, {
                            T: "geo",
                            W: y ? Kp.W : m,
                            J: k
                        })
                    }
                }), kh(a.h))
            }
        }
    }

    function Op(a, b, c) {
        c = c === void 0 ? 0 : c;
        return a.i === void 0 || b.i === void 0 ? !1 : a.i === b.i || gi(b.i, function(d) {
            return d === a.i
        }) ? !0 : b.i.ownerDocument && b.i.ownerDocument.defaultView && b.i.ownerDocument.defaultView === b.i.ownerDocument.defaultView.top ? !1 : c < 10 && b.i.ownerDocument && b.i.ownerDocument.defaultView && b.i.ownerDocument.defaultView.frameElement ? Op(a, new yh(b.i.ownerDocument.defaultView.frameElement), c + 1) : !0
    };

    function Pp(a) {
        return function(b) {
            return b.g(a.ResizeObserver ? Qp(a) : Rp(a), cf(1), kd())
        }
    }

    function Qp(a) {
        return function(b) {
            return b.g(T(function(c) {
                var d = a.ResizeObserver;
                if (!d || c.i === void 0) return K(Kp.J);
                var e = (new I(function(f) {
                    function g() {
                        c.i !== void 0 && h.unobserve(c.i);
                        h.disconnect();
                        k.unsubscribe()
                    }
                    if (c.i === void 0) return f.complete(),
                        function() {};
                    var h = new d(function(l) {
                        l.forEach(function(m) {
                            f.next(m)
                        })
                    });
                    h.observe(c.i);
                    var k = c.released.subscribe(g);
                    return g
                })).g(qg(a.F, 736), M(function(f) {
                    return f.contentRect
                }));
                return Qd(K(c.i.getBoundingClientRect()), e)
            }), R(Xh))
        }
    }

    function Rp(a) {
        return function(b) {
            var c = b.g(bp(a, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })),
                d = a.di;
            c = Qd(b.g(M(function() {
                return xh("resize")
            })), c, d);
            return O(b, c).g(qg(a.F, 737), M(function(e) {
                e = u(e).next().value;
                return e.i === void 0 ? void 0 : e.i.getBoundingClientRect()
            }), Go(), R(Xh))
        }
    };

    function Sp(a, b) {
        var c = Tp(a, b).g(cf(1), kd());
        return function(d) {
            return function(e) {
                e = e.g(T(function(f) {
                    return f.element
                }), R());
                return O([c, e]).g(T(function(f) {
                    var g = u(f);
                    f = g.next().value;
                    g = g.next().value;
                    return Up(a, f.Eh, Pp(a), f.bi, d, f.ph, g)
                }), kh(a.h))
            }
        }
    }

    function Vp(a, b, c) {
        var d = Sp(a, c)(b);
        return function(e) {
            var f = d(K(e));
            return function(g) {
                return O([g, f]).g(M(function(h) {
                    var k = u(h);
                    h = k.next().value;
                    k = k.next().value;
                    var l = Zh(k.value.J, h.value.fa),
                        m = Yh(Zh(k.value.W, h.value.fa), h.value.da);
                    return {
                        timestamp: h.timestamp.maximum(k.timestamp),
                        value: Object.assign({}, h.value, {
                            T: "nio",
                            W: m,
                            J: l
                        })
                    }
                }))
            }
        }
    }

    function Wp(a) {
        return M(function(b) {
            return b.value.ba !== "nio" ? b : Object.assign({}, b, {
                value: Object.assign({}, b.value, {
                    da: qo(a, !0),
                    R: qo(a, !0)
                })
            })
        })
    }

    function Xp(a, b) {
        return K(b).g(a, M(function() {
            return b
        }))
    }

    function Tp(a, b) {
        return a.j.timeline !== pe ? bd(new de(2)) : a.MutationObserver ? typeof IntersectionObserver === "undefined" ? bd(new de(0)) : (new I(function(c) {
            var d = new J,
                e = new Hp(d.next.bind(d), {
                    threshold: [].concat(x(b))
                });
            c.next({
                bi: d.g(qg(a.F, 735)),
                Eh: e,
                ph: function(f) {
                    f = e.takeRecords(f);
                    f.length > 0 && d.next(f)
                }
            })
        })).g(Se(1), cf(1), kd()) : bd(new de(1))
    }

    function Yp(a) {
        return Qc(a.sort(function(b, c) {
            return b.time - c.time
        }), pd)
    }

    function Up(a, b, c, d, e, f, g) {
        return new I(function(h) {
            function k() {
                w || (w = !0, g.i !== void 0 && b.unobserve(e, g.i), m.unsubscribe(), r.unsubscribe(), q.unsubscribe(), v.unsubscribe())
            }
            if (g.i !== void 0) {
                Ip(b, e);
                b.observe(e, g.i);
                var l = new Fc({
                        timestamp: a.j.now(),
                        value: Object.assign({}, Kp, {
                            ba: "nio",
                            T: "nio"
                        })
                    }),
                    m = d.g(Cd(function(z) {
                        return Yp(z)
                    }), P(function(z) {
                        return z.target === g.i
                    }), M(function(z) {
                        return {
                            timestamp: new re(z.time, pe),
                            value: {
                                ba: "nio",
                                da: z.rootBounds || Wh,
                                R: z.rootBounds || qo(a, !0),
                                aa: t,
                                T: "nio",
                                W: z.intersectionRect,
                                J: z.boundingClientRect,
                                fa: {
                                    x: 0,
                                    y: 0
                                },
                                isIntersecting: z.isIntersecting,
                                Yf: z.isVisible
                            }
                        }
                    }), bf(l), kd()).subscribe(h),
                    t = new J,
                    q = t.subscribe(function() {
                        f(e);
                        h.next({
                            timestamp: a.j.now(),
                            value: l.value.value
                        });
                        g.i !== void 0 && (b.unobserve(e, g.i), b.observe(e, g.i))
                    }),
                    r = Xp(c, g).subscribe(function() {
                        t.next()
                    }),
                    w = !1,
                    v = g.released.subscribe(function() {
                        return k()
                    });
                return k
            }
        })
    };

    function Zp(a, b) {
        var c = a.ce().g(M(function() {
            return "b"
        }));
        return Vd(b, c).g(Se(1), V(a.h, 1))
    };

    function $p(a) {
        return function(b) {
            var c;
            return b.g(hf(function(d) {
                return void(c = d.timestamp)
            }), M(function(d) {
                return d.value
            }), a, M(function(d) {
                return {
                    timestamp: c,
                    value: d
                }
            }))
        }
    };
    var aq = function(a) {
            return a.W.width * a.W.height / (a.J.width * a.J.height)
        },
        bq = $p(H(M(function(a) {
            var b;
            return (b = a.ad) != null ? b : aq(a)
        }), M(function(a) {
            return isFinite(a) ? a : 0
        }))),
        cq = $p(H(M(function(a) {
            var b;
            return (b = a.ad) != null ? b : aq(a)
        }), M(function(a) {
            return isFinite(a) ? a : -1
        })));
    var dq = function(a, b) {
        this.a = a;
        this.b = b;
        if (a.clock.timeline !== b.clock.timeline) throw Error();
    };
    dq.prototype.Y = function(a) {
        return a instanceof dq ? this.a.Y(a.a) && this.b.Y(a.b) : !1
    };
    dq.prototype.pa = function(a) {
        var b = this.a.pa(a).value,
            c = this.b.pa(a).value;
        return {
            timestamp: a,
            value: [b, c]
        }
    };
    da.Object.defineProperties(dq.prototype, {
        active: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.a.active || this.b.active
            }
        },
        clock: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.a.clock
            }
        },
        C: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a = this.a.C.timestamp.maximum(this.b.C.timestamp),
                    b = this.a.C.timestamp.equals(a) ? this.a.C.value : this.a.pa(a).value,
                    c = this.b.C.timestamp.equals(a) ? this.b.C.value : this.b.pa(a).value;
                return {
                    timestamp: a,
                    value: [b, c]
                }
            }
        }
    });
    var eq = function(a, b) {
        this.input = a;
        this.md = b;
        this.C = {
            timestamp: this.input.C.timestamp,
            value: this.md(this.input.C.value)
        }
    };
    eq.prototype.Y = function(a) {
        return a instanceof eq ? this.input.Y(a.input) && this.md === a.md : !1
    };
    eq.prototype.pa = function(a) {
        a = this.input.pa(a);
        return {
            timestamp: a.timestamp,
            value: this.md(a.value)
        }
    };
    da.Object.defineProperties(eq.prototype, {
        active: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.input.active
            }
        },
        clock: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.input.clock
            }
        }
    });

    function fq(a, b, c) {
        c = c === void 0 ? function(d, e) {
            return d === e
        } : c;
        return a.timestamp.equals(b.timestamp) && c(a.value, b.value)
    };
    var gq = function(a, b, c) {
        this.clock = a;
        this.C = b;
        this.active = c
    };
    gq.prototype.Y = function(a) {
        return a instanceof gq ? this.active === a.active && this.clock.timeline === a.clock.timeline && fq(this.C, a.C) : !1
    };
    gq.prototype.pa = function(a) {
        return {
            timestamp: a,
            value: this.C.value + (this.active ? Math.max(0, te(a, this.C.timestamp)) : 0)
        }
    };
    var hq = function() {};
    hq.prototype.ia = function() {
        return this.pa(this.clock.now())
    };
    hq.prototype.qa = function(a) {
        var b = this.clock.timeline,
            c, d = (c = a.get(b)) != null ? c : this.clock.now();
        a.set(b, d);
        return this.pa(d)
    };
    hq.prototype.map = function(a) {
        return new iq(this, a)
    };
    hq.prototype.sa = function(a) {
        return new jq(this, a)
    };
    var jq = function() {
        dq.apply(this, arguments);
        this.map = hq.prototype.map;
        this.sa = hq.prototype.sa;
        this.ia = hq.prototype.ia;
        this.qa = hq.prototype.qa
    };
    A(jq, dq);
    var kq = function() {
        gq.apply(this, arguments);
        this.map = hq.prototype.map;
        this.sa = hq.prototype.sa;
        this.ia = hq.prototype.ia;
        this.qa = hq.prototype.qa
    };
    A(kq, gq);
    var iq = function() {
        eq.apply(this, arguments);
        this.map = hq.prototype.map;
        this.sa = hq.prototype.sa;
        this.ia = hq.prototype.ia;
        this.qa = hq.prototype.qa
    };
    A(iq, eq);

    function lq(a, b) {
        a.Ca && (a.sb = a.Ca);
        a.Ca = b;
        a.sb && a.sb.value ? (b = Math.max(0, te(b.timestamp, a.sb.timestamp)), a.totalTime += b, a.oa += b) : a.oa = 0;
        return a
    }

    function mq(a) {
        return H(ef(lq, {
            totalTime: 0,
            oa: 0
        }), M(function(b) {
            return new kq(a, {
                timestamp: b.Ca.timestamp,
                value: b.totalTime
            }, b.Ca.value)
        }))
    }

    function nq(a) {
        return H(ef(lq, {
            totalTime: 0,
            oa: 0
        }), M(function(b) {
            return new kq(a, {
                timestamp: b.Ca.timestamp,
                value: b.oa
            }, b.Ca.value)
        }))
    };

    function oq(a) {
        return H(nq(a), M(function(b) {
            return b.map(function(c) {
                return Math.round(c)
            })
        }))
    };
    var pq = function(a, b) {
        this.C = b;
        this.ia = hq.prototype.ia;
        this.qa = hq.prototype.qa;
        this.map = hq.prototype.map;
        this.sa = hq.prototype.sa;
        this.clock = a
    };
    pq.prototype.Y = function(a) {
        return a.active
    };
    pq.prototype.pa = function() {
        return this.C
    };
    da.Object.defineProperties(pq.prototype, {
        active: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !1
            }
        }
    });

    function qq(a, b) {
        return b.g(M(function(c) {
            return new pq(a.j, {
                timestamp: a.j.now(),
                value: c
            })
        }))
    };

    function rq(a, b) {
        return a >= 1 ? !0 : a <= 0 ? !1 : a >= b
    };

    function sq(a) {
        return function(b) {
            return b.g(jf(a), M(function(c) {
                var d = u(c);
                c = d.next().value;
                d = d.next().value;
                return {
                    timestamp: c.timestamp,
                    value: rq(c.value, d)
                }
            }))
        }
    };
    var tq = M(function(a) {
        if (a.value.ba === "omid") {
            if (a.value.T === "nio") return "omio";
            if (a.value.T === "geo") return "omgeo"
        }
        return a.value.T === "geo" || a.value.T === "nio" ? a.value.ba : a.value.T
    });

    function uq() {
        return H(P(function(a, b) {
            return b > 0
        }), vq, S(-1), R())
    }
    var vq = H(P(function(a) {
        return !isNaN(a)
    }), ef(function(a, b) {
        return isNaN(a) ? b : Math.min(a, b)
    }, NaN), R());
    var wq = $p(H(M(function(a) {
        return a.W.width * a.W.height / (a.da.width * a.da.height)
    }), M(function(a) {
        return isFinite(a) ? Math.min(1, a) : 0
    })));

    function xq(a, b, c) {
        return a ? O([b, c]).g(P(function(d) {
            var e = u(d);
            d = e.next().value;
            e = e.next().value;
            return d.timestamp.equals(e.timestamp)
        }), M(function(d) {
            var e = u(d);
            d = e.next().value;
            e = e.next().value;
            return d.value > e.value ? d : e
        })) : b
    }

    function yq(a) {
        return function(b) {
            var c = b.g(bq),
                d = b.g(wq);
            return a instanceof I ? a.g(T(function(e) {
                return xq(e, c, d)
            })) : xq(a.value, c, d)
        }
    };
    var zq = H($p(M(function(a) {
        a = a.ad ? a.J.width * a.J.height * a.ad / (a.R.width * a.R.height) : a.W.width * a.W.height / (a.R.width * a.R.height);
        return isFinite(a) ? a : 0
    })));

    function Aq(a, b, c, d) {
        var e = d.cd,
            f = d.Yd,
            g = d.Dg,
            h = d.df,
            k = d.te,
            l = d.ag,
            m = d.fd;
        d = d.Ag;
        b = Bq(a, c, b);
        c = Cq(a, c);
        d = Dq(b, d);
        var t = Eq(a, e, l, b),
            q = t.g(M(function(B) {
                return B.value
            }), R(), V(a, 1), ef(function(B, X) {
                return Math.max(B, X)
            }, 0)),
            r = t.g(M(function(B) {
                return B.value
            }), uq(), V(a, 1)),
            w = b.g(cq, M(function(B) {
                return B.value
            }), Se(2), R(), V(a, 1));
        g = Fq(a, b, g, h);
        var v = g.g(S(!1), R(), M(function(B) {
            return B ? k : f
        }));
        h = t.g(sq(v), R(), V(a, 1));
        var z = O([h, b]).g(P(function(B) {
                var X = u(B);
                B = X.next().value;
                X = X.next().value;
                return B.timestamp.equals(X.timestamp)
            }),
            M(function(B) {
                var X = u(B);
                B = X.next().value;
                X = X.next().value;
                return {
                    visible: B.value,
                    geometry: X.value.J
                }
            }), ef(function(B, X) {
                return !X.visible && B.visible ? B : X
            }, {
                visible: !1,
                geometry: Wh
            }), M(function(B) {
                return B.geometry
            }), S(Wh), V(a, 1), R(Xh));
        l = l instanceof I ? l.g(R(), Re()) : Rd;
        v = O([l, v]).g(Re());
        var y = b.g(P(function(B) {
                return B.value.ba !== "ns" && B.value.T !== "ns"
            }), ef(function(B) {
                return B + 1
            }, 0), S(0), V(a, 1)),
            N = c.g(Re(!0), S(!1), V(a, 1));
        N = O([m, N]).g(M(function(B) {
            var X = u(B);
            B = X.next().value;
            X = X.next().value;
            return B &&
                !X
        }), V(a, 1));
        var Q = b.g(zq, R()),
            fa = Q.g(M(function(B) {
                return B.value
            }), ef(function(B, X) {
                return Math.max(B, X)
            }, 0), R(), V(a, 1)),
            F = Q.g(M(function(B) {
                return B.value
            }), uq(), V(a, 1));
        return {
            He: l,
            Gc: v,
            wa: {
                ki: b,
                bg: b.g(tq),
                Xc: z.g(R(Xh)),
                visible: h.g(R(fq)),
                Ke: t.g(R(fq)),
                Zf: q,
                Xh: r,
                gf: b.g(Ep, R(Pb)),
                Ji: Q,
                Qh: fa,
                Wh: F,
                bd: c,
                aa: (new W(new J)).S(a),
                Vf: g,
                cd: e,
                fd: m,
                Df: N,
                Ki: y,
                Nh: w,
                Ad: d
            }
        }
    }

    function Cq(a, b) {
        return b.g(P(function() {
            return !1
        }), M(function(c) {
            return c
        }), Le(function(c) {
            return (new W(c)).S(a)
        }))
    }

    function Dq(a, b) {
        a = O([a, b]).g(M(function(e) {
            var f = u(e);
            e = f.next().value;
            if (f.next().value && e.value.isIntersecting) return e.value.Yf
        }), R());
        var c = a.g(M(function(e) {
                return e === void 0 ? !0 : e
            }), ef(function(e, f) {
                return e || !f
            }, !1)),
            d = a.g(ef(function(e, f) {
                return f === void 0 ? e : f ? !1 : e != null ? e : !0
            }, void 0), M(function(e) {
                return !!e
            }));
        return O([b, Xd(a, c, d)]).g(M(function(e) {
            var f = u(e);
            e = f.next().value;
            var g = u(f.next().value);
            f = g.next().value;
            var h = g.next().value;
            g = g.next().value;
            var k = 0;
            if (!e) return 0;
            if (f === void 0) return 16;
            f && (k |= 1);
            f || (k |= 2);
            h && (k |= 4);
            g && (k |= 8);
            return k
        }))
    }

    function Bq(a, b, c) {
        return b.g(Ud(Rd), V(a, 1)).g(R(function(d, e) {
            return fq(d, e, Lp)
        }), S({
            timestamp: c.now(),
            value: Kp
        }), V(a, 1))
    }

    function Eq(a, b, c, d) {
        c = d.g(yq(c), $p(M(function(e) {
            return Math.round(e * 100) / 100
        })), V(a, 1));
        return b instanceof W ? c : O([c, b]).g(M(function(e) {
            var f = u(e);
            e = f.next().value;
            f = f.next().value;
            return {
                timestamp: f.timestamp.maximum(e.timestamp),
                value: f.value ? 0 : e.value
            }
        }), R(fq), V(a, 10))
    }

    function Fq(a, b, c, d) {
        b = [b.g(M(function(e) {
            return e.value.J.width * e.value.J.height >= 242500
        }))];
        c instanceof I && b.push(c.g(M(function(e) {
            return !!e
        })));
        c = O(b);
        return d ? c.g(M(function(e) {
            return e.some(function(f) {
                return f
            })
        }), S(!1), R(), V(a, 1)) : (new W(!1)).S(a)
    };
    var Gq = function(a) {
            this.j = a;
            this.ud = null;
            this.timeout = new J
        },
        Iq = function(a, b) {
            Hq(a);
            a.ud = a.j.setTimeout(function() {
                return void a.timeout.next()
            }, b)
        },
        Hq = function(a) {
            a.ud !== null && (a.j.clearTimeout(a.ud), a.ud = null)
        };

    function Jq(a, b, c, d) {
        var e = Kq.wg,
            f = new Gq(b);
        c = c.g(S(void 0), T(function() {
            Hq(f);
            return d
        })).g(M(function(g) {
            Hq(f);
            var h = g.C,
                k = g.active;
            h.value >= e || !k || (k = b.now(), k = Math.max(0, te(k, h.timestamp)), Iq(f, Math.max(0, e - h.value - k)));
            return g.map(function(l) {
                return l >= e
            })
        }));
        return O([c, Qd(f.timeout, K(void 0))]).g(M(function(g) {
            return u(g).next().value
        }), gf(function(g) {
            return !g.ia().value
        }, !0), V(a, 1))
    };

    function Lq(a) {
        var b = new kq(a, {
            timestamp: a.now(),
            value: 0
        }, !1);
        return H(nq(a), ef(function(c, d) {
            return c.C.value > d.C.value ? new kq(a, c.C, !1) : d
        }, b), M(function(c) {
            return c.map(function(d) {
                return Math.round(d)
            })
        }))
    };

    function Mq(a) {
        return function(b) {
            return H(sq(K(b)), Lq(a))
        }
    };

    function Nq(a) {
        return function(b) {
            return H($p(M(function(c) {
                return rq(c, b)
            })), mq(a), M(function(c) {
                return c.map(function(d) {
                    return Math.round(d)
                })
            }))
        }
    };

    function Oq(a) {
        return a.map(function(b) {
            return b.map(function(c) {
                return [c]
            })
        }).reduce(function(b, c) {
            return b.sa(c).map(function(d) {
                return d.flat()
            })
        })
    }

    function Pq(a, b) {
        return a.sa(b).map(function(c) {
            var d = u(c);
            c = d.next().value;
            d = d.next().value;
            return c - d
        })
    }

    function Qq(a, b, c, d, e, f) {
        var g = Rq;
        if (g.length > 1)
            for (var h = 0; h < g.length - 1; h++)
                if (g[h] < g[h + 1]) throw Error();
        h = f.g(S(void 0), T(function() {
            return d.g(oq(a))
        }), R(function(k, l) {
            return k.Y(l)
        }), V(b, 1));
        f = f.g(S(void 0), T(function() {
            return d.g(Lq(a))
        }), R(function(k, l) {
            return k.Y(l)
        }), V(b, 1));
        return {
            xd: e.g(S(void 0), T(function() {
                return c.g(M(function(k) {
                    return {
                        timestamp: k.timestamp,
                        value: !0
                    }
                }), mq(a))
            }), R(function(k, l) {
                return k.Y(l)
            }), V(b, 1)),
            yd: e.g(S(void 0), T(function() {
                return c.g(M(function(k) {
                    return {
                        timestamp: k.timestamp,
                        value: k.value === 0
                    }
                }), mq(a))
            }), R(function(k, l) {
                return k.Y(l)
            }), V(b, 1)),
            vc: e.g(S(void 0), T(function() {
                return c.g(Fp(Mq(a), g))
            }), M(Oq), R(function(k, l) {
                return k.Y(l)
            }), V(b, 1)),
            Ic: e.g(S(void 0), T(function() {
                return c.g(Fp(Nq(a), g), M(function(k) {
                    return k.map(function(l, m) {
                        return m > 0 ? Pq(l, k[m - 1]) : l
                    })
                }))
            }), M(Oq), R(function(k, l) {
                return k.Y(l)
            }), V(b, 1)),
            uc: f,
            gb: h.g(R(function(k, l) {
                return k.Y(l)
            }), V(b, 1))
        }
    };

    function Sq(a) {
        var b;
        if (b = Tq(a)) b = !Uq(a, "abgcp") && !Uq(a, "abgc") && !(typeof a.id === "string" && a.id === "abgb") && !(typeof a.id === "string" && a.id === "mys-abgc") && !Uq(a, "cbb");
        return b
    }

    function Uq(a, b) {
        return a.classList ? a.classList.contains(b) : (" " + a.className + " ").indexOf(" " + b + " ") > -1
    }

    function Tq(a) {
        try {
            var b = a.getBoundingClientRect();
            return b && b.height >= 30 && b.width >= 30
        } catch (c) {
            return !1
        }
    }

    function Vq(a, b) {
        if (a.i === void 0 || !a.i.children) return a;
        for (var c = Ob(a.i.children); c.length;) {
            var d = b ? c.filter(Sq) : c.filter(Tq);
            if (d.length === 1) return new yh(d[0]);
            if (d.length > 1) break;
            c = Rb(c, function(e) {
                return Ob(e.children)
            })
        }
        return a
    }

    function Wq(a, b, c, d, e) {
        if (c) return {
            Wc: b,
            tb: K(null)
        };
        c = b.element.g(M(function(f) {
            a: if (f.i === void 0 || Tq(f.i)) f = {
                    nd: f,
                    tb: "mue"
                };
                else {
                    var g = Vq(f, e);
                    if (g.i !== void 0 && Tq(g.i)) f = {
                        nd: g,
                        tb: "ie"
                    };
                    else {
                        if (d || a.ie)
                            if (g = a.document.querySelector(".GoogleActiveViewInnerContainer")) {
                                f = {
                                    nd: new yh(g),
                                    tb: "ce"
                                };
                                break a
                            }
                        f = {
                            nd: f,
                            tb: "mue"
                        }
                    }
                }return f
        }), ff());
        return {
            Wc: {
                vb: b.vb,
                element: c.g(M(function(f) {
                    return f.nd
                }))
            },
            tb: c.g(M(function(f) {
                return f.tb
            }))
        }
    };

    function Xq(a, b, c, d) {
        var e = d.cd,
            f = d.Yd,
            g = d.Dg,
            h = d.df,
            k = d.te,
            l = d.ag,
            m = d.fd;
        d = d.Ag;
        b = Yq(a, c, b);
        c = Zq(a, c);
        d = $q(b, d);
        var t = ar(a, e, l, b),
            q = t.g(M(function(F) {
                return F.value
            }), R(), V(a, 1), ef(function(F, B) {
                return Math.max(F, B)
            }, 0)),
            r = t.g(M(function(F) {
                return F.value
            }), uq(), V(a, 1)),
            w = b.g(cq, M(function(F) {
                return F.value
            }), Se(2), R(), V(a, 1));
        g = br(a, b, g, h);
        var v = g.g(S(!1), R(), M(function(F) {
            return F ? k : f
        }));
        h = t.g(sq(v), R(), V(a, 1));
        var z = O([h, b]).g(P(function(F) {
                var B = u(F);
                F = B.next().value;
                B = B.next().value;
                return F.timestamp.equals(B.timestamp)
            }),
            M(function(F) {
                var B = u(F);
                F = B.next().value;
                B = B.next().value;
                return {
                    visible: F.value,
                    geometry: B.value.J
                }
            }), ef(function(F, B) {
                return !B.visible && F.visible ? F : B
            }, {
                visible: !1,
                geometry: Wh
            }), M(function(F) {
                return F.geometry
            }), S(Wh), V(a, 1), R(Xh));
        l = l instanceof I ? l.g(R(), Re()) : Rd;
        v = O([l, v]).g(Re());
        var y = b.g(P(function(F) {
                return F.value.ba !== "ns" && F.value.T !== "ns"
            }), ef(function(F) {
                return F + 1
            }, 0), S(0), V(a, 1)),
            N = c.g(Re(!0), S(!1), V(a, 1));
        N = O([m, N]).g(M(function(F) {
            var B = u(F);
            F = B.next().value;
            B = B.next().value;
            return F &&
                !B
        }), V(a, 1));
        var Q = b.g(zq, R()),
            fa = Q.g(M(function(F) {
                return F.value
            }), ef(function(F, B) {
                return Math.max(F, B)
            }, 0), R(), V(a, 1));
        a = Q.g(M(function(F) {
            return F.value
        }), uq(), V(a, 1));
        return {
            He: l,
            Gc: v,
            wa: {
                ki: b,
                bg: b.g(tq),
                Xc: z.g(R(Xh)),
                visible: h.g(R(fq)),
                Ke: t.g(R(fq)),
                Zf: q,
                Xh: r,
                gf: b.g(Ep, R(Pb)),
                Ji: Q,
                Qh: fa,
                Wh: a,
                bd: c,
                aa: b.g(M(function(F) {
                    return F.value.aa
                })),
                Vf: g,
                cd: e,
                fd: m,
                Df: N,
                Ki: y,
                Nh: w,
                Ad: d
            }
        }
    }

    function Zq(a, b) {
        return b.g(P(function() {
            return !1
        }), M(function(c) {
            return c
        }), Le(function(c) {
            return (new W(c)).S(a)
        }))
    }

    function Yq(a, b, c) {
        return b.g(Ud(Rd), V(a, 1)).g(R(function(d, e) {
            return fq(d, e, Lp)
        }), S({
            timestamp: c.now(),
            value: Kp
        }), V(a, 1))
    }

    function ar(a, b, c, d) {
        c = d.g(yq(c), $p(M(function(e) {
            return Math.round(e * 100) / 100
        })), V(a, 1));
        return b instanceof W ? c : O([c, b]).g(M(function(e) {
            var f = u(e);
            e = f.next().value;
            f = f.next().value;
            return {
                timestamp: f.timestamp.maximum(e.timestamp),
                value: f.value ? 0 : e.value
            }
        }), R(fq), V(a, 1))
    }

    function br(a, b, c, d) {
        b = [b.g(M(function(e) {
            return e.value.J.width * e.value.J.height >= 242500
        }))];
        c instanceof I && b.push(c.g(M(function(e) {
            return !!e
        })));
        c = O(b);
        return d ? c.g(M(function(e) {
            return e.some(function(f) {
                return f
            })
        }), S(!1), R(), V(a, 1)) : (new W(!1)).S(a)
    }

    function $q(a, b) {
        a = O([a, b]).g(M(function(e) {
            var f = u(e);
            e = f.next().value;
            if (f.next().value && e.value.isIntersecting) return e.value.Yf
        }), R());
        var c = a.g(M(function(e) {
                return e === void 0 ? !0 : e
            }), ef(function(e, f) {
                return e || !f
            }, !1)),
            d = a.g(ef(function(e, f) {
                return f === void 0 ? e : f ? !1 : e != null ? e : !0
            }, void 0), M(function(e) {
                return !!e
            }));
        return O([b, Xd(a, c, d)]).g(M(function(e) {
            var f = u(e);
            e = f.next().value;
            var g = u(f.next().value);
            f = g.next().value;
            var h = g.next().value;
            g = g.next().value;
            var k = 0;
            if (!e) return 0;
            if (f === void 0) return 16;
            f && (k |= 1);
            f || (k |= 2);
            h && (k |= 4);
            g && (k |= 8);
            return k
        }))
    };
    var cr = H(yo("data-google-av-itpl"), M(function(a) {
        return Number(a)
    }), M(function(a) {
        return isNaN(a) ? 1 : a
    }));
    var dr = {
            Qi: "addEventListener",
            bj: "getMaxSize",
            cj: "getScreenSize",
            dj: "getState",
            ej: "getVersion",
            pj: "removeEventListener",
            lj: "isViewable"
        },
        er = function(a, b) {
            this.ta = null;
            this.Ch = new J;
            b = b || this.Li;
            var c = a.ie,
                d = !a.Hb;
            if (c && d) {
                var e = a.global.top.mraid;
                if (e) {
                    this.Vc = b(e);
                    this.ta = e;
                    this.ub = 3;
                    return
                }
            }(a = a.global.mraid) ? (this.Vc = b(a), this.ta = a, this.ub = c ? d ? 2 : 1 : 0) : (this.ub = -1, this.Vc = 2)
        };
    er.prototype.addEventListener = function(a, b) {
        return this.Sb("addEventListener", a, b)
    };
    er.prototype.removeEventListener = function(a, b) {
        return this.Sb("removeEventListener", a, b)
    };
    er.prototype.If = function() {
        var a = this.Sb("getVersion");
        return typeof a === "string" ? a : ""
    };
    er.prototype.getState = function() {
        var a = this.Sb("getState");
        return typeof a === "string" ? a : ""
    };
    var fr = function(a) {
            a = a.Sb("isViewable");
            return typeof a === "boolean" ? a : !1
        },
        gr = function(a) {
            if (a.ta) return a = a.ta.AFMA_LIDAR, typeof a === "string" ? a : void 0
        };
    er.prototype.Li = function(a) {
        return a ? a.IS_GMA_SDK ? Object.values(dr).every(function(b) {
            return typeof a[b] === "function"
        }) ? 0 : 1 : 2 : 1
    };
    er.prototype.Sb = function(a) {
        var b = C.apply(1, arguments);
        if (this.ta) try {
            return this.ta[a].apply(this.ta, x(b))
        } catch (c) {
            this.Ch.next(a)
        }
    };
    da.Object.defineProperties(er.prototype, {
        qf: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                if (this.ta) {
                    var a = this.ta.AFMA_LIDAR_EXP_1;
                    return a === void 0 ? void 0 : !!a
                }
            },
            set: function(a) {
                this.ta && (this.ta.AFMA_LIDAR_EXP_1 = a)
            }
        }
    });

    function hr(a, b) {
        return (new er(a)).ub !== -1 ? (new W(!0)).S(a.h) : b.g(yo("data-google-av-inapp"), M(function(c) {
            return c !== null
        }), V(a.h, 1))
    };
    var jr = function(a, b) {
            var c = this;
            this.j = a;
            this.ue = this.ld = null;
            this.oi = b.g(R()).subscribe(function(d) {
                ir(c);
                c.ue = d
            })
        },
        kr = function(a, b) {
            ir(a);
            a.ld = a.j.setTimeout(function() {
                var c;
                return void((c = a.ue) == null ? void 0 : c.next())
            }, b)
        },
        ir = function(a) {
            a.ld !== null && a.j.clearTimeout(a.ld);
            a.ld = null
        };
    jr.prototype.dispose = function() {
        ir(this);
        this.oi.unsubscribe();
        this.ue = null
    };

    function lr(a, b, c, d, e) {
        var f = Kq.wg;
        var g = g === void 0 ? new jr(b, d) : g;
        return (new I(function(h) {
            var k = c.g(S(void 0), T(function() {
                return mr(e)
            })).g(M(function(l) {
                var m = l.value;
                l = l.timestamp;
                var t = m.visible;
                m = m.gb;
                var q = m >= f;
                q || !t ? ir(g) : (l = Math.max(0, te(b.now(), l)), kr(g, Math.max(0, f - m - l)));
                return q
            }), ef(function(l, m) {
                return m || l
            }, !1), R()).subscribe(h);
            return function() {
                g.dispose();
                k.unsubscribe()
            }
        })).g(gf(function(h) {
            return !h
        }, !0), V(a, 1))
    }

    function mr(a) {
        return qp([a, a.g(Gp())]).g(M(function(b) {
            var c = u(b);
            b = c.next().value;
            c = c.next().value;
            return {
                timestamp: b.timestamp,
                value: {
                    visible: b.value,
                    gb: c.value
                }
            }
        }), R(function(b, c) {
            return fq(b, c, function(d, e) {
                return d.gb === e.gb && d.visible === e.visible
            })
        }))
    };

    function nr(a, b) {
        return {
            Jd: b.g(yo("data-google-av-adk")),
            cc: b.g(yo("data-google-av-btr"), R(), M(function(c) {
                return c === null ? [] : c.split("|").filter(function(d) {
                    return d !== ""
                })
            })),
            Sd: b.g(yo("data-google-av-cpmav"), R(), M(function(c) {
                return c === null ? [] : c.split("|").filter(function(d) {
                    return d !== ""
                })
            })),
            Pe: b.g(yo("data-google-av-vrus"), R(), M(function(c) {
                return c === null ? [] : c.split("|").filter(function(d) {
                    return d !== ""
                })
            })),
            bh: dp(a, b),
            flags: b.g(yo("data-google-av-flags"), R()),
            Xa: hr(a, b),
            pe: b.g(up("cr", function(c) {
                return c ===
                    "1"
            }), R()),
            Jh: b.g(up("omid", function(c) {
                return c === "1"
            }), R()),
            ke: b.g(cr),
            metadata: b.g(yo("data-google-av-metadata")),
            Na: b.g(Fo),
            ma: b.g(zo),
            Pi: b.g(up("la", function(c) {
                return c === "1"
            }), R()),
            ob: b.g(yo("data-google-av-turtlex"), M(function(c) {
                return c !== null
            }), R()),
            se: b.g(yo("data-google-av-vattr"), M(function(c) {
                return c !== null
            }), R())
        }
    };

    function or() {
        return H(tp(), ef(function(a, b) {
            return Math.max(a, b)
        }, 0), M(function(a) {
            return Math.round(a)
        }))
    };

    function pr(a) {
        return H(sq(K(a)), or())
    };

    function qr(a, b, c, d, e) {
        c = c.g(M(function() {
            return !1
        }));
        d = O([e, d]).g(T(function(f) {
            f = u(f).next().value;
            return rr(b, f)
        }));
        return Qd(K(!1), c, d).g(R(), V(a.h, 1))
    }

    function rr(a, b) {
        return a.g(M(function(c) {
            return b || c === 0 || c === 2
        }))
    };
    var sr = [33, 32],
        tr = H(cr, M(function(a) {
            return sr.indexOf(a) >= 0
        }), R());

    function ur(a, b, c, d, e, f) {
        var g = c.g(M(function(k) {
                return k === 9
            })),
            h = b.element.g(tr);
        c = e.g(P(function(k) {
            return k
        }), T(function() {
            return O([g, h])
        }), M(function(k) {
            var l = u(k);
            k = l.next().value;
            return !l.next().value || k
        }), R());
        f = O([c, d.g(R()), f]).g(M(function(k) {
            var l = u(k);
            k = l.next().value;
            var m = l.next().value;
            l = l.next().value;
            return Wq(a, b, !k, m, l)
        }), cf(1), kd());
        d = f.g(M(function(k) {
            return k.Wc
        }));
        f = f.g(T(function(k) {
            return k.tb
        }), S(null), R(), V(a.h, 1));
        return {
            Ka: d,
            fc: f
        }
    };

    function vr(a) {
        var b = b === void 0 ? !1 : b;
        return H(T(function(c) {
            return Th(a.document, c, b)
        }), V(a.h, 1))
    };
    var wr = function(a, b, c, d, e, f) {
        this.rc = b.element.g(vr(a), V(a.h, 1));
        this.qg = qr(a, c, b.element, this.rc, d);
        c = ur(a, b, e, d, this.qg, f);
        d = c.fc;
        this.Ka = c.Ka;
        this.fc = d;
        this.Qe = Qd((new W(1)).S(a.h), b.element.g(Se(1), M(function() {
            return 2
        }), V(a.h, 1)), this.rc.g(Se(1), M(function() {
            return 3
        }), V(a.h, 1)), this.qg.g(P(Boolean), Se(1), M(function() {
            return 0
        }), V(a.h, 1))).g(gf(function(g) {
            return g !== 0
        }, !0), V(a.h, 0))
    };

    function xr(a, b) {
        return a && b === 0 ? 15 : a || b !== 1 ? null : 14
    }

    function yr(a, b, c) {
        return b instanceof I ? b.g(T(function(d) {
            return (d = xr(d, c)) ? bd(new de(d)) : a
        })) : (b = xr(b.value, c)) ? bd(new de(b)) : a
    };

    function zr(a) {
        var b = new de(13);
        if (a.length < 1) return {
            chain: Gc,
            Od: Gc
        };
        var c = new J,
            d = a[0];
        return {
            chain: a.slice(1).reduce(function(e, f) {
                return e.g(Le(function(g) {
                    c.next(g);
                    return f
                }))
            }, d).g(Le(function(e) {
                c.next(e);
                return bd(b)
            }), bf(new J), kd()),
            Od: c
        }
    };
    var Ar = function() {};
    var Br = function(a, b) {
        this.context = a;
        this.Ei = b
    };
    A(Br, Ar);
    Br.prototype.Sa = function(a, b) {
        var c = this.Ei.map(function(f) {
                return f.Sa(a, b)
            }),
            d = zr(c.map(function(f) {
                return f.Va
            })),
            e = d.Od.g(Cr());
        return {
            Va: d.chain.g(V(this.context.h, 1)),
            Pa: Object.assign.apply(Object, [{
                Ie: e,
                Zj: d.Od
            }].concat(x(c.map(function(f) {
                return f.Pa
            }))))
        }
    };
    var Cr = function() {
        return ef(function(a, b) {
            b instanceof de ? a.push(b.Th) : a.push(-1);
            return a
        }, [])
    };

    function Dr(a, b) {
        var c = a.g(bf(new J), kd());
        return T(function(d) {
            return c.g(b(d))
        })
    };

    function Er(a, b) {
        var c = c === void 0 ? function() {
            var f = (dh(a.global) ? a.global.innerWidth : 0) || a.de() || 0,
                g = (dh(a.global) ? a.global.innerHeight : 0) || a.be() || 0;
            return {
                left: 0,
                top: 0,
                width: f,
                height: g
            }
        } : c;
        var d = a.Hb ? Sh(a.document) ? a.Ih ? null : bd(new de(5)) : bd(new de(4)) : bd(new de(3));
        if (d) return d;
        var e = new J;
        return Qd(K({}), b, e).g(M(function() {
            var f = Fr(a, c);
            return {
                timestamp: a.j.now(),
                value: {
                    ba: "iem",
                    da: f,
                    R: f,
                    aa: e,
                    fa: {
                        x: 0,
                        y: 0
                    }
                }
            }
        }), V(a.h, 1))
    }

    function Fr(a, b) {
        b = b();
        var c = ei(document),
            d = function(q, r) {
                return !!a.document.elementFromPoint(q, r)
            },
            e = Math.floor(b.left - c.x),
            f = Math.floor(b.top - c.y),
            g = Math.floor(b.left + b.width - c.x),
            h = Math.floor(b.top + b.height - c.y);
        b = d(e, f);
        c = d(g, h);
        if (b && c) return {
            top: f,
            left: e,
            width: g - e,
            height: h - f
        };
        var k = d(g, f),
            l = d(e, h);
        if (b) h = Gr(f, h, function(q) {
            return d(e, q)
        }), g = Gr(e, g, function(q) {
            return d(q, f)
        });
        else if (k) h = Gr(f, h, function(q) {
            return d(g, q)
        }), e = Gr(g, e, function(q) {
            return d(q, f)
        });
        else if (l) f = Gr(h, f, function(q) {
            return d(e,
                q)
        }), g = Gr(e, g, function(q) {
            return d(q, h)
        });
        else if (c) f = Gr(h, f, function(q) {
            return d(g, q)
        }), e = Gr(g, e, function(q) {
            return d(q, h)
        });
        else {
            var m = Math.floor((e + g) / 2),
                t = Math.floor((f + h) / 2);
            if (!d(m, t)) return {
                left: 0,
                top: 0,
                width: 0,
                height: 0
            };
            f = Gr(t, f, function(q) {
                return d(m, q)
            });
            h = Gr(t, h, function(q) {
                return d(m, q)
            });
            e = Gr(m, e, function(q) {
                return d(q, t)
            });
            g = Gr(m, g, function(q) {
                return d(q, t)
            })
        }
        return {
            top: f,
            left: e,
            width: g - e,
            height: h - f
        }
    }

    function Gr(a, b, c) {
        if (c(b)) return b;
        for (var d = 15; d--;) {
            var e = Math.floor((a + b) / 2);
            if (e === a || e === b) break;
            c(e) ? a = e : b = e
        }
        return a
    };
    var Hr = function(a, b) {
        this.context = a;
        this.La = b
    };
    A(Hr, Ar);
    Hr.prototype.Sa = function(a, b) {
        var c = Dr(Er(this.context, this.La), Np(this.context, b.Na));
        return {
            Va: yr(a.Ka.g(c), b.Xa, 0),
            Pa: {}
        }
    };

    function Ir(a, b) {
        if (a.Hb) return bd(new de(6));
        var c = new J;
        return Qd(K({}), b, c).g(M(function() {
            return {
                timestamp: a.j.now(),
                value: {
                    ba: "geo",
                    da: Jr(a),
                    R: qo(a, !0),
                    aa: c,
                    fa: {
                        x: 0,
                        y: 0
                    }
                }
            }
        }), kh(a.h))
    }

    function Jr(a) {
        var b = qo(a, !1);
        if (!a.ie || !dh(a.global.parent) || a.global.parent === a.global) return b;
        var c = new mo(a.global.parent, a.Da);
        c.G = a.G;
        c = Jr(c);
        a = a.global.frameElement.getBoundingClientRect();
        return Yh(Zh(Yh(c, a), {
            x: b.left - a.left,
            y: b.top - a.top
        }), b)
    };
    var Kr = function(a, b) {
        this.context = a;
        this.La = b
    };
    A(Kr, Ar);
    Kr.prototype.Sa = function(a, b) {
        var c = Dr(Ir(this.context, this.La), Np(this.context, b.Na));
        return {
            Va: yr(a.Ka.g(c), b.Xa, 0),
            Pa: {}
        }
    };
    var Lr = function(a, b, c) {
        c = c === void 0 ? Sp(a, b) : c;
        this.context = a;
        this.Fh = c
    };
    A(Lr, Ar);
    Lr.prototype.Sa = function(a, b) {
        var c = this.Fh(b.Bg);
        return {
            Va: yr(a.Ka.g(c, Wp(this.context)), b.Xa, 0),
            Pa: {}
        }
    };

    function Mr(a, b, c, d, e) {
        var f = f === void 0 ? new er(a) : f;
        var g = g === void 0 ? nf(a.j, 500) : g;
        var h = h === void 0 ? nf(a.j, 100) : h;
        e = K(f).g(Nr(c), hf(function(k) {
            d.next(k.ub)
        }), Or(a, h), Pr(a), Qr(a, e), cf(1), kd());
        f = new J;
        b = Qd(K({}), b, f);
        return e.g(Rr(a, f, b, g, c), V(a.h, 1))
    }

    function Qr(a, b) {
        return H(function(c) {
            return O([c, b])
        }, Te(function(c) {
            var d = u(c);
            c = d.next().value;
            return d.next().value !== 9 || fr(c) ? K(!0) : Sr(a, c, "viewableChange").g(P(function(e) {
                return u(e).next().value
            }), Se(1))
        }), M(function(c) {
            return u(c).next().value
        }))
    }

    function Nr(a) {
        return T(function(b) {
            if (b.ub === -1) return a.next("if"), bd(new de(7));
            if (b.Vc !== 0) switch (b.Vc) {
                case 1:
                    return a.next("mm"), bd(new de(18));
                case 2:
                    return a.next("ng"), bd(new de(17));
                default:
                    return a.next("i"), bd(new de(8))
            }
            return K(b)
        })
    }

    function Or(a, b) {
        return Te(function() {
            var c = a.dg;
            return Qh(a.document) === "complete" ? K(!0) : c.g(Te(function() {
                return b
            }))
        })
    }
    var Pr = function(a) {
        return T(function(b) {
            return b.getState() !== "loading" ? K(b) : Sr(a, b, "ready").g(M(function() {
                return b
            }))
        })
    };

    function Rr(a, b, c, d, e) {
        return T(function(f) {
            var g = gr(f);
            if (typeof g !== "string") return e.next("nc"), bd(new de(9));
            f.qf !== void 0 && (f.qf = !0);
            g = Sr(a, f, g, Tr);
            var h = {
                version: f.If(),
                ub: f.ub
            };
            g = g.g(M(function(l) {
                return Ur.apply(null, [a, b, f, h].concat(x(l)))
            }));
            var k = d.g(hf(function() {
                e.next("mt")
            }), T(function() {
                return bd(new de(10))
            }));
            g = Vd(g, k);
            return O([g, c]).g(M(function(l) {
                l = u(l).next().value;
                return Object.assign({}, l, {
                    timestamp: a.j.now()
                })
            }))
        })
    }

    function Tr(a, b) {
        return (b === null || typeof b === "number") && (a === null || !!a && typeof a.height === "number" && typeof a.width === "number" && typeof a.x === "number" && typeof a.y === "number")
    }

    function Ur(a, b, c, d, e, f) {
        e = e ? {
            left: e.x,
            top: e.y,
            width: e.width,
            height: e.height
        } : Wh;
        c = c.Sb("getMaxSize");
        var g = c != null && typeof c.width === "number" && typeof c.height === "number" ? c : {
            width: 0,
            height: 0
        };
        c = {
            left: 0,
            top: 0,
            width: -1,
            height: -1
        };
        if (g) {
            var h = Number(String(g.width));
            g = Number(String(g.height));
            c = isNaN(h) || isNaN(g) ? c : {
                left: 0,
                top: 0,
                width: h,
                height: g
            }
        }
        a = {
            value: {
                da: e,
                R: c,
                ba: "mraid",
                aa: b,
                fa: {
                    x: 0,
                    y: 0
                }
            },
            timestamp: a.j.now()
        };
        return Object.assign({}, a, d, {
            vj: f
        })
    }

    function Sr(a, b, c, d) {
        d = d === void 0 ? function() {
            return !0
        } : d;
        return (new I(function(e) {
            var f = a.F.Wb(745, function() {
                e.next(C.apply(0, arguments))
            });
            b.addEventListener(c, f);
            return function() {
                b.removeEventListener(c, f)
            }
        })).g(P(function(e) {
            return d.apply(null, x(e))
        }))
    };
    var Vr = function(a, b) {
        this.context = a;
        this.La = b
    };
    A(Vr, Ar);
    Vr.prototype.Sa = function(a, b) {
        var c = new dd(1),
            d = new dd(1),
            e = Dr(Mr(this.context, this.La, c, d, b.Na), Np(this.context, b.Na));
        return {
            Va: yr(a.Ka.g(e), b.Xa, 1),
            Pa: {
                ve: c.g(V(this.context.h, 1)),
                we: d.g(V(this.context.h, 1))
            }
        }
    };

    function Wr(a) {
        return ["backgrounded", "notFound", "hidden", "noOutputDevice"].includes(a)
    };

    function Xr(a, b) {
        var c = c === void 0 ? null : c;
        var d = new J,
            e = void 0,
            f = a.Cf,
            g = d.g(M(function() {
                return e ? Object.assign({}, e, {
                    timestamp: a.j.now()
                }) : null
            }), P(function(k) {
                return k !== null
            }), M(function(k) {
                return k
            }));
        b = O([Qd(f, g), b]);
        var h = c;
        return b.g(P(function(k) {
            k = u(k).next().value;
            h === null && (h = k.value.Pg);
            return k.value.Pg === h
        }), hf(function(k) {
            return void(e = u(k).next().value)
        }), M(function(k) {
            var l = u(k);
            k = l.next().value;
            l = l.next().value;
            try {
                var m = k.value.data,
                    t = k.timestamp,
                    q = m.viewport,
                    r, w, v = Object.assign({},
                        q, {
                            width: (r = q == null ? void 0 : q.width) != null ? r : 0,
                            height: (w = q == null ? void 0 : q.height) != null ? w : 0,
                            x: 0,
                            y: 0,
                            Uj: q ? q.width * q.height : 0
                        }),
                    z = Yr(v),
                    y = m.adView,
                    N = y.measuringElement && y.containerGeometry ? Yr(y.containerGeometry) : Yr(y.geometry),
                    Q = Yr(y.geometry),
                    fa = y.reasons.some(Wr),
                    F = fa ? Wh : Yr(y.onScreenGeometry),
                    B;
                l && (B = y.percentageInView / 100);
                l && fa && (B = 0);
                return {
                    timestamp: t,
                    value: {
                        ba: "omid",
                        da: N,
                        R: z,
                        aa: d,
                        T: "omid",
                        J: Q,
                        fa: {
                            x: N.left,
                            y: N.top
                        },
                        W: F,
                        ad: B
                    }
                }
            } catch (vb) {
                Ji(vb, Si());
                var X, Cc;
                m = (Cc = (X = vb) == null ? void 0 : X.message) !=
                    null ? Cc : "An unknown error occurred";
                X = "Error while processing geometryChange event: " + JSON.stringify(k.value) + "; " + m;
                throw Error(X);
            }
        }), cf(1), kd())
    }

    function Yr(a) {
        var b, c, d, e;
        return {
            left: Math.floor((b = a == null ? void 0 : a.x) != null ? b : 0),
            top: Math.floor((c = a == null ? void 0 : a.y) != null ? c : 0),
            width: Math.floor((d = a == null ? void 0 : a.width) != null ? d : 0),
            height: Math.floor((e = a == null ? void 0 : a.height) != null ? e : 0)
        }
    };

    function Zr(a, b, c, d) {
        c = c === void 0 ? Rd : c;
        var e = a.h;
        if (b === null) return bd(new de(20));
        if (!b.validate()) return bd(new de(21));
        var f;
        d = $r(e, b, d).g(M(function(g) {
            var h = g.value;
            g = g.timestamp;
            var k = b.j,
                l = a.j;
            if (k.timeline !== g.timeline) throw new ie;
            g = new re(g.value - k.now().value + l.now().value, l.timeline);
            return f = {
                value: h,
                timestamp: g
            }
        }));
        return Qd(d, c.g(M(function() {
            return f
        }))).g(P(function(g) {
            return g !== void 0
        }), M(function(g) {
            return g
        }), V(a.h, 1))
    }

    function $r(a, b, c) {
        return Xr(b, c).g(V(a, 1), M(function(d) {
            return {
                timestamp: d.timestamp,
                value: {
                    fa: {
                        x: d.value.J.left,
                        y: d.value.J.top
                    },
                    da: d.value.W,
                    R: d.value.R,
                    ba: d.value.T,
                    aa: d.value.aa
                }
            }
        }))
    };
    var as = function(a, b, c) {
        this.ka = a;
        this.N = b;
        this.La = c
    };
    A(as, Ar);
    as.prototype.Sa = function(a, b) {
        var c = b.Na;
        b = Zr(this.N, this.ka, this.La, b.cg);
        c = Dr(b, Np(this.N, c));
        return {
            Va: a.Ka.g(c),
            Pa: {}
        }
    };
    var bs = function(a, b, c) {
        this.ka = a;
        this.N = b;
        this.mh = c
    };
    A(bs, Ar);
    bs.prototype.Sa = function(a, b) {
        var c = Zr(this.N, this.ka, void 0, b.cg);
        b = Vp(this.N, b.Bg, this.mh);
        c = Dr(c, b);
        return {
            Va: a.Ka.g(c),
            Pa: {}
        }
    };
    var cs = function(a) {
            return a.prerendering ? 3 : {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
        },
        ds = function(a) {
            var b;
            a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
            return b
        };

    function es(a) {
        return a.document.fi.g(M(function(b) {
            return b === "visible"
        }), R(), V(a.h, 1))
    };
    var fs;
    fs = ["2024103001"].slice(-1)[0].substring(0, 8);

    function gs(a, b, c) {
        var d;
        return b.g(R(), T(function(e) {
            return c.g(M(function() {
                if (!d) {
                    d = !0;
                    try {
                        e.next()
                    } finally {
                        d = !1
                    }
                }
                return !0
            }))
        }), S(!1), V(a.h, 1))
    };

    function hs(a) {
        return H($p(M(function(b) {
            return rq(b, a)
        })), sp(), M(function(b) {
            return Math.round(b)
        }))
    };

    function is(a, b, c, d, e) {
        var f = Rq;
        if (f.length > 1)
            for (var g = 0; g < f.length - 1; g++)
                if (f[g] < f[g + 1]) throw Error();
        g = e.g(S(void 0), T(function() {
            return c.g(Gp())
        }), R(), V(a, 1));
        e = e.g(S(void 0), T(function() {
            return c.g(or())
        }), R(), V(a, 1));
        return {
            xd: d.g(S(void 0), T(function() {
                return b.g(M(function(h) {
                    return {
                        timestamp: h.timestamp,
                        value: !0
                    }
                }), sp())
            }), R(), V(a, 1)),
            yd: d.g(S(void 0), T(function() {
                return b.g(M(function(h) {
                    return {
                        timestamp: h.timestamp,
                        value: h.value === 0
                    }
                }), sp())
            }), R(), V(a, 1)),
            vc: d.g(S(void 0), T(function() {
                return b.g(Fp(pr,
                    f))
            }), R(Pb), V(a, 1)),
            Ic: d.g(S(void 0), T(function() {
                return b.g(Fp(hs, f), M(function(h) {
                    return h.map(function(k, l) {
                        return l > 0 ? k - h[l - 1] : k
                    })
                }))
            }), R(Pb), V(a, 1)),
            uc: e,
            gb: g.g(R(fq), V(a, 1))
        }
    };

    function js(a, b, c) {
        var d = c.g(M(function(e) {
            return {
                value: e,
                timestamp: a.j.now()
            }
        }), R(fq));
        return b instanceof I ? b.g(R(), T(function(e) {
            return e ? (new W({
                value: !1,
                timestamp: a.j.now()
            })).S(a.h) : d
        })) : b.value === !1 ? d : new W(!1)
    }

    function ks(a, b, c, d, e, f, g) {
        var h = Kq;
        b = b instanceof I ? b.g(S(!1), R()) : b;
        var k = !(Ug() || Vg());
        c = js(a, c, d);
        a = g.Ka.g(pp(a.h));
        return Object.assign({}, h, {
            cd: c,
            Dg: e,
            df: k,
            ag: b,
            fd: a,
            Ag: f
        })
    };

    function ls(a) {
        a = a.global;
        if (typeof a.__google_lidar_ === "undefined") return a.__google_lidar_ = 1, !1;
        a.__google_lidar_ = Number(a.__google_lidar_) + 1;
        var b = a.__google_lidar_adblocks_count_;
        if (typeof b === "number" && b > 0 && (a = a.__google_lidar_radf_, typeof a === "function")) try {
            a()
        } catch (c) {}
        return !0
    }

    function ms(a) {
        var b = a.global;
        b.osdlfm = function() {
            return b.__google_lidar_radf_
        };
        if (b.__google_lidar_radf_ !== void 0) return Gc;
        b.__google_lidar_adblocks_count_ = 1;
        var c = new J;
        b.__google_lidar_radf_ = function() {
            return void c.next(a)
        };
        return c.g(qg(a.F, 743))
    };
    var ns = function(a) {
            var b = this;
            this.re = !1;
            this.ze = [];
            this.ye = [];
            a(function(c) {
                b.re = !0;
                b.ti = c;
                b.evaluate()
            }, function(c) {
                b.li = c;
                b.evaluate()
            })
        },
        os = function(a) {
            return new ns(function(b, c) {
                var d = [],
                    e = 0;
                a.forEach(function(f, g) {
                    f.then(function(h) {
                        d[g] = h;
                        ++e === a.length && b(d)
                    }).catch(function(h) {
                        c(h)
                    })
                })
            })
        };
    ns.prototype.evaluate = function() {
        var a = this.ti,
            b = this.li;
        if (b !== void 0 || this.re) this.re && this.ze.forEach(function(c) {
            return void c(a)
        }), b !== void 0 && this.ye.forEach(function(c) {
            return void c(b)
        }), this.ze = [], this.ye = []
    };
    ns.prototype.then = function(a) {
        this.ze.push(a);
        this.evaluate();
        return this
    };
    ns.prototype.catch = function(a) {
        this.ye.push(a);
        this.evaluate();
        return this
    };
    var ps = function(a) {
        this.children = a;
        this.ne = !1;
        this.Pd = []
    };
    ps.prototype.complete = function() {
        var a = this;
        this.ne = !0;
        this.Pd.forEach(function(b) {
            return void b(a)
        });
        this.Pd.splice(0)
    };
    ps.prototype.onComplete = function(a) {
        this.ne ? a(this) : this.Pd.push(a)
    };
    ps.prototype.fb = function(a) {
        var b = this.children.map(function(c) {
            return c.fb(a)
        });
        return b.find(function(c) {
            return c !== 2
        }) === void 0 ? 2 : this.Ba ? 0 : b.some(function(c) {
            return c === 1
        }) ? 1 : 0
    };
    da.Object.defineProperties(ps.prototype, {
        Ba: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.ne
            }
        }
    });
    var qs = function() {
        var a = C.apply(0, arguments);
        ps.call(this, a);
        var b = this;
        this.events = a;
        var c = this.events.length;
        this.events.forEach(function(d) {
            d.onComplete(function() {
                --c === 0 && b.complete()
            })
        })
    };
    A(qs, ps);
    qs.prototype.clone = function() {
        return new(Function.prototype.bind.apply(qs, [null].concat(x(this.events.map(function(a) {
            return a.clone()
        })))))
    };
    qs.prototype.Le = function(a, b) {
        var c = this;
        if (!this.Ba) {
            var d = this.events.find(function(e) {
                return e.fb(a) === 1
            });
            d !== void 0 && d.Le(a, function() {
                c.Ba || b()
            })
        }
    };
    var rs = function(a, b) {
        ps.call(this, []);
        this.Xd = a;
        this.gd = Symbol(b);
        this.gi = a
    };
    A(rs, ps);
    rs.prototype.clone = function() {
        var a = new rs(this.gi, this.gd.description);
        a.gd = this.gd;
        return a
    };
    rs.prototype.fb = function(a) {
        return a !== this.event ? 2 : this.Ba || this.Xd === 0 ? 0 : 1
    };
    rs.prototype.Le = function(a, b) {
        this.fb(a) === 1 && (this.Xd--, b(), this.Xd === 0 && this.complete())
    };
    da.Object.defineProperties(rs.prototype, {
        event: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.gd
            }
        }
    });
    var ss = function(a) {
        rs.call(this, 1, a)
    };
    A(ss, rs);
    var ts = function(a, b, c) {
        var d = C.apply(3, arguments);
        this.Ta = a;
        this.jh = b;
        this.Ud = c;
        this.tc = new Set;
        this.Lb = d;
        if (this.Ta.N) this.context = this.Ta.N;
        else if (this.Ta.ka) this.context = this.Ta.ka;
        else throw Error("Fa");
        var e = d.reduce(function(h, k) {
            k.subscribedEvents.forEach(function(l) {
                return void h.add(l)
            });
            return h
        }, new Set);
        e = u(e.values());
        for (var f = e.next(), g = {}; !f.done; g = {
                uf: void 0
            }, f = e.next()) {
            g.uf = f.value;
            f = d.filter(function(h) {
                return function(k) {
                    return k.controlledEvents.indexOf(h.uf) >= 0
                }
            }(g));
            if (f.length ===
                0) throw Error("Ga");
            if (f.length > 1) throw Error("Ha");
        }
    };
    ts.prototype.start = function() {
        var a = this;
        this.Lb.forEach(function(b) {
            return void b.start(a.Ta)
        });
        this.Ud.start(this.Ta, this.qh.bind(this), this.Db.bind(this), function() {})
    };
    ts.prototype.dispose = function() {
        var a = this;
        this.Ud.dispose();
        this.tc.forEach(function(b) {
            return void a.Db(b)
        });
        this.Lb.forEach(function(b) {
            return void b.dispose()
        })
    };
    var us = function(a, b) {
            b = {
                measuringCreativeIds: [].concat(x(a.tc.values())).map(function(c) {
                    return a.context.ic.Ga(c)
                }),
                hasCreativeSourceCompleted: !!a.Ud.td,
                colleagues: a.Lb.map(function(c) {
                    return {
                        name: c.name,
                        controlledEvents: c.controlledEvents.map(function(d) {
                            var e;
                            return (e = d.description) != null ? e : "n/a"
                        }),
                        subscribedEvents: c.subscribedEvents.map(function(d) {
                            var e;
                            return (e = d.description) != null ? e : "n/a"
                        })
                    }
                }),
                ephemeralCreativeStateChanges: b
            };
            b = {
                specMajor: 2,
                specMinor: 0,
                specPatch: 0,
                instanceId: a.context.ic.Ga(a.context.vb),
                timestamp: te(a.context.j.now(), new re(0, a.context.j.timeline)),
                mediatorState: b
            };
            ae(a.context, b)
        },
        vs = function(a, b, c, d, e) {
            var f = {};
            us(a, (f[b] = {
                events: [{
                    timestamp: c,
                    description: d,
                    status: e
                }]
            }, f))
        };
    ts.prototype.qh = function(a, b, c) {
        var d = this;
        if (!this.tc.has(a)) {
            var e = this.jh.clone();
            this.tc.add(a);
            us(this, {});
            var f = !1,
                g = [];
            this.Lb.forEach(function(h) {
                var k = function(l, m, t) {
                    var q = d.context.ic.Ga(a),
                        r = te(d.context.j.now(), new re(0, d.context.j.timeline)),
                        w, v = (w = l.description) != null ? w : "n/a";
                    if (h.controlledEvents.indexOf(l) < 0 || e.fb(l) !== 1) return t(!1), vs(d, q, r, v, 1), new ns(function(y) {
                        return void y()
                    });
                    var z = new ns(function(y) {
                        e.Le(l, function() {
                            d.Lb.filter(function(N) {
                                return N.subscribedEvents.indexOf(l) >=
                                    0
                            }).forEach(function(N) {
                                return void N.handleEvent(a, l, m)
                            });
                            y()
                        })
                    });
                    return new ns(function(y) {
                        z.then(function() {
                            t(!0);
                            vs(d, q, r, v, 2);
                            y()
                        })
                    })
                };
                h.fe(a, b, c, function(l, m, t) {
                    return f ? k(l, m, t) : new ns(function(q) {
                        g.push(function() {
                            k(l, m, t).then(function() {
                                q()
                            })
                        })
                    })
                })
            });
            f = !0;
            g.forEach(function(h) {
                return void h()
            })
        }
    };
    ts.prototype.Db = function(a) {
        this.tc.delete(a);
        this.Lb.forEach(function(b) {
            b.Db(a)
        });
        us(this, {})
    };
    var ws = function(a, b) {
            this.key = a;
            this.defaultValue = b === void 0 ? !1 : b;
            this.valueType = "boolean"
        },
        xs = function(a) {
            this.key = a;
            this.defaultValue = 0;
            this.valueType = "number"
        };
    var ys = {
        considerOmidZOrderOcclusions: [new ws("100006"), !1],
        extraPings: [new xs("45362137"), 0],
        extrapolators: [new ws("45377435"), !1],
        rxlidarStatefulBeacons: [new ws("45372163"), !1],
        shouldIgnoreAdChoicesIcon: [new ws("45382077"), !1],
        dedicatedViewableAttributionPing: [new xs("45389692"), 0],
        useReachIntegrationPolyfill: [new ws("45407239"), !1],
        useReachIntegrationSharedStorage: [new ws("45407240", !0), !0],
        sendBrowserIdInsteadOfVPID: [new ws("45407241"), !1],
        waitForImpressionColleague: [new ws("45430682"), !1],
        fetchLaterBeacons: [new ws("45618478"), !1],
        rxInNonrx: [new ws("45642405"), !1],
        addQueryIdToErrorPing: [new ws("45653435"), !1],
        shouldSendExplicitDisplayMeasurablePing: [new ws("45658589"), !1],
        reachUseCreateWorklet: [new ws("45661569"), !1]
    };

    function zs(a) {
        return Object.entries(ys).reduce(function(b, c) {
            var d = u(c);
            c = d.next().value;
            var e = u(d.next().value);
            d = e.next().value;
            e = e.next().value;
            var f;
            if (a == null) var g = void 0;
            else a: {
                var h = a.yf[d.key];
                if (d.valueType === "proto") {
                    try {
                        var k = JSON.parse(h);
                        if (Array.isArray(k)) {
                            g = k;
                            break a
                        }
                    } catch (l) {}
                    g = d.defaultValue
                } else g = typeof h === typeof d.defaultValue ? h : d.defaultValue
            }
            b[c] = (f = g) != null ? f : e;
            return b
        }, {})
    };
    var Yl = function(a) {
        Z.call(this, a)
    };
    A(Yl, Z);
    Yl.prototype.ae = function() {
        return gm(this, 4, !0)
    };
    Yl.V = "ads.branding.measurement.client.serving.integrations.active_view.ActiveViewMetadata";
    var As = [0, Jn, -2, In, -1];
    Yl.prototype.M = Tn(As);
    var Bs = function(a) {
        Z.call(this, a)
    };
    A(Bs, Z);
    Bs.prototype.getType = function() {
        var a = 0;
        a = a === void 0 ? 0 : a;
        var b = Dk(Hl(this, 6));
        return fm(b, a)
    };
    var Cs = Un(Bs);
    Bs.V = "ads.geo.GeoTargetMessage";
    var Ds = function(a) {
        Z.call(this, a)
    };
    A(Ds, Z);
    n = Ds.prototype;
    n.Ef = function() {
        return im(this, 2)
    };
    n.Ff = function() {
        return km(this, 2)
    };
    n.ae = function() {
        return gm(this, 3, !0)
    };
    n.Gf = function() {
        return $l(this, Bs, 4)
    };
    n.ng = function(a) {
        return cm(this, Bs, 4, a)
    };
    n.Hf = function() {
        return em(this, 7, void 0 === rk ? 2 : 4)
    };
    n.bf = function(a) {
        return dm(this, 7, a)
    };
    n.og = function(a) {
        return lm(this, 9, a)
    };
    Ds.V = "ads.branding.measurement.client.serving.integrations.reach.ReachMetadata";
    var Es = [0, Mn, -4, On, In, Fn, Bn, Mn, Bn, Mn, Fn, Mn, -1, [0, Fn, -3], Nn, En, Mn, Dn, -1, Fn, -1, Dn, Bn, [0, Dn, Fn, -1, On, Bn, Dn], An, Mn];
    Bs.prototype.M = Tn(Es);
    var Fs = [0, Jn, -1, In, Es, Gn, -1, Pn, Fn, In];
    Ds.prototype.M = Tn(Fs);
    var Gs = function(a) {
        Z.call(this, a)
    };
    A(Gs, Z);
    Gs.prototype.Ef = function() {
        return im(this, 1)
    };
    Gs.prototype.Ff = function() {
        return km(this, 1)
    };
    Gs.V = "ads.branding.measurement.client.serving.integrations.shared.SharedMetadata";
    var Hs = [0, Jn];
    Gs.prototype.M = Tn(Hs);
    var Is = function(a) {
        Z.call(this, a)
    };
    A(Is, Z);
    var Js = function(a) {
        return $l(a, Ds, 1)
    };
    Is.V = "ads.branding.measurement.client.serving.IntegratorMetadata";
    var Ks = [0, Fs, As, Hs];
    Is.prototype.M = Tn(Ks);
    var Ls = Sn(Is, Ks);
    var Ms = function() {
        this.yf = {}
    };
    var Ns = function() {
        this.pf = !1;
        this.lf = new Map
    };
    Ns.prototype.start = function(a, b, c, d) {
        var e = this;
        if (this.td === void 0 && a.N) {
            var f = a.N;
            this.kf = d;
            c = !this.pf && ls(f);
            d = this.pf ? Gc : ms(f);
            d = Io(f, d);
            this.td = (c ? Gc : d.g(M(function(g) {
                var h = h === void 0 ? Symbol() : h;
                return Object.freeze({
                    vb: h,
                    element: (new W(g)).S(f.h)
                })
            }), Ao())).subscribe(function(g) {
                var h = g.vb;
                e.lf.set(h, g);
                g.element.g(Se(1)).subscribe(function(k) {
                    var l = xo(k, "data-google-av-flags"),
                        m = new Ms;
                    if (l !== null) try {
                        var t = JSON.parse(l)[0];
                        l = "";
                        for (var q = 0; q < t.length; q++) l += String.fromCharCode(t.charCodeAt(q) ^
                            "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(q % 10));
                        m.yf = JSON.parse(l)
                    } catch (w) {}
                    m = zs(m);
                    k = xo(k, "data-google-av-ufs-integrator-metadata");
                    a: {
                        if (k !== null) try {
                            var r = Ls(k);
                            break a
                        } catch (w) {}
                        r = new Is
                    }
                    b(h, r, m)
                })
            });
            c && this.dispose();
            a.ka && Jf(a.ka)
        }
    };
    Ns.prototype.dispose = function() {
        var a, b;
        (a = this.td) == null || (b = a.unsubscribe) == null || b.call(a);
        this.td = void 0;
        var c;
        (c = this.kf) == null || c.call(this);
        this.kf = void 0
    };
    var Os = function(a) {
        Z.call(this, a)
    };
    A(Os, Z);
    var Ps = function(a, b) {
        return nm(a, 1, b)
    };
    Os.V = "contentads.bow.rendering.client.TurtleDoveReportingData";
    Os.prototype.M = Tn([0, Jn, Fn, Jn, -5, On, Jn, -4]);

    function Qs() {
        var a = Hg();
        return a ? Mb("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"), function(b) {
            return Ya(a, b)
        }) || Ya(a, "OMI/") && !Ya(a, "XiaoMi/") ? !0 : Ya(a, "Presto") && Ya(a, "Linux") && !Ya(a, "X11") && !Ya(a, "Android") && !Ya(a, "Mobi") : !1
    };
    var Kq = Object.freeze({
            wg: 1E3,
            Yd: .5,
            te: .3
        }),
        Rq = Object.freeze([1, .75, Kq.Yd, Kq.te, 0]),
        Rs = function(a, b, c, d, e, f, g) {
            this.ji = a;
            this.Kb = b;
            this.Fb = c;
            this.bc = d;
            this.Pc = e;
            this.Qc = f;
            this.Kd = g;
            this.name = "rxlidar";
            this.Rh = new dd;
            this.controlledEvents = [];
            this.subscribedEvents = [];
            this.Vd = new dd;
            this.Ha = new dd;
            this.controlledEvents.push(this.bc, this.Pc, this.Qc);
            this.subscribedEvents.push(this.Fb)
        };
    n = Rs.prototype;
    n.start = function(a) {
        if (this.ee === void 0 && a.N) {
            var b;
            if ((b = this.Kb) != null) var c = b;
            else {
                b = a.N;
                var d = (c = a.ka) != null ? c : null;
                c = {
                    ih: .01,
                    Uh: nf(b.j, 36E5),
                    La: b.j.Ia(100).g(V(b.h, 1)),
                    ka: d
                }
            }
            this.Kb = c;
            a = a.N;
            this.ee = Ss(a, this.Vd.g(V(a.h, 1)), this.Kb.ih, this.Kb.Uh, this.Kb.La, this.Kb.ka, this.Ha.g(S(!1), V(a.h, 1)), this.bc, this.Pc, this.Qc, this.Kd).subscribe(this.Rh)
        }
    };
    n.dispose = function() {
        this.Vd.complete();
        this.Ha.complete();
        var a;
        (a = this.ee) == null || a.unsubscribe();
        this.ee = void 0
    };
    n.fe = function(a, b, c, d) {
        Ml(b, Yl, 2) && !$l(b, Yl, 2).ae() || this.Vd.next(Object.assign({}, this.ji.lf.get(a), {
            metadata: b,
            experimentState: c,
            ak: a,
            Ua: d
        }))
    };
    n.Db = function() {};
    n.handleEvent = function(a, b) {
        b === this.Fb && (this.Ha.next(!0), this.Ha.complete())
    };

    function Ss(a, b, c, d, e, f, g, h, k, l, m) {
        var t = es(a).g(M(function(r) {
                return !r
            })),
            q = new Br(a, [new Lr(a, Rq), new Kr(a, e), new Hr(a, e), new bs(f, a, Rq), new as(f, a, e), new Vr(a, e)]);
        return Lo(a, b, function(r, w) {
            var v = nr(r, w.element),
                z = v.Jd,
                y = v.cc,
                N = v.Sd,
                Q = v.Pe,
                fa = v.bh,
                F = v.Xa,
                B = v.Jh,
                X = v.ke,
                Cc = v.pe,
                vb = v.Na,
                ld = v.ma,
                Sa = v.Pi,
                fn = v.ob;
            v = v.se;
            var hg, eb = (hg = km(Zl(w.metadata), 3)) != null ? hg : "";
            hg = Ps(new Os, atob(eb)).Za();
            eb = (new W(w.experimentState)).S(r.h);
            var gn = new W(new pf(r, new Dg(r))),
                hn = eb.g(M(function(D) {
                        return D.fetchLaterBeacons
                    }),
                    S(!1), R(), V(r.h, 1)),
                Gt = hn.g(M(function(D) {
                    return D && (new zg(r)).K({
                        rf: !0
                    })
                }), hf(function(D) {
                    D && gn.value.I("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=fetch&later&start&control&fle=1&sfl=1").sendNow()
                })),
                ye = eb.g(M(function(D) {
                    return D.shouldIgnoreAdChoicesIcon
                })),
                Ea = F.g(Oe(B), M(function(D) {
                    var fb = u(D);
                    D = fb.next().value;
                    fb = fb.next().value;
                    (D = D || fb) || ((D = Ya(Hg(), "CrKey") && !(Ya(Hg(), "CrKey") && Ya(Hg(), "SmartSpeaker")) || Ya(Hg(), "PlayStation") || Ya(Hg(), "Roku") || Qs() || Ya(Hg(), "Xbox")) ||
                        (D = Hg(), D = Ya(D, "AppleTV") || Ya(D, "Apple TV") || Ya(D, "CFNetwork") || Ya(D, "tvOS")), D || (D = Hg(), D = Ya(D, "sdk_google_atv_x86") || Ya(D, "Android TV")));
                    return D
                }));
            B = new wr(r, w, fa, F, vb, ye);
            ye = eb.g(M(function(D) {
                return D.considerOmidZOrderOcclusions
            }));
            var Dc, wb = (Dc = jm(Zl(w.metadata))) != null ? Dc : !1;
            Dc = q.Sa(B, {
                Xa: F,
                Bg: wb,
                Na: vb,
                cg: ye
            });
            var Ta = Dc.Va,
                ze = Dc.Pa;
            Dc = ze.ve;
            ye = ze.we;
            ze = ze.Ie;
            wb = (new W(wb)).S(r.h);
            var dc = ks(r, Cc, Ea, t, Sa, wb, B);
            Sa = Xq(r.h, r.j, Ta, dc);
            Ea = is(r.h, Sa.wa.Ke, Sa.wa.visible, Sa.He, Sa.Gc);
            wb = lr(r.h, r.j,
                Sa.Gc, Sa.wa.aa, Sa.wa.visible);
            Ta = Aq(r.h, r.j, Ta, dc);
            dc = Qq(r.j, r.h, Ta.wa.Ke, Ta.wa.visible, Ta.He, Ta.Gc);
            var Ei = {
                    Oe: Jq(r.h, r.j, Ta.Gc, dc.uc)
                },
                Fi = eb.g(M(function(D) {
                    return D.extrapolators
                }), S(!1));
            Ta = op(r.h, Fi, Object.assign({}, Ta.wa, dc, Ei), Object.assign({}, Sa.wa, {
                Oe: qq(r, wb),
                vc: qq(r, Ea.vc),
                Ic: qq(r, Ea.Ic),
                uc: qq(r, Ea.uc),
                gb: Ea.gb.g(M(function(D) {
                    return new pq(r.j, D)
                })),
                xd: qq(r, Ea.xd),
                yd: qq(r, Ea.yd)
            }));
            Ea = Zp(r, d.g(Re("t")));
            wb = (f !== null && f.validate() ? f.yi : Rd).g(V(r.h, 1), Re("u"));
            Ea = Vd(Ea, wb);
            wb = gs(r, Ta.aa,
                Ea.g(P(function(D) {
                    return D !== null
                })));
            dc = Ts(r, B, z);
            Ei = Us(r, Ea, w.element);
            Fi = dc.Qg.g(S({
                x: 0,
                y: 0
            }));
            var Jt = eb.g(M(function(D) {
                    return D.rxlidarStatefulBeacons
                }), S(!1), R(), hf(function(D) {
                    hh = D
                }), V(r.h, 1)),
                jn = X.g(M(function(D) {
                    return D === 40 || D === 41 || D === 42
                })),
                Kt = eb.g(M(function(D) {
                    return D.waitForImpressionColleague
                }), S(!1), R(), V(r.h, 1)),
                Lt = b.g(M(function(D) {
                    var fb;
                    return D.experimentState.addQueryIdToErrorPing ? (fb = $l(D.metadata, Gs, 3)) == null ? void 0 : fb.Ff() : void 0
                }));
            return Object.assign({}, {
                G: new W(r.G),
                Ib: new W("lidar2"),
                Gi: new W("lidartos"),
                Tg: new W(fs),
                Kd: new W(m),
                Qd: new W(r.validate() ? null : new ee),
                Yg: new W(Rh(r.document)),
                X: new W(Wo),
                sf: Ea,
                vg: Ea,
                Wj: wb,
                ed: g,
                Oi: Kt,
                Ua: new W(w.Ua),
                bc: new W(h),
                Pc: new W(k),
                Qc: new W(l),
                ah: new W(r.Hb ? 1 : void 0),
                dh: new W(r.Ug ? 1 : void 0),
                Xa: F,
                ob: fn,
                Me: new W(hg),
                Rb: fn.g(P(function(D) {
                    return D
                }), M(function() {
                    return r.Rb.bind(r)
                })),
                ve: Dc.g(V(r.h, 1)),
                we: ye.g(V(r.h, 1)),
                nh: eb.g(M(function(D) {
                    return D.extraPings
                })),
                Qf: Jt,
                wh: hn,
                tg: Gt,
                se: v,
                Hh: jn,
                xh: eb.g(M(function(D) {
                    return D.dedicatedViewableAttributionPing
                })),
                oh: gn,
                ug: new W(hh && (new gh(r)).K({
                    na: "GET"
                })),
                Bi: new W(Number(w.experimentState.useReachIntegrationSharedStorage) << 0 + Number(w.experimentState.useReachIntegrationPolyfill) << 1 + Number(w.experimentState.sendBrowserIdInsteadOfVPID) << 2),
                Zg: w.element.g(M(function(D) {
                    return D !== null
                })),
                mb: ld,
                Hi: ld,
                Sd: N.g(S([])),
                Pe: Q.g(S([])),
                uh: N.g(M(function(D) {
                    return D.length > 0 ? !0 : null
                }), S(null), R()),
                cc: y.g(S([]), V(r.h, 1)),
                Cj: eb,
                shouldSendExplicitDisplayMeasurablePing: eb.g(M(function(D) {
                    return D.shouldSendExplicitDisplayMeasurablePing
                })),
                Jd: z,
                fc: B.fc,
                ke: X.g(S(0), V(r.h, 1)),
                Sh: fa,
                Na: vb.g(S(0), V(r.h, 1)),
                xb: jn.g(M(function(D) {
                    return D ? mp : Vo
                })),
                Xb: new W(np),
                pe: Cc,
                Sf: B.rc.g(pp(r.h)),
                Qe: B.Qe
            }, Ta, {
                Xc: O([Ta.Xc, Fi]).g(M(function(D) {
                    var fb = u(D);
                    D = fb.next().value;
                    fb = fb.next().value;
                    return Zh(D, fb)
                }), R(Xh))
            }, dc, {
                Jc: vh(r),
                vh: Ei,
                Ie: ze,
                Ad: Sa.wa.Ad,
                Vg: new W(new gp),
                escapedQueryId: Lt
            })
        }, Uo(a, "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=error&bin=" + m + "&v=" + fs, c))
    }

    function Ts(a, b, c) {
        var d = d === void 0 ? Ka : d;
        var e, f;
        d = ((e = d.performance) == null ? void 0 : (f = e.timing) == null ? void 0 : f.navigationStart) || 0;
        return Object.assign({}, {
            Og: new W(d),
            Ng: Dp(a, b)
        }, Cp(a, b, c))
    }

    function Us(a, b, c) {
        return b.g(P(function(d) {
            return d !== null
        }), T(function() {
            return c
        }), M(function(d) {
            var e = Bo(a);
            return e.length > 0 && e.indexOf(d) >= 0
        }), M(function(d) {
            return !d
        }))
    };
    var Vs = function(a) {
        var b = b === void 0 ? [] : b;
        var c = c === void 0 ? [a] : c;
        this.Fb = a;
        this.subscribedEvents = b;
        this.controlledEvents = c;
        this.name = "impression";
        this.he = new Map
    };
    n = Vs.prototype;
    n.start = function(a) {
        this.Ta = a
    };
    n.dispose = function() {
        this.he.clear()
    };
    n.fe = function(a, b, c, d) {
        if (b = this.Ta) c = new Ws(b, c, this.Fb, d), this.he.set(a, c)
    };
    n.Db = function(a) {
        this.he.delete(a)
    };
    n.handleEvent = function() {};
    var Ws = function(a, b, c, d) {
        var e = this;
        this.context = a;
        this.Fb = c;
        this.zg = function() {};
        this.Pf = [];
        this.Nf = "&avradf=1";
        this.Of = os([]);
        this.Ha = new dd;
        c = a.ka;
        var f = c !== null && (c == null ? void 0 : c.validate()),
            g, h = (g = a.N) == null ? void 0 : g.h;
        this.Ha.g(S(!b.waitForImpressionColleague), V(h, 1));
        this.Di = f ? c == null ? void 0 : c.Mf.g(Se(1), Re(!0), S(!1)) : (new W(!0)).S(h);
        this.zg = function(k, l) {
            e.Ha.next(!0);
            e.Ha.complete();
            O([e.Ha, e.Di]).subscribe(function(m) {
                var t = u(m);
                m = t.next().value;
                t = t.next().value;
                if (!t) return Rd;
                m && t &&
                    d(e.Fb, k, l);
                return !0
            })
        };
        this.nc(a.N)
    };
    Ws.prototype.nc = function(a) {
        var b = this;
        this.yc = a.global.document;
        this.Pf.push(Xs(this));
        var c = {};
        this.Of = os(this.Pf);
        this.Of.then(function() {
            b.Nf = "&vis=" + cs(b.yc) + "&uach=0&ms=0";
            c.paramString = b.Nf;
            c.view_type = "DELAYED_IMPRESSION";
            b.zg(c, function() {})
        })
    };
    var Xs = function(a) {
        return new ns(function(b) {
            var c = ds(a.yc);
            if (c)
                if (cs(a.yc) === 3) {
                    var d = function() {
                        var e = a.yc;
                        e.removeEventListener && e.removeEventListener(c, d, !1);
                        b(!0)
                    };
                    Eg(a.yc, c, d)
                } else b(!0)
        })
    };

    function Ys(a) {
        var b = wh(a);
        return b ? b.g(M(function(c) {
            var d;
            c = (d = bm(c).find(function(f) {
                return km(f, 1) === "Google Chrome"
            })) == null ? void 0 : km(d, 2);
            if (!c) return !1;
            var e;
            return ((e = u(c.split(".").map(function(f) {
                return Number(f)
            })).next().value) != null ? e : 0) >= 121
        })) : mh.S(a.h)
    };

    function Zs(a, b) {
        b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=reach&proto=" + encodeURIComponent(sh(b.M()));
        a.G.I(b, {
            na: "GET"
        }).sendNow()
    };

    function $s(a) {
        return [{
            Bb: 2,
            Ec: !1,
            hc: !0,
            filterIds: at(a == null ? void 0 : a.productionFilterIds)
        }, {
            Bb: 2,
            Ec: !0,
            hc: !0,
            filterIds: at(a == null ? void 0 : a.testFilterIds)
        }, {
            Bb: 2,
            Ec: !1,
            hc: !1,
            filterIds: at(a == null ? void 0 : a.testFilterIds)
        }]
    }

    function at(a) {
        if (a !== void 0 && typeof BigInt === "function") return a.map(function(b) {
            return BigInt(b)
        })
    };
    var bt = function(a) {
        Z.call(this, a)
    };
    A(bt, Z);
    var ct = function(a, b) {
            return om(a, 1, b)
        },
        dt = function(a, b) {
            return nm(a, 2, b)
        },
        et = function(a, b) {
            return nm(a, 3, b)
        };
    bt.prototype.Fc = function(a) {
        return nm(this, 10, a)
    };
    bt.prototype.Gf = function() {
        return $l(this, Bs, 11)
    };
    bt.prototype.ng = function(a) {
        return cm(this, Bs, 11, a)
    };
    bt.V = "ads.branding.measurement.client.frontend.integrations.reach.ReachStatusMessage";
    bt.prototype.M = Tn([0, On, Jn, -1, On, -2, Jn, -1, Fn, Jn, Es, Pn, Fn]);
    var ft = function(a) {
            this.context = a;
            this.points = []
        },
        gt = function(a, b) {
            Fa(function(c) {
                if (c.s == 1) return c.va = 0, c.Fa = 2, sa(c, b(), 4);
                if (c.s != 2) return c.return(c.ca);
                va(c);
                a.flush();
                return wa(c, 0)
            })
        };
    ft.prototype.flush = function() {
        if (!(this.points.length <= 0)) {
            var a = new bt;
            ct(a, 9);
            var b = $s().length;
            Kl(a, 13, b == null ? b : Fk(b));
            dm(a, 12, this.points);
            this.points.splice(0);
            Zs(this.context, a)
        }
    };
    var ht = function() {
        this.blockSize = -1
    };
    var lt = function(a, b) {
            this.blockSize = -1;
            this.blockSize = 64;
            this.Uc = Ka.Uint8Array ? new Uint8Array(this.blockSize) : Array(this.blockSize);
            this.zd = this.Gb = 0;
            this.u = [];
            this.ai = a;
            this.Rf = b;
            this.Ni = Ka.Int32Array ? new Int32Array(64) : Array(64);
            jt === void 0 && (jt = Ka.Int32Array ? new Int32Array(kt) : kt);
            this.reset()
        },
        jt;
    Qa(lt, ht);
    for (var mt = [], nt = 0; nt < 63; nt++) mt[nt] = 0;
    var ot = [].concat(128, mt);
    lt.prototype.reset = function() {
        this.zd = this.Gb = 0;
        this.u = Ka.Int32Array ? new Int32Array(this.Rf) : Ob(this.Rf)
    };
    var pt = function(a) {
        var b = a.Uc;
        E(b.length == a.blockSize);
        for (var c = a.Ni, d = 0, e = 0; e < b.length;) c[d++] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3], e = d * 4;
        for (b = 16; b < 64; b++) d = c[b - 15] | 0, e = c[b - 2] | 0, c[b] = ((c[b - 16] | 0) + ((d >>> 7 | d << 25) ^ (d >>> 18 | d << 14) ^ d >>> 3) | 0) + ((c[b - 7] | 0) + ((e >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10) | 0) | 0;
        b = a.u[0] | 0;
        d = a.u[1] | 0;
        e = a.u[2] | 0;
        for (var f = a.u[3] | 0, g = a.u[4] | 0, h = a.u[5] | 0, k = a.u[6] | 0, l = a.u[7] | 0, m = 0; m < 64; m++) {
            var t = ((b >>> 2 | b << 30) ^ (b >>> 13 | b << 19) ^ (b >>> 22 | b << 10)) + (b & d ^ b & e ^ d & e) | 0,
                q = (l + ((g >>> 6 | g << 26) ^ (g >>> 11 |
                    g << 21) ^ (g >>> 25 | g << 7)) | 0) + (((g & h ^ ~g & k) + (jt[m] | 0) | 0) + (c[m] | 0) | 0) | 0;
            l = k;
            k = h;
            h = g;
            g = f + q | 0;
            f = e;
            e = d;
            d = b;
            b = q + t | 0
        }
        a.u[0] = a.u[0] + b | 0;
        a.u[1] = a.u[1] + d | 0;
        a.u[2] = a.u[2] + e | 0;
        a.u[3] = a.u[3] + f | 0;
        a.u[4] = a.u[4] + g | 0;
        a.u[5] = a.u[5] + h | 0;
        a.u[6] = a.u[6] + k | 0;
        a.u[7] = a.u[7] + l | 0
    };
    lt.prototype.update = function(a, b) {
        b === void 0 && (b = a.length);
        var c = 0,
            d = this.Gb;
        if (typeof a === "string")
            for (; c < b;) this.Uc[d++] = a.charCodeAt(c++), d == this.blockSize && (pt(this), d = 0);
        else if (Na(a))
            for (; c < b;) {
                var e = a[c++];
                if (!("number" == typeof e && 0 <= e && 255 >= e && e == (e | 0))) throw Error("Ia");
                this.Uc[d++] = e;
                d == this.blockSize && (pt(this), d = 0)
            } else throw Error("Ja");
        this.Gb = d;
        this.zd += b
    };
    lt.prototype.digest = function() {
        var a = [],
            b = this.zd * 8;
        this.Gb < 56 ? this.update(ot, 56 - this.Gb) : this.update(ot, this.blockSize - (this.Gb - 56));
        for (var c = 63; c >= 56; c--) this.Uc[c] = b & 255, b /= 256;
        pt(this);
        for (c = b = 0; c < this.ai; c++)
            for (var d = 24; d >= 0; d -= 8) a[b++] = this.u[c] >> d & 255;
        return a
    };
    var kt = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804,
        4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298
    ];
    var rt = function() {
        lt.call(this, 8, qt)
    };
    Qa(rt, lt);
    var qt = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
    var st = function(a) {
        Z.call(this, a)
    };
    A(st, Z);
    st.V = "EventIdMessage";
    var tt = function(a) {
        Z.call(this, a)
    };
    A(tt, Z);
    tt.prototype.Ub = function(a) {
        return mm(this, 4, a)
    };
    tt.prototype.Hf = function() {
        return em(this, 8, void 0 === rk ? 2 : 4)
    };
    tt.prototype.bf = function(a) {
        return dm(this, 8, a)
    };
    tt.prototype.og = function(a) {
        return lm(this, 9, a)
    };
    tt.V = "ads.branding.measurement.client.frontend.integrations.reach.ContextIdMessage";
    var ut = [0, Cn, Hn, -1];
    st.prototype.M = Tn(ut);
    tt.prototype.M = Tn([0, ut, In, -1, Mn, -3, Qn, In]);
    var vt = function(a) {
        Z.call(this, a, 1)
    };
    A(vt, Z);
    vt.V = "proto2.bridge.MessageSet";
    var wt = {};
    vt[uk] = wt;
    var xt = Sn(st, ut);
    wt[4156379] = {
        Dj: new function(a, b, c) {
            var d = d === void 0 ? !1 : d;
            E(a > 0);
            this.kb = a;
            this.wf = b;
            this.hb = c;
            this.kd = 0;
            this.Cb = $l;
            this.defaultValue = void 0;
            this.Gh = d
        }(4156379, vt, st)
    };
    var yt = function() {
        var a;
        this.message = a = a === void 0 ? new tt : a
    };
    yt.prototype.Fc = function(a) {
        var b = this.message;
        a = xt(uh(a));
        this.message = cm(b, st, 1, a);
        return this
    };
    var zt = function(a, b) {
        var c = lm(a.message, 2, b.Bb === 2);
        b = lm(c, 3, !b.Ec);
        a.message = b;
        return a
    };
    yt.prototype.Ub = function(a) {
        this.message = this.message.Ub(Math.max(1, a));
        return this
    };
    var At = function(a, b) {
            a.message = a.message.bf(b);
            return a
        },
        Bt = function(a) {
            var b = fs.match(/m\d{12}/g),
                c = fs.match(/\d{8}/g);
            if (b && b.length > 0) {
                b = b[0].slice(1);
                c = a.message;
                var d = Number(b.slice(0, 8));
                c = mm(c, 5, d);
                d = Number(b.slice(8, 10));
                c = mm(c, 6, d);
                b = Number(b.slice(10, 12));
                b = mm(c, 7, b);
                a.message = b;
                return a
            }
            if (c && c.length > 0) return b = mm(a.message, 5, Number(c[0])), b = Kl(b, 6), b = Kl(b, 7), a.message = b, a;
            fs === "unreleased" && (b = Kl(a.message, 5), b = mm(b, 6, 0), a.message = Kl(b, 7));
            return a
        };
    yt.prototype.encode = function() {
        var a = this.message,
            b = sh(a.M());
        b.length > 64 && (a = a.Ub(1), b = sh(a.M()));
        b.length > 64 && (a = Kl(a, 6), b = sh(a.M()));
        b.length > 64 && (a = Kl(a, 7), b = sh(a.M()));
        b.length > 64 && (a = Kl(a, 5), b = sh(a.M()));
        return b
    };

    function Ct(a, b) {
        if (b === void 0 || b.length === 0) return Zs(a, ct(new bt, 7)), [be(0)].filter(function(d) {
            return d !== void 0
        });
        var c = be(-2147483648);
        return c === void 0 ? [] : b.map(function(d) {
            var e = d % c;
            d !== e && Zs(a, ct(new bt, 6));
            return e
        })
    };

    function Dt(a, b) {
        var c = c === void 0 ? BigInt(0) : c;
        return {
            bucket: a,
            value: b ? 1 : 16384,
            filteringId: c
        }
    };

    function Et(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            e < 128 ? b[c++] = e : (e < 2048 ? b[c++] = e >> 6 | 192 : ((e & 64512) == 55296 && d + 1 < a.length && (a.charCodeAt(d + 1) & 64512) == 56320 ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        if (b.length >= 24) throw Error("Ka");
        return [96 | b.length].concat(x(b))
    }

    function Ft(a) {
        if (a.length >= 24) throw Error("La");
        return [160 | a.length].concat(x(a.sort(Ht).map(function(b) {
            return [].concat(x(b[0]), x(b[1]))
        }).flat()))
    }

    function It(a) {
        if (a.length >= 24) throw Error("Ma");
        return [128 | a.length].concat(x(a.flat()))
    }

    function Mt(a, b) {
        for (var c = []; a > 0;) c.push(Number(a % BigInt(255))), a /= BigInt(255);
        for (; c.length < b;) c.push(0);
        return c.reverse()
    }

    function Ht(a, b) {
        a = a[0];
        b = b[0];
        if (a.length !== b.length) return a.length - b.length;
        for (var c = 0; c < a.length; c++)
            if (a[c] !== b[c]) return a[c] - b[c];
        return 0
    };

    function Nt(a, b, c, d) {
        var e = Dt(BigInt(c), d);
        b = {
            shared_info: JSON.stringify({
                api: "shared-storage",
                report_id: "PRE_WORKLET_ERROR",
                reporting_origin: "https://www.googleadservices.com",
                scheduled_report_time: String((new Date).getUTCSeconds()),
                version: "polyfill"
            }),
            aggregation_service_payloads: [],
            context_id: b,
            aggregation_coordinator_origin: "https://publickeyservice.msmt.gcp.privacysandboxservices.com"
        };
        d ? (b.debug_key = "0", b.aggregation_service_payloads.push({
                payload: String(c),
                key_id: "0",
                debug_cleartext_payload: Ot([e])
            })) :
            b.aggregation_service_payloads.push({
                payload: String(c),
                key_id: "0"
            });
        try {
            var f, g;
            (f = a.global) == null || (g = f.fetch) == null || g.call(f, "https://www.googleadservices.com/.well-known/private-aggregation/report-shared-storage", {
                method: "POST",
                cache: "no-cache",
                keepalive: !0,
                mode: "no-cors",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(b)
            }).catch(function() {})
        } catch (h) {}
    }

    function Ot(a) {
        a = Ft([
            [Et("data"), It(a.map(function(b) {
                return Ft([
                    [Et("value"), [68].concat(x(Mt(BigInt(b.value), 4)))],
                    [Et("bucket"), [80].concat(x(Mt(b.bucket, 16)))],
                    [Et("filteringId"), [68].concat(x(Mt(b.filteringId, 4)))]
                ])
            }))],
            [Et("operation"), Et("histogram")]
        ]);
        return btoa(String.fromCharCode.apply(String, x(new Uint8Array(a))))
    };
    var Pt = {},
        Qt = (Pt[2] = "prod", Pt[1] = "canary", Pt);

    function Rt(a, b, c, d) {
        var e, f, g, h, k, l, m, t;
        return Fa(function(q) {
            switch (q.s) {
                case 1:
                    e = $s(c);
                    f = function(r) {
                        e.forEach(function(w) {
                            var v, z = Bt(zt(At((new yt).Fc(c.escapedQueryId), (v = c.trafficTypes) != null ? v : [0]), w)).Ub(-1).encode();
                            Nt(a, z, r, w.hc)
                        })
                    };
                    g = no(a);
                    if (g instanceof Error) return f(-16), h = et(dt(ct(new bt, 8), g.name), g.message), Zs(a, h), q.return();
                    d.points.push(7);
                    k = St(a, c, e);
                    return sa(q, c.experimentState.reachUseCreateWorklet ? Tt(a, b, f) : Ut(a, b, f), 2);
                case 2:
                    return l = q.ca, sa(q, k, 3);
                case 3:
                    return m = q.ca,
                        d.points.push(8), t = e.map(function(r) {
                            var w, v, z;
                            return Vt(a, l, r, m, (w = c.deviceType) != null ? w : 1, c.escapedQueryId, (v = c.trafficTypes) != null ? v : [0], (z = c.isProductSplitVpidLogsExperiment) != null ? z : !1, function(y) {
                                var N, Q = Bt(zt(At((new yt).Fc(c.escapedQueryId), (N = c.trafficTypes) != null ? N : [0]).Ub(-1), r)).encode();
                                Nt(a, Q, y, r.hc)
                            })
                        }), sa(q, Promise.all(t), 4);
                case 4:
                    d.points.push(9), q.s = 0
            }
        })
    }

    function Ut(a, b, c) {
        var d, e, f;
        return Fa(function(g) {
            switch (g.s) {
                case 1:
                    d = a.sharedStorage;
                    if (!d) return g.return(Promise.reject(Error("Na")));
                    ta(g, 2);
                    return sa(g, d.worklet.addModule(b), 4);
                case 4:
                    g.s = 3;
                    g.va = 0;
                    break;
                case 2:
                    e = ua(g), c(-17), f = et(dt(ct(new bt, 1), e.name), e.message), Zs(a, f);
                case 3:
                    return g.return(d)
            }
        })
    }

    function Tt(a, b, c) {
        var d, e, f;
        return Fa(function(g) {
            if (g.s == 1) {
                d = a.sharedStorage;
                if (!d) return g.return(Promise.reject(Error("Na")));
                ta(g, 2);
                return sa(g, d.createWorklet(b, {
                    dataOrigin: "script-origin"
                }), 4)
            }
            if (g.s != 2) return g.return(g.ca);
            e = ua(g);
            c(-17);
            f = et(dt(ct(new bt, 1), e.name), e.message);
            Zs(a, f);
            return g.return(Promise.reject(e))
        })
    }

    function St(a, b, c) {
        var d, e, f;
        return Fa(function(g) {
            if (g.s == 1) return d = [].concat(x(new Set(c.map(function(h) {
                return h.Bb
            })))), e = d.map(function(h) {
                return Wt(a, b, h)
            }), sa(g, Promise.all(e), 2);
            f = g.ca;
            return g.return(new Map(f.map(function(h, k) {
                return [d[k], h]
            })))
        })
    }

    function Wt(a, b, c) {
        var d, e, f, g, h, k, l, m, t;
        return Fa(function(q) {
            switch (q.s) {
                case 1:
                    return e = (d = b.clientsideModelFilename) != null ? d : "model_person_country_code_XX_person_region_code_5858.json", f = void 0, g = 1, h = {
                        method: "GET"
                    }, k = 200, l = b.geoTargetMessage ? Cs(b.geoTargetMessage) : void 0, m = (new bt).Fc(b.escapedQueryId).ng(l), ta(q, 2), sa(q, a.global.fetch(Xt(c, e), h), 4);
                case 4:
                    f = q.ca;
                    k = f.status;
                    if (f.ok) {
                        q.Ja(5);
                        break
                    }
                    return sa(q, a.global.fetch(Xt(c, "model_person_country_code_XX_person_region_code_5858.json"), h), 6);
                case 6:
                    f = q.ca, g = 2;
                case 5:
                    q.s = 3;
                    q.va = 0;
                    break;
                case 2:
                    t = ua(q), k = -1, t instanceof Error && et(dt(m, t.name), t.message);
                case 3:
                    var r = ct(m, 2);
                    Kl(r, 9, k == null ? k : Fk(k));
                    if (!f || !f.ok) return r = om(m, 4, 4), r = nm(r, 8, e), nm(r, 7, ""), Zs(a, m), q.return();
                    r = om(m, 4, g);
                    nm(r, 7, g === 1 ? e : "");
                    Zs(a, m);
                    return sa(q, f.text(), 7);
                case 7:
                    return q.return(q.ca)
            }
        })
    }

    function Xt(a, b) {
        return "https://www.googletagservices.com/agrp/" + Qt[a] + "/" + b
    }

    function Vt(a, b, c, d, e, f, g, h, k) {
        var l, m, t, q, r, w, v;
        return Fa(function(z) {
            switch (z.s) {
                case 1:
                    l = d.get(c.Bb);
                    if (l === void 0) return z.return();
                    var y = be(-2147483648);
                    if (y === void 0) y = -1;
                    else {
                        var N = Number,
                            Q = new rt;
                        Q.update(l);
                        var fa = Q.digest();
                        Q = BigInt(0);
                        fa = u(fa);
                        for (var F = fa.next(); !F.done; F = fa.next()) Q = (Q * BigInt(256) + BigInt(F.value)) % y;
                        y = N(Q)
                    }
                    m = y;
                    y = Bt(zt(At((new yt).Fc(f), g), c).Ub(m));
                    y.message = y.message.og(h);
                    t = y.encode();
                    q = {
                        contextId: t,
                        aggregationCoordinatorOrigin: "https://publickeyservice.msmt.gcp.privacysandboxservices.com",
                        filteringIdMaxBytes: 4
                    };
                    r = {
                        modelJson: l,
                        modelHash: m,
                        deviceType: e,
                        enableDebugMode: c.hc,
                        reportBrowserIdInsteadOfVPID: c.Ec,
                        filterIds: Ct(a, c.filterIds)
                    };
                    w = b.run("google_reach", {
                        privateAggregationConfig: q,
                        data: r,
                        keepAlive: !0
                    });
                    if (w === void 0) {
                        z.Ja(2);
                        break
                    }
                    ta(z, 3);
                    return sa(z, w, 5);
                case 5:
                    z.s = 2;
                    z.va = 0;
                    break;
                case 3:
                    v = ua(z), k(-18), y = v, fa = et(dt(ct(new bt, 3), (N = y == null ? void 0 : y.name) != null ? N : "unknown"), (Q = y == null ? void 0 : y.message) != null ? Q : ""), Zs(a, fa);
                case 2:
                    y = ct(new bt, 5), y = om(y, 5, c.Bb === 1 ? 1 : 2), y = om(y, 6, c.Ec ?
                        1 : 2), Zs(a, y), z.s = 0
            }
        })
    };
    var Yt = function(a) {
        var b = b === void 0 ? [] : b;
        var c = c === void 0 ? [a] : c;
        this.Ae = a;
        this.subscribedEvents = b;
        this.controlledEvents = c;
        this.name = "reach";
        this.Ac = new Map
    };
    n = Yt.prototype;
    n.start = function(a) {
        a.N && (this.context = a.N)
    };
    n.dispose = function() {
        this.Ac.forEach(function(a) {
            return void a.dispose()
        });
        this.Ac.clear()
    };
    n.fe = function(a, b, c, d) {
        var e = this,
            f = this.context;
        if (f) {
            var g = new ft(f);
            gt(g, function() {
                var h, k;
                return Fa(function(l) {
                    if (l.s == 1) {
                        g.points.push(1);
                        if (Ml(b, Ds, 1) && !Js(b).ae()) return l.return();
                        g.points.push(2);
                        return no(f) ? sa(l, id(Ys(f)), 2) : l.return()
                    }
                    h = l.ca;
                    if (!h) return l.return();
                    g.points.push(3);
                    k = new Zt(f, b, e.Ae, c, d, g);
                    e.Ac.set(a, k);
                    return sa(l, k.run(), 0)
                })
            })
        }
    };
    n.Db = function(a) {
        var b;
        (b = this.Ac.get(a)) == null || b.dispose();
        this.Ac.delete(a)
    };
    n.handleEvent = function() {};
    var Zt = function(a, b, c, d, e, f) {
        this.context = a;
        this.metadata = b;
        this.Ae = c;
        this.experimentState = d;
        this.Ua = e;
        this.Rd = f
    };
    Zt.prototype.run = function() {
        var a = this,
            b, c;
        return Fa(function(d) {
            if (d.s == 1) return b = {}, sa(d, new Promise(function(e) {
                a.Ua(a.Ae, b, e)
            }), 2);
            c = d.ca;
            if (!c) return d.return();
            a.Rd.points.push(4);
            return sa(d, $t(a), 0)
        })
    };
    var $t = function(a) {
            var b, c, d, e, f, g, h, k, l, m, t, q, r, w, v, z, y;
            return Fa(function(N) {
                var Q = a.experimentState,
                    fa = (l = (b = Js(a.metadata)) == null ? void 0 : b.Ef()) != null ? l : "",
                    F = (m = (c = Js(a.metadata)) == null ? void 0 : c.Hf()) != null ? m : void 0,
                    B = (d = Js(a.metadata)) == null ? void 0 : km(d, 1),
                    X = (t = (e = Js(a.metadata)) == null ? void 0 : (f = e.Gf()) == null ? void 0 : f.Za()) != null ? t : void 0,
                    Cc = (q = (g = Js(a.metadata)) == null ? void 0 : hm(g, 8)) != null ? q : void 0,
                    vb = au;
                var ld = (h = Js(a.metadata)) == null ? void 0 : Rl(h, 5, Gk, rk === rk ? 2 : 4);
                vb = vb(a, (r = ld) != null ? r : void 0);
                ld = au;
                var Sa = (k = Js(a.metadata)) == null ? void 0 : Rl(k, 6, Gk, rk === rk ? 2 : 4);
                v = {
                    experimentState: Q,
                    escapedQueryId: fa,
                    trafficTypes: F,
                    isProductSplitVpidLogsExperiment: !0,
                    clientsideModelFilename: B,
                    geoTargetMessage: X,
                    deviceType: Cc,
                    productionFilterIds: vb,
                    testFilterIds: ld(a, (w = Sa) != null ? w : void 0)
                };
                z = a.context.rg[0];
                if (a.experimentState.reachUseCreateWorklet) return a.Rd.points.push(10), sa(N, Rt(a.context, z, v, a.Rd), 0);
                y = btoa(JSON.stringify(v));
                return sa(N, Vh(a.context.document, z, y), 0)
            })
        },
        au = function(a, b) {
            if (b !== void 0) return b.map(function(c) {
                var d;
                return String((d = be(c)) != null ? d : 0)
            })
        };
    Zt.prototype.dispose = function() {};
    var bu = Gf("m202410300101".match(/^m\d{10}$/g) !== null ? "m202410300101" : "current"),
        cu;
    a: {
        try {
            var du = new kg;
            cu = new If(du, "doubleclickbygoogle.com-omid", void 0, bu);
            break a
        } catch (a) {}
        cu = void 0
    }
    var eu = cu,
        fu = {
            N: new mo(void 0, void 0, void 0, bu),
            ka: eu
        };
    (function(a) {
        if (a && xg(a)) {
            var b = wg(a);
            if (b) {
                a.global.fetch("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=fle-fetch-start2", {
                    method: "GET",
                    cache: "no-cache",
                    keepalive: !0,
                    mode: "no-cors"
                });
                try {
                    b("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=fle-fetch-later2", {
                        method: "GET",
                        cache: "no-cache",
                        mode: "no-cors",
                        activateAfter: 96E4
                    })
                } catch (c) {
                    a.global.fetch("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=fle-fetch-fallback2", {
                        method: "GET",
                        cache: "no-cache",
                        keepalive: !0,
                        mode: "no-cors"
                    })
                }
                a.eg.subscribe(function() {
                    a.global.fetch("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=fle-fetch-pagehide2", {
                        method: "GET",
                        cache: "no-cache",
                        keepalive: !0,
                        mode: "no-cors"
                    })
                })
            }
        }
    })(fu.N);
    (function(a, b, c) {
        var d = new ss("impression"),
            e = new ss("begin to render"),
            f = new ss("unmeasurable"),
            g = new ss("viewable"),
            h = new ss("reach vpid"),
            k = new qs(d, h, e, g, f),
            l = new Ns,
            m = new Vs(d.event);
        b = new Rs(l, c, d.event, e.event, f.event, g.event, b);
        h = new Yt(h.event);
        var t = new ts(a, k, l, m, b, h);
        t.start();
        return {
            dispose: function() {
                return void t.dispose()
            },
            colleagues: {
                zj: m,
                Yj: b,
                Vj: h
            }
        }
    })(fu, 7);
}).call(this);