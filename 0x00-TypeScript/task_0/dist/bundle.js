! function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function (t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function (e, t) {
    var n = [{
            firstName: "Kevin",
            lastName: "Castro",
            age: 29,
            location: "Cali"
        }, {
            firstName: "Caspin",
            lastName: "Tech",
            age: 30,
            location: "Los Angeles"
        }],
        r = document.getElementsByTagName("body")[0],
        o = document.createElement("table"),
        a = document.createElement("thead"),
        i = document.createElement("tbody"),
        l = a.insertRow(0),
        u = l.insertCell(0),
        c = l.insertCell(1);
    u.innerHTML = "firstName", c.innerHTML = "location", o.append(a), n.forEach((function (e) {
        var t = i.insertRow(0),
            n = t.insertCell(0),
            r = t.insertCell(1);
        n.innerHTML = e.firstName, r.innerHTML = e.location
    })), o.append(i), r.append(o)
}]);
