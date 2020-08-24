"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! modernizr 3.1.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-backgroundsize-bgsizecover-borderradius-boxshadow-cssanimations-csstransforms-csstransforms3d-csstransitions-touchevents !*/
!function (e, n, t) {
  function s(e) {
    var n = C.className,
        t = Modernizr._config.classPrefix || "";

    if (S && (n = n.baseVal), Modernizr._config.enableJSClass) {
      var s = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
      n = n.replace(s, "$1" + t + "js$2");
    }

    Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), S ? C.className.baseVal = n : C.className = n);
  }

  function o(e, n) {
    return _typeof(e) === n;
  }

  function r() {
    var e, n, t, s, r, i, a;

    for (var f in x) {
      if (e = [], n = x[f], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (t = 0; t < n.options.aliases.length; t++) {
        e.push(n.options.aliases[t].toLowerCase());
      }

      for (s = o(n.fn, "function") ? n.fn() : n.fn, r = 0; r < e.length; r++) {
        i = e[r], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = s : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = s), y.push((s ? "" : "no-") + a.join("-"));
      }
    }
  }

  function i() {
    return "function" != typeof n.createElement ? n.createElement(arguments[0]) : S ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments);
  }

  function a() {
    var e = n.body;
    return e || (e = i(S ? "svg" : "body"), e.fake = !0), e;
  }

  function f(e, t, s, o) {
    var r,
        f,
        u,
        l,
        d = "modernizr",
        p = i("div"),
        c = a();
    if (parseInt(s, 10)) for (; s--;) {
      u = i("div"), u.id = o ? o[s] : d + (s + 1), p.appendChild(u);
    }
    return r = i("style"), r.type = "text/css", r.id = "s" + d, (c.fake ? c : p).appendChild(r), c.appendChild(p), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(n.createTextNode(e)), p.id = d, c.fake && (c.style.background = "", c.style.overflow = "hidden", l = C.style.overflow, C.style.overflow = "hidden", C.appendChild(c)), f = t(p, e), c.fake ? (c.parentNode.removeChild(c), C.style.overflow = l, C.offsetHeight) : p.parentNode.removeChild(p), !!f;
  }

  function u(e, n) {
    return !!~("" + e).indexOf(n);
  }

  function l(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, n, t) {
      return n + t.toUpperCase();
    }).replace(/^-/, "");
  }

  function d(e, n) {
    return function () {
      return e.apply(n, arguments);
    };
  }

  function p(e, n, t) {
    var s;

    for (var r in e) {
      if (e[r] in n) return t === !1 ? e[r] : (s = n[e[r]], o(s, "function") ? d(s, t || n) : s);
    }

    return !1;
  }

  function c(e) {
    return e.replace(/([A-Z])/g, function (e, n) {
      return "-" + n.toLowerCase();
    }).replace(/^ms-/, "-ms-");
  }

  function m(n, s) {
    var o = n.length;

    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--;) {
        if (e.CSS.supports(c(n[o]), s)) return !0;
      }

      return !1;
    }

    if ("CSSSupportsRule" in e) {
      for (var r = []; o--;) {
        r.push("(" + c(n[o]) + ":" + s + ")");
      }

      return r = r.join(" or "), f("@supports (" + r + ") { #modernizr { position: absolute; } }", function (e) {
        return "absolute" == getComputedStyle(e, null).position;
      });
    }

    return t;
  }

  function v(e, n, s, r) {
    function a() {
      d && (delete j.style, delete j.modElem);
    }

    if (r = o(r, "undefined") ? !1 : r, !o(s, "undefined")) {
      var f = m(e, s);
      if (!o(f, "undefined")) return f;
    }

    for (var d, p, c, v, h, g = ["modernizr", "tspan"]; !j.style;) {
      d = !0, j.modElem = i(g.shift()), j.style = j.modElem.style;
    }

    for (c = e.length, p = 0; c > p; p++) {
      if (v = e[p], h = j.style[v], u(v, "-") && (v = l(v)), j.style[v] !== t) {
        if (r || o(s, "undefined")) return a(), "pfx" == n ? v : !0;

        try {
          j.style[v] = s;
        } catch (y) {}

        if (j.style[v] != h) return a(), "pfx" == n ? v : !0;
      }
    }

    return a(), !1;
  }

  function h(e, n, t, s, r) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
        a = (e + " " + P.join(i + " ") + i).split(" ");
    return o(n, "string") || o(n, "undefined") ? v(a, n, s, r) : (a = (e + " " + E.join(i + " ") + i).split(" "), p(a, n, t));
  }

  function g(e, n, s) {
    return h(e, t, t, n, s);
  }

  var y = [],
      x = [],
      b = {
    _version: "3.1.0",
    _config: {
      classPrefix: "",
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0
    },
    _q: [],
    on: function on(e, n) {
      var t = this;
      setTimeout(function () {
        n(t[e]);
      }, 0);
    },
    addTest: function addTest(e, n, t) {
      x.push({
        name: e,
        fn: n,
        options: t
      });
    },
    addAsyncTest: function addAsyncTest(e) {
      x.push({
        name: null,
        fn: e
      });
    }
  },
      Modernizr = function Modernizr() {};

  Modernizr.prototype = b, Modernizr = new Modernizr();
  var C = n.documentElement,
      S = "svg" === C.nodeName.toLowerCase(),
      w = b._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [];
  b._prefixes = w;

  var _ = "CSS" in e && "supports" in e.CSS,
      T = "supportsCSS" in e;

  Modernizr.addTest("supports", _ || T);
  var z = b.testStyles = f;
  Modernizr.addTest("touchevents", function () {
    var t;
    if ("ontouchstart" in e || e.DocumentTouch && n instanceof DocumentTouch) t = !0;else {
      var s = ["@media (", w.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
      z(s, function (e) {
        t = 9 === e.offsetTop;
      });
    }
    return t;
  });
  var k = "Moz O ms Webkit",
      P = b._config.usePrefixes ? k.split(" ") : [];
  b._cssomPrefixes = P;
  var E = b._config.usePrefixes ? k.toLowerCase().split(" ") : [];
  b._domPrefixes = E;
  var N = {
    elem: i("modernizr")
  };

  Modernizr._q.push(function () {
    delete N.elem;
  });

  var j = {
    style: N.elem.style
  };
  Modernizr._q.unshift(function () {
    delete j.style;
  }), b.testAllProps = h, b.testAllProps = g, Modernizr.addTest("cssanimations", g("animationName", "a", !0)), Modernizr.addTest("backgroundsize", g("backgroundSize", "100%", !0)), Modernizr.addTest("csstransitions", g("transition", "all", !0)), Modernizr.addTest("csstransforms3d", function () {
    var e = !!g("perspective", "1px", !0),
        n = Modernizr._config.usePrefixes;

    if (e && (!n || "webkitPerspective" in C.style)) {
      var t;
      Modernizr.supports ? t = "@supports (perspective: 1px)" : (t = "@media (transform-3d)", n && (t += ",(-webkit-transform-3d)")), t += "{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}", z(t, function (n) {
        e = 9 === n.offsetLeft && 5 === n.offsetHeight;
      });
    }

    return e;
  }), Modernizr.addTest("bgsizecover", g("backgroundSize", "cover")), Modernizr.addTest("borderradius", g("borderRadius", "0px", !0)), Modernizr.addTest("boxshadow", g("boxShadow", "1px 1px", !0)), Modernizr.addTest("csstransforms", function () {
    return -1 === navigator.userAgent.indexOf("Android 2.") && g("transform", "scale(1)", !0);
  }), r(), s(y), delete b.addTest, delete b.addAsyncTest;

  for (var A = 0; A < Modernizr._q.length; A++) {
    Modernizr._q[A]();
  }

  e.Modernizr = Modernizr;
}(window, document);
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
*/

jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
  def: "easeOutQuad",
  swing: function swing(e, f, a, h, g) {
    return jQuery.easing[jQuery.easing.def](e, f, a, h, g);
  },
  easeInQuad: function easeInQuad(e, f, a, h, g) {
    return h * (f /= g) * f + a;
  },
  easeOutQuad: function easeOutQuad(e, f, a, h, g) {
    return -h * (f /= g) * (f - 2) + a;
  },
  easeInOutQuad: function easeInOutQuad(e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return h / 2 * f * f + a;
    }

    return -h / 2 * (--f * (f - 2) - 1) + a;
  },
  easeInCubic: function easeInCubic(e, f, a, h, g) {
    return h * (f /= g) * f * f + a;
  },
  easeOutCubic: function easeOutCubic(e, f, a, h, g) {
    return h * ((f = f / g - 1) * f * f + 1) + a;
  },
  easeInOutCubic: function easeInOutCubic(e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return h / 2 * f * f * f + a;
    }

    return h / 2 * ((f -= 2) * f * f + 2) + a;
  },
  easeInQuart: function easeInQuart(e, f, a, h, g) {
    return h * (f /= g) * f * f * f + a;
  },
  easeOutQuart: function easeOutQuart(e, f, a, h, g) {
    return -h * ((f = f / g - 1) * f * f * f - 1) + a;
  },
  easeInOutQuart: function easeInOutQuart(e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return h / 2 * f * f * f * f + a;
    }

    return -h / 2 * ((f -= 2) * f * f * f - 2) + a;
  },
  easeInQuint: function easeInQuint(e, f, a, h, g) {
    return h * (f /= g) * f * f * f * f + a;
  },
  easeOutQuint: function easeOutQuint(e, f, a, h, g) {
    return h * ((f = f / g - 1) * f * f * f * f + 1) + a;
  },
  easeInOutQuint: function easeInOutQuint(e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return h / 2 * f * f * f * f * f + a;
    }

    return h / 2 * ((f -= 2) * f * f * f * f + 2) + a;
  },
  easeInSine: function easeInSine(e, f, a, h, g) {
    return -h * Math.cos(f / g * (Math.PI / 2)) + h + a;
  },
  easeOutSine: function easeOutSine(e, f, a, h, g) {
    return h * Math.sin(f / g * (Math.PI / 2)) + a;
  },
  easeInOutSine: function easeInOutSine(e, f, a, h, g) {
    return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a;
  },
  easeInExpo: function easeInExpo(e, f, a, h, g) {
    return f == 0 ? a : h * Math.pow(2, 10 * (f / g - 1)) + a;
  },
  easeOutExpo: function easeOutExpo(e, f, a, h, g) {
    return f == g ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a;
  },
  easeInOutExpo: function easeInOutExpo(e, f, a, h, g) {
    if (f == 0) {
      return a;
    }

    if (f == g) {
      return a + h;
    }

    if ((f /= g / 2) < 1) {
      return h / 2 * Math.pow(2, 10 * (f - 1)) + a;
    }

    return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a;
  },
  easeInCirc: function easeInCirc(e, f, a, h, g) {
    return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a;
  },
  easeOutCirc: function easeOutCirc(e, f, a, h, g) {
    return h * Math.sqrt(1 - (f = f / g - 1) * f) + a;
  },
  easeInOutCirc: function easeInOutCirc(e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a;
    }

    return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a;
  },
  easeInElastic: function easeInElastic(f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;

    if (h == 0) {
      return e;
    }

    if ((h /= k) == 1) {
      return e + l;
    }

    if (!j) {
      j = k * 0.3;
    }

    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4;
    } else {
      var i = j / (2 * Math.PI) * Math.asin(l / g);
    }

    return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e;
  },
  easeOutElastic: function easeOutElastic(f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;

    if (h == 0) {
      return e;
    }

    if ((h /= k) == 1) {
      return e + l;
    }

    if (!j) {
      j = k * 0.3;
    }

    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4;
    } else {
      var i = j / (2 * Math.PI) * Math.asin(l / g);
    }

    return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e;
  },
  easeInOutElastic: function easeInOutElastic(f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;

    if (h == 0) {
      return e;
    }

    if ((h /= k / 2) == 2) {
      return e + l;
    }

    if (!j) {
      j = k * (0.3 * 1.5);
    }

    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4;
    } else {
      var i = j / (2 * Math.PI) * Math.asin(l / g);
    }

    if (h < 1) {
      return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e;
    }

    return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e;
  },
  easeInBack: function easeInBack(e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }

    return i * (f /= h) * f * ((g + 1) * f - g) + a;
  },
  easeOutBack: function easeOutBack(e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }

    return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a;
  },
  easeInOutBack: function easeInOutBack(e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158;
    }

    if ((f /= h / 2) < 1) {
      return i / 2 * (f * f * (((g *= 1.525) + 1) * f - g)) + a;
    }

    return i / 2 * ((f -= 2) * f * (((g *= 1.525) + 1) * f + g) + 2) + a;
  },
  easeInBounce: function easeInBounce(e, f, a, h, g) {
    return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a;
  },
  easeOutBounce: function easeOutBounce(e, f, a, h, g) {
    if ((f /= g) < 1 / 2.75) {
      return h * (7.5625 * f * f) + a;
    } else {
      if (f < 2 / 2.75) {
        return h * (7.5625 * (f -= 1.5 / 2.75) * f + 0.75) + a;
      } else {
        if (f < 2.5 / 2.75) {
          return h * (7.5625 * (f -= 2.25 / 2.75) * f + 0.9375) + a;
        } else {
          return h * (7.5625 * (f -= 2.625 / 2.75) * f + 0.984375) + a;
        }
      }
    }
  },
  easeInOutBounce: function easeInOutBounce(e, f, a, h, g) {
    if (f < g / 2) {
      return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a;
    }

    return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a;
  }
});

(function ($) {
  $.fn.running = function () {
    function n() {
      var t = $(".animateNum");
      var n = {
        top: $(window).scrollTop(),
        bottom: $(window).scrollTop() + $(window).height()
      };
      t.each(function () {
        var t = $(this).attr("data-animateTarget");
        n.top <= $(this).offset().top + $(this).height() && n.bottom >= $(this).offset().top && !$(this).data("start") && ($(this).data("start", !0), new AnimateNum({
          obj: $(this),
          target: t,
          totalTime: 1e3
        }));
      });
    }

    ;

    function b() {
      var t = $(".animateBar");
      var n = {
        top: $(window).scrollTop(),
        bottom: $(window).scrollTop() + $(window).height()
      };
      t.each(function () {
        var t = $(this).attr("data-animateTarget");
        n.top <= $(this).offset().top + $(this).height() && n.bottom >= $(this).offset().top && !$(this).data("start") && ($(this).data("start", !0), new AnimateBar({
          obj: $(this),
          target: t,
          totalTime: 1e3
        }));
      });
    }

    ;

    function p() {
      var t = $(".animatePie");
      var n = {
        top: $(window).scrollTop(),
        bottom: $(window).scrollTop() + $(window).height()
      };
      t.each(function () {
        var t = $(this).attr("data-animateTarget");
        n.top <= $(this).offset().top + $(this).height() && n.bottom >= $(this).offset().top && !$(this).data("start") && ($(this).data("start", !0), new AnimatePie({
          obj: $(this),
          target: t,
          totalTime: 1e3
        }));
      });
    }

    ;
    $(window).bind("scroll", function () {
      n();
      b();
      p();
    });

    function AnimateNum(t) {
      this.obj = t.obj, this.target = t.target.toString(), this.totalTime = t.totalTime || 1e3, this.init();
    }

    ;

    function AnimateBar(t) {
      this.obj = t.obj, this.target = t.target.toString(), this.totalTime = t.totalTime || 1e3, this.init();
    }

    ;

    function AnimatePie(t) {
      this.obj = t.obj, this.target = t.target.toString(), this.totalTime = t.totalTime || 1e3, this.init();
    }

    ;
    AnimateNum.prototype = {
      init: function init() {
        return this.target ? (this.animation(), void 0) : !1;
      },
      animation: function animation() {
        var t = this,
            i = this.target.indexOf("."),
            e = 0;
        i >= 0 && (e = this.target.length - i - 1);
        var n = this.target.replace(".", ""),
            s = this.totalTime / 30 | 0,
            a = n / s | 0,
            r = 0,
            h = 0;
        t.timer = setInterval(function () {
          r++, h += a, t.obj.html(h / Math.pow(10, e)), r >= s && (clearInterval(t.timer), t.obj.html(t.target));
        }, 30);
      }
    };
    AnimateBar.prototype = {
      init: function init() {
        return this.target ? (this.animation(), void 0) : !1;
      },
      animation: function animation() {
        var t = this,
            i = this.target.indexOf("."),
            e = 0;
        i >= 0 && (e = this.target.length - i - 1);
        var n = this.target.replace(".", ""),
            s = this.totalTime / 30 | 0,
            a = n / s | 0,
            r = 0,
            h = 0;
        t.timer = setInterval(function () {
          r++, h += a, t.obj.css('width', h / Math.pow(10, e) + '%'), r >= s && (clearInterval(t.timer), t.obj.animate({
            'width': t.target + '%'
          }));
        }, 30);
      }
    };
    AnimatePie.prototype = {
      init: function init() {
        return this.target ? (this.animation(), void 0) : !1;
      },
      animation: function animation() {
        var t = this;
        s = this.totalTime / 60 | 0;
        r = 0;
        t.i = 0;
        t.count = 0;
        t.j = 0;
        num = t.target;

        function start1() {
          t.obj.find('.pieInner span').html(t.i + 1);
          if (num == 0) return false;
          t.i = t.i + 1;

          if (t.i == num) {
            clearInterval(t.t1);
          }

          if (t.i == 50) {
            clearInterval(t.t1);
            num2 = num - 50;
            t.t2 = setInterval(start2, 1);
          }

          ;
          t.obj.find(".pieLeftInner").css("-o-transform", "rotate(" + t.i * 3.6 + "deg)");
          t.obj.find(".pieLeftInner").css("-moz-transform", "rotate(" + t.i * 3.6 + "deg)");
          t.obj.find(".pieLeftInner").css("-webkit-transform", "rotate(" + t.i * 3.6 + "deg)");
        }

        ;

        function start2() {
          t.obj.find('.pieInner span').html(50 + t.j + 1);
          if (num2 == 0) return false;
          t.j = t.j + 1;

          if (t.j == num2) {
            clearInterval(t.t2);
          }

          if (t.j == 50) {
            clearInterval(t.t2);
          }

          ;
          t.obj.find(".pieRightInner").css("-o-transform", "rotate(" + t.j * 3.6 + "deg)");
          t.obj.find(".pieRightInner").css("-moz-transform", "rotate(" + t.j * 3.6 + "deg)");
          t.obj.find(".pieRightInner").css("-webkit-transform", "rotate(" + t.j * 3.6 + "deg)");
        }

        ;
        t.t1 = setInterval(function () {
          r++;
          r >= s && (clearInterval(t.timer), start1());
        }, 30);
      }
    };
  };
})(jQuery);

(function (e) {
  "use strict";

  e.fn.counterUp = function (t) {
    var n = e.extend({
      time: 400,
      delay: 10
    }, t);
    return this.each(function () {
      var t = e(this),
          r = n,
          i = function i() {
        var e = [],
            n = r.time / r.delay,
            i = t.text(),
            s = /[0-9]+,[0-9]+/.test(i);
        i = i.replace(/,/g, "");
        var o = /^[0-9]+$/.test(i),
            u = /^[0-9]+\.[0-9]+$/.test(i),
            a = u ? (i.split(".")[1] || []).length : 0;

        for (var f = n; f >= 1; f--) {
          var l = parseInt(i / n * f);
          u && (l = parseFloat(i / n * f).toFixed(a));
          if (s) while (/(\d+)(\d{3})/.test(l.toString())) {
            l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2");
          }
          e.unshift(l);
        }

        t.data("counterup-nums", e);
        t.text("0");

        var c = function c() {
          t.text(t.data("counterup-nums").shift());
          if (t.data("counterup-nums").length) setTimeout(t.data("counterup-func"), r.delay);else {
            delete t.data("counterup-nums");
            t.data("counterup-nums", null);
            t.data("counterup-func", null);
          }
        };

        t.data("counterup-func", c);
        setTimeout(t.data("counterup-func"), r.delay);
      };

      t.waypoint(i, {
        offset: "100%",
        triggerOnce: !0
      });
    });
  };
})(jQuery);

(function () {
  var t = [].indexOf || function (t) {
    for (var e = 0, n = this.length; e < n; e++) {
      if (e in this && this[e] === t) return e;
    }

    return -1;
  },
      e = [].slice;

  (function (t, e) {
    if (typeof define === "function" && define.amd) {
      return define("waypoints", ["jquery"], function (n) {
        return e(n, t);
      });
    } else {
      return e(t.jQuery, t);
    }
  })(this, function (n, r) {
    var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
    i = n(r);
    c = t.call(r, "ontouchstart") >= 0;
    s = {
      horizontal: {},
      vertical: {}
    };
    f = 1;
    a = {};
    u = "waypoints-context-id";
    p = "resize.waypoints";
    y = "scroll.waypoints";
    v = 1;
    w = "waypoints-waypoint-ids";
    g = "waypoint";
    m = "waypoints";

    o = function () {
      function t(t) {
        var e = this;
        this.$element = t;
        this.element = t[0];
        this.didResize = false;
        this.didScroll = false;
        this.id = "context" + f++;
        this.oldScroll = {
          x: t.scrollLeft(),
          y: t.scrollTop()
        };
        this.waypoints = {
          horizontal: {},
          vertical: {}
        };
        t.data(u, this.id);
        a[this.id] = this;
        t.bind(y, function () {
          var t;

          if (!(e.didScroll || c)) {
            e.didScroll = true;

            t = function t() {
              e.doScroll();
              return e.didScroll = false;
            };

            return r.setTimeout(t, n[m].settings.scrollThrottle);
          }
        });
        t.bind(p, function () {
          var t;

          if (!e.didResize) {
            e.didResize = true;

            t = function t() {
              n[m]("refresh");
              return e.didResize = false;
            };

            return r.setTimeout(t, n[m].settings.resizeThrottle);
          }
        });
      }

      t.prototype.doScroll = function () {
        var t,
            e = this;
        t = {
          horizontal: {
            newScroll: this.$element.scrollLeft(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left"
          },
          vertical: {
            newScroll: this.$element.scrollTop(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up"
          }
        };

        if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
          n[m]("refresh");
        }

        n.each(t, function (t, r) {
          var i, o, l;
          l = [];
          o = r.newScroll > r.oldScroll;
          i = o ? r.forward : r.backward;
          n.each(e.waypoints[t], function (t, e) {
            var n, i;

            if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
              return l.push(e);
            } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
              return l.push(e);
            }
          });
          l.sort(function (t, e) {
            return t.offset - e.offset;
          });

          if (!o) {
            l.reverse();
          }

          return n.each(l, function (t, e) {
            if (e.options.continuous || t === l.length - 1) {
              return e.trigger([i]);
            }
          });
        });
        return this.oldScroll = {
          x: t.horizontal.newScroll,
          y: t.vertical.newScroll
        };
      };

      t.prototype.refresh = function () {
        var t,
            e,
            r,
            i = this;
        r = n.isWindow(this.element);
        e = this.$element.offset();
        this.doScroll();
        t = {
          horizontal: {
            contextOffset: r ? 0 : e.left,
            contextScroll: r ? 0 : this.oldScroll.x,
            contextDimension: this.$element.width(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left"
          },
          vertical: {
            contextOffset: r ? 0 : e.top,
            contextScroll: r ? 0 : this.oldScroll.y,
            contextDimension: r ? n[m]("viewportHeight") : this.$element.height(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top"
          }
        };
        return n.each(t, function (t, e) {
          return n.each(i.waypoints[t], function (t, r) {
            var i, o, l, s, f;
            i = r.options.offset;
            l = r.offset;
            o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];

            if (n.isFunction(i)) {
              i = i.apply(r.element);
            } else if (typeof i === "string") {
              i = parseFloat(i);

              if (r.options.offset.indexOf("%") > -1) {
                i = Math.ceil(e.contextDimension * i / 100);
              }
            }

            r.offset = o - e.contextOffset + e.contextScroll - i;

            if (r.options.onlyOnScroll && l != null || !r.enabled) {
              return;
            }

            if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
              return r.trigger([e.backward]);
            } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
              return r.trigger([e.forward]);
            } else if (l === null && e.oldScroll >= r.offset) {
              return r.trigger([e.forward]);
            }
          });
        });
      };

      t.prototype.checkEmpty = function () {
        if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
          this.$element.unbind([p, y].join(" "));
          return delete a[this.id];
        }
      };

      return t;
    }();

    l = function () {
      function t(t, e, r) {
        var i, o;
        r = n.extend({}, n.fn[g].defaults, r);

        if (r.offset === "bottom-in-view") {
          r.offset = function () {
            var t;
            t = n[m]("viewportHeight");

            if (!n.isWindow(e.element)) {
              t = e.$element.height();
            }

            return t - n(this).outerHeight();
          };
        }

        this.$element = t;
        this.element = t[0];
        this.axis = r.horizontal ? "horizontal" : "vertical";
        this.callback = r.handler;
        this.context = e;
        this.enabled = r.enabled;
        this.id = "waypoints" + v++;
        this.offset = null;
        this.options = r;
        e.waypoints[this.axis][this.id] = this;
        s[this.axis][this.id] = this;
        i = (o = t.data(w)) != null ? o : [];
        i.push(this.id);
        t.data(w, i);
      }

      t.prototype.trigger = function (t) {
        if (!this.enabled) {
          return;
        }

        if (this.callback != null) {
          this.callback.apply(this.element, t);
        }

        if (this.options.triggerOnce) {
          return this.destroy();
        }
      };

      t.prototype.disable = function () {
        return this.enabled = false;
      };

      t.prototype.enable = function () {
        this.context.refresh();
        return this.enabled = true;
      };

      t.prototype.destroy = function () {
        delete s[this.axis][this.id];
        delete this.context.waypoints[this.axis][this.id];
        return this.context.checkEmpty();
      };

      t.getWaypointsByElement = function (t) {
        var e, r;
        r = n(t).data(w);

        if (!r) {
          return [];
        }

        e = n.extend({}, s.horizontal, s.vertical);
        return n.map(r, function (t) {
          return e[t];
        });
      };

      return t;
    }();

    d = {
      init: function init(t, e) {
        var r;

        if (e == null) {
          e = {};
        }

        if ((r = e.handler) == null) {
          e.handler = t;
        }

        this.each(function () {
          var t, r, i, s;
          t = n(this);
          i = (s = e.context) != null ? s : n.fn[g].defaults.context;

          if (!n.isWindow(i)) {
            i = t.closest(i);
          }

          i = n(i);
          r = a[i.data(u)];

          if (!r) {
            r = new o(i);
          }

          return new l(t, r, e);
        });
        n[m]("refresh");
        return this;
      },
      disable: function disable() {
        return d._invoke(this, "disable");
      },
      enable: function enable() {
        return d._invoke(this, "enable");
      },
      destroy: function destroy() {
        return d._invoke(this, "destroy");
      },
      prev: function prev(t, e) {
        return d._traverse.call(this, t, e, function (t, e, n) {
          if (e > 0) {
            return t.push(n[e - 1]);
          }
        });
      },
      next: function next(t, e) {
        return d._traverse.call(this, t, e, function (t, e, n) {
          if (e < n.length - 1) {
            return t.push(n[e + 1]);
          }
        });
      },
      _traverse: function _traverse(t, e, i) {
        var o, l;

        if (t == null) {
          t = "vertical";
        }

        if (e == null) {
          e = r;
        }

        l = h.aggregate(e);
        o = [];
        this.each(function () {
          var e;
          e = n.inArray(this, l[t]);
          return i(o, e, l[t]);
        });
        return this.pushStack(o);
      },
      _invoke: function _invoke(t, e) {
        t.each(function () {
          var t;
          t = l.getWaypointsByElement(this);
          return n.each(t, function (t, n) {
            n[e]();
            return true;
          });
        });
        return this;
      }
    };

    n.fn[g] = function () {
      var t, r;
      r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];

      if (d[r]) {
        return d[r].apply(this, t);
      } else if (n.isFunction(r)) {
        return d.init.apply(this, arguments);
      } else if (n.isPlainObject(r)) {
        return d.init.apply(this, [null, r]);
      } else if (!r) {
        return n.error("jQuery Waypoints needs a callback function or handler option.");
      } else {
        return n.error("The " + r + " method does not exist in jQuery Waypoints.");
      }
    };

    n.fn[g].defaults = {
      context: r,
      continuous: true,
      enabled: true,
      horizontal: false,
      offset: 0,
      triggerOnce: false
    };
    h = {
      refresh: function refresh() {
        return n.each(a, function (t, e) {
          return e.refresh();
        });
      },
      viewportHeight: function viewportHeight() {
        var t;
        return (t = r.innerHeight) != null ? t : i.height();
      },
      aggregate: function aggregate(t) {
        var e, r, i;
        e = s;

        if (t) {
          e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0;
        }

        if (!e) {
          return [];
        }

        r = {
          horizontal: [],
          vertical: []
        };
        n.each(r, function (t, i) {
          n.each(e[t], function (t, e) {
            return i.push(e);
          });
          i.sort(function (t, e) {
            return t.offset - e.offset;
          });
          r[t] = n.map(i, function (t) {
            return t.element;
          });
          return r[t] = n.unique(r[t]);
        });
        return r;
      },
      above: function above(t) {
        if (t == null) {
          t = r;
        }

        return h._filter(t, "vertical", function (t, e) {
          return e.offset <= t.oldScroll.y;
        });
      },
      below: function below(t) {
        if (t == null) {
          t = r;
        }

        return h._filter(t, "vertical", function (t, e) {
          return e.offset > t.oldScroll.y;
        });
      },
      left: function left(t) {
        if (t == null) {
          t = r;
        }

        return h._filter(t, "horizontal", function (t, e) {
          return e.offset <= t.oldScroll.x;
        });
      },
      right: function right(t) {
        if (t == null) {
          t = r;
        }

        return h._filter(t, "horizontal", function (t, e) {
          return e.offset > t.oldScroll.x;
        });
      },
      enable: function enable() {
        return h._invoke("enable");
      },
      disable: function disable() {
        return h._invoke("disable");
      },
      destroy: function destroy() {
        return h._invoke("destroy");
      },
      extendFn: function extendFn(t, e) {
        return d[t] = e;
      },
      _invoke: function _invoke(t) {
        var e;
        e = n.extend({}, s.vertical, s.horizontal);
        return n.each(e, function (e, n) {
          n[t]();
          return true;
        });
      },
      _filter: function _filter(t, e, r) {
        var i, o;
        i = a[n(t).data(u)];

        if (!i) {
          return [];
        }

        o = [];
        n.each(i.waypoints[e], function (t, e) {
          if (r(i, e)) {
            return o.push(e);
          }
        });
        o.sort(function (t, e) {
          return t.offset - e.offset;
        });
        return n.map(o, function (t) {
          return t.element;
        });
      }
    };

    n[m] = function () {
      var t, n;
      n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];

      if (h[n]) {
        return h[n].apply(null, t);
      } else {
        return h.aggregate.call(null, n);
      }
    };

    n[m].settings = {
      resizeThrottle: 100,
      scrollThrottle: 30
    };
    return i.load(function () {
      return n[m]("refresh");
    });
  });
}).call(void 0);
!function (t) {
  "use strict";

  t.fn.countUp = function (e) {
    var a = t.extend({
      time: 2e3,
      delay: 10
    }, e);
    return this.each(function () {
      var e = t(this),
          n = a,
          u = function u() {
        e.data("counterupTo") || e.data("counterupTo", e.text());
        var t = parseInt(e.data("counter-time")) > 0 ? parseInt(e.data("counter-time")) : n.time,
            a = parseInt(e.data("counter-delay")) > 0 ? parseInt(e.data("counter-delay")) : n.delay,
            u = t / a,
            r = e.data("counterupTo"),
            o = [r],
            c = /[0-9]+,[0-9]+/.test(r);
        r = r.replace(/,/g, "");

        for (var d = (/^[0-9]+$/.test(r), /^[0-9]+\.[0-9]+$/.test(r)), s = d ? (r.split(".")[1] || []).length : 0, i = u; i >= 1; i--) {
          var p = parseInt(Math.round(r / u * i));
          if (d && (p = parseFloat(r / u * i).toFixed(s)), c) for (; /(\d+)(\d{3})/.test(p.toString());) {
            p = p.toString().replace(/(\d+)(\d{3})/, "$1,$2");
          }
          o.unshift(p);
        }

        e.data("counterup-nums", o), e.text("0");

        var f = function f() {
          e.text(e.data("counterup-nums").shift()), e.data("counterup-nums").length ? setTimeout(e.data("counterup-func"), a) : (delete e.data("counterup-nums"), e.data("counterup-nums", null), e.data("counterup-func", null));
        };

        e.data("counterup-func", f), setTimeout(e.data("counterup-func"), a);
      };

      e.waypoint(u, {
        offset: "100%",
        triggerOnce: !0
      });
    });
  };
}(jQuery);
!function (i) {
  "use strict";

  "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery);
}(function (i) {
  "use strict";

  var e = window.Slick || {};
  (e = function () {
    var e = 0;
    return function (t, o) {
      var s,
          n = this;
      n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<span class="slick-prev" aria-label="Previous" type="button"><i class="iconfont">&#xe602;</i></span>',
        nextArrow: '<span class="iconfont slick-next" aria-label="Next" type="button"><i class="iconfont">&#xe603;</i></span>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function customPaging(e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, n.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: !1,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        swiping: !1,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0);
    };
  }()).prototype.activateADA = function () {
    this.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    });
  }, e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
    var s = this;
    if ("boolean" == typeof t) o = t, t = null;else if (t < 0 || t >= s.slideCount) return !1;
    s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e);
    }), s.$slidesCache = s.$slides, s.reinit();
  }, e.prototype.animateHeight = function () {
    var i = this;

    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.animate({
        height: e
      }, i.options.speed);
    }
  }, e.prototype.animateSlide = function (e, t) {
    var o = {},
        s = this;
    s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
      left: e
    }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
      top: e
    }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
      animStart: s.currentLeft
    }).animate({
      animStart: e
    }, {
      duration: s.options.speed,
      easing: s.options.easing,
      step: function step(i) {
        i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o));
      },
      complete: function complete() {
        t && t.call();
      }
    })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function () {
      s.disableTransition(), t.call();
    }, s.options.speed));
  }, e.prototype.getNavTarget = function () {
    var e = this,
        t = e.options.asNavFor;
    return t && null !== t && (t = i(t).not(e.$slider)), t;
  }, e.prototype.asNavFor = function (e) {
    var t = this.getNavTarget();
    null !== t && "object" == _typeof(t) && t.each(function () {
      var t = i(this).slick("getSlick");
      t.unslicked || t.slideHandler(e, !0);
    });
  }, e.prototype.applyTransition = function (i) {
    var e = this,
        t = {};
    !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.autoPlay = function () {
    var i = this;
    i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
  }, e.prototype.autoPlayClear = function () {
    var i = this;
    i.autoPlayTimer && clearInterval(i.autoPlayTimer);
  }, e.prototype.autoPlayIterator = function () {
    var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
    i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e));
  }, e.prototype.buildArrows = function () {
    var e = this;
    !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }));
  }, e.prototype.buildDots = function () {
    var e,
        t,
        o = this;

    if (!0 === o.options.dots) {
      for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) {
        t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
      }

      o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active");
    }
  }, e.prototype.buildOut = function () {
    var e = this;
    e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
      i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "");
    }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable");
  }, e.prototype.buildRows = function () {
    var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;

    if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
      for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
        var d = document.createElement("div");

        for (e = 0; e < l.options.rows; e++) {
          var a = document.createElement("div");

          for (t = 0; t < l.options.slidesPerRow; t++) {
            var c = i * r + (e * l.options.slidesPerRow + t);
            n.get(c) && a.appendChild(n.get(c));
          }

          d.appendChild(a);
        }

        o.appendChild(d);
      }

      l.$slider.empty().append(o), l.$slider.children().children().children().css({
        width: 100 / l.options.slidesPerRow + "%",
        display: "inline-block"
      });
    }
  }, e.prototype.checkResponsive = function (e, t) {
    var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();

    if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
      s = null;

      for (o in r.breakpoints) {
        r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
      }

      null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
    }
  }, e.prototype.changeSlide = function (e, t) {
    var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);

    switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
      case "previous":
        s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
        break;

      case "next":
        s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
        break;

      case "index":
        var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
        r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
        break;

      default:
        return;
    }
  }, e.prototype.checkNavigable = function (i) {
    var e, t;
    if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];else for (var o in e) {
      if (i < e[o]) {
        i = t;
        break;
      }

      t = e[o];
    }
    return i;
  }, e.prototype.cleanUpEvents = function () {
    var e = this;
    e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
  }, e.prototype.cleanUpSlideEvents = function () {
    var e = this;
    e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.cleanUpRows = function () {
    var i,
        e = this;
    e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i));
  }, e.prototype.clickHandler = function (i) {
    !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
  }, e.prototype.destroy = function (e) {
    var t = this;
    t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      i(this).attr("style", i(this).data("originalStyling"));
    }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t]);
  }, e.prototype.disableTransition = function (i) {
    var e = this,
        t = {};
    t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
  }, e.prototype.fadeSlide = function (i, e) {
    var t = this;
    !1 === t.cssTransitions ? (t.$slides.eq(i).css({
      zIndex: t.options.zIndex
    }), t.$slides.eq(i).animate({
      opacity: 1
    }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
      opacity: 1,
      zIndex: t.options.zIndex
    }), e && setTimeout(function () {
      t.disableTransition(i), e.call();
    }, t.options.speed));
  }, e.prototype.fadeSlideOut = function (i) {
    var e = this;
    !1 === e.cssTransitions ? e.$slides.eq(i).animate({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }));
  }, e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
    var e = this;
    null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
  }, e.prototype.focusHandler = function () {
    var e = this;
    e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
      t.stopImmediatePropagation();
      var o = i(this);
      setTimeout(function () {
        e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay());
      }, 0);
    });
  }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
    return this.currentSlide;
  }, e.prototype.getDotCount = function () {
    var i = this,
        e = 0,
        t = 0,
        o = 0;
    if (!0 === i.options.infinite) {
      if (i.slideCount <= i.options.slidesToShow) ++o;else for (; e < i.slideCount;) {
        ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
      }
    } else if (!0 === i.options.centerMode) o = i.slideCount;else if (i.options.asNavFor) for (; e < i.slideCount;) {
      ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
    } else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
    return o - 1;
  }, e.prototype.getLeft = function (i) {
    var e,
        t,
        o,
        s,
        n = this,
        r = 0;
    return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e;
  }, e.prototype.getOption = e.prototype.slickGetOption = function (i) {
    return this.options[i];
  }, e.prototype.getNavigableIndexes = function () {
    var i,
        e = this,
        t = 0,
        o = 0,
        s = [];

    for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) {
      s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    }

    return s;
  }, e.prototype.getSlick = function () {
    return this;
  }, e.prototype.getSlideCount = function () {
    var e,
        t,
        o = this;
    return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
      if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1;
    }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
  }, e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
    this.changeSlide({
      data: {
        message: "index",
        index: parseInt(i)
      }
    }, e);
  }, e.prototype.init = function (e) {
    var t = this;
    i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay());
  }, e.prototype.initADA = function () {
    var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
      return i >= 0 && i < e.slideCount;
    });
    e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
      var s = o.indexOf(t);
      i(this).attr({
        role: "tabpanel",
        id: "slick-slide" + e.instanceUid + t,
        tabindex: -1
      }), -1 !== s && i(this).attr({
        "aria-describedby": "slick-slide-control" + e.instanceUid + s
      });
    }), e.$dots.attr("role", "tablist").find("li").each(function (s) {
      var n = o[s];
      i(this).attr({
        role: "presentation"
      }), i(this).find("button").first().attr({
        role: "tab",
        id: "slick-slide-control" + e.instanceUid + s,
        "aria-controls": "slick-slide" + e.instanceUid + n,
        "aria-label": s + 1 + " of " + t,
        "aria-selected": null,
        tabindex: "-1"
      });
    }).eq(e.currentSlide).find("button").attr({
      "aria-selected": "true",
      tabindex: "0"
    }).end());

    for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) {
      e.$slides.eq(s).attr("tabindex", 0);
    }

    e.activateADA();
  }, e.prototype.initArrowEvents = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
      message: "previous"
    }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
      message: "next"
    }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
  }, e.prototype.initDotEvents = function () {
    var e = this;
    !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
      message: "index"
    }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
  }, e.prototype.initSlideEvents = function () {
    var e = this;
    e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
  }, e.prototype.initializeEvents = function () {
    var e = this;
    e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition);
  }, e.prototype.initUI = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
  }, e.prototype.keyHandler = function (i) {
    var e = this;
    i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "next" : "previous"
      }
    }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
      data: {
        message: !0 === e.options.rtl ? "previous" : "next"
      }
    }));
  }, e.prototype.lazyLoad = function () {
    function e(e) {
      i("img[data-lazy]", e).each(function () {
        var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            r = document.createElement("img");
        r.onload = function () {
          e.animate({
            opacity: 0
          }, 100, function () {
            o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
              opacity: 1
            }, 200, function () {
              e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            }), n.$slider.trigger("lazyLoaded", [n, e, t]);
          });
        }, r.onerror = function () {
          e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t]);
        }, r.src = t;
      });
    }

    var t,
        o,
        s,
        n = this;
    if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad) for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) {
      r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
    }
    e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
  }, e.prototype.loadSlider = function () {
    var i = this;
    i.setPosition(), i.$slideTrack.css({
      opacity: 1
    }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
  }, e.prototype.next = e.prototype.slickNext = function () {
    this.changeSlide({
      data: {
        message: "next"
      }
    });
  }, e.prototype.orientationChange = function () {
    var i = this;
    i.checkResponsive(), i.setPosition();
  }, e.prototype.pause = e.prototype.slickPause = function () {
    var i = this;
    i.autoPlayClear(), i.paused = !0;
  }, e.prototype.play = e.prototype.slickPlay = function () {
    var i = this;
    i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1;
  }, e.prototype.postSlide = function (e) {
    var t = this;
    t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
  }, e.prototype.prev = e.prototype.slickPrev = function () {
    this.changeSlide({
      data: {
        message: "previous"
      }
    });
  }, e.prototype.preventDefault = function (i) {
    i.preventDefault();
  }, e.prototype.progressiveLazyLoad = function (e) {
    e = e || 1;
    var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
    d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
      s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad();
    }, r.onerror = function () {
      e < 3 ? setTimeout(function () {
        l.progressiveLazyLoad(e + 1);
      }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad());
    }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l]);
  }, e.prototype.refresh = function (e) {
    var t,
        o,
        s = this;
    o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
      currentSlide: t
    }), s.init(), e || s.changeSlide({
      data: {
        message: "index",
        index: t
      }
    }, !1);
  }, e.prototype.registerBreakpoints = function () {
    var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;

    if ("array" === i.type(n) && n.length) {
      s.respondTo = s.options.respondTo || "window";

      for (e in n) {
        if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
          for (t = n[e].breakpoint; o >= 0;) {
            s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
          }

          s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings;
        }
      }

      s.breakpoints.sort(function (i, e) {
        return s.options.mobileFirst ? i - e : e - i;
      });
    }
  }, e.prototype.reinit = function () {
    var e = this;
    e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e]);
  }, e.prototype.resize = function () {
    var e = this;
    i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
      e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
    }, 50));
  }, e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
    var o = this;
    if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
    o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit();
  }, e.prototype.setCSS = function (i) {
    var e,
        t,
        o = this,
        s = {};
    !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)));
  }, e.prototype.setDimensions = function () {
    var i = this;
    !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
      padding: "0px " + i.options.centerPadding
    }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
      padding: i.options.centerPadding + " 0px"
    })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
    var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
    !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
  }, e.prototype.setFade = function () {
    var e,
        t = this;
    t.$slides.each(function (o, s) {
      e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
        position: "relative",
        right: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      }) : i(s).css({
        position: "relative",
        left: e,
        top: 0,
        zIndex: t.options.zIndex - 2,
        opacity: 0
      });
    }), t.$slides.eq(t.currentSlide).css({
      zIndex: t.options.zIndex - 1,
      opacity: 1
    });
  }, e.prototype.setHeight = function () {
    var i = this;

    if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
      var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
      i.$list.css("height", e);
    }
  }, e.prototype.setOption = e.prototype.slickSetOption = function () {
    var e,
        t,
        o,
        s,
        n,
        r = this,
        l = !1;
    if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;else if ("multiple" === n) i.each(o, function (i, e) {
      r.options[i] = e;
    });else if ("responsive" === n) for (t in s) {
      if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];else {
        for (e = r.options.responsive.length - 1; e >= 0;) {
          r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
        }

        r.options.responsive.push(s[t]);
      }
    }
    l && (r.unload(), r.reinit());
  }, e.prototype.setPosition = function () {
    var i = this;
    i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]);
  }, e.prototype.setProps = function () {
    var i = this,
        e = document.body.style;
    i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType;
  }, e.prototype.setSlideClasses = function (i) {
    var e,
        t,
        o,
        s,
        n = this;

    if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
      var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
      e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center");
    } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));

    "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad();
  }, e.prototype.setupInfinite = function () {
    var e,
        t,
        o,
        s = this;

    if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
      for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) {
        t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
      }

      for (e = 0; e < o + s.slideCount; e += 1) {
        t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
      }

      s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        i(this).attr("id", "");
      });
    }
  }, e.prototype.interrupt = function (i) {
    var e = this;
    i || e.autoPlay(), e.interrupted = i;
  }, e.prototype.selectHandler = function (e) {
    var t = this,
        o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
    s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s);
  }, e.prototype.slideHandler = function (i, e, t) {
    var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
    if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i)) if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function () {
      a.postSlide(o);
    }) : a.postSlide(o));else {
      if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function () {
        a.postSlide(s);
      })) : a.postSlide(s), void a.animateHeight();
      !0 !== t ? a.animateSlide(d, function () {
        a.postSlide(s);
      }) : a.postSlide(s);
    }
  }, e.prototype.startLoad = function () {
    var i = this;
    !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading");
  }, e.prototype.swipeDirection = function () {
    var i,
        e,
        t,
        o,
        s = this;
    return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical";
  }, e.prototype.swipeEnd = function (i) {
    var e,
        t,
        o = this;
    if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
    if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;

    if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
      switch (t = o.swipeDirection()) {
        case "left":
        case "down":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
          break;

        case "right":
        case "up":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1;
      }

      "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]));
    } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {});
  }, e.prototype.swipeHandler = function (i) {
    var e = this;
    if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
      case "start":
        e.swipeStart(i);
        break;

      case "move":
        e.swipeMove(i);
        break;

      case "end":
        e.swipeEnd(i);
    }
  }, e.prototype.swipeMove = function (i) {
    var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
    return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))));
  }, e.prototype.swipeStart = function (i) {
    var e,
        t = this;
    if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
    void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0;
  }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
    var i = this;
    null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
  }, e.prototype.unload = function () {
    var e = this;
    i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, e.prototype.unslick = function (i) {
    var e = this;
    e.$slider.trigger("unslick", [e, i]), e.destroy();
  }, e.prototype.updateArrows = function () {
    var i = this;
    Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, e.prototype.updateDots = function () {
    var i = this;
    null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"));
  }, e.prototype.visibility = function () {
    var i = this;
    i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1);
  }, i.fn.slick = function () {
    var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;

    for (i = 0; i < r; i++) {
      if ("object" == _typeof(s) || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
    }

    return o;
  };
});
/*!
 * VERSION: 1.15.1
 * DATE: 2015-01-20
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/

var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : void 0 || window;

(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";

  _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
    var s = function s(t) {
      var e,
          i = [],
          s = t.length;

      for (e = 0; e !== s; i.push(t[e++])) {
        ;
      }

      return i;
    },
        r = function r(t, e, s) {
      i.call(this, t, e, s), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render;
    },
        n = 1e-10,
        a = i._internals,
        o = a.isSelector,
        h = a.isArray,
        l = r.prototype = i.to({}, .1, {}),
        _ = [];

    r.version = "1.15.1", l.constructor = r, l.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, l.invalidate = function () {
      return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this);
    }, l.updateTo = function (t, e) {
      var s,
          r = this.ratio,
          n = this.vars.immediateRender || t.immediateRender;
      e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));

      for (s in t) {
        this.vars[s] = t[s];
      }

      if (this._initted || n) if (e) this._initted = !1, n && this.render(0, !0, !0);else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
        var a = this._time;
        this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1);
      } else if (this._time > 0 || n) {
        this._initted = !1, this._init();

        for (var o, h = 1 / (1 - r), l = this._firstPT; l;) {
          o = l.s + l.c, l.c *= h, l.s = o - l.c, l = l._next;
        }
      }
      return this;
    }, l.render = function (t, e, i) {
      this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
      var s,
          r,
          o,
          h,
          l,
          u,
          p,
          c,
          f = this._dirty ? this.totalDuration() : this._totalDuration,
          m = this._time,
          d = this._totalTime,
          g = this._cycle,
          v = this._duration,
          y = this._rawPrevTime;
      if (t >= f ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete"), 0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > y || y === n) && y !== t && (i = !0, y > n && (r = "onReverseComplete")), this._rawPrevTime = c = !e || t || y === t ? t : n)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== d || 0 === v && y > 0 && y !== n) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = c = !e || t || y === t ? t : n)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = v + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : 0 > this._time && (this._time = 0)), this._easeType ? (l = this._time / v, u = this._easeType, p = this._easePower, (1 === u || 3 === u && l >= .5) && (l = 1 - l), 3 === u && (l *= 2), 1 === p ? l *= l : 2 === p ? l *= l * l : 3 === p ? l *= l * l * l : 4 === p && (l *= l * l * l * l), this.ratio = 1 === u ? 1 - l : 2 === u ? l : .5 > this._time / v ? l / 2 : 1 - l / 2) : this.ratio = this._ease.getRatio(this._time / v)), m === this._time && !i && g === this._cycle) return d !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _)), void 0;

      if (!this._initted) {
        if (this._init(), !this._initted || this._gc) return;
        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = d, this._rawPrevTime = y, this._cycle = g, a.lazyTweens.push(this), this._lazy = [t, e], void 0;
        this._time && !s ? this.ratio = this._ease.getRatio(this._time / v) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
      }

      for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === d && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _))), o = this._firstPT; o;) {
        o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
      }

      this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== d || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _)), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || _)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || _), 0 === v && this._rawPrevTime === n && c !== n && (this._rawPrevTime = 0));
    }, r.to = function (t, e, i) {
      return new r(t, e, i);
    }, r.from = function (t, e, i) {
      return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i);
    }, r.fromTo = function (t, e, i, s) {
      return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new r(t, e, s);
    }, r.staggerTo = r.allTo = function (t, e, n, a, l, u, p) {
      a = a || 0;

      var c,
          f,
          m,
          d,
          g = n.delay || 0,
          v = [],
          y = function y() {
        n.onComplete && n.onComplete.apply(n.onCompleteScope || this, arguments), l.apply(p || this, u || _);
      };

      for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = s(t))), t = t || [], 0 > a && (t = s(t), t.reverse(), a *= -1), c = t.length - 1, m = 0; c >= m; m++) {
        f = {};

        for (d in n) {
          f[d] = n[d];
        }

        f.delay = g, m === c && l && (f.onComplete = y), v[m] = new r(t[m], e, f), g += a;
      }

      return v;
    }, r.staggerFrom = r.allFrom = function (t, e, i, s, n, a, o) {
      return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, s, n, a, o);
    }, r.staggerFromTo = r.allFromTo = function (t, e, i, s, n, a, o, h) {
      return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, s, n, a, o, h);
    }, r.delayedCall = function (t, e, i, s, n) {
      return new r(e, 0, {
        delay: t,
        onComplete: e,
        onCompleteParams: i,
        onCompleteScope: s,
        onReverseComplete: e,
        onReverseCompleteParams: i,
        onReverseCompleteScope: s,
        immediateRender: !1,
        useFrames: n,
        overwrite: 0
      });
    }, r.set = function (t, e) {
      return new r(t, 0, e);
    }, r.isTweening = function (t) {
      return i.getTweensOf(t, !0).length > 0;
    };

    var u = function u(t, e) {
      for (var s = [], r = 0, n = t._first; n;) {
        n instanceof i ? s[r++] = n : (e && (s[r++] = n), s = s.concat(u(n, e)), r = s.length), n = n._next;
      }

      return s;
    },
        p = r.getAllTweens = function (e) {
      return u(t._rootTimeline, e).concat(u(t._rootFramesTimeline, e));
    };

    r.killAll = function (t, i, s, r) {
      null == i && (i = !0), null == s && (s = !0);

      var n,
          a,
          o,
          h = p(0 != r),
          l = h.length,
          _ = i && s && r;

      for (o = 0; l > o; o++) {
        a = h[o], (_ || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1));
      }
    }, r.killChildTweensOf = function (t, e) {
      if (null != t) {
        var n,
            l,
            _,
            u,
            p,
            c = a.tweenLookup;

        if ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = s(t)), h(t)) for (u = t.length; --u > -1;) {
          r.killChildTweensOf(t[u], e);
        } else {
          n = [];

          for (_ in c) {
            for (l = c[_].target.parentNode; l;) {
              l === t && (n = n.concat(c[_].tweens)), l = l.parentNode;
            }
          }

          for (p = n.length, u = 0; p > u; u++) {
            e && n[u].totalTime(n[u].totalDuration()), n[u]._enabled(!1, !1);
          }
        }
      }
    };

    var c = function c(t, i, s, r) {
      i = i !== !1, s = s !== !1, r = r !== !1;

      for (var n, a, o = p(r), h = i && s && r, l = o.length; --l > -1;) {
        a = o[l], (h || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t);
      }
    };

    return r.pauseAll = function (t, e, i) {
      c(!0, t, e, i);
    }, r.resumeAll = function (t, e, i) {
      c(!1, t, e, i);
    }, r.globalTimeScale = function (e) {
      var s = t._rootTimeline,
          r = i.ticker.time;
      return arguments.length ? (e = e || n, s._startTime = r - (r - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, r = i.ticker.frame, s._startTime = r - (r - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale;
    }, l.progress = function (t) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration();
    }, l.totalProgress = function (t) {
      return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration();
    }, l.time = function (t, e) {
      return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time;
    }, l.duration = function (e) {
      return arguments.length ? t.prototype.duration.call(this, e) : this._duration;
    }, l.totalDuration = function (t) {
      return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration);
    }, l.repeat = function (t) {
      return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat;
    }, l.repeatDelay = function (t) {
      return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay;
    }, l.yoyo = function (t) {
      return arguments.length ? (this._yoyo = t, this) : this._yoyo;
    }, r;
  }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
    var s = function s(t) {
      e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
      var i,
          s,
          r = this.vars;

      for (s in r) {
        i = r[s], h(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
      }

      h(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger);
    },
        r = 1e-10,
        n = i._internals,
        a = s._internals = {},
        o = n.isSelector,
        h = n.isArray,
        l = n.lazyTweens,
        _ = n.lazyRender,
        u = [],
        p = _gsScope._gsDefine.globals,
        c = function c(t) {
      var e,
          i = {};

      for (e in t) {
        i[e] = t[e];
      }

      return i;
    },
        f = a.pauseCallback = function (t, e, i, s) {
      var r = t._timeline,
          n = r._totalTime;
      !e && this._forcingPlayhead || r._rawPrevTime === t._startTime || (r.pause(t._startTime), e && e.apply(s || r, i || u), this._forcingPlayhead && r.seek(n));
    },
        m = function m(t) {
      var e,
          i = [],
          s = t.length;

      for (e = 0; e !== s; i.push(t[e++])) {
        ;
      }

      return i;
    },
        d = s.prototype = new e();

    return s.version = "1.15.1", d.constructor = s, d.kill()._gc = d._forcingPlayhead = !1, d.to = function (t, e, s, r) {
      var n = s.repeat && p.TweenMax || i;
      return e ? this.add(new n(t, e, s), r) : this.set(t, s, r);
    }, d.from = function (t, e, s, r) {
      return this.add((s.repeat && p.TweenMax || i).from(t, e, s), r);
    }, d.fromTo = function (t, e, s, r, n) {
      var a = r.repeat && p.TweenMax || i;
      return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n);
    }, d.staggerTo = function (t, e, r, n, a, h, l, _) {
      var u,
          p = new s({
        onComplete: h,
        onCompleteParams: l,
        onCompleteScope: _,
        smoothChildTiming: this.smoothChildTiming
      });

      for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = m(t)), n = n || 0, 0 > n && (t = m(t), t.reverse(), n *= -1), u = 0; t.length > u; u++) {
        r.startAt && (r.startAt = c(r.startAt)), p.to(t[u], e, c(r), u * n);
      }

      return this.add(p, a);
    }, d.staggerFrom = function (t, e, i, s, r, n, a, o) {
      return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o);
    }, d.staggerFromTo = function (t, e, i, s, r, n, a, o, h) {
      return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, h);
    }, d.call = function (t, e, s, r) {
      return this.add(i.delayedCall(0, t, e, s), r);
    }, d.set = function (t, e, s) {
      return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s);
    }, s.exportRoot = function (t, e) {
      t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
      var r,
          n,
          a = new s(t),
          o = a._timeline;

      for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) {
        n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
      }

      return o.add(a, 0), a;
    }, d.add = function (r, n, a, o) {
      var l, _, u, p, c, f;

      if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
        if (r instanceof Array || r && r.push && h(r)) {
          for (a = a || "normal", o = o || 0, l = n, _ = r.length, u = 0; _ > u; u++) {
            h(p = r[u]) && (p = new s({
              tweens: p
            })), this.add(p, l), "string" != typeof p && "function" != typeof p && ("sequence" === a ? l = p._startTime + p.totalDuration() / p._timeScale : "start" === a && (p._startTime -= p.delay())), l += o;
          }

          return this._uncache(!0);
        }

        if ("string" == typeof r) return this.addLabel(r, n);
        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
        r = i.delayedCall(0, r);
      }

      if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (c = this, f = c.rawTime() > r._startTime; c._timeline;) {
        f && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1), c = c._timeline;
      }
      return this;
    }, d.remove = function (e) {
      if (e instanceof t) return this._remove(e, !1);

      if (e instanceof Array || e && e.push && h(e)) {
        for (var i = e.length; --i > -1;) {
          this.remove(e[i]);
        }

        return this;
      }

      return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e);
    }, d._remove = function (t, i) {
      e.prototype._remove.call(this, t, i);

      var s = this._last;
      return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this;
    }, d.append = function (t, e) {
      return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
    }, d.insert = d.insertMultiple = function (t, e, i, s) {
      return this.add(t, e || 0, i, s);
    }, d.appendMultiple = function (t, e, i, s) {
      return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s);
    }, d.addLabel = function (t, e) {
      return this._labels[t] = this._parseTimeOrLabel(e), this;
    }, d.addPause = function (t, e, s, r) {
      var n = i.delayedCall(0, f, ["{self}", e, s, r], this);
      return n.data = "isPause", this.add(n, t);
    }, d.removeLabel = function (t) {
      return delete this._labels[t], this;
    }, d.getLabelTime = function (t) {
      return null != this._labels[t] ? this._labels[t] : -1;
    }, d._parseTimeOrLabel = function (e, i, s, r) {
      var n;
      if (r instanceof t && r.timeline === this) this.remove(r);else if (r && (r instanceof Array || r.push && h(r))) for (n = r.length; --n > -1;) {
        r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
      }
      if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
      if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());else {
        if (n = e.indexOf("="), -1 === n) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
        i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration();
      }
      return Number(e) + i;
    }, d.seek = function (t, e) {
      return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1);
    }, d.stop = function () {
      return this.paused(!0);
    }, d.gotoAndPlay = function (t, e) {
      return this.play(t, e);
    }, d.gotoAndStop = function (t, e) {
      return this.pause(t, e);
    }, d.render = function (t, e, i) {
      this._gc && this._enabled(!0, !1);
      var s,
          n,
          a,
          o,
          h,
          p = this._dirty ? this.totalDuration() : this._totalDuration,
          c = this._time,
          f = this._startTime,
          m = this._timeScale,
          d = this._paused;

      if (t >= p ? (this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = p + 1e-4) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== c || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (h = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== c && this._first || i || h) {
        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== c && t > 0 && (this._active = !0), 0 === c && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || u)), this._time >= c) for (s = this._first; s && (a = s._next, !this._paused || d);) {
          (s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
        } else for (s = this._last; s && (a = s._prev, !this._paused || d);) {
          (s._active || c >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
        }
        this._onUpdate && (e || (l.length && _(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u))), o && (this._gc || (f === this._startTime || m !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (n && (l.length && _(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || u)));
      }
    }, d._hasPausedChild = function () {
      for (var t = this._first; t;) {
        if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
        t = t._next;
      }

      return !1;
    }, d.getChildren = function (t, e, s, r) {
      r = r || -9999999999;

      for (var n = [], a = this._first, o = 0; a;) {
        r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
      }

      return n;
    }, d.getTweensOf = function (t, e) {
      var s,
          r,
          n = this._gc,
          a = [],
          o = 0;

      for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1;) {
        (s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
      }

      return n && this._enabled(!1, !0), a;
    }, d.recent = function () {
      return this._recent;
    }, d._contains = function (t) {
      for (var e = t.timeline; e;) {
        if (e === this) return !0;
        e = e.timeline;
      }

      return !1;
    }, d.shiftChildren = function (t, e, i) {
      i = i || 0;

      for (var s, r = this._first, n = this._labels; r;) {
        r._startTime >= i && (r._startTime += t), r = r._next;
      }

      if (e) for (s in n) {
        n[s] >= i && (n[s] += t);
      }
      return this._uncache(!0);
    }, d._kill = function (t, e) {
      if (!t && !e) return this._enabled(!1, !1);

      for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) {
        i[s]._kill(t, e) && (r = !0);
      }

      return r;
    }, d.clear = function (t) {
      var e = this.getChildren(!1, !0, !0),
          i = e.length;

      for (this._time = this._totalTime = 0; --i > -1;) {
        e[i]._enabled(!1, !1);
      }

      return t !== !1 && (this._labels = {}), this._uncache(!0);
    }, d.invalidate = function () {
      for (var e = this._first; e;) {
        e.invalidate(), e = e._next;
      }

      return t.prototype.invalidate.call(this);
    }, d._enabled = function (t, i) {
      if (t === this._gc) for (var s = this._first; s;) {
        s._enabled(t, !0), s = s._next;
      }
      return e.prototype._enabled.call(this, t, i);
    }, d.totalTime = function () {
      this._forcingPlayhead = !0;
      var e = t.prototype.totalTime.apply(this, arguments);
      return this._forcingPlayhead = !1, e;
    }, d.duration = function (t) {
      return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration);
    }, d.totalDuration = function (t) {
      if (!arguments.length) {
        if (this._dirty) {
          for (var e, i, s = 0, r = this._last, n = 999999999999; r;) {
            e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
          }

          this._duration = this._totalDuration = s, this._dirty = !1;
        }

        return this._totalDuration;
      }

      return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this;
    }, d.usesFrames = function () {
      for (var e = this._timeline; e._timeline;) {
        e = e._timeline;
      }

      return e === t._rootFramesTimeline;
    }, d.rawTime = function () {
      return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale;
    }, s;
  }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (t, e, i) {
    var s = function s(e) {
      t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0;
    },
        r = 1e-10,
        n = [],
        a = e._internals,
        o = a.lazyTweens,
        h = a.lazyRender,
        l = new i(null, null, 1, 0),
        _ = s.prototype = new t();

    return _.constructor = s, _.kill()._gc = !1, s.version = "1.15.1", _.invalidate = function () {
      return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this);
    }, _.addCallback = function (t, i, s, r) {
      return this.add(e.delayedCall(0, t, s, r), i);
    }, _.removeCallback = function (t, e) {
      if (t) if (null == e) this._kill(null, t);else for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1;) {
        i[s]._startTime === r && i[s]._enabled(!1, !1);
      }
      return this;
    }, _.removePause = function (e) {
      return this.removeCallback(t._internals.pauseCallback, e);
    }, _.tweenTo = function (t, i) {
      i = i || {};
      var s,
          r,
          a,
          o = {
        ease: l,
        useFrames: this.usesFrames(),
        immediateRender: !1
      };

      for (r in i) {
        o[r] = i[r];
      }

      return o.time = this._parseTimeOrLabel(t), s = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, a = new e(this, s, o), o.onStart = function () {
        a.target.paused(!0), a.vars.time !== a.target.time() && s === a.duration() && a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || a, i.onStartParams || n);
      }, a;
    }, _.tweenFromTo = function (t, e, i) {
      i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
        onComplete: this.seek,
        onCompleteParams: [t],
        onCompleteScope: this
      }, i.immediateRender = i.immediateRender !== !1;
      var s = this.tweenTo(e, i);
      return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001);
    }, _.render = function (t, e, i) {
      this._gc && this._enabled(!0, !1);

      var s,
          a,
          l,
          _,
          u,
          p,
          c = this._dirty ? this.totalDuration() : this._totalDuration,
          f = this._duration,
          m = this._time,
          d = this._totalTime,
          g = this._startTime,
          v = this._timeScale,
          y = this._rawPrevTime,
          T = this._paused,
          w = this._cycle;

      if (t >= c ? (this._locked || (this._totalTime = c, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (a = !0, _ = "onComplete", 0 === this._duration && (0 === t || 0 > y || y === r) && y !== t && this._first && (u = !0, y > r && (_ = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = f, t = f + 1e-4)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === f && y !== r && (y > 0 || 0 > t && y >= 0) && !this._locked) && (_ = "onReverseComplete", a = this._reversed), 0 > t ? (this._active = !1, y >= 0 && this._first && (u = !0), this._rawPrevTime = t) : (this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (u = !0))) : (0 === f && 0 > y && (u = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (p = f + this._repeatDelay, this._cycle = this._totalTime / p >> 0, 0 !== this._cycle && this._cycle === this._totalTime / p && this._cycle--, this._time = this._totalTime - this._cycle * p, this._yoyo && 0 !== (1 & this._cycle) && (this._time = f - this._time), this._time > f ? (this._time = f, t = f + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time))), this._cycle !== w && !this._locked) {
        var x = this._yoyo && 0 !== (1 & w),
            b = x === (this._yoyo && 0 !== (1 & this._cycle)),
            P = this._totalTime,
            S = this._cycle,
            k = this._rawPrevTime,
            R = this._time;
        if (this._totalTime = w * f, w > this._cycle ? x = !x : this._totalTime += f, this._time = m, this._rawPrevTime = 0 === f ? y - 1e-4 : y, this._cycle = w, this._locked = !0, m = x ? 0 : f, this.render(m, e, 0 === f), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || n), b && (m = x ? f + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !T) return;
        this._time = R, this._totalTime = P, this._cycle = S, this._rawPrevTime = k;
      }

      if (!(this._time !== m && this._first || i || u)) return d !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n)), void 0;
      if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || n)), this._time >= m) for (s = this._first; s && (l = s._next, !this._paused || T);) {
        (s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = l;
      } else for (s = this._last; s && (l = s._prev, !this._paused || T);) {
        (s._active || m >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = l;
      }
      this._onUpdate && (e || (o.length && h(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n))), _ && (this._locked || this._gc || (g === this._startTime || v !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (a && (o.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[_] && this.vars[_].apply(this.vars[_ + "Scope"] || this, this.vars[_ + "Params"] || n)));
    }, _.getActive = function (t, e, i) {
      null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
      var s,
          r,
          n = [],
          a = this.getChildren(t, e, i),
          o = 0,
          h = a.length;

      for (s = 0; h > s; s++) {
        r = a[s], r.isActive() && (n[o++] = r);
      }

      return n;
    }, _.getLabelAfter = function (t) {
      t || 0 !== t && (t = this._time);
      var e,
          i = this.getLabelsArray(),
          s = i.length;

      for (e = 0; s > e; e++) {
        if (i[e].time > t) return i[e].name;
      }

      return null;
    }, _.getLabelBefore = function (t) {
      null == t && (t = this._time);

      for (var e = this.getLabelsArray(), i = e.length; --i > -1;) {
        if (t > e[i].time) return e[i].name;
      }

      return null;
    }, _.getLabelsArray = function () {
      var t,
          e = [],
          i = 0;

      for (t in this._labels) {
        e[i++] = {
          time: this._labels[t],
          name: t
        };
      }

      return e.sort(function (t, e) {
        return t.time - e.time;
      }), e;
    }, _.progress = function (t, e) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration();
    }, _.totalProgress = function (t, e) {
      return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration();
    }, _.totalDuration = function (e) {
      return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration);
    }, _.time = function (t, e) {
      return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time;
    }, _.repeat = function (t) {
      return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat;
    }, _.repeatDelay = function (t) {
      return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay;
    }, _.yoyo = function (t) {
      return arguments.length ? (this._yoyo = t, this) : this._yoyo;
    }, _.currentLabel = function (t) {
      return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8);
    }, s;
  }, !0), function () {
    var t = 180 / Math.PI,
        e = [],
        i = [],
        s = [],
        r = {},
        n = _gsScope._gsDefine.globals,
        a = function a(t, e, i, s) {
      this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t;
    },
        o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
        h = function h(t, e, i, s) {
      var r = {
        a: t
      },
          n = {},
          a = {},
          o = {
        c: s
      },
          h = (t + e) / 2,
          l = (e + i) / 2,
          _ = (i + s) / 2,
          u = (h + l) / 2,
          p = (l + _) / 2,
          c = (p - u) / 8;

      return r.b = h + (t - h) / 4, n.b = u + c, r.c = n.a = (r.b + n.b) / 2, n.c = a.a = (u + p) / 2, a.b = p - c, o.b = _ + (s - _) / 4, a.c = o.a = (a.b + o.b) / 2, [r, n, a, o];
    },
        l = function l(t, r, n, a, o) {
      var l,
          _,
          u,
          p,
          c,
          f,
          m,
          d,
          g,
          v,
          y,
          T,
          w,
          x = t.length - 1,
          b = 0,
          P = t[0].a;

      for (l = 0; x > l; l++) {
        c = t[b], _ = c.a, u = c.d, p = t[b + 1].d, o ? (y = e[l], T = i[l], w = .25 * (T + y) * r / (a ? .5 : s[l] || .5), f = u - (u - _) * (a ? .5 * r : 0 !== y ? w / y : 0), m = u + (p - u) * (a ? .5 * r : 0 !== T ? w / T : 0), d = u - (f + ((m - f) * (3 * y / (y + T) + .5) / 4 || 0))) : (f = u - .5 * (u - _) * r, m = u + .5 * (p - u) * r, d = u - (f + m) / 2), f += d, m += d, c.c = g = f, c.b = 0 !== l ? P : P = c.a + .6 * (c.c - c.a), c.da = u - _, c.ca = g - _, c.ba = P - _, n ? (v = h(_, P, g, u), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, P = m;
      }

      c = t[b], c.b = P, c.c = P + .4 * (c.d - P), c.da = c.d - c.a, c.ca = c.c - c.a, c.ba = P - c.a, n && (v = h(c.a, P, c.c, c.d), t.splice(b, 1, v[0], v[1], v[2], v[3]));
    },
        _ = function _(t, s, r, n) {
      var o,
          h,
          l,
          _,
          u,
          p,
          c = [];

      if (n) for (t = [n].concat(t), h = t.length; --h > -1;) {
        "string" == typeof (p = t[h][s]) && "=" === p.charAt(1) && (t[h][s] = n[s] + Number(p.charAt(0) + p.substr(2)));
      }
      if (o = t.length - 2, 0 > o) return c[0] = new a(t[0][s], 0, 0, t[-1 > o ? 0 : 1][s]), c;

      for (h = 0; o > h; h++) {
        l = t[h][s], _ = t[h + 1][s], c[h] = new a(l, 0, 0, _), r && (u = t[h + 2][s], e[h] = (e[h] || 0) + (_ - l) * (_ - l), i[h] = (i[h] || 0) + (u - _) * (u - _));
      }

      return c[h] = new a(t[h][s], 0, 0, t[h + 1][s]), c;
    },
        u = function u(t, n, a, h, _u, p) {
      var c,
          f,
          m,
          d,
          g,
          v,
          y,
          T,
          w = {},
          x = [],
          b = p || t[0];
      _u = "string" == typeof _u ? "," + _u + "," : o, null == n && (n = 1);

      for (f in t[0]) {
        x.push(f);
      }

      if (t.length > 1) {
        for (T = t[t.length - 1], y = !0, c = x.length; --c > -1;) {
          if (f = x[c], Math.abs(b[f] - T[f]) > .05) {
            y = !1;
            break;
          }
        }

        y && (t = t.concat(), p && t.unshift(p), t.push(t[1]), p = t[t.length - 3]);
      }

      for (e.length = i.length = s.length = 0, c = x.length; --c > -1;) {
        f = x[c], r[f] = -1 !== _u.indexOf("," + f + ","), w[f] = _(t, f, r[f], p);
      }

      for (c = e.length; --c > -1;) {
        e[c] = Math.sqrt(e[c]), i[c] = Math.sqrt(i[c]);
      }

      if (!h) {
        for (c = x.length; --c > -1;) {
          if (r[f]) for (m = w[x[c]], v = m.length - 1, d = 0; v > d; d++) {
            g = m[d + 1].da / i[d] + m[d].da / e[d], s[d] = (s[d] || 0) + g * g;
          }
        }

        for (c = s.length; --c > -1;) {
          s[c] = Math.sqrt(s[c]);
        }
      }

      for (c = x.length, d = a ? 4 : 1; --c > -1;) {
        f = x[c], m = w[f], l(m, n, a, h, r[f]), y && (m.splice(0, d), m.splice(m.length - d, d));
      }

      return w;
    },
        p = function p(t, e, i) {
      e = e || "soft";

      var s,
          r,
          n,
          o,
          h,
          l,
          _,
          u,
          p,
          c,
          f,
          m = {},
          d = "cubic" === e ? 3 : 2,
          g = "soft" === e,
          v = [];

      if (g && i && (t = [i].concat(t)), null == t || d + 1 > t.length) throw "invalid Bezier data";

      for (p in t[0]) {
        v.push(p);
      }

      for (l = v.length; --l > -1;) {
        for (p = v[l], m[p] = h = [], c = 0, u = t.length, _ = 0; u > _; _++) {
          s = null == i ? t[_][p] : "string" == typeof (f = t[_][p]) && "=" === f.charAt(1) ? i[p] + Number(f.charAt(0) + f.substr(2)) : Number(f), g && _ > 1 && u - 1 > _ && (h[c++] = (s + h[c - 2]) / 2), h[c++] = s;
        }

        for (u = c - d + 1, c = 0, _ = 0; u > _; _ += d) {
          s = h[_], r = h[_ + 1], n = h[_ + 2], o = 2 === d ? 0 : h[_ + 3], h[c++] = f = 3 === d ? new a(s, r, n, o) : new a(s, (2 * r + s) / 3, (2 * r + n) / 3, n);
        }

        h.length = c;
      }

      return m;
    },
        c = function c(t, e, i) {
      for (var s, r, n, a, o, h, l, _, u, p, c, f = 1 / i, m = t.length; --m > -1;) {
        for (p = t[m], n = p.a, a = p.d - n, o = p.c - n, h = p.b - n, s = r = 0, _ = 1; i >= _; _++) {
          l = f * _, u = 1 - l, s = r - (r = (l * l * a + 3 * u * (l * o + u * h)) * l), c = m * i + _ - 1, e[c] = (e[c] || 0) + s * s;
        }
      }
    },
        f = function f(t, e) {
      e = e >> 0 || 6;

      var i,
          s,
          r,
          n,
          a = [],
          o = [],
          h = 0,
          l = 0,
          _ = e - 1,
          u = [],
          p = [];

      for (i in t) {
        c(t[i], a, e);
      }

      for (r = a.length, s = 0; r > s; s++) {
        h += Math.sqrt(a[s]), n = s % e, p[n] = h, n === _ && (l += h, n = s / e >> 0, u[n] = p, o[n] = l, h = 0, p = []);
      }

      return {
        length: l,
        lengths: o,
        segments: u
      };
    },
        m = _gsScope._gsDefine.plugin({
      propName: "bezier",
      priority: -1,
      version: "1.3.4",
      API: 2,
      global: !0,
      init: function init(t, e, i) {
        this._target = t, e instanceof Array && (e = {
          values: e
        }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
        var s,
            r,
            n,
            a,
            o,
            h = e.values || [],
            l = {},
            _ = h[0],
            c = e.autoRotate || i.vars.orientToBezier;
        this._autoRotate = c ? c instanceof Array ? c : [["x", "y", "rotation", c === !0 ? 0 : Number(c) || 0]] : null;

        for (s in _) {
          this._props.push(s);
        }

        for (n = this._props.length; --n > -1;) {
          s = this._props[n], this._overwriteProps.push(s), r = this._func[s] = "function" == typeof t[s], l[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), o || l[s] !== h[0][s] && (o = l);
        }

        if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : p(h, e.type, l), this._segCount = this._beziers[s].length, this._timeRes) {
          var m = f(this._beziers, this._timeRes);
          this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length;
        }

        if (c = this._autoRotate) for (this._initialRotations = [], c[0] instanceof Array || (this._autoRotate = c = [c]), n = c.length; --n > -1;) {
          for (a = 0; 3 > a; a++) {
            s = c[n][a], this._func[s] = "function" == typeof t[s] ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)] : !1;
          }

          s = c[n][2], this._initialRotations[n] = this._func[s] ? this._func[s].call(this._target) : this._target[s];
        }
        return this._startRatio = i.vars.runBackwards ? 1 : 0, !0;
      },
      set: function set(e) {
        var i,
            s,
            r,
            n,
            a,
            o,
            h,
            l,
            _,
            u,
            p = this._segCount,
            c = this._func,
            f = this._target,
            m = e !== this._startRatio;

        if (this._timeRes) {
          if (_ = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && p - 1 > r) {
            for (l = p - 1; l > r && e >= (this._l2 = _[++r]);) {
              ;
            }

            this._l1 = _[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0];
          } else if (this._l1 > e && r > 0) {
            for (; r > 0 && (this._l1 = _[--r]) >= e;) {
              ;
            }

            0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = _[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si];
          }

          if (i = r, e -= this._l1, r = this._si, e > this._s2 && u.length - 1 > r) {
            for (l = u.length - 1; l > r && e >= (this._s2 = u[++r]);) {
              ;
            }

            this._s1 = u[r - 1], this._si = r;
          } else if (this._s1 > e && r > 0) {
            for (; r > 0 && (this._s1 = u[--r]) >= e;) {
              ;
            }

            0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r;
          }

          o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec;
        } else i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0, o = (e - i * (1 / p)) * p;

        for (s = 1 - o, r = this._props.length; --r > -1;) {
          n = this._props[r], a = this._beziers[n][i], h = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a, this._round[n] && (h = Math.round(h)), c[n] ? f[n](h) : f[n] = h;
        }

        if (this._autoRotate) {
          var d,
              g,
              v,
              y,
              T,
              w,
              x,
              b = this._autoRotate;

          for (r = b.length; --r > -1;) {
            n = b[r][2], w = b[r][3] || 0, x = b[r][4] === !0 ? 1 : t, a = this._beziers[b[r][0]], d = this._beziers[b[r][1]], a && d && (a = a[i], d = d[i], g = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, g += (y - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, v = d.a + (d.b - d.a) * o, T = d.b + (d.c - d.b) * o, v += (T - v) * o, T += (d.c + (d.d - d.c) * o - T) * o, h = m ? Math.atan2(T - v, y - g) * x + w : this._initialRotations[r], c[n] ? f[n](h) : f[n] = h);
          }
        }
      }
    }),
        d = m.prototype;

    m.bezierThrough = u, m.cubicToQuadratic = h, m._autoCSS = !0, m.quadraticToCubic = function (t, e, i) {
      return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i);
    }, m._cssRegister = function () {
      var t = n.CSSPlugin;

      if (t) {
        var e = t._internals,
            i = e._parseToProxy,
            s = e._setPluginRatio,
            r = e.CSSPropTween;

        e._registerComplexSpecialProp("bezier", {
          parser: function parser(t, e, n, a, o, h) {
            e instanceof Array && (e = {
              values: e
            }), h = new m();

            var l,
                _,
                u,
                p = e.values,
                c = p.length - 1,
                f = [],
                d = {};

            if (0 > c) return o;

            for (l = 0; c >= l; l++) {
              u = i(t, p[l], a, o, h, c !== l), f[l] = u.end;
            }

            for (_ in e) {
              d[_] = e[_];
            }

            return d.values = f, o = new r(t, "bezier", 0, 0, u.pt, 2), o.data = u, o.plugin = h, o.setRatio = s, 0 === d.autoRotate && (d.autoRotate = !0), !d.autoRotate || d.autoRotate instanceof Array || (l = d.autoRotate === !0 ? 0 : Number(d.autoRotate), d.autoRotate = null != u.end.left ? [["left", "top", "rotation", l, !1]] : null != u.end.x ? [["x", "y", "rotation", l, !1]] : !1), d.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform), h._onInitTween(u.proxy, d, a._tween), o;
          }
        });
      }
    }, d._roundProps = function (t, e) {
      for (var i = this._overwriteProps, s = i.length; --s > -1;) {
        (t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e);
      }
    }, d._kill = function (t) {
      var e,
          i,
          s = this._props;

      for (e in this._beziers) {
        if (e in t) for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) {
          s[i] === e && s.splice(i, 1);
        }
      }

      return this._super._kill.call(this, t);
    };
  }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
    var i,
        s,
        r,
        n,
        a = function a() {
      t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio;
    },
        o = _gsScope._gsDefine.globals,
        h = {},
        l = a.prototype = new t("css");

    l.constructor = a, a.version = "1.15.1", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", l = "px", a.suffixMap = {
      top: l,
      right: l,
      bottom: l,
      left: l,
      width: l,
      height: l,
      fontSize: l,
      padding: l,
      margin: l,
      perspective: l,
      lineHeight: ""
    };

    var _,
        u,
        p,
        c,
        f,
        m,
        d = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
        g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
        v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
        y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
        T = /(?:\d|\-|\+|=|#|\.)*/g,
        w = /opacity *= *([^)]*)/i,
        x = /opacity:([^;]*)/i,
        b = /alpha\(opacity *=.+?\)/i,
        P = /^(rgb|hsl)/,
        S = /([A-Z])/g,
        k = /-([a-z])/gi,
        R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
        A = function A(t, e) {
      return e.toUpperCase();
    },
        C = /(?:Left|Right|Width)/i,
        O = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
        D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
        M = /,(?=[^\)]*(?:\(|$))/gi,
        z = Math.PI / 180,
        I = 180 / Math.PI,
        F = {},
        E = document,
        N = function N(t) {
      return E.createElementNS ? E.createElementNS("http://www.w3.org/1999/xhtml", t) : E.createElement(t);
    },
        L = N("div"),
        X = N("img"),
        U = a._internals = {
      _specialProps: h
    },
        Y = navigator.userAgent,
        B = function () {
      var t = Y.indexOf("Android"),
          e = N("a");
      return p = -1 !== Y.indexOf("Safari") && -1 === Y.indexOf("Chrome") && (-1 === t || Number(Y.substr(t + 8, 1)) > 3), f = p && 6 > Number(Y.substr(Y.indexOf("Version/") + 8, 1)), c = -1 !== Y.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y)) && (m = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1;
    }(),
        j = function j(t) {
      return w.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
    },
        q = function q(t) {
      window.console && console.log(t);
    },
        V = "",
        G = "",
        W = function W(t, e) {
      e = e || L;
      var i,
          s,
          r = e.style;
      if (void 0 !== r[t]) return t;

      for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];) {
        ;
      }

      return s >= 0 ? (G = 3 === s ? "ms" : i[s], V = "-" + G.toLowerCase() + "-", G + t) : null;
    },
        Z = E.defaultView ? E.defaultView.getComputedStyle : function () {},
        Q = a.getStyle = function (t, e, i, s, r) {
      var n;
      return B || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || Z(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : j(t);
    },
        $ = U.convertToPixels = function (t, i, s, r, n) {
      if ("px" === r || !r) return s;
      if ("auto" === r || !s) return 0;

      var o,
          h,
          l,
          _ = C.test(i),
          u = t,
          p = L.style,
          c = 0 > s;

      if (c && (s = -s), "%" === r && -1 !== i.indexOf("border")) o = s / 100 * (_ ? t.clientWidth : t.clientHeight);else {
        if (p.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== r && u.appendChild) p[_ ? "borderLeftWidth" : "borderTopWidth"] = s + r;else {
          if (u = t.parentNode || E.body, h = u._gsCache, l = e.ticker.frame, h && _ && h.time === l) return h.width * s / 100;
          p[_ ? "width" : "height"] = s + r;
        }
        u.appendChild(L), o = parseFloat(L[_ ? "offsetWidth" : "offsetHeight"]), u.removeChild(L), _ && "%" === r && a.cacheWidths !== !1 && (h = u._gsCache = u._gsCache || {}, h.time = l, h.width = 100 * (o / s)), 0 !== o || n || (o = $(t, i, s, r, !0));
      }
      return c ? -o : o;
    },
        H = U.calculateOffset = function (t, e, i) {
      if ("absolute" !== Q(t, "position", i)) return 0;
      var s = "left" === e ? "Left" : "Top",
          r = Q(t, "margin" + s, i);
      return t["offset" + s] - ($(t, e, parseFloat(r), r.replace(T, "")) || 0);
    },
        K = function K(t, e) {
      var i,
          s,
          r = {};
      if (e = e || Z(t, null)) for (i in e) {
        (-1 === i.indexOf("Transform") || xe === i) && (r[i] = e[i]);
      } else if (e = t.currentStyle || t.style) for (i in e) {
        "string" == typeof i && void 0 === r[i] && (r[i.replace(k, A)] = e[i]);
      }
      return B || (r.opacity = j(t)), s = Me(t, e, !1), r.rotation = s.rotation, r.skewX = s.skewX, r.scaleX = s.scaleX, r.scaleY = s.scaleY, r.x = s.x, r.y = s.y, Se && (r.z = s.z, r.rotationX = s.rotationX, r.rotationY = s.rotationY, r.scaleZ = s.scaleZ), r.filters && delete r.filters, r;
    },
        J = function J(t, e, i, s, r) {
      var n,
          a,
          o,
          h = {},
          l = t.style;

      for (a in i) {
        "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (h[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(y, "") ? n : 0 : H(t, a), void 0 !== l[a] && (o = new ce(l, a, l[a], o)));
      }

      if (s) for (a in s) {
        "className" !== a && (h[a] = s[a]);
      }
      return {
        difs: h,
        firstMPT: o
      };
    },
        te = {
      width: ["Left", "Right"],
      height: ["Top", "Bottom"]
    },
        ee = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
        ie = function ie(t, e, i) {
      var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
          r = te[e],
          n = r.length;

      for (i = i || Z(t, null); --n > -1;) {
        s -= parseFloat(Q(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(Q(t, "border" + r[n] + "Width", i, !0)) || 0;
      }

      return s;
    },
        se = function se(t, e) {
      (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
      var i = t.split(" "),
          s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
          r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
      return null == r ? r = "center" === s ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(y, "")), e.oy = parseFloat(r.replace(y, ""))), s + " " + r + (i.length > 2 ? " " + i[2] : "");
    },
        re = function re(t, e) {
      return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e);
    },
        ne = function ne(t, e) {
      return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t);
    },
        ae = function ae(t, e, i, s) {
      var r,
          n,
          a,
          o,
          h,
          l = 1e-6;
      return null == t ? o = e : "number" == typeof t ? o = t : (r = 360, n = t.split("_"), h = "=" === t.charAt(1), a = (h ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : I) - (h ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)), o = e + a), l > o && o > -l && (o = 0), o;
    },
        oe = {
      aqua: [0, 255, 255],
      lime: [0, 255, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, 255],
      navy: [0, 0, 128],
      white: [255, 255, 255],
      fuchsia: [255, 0, 255],
      olive: [128, 128, 0],
      yellow: [255, 255, 0],
      orange: [255, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [255, 0, 0],
      pink: [255, 192, 203],
      cyan: [0, 255, 255],
      transparent: [255, 255, 255, 0]
    },
        he = function he(t, e, i) {
      return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5;
    },
        le = a.parseColor = function (t) {
      var e, i, s, r, n, a;
      return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), oe[t] ? oe[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), s = t.charAt(3), t = "#" + e + e + i + i + s + s), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(d), r = Number(t[0]) % 360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = he(r + 1 / 3, e, i), t[1] = he(r, e, i), t[2] = he(r - 1 / 3, e, i), t) : (t = t.match(d) || oe.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : oe.black;
    },
        _e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";

    for (l in oe) {
      _e += "|" + l + "\\b";
    }

    _e = RegExp(_e + ")", "gi");

    var ue = function ue(t, e, i, s) {
      if (null == t) return function (t) {
        return t;
      };
      var r,
          n = e ? (t.match(_e) || [""])[0] : "",
          a = t.split(n).join("").match(v) || [],
          o = t.substr(0, t.indexOf(a[0])),
          h = ")" === t.charAt(t.length - 1) ? ")" : "",
          l = -1 !== t.indexOf(" ") ? " " : ",",
          _ = a.length,
          u = _ > 0 ? a[0].replace(d, "") : "";
      return _ ? r = e ? function (t) {
        var e, p, c, f;
        if ("number" == typeof t) t += u;else if (s && M.test(t)) {
          for (f = t.replace(M, "|").split("|"), c = 0; f.length > c; c++) {
            f[c] = r(f[c]);
          }

          return f.join(",");
        }
        if (e = (t.match(_e) || [n])[0], p = t.split(e).join("").match(v) || [], c = p.length, _ > c--) for (; _ > ++c;) {
          p[c] = i ? p[0 | (c - 1) / 2] : a[c];
        }
        return o + p.join(l) + l + e + h + (-1 !== t.indexOf("inset") ? " inset" : "");
      } : function (t) {
        var e, n, p;
        if ("number" == typeof t) t += u;else if (s && M.test(t)) {
          for (n = t.replace(M, "|").split("|"), p = 0; n.length > p; p++) {
            n[p] = r(n[p]);
          }

          return n.join(",");
        }
        if (e = t.match(v) || [], p = e.length, _ > p--) for (; _ > ++p;) {
          e[p] = i ? e[0 | (p - 1) / 2] : a[p];
        }
        return o + e.join(l) + h;
      } : function (t) {
        return t;
      };
    },
        pe = function pe(t) {
      return t = t.split(","), function (e, i, s, r, n, a, o) {
        var h,
            l = (i + "").split(" ");

        for (o = {}, h = 0; 4 > h; h++) {
          o[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0];
        }

        return r.parse(e, o, n, a);
      };
    },
        ce = (U._setPluginRatio = function (t) {
      this.plugin.setRatio(t);

      for (var e, i, s, r, n = this.data, a = n.proxy, o = n.firstMPT, h = 1e-6; o;) {
        e = a[o.v], o.r ? e = Math.round(e) : h > e && e > -h && (e = 0), o.t[o.p] = e, o = o._next;
      }

      if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t) for (o = n.firstMPT; o;) {
        if (i = o.t, i.type) {
          if (1 === i.type) {
            for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++) {
              r += i["xn" + s] + i["xs" + (s + 1)];
            }

            i.e = r;
          }
        } else i.e = i.s + i.xs0;

        o = o._next;
      }
    }, function (t, e, i, s, r) {
      this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s);
    }),
        fe = (U._parseToProxy = function (t, e, i, s, r, n) {
      var a,
          o,
          h,
          l,
          _,
          u = s,
          p = {},
          c = {},
          f = i._transform,
          m = F;

      for (i._transform = null, F = e, s = _ = i.parse(t, e, s, r), F = m, n && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
        if (1 >= s.type && (o = s.p, c[o] = s.s + s.c, p[o] = s.s, n || (l = new ce(s, "s", o, l, s.r), s.c = 0), 1 === s.type)) for (a = s.l; --a > 0;) {
          h = "xn" + a, o = s.p + "_" + h, c[o] = s.data[h], p[o] = s[h], n || (l = new ce(s, h, o, l, s.rxp[h]));
        }
        s = s._next;
      }

      return {
        proxy: p,
        end: c,
        firstMPT: l,
        pt: _
      };
    }, U.CSSPropTween = function (t, e, s, r, a, o, h, l, _, u, p) {
      this.t = t, this.p = e, this.s = s, this.c = r, this.n = h || e, t instanceof fe || n.push(this.n), this.r = l, this.type = o || 0, _ && (this.pr = _, i = !0), this.b = void 0 === u ? s : u, this.e = void 0 === p ? s + r : p, a && (this._next = a, a._prev = this);
    }),
        me = a.parseComplex = function (t, e, i, s, r, n, a, o, h, l) {
      i = i || n || "", a = new fe(t, e, 0, 0, a, l ? 2 : 1, null, !1, o, i, s), s += "";
      var u,
          p,
          c,
          f,
          m,
          v,
          y,
          T,
          w,
          x,
          b,
          S,
          k = i.split(", ").join(",").split(" "),
          R = s.split(", ").join(",").split(" "),
          A = k.length,
          C = _ !== !1;

      for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (k = k.join(" ").replace(M, ", ").split(" "), R = R.join(" ").replace(M, ", ").split(" "), A = k.length), A !== R.length && (k = (n || "").split(" "), A = k.length), a.plugin = h, a.setRatio = l, u = 0; A > u; u++) {
        if (f = k[u], m = R[u], T = parseFloat(f), T || 0 === T) a.appendXtra("", T, re(m, T), m.replace(g, ""), C && -1 !== m.indexOf("px"), !0);else if (r && ("#" === f.charAt(0) || oe[f] || P.test(f))) S = "," === m.charAt(m.length - 1) ? ")," : ")", f = le(f), m = le(m), w = f.length + m.length > 6, w && !B && 0 === m[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(R[u]).join("transparent")) : (B || (w = !1), a.appendXtra(w ? "rgba(" : "rgb(", f[0], m[0] - f[0], ",", !0, !0).appendXtra("", f[1], m[1] - f[1], ",", !0).appendXtra("", f[2], m[2] - f[2], w ? "," : S, !0), w && (f = 4 > f.length ? 1 : f[3], a.appendXtra("", f, (4 > m.length ? 1 : m[3]) - f, S, !1)));else if (v = f.match(d)) {
          if (y = m.match(g), !y || y.length !== v.length) return a;

          for (c = 0, p = 0; v.length > p; p++) {
            b = v[p], x = f.indexOf(b, c), a.appendXtra(f.substr(c, x - c), Number(b), re(y[p], b), "", C && "px" === f.substr(x + b.length, 2), 0 === p), c = x + b.length;
          }

          a["xs" + a.l] += f.substr(c);
        } else a["xs" + a.l] += a.l ? " " + f : f;
      }

      if (-1 !== s.indexOf("=") && a.data) {
        for (S = a.xs0 + a.data.s, u = 1; a.l > u; u++) {
          S += a["xs" + u] + a.data["xn" + u];
        }

        a.e = S + a["xs" + u];
      }

      return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a;
    },
        de = 9;

    for (l = fe.prototype, l.l = l.pr = 0; --de > 0;) {
      l["xn" + de] = 0, l["xs" + de] = "";
    }

    l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function (t, e, i, s, r, n) {
      var a = this,
          o = a.l;
      return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new fe(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
        s: e + i
      }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a);
    };

    var ge = function ge(t, e) {
      e = e || {}, this.p = e.prefix ? W(t) || t : t, h[t] = h[this.p] = this, this.format = e.formatter || ue(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0;
    },
        ve = U._registerComplexSpecialProp = function (t, e, i) {
      "object" != _typeof(e) && (e = {
        parser: i
      });
      var s,
          r,
          n = t.split(","),
          a = e.defaultValue;

      for (i = i || [a], s = 0; n.length > s; s++) {
        e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || a, r = new ge(n[s], e);
      }
    },
        ye = function ye(t) {
      if (!h[t]) {
        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
        ve(t, {
          parser: function parser(t, i, s, r, n, a, l) {
            var _ = o.com.greensock.plugins[e];
            return _ ? (_._cssRegister(), h[s].parse(t, i, s, r, n, a, l)) : (q("Error: " + e + " js file not loaded."), n);
          }
        });
      }
    };

    l = ge.prototype, l.parseComplex = function (t, e, i, s, r, n) {
      var a,
          o,
          h,
          l,
          _,
          u,
          p = this.keyword;

      if (this.multi && (M.test(i) || M.test(e) ? (o = e.replace(M, "|").split("|"), h = i.replace(M, "|").split("|")) : p && (o = [e], h = [i])), h) {
        for (l = h.length > o.length ? h.length : o.length, a = 0; l > a; a++) {
          e = o[a] = o[a] || this.dflt, i = h[a] = h[a] || this.dflt, p && (_ = e.indexOf(p), u = i.indexOf(p), _ !== u && (i = -1 === u ? h : o, i[a] += " " + p));
        }

        e = o.join(", "), i = h.join(", ");
      }

      return me(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n);
    }, l.parse = function (t, e, i, s, n, a) {
      return this.parseComplex(t.style, this.format(Q(t, this.p, r, !1, this.dflt)), this.format(e), n, a);
    }, a.registerSpecialProp = function (t, e, i) {
      ve(t, {
        parser: function parser(t, s, r, n, a, o) {
          var h = new fe(t, r, 0, 0, a, 2, r, !1, i);
          return h.plugin = o, h.setRatio = e(t, s, n._tween, r), h;
        },
        priority: i
      });
    };

    var Te,
        we = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
        xe = W("transform"),
        be = V + "transform",
        Pe = W("transformOrigin"),
        Se = null !== W("perspective"),
        ke = U.Transform = function () {
      this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = a.defaultForce3D !== !1 && Se ? a.defaultForce3D || "auto" : !1;
    },
        Re = window.SVGElement,
        Ae = function Ae(t, e, i) {
      var s,
          r = E.createElementNS("http://www.w3.org/2000/svg", t),
          n = /([a-z])([A-Z])/g;

      for (s in i) {
        r.setAttributeNS(null, s.replace(n, "$1-$2").toLowerCase(), i[s]);
      }

      return e.appendChild(r), r;
    },
        Ce = document.documentElement,
        Oe = function () {
      var t,
          e,
          i,
          s = m || /Android/i.test(Y) && !window.chrome;
      return E.createElementNS && !s && (t = Ae("svg", Ce), e = Ae("rect", t, {
        width: 100,
        height: 50,
        x: 100
      }), i = e.getBoundingClientRect().width, e.style[Pe] = "50% 50%", e.style[xe] = "scaleX(0.5)", s = i === e.getBoundingClientRect().width && !(c && Se), Ce.removeChild(t)), s;
    }(),
        De = function De(t, e, i) {
      var s = t.getBBox();
      e = se(e).split(" "), i.xOrigin = (-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * s.width : parseFloat(e[0])) + s.x, i.yOrigin = (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * s.height : parseFloat(e[1])) + s.y;
    },
        Me = U.getTransform = function (t, e, i, s) {
      if (t._gsTransform && i && !s) return t._gsTransform;

      var n,
          o,
          h,
          l,
          _,
          u,
          p,
          c,
          f,
          m,
          d = i ? t._gsTransform || new ke() : new ke(),
          g = 0 > d.scaleX,
          v = 2e-5,
          y = 1e5,
          T = Se ? parseFloat(Q(t, Pe, e, !1, "0 0 0").split(" ")[2]) || d.zOrigin || 0 : 0,
          w = parseFloat(a.defaultTransformPerspective) || 0;

      if (xe ? o = Q(t, be, e, !0) : t.currentStyle && (o = t.currentStyle.filter.match(O), o = o && 4 === o.length ? [o[0].substr(4), Number(o[2].substr(4)), Number(o[1].substr(4)), o[3].substr(4), d.x || 0, d.y || 0].join(",") : ""), n = !o || "none" === o || "matrix(1, 0, 0, 1, 0, 0)" === o, d.svg = !!(Re && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM)), d.svg && (De(t, Q(t, Pe, r, !1, "50% 50%") + "", d), Te = a.useSVGTransformAttr || Oe, h = t.getAttribute("transform"), n && h && -1 !== h.indexOf("matrix") && (o = h, n = 0)), !n) {
        for (h = (o || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], l = h.length; --l > -1;) {
          _ = Number(h[l]), h[l] = (u = _ - (_ |= 0)) ? (0 | u * y + (0 > u ? -.5 : .5)) / y + _ : _;
        }

        if (16 === h.length) {
          var x,
              b,
              P,
              S,
              k,
              R = h[0],
              A = h[1],
              C = h[2],
              D = h[3],
              M = h[4],
              z = h[5],
              F = h[6],
              E = h[7],
              N = h[8],
              L = h[9],
              X = h[10],
              U = h[12],
              Y = h[13],
              B = h[14],
              j = h[11],
              q = Math.atan2(F, X);
          d.zOrigin && (B = -d.zOrigin, U = N * B - h[12], Y = L * B - h[13], B = X * B + d.zOrigin - h[14]), d.rotationX = q * I, q && (S = Math.cos(-q), k = Math.sin(-q), x = M * S + N * k, b = z * S + L * k, P = F * S + X * k, N = M * -k + N * S, L = z * -k + L * S, X = F * -k + X * S, j = E * -k + j * S, M = x, z = b, F = P), q = Math.atan2(N, X), d.rotationY = q * I, q && (S = Math.cos(-q), k = Math.sin(-q), x = R * S - N * k, b = A * S - L * k, P = C * S - X * k, L = A * k + L * S, X = C * k + X * S, j = D * k + j * S, R = x, A = b, C = P), q = Math.atan2(A, R), d.rotation = q * I, q && (S = Math.cos(-q), k = Math.sin(-q), R = R * S + M * k, b = A * S + z * k, z = A * -k + z * S, F = C * -k + F * S, A = b), d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 && (d.rotationX = d.rotation = 0, d.rotationY += 180), d.scaleX = (0 | Math.sqrt(R * R + A * A) * y + .5) / y, d.scaleY = (0 | Math.sqrt(z * z + L * L) * y + .5) / y, d.scaleZ = (0 | Math.sqrt(F * F + X * X) * y + .5) / y, d.skewX = 0, d.perspective = j ? 1 / (0 > j ? -j : j) : 0, d.x = U, d.y = Y, d.z = B;
        } else if (!(Se && !s && h.length && d.x === h[4] && d.y === h[5] && (d.rotationX || d.rotationY) || void 0 !== d.x && "none" === Q(t, "display", e))) {
          var V = h.length >= 6,
              G = V ? h[0] : 1,
              W = h[1] || 0,
              Z = h[2] || 0,
              $ = V ? h[3] : 1;
          d.x = h[4] || 0, d.y = h[5] || 0, p = Math.sqrt(G * G + W * W), c = Math.sqrt($ * $ + Z * Z), f = G || W ? Math.atan2(W, G) * I : d.rotation || 0, m = Z || $ ? Math.atan2(Z, $) * I + f : d.skewX || 0, Math.abs(m) > 90 && 270 > Math.abs(m) && (g ? (p *= -1, m += 0 >= f ? 180 : -180, f += 0 >= f ? 180 : -180) : (c *= -1, m += 0 >= m ? 180 : -180)), d.scaleX = p, d.scaleY = c, d.rotation = f, d.skewX = m, Se && (d.rotationX = d.rotationY = d.z = 0, d.perspective = w, d.scaleZ = 1);
        }

        d.zOrigin = T;

        for (l in d) {
          v > d[l] && d[l] > -v && (d[l] = 0);
        }
      }

      return i && (t._gsTransform = d), d;
    },
        ze = function ze(t) {
      var e,
          i,
          s = this.data,
          r = -s.rotation * z,
          n = r + s.skewX * z,
          a = 1e5,
          o = (0 | Math.cos(r) * s.scaleX * a) / a,
          h = (0 | Math.sin(r) * s.scaleX * a) / a,
          l = (0 | Math.sin(n) * -s.scaleY * a) / a,
          _ = (0 | Math.cos(n) * s.scaleY * a) / a,
          u = this.t.style,
          p = this.t.currentStyle;

      if (p) {
        i = h, h = -l, l = -i, e = p.filter, u.filter = "";
        var c,
            f,
            d = this.t.offsetWidth,
            g = this.t.offsetHeight,
            v = "absolute" !== p.position,
            y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + h + ", M21=" + l + ", M22=" + _,
            x = s.x + d * s.xPercent / 100,
            b = s.y + g * s.yPercent / 100;

        if (null != s.ox && (c = (s.oxp ? .01 * d * s.ox : s.ox) - d / 2, f = (s.oyp ? .01 * g * s.oy : s.oy) - g / 2, x += c - (c * o + f * h), b += f - (c * l + f * _)), v ? (c = d / 2, f = g / 2, y += ", Dx=" + (c - (c * o + f * h) + x) + ", Dy=" + (f - (c * l + f * _) + b) + ")") : y += ", sizingMethod='auto expand')", u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(D, y) : y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === h && 0 === l && 1 === _ && (v && -1 === y.indexOf("Dx=0, Dy=0") || w.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && u.removeAttribute("filter")), !v) {
          var P,
              S,
              k,
              R = 8 > m ? 1 : -1;

          for (c = s.ieOffsetX || 0, f = s.ieOffsetY || 0, s.ieOffsetX = Math.round((d - ((0 > o ? -o : o) * d + (0 > h ? -h : h) * g)) / 2 + x), s.ieOffsetY = Math.round((g - ((0 > _ ? -_ : _) * g + (0 > l ? -l : l) * d)) / 2 + b), de = 0; 4 > de; de++) {
            S = ee[de], P = p[S], i = -1 !== P.indexOf("px") ? parseFloat(P) : $(this.t, S, parseFloat(P), P.replace(T, "")) || 0, k = i !== s[S] ? 2 > de ? -s.ieOffsetX : -s.ieOffsetY : 2 > de ? c - s.ieOffsetX : f - s.ieOffsetY, u[S] = (s[S] = Math.round(i - k * (0 === de || 2 === de ? 1 : R))) + "px";
          }
        }
      }
    },
        Ie = U.set3DTransformRatio = function (t) {
      var e,
          i,
          s,
          r,
          n,
          a,
          o,
          h,
          l,
          _,
          u,
          p,
          f,
          m,
          d,
          g,
          v,
          y,
          T,
          w,
          x,
          b = this.data,
          P = this.t.style,
          S = b.rotation * z,
          k = b.scaleX,
          R = b.scaleY,
          A = b.scaleZ,
          C = b.x,
          O = b.y,
          D = b.z,
          M = b.perspective;

      if (!(1 !== t && 0 !== t && b.force3D || b.force3D === !0 || b.rotationY || b.rotationX || 1 !== A || M || D)) return Fe.call(this, t), void 0;
      if (c && (m = 1e-4, m > k && k > -m && (k = A = 2e-5), m > R && R > -m && (R = A = 2e-5), !M || b.z || b.rotationX || b.rotationY || (M = 0)), S || b.skewX) d = e = Math.cos(S), g = r = Math.sin(S), b.skewX && (S -= b.skewX * z, d = Math.cos(S), g = Math.sin(S), "simple" === b.skewType && (v = Math.tan(b.skewX * z), v = Math.sqrt(1 + v * v), d *= v, g *= v)), i = -g, n = d;else {
        if (!(b.rotationY || b.rotationX || 1 !== A || M || b.svg)) return P[xe] = (b.xPercent || b.yPercent ? "translate(" + b.xPercent + "%," + b.yPercent + "%) translate3d(" : "translate3d(") + C + "px," + O + "px," + D + "px)" + (1 !== k || 1 !== R ? " scale(" + k + "," + R + ")" : ""), void 0;
        e = n = 1, i = r = 0;
      }
      l = 1, s = a = o = h = _ = u = 0, p = M ? -1 / M : 0, f = b.zOrigin, m = 1e-6, w = ",", x = "0", S = b.rotationY * z, S && (d = Math.cos(S), g = Math.sin(S), o = -g, _ = p * -g, s = e * g, a = r * g, l = d, p *= d, e *= d, r *= d), S = b.rotationX * z, S && (d = Math.cos(S), g = Math.sin(S), v = i * d + s * g, y = n * d + a * g, h = l * g, u = p * g, s = i * -g + s * d, a = n * -g + a * d, l *= d, p *= d, i = v, n = y), 1 !== A && (s *= A, a *= A, l *= A, p *= A), 1 !== R && (i *= R, n *= R, h *= R, u *= R), 1 !== k && (e *= k, r *= k, o *= k, _ *= k), (f || b.svg) && (f && (C += s * -f, O += a * -f, D += l * -f + f), b.svg && (C += b.xOrigin - (b.xOrigin * e + b.yOrigin * i), O += b.yOrigin - (b.xOrigin * r + b.yOrigin * n)), m > C && C > -m && (C = x), m > O && O > -m && (O = x), m > D && D > -m && (D = 0)), T = b.xPercent || b.yPercent ? "translate(" + b.xPercent + "%," + b.yPercent + "%) matrix3d(" : "matrix3d(", T += (m > e && e > -m ? x : e) + w + (m > r && r > -m ? x : r) + w + (m > o && o > -m ? x : o), T += w + (m > _ && _ > -m ? x : _) + w + (m > i && i > -m ? x : i) + w + (m > n && n > -m ? x : n), b.rotationX || b.rotationY ? (T += w + (m > h && h > -m ? x : h) + w + (m > u && u > -m ? x : u) + w + (m > s && s > -m ? x : s), T += w + (m > a && a > -m ? x : a) + w + (m > l && l > -m ? x : l) + w + (m > p && p > -m ? x : p) + w) : T += ",0,0,0,0,1,0,", T += C + w + O + w + D + w + (M ? 1 + -D / M : 1) + ")", P[xe] = T;
    },
        Fe = U.set2DTransformRatio = function (t) {
      var e,
          i,
          s,
          r,
          n,
          a,
          o,
          h,
          l,
          _,
          u,
          p = this.data,
          c = this.t,
          f = c.style,
          m = p.x,
          d = p.y;

      return !(p.rotationX || p.rotationY || p.z || p.force3D === !0 || "auto" === p.force3D && 1 !== t && 0 !== t) || p.svg && Te || !Se ? (r = p.scaleX, n = p.scaleY, p.rotation || p.skewX || p.svg ? (e = p.rotation * z, i = e - p.skewX * z, s = 1e5, a = Math.cos(e) * r, o = Math.sin(e) * r, h = Math.sin(i) * -n, l = Math.cos(i) * n, p.svg && (m += p.xOrigin - (p.xOrigin * a + p.yOrigin * h), d += p.yOrigin - (p.xOrigin * o + p.yOrigin * l), u = 1e-6, u > m && m > -u && (m = 0), u > d && d > -u && (d = 0)), _ = (0 | a * s) / s + "," + (0 | o * s) / s + "," + (0 | h * s) / s + "," + (0 | l * s) / s + "," + m + "," + d + ")", p.svg && Te ? c.setAttribute("transform", "matrix(" + _) : f[xe] = (p.xPercent || p.yPercent ? "translate(" + p.xPercent + "%," + p.yPercent + "%) matrix(" : "matrix(") + _) : f[xe] = (p.xPercent || p.yPercent ? "translate(" + p.xPercent + "%," + p.yPercent + "%) matrix(" : "matrix(") + r + ",0,0," + n + "," + m + "," + d + ")", void 0) : (this.setRatio = Ie, Ie.call(this, t), void 0);
    };

    l = ke.prototype, l.x = l.y = l.z = l.skewX = l.skewY = l.rotation = l.rotationX = l.rotationY = l.zOrigin = l.xPercent = l.yPercent = 0, l.scaleX = l.scaleY = l.scaleZ = 1, ve("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
      parser: function parser(t, e, i, s, n, o, h) {
        if (s._lastParsedTransform === h) return n;
        s._lastParsedTransform = h;

        var l,
            _,
            u,
            p,
            c,
            f,
            m,
            d = s._transform = Me(t, r, !0, h.parseTransform),
            g = t.style,
            v = 1e-6,
            y = we.length,
            T = h,
            w = {};

        if ("string" == typeof T.transform && xe) u = L.style, u[xe] = T.transform, u.display = "block", u.position = "absolute", E.body.appendChild(L), l = Me(L, null, !1), E.body.removeChild(L);else if ("object" == _typeof(T)) {
          if (l = {
            scaleX: ne(null != T.scaleX ? T.scaleX : T.scale, d.scaleX),
            scaleY: ne(null != T.scaleY ? T.scaleY : T.scale, d.scaleY),
            scaleZ: ne(T.scaleZ, d.scaleZ),
            x: ne(T.x, d.x),
            y: ne(T.y, d.y),
            z: ne(T.z, d.z),
            xPercent: ne(T.xPercent, d.xPercent),
            yPercent: ne(T.yPercent, d.yPercent),
            perspective: ne(T.transformPerspective, d.perspective)
          }, m = T.directionalRotation, null != m) if ("object" == _typeof(m)) for (u in m) {
            T[u] = m[u];
          } else T.rotation = m;
          "string" == typeof T.x && -1 !== T.x.indexOf("%") && (l.x = 0, l.xPercent = ne(T.x, d.xPercent)), "string" == typeof T.y && -1 !== T.y.indexOf("%") && (l.y = 0, l.yPercent = ne(T.y, d.yPercent)), l.rotation = ae("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : "rotationZ" in T ? T.rotationZ : d.rotation, d.rotation, "rotation", w), Se && (l.rotationX = ae("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : d.rotationX || 0, d.rotationX, "rotationX", w), l.rotationY = ae("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : d.rotationY || 0, d.rotationY, "rotationY", w)), l.skewX = null == T.skewX ? d.skewX : ae(T.skewX, d.skewX), l.skewY = null == T.skewY ? d.skewY : ae(T.skewY, d.skewY), (_ = l.skewY - d.skewY) && (l.skewX += _, l.rotation += _);
        }

        for (Se && null != T.force3D && (d.force3D = T.force3D, f = !0), d.skewType = T.skewType || d.skewType || a.defaultSkewType, c = d.force3D || d.z || d.rotationX || d.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, c || null == T.scale || (l.scaleZ = 1); --y > -1;) {
          i = we[y], p = l[i] - d[i], (p > v || -v > p || null != T[i] || null != F[i]) && (f = !0, n = new fe(d, i, d[i], p, n), i in w && (n.e = w[i]), n.xs0 = 0, n.plugin = o, s._overwriteProps.push(n.n));
        }

        return p = T.transformOrigin, p && d.svg && (De(t, se(p), l), n = new fe(d, "xOrigin", d.xOrigin, l.xOrigin - d.xOrigin, n, -1, "transformOrigin"), n.b = d.xOrigin, n.e = n.xs0 = l.xOrigin, n = new fe(d, "yOrigin", d.yOrigin, l.yOrigin - d.yOrigin, n, -1, "transformOrigin"), n.b = d.yOrigin, n.e = n.xs0 = l.yOrigin, p = "0px 0px"), (p || Se && c && d.zOrigin) && (xe ? (f = !0, i = Pe, p = (p || Q(t, i, r, !1, "50% 50%")) + "", n = new fe(g, i, 0, 0, n, -1, "transformOrigin"), n.b = g[i], n.plugin = o, Se ? (u = d.zOrigin, p = p.split(" "), d.zOrigin = (p.length > 2 && (0 === u || "0px" !== p[2]) ? parseFloat(p[2]) : u) || 0, n.xs0 = n.e = p[0] + " " + (p[1] || "50%") + " 0px", n = new fe(d, "zOrigin", 0, 0, n, -1, n.n), n.b = u, n.xs0 = n.e = d.zOrigin) : n.xs0 = n.e = p) : se(p + "", d)), f && (s._transformType = d.svg && Te || !c && 3 !== this._transformType ? 2 : 3), n;
      },
      prefix: !0
    }), ve("boxShadow", {
      defaultValue: "0px 0px 0px 0px #999",
      prefix: !0,
      color: !0,
      multi: !0,
      keyword: "inset"
    }), ve("borderRadius", {
      defaultValue: "0px",
      parser: function parser(t, e, i, n, a) {
        e = this.format(e);

        var o,
            h,
            l,
            _,
            u,
            p,
            c,
            f,
            m,
            d,
            g,
            v,
            y,
            T,
            w,
            x,
            b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
            P = t.style;

        for (m = parseFloat(t.offsetWidth), d = parseFloat(t.offsetHeight), o = e.split(" "), h = 0; b.length > h; h++) {
          this.p.indexOf("border") && (b[h] = W(b[h])), u = _ = Q(t, b[h], r, !1, "0px"), -1 !== u.indexOf(" ") && (_ = u.split(" "), u = _[0], _ = _[1]), p = l = o[h], c = parseFloat(u), v = u.substr((c + "").length), y = "=" === p.charAt(1), y ? (f = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), f *= parseFloat(p), g = p.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(p), g = p.substr((f + "").length)), "" === g && (g = s[i] || v), g !== v && (T = $(t, "borderLeft", c, v), w = $(t, "borderTop", c, v), "%" === g ? (u = 100 * (T / m) + "%", _ = 100 * (w / d) + "%") : "em" === g ? (x = $(t, "borderLeft", 1, "em"), u = T / x + "em", _ = w / x + "em") : (u = T + "px", _ = w + "px"), y && (p = parseFloat(u) + f + g, l = parseFloat(_) + f + g)), a = me(P, b[h], u + " " + _, p + " " + l, !1, "0px", a);
        }

        return a;
      },
      prefix: !0,
      formatter: ue("0px 0px 0px 0px", !1, !0)
    }), ve("backgroundPosition", {
      defaultValue: "0 0",
      parser: function parser(t, e, i, s, n, a) {
        var o,
            h,
            l,
            _,
            u,
            p,
            c = "background-position",
            f = r || Z(t, null),
            d = this.format((f ? m ? f.getPropertyValue(c + "-x") + " " + f.getPropertyValue(c + "-y") : f.getPropertyValue(c) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
            g = this.format(e);

        if (-1 !== d.indexOf("%") != (-1 !== g.indexOf("%")) && (p = Q(t, "backgroundImage").replace(R, ""), p && "none" !== p)) {
          for (o = d.split(" "), h = g.split(" "), X.setAttribute("src", p), l = 2; --l > -1;) {
            d = o[l], _ = -1 !== d.indexOf("%"), _ !== (-1 !== h[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - X.width : t.offsetHeight - X.height, o[l] = _ ? parseFloat(d) / 100 * u + "px" : 100 * (parseFloat(d) / u) + "%");
          }

          d = o.join(" ");
        }

        return this.parseComplex(t.style, d, g, n, a);
      },
      formatter: se
    }), ve("backgroundSize", {
      defaultValue: "0 0",
      formatter: se
    }), ve("perspective", {
      defaultValue: "0px",
      prefix: !0
    }), ve("perspectiveOrigin", {
      defaultValue: "50% 50%",
      prefix: !0
    }), ve("transformStyle", {
      prefix: !0
    }), ve("backfaceVisibility", {
      prefix: !0
    }), ve("userSelect", {
      prefix: !0
    }), ve("margin", {
      parser: pe("marginTop,marginRight,marginBottom,marginLeft")
    }), ve("padding", {
      parser: pe("paddingTop,paddingRight,paddingBottom,paddingLeft")
    }), ve("clip", {
      defaultValue: "rect(0px,0px,0px,0px)",
      parser: function parser(t, e, i, s, n, a) {
        var o, h, l;
        return 9 > m ? (h = t.currentStyle, l = 8 > m ? " " : ",", o = "rect(" + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")", e = this.format(e).split(",").join(l)) : (o = this.format(Q(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a);
      }
    }), ve("textShadow", {
      defaultValue: "0px 0px 0px #999",
      color: !0,
      multi: !0
    }), ve("autoRound,strictUnits", {
      parser: function parser(t, e, i, s, r) {
        return r;
      }
    }), ve("border", {
      defaultValue: "0px solid #000",
      parser: function parser(t, e, i, s, n, a) {
        return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", r, !1, "0px") + " " + Q(t, "borderTopStyle", r, !1, "solid") + " " + Q(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a);
      },
      color: !0,
      formatter: function formatter(t) {
        var e = t.split(" ");
        return e[0] + " " + (e[1] || "solid") + " " + (t.match(_e) || ["#000"])[0];
      }
    }), ve("borderWidth", {
      parser: pe("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
    }), ve("float,cssFloat,styleFloat", {
      parser: function parser(t, e, i, s, r) {
        var n = t.style,
            a = "cssFloat" in n ? "cssFloat" : "styleFloat";
        return new fe(n, a, 0, 0, r, -1, i, !1, 0, n[a], e);
      }
    });

    var Ee = function Ee(t) {
      var e,
          i = this.t,
          s = i.filter || Q(this.data, "filter") || "",
          r = 0 | this.s + this.c * t;
      100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = s.replace(b, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(w, "opacity=" + r));
    };

    ve("opacity,alpha,autoAlpha", {
      defaultValue: "1",
      parser: function parser(t, e, i, s, n, a) {
        var o = parseFloat(Q(t, "opacity", r, !1, "1")),
            h = t.style,
            l = "autoAlpha" === i;
        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), l && 1 === o && "hidden" === Q(t, "visibility", r) && 0 !== e && (o = 0), B ? n = new fe(h, "opacity", o, e - o, n) : (n = new fe(h, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = l ? 1 : 0, h.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Ee), l && (n = new fe(h, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", s._overwriteProps.push(n.n), s._overwriteProps.push(i)), n;
      }
    });

    var Ne = function Ne(t, e) {
      e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e));
    },
        Le = function Le(t) {
      if (this.t._gsClassPT = this, 1 === t || 0 === t) {
        this.t.setAttribute("class", 0 === t ? this.b : this.e);

        for (var e = this.data, i = this.t.style; e;) {
          e.v ? i[e.p] = e.v : Ne(i, e.p), e = e._next;
        }

        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null);
      } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
    };

    ve("className", {
      parser: function parser(t, e, s, n, a, o, h) {
        var l,
            _,
            u,
            p,
            c,
            f = t.getAttribute("class") || "",
            m = t.style.cssText;

        if (a = n._classNamePT = new fe(t, s, 0, 0, a, 2), a.setRatio = Le, a.pr = -11, i = !0, a.b = f, _ = K(t, r), u = t._gsClassPT) {
          for (p = {}, c = u.data; c;) {
            p[c.p] = 1, c = c._next;
          }

          u.setRatio(1);
        }

        return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : f.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), n._tween._duration && (t.setAttribute("class", a.e), l = J(t, _, K(t), h, p), t.setAttribute("class", f), a.data = l.firstMPT, t.style.cssText = m, a = a.xfirst = n.parse(t, l.difs, a, o)), a;
      }
    });

    var Xe = function Xe(t) {
      if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
        var e,
            i,
            s,
            r,
            n = this.t.style,
            a = h.transform.parse;
        if ("all" === this.e) n.cssText = "", r = !0;else for (e = this.e.split(" ").join("").split(","), s = e.length; --s > -1;) {
          i = e[s], h[i] && (h[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Pe : h[i].p), Ne(n, i);
        }
        r && (Ne(n, xe), this.t._gsTransform && delete this.t._gsTransform);
      }
    };

    for (ve("clearProps", {
      parser: function parser(t, e, s, r, n) {
        return n = new fe(t, s, 0, 0, n, 2), n.setRatio = Xe, n.e = e, n.pr = -10, n.data = r._tween, i = !0, n;
      }
    }), l = "bezier,throwProps,physicsProps,physics2D".split(","), de = l.length; de--;) {
      ye(l[de]);
    }

    l = a.prototype, l._firstPT = l._lastParsedTransform = l._transform = null, l._onInitTween = function (t, e, o) {
      if (!t.nodeType) return !1;
      this._target = t, this._tween = o, this._vars = e, _ = e.autoRound, i = !1, s = e.suffixMap || a.suffixMap, r = Z(t, ""), n = this._overwriteProps;
      var h,
          l,
          c,
          m,
          d,
          g,
          v,
          y,
          T,
          w = t.style;

      if (u && "" === w.zIndex && (h = Q(t, "zIndex", r), ("auto" === h || "" === h) && this._addLazySet(w, "zIndex", 0)), "string" == typeof e && (m = w.cssText, h = K(t, r), w.cssText = m + ";" + e, h = J(t, h, K(t)).difs, !B && x.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, w.cssText = m), this._firstPT = l = this.parse(t, e, null), this._transformType) {
        for (T = 3 === this._transformType, xe ? p && (u = !0, "" === w.zIndex && (v = Q(t, "zIndex", r), ("auto" === v || "" === v) && this._addLazySet(w, "zIndex", 0)), f && this._addLazySet(w, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (T ? "visible" : "hidden"))) : w.zoom = 1, c = l; c && c._next;) {
          c = c._next;
        }

        y = new fe(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, c), y.setRatio = T && Se ? Ie : xe ? Fe : ze, y.data = this._transform || Me(t, r, !0), n.pop();
      }

      if (i) {
        for (; l;) {
          for (g = l._next, c = m; c && c.pr > l.pr;) {
            c = c._next;
          }

          (l._prev = c ? c._prev : d) ? l._prev._next = l : m = l, (l._next = c) ? c._prev = l : d = l, l = g;
        }

        this._firstPT = m;
      }

      return !0;
    }, l.parse = function (t, e, i, n) {
      var a,
          o,
          l,
          u,
          p,
          c,
          f,
          m,
          d,
          g,
          v = t.style;

      for (a in e) {
        c = e[a], o = h[a], o ? i = o.parse(t, c, a, this, i, n, e) : (p = Q(t, a, r) + "", d = "string" == typeof c, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || d && P.test(c) ? (d || (c = le(c), c = (c.length > 3 ? "rgba(" : "rgb(") + c.join(",") + ")"), i = me(v, a, p, c, !0, "transparent", i, 0, n)) : !d || -1 === c.indexOf(" ") && -1 === c.indexOf(",") ? (l = parseFloat(p), f = l || 0 === l ? p.substr((l + "").length) : "", ("" === p || "auto" === p) && ("width" === a || "height" === a ? (l = ie(t, a, r), f = "px") : "left" === a || "top" === a ? (l = H(t, a, r), f = "px") : (l = "opacity" !== a ? 0 : 1, f = "")), g = d && "=" === c.charAt(1), g ? (u = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), u *= parseFloat(c), m = c.replace(T, "")) : (u = parseFloat(c), m = d ? c.replace(T, "") : ""), "" === m && (m = a in s ? s[a] : f), c = u || 0 === u ? (g ? u + l : u) + m : e[a], f !== m && "" !== m && (u || 0 === u) && l && (l = $(t, a, l, f), "%" === m ? (l /= $(t, a, 100, "%") / 100, e.strictUnits !== !0 && (p = l + "%")) : "em" === m ? l /= $(t, a, 1, "em") : "px" !== m && (u = $(t, a, u, m), m = "px"), g && (u || 0 === u) && (c = u + l + m)), g && (u += l), !l && 0 !== l || !u && 0 !== u ? void 0 !== v[a] && (c || "NaN" != c + "" && null != c) ? (i = new fe(v, a, u || l || 0, 0, i, -1, a, !1, 0, p, c), i.xs0 = "none" !== c || "display" !== a && -1 === a.indexOf("Style") ? c : p) : q("invalid " + a + " tween value: " + e[a]) : (i = new fe(v, a, l, u - l, i, 0, a, _ !== !1 && ("px" === m || "zIndex" === a), 0, p, c), i.xs0 = m)) : i = me(v, a, p, c, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
      }

      return i;
    }, l.setRatio = function (t) {
      var e,
          i,
          s,
          r = this._firstPT,
          n = 1e-6;
      if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time) {
        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6) for (; r;) {
          if (e = r.c * t + r.s, r.r ? e = Math.round(e) : n > e && e > -n && (e = 0), r.type) {
            if (1 === r.type) {
              if (s = r.l, 2 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;else {
                for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) {
                  i += r["xn" + s] + r["xs" + (s + 1)];
                }

                r.t[r.p] = i;
              }
            } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
          } else r.t[r.p] = e + r.xs0;
          r = r._next;
        } else for (; r;) {
          2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
        }
      } else for (; r;) {
        2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next;
      }
    }, l._enableTransforms = function (t) {
      this._transform = this._transform || Me(this._target, r, !0), this._transformType = this._transform.svg && Te || !t && 3 !== this._transformType ? 2 : 3;
    };

    var Ue = function Ue() {
      this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0);
    };

    l._addLazySet = function (t, e, i) {
      var s = this._firstPT = new fe(t, e, 0, 0, this._firstPT, 2);
      s.e = i, s.setRatio = Ue, s.data = this;
    }, l._linkCSSP = function (t, e, i, s) {
      return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t;
    }, l._kill = function (e) {
      var i,
          s,
          r,
          n = e;

      if (e.autoAlpha || e.alpha) {
        n = {};

        for (s in e) {
          n[s] = e[s];
        }

        n.opacity = 1, n.autoAlpha && (n.visibility = 1);
      }

      return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, n);
    };

    var Ye = function Ye(t, e, i) {
      var s, r, n, a;
      if (t.slice) for (r = t.length; --r > -1;) {
        Ye(t[r], e, i);
      } else for (s = t.childNodes, r = s.length; --r > -1;) {
        n = s[r], a = n.type, n.style && (e.push(K(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || Ye(n, e, i);
      }
    };

    return a.cascadeTo = function (t, i, s) {
      var r,
          n,
          a,
          o = e.to(t, i, s),
          h = [o],
          l = [],
          _ = [],
          u = [],
          p = e._internals.reservedProps;

      for (t = o._targets || o.target, Ye(t, l, u), o.render(i, !0), Ye(t, _), o.render(0, !0), o._enabled(!0), r = u.length; --r > -1;) {
        if (n = J(u[r], l[r], _[r]), n.firstMPT) {
          n = n.difs;

          for (a in s) {
            p[a] && (n[a] = s[a]);
          }

          h.push(e.to(u[r], i, n));
        }
      }

      return h;
    }, t.activate([a]), a;
  }, !0), function () {
    var t = _gsScope._gsDefine.plugin({
      propName: "roundProps",
      priority: -1,
      API: 2,
      init: function init(t, e, i) {
        return this._tween = i, !0;
      }
    }),
        e = t.prototype;

    e._onInitAllProps = function () {
      for (var t, e, i, s = this._tween, r = s.vars.roundProps instanceof Array ? s.vars.roundProps : s.vars.roundProps.split(","), n = r.length, a = {}, o = s._propLookup.roundProps; --n > -1;) {
        a[r[n]] = 1;
      }

      for (n = r.length; --n > -1;) {
        for (t = r[n], e = s._firstPT; e;) {
          i = e._next, e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : s._firstPT === e && (s._firstPT = i), e._next = e._prev = null, s._propLookup[t] = o), e = i;
        }
      }

      return !1;
    }, e._add = function (t, e, i, s) {
      this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e);
    };
  }(), _gsScope._gsDefine.plugin({
    propName: "attr",
    API: 2,
    version: "0.3.3",
    init: function init(t, e) {
      var i, s, r;
      if ("function" != typeof t.setAttribute) return !1;
      this._target = t, this._proxy = {}, this._start = {}, this._end = {};

      for (i in e) {
        this._start[i] = this._proxy[i] = s = t.getAttribute(i), r = this._addTween(this._proxy, i, parseFloat(s), e[i], i), this._end[i] = r ? r.s + r.c : e[i], this._overwriteProps.push(i);
      }

      return !0;
    },
    set: function set(t) {
      this._super.setRatio.call(this, t);

      for (var e, i = this._overwriteProps, s = i.length, r = 1 === t ? this._end : t ? this._proxy : this._start; --s > -1;) {
        e = i[s], this._target.setAttribute(e, r[e] + "");
      }
    }
  }), _gsScope._gsDefine.plugin({
    propName: "directionalRotation",
    version: "0.2.1",
    API: 2,
    init: function init(t, e) {
      "object" != _typeof(e) && (e = {
        rotation: e
      }), this.finals = {};
      var i,
          s,
          r,
          n,
          a,
          o,
          h = e.useRadians === !0 ? 2 * Math.PI : 360,
          l = 1e-6;

      for (i in e) {
        "useRadians" !== i && (o = (e[i] + "").split("_"), s = o[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), n = this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, a = n - r, o.length && (s = o.join("_"), -1 !== s.indexOf("short") && (a %= h, a !== a % (h / 2) && (a = 0 > a ? a + h : a - h)), -1 !== s.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * h) % h - (0 | a / h) * h : -1 !== s.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * h) % h - (0 | a / h) * h)), (a > l || -l > a) && (this._addTween(t, i, r, r + a, i), this._overwriteProps.push(i)));
      }

      return !0;
    },
    set: function set(t) {
      var e;
      if (1 !== t) this._super.setRatio.call(this, t);else for (e = this._firstPT; e;) {
        e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next;
      }
    }
  })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (t) {
    var e,
        i,
        s,
        r = _gsScope.GreenSockGlobals || _gsScope,
        n = r.com.greensock,
        a = 2 * Math.PI,
        o = Math.PI / 2,
        h = n._class,
        l = function l(e, i) {
      var s = h("easing." + e, function () {}, !0),
          r = s.prototype = new t();
      return r.constructor = s, r.getRatio = i, s;
    },
        _ = t.register || function () {},
        u = function u(t, e, i, s) {
      var r = h("easing." + t, {
        easeOut: new e(),
        easeIn: new i(),
        easeInOut: new s()
      }, !0);
      return _(r, t), r;
    },
        p = function p(t, e, i) {
      this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t);
    },
        c = function c(e, i) {
      var s = h("easing." + e, function (t) {
        this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1;
      }, !0),
          r = s.prototype = new t();
      return r.constructor = s, r.getRatio = i, r.config = function (t) {
        return new s(t);
      }, s;
    },
        f = u("Back", c("BackOut", function (t) {
      return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
    }), c("BackIn", function (t) {
      return t * t * ((this._p1 + 1) * t - this._p1);
    }), c("BackInOut", function (t) {
      return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
    })),
        m = h("easing.SlowMo", function (t, e, i) {
      e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0;
    }, !0),
        d = m.prototype = new t();

    return d.constructor = m, d.getRatio = function (t) {
      var e = t + (.5 - t) * this._p;
      return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e;
    }, m.ease = new m(.7, .7), d.config = m.config = function (t, e, i) {
      return new m(t, e, i);
    }, e = h("easing.SteppedEase", function (t) {
      t = t || 1, this._p1 = 1 / t, this._p2 = t + 1;
    }, !0), d = e.prototype = new t(), d.constructor = e, d.getRatio = function (t) {
      return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1;
    }, d.config = e.config = function (t) {
      return new e(t);
    }, i = h("easing.RoughEase", function (e) {
      e = e || {};

      for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), c = u, f = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --c > -1;) {
        i = f ? Math.random() : 1 / u * c, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), f ? s += Math.random() * r - .5 * r : c % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = {
          x: i,
          y: s
        };
      }

      for (l.sort(function (t, e) {
        return t.x - e.x;
      }), o = new p(1, 1, null), c = u; --c > -1;) {
        a = l[c], o = new p(a.x, a.y, o);
      }

      this._prev = new p(0, 0, 0 !== o.t ? o : o.next);
    }, !0), d = i.prototype = new t(), d.constructor = i, d.getRatio = function (t) {
      var e = this._prev;

      if (t > e.t) {
        for (; e.next && t >= e.t;) {
          e = e.next;
        }

        e = e.prev;
      } else for (; e.prev && e.t >= t;) {
        e = e.prev;
      }

      return this._prev = e, e.v + (t - e.t) / e.gap * e.c;
    }, d.config = function (t) {
      return new i(t);
    }, i.ease = new i(), u("Bounce", l("BounceOut", function (t) {
      return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
    }), l("BounceIn", function (t) {
      return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375);
    }), l("BounceInOut", function (t) {
      var e = .5 > t;
      return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5;
    })), u("Circ", l("CircOut", function (t) {
      return Math.sqrt(1 - (t -= 1) * t);
    }), l("CircIn", function (t) {
      return -(Math.sqrt(1 - t * t) - 1);
    }), l("CircInOut", function (t) {
      return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    })), s = function (_s) {
      function s(_x, _x2, _x3) {
        return _s.apply(this, arguments);
      }

      s.toString = function () {
        return _s.toString();
      };

      return s;
    }(function (e, i, s) {
      var r = h("easing." + e, function (t, e) {
        this._p1 = t || 1, this._p2 = e || s, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0);
      }, !0),
          n = r.prototype = new t();
      return n.constructor = r, n.getRatio = i, n.config = function (t, e) {
        return new r(t, e);
      }, r;
    }), u("Elastic", s("ElasticOut", function (t) {
      return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1;
    }, .3), s("ElasticIn", function (t) {
      return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2));
    }, .3), s("ElasticInOut", function (t) {
      return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1;
    }, .45)), u("Expo", l("ExpoOut", function (t) {
      return 1 - Math.pow(2, -10 * t);
    }), l("ExpoIn", function (t) {
      return Math.pow(2, 10 * (t - 1)) - .001;
    }), l("ExpoInOut", function (t) {
      return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)));
    })), u("Sine", l("SineOut", function (t) {
      return Math.sin(t * o);
    }), l("SineIn", function (t) {
      return -Math.cos(t * o) + 1;
    }), l("SineInOut", function (t) {
      return -.5 * (Math.cos(Math.PI * t) - 1);
    })), h("easing.EaseLookup", {
      find: function find(e) {
        return t.map[e];
      }
    }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), f;
  }, !0);
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (t, e) {
  "use strict";

  var i = t.GreenSockGlobals = t.GreenSockGlobals || t;

  if (!i.TweenLite) {
    var s,
        r,
        n,
        a,
        o,
        h = function h(t) {
      var e,
          s = t.split("."),
          r = i;

      for (e = 0; s.length > e; e++) {
        r[s[e]] = r = r[s[e]] || {};
      }

      return r;
    },
        l = h("com.greensock"),
        _ = 1e-10,
        u = function u(t) {
      var e,
          i = [],
          s = t.length;

      for (e = 0; e !== s; i.push(t[e++])) {
        ;
      }

      return i;
    },
        p = function p() {},
        c = function () {
      var t = Object.prototype.toString,
          e = t.call([]);
      return function (i) {
        return null != i && (i instanceof Array || "object" == _typeof(i) && !!i.push && t.call(i) === e);
      };
    }(),
        f = {},
        m = function m(s, r, n, a) {
      this.sc = f[s] ? f[s].sc : [], f[s] = this, this.gsClass = null, this.func = n;
      var o = [];
      this.check = function (l) {
        for (var _, u, p, c, d = r.length, g = d; --d > -1;) {
          (_ = f[r[d]] || new m(r[d], [])).gsClass ? (o[d] = _.gsClass, g--) : l && _.sc.push(this);
        }

        if (0 === g && n) for (u = ("com.greensock." + s).split("."), p = u.pop(), c = h(u.join("."))[p] = this.gsClass = n.apply(n, o), a && (i[p] = c, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function () {
          return c;
        }) : s === e && "undefined" != typeof module && module.exports && (module.exports = c)), d = 0; this.sc.length > d; d++) {
          this.sc[d].check();
        }
      }, this.check(!0);
    },
        d = t._gsDefine = function (t, e, i, s) {
      return new m(t, e, i, s);
    },
        g = l._class = function (t, e, i) {
      return e = e || function () {}, d(t, [], function () {
        return e;
      }, i), e;
    };

    d.globals = i;

    var v = [0, 0, 1, 1],
        y = [],
        T = g("easing.Ease", function (t, e, i, s) {
      this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? v.concat(e) : v;
    }, !0),
        w = T.map = {},
        x = T.register = function (t, e, i, s) {
      for (var r, n, a, o, h = e.split(","), _ = h.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;) {
        for (n = h[_], r = s ? g("easing." + n, null, !0) : l.easing[n] || {}, a = u.length; --a > -1;) {
          o = u[a], w[n + "." + o] = w[o + n] = r[o] = t.getRatio ? t : t[o] || new t();
        }
      }
    };

    for (n = T.prototype, n._calcEnd = !1, n.getRatio = function (t) {
      if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
      var e = this._type,
          i = this._power,
          s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
      return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2;
    }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = s.length; --r > -1;) {
      n = s[r] + ",Power" + r, x(new T(null, null, 1, r), n, "easeOut", !0), x(new T(null, null, 2, r), n, "easeIn" + (0 === r ? ",easeNone" : "")), x(new T(null, null, 3, r), n, "easeInOut");
    }

    w.linear = l.easing.Linear.easeIn, w.swing = l.easing.Quad.easeInOut;
    var b = g("events.EventDispatcher", function (t) {
      this._listeners = {}, this._eventTarget = t || this;
    });
    n = b.prototype, n.addEventListener = function (t, e, i, s, r) {
      r = r || 0;
      var n,
          h,
          l = this._listeners[t],
          _ = 0;

      for (null == l && (this._listeners[t] = l = []), h = l.length; --h > -1;) {
        n = l[h], n.c === e && n.s === i ? l.splice(h, 1) : 0 === _ && r > n.pr && (_ = h + 1);
      }

      l.splice(_, 0, {
        c: e,
        s: i,
        up: s,
        pr: r
      }), this !== a || o || a.wake();
    }, n.removeEventListener = function (t, e) {
      var i,
          s = this._listeners[t];
      if (s) for (i = s.length; --i > -1;) {
        if (s[i].c === e) return s.splice(i, 1), void 0;
      }
    }, n.dispatchEvent = function (t) {
      var e,
          i,
          s,
          r = this._listeners[t];
      if (r) for (e = r.length, i = this._eventTarget; --e > -1;) {
        s = r[e], s && (s.up ? s.c.call(s.s || i, {
          type: t,
          target: i
        }) : s.c.call(s.s || i));
      }
    };

    var P = t.requestAnimationFrame,
        S = t.cancelAnimationFrame,
        k = Date.now || function () {
      return new Date().getTime();
    },
        R = k();

    for (s = ["ms", "moz", "webkit", "o"], r = s.length; --r > -1 && !P;) {
      P = t[s[r] + "RequestAnimationFrame"], S = t[s[r] + "CancelAnimationFrame"] || t[s[r] + "CancelRequestAnimationFrame"];
    }

    g("Ticker", function (t, e) {
      var i,
          s,
          r,
          n,
          h,
          l = this,
          u = k(),
          c = e !== !1 && P,
          f = 500,
          m = 33,
          d = "tick",
          g = function g(t) {
        var e,
            a,
            o = k() - R;
        o > f && (u += o - m), R += o, l.time = (R - u) / 1e3, e = l.time - h, (!i || e > 0 || t === !0) && (l.frame++, h += e + (e >= n ? .004 : n - e), a = !0), t !== !0 && (r = s(g)), a && l.dispatchEvent(d);
      };

      b.call(l), l.time = l.frame = 0, l.tick = function () {
        g(!0);
      }, l.lagSmoothing = function (t, e) {
        f = t || 1 / _, m = Math.min(e, f, 0);
      }, l.sleep = function () {
        null != r && (c && S ? S(r) : clearTimeout(r), s = p, r = null, l === a && (o = !1));
      }, l.wake = function () {
        null !== r ? l.sleep() : l.frame > 10 && (R = k() - f + 5), s = 0 === i ? p : c && P ? P : function (t) {
          return setTimeout(t, 0 | 1e3 * (h - l.time) + 1);
        }, l === a && (o = !0), g(2);
      }, l.fps = function (t) {
        return arguments.length ? (i = t, n = 1 / (i || 60), h = this.time + n, l.wake(), void 0) : i;
      }, l.useRAF = function (t) {
        return arguments.length ? (l.sleep(), c = t, l.fps(i), void 0) : c;
      }, l.fps(t), setTimeout(function () {
        c && (!r || 5 > l.frame) && l.useRAF(!1);
      }, 1500);
    }), n = l.Ticker.prototype = new l.events.EventDispatcher(), n.constructor = l.Ticker;
    var A = g("core.Animation", function (t, e) {
      if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, j) {
        o || a.wake();
        var i = this.vars.useFrames ? B : j;
        i.add(this, i._time), this.vars.paused && this.paused(!0);
      }
    });
    a = A.ticker = new l.Ticker(), n = A.prototype, n._dirty = n._gc = n._initted = n._paused = !1, n._totalTime = n._time = 0, n._rawPrevTime = -1, n._next = n._last = n._onUpdate = n._timeline = n.timeline = null, n._paused = !1;

    var C = function C() {
      o && k() - R > 2e3 && a.wake(), setTimeout(C, 2e3);
    };

    C(), n.play = function (t, e) {
      return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
    }, n.pause = function (t, e) {
      return null != t && this.seek(t, e), this.paused(!0);
    }, n.resume = function (t, e) {
      return null != t && this.seek(t, e), this.paused(!1);
    }, n.seek = function (t, e) {
      return this.totalTime(Number(t), e !== !1);
    }, n.restart = function (t, e) {
      return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0);
    }, n.reverse = function (t, e) {
      return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
    }, n.render = function () {}, n.invalidate = function () {
      return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this;
    }, n.isActive = function () {
      var t,
          e = this._timeline,
          i = this._startTime;
      return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t;
    }, n._enabled = function (t, e) {
      return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1;
    }, n._kill = function () {
      return this._enabled(!1, !1);
    }, n.kill = function (t, e) {
      return this._kill(t, e), this;
    }, n._uncache = function (t) {
      for (var e = t ? this : this.timeline; e;) {
        e._dirty = !0, e = e.timeline;
      }

      return this;
    }, n._swapSelfInParams = function (t) {
      for (var e = t.length, i = t.concat(); --e > -1;) {
        "{self}" === t[e] && (i[e] = this);
      }

      return i;
    }, n.eventCallback = function (t, e, i, s) {
      if ("on" === (t || "").substr(0, 2)) {
        var r = this.vars;
        if (1 === arguments.length) return r[t];
        null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = c(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e);
      }

      return this;
    }, n.delay = function (t) {
      return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay;
    }, n.duration = function (t) {
      return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration);
    }, n.totalDuration = function (t) {
      return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration;
    }, n.time = function (t, e) {
      return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time;
    }, n.totalTime = function (t, e, i) {
      if (o || a.wake(), !arguments.length) return this._totalTime;

      if (this._timeline) {
        if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
          this._dirty && this.totalDuration();
          var s = this._totalDuration,
              r = this._timeline;
          if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline) for (; r._timeline;) {
            r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline;
          }
        }

        this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), I.length && q());
      }

      return this;
    }, n.progress = n.totalProgress = function (t, e) {
      return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration();
    }, n.startTime = function (t) {
      return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime;
    }, n.endTime = function (t) {
      return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale;
    }, n.timeScale = function (t) {
      if (!arguments.length) return this._timeScale;

      if (t = t || _, this._timeline && this._timeline.smoothChildTiming) {
        var e = this._pauseTime,
            i = e || 0 === e ? e : this._timeline.totalTime();
        this._startTime = i - (i - this._startTime) * this._timeScale / t;
      }

      return this._timeScale = t, this._uncache(!1);
    }, n.reversed = function (t) {
      return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed;
    }, n.paused = function (t) {
      if (!arguments.length) return this._paused;

      if (t != this._paused && this._timeline) {
        o || t || a.wake();
        var e = this._timeline,
            i = e.rawTime(),
            s = i - this._pauseTime;
        !t && e.smoothChildTiming && (this._startTime += s, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== s && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0);
      }

      return this._gc && !t && this._enabled(!0, !1), this;
    };
    var O = g("core.SimpleTimeline", function (t) {
      A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0;
    });
    n = O.prototype = new A(), n.constructor = O, n.kill()._gc = !1, n._first = n._last = n._recent = null, n._sortChildren = !1, n.add = n.insert = function (t, e) {
      var i, s;
      if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren) for (s = t._startTime; i && i._startTime > s;) {
        i = i._prev;
      }
      return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this;
    }, n._remove = function (t, e) {
      return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this;
    }, n.render = function (t, e, i) {
      var s,
          r = this._first;

      for (this._totalTime = this._time = this._rawPrevTime = t; r;) {
        s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s;
      }
    }, n.rawTime = function () {
      return o || a.wake(), this._totalTime;
    };

    var D = g("TweenLite", function (e, i, s) {
      if (A.call(this, i, s), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";
      this.target = e = "string" != typeof e ? e : D.selector(e) || e;
      var r,
          n,
          a,
          o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
          h = this.vars.overwrite;
      if (this._overwrite = h = null == h ? Y[D.defaultOverwrite] : "number" == typeof h ? h >> 0 : Y[h], (o || e instanceof Array || e.push && c(e)) && "number" != typeof e[0]) for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++) {
        n = a[r], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(u(n))) : (this._siblings[r] = V(n, this, !1), 1 === h && this._siblings[r].length > 1 && W(n, this, null, 1, this._siblings[r])) : (n = a[r--] = D.selector(n), "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1);
      } else this._propLookup = {}, this._siblings = V(e, this, !1), 1 === h && this._siblings.length > 1 && W(e, this, null, 1, this._siblings);
      (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -_, this.render(-this._delay));
    }, !0),
        M = function M(e) {
      return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType);
    },
        z = function z(t, e) {
      var i,
          s = {};

      for (i in t) {
        U[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!N[i] || N[i] && N[i]._autoCSS) || (s[i] = t[i], delete t[i]);
      }

      t.css = s;
    };

    n = D.prototype = new A(), n.constructor = D, n.kill()._gc = !1, n.ratio = 0, n._firstPT = n._targets = n._overwrittenProps = n._startAt = null, n._notifyPluginsOfEnabled = n._lazy = !1, D.version = "1.15.1", D.defaultEase = n._ease = new T(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = a, D.autoSleep = !0, D.lagSmoothing = function (t, e) {
      a.lagSmoothing(t, e);
    }, D.selector = t.$ || t.jQuery || function (e) {
      var i = t.$ || t.jQuery;
      return i ? (D.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e);
    };

    var I = [],
        F = {},
        E = D._internals = {
      isArray: c,
      isSelector: M,
      lazyTweens: I
    },
        N = D._plugins = {},
        L = E.tweenLookup = {},
        X = 0,
        U = E.reservedProps = {
      ease: 1,
      delay: 1,
      overwrite: 1,
      onComplete: 1,
      onCompleteParams: 1,
      onCompleteScope: 1,
      useFrames: 1,
      runBackwards: 1,
      startAt: 1,
      onUpdate: 1,
      onUpdateParams: 1,
      onUpdateScope: 1,
      onStart: 1,
      onStartParams: 1,
      onStartScope: 1,
      onReverseComplete: 1,
      onReverseCompleteParams: 1,
      onReverseCompleteScope: 1,
      onRepeat: 1,
      onRepeatParams: 1,
      onRepeatScope: 1,
      easeParams: 1,
      yoyo: 1,
      immediateRender: 1,
      repeat: 1,
      repeatDelay: 1,
      data: 1,
      paused: 1,
      reversed: 1,
      autoCSS: 1,
      lazy: 1,
      onOverwrite: 1
    },
        Y = {
      none: 0,
      all: 1,
      auto: 2,
      concurrent: 3,
      allOnStart: 4,
      preexisting: 5,
      "true": 1,
      "false": 0
    },
        B = A._rootFramesTimeline = new O(),
        j = A._rootTimeline = new O(),
        q = E.lazyRender = function () {
      var t,
          e = I.length;

      for (F = {}; --e > -1;) {
        t = I[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
      }

      I.length = 0;
    };

    j._startTime = a.time, B._startTime = a.frame, j._active = B._active = !0, setTimeout(q, 1), A._updateRoot = D.render = function () {
      var t, e, i;

      if (I.length && q(), j.render((a.time - j._startTime) * j._timeScale, !1, !1), B.render((a.frame - B._startTime) * B._timeScale, !1, !1), I.length && q(), !(a.frame % 120)) {
        for (i in L) {
          for (e = L[i].tweens, t = e.length; --t > -1;) {
            e[t]._gc && e.splice(t, 1);
          }

          0 === e.length && delete L[i];
        }

        if (i = j._first, (!i || i._paused) && D.autoSleep && !B._first && 1 === a._listeners.tick.length) {
          for (; i && i._paused;) {
            i = i._next;
          }

          i || a.sleep();
        }
      }
    }, a.addEventListener("tick", A._updateRoot);

    var V = function V(t, e, i) {
      var s,
          r,
          n = t._gsTweenID;
      if (L[n || (t._gsTweenID = n = "t" + X++)] || (L[n] = {
        target: t,
        tweens: []
      }), e && (s = L[n].tweens, s[r = s.length] = e, i)) for (; --r > -1;) {
        s[r] === e && s.splice(r, 1);
      }
      return L[n].tweens;
    },
        G = function G(t, e, i, s) {
      var r,
          n,
          a = t.vars.onOverwrite;
      return a && (r = a(t, e, i, s)), a = D.onOverwrite, a && (n = a(t, e, i, s)), r !== !1 && n !== !1;
    },
        W = function W(t, e, i, s, r) {
      var n, a, o, h;

      if (1 === s || s >= 4) {
        for (h = r.length, n = 0; h > n; n++) {
          if ((o = r[n]) !== e) o._gc || G(o, e) && o._enabled(!1, !1) && (a = !0);else if (5 === s) break;
        }

        return a;
      }

      var l,
          u = e._startTime + _,
          p = [],
          c = 0,
          f = 0 === e._duration;

      for (n = r.length; --n > -1;) {
        (o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (l = l || Z(e, 0, f), 0 === Z(o, l, f) && (p[c++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((f || !o._initted) && 2e-10 >= u - o._startTime || (p[c++] = o)));
      }

      for (n = c; --n > -1;) {
        if (o = p[n], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) {
          if (2 !== s && !G(o, e)) continue;
          o._enabled(!1, !1) && (a = !0);
        }
      }

      return a;
    },
        Z = function Z(t, e, i) {
      for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
        if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
        s = s._timeline;
      }

      return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * _ > n - e ? _ : (n += t.totalDuration() / t._timeScale / r) > e + _ ? 0 : n - e - _;
    };

    n._init = function () {
      var t,
          e,
          i,
          s,
          r,
          n = this.vars,
          a = this._overwrittenProps,
          o = this._duration,
          h = !!n.immediateRender,
          l = n.ease;

      if (n.startAt) {
        this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};

        for (s in n.startAt) {
          r[s] = n.startAt[s];
        }

        if (r.overwrite = !1, r.immediateRender = !0, r.lazy = h && n.lazy !== !1, r.startAt = r.delay = null, this._startAt = D.to(this.target, 0, r), h) if (this._time > 0) this._startAt = null;else if (0 !== o) return;
      } else if (n.runBackwards && 0 !== o) if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;else {
        0 !== this._time && (h = !1), i = {};

        for (s in n) {
          U[s] && "autoCSS" !== s || (i[s] = n[s]);
        }

        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && n.lazy !== !1, i.immediateRender = h, this._startAt = D.to(this.target, 0, i), h) {
          if (0 === this._time) return;
        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
      }

      if (this._ease = l = l ? l instanceof T ? l : "function" == typeof l ? new T(l, n.easeParams) : w[l] || D.defaultEase : D.defaultEase, n.easeParams instanceof Array && l.config && (this._ease = l.config.apply(l, n.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (t = this._targets.length; --t > -1;) {
        this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
      } else e = this._initProps(this.target, this._propLookup, this._siblings, a);
      if (e && D._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards) for (i = this._firstPT; i;) {
        i.s += i.c, i.c = -i.c, i = i._next;
      }
      this._onUpdate = n.onUpdate, this._initted = !0;
    }, n._initProps = function (e, i, s, r) {
      var n, a, o, h, l, _;

      if (null == e) return !1;
      F[e._gsTweenID] && q(), this.vars.css || e.style && e !== t && e.nodeType && N.css && this.vars.autoCSS !== !1 && z(this.vars, e);

      for (n in this.vars) {
        if (_ = this.vars[n], U[n]) _ && (_ instanceof Array || _.push && c(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));else if (N[n] && (h = new N[n]())._onInitTween(e, this.vars[n], this)) {
          for (this._firstPT = l = {
            _next: this._firstPT,
            t: h,
            p: "setRatio",
            s: 0,
            c: 1,
            f: !0,
            n: n,
            pg: !0,
            pr: h._priority
          }, a = h._overwriteProps.length; --a > -1;) {
            i[h._overwriteProps[a]] = this._firstPT;
          }

          (h._priority || h._onInitAllProps) && (o = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0);
        } else this._firstPT = i[n] = l = {
          _next: this._firstPT,
          t: e,
          p: n,
          f: "function" == typeof e[n],
          n: n,
          pg: !1,
          pr: 0
        }, l.s = l.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), l.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - l.s || 0;
        l && l._next && (l._next._prev = l);
      }

      return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && W(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (F[e._gsTweenID] = !0), o);
    }, n.render = function (t, e, i) {
      var s,
          r,
          n,
          a,
          o = this._time,
          h = this._duration,
          l = this._rawPrevTime;
      if (t >= h) this._totalTime = this._time = h, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete"), 0 === h && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > l || l === _ && "isPause" !== this.data) && l !== t && (i = !0, l > _ && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || l === t ? t : _);else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === h && l > 0 && l !== _) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === h && (this._initted || !this.vars.lazy || i) && (l >= 0 && (l !== _ || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || l === t ? t : _)), this._initted || (i = !0);else if (this._totalTime = this._time = t, this._easeType) {
        var u = t / h,
            p = this._easeType,
            c = this._easePower;
        (1 === p || 3 === p && u >= .5) && (u = 1 - u), 3 === p && (u *= 2), 1 === c ? u *= u : 2 === c ? u *= u * u : 3 === c ? u *= u * u * u : 4 === c && (u *= u * u * u * u), this.ratio = 1 === p ? 1 - u : 2 === p ? u : .5 > t / h ? u / 2 : 1 - u / 2;
      } else this.ratio = this._ease.getRatio(t / h);

      if (this._time !== o || i) {
        if (!this._initted) {
          if (this._init(), !this._initted || this._gc) return;
          if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = l, I.push(this), this._lazy = [t, e], void 0;
          this._time && !s ? this.ratio = this._ease.getRatio(this._time / h) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
        }

        for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === h) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y))), n = this._firstPT; n;) {
          n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
        }

        this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || y), 0 === h && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0));
      }
    }, n._kill = function (t, e, i) {
      if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
      e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;

      var s, r, n, a, o, h, l, _, u;

      if ((c(e) || M(e)) && "number" != typeof e[0]) for (s = e.length; --s > -1;) {
        this._kill(t, e[s]) && (h = !0);
      } else {
        if (this._targets) {
          for (s = this._targets.length; --s > -1;) {
            if (e === this._targets[s]) {
              o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
              break;
            }
          }
        } else {
          if (e !== this.target) return !1;
          o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all";
        }

        if (o) {
          if (l = t || o, _ = t !== r && "all" !== r && t !== o && ("object" != _typeof(t) || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
            for (n in l) {
              o[n] && (u || (u = []), u.push(n));
            }

            if (!G(this, i, e, u)) return !1;
          }

          for (n in l) {
            (a = o[n]) && (a.pg && a.t._kill(l) && (h = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), _ && (r[n] = 1);
          }

          !this._firstPT && this._initted && this._enabled(!1, !1);
        }
      }
      return h;
    }, n.invalidate = function () {
      return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -_, this.render(-this._delay)), this;
    }, n._enabled = function (t, e) {
      if (o || a.wake(), t && this._gc) {
        var i,
            s = this._targets;
        if (s) for (i = s.length; --i > -1;) {
          this._siblings[i] = V(s[i], this, !0);
        } else this._siblings = V(this.target, this, !0);
      }

      return A.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1;
    }, D.to = function (t, e, i) {
      return new D(t, e, i);
    }, D.from = function (t, e, i) {
      return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i);
    }, D.fromTo = function (t, e, i, s) {
      return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new D(t, e, s);
    }, D.delayedCall = function (t, e, i, s, r) {
      return new D(e, 0, {
        delay: t,
        onComplete: e,
        onCompleteParams: i,
        onCompleteScope: s,
        onReverseComplete: e,
        onReverseCompleteParams: i,
        onReverseCompleteScope: s,
        immediateRender: !1,
        lazy: !1,
        useFrames: r,
        overwrite: 0
      });
    }, D.set = function (t, e) {
      return new D(t, 0, e);
    }, D.getTweensOf = function (t, e) {
      if (null == t) return [];
      t = "string" != typeof t ? t : D.selector(t) || t;
      var i, s, r, n;

      if ((c(t) || M(t)) && "number" != typeof t[0]) {
        for (i = t.length, s = []; --i > -1;) {
          s = s.concat(D.getTweensOf(t[i], e));
        }

        for (i = s.length; --i > -1;) {
          for (n = s[i], r = i; --r > -1;) {
            n === s[r] && s.splice(i, 1);
          }
        }
      } else for (s = V(t).concat(), i = s.length; --i > -1;) {
        (s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
      }

      return s;
    }, D.killTweensOf = D.killDelayedCallsTo = function (t, e, i) {
      "object" == _typeof(e) && (i = e, e = !1);

      for (var s = D.getTweensOf(t, e), r = s.length; --r > -1;) {
        s[r]._kill(i, t);
      }
    };
    var Q = g("plugins.TweenPlugin", function (t, e) {
      this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = Q.prototype;
    }, !0);

    if (n = Q.prototype, Q.version = "1.10.1", Q.API = 2, n._firstPT = null, n._addTween = function (t, e, i, s, r, n) {
      var a, o;
      return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
        _next: this._firstPT,
        t: t,
        p: e,
        s: i,
        c: a,
        f: "function" == typeof t[e],
        n: r || e,
        r: n
      }, o._next && (o._next._prev = o), o) : void 0;
    }, n.setRatio = function (t) {
      for (var e, i = this._firstPT, s = 1e-6; i;) {
        e = i.c * t + i.s, i.r ? e = Math.round(e) : s > e && e > -s && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next;
      }
    }, n._kill = function (t) {
      var e,
          i = this._overwriteProps,
          s = this._firstPT;
      if (null != t[this._propName]) this._overwriteProps = [];else for (e = i.length; --e > -1;) {
        null != t[i[e]] && i.splice(e, 1);
      }

      for (; s;) {
        null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
      }

      return !1;
    }, n._roundProps = function (t, e) {
      for (var i = this._firstPT; i;) {
        (t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next;
      }
    }, D._onPluginEvent = function (t, e) {
      var i,
          s,
          r,
          n,
          a,
          o = e._firstPT;

      if ("_onInitAllProps" === t) {
        for (; o;) {
          for (a = o._next, s = r; s && s.pr > o.pr;) {
            s = s._next;
          }

          (o._prev = s ? s._prev : n) ? o._prev._next = o : r = o, (o._next = s) ? s._prev = o : n = o, o = a;
        }

        o = e._firstPT = r;
      }

      for (; o;) {
        o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
      }

      return i;
    }, Q.activate = function (t) {
      for (var e = t.length; --e > -1;) {
        t[e].API === Q.API && (N[new t[e]()._propName] = t[e]);
      }

      return !0;
    }, d.plugin = function (t) {
      if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
      var e,
          i = t.propName,
          s = t.priority || 0,
          r = t.overwriteProps,
          n = {
        init: "_onInitTween",
        set: "setRatio",
        kill: "_kill",
        round: "_roundProps",
        initAll: "_onInitAllProps"
      },
          a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
        Q.call(this, i, s), this._overwriteProps = r || [];
      }, t.global === !0),
          o = a.prototype = new Q(i);
      o.constructor = a, a.API = t.API;

      for (e in n) {
        "function" == typeof t[e] && (o[n[e]] = t[e]);
      }

      return a.version = t.version, Q.activate([a]), a;
    }, s = t._gsQueue) {
      for (r = 0; s.length > r; r++) {
        s[r]();
      }

      for (n in f) {
        f[n].func || t.console.log("GSAP encountered missing dependency: com.greensock." + n);
      }
    }

    o = !1;
  }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : void 0 || window, "TweenMax");
/*! PhotoSwipe - v4.0.0 - 2014-12-16
* http://photoswipe.com
* Copyright (c) 2014 Dmitry Semenov; */

(function (e, t) {
  "function" == typeof define && define.amd ? define(t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = t() : e.PhotoSwipe = t();
})(void 0, function () {
  "use strict";

  var e = function e(_e2, t, n, i) {
    var o = {
      features: null,
      bind: function bind(e, t, n, i) {
        var o = (i ? "remove" : "add") + "EventListener";
        t = t.split(" ");

        for (var a = 0; t.length > a; a++) {
          t[a] && e[o](t[a], n, !1);
        }
      },
      isArray: function isArray(e) {
        return e instanceof Array;
      },
      createEl: function createEl(e, t) {
        var n = document.createElement(t || "div");
        return e && (n.className = e), n;
      },
      getScrollY: function getScrollY() {
        var e = window.pageYOffset;
        return void 0 !== e ? e : document.documentElement.scrollTop;
      },
      unbind: function unbind(e, t, n) {
        o.bind(e, t, n, !0);
      },
      removeClass: function removeClass(e, t) {
        var n = RegExp("(\\s|^)" + t + "(\\s|$)");
        e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
      },
      addClass: function addClass(e, t) {
        o.hasClass(e, t) || (e.className += (e.className ? " " : "") + t);
      },
      hasClass: function hasClass(e, t) {
        return e.className && RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className);
      },
      arraySearch: function arraySearch(e, t, n) {
        for (var i = e.length; i--;) {
          if (e[i][n] === t) return i;
        }

        return -1;
      },
      extend: function extend(e, t, n) {
        for (var i in t) {
          if (t.hasOwnProperty(i)) {
            if (n && e.hasOwnProperty(i)) continue;
            e[i] = t[i];
          }
        }
      },
      easing: {
        sine: {
          out: function out(e) {
            return Math.sin(e * (Math.PI / 2));
          },
          inOut: function inOut(e) {
            return -(Math.cos(Math.PI * e) - 1) / 2;
          }
        },
        cubic: {
          out: function out(e) {
            return --e * e * e + 1;
          }
        }
      },
      detectFeatures: function detectFeatures() {
        if (o.features) return o.features;
        var e = o.createEl(),
            t = e.style,
            n = "",
            i = {};

        if (i.oldIE = document.all && !document.addEventListener, i.touch = "ontouchstart" in window, window.requestAnimationFrame && (i.raf = window.requestAnimationFrame, i.caf = window.cancelAnimationFrame), i.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !i.pointerEvent) {
          var a = navigator.userAgent;

          if (/iP(hone|od)/.test(navigator.platform)) {
            var r = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
            r && r.length > 0 && (r = parseInt(r[1], 10), r >= 1 && 8 > r && (i.isOldIOSPhone = !0));
          }

          var l = a.match(/Android\s([0-9\.]*)/),
              s = l ? l[1] : 0;
          s = parseFloat(s), s >= 1 && (4.4 > s && (i.isOldAndroid = !0), i.androidVersion = s), i.isMobileOpera = /opera mini|opera mobi/i.test(a);
        }

        for (var u, c, d = ["transform", "perspective", "animationName"], m = ["", "webkit", "Moz", "ms", "O"], p = 0; 4 > p; p++) {
          n = m[p];

          for (var f = 0; 3 > f; f++) {
            u = d[f], c = n + (n ? u.charAt(0).toUpperCase() + u.slice(1) : u), !i[u] && c in t && (i[u] = c);
          }

          n && !i.raf && (n = n.toLowerCase(), i.raf = window[n + "RequestAnimationFrame"], i.raf && (i.caf = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"]));
        }

        if (!i.raf) {
          var h = 0;
          i.raf = function (e) {
            var t = new Date().getTime(),
                n = Math.max(0, 16 - (t - h)),
                i = window.setTimeout(function () {
              e(t + n);
            }, n);
            return h = t + n, i;
          }, i.caf = function (e) {
            clearTimeout(e);
          };
        }

        return i.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, o.features = i, i;
      }
    };
    o.detectFeatures(), o.features.oldIE && (o.bind = function (e, t, n, i) {
      t = t.split(" ");

      for (var o, a = (i ? "detach" : "attach") + "Event", r = function r() {
        n.handleEvent.call(n);
      }, l = 0; t.length > l; l++) {
        if (o = t[l]) if ("object" == _typeof(n) && n.handleEvent) {
          if (i) {
            if (!n["oldIE" + o]) return !1;
          } else n["oldIE" + o] = r;

          e[a]("on" + o, n["oldIE" + o]);
        } else e[a]("on" + o, n);
      }
    });
    var a = this,
        r = 25,
        l = 3,
        s = {
      allowPanToNext: !0,
      spacing: .12,
      bgOpacity: 1,
      mouseUsed: !1,
      loop: !0,
      pinchToClose: !0,
      closeOnScroll: !0,
      closeOnVerticalDrag: !0,
      hideAnimationDuration: 333,
      showAnimationDuration: 333,
      showHideOpacity: !1,
      focus: !0,
      escKey: !0,
      arrowKeys: !0,
      mainScrollEndFriction: .35,
      panEndFriction: .35,
      scaleMode: "fit",
      modal: !0,
      alwaysFadeIn: !1
    };
    o.extend(s, i);

    var u,
        c,
        d,
        m,
        p,
        f,
        h,
        y,
        v,
        x,
        g,
        w,
        b,
        I,
        D,
        C,
        T,
        M,
        Z,
        S,
        A,
        k,
        O,
        E,
        R,
        F,
        P,
        L,
        z,
        N,
        _,
        U,
        H,
        Y,
        B,
        V,
        W,
        G,
        X,
        K,
        q,
        $,
        j,
        J,
        Q,
        et,
        tt,
        nt,
        it,
        ot,
        at,
        rt,
        lt,
        st,
        ut,
        ct,
        dt,
        mt,
        pt,
        ft,
        ht,
        yt,
        vt,
        xt,
        gt = function gt() {
      return {
        x: 0,
        y: 0
      };
    },
        wt = 0,
        bt = gt(),
        It = gt(),
        Dt = gt(),
        Ct = gt(),
        Tt = {},
        Mt = 0,
        Zt = 0,
        St = gt(),
        At = 0,
        kt = !0,
        Ot = [],
        Et = {},
        Rt = function Rt(e, t) {
      o.extend(a, t.publicMethods), Ot.push(e);
    },
        Ft = function Ft(e) {
      var t = vt();
      return e > t - 1 ? e - t : 0 > e ? t + e : e;
    },
        Pt = {},
        Lt = function Lt(e, t) {
      return Pt[e] || (Pt[e] = []), Pt[e].push(t);
    },
        zt = function zt(e) {
      var t = Pt[e];

      if (t) {
        var n = Array.prototype.slice.call(arguments);
        n.shift();

        for (var i = 0; t.length > i; i++) {
          t[i].apply(a, n);
        }
      }
    },
        Nt = function Nt() {
      return new Date().getTime();
    },
        _t = function _t(e) {
      ct = e, a.bg.style.opacity = e * s.bgOpacity;
    },
        Ut = function Ut(e, t, n, i) {
      e[k] = w + t + "px, " + n + "px" + b + " scale(" + i + ")";
    },
        Ht = function Ht() {
      ot && Ut(ot, Dt.x, Dt.y, x);
    },
        Yt = function Yt(e) {
      Ut(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel);
    },
        Bt = function Bt(e, t) {
      t[k] = w + e + "px, 0px" + b;
    },
        Vt = function Vt(e, t) {
      if (!s.loop && t) {
        var n = m + (St.x * Mt - e) / St.x,
            i = Math.round(e - In.x);
        (0 > n && i > 0 || n >= vt() - 1 && 0 > i) && (e = In.x + i * s.mainScrollEndFriction);
      }

      In.x = e, Bt(e, p);
    },
        Wt = function Wt(e) {
      return 1 / nt * e * g;
    },
        Gt = function Gt(e, t) {
      var n = Dn[e] - lt[e];
      return It[e] + bt[e] + n - n * (t / g);
    },
        Xt = function Xt(e, t) {
      return e.x === t.x && e.y === t.y;
    },
        Kt = function Kt(e, t) {
      return r > Math.abs(e.x - t.x) && r > Math.abs(e.y - t.y);
    },
        qt = function qt(e, t) {
      e.x = t.x, e.y = t.y, t.id && (e.id = t.id);
    },
        $t = function $t() {
      o.bind(document, "keydown", a), s.mouseUsed || o.bind(document, "mousemove", Qt), o.bind(window, "resize scroll", a), zt("bindEvents");
    },
        jt = function jt() {
      o.unbind(window, "resize", a), o.unbind(window, "scroll", v.scroll), o.unbind(document, "keydown", a), o.unbind(document, "mousemove", Qt), X && o.unbind(window, h, a), zt("unbindEvents");
    },
        Jt = null,
        Qt = function Qt() {
      Jt && (o.unbind(document, "mousemove", Qt), o.addClass(_e2, "pswp--has_mouse"), s.mouseUsed = !0, zt("mouseUsed")), Jt = setTimeout(function () {
        Jt = null;
      }, 100);
    },
        en = function en(e, t) {
      var n = Jn(a.currItem, Tt, e);
      return t && (it = n), n;
    },
        tn = function tn(e, t, n, i) {
      return i === a.currItem.initialZoomLevel ? (n[e] = a.currItem.initialPosition[e], !0) : (n[e] = Gt(e, i), n[e] > t.min[e] ? (n[e] = t.min[e], !0) : n[e] < t.max[e] ? (n[e] = t.max[e], !0) : !1);
    },
        nn = {},
        on = 0,
        an = function an(e) {
      nn[e] && (nn[e].raf && F(nn[e].raf), on--, delete nn[e]);
    },
        rn = function rn(e) {
      nn[e] && an(e), nn[e] || (on++, nn[e] = {});
    },
        ln = function ln() {
      for (var e in nn) {
        nn.hasOwnProperty(e) && an(e);
      }
    },
        sn = function sn(e, t, n, i, o, a, r) {
      var l,
          s = Nt();
      rn(e);

      var u = function u() {
        if (nn[e]) {
          if (l = Nt() - s, l >= i) return an(e), a(n), r && r(), void 0;
          a((n - t) * o(l / i) + t), nn[e].raf = R(u);
        }
      };

      u();
    },
        un = function un(t, n, i, a) {
      U && clearTimeout(U), ht = !0, ft = !0;
      var r;
      t.initialLayout ? (r = t.initialLayout, t.initialLayout = null) : r = s.getThumbBoundsFn && s.getThumbBoundsFn(m);

      var l = function l() {
        an("initialZoom"), i || (_t(1), n && (n.style.display = "block"), o.addClass(_e2, "pswp--animated-in"), zt("initialZoom" + (i ? "OutEnd" : "InEnd"))), a && a(), ht = !1;
      },
          u = i ? s.hideAnimationDuration : s.showAnimationDuration;

      return r && void 0 !== r.x && u ? (t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), i || (x = r.w / t.w, Dt.x = r.x, Dt.y = r.y - L, s.showHideOpacity && (_e2.style.opacity = .001, _e2.style.webkitBackfaceVisibility = "hidden"), Ht()), rn("initialZoom"), i && !d && o.removeClass(_e2, "pswp--animated-in"), U = setTimeout(function () {
        if (zt("initialZoom" + (i ? "Out" : "In")), i) {
          var n = r.w / t.w,
              a = {
            x: Dt.x,
            y: Dt.y
          },
              c = x,
              m = L,
              p = ct,
              f = function f(t) {
            D && (m = o.getScrollY(), D = !1), 1 === t ? (x = n, Dt.x = r.x, Dt.y = r.y - m, d && l()) : (x = (n - c) * t + c, Dt.x = (r.x - a.x) * t + a.x, Dt.y = (r.y - m - a.y) * t + a.y), Ht(), s.showHideOpacity ? _e2.style.opacity = 1 - t : _t(p - t * p);
          };

          d ? sn("initialZoom", 0, 1, u, o.easing.cubic.out, f) : (f(1), U = setTimeout(l, u + 20));
        } else x = t.initialZoomLevel, qt(Dt, t.initialPosition), Ht(), _t(1), s.showHideOpacity ? _e2.style.opacity = 1 : _t(1), U = setTimeout(l, u + 20);
      }, i ? 25 : 90), !0) : (zt("initialZoom" + (i ? "Out" : "In")), x = t.initialZoomLevel, qt(Dt, t.initialPosition), Ht(), _e2.style.opacity = i ? 0 : 1, _t(1), l(), !1);
    },
        cn = {
      shout: zt,
      listen: Lt,
      viewportSize: Tt,
      options: s,
      isMainScrollAnimating: function isMainScrollAnimating() {
        return at;
      },
      getZoomLevel: function getZoomLevel() {
        return x;
      },
      getCurrentIndex: function getCurrentIndex() {
        return m;
      },
      isDragging: function isDragging() {
        return X;
      },
      isZooming: function isZooming() {
        return et;
      },
      applyZoomPan: function applyZoomPan(e, t, n) {
        Dt.x = t, Dt.y = n, x = e, Ht();
      },
      init: function init() {
        if (!u && !c) {
          var n;

          if (a.framework = o, a.template = _e2, a.bg = _e2.children[0], P = _e2.className, u = !0, _ = o.detectFeatures(), R = _.raf, F = _.caf, k = _.transform, z = _.oldIE, a.scrollWrap = _e2.children[1], a.container = a.scrollWrap.children[0], p = a.container.style, k) {
            var i = _.perspective && !E;
            w = "translate" + (i ? "3d(" : "("), b = _.perspective ? ", 0px)" : ")";
          } else k = "left", o.addClass(_e2, "pswp--ie"), Bt = function Bt(e, t) {
            t.left = e + "px";
          }, Yt = function Yt(e) {
            var t = e.container.style,
                n = e.fitRatio * e.w,
                i = e.fitRatio * e.h;
            t.width = n + "px", t.height = i + "px", t.left = e.initialPosition.x + "px", t.top = e.initialPosition.y + "px";
          }, Ht = function Ht() {
            if (ot) {
              var e = ot,
                  t = a.currItem,
                  n = t.fitRatio * t.w,
                  i = t.fitRatio * t.h;
              e.width = n + "px", e.height = i + "px", e.left = Dt.x + "px", e.top = Dt.y + "px";
            }
          };

          var r = function r(e, t, n, i, o) {
            M = e + t, Z = e + n, S = e + i, A = o ? e + o : "";
          };

          for (a.itemHolders = C = [{
            el: a.container.children[0],
            wrap: 0,
            index: -1
          }, {
            el: a.container.children[1],
            wrap: 0,
            index: -1
          }, {
            el: a.container.children[2],
            wrap: 0,
            index: -1
          }], C[0].el.style.display = C[2].el.style.display = "none", O = _.pointerEvent, O && _.touch && (_.touch = !1), O ? navigator.pointerEnabled ? r("pointer", "down", "move", "up", "cancel") : r("MSPointer", "Down", "Move", "Up", "Cancel") : _.touch ? (r("touch", "start", "move", "end", "cancel"), E = !0) : r("mouse", "down", "move", "up"), h = Z + " " + S + " " + A, y = M, O && !E && (E = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), a.likelyTouchDevice = E, (!_.animationName || !_.transform || _.isOldIOSPhone || _.isOldAndroid || _.isMobileOpera) && (s.showAnimationDuration = s.hideAnimationDuration = 0), n = 0; Ot.length > n; n++) {
            a["init" + Ot[n]]();
          }

          if (t) {
            var g = a.ui = new t(a, o);
            g.init();
          }

          E || (s.allowPanToNext = !1);
          var T;
          v = {
            resize: a.updateSize,
            scroll: function scroll() {
              D = !0, s.closeOnScroll && u && (!a.likelyTouchDevice || s.mouseUsed) && Math.abs(o.getScrollY() - L) > 2 && (d = !0, a.close());
            },
            keydown: function keydown(e) {
              T = "", s.escKey && 27 === e.keyCode ? T = "close" : s.arrowKeys && (37 === e.keyCode ? T = "prev" : 39 === e.keyCode && (T = "next")), T && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a[T]()));
            }
          }, v[M] = Un, v[Z] = Hn, v[S] = Bn, A && (v[A] = v[S]), _.touch && (y += " mousedown", h += " mousemove mouseup", v.mousedown = v[M], v.mousemove = v[Z], v.mouseup = v[S]), zt("firstUpdate"), m = m || s.index || 0, (isNaN(m) || 0 > m || m >= vt()) && (m = 0), a.currItem = yt(m), (_.isOldIOSPhone || _.isOldAndroid) && (kt = !1), s.modal && (_e2.setAttribute("aria-hidden", "false"), kt ? _e2.style.position = "fixed" : (_e2.style.position = "absolute", _e2.style.top = o.getScrollY() + "px")), void 0 === N && (zt("initialLayout"), N = L = o.getScrollY());
          var U = "pswp--open ";

          for (s.mainClass && (U += s.mainClass + " "), s.showHideOpacity && (U += "pswp--animate_opacity "), U += E ? "pswp--touch" : "pswp--notouch", U += _.animationName ? " pswp--css_animation" : "", U += _.svg ? " pswp--svg" : "", o.addClass(_e2, U), a.updateSize(), f = -1, At = null, n = 0; l > n; n++) {
            Bt((n + f) * St.x, C[n].el.style);
          }

          z || o.bind(a.scrollWrap, y, a), Lt("initialZoomInEnd", function () {
            a.setContent(C[0], m - 1), a.setContent(C[2], m + 1), C[0].el.style.display = C[2].el.style.display = "block", s.focus && _e2.focus(), $t();
          }), a.setContent(C[1], m), a.updateCurrItem(), zt("afterInit"), kt || (I = setInterval(function () {
            on || X || et || x !== a.currItem.initialZoomLevel || a.updateSize();
          }, 1e3)), o.addClass(_e2, "pswp--visible");
        }
      },
      close: function close() {
        u && (u = !1, c = !0, zt("close"), jt(), un(a.currItem, null, !0, a.destroy));
      },
      destroy: function destroy() {
        zt("destroy"), U && clearTimeout(U), s.modal && (_e2.setAttribute("aria-hidden", "true"), _e2.className = P), I && clearInterval(I), o.unbind(a.scrollWrap, y, a), o.unbind(window, "scroll", a), Mn(), ln(), Pt = null;
      },
      panTo: function panTo(e, t, n) {
        n || (e > it.min.x ? e = it.min.x : it.max.x > e && (e = it.max.x), t > it.min.y ? t = it.min.y : it.max.y > t && (t = it.max.y)), Dt.x = e, Dt.y = t, Ht();
      },
      handleEvent: function handleEvent(e) {
        e = e || window.event, v[e.type] && v[e.type](e);
      },
      goTo: function goTo(e) {
        e = Ft(e);
        var t = e - m;
        At = t, m = e, a.currItem = yt(m), Mt -= t, Vt(St.x * Mt), ln(), at = !1, a.updateCurrItem();
      },
      next: function next() {
        a.goTo(m + 1);
      },
      prev: function prev() {
        a.goTo(m - 1);
      },
      updateCurrZoomItem: function updateCurrZoomItem(e) {
        if (e && zt("beforeChange", 0), C[1].el.children.length) {
          var t = C[1].el.children[0];
          ot = o.hasClass(t, "pswp__zoom-wrap") ? t.style : null;
        } else ot = null;

        it = a.currItem.bounds, g = x = a.currItem.initialZoomLevel, Dt.x = it.center.x, Dt.y = it.center.y, e && zt("afterChange");
      },
      invalidateCurrItems: function invalidateCurrItems() {
        for (var e = 0; l > e; e++) {
          C[e].item && (C[e].item.needsUpdate = !0);
        }
      },
      updateCurrItem: function updateCurrItem(e) {
        if (0 !== At) {
          var t,
              n = Math.abs(At);

          if (!(e && 2 > n)) {
            a.currItem = yt(m), zt("beforeChange", At), n >= l && (f += At + (At > 0 ? -l : l), n = l);

            for (var i = 0; n > i; i++) {
              At > 0 ? (t = C.shift(), C[l - 1] = t, f++, Bt((f + 2) * St.x, t.el.style), a.setContent(t, m - n + i + 1 + 1)) : (t = C.pop(), C.unshift(t), f--, Bt(f * St.x, t.el.style), a.setContent(t, m + n - i - 1 - 1));
            }

            if (ot && 1 === Math.abs(At)) {
              var o = yt(T);
              o.initialZoomLevel !== x && (Jn(o, Tt), Yt(o));
            }

            At = 0, a.updateCurrZoomItem(), T = m, zt("afterChange");
          }
        }
      },
      updateSize: function updateSize(t) {
        if (!kt) {
          var n = o.getScrollY();
          if (N !== n && (_e2.style.top = n + "px", N = n), !t && Et.x === window.innerWidth && Et.y === window.innerHeight) return;
          Et.x = window.innerWidth, Et.y = window.innerHeight, _e2.style.height = Et.y + "px";
        }

        if (Tt.x = a.scrollWrap.clientWidth, Tt.y = a.scrollWrap.clientHeight, lt = {
          x: 0,
          y: N
        }, St.x = Tt.x + Math.round(Tt.x * s.spacing), St.y = Tt.y, Vt(St.x * Mt), zt("beforeResize"), void 0 !== f) for (var i, r, u = 0; l > u; u++) {
          i = C[u], Bt((u + f) * St.x, i.el.style), r = yt(i.index), r.needsUpdate && (a.cleanSlide(r), a.setContent(i, i.index), 1 === u && a.updateCurrZoomItem(!0), r.needsUpdate = !1), r && r.container && (Jn(r, Tt), Yt(r));
        }
        g = x = a.currItem.initialZoomLevel, it = a.currItem.bounds, it && (Dt.x = it.center.x, Dt.y = it.center.y, Ht()), zt("resize");
      },
      zoomTo: function zoomTo(e, t, n, i, a) {
        t && (g = x, Dn.x = Math.abs(t.x) - Dt.x, Dn.y = Math.abs(t.y) - Dt.y, qt(It, Dt));
        var r = en(e, !1),
            l = {};
        tn("x", r, l, e), tn("y", r, l, e);

        var s = x,
            u = {
          x: Dt.x,
          y: Dt.y
        },
            c = function c(t) {
          1 === t ? (x = e, Dt.x = l.x, Dt.y = l.y) : (x = (e - s) * t + s, Dt.x = (l.x - u.x) * t + u.x, Dt.y = (l.y - u.y) * t + u.y), a && a(t), Ht();
        };

        n ? sn("customZoomTo", 0, 1, n, i || o.easing.sine.inOut, c) : c(1);
      }
    },
        dn = 30,
        mn = 10,
        pn = {},
        fn = {},
        hn = {},
        yn = {},
        vn = {},
        xn = [],
        gn = {},
        wn = [],
        bn = {},
        In = gt(),
        Dn = gt(),
        Cn = gt(),
        Tn = function Tn(e, t) {
      return bn.x = Math.abs(e.x - t.x), bn.y = Math.abs(e.y - t.y), Math.sqrt(bn.x * bn.x + bn.y * bn.y);
    },
        Mn = function Mn() {
      j && (F(j), j = null);
    },
        Zn = function Zn() {
      X && (j = R(Zn), Yn());
    },
        Sn = function Sn() {
      return !("fit" === s.scaleMode && x === a.currItem.initialZoomLevel);
    },
        An = {},
        kn = function kn(e, t) {
      return An.prevent = "A" !== e.target.tagName, zt("preventDragEvent", e, t, An), An.prevent;
    },
        On = function On(e, t) {
      return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t;
    },
        En = function En(e, t, n) {
      n.x = .5 * (e.x + t.x), n.y = .5 * (e.y + t.y);
    },
        Rn = function Rn(e, t, n) {
      if (e - Y > 50) {
        var i = wn.length > 2 ? wn.shift() : {};
        i.x = t, i.y = n, wn.push(i), Y = e;
      }
    },
        Fn = function Fn() {
      var e = Dt.y - a.currItem.initialPosition.y;
      return 1 - Math.abs(e / (Tt.y / 2));
    },
        Pn = {},
        Ln = {},
        zn = [],
        Nn = function Nn(e) {
      for (; zn.length > 0;) {
        zn.pop();
      }

      return O ? (mt = 0, xn.forEach(function (e) {
        0 === mt ? zn[0] = e : 1 === mt && (zn[1] = e), mt++;
      })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (zn[0] = On(e.touches[0], Pn), e.touches.length > 1 && (zn[1] = On(e.touches[1], Ln))) : (Pn.x = e.pageX, Pn.y = e.pageY, Pn.id = "", zn[0] = Pn), zn;
    },
        _n = function _n(e, t) {
      var n,
          i,
          o = 0,
          r = Dt[e] + t[e],
          l = t[e] > 0,
          u = In.x + t.x,
          c = In.x - gn.x;
      n = r > it.min[e] || it.max[e] > r ? s.panEndFriction : 1, r = Dt[e] + t[e] * n;
      var d, m;
      return !s.allowPanToNext && x !== a.currItem.initialZoomLevel || (ot ? "h" !== rt || "x" !== e || q || (l ? (r > it.min[e] && (n = s.panEndFriction, o = it.min[e] - r, i = it.min[e] - It[e]), (0 >= i || 0 > c) && vt() > 1 ? (m = u, 0 > c && u > gn.x && (m = gn.x)) : it.min.x !== it.max.x && (d = r)) : (it.max[e] > r && (n = s.panEndFriction, o = r - it.max[e], i = It[e] - it.max[e]), (0 >= i || c > 0) && vt() > 1 ? (m = u, c > 0 && gn.x > u && (m = gn.x)) : it.min.x !== it.max.x && (d = r))) : m = u, "x" !== e) ? (at || J || x > a.currItem.fitRatio && (Dt[e] += t[e] * n), void 0) : (void 0 !== m && (Vt(m, !0), J = m === gn.x ? !1 : !0), it.min.x !== it.max.x && (void 0 !== d ? Dt.x = d : J || (Dt.x += t.x * n)), void 0 !== m);
    },
        Un = function Un(e) {
      if (ht) return e.preventDefault(), void 0;

      if (!G || "mousedown" !== e.type) {
        if (kn(e, !0) && e.preventDefault(), zt("pointerDown"), O) {
          var t = o.arraySearch(xn, e.pointerId, "id");
          0 > t && (t = xn.length), xn[t] = {
            x: e.pageX,
            y: e.pageY,
            id: e.pointerId
          };
        }

        var n = Nn(e),
            i = n.length;
        Q = null, ln(), X && 1 !== i || (X = st = !0, o.bind(window, h, a), V = dt = ut = W = J = $ = K = q = !1, rt = null, zt("firstTouchStart", n), qt(It, Dt), bt.x = bt.y = 0, qt(yn, n[0]), qt(vn, yn), gn.x = St.x * Mt, wn = [{
          x: yn.x,
          y: yn.y
        }], Y = H = Nt(), en(x, !0), Mn(), Zn()), !et && i > 1 && !at && !J && (g = x, q = !1, et = K = !0, bt.y = bt.x = 0, qt(It, Dt), qt(pn, n[0]), qt(fn, n[1]), En(pn, fn, Cn), Dn.x = Math.abs(Cn.x) - Dt.x, Dn.y = Math.abs(Cn.y) - Dt.y, tt = nt = Tn(pn, fn));
      }
    },
        Hn = function Hn(e) {
      if (e.preventDefault(), O) {
        var t = o.arraySearch(xn, e.pointerId, "id");

        if (t > -1) {
          var n = xn[t];
          n.x = e.pageX, n.y = e.pageY;
        }
      }

      if (X) {
        var i = Nn(e);
        if (rt || $ || et) Q = i;else {
          var a = Math.abs(i[0].x - yn.x) - Math.abs(i[0].y - yn.y);
          Math.abs(a) >= mn && (rt = a > 0 ? "h" : "v", Q = i);
        }
      }
    },
        Yn = function Yn() {
      if (Q) {
        var e = Q.length;
        if (0 !== e) if (qt(pn, Q[0]), hn.x = pn.x - yn.x, hn.y = pn.y - yn.y, et && e > 1) {
          if (yn.x = pn.x, yn.y = pn.y, !hn.x && !hn.y && Xt(Q[1], fn)) return;
          qt(fn, Q[1]), q || (q = !0, zt("zoomGestureStarted"));
          var t = Tn(pn, fn),
              n = Wt(t);
          n > a.currItem.initialZoomLevel + a.currItem.initialZoomLevel / 15 && (dt = !0);
          var i = 1;
          if (a.currItem.minZoom > n) {
            if (s.pinchToClose && !dt && a.currItem.initialZoomLevel >= g) {
              var o = a.currItem.minZoom - n,
                  r = 1 - o / (a.currItem.minZoom / 1.2);
              _t(r), zt("onPinchClose", r), ut = !0;
            } else i = (a.currItem.minZoom - n) / a.currItem.minZoom, i > 1 && (i = 1), n = a.currItem.minZoom - i * (a.currItem.minZoom / 3);
          } else n > a.currItem.maxZoom && (i = (n - a.currItem.maxZoom) / (6 * a.currItem.minZoom), i > 1 && (i = 1), n = a.currItem.maxZoom + i * a.currItem.minZoom);
          1 !== i && 0 > i && (i = 0), tt = t, En(pn, fn, Ct), bt.x += Ct.x - Cn.x, bt.y += Ct.y - Cn.y, qt(Cn, Ct), Dt.x = Gt("x", n), Dt.y = Gt("y", n), V = n > x, x = n, Ht();
        } else {
          if (!rt) return;
          if (st && (st = !1, Math.abs(hn.x) >= mn && (hn.x -= Q[0].x - vn.x), Math.abs(hn.y) >= mn && (hn.y -= Q[0].y - vn.y)), yn.x = pn.x, yn.y = pn.y, 0 === hn.x && 0 === hn.y) return;

          if ("v" === rt && s.closeOnVerticalDrag && !Sn()) {
            bt.y += hn.y, Dt.y += hn.y;
            var l = Fn();
            return W = !0, zt("onVerticalDrag", l), _t(l), Ht(), void 0;
          }

          Rn(Nt(), pn.x, pn.y), $ = !0, it = a.currItem.bounds;

          var u = _n("x", hn);

          u || _n("y", hn), Ht();
        }
      }
    },
        Bn = function Bn(e) {
      if (_.isOldAndroid) {
        if (G && "mouseup" === e.type) return;
        e.type.indexOf("touch") > -1 && (clearTimeout(G), G = setTimeout(function () {
          G = 0;
        }, 600));
      }

      zt("pointerUp"), kn(e, !1) && e.preventDefault();
      var t;

      if (O) {
        var n = o.arraySearch(xn, e.pointerId, "id");
        if (n > -1) if (t = xn.splice(n, 1)[0], navigator.pointerEnabled) t.type = e.pointerType || "mouse";else {
          var i = {
            4: "mouse",
            2: "touch",
            3: "pen"
          };
          t.type = i[e.pointerType], t.type || (t.type = e.pointerType || "mouse");
        }
      }

      var r,
          l = Nn(e),
          s = l.length;
      if ("mouseup" === e.type && (s = 0), 2 === s) return Q = null, !0;
      1 === s && qt(vn, l[0]), 0 !== s || rt || at || (t || ("mouseup" === e.type ? t = {
        x: e.pageX,
        y: e.pageY,
        type: "mouse"
      } : e.changedTouches && e.changedTouches[0] && (t = {
        x: e.changedTouches[0].pageX,
        y: e.changedTouches[0].pageY,
        type: "touch"
      })), zt("touchRelease", e, t));
      var u = -1;
      if (0 === s && (X = !1, o.unbind(window, h, a), Mn(), et ? u = 0 : -1 !== wt && (u = Nt() - wt)), wt = 1 === s ? Nt() : -1, r = -1 !== u && 150 > u ? "zoom" : "swipe", et && 2 > s && (et = !1, 1 === s && (r = "zoomPointerUp"), zt("zoomGestureEnded")), Q = null, $ || q || at || W) if (ln(), B || (B = Vn()), B.calculateSwipeSpeed("x"), W) {
        var c = Fn();
        if (.6 > c) a.close();else {
          var d = Dt.y,
              m = ct;
          sn("verticalDrag", 0, 1, 300, o.easing.cubic.out, function (e) {
            Dt.y = (a.currItem.initialPosition.y - d) * e + d, _t((1 - m) * e + m), Ht();
          }), zt("onVerticalDrag", 1);
        }
      } else {
        if ((J || at) && 0 === s) {
          var p = Gn(r, B);
          if (p) return;
          r = "zoomPointerUp";
        }

        if (!at) return "swipe" !== r ? (Xn(), void 0) : (!J && x > a.currItem.fitRatio && Wn(B), void 0);
      }
    },
        Vn = function Vn() {
      var e,
          t,
          n = {
        lastFlickOffset: {},
        lastFlickDist: {},
        lastFlickSpeed: {},
        slowDownRatio: {},
        slowDownRatioReverse: {},
        speedDecelerationRatio: {},
        speedDecelerationRatioAbs: {},
        distanceOffset: {},
        backAnimDestination: {},
        backAnimStarted: {},
        calculateSwipeSpeed: function calculateSwipeSpeed(i) {
          wn.length > 1 ? (e = Nt() - Y + 50, t = wn[wn.length - 2][i]) : (e = Nt() - H, t = vn[i]), n.lastFlickOffset[i] = yn[i] - t, n.lastFlickDist[i] = Math.abs(n.lastFlickOffset[i]), n.lastFlickSpeed[i] = n.lastFlickDist[i] > 20 ? n.lastFlickOffset[i] / e : 0, .1 > Math.abs(n.lastFlickSpeed[i]) && (n.lastFlickSpeed[i] = 0), n.slowDownRatio[i] = .95, n.slowDownRatioReverse[i] = 1 - n.slowDownRatio[i], n.speedDecelerationRatio[i] = 1;
        },
        calculateOverBoundsAnimOffset: function calculateOverBoundsAnimOffset(e, t) {
          n.backAnimStarted[e] || (Dt[e] > it.min[e] ? n.backAnimDestination[e] = it.min[e] : Dt[e] < it.max[e] && (n.backAnimDestination[e] = it.max[e]), void 0 !== n.backAnimDestination[e] && (n.slowDownRatio[e] = .7, n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e], .05 > n.speedDecelerationRatioAbs[e] && (n.lastFlickSpeed[e] = 0, n.backAnimStarted[e] = !0, sn("bounceZoomPan" + e, Dt[e], n.backAnimDestination[e], t || 300, o.easing.sine.out, function (t) {
            Dt[e] = t, Ht();
          }))));
        },
        calculateAnimOffset: function calculateAnimOffset(e) {
          n.backAnimStarted[e] || (n.speedDecelerationRatio[e] = n.speedDecelerationRatio[e] * (n.slowDownRatio[e] + n.slowDownRatioReverse[e] - n.slowDownRatioReverse[e] * n.timeDiff / 10), n.speedDecelerationRatioAbs[e] = Math.abs(n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]), n.distanceOffset[e] = n.lastFlickSpeed[e] * n.speedDecelerationRatio[e] * n.timeDiff, Dt[e] += n.distanceOffset[e]);
        },
        panAnimLoop: function panAnimLoop() {
          return nn.zoomPan && (nn.zoomPan.raf = R(n.panAnimLoop), n.now = Nt(), n.timeDiff = n.now - n.lastNow, n.lastNow = n.now, n.calculateAnimOffset("x"), n.calculateAnimOffset("y"), Ht(), n.calculateOverBoundsAnimOffset("x"), n.calculateOverBoundsAnimOffset("y"), .05 > n.speedDecelerationRatioAbs.x && .05 > n.speedDecelerationRatioAbs.y) ? (an("zoomPan"), void 0) : void 0;
        }
      };
      return n;
    },
        Wn = function Wn(e) {
      return e.calculateSwipeSpeed("y"), it = a.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, .05 >= Math.abs(e.lastFlickSpeed.x) && .05 >= Math.abs(e.lastFlickSpeed.y) ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0) : (rn("zoomPan"), e.lastNow = Nt(), e.panAnimLoop(), void 0);
    },
        Gn = function Gn(e, t) {
      var n;
      at || (Zt = m);
      var i;

      if ("swipe" === e) {
        var r = yn.x - vn.x;
        r > dn && (10 > t.lastFlickDist.x || t.lastFlickOffset.x > 20) ? i = -1 : -dn > r && (10 > t.lastFlickDist.x || -20 > t.lastFlickOffset.x) && (i = 1);
      }

      var l;
      i && (m += i, 0 > m ? (m = s.loop ? vt() - 1 : 0, l = !0) : m >= vt() && (m = s.loop ? 0 : vt() - 1, l = !0), (!l || s.loop) && (At += i, Mt -= i, n = !0));
      var u,
          c = St.x * Mt,
          d = Math.abs(c - In.x);
      return n || c > In.x == t.lastFlickSpeed.x > 0 ? (u = Math.abs(t.lastFlickSpeed.x) > 0 ? d / Math.abs(t.lastFlickSpeed.x) : 333, u = Math.min(u, 400), u = Math.max(u, 250)) : u = 333, Zt === m && (n = !1), at = !0, sn("mainScroll", In.x, c, u, o.easing.cubic.out, Vt, function () {
        ln(), at = !1, Zt = -1, (n || Zt !== m) && a.updateCurrItem(), zt("mainScrollAnimComplete");
      }), n && a.updateCurrItem(!0), n;
    },
        Xn = function Xn() {
      var e = x;
      a.currItem.minZoom > x ? e = a.currItem.minZoom : x > a.currItem.maxZoom && (e = a.currItem.maxZoom);
      var t,
          n = 1,
          i = ct;
      return ut && !V && !dt && a.currItem.minZoom > x ? (d = !0, a.close(), !0) : (ut && (t = function t(e) {
        _t((n - i) * e + i);
      }), a.zoomTo(e, 0, 300, o.easing.cubic.out, t), !0);
    },
        Kn = {},
        qn = {},
        $n = [],
        jn = {
      index: 0,
      errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
      forceProgressiveLoading: !1,
      preload: [1, 1],
      getNumItemsFn: function getNumItemsFn() {
        return pt.length;
      }
    },
        Jn = function Jn(e, t, n) {
      if (e.src) {
        var i = !n;

        if (i && (e.vGap || (e.vGap = {
          top: 0,
          bottom: 0
        }), zt("parseVerticalMargin", e)), Kn.x = t.x, Kn.y = t.y - e.vGap.top - e.vGap.bottom, i) {
          var o = Kn.x / e.w,
              a = Kn.y / e.h;
          e.fitRatio = a > o ? o : a, e.fillRatio = o > a ? o : a;
          var r = s.scaleMode;
          "orig" === r ? n = 1 : "fit" === r ? n = e.fitRatio : "fill" === r && (n = e.fillRatio), n > 1 && (n = 1), e.initialZoomLevel = n, e.maxZoom = 2, e.doubleTapZoom = 2 * n > 1 ? 2 * n : 1, e.minZoom = n, e.bounds || (e.bounds = {
            center: {},
            max: {},
            min: {}
          });
        }

        if (!n) return;
        qn.x = e.w * n, qn.y = e.h * n;
        var l = e.bounds;
        return l.center.x = Math.round((Kn.x - qn.x) / 2), l.center.y = Math.round((Kn.y - qn.y) / 2) + e.vGap.top, l.max.x = qn.x > Kn.x ? Math.round(Kn.x - qn.x) : l.center.x, l.max.y = qn.y > Kn.y ? Math.round(Kn.y - qn.y) + e.vGap.top : l.center.y, l.min.x = qn.x > Kn.x ? 0 : l.center.x, l.min.y = qn.y > Kn.y ? e.vGap.top : l.center.y, i && n === e.initialZoomLevel && (e.initialPosition = l.center), l;
      }

      return !1;
    },
        Qn = function Qn(e, t, n, i, o, r) {
      var l;
      !o && (E || s.alwaysFadeIn) && (e === m || a.isMainScrollAnimating() || a.isDragging() && !a.isZooming()) && (l = !0), i && (l && (i.style.opacity = 0), t.imageAppended = !0, n.appendChild(i), l && setTimeout(function () {
        i.style.opacity = 1, r && setTimeout(function () {
          t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null);
        }, 500);
      }, 50));
    },
        ei = function ei(e) {
      e.loading = !0, e.loaded = !1;

      var t = e.img = o.createEl("pswp__img", "img"),
          n = function n() {
        e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null;
      };

      return t.onload = n, t.onerror = function () {
        e.loadError = !0, n();
      }, t.src = e.src, t;
    },
        ti = function ti(e, t) {
      return e.loadError ? (t.el.innerHTML = s.errorMsg.replace("%url%", e.src), !0) : void 0;
    },
        ni = function ni() {
      if ($n.length) {
        for (var e, t = 0; $n.length > t; t++) {
          e = $n[t], e.holder.index === e.index && Qn(e.index, e.item, e.baseDiv, e.img);
        }

        $n = [];
      }
    };

    Rt("Controller", {
      publicMethods: {
        lazyLoadItem: function lazyLoadItem(e) {
          e = Ft(e);
          var t = yt(e);
          !t || t.loaded || t.loading || (zt("gettingData", e, t), ei(t));
        },
        initController: function initController() {
          o.extend(s, jn, !0), a.items = pt = n, yt = a.getItemAt, vt = s.getNumItemsFn, xt = s.loop, 3 > vt() && (s.loop = !1), Lt("beforeChange", function (e) {
            var t,
                n = s.preload,
                i = null === e ? !0 : e > 0,
                o = Math.min(n[0], vt()),
                r = Math.min(n[1], vt());

            for (t = 1; (i ? r : o) >= t; t++) {
              a.lazyLoadItem(m + t);
            }

            for (t = 1; (i ? o : r) >= t; t++) {
              a.lazyLoadItem(m - t);
            }
          }), Lt("initialLayout", function () {
            a.currItem.initialLayout = s.getThumbBoundsFn && s.getThumbBoundsFn(m);
          }), Lt("mainScrollAnimComplete", ni), Lt("initialZoomInEnd", ni), Lt("destroy", function () {
            for (var e, t = 0; pt.length > t; t++) {
              e = pt[t], e.container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
            }

            $n = null;
          });
        },
        getItemAt: function getItemAt(e) {
          return e >= 0 ? void 0 !== pt[e] ? pt[e] : !1 : !1;
        },
        allowProgressiveImg: function allowProgressiveImg() {
          return s.forceProgressiveLoading || !E || s.mouseUsed || screen.width > 1200;
        },
        setContent: function setContent(e, t) {
          s.loop && (t = Ft(t));
          var n = a.getItemAt(e.index);
          n && (n.container = null);
          var i,
              r = a.getItemAt(t);

          if (r) {
            if (zt("gettingData", t, r), e.index = t, e.item = r, ti(r, e)) return r.initialPosition.x = r.initialPosition.y = 0, r.initialZoomLevel = r.maxZoom = r.minZoom = 1, ot = null, r.w = 50, r.h = 50, Yt(r), void 0;
            var l = r.container = o.createEl("pswp__zoom-wrap");
            if (r.loaded) i = o.createEl("pswp__img", "img"), i.style.webkitBackfaceVisibility = "hidden", i.style.opacity = 1, i.src = r.src, Qn(t, r, l, i, !0);else {
              if (r.loadComplete = function (n) {
                if (u) {
                  if (n.img.style.webkitBackfaceVisibility = "hidden", e.index === t) {
                    if (ti(n, e)) return n.img = null, void 0;
                    n.imageAppended ? !ht && n.placeholder && (n.placeholder.style.display = "none", n.placeholder = null) : at || ht ? $n.push({
                      item: n,
                      baseDiv: l,
                      img: n.img,
                      index: t,
                      holder: e
                    }) : Qn(t, n, l, n.img, at || ht);
                  }

                  n.loadComplete = null, n.img = null, zt("imageLoadComplete", t, n);
                }
              }, o.features.transform) {
                var c = o.createEl("pswp__img pswp__img--placeholder" + (r.msrc ? "" : " pswp__img--placeholder--blank"), r.msrc ? "img" : "");
                r.msrc && (c.src = r.msrc), c.style.width = r.w + "px", c.style.height = r.h + "px", l.appendChild(c), r.placeholder = c;
              }

              r.loading || ei(r), a.allowProgressiveImg() && (ft ? Qn(t, r, l, r.img, !0, !0) : $n.push({
                item: r,
                baseDiv: l,
                img: r.img,
                index: t,
                holder: e
              }));
            }
            Jn(r, Tt), ft || t !== m ? Yt(r) : (ot = l.style, un(r, i || r.img)), e.el.innerHTML = "", e.el.appendChild(l);
          } else e.el.innerHTML = "";
        },
        cleanSlide: function cleanSlide(e) {
          e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1;
        }
      }
    });

    var ii,
        oi = {},
        ai = function ai(e, t, n) {
      var i = document.createEvent("CustomEvent");
      i.initCustomEvent("pswpTap", !0, !0, {
        origEvent: e,
        target: e.target,
        releasePoint: t,
        pointerType: n || "touch"
      }), e.target.dispatchEvent(i);
    };

    Rt("Tap", {
      publicMethods: {
        initTap: function initTap() {
          Lt("firstTouchStart", a.onTapStart), Lt("touchRelease", a.onTapRelease), Lt("destroy", function () {
            oi = {}, ii = null;
          });
        },
        onTapStart: function onTapStart(e) {
          e.length > 1 && (clearTimeout(ii), ii = null);
        },
        onTapRelease: function onTapRelease(e, t) {
          if (t && !$ && !K && !on) {
            var n = t;
            if (ii && (clearTimeout(ii), ii = null, Kt(n, oi))) return zt("doubleTap", n), void 0;
            var i = e.target.tagName.toLowerCase();
            if ("mouse" === t.type) return ai(e, t, "mouse"), void 0;
            if ("button" === i || o.hasClass(e.target, "pswp__single-tap")) return ai(e, t), void 0;
            qt(oi, n), ii = setTimeout(function () {
              ai(e, t), ii = null;
            }, 300);
          }
        }
      }
    });
    var ri;
    Rt("DesktopZoom", {
      publicMethods: {
        handleMouseWheel: function handleMouseWheel(e) {
          if (a.currItem.fitRatio >= x) return !0;
          if (e.preventDefault(), e.stopPropagation(), ri.x = 0, "deltaX" in e) ri.x = e.deltaX, ri.y = e.deltaY;else if ("wheelDelta" in e) e.wheelDeltaX && (ri.x = -.16 * e.wheelDeltaX), ri.y = e.wheelDeltaY ? -.16 * e.wheelDeltaY : -.16 * e.wheelDelta;else {
            if (!("detail" in e)) return;
            ri.y = e.detail;
          }
          en(x, !0), a.panTo(Dt.x - ri.x, Dt.y - ri.y);
        },
        toggleDesktopZoom: function toggleDesktopZoom(t) {
          t = t || {
            x: Tt.x / 2,
            y: Tt.y / 2 + L
          };
          var n = 1 === x;
          a.mouseZoomedIn = !n, a.zoomTo(n ? a.currItem.initialZoomLevel : 1, t, 333), o[(n ? "remove" : "add") + "Class"](_e2, "pswp--zoomed-in");
        },
        setupDesktopZoom: function setupDesktopZoom(t) {
          ri = {};
          var n = "wheel mousewheel DOMMouseScroll";
          Lt("bindEvents", function () {
            o.bind(_e2, n, a.handleMouseWheel);
          }), Lt("unbindEvents", function () {
            ri && o.unbind(_e2, n, a.handleMouseWheel);
          }), a.mouseZoomedIn = !1;

          var i,
              r = function r() {
            a.mouseZoomedIn && (o.removeClass(_e2, "pswp--zoomed-in"), a.mouseZoomedIn = !1), 1 > x ? o.addClass(_e2, "pswp--zoom-allowed") : o.removeClass(_e2, "pswp--zoom-allowed"), l();
          },
              l = function l() {
            i && (o.removeClass(_e2, "pswp--dragging"), i = !1);
          };

          Lt("resize", r), Lt("afterChange", r), Lt("pointerDown", function () {
            a.mouseZoomedIn && (i = !0, o.addClass(_e2, "pswp--dragging"));
          }), Lt("pointerUp", l), t || r();
        },
        initDesktopZoom: function initDesktopZoom() {
          z || (E ? Lt("mouseUsed", function () {
            a.setupDesktopZoom();
          }) : a.setupDesktopZoom(!0));
        }
      }
    });

    var li,
        si,
        ui,
        ci,
        di,
        mi,
        pi,
        fi,
        hi,
        yi,
        vi,
        xi = {
      history: !0,
      galleryUID: 1
    },
        gi = function gi() {
      return vi.hash.substring(1);
    },
        wi = function wi() {
      li && clearTimeout(li), ui && clearTimeout(ui);
    },
        bi = function bi() {
      var e = gi(),
          t = {};
      if (5 > e.length) return t;

      for (var n = e.split("&"), i = 0; n.length > i; i++) {
        if (n[i]) {
          var o = n[i].split("=");
          2 > o.length || (t[o[0]] = o[1]);
        }
      }

      return t.pid = parseInt(t.pid, 10) - 1, 0 > t.pid && (t.pid = 0), t;
    },
        Ii = function Ii() {
      if (ui && clearTimeout(ui), on || X) return ui = setTimeout(Ii, 500), void 0;
      ci ? clearTimeout(si) : ci = !0;
      var e = pi + "&" + "gid=" + s.galleryUID + "&" + "pid=" + (m + 1);

      if (fi) {
        var t = vi.href.split("#")[0] + "#" + e;
        vi.replace(t);
      } else -1 === vi.hash.indexOf(e) && (yi = !0), vi.hash = e;

      fi = !0, si = setTimeout(function () {
        ci = !1;
      }, 60);
    };

    Rt("History", {
      publicMethods: {
        initHistory: function initHistory() {
          if (o.extend(s, xi, !0), s.history) {
            vi = window.location, yi = !1, hi = !1, fi = !1, pi = gi(), pi.indexOf("gid=") > -1 && (pi = pi.split("&gid=")[0], pi = pi.split("?gid=")[0]), Lt("afterChange", a.updateURL), Lt("unbindEvents", function () {
              o.unbind(window, "hashchange", a.onHashChange);
            });

            var e = function e() {
              mi = !0, hi || (yi ? history.back() : pi ? vi.hash = pi : "pushState" in history ? history.pushState("", document.title, vi.pathname + vi.search) : vi.hash = ""), wi();
            };

            Lt("unbindEvents", function () {
              d && e();
            }), Lt("destroy", function () {
              mi || e();
            }), Lt("firstUpdate", function () {
              m = bi().pid;
            });
            var t = pi.indexOf("pid=");
            t > -1 && (pi = pi.substring(0, t), "&" === pi.slice(-1) && (pi = pi.slice(0, -1))), setTimeout(function () {
              u && o.bind(window, "hashchange", a.onHashChange);
            }, 40);
          }
        },
        onHashChange: function onHashChange() {
          return gi() === pi ? (hi = !0, a.close(), void 0) : (ci || (di = !0, a.goTo(bi().pid), di = !1), void 0);
        },
        updateURL: function updateURL() {
          wi(), di || (fi ? li = setTimeout(Ii, 800) : Ii());
        }
      }
    }), o.extend(a, cn);
  };

  return e;
});
/*! PhotoSwipe Default UI - 4.0.0 - 2014-12-16
* http://photoswipe.com
* Copyright (c) 2014 Dmitry Semenov; */


(function (e, t) {
  "function" == typeof define && define.amd ? define(t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = t() : e.PhotoSwipeUI_Default = t();
})(void 0, function () {
  "use strict";

  var e = function e(_e3, t) {
    var n,
        o,
        i,
        a,
        r,
        l,
        s,
        u,
        c,
        d,
        p,
        m,
        f,
        h,
        v,
        y,
        x = this,
        w = !1,
        g = !0,
        b = !0,
        I = {
      barsSize: {
        top: 44,
        bottom: "auto"
      },
      closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
      timeToIdle: 4e3,
      timeToIdleOutside: 1e3,
      loadingIndicatorDelay: 1e3,
      addCaptionHTMLFn: function addCaptionHTMLFn(e, t) {
        return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1);
      },
      closeEl: !0,
      captionEl: !0,
      fullscreenEl: !0,
      zoomEl: !0,
      shareEl: !0,
      counterEl: !0,
      arrowEl: !0,
      preloaderEl: !0,
      tapToClose: !1,
      tapToToggleControls: !0,
      shareButtons: [{
        id: "facebook",
        label: "Share on Facebook",
        url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
      }, {
        id: "twitter",
        label: "Tweet",
        url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
      }, {
        id: "pinterest",
        label: "Pin it",
        url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
      }, {
        id: "download",
        label: "Download image",
        url: "{{raw_image_url}}",
        download: !0
      }],
      indexIndicatorSep: " / "
    },
        C = function C(e) {
      if (f) return !0;
      e = e || window.event;

      for (var n, o, i = e.target || e.srcElement, a = i.className, r = 0; Z.length > r; r++) {
        n = Z[r], n.onTap && a.indexOf("pswp__" + n.name) > -1 && (n.onTap(), o = !0);
      }

      if (o) {
        e.stopPropagation && e.stopPropagation(), f = !0;
        var l = t.features.isOldAndroid ? 600 : 30;
        h = setTimeout(function () {
          f = !1;
        }, l);
      }
    },
        T = function T() {
      return !_e3.likelyTouchDevice || _e3.options.mouseUsed || screen.width > 1200;
    },
        E = function E() {
      return b = !b, b ? (t.removeClass(s, "pswp__share-modal--fade-in"), setTimeout(function () {
        b && t[(b ? "add" : "remove") + "Class"](s, "pswp__share-modal--hidden");
      }, 300)) : (t[(b ? "add" : "remove") + "Class"](s, "pswp__share-modal--hidden"), setTimeout(function () {
        b || t.addClass(s, "pswp__share-modal--fade-in");
      }, 30)), b || _(), !1;
    },
        D = function D(e) {
      e = e || window.event;
      var t = e.target || e.srcElement;
      return t.href ? t.hasAttribute("download") ? !0 : (window.open(t.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), b || E(), !1) : !1;
    },
        _ = function _() {
      for (var t, n, o = "", i = 0; _e3.options.shareButtons.length > i; i++) {
        t = _e3.options.shareButtons[i], n = t.url.replace("{{url}}", encodeURIComponent(window.location.href)).replace("{{image_url}}", encodeURIComponent(_e3.currItem.src || "")).replace("{{raw_image_url}}", _e3.currItem.src || "").replace("{{text}}", encodeURIComponent(_e3.currItem.title || "")), o += '<a href="' + n + '" target="_blank" class="pswp__share--' + t.id + '"' + (t.download ? "download" : "") + ">" + t.label + "</a>";
      }

      s.children[0].innerHTML = o, s.children[0].onclick = D;
    },
        M = function M(n) {
      for (var o = 0; _e3.options.closeElClasses.length > o; o++) {
        if (t.hasClass(n, "pswp__" + _e3.options.closeElClasses[o])) return !0;
      }
    },
        F = 0,
        S = function S() {
      clearTimeout(y), F = 0, c && x.setIdle(!1);
    },
        k = function k(t) {
      t = t ? t : window.event;
      var n = t.relatedTarget || t.toElement;
      n && "HTML" !== n.nodeName || (clearTimeout(y), y = setTimeout(function () {
        x.setIdle(!0);
      }, _e3.options.timeToIdleOutside));
    },
        O = function O(e) {
      p !== e && (t[(e ? "remove" : "add") + "Class"](d, "pswp__preloader--active"), p = e);
    },
        Z = [{
      name: "caption",
      option: "captionEl",
      onInit: function onInit(e) {
        i = e;
      }
    }, {
      name: "share-modal",
      option: "shareEl",
      onInit: function onInit(e) {
        s = e;
      },
      onTap: function onTap() {
        E();
      }
    }, {
      name: "button--share",
      option: "shareEl",
      onInit: function onInit(e) {
        l = e;
      },
      onTap: function onTap() {
        E();
      }
    }, {
      name: "button--zoom",
      option: "zoomEl",
      onTap: _e3.toggleDesktopZoom
    }, {
      name: "counter",
      option: "counterEl",
      onInit: function onInit(e) {
        r = e;
      }
    }, {
      name: "button--close",
      option: "closeEl",
      onTap: _e3.close
    }, {
      name: "button--arrow--left",
      option: "arrowEl",
      onTap: _e3.prev
    }, {
      name: "button--arrow--right",
      option: "arrowEl",
      onTap: _e3.next
    }, {
      name: "button--fs",
      option: "fullscreenEl",
      onTap: function onTap() {
        n.isFullscreen() ? n.exit() : n.enter();
      }
    }, {
      name: "preloader",
      option: "preloaderEl",
      onInit: function onInit(e) {
        d = e;
      }
    }];

    x.init = function () {
      t.extend(_e3.options, I, !0), o = _e3.scrollWrap.children[1];
      var r = _e3.listen;
      r("onVerticalDrag", function (e) {
        g && .95 > e ? x.hideControls() : !g && e >= .95 && x.showControls();
      });
      var u;
      r("onPinchClose", function (e) {
        g && .9 > e ? (x.hideControls(), u = !0) : u && !g && e > .9 && x.showControls();
      }), r("zoomGestureEnded", function () {
        u = !1, u && !g && x.showControls();
      }), r("beforeChange", x.update), r("doubleTap", function (t) {
        var n = _e3.currItem.initialZoomLevel;
        _e3.getZoomLevel() !== n ? _e3.zoomTo(n, t, 333) : _e3.zoomTo(_e3.currItem.doubleTapZoom, t, 333);
      }), _e3.options.timeToIdle && r("mouseUsed", function () {
        t.bind(document, "mousemove", S), t.bind(document, "mouseout", k), v = setInterval(function () {
          F++, 2 === F && x.setIdle(!0);
        }, _e3.options.timeToIdle / 2);
      }), r("preventDragEvent", function (e, t, n) {
        var o = e.target || e.srcElement;
        o && o.className && e.type.indexOf("mouse") > -1 && (o.className.indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(o.tagName)) && (n.prevent = !1);
      }), r("bindEvents", function () {
        t.bind(o, "pswpTap click", C), t.bind(_e3.scrollWrap, "pswpTap", x.onGlobalTap), _e3.likelyTouchDevice || t.bind(_e3.scrollWrap, "mouseover", x.onMouseOver);
      }), r("unbindEvents", function () {
        b || E(), v && clearInterval(v), t.unbind(document, "mouseout", k), t.unbind(document, "mousemove", S), t.unbind(o, "pswpTap click", C), t.unbind(_e3.scrollWrap, "pswpTap", x.onGlobalTap), t.unbind(_e3.scrollWrap, "mouseover", x.onMouseOver), n && (t.unbind(document, n.eventK, x.updateFullscreen), n.isFullscreen() && (I.hideAnimationDuration = 0, n.exit()), n = null);
      }), r("destroy", function () {
        _e3.options.captionEl && (a && o.removeChild(a), t.removeClass(i, "pswp__caption--empty")), s && (s.children[0].onclick = null), t.removeClass(o, "pswp__ui--over-close"), t.addClass(o, "pswp__ui--hidden"), x.setIdle(!1);
      }), _e3.options.showAnimationDuration || t.removeClass(o, "pswp__ui--hidden"), r("initialZoomIn", function () {
        _e3.options.showAnimationDuration && t.removeClass(o, "pswp__ui--hidden");
      }), r("initialZoomOut", function () {
        t.addClass(o, "pswp__ui--hidden");
      }), r("parseVerticalMargin", function (n) {
        var r = n.vGap;

        if (T()) {
          var l = _e3.options.barsSize;
          if (_e3.options.captionEl && "auto" === l.bottom) {
            if (a || (a = t.createEl("pswp__caption pswp__caption--fake"), a.appendChild(t.createEl("pswp__caption__center")), o.insertBefore(a, i), t.addClass(o, "pswp__ui--fit")), _e3.options.addCaptionHTMLFn(n, a, !0)) {
              var s = a.clientHeight;
              r.bottom = parseInt(s, 10) || 44;
            } else r.bottom = l.top;
          } else r.bottom = l.bottom;
          r.top = l.top;
        } else r.top = r.bottom = 0;
      });

      var c,
          d,
          p,
          f = function f(n) {
        for (var o = n.length, i = 0; o > i; i++) {
          c = n[i], d = c.className;

          for (var a = 0; Z.length > a; a++) {
            p = Z[a], d.indexOf("pswp__" + p.name) > -1 && (_e3.options[p.option] ? (t.removeClass(c, "pswp__element--disabled"), p.onInit && p.onInit(c)) : t.addClass(c, "pswp__element--disabled"));
          }
        }
      };

      f(o.children), f(o.children[0].children), _e3.options.shareEl && l && s && (b = !0), _e3.options.fullscreenEl && (n || (n = x.getFullscreenAPI()), n ? (t.bind(document, n.eventK, x.updateFullscreen), x.updateFullscreen(), t.addClass(_e3.template, "pswp--supports-fs")) : t.removeClass(_e3.template, "pswp--supports-fs")), _e3.options.preloaderEl && (O(!0), r("beforeChange", function () {
        clearTimeout(m), m = setTimeout(function () {
          _e3.currItem && _e3.currItem.loading ? (!_e3.allowProgressiveImg() || _e3.currItem.img && !_e3.currItem.img.naturalWidth) && O(!1) : O(!0);
        }, _e3.options.loadingIndicatorDelay);
      }), r("imageLoadComplete", function (t, n) {
        _e3.currItem === n && O(!0);
      }));
    }, x.setIdle = function (e) {
      c = e, t[(e ? "add" : "remove") + "Class"](o, "pswp__ui--idle");
    }, x.update = function () {
      g && _e3.currItem ? (x.updateIndexIndicator(), _e3.options.captionEl && (_e3.options.addCaptionHTMLFn(_e3.currItem, i), _e3.currItem.title ? t.removeClass(i, "pswp__caption--empty") : t.addClass(i, "pswp__caption--empty")), w = !0) : w = !1;
    }, x.updateFullscreen = function () {
      t[(n.isFullscreen() ? "add" : "remove") + "Class"](_e3.template, "pswp--fs");
    }, x.updateIndexIndicator = function () {
      _e3.options.counterEl && (r.innerHTML = _e3.getCurrentIndex() + 1 + _e3.options.indexIndicatorSep + _e3.options.getNumItemsFn());
    }, x.onGlobalTap = function (n) {
      n = n || window.event;
      var o = n.target || n.srcElement;
      if (!f) if (n.detail && "mouse" === n.detail.pointerType) M(o) && _e3.close(), t.hasClass(o, "pswp__img") && (1 === _e3.getZoomLevel() && _e3.getZoomLevel() <= _e3.currItem.fitRatio ? _e3.close() : _e3.toggleDesktopZoom(n.detail.releasePoint));else if (_e3.options.tapToToggleControls && (g ? x.hideControls() : x.showControls()), _e3.options.tapToClose && (t.hasClass(o, "pswp__img") || M(o))) return _e3.close(), void 0;
    }, x.onMouseOver = function (e) {
      e = e || window.event;
      var n = e.target || e.srcElement;
      M(n) ? t.addClass(o, "pswp__ui--over-close") : t.removeClass(o, "pswp__ui--over-close");
    }, x.hideControls = function () {
      t.addClass(o, "pswp__ui--hidden"), g = !1;
    }, x.showControls = function () {
      g = !0, w || x.update(), t.removeClass(o, "pswp__ui--hidden");
    }, x.supportsFullscreen = function () {
      var e = document;
      return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen);
    }, x.getFullscreenAPI = function () {
      var t,
          n = document.documentElement,
          o = "fullscreenchange";
      return n.requestFullscreen ? t = {
        enterK: "requestFullscreen",
        exitK: "exitFullscreen",
        elementK: "fullscreenElement",
        eventK: o
      } : n.mozRequestFullScreen ? t = {
        enterK: "mozRequestFullScreen",
        exitK: "mozCancelFullScreen",
        elementK: "mozFullScreenElement",
        eventK: "moz" + o
      } : n.webkitRequestFullscreen ? t = {
        enterK: "webkitRequestFullscreen",
        exitK: "webkitExitFullscreen",
        elementK: "webkitFullscreenElement",
        eventK: "webkit" + o
      } : n.msRequestFullscreen && (t = {
        enterK: "msRequestFullscreen",
        exitK: "msExitFullscreen",
        elementK: "msFullscreenElement",
        eventK: "MSFullscreenChange"
      }), t && (t.enter = function () {
        return u = _e3.options.closeOnScroll, _e3.options.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? _e3.template[this.enterK]() : (_e3.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT), void 0);
      }, t.exit = function () {
        return _e3.options.closeOnScroll = u, document[this.exitK]();
      }, t.isFullscreen = function () {
        return document[this.elementK];
      }), t;
    };
  };

  return e;
});
/*!
 * VERSION: 1.15.1
 * DATE: 2015-01-20
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/


var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : void 0 || window;

(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";

  _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
    var s = function s(t) {
      var e,
          i = [],
          s = t.length;

      for (e = 0; e !== s; i.push(t[e++])) {
        ;
      }

      return i;
    },
        r = function r(t, e, s) {
      i.call(this, t, e, s), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render;
    },
        n = 1e-10,
        a = i._internals,
        o = a.isSelector,
        h = a.isArray,
        l = r.prototype = i.to({}, .1, {}),
        _ = [];

    r.version = "1.15.1", l.constructor = r, l.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, l.invalidate = function () {
      return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this);
    }, l.updateTo = function (t, e) {
      var s,
          r = this.ratio,
          n = this.vars.immediateRender || t.immediateRender;
      e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));

      for (s in t) {
        this.vars[s] = t[s];
      }

      if (this._initted || n) if (e) this._initted = !1, n && this.render(0, !0, !0);else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
        var a = this._time;
        this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1);
      } else if (this._time > 0 || n) {
        this._initted = !1, this._init();

        for (var o, h = 1 / (1 - r), l = this._firstPT; l;) {
          o = l.s + l.c, l.c *= h, l.s = o - l.c, l = l._next;
        }
      }
      return this;
    }, l.render = function (t, e, i) {
      this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
      var s,
          r,
          o,
          h,
          l,
          u,
          p,
          c,
          f = this._dirty ? this.totalDuration() : this._totalDuration,
          m = this._time,
          d = this._totalTime,
          g = this._cycle,
          v = this._duration,
          y = this._rawPrevTime;
      if (t >= f ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete"), 0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > y || y === n) && y !== t && (i = !0, y > n && (r = "onReverseComplete")), this._rawPrevTime = c = !e || t || y === t ? t : n)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== d || 0 === v && y > 0 && y !== n) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = c = !e || t || y === t ? t : n)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = v + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : 0 > this._time && (this._time = 0)), this._easeType ? (l = this._time / v, u = this._easeType, p = this._easePower, (1 === u || 3 === u && l >= .5) && (l = 1 - l), 3 === u && (l *= 2), 1 === p ? l *= l : 2 === p ? l *= l * l : 3 === p ? l *= l * l * l : 4 === p && (l *= l * l * l * l), this.ratio = 1 === u ? 1 - l : 2 === u ? l : .5 > this._time / v ? l / 2 : 1 - l / 2) : this.ratio = this._ease.getRatio(this._time / v)), m === this._time && !i && g === this._cycle) return d !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _)), void 0;

      if (!this._initted) {
        if (this._init(), !this._initted || this._gc) return;
        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = d, this._rawPrevTime = y, this._cycle = g, a.lazyTweens.push(this), this._lazy = [t, e], void 0;
        this._time && !s ? this.ratio = this._ease.getRatio(this._time / v) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
      }

      for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === d && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _))), o = this._firstPT; o;) {
        o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
      }

      this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== d || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _)), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || _)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || _), 0 === v && this._rawPrevTime === n && c !== n && (this._rawPrevTime = 0));
    }, r.to = function (t, e, i) {
      return new r(t, e, i);
    }, r.from = function (t, e, i) {
      return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i);
    }, r.fromTo = function (t, e, i, s) {
      return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new r(t, e, s);
    }, r.staggerTo = r.allTo = function (t, e, n, a, l, u, p) {
      a = a || 0;

      var c,
          f,
          m,
          d,
          g = n.delay || 0,
          v = [],
          y = function y() {
        n.onComplete && n.onComplete.apply(n.onCompleteScope || this, arguments), l.apply(p || this, u || _);
      };

      for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = s(t))), t = t || [], 0 > a && (t = s(t), t.reverse(), a *= -1), c = t.length - 1, m = 0; c >= m; m++) {
        f = {};

        for (d in n) {
          f[d] = n[d];
        }

        f.delay = g, m === c && l && (f.onComplete = y), v[m] = new r(t[m], e, f), g += a;
      }

      return v;
    }, r.staggerFrom = r.allFrom = function (t, e, i, s, n, a, o) {
      return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, s, n, a, o);
    }, r.staggerFromTo = r.allFromTo = function (t, e, i, s, n, a, o, h) {
      return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, s, n, a, o, h);
    }, r.delayedCall = function (t, e, i, s, n) {
      return new r(e, 0, {
        delay: t,
        onComplete: e,
        onCompleteParams: i,
        onCompleteScope: s,
        onReverseComplete: e,
        onReverseCompleteParams: i,
        onReverseCompleteScope: s,
        immediateRender: !1,
        useFrames: n,
        overwrite: 0
      });
    }, r.set = function (t, e) {
      return new r(t, 0, e);
    }, r.isTweening = function (t) {
      return i.getTweensOf(t, !0).length > 0;
    };

    var u = function u(t, e) {
      for (var s = [], r = 0, n = t._first; n;) {
        n instanceof i ? s[r++] = n : (e && (s[r++] = n), s = s.concat(u(n, e)), r = s.length), n = n._next;
      }

      return s;
    },
        p = r.getAllTweens = function (e) {
      return u(t._rootTimeline, e).concat(u(t._rootFramesTimeline, e));
    };

    r.killAll = function (t, i, s, r) {
      null == i && (i = !0), null == s && (s = !0);

      var n,
          a,
          o,
          h = p(0 != r),
          l = h.length,
          _ = i && s && r;

      for (o = 0; l > o; o++) {
        a = h[o], (_ || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1));
      }
    }, r.killChildTweensOf = function (t, e) {
      if (null != t) {
        var n,
            l,
            _,
            u,
            p,
            c = a.tweenLookup;

        if ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = s(t)), h(t)) for (u = t.length; --u > -1;) {
          r.killChildTweensOf(t[u], e);
        } else {
          n = [];

          for (_ in c) {
            for (l = c[_].target.parentNode; l;) {
              l === t && (n = n.concat(c[_].tweens)), l = l.parentNode;
            }
          }

          for (p = n.length, u = 0; p > u; u++) {
            e && n[u].totalTime(n[u].totalDuration()), n[u]._enabled(!1, !1);
          }
        }
      }
    };

    var c = function c(t, i, s, r) {
      i = i !== !1, s = s !== !1, r = r !== !1;

      for (var n, a, o = p(r), h = i && s && r, l = o.length; --l > -1;) {
        a = o[l], (h || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t);
      }
    };

    return r.pauseAll = function (t, e, i) {
      c(!0, t, e, i);
    }, r.resumeAll = function (t, e, i) {
      c(!1, t, e, i);
    }, r.globalTimeScale = function (e) {
      var s = t._rootTimeline,
          r = i.ticker.time;
      return arguments.length ? (e = e || n, s._startTime = r - (r - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, r = i.ticker.frame, s._startTime = r - (r - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale;
    }, l.progress = function (t) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration();
    }, l.totalProgress = function (t) {
      return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration();
    }, l.time = function (t, e) {
      return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time;
    }, l.duration = function (e) {
      return arguments.length ? t.prototype.duration.call(this, e) : this._duration;
    }, l.totalDuration = function (t) {
      return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration);
    }, l.repeat = function (t) {
      return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat;
    }, l.repeatDelay = function (t) {
      return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay;
    }, l.yoyo = function (t) {
      return arguments.length ? (this._yoyo = t, this) : this._yoyo;
    }, r;
  }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
    var s = function s(t) {
      e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
      var i,
          s,
          r = this.vars;

      for (s in r) {
        i = r[s], h(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
      }

      h(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger);
    },
        r = 1e-10,
        n = i._internals,
        a = s._internals = {},
        o = n.isSelector,
        h = n.isArray,
        l = n.lazyTweens,
        _ = n.lazyRender,
        u = [],
        p = _gsScope._gsDefine.globals,
        c = function c(t) {
      var e,
          i = {};

      for (e in t) {
        i[e] = t[e];
      }

      return i;
    },
        f = a.pauseCallback = function (t, e, i, s) {
      var r = t._timeline,
          n = r._totalTime;
      !e && this._forcingPlayhead || r._rawPrevTime === t._startTime || (r.pause(t._startTime), e && e.apply(s || r, i || u), this._forcingPlayhead && r.seek(n));
    },
        m = function m(t) {
      var e,
          i = [],
          s = t.length;

      for (e = 0; e !== s; i.push(t[e++])) {
        ;
      }

      return i;
    },
        d = s.prototype = new e();

    return s.version = "1.15.1", d.constructor = s, d.kill()._gc = d._forcingPlayhead = !1, d.to = function (t, e, s, r) {
      var n = s.repeat && p.TweenMax || i;
      return e ? this.add(new n(t, e, s), r) : this.set(t, s, r);
    }, d.from = function (t, e, s, r) {
      return this.add((s.repeat && p.TweenMax || i).from(t, e, s), r);
    }, d.fromTo = function (t, e, s, r, n) {
      var a = r.repeat && p.TweenMax || i;
      return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n);
    }, d.staggerTo = function (t, e, r, n, a, h, l, _) {
      var u,
          p = new s({
        onComplete: h,
        onCompleteParams: l,
        onCompleteScope: _,
        smoothChildTiming: this.smoothChildTiming
      });

      for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = m(t)), n = n || 0, 0 > n && (t = m(t), t.reverse(), n *= -1), u = 0; t.length > u; u++) {
        r.startAt && (r.startAt = c(r.startAt)), p.to(t[u], e, c(r), u * n);
      }

      return this.add(p, a);
    }, d.staggerFrom = function (t, e, i, s, r, n, a, o) {
      return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o);
    }, d.staggerFromTo = function (t, e, i, s, r, n, a, o, h) {
      return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, h);
    }, d.call = function (t, e, s, r) {
      return this.add(i.delayedCall(0, t, e, s), r);
    }, d.set = function (t, e, s) {
      return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s);
    }, s.exportRoot = function (t, e) {
      t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
      var r,
          n,
          a = new s(t),
          o = a._timeline;

      for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) {
        n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
      }

      return o.add(a, 0), a;
    }, d.add = function (r, n, a, o) {
      var l, _, u, p, c, f;

      if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
        if (r instanceof Array || r && r.push && h(r)) {
          for (a = a || "normal", o = o || 0, l = n, _ = r.length, u = 0; _ > u; u++) {
            h(p = r[u]) && (p = new s({
              tweens: p
            })), this.add(p, l), "string" != typeof p && "function" != typeof p && ("sequence" === a ? l = p._startTime + p.totalDuration() / p._timeScale : "start" === a && (p._startTime -= p.delay())), l += o;
          }

          return this._uncache(!0);
        }

        if ("string" == typeof r) return this.addLabel(r, n);
        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
        r = i.delayedCall(0, r);
      }

      if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (c = this, f = c.rawTime() > r._startTime; c._timeline;) {
        f && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1), c = c._timeline;
      }
      return this;
    }, d.remove = function (e) {
      if (e instanceof t) return this._remove(e, !1);

      if (e instanceof Array || e && e.push && h(e)) {
        for (var i = e.length; --i > -1;) {
          this.remove(e[i]);
        }

        return this;
      }

      return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e);
    }, d._remove = function (t, i) {
      e.prototype._remove.call(this, t, i);

      var s = this._last;
      return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this;
    }, d.append = function (t, e) {
      return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
    }, d.insert = d.insertMultiple = function (t, e, i, s) {
      return this.add(t, e || 0, i, s);
    }, d.appendMultiple = function (t, e, i, s) {
      return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s);
    }, d.addLabel = function (t, e) {
      return this._labels[t] = this._parseTimeOrLabel(e), this;
    }, d.addPause = function (t, e, s, r) {
      var n = i.delayedCall(0, f, ["{self}", e, s, r], this);
      return n.data = "isPause", this.add(n, t);
    }, d.removeLabel = function (t) {
      return delete this._labels[t], this;
    }, d.getLabelTime = function (t) {
      return null != this._labels[t] ? this._labels[t] : -1;
    }, d._parseTimeOrLabel = function (e, i, s, r) {
      var n;
      if (r instanceof t && r.timeline === this) this.remove(r);else if (r && (r instanceof Array || r.push && h(r))) for (n = r.length; --n > -1;) {
        r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
      }
      if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
      if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());else {
        if (n = e.indexOf("="), -1 === n) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
        i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration();
      }
      return Number(e) + i;
    }, d.seek = function (t, e) {
      return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1);
    }, d.stop = function () {
      return this.paused(!0);
    }, d.gotoAndPlay = function (t, e) {
      return this.play(t, e);
    }, d.gotoAndStop = function (t, e) {
      return this.pause(t, e);
    }, d.render = function (t, e, i) {
      this._gc && this._enabled(!0, !1);
      var s,
          n,
          a,
          o,
          h,
          p = this._dirty ? this.totalDuration() : this._totalDuration,
          c = this._time,
          f = this._startTime,
          m = this._timeScale,
          d = this._paused;

      if (t >= p ? (this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = p + 1e-4) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== c || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (h = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== c && this._first || i || h) {
        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== c && t > 0 && (this._active = !0), 0 === c && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || u)), this._time >= c) for (s = this._first; s && (a = s._next, !this._paused || d);) {
          (s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
        } else for (s = this._last; s && (a = s._prev, !this._paused || d);) {
          (s._active || c >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
        }
        this._onUpdate && (e || (l.length && _(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || u))), o && (this._gc || (f === this._startTime || m !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (n && (l.length && _(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || u)));
      }
    }, d._hasPausedChild = function () {
      for (var t = this._first; t;) {
        if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
        t = t._next;
      }

      return !1;
    }, d.getChildren = function (t, e, s, r) {
      r = r || -9999999999;

      for (var n = [], a = this._first, o = 0; a;) {
        r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
      }

      return n;
    }, d.getTweensOf = function (t, e) {
      var s,
          r,
          n = this._gc,
          a = [],
          o = 0;

      for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1;) {
        (s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
      }

      return n && this._enabled(!1, !0), a;
    }, d.recent = function () {
      return this._recent;
    }, d._contains = function (t) {
      for (var e = t.timeline; e;) {
        if (e === this) return !0;
        e = e.timeline;
      }

      return !1;
    }, d.shiftChildren = function (t, e, i) {
      i = i || 0;

      for (var s, r = this._first, n = this._labels; r;) {
        r._startTime >= i && (r._startTime += t), r = r._next;
      }

      if (e) for (s in n) {
        n[s] >= i && (n[s] += t);
      }
      return this._uncache(!0);
    }, d._kill = function (t, e) {
      if (!t && !e) return this._enabled(!1, !1);

      for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) {
        i[s]._kill(t, e) && (r = !0);
      }

      return r;
    }, d.clear = function (t) {
      var e = this.getChildren(!1, !0, !0),
          i = e.length;

      for (this._time = this._totalTime = 0; --i > -1;) {
        e[i]._enabled(!1, !1);
      }

      return t !== !1 && (this._labels = {}), this._uncache(!0);
    }, d.invalidate = function () {
      for (var e = this._first; e;) {
        e.invalidate(), e = e._next;
      }

      return t.prototype.invalidate.call(this);
    }, d._enabled = function (t, i) {
      if (t === this._gc) for (var s = this._first; s;) {
        s._enabled(t, !0), s = s._next;
      }
      return e.prototype._enabled.call(this, t, i);
    }, d.totalTime = function () {
      this._forcingPlayhead = !0;
      var e = t.prototype.totalTime.apply(this, arguments);
      return this._forcingPlayhead = !1, e;
    }, d.duration = function (t) {
      return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration);
    }, d.totalDuration = function (t) {
      if (!arguments.length) {
        if (this._dirty) {
          for (var e, i, s = 0, r = this._last, n = 999999999999; r;) {
            e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
          }

          this._duration = this._totalDuration = s, this._dirty = !1;
        }

        return this._totalDuration;
      }

      return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this;
    }, d.usesFrames = function () {
      for (var e = this._timeline; e._timeline;) {
        e = e._timeline;
      }

      return e === t._rootFramesTimeline;
    }, d.rawTime = function () {
      return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale;
    }, s;
  }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (t, e, i) {
    var s = function s(e) {
      t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0;
    },
        r = 1e-10,
        n = [],
        a = e._internals,
        o = a.lazyTweens,
        h = a.lazyRender,
        l = new i(null, null, 1, 0),
        _ = s.prototype = new t();

    return _.constructor = s, _.kill()._gc = !1, s.version = "1.15.1", _.invalidate = function () {
      return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this);
    }, _.addCallback = function (t, i, s, r) {
      return this.add(e.delayedCall(0, t, s, r), i);
    }, _.removeCallback = function (t, e) {
      if (t) if (null == e) this._kill(null, t);else for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1;) {
        i[s]._startTime === r && i[s]._enabled(!1, !1);
      }
      return this;
    }, _.removePause = function (e) {
      return this.removeCallback(t._internals.pauseCallback, e);
    }, _.tweenTo = function (t, i) {
      i = i || {};
      var s,
          r,
          a,
          o = {
        ease: l,
        useFrames: this.usesFrames(),
        immediateRender: !1
      };

      for (r in i) {
        o[r] = i[r];
      }

      return o.time = this._parseTimeOrLabel(t), s = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, a = new e(this, s, o), o.onStart = function () {
        a.target.paused(!0), a.vars.time !== a.target.time() && s === a.duration() && a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || a, i.onStartParams || n);
      }, a;
    }, _.tweenFromTo = function (t, e, i) {
      i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
        onComplete: this.seek,
        onCompleteParams: [t],
        onCompleteScope: this
      }, i.immediateRender = i.immediateRender !== !1;
      var s = this.tweenTo(e, i);
      return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001);
    }, _.render = function (t, e, i) {
      this._gc && this._enabled(!0, !1);

      var s,
          a,
          l,
          _,
          u,
          p,
          c = this._dirty ? this.totalDuration() : this._totalDuration,
          f = this._duration,
          m = this._time,
          d = this._totalTime,
          g = this._startTime,
          v = this._timeScale,
          y = this._rawPrevTime,
          T = this._paused,
          w = this._cycle;

      if (t >= c ? (this._locked || (this._totalTime = c, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (a = !0, _ = "onComplete", 0 === this._duration && (0 === t || 0 > y || y === r) && y !== t && this._first && (u = !0, y > r && (_ = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = f, t = f + 1e-4)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === f && y !== r && (y > 0 || 0 > t && y >= 0) && !this._locked) && (_ = "onReverseComplete", a = this._reversed), 0 > t ? (this._active = !1, y >= 0 && this._first && (u = !0), this._rawPrevTime = t) : (this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (u = !0))) : (0 === f && 0 > y && (u = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (p = f + this._repeatDelay, this._cycle = this._totalTime / p >> 0, 0 !== this._cycle && this._cycle === this._totalTime / p && this._cycle--, this._time = this._totalTime - this._cycle * p, this._yoyo && 0 !== (1 & this._cycle) && (this._time = f - this._time), this._time > f ? (this._time = f, t = f + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time))), this._cycle !== w && !this._locked) {
        var x = this._yoyo && 0 !== (1 & w),
            b = x === (this._yoyo && 0 !== (1 & this._cycle)),
            P = this._totalTime,
            S = this._cycle,
            k = this._rawPrevTime,
            R = this._time;
        if (this._totalTime = w * f, w > this._cycle ? x = !x : this._totalTime += f, this._time = m, this._rawPrevTime = 0 === f ? y - 1e-4 : y, this._cycle = w, this._locked = !0, m = x ? 0 : f, this.render(m, e, 0 === f), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || n), b && (m = x ? f + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !T) return;
        this._time = R, this._totalTime = P, this._cycle = S, this._rawPrevTime = k;
      }

      if (!(this._time !== m && this._first || i || u)) return d !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n)), void 0;
      if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || n)), this._time >= m) for (s = this._first; s && (l = s._next, !this._paused || T);) {
        (s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = l;
      } else for (s = this._last; s && (l = s._prev, !this._paused || T);) {
        (s._active || m >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = l;
      }
      this._onUpdate && (e || (o.length && h(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n))), _ && (this._locked || this._gc || (g === this._startTime || v !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (a && (o.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[_] && this.vars[_].apply(this.vars[_ + "Scope"] || this, this.vars[_ + "Params"] || n)));
    }, _.getActive = function (t, e, i) {
      null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
      var s,
          r,
          n = [],
          a = this.getChildren(t, e, i),
          o = 0,
          h = a.length;

      for (s = 0; h > s; s++) {
        r = a[s], r.isActive() && (n[o++] = r);
      }

      return n;
    }, _.getLabelAfter = function (t) {
      t || 0 !== t && (t = this._time);
      var e,
          i = this.getLabelsArray(),
          s = i.length;

      for (e = 0; s > e; e++) {
        if (i[e].time > t) return i[e].name;
      }

      return null;
    }, _.getLabelBefore = function (t) {
      null == t && (t = this._time);

      for (var e = this.getLabelsArray(), i = e.length; --i > -1;) {
        if (t > e[i].time) return e[i].name;
      }

      return null;
    }, _.getLabelsArray = function () {
      var t,
          e = [],
          i = 0;

      for (t in this._labels) {
        e[i++] = {
          time: this._labels[t],
          name: t
        };
      }

      return e.sort(function (t, e) {
        return t.time - e.time;
      }), e;
    }, _.progress = function (t, e) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration();
    }, _.totalProgress = function (t, e) {
      return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration();
    }, _.totalDuration = function (e) {
      return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration);
    }, _.time = function (t, e) {
      return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time;
    }, _.repeat = function (t) {
      return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat;
    }, _.repeatDelay = function (t) {
      return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay;
    }, _.yoyo = function (t) {
      return arguments.length ? (this._yoyo = t, this) : this._yoyo;
    }, _.currentLabel = function (t) {
      return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8);
    }, s;
  }, !0), function () {
    var t = 180 / Math.PI,
        e = [],
        i = [],
        s = [],
        r = {},
        n = _gsScope._gsDefine.globals,
        a = function a(t, e, i, s) {
      this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t;
    },
        o = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
        h = function h(t, e, i, s) {
      var r = {
        a: t
      },
          n = {},
          a = {},
          o = {
        c: s
      },
          h = (t + e) / 2,
          l = (e + i) / 2,
          _ = (i + s) / 2,
          u = (h + l) / 2,
          p = (l + _) / 2,
          c = (p - u) / 8;

      return r.b = h + (t - h) / 4, n.b = u + c, r.c = n.a = (r.b + n.b) / 2, n.c = a.a = (u + p) / 2, a.b = p - c, o.b = _ + (s - _) / 4, a.c = o.a = (a.b + o.b) / 2, [r, n, a, o];
    },
        l = function l(t, r, n, a, o) {
      var l,
          _,
          u,
          p,
          c,
          f,
          m,
          d,
          g,
          v,
          y,
          T,
          w,
          x = t.length - 1,
          b = 0,
          P = t[0].a;

      for (l = 0; x > l; l++) {
        c = t[b], _ = c.a, u = c.d, p = t[b + 1].d, o ? (y = e[l], T = i[l], w = .25 * (T + y) * r / (a ? .5 : s[l] || .5), f = u - (u - _) * (a ? .5 * r : 0 !== y ? w / y : 0), m = u + (p - u) * (a ? .5 * r : 0 !== T ? w / T : 0), d = u - (f + ((m - f) * (3 * y / (y + T) + .5) / 4 || 0))) : (f = u - .5 * (u - _) * r, m = u + .5 * (p - u) * r, d = u - (f + m) / 2), f += d, m += d, c.c = g = f, c.b = 0 !== l ? P : P = c.a + .6 * (c.c - c.a), c.da = u - _, c.ca = g - _, c.ba = P - _, n ? (v = h(_, P, g, u), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, P = m;
      }

      c = t[b], c.b = P, c.c = P + .4 * (c.d - P), c.da = c.d - c.a, c.ca = c.c - c.a, c.ba = P - c.a, n && (v = h(c.a, P, c.c, c.d), t.splice(b, 1, v[0], v[1], v[2], v[3]));
    },
        _ = function _(t, s, r, n) {
      var o,
          h,
          l,
          _,
          u,
          p,
          c = [];

      if (n) for (t = [n].concat(t), h = t.length; --h > -1;) {
        "string" == typeof (p = t[h][s]) && "=" === p.charAt(1) && (t[h][s] = n[s] + Number(p.charAt(0) + p.substr(2)));
      }
      if (o = t.length - 2, 0 > o) return c[0] = new a(t[0][s], 0, 0, t[-1 > o ? 0 : 1][s]), c;

      for (h = 0; o > h; h++) {
        l = t[h][s], _ = t[h + 1][s], c[h] = new a(l, 0, 0, _), r && (u = t[h + 2][s], e[h] = (e[h] || 0) + (_ - l) * (_ - l), i[h] = (i[h] || 0) + (u - _) * (u - _));
      }

      return c[h] = new a(t[h][s], 0, 0, t[h + 1][s]), c;
    },
        u = function u(t, n, a, h, _u2, p) {
      var c,
          f,
          m,
          d,
          g,
          v,
          y,
          T,
          w = {},
          x = [],
          b = p || t[0];
      _u2 = "string" == typeof _u2 ? "," + _u2 + "," : o, null == n && (n = 1);

      for (f in t[0]) {
        x.push(f);
      }

      if (t.length > 1) {
        for (T = t[t.length - 1], y = !0, c = x.length; --c > -1;) {
          if (f = x[c], Math.abs(b[f] - T[f]) > .05) {
            y = !1;
            break;
          }
        }

        y && (t = t.concat(), p && t.unshift(p), t.push(t[1]), p = t[t.length - 3]);
      }

      for (e.length = i.length = s.length = 0, c = x.length; --c > -1;) {
        f = x[c], r[f] = -1 !== _u2.indexOf("," + f + ","), w[f] = _(t, f, r[f], p);
      }

      for (c = e.length; --c > -1;) {
        e[c] = Math.sqrt(e[c]), i[c] = Math.sqrt(i[c]);
      }

      if (!h) {
        for (c = x.length; --c > -1;) {
          if (r[f]) for (m = w[x[c]], v = m.length - 1, d = 0; v > d; d++) {
            g = m[d + 1].da / i[d] + m[d].da / e[d], s[d] = (s[d] || 0) + g * g;
          }
        }

        for (c = s.length; --c > -1;) {
          s[c] = Math.sqrt(s[c]);
        }
      }

      for (c = x.length, d = a ? 4 : 1; --c > -1;) {
        f = x[c], m = w[f], l(m, n, a, h, r[f]), y && (m.splice(0, d), m.splice(m.length - d, d));
      }

      return w;
    },
        p = function p(t, e, i) {
      e = e || "soft";

      var s,
          r,
          n,
          o,
          h,
          l,
          _,
          u,
          p,
          c,
          f,
          m = {},
          d = "cubic" === e ? 3 : 2,
          g = "soft" === e,
          v = [];

      if (g && i && (t = [i].concat(t)), null == t || d + 1 > t.length) throw "invalid Bezier data";

      for (p in t[0]) {
        v.push(p);
      }

      for (l = v.length; --l > -1;) {
        for (p = v[l], m[p] = h = [], c = 0, u = t.length, _ = 0; u > _; _++) {
          s = null == i ? t[_][p] : "string" == typeof (f = t[_][p]) && "=" === f.charAt(1) ? i[p] + Number(f.charAt(0) + f.substr(2)) : Number(f), g && _ > 1 && u - 1 > _ && (h[c++] = (s + h[c - 2]) / 2), h[c++] = s;
        }

        for (u = c - d + 1, c = 0, _ = 0; u > _; _ += d) {
          s = h[_], r = h[_ + 1], n = h[_ + 2], o = 2 === d ? 0 : h[_ + 3], h[c++] = f = 3 === d ? new a(s, r, n, o) : new a(s, (2 * r + s) / 3, (2 * r + n) / 3, n);
        }

        h.length = c;
      }

      return m;
    },
        c = function c(t, e, i) {
      for (var s, r, n, a, o, h, l, _, u, p, c, f = 1 / i, m = t.length; --m > -1;) {
        for (p = t[m], n = p.a, a = p.d - n, o = p.c - n, h = p.b - n, s = r = 0, _ = 1; i >= _; _++) {
          l = f * _, u = 1 - l, s = r - (r = (l * l * a + 3 * u * (l * o + u * h)) * l), c = m * i + _ - 1, e[c] = (e[c] || 0) + s * s;
        }
      }
    },
        f = function f(t, e) {
      e = e >> 0 || 6;

      var i,
          s,
          r,
          n,
          a = [],
          o = [],
          h = 0,
          l = 0,
          _ = e - 1,
          u = [],
          p = [];

      for (i in t) {
        c(t[i], a, e);
      }

      for (r = a.length, s = 0; r > s; s++) {
        h += Math.sqrt(a[s]), n = s % e, p[n] = h, n === _ && (l += h, n = s / e >> 0, u[n] = p, o[n] = l, h = 0, p = []);
      }

      return {
        length: l,
        lengths: o,
        segments: u
      };
    },
        m = _gsScope._gsDefine.plugin({
      propName: "bezier",
      priority: -1,
      version: "1.3.4",
      API: 2,
      global: !0,
      init: function init(t, e, i) {
        this._target = t, e instanceof Array && (e = {
          values: e
        }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
        var s,
            r,
            n,
            a,
            o,
            h = e.values || [],
            l = {},
            _ = h[0],
            c = e.autoRotate || i.vars.orientToBezier;
        this._autoRotate = c ? c instanceof Array ? c : [["x", "y", "rotation", c === !0 ? 0 : Number(c) || 0]] : null;

        for (s in _) {
          this._props.push(s);
        }

        for (n = this._props.length; --n > -1;) {
          s = this._props[n], this._overwriteProps.push(s), r = this._func[s] = "function" == typeof t[s], l[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), o || l[s] !== h[0][s] && (o = l);
        }

        if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : p(h, e.type, l), this._segCount = this._beziers[s].length, this._timeRes) {
          var m = f(this._beziers, this._timeRes);
          this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length;
        }

        if (c = this._autoRotate) for (this._initialRotations = [], c[0] instanceof Array || (this._autoRotate = c = [c]), n = c.length; --n > -1;) {
          for (a = 0; 3 > a; a++) {
            s = c[n][a], this._func[s] = "function" == typeof t[s] ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)] : !1;
          }

          s = c[n][2], this._initialRotations[n] = this._func[s] ? this._func[s].call(this._target) : this._target[s];
        }
        return this._startRatio = i.vars.runBackwards ? 1 : 0, !0;
      },
      set: function set(e) {
        var i,
            s,
            r,
            n,
            a,
            o,
            h,
            l,
            _,
            u,
            p = this._segCount,
            c = this._func,
            f = this._target,
            m = e !== this._startRatio;

        if (this._timeRes) {
          if (_ = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && p - 1 > r) {
            for (l = p - 1; l > r && e >= (this._l2 = _[++r]);) {
              ;
            }

            this._l1 = _[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0];
          } else if (this._l1 > e && r > 0) {
            for (; r > 0 && (this._l1 = _[--r]) >= e;) {
              ;
            }

            0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = _[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si];
          }

          if (i = r, e -= this._l1, r = this._si, e > this._s2 && u.length - 1 > r) {
            for (l = u.length - 1; l > r && e >= (this._s2 = u[++r]);) {
              ;
            }

            this._s1 = u[r - 1], this._si = r;
          } else if (this._s1 > e && r > 0) {
            for (; r > 0 && (this._s1 = u[--r]) >= e;) {
              ;
            }

            0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r;
          }

          o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec;
        } else i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0, o = (e - i * (1 / p)) * p;

        for (s = 1 - o, r = this._props.length; --r > -1;) {
          n = this._props[r], a = this._beziers[n][i], h = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a, this._round[n] && (h = Math.round(h)), c[n] ? f[n](h) : f[n] = h;
        }

        if (this._autoRotate) {
          var d,
              g,
              v,
              y,
              T,
              w,
              x,
              b = this._autoRotate;

          for (r = b.length; --r > -1;) {
            n = b[r][2], w = b[r][3] || 0, x = b[r][4] === !0 ? 1 : t, a = this._beziers[b[r][0]], d = this._beziers[b[r][1]], a && d && (a = a[i], d = d[i], g = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, g += (y - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, v = d.a + (d.b - d.a) * o, T = d.b + (d.c - d.b) * o, v += (T - v) * o, T += (d.c + (d.d - d.c) * o - T) * o, h = m ? Math.atan2(T - v, y - g) * x + w : this._initialRotations[r], c[n] ? f[n](h) : f[n] = h);
          }
        }
      }
    }),
        d = m.prototype;

    m.bezierThrough = u, m.cubicToQuadratic = h, m._autoCSS = !0, m.quadraticToCubic = function (t, e, i) {
      return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i);
    }, m._cssRegister = function () {
      var t = n.CSSPlugin;

      if (t) {
        var e = t._internals,
            i = e._parseToProxy,
            s = e._setPluginRatio,
            r = e.CSSPropTween;

        e._registerComplexSpecialProp("bezier", {
          parser: function parser(t, e, n, a, o, h) {
            e instanceof Array && (e = {
              values: e
            }), h = new m();

            var l,
                _,
                u,
                p = e.values,
                c = p.length - 1,
                f = [],
                d = {};

            if (0 > c) return o;

            for (l = 0; c >= l; l++) {
              u = i(t, p[l], a, o, h, c !== l), f[l] = u.end;
            }

            for (_ in e) {
              d[_] = e[_];
            }

            return d.values = f, o = new r(t, "bezier", 0, 0, u.pt, 2), o.data = u, o.plugin = h, o.setRatio = s, 0 === d.autoRotate && (d.autoRotate = !0), !d.autoRotate || d.autoRotate instanceof Array || (l = d.autoRotate === !0 ? 0 : Number(d.autoRotate), d.autoRotate = null != u.end.left ? [["left", "top", "rotation", l, !1]] : null != u.end.x ? [["x", "y", "rotation", l, !1]] : !1), d.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform), h._onInitTween(u.proxy, d, a._tween), o;
          }
        });
      }
    }, d._roundProps = function (t, e) {
      for (var i = this._overwriteProps, s = i.length; --s > -1;) {
        (t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e);
      }
    }, d._kill = function (t) {
      var e,
          i,
          s = this._props;

      for (e in this._beziers) {
        if (e in t) for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) {
          s[i] === e && s.splice(i, 1);
        }
      }

      return this._super._kill.call(this, t);
    };
  }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
    var i,
        s,
        r,
        n,
        a = function a() {
      t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio;
    },
        o = _gsScope._gsDefine.globals,
        h = {},
        l = a.prototype = new t("css");

    l.constructor = a, a.version = "1.15.1", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", l = "px", a.suffixMap = {
      top: l,
      right: l,
      bottom: l,
      left: l,
      width: l,
      height: l,
      fontSize: l,
      padding: l,
      margin: l,
      perspective: l,
      lineHeight: ""
    };

    var _,
        u,
        p,
        c,
        f,
        m,
        d = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
        g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
        v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
        y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
        T = /(?:\d|\-|\+|=|#|\.)*/g,
        w = /opacity *= *([^)]*)/i,
        x = /opacity:([^;]*)/i,
        b = /alpha\(opacity *=.+?\)/i,
        P = /^(rgb|hsl)/,
        S = /([A-Z])/g,
        k = /-([a-z])/gi,
        R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
        A = function A(t, e) {
      return e.toUpperCase();
    },
        C = /(?:Left|Right|Width)/i,
        O = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
        D = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
        M = /,(?=[^\)]*(?:\(|$))/gi,
        z = Math.PI / 180,
        I = 180 / Math.PI,
        F = {},
        E = document,
        N = function N(t) {
      return E.createElementNS ? E.createElementNS("http://www.w3.org/1999/xhtml", t) : E.createElement(t);
    },
        L = N("div"),
        X = N("img"),
        U = a._internals = {
      _specialProps: h
    },
        Y = navigator.userAgent,
        B = function () {
      var t = Y.indexOf("Android"),
          e = N("a");
      return p = -1 !== Y.indexOf("Safari") && -1 === Y.indexOf("Chrome") && (-1 === t || Number(Y.substr(t + 8, 1)) > 3), f = p && 6 > Number(Y.substr(Y.indexOf("Version/") + 8, 1)), c = -1 !== Y.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y)) && (m = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1;
    }(),
        j = function j(t) {
      return w.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
    },
        q = function q(t) {
      window.console && console.log(t);
    },
        V = "",
        G = "",
        W = function W(t, e) {
      e = e || L;
      var i,
          s,
          r = e.style;
      if (void 0 !== r[t]) return t;

      for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];) {
        ;
      }

      return s >= 0 ? (G = 3 === s ? "ms" : i[s], V = "-" + G.toLowerCase() + "-", G + t) : null;
    },
        Z = E.defaultView ? E.defaultView.getComputedStyle : function () {},
        Q = a.getStyle = function (t, e, i, s, r) {
      var n;
      return B || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || Z(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : j(t);
    },
        $ = U.convertToPixels = function (t, i, s, r, n) {
      if ("px" === r || !r) return s;
      if ("auto" === r || !s) return 0;

      var o,
          h,
          l,
          _ = C.test(i),
          u = t,
          p = L.style,
          c = 0 > s;

      if (c && (s = -s), "%" === r && -1 !== i.indexOf("border")) o = s / 100 * (_ ? t.clientWidth : t.clientHeight);else {
        if (p.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== r && u.appendChild) p[_ ? "borderLeftWidth" : "borderTopWidth"] = s + r;else {
          if (u = t.parentNode || E.body, h = u._gsCache, l = e.ticker.frame, h && _ && h.time === l) return h.width * s / 100;
          p[_ ? "width" : "height"] = s + r;
        }
        u.appendChild(L), o = parseFloat(L[_ ? "offsetWidth" : "offsetHeight"]), u.removeChild(L), _ && "%" === r && a.cacheWidths !== !1 && (h = u._gsCache = u._gsCache || {}, h.time = l, h.width = 100 * (o / s)), 0 !== o || n || (o = $(t, i, s, r, !0));
      }
      return c ? -o : o;
    },
        H = U.calculateOffset = function (t, e, i) {
      if ("absolute" !== Q(t, "position", i)) return 0;
      var s = "left" === e ? "Left" : "Top",
          r = Q(t, "margin" + s, i);
      return t["offset" + s] - ($(t, e, parseFloat(r), r.replace(T, "")) || 0);
    },
        K = function K(t, e) {
      var i,
          s,
          r = {};
      if (e = e || Z(t, null)) for (i in e) {
        (-1 === i.indexOf("Transform") || xe === i) && (r[i] = e[i]);
      } else if (e = t.currentStyle || t.style) for (i in e) {
        "string" == typeof i && void 0 === r[i] && (r[i.replace(k, A)] = e[i]);
      }
      return B || (r.opacity = j(t)), s = Me(t, e, !1), r.rotation = s.rotation, r.skewX = s.skewX, r.scaleX = s.scaleX, r.scaleY = s.scaleY, r.x = s.x, r.y = s.y, Se && (r.z = s.z, r.rotationX = s.rotationX, r.rotationY = s.rotationY, r.scaleZ = s.scaleZ), r.filters && delete r.filters, r;
    },
        J = function J(t, e, i, s, r) {
      var n,
          a,
          o,
          h = {},
          l = t.style;

      for (a in i) {
        "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (h[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(y, "") ? n : 0 : H(t, a), void 0 !== l[a] && (o = new ce(l, a, l[a], o)));
      }

      if (s) for (a in s) {
        "className" !== a && (h[a] = s[a]);
      }
      return {
        difs: h,
        firstMPT: o
      };
    },
        te = {
      width: ["Left", "Right"],
      height: ["Top", "Bottom"]
    },
        ee = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
        ie = function ie(t, e, i) {
      var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
          r = te[e],
          n = r.length;

      for (i = i || Z(t, null); --n > -1;) {
        s -= parseFloat(Q(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(Q(t, "border" + r[n] + "Width", i, !0)) || 0;
      }

      return s;
    },
        se = function se(t, e) {
      (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
      var i = t.split(" "),
          s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
          r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
      return null == r ? r = "center" === s ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(y, "")), e.oy = parseFloat(r.replace(y, ""))), s + " " + r + (i.length > 2 ? " " + i[2] : "");
    },
        re = function re(t, e) {
      return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e);
    },
        ne = function ne(t, e) {
      return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t);
    },
        ae = function ae(t, e, i, s) {
      var r,
          n,
          a,
          o,
          h,
          l = 1e-6;
      return null == t ? o = e : "number" == typeof t ? o = t : (r = 360, n = t.split("_"), h = "=" === t.charAt(1), a = (h ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : I) - (h ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)), o = e + a), l > o && o > -l && (o = 0), o;
    },
        oe = {
      aqua: [0, 255, 255],
      lime: [0, 255, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, 255],
      navy: [0, 0, 128],
      white: [255, 255, 255],
      fuchsia: [255, 0, 255],
      olive: [128, 128, 0],
      yellow: [255, 255, 0],
      orange: [255, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [255, 0, 0],
      pink: [255, 192, 203],
      cyan: [0, 255, 255],
      transparent: [255, 255, 255, 0]
    },
        he = function he(t, e, i) {
      return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5;
    },
        le = a.parseColor = function (t) {
      var e, i, s, r, n, a;
      return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), oe[t] ? oe[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), s = t.charAt(3), t = "#" + e + e + i + i + s + s), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(d), r = Number(t[0]) % 360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = he(r + 1 / 3, e, i), t[1] = he(r, e, i), t[2] = he(r - 1 / 3, e, i), t) : (t = t.match(d) || oe.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : oe.black;
    },
        _e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";

    for (l in oe) {
      _e += "|" + l + "\\b";
    }

    _e = RegExp(_e + ")", "gi");

    var ue = function ue(t, e, i, s) {
      if (null == t) return function (t) {
        return t;
      };
      var r,
          n = e ? (t.match(_e) || [""])[0] : "",
          a = t.split(n).join("").match(v) || [],
          o = t.substr(0, t.indexOf(a[0])),
          h = ")" === t.charAt(t.length - 1) ? ")" : "",
          l = -1 !== t.indexOf(" ") ? " " : ",",
          _ = a.length,
          u = _ > 0 ? a[0].replace(d, "") : "";
      return _ ? r = e ? function (t) {
        var e, p, c, f;
        if ("number" == typeof t) t += u;else if (s && M.test(t)) {
          for (f = t.replace(M, "|").split("|"), c = 0; f.length > c; c++) {
            f[c] = r(f[c]);
          }

          return f.join(",");
        }
        if (e = (t.match(_e) || [n])[0], p = t.split(e).join("").match(v) || [], c = p.length, _ > c--) for (; _ > ++c;) {
          p[c] = i ? p[0 | (c - 1) / 2] : a[c];
        }
        return o + p.join(l) + l + e + h + (-1 !== t.indexOf("inset") ? " inset" : "");
      } : function (t) {
        var e, n, p;
        if ("number" == typeof t) t += u;else if (s && M.test(t)) {
          for (n = t.replace(M, "|").split("|"), p = 0; n.length > p; p++) {
            n[p] = r(n[p]);
          }

          return n.join(",");
        }
        if (e = t.match(v) || [], p = e.length, _ > p--) for (; _ > ++p;) {
          e[p] = i ? e[0 | (p - 1) / 2] : a[p];
        }
        return o + e.join(l) + h;
      } : function (t) {
        return t;
      };
    },
        pe = function pe(t) {
      return t = t.split(","), function (e, i, s, r, n, a, o) {
        var h,
            l = (i + "").split(" ");

        for (o = {}, h = 0; 4 > h; h++) {
          o[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0];
        }

        return r.parse(e, o, n, a);
      };
    },
        ce = (U._setPluginRatio = function (t) {
      this.plugin.setRatio(t);

      for (var e, i, s, r, n = this.data, a = n.proxy, o = n.firstMPT, h = 1e-6; o;) {
        e = a[o.v], o.r ? e = Math.round(e) : h > e && e > -h && (e = 0), o.t[o.p] = e, o = o._next;
      }

      if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t) for (o = n.firstMPT; o;) {
        if (i = o.t, i.type) {
          if (1 === i.type) {
            for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++) {
              r += i["xn" + s] + i["xs" + (s + 1)];
            }

            i.e = r;
          }
        } else i.e = i.s + i.xs0;

        o = o._next;
      }
    }, function (t, e, i, s, r) {
      this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s);
    }),
        fe = (U._parseToProxy = function (t, e, i, s, r, n) {
      var a,
          o,
          h,
          l,
          _,
          u = s,
          p = {},
          c = {},
          f = i._transform,
          m = F;

      for (i._transform = null, F = e, s = _ = i.parse(t, e, s, r), F = m, n && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
        if (1 >= s.type && (o = s.p, c[o] = s.s + s.c, p[o] = s.s, n || (l = new ce(s, "s", o, l, s.r), s.c = 0), 1 === s.type)) for (a = s.l; --a > 0;) {
          h = "xn" + a, o = s.p + "_" + h, c[o] = s.data[h], p[o] = s[h], n || (l = new ce(s, h, o, l, s.rxp[h]));
        }
        s = s._next;
      }

      return {
        proxy: p,
        end: c,
        firstMPT: l,
        pt: _
      };
    }, U.CSSPropTween = function (t, e, s, r, a, o, h, l, _, u, p) {
      this.t = t, this.p = e, this.s = s, this.c = r, this.n = h || e, t instanceof fe || n.push(this.n), this.r = l, this.type = o || 0, _ && (this.pr = _, i = !0), this.b = void 0 === u ? s : u, this.e = void 0 === p ? s + r : p, a && (this._next = a, a._prev = this);
    }),
        me = a.parseComplex = function (t, e, i, s, r, n, a, o, h, l) {
      i = i || n || "", a = new fe(t, e, 0, 0, a, l ? 2 : 1, null, !1, o, i, s), s += "";
      var u,
          p,
          c,
          f,
          m,
          v,
          y,
          T,
          w,
          x,
          b,
          S,
          k = i.split(", ").join(",").split(" "),
          R = s.split(", ").join(",").split(" "),
          A = k.length,
          C = _ !== !1;

      for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (k = k.join(" ").replace(M, ", ").split(" "), R = R.join(" ").replace(M, ", ").split(" "), A = k.length), A !== R.length && (k = (n || "").split(" "), A = k.length), a.plugin = h, a.setRatio = l, u = 0; A > u; u++) {
        if (f = k[u], m = R[u], T = parseFloat(f), T || 0 === T) a.appendXtra("", T, re(m, T), m.replace(g, ""), C && -1 !== m.indexOf("px"), !0);else if (r && ("#" === f.charAt(0) || oe[f] || P.test(f))) S = "," === m.charAt(m.length - 1) ? ")," : ")", f = le(f), m = le(m), w = f.length + m.length > 6, w && !B && 0 === m[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(R[u]).join("transparent")) : (B || (w = !1), a.appendXtra(w ? "rgba(" : "rgb(", f[0], m[0] - f[0], ",", !0, !0).appendXtra("", f[1], m[1] - f[1], ",", !0).appendXtra("", f[2], m[2] - f[2], w ? "," : S, !0), w && (f = 4 > f.length ? 1 : f[3], a.appendXtra("", f, (4 > m.length ? 1 : m[3]) - f, S, !1)));else if (v = f.match(d)) {
          if (y = m.match(g), !y || y.length !== v.length) return a;

          for (c = 0, p = 0; v.length > p; p++) {
            b = v[p], x = f.indexOf(b, c), a.appendXtra(f.substr(c, x - c), Number(b), re(y[p], b), "", C && "px" === f.substr(x + b.length, 2), 0 === p), c = x + b.length;
          }

          a["xs" + a.l] += f.substr(c);
        } else a["xs" + a.l] += a.l ? " " + f : f;
      }

      if (-1 !== s.indexOf("=") && a.data) {
        for (S = a.xs0 + a.data.s, u = 1; a.l > u; u++) {
          S += a["xs" + u] + a.data["xn" + u];
        }

        a.e = S + a["xs" + u];
      }

      return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a;
    },
        de = 9;

    for (l = fe.prototype, l.l = l.pr = 0; --de > 0;) {
      l["xn" + de] = 0, l["xs" + de] = "";
    }

    l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function (t, e, i, s, r, n) {
      var a = this,
          o = a.l;
      return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new fe(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
        s: e + i
      }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a);
    };

    var ge = function ge(t, e) {
      e = e || {}, this.p = e.prefix ? W(t) || t : t, h[t] = h[this.p] = this, this.format = e.formatter || ue(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0;
    },
        ve = U._registerComplexSpecialProp = function (t, e, i) {
      "object" != _typeof(e) && (e = {
        parser: i
      });
      var s,
          r,
          n = t.split(","),
          a = e.defaultValue;

      for (i = i || [a], s = 0; n.length > s; s++) {
        e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || a, r = new ge(n[s], e);
      }
    },
        ye = function ye(t) {
      if (!h[t]) {
        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
        ve(t, {
          parser: function parser(t, i, s, r, n, a, l) {
            var _ = o.com.greensock.plugins[e];
            return _ ? (_._cssRegister(), h[s].parse(t, i, s, r, n, a, l)) : (q("Error: " + e + " js file not loaded."), n);
          }
        });
      }
    };

    l = ge.prototype, l.parseComplex = function (t, e, i, s, r, n) {
      var a,
          o,
          h,
          l,
          _,
          u,
          p = this.keyword;

      if (this.multi && (M.test(i) || M.test(e) ? (o = e.replace(M, "|").split("|"), h = i.replace(M, "|").split("|")) : p && (o = [e], h = [i])), h) {
        for (l = h.length > o.length ? h.length : o.length, a = 0; l > a; a++) {
          e = o[a] = o[a] || this.dflt, i = h[a] = h[a] || this.dflt, p && (_ = e.indexOf(p), u = i.indexOf(p), _ !== u && (i = -1 === u ? h : o, i[a] += " " + p));
        }

        e = o.join(", "), i = h.join(", ");
      }

      return me(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n);
    }, l.parse = function (t, e, i, s, n, a) {
      return this.parseComplex(t.style, this.format(Q(t, this.p, r, !1, this.dflt)), this.format(e), n, a);
    }, a.registerSpecialProp = function (t, e, i) {
      ve(t, {
        parser: function parser(t, s, r, n, a, o) {
          var h = new fe(t, r, 0, 0, a, 2, r, !1, i);
          return h.plugin = o, h.setRatio = e(t, s, n._tween, r), h;
        },
        priority: i
      });
    };

    var Te,
        we = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
        xe = W("transform"),
        be = V + "transform",
        Pe = W("transformOrigin"),
        Se = null !== W("perspective"),
        ke = U.Transform = function () {
      this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = a.defaultForce3D !== !1 && Se ? a.defaultForce3D || "auto" : !1;
    },
        Re = window.SVGElement,
        Ae = function Ae(t, e, i) {
      var s,
          r = E.createElementNS("http://www.w3.org/2000/svg", t),
          n = /([a-z])([A-Z])/g;

      for (s in i) {
        r.setAttributeNS(null, s.replace(n, "$1-$2").toLowerCase(), i[s]);
      }

      return e.appendChild(r), r;
    },
        Ce = document.documentElement,
        Oe = function () {
      var t,
          e,
          i,
          s = m || /Android/i.test(Y) && !window.chrome;
      return E.createElementNS && !s && (t = Ae("svg", Ce), e = Ae("rect", t, {
        width: 100,
        height: 50,
        x: 100
      }), i = e.getBoundingClientRect().width, e.style[Pe] = "50% 50%", e.style[xe] = "scaleX(0.5)", s = i === e.getBoundingClientRect().width && !(c && Se), Ce.removeChild(t)), s;
    }(),
        De = function De(t, e, i) {
      var s = t.getBBox();
      e = se(e).split(" "), i.xOrigin = (-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * s.width : parseFloat(e[0])) + s.x, i.yOrigin = (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * s.height : parseFloat(e[1])) + s.y;
    },
        Me = U.getTransform = function (t, e, i, s) {
      if (t._gsTransform && i && !s) return t._gsTransform;

      var n,
          o,
          h,
          l,
          _,
          u,
          p,
          c,
          f,
          m,
          d = i ? t._gsTransform || new ke() : new ke(),
          g = 0 > d.scaleX,
          v = 2e-5,
          y = 1e5,
          T = Se ? parseFloat(Q(t, Pe, e, !1, "0 0 0").split(" ")[2]) || d.zOrigin || 0 : 0,
          w = parseFloat(a.defaultTransformPerspective) || 0;

      if (xe ? o = Q(t, be, e, !0) : t.currentStyle && (o = t.currentStyle.filter.match(O), o = o && 4 === o.length ? [o[0].substr(4), Number(o[2].substr(4)), Number(o[1].substr(4)), o[3].substr(4), d.x || 0, d.y || 0].join(",") : ""), n = !o || "none" === o || "matrix(1, 0, 0, 1, 0, 0)" === o, d.svg = !!(Re && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM)), d.svg && (De(t, Q(t, Pe, r, !1, "50% 50%") + "", d), Te = a.useSVGTransformAttr || Oe, h = t.getAttribute("transform"), n && h && -1 !== h.indexOf("matrix") && (o = h, n = 0)), !n) {
        for (h = (o || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], l = h.length; --l > -1;) {
          _ = Number(h[l]), h[l] = (u = _ - (_ |= 0)) ? (0 | u * y + (0 > u ? -.5 : .5)) / y + _ : _;
        }

        if (16 === h.length) {
          var x,
              b,
              P,
              S,
              k,
              R = h[0],
              A = h[1],
              C = h[2],
              D = h[3],
              M = h[4],
              z = h[5],
              F = h[6],
              E = h[7],
              N = h[8],
              L = h[9],
              X = h[10],
              U = h[12],
              Y = h[13],
              B = h[14],
              j = h[11],
              q = Math.atan2(F, X);
          d.zOrigin && (B = -d.zOrigin, U = N * B - h[12], Y = L * B - h[13], B = X * B + d.zOrigin - h[14]), d.rotationX = q * I, q && (S = Math.cos(-q), k = Math.sin(-q), x = M * S + N * k, b = z * S + L * k, P = F * S + X * k, N = M * -k + N * S, L = z * -k + L * S, X = F * -k + X * S, j = E * -k + j * S, M = x, z = b, F = P), q = Math.atan2(N, X), d.rotationY = q * I, q && (S = Math.cos(-q), k = Math.sin(-q), x = R * S - N * k, b = A * S - L * k, P = C * S - X * k, L = A * k + L * S, X = C * k + X * S, j = D * k + j * S, R = x, A = b, C = P), q = Math.atan2(A, R), d.rotation = q * I, q && (S = Math.cos(-q), k = Math.sin(-q), R = R * S + M * k, b = A * S + z * k, z = A * -k + z * S, F = C * -k + F * S, A = b), d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 && (d.rotationX = d.rotation = 0, d.rotationY += 180), d.scaleX = (0 | Math.sqrt(R * R + A * A) * y + .5) / y, d.scaleY = (0 | Math.sqrt(z * z + L * L) * y + .5) / y, d.scaleZ = (0 | Math.sqrt(F * F + X * X) * y + .5) / y, d.skewX = 0, d.perspective = j ? 1 / (0 > j ? -j : j) : 0, d.x = U, d.y = Y, d.z = B;
        } else if (!(Se && !s && h.length && d.x === h[4] && d.y === h[5] && (d.rotationX || d.rotationY) || void 0 !== d.x && "none" === Q(t, "display", e))) {
          var V = h.length >= 6,
              G = V ? h[0] : 1,
              W = h[1] || 0,
              Z = h[2] || 0,
              $ = V ? h[3] : 1;
          d.x = h[4] || 0, d.y = h[5] || 0, p = Math.sqrt(G * G + W * W), c = Math.sqrt($ * $ + Z * Z), f = G || W ? Math.atan2(W, G) * I : d.rotation || 0, m = Z || $ ? Math.atan2(Z, $) * I + f : d.skewX || 0, Math.abs(m) > 90 && 270 > Math.abs(m) && (g ? (p *= -1, m += 0 >= f ? 180 : -180, f += 0 >= f ? 180 : -180) : (c *= -1, m += 0 >= m ? 180 : -180)), d.scaleX = p, d.scaleY = c, d.rotation = f, d.skewX = m, Se && (d.rotationX = d.rotationY = d.z = 0, d.perspective = w, d.scaleZ = 1);
        }

        d.zOrigin = T;

        for (l in d) {
          v > d[l] && d[l] > -v && (d[l] = 0);
        }
      }

      return i && (t._gsTransform = d), d;
    },
        ze = function ze(t) {
      var e,
          i,
          s = this.data,
          r = -s.rotation * z,
          n = r + s.skewX * z,
          a = 1e5,
          o = (0 | Math.cos(r) * s.scaleX * a) / a,
          h = (0 | Math.sin(r) * s.scaleX * a) / a,
          l = (0 | Math.sin(n) * -s.scaleY * a) / a,
          _ = (0 | Math.cos(n) * s.scaleY * a) / a,
          u = this.t.style,
          p = this.t.currentStyle;

      if (p) {
        i = h, h = -l, l = -i, e = p.filter, u.filter = "";
        var c,
            f,
            d = this.t.offsetWidth,
            g = this.t.offsetHeight,
            v = "absolute" !== p.position,
            y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + h + ", M21=" + l + ", M22=" + _,
            x = s.x + d * s.xPercent / 100,
            b = s.y + g * s.yPercent / 100;

        if (null != s.ox && (c = (s.oxp ? .01 * d * s.ox : s.ox) - d / 2, f = (s.oyp ? .01 * g * s.oy : s.oy) - g / 2, x += c - (c * o + f * h), b += f - (c * l + f * _)), v ? (c = d / 2, f = g / 2, y += ", Dx=" + (c - (c * o + f * h) + x) + ", Dy=" + (f - (c * l + f * _) + b) + ")") : y += ", sizingMethod='auto expand')", u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(D, y) : y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === h && 0 === l && 1 === _ && (v && -1 === y.indexOf("Dx=0, Dy=0") || w.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && u.removeAttribute("filter")), !v) {
          var P,
              S,
              k,
              R = 8 > m ? 1 : -1;

          for (c = s.ieOffsetX || 0, f = s.ieOffsetY || 0, s.ieOffsetX = Math.round((d - ((0 > o ? -o : o) * d + (0 > h ? -h : h) * g)) / 2 + x), s.ieOffsetY = Math.round((g - ((0 > _ ? -_ : _) * g + (0 > l ? -l : l) * d)) / 2 + b), de = 0; 4 > de; de++) {
            S = ee[de], P = p[S], i = -1 !== P.indexOf("px") ? parseFloat(P) : $(this.t, S, parseFloat(P), P.replace(T, "")) || 0, k = i !== s[S] ? 2 > de ? -s.ieOffsetX : -s.ieOffsetY : 2 > de ? c - s.ieOffsetX : f - s.ieOffsetY, u[S] = (s[S] = Math.round(i - k * (0 === de || 2 === de ? 1 : R))) + "px";
          }
        }
      }
    },
        Ie = U.set3DTransformRatio = function (t) {
      var e,
          i,
          s,
          r,
          n,
          a,
          o,
          h,
          l,
          _,
          u,
          p,
          f,
          m,
          d,
          g,
          v,
          y,
          T,
          w,
          x,
          b = this.data,
          P = this.t.style,
          S = b.rotation * z,
          k = b.scaleX,
          R = b.scaleY,
          A = b.scaleZ,
          C = b.x,
          O = b.y,
          D = b.z,
          M = b.perspective;

      if (!(1 !== t && 0 !== t && b.force3D || b.force3D === !0 || b.rotationY || b.rotationX || 1 !== A || M || D)) return Fe.call(this, t), void 0;
      if (c && (m = 1e-4, m > k && k > -m && (k = A = 2e-5), m > R && R > -m && (R = A = 2e-5), !M || b.z || b.rotationX || b.rotationY || (M = 0)), S || b.skewX) d = e = Math.cos(S), g = r = Math.sin(S), b.skewX && (S -= b.skewX * z, d = Math.cos(S), g = Math.sin(S), "simple" === b.skewType && (v = Math.tan(b.skewX * z), v = Math.sqrt(1 + v * v), d *= v, g *= v)), i = -g, n = d;else {
        if (!(b.rotationY || b.rotationX || 1 !== A || M || b.svg)) return P[xe] = (b.xPercent || b.yPercent ? "translate(" + b.xPercent + "%," + b.yPercent + "%) translate3d(" : "translate3d(") + C + "px," + O + "px," + D + "px)" + (1 !== k || 1 !== R ? " scale(" + k + "," + R + ")" : ""), void 0;
        e = n = 1, i = r = 0;
      }
      l = 1, s = a = o = h = _ = u = 0, p = M ? -1 / M : 0, f = b.zOrigin, m = 1e-6, w = ",", x = "0", S = b.rotationY * z, S && (d = Math.cos(S), g = Math.sin(S), o = -g, _ = p * -g, s = e * g, a = r * g, l = d, p *= d, e *= d, r *= d), S = b.rotationX * z, S && (d = Math.cos(S), g = Math.sin(S), v = i * d + s * g, y = n * d + a * g, h = l * g, u = p * g, s = i * -g + s * d, a = n * -g + a * d, l *= d, p *= d, i = v, n = y), 1 !== A && (s *= A, a *= A, l *= A, p *= A), 1 !== R && (i *= R, n *= R, h *= R, u *= R), 1 !== k && (e *= k, r *= k, o *= k, _ *= k), (f || b.svg) && (f && (C += s * -f, O += a * -f, D += l * -f + f), b.svg && (C += b.xOrigin - (b.xOrigin * e + b.yOrigin * i), O += b.yOrigin - (b.xOrigin * r + b.yOrigin * n)), m > C && C > -m && (C = x), m > O && O > -m && (O = x), m > D && D > -m && (D = 0)), T = b.xPercent || b.yPercent ? "translate(" + b.xPercent + "%," + b.yPercent + "%) matrix3d(" : "matrix3d(", T += (m > e && e > -m ? x : e) + w + (m > r && r > -m ? x : r) + w + (m > o && o > -m ? x : o), T += w + (m > _ && _ > -m ? x : _) + w + (m > i && i > -m ? x : i) + w + (m > n && n > -m ? x : n), b.rotationX || b.rotationY ? (T += w + (m > h && h > -m ? x : h) + w + (m > u && u > -m ? x : u) + w + (m > s && s > -m ? x : s), T += w + (m > a && a > -m ? x : a) + w + (m > l && l > -m ? x : l) + w + (m > p && p > -m ? x : p) + w) : T += ",0,0,0,0,1,0,", T += C + w + O + w + D + w + (M ? 1 + -D / M : 1) + ")", P[xe] = T;
    },
        Fe = U.set2DTransformRatio = function (t) {
      var e,
          i,
          s,
          r,
          n,
          a,
          o,
          h,
          l,
          _,
          u,
          p = this.data,
          c = this.t,
          f = c.style,
          m = p.x,
          d = p.y;

      return !(p.rotationX || p.rotationY || p.z || p.force3D === !0 || "auto" === p.force3D && 1 !== t && 0 !== t) || p.svg && Te || !Se ? (r = p.scaleX, n = p.scaleY, p.rotation || p.skewX || p.svg ? (e = p.rotation * z, i = e - p.skewX * z, s = 1e5, a = Math.cos(e) * r, o = Math.sin(e) * r, h = Math.sin(i) * -n, l = Math.cos(i) * n, p.svg && (m += p.xOrigin - (p.xOrigin * a + p.yOrigin * h), d += p.yOrigin - (p.xOrigin * o + p.yOrigin * l), u = 1e-6, u > m && m > -u && (m = 0), u > d && d > -u && (d = 0)), _ = (0 | a * s) / s + "," + (0 | o * s) / s + "," + (0 | h * s) / s + "," + (0 | l * s) / s + "," + m + "," + d + ")", p.svg && Te ? c.setAttribute("transform", "matrix(" + _) : f[xe] = (p.xPercent || p.yPercent ? "translate(" + p.xPercent + "%," + p.yPercent + "%) matrix(" : "matrix(") + _) : f[xe] = (p.xPercent || p.yPercent ? "translate(" + p.xPercent + "%," + p.yPercent + "%) matrix(" : "matrix(") + r + ",0,0," + n + "," + m + "," + d + ")", void 0) : (this.setRatio = Ie, Ie.call(this, t), void 0);
    };

    l = ke.prototype, l.x = l.y = l.z = l.skewX = l.skewY = l.rotation = l.rotationX = l.rotationY = l.zOrigin = l.xPercent = l.yPercent = 0, l.scaleX = l.scaleY = l.scaleZ = 1, ve("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
      parser: function parser(t, e, i, s, n, o, h) {
        if (s._lastParsedTransform === h) return n;
        s._lastParsedTransform = h;

        var l,
            _,
            u,
            p,
            c,
            f,
            m,
            d = s._transform = Me(t, r, !0, h.parseTransform),
            g = t.style,
            v = 1e-6,
            y = we.length,
            T = h,
            w = {};

        if ("string" == typeof T.transform && xe) u = L.style, u[xe] = T.transform, u.display = "block", u.position = "absolute", E.body.appendChild(L), l = Me(L, null, !1), E.body.removeChild(L);else if ("object" == _typeof(T)) {
          if (l = {
            scaleX: ne(null != T.scaleX ? T.scaleX : T.scale, d.scaleX),
            scaleY: ne(null != T.scaleY ? T.scaleY : T.scale, d.scaleY),
            scaleZ: ne(T.scaleZ, d.scaleZ),
            x: ne(T.x, d.x),
            y: ne(T.y, d.y),
            z: ne(T.z, d.z),
            xPercent: ne(T.xPercent, d.xPercent),
            yPercent: ne(T.yPercent, d.yPercent),
            perspective: ne(T.transformPerspective, d.perspective)
          }, m = T.directionalRotation, null != m) if ("object" == _typeof(m)) for (u in m) {
            T[u] = m[u];
          } else T.rotation = m;
          "string" == typeof T.x && -1 !== T.x.indexOf("%") && (l.x = 0, l.xPercent = ne(T.x, d.xPercent)), "string" == typeof T.y && -1 !== T.y.indexOf("%") && (l.y = 0, l.yPercent = ne(T.y, d.yPercent)), l.rotation = ae("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : "rotationZ" in T ? T.rotationZ : d.rotation, d.rotation, "rotation", w), Se && (l.rotationX = ae("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : d.rotationX || 0, d.rotationX, "rotationX", w), l.rotationY = ae("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : d.rotationY || 0, d.rotationY, "rotationY", w)), l.skewX = null == T.skewX ? d.skewX : ae(T.skewX, d.skewX), l.skewY = null == T.skewY ? d.skewY : ae(T.skewY, d.skewY), (_ = l.skewY - d.skewY) && (l.skewX += _, l.rotation += _);
        }

        for (Se && null != T.force3D && (d.force3D = T.force3D, f = !0), d.skewType = T.skewType || d.skewType || a.defaultSkewType, c = d.force3D || d.z || d.rotationX || d.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, c || null == T.scale || (l.scaleZ = 1); --y > -1;) {
          i = we[y], p = l[i] - d[i], (p > v || -v > p || null != T[i] || null != F[i]) && (f = !0, n = new fe(d, i, d[i], p, n), i in w && (n.e = w[i]), n.xs0 = 0, n.plugin = o, s._overwriteProps.push(n.n));
        }

        return p = T.transformOrigin, p && d.svg && (De(t, se(p), l), n = new fe(d, "xOrigin", d.xOrigin, l.xOrigin - d.xOrigin, n, -1, "transformOrigin"), n.b = d.xOrigin, n.e = n.xs0 = l.xOrigin, n = new fe(d, "yOrigin", d.yOrigin, l.yOrigin - d.yOrigin, n, -1, "transformOrigin"), n.b = d.yOrigin, n.e = n.xs0 = l.yOrigin, p = "0px 0px"), (p || Se && c && d.zOrigin) && (xe ? (f = !0, i = Pe, p = (p || Q(t, i, r, !1, "50% 50%")) + "", n = new fe(g, i, 0, 0, n, -1, "transformOrigin"), n.b = g[i], n.plugin = o, Se ? (u = d.zOrigin, p = p.split(" "), d.zOrigin = (p.length > 2 && (0 === u || "0px" !== p[2]) ? parseFloat(p[2]) : u) || 0, n.xs0 = n.e = p[0] + " " + (p[1] || "50%") + " 0px", n = new fe(d, "zOrigin", 0, 0, n, -1, n.n), n.b = u, n.xs0 = n.e = d.zOrigin) : n.xs0 = n.e = p) : se(p + "", d)), f && (s._transformType = d.svg && Te || !c && 3 !== this._transformType ? 2 : 3), n;
      },
      prefix: !0
    }), ve("boxShadow", {
      defaultValue: "0px 0px 0px 0px #999",
      prefix: !0,
      color: !0,
      multi: !0,
      keyword: "inset"
    }), ve("borderRadius", {
      defaultValue: "0px",
      parser: function parser(t, e, i, n, a) {
        e = this.format(e);

        var o,
            h,
            l,
            _,
            u,
            p,
            c,
            f,
            m,
            d,
            g,
            v,
            y,
            T,
            w,
            x,
            b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
            P = t.style;

        for (m = parseFloat(t.offsetWidth), d = parseFloat(t.offsetHeight), o = e.split(" "), h = 0; b.length > h; h++) {
          this.p.indexOf("border") && (b[h] = W(b[h])), u = _ = Q(t, b[h], r, !1, "0px"), -1 !== u.indexOf(" ") && (_ = u.split(" "), u = _[0], _ = _[1]), p = l = o[h], c = parseFloat(u), v = u.substr((c + "").length), y = "=" === p.charAt(1), y ? (f = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), f *= parseFloat(p), g = p.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(p), g = p.substr((f + "").length)), "" === g && (g = s[i] || v), g !== v && (T = $(t, "borderLeft", c, v), w = $(t, "borderTop", c, v), "%" === g ? (u = 100 * (T / m) + "%", _ = 100 * (w / d) + "%") : "em" === g ? (x = $(t, "borderLeft", 1, "em"), u = T / x + "em", _ = w / x + "em") : (u = T + "px", _ = w + "px"), y && (p = parseFloat(u) + f + g, l = parseFloat(_) + f + g)), a = me(P, b[h], u + " " + _, p + " " + l, !1, "0px", a);
        }

        return a;
      },
      prefix: !0,
      formatter: ue("0px 0px 0px 0px", !1, !0)
    }), ve("backgroundPosition", {
      defaultValue: "0 0",
      parser: function parser(t, e, i, s, n, a) {
        var o,
            h,
            l,
            _,
            u,
            p,
            c = "background-position",
            f = r || Z(t, null),
            d = this.format((f ? m ? f.getPropertyValue(c + "-x") + " " + f.getPropertyValue(c + "-y") : f.getPropertyValue(c) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
            g = this.format(e);

        if (-1 !== d.indexOf("%") != (-1 !== g.indexOf("%")) && (p = Q(t, "backgroundImage").replace(R, ""), p && "none" !== p)) {
          for (o = d.split(" "), h = g.split(" "), X.setAttribute("src", p), l = 2; --l > -1;) {
            d = o[l], _ = -1 !== d.indexOf("%"), _ !== (-1 !== h[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - X.width : t.offsetHeight - X.height, o[l] = _ ? parseFloat(d) / 100 * u + "px" : 100 * (parseFloat(d) / u) + "%");
          }

          d = o.join(" ");
        }

        return this.parseComplex(t.style, d, g, n, a);
      },
      formatter: se
    }), ve("backgroundSize", {
      defaultValue: "0 0",
      formatter: se
    }), ve("perspective", {
      defaultValue: "0px",
      prefix: !0
    }), ve("perspectiveOrigin", {
      defaultValue: "50% 50%",
      prefix: !0
    }), ve("transformStyle", {
      prefix: !0
    }), ve("backfaceVisibility", {
      prefix: !0
    }), ve("userSelect", {
      prefix: !0
    }), ve("margin", {
      parser: pe("marginTop,marginRight,marginBottom,marginLeft")
    }), ve("padding", {
      parser: pe("paddingTop,paddingRight,paddingBottom,paddingLeft")
    }), ve("clip", {
      defaultValue: "rect(0px,0px,0px,0px)",
      parser: function parser(t, e, i, s, n, a) {
        var o, h, l;
        return 9 > m ? (h = t.currentStyle, l = 8 > m ? " " : ",", o = "rect(" + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")", e = this.format(e).split(",").join(l)) : (o = this.format(Q(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a);
      }
    }), ve("textShadow", {
      defaultValue: "0px 0px 0px #999",
      color: !0,
      multi: !0
    }), ve("autoRound,strictUnits", {
      parser: function parser(t, e, i, s, r) {
        return r;
      }
    }), ve("border", {
      defaultValue: "0px solid #000",
      parser: function parser(t, e, i, s, n, a) {
        return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", r, !1, "0px") + " " + Q(t, "borderTopStyle", r, !1, "solid") + " " + Q(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a);
      },
      color: !0,
      formatter: function formatter(t) {
        var e = t.split(" ");
        return e[0] + " " + (e[1] || "solid") + " " + (t.match(_e) || ["#000"])[0];
      }
    }), ve("borderWidth", {
      parser: pe("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
    }), ve("float,cssFloat,styleFloat", {
      parser: function parser(t, e, i, s, r) {
        var n = t.style,
            a = "cssFloat" in n ? "cssFloat" : "styleFloat";
        return new fe(n, a, 0, 0, r, -1, i, !1, 0, n[a], e);
      }
    });

    var Ee = function Ee(t) {
      var e,
          i = this.t,
          s = i.filter || Q(this.data, "filter") || "",
          r = 0 | this.s + this.c * t;
      100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = s.replace(b, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(w, "opacity=" + r));
    };

    ve("opacity,alpha,autoAlpha", {
      defaultValue: "1",
      parser: function parser(t, e, i, s, n, a) {
        var o = parseFloat(Q(t, "opacity", r, !1, "1")),
            h = t.style,
            l = "autoAlpha" === i;
        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), l && 1 === o && "hidden" === Q(t, "visibility", r) && 0 !== e && (o = 0), B ? n = new fe(h, "opacity", o, e - o, n) : (n = new fe(h, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = l ? 1 : 0, h.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Ee), l && (n = new fe(h, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", s._overwriteProps.push(n.n), s._overwriteProps.push(i)), n;
      }
    });

    var Ne = function Ne(t, e) {
      e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e));
    },
        Le = function Le(t) {
      if (this.t._gsClassPT = this, 1 === t || 0 === t) {
        this.t.setAttribute("class", 0 === t ? this.b : this.e);

        for (var e = this.data, i = this.t.style; e;) {
          e.v ? i[e.p] = e.v : Ne(i, e.p), e = e._next;
        }

        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null);
      } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
    };

    ve("className", {
      parser: function parser(t, e, s, n, a, o, h) {
        var l,
            _,
            u,
            p,
            c,
            f = t.getAttribute("class") || "",
            m = t.style.cssText;

        if (a = n._classNamePT = new fe(t, s, 0, 0, a, 2), a.setRatio = Le, a.pr = -11, i = !0, a.b = f, _ = K(t, r), u = t._gsClassPT) {
          for (p = {}, c = u.data; c;) {
            p[c.p] = 1, c = c._next;
          }

          u.setRatio(1);
        }

        return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : f.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), n._tween._duration && (t.setAttribute("class", a.e), l = J(t, _, K(t), h, p), t.setAttribute("class", f), a.data = l.firstMPT, t.style.cssText = m, a = a.xfirst = n.parse(t, l.difs, a, o)), a;
      }
    });

    var Xe = function Xe(t) {
      if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
        var e,
            i,
            s,
            r,
            n = this.t.style,
            a = h.transform.parse;
        if ("all" === this.e) n.cssText = "", r = !0;else for (e = this.e.split(" ").join("").split(","), s = e.length; --s > -1;) {
          i = e[s], h[i] && (h[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Pe : h[i].p), Ne(n, i);
        }
        r && (Ne(n, xe), this.t._gsTransform && delete this.t._gsTransform);
      }
    };

    for (ve("clearProps", {
      parser: function parser(t, e, s, r, n) {
        return n = new fe(t, s, 0, 0, n, 2), n.setRatio = Xe, n.e = e, n.pr = -10, n.data = r._tween, i = !0, n;
      }
    }), l = "bezier,throwProps,physicsProps,physics2D".split(","), de = l.length; de--;) {
      ye(l[de]);
    }

    l = a.prototype, l._firstPT = l._lastParsedTransform = l._transform = null, l._onInitTween = function (t, e, o) {
      if (!t.nodeType) return !1;
      this._target = t, this._tween = o, this._vars = e, _ = e.autoRound, i = !1, s = e.suffixMap || a.suffixMap, r = Z(t, ""), n = this._overwriteProps;
      var h,
          l,
          c,
          m,
          d,
          g,
          v,
          y,
          T,
          w = t.style;

      if (u && "" === w.zIndex && (h = Q(t, "zIndex", r), ("auto" === h || "" === h) && this._addLazySet(w, "zIndex", 0)), "string" == typeof e && (m = w.cssText, h = K(t, r), w.cssText = m + ";" + e, h = J(t, h, K(t)).difs, !B && x.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, w.cssText = m), this._firstPT = l = this.parse(t, e, null), this._transformType) {
        for (T = 3 === this._transformType, xe ? p && (u = !0, "" === w.zIndex && (v = Q(t, "zIndex", r), ("auto" === v || "" === v) && this._addLazySet(w, "zIndex", 0)), f && this._addLazySet(w, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (T ? "visible" : "hidden"))) : w.zoom = 1, c = l; c && c._next;) {
          c = c._next;
        }

        y = new fe(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, c), y.setRatio = T && Se ? Ie : xe ? Fe : ze, y.data = this._transform || Me(t, r, !0), n.pop();
      }

      if (i) {
        for (; l;) {
          for (g = l._next, c = m; c && c.pr > l.pr;) {
            c = c._next;
          }

          (l._prev = c ? c._prev : d) ? l._prev._next = l : m = l, (l._next = c) ? c._prev = l : d = l, l = g;
        }

        this._firstPT = m;
      }

      return !0;
    }, l.parse = function (t, e, i, n) {
      var a,
          o,
          l,
          u,
          p,
          c,
          f,
          m,
          d,
          g,
          v = t.style;

      for (a in e) {
        c = e[a], o = h[a], o ? i = o.parse(t, c, a, this, i, n, e) : (p = Q(t, a, r) + "", d = "string" == typeof c, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || d && P.test(c) ? (d || (c = le(c), c = (c.length > 3 ? "rgba(" : "rgb(") + c.join(",") + ")"), i = me(v, a, p, c, !0, "transparent", i, 0, n)) : !d || -1 === c.indexOf(" ") && -1 === c.indexOf(",") ? (l = parseFloat(p), f = l || 0 === l ? p.substr((l + "").length) : "", ("" === p || "auto" === p) && ("width" === a || "height" === a ? (l = ie(t, a, r), f = "px") : "left" === a || "top" === a ? (l = H(t, a, r), f = "px") : (l = "opacity" !== a ? 0 : 1, f = "")), g = d && "=" === c.charAt(1), g ? (u = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), u *= parseFloat(c), m = c.replace(T, "")) : (u = parseFloat(c), m = d ? c.replace(T, "") : ""), "" === m && (m = a in s ? s[a] : f), c = u || 0 === u ? (g ? u + l : u) + m : e[a], f !== m && "" !== m && (u || 0 === u) && l && (l = $(t, a, l, f), "%" === m ? (l /= $(t, a, 100, "%") / 100, e.strictUnits !== !0 && (p = l + "%")) : "em" === m ? l /= $(t, a, 1, "em") : "px" !== m && (u = $(t, a, u, m), m = "px"), g && (u || 0 === u) && (c = u + l + m)), g && (u += l), !l && 0 !== l || !u && 0 !== u ? void 0 !== v[a] && (c || "NaN" != c + "" && null != c) ? (i = new fe(v, a, u || l || 0, 0, i, -1, a, !1, 0, p, c), i.xs0 = "none" !== c || "display" !== a && -1 === a.indexOf("Style") ? c : p) : q("invalid " + a + " tween value: " + e[a]) : (i = new fe(v, a, l, u - l, i, 0, a, _ !== !1 && ("px" === m || "zIndex" === a), 0, p, c), i.xs0 = m)) : i = me(v, a, p, c, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
      }

      return i;
    }, l.setRatio = function (t) {
      var e,
          i,
          s,
          r = this._firstPT,
          n = 1e-6;
      if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time) {
        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6) for (; r;) {
          if (e = r.c * t + r.s, r.r ? e = Math.round(e) : n > e && e > -n && (e = 0), r.type) {
            if (1 === r.type) {
              if (s = r.l, 2 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;else {
                for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) {
                  i += r["xn" + s] + r["xs" + (s + 1)];
                }

                r.t[r.p] = i;
              }
            } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
          } else r.t[r.p] = e + r.xs0;
          r = r._next;
        } else for (; r;) {
          2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
        }
      } else for (; r;) {
        2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next;
      }
    }, l._enableTransforms = function (t) {
      this._transform = this._transform || Me(this._target, r, !0), this._transformType = this._transform.svg && Te || !t && 3 !== this._transformType ? 2 : 3;
    };

    var Ue = function Ue() {
      this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0);
    };

    l._addLazySet = function (t, e, i) {
      var s = this._firstPT = new fe(t, e, 0, 0, this._firstPT, 2);
      s.e = i, s.setRatio = Ue, s.data = this;
    }, l._linkCSSP = function (t, e, i, s) {
      return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t;
    }, l._kill = function (e) {
      var i,
          s,
          r,
          n = e;

      if (e.autoAlpha || e.alpha) {
        n = {};

        for (s in e) {
          n[s] = e[s];
        }

        n.opacity = 1, n.autoAlpha && (n.visibility = 1);
      }

      return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, n);
    };

    var Ye = function Ye(t, e, i) {
      var s, r, n, a;
      if (t.slice) for (r = t.length; --r > -1;) {
        Ye(t[r], e, i);
      } else for (s = t.childNodes, r = s.length; --r > -1;) {
        n = s[r], a = n.type, n.style && (e.push(K(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || Ye(n, e, i);
      }
    };

    return a.cascadeTo = function (t, i, s) {
      var r,
          n,
          a,
          o = e.to(t, i, s),
          h = [o],
          l = [],
          _ = [],
          u = [],
          p = e._internals.reservedProps;

      for (t = o._targets || o.target, Ye(t, l, u), o.render(i, !0), Ye(t, _), o.render(0, !0), o._enabled(!0), r = u.length; --r > -1;) {
        if (n = J(u[r], l[r], _[r]), n.firstMPT) {
          n = n.difs;

          for (a in s) {
            p[a] && (n[a] = s[a]);
          }

          h.push(e.to(u[r], i, n));
        }
      }

      return h;
    }, t.activate([a]), a;
  }, !0), function () {
    var t = _gsScope._gsDefine.plugin({
      propName: "roundProps",
      priority: -1,
      API: 2,
      init: function init(t, e, i) {
        return this._tween = i, !0;
      }
    }),
        e = t.prototype;

    e._onInitAllProps = function () {
      for (var t, e, i, s = this._tween, r = s.vars.roundProps instanceof Array ? s.vars.roundProps : s.vars.roundProps.split(","), n = r.length, a = {}, o = s._propLookup.roundProps; --n > -1;) {
        a[r[n]] = 1;
      }

      for (n = r.length; --n > -1;) {
        for (t = r[n], e = s._firstPT; e;) {
          i = e._next, e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : s._firstPT === e && (s._firstPT = i), e._next = e._prev = null, s._propLookup[t] = o), e = i;
        }
      }

      return !1;
    }, e._add = function (t, e, i, s) {
      this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e);
    };
  }(), _gsScope._gsDefine.plugin({
    propName: "attr",
    API: 2,
    version: "0.3.3",
    init: function init(t, e) {
      var i, s, r;
      if ("function" != typeof t.setAttribute) return !1;
      this._target = t, this._proxy = {}, this._start = {}, this._end = {};

      for (i in e) {
        this._start[i] = this._proxy[i] = s = t.getAttribute(i), r = this._addTween(this._proxy, i, parseFloat(s), e[i], i), this._end[i] = r ? r.s + r.c : e[i], this._overwriteProps.push(i);
      }

      return !0;
    },
    set: function set(t) {
      this._super.setRatio.call(this, t);

      for (var e, i = this._overwriteProps, s = i.length, r = 1 === t ? this._end : t ? this._proxy : this._start; --s > -1;) {
        e = i[s], this._target.setAttribute(e, r[e] + "");
      }
    }
  }), _gsScope._gsDefine.plugin({
    propName: "directionalRotation",
    version: "0.2.1",
    API: 2,
    init: function init(t, e) {
      "object" != _typeof(e) && (e = {
        rotation: e
      }), this.finals = {};
      var i,
          s,
          r,
          n,
          a,
          o,
          h = e.useRadians === !0 ? 2 * Math.PI : 360,
          l = 1e-6;

      for (i in e) {
        "useRadians" !== i && (o = (e[i] + "").split("_"), s = o[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), n = this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, a = n - r, o.length && (s = o.join("_"), -1 !== s.indexOf("short") && (a %= h, a !== a % (h / 2) && (a = 0 > a ? a + h : a - h)), -1 !== s.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * h) % h - (0 | a / h) * h : -1 !== s.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * h) % h - (0 | a / h) * h)), (a > l || -l > a) && (this._addTween(t, i, r, r + a, i), this._overwriteProps.push(i)));
      }

      return !0;
    },
    set: function set(t) {
      var e;
      if (1 !== t) this._super.setRatio.call(this, t);else for (e = this._firstPT; e;) {
        e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next;
      }
    }
  })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (t) {
    var e,
        i,
        s,
        r = _gsScope.GreenSockGlobals || _gsScope,
        n = r.com.greensock,
        a = 2 * Math.PI,
        o = Math.PI / 2,
        h = n._class,
        l = function l(e, i) {
      var s = h("easing." + e, function () {}, !0),
          r = s.prototype = new t();
      return r.constructor = s, r.getRatio = i, s;
    },
        _ = t.register || function () {},
        u = function u(t, e, i, s) {
      var r = h("easing." + t, {
        easeOut: new e(),
        easeIn: new i(),
        easeInOut: new s()
      }, !0);
      return _(r, t), r;
    },
        p = function p(t, e, i) {
      this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t);
    },
        c = function c(e, i) {
      var s = h("easing." + e, function (t) {
        this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1;
      }, !0),
          r = s.prototype = new t();
      return r.constructor = s, r.getRatio = i, r.config = function (t) {
        return new s(t);
      }, s;
    },
        f = u("Back", c("BackOut", function (t) {
      return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
    }), c("BackIn", function (t) {
      return t * t * ((this._p1 + 1) * t - this._p1);
    }), c("BackInOut", function (t) {
      return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
    })),
        m = h("easing.SlowMo", function (t, e, i) {
      e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0;
    }, !0),
        d = m.prototype = new t();

    return d.constructor = m, d.getRatio = function (t) {
      var e = t + (.5 - t) * this._p;
      return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e;
    }, m.ease = new m(.7, .7), d.config = m.config = function (t, e, i) {
      return new m(t, e, i);
    }, e = h("easing.SteppedEase", function (t) {
      t = t || 1, this._p1 = 1 / t, this._p2 = t + 1;
    }, !0), d = e.prototype = new t(), d.constructor = e, d.getRatio = function (t) {
      return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1;
    }, d.config = e.config = function (t) {
      return new e(t);
    }, i = h("easing.RoughEase", function (e) {
      e = e || {};

      for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), c = u, f = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --c > -1;) {
        i = f ? Math.random() : 1 / u * c, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), f ? s += Math.random() * r - .5 * r : c % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = {
          x: i,
          y: s
        };
      }

      for (l.sort(function (t, e) {
        return t.x - e.x;
      }), o = new p(1, 1, null), c = u; --c > -1;) {
        a = l[c], o = new p(a.x, a.y, o);
      }

      this._prev = new p(0, 0, 0 !== o.t ? o : o.next);
    }, !0), d = i.prototype = new t(), d.constructor = i, d.getRatio = function (t) {
      var e = this._prev;

      if (t > e.t) {
        for (; e.next && t >= e.t;) {
          e = e.next;
        }

        e = e.prev;
      } else for (; e.prev && e.t >= t;) {
        e = e.prev;
      }

      return this._prev = e, e.v + (t - e.t) / e.gap * e.c;
    }, d.config = function (t) {
      return new i(t);
    }, i.ease = new i(), u("Bounce", l("BounceOut", function (t) {
      return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
    }), l("BounceIn", function (t) {
      return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375);
    }), l("BounceInOut", function (t) {
      var e = .5 > t;
      return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5;
    })), u("Circ", l("CircOut", function (t) {
      return Math.sqrt(1 - (t -= 1) * t);
    }), l("CircIn", function (t) {
      return -(Math.sqrt(1 - t * t) - 1);
    }), l("CircInOut", function (t) {
      return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    })), s = function (_s2) {
      function s(_x4, _x5, _x6) {
        return _s2.apply(this, arguments);
      }

      s.toString = function () {
        return _s2.toString();
      };

      return s;
    }(function (e, i, s) {
      var r = h("easing." + e, function (t, e) {
        this._p1 = t || 1, this._p2 = e || s, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0);
      }, !0),
          n = r.prototype = new t();
      return n.constructor = r, n.getRatio = i, n.config = function (t, e) {
        return new r(t, e);
      }, r;
    }), u("Elastic", s("ElasticOut", function (t) {
      return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1;
    }, .3), s("ElasticIn", function (t) {
      return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2));
    }, .3), s("ElasticInOut", function (t) {
      return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1;
    }, .45)), u("Expo", l("ExpoOut", function (t) {
      return 1 - Math.pow(2, -10 * t);
    }), l("ExpoIn", function (t) {
      return Math.pow(2, 10 * (t - 1)) - .001;
    }), l("ExpoInOut", function (t) {
      return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)));
    })), u("Sine", l("SineOut", function (t) {
      return Math.sin(t * o);
    }), l("SineIn", function (t) {
      return -Math.cos(t * o) + 1;
    }), l("SineInOut", function (t) {
      return -.5 * (Math.cos(Math.PI * t) - 1);
    })), h("easing.EaseLookup", {
      find: function find(e) {
        return t.map[e];
      }
    }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), f;
  }, !0);
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (t, e) {
  "use strict";

  var i = t.GreenSockGlobals = t.GreenSockGlobals || t;

  if (!i.TweenLite) {
    var s,
        r,
        n,
        a,
        o,
        h = function h(t) {
      var e,
          s = t.split("."),
          r = i;

      for (e = 0; s.length > e; e++) {
        r[s[e]] = r = r[s[e]] || {};
      }

      return r;
    },
        l = h("com.greensock"),
        _ = 1e-10,
        u = function u(t) {
      var e,
          i = [],
          s = t.length;

      for (e = 0; e !== s; i.push(t[e++])) {
        ;
      }

      return i;
    },
        p = function p() {},
        c = function () {
      var t = Object.prototype.toString,
          e = t.call([]);
      return function (i) {
        return null != i && (i instanceof Array || "object" == _typeof(i) && !!i.push && t.call(i) === e);
      };
    }(),
        f = {},
        m = function m(s, r, n, a) {
      this.sc = f[s] ? f[s].sc : [], f[s] = this, this.gsClass = null, this.func = n;
      var o = [];
      this.check = function (l) {
        for (var _, u, p, c, d = r.length, g = d; --d > -1;) {
          (_ = f[r[d]] || new m(r[d], [])).gsClass ? (o[d] = _.gsClass, g--) : l && _.sc.push(this);
        }

        if (0 === g && n) for (u = ("com.greensock." + s).split("."), p = u.pop(), c = h(u.join("."))[p] = this.gsClass = n.apply(n, o), a && (i[p] = c, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function () {
          return c;
        }) : s === e && "undefined" != typeof module && module.exports && (module.exports = c)), d = 0; this.sc.length > d; d++) {
          this.sc[d].check();
        }
      }, this.check(!0);
    },
        d = t._gsDefine = function (t, e, i, s) {
      return new m(t, e, i, s);
    },
        g = l._class = function (t, e, i) {
      return e = e || function () {}, d(t, [], function () {
        return e;
      }, i), e;
    };

    d.globals = i;

    var v = [0, 0, 1, 1],
        y = [],
        T = g("easing.Ease", function (t, e, i, s) {
      this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? v.concat(e) : v;
    }, !0),
        w = T.map = {},
        x = T.register = function (t, e, i, s) {
      for (var r, n, a, o, h = e.split(","), _ = h.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;) {
        for (n = h[_], r = s ? g("easing." + n, null, !0) : l.easing[n] || {}, a = u.length; --a > -1;) {
          o = u[a], w[n + "." + o] = w[o + n] = r[o] = t.getRatio ? t : t[o] || new t();
        }
      }
    };

    for (n = T.prototype, n._calcEnd = !1, n.getRatio = function (t) {
      if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
      var e = this._type,
          i = this._power,
          s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
      return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2;
    }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = s.length; --r > -1;) {
      n = s[r] + ",Power" + r, x(new T(null, null, 1, r), n, "easeOut", !0), x(new T(null, null, 2, r), n, "easeIn" + (0 === r ? ",easeNone" : "")), x(new T(null, null, 3, r), n, "easeInOut");
    }

    w.linear = l.easing.Linear.easeIn, w.swing = l.easing.Quad.easeInOut;
    var b = g("events.EventDispatcher", function (t) {
      this._listeners = {}, this._eventTarget = t || this;
    });
    n = b.prototype, n.addEventListener = function (t, e, i, s, r) {
      r = r || 0;
      var n,
          h,
          l = this._listeners[t],
          _ = 0;

      for (null == l && (this._listeners[t] = l = []), h = l.length; --h > -1;) {
        n = l[h], n.c === e && n.s === i ? l.splice(h, 1) : 0 === _ && r > n.pr && (_ = h + 1);
      }

      l.splice(_, 0, {
        c: e,
        s: i,
        up: s,
        pr: r
      }), this !== a || o || a.wake();
    }, n.removeEventListener = function (t, e) {
      var i,
          s = this._listeners[t];
      if (s) for (i = s.length; --i > -1;) {
        if (s[i].c === e) return s.splice(i, 1), void 0;
      }
    }, n.dispatchEvent = function (t) {
      var e,
          i,
          s,
          r = this._listeners[t];
      if (r) for (e = r.length, i = this._eventTarget; --e > -1;) {
        s = r[e], s && (s.up ? s.c.call(s.s || i, {
          type: t,
          target: i
        }) : s.c.call(s.s || i));
      }
    };

    var P = t.requestAnimationFrame,
        S = t.cancelAnimationFrame,
        k = Date.now || function () {
      return new Date().getTime();
    },
        R = k();

    for (s = ["ms", "moz", "webkit", "o"], r = s.length; --r > -1 && !P;) {
      P = t[s[r] + "RequestAnimationFrame"], S = t[s[r] + "CancelAnimationFrame"] || t[s[r] + "CancelRequestAnimationFrame"];
    }

    g("Ticker", function (t, e) {
      var i,
          s,
          r,
          n,
          h,
          l = this,
          u = k(),
          c = e !== !1 && P,
          f = 500,
          m = 33,
          d = "tick",
          g = function g(t) {
        var e,
            a,
            o = k() - R;
        o > f && (u += o - m), R += o, l.time = (R - u) / 1e3, e = l.time - h, (!i || e > 0 || t === !0) && (l.frame++, h += e + (e >= n ? .004 : n - e), a = !0), t !== !0 && (r = s(g)), a && l.dispatchEvent(d);
      };

      b.call(l), l.time = l.frame = 0, l.tick = function () {
        g(!0);
      }, l.lagSmoothing = function (t, e) {
        f = t || 1 / _, m = Math.min(e, f, 0);
      }, l.sleep = function () {
        null != r && (c && S ? S(r) : clearTimeout(r), s = p, r = null, l === a && (o = !1));
      }, l.wake = function () {
        null !== r ? l.sleep() : l.frame > 10 && (R = k() - f + 5), s = 0 === i ? p : c && P ? P : function (t) {
          return setTimeout(t, 0 | 1e3 * (h - l.time) + 1);
        }, l === a && (o = !0), g(2);
      }, l.fps = function (t) {
        return arguments.length ? (i = t, n = 1 / (i || 60), h = this.time + n, l.wake(), void 0) : i;
      }, l.useRAF = function (t) {
        return arguments.length ? (l.sleep(), c = t, l.fps(i), void 0) : c;
      }, l.fps(t), setTimeout(function () {
        c && (!r || 5 > l.frame) && l.useRAF(!1);
      }, 1500);
    }), n = l.Ticker.prototype = new l.events.EventDispatcher(), n.constructor = l.Ticker;
    var A = g("core.Animation", function (t, e) {
      if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, j) {
        o || a.wake();
        var i = this.vars.useFrames ? B : j;
        i.add(this, i._time), this.vars.paused && this.paused(!0);
      }
    });
    a = A.ticker = new l.Ticker(), n = A.prototype, n._dirty = n._gc = n._initted = n._paused = !1, n._totalTime = n._time = 0, n._rawPrevTime = -1, n._next = n._last = n._onUpdate = n._timeline = n.timeline = null, n._paused = !1;

    var C = function C() {
      o && k() - R > 2e3 && a.wake(), setTimeout(C, 2e3);
    };

    C(), n.play = function (t, e) {
      return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
    }, n.pause = function (t, e) {
      return null != t && this.seek(t, e), this.paused(!0);
    }, n.resume = function (t, e) {
      return null != t && this.seek(t, e), this.paused(!1);
    }, n.seek = function (t, e) {
      return this.totalTime(Number(t), e !== !1);
    }, n.restart = function (t, e) {
      return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0);
    }, n.reverse = function (t, e) {
      return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
    }, n.render = function () {}, n.invalidate = function () {
      return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this;
    }, n.isActive = function () {
      var t,
          e = this._timeline,
          i = this._startTime;
      return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t;
    }, n._enabled = function (t, e) {
      return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1;
    }, n._kill = function () {
      return this._enabled(!1, !1);
    }, n.kill = function (t, e) {
      return this._kill(t, e), this;
    }, n._uncache = function (t) {
      for (var e = t ? this : this.timeline; e;) {
        e._dirty = !0, e = e.timeline;
      }

      return this;
    }, n._swapSelfInParams = function (t) {
      for (var e = t.length, i = t.concat(); --e > -1;) {
        "{self}" === t[e] && (i[e] = this);
      }

      return i;
    }, n.eventCallback = function (t, e, i, s) {
      if ("on" === (t || "").substr(0, 2)) {
        var r = this.vars;
        if (1 === arguments.length) return r[t];
        null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = c(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e);
      }

      return this;
    }, n.delay = function (t) {
      return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay;
    }, n.duration = function (t) {
      return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration);
    }, n.totalDuration = function (t) {
      return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration;
    }, n.time = function (t, e) {
      return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time;
    }, n.totalTime = function (t, e, i) {
      if (o || a.wake(), !arguments.length) return this._totalTime;

      if (this._timeline) {
        if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
          this._dirty && this.totalDuration();
          var s = this._totalDuration,
              r = this._timeline;
          if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline) for (; r._timeline;) {
            r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline;
          }
        }

        this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), I.length && q());
      }

      return this;
    }, n.progress = n.totalProgress = function (t, e) {
      return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration();
    }, n.startTime = function (t) {
      return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime;
    }, n.endTime = function (t) {
      return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale;
    }, n.timeScale = function (t) {
      if (!arguments.length) return this._timeScale;

      if (t = t || _, this._timeline && this._timeline.smoothChildTiming) {
        var e = this._pauseTime,
            i = e || 0 === e ? e : this._timeline.totalTime();
        this._startTime = i - (i - this._startTime) * this._timeScale / t;
      }

      return this._timeScale = t, this._uncache(!1);
    }, n.reversed = function (t) {
      return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed;
    }, n.paused = function (t) {
      if (!arguments.length) return this._paused;

      if (t != this._paused && this._timeline) {
        o || t || a.wake();
        var e = this._timeline,
            i = e.rawTime(),
            s = i - this._pauseTime;
        !t && e.smoothChildTiming && (this._startTime += s, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== s && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0);
      }

      return this._gc && !t && this._enabled(!0, !1), this;
    };
    var O = g("core.SimpleTimeline", function (t) {
      A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0;
    });
    n = O.prototype = new A(), n.constructor = O, n.kill()._gc = !1, n._first = n._last = n._recent = null, n._sortChildren = !1, n.add = n.insert = function (t, e) {
      var i, s;
      if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren) for (s = t._startTime; i && i._startTime > s;) {
        i = i._prev;
      }
      return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this;
    }, n._remove = function (t, e) {
      return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this;
    }, n.render = function (t, e, i) {
      var s,
          r = this._first;

      for (this._totalTime = this._time = this._rawPrevTime = t; r;) {
        s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s;
      }
    }, n.rawTime = function () {
      return o || a.wake(), this._totalTime;
    };

    var D = g("TweenLite", function (e, i, s) {
      if (A.call(this, i, s), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";
      this.target = e = "string" != typeof e ? e : D.selector(e) || e;
      var r,
          n,
          a,
          o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
          h = this.vars.overwrite;
      if (this._overwrite = h = null == h ? Y[D.defaultOverwrite] : "number" == typeof h ? h >> 0 : Y[h], (o || e instanceof Array || e.push && c(e)) && "number" != typeof e[0]) for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++) {
        n = a[r], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(u(n))) : (this._siblings[r] = V(n, this, !1), 1 === h && this._siblings[r].length > 1 && W(n, this, null, 1, this._siblings[r])) : (n = a[r--] = D.selector(n), "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1);
      } else this._propLookup = {}, this._siblings = V(e, this, !1), 1 === h && this._siblings.length > 1 && W(e, this, null, 1, this._siblings);
      (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -_, this.render(-this._delay));
    }, !0),
        M = function M(e) {
      return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType);
    },
        z = function z(t, e) {
      var i,
          s = {};

      for (i in t) {
        U[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!N[i] || N[i] && N[i]._autoCSS) || (s[i] = t[i], delete t[i]);
      }

      t.css = s;
    };

    n = D.prototype = new A(), n.constructor = D, n.kill()._gc = !1, n.ratio = 0, n._firstPT = n._targets = n._overwrittenProps = n._startAt = null, n._notifyPluginsOfEnabled = n._lazy = !1, D.version = "1.15.1", D.defaultEase = n._ease = new T(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = a, D.autoSleep = !0, D.lagSmoothing = function (t, e) {
      a.lagSmoothing(t, e);
    }, D.selector = t.$ || t.jQuery || function (e) {
      var i = t.$ || t.jQuery;
      return i ? (D.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e);
    };

    var I = [],
        F = {},
        E = D._internals = {
      isArray: c,
      isSelector: M,
      lazyTweens: I
    },
        N = D._plugins = {},
        L = E.tweenLookup = {},
        X = 0,
        U = E.reservedProps = {
      ease: 1,
      delay: 1,
      overwrite: 1,
      onComplete: 1,
      onCompleteParams: 1,
      onCompleteScope: 1,
      useFrames: 1,
      runBackwards: 1,
      startAt: 1,
      onUpdate: 1,
      onUpdateParams: 1,
      onUpdateScope: 1,
      onStart: 1,
      onStartParams: 1,
      onStartScope: 1,
      onReverseComplete: 1,
      onReverseCompleteParams: 1,
      onReverseCompleteScope: 1,
      onRepeat: 1,
      onRepeatParams: 1,
      onRepeatScope: 1,
      easeParams: 1,
      yoyo: 1,
      immediateRender: 1,
      repeat: 1,
      repeatDelay: 1,
      data: 1,
      paused: 1,
      reversed: 1,
      autoCSS: 1,
      lazy: 1,
      onOverwrite: 1
    },
        Y = {
      none: 0,
      all: 1,
      auto: 2,
      concurrent: 3,
      allOnStart: 4,
      preexisting: 5,
      "true": 1,
      "false": 0
    },
        B = A._rootFramesTimeline = new O(),
        j = A._rootTimeline = new O(),
        q = E.lazyRender = function () {
      var t,
          e = I.length;

      for (F = {}; --e > -1;) {
        t = I[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
      }

      I.length = 0;
    };

    j._startTime = a.time, B._startTime = a.frame, j._active = B._active = !0, setTimeout(q, 1), A._updateRoot = D.render = function () {
      var t, e, i;

      if (I.length && q(), j.render((a.time - j._startTime) * j._timeScale, !1, !1), B.render((a.frame - B._startTime) * B._timeScale, !1, !1), I.length && q(), !(a.frame % 120)) {
        for (i in L) {
          for (e = L[i].tweens, t = e.length; --t > -1;) {
            e[t]._gc && e.splice(t, 1);
          }

          0 === e.length && delete L[i];
        }

        if (i = j._first, (!i || i._paused) && D.autoSleep && !B._first && 1 === a._listeners.tick.length) {
          for (; i && i._paused;) {
            i = i._next;
          }

          i || a.sleep();
        }
      }
    }, a.addEventListener("tick", A._updateRoot);

    var V = function V(t, e, i) {
      var s,
          r,
          n = t._gsTweenID;
      if (L[n || (t._gsTweenID = n = "t" + X++)] || (L[n] = {
        target: t,
        tweens: []
      }), e && (s = L[n].tweens, s[r = s.length] = e, i)) for (; --r > -1;) {
        s[r] === e && s.splice(r, 1);
      }
      return L[n].tweens;
    },
        G = function G(t, e, i, s) {
      var r,
          n,
          a = t.vars.onOverwrite;
      return a && (r = a(t, e, i, s)), a = D.onOverwrite, a && (n = a(t, e, i, s)), r !== !1 && n !== !1;
    },
        W = function W(t, e, i, s, r) {
      var n, a, o, h;

      if (1 === s || s >= 4) {
        for (h = r.length, n = 0; h > n; n++) {
          if ((o = r[n]) !== e) o._gc || G(o, e) && o._enabled(!1, !1) && (a = !0);else if (5 === s) break;
        }

        return a;
      }

      var l,
          u = e._startTime + _,
          p = [],
          c = 0,
          f = 0 === e._duration;

      for (n = r.length; --n > -1;) {
        (o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (l = l || Z(e, 0, f), 0 === Z(o, l, f) && (p[c++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((f || !o._initted) && 2e-10 >= u - o._startTime || (p[c++] = o)));
      }

      for (n = c; --n > -1;) {
        if (o = p[n], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) {
          if (2 !== s && !G(o, e)) continue;
          o._enabled(!1, !1) && (a = !0);
        }
      }

      return a;
    },
        Z = function Z(t, e, i) {
      for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
        if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
        s = s._timeline;
      }

      return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * _ > n - e ? _ : (n += t.totalDuration() / t._timeScale / r) > e + _ ? 0 : n - e - _;
    };

    n._init = function () {
      var t,
          e,
          i,
          s,
          r,
          n = this.vars,
          a = this._overwrittenProps,
          o = this._duration,
          h = !!n.immediateRender,
          l = n.ease;

      if (n.startAt) {
        this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};

        for (s in n.startAt) {
          r[s] = n.startAt[s];
        }

        if (r.overwrite = !1, r.immediateRender = !0, r.lazy = h && n.lazy !== !1, r.startAt = r.delay = null, this._startAt = D.to(this.target, 0, r), h) if (this._time > 0) this._startAt = null;else if (0 !== o) return;
      } else if (n.runBackwards && 0 !== o) if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;else {
        0 !== this._time && (h = !1), i = {};

        for (s in n) {
          U[s] && "autoCSS" !== s || (i[s] = n[s]);
        }

        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && n.lazy !== !1, i.immediateRender = h, this._startAt = D.to(this.target, 0, i), h) {
          if (0 === this._time) return;
        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
      }

      if (this._ease = l = l ? l instanceof T ? l : "function" == typeof l ? new T(l, n.easeParams) : w[l] || D.defaultEase : D.defaultEase, n.easeParams instanceof Array && l.config && (this._ease = l.config.apply(l, n.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (t = this._targets.length; --t > -1;) {
        this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
      } else e = this._initProps(this.target, this._propLookup, this._siblings, a);
      if (e && D._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards) for (i = this._firstPT; i;) {
        i.s += i.c, i.c = -i.c, i = i._next;
      }
      this._onUpdate = n.onUpdate, this._initted = !0;
    }, n._initProps = function (e, i, s, r) {
      var n, a, o, h, l, _;

      if (null == e) return !1;
      F[e._gsTweenID] && q(), this.vars.css || e.style && e !== t && e.nodeType && N.css && this.vars.autoCSS !== !1 && z(this.vars, e);

      for (n in this.vars) {
        if (_ = this.vars[n], U[n]) _ && (_ instanceof Array || _.push && c(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));else if (N[n] && (h = new N[n]())._onInitTween(e, this.vars[n], this)) {
          for (this._firstPT = l = {
            _next: this._firstPT,
            t: h,
            p: "setRatio",
            s: 0,
            c: 1,
            f: !0,
            n: n,
            pg: !0,
            pr: h._priority
          }, a = h._overwriteProps.length; --a > -1;) {
            i[h._overwriteProps[a]] = this._firstPT;
          }

          (h._priority || h._onInitAllProps) && (o = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0);
        } else this._firstPT = i[n] = l = {
          _next: this._firstPT,
          t: e,
          p: n,
          f: "function" == typeof e[n],
          n: n,
          pg: !1,
          pr: 0
        }, l.s = l.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), l.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - l.s || 0;
        l && l._next && (l._next._prev = l);
      }

      return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && W(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (F[e._gsTweenID] = !0), o);
    }, n.render = function (t, e, i) {
      var s,
          r,
          n,
          a,
          o = this._time,
          h = this._duration,
          l = this._rawPrevTime;
      if (t >= h) this._totalTime = this._time = h, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete"), 0 === h && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > l || l === _ && "isPause" !== this.data) && l !== t && (i = !0, l > _ && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || l === t ? t : _);else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === h && l > 0 && l !== _) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === h && (this._initted || !this.vars.lazy || i) && (l >= 0 && (l !== _ || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || l === t ? t : _)), this._initted || (i = !0);else if (this._totalTime = this._time = t, this._easeType) {
        var u = t / h,
            p = this._easeType,
            c = this._easePower;
        (1 === p || 3 === p && u >= .5) && (u = 1 - u), 3 === p && (u *= 2), 1 === c ? u *= u : 2 === c ? u *= u * u : 3 === c ? u *= u * u * u : 4 === c && (u *= u * u * u * u), this.ratio = 1 === p ? 1 - u : 2 === p ? u : .5 > t / h ? u / 2 : 1 - u / 2;
      } else this.ratio = this._ease.getRatio(t / h);

      if (this._time !== o || i) {
        if (!this._initted) {
          if (this._init(), !this._initted || this._gc) return;
          if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = l, I.push(this), this._lazy = [t, e], void 0;
          this._time && !s ? this.ratio = this._ease.getRatio(this._time / h) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
        }

        for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === h) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y))), n = this._firstPT; n;) {
          n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
        }

        this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || y), 0 === h && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0));
      }
    }, n._kill = function (t, e, i) {
      if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
      e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;

      var s, r, n, a, o, h, l, _, u;

      if ((c(e) || M(e)) && "number" != typeof e[0]) for (s = e.length; --s > -1;) {
        this._kill(t, e[s]) && (h = !0);
      } else {
        if (this._targets) {
          for (s = this._targets.length; --s > -1;) {
            if (e === this._targets[s]) {
              o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
              break;
            }
          }
        } else {
          if (e !== this.target) return !1;
          o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all";
        }

        if (o) {
          if (l = t || o, _ = t !== r && "all" !== r && t !== o && ("object" != _typeof(t) || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
            for (n in l) {
              o[n] && (u || (u = []), u.push(n));
            }

            if (!G(this, i, e, u)) return !1;
          }

          for (n in l) {
            (a = o[n]) && (a.pg && a.t._kill(l) && (h = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), _ && (r[n] = 1);
          }

          !this._firstPT && this._initted && this._enabled(!1, !1);
        }
      }
      return h;
    }, n.invalidate = function () {
      return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -_, this.render(-this._delay)), this;
    }, n._enabled = function (t, e) {
      if (o || a.wake(), t && this._gc) {
        var i,
            s = this._targets;
        if (s) for (i = s.length; --i > -1;) {
          this._siblings[i] = V(s[i], this, !0);
        } else this._siblings = V(this.target, this, !0);
      }

      return A.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1;
    }, D.to = function (t, e, i) {
      return new D(t, e, i);
    }, D.from = function (t, e, i) {
      return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i);
    }, D.fromTo = function (t, e, i, s) {
      return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new D(t, e, s);
    }, D.delayedCall = function (t, e, i, s, r) {
      return new D(e, 0, {
        delay: t,
        onComplete: e,
        onCompleteParams: i,
        onCompleteScope: s,
        onReverseComplete: e,
        onReverseCompleteParams: i,
        onReverseCompleteScope: s,
        immediateRender: !1,
        lazy: !1,
        useFrames: r,
        overwrite: 0
      });
    }, D.set = function (t, e) {
      return new D(t, 0, e);
    }, D.getTweensOf = function (t, e) {
      if (null == t) return [];
      t = "string" != typeof t ? t : D.selector(t) || t;
      var i, s, r, n;

      if ((c(t) || M(t)) && "number" != typeof t[0]) {
        for (i = t.length, s = []; --i > -1;) {
          s = s.concat(D.getTweensOf(t[i], e));
        }

        for (i = s.length; --i > -1;) {
          for (n = s[i], r = i; --r > -1;) {
            n === s[r] && s.splice(i, 1);
          }
        }
      } else for (s = V(t).concat(), i = s.length; --i > -1;) {
        (s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
      }

      return s;
    }, D.killTweensOf = D.killDelayedCallsTo = function (t, e, i) {
      "object" == _typeof(e) && (i = e, e = !1);

      for (var s = D.getTweensOf(t, e), r = s.length; --r > -1;) {
        s[r]._kill(i, t);
      }
    };
    var Q = g("plugins.TweenPlugin", function (t, e) {
      this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = Q.prototype;
    }, !0);

    if (n = Q.prototype, Q.version = "1.10.1", Q.API = 2, n._firstPT = null, n._addTween = function (t, e, i, s, r, n) {
      var a, o;
      return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
        _next: this._firstPT,
        t: t,
        p: e,
        s: i,
        c: a,
        f: "function" == typeof t[e],
        n: r || e,
        r: n
      }, o._next && (o._next._prev = o), o) : void 0;
    }, n.setRatio = function (t) {
      for (var e, i = this._firstPT, s = 1e-6; i;) {
        e = i.c * t + i.s, i.r ? e = Math.round(e) : s > e && e > -s && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next;
      }
    }, n._kill = function (t) {
      var e,
          i = this._overwriteProps,
          s = this._firstPT;
      if (null != t[this._propName]) this._overwriteProps = [];else for (e = i.length; --e > -1;) {
        null != t[i[e]] && i.splice(e, 1);
      }

      for (; s;) {
        null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
      }

      return !1;
    }, n._roundProps = function (t, e) {
      for (var i = this._firstPT; i;) {
        (t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next;
      }
    }, D._onPluginEvent = function (t, e) {
      var i,
          s,
          r,
          n,
          a,
          o = e._firstPT;

      if ("_onInitAllProps" === t) {
        for (; o;) {
          for (a = o._next, s = r; s && s.pr > o.pr;) {
            s = s._next;
          }

          (o._prev = s ? s._prev : n) ? o._prev._next = o : r = o, (o._next = s) ? s._prev = o : n = o, o = a;
        }

        o = e._firstPT = r;
      }

      for (; o;) {
        o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
      }

      return i;
    }, Q.activate = function (t) {
      for (var e = t.length; --e > -1;) {
        t[e].API === Q.API && (N[new t[e]()._propName] = t[e]);
      }

      return !0;
    }, d.plugin = function (t) {
      if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
      var e,
          i = t.propName,
          s = t.priority || 0,
          r = t.overwriteProps,
          n = {
        init: "_onInitTween",
        set: "setRatio",
        kill: "_kill",
        round: "_roundProps",
        initAll: "_onInitAllProps"
      },
          a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
        Q.call(this, i, s), this._overwriteProps = r || [];
      }, t.global === !0),
          o = a.prototype = new Q(i);
      o.constructor = a, a.API = t.API;

      for (e in n) {
        "function" == typeof t[e] && (o[n[e]] = t[e]);
      }

      return a.version = t.version, Q.activate([a]), a;
    }, s = t._gsQueue) {
      for (r = 0; s.length > r; r++) {
        s[r]();
      }

      for (n in f) {
        f[n].func || t.console.log("GSAP encountered missing dependency: com.greensock." + n);
      }
    }

    o = !1;
  }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : void 0 || window, "TweenMax");
/*! ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */

!function (e, t) {
  "function" == typeof define && define.amd ? define(t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = t() : e.ScrollMagic = t();
}(void 0, function () {
  "use strict";

  var e = function e() {};

  e.version = "2.0.5", window.addEventListener("mousewheel", function () {});
  var t = "data-scrollmagic-pin-spacer";

  e.Controller = function (r) {
    var o,
        s,
        a = "ScrollMagic.Controller",
        l = "FORWARD",
        c = "REVERSE",
        u = "PAUSED",
        f = n.defaults,
        d = this,
        h = i.extend({}, f, r),
        g = [],
        p = !1,
        v = 0,
        m = u,
        w = !0,
        y = 0,
        S = !0,
        b = function b() {
      for (var e in h) {
        f.hasOwnProperty(e) || delete h[e];
      }

      if (h.container = i.get.elements(h.container)[0], !h.container) throw a + " init failed.";
      w = h.container === window || h.container === document.body || !document.body.contains(h.container), w && (h.container = window), y = z(), h.container.addEventListener("resize", T), h.container.addEventListener("scroll", T), h.refreshInterval = parseInt(h.refreshInterval) || f.refreshInterval, E();
    },
        E = function E() {
      h.refreshInterval > 0 && (s = window.setTimeout(A, h.refreshInterval));
    },
        x = function x() {
      return h.vertical ? i.get.scrollTop(h.container) : i.get.scrollLeft(h.container);
    },
        z = function z() {
      return h.vertical ? i.get.height(h.container) : i.get.width(h.container);
    },
        C = this._setScrollPos = function (e) {
      h.vertical ? w ? window.scrollTo(i.get.scrollLeft(), e) : h.container.scrollTop = e : w ? window.scrollTo(e, i.get.scrollTop()) : h.container.scrollLeft = e;
    },
        F = function F() {
      if (S && p) {
        var e = i.type.Array(p) ? p : g.slice(0);
        p = !1;
        var t = v;
        v = d.scrollPos();
        var n = v - t;
        0 !== n && (m = n > 0 ? l : c), m === c && e.reverse(), e.forEach(function (e) {
          e.update(!0);
        });
      }
    },
        L = function L() {
      o = i.rAF(F);
    },
        T = function T(e) {
      "resize" == e.type && (y = z(), m = u), p !== !0 && (p = !0, L());
    },
        A = function A() {
      if (!w && y != z()) {
        var e;

        try {
          e = new Event("resize", {
            bubbles: !1,
            cancelable: !1
          });
        } catch (t) {
          e = document.createEvent("Event"), e.initEvent("resize", !1, !1);
        }

        h.container.dispatchEvent(e);
      }

      g.forEach(function (e) {
        e.refresh();
      }), E();
    };

    this._options = h;

    var O = function O(e) {
      if (e.length <= 1) return e;
      var t = e.slice(0);
      return t.sort(function (e, t) {
        return e.scrollOffset() > t.scrollOffset() ? 1 : -1;
      }), t;
    };

    return this.addScene = function (t) {
      if (i.type.Array(t)) t.forEach(function (e) {
        d.addScene(e);
      });else if (t instanceof e.Scene) if (t.controller() !== d) t.addTo(d);else if (g.indexOf(t) < 0) {
        g.push(t), g = O(g), t.on("shift.controller_sort", function () {
          g = O(g);
        });

        for (var n in h.globalSceneOptions) {
          t[n] && t[n].call(t, h.globalSceneOptions[n]);
        }
      }
      return d;
    }, this.removeScene = function (e) {
      if (i.type.Array(e)) e.forEach(function (e) {
        d.removeScene(e);
      });else {
        var t = g.indexOf(e);
        t > -1 && (e.off("shift.controller_sort"), g.splice(t, 1), e.remove());
      }
      return d;
    }, this.updateScene = function (t, n) {
      return i.type.Array(t) ? t.forEach(function (e) {
        d.updateScene(e, n);
      }) : n ? t.update(!0) : p !== !0 && t instanceof e.Scene && (p = p || [], -1 == p.indexOf(t) && p.push(t), p = O(p), L()), d;
    }, this.update = function (e) {
      return T({
        type: "resize"
      }), e && F(), d;
    }, this.scrollTo = function (n, r) {
      if (i.type.Number(n)) C.call(h.container, n, r);else if (n instanceof e.Scene) n.controller() === d && d.scrollTo(n.scrollOffset(), r);else if (i.type.Function(n)) C = n;else {
        var o = i.get.elements(n)[0];

        if (o) {
          for (; o.parentNode.hasAttribute(t);) {
            o = o.parentNode;
          }

          var s = h.vertical ? "top" : "left",
              a = i.get.offset(h.container),
              l = i.get.offset(o);
          w || (a[s] -= d.scrollPos()), d.scrollTo(l[s] - a[s], r);
        }
      }
      return d;
    }, this.scrollPos = function (e) {
      return arguments.length ? (i.type.Function(e) && (x = e), d) : x.call(d);
    }, this.info = function (e) {
      var t = {
        size: y,
        vertical: h.vertical,
        scrollPos: v,
        scrollDirection: m,
        container: h.container,
        isDocument: w
      };
      return arguments.length ? void 0 !== t[e] ? t[e] : void 0 : t;
    }, this.loglevel = function () {
      return d;
    }, this.enabled = function (e) {
      return arguments.length ? (S != e && (S = !!e, d.updateScene(g, !0)), d) : S;
    }, this.destroy = function (e) {
      window.clearTimeout(s);

      for (var t = g.length; t--;) {
        g[t].destroy(e);
      }

      return h.container.removeEventListener("resize", T), h.container.removeEventListener("scroll", T), i.cAF(o), null;
    }, b(), d;
  };

  var n = {
    defaults: {
      container: window,
      vertical: !0,
      globalSceneOptions: {},
      loglevel: 2,
      refreshInterval: 100
    }
  };
  e.Controller.addOption = function (e, t) {
    n.defaults[e] = t;
  }, e.Controller.extend = function (t) {
    var n = this;
    e.Controller = function () {
      return n.apply(this, arguments), this.$super = i.extend({}, this), t.apply(this, arguments) || this;
    }, i.extend(e.Controller, n), e.Controller.prototype = n.prototype, e.Controller.prototype.constructor = e.Controller;
  }, e.Scene = function (n) {
    var o,
        s,
        a = "BEFORE",
        l = "DURING",
        c = "AFTER",
        u = r.defaults,
        f = this,
        d = i.extend({}, u, n),
        h = a,
        g = 0,
        p = {
      start: 0,
      end: 0
    },
        v = 0,
        m = !0,
        w = function w() {
      for (var e in d) {
        u.hasOwnProperty(e) || delete d[e];
      }

      for (var t in u) {
        L(t);
      }

      C();
    },
        y = {};

    this.on = function (e, t) {
      return i.type.Function(t) && (e = e.trim().split(" "), e.forEach(function (e) {
        var n = e.split("."),
            r = n[0],
            i = n[1];
        "*" != r && (y[r] || (y[r] = []), y[r].push({
          namespace: i || "",
          callback: t
        }));
      })), f;
    }, this.off = function (e, t) {
      return e ? (e = e.trim().split(" "), e.forEach(function (e) {
        var n = e.split("."),
            r = n[0],
            i = n[1] || "",
            o = "*" === r ? Object.keys(y) : [r];
        o.forEach(function (e) {
          for (var n = y[e] || [], r = n.length; r--;) {
            var o = n[r];
            !o || i !== o.namespace && "*" !== i || t && t != o.callback || n.splice(r, 1);
          }

          n.length || delete y[e];
        });
      }), f) : f;
    }, this.trigger = function (t, n) {
      if (t) {
        var r = t.trim().split("."),
            i = r[0],
            o = r[1],
            s = y[i];
        s && s.forEach(function (t) {
          o && o !== t.namespace || t.callback.call(f, new e.Event(i, t.namespace, f, n));
        });
      }

      return f;
    }, f.on("change.internal", function (e) {
      "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? E() : "reverse" === e.what && f.update());
    }).on("shift.internal", function () {
      S(), f.update();
    }), this.addTo = function (t) {
      return t instanceof e.Controller && s != t && (s && s.removeScene(f), s = t, C(), b(!0), E(!0), S(), s.info("container").addEventListener("resize", x), t.addScene(f), f.trigger("add", {
        controller: s
      }), f.update()), f;
    }, this.enabled = function (e) {
      return arguments.length ? (m != e && (m = !!e, f.update(!0)), f) : m;
    }, this.remove = function () {
      if (s) {
        s.info("container").removeEventListener("resize", x);
        var e = s;
        s = void 0, e.removeScene(f), f.trigger("remove");
      }

      return f;
    }, this.destroy = function (e) {
      return f.trigger("destroy", {
        reset: e
      }), f.remove(), f.off("*.*"), null;
    }, this.update = function (e) {
      if (s) if (e) {
        if (s.enabled() && m) {
          var t,
              n = s.info("scrollPos");
          t = d.duration > 0 ? (n - p.start) / (p.end - p.start) : n >= p.start ? 1 : 0, f.trigger("update", {
            startPos: p.start,
            endPos: p.end,
            scrollPos: n
          }), f.progress(t);
        } else T && h === l && O(!0);
      } else s.updateScene(f, !1);
      return f;
    }, this.refresh = function () {
      return b(), E(), f;
    }, this.progress = function (e) {
      if (arguments.length) {
        var t = !1,
            n = h,
            r = s ? s.info("scrollDirection") : "PAUSED",
            i = d.reverse || e >= g;

        if (0 === d.duration ? (t = g != e, g = 1 > e && i ? 0 : 1, h = 0 === g ? a : l) : 0 > e && h !== a && i ? (g = 0, h = a, t = !0) : e >= 0 && 1 > e && i ? (g = e, h = l, t = !0) : e >= 1 && h !== c ? (g = 1, h = c, t = !0) : h !== l || i || O(), t) {
          var o = {
            progress: g,
            state: h,
            scrollDirection: r
          },
              u = h != n,
              p = function p(e) {
            f.trigger(e, o);
          };

          u && n !== l && (p("enter"), p(n === a ? "start" : "end")), p("progress"), u && h !== l && (p(h === a ? "start" : "end"), p("leave"));
        }

        return f;
      }

      return g;
    };

    var S = function S() {
      p = {
        start: v + d.offset
      }, s && d.triggerElement && (p.start -= s.info("size") * d.triggerHook), p.end = p.start + d.duration;
    },
        b = function b(e) {
      if (o) {
        var t = "duration";
        F(t, o.call(f)) && !e && (f.trigger("change", {
          what: t,
          newval: d[t]
        }), f.trigger("shift", {
          reason: t
        }));
      }
    },
        E = function E(e) {
      var n = 0,
          r = d.triggerElement;

      if (s && r) {
        for (var o = s.info(), a = i.get.offset(o.container), l = o.vertical ? "top" : "left"; r.parentNode.hasAttribute(t);) {
          r = r.parentNode;
        }

        var c = i.get.offset(r);
        o.isDocument || (a[l] -= s.scrollPos()), n = c[l] - a[l];
      }

      var u = n != v;
      v = n, u && !e && f.trigger("shift", {
        reason: "triggerElementPosition"
      });
    },
        x = function x() {
      d.triggerHook > 0 && f.trigger("shift", {
        reason: "containerResize"
      });
    },
        z = i.extend(r.validate, {
      duration: function duration(e) {
        if (i.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) {
          var t = parseFloat(e) / 100;

          e = function e() {
            return s ? s.info("size") * t : 0;
          };
        }

        if (i.type.Function(e)) {
          o = e;

          try {
            e = parseFloat(o());
          } catch (n) {
            e = -1;
          }
        }

        if (e = parseFloat(e), !i.type.Number(e) || 0 > e) throw o ? (o = void 0, 0) : 0;
        return e;
      }
    }),
        C = function C(e) {
      e = arguments.length ? [e] : Object.keys(z), e.forEach(function (e) {
        var t;
        if (z[e]) try {
          t = z[e](d[e]);
        } catch (n) {
          t = u[e];
        } finally {
          d[e] = t;
        }
      });
    },
        F = function F(e, t) {
      var n = !1,
          r = d[e];
      return d[e] != t && (d[e] = t, C(e), n = r != d[e]), n;
    },
        L = function L(e) {
      f[e] || (f[e] = function (t) {
        return arguments.length ? ("duration" === e && (o = void 0), F(e, t) && (f.trigger("change", {
          what: e,
          newval: d[e]
        }), r.shifts.indexOf(e) > -1 && f.trigger("shift", {
          reason: e
        })), f) : d[e];
      });
    };

    this.controller = function () {
      return s;
    }, this.state = function () {
      return h;
    }, this.scrollOffset = function () {
      return p.start;
    }, this.triggerPosition = function () {
      var e = d.offset;
      return s && (e += d.triggerElement ? v : s.info("size") * f.triggerHook()), e;
    };
    var T, A;
    f.on("shift.internal", function (e) {
      var t = "duration" === e.reason;
      (h === c && t || h === l && 0 === d.duration) && O(), t && _();
    }).on("progress.internal", function () {
      O();
    }).on("add.internal", function () {
      _();
    }).on("destroy.internal", function (e) {
      f.removePin(e.reset);
    });

    var O = function O(e) {
      if (T && s) {
        var t = s.info(),
            n = A.spacer.firstChild;

        if (e || h !== l) {
          var r = {
            position: A.inFlow ? "relative" : "absolute",
            top: 0,
            left: 0
          },
              o = i.css(n, "position") != r.position;
          A.pushFollowers ? d.duration > 0 && (h === c && 0 === parseFloat(i.css(A.spacer, "padding-top")) ? o = !0 : h === a && 0 === parseFloat(i.css(A.spacer, "padding-bottom")) && (o = !0)) : r[t.vertical ? "top" : "left"] = d.duration * g, i.css(n, r), o && _();
        } else {
          "fixed" != i.css(n, "position") && (i.css(n, {
            position: "fixed"
          }), _());
          var u = i.get.offset(A.spacer, !0),
              f = d.reverse || 0 === d.duration ? t.scrollPos - p.start : Math.round(g * d.duration * 10) / 10;
          u[t.vertical ? "top" : "left"] += f, i.css(A.spacer.firstChild, {
            top: u.top,
            left: u.left
          });
        }
      }
    },
        _ = function _() {
      if (T && s && A.inFlow) {
        var e = h === l,
            t = s.info("vertical"),
            n = A.spacer.firstChild,
            r = i.isMarginCollapseType(i.css(A.spacer, "display")),
            o = {};
        A.relSize.width || A.relSize.autoFullWidth ? e ? i.css(T, {
          width: i.get.width(A.spacer)
        }) : i.css(T, {
          width: "100%"
        }) : (o["min-width"] = i.get.width(t ? T : n, !0, !0), o.width = e ? o["min-width"] : "auto"), A.relSize.height ? e ? i.css(T, {
          height: i.get.height(A.spacer) - (A.pushFollowers ? d.duration : 0)
        }) : i.css(T, {
          height: "100%"
        }) : (o["min-height"] = i.get.height(t ? n : T, !0, !r), o.height = e ? o["min-height"] : "auto"), A.pushFollowers && (o["padding" + (t ? "Top" : "Left")] = d.duration * g, o["padding" + (t ? "Bottom" : "Right")] = d.duration * (1 - g)), i.css(A.spacer, o);
      }
    },
        N = function N() {
      s && T && h === l && !s.info("isDocument") && O();
    },
        P = function P() {
      s && T && h === l && ((A.relSize.width || A.relSize.autoFullWidth) && i.get.width(window) != i.get.width(A.spacer.parentNode) || A.relSize.height && i.get.height(window) != i.get.height(A.spacer.parentNode)) && _();
    },
        D = function D(e) {
      s && T && h === l && !s.info("isDocument") && (e.preventDefault(), s._setScrollPos(s.info("scrollPos") - ((e.wheelDelta || e[s.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)));
    };

    this.setPin = function (e, n) {
      var r = {
        pushFollowers: !0,
        spacerClass: "scrollmagic-pin-spacer"
      };
      if (n = i.extend({}, r, n), e = i.get.elements(e)[0], !e) return f;
      if ("fixed" === i.css(e, "position")) return f;

      if (T) {
        if (T === e) return f;
        f.removePin();
      }

      T = e;
      var o = T.parentNode.style.display,
          s = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
      T.parentNode.style.display = "none";
      var a = "absolute" != i.css(T, "position"),
          l = i.css(T, s.concat(["display"])),
          c = i.css(T, ["width", "height"]);
      T.parentNode.style.display = o, !a && n.pushFollowers && (n.pushFollowers = !1);
      var u = T.parentNode.insertBefore(document.createElement("div"), T),
          d = i.extend(l, {
        position: a ? "relative" : "absolute",
        boxSizing: "content-box",
        mozBoxSizing: "content-box",
        webkitBoxSizing: "content-box"
      });

      if (a || i.extend(d, i.css(T, ["width", "height"])), i.css(u, d), u.setAttribute(t, ""), i.addClass(u, n.spacerClass), A = {
        spacer: u,
        relSize: {
          width: "%" === c.width.slice(-1),
          height: "%" === c.height.slice(-1),
          autoFullWidth: "auto" === c.width && a && i.isMarginCollapseType(l.display)
        },
        pushFollowers: n.pushFollowers,
        inFlow: a
      }, !T.___origStyle) {
        T.___origStyle = {};
        var h = T.style,
            g = s.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
        g.forEach(function (e) {
          T.___origStyle[e] = h[e] || "";
        });
      }

      return A.relSize.width && i.css(u, {
        width: c.width
      }), A.relSize.height && i.css(u, {
        height: c.height
      }), u.appendChild(T), i.css(T, {
        position: a ? "relative" : "absolute",
        margin: "auto",
        top: "auto",
        left: "auto",
        bottom: "auto",
        right: "auto"
      }), (A.relSize.width || A.relSize.autoFullWidth) && i.css(T, {
        boxSizing: "border-box",
        mozBoxSizing: "border-box",
        webkitBoxSizing: "border-box"
      }), window.addEventListener("scroll", N), window.addEventListener("resize", N), window.addEventListener("resize", P), T.addEventListener("mousewheel", D), T.addEventListener("DOMMouseScroll", D), O(), f;
    }, this.removePin = function (e) {
      if (T) {
        if (h === l && O(!0), e || !s) {
          var n = A.spacer.firstChild;

          if (n.hasAttribute(t)) {
            var r = A.spacer.style,
                o = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
            margins = {}, o.forEach(function (e) {
              margins[e] = r[e] || "";
            }), i.css(n, margins);
          }

          A.spacer.parentNode.insertBefore(n, A.spacer), A.spacer.parentNode.removeChild(A.spacer), T.parentNode.hasAttribute(t) || (i.css(T, T.___origStyle), delete T.___origStyle);
        }

        window.removeEventListener("scroll", N), window.removeEventListener("resize", N), window.removeEventListener("resize", P), T.removeEventListener("mousewheel", D), T.removeEventListener("DOMMouseScroll", D), T = void 0;
      }

      return f;
    };
    var R,
        k = [];
    return f.on("destroy.internal", function (e) {
      f.removeClassToggle(e.reset);
    }), this.setClassToggle = function (e, t) {
      var n = i.get.elements(e);
      return 0 !== n.length && i.type.String(t) ? (k.length > 0 && f.removeClassToggle(), R = t, k = n, f.on("enter.internal_class leave.internal_class", function (e) {
        var t = "enter" === e.type ? i.addClass : i.removeClass;
        k.forEach(function (e) {
          t(e, R);
        });
      }), f) : f;
    }, this.removeClassToggle = function (e) {
      return e && k.forEach(function (e) {
        i.removeClass(e, R);
      }), f.off("start.internal_class end.internal_class"), R = void 0, k = [], f;
    }, w(), f;
  };
  var r = {
    defaults: {
      duration: 0,
      offset: 0,
      triggerElement: void 0,
      triggerHook: .5,
      reverse: !0,
      loglevel: 2
    },
    validate: {
      offset: function offset(e) {
        if (e = parseFloat(e), !i.type.Number(e)) throw 0;
        return e;
      },
      triggerElement: function triggerElement(e) {
        if (e = e || void 0) {
          var t = i.get.elements(e)[0];
          if (!t) throw 0;
          e = t;
        }

        return e;
      },
      triggerHook: function triggerHook(e) {
        var t = {
          onCenter: .5,
          onEnter: 1,
          onLeave: 0
        };
        if (i.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));else {
          if (!(e in t)) throw 0;
          e = t[e];
        }
        return e;
      },
      reverse: function reverse(e) {
        return !!e;
      }
    },
    shifts: ["duration", "offset", "triggerHook"]
  };
  e.Scene.addOption = function (e, t, n, i) {
    e in r.defaults || (r.defaults[e] = t, r.validate[e] = n, i && r.shifts.push(e));
  }, e.Scene.extend = function (t) {
    var n = this;
    e.Scene = function () {
      return n.apply(this, arguments), this.$super = i.extend({}, this), t.apply(this, arguments) || this;
    }, i.extend(e.Scene, n), e.Scene.prototype = n.prototype, e.Scene.prototype.constructor = e.Scene;
  }, e.Event = function (e, t, n, r) {
    r = r || {};

    for (var i in r) {
      this[i] = r[i];
    }

    return this.type = e, this.target = this.currentTarget = n, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this;
  };

  var i = e._util = function (e) {
    var t,
        n = {},
        r = function r(e) {
      return parseFloat(e) || 0;
    },
        i = function i(t) {
      return t.currentStyle ? t.currentStyle : e.getComputedStyle(t);
    },
        o = function o(t, n, _o, s) {
      if (n = n === document ? e : n, n === e) s = !1;else if (!f.DomElement(n)) return 0;
      t = t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
      var a = (_o ? n["offset" + t] || n["outer" + t] : n["client" + t] || n["inner" + t]) || 0;

      if (_o && s) {
        var l = i(n);
        a += "Height" === t ? r(l.marginTop) + r(l.marginBottom) : r(l.marginLeft) + r(l.marginRight);
      }

      return a;
    },
        s = function s(e) {
      return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function (e) {
        return e[1].toUpperCase();
      });
    };

    n.extend = function (e) {
      for (e = e || {}, t = 1; t < arguments.length; t++) {
        if (arguments[t]) for (var n in arguments[t]) {
          arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]);
        }
      }

      return e;
    }, n.isMarginCollapseType = function (e) {
      return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e) > -1;
    };
    var a = 0,
        l = ["ms", "moz", "webkit", "o"],
        c = e.requestAnimationFrame,
        u = e.cancelAnimationFrame;

    for (t = 0; !c && t < l.length; ++t) {
      c = e[l[t] + "RequestAnimationFrame"], u = e[l[t] + "CancelAnimationFrame"] || e[l[t] + "CancelRequestAnimationFrame"];
    }

    c || (c = function c(t) {
      var n = new Date().getTime(),
          r = Math.max(0, 16 - (n - a)),
          i = e.setTimeout(function () {
        t(n + r);
      }, r);
      return a = n + r, i;
    }), u || (u = function u(t) {
      e.clearTimeout(t);
    }), n.rAF = c.bind(e), n.cAF = u.bind(e);

    var f = n.type = function (e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
    };

    f.String = function (e) {
      return "string" === f(e);
    }, f.Function = function (e) {
      return "function" === f(e);
    }, f.Array = function (e) {
      return Array.isArray(e);
    }, f.Number = function (e) {
      return !f.Array(e) && e - parseFloat(e) + 1 >= 0;
    }, f.DomElement = function (e) {
      return "object" == (typeof HTMLElement === "undefined" ? "undefined" : _typeof(HTMLElement)) ? e instanceof HTMLElement : e && "object" == _typeof(e) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName;
    };
    var d = n.get = {};
    return d.elements = function (t) {
      var n = [];
      if (f.String(t)) try {
        t = document.querySelectorAll(t);
      } catch (r) {
        return n;
      }
      if ("nodelist" === f(t) || f.Array(t)) for (var i = 0, o = n.length = t.length; o > i; i++) {
        var s = t[i];
        n[i] = f.DomElement(s) ? s : d.elements(s);
      } else (f.DomElement(t) || t === document || t === e) && (n = [t]);
      return n;
    }, d.scrollTop = function (t) {
      return t && "number" == typeof t.scrollTop ? t.scrollTop : e.pageYOffset || 0;
    }, d.scrollLeft = function (t) {
      return t && "number" == typeof t.scrollLeft ? t.scrollLeft : e.pageXOffset || 0;
    }, d.width = function (e, t, n) {
      return o("width", e, t, n);
    }, d.height = function (e, t, n) {
      return o("height", e, t, n);
    }, d.offset = function (e, t) {
      var n = {
        top: 0,
        left: 0
      };

      if (e && e.getBoundingClientRect) {
        var r = e.getBoundingClientRect();
        n.top = r.top, n.left = r.left, t || (n.top += d.scrollTop(), n.left += d.scrollLeft());
      }

      return n;
    }, n.addClass = function (e, t) {
      t && (e.classList ? e.classList.add(t) : e.className += " " + t);
    }, n.removeClass = function (e, t) {
      t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "));
    }, n.css = function (e, t) {
      if (f.String(t)) return i(e)[s(t)];

      if (f.Array(t)) {
        var n = {},
            r = i(e);
        return t.forEach(function (e) {
          n[e] = r[s(e)];
        }), n;
      }

      for (var o in t) {
        var a = t[o];
        a == parseFloat(a) && (a += "px"), e.style[s(o)] = a;
      }
    }, n;
  }(window || {});

  return e;
});
/*! ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */

!function (e, n) {
  "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], n) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? (require("gsap"), n(require("scrollmagic"), TweenMax, TimelineMax)) : n(e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic, e.TweenMax || e.TweenLite, e.TimelineMax || e.TimelineLite);
}(void 0, function (e, n, r) {
  "use strict";

  e.Scene.addOption("tweenChanges", !1, function (e) {
    return !!e;
  }), e.Scene.extend(function () {
    var e,
        t = this;
    t.on("progress.plugin_gsap", function () {
      i();
    }), t.on("destroy.plugin_gsap", function (e) {
      t.removeTween(e.reset);
    });

    var i = function i() {
      if (e) {
        var n = t.progress(),
            r = t.state();
        e.repeat && -1 === e.repeat() ? "DURING" === r && e.paused() ? e.play() : "DURING" === r || e.paused() || e.pause() : n != e.progress() && (0 === t.duration() ? n > 0 ? e.play() : e.reverse() : t.tweenChanges() && e.tweenTo ? e.tweenTo(n * e.duration()) : e.progress(n).pause());
      }
    };

    t.setTween = function (o, a, s) {
      var u;
      arguments.length > 1 && (arguments.length < 3 && (s = a, a = 1), o = n.to(o, a, s));

      try {
        u = r ? new r({
          smoothChildTiming: !0
        }).add(o) : o, u.pause();
      } catch (p) {
        return t;
      }

      return e && t.removeTween(), e = u, o.repeat && -1 === o.repeat() && (e.repeat(-1), e.yoyo(o.yoyo())), i(), t;
    }, t.removeTween = function (n) {
      return e && (n && e.progress(0).pause(), e.kill(), e = void 0), t;
    };
  });
});
/*! ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */

!function (e, r) {
  "function" == typeof define && define.amd ? define(["ScrollMagic"], r) : r("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? require("scrollmagic") : e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic);
}(void 0, function (e) {
  "use strict";

  var r = "0.85em",
      t = "9999",
      i = 15,
      o = e._util,
      n = 0;
  e.Scene.extend(function () {
    var e,
        r = this;
    r.addIndicators = function (t) {
      if (!e) {
        var i = {
          name: "",
          indent: 0,
          parent: void 0,
          colorStart: "green",
          colorEnd: "red",
          colorTrigger: "blue"
        };
        t = o.extend({}, i, t), n++, e = new s(r, t), r.on("add.plugin_addIndicators", e.add), r.on("remove.plugin_addIndicators", e.remove), r.on("destroy.plugin_addIndicators", r.removeIndicators), r.controller() && e.add();
      }

      return r;
    }, r.removeIndicators = function () {
      return e && (e.remove(), this.off("*.plugin_addIndicators"), e = void 0), r;
    };
  }), e.Controller.addOption("addIndicators", !1), e.Controller.extend(function () {
    var r = this,
        t = r.info(),
        n = t.container,
        s = t.isDocument,
        d = t.vertical,
        a = {
      groups: []
    };
    this._indicators = a;

    var g = function g() {
      a.updateBoundsPositions();
    },
        p = function p() {
      a.updateTriggerGroupPositions();
    };

    return n.addEventListener("resize", p), s || (window.addEventListener("resize", p), window.addEventListener("scroll", p)), n.addEventListener("resize", g), n.addEventListener("scroll", g), this._indicators.updateBoundsPositions = function (e) {
      for (var r, t, s, g = e ? [o.extend({}, e.triggerGroup, {
        members: [e]
      })] : a.groups, p = g.length, u = {}, c = d ? "left" : "top", l = d ? "width" : "height", f = d ? o.get.scrollLeft(n) + o.get.width(n) - i : o.get.scrollTop(n) + o.get.height(n) - i; p--;) {
        for (s = g[p], r = s.members.length, t = o.get[l](s.element.firstChild); r--;) {
          u[c] = f - t, o.css(s.members[r].bounds, u);
        }
      }
    }, this._indicators.updateTriggerGroupPositions = function (e) {
      for (var t, g, p, u, c, l = e ? [e] : a.groups, f = l.length, m = s ? document.body : n, h = s ? {
        top: 0,
        left: 0
      } : o.get.offset(m, !0), v = d ? o.get.width(n) - i : o.get.height(n) - i, b = d ? "width" : "height", G = d ? "Y" : "X"; f--;) {
        t = l[f], g = t.element, p = t.triggerHook * r.info("size"), u = o.get[b](g.firstChild.firstChild), c = p > u ? "translate" + G + "(-100%)" : "", o.css(g, {
          top: h.top + (d ? p : v - t.members[0].options.indent),
          left: h.left + (d ? v - t.members[0].options.indent : p)
        }), o.css(g.firstChild.firstChild, {
          "-ms-transform": c,
          "-webkit-transform": c,
          transform: c
        });
      }
    }, this._indicators.updateTriggerGroupLabel = function (e) {
      var r = "trigger" + (e.members.length > 1 ? "" : " " + e.members[0].options.name),
          t = e.element.firstChild.firstChild,
          i = t.textContent !== r;
      i && (t.textContent = r, d && a.updateBoundsPositions());
    }, this.addScene = function (t) {
      this._options.addIndicators && t instanceof e.Scene && t.controller() === r && t.addIndicators(), this.$super.addScene.apply(this, arguments);
    }, this.destroy = function () {
      n.removeEventListener("resize", p), s || (window.removeEventListener("resize", p), window.removeEventListener("scroll", p)), n.removeEventListener("resize", g), n.removeEventListener("scroll", g), this.$super.destroy.apply(this, arguments);
    }, r;
  });

  var s = function s(e, r) {
    var t,
        i,
        s = this,
        a = d.bounds(),
        g = d.start(r.colorStart),
        p = d.end(r.colorEnd),
        u = r.parent && o.get.elements(r.parent)[0];
    r.name = r.name || n, g.firstChild.textContent += " " + r.name, p.textContent += " " + r.name, a.appendChild(g), a.appendChild(p), s.options = r, s.bounds = a, s.triggerGroup = void 0, this.add = function () {
      i = e.controller(), t = i.info("vertical");
      var r = i.info("isDocument");
      u || (u = r ? document.body : i.info("container")), r || "static" !== o.css(u, "position") || o.css(u, {
        position: "relative"
      }), e.on("change.plugin_addIndicators", l), e.on("shift.plugin_addIndicators", c), G(), h(), setTimeout(function () {
        i._indicators.updateBoundsPositions(s);
      }, 0);
    }, this.remove = function () {
      if (s.triggerGroup) {
        if (e.off("change.plugin_addIndicators", l), e.off("shift.plugin_addIndicators", c), s.triggerGroup.members.length > 1) {
          var r = s.triggerGroup;
          r.members.splice(r.members.indexOf(s), 1), i._indicators.updateTriggerGroupLabel(r), i._indicators.updateTriggerGroupPositions(r), s.triggerGroup = void 0;
        } else b();

        m();
      }
    };

    var c = function c() {
      h();
    },
        l = function l(e) {
      "triggerHook" === e.what && G();
    },
        f = function f() {
      var e = i.info("vertical");
      o.css(g.firstChild, {
        "border-bottom-width": e ? 1 : 0,
        "border-right-width": e ? 0 : 1,
        bottom: e ? -1 : r.indent,
        right: e ? r.indent : -1,
        padding: e ? "0 8px" : "2px 4px"
      }), o.css(p, {
        "border-top-width": e ? 1 : 0,
        "border-left-width": e ? 0 : 1,
        top: e ? "100%" : "",
        right: e ? r.indent : "",
        bottom: e ? "" : r.indent,
        left: e ? "" : "100%",
        padding: e ? "0 8px" : "2px 4px"
      }), u.appendChild(a);
    },
        m = function m() {
      a.parentNode.removeChild(a);
    },
        h = function h() {
      a.parentNode !== u && f();
      var r = {};
      r[t ? "top" : "left"] = e.triggerPosition(), r[t ? "height" : "width"] = e.duration(), o.css(a, r), o.css(p, {
        display: e.duration() > 0 ? "" : "none"
      });
    },
        v = function v() {
      var n = d.trigger(r.colorTrigger),
          a = {};
      a[t ? "right" : "bottom"] = 0, a[t ? "border-top-width" : "border-left-width"] = 1, o.css(n.firstChild, a), o.css(n.firstChild.firstChild, {
        padding: t ? "0 8px 3px 8px" : "3px 4px"
      }), document.body.appendChild(n);
      var g = {
        triggerHook: e.triggerHook(),
        element: n,
        members: [s]
      };
      i._indicators.groups.push(g), s.triggerGroup = g, i._indicators.updateTriggerGroupLabel(g), i._indicators.updateTriggerGroupPositions(g);
    },
        b = function b() {
      i._indicators.groups.splice(i._indicators.groups.indexOf(s.triggerGroup), 1), s.triggerGroup.element.parentNode.removeChild(s.triggerGroup.element), s.triggerGroup = void 0;
    },
        G = function G() {
      var r = e.triggerHook(),
          t = 1e-4;

      if (!(s.triggerGroup && Math.abs(s.triggerGroup.triggerHook - r) < t)) {
        for (var o, n = i._indicators.groups, d = n.length; d--;) {
          if (o = n[d], Math.abs(o.triggerHook - r) < t) return s.triggerGroup && (1 === s.triggerGroup.members.length ? b() : (s.triggerGroup.members.splice(s.triggerGroup.members.indexOf(s), 1), i._indicators.updateTriggerGroupLabel(s.triggerGroup), i._indicators.updateTriggerGroupPositions(s.triggerGroup))), o.members.push(s), s.triggerGroup = o, void i._indicators.updateTriggerGroupLabel(o);
        }

        if (s.triggerGroup) {
          if (1 === s.triggerGroup.members.length) return s.triggerGroup.triggerHook = r, void i._indicators.updateTriggerGroupPositions(s.triggerGroup);
          s.triggerGroup.members.splice(s.triggerGroup.members.indexOf(s), 1), i._indicators.updateTriggerGroupLabel(s.triggerGroup), i._indicators.updateTriggerGroupPositions(s.triggerGroup), s.triggerGroup = void 0;
        }

        v();
      }
    };
  },
      d = {
    start: function start(e) {
      var r = document.createElement("div");
      r.textContent = "start", o.css(r, {
        position: "absolute",
        overflow: "visible",
        "border-width": 0,
        "border-style": "solid",
        color: e,
        "border-color": e
      });
      var t = document.createElement("div");
      return o.css(t, {
        position: "absolute",
        overflow: "visible",
        width: 0,
        height: 0
      }), t.appendChild(r), t;
    },
    end: function end(e) {
      var r = document.createElement("div");
      return r.textContent = "end", o.css(r, {
        position: "absolute",
        overflow: "visible",
        "border-width": 0,
        "border-style": "solid",
        color: e,
        "border-color": e
      }), r;
    },
    bounds: function bounds() {
      var e = document.createElement("div");
      return o.css(e, {
        position: "absolute",
        overflow: "visible",
        "white-space": "nowrap",
        "pointer-events": "none",
        "font-size": r
      }), e.style.zIndex = t, e;
    },
    trigger: function trigger(e) {
      var i = document.createElement("div");
      i.textContent = "trigger", o.css(i, {
        position: "relative"
      });
      var n = document.createElement("div");
      o.css(n, {
        position: "absolute",
        overflow: "visible",
        "border-width": 0,
        "border-style": "solid",
        color: e,
        "border-color": e
      }), n.appendChild(i);
      var s = document.createElement("div");
      return o.css(s, {
        position: "fixed",
        overflow: "visible",
        "white-space": "nowrap",
        "pointer-events": "none",
        "font-size": r
      }), s.style.zIndex = t, s.appendChild(n), s;
    }
  };
});
/*!
 * VERSION: beta 0.2.4
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */

var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : void 0 || window;

(function (t) {
  "use strict";

  var e = t.GreenSockGlobals || t,
      i = function i(t) {
    var i,
        s = t.split("."),
        r = e;

    for (i = 0; s.length > i; i++) {
      r[s[i]] = r = r[s[i]] || {};
    }

    return r;
  },
      s = i("com.greensock.utils"),
      r = function r(t) {
    var e = t.nodeType,
        i = "";

    if (1 === e || 9 === e || 11 === e) {
      if ("string" == typeof t.textContent) return t.textContent;

      for (t = t.firstChild; t; t = t.nextSibling) {
        i += r(t);
      }
    } else if (3 === e || 4 === e) return t.nodeValue;

    return i;
  },
      n = document,
      a = n.defaultView ? n.defaultView.getComputedStyle : function () {},
      o = /([A-Z])/g,
      h = function h(t, e, i, s) {
    var r;
    return (i = i || a(t, null)) ? (t = i.getPropertyValue(e.replace(o, "-$1").toLowerCase()), r = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle, r = i[e]), s ? r : parseInt(r, 10) || 0;
  },
      l = function l(t) {
    return t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]) ? !0 : !1;
  },
      _ = function _(t) {
    var e,
        i,
        s,
        r = [],
        n = t.length;

    for (e = 0; n > e; e++) {
      if (i = t[e], l(i)) for (s = i.length, s = 0; i.length > s; s++) {
        r.push(i[s]);
      } else r.push(i);
    }

    return r;
  },
      u = ")eefec303079ad17405c",
      c = /(?:<br>|<br\/>|<br \/>)/gi,
      p = n.all && !n.addEventListener,
      f = "<div style='position:relative;display:inline-block;" + (p ? "*display:inline;*zoom:1;'" : "'"),
      m = function m(t) {
    t = t || "";
    var e = -1 !== t.indexOf("++"),
        i = 1;
    return e && (t = t.split("++").join("")), function () {
      return f + (t ? " class='" + t + (e ? i++ : "") + "'>" : ">");
    };
  },
      d = s.SplitText = e.SplitText = function (t, e) {
    if ("string" == typeof t && (t = d.selector(t)), !t) throw "cannot split a null element.";
    this.elements = l(t) ? _(t) : [t], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e);
  },
      g = function g(t, e, i, s, o) {
    c.test(t.innerHTML) && (t.innerHTML = t.innerHTML.replace(c, u));

    var l,
        _,
        p,
        f,
        d,
        g,
        v,
        y,
        T,
        w,
        b,
        x,
        P,
        S = r(t),
        C = e.type || e.split || "chars,words,lines",
        k = -1 !== C.indexOf("lines") ? [] : null,
        R = -1 !== C.indexOf("words"),
        A = -1 !== C.indexOf("chars"),
        D = "absolute" === e.position || e.absolute === !0,
        O = D ? "&#173; " : " ",
        M = -999,
        L = a(t),
        z = h(t, "paddingLeft", L),
        I = h(t, "borderBottomWidth", L) + h(t, "borderTopWidth", L),
        E = h(t, "borderLeftWidth", L) + h(t, "borderRightWidth", L),
        N = h(t, "paddingTop", L) + h(t, "paddingBottom", L),
        F = h(t, "paddingLeft", L) + h(t, "paddingRight", L),
        X = h(t, "textAlign", L, !0),
        U = t.clientHeight,
        B = t.clientWidth,
        j = S.length,
        Y = "</div>",
        q = m(e.wordsClass),
        G = m(e.charsClass),
        V = -1 !== (e.linesClass || "").indexOf("++"),
        Q = e.linesClass;

    for (V && (Q = Q.split("++").join("")), p = q(), f = 0; j > f; f++) {
      g = S.charAt(f), ")" === g && S.substr(f, 20) === u ? (p += Y + "<BR/>", f !== j - 1 && (p += " " + q()), f += 19) : " " === g && " " !== S.charAt(f - 1) && f !== j - 1 ? (p += Y, f !== j - 1 && (p += O + q())) : p += A && " " !== g ? G() + g + "</div>" : g;
    }

    for (t.innerHTML = p + Y, d = t.getElementsByTagName("*"), j = d.length, v = [], f = 0; j > f; f++) {
      v[f] = d[f];
    }

    if (k || D) for (f = 0; j > f; f++) {
      y = v[f], _ = y.parentNode === t, (_ || D || A && !R) && (T = y.offsetTop, k && _ && T !== M && "BR" !== y.nodeName && (l = [], k.push(l), M = T), D && (y._x = y.offsetLeft, y._y = T, y._w = y.offsetWidth, y._h = y.offsetHeight), k && (R !== _ && A || (l.push(y), y._x -= z), _ && f && (v[f - 1]._wordEnd = !0)));
    }

    for (f = 0; j > f; f++) {
      y = v[f], _ = y.parentNode === t, "BR" !== y.nodeName ? (D && (b = y.style, R || _ || (y._x += y.parentNode._x, y._y += y.parentNode._y), b.left = y._x + "px", b.top = y._y + "px", b.position = "absolute", b.display = "block", b.width = y._w + 1 + "px", b.height = y._h + "px"), R ? _ ? s.push(y) : A && i.push(y) : _ ? (t.removeChild(y), v.splice(f--, 1), j--) : !_ && A && (T = !k && !D && y.nextSibling, t.appendChild(y), T || t.appendChild(n.createTextNode(" ")), i.push(y))) : k || D ? (t.removeChild(y), v.splice(f--, 1), j--) : R || t.appendChild(y);
    }

    if (k) {
      for (D && (w = n.createElement("div"), t.appendChild(w), x = w.offsetWidth + "px", T = w.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(w)), b = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) {
        t.removeChild(t.firstChild);
      }

      for (P = !D || !R && !A, f = 0; k.length > f; f++) {
        for (l = k[f], w = n.createElement("div"), w.style.cssText = "display:block;text-align:" + X + ";position:" + (D ? "absolute;" : "relative;"), Q && (w.className = Q + (V ? f + 1 : "")), o.push(w), j = l.length, d = 0; j > d; d++) {
          "BR" !== l[d].nodeName && (y = l[d], w.appendChild(y), P && (y._wordEnd || R) && w.appendChild(n.createTextNode(" ")), D && (0 === d && (w.style.top = y._y + "px", w.style.left = z + T + "px"), y.style.top = "0px", T && (y.style.left = y._x - T + "px")));
        }

        R || A || (w.innerHTML = r(w).split(String.fromCharCode(160)).join(" ")), D && (w.style.width = x, w.style.height = y._h + "px"), t.appendChild(w);
      }

      t.style.cssText = b;
    }

    D && (U > t.clientHeight && (t.style.height = U - N + "px", U > t.clientHeight && (t.style.height = U + I + "px")), B > t.clientWidth && (t.style.width = B - F + "px", B > t.clientWidth && (t.style.width = B + E + "px")));
  },
      v = d.prototype;

  v.split = function (t) {
    this.isSplit && this.revert(), this.vars = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;

    for (var e = 0; this.elements.length > e; e++) {
      this._originals[e] = this.elements[e].innerHTML, g(this.elements[e], this.vars, this.chars, this.words, this.lines);
    }

    return this.isSplit = !0, this;
  }, v.revert = function () {
    if (!this._originals) throw "revert() call wasn't scoped properly.";

    for (var t = this._originals.length; --t > -1;) {
      this.elements[t].innerHTML = this._originals[t];
    }

    return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this;
  }, d.selector = t.$ || t.jQuery || function (e) {
    return t.$ ? (d.selector = t.$, t.$(e)) : n ? n.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e;
  }, d.version = "0.2.4";
})(_gsScope), function (t) {
  "use strict";

  var e = function e() {
    return (_gsScope.GreenSockGlobals || _gsScope)[t];
  };

  "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (module.exports = e());
}("SplitText");
/*! Lazy Load 1.9.3 - MIT license - Copyright 2010-2013 Mika Tuupola */

!function (a, b, c, d) {
  var e = a(b);
  a.fn.lazyload = function (f) {
    function g() {
      var b = 0;
      i.each(function () {
        var c = a(this);
        if (!j.skip_invisible || c.is(":visible")) if (a.abovethetop(this, j) || a.leftofbegin(this, j)) ;else if (a.belowthefold(this, j) || a.rightoffold(this, j)) {
          if (++b > j.failure_limit) return !1;
        } else c.trigger("appear"), b = 0;
      });
    }

    var h,
        i = this,
        j = {
      threshold: 0,
      failure_limit: 0,
      event: "scroll",
      effect: "show",
      container: b,
      data_attribute: "original",
      skip_invisible: !0,
      appear: null,
      load: null,
      placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
    };
    return f && (d !== f.failurelimit && (f.failure_limit = f.failurelimit, delete f.failurelimit), d !== f.effectspeed && (f.effect_speed = f.effectspeed, delete f.effectspeed), a.extend(j, f)), h = j.container === d || j.container === b ? e : a(j.container), 0 === j.event.indexOf("scroll") && h.bind(j.event, function () {
      return g();
    }), this.each(function () {
      var b = this,
          c = a(b);
      b.loaded = !1, (c.attr("src") === d || c.attr("src") === !1) && c.is("img") && c.attr("src", j.placeholder), c.one("appear", function () {
        if (!this.loaded) {
          if (j.appear) {
            var d = i.length;
            j.appear.call(b, d, j);
          }

          a("<img />").bind("load", function () {
            var d = c.attr("data-" + j.data_attribute);
            c.hide(), c.is("img") ? c.attr("src", d) : c.css("background-image", "url('" + d + "')"), c[j.effect](j.effect_speed), b.loaded = !0;
            var e = a.grep(i, function (a) {
              return !a.loaded;
            });

            if (i = a(e), j.load) {
              var f = i.length;
              j.load.call(b, f, j);
            }
          }).attr("src", c.attr("data-" + j.data_attribute));
        }
      }), 0 !== j.event.indexOf("scroll") && c.bind(j.event, function () {
        b.loaded || c.trigger("appear");
      });
    }), e.bind("resize", function () {
      g();
    }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && e.bind("pageshow", function (b) {
      b.originalEvent && b.originalEvent.persisted && i.each(function () {
        a(this).trigger("appear");
      });
    }), a(c).ready(function () {
      g();
    }), this;
  }, a.belowthefold = function (c, f) {
    var g;
    return g = f.container === d || f.container === b ? (b.innerHeight ? b.innerHeight : e.height()) + e.scrollTop() : a(f.container).offset().top + a(f.container).height(), g <= a(c).offset().top - f.threshold;
  }, a.rightoffold = function (c, f) {
    var g;
    return g = f.container === d || f.container === b ? e.width() + e.scrollLeft() : a(f.container).offset().left + a(f.container).width(), g <= a(c).offset().left - f.threshold;
  }, a.abovethetop = function (c, f) {
    var g;
    return g = f.container === d || f.container === b ? e.scrollTop() : a(f.container).offset().top, g >= a(c).offset().top + f.threshold + a(c).height();
  }, a.leftofbegin = function (c, f) {
    var g;
    return g = f.container === d || f.container === b ? e.scrollLeft() : a(f.container).offset().left, g >= a(c).offset().left + f.threshold + a(c).width();
  }, a.inviewport = function (b, c) {
    return !(a.rightoffold(b, c) || a.leftofbegin(b, c) || a.belowthefold(b, c) || a.abovethetop(b, c));
  }, a.extend(a.expr[":"], {
    "below-the-fold": function belowTheFold(b) {
      return a.belowthefold(b, {
        threshold: 0
      });
    },
    "above-the-top": function aboveTheTop(b) {
      return !a.belowthefold(b, {
        threshold: 0
      });
    },
    "right-of-screen": function rightOfScreen(b) {
      return a.rightoffold(b, {
        threshold: 0
      });
    },
    "left-of-screen": function leftOfScreen(b) {
      return !a.rightoffold(b, {
        threshold: 0
      });
    },
    "in-viewport": function inViewport(b) {
      return a.inviewport(b, {
        threshold: 0
      });
    },
    "above-the-fold": function aboveTheFold(b) {
      return !a.belowthefold(b, {
        threshold: 0
      });
    },
    "right-of-fold": function rightOfFold(b) {
      return a.rightoffold(b, {
        threshold: 0
      });
    },
    "left-of-fold": function leftOfFold(b) {
      return !a.rightoffold(b, {
        threshold: 0
      });
    }
  });
}(jQuery, window, document);