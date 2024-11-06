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
            throw Error("Cannot find global object");
        },
        r = ca(this),
        u = function(a, b) {
            if (b) a: {
                var c = r;a = a.split(".");
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
    u("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.xa = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.xa
        };
        var c = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    });
    u("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = r[b[c]];
            typeof d === "function" && typeof d.prototype[a] != "function" && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return da(aa(this))
                }
            })
        }
        return a
    });
    var da = function(a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function() {
                return this
            };
            return a
        },
        ea = function(a) {
            return x(a, a)
        },
        x = function(a, b) {
            a.raw = b;
            Object.freeze && (Object.freeze(a), Object.freeze(b));
            return a
        },
        y = function(a) {
            var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if (typeof a.length == "number") return {
                next: aa(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        };
    u("Promise", function(a) {
        function b() {
            this.A = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(k) {
                k(g)
            })
        }
        if (a) return a;
        b.prototype.da = function(g) {
            if (this.A == null) {
                this.A = [];
                var k = this;
                this.ea(function() {
                    k.Ca()
                })
            }
            this.A.push(g)
        };
        var d = r.setTimeout;
        b.prototype.ea = function(g) {
            d(g, 0)
        };
        b.prototype.Ca = function() {
            for (; this.A && this.A.length;) {
                var g = this.A;
                this.A = [];
                for (var k = 0; k < g.length; ++k) {
                    var h = g[k];
                    g[k] = null;
                    try {
                        h()
                    } catch (l) {
                        this.Aa(l)
                    }
                }
            }
            this.A = null
        };
        b.prototype.Aa = function(g) {
            this.ea(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.F = 0;
            this.K = void 0;
            this.D = [];
            this.ka = !1;
            var k = this.U();
            try {
                g(k.resolve, k.reject)
            } catch (h) {
                k.reject(h)
            }
        };
        e.prototype.U = function() {
            function g(l) {
                return function(m) {
                    h || (h = !0, l.call(k, m))
                }
            }
            var k = this,
                h = !1;
            return {
                resolve: g(this.Ha),
                reject: g(this.Z)
            }
        };
        e.prototype.Ha = function(g) {
            if (g === this) this.Z(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e) this.Ma(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var k = g != null;
                        break a;
                    case "function":
                        k = !0;
                        break a;
                    default:
                        k = !1
                }
                k ? this.Ga(g) : this.ja(g)
            }
        };
        e.prototype.Ga = function(g) {
            var k = void 0;
            try {
                k = g.then
            } catch (h) {
                this.Z(h);
                return
            }
            typeof k == "function" ? this.Na(k, g) : this.ja(g)
        };
        e.prototype.Z = function(g) {
            this.ua(2, g)
        };
        e.prototype.ja = function(g) {
            this.ua(1, g)
        };
        e.prototype.ua = function(g, k) {
            if (this.F != 0) throw Error("Cannot settle(" + g + ", " + k + "): Promise already settled in state" + this.F);
            this.F = g;
            this.K = k;
            this.F === 2 && this.Ia();
            this.Da()
        };
        e.prototype.Ia = function() {
            var g = this;
            d(function() {
                if (g.Fa()) {
                    var k = r.console;
                    typeof k !== "undefined" &&
                        k.error(g.K)
                }
            }, 1)
        };
        e.prototype.Fa = function() {
            if (this.ka) return !1;
            var g = r.CustomEvent,
                k = r.Event,
                h = r.dispatchEvent;
            if (typeof h === "undefined") return !0;
            typeof g === "function" ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : typeof k === "function" ? g = new k("unhandledrejection", {
                cancelable: !0
            }) : (g = r.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.K;
            return h(g)
        };
        e.prototype.Da = function() {
            if (this.D != null) {
                for (var g = 0; g < this.D.length; ++g) f.da(this.D[g]);
                this.D = null
            }
        };
        var f = new b;
        e.prototype.Ma = function(g) {
            var k = this.U();
            g.L(k.resolve, k.reject)
        };
        e.prototype.Na = function(g, k) {
            var h = this.U();
            try {
                g.call(k, h.resolve, h.reject)
            } catch (l) {
                h.reject(l)
            }
        };
        e.prototype.then = function(g, k) {
            function h(q, v) {
                return typeof q == "function" ? function(w) {
                    try {
                        l(q(w))
                    } catch (t) {
                        m(t)
                    }
                } : v
            }
            var l, m, n = new e(function(q, v) {
                l = q;
                m = v
            });
            this.L(h(g, l), h(k, m));
            return n
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.L = function(g, k) {
            function h() {
                switch (l.F) {
                    case 1:
                        g(l.K);
                        break;
                    case 2:
                        k(l.K);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.F);
                }
            }
            var l = this;
            this.D == null ? f.da(h) : this.D.push(h);
            this.ka = !0
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(k, h) {
                h(g)
            })
        };
        e.race = function(g) {
            return new e(function(k, h) {
                for (var l = y(g), m = l.next(); !m.done; m = l.next()) c(m.value).L(k, h)
            })
        };
        e.all = function(g) {
            var k = y(g),
                h = k.next();
            return h.done ? c([]) : new e(function(l, m) {
                function n(w) {
                    return function(t) {
                        q[w] = t;
                        v--;
                        v == 0 && l(q)
                    }
                }
                var q = [],
                    v = 0;
                do q.push(void 0), v++, c(h.value).L(n(q.length -
                    1), m), h = k.next(); while (!h.done)
            })
        };
        return e
    });
    var z = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    u("WeakMap", function(a) {
        function b() {}

        function c(h) {
            var l = typeof h;
            return l === "object" && h !== null || l === "function"
        }

        function d(h) {
            if (!z(h, f)) {
                var l = new b;
                ba(h, f, {
                    value: l
                })
            }
        }

        function e(h) {
            var l = Object[h];
            l && (Object[h] = function(m) {
                if (m instanceof b) return m;
                Object.isExtensible(m) && d(m);
                return l(m)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var h = Object.seal({}),
                        l = Object.seal({}),
                        m = new a([
                            [h, 2],
                            [l, 3]
                        ]);
                    if (m.get(h) != 2 || m.get(l) != 3) return !1;
                    m.delete(h);
                    m.set(l, 4);
                    return !m.has(h) && m.get(l) == 4
                } catch (n) {
                    return !1
                }
            }()) return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var g = 0,
            k = function(h) {
                this.J = (g += Math.random() + 1).toString();
                if (h) {
                    h = y(h);
                    for (var l; !(l = h.next()).done;) l = l.value, this.set(l[0], l[1])
                }
            };
        k.prototype.set = function(h, l) {
            if (!c(h)) throw Error("Invalid WeakMap key");
            d(h);
            if (!z(h, f)) throw Error("WeakMap key fail: " + h);
            h[f][this.J] = l;
            return this
        };
        k.prototype.get = function(h) {
            return c(h) && z(h, f) ? h[f][this.J] : void 0
        };
        k.prototype.has = function(h) {
            return c(h) && z(h, f) && z(h[f], this.J)
        };
        k.prototype.delete = function(h) {
            return c(h) && z(h, f) && z(h[f], this.J) ? delete h[f][this.J] : !1
        };
        return k
    });
    u("Map", function(a) {
        if (function() {
                if (!a || typeof a != "function" || !a.prototype.entries || typeof Object.seal != "function") return !1;
                try {
                    var k = Object.seal({
                            x: 4
                        }),
                        h = new a(y([
                            [k, "s"]
                        ]));
                    if (h.get(k) != "s" || h.size != 1 || h.get({
                            x: 4
                        }) || h.set({
                            x: 4
                        }, "t") != h || h.size != 2) return !1;
                    var l = h.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != k || m.value[1] != "s") return !1;
                    m = l.next();
                    return m.done || m.value[0].x != 4 || m.value[1] != "t" || !l.next().done ? !1 : !0
                } catch (n) {
                    return !1
                }
            }()) return a;
        var b = new WeakMap,
            c = function(k) {
                this[0] = {};
                this[1] =
                    f();
                this.size = 0;
                if (k) {
                    k = y(k);
                    for (var h; !(h = k.next()).done;) h = h.value, this.set(h[0], h[1])
                }
            };
        c.prototype.set = function(k, h) {
            k = k === 0 ? 0 : k;
            var l = d(this, k);
            l.list || (l.list = this[0][l.id] = []);
            l.i ? l.i.value = h : (l.i = {
                next: this[1],
                v: this[1].v,
                head: this[1],
                key: k,
                value: h
            }, l.list.push(l.i), this[1].v.next = l.i, this[1].v = l.i, this.size++);
            return this
        };
        c.prototype.delete = function(k) {
            k = d(this, k);
            return k.i && k.list ? (k.list.splice(k.index, 1), k.list.length || delete this[0][k.id], k.i.v.next = k.i.next, k.i.next.v = k.i.v, k.i.head =
                null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].v = f();
            this.size = 0
        };
        c.prototype.has = function(k) {
            return !!d(this, k).i
        };
        c.prototype.get = function(k) {
            return (k = d(this, k).i) && k.value
        };
        c.prototype.entries = function() {
            return e(this, function(k) {
                return [k.key, k.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(k) {
                return k.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(k) {
                return k.value
            })
        };
        c.prototype.forEach = function(k, h) {
            for (var l = this.entries(), m; !(m = l.next()).done;) m =
                m.value, k.call(h, m[1], m[0], this)
        };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(k, h) {
                var l = h && typeof h;
                l == "object" || l == "function" ? b.has(h) ? l = b.get(h) : (l = "" + ++g, b.set(h, l)) : l = "p_" + h;
                var m = k[0][l];
                if (m && z(k[0], l))
                    for (k = 0; k < m.length; k++) {
                        var n = m[k];
                        if (h !== h && n.key !== n.key || h === n.key) return {
                            id: l,
                            list: m,
                            index: k,
                            i: n
                        }
                    }
                return {
                    id: l,
                    list: m,
                    index: -1,
                    i: void 0
                }
            },
            e = function(k, h) {
                var l = k[1];
                return da(function() {
                    if (l) {
                        for (; l.head != k[1];) l = l.v;
                        for (; l.next != l.head;) return l = l.next, {
                            done: !1,
                            value: h(l)
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
                var k = {};
                return k.v = k.next = k.head = k
            },
            g = 0;
        return c
    });
    u("globalThis", function(a) {
        return a || r
    });
    var fa = function(a, b) {
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
    u("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return fa(this, function(b) {
                return b
            })
        }
    });
    var ha = function(a, b, c) {
        if (a == null) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    u("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = ha(this, b, "startsWith");
            b += "";
            var e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    });
    u("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = ha(this, b, "endsWith");
            b += "";
            c === void 0 && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; e > 0 && c > 0;)
                if (d[--c] != b[--e]) return !1;
            return e <= 0
        }
    });
    u("Promise.prototype.finally", function(a) {
        return a ? a : function(b) {
            return this.then(function(c) {
                return Promise.resolve(b()).then(function() {
                    return c
                })
            }, function(c) {
                return Promise.resolve(b()).then(function() {
                    throw c;
                })
            })
        }
    });
    u("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? b !== 0 || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    u("Array.prototype.includes", function(a) {
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
    u("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return ha(this, b, "includes").indexOf(b, c || 0) !== -1
        }
    });
    window.gapi = window.gapi || {};
    window.gapi.Oa = (new Date).getTime();
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var A = this || self,
        ia = function(a) {
            var b = typeof a;
            b = b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null";
            return b == "array" || b == "object" && typeof a.length == "number"
        },
        ja = function(a) {
            var b = typeof a;
            return b == "object" && a != null || b == "function"
        },
        ma = "closure_uid_" + (Math.random() * 1E9 >>> 0),
        na = 0,
        oa = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        pa = function(a, b, c) {
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
        },
        qa = function(a, b, c) {
            qa = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? oa : pa;
            return qa.apply(null, arguments)
        },
        ra = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.Ta = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.H = function(d, e, f) {
                for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++) g[k - 2] = arguments[k];
                return b.prototype[e].apply(d,
                    g)
            }
        },
        sa = function(a) {
            return a
        };

    function ta(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, ta);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        b !== void 0 && (this.cause = b)
    }
    ra(ta, Error);
    ta.prototype.name = "CustomError";
    var ua;

    function va(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        ta.call(this, c + a[d])
    }
    ra(va, ta);
    va.prototype.name = "AssertionError";
    var wa = function(a, b, c) {
        if (!a) {
            var d = "Assertion failed";
            if (b) {
                d += ": " + b;
                var e = Array.prototype.slice.call(arguments, 2)
            }
            throw new va("" + d, e || []);
        }
    };
    var xa = Array.prototype.forEach ? function(a, b) {
        wa(a.length != null);
        Array.prototype.forEach.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    };

    function ya(a) {
        var b = a.length;
        if (b > 0) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    /*

     Copyright Google LLC
     SPDX-License-Identifier: Apache-2.0
    */
    var za = "src srcdoc codebase data href rel action formaction sandbox cite poster icon".split(" ");
    var Aa = {};

    function Ba() {
        if (Aa !== Aa) throw Error("Bad secret");
    };
    var Ca = function(a) {
        Ba();
        this.qa = a
    };
    Ca.prototype.toString = function() {
        return this.qa
    };
    var Da = ea([""]),
        Fa = x(["\x00"], ["\\0"]),
        Ga = x(["\n"], ["\\n"]),
        Ha = x(["\x00"], ["\\u0000"]),
        Ia = ea([""]),
        Ja = x(["\x00"], ["\\0"]),
        Ka = x(["\n"], ["\\n"]),
        La = x(["\x00"], ["\\u0000"]);

    function Ma(a) {
        return Object.isFrozen(a) && Object.isFrozen(a.raw)
    }

    function Na(a) {
        return a.toString().indexOf("`") === -1
    }
    var Oa = Na(function(a) {
            return a(Da)
        }) || Na(function(a) {
            return a(Fa)
        }) || Na(function(a) {
            return a(Ga)
        }) || Na(function(a) {
            return a(Ha)
        }),
        Pa = Ma(Ia) && Ma(Ja) && Ma(Ka) && Ma(La);

    function Qa() {
        var a = Ra;
        if (!Array.isArray(a) || !Array.isArray(a.raw) || a.length !== a.raw.length || !Oa && a === a.raw || !(Oa && !Pa || Ma(a)) || 1 !== a.length) throw new TypeError("\n    ############################## ERROR ##############################\n\n    It looks like you are trying to call a template tag function (fn`...`)\n    using the normal function syntax (fn(...)), which is not supported.\n\n    The functions in the safevalues library are not designed to be called\n    like normal functions, and doing so invalidates the security guarantees\n    that safevalues provides.\n\n    If you are stuck and not sure how to proceed, please reach out to us\n    instead through:\n     - go/ise-hardening-yaqs (preferred) // LINE-INTERNAL\n     - g/ise-hardening // LINE-INTERNAL\n     - https://github.com/google/safevalues/issues\n\n    ############################## ERROR ##############################");
        var b = a[0].toLowerCase();
        if (b.indexOf("on") === 0 || "on".indexOf(b) === 0) throw Error("Prefix '" + a[0] + "' does not guarantee the attribute to be safe as it is also a prefix for event handler attributesPlease use 'addEventListener' to set event handlers.");
        za.forEach(function(c) {
            if (c.indexOf(b) === 0) throw Error("Prefix '" + a[0] + "' does not guarantee the attribute to be safe as it is also a prefix for the security sensitive attribute '" + (c + "'. Please use native or safe DOM APIs to set the attribute."));
        });
        return new Ca(b)
    };
    var Sa = globalThis.trustedTypes,
        Ta;

    function Ua() {
        var a = null;
        if (!Sa) return a;
        try {
            var b = function(c) {
                return c
            };
            a = Sa.createPolicy("gapi#html", {
                createHTML: b,
                createScript: b,
                createScriptURL: b
            })
        } catch (c) {
            throw c;
        }
        return a
    };
    var Va = function(a) {
        Ba();
        this.ra = a
    };
    Va.prototype.toString = function() {
        return this.ra + ""
    };
    var B = function(a) {
        Ba();
        this.sa = a
    };
    B.prototype.toString = function() {
        return this.sa
    };
    new B("about:blank");
    new B("about:invalid#zClosurez");
    var Wa = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;

    function Xa(a) {
        if (a instanceof B)
            if (a instanceof B) a = a.sa;
            else throw Error("Unexpected type when unwrapping SafeUrl, got '" + a + "' of type '" + typeof a + "'");
        else {
            var b = !Wa.test(a);
            b && Ya(a);
            a = b ? void 0 : a
        }
        return a
    }
    var Za = [],
        Ya = function() {};
    $a(function(a) {
        console.warn("A URL with content '" + a + "' was sanitized away.")
    });

    function $a(a) {
        Za.indexOf(a) === -1 && Za.push(a);
        Ya = function(b) {
            Za.forEach(function(c) {
                c(b)
            })
        }
    };

    function ab(a) {
        var b = [Qa()];
        if (b.length === 0) throw Error("No prefixes are provided");
        if (b.map(function(c) {
                if (c instanceof Ca) c = c.qa;
                else throw Error("Unexpected type when unwrapping SafeAttributePrefix, got '" + c + "' of type '" + typeof c + "'");
                return c
            }).every(function(c) {
                return "data-gapiscan".indexOf(c) !== 0
            })) throw Error('Attribute "data-gapiscan" does not match any of the allowed prefixes.');
        a.setAttribute("data-gapiscan", "true")
    };
    var bb = function(a, b, c) {
            function d(k) {
                k && b.appendChild(typeof k === "string" ? a.createTextNode(k) : k)
            }
            for (var e = 1; e < c.length; e++) {
                var f = c[e];
                if (!ia(f) || ja(f) && f.nodeType > 0) d(f);
                else {
                    a: {
                        if (f && typeof f.length == "number") {
                            if (ja(f)) {
                                var g = typeof f.item == "function" || typeof f.item == "string";
                                break a
                            }
                            if (typeof f === "function") {
                                g = typeof f.item == "function";
                                break a
                            }
                        }
                        g = !1
                    }
                    xa(g ? ya(f) : f, d)
                }
            }
        },
        cb = function(a) {
            wa(a, "Node cannot be null or undefined.");
            return a.nodeType == 9 ? a : a.ownerDocument || a.document
        },
        db = function(a) {
            this.V =
                a || A.document || document
        };
    p = db.prototype;
    p.getElementsByTagName = function(a, b) {
        return (b || this.V).getElementsByTagName(String(a))
    };
    p.createElement = function(a) {
        var b = this.V;
        a = String(a);
        b.contentType === "application/xhtml+xml" && (a = a.toLowerCase());
        return b.createElement(a)
    };
    p.createTextNode = function(a) {
        return this.V.createTextNode(String(a))
    };
    p.appendChild = function(a, b) {
        wa(a != null && b != null, "goog.dom.appendChild expects non-null arguments");
        a.appendChild(b)
    };
    p.append = function(a, b) {
        bb(cb(a), a, arguments)
    };
    p.canHaveChildren = function(a) {
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
    p.removeNode = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    p.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && b.nodeType == 1) return a == b || a.contains(b);
        if (typeof a.compareDocumentPosition != "undefined") return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    /*
     gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
    var C = window,
        D = document,
        eb = C.location,
        fb = function() {},
        hb = /\[native code\]/,
        E = function(a, b, c) {
            return a[b] = a[b] || c
        },
        ib = function(a) {
            for (var b = 0; b < this.length; b++)
                if (this[b] === a) return b;
            return -1
        },
        jb = function(a) {
            a = a.sort();
            for (var b = [], c = void 0, d = 0; d < a.length; d++) {
                var e = a[d];
                e != c && b.push(e);
                c = e
            }
            return b
        },
        kb = /&/g,
        lb = /</g,
        mb = />/g,
        nb = /"/g,
        ob = /'/g,
        pb = function(a) {
            return String(a).replace(kb, "&amp;").replace(lb, "&lt;").replace(mb, "&gt;").replace(nb, "&quot;").replace(ob, "&#39;")
        },
        F = function() {
            var a;
            if ((a = Object.create) &&
                hb.test(a)) a = a(null);
            else {
                a = {};
                for (var b in a) a[b] = void 0
            }
            return a
        },
        G = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        qb = function(a) {
            if (hb.test(Object.keys)) return Object.keys(a);
            var b = [],
                c;
            for (c in a) G(a, c) && b.push(c);
            return b
        },
        H = function(a, b) {
            a = a || {};
            for (var c in a) G(a, c) && (b[c] = a[c])
        },
        rb = function(a) {
            return function() {
                C.setTimeout(a, 0)
            }
        },
        I = function(a, b) {
            if (!a) throw Error(b || "");
        },
        J = E(C, "gapi", {});
    var L = function(a, b, c) {
            var d = new RegExp("([#].*&|[#])" + b + "=([^&#]*)", "g");
            b = new RegExp("([?#].*&|[?#])" + b + "=([^&#]*)", "g");
            if (a = a && (d.exec(a) || b.exec(a))) try {
                c = decodeURIComponent(a[2])
            } catch (e) {}
            return c
        },
        sb = new RegExp(/^/.source + /([a-zA-Z][-+.a-zA-Z0-9]*:)?/.source + /(\/\/[^\/?#]*)?/.source + /([^?#]*)?/.source + /(\?([^#]*))?/.source + /(#((#|[^#])*))?/.source + /$/.source),
        tb = /[\ud800-\udbff][\udc00-\udfff]|[^!-~]/g,
        ub = new RegExp(/(%([^0-9a-fA-F%]|[0-9a-fA-F]([^0-9a-fA-F%])?)?)*/.source + /%($|[^0-9a-fA-F]|[0-9a-fA-F]($|[^0-9a-fA-F]))/.source,
            "g"),
        vb = /%([a-f]|[0-9a-fA-F][a-f])/g,
        wb = /^(https?|ftp|file|chrome-extension):$/i,
        xb = function(a) {
            a = String(a);
            a = a.replace(tb, function(e) {
                try {
                    return encodeURIComponent(e)
                } catch (f) {
                    return encodeURIComponent(e.replace(/^[^%]+$/g, "\ufffd"))
                }
            }).replace(ub, function(e) {
                return e.replace(/%/g, "%25")
            }).replace(vb, function(e) {
                return e.toUpperCase()
            });
            a = a.match(sb) || [];
            var b = F(),
                c = function(e) {
                    return e.replace(/\\/g, "%5C").replace(/\^/g, "%5E").replace(/`/g, "%60").replace(/\{/g, "%7B").replace(/\|/g, "%7C").replace(/\}/g,
                        "%7D")
                },
                d = !!(a[1] || "").match(wb);
            b.H = c((a[1] || "") + (a[2] || "") + (a[3] || (a[2] && d ? "/" : "")));
            d = function(e) {
                return c(e.replace(/\?/g, "%3F").replace(/#/g, "%23"))
            };
            b.query = a[5] ? [d(a[5])] : [];
            b.l = a[7] ? [d(a[7])] : [];
            return b
        },
        yb = function(a) {
            return a.H + (a.query.length > 0 ? "?" + a.query.join("&") : "") + (a.l.length > 0 ? "#" + a.l.join("&") : "")
        },
        zb = function(a, b) {
            var c = [];
            if (a)
                for (var d in a)
                    if (G(a, d) && a[d] != null) {
                        var e = b ? b(a[d]) : a[d];
                        c.push(encodeURIComponent(d) + "=" + encodeURIComponent(e))
                    }
            return c
        },
        Ab = function(a, b, c, d) {
            a = xb(a);
            a.query.push.apply(a.query, zb(b, d));
            a.l.push.apply(a.l, zb(c, d));
            return yb(a)
        },
        Bb = new RegExp(/\/?\??#?/.source + "(" + /[\/?#]/i.source + "|" + /[\uD800-\uDBFF]/i.source + "|" + /%[c-f][0-9a-f](%[89ab][0-9a-f]){0,2}(%[89ab]?)?/i.source + "|" + /%[0-9a-f]?/i.source + ")$", "i"),
        Cb = function(a, b) {
            var c = xb(b);
            b = c.H;
            c.query.length && (b += "?" + c.query.join(""));
            c.l.length && (b += "#" + c.l.join(""));
            var d = "";
            b.length > 2E3 && (d = b, b = b.substr(0, 2E3), b = b.replace(Bb, ""), d = d.substr(b.length));
            var e = a.createElement("div");
            a = a.createElement("a");
            c = xb(b);
            b = c.H;
            c.query.length && (b += "?" + c.query.join(""));
            c.l.length && (b += "#" + c.l.join(""));
            b = b === null ? "null" : b === void 0 ? "undefined" : b;
            if (typeof b !== "string") throw Error("Expected a string");
            b = new B(b);
            b = Xa(b);
            b !== void 0 && (a.href = b);
            e.appendChild(a);
            a = e.innerHTML;
            Ta === void 0 && (Ta = Ua());
            b = Ta;
            a = new Va(b ? b.createHTML(a) : a);
            if (e.nodeType === 1 && (b = e.tagName, /^(script|style)$/i.test(b))) throw d = b.toLowerCase() === "script" ? "Use safeScriptEl.setTextContent with a SafeScript." : "Use safeStyleEl.setTextContent with a SafeStyleSheet.",
                Error(d);
            if (a instanceof Va) a = a.ra;
            else throw Error("Unexpected type when unwrapping SafeHtml");
            e.innerHTML = a;
            b = String(e.firstChild.href);
            e.parentNode && e.parentNode.removeChild(e);
            c = xb(b + d);
            d = c.H;
            c.query.length && (d += "?" + c.query.join(""));
            c.l.length && (d += "#" + c.l.join(""));
            return d
        },
        Db = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;
    var Eb;
    var Fb = function(a, b, c, d) {
            if (C[c + "EventListener"]) C[c + "EventListener"](a, b, !1);
            else if (C[d + "tachEvent"]) C[d + "tachEvent"]("on" + a, b)
        },
        Gb = function() {
            var a = D.readyState;
            return a === "complete" || a === "interactive" && navigator.userAgent.indexOf("MSIE") == -1
        },
        Jb = function(a) {
            var b = Hb;
            if (!Gb()) try {
                b()
            } catch (c) {}
            Ib(a)
        },
        Ib = function(a) {
            if (Gb()) a();
            else {
                var b = !1,
                    c = function() {
                        if (!b) return b = !0, a.apply(this, arguments)
                    };
                C.addEventListener ? (C.addEventListener("load", c, !1), C.addEventListener("DOMContentLoaded", c, !1)) : C.attachEvent &&
                    (C.attachEvent("onreadystatechange", function() {
                        Gb() && c.apply(this, arguments)
                    }), C.attachEvent("onload", c))
            }
        },
        Kb = function(a) {
            for (; a.firstChild;) a.removeChild(a.firstChild)
        },
        Lb = {
            button: !0,
            div: !0,
            span: !0
        };
    var M = {};
    M = E(C, "___jsl", F());
    E(M, "I", 0);
    E(M, "hel", 10);
    var Mb = function(a) {
            return M.dpo ? M.h : L(a, "jsh", M.h)
        },
        Nb = function(a) {
            var b = E(M, "sws", []);
            b.push.apply(b, a)
        },
        Ob = function(a) {
            return E(M, "watt", F())[a]
        },
        Pb = function(a) {
            var b = E(M, "PQ", []);
            M.PQ = [];
            var c = b.length;
            if (c === 0) a();
            else
                for (var d = 0, e = function() {
                        ++d === c && a()
                    }, f = 0; f < c; f++) b[f](e)
        },
        Qb = function(a) {
            return E(E(M, "H", F()), a, F())
        },
        Rb = function() {
            var a = M.ms || M.u;
            if (a) return (new URL(a)).origin
        };
    var Sb = E(M, "perf", F()),
        Tb = E(Sb, "g", F()),
        Ub = E(Sb, "i", F());
    E(Sb, "r", []);
    F();
    F();
    var Vb = function(a, b, c) {
            var d = Sb.r;
            typeof d === "function" ? d(a, b, c) : d.push([a, b, c])
        },
        N = function(a, b, c) {
            Tb[a] = !b && Tb[a] || c || (new Date).getTime();
            Vb(a)
        },
        Xb = function(a, b, c) {
            b && b.length > 0 && (b = Wb(b), c && c.length > 0 && (b += "___" + Wb(c)), b.length > 28 && (b = b.substr(0, 28) + (b.length - 28)), c = b, b = E(Ub, "_p", F()), E(b, c, F())[a] = (new Date).getTime(), Vb(a, "_p", c))
        },
        Wb = function(a) {
            return a.join("__").replace(/\./g, "_").replace(/\-/g, "_").replace(/,/g, "_")
        };
    var Yb = F(),
        O = [],
        Q = function(a) {
            throw Error("Bad hint: " + a);
        };
    O.push(["jsl", function(a) {
        for (var b in a)
            if (G(a, b)) {
                var c = a[b];
                typeof c == "object" ? M[b] = E(M, b, []).concat(c) : E(M, b, c)
            }
        if (b = a.u) a = E(M, "us", []), a.push(b), (b = /^https:(.*)$/.exec(b)) && a.push("http:" + b[1])
    }]);
    var Zb = /^(\/[a-zA-Z0-9_\-]+)+$/,
        $b = [/\/amp\//, /\/amp$/, /^\/amp$/],
        ac = /^[a-zA-Z0-9\-_\.,!]+$/,
        bc = /^gapi\.loaded_[0-9]+$/,
        cc = /^[a-zA-Z0-9,._-]+$/,
        gc = function(a, b, c, d, e) {
            var f = a.split(";"),
                g = f.shift(),
                k = Yb[g],
                h = null;
            k ? h = k(f, b, c, d) : Q("no hint processor for: " + g);
            h || Q("failed to generate load url");
            b = h;
            c = b.match(dc);
            (d = b.match(ec)) && d.length === 1 && fc.test(b) && c && c.length === 1 || Q("failed sanity: " + a);
            try {
                a = "?";
                if (e && e.length > 0) {
                    c = b = 0;
                    for (d = {}; c < e.length;) {
                        var l = e[c++],
                            m = ja(l) ? "o" + (Object.prototype.hasOwnProperty.call(l,
                                ma) && l[ma] || (l[ma] = ++na)) : (typeof l).charAt(0) + l;
                        Object.prototype.hasOwnProperty.call(d, m) || (d[m] = !0, e[b++] = l)
                    }
                    e.length = b;
                    h = h + "?le=" + e.join(",");
                    a = "&"
                }
                if (M.rol) {
                    var n = M.ol;
                    n && n.length && (h = "" + h + a + "ol=" + n.length)
                }
            } catch (q) {}
            return h
        },
        jc = function(a, b, c, d) {
            a = hc(a);
            bc.test(c) || Q("invalid_callback");
            b = ic(b);
            d = d && d.length ? ic(d) : null;
            var e = function(f) {
                return encodeURIComponent(f).replace(/%2C/g, ",")
            };
            return [encodeURIComponent(a.pathPrefix).replace(/%2C/g, ",").replace(/%2F/g, "/"), "/k=", e(a.version), "/m=",
                e(b), d ? "/exm=" + e(d) : "", "/rt=j/sv=1/d=1/ed=1", a.ca ? "/am=" + e(a.ca) : "", a.ta ? "/rs=" + e(a.ta) : "", a.wa ? "/t=" + e(a.wa) : "", "/cb=", e(c)
            ].join("")
        },
        hc = function(a) {
            a.charAt(0) !== "/" && Q("relative path");
            for (var b = a.substring(1).split("/"), c = []; b.length;) {
                a = b.shift();
                if (!a.length || a.indexOf(".") == 0) Q("empty/relative directory");
                else if (a.indexOf("=") > 0) {
                    b.unshift(a);
                    break
                }
                c.push(a)
            }
            a = {};
            for (var d = 0, e = b.length; d < e; ++d) {
                var f = b[d].split("="),
                    g = decodeURIComponent(f[0]),
                    k = decodeURIComponent(f[1]);
                f.length == 2 && g && k &&
                    (a[g] = a[g] || k)
            }
            b = "/" + c.join("/");
            Zb.test(b) || Q("invalid_prefix");
            c = 0;
            for (d = $b.length; c < d; ++c) $b[c].test(b) && Q("invalid_prefix");
            c = kc(a, "k", !0);
            d = kc(a, "am");
            e = kc(a, "rs");
            a = kc(a, "t");
            return {
                pathPrefix: b,
                version: c,
                ca: d,
                ta: e,
                wa: a
            }
        },
        ic = function(a) {
            for (var b = [], c = 0, d = a.length; c < d; ++c) {
                var e = a[c].replace(/\./g, "_").replace(/-/g, "_");
                cc.test(e) && b.push(e)
            }
            return b.join(",")
        },
        kc = function(a, b, c) {
            a = a[b];
            !a && c && Q("missing: " + b);
            if (a) {
                if (ac.test(a)) return a;
                Q("invalid: " + b)
            }
            return null
        },
        fc = /^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,
        ec = /\/cb=/g,
        dc = /\/\//g;
    Yb.m = function(a, b, c, d) {
        (a = a[0]) || Q("missing_hint");
        return "https://apis.google.com" + jc(a, b, c, d)
    };
    var lc = decodeURI("%73cript"),
        mc = /^[-+_0-9\/A-Za-z]+={0,2}$/,
        nc = function(a, b) {
            for (var c = [], d = 0; d < a.length; ++d) {
                var e = a[d];
                e && ib.call(b, e) < 0 && c.push(e)
            }
            return c
        },
        oc = function() {
            var a = M.nonce;
            return a !== void 0 ? a && a === String(a) && a.match(mc) ? a : M.nonce = null : D.querySelector ? (a = D.querySelector("script[nonce]")) ? (a = a.nonce || a.getAttribute("nonce") || "", a && a === String(a) && a.match(mc) ? M.nonce = a : M.nonce = null) : null : null
        },
        rc = function(a) {
            if (D.readyState != "loading") pc(a);
            else {
                var b = oc(),
                    c = "";
                b !== null && (c = ' nonce="' +
                    b + '"');
                a = "<" + lc + ' src="' + encodeURI(a) + '"' + c + "></" + lc + ">";
                D.write(qc ? qc.createHTML(a) : a)
            }
        },
        pc = function(a) {
            var b = D.createElement(lc);
            b.setAttribute("src", qc ? qc.createScriptURL(a) : a);
            a = oc();
            a !== null && b.setAttribute("nonce", a);
            b.async = "true";
            (a = D.getElementsByTagName(lc)[0]) ? a.parentNode.insertBefore(b, a): (D.head || D.body || D.documentElement).appendChild(b)
        },
        tc = function(a, b, c) {
            sc(function() {
                var d = b === Mb(eb.href) ? E(J, "_", F()) : F();
                d = E(Qb(b), "_", d);
                a(d)
            }, c)
        },
        vc = function(a, b) {
            var c = b || {};
            typeof b == "function" &&
                (c = {}, c.callback = b);
            var d = (b = c) && b._c;
            if (d)
                for (var e = 0; e < O.length; e++) {
                    var f = O[e][0],
                        g = O[e][1];
                    g && G(d, f) && g(d[f], a, b)
                }
            b = [];
            a ? b = a.split(":") : c.features && (b = c.features);
            if (!(a = c.h) && (a = Mb(eb.href), !a)) throw Error("Bad hint: !hint");
            uc(b || [], c, a)
        },
        uc = function(a, b, c) {
            a = jb(a) || [];
            var d = b.callback,
                e = b.config,
                f = b.timeout,
                g = b.ontimeout,
                k = b.onerror,
                h = void 0;
            typeof k == "function" && (h = k);
            var l = null,
                m = !1;
            if (f && !g || !f && g) throw "Timeout requires both the timeout parameter and ontimeout parameter to be set";
            k = E(Qb(c),
                "r", []).sort();
            var n = E(Qb(c), "L", []).sort(),
                q = M.le || [],
                v = [].concat(k),
                w = function(S, ka) {
                    if (m) return 0;
                    C.clearTimeout(l);
                    n.push.apply(n, t);
                    var la = ((J || {}).config || {}).update;
                    la ? la(e) : e && E(M, "cu", []).push(e);
                    if (ka) {
                        Xb("me0", S, v);
                        try {
                            tc(ka, c, h)
                        } finally {
                            Xb("me1", S, v)
                        }
                    }
                    return 1
                };
            f > 0 && (l = C.setTimeout(function() {
                m = !0;
                g()
            }, f));
            var t = nc(a, n);
            if (t.length) {
                t = nc(a, k);
                var K = E(M, "CP", []),
                    P = K.length;
                K[P] = function(S) {
                    if (!S) return 0;
                    Xb("ml1", t, v);
                    var ka = function(Ea) {
                            K[P] = null;
                            w(t, S) && Pb(function() {
                                d && d();
                                Ea()
                            })
                        },
                        la =
                        function() {
                            var Ea = K[P + 1];
                            Ea && Ea()
                        };
                    P > 0 && K[P - 1] ? K[P] = function() {
                        ka(la)
                    } : ka(la)
                };
                if (t.length) {
                    var gb = "loaded_" + M.I++;
                    J[gb] = function(S) {
                        K[P](S);
                        J[gb] = null
                    };
                    a = gc(c, t, "gapi." + gb, k, q);
                    k.push.apply(k, t);
                    Xb("ml0", t, v);
                    b.sync || C.___gapisync ? rc(a) : pc(a)
                } else K[P](fb)
            } else w(t) && d && d()
        },
        wc;
    var xc = null,
        yc = A.trustedTypes;
    if (yc && yc.createPolicy) try {
        xc = yc.createPolicy("gapi#gapi", {
            createHTML: sa,
            createScript: sa,
            createScriptURL: sa
        })
    } catch (a) {
        A.console && A.console.error(a.message)
    }
    wc = xc;
    var qc = wc;
    var sc = function(a, b) {
        if (M.hee && M.hel > 0) try {
            return a()
        } catch (c) {
            b && b(c), M.hel--, vc("debug_error", function() {
                try {
                    window.___jsl.hefn(c)
                } catch (d) {
                    throw c;
                }
            })
        } else try {
            return a()
        } catch (c) {
            throw b && b(c), c;
        }
    };
    var zc = J.load;
    zc && E(M, "ol", []).push(zc);
    J.load = function(a, b) {
        return sc(function() {
            return vc(a, b)
        })
    };
    var R = function(a) {
            var b = window.___jsl = window.___jsl || {};
            b[a] = b[a] || [];
            return b[a]
        },
        Ac = function(a) {
            var b = window.___jsl = window.___jsl || {};
            b.cfg = !a && b.cfg || {};
            return b.cfg
        },
        Bc = function(a) {
            return typeof a === "object" && /\[native code\]/.test(a.push)
        },
        T = function(a, b, c) {
            if (b && typeof b === "object")
                for (var d in b) !Object.prototype.hasOwnProperty.call(b, d) || c && d === "___goc" && typeof b[d] === "undefined" || (a[d] && b[d] && typeof a[d] === "object" && typeof b[d] === "object" && !Bc(a[d]) && !Bc(b[d]) ? T(a[d], b[d]) : b[d] && typeof b[d] ===
                    "object" ? (a[d] = Bc(b[d]) ? [] : {}, T(a[d], b[d])) : a[d] = b[d])
        },
        Ec = function(a, b) {
            if (a && !/^\s+$/.test(a)) {
                for (; a.charCodeAt(a.length - 1) == 0;) a = a.substring(0, a.length - 1);
                var c = "" + a,
                    d = R("dm");
                d.push(20);
                try {
                    var e = window.JSON.parse(a)
                } catch (g) {}
                if (typeof e === "object") return d.push(21), e;
                try {
                    e = window.JSON.parse("{" + a + "}")
                } catch (g) {}
                if (typeof e === "object") return d.push(22), e;
                a = a.replace(RegExp("([^\"',{}\\s]+?)\\s*:\\s*(.*?)[,}\\s]", "g"), function(g, k, h) {
                    h = h.startsWith('"') ? "%DOUBLE_QUOTE%" + h.substring(1) : h;
                    h = h.endsWith('"') ?
                        h.slice(0, -1) + "%DOUBLE_QUOTE%" : h;
                    return "%DOUBLE_QUOTE%" + k + "%DOUBLE_QUOTE%:" + h
                });
                a = a.replace(/\\'/g, "%SINGLE_QUOTE%");
                a = a.replace(/"/g, '\\"');
                a = a.replace(/'/g, '"');
                a = a.replace(/%SINGLE_QUOTE%/g, "'");
                a = a.replace(/%DOUBLE_QUOTE%/g, '"');
                try {
                    e = window.JSON.parse(a)
                } catch (g) {}
                if (typeof e === "object") return d.push(23), e;
                try {
                    e = window.JSON.parse("{" + a + "}")
                } catch (g) {}
                if (typeof e === "object") return d.push(24), e;
                a = document.getElementsByTagName("script") || [];
                var f;
                a.length > 0 && (f = a[0].nonce || a[0].getAttribute("nonce"));
                if (f && f === b || !f && Cc())
                    if (e = Dc(c), d.push(25), typeof e === "object") return e;
                return {}
            }
        },
        Cc = function() {
            var a = window.location.hostname;
            return a ? /(^|\.)(2mdn|ampproject|android|appspot|blogger|blogspot|chrome|chromium|doubleclick|gcpnode|ggpht|gmail|google|google-analytics|googleadservices|googleapis|googleapis-cn|googleoptimize|googlers|googlesource|googlesyndication|googletagmanager|googletagservices|googleusercontent|googlevideo|gstatic|tiltbrush|waze|withgoogle|youtube|ytimg)(\.com?|\.net|\.org)?(\.[a-z][a-z]|\.cat)?$/.test(a) :
                !1
        },
        Dc = function(a) {
            try {
                var b = (new Function("return (" + a + "\n)"))()
            } catch (c) {}
            if (typeof b === "object") return b;
            try {
                b = (new Function("return ({" + a + "\n})"))()
            } catch (c) {}
            return b
        },
        Fc = function(a, b) {
            var c = {
                ___goc: void 0
            };
            a.length && a[a.length - 1] && Object.hasOwnProperty.call(a[a.length - 1], "___goc") && typeof a[a.length - 1].___goc === "undefined" && (c = a.pop());
            T(c, b);
            a.push(c)
        },
        Gc = function(a) {
            Ac(!0);
            var b = window.___gcfg,
                c = R("cu"),
                d = window.___gu;
            b && b !== d && (Fc(c, b), window.___gu = b);
            b = R("cu");
            var e = document.getElementsByTagName("script") || [];
            d = [];
            var f = [];
            f.push.apply(f, R("us"));
            for (var g = 0; g < e.length; ++g)
                for (var k = e[g], h = 0; h < f.length; ++h) k.src && k.src.indexOf(f[h]) == 0 && d.push(k);
            d.length == 0 && e.length > 0 && e[e.length - 1].src && d.push(e[e.length - 1]);
            for (e = 0; e < d.length; ++e) d[e].getAttribute("gapi_processed") || (d[e].setAttribute("gapi_processed", !0), (f = d[e]) ? (g = f.nodeType, f = g == 3 || g == 4 ? f.nodeValue : f.textContent || "") : f = void 0, g = d[e].nonce || d[e].getAttribute("nonce"), (f = Ec(f, g)) && b.push(f));
            a && Fc(c, a);
            d = R("cd");
            a = 0;
            for (b = d.length; a < b; ++a) T(Ac(),
                d[a], !0);
            d = R("ci");
            a = 0;
            for (b = d.length; a < b; ++a) T(Ac(), d[a], !0);
            a = 0;
            for (b = c.length; a < b; ++a) T(Ac(), c[a], !0)
        },
        U = function(a) {
            var b = Ac();
            if (!a) return b;
            a = a.split("/");
            for (var c = 0, d = a.length; b && typeof b === "object" && c < d; ++c) b = b[a[c]];
            return c === a.length && b !== void 0 ? b : void 0
        },
        Hc = function(a, b) {
            var c;
            if (typeof a === "string") {
                var d = c = {};
                a = a.split("/");
                for (var e = 0, f = a.length; e < f - 1; ++e) {
                    var g = {};
                    d = d[a[e]] = g
                }
                d[a[e]] = b
            } else c = a;
            Gc(c)
        };
    var Ic = function() {
        var a = window.__GOOGLEAPIS;
        a && (a.googleapis && !a["googleapis.config"] && (a["googleapis.config"] = a.googleapis), E(M, "ci", []).push(a), window.__GOOGLEAPIS = void 0)
    };
    var Jc = {
            callback: 1,
            clientid: 1,
            cookiepolicy: 1,
            openidrealm: -1,
            includegrantedscopes: -1,
            requestvisibleactions: 1,
            scope: 1
        },
        Kc = !1,
        Lc = F(),
        Mc = function() {
            if (!Kc) {
                for (var a = document.getElementsByTagName("meta"), b = 0; b < a.length; ++b) {
                    var c = a[b].name.toLowerCase();
                    if (c.lastIndexOf("google-signin-", 0) == 0) {
                        c = c.substring(14);
                        var d = a[b].content;
                        Jc[c] && d && (Lc[c] = d)
                    }
                }
                if (window.self !== window.top) {
                    a = document.location.toString();
                    for (var e in Jc) Jc[e] > 0 && (b = L(a, e, "")) && (Lc[e] = b)
                }
                Kc = !0
            }
            e = F();
            H(Lc, e);
            return e
        },
        Nc = function(a) {
            return !!(a.clientid &&
                a.scope && a.callback)
        };
    var Oc = function() {
        this.j = window.console
    };
    Oc.prototype.log = function(a) {
        this.j && this.j.log && this.j.log(a)
    };
    Oc.prototype.error = function(a) {
        this.j && (this.j.error ? this.j.error(a) : this.j.log && this.j.log(a))
    };
    Oc.prototype.warn = function(a) {
        this.j && (this.j.warn ? this.j.warn(a) : this.j.log && this.j.log(a))
    };
    Oc.prototype.debug = function() {};
    var Pc = new Oc;
    var Qc = function() {
            return !!M.oa
        },
        Rc = function() {};
    var V = E(M, "rw", F()),
        Sc = function(a) {
            for (var b in V) a(V[b])
        },
        Tc = function(a, b) {
            (a = V[a]) && a.state < b && (a.state = b)
        };
    var W = function(a) {
        var b = window.___jsl = window.___jsl || {};
        b.cfg = b.cfg || {};
        b = b.cfg;
        if (!a) return b;
        a = a.split("/");
        for (var c = 0, d = a.length; b && typeof b === "object" && c < d; ++c) b = b[a[c]];
        return c === a.length && b !== void 0 ? b : void 0
    };
    var Uc = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/u\/(\d)\//,
        Vc = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/b\/(\d{10,21})\//,
        Wc = function() {
            var a = W("googleapis.config/sessionIndex");
            "string" === typeof a && a.length > 254 && (a = null);
            a == null && (a = window.__X_GOOG_AUTHUSER);
            "string" === typeof a && a.length > 254 && (a = null);
            if (a == null) {
                var b = window.google;
                b && (a = b.authuser)
            }
            "string" === typeof a && a.length > 254 && (a = null);
            a == null && (b = window.location.href, a = L(b, "authuser") ||
                null, a == null && (a = (a = b.match(Uc)) ? a[1] : null));
            if (a == null) return null;
            a = String(a);
            a.length > 254 && (a = null);
            return a
        },
        Xc = function() {
            var a = W("googleapis.config/sessionDelegate");
            "string" === typeof a && a.length > 21 && (a = null);
            a == null && (a = (a = window.location.href.match(Vc)) ? a[1] : null);
            if (a == null) return null;
            a = String(a);
            a.length > 21 && (a = null);
            return a
        };
    var Yc, Zc, $c = void 0,
        X = function(a) {
            try {
                return A.JSON.parse.call(A.JSON, a)
            } catch (b) {
                return !1
            }
        },
        Y = function(a) {
            return Object.prototype.toString.call(a)
        },
        ad = Y(0),
        bd = Y(new Date(0)),
        cd = Y(!0),
        dd = Y(""),
        ed = Y({}),
        fd = Y([]),
        gd = function(a, b) {
            if (b)
                for (var c = 0, d = b.length; c < d; ++c)
                    if (a === b[c]) throw new TypeError("Converting circular structure to JSON");
            d = typeof a;
            if (d !== "undefined") {
                c = Array.prototype.slice.call(b || [], 0);
                c[c.length] = a;
                b = [];
                var e = Y(a);
                if (a != null && typeof a.toJSON === "function" && (Object.prototype.hasOwnProperty.call(a,
                        "toJSON") || (e !== fd || a.constructor !== Array && a.constructor !== Object) && (e !== ed || a.constructor !== Array && a.constructor !== Object) && e !== dd && e !== ad && e !== cd && e !== bd)) return gd(a.toJSON.call(a), c);
                if (a == null) b[b.length] = "null";
                else if (e === ad) a = Number(a), isNaN(a) || isNaN(a - a) ? a = "null" : a === -0 && 1 / a < 0 && (a = "-0"), b[b.length] = String(a);
                else if (e === cd) b[b.length] = String(!!Number(a));
                else {
                    if (e === bd) return gd(a.toISOString.call(a), c);
                    if (e === fd && Y(a.length) === ad) {
                        b[b.length] = "[";
                        var f = 0;
                        for (d = Number(a.length) >> 0; f < d; ++f) f &&
                            (b[b.length] = ","), b[b.length] = gd(a[f], c) || "null";
                        b[b.length] = "]"
                    } else if (e == dd && Y(a.length) === ad) {
                        b[b.length] = '"';
                        f = 0;
                        for (c = Number(a.length) >> 0; f < c; ++f) d = String.prototype.charAt.call(a, f), e = String.prototype.charCodeAt.call(a, f), b[b.length] = d === "\b" ? "\\b" : d === "\f" ? "\\f" : d === "\n" ? "\\n" : d === "\r" ? "\\r" : d === "\t" ? "\\t" : d === "\\" || d === '"' ? "\\" + d : e <= 31 ? "\\u" + (e + 65536).toString(16).substr(1) : e >= 32 && e <= 65535 ? d : "\ufffd";
                        b[b.length] = '"'
                    } else if (d === "object") {
                        b[b.length] = "{";
                        d = 0;
                        for (f in a) Object.prototype.hasOwnProperty.call(a,
                            f) && (e = gd(a[f], c), e !== void 0 && (d++ && (b[b.length] = ","), b[b.length] = gd(f), b[b.length] = ":", b[b.length] = e));
                        b[b.length] = "}"
                    } else return
                }
                return b.join("")
            }
        },
        hd = /[\0-\x07\x0b\x0e-\x1f]/,
        id = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/,
        jd = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/,
        kd = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/,
        ld = /"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g,
        md = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g,
        nd = /[ \t\n\r]+/g,
        od = /[^"]:/,
        pd = /""/g,
        qd = /true|false|null/g,
        rd = /00/,
        sd = /[\{]([^0\}]|0[^:])/,
        td = /(^|\[)[,:]|[,:](\]|\}|[,:]|$)/,
        ud = /[^\[,:][\[\{]/,
        vd = /^(\{|\}|\[|\]|,|:|0)+/,
        wd = /\u2028/g,
        xd = /\u2029/g,
        yd = function(a) {
            a = String(a);
            if (hd.test(a) || id.test(a) || jd.test(a) || kd.test(a)) return !1;
            var b = a.replace(ld, '""');
            b = b.replace(md, "0");
            b = b.replace(nd, "");
            if (od.test(b)) return !1;
            b = b.replace(pd, "0");
            b = b.replace(qd, "0");
            if (rd.test(b) || sd.test(b) || td.test(b) || ud.test(b) || !b || (b = b.replace(vd, ""))) return !1;
            a = a.replace(wd, "\\u2028").replace(xd,
                "\\u2029");
            b = void 0;
            try {
                b = $c ? [X(a)] : eval("(function (var_args) {\n  return Array.prototype.slice.call(arguments, 0);\n})(\n" + a + "\n)")
            } catch (c) {
                return !1
            }
            return b && b.length === 1 ? b[0] : !1
        },
        zd = function() {
            var a = ((A.document || {}).scripts || []).length;
            if ((Yc === void 0 || $c === void 0 || Zc !== a) && Zc !== -1) {
                Yc = $c = !1;
                Zc = -1;
                try {
                    try {
                        $c = !!A.JSON && A.JSON.stringify.call(A.JSON, {
                            a: [3, !0, new Date(0)],
                            c: function() {}
                        }) === '{"a":[3,true,"1970-01-01T00:00:00.000Z"]}' && X("true") === !0 && X('[{"a":3}]')[0].a === 3
                    } catch (b) {}
                    Yc = $c && !X("[00]") &&
                        !X('"\u0007"') && !X('"\\0"') && !X('"\\v"')
                } finally {
                    Zc = a
                }
            }
        },
        Ad = function(a) {
            if (Zc === -1) return !1;
            zd();
            return (Yc ? X : yd)(a)
        },
        Bd = function(a) {
            if (Zc !== -1) return zd(), $c ? A.JSON.stringify.call(A.JSON, a) : gd(a)
        },
        Cd = !Date.prototype.toISOString || typeof Date.prototype.toISOString !== "function" || (new Date(0)).toISOString() !== "1970-01-01T00:00:00.000Z",
        Dd = function() {
            var a = Date.prototype.getUTCFullYear.call(this);
            return [a < 0 ? "-" + String(1E6 - a).substr(1) : a <= 9999 ? String(1E4 + a).substr(1) : "+" + String(1E6 + a).substr(1), "-", String(101 +
                Date.prototype.getUTCMonth.call(this)).substr(1), "-", String(100 + Date.prototype.getUTCDate.call(this)).substr(1), "T", String(100 + Date.prototype.getUTCHours.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCMinutes.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCSeconds.call(this)).substr(1), ".", String(1E3 + Date.prototype.getUTCMilliseconds.call(this)).substr(1), "Z"].join("")
        };
    Date.prototype.toISOString = Cd ? Dd : Date.prototype.toISOString;
    var Ed = function(a) {
            this.ha = a;
            this.count = this.count = 0
        },
        Fd = function(a, b, c) {
            b ? a.count += b : a.count++;
            a.ha && (c === void 0 || c) && a.ha()
        };
    Ed.prototype.get = function() {
        return this.count
    };
    Ed.prototype.reset = function() {
        this.count = 0
    };
    var Hd = function() {
            var a = !0,
                b = this;
            a = a === void 0 ? !0 : a;
            this.M = new Map;
            this.S = !1;
            this.ya = "/js/gen_204";
            var c = Rb();
            c && (this.url = "" + c + this.ya, c = W("gen204logger") || {}, this.W = c.interval, this.ia = c.rate, this.S = c.Pa, a && this.url && Gd(this), document.addEventListener("visibilitychange", this.flush), this.flush(), document.addEventListener("visibilitychange", function() {
                document.visibilityState === "hidden" && b.flush()
            }), document.addEventListener("pagehide", this.flush.bind(this)))
        },
        Jd = function(a) {
            var b = M.dm || [];
            if (b && b.length !==
                0) {
                b = y(b);
                for (var c = b.next(); !c.done; c = b.next()) Fd(Id(a, c.value), 1, !1);
                delete M.dm;
                a.flush()
            }
        },
        Id = function(a, b) {
            a.M.has(b) || a.M.set(b, new Ed(a.S ? void 0 : function() {
                a.flush()
            }));
            return a.M.get(b)
        };
    Hd.prototype.flush = function() {
        var a = this;
        if (this.url && this.ia) {
            Jd(this);
            for (var b = "", c = y(this.M), d = c.next(); !d.done; d = c.next()) {
                var e = y(d.value);
                d = e.next().value;
                e = e.next().value;
                var f = e.get();
                f > 0 && (b += b.length > 0 ? "&" : "", b += "c=", b += encodeURIComponent(d + ":" + f), e.reset());
                if (b.length > 1E3) break
            }
            if (b !== "" && Math.random() < this.ia) {
                try {
                    var g = AbortSignal.timeout(3E4)
                } catch (k) {
                    g = void 0
                }
                fetch(this.url + "?" + b, {
                    method: "GET",
                    mode: "no-cors",
                    signal: g
                }).catch(function() {}).finally(function() {
                    Gd(a)
                })
            }
        }
    };
    Hd.prototype.setInterval = function(a) {
        this.W = a
    };
    var Gd = function(a) {
        a.W && a.S && setTimeout(function() {
            a.flush()
        }, a.W)
    };
    var Kd = function() {
        this.blockSize = -1
    };
    var Ld = function() {
        this.blockSize = -1;
        this.blockSize = 64;
        this.g = [];
        this.T = [];
        this.za = [];
        this.O = [];
        this.O[0] = 128;
        for (var a = 1; a < this.blockSize; ++a) this.O[a] = 0;
        this.P = this.C = 0;
        this.reset()
    };
    ra(Ld, Kd);
    Ld.prototype.reset = function() {
        this.g[0] = 1732584193;
        this.g[1] = 4023233417;
        this.g[2] = 2562383102;
        this.g[3] = 271733878;
        this.g[4] = 3285377520;
        this.P = this.C = 0
    };
    var Md = function(a, b, c) {
        c || (c = 0);
        var d = a.za;
        if (typeof b === "string")
            for (var e = 0; e < 16; e++) d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4;
        else
            for (e = 0; e < 16; e++) d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
        for (e = 16; e < 80; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = (f << 1 | f >>> 31) & 4294967295
        }
        b = a.g[0];
        c = a.g[1];
        var g = a.g[2],
            k = a.g[3],
            h = a.g[4];
        for (e = 0; e < 80; e++) {
            if (e < 40)
                if (e < 20) {
                    f = k ^ c & (g ^ k);
                    var l = 1518500249
                } else f = c ^ g ^ k, l = 1859775393;
            else e < 60 ? (f = c & g | k & (c | g), l = 2400959708) :
                (f = c ^ g ^ k, l = 3395469782);
            f = (b << 5 | b >>> 27) + f + h + l + d[e] & 4294967295;
            h = k;
            k = g;
            g = (c << 30 | c >>> 2) & 4294967295;
            c = b;
            b = f
        }
        a.g[0] = a.g[0] + b & 4294967295;
        a.g[1] = a.g[1] + c & 4294967295;
        a.g[2] = a.g[2] + g & 4294967295;
        a.g[3] = a.g[3] + k & 4294967295;
        a.g[4] = a.g[4] + h & 4294967295
    };
    Ld.prototype.update = function(a, b) {
        if (a != null) {
            b === void 0 && (b = a.length);
            for (var c = b - this.blockSize, d = 0, e = this.T, f = this.C; d < b;) {
                if (f == 0)
                    for (; d <= c;) Md(this, a, d), d += this.blockSize;
                if (typeof a === "string")
                    for (; d < b;) {
                        if (e[f] = a.charCodeAt(d), ++f, ++d, f == this.blockSize) {
                            Md(this, e);
                            f = 0;
                            break
                        }
                    } else
                        for (; d < b;)
                            if (e[f] = a[d], ++f, ++d, f == this.blockSize) {
                                Md(this, e);
                                f = 0;
                                break
                            }
            }
            this.C = f;
            this.P += b
        }
    };
    Ld.prototype.digest = function() {
        var a = [],
            b = this.P * 8;
        this.C < 56 ? this.update(this.O, 56 - this.C) : this.update(this.O, this.blockSize - (this.C - 56));
        for (var c = this.blockSize - 1; c >= 56; c--) this.T[c] = b & 255, b /= 256;
        Md(this, this.T);
        for (c = b = 0; c < 5; c++)
            for (var d = 24; d >= 0; d -= 8) a[b] = this.g[c] >> d & 255, ++b;
        return a
    };
    var Nd = function() {
        this.aa = new Ld
    };
    Nd.prototype.reset = function() {
        this.aa.reset()
    };
    var Od = C.crypto,
        Pd = !1,
        Qd = 0,
        Rd = 0,
        Sd = 1,
        Td = 0,
        Ud = "",
        Vd = function(a) {
            a = a || C.event;
            var b = a.screenX + a.clientX << 16;
            b += a.screenY + a.clientY;
            b *= (new Date).getTime() % 1E6;
            Sd = Sd * b % Td;
            Qd > 0 && ++Rd == Qd && Fb("mousemove", Vd, "remove", "de")
        },
        Wd = function(a) {
            var b = new Nd;
            a = unescape(encodeURIComponent(a));
            for (var c = [], d = 0, e = a.length; d < e; ++d) c.push(a.charCodeAt(d));
            b.aa.update(c);
            b = b.aa.digest();
            a = "";
            for (c = 0; c < b.length; c++) a += "0123456789ABCDEF".charAt(Math.floor(b[c] / 16)) + "0123456789ABCDEF".charAt(b[c] % 16);
            return a
        };
    Pd = !!Od && typeof Od.getRandomValues == "function";
    Pd || (Td = (screen.width * screen.width + screen.height) * 1E6, Ud = Wd(D.cookie + "|" + D.location + "|" + (new Date).getTime() + "|" + Math.random()), Qd = W("random/maxObserveMousemove") || 0, Qd != 0 && Fb("mousemove", Vd, "add", "at"));
    var Xd = function() {
            var a = M.onl;
            if (!a) {
                a = F();
                M.onl = a;
                var b = F();
                a.e = function(c) {
                    var d = b[c];
                    d && (delete b[c], d())
                };
                a.a = function(c, d) {
                    b[c] = d
                };
                a.r = function(c) {
                    delete b[c]
                }
            }
            return a
        },
        Yd = function(a, b) {
            b = b.onload;
            return typeof b === "function" ? (Xd().a(a, b), b) : null
        },
        Zd = function(a) {
            I(/^\w+$/.test(a), "Unsupported id - " + a);
            return 'onload="window.___jsl.onl.e(&#34;' + a + '&#34;)"'
        },
        $d = function(a) {
            Xd().r(a)
        };
    var ae = {
            allowtransparency: "true",
            frameborder: "0",
            hspace: "0",
            marginheight: "0",
            marginwidth: "0",
            scrolling: "no",
            style: "",
            tabindex: "0",
            vspace: "0",
            width: "100%"
        },
        be = {
            allowtransparency: !0,
            onload: !0
        },
        ce = 0,
        de = function(a) {
            I(!a || Db.test(a), "Illegal url for new iframe - " + a)
        },
        ee = function(a, b, c, d, e) {
            de(c.src);
            var f, g = Yd(d, c),
                k = g ? Zd(d) : "";
            try {
                document.all && (f = a.createElement('<iframe frameborder="' + pb(String(c.frameborder)) + '" scrolling="' + pb(String(c.scrolling)) + '" ' + k + ' name="' + pb(String(c.name)) + '"/>'))
            } catch (l) {} finally {
                f ||
                    (f = (a ? new db(cb(a)) : ua || (ua = new db)).createElement("IFRAME"), g && (f.onload = function() {
                        f.onload = null;
                        g.call(this)
                    }, $d(d)))
            }
            f.setAttribute("ng-non-bindable", "");
            for (var h in c) a = c[h], h === "style" && typeof a === "object" ? H(a, f.style) : be[h] || f.setAttribute(h, String(a));
            (h = e && e.beforeNode || null) || e && e.dontclear || Kb(b);
            b.insertBefore(f, h);
            f = h ? h.previousSibling : b.lastChild;
            c.allowtransparency && (f.allowTransparency = !0);
            return f
        };
    var fe = /^:[\w]+$/,
        ge = /:([a-zA-Z_]+):/g,
        he = function() {
            var a = Wc() || "0",
                b = Xc();
            var c = Wc() || a;
            var d = Xc(),
                e = "";
            c && (e += "u/" + encodeURIComponent(String(c)) + "/");
            d && (e += "b/" + encodeURIComponent(String(d)) + "/");
            c = e || null;
            (e = (d = W("isLoggedIn") === !1) ? "_/im/" : "") && (c = "");
            var f = W("iframes/:socialhost:"),
                g = W("iframes/:im_socialhost:");
            return Eb = {
                socialhost: f,
                ctx_socialhost: d ? g : f,
                session_index: a,
                session_delegate: b,
                session_prefix: c,
                im_prefix: e
            }
        },
        ie = function(a, b) {
            return he()[b] || ""
        },
        je = function(a) {
            return function(b,
                c) {
                return a ? he()[c] || a[c] || "" : he()[c] || ""
            }
        };
    var ke = function(a) {
            var b;
            a.match(/^https?%3A/i) && (b = decodeURIComponent(a));
            a = b ? b : a;
            return Cb(document, a)
        },
        le = function(a) {
            a = a || "canonical";
            for (var b = document.getElementsByTagName("link"), c = 0, d = b.length; c < d; c++) {
                var e = b[c],
                    f = e.getAttribute("rel");
                if (f && f.toLowerCase() == a && (e = e.getAttribute("href")) && (e = ke(e)) && e.match(/^https?:\/\/[\w\-_\.]+/i) != null) return e
            }
            return window.location.href
        };
    var me = {
            se: "0"
        },
        ne = {
            post: !0
        },
        oe = {
            style: "position:absolute;top:-10000px;width:450px;margin:0px;border-style:none"
        },
        pe = "onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" "),
        qe = E(M, "WI", F()),
        re = function(a, b, c) {
            var d;
            var e = {};
            var f = d = a;
            a == "plus" && b.action && (d = a + "_" + b.action, f = a + "/" + b.action);
            (d = U("iframes/" + d + "/url")) || (d = ":im_socialhost:/:session_prefix::im_prefix:_/widget/render/" + f + "?usegapi=1");
            for (var g in me) e[g] = g + "/" + (b[g] || me[g]) + "/";
            e = Cb(D, d.replace(ge,
                je(e)));
            g = "iframes/" + a + "/params/";
            f = {};
            H(b, f);
            (d = U("lang") || U("gwidget/lang")) && (f.hl = d);
            ne[a] || (f.origin = window.location.origin || window.location.protocol + "//" + window.location.host);
            f.exp = U(g + "exp");
            if (g = U(g + "location"))
                for (d = 0; d < g.length; d++) {
                    var k = g[d];
                    f[k] = C.location[k]
                }
            switch (a) {
                case "plus":
                case "follow":
                    g = f.href;
                    d = b.action ? void 0 : "publisher";
                    g = (g = typeof g == "string" ? g : void 0) ? ke(g) : le(d);
                    f.url = g;
                    delete f.href;
                    break;
                case "plusone":
                    g = (g = b.href) ? ke(g) : le();
                    f.url = g;
                    g = b.db;
                    d = U();
                    g == null && d && (g = d.db,
                        g == null && (g = d.gwidget && d.gwidget.db));
                    f.db = g || void 0;
                    g = b.ecp;
                    d = U();
                    g == null && d && (g = d.ecp, g == null && (g = d.gwidget && d.gwidget.ecp));
                    f.ecp = g || void 0;
                    delete f.href;
                    break;
                case "signin":
                    f.url = le()
            }
            M.ILI && (f.iloader = "1");
            delete f["data-onload"];
            delete f.rd;
            for (var h in me) f[h] && delete f[h];
            f.gsrc = U("iframes/:source:");
            h = U("inline/css");
            typeof h !== "undefined" && c > 0 && h >= c && (f.ic = "1");
            h = /^#|^fr-/;
            c = {};
            for (var l in f) G(f, l) && h.test(l) && (c[l.replace(h, "")] = f[l], delete f[l]);
            l = U("iframes/" + a + "/params/si") == "q" ? f :
                c;
            h = Mc();
            for (var m in h) !G(h, m) || G(f, m) || G(c, m) || (l[m] = h[m]);
            m = [].concat(pe);
            (l = U("iframes/" + a + "/methods")) && typeof l === "object" && hb.test(l.push) && (m = m.concat(l));
            for (var n in b) G(b, n) && /^on/.test(n) && (a != "plus" || n != "onconnect") && (m.push(n), delete f[n]);
            delete f.callback;
            c._methods = m.join(",");
            return Ab(e, f, c)
        },
        se = ["style", "data-gapiscan"],
        ue = function(a) {
            for (var b = F(), c = a.nodeName.toLowerCase().indexOf("g:") != 0, d = a.attributes.length, e = 0; e < d; e++) {
                var f = a.attributes[e],
                    g = f.name,
                    k = f.value;
                ib.call(se,
                    g) >= 0 || c && g.indexOf("data-") != 0 || k === "null" || "specified" in f && !f.specified || (c && (g = g.substr(5)), b[g.toLowerCase()] = k)
            }
            a = a.style;
            (c = te(a && a.height)) && (b.height = String(c));
            (a = te(a && a.width)) && (b.width = String(a));
            return b
        },
        te = function(a) {
            var b = void 0;
            typeof a === "number" ? b = a : typeof a === "string" && (b = parseInt(a, 10));
            return b
        },
        xe = function() {
            var a = M.drw;
            Sc(function(b) {
                if (a !== b.id && b.state != 4 && b.type != "share") {
                    var c = b.id,
                        d = b.type,
                        e = b.url;
                    b = b.userParams;
                    var f = D.getElementById(c);
                    if (f) {
                        var g = re(d, b, 0);
                        g ? (f =
                            f.parentNode, ve(e) !== ve(g) && (b.dontclear = !0, b.rd = !0, b.ri = !0, b.type = d, we(f, b), (d = V[f.lastChild.id]) && (d.oid = c), Tc(c, 4))) : delete V[c]
                    } else delete V[c]
                }
            })
        },
        ve = function(a) {
            var b = RegExp("(\\?|&)ic=1");
            return a.replace(/#.*/, "").replace(b, "")
        };
    var Ra = ea(["data-"]),
        ye, ze, Ae, Be, Ce, De = /(?:^|\s)g-((\S)*)(?:$|\s)/,
        Ee = {
            plusone: !0,
            autocomplete: !0,
            profile: !0,
            signin: !0,
            signin2: !0
        };
    ye = E(M, "SW", F());
    ze = E(M, "SA", F());
    Ae = E(M, "SM", F());
    Be = E(M, "FW", []);
    Ce = null;
    var Fe = function(a, b) {
            return (typeof a === "string" ? document.getElementById(a) : a) || b
        },
        He = function(a, b) {
            Ge(void 0, !1, a, b)
        },
        Ge = function(a, b, c, d) {
            N("ps0", !0);
            c = Fe(c, D);
            var e = D.documentMode;
            if (c.querySelectorAll && (!e || e > 8)) {
                e = d ? [d] : qb(ye).concat(qb(ze)).concat(qb(Ae));
                for (var f = [], g = 0; g < e.length; g++) {
                    var k = e[g];
                    f.push(".g-" + k, "g\\:" + k)
                }
                e = c.querySelectorAll(f.join(","))
            } else e = c.getElementsByTagName("*");
            c = F();
            for (f = 0; f < e.length; f++) {
                g = e[f];
                var h = g;
                k = d;
                var l = h.nodeName.toLowerCase(),
                    m = void 0;
                if (h.hasAttribute("data-gapiscan")) k =
                    null;
                else {
                    var n = l.indexOf("g:");
                    n == 0 ? m = l.substr(2) : (n = (n = String(h.className || h.getAttribute("class"))) && De.exec(n)) && (m = n[1]);
                    k = !m || !(ye[m] || ze[m] || Ae[m]) || k && m !== k ? null : m
                }
                k && (Ee[k] || g.nodeName.toLowerCase().indexOf("g:") == 0 || qb(ue(g)).length != 0) && (ab(g), E(c, k, []).push(g))
            }
            if (b)
                for (var q in c)
                    for (b = c[q], d = 0; d < b.length; d++) b[d].setAttribute("data-onload", !0);
            for (var v in c) Be.push(v);
            N("ps1", !0);
            if ((q = Be.join(":")) || a) try {
                J.load(q, a)
            } catch (t) {
                Pc.log(t);
                return
            }
            if (Ie(Ce || {}))
                for (var w in c) {
                    a = c[w];
                    v =
                        0;
                    for (b = a.length; v < b; v++) a[v].removeAttribute("data-gapiscan");
                    Je(w)
                } else {
                    d = [];
                    for (w in c)
                        for (a = c[w], v = 0, b = a.length; v < b; v++) e = a[v], Ke(w, e, ue(e), d, b);
                    Le(q, d)
                }
        },
        Me = function(a) {
            var b = E(J, a, {});
            b.go || (b.go = function(c) {
                return He(c, a)
            }, b.render = function(c, d) {
                d = d || {};
                d.type = a;
                return we(c, d)
            })
        },
        Ne = function(a) {
            ye[a] = !0
        },
        Oe = function(a) {
            ze[a] = !0
        },
        Pe = function(a) {
            Ae[a] = !0
        };
    var Je = function(a, b) {
            var c = Ob(a);
            b && c ? (c(b), (c = b.iframeNode) && c.setAttribute("data-gapiattached", !0)) : J.load(a, function() {
                var d = Ob(a),
                    e = b && b.iframeNode,
                    f = b && b.userParams;
                e && d ? (d(b), e.setAttribute("data-gapiattached", !0)) : (d = J[a].go, a == "signin2" ? d(e, f) : d(e && e.parentNode, f))
            })
        },
        Ie = function() {
            return !1
        },
        Le = function() {},
        Ke = function(a, b, c, d, e, f) {
            switch (Qe(b, a, f)) {
                case 0:
                    a = Ae[a] ? a + "_annotation" : a;
                    d = {};
                    d.iframeNode = b;
                    d.userParams = c;
                    Je(a, d);
                    break;
                case 1:
                    if (b.parentNode) {
                        for (var g in c) {
                            if (f = G(c, g)) f = c[g],
                                f = !!f && typeof f === "object" && (!f.toString || f.toString === Object.prototype.toString || f.toString === Array.prototype.toString);
                            if (f) try {
                                c[g] = Bd(c[g])
                            } catch (K) {
                                delete c[g]
                            }
                        }
                        var k = !0;
                        c.dontclear && (k = !1);
                        delete c.dontclear;
                        Rc();
                        f = re(a, c, e);
                        g = {
                            allowPost: 1,
                            attributes: oe
                        };
                        g.dontclear = !k;
                        e = {};
                        e.userParams = c;
                        e.url = f;
                        e.type = a;
                        if (c.rd) var h = b;
                        else h = document.createElement("div"), b.dataset.gapistub = !0, h.style.cssText = "position:absolute;width:450px;left:-10000px;", b.parentNode.insertBefore(h, b);
                        e.siteElement = h;
                        h.id ||
                            (b = h, E(qe, a, 0), k = "___" + a + "_" + qe[a]++, b.id = k);
                        b = F();
                        b[">type"] = a;
                        H(c, b);
                        k = f;
                        c = h;
                        f = g || {};
                        b = f.attributes || {};
                        I(!(f.allowPost || f.forcePost) || !b.onload, "onload is not supported by post iframe (allowPost or forcePost)");
                        g = b = k;
                        fe.test(b) && (g = W("iframes/" + g.substring(1) + "/url"), I(!!g, "Unknown iframe url config for - " + b));
                        k = Cb(D, g.replace(ge, ie));
                        b = c.ownerDocument || D;
                        h = 0;
                        do g = f.id || ["I", ce++, "_", (new Date).getTime()].join(""); while (b.getElementById(g) && ++h < 5);
                        I(h < 5, "Error creating iframe id");
                        h = {};
                        var l = {};
                        b.documentMode && b.documentMode < 9 && (h.hostiemode = b.documentMode);
                        H(f.queryParams || {}, h);
                        H(f.fragmentParams || {}, l);
                        var m = f.pfname;
                        var n = F();
                        W("iframes/dropLegacyIdParam") || (n.id = g);
                        n._gfid = g;
                        n.parent = b.location.protocol + "//" + b.location.host;
                        var q = L(b.location.href, "parent");
                        m = m || "";
                        !m && q && (q = L(b.location.href, "_gfid", "") || L(b.location.href, "id", ""), m = L(b.location.href, "pfname", ""), m = q ? m + "/" + q : "");
                        m || (q = Ad(L(b.location.href, "jcp", ""))) && typeof q == "object" && (m = (m = q.id) ? q.pfname + "/" + m : "");
                        n.pfname =
                            m;
                        f.connectWithJsonParam && (q = {}, q.jcp = Bd(n), n = q);
                        q = L(k, "rpctoken") || h.rpctoken || l.rpctoken;
                        if (!q) {
                            if (!(q = f.rpctoken)) {
                                q = String;
                                m = Math;
                                var v = m.round,
                                    w = Id;
                                Hd.ma || (Hd.ma = new Hd);
                                Fd(w(Hd.ma, 50));
                                Pd ? (w = new C.Uint32Array(1), Od.getRandomValues(w), w = Number("0." + w[0])) : (w = Sd, w += parseInt(Ud.substr(0, 20), 16), Ud = Wd(Ud), w /= Td + 1.2089258196146292E24);
                                q = q(v.call(m, w * 1E8))
                            }
                            n.rpctoken = q
                        }
                        f.rpctoken = q;
                        H(n, f.connectWithQueryParams ? h : l);
                        q = b.location.href;
                        n = F();
                        (m = L(q, "_bsh", M.bsh)) && (n._bsh = m);
                        (q = Mb(q)) && (n.jsh = q);
                        f.hintInFragment ?
                            H(n, l) : H(n, h);
                        k = Ab(k, h, l, f.paramsSerializer);
                        l = F();
                        H(ae, l);
                        H(f.attributes, l);
                        l.name = l.id = g;
                        l.src = k;
                        f.eurl = k;
                        h = f || {};
                        n = !!h.allowPost;
                        if (h.forcePost || n && k.length > 2E3) {
                            h = xb(k);
                            l.src = "";
                            f.dropDataPostorigin || (l["data-postorigin"] = k);
                            k = ee(b, c, l, g);
                            if (navigator.userAgent.indexOf("WebKit") != -1) {
                                var t = k.contentWindow.document;
                                t.open();
                                l = t.createElement("div");
                                n = {};
                                q = g + "_inner";
                                n.name = q;
                                n.src = "";
                                n.style = "display:none";
                                ee(b, l, n, q, f)
                            }
                            l = (f = h.query[0]) ? f.split("&") : [];
                            f = [];
                            for (n = 0; n < l.length; n++) q = l[n].split("=",
                                2), f.push([decodeURIComponent(q[0]), decodeURIComponent(q[1])]);
                            h.query = [];
                            l = yb(h);
                            I(Db.test(l), "Invalid URL: " + l);
                            h = b.createElement("form");
                            h.method = "POST";
                            h.target = g;
                            h.style.display = "none";
                            g = Xa(l);
                            g !== void 0 && (h.action = g);
                            for (g = 0; g < f.length; g++) l = b.createElement("input"), l.type = "hidden", l.name = f[g][0], l.value = f[g][1], h.appendChild(l);
                            c.appendChild(h);
                            h.submit();
                            h.parentNode.removeChild(h);
                            t && t.close();
                            t = k
                        } else t = ee(b, c, l, g, f);
                        e.iframeNode = t;
                        e.id = t.getAttribute("id");
                        t = e.id;
                        c = F();
                        c.id = t;
                        c.userParams =
                            e.userParams;
                        c.url = e.url;
                        c.type = e.type;
                        c.state = 1;
                        V[t] = c;
                        t = e
                    } else t = null;
                    t && ((e = t.id) && d.push(e), Je(a, t))
            }
        },
        Qe = function(a, b, c) {
            if (a && a.nodeType === 1 && b) {
                if (c) return 1;
                if (Ae[b]) {
                    if (Lb[a.nodeName.toLowerCase()]) return (a = a.innerHTML) && a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") ? 0 : 1
                } else {
                    if (ze[b]) return 0;
                    if (ye[b]) return 1
                }
            }
            return null
        },
        we = function(a, b) {
            var c = b.type;
            delete b.type;
            var d = Fe(a);
            if (d) {
                a = {};
                for (var e in b) G(b, e) && (a[e.toLowerCase()] = b[e]);
                a.rd = 1;
                (b = !!a.ri) && delete a.ri;
                e = [];
                Ke(c, d, a, e, 0, b);
                Le(c,
                    e)
            } else Pc.log("gapi." + c + ".render: missing element " + typeof a === "string" ? a : "")
        };
    E(J, "platform", {}).go = He;
    Ie = function(a) {
        for (var b = ["_c", "jsl", "h"], c = 0; c < b.length && a; c++) a = a[b[c]];
        b = Mb(eb.href);
        return !a || a.indexOf("n;") != 0 && b.indexOf("n;") != 0 && a !== b
    };
    Le = function(a, b) {
        Re(a, b)
    };
    var Hb = function(a) {
            Ge(a, !0)
        },
        Se = function(a, b) {
            b = b || [];
            for (var c = 0; c < b.length; ++c) a(b[c]);
            for (a = 0; a < b.length; a++) Me(b[a])
        };
    O.push(["platform", function(a, b, c) {
        Ce = c;
        (b || c.features) && Be.push(b || c.features.join(":"));
        Se(Ne, a);
        Se(Oe, c._c.annotation);
        Se(Pe, c._c.bimodal);
        Ic();
        Gc();
        if (U("parsetags") != "explicit") {
            Nb(a);
            Nc(Mc()) && !U("disableRealtimeCallback") && Rc();
            if (c && (a = c.callback)) {
                var d = rb(a);
                delete c.callback
            }
            Jb(function() {
                Hb(d)
            })
        }
    }]);
    J._pl = !0;
    var Te = function(a) {
        a = (a = V[a]) ? a.oid : void 0;
        if (a) {
            var b = D.getElementById(a);
            b && b.parentNode.removeChild(b);
            delete V[a];
            Te(a)
        }
    };
    var Ue = /^\{h:'/,
        Ve = /^!_/,
        We = "",
        Re = function(a, b) {
            function c() {
                Fb("message", d, "remove", "de")
            }

            function d(f) {
                var g = f.data,
                    k = f.origin;
                if (Xe(g, b)) {
                    var h = e;
                    e = !1;
                    h && N("rqe");
                    Ye(a, function() {
                        h && N("rqd");
                        c();
                        for (var l = E(M, "RPMQ", []), m = 0; m < l.length; m++) l[m]({
                            data: g,
                            origin: k
                        })
                    })
                }
            }
            if (b.length !== 0) {
                We = L(eb.href, "pfname", "");
                var e = !0;
                Fb("message", d, "add", "at");
                vc(a, c)
            }
        },
        Xe = function(a, b) {
            a = String(a);
            if (Ue.test(a)) return !0;
            var c = !1;
            Ve.test(a) && (c = !0, a = a.substr(2));
            if (!/^\{/.test(a)) return !1;
            var d = Ad(a);
            if (!d) return !1;
            a = d.f;
            if (d.s && a && ib.call(b, a) != -1) {
                if (d.s === "_renderstart" || d.s === We + "/" + a + "::_renderstart")
                    if (d = d.a && d.a[c ? 0 : 1], b = D.getElementById(a), Tc(a, 2), d && b && (c = b.parentNode, d.width && d.height)) {
                        a: {
                            a = d || {};
                            if (Qc()) {
                                var e = b.id;
                                if (e) {
                                    d = (d = V[e]) ? d.state : void 0;
                                    if (d === 1 || d === 4) break a;
                                    Te(e)
                                }
                            }(d = c.nextSibling) && d.dataset && d.dataset.gapistub && (c.parentNode.removeChild(d), c.style.cssText = "");d = a.width;
                            var f = a.height,
                                g = c.style;g.textIndent = "0";g.margin = "0";g.padding = "0";g.background = "transparent";g.borderStyle = "none";
                            g.cssFloat = "none";g.styleFloat = "none";g.lineHeight = "normal";g.fontSize = "1px";g.verticalAlign = "baseline";c = c.style;c.display = "inline-block";g = b.style;g.position = "static";g.left = "0";g.top = "0";g.visibility = "visible";d && (c.width = g.width = d + "px");f && (c.height = g.height = f + "px");a.verticalAlign && (c.verticalAlign = a.verticalAlign);e && Tc(e, 3)
                        }
                        b["data-csi-wdt"] = (new Date).getTime()
                    }
                return !0
            }
            return !1
        },
        Ye = function(a, b) {
            vc(a, b)
        };
    var Ze = function(a, b) {
        this.Y = a;
        a = b || {};
        this.Ea = Number(a.maxAge) || 0;
        this.ga = a.domain;
        this.na = a.path;
        this.Ja = !!a.secure
    };
    Ze.prototype.read = function() {
        for (var a = this.Y + "=", b = document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d.indexOf(a) == 0) return d.substr(a.length)
        }
    };
    Ze.prototype.write = function(a, b) {
        if (!$e.test(this.Y)) throw "Invalid cookie name";
        if (!af.test(a)) throw "Invalid cookie value";
        a = this.Y + "=" + a;
        this.ga && (a += ";domain=" + this.ga);
        this.na && (a += ";path=" + this.na);
        b = typeof b === "number" ? b : this.Ea;
        if (b >= 0) {
            var c = new Date;
            c.setSeconds(c.getSeconds() + b);
            a += ";expires=" + c.toUTCString()
        }
        this.Ja && (a += ";secure");
        document.cookie = a;
        return !0
    };
    Ze.prototype.clear = function() {
        this.write("", 0)
    };
    var af = /^[-+/_=.:|%&a-zA-Z0-9@]*$/,
        $e = /^[A-Z_][A-Z0-9_]{0,63}$/;
    Ze.iterate = function(a) {
        for (var b = document.cookie.split(/;\s*/), c = 0; c < b.length; ++c) {
            var d = b[c].split("="),
                e = d.shift();
            a(e, d.join("="))
        }
    };
    var bf = function(a) {
        this.N = a
    };
    bf.prototype.read = function() {
        if (Z.hasOwnProperty(this.N)) return Z[this.N]
    };
    bf.prototype.write = function(a) {
        Z[this.N] = a;
        return !0
    };
    bf.prototype.clear = function() {
        delete Z[this.N]
    };
    var Z = {};
    bf.iterate = function(a) {
        for (var b in Z) Z.hasOwnProperty(b) && a(b, Z[b])
    };
    var cf = window.location.protocol === "https:",
        df = cf || window.location.protocol === "http:" ? Ze : bf,
        ef = function(a) {
            var b = a.substr(1),
                c = "",
                d = window.location.hostname;
            if (b !== "") {
                c = parseInt(b, 10);
                if (isNaN(c)) return null;
                b = d.split(".");
                if (b.length < c - 1) return null;
                b.length == c - 1 && (d = "." + d)
            } else d = "";
            return {
                o: a.charAt(0) == "S",
                domain: d,
                B: c
            }
        },
        ff = function() {
            var a, b = null;
            df.iterate(function(c, d) {
                c.indexOf("G_AUTHUSER_") === 0 && (c = ef(c.substring(11)), !a || c.o && !a.o || c.o == a.o && c.B > a.B) && (a = c, b = d)
            });
            return {
                Ba: a,
                R: b
            }
        };

    function gf(a) {
        if (a.indexOf("GCSC") !== 0) return null;
        var b = {
            la: !1
        };
        a = a.substr(4);
        if (!a) return b;
        var c = a.charAt(0);
        a = a.substr(1);
        var d = a.lastIndexOf("_");
        if (d == -1) return b;
        var e = ef(a.substr(d + 1));
        if (e == null) return b;
        a = a.substring(0, d);
        if (a.charAt(0) !== "_") return b;
        d = c === "E" && e.o;
        return !d && (c !== "U" || e.o) || d && !cf ? b : {
            la: !0,
            o: d,
            Qa: a.substr(1),
            domain: e.domain,
            B: e.B
        }
    }
    var hf = function(a) {
            if (!a) return [];
            a = a.split("=");
            return a[1] ? a[1].split("|") : []
        },
        jf = function(a) {
            a = a.split(":");
            return {
                clientId: a[0].split("=")[1],
                La: hf(a[1]),
                Sa: hf(a[2]),
                Ra: hf(a[3])
            }
        },
        kf = function() {
            var a = ff(),
                b = a.Ba;
            a = a.R;
            if (a !== null) {
                var c;
                df.iterate(function(f, g) {
                    (f = gf(f)) && f.la && f.o == b.o && f.B == b.B && (c = g)
                });
                if (c) {
                    var d = jf(c),
                        e = d && d.La[Number(a)];
                    d = d && d.clientId;
                    if (e) return {
                        R: a,
                        Ka: e,
                        clientId: d
                    }
                }
            }
            return null
        };
    var mf = function() {
        this.fa = lf
    };
    p = mf.prototype;
    p.va = function() {
        this.X || (this.G = 0, this.X = !0, this.pa())
    };
    p.pa = function() {
        this.X && (this.fa() ? this.G = this.ba : this.G = Math.min((this.G || this.ba) * 2, 120), window.setTimeout(qa(this.pa, this), this.G * 1E3))
    };
    p.G = 0;
    p.ba = 2;
    p.fa = null;
    p.X = !1;
    var nf = null;
    Qc = function() {
        return M.oa = !0
    };
    Rc = function() {
        E(M, "dm", []).push(30);
        M.oa = !0;
        var a = kf();
        (a = a && a.R) && Hc("googleapis.config/sessionIndex", a);
        nf || (nf = E(M, "ss", new mf));
        a = nf;
        a.va && a.va()
    };
    var lf = function() {
        var a = kf(),
            b = a && a.Ka || null,
            c = a && a.clientId;
        vc("auth", {
            callback: function() {
                var d = C.gapi.auth,
                    e = {
                        client_id: c,
                        session_state: b
                    };
                d.checkSessionState(e, function(f) {
                    var g = e.session_state,
                        k = !!U("isLoggedIn");
                    f = U("debug/forceIm") ? !1 : g && f || !g && !f;
                    if (k = k !== f) Hc("isLoggedIn", f), Rc(), xe(), f || ((f = d.signOut) ? f() : (f = d.setToken) && f(null));
                    f = Mc();
                    var h = U("savedUserState");
                    g = d._guss(f.cookiepolicy);
                    h = h != g && typeof h != "undefined";
                    Hc("savedUserState", g);
                    (k || h) && Nc(f) && !U("disableRealtimeCallback") && d._pimf(f, !0)
                })
            }
        });
        return !0
    };
    O.unshift(["url", function(a, b, c) {
        !a || b && b !== "" || !a.endsWith(".js") || (a = a.substring(0, a.length - 3), b = a.lastIndexOf("/") + 1, b >= a.length || (a = a.substr(b).split(":").filter(function(d) {
            return !["api", "platform"].includes(d)
        }), c.features = a))
    }]);
    N("bs0", !0, window.gapi._bs);
    N("bs1", !0);
    delete window.gapi._bs;
    window.gapi.load("", {
        callback: window["gapi_onload"],
        _c: {
            url: "https://apis.google.com/js/plusone.js",
            jsl: {
                ci: {
                    "oauth-flow": {
                        authUrl: "https://accounts.google.com/o/oauth2/auth",
                        proxyUrl: "https://accounts.google.com/o/oauth2/postmessageRelay",
                        disableOpt: !0,
                        idpIframeUrl: "https://accounts.google.com/o/oauth2/iframe",
                        usegapi: !1
                    },
                    debug: {
                        reportExceptionRate: 1,
                        forceIm: !1,
                        rethrowException: !0,
                        host: "https://apis.google.com"
                    },
                    gen204logger: {
                        interval: 30000,
                        rate: 0.01,
                        batch: false
                    },
                    enableMultilogin: !0,
                    "googleapis.config": {
                        auth: {
                            useFirstPartyAuthV2: !0
                        },
                        root: "https://content.googleapis.com",
                        "root-1p": "https://clients6.google.com"
                    },
                    inline: {
                        css: 1
                    },
                    disableRealtimeCallback: !1,
                    drive_share: {
                        skipInitCommand: !0
                    },
                    csi: {
                        rate: .01
                    },
                    client: {
                        cors: !1
                    },
                    signInDeprecation: {
                        rate: 0
                    },
                    include_granted_scopes: !0,
                    llang: "fr",
                    iframes: {
                        youtube: {
                            params: {
                                location: ["search", "hash"]
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1",
                            methods: ["scroll", "openwindow"]
                        },
                        ytsubscribe: {
                            url: "https://www.youtube.com/subscribe_embed?usegapi=1"
                        },
                        plus_circle: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi=1"
                        },
                        plus_share: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare=true&usegapi=1"
                        },
                        rbr_s: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"
                        },
                        ":source:": "3p",
                        playemm: {
                            url: "https://play.google.com/work/embedded/search?usegapi=1&usegapi=1"
                        },
                        savetoandroidpay: {
                            url: "https://pay.google.com/gp/v/widget/save"
                        },
                        blogger: {
                            params: {
                                location: ["search", "hash"]
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/blogger?usegapi=1",
                            methods: ["scroll",
                                "openwindow"
                            ]
                        },
                        evwidget: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix:_/events/widget?usegapi=1"
                        },
                        partnersbadge: {
                            url: "https://www.gstatic.com/partners/badge/templates/badge.html?usegapi=1"
                        },
                        dataconnector: {
                            url: "https://dataconnector.corp.google.com/:session_prefix:ui/widgetview?usegapi=1"
                        },
                        surveyoptin: {
                            url: "https://www.google.com/shopping/customerreviews/optin?usegapi=1"
                        },
                        ":socialhost:": "https://apis.google.com",
                        shortlists: {
                            url: ""
                        },
                        hangout: {
                            url: "https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"
                        },
                        plus_followers: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"
                        },
                        post: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi=1"
                        },
                        signin: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/signin?usegapi=1",
                            methods: ["onauth"]
                        },
                        rbr_i: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"
                        },
                        share: {
                            url: ":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi=1"
                        },
                        plusone: {
                            params: {
                                count: "",
                                size: "",
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi=1"
                        },
                        comments: {
                            params: {
                                location: ["search", "hash"]
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1",
                            methods: ["scroll", "openwindow"]
                        },
                        ":im_socialhost:": "https://plus.googleapis.com",
                        backdrop: {
                            url: "https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi=1"
                        },
                        visibility: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/visibility?usegapi=1"
                        },
                        autocomplete: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/autocomplete"
                        },
                        ":signuphost:": "https://plus.google.com",
                        ratingbadge: {
                            url: "https://www.google.com/shopping/customerreviews/badge?usegapi=1"
                        },
                        appcirclepicker: {
                            url: ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"
                        },
                        follow: {
                            url: ":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"
                        },
                        community: {
                            url: ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"
                        },
                        sharetoclassroom: {
                            url: "https://classroom.google.com/sharewidget?usegapi=1"
                        },
                        ytshare: {
                            params: {
                                url: ""
                            },
                            url: ":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi=1"
                        },
                        plus: {
                            url: ":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"
                        },
                        family_creation: {
                            params: {
                                url: ""
                            },
                            url: "https://families.google.com/webcreation?usegapi=1&usegapi=1"
                        },
                        commentcount: {
                            url: ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"
                        },
                        configurator: {
                            url: ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"
                        },
                        zoomableimage: {
                            url: "https://ssl.gstatic.com/microscope/embed/"
                        },
                        appfinder: {
                            url: "https://workspace.google.com/:session_prefix:marketplace/appfinder?usegapi=1"
                        },
                        savetowallet: {
                            url: "https://pay.google.com/gp/v/widget/save"
                        },
                        person: {
                            url: ":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"
                        },
                        savetodrive: {
                            url: "https://drive.google.com/savetodrivebutton?usegapi=1",
                            methods: ["save"]
                        },
                        page: {
                            url: ":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"
                        },
                        card: {
                            url: ":socialhost:/:session_prefix:_/hovercard/card"
                        }
                    }
                },
                h: "m;/_/scs/abc-static/_/js/k=gapi.lb.fr.XU5fiHr6ssc.O/am=AACA/d=1/rs=AHpOoo-lFgp3Srmzsg_hIENljSXjSlwXqQ/m=__features__",
                u: "https://apis.google.com/js/plusone.js",
                hee: !0,
                dpo: !1,
                le: ["scs"]
            },
            platform: "backdrop blogger comments commentcount community donation family_creation follow hangout health page partnersbadge person playemm playreview plus plusone post ratingbadge savetoandroidpay savetodrive savetowallet sharetoclassroom shortlists signin2 surveyoptin visibility youtube ytsubscribe zoomableimage".split(" "),
            annotation: ["interactivepost", "recobar", "signin2", "autocomplete"]
        }
    });
}).call(this);