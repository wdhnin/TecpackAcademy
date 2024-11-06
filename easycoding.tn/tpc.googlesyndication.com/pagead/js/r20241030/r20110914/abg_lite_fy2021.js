(function() {
    'use strict';
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var m = this || self;

    function aa(a) {
        m.setTimeout(() => {
            throw a;
        }, 0)
    };
    var ba, n;
    a: {
        for (var ca = ["CLOSURE_FLAGS"], p = m, da = 0; da < ca.length; da++)
            if (p = p[ca[da]], p == null) {
                n = null;
                break a
            }
        n = p
    }
    var fa = n && n[610401301];
    ba = fa != null ? fa : !1;
    var q;
    const ha = m.navigator;
    q = ha ? ha.userAgentData || null : null;

    function ia(a) {
        return ba ? q ? q.brands.some(({
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
        return ba ? !!q && q.brands.length > 0 : !1
    }

    function ja() {
        return v() ? ia("Chromium") : (u("Chrome") || u("CriOS")) && !(v() ? 0 : u("Edge")) || u("Silk")
    };

    function ka(a) {
        ka[" "](a);
        return a
    }
    ka[" "] = function() {};
    !u("Android") || ja();
    ja();
    u("Safari") && (ja() || (v() ? 0 : u("Coast")) || (v() ? 0 : u("Opera")) || (v() ? 0 : u("Edge")) || (v() ? ia("Microsoft Edge") : u("Edg/")) || v() && ia("Opera"));
    let la;

    function ma() {
        const a = Error();
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = "incident";
        return a
    };
    var w = Symbol(),
        na = Symbol();

    function oa(a, b) {
        b[w] = (a | 0) & -30975
    }

    function pa(a, b) {
        b[w] = (a | 34) & -30941
    };
    var x = {},
        qa = {};

    function ra(a) {
        return !(!a || typeof a !== "object" || a.g !== qa)
    }

    function y(a) {
        return a !== null && typeof a === "object" && !Array.isArray(a) && a.constructor === Object
    }

    function z(a) {
        return !Array.isArray(a) || a.length ? !1 : (a[w] | 0) & 1 ? !0 : !1
    };
    const sa = BigInt(Number.MIN_SAFE_INTEGER),
        ta = BigInt(Number.MAX_SAFE_INTEGER);

    function D(a) {
        if (a == null) return a;
        if (typeof a === "string") {
            if (!a) return;
            a = +a
        }
        if (typeof a === "number") return Number.isFinite(a) ? a | 0 : void 0
    };

    function ua(a, b) {
        var c = va ? .get(b) ? .get(a),
            d;
        if (d = c) {
            a: if (a.length !== c.length) c = !1;
                else {
                    for (const e in c) {
                        var f = Number(e);
                        if (d = Number.isInteger(f)) d = a[f], f = c[f], d = !(Number.isNaN(d) ? Number.isNaN(f) : d === f);
                        if (d) {
                            c = !1;
                            break a
                        }
                    }
                    c = !0
                }d = !c
        }
        d && (wa(), va ? .get(b) ? .delete(a))
    }

    function xa(a) {
        if (a && va ? .has(a)) {
            var b = a.l;
            if (b)
                for (let c = 0; c < b.length; c++) {
                    const d = b[c];
                    if (c === b.length - 1 && y(d))
                        for (const f in d) {
                            const e = d[f];
                            Array.isArray(e) && ua(e, a)
                        } else Array.isArray(d) && ua(d, a)
                }
        }
    }

    function wa() {
        const a = ma();
        aa(a)
    }
    let va = void 0;
    let E;

    function ya(a, b) {
        E = b;
        a = new a(b);
        E = void 0;
        return a
    };

    function za(a, b) {
        return Aa(b)
    }

    function Aa(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "bigint":
                return a >= sa && a <= ta ? Number(a) : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (z(a)) return
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

    function Ba(a, b, c) {
        a = Array.prototype.slice.call(a);
        var d = a.length;
        const f = b & 256 ? a[d - 1] : void 0;
        d += f ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (f) {
            b = a[b] = {};
            for (const e in f) b[e] = c(f[e])
        }
        return a
    }

    function Fa(a, b, c, d, f) {
        if (a != null) {
            if (Array.isArray(a)) a = z(a) ? void 0 : f && (a[w] | 0) & 2 ? a : Ga(a, b, c, d !== void 0, f);
            else if (y(a)) {
                const e = {};
                for (let g in a) e[g] = Fa(a[g], b, c, d, f);
                a = e
            } else a = b(a, d);
            return a
        }
    }

    function Ga(a, b, c, d, f) {
        const e = d || c ? a[w] | 0 : 0;
        d = d ? !!(e & 32) : void 0;
        a = Array.prototype.slice.call(a);
        for (let g = 0; g < a.length; g++) a[g] = Fa(a[g], b, c, d, f);
        c && c(e, a);
        return a
    }

    function Ha(a) {
        return a.v === x ? a.toJSON() : Aa(a)
    };

    function Ia(a, b, c = pa) {
        if (a != null) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[w] | 0;
                if (d & 2) return a;
                b && (b = d === 0 || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[w] = (d | 34) & -12293, a) : Ga(a, Ia, d & 4 ? pa : c, !0, !0)
            }
            a.v === x && (c = a.l, d = c[w], a = d & 2 ? a : Ja(a, c, d, !0));
            return a
        }
    }

    function Ja(a, b, c, d) {
        xa(a);
        return ya(a.constructor, Ka(b, c, d))
    }

    function Ka(a, b, c) {
        const d = c || b & 2 ? pa : oa,
            f = !!(b & 32);
        a = Ba(a, b, e => Ia(e, f, d));
        a[w] = a[w] | 32 | (c ? 2 : 0);
        return a
    };

    function I(a, b) {
        a = a.l;
        return La(a, a[w], b)
    }

    function Ma(a, b, c, d) {
        b = d + (+!!(b & 512) - 1);
        if (!(b < 0 || b >= a.length || b >= c)) return a[b]
    }

    function La(a, b, c, d) {
        if (c === -1) return null;
        const f = b >> 15 & 1023 || 536870912;
        if (c >= f) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var e = a.length;
            return d && b & 256 && (d = a[e - 1][c], d != null) ? (Ma(a, b, f, c) && na != null && (a = la ? ? (la = {}), b = a[na] || 0, b >= 4 || (a[na] = b + 1, a = ma(), aa(a))), d) : Ma(a, b, f, c)
        }
    }

    function Na(a, b, c, d) {
        const f = b >> 15 & 1023 || 536870912;
        if (c >= f) {
            let e, g = b;
            if (b & 256) e = a[a.length - 1];
            else {
                if (d == null) return;
                e = a[f + (+!!(b & 512) - 1)] = {};
                g |= 256
            }
            e[c] = d;
            c < f && (a[c + (+!!(b & 512) - 1)] = void 0);
            g !== b && (a[w] = g)
        } else a[c + (+!!(b & 512) - 1)] = d, b & 256 && (a = a[a.length - 1], c in a && delete a[c])
    }

    function Oa(a) {
        var b = Pa;
        a = a.l;
        let c = a[w];
        const d = La(a, c, 1, !1);
        if (d != null && typeof d === "object" && d.v === x) b = d;
        else if (Array.isArray(d)) {
            const f = d[w] | 0;
            let e = f;
            e === 0 && (e |= c & 32);
            e |= c & 2;
            e !== f && (d[w] = e);
            b = new b(d)
        } else b = void 0;
        b !== d && b != null && Na(a, c, 1, b);
        return b
    }

    function Qa(a) {
        let b = Oa(a);
        if (b == null) return b;
        a = a.l;
        let c = a[w];
        if (!(c & 2)) {
            var d = b;
            const f = d.l,
                e = f[w];
            d = e & 2 ? Ja(d, f, e, !1) : d;
            d !== b && (b = d, Na(a, c, 1, b))
        }
        return b
    }

    function J(a, b) {
        a = I(a, b);
        return a == null || typeof a === "string" ? a : void 0
    }

    function K(a, b) {
        a = I(a, b);
        return (a == null || typeof a === "boolean" ? a : typeof a === "number" ? !!a : void 0) ? ? !1
    }

    function L(a, b, c) {
        if (c != null && typeof c !== "string") throw Error();
        a = a.l;
        let d = a[w];
        if (d & 2) throw Error();
        Na(a, d, b, c)
    };
    let Ra;
    var Ta = class {
        constructor(a) {
            a: {
                var b = b ? ? 0;a == null && (a = E);E = void 0;
                if (a == null) {
                    var c = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error("narr");
                    c = a[w] | 0;
                    if (c & 2048) throw Error("farr");
                    if (c & 64) break a;
                    b === 1 || b === 2 || (c |= 64);
                    b = a;
                    var d = b.length;
                    if (d && (--d, y(b[d]))) {
                        c |= 256;
                        b = d - (+!!(c & 512) - 1);
                        if (b >= 1024) throw Error("pvtlmt");
                        c = c & -33521665 | (b & 1023) << 15
                    }
                }
                a[w] = c
            }
            this.l = a
        }
        toJSON() {
            return Sa(this)
        }
    };
    Ta.prototype.v = x;

    function Sa(a) {
        xa(a);
        a = Ra ? a.l : Ga(a.l, Ha, void 0, void 0, !1); {
            var b = !Ra;
            let h = a.length;
            if (h) {
                var c = a[h - 1],
                    d = y(c);
                d ? h-- : c = void 0;
                var f = a;
                if (d) {
                    b: {
                        var e = c;
                        var g;
                        var k = !1;
                        if (e)
                            for (let r in e) isNaN(+r) ? (g ? ? (g = {}))[r] = e[r] : (d = e[r], Array.isArray(d) && (z(d) || ra(d) && d.size === 0) && (d = null), d == null && (k = !0), d != null && ((g ? ? (g = {}))[r] = d));k || (g = e);
                        if (g)
                            for (let r in g) {
                                k = g;
                                break b
                            }
                        k = null
                    }
                    e = k == null ? c != null : k !== c
                }
                for (; h > 0; h--) {
                    g = f[h - 1];
                    if (!(g == null || z(g) || ra(g) && g.size === 0)) break;
                    var l = !0
                }
                if (f !== a || e || l) {
                    if (!b) f = Array.prototype.slice.call(f,
                        0, h);
                    else if (l || e || k) f.length = h;
                    k && f.push(k)
                }
                l = f
            } else l = a
        }
        return l
    };
    var Pa = class extends Ta {};
    var Ua = function(a) {
        return b => {
            if (b == null || b == "") b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("dnarr");
                b[w] |= 32;
                b = ya(a, b)
            }
            return b
        }
    }(class extends Ta {});
    var Va = class extends Ta {
        constructor() {
            super()
        }
    };

    function Wa(a = window) {
        return a
    };

    function Xa(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var Ya = {
            passive: !0
        },
        Za = Xa(function() {
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

    function $a(a) {
        return a ? a.passive && Za() ? a : a.capture || !1 : !1
    }

    function M(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, $a(d))
    };
    /* 
     
     Copyright Google LLC 
     SPDX-License-Identifier: Apache-2.0 
    */
    let ab = globalThis.trustedTypes,
        bb;

    function cb() {
        let a = null;
        if (!ab) return a;
        try {
            const b = c => c;
            a = ab.createPolicy("goog#html", {
                createHTML: b,
                createScript: b,
                createScriptURL: b
            })
        } catch (b) {}
        return a
    };
    var db = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g + ""
        }
    };

    function eb(a = document) {
        a = ("document" in a ? a.document : a).querySelector ? .("script[nonce]");
        return a == null ? "" : a.nonce || a.getAttribute("nonce") || ""
    };
    var fb = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        gb = /#|$/;

    function hb(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function ib(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    };

    function jb(a, b, c = null, d = !1) {
        kb(a, b, c, d)
    }

    function kb(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = ib("IMG", a.document);
        if (c || d) {
            const e = g => {
                c && c(g);
                if (d) {
                    g = a.google_image_requests;
                    const k = Array.prototype.indexOf.call(g, f, void 0);
                    k >= 0 && Array.prototype.splice.call(g, k, 1)
                }
                f.removeEventListener && f.removeEventListener("load", e, $a());
                f.removeEventListener && f.removeEventListener("error", e, $a())
            };
            M(f, "load", e);
            M(f, "error", e)
        }
        f.src = b;
        a.google_image_requests.push(f)
    };
    let lb = 0;

    function mb(a) {
        return (a = nb(a, document.currentScript)) && a.getAttribute("data-jc-version") || "unknown"
    }

    function nb(a, b = null) {
        return b && b.getAttribute("data-jc") === String(a) ? b : document.querySelector(`[${"data-jc"}="${a}"]`)
    }

    function ob() {
        if (!(Math.random() > .01)) {
            var a = nb(60, document.currentScript);
            a = `https://${a&&a.getAttribute("data-jc-rcd")==="true"?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${60}&version=${mb(60)}&sample=${.01}`;
            var b = window,
                c;
            if (c = b.navigator) c = b.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
            c && b.navigator.sendBeacon ? b.navigator.sendBeacon(a) : jb(b, a, void 0, !1)
        }
    };
    var pb = document,
        N = window;

    function ub(a) {
        return typeof a.className == "string" ? a.className : a.getAttribute && a.getAttribute("class") || ""
    }

    function vb(a, b) {
        a.classList ? b = a.classList.contains(b) : (a = a.classList ? a.classList : ub(a).match(/\S+/g) || [], b = Array.prototype.indexOf.call(a, b, void 0) >= 0);
        return b
    }

    function O(a, b) {
        if (a.classList) a.classList.add(b);
        else if (!vb(a, b)) {
            const c = ub(a);
            b = c + (c.length > 0 ? " " + b : b);
            typeof a.className == "string" ? a.className = b : a.setAttribute && a.setAttribute("class", b)
        }
    };

    function P(a) {
        var b = document;
        return typeof a === "string" ? b.getElementById(a) : a
    }

    function wb(a) {
        var b = document;
        if (b.getElementsByClassName) a = b.getElementsByClassName(a)[0];
        else {
            b = document;
            var c;
            a ? c = b.querySelector(a ? "." + a : "") : c = (a ? b.querySelectorAll(a ? "." + a : "") : b.getElementsByTagName("*"))[0] || null;
            a = c
        }
        return a || null
    }

    function xb(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    };
    var yb = class {
        constructor(a) {
            var b = Sa(a);
            this.serializedAttributionData = b;
            b = a.l;
            this.g = Ja(a, b, b[w], !1);
            this.isMutableImpression = Oa(this.g) !== void 0 && !!K(Qa(this.g), 33);
            J(this.g, 30);
            this.W = !!K(this.g, 11);
            this.hasUserFeedbackData = !!this.g && Oa(this.g) !== void 0;
            this.P = !!K(this.g, 4);
            this.T = !!K(this.g, 6);
            this.O = !!K(this.g, 13);
            D(I(this.g, 8));
            this.creativeIndexSuffix = (D(I(this.g, 8)) ? ? 0) > 1 ? (D(I(this.g, 7)) ? ? 0).toString() : "";
            J(this.g, 34) != null && (this.creativeIndexSuffix = (J(this.g, 34) ? ? "") + "_" + this.creativeIndexSuffix);
            this.X = !!K(this.g, 17);
            this.V = !!K(this.g, 18);
            this.N = !!K(this.g, 14);
            this.F = !!K(this.g, 15);
            this.Y = !!K(this.g, 31);
            this.U = K(this.g, 9) == 1;
            this.openAttributionInline = K(this.g, 10) == 1;
            this.isMobileDevice = !!K(this.g, 12);
            this.u = null;
            this.S = (a = pb.querySelector("[data-slide]")) ? a.getAttribute("data-slide") === "true" : !1;
            (this.H = (D(I(this.g, 8)) ? ? 0) > 1) && N.goog_multislot_cache === void 0 && (N.goog_multislot_cache = {});
            if (this.H && !this.S) {
                if (a = N.goog_multislot_cache.hd, a === void 0) {
                    a = !1;
                    if (b = pb.querySelector("[data-dim]"))
                        if (b =
                            b.getBoundingClientRect(), b.right - b.left >= 150 && b.bottom - b.top >= 150) a = !1;
                        else {
                            var c = document.body.getBoundingClientRect();
                            (Math.abs(c.left - b.left) <= 1 && Math.abs(c.right - b.right) <= 1 ? b.bottom - b.top : b.right - b.left) < 150 && (a = !0)
                        }
                    else a = !1;
                    window.goog_multislot_cache.hd = a
                }
            } else a = !1;
            this.G = a;
            this.B = P("abgcp" + this.creativeIndexSuffix);
            this.A = P("abgc" + this.creativeIndexSuffix);
            this.h = P("abgs" + this.creativeIndexSuffix);
            P("abgl" + this.creativeIndexSuffix);
            this.s = P("abgb" + this.creativeIndexSuffix);
            this.D = P("abgac" +
                this.creativeIndexSuffix);
            P("mute_panel" + this.creativeIndexSuffix);
            this.C = wb("goog_delegate_attribution" + this.creativeIndexSuffix);
            this.isDelegateAttributionActive = !!this.C && !!this.N && !wb("goog_delegate_disabled") && !this.F;
            if (this.h) a: for (a = this.h, b = a.childNodes, c = 0; c < b.length; c++) {
                const d = b.item(c);
                if (typeof d.tagName != "undefined" && d.tagName.toUpperCase() == "A") {
                    a = d;
                    break a
                }
            } else a = null;
            this.m = a;
            this.j = this.isDelegateAttributionActive ? this.C : P("cbb" + this.creativeIndexSuffix);
            this.R = this.G ? this.creativeIndexSuffix ===
                "0" : !0;
            this.enableDelegateDismissableMenu = !!this.j && vb(this.j, "goog_dismissable_menu");
            this.o = null;
            this.I = 0;
            this.i = this.isDelegateAttributionActive ? this.C : this.T && this.B ? this.B : this.A;
            this.autoExpandOnLoad = !!K(this.g, 19);
            this.adbadgeEnabled = !!K(this.g, 24);
            this.enableNativeJakeUi = !!K(this.g, 27);
            J(this.g, 33)
        }
    };
    var zb = class {
        constructor(a, b, c) {
            if (!a) throw Error("bad conv util ctor args");
            this.g = a;
            this.h = c
        }
    };
    var Q = (a, b) => {
        a && hb(b, (c, d) => {
            a.style[d] = c
        })
    };
    var Ab = class {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };

    function Bb(a) {
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
    const Cb = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var Db = class {
            constructor(a, b) {
                this.g = a;
                this.h = b
            }
        },
        Eb = class {
            constructor(a, b) {
                this.url = a;
                this.L = !!b;
                this.depth = null
            }
        };
    let Fb = null;

    function Gb() {
        const a = m.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Hb() {
        const a = m.performance;
        return a && a.now ? a.now() : null
    };
    var Ib = class {
        constructor(a, b) {
            var c = Hb() || Gb();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const S = m.performance,
        Jb = !!(S && S.mark && S.measure && S.clearMarks),
        T = Xa(() => {
            var a;
            if (a = Jb) {
                var b;
                if (Fb === null) {
                    Fb = "";
                    try {
                        a = "";
                        try {
                            a = m.top.location.hash
                        } catch (c) {
                            a = m.location.hash
                        }
                        a && (Fb = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Fb;
                a = !!b.indexOf && b.indexOf("1337") >= 0
            }
            return a
        });

    function Kb(a) {
        a && S && T() && (S.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), S.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class Lb {
        constructor() {
            var a = window;
            this.h = [];
            this.i = a || m;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = T() || (b != null ? b : Math.random() < 1)
        }
        start(a, b) {
            if (!this.g) return null;
            a = new Ib(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            S && T() && S.mark(b);
            return a
        }
        end(a) {
            if (this.g && typeof a.value === "number") {
                a.duration = (Hb() || Gb()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                S && T() && S.mark(b);
                !this.g || this.h.length >
                    2048 || this.h.push(a)
            }
        }
    };

    function Mb(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Nb(a, b, c, d, f) {
        const e = [];
        hb(a, (g, k) => {
            (g = Ob(g, b, c, d, f)) && e.push(`${k}=${g}`)
        });
        return e.join(b)
    }

    function Ob(a, b, c, d, f) {
        if (a == null) return "";
        b = b || "&";
        c = c || ",$";
        typeof c === "string" && (c = c.split(""));
        if (a instanceof Array) {
            if (d || (d = 0), d < c.length) {
                const e = [];
                for (let g = 0; g < a.length; g++) e.push(Ob(a[g], b, c, d + 1, f));
                return e.join(c[d])
            }
        } else if (typeof a === "object") return f || (f = 0), f < 2 ? encodeURIComponent(Nb(a, b, c, d, f + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Pb(a) {
        let b = 1;
        for (const c in a.h) c.length > b && (b = c.length);
        return 3997 - b - a.i.length - 1
    }

    function Qb(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Pb(a) - b.length;
        if (d < 0) return "";
        a.g.sort((e, g) => e - g);
        b = null;
        let f = "";
        for (let e = 0; e < a.g.length; e++) {
            const g = a.g[e],
                k = a.h[g];
            for (let l = 0; l < k.length; l++) {
                if (!d) {
                    b = b == null ? g : b;
                    break
                }
                let h = Nb(k[l], a.i, ",$");
                if (h) {
                    h = f + h;
                    if (d >= h.length) {
                        d -= h.length;
                        c += h;
                        f = a.i;
                        break
                    }
                    b = b == null ? g : b
                }
            }
        }
        a = "";
        b != null && (a = `${f}${"trn"}=${b}`);
        return c + a
    }
    var Rb = class {
        constructor() {
            this.i = "&";
            this.h = {};
            this.j = 0;
            this.g = []
        }
    };

    function Sb(a, b, c) {
        let d, f;
        try {
            a.g && a.g.g ? (f = a.g.start(b.toString(), 3), d = c(), a.g.end(f)) : d = c()
        } catch (e) {
            c = !0;
            try {
                Kb(f), c = a.m(b, new Ab(e, {
                    message: Bb(e)
                }), void 0, void 0)
            } catch (g) {
                a.j(217, g)
            }
            if (c) window.console ? .error ? .(e);
            else throw e;
        }
        return d
    }

    function Tb(a, b) {
        var c = U;
        return (...d) => Sb(c, a, () => b.apply(void 0, d))
    }
    var Wb = class {
        constructor(a = null) {
            this.pinger = Ub;
            this.g = a;
            this.h = null;
            this.i = !1;
            this.m = this.j
        }
        j(a, b, c, d, f) {
            f = f || "jserror";
            let e;
            try {
                const A = new Rb;
                var g = A;
                g.g.push(1);
                g.h[1] = Mb("context", a);
                b.error && b.meta && b.id || (b = new Ab(b, {
                    message: Bb(b)
                }));
                if (b.msg) {
                    g = A;
                    var k = b.msg.substring(0, 512);
                    g.g.push(2);
                    g.h[2] = Mb("msg", k)
                }
                var l = b.meta || {};
                b = l;
                if (this.h) try {
                    this.h(b)
                } catch (t) {}
                if (d) try {
                    d(b)
                } catch (t) {}
                d = A;
                l = [l];
                d.g.push(3);
                d.h[3] = l;
                d = m;
                l = [];
                let ea;
                b = null;
                do {
                    var h = d;
                    try {
                        var r;
                        if (r = !!h && h.location.href != null) b: {
                            try {
                                ka(h.foo);
                                r = !0;
                                break b
                            } catch (t) {}
                            r = !1
                        }
                        var F = r
                    } catch {
                        F = !1
                    }
                    F ? (ea = h.location.href, b = h.document && h.document.referrer || null) : (ea = b, b = null);
                    l.push(new Eb(ea || ""));
                    try {
                        d = h.parent
                    } catch (t) {
                        d = null
                    }
                } while (d && h != d);
                for (let t = 0, qb = l.length - 1; t <= qb; ++t) l[t].depth = qb - t;
                h = m;
                if (h.location && h.location.ancestorOrigins && h.location.ancestorOrigins.length == l.length - 1)
                    for (F = 1; F < l.length; ++F) {
                        var G = l[F];
                        G.url || (G.url = h.location.ancestorOrigins[F - 1] || "", G.L = !0)
                    }
                var B = l;
                let Ca = new Eb(m.location.href, !1);
                h = null;
                const Da = B.length - 1;
                for (G = Da; G >= 0; --G) {
                    var C = B[G];
                    !h && Cb.test(C.url) && (h = C);
                    if (C.url && !C.L) {
                        Ca = C;
                        break
                    }
                }
                C = null;
                const ec = B.length && B[Da].url;
                Ca.depth != 0 && ec && (C = B[Da]);
                e = new Db(Ca, C);
                if (e.h) {
                    B = A;
                    var H = e.h.url || "";
                    B.g.push(4);
                    B.h[4] = Mb("top", H)
                }
                var Ea = {
                    url: e.g.url || ""
                };
                if (e.g.url) {
                    const t = e.g.url.match(fb);
                    var R = t[1],
                        rb = t[3],
                        sb = t[4];
                    H = "";
                    R && (H += R + ":");
                    rb && (H += "//", H += rb, sb && (H += ":" + sb));
                    var tb = H
                } else tb = "";
                R = A;
                Ea = [Ea, {
                    url: tb
                }];
                R.g.push(5);
                R.h[5] = Ea;
                Vb(this.pinger, f, A, this.i, c)
            } catch (A) {
                try {
                    Vb(this.pinger, f, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Bb(A),
                        url: e && e.g.url
                    }, this.i, c)
                } catch (ea) {}
            }
            return !0
        }
    };

    function Vb(a, b, c, d = !1, f) {
        if ((d ? a.g : Math.random()) < (f || .01)) try {
            let e;
            c instanceof Rb ? e = c : (e = new Rb, hb(c, (k, l) => {
                var h = e;
                const r = h.j++;
                k = Mb(l, k);
                h.g.push(r);
                h.h[r] = k
            }));
            const g = Qb(e, "/pagead/gen_204?id=" + b + "&");
            g && jb(m, g)
        } catch (e) {}
    }

    function Xb() {
        var a = Ub,
            b = window.google_srt;
        b >= 0 && b <= 1 && (a.g = b)
    }
    class Yb {
        constructor() {
            this.g = Math.random()
        }
    };
    let Ub, U;
    const V = new Lb;
    var Zb = () => {
        window.google_measure_js_timing || (V.g = !1, V.h != V.i.google_js_reporting_queue && (T() && Array.prototype.forEach.call(V.h, Kb, void 0), V.h.length = 0))
    };
    (a => {
        Ub = a ? ? new Yb;
        typeof window.google_srt !== "number" && (window.google_srt = Math.random());
        Xb();
        U = new Wb(V);
        U.h = b => {
            const c = lb;
            c !== 0 && (b.jc = String(c), b.shv = mb(c))
        };
        U.i = !0;
        window.document.readyState == "complete" ? Zb() : V.g && M(window, "load", () => {
            Zb()
        })
    })();
    var W = (a, b) => Tb(a, b);

    function $b(a) {
        if (a.g.m && a.g.V) {
            const b = Qa(a.g.g);
            b && J(b, 5) != null && J(b, 6) != null && (a.i = new zb(J(b, 5) ? ? "", J(b, 6) ? ? "", J(b, 19) ? ? ""));
            M(a.g.m, "click", W(452, () => {
                if (!a.j && (a.j = !0, a.i)) {
                    var c = a.i;
                    var d = c.g;
                    var f = d.search(gb),
                        e;
                    b: {
                        for (e = 0;
                            (e = d.indexOf("ad_signals", e)) >= 0 && e < f;) {
                            var g = d.charCodeAt(e - 1);
                            if (g == 38 || g == 63)
                                if (g = d.charCodeAt(e + 10), !g || g == 61 || g == 38 || g == 35) break b;
                            e += 11
                        }
                        e = -1
                    }
                    g = e;
                    if (g < 0) d = null;
                    else {
                        e = d.indexOf("&", g);
                        if (e < 0 || e > f) e = f;
                        d = decodeURIComponent(d.slice(g + 11, e !== -1 ? e : 0).replace(/\+/g, " "))
                    }
                    if (d) {
                        if (d = {
                                J: d,
                                label: "closebutton_whythisad_click",
                                M: "1",
                                K: ""
                            }, c = new Va, d != null && (d.J != null && L(c, 1, d.J), d.aa != null && L(c, 3, d.aa), d.label != null && L(c, 6, d.label), d.M != null && L(c, 7, d.M), d.K != null && L(c, 8, d.K), d.Z != null && L(c, 11, d.Z)), (d = Wa(m).fence) != null) {
                            f = d.reportEvent;
                            try {
                                Ra = !0;
                                var k = JSON.stringify(Sa(c), za)
                            } finally {
                                Ra = !1
                            }
                            f.call(d, {
                                eventType: "interaction",
                                eventData: k,
                                destination: ["buyer"]
                            })
                        }
                    } else k = c.g + "&label=closebutton_whythisad_click", k += "&label_instance=1", c.h && (k += "&cid=" + c.h), jb(window, k)
                }
            }))
        }
    }

    function ac(a) {
        if (a.g.W) M(a.g.i, "click", W(365, b => {
            const c = N.goog_interstitial_display;
            c && (c(b), b && (b.stopPropagation(), b.preventDefault()))
        }));
        else if (a.g.isMutableImpression && a.g.isMobileDevice) M(a.g.i, "click", () => a.h());
        else if (a.g.isMutableImpression && !a.g.isMobileDevice && (a.g.j && (M(a.g.j, "click", () => a.h()), M(a.g.j, "keydown", b => {
                b.code !== "Enter" && b.code !== "Space" || a.h()
            })), a.g.Y && a.g.h && M(a.g.h, "click", () => a.h())), a.g.P) bc(a);
        else {
            M(a.g.i, "mouseover", W(367, () => bc(a)));
            M(a.g.i, "mouseout", W(369,
                () => cc(a, 500)));
            M(a.g.i, "touchstart", W(368, () => bc(a)), Ya);
            const b = W(370, () => cc(a, 4E3));
            M(a.g.i, "mouseup", b);
            M(a.g.i, "touchend", b);
            M(a.g.i, "touchcancel", b);
            a.g.m && M(a.g.m, "click", W(371, c => a.preventDefault(c)))
        }
    }

    function bc(a) {
        window.clearTimeout(a.g.o);
        a.g.o = null;
        a.g.h && a.g.h.style.display == "block" || (a.g.I = Date.now(), a.g.s && a.g.h && (a.g.s.style.display = "none", a.g.h.style.display = "block"))
    }

    function cc(a, b) {
        window.clearTimeout(a.g.o);
        a.g.o = window.setTimeout(() => dc(a), b)
    }

    function fc(a) {
        const b = a.g.D;
        b !== void 0 && (b.style.display = "block", a.g.enableNativeJakeUi && window.requestAnimationFrame(() => {
            O(b, "abgacfo")
        }))
    }

    function dc(a) {
        window.clearTimeout(a.g.o);
        a.g.o = null;
        a.g.s && a.g.h && (a.g.s.style.display = "block", a.g.h.style.display = "none")
    }
    class gc {
        constructor(a, b) {
            this.g = a;
            this.h = b;
            this.g.X || (this.j = !1, this.i = null, !this.g.G || this.g.adbadgeEnabled || this.g.R ? $b(this) : (a = {
                display: "none"
            }, b = {
                width: "15px",
                height: "15px"
            }, this.g.isMobileDevice ? (Q(this.g.s, a), Q(this.g.h, a), Q(this.g.B, b), Q(this.g.A, b)) : Q(this.g.A, a)), ac(this), this.g.enableNativeJakeUi && O(this.g.D, "abgnac"), this.g.isDelegateAttributionActive ? (O(document.body, "goog_delegate_active"), O(document.body, "jaa")) : (!this.g.isMutableImpression && this.g.j && xb(this.g.j), setTimeout(() => {
                O(document.body,
                    "jar")
            }, this.g.O ? 750 : 100)), this.g.F && O(document.body, "goog_delegate_disabled"), this.g.autoExpandOnLoad && N.addEventListener("load", () => this.h()))
        }
        preventDefault(a) {
            if (this.g.h && this.g.h.style.display == "block" && Date.now() - this.g.I < 500) a.preventDefault ? a.preventDefault() : a.returnValue = !1;
            else if (this.g.openAttributionInline) {
                var b = this.g.m.getAttribute("href");
                window.adSlot ? window.adSlot.openAttribution(b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) : window.openAttribution && (window.openAttribution(b),
                    a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            } else this.g.U && (b = this.g.m.getAttribute("href"), window.adSlot ? window.adSlot.openSystemBrowser(b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) : window.openSystemBrowser && (window.openSystemBrowser(b), a.preventDefault ? a.preventDefault() : a.returnValue = !1))
        }
    };

    function hc(a) {
        if (!a.g && (a.g = !0, N.goog_delegate_deferred_token = void 0, a.h)) {
            var b = a.i;
            a = Ua(JSON.stringify(a.h));
            if (!a) throw Error("bad attrdata");
            a = new yb(a);
            new b(a)
        }
    }
    class ic {
        constructor(a) {
            var b = jc;
            if (!b) throw Error("bad ctor");
            this.i = b;
            this.h = a;
            this.g = !1;
            wb("goog_delegate_deferred") ? N.goog_delegate_deferred_token !== void 0 ? hc(this) : (a = () => {
                hc(this)
            }, N.goog_delegate_deferred_token = a, setTimeout(a, 5E3)) : hc(this)
        }
    };
    var kc = (a = []) => {
        m.google_logging_queue || (m.google_logging_queue = []);
        m.google_logging_queue.push([11, a])
    };
    class lc {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.reject = b
            })
        }
    };

    function mc() {
        const {
            promise: a,
            resolve: b
        } = new lc;
        return {
            promise: a,
            resolve: b
        }
    };

    function nc(a, b = () => {}) {
        a.google_llp || (a.google_llp = {});
        a = a.google_llp;
        let c = a[5];
        if (c) return c;
        c = mc();
        a[5] = c;
        b();
        return c
    }

    function oc(a, b) {
        return nc(a, () => {
            var c = a.document;
            const d = ib("SCRIPT", c);
            if (b instanceof db) var f = b.g;
            else throw Error("");
            d.src = f;
            (f = eb(d.ownerDocument && d.ownerDocument.defaultView || window)) && d.setAttribute("nonce", f);
            (c = c.getElementsByTagName("script")[0]) && c.parentNode && c.parentNode.insertBefore(d, c)
        }).promise
    };

    function pc(a) {
        a = a === null ? "null" : a === void 0 ? "undefined" : a;
        bb === void 0 && (bb = cb());
        var b = bb;
        return new db(b ? b.createScriptURL(a) : a)
    };

    function qc(a) {
        kc([a]);
        new ic(a)
    }

    function rc(a) {
        a.g.u ? a.g.u.expandAttributionCard() : (Sb(U, 373, () => {
            dc(a.h);
            fc(a.h)
        }), oc(window, pc(`https://${"pagead2.googlesyndication.com"}${"/pagead/js/"+(J(a.g.g,33)??"")+"/abg_survey.js"}`)).then(b => {
            b.createAttributionCard(a.g);
            a.g.u = b;
            b.expandAttributionCard()
        }), ob())
    }
    var jc = class {
        constructor(a) {
            this.g = a;
            this.h = new gc(this.g, W(359, () => rc(this)))
        }
    };
    lb = 60;
    const sc = nb(60, document.currentScript);
    if (sc == null) throw Error("JSC not found 60");
    const tc = {},
        uc = sc.attributes;
    for (let a = uc.length - 1; a >= 0; a--) {
        const b = uc[a].name;
        b.indexOf("data-jcp-") === 0 && (tc[b.substring(9)] = uc[a].value)
    }
    if (tc["attribution-data"]) qc(JSON.parse(tc["attribution-data"]));
    else {
        var X = ["buildAttribution"],
            Y = m;
        X[0] in Y || typeof Y.execScript == "undefined" || Y.execScript("var " + X[0]);
        for (var Z; X.length && (Z = X.shift());) X.length || qc === void 0 ? Y[Z] && Y[Z] !== Object.prototype[Z] ? Y = Y[Z] : Y = Y[Z] = {} : Y[Z] = qc
    };
}).call(this);