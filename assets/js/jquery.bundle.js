/*!jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license*/ ! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [],
        r = e.document,
        i = Object.getPrototypeOf,
        o = n.slice,
        a = n.concat,
        s = n.push,
        u = n.indexOf,
        l = {},
        c = l.toString,
        f = l.hasOwnProperty,
        p = f.toString,
        d = p.call(Object),
        h = {},
        g = function e(t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        },
        y = function e(t) {
            return null != t && t === t.window
        },
        v = {
            type: !0,
            src: !0,
            noModule: !0
        };

    function m(e, t, n) {
        var i, o = (t = t || r).createElement("script");
        if (o.text = e, n)
            for (i in v) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }

    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
    }
    var b = "3.3.1",
        w = function (e, t) {
            return new w.fn.init(e, t)
        },
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    w.fn = w.prototype = {
        jquery: "3.3.1",
        constructor: w,
        length: 0,
        toArray: function () {
            return o.call(this)
        },
        get: function (e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return w.each(this, e)
        },
        map: function (e) {
            return this.pushStack(w.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, w.extend = w.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, w.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function (e) {
            m(e)
        },
        each: function (e, t) {
            var n, r = 0;
            if (C(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(T, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : u.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)(r = !t(e[o], o)) !== s && i.push(e[o]);
            return i
        },
        map: function (e, t, n) {
            var r, i, o = 0,
                s = [];
            if (C(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return a.apply([], s)
        },
        guid: 1,
        support: h
    }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });

    function C(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    var E = function (e) {
        var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, y, v, m, x, b = "sizzle" + 1 * new Date,
            w = e.document,
            T = 0,
            C = 0,
            E = ae(),
            k = ae(),
            S = ae(),
            D = function (e, t) {
                return e === t && (f = !0), 0
            },
            N = {}.hasOwnProperty,
            A = [],
            j = A.pop,
            q = A.push,
            L = A.push,
            H = A.slice,
            O = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            F = new RegExp("^" + M + "*," + M + "*"),
            _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            X = new RegExp(W),
            U = new RegExp("^" + R + "$"),
            V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            G = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ee = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function (e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            re = function () {
                p()
            },
            ie = me(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
        } catch (e) {
            L = {
                apply: A.length ? function (e, t) {
                    q.apply(e, H.call(t))
                } : function (e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, r, i) {
            var o, s, l, c, f, h, v, m = t && t.ownerDocument,
                T = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
                if (11 !== T && (f = J.exec(e)))
                    if (o = f[1]) {
                        if (9 === T) {
                            if (!(l = t.getElementById(o))) return r;
                            if (l.id === o) return r.push(l), r
                        } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
                    } else {
                        if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r
                    } if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                    if (1 !== T) m = t, v = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id")) ? c = c.replace(te, ne): t.setAttribute("id", c = b), s = (h = a(e)).length;
                        while (s--) h[s] = "#" + c + " " + ve(h[s]);
                        v = h.join(","), m = K.test(e) && ge(t.parentNode) || t
                    }
                    if (v) try {
                        return L.apply(r, m.querySelectorAll(v)), r
                    } catch (e) {} finally {
                        c === b && t.removeAttribute("id")
                    }
                }
            }
            return u(e.replace(B, "$1"), t, r, i)
        }

        function ae() {
            var e = [];

            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            return t
        }

        function se(e) {
            return e[b] = !0, e
        }

        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function le(e, t) {
            var n = e.split("|"),
                i = n.length;
            while (i--) r.attrHandle[n[i]] = t
        }

        function ce(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function pe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function de(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function he(e) {
            return se(function (t) {
                return t = +t, se(function (n, r) {
                    var i, o = e([], n.length, t),
                        a = o.length;
                    while (a--) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        n = oe.support = {}, o = oe.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, p = oe.setDocument = function (e) {
            var t, i, a = e ? e.ownerDocument || e : w;
            return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = ue(function (e) {
                return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
                return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
            }), n.getById ? (r.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, r.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (r.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, r.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        i = t.getElementsByName(e), r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e)
            }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]")
            }), ue(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
            })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
                n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W)
            }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e) return !0;
                return !1
            }, D = t ? function (e, t) {
                if (e === t) return f = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1)
            } : function (e, t) {
                if (e === t) return f = !0, 0;
                var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                if (i === o) return ce(e, t);
                n = e;
                while (n = n.parentNode) a.unshift(n);
                n = t;
                while (n = n.parentNode) s.unshift(n);
                while (a[r] === s[r]) r++;
                return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0
            }, d) : d
        }, oe.matches = function (e, t) {
            return oe(e, null, null, t)
        }, oe.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
                var r = m.call(e, t);
                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {}
            return oe(t, d, null, [e]).length > 0
        }, oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== d && p(e), x(e, t)
        }, oe.attr = function (e, t) {
            (e.ownerDocument || e) !== d && p(e);
            var i = r.attrHandle[t.toLowerCase()],
                o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, oe.escape = function (e) {
            return (e + "").replace(te, ne)
        }, oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, oe.uniqueSort = function (e) {
            var t, r = [],
                i = 0,
                o = 0;
            if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
                while (t = e[o++]) t === e[o] && (i = r.push(o));
                while (i--) e.splice(r[i], 1)
            }
            return c = null, e
        }, i = oe.getText = function (e) {
            var t, n = "",
                r = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                while (t = e[r++]) n += i(t);
            return n
        }, (r = oe.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = E[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, t, n) {
                    return function (r) {
                        var i = oe.attr(r, e);
                        return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                            y = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            m = !u && !s,
                            x = !1;
                        if (y) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g])
                                        if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? y.firstChild : y.lastChild], a && m) {
                                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if (1 === p.nodeType && ++x && p === t) {
                                        c[e] = [T, d, x];
                                        break
                                    }
                            } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x)
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop())
                                    if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
                            return (x -= i) === r || x % r == 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function (e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
                        var r, o = i(e, t),
                            a = o.length;
                        while (a--) e[r = O(e, o[a])] = !(n[r] = o[a])
                    }) : function (e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: se(function (e) {
                    var t = [],
                        n = [],
                        r = s(e.replace(B, "$1"));
                    return r[b] ? se(function (e, t, n, i) {
                        var o, a = r(e, null, i, []),
                            s = e.length;
                        while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: se(function (e) {
                    return function (t) {
                        return oe(e, t).length > 0
                    }
                }),
                contains: se(function (e) {
                    return e = e.replace(Z, ee),
                        function (t) {
                            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                        }
                }),
                lang: se(function (e) {
                    return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
                        function (t) {
                            var n;
                            do {
                                if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === h
                },
                focus: function (e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: de(!1),
                disabled: de(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !r.pseudos.empty(e)
                },
                header: function (e) {
                    return Y.test(e.nodeName)
                },
                input: function (e) {
                    return G.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: he(function () {
                    return [0]
                }),
                last: he(function (e, t) {
                    return [t - 1]
                }),
                eq: he(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: he(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: he(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = r.pseudos.eq;
        for (t in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = fe(t);
        for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = pe(t);

        function ye() {}
        ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = oe.tokenize = function (e, t) {
            var n, i, o, a, s, u, l, c = k[e + " "];
            if (c) return t ? 0 : c.slice(0);
            s = e, u = [], l = r.preFilter;
            while (s) {
                n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
                    value: n,
                    type: i[0].replace(B, " ")
                }), s = s.slice(n.length));
                for (a in r.filter) !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: a,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? oe.error(e) : k(e, u).slice(0)
        };

        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function me(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = C++;
            return t.first ? function (t, n, i) {
                while (t = t[r])
                    if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function (t, n, u) {
                var l, c, f, p = [T, s];
                if (u) {
                    while (t = t[r])
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || a)
                            if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
                                if (c[o] = p, p[2] = e(t, n, u)) return !0
                            } return !1
            }
        }

        function xe(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
            return n
        }

        function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Te(e, t, n, r, i, o) {
            return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
                var l, c, f, p = [],
                    d = [],
                    h = a.length,
                    g = o || be(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !o && t ? g : we(g, p, e, s, u),
                    v = n ? i || (o ? e : h || r) ? [] : a : y;
                if (n && n(y, v, s, u), r) {
                    l = we(v, d), r(l, [], s, u), c = l.length;
                    while (c--)(f = l[c]) && (v[d[c]] = !(y[d[c]] = f))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            l = [], c = v.length;
                            while (c--)(f = v[c]) && l.push(y[c] = f);
                            i(null, v = [], l, u)
                        }
                        c = v.length;
                        while (c--)(f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                    }
                } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v)
            })
        }

        function Ce(e) {
            for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) {
                    return e === t
                }, s, !0), f = me(function (e) {
                    return O(t, e) > -1
                }, s, !0), p = [function (e, n, r) {
                    var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return t = null, i
                }]; u < o; u++)
                if (n = r.relative[e[u].type]) p = [me(xe(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o; i++)
                            if (r.relative[e[i].type]) break;
                        return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e))
                    }
                    p.push(n)
                } return xe(p)
        }

        function Ee(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function (o, a, s, u, c) {
                    var f, h, y, v = 0,
                        m = "0",
                        x = o && [],
                        b = [],
                        w = l,
                        C = o || i && r.find.TAG("*", c),
                        E = T += null == w ? 1 : Math.random() || .1,
                        k = C.length;
                    for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                        if (i && f) {
                            h = 0, a || f.ownerDocument === d || (p(f), s = !g);
                            while (y = e[h++])
                                if (y(f, a || d, s)) {
                                    u.push(f);
                                    break
                                } c && (T = E)
                        }
                        n && ((f = !y && f) && v--, o && x.push(f))
                    }
                    if (v += m, n && m !== v) {
                        h = 0;
                        while (y = t[h++]) y(x, b, a, s);
                        if (o) {
                            if (v > 0)
                                while (m--) x[m] || b[m] || (b[m] = j.call(u));
                            b = we(b)
                        }
                        L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u)
                    }
                    return c && (T = E, l = w), x
                };
            return n ? se(o) : o
        }
        return s = oe.compile = function (e, t) {
            var n, r = [],
                i = [],
                o = S[e + " "];
            if (!o) {
                t || (t = a(e)), n = t.length;
                while (n--)(o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                (o = S(e, Ee(i, r))).selector = e
            }
            return o
        }, u = oe.select = function (e, t, n, i) {
            var o, u, l, c, f, p = "function" == typeof e && e,
                d = !i && a(e = p.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                    if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                    p && (t = t.parentNode), e = e.slice(u.shift().value.length)
                }
                o = V.needsContext.test(e) ? 0 : u.length;
                while (o--) {
                    if (l = u[o], r.relative[c = l.type]) break;
                    if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
                        if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
                        break
                    }
                }
            }
            return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n
        }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
            return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        }), ue(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ue(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || le("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ue(function (e) {
            return null == e.getAttribute("disabled")
        }) || le(P, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), oe
    }(e);
    w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;
    var k = function (e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && w(e).is(n)) break;
                    r.push(e)
                } return r
        },
        S = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        D = w.expr.match.needsContext;

    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, t, n) {
        return g(t) ? w.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? w.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function (e) {
            return u.call(t, e) > -1 !== n
        }) : w.filter(t, e, n)
    }
    w.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, w.fn.extend({
        find: function (e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
                for (t = 0; t < r; t++)
                    if (w.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
            return r > 1 ? w.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function (e) {
            return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (w.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || q, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t))
                    for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
    }).prototype = w.fn, q = w(r);
    var H = /^(?:parents|prev(?:Until|All))/,
        O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    w.fn.extend({
        has: function (e) {
            var t = w(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (w.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && w(e);
            if (!D.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });

    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    w.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return k(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return k(e, "parentNode", n)
        },
        next: function (e) {
            return P(e, "nextSibling")
        },
        prev: function (e) {
            return P(e, "previousSibling")
        },
        nextAll: function (e) {
            return k(e, "nextSibling")
        },
        prevAll: function (e) {
            return k(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return k(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return k(e, "previousSibling", n)
        },
        siblings: function (e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return S(e.firstChild)
        },
        contents: function (e) {
            return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
        }
    }, function (e, t) {
        w.fn[e] = function (n, r) {
            var i = w.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var M = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        var t = {};
        return w.each(e.match(M) || [], function (e, n) {
            t[n] = !0
        }), t
    }
    w.Callbacks = function (e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);
        var t, n, r, i, o = [],
            a = [],
            s = -1,
            u = function () {
                for (i = i || e.once, r = t = !0; a.length; s = -1) {
                    n = a.shift();
                    while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1)
                }
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
            },
            l = {
                add: function () {
                    return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                        w.each(n, function (n, r) {
                            g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r)
                        })
                    }(arguments), n && !t && u()), this
                },
                remove: function () {
                    return w.each(arguments, function (e, t) {
                        var n;
                        while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--
                    }), this
                },
                has: function (e) {
                    return e ? w.inArray(e, o) > -1 : o.length > 0
                },
                empty: function () {
                    return o && (o = []), this
                },
                disable: function () {
                    return i = a = [], o = n = "", this
                },
                disabled: function () {
                    return !o
                },
                lock: function () {
                    return i = a = [], n || t || (o = n = ""), this
                },
                locked: function () {
                    return !!i
                },
                fireWith: function (e, n) {
                    return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
                },
                fire: function () {
                    return l.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return l
    };

    function I(e) {
        return e
    }

    function W(e) {
        throw e
    }

    function $(e, t, n, r) {
        var i;
        try {
            e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    w.extend({
        Deferred: function (t) {
            var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function () {
                        return r
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    "catch": function (e) {
                        return i.then(null, e)
                    },
                    pipe: function () {
                        var e = arguments;
                        return w.Deferred(function (t) {
                            w.each(n, function (n, r) {
                                var i = g(e[r[4]]) && e[r[4]];
                                o[r[1]](function () {
                                    var e = i && i.apply(this, arguments);
                                    e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function (t, r, i) {
                        var o = 0;

                        function a(t, n, r, i) {
                            return function () {
                                var s = this,
                                    u = arguments,
                                    l = function () {
                                        var e, l;
                                        if (!(t < o)) {
                                            if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            l = e && ("object" == typeof e || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
                                        }
                                    },
                                    c = i ? l : function () {
                                        try {
                                            l()
                                        } catch (e) {
                                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u))
                                        }
                                    };
                                t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }
                        return w.Deferred(function (e) {
                            n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W))
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? w.extend(e, i) : i
                    }
                },
                o = {};
            return w.each(n, function (e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add(function () {
                    r = s
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function (e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = o.call(arguments),
                a = w.Deferred(),
                s = function (e) {
                    return function (n) {
                        r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i)
                    }
                };
            if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
            while (n--) $(i[n], s(n), a.reject);
            return a.promise()
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    w.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, w.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var F = w.Deferred();
    w.fn.ready = function (e) {
        return F.then(e)["catch"](function (e) {
            w.readyException(e)
        }), this
    }, w.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]))
        }
    }), w.ready.then = F.then;

    function _() {
        r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready()
    }
    "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
    var z = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === x(n)) {
                i = !0;
                for (s in n) z(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                    return l.call(w(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        X = /^-ms-/,
        U = /-([a-z])/g;

    function V(e, t) {
        return t.toUpperCase()
    }

    function G(e) {
        return e.replace(X, "ms-").replace(U, V)
    }
    var Y = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Q() {
        this.expando = w.expando + Q.uid++
    }
    Q.uid = 1, Q.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[G(t)] = n;
            else
                for (r in t) i[G(r)] = t[r];
            return i
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
        },
        access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !w.isEmptyObject(t)
        }
    };
    var J = new Q,
        K = new Q,
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;

    function te(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
    }

    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = te(n)
                } catch (e) {}
                K.set(e, t, n)
            } else n = void 0;
        return n
    }
    w.extend({
        hasData: function (e) {
            return K.hasData(e) || J.hasData(e)
        },
        data: function (e, t, n) {
            return K.access(e, t, n)
        },
        removeData: function (e, t) {
            K.remove(e, t)
        },
        _data: function (e, t, n) {
            return J.access(e, t, n)
        },
        _removeData: function (e, t) {
            J.remove(e, t)
        }
    }), w.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                    n = a.length;
                    while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
                    J.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                K.set(this, e)
            }) : z(this, function (t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = K.get(o, e))) return n;
                    if (void 0 !== (n = ne(o, e))) return n
                } else this.each(function () {
                    K.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                K.remove(this, e)
            })
        }
    }), w.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = w.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = w._queueHooks(e, t),
                a = function () {
                    w.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return J.get(e, n) || J.access(e, n, {
                empty: w.Callbacks("once memory").add(function () {
                    J.remove(e, [t + "queue", n])
                })
            })
        }
    }), w.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                w.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, r = 1,
                i = w.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        ae = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display")
        },
        se = function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        };

    function ue(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function () {
                return r.cur()
            } : function () {
                return w.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
            c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, w.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var le = {};

    function ce(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = le[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i)
    }

    function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    w.fn.extend({
        show: function () {
            return fe(this, !0)
        },
        hide: function () {
            return fe(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ae(this) ? w(this).show() : w(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;

    function ye(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
    }
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            w.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && w.inArray(o, r) > -1) i && i.push(o);
            else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }! function () {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")),
            t = r.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var be = r.documentElement,
        we = /^key/,
        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;

    function Ee() {
        return !0
    }

    function ke() {
        return !1
    }

    function Se() {
        try {
            return r.activeElement
        } catch (e) {}
    }

    function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) De(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
            return w().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
            w.event.add(this, t, i, r, n)
        })
    }
    w.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.get(e);
            if (y) {
                n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
                    return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
                }), l = (t = (t || "").match(M) || [""]).length;
                while (l--) d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && w.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0)
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(M) || [""]).length;
                while (l--)
                    if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d])
                    } else
                        for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                w.isEmptyObject(u) && J.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t = w.event.fix(e),
                n, r, i, o, a, s, u = new Array(arguments.length),
                l = (J.get(this, "events") || {})[t.type] || [],
                c = w.event.special[t.type] || {};
            for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
            if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                s = w.event.handlers.call(this, t, l), n = 0;
                while ((o = s[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = o.elem, r = 0;
                    while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    } return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function (e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (e) {
            return e[w.expando] ? e : new w.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== Se() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === Se() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1
                },
                _default: function (e) {
                    return N(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, w.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, w.Event = function (e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
    }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, w.event.addProp), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), w.fn.extend({
        on: function (e, t, n, r) {
            return De(this, e, t, n, r)
        },
        one: function (e, t, n, r) {
            return De(this, e, t, n, r, 1)
        },
        off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
                w.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ae = /<script|<style|<link/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Le(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e
    }

    function He(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n])
            }
            K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u))
        }
    }

    function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i, o, s, u, l, c, f = 0,
            p = e.length,
            d = p - 1,
            y = t[0],
            v = g(y);
        if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
            var o = e.eq(i);
            v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r)
        });
        if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l))
        }
        return e
    }

    function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    w.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ne, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0),
                u = w.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e)))
                for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);
                else Pe(e, s);
            return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s
        },
        cleanData: function (e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Y(n)) {
                    if (t = n[J.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[J.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }), w.fn.extend({
        detach: function (e) {
            return Ie(this, e, !0)
        },
        remove: function (e) {
            return Ie(this, e)
        },
        text: function (e) {
            return z(this, function (e) {
                return void 0 === e ? w.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return Re(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return Re(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return Re(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return Re(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return w.clone(this, e, t)
            })
        },
        html: function (e) {
            return z(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = w.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return Re(this, arguments, function (t) {
                var n = this.parentNode;
                w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        w.fn[e] = function (e) {
            for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
        $e = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Be = new RegExp(oe.join("|"), "i");
    ! function () {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var i, o, a, s, u, l = r.createElement("div"),
            c = r.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
            boxSizingReliable: function () {
                return t(), o
            },
            pixelBoxStyles: function () {
                return t(), s
            },
            pixelPosition: function () {
                return t(), i
            },
            reliableMarginLeft: function () {
                return t(), u
            },
            scrollboxSize: function () {
                return t(), a
            }
        }))
    }();

    function Fe(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function _e(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    var ze = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ue = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ve = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ge = ["Webkit", "Moz", "ms"],
        Ye = r.createElement("div").style;

    function Qe(e) {
        if (e in Ye) return e;
        var t = e[0].toUpperCase() + e.slice(1),
            n = Ge.length;
        while (n--)
            if ((e = Ge[n] + t) in Ye) return e
    }

    function Je(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = Qe(e) || e), t
    }

    function Ke(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
    }

    function et(e, t, n) {
        var r = $e(e),
            i = Fe(e, t, r),
            o = "border-box" === w.css(e, "boxSizing", !1, r),
            a = o;
        if (We.test(i)) {
            if (!n) return i;
            i = "auto"
        }
        return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = G(t),
                    u = Xe.test(t),
                    l = e.style;
                if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = G(t);
            return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), w.each(["height", "width"], function (e, t) {
        w.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
                    return et(e, t, r)
                })
            },
            set: function (e, n, r) {
                var i, o = $e(e),
                    a = "border-box" === w.css(e, "boxSizing", !1, o),
                    s = r && Ze(e, t, r, a, o);
                return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s)
            }
        }
    }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        w.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, "margin" !== e && (w.cssHooks[e + t].set = Ke)
    }), w.fn.extend({
        css: function (e, t) {
            return z(this, function (e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
            }, e, t, arguments.length > 1)
        }
    });

    function tt(e, t, n, r, i) {
        return new tt.prototype.init(e, t, n, r, i)
    }
    w.Tween = tt, tt.prototype = {
        constructor: tt,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = tt.propHooks[this.prop];
            return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = tt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
        }
    }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (e) {
                w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, w.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, w.fx = tt.prototype.init, w.fx.step = {};
    var nt, rt, it = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;

    function at() {
        rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick())
    }

    function st() {
        return e.setTimeout(function () {
            nt = void 0
        }), nt = Date.now()
    }

    function ut(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function lt(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ct(e, t, n) {
        var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && ae(e),
            y = J.get(e, "fxshow");
        n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
            a.unqueued || s()
        }), a.unqueued++, p.always(function () {
            p.always(function () {
                a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
            })
        }));
        for (r in t)
            if (i = t[r], it.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !y || void 0 === y[r]) continue;
                    g = !0
                }
                d[r] = y && y[r] || w.style(e, r)
            } if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
                h.display = l
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1;
            for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", {
                display: l
            }), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
                g || fe([e]), J.remove(e, "fxshow");
                for (r in d) w.style(e, r, d[r])
            })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
        }
    }

    function ft(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function pt(e, t, n) {
        var r, i, o = 0,
            a = pt.prefilters.length,
            s = w.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (i) return !1;
                for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
            },
            l = s.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, {
                    specialEasing: {},
                    easing: w.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: nt || st(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
                }
            }),
            c = l.props;
        for (ft(c, l.opts.specialEasing); o < a; o++)
            if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    w.Animation = w.extend(pt, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return ue(n.elem, e, ie.exec(t), n), n
                }]
            },
            tweener: function (e, t) {
                g(e) ? (t = e, e = ["*"]) : e = e.match(M);
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
            },
            prefilters: [ct],
            prefilter: function (e, t) {
                t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
            }
        }), w.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? w.extend({}, e) : {
                complete: n || !n && t || g(e) && e,
                duration: e,
                easing: n && t || t && !g(t) && t
            };
            return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
            }, r
        }, w.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(ae).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function (e, t, n, r) {
                var i = w.isEmptyObject(e),
                    o = w.speed(t, n, r),
                    a = function () {
                        var t = pt(this, w.extend({}, e), o);
                        (i || J.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = w.timers,
                        a = J.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || w.dequeue(this, e)
                })
            },
            finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each(function () {
                    var t, n = J.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = w.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), w.each(["toggle", "show", "hide"], function (e, t) {
            var n = w.fn[t];
            w.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i)
            }
        }), w.each({
            slideDown: ut("show"),
            slideUp: ut("hide"),
            slideToggle: ut("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            w.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), w.timers = [], w.fx.tick = function () {
            var e, t = 0,
                n = w.timers;
            for (nt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || w.fx.stop(), nt = void 0
        }, w.fx.timer = function (e) {
            w.timers.push(e), w.fx.start()
        }, w.fx.interval = 13, w.fx.start = function () {
            rt || (rt = !0, at())
        }, w.fx.stop = function () {
            rt = null
        }, w.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, w.fn.delay = function (t, n) {
            return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function () {
                    e.clearTimeout(i)
                }
            })
        },
        function () {
            var e = r.createElement("input"),
                t = r.createElement("select").appendChild(r.createElement("option"));
            e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
        }();
    var dt, ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function (e, t) {
            return z(this, w.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                w.removeAttr(this, e)
            })
        }
    }), w.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!h.radioValue && "radio" === t && N(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, r = 0,
                i = t && t.match(M);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), dt = {
        set: function (e, t, n) {
            return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = ht[t] || w.find.attr;
        ht[t] = function (e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i
        }
    });
    var gt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;
    w.fn.extend({
        prop: function (e, t) {
            return z(this, w.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[w.propFix[e] || e]
            })
        }
    }), w.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), h.optSelected || (w.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        w.propFix[this.toLowerCase()] = this
    });

    function vt(e) {
        return (e.match(M) || []).join(" ")
    }

    function mt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : []
    }
    w.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function (t) {
                w(this).addClass(e.call(this, t, mt(this)))
            });
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = t[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function (e) {
            var t, n, r, i, o, a, s, u = 0;
            if (g(e)) return this.each(function (t) {
                w(this).removeClass(e.call(this, t, mt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = xt(e)).length)
                while (n = this[u++])
                    if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = t[a++])
                            while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
                w(this).toggleClass(e.call(this, n, mt(this), t), t)
            }) : this.each(function () {
                var t, i, o, a;
                if (r) {
                    i = 0, o = w(this), a = xt(e);
                    while (t = a[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = g(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
                        return null == e ? "" : e + ""
                    })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n
            }
        }
    }), w.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = w.find.attr(e, "value");
                    return null != t ? t : vt(w.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                            if (t = w(n).val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function (e, t) {
                    var n, r, i = e.options,
                        o = w.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), w.each(["radio", "checkbox"], function () {
        w.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
            }
        }, h.checkOn || (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), h.focusin = "onfocusin" in e;
    var wt = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function (e) {
            e.stopPropagation()
        };
    w.extend(w.event, {
        trigger: function (t, n, i, o) {
            var a, s, u, l, c, p, d, h, v = [i || r],
                m = f.call(t, "type") ? t.type : t,
                x = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !y(i)) {
                    for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), u = s;
                    u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e)
                }
                a = 0;
                while ((s = v[a++]) && !t.isPropagationStopped()) h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result
            }
        },
        simulate: function (e, t, n) {
            var r = w.extend(new w.Event, n, {
                type: e,
                isSimulated: !0
            });
            w.event.trigger(r, null, t)
        }
    }), w.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return w.event.trigger(e, t, n, !0)
        }
    }), h.focusin || w.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this,
                    i = J.access(r, t);
                i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
            },
            teardown: function () {
                var r = this.ownerDocument || this,
                    i = J.access(r, t) - 1;
                i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
            }
        }
    });
    var Ct = e.location,
        Et = Date.now(),
        kt = /\?/;
    w.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n
    };
    var St = /\[\]$/,
        Dt = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;

    function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t)) w.each(t, function (t, i) {
            n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== x(t)) r(e, t);
        else
            for (i in t) jt(e + "[" + i + "]", t[i], n, r)
    }
    w.param = function (e, t) {
        var n, r = [],
            i = function (e, t) {
                var n = g(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
            i(this.name, this.value)
        });
        else
            for (n in e) jt(n, e[n], t, i);
        return r.join("&")
    }, w.fn.extend({
        serialize: function () {
            return w.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e))
            }).map(function (e, t) {
                var n = w(this).val();
                return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            }).get()
        }
    });
    var qt = /%20/g,
        Lt = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mt = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        It = {},
        Wt = {},
        $t = "*/".concat("*"),
        Bt = r.createElement("a");
    Bt.href = Ct.href;

    function Ft(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(M) || [];
            if (g(n))
                while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function _t(e, t, n, r) {
        var i = {},
            o = e === Wt;

        function a(s) {
            var u;
            return i[s] = !0, w.each(e[s] || [], function (e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
            }), u
        }
        return a(t.dataTypes[0]) || !i["*"] && a("*")
    }

    function zt(e, t) {
        var n, r, i = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e
    }

    function Xt(e, t, n) {
        var r, i, o, a, s = e.contents,
            u = e.dataTypes;
        while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                } if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function Ut(e, t, n, r) {
        var i, o, a, s, u, l = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o]))
                for (i in l)
                    if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                        !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                        break
                    } if (!0 !== a)
                if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: a ? e : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Pt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function (t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, l, c, f, p, d, h = w.ajaxSetup({}, n),
                g = h.context || h,
                y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                v = w.Deferred(),
                m = w.Callbacks("once memory"),
                x = h.statusCode || {},
                b = {},
                T = {},
                C = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!s) {
                                s = {};
                                while (t = Ot.exec(a)) s[t[1].toLowerCase()] = t[2]
                            }
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return c ? a : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == c && (h.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (c) E.always(e[E.status]);
                            else
                                for (t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || C;
                        return i && i.abort(t), k(0, t), this
                    }
                };
            if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
                l = r.createElement("a");
                try {
                    l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;
            (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
            if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
                if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;
                h.async && h.timeout > 0 && (u = e.setTimeout(function () {
                    E.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, i.send(b, k)
                } catch (e) {
                    if (c) throw e;
                    k(-1, e)
                }
            } else k(-1, "No Transport");

            function k(t, n, r, s) {
                var l, p, d, b, T, C = n;
                c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function (e, t, n) {
            return w.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return w.get(e, void 0, t, "script")
        }
    }), w.each(["get", "post"], function (e, t) {
        w[t] = function (e, n, r, i) {
            return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, w.isPlainObject(e) && e))
        }
    }), w._evalUrl = function (e) {
        return w.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, w.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function (e) {
            return g(e) ? this.each(function (t) {
                w(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = w(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = g(e);
            return this.each(function (n) {
                w(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                w(this).replaceWith(this.childNodes)
            }), this
        }
    }), w.expr.pseudos.hidden = function (e) {
        return !w.expr.pseudos.visible(e)
    }, w.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, w.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Vt = {
            0: 200,
            1223: 204
        },
        Gt = w.ajaxSettings.xhr();
    h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
        var n, r;
        if (h.cors || Gt && !t.crossDomain) return {
            send: function (i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) s.setRequestHeader(a, i[a]);
                n = function (e) {
                    return function () {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                    4 === s.readyState && e.setTimeout(function () {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function () {
                n && n()
            }
        }
    }), w.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return w.globalEval(e), e
            }
        }
    }), w.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), w.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (i, o) {
                    t = w("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), r.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var Yt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Yt.pop() || w.expando + "_" + Et++;
            return this[e] = !0, e
        }
    }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return a || w.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            a = arguments
        }, r.always(function () {
            void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0
        }), "script"
    }), h.createHTMLDocument = function () {
        var e = r.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), w.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, o, a;
        return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes))
    }, w.fn.load = function (e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        w.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), w.expr.pseudos.animated = function (e) {
        return w.grep(w.timers, function (t) {
            return e === t.elem
        }).length
    }, w.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l, c = w.css(e, "position"),
                f = w(e),
                p = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, w.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                w.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0];
            if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function () {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - w.css(r, "marginTop", !0),
                    left: t.left - i.left - w.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent;
                while (e && "static" === w.css(e, "position")) e = e.offsetParent;
                return e || be
            })
        }
    }), w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function (r) {
            return z(this, function (e, r, i) {
                var o;
                if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }), w.each(["top", "left"], function (e, t) {
        w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
            if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n
        })
    }), w.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        w.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, r) {
            w.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return z(this, function (t, n, i) {
                    var o;
                    return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        w.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), w.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), w.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), w.proxy = function (e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function () {
            return e.apply(t || this, r.concat(o.call(arguments)))
        }, i.guid = e.guid = e.guid || w.guid++, i
    }, w.holdReady = function (e) {
        e ? w.readyWait++ : w.ready(!0)
    }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return w
    });
    var Jt = e.jQuery,
        Kt = e.$;
    return w.noConflict = function (t) {
        return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w
    }, t || (e.jQuery = e.$ = w), w
}); /*!Bootstrap v4.1.1 (https://getbootstrap.com). Copyright 2011-2018 The Bootstrap Authors*/
! function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t(e.bootstrap = {}, e.jQuery)
}(this, function (e, t) {
    "use strict";

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function s(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    function l(r) {
        for (var e = 1; e < arguments.length; e++) {
            var o = null != arguments[e] ? arguments[e] : {},
                t = Object.keys(o);
            "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(o).filter(function (e) {
                return Object.getOwnPropertyDescriptor(o, e).enumerable
            }))), t.forEach(function (e) {
                var t, n, i;
                t = r, i = o[n = e], n in t ? Object.defineProperty(t, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = i
            })
        }
        return r
    }
    for (var r, n, o, a, c, u, f, h, d, p, m, g, _, v, y, E, b, w, C, T, S, D, A, I, O, N, k, x, P, L, j, H, M, F, W, R, U, B, q, K, Q, Y, V, z, G, J, Z, X, $, ee, te, ne, ie, re, oe, se, ae, le, ce, ue, fe, he, de, pe, me, ge, _e, ve, ye, Ee, be, we = function (i) {
            var t = "transitionend";

            function e(e) {
                var t = this,
                    n = !1;
                return i(this).one(l.TRANSITION_END, function () {
                    n = !0
                }), setTimeout(function () {
                    n || l.triggerTransitionEnd(t)
                }, e), this
            }
            var l = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function (e) {
                    for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
                    return e
                },
                getSelectorFromElement: function (e) {
                    var t = e.getAttribute("data-target");
                    t && "#" !== t || (t = e.getAttribute("href") || "");
                    try {
                        return document.querySelector(t) ? t : null
                    } catch (e) {
                        return null
                    }
                },
                getTransitionDurationFromElement: function (e) {
                    if (!e) return 0;
                    var t = i(e).css("transition-duration");
                    return parseFloat(t) ? (t = t.split(",")[0], 1e3 * parseFloat(t)) : 0
                },
                reflow: function (e) {
                    return e.offsetHeight
                },
                triggerTransitionEnd: function (e) {
                    i(e).trigger(t)
                },
                supportsTransitionEnd: function () {
                    return Boolean(t)
                },
                isElement: function (e) {
                    return (e[0] || e).nodeType
                },
                typeCheckConfig: function (e, t, n) {
                    for (var i in n)
                        if (Object.prototype.hasOwnProperty.call(n, i)) {
                            var r = n[i],
                                o = t[i],
                                s = o && l.isElement(o) ? "element" : (a = o, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                            if (!new RegExp(r).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                        } var a
                }
            };
            return i.fn.emulateTransitionEnd = e, i.event.special[l.TRANSITION_END] = {
                bindType: t,
                delegateType: t,
                handle: function (e) {
                    if (i(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                }
            }, l
        }(t = t && t.hasOwnProperty("default") ? t.default : t), Ce = (n = "alert", a = "." + (o = "bs.alert"), c = (r = t).fn[n], u = {
            CLOSE: "close" + a,
            CLOSED: "closed" + a,
            CLICK_DATA_API: "click" + a + ".data-api"
        }, f = "alert", h = "fade", d = "show", p = function () {
            function i(e) {
                this._element = e
            }
            var e = i.prototype;
            return e.close = function (e) {
                var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, e.dispose = function () {
                r.removeData(this._element, o), this._element = null
            }, e._getRootElement = function (e) {
                var t = we.getSelectorFromElement(e),
                    n = !1;
                return t && (n = document.querySelector(t)), n || (n = r(e).closest("." + f)[0]), n
            }, e._triggerCloseEvent = function (e) {
                var t = r.Event(u.CLOSE);
                return r(e).trigger(t), t
            }, e._removeElement = function (t) {
                var n = this;
                if (r(t).removeClass(d), r(t).hasClass(h)) {
                    var e = we.getTransitionDurationFromElement(t);
                    r(t).one(we.TRANSITION_END, function (e) {
                        return n._destroyElement(t, e)
                    }).emulateTransitionEnd(e)
                } else this._destroyElement(t)
            }, e._destroyElement = function (e) {
                r(e).detach().trigger(u.CLOSED).remove()
            }, i._jQueryInterface = function (n) {
                return this.each(function () {
                    var e = r(this),
                        t = e.data(o);
                    t || (t = new i(this), e.data(o, t)), "close" === n && t[n](this)
                })
            }, i._handleDismiss = function (t) {
                return function (e) {
                    e && e.preventDefault(), t.close(this)
                }
            }, s(i, null, [{
                key: "VERSION",
                get: function () {
                    return "4.1.3"
                }
            }]), i
        }(), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)), r.fn[n] = p._jQueryInterface, r.fn[n].Constructor = p, r.fn[n].noConflict = function () {
            return r.fn[n] = c, p._jQueryInterface
        }, p), Te = (g = "button", v = "." + (_ = "bs.button"), y = ".data-api", E = (m = t).fn[g], b = "active", w = "btn", T = '[data-toggle^="button"]', S = '[data-toggle="buttons"]', D = "input", A = ".active", I = ".btn", O = {
            CLICK_DATA_API: "click" + v + y,
            FOCUS_BLUR_DATA_API: (C = "focus") + v + y + " blur" + v + y
        }, N = function () {
            function n(e) {
                this._element = e
            }
            var e = n.prototype;
            return e.toggle = function () {
                var e = !0,
                    t = !0,
                    n = m(this._element).closest(S)[0];
                if (n) {
                    var i = this._element.querySelector(D);
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && this._element.classList.contains(b)) e = !1;
                            else {
                                var r = n.querySelector(A);
                                r && m(r).removeClass(b)
                            } if (e) {
                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            i.checked = !this._element.classList.contains(b), m(i).trigger("change")
                        }
                        i.focus(), t = !1
                    }
                }
                t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(b)), e && m(this._element).toggleClass(b)
            }, e.dispose = function () {
                m.removeData(this._element, _), this._element = null
            }, n._jQueryInterface = function (t) {
                return this.each(function () {
                    var e = m(this).data(_);
                    e || (e = new n(this), m(this).data(_, e)), "toggle" === t && e[t]()
                })
            }, s(n, null, [{
                key: "VERSION",
                get: function () {
                    return "4.1.3"
                }
            }]), n
        }(), m(document).on(O.CLICK_DATA_API, T, function (e) {
            e.preventDefault();
            var t = e.target;
            m(t).hasClass(w) || (t = m(t).closest(I)), N._jQueryInterface.call(m(t), "toggle")
        }).on(O.FOCUS_BLUR_DATA_API, T, function (e) {
            var t = m(e.target).closest(I)[0];
            m(t).toggleClass(C, /^focus(in)?$/.test(e.type))
        }), m.fn[g] = N._jQueryInterface, m.fn[g].Constructor = N, m.fn[g].noConflict = function () {
            return m.fn[g] = E, N._jQueryInterface
        }, N), Se = (x = "carousel", L = "." + (P = "bs.carousel"), j = ".data-api", H = (k = t).fn[x], M = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        }, F = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        }, W = "next", R = "prev", U = "left", B = "right", q = {
            SLIDE: "slide" + L,
            SLID: "slid" + L,
            KEYDOWN: "keydown" + L,
            MOUSEENTER: "mouseenter" + L,
            MOUSELEAVE: "mouseleave" + L,
            TOUCHEND: "touchend" + L,
            LOAD_DATA_API: "load" + L + j,
            CLICK_DATA_API: "click" + L + j
        }, K = "carousel", Q = "active", Y = "slide", V = "carousel-item-right", z = "carousel-item-left", G = "carousel-item-next", J = "carousel-item-prev", Z = ".active", X = ".active.carousel-item", $ = ".carousel-item", ee = ".carousel-item-next, .carousel-item-prev", te = ".carousel-indicators", ne = "[data-slide], [data-slide-to]", ie = '[data-ride="carousel"]', re = function () {
            function o(e, t) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(t), this._element = k(e)[0], this._indicatorsElement = this._element.querySelector(te), this._addEventListeners()
            }
            var e = o.prototype;
            return e.next = function () {
                this._isSliding || this._slide(W)
            }, e.nextWhenVisible = function () {
                !document.hidden && k(this._element).is(":visible") && "hidden" !== k(this._element).css("visibility") && this.next()
            }, e.prev = function () {
                this._isSliding || this._slide(R)
            }, e.pause = function (e) {
                e || (this._isPaused = !0), this._element.querySelector(ee) && (we.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, e.cycle = function (e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, e.to = function (e) {
                var t = this;
                this._activeElement = this._element.querySelector(X);
                var n = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) k(this._element).one(q.SLID, function () {
                        return t.to(e)
                    });
                    else {
                        if (n === e) return this.pause(), void this.cycle();
                        var i = n < e ? W : R;
                        this._slide(i, this._items[e])
                    }
            }, e.dispose = function () {
                k(this._element).off(L), k.removeData(this._element, P), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, e._getConfig = function (e) {
                return e = l({}, M, e), we.typeCheckConfig(x, e, F), e
            }, e._addEventListeners = function () {
                var t = this;
                this._config.keyboard && k(this._element).on(q.KEYDOWN, function (e) {
                    return t._keydown(e)
                }), "hover" === this._config.pause && (k(this._element).on(q.MOUSEENTER, function (e) {
                    return t.pause(e)
                }).on(q.MOUSELEAVE, function (e) {
                    return t.cycle(e)
                }), "ontouchstart" in document.documentElement && k(this._element).on(q.TOUCHEND, function () {
                    t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
                        return t.cycle(e)
                    }, 500 + t._config.interval)
                }))
            }, e._keydown = function (e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next()
                }
            }, e._getItemIndex = function (e) {
                return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll($)) : [], this._items.indexOf(e)
            }, e._getItemByDirection = function (e, t) {
                var n = e === W,
                    i = e === R,
                    r = this._getItemIndex(t),
                    o = this._items.length - 1;
                if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
                var s = (r + (e === R ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, e._triggerSlideEvent = function (e, t) {
                var n = this._getItemIndex(e),
                    i = this._getItemIndex(this._element.querySelector(X)),
                    r = k.Event(q.SLIDE, {
                        relatedTarget: e,
                        direction: t,
                        from: i,
                        to: n
                    });
                return k(this._element).trigger(r), r
            }, e._setActiveIndicatorElement = function (e) {
                if (this._indicatorsElement) {
                    var t = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
                    k(t).removeClass(Q);
                    var n = this._indicatorsElement.children[this._getItemIndex(e)];
                    n && k(n).addClass(Q)
                }
            }, e._slide = function (e, t) {
                var n, i, r, o = this,
                    s = this._element.querySelector(X),
                    a = this._getItemIndex(s),
                    l = t || s && this._getItemByDirection(e, s),
                    c = this._getItemIndex(l),
                    u = Boolean(this._interval);
                if (e === W ? (n = z, i = G, r = U) : (n = V, i = J, r = B), l && k(l).hasClass(Q)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
                    this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l);
                    var f = k.Event(q.SLID, {
                        relatedTarget: l,
                        direction: r,
                        from: a,
                        to: c
                    });
                    if (k(this._element).hasClass(Y)) {
                        k(l).addClass(i), we.reflow(l), k(s).addClass(n), k(l).addClass(n);
                        var h = we.getTransitionDurationFromElement(s);
                        k(s).one(we.TRANSITION_END, function () {
                            k(l).removeClass(n + " " + i).addClass(Q), k(s).removeClass(Q + " " + i + " " + n), o._isSliding = !1, setTimeout(function () {
                                return k(o._element).trigger(f)
                            }, 0)
                        }).emulateTransitionEnd(h)
                    } else k(s).removeClass(Q), k(l).addClass(Q), this._isSliding = !1, k(this._element).trigger(f);
                    u && this.cycle()
                }
            }, o._jQueryInterface = function (i) {
                return this.each(function () {
                    var e = k(this).data(P),
                        t = l({}, M, k(this).data());
                    "object" == typeof i && (t = l({}, t, i));
                    var n = "string" == typeof i ? i : t.slide;
                    if (e || (e = new o(this, t), k(this).data(P, e)), "number" == typeof i) e.to(i);
                    else if ("string" == typeof n) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    } else t.interval && (e.pause(), e.cycle())
                })
            }, o._dataApiClickHandler = function (e) {
                var t = we.getSelectorFromElement(this);
                if (t) {
                    var n = k(t)[0];
                    if (n && k(n).hasClass(K)) {
                        var i = l({}, k(n).data(), k(this).data()),
                            r = this.getAttribute("data-slide-to");
                        r && (i.interval = !1), o._jQueryInterface.call(k(n), i), r && k(n).data(P).to(r), e.preventDefault()
                    }
                }
            }, s(o, null, [{
                key: "VERSION",
                get: function () {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function () {
                    return M
                }
            }]), o
        }(), k(document).on(q.CLICK_DATA_API, ne, re._dataApiClickHandler), k(window).on(q.LOAD_DATA_API, function () {
            for (var e = [].slice.call(document.querySelectorAll(ie)), t = 0, n = e.length; t < n; t++) {
                var i = k(e[t]);
                re._jQueryInterface.call(i, i.data())
            }
        }), k.fn[x] = re._jQueryInterface, k.fn[x].Constructor = re, k.fn[x].noConflict = function () {
            return k.fn[x] = H, re._jQueryInterface
        }, re), De = (se = "collapse", le = "." + (ae = "bs.collapse"), ce = (oe = t).fn[se], ue = {
            toggle: !0,
            parent: ""
        }, fe = {
            toggle: "boolean",
            parent: "(string|element)"
        }, he = {
            SHOW: "show" + le,
            SHOWN: "shown" + le,
            HIDE: "hide" + le,
            HIDDEN: "hidden" + le,
            CLICK_DATA_API: "click" + le + ".data-api"
        }, de = "show", pe = "collapse", me = "collapsing", ge = "collapsed", _e = "width", ve = "height", ye = ".show, .collapsing", Ee = '[data-toggle="collapse"]', be = function () {
            function a(t, e) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = oe.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(Ee)), i = 0, r = n.length; i < r; i++) {
                    var o = n[i],
                        s = we.getSelectorFromElement(o),
                        a = [].slice.call(document.querySelectorAll(s)).filter(function (e) {
                            return e === t
                        });
                    null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(o))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var e = a.prototype;
            return e.toggle = function () {
                oe(this._element).hasClass(de) ? this.hide() : this.show()
            }, e.show = function () {
                var e, t, n = this;
                if (!this._isTransitioning && !oe(this._element).hasClass(de) && (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(ye)).filter(function (e) {
                        return e.getAttribute("data-parent") === n._config.parent
                    })).length && (e = null), !(e && (t = oe(e).not(this._selector).data(ae)) && t._isTransitioning))) {
                    var i = oe.Event(he.SHOW);
                    if (oe(this._element).trigger(i), !i.isDefaultPrevented()) {
                        e && (a._jQueryInterface.call(oe(e).not(this._selector), "hide"), t || oe(e).data(ae, null));
                        var r = this._getDimension();
                        oe(this._element).removeClass(pe).addClass(me), this._element.style[r] = 0, this._triggerArray.length && oe(this._triggerArray).removeClass(ge).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var o = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                            s = we.getTransitionDurationFromElement(this._element);
                        oe(this._element).one(we.TRANSITION_END, function () {
                            oe(n._element).removeClass(me).addClass(pe).addClass(de), n._element.style[r] = "", n.setTransitioning(!1), oe(n._element).trigger(he.SHOWN)
                        }).emulateTransitionEnd(s), this._element.style[r] = this._element[o] + "px"
                    }
                }
            }, e.hide = function () {
                var e = this;
                if (!this._isTransitioning && oe(this._element).hasClass(de)) {
                    var t = oe.Event(he.HIDE);
                    if (oe(this._element).trigger(t), !t.isDefaultPrevented()) {
                        var n = this._getDimension();
                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", we.reflow(this._element), oe(this._element).addClass(me).removeClass(pe).removeClass(de);
                        var i = this._triggerArray.length;
                        if (0 < i)
                            for (var r = 0; r < i; r++) {
                                var o = this._triggerArray[r],
                                    s = we.getSelectorFromElement(o);
                                if (null !== s) oe([].slice.call(document.querySelectorAll(s))).hasClass(de) || oe(o).addClass(ge).attr("aria-expanded", !1)
                            }
                        this.setTransitioning(!0);
                        this._element.style[n] = "";
                        var a = we.getTransitionDurationFromElement(this._element);
                        oe(this._element).one(we.TRANSITION_END, function () {
                            e.setTransitioning(!1), oe(e._element).removeClass(me).addClass(pe).trigger(he.HIDDEN)
                        }).emulateTransitionEnd(a)
                    }
                }
            }, e.setTransitioning = function (e) {
                this._isTransitioning = e
            }, e.dispose = function () {
                oe.removeData(this._element, ae), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, e._getConfig = function (e) {
                return (e = l({}, ue, e)).toggle = Boolean(e.toggle), we.typeCheckConfig(se, e, fe), e
            }, e._getDimension = function () {
                return oe(this._element).hasClass(_e) ? _e : ve
            }, e._getParent = function () {
                var n = this,
                    e = null;
                we.isElement(this._config.parent) ? (e = this._config.parent, "undefined" != typeof this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
                var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    i = [].slice.call(e.querySelectorAll(t));
                return oe(i).each(function (e, t) {
                    n._addAriaAndCollapsedClass(a._getTargetFromElement(t), [t])
                }), e
            }, e._addAriaAndCollapsedClass = function (e, t) {
                if (e) {
                    var n = oe(e).hasClass(de);
                    t.length && oe(t).toggleClass(ge, !n).attr("aria-expanded", n)
                }
            }, a._getTargetFromElement = function (e) {
                var t = we.getSelectorFromElement(e);
                return t ? document.querySelector(t) : null
            }, a._jQueryInterface = function (i) {
                return this.each(function () {
                    var e = oe(this),
                        t = e.data(ae),
                        n = l({}, ue, e.data(), "object" == typeof i && i ? i : {});
                    if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || (t = new a(this, n), e.data(ae, t)), "string" == typeof i) {
                        if ("undefined" == typeof t[i]) throw new TypeError('No method named "' + i + '"');
                        t[i]()
                    }
                })
            }, s(a, null, [{
                key: "VERSION",
                get: function () {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function () {
                    return ue
                }
            }]), a
        }(), oe(document).on(he.CLICK_DATA_API, Ee, function (e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var n = oe(this),
                t = we.getSelectorFromElement(this),
                i = [].slice.call(document.querySelectorAll(t));
            oe(i).each(function () {
                var e = oe(this),
                    t = e.data(ae) ? "toggle" : n.data();
                be._jQueryInterface.call(e, t)
            })
        }), oe.fn[se] = be._jQueryInterface, oe.fn[se].Constructor = be, oe.fn[se].noConflict = function () {
            return oe.fn[se] = ce, be._jQueryInterface
        }, be), Ae = "undefined" != typeof window && "undefined" != typeof document, Ie = ["Edge", "Trident", "Firefox"], Oe = 0, Ne = 0; Ne < Ie.length; Ne += 1)
        if (Ae && 0 <= navigator.userAgent.indexOf(Ie[Ne])) {
            Oe = 1;
            break
        } var ke = Ae && window.Promise ? function (e) {
        var t = !1;
        return function () {
            t || (t = !0, window.Promise.resolve().then(function () {
                t = !1, e()
            }))
        }
    } : function (e) {
        var t = !1;
        return function () {
            t || (t = !0, setTimeout(function () {
                t = !1, e()
            }, Oe))
        }
    };

    function xe(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function Pe(e, t) {
        if (1 !== e.nodeType) return [];
        var n = getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function Le(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function je(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body
        }
        var t = Pe(e),
            n = t.overflow,
            i = t.overflowX,
            r = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + r + i) ? e : je(Le(e))
    }
    var He = Ae && !(!window.MSInputMethodContext || !document.documentMode),
        Me = Ae && /MSIE 10/.test(navigator.userAgent);

    function Fe(e) {
        return 11 === e ? He : 10 === e ? Me : He || Me
    }

    function We(e) {
        if (!e) return document.documentElement;
        for (var t = Fe(10) ? document.body : null, n = e.offsetParent; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === Pe(n, "position") ? We(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function Re(e) {
        return null !== e.parentNode ? Re(e.parentNode) : e
    }

    function Ue(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            r = n ? t : e,
            o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0);
        var s, a, l = o.commonAncestorContainer;
        if (e !== l && t !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && We(s.firstElementChild) !== s ? We(l) : l;
        var c = Re(e);
        return c.host ? Ue(c.host, t) : Ue(e, Re(t).host)
    }

    function Be(e) {
        var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || i)[t]
        }
        return e[t]
    }

    function qe(e, t) {
        var n = "x" === t ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }

    function Ke(e, t, n, i) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], Fe(10) ? n["offset" + e] + i["margin" + ("Height" === e ? "Top" : "Left")] + i["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
    }

    function Qe() {
        var e = document.body,
            t = document.documentElement,
            n = Fe(10) && getComputedStyle(t);
        return {
            height: Ke("Height", e, t, n),
            width: Ke("Width", e, t, n)
        }
    }
    var Ye = function () {
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (e, t, n) {
                return t && i(e.prototype, t), n && i(e, n), e
            }
        }(),
        Ve = function (e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        },
        ze = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        };

    function Ge(e) {
        return ze({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function Je(e) {
        var t = {};
        try {
            if (Fe(10)) {
                t = e.getBoundingClientRect();
                var n = Be(e, "top"),
                    i = Be(e, "left");
                t.top += n, t.left += i, t.bottom += n, t.right += i
            } else t = e.getBoundingClientRect()
        } catch (e) {}
        var r = {
                left: t.left,
                top: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top
            },
            o = "HTML" === e.nodeName ? Qe() : {},
            s = o.width || e.clientWidth || r.right - r.left,
            a = o.height || e.clientHeight || r.bottom - r.top,
            l = e.offsetWidth - s,
            c = e.offsetHeight - a;
        if (l || c) {
            var u = Pe(e);
            l -= qe(u, "x"), c -= qe(u, "y"), r.width -= l, r.height -= c
        }
        return Ge(r)
    }

    function Ze(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = Fe(10),
            r = "HTML" === t.nodeName,
            o = Je(e),
            s = Je(t),
            a = je(e),
            l = Pe(t),
            c = parseFloat(l.borderTopWidth, 10),
            u = parseFloat(l.borderLeftWidth, 10);
        n && "HTML" === t.nodeName && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
        var f = Ge({
            top: o.top - s.top - c,
            left: o.left - s.left - u,
            width: o.width,
            height: o.height
        });
        if (f.marginTop = 0, f.marginLeft = 0, !i && r) {
            var h = parseFloat(l.marginTop, 10),
                d = parseFloat(l.marginLeft, 10);
            f.top -= c - h, f.bottom -= c - h, f.left -= u - d, f.right -= u - d, f.marginTop = h, f.marginLeft = d
        }
        return (i && !n ? t.contains(a) : t === a && "BODY" !== a.nodeName) && (f = function (e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                i = Be(t, "top"),
                r = Be(t, "left"),
                o = n ? -1 : 1;
            return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
        }(f, t)), f
    }

    function Xe(e) {
        if (!e || !e.parentElement || Fe()) return document.documentElement;
        for (var t = e.parentElement; t && "none" === Pe(t, "transform");) t = t.parentElement;
        return t || document.documentElement
    }

    function $e(e, t, n, i) {
        var r = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            o = {
                top: 0,
                left: 0
            },
            s = r ? Xe(e) : Ue(e, t);
        if ("viewport" === i) o = function (e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                n = e.ownerDocument.documentElement,
                i = Ze(e, n),
                r = Math.max(n.clientWidth, window.innerWidth || 0),
                o = Math.max(n.clientHeight, window.innerHeight || 0),
                s = t ? 0 : Be(n),
                a = t ? 0 : Be(n, "left");
            return Ge({
                top: s - i.top + i.marginTop,
                left: a - i.left + i.marginLeft,
                width: r,
                height: o
            })
        }(s, r);
        else {
            var a = void 0;
            "scrollParent" === i ? "BODY" === (a = je(Le(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === i ? e.ownerDocument.documentElement : i;
            var l = Ze(a, s, r);
            if ("HTML" !== a.nodeName || function e(t) {
                    var n = t.nodeName;
                    return "BODY" !== n && "HTML" !== n && ("fixed" === Pe(t, "position") || e(Le(t)))
                }(s)) o = l;
            else {
                var c = Qe(),
                    u = c.height,
                    f = c.width;
                o.top += l.top - l.marginTop, o.bottom = u + l.top, o.left += l.left - l.marginLeft, o.right = f + l.left
            }
        }
        return o.left += n, o.top += n, o.right -= n, o.bottom -= n, o
    }

    function et(e, t, i, n, r) {
        var o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var s = $e(i, n, o, r),
            a = {
                top: {
                    width: s.width,
                    height: t.top - s.top
                },
                right: {
                    width: s.right - t.right,
                    height: s.height
                },
                bottom: {
                    width: s.width,
                    height: s.bottom - t.bottom
                },
                left: {
                    width: t.left - s.left,
                    height: s.height
                }
            },
            l = Object.keys(a).map(function (e) {
                return ze({
                    key: e
                }, a[e], {
                    area: (t = a[e], t.width * t.height)
                });
                var t
            }).sort(function (e, t) {
                return t.area - e.area
            }),
            c = l.filter(function (e) {
                var t = e.width,
                    n = e.height;
                return t >= i.clientWidth && n >= i.clientHeight
            }),
            u = 0 < c.length ? c[0].key : l[0].key,
            f = e.split("-")[1];
        return u + (f ? "-" + f : "")
    }

    function tt(e, t, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return Ze(n, i ? Xe(t) : Ue(t, n), i)
    }

    function nt(e) {
        var t = getComputedStyle(e),
            n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }

    function it(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e]
        })
    }

    function rt(e, t, n) {
        n = n.split("-")[0];
        var i = nt(e),
            r = {
                width: i.width,
                height: i.height
            },
            o = -1 !== ["right", "left"].indexOf(n),
            s = o ? "top" : "left",
            a = o ? "left" : "top",
            l = o ? "height" : "width",
            c = o ? "width" : "height";
        return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[c] : t[it(a)], r
    }

    function ot(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function st(e, n, t) {
        return (void 0 === t ? e : e.slice(0, function (e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function (e) {
                return e[t] === n
            });
            var i = ot(e, function (e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }(e, "name", t))).forEach(function (e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var t = e.function || e.fn;
            e.enabled && xe(t) && (n.offsets.popper = Ge(n.offsets.popper), n.offsets.reference = Ge(n.offsets.reference), n = t(n, e))
        }), n
    }

    function at(e, n) {
        return e.some(function (e) {
            var t = e.name;
            return e.enabled && t === n
        })
    }

    function lt(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var r = t[i],
                o = r ? "" + r + n : e;
            if ("undefined" != typeof document.body.style[o]) return o
        }
        return null
    }

    function ct(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function ut(e, t, n, i) {
        n.updateBound = i, ct(e).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var r = je(e);
        return function e(t, n, i, r) {
            var o = "BODY" === t.nodeName,
                s = o ? t.ownerDocument.defaultView : t;
            s.addEventListener(n, i, {
                passive: !0
            }), o || e(je(s.parentNode), n, i, r), r.push(s)
        }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
    }

    function ft() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, ct(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
            e.removeEventListener("scroll", t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
    }

    function ht(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function dt(n, i) {
        Object.keys(i).forEach(function (e) {
            var t = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && ht(i[e]) && (t = "px"), n.style[e] = i[e] + t
        })
    }

    function pt(e, t, n) {
        var i = ot(e, function (e) {
                return e.name === t
            }),
            r = !!i && e.some(function (e) {
                return e.name === n && e.enabled && e.order < i.order
            });
        if (!r) {
            var o = "`" + t + "`",
                s = "`" + n + "`";
            console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return r
    }
    var mt = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        gt = mt.slice(3);

    function _t(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = gt.indexOf(e),
            i = gt.slice(n + 1).concat(gt.slice(0, n));
        return t ? i.reverse() : i
    }
    var vt = "flip",
        yt = "clockwise",
        Et = "counterclockwise";

    function bt(e, r, o, t) {
        var s = [0, 0],
            a = -1 !== ["right", "left"].indexOf(t),
            n = e.split(/(\+|\-)/).map(function (e) {
                return e.trim()
            }),
            i = n.indexOf(ot(n, function (e) {
                return -1 !== e.search(/,|\s/)
            }));
        n[i] && -1 === n[i].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 !== i ? [n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))] : [n];
        return (c = c.map(function (e, t) {
            var n = (1 === t ? !a : a) ? "height" : "width",
                i = !1;
            return e.reduce(function (e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, i = !0, e) : i ? (e[e.length - 1] += t, i = !1, e) : e.concat(t)
            }, []).map(function (e) {
                return function (e, t, n, i) {
                    var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        o = +r[1],
                        s = r[2];
                    if (!o) return e;
                    if (0 === s.indexOf("%")) {
                        var a = void 0;
                        switch (s) {
                            case "%p":
                                a = n;
                                break;
                            case "%":
                            case "%r":
                            default:
                                a = i
                        }
                        return Ge(a)[t] / 100 * o
                    }
                    if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                    return o
                }(e, n, r, o)
            })
        })).forEach(function (n, i) {
            n.forEach(function (e, t) {
                ht(e) && (s[i] += e * ("-" === n[t - 1] ? -1 : 1))
            })
        }), s
    }
    var wt = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {},
            onUpdate: function () {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = t.split("-")[1];
                        if (i) {
                            var r = e.offsets,
                                o = r.reference,
                                s = r.popper,
                                a = -1 !== ["bottom", "top"].indexOf(n),
                                l = a ? "left" : "top",
                                c = a ? "width" : "height",
                                u = {
                                    start: Ve({}, l, o[l]),
                                    end: Ve({}, l, o[l] + o[c] - s[c])
                                };
                            e.offsets.popper = ze({}, s, u[i])
                        }
                        return e
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function (e, t) {
                        var n = t.offset,
                            i = e.placement,
                            r = e.offsets,
                            o = r.popper,
                            s = r.reference,
                            a = i.split("-")[0],
                            l = void 0;
                        return l = ht(+n) ? [+n, 0] : bt(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), e.popper = o, e
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function (e, i) {
                        var t = i.boundariesElement || We(e.instance.popper);
                        e.instance.reference === t && (t = We(t));
                        var n = lt("transform"),
                            r = e.instance.popper.style,
                            o = r.top,
                            s = r.left,
                            a = r[n];
                        r.top = "", r.left = "", r[n] = "";
                        var l = $e(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed);
                        r.top = o, r.left = s, r[n] = a, i.boundaries = l;
                        var c = i.priority,
                            u = e.offsets.popper,
                            f = {
                                primary: function (e) {
                                    var t = u[e];
                                    return u[e] < l[e] && !i.escapeWithReference && (t = Math.max(u[e], l[e])), Ve({}, e, t)
                                },
                                secondary: function (e) {
                                    var t = "right" === e ? "left" : "top",
                                        n = u[t];
                                    return u[e] > l[e] && !i.escapeWithReference && (n = Math.min(u[t], l[e] - ("right" === e ? u.width : u.height))), Ve({}, t, n)
                                }
                            };
                        return c.forEach(function (e) {
                            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                            u = ze({}, u, f[t](e))
                        }), e.offsets.popper = u, e
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.offsets,
                            n = t.popper,
                            i = t.reference,
                            r = e.placement.split("-")[0],
                            o = Math.floor,
                            s = -1 !== ["top", "bottom"].indexOf(r),
                            a = s ? "right" : "bottom",
                            l = s ? "left" : "top",
                            c = s ? "width" : "height";
                        return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function (e, t) {
                        var n;
                        if (!pt(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var i = t.element;
                        if ("string" == typeof i) {
                            if (!(i = e.instance.popper.querySelector(i))) return e
                        } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var r = e.placement.split("-")[0],
                            o = e.offsets,
                            s = o.popper,
                            a = o.reference,
                            l = -1 !== ["left", "right"].indexOf(r),
                            c = l ? "height" : "width",
                            u = l ? "Top" : "Left",
                            f = u.toLowerCase(),
                            h = l ? "left" : "top",
                            d = l ? "bottom" : "right",
                            p = nt(i)[c];
                        a[d] - p < s[f] && (e.offsets.popper[f] -= s[f] - (a[d] - p)), a[f] + p > s[d] && (e.offsets.popper[f] += a[f] + p - s[d]), e.offsets.popper = Ge(e.offsets.popper);
                        var m = a[f] + a[c] / 2 - p / 2,
                            g = Pe(e.instance.popper),
                            _ = parseFloat(g["margin" + u], 10),
                            v = parseFloat(g["border" + u + "Width"], 10),
                            y = m - e.offsets.popper[f] - _ - v;
                        return y = Math.max(Math.min(s[c] - p, y), 0), e.arrowElement = i, e.offsets.arrow = (Ve(n = {}, f, Math.round(y)), Ve(n, h, ""), n), e
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function (p, m) {
                        if (at(p.instance.modifiers, "inner")) return p;
                        if (p.flipped && p.placement === p.originalPlacement) return p;
                        var g = $e(p.instance.popper, p.instance.reference, m.padding, m.boundariesElement, p.positionFixed),
                            _ = p.placement.split("-")[0],
                            v = it(_),
                            y = p.placement.split("-")[1] || "",
                            E = [];
                        switch (m.behavior) {
                            case vt:
                                E = [_, v];
                                break;
                            case yt:
                                E = _t(_);
                                break;
                            case Et:
                                E = _t(_, !0);
                                break;
                            default:
                                E = m.behavior
                        }
                        return E.forEach(function (e, t) {
                            if (_ !== e || E.length === t + 1) return p;
                            _ = p.placement.split("-")[0], v = it(_);
                            var n, i = p.offsets.popper,
                                r = p.offsets.reference,
                                o = Math.floor,
                                s = "left" === _ && o(i.right) > o(r.left) || "right" === _ && o(i.left) < o(r.right) || "top" === _ && o(i.bottom) > o(r.top) || "bottom" === _ && o(i.top) < o(r.bottom),
                                a = o(i.left) < o(g.left),
                                l = o(i.right) > o(g.right),
                                c = o(i.top) < o(g.top),
                                u = o(i.bottom) > o(g.bottom),
                                f = "left" === _ && a || "right" === _ && l || "top" === _ && c || "bottom" === _ && u,
                                h = -1 !== ["top", "bottom"].indexOf(_),
                                d = !!m.flipVariations && (h && "start" === y && a || h && "end" === y && l || !h && "start" === y && c || !h && "end" === y && u);
                            (s || f || d) && (p.flipped = !0, (s || f) && (_ = E[t + 1]), d && (y = "end" === (n = y) ? "start" : "start" === n ? "end" : n), p.placement = _ + (y ? "-" + y : ""), p.offsets.popper = ze({}, p.offsets.popper, rt(p.instance.popper, p.offsets.reference, p.placement)), p = st(p.instance.modifiers, p, "flip"))
                        }), p
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport"
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function (e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            i = e.offsets,
                            r = i.popper,
                            o = i.reference,
                            s = -1 !== ["left", "right"].indexOf(n),
                            a = -1 === ["top", "left"].indexOf(n);
                        return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), e.placement = it(t), e.offsets.popper = Ge(r), e
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function (e) {
                        if (!pt(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference,
                            n = ot(e.instance.modifiers, function (e) {
                                return "preventOverflow" === e.name
                            }).boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                        }
                        return e
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function (e, t) {
                        var n = t.x,
                            i = t.y,
                            r = e.offsets.popper,
                            o = ot(e.instance.modifiers, function (e) {
                                return "applyStyle" === e.name
                            }).gpuAcceleration;
                        void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var s = void 0 !== o ? o : t.gpuAcceleration,
                            a = Je(We(e.instance.popper)),
                            l = {
                                position: r.position
                            },
                            c = {
                                left: Math.floor(r.left),
                                top: Math.round(r.top),
                                bottom: Math.round(r.bottom),
                                right: Math.floor(r.right)
                            },
                            u = "bottom" === n ? "top" : "bottom",
                            f = "right" === i ? "left" : "right",
                            h = lt("transform"),
                            d = void 0,
                            p = void 0;
                        if (p = "bottom" === u ? -a.height + c.bottom : c.top, d = "right" === f ? -a.width + c.right : c.left, s && h) l[h] = "translate3d(" + d + "px, " + p + "px, 0)", l[u] = 0, l[f] = 0, l.willChange = "transform";
                        else {
                            var m = "bottom" === u ? -1 : 1,
                                g = "right" === f ? -1 : 1;
                            l[u] = p * m, l[f] = d * g, l.willChange = u + ", " + f
                        }
                        var _ = {
                            "x-placement": e.placement
                        };
                        return e.attributes = ze({}, _, e.attributes), e.styles = ze({}, l, e.styles), e.arrowStyles = ze({}, e.offsets.arrow, e.arrowStyles), e
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function (e) {
                        var t, n;
                        return dt(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function (e) {
                            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                        }), e.arrowElement && Object.keys(e.arrowStyles).length && dt(e.arrowElement, e.arrowStyles), e
                    },
                    onLoad: function (e, t, n, i, r) {
                        var o = tt(r, t, e, n.positionFixed),
                            s = et(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return t.setAttribute("x-placement", s), dt(t, {
                            position: n.positionFixed ? "fixed" : "absolute"
                        }), n
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        Ct = function () {
            function o(e, t) {
                var n = this,
                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), this.scheduleUpdate = function () {
                    return requestAnimationFrame(n.update)
                }, this.update = ke(this.update.bind(this)), this.options = ze({}, o.Defaults, i), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(ze({}, o.Defaults.modifiers, i.modifiers)).forEach(function (e) {
                    n.options.modifiers[e] = ze({}, o.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                    return ze({
                        name: e
                    }, n.options.modifiers[e])
                }).sort(function (e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function (e) {
                    e.enabled && xe(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
                }), this.update();
                var r = this.options.eventsEnabled;
                r && this.enableEventListeners(), this.state.eventsEnabled = r
            }
            return Ye(o, [{
                key: "update",
                value: function () {
                    return function () {
                        if (!this.state.isDestroyed) {
                            var e = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            e.offsets.reference = tt(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = et(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = rt(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = st(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy",
                value: function () {
                    return function () {
                        return this.state.isDestroyed = !0, at(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[lt("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function () {
                    return function () {
                        this.state.eventsEnabled || (this.state = ut(this.reference, this.options, this.state, this.scheduleUpdate))
                    }.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function () {
                    return ft.call(this)
                }
            }]), o
        }();
    Ct.Utils = ("undefined" != typeof window ? window : global).PopperUtils, Ct.placements = mt, Ct.Defaults = wt;
    var Tt, St, Dt, At, It, Ot, Nt, kt, xt, Pt, Lt, jt, Ht, Mt, Ft, Wt, Rt, Ut, Bt, qt, Kt, Qt, Yt, Vt, zt, Gt, Jt, Zt, Xt, $t, en, tn, nn, rn, on, sn, an, ln, cn, un, fn, hn, dn, pn, mn, gn, _n, vn, yn, En, bn, wn, Cn, Tn, Sn, Dn, An, In, On, Nn, kn, xn, Pn, Ln, jn, Hn, Mn, Fn, Wn, Rn, Un, Bn, qn, Kn, Qn, Yn, Vn, zn, Gn, Jn, Zn, Xn, $n, ei, ti, ni, ii, ri, oi, si, ai, li, ci, ui, fi, hi, di, pi, mi, gi, _i, vi, yi, Ei, bi, wi, Ci, Ti, Si, Di, Ai, Ii, Oi, Ni, ki, xi, Pi, Li, ji, Hi, Mi, Fi, Wi, Ri, Ui, Bi = (St = "dropdown", At = "." + (Dt = "bs.dropdown"), It = ".data-api", Ot = (Tt = t).fn[St], Nt = new RegExp("38|40|27"), kt = {
            HIDE: "hide" + At,
            HIDDEN: "hidden" + At,
            SHOW: "show" + At,
            SHOWN: "shown" + At,
            CLICK: "click" + At,
            CLICK_DATA_API: "click" + At + It,
            KEYDOWN_DATA_API: "keydown" + At + It,
            KEYUP_DATA_API: "keyup" + At + It
        }, xt = "disabled", Pt = "show", Lt = "dropup", jt = "dropright", Ht = "dropleft", Mt = "dropdown-menu-right", Ft = "position-static", Wt = '[data-toggle="dropdown"]', Rt = ".dropdown form", Ut = ".dropdown-menu", Bt = ".navbar-nav", qt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Kt = "top-start", Qt = "top-end", Yt = "bottom-start", Vt = "bottom-end", zt = "right-start", Gt = "left-start", Jt = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        }, Zt = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        }, Xt = function () {
            function c(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var e = c.prototype;
            return e.toggle = function () {
                if (!this._element.disabled && !Tt(this._element).hasClass(xt)) {
                    var e = c._getParentFromElement(this._element),
                        t = Tt(this._menu).hasClass(Pt);
                    if (c._clearMenus(), !t) {
                        var n = {
                                relatedTarget: this._element
                            },
                            i = Tt.Event(kt.SHOW, n);
                        if (Tt(e).trigger(i), !i.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if ("undefined" == typeof Ct) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                var r = this._element;
                                "parent" === this._config.reference ? r = e : we.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && Tt(e).addClass(Ft), this._popper = new Ct(r, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === Tt(e).closest(Bt).length && Tt(document.body).children().on("mouseover", null, Tt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), Tt(this._menu).toggleClass(Pt), Tt(e).toggleClass(Pt).trigger(Tt.Event(kt.SHOWN, n))
                        }
                    }
                }
            }, e.dispose = function () {
                Tt.removeData(this._element, Dt), Tt(this._element).off(At), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, e.update = function () {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, e._addEventListeners = function () {
                var t = this;
                Tt(this._element).on(kt.CLICK, function (e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle()
                })
            }, e._getConfig = function (e) {
                return e = l({}, this.constructor.Default, Tt(this._element).data(), e), we.typeCheckConfig(St, e, this.constructor.DefaultType), e
            }, e._getMenuElement = function () {
                if (!this._menu) {
                    var e = c._getParentFromElement(this._element);
                    e && (this._menu = e.querySelector(Ut))
                }
                return this._menu
            }, e._getPlacement = function () {
                var e = Tt(this._element.parentNode),
                    t = Yt;
                return e.hasClass(Lt) ? (t = Kt, Tt(this._menu).hasClass(Mt) && (t = Qt)) : e.hasClass(jt) ? t = zt : e.hasClass(Ht) ? t = Gt : Tt(this._menu).hasClass(Mt) && (t = Vt), t
            }, e._detectNavbar = function () {
                return 0 < Tt(this._element).closest(".navbar").length
            }, e._getPopperConfig = function () {
                var t = this,
                    e = {};
                "function" == typeof this._config.offset ? e.fn = function (e) {
                    return e.offsets = l({}, e.offsets, t._config.offset(e.offsets) || {}), e
                } : e.offset = this._config.offset;
                var n = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: e,
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (n.modifiers.applyStyle = {
                    enabled: !1
                }), n
            }, c._jQueryInterface = function (t) {
                return this.each(function () {
                    var e = Tt(this).data(Dt);
                    if (e || (e = new c(this, "object" == typeof t ? t : null), Tt(this).data(Dt, e)), "string" == typeof t) {
                        if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                })
            }, c._clearMenus = function (e) {
                if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                    for (var t = [].slice.call(document.querySelectorAll(Wt)), n = 0, i = t.length; n < i; n++) {
                        var r = c._getParentFromElement(t[n]),
                            o = Tt(t[n]).data(Dt),
                            s = {
                                relatedTarget: t[n]
                            };
                        if (e && "click" === e.type && (s.clickEvent = e), o) {
                            var a = o._menu;
                            if (Tt(r).hasClass(Pt) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && Tt.contains(r, e.target))) {
                                var l = Tt.Event(kt.HIDE, s);
                                Tt(r).trigger(l), l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && Tt(document.body).children().off("mouseover", null, Tt.noop), t[n].setAttribute("aria-expanded", "false"), Tt(a).removeClass(Pt), Tt(r).removeClass(Pt).trigger(Tt.Event(kt.HIDDEN, s)))
                            }
                        }
                    }
            }, c._getParentFromElement = function (e) {
                var t, n = we.getSelectorFromElement(e);
                return n && (t = document.querySelector(n)), t || e.parentNode
            }, c._dataApiKeydownHandler = function (e) {
                if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || Tt(e.target).closest(Ut).length)) : Nt.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !Tt(this).hasClass(xt))) {
                    var t = c._getParentFromElement(this),
                        n = Tt(t).hasClass(Pt);
                    if ((n || 27 === e.which && 32 === e.which) && (!n || 27 !== e.which && 32 !== e.which)) {
                        var i = [].slice.call(t.querySelectorAll(qt));
                        if (0 !== i.length) {
                            var r = i.indexOf(e.target);
                            38 === e.which && 0 < r && r--, 40 === e.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus()
                        }
                    } else {
                        if (27 === e.which) {
                            var o = t.querySelector(Wt);
                            Tt(o).trigger("focus")
                        }
                        Tt(this).trigger("click")
                    }
                }
            }, s(c, null, [{
                key: "VERSION",
                get: function () {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function () {
                    return Jt
                }
            }, {
                key: "DefaultType",
                get: function () {
                    return Zt
                }
            }]), c
        }(), Tt(document).on(kt.KEYDOWN_DATA_API, Wt, Xt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API, Ut, Xt._dataApiKeydownHandler).on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Xt._clearMenus).on(kt.CLICK_DATA_API, Wt, function (e) {
            e.preventDefault(), e.stopPropagation(), Xt._jQueryInterface.call(Tt(this), "toggle")
        }).on(kt.CLICK_DATA_API, Rt, function (e) {
            e.stopPropagation()
        }), Tt.fn[St] = Xt._jQueryInterface, Tt.fn[St].Constructor = Xt, Tt.fn[St].noConflict = function () {
            return Tt.fn[St] = Ot, Xt._jQueryInterface
        }, Xt),
        qi = (en = "modal", nn = "." + (tn = "bs.modal"), rn = ($t = t).fn[en], on = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }, sn = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }, an = {
            HIDE: "hide" + nn,
            HIDDEN: "hidden" + nn,
            SHOW: "show" + nn,
            SHOWN: "shown" + nn,
            FOCUSIN: "focusin" + nn,
            RESIZE: "resize" + nn,
            CLICK_DISMISS: "click.dismiss" + nn,
            KEYDOWN_DISMISS: "keydown.dismiss" + nn,
            MOUSEUP_DISMISS: "mouseup.dismiss" + nn,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + nn,
            CLICK_DATA_API: "click" + nn + ".data-api"
        }, ln = "modal-scrollbar-measure", cn = "modal-backdrop", un = "modal-open", fn = "fade", hn = "show", dn = ".modal-dialog", pn = '[data-toggle="modal"]', mn = '[data-dismiss="modal"]', gn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", _n = ".sticky-top", vn = function () {
            function r(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(dn), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
            }
            var e = r.prototype;
            return e.toggle = function (e) {
                return this._isShown ? this.hide() : this.show(e)
            }, e.show = function (e) {
                var t = this;
                if (!this._isTransitioning && !this._isShown) {
                    $t(this._element).hasClass(fn) && (this._isTransitioning = !0);
                    var n = $t.Event(an.SHOW, {
                        relatedTarget: e
                    });
                    $t(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), $t(document.body).addClass(un), this._setEscapeEvent(), this._setResizeEvent(), $t(this._element).on(an.CLICK_DISMISS, mn, function (e) {
                        return t.hide(e)
                    }), $t(this._dialog).on(an.MOUSEDOWN_DISMISS, function () {
                        $t(t._element).one(an.MOUSEUP_DISMISS, function (e) {
                            $t(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function () {
                        return t._showElement(e)
                    }))
                }
            }, e.hide = function (e) {
                var t = this;
                if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                    var n = $t.Event(an.HIDE);
                    if ($t(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                        this._isShown = !1;
                        var i = $t(this._element).hasClass(fn);
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), $t(document).off(an.FOCUSIN), $t(this._element).removeClass(hn), $t(this._element).off(an.CLICK_DISMISS), $t(this._dialog).off(an.MOUSEDOWN_DISMISS), i) {
                            var r = we.getTransitionDurationFromElement(this._element);
                            $t(this._element).one(we.TRANSITION_END, function (e) {
                                return t._hideModal(e)
                            }).emulateTransitionEnd(r)
                        } else this._hideModal()
                    }
                }
            }, e.dispose = function () {
                $t.removeData(this._element, tn), $t(window, document, this._element, this._backdrop).off(nn), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
            }, e.handleUpdate = function () {
                this._adjustDialog()
            }, e._getConfig = function (e) {
                return e = l({}, on, e), we.typeCheckConfig(en, e, sn), e
            }, e._showElement = function (e) {
                var t = this,
                    n = $t(this._element).hasClass(fn);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && we.reflow(this._element), $t(this._element).addClass(hn), this._config.focus && this._enforceFocus();
                var i = $t.Event(an.SHOWN, {
                        relatedTarget: e
                    }),
                    r = function () {
                        t._config.focus && t._element.focus(), t._isTransitioning = !1, $t(t._element).trigger(i)
                    };
                if (n) {
                    var o = we.getTransitionDurationFromElement(this._element);
                    $t(this._dialog).one(we.TRANSITION_END, r).emulateTransitionEnd(o)
                } else r()
            }, e._enforceFocus = function () {
                var t = this;
                $t(document).off(an.FOCUSIN).on(an.FOCUSIN, function (e) {
                    document !== e.target && t._element !== e.target && 0 === $t(t._element).has(e.target).length && t._element.focus()
                })
            }, e._setEscapeEvent = function () {
                var t = this;
                this._isShown && this._config.keyboard ? $t(this._element).on(an.KEYDOWN_DISMISS, function (e) {
                    27 === e.which && (e.preventDefault(), t.hide())
                }) : this._isShown || $t(this._element).off(an.KEYDOWN_DISMISS)
            }, e._setResizeEvent = function () {
                var t = this;
                this._isShown ? $t(window).on(an.RESIZE, function (e) {
                    return t.handleUpdate(e)
                }) : $t(window).off(an.RESIZE)
            }, e._hideModal = function () {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                    $t(document.body).removeClass(un), e._resetAdjustments(), e._resetScrollbar(), $t(e._element).trigger(an.HIDDEN)
                })
            }, e._removeBackdrop = function () {
                this._backdrop && ($t(this._backdrop).remove(), this._backdrop = null)
            }, e._showBackdrop = function (e) {
                var t = this,
                    n = $t(this._element).hasClass(fn) ? fn : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = cn, n && this._backdrop.classList.add(n), $t(this._backdrop).appendTo(document.body), $t(this._element).on(an.CLICK_DISMISS, function (e) {
                            t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
                        }), n && we.reflow(this._backdrop), $t(this._backdrop).addClass(hn), !e) return;
                    if (!n) return void e();
                    var i = we.getTransitionDurationFromElement(this._backdrop);
                    $t(this._backdrop).one(we.TRANSITION_END, e).emulateTransitionEnd(i)
                } else if (!this._isShown && this._backdrop) {
                    $t(this._backdrop).removeClass(hn);
                    var r = function () {
                        t._removeBackdrop(), e && e()
                    };
                    if ($t(this._element).hasClass(fn)) {
                        var o = we.getTransitionDurationFromElement(this._backdrop);
                        $t(this._backdrop).one(we.TRANSITION_END, r).emulateTransitionEnd(o)
                    } else r()
                } else e && e()
            }, e._adjustDialog = function () {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, e._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, e._checkScrollbar = function () {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, e._setScrollbar = function () {
                var r = this;
                if (this._isBodyOverflowing) {
                    var e = [].slice.call(document.querySelectorAll(gn)),
                        t = [].slice.call(document.querySelectorAll(_n));
                    $t(e).each(function (e, t) {
                        var n = t.style.paddingRight,
                            i = $t(t).css("padding-right");
                        $t(t).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
                    }), $t(t).each(function (e, t) {
                        var n = t.style.marginRight,
                            i = $t(t).css("margin-right");
                        $t(t).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
                    });
                    var n = document.body.style.paddingRight,
                        i = $t(document.body).css("padding-right");
                    $t(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                }
            }, e._resetScrollbar = function () {
                var e = [].slice.call(document.querySelectorAll(gn));
                $t(e).each(function (e, t) {
                    var n = $t(t).data("padding-right");
                    $t(t).removeData("padding-right"), t.style.paddingRight = n || ""
                });
                var t = [].slice.call(document.querySelectorAll("" + _n));
                $t(t).each(function (e, t) {
                    var n = $t(t).data("margin-right");
                    "undefined" != typeof n && $t(t).css("margin-right", n).removeData("margin-right")
                });
                var n = $t(document.body).data("padding-right");
                $t(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
            }, e._getScrollbarWidth = function () {
                var e = document.createElement("div");
                e.className = ln, document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, r._jQueryInterface = function (n, i) {
                return this.each(function () {
                    var e = $t(this).data(tn),
                        t = l({}, on, $t(this).data(), "object" == typeof n && n ? n : {});
                    if (e || (e = new r(this, t), $t(this).data(tn, e)), "string" == typeof n) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n](i)
                    } else t.show && e.show(i)
                })
            }, s(r, null, [{
                key: "VERSION",
                get: function () {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function () {
                    return on
                }
            }]), r
        }(), $t(document).on(an.CLICK_DATA_API, pn, function (e) {
            var t, n = this,
                i = we.getSelectorFromElement(this);
            i && (t = document.querySelector(i));
            var r = $t(t).data(tn) ? "toggle" : l({}, $t(t).data(), $t(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
            var o = $t(t).one(an.SHOW, function (e) {
                e.isDefaultPrevented() || o.one(an.HIDDEN, function () {
                    $t(n).is(":visible") && n.focus()
                })
            });
            vn._jQueryInterface.call($t(t), r, this)
        }), $t.fn[en] = vn._jQueryInterface, $t.fn[en].Constructor = vn, $t.fn[en].noConflict = function () {
            return $t.fn[en] = rn, vn._jQueryInterface
        }, vn),
        Ki = (En = "tooltip", wn = "." + (bn = "bs.tooltip"), Cn = (yn = t).fn[En], Tn = "bs-tooltip", Sn = new RegExp("(^|\\s)" + Tn + "\\S+", "g"), In = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !(An = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: "right",
                BOTTOM: "bottom",
                LEFT: "left"
            }),
            selector: !(Dn = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)"
            }),
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
        }, Nn = "out", kn = {
            HIDE: "hide" + wn,
            HIDDEN: "hidden" + wn,
            SHOW: (On = "show") + wn,
            SHOWN: "shown" + wn,
            INSERTED: "inserted" + wn,
            CLICK: "click" + wn,
            FOCUSIN: "focusin" + wn,
            FOCUSOUT: "focusout" + wn,
            MOUSEENTER: "mouseenter" + wn,
            MOUSELEAVE: "mouseleave" + wn
        }, xn = "fade", Pn = "show", Ln = ".tooltip-inner", jn = ".arrow", Hn = "hover", Mn = "focus", Fn = "click", Wn = "manual", Rn = function () {
            function i(e, t) {
                if ("undefined" == typeof Ct) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }
            var e = i.prototype;
            return e.enable = function () {
                this._isEnabled = !0
            }, e.disable = function () {
                this._isEnabled = !1
            }, e.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled
            }, e.toggle = function (e) {
                if (this._isEnabled)
                    if (e) {
                        var t = this.constructor.DATA_KEY,
                            n = yn(e.currentTarget).data(t);
                        n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), yn(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (yn(this.getTipElement()).hasClass(Pn)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, e.dispose = function () {
                clearTimeout(this._timeout), yn.removeData(this.element, this.constructor.DATA_KEY), yn(this.element).off(this.constructor.EVENT_KEY), yn(this.element).closest(".modal").off("hide.bs.modal"), this.tip && yn(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, e.show = function () {
                var t = this;
                if ("none" === yn(this.element).css("display")) throw new Error("Please use show on visible elements");
                var e = yn.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    yn(this.element).trigger(e);
                    var n = yn.contains(this.element.ownerDocument.documentElement, this.element);
                    if (e.isDefaultPrevented() || !n) return;
                    var i = this.getTipElement(),
                        r = we.getUID(this.constructor.NAME);
                    i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && yn(i).addClass(xn);
                    var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
                        s = this._getAttachment(o);
                    this.addAttachmentClass(s);
                    var a = !1 === this.config.container ? document.body : yn(document).find(this.config.container);
                    yn(i).data(this.constructor.DATA_KEY, this), yn.contains(this.element.ownerDocument.documentElement, this.tip) || yn(i).appendTo(a), yn(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Ct(this.element, i, {
                        placement: s,
                        modifiers: {
                            offset: {
                                offset: this.config.offset
                            },
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: jn
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function (e) {
                            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                        },
                        onUpdate: function (e) {
                            t._handlePopperPlacementChange(e)
                        }
                    }), yn(i).addClass(Pn), "ontouchstart" in document.documentElement && yn(document.body).children().on("mouseover", null, yn.noop);
                    var l = function () {
                        t.config.animation && t._fixTransition();
                        var e = t._hoverState;
                        t._hoverState = null, yn(t.element).trigger(t.constructor.Event.SHOWN), e === Nn && t._leave(null, t)
                    };
                    if (yn(this.tip).hasClass(xn)) {
                        var c = we.getTransitionDurationFromElement(this.tip);
                        yn(this.tip).one(we.TRANSITION_END, l).emulateTransitionEnd(c)
                    } else l()
                }
            }, e.hide = function (e) {
                var t = this,
                    n = this.getTipElement(),
                    i = yn.Event(this.constructor.Event.HIDE),
                    r = function () {
                        t._hoverState !== On && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), yn(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e()
                    };
                if (yn(this.element).trigger(i), !i.isDefaultPrevented()) {
                    if (yn(n).removeClass(Pn), "ontouchstart" in document.documentElement && yn(document.body).children().off("mouseover", null, yn.noop), this._activeTrigger[Fn] = !1, this._activeTrigger[Mn] = !1, this._activeTrigger[Hn] = !1, yn(this.tip).hasClass(xn)) {
                        var o = we.getTransitionDurationFromElement(n);
                        yn(n).one(we.TRANSITION_END, r).emulateTransitionEnd(o)
                    } else r();
                    this._hoverState = ""
                }
            }, e.update = function () {
                null !== this._popper && this._popper.scheduleUpdate()
            }, e.isWithContent = function () {
                return Boolean(this.getTitle())
            }, e.addAttachmentClass = function (e) {
                yn(this.getTipElement()).addClass(Tn + "-" + e)
            }, e.getTipElement = function () {
                return this.tip = this.tip || yn(this.config.template)[0], this.tip
            }, e.setContent = function () {
                var e = this.getTipElement();
                this.setElementContent(yn(e.querySelectorAll(Ln)), this.getTitle()), yn(e).removeClass(xn + " " + Pn)
            }, e.setElementContent = function (e, t) {
                var n = this.config.html;
                "object" == typeof t && (t.nodeType || t.jquery) ? n ? yn(t).parent().is(e) || e.empty().append(t) : e.text(yn(t).text()) : e[n ? "html" : "text"](t)
            }, e.getTitle = function () {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
            }, e._getAttachment = function (e) {
                return An[e.toUpperCase()]
            }, e._setListeners = function () {
                var i = this;
                this.config.trigger.split(" ").forEach(function (e) {
                    if ("click" === e) yn(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (e) {
                        return i.toggle(e)
                    });
                    else if (e !== Wn) {
                        var t = e === Hn ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                            n = e === Hn ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                        yn(i.element).on(t, i.config.selector, function (e) {
                            return i._enter(e)
                        }).on(n, i.config.selector, function (e) {
                            return i._leave(e)
                        })
                    }
                    yn(i.element).closest(".modal").on("hide.bs.modal", function () {
                        return i.hide()
                    })
                }), this.config.selector ? this.config = l({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, e._fixTitle = function () {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, e._enter = function (e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || yn(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), yn(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? Mn : Hn] = !0), yn(t.getTipElement()).hasClass(Pn) || t._hoverState === On ? t._hoverState = On : (clearTimeout(t._timeout), t._hoverState = On, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function () {
                    t._hoverState === On && t.show()
                }, t.config.delay.show) : t.show())
            }, e._leave = function (e, t) {
                var n = this.constructor.DATA_KEY;
                (t = t || yn(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), yn(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? Mn : Hn] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = Nn, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function () {
                    t._hoverState === Nn && t.hide()
                }, t.config.delay.hide) : t.hide())
            }, e._isWithActiveTrigger = function () {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1
            }, e._getConfig = function (e) {
                return "number" == typeof (e = l({}, this.constructor.Default, yn(this.element).data(), "object" == typeof e && e ? e : {})).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), we.typeCheckConfig(En, e, this.constructor.DefaultType), e
            }, e._getDelegateConfig = function () {
                var e = {};
                if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, e._cleanTipClass = function () {
                var e = yn(this.getTipElement()),
                    t = e.attr("class").match(Sn);
                null !== t && t.length && e.removeClass(t.join(""))
            }, e._handlePopperPlacementChange = function (e) {
                var t = e.instance;
                this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, e._fixTransition = function () {
                var e = this.getTipElement(),
                    t = this.config.animation;
                null === e.getAttribute("x-placement") && (yn(e).removeClass(xn), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
            }, i._jQueryInterface = function (n) {
                return this.each(function () {
                    var e = yn(this).data(bn),
                        t = "object" == typeof n && n;
                    if ((e || !/dispose|hide/.test(n)) && (e || (e = new i(this, t), yn(this).data(bn, e)), "string" == typeof n)) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function () {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function () {
                    return In
                }
            }, {
                key: "NAME",
                get: function () {
                    return En
                }
            }, {
                key: "DATA_KEY",
                get: function () {
                    return bn
                }
            }, {
                key: "Event",
                get: function () {
                    return kn
                }
            }, {
                key: "EVENT_KEY",
                get: function () {
                    return wn
                }
            }, {
                key: "DefaultType",
                get: function () {
                    return Dn
                }
            }]), i
        }(), yn.fn[En] = Rn._jQueryInterface, yn.fn[En].Constructor = Rn, yn.fn[En].noConflict = function () {
            return yn.fn[En] = Cn, Rn._jQueryInterface
        }, Rn),
        Qi = (Bn = "popover", Kn = "." + (qn = "bs.popover"), Qn = (Un = t).fn[Bn], Yn = "bs-popover", Vn = new RegExp("(^|\\s)" + Yn + "\\S+", "g"), zn = l({}, Ki.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }), Gn = l({}, Ki.DefaultType, {
            content: "(string|element|function)"
        }), Jn = "fade", Xn = ".popover-header", $n = ".popover-body", ei = {
            HIDE: "hide" + Kn,
            HIDDEN: "hidden" + Kn,
            SHOW: (Zn = "show") + Kn,
            SHOWN: "shown" + Kn,
            INSERTED: "inserted" + Kn,
            CLICK: "click" + Kn,
            FOCUSIN: "focusin" + Kn,
            FOCUSOUT: "focusout" + Kn,
            MOUSEENTER: "mouseenter" + Kn,
            MOUSELEAVE: "mouseleave" + Kn
        }, ti = function (e) {
            var t, n;

            function i() {
                return e.apply(this, arguments) || this
            }
            n = e, (t = i).prototype = Object.create(n.prototype), (t.prototype.constructor = t).__proto__ = n;
            var r = i.prototype;
            return r.isWithContent = function () {
                return this.getTitle() || this._getContent()
            }, r.addAttachmentClass = function (e) {
                Un(this.getTipElement()).addClass(Yn + "-" + e)
            }, r.getTipElement = function () {
                return this.tip = this.tip || Un(this.config.template)[0], this.tip
            }, r.setContent = function () {
                var e = Un(this.getTipElement());
                this.setElementContent(e.find(Xn), this.getTitle());
                var t = this._getContent();
                "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find($n), t), e.removeClass(Jn + " " + Zn)
            }, r._getContent = function () {
                return this.element.getAttribute("data-content") || this.config.content
            }, r._cleanTipClass = function () {
                var e = Un(this.getTipElement()),
                    t = e.attr("class").match(Vn);
                null !== t && 0 < t.length && e.removeClass(t.join(""))
            }, i._jQueryInterface = function (n) {
                return this.each(function () {
                    var e = Un(this).data(qn),
                        t = "object" == typeof n ? n : null;
                    if ((e || !/destroy|hide/.test(n)) && (e || (e = new i(this, t), Un(this).data(qn, e)), "string" == typeof n)) {
                        if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function () {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function () {
                    return zn
                }
            }, {
                key: "NAME",
                get: function () {
                    return Bn
                }
            }, {
                key: "DATA_KEY",
                get: function () {
                    return qn
                }
            }, {
                key: "Event",
                get: function () {
                    return ei
                }
            }, {
                key: "EVENT_KEY",
                get: function () {
                    return Kn
                }
            }, {
                key: "DefaultType",
                get: function () {
                    return Gn
                }
            }]), i
        }(Ki), Un.fn[Bn] = ti._jQueryInterface, Un.fn[Bn].Constructor = ti, Un.fn[Bn].noConflict = function () {
            return Un.fn[Bn] = Qn, ti._jQueryInterface
        }, ti),
        Yi = (ii = "scrollspy", oi = "." + (ri = "bs.scrollspy"), si = (ni = t).fn[ii], ai = {
            offset: 10,
            method: "auto",
            target: ""
        }, li = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }, ci = {
            ACTIVATE: "activate" + oi,
            SCROLL: "scroll" + oi,
            LOAD_DATA_API: "load" + oi + ".data-api"
        }, ui = "dropdown-item", fi = "active", hi = '[data-spy="scroll"]', di = ".active", pi = ".nav, .list-group", mi = ".nav-link", gi = ".nav-item", _i = ".list-group-item", vi = ".dropdown", yi = ".dropdown-item", Ei = ".dropdown-toggle", bi = "offset", wi = "position", Ci = function () {
            function n(e, t) {
                var n = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + mi + "," + this._config.target + " " + _i + "," + this._config.target + " " + yi, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, ni(this._scrollElement).on(ci.SCROLL, function (e) {
                    return n._process(e)
                }), this.refresh(), this._process()
            }
            var e = n.prototype;
            return e.refresh = function () {
                var t = this,
                    e = this._scrollElement === this._scrollElement.window ? bi : wi,
                    r = "auto" === this._config.method ? e : this._config.method,
                    o = r === wi ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (e) {
                    var t, n = we.getSelectorFromElement(e);
                    if (n && (t = document.querySelector(n)), t) {
                        var i = t.getBoundingClientRect();
                        if (i.width || i.height) return [ni(t)[r]().top + o, n]
                    }
                    return null
                }).filter(function (e) {
                    return e
                }).sort(function (e, t) {
                    return e[0] - t[0]
                }).forEach(function (e) {
                    t._offsets.push(e[0]), t._targets.push(e[1])
                })
            }, e.dispose = function () {
                ni.removeData(this._element, ri), ni(this._scrollElement).off(oi), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, e._getConfig = function (e) {
                if ("string" != typeof (e = l({}, ai, "object" == typeof e && e ? e : {})).target) {
                    var t = ni(e.target).attr("id");
                    t || (t = we.getUID(ii), ni(e.target).attr("id", t)), e.target = "#" + t
                }
                return we.typeCheckConfig(ii, e, li), e
            }, e._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, e._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, e._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, e._process = function () {
                var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), n <= e) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var r = this._offsets.length; r--;) {
                        this._activeTarget !== this._targets[r] && e >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                    }
                }
            }, e._activate = function (t) {
                this._activeTarget = t, this._clear();
                var e = this._selector.split(",");
                e = e.map(function (e) {
                    return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                });
                var n = ni([].slice.call(document.querySelectorAll(e.join(","))));
                n.hasClass(ui) ? (n.closest(vi).find(Ei).addClass(fi), n.addClass(fi)) : (n.addClass(fi), n.parents(pi).prev(mi + ", " + _i).addClass(fi), n.parents(pi).prev(gi).children(mi).addClass(fi)), ni(this._scrollElement).trigger(ci.ACTIVATE, {
                    relatedTarget: t
                })
            }, e._clear = function () {
                var e = [].slice.call(document.querySelectorAll(this._selector));
                ni(e).filter(di).removeClass(fi)
            }, n._jQueryInterface = function (t) {
                return this.each(function () {
                    var e = ni(this).data(ri);
                    if (e || (e = new n(this, "object" == typeof t && t), ni(this).data(ri, e)), "string" == typeof t) {
                        if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                })
            }, s(n, null, [{
                key: "VERSION",
                get: function () {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function () {
                    return ai
                }
            }]), n
        }(), ni(window).on(ci.LOAD_DATA_API, function () {
            for (var e = [].slice.call(document.querySelectorAll(hi)), t = e.length; t--;) {
                var n = ni(e[t]);
                Ci._jQueryInterface.call(n, n.data())
            }
        }), ni.fn[ii] = Ci._jQueryInterface, ni.fn[ii].Constructor = Ci, ni.fn[ii].noConflict = function () {
            return ni.fn[ii] = si, Ci._jQueryInterface
        }, Ci),
        Vi = (Di = "." + (Si = "bs.tab"), Ai = (Ti = t).fn.tab, Ii = {
            HIDE: "hide" + Di,
            HIDDEN: "hidden" + Di,
            SHOW: "show" + Di,
            SHOWN: "shown" + Di,
            CLICK_DATA_API: "click" + Di + ".data-api"
        }, Oi = "dropdown-menu", Ni = "active", ki = "disabled", xi = "fade", Pi = "show", Li = ".dropdown", ji = ".nav, .list-group", Hi = ".active", Mi = "> li > .active", Fi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', Wi = ".dropdown-toggle", Ri = "> .dropdown-menu .active", Ui = function () {
            function i(e) {
                this._element = e
            }
            var e = i.prototype;
            return e.show = function () {
                var n = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && Ti(this._element).hasClass(Ni) || Ti(this._element).hasClass(ki))) {
                    var e, i, t = Ti(this._element).closest(ji)[0],
                        r = we.getSelectorFromElement(this._element);
                    if (t) {
                        var o = "UL" === t.nodeName ? Mi : Hi;
                        i = (i = Ti.makeArray(Ti(t).find(o)))[i.length - 1]
                    }
                    var s = Ti.Event(Ii.HIDE, {
                            relatedTarget: this._element
                        }),
                        a = Ti.Event(Ii.SHOW, {
                            relatedTarget: i
                        });
                    if (i && Ti(i).trigger(s), Ti(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        r && (e = document.querySelector(r)), this._activate(this._element, t);
                        var l = function () {
                            var e = Ti.Event(Ii.HIDDEN, {
                                    relatedTarget: n._element
                                }),
                                t = Ti.Event(Ii.SHOWN, {
                                    relatedTarget: i
                                });
                            Ti(i).trigger(e), Ti(n._element).trigger(t)
                        };
                        e ? this._activate(e, e.parentNode, l) : l()
                    }
                }
            }, e.dispose = function () {
                Ti.removeData(this._element, Si), this._element = null
            }, e._activate = function (e, t, n) {
                var i = this,
                    r = ("UL" === t.nodeName ? Ti(t).find(Mi) : Ti(t).children(Hi))[0],
                    o = n && r && Ti(r).hasClass(xi),
                    s = function () {
                        return i._transitionComplete(e, r, n)
                    };
                if (r && o) {
                    var a = we.getTransitionDurationFromElement(r);
                    Ti(r).one(we.TRANSITION_END, s).emulateTransitionEnd(a)
                } else s()
            }, e._transitionComplete = function (e, t, n) {
                if (t) {
                    Ti(t).removeClass(Pi + " " + Ni);
                    var i = Ti(t.parentNode).find(Ri)[0];
                    i && Ti(i).removeClass(Ni), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                }
                if (Ti(e).addClass(Ni), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), we.reflow(e), Ti(e).addClass(Pi), e.parentNode && Ti(e.parentNode).hasClass(Oi)) {
                    var r = Ti(e).closest(Li)[0];
                    if (r) {
                        var o = [].slice.call(r.querySelectorAll(Wi));
                        Ti(o).addClass(Ni)
                    }
                    e.setAttribute("aria-expanded", !0)
                }
                n && n()
            }, i._jQueryInterface = function (n) {
                return this.each(function () {
                    var e = Ti(this),
                        t = e.data(Si);
                    if (t || (t = new i(this), e.data(Si, t)), "string" == typeof n) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, s(i, null, [{
                key: "VERSION",
                get: function () {
                    return "4.1.3"
                }
            }]), i
        }(), Ti(document).on(Ii.CLICK_DATA_API, Fi, function (e) {
            e.preventDefault(), Ui._jQueryInterface.call(Ti(this), "show")
        }), Ti.fn.tab = Ui._jQueryInterface, Ti.fn.tab.Constructor = Ui, Ti.fn.tab.noConflict = function () {
            return Ti.fn.tab = Ai, Ui._jQueryInterface
        }, Ui);
    ! function (e) {
        if ("undefined" == typeof e) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(t), e.Util = we, e.Alert = Ce, e.Button = Te, e.Carousel = Se, e.Collapse = De, e.Dropdown = Bi, e.Modal = qi, e.Popover = Qi, e.Scrollspy = Yi, e.Tab = Vi, e.Tooltip = Ki, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}); /*!jQuery easing 1.3*/
(function (factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], function ($) {
            return factory($)
        })
    } else if (typeof module === "object" && typeof module.exports === "object") {
        exports = factory(require("jquery"))
    } else {
        factory(jQuery)
    }
})(function ($) {
    $.easing.jswing = $.easing.swing;
    var pow = Math.pow,
        sqrt = Math.sqrt,
        sin = Math.sin,
        cos = Math.cos,
        PI = Math.PI,
        c1 = 1.70158,
        c2 = c1 * 1.525,
        c3 = c1 + 1,
        c4 = 2 * PI / 3,
        c5 = 2 * PI / 4.5;

    function bounceOut(x) {
        var n1 = 7.5625,
            d1 = 2.75;
        if (x < 1 / d1) {
            return n1 * x * x
        } else if (x < 2 / d1) {
            return n1 * (x -= 1.5 / d1) * x + .75
        } else if (x < 2.5 / d1) {
            return n1 * (x -= 2.25 / d1) * x + .9375
        } else {
            return n1 * (x -= 2.625 / d1) * x + .984375
        }
    }
    $.extend($.easing, {
        def: "easeOutQuad",
        swing: function (x) {
            return $.easing[$.easing.def](x)
        },
        easeInQuad: function (x) {
            return x * x
        },
        easeOutQuad: function (x) {
            return 1 - (1 - x) * (1 - x)
        },
        easeInOutQuad: function (x) {
            return x < .5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2
        },
        easeInCubic: function (x) {
            return x * x * x
        },
        easeOutCubic: function (x) {
            return 1 - pow(1 - x, 3)
        },
        easeInOutCubic: function (x) {
            return x < .5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2
        },
        easeInQuart: function (x) {
            return x * x * x * x
        },
        easeOutQuart: function (x) {
            return 1 - pow(1 - x, 4)
        },
        easeInOutQuart: function (x) {
            return x < .5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2
        },
        easeInQuint: function (x) {
            return x * x * x * x * x
        },
        easeOutQuint: function (x) {
            return 1 - pow(1 - x, 5)
        },
        easeInOutQuint: function (x) {
            return x < .5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2
        },
        easeInSine: function (x) {
            return 1 - cos(x * PI / 2)
        },
        easeOutSine: function (x) {
            return sin(x * PI / 2)
        },
        easeInOutSine: function (x) {
            return -(cos(PI * x) - 1) / 2
        },
        easeInExpo: function (x) {
            return x === 0 ? 0 : pow(2, 10 * x - 10)
        },
        easeOutExpo: function (x) {
            return x === 1 ? 1 : 1 - pow(2, -10 * x)
        },
        easeInOutExpo: function (x) {
            return x === 0 ? 0 : x === 1 ? 1 : x < .5 ? pow(2, 20 * x - 10) / 2 : (2 - pow(2, -20 * x + 10)) / 2
        },
        easeInCirc: function (x) {
            return 1 - sqrt(1 - pow(x, 2))
        },
        easeOutCirc: function (x) {
            return sqrt(1 - pow(x - 1, 2))
        },
        easeInOutCirc: function (x) {
            return x < .5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2
        },
        easeInElastic: function (x) {
            return x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4)
        },
        easeOutElastic: function (x) {
            return x === 0 ? 0 : x === 1 ? 1 : pow(2, -10 * x) * sin((x * 10 - .75) * c4) + 1
        },
        easeInOutElastic: function (x) {
            return x === 0 ? 0 : x === 1 ? 1 : x < .5 ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 : pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1
        },
        easeInBack: function (x) {
            return c3 * x * x * x - c1 * x * x
        },
        easeOutBack: function (x) {
            return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2)
        },
        easeInOutBack: function (x) {
            return x < .5 ? pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2
        },
        easeInBounce: function (x) {
            return 1 - bounceOut(1 - x)
        },
        easeOutBounce: bounceOut,
        easeInOutBounce: function (x) {
            return x < .5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2
        }
    })
}); /*!The Final Countdown for jQuery v2.2.0 ( http://hilios.github.io/jQuery.countdown/ )*/
! function (a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
    "use strict";

    function b(a) {
        if (a instanceof Date) return a;
        if (String(a).match(g)) return String(a).match(/^[0-9]*$/) && (a = Number(a)), String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")), new Date(a);
        throw new Error("Couldn't cast `" + a + "` to a date object.")
    }

    function c(a) {
        var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
        return new RegExp(b)
    }

    function d(a) {
        return function (b) {
            var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (d)
                for (var f = 0, g = d.length; f < g; ++f) {
                    var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                        j = c(h[0]),
                        k = h[1] || "",
                        l = h[3] || "",
                        m = null;
                    h = h[2], i.hasOwnProperty(h) && (m = i[h], m = Number(a[m])), null !== m && ("!" === k && (m = e(l, m)), "" === k && m < 10 && (m = "0" + m.toString()), b = b.replace(j, m.toString()))
                }
            return b = b.replace(/%%/, "%")
        }
    }

    function e(a, b) {
        var c = "s",
            d = "";
        return a && (a = a.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === a.length ? c = a[0] : (d = a[0], c = a[1])), Math.abs(b) > 1 ? c : d
    }
    var f = [],
        g = [],
        h = {
            precision: 100,
            elapse: !1,
            defer: !1
        };
    g.push(/^[0-9]*$/.source), g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g = new RegExp(g.join("|"));
    var i = {
            Y: "years",
            m: "months",
            n: "daysToMonth",
            d: "daysToWeek",
            w: "weeks",
            W: "weeksToMonth",
            H: "hours",
            M: "minutes",
            S: "seconds",
            D: "totalDays",
            I: "totalHours",
            N: "totalMinutes",
            T: "totalSeconds"
        },
        j = function (b, c, d) {
            this.el = b, this.$el = a(b), this.interval = null, this.offset = {}, this.options = a.extend({}, h), this.instanceNumber = f.length, f.push(this), this.$el.data("countdown-instance", this.instanceNumber), d && ("function" == typeof d ? (this.$el.on("update.countdown", d), this.$el.on("stoped.countdown", d), this.$el.on("finish.countdown", d)) : this.options = a.extend({}, h, d)), this.setFinalDate(c), this.options.defer === !1 && this.start()
        };
    a.extend(j.prototype, {
        start: function () {
            null !== this.interval && clearInterval(this.interval);
            var a = this;
            this.update(), this.interval = setInterval(function () {
                a.update.call(a)
            }, this.options.precision)
        },
        stop: function () {
            clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
        },
        toggle: function () {
            this.interval ? this.stop() : this.start()
        },
        pause: function () {
            this.stop()
        },
        resume: function () {
            this.start()
        },
        remove: function () {
            this.stop.call(this), f[this.instanceNumber] = null, delete this.$el.data().countdownInstance
        },
        setFinalDate: function (a) {
            this.finalDate = b(a)
        },
        update: function () {
            if (0 === this.$el.closest("html").length) return void this.remove();
            var b, c = void 0 !== a._data(this.el, "events"),
                d = new Date;
            b = this.finalDate.getTime() - d.getTime(), b = Math.ceil(b / 1e3), b = !this.options.elapse && b < 0 ? 0 : Math.abs(b), this.totalSecsLeft !== b && c && (this.totalSecsLeft = b, this.elapsed = d >= this.finalDate, this.offset = {
                seconds: this.totalSecsLeft % 60,
                minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
                months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                years: Math.abs(this.finalDate.getFullYear() - d.getFullYear()),
                totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                totalMinutes: Math.floor(this.totalSecsLeft / 60),
                totalSeconds: this.totalSecsLeft
            }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))
        },
        dispatchEvent: function (b) {
            var c = a.Event(b + ".countdown");
            c.finalDate = this.finalDate, c.elapsed = this.elapsed, c.offset = a.extend({}, this.offset), c.strftime = d(this.offset), this.$el.trigger(c)
        }
    }), a.fn.countdown = function () {
        var b = Array.prototype.slice.call(arguments, 0);
        return this.each(function () {
            var c = a(this).data("countdown-instance");
            if (void 0 !== c) {
                var d = f[c],
                    e = b[0];
                j.prototype.hasOwnProperty(e) ? d[e].apply(d, b.slice(1)) : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (d.setFinalDate.call(d, e), d.start()) : a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, e))
            } else new j(this, b[0], b[1])
        })
    }
}); /*!More info at [www.dropzonejs.com](http://www.dropzonejs.com) * Copyright (c) 2012, Matias Meno*/
"use strict";
var _createClass = function () {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }
    return function (t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t
    }
}();

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}
var Emitter = function () {
        function e() {
            _classCallCheck(this, e)
        }
        return _createClass(e, [{
            key: "on",
            value: function (e, t) {
                return this._callbacks = this._callbacks || {}, this._callbacks[e] || (this._callbacks[e] = []), this._callbacks[e].push(t), this
            }
        }, {
            key: "emit",
            value: function (e) {
                this._callbacks = this._callbacks || {};
                var t = this._callbacks[e];
                if (t) {
                    for (var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
                    for (var o = 0, a = a = t;;) {
                        if (o >= a.length) break;
                        a[o++].apply(this, n)
                    }
                }
                return this
            }
        }, {
            key: "off",
            value: function (e, t) {
                if (!this._callbacks || 0 === arguments.length) return this._callbacks = {}, this;
                var i = this._callbacks[e];
                if (!i) return this;
                if (1 === arguments.length) return delete this._callbacks[e], this;
                for (var n = 0; n < i.length; n++) {
                    if (i[n] === t) {
                        i.splice(n, 1);
                        break
                    }
                }
                return this
            }
        }]), e
    }(),
    Dropzone = function (e) {
        function t(e, i) {
            _classCallCheck(this, t);
            var n, r = _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)),
                o = void 0;
            if (r.element = e, r.version = t.version, r.defaultOptions.previewTemplate = r.defaultOptions.previewTemplate.replace(/\n*/g, ""), r.clickableElements = [], r.listeners = [], r.files = [], "string" == typeof r.element && (r.element = document.querySelector(r.element)), !r.element || null == r.element.nodeType) throw new Error("Invalid dropzone element.");
            if (r.element.dropzone) throw new Error("Dropzone already attached.");
            t.instances.push(r), r.element.dropzone = r;
            var a, s = null != (n = t.optionsForElement(r.element)) ? n : {};
            if (r.options = t.extend({}, r.defaultOptions, s, null != i ? i : {}), r.options.forceFallback || !t.isBrowserSupported()) return a = r.options.fallback.call(r), _possibleConstructorReturn(r, a);
            if (null == r.options.url && (r.options.url = r.element.getAttribute("action")), !r.options.url) throw new Error("No URL provided.");
            if (r.options.acceptedFiles && r.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
            if (r.options.uploadMultiple && r.options.chunking) throw new Error("You cannot set both: uploadMultiple and chunking.");
            return r.options.acceptedMimeTypes && (r.options.acceptedFiles = r.options.acceptedMimeTypes, delete r.options.acceptedMimeTypes), null != r.options.renameFilename && (r.options.renameFile = function (e) {
                return r.options.renameFilename.call(r, e.name, e)
            }), r.options.method = r.options.method.toUpperCase(), (o = r.getExistingFallback()) && o.parentNode && o.parentNode.removeChild(o), !1 !== r.options.previewsContainer && (r.options.previewsContainer ? r.previewsContainer = t.getElement(r.options.previewsContainer, "previewsContainer") : r.previewsContainer = r.element), r.options.clickable && (!0 === r.options.clickable ? r.clickableElements = [r.element] : r.clickableElements = t.getElements(r.options.clickable, "clickable")), r.init(), r
        }
        return _inherits(t, Emitter), _createClass(t, null, [{
            key: "initClass",
            value: function () {
                this.prototype.Emitter = Emitter, this.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"], this.prototype.defaultOptions = {
                    url: null,
                    method: "post",
                    withCredentials: !1,
                    timeout: 3e4,
                    parallelUploads: 2,
                    uploadMultiple: !1,
                    chunking: !1,
                    forceChunking: !1,
                    chunkSize: 2e6,
                    parallelChunkUploads: !1,
                    retryChunks: !1,
                    retryChunksLimit: 3,
                    maxFilesize: 256,
                    paramName: "file",
                    createImageThumbnails: !0,
                    maxThumbnailFilesize: 10,
                    thumbnailWidth: 120,
                    thumbnailHeight: 120,
                    thumbnailMethod: "crop",
                    resizeWidth: null,
                    resizeHeight: null,
                    resizeMimeType: null,
                    resizeQuality: .8,
                    resizeMethod: "contain",
                    filesizeBase: 1e3,
                    maxFiles: null,
                    headers: null,
                    clickable: !0,
                    ignoreHiddenFiles: !0,
                    acceptedFiles: null,
                    acceptedMimeTypes: null,
                    autoProcessQueue: !0,
                    autoQueue: !0,
                    addRemoveLinks: !1,
                    previewsContainer: null,
                    hiddenInputContainer: "body",
                    capture: null,
                    renameFilename: null,
                    renameFile: null,
                    forceFallback: !1,
                    dictDefaultMessage: "Drop files here to upload",
                    dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
                    dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
                    dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
                    dictInvalidFileType: "You can't upload files of this type.",
                    dictResponseError: "Server responded with {{statusCode}} code.",
                    dictCancelUpload: "Cancel upload",
                    dictUploadCanceled: "Upload canceled.",
                    dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
                    dictRemoveFile: "Remove file",
                    dictRemoveFileConfirmation: null,
                    dictMaxFilesExceeded: "You can not upload any more files.",
                    dictFileSizeUnits: {
                        tb: "TB",
                        gb: "GB",
                        mb: "MB",
                        kb: "KB",
                        b: "b"
                    },
                    init: function () {},
                    params: function (e, t, i) {
                        if (i) return {
                            dzuuid: i.file.upload.uuid,
                            dzchunkindex: i.index,
                            dztotalfilesize: i.file.size,
                            dzchunksize: this.options.chunkSize,
                            dztotalchunkcount: i.file.upload.totalChunkCount,
                            dzchunkbyteoffset: i.index * this.options.chunkSize
                        }
                    },
                    accept: function (e, t) {
                        return t()
                    },
                    chunksUploaded: function (e, t) {
                        t()
                    },
                    fallback: function () {
                        var e = void 0;
                        this.element.className = this.element.className + " dz-browser-not-supported";
                        for (var i = 0, n = n = this.element.getElementsByTagName("div");;) {
                            if (i >= n.length) break;
                            var r = n[i++];
                            if (/(^| )dz-message($| )/.test(r.className)) {
                                e = r, r.className = "dz-message";
                                break
                            }
                        }
                        e || (e = t.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(e));
                        var o = e.getElementsByTagName("span")[0];
                        return o && (null != o.textContent ? o.textContent = this.options.dictFallbackMessage : null != o.innerText && (o.innerText = this.options.dictFallbackMessage)), this.element.appendChild(this.getFallbackForm())
                    },
                    resize: function (e, t, i, n) {
                        var r = {
                                srcX: 0,
                                srcY: 0,
                                srcWidth: e.width,
                                srcHeight: e.height
                            },
                            o = e.width / e.height;
                        null == t && null == i ? (t = r.srcWidth, i = r.srcHeight) : null == t ? t = i * o : null == i && (i = t / o);
                        var a = (t = Math.min(t, r.srcWidth)) / (i = Math.min(i, r.srcHeight));
                        if (r.srcWidth > t || r.srcHeight > i)
                            if ("crop" === n) o > a ? (r.srcHeight = e.height, r.srcWidth = r.srcHeight * a) : (r.srcWidth = e.width, r.srcHeight = r.srcWidth / a);
                            else {
                                if ("contain" !== n) throw new Error("Unknown resizeMethod '" + n + "'");
                                o > a ? i = t / o : t = i * o
                            } return r.srcX = (e.width - r.srcWidth) / 2, r.srcY = (e.height - r.srcHeight) / 2, r.trgWidth = t, r.trgHeight = i, r
                    },
                    transformFile: function (e, t) {
                        return (this.options.resizeWidth || this.options.resizeHeight) && e.type.match(/image.*/) ? this.resizeImage(e, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, t) : t(e)
                    },
                    previewTemplate: '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>',
                    drop: function (e) {
                        return this.element.classList.remove("dz-drag-hover")
                    },
                    dragstart: function (e) {},
                    dragend: function (e) {
                        return this.element.classList.remove("dz-drag-hover")
                    },
                    dragenter: function (e) {
                        return this.element.classList.add("dz-drag-hover")
                    },
                    dragover: function (e) {
                        return this.element.classList.add("dz-drag-hover")
                    },
                    dragleave: function (e) {
                        return this.element.classList.remove("dz-drag-hover")
                    },
                    paste: function (e) {},
                    reset: function () {
                        return this.element.classList.remove("dz-started")
                    },
                    addedfile: function (e) {
                        var i = this;
                        if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer) {
                            e.previewElement = t.createElement(this.options.previewTemplate.trim()), e.previewTemplate = e.previewElement, this.previewsContainer.appendChild(e.previewElement);
                            for (var n = 0, r = r = e.previewElement.querySelectorAll("[data-dz-name]");;) {
                                if (n >= r.length) break;
                                var o = r[n++];
                                o.textContent = e.name
                            }
                            for (var a = 0, s = s = e.previewElement.querySelectorAll("[data-dz-size]"); !(a >= s.length);)(o = s[a++]).innerHTML = this.filesize(e.size);
                            this.options.addRemoveLinks && (e._removeLink = t.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' + this.options.dictRemoveFile + "</a>"), e.previewElement.appendChild(e._removeLink));
                            for (var l = function (n) {
                                    return n.preventDefault(), n.stopPropagation(), e.status === t.UPLOADING ? t.confirm(i.options.dictCancelUploadConfirmation, function () {
                                        return i.removeFile(e)
                                    }) : i.options.dictRemoveFileConfirmation ? t.confirm(i.options.dictRemoveFileConfirmation, function () {
                                        return i.removeFile(e)
                                    }) : i.removeFile(e)
                                }, u = 0, d = d = e.previewElement.querySelectorAll("[data-dz-remove]");;) {
                                if (u >= d.length) break;
                                d[u++].addEventListener("click", l)
                            }
                        }
                    },
                    removedfile: function (e) {
                        return null != e.previewElement && null != e.previewElement.parentNode && e.previewElement.parentNode.removeChild(e.previewElement), this._updateMaxFilesReachedClass()
                    },
                    thumbnail: function (e, t) {
                        if (e.previewElement) {
                            e.previewElement.classList.remove("dz-file-preview");
                            for (var i = 0, n = n = e.previewElement.querySelectorAll("[data-dz-thumbnail]");;) {
                                if (i >= n.length) break;
                                var r = n[i++];
                                r.alt = e.name, r.src = t
                            }
                            return setTimeout(function () {
                                return e.previewElement.classList.add("dz-image-preview")
                            }, 1)
                        }
                    },
                    error: function (e, t) {
                        if (e.previewElement) {
                            e.previewElement.classList.add("dz-error"), "String" != typeof t && t.error && (t = t.error);
                            for (var i = 0, n = n = e.previewElement.querySelectorAll("[data-dz-errormessage]");;) {
                                if (i >= n.length) break;
                                n[i++].textContent = t
                            }
                        }
                    },
                    errormultiple: function () {},
                    processing: function (e) {
                        if (e.previewElement && (e.previewElement.classList.add("dz-processing"), e._removeLink)) return e._removeLink.textContent = this.options.dictCancelUpload
                    },
                    processingmultiple: function () {},
                    uploadprogress: function (e, t, i) {
                        if (e.previewElement)
                            for (var n = 0, r = r = e.previewElement.querySelectorAll("[data-dz-uploadprogress]");;) {
                                if (n >= r.length) break;
                                var o = r[n++];
                                "PROGRESS" === o.nodeName ? o.value = t : o.style.width = t + "%"
                            }
                    },
                    totaluploadprogress: function () {},
                    sending: function () {},
                    sendingmultiple: function () {},
                    success: function (e) {
                        if (e.previewElement) return e.previewElement.classList.add("dz-success")
                    },
                    successmultiple: function () {},
                    canceled: function (e) {
                        return this.emit("error", e, this.options.dictUploadCanceled)
                    },
                    canceledmultiple: function () {},
                    complete: function (e) {
                        if (e._removeLink && (e._removeLink.textContent = this.options.dictRemoveFile), e.previewElement) return e.previewElement.classList.add("dz-complete")
                    },
                    completemultiple: function () {},
                    maxfilesexceeded: function () {},
                    maxfilesreached: function () {},
                    queuecomplete: function () {},
                    addedfiles: function () {}
                }, this.prototype._thumbnailQueue = [], this.prototype._processingThumbnail = !1
            }
        }, {
            key: "extend",
            value: function (e) {
                for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
                for (var r = 0, o = o = i;;) {
                    if (r >= o.length) break;
                    var a = o[r++];
                    for (var s in a) {
                        var l = a[s];
                        e[s] = l
                    }
                }
                return e
            }
        }]), _createClass(t, [{
            key: "getAcceptedFiles",
            value: function () {
                return this.files.filter(function (e) {
                    return e.accepted
                }).map(function (e) {
                    return e
                })
            }
        }, {
            key: "getRejectedFiles",
            value: function () {
                return this.files.filter(function (e) {
                    return !e.accepted
                }).map(function (e) {
                    return e
                })
            }
        }, {
            key: "getFilesWithStatus",
            value: function (e) {
                return this.files.filter(function (t) {
                    return t.status === e
                }).map(function (e) {
                    return e
                })
            }
        }, {
            key: "getQueuedFiles",
            value: function () {
                return this.getFilesWithStatus(t.QUEUED)
            }
        }, {
            key: "getUploadingFiles",
            value: function () {
                return this.getFilesWithStatus(t.UPLOADING)
            }
        }, {
            key: "getAddedFiles",
            value: function () {
                return this.getFilesWithStatus(t.ADDED)
            }
        }, {
            key: "getActiveFiles",
            value: function () {
                return this.files.filter(function (e) {
                    return e.status === t.UPLOADING || e.status === t.QUEUED
                }).map(function (e) {
                    return e
                })
            }
        }, {
            key: "init",
            value: function () {
                var e = this;
                if ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(t.createElement('<div class="dz-default dz-message"><span>' + this.options.dictDefaultMessage + "</span></div>")), this.clickableElements.length) {
                    ! function t() {
                        return e.hiddenFileInput && e.hiddenFileInput.parentNode.removeChild(e.hiddenFileInput), e.hiddenFileInput = document.createElement("input"), e.hiddenFileInput.setAttribute("type", "file"), (null === e.options.maxFiles || e.options.maxFiles > 1) && e.hiddenFileInput.setAttribute("multiple", "multiple"), e.hiddenFileInput.className = "dz-hidden-input", null !== e.options.acceptedFiles && e.hiddenFileInput.setAttribute("accept", e.options.acceptedFiles), null !== e.options.capture && e.hiddenFileInput.setAttribute("capture", e.options.capture), e.hiddenFileInput.style.visibility = "hidden", e.hiddenFileInput.style.position = "absolute", e.hiddenFileInput.style.top = "0", e.hiddenFileInput.style.left = "0", e.hiddenFileInput.style.height = "0", e.hiddenFileInput.style.width = "0", document.querySelector(e.options.hiddenInputContainer).appendChild(e.hiddenFileInput), e.hiddenFileInput.addEventListener("change", function () {
                            var i = e.hiddenFileInput.files;
                            if (i.length)
                                for (var n = 0, r = r = i; !(n >= r.length);) {
                                    var o = r[n++];
                                    e.addFile(o)
                                }
                            return e.emit("addedfiles", i), t()
                        })
                    }()
                }
                this.URL = null !== window.URL ? window.URL : window.webkitURL;
                for (var i = 0, n = n = this.events;;) {
                    if (i >= n.length) break;
                    var r = n[i++];
                    this.on(r, this.options[r])
                }
                this.on("uploadprogress", function () {
                    return e.updateTotalUploadProgress()
                }), this.on("removedfile", function () {
                    return e.updateTotalUploadProgress()
                }), this.on("canceled", function (t) {
                    return e.emit("complete", t)
                }), this.on("complete", function (t) {
                    if (0 === e.getAddedFiles().length && 0 === e.getUploadingFiles().length && 0 === e.getQueuedFiles().length) return setTimeout(function () {
                        return e.emit("queuecomplete")
                    }, 0)
                });
                var o = function (e) {
                    return e.stopPropagation(), e.preventDefault ? e.preventDefault() : e.returnValue = !1
                };
                return this.listeners = [{
                    element: this.element,
                    events: {
                        dragstart: function (t) {
                            return e.emit("dragstart", t)
                        },
                        dragenter: function (t) {
                            return o(t), e.emit("dragenter", t)
                        },
                        dragover: function (t) {
                            var i = void 0;
                            try {
                                i = t.dataTransfer.effectAllowed
                            } catch (e) {}
                            return t.dataTransfer.dropEffect = "move" === i || "linkMove" === i ? "move" : "copy", o(t), e.emit("dragover", t)
                        },
                        dragleave: function (t) {
                            return e.emit("dragleave", t)
                        },
                        drop: function (t) {
                            return o(t), e.drop(t)
                        },
                        dragend: function (t) {
                            return e.emit("dragend", t)
                        }
                    }
                }], this.clickableElements.forEach(function (i) {
                    return e.listeners.push({
                        element: i,
                        events: {
                            click: function (n) {
                                return (i !== e.element || n.target === e.element || t.elementInside(n.target, e.element.querySelector(".dz-message"))) && e.hiddenFileInput.click(), !0
                            }
                        }
                    })
                }), this.enable(), this.options.init.call(this)
            }
        }, {
            key: "destroy",
            value: function () {
                return this.disable(), this.removeAllFiles(!0), (null != this.hiddenFileInput ? this.hiddenFileInput.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = null), delete this.element.dropzone, t.instances.splice(t.instances.indexOf(this), 1)
            }
        }, {
            key: "updateTotalUploadProgress",
            value: function () {
                var e = void 0,
                    t = 0,
                    i = 0;
                if (this.getActiveFiles().length) {
                    for (var n = 0, r = r = this.getActiveFiles();;) {
                        if (n >= r.length) break;
                        var o = r[n++];
                        t += o.upload.bytesSent, i += o.upload.total
                    }
                    e = 100 * t / i
                } else e = 100;
                return this.emit("totaluploadprogress", e, i, t)
            }
        }, {
            key: "_getParamName",
            value: function (e) {
                return "function" == typeof this.options.paramName ? this.options.paramName(e) : this.options.paramName + (this.options.uploadMultiple ? "[" + e + "]" : "")
            }
        }, {
            key: "_renameFile",
            value: function (e) {
                return "function" != typeof this.options.renameFile ? e.name : this.options.renameFile(e)
            }
        }, {
            key: "getFallbackForm",
            value: function () {
                var e, i = void 0;
                if (e = this.getExistingFallback()) return e;
                var n = '<div class="dz-fallback">';
                this.options.dictFallbackText && (n += "<p>" + this.options.dictFallbackText + "</p>"), n += '<input type="file" name="' + this._getParamName(0) + '" ' + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + ' /><input type="submit" value="Upload!"></div>';
                var r = t.createElement(n);
                return "FORM" !== this.element.tagName ? (i = t.createElement('<form action="' + this.options.url + '" enctype="multipart/form-data" method="' + this.options.method + '"></form>')).appendChild(r) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), null != i ? i : r
            }
        }, {
            key: "getExistingFallback",
            value: function () {
                for (var e = function (e) {
                        for (var t = 0, i = i = e;;) {
                            if (t >= i.length) break;
                            var n = i[t++];
                            if (/(^| )fallback($| )/.test(n.className)) return n
                        }
                    }, t = ["div", "form"], i = 0; i < t.length; i++) {
                    var n, r = t[i];
                    if (n = e(this.element.getElementsByTagName(r))) return n
                }
            }
        }, {
            key: "setupEventListeners",
            value: function () {
                return this.listeners.map(function (e) {
                    return function () {
                        var t = [];
                        for (var i in e.events) {
                            var n = e.events[i];
                            t.push(e.element.addEventListener(i, n, !1))
                        }
                        return t
                    }()
                })
            }
        }, {
            key: "removeEventListeners",
            value: function () {
                return this.listeners.map(function (e) {
                    return function () {
                        var t = [];
                        for (var i in e.events) {
                            var n = e.events[i];
                            t.push(e.element.removeEventListener(i, n, !1))
                        }
                        return t
                    }()
                })
            }
        }, {
            key: "disable",
            value: function () {
                var e = this;
                return this.clickableElements.forEach(function (e) {
                    return e.classList.remove("dz-clickable")
                }), this.removeEventListeners(), this.disabled = !0, this.files.map(function (t) {
                    return e.cancelUpload(t)
                })
            }
        }, {
            key: "enable",
            value: function () {
                return delete this.disabled, this.clickableElements.forEach(function (e) {
                    return e.classList.add("dz-clickable")
                }), this.setupEventListeners()
            }
        }, {
            key: "filesize",
            value: function (e) {
                var t = 0,
                    i = "b";
                if (e > 0) {
                    for (var n = ["tb", "gb", "mb", "kb", "b"], r = 0; r < n.length; r++) {
                        var o = n[r];
                        if (e >= Math.pow(this.options.filesizeBase, 4 - r) / 10) {
                            t = e / Math.pow(this.options.filesizeBase, 4 - r), i = o;
                            break
                        }
                    }
                    t = Math.round(10 * t) / 10
                }
                return "<strong>" + t + "</strong> " + this.options.dictFileSizeUnits[i]
            }
        }, {
            key: "_updateMaxFilesReachedClass",
            value: function () {
                return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached")
            }
        }, {
            key: "drop",
            value: function (e) {
                if (e.dataTransfer) {
                    this.emit("drop", e);
                    for (var t = [], i = 0; i < e.dataTransfer.files.length; i++) t[i] = e.dataTransfer.files[i];
                    if (this.emit("addedfiles", t), t.length) {
                        var n = e.dataTransfer.items;
                        n && n.length && null != n[0].webkitGetAsEntry ? this._addFilesFromItems(n) : this.handleFiles(t)
                    }
                }
            }
        }, {
            key: "paste",
            value: function (e) {
                if (null != __guard__(null != e ? e.clipboardData : void 0, function (e) {
                        return e.items
                    })) {
                    this.emit("paste", e);
                    var t = e.clipboardData.items;
                    return t.length ? this._addFilesFromItems(t) : void 0
                }
            }
        }, {
            key: "handleFiles",
            value: function (e) {
                for (var t = 0, i = i = e;;) {
                    if (t >= i.length) break;
                    var n = i[t++];
                    this.addFile(n)
                }
            }
        }, {
            key: "_addFilesFromItems",
            value: function (e) {
                var t = this;
                return function () {
                    for (var i = [], n = 0, r = r = e;;) {
                        if (n >= r.length) break;
                        var o, a = r[n++];
                        null != a.webkitGetAsEntry && (o = a.webkitGetAsEntry()) ? o.isFile ? i.push(t.addFile(a.getAsFile())) : o.isDirectory ? i.push(t._addFilesFromDirectory(o, o.name)) : i.push(void 0) : null != a.getAsFile && (null == a.kind || "file" === a.kind) ? i.push(t.addFile(a.getAsFile())) : i.push(void 0)
                    }
                    return i
                }()
            }
        }, {
            key: "_addFilesFromDirectory",
            value: function (e, t) {
                var i = this,
                    n = e.createReader(),
                    r = function (e) {
                        return __guardMethod__(console, "log", function (t) {
                            return t.log(e)
                        })
                    };
                return function e() {
                    return n.readEntries(function (n) {
                        if (n.length > 0) {
                            for (var r = 0, o = o = n; !(r >= o.length);) {
                                var a = o[r++];
                                a.isFile ? a.file(function (e) {
                                    if (!i.options.ignoreHiddenFiles || "." !== e.name.substring(0, 1)) return e.fullPath = t + "/" + e.name, i.addFile(e)
                                }) : a.isDirectory && i._addFilesFromDirectory(a, t + "/" + a.name)
                            }
                            e()
                        }
                        return null
                    }, r)
                }()
            }
        }, {
            key: "accept",
            value: function (e, i) {
                return e.size > 1024 * this.options.maxFilesize * 1024 ? i(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(e.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : t.isValidFile(e, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (i(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", e)) : this.options.accept.call(this, e, i) : i(this.options.dictInvalidFileType)
            }
        }, {
            key: "addFile",
            value: function (e) {
                var i = this;
                return e.upload = {
                    uuid: t.uuidv4(),
                    progress: 0,
                    total: e.size,
                    bytesSent: 0,
                    filename: this._renameFile(e),
                    chunked: this.options.chunking && (this.options.forceChunking || e.size > this.options.chunkSize),
                    totalChunkCount: Math.ceil(e.size / this.options.chunkSize)
                }, this.files.push(e), e.status = t.ADDED, this.emit("addedfile", e), this._enqueueThumbnail(e), this.accept(e, function (t) {
                    return t ? (e.accepted = !1, i._errorProcessing([e], t)) : (e.accepted = !0, i.options.autoQueue && i.enqueueFile(e)), i._updateMaxFilesReachedClass()
                })
            }
        }, {
            key: "enqueueFiles",
            value: function (e) {
                for (var t = 0, i = i = e;;) {
                    if (t >= i.length) break;
                    var n = i[t++];
                    this.enqueueFile(n)
                }
                return null
            }
        }, {
            key: "enqueueFile",
            value: function (e) {
                var i = this;
                if (e.status !== t.ADDED || !0 !== e.accepted) throw new Error("This file can't be queued because it has already been processed or was rejected.");
                if (e.status = t.QUEUED, this.options.autoProcessQueue) return setTimeout(function () {
                    return i.processQueue()
                }, 0)
            }
        }, {
            key: "_enqueueThumbnail",
            value: function (e) {
                var t = this;
                if (this.options.createImageThumbnails && e.type.match(/image.*/) && e.size <= 1024 * this.options.maxThumbnailFilesize * 1024) return this._thumbnailQueue.push(e), setTimeout(function () {
                    return t._processThumbnailQueue()
                }, 0)
            }
        }, {
            key: "_processThumbnailQueue",
            value: function () {
                var e = this;
                if (!this._processingThumbnail && 0 !== this._thumbnailQueue.length) {
                    this._processingThumbnail = !0;
                    var t = this._thumbnailQueue.shift();
                    return this.createThumbnail(t, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, !0, function (i) {
                        return e.emit("thumbnail", t, i), e._processingThumbnail = !1, e._processThumbnailQueue()
                    })
                }
            }
        }, {
            key: "removeFile",
            value: function (e) {
                if (e.status === t.UPLOADING && this.cancelUpload(e), this.files = without(this.files, e), this.emit("removedfile", e), 0 === this.files.length) return this.emit("reset")
            }
        }, {
            key: "removeAllFiles",
            value: function (e) {
                null == e && (e = !1);
                for (var i = 0, n = n = this.files.slice();;) {
                    if (i >= n.length) break;
                    var r = n[i++];
                    (r.status !== t.UPLOADING || e) && this.removeFile(r)
                }
                return null
            }
        }, {
            key: "resizeImage",
            value: function (e, i, n, r, o) {
                var a = this;
                return this.createThumbnail(e, i, n, r, !1, function (i, n) {
                    if (null == n) return o(e);
                    var r = a.options.resizeMimeType;
                    null == r && (r = e.type);
                    var s = n.toDataURL(r, a.options.resizeQuality);
                    return "image/jpeg" !== r && "image/jpg" !== r || (s = ExifRestore.restore(e.dataURL, s)), o(t.dataURItoBlob(s))
                })
            }
        }, {
            key: "createThumbnail",
            value: function (e, t, i, n, r, o) {
                var a = this,
                    s = new FileReader;
                return s.onload = function () {
                    if (e.dataURL = s.result, "image/svg+xml" !== e.type) return a.createThumbnailFromUrl(e, t, i, n, r, o);
                    null != o && o(s.result)
                }, s.readAsDataURL(e)
            }
        }, {
            key: "createThumbnailFromUrl",
            value: function (e, t, i, n, r, o, a) {
                var s = this,
                    l = document.createElement("img");
                return a && (l.crossOrigin = a), l.onload = function () {
                    var a = function (e) {
                        return e(1)
                    };
                    return "undefined" != typeof EXIF && null !== EXIF && r && (a = function (e) {
                        return EXIF.getData(l, function () {
                            return e(EXIF.getTag(this, "Orientation"))
                        })
                    }), a(function (r) {
                        e.width = l.width, e.height = l.height;
                        var a = s.options.resize.call(s, e, t, i, n),
                            u = document.createElement("canvas"),
                            d = u.getContext("2d");
                        switch (u.width = a.trgWidth, u.height = a.trgHeight, r > 4 && (u.width = a.trgHeight, u.height = a.trgWidth), r) {
                            case 2:
                                d.translate(u.width, 0), d.scale(-1, 1);
                                break;
                            case 3:
                                d.translate(u.width, u.height), d.rotate(Math.PI);
                                break;
                            case 4:
                                d.translate(0, u.height), d.scale(1, -1);
                                break;
                            case 5:
                                d.rotate(.5 * Math.PI), d.scale(1, -1);
                                break;
                            case 6:
                                d.rotate(.5 * Math.PI), d.translate(0, -u.height);
                                break;
                            case 7:
                                d.rotate(.5 * Math.PI), d.translate(u.width, -u.height), d.scale(-1, 1);
                                break;
                            case 8:
                                d.rotate(-.5 * Math.PI), d.translate(-u.width, 0)
                        }
                        drawImageIOSFix(d, l, null != a.srcX ? a.srcX : 0, null != a.srcY ? a.srcY : 0, a.srcWidth, a.srcHeight, null != a.trgX ? a.trgX : 0, null != a.trgY ? a.trgY : 0, a.trgWidth, a.trgHeight);
                        var c = u.toDataURL("image/png");
                        if (null != o) return o(c, u)
                    })
                }, null != o && (l.onerror = o), l.src = e.dataURL
            }
        }, {
            key: "processQueue",
            value: function () {
                var e = this.options.parallelUploads,
                    t = this.getUploadingFiles().length,
                    i = t;
                if (!(t >= e)) {
                    var n = this.getQueuedFiles();
                    if (n.length > 0) {
                        if (this.options.uploadMultiple) return this.processFiles(n.slice(0, e - t));
                        for (; i < e;) {
                            if (!n.length) return;
                            this.processFile(n.shift()), i++
                        }
                    }
                }
            }
        }, {
            key: "processFile",
            value: function (e) {
                return this.processFiles([e])
            }
        }, {
            key: "processFiles",
            value: function (e) {
                for (var i = 0, n = n = e;;) {
                    if (i >= n.length) break;
                    var r = n[i++];
                    r.processing = !0, r.status = t.UPLOADING, this.emit("processing", r)
                }
                return this.options.uploadMultiple && this.emit("processingmultiple", e), this.uploadFiles(e)
            }
        }, {
            key: "_getFilesWithXhr",
            value: function (e) {
                return this.files.filter(function (t) {
                    return t.xhr === e
                }).map(function (e) {
                    return e
                })
            }
        }, {
            key: "cancelUpload",
            value: function (e) {
                if (e.status === t.UPLOADING) {
                    for (var i = this._getFilesWithXhr(e.xhr), n = 0, r = r = i;;) {
                        if (n >= r.length) break;
                        r[n++].status = t.CANCELED
                    }
                    void 0 !== e.xhr && e.xhr.abort();
                    for (var o = 0, a = a = i;;) {
                        if (o >= a.length) break;
                        var s = a[o++];
                        this.emit("canceled", s)
                    }
                    this.options.uploadMultiple && this.emit("canceledmultiple", i)
                } else e.status !== t.ADDED && e.status !== t.QUEUED || (e.status = t.CANCELED, this.emit("canceled", e), this.options.uploadMultiple && this.emit("canceledmultiple", [e]));
                if (this.options.autoProcessQueue) return this.processQueue()
            }
        }, {
            key: "resolveOption",
            value: function (e) {
                if ("function" == typeof e) {
                    for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
                    return e.apply(this, i)
                }
                return e
            }
        }, {
            key: "uploadFile",
            value: function (e) {
                return this.uploadFiles([e])
            }
        }, {
            key: "uploadFiles",
            value: function (e) {
                var i = this;
                this._transformFiles(e, function (n) {
                    if (e[0].upload.chunked) {
                        var r = e[0],
                            o = n[0];
                        r.upload.chunks = [];
                        var a = function () {
                            for (var n = 0; void 0 !== r.upload.chunks[n];) n++;
                            if (!(n >= r.upload.totalChunkCount)) {
                                0;
                                var a = n * i.options.chunkSize,
                                    s = Math.min(a + i.options.chunkSize, r.size),
                                    l = {
                                        name: i._getParamName(0),
                                        data: o.webkitSlice ? o.webkitSlice(a, s) : o.slice(a, s),
                                        filename: r.upload.filename,
                                        chunkIndex: n
                                    };
                                r.upload.chunks[n] = {
                                    file: r,
                                    index: n,
                                    dataBlock: l,
                                    status: t.UPLOADING,
                                    progress: 0,
                                    retries: 0
                                }, i._uploadData(e, [l])
                            }
                        };
                        if (r.upload.finishedChunkUpload = function (n) {
                                var o = !0;
                                n.status = t.SUCCESS, n.dataBlock = null;
                                for (var s = 0; s < r.upload.totalChunkCount; s++) {
                                    if (void 0 === r.upload.chunks[s]) return a();
                                    r.upload.chunks[s].status !== t.SUCCESS && (o = !1)
                                }
                                o && i.options.chunksUploaded(r, function () {
                                    i._finished(e, "", null)
                                })
                            }, i.options.parallelChunkUploads)
                            for (var s = 0; s < r.upload.totalChunkCount; s++) a();
                        else a()
                    } else {
                        for (var l = [], u = 0; u < e.length; u++) l[u] = {
                            name: i._getParamName(u),
                            data: n[u],
                            filename: e[u].upload.filename
                        };
                        i._uploadData(e, l)
                    }
                })
            }
        }, {
            key: "_getChunk",
            value: function (e, t) {
                for (var i = 0; i < e.upload.totalChunkCount; i++)
                    if (void 0 !== e.upload.chunks[i] && e.upload.chunks[i].xhr === t) return e.upload.chunks[i]
            }
        }, {
            key: "_uploadData",
            value: function (e, i) {
                for (var n = this, r = new XMLHttpRequest, o = 0, a = a = e;;) {
                    if (o >= a.length) break;
                    a[o++].xhr = r
                }
                e[0].upload.chunked && (e[0].upload.chunks[i[0].chunkIndex].xhr = r);
                var s = this.resolveOption(this.options.method, e),
                    l = this.resolveOption(this.options.url, e);
                r.open(s, l, !0), r.timeout = this.resolveOption(this.options.timeout, e), r.withCredentials = !!this.options.withCredentials, r.onload = function (t) {
                    n._finishedUploading(e, r, t)
                }, r.onerror = function () {
                    n._handleUploadError(e, r)
                }, (null != r.upload ? r.upload : r).onprogress = function (t) {
                    return n._updateFilesUploadProgress(e, r, t)
                };
                var u = {
                    Accept: "application/json",
                    "Cache-Control": "no-cache",
                    "X-Requested-With": "XMLHttpRequest"
                };
                this.options.headers && t.extend(u, this.options.headers);
                for (var d in u) {
                    var c = u[d];
                    c && r.setRequestHeader(d, c)
                }
                var p = new FormData;
                if (this.options.params) {
                    var h = this.options.params;
                    "function" == typeof h && (h = h.call(this, e, r, e[0].upload.chunked ? this._getChunk(e[0], r) : null));
                    for (var f in h) {
                        var m = h[f];
                        p.append(f, m)
                    }
                }
                for (var v = 0, g = g = e;;) {
                    if (v >= g.length) break;
                    var k = g[v++];
                    this.emit("sending", k, r, p)
                }
                this.options.uploadMultiple && this.emit("sendingmultiple", e, r, p), this._addFormElementData(p);
                for (var y = 0; y < i.length; y++) {
                    var b = i[y];
                    p.append(b.name, b.data, b.filename)
                }
                this.submitRequest(r, p, e)
            }
        }, {
            key: "_transformFiles",
            value: function (e, t) {
                for (var i = this, n = [], r = 0, o = function (o) {
                        i.options.transformFile.call(i, e[o], function (i) {
                            n[o] = i, ++r === e.length && t(n)
                        })
                    }, a = 0; a < e.length; a++) o(a)
            }
        }, {
            key: "_addFormElementData",
            value: function (e) {
                if ("FORM" === this.element.tagName)
                    for (var t = 0, i = i = this.element.querySelectorAll("input, textarea, select, button");;) {
                        if (t >= i.length) break;
                        var n = i[t++],
                            r = n.getAttribute("name"),
                            o = n.getAttribute("type");
                        if (o && (o = o.toLowerCase()), void 0 !== r && null !== r)
                            if ("SELECT" === n.tagName && n.hasAttribute("multiple"))
                                for (var a = 0, s = s = n.options;;) {
                                    if (a >= s.length) break;
                                    var l = s[a++];
                                    l.selected && e.append(r, l.value)
                                } else(!o || "checkbox" !== o && "radio" !== o || n.checked) && e.append(r, n.value)
                    }
            }
        }, {
            key: "_updateFilesUploadProgress",
            value: function (e, t, i) {
                var n = void 0;
                if (void 0 !== i) {
                    if (n = 100 * i.loaded / i.total, e[0].upload.chunked) {
                        var r = e[0],
                            o = this._getChunk(r, t);
                        o.progress = n, o.total = i.total, o.bytesSent = i.loaded;
                        r.upload.progress = 0, r.upload.total = 0, r.upload.bytesSent = 0;
                        for (var a = 0; a < r.upload.totalChunkCount; a++) void 0 !== r.upload.chunks[a] && void 0 !== r.upload.chunks[a].progress && (r.upload.progress += r.upload.chunks[a].progress, r.upload.total += r.upload.chunks[a].total, r.upload.bytesSent += r.upload.chunks[a].bytesSent);
                        r.upload.progress = r.upload.progress / r.upload.totalChunkCount
                    } else
                        for (var s = 0, l = l = e;;) {
                            if (s >= l.length) break;
                            var u = l[s++];
                            u.upload.progress = n, u.upload.total = i.total, u.upload.bytesSent = i.loaded
                        }
                    for (var d = 0, c = c = e;;) {
                        if (d >= c.length) break;
                        var p = c[d++];
                        this.emit("uploadprogress", p, p.upload.progress, p.upload.bytesSent)
                    }
                } else {
                    var h = !0;
                    n = 100;
                    for (var f = 0, m = m = e;;) {
                        if (f >= m.length) break;
                        var v = m[f++];
                        100 === v.upload.progress && v.upload.bytesSent === v.upload.total || (h = !1), v.upload.progress = n, v.upload.bytesSent = v.upload.total
                    }
                    if (h) return;
                    for (var g = 0, k = k = e;;) {
                        if (g >= k.length) break;
                        var y = k[g++];
                        this.emit("uploadprogress", y, n, y.upload.bytesSent)
                    }
                }
            }
        }, {
            key: "_finishedUploading",
            value: function (e, i, n) {
                var r = void 0;
                if (e[0].status !== t.CANCELED && 4 === i.readyState) {
                    if ("arraybuffer" !== i.responseType && "blob" !== i.responseType && (r = i.responseText, i.getResponseHeader("content-type") && ~i.getResponseHeader("content-type").indexOf("application/json"))) try {
                        r = JSON.parse(r)
                    } catch (e) {
                        n = e, r = "Invalid JSON response from server."
                    }
                    this._updateFilesUploadProgress(e), 200 <= i.status && i.status < 300 ? e[0].upload.chunked ? e[0].upload.finishedChunkUpload(this._getChunk(e[0], i)) : this._finished(e, r, n) : this._handleUploadError(e, i, r)
                }
            }
        }, {
            key: "_handleUploadError",
            value: function (e, i, n) {
                if (e[0].status !== t.CANCELED) {
                    if (e[0].upload.chunked && this.options.retryChunks) {
                        var r = this._getChunk(e[0], i);
                        if (r.retries++ < this.options.retryChunksLimit) return void this._uploadData(e, [r.dataBlock]);
                        console.warn("Retried this chunk too often. Giving up.")
                    }
                    for (var o = 0, a = a = e;;) {
                        if (o >= a.length) break;
                        a[o++];
                        this._errorProcessing(e, n || this.options.dictResponseError.replace("{{statusCode}}", i.status), i)
                    }
                }
            }
        }, {
            key: "submitRequest",
            value: function (e, t, i) {
                e.send(t)
            }
        }, {
            key: "_finished",
            value: function (e, i, n) {
                for (var r = 0, o = o = e;;) {
                    if (r >= o.length) break;
                    var a = o[r++];
                    a.status = t.SUCCESS, this.emit("success", a, i, n), this.emit("complete", a)
                }
                if (this.options.uploadMultiple && (this.emit("successmultiple", e, i, n), this.emit("completemultiple", e)), this.options.autoProcessQueue) return this.processQueue()
            }
        }, {
            key: "_errorProcessing",
            value: function (e, i, n) {
                for (var r = 0, o = o = e;;) {
                    if (r >= o.length) break;
                    var a = o[r++];
                    a.status = t.ERROR, this.emit("error", a, i, n), this.emit("complete", a)
                }
                if (this.options.uploadMultiple && (this.emit("errormultiple", e, i, n), this.emit("completemultiple", e)), this.options.autoProcessQueue) return this.processQueue()
            }
        }], [{
            key: "uuidv4",
            value: function () {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                    var t = 16 * Math.random() | 0;
                    return ("x" === e ? t : 3 & t | 8).toString(16)
                })
            }
        }]), t
    }();
Dropzone.initClass(), Dropzone.version = "5.4.0", Dropzone.options = {}, Dropzone.optionsForElement = function (e) {
    return e.getAttribute("id") ? Dropzone.options[camelize(e.getAttribute("id"))] : void 0
}, Dropzone.instances = [], Dropzone.forElement = function (e) {
    if ("string" == typeof e && (e = document.querySelector(e)), null == (null != e ? e.dropzone : void 0)) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
    return e.dropzone
}, Dropzone.autoDiscover = !0, Dropzone.discover = function () {
    var e = void 0;
    if (document.querySelectorAll) e = document.querySelectorAll(".dropzone");
    else {
        e = [];
        var t = function (t) {
            return function () {
                for (var i = [], n = 0, r = r = t;;) {
                    if (n >= r.length) break;
                    var o = r[n++];
                    /(^| )dropzone($| )/.test(o.className) ? i.push(e.push(o)) : i.push(void 0)
                }
                return i
            }()
        };
        t(document.getElementsByTagName("div")), t(document.getElementsByTagName("form"))
    }
    return function () {
        for (var t = [], i = 0, n = n = e;;) {
            if (i >= n.length) break;
            var r = n[i++];
            !1 !== Dropzone.optionsForElement(r) ? t.push(new Dropzone(r)) : t.push(void 0)
        }
        return t
    }()
}, Dropzone.blacklistedBrowsers = [/opera.*(Macintosh|Windows Phone).*version\/12/i], Dropzone.isBrowserSupported = function () {
    var e = !0;
    if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)
        if ("classList" in document.createElement("a"))
            for (var t = 0, i = i = Dropzone.blacklistedBrowsers;;) {
                if (t >= i.length) break;
                i[t++].test(navigator.userAgent) && (e = !1)
            } else e = !1;
        else e = !1;
    return e
}, Dropzone.dataURItoBlob = function (e) {
    for (var t = atob(e.split(",")[1]), i = e.split(",")[0].split(":")[1].split(";")[0], n = new ArrayBuffer(t.length), r = new Uint8Array(n), o = 0, a = t.length, s = 0 <= a; s ? o <= a : o >= a; s ? o++ : o--) r[o] = t.charCodeAt(o);
    return new Blob([n], {
        type: i
    })
};
var without = function (e, t) {
        return e.filter(function (e) {
            return e !== t
        }).map(function (e) {
            return e
        })
    },
    camelize = function (e) {
        return e.replace(/[\-_](\w)/g, function (e) {
            return e.charAt(1).toUpperCase()
        })
    };
Dropzone.createElement = function (e) {
    var t = document.createElement("div");
    return t.innerHTML = e, t.childNodes[0]
}, Dropzone.elementInside = function (e, t) {
    if (e === t) return !0;
    for (; e = e.parentNode;)
        if (e === t) return !0;
    return !1
}, Dropzone.getElement = function (e, t) {
    var i = void 0;
    if ("string" == typeof e ? i = document.querySelector(e) : null != e.nodeType && (i = e), null == i) throw new Error("Invalid `" + t + "` option provided. Please provide a CSS selector or a plain HTML element.");
    return i
}, Dropzone.getElements = function (e, t) {
    var i = void 0,
        n = void 0;
    if (e instanceof Array) {
        n = [];
        try {
            for (var r = 0, o = o = e; !(r >= o.length);) i = o[r++], n.push(this.getElement(i, t))
        } catch (e) {
            n = null
        }
    } else if ("string" == typeof e) {
        n = [];
        for (var a = 0, s = s = document.querySelectorAll(e); !(a >= s.length);) i = s[a++], n.push(i)
    } else null != e.nodeType && (n = [e]);
    if (null == n || !n.length) throw new Error("Invalid `" + t + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
    return n
}, Dropzone.confirm = function (e, t, i) {
    return window.confirm(e) ? t() : null != i ? i() : void 0
}, Dropzone.isValidFile = function (e, t) {
    if (!t) return !0;
    t = t.split(",");
    for (var i = e.type, n = i.replace(/\/.*$/, ""), r = 0, o = o = t;;) {
        if (r >= o.length) break;
        var a = o[r++];
        if ("." === (a = a.trim()).charAt(0)) {
            if (-1 !== e.name.toLowerCase().indexOf(a.toLowerCase(), e.name.length - a.length)) return !0
        } else if (/\/\*$/.test(a)) {
            if (n === a.replace(/\/.*$/, "")) return !0
        } else if (i === a) return !0
    }
    return !1
}, "undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function (e) {
    return this.each(function () {
        return new Dropzone(this, e)
    })
}), "undefined" != typeof module && null !== module ? module.exports = Dropzone : window.Dropzone = Dropzone, Dropzone.ADDED = "added", Dropzone.QUEUED = "queued", Dropzone.ACCEPTED = Dropzone.QUEUED, Dropzone.UPLOADING = "uploading", Dropzone.PROCESSING = Dropzone.UPLOADING, Dropzone.CANCELED = "canceled", Dropzone.ERROR = "error", Dropzone.SUCCESS = "success";
var detectVerticalSquash = function (e) {
        e.naturalWidth;
        var t = e.naturalHeight,
            i = document.createElement("canvas");
        i.width = 1, i.height = t;
        var n = i.getContext("2d");
        n.drawImage(e, 0, 0);
        for (var r = n.getImageData(1, 0, 1, t).data, o = 0, a = t, s = t; s > o;) {
            0 === r[4 * (s - 1) + 3] ? a = s : o = s, s = a + o >> 1
        }
        var l = s / t;
        return 0 === l ? 1 : l
    },
    drawImageIOSFix = function (e, t, i, n, r, o, a, s, l, u) {
        var d = detectVerticalSquash(t);
        return e.drawImage(t, i, n, r, o, a, s, l, u / d)
    },
    ExifRestore = function () {
        function e() {
            _classCallCheck(this, e)
        }
        return _createClass(e, null, [{
            key: "initClass",
            value: function () {
                this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            }
        }, {
            key: "encode64",
            value: function (e) {
                for (var t = "", i = void 0, n = void 0, r = "", o = void 0, a = void 0, s = void 0, l = "", u = 0; o = (i = e[u++]) >> 2, a = (3 & i) << 4 | (n = e[u++]) >> 4, s = (15 & n) << 2 | (r = e[u++]) >> 6, l = 63 & r, isNaN(n) ? s = l = 64 : isNaN(r) && (l = 64), t = t + this.KEY_STR.charAt(o) + this.KEY_STR.charAt(a) + this.KEY_STR.charAt(s) + this.KEY_STR.charAt(l), i = n = r = "", o = a = s = l = "", u < e.length;);
                return t
            }
        }, {
            key: "restore",
            value: function (e, t) {
                if (!e.match("data:image/jpeg;base64,")) return t;
                var i = this.decode64(e.replace("data:image/jpeg;base64,", "")),
                    n = this.slice2Segments(i),
                    r = this.exifManipulation(t, n);
                return "data:image/jpeg;base64," + this.encode64(r)
            }
        }, {
            key: "exifManipulation",
            value: function (e, t) {
                var i = this.getExifArray(t),
                    n = this.insertExif(e, i);
                return new Uint8Array(n)
            }
        }, {
            key: "getExifArray",
            value: function (e) {
                for (var t = void 0, i = 0; i < e.length;) {
                    if (255 === (t = e[i])[0] & 225 === t[1]) return t;
                    i++
                }
                return []
            }
        }, {
            key: "insertExif",
            value: function (e, t) {
                var i = e.replace("data:image/jpeg;base64,", ""),
                    n = this.decode64(i),
                    r = n.indexOf(255, 3),
                    o = n.slice(0, r),
                    a = n.slice(r),
                    s = o;
                return s = (s = s.concat(t)).concat(a)
            }
        }, {
            key: "slice2Segments",
            value: function (e) {
                for (var t = 0, i = [];;) {
                    if (255 === e[t] & 218 === e[t + 1]) break;
                    if (255 === e[t] & 216 === e[t + 1]) t += 2;
                    else {
                        var n = t + (256 * e[t + 2] + e[t + 3]) + 2,
                            r = e.slice(t, n);
                        i.push(r), t = n
                    }
                    if (t > e.length) break
                }
                return i
            }
        }, {
            key: "decode64",
            value: function (e) {
                var t = void 0,
                    i = void 0,
                    n = "",
                    r = void 0,
                    o = void 0,
                    a = "",
                    s = 0,
                    l = [];
                for (/[^A-Za-z0-9\+\/\=]/g.exec(e) && console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."), e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); t = this.KEY_STR.indexOf(e.charAt(s++)) << 2 | (r = this.KEY_STR.indexOf(e.charAt(s++))) >> 4, i = (15 & r) << 4 | (o = this.KEY_STR.indexOf(e.charAt(s++))) >> 2, n = (3 & o) << 6 | (a = this.KEY_STR.indexOf(e.charAt(s++))), l.push(t), 64 !== o && l.push(i), 64 !== a && l.push(n), t = i = n = "", r = o = a = "", s < e.length;);
                return l
            }
        }]), e
    }();
ExifRestore.initClass();
var contentLoaded = function (e, t) {
    var i = !1,
        n = !0,
        r = e.document,
        o = r.documentElement,
        a = r.addEventListener ? "addEventListener" : "attachEvent",
        s = r.addEventListener ? "removeEventListener" : "detachEvent",
        l = r.addEventListener ? "" : "on",
        u = function n(o) {
            if ("readystatechange" !== o.type || "complete" === r.readyState) return ("load" === o.type ? e : r)[s](l + o.type, n, !1), !i && (i = !0) ? t.call(e, o.type || o) : void 0
        };
    if ("complete" !== r.readyState) {
        if (r.createEventObject && o.doScroll) {
            try {
                n = !e.frameElement
            } catch (e) {}
            n && function e() {
                try {
                    o.doScroll("left")
                } catch (t) {
                    return void setTimeout(e, 50)
                }
                return u("poll")
            }()
        }
        return r[a](l + "DOMContentLoaded", u, !1), r[a](l + "readystatechange", u, !1), e[a](l + "load", u, !1)
    }
};

function __guard__(e, t) {
    return void 0 !== e && null !== e ? t(e) : void 0
}

function __guardMethod__(e, t, i) {
    return void 0 !== e && null !== e && "function" == typeof e[t] ? i(e, t) : void 0
}
Dropzone._autoDiscoverFunction = function () {
    if (Dropzone.autoDiscover) return Dropzone.discover()
}, contentLoaded(window, Dropzone._autoDiscoverFunction); /*!jQuery Form Plugin | Version: 3.51.0-2014.06.20 | Requires jQuery v1.5 or later | Copyright (c) 2014 M. Alsup | Dual licensed under the MIT and GPL licenses.*/
! function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function (e) {
    "use strict";

    function t(t) {
        var r = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r))
    }

    function r(t) {
        var r = t.target,
            a = e(r);
        if (!a.is("[type=submit],[type=image]")) {
            var n = a.closest("[type=submit]");
            if (0 === n.length) return;
            r = n[0]
        }
        var i = this;
        if (i.clk = r, "image" == r.type)
            if (void 0 !== t.offsetX) i.clk_x = t.offsetX, i.clk_y = t.offsetY;
            else if ("function" == typeof e.fn.offset) {
            var o = a.offset();
            i.clk_x = t.pageX - o.left, i.clk_y = t.pageY - o.top
        } else i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop;
        setTimeout(function () {
            i.clk = i.clk_x = i.clk_y = null
        }, 100)
    }

    function a() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }
    var n = {};
    n.fileapi = void 0 !== e("<input type='file'/>").get(0).files, n.formdata = void 0 !== window.FormData;
    var i = !!e.fn.prop;
    e.fn.attr2 = function () {
        if (!i) return this.attr.apply(this, arguments);
        var e = this.prop.apply(this, arguments);
        return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
    }, e.fn.ajaxSubmit = function (t) {
        function r(r) {
            var a, n, i = e.param(r, t.traditional).split("&"),
                o = i.length,
                s = [];
            for (a = 0; o > a; a++) i[a] = i[a].replace(/\+/g, " "), n = i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
            return s
        }

        function o(a) {
            for (var n = new FormData, i = 0; i < a.length; i++) n.append(a[i].name, a[i].value);
            if (t.extraData) {
                var o = r(t.extraData);
                for (i = 0; i < o.length; i++) o[i] && n.append(o[i][0], o[i][1])
            }
            t.data = null;
            var s = e.extend(!0, {}, e.ajaxSettings, t, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: u || "POST"
            });
            t.uploadProgress && (s.xhr = function () {
                var r = e.ajaxSettings.xhr();
                return r.upload && r.upload.addEventListener("progress", function (e) {
                    var r = 0,
                        a = e.loaded || e.position,
                        n = e.total;
                    e.lengthComputable && (r = Math.ceil(a / n * 100)), t.uploadProgress(e, a, n, r)
                }, !1), r
            }), s.data = null;
            var c = s.beforeSend;
            return s.beforeSend = function (e, r) {
                r.data = t.formData ? t.formData : n, c && c.call(this, e, r)
            }, e.ajax(s)
        }

        function s(r) {
            function n(e) {
                var t = null;
                try {
                    e.contentWindow && (t = e.contentWindow.document)
                } catch (r) {
                    a("cannot get iframe.contentWindow document: " + r)
                }
                if (t) return t;
                try {
                    t = e.contentDocument ? e.contentDocument : e.document
                } catch (r) {
                    a("cannot get iframe.contentDocument: " + r), t = e.document
                }
                return t
            }

            function o() {
                function t() {
                    try {
                        var e = n(g).readyState;
                        a("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                    } catch (r) {
                        a("Server abort: ", r, " (", r.name, ")"), s(k), j && clearTimeout(j), j = void 0
                    }
                }
                var r = f.attr2("target"),
                    i = f.attr2("action"),
                    o = "multipart/form-data",
                    c = f.attr("enctype") || f.attr("encoding") || o;
                w.setAttribute("target", p), (!u || /post/i.test(u)) && w.setAttribute("method", "POST"), i != m.url && w.setAttribute("action", m.url), m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), m.timeout && (j = setTimeout(function () {
                    T = !0, s(D)
                }, m.timeout));
                var l = [];
                try {
                    if (m.extraData)
                        for (var d in m.extraData) m.extraData.hasOwnProperty(d) && l.push(e.isPlainObject(m.extraData[d]) && m.extraData[d].hasOwnProperty("name") && m.extraData[d].hasOwnProperty("value") ? e('<input type="hidden" name="' + m.extraData[d].name + '">').val(m.extraData[d].value).appendTo(w)[0] : e('<input type="hidden" name="' + d + '">').val(m.extraData[d]).appendTo(w)[0]);
                    m.iframeTarget || v.appendTo("body"), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1), setTimeout(t, 15);
                    try {
                        w.submit()
                    } catch (h) {
                        var x = document.createElement("form").submit;
                        x.apply(w)
                    }
                } finally {
                    w.setAttribute("action", i), w.setAttribute("enctype", c), r ? w.setAttribute("target", r) : f.removeAttr("target"), e(l).remove()
                }
            }

            function s(t) {
                if (!x.aborted && !F) {
                    if (M = n(g), M || (a("cannot access response document"), t = k), t === D && x) return x.abort("timeout"), void S.reject(x, "timeout");
                    if (t == k && x) return x.abort("server abort"), void S.reject(x, "error", "server abort");
                    if (M && M.location.href != m.iframeSrc || T) {
                        g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);
                        var r, i = "success";
                        try {
                            if (T) throw "timeout";
                            var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);
                            if (a("isXml=" + o), !o && window.opera && (null === M.body || !M.body.innerHTML) && --O) return a("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);
                            var u = M.body ? M.body : M.documentElement;
                            x.responseText = u ? u.innerHTML : null, x.responseXML = M.XMLDocument ? M.XMLDocument : M, o && (m.dataType = "xml"), x.getResponseHeader = function (e) {
                                var t = {
                                    "content-type": m.dataType
                                };
                                return t[e.toLowerCase()]
                            }, u && (x.status = Number(u.getAttribute("status")) || x.status, x.statusText = u.getAttribute("statusText") || x.statusText);
                            var c = (m.dataType || "").toLowerCase(),
                                l = /(json|script|text)/.test(c);
                            if (l || m.textarea) {
                                var f = M.getElementsByTagName("textarea")[0];
                                if (f) x.responseText = f.value, x.status = Number(f.getAttribute("status")) || x.status, x.statusText = f.getAttribute("statusText") || x.statusText;
                                else if (l) {
                                    var p = M.getElementsByTagName("pre")[0],
                                        h = M.getElementsByTagName("body")[0];
                                    p ? x.responseText = p.textContent ? p.textContent : p.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText)
                                }
                            } else "xml" == c && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText));
                            try {
                                E = _(x, c, m)
                            } catch (y) {
                                i = "parsererror", x.error = r = y || i
                            }
                        } catch (y) {
                            a("error caught: ", y), i = "error", x.error = r = y || i
                        }
                        x.aborted && (a("upload aborted"), i = null), x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? "success" : "error"), "success" === i ? (m.success && m.success.call(m.context, E, "success", x), S.resolve(x.responseText, "success", x), d && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText), m.error && m.error.call(m.context, x, i, r), S.reject(x, "error", r), d && e.event.trigger("ajaxError", [x, m, r])), d && e.event.trigger("ajaxComplete", [x, m]), d && !--e.active && e.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, x, i), F = !0, m.timeout && clearTimeout(j), setTimeout(function () {
                            m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(), x.responseXML = null
                        }, 100)
                    }
                }
            }
            var c, l, m, d, p, v, g, x, y, b, T, j, w = f[0],
                S = e.Deferred();
            if (S.abort = function (e) {
                    x.abort(e)
                }, r)
                for (l = 0; l < h.length; l++) c = e(h[l]), i ? c.prop("disabled", !1) : c.removeAttr("disabled");
            if (m = e.extend(!0, {}, e.ajaxSettings, t), m.context = m.context || m, p = "jqFormIO" + (new Date).getTime(), m.iframeTarget ? (v = e(m.iframeTarget), b = v.attr2("name"), b ? p = b : v.attr2("name", p)) : (v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />'), v.css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                })), g = v[0], x = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function () {},
                    getResponseHeader: function () {},
                    setRequestHeader: function () {},
                    abort: function (t) {
                        var r = "timeout" === t ? "timeout" : "aborted";
                        a("aborting upload... " + r), this.aborted = 1;
                        try {
                            g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop")
                        } catch (n) {}
                        v.attr("src", m.iframeSrc), x.error = r, m.error && m.error.call(m.context, x, r, t), d && e.event.trigger("ajaxError", [x, m, r]), m.complete && m.complete.call(m.context, x, r)
                    }
                }, d = m.global, d && 0 === e.active++ && e.event.trigger("ajaxStart"), d && e.event.trigger("ajaxSend", [x, m]), m.beforeSend && m.beforeSend.call(m.context, x, m) === !1) return m.global && e.active--, S.reject(), S;
            if (x.aborted) return S.reject(), S;
            y = w.clk, y && (b = y.name, b && !y.disabled && (m.extraData = m.extraData || {}, m.extraData[b] = y.value, "image" == y.type && (m.extraData[b + ".x"] = w.clk_x, m.extraData[b + ".y"] = w.clk_y)));
            var D = 1,
                k = 2,
                A = e("meta[name=csrf-token]").attr("content"),
                L = e("meta[name=csrf-param]").attr("content");
            L && A && (m.extraData = m.extraData || {}, m.extraData[L] = A), m.forceSync ? o() : setTimeout(o, 10);
            var E, M, F, O = 50,
                X = e.parseXML || function (e, t) {
                    return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
                },
                C = e.parseJSON || function (e) {
                    return window.eval("(" + e + ")")
                },
                _ = function (t, r, a) {
                    var n = t.getResponseHeader("content-type") || "",
                        i = "xml" === r || !r && n.indexOf("xml") >= 0,
                        o = i ? t.responseXML : t.responseText;
                    return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (o = a.dataFilter(o, r)), "string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)), o
                };
            return S
        }
        if (!this.length) return a("ajaxSubmit: skipping submit process - no element selected"), this;
        var u, c, l, f = this;
        "function" == typeof t ? t = {
            success: t
        } : void 0 === t && (t = {}), u = t.type || this.attr2("method"), c = t.url || this.attr2("action"), l = "string" == typeof c ? e.trim(c) : "", l = l || window.location.href || "", l && (l = (l.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
            url: l,
            success: e.ajaxSettings.success,
            type: u || e.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, t);
        var m = {};
        if (this.trigger("form-pre-serialize", [this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var d = t.traditional;
        void 0 === d && (d = e.ajaxSettings.traditional);
        var p, h = [],
            v = this.formToArray(t.semantic, h);
        if (t.data && (t.extraData = t.data, p = e.param(t.data, d)), t.beforeSubmit && t.beforeSubmit(v, this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [v, this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var g = e.param(v, d);
        p && (g = g ? g + "&" + p : p), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g;
        var x = [];
        if (t.resetForm && x.push(function () {
                f.resetForm()
            }), t.clearForm && x.push(function () {
                f.clearForm(t.includeHidden)
            }), !t.dataType && t.target) {
            var y = t.success || function () {};
            x.push(function (r) {
                var a = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[a](r).each(y, arguments)
            })
        } else t.success && x.push(t.success);
        if (t.success = function (e, r, a) {
                for (var n = t.context || this, i = 0, o = x.length; o > i; i++) x[i].apply(n, [e, r, a || f, f])
            }, t.error) {
            var b = t.error;
            t.error = function (e, r, a) {
                var n = t.context || this;
                b.apply(n, [e, r, a, f])
            }
        }
        if (t.complete) {
            var T = t.complete;
            t.complete = function (e, r) {
                var a = t.context || this;
                T.apply(a, [e, r, f])
            }
        }
        var j = e("input[type=file]:enabled", this).filter(function () {
                return "" !== e(this).val()
            }),
            w = j.length > 0,
            S = "multipart/form-data",
            D = f.attr("enctype") == S || f.attr("encoding") == S,
            k = n.fileapi && n.formdata;
        a("fileAPI :" + k);
        var A, L = (w || D) && !k;
        t.iframe !== !1 && (t.iframe || L) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function () {
            A = s(v)
        }) : A = s(v) : A = (w || D) && k ? o(v) : e.ajax(t), f.removeData("jqxhr").data("jqxhr", A);
        for (var E = 0; E < h.length; E++) h[E] = null;
        return this.trigger("form-submit-notify", [this, t]), this
    }, e.fn.ajaxForm = function (n) {
        if (n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) {
            var i = {
                s: this.selector,
                c: this.context
            };
            return !e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"), e(function () {
                e(i.s, i.c).ajaxForm(n)
            }), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
        }
        return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r)
    }, e.fn.ajaxFormUnbind = function () {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, e.fn.formToArray = function (t, r) {
        var a = [];
        if (0 === this.length) return a;
        var i, o = this[0],
            s = this.attr("id"),
            u = t ? o.getElementsByTagName("*") : o.elements;
        if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()), s && (i = e(':input[form="' + s + '"]').get(), i.length && (u = (u || []).concat(i))), !u || !u.length) return a;
        var c, l, f, m, d, p, h;
        for (c = 0, p = u.length; p > c; c++)
            if (d = u[c], f = d.name, f && !d.disabled)
                if (t && o.clk && "image" == d.type) o.clk == d && (a.push({
                    name: f,
                    value: e(d).val(),
                    type: d.type
                }), a.push({
                    name: f + ".x",
                    value: o.clk_x
                }, {
                    name: f + ".y",
                    value: o.clk_y
                }));
                else if (m = e.fieldValue(d, !0), m && m.constructor == Array)
            for (r && r.push(d), l = 0, h = m.length; h > l; l++) a.push({
                name: f,
                value: m[l]
            });
        else if (n.fileapi && "file" == d.type) {
            r && r.push(d);
            var v = d.files;
            if (v.length)
                for (l = 0; l < v.length; l++) a.push({
                    name: f,
                    value: v[l],
                    type: d.type
                });
            else a.push({
                name: f,
                value: "",
                type: d.type
            })
        } else null !== m && "undefined" != typeof m && (r && r.push(d), a.push({
            name: f,
            value: m,
            type: d.type,
            required: d.required
        }));
        if (!t && o.clk) {
            var g = e(o.clk),
                x = g[0];
            f = x.name, f && !x.disabled && "image" == x.type && (a.push({
                name: f,
                value: g.val()
            }), a.push({
                name: f + ".x",
                value: o.clk_x
            }, {
                name: f + ".y",
                value: o.clk_y
            }))
        }
        return a
    }, e.fn.formSerialize = function (t) {
        return e.param(this.formToArray(t))
    }, e.fn.fieldSerialize = function (t) {
        var r = [];
        return this.each(function () {
            var a = this.name;
            if (a) {
                var n = e.fieldValue(this, t);
                if (n && n.constructor == Array)
                    for (var i = 0, o = n.length; o > i; i++) r.push({
                        name: a,
                        value: n[i]
                    });
                else null !== n && "undefined" != typeof n && r.push({
                    name: this.name,
                    value: n
                })
            }
        }), e.param(r)
    }, e.fn.fieldValue = function (t) {
        for (var r = [], a = 0, n = this.length; n > a; a++) {
            var i = this[a],
                o = e.fieldValue(i, t);
            null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o))
        }
        return r
    }, e.fieldValue = function (t, r) {
        var a = t.name,
            n = t.type,
            i = t.tagName.toLowerCase();
        if (void 0 === r && (r = !0), r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex)) return null;
        if ("select" == i) {
            var o = t.selectedIndex;
            if (0 > o) return null;
            for (var s = [], u = t.options, c = "select-one" == n, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) {
                var m = u[f];
                if (m.selected) {
                    var d = m.value;
                    if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), c) return d;
                    s.push(d)
                }
            }
            return s
        }
        return e(t).val()
    }, e.fn.clearForm = function (t) {
        return this.each(function () {
            e("input,select,textarea", this).clearFields(t)
        })
    }, e.fn.clearFields = e.fn.clearInputs = function (t) {
        var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
            var a = this.type,
                n = this.tagName.toLowerCase();
            r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "")
        })
    }, e.fn.resetForm = function () {
        return this.each(function () {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }, e.fn.enable = function (e) {
        return void 0 === e && (e = !0), this.each(function () {
            this.disabled = !e
        })
    }, e.fn.selected = function (t) {
        return void 0 === t && (t = !0), this.each(function () {
            var r = this.type;
            if ("checkbox" == r || "radio" == r) this.checked = t;
            else if ("option" == this.tagName.toLowerCase()) {
                var a = e(this).parent("select");
                t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1), this.selected = t
            }
        })
    }, e.fn.ajaxSubmit.debug = !1
}); /*!jQuery Validation Plugin - v1.16.0 - 12/2/2016 | http://jqueryvalidation.org/ | Copyright (c) 2016 JĂ¶rn Zaefferer; Licensed MIT*/
! function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
    a.extend(a.fn, {
        validate: function (b) {
            if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function (b) {
                c.settings.submitHandler && (c.submitButton = b.target), a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
            }), this.on("submit.validate", function (b) {
                function d() {
                    var d, e;
                    return !c.settings.submitHandler || (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), e = c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), void 0 !== e && e)
                }
                return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
            })), c)
        },
        valid: function () {
            var b, c, d;
            return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function () {
                b = c.element(this) && b, b || (d = d.concat(c.errorList))
            }), c.errorList = d), b
        },
        rules: function (b, c) {
            var d, e, f, g, h, i, j = this[0];
            if (null != j && null != j.form) {
                if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
                    case "add":
                        a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                        break;
                    case "remove":
                        return c ? (i = {}, a.each(c.split(/\s/), function (b, c) {
                            i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required")
                        }), i) : (delete e[j.name], f)
                }
                return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
                    required: h
                }, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
                    remote: h
                })), g
            }
        }
    }), a.extend(a.expr.pseudos || a.expr[":"], {
        blank: function (b) {
            return !a.trim("" + a(b).val())
        },
        filled: function (b) {
            var c = a(b).val();
            return null !== c && !!a.trim("" + c)
        },
        unchecked: function (b) {
            return !a(b).prop("checked")
        }
    }), a.validator = function (b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
    }, a.validator.format = function (b, c) {
        return 1 === arguments.length ? function () {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c)
        } : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
                return c
            })
        }), b)
    }, a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (a) {
                this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
            },
            onfocusout: function (a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function (b, c) {
                var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === c.which && "" === this.elementValue(b) || a.inArray(c.keyCode, d) !== -1 || (b.name in this.submitted || b.name in this.invalid) && this.element(b)
            },
            onclick: function (a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function (b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
            },
            unhighlight: function (b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
            }
        },
        setDefaults: function (b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}."),
            step: a.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                function b(b) {
                    !this.form && this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0]);
                    var c = a.data(this.form, "validator"),
                        d = "on" + b.type.replace(/^validate/, ""),
                        e = c.settings;
                    e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b)
                }
                this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var c, d = this.groups = {};
                a.each(this.settings.groups, function (b, c) {
                    "string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
                        d[c] = b
                    })
                }), c = this.settings.rules, a.each(c, function (b, d) {
                    c[b] = a.validator.normalizeRule(d)
                }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function () {
                return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function () {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                return this.valid()
            },
            element: function (b) {
                var c, d, e = this.clean(b),
                    f = this.validationTargetFor(e),
                    g = this,
                    h = !0;
                return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), d = this.groups[f.name], d && a.each(this.groups, function (a, b) {
                    b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))), e && e.name in g.invalid && (g.currentElements.push(e), h = g.check(e) && h))
                }), c = this.check(f) !== !1, h = h && c, c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(b).attr("aria-invalid", !c)), h
            },
            showErrors: function (b) {
                if (b) {
                    var c = this;
                    a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, function (a, b) {
                        return {
                            message: a,
                            element: c.findByName(b)[0]
                        }
                    }), this.successList = a.grep(this.successList, function (a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function () {
                a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(b)
            },
            resetElements: function (a) {
                var b;
                if (this.settings.unhighlight)
                    for (b = 0; a[b]; b++) this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass);
                else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            },
            objectLength: function (a) {
                var b, c = 0;
                for (b in a) a[b] && c++;
                return c
            },
            hideErrors: function () {
                this.hideThese(this.toHide)
            },
            hideThese: function (a) {
                a.not(this.containers).text(""), this.addWrapper(a).hide()
            },
            valid: function () {
                return 0 === this.size()
            },
            size: function () {
                return this.errorList.length
            },
            focusInvalid: function () {
                if (this.settings.focusInvalid) try {
                    a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (b) {}
            },
            findLastActive: function () {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function (a) {
                    return a.element.name === b.name
                }).length && b
            },
            elements: function () {
                var b = this,
                    c = {};
                return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
                    var d = this.name || a(this).attr("name");
                    return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0]), !(d in c || !b.objectLength(a(this).rules())) && (c[d] = !0, !0)
                })
            },
            clean: function (b) {
                return a(b)[0]
            },
            errors: function () {
                var b = this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            },
            resetInternals: function () {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([])
            },
            reset: function () {
                this.resetInternals(), this.currentElements = a([])
            },
            prepareForm: function () {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function (a) {
                this.reset(), this.toHide = this.errorsFor(a)
            },
            elementValue: function (b) {
                var c, d, e = a(b),
                    f = b.type;
                return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = b.hasAttribute("contenteditable") ? e.text() : e.val(), "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"), d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"), d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c)
            },
            check: function (b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d, e, f = a(b).rules(),
                    g = a.map(f, function (a, b) {
                        return b
                    }).length,
                    h = !1,
                    i = this.elementValue(b);
                if ("function" == typeof f.normalizer) {
                    if (i = f.normalizer.call(b, i), "string" != typeof i) throw new TypeError("The normalizer should return a string value.");
                    delete f.normalizer
                }
                for (d in f) {
                    e = {
                        method: d,
                        parameters: f[d]
                    };
                    try {
                        if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
                            h = !0;
                            continue
                        }
                        if (h = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c) return this.formatAndAdd(b, e), !1
                    } catch (j) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j instanceof TypeError && (j.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), j
                    }
                }
                if (!h) return this.objectLength(f) && this.successList.push(b), !0
            },
            customDataMessage: function (b, c) {
                return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
            },
            customMessage: function (a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b])
            },
            findDefined: function () {
                for (var a = 0; a < arguments.length; a++)
                    if (void 0 !== arguments[a]) return arguments[a]
            },
            defaultMessage: function (b, c) {
                "string" == typeof c && (c = {
                    method: c
                });
                var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"),
                    e = /\$?\{(\d+)\}/g;
                return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), d
            },
            formatAndAdd: function (a, b) {
                var c = this.defaultMessage(a, b);
                this.errorList.push({
                    message: c,
                    element: a,
                    method: b.method
                }), this.errorMap[a.name] = c, this.submitted[a.name] = c
            },
            addWrapper: function (a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
            },
            defaultShowErrors: function () {
                var a, b, c;
                for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight)
                    for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function () {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function () {
                return a(this.errorList).map(function () {
                    return this.element
                })
            },
            showLabel: function (b, c) {
                var d, e, f, g, h = this.errorsFor(b),
                    i = this.idOrName(b),
                    j = a(b).attr("aria-describedby");
                h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""), d = h, this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, a(b)) : d.insertAfter(b), h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, a(b).attr("aria-describedby", j), e = this.groups[b.name], e && (g = this, a.each(g.groups, function (b, c) {
                    c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"))
                })))), !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), this.toShow = this.toShow.add(h)
            },
            errorsFor: function (b) {
                var c = this.escapeCssMeta(this.idOrName(b)),
                    d = a(b).attr("aria-describedby"),
                    e = "label[for='" + c + "'], label[for='" + c + "'] *";
                return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e)
            },
            escapeCssMeta: function (a) {
                return a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function (a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            validationTargetFor: function (b) {
                return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0]
            },
            checkable: function (a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function (b) {
                return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']")
            },
            getLength: function (b, c) {
                switch (c.nodeName.toLowerCase()) {
                    case "select":
                        return a("option:selected", c).length;
                    case "input":
                        if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            },
            depend: function (a, b) {
                return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
            },
            dependTypes: {
                "boolean": function (a) {
                    return a
                },
                string: function (b, c) {
                    return !!a(b, c.form).length
                },
                "function": function (a, b) {
                    return a(b)
                }
            },
            optional: function (b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            },
            startRequest: function (b) {
                this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), this.pending[b.name] = !0)
            },
            stopRequest: function (b, c) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function (b, c) {
                return c = "string" == typeof c && c || "remote", a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, {
                        method: c
                    })
                })
            },
            destroy: function () {
                this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function (b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function (b) {
            var c = {},
                d = a(b).attr("class");
            return d && a.each(d.split(" "), function () {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            }), c
        },
        normalizeAttributeRule: function (a, b, c, d) {
            /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0)
        },
        attributeRules: function (b) {
            var c, d, e = {},
                f = a(b),
                g = b.getAttribute("type");
            for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
        },
        dataRules: function (b) {
            var c, d, e = {},
                f = a(b),
                g = b.getAttribute("type");
            for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), this.normalizeAttributeRule(e, g, c, d);
            return e
        },
        staticRules: function (b) {
            var c = {},
                d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
        },
        normalizeRules: function (b, c) {
            return a.each(b, function (d, e) {
                if (e === !1) return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                        case "string":
                            f = !!a(e.depends, c.form).length;
                            break;
                        case "function":
                            f = e.depends.call(c, c)
                    }
                    f ? b[d] = void 0 === e.param || e.param : (a.data(c.form, "validator").resetElements(a(c)), delete b[d])
                }
            }), a.each(b, function (d, e) {
                b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e
            }), a.each(["minlength", "maxlength"], function () {
                b[this] && (b[this] = Number(b[this]))
            }), a.each(["rangelength", "range"], function () {
                var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
            }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
        },
        normalizeRule: function (b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function () {
                    c[this] = !0
                }), b = c
            }
            return b
        },
        addMethod: function (b, c, d) {
            a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
            required: function (b, c, d) {
                if (!this.depend(d, c)) return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0
            },
            email: function (a, b) {
                return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
            },
            url: function (a, b) {
                return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)
            },
            date: function (a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
            },
            dateISO: function (a, b) {
                return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
            },
            number: function (a, b) {
                return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            },
            digits: function (a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            },
            minlength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d
            },
            maxlength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e <= d
            },
            rangelength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d[0] && e <= d[1]
            },
            min: function (a, b, c) {
                return this.optional(b) || a >= c
            },
            max: function (a, b, c) {
                return this.optional(b) || a <= c
            },
            range: function (a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1]
            },
            step: function (b, c, d) {
                var e, f = a(c).attr("type"),
                    g = "Step attribute on input type " + f + " is not supported.",
                    h = ["text", "number", "range"],
                    i = new RegExp("\\b" + f + "\\b"),
                    j = f && !i.test(h.join()),
                    k = function (a) {
                        var b = ("" + a).match(/(?:\.(\d+))?$/);
                        return b && b[1] ? b[1].length : 0
                    },
                    l = function (a) {
                        return Math.round(a * Math.pow(10, e))
                    },
                    m = !0;
                if (j) throw new Error(g);
                return e = k(d), (k(b) > e || l(b) % l(d) !== 0) && (m = !1), this.optional(c) || m
            },
            equalTo: function (b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
                    a(c).valid()
                }), b === e.val()
            },
            remote: function (b, c, d, e) {
                if (this.optional(c)) return "dependency-mismatch";
                e = "string" == typeof e && e || "remote";
                var f, g, h, i = this.previousValue(c, e);
                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, d = "string" == typeof d && {
                    url: d
                } || d, h = a.param(a.extend({
                    data: b
                }, d.data)), i.old === h ? i.valid : (i.old = h, f = this, this.startRequest(c), g = {}, g[c.name] = b, a.ajax(a.extend(!0, {
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: g,
                    context: f.currentForm,
                    success: function (a) {
                        var d, g, h, j = a === !0 || "true" === a;
                        f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, {
                            method: e,
                            parameters: b
                        }), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, f.stopRequest(c, j)
                    }
                }, d)), "pending")
            }
        }
    });
    var b, c = {};
    return a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, d) {
        var e = a.port;
        "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
    }) : (b = a.ajax, a.ajax = function (d) {
        var e = ("mode" in d ? d : a.ajaxSettings).mode,
            f = ("port" in d ? d : a.ajaxSettings).port;
        return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
    }), a
}); /*!Select2 4.0.6-rc.1 | https://github.com/select2/select2/blob/master/LICENSE.md*/ /*!DataTables 1.10.18 Â©2008-2018 SpryMedia Ltd - datatables.net/license*/
! function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], function (e) {
        return t(e, window, document)
    }) : "object" == typeof exports ? module.exports = function (e, n) {
        return e || (e = window), n || (n = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), t(n, e, e.document)
    } : t(jQuery, window, document)
}(function (t, e, n, a) {
    function r(e) {
        var n, a, o = {};
        t.each(e, function (t) {
            (n = t.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(n[1] + " ") && (a = t.replace(n[0], n[2].toLowerCase()), o[a] = t, "o" === n[1] && r(e[t]))
        }), e._hungarianMap = o
    }

    function o(e, n, i) {
        var l;
        e._hungarianMap || r(e), t.each(n, function (r) {
            (l = e._hungarianMap[r]) === a || !i && n[l] !== a || ("o" === l.charAt(0) ? (n[l] || (n[l] = {}), t.extend(!0, n[l], n[r]), o(e[l], n[l], i)) : n[l] = n[r])
        })
    }

    function i(t) {
        var e = qt.defaults.oLanguage,
            n = e.sDecimal;
        if (n && Et(n), t) {
            var a = t.sZeroRecords;
            !t.sEmptyTable && a && "No data available in table" === e.sEmptyTable && Rt(t, t, "sZeroRecords", "sEmptyTable"), !t.sLoadingRecords && a && "Loading..." === e.sLoadingRecords && Rt(t, t, "sZeroRecords", "sLoadingRecords"), t.sInfoThousands && (t.sThousands = t.sInfoThousands), (t = t.sDecimal) && n !== t && Et(t)
        }
    }

    function l(t) {
        if (ue(t, "ordering", "bSort"), ue(t, "orderMulti", "bSortMulti"), ue(t, "orderClasses", "bSortClasses"), ue(t, "orderCellsTop", "bSortCellsTop"), ue(t, "order", "aaSorting"), ue(t, "orderFixed", "aaSortingFixed"), ue(t, "paging", "bPaginate"), ue(t, "pagingType", "sPaginationType"), ue(t, "pageLength", "iDisplayLength"), ue(t, "searching", "bFilter"), "boolean" == typeof t.sScrollX && (t.sScrollX = t.sScrollX ? "100%" : ""), "boolean" == typeof t.scrollX && (t.scrollX = t.scrollX ? "100%" : ""), t = t.aoSearchCols)
            for (var e = 0, n = t.length; e < n; e++) t[e] && o(qt.models.oSearch, t[e])
    }

    function s(e) {
        ue(e, "orderable", "bSortable"), ue(e, "orderData", "aDataSort"), ue(e, "orderSequence", "asSorting"), ue(e, "orderDataType", "sortDataType");
        var n = e.aDataSort;
        "number" == typeof n && !t.isArray(n) && (e.aDataSort = [n])
    }

    function u(n) {
        if (!qt.__browser) {
            var a = {};
            qt.__browser = a;
            var r = t("<div/>").css({
                    position: "fixed",
                    top: 0,
                    left: -1 * t(e).scrollLeft(),
                    height: 1,
                    width: 1,
                    overflow: "hidden"
                }).append(t("<div/>").css({
                    position: "absolute",
                    top: 1,
                    left: 1,
                    width: 100,
                    overflow: "scroll"
                }).append(t("<div/>").css({
                    width: "100%",
                    height: 10
                }))).appendTo("body"),
                o = r.children(),
                i = o.children();
            a.barWidth = o[0].offsetWidth - o[0].clientWidth, a.bScrollOversize = 100 === i[0].offsetWidth && 100 !== o[0].clientWidth, a.bScrollbarLeft = 1 !== Math.round(i.offset().left), a.bBounding = !!r[0].getBoundingClientRect().width, r.remove()
        }
        t.extend(n.oBrowser, qt.__browser), n.oScroll.iBarWidth = qt.__browser.barWidth
    }

    function c(t, e, n, r, o, i) {
        var l, s = !1;
        for (n !== a && (l = n, s = !0); r !== o;) t.hasOwnProperty(r) && (l = s ? e(l, t[r], r, t) : t[r], s = !0, r += i);
        return l
    }

    function f(e, a) {
        var r = qt.defaults.column,
            o = e.aoColumns.length;
        r = t.extend({}, qt.models.oColumn, r, {
            nTh: a || n.createElement("th"),
            sTitle: r.sTitle ? r.sTitle : a ? a.innerHTML : "",
            aDataSort: r.aDataSort ? r.aDataSort : [o],
            mData: r.mData ? r.mData : o,
            idx: o
        });
        e.aoColumns.push(r), (r = e.aoPreSearchCols)[o] = t.extend({}, qt.models.oSearch, r[o]), d(e, o, t(a).data())
    }

    function d(e, n, r) {
        n = e.aoColumns[n];
        var i = e.oClasses,
            l = t(n.nTh);
        if (!n.sWidthOrig) {
            n.sWidthOrig = l.attr("width") || null;
            var u = (l.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
            u && (n.sWidthOrig = u[1])
        }
        r !== a && null !== r && (s(r), o(qt.defaults.column, r), r.mDataProp !== a && !r.mData && (r.mData = r.mDataProp), r.sType && (n._sManualType = r.sType), r.className && !r.sClass && (r.sClass = r.className), r.sClass && l.addClass(r.sClass), t.extend(n, r), Rt(n, r, "sWidth", "sWidthOrig"), r.iDataSort !== a && (n.aDataSort = [r.iDataSort]), Rt(n, r, "aDataSort"));
        var c = n.mData,
            f = w(c),
            d = n.mRender ? w(n.mRender) : null;
        r = function (t) {
            return "string" == typeof t && -1 !== t.indexOf("@")
        };
        n._bAttrSrc = t.isPlainObject(c) && (r(c.sort) || r(c.type) || r(c.filter)), n._setter = null, n.fnGetData = function (t, e, n) {
            var r = f(t, e, a, n);
            return d && e ? d(r, e, t, n) : r
        }, n.fnSetData = function (t, e, n) {
            return x(c)(t, e, n)
        }, "number" != typeof c && (e._rowReadObject = !0), e.oFeatures.bSort || (n.bSortable = !1, l.addClass(i.sSortableNone)), e = -1 !== t.inArray("asc", n.asSorting), r = -1 !== t.inArray("desc", n.asSorting), n.bSortable && (e || r) ? e && !r ? (n.sSortingClass = i.sSortableAsc, n.sSortingClassJUI = i.sSortJUIAscAllowed) : !e && r ? (n.sSortingClass = i.sSortableDesc, n.sSortingClassJUI = i.sSortJUIDescAllowed) : (n.sSortingClass = i.sSortable, n.sSortingClassJUI = i.sSortJUI) : (n.sSortingClass = i.sSortableNone, n.sSortingClassJUI = "")
    }

    function h(t) {
        if (!1 !== t.oFeatures.bAutoWidth) {
            var e = t.aoColumns;
            gt(t);
            for (var n = 0, a = e.length; n < a; n++) e[n].nTh.style.width = e[n].sWidth
        }("" !== (e = t.oScroll).sY || "" !== e.sX) && ht(t), Ht(t, null, "column-sizing", [t])
    }

    function p(t, e) {
        var n = S(t, "bVisible");
        return "number" == typeof n[e] ? n[e] : null
    }

    function g(e, n) {
        var a = S(e, "bVisible");
        return -1 !== (a = t.inArray(n, a)) ? a : null
    }

    function b(e) {
        var n = 0;
        return t.each(e.aoColumns, function (e, a) {
            a.bVisible && "none" !== t(a.nTh).css("display") && n++
        }), n
    }

    function S(e, n) {
        var a = [];
        return t.map(e.aoColumns, function (t, e) {
            t[n] && a.push(e)
        }), a
    }

    function m(t) {
        var e, n, r, o, i, l, s, u, c, f = t.aoColumns,
            d = t.aoData,
            h = qt.ext.type.detect;
        for (e = 0, n = f.length; e < n; e++)
            if (s = f[e], c = [], !s.sType && s._sManualType) s.sType = s._sManualType;
            else if (!s.sType) {
            for (r = 0, o = h.length; r < o; r++) {
                for (i = 0, l = d.length; i < l && (c[i] === a && (c[i] = _(t, i, e, "type")), (u = h[r](c[i], t)) || r === h.length - 1) && "html" !== u; i++);
                if (u) {
                    s.sType = u;
                    break
                }
            }
            s.sType || (s.sType = "string")
        }
    }

    function v(e, n, r, o) {
        var i, l, s, u, c, d, h = e.aoColumns;
        if (n)
            for (i = n.length - 1; 0 <= i; i--) {
                var p = (d = n[i]).targets !== a ? d.targets : d.aTargets;
                for (t.isArray(p) || (p = [p]), l = 0, s = p.length; l < s; l++)
                    if ("number" == typeof p[l] && 0 <= p[l]) {
                        for (; h.length <= p[l];) f(e);
                        o(p[l], d)
                    } else if ("number" == typeof p[l] && 0 > p[l]) o(h.length + p[l], d);
                else if ("string" == typeof p[l])
                    for (u = 0, c = h.length; u < c; u++)("_all" == p[l] || t(h[u].nTh).hasClass(p[l])) && o(u, d)
            }
        if (r)
            for (i = 0, e = r.length; i < e; i++) o(i, r[i])
    }

    function D(e, n, r, o) {
        var i = e.aoData.length,
            l = t.extend(!0, {}, qt.models.oRow, {
                src: r ? "dom" : "data",
                idx: i
            });
        l._aData = n, e.aoData.push(l);
        for (var s = e.aoColumns, u = 0, c = s.length; u < c; u++) s[u].sType = null;
        return e.aiDisplayMaster.push(i), (n = e.rowIdFn(n)) !== a && (e.aIds[n] = l), (r || !e.oFeatures.bDeferRender) && P(e, i, r, o), i
    }

    function y(e, n) {
        var a;
        return n instanceof t || (n = t(n)), n.map(function (t, n) {
            return a = R(e, n), D(e, a.data, n, a.cells)
        })
    }

    function _(t, e, n, r) {
        var o = t.iDraw,
            i = t.aoColumns[n],
            l = t.aoData[e]._aData,
            s = i.sDefaultContent,
            u = i.fnGetData(l, r, {
                settings: t,
                row: e,
                col: n
            });
        if (u === a) return t.iDrawError != o && null === s && (Lt(t, 0, "Requested unknown parameter " + ("function" == typeof i.mData ? "{function}" : "'" + i.mData + "'") + " for row " + e + ", column " + n, 4), t.iDrawError = o), s;
        if (u !== l && null !== u || null === s || r === a) {
            if ("function" == typeof u) return u.call(l)
        } else u = s;
        return null === u && "display" == r ? "" : u
    }

    function T(t, e, n, a) {
        t.aoColumns[n].fnSetData(t.aoData[e]._aData, a, {
            settings: t,
            row: e,
            col: n
        })
    }

    function C(e) {
        return t.map(e.match(/(\\.|[^\.])+/g) || [""], function (t) {
            return t.replace(/\\\./g, ".")
        })
    }

    function w(e) {
        if (t.isPlainObject(e)) {
            var n = {};
            return t.each(e, function (t, e) {
                    e && (n[t] = w(e))
                }),
                function (t, e, r, o) {
                    var i = n[e] || n._;
                    return i !== a ? i(t, e, r, o) : t
                }
        }
        if (null === e) return function (t) {
            return t
        };
        if ("function" == typeof e) return function (t, n, a, r) {
            return e(t, n, a, r)
        };
        if ("string" == typeof e && (-1 !== e.indexOf(".") || -1 !== e.indexOf("[") || -1 !== e.indexOf("("))) {
            var r = function (e, n, o) {
                var i, l;
                if ("" !== o)
                    for (var s = 0, u = (l = C(o)).length; s < u; s++) {
                        if (o = l[s].match(ce), i = l[s].match(fe), o) {
                            if (l[s] = l[s].replace(ce, ""), "" !== l[s] && (e = e[l[s]]), i = [], l.splice(0, s + 1), l = l.join("."), t.isArray(e))
                                for (s = 0, u = e.length; s < u; s++) i.push(r(e[s], n, l));
                            e = "" === (e = o[0].substring(1, o[0].length - 1)) ? i : i.join(e);
                            break
                        }
                        if (i) l[s] = l[s].replace(fe, ""), e = e[l[s]]();
                        else {
                            if (null === e || e[l[s]] === a) return a;
                            e = e[l[s]]
                        }
                    }
                return e
            };
            return function (t, n) {
                return r(t, n, e)
            }
        }
        return function (t) {
            return t[e]
        }
    }

    function x(e) {
        if (t.isPlainObject(e)) return x(e._);
        if (null === e) return function () {};
        if ("function" == typeof e) return function (t, n, a) {
            e(t, "set", n, a)
        };
        if ("string" == typeof e && (-1 !== e.indexOf(".") || -1 !== e.indexOf("[") || -1 !== e.indexOf("("))) {
            var n = function (e, r, o) {
                var i;
                i = (o = C(o))[o.length - 1];
                for (var l, s, u = 0, c = o.length - 1; u < c; u++) {
                    if (l = o[u].match(ce), s = o[u].match(fe), l) {
                        if (o[u] = o[u].replace(ce, ""), e[o[u]] = [], (i = o.slice()).splice(0, u + 1), l = i.join("."), t.isArray(r))
                            for (s = 0, c = r.length; s < c; s++) i = {}, n(i, r[s], l), e[o[u]].push(i);
                        else e[o[u]] = r;
                        return
                    }
                    s && (o[u] = o[u].replace(fe, ""), e = e[o[u]](r)), null !== e[o[u]] && e[o[u]] !== a || (e[o[u]] = {}), e = e[o[u]]
                }
                i.match(fe) ? e[i.replace(fe, "")](r) : e[i.replace(ce, "")] = r
            };
            return function (t, a) {
                return n(t, a, e)
            }
        }
        return function (t, n) {
            t[e] = n
        }
    }

    function I(t) {
        return re(t.aoData, "_aData")
    }

    function A(t) {
        t.aoData.length = 0, t.aiDisplayMaster.length = 0, t.aiDisplay.length = 0, t.aIds = {}
    }

    function F(t, e, n) {
        for (var r = -1, o = 0, i = t.length; o < i; o++) t[o] == e ? r = o : t[o] > e && t[o]--; - 1 != r && n === a && t.splice(r, 1)
    }

    function L(t, e, n, r) {
        var o, i = t.aoData[e],
            l = function (n, a) {
                for (; n.childNodes.length;) n.removeChild(n.firstChild);
                n.innerHTML = _(t, e, a, "display")
            };
        if ("dom" !== n && (n && "auto" !== n || "dom" !== i.src)) {
            var s = i.anCells;
            if (s)
                if (r !== a) l(s[r], r);
                else
                    for (n = 0, o = s.length; n < o; n++) l(s[n], n)
        } else i._aData = R(t, i, r, r === a ? a : i._aData).data;
        if (i._aSortData = null, i._aFilterData = null, l = t.aoColumns, r !== a) l[r].sType = null;
        else {
            for (n = 0, o = l.length; n < o; n++) l[n].sType = null;
            j(t, i)
        }
    }

    function R(e, n, r, o) {
        var i, l, s, u = [],
            c = n.firstChild,
            f = 0,
            d = e.aoColumns,
            h = e._rowReadObject,
            p = (o = o !== a ? o : h ? {} : [], function (t, e) {
                if ("string" == typeof t) {
                    var n = t.indexOf("@"); - 1 !== n && (n = t.substring(n + 1), x(t)(o, e.getAttribute(n)))
                }
            }),
            g = function (e) {
                r !== a && r !== f || (l = d[f], s = t.trim(e.innerHTML), l && l._bAttrSrc ? (x(l.mData._)(o, s), p(l.mData.sort, e), p(l.mData.type, e), p(l.mData.filter, e)) : h ? (l._setter || (l._setter = x(l.mData)), l._setter(o, s)) : o[f] = s), f++
            };
        if (c)
            for (; c;) "TD" != (i = c.nodeName.toUpperCase()) && "TH" != i || (g(c), u.push(c)), c = c.nextSibling;
        else
            for (c = 0, i = (u = n.anCells).length; c < i; c++) g(u[c]);
        return (n = n.firstChild ? n : n.nTr) && (n = n.getAttribute("id")) && x(e.rowId)(o, n), {
            data: o,
            cells: u
        }
    }

    function P(e, a, r, o) {
        var i, l, s, u, c, f = e.aoData[a],
            d = f._aData,
            h = [];
        if (null === f.nTr) {
            for (i = r || n.createElement("tr"), f.nTr = i, f.anCells = h, i._DT_RowIndex = a, j(e, f), u = 0, c = e.aoColumns.length; u < c; u++) s = e.aoColumns[u], (l = r ? o[u] : n.createElement(s.sCellType))._DT_CellIndex = {
                row: a,
                column: u
            }, h.push(l), r && !s.mRender && s.mData === u || t.isPlainObject(s.mData) && s.mData._ === u + ".display" || (l.innerHTML = _(e, a, u, "display")), s.sClass && (l.className += " " + s.sClass), s.bVisible && !r ? i.appendChild(l) : !s.bVisible && r && l.parentNode.removeChild(l), s.fnCreatedCell && s.fnCreatedCell.call(e.oInstance, l, _(e, a, u), d, a, u);
            Ht(e, "aoRowCreatedCallback", null, [i, d, a, h])
        }
        f.nTr.setAttribute("role", "row")
    }

    function j(e, n) {
        var a = n.nTr,
            r = n._aData;
        if (a) {
            var o = e.rowIdFn(r);
            o && (a.id = o), r.DT_RowClass && (o = r.DT_RowClass.split(" "), n.__rowc = n.__rowc ? se(n.__rowc.concat(o)) : o, t(a).removeClass(n.__rowc.join(" ")).addClass(r.DT_RowClass)), r.DT_RowAttr && t(a).attr(r.DT_RowAttr), r.DT_RowData && t(a).data(r.DT_RowData)
        }
    }

    function N(e) {
        var n, a, r, o, i, l = e.nTHead,
            s = e.nTFoot,
            u = 0 === t("th, td", l).length,
            c = e.oClasses,
            f = e.aoColumns;
        for (u && (o = t("<tr/>").appendTo(l)), n = 0, a = f.length; n < a; n++) i = f[n], r = t(i.nTh).addClass(i.sClass), u && r.appendTo(o), e.oFeatures.bSort && (r.addClass(i.sSortingClass), !1 !== i.bSortable && (r.attr("tabindex", e.iTabIndex).attr("aria-controls", e.sTableId), Ct(e, i.nTh, n))), i.sTitle != r[0].innerHTML && r.html(i.sTitle), kt(e, "header")(e, r, i, c);
        if (u && W(e.aoHeader, l), t(l).find(">tr").attr("role", "row"), t(l).find(">tr>th, >tr>td").addClass(c.sHeaderTH), t(s).find(">tr>th, >tr>td").addClass(c.sFooterTH), null !== s)
            for (n = 0, a = (e = e.aoFooter[0]).length; n < a; n++) i = f[n], i.nTf = e[n].cell, i.sClass && t(i.nTf).addClass(i.sClass)
    }

    function H(e, n, r) {
        var o, i, l, s, u = [],
            c = [],
            f = e.aoColumns.length;
        if (n) {
            for (r === a && (r = !1), o = 0, i = n.length; o < i; o++) {
                for (u[o] = n[o].slice(), u[o].nTr = n[o].nTr, l = f - 1; 0 <= l; l--) !e.aoColumns[l].bVisible && !r && u[o].splice(l, 1);
                c.push([])
            }
            for (o = 0, i = u.length; o < i; o++) {
                if (e = u[o].nTr)
                    for (; l = e.firstChild;) e.removeChild(l);
                for (l = 0, n = u[o].length; l < n; l++)
                    if (s = f = 1, c[o][l] === a) {
                        for (e.appendChild(u[o][l].cell), c[o][l] = 1; u[o + f] !== a && u[o][l].cell == u[o + f][l].cell;) c[o + f][l] = 1, f++;
                        for (; u[o][l + s] !== a && u[o][l].cell == u[o][l + s].cell;) {
                            for (r = 0; r < f; r++) c[o + r][l + s] = 1;
                            s++
                        }
                        t(u[o][l].cell).attr("rowspan", f).attr("colspan", s)
                    }
            }
        }
    }

    function O(e) {
        var n = Ht(e, "aoPreDrawCallback", "preDraw", [e]);
        if (-1 !== t.inArray(!1, n)) ft(e, !1);
        else {
            n = [];
            var r = 0,
                o = e.asStripeClasses,
                i = o.length,
                l = e.oLanguage,
                s = e.iInitDisplayStart,
                u = "ssp" == Mt(e),
                c = e.aiDisplay;
            e.bDrawing = !0, s !== a && -1 !== s && (e._iDisplayStart = u ? s : s >= e.fnRecordsDisplay() ? 0 : s, e.iInitDisplayStart = -1);
            s = e._iDisplayStart;
            var f = e.fnDisplayEnd();
            if (e.bDeferLoading) e.bDeferLoading = !1, e.iDraw++, ft(e, !1);
            else if (u) {
                if (!e.bDestroying && !U(e)) return
            } else e.iDraw++;
            if (0 !== c.length)
                for (l = u ? e.aoData.length : f, u = u ? 0 : s; u < l; u++) {
                    var d = c[u],
                        h = e.aoData[d];
                    null === h.nTr && P(e, d);
                    var p = h.nTr;
                    if (0 !== i) {
                        var g = o[r % i];
                        h._sRowStripe != g && (t(p).removeClass(h._sRowStripe).addClass(g), h._sRowStripe = g)
                    }
                    Ht(e, "aoRowCallback", null, [p, h._aData, r, u, d]), n.push(p), r++
                } else r = l.sZeroRecords, 1 == e.iDraw && "ajax" == Mt(e) ? r = l.sLoadingRecords : l.sEmptyTable && 0 === e.fnRecordsTotal() && (r = l.sEmptyTable), n[0] = t("<tr/>", {
                    class: i ? o[0] : ""
                }).append(t("<td />", {
                    valign: "top",
                    colSpan: b(e),
                    class: e.oClasses.sRowEmpty
                }).html(r))[0];
            Ht(e, "aoHeaderCallback", "header", [t(e.nTHead).children("tr")[0], I(e), s, f, c]), Ht(e, "aoFooterCallback", "footer", [t(e.nTFoot).children("tr")[0], I(e), s, f, c]), (o = t(e.nTBody)).children().detach(), o.append(t(n)), Ht(e, "aoDrawCallback", "draw", [e]), e.bSorted = !1, e.bFiltered = !1, e.bDrawing = !1
        }
    }

    function k(t, e) {
        var n = t.oFeatures,
            a = n.bFilter;
        n.bSort && yt(t), a ? G(t, t.oPreviousSearch) : t.aiDisplay = t.aiDisplayMaster.slice(), !0 !== e && (t._iDisplayStart = 0), t._drawHold = e, O(t), t._drawHold = !1
    }

    function M(e) {
        var n = e.oClasses,
            a = t(e.nTable),
            r = (a = t("<div/>").insertBefore(a), e.oFeatures),
            o = t("<div/>", {
                id: e.sTableId + "_wrapper",
                class: n.sWrapper + (e.nTFoot ? "" : " " + n.sNoFooter)
            });
        e.nHolding = a[0], e.nTableWrapper = o[0], e.nTableReinsertBefore = e.nTable.nextSibling;
        for (var i, l, s, u, c, f, d = e.sDom.split(""), h = 0; h < d.length; h++) {
            if (i = null, "<" == (l = d[h])) {
                if (s = t("<div/>")[0], "'" == (u = d[h + 1]) || '"' == u) {
                    for (c = "", f = 2; d[h + f] != u;) c += d[h + f], f++;
                    "H" == c ? c = n.sJUIHeader : "F" == c && (c = n.sJUIFooter), -1 != c.indexOf(".") ? (u = c.split("."), s.id = u[0].substr(1, u[0].length - 1), s.className = u[1]) : "#" == c.charAt(0) ? s.id = c.substr(1, c.length - 1) : s.className = c, h += f
                }
                o.append(s), o = t(s)
            } else if (">" == l) o = o.parent();
            else if ("l" == l && r.bPaginate && r.bLengthChange) i = lt(e);
            else if ("f" == l && r.bFilter) i = q(e);
            else if ("r" == l && r.bProcessing) i = ct(e);
            else if ("t" == l) i = dt(e);
            else if ("i" == l && r.bInfo) i = et(e);
            else if ("p" == l && r.bPaginate) i = st(e);
            else if (0 !== qt.ext.feature.length)
                for (f = 0, u = (s = qt.ext.feature).length; f < u; f++)
                    if (l == s[f].cFeature) {
                        i = s[f].fnInit(e);
                        break
                    } i && ((s = e.aanFeatures)[l] || (s[l] = []), s[l].push(i), o.append(i))
        }
        a.replaceWith(o), e.nHolding = null
    }

    function W(e, n) {
        var a, r, o, i, l, s, u, c, f, d, h = t(n).children("tr");
        for (e.splice(0, e.length), o = 0, s = h.length; o < s; o++) e.push([]);
        for (o = 0, s = h.length; o < s; o++)
            for (r = (a = h[o]).firstChild; r;) {
                if ("TD" == r.nodeName.toUpperCase() || "TH" == r.nodeName.toUpperCase()) {
                    for (c = 1 * r.getAttribute("colspan"), f = 1 * r.getAttribute("rowspan"), c = c && 0 !== c && 1 !== c ? c : 1, f = f && 0 !== f && 1 !== f ? f : 1, i = 0, l = e[o]; l[i];) i++;
                    for (u = i, d = 1 === c, l = 0; l < c; l++)
                        for (i = 0; i < f; i++) e[o + i][u + l] = {
                            cell: r,
                            unique: d
                        }, e[o + i].nTr = a
                }
                r = r.nextSibling
            }
    }

    function E(t, e, n) {
        var a = [];
        n || (n = t.aoHeader, e && W(n = [], e));
        e = 0;
        for (var r = n.length; e < r; e++)
            for (var o = 0, i = n[e].length; o < i; o++) !n[e][o].unique || a[o] && t.bSortCellsTop || (a[o] = n[e][o].cell);
        return a
    }

    function B(e, n, a) {
        if (Ht(e, "aoServerParams", "serverParams", [n]), n && t.isArray(n)) {
            var r = {},
                o = /(.*?)\[\]$/;
            t.each(n, function (t, e) {
                var n = e.name.match(o);
                n ? (n = n[0], r[n] || (r[n] = []), r[n].push(e.value)) : r[e.name] = e.value
            }), n = r
        }
        var i, l = e.ajax,
            s = e.oInstance,
            u = function (t) {
                Ht(e, null, "xhr", [e, t, e.jqXHR]), a(t)
            };
        if (t.isPlainObject(l) && l.data) {
            var c = "function" == typeof (i = l.data) ? i(n, e) : i;
            n = "function" == typeof i && c ? c : t.extend(!0, n, c);
            delete l.data
        }
        c = {
            data: n,
            success: function (t) {
                var n = t.error || t.sError;
                n && Lt(e, 0, n), e.json = t, u(t)
            },
            dataType: "json",
            cache: !1,
            type: e.sServerMethod,
            error: function (n, a) {
                var r = Ht(e, null, "xhr", [e, null, e.jqXHR]); - 1 === t.inArray(!0, r) && ("parsererror" == a ? Lt(e, 0, "Invalid JSON response", 1) : 4 === n.readyState && Lt(e, 0, "Ajax error", 7)), ft(e, !1)
            }
        }, e.oAjaxData = n, Ht(e, null, "preXhr", [e, n]), e.fnServerData ? e.fnServerData.call(s, e.sAjaxSource, t.map(n, function (t, e) {
            return {
                name: e,
                value: t
            }
        }), u, e) : e.sAjaxSource || "string" == typeof l ? e.jqXHR = t.ajax(t.extend(c, {
            url: l || e.sAjaxSource
        })) : "function" == typeof l ? e.jqXHR = l.call(s, n, u, e) : (e.jqXHR = t.ajax(t.extend(c, l)), l.data = i)
    }

    function U(t) {
        return !t.bAjaxDataGet || (t.iDraw++, ft(t, !0), B(t, V(t), function (e) {
            X(t, e)
        }), !1)
    }

    function V(e) {
        var n, a, r, o, i = e.aoColumns,
            l = i.length,
            s = e.oFeatures,
            u = e.oPreviousSearch,
            c = e.aoPreSearchCols,
            f = [],
            d = Dt(e);
        n = e._iDisplayStart, a = !1 !== s.bPaginate ? e._iDisplayLength : -1;
        var h = function (t, e) {
            f.push({
                name: t,
                value: e
            })
        };
        h("sEcho", e.iDraw), h("iColumns", l), h("sColumns", re(i, "sName").join(",")), h("iDisplayStart", n), h("iDisplayLength", a);
        var p = {
            draw: e.iDraw,
            columns: [],
            order: [],
            start: n,
            length: a,
            search: {
                value: u.sSearch,
                regex: u.bRegex
            }
        };
        for (n = 0; n < l; n++) r = i[n], o = c[n], a = "function" == typeof r.mData ? "function" : r.mData, p.columns.push({
            data: a,
            name: r.sName,
            searchable: r.bSearchable,
            orderable: r.bSortable,
            search: {
                value: o.sSearch,
                regex: o.bRegex
            }
        }), h("mDataProp_" + n, a), s.bFilter && (h("sSearch_" + n, o.sSearch), h("bRegex_" + n, o.bRegex), h("bSearchable_" + n, r.bSearchable)), s.bSort && h("bSortable_" + n, r.bSortable);
        return s.bFilter && (h("sSearch", u.sSearch), h("bRegex", u.bRegex)), s.bSort && (t.each(d, function (t, e) {
            p.order.push({
                column: e.col,
                dir: e.dir
            }), h("iSortCol_" + t, e.col), h("sSortDir_" + t, e.dir)
        }), h("iSortingCols", d.length)), null === (i = qt.ext.legacy.ajax) ? e.sAjaxSource ? f : p : i ? f : p
    }

    function X(t, e) {
        var n = J(t, e),
            r = e.sEcho !== a ? e.sEcho : e.draw,
            o = e.iTotalRecords !== a ? e.iTotalRecords : e.recordsTotal,
            i = e.iTotalDisplayRecords !== a ? e.iTotalDisplayRecords : e.recordsFiltered;
        if (r) {
            if (1 * r < t.iDraw) return;
            t.iDraw = 1 * r
        }
        for (A(t), t._iRecordsTotal = parseInt(o, 10), t._iRecordsDisplay = parseInt(i, 10), r = 0, o = n.length; r < o; r++) D(t, n[r]);
        t.aiDisplay = t.aiDisplayMaster.slice(), t.bAjaxDataGet = !1, O(t), t._bInitComplete || ot(t, e), t.bAjaxDataGet = !0, ft(t, !1)
    }

    function J(e, n) {
        var r = t.isPlainObject(e.ajax) && e.ajax.dataSrc !== a ? e.ajax.dataSrc : e.sAjaxDataProp;
        return "data" === r ? n.aaData || n[r] : "" !== r ? w(r)(n) : n
    }

    function q(e) {
        var a = e.oClasses,
            r = e.sTableId,
            o = e.oLanguage,
            i = e.oPreviousSearch,
            l = e.aanFeatures,
            s = '<input type="search" class="' + a.sFilterInput + '"/>',
            u = (u = o.sSearch).match(/_INPUT_/) ? u.replace("_INPUT_", s) : u + s,
            c = (a = t("<div/>", {
                id: l.f ? null : r + "_filter",
                class: a.sFilter
            }).append(t("<label/>").append(u)), l = function () {
                var t = this.value ? this.value : "";
                t != i.sSearch && (G(e, {
                    sSearch: t,
                    bRegex: i.bRegex,
                    bSmart: i.bSmart,
                    bCaseInsensitive: i.bCaseInsensitive
                }), e._iDisplayStart = 0, O(e))
            }, s = null !== e.searchDelay ? e.searchDelay : "ssp" === Mt(e) ? 400 : 0, t("input", a).val(i.sSearch).attr("placeholder", o.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", s ? be(l, s) : l).on("keypress.DT", function (t) {
                if (13 == t.keyCode) return !1
            }).attr("aria-controls", r));
        return t(e.nTable).on("search.dt.DT", function (t, a) {
            if (e === a) try {
                c[0] !== n.activeElement && c.val(i.sSearch)
            } catch (t) {}
        }), a[0]
    }

    function G(t, e, n) {
        var r = t.oPreviousSearch,
            o = t.aoPreSearchCols,
            i = function (t) {
                r.sSearch = t.sSearch, r.bRegex = t.bRegex, r.bSmart = t.bSmart, r.bCaseInsensitive = t.bCaseInsensitive
            };
        if (m(t), "ssp" != Mt(t)) {
            for (Y(t, e.sSearch, n, e.bEscapeRegex !== a ? !e.bEscapeRegex : e.bRegex, e.bSmart, e.bCaseInsensitive), i(e), e = 0; e < o.length; e++) z(t, o[e].sSearch, e, o[e].bEscapeRegex !== a ? !o[e].bEscapeRegex : o[e].bRegex, o[e].bSmart, o[e].bCaseInsensitive);
            $(t)
        } else i(e);
        t.bFiltered = !0, Ht(t, null, "search", [t])
    }

    function $(e) {
        for (var n, a, r = qt.ext.search, o = e.aiDisplay, i = 0, l = r.length; i < l; i++) {
            for (var s = [], u = 0, c = o.length; u < c; u++) a = o[u], n = e.aoData[a], r[i](e, n._aFilterData, a, n._aData, u) && s.push(a);
            o.length = 0, t.merge(o, s)
        }
    }

    function z(t, e, n, a, r, o) {
        if ("" !== e) {
            var i = [],
                l = t.aiDisplay;
            for (a = Z(e, a, r, o), r = 0; r < l.length; r++) e = t.aoData[l[r]]._aFilterData[n], a.test(e) && i.push(l[r]);
            t.aiDisplay = i
        }
    }

    function Y(t, e, n, a, r, o) {
        a = Z(e, a, r, o), o = t.oPreviousSearch.sSearch;
        var i, l = t.aiDisplayMaster;
        r = [];
        if (0 !== qt.ext.search.length && (n = !0), i = K(t), 0 >= e.length) t.aiDisplay = l.slice();
        else {
            for ((i || n || o.length > e.length || 0 !== e.indexOf(o) || t.bSorted) && (t.aiDisplay = l.slice()), e = t.aiDisplay, n = 0; n < e.length; n++) a.test(t.aoData[e[n]]._sFilterRow) && r.push(e[n]);
            t.aiDisplay = r
        }
    }

    function Z(e, n, a, r) {
        return e = n ? e : de(e), a && (e = "^(?=.*?" + t.map(e.match(/"[^"]+"|[^ ]+/g) || [""], function (t) {
            if ('"' === t.charAt(0)) {
                var e = t.match(/^"(.*)"$/);
                t = e ? e[1] : t
            }
            return t.replace('"', "")
        }).join(")(?=.*?") + ").*$"), RegExp(e, r ? "i" : "")
    }

    function K(t) {
        var e, n, a, r, o, i, l, s, u = t.aoColumns,
            c = qt.ext.type.search;
        for (e = !1, n = 0, r = t.aoData.length; n < r; n++)
            if (s = t.aoData[n], !s._aFilterData) {
                for (i = [], a = 0, o = u.length; a < o; a++) e = u[a], e.bSearchable ? (l = _(t, n, a, "filter"), c[e.sType] && (l = c[e.sType](l)), null === l && (l = ""), "string" != typeof l && l.toString && (l = l.toString())) : l = "", l.indexOf && -1 !== l.indexOf("&") && (he.innerHTML = l, l = pe ? he.textContent : he.innerText), l.replace && (l = l.replace(/[\r\n]/g, "")), i.push(l);
                s._aFilterData = i, s._sFilterRow = i.join("  "), e = !0
            } return e
    }

    function Q(t) {
        return {
            search: t.sSearch,
            smart: t.bSmart,
            regex: t.bRegex,
            caseInsensitive: t.bCaseInsensitive
        }
    }

    function tt(t) {
        return {
            sSearch: t.search,
            bSmart: t.smart,
            bRegex: t.regex,
            bCaseInsensitive: t.caseInsensitive
        }
    }

    function et(e) {
        var n = e.sTableId,
            a = e.aanFeatures.i,
            r = t("<div/>", {
                class: e.oClasses.sInfo,
                id: a ? null : n + "_info"
            });
        return a || (e.aoDrawCallback.push({
            fn: nt,
            sName: "information"
        }), r.attr("role", "status").attr("aria-live", "polite"), t(e.nTable).attr("aria-describedby", n + "_info")), r[0]
    }

    function nt(e) {
        var n = e.aanFeatures.i;
        if (0 !== n.length) {
            var a = e.oLanguage,
                r = e._iDisplayStart + 1,
                o = e.fnDisplayEnd(),
                i = e.fnRecordsTotal(),
                l = e.fnRecordsDisplay(),
                s = l ? a.sInfo : a.sInfoEmpty;
            l !== i && (s += " " + a.sInfoFiltered), s = at(e, s += a.sInfoPostFix), null !== (a = a.fnInfoCallback) && (s = a.call(e.oInstance, e, r, o, i, l, s)), t(n).html(s)
        }
    }

    function at(t, e) {
        var n = t.fnFormatNumber,
            a = t._iDisplayStart + 1,
            r = t._iDisplayLength,
            o = t.fnRecordsDisplay(),
            i = -1 === r;
        return e.replace(/_START_/g, n.call(t, a)).replace(/_END_/g, n.call(t, t.fnDisplayEnd())).replace(/_MAX_/g, n.call(t, t.fnRecordsTotal())).replace(/_TOTAL_/g, n.call(t, o)).replace(/_PAGE_/g, n.call(t, i ? 1 : Math.ceil(a / r))).replace(/_PAGES_/g, n.call(t, i ? 1 : Math.ceil(o / r)))
    }

    function rt(t) {
        var e, n, a, r = t.iInitDisplayStart,
            o = t.aoColumns;
        n = t.oFeatures;
        var i = t.bDeferLoading;
        if (t.bInitialised) {
            for (M(t), N(t), H(t, t.aoHeader), H(t, t.aoFooter), ft(t, !0), n.bAutoWidth && gt(t), e = 0, n = o.length; e < n; e++) a = o[e], a.sWidth && (a.nTh.style.width = vt(a.sWidth));
            Ht(t, null, "preInit", [t]), k(t), ("ssp" != (o = Mt(t)) || i) && ("ajax" == o ? B(t, [], function (n) {
                var a = J(t, n);
                for (e = 0; e < a.length; e++) D(t, a[e]);
                t.iInitDisplayStart = r, k(t), ft(t, !1), ot(t, n)
            }) : (ft(t, !1), ot(t)))
        } else setTimeout(function () {
            rt(t)
        }, 200)
    }

    function ot(t, e) {
        t._bInitComplete = !0, (e || t.oInit.aaData) && h(t), Ht(t, null, "plugin-init", [t, e]), Ht(t, "aoInitComplete", "init", [t, e])
    }

    function it(t, e) {
        var n = parseInt(e, 10);
        t._iDisplayLength = n, Ot(t), Ht(t, null, "length", [t, n])
    }

    function lt(e) {
        for (var n = e.oClasses, a = e.sTableId, r = e.aLengthMenu, o = (i = t.isArray(r[0])) ? r[0] : r, i = (r = i ? r[1] : r, t("<select/>", {
                name: a + "_length",
                "aria-controls": a,
                class: n.sLengthSelect
            })), l = 0, s = o.length; l < s; l++) i[0][l] = new Option("number" == typeof r[l] ? e.fnFormatNumber(r[l]) : r[l], o[l]);
        var u = t("<div><label/></div>").addClass(n.sLength);
        return e.aanFeatures.l || (u[0].id = a + "_length"), u.children().append(e.oLanguage.sLengthMenu.replace("_MENU_", i[0].outerHTML)), t("select", u).val(e._iDisplayLength).on("change.DT", function () {
            it(e, t(this).val()), O(e)
        }), t(e.nTable).on("length.dt.DT", function (n, a, r) {
            e === a && t("select", u).val(r)
        }), u[0]
    }

    function st(e) {
        var n = e.sPaginationType,
            a = qt.ext.pager[n],
            r = "function" == typeof a,
            o = function (t) {
                O(t)
            },
            i = (n = t("<div/>").addClass(e.oClasses.sPaging + n)[0], e.aanFeatures);
        return r || a.fnInit(e, n, o), i.p || (n.id = e.sTableId + "_paginate", e.aoDrawCallback.push({
            fn: function (t) {
                if (r) {
                    var e, n = t._iDisplayStart,
                        l = t._iDisplayLength,
                        s = t.fnRecordsDisplay(),
                        u = (n = (u = -1 === l) ? 0 : Math.ceil(n / l), l = u ? 1 : Math.ceil(s / l), s = a(n, l), 0);
                    for (e = i.p.length; u < e; u++) kt(t, "pageButton")(t, i.p[u], u, s, n, l)
                } else a.fnUpdate(t, o)
            },
            sName: "pagination"
        })), n
    }

    function ut(t, e, n) {
        var a = t._iDisplayStart,
            r = t._iDisplayLength,
            o = t.fnRecordsDisplay();
        return 0 === o || -1 === r ? a = 0 : "number" == typeof e ? (a = e * r) > o && (a = 0) : "first" == e ? a = 0 : "previous" == e ? 0 > (a = 0 <= r ? a - r : 0) && (a = 0) : "next" == e ? a + r < o && (a += r) : "last" == e ? a = Math.floor((o - 1) / r) * r : Lt(t, 0, "Unknown paging action: " + e, 5), e = t._iDisplayStart !== a, t._iDisplayStart = a, e && (Ht(t, null, "page", [t]), n && O(t)), e
    }

    function ct(e) {
        return t("<div/>", {
            id: e.aanFeatures.r ? null : e.sTableId + "_processing",
            class: e.oClasses.sProcessing
        }).html(e.oLanguage.sProcessing).insertBefore(e.nTable)[0]
    }

    function ft(e, n) {
        e.oFeatures.bProcessing && t(e.aanFeatures.r).css("display", n ? "block" : "none"), Ht(e, null, "processing", [e, n])
    }

    function dt(e) {
        (f = t(e.nTable)).attr("role", "grid");
        var n = e.oScroll;
        if ("" === n.sX && "" === n.sY) return e.nTable;
        var a = n.sX,
            r = n.sY,
            o = e.oClasses,
            i = f.children("caption"),
            l = i.length ? i[0]._captionSide : null,
            s = t(f[0].cloneNode(!1)),
            u = t(f[0].cloneNode(!1)),
            c = f.children("tfoot");
        c.length || (c = null), s = t("<div/>", {
            class: o.sScrollWrapper
        }).append(t("<div/>", {
            class: o.sScrollHead
        }).css({
            overflow: "hidden",
            position: "relative",
            border: 0,
            width: a ? a ? vt(a) : null : "100%"
        }).append(t("<div/>", {
            class: o.sScrollHeadInner
        }).css({
            "box-sizing": "content-box",
            width: n.sXInner || "100%"
        }).append(s.removeAttr("id").css("margin-left", 0).append("top" === l ? i : null).append(f.children("thead"))))).append(t("<div/>", {
            class: o.sScrollBody
        }).css({
            position: "relative",
            overflow: "auto",
            width: a ? vt(a) : null
        }).append(f)), c && s.append(t("<div/>", {
            class: o.sScrollFoot
        }).css({
            overflow: "hidden",
            border: 0,
            width: a ? a ? vt(a) : null : "100%"
        }).append(t("<div/>", {
            class: o.sScrollFootInner
        }).append(u.removeAttr("id").css("margin-left", 0).append("bottom" === l ? i : null).append(f.children("tfoot")))));
        var f, d = (f = s.children())[0],
            h = (o = f[1], c ? f[2] : null);
        return a && t(o).on("scroll.DT", function () {
            var t = this.scrollLeft;
            d.scrollLeft = t, c && (h.scrollLeft = t)
        }), t(o).css(r && n.bCollapse ? "max-height" : "height", r), e.nScrollHead = d, e.nScrollBody = o, e.nScrollFoot = h, e.aoDrawCallback.push({
            fn: ht,
            sName: "scrolling"
        }), s[0]
    }

    function ht(e) {
        var n, r, o, i, l, s = (f = e.oScroll).sX,
            u = f.sXInner,
            c = f.sY,
            f = f.iBarWidth,
            d = t(e.nScrollHead),
            g = d[0].style,
            b = (m = d.children("div"))[0].style,
            S = m.children("table"),
            m = e.nScrollBody,
            v = t(m),
            D = m.style,
            y = t(e.nScrollFoot).children("div"),
            _ = y.children("table"),
            T = t(e.nTHead),
            C = t(e.nTable),
            w = C[0],
            x = w.style,
            I = e.nTFoot ? t(e.nTFoot) : null,
            A = e.oBrowser,
            F = A.bScrollOversize,
            L = re(e.aoColumns, "nTh"),
            R = [],
            P = [],
            j = [],
            N = [],
            H = function (t) {
                (t = t.style).paddingTop = "0", t.paddingBottom = "0", t.borderTopWidth = "0", t.borderBottomWidth = "0", t.height = 0
            };
        r = m.scrollHeight > m.clientHeight, e.scrollBarVis !== r && e.scrollBarVis !== a ? (e.scrollBarVis = r, h(e)) : (e.scrollBarVis = r, C.children("thead, tfoot").remove(), I && (o = I.clone().prependTo(C), n = I.find("tr"), o = o.find("tr")), i = T.clone().prependTo(C), T = T.find("tr"), r = i.find("tr"), i.find("th, td").removeAttr("tabindex"), s || (D.width = "100%", d[0].style.width = "100%"), t.each(E(e, i), function (t, n) {
            l = p(e, t), n.style.width = e.aoColumns[l].sWidth
        }), I && pt(function (t) {
            t.style.width = ""
        }, o), d = C.outerWidth(), "" === s ? (x.width = "100%", F && (C.find("tbody").height() > m.offsetHeight || "scroll" == v.css("overflow-y")) && (x.width = vt(C.outerWidth() - f)), d = C.outerWidth()) : "" !== u && (x.width = vt(u), d = C.outerWidth()), pt(H, r), pt(function (e) {
            j.push(e.innerHTML), R.push(vt(t(e).css("width")))
        }, r), pt(function (e, n) {
            -1 !== t.inArray(e, L) && (e.style.width = R[n])
        }, T), t(r).height(0), I && (pt(H, o), pt(function (e) {
            N.push(e.innerHTML), P.push(vt(t(e).css("width")))
        }, o), pt(function (t, e) {
            t.style.width = P[e]
        }, n), t(o).height(0)), pt(function (t, e) {
            t.innerHTML = '<div class="dataTables_sizing">' + j[e] + "</div>", t.childNodes[0].style.height = "0", t.childNodes[0].style.overflow = "hidden", t.style.width = R[e]
        }, r), I && pt(function (t, e) {
            t.innerHTML = '<div class="dataTables_sizing">' + N[e] + "</div>", t.childNodes[0].style.height = "0", t.childNodes[0].style.overflow = "hidden", t.style.width = P[e]
        }, o), C.outerWidth() < d ? (n = m.scrollHeight > m.offsetHeight || "scroll" == v.css("overflow-y") ? d + f : d, F && (m.scrollHeight > m.offsetHeight || "scroll" == v.css("overflow-y")) && (x.width = vt(n - f)), ("" === s || "" !== u) && Lt(e, 1, "Possible column misalignment", 6)) : n = "100%", D.width = vt(n), g.width = vt(n), I && (e.nScrollFoot.style.width = vt(n)), !c && F && (D.height = vt(w.offsetHeight + f)), s = C.outerWidth(), S[0].style.width = vt(s), b.width = vt(s), u = C.height() > m.clientHeight || "scroll" == v.css("overflow-y"), b[c = "padding" + (A.bScrollbarLeft ? "Left" : "Right")] = u ? f + "px" : "0px", I && (_[0].style.width = vt(s), y[0].style.width = vt(s), y[0].style[c] = u ? f + "px" : "0px"), C.children("colgroup").insertBefore(C.children("thead")), v.scroll(), !e.bSorted && !e.bFiltered || e._drawHold || (m.scrollTop = 0))
    }

    function pt(t, e, n) {
        for (var a, r, o = 0, i = 0, l = e.length; i < l;) {
            for (a = e[i].firstChild, r = n ? n[i].firstChild : null; a;) 1 === a.nodeType && (n ? t(a, r, o) : t(a, o), o++), a = a.nextSibling, r = n ? r.nextSibling : null;
            i++
        }
    }

    function gt(n) {
        var a, r, o = n.nTable,
            i = n.aoColumns,
            l = (y = n.oScroll).sY,
            s = y.sX,
            u = y.sXInner,
            c = i.length,
            f = S(n, "bVisible"),
            d = t("th", n.nTHead),
            g = o.getAttribute("width"),
            m = o.parentNode,
            v = !1,
            D = n.oBrowser,
            y = D.bScrollOversize;
        for ((a = o.style.width) && -1 !== a.indexOf("%") && (g = a), a = 0; a < f.length; a++) r = i[f[a]], null !== r.sWidth && (r.sWidth = bt(r.sWidthOrig, m), v = !0);
        if (y || !v && !s && !l && c == b(n) && c == d.length)
            for (a = 0; a < c; a++) f = p(n, a), null !== f && (i[f].sWidth = vt(d.eq(a).width()));
        else {
            (c = t(o).clone().css("visibility", "hidden").removeAttr("id")).find("tbody tr").remove();
            var _ = t("<tr/>").appendTo(c.find("tbody"));
            for (c.find("thead, tfoot").remove(), c.append(t(n.nTHead).clone()).append(t(n.nTFoot).clone()), c.find("tfoot th, tfoot td").css("width", ""), d = E(n, c.find("thead")[0]), a = 0; a < f.length; a++) r = i[f[a]], d[a].style.width = null !== r.sWidthOrig && "" !== r.sWidthOrig ? vt(r.sWidthOrig) : "", r.sWidthOrig && s && t(d[a]).append(t("<div/>").css({
                width: r.sWidthOrig,
                margin: 0,
                padding: 0,
                border: 0,
                height: 1
            }));
            if (n.aoData.length)
                for (a = 0; a < f.length; a++) v = f[a], r = i[v], t(St(n, v)).clone(!1).append(r.sContentPadding).appendTo(_);
            for (t("[name]", c).removeAttr("name"), r = t("<div/>").css(s || l ? {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: 1,
                    right: 0,
                    overflow: "hidden"
                } : {}).append(c).appendTo(m), s && u ? c.width(u) : s ? (c.css("width", "auto"), c.removeAttr("width"), c.width() < m.clientWidth && g && c.width(m.clientWidth)) : l ? c.width(m.clientWidth) : g && c.width(g), a = l = 0; a < f.length; a++) m = t(d[a]), u = m.outerWidth() - m.width(), m = D.bBounding ? Math.ceil(d[a].getBoundingClientRect().width) : m.outerWidth(), l += m, i[f[a]].sWidth = vt(m - u);
            o.style.width = vt(l), r.remove()
        }
        g && (o.style.width = vt(g)), !g && !s || n._reszEvt || (o = function () {
            t(e).on("resize.DT-" + n.sInstance, be(function () {
                h(n)
            }))
        }, y ? setTimeout(o, 1e3) : o(), n._reszEvt = !0)
    }

    function bt(e, a) {
        if (!e) return 0;
        var r = t("<div/>").css("width", vt(e)).appendTo(a || n.body),
            o = r[0].offsetWidth;
        return r.remove(), o
    }

    function St(e, n) {
        var a = mt(e, n);
        if (0 > a) return null;
        var r = e.aoData[a];
        return r.nTr ? r.anCells[n] : t("<td/>").html(_(e, a, n, "display"))[0]
    }

    function mt(t, e) {
        for (var n, a = -1, r = -1, o = 0, i = t.aoData.length; o < i; o++) n = _(t, o, e, "display") + "", n = n.replace(ge, ""), n = n.replace(/&nbsp;/g, " "), n.length > a && (a = n.length, r = o);
        return r
    }

    function vt(t) {
        return null === t ? "0px" : "number" == typeof t ? 0 > t ? "0px" : t + "px" : t.match(/\d$/) ? t + "px" : t
    }

    function Dt(e) {
        var n, r, o, i, l, s, u = [],
            c = e.aoColumns;
        n = e.aaSortingFixed, r = t.isPlainObject(n);
        var f = [];
        for (o = function (e) {
                e.length && !t.isArray(e[0]) ? f.push(e) : t.merge(f, e)
            }, t.isArray(n) && o(n), r && n.pre && o(n.pre), o(e.aaSorting), r && n.post && o(n.post), e = 0; e < f.length; e++)
            for (n = 0, r = (o = c[s = f[e][0]].aDataSort).length; n < r; n++) i = o[n], l = c[i].sType || "string", f[e]._idx === a && (f[e]._idx = t.inArray(f[e][1], c[i].asSorting)), u.push({
                src: s,
                col: i,
                dir: f[e][1],
                index: f[e]._idx,
                type: l,
                formatter: qt.ext.type.order[l + "-pre"]
            });
        return u
    }

    function yt(t) {
        var e, n, a, r, o = [],
            i = qt.ext.type.order,
            l = t.aoData,
            s = 0,
            u = t.aiDisplayMaster;
        for (m(t), e = 0, n = (r = Dt(t)).length; e < n; e++) a = r[e], a.formatter && s++, xt(t, a.col);
        if ("ssp" != Mt(t) && 0 !== r.length) {
            for (e = 0, n = u.length; e < n; e++) o[u[e]] = e;
            s === r.length ? u.sort(function (t, e) {
                var n, a, i, s, u = r.length,
                    c = l[t]._aSortData,
                    f = l[e]._aSortData;
                for (i = 0; i < u; i++)
                    if (s = r[i], n = c[s.col], a = f[s.col], n = n < a ? -1 : n > a ? 1 : 0, 0 !== n) return "asc" === s.dir ? n : -n;
                return (n = o[t]) < (a = o[e]) ? -1 : n > a ? 1 : 0
            }) : u.sort(function (t, e) {
                var n, a, s, u, c = r.length,
                    f = l[t]._aSortData,
                    d = l[e]._aSortData;
                for (s = 0; s < c; s++)
                    if (u = r[s], n = f[u.col], a = d[u.col], u = i[u.type + "-" + u.dir] || i["string-" + u.dir], n = u(n, a), 0 !== n) return n;
                return (n = o[t]) < (a = o[e]) ? -1 : n > a ? 1 : 0
            })
        }
        t.bSorted = !0
    }

    function _t(t) {
        for (var e, n, a = t.aoColumns, r = Dt(t), o = (t = t.oLanguage.oAria, 0), i = a.length; o < i; o++) {
            var l = (n = a[o]).asSorting;
            e = n.sTitle.replace(/<.*?>/g, "");
            var s = n.nTh;
            s.removeAttribute("aria-sort"), n.bSortable && (0 < r.length && r[0].col == o ? (s.setAttribute("aria-sort", "asc" == r[0].dir ? "ascending" : "descending"), n = l[r[0].index + 1] || l[0]) : n = l[0], e += "asc" === n ? t.sSortAscending : t.sSortDescending), s.setAttribute("aria-label", e)
        }
    }

    function Tt(e, n, r, o) {
        var i = e.aaSorting,
            l = e.aoColumns[n].asSorting,
            s = function (e, n) {
                var r = e._idx;
                return r === a && (r = t.inArray(e[1], l)), r + 1 < l.length ? r + 1 : n ? null : 0
            };
        "number" == typeof i[0] && (i = e.aaSorting = [i]), r && e.oFeatures.bSortMulti ? -1 !== (r = t.inArray(n, re(i, "0"))) ? (null === (n = s(i[r], !0)) && 1 === i.length && (n = 0), null === n ? i.splice(r, 1) : (i[r][1] = l[n], i[r]._idx = n)) : (i.push([n, l[0], 0]), i[i.length - 1]._idx = 0) : i.length && i[0][0] == n ? (n = s(i[0]), i.length = 1, i[0][1] = l[n], i[0]._idx = n) : (i.length = 0, i.push([n, l[0]]), i[0]._idx = 0), k(e), "function" == typeof o && o(e)
    }

    function Ct(t, e, n, a) {
        var r = t.aoColumns[n];
        jt(e, {}, function (e) {
            !1 !== r.bSortable && (t.oFeatures.bProcessing ? (ft(t, !0), setTimeout(function () {
                Tt(t, n, e.shiftKey, a), "ssp" !== Mt(t) && ft(t, !1)
            }, 0)) : Tt(t, n, e.shiftKey, a))
        })
    }

    function wt(e) {
        var n, a, r = e.aLastSort,
            o = e.oClasses.sSortColumn,
            i = Dt(e),
            l = e.oFeatures;
        if (l.bSort && l.bSortClasses) {
            for (l = 0, n = r.length; l < n; l++) a = r[l].src, t(re(e.aoData, "anCells", a)).removeClass(o + (2 > l ? l + 1 : 3));
            for (l = 0, n = i.length; l < n; l++) a = i[l].src, t(re(e.aoData, "anCells", a)).addClass(o + (2 > l ? l + 1 : 3))
        }
        e.aLastSort = i
    }

    function xt(t, e) {
        var n, a = t.aoColumns[e],
            r = qt.ext.order[a.sSortDataType];
        r && (n = r.call(t.oInstance, t, e, g(t, e)));
        for (var o, i = qt.ext.type.order[a.sType + "-pre"], l = 0, s = t.aoData.length; l < s; l++) a = t.aoData[l], a._aSortData || (a._aSortData = []), (!a._aSortData[e] || r) && (o = r ? n[l] : _(t, l, e, "sort"), a._aSortData[e] = i ? i(o) : o)
    }

    function It(e) {
        if (e.oFeatures.bStateSave && !e.bDestroying) {
            var n = {
                time: +new Date,
                start: e._iDisplayStart,
                length: e._iDisplayLength,
                order: t.extend(!0, [], e.aaSorting),
                search: Q(e.oPreviousSearch),
                columns: t.map(e.aoColumns, function (t, n) {
                    return {
                        visible: t.bVisible,
                        search: Q(e.aoPreSearchCols[n])
                    }
                })
            };
            Ht(e, "aoStateSaveParams", "stateSaveParams", [e, n]), e.oSavedState = n, e.fnStateSaveCallback.call(e.oInstance, e, n)
        }
    }

    function At(e, n, r) {
        var o, i, l = e.aoColumns;
        n = function (n) {
            if (n && n.time) {
                var s = Ht(e, "aoStateLoadParams", "stateLoadParams", [e, n]);
                if (-1 === t.inArray(!1, s) && !(0 < (s = e.iStateDuration) && n.time < +new Date - 1e3 * s || n.columns && l.length !== n.columns.length)) {
                    if (e.oLoadedState = t.extend(!0, {}, n), n.start !== a && (e._iDisplayStart = n.start, e.iInitDisplayStart = n.start), n.length !== a && (e._iDisplayLength = n.length), n.order !== a && (e.aaSorting = [], t.each(n.order, function (t, n) {
                            e.aaSorting.push(n[0] >= l.length ? [0, n[1]] : n)
                        })), n.search !== a && t.extend(e.oPreviousSearch, tt(n.search)), n.columns)
                        for (o = 0, i = n.columns.length; o < i; o++) s = n.columns[o], s.visible !== a && (l[o].bVisible = s.visible), s.search !== a && t.extend(e.aoPreSearchCols[o], tt(s.search));
                    Ht(e, "aoStateLoaded", "stateLoaded", [e, n])
                }
            }
            r()
        };
        if (e.oFeatures.bStateSave) {
            var s = e.fnStateLoadCallback.call(e.oInstance, e, n);
            s !== a && n(s)
        } else r()
    }

    function Ft(e) {
        var n = qt.settings;
        return -1 !== (e = t.inArray(e, re(n, "nTable"))) ? n[e] : null
    }

    function Lt(t, n, a, r) {
        if (a = "DataTables warning: " + (t ? "table id=" + t.sTableId + " - " : "") + a, r && (a += ". For more information about this error, please see http://datatables.net/tn/" + r), n) e.console && console.log && console.log(a);
        else if (n = qt.ext, n = n.sErrMode || n.errMode, t && Ht(t, null, "error", [t, r, a]), "alert" == n) alert(a);
        else {
            if ("throw" == n) throw Error(a);
            "function" == typeof n && n(t, r, a)
        }
    }

    function Rt(e, n, r, o) {
        t.isArray(r) ? t.each(r, function (a, r) {
            t.isArray(r) ? Rt(e, n, r[0], r[1]) : Rt(e, n, r)
        }) : (o === a && (o = r), n[r] !== a && (e[o] = n[r]))
    }

    function Pt(e, n, a) {
        var r, o;
        for (o in n) n.hasOwnProperty(o) && (r = n[o], t.isPlainObject(r) ? (t.isPlainObject(e[o]) || (e[o] = {}), t.extend(!0, e[o], r)) : e[o] = a && "data" !== o && "aaData" !== o && t.isArray(r) ? r.slice() : r);
        return e
    }

    function jt(e, n, a) {
        t(e).on("click.DT", n, function (n) {
            t(e).blur(), a(n)
        }).on("keypress.DT", n, function (t) {
            13 === t.which && (t.preventDefault(), a(t))
        }).on("selectstart.DT", function () {
            return !1
        })
    }

    function Nt(t, e, n, a) {
        n && t[e].push({
            fn: n,
            sName: a
        })
    }

    function Ht(e, n, a, r) {
        var o = [];
        return n && (o = t.map(e[n].slice().reverse(), function (t) {
            return t.fn.apply(e.oInstance, r)
        })), null !== a && (n = t.Event(a + ".dt"), t(e.nTable).trigger(n, r), o.push(n.result)), o
    }

    function Ot(t) {
        var e = t._iDisplayStart,
            n = t.fnDisplayEnd(),
            a = t._iDisplayLength;
        e >= n && (e = n - a), e -= e % a, (-1 === a || 0 > e) && (e = 0), t._iDisplayStart = e
    }

    function kt(e, n) {
        var a = e.renderer,
            r = qt.ext.renderer[n];
        return t.isPlainObject(a) && a[n] ? r[a[n]] || r._ : "string" == typeof a && r[a] || r._
    }

    function Mt(t) {
        return t.oFeatures.bServerSide ? "ssp" : t.ajax || t.sAjaxSource ? "ajax" : "dom"
    }

    function Wt(t, e) {
        var n = [],
            a = (n = Ae.numbers_length, Math.floor(n / 2));
        return e <= n ? n = ie(0, e) : t <= a ? ((n = ie(0, n - 2)).push("ellipsis"), n.push(e - 1)) : (t >= e - 1 - a ? n = ie(e - (n - 2), e) : ((n = ie(t - a + 2, t + a - 1)).push("ellipsis"), n.push(e - 1)), n.splice(0, 0, "ellipsis"), n.splice(0, 0, 0)), n.DT_el = "span", n
    }

    function Et(e) {
        t.each({
            num: function (t) {
                return Fe(t, e)
            },
            "num-fmt": function (t) {
                return Fe(t, e, Kt)
            },
            "html-num": function (t) {
                return Fe(t, e, zt)
            },
            "html-num-fmt": function (t) {
                return Fe(t, e, zt, Kt)
            }
        }, function (t, n) {
            Ut.type.order[t + e + "-pre"] = n, t.match(/^html\-/) && (Ut.type.search[t + e] = Ut.type.search.html)
        })
    }

    function Bt(t) {
        return function () {
            var e = [Ft(this[qt.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
            return qt.ext.internal[t].apply(this, e)
        }
    }
    var Ut, Vt, Xt, Jt, qt = function (e) {
            this.$ = function (t, e) {
                return this.api(!0).$(t, e)
            }, this._ = function (t, e) {
                return this.api(!0).rows(t, e).data()
            }, this.api = function (t) {
                return new Vt(t ? Ft(this[Ut.iApiIndex]) : this)
            }, this.fnAddData = function (e, n) {
                var r = this.api(!0),
                    o = t.isArray(e) && (t.isArray(e[0]) || t.isPlainObject(e[0])) ? r.rows.add(e) : r.row.add(e);
                return (n === a || n) && r.draw(), o.flatten().toArray()
            }, this.fnAdjustColumnSizing = function (t) {
                var e = this.api(!0).columns.adjust(),
                    n = e.settings()[0],
                    r = n.oScroll;
                t === a || t ? e.draw(!1) : ("" !== r.sX || "" !== r.sY) && ht(n)
            }, this.fnClearTable = function (t) {
                var e = this.api(!0).clear();
                (t === a || t) && e.draw()
            }, this.fnClose = function (t) {
                this.api(!0).row(t).child.hide()
            }, this.fnDeleteRow = function (t, e, n) {
                var r = this.api(!0),
                    o = (t = r.rows(t)).settings()[0],
                    i = o.aoData[t[0][0]];
                return t.remove(), e && e.call(this, o, i), (n === a || n) && r.draw(), i
            }, this.fnDestroy = function (t) {
                this.api(!0).destroy(t)
            }, this.fnDraw = function (t) {
                this.api(!0).draw(t)
            }, this.fnFilter = function (t, e, n, r, o, i) {
                o = this.api(!0), null === e || e === a ? o.search(t, n, r, i) : o.column(e).search(t, n, r, i), o.draw()
            }, this.fnGetData = function (t, e) {
                var n = this.api(!0);
                if (t !== a) {
                    var r = t.nodeName ? t.nodeName.toLowerCase() : "";
                    return e !== a || "td" == r || "th" == r ? n.cell(t, e).data() : n.row(t).data() || null
                }
                return n.data().toArray()
            }, this.fnGetNodes = function (t) {
                var e = this.api(!0);
                return t !== a ? e.row(t).node() : e.rows().nodes().flatten().toArray()
            }, this.fnGetPosition = function (t) {
                var e = this.api(!0),
                    n = t.nodeName.toUpperCase();
                return "TR" == n ? e.row(t).index() : "TD" == n || "TH" == n ? [(t = e.cell(t).index()).row, t.columnVisible, t.column] : null
            }, this.fnIsOpen = function (t) {
                return this.api(!0).row(t).child.isShown()
            }, this.fnOpen = function (t, e, n) {
                return this.api(!0).row(t).child(e, n).show().child()[0]
            }, this.fnPageChange = function (t, e) {
                var n = this.api(!0).page(t);
                (e === a || e) && n.draw(!1)
            }, this.fnSetColumnVis = function (t, e, n) {
                t = this.api(!0).column(t).visible(e), (n === a || n) && t.columns.adjust().draw()
            }, this.fnSettings = function () {
                return Ft(this[Ut.iApiIndex])
            }, this.fnSort = function (t) {
                this.api(!0).order(t).draw()
            }, this.fnSortListener = function (t, e, n) {
                this.api(!0).order.listener(t, e, n)
            }, this.fnUpdate = function (t, e, n, r, o) {
                var i = this.api(!0);
                return n === a || null === n ? i.row(e).data(t) : i.cell(e, n).data(t), (o === a || o) && i.columns.adjust(), (r === a || r) && i.draw(), 0
            }, this.fnVersionCheck = Ut.fnVersionCheck;
            var n = this,
                r = e === a,
                c = this.length;
            r && (e = {}), this.oApi = this.internal = Ut.internal;
            for (var h in qt.ext.internal) h && (this[h] = Bt(h));
            return this.each(function () {
                var h, p = {},
                    g = 1 < c ? Pt(p, e, !0) : e,
                    b = 0,
                    S = (p = this.getAttribute("id"), !1),
                    m = qt.defaults,
                    _ = t(this);
                if ("table" != this.nodeName.toLowerCase()) Lt(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
                else {
                    l(m), s(m.column), o(m, m, !0), o(m.column, m.column, !0), o(m, t.extend(g, _.data()));
                    var T = qt.settings;
                    b = 0;
                    for (h = T.length; b < h; b++) {
                        var C = T[b];
                        if (C.nTable == this || C.nTHead && C.nTHead.parentNode == this || C.nTFoot && C.nTFoot.parentNode == this) {
                            var x = g.bRetrieve !== a ? g.bRetrieve : m.bRetrieve;
                            if (r || x) return C.oInstance;
                            if (g.bDestroy !== a ? g.bDestroy : m.bDestroy) {
                                C.oInstance.fnDestroy();
                                break
                            }
                            return void Lt(C, 0, "Cannot reinitialise DataTable", 3)
                        }
                        if (C.sTableId == this.id) {
                            T.splice(b, 1);
                            break
                        }
                    }
                    null !== p && "" !== p || (this.id = p = "DataTables_Table_" + qt.ext._unique++);
                    var I = t.extend(!0, {}, qt.models.oSettings, {
                        sDestroyWidth: _[0].style.width,
                        sInstance: p,
                        sTableId: p
                    });
                    I.nTable = this, I.oApi = n.internal, I.oInit = g, T.push(I), I.oInstance = 1 === n.length ? n : _.dataTable(), l(g), i(g.oLanguage), g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = t.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]), g = Pt(t.extend(!0, {}, m), g), Rt(I.oFeatures, g, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" ")), Rt(I, g, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"],
                        ["oSearch", "oPreviousSearch"],
                        ["aoSearchCols", "aoPreSearchCols"],
                        ["iDisplayLength", "_iDisplayLength"]
                    ]), Rt(I.oScroll, g, [
                        ["sScrollX", "sX"],
                        ["sScrollXInner", "sXInner"],
                        ["sScrollY", "sY"],
                        ["bScrollCollapse", "bCollapse"]
                    ]), Rt(I.oLanguage, g, "fnInfoCallback"), Nt(I, "aoDrawCallback", g.fnDrawCallback, "user"), Nt(I, "aoServerParams", g.fnServerParams, "user"), Nt(I, "aoStateSaveParams", g.fnStateSaveParams, "user"), Nt(I, "aoStateLoadParams", g.fnStateLoadParams, "user"), Nt(I, "aoStateLoaded", g.fnStateLoaded, "user"), Nt(I, "aoRowCallback", g.fnRowCallback, "user"), Nt(I, "aoRowCreatedCallback", g.fnCreatedRow, "user"), Nt(I, "aoHeaderCallback", g.fnHeaderCallback, "user"), Nt(I, "aoFooterCallback", g.fnFooterCallback, "user"), Nt(I, "aoInitComplete", g.fnInitComplete, "user"), Nt(I, "aoPreDrawCallback", g.fnPreDrawCallback, "user"), I.rowIdFn = w(g.rowId), u(I);
                    var A = I.oClasses;
                    t.extend(A, qt.ext.classes, g.oClasses), _.addClass(A.sTable), I.iInitDisplayStart === a && (I.iInitDisplayStart = g.iDisplayStart, I._iDisplayStart = g.iDisplayStart), null !== g.iDeferLoading && (I.bDeferLoading = !0, p = t.isArray(g.iDeferLoading), I._iRecordsDisplay = p ? g.iDeferLoading[0] : g.iDeferLoading, I._iRecordsTotal = p ? g.iDeferLoading[1] : g.iDeferLoading);
                    var F = I.oLanguage;
                    t.extend(!0, F, g.oLanguage), F.sUrl && (t.ajax({
                        dataType: "json",
                        url: F.sUrl,
                        success: function (e) {
                            i(e), o(m.oLanguage, e), t.extend(!0, F, e), rt(I)
                        },
                        error: function () {
                            rt(I)
                        }
                    }), S = !0), null === g.asStripeClasses && (I.asStripeClasses = [A.sStripeOdd, A.sStripeEven]);
                    p = I.asStripeClasses;
                    var L = _.children("tbody").find("tr").eq(0);
                    if (-1 !== t.inArray(!0, t.map(p, function (t) {
                            return L.hasClass(t)
                        })) && (t("tbody tr", this).removeClass(p.join(" ")), I.asDestroyStripes = p.slice()), p = [], 0 !== (T = this.getElementsByTagName("thead")).length && (W(I.aoHeader, T[0]), p = E(I)), null === g.aoColumns)
                        for (T = [], b = 0, h = p.length; b < h; b++) T.push(null);
                    else T = g.aoColumns;
                    for (b = 0, h = T.length; b < h; b++) f(I, p ? p[b] : null);
                    if (v(I, g.aoColumnDefs, T, function (t, e) {
                            d(I, t, e)
                        }), L.length) {
                        var R = function (t, e) {
                            return null !== t.getAttribute("data-" + e) ? e : null
                        };
                        t(L[0]).children("th, td").each(function (t, e) {
                            var n = I.aoColumns[t];
                            if (n.mData === t) {
                                var r = R(e, "sort") || R(e, "order"),
                                    o = R(e, "filter") || R(e, "search");
                                null === r && null === o || (n.mData = {
                                    _: t + ".display",
                                    sort: null !== r ? t + ".@data-" + r : a,
                                    type: null !== r ? t + ".@data-" + r : a,
                                    filter: null !== o ? t + ".@data-" + o : a
                                }, d(I, t))
                            }
                        })
                    }
                    var P = I.oFeatures;
                    p = function () {
                        if (g.aaSorting === a) {
                            var e = I.aaSorting;
                            for (b = 0, h = e.length; b < h; b++) e[b][1] = I.aoColumns[b].asSorting[0]
                        }
                        wt(I), P.bSort && Nt(I, "aoDrawCallback", function () {
                            if (I.bSorted) {
                                var e = Dt(I),
                                    n = {};
                                t.each(e, function (t, e) {
                                    n[e.src] = e.dir
                                }), Ht(I, null, "order", [I, e, n]), _t(I)
                            }
                        }), Nt(I, "aoDrawCallback", function () {
                            (I.bSorted || "ssp" === Mt(I) || P.bDeferRender) && wt(I)
                        }, "sc");
                        e = _.children("caption").each(function () {
                            this._captionSide = t(this).css("caption-side")
                        });
                        var n = _.children("thead");
                        if (0 === n.length && (n = t("<thead/>").appendTo(_)), I.nTHead = n[0], 0 === (n = _.children("tbody")).length && (n = t("<tbody/>").appendTo(_)), I.nTBody = n[0], 0 === (n = _.children("tfoot")).length && e.length > 0 && ("" !== I.oScroll.sX || "" !== I.oScroll.sY) && (n = t("<tfoot/>").appendTo(_)), 0 === n.length || 0 === n.children().length ? _.addClass(A.sNoFooter) : n.length > 0 && (I.nTFoot = n[0], W(I.aoFooter, I.nTFoot)), g.aaData)
                            for (b = 0; b < g.aaData.length; b++) D(I, g.aaData[b]);
                        else(I.bDeferLoading || "dom" == Mt(I)) && y(I, t(I.nTBody).children("tr"));
                        I.aiDisplay = I.aiDisplayMaster.slice(), I.bInitialised = !0, !1 === S && rt(I)
                    };
                    g.bStateSave ? (P.bStateSave = !0, Nt(I, "aoDrawCallback", It, "state_save"), At(I, g, p)) : p()
                }
            }), n = null, this
        },
        Gt = {},
        $t = /[\r\n]/g,
        zt = /<.*?>/g,
        Yt = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
        Zt = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"),
        Kt = /[',$Â£â‚¬Â¥%\u2009\u202F\u20BD\u20a9\u20BArfkÉƒÎ]/gi,
        Qt = function (t) {
            return !t || !0 === t || "-" === t
        },
        te = function (t) {
            var e = parseInt(t, 10);
            return !isNaN(e) && isFinite(t) ? e : null
        },
        ee = function (t, e) {
            return Gt[e] || (Gt[e] = RegExp(de(e), "g")), "string" == typeof t && "." !== e ? t.replace(/\./g, "").replace(Gt[e], ".") : t
        },
        ne = function (t, e, n) {
            var a = "string" == typeof t;
            return !!Qt(t) || (e && a && (t = ee(t, e)), n && a && (t = t.replace(Kt, "")), !isNaN(parseFloat(t)) && isFinite(t))
        },
        ae = function (t, e, n) {
            return !!Qt(t) || ((Qt(t) || "string" == typeof t) && !!ne(t.replace(zt, ""), e, n) || null)
        },
        re = function (t, e, n) {
            var r = [],
                o = 0,
                i = t.length;
            if (n !== a)
                for (; o < i; o++) t[o] && t[o][e] && r.push(t[o][e][n]);
            else
                for (; o < i; o++) t[o] && r.push(t[o][e]);
            return r
        },
        oe = function (t, e, n, r) {
            var o = [],
                i = 0,
                l = e.length;
            if (r !== a)
                for (; i < l; i++) t[e[i]][n] && o.push(t[e[i]][n][r]);
            else
                for (; i < l; i++) o.push(t[e[i]][n]);
            return o
        },
        ie = function (t, e) {
            var n, r = [];
            e === a ? (e = 0, n = t) : (n = e, e = t);
            for (var o = e; o < n; o++) r.push(o);
            return r
        },
        le = function (t) {
            for (var e = [], n = 0, a = t.length; n < a; n++) t[n] && e.push(t[n]);
            return e
        },
        se = function (t) {
            var e;
            t: {
                if (!(2 > t.length))
                    for (var n = (e = t.slice().sort())[0], a = 1, r = e.length; a < r; a++) {
                        if (e[a] === n) {
                            e = !1;
                            break t
                        }
                        n = e[a]
                    }
                e = !0
            }
            if (e) return t.slice();
            e = [];
            r = t.length;
            var o, i = 0;
            a = 0;
            t: for (; a < r; a++) {
                for (n = t[a], o = 0; o < i; o++)
                    if (e[o] === n) continue t;
                e.push(n), i++
            }
            return e
        };
    qt.util = {
        throttle: function (t, e) {
            var n, r, o = e !== a ? e : 200;
            return function () {
                var e = this,
                    i = +new Date,
                    l = arguments;
                n && i < n + o ? (clearTimeout(r), r = setTimeout(function () {
                    n = a, t.apply(e, l)
                }, o)) : (n = i, t.apply(e, l))
            }
        },
        escapeRegex: function (t) {
            return t.replace(Zt, "\\$1")
        }
    };
    var ue = function (t, e, n) {
            t[e] !== a && (t[n] = t[e])
        },
        ce = /\[.*?\]$/,
        fe = /\(\)$/,
        de = qt.util.escapeRegex,
        he = t("<div>")[0],
        pe = he.textContent !== a,
        ge = /<.*?>/g,
        be = qt.util.throttle,
        Se = [],
        me = Array.prototype;
    Vt = function (e, n) {
        if (!(this instanceof Vt)) return new Vt(e, n);
        var a = [],
            r = function (e) {
                var n, r, o, i, l;
                n = e, i = qt.settings, l = t.map(i, function (t) {
                    return t.nTable
                }), (e = n ? n.nTable && n.oApi ? [n] : n.nodeName && "table" === n.nodeName.toLowerCase() ? -1 !== (r = t.inArray(n, l)) ? [i[r]] : null : n && "function" == typeof n.settings ? n.settings().toArray() : ("string" == typeof n ? o = t(n) : n instanceof t && (o = n), o ? o.map(function () {
                    return -1 !== (r = t.inArray(this, l)) ? i[r] : null
                }).toArray() : void 0) : []) && (a = a.concat(e))
            };
        if (t.isArray(e))
            for (var o = 0, i = e.length; o < i; o++) r(e[o]);
        else r(e);
        this.context = se(a), n && t.merge(this, n), this.selector = {
            rows: null,
            cols: null,
            opts: null
        }, Vt.extend(this, this, Se)
    }, qt.Api = Vt, t.extend(Vt.prototype, {
        any: function () {
            return 0 !== this.count()
        },
        concat: me.concat,
        context: [],
        count: function () {
            return this.flatten().length
        },
        each: function (t) {
            for (var e = 0, n = this.length; e < n; e++) t.call(this, this[e], e, this);
            return this
        },
        eq: function (t) {
            var e = this.context;
            return e.length > t ? new Vt(e[t], this[t]) : null
        },
        filter: function (t) {
            var e = [];
            if (me.filter) e = me.filter.call(this, t, this);
            else
                for (var n = 0, a = this.length; n < a; n++) t.call(this, this[n], n, this) && e.push(this[n]);
            return new Vt(this.context, e)
        },
        flatten: function () {
            var t = [];
            return new Vt(this.context, t.concat.apply(t, this.toArray()))
        },
        join: me.join,
        indexOf: me.indexOf || function (t, e) {
            for (var n = e || 0, a = this.length; n < a; n++)
                if (this[n] === t) return n;
            return -1
        },
        iterator: function (t, e, n, r) {
            var o, i, l, s, u, c, f, d = [],
                h = this.context,
                p = this.selector;
            for ("string" == typeof t && (r = n, n = e, e = t, t = !1), i = 0, l = h.length; i < l; i++) {
                var g = new Vt(h[i]);
                if ("table" === e) o = n.call(g, h[i], i), o !== a && d.push(o);
                else if ("columns" === e || "rows" === e) o = n.call(g, h[i], this[i], i), o !== a && d.push(o);
                else if ("column" === e || "column-rows" === e || "row" === e || "cell" === e)
                    for (f = this[i], "column-rows" === e && (c = Te(h[i], p.opts)), s = 0, u = f.length; s < u; s++) o = f[s], o = "cell" === e ? n.call(g, h[i], o.row, o.column, i, s) : n.call(g, h[i], o, i, s, c), o !== a && d.push(o)
            }
            return d.length || r ? ((e = (t = new Vt(h, t ? d.concat.apply([], d) : d)).selector).rows = p.rows, e.cols = p.cols, e.opts = p.opts, t) : this
        },
        lastIndexOf: me.lastIndexOf || function (t, e) {
            return this.indexOf.apply(this.toArray.reverse(), arguments)
        },
        length: 0,
        map: function (t) {
            var e = [];
            if (me.map) e = me.map.call(this, t, this);
            else
                for (var n = 0, a = this.length; n < a; n++) e.push(t.call(this, this[n], n));
            return new Vt(this.context, e)
        },
        pluck: function (t) {
            return this.map(function (e) {
                return e[t]
            })
        },
        pop: me.pop,
        push: me.push,
        reduce: me.reduce || function (t, e) {
            return c(this, t, e, 0, this.length, 1)
        },
        reduceRight: me.reduceRight || function (t, e) {
            return c(this, t, e, this.length - 1, -1, -1)
        },
        reverse: me.reverse,
        selector: null,
        shift: me.shift,
        slice: function () {
            return new Vt(this.context, this)
        },
        sort: me.sort,
        splice: me.splice,
        toArray: function () {
            return me.slice.call(this)
        },
        to$: function () {
            return t(this)
        },
        toJQuery: function () {
            return t(this)
        },
        unique: function () {
            return new Vt(this.context, se(this))
        },
        unshift: me.unshift
    }), Vt.extend = function (e, n, a) {
        if (a.length && n && (n instanceof Vt || n.__dt_wrapper)) {
            var r, o, i, l = function (t, e, n) {
                return function () {
                    var a = e.apply(t, arguments);
                    return Vt.extend(a, a, n.methodExt), a
                }
            };
            for (r = 0, o = a.length; r < o; r++) i = a[r], n[i.name] = "function" == typeof i.val ? l(e, i.val, i) : t.isPlainObject(i.val) ? {} : i.val, n[i.name].__dt_wrapper = !0, Vt.extend(e, n[i.name], i.propExt)
        }
    }, Vt.register = Xt = function (e, n) {
        if (t.isArray(e))
            for (var a = 0, r = e.length; a < r; a++) Vt.register(e[a], n);
        else {
            var o, i, l = e.split("."),
                s = Se;
            for (a = 0, r = l.length; a < r; a++) {
                var u;
                o = (i = -1 !== l[a].indexOf("()")) ? l[a].replace("()", "") : l[a];
                t: {
                    u = 0;
                    for (var c = s.length; u < c; u++)
                        if (s[u].name === o) {
                            u = s[u];
                            break t
                        } u = null
                }
                u || (u = {
                    name: o,
                    val: {},
                    methodExt: [],
                    propExt: []
                }, s.push(u)), a === r - 1 ? u.val = n : s = i ? u.methodExt : u.propExt
            }
        }
    }, Vt.registerPlural = Jt = function (e, n, r) {
        Vt.register(e, r), Vt.register(n, function () {
            var e = r.apply(this, arguments);
            return e === this ? this : e instanceof Vt ? e.length ? t.isArray(e[0]) ? new Vt(e.context, e[0]) : e[0] : a : e
        })
    }, Xt("tables()", function (e) {
        var n;
        if (e) {
            n = Vt;
            var a = this.context;
            if ("number" == typeof e) e = [a[e]];
            else {
                var r = t.map(a, function (t) {
                    return t.nTable
                });
                e = t(r).filter(e).map(function () {
                    var e = t.inArray(this, r);
                    return a[e]
                }).toArray()
            }
            n = new n(e)
        } else n = this;
        return n
    }), Xt("table()", function (t) {
        var e = (t = this.tables(t)).context;
        return e.length ? new Vt(e[0]) : t
    }), Jt("tables().nodes()", "table().node()", function () {
        return this.iterator("table", function (t) {
            return t.nTable
        }, 1)
    }), Jt("tables().body()", "table().body()", function () {
        return this.iterator("table", function (t) {
            return t.nTBody
        }, 1)
    }), Jt("tables().header()", "table().header()", function () {
        return this.iterator("table", function (t) {
            return t.nTHead
        }, 1)
    }), Jt("tables().footer()", "table().footer()", function () {
        return this.iterator("table", function (t) {
            return t.nTFoot
        }, 1)
    }), Jt("tables().containers()", "table().container()", function () {
        return this.iterator("table", function (t) {
            return t.nTableWrapper
        }, 1)
    }), Xt("draw()", function (t) {
        return this.iterator("table", function (e) {
            "page" === t ? O(e) : ("string" == typeof t && (t = "full-hold" !== t), k(e, !1 === t))
        })
    }), Xt("page()", function (t) {
        return t === a ? this.page.info().page : this.iterator("table", function (e) {
            ut(e, t)
        })
    }), Xt("page.info()", function () {
        if (0 === this.context.length) return a;
        var t = this.context[0],
            e = t._iDisplayStart,
            n = t.oFeatures.bPaginate ? t._iDisplayLength : -1,
            r = t.fnRecordsDisplay(),
            o = -1 === n;
        return {
            page: o ? 0 : Math.floor(e / n),
            pages: o ? 1 : Math.ceil(r / n),
            start: e,
            end: t.fnDisplayEnd(),
            length: n,
            recordsTotal: t.fnRecordsTotal(),
            recordsDisplay: r,
            serverSide: "ssp" === Mt(t)
        }
    }), Xt("page.len()", function (t) {
        return t === a ? 0 !== this.context.length ? this.context[0]._iDisplayLength : a : this.iterator("table", function (e) {
            it(e, t)
        })
    });
    var ve = function (t, e, n) {
        if (n) {
            var a = new Vt(t);
            a.one("draw", function () {
                n(a.ajax.json())
            })
        }
        if ("ssp" == Mt(t)) k(t, e);
        else {
            ft(t, !0);
            var r = t.jqXHR;
            r && 4 !== r.readyState && r.abort(), B(t, [], function (n) {
                A(t);
                for (var a = 0, r = (n = J(t, n)).length; a < r; a++) D(t, n[a]);
                k(t, e), ft(t, !1)
            })
        }
    };
    Xt("ajax.json()", function () {
        var t = this.context;
        if (0 < t.length) return t[0].json
    }), Xt("ajax.params()", function () {
        var t = this.context;
        if (0 < t.length) return t[0].oAjaxData
    }), Xt("ajax.reload()", function (t, e) {
        return this.iterator("table", function (n) {
            ve(n, !1 === e, t)
        })
    }), Xt("ajax.url()", function (e) {
        var n = this.context;
        return e === a ? 0 === n.length ? a : (n = n[0]).ajax ? t.isPlainObject(n.ajax) ? n.ajax.url : n.ajax : n.sAjaxSource : this.iterator("table", function (n) {
            t.isPlainObject(n.ajax) ? n.ajax.url = e : n.ajax = e
        })
    }), Xt("ajax.url().load()", function (t, e) {
        return this.iterator("table", function (n) {
            ve(n, !1 === e, t)
        })
    });
    var De = function (e, n, r, o, i) {
            var l, s, u, c, f, d, h = [];
            for (u = typeof n, n && "string" !== u && "function" !== u && n.length !== a || (n = [n]), u = 0, c = n.length; u < c; u++)
                for (f = 0, d = (s = n[u] && n[u].split && !n[u].match(/[\[\(:]/) ? n[u].split(",") : [n[u]]).length; f < d; f++)(l = r("string" == typeof s[f] ? t.trim(s[f]) : s[f])) && l.length && (h = h.concat(l));
            if ((e = Ut.selector[e]).length)
                for (u = 0, c = e.length; u < c; u++) h = e[u](o, i, h);
            return se(h)
        },
        ye = function (e) {
            return e || (e = {}), e.filter && e.search === a && (e.search = e.filter), t.extend({
                search: "none",
                order: "current",
                page: "all"
            }, e)
        },
        _e = function (t) {
            for (var e = 0, n = t.length; e < n; e++)
                if (0 < t[e].length) return t[0] = t[e], t[0].length = 1, t.length = 1, t.context = [t.context[e]], t;
            return t.length = 0, t
        },
        Te = function (e, n) {
            var a, r, o, i = [],
                l = e.aiDisplay;
            o = e.aiDisplayMaster;
            var s = n.search;
            if (a = n.order, r = n.page, "ssp" == Mt(e)) return "removed" === s ? [] : ie(0, o.length);
            if ("current" == r)
                for (a = e._iDisplayStart, r = e.fnDisplayEnd(); a < r; a++) i.push(l[a]);
            else if ("current" == a || "applied" == a) {
                if ("none" == s) i = o.slice();
                else if ("applied" == s) i = l.slice();
                else if ("removed" == s) {
                    var u = {};
                    for (a = 0, r = l.length; a < r; a++) u[l[a]] = null;
                    i = t.map(o, function (t) {
                        return u.hasOwnProperty(t) ? null : t
                    })
                }
            } else if ("index" == a || "original" == a)
                for (a = 0, r = e.aoData.length; a < r; a++) "none" == s ? i.push(a) : (o = t.inArray(a, l), (-1 === o && "removed" == s || 0 <= o && "applied" == s) && i.push(a));
            return i
        };
    Xt("rows()", function (e, n) {
        e === a ? e = "" : t.isPlainObject(e) && (n = e, e = "");
        n = ye(n);
        var r = this.iterator("table", function (r) {
            var o, i = n;
            return De("row", e, function (e) {
                var n = te(e),
                    l = r.aoData;
                if (null !== n && !i) return [n];
                if (o || (o = Te(r, i)), null !== n && -1 !== t.inArray(n, o)) return [n];
                if (null === e || e === a || "" === e) return o;
                if ("function" == typeof e) return t.map(o, function (t) {
                    var n = l[t];
                    return e(t, n._aData, n.nTr) ? t : null
                });
                if (e.nodeName) {
                    n = e._DT_RowIndex;
                    var s = e._DT_CellIndex;
                    return n !== a ? l[n] && l[n].nTr === e ? [n] : [] : s ? l[s.row] && l[s.row].nTr === e ? [s.row] : [] : (n = t(e).closest("*[data-dt-row]")).length ? [n.data("dt-row")] : []
                }
                return "string" == typeof e && "#" === e.charAt(0) && (n = r.aIds[e.replace(/^#/, "")]) !== a ? [n.idx] : (n = le(oe(r.aoData, o, "nTr")), t(n).filter(e).map(function () {
                    return this._DT_RowIndex
                }).toArray())
            }, r, i)
        }, 1);
        return r.selector.rows = e, r.selector.opts = n, r
    }), Xt("rows().nodes()", function () {
        return this.iterator("row", function (t, e) {
            return t.aoData[e].nTr || a
        }, 1)
    }), Xt("rows().data()", function () {
        return this.iterator(!0, "rows", function (t, e) {
            return oe(t.aoData, e, "_aData")
        }, 1)
    }), Jt("rows().cache()", "row().cache()", function (t) {
        return this.iterator("row", function (e, n) {
            var a = e.aoData[n];
            return "search" === t ? a._aFilterData : a._aSortData
        }, 1)
    }), Jt("rows().invalidate()", "row().invalidate()", function (t) {
        return this.iterator("row", function (e, n) {
            L(e, n, t)
        })
    }), Jt("rows().indexes()", "row().index()", function () {
        return this.iterator("row", function (t, e) {
            return e
        }, 1)
    }), Jt("rows().ids()", "row().id()", function (t) {
        for (var e = [], n = this.context, a = 0, r = n.length; a < r; a++)
            for (var o = 0, i = this[a].length; o < i; o++) {
                var l = n[a].rowIdFn(n[a].aoData[this[a][o]]._aData);
                e.push((!0 === t ? "#" : "") + l)
            }
        return new Vt(n, e)
    }), Jt("rows().remove()", "row().remove()", function () {
        var t = this;
        return this.iterator("row", function (e, n, r) {
            var o, i, l, s, u, c = e.aoData,
                f = c[n];
            for (c.splice(n, 1), o = 0, i = c.length; o < i; o++)
                if (l = c[o], u = l.anCells, null !== l.nTr && (l.nTr._DT_RowIndex = o), null !== u)
                    for (l = 0, s = u.length; l < s; l++) u[l]._DT_CellIndex.row = o;
            F(e.aiDisplayMaster, n), F(e.aiDisplay, n), F(t[r], n, !1), 0 < e._iRecordsDisplay && e._iRecordsDisplay--, Ot(e), (n = e.rowIdFn(f._aData)) !== a && delete e.aIds[n]
        }), this.iterator("table", function (t) {
            for (var e = 0, n = t.aoData.length; e < n; e++) t.aoData[e].idx = e
        }), this
    }), Xt("rows.add()", function (e) {
        var n = this.iterator("table", function (t) {
                var n, a, r, o = [];
                for (a = 0, r = e.length; a < r; a++) n = e[a], n.nodeName && "TR" === n.nodeName.toUpperCase() ? o.push(y(t, n)[0]) : o.push(D(t, n));
                return o
            }, 1),
            a = this.rows(-1);
        return a.pop(), t.merge(a, n), a
    }), Xt("row()", function (t, e) {
        return _e(this.rows(t, e))
    }), Xt("row().data()", function (e) {
        var n = this.context;
        if (e === a) return n.length && this.length ? n[0].aoData[this[0]]._aData : a;
        var r = n[0].aoData[this[0]];
        return r._aData = e, t.isArray(e) && r.nTr.id && x(n[0].rowId)(e, r.nTr.id), L(n[0], this[0], "data"), this
    }), Xt("row().node()", function () {
        var t = this.context;
        return t.length && this.length && t[0].aoData[this[0]].nTr || null
    }), Xt("row.add()", function (e) {
        e instanceof t && e.length && (e = e[0]);
        var n = this.iterator("table", function (t) {
            return e.nodeName && "TR" === e.nodeName.toUpperCase() ? y(t, e)[0] : D(t, e)
        });
        return this.row(n[0])
    });
    var Ce = function (t, e) {
            var n = t.context;
            n.length && (n = n[0].aoData[e !== a ? e : t[0]]) && n._details && (n._details.remove(), n._detailsShow = a, n._details = a)
        },
        we = function (t, e) {
            var n = t.context;
            if (n.length && t.length) {
                var a = n[0].aoData[t[0]];
                if (a._details) {
                    (a._detailsShow = e) ? a._details.insertAfter(a.nTr): a._details.detach();
                    var r = n[0],
                        o = new Vt(r),
                        i = r.aoData;
                    o.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details"), 0 < re(i, "_details").length && (o.on("draw.dt.DT_details", function (t, e) {
                        r === e && o.rows({
                            page: "current"
                        }).eq(0).each(function (t) {
                            (t = i[t])._detailsShow && t._details.insertAfter(t.nTr)
                        })
                    }), o.on("column-visibility.dt.DT_details", function (t, e) {
                        if (r === e)
                            for (var n, a = b(e), o = 0, l = i.length; o < l; o++) n = i[o], n._details && n._details.children("td[colspan]").attr("colspan", a)
                    }), o.on("destroy.dt.DT_details", function (t, e) {
                        if (r === e)
                            for (var n = 0, a = i.length; n < a; n++) i[n]._details && Ce(o, n)
                    }))
                }
            }
        };
    Xt("row().child()", function (e, n) {
        var r = this.context;
        if (e === a) return r.length && this.length ? r[0].aoData[this[0]]._details : a;
        if (!0 === e) this.child.show();
        else if (!1 === e) Ce(this);
        else if (r.length && this.length) {
            var o = r[0],
                i = (r = r[0].aoData[this[0]], []),
                l = function (e, n) {
                    if (t.isArray(e) || e instanceof t)
                        for (var a = 0, r = e.length; a < r; a++) l(e[a], n);
                    else e.nodeName && "tr" === e.nodeName.toLowerCase() ? i.push(e) : (a = t("<tr><td/></tr>").addClass(n), t("td", a).addClass(n).html(e)[0].colSpan = b(o), i.push(a[0]))
                };
            l(e, n), r._details && r._details.detach(), r._details = t(i), r._detailsShow && r._details.insertAfter(r.nTr)
        }
        return this
    }), Xt(["row().child.show()", "row().child().show()"], function () {
        return we(this, !0), this
    }), Xt(["row().child.hide()", "row().child().hide()"], function () {
        return we(this, !1), this
    }), Xt(["row().child.remove()", "row().child().remove()"], function () {
        return Ce(this), this
    }), Xt("row().child.isShown()", function () {
        var t = this.context;
        return t.length && this.length && t[0].aoData[this[0]]._detailsShow || !1
    });
    var xe = /^([^:]+):(name|visIdx|visible)$/,
        Ie = function (t, e, n, a, r) {
            n = [], a = 0;
            for (var o = r.length; a < o; a++) n.push(_(t, r[a], e));
            return n
        };
    Xt("columns()", function (e, n) {
        e === a ? e = "" : t.isPlainObject(e) && (n = e, e = "");
        n = ye(n);
        var r = this.iterator("table", function (a) {
            var r = e,
                o = n,
                i = a.aoColumns,
                l = re(i, "sName"),
                s = re(i, "nTh");
            return De("column", r, function (e) {
                var n = te(e);
                if ("" === e) return ie(i.length);
                if (null !== n) return [n >= 0 ? n : i.length + n];
                if ("function" == typeof e) {
                    var r = Te(a, o);
                    return t.map(i, function (t, n) {
                        return e(n, Ie(a, n, 0, 0, r), s[n]) ? n : null
                    })
                }
                var u = "string" == typeof e ? e.match(xe) : "";
                if (u) switch (u[2]) {
                    case "visIdx":
                    case "visible":
                        if ((n = parseInt(u[1], 10)) < 0) {
                            var c = t.map(i, function (t, e) {
                                return t.bVisible ? e : null
                            });
                            return [c[c.length + n]]
                        }
                        return [p(a, n)];
                    case "name":
                        return t.map(l, function (t, e) {
                            return t === u[1] ? e : null
                        });
                    default:
                        return []
                }
                return e.nodeName && e._DT_CellIndex ? [e._DT_CellIndex.column] : (n = t(s).filter(e).map(function () {
                    return t.inArray(this, s)
                }).toArray()).length || !e.nodeName ? n : (n = t(e).closest("*[data-dt-column]")).length ? [n.data("dt-column")] : []
            }, a, o)
        }, 1);
        return r.selector.cols = e, r.selector.opts = n, r
    }), Jt("columns().header()", "column().header()", function () {
        return this.iterator("column", function (t, e) {
            return t.aoColumns[e].nTh
        }, 1)
    }), Jt("columns().footer()", "column().footer()", function () {
        return this.iterator("column", function (t, e) {
            return t.aoColumns[e].nTf
        }, 1)
    }), Jt("columns().data()", "column().data()", function () {
        return this.iterator("column-rows", Ie, 1)
    }), Jt("columns().dataSrc()", "column().dataSrc()", function () {
        return this.iterator("column", function (t, e) {
            return t.aoColumns[e].mData
        }, 1)
    }), Jt("columns().cache()", "column().cache()", function (t) {
        return this.iterator("column-rows", function (e, n, a, r, o) {
            return oe(e.aoData, o, "search" === t ? "_aFilterData" : "_aSortData", n)
        }, 1)
    }), Jt("columns().nodes()", "column().nodes()", function () {
        return this.iterator("column-rows", function (t, e, n, a, r) {
            return oe(t.aoData, r, "anCells", e)
        }, 1)
    }), Jt("columns().visible()", "column().visible()", function (e, n) {
        var r = this.iterator("column", function (n, r) {
            if (e === a) return n.aoColumns[r].bVisible;
            var o, i, l, s = n.aoColumns,
                u = s[r],
                c = n.aoData;
            if (e !== a && u.bVisible !== e) {
                if (e) {
                    var f = t.inArray(!0, re(s, "bVisible"), r + 1);
                    for (o = 0, i = c.length; o < i; o++) l = c[o].nTr, s = c[o].anCells, l && l.insertBefore(s[r], s[f] || null)
                } else t(re(n.aoData, "anCells", r)).detach();
                u.bVisible = e, H(n, n.aoHeader), H(n, n.aoFooter), n.aiDisplay.length || t(n.nTBody).find("td[colspan]").attr("colspan", b(n)), It(n)
            }
        });
        return e !== a && (this.iterator("column", function (t, a) {
            Ht(t, null, "column-visibility", [t, a, e, n])
        }), (n === a || n) && this.columns.adjust()), r
    }), Jt("columns().indexes()", "column().index()", function (t) {
        return this.iterator("column", function (e, n) {
            return "visible" === t ? g(e, n) : n
        }, 1)
    }), Xt("columns.adjust()", function () {
        return this.iterator("table", function (t) {
            h(t)
        }, 1)
    }), Xt("column.index()", function (t, e) {
        if (0 !== this.context.length) {
            var n = this.context[0];
            if ("fromVisible" === t || "toData" === t) return p(n, e);
            if ("fromData" === t || "toVisible" === t) return g(n, e)
        }
    }), Xt("column()", function (t, e) {
        return _e(this.columns(t, e))
    }), Xt("cells()", function (e, n, r) {
        if (t.isPlainObject(e) && (e.row === a ? (r = e, e = null) : (r = n, n = null)), t.isPlainObject(n) && (r = n, n = null), null === n || n === a) return this.iterator("table", function (n) {
            var o, i, l, s, u, c, f, d = e,
                h = ye(r),
                p = n.aoData,
                g = Te(n, h),
                b = le(oe(p, g, "anCells")),
                S = t([].concat.apply([], b)),
                m = n.aoColumns.length;
            return De("cell", d, function (e) {
                var r = "function" == typeof e;
                if (null === e || e === a || r) {
                    for (i = [], l = 0, s = g.length; l < s; l++)
                        for (o = g[l], u = 0; u < m; u++) c = {
                            row: o,
                            column: u
                        }, r ? (f = p[o], e(c, _(n, o, u), f.anCells ? f.anCells[u] : null) && i.push(c)) : i.push(c);
                    return i
                }
                return t.isPlainObject(e) ? e.column !== a && e.row !== a && -1 !== t.inArray(e.row, g) ? [e] : [] : (r = S.filter(e).map(function (t, e) {
                    return {
                        row: e._DT_CellIndex.row,
                        column: e._DT_CellIndex.column
                    }
                }).toArray()).length || !e.nodeName ? r : (f = t(e).closest("*[data-dt-row]")).length ? [{
                    row: f.data("dt-row"),
                    column: f.data("dt-column")
                }] : []
            }, n, h)
        });
        var o, i, l, s, u, c = this.columns(n),
            f = this.rows(e);
        this.iterator("table", function (t, e) {
            for (o = [], i = 0, l = f[e].length; i < l; i++)
                for (s = 0, u = c[e].length; s < u; s++) o.push({
                    row: f[e][i],
                    column: c[e][s]
                })
        }, 1);
        var d = this.cells(o, r);
        return t.extend(d.selector, {
            cols: n,
            rows: e,
            opts: r
        }), d
    }), Jt("cells().nodes()", "cell().node()", function () {
        return this.iterator("cell", function (t, e, n) {
            return (t = t.aoData[e]) && t.anCells ? t.anCells[n] : a
        }, 1)
    }), Xt("cells().data()", function () {
        return this.iterator("cell", function (t, e, n) {
            return _(t, e, n)
        }, 1)
    }), Jt("cells().cache()", "cell().cache()", function (t) {
        return t = "search" === t ? "_aFilterData" : "_aSortData", this.iterator("cell", function (e, n, a) {
            return e.aoData[n][t][a]
        }, 1)
    }), Jt("cells().render()", "cell().render()", function (t) {
        return this.iterator("cell", function (e, n, a) {
            return _(e, n, a, t)
        }, 1)
    }), Jt("cells().indexes()", "cell().index()", function () {
        return this.iterator("cell", function (t, e, n) {
            return {
                row: e,
                column: n,
                columnVisible: g(t, n)
            }
        }, 1)
    }), Jt("cells().invalidate()", "cell().invalidate()", function (t) {
        return this.iterator("cell", function (e, n, a) {
            L(e, n, t, a)
        })
    }), Xt("cell()", function (t, e, n) {
        return _e(this.cells(t, e, n))
    }), Xt("cell().data()", function (t) {
        var e = this.context,
            n = this[0];
        return t === a ? e.length && n.length ? _(e[0], n[0].row, n[0].column) : a : (T(e[0], n[0].row, n[0].column, t), L(e[0], n[0].row, "data", n[0].column), this)
    }), Xt("order()", function (e, n) {
        var r = this.context;
        return e === a ? 0 !== r.length ? r[0].aaSorting : a : ("number" == typeof e ? e = [
            [e, n]
        ] : e.length && !t.isArray(e[0]) && (e = Array.prototype.slice.call(arguments)), this.iterator("table", function (t) {
            t.aaSorting = e.slice()
        }))
    }), Xt("order.listener()", function (t, e, n) {
        return this.iterator("table", function (a) {
            Ct(a, t, e, n)
        })
    }), Xt("order.fixed()", function (e) {
        if (!e) {
            var n = (n = this.context).length ? n[0].aaSortingFixed : a;
            return t.isArray(n) ? {
                pre: n
            } : n
        }
        return this.iterator("table", function (n) {
            n.aaSortingFixed = t.extend(!0, {}, e)
        })
    }), Xt(["columns().order()", "column().order()"], function (e) {
        var n = this;
        return this.iterator("table", function (a, r) {
            var o = [];
            t.each(n[r], function (t, n) {
                o.push([n, e])
            }), a.aaSorting = o
        })
    }), Xt("search()", function (e, n, r, o) {
        var i = this.context;
        return e === a ? 0 !== i.length ? i[0].oPreviousSearch.sSearch : a : this.iterator("table", function (a) {
            a.oFeatures.bFilter && G(a, t.extend({}, a.oPreviousSearch, {
                sSearch: e + "",
                bRegex: null !== n && n,
                bSmart: null === r || r,
                bCaseInsensitive: null === o || o
            }), 1)
        })
    }), Jt("columns().search()", "column().search()", function (e, n, r, o) {
        return this.iterator("column", function (i, l) {
            var s = i.aoPreSearchCols;
            if (e === a) return s[l].sSearch;
            i.oFeatures.bFilter && (t.extend(s[l], {
                sSearch: e + "",
                bRegex: null !== n && n,
                bSmart: null === r || r,
                bCaseInsensitive: null === o || o
            }), G(i, i.oPreviousSearch, 1))
        })
    }), Xt("state()", function () {
        return this.context.length ? this.context[0].oSavedState : null
    }), Xt("state.clear()", function () {
        return this.iterator("table", function (t) {
            t.fnStateSaveCallback.call(t.oInstance, t, {})
        })
    }), Xt("state.loaded()", function () {
        return this.context.length ? this.context[0].oLoadedState : null
    }), Xt("state.save()", function () {
        return this.iterator("table", function (t) {
            It(t)
        })
    }), qt.versionCheck = qt.fnVersionCheck = function (t) {
        for (var e, n, a = qt.version.split("."), r = 0, o = (t = t.split(".")).length; r < o; r++)
            if (e = parseInt(a[r], 10) || 0, n = parseInt(t[r], 10) || 0, e !== n) return e > n;
        return !0
    }, qt.isDataTable = qt.fnIsDataTable = function (e) {
        var n = t(e).get(0),
            a = !1;
        return e instanceof qt.Api || (t.each(qt.settings, function (e, r) {
            var o = r.nScrollHead ? t("table", r.nScrollHead)[0] : null,
                i = r.nScrollFoot ? t("table", r.nScrollFoot)[0] : null;
            r.nTable !== n && o !== n && i !== n || (a = !0)
        }), a)
    }, qt.tables = qt.fnTables = function (e) {
        var n = !1;
        t.isPlainObject(e) && (n = e.api, e = e.visible);
        var a = t.map(qt.settings, function (n) {
            if (!e || e && t(n.nTable).is(":visible")) return n.nTable
        });
        return n ? new Vt(a) : a
    }, qt.camelToHungarian = o, Xt("$()", function (e, n) {
        var a = this.rows(n).nodes();
        a = t(a);
        return t([].concat(a.filter(e).toArray(), a.find(e).toArray()))
    }), t.each(["on", "one", "off"], function (e, n) {
        Xt(n + "()", function () {
            var e = Array.prototype.slice.call(arguments);
            e[0] = t.map(e[0].split(/\s/), function (t) {
                return t.match(/\.dt\b/) ? t : t + ".dt"
            }).join(" ");
            var a = t(this.tables().nodes());
            return a[n].apply(a, e), this
        })
    }), Xt("clear()", function () {
        return this.iterator("table", function (t) {
            A(t)
        })
    }), Xt("settings()", function () {
        return new Vt(this.context, this.context)
    }), Xt("init()", function () {
        var t = this.context;
        return t.length ? t[0].oInit : null
    }), Xt("data()", function () {
        return this.iterator("table", function (t) {
            return re(t.aoData, "_aData")
        }).flatten()
    }), Xt("destroy()", function (n) {
        return n = n || !1, this.iterator("table", function (a) {
            var r, o = a.nTableWrapper.parentNode,
                i = a.oClasses,
                l = a.nTable,
                s = a.nTBody,
                u = a.nTHead,
                c = a.nTFoot,
                f = t(l),
                d = (s = t(s), t(a.nTableWrapper)),
                h = t.map(a.aoData, function (t) {
                    return t.nTr
                });
            a.bDestroying = !0, Ht(a, "aoDestroyCallback", "destroy", [a]), n || new Vt(a).columns().visible(!0), d.off(".DT").find(":not(tbody *)").off(".DT"), t(e).off(".DT-" + a.sInstance), l != u.parentNode && (f.children("thead").detach(), f.append(u)), c && l != c.parentNode && (f.children("tfoot").detach(), f.append(c)), a.aaSorting = [], a.aaSortingFixed = [], wt(a), t(h).removeClass(a.asStripeClasses.join(" ")), t("th, td", u).removeClass(i.sSortable + " " + i.sSortableAsc + " " + i.sSortableDesc + " " + i.sSortableNone), s.children().detach(), s.append(h), f[u = n ? "remove" : "detach"](), d[u](), !n && o && (o.insertBefore(l, a.nTableReinsertBefore), f.css("width", a.sDestroyWidth).removeClass(i.sTable), (r = a.asDestroyStripes.length) && s.children().each(function (e) {
                t(this).addClass(a.asDestroyStripes[e % r])
            })), -1 !== (o = t.inArray(a, qt.settings)) && qt.settings.splice(o, 1)
        })
    }), t.each(["column", "row", "cell"], function (t, e) {
        Xt(e + "s().every()", function (t) {
            var n = this.selector.opts,
                r = this;
            return this.iterator(e, function (o, i, l, s, u) {
                t.call(r[e](i, "cell" === e ? l : n, "cell" === e ? n : a), i, l, s, u)
            })
        })
    }), Xt("i18n()", function (e, n, r) {
        var o = this.context[0];
        return (e = w(e)(o.oLanguage)) === a && (e = n), r !== a && t.isPlainObject(e) && (e = e[r] !== a ? e[r] : e._), e.replace("%d", r)
    }), qt.version = "1.10.18", qt.settings = [], qt.models = {}, qt.models.oSearch = {
        bCaseInsensitive: !0,
        sSearch: "",
        bRegex: !1,
        bSmart: !0
    }, qt.models.oRow = {
        nTr: null,
        anCells: null,
        _aData: [],
        _aSortData: null,
        _aFilterData: null,
        _sFilterRow: null,
        _sRowStripe: "",
        src: null,
        idx: -1
    }, qt.models.oColumn = {
        idx: null,
        aDataSort: null,
        asSorting: null,
        bSearchable: null,
        bSortable: null,
        bVisible: null,
        _sManualType: null,
        _bAttrSrc: !1,
        fnCreatedCell: null,
        fnGetData: null,
        fnSetData: null,
        mData: null,
        mRender: null,
        nTh: null,
        nTf: null,
        sClass: null,
        sContentPadding: null,
        sDefaultContent: null,
        sName: null,
        sSortDataType: "std",
        sSortingClass: null,
        sSortingClassJUI: null,
        sTitle: null,
        sType: null,
        sWidth: null,
        sWidthOrig: null
    }, qt.defaults = {
        aaData: null,
        aaSorting: [
            [0, "asc"]
        ],
        aaSortingFixed: [],
        ajax: null,
        aLengthMenu: [10, 25, 50, 100],
        aoColumns: null,
        aoColumnDefs: null,
        aoSearchCols: [],
        asStripeClasses: null,
        bAutoWidth: !0,
        bDeferRender: !1,
        bDestroy: !1,
        bFilter: !0,
        bInfo: !0,
        bLengthChange: !0,
        bPaginate: !0,
        bProcessing: !1,
        bRetrieve: !1,
        bScrollCollapse: !1,
        bServerSide: !1,
        bSort: !0,
        bSortMulti: !0,
        bSortCellsTop: !1,
        bSortClasses: !0,
        bStateSave: !1,
        fnCreatedRow: null,
        fnDrawCallback: null,
        fnFooterCallback: null,
        fnFormatNumber: function (t) {
            return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)
        },
        fnHeaderCallback: null,
        fnInfoCallback: null,
        fnInitComplete: null,
        fnPreDrawCallback: null,
        fnRowCallback: null,
        fnServerData: null,
        fnServerParams: null,
        fnStateLoadCallback: function (t) {
            try {
                return JSON.parse((-1 === t.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + t.sInstance + "_" + location.pathname))
            } catch (t) {}
        },
        fnStateLoadParams: null,
        fnStateLoaded: null,
        fnStateSaveCallback: function (t, e) {
            try {
                (-1 === t.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + t.sInstance + "_" + location.pathname, JSON.stringify(e))
            } catch (t) {}
        },
        fnStateSaveParams: null,
        iStateDuration: 7200,
        iDeferLoading: null,
        iDisplayLength: 10,
        iDisplayStart: 0,
        iTabIndex: 0,
        oClasses: {},
        oLanguage: {
            oAria: {
                sSortAscending: ": activate to sort column ascending",
                sSortDescending: ": activate to sort column descending"
            },
            oPaginate: {
                sFirst: "First",
                sLast: "Last",
                sNext: "Next",
                sPrevious: "Previous"
            },
            sEmptyTable: "No data available in table",
            sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
            sInfoEmpty: "Showing 0 to 0 of 0 entries",
            sInfoFiltered: "(filtered from _MAX_ total entries)",
            sInfoPostFix: "",
            sDecimal: "",
            sThousands: ",",
            sLengthMenu: "Show _MENU_ entries",
            sLoadingRecords: "Loading...",
            sProcessing: "Processing...",
            sSearch: "Search:",
            sSearchPlaceholder: "",
            sUrl: "",
            sZeroRecords: "No matching records found"
        },
        oSearch: t.extend({}, qt.models.oSearch),
        sAjaxDataProp: "data",
        sAjaxSource: null,
        sDom: "lfrtip",
        searchDelay: null,
        sPaginationType: "simple_numbers",
        sScrollX: "",
        sScrollXInner: "",
        sScrollY: "",
        sServerMethod: "GET",
        renderer: null,
        rowId: "DT_RowId"
    }, r(qt.defaults), qt.defaults.column = {
        aDataSort: null,
        iDataSort: -1,
        asSorting: ["asc", "desc"],
        bSearchable: !0,
        bSortable: !0,
        bVisible: !0,
        fnCreatedCell: null,
        mData: null,
        mRender: null,
        sCellType: "td",
        sClass: "",
        sContentPadding: "",
        sDefaultContent: null,
        sName: "",
        sSortDataType: "std",
        sTitle: null,
        sType: null,
        sWidth: null
    }, r(qt.defaults.column), qt.models.oSettings = {
        oFeatures: {
            bAutoWidth: null,
            bDeferRender: null,
            bFilter: null,
            bInfo: null,
            bLengthChange: null,
            bPaginate: null,
            bProcessing: null,
            bServerSide: null,
            bSort: null,
            bSortMulti: null,
            bSortClasses: null,
            bStateSave: null
        },
        oScroll: {
            bCollapse: null,
            iBarWidth: 0,
            sX: null,
            sXInner: null,
            sY: null
        },
        oLanguage: {
            fnInfoCallback: null
        },
        oBrowser: {
            bScrollOversize: !1,
            bScrollbarLeft: !1,
            bBounding: !1,
            barWidth: 0
        },
        ajax: null,
        aanFeatures: [],
        aoData: [],
        aiDisplay: [],
        aiDisplayMaster: [],
        aIds: {},
        aoColumns: [],
        aoHeader: [],
        aoFooter: [],
        oPreviousSearch: {},
        aoPreSearchCols: [],
        aaSorting: null,
        aaSortingFixed: [],
        asStripeClasses: null,
        asDestroyStripes: [],
        sDestroyWidth: 0,
        aoRowCallback: [],
        aoHeaderCallback: [],
        aoFooterCallback: [],
        aoDrawCallback: [],
        aoRowCreatedCallback: [],
        aoPreDrawCallback: [],
        aoInitComplete: [],
        aoStateSaveParams: [],
        aoStateLoadParams: [],
        aoStateLoaded: [],
        sTableId: "",
        nTable: null,
        nTHead: null,
        nTFoot: null,
        nTBody: null,
        nTableWrapper: null,
        bDeferLoading: !1,
        bInitialised: !1,
        aoOpenRows: [],
        sDom: null,
        searchDelay: null,
        sPaginationType: "two_button",
        iStateDuration: 0,
        aoStateSave: [],
        aoStateLoad: [],
        oSavedState: null,
        oLoadedState: null,
        sAjaxSource: null,
        sAjaxDataProp: null,
        bAjaxDataGet: !0,
        jqXHR: null,
        json: a,
        oAjaxData: a,
        fnServerData: null,
        aoServerParams: [],
        sServerMethod: null,
        fnFormatNumber: null,
        aLengthMenu: null,
        iDraw: 0,
        bDrawing: !1,
        iDrawError: -1,
        _iDisplayLength: 10,
        _iDisplayStart: 0,
        _iRecordsTotal: 0,
        _iRecordsDisplay: 0,
        oClasses: {},
        bFiltered: !1,
        bSorted: !1,
        bSortCellsTop: null,
        oInit: null,
        aoDestroyCallback: [],
        fnRecordsTotal: function () {
            return "ssp" == Mt(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length
        },
        fnRecordsDisplay: function () {
            return "ssp" == Mt(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
        },
        fnDisplayEnd: function () {
            var t = this._iDisplayLength,
                e = this._iDisplayStart,
                n = e + t,
                a = this.aiDisplay.length,
                r = this.oFeatures,
                o = r.bPaginate;
            return r.bServerSide ? !1 === o || -1 === t ? e + a : Math.min(e + t, this._iRecordsDisplay) : !o || n > a || -1 === t ? a : n
        },
        oInstance: null,
        sInstance: null,
        iTabIndex: 0,
        nScrollHead: null,
        nScrollFoot: null,
        aLastSort: [],
        oPlugins: {},
        rowIdFn: null,
        rowId: null
    }, qt.ext = Ut = {
        buttons: {},
        classes: {},
        build: "bs4/dt-1.10.18",
        errMode: "alert",
        feature: [],
        search: [],
        selector: {
            cell: [],
            column: [],
            row: []
        },
        internal: {},
        legacy: {
            ajax: null
        },
        pager: {},
        renderer: {
            pageButton: {},
            header: {}
        },
        order: {},
        type: {
            detect: [],
            search: {},
            order: {}
        },
        _unique: 0,
        fnVersionCheck: qt.fnVersionCheck,
        iApiIndex: 0,
        oJUIClasses: {},
        sVersion: qt.version
    }, t.extend(Ut, {
        afnFiltering: Ut.search,
        aTypes: Ut.type.detect,
        ofnSearch: Ut.type.search,
        oSort: Ut.type.order,
        afnSortData: Ut.order,
        aoFeatures: Ut.feature,
        oApi: Ut.internal,
        oStdClasses: Ut.classes,
        oPagination: Ut.pager
    }), t.extend(qt.ext.classes, {
        sTable: "dataTable",
        sNoFooter: "no-footer",
        sPageButton: "paginate_button",
        sPageButtonActive: "current",
        sPageButtonDisabled: "disabled",
        sStripeOdd: "odd",
        sStripeEven: "even",
        sRowEmpty: "dataTables_empty",
        sWrapper: "dataTables_wrapper",
        sFilter: "dataTables_filter",
        sInfo: "dataTables_info",
        sPaging: "dataTables_paginate paging_",
        sLength: "dataTables_length",
        sProcessing: "dataTables_processing",
        sSortAsc: "sorting_asc",
        sSortDesc: "sorting_desc",
        sSortable: "sorting",
        sSortableAsc: "sorting_asc_disabled",
        sSortableDesc: "sorting_desc_disabled",
        sSortableNone: "sorting_disabled",
        sSortColumn: "sorting_",
        sFilterInput: "",
        sLengthSelect: "",
        sScrollWrapper: "dataTables_scroll",
        sScrollHead: "dataTables_scrollHead",
        sScrollHeadInner: "dataTables_scrollHeadInner",
        sScrollBody: "dataTables_scrollBody",
        sScrollFoot: "dataTables_scrollFoot",
        sScrollFootInner: "dataTables_scrollFootInner",
        sHeaderTH: "",
        sFooterTH: "",
        sSortJUIAsc: "",
        sSortJUIDesc: "",
        sSortJUI: "",
        sSortJUIAscAllowed: "",
        sSortJUIDescAllowed: "",
        sSortJUIWrapper: "",
        sSortIcon: "",
        sJUIHeader: "",
        sJUIFooter: ""
    });
    var Ae = qt.ext.pager;
    t.extend(Ae, {
        simple: function () {
            return ["previous", "next"]
        },
        full: function () {
            return ["first", "previous", "next", "last"]
        },
        numbers: function (t, e) {
            return [Wt(t, e)]
        },
        simple_numbers: function (t, e) {
            return ["previous", Wt(t, e), "next"]
        },
        full_numbers: function (t, e) {
            return ["first", "previous", Wt(t, e), "next", "last"]
        },
        first_last_numbers: function (t, e) {
            return ["first", Wt(t, e), "last"]
        },
        _numbers: Wt,
        numbers_length: 7
    }), t.extend(!0, qt.ext.renderer, {
        pageButton: {
            _: function (e, r, o, i, l, s) {
                var u, c, f, d = e.oClasses,
                    h = e.oLanguage.oPaginate,
                    p = e.oLanguage.oAria.paginate || {},
                    g = 0,
                    b = function (n, a) {
                        var r, i, f, S, m = function (t) {
                            ut(e, t.data.action, !0)
                        };
                        for (r = 0, i = a.length; r < i; r++)
                            if (S = a[r], t.isArray(S)) f = t("<" + (S.DT_el || "div") + "/>").appendTo(n), b(f, S);
                            else {
                                switch (u = null, c = "", S) {
                                    case "ellipsis":
                                        n.append('<span class="ellipsis">&#x2026;</span>');
                                        break;
                                    case "first":
                                        u = h.sFirst, c = S + (l > 0 ? "" : " " + d.sPageButtonDisabled);
                                        break;
                                    case "previous":
                                        u = h.sPrevious, c = S + (l > 0 ? "" : " " + d.sPageButtonDisabled);
                                        break;
                                    case "next":
                                        u = h.sNext, c = S + (l < s - 1 ? "" : " " + d.sPageButtonDisabled);
                                        break;
                                    case "last":
                                        u = h.sLast, c = S + (l < s - 1 ? "" : " " + d.sPageButtonDisabled);
                                        break;
                                    default:
                                        u = S + 1, c = l === S ? d.sPageButtonActive : ""
                                }
                                null !== u && (jt(f = t("<a>", {
                                    class: d.sPageButton + " " + c,
                                    "aria-controls": e.sTableId,
                                    "aria-label": p[S],
                                    "data-dt-idx": g,
                                    tabindex: e.iTabIndex,
                                    id: 0 === o && "string" == typeof S ? e.sTableId + "_" + S : null
                                }).html(u).appendTo(n), {
                                    action: S
                                }, m), g++)
                            }
                    };
                try {
                    f = t(r).find(n.activeElement).data("dt-idx")
                } catch (t) {}
                b(t(r).empty(), i), f !== a && t(r).find("[data-dt-idx=" + f + "]").focus()
            }
        }
    }), t.extend(qt.ext.type.detect, [function (t, e) {
        var n = e.oLanguage.sDecimal;
        return ne(t, n) ? "num" + n : null
    }, function (t) {
        if (t && !(t instanceof Date) && !Yt.test(t)) return null;
        var e = Date.parse(t);
        return null !== e && !isNaN(e) || Qt(t) ? "date" : null
    }, function (t, e) {
        var n = e.oLanguage.sDecimal;
        return ne(t, n, !0) ? "num-fmt" + n : null
    }, function (t, e) {
        var n = e.oLanguage.sDecimal;
        return ae(t, n) ? "html-num" + n : null
    }, function (t, e) {
        var n = e.oLanguage.sDecimal;
        return ae(t, n, !0) ? "html-num-fmt" + n : null
    }, function (t) {
        return Qt(t) || "string" == typeof t && -1 !== t.indexOf("<") ? "html" : null
    }]), t.extend(qt.ext.type.search, {
        html: function (t) {
            return Qt(t) ? t : "string" == typeof t ? t.replace($t, " ").replace(zt, "") : ""
        },
        string: function (t) {
            return Qt(t) ? t : "string" == typeof t ? t.replace($t, " ") : t
        }
    });
    var Fe = function (t, e, n, a) {
        return 0 === t || t && "-" !== t ? (e && (t = ee(t, e)), t.replace && (n && (t = t.replace(n, "")), a && (t = t.replace(a, ""))), 1 * t) : -1 / 0
    };
    t.extend(Ut.type.order, {
        "date-pre": function (t) {
            return t = Date.parse(t), isNaN(t) ? -1 / 0 : t
        },
        "html-pre": function (t) {
            return Qt(t) ? "" : t.replace ? t.replace(/<.*?>/g, "").toLowerCase() : t + ""
        },
        "string-pre": function (t) {
            return Qt(t) ? "" : "string" == typeof t ? t.toLowerCase() : t.toString ? t.toString() : ""
        },
        "string-asc": function (t, e) {
            return t < e ? -1 : t > e ? 1 : 0
        },
        "string-desc": function (t, e) {
            return t < e ? 1 : t > e ? -1 : 0
        }
    }), Et(""), t.extend(!0, qt.ext.renderer, {
        header: {
            _: function (e, n, a, r) {
                t(e.nTable).on("order.dt.DT", function (t, o, i, l) {
                    e === o && (t = a.idx, n.removeClass(a.sSortingClass + " " + r.sSortAsc + " " + r.sSortDesc).addClass("asc" == l[t] ? r.sSortAsc : "desc" == l[t] ? r.sSortDesc : a.sSortingClass))
                })
            },
            jqueryui: function (e, n, a, r) {
                t("<div/>").addClass(r.sSortJUIWrapper).append(n.contents()).append(t("<span/>").addClass(r.sSortIcon + " " + a.sSortingClassJUI)).appendTo(n), t(e.nTable).on("order.dt.DT", function (t, o, i, l) {
                    e === o && (t = a.idx, n.removeClass(r.sSortAsc + " " + r.sSortDesc).addClass("asc" == l[t] ? r.sSortAsc : "desc" == l[t] ? r.sSortDesc : a.sSortingClass), n.find("span." + r.sSortIcon).removeClass(r.sSortJUIAsc + " " + r.sSortJUIDesc + " " + r.sSortJUI + " " + r.sSortJUIAscAllowed + " " + r.sSortJUIDescAllowed).addClass("asc" == l[t] ? r.sSortJUIAsc : "desc" == l[t] ? r.sSortJUIDesc : a.sSortingClassJUI))
                })
            }
        }
    });
    var Le = function (t) {
        return "string" == typeof t ? t.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : t
    };
    return qt.render = {
        number: function (t, e, n, a, r) {
            return {
                display: function (o) {
                    if ("number" != typeof o && "string" != typeof o) return o;
                    var i = 0 > o ? "-" : "",
                        l = parseFloat(o);
                    return isNaN(l) ? Le(o) : (l = l.toFixed(n), o = Math.abs(l), l = parseInt(o, 10), o = n ? e + (o - l).toFixed(n).substring(2) : "", i + (a || "") + l.toString().replace(/\B(?=(\d{3})+(?!\d))/g, t) + o + (r || ""))
                }
            }
        },
        text: function () {
            return {
                display: Le
            }
        }
    }, t.extend(qt.ext.internal, {
        _fnExternApiFunc: Bt,
        _fnBuildAjax: B,
        _fnAjaxUpdate: U,
        _fnAjaxParameters: V,
        _fnAjaxUpdateDraw: X,
        _fnAjaxDataSrc: J,
        _fnAddColumn: f,
        _fnColumnOptions: d,
        _fnAdjustColumnSizing: h,
        _fnVisibleToColumnIndex: p,
        _fnColumnIndexToVisible: g,
        _fnVisbleColumns: b,
        _fnGetColumns: S,
        _fnColumnTypes: m,
        _fnApplyColumnDefs: v,
        _fnHungarianMap: r,
        _fnCamelToHungarian: o,
        _fnLanguageCompat: i,
        _fnBrowserDetect: u,
        _fnAddData: D,
        _fnAddTr: y,
        _fnNodeToDataIndex: function (t, e) {
            return e._DT_RowIndex !== a ? e._DT_RowIndex : null
        },
        _fnNodeToColumnIndex: function (e, n, a) {
            return t.inArray(a, e.aoData[n].anCells)
        },
        _fnGetCellData: _,
        _fnSetCellData: T,
        _fnSplitObjNotation: C,
        _fnGetObjectDataFn: w,
        _fnSetObjectDataFn: x,
        _fnGetDataMaster: I,
        _fnClearTable: A,
        _fnDeleteIndex: F,
        _fnInvalidate: L,
        _fnGetRowElements: R,
        _fnCreateTr: P,
        _fnBuildHead: N,
        _fnDrawHead: H,
        _fnDraw: O,
        _fnReDraw: k,
        _fnAddOptionsHtml: M,
        _fnDetectHeader: W,
        _fnGetUniqueThs: E,
        _fnFeatureHtmlFilter: q,
        _fnFilterComplete: G,
        _fnFilterCustom: $,
        _fnFilterColumn: z,
        _fnFilter: Y,
        _fnFilterCreateSearch: Z,
        _fnEscapeRegex: de,
        _fnFilterData: K,
        _fnFeatureHtmlInfo: et,
        _fnUpdateInfo: nt,
        _fnInfoMacros: at,
        _fnInitialise: rt,
        _fnInitComplete: ot,
        _fnLengthChange: it,
        _fnFeatureHtmlLength: lt,
        _fnFeatureHtmlPaginate: st,
        _fnPageChange: ut,
        _fnFeatureHtmlProcessing: ct,
        _fnProcessingDisplay: ft,
        _fnFeatureHtmlTable: dt,
        _fnScrollDraw: ht,
        _fnApplyToChildren: pt,
        _fnCalculateColumnWidths: gt,
        _fnThrottle: be,
        _fnConvertToWidth: bt,
        _fnGetWidestNode: St,
        _fnGetMaxLenString: mt,
        _fnStringToCss: vt,
        _fnSortFlatten: Dt,
        _fnSort: yt,
        _fnSortAria: _t,
        _fnSortListener: Tt,
        _fnSortAttachListener: Ct,
        _fnSortingClasses: wt,
        _fnSortData: xt,
        _fnSaveState: It,
        _fnLoadState: At,
        _fnSettingsFromNode: Ft,
        _fnLog: Lt,
        _fnMap: Rt,
        _fnBindAction: jt,
        _fnCallbackReg: Nt,
        _fnCallbackFire: Ht,
        _fnLengthOverflow: Ot,
        _fnRenderer: kt,
        _fnDataSource: Mt,
        _fnRowAttributes: j,
        _fnExtend: Pt,
        _fnCalculateEnd: function () {}
    }), t.fn.dataTable = qt, qt.$ = t, t.fn.dataTableSettings = qt.settings, t.fn.dataTableExt = qt.ext, t.fn.DataTable = function (e) {
        return t(this).dataTable(e).api()
    }, t.each(qt, function (e, n) {
        t.fn.DataTable[e] = n
    }), t.fn.dataTable
}); /*!DataTables Bootstrap 4 integration Â©2011-2017 SpryMedia Ltd - datatables.net/license*/
! function (e) {
    "function" == typeof define && define.amd ? define(["jquery", "datatables.net"], function (a) {
        return e(a, window, document)
    }) : "object" == typeof exports ? module.exports = function (a, t) {
        return a || (a = window), t && t.fn.dataTable || (t = require("datatables.net")(a, t).$), e(t, a, a.document)
    } : e(jQuery, window, document)
}(function (e, a, t, n) {
    var o = e.fn.dataTable;
    return e.extend(!0, o.defaults, {
        dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        renderer: "bootstrap"
    }), e.extend(o.ext.classes, {
        sWrapper: "dataTables_wrapper dt-bootstrap4",
        sFilterInput: "form-control form-control-sm",
        sLengthSelect: "custom-select custom-select-sm form-control form-control-sm",
        sProcessing: "dataTables_processing card",
        sPageButton: "paginate_button page-item"
    }), o.ext.renderer.pageButton.bootstrap = function (a, s, r, d, i, l) {
        var c, u, p, f = new o.Api(a),
            m = a.oClasses,
            b = a.oLanguage.oPaginate,
            g = a.oLanguage.oAria.paginate || {},
            x = 0,
            w = function (t, n) {
                var o, s, d, p, h = function (a) {
                    a.preventDefault(), !e(a.currentTarget).hasClass("disabled") && f.page() != a.data.action && f.page(a.data.action).draw("page")
                };
                for (o = 0, s = n.length; o < s; o++)
                    if (p = n[o], e.isArray(p)) w(t, p);
                    else {
                        switch (u = c = "", p) {
                            case "ellipsis":
                                c = "&#x2026;", u = "disabled";
                                break;
                            case "first":
                                c = b.sFirst, u = p + (0 < i ? "" : " disabled");
                                break;
                            case "previous":
                                c = b.sPrevious, u = p + (0 < i ? "" : " disabled");
                                break;
                            case "next":
                                c = b.sNext, u = p + (i < l - 1 ? "" : " disabled");
                                break;
                            case "last":
                                c = b.sLast, u = p + (i < l - 1 ? "" : " disabled");
                                break;
                            default:
                                c = p + 1, u = i === p ? "active" : ""
                        }
                        c && (d = e("<li>", {
                            class: m.sPageButton + " " + u,
                            id: 0 === r && "string" == typeof p ? a.sTableId + "_" + p : null
                        }).append(e("<a>", {
                            href: "#",
                            "aria-controls": a.sTableId,
                            "aria-label": g[p],
                            "data-dt-idx": x,
                            tabindex: a.iTabIndex,
                            class: "page-link"
                        }).html(c)).appendTo(t), a.oApi._fnBindAction(d, {
                            action: p
                        }, h), x++)
                    }
            };
        try {
            p = e(s).find(t.activeElement).data("dt-idx")
        } catch (e) {}
        w(e(s).empty().html('<ul class="pagination"/>').children("ul"), d), p !== n && e(s).find("[data-dt-idx=" + p + "]").focus()
    }, o
});
! function (a, b) {
    window.console = window.console || {
        log: function () {},
        error: function () {}
    }, a.fn.footable = function (a, c) {
        return a = a || {}, this.filter("table").each(function (d, e) {
            b.init(e, a, c)
        })
    };
    var c = {
        events: []
    };
    b.__debug__ = JSON.parse(localStorage.getItem("footable_debug")) || !1, b.__debug_options__ = JSON.parse(localStorage.getItem("footable_debug_options")) || c, b.debug = function (d, e) {
        return b.is["boolean"](d) ? (b.__debug__ = d, void(b.__debug__ ? (localStorage.setItem("footable_debug", JSON.stringify(b.__debug__)), b.__debug_options__ = a.extend(!0, {}, c, e || {}), b.is.hash(e) && localStorage.setItem("footable_debug_options", JSON.stringify(b.__debug_options__))) : (localStorage.removeItem("footable_debug"), localStorage.removeItem("footable_debug_options")))) : b.__debug__
    }, b.get = function (b) {
        return a(b).first().data("__FooTable__")
    }, b.init = function (a, c, d) {
        var e = b.get(a);
        return e instanceof b.Table && e.destroy(), new b.Table(a, c, d)
    }, b.getRow = function (b) {
        var c = a(b).closest("tr");
        return c.hasClass("footable-detail-row") && (c = c.prev()), c.data("__FooTableRow__")
    }
}(jQuery, FooTable = window.FooTable || {}),
function (a) {
    var b = function () {
        return !0
    };
    a.arr = {}, a.arr.each = function (b, c) {
        if (a.is.array(b) && a.is.fn(c))
            for (var d = 0, e = b.length; e > d && c(b[d], d) !== !1; d++);
    }, a.arr.get = function (b, c) {
        var d = [];
        if (!a.is.array(b)) return d;
        if (!a.is.fn(c)) return b;
        for (var e = 0, f = b.length; f > e; e++) c(b[e], e) && d.push(b[e]);
        return d
    }, a.arr.any = function (c, d) {
        if (!a.is.array(c)) return !1;
        d = a.is.fn(d) ? d : b;
        for (var e = 0, f = c.length; f > e; e++)
            if (d(c[e], e)) return !0;
        return !1
    }, a.arr.contains = function (b, c) {
        if (!a.is.array(b) || a.is.undef(c)) return !1;
        for (var d = 0, e = b.length; e > d; d++)
            if (b[d] == c) return !0;
        return !1
    }, a.arr.first = function (c, d) {
        if (!a.is.array(c)) return null;
        d = a.is.fn(d) ? d : b;
        for (var e = 0, f = c.length; f > e; e++)
            if (d(c[e], e)) return c[e];
        return null
    }, a.arr.map = function (b, c) {
        var d = [],
            e = null;
        if (!a.is.array(b) || !a.is.fn(c)) return d;
        for (var f = 0, g = b.length; g > f; f++) null != (e = c(b[f], f)) && d.push(e);
        return d
    }, a.arr.remove = function (b, c) {
        var d = [],
            e = [];
        if (!a.is.array(b) || !a.is.fn(c)) return e;
        for (var f = 0, g = b.length; g > f; f++) c(b[f], f, e) && (d.push(f), e.push(b[f]));
        for (d.sort(function (a, b) {
                return b - a
            }), f = 0, g = d.length; g > f; f++) {
            var h = d[f] - f;
            b.splice(h, 1)
        }
        return e
    }, a.arr["delete"] = function (b, c) {
        var d = -1,
            e = null;
        if (!a.is.array(b) || a.is.undef(c)) return e;
        for (var f = 0, g = b.length; g > f; f++)
            if (b[f] == c) {
                d = f, e = b[f];
                break
            } return -1 != d && b.splice(d, 1), e
    }, a.arr.replace = function (a, b, c) {
        var d = a.indexOf(b); - 1 !== d && (a[d] = c)
    }
}(FooTable),
function (a) {
    a.is = {}, a.is.type = function (a, b) {
        return typeof a === b
    }, a.is.defined = function (a) {
        return "undefined" != typeof a
    }, a.is.undef = function (a) {
        return "undefined" == typeof a
    }, a.is.array = function (a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }, a.is.date = function (a) {
        return "[object Date]" === Object.prototype.toString.call(a) && !isNaN(a.getTime())
    }, a.is["boolean"] = function (a) {
        return "[object Boolean]" === Object.prototype.toString.call(a)
    }, a.is.string = function (a) {
        return "[object String]" === Object.prototype.toString.call(a)
    }, a.is.number = function (a) {
        return "[object Number]" === Object.prototype.toString.call(a) && !isNaN(a)
    }, a.is.fn = function (b) {
        return a.is.defined(window) && b === window.alert || "[object Function]" === Object.prototype.toString.call(b)
    }, a.is.error = function (a) {
        return "[object Error]" === Object.prototype.toString.call(a)
    }, a.is.object = function (a) {
        return "[object Object]" === Object.prototype.toString.call(a)
    }, a.is.hash = function (b) {
        return a.is.object(b) && b.constructor === Object && !b.nodeType && !b.setInterval
    }, a.is.element = function (a) {
        return "object" == typeof HTMLElement ? a instanceof HTMLElement : a && "object" == typeof a && null !== a && 1 === a.nodeType && "string" == typeof a.nodeName
    }, a.is.promise = function (b) {
        return a.is.object(b) && a.is.fn(b.then) && a.is.fn(b.promise)
    }, a.is.jq = function (b) {
        return a.is.defined(window.jQuery) && b instanceof jQuery && b.length > 0
    }, a.is.moment = function (b) {
        return a.is.defined(window.moment) && a.is.object(b) && a.is["boolean"](b._isAMomentObject)
    }, a.is.emptyObject = function (b) {
        if (!a.is.hash(b)) return !1;
        for (var c in b)
            if (b.hasOwnProperty(c)) return !1;
        return !0
    }, a.is.emptyArray = function (b) {
        return a.is.array(b) ? 0 === b.length : !0
    }, a.is.emptyString = function (b) {
        return a.is.string(b) ? 0 === b.length : !0
    }
}(FooTable),
function (a) {
    a.str = {}, a.str.contains = function (b, c, d) {
        return a.is.emptyString(b) || a.is.emptyString(c) ? !1 : c.length <= b.length && -1 !== (d ? b.toUpperCase().indexOf(c.toUpperCase()) : b.indexOf(c))
    }, a.str.containsExact = function (b, c, d) {
        return a.is.emptyString(b) || a.is.emptyString(c) || c.length > b.length ? !1 : new RegExp("\\b" + a.str.escapeRegExp(c) + "\\b", d ? "i" : "").test(b)
    }, a.str.containsWord = function (b, c, d) {
        if (a.is.emptyString(b) || a.is.emptyString(c) || b.length < c.length) return !1;
        for (var e = b.split(/\W/), f = 0, g = e.length; g > f; f++)
            if (d ? e[f].toUpperCase() == c.toUpperCase() : e[f] == c) return !0;
        return !1
    }, a.str.from = function (b, c) {
        return a.is.emptyString(b) ? b : a.str.contains(b, c) ? b.substring(b.indexOf(c) + 1) : b
    }, a.str.startsWith = function (b, c) {
        return a.is.emptyString(b) ? b == c : b.slice(0, c.length) == c
    }, a.str.toCamelCase = function (b) {
        return a.is.emptyString(b) ? b : b.toUpperCase() === b ? b.toLowerCase() : b.replace(/^([A-Z])|[-\s_](\w)/g, function (b, c, d) {
            return a.is.string(d) ? d.toUpperCase() : c.toLowerCase()
        })
    }, a.str.random = function (b) {
        return b = a.is.emptyString(b) ? "" : b, b + Math.random().toString(36).substr(2, 9)
    }, a.str.escapeRegExp = function (b) {
        return a.is.emptyString(b) ? b : b.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }
}(FooTable),
function (a) {
    "use strict";

    function b() {}
    Object.create || (Object.create = function () {
        var b = function () {};
        return function (c) {
            if (arguments.length > 1) throw Error("Second argument not supported");
            if (!a.is.object(c)) throw TypeError("Argument must be an object");
            b.prototype = c;
            var d = new b;
            return b.prototype = null, d
        }
    }());
    var c = /xyz/.test(function () {
        xyz
    }) ? /\b_super\b/ : /.*/;
    b.__extend__ = function (b, d, e, f) {
        b[d] = a.is.fn(f) && c.test(e) ? function (a, b) {
            return function () {
                var a, c;
                return a = this._super, this._super = f, c = b.apply(this, arguments), this._super = a, c
            }
        }(d, e) : e
    }, b.extend = function (d, e) {
        function f(b, d, e, f) {
            b[d] = a.is.fn(f) && c.test(e) ? function (a, b, c) {
                return function () {
                    var a, d;
                    return a = this._super, this._super = c, d = b.apply(this, arguments), this._super = a, d
                }
            }(d, e, f) : e
        }
        var g = Array.prototype.slice.call(arguments);
        if (d = g.shift(), e = g.shift(), a.is.hash(d)) {
            var h = Object.create(this.prototype),
                i = this.prototype;
            for (var j in d) "__ctor__" !== j && f(h, j, d[j], i[j]);
            var k = a.is.fn(h.__ctor__) ? h.__ctor__ : function () {
                if (!a.is.fn(this.construct)) throw new SyntaxError('FooTable class objects must be constructed with the "new" keyword.');
                this.construct.apply(this, arguments)
            };
            return h.construct = a.is.fn(h.construct) ? h.construct : function () {}, k.prototype = h, h.constructor = k, k.extend = b.extend, k
        }
        a.is.string(d) && a.is.fn(e) && f(this.prototype, d, e, this.prototype[d])
    }, a.Class = b, a.ClassFactory = a.Class.extend({
        construct: function () {
            this.registered = {}
        },
        contains: function (b) {
            return a.is.defined(this.registered[b])
        },
        names: function () {
            var a, b = [];
            for (a in this.registered) this.registered.hasOwnProperty(a) && b.push(a);
            return b
        },
        register: function (b, c, d) {
            if (a.is.string(b) && a.is.fn(c)) {
                var e = this.registered[b];
                this.registered[b] = {
                    name: b,
                    klass: c,
                    priority: a.is.number(d) ? d : a.is.defined(e) ? e.priority : 0
                }
            }
        },
        load: function (b, c, d) {
            var e, f, g = this,
                h = Array.prototype.slice.call(arguments),
                i = [],
                j = [];
            b = h.shift() || {};
            for (e in g.registered)
                if (g.registered.hasOwnProperty(e)) {
                    var k = g.registered[e];
                    b.hasOwnProperty(e) && (f = b[e], a.is.string(f) && (f = a.getFnPointer(b[e])), a.is.fn(f) && (k = {
                        name: e,
                        klass: f,
                        priority: g.registered[e].priority
                    })), i.push(k)
                } for (e in b) b.hasOwnProperty(e) && !g.registered.hasOwnProperty(e) && (f = b[e], a.is.string(f) && (f = a.getFnPointer(b[e])), a.is.fn(f) && i.push({
                name: e,
                klass: f,
                priority: 0
            }));
            return i.sort(function (a, b) {
                return b.priority - a.priority
            }), a.arr.each(i, function (b) {
                a.is.fn(b.klass) && j.push(g._make(b.klass, h))
            }), j
        },
        make: function (b, c, d) {
            var e, f = this,
                g = Array.prototype.slice.call(arguments);
            return b = g.shift(), e = f.registered[b], a.is.fn(e.klass) ? f._make(e.klass, g) : null
        },
        _make: function (a, b) {
            function c() {
                return a.apply(this, b)
            }
            return c.prototype = a.prototype, new c
        }
    })
}(FooTable),
function (a, b) {
    b.css2json = function (c) {
        if (b.is.emptyString(c)) return {};
        for (var d, e, f, g = {}, h = c.split(";"), i = 0, j = h.length; j > i; i++) b.is.emptyString(h[i]) || (d = h[i].split(":"), b.is.emptyString(d[0]) || b.is.emptyString(d[1]) || (e = b.str.toCamelCase(a.trim(d[0])), f = a.trim(d[1]), g[e] = f));
        return g
    }, b.getFnPointer = function (a) {
        if (b.is.emptyString(a)) return null;
        var c = window,
            d = a.split(".");
        return b.arr.each(d, function (a) {
            c[a] && (c = c[a])
        }), b.is.fn(c) ? c : null
    }, b.checkFnValue = function (a, c, d) {
        function e(a, c, d) {
            return b.is.fn(c) ? function () {
                return c.apply(a, arguments)
            } : d
        }
        return d = b.is.fn(d) ? d : null, b.is.fn(c) ? e(a, c, d) : b.is.type(c, "string") ? e(a, b.getFnPointer(c), d) : d
    }
}(jQuery, FooTable),
function (a, b) {
    b.Cell = b.Class.extend({
        construct: function (a, b, c, d) {
            this.ft = a, this.row = b, this.column = c, this.created = !1, this.define(d)
        },
        define: function (c) {
            this.$el = b.is.element(c) || b.is.jq(c) ? a(c) : null, this.$detail = null;
            var d = b.is.hash(c) && b.is.hash(c.options) && b.is.defined(c.value);
            this.value = this.column.parser.call(this.column, b.is.jq(this.$el) ? this.$el : d ? c.value : c, this.ft.o), this.o = a.extend(!0, {
                classes: null,
                style: null
            }, d ? c.options : {}), this.classes = b.is.jq(this.$el) && this.$el.attr("class") ? this.$el.attr("class").match(/\S+/g) : b.is.array(this.o.classes) ? this.o.classes : b.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : [], this.style = b.is.jq(this.$el) && this.$el.attr("style") ? b.css2json(this.$el.attr("style")) : b.is.hash(this.o.style) ? this.o.style : b.is.string(this.o.style) ? b.css2json(this.o.style) : {}
        },
        $create: function () {
            this.created || ((this.$el = b.is.jq(this.$el) ? this.$el : a("<td/>")).data("value", this.value).contents().detach().end().append(this.format(this.value)), this._setClasses(this.$el), this._setStyle(this.$el), this.$detail = a("<tr/>").addClass(this.row.classes.join(" ")).data("__FooTableCell__", this).append(a("<th/>")).append(a("<td/>")), this.created = !0)
        },
        collapse: function () {
            this.created && (this.$detail.children("th").html(this.column.title), this.$el.clone().attr("id", this.$el.attr("id") ? this.$el.attr("id") + "-detail" : void 0).css("display", "table-cell").html("").append(this.$el.contents().detach()).replaceAll(this.$detail.children("td").first()), b.is.jq(this.$detail.parent()) || this.$detail.appendTo(this.row.$details.find(".footable-details > tbody")))
        },
        restore: function () {
            if (this.created) {
                if (b.is.jq(this.$detail.parent())) {
                    var a = this.$detail.children("td").first();
                    this.$el.attr("class", a.attr("class")).attr("style", a.attr("style")).css("display", this.column.hidden || !this.column.visible ? "none" : "table-cell").append(a.contents().detach())
                }
                this.$detail.detach()
            }
        },
        parse: function () {
            return this.column.parser.call(this.column, this.$el, this.ft.o)
        },
        format: function (a) {
            return this.column.formatter.call(this.column, a, this.ft.o, this.row.value)
        },
        val: function (c, d, e) {
            if (b.is.undef(c)) return this.value;
            var f = this,
                g = b.is.hash(c) && b.is.hash(c.options) && b.is.defined(c.value);
            if (this.o = a.extend(!0, {
                    classes: f.classes,
                    style: f.style
                }, g ? c.options : {}), this.value = g ? c.value : c, this.classes = b.is.array(this.o.classes) ? this.o.classes : b.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : [], this.style = b.is.hash(this.o.style) ? this.o.style : b.is.string(this.o.style) ? b.css2json(this.o.style) : {}, e = b.is["boolean"](e) ? e : !0, this.created && e) {
                this.$el.data("value", this.value).empty();
                var h = this.$detail.children("td").first().empty(),
                    i = b.is.jq(this.$detail.parent()) ? h : this.$el;
                i.append(this.format(this.value)), this._setClasses(i), this._setStyle(i), (b.is["boolean"](d) ? d : !0) && this.row.draw()
            }
        },
        _setClasses: function (a) {
            var c = !b.is.emptyArray(this.column.classes),
                d = !b.is.emptyArray(this.classes),
                e = null;
            a.removeAttr("class"), (c || d) && (c && d ? e = this.classes.concat(this.column.classes).join(" ") : c ? e = this.column.classes.join(" ") : d && (e = this.classes.join(" ")), b.is.emptyString(e) || a.addClass(e))
        },
        _setStyle: function (c) {
            var d = !b.is.emptyObject(this.column.style),
                e = !b.is.emptyObject(this.style),
                f = null;
            c.removeAttr("style"), (d || e) && (d && e ? f = a.extend({}, this.column.style, this.style) : d ? f = this.column.style : e && (f = this.style), b.is.hash(f) && c.css(f))
        }
    })
}(jQuery, FooTable),
function (a, b) {
    b.Column = b.Class.extend({
        construct: function (a, c, d) {
            this.ft = a, this.type = b.is.emptyString(d) ? "text" : d, this.virtual = b.is["boolean"](c.virtual) ? c.virtual : !1, this.$el = b.is.jq(c.$el) ? c.$el : null, this.index = b.is.number(c.index) ? c.index : -1, this.internal = !1, this.define(c), this.$create()
        },
        define: function (a) {
            this.hidden = b.is["boolean"](a.hidden) ? a.hidden : !1, this.visible = b.is["boolean"](a.visible) ? a.visible : !0, this.name = b.is.string(a.name) ? a.name : null, null == this.name && (this.name = "col" + (a.index + 1)), this.title = b.is.string(a.title) ? a.title : null, !this.virtual && null == this.title && b.is.jq(this.$el) && (this.title = this.$el.html()), null == this.title && (this.title = "Column " + (a.index + 1)), this.style = b.is.hash(a.style) ? a.style : b.is.string(a.style) ? b.css2json(a.style) : {}, this.classes = b.is.array(a.classes) ? a.classes : b.is.string(a.classes) ? a.classes.match(/\S+/g) : [], this.parser = b.checkFnValue(this, a.parser, this.parser), this.formatter = b.checkFnValue(this, a.formatter, this.formatter)
        },
        $create: function () {
            (this.$el = !this.virtual && b.is.jq(this.$el) ? this.$el : a("<th/>")).html(this.title).addClass(this.classes.join(" ")).css(this.style)
        },
        parser: function (c) {
            if (b.is.element(c) || b.is.jq(c)) {
                var d = a(c).data("value");
                return b.is.defined(d) ? d : a(c).html()
            }
            return b.is.defined(c) && null != c ? c + "" : null
        },
        formatter: function (a, b, c) {
            return null == a ? "" : a
        },
        createCell: function (a) {
            var c = b.is.jq(a.$el) ? a.$el.children("td,th").get(this.index) : null,
                d = b.is.hash(a.value) ? a.value[this.name] : null;
            return new b.Cell(this.ft, a, this, c || d)
        }
    }), b.columns = new b.ClassFactory, b.columns.register("text", b.Column)
}(jQuery, FooTable),
function (a, b) {
    b.Component = b.Class.extend({
        construct: function (a, c) {
            if (!(a instanceof b.Table)) throw new TypeError("The instance parameter must be an instance of FooTable.Table.");
            this.ft = a, this.enabled = b.is["boolean"](c) ? c : !1
        },
        preinit: function (a) {},
        init: function () {},
        destroy: function () {},
        predraw: function () {},
        draw: function () {},
        postdraw: function () {}
    }), b.components = new b.ClassFactory
}(jQuery, FooTable),
function (a, b) {
    b.Defaults = function () {
        this.stopPropagation = !1, this.on = null
    }, b.defaults = new b.Defaults
}(jQuery, FooTable),
function (a, b) {
    b.Row = b.Class.extend({
        construct: function (a, b, c) {
            this.ft = a, this.columns = b, this.created = !1, this.define(c)
        },
        define: function (c) {
            this.$el = b.is.element(c) || b.is.jq(c) ? a(c) : null, this.$toggle = a("<span/>", {
                "class": "footable-toggle fooicon fooicon-plus"
            });
            var d = b.is.hash(c),
                e = d && b.is.hash(c.options) && b.is.hash(c.value);
            this.value = d ? e ? c.value : c : null, this.o = a.extend(!0, {
                expanded: !1,
                classes: null,
                style: null
            }, e ? c.options : {}), this.expanded = b.is.jq(this.$el) ? this.$el.data("expanded") || this.o.expanded : this.o.expanded, this.classes = b.is.jq(this.$el) && this.$el.attr("class") ? this.$el.attr("class").match(/\S+/g) : b.is.array(this.o.classes) ? this.o.classes : b.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : [], this.style = b.is.jq(this.$el) && this.$el.attr("style") ? b.css2json(this.$el.attr("style")) : b.is.hash(this.o.style) ? this.o.style : b.is.string(this.o.style) ? b.css2json(this.o.style) : {}, this.cells = this.createCells();
            var f = this;
            f.value = {}, b.arr.each(f.cells, function (a) {
                f.value[a.column.name] = a.val()
            })
        },
        $create: function () {
            if (!this.created) {
                (this.$el = b.is.jq(this.$el) ? this.$el : a("<tr/>")).data("__FooTableRow__", this), this._setClasses(this.$el), this._setStyle(this.$el), "last" == this.ft.rows.toggleColumn && this.$toggle.addClass("last-column"), this.$details = a("<tr/>", {
                    "class": "footable-detail-row"
                }).append(a("<td/>", {
                    colspan: this.ft.columns.visibleColspan
                }).append(a("<table/>", {
                    "class": "footable-details " + this.ft.classes.join(" ")
                }).append("<tbody/>")));
                var c = this;
                b.arr.each(c.cells, function (a) {
                    a.created || a.$create(), c.$el.append(a.$el)
                }), c.$el.off("click.ft.row").on("click.ft.row", {
                    self: c
                }, c._onToggle), this.created = !0
            }
        },
        createCells: function () {
            var a = this;
            return b.arr.map(a.columns, function (b) {
                return b.createCell(a)
            })
        },
        val: function (c, d, e) {
            var f = this;
            if (!b.is.hash(c)) return b.is.hash(this.value) && !b.is.emptyObject(this.value) || (this.value = {}, b.arr.each(this.cells, function (a) {
                a.column.internal || (f.value[a.column.name] = a.val())
            })), this.value;
            this.collapse(!1);
            var g = b.is.hash(c),
                h = g && b.is.hash(c.options) && b.is.hash(c.value);
            if (this.o = a.extend(!0, {
                    expanded: f.expanded,
                    classes: f.classes,
                    style: f.style
                }, h ? c.options : {}), this.expanded = this.o.expanded, this.classes = b.is.array(this.o.classes) ? this.o.classes : b.is.string(this.o.classes) ? this.o.classes.match(/\S+/g) : [], this.style = b.is.hash(this.o.style) ? this.o.style : b.is.string(this.o.style) ? b.css2json(this.o.style) : {}, g)
                if (h && (c = c.value), b.is.hash(this.value))
                    for (var i in c) c.hasOwnProperty(i) && (this.value[i] = c[i]);
                else this.value = c;
            else this.value = null;
            e = b.is["boolean"](e) ? e : !0, b.arr.each(this.cells, function (a) {
                !a.column.internal && b.is.defined(f.value[a.column.name]) && a.val(f.value[a.column.name], !1, e)
            }), this.created && e && (this._setClasses(this.$el), this._setStyle(this.$el), (b.is["boolean"](d) ? d : !0) && this.draw())
        },
        _setClasses: function (a) {
            var c = !b.is.emptyArray(this.classes),
                d = null;
            a.removeAttr("class"), c && (d = this.classes.join(" "), b.is.emptyString(d) || a.addClass(d))
        },
        _setStyle: function (a) {
            var c = !b.is.emptyObject(this.style),
                d = null;
            a.removeAttr("style"), c && (d = this.style, b.is.hash(d) && a.css(d))
        },
        expand: function () {
            if (this.created) {
                var a = this;
                a.ft.raise("expand.ft.row", [a]).then(function () {
                    a.__hidden__ = b.arr.map(a.cells, function (a) {
                        return a.column.hidden && a.column.visible ? a : null
                    }), a.__hidden__.length > 0 && (a.$details.insertAfter(a.$el).children("td").first().attr("colspan", a.ft.columns.visibleColspan), b.arr.each(a.__hidden__, function (a) {
                        a.collapse()
                    })), a.$el.attr("data-expanded", !0), a.$toggle.removeClass("fooicon-plus").addClass("fooicon-minus"), a.expanded = !0, a.ft.raise("expanded.ft.row", [a])
                })
            }
        },
        collapse: function (a) {
            if (this.created) {
                var c = this;
                c.ft.raise("collapse.ft.row", [c]).then(function () {
                    b.arr.each(c.__hidden__, function (a) {
                        a.restore()
                    }), c.$details.detach(), c.$el.removeAttr("data-expanded"), c.$toggle.removeClass("fooicon-minus").addClass("fooicon-plus"), (b.is["boolean"](a) ? a : !0) && (c.expanded = !1), c.ft.raise("collapsed.ft.row", [c])
                })
            }
        },
        predraw: function (a) {
            this.created && (this.expanded && this.collapse(!1), this.$toggle.detach(), a = b.is["boolean"](a) ? a : !0, a && this.$el.detach())
        },
        draw: function (a) {
            this.created || this.$create(), b.is.jq(a) && a.append(this.$el);
            var c = this;
            b.arr.each(c.cells, function (a) {
                a.$el.css("display", a.column.hidden || !a.column.visible ? "none" : "table-cell"), c.ft.rows.showToggle && c.ft.columns.hasHidden && ("first" == c.ft.rows.toggleColumn && a.column.index == c.ft.columns.firstVisibleIndex || "last" == c.ft.rows.toggleColumn && a.column.index == c.ft.columns.lastVisibleIndex) && a.$el.prepend(c.$toggle), a.$el.add(a.column.$el).removeClass("footable-first-visible footable-last-visible"), a.column.index == c.ft.columns.firstVisibleIndex && a.$el.add(a.column.$el).addClass("footable-first-visible"), a.column.index == c.ft.columns.lastVisibleIndex && a.$el.add(a.column.$el).addClass("footable-last-visible")
            }), this.expanded && this.expand()
        },
        toggle: function () {
            this.created && this.ft.columns.hasHidden && (this.expanded ? this.collapse() : this.expand())
        },
        _onToggle: function (b) {
            var c = b.data.self;
            a(b.target).is(c.ft.rows.toggleSelector) && c.toggle()
        }
    })
}(jQuery, FooTable),
function (a, b) {
    b.instances = [], b.Table = b.Class.extend({
        construct: function (c, d, e) {
            this._resizeTimeout = null, this.id = b.instances.push(this), this.initialized = !1, this.$el = (b.is.jq(c) ? c : a(c)).first(), this.$loader = a("<div/>", {
                "class": "footable-loader"
            }).append(a("<span/>", {
                "class": "fooicon fooicon-loader"
            })), this.o = a.extend(!0, {}, b.defaults, d), this.data = this.$el.data() || {}, this.classes = [], this.components = b.components.load(b.is.hash(this.data.components) ? this.data.components : this.o.components, this), this.breakpoints = this.use(FooTable.Breakpoints), this.columns = this.use(FooTable.Columns), this.rows = this.use(FooTable.Rows), this._construct(e)
        },
        _construct: function (a) {
            var c = this;
            return this._preinit().then(function () {
                return c._init().then(function () {
                    return c.raise("ready.ft.table").then(function () {
                        b.is.fn(a) && a.call(c, c)
                    })
                })
            }).always(function (a) {
                c.$el.show(), b.is.error(a) && console.error("FooTable: unhandled error thrown during initialization.", a)
            })
        },
        _preinit: function () {
            var a = this;
            return this.raise("preinit.ft.table", [a.data]).then(function () {
                var c = (a.$el.attr("class") || "").match(/\S+/g) || [];
                a.o.ajax = b.checkFnValue(a, a.data.ajax, a.o.ajax), a.o.stopPropagation = b.is["boolean"](a.data.stopPropagation) ? a.data.stopPropagation : a.o.stopPropagation;
                for (var d = 0, e = c.length; e > d; d++) b.str.startsWith(c[d], "footable") || a.classes.push(c[d]);
                return a.$el.hide().after(a.$loader), a.execute(!1, !1, "preinit", a.data)
            })
        },
        _init: function () {
            var c = this;
            return c.raise("init.ft.table").then(function () {
                var d = c.$el.children("thead"),
                    e = c.$el.children("tbody"),
                    f = c.$el.children("tfoot");
                return c.$el.addClass("footable footable-" + c.id), b.is.hash(c.o.on) && c.$el.on(c.o.on), 0 == f.length && c.$el.append(f = a("<tfoot/>")), 0 == e.length && c.$el.append("<tbody/>"), 0 == d.length && c.$el.prepend(d = a("<thead/>")), c.execute(!1, !0, "init").then(function () {
                    return c.$el.data("__FooTable__", c), 0 == f.children("tr").length && f.remove(), 0 == d.children("tr").length && d.remove(), c.raise("postinit.ft.table").then(function () {
                        return c.draw()
                    }).always(function () {
                        a(window).off("resize.ft" + c.id, c._onWindowResize).on("resize.ft" + c.id, {
                            self: c
                        }, c._onWindowResize), c.initialized = !0
                    })
                })
            })
        },
        destroy: function () {
            var c = this;
            return c.raise("destroy.ft.table").then(function () {
                return c.execute(!0, !0, "destroy").then(function () {
                    c.$el.removeData("__FooTable__").removeClass("footable-" + c.id), b.is.hash(c.o.on) && c.$el.off(c.o.on), a(window).off("resize.ft" + c.id, c._onWindowResize), c.initialized = !1, b.instances[c.id] = null
                })
            }).fail(function (a) {
                b.is.error(a) && console.error("FooTable: unhandled error thrown while destroying the plugin.", a)
            })
        },
        raise: function (c, d) {
            var e = this,
                f = b.__debug__ && (b.is.emptyArray(b.__debug_options__.events) || b.arr.any(b.__debug_options__.events, function (a) {
                    return b.str.contains(c, a)
                }));
            return d = d || [], d.unshift(this), a.Deferred(function (b) {
                var g = a.Event(c);
                1 == e.o.stopPropagation && e.$el.one(c, function (a) {
                    a.stopPropagation()
                }), f && console.log("FooTable:" + c + ": ", d), e.$el.trigger(g, d), g.isDefaultPrevented() ? (f && console.log('FooTable: default prevented for the "' + c + '" event.'), b.reject(g)) : b.resolve(g)
            })
        },
        use: function (a) {
            for (var b = 0, c = this.components.length; c > b; b++)
                if (this.components[b] instanceof a) return this.components[b];
            return null
        },
        draw: function () {
            var a = this,
                c = a.$el.clone().insertBefore(a.$el);
            return a.$el.detach(), a.execute(!1, !0, "predraw").then(function () {
                return a.raise("predraw.ft.table").then(function () {
                    return a.execute(!1, !0, "draw").then(function () {
                        return a.raise("draw.ft.table").then(function () {
                            return a.execute(!1, !0, "postdraw").then(function () {
                                return a.raise("postdraw.ft.table")
                            })
                        })
                    })
                })
            }).fail(function (a) {
                b.is.error(a) && console.error("FooTable: unhandled error thrown during a draw operation.", a)
            }).always(function () {
                c.replaceWith(a.$el), a.$loader.remove()
            })
        },
        execute: function (a, c, d, e, f) {
            var g = this,
                h = Array.prototype.slice.call(arguments);
            a = h.shift(), c = h.shift();
            var i = c ? b.arr.get(g.components, function (a) {
                return a.enabled
            }) : g.components.slice(0);
            return h.unshift(a ? i.reverse() : i), g._execute.apply(g, h)
        },
        _execute: function (c, d, e, f) {
            if (!c || !c.length) return a.when();
            var g, h = this,
                i = Array.prototype.slice.call(arguments);
            return c = i.shift(), d = i.shift(), g = c.shift(), b.is.fn(g[d]) ? a.Deferred(function (a) {
                try {
                    var c = g[d].apply(g, i);
                    if (b.is.promise(c)) return c.then(a.resolve, a.reject);
                    a.resolve(c)
                } catch (e) {
                    a.reject(e)
                }
            }).then(function () {
                return h._execute.apply(h, [c, d].concat(i))
            }) : h._execute.apply(h, [c, d].concat(i))
        },
        _onWindowResize: function (a) {
            var b = a.data.self;
            null != b._resizeTimeout && clearTimeout(b._resizeTimeout), b._resizeTimeout = setTimeout(function () {
                b._resizeTimeout = null, b.raise("resize.ft.table").then(function () {
                    b.breakpoints.check()
                })
            }, 300)
        }
    })
}(jQuery, FooTable),
function (a, b) {
    b.ArrayColumn = b.Column.extend({
        construct: function (a, b) {
            this._super(a, b, "array")
        },
        parser: function (c) {
            if (b.is.element(c) || b.is.jq(c)) {
                var d = a(c),
                    e = d.data("value");
                if (b.is.array(e)) return e;
                e = d.html();
                try {
                    e = JSON.parse(e)
                } catch (f) {
                    e = null
                }
                return b.is.array(e) ? e : null
            }
            return b.is.array(c) ? c : null
        },
        formatter: function (a, c, d) {
            return b.is.array(a) ? JSON.stringify(a) : ""
        }
    }), b.columns.register("array", b.ArrayColumn)
}(jQuery, FooTable),
function (a, b) {
    b.is.undef(window.moment) || (b.DateColumn = b.Column.extend({
        construct: function (a, c) {
            this._super(a, c, "date"), this.formatString = b.is.string(c.formatString) ? c.formatString : "MM-DD-YYYY"
        },
        parser: function (c) {
            if (b.is.element(c) || b.is.jq(c)) {
                var d = a(c).data("value");
                c = b.is.defined(d) ? d : a(c).text(), b.is.string(c) && (c = isNaN(c) ? c : +c)
            }
            if (b.is.date(c)) return moment(c);
            if (b.is.object(c) && b.is["boolean"](c._isAMomentObject)) return c;
            if (b.is.string(c)) {
                if (isNaN(c)) return moment(c, this.formatString);
                c = +c
            }
            return b.is.number(c) ? moment(c) : null
        },
        formatter: function (a, c, d) {
            return b.is.object(a) && b.is["boolean"](a._isAMomentObject) && a.isValid() ? a.format(this.formatString) : ""
        },
        filterValue: function (c) {
            if ((b.is.element(c) || b.is.jq(c)) && (c = a(c).data("filterValue") || a(c).text()), b.is.hash(c) && b.is.hash(c.options) && (b.is.string(c.options.filterValue) && (c = c.options.filterValue), b.is.defined(c.value) && (c = c.value)), b.is.object(c) && b.is["boolean"](c._isAMomentObject)) return c.format(this.formatString);
            if (b.is.string(c)) {
                if (isNaN(c)) return c;
                c = +c
            }
            return b.is.number(c) || b.is.date(c) ? moment(c).format(this.formatString) : b.is.defined(c) && null != c ? c + "" : ""
        }
    }), b.columns.register("date", b.DateColumn))
}(jQuery, FooTable),
function (a, b) {
    b.HTMLColumn = b.Column.extend({
        construct: function (a, b) {
            this._super(a, b, "html")
        },
        parser: function (c) {
            if (b.is.string(c) && (c = a(a.trim(c))), b.is.element(c) && (c = a(c)), b.is.jq(c)) {
                var d = c.prop("tagName").toLowerCase();
                if ("td" == d || "th" == d) {
                    var e = c.data("value");
                    return b.is.defined(e) ? e : c.contents()
                }
                return c
            }
            return null
        }
    }), b.columns.register("html", b.HTMLColumn)
}(jQuery, FooTable),
function (a, b) {
    b.NumberColumn = b.Column.extend({
        construct: function (a, c) {
            this._super(a, c, "number"), this.decimalSeparator = b.is.string(c.decimalSeparator) ? c.decimalSeparator : ".", this.thousandSeparator = b.is.string(c.thousandSeparator) ? c.thousandSeparator : ",", this.decimalSeparatorRegex = new RegExp(b.str.escapeRegExp(this.decimalSeparator), "g"), this.thousandSeparatorRegex = new RegExp(b.str.escapeRegExp(this.thousandSeparator), "g"), this.cleanRegex = new RegExp("[^-0-9" + b.str.escapeRegExp(this.decimalSeparator) + "]", "g")
        },
        parser: function (c) {
            if (b.is.element(c) || b.is.jq(c)) {
                var d = a(c).data("value");
                c = b.is.defined(d) ? d : a(c).text().replace(this.cleanRegex, "")
            }
            return b.is.string(c) && (c = c.replace(this.thousandSeparatorRegex, "").replace(this.decimalSeparatorRegex, "."), c = parseFloat(c)), b.is.number(c) ? c : null
        },
        formatter: function (a, b, c) {
            if (null == a) return "";
            var d = (a + "").split(".");
            return 2 == d.length && d[0].length > 3 && (d[0] = d[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, this.thousandSeparator)), d.join(this.decimalSeparator)
        }
    }), b.columns.register("number", b.NumberColumn)
}(jQuery, FooTable),
function (a, b) {
    b.ObjectColumn = b.Column.extend({
        construct: function (a, b) {
            this._super(a, b, "object")
        },
        parser: function (c) {
            if (b.is.element(c) || b.is.jq(c)) {
                var d = a(c),
                    e = d.data("value");
                if (b.is.object(e)) return e;
                e = d.html();
                try {
                    e = JSON.parse(e)
                } catch (f) {
                    e = null
                }
                return b.is.object(e) ? e : null
            }
            return b.is.object(c) ? c : null
        },
        formatter: function (a, c, d) {
            return b.is.object(a) ? JSON.stringify(a) : ""
        }
    }), b.columns.register("object", b.ObjectColumn)
}(jQuery, FooTable),
function (a, b) {
    b.Breakpoint = b.Class.extend({
        construct: function (a, b) {
            this.name = a, this.width = b
        }
    })
}(jQuery, FooTable),
function (a, b) {
    b.Breakpoints = b.Component.extend({
        construct: function (a) {
            this._super(a, !0), this.o = a.o, this.current = null, this.array = [], this.cascade = this.o.cascade, this.useParentWidth = this.o.useParentWidth, this.hidden = null, this._classNames = "", this.getWidth = b.checkFnValue(this, this.o.getWidth, this.getWidth)
        },
        preinit: function (a) {
            var c = this;
            return this.ft.raise("preinit.ft.breakpoints", [a]).then(function () {
                c.cascade = b.is["boolean"](a.cascade) ? a.cascade : c.cascade, c.o.breakpoints = b.is.hash(a.breakpoints) ? a.breakpoints : c.o.breakpoints, c.getWidth = b.checkFnValue(c, a.getWidth, c.getWidth), null == c.o.breakpoints && (c.o.breakpoints = {
                    xs: 480,
                    sm: 768,
                    md: 992,
                    lg: 1200
                });
                for (var d in c.o.breakpoints) c.o.breakpoints.hasOwnProperty(d) && (c.array.push(new b.Breakpoint(d, c.o.breakpoints[d])), c._classNames += "breakpoint-" + d + " ");
                c.array.sort(function (a, b) {
                    return b.width - a.width
                })
            })
        },
        init: function () {
            var a = this;
            return this.ft.raise("init.ft.breakpoints").then(function () {
                a.current = a.get()
            })
        },
        draw: function () {
            this.ft.$el.removeClass(this._classNames).addClass("breakpoint-" + this.current.name)
        },
        calculate: function () {
            for (var a, c = this, d = null, e = [], f = null, g = c.getWidth(), h = 0, i = c.array.length; i > h; h++) a = c.array[h], (!d && h == i - 1 || g >= a.width && (f instanceof b.Breakpoint ? g < f.width : !0)) && (d = a), d || e.push(a.name), f = a;
            return e.push(d.name), c.hidden = e.join(" "), d
        },
        visible: function (a) {
            if (b.is.emptyString(a)) return !0;
            if ("all" === a) return !1;
            for (var c = a.split(" "), d = 0, e = c.length; e > d; d++)
                if (this.cascade ? b.str.containsWord(this.hidden, c[d]) : c[d] == this.current.name) return !1;
            return !0
        },
        check: function () {
            var a = this,
                c = a.get();
            c instanceof b.Breakpoint && c != a.current && a.ft.raise("before.ft.breakpoints", [a.current, c]).then(function () {
                var b = a.current;
                return a.current = c, a.ft.draw().then(function () {
                    a.ft.raise("after.ft.breakpoints", [a.current, b])
                })
            })
        },
        get: function (a) {
            return b.is.undef(a) ? this.calculate() : a instanceof b.Breakpoint ? a : b.is.string(a) ? b.arr.first(this.array, function (b) {
                return b.name == a
            }) : b.is.number(a) && a >= 0 && a < this.array.length ? this.array[a] : null
        },
        getWidth: function () {
            return b.is.fn(this.o.getWidth) ? this.o.getWidth(this.ft) : 1 == this.useParentWidth ? this.getParentWidth() : this.getViewportWidth()
        },
        getParentWidth: function () {
            return this.ft.$el.parent().width()
        },
        getViewportWidth: function () {
            return Math.max(document.documentElement.clientWidth, window.innerWidth, 0)
        }
    }), b.components.register("breakpoints", b.Breakpoints, 1e3)
}(jQuery, FooTable),
function (a) {
    a.Column.prototype.breakpoints = null, a.Column.prototype.__breakpoints_define__ = function (b) {
        this.breakpoints = a.is.emptyString(b.breakpoints) ? null : b.breakpoints
    }, a.Column.extend("define", function (a) {
        this._super(a), this.__breakpoints_define__(a)
    })
}(FooTable),
function (a) {
    a.Defaults.prototype.breakpoints = null, a.Defaults.prototype.cascade = !1, a.Defaults.prototype.useParentWidth = !1, a.Defaults.prototype.getWidth = null
}(FooTable),
function (a, b) {
    b.Columns = b.Component.extend({
        construct: function (a) {
            this._super(a, !0), this.o = a.o, this.array = [], this.$header = null, this.showHeader = a.o.showHeader, this._fromHTML = b.is.emptyArray(a.o.columns) && !b.is.promise(a.o.columns)
        },
        parse: function (c) {
            var d = this;
            return a.Deferred(function (c) {
                function e(c, d) {
                    var e = [];
                    if (0 == c.length || 0 == d.length) e = c.concat(d);
                    else {
                        var f = 0;
                        b.arr.each(c.concat(d), function (a) {
                            a.index > f && (f = a.index)
                        }), f++;
                        for (var g, h, i = 0; f > i; i++) g = {}, b.arr.each(c, function (a) {
                            return a.index == i ? (g = a, !1) : void 0
                        }), h = {}, b.arr.each(d, function (a) {
                            return a.index == i ? (h = a, !1) : void 0
                        }), e.push(a.extend(!0, {}, g, h))
                    }
                    return e
                }
                var f, g, h = [],
                    i = [],
                    j = d.ft.$el.find("tr.footable-header, thead > tr:last:has([data-breakpoints]), tbody > tr:first:has([data-breakpoints]), thead > tr:last, tbody > tr:first").first();
                if (j.length > 0) {
                    var k = j.parent().is("tbody") && j.children().length == j.children("td").length;
                    k || (d.$header = j.addClass("footable-header")), j.children("td,th").each(function (b, c) {
                        f = a(c), g = f.data(), g.index = b, g.$el = f, g.virtual = k, i.push(g)
                    }), k && (d.showHeader = !1)
                }
                b.is.array(d.o.columns) && !b.is.emptyArray(d.o.columns) ? (b.arr.each(d.o.columns, function (a, b) {
                    a.index = b, h.push(a)
                }), d.parseFinalize(c, e(h, i))) : b.is.promise(d.o.columns) ? d.o.columns.then(function (a) {
                    b.arr.each(a, function (a, b) {
                        a.index = b, h.push(a)
                    }), d.parseFinalize(c, e(h, i))
                }, function (a) {
                    c.reject(Error("Columns ajax request error: " + a.status + " (" + a.statusText + ")"))
                }) : d.parseFinalize(c, e(h, i))
            })
        },
        parseFinalize: function (a, c) {
            var d, e = this,
                f = [];
            b.arr.each(c, function (a) {
                (d = b.columns.contains(a.type) ? b.columns.make(a.type, e.ft, a) : new b.Column(e.ft, a)) && f.push(d)
            }), b.is.emptyArray(f) ? a.reject(Error("No columns supplied.")) : (f.sort(function (a, b) {
                return a.index - b.index
            }), a.resolve(f))
        },
        preinit: function (a) {
            var c = this;
            return c.ft.raise("preinit.ft.columns", [a]).then(function () {
                return c.parse(a).then(function (d) {
                    c.array = d, c.showHeader = b.is["boolean"](a.showHeader) ? a.showHeader : c.showHeader
                })
            })
        },
        init: function () {
            var a = this;
            return this.ft.raise("init.ft.columns", [a.array]).then(function () {
                a.$create()
            })
        },
        destroy: function () {
            var a = this;
            this.ft.raise("destroy.ft.columns").then(function () {
                a._fromHTML || a.$header.remove()
            })
        },
        predraw: function () {
            var a = this,
                c = !0;
            a.visibleColspan = 0, a.firstVisibleIndex = 0, a.lastVisibleIndex = 0, a.hasHidden = !1, b.arr.each(a.array, function (b) {
                b.hidden = !a.ft.breakpoints.visible(b.breakpoints), !b.hidden && b.visible && (c && (a.firstVisibleIndex = b.index, c = !1), a.lastVisibleIndex = b.index, a.visibleColspan++), b.hidden && (a.hasHidden = !0)
            }), a.ft.$el.toggleClass("breakpoint", a.hasHidden)
        },
        draw: function () {
            b.arr.each(this.array, function (a) {
                a.$el.css("display", a.hidden || !a.visible ? "none" : "table-cell")
            }), !this.showHeader && b.is.jq(this.$header.parent()) && this.$header.detach()
        },
        $create: function () {
            var c = this;
            c.$header = b.is.jq(c.$header) ? c.$header : a("<tr/>", {
                "class": "footable-header"
            }), c.$header.children("th,td").detach(), b.arr.each(c.array, function (a) {
                c.$header.append(a.$el)
            }), c.showHeader && !b.is.jq(c.$header.parent()) && c.ft.$el.children("thead").append(c.$header)
        },
        get: function (a) {
            return a instanceof b.Column ? a : b.is.string(a) ? b.arr.first(this.array, function (b) {
                return b.name == a
            }) : b.is.number(a) ? b.arr.first(this.array, function (b) {
                return b.index == a
            }) : b.is.fn(a) ? b.arr.get(this.array, a) : null
        },
        ensure: function (a) {
            var c = this,
                d = [];
            return b.is.array(a) ? (b.arr.each(a, function (a) {
                d.push(c.get(a))
            }), d) : d
        }
    }), b.components.register("columns", b.Columns, 900)
}(jQuery, FooTable),
function (a) {
    a.Defaults.prototype.columns = [], a.Defaults.prototype.showHeader = !0
}(FooTable),
function (a, b) {
    b.Rows = b.Component.extend({
        construct: function (a) {
            this._super(a, !0), this.o = a.o, this.array = [], this.all = [], this.showToggle = a.o.showToggle, this.toggleSelector = a.o.toggleSelector, this.toggleColumn = a.o.toggleColumn, this.emptyString = a.o.empty, this.expandFirst = a.o.expandFirst, this.expandAll = a.o.expandAll, this.$empty = null, this._fromHTML = b.is.emptyArray(a.o.rows) && !b.is.promise(a.o.rows)
        },
        parse: function () {
            var c = this;
            return a.Deferred(function (a) {
                var d = c.ft.$el.children("tbody").children("tr");
                b.is.array(c.o.rows) && c.o.rows.length > 0 ? c.parseFinalize(a, c.o.rows) : b.is.promise(c.o.rows) ? c.o.rows.then(function (b) {
                    c.parseFinalize(a, b)
                }, function (b) {
                    a.reject(Error("Rows ajax request error: " + b.status + " (" + b.statusText + ")"))
                }) : b.is.jq(d) ? (c.parseFinalize(a, d), d.detach()) : c.parseFinalize(a, [])
            })
        },
        parseFinalize: function (c, d) {
            var e = this,
                f = a.map(d, function (a) {
                    return new b.Row(e.ft, e.ft.columns.array, a)
                });
            c.resolve(f)
        },
        preinit: function (a) {
            var c = this;
            return c.ft.raise("preinit.ft.rows", [a]).then(function () {
                return c.parse().then(function (d) {
                    c.all = d, c.array = c.all.slice(0), c.showToggle = b.is["boolean"](a.showToggle) ? a.showToggle : c.showToggle, c.toggleSelector = b.is.string(a.toggleSelector) ? a.toggleSelector : c.toggleSelector, c.toggleColumn = b.is.string(a.toggleColumn) ? a.toggleColumn : c.toggleColumn, "first" != c.toggleColumn && "last" != c.toggleColumn && (c.toggleColumn = "first"), c.emptyString = b.is.string(a.empty) ? a.empty : c.emptyString, c.expandFirst = b.is["boolean"](a.expandFirst) ? a.expandFirst : c.expandFirst, c.expandAll = b.is["boolean"](a.expandAll) ? a.expandAll : c.expandAll
                })
            })
        },
        init: function () {
            var a = this;
            return a.ft.raise("init.ft.rows", [a.all]).then(function () {
                a.$create()
            })
        },
        destroy: function () {
            var a = this;
            this.ft.raise("destroy.ft.rows").then(function () {
                b.arr.each(a.array, function (b) {
                    b.predraw(!a._fromHTML)
                }), a.all = a.array = []
            })
        },
        predraw: function () {
            b.arr.each(this.array, function (a) {
                a.predraw()
            }), this.array = this.all.slice(0)
        },
        $create: function () {
            this.$empty = a("<tr/>", {
                "class": "footable-empty"
            }).append(a("<td/>").text(this.emptyString))
        },
        draw: function () {
            var a = this,
                c = a.ft.$el.children("tbody"),
                d = !0;
            a.array.length > 0 ? (a.$empty.detach(), b.arr.each(a.array, function (b) {
                (a.expandFirst && d || a.expandAll) && (b.expanded = !0, d = !1), b.draw(c)
            })) : (a.$empty.children("td").attr("colspan", a.ft.columns.visibleColspan), c.append(a.$empty))
        },
        load: function (c, d) {
            var e = this,
                f = a.map(c, function (a) {
                    return new b.Row(e.ft, e.ft.columns.array, a)
                });
            b.arr.each(this.array, function (a) {
                a.predraw()
            }), this.all = (b.is["boolean"](d) ? d : !1) ? this.all.concat(f) : f, this.array = this.all.slice(0), this.ft.draw()
        },
        expand: function () {
            b.arr.each(this.array, function (a) {
                a.expand()
            })
        },
        collapse: function () {
            b.arr.each(this.array, function (a) {
                a.collapse()
            })
        }
    }), b.components.register("rows", b.Rows, 800)
}(jQuery, FooTable),
function (a) {
    a.Defaults.prototype.rows = [], a.Defaults.prototype.empty = "No results", a.Defaults.prototype.showToggle = !0, a.Defaults.prototype.toggleSelector = "tr,td,.footable-toggle", a.Defaults.prototype.toggleColumn = "first", a.Defaults.prototype.expandFirst = !1, a.Defaults.prototype.expandAll = !1
}(FooTable),
function (a) {
    a.Table.prototype.loadRows = function (a, b) {
        this.rows.load(a, b)
    }
}(FooTable),
function (a) {
    a.Filter = a.Class.extend({
        construct: function (b, c, d, e, f, g, h) {
            this.name = b, this.space = !a.is.string(e) || "OR" != e && "AND" != e ? "AND" : e, this.connectors = a.is["boolean"](f) ? f : !0, this.ignoreCase = a.is["boolean"](g) ? g : !0, this.hidden = a.is["boolean"](h) ? h : !1, this.query = c instanceof a.Query ? c : new a.Query(c, this.space, this.connectors, this.ignoreCase), this.columns = d
        },
        match: function (b) {
            return a.is.string(b) ? (a.is.string(this.query) && (this.query = new a.Query(this.query, this.space, this.connectors, this.ignoreCase)), this.query instanceof a.Query ? this.query.match(b) : !1) : !1
        },
        matchRow: function (b) {
            var c = this,
                d = a.arr.map(b.cells, function (b) {
                    return a.arr.contains(c.columns, b.column) ? b.filterValue : null
                }).join(" ");
            return c.match(d)
        }
    })
}(FooTable),
function (a, b) {
    b.Filtering = b.Component.extend({
        construct: function (a) {
            this._super(a, a.o.filtering.enabled), this.filters = a.o.filtering.filters, this.delay = a.o.filtering.delay, this.min = a.o.filtering.min, this.space = a.o.filtering.space, this.connectors = a.o.filtering.connectors, this.ignoreCase = a.o.filtering.ignoreCase, this.exactMatch = a.o.filtering.exactMatch, this.placeholder = a.o.filtering.placeholder, this.dropdownTitle = a.o.filtering.dropdownTitle, this.position = a.o.filtering.position, this.focus = a.o.filtering.focus, this.container = a.o.filtering.container, this.$container = null, this.$row = null, this.$cell = null, this.$form = null, this.$dropdown = null, this.$input = null, this.$button = null, this._filterTimeout = null, this._exactRegExp = /^"(.*?)"$/
        },
        preinit: function (a) {
            var c = this;
            return c.ft.raise("preinit.ft.filtering").then(function () {
                c.ft.$el.hasClass("footable-filtering") && (c.enabled = !0), c.enabled = b.is["boolean"](a.filtering) ? a.filtering : c.enabled, c.enabled && (c.space = b.is.string(a.filterSpace) ? a.filterSpace : c.space, c.min = b.is.number(a.filterMin) ? a.filterMin : c.min, c.connectors = b.is["boolean"](a.filterConnectors) ? a.filterConnectors : c.connectors, c.ignoreCase = b.is["boolean"](a.filterIgnoreCase) ? a.filterIgnoreCase : c.ignoreCase, c.exactMatch = b.is["boolean"](a.filterExactMatch) ? a.filterExactMatch : c.exactMatch, c.focus = b.is["boolean"](a.filterFocus) ? a.filterFocus : c.focus, c.delay = b.is.number(a.filterDelay) ? a.filterDelay : c.delay, c.placeholder = b.is.string(a.filterPlaceholder) ? a.filterPlaceholder : c.placeholder, c.dropdownTitle = b.is.string(a.filterDropdownTitle) ? a.filterDropdownTitle : c.dropdownTitle, c.container = b.is.string(a.filterContainer) ? a.filterContainer : c.container, c.filters = b.is.array(a.filterFilters) ? c.ensure(a.filterFilters) : c.ensure(c.filters), c.ft.$el.hasClass("footable-filtering-left") && (c.position = "left"), c.ft.$el.hasClass("footable-filtering-center") && (c.position = "center"), c.ft.$el.hasClass("footable-filtering-right") && (c.position = "right"), c.position = b.is.string(a.filterPosition) ? a.filterPosition : c.position)
            }, function () {
                c.enabled = !1
            })
        },
        init: function () {
            var a = this;
            return a.ft.raise("init.ft.filtering").then(function () {
                a.$create()
            }, function () {
                a.enabled = !1
            })
        },
        destroy: function () {
            var a = this;
            return a.ft.raise("destroy.ft.filtering").then(function () {
                a.ft.$el.removeClass("footable-filtering").find("thead > tr.footable-filtering").remove()
            })
        },
        $create: function () {
            var c, d = this,
                e = a("<div/>", {
                    "class": "form-group footable-filtering-search"
                }).append(a("<label/>", {
                    "class": "sr-only",
                    text: "Search"
                })),
                f = a("<div/>", {
                    "class": "input-group"
                }).appendTo(e),
                g = a("<div/>", {
                    "class": "input-group-btn"
                }),
                h = a("<button/>", {
                    type: "button",
                    "class": "btn btn-default dropdown-toggle"
                }).on("click", {
                    self: d
                }, d._onDropdownToggleClicked).append(a("<span/>", {
                    "class": "caret"
                }));
            switch (d.position) {
                case "left":
                    c = "footable-filtering-left";
                    break;
                case "center":
                    c = "footable-filtering-center";
                    break;
                default:
                    c = "footable-filtering-right"
            }
            d.ft.$el.addClass("footable-filtering").addClass(c), d.$container = null === d.container ? a() : a(d.container).first(), d.$container.length ? d.$container.addClass("footable-filtering-external").addClass(c) : (d.$row = a("<tr/>", {
                "class": "footable-filtering"
            }).prependTo(d.ft.$el.children("thead")), d.$cell = a("<th/>").attr("colspan", d.ft.columns.visibleColspan).appendTo(d.$row), d.$container = d.$cell), d.$form = a("<form/>", {
                "class": "form-inline"
            }).append(e).appendTo(d.$container), d.$input = a("<input/>", {
                type: "text",
                "class": "form-control",
                placeholder: d.placeholder
            }), d.$button = a("<button/>", {
                type: "button",
                "class": "btn btn-primary"
            }).on("click", {
                self: d
            }, d._onSearchButtonClicked).append(a("<span/>", {
                "class": "fooicon fooicon-search"
            })), d.$dropdown = a("<ul/>", {
                "class": "dropdown-menu dropdown-menu-right"
            }), b.is.emptyString(d.dropdownTitle) || d.$dropdown.append(a("<li/>", {
                "class": "dropdown-header",
                text: d.dropdownTitle
            })), d.$dropdown.append(b.arr.map(d.ft.columns.array, function (b) {
                return b.filterable ? a("<li/>").append(a("<a/>", {
                    "class": "checkbox"
                }).append(a("<label/>", {
                    html: b.title
                }).prepend(a("<input/>", {
                    type: "checkbox",
                    checked: !0
                }).data("__FooTableColumn__", b)))) : null
            })), d.delay > 0 && (d.$input.on("keypress keyup paste", {
                self: d
            }, d._onSearchInputChanged), d.$dropdown.on("click", 'input[type="checkbox"]', {
                self: d
            }, d._onSearchColumnClicked)), g.append(d.$button, h, d.$dropdown), f.append(d.$input, g)
        },
        predraw: function () {
            if (!b.is.emptyArray(this.filters)) {
                var c = this;
                c.ft.rows.array = a.grep(c.ft.rows.array, function (a) {
                    return a.filtered(c.filters)
                })
            }
        },
        draw: function () {
            b.is.jq(this.$cell) && this.$cell.attr("colspan", this.ft.columns.visibleColspan);
            var a = this.find("search");
            if (a instanceof b.Filter) {
                var c = a.query.val();
                this.exactMatch && this._exactRegExp.test(c) && (c = c.replace(this._exactRegExp, "$1")), this.$input.val(c)
            } else this.$input.val(null);
            this.setButton(!b.arr.any(this.filters, function (a) {
                return !a.hidden
            }))
        },
        addFilter: function (a, c, d, e, f, g, h) {
            var i = this.createFilter(a, c, d, e, f, g, h);
            i instanceof b.Filter && (this.removeFilter(i.name), this.filters.push(i))
        },
        removeFilter: function (a) {
            b.arr.remove(this.filters, function (b) {
                return b.name == a
            })
        },
        filter: function (a) {
            var b = this;
            return b.filters = b.ensure(b.filters), b.ft.raise("before.ft.filtering", [b.filters]).then(function () {
                if (b.filters = b.ensure(b.filters), a) var c = b.$input.prop("selectionStart"),
                    d = b.$input.prop("selectionEnd");
                return b.ft.draw().then(function () {
                    a && b.$input.focus().prop({
                        selectionStart: c,
                        selectionEnd: d
                    }), b.ft.raise("after.ft.filtering", [b.filters])
                })
            })
        },
        clear: function () {
            return this.filters = b.arr.get(this.filters, function (a) {
                return a.hidden
            }), this.filter(this.focus)
        },
        setButton: function (a) {
            a ? this.$button.children(".fooicon").removeClass("fooicon-remove").addClass("fooicon-search") : this.$button.children(".fooicon").removeClass("fooicon-search").addClass("fooicon-remove")
        },
        find: function (a) {
            return b.arr.first(this.filters, function (b) {
                return b.name == a
            })
        },
        columns: function () {
            return b.is.jq(this.$dropdown) ? this.$dropdown.find("input:checked").map(function () {
                return a(this).data("__FooTableColumn__")
            }).get() : this.ft.columns.get(function (a) {
                return a.filterable
            })
        },
        ensure: function (a) {
            var c = this,
                d = [],
                e = c.columns();
            return b.is.emptyArray(a) || b.arr.each(a, function (a) {
                a = c._ensure(a, e), a instanceof b.Filter && d.push(a)
            }), d
        },
        createFilter: function (a, c, d, e, f, g, h) {
            return b.is.string(a) && (a = {
                name: a,
                query: c,
                columns: d,
                ignoreCase: e,
                connectors: f,
                space: g,
                hidden: h
            }), this._ensure(a, this.columns())
        },
        _ensure: function (a, c) {
            return (b.is.hash(a) || a instanceof b.Filter) && !b.is.emptyString(a.name) && (!b.is.emptyString(a.query) || a.query instanceof b.Query) ? (a.columns = b.is.emptyArray(a.columns) ? c : this.ft.columns.ensure(a.columns), a.ignoreCase = b.is["boolean"](a.ignoreCase) ? a.ignoreCase : this.ignoreCase, a.connectors = b.is["boolean"](a.connectors) ? a.connectors : this.connectors, a.hidden = b.is["boolean"](a.hidden) ? a.hidden : !1, a.space = !b.is.string(a.space) || "AND" !== a.space && "OR" !== a.space ? this.space : a.space, a.query = b.is.string(a.query) ? new b.Query(a.query, a.space, a.connectors, a.ignoreCase) : a.query, a instanceof b.Filter ? a : new b.Filter(a.name, a.query, a.columns, a.space, a.connectors, a.ignoreCase, a.hidden)) : null
        },
        _onSearchInputChanged: function (a) {
            var c = a.data.self,
                d = "keypress" == a.type && !b.is.emptyString(String.fromCharCode(a.charCode)),
                e = "keyup" == a.type && (8 == a.which || 46 == a.which),
                f = "paste" == a.type;
            (d || e || f) && (13 == a.which && a.preventDefault(), null != c._filterTimeout && clearTimeout(c._filterTimeout), c._filterTimeout = setTimeout(function () {
                c._filterTimeout = null;
                var a = c.$input.val();
                a.length >= c.min ? (c.exactMatch && !c._exactRegExp.test(a) && (a = '"' + a + '"'), c.addFilter("search", a), c.filter(c.focus)) : b.is.emptyString(a) && c.clear()
            }, c.delay))
        },
        _onSearchButtonClicked: function (a) {
            a.preventDefault();
            var b = a.data.self;
            null != b._filterTimeout && clearTimeout(b._filterTimeout);
            var c = b.$button.children(".fooicon");
            if (c.hasClass("fooicon-remove")) b.clear();
            else {
                var d = b.$input.val();
                d.length >= b.min && (b.exactMatch && !b._exactRegExp.test(d) && (d = '"' + d + '"'), b.addFilter("search", d), b.filter(b.focus))
            }
        },
        _onSearchColumnClicked: function (a) {
            var b = a.data.self;
            null != b._filterTimeout && clearTimeout(b._filterTimeout), b._filterTimeout = setTimeout(function () {
                b._filterTimeout = null;
                var a = b.$button.children(".fooicon");
                a.hasClass("fooicon-remove") && (a.removeClass("fooicon-remove").addClass("fooicon-search"), b.addFilter("search", b.$input.val()), b.filter())
            }, b.delay)
        },
        _onDropdownToggleClicked: function (b) {
            b.preventDefault(), b.stopPropagation();
            var c = b.data.self;
            c.$dropdown.parent().toggleClass("open"), c.$dropdown.parent().hasClass("open") ? a(document).on("click.footable", {
                self: c
            }, c._onDocumentClicked) : a(document).off("click.footable", c._onDocumentClicked)
        },
        _onDocumentClicked: function (b) {
            if (0 == a(b.target).closest(".dropdown-menu").length) {
                b.preventDefault();
                var c = b.data.self;
                c.$dropdown.parent().removeClass("open"), a(document).off("click.footable", c._onDocumentClicked)
            }
        }
    }), b.components.register("filtering", b.Filtering, 500)
}(jQuery, FooTable),
function (a) {
    a.Query = a.Class.extend({
        construct: function (b, c, d, e) {
            this._original = null, this._value = null, this.space = !a.is.string(c) || "OR" != c && "AND" != c ? "AND" : c, this.connectors = a.is["boolean"](d) ? d : !0, this.ignoreCase = a.is["boolean"](e) ? e : !0, this.left = null, this.right = null, this.parts = [], this.operator = null, this.val(b)
        },
        val: function (b) {
            if (a.is.emptyString(b)) return this._value;
            if (a.is.emptyString(this._original)) this._original = b;
            else if (this._original == b) return;
            this._value = b, this._parse()
        },
        match: function (b) {
            return a.is.emptyString(this.operator) || "OR" === this.operator ? this._left(b, !1) || this._match(b, !1) || this._right(b, !1) : "AND" === this.operator ? this._left(b, !0) && this._match(b, !0) && this._right(b, !0) : void 0
        },
        _match: function (b, c) {
            var d = this,
                e = !1,
                f = a.is.emptyString(b);
            return a.is.emptyArray(d.parts) && d.left instanceof a.Query ? c : a.is.emptyArray(d.parts) ? e : ("OR" === d.space ? a.arr.each(d.parts, function (c) {
                if (c.empty && f) {
                    if (e = !0, c.negate) return e = !1
                } else {
                    var g = (c.exact ? a.str.containsExact : a.str.contains)(b, c.query, d.ignoreCase);
                    if (g && !c.negate && (e = !0), g && c.negate) return e = !1
                }
            }) : (e = !0, a.arr.each(d.parts, function (c) {
                if (c.empty) return (!f && !c.negate || f && c.negate) && (e = !1), e;
                var g = (c.exact ? a.str.containsExact : a.str.contains)(b, c.query, d.ignoreCase);
                return (!g && !c.negate || g && c.negate) && (e = !1), e
            })), e)
        },
        _left: function (b, c) {
            return this.left instanceof a.Query ? this.left.match(b) : c
        },
        _right: function (b, c) {
            return this.right instanceof a.Query ? this.right.match(b) : c
        },
        _parse: function () {
            if (!a.is.emptyString(this._value))
                if (/\sOR\s/.test(this._value)) {
                    this.operator = "OR";
                    var b = this._value.split(/(?:\sOR\s)(.*)?/);
                    this.left = new a.Query(b[0], this.space, this.connectors, this.ignoreCase), this.right = new a.Query(b[1], this.space, this.connectors, this.ignoreCase)
                } else if (/\sAND\s/.test(this._value)) {
                this.operator = "AND";
                var c = this._value.split(/(?:\sAND\s)(.*)?/);
                this.left = new a.Query(c[0], this.space, this.connectors, this.ignoreCase), this.right = new a.Query(c[1], this.space, this.connectors, this.ignoreCase)
            } else {
                var d = this;
                this.parts = a.arr.map(this._value.match(/(?:[^\s"]+|"[^"]*")+/g), function (a) {
                    return d._part(a)
                })
            }
        },
        _part: function (b) {
            var c = {
                query: b,
                negate: !1,
                phrase: !1,
                exact: !1,
                empty: !1
            };
            return a.str.startsWith(c.query, "-") && (c.query = a.str.from(c.query, "-"), c.negate = !0), /^"(.*?)"$/.test(c.query) ? (c.query = c.query.replace(/^"(.*?)"$/, "$1"), c.phrase = !0, c.exact = !0) : this.connectors && /(?:\w)+?([-_\+\.])(?:\w)+?/.test(c.query) && (c.query = c.query.replace(/(?:\w)+?([-_\+\.])(?:\w)+?/g, function (a, b) {
                return a.replace(b, " ")
            }), c.phrase = !0), c.empty = c.phrase && a.is.emptyString(c.query), c
        }
    })
}(FooTable),
function (a) {
    a.Cell.prototype.filterValue = null, a.Cell.prototype.__filtering_define__ = function (a) {
        this.filterValue = this.column.filterValue.call(this.column, a)
    }, a.Cell.prototype.__filtering_val__ = function (b) {
        a.is.defined(b) && (this.filterValue = this.column.filterValue.call(this.column, b))
    }, a.Cell.extend("define", function (a) {
        this._super(a), this.__filtering_define__(a)
    }), a.Cell.extend("val", function (a, b, c) {
        var d = this._super(a, b, c);
        return this.__filtering_val__(a), d
    })
}(FooTable),
function (a, b) {
    b.Column.prototype.filterable = !0, b.Column.prototype.filterValue = function (c) {
        if (b.is.element(c) || b.is.jq(c)) {
            var d = a(c).data("filterValue");
            return b.is.defined(d) ? "" + d : a(c).text()
        }
        if (b.is.hash(c) && b.is.hash(c.options)) {
            if (b.is.string(c.options.filterValue)) return c.options.filterValue;
            b.is.defined(c.value) && (c = c.value)
        }
        return b.is.defined(c) && null != c ? c + "" : ""
    }, b.Column.prototype.__filtering_define__ = function (a) {
        this.filterable = b.is["boolean"](a.filterable) ? a.filterable : this.filterable, this.filterValue = b.checkFnValue(this, a.filterValue, this.filterValue)
    }, b.Column.extend("define", function (a) {
        this._super(a), this.__filtering_define__(a)
    })
}(jQuery, FooTable),
function (a) {
    a.Defaults.prototype.filtering = {
        enabled: !1,
        filters: [],
        delay: 1200,
        min: 1,
        space: "AND",
        placeholder: "Search",
        dropdownTitle: null,
        position: "right",
        connectors: !0,
        ignoreCase: !0,
        exactMatch: !1,
        focus: !0,
        container: null
    }
}(FooTable),
function (a) {
    a.Row.prototype.filtered = function (b) {
        var c = !0,
            d = this;
        return a.arr.each(b, function (a) {
            return 0 == (c = a.matchRow(d)) ? !1 : void 0
        }), c
    }
}(FooTable),
function (a, b) {
    b.Sorter = b.Class.extend({
        construct: function (a, b) {
            this.column = a, this.direction = b
        }
    })
}(jQuery, FooTable),
function (a, b) {
    b.Sorting = b.Component.extend({
        construct: function (a) {
            this._super(a, a.o.sorting.enabled), this.o = a.o.sorting, this.column = null, this.allowed = !0, this.initial = null
        },
        preinit: function (a) {
            var c = this;
            this.ft.raise("preinit.ft.sorting", [a]).then(function () {
                c.ft.$el.hasClass("footable-sorting") && (c.enabled = !0), c.enabled = b.is["boolean"](a.sorting) ? a.sorting : c.enabled, c.enabled && (c.column = b.arr.first(c.ft.columns.array, function (a) {
                    return a.sorted
                }))
            }, function () {
                c.enabled = !1
            })
        },
        init: function () {
            var c = this;
            this.ft.raise("init.ft.sorting").then(function () {
                if (!c.initial) {
                    var d = !!c.column;
                    c.initial = {
                        isset: d,
                        rows: c.ft.rows.all.slice(0),
                        column: d ? c.column.name : null,
                        direction: d ? c.column.direction : null
                    }
                }
                b.arr.each(c.ft.columns.array, function (b) {
                    b.sortable && b.$el.addClass("footable-sortable").append(a("<span/>", {
                        "class": "fooicon fooicon-sort"
                    }))
                }), c.ft.$el.on("click.footable", ".footable-sortable", {
                    self: c
                }, c._onSortClicked)
            }, function () {
                c.enabled = !1
            })
        },
        destroy: function () {
            var a = this;
            this.ft.raise("destroy.ft.paging").then(function () {
                a.ft.$el.off("click.footable", ".footable-sortable", a._onSortClicked), a.ft.$el.children("thead").children("tr.footable-header").children(".footable-sortable").removeClass("footable-sortable footable-asc footable-desc").find("span.fooicon").remove()
            })
        },
        predraw: function () {
            if (this.column) {
                var a = this,
                    b = a.column;
                a.ft.rows.array.sort(function (a, c) {
                    return "DESC" == b.direction ? b.sorter(c.cells[b.index].sortValue, a.cells[b.index].sortValue) : b.sorter(a.cells[b.index].sortValue, c.cells[b.index].sortValue)
                })
            }
        },
        draw: function () {
            if (this.column) {
                var a = this,
                    b = a.ft.$el.find("thead > tr > .footable-sortable"),
                    c = a.column.$el;
                b.removeClass("footable-asc footable-desc").children(".fooicon").removeClass("fooicon-sort fooicon-sort-asc fooicon-sort-desc"), b.not(c).children(".fooicon").addClass("fooicon-sort"), c.addClass("DESC" == a.column.direction ? "footable-desc" : "footable-asc").children(".fooicon").addClass("DESC" == a.column.direction ? "fooicon-sort-desc" : "fooicon-sort-asc")
            }
        },
        sort: function (a, b) {
            return this._sort(a, b)
        },
        toggleAllowed: function (a) {
            a = b.is["boolean"](a) ? a : !this.allowed, this.allowed = a, this.ft.$el.toggleClass("footable-sorting-disabled", !this.allowed)
        },
        hasChanged: function () {
            return !(!this.initial || !this.column || this.column.name === this.initial.column && (this.column.direction === this.initial.direction || null === this.initial.direction && "ASC" === this.column.direction))
        },
        reset: function () {
            this.initial && (this.initial.isset ? this.sort(this.initial.column, this.initial.direction) : (this.column && (this.column.$el.removeClass("footable-asc footable-desc"), this.column = null), this.ft.rows.all = this.initial.rows, this.ft.draw()))
        },
        _sort: function (c, d) {
            if (!this.allowed) return a.Deferred().reject("sorting disabled");
            var e = this,
                f = new b.Sorter(e.ft.columns.get(c), b.Sorting.dir(d));
            return e.ft.raise("before.ft.sorting", [f]).then(function () {
                return b.arr.each(e.ft.columns.array, function (a) {
                    a != e.column && (a.direction = null)
                }), e.column = e.ft.columns.get(f.column), e.column && (e.column.direction = b.Sorting.dir(f.direction)), e.ft.draw().then(function () {
                    e.ft.raise("after.ft.sorting", [f])
                })
            })
        },
        _onSortClicked: function (b) {
            var c = b.data.self,
                d = a(this).closest("th,td"),
                e = d.is(".footable-asc, .footable-desc") ? d.hasClass("footable-desc") ? "ASC" : "DESC" : "ASC";
            c._sort(d.index(), e)
        }
    }), b.Sorting.dir = function (a) {
        return !b.is.string(a) || "ASC" != a && "DESC" != a ? "ASC" : a
    }, b.components.register("sorting", b.Sorting, 600)
}(jQuery, FooTable),
function (a) {
    a.Cell.prototype.sortValue = null, a.Cell.prototype.__sorting_define__ = function (a) {
        this.sortValue = this.column.sortValue.call(this.column, a)
    }, a.Cell.prototype.__sorting_val__ = function (b) {
        a.is.defined(b) && (this.sortValue = this.column.sortValue.call(this.column, b))
    }, a.Cell.extend("define", function (a) {
        this._super(a), this.__sorting_define__(a)
    }), a.Cell.extend("val", function (a, b, c) {
        var d = this._super(a, b, c);
        return this.__sorting_val__(a), d
    })
}(FooTable),
function (a, b) {
    b.Column.prototype.direction = null, b.Column.prototype.sortable = !0, b.Column.prototype.sorted = !1, b.Column.prototype.sorter = function (a, b) {
        return "string" == typeof a && (a = a.toLowerCase()), "string" == typeof b && (b = b.toLowerCase()), a === b ? 0 : b > a ? -1 : 1
    }, b.Column.prototype.sortValue = function (c) {
        if (b.is.element(c) || b.is.jq(c)) {
            var d = a(c).data("sortValue");
            return b.is.defined(d) ? d : this.parser(c)
        }
        if (b.is.hash(c) && b.is.hash(c.options)) {
            if (b.is.string(c.options.sortValue)) return c.options.sortValue;
            b.is.defined(c.value) && (c = c.value)
        }
        return b.is.defined(c) && null != c ? c : null
    }, b.Column.prototype.__sorting_define__ = function (a) {
        this.sorter = b.checkFnValue(this, a.sorter, this.sorter), this.direction = b.is.type(a.direction, "string") ? b.Sorting.dir(a.direction) : null, this.sortable = b.is["boolean"](a.sortable) ? a.sortable : !0, this.sorted = b.is["boolean"](a.sorted) ? a.sorted : !1, this.sortValue = b.checkFnValue(this, a.sortValue, this.sortValue)
    }, b.Column.extend("define", function (a) {
        this._super(a), this.__sorting_define__(a)
    })
}(jQuery, FooTable),
function (a) {
    a.Defaults.prototype.sorting = {
        enabled: !1
    }
}(FooTable),
function (a, b) {
    b.HTMLColumn.extend("__sorting_define__", function (c) {
        this._super(c), this.sortUse = b.is.string(c.sortUse) && -1 !== a.inArray(c.sortUse, ["html", "text"]) ? c.sortUse : "html"
    }), b.HTMLColumn.prototype.sortValue = function (c) {
        if (b.is.element(c) || b.is.jq(c)) {
            var d = a(c).data("sortValue");
            return b.is.defined(d) ? d : this.parser(c)
        }
        if (b.is.hash(c) && b.is.hash(c.options)) {
            if (b.is.string(c.options.sortValue)) return c.options.sortValue;
            b.is.defined(c.value) && (c = c.value)
        }
        return b.is.defined(c) && null != c ? c : null
    }
}(jQuery, FooTable),
function (a, b) {
    b.NumberColumn.prototype.sortValue = function (c) {
        if (b.is.element(c) || b.is.jq(c)) {
            var d = a(c).data("sortValue");
            return b.is.number(d) ? d : this.parser(c)
        }
        if (b.is.hash(c) && b.is.hash(c.options)) {
            if (b.is.string(c.options.sortValue)) return this.parser(c);
            if (b.is.number(c.options.sortValue)) return c.options.sortValue;
            if (b.is.number(c.value)) return c.value
        }
        return b.is.string(c) ? this.parser(c) : b.is.number(c) ? c : null
    }
}(jQuery, FooTable),
function (a) {
    a.Table.prototype.sort = function (b, c) {
        return this.use(a.Sorting).sort(b, c)
    }
}(FooTable),
function (a, b) {
    b.Pager = b.Class.extend({
        construct: function (a, b, c, d, e) {
            this.total = a, this.current = b, this.size = c, this.page = d, this.forward = e
        }
    })
}(jQuery, FooTable),
function (a, b) {
    b.Paging = b.Component.extend({
        construct: function (a) {
            this._super(a, a.o.paging.enabled), this.strings = a.o.paging.strings, this.current = a.o.paging.current, this.size = a.o.paging.size, this.limit = a.o.paging.limit, this.position = a.o.paging.position, this.countFormat = a.o.paging.countFormat, this.container = a.o.paging.container, this.total = -1, this.totalRows = 0, this.previous = -1, this.formattedCount = null, this.$container = null, this.$wrapper = null, this.$row = null, this.$cell = null, this.$pagination = null, this.$count = null, this.detached = !0, this._createdLinks = 0
        },
        preinit: function (a) {
            var c = this;
            this.ft.raise("preinit.ft.paging", [a]).then(function () {
                c.ft.$el.hasClass("footable-paging") && (c.enabled = !0), c.enabled = b.is["boolean"](a.paging) ? a.paging : c.enabled, c.enabled && (c.size = b.is.number(a.pagingSize) ? a.pagingSize : c.size, c.current = b.is.number(a.pagingCurrent) ? a.pagingCurrent : c.current, c.limit = b.is.number(a.pagingLimit) ? a.pagingLimit : c.limit, c.ft.$el.hasClass("footable-paging-left") && (c.position = "left"), c.ft.$el.hasClass("footable-paging-center") && (c.position = "center"), c.ft.$el.hasClass("footable-paging-right") && (c.position = "right"), c.position = b.is.string(a.pagingPosition) ? a.pagingPosition : c.position, c.countFormat = b.is.string(a.pagingCountFormat) ? a.pagingCountFormat : c.countFormat, c.container = b.is.string(a.pagingContainer) ? a.pagingContainer : c.container, c.total = Math.ceil(c.ft.rows.all.length / c.size))
            }, function () {
                c.enabled = !1
            })
        },
        init: function () {
            var a = this;
            this.ft.raise("init.ft.paging").then(function () {
                a.$create()
            }, function () {
                a.enabled = !1
            })
        },
        destroy: function () {
            var a = this;
            this.ft.raise("destroy.ft.paging").then(function () {
                a.ft.$el.removeClass("footable-paging").find("tfoot > tr.footable-paging").remove(), a.detached = !0, a._createdLinks = 0
            })
        },
        predraw: function () {
            this.total = Math.ceil(this.ft.rows.array.length / this.size), this.current = this.current > this.total ? this.total : this.current < 1 ? 1 : this.current, this.totalRows = this.ft.rows.array.length, this.totalRows > this.size && (this.ft.rows.array = this.ft.rows.array.splice((this.current - 1) * this.size, this.size)), this.formattedCount = this.format(this.countFormat)
        },
        draw: function () {
            if (this.total <= 1) this.detached || (this.$row ? this.$row.detach() : this.$wrapper.detach(), this.detached = !0);
            else {
                if (this.detached) {
                    if (this.$row) {
                        var c = this.ft.$el.children("tfoot");
                        0 == c.length && (c = a("<tfoot/>"), this.ft.$el.append(c)), this.$row.appendTo(c)
                    } else this.$wrapper.appendTo(this.$container);
                    this.detached = !1
                }
                b.is.jq(this.$cell) && this.$cell.attr("colspan", this.ft.columns.visibleColspan), this._createLinks(), this._setVisible(this.current, this.current > this.previous), this._setNavigation(!0), this.$count.text(this.formattedCount)
            }
        },
        $create: function () {
            this._createdLinks = 0;
            var c = "footable-paging-center";
            switch (this.position) {
                case "left":
                    c = "footable-paging-left";
                    break;
                case "right":
                    c = "footable-paging-right"
            }
            if (this.ft.$el.addClass("footable-paging").addClass(c), this.$container = null === this.container ? null : a(this.container).first(), b.is.jq(this.$container)) this.$container.addClass("footable-paging-external").addClass(c);
            else {
                var d = this.ft.$el.children("tfoot");
                0 == d.length && (d = a("<tfoot/>"), this.ft.$el.append(d)), this.$row = a("<tr/>", {
                    "class": "footable-paging"
                }).prependTo(d), this.$container = this.$cell = a("<td/>").attr("colspan", this.ft.columns.visibleColspan).appendTo(this.$row)
            }
            this.$wrapper = a("<div/>", {
                "class": "footable-pagination-wrapper"
            }).appendTo(this.$container), this.$pagination = a("<ul/>", {
                "class": "pagination"
            }).on("click.footable", "a.footable-page-link", {
                self: this
            }, this._onPageClicked), this.$count = a("<span/>", {
                "class": "label label-default"
            }), this.$wrapper.append(this.$pagination, a("<div/>", {
                "class": "divider"
            }), this.$count), this.detached = !1
        },
        format: function (a) {
            var b = this.size * (this.current - 1) + 1,
                c = this.size * this.current;
            return 0 == this.ft.rows.array.length ? (b = 0, c = 0) : c = c > this.totalRows ? this.totalRows : c, a.replace(/\{CP}/g, this.current).replace(/\{TP}/g, this.total).replace(/\{PF}/g, b).replace(/\{PL}/g, c).replace(/\{TR}/g, this.totalRows)
        },
        first: function () {
            return this._set(1)
        },
        prev: function () {
            return this._set(this.current - 1 > 0 ? this.current - 1 : 1)
        },
        next: function () {
            return this._set(this.current + 1 < this.total ? this.current + 1 : this.total)
        },
        last: function () {
            return this._set(this.total)
        },
        "goto": function (a) {
            return this._set(a > this.total ? this.total : 1 > a ? 1 : a)
        },
        prevPages: function () {
            var a = this.$pagination.children("li.footable-page.visible:first").data("page") - 1;
            this._setVisible(a, !0), this._setNavigation(!1)
        },
        nextPages: function () {
            var a = this.$pagination.children("li.footable-page.visible:last").data("page") + 1;
            this._setVisible(a, !1), this._setNavigation(!1)
        },
        pageSize: function (a) {
            return a = parseInt(a), isNaN(a) ? this.size : (this.size = a, this.total = Math.ceil(this.ft.rows.all.length / this.size), b.is.jq(this.$wrapper) && (this.$container.is("td") ? this.$row.remove() : this.$wrapper.remove()), this.$create(), void this.ft.draw())
        },
        _set: function (c) {
            var d = this,
                e = new b.Pager(d.total, d.current, d.size, c, c > d.current);
            return d.ft.raise("before.ft.paging", [e]).then(function () {
                return e.page = e.page > e.total ? e.total : e.page, e.page = e.page < 1 ? 1 : e.page, d.current == c ? a.when() : (d.previous = d.current, d.current = e.page, d.ft.draw().then(function () {
                    d.ft.raise("after.ft.paging", [e])
                }))
            })
        },
        _createLinks: function () {
            if (this._createdLinks !== this.total) {
                var b = this,
                    c = b.total > 1,
                    d = function (b, c, d) {
                        return a("<li/>", {
                            "class": d
                        }).attr("data-page", b).append(a("<a/>", {
                            "class": "footable-page-link",
                            href: "#"
                        }).data("page", b).html(c))
                    };
                b.$pagination.empty(), c && (b.$pagination.append(d("first", b.strings.first, "footable-page-nav")), b.$pagination.append(d("prev", b.strings.prev, "footable-page-nav")), b.limit > 0 && b.limit < b.total && b.$pagination.append(d("prev-limit", b.strings.prevPages, "footable-page-nav")));
                for (var e, f = 0; f < b.total; f++) e = d(f + 1, f + 1, "footable-page"), b.$pagination.append(e);
                c && (b.limit > 0 && b.limit < b.total && b.$pagination.append(d("next-limit", b.strings.nextPages, "footable-page-nav")), b.$pagination.append(d("next", b.strings.next, "footable-page-nav")), b.$pagination.append(d("last", b.strings.last, "footable-page-nav"))), b._createdLinks = b.total
            }
        },
        _setNavigation: function (a) {
            1 == this.current ? this.$pagination.children('li[data-page="first"],li[data-page="prev"]').addClass("disabled") : this.$pagination.children('li[data-page="first"],li[data-page="prev"]').removeClass("disabled"), this.current == this.total ? this.$pagination.children('li[data-page="next"],li[data-page="last"]').addClass("disabled") : this.$pagination.children('li[data-page="next"],li[data-page="last"]').removeClass("disabled"), 1 == (this.$pagination.children("li.footable-page.visible:first").data("page") || 1) ? this.$pagination.children('li[data-page="prev-limit"]').addClass("disabled") : this.$pagination.children('li[data-page="prev-limit"]').removeClass("disabled"), (this.$pagination.children("li.footable-page.visible:last").data("page") || this.limit) == this.total ? this.$pagination.children('li[data-page="next-limit"]').addClass("disabled") : this.$pagination.children('li[data-page="next-limit"]').removeClass("disabled"), this.limit > 0 && this.total < this.limit ? this.$pagination.children('li[data-page="prev-limit"],li[data-page="next-limit"]').css("display", "none") : this.$pagination.children('li[data-page="prev-limit"],li[data-page="next-limit"]').css("display", ""), a && this.$pagination.children("li.footable-page").removeClass("active").filter('li[data-page="' + this.current + '"]').addClass("active")
        },
        _setVisible: function (a, b) {
            if (this.limit > 0 && this.total > this.limit) {
                if (!this.$pagination.children('li.footable-page[data-page="' + a + '"]').hasClass("visible")) {
                    var c = 0,
                        d = 0;
                    1 == b ? (d = a > this.total ? this.total : a, c = d - this.limit) : (c = 1 > a ? 0 : a - 1, d = c + this.limit), 0 > c && (c = 0, d = this.limit > this.total ? this.total : this.limit), d > this.total && (d = this.total, c = this.total - this.limit < 0 ? 0 : this.total - this.limit), this.$pagination.children("li.footable-page").removeClass("visible").slice(c, d).addClass("visible")
                }
            } else this.$pagination.children("li.footable-page").removeClass("visible").slice(0, this.total).addClass("visible")
        },
        _onPageClicked: function (b) {
            if (b.preventDefault(), !a(b.target).closest("li").is(".active,.disabled")) {
                var c = b.data.self,
                    d = a(this).data("page");
                switch (d) {
                    case "first":
                        return void c.first();
                    case "prev":
                        return void c.prev();
                    case "next":
                        return void c.next();
                    case "last":
                        return void c.last();
                    case "prev-limit":
                        return void c.prevPages();
                    case "next-limit":
                        return void c.nextPages();
                    default:
                        return void c._set(d)
                }
            }
        }
    }), b.components.register("paging", b.Paging, 400)
}(jQuery, FooTable),
function (a) {
    a.Defaults.prototype.paging = {
        enabled: !1,
        countFormat: "{CP} of {TP}",
        current: 1,
        limit: 5,
        position: "center",
        size: 10,
        container: null,
        strings: {
            first: "&laquo;",
            prev: "&lsaquo;",
            next: "&rsaquo;",
            last: "&raquo;",
            prevPages: "...",
            nextPages: "..."
        }
    }
}(FooTable),
function (a) {
    a.Table.prototype.gotoPage = function (b) {
        return this.use(a.Paging)["goto"](b)
    }, a.Table.prototype.nextPage = function () {
        return this.use(a.Paging).next()
    }, a.Table.prototype.prevPage = function () {
        return this.use(a.Paging).prev()
    }, a.Table.prototype.firstPage = function () {
        return this.use(a.Paging).first()
    }, a.Table.prototype.lastPage = function () {
        return this.use(a.Paging).last()
    }, a.Table.prototype.nextPages = function () {
        return this.use(a.Paging).nextPages()
    }, a.Table.prototype.prevPages = function () {
        return this.use(a.Paging).prevPages()
    }, a.Table.prototype.pageSize = function (b) {
        return this.use(a.Paging).pageSize(b)
    }
}(FooTable),
function (a, b) {
    b.Editing = b.Component.extend({
        construct: function (c) {
            this._super(c, c.o.editing.enabled), this.pageToNew = c.o.editing.pageToNew, this.alwaysShow = c.o.editing.alwaysShow, this.column = a.extend(!0, {}, c.o.editing.column, {
                visible: this.alwaysShow
            }), this.position = c.o.editing.position, this.showText = c.o.editing.showText, this.hideText = c.o.editing.hideText, this.addText = c.o.editing.addText, this.editText = c.o.editing.editText, this.deleteText = c.o.editing.deleteText, this.viewText = c.o.editing.viewText, this.allowAdd = c.o.editing.allowAdd, this.allowEdit = c.o.editing.allowEdit, this.allowDelete = c.o.editing.allowDelete, this.allowView = c.o.editing.allowView, this._$buttons = null, this.callbacks = {
                addRow: b.checkFnValue(this, c.o.editing.addRow),
                editRow: b.checkFnValue(this, c.o.editing.editRow),
                deleteRow: b.checkFnValue(this, c.o.editing.deleteRow),
                viewRow: b.checkFnValue(this, c.o.editing.viewRow)
            }
        },
        preinit: function (c) {
            var d = this;
            this.ft.raise("preinit.ft.editing", [c]).then(function () {
                if (d.ft.$el.hasClass("footable-editing") && (d.enabled = !0), d.enabled = b.is["boolean"](c.editing) ? c.editing : d.enabled, d.enabled) {
                    if (d.pageToNew = b.is["boolean"](c.editingPageToNew) ? c.editingPageToNew : d.pageToNew, d.alwaysShow = b.is["boolean"](c.editingAlwaysShow) ? c.editingAlwaysShow : d.alwaysShow, d.position = b.is.string(c.editingPosition) ? c.editingPosition : d.position, d.showText = b.is.string(c.editingShowText) ? c.editingShowText : d.showText, d.hideText = b.is.string(c.editingHideText) ? c.editingHideText : d.hideText, d.addText = b.is.string(c.editingAddText) ? c.editingAddText : d.addText, d.editText = b.is.string(c.editingEditText) ? c.editingEditText : d.editText, d.deleteText = b.is.string(c.editingDeleteText) ? c.editingDeleteText : d.deleteText, d.viewText = b.is.string(c.editingViewText) ? c.editingViewText : d.viewText, d.allowAdd = b.is["boolean"](c.editingAllowAdd) ? c.editingAllowAdd : d.allowAdd, d.allowEdit = b.is["boolean"](c.editingAllowEdit) ? c.editingAllowEdit : d.allowEdit, d.allowDelete = b.is["boolean"](c.editingAllowDelete) ? c.editingAllowDelete : d.allowDelete, d.allowView = b.is["boolean"](c.editingAllowView) ? c.editingAllowView : d.allowView, d.column = new b.EditingColumn(d.ft, d, a.extend(!0, {}, d.column, c.editingColumn, {
                            visible: d.alwaysShow
                        })), d.ft.$el.hasClass("footable-editing-left") && (d.position = "left"), d.ft.$el.hasClass("footable-editing-right") && (d.position = "right"), "right" === d.position) d.column.index = d.ft.columns.array.length;
                    else {
                        d.column.index = 0;
                        for (var e = 0, f = d.ft.columns.array.length; f > e; e++) d.ft.columns.array[e].index += 1
                    }
                    d.ft.columns.array.push(d.column), d.ft.columns.array.sort(function (a, b) {
                        return a.index - b.index
                    }), d.callbacks.addRow = b.checkFnValue(d, c.editingAddRow, d.callbacks.addRow), d.callbacks.editRow = b.checkFnValue(d, c.editingEditRow, d.callbacks.editRow), d.callbacks.deleteRow = b.checkFnValue(d, c.editingDeleteRow, d.callbacks.deleteRow), d.callbacks.viewRow = b.checkFnValue(d, c.editingViewRow, d.callbacks.viewRow)
                }
            }, function () {
                d.enabled = !1
            })
        },
        init: function () {
            var a = this;
            this.ft.raise("init.ft.editing").then(function () {
                a.$create()
            }, function () {
                a.enabled = !1
            })
        },
        destroy: function () {
            var a = this;
            this.ft.raise("destroy.ft.editing").then(function () {
                a.ft.$el.removeClass("footable-editing footable-editing-always-show footable-editing-no-add footable-editing-no-edit footable-editing-no-delete footable-editing-no-view").off("click.ft.editing").find("tfoot > tr.footable-editing").remove()
            })
        },
        $create: function () {
            var b = this,
                c = "right" === b.position ? "footable-editing-right" : "footable-editing-left";
            b.ft.$el.addClass("footable-editing").addClass(c).on("click.ft.editing", ".footable-show", {
                self: b
            }, b._onShowClick).on("click.ft.editing", ".footable-hide", {
                self: b
            }, b._onHideClick).on("click.ft.editing", ".footable-edit", {
                self: b
            }, b._onEditClick).on("click.ft.editing", ".footable-delete", {
                self: b
            }, b._onDeleteClick).on("click.ft.editing", ".footable-view", {
                self: b
            }, b._onViewClick).on("click.ft.editing", ".footable-add", {
                self: b
            }, b._onAddClick), b.$cell = a("<td/>").attr("colspan", b.ft.columns.visibleColspan).append(b.$buttonShow()), b.allowAdd && b.$cell.append(b.$buttonAdd()), b.$cell.append(b.$buttonHide()), b.alwaysShow && b.ft.$el.addClass("footable-editing-always-show"), b.allowAdd || b.ft.$el.addClass("footable-editing-no-add"), b.allowEdit || b.ft.$el.addClass("footable-editing-no-edit"), b.allowDelete || b.ft.$el.addClass("footable-editing-no-delete"), b.allowView || b.ft.$el.addClass("footable-editing-no-view");
            var d = b.ft.$el.children("tfoot");
            0 == d.length && (d = a("<tfoot/>"), b.ft.$el.append(d)), b.$row = a("<tr/>", {
                "class": "footable-editing"
            }).append(b.$cell).appendTo(d)
        },
        $buttonShow: function () {
            return '<button type="button" class="btn btn-primary footable-show">' + this.showText + "</button>"
        },
        $buttonHide: function () {
            return '<button type="button" class="btn btn-default footable-hide">' + this.hideText + "</button>"
        },
        $buttonAdd: function () {
            return '<button type="button" class="btn btn-primary footable-add">' + this.addText + "</button> "
        },
        $buttonEdit: function () {
            return '<button type="button" class="btn btn-default footable-edit">' + this.editText + "</button> "
        },
        $buttonDelete: function () {
            return '<button type="button" class="btn btn-default footable-delete">' + this.deleteText + "</button>"
        },
        $buttonView: function () {
            return '<button type="button" class="btn btn-default footable-view">' + this.viewText + "</button> "
        },
        $rowButtons: function () {
            return b.is.jq(this._$buttons) ? this._$buttons.clone() : (this._$buttons = a('<div class="btn-group btn-group-xs" role="group"></div>'), this.allowView && this._$buttons.append(this.$buttonView()), this.allowEdit && this._$buttons.append(this.$buttonEdit()), this.allowDelete && this._$buttons.append(this.$buttonDelete()), this._$buttons)
        },
        draw: function () {
            this.$cell.attr("colspan", this.ft.columns.visibleColspan)
        },
        _onEditClick: function (c) {
            c.preventDefault();
            var d = c.data.self,
                e = a(this).closest("tr").data("__FooTableRow__");
            e instanceof b.Row && d.ft.raise("edit.ft.editing", [e]).then(function () {
                d.callbacks.editRow.call(d.ft, e)
            })
        },
        _onDeleteClick: function (c) {
            c.preventDefault();
            var d = c.data.self,
                e = a(this).closest("tr").data("__FooTableRow__");
            e instanceof b.Row && d.ft.raise("delete.ft.editing", [e]).then(function () {
                d.callbacks.deleteRow.call(d.ft, e)
            })
        },
        _onViewClick: function (c) {
            c.preventDefault();
            var d = c.data.self,
                e = a(this).closest("tr").data("__FooTableRow__");
            e instanceof b.Row && d.ft.raise("view.ft.editing", [e]).then(function () {
                d.callbacks.viewRow.call(d.ft, e)
            })
        },
        _onAddClick: function (a) {
            a.preventDefault();
            var b = a.data.self;
            b.ft.raise("add.ft.editing").then(function () {
                b.callbacks.addRow.call(b.ft)
            })
        },
        _onShowClick: function (a) {
            a.preventDefault();
            var b = a.data.self;
            b.ft.raise("show.ft.editing").then(function () {
                b.ft.$el.addClass("footable-editing-show"), b.column.visible = !0, b.ft.draw()
            })
        },
        _onHideClick: function (a) {
            a.preventDefault();
            var b = a.data.self;
            b.ft.raise("hide.ft.editing").then(function () {
                b.ft.$el.removeClass("footable-editing-show"), b.column.visible = !1, b.ft.draw()
            })
        }
    }), b.components.register("editing", b.Editing, 850)
}(jQuery, FooTable),
function (a, b) {
    b.EditingColumn = b.Column.extend({
        construct: function (a, b, c) {
            this._super(a, c, "editing"), this.editing = b, this.internal = !0
        },
        $create: function () {
            (this.$el = !this.virtual && b.is.jq(this.$el) ? this.$el : a("<th/>", {
                "class": "footable-editing"
            })).html(this.title)
        },
        parser: function (c) {
            if (b.is.string(c) && (c = a(a.trim(c))), b.is.element(c) && (c = a(c)), b.is.jq(c)) {
                var d = c.prop("tagName").toLowerCase();
                return "td" == d || "th" == d ? c.data("value") || c.contents() : c
            }
            return null
        },
        createCell: function (c) {
            var d = this.editing.$rowButtons(),
                e = a("<td/>").append(d);
            return b.is.jq(c.$el) && (0 === this.index ? e.prependTo(c.$el) : e.insertAfter(c.$el.children().eq(this.index - 1))), new b.Cell(this.ft, c, this, e || e.html())
        }
    }), b.columns.register("editing", b.EditingColumn)
}(jQuery, FooTable),
function (a, b) {
    b.Defaults.prototype.editing = {
        enabled: !1,
        pageToNew: !0,
        position: "right",
        alwaysShow: !1,
        addRow: function () {},
        editRow: function (a) {},
        deleteRow: function (a) {},
        viewRow: function (a) {},
        showText: '<span class="fooicon fooicon-pencil" aria-hidden="true"></span> Edit rows',
        hideText: "Cancel",
        addText: "New row",
        editText: '<span class="fooicon fooicon-pencil" aria-hidden="true"></span>',
        deleteText: '<span class="fooicon fooicon-trash" aria-hidden="true"></span>',
        viewText: '<span class="fooicon fooicon-stats" aria-hidden="true"></span>',
        allowAdd: !0,
        allowEdit: !0,
        allowDelete: !0,
        allowView: !1,
        column: {
            classes: "footable-editing",
            name: "editing",
            title: "",
            filterable: !1,
            sortable: !1
        }
    }
}(jQuery, FooTable),
function (a, b) {
    b.is.defined(b.Paging) && (b.Paging.prototype.unpaged = [], b.Paging.extend("predraw", function () {
        this.unpaged = this.ft.rows.array.slice(0), this._super()
    }))
}(jQuery, FooTable),
function (a, b) {
    b.Row.prototype.add = function (c) {
        c = b.is["boolean"](c) ? c : !0;
        var d = this;
        return a.Deferred(function (a) {
            var b = d.ft.rows.all.push(d) - 1;
            return c ? d.ft.draw().then(function () {
                a.resolve(b)
            }) : void a.resolve(b)
        })
    }, b.Row.prototype["delete"] = function (c) {
        c = b.is["boolean"](c) ? c : !0;
        var d = this;
        return a.Deferred(function (a) {
            var e = d.ft.rows.all.indexOf(d);
            return b.is.number(e) && e >= 0 && e < d.ft.rows.all.length && (d.ft.rows.all.splice(e, 1), c) ? d.ft.draw().then(function () {
                a.resolve(d)
            }) : void a.resolve(d)
        })
    }, b.is.defined(b.Paging) && b.Row.extend("add", function (a) {
        a = b.is["boolean"](a) ? a : !0;
        var c, d = this,
            e = this._super(a),
            f = d.ft.use(b.Editing);
        return f && f.pageToNew && (c = d.ft.use(b.Paging)) && a ? e.then(function () {
            var a = c.unpaged.indexOf(d),
                b = Math.ceil((a + 1) / c.size);
            return c.current !== b ? c["goto"](b) : void 0
        }) : e
    }), b.is.defined(b.Sorting) && b.Row.extend("val", function (a, c) {
        c = b.is["boolean"](c) ? c : !0;
        var d = this._super(a);
        if (!b.is.hash(a)) return d;
        var e = this;
        return c && e.ft.draw().then(function () {
            var a, c = e.ft.use(b.Editing);
            if (b.is.defined(b.Paging) && c && c.pageToNew && (a = e.ft.use(b.Paging))) {
                var d = a.unpaged.indexOf(e),
                    f = Math.ceil((d + 1) / a.size);
                if (a.current !== f) return a["goto"](f)
            }
        }), d
    })
}(jQuery, FooTable),
function (a) {
    a.Rows.prototype.add = function (b, c) {
        var d = b;
        a.is.hash(b) && (d = new FooTable.Row(this.ft, this.ft.columns.array, b)), d instanceof FooTable.Row && d.add(c)
    }, a.Rows.prototype.update = function (b, c, d) {
        var e = this.ft.rows.all.length,
            f = b;
        a.is.number(b) && b >= 0 && e > b && (f = this.ft.rows.all[b]), f instanceof FooTable.Row && a.is.hash(c) && f.val(c, d)
    }, a.Rows.prototype["delete"] = function (b, c) {
        var d = this.ft.rows.all.length,
            e = b;
        a.is.number(b) && b >= 0 && d > b && (e = this.ft.rows.all[b]), e instanceof FooTable.Row && e["delete"](c)
    }
}(FooTable),
function (a, b) {
    var c = 0,
        d = function (a) {
            var b, c, d = 2166136261;
            for (b = 0, c = a.length; c > b; b++) d ^= a.charCodeAt(b), d += (d << 1) + (d << 4) + (d << 7) + (d << 8) + (d << 24);
            return d >>> 0
        }(location.origin + location.pathname);
    b.State = b.Component.extend({
        construct: function (a) {
            this._super(a, a.o.state.enabled), this._key = "1", this.key = this._key + (b.is.string(a.o.state.key) ? a.o.state.key : this._uid()), this.filtering = b.is["boolean"](a.o.state.filtering) ? a.o.state.filtering : !0, this.paging = b.is["boolean"](a.o.state.paging) ? a.o.state.paging : !0, this.sorting = b.is["boolean"](a.o.state.sorting) ? a.o.state.sorting : !0
        },
        preinit: function (a) {
            var c = this;
            this.ft.raise("preinit.ft.state", [a]).then(function () {
                c.enabled = b.is["boolean"](a.state) ? a.state : c.enabled, c.enabled && (c.key = c._key + (b.is.string(a.stateKey) ? a.stateKey : c.key), c.filtering = b.is["boolean"](a.stateFiltering) ? a.stateFiltering : c.filtering, c.paging = b.is["boolean"](a.statePaging) ? a.statePaging : c.paging, c.sorting = b.is["boolean"](a.stateSorting) ? a.stateSorting : c.sorting)
            }, function () {
                c.enabled = !1
            })
        },
        get: function (a) {
            return JSON.parse(localStorage.getItem(this.key + ":" + a))
        },
        set: function (a, b) {
            localStorage.setItem(this.key + ":" + a, JSON.stringify(b))
        },
        remove: function (a) {
            localStorage.removeItem(this.key + ":" + a)
        },
        read: function () {
            this.ft.execute(!1, !0, "readState")
        },
        write: function () {
            this.ft.execute(!1, !0, "writeState")
        },
        clear: function () {
            this.ft.execute(!1, !0, "clearState")
        },
        _uid: function () {
            var a = this.ft.$el.attr("id");
            return d + "_" + (b.is.string(a) ? a : ++c)
        }
    }), b.components.register("state", b.State, 700)
}(jQuery, FooTable),
function (a) {
    a.Component.prototype.readState = function () {}, a.Component.prototype.writeState = function () {}, a.Component.prototype.clearState = function () {}
}(FooTable),
function (a) {
    a.Defaults.prototype.state = {
        enabled: !1,
        filtering: !0,
        paging: !0,
        sorting: !0,
        key: null
    }
}(FooTable),
function (a) {
    a.Filtering && (a.Filtering.prototype.readState = function () {
        if (this.ft.state.filtering) {
            var b = this.ft.state.get("filtering");
            a.is.hash(b) && !a.is.emptyArray(b.filters) && (this.filters = this.ensure(b.filters))
        }
    }, a.Filtering.prototype.writeState = function () {
        if (this.ft.state.filtering) {
            var b = a.arr.map(this.filters, function (b) {
                return {
                    name: b.name,
                    query: b.query instanceof a.Query ? b.query.val() : b.query,
                    columns: a.arr.map(b.columns, function (a) {
                        return a.name
                    }),
                    hidden: b.hidden,
                    space: b.space,
                    connectors: b.connectors,
                    ignoreCase: b.ignoreCase
                }
            });
            this.ft.state.set("filtering", {
                filters: b
            })
        }
    }, a.Filtering.prototype.clearState = function () {
        this.ft.state.filtering && this.ft.state.remove("filtering")
    })
}(FooTable),
function (a) {
    a.Paging && (a.Paging.prototype.readState = function () {
        if (this.ft.state.paging) {
            var b = this.ft.state.get("paging");
            a.is.hash(b) && (this.current = b.current, this.size = b.size)
        }
    }, a.Paging.prototype.writeState = function () {
        this.ft.state.paging && this.ft.state.set("paging", {
            current: this.current,
            size: this.size
        })
    }, a.Paging.prototype.clearState = function () {
        this.ft.state.paging && this.ft.state.remove("paging")
    })
}(FooTable),
function (a) {
    a.Sorting && (a.Sorting.prototype.readState = function () {
        if (this.ft.state.sorting) {
            var b = this.ft.state.get("sorting");
            if (a.is.hash(b)) {
                var c = this.ft.columns.get(b.column);
                c instanceof a.Column && (this.column = c, this.column.direction = b.direction)
            }
        }
    }, a.Sorting.prototype.writeState = function () {
        this.ft.state.sorting && this.column instanceof a.Column && this.ft.state.set("sorting", {
            column: this.column.name,
            direction: this.column.direction
        })
    }, a.Sorting.prototype.clearState = function () {
        this.ft.state.sorting && this.ft.state.remove("sorting")
    })
}(FooTable),
function (a) {
    a.Table.extend("_construct", function (a) {
        return this.state = this.use(FooTable.State), this._super(a)
    }), a.Table.extend("_preinit", function () {
        var a = this;
        return a._super().then(function () {
            a.state.enabled && a.state.read()
        })
    }), a.Table.extend("draw", function () {
        var a = this;
        return a._super().then(function () {
            a.state.enabled && a.state.write()
        })
    })
}(FooTable),
function (a, b) {
    b.Export = b.Component.extend({
        construct: function (a) {
            this._super(a, !0), this.snapshot = []
        },
        predraw: function () {
            this.snapshot = this.ft.rows.array.slice(0)
        },
        columns: function () {
            var a = [];
            return b.arr.each(this.ft.columns.array, function (b) {
                b.internal || a.push({
                    type: b.type,
                    name: b.name,
                    title: b.title,
                    visible: b.visible,
                    hidden: b.hidden,
                    classes: b.classes,
                    style: b.style
                })
            }), a
        },
        rows: function (a) {
            a = b.is["boolean"](a) ? a : !1;
            var c = a ? this.ft.rows.all : this.snapshot,
                d = [];
            return b.arr.each(c, function (a) {
                d.push(a.val())
            }), d
        },
        json: function (a) {
            return JSON.parse(JSON.stringify({
                columns: this.columns(),
                rows: this.rows(a)
            }))
        },
        csv: function (a) {
            var c, d, e = "",
                f = this.columns();
            b.arr.each(f, function (a, b) {
                d = '"' + a.title.replace(/"/g, '""') + '"', e += 0 === b ? d : "," + d
            }), e += "\n";
            var g = a ? this.ft.rows.all : this.snapshot;
            return b.arr.each(g, function (a) {
                b.arr.each(a.cells, function (a, b) {
                    a.column.internal || (c = a.column.stringify.call(a.column, a.value, a.ft.o, a.row.value), d = '"' + c.replace(/"/g, '""') + '"', e += 0 === b ? d : "," + d)
                }), e += "\n"
            }), e
        }
    }), b.components.register("export", b.Export, 490)
}(jQuery, FooTable),
function (a) {
    a.Column.prototype.__export_define__ = function (b) {
        this.stringify = a.checkFnValue(this, b.stringify, this.stringify)
    }, a.Column.extend("define", function (a) {
        this._super(a), this.__export_define__(a)
    }), a.Column.prototype.stringify = function (a, b, c) {
        return a + ""
    }, a.is.defined(a.DateColumn) && (a.DateColumn.prototype.stringify = function (b, c, d) {
        return a.is.object(b) && a.is["boolean"](b._isAMomentObject) && b.isValid() ? b.format(this.formatString) : ""
    }), a.ObjectColumn.prototype.stringify = function (b, c, d) {
        return a.is.object(b) ? JSON.stringify(b) : ""
    }, a.ArrayColumn.prototype.stringify = function (b, c, d) {
        return a.is.array(b) ? JSON.stringify(b) : ""
    }
}(FooTable),
function (a) {
    a.Table.prototype.toJSON = function (b) {
        return this.use(a.Export).json(b)
    }, a.Table.prototype.toCSV = function (b) {
        return this.use(a.Export).csv(b)
    }
}(FooTable); /*!Datepicker for Bootstrap * Copyright 2012 Stefan Petre * Improvements by Andrew Rowls * Licensed under the Apache License v2.0*/
! function (t, e) {
    function i() {
        return new Date(Date.UTC.apply(Date, arguments))
    }

    function a() {
        var t = new Date;
        return i(t.getFullYear(), t.getMonth(), t.getDate())
    }

    function s(t) {
        return function () {
            return this[t].apply(this, arguments)
        }
    }

    function n(e, i) {
        function a(t, e) {
            return e.toLowerCase()
        }
        var s, n = t(e).data(),
            r = {},
            h = new RegExp("^" + i.toLowerCase() + "([A-Z])");
        i = new RegExp("^" + i.toLowerCase());
        for (var o in n) i.test(o) && (s = o.replace(h, a), r[s] = n[o]);
        return r
    }

    function r(e) {
        var i = {};
        if (f[e] || (e = e.split("-")[0], f[e])) {
            var a = f[e];
            return t.each(p, function (t, e) {
                e in a && (i[e] = a[e])
            }), i
        }
    }
    var h = t(window),
        o = function () {
            var e = {
                get: function (t) {
                    return this.slice(t)[0]
                },
                contains: function (t) {
                    for (var e = t && t.valueOf(), i = 0, a = this.length; a > i; i++)
                        if (this[i].valueOf() === e) return i;
                    return -1
                },
                remove: function (t) {
                    this.splice(t, 1)
                },
                replace: function (e) {
                    e && (t.isArray(e) || (e = [e]), this.clear(), this.push.apply(this, e))
                },
                clear: function () {
                    this.splice(0)
                },
                copy: function () {
                    var t = new o;
                    return t.replace(this), t
                }
            };
            return function () {
                var i = [];
                return i.push.apply(i, arguments), t.extend(i, e), i
            }
        }(),
        d = function (e, i) {
            this.dates = new o, this.viewDate = a(), this.focusDate = null, this._process_options(i), this.element = t(e), this.isInline = !1, this.isInput = this.element.is("input"), this.component = this.element.is(".date") ? this.element.find(".add-on, .input-group-addon, .btn") : !1, this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.picker = t(g.template), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.viewMode = this.o.startView, this.o.calendarWeeks && this.picker.find("tfoot th.today").attr("colspan", function (t, e) {
                return parseInt(e) + 1
            }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.showMode(), this.isInline && this.show()
        };
    d.prototype = {
        constructor: d,
        _process_options: function (e) {
            this._o = t.extend({}, this._o, e);
            var i = this.o = t.extend({}, this._o),
                a = i.language;
            switch (f[a] || (a = a.split("-")[0], f[a] || (a = u.language)), i.language = a, i.startView) {
                case 2:
                case "decade":
                    i.startView = 2;
                    break;
                case 1:
                case "year":
                    i.startView = 1;
                    break;
                default:
                    i.startView = 0
            }
            switch (i.minViewMode) {
                case 1:
                case "months":
                    i.minViewMode = 1;
                    break;
                case 2:
                case "years":
                    i.minViewMode = 2;
                    break;
                default:
                    i.minViewMode = 0
            }
            i.startView = Math.max(i.startView, i.minViewMode), i.multidate !== !0 && (i.multidate = Number(i.multidate) || !1, i.multidate = i.multidate !== !1 ? Math.max(0, i.multidate) : 1), i.multidateSeparator = String(i.multidateSeparator), i.weekStart %= 7, i.weekEnd = (i.weekStart + 6) % 7;
            var s = g.parseFormat(i.format);
            i.startDate !== -1 / 0 && (i.startDate = i.startDate ? i.startDate instanceof Date ? this._local_to_utc(this._zero_time(i.startDate)) : g.parseDate(i.startDate, s, i.language) : -1 / 0), 1 / 0 !== i.endDate && (i.endDate = i.endDate ? i.endDate instanceof Date ? this._local_to_utc(this._zero_time(i.endDate)) : g.parseDate(i.endDate, s, i.language) : 1 / 0), i.daysOfWeekDisabled = i.daysOfWeekDisabled || [], t.isArray(i.daysOfWeekDisabled) || (i.daysOfWeekDisabled = i.daysOfWeekDisabled.split(/[,\s]*/)), i.daysOfWeekDisabled = t.map(i.daysOfWeekDisabled, function (t) {
                return parseInt(t, 10)
            });
            var n = String(i.orientation).toLowerCase().split(/\s+/g),
                r = i.orientation.toLowerCase();
            if (n = t.grep(n, function (t) {
                    return /^auto|left|right|top|bottom$/.test(t)
                }), i.orientation = {
                    x: "auto",
                    y: "auto"
                }, r && "auto" !== r)
                if (1 === n.length) switch (n[0]) {
                    case "top":
                    case "bottom":
                        i.orientation.y = n[0];
                        break;
                    case "left":
                    case "right":
                        i.orientation.x = n[0]
                } else r = t.grep(n, function (t) {
                    return /^left|right$/.test(t)
                }), i.orientation.x = r[0] || "auto", r = t.grep(n, function (t) {
                    return /^top|bottom$/.test(t)
                }), i.orientation.y = r[0] || "auto";
                else;
        },
        _events: [],
        _secondaryEvents: [],
        _applyEvents: function (t) {
            for (var i, a, s, n = 0; n < t.length; n++) i = t[n][0], 2 === t[n].length ? (a = e, s = t[n][1]) : 3 === t[n].length && (a = t[n][1], s = t[n][2]), i.on(s, a)
        },
        _unapplyEvents: function (t) {
            for (var i, a, s, n = 0; n < t.length; n++) i = t[n][0], 2 === t[n].length ? (s = e, a = t[n][1]) : 3 === t[n].length && (s = t[n][1], a = t[n][2]), i.off(a, s)
        },
        _buildEvents: function () {
            this.isInput ? this._events = [
                [this.element, {
                    focus: t.proxy(this.show, this),
                    keyup: t.proxy(function (e) {
                        -1 === t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                    }, this),
                    keydown: t.proxy(this.keydown, this)
                }]
            ] : this.component && this.hasInput ? this._events = [
                [this.element.find("input"), {
                    focus: t.proxy(this.show, this),
                    keyup: t.proxy(function (e) {
                        -1 === t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                    }, this),
                    keydown: t.proxy(this.keydown, this)
                }],
                [this.component, {
                    click: t.proxy(this.show, this)
                }]
            ] : this.element.is("div") ? this.isInline = !0 : this._events = [
                [this.element, {
                    click: t.proxy(this.show, this)
                }]
            ], this._events.push([this.element, "*", {
                blur: t.proxy(function (t) {
                    this._focused_from = t.target
                }, this)
            }], [this.element, {
                blur: t.proxy(function (t) {
                    this._focused_from = t.target
                }, this)
            }]), this._secondaryEvents = [
                [this.picker, {
                    click: t.proxy(this.click, this)
                }],
                [t(window), {
                    resize: t.proxy(this.place, this)
                }],
                [t(document), {
                    "mousedown touchstart": t.proxy(function (t) {
                        this.element.is(t.target) || this.element.find(t.target).length || this.picker.is(t.target) || this.picker.find(t.target).length || this.hide()
                    }, this)
                }]
            ]
        },
        _attachEvents: function () {
            this._detachEvents(), this._applyEvents(this._events)
        },
        _detachEvents: function () {
            this._unapplyEvents(this._events)
        },
        _attachSecondaryEvents: function () {
            this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
        },
        _detachSecondaryEvents: function () {
            this._unapplyEvents(this._secondaryEvents)
        },
        _trigger: function (e, i) {
            var a = i || this.dates.get(-1),
                s = this._utc_to_local(a);
            this.element.trigger({
                type: e,
                date: s,
                dates: t.map(this.dates, this._utc_to_local),
                format: t.proxy(function (t, e) {
                    0 === arguments.length ? (t = this.dates.length - 1, e = this.o.format) : "string" == typeof t && (e = t, t = this.dates.length - 1), e = e || this.o.format;
                    var i = this.dates.get(t);
                    return g.formatDate(i, e, this.o.language)
                }, this)
            })
        },
        show: function () {
            this.isInline || this.picker.appendTo("body"), this.picker.show(), this.place(), this._attachSecondaryEvents(), this._trigger("show")
        },
        hide: function () {
            this.isInline || this.picker.is(":visible") && (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.viewMode = this.o.startView, this.showMode(), this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this._trigger("hide"))
        },
        remove: function () {
            this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date
        },
        _utc_to_local: function (t) {
            return t && new Date(t.getTime() + 6e4 * t.getTimezoneOffset())
        },
        _local_to_utc: function (t) {
            return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset())
        },
        _zero_time: function (t) {
            return t && new Date(t.getFullYear(), t.getMonth(), t.getDate())
        },
        _zero_utc_time: function (t) {
            return t && new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()))
        },
        getDates: function () {
            return t.map(this.dates, this._utc_to_local)
        },
        getUTCDates: function () {
            return t.map(this.dates, function (t) {
                return new Date(t)
            })
        },
        getDate: function () {
            return this._utc_to_local(this.getUTCDate())
        },
        getUTCDate: function () {
            return new Date(this.dates.get(-1))
        },
        setDates: function () {
            var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
            this.update.apply(this, e), this._trigger("changeDate"), this.setValue()
        },
        setUTCDates: function () {
            var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
            this.update.apply(this, t.map(e, this._utc_to_local)), this._trigger("changeDate"), this.setValue()
        },
        setDate: s("setDates"),
        setUTCDate: s("setUTCDates"),
        setValue: function () {
            var t = this.getFormattedDate();
            this.isInput ? this.element.val(t).change() : this.component && this.element.find("input").val(t).change()
        },
        getFormattedDate: function (i) {
            i === e && (i = this.o.format);
            var a = this.o.language;
            return t.map(this.dates, function (t) {
                return g.formatDate(t, i, a)
            }).join(this.o.multidateSeparator)
        },
        setStartDate: function (t) {
            this._process_options({
                startDate: t
            }), this.update(), this.updateNavArrows()
        },
        setEndDate: function (t) {
            this._process_options({
                endDate: t
            }), this.update(), this.updateNavArrows()
        },
        setDaysOfWeekDisabled: function (t) {
            this._process_options({
                daysOfWeekDisabled: t
            }), this.update(), this.updateNavArrows()
        },
        place: function () {
            if (!this.isInline) {
                var e = this.picker.outerWidth(),
                    i = this.picker.outerHeight(),
                    a = 10,
                    s = h.width(),
                    n = h.height(),
                    r = h.scrollTop(),
                    o = parseInt(this.element.parents().filter(function () {
                        return "auto" !== t(this).css("z-index")
                    }).first().css("z-index")) + 10,
                    d = this.component ? this.component.parent().offset() : this.element.offset(),
                    l = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                    c = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
                    u = d.left,
                    p = d.top;
                this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (u -= e - c)) : (this.picker.addClass("datepicker-orient-left"), d.left < 0 ? u -= d.left - a : d.left + e > s && (u = s - e - a));
                var f, g, v = this.o.orientation.y;
                "auto" === v && (f = -r + d.top - i, g = r + n - (d.top + l + i), v = Math.max(f, g) === g ? "top" : "bottom"), this.picker.addClass("datepicker-orient-" + v), "top" === v ? p += l : p -= i + parseInt(this.picker.css("padding-top")), this.picker.css({
                    top: p,
                    left: u,
                    zIndex: o
                })
            }
        },
        _allow_update: !0,
        update: function () {
            if (this._allow_update) {
                var e = this.dates.copy(),
                    i = [],
                    a = !1;
                arguments.length ? (t.each(arguments, t.proxy(function (t, e) {
                    e instanceof Date && (e = this._local_to_utc(e)), i.push(e)
                }, this)), a = !0) : (i = this.isInput ? this.element.val() : this.element.data("date") || this.element.find("input").val(), i = i && this.o.multidate ? i.split(this.o.multidateSeparator) : [i], delete this.element.data().date), i = t.map(i, t.proxy(function (t) {
                    return g.parseDate(t, this.o.format, this.o.language)
                }, this)), i = t.grep(i, t.proxy(function (t) {
                    return t < this.o.startDate || t > this.o.endDate || !t
                }, this), !0), this.dates.replace(i), this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate && (this.viewDate = new Date(this.o.endDate)), a ? this.setValue() : i.length && String(e) !== String(this.dates) && this._trigger("changeDate"), !this.dates.length && e.length && this._trigger("clearDate"), this.fill()
            }
        },
        fillDow: function () {
            var t = this.o.weekStart,
                e = "<tr>";
            if (this.o.calendarWeeks) {
                var i = '<th class="cw">&nbsp;</th>';
                e += i, this.picker.find(".datepicker-days thead tr:first-child").prepend(i)
            }
            for (; t < this.o.weekStart + 7;) e += '<th class="dow">' + f[this.o.language].daysMin[t++ % 7] + "</th>";
            e += "</tr>", this.picker.find(".datepicker-days thead").append(e)
        },
        fillMonths: function () {
            for (var t = "", e = 0; 12 > e;) t += '<span class="month">' + f[this.o.language].monthsShort[e++] + "</span>";
            this.picker.find(".datepicker-months td").html(t)
        },
        setRange: function (e) {
            e && e.length ? this.range = t.map(e, function (t) {
                return t.valueOf()
            }) : delete this.range, this.fill()
        },
        getClassNames: function (e) {
            var i = [],
                a = this.viewDate.getUTCFullYear(),
                s = this.viewDate.getUTCMonth(),
                n = new Date;
            return e.getUTCFullYear() < a || e.getUTCFullYear() === a && e.getUTCMonth() < s ? i.push("old") : (e.getUTCFullYear() > a || e.getUTCFullYear() === a && e.getUTCMonth() > s) && i.push("new"), this.focusDate && e.valueOf() === this.focusDate.valueOf() && i.push("focused"), this.o.todayHighlight && e.getUTCFullYear() === n.getFullYear() && e.getUTCMonth() === n.getMonth() && e.getUTCDate() === n.getDate() && i.push("today"), -1 !== this.dates.contains(e) && i.push("active"), (e.valueOf() < this.o.startDate || e.valueOf() > this.o.endDate || -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled)) && i.push("disabled"), this.range && (e > this.range[0] && e < this.range[this.range.length - 1] && i.push("range"), -1 !== t.inArray(e.valueOf(), this.range) && i.push("selected")), i
        },
        fill: function () {
            var a, s = new Date(this.viewDate),
                n = s.getUTCFullYear(),
                r = s.getUTCMonth(),
                h = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
                o = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
                d = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCFullYear() : 1 / 0,
                l = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCMonth() : 1 / 0,
                c = f[this.o.language].today || f.en.today || "",
                u = f[this.o.language].clear || f.en.clear || "";
            this.picker.find(".datepicker-days thead th.datepicker-switch").text(f[this.o.language].months[r] + " " + n), this.picker.find("tfoot th.today").text(c).toggle(this.o.todayBtn !== !1), this.picker.find("tfoot th.clear").text(u).toggle(this.o.clearBtn !== !1), this.updateNavArrows(), this.fillMonths();
            var p = i(n, r - 1, 28),
                v = g.getDaysInMonth(p.getUTCFullYear(), p.getUTCMonth());
            p.setUTCDate(v), p.setUTCDate(v - (p.getUTCDay() - this.o.weekStart + 7) % 7);
            var D = new Date(p);
            D.setUTCDate(D.getUTCDate() + 42), D = D.valueOf();
            for (var m, y = []; p.valueOf() < D;) {
                if (p.getUTCDay() === this.o.weekStart && (y.push("<tr>"), this.o.calendarWeeks)) {
                    var w = new Date(+p + (this.o.weekStart - p.getUTCDay() - 7) % 7 * 864e5),
                        k = new Date(Number(w) + (11 - w.getUTCDay()) % 7 * 864e5),
                        _ = new Date(Number(_ = i(k.getUTCFullYear(), 0, 1)) + (11 - _.getUTCDay()) % 7 * 864e5),
                        C = (k - _) / 864e5 / 7 + 1;
                    y.push('<td class="cw">' + C + "</td>")
                }
                if (m = this.getClassNames(p), m.push("day"), this.o.beforeShowDay !== t.noop) {
                    var T = this.o.beforeShowDay(this._utc_to_local(p));
                    T === e ? T = {} : "boolean" == typeof T ? T = {
                        enabled: T
                    } : "string" == typeof T && (T = {
                        classes: T
                    }), T.enabled === !1 && m.push("disabled"), T.classes && (m = m.concat(T.classes.split(/\s+/))), T.tooltip && (a = T.tooltip)
                }
                m = t.unique(m), y.push('<td class="' + m.join(" ") + '"' + (a ? ' title="' + a + '"' : "") + ">" + p.getUTCDate() + "</td>"), p.getUTCDay() === this.o.weekEnd && y.push("</tr>"), p.setUTCDate(p.getUTCDate() + 1)
            }
            this.picker.find(".datepicker-days tbody").empty().append(y.join(""));
            var b = this.picker.find(".datepicker-months").find("th:eq(1)").text(n).end().find("span").removeClass("active");
            t.each(this.dates, function (t, e) {
                e.getUTCFullYear() === n && b.eq(e.getUTCMonth()).addClass("active")
            }), (h > n || n > d) && b.addClass("disabled"), n === h && b.slice(0, o).addClass("disabled"), n === d && b.slice(l + 1).addClass("disabled"), y = "", n = 10 * parseInt(n / 10, 10);
            var U = this.picker.find(".datepicker-years").find("th:eq(1)").text(n + "-" + (n + 9)).end().find("td");
            n -= 1;
            for (var M, x = t.map(this.dates, function (t) {
                    return t.getUTCFullYear()
                }), S = -1; 11 > S; S++) M = ["year"], -1 === S ? M.push("old") : 10 === S && M.push("new"), -1 !== t.inArray(n, x) && M.push("active"), (h > n || n > d) && M.push("disabled"), y += '<span class="' + M.join(" ") + '">' + n + "</span>", n += 1;
            U.html(y)
        },
        updateNavArrows: function () {
            if (this._allow_update) {
                var t = new Date(this.viewDate),
                    e = t.getUTCFullYear(),
                    i = t.getUTCMonth();
                switch (this.viewMode) {
                    case 0:
                        this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() && i <= this.o.startDate.getUTCMonth() ? this.picker.find(".prev").css({
                            visibility: "hidden"
                        }) : this.picker.find(".prev").css({
                            visibility: "visible"
                        }), 1 / 0 !== this.o.endDate && e >= this.o.endDate.getUTCFullYear() && i >= this.o.endDate.getUTCMonth() ? this.picker.find(".next").css({
                            visibility: "hidden"
                        }) : this.picker.find(".next").css({
                            visibility: "visible"
                        });
                        break;
                    case 1:
                    case 2:
                        this.o.startDate !== -1 / 0 && e <= this.o.startDate.getUTCFullYear() ? this.picker.find(".prev").css({
                            visibility: "hidden"
                        }) : this.picker.find(".prev").css({
                            visibility: "visible"
                        }), 1 / 0 !== this.o.endDate && e >= this.o.endDate.getUTCFullYear() ? this.picker.find(".next").css({
                            visibility: "hidden"
                        }) : this.picker.find(".next").css({
                            visibility: "visible"
                        })
                }
            }
        },
        click: function (e) {
            e.preventDefault();
            var a, s, n, r = t(e.target).closest("span, td, th");
            if (1 === r.length) switch (r[0].nodeName.toLowerCase()) {
                case "th":
                    switch (r[0].className) {
                        case "datepicker-switch":
                            this.showMode(1);
                            break;
                        case "prev":
                        case "next":
                            var h = g.modes[this.viewMode].navStep * ("prev" === r[0].className ? -1 : 1);
                            switch (this.viewMode) {
                                case 0:
                                    this.viewDate = this.moveMonth(this.viewDate, h), this._trigger("changeMonth", this.viewDate);
                                    break;
                                case 1:
                                case 2:
                                    this.viewDate = this.moveYear(this.viewDate, h), 1 === this.viewMode && this._trigger("changeYear", this.viewDate)
                            }
                            this.fill();
                            break;
                        case "today":
                            var o = new Date;
                            o = i(o.getFullYear(), o.getMonth(), o.getDate(), 0, 0, 0), this.showMode(-2);
                            var d = "linked" === this.o.todayBtn ? null : "view";
                            this._setDate(o, d);
                            break;
                        case "clear":
                            var l;
                            this.isInput ? l = this.element : this.component && (l = this.element.find("input")), l && l.val("").change(), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide()
                    }
                    break;
                case "span":
                    r.is(".disabled") || (this.viewDate.setUTCDate(1), r.is(".month") ? (n = 1, s = r.parent().find("span").index(r), a = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(s), this._trigger("changeMonth", this.viewDate), 1 === this.o.minViewMode && this._setDate(i(a, s, n))) : (n = 1, s = 0, a = parseInt(r.text(), 10) || 0, this.viewDate.setUTCFullYear(a), this._trigger("changeYear", this.viewDate), 2 === this.o.minViewMode && this._setDate(i(a, s, n))), this.showMode(-1), this.fill());
                    break;
                case "td":
                    r.is(".day") && !r.is(".disabled") && (n = parseInt(r.text(), 10) || 1, a = this.viewDate.getUTCFullYear(), s = this.viewDate.getUTCMonth(), r.is(".old") ? 0 === s ? (s = 11, a -= 1) : s -= 1 : r.is(".new") && (11 === s ? (s = 0, a += 1) : s += 1), this._setDate(i(a, s, n)))
            }
            this.picker.is(":visible") && this._focused_from && t(this._focused_from).focus(), delete this._focused_from
        },
        _toggle_multidate: function (t) {
            var e = this.dates.contains(t);
            if (t ? -1 !== e ? this.dates.remove(e) : this.dates.push(t) : this.dates.clear(), "number" == typeof this.o.multidate)
                for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
        },
        _setDate: function (t, e) {
            e && "date" !== e || this._toggle_multidate(t && new Date(t)), e && "view" !== e || (this.viewDate = t && new Date(t)), this.fill(), this.setValue(), this._trigger("changeDate");
            var i;
            this.isInput ? i = this.element : this.component && (i = this.element.find("input")), i && i.change(), !this.o.autoclose || e && "date" !== e || this.hide()
        },
        moveMonth: function (t, i) {
            if (!t) return e;
            if (!i) return t;
            var a, s, n = new Date(t.valueOf()),
                r = n.getUTCDate(),
                h = n.getUTCMonth(),
                o = Math.abs(i);
            if (i = i > 0 ? 1 : -1, 1 === o) s = -1 === i ? function () {
                return n.getUTCMonth() === h
            } : function () {
                return n.getUTCMonth() !== a
            }, a = h + i, n.setUTCMonth(a), (0 > a || a > 11) && (a = (a + 12) % 12);
            else {
                for (var d = 0; o > d; d++) n = this.moveMonth(n, i);
                a = n.getUTCMonth(), n.setUTCDate(r), s = function () {
                    return a !== n.getUTCMonth()
                }
            }
            for (; s();) n.setUTCDate(--r), n.setUTCMonth(a);
            return n
        },
        moveYear: function (t, e) {
            return this.moveMonth(t, 12 * e)
        },
        dateWithinRange: function (t) {
            return t >= this.o.startDate && t <= this.o.endDate
        },
        keydown: function (t) {
            if (this.picker.is(":not(:visible)")) return 27 === t.keyCode && this.show(), void 0;
            var e, i, s, n = !1,
                r = this.focusDate || this.viewDate;
            switch (t.keyCode) {
                case 27:
                    this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), t.preventDefault();
                    break;
                case 37:
                case 39:
                    if (!this.o.keyboardNavigation) break;
                    e = 37 === t.keyCode ? -1 : 1, t.ctrlKey ? (i = this.moveYear(this.dates.get(-1) || a(), e), s = this.moveYear(r, e), this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (i = this.moveMonth(this.dates.get(-1) || a(), e), s = this.moveMonth(r, e), this._trigger("changeMonth", this.viewDate)) : (i = new Date(this.dates.get(-1) || a()), i.setUTCDate(i.getUTCDate() + e), s = new Date(r), s.setUTCDate(r.getUTCDate() + e)), this.dateWithinRange(i) && (this.focusDate = this.viewDate = s, this.setValue(), this.fill(), t.preventDefault());
                    break;
                case 38:
                case 40:
                    if (!this.o.keyboardNavigation) break;
                    e = 38 === t.keyCode ? -1 : 1, t.ctrlKey ? (i = this.moveYear(this.dates.get(-1) || a(), e), s = this.moveYear(r, e), this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (i = this.moveMonth(this.dates.get(-1) || a(), e), s = this.moveMonth(r, e), this._trigger("changeMonth", this.viewDate)) : (i = new Date(this.dates.get(-1) || a()), i.setUTCDate(i.getUTCDate() + 7 * e), s = new Date(r), s.setUTCDate(r.getUTCDate() + 7 * e)), this.dateWithinRange(i) && (this.focusDate = this.viewDate = s, this.setValue(), this.fill(), t.preventDefault());
                    break;
                case 32:
                    break;
                case 13:
                    r = this.focusDate || this.dates.get(-1) || this.viewDate, this._toggle_multidate(r), n = !0, this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (t.preventDefault(), this.o.autoclose && this.hide());
                    break;
                case 9:
                    this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
            }
            if (n) {
                this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate");
                var h;
                this.isInput ? h = this.element : this.component && (h = this.element.find("input")), h && h.change()
            }
        },
        showMode: function (t) {
            t && (this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + t))), this.picker.find(">div").hide().filter(".datepicker-" + g.modes[this.viewMode].clsName).css("display", "block"), this.updateNavArrows()
        }
    };
    var l = function (e, i) {
        this.element = t(e), this.inputs = t.map(i.inputs, function (t) {
            return t.jquery ? t[0] : t
        }), delete i.inputs, t(this.inputs).datepicker(i).bind("changeDate", t.proxy(this.dateUpdated, this)), this.pickers = t.map(this.inputs, function (e) {
            return t(e).data("datepicker")
        }), this.updateDates()
    };
    l.prototype = {
        updateDates: function () {
            this.dates = t.map(this.pickers, function (t) {
                return t.getUTCDate()
            }), this.updateRanges()
        },
        updateRanges: function () {
            var e = t.map(this.dates, function (t) {
                return t.valueOf()
            });
            t.each(this.pickers, function (t, i) {
                i.setRange(e)
            })
        },
        dateUpdated: function (e) {
            if (!this.updating) {
                this.updating = !0;
                var i = t(e.target).data("datepicker"),
                    a = i.getUTCDate(),
                    s = t.inArray(e.target, this.inputs),
                    n = this.inputs.length;
                if (-1 !== s) {
                    if (t.each(this.pickers, function (t, e) {
                            e.getUTCDate() || e.setUTCDate(a)
                        }), a < this.dates[s])
                        for (; s >= 0 && a < this.dates[s];) this.pickers[s--].setUTCDate(a);
                    else if (a > this.dates[s])
                        for (; n > s && a > this.dates[s];) this.pickers[s++].setUTCDate(a);
                    this.updateDates(), delete this.updating
                }
            }
        },
        remove: function () {
            t.map(this.pickers, function (t) {
                t.remove()
            }), delete this.element.data().datepicker
        }
    };
    var c = t.fn.datepicker;
    t.fn.datepicker = function (i) {
        var a = Array.apply(null, arguments);
        a.shift();
        var s;
        return this.each(function () {
            var h = t(this),
                o = h.data("datepicker"),
                c = "object" == typeof i && i;
            if (!o) {
                var p = n(this, "date"),
                    f = t.extend({}, u, p, c),
                    g = r(f.language),
                    v = t.extend({}, u, g, p, c);
                if (h.is(".input-daterange") || v.inputs) {
                    var D = {
                        inputs: v.inputs || h.find("input").toArray()
                    };
                    h.data("datepicker", o = new l(this, t.extend(v, D)))
                } else h.data("datepicker", o = new d(this, v))
            }
            return "string" == typeof i && "function" == typeof o[i] && (s = o[i].apply(o, a), s !== e) ? !1 : void 0
        }), s !== e ? s : this
    };
    var u = t.fn.datepicker.defaults = {
            autoclose: !1,
            beforeShowDay: t.noop,
            calendarWeeks: !1,
            clearBtn: !1,
            daysOfWeekDisabled: [],
            endDate: 1 / 0,
            forceParse: !0,
            format: "mm/dd/yyyy",
            keyboardNavigation: !0,
            language: "en",
            minViewMode: 0,
            multidate: !1,
            multidateSeparator: ",",
            orientation: "auto",
            rtl: !1,
            startDate: -1 / 0,
            startView: 0,
            todayBtn: !1,
            todayHighlight: !1,
            weekStart: 0
        },
        p = t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    t.fn.datepicker.Constructor = d;
    var f = t.fn.datepicker.dates = {
            en: {
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                today: "Today",
                clear: "Clear"
            }
        },
        g = {
            modes: [{
                clsName: "days",
                navFnc: "Month",
                navStep: 1
            }, {
                clsName: "months",
                navFnc: "FullYear",
                navStep: 1
            }, {
                clsName: "years",
                navFnc: "FullYear",
                navStep: 10
            }],
            isLeapYear: function (t) {
                return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
            },
            getDaysInMonth: function (t, e) {
                return [31, g.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
            },
            validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
            nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
            parseFormat: function (t) {
                var e = t.replace(this.validParts, "\x00").split("\x00"),
                    i = t.match(this.validParts);
                if (!e || !e.length || !i || 0 === i.length) throw new Error("Invalid date format.");
                return {
                    separators: e,
                    parts: i
                }
            },
            parseDate: function (a, s, n) {
                function r() {
                    var t = this.slice(0, u[l].length),
                        e = u[l].slice(0, t.length);
                    return t === e
                }
                if (!a) return e;
                if (a instanceof Date) return a;
                "string" == typeof s && (s = g.parseFormat(s));
                var h, o, l, c = /([\-+]\d+)([dmwy])/,
                    u = a.match(/([\-+]\d+)([dmwy])/g);
                if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(a)) {
                    for (a = new Date, l = 0; l < u.length; l++) switch (h = c.exec(u[l]), o = parseInt(h[1]), h[2]) {
                        case "d":
                            a.setUTCDate(a.getUTCDate() + o);
                            break;
                        case "m":
                            a = d.prototype.moveMonth.call(d.prototype, a, o);
                            break;
                        case "w":
                            a.setUTCDate(a.getUTCDate() + 7 * o);
                            break;
                        case "y":
                            a = d.prototype.moveYear.call(d.prototype, a, o)
                    }
                    return i(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), 0, 0, 0)
                }
                u = a && a.match(this.nonpunctuation) || [], a = new Date;
                var p, v, D = {},
                    m = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                    y = {
                        yyyy: function (t, e) {
                            return t.setUTCFullYear(e)
                        },
                        yy: function (t, e) {
                            return t.setUTCFullYear(2e3 + e)
                        },
                        m: function (t, e) {
                            if (isNaN(t)) return t;
                            for (e -= 1; 0 > e;) e += 12;
                            for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e;) t.setUTCDate(t.getUTCDate() - 1);
                            return t
                        },
                        d: function (t, e) {
                            return t.setUTCDate(e)
                        }
                    };
                y.M = y.MM = y.mm = y.m, y.dd = y.d, a = i(a.getFullYear(), a.getMonth(), a.getDate(), 0, 0, 0);
                var w = s.parts.slice();
                if (u.length !== w.length && (w = t(w).filter(function (e, i) {
                        return -1 !== t.inArray(i, m)
                    }).toArray()), u.length === w.length) {
                    var k;
                    for (l = 0, k = w.length; k > l; l++) {
                        if (p = parseInt(u[l], 10), h = w[l], isNaN(p)) switch (h) {
                            case "MM":
                                v = t(f[n].months).filter(r), p = t.inArray(v[0], f[n].months) + 1;
                                break;
                            case "M":
                                v = t(f[n].monthsShort).filter(r), p = t.inArray(v[0], f[n].monthsShort) + 1
                        }
                        D[h] = p
                    }
                    var _, C;
                    for (l = 0; l < m.length; l++) C = m[l], C in D && !isNaN(D[C]) && (_ = new Date(a), y[C](_, D[C]), isNaN(_) || (a = _))
                }
                return a
            },
            formatDate: function (e, i, a) {
                if (!e) return "";
                "string" == typeof i && (i = g.parseFormat(i));
                var s = {
                    d: e.getUTCDate(),
                    D: f[a].daysShort[e.getUTCDay()],
                    DD: f[a].days[e.getUTCDay()],
                    m: e.getUTCMonth() + 1,
                    M: f[a].monthsShort[e.getUTCMonth()],
                    MM: f[a].months[e.getUTCMonth()],
                    yy: e.getUTCFullYear().toString().substring(2),
                    yyyy: e.getUTCFullYear()
                };
                s.dd = (s.d < 10 ? "0" : "") + s.d, s.mm = (s.m < 10 ? "0" : "") + s.m, e = [];
                for (var n = t.extend([], i.separators), r = 0, h = i.parts.length; h >= r; r++) n.length && e.push(n.shift()), e.push(s[i.parts[r]]);
                return e.join("")
            },
            headTemplate: '<thead><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',
            contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
            footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
        };
    g.template = '<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">' + g.headTemplate + "<tbody></tbody>" + g.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + "</table></div></div>", t.fn.datepicker.DPGlobal = g, t.fn.datepicker.noConflict = function () {
        return t.fn.datepicker = c, this
    }, t(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function (e) {
        var i = t(this);
        i.data("datepicker") || (e.preventDefault(), i.datepicker("show"))
    }), t(function () {
        t('[data-provide="datepicker-inline"]').datepicker()
    })
}(window.jQuery);
/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT Â© Zeno Rocha
 */
! function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e()
}(this, function () {
    return n = {
        686: function (t, e, n) {
            "use strict";
            n.d(e, {
                default: function () {
                    return o
                }
            });
            var e = n(279),
                i = n.n(e),
                e = n(370),
                u = n.n(e),
                e = n(817),
                c = n.n(e);

            function a(t) {
                try {
                    return document.execCommand(t)
                } catch (t) {
                    return
                }
            }
            var f = function (t) {
                t = c()(t);
                return a("cut"), t
            };
            var l = function (t) {
                var e, n, o, r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                        container: document.body
                    },
                    i = "";
                return "string" == typeof t ? (e = t, n = "rtl" === document.documentElement.getAttribute("dir"), (o = document.createElement("textarea")).style.fontSize = "12pt", o.style.border = "0", o.style.padding = "0", o.style.margin = "0", o.style.position = "absolute", o.style[n ? "right" : "left"] = "-9999px", n = window.pageYOffset || document.documentElement.scrollTop, o.style.top = "".concat(n, "px"), o.setAttribute("readonly", ""), o.value = e, o = o, r.container.appendChild(o), i = c()(o), a("copy"), o.remove()) : (i = c()(t), a("copy")), i
            };

            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            var s = function () {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.action,
                    n = void 0 === e ? "copy" : e,
                    o = t.container,
                    e = t.target,
                    t = t.text;
                if ("copy" !== n && "cut" !== n) throw new Error('Invalid "action" value, use either "copy" or "cut"');
                if (void 0 !== e) {
                    if (!e || "object" !== r(e) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                    if ("copy" === n && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    if ("cut" === n && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')
                }
                return t ? l(t, {
                    container: o
                }) : e ? "cut" === n ? f(e) : l(e, {
                    container: o
                }) : void 0
            };

            function d(t) {
                return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function p(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            function y(t, e) {
                return (y = Object.setPrototypeOf || function (t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function h(n) {
                var o = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function () {
                    var t, e = m(n);
                    return t = o ? (t = m(this).constructor, Reflect.construct(e, arguments, t)) : e.apply(this, arguments), e = this, !(t = t) || "object" !== d(t) && "function" != typeof t ? function (t) {
                        if (void 0 !== t) return t;
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                    }(e) : t
                }
            }

            function m(t) {
                return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function v(t, e) {
                t = "data-clipboard-".concat(t);
                if (e.hasAttribute(t)) return e.getAttribute(t)
            }
            var o = function () {
                ! function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && y(t, e)
                }(r, i());
                var t, e, n, o = h(r);

                function r(t, e) {
                    var n;
                    return function (t) {
                        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
                    }(this), (n = o.call(this)).resolveOptions(e), n.listenClick(t), n
                }
                return t = r, n = [{
                    key: "copy",
                    value: function (t) {
                        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                            container: document.body
                        };
                        return l(t, e)
                    }
                }, {
                    key: "cut",
                    value: function (t) {
                        return f(t)
                    }
                }, {
                    key: "isSupported",
                    value: function () {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                            t = "string" == typeof t ? [t] : t,
                            e = !!document.queryCommandSupported;
                        return t.forEach(function (t) {
                            e = e && !!document.queryCommandSupported(t)
                        }), e
                    }
                }], (e = [{
                    key: "resolveOptions",
                    value: function () {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === d(t.container) ? t.container : document.body
                    }
                }, {
                    key: "listenClick",
                    value: function (t) {
                        var e = this;
                        this.listener = u()(t, "click", function (t) {
                            return e.onClick(t)
                        })
                    }
                }, {
                    key: "onClick",
                    value: function (t) {
                        var e = t.delegateTarget || t.currentTarget,
                            t = s({
                                action: this.action(e),
                                container: this.container,
                                target: this.target(e),
                                text: this.text(e)
                            });
                        this.emit(t ? "success" : "error", {
                            action: this.action,
                            text: t,
                            trigger: e,
                            clearSelection: function () {
                                e && e.focus(), document.activeElement.blur(), window.getSelection().removeAllRanges()
                            }
                        })
                    }
                }, {
                    key: "defaultAction",
                    value: function (t) {
                        return v("action", t)
                    }
                }, {
                    key: "defaultTarget",
                    value: function (t) {
                        t = v("target", t);
                        if (t) return document.querySelector(t)
                    }
                }, {
                    key: "defaultText",
                    value: function (t) {
                        return v("text", t)
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        this.listener.destroy()
                    }
                }]) && p(t.prototype, e), n && p(t, n), r
            }()
        },
        828: function (t) {
            var e;
            "undefined" == typeof Element || Element.prototype.matches || ((e = Element.prototype).matches = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector), t.exports = function (t, e) {
                for (; t && 9 !== t.nodeType;) {
                    if ("function" == typeof t.matches && t.matches(e)) return t;
                    t = t.parentNode
                }
            }
        },
        438: function (t, e, n) {
            var u = n(828);

            function i(t, e, n, o, r) {
                var i = function (e, n, t, o) {
                    return function (t) {
                        t.delegateTarget = u(t.target, n), t.delegateTarget && o.call(e, t)
                    }
                }.apply(this, arguments);
                return t.addEventListener(n, i, r), {
                    destroy: function () {
                        t.removeEventListener(n, i, r)
                    }
                }
            }
            t.exports = function (t, e, n, o, r) {
                return "function" == typeof t.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function (t) {
                    return i(t, e, n, o, r)
                }))
            }
        },
        879: function (t, n) {
            n.node = function (t) {
                return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
            }, n.nodeList = function (t) {
                var e = Object.prototype.toString.call(t);
                return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0]))
            }, n.string = function (t) {
                return "string" == typeof t || t instanceof String
            }, n.fn = function (t) {
                return "[object Function]" === Object.prototype.toString.call(t)
            }
        },
        370: function (t, e, n) {
            var f = n(879),
                l = n(438);
            t.exports = function (t, e, n) {
                if (!t && !e && !n) throw new Error("Missing required arguments");
                if (!f.string(e)) throw new TypeError("Second argument must be a String");
                if (!f.fn(n)) throw new TypeError("Third argument must be a Function");
                if (f.node(t)) return c = e, a = n, (u = t).addEventListener(c, a), {
                    destroy: function () {
                        u.removeEventListener(c, a)
                    }
                };
                if (f.nodeList(t)) return o = t, r = e, i = n, Array.prototype.forEach.call(o, function (t) {
                    t.addEventListener(r, i)
                }), {
                    destroy: function () {
                        Array.prototype.forEach.call(o, function (t) {
                            t.removeEventListener(r, i)
                        })
                    }
                };
                if (f.string(t)) return t = t, e = e, n = n, l(document.body, t, e, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                var o, r, i, u, c, a
            }
        },
        817: function (t) {
            t.exports = function (t) {
                var e, n = "SELECT" === t.nodeName ? (t.focus(), t.value) : "INPUT" === t.nodeName || "TEXTAREA" === t.nodeName ? ((e = t.hasAttribute("readonly")) || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), e || t.removeAttribute("readonly"), t.value) : (t.hasAttribute("contenteditable") && t.focus(), n = window.getSelection(), (e = document.createRange()).selectNodeContents(t), n.removeAllRanges(), n.addRange(e), n.toString());
                return n
            }
        },
        279: function (t) {
            function e() {}
            e.prototype = {
                on: function (t, e, n) {
                    var o = this.e || (this.e = {});
                    return (o[t] || (o[t] = [])).push({
                        fn: e,
                        ctx: n
                    }), this
                },
                once: function (t, e, n) {
                    var o = this;

                    function r() {
                        o.off(t, r), e.apply(n, arguments)
                    }
                    return r._ = e, this.on(t, r, n)
                },
                emit: function (t) {
                    for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, r = n.length; o < r; o++) n[o].fn.apply(n[o].ctx, e);
                    return this
                },
                off: function (t, e) {
                    var n = this.e || (this.e = {}),
                        o = n[t],
                        r = [];
                    if (o && e)
                        for (var i = 0, u = o.length; i < u; i++) o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
                    return r.length ? n[t] = r : delete n[t], this
                }
            }, t.exports = e, t.exports.TinyEmitter = e
        }
    }, r = {}, o.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return o.d(e, {
            a: e
        }), e
    }, o.d = function (t, e) {
        for (var n in e) o.o(e, n) && !o.o(t, n) && Object.defineProperty(t, n, {
            enumerable: !0,
            get: e[n]
        })
    }, o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o(686).default;

    function o(t) {
        if (r[t]) return r[t].exports;
        var e = r[t] = {
            exports: {}
        };
        return n[t](e, e.exports, o), e.exports
    }
    var n, r
}); /*!JavaScript Cookie v2.2.0 * https://github.com/js-cookie/js-cookie * Copyright 2006, 2015 Klaus Hartl & Fagner Brack * Released under the MIT license*/
! function (e) {
    var n;
    if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) {
        var t = window.Cookies,
            o = window.Cookies = e();
        o.noConflict = function () {
            return window.Cookies = t, o
        }
    }
}(function () {
    function e() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) n[o] = t[o]
        }
        return n
    }

    function n(e) {
        return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
    }
    return function t(o) {
        function r() {}

        function i(n, t, i) {
            if ("undefined" != typeof document) {
                "number" == typeof (i = e({
                    path: "/"
                }, r.defaults, i)).expires && (i.expires = new Date(1 * new Date + 864e5 * i.expires)), i.expires = i.expires ? i.expires.toUTCString() : "";
                try {
                    var c = JSON.stringify(t);
                    /^[\{\[]/.test(c) && (t = c)
                } catch (e) {}
                t = o.write ? o.write(t, n) : encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = encodeURIComponent(String(n)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                var f = "";
                for (var u in i) i[u] && (f += "; " + u, !0 !== i[u] && (f += "=" + i[u].split(";")[0]));
                return document.cookie = n + "=" + t + f
            }
        }

        function c(e, t) {
            if ("undefined" != typeof document) {
                for (var r = {}, i = document.cookie ? document.cookie.split("; ") : [], c = 0; c < i.length; c++) {
                    var f = i[c].split("="),
                        u = f.slice(1).join("=");
                    t || '"' !== u.charAt(0) || (u = u.slice(1, -1));
                    try {
                        var a = n(f[0]);
                        if (u = (o.read || o)(u, a) || n(u), t) try {
                            u = JSON.parse(u)
                        } catch (e) {}
                        if (r[a] = u, e === a) break
                    } catch (e) {}
                }
                return e ? r[e] : r
            }
        }
        return r.set = i, r.get = function (e) {
            return c(e, !1)
        }, r.getJSON = function (e) {
            return c(e, !0)
        }, r.remove = function (n, t) {
            i(n, "", e(t, {
                expires: -1
            }))
        }, r.defaults = {}, r.withConverter = t, r
    }(function () {})
});